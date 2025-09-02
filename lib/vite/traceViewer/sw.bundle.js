var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function splitProgress(progress, weights) {
  const doneList = new Array(weights.length).fill(0);
  return new Array(weights.length).fill(0).map((_, i) => {
    return (done, total) => {
      doneList[i] = done / total * weights[i] * 1e3;
      progress(doneList.reduce((a, b) => a + b, 0), 1e3);
    };
  });
}
const escaped = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function escapeHTMLAttribute(s) {
  return s.replace(/[&<>"']/ug, (char) => escaped[char]);
}
function escapeHTML(s) {
  return s.replace(/[&<]/ug, (char) => escaped[char]);
}
function findClosest(items, metric, target) {
  return items.find((item, index) => {
    if (index === items.length - 1)
      return true;
    const next = items[index + 1];
    return Math.abs(metric(item) - target) < Math.abs(metric(next) - target);
  });
}
function isNodeNameAttributesChildNodesSnapshot(n) {
  return Array.isArray(n) && typeof n[0] === "string";
}
function isSubtreeReferenceSnapshot(n) {
  return Array.isArray(n) && Array.isArray(n[0]);
}
class SnapshotRenderer {
  constructor(htmlCache, resources, snapshots, screencastFrames, index) {
    __publicField(this, "_htmlCache");
    __publicField(this, "_snapshots");
    __publicField(this, "_index");
    __publicField(this, "snapshotName");
    __publicField(this, "_resources");
    __publicField(this, "_snapshot");
    __publicField(this, "_callId");
    __publicField(this, "_screencastFrames");
    this._htmlCache = htmlCache;
    this._resources = resources;
    this._snapshots = snapshots;
    this._index = index;
    this._snapshot = snapshots[index];
    this._callId = snapshots[index].callId;
    this._screencastFrames = screencastFrames;
    this.snapshotName = snapshots[index].snapshotName;
  }
  snapshot() {
    return this._snapshots[this._index];
  }
  viewport() {
    return this._snapshots[this._index].viewport;
  }
  closestScreenshot() {
    var _a;
    const { wallTime, timestamp } = this.snapshot();
    const closestFrame = wallTime && ((_a = this._screencastFrames[0]) == null ? void 0 : _a.frameSwapWallTime) ? findClosest(this._screencastFrames, (frame) => frame.frameSwapWallTime, wallTime) : findClosest(this._screencastFrames, (frame) => frame.timestamp, timestamp);
    return closestFrame == null ? void 0 : closestFrame.sha1;
  }
  render() {
    const result = [];
    const visit = (n, snapshotIndex, parentTag, parentAttrs) => {
      if (typeof n === "string") {
        if (parentTag === "STYLE" || parentTag === "style")
          result.push(escapeURLsInStyleSheet(rewriteURLsInStyleSheetForCustomProtocol(n)));
        else
          result.push(escapeHTML(n));
        return;
      }
      if (isSubtreeReferenceSnapshot(n)) {
        const referenceIndex = snapshotIndex - n[0][0];
        if (referenceIndex >= 0 && referenceIndex <= snapshotIndex) {
          const nodes = snapshotNodes(this._snapshots[referenceIndex]);
          const nodeIndex = n[0][1];
          if (nodeIndex >= 0 && nodeIndex < nodes.length)
            return visit(nodes[nodeIndex], referenceIndex, parentTag, parentAttrs);
        }
      } else if (isNodeNameAttributesChildNodesSnapshot(n)) {
        const [name, nodeAttrs, ...children] = n;
        const nodeName = name === "NOSCRIPT" ? "X-NOSCRIPT" : name;
        const attrs = Object.entries(nodeAttrs || {});
        result.push("<", nodeName);
        const kCurrentSrcAttribute = "__playwright_current_src__";
        const isFrame = nodeName === "IFRAME" || nodeName === "FRAME";
        const isAnchor = nodeName === "A";
        const isImg = nodeName === "IMG";
        const isImgWithCurrentSrc = isImg && attrs.some((a) => a[0] === kCurrentSrcAttribute);
        const isSourceInsidePictureWithCurrentSrc = nodeName === "SOURCE" && parentTag === "PICTURE" && (parentAttrs == null ? void 0 : parentAttrs.some((a) => a[0] === kCurrentSrcAttribute));
        for (const [attr, value] of attrs) {
          let attrName = attr;
          if (isFrame && attr.toLowerCase() === "src") {
            attrName = "__playwright_src__";
          }
          if (isImg && attr === kCurrentSrcAttribute) {
            attrName = "src";
          }
          if (["src", "srcset"].includes(attr.toLowerCase()) && (isImgWithCurrentSrc || isSourceInsidePictureWithCurrentSrc)) {
            attrName = "_" + attrName;
          }
          let attrValue = value;
          if (isAnchor && attr.toLowerCase() === "href")
            attrValue = "link://" + value;
          else if (attr.toLowerCase() === "href" || attr.toLowerCase() === "src" || attr === kCurrentSrcAttribute)
            attrValue = rewriteURLForCustomProtocol(value);
          result.push(" ", attrName, '="', escapeHTMLAttribute(attrValue), '"');
        }
        result.push(">");
        for (const child of children)
          visit(child, snapshotIndex, nodeName, attrs);
        if (!autoClosing.has(nodeName))
          result.push("</", nodeName, ">");
        return;
      } else {
        return;
      }
    };
    const snapshot = this._snapshot;
    const html = this._htmlCache.getOrCompute(this, () => {
      visit(snapshot.html, this._index, void 0, void 0);
      const prefix = snapshot.doctype ? `<!DOCTYPE ${snapshot.doctype}>` : "";
      const html2 = prefix + [
        // Hide the document in order to prevent flickering. We will unhide once script has processed shadow.
        "<style>*,*::before,*::after { visibility: hidden }</style>",
        `<script>${snapshotScript(this.viewport(), this._callId, this.snapshotName)}<\/script>`
      ].join("") + result.join("");
      return { value: html2, size: html2.length };
    });
    return { html, pageId: snapshot.pageId, frameId: snapshot.frameId, index: this._index };
  }
  resourceByUrl(url, method) {
    const snapshot = this._snapshot;
    let sameFrameResource;
    let otherFrameResource;
    for (const resource of this._resources) {
      if (typeof resource._monotonicTime === "number" && resource._monotonicTime >= snapshot.timestamp)
        break;
      if (resource.response.status === 304) {
        continue;
      }
      if (resource.request.url === url && resource.request.method === method) {
        if (resource._frameref === snapshot.frameId)
          sameFrameResource = resource;
        else
          otherFrameResource = resource;
      }
    }
    let result = sameFrameResource ?? otherFrameResource;
    if (result && method.toUpperCase() === "GET") {
      for (const o of snapshot.resourceOverrides) {
        if (url === o.url && o.sha1) {
          result = {
            ...result,
            response: {
              ...result.response,
              content: {
                ...result.response.content,
                _sha1: o.sha1
              }
            }
          };
          break;
        }
      }
    }
    return result;
  }
}
const autoClosing = /* @__PURE__ */ new Set(["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "MENUITEM", "META", "PARAM", "SOURCE", "TRACK", "WBR"]);
function snapshotNodes(snapshot) {
  if (!snapshot._nodes) {
    const nodes = [];
    const visit = (n) => {
      if (typeof n === "string") {
        nodes.push(n);
      } else if (isNodeNameAttributesChildNodesSnapshot(n)) {
        const [, , ...children] = n;
        for (const child of children)
          visit(child);
        nodes.push(n);
      }
    };
    visit(snapshot.html);
    snapshot._nodes = nodes;
  }
  return snapshot._nodes;
}
function snapshotScript(viewport, ...targetIds) {
  function applyPlaywrightAttributes(unwrapPopoutUrl2, viewport2, ...targetIds2) {
    const searchParams = new URLSearchParams(location.search);
    const shouldPopulateCanvasFromScreenshot = searchParams.has("shouldPopulateCanvasFromScreenshot");
    const isUnderTest = searchParams.has("isUnderTest");
    const frameBoundingRectsInfo = {
      viewport: viewport2,
      frames: /* @__PURE__ */ new WeakMap()
    };
    window["__playwright_frame_bounding_rects__"] = frameBoundingRectsInfo;
    const kPointerWarningTitle = "Recorded click position in absolute coordinates did not match the center of the clicked element. This is likely due to a difference between the test runner and the trace viewer operating systems.";
    const scrollTops = [];
    const scrollLefts = [];
    const targetElements = [];
    const canvasElements = [];
    let topSnapshotWindow = window;
    while (topSnapshotWindow !== topSnapshotWindow.parent && !topSnapshotWindow.location.pathname.match(/\/page@[a-z0-9]+$/))
      topSnapshotWindow = topSnapshotWindow.parent;
    const visit = (root) => {
      for (const e of root.querySelectorAll(`[__playwright_scroll_top_]`))
        scrollTops.push(e);
      for (const e of root.querySelectorAll(`[__playwright_scroll_left_]`))
        scrollLefts.push(e);
      for (const element of root.querySelectorAll(`[__playwright_value_]`)) {
        const inputElement = element;
        if (inputElement.type !== "file")
          inputElement.value = inputElement.getAttribute("__playwright_value_");
        element.removeAttribute("__playwright_value_");
      }
      for (const element of root.querySelectorAll(`[__playwright_checked_]`)) {
        element.checked = element.getAttribute("__playwright_checked_") === "true";
        element.removeAttribute("__playwright_checked_");
      }
      for (const element of root.querySelectorAll(`[__playwright_selected_]`)) {
        element.selected = element.getAttribute("__playwright_selected_") === "true";
        element.removeAttribute("__playwright_selected_");
      }
      for (const element of root.querySelectorAll(`[__playwright_popover_open_]`)) {
        try {
          element.showPopover();
        } catch {
        }
        element.removeAttribute("__playwright_popover_open_");
      }
      for (const element of root.querySelectorAll(`[__playwright_dialog_open_]`)) {
        try {
          if (element.getAttribute("__playwright_dialog_open_") === "modal")
            element.showModal();
          else
            element.show();
        } catch {
        }
        element.removeAttribute("__playwright_dialog_open_");
      }
      for (const targetId of targetIds2) {
        for (const target of root.querySelectorAll(`[__playwright_target__="${targetId}"]`)) {
          const style = target.style;
          style.outline = "2px solid #006ab1";
          style.backgroundColor = "#6fa8dc7f";
          targetElements.push(target);
        }
      }
      for (const iframe of root.querySelectorAll("iframe, frame")) {
        const boundingRectJson = iframe.getAttribute("__playwright_bounding_rect__");
        iframe.removeAttribute("__playwright_bounding_rect__");
        const boundingRect = boundingRectJson ? JSON.parse(boundingRectJson) : void 0;
        if (boundingRect)
          frameBoundingRectsInfo.frames.set(iframe, { boundingRect, scrollLeft: 0, scrollTop: 0 });
        const src = iframe.getAttribute("__playwright_src__");
        if (!src) {
          iframe.setAttribute("src", 'data:text/html,<body style="background: #ddd"></body>');
        } else {
          const url = new URL(unwrapPopoutUrl2(window.location.href));
          const index = url.pathname.lastIndexOf("/snapshot/");
          if (index !== -1)
            url.pathname = url.pathname.substring(0, index + 1);
          url.pathname += src.substring(1);
          iframe.setAttribute("src", url.toString());
        }
      }
      {
        const body = root.querySelector(`body[__playwright_custom_elements__]`);
        if (body && window.customElements) {
          const customElements = (body.getAttribute("__playwright_custom_elements__") || "").split(",");
          for (const elementName of customElements)
            window.customElements.define(elementName, class extends HTMLElement {
            });
        }
      }
      for (const element of root.querySelectorAll(`template[__playwright_shadow_root_]`)) {
        const template = element;
        const shadowRoot = template.parentElement.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content);
        template.remove();
        visit(shadowRoot);
      }
      if ("adoptedStyleSheets" in root) {
        const adoptedSheets = [...root.adoptedStyleSheets];
        for (const element of root.querySelectorAll(`template[__playwright_style_sheet_]`)) {
          const template = element;
          const sheet = new CSSStyleSheet();
          sheet.replaceSync(template.getAttribute("__playwright_style_sheet_"));
          adoptedSheets.push(sheet);
        }
        root.adoptedStyleSheets = adoptedSheets;
      }
      canvasElements.push(...root.querySelectorAll("canvas"));
    };
    const onLoad = () => {
      window.removeEventListener("load", onLoad);
      for (const element of scrollTops) {
        element.scrollTop = +element.getAttribute("__playwright_scroll_top_");
        element.removeAttribute("__playwright_scroll_top_");
        if (frameBoundingRectsInfo.frames.has(element))
          frameBoundingRectsInfo.frames.get(element).scrollTop = element.scrollTop;
      }
      for (const element of scrollLefts) {
        element.scrollLeft = +element.getAttribute("__playwright_scroll_left_");
        element.removeAttribute("__playwright_scroll_left_");
        if (frameBoundingRectsInfo.frames.has(element))
          frameBoundingRectsInfo.frames.get(element).scrollLeft = element.scrollTop;
      }
      document.styleSheets[0].disabled = true;
      const search = new URL(window.location.href).searchParams;
      const isTopFrame = window === topSnapshotWindow;
      if (search.get("pointX") && search.get("pointY")) {
        const pointX = +search.get("pointX");
        const pointY = +search.get("pointY");
        const hasInputTarget = search.has("hasInputTarget");
        const hasTargetElements = targetElements.length > 0;
        const roots = document.documentElement ? [document.documentElement] : [];
        for (const target of hasTargetElements ? targetElements : roots) {
          const pointElement = document.createElement("x-pw-pointer");
          pointElement.style.position = "fixed";
          pointElement.style.backgroundColor = "#f44336";
          pointElement.style.width = "20px";
          pointElement.style.height = "20px";
          pointElement.style.borderRadius = "10px";
          pointElement.style.margin = "-10px 0 0 -10px";
          pointElement.style.zIndex = "2147483646";
          pointElement.style.display = "flex";
          pointElement.style.alignItems = "center";
          pointElement.style.justifyContent = "center";
          if (hasTargetElements) {
            const box = target.getBoundingClientRect();
            const centerX = box.left + box.width / 2;
            const centerY = box.top + box.height / 2;
            pointElement.style.left = centerX + "px";
            pointElement.style.top = centerY + "px";
            if (isTopFrame && (Math.abs(centerX - pointX) >= 10 || Math.abs(centerY - pointY) >= 10)) {
              const warningElement = document.createElement("x-pw-pointer-warning");
              warningElement.textContent = "⚠";
              warningElement.style.fontSize = "19px";
              warningElement.style.color = "white";
              warningElement.style.marginTop = "-3.5px";
              warningElement.style.userSelect = "none";
              pointElement.appendChild(warningElement);
              pointElement.setAttribute("title", kPointerWarningTitle);
            }
            document.documentElement.appendChild(pointElement);
          } else if (isTopFrame && !hasInputTarget) {
            pointElement.style.left = pointX + "px";
            pointElement.style.top = pointY + "px";
            document.documentElement.appendChild(pointElement);
          }
        }
      }
      if (canvasElements.length > 0) {
        let drawCheckerboard = function(context, canvas) {
          function createCheckerboardPattern() {
            const pattern = document.createElement("canvas");
            pattern.width = pattern.width / Math.floor(pattern.width / 24);
            pattern.height = pattern.height / Math.floor(pattern.height / 24);
            const context2 = pattern.getContext("2d");
            context2.fillStyle = "lightgray";
            context2.fillRect(0, 0, pattern.width, pattern.height);
            context2.fillStyle = "white";
            context2.fillRect(0, 0, pattern.width / 2, pattern.height / 2);
            context2.fillRect(pattern.width / 2, pattern.height / 2, pattern.width, pattern.height);
            return context2.createPattern(pattern, "repeat");
          }
          context.fillStyle = createCheckerboardPattern();
          context.fillRect(0, 0, canvas.width, canvas.height);
        };
        const img = new Image();
        img.onload = () => {
          var _a;
          for (const canvas of canvasElements) {
            const context = canvas.getContext("2d");
            const boundingRectAttribute = canvas.getAttribute("__playwright_bounding_rect__");
            canvas.removeAttribute("__playwright_bounding_rect__");
            if (!boundingRectAttribute)
              continue;
            let boundingRect;
            try {
              boundingRect = JSON.parse(boundingRectAttribute);
            } catch (e) {
              continue;
            }
            let currWindow = window;
            while (currWindow !== topSnapshotWindow) {
              const iframe = currWindow.frameElement;
              currWindow = currWindow.parent;
              const iframeInfo = (_a = currWindow["__playwright_frame_bounding_rects__"]) == null ? void 0 : _a.frames.get(iframe);
              if (!(iframeInfo == null ? void 0 : iframeInfo.boundingRect))
                break;
              const leftOffset = iframeInfo.boundingRect.left - iframeInfo.scrollLeft;
              const topOffset = iframeInfo.boundingRect.top - iframeInfo.scrollTop;
              boundingRect.left += leftOffset;
              boundingRect.top += topOffset;
              boundingRect.right += leftOffset;
              boundingRect.bottom += topOffset;
            }
            const { width, height } = topSnapshotWindow["__playwright_frame_bounding_rects__"].viewport;
            boundingRect.left = boundingRect.left / width;
            boundingRect.top = boundingRect.top / height;
            boundingRect.right = boundingRect.right / width;
            boundingRect.bottom = boundingRect.bottom / height;
            const partiallyUncaptured = boundingRect.right > 1 || boundingRect.bottom > 1;
            const fullyUncaptured = boundingRect.left > 1 || boundingRect.top > 1;
            if (fullyUncaptured) {
              canvas.title = `Playwright couldn't capture canvas contents because it's located outside the viewport.`;
              continue;
            }
            drawCheckerboard(context, canvas);
            if (shouldPopulateCanvasFromScreenshot) {
              context.drawImage(img, boundingRect.left * img.width, boundingRect.top * img.height, (boundingRect.right - boundingRect.left) * img.width, (boundingRect.bottom - boundingRect.top) * img.height, 0, 0, canvas.width, canvas.height);
              if (partiallyUncaptured)
                canvas.title = `Playwright couldn't capture full canvas contents because it's located partially outside the viewport.`;
              else
                canvas.title = `Canvas contents are displayed on a best-effort basis based on viewport screenshots taken during test execution.`;
            } else {
              canvas.title = "Canvas content display is disabled.";
            }
            if (isUnderTest)
              console.log(`canvas drawn:`, JSON.stringify([boundingRect.left, boundingRect.top, boundingRect.right - boundingRect.left, boundingRect.bottom - boundingRect.top].map((v) => Math.floor(v * 100))));
          }
        };
        img.onerror = () => {
          for (const canvas of canvasElements) {
            const context = canvas.getContext("2d");
            drawCheckerboard(context, canvas);
            canvas.title = `Playwright couldn't show canvas contents because the screenshot failed to load.`;
          }
        };
        img.src = location.href.replace("/snapshot", "/closest-screenshot");
      }
    };
    const onDOMContentLoaded = () => visit(document);
    window.addEventListener("load", onLoad);
    window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
  }
  return `
(${applyPlaywrightAttributes.toString()})(${unwrapPopoutUrl.toString()}, ${JSON.stringify(viewport)}${targetIds.map((id) => `, "${id}"`).join("")})`;
}
const schemas = ["about:", "blob:", "data:", "file:", "ftp:", "http:", "https:", "mailto:", "sftp:", "ws:", "wss:"];
const kLegacyBlobPrefix = "http://playwright.bloburl/#";
function rewriteURLForCustomProtocol(href) {
  if (href.startsWith(kLegacyBlobPrefix))
    href = href.substring(kLegacyBlobPrefix.length);
  try {
    const url = new URL(href);
    if (url.protocol === "javascript:" || url.protocol === "vbscript:")
      return "javascript:void(0)";
    const isBlob = url.protocol === "blob:";
    const isFile = url.protocol === "file:";
    if (!isBlob && !isFile && schemas.includes(url.protocol))
      return href;
    const prefix = "pw-" + url.protocol.slice(0, url.protocol.length - 1);
    if (!isFile)
      url.protocol = "https:";
    url.hostname = url.hostname ? `${prefix}--${url.hostname}` : prefix;
    if (isFile) {
      url.protocol = "https:";
    }
    return url.toString();
  } catch {
    return href;
  }
}
const urlInCSSRegex = /url\(['"]?([\w-]+:)\/\//ig;
function rewriteURLsInStyleSheetForCustomProtocol(text) {
  return text.replace(urlInCSSRegex, (match, protocol) => {
    const isBlob = protocol === "blob:";
    const isFile = protocol === "file:";
    if (!isBlob && !isFile && schemas.includes(protocol))
      return match;
    return match.replace(protocol + "//", `https://pw-${protocol.slice(0, -1)}--`);
  });
}
const urlToEscapeRegex1 = /url\(\s*'([^']*)'\s*\)/ig;
const urlToEscapeRegex2 = /url\(\s*"([^"]*)"\s*\)/ig;
function escapeURLsInStyleSheet(text) {
  const replacer = (match, url) => {
    if (url.includes("</"))
      return match.replace(url, encodeURI(url));
    return match;
  };
  return text.replace(urlToEscapeRegex1, replacer).replace(urlToEscapeRegex2, replacer);
}
function unwrapPopoutUrl(url) {
  const u = new URL(url);
  if (u.pathname.endsWith("/snapshot.html"))
    return u.searchParams.get("r");
  return url;
}
class SnapshotServer {
  constructor(snapshotStorage, resourceLoader) {
    __publicField(this, "_snapshotStorage");
    __publicField(this, "_resourceLoader");
    __publicField(this, "_snapshotIds", /* @__PURE__ */ new Map());
    this._snapshotStorage = snapshotStorage;
    this._resourceLoader = resourceLoader;
  }
  serveSnapshot(pageOrFrameId, searchParams, snapshotUrl) {
    const snapshot = this._snapshot(pageOrFrameId, searchParams);
    if (!snapshot)
      return new Response(null, { status: 404 });
    const renderedSnapshot = snapshot.render();
    this._snapshotIds.set(snapshotUrl, snapshot);
    return new Response(renderedSnapshot.html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
  async serveClosestScreenshot(pageOrFrameId, searchParams) {
    const snapshot = this._snapshot(pageOrFrameId, searchParams);
    const sha1 = snapshot == null ? void 0 : snapshot.closestScreenshot();
    if (!sha1)
      return new Response(null, { status: 404 });
    return new Response(await this._resourceLoader(sha1));
  }
  serveSnapshotInfo(pageOrFrameId, searchParams) {
    const snapshot = this._snapshot(pageOrFrameId, searchParams);
    return this._respondWithJson(snapshot ? {
      viewport: snapshot.viewport(),
      url: snapshot.snapshot().frameUrl,
      timestamp: snapshot.snapshot().timestamp,
      wallTime: snapshot.snapshot().wallTime
    } : {
      error: "No snapshot found"
    });
  }
  _snapshot(pageOrFrameId, params) {
    const name = params.get("name");
    return this._snapshotStorage.snapshotByName(pageOrFrameId, name);
  }
  _respondWithJson(object) {
    return new Response(JSON.stringify(object), {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=31536000",
        "Content-Type": "application/json"
      }
    });
  }
  async serveResource(requestUrlAlternatives, method, snapshotUrl) {
    let resource;
    const snapshot = this._snapshotIds.get(snapshotUrl);
    for (const requestUrl of requestUrlAlternatives) {
      resource = snapshot == null ? void 0 : snapshot.resourceByUrl(removeHash(requestUrl), method);
      if (resource)
        break;
    }
    if (!resource)
      return new Response(null, { status: 404 });
    const sha1 = resource.response.content._sha1;
    const content = sha1 ? await this._resourceLoader(sha1) || new Blob([]) : new Blob([]);
    let contentType = resource.response.content.mimeType;
    const isTextEncoding = /^text\/|^application\/(javascript|json)/.test(contentType);
    if (isTextEncoding && !contentType.includes("charset"))
      contentType = `${contentType}; charset=utf-8`;
    const headers = new Headers();
    if (contentType !== "x-unknown")
      headers.set("Content-Type", contentType);
    for (const { name, value } of resource.response.headers)
      headers.set(name, value);
    headers.delete("Content-Encoding");
    headers.delete("Access-Control-Allow-Origin");
    headers.set("Access-Control-Allow-Origin", "*");
    headers.delete("Content-Length");
    headers.set("Content-Length", String(content.size));
    headers.set("Cache-Control", "public, max-age=31536000");
    const { status } = resource.response;
    const isNullBodyStatus = status === 101 || status === 204 || status === 205 || status === 304;
    return new Response(isNullBodyStatus ? null : content, {
      headers,
      status: resource.response.status,
      statusText: resource.response.statusText
    });
  }
}
function removeHash(url) {
  try {
    const u = new URL(url);
    u.hash = "";
    return u.toString();
  } catch (e) {
    return url;
  }
}
function parseClientSideCallMetadata(data) {
  const result = /* @__PURE__ */ new Map();
  const { files, stacks } = data;
  for (const s of stacks) {
    const [id, ff] = s;
    result.set(`call@${id}`, ff.map((f) => ({ file: files[f[0]], line: f[1], column: f[2], function: f[3] })));
  }
  return result;
}
class LRUCache {
  constructor(maxSize) {
    __publicField(this, "_maxSize");
    __publicField(this, "_map");
    __publicField(this, "_size");
    this._maxSize = maxSize;
    this._map = /* @__PURE__ */ new Map();
    this._size = 0;
  }
  getOrCompute(key, compute) {
    if (this._map.has(key)) {
      const result2 = this._map.get(key);
      this._map.delete(key);
      this._map.set(key, result2);
      return result2.value;
    }
    const result = compute();
    while (this._map.size && this._size + result.size > this._maxSize) {
      const [firstKey, firstValue] = this._map.entries().next().value;
      this._size -= firstValue.size;
      this._map.delete(firstKey);
    }
    this._map.set(key, result);
    this._size += result.size;
    return result.value;
  }
}
class SnapshotStorage {
  constructor() {
    __publicField(this, "_frameSnapshots", /* @__PURE__ */ new Map());
    __publicField(this, "_cache", new LRUCache(1e8));
    // 100MB per each trace
    __publicField(this, "_contextToResources", /* @__PURE__ */ new Map());
  }
  addResource(contextId, resource) {
    resource.request.url = rewriteURLForCustomProtocol(resource.request.url);
    this._ensureResourcesForContext(contextId).push(resource);
  }
  addFrameSnapshot(contextId, snapshot, screencastFrames) {
    for (const override of snapshot.resourceOverrides)
      override.url = rewriteURLForCustomProtocol(override.url);
    let frameSnapshots = this._frameSnapshots.get(snapshot.frameId);
    if (!frameSnapshots) {
      frameSnapshots = {
        raw: [],
        renderers: []
      };
      this._frameSnapshots.set(snapshot.frameId, frameSnapshots);
      if (snapshot.isMainFrame)
        this._frameSnapshots.set(snapshot.pageId, frameSnapshots);
    }
    frameSnapshots.raw.push(snapshot);
    const resources = this._ensureResourcesForContext(contextId);
    const renderer = new SnapshotRenderer(this._cache, resources, frameSnapshots.raw, screencastFrames, frameSnapshots.raw.length - 1);
    frameSnapshots.renderers.push(renderer);
    return renderer;
  }
  snapshotByName(pageOrFrameId, snapshotName) {
    const snapshot = this._frameSnapshots.get(pageOrFrameId);
    return snapshot == null ? void 0 : snapshot.renderers.find((r) => r.snapshotName === snapshotName);
  }
  snapshotsForTest() {
    return [...this._frameSnapshots.keys()];
  }
  finalize() {
    for (const resources of this._contextToResources.values())
      resources.sort((a, b) => (a._monotonicTime || 0) - (b._monotonicTime || 0));
  }
  _ensureResourcesForContext(contextId) {
    let resources = this._contextToResources.get(contextId);
    if (!resources) {
      resources = [];
      this._contextToResources.set(contextId, resources);
    }
    return resources;
  }
}
class TraceVersionError extends Error {
  constructor(message) {
    super(message);
    this.name = "TraceVersionError";
  }
}
const latestVersion = 8;
class TraceModernizer {
  constructor(contextEntry, snapshotStorage) {
    __publicField(this, "_contextEntry");
    __publicField(this, "_snapshotStorage");
    __publicField(this, "_actionMap", /* @__PURE__ */ new Map());
    __publicField(this, "_version");
    __publicField(this, "_pageEntries", /* @__PURE__ */ new Map());
    __publicField(this, "_jsHandles", /* @__PURE__ */ new Map());
    __publicField(this, "_consoleObjects", /* @__PURE__ */ new Map());
    this._contextEntry = contextEntry;
    this._snapshotStorage = snapshotStorage;
  }
  appendTrace(trace) {
    for (const line of trace.split("\n"))
      this._appendEvent(line);
  }
  actions() {
    return [...this._actionMap.values()];
  }
  _pageEntry(pageId) {
    let pageEntry = this._pageEntries.get(pageId);
    if (!pageEntry) {
      pageEntry = {
        pageId,
        screencastFrames: []
      };
      this._pageEntries.set(pageId, pageEntry);
      this._contextEntry.pages.push(pageEntry);
    }
    return pageEntry;
  }
  _appendEvent(line) {
    if (!line)
      return;
    const events = this._modernize(JSON.parse(line));
    for (const event of events)
      this._innerAppendEvent(event);
  }
  _innerAppendEvent(event) {
    const contextEntry = this._contextEntry;
    switch (event.type) {
      case "context-options": {
        if (event.version > latestVersion)
          throw new TraceVersionError("The trace was created by a newer version of Playwright and is not supported by this version of the viewer. Please use latest Playwright to open the trace.");
        this._version = event.version;
        contextEntry.origin = event.origin;
        contextEntry.browserName = event.browserName;
        contextEntry.channel = event.channel;
        contextEntry.title = event.title;
        contextEntry.platform = event.platform;
        contextEntry.wallTime = event.wallTime;
        contextEntry.startTime = event.monotonicTime;
        contextEntry.sdkLanguage = event.sdkLanguage;
        contextEntry.options = event.options;
        contextEntry.testIdAttributeName = event.testIdAttributeName;
        contextEntry.contextId = event.contextId ?? "";
        break;
      }
      case "screencast-frame": {
        this._pageEntry(event.pageId).screencastFrames.push(event);
        break;
      }
      case "before": {
        this._actionMap.set(event.callId, { ...event, type: "action", endTime: 0, log: [] });
        break;
      }
      case "input": {
        const existing = this._actionMap.get(event.callId);
        existing.inputSnapshot = event.inputSnapshot;
        existing.point = event.point;
        break;
      }
      case "log": {
        const existing = this._actionMap.get(event.callId);
        if (!existing)
          return;
        existing.log.push({
          time: event.time,
          message: event.message
        });
        break;
      }
      case "after": {
        const existing = this._actionMap.get(event.callId);
        existing.afterSnapshot = event.afterSnapshot;
        existing.endTime = event.endTime;
        existing.result = event.result;
        existing.error = event.error;
        existing.attachments = event.attachments;
        existing.annotations = event.annotations;
        if (event.point)
          existing.point = event.point;
        break;
      }
      case "action": {
        this._actionMap.set(event.callId, { ...event, log: [] });
        break;
      }
      case "event": {
        contextEntry.events.push(event);
        break;
      }
      case "stdout": {
        contextEntry.stdio.push(event);
        break;
      }
      case "stderr": {
        contextEntry.stdio.push(event);
        break;
      }
      case "error": {
        contextEntry.errors.push(event);
        break;
      }
      case "console": {
        contextEntry.events.push(event);
        break;
      }
      case "resource-snapshot":
        this._snapshotStorage.addResource(this._contextEntry.contextId, event.snapshot);
        contextEntry.resources.push(event.snapshot);
        break;
      case "frame-snapshot":
        this._snapshotStorage.addFrameSnapshot(this._contextEntry.contextId, event.snapshot, this._pageEntry(event.snapshot.pageId).screencastFrames);
        break;
    }
    if ("pageId" in event && event.pageId)
      this._pageEntry(event.pageId);
    if (event.type === "action" || event.type === "before")
      contextEntry.startTime = Math.min(contextEntry.startTime, event.startTime);
    if (event.type === "action" || event.type === "after")
      contextEntry.endTime = Math.max(contextEntry.endTime, event.endTime);
    if (event.type === "event") {
      contextEntry.startTime = Math.min(contextEntry.startTime, event.time);
      contextEntry.endTime = Math.max(contextEntry.endTime, event.time);
    }
    if (event.type === "screencast-frame") {
      contextEntry.startTime = Math.min(contextEntry.startTime, event.timestamp);
      contextEntry.endTime = Math.max(contextEntry.endTime, event.timestamp);
    }
  }
  _processedContextCreatedEvent() {
    return this._version !== void 0;
  }
  _modernize(event) {
    let version = this._version ?? event.version ?? 6;
    let events = [event];
    for (; version < latestVersion; ++version)
      events = this[`_modernize_${version}_to_${version + 1}`].call(this, events);
    return events;
  }
  _modernize_0_to_1(events) {
    for (const event of events) {
      if (event.type !== "action")
        continue;
      if (typeof event.metadata.error === "string")
        event.metadata.error = { error: { name: "Error", message: event.metadata.error } };
    }
    return events;
  }
  _modernize_1_to_2(events) {
    var _a;
    for (const event of events) {
      if (event.type !== "frame-snapshot" || !event.snapshot.isMainFrame)
        continue;
      event.snapshot.viewport = ((_a = this._contextEntry.options) == null ? void 0 : _a.viewport) || { width: 1280, height: 720 };
    }
    return events;
  }
  _modernize_2_to_3(events) {
    for (const event of events) {
      if (event.type !== "resource-snapshot" || event.snapshot.request)
        continue;
      const resource = event.snapshot;
      event.snapshot = {
        _frameref: resource.frameId,
        request: {
          url: resource.url,
          method: resource.method,
          headers: resource.requestHeaders,
          postData: resource.requestSha1 ? { _sha1: resource.requestSha1 } : void 0
        },
        response: {
          status: resource.status,
          headers: resource.responseHeaders,
          content: {
            mimeType: resource.contentType,
            _sha1: resource.responseSha1
          }
        },
        _monotonicTime: resource.timestamp
      };
    }
    return events;
  }
  _modernize_3_to_4(events) {
    const result = [];
    for (const event of events) {
      const e = this._modernize_event_3_to_4(event);
      if (e)
        result.push(e);
    }
    return result;
  }
  _modernize_event_3_to_4(event) {
    var _a, _b, _c, _d;
    if (event.type !== "action" && event.type !== "event") {
      return event;
    }
    const metadata = event.metadata;
    if (metadata.internal || metadata.method.startsWith("tracing"))
      return null;
    if (event.type === "event") {
      if (metadata.method === "__create__" && metadata.type === "ConsoleMessage") {
        return {
          type: "object",
          class: metadata.type,
          guid: metadata.params.guid,
          initializer: metadata.params.initializer
        };
      }
      return {
        type: "event",
        time: metadata.startTime,
        class: metadata.type,
        method: metadata.method,
        params: metadata.params,
        pageId: metadata.pageId
      };
    }
    return {
      type: "action",
      callId: metadata.id,
      startTime: metadata.startTime,
      endTime: metadata.endTime,
      apiName: metadata.apiName || metadata.type + "." + metadata.method,
      class: metadata.type,
      method: metadata.method,
      params: metadata.params,
      wallTime: metadata.wallTime || Date.now(),
      log: metadata.log,
      beforeSnapshot: (_a = metadata.snapshots.find((s) => s.title === "before")) == null ? void 0 : _a.snapshotName,
      inputSnapshot: (_b = metadata.snapshots.find((s) => s.title === "input")) == null ? void 0 : _b.snapshotName,
      afterSnapshot: (_c = metadata.snapshots.find((s) => s.title === "after")) == null ? void 0 : _c.snapshotName,
      error: (_d = metadata.error) == null ? void 0 : _d.error,
      result: metadata.result,
      point: metadata.point,
      pageId: metadata.pageId
    };
  }
  _modernize_4_to_5(events) {
    const result = [];
    for (const event of events) {
      const e = this._modernize_event_4_to_5(event);
      if (e)
        result.push(e);
    }
    return result;
  }
  _modernize_event_4_to_5(event) {
    var _a, _b;
    if (event.type === "event" && event.method === "__create__" && event.class === "JSHandle")
      this._jsHandles.set(event.params.guid, event.params.initializer);
    if (event.type === "object") {
      if (event.class !== "ConsoleMessage")
        return null;
      const args = (_a = event.initializer.args) == null ? void 0 : _a.map((arg) => {
        if (arg.guid) {
          const handle = this._jsHandles.get(arg.guid);
          return { preview: (handle == null ? void 0 : handle.preview) || "", value: "" };
        }
        return { preview: arg.preview || "", value: arg.value || "" };
      });
      this._consoleObjects.set(event.guid, {
        type: event.initializer.type,
        text: event.initializer.text,
        location: event.initializer.location,
        args
      });
      return null;
    }
    if (event.type === "event" && event.method === "console") {
      const consoleMessage = this._consoleObjects.get(((_b = event.params.message) == null ? void 0 : _b.guid) || "");
      if (!consoleMessage)
        return null;
      return {
        type: "console",
        time: event.time,
        pageId: event.pageId,
        messageType: consoleMessage.type,
        text: consoleMessage.text,
        args: consoleMessage.args,
        location: consoleMessage.location
      };
    }
    return event;
  }
  _modernize_5_to_6(events) {
    const result = [];
    for (const event of events) {
      result.push(event);
      if (event.type !== "after" || !event.log.length)
        continue;
      for (const log of event.log) {
        result.push({
          type: "log",
          callId: event.callId,
          message: log,
          time: -1
        });
      }
    }
    return result;
  }
  _modernize_6_to_7(events) {
    const result = [];
    if (!this._processedContextCreatedEvent() && events[0].type !== "context-options") {
      const event = {
        type: "context-options",
        origin: "testRunner",
        version: 6,
        browserName: "",
        options: {},
        platform: "unknown",
        wallTime: 0,
        monotonicTime: 0,
        sdkLanguage: "javascript",
        contextId: ""
      };
      result.push(event);
    }
    for (const event of events) {
      if (event.type === "context-options") {
        result.push({ ...event, monotonicTime: 0, origin: "library", contextId: "" });
        continue;
      }
      if (event.type === "before" || event.type === "action") {
        if (!this._contextEntry.wallTime)
          this._contextEntry.wallTime = event.wallTime;
        const eventAsV6 = event;
        const eventAsV7 = event;
        eventAsV7.stepId = `${eventAsV6.apiName}@${eventAsV6.wallTime}`;
        result.push(eventAsV7);
      } else {
        result.push(event);
      }
    }
    return result;
  }
  _modernize_7_to_8(events) {
    const result = [];
    for (const event of events) {
      if (event.type === "before" || event.type === "action") {
        const eventAsV7 = event;
        const eventAsV8 = event;
        if (eventAsV7.apiName) {
          eventAsV8.title = eventAsV7.apiName;
          delete eventAsV8.apiName;
        }
        eventAsV8.stepId = eventAsV7.stepId ?? eventAsV7.callId;
        result.push(eventAsV8);
      } else {
        result.push(event);
      }
    }
    return result;
  }
}
class TraceModel {
  constructor() {
    __publicField(this, "contextEntries", []);
    __publicField(this, "_snapshotStorage");
    __publicField(this, "_backend");
    __publicField(this, "_resourceToContentType", /* @__PURE__ */ new Map());
  }
  async load(backend, unzipProgress) {
    var _a, _b;
    this._backend = backend;
    const ordinals = [];
    let hasSource = false;
    for (const entryName of await this._backend.entryNames()) {
      const match = entryName.match(/(.+)\.trace$/);
      if (match)
        ordinals.push(match[1] || "");
      if (entryName.includes("src@"))
        hasSource = true;
    }
    if (!ordinals.length)
      throw new Error("Cannot find .trace file");
    this._snapshotStorage = new SnapshotStorage();
    const total = ordinals.length * 3;
    let done = 0;
    for (const ordinal of ordinals) {
      const contextEntry = createEmptyContext();
      contextEntry.traceUrl = backend.traceURL();
      contextEntry.hasSource = hasSource;
      const modernizer = new TraceModernizer(contextEntry, this._snapshotStorage);
      const trace = await this._backend.readText(ordinal + ".trace") || "";
      modernizer.appendTrace(trace);
      unzipProgress(++done, total);
      const network = await this._backend.readText(ordinal + ".network") || "";
      modernizer.appendTrace(network);
      unzipProgress(++done, total);
      contextEntry.actions = modernizer.actions().sort((a1, a2) => a1.startTime - a2.startTime);
      if (!backend.isLive()) {
        for (const action of contextEntry.actions.slice().reverse()) {
          if (!action.endTime && !action.error) {
            for (const a of contextEntry.actions) {
              if (a.parentId === action.callId && action.endTime < a.endTime)
                action.endTime = a.endTime;
            }
          }
        }
      }
      const stacks = await this._backend.readText(ordinal + ".stacks");
      if (stacks) {
        const callMetadata = parseClientSideCallMetadata(JSON.parse(stacks));
        for (const action of contextEntry.actions)
          action.stack = action.stack || callMetadata.get(action.callId);
      }
      unzipProgress(++done, total);
      for (const resource of contextEntry.resources) {
        if ((_a = resource.request.postData) == null ? void 0 : _a._sha1)
          this._resourceToContentType.set(resource.request.postData._sha1, stripEncodingFromContentType(resource.request.postData.mimeType));
        if ((_b = resource.response.content) == null ? void 0 : _b._sha1)
          this._resourceToContentType.set(resource.response.content._sha1, stripEncodingFromContentType(resource.response.content.mimeType));
      }
      this.contextEntries.push(contextEntry);
    }
    this._snapshotStorage.finalize();
  }
  async hasEntry(filename) {
    return this._backend.hasEntry(filename);
  }
  async resourceForSha1(sha1) {
    const blob = await this._backend.readBlob("resources/" + sha1);
    const contentType = this._resourceToContentType.get(sha1);
    if (!blob || contentType === void 0 || contentType === "x-unknown")
      return blob;
    return new Blob([blob], { type: contentType });
  }
  storage() {
    return this._snapshotStorage;
  }
}
function stripEncodingFromContentType(contentType) {
  const charset = contentType.match(/^(.*);\s*charset=.*$/);
  if (charset)
    return charset[1];
  return contentType;
}
function createEmptyContext() {
  return {
    origin: "testRunner",
    traceUrl: "",
    startTime: Number.MAX_SAFE_INTEGER,
    wallTime: Number.MAX_SAFE_INTEGER,
    endTime: 0,
    browserName: "",
    options: {
      deviceScaleFactor: 1,
      isMobile: false,
      viewport: { width: 1280, height: 800 }
    },
    pages: [],
    resources: [],
    actions: [],
    events: [],
    errors: [],
    stdio: [],
    hasSource: false,
    contextId: ""
  };
}
const MAX_BITS = 15;
const Z_OK = 0;
const Z_STREAM_END = 1;
const Z_NEED_DICT = 2;
const Z_STREAM_ERROR = -2;
const Z_DATA_ERROR = -3;
const Z_MEM_ERROR = -4;
const Z_BUF_ERROR = -5;
const inflate_mask = [
  0,
  1,
  3,
  7,
  15,
  31,
  63,
  127,
  255,
  511,
  1023,
  2047,
  4095,
  8191,
  16383,
  32767,
  65535
];
const MANY = 1440;
const Z_NO_FLUSH = 0;
const Z_FINISH = 4;
const fixed_bl = 9;
const fixed_bd = 5;
const fixed_tl = [
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  192,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  160,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  224,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  144,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  208,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  176,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  240,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  200,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  168,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  232,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  152,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  216,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  184,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  248,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  196,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  164,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  228,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  148,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  212,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  180,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  244,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  204,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  172,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  236,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  156,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  220,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  188,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  252,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  194,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  162,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  226,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  146,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  210,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  178,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  242,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  202,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  170,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  234,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  154,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  218,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  186,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  250,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  198,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  166,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  230,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  150,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  214,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  182,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  246,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  206,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  174,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  238,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  158,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  222,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  190,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  254,
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  193,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  161,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  225,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  145,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  209,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  177,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  241,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  201,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  169,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  233,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  153,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  217,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  185,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  249,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  197,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  165,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  229,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  149,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  213,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  181,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  245,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  205,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  173,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  237,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  157,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  221,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  189,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  253,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  195,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  163,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  227,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  147,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  211,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  179,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  243,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  203,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  171,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  235,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  155,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  219,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  187,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  251,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  199,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  167,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  231,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  151,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  215,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  183,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  247,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  207,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  175,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  239,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  159,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  223,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  191,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  255
];
const fixed_td = [
  80,
  5,
  1,
  87,
  5,
  257,
  83,
  5,
  17,
  91,
  5,
  4097,
  81,
  5,
  5,
  89,
  5,
  1025,
  85,
  5,
  65,
  93,
  5,
  16385,
  80,
  5,
  3,
  88,
  5,
  513,
  84,
  5,
  33,
  92,
  5,
  8193,
  82,
  5,
  9,
  90,
  5,
  2049,
  86,
  5,
  129,
  192,
  5,
  24577,
  80,
  5,
  2,
  87,
  5,
  385,
  83,
  5,
  25,
  91,
  5,
  6145,
  81,
  5,
  7,
  89,
  5,
  1537,
  85,
  5,
  97,
  93,
  5,
  24577,
  80,
  5,
  4,
  88,
  5,
  769,
  84,
  5,
  49,
  92,
  5,
  12289,
  82,
  5,
  13,
  90,
  5,
  3073,
  86,
  5,
  193,
  192,
  5,
  24577
];
const cplens = [
  // Copy lengths for literal codes 257..285
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
];
const cplext = [
  // Extra bits for literal codes 257..285
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  112,
  112
  // 112==invalid
];
const cpdist = [
  // Copy offsets for distance codes 0..29
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577
];
const cpdext = [
  // Extra bits for distance codes
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13
];
const BMAX = 15;
function InfTree() {
  const that = this;
  let hn;
  let v;
  let c;
  let r;
  let u;
  let x;
  function huft_build(b, bindex, n, s, d, e, t, m, hp, hn2, v2) {
    let a;
    let f;
    let g;
    let h;
    let i;
    let j;
    let k;
    let l;
    let mask;
    let p;
    let q;
    let w;
    let xp;
    let y;
    let z;
    p = 0;
    i = n;
    do {
      c[b[bindex + p]]++;
      p++;
      i--;
    } while (i !== 0);
    if (c[0] == n) {
      t[0] = -1;
      m[0] = 0;
      return Z_OK;
    }
    l = m[0];
    for (j = 1; j <= BMAX; j++)
      if (c[j] !== 0)
        break;
    k = j;
    if (l < j) {
      l = j;
    }
    for (i = BMAX; i !== 0; i--) {
      if (c[i] !== 0)
        break;
    }
    g = i;
    if (l > i) {
      l = i;
    }
    m[0] = l;
    for (y = 1 << j; j < i; j++, y <<= 1) {
      if ((y -= c[j]) < 0) {
        return Z_DATA_ERROR;
      }
    }
    if ((y -= c[i]) < 0) {
      return Z_DATA_ERROR;
    }
    c[i] += y;
    x[1] = j = 0;
    p = 1;
    xp = 2;
    while (--i !== 0) {
      x[xp] = j += c[p];
      xp++;
      p++;
    }
    i = 0;
    p = 0;
    do {
      if ((j = b[bindex + p]) !== 0) {
        v2[x[j]++] = i;
      }
      p++;
    } while (++i < n);
    n = x[g];
    x[0] = i = 0;
    p = 0;
    h = -1;
    w = -l;
    u[0] = 0;
    q = 0;
    z = 0;
    for (; k <= g; k++) {
      a = c[k];
      while (a-- !== 0) {
        while (k > w + l) {
          h++;
          w += l;
          z = g - w;
          z = z > l ? l : z;
          if ((f = 1 << (j = k - w)) > a + 1) {
            f -= a + 1;
            xp = k;
            if (j < z) {
              while (++j < z) {
                if ((f <<= 1) <= c[++xp])
                  break;
                f -= c[xp];
              }
            }
          }
          z = 1 << j;
          if (hn2[0] + z > MANY) {
            return Z_DATA_ERROR;
          }
          u[h] = q = /* hp+ */
          hn2[0];
          hn2[0] += z;
          if (h !== 0) {
            x[h] = i;
            r[0] = /* (byte) */
            j;
            r[1] = /* (byte) */
            l;
            j = i >>> w - l;
            r[2] = /* (int) */
            q - u[h - 1] - j;
            hp.set(r, (u[h - 1] + j) * 3);
          } else {
            t[0] = q;
          }
        }
        r[1] = /* (byte) */
        k - w;
        if (p >= n) {
          r[0] = 128 + 64;
        } else if (v2[p] < s) {
          r[0] = /* (byte) */
          v2[p] < 256 ? 0 : 32 + 64;
          r[2] = v2[p++];
        } else {
          r[0] = /* (byte) */
          e[v2[p] - s] + 16 + 64;
          r[2] = d[v2[p++] - s];
        }
        f = 1 << k - w;
        for (j = i >>> w; j < z; j += f) {
          hp.set(r, (q + j) * 3);
        }
        for (j = 1 << k - 1; (i & j) !== 0; j >>>= 1) {
          i ^= j;
        }
        i ^= j;
        mask = (1 << w) - 1;
        while ((i & mask) != x[h]) {
          h--;
          w -= l;
          mask = (1 << w) - 1;
        }
      }
    }
    return y !== 0 && g != 1 ? Z_BUF_ERROR : Z_OK;
  }
  function initWorkArea(vsize) {
    let i;
    if (!hn) {
      hn = [];
      v = [];
      c = new Int32Array(BMAX + 1);
      r = [];
      u = new Int32Array(BMAX);
      x = new Int32Array(BMAX + 1);
    }
    if (v.length < vsize) {
      v = [];
    }
    for (i = 0; i < vsize; i++) {
      v[i] = 0;
    }
    for (i = 0; i < BMAX + 1; i++) {
      c[i] = 0;
    }
    for (i = 0; i < 3; i++) {
      r[i] = 0;
    }
    u.set(c.subarray(0, BMAX), 0);
    x.set(c.subarray(0, BMAX + 1), 0);
  }
  that.inflate_trees_bits = function(c2, bb, tb, hp, z) {
    let result;
    initWorkArea(19);
    hn[0] = 0;
    result = huft_build(c2, 0, 19, 19, null, null, tb, bb, hp, hn, v);
    if (result == Z_DATA_ERROR) {
      z.msg = "oversubscribed dynamic bit lengths tree";
    } else if (result == Z_BUF_ERROR || bb[0] === 0) {
      z.msg = "incomplete dynamic bit lengths tree";
      result = Z_DATA_ERROR;
    }
    return result;
  };
  that.inflate_trees_dynamic = function(nl, nd, c2, bl, bd, tl, td, hp, z) {
    let result;
    initWorkArea(288);
    hn[0] = 0;
    result = huft_build(c2, 0, nl, 257, cplens, cplext, tl, bl, hp, hn, v);
    if (result != Z_OK || bl[0] === 0) {
      if (result == Z_DATA_ERROR) {
        z.msg = "oversubscribed literal/length tree";
      } else if (result != Z_MEM_ERROR) {
        z.msg = "incomplete literal/length tree";
        result = Z_DATA_ERROR;
      }
      return result;
    }
    initWorkArea(288);
    result = huft_build(c2, nl, nd, 0, cpdist, cpdext, td, bd, hp, hn, v);
    if (result != Z_OK || bd[0] === 0 && nl > 257) {
      if (result == Z_DATA_ERROR) {
        z.msg = "oversubscribed distance tree";
      } else if (result == Z_BUF_ERROR) {
        z.msg = "incomplete distance tree";
        result = Z_DATA_ERROR;
      } else if (result != Z_MEM_ERROR) {
        z.msg = "empty distance tree with lengths";
        result = Z_DATA_ERROR;
      }
      return result;
    }
    return Z_OK;
  };
}
InfTree.inflate_trees_fixed = function(bl, bd, tl, td) {
  bl[0] = fixed_bl;
  bd[0] = fixed_bd;
  tl[0] = fixed_tl;
  td[0] = fixed_td;
  return Z_OK;
};
const START = 0;
const LEN = 1;
const LENEXT = 2;
const DIST = 3;
const DISTEXT = 4;
const COPY = 5;
const LIT = 6;
const WASH = 7;
const END = 8;
const BADCODE = 9;
function InfCodes() {
  const that = this;
  let mode2;
  let len = 0;
  let tree;
  let tree_index = 0;
  let need = 0;
  let lit = 0;
  let get = 0;
  let dist = 0;
  let lbits = 0;
  let dbits = 0;
  let ltree;
  let ltree_index = 0;
  let dtree;
  let dtree_index = 0;
  function inflate_fast(bl, bd, tl, tl_index, td, td_index, s, z) {
    let t;
    let tp;
    let tp_index;
    let e;
    let b;
    let k;
    let p;
    let n;
    let q;
    let m;
    let ml;
    let md;
    let c;
    let d;
    let r;
    let tp_index_t_3;
    p = z.next_in_index;
    n = z.avail_in;
    b = s.bitb;
    k = s.bitk;
    q = s.write;
    m = q < s.read ? s.read - q - 1 : s.end - q;
    ml = inflate_mask[bl];
    md = inflate_mask[bd];
    do {
      while (k < 20) {
        n--;
        b |= (z.read_byte(p++) & 255) << k;
        k += 8;
      }
      t = b & ml;
      tp = tl;
      tp_index = tl_index;
      tp_index_t_3 = (tp_index + t) * 3;
      if ((e = tp[tp_index_t_3]) === 0) {
        b >>= tp[tp_index_t_3 + 1];
        k -= tp[tp_index_t_3 + 1];
        s.win[q++] = /* (byte) */
        tp[tp_index_t_3 + 2];
        m--;
        continue;
      }
      do {
        b >>= tp[tp_index_t_3 + 1];
        k -= tp[tp_index_t_3 + 1];
        if ((e & 16) !== 0) {
          e &= 15;
          c = tp[tp_index_t_3 + 2] + /* (int) */
          (b & inflate_mask[e]);
          b >>= e;
          k -= e;
          while (k < 15) {
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          t = b & md;
          tp = td;
          tp_index = td_index;
          tp_index_t_3 = (tp_index + t) * 3;
          e = tp[tp_index_t_3];
          do {
            b >>= tp[tp_index_t_3 + 1];
            k -= tp[tp_index_t_3 + 1];
            if ((e & 16) !== 0) {
              e &= 15;
              while (k < e) {
                n--;
                b |= (z.read_byte(p++) & 255) << k;
                k += 8;
              }
              d = tp[tp_index_t_3 + 2] + (b & inflate_mask[e]);
              b >>= e;
              k -= e;
              m -= c;
              if (q >= d) {
                r = q - d;
                if (q - r > 0 && 2 > q - r) {
                  s.win[q++] = s.win[r++];
                  s.win[q++] = s.win[r++];
                  c -= 2;
                } else {
                  s.win.set(s.win.subarray(r, r + 2), q);
                  q += 2;
                  r += 2;
                  c -= 2;
                }
              } else {
                r = q - d;
                do {
                  r += s.end;
                } while (r < 0);
                e = s.end - r;
                if (c > e) {
                  c -= e;
                  if (q - r > 0 && e > q - r) {
                    do {
                      s.win[q++] = s.win[r++];
                    } while (--e !== 0);
                  } else {
                    s.win.set(s.win.subarray(r, r + e), q);
                    q += e;
                    r += e;
                    e = 0;
                  }
                  r = 0;
                }
              }
              if (q - r > 0 && c > q - r) {
                do {
                  s.win[q++] = s.win[r++];
                } while (--c !== 0);
              } else {
                s.win.set(s.win.subarray(r, r + c), q);
                q += c;
                r += c;
                c = 0;
              }
              break;
            } else if ((e & 64) === 0) {
              t += tp[tp_index_t_3 + 2];
              t += b & inflate_mask[e];
              tp_index_t_3 = (tp_index + t) * 3;
              e = tp[tp_index_t_3];
            } else {
              z.msg = "invalid distance code";
              c = z.avail_in - n;
              c = k >> 3 < c ? k >> 3 : c;
              n += c;
              p -= c;
              k -= c << 3;
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return Z_DATA_ERROR;
            }
          } while (true);
          break;
        }
        if ((e & 64) === 0) {
          t += tp[tp_index_t_3 + 2];
          t += b & inflate_mask[e];
          tp_index_t_3 = (tp_index + t) * 3;
          if ((e = tp[tp_index_t_3]) === 0) {
            b >>= tp[tp_index_t_3 + 1];
            k -= tp[tp_index_t_3 + 1];
            s.win[q++] = /* (byte) */
            tp[tp_index_t_3 + 2];
            m--;
            break;
          }
        } else if ((e & 32) !== 0) {
          c = z.avail_in - n;
          c = k >> 3 < c ? k >> 3 : c;
          n += c;
          p -= c;
          k -= c << 3;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return Z_STREAM_END;
        } else {
          z.msg = "invalid literal/length code";
          c = z.avail_in - n;
          c = k >> 3 < c ? k >> 3 : c;
          n += c;
          p -= c;
          k -= c << 3;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return Z_DATA_ERROR;
        }
      } while (true);
    } while (m >= 258 && n >= 10);
    c = z.avail_in - n;
    c = k >> 3 < c ? k >> 3 : c;
    n += c;
    p -= c;
    k -= c << 3;
    s.bitb = b;
    s.bitk = k;
    z.avail_in = n;
    z.total_in += p - z.next_in_index;
    z.next_in_index = p;
    s.write = q;
    return Z_OK;
  }
  that.init = function(bl, bd, tl, tl_index, td, td_index) {
    mode2 = START;
    lbits = /* (byte) */
    bl;
    dbits = /* (byte) */
    bd;
    ltree = tl;
    ltree_index = tl_index;
    dtree = td;
    dtree_index = td_index;
    tree = null;
  };
  that.proc = function(s, z, r) {
    let j;
    let tindex;
    let e;
    let b = 0;
    let k = 0;
    let p = 0;
    let n;
    let q;
    let m;
    let f;
    p = z.next_in_index;
    n = z.avail_in;
    b = s.bitb;
    k = s.bitk;
    q = s.write;
    m = q < s.read ? s.read - q - 1 : s.end - q;
    while (true) {
      switch (mode2) {
        // waiting for "i:"=input, "o:"=output, "x:"=nothing
        case START:
          if (m >= 258 && n >= 10) {
            s.bitb = b;
            s.bitk = k;
            z.avail_in = n;
            z.total_in += p - z.next_in_index;
            z.next_in_index = p;
            s.write = q;
            r = inflate_fast(lbits, dbits, ltree, ltree_index, dtree, dtree_index, s, z);
            p = z.next_in_index;
            n = z.avail_in;
            b = s.bitb;
            k = s.bitk;
            q = s.write;
            m = q < s.read ? s.read - q - 1 : s.end - q;
            if (r != Z_OK) {
              mode2 = r == Z_STREAM_END ? WASH : BADCODE;
              break;
            }
          }
          need = lbits;
          tree = ltree;
          tree_index = ltree_index;
          mode2 = LEN;
        /* falls through */
        case LEN:
          j = need;
          while (k < j) {
            if (n !== 0)
              r = Z_OK;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          tindex = (tree_index + (b & inflate_mask[j])) * 3;
          b >>>= tree[tindex + 1];
          k -= tree[tindex + 1];
          e = tree[tindex];
          if (e === 0) {
            lit = tree[tindex + 2];
            mode2 = LIT;
            break;
          }
          if ((e & 16) !== 0) {
            get = e & 15;
            len = tree[tindex + 2];
            mode2 = LENEXT;
            break;
          }
          if ((e & 64) === 0) {
            need = e;
            tree_index = tindex / 3 + tree[tindex + 2];
            break;
          }
          if ((e & 32) !== 0) {
            mode2 = WASH;
            break;
          }
          mode2 = BADCODE;
          z.msg = "invalid literal/length code";
          r = Z_DATA_ERROR;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case LENEXT:
          j = get;
          while (k < j) {
            if (n !== 0)
              r = Z_OK;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          len += b & inflate_mask[j];
          b >>= j;
          k -= j;
          need = dbits;
          tree = dtree;
          tree_index = dtree_index;
          mode2 = DIST;
        /* falls through */
        case DIST:
          j = need;
          while (k < j) {
            if (n !== 0)
              r = Z_OK;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          tindex = (tree_index + (b & inflate_mask[j])) * 3;
          b >>= tree[tindex + 1];
          k -= tree[tindex + 1];
          e = tree[tindex];
          if ((e & 16) !== 0) {
            get = e & 15;
            dist = tree[tindex + 2];
            mode2 = DISTEXT;
            break;
          }
          if ((e & 64) === 0) {
            need = e;
            tree_index = tindex / 3 + tree[tindex + 2];
            break;
          }
          mode2 = BADCODE;
          z.msg = "invalid distance code";
          r = Z_DATA_ERROR;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case DISTEXT:
          j = get;
          while (k < j) {
            if (n !== 0)
              r = Z_OK;
            else {
              s.bitb = b;
              s.bitk = k;
              z.avail_in = n;
              z.total_in += p - z.next_in_index;
              z.next_in_index = p;
              s.write = q;
              return s.inflate_flush(z, r);
            }
            n--;
            b |= (z.read_byte(p++) & 255) << k;
            k += 8;
          }
          dist += b & inflate_mask[j];
          b >>= j;
          k -= j;
          mode2 = COPY;
        /* falls through */
        case COPY:
          f = q - dist;
          while (f < 0) {
            f += s.end;
          }
          while (len !== 0) {
            if (m === 0) {
              if (q == s.end && s.read !== 0) {
                q = 0;
                m = q < s.read ? s.read - q - 1 : s.end - q;
              }
              if (m === 0) {
                s.write = q;
                r = s.inflate_flush(z, r);
                q = s.write;
                m = q < s.read ? s.read - q - 1 : s.end - q;
                if (q == s.end && s.read !== 0) {
                  q = 0;
                  m = q < s.read ? s.read - q - 1 : s.end - q;
                }
                if (m === 0) {
                  s.bitb = b;
                  s.bitk = k;
                  z.avail_in = n;
                  z.total_in += p - z.next_in_index;
                  z.next_in_index = p;
                  s.write = q;
                  return s.inflate_flush(z, r);
                }
              }
            }
            s.win[q++] = s.win[f++];
            m--;
            if (f == s.end)
              f = 0;
            len--;
          }
          mode2 = START;
          break;
        case LIT:
          if (m === 0) {
            if (q == s.end && s.read !== 0) {
              q = 0;
              m = q < s.read ? s.read - q - 1 : s.end - q;
            }
            if (m === 0) {
              s.write = q;
              r = s.inflate_flush(z, r);
              q = s.write;
              m = q < s.read ? s.read - q - 1 : s.end - q;
              if (q == s.end && s.read !== 0) {
                q = 0;
                m = q < s.read ? s.read - q - 1 : s.end - q;
              }
              if (m === 0) {
                s.bitb = b;
                s.bitk = k;
                z.avail_in = n;
                z.total_in += p - z.next_in_index;
                z.next_in_index = p;
                s.write = q;
                return s.inflate_flush(z, r);
              }
            }
          }
          r = Z_OK;
          s.win[q++] = /* (byte) */
          lit;
          m--;
          mode2 = START;
          break;
        case WASH:
          if (k > 7) {
            k -= 8;
            n++;
            p--;
          }
          s.write = q;
          r = s.inflate_flush(z, r);
          q = s.write;
          m = q < s.read ? s.read - q - 1 : s.end - q;
          if (s.read != s.write) {
            s.bitb = b;
            s.bitk = k;
            z.avail_in = n;
            z.total_in += p - z.next_in_index;
            z.next_in_index = p;
            s.write = q;
            return s.inflate_flush(z, r);
          }
          mode2 = END;
        /* falls through */
        case END:
          r = Z_STREAM_END;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        case BADCODE:
          r = Z_DATA_ERROR;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
        default:
          r = Z_STREAM_ERROR;
          s.bitb = b;
          s.bitk = k;
          z.avail_in = n;
          z.total_in += p - z.next_in_index;
          z.next_in_index = p;
          s.write = q;
          return s.inflate_flush(z, r);
      }
    }
  };
  that.free = function() {
  };
}
const border = [
  // Order of the bit length code lengths
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
];
const TYPE = 0;
const LENS = 1;
const STORED = 2;
const TABLE = 3;
const BTREE = 4;
const DTREE = 5;
const CODES = 6;
const DRY = 7;
const DONELOCKS = 8;
const BADBLOCKS = 9;
function InfBlocks(z, w) {
  const that = this;
  let mode2 = TYPE;
  let left = 0;
  let table2 = 0;
  let index = 0;
  let blens;
  const bb = [0];
  const tb = [0];
  const codes = new InfCodes();
  let last = 0;
  let hufts = new Int32Array(MANY * 3);
  const check = 0;
  const inftree = new InfTree();
  that.bitk = 0;
  that.bitb = 0;
  that.win = new Uint8Array(w);
  that.end = w;
  that.read = 0;
  that.write = 0;
  that.reset = function(z2, c) {
    if (c)
      c[0] = check;
    if (mode2 == CODES) {
      codes.free(z2);
    }
    mode2 = TYPE;
    that.bitk = 0;
    that.bitb = 0;
    that.read = that.write = 0;
  };
  that.reset(z, null);
  that.inflate_flush = function(z2, r) {
    let n;
    let p;
    let q;
    p = z2.next_out_index;
    q = that.read;
    n = /* (int) */
    (q <= that.write ? that.write : that.end) - q;
    if (n > z2.avail_out)
      n = z2.avail_out;
    if (n !== 0 && r == Z_BUF_ERROR)
      r = Z_OK;
    z2.avail_out -= n;
    z2.total_out += n;
    z2.next_out.set(that.win.subarray(q, q + n), p);
    p += n;
    q += n;
    if (q == that.end) {
      q = 0;
      if (that.write == that.end)
        that.write = 0;
      n = that.write - q;
      if (n > z2.avail_out)
        n = z2.avail_out;
      if (n !== 0 && r == Z_BUF_ERROR)
        r = Z_OK;
      z2.avail_out -= n;
      z2.total_out += n;
      z2.next_out.set(that.win.subarray(q, q + n), p);
      p += n;
      q += n;
    }
    z2.next_out_index = p;
    that.read = q;
    return r;
  };
  that.proc = function(z2, r) {
    let t;
    let b;
    let k;
    let p;
    let n;
    let q;
    let m;
    let i;
    p = z2.next_in_index;
    n = z2.avail_in;
    b = that.bitb;
    k = that.bitk;
    q = that.write;
    m = /* (int) */
    q < that.read ? that.read - q - 1 : that.end - q;
    while (true) {
      let bl, bd, tl, td, bl_, bd_, tl_, td_;
      switch (mode2) {
        case TYPE:
          while (k < 3) {
            if (n !== 0) {
              r = Z_OK;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          t = /* (int) */
          b & 7;
          last = t & 1;
          switch (t >>> 1) {
            case 0:
              b >>>= 3;
              k -= 3;
              t = k & 7;
              b >>>= t;
              k -= t;
              mode2 = LENS;
              break;
            case 1:
              bl = [];
              bd = [];
              tl = [[]];
              td = [[]];
              InfTree.inflate_trees_fixed(bl, bd, tl, td);
              codes.init(bl[0], bd[0], tl[0], 0, td[0], 0);
              b >>>= 3;
              k -= 3;
              mode2 = CODES;
              break;
            case 2:
              b >>>= 3;
              k -= 3;
              mode2 = TABLE;
              break;
            case 3:
              b >>>= 3;
              k -= 3;
              mode2 = BADBLOCKS;
              z2.msg = "invalid block type";
              r = Z_DATA_ERROR;
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
          }
          break;
        case LENS:
          while (k < 32) {
            if (n !== 0) {
              r = Z_OK;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          if ((~b >>> 16 & 65535) != (b & 65535)) {
            mode2 = BADBLOCKS;
            z2.msg = "invalid stored block lengths";
            r = Z_DATA_ERROR;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          left = b & 65535;
          b = k = 0;
          mode2 = left !== 0 ? STORED : last !== 0 ? DRY : TYPE;
          break;
        case STORED:
          if (n === 0) {
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          if (m === 0) {
            if (q == that.end && that.read !== 0) {
              q = 0;
              m = /* (int) */
              q < that.read ? that.read - q - 1 : that.end - q;
            }
            if (m === 0) {
              that.write = q;
              r = that.inflate_flush(z2, r);
              q = that.write;
              m = /* (int) */
              q < that.read ? that.read - q - 1 : that.end - q;
              if (q == that.end && that.read !== 0) {
                q = 0;
                m = /* (int) */
                q < that.read ? that.read - q - 1 : that.end - q;
              }
              if (m === 0) {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
            }
          }
          r = Z_OK;
          t = left;
          if (t > n)
            t = n;
          if (t > m)
            t = m;
          that.win.set(z2.read_buf(p, t), q);
          p += t;
          n -= t;
          q += t;
          m -= t;
          if ((left -= t) !== 0)
            break;
          mode2 = last !== 0 ? DRY : TYPE;
          break;
        case TABLE:
          while (k < 14) {
            if (n !== 0) {
              r = Z_OK;
            } else {
              that.bitb = b;
              that.bitk = k;
              z2.avail_in = n;
              z2.total_in += p - z2.next_in_index;
              z2.next_in_index = p;
              that.write = q;
              return that.inflate_flush(z2, r);
            }
            n--;
            b |= (z2.read_byte(p++) & 255) << k;
            k += 8;
          }
          table2 = t = b & 16383;
          if ((t & 31) > 29 || (t >> 5 & 31) > 29) {
            mode2 = BADBLOCKS;
            z2.msg = "too many length or distance symbols";
            r = Z_DATA_ERROR;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          t = 258 + (t & 31) + (t >> 5 & 31);
          if (!blens || blens.length < t) {
            blens = [];
          } else {
            for (i = 0; i < t; i++) {
              blens[i] = 0;
            }
          }
          b >>>= 14;
          k -= 14;
          index = 0;
          mode2 = BTREE;
        /* falls through */
        case BTREE:
          while (index < 4 + (table2 >>> 10)) {
            while (k < 3) {
              if (n !== 0) {
                r = Z_OK;
              } else {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              n--;
              b |= (z2.read_byte(p++) & 255) << k;
              k += 8;
            }
            blens[border[index++]] = b & 7;
            b >>>= 3;
            k -= 3;
          }
          while (index < 19) {
            blens[border[index++]] = 0;
          }
          bb[0] = 7;
          t = inftree.inflate_trees_bits(blens, bb, tb, hufts, z2);
          if (t != Z_OK) {
            r = t;
            if (r == Z_DATA_ERROR) {
              blens = null;
              mode2 = BADBLOCKS;
            }
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          index = 0;
          mode2 = DTREE;
        /* falls through */
        case DTREE:
          while (true) {
            t = table2;
            if (index >= 258 + (t & 31) + (t >> 5 & 31)) {
              break;
            }
            let j, c;
            t = bb[0];
            while (k < t) {
              if (n !== 0) {
                r = Z_OK;
              } else {
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              n--;
              b |= (z2.read_byte(p++) & 255) << k;
              k += 8;
            }
            t = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 1];
            c = hufts[(tb[0] + (b & inflate_mask[t])) * 3 + 2];
            if (c < 16) {
              b >>>= t;
              k -= t;
              blens[index++] = c;
            } else {
              i = c == 18 ? 7 : c - 14;
              j = c == 18 ? 11 : 3;
              while (k < t + i) {
                if (n !== 0) {
                  r = Z_OK;
                } else {
                  that.bitb = b;
                  that.bitk = k;
                  z2.avail_in = n;
                  z2.total_in += p - z2.next_in_index;
                  z2.next_in_index = p;
                  that.write = q;
                  return that.inflate_flush(z2, r);
                }
                n--;
                b |= (z2.read_byte(p++) & 255) << k;
                k += 8;
              }
              b >>>= t;
              k -= t;
              j += b & inflate_mask[i];
              b >>>= i;
              k -= i;
              i = index;
              t = table2;
              if (i + j > 258 + (t & 31) + (t >> 5 & 31) || c == 16 && i < 1) {
                blens = null;
                mode2 = BADBLOCKS;
                z2.msg = "invalid bit length repeat";
                r = Z_DATA_ERROR;
                that.bitb = b;
                that.bitk = k;
                z2.avail_in = n;
                z2.total_in += p - z2.next_in_index;
                z2.next_in_index = p;
                that.write = q;
                return that.inflate_flush(z2, r);
              }
              c = c == 16 ? blens[i - 1] : 0;
              do {
                blens[i++] = c;
              } while (--j !== 0);
              index = i;
            }
          }
          tb[0] = -1;
          bl_ = [];
          bd_ = [];
          tl_ = [];
          td_ = [];
          bl_[0] = 9;
          bd_[0] = 6;
          t = table2;
          t = inftree.inflate_trees_dynamic(257 + (t & 31), 1 + (t >> 5 & 31), blens, bl_, bd_, tl_, td_, hufts, z2);
          if (t != Z_OK) {
            if (t == Z_DATA_ERROR) {
              blens = null;
              mode2 = BADBLOCKS;
            }
            r = t;
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          codes.init(bl_[0], bd_[0], hufts, tl_[0], hufts, td_[0]);
          mode2 = CODES;
        /* falls through */
        case CODES:
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          if ((r = codes.proc(that, z2, r)) != Z_STREAM_END) {
            return that.inflate_flush(z2, r);
          }
          r = Z_OK;
          codes.free(z2);
          p = z2.next_in_index;
          n = z2.avail_in;
          b = that.bitb;
          k = that.bitk;
          q = that.write;
          m = /* (int) */
          q < that.read ? that.read - q - 1 : that.end - q;
          if (last === 0) {
            mode2 = TYPE;
            break;
          }
          mode2 = DRY;
        /* falls through */
        case DRY:
          that.write = q;
          r = that.inflate_flush(z2, r);
          q = that.write;
          m = /* (int) */
          q < that.read ? that.read - q - 1 : that.end - q;
          if (that.read != that.write) {
            that.bitb = b;
            that.bitk = k;
            z2.avail_in = n;
            z2.total_in += p - z2.next_in_index;
            z2.next_in_index = p;
            that.write = q;
            return that.inflate_flush(z2, r);
          }
          mode2 = DONELOCKS;
        /* falls through */
        case DONELOCKS:
          r = Z_STREAM_END;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
        case BADBLOCKS:
          r = Z_DATA_ERROR;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
        default:
          r = Z_STREAM_ERROR;
          that.bitb = b;
          that.bitk = k;
          z2.avail_in = n;
          z2.total_in += p - z2.next_in_index;
          z2.next_in_index = p;
          that.write = q;
          return that.inflate_flush(z2, r);
      }
    }
  };
  that.free = function(z2) {
    that.reset(z2, null);
    that.win = null;
    hufts = null;
  };
  that.set_dictionary = function(d, start, n) {
    that.win.set(d.subarray(start, start + n), 0);
    that.read = that.write = n;
  };
  that.sync_point = function() {
    return mode2 == LENS ? 1 : 0;
  };
}
const PRESET_DICT = 32;
const Z_DEFLATED = 8;
const METHOD = 0;
const FLAG = 1;
const DICT4 = 2;
const DICT3 = 3;
const DICT2 = 4;
const DICT1 = 5;
const DICT0 = 6;
const BLOCKS = 7;
const DONE = 12;
const BAD = 13;
const mark = [0, 0, 255, 255];
function Inflate() {
  const that = this;
  that.mode = 0;
  that.method = 0;
  that.was = [0];
  that.need = 0;
  that.marker = 0;
  that.wbits = 0;
  function inflateReset(z) {
    if (!z || !z.istate)
      return Z_STREAM_ERROR;
    z.total_in = z.total_out = 0;
    z.msg = null;
    z.istate.mode = BLOCKS;
    z.istate.blocks.reset(z, null);
    return Z_OK;
  }
  that.inflateEnd = function(z) {
    if (that.blocks)
      that.blocks.free(z);
    that.blocks = null;
    return Z_OK;
  };
  that.inflateInit = function(z, w) {
    z.msg = null;
    that.blocks = null;
    if (w < 8 || w > 15) {
      that.inflateEnd(z);
      return Z_STREAM_ERROR;
    }
    that.wbits = w;
    z.istate.blocks = new InfBlocks(z, 1 << w);
    inflateReset(z);
    return Z_OK;
  };
  that.inflate = function(z, f) {
    let r;
    let b;
    if (!z || !z.istate || !z.next_in)
      return Z_STREAM_ERROR;
    const istate = z.istate;
    f = f == Z_FINISH ? Z_BUF_ERROR : Z_OK;
    r = Z_BUF_ERROR;
    while (true) {
      switch (istate.mode) {
        case METHOD:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          if (((istate.method = z.read_byte(z.next_in_index++)) & 15) != Z_DEFLATED) {
            istate.mode = BAD;
            z.msg = "unknown compression method";
            istate.marker = 5;
            break;
          }
          if ((istate.method >> 4) + 8 > istate.wbits) {
            istate.mode = BAD;
            z.msg = "invalid win size";
            istate.marker = 5;
            break;
          }
          istate.mode = FLAG;
        /* falls through */
        case FLAG:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          b = z.read_byte(z.next_in_index++) & 255;
          if (((istate.method << 8) + b) % 31 !== 0) {
            istate.mode = BAD;
            z.msg = "incorrect header check";
            istate.marker = 5;
            break;
          }
          if ((b & PRESET_DICT) === 0) {
            istate.mode = BLOCKS;
            break;
          }
          istate.mode = DICT4;
        /* falls through */
        case DICT4:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need = (z.read_byte(z.next_in_index++) & 255) << 24 & 4278190080;
          istate.mode = DICT3;
        /* falls through */
        case DICT3:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += (z.read_byte(z.next_in_index++) & 255) << 16 & 16711680;
          istate.mode = DICT2;
        /* falls through */
        case DICT2:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += (z.read_byte(z.next_in_index++) & 255) << 8 & 65280;
          istate.mode = DICT1;
        /* falls through */
        case DICT1:
          if (z.avail_in === 0)
            return r;
          r = f;
          z.avail_in--;
          z.total_in++;
          istate.need += z.read_byte(z.next_in_index++) & 255;
          istate.mode = DICT0;
          return Z_NEED_DICT;
        case DICT0:
          istate.mode = BAD;
          z.msg = "need dictionary";
          istate.marker = 0;
          return Z_STREAM_ERROR;
        case BLOCKS:
          r = istate.blocks.proc(z, r);
          if (r == Z_DATA_ERROR) {
            istate.mode = BAD;
            istate.marker = 0;
            break;
          }
          if (r == Z_OK) {
            r = f;
          }
          if (r != Z_STREAM_END) {
            return r;
          }
          r = f;
          istate.blocks.reset(z, istate.was);
          istate.mode = DONE;
        /* falls through */
        case DONE:
          z.avail_in = 0;
          return Z_STREAM_END;
        case BAD:
          return Z_DATA_ERROR;
        default:
          return Z_STREAM_ERROR;
      }
    }
  };
  that.inflateSetDictionary = function(z, dictionary, dictLength) {
    let index = 0, length = dictLength;
    if (!z || !z.istate || z.istate.mode != DICT0)
      return Z_STREAM_ERROR;
    const istate = z.istate;
    if (length >= 1 << istate.wbits) {
      length = (1 << istate.wbits) - 1;
      index = dictLength - length;
    }
    istate.blocks.set_dictionary(dictionary, index, length);
    istate.mode = BLOCKS;
    return Z_OK;
  };
  that.inflateSync = function(z) {
    let n;
    let p;
    let m;
    let r, w;
    if (!z || !z.istate)
      return Z_STREAM_ERROR;
    const istate = z.istate;
    if (istate.mode != BAD) {
      istate.mode = BAD;
      istate.marker = 0;
    }
    if ((n = z.avail_in) === 0)
      return Z_BUF_ERROR;
    p = z.next_in_index;
    m = istate.marker;
    while (n !== 0 && m < 4) {
      if (z.read_byte(p) == mark[m]) {
        m++;
      } else if (z.read_byte(p) !== 0) {
        m = 0;
      } else {
        m = 4 - m;
      }
      p++;
      n--;
    }
    z.total_in += p - z.next_in_index;
    z.next_in_index = p;
    z.avail_in = n;
    istate.marker = m;
    if (m != 4) {
      return Z_DATA_ERROR;
    }
    r = z.total_in;
    w = z.total_out;
    inflateReset(z);
    z.total_in = r;
    z.total_out = w;
    istate.mode = BLOCKS;
    return Z_OK;
  };
  that.inflateSyncPoint = function(z) {
    if (!z || !z.istate || !z.istate.blocks)
      return Z_STREAM_ERROR;
    return z.istate.blocks.sync_point();
  };
}
function ZStream() {
}
ZStream.prototype = {
  inflateInit(bits) {
    const that = this;
    that.istate = new Inflate();
    if (!bits)
      bits = MAX_BITS;
    return that.istate.inflateInit(that, bits);
  },
  inflate(f) {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR;
    return that.istate.inflate(that, f);
  },
  inflateEnd() {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR;
    const ret = that.istate.inflateEnd(that);
    that.istate = null;
    return ret;
  },
  inflateSync() {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR;
    return that.istate.inflateSync(that);
  },
  inflateSetDictionary(dictionary, dictLength) {
    const that = this;
    if (!that.istate)
      return Z_STREAM_ERROR;
    return that.istate.inflateSetDictionary(that, dictionary, dictLength);
  },
  read_byte(start) {
    const that = this;
    return that.next_in[start];
  },
  read_buf(start, size) {
    const that = this;
    return that.next_in.subarray(start, start + size);
  }
};
function ZipInflate(options) {
  const that = this;
  const z = new ZStream();
  const bufsize = options && options.chunkSize ? Math.floor(options.chunkSize * 2) : 128 * 1024;
  const flush = Z_NO_FLUSH;
  const buf = new Uint8Array(bufsize);
  let nomoreinput = false;
  z.inflateInit();
  z.next_out = buf;
  that.append = function(data, onprogress) {
    const buffers = [];
    let err, array, lastIndex = 0, bufferIndex = 0, bufferSize = 0;
    if (data.length === 0)
      return;
    z.next_in_index = 0;
    z.next_in = data;
    z.avail_in = data.length;
    do {
      z.next_out_index = 0;
      z.avail_out = bufsize;
      if (z.avail_in === 0 && !nomoreinput) {
        z.next_in_index = 0;
        nomoreinput = true;
      }
      err = z.inflate(flush);
      if (nomoreinput && err === Z_BUF_ERROR) {
        if (z.avail_in !== 0)
          throw new Error("inflating: bad input");
      } else if (err !== Z_OK && err !== Z_STREAM_END)
        throw new Error("inflating: " + z.msg);
      if ((nomoreinput || err === Z_STREAM_END) && z.avail_in === data.length)
        throw new Error("inflating: bad input");
      if (z.next_out_index)
        if (z.next_out_index === bufsize)
          buffers.push(new Uint8Array(buf));
        else
          buffers.push(buf.subarray(0, z.next_out_index));
      bufferSize += z.next_out_index;
      if (onprogress && z.next_in_index > 0 && z.next_in_index != lastIndex) {
        onprogress(z.next_in_index);
        lastIndex = z.next_in_index;
      }
    } while (z.avail_in > 0 || z.avail_out === 0);
    if (buffers.length > 1) {
      array = new Uint8Array(bufferSize);
      buffers.forEach(function(chunk) {
        array.set(chunk, bufferIndex);
        bufferIndex += chunk.length;
      });
    } else {
      array = buffers[0] ? new Uint8Array(buffers[0]) : new Uint8Array();
    }
    return array;
  };
  that.flush = function() {
    z.inflateEnd();
  };
}
const MAX_32_BITS = 4294967295;
const MAX_16_BITS = 65535;
const COMPRESSION_METHOD_DEFLATE = 8;
const COMPRESSION_METHOD_STORE = 0;
const COMPRESSION_METHOD_AES = 99;
const LOCAL_FILE_HEADER_SIGNATURE = 67324752;
const SPLIT_ZIP_FILE_SIGNATURE = 134695760;
const CENTRAL_FILE_HEADER_SIGNATURE = 33639248;
const END_OF_CENTRAL_DIR_SIGNATURE = 101010256;
const ZIP64_END_OF_CENTRAL_DIR_SIGNATURE = 101075792;
const ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE = 117853008;
const END_OF_CENTRAL_DIR_LENGTH = 22;
const ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH = 20;
const ZIP64_END_OF_CENTRAL_DIR_LENGTH = 56;
const EXTRAFIELD_TYPE_ZIP64 = 1;
const EXTRAFIELD_TYPE_AES = 39169;
const EXTRAFIELD_TYPE_NTFS = 10;
const EXTRAFIELD_TYPE_NTFS_TAG1 = 1;
const EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP = 21589;
const EXTRAFIELD_TYPE_UNICODE_PATH = 28789;
const EXTRAFIELD_TYPE_UNICODE_COMMENT = 25461;
const EXTRAFIELD_TYPE_USDZ = 6534;
const BITFLAG_ENCRYPTED = 1;
const BITFLAG_LEVEL = 6;
const BITFLAG_DATA_DESCRIPTOR = 8;
const BITFLAG_LANG_ENCODING_FLAG = 2048;
const FILE_ATTR_MSDOS_DIR_MASK = 16;
const FILE_ATTR_UNIX_DIR_MASK = 16384;
const FILE_ATTR_UNIX_EXECUTABLE_MASK = 73;
const DIRECTORY_SIGNATURE = "/";
const UNDEFINED_VALUE = void 0;
const UNDEFINED_TYPE = "undefined";
const FUNCTION_TYPE = "function";
class StreamAdapter {
  constructor(Codec) {
    return class extends TransformStream {
      constructor(_format, options) {
        const codec2 = new Codec(options);
        super({
          transform(chunk, controller) {
            controller.enqueue(codec2.append(chunk));
          },
          flush(controller) {
            const chunk = codec2.flush();
            if (chunk) {
              controller.enqueue(chunk);
            }
          }
        });
      }
    };
  }
}
const MINIMUM_CHUNK_SIZE = 64;
let maxWorkers = 2;
try {
  if (typeof navigator != UNDEFINED_TYPE && navigator.hardwareConcurrency) {
    maxWorkers = navigator.hardwareConcurrency;
  }
} catch (_) {
}
const DEFAULT_CONFIGURATION = {
  chunkSize: 512 * 1024,
  maxWorkers,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: true,
  useCompressionStream: true,
  workerScripts: UNDEFINED_VALUE,
  CompressionStreamNative: typeof CompressionStream != UNDEFINED_TYPE && CompressionStream,
  DecompressionStreamNative: typeof DecompressionStream != UNDEFINED_TYPE && DecompressionStream
};
const config = Object.assign({}, DEFAULT_CONFIGURATION);
function getConfiguration() {
  return config;
}
function getChunkSize(config2) {
  return Math.max(config2.chunkSize, MINIMUM_CHUNK_SIZE);
}
function configure(configuration) {
  const {
    baseURL,
    chunkSize,
    maxWorkers: maxWorkers2,
    terminateWorkerTimeout,
    useCompressionStream,
    useWebWorkers,
    Deflate,
    Inflate: Inflate2,
    CompressionStream: CompressionStream2,
    DecompressionStream: DecompressionStream2,
    workerScripts
  } = configuration;
  setIfDefined("baseURL", baseURL);
  setIfDefined("chunkSize", chunkSize);
  setIfDefined("maxWorkers", maxWorkers2);
  setIfDefined("terminateWorkerTimeout", terminateWorkerTimeout);
  setIfDefined("useCompressionStream", useCompressionStream);
  setIfDefined("useWebWorkers", useWebWorkers);
  if (Deflate) {
    config.CompressionStream = new StreamAdapter(Deflate);
  }
  if (Inflate2) {
    config.DecompressionStream = new StreamAdapter(Inflate2);
  }
  setIfDefined("CompressionStream", CompressionStream2);
  setIfDefined("DecompressionStream", DecompressionStream2);
  if (workerScripts !== UNDEFINED_VALUE) {
    const { deflate, inflate } = workerScripts;
    if (deflate || inflate) {
      if (!config.workerScripts) {
        config.workerScripts = {};
      }
    }
    if (deflate) {
      if (!Array.isArray(deflate)) {
        throw new Error("workerScripts.deflate must be an array");
      }
      config.workerScripts.deflate = deflate;
    }
    if (inflate) {
      if (!Array.isArray(inflate)) {
        throw new Error("workerScripts.inflate must be an array");
      }
      config.workerScripts.inflate = inflate;
    }
  }
}
function setIfDefined(propertyName, propertyValue) {
  if (propertyValue !== UNDEFINED_VALUE) {
    config[propertyName] = propertyValue;
  }
}
function getMimeType() {
  return "application/octet-stream";
}
const table = [];
for (let i = 0; i < 256; i++) {
  let t = i;
  for (let j = 0; j < 8; j++) {
    if (t & 1) {
      t = t >>> 1 ^ 3988292384;
    } else {
      t = t >>> 1;
    }
  }
  table[i] = t;
}
class Crc32 {
  constructor(crc) {
    this.crc = crc || -1;
  }
  append(data) {
    let crc = this.crc | 0;
    for (let offset = 0, length = data.length | 0; offset < length; offset++) {
      crc = crc >>> 8 ^ table[(crc ^ data[offset]) & 255];
    }
    this.crc = crc;
  }
  get() {
    return ~this.crc;
  }
}
class Crc32Stream extends TransformStream {
  constructor() {
    let stream;
    const crc32 = new Crc32();
    super({
      transform(chunk, controller) {
        crc32.append(chunk);
        controller.enqueue(chunk);
      },
      flush() {
        const value = new Uint8Array(4);
        const dataView = new DataView(value.buffer);
        dataView.setUint32(0, crc32.get());
        stream.value = value;
      }
    });
    stream = this;
  }
}
function encodeText(value) {
  if (typeof TextEncoder == UNDEFINED_TYPE) {
    value = unescape(encodeURIComponent(value));
    const result = new Uint8Array(value.length);
    for (let i = 0; i < result.length; i++) {
      result[i] = value.charCodeAt(i);
    }
    return result;
  } else {
    return new TextEncoder().encode(value);
  }
}
const bitArray = {
  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return a1.concat(a2);
    }
    const last = a1[a1.length - 1], shift = bitArray.getPartial(last);
    if (shift === 32) {
      return a1.concat(a2);
    } else {
      return bitArray._shiftRight(a2, shift, last | 0, a1.slice(0, a1.length - 1));
    }
  },
  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength(a) {
    const l = a.length;
    if (l === 0) {
      return 0;
    }
    const x = a[l - 1];
    return (l - 1) * 32 + bitArray.getPartial(x);
  },
  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp(a, len) {
    if (a.length * 32 < len) {
      return a;
    }
    a = a.slice(0, Math.ceil(len / 32));
    const l = a.length;
    len = len & 31;
    if (l > 0 && len) {
      a[l - 1] = bitArray.partial(len, a[l - 1] & 2147483648 >> len - 1, 1);
    }
    return a;
  },
  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial(len, x, _end) {
    if (len === 32) {
      return x;
    }
    return (_end ? x | 0 : x << 32 - len) + len * 1099511627776;
  },
  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial(x) {
    return Math.round(x / 1099511627776) || 32;
  },
  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight(a, shift, carry, out) {
    if (out === void 0) {
      out = [];
    }
    for (; shift >= 32; shift -= 32) {
      out.push(carry);
      carry = 0;
    }
    if (shift === 0) {
      return out.concat(a);
    }
    for (let i = 0; i < a.length; i++) {
      out.push(carry | a[i] >>> shift);
      carry = a[i] << 32 - shift;
    }
    const last2 = a.length ? a[a.length - 1] : 0;
    const shift2 = bitArray.getPartial(last2);
    out.push(bitArray.partial(shift + shift2 & 31, shift + shift2 > 32 ? carry : out.pop(), 1));
    return out;
  }
};
const codec = {
  bytes: {
    /** Convert from a bitArray to an array of bytes. */
    fromBits(arr) {
      const bl = bitArray.bitLength(arr);
      const byteLength = bl / 8;
      const out = new Uint8Array(byteLength);
      let tmp;
      for (let i = 0; i < byteLength; i++) {
        if ((i & 3) === 0) {
          tmp = arr[i / 4];
        }
        out[i] = tmp >>> 24;
        tmp <<= 8;
      }
      return out;
    },
    /** Convert from an array of bytes to a bitArray. */
    toBits(bytes) {
      const out = [];
      let i;
      let tmp = 0;
      for (i = 0; i < bytes.length; i++) {
        tmp = tmp << 8 | bytes[i];
        if ((i & 3) === 3) {
          out.push(tmp);
          tmp = 0;
        }
      }
      if (i & 3) {
        out.push(bitArray.partial(8 * (i & 3), tmp));
      }
      return out;
    }
  }
};
const hash = {};
hash.sha1 = class {
  constructor(hash2) {
    const sha1 = this;
    sha1.blockSize = 512;
    sha1._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    sha1._key = [1518500249, 1859775393, 2400959708, 3395469782];
    if (hash2) {
      sha1._h = hash2._h.slice(0);
      sha1._buffer = hash2._buffer.slice(0);
      sha1._length = hash2._length;
    } else {
      sha1.reset();
    }
  }
  /**
   * Reset the hash state.
   * @return this
   */
  reset() {
    const sha1 = this;
    sha1._h = sha1._init.slice(0);
    sha1._buffer = [];
    sha1._length = 0;
    return sha1;
  }
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update(data) {
    const sha1 = this;
    if (typeof data === "string") {
      data = codec.utf8String.toBits(data);
    }
    const b = sha1._buffer = bitArray.concat(sha1._buffer, data);
    const ol = sha1._length;
    const nl = sha1._length = ol + bitArray.bitLength(data);
    if (nl > 9007199254740991) {
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    }
    const c = new Uint32Array(b);
    let j = 0;
    for (let i = sha1.blockSize + ol - (sha1.blockSize + ol & sha1.blockSize - 1); i <= nl; i += sha1.blockSize) {
      sha1._block(c.subarray(16 * j, 16 * (j + 1)));
      j += 1;
    }
    b.splice(0, 16 * j);
    return sha1;
  }
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize() {
    const sha1 = this;
    let b = sha1._buffer;
    const h = sha1._h;
    b = bitArray.concat(b, [bitArray.partial(1, 1)]);
    for (let i = b.length + 2; i & 15; i++) {
      b.push(0);
    }
    b.push(Math.floor(sha1._length / 4294967296));
    b.push(sha1._length | 0);
    while (b.length) {
      sha1._block(b.splice(0, 16));
    }
    sha1.reset();
    return h;
  }
  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f(t, b, c, d) {
    if (t <= 19) {
      return b & c | ~b & d;
    } else if (t <= 39) {
      return b ^ c ^ d;
    } else if (t <= 59) {
      return b & c | b & d | c & d;
    } else if (t <= 79) {
      return b ^ c ^ d;
    }
  }
  /**
   * Circular left-shift operator.
   * @private
   */
  _S(n, x) {
    return x << n | x >>> 32 - n;
  }
  /**
   * Perform one cycle of SHA-1.
   * @param {Uint32Array|bitArray} words one block of words.
   * @private
   */
  _block(words) {
    const sha1 = this;
    const h = sha1._h;
    const w = Array(80);
    for (let j = 0; j < 16; j++) {
      w[j] = words[j];
    }
    let a = h[0];
    let b = h[1];
    let c = h[2];
    let d = h[3];
    let e = h[4];
    for (let t = 0; t <= 79; t++) {
      if (t >= 16) {
        w[t] = sha1._S(1, w[t - 3] ^ w[t - 8] ^ w[t - 14] ^ w[t - 16]);
      }
      const tmp = sha1._S(5, a) + sha1._f(t, b, c, d) + e + w[t] + sha1._key[Math.floor(t / 20)] | 0;
      e = d;
      d = c;
      c = sha1._S(30, b);
      b = a;
      a = tmp;
    }
    h[0] = h[0] + a | 0;
    h[1] = h[1] + b | 0;
    h[2] = h[2] + c | 0;
    h[3] = h[3] + d | 0;
    h[4] = h[4] + e | 0;
  }
};
const cipher = {};
cipher.aes = class {
  constructor(key) {
    const aes = this;
    aes._tables = [[[], [], [], [], []], [[], [], [], [], []]];
    if (!aes._tables[0][0][0]) {
      aes._precompute();
    }
    const sbox = aes._tables[0][4];
    const decTable = aes._tables[1];
    const keyLen = key.length;
    let i, encKey, decKey, rcon = 1;
    if (keyLen !== 4 && keyLen !== 6 && keyLen !== 8) {
      throw new Error("invalid aes key size");
    }
    aes._key = [encKey = key.slice(0), decKey = []];
    for (i = keyLen; i < 4 * keyLen + 28; i++) {
      let tmp = encKey[i - 1];
      if (i % keyLen === 0 || keyLen === 8 && i % keyLen === 4) {
        tmp = sbox[tmp >>> 24] << 24 ^ sbox[tmp >> 16 & 255] << 16 ^ sbox[tmp >> 8 & 255] << 8 ^ sbox[tmp & 255];
        if (i % keyLen === 0) {
          tmp = tmp << 8 ^ tmp >>> 24 ^ rcon << 24;
          rcon = rcon << 1 ^ (rcon >> 7) * 283;
        }
      }
      encKey[i] = encKey[i - keyLen] ^ tmp;
    }
    for (let j = 0; i; j++, i--) {
      const tmp = encKey[j & 3 ? i : i - 4];
      if (i <= 4 || j < 4) {
        decKey[j] = tmp;
      } else {
        decKey[j] = decTable[0][sbox[tmp >>> 24]] ^ decTable[1][sbox[tmp >> 16 & 255]] ^ decTable[2][sbox[tmp >> 8 & 255]] ^ decTable[3][sbox[tmp & 255]];
      }
    }
  }
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */
  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt(data) {
    return this._crypt(data, 0);
  }
  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt(data) {
    return this._crypt(data, 1);
  }
  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute() {
    const encTable = this._tables[0];
    const decTable = this._tables[1];
    const sbox = encTable[4];
    const sboxInv = decTable[4];
    const d = [];
    const th = [];
    let xInv, x2, x4, x8;
    for (let i = 0; i < 256; i++) {
      th[(d[i] = i << 1 ^ (i >> 7) * 283) ^ i] = i;
    }
    for (let x = xInv = 0; !sbox[x]; x ^= x2 || 1, xInv = th[xInv] || 1) {
      let s = xInv ^ xInv << 1 ^ xInv << 2 ^ xInv << 3 ^ xInv << 4;
      s = s >> 8 ^ s & 255 ^ 99;
      sbox[x] = s;
      sboxInv[s] = x;
      x8 = d[x4 = d[x2 = d[x]]];
      let tDec = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
      let tEnc = d[s] * 257 ^ s * 16843008;
      for (let i = 0; i < 4; i++) {
        encTable[i][x] = tEnc = tEnc << 24 ^ tEnc >>> 8;
        decTable[i][s] = tDec = tDec << 24 ^ tDec >>> 8;
      }
    }
    for (let i = 0; i < 5; i++) {
      encTable[i] = encTable[i].slice(0);
      decTable[i] = decTable[i].slice(0);
    }
  }
  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt(input, dir) {
    if (input.length !== 4) {
      throw new Error("invalid aes block size");
    }
    const key = this._key[dir];
    const nInnerRounds = key.length / 4 - 2;
    const out = [0, 0, 0, 0];
    const table2 = this._tables[dir];
    const t0 = table2[0];
    const t1 = table2[1];
    const t2 = table2[2];
    const t3 = table2[3];
    const sbox = table2[4];
    let a = input[0] ^ key[0];
    let b = input[dir ? 3 : 1] ^ key[1];
    let c = input[2] ^ key[2];
    let d = input[dir ? 1 : 3] ^ key[3];
    let kIndex = 4;
    let a2, b2, c2;
    for (let i = 0; i < nInnerRounds; i++) {
      a2 = t0[a >>> 24] ^ t1[b >> 16 & 255] ^ t2[c >> 8 & 255] ^ t3[d & 255] ^ key[kIndex];
      b2 = t0[b >>> 24] ^ t1[c >> 16 & 255] ^ t2[d >> 8 & 255] ^ t3[a & 255] ^ key[kIndex + 1];
      c2 = t0[c >>> 24] ^ t1[d >> 16 & 255] ^ t2[a >> 8 & 255] ^ t3[b & 255] ^ key[kIndex + 2];
      d = t0[d >>> 24] ^ t1[a >> 16 & 255] ^ t2[b >> 8 & 255] ^ t3[c & 255] ^ key[kIndex + 3];
      kIndex += 4;
      a = a2;
      b = b2;
      c = c2;
    }
    for (let i = 0; i < 4; i++) {
      out[dir ? 3 & -i : i] = sbox[a >>> 24] << 24 ^ sbox[b >> 16 & 255] << 16 ^ sbox[c >> 8 & 255] << 8 ^ sbox[d & 255] ^ key[kIndex++];
      a2 = a;
      a = b;
      b = c;
      c = d;
      d = a2;
    }
    return out;
  }
};
const random = {
  /** 
   * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
   * @param {TypedArray} typedArray The array to fill.
   * @return {TypedArray} The random values.
   */
  getRandomValues(typedArray) {
    const words = new Uint32Array(typedArray.buffer);
    const r = (m_w) => {
      let m_z = 987654321;
      const mask = 4294967295;
      return function() {
        m_z = 36969 * (m_z & 65535) + (m_z >> 16) & mask;
        m_w = 18e3 * (m_w & 65535) + (m_w >> 16) & mask;
        const result = ((m_z << 16) + m_w & mask) / 4294967296 + 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let i = 0, rcache; i < typedArray.length; i += 4) {
      const _r = r((rcache || Math.random()) * 4294967296);
      rcache = _r() * 987654071;
      words[i / 4] = _r() * 4294967296 | 0;
    }
    return typedArray;
  }
};
const mode = {};
mode.ctrGladman = class {
  constructor(prf, iv) {
    this._prf = prf;
    this._initIv = iv;
    this._iv = iv;
  }
  reset() {
    this._iv = this._initIv;
  }
  /** Input some data to calculate.
   * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
   */
  update(data) {
    return this.calculate(this._prf, data, this._iv);
  }
  incWord(word) {
    if ((word >> 24 & 255) === 255) {
      let b1 = word >> 16 & 255;
      let b2 = word >> 8 & 255;
      let b3 = word & 255;
      if (b1 === 255) {
        b1 = 0;
        if (b2 === 255) {
          b2 = 0;
          if (b3 === 255) {
            b3 = 0;
          } else {
            ++b3;
          }
        } else {
          ++b2;
        }
      } else {
        ++b1;
      }
      word = 0;
      word += b1 << 16;
      word += b2 << 8;
      word += b3;
    } else {
      word += 1 << 24;
    }
    return word;
  }
  incCounter(counter) {
    if ((counter[0] = this.incWord(counter[0])) === 0) {
      counter[1] = this.incWord(counter[1]);
    }
  }
  calculate(prf, data, iv) {
    let l;
    if (!(l = data.length)) {
      return [];
    }
    const bl = bitArray.bitLength(data);
    for (let i = 0; i < l; i += 4) {
      this.incCounter(iv);
      const e = prf.encrypt(iv);
      data[i] ^= e[0];
      data[i + 1] ^= e[1];
      data[i + 2] ^= e[2];
      data[i + 3] ^= e[3];
    }
    return bitArray.clamp(data, bl);
  }
};
const misc = {
  importKey(password) {
    return new misc.hmacSha1(codec.bytes.toBits(password));
  },
  pbkdf2(prf, salt, count, length) {
    count = count || 1e4;
    if (length < 0 || count < 0) {
      throw new Error("invalid params to pbkdf2");
    }
    const byteLength = (length >> 5) + 1 << 2;
    let u, ui, i, j, k;
    const arrayBuffer = new ArrayBuffer(byteLength);
    const out = new DataView(arrayBuffer);
    let outLength = 0;
    const b = bitArray;
    salt = codec.bytes.toBits(salt);
    for (k = 1; outLength < (byteLength || 1); k++) {
      u = ui = prf.encrypt(b.concat(salt, [k]));
      for (i = 1; i < count; i++) {
        ui = prf.encrypt(ui);
        for (j = 0; j < ui.length; j++) {
          u[j] ^= ui[j];
        }
      }
      for (i = 0; outLength < (byteLength || 1) && i < u.length; i++) {
        out.setInt32(outLength, u[i]);
        outLength += 4;
      }
    }
    return arrayBuffer.slice(0, length / 8);
  }
};
misc.hmacSha1 = class {
  constructor(key) {
    const hmac = this;
    const Hash = hmac._hash = hash.sha1;
    const exKey = [[], []];
    hmac._baseHash = [new Hash(), new Hash()];
    const bs = hmac._baseHash[0].blockSize / 32;
    if (key.length > bs) {
      key = new Hash().update(key).finalize();
    }
    for (let i = 0; i < bs; i++) {
      exKey[0][i] = key[i] ^ 909522486;
      exKey[1][i] = key[i] ^ 1549556828;
    }
    hmac._baseHash[0].update(exKey[0]);
    hmac._baseHash[1].update(exKey[1]);
    hmac._resultHash = new Hash(hmac._baseHash[0]);
  }
  reset() {
    const hmac = this;
    hmac._resultHash = new hmac._hash(hmac._baseHash[0]);
    hmac._updated = false;
  }
  update(data) {
    const hmac = this;
    hmac._updated = true;
    hmac._resultHash.update(data);
  }
  digest() {
    const hmac = this;
    const w = hmac._resultHash.finalize();
    const result = new hmac._hash(hmac._baseHash[1]).update(w).finalize();
    hmac.reset();
    return result;
  }
  encrypt(data) {
    if (!this._updated) {
      this.update(data);
      return this.digest(data);
    } else {
      throw new Error("encrypt on already updated hmac called!");
    }
  }
};
const GET_RANDOM_VALUES_SUPPORTED = typeof crypto != UNDEFINED_TYPE && typeof crypto.getRandomValues == FUNCTION_TYPE;
const ERR_INVALID_PASSWORD = "Invalid password";
const ERR_INVALID_SIGNATURE = "Invalid signature";
const ERR_ABORT_CHECK_PASSWORD = "zipjs-abort-check-password";
function getRandomValues(array) {
  if (GET_RANDOM_VALUES_SUPPORTED) {
    return crypto.getRandomValues(array);
  } else {
    return random.getRandomValues(array);
  }
}
const BLOCK_LENGTH = 16;
const RAW_FORMAT = "raw";
const PBKDF2_ALGORITHM = { name: "PBKDF2" };
const HASH_ALGORITHM = { name: "HMAC" };
const HASH_FUNCTION = "SHA-1";
const BASE_KEY_ALGORITHM = Object.assign({ hash: HASH_ALGORITHM }, PBKDF2_ALGORITHM);
const DERIVED_BITS_ALGORITHM = Object.assign({ iterations: 1e3, hash: { name: HASH_FUNCTION } }, PBKDF2_ALGORITHM);
const DERIVED_BITS_USAGE = ["deriveBits"];
const SALT_LENGTH = [8, 12, 16];
const KEY_LENGTH = [16, 24, 32];
const SIGNATURE_LENGTH = 10;
const COUNTER_DEFAULT_VALUE = [0, 0, 0, 0];
const CRYPTO_API_SUPPORTED = typeof crypto != UNDEFINED_TYPE;
const subtle = CRYPTO_API_SUPPORTED && crypto.subtle;
const SUBTLE_API_SUPPORTED = CRYPTO_API_SUPPORTED && typeof subtle != UNDEFINED_TYPE;
const codecBytes = codec.bytes;
const Aes = cipher.aes;
const CtrGladman = mode.ctrGladman;
const HmacSha1 = misc.hmacSha1;
let IMPORT_KEY_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.importKey == FUNCTION_TYPE;
let DERIVE_BITS_SUPPORTED = CRYPTO_API_SUPPORTED && SUBTLE_API_SUPPORTED && typeof subtle.deriveBits == FUNCTION_TYPE;
class AESDecryptionStream extends TransformStream {
  constructor({ password, rawPassword, signed, encryptionStrength, checkPasswordOnly }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((resolve) => this.resolveReady = resolve),
          password: encodePassword(password, rawPassword),
          signed,
          strength: encryptionStrength - 1,
          pending: new Uint8Array()
        });
      },
      async transform(chunk, controller) {
        const aesCrypto = this;
        const {
          password: password2,
          strength,
          resolveReady,
          ready
        } = aesCrypto;
        if (password2) {
          await createDecryptionKeys(aesCrypto, strength, password2, subarray(chunk, 0, SALT_LENGTH[strength] + 2));
          chunk = subarray(chunk, SALT_LENGTH[strength] + 2);
          if (checkPasswordOnly) {
            controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
          } else {
            resolveReady();
          }
        } else {
          await ready;
        }
        const output = new Uint8Array(chunk.length - SIGNATURE_LENGTH - (chunk.length - SIGNATURE_LENGTH) % BLOCK_LENGTH);
        controller.enqueue(append(aesCrypto, chunk, output, 0, SIGNATURE_LENGTH, true));
      },
      async flush(controller) {
        const {
          signed: signed2,
          ctr,
          hmac,
          pending,
          ready
        } = this;
        if (hmac && ctr) {
          await ready;
          const chunkToDecrypt = subarray(pending, 0, pending.length - SIGNATURE_LENGTH);
          const originalSignature = subarray(pending, pending.length - SIGNATURE_LENGTH);
          let decryptedChunkArray = new Uint8Array();
          if (chunkToDecrypt.length) {
            const encryptedChunk = toBits(codecBytes, chunkToDecrypt);
            hmac.update(encryptedChunk);
            const decryptedChunk = ctr.update(encryptedChunk);
            decryptedChunkArray = fromBits(codecBytes, decryptedChunk);
          }
          if (signed2) {
            const signature = subarray(fromBits(codecBytes, hmac.digest()), 0, SIGNATURE_LENGTH);
            for (let indexSignature = 0; indexSignature < SIGNATURE_LENGTH; indexSignature++) {
              if (signature[indexSignature] != originalSignature[indexSignature]) {
                throw new Error(ERR_INVALID_SIGNATURE);
              }
            }
          }
          controller.enqueue(decryptedChunkArray);
        }
      }
    });
  }
}
class AESEncryptionStream extends TransformStream {
  constructor({ password, rawPassword, encryptionStrength }) {
    let stream;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((resolve) => this.resolveReady = resolve),
          password: encodePassword(password, rawPassword),
          strength: encryptionStrength - 1,
          pending: new Uint8Array()
        });
      },
      async transform(chunk, controller) {
        const aesCrypto = this;
        const {
          password: password2,
          strength,
          resolveReady,
          ready
        } = aesCrypto;
        let preamble = new Uint8Array();
        if (password2) {
          preamble = await createEncryptionKeys(aesCrypto, strength, password2);
          resolveReady();
        } else {
          await ready;
        }
        const output = new Uint8Array(preamble.length + chunk.length - chunk.length % BLOCK_LENGTH);
        output.set(preamble, 0);
        controller.enqueue(append(aesCrypto, chunk, output, preamble.length, 0));
      },
      async flush(controller) {
        const {
          ctr,
          hmac,
          pending,
          ready
        } = this;
        if (hmac && ctr) {
          await ready;
          let encryptedChunkArray = new Uint8Array();
          if (pending.length) {
            const encryptedChunk = ctr.update(toBits(codecBytes, pending));
            hmac.update(encryptedChunk);
            encryptedChunkArray = fromBits(codecBytes, encryptedChunk);
          }
          stream.signature = fromBits(codecBytes, hmac.digest()).slice(0, SIGNATURE_LENGTH);
          controller.enqueue(concat(encryptedChunkArray, stream.signature));
        }
      }
    });
    stream = this;
  }
}
function append(aesCrypto, input, output, paddingStart, paddingEnd, verifySignature) {
  const {
    ctr,
    hmac,
    pending
  } = aesCrypto;
  const inputLength = input.length - paddingEnd;
  if (pending.length) {
    input = concat(pending, input);
    output = expand(output, inputLength - inputLength % BLOCK_LENGTH);
  }
  let offset;
  for (offset = 0; offset <= inputLength - BLOCK_LENGTH; offset += BLOCK_LENGTH) {
    const inputChunk = toBits(codecBytes, subarray(input, offset, offset + BLOCK_LENGTH));
    if (verifySignature) {
      hmac.update(inputChunk);
    }
    const outputChunk = ctr.update(inputChunk);
    if (!verifySignature) {
      hmac.update(outputChunk);
    }
    output.set(fromBits(codecBytes, outputChunk), offset + paddingStart);
  }
  aesCrypto.pending = subarray(input, offset);
  return output;
}
async function createDecryptionKeys(decrypt2, strength, password, preamble) {
  const passwordVerificationKey = await createKeys$1(decrypt2, strength, password, subarray(preamble, 0, SALT_LENGTH[strength]));
  const passwordVerification = subarray(preamble, SALT_LENGTH[strength]);
  if (passwordVerificationKey[0] != passwordVerification[0] || passwordVerificationKey[1] != passwordVerification[1]) {
    throw new Error(ERR_INVALID_PASSWORD);
  }
}
async function createEncryptionKeys(encrypt2, strength, password) {
  const salt = getRandomValues(new Uint8Array(SALT_LENGTH[strength]));
  const passwordVerification = await createKeys$1(encrypt2, strength, password, salt);
  return concat(salt, passwordVerification);
}
async function createKeys$1(aesCrypto, strength, password, salt) {
  aesCrypto.password = null;
  const baseKey = await importKey(RAW_FORMAT, password, BASE_KEY_ALGORITHM, false, DERIVED_BITS_USAGE);
  const derivedBits = await deriveBits(Object.assign({ salt }, DERIVED_BITS_ALGORITHM), baseKey, 8 * (KEY_LENGTH[strength] * 2 + 2));
  const compositeKey = new Uint8Array(derivedBits);
  const key = toBits(codecBytes, subarray(compositeKey, 0, KEY_LENGTH[strength]));
  const authentication = toBits(codecBytes, subarray(compositeKey, KEY_LENGTH[strength], KEY_LENGTH[strength] * 2));
  const passwordVerification = subarray(compositeKey, KEY_LENGTH[strength] * 2);
  Object.assign(aesCrypto, {
    keys: {
      key,
      authentication,
      passwordVerification
    },
    ctr: new CtrGladman(new Aes(key), Array.from(COUNTER_DEFAULT_VALUE)),
    hmac: new HmacSha1(authentication)
  });
  return passwordVerification;
}
async function importKey(format, password, algorithm, extractable, keyUsages) {
  if (IMPORT_KEY_SUPPORTED) {
    try {
      return await subtle.importKey(format, password, algorithm, extractable, keyUsages);
    } catch (_) {
      IMPORT_KEY_SUPPORTED = false;
      return misc.importKey(password);
    }
  } else {
    return misc.importKey(password);
  }
}
async function deriveBits(algorithm, baseKey, length) {
  if (DERIVE_BITS_SUPPORTED) {
    try {
      return await subtle.deriveBits(algorithm, baseKey, length);
    } catch (_) {
      DERIVE_BITS_SUPPORTED = false;
      return misc.pbkdf2(baseKey, algorithm.salt, DERIVED_BITS_ALGORITHM.iterations, length);
    }
  } else {
    return misc.pbkdf2(baseKey, algorithm.salt, DERIVED_BITS_ALGORITHM.iterations, length);
  }
}
function encodePassword(password, rawPassword) {
  if (rawPassword === UNDEFINED_VALUE) {
    return encodeText(password);
  } else {
    return rawPassword;
  }
}
function concat(leftArray, rightArray) {
  let array = leftArray;
  if (leftArray.length + rightArray.length) {
    array = new Uint8Array(leftArray.length + rightArray.length);
    array.set(leftArray, 0);
    array.set(rightArray, leftArray.length);
  }
  return array;
}
function expand(inputArray, length) {
  if (length && length > inputArray.length) {
    const array = inputArray;
    inputArray = new Uint8Array(length);
    inputArray.set(array, 0);
  }
  return inputArray;
}
function subarray(array, begin, end) {
  return array.subarray(begin, end);
}
function fromBits(codecBytes2, chunk) {
  return codecBytes2.fromBits(chunk);
}
function toBits(codecBytes2, chunk) {
  return codecBytes2.toBits(chunk);
}
const HEADER_LENGTH = 12;
class ZipCryptoDecryptionStream extends TransformStream {
  constructor({ password, passwordVerification, checkPasswordOnly }) {
    super({
      start() {
        Object.assign(this, {
          password,
          passwordVerification
        });
        createKeys(this, password);
      },
      transform(chunk, controller) {
        const zipCrypto = this;
        if (zipCrypto.password) {
          const decryptedHeader = decrypt(zipCrypto, chunk.subarray(0, HEADER_LENGTH));
          zipCrypto.password = null;
          if (decryptedHeader[HEADER_LENGTH - 1] != zipCrypto.passwordVerification) {
            throw new Error(ERR_INVALID_PASSWORD);
          }
          chunk = chunk.subarray(HEADER_LENGTH);
        }
        if (checkPasswordOnly) {
          controller.error(new Error(ERR_ABORT_CHECK_PASSWORD));
        } else {
          controller.enqueue(decrypt(zipCrypto, chunk));
        }
      }
    });
  }
}
class ZipCryptoEncryptionStream extends TransformStream {
  constructor({ password, passwordVerification }) {
    super({
      start() {
        Object.assign(this, {
          password,
          passwordVerification
        });
        createKeys(this, password);
      },
      transform(chunk, controller) {
        const zipCrypto = this;
        let output;
        let offset;
        if (zipCrypto.password) {
          zipCrypto.password = null;
          const header = getRandomValues(new Uint8Array(HEADER_LENGTH));
          header[HEADER_LENGTH - 1] = zipCrypto.passwordVerification;
          output = new Uint8Array(chunk.length + header.length);
          output.set(encrypt(zipCrypto, header), 0);
          offset = HEADER_LENGTH;
        } else {
          output = new Uint8Array(chunk.length);
          offset = 0;
        }
        output.set(encrypt(zipCrypto, chunk), offset);
        controller.enqueue(output);
      }
    });
  }
}
function decrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, output[index]);
  }
  return output;
}
function encrypt(target, input) {
  const output = new Uint8Array(input.length);
  for (let index = 0; index < input.length; index++) {
    output[index] = getByte(target) ^ input[index];
    updateKeys(target, input[index]);
  }
  return output;
}
function createKeys(target, password) {
  const keys = [305419896, 591751049, 878082192];
  Object.assign(target, {
    keys,
    crcKey0: new Crc32(keys[0]),
    crcKey2: new Crc32(keys[2])
  });
  for (let index = 0; index < password.length; index++) {
    updateKeys(target, password.charCodeAt(index));
  }
}
function updateKeys(target, byte) {
  let [key0, key1, key2] = target.keys;
  target.crcKey0.append([byte]);
  key0 = ~target.crcKey0.get();
  key1 = getInt32(Math.imul(getInt32(key1 + getInt8(key0)), 134775813) + 1);
  target.crcKey2.append([key1 >>> 24]);
  key2 = ~target.crcKey2.get();
  target.keys = [key0, key1, key2];
}
function getByte(target) {
  const temp = target.keys[2] | 2;
  return getInt8(Math.imul(temp, temp ^ 1) >>> 8);
}
function getInt8(number) {
  return number & 255;
}
function getInt32(number) {
  return number & 4294967295;
}
const COMPRESSION_FORMAT = "deflate-raw";
class DeflateStream extends TransformStream {
  constructor(options, { chunkSize, CompressionStream: CompressionStream2, CompressionStreamNative }) {
    super({});
    const { compressed, encrypted, useCompressionStream, zipCrypto, signed, level } = options;
    const stream = this;
    let crc32Stream, encryptionStream;
    let readable = filterEmptyChunks(super.readable);
    if ((!encrypted || zipCrypto) && signed) {
      crc32Stream = new Crc32Stream();
      readable = pipeThrough(readable, crc32Stream);
    }
    if (compressed) {
      readable = pipeThroughCommpressionStream(readable, useCompressionStream, { level, chunkSize }, CompressionStreamNative, CompressionStream2);
    }
    if (encrypted) {
      if (zipCrypto) {
        readable = pipeThrough(readable, new ZipCryptoEncryptionStream(options));
      } else {
        encryptionStream = new AESEncryptionStream(options);
        readable = pipeThrough(readable, encryptionStream);
      }
    }
    setReadable(stream, readable, () => {
      let signature;
      if (encrypted && !zipCrypto) {
        signature = encryptionStream.signature;
      }
      if ((!encrypted || zipCrypto) && signed) {
        signature = new DataView(crc32Stream.value.buffer).getUint32(0);
      }
      stream.signature = signature;
    });
  }
}
class InflateStream extends TransformStream {
  constructor(options, { chunkSize, DecompressionStream: DecompressionStream2, DecompressionStreamNative }) {
    super({});
    const { zipCrypto, encrypted, signed, signature, compressed, useCompressionStream } = options;
    let crc32Stream, decryptionStream;
    let readable = filterEmptyChunks(super.readable);
    if (encrypted) {
      if (zipCrypto) {
        readable = pipeThrough(readable, new ZipCryptoDecryptionStream(options));
      } else {
        decryptionStream = new AESDecryptionStream(options);
        readable = pipeThrough(readable, decryptionStream);
      }
    }
    if (compressed) {
      readable = pipeThroughCommpressionStream(readable, useCompressionStream, { chunkSize }, DecompressionStreamNative, DecompressionStream2);
    }
    if ((!encrypted || zipCrypto) && signed) {
      crc32Stream = new Crc32Stream();
      readable = pipeThrough(readable, crc32Stream);
    }
    setReadable(this, readable, () => {
      if ((!encrypted || zipCrypto) && signed) {
        const dataViewSignature = new DataView(crc32Stream.value.buffer);
        if (signature != dataViewSignature.getUint32(0, false)) {
          throw new Error(ERR_INVALID_SIGNATURE);
        }
      }
    });
  }
}
function filterEmptyChunks(readable) {
  return pipeThrough(readable, new TransformStream({
    transform(chunk, controller) {
      if (chunk && chunk.length) {
        controller.enqueue(chunk);
      }
    }
  }));
}
function setReadable(stream, readable, flush) {
  readable = pipeThrough(readable, new TransformStream({ flush }));
  Object.defineProperty(stream, "readable", {
    get() {
      return readable;
    }
  });
}
function pipeThroughCommpressionStream(readable, useCompressionStream, options, CodecStreamNative, CodecStream2) {
  try {
    const CompressionStream2 = useCompressionStream && CodecStreamNative ? CodecStreamNative : CodecStream2;
    readable = pipeThrough(readable, new CompressionStream2(COMPRESSION_FORMAT, options));
  } catch (_) {
    if (useCompressionStream) {
      try {
        readable = pipeThrough(readable, new CodecStream2(COMPRESSION_FORMAT, options));
      } catch (_2) {
        return readable;
      }
    } else {
      return readable;
    }
  }
  return readable;
}
function pipeThrough(readable, transformStream) {
  return readable.pipeThrough(transformStream);
}
const MESSAGE_EVENT_TYPE = "message";
const MESSAGE_START = "start";
const MESSAGE_PULL = "pull";
const MESSAGE_DATA = "data";
const MESSAGE_ACK_DATA = "ack";
const MESSAGE_CLOSE = "close";
const CODEC_DEFLATE = "deflate";
const CODEC_INFLATE = "inflate";
class CodecStream extends TransformStream {
  constructor(options, config2) {
    super({});
    const codec2 = this;
    const { codecType } = options;
    let Stream2;
    if (codecType.startsWith(CODEC_DEFLATE)) {
      Stream2 = DeflateStream;
    } else if (codecType.startsWith(CODEC_INFLATE)) {
      Stream2 = InflateStream;
    }
    let outputSize = 0;
    let inputSize = 0;
    const stream = new Stream2(options, config2);
    const readable = super.readable;
    const inputSizeStream = new TransformStream({
      transform(chunk, controller) {
        if (chunk && chunk.length) {
          inputSize += chunk.length;
          controller.enqueue(chunk);
        }
      },
      flush() {
        Object.assign(codec2, {
          inputSize
        });
      }
    });
    const outputSizeStream = new TransformStream({
      transform(chunk, controller) {
        if (chunk && chunk.length) {
          outputSize += chunk.length;
          controller.enqueue(chunk);
        }
      },
      flush() {
        const { signature } = stream;
        Object.assign(codec2, {
          signature,
          outputSize,
          inputSize
        });
      }
    });
    Object.defineProperty(codec2, "readable", {
      get() {
        return readable.pipeThrough(inputSizeStream).pipeThrough(stream).pipeThrough(outputSizeStream);
      }
    });
  }
}
class ChunkStream extends TransformStream {
  constructor(chunkSize) {
    let pendingChunk;
    super({
      transform,
      flush(controller) {
        if (pendingChunk && pendingChunk.length) {
          controller.enqueue(pendingChunk);
        }
      }
    });
    function transform(chunk, controller) {
      if (pendingChunk) {
        const newChunk = new Uint8Array(pendingChunk.length + chunk.length);
        newChunk.set(pendingChunk);
        newChunk.set(chunk, pendingChunk.length);
        chunk = newChunk;
        pendingChunk = null;
      }
      if (chunk.length > chunkSize) {
        controller.enqueue(chunk.slice(0, chunkSize));
        transform(chunk.slice(chunkSize), controller);
      } else {
        pendingChunk = chunk;
      }
    }
  }
}
let WEB_WORKERS_SUPPORTED = typeof Worker != UNDEFINED_TYPE;
class CodecWorker {
  constructor(workerData, { readable, writable }, { options, config: config2, streamOptions, useWebWorkers, transferStreams, scripts }, onTaskFinished) {
    const { signal } = streamOptions;
    Object.assign(workerData, {
      busy: true,
      readable: readable.pipeThrough(new ChunkStream(config2.chunkSize)).pipeThrough(new ProgressWatcherStream(readable, streamOptions), { signal }),
      writable,
      options: Object.assign({}, options),
      scripts,
      transferStreams,
      terminate() {
        return new Promise((resolve) => {
          const { worker, busy } = workerData;
          if (worker) {
            if (busy) {
              workerData.resolveTerminated = resolve;
            } else {
              worker.terminate();
              resolve();
            }
            workerData.interface = null;
          } else {
            resolve();
          }
        });
      },
      onTaskFinished() {
        const { resolveTerminated } = workerData;
        if (resolveTerminated) {
          workerData.resolveTerminated = null;
          workerData.terminated = true;
          workerData.worker.terminate();
          resolveTerminated();
        }
        workerData.busy = false;
        onTaskFinished(workerData);
      }
    });
    return (useWebWorkers && WEB_WORKERS_SUPPORTED ? createWebWorkerInterface : createWorkerInterface)(workerData, config2);
  }
}
class ProgressWatcherStream extends TransformStream {
  constructor(readableSource, { onstart, onprogress, size, onend }) {
    let chunkOffset = 0;
    super({
      async start() {
        if (onstart) {
          await callHandler(onstart, size);
        }
      },
      async transform(chunk, controller) {
        chunkOffset += chunk.length;
        if (onprogress) {
          await callHandler(onprogress, chunkOffset, size);
        }
        controller.enqueue(chunk);
      },
      async flush() {
        readableSource.size = chunkOffset;
        if (onend) {
          await callHandler(onend, chunkOffset);
        }
      }
    });
  }
}
async function callHandler(handler, ...parameters) {
  try {
    await handler(...parameters);
  } catch (_) {
  }
}
function createWorkerInterface(workerData, config2) {
  return {
    run: () => runWorker$1(workerData, config2)
  };
}
function createWebWorkerInterface(workerData, config2) {
  const { baseURL, chunkSize } = config2;
  if (!workerData.interface) {
    let worker;
    try {
      worker = getWebWorker(workerData.scripts[0], baseURL, workerData);
    } catch (_) {
      WEB_WORKERS_SUPPORTED = false;
      return createWorkerInterface(workerData, config2);
    }
    Object.assign(workerData, {
      worker,
      interface: {
        run: () => runWebWorker(workerData, { chunkSize })
      }
    });
  }
  return workerData.interface;
}
async function runWorker$1({ options, readable, writable, onTaskFinished }, config2) {
  try {
    const codecStream = new CodecStream(options, config2);
    await readable.pipeThrough(codecStream).pipeTo(writable, { preventClose: true, preventAbort: true });
    const {
      signature,
      inputSize,
      outputSize
    } = codecStream;
    return {
      signature,
      inputSize,
      outputSize
    };
  } finally {
    onTaskFinished();
  }
}
async function runWebWorker(workerData, config2) {
  let resolveResult, rejectResult;
  const result = new Promise((resolve, reject) => {
    resolveResult = resolve;
    rejectResult = reject;
  });
  Object.assign(workerData, {
    reader: null,
    writer: null,
    resolveResult,
    rejectResult,
    result
  });
  const { readable, options, scripts } = workerData;
  const { writable, closed } = watchClosedStream(workerData.writable);
  const streamsTransferred = sendMessage({
    type: MESSAGE_START,
    scripts: scripts.slice(1),
    options,
    config: config2,
    readable,
    writable
  }, workerData);
  if (!streamsTransferred) {
    Object.assign(workerData, {
      reader: readable.getReader(),
      writer: writable.getWriter()
    });
  }
  const resultValue = await result;
  if (!streamsTransferred) {
    await writable.getWriter().close();
  }
  await closed;
  return resultValue;
}
function watchClosedStream(writableSource) {
  let resolveStreamClosed;
  const closed = new Promise((resolve) => resolveStreamClosed = resolve);
  const writable = new WritableStream({
    async write(chunk) {
      const writer = writableSource.getWriter();
      await writer.ready;
      await writer.write(chunk);
      writer.releaseLock();
    },
    close() {
      resolveStreamClosed();
    },
    abort(reason) {
      const writer = writableSource.getWriter();
      return writer.abort(reason);
    }
  });
  return { writable, closed };
}
let classicWorkersSupported = true;
let transferStreamsSupported = true;
function getWebWorker(url, baseURL, workerData) {
  const workerOptions = { type: "module" };
  let scriptUrl, worker;
  if (typeof url == FUNCTION_TYPE) {
    url = url();
  }
  try {
    scriptUrl = new URL(url, baseURL);
  } catch (_) {
    scriptUrl = url;
  }
  if (classicWorkersSupported) {
    try {
      worker = new Worker(scriptUrl);
    } catch (_) {
      classicWorkersSupported = false;
      worker = new Worker(scriptUrl, workerOptions);
    }
  } else {
    worker = new Worker(scriptUrl, workerOptions);
  }
  worker.addEventListener(MESSAGE_EVENT_TYPE, (event) => onMessage(event, workerData));
  return worker;
}
function sendMessage(message, { worker, writer, onTaskFinished, transferStreams }) {
  try {
    const { value, readable, writable } = message;
    const transferables = [];
    if (value) {
      if (value.byteLength < value.buffer.byteLength) {
        message.value = value.buffer.slice(0, value.byteLength);
      } else {
        message.value = value.buffer;
      }
      transferables.push(message.value);
    }
    if (transferStreams && transferStreamsSupported) {
      if (readable) {
        transferables.push(readable);
      }
      if (writable) {
        transferables.push(writable);
      }
    } else {
      message.readable = message.writable = null;
    }
    if (transferables.length) {
      try {
        worker.postMessage(message, transferables);
        return true;
      } catch (_) {
        transferStreamsSupported = false;
        message.readable = message.writable = null;
        worker.postMessage(message);
      }
    } else {
      worker.postMessage(message);
    }
  } catch (error) {
    if (writer) {
      writer.releaseLock();
    }
    onTaskFinished();
    throw error;
  }
}
async function onMessage({ data }, workerData) {
  const { type, value, messageId, result, error } = data;
  const { reader, writer, resolveResult, rejectResult, onTaskFinished } = workerData;
  try {
    if (error) {
      const { message, stack, code, name } = error;
      const responseError = new Error(message);
      Object.assign(responseError, { stack, code, name });
      close(responseError);
    } else {
      if (type == MESSAGE_PULL) {
        const { value: value2, done } = await reader.read();
        sendMessage({ type: MESSAGE_DATA, value: value2, done, messageId }, workerData);
      }
      if (type == MESSAGE_DATA) {
        await writer.ready;
        await writer.write(new Uint8Array(value));
        sendMessage({ type: MESSAGE_ACK_DATA, messageId }, workerData);
      }
      if (type == MESSAGE_CLOSE) {
        close(null, result);
      }
    }
  } catch (error2) {
    sendMessage({ type: MESSAGE_CLOSE, messageId }, workerData);
    close(error2);
  }
  function close(error2, result2) {
    if (error2) {
      rejectResult(error2);
    } else {
      resolveResult(result2);
    }
    if (writer) {
      writer.releaseLock();
    }
    onTaskFinished();
  }
}
let pool = [];
const pendingRequests = [];
let indexWorker = 0;
async function runWorker(stream, workerOptions) {
  const { options, config: config2 } = workerOptions;
  const { transferStreams, useWebWorkers, useCompressionStream, codecType, compressed, signed, encrypted } = options;
  const { workerScripts, maxWorkers: maxWorkers2 } = config2;
  workerOptions.transferStreams = transferStreams || transferStreams === UNDEFINED_VALUE;
  const streamCopy = !compressed && !signed && !encrypted && !workerOptions.transferStreams;
  workerOptions.useWebWorkers = !streamCopy && (useWebWorkers || useWebWorkers === UNDEFINED_VALUE && config2.useWebWorkers);
  workerOptions.scripts = workerOptions.useWebWorkers && workerScripts ? workerScripts[codecType] : [];
  options.useCompressionStream = useCompressionStream || useCompressionStream === UNDEFINED_VALUE && config2.useCompressionStream;
  return (await getWorker()).run();
  async function getWorker() {
    const workerData = pool.find((workerData2) => !workerData2.busy);
    if (workerData) {
      clearTerminateTimeout(workerData);
      return new CodecWorker(workerData, stream, workerOptions, onTaskFinished);
    } else if (pool.length < maxWorkers2) {
      const workerData2 = { indexWorker };
      indexWorker++;
      pool.push(workerData2);
      return new CodecWorker(workerData2, stream, workerOptions, onTaskFinished);
    } else {
      return new Promise((resolve) => pendingRequests.push({ resolve, stream, workerOptions }));
    }
  }
  function onTaskFinished(workerData) {
    if (pendingRequests.length) {
      const [{ resolve, stream: stream2, workerOptions: workerOptions2 }] = pendingRequests.splice(0, 1);
      resolve(new CodecWorker(workerData, stream2, workerOptions2, onTaskFinished));
    } else if (workerData.worker) {
      clearTerminateTimeout(workerData);
      terminateWorker(workerData, workerOptions);
    } else {
      pool = pool.filter((data) => data != workerData);
    }
  }
}
function terminateWorker(workerData, workerOptions) {
  const { config: config2 } = workerOptions;
  const { terminateWorkerTimeout } = config2;
  if (Number.isFinite(terminateWorkerTimeout) && terminateWorkerTimeout >= 0) {
    if (workerData.terminated) {
      workerData.terminated = false;
    } else {
      workerData.terminateTimeout = setTimeout(async () => {
        pool = pool.filter((data) => data != workerData);
        try {
          await workerData.terminate();
        } catch (_) {
        }
      }, terminateWorkerTimeout);
    }
  }
}
function clearTerminateTimeout(workerData) {
  const { terminateTimeout } = workerData;
  if (terminateTimeout) {
    clearTimeout(terminateTimeout);
    workerData.terminateTimeout = null;
  }
}
async function terminateWorkers() {
  await Promise.allSettled(pool.map((workerData) => {
    clearTerminateTimeout(workerData);
    return workerData.terminate();
  }));
}
const ERR_HTTP_STATUS = "HTTP error ";
const ERR_HTTP_RANGE = "HTTP Range not supported";
const ERR_ITERATOR_COMPLETED_TOO_SOON = "Writer iterator completed too soon";
const CONTENT_TYPE_TEXT_PLAIN = "text/plain";
const HTTP_HEADER_CONTENT_LENGTH = "Content-Length";
const HTTP_HEADER_CONTENT_RANGE = "Content-Range";
const HTTP_HEADER_ACCEPT_RANGES = "Accept-Ranges";
const HTTP_HEADER_RANGE = "Range";
const HTTP_HEADER_CONTENT_TYPE = "Content-Type";
const HTTP_METHOD_HEAD = "HEAD";
const HTTP_METHOD_GET = "GET";
const HTTP_RANGE_UNIT = "bytes";
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const PROPERTY_NAME_WRITABLE = "writable";
class Stream {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = true;
  }
}
class Reader extends Stream {
  get readable() {
    const reader = this;
    const { chunkSize = DEFAULT_CHUNK_SIZE } = reader;
    const readable = new ReadableStream({
      start() {
        this.chunkOffset = 0;
      },
      async pull(controller) {
        const { offset = 0, size, diskNumberStart } = readable;
        const { chunkOffset } = this;
        controller.enqueue(await readUint8Array(reader, offset + chunkOffset, Math.min(chunkSize, size - chunkOffset), diskNumberStart));
        if (chunkOffset + chunkSize > size) {
          controller.close();
        } else {
          this.chunkOffset += chunkSize;
        }
      }
    });
    return readable;
  }
}
class Writer extends Stream {
  constructor() {
    super();
    const writer = this;
    const writable = new WritableStream({
      write(chunk) {
        return writer.writeUint8Array(chunk);
      }
    });
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return writable;
      }
    });
  }
  writeUint8Array() {
  }
}
class Data64URIReader extends Reader {
  constructor(dataURI) {
    super();
    let dataEnd = dataURI.length;
    while (dataURI.charAt(dataEnd - 1) == "=") {
      dataEnd--;
    }
    const dataStart = dataURI.indexOf(",") + 1;
    Object.assign(this, {
      dataURI,
      dataStart,
      size: Math.floor((dataEnd - dataStart) * 0.75)
    });
  }
  readUint8Array(offset, length) {
    const {
      dataStart,
      dataURI
    } = this;
    const dataArray = new Uint8Array(length);
    const start = Math.floor(offset / 3) * 4;
    const bytes = atob(dataURI.substring(start + dataStart, Math.ceil((offset + length) / 3) * 4 + dataStart));
    const delta = offset - Math.floor(start / 4) * 3;
    for (let indexByte = delta; indexByte < delta + length; indexByte++) {
      dataArray[indexByte - delta] = bytes.charCodeAt(indexByte);
    }
    return dataArray;
  }
}
class Data64URIWriter extends Writer {
  constructor(contentType) {
    super();
    Object.assign(this, {
      data: "data:" + (contentType || "") + ";base64,",
      pending: []
    });
  }
  writeUint8Array(array) {
    const writer = this;
    let indexArray = 0;
    let dataString = writer.pending;
    const delta = writer.pending.length;
    writer.pending = "";
    for (indexArray = 0; indexArray < Math.floor((delta + array.length) / 3) * 3 - delta; indexArray++) {
      dataString += String.fromCharCode(array[indexArray]);
    }
    for (; indexArray < array.length; indexArray++) {
      writer.pending += String.fromCharCode(array[indexArray]);
    }
    if (dataString.length > 2) {
      writer.data += btoa(dataString);
    } else {
      writer.pending = dataString;
    }
  }
  getData() {
    return this.data + btoa(this.pending);
  }
}
class BlobReader extends Reader {
  constructor(blob) {
    super();
    Object.assign(this, {
      blob,
      size: blob.size
    });
  }
  async readUint8Array(offset, length) {
    const reader = this;
    const offsetEnd = offset + length;
    const blob = offset || offsetEnd < reader.size ? reader.blob.slice(offset, offsetEnd) : reader.blob;
    let arrayBuffer = await blob.arrayBuffer();
    if (arrayBuffer.byteLength > length) {
      arrayBuffer = arrayBuffer.slice(offset, offsetEnd);
    }
    return new Uint8Array(arrayBuffer);
  }
}
class BlobWriter extends Stream {
  constructor(contentType) {
    super();
    const writer = this;
    const transformStream = new TransformStream();
    const headers = [];
    if (contentType) {
      headers.push([HTTP_HEADER_CONTENT_TYPE, contentType]);
    }
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return transformStream.writable;
      }
    });
    writer.blob = new Response(transformStream.readable, { headers }).blob();
  }
  getData() {
    return this.blob;
  }
}
class TextReader extends BlobReader {
  constructor(text) {
    super(new Blob([text], { type: CONTENT_TYPE_TEXT_PLAIN }));
  }
}
class TextWriter extends BlobWriter {
  constructor(encoding) {
    super(encoding);
    Object.assign(this, {
      encoding,
      utf8: !encoding || encoding.toLowerCase() == "utf-8"
    });
  }
  async getData() {
    const {
      encoding,
      utf8
    } = this;
    const blob = await super.getData();
    if (blob.text && utf8) {
      return blob.text();
    } else {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        Object.assign(reader, {
          onload: ({ target }) => resolve(target.result),
          onerror: () => reject(reader.error)
        });
        reader.readAsText(blob, encoding);
      });
    }
  }
}
class FetchReader extends Reader {
  constructor(url, options) {
    super();
    createHttpReader(this, url, options);
  }
  async init() {
    await initHttpReader(this, sendFetchRequest, getFetchRequestData);
    super.init();
  }
  readUint8Array(index, length) {
    return readUint8ArrayHttpReader(this, index, length, sendFetchRequest, getFetchRequestData);
  }
}
class XHRReader extends Reader {
  constructor(url, options) {
    super();
    createHttpReader(this, url, options);
  }
  async init() {
    await initHttpReader(this, sendXMLHttpRequest, getXMLHttpRequestData);
    super.init();
  }
  readUint8Array(index, length) {
    return readUint8ArrayHttpReader(this, index, length, sendXMLHttpRequest, getXMLHttpRequestData);
  }
}
function createHttpReader(httpReader, url, options) {
  const {
    preventHeadRequest,
    useRangeHeader,
    forceRangeRequests,
    combineSizeEocd
  } = options;
  options = Object.assign({}, options);
  delete options.preventHeadRequest;
  delete options.useRangeHeader;
  delete options.forceRangeRequests;
  delete options.combineSizeEocd;
  delete options.useXHR;
  Object.assign(httpReader, {
    url,
    options,
    preventHeadRequest,
    useRangeHeader,
    forceRangeRequests,
    combineSizeEocd
  });
}
async function initHttpReader(httpReader, sendRequest, getRequestData2) {
  const {
    url,
    preventHeadRequest,
    useRangeHeader,
    forceRangeRequests,
    combineSizeEocd
  } = httpReader;
  if (isHttpFamily(url) && (useRangeHeader || forceRangeRequests) && (typeof preventHeadRequest == "undefined" || preventHeadRequest)) {
    const response = await sendRequest(HTTP_METHOD_GET, httpReader, getRangeHeaders(httpReader, combineSizeEocd ? -22 : void 0));
    if (!forceRangeRequests && response.headers.get(HTTP_HEADER_ACCEPT_RANGES) != HTTP_RANGE_UNIT) {
      throw new Error(ERR_HTTP_RANGE);
    } else {
      if (combineSizeEocd) {
        httpReader.eocdCache = new Uint8Array(await response.arrayBuffer());
      }
      let contentSize;
      const contentRangeHeader = response.headers.get(HTTP_HEADER_CONTENT_RANGE);
      if (contentRangeHeader) {
        const splitHeader = contentRangeHeader.trim().split(/\s*\/\s*/);
        if (splitHeader.length) {
          const headerValue = splitHeader[1];
          if (headerValue && headerValue != "*") {
            contentSize = Number(headerValue);
          }
        }
      }
      if (contentSize === UNDEFINED_VALUE) {
        await getContentLength(httpReader, sendRequest, getRequestData2);
      } else {
        httpReader.size = contentSize;
      }
    }
  } else {
    await getContentLength(httpReader, sendRequest, getRequestData2);
  }
}
async function readUint8ArrayHttpReader(httpReader, index, length, sendRequest, getRequestData2) {
  const {
    useRangeHeader,
    forceRangeRequests,
    eocdCache,
    size,
    options
  } = httpReader;
  if (useRangeHeader || forceRangeRequests) {
    if (eocdCache && index == size - END_OF_CENTRAL_DIR_LENGTH && length == END_OF_CENTRAL_DIR_LENGTH) {
      return eocdCache;
    }
    const response = await sendRequest(HTTP_METHOD_GET, httpReader, getRangeHeaders(httpReader, index, length));
    if (response.status != 206) {
      throw new Error(ERR_HTTP_RANGE);
    }
    return new Uint8Array(await response.arrayBuffer());
  } else {
    const { data } = httpReader;
    if (!data) {
      await getRequestData2(httpReader, options);
    }
    return new Uint8Array(httpReader.data.subarray(index, index + length));
  }
}
function getRangeHeaders(httpReader, index = 0, length = 1) {
  return Object.assign({}, getHeaders(httpReader), { [HTTP_HEADER_RANGE]: HTTP_RANGE_UNIT + "=" + (index < 0 ? index : index + "-" + (index + length - 1)) });
}
function getHeaders({ options }) {
  const { headers } = options;
  if (headers) {
    if (Symbol.iterator in headers) {
      return Object.fromEntries(headers);
    } else {
      return headers;
    }
  }
}
async function getFetchRequestData(httpReader) {
  await getRequestData(httpReader, sendFetchRequest);
}
async function getXMLHttpRequestData(httpReader) {
  await getRequestData(httpReader, sendXMLHttpRequest);
}
async function getRequestData(httpReader, sendRequest) {
  const response = await sendRequest(HTTP_METHOD_GET, httpReader, getHeaders(httpReader));
  httpReader.data = new Uint8Array(await response.arrayBuffer());
  if (!httpReader.size) {
    httpReader.size = httpReader.data.length;
  }
}
async function getContentLength(httpReader, sendRequest, getRequestData2) {
  if (httpReader.preventHeadRequest) {
    await getRequestData2(httpReader, httpReader.options);
  } else {
    const response = await sendRequest(HTTP_METHOD_HEAD, httpReader, getHeaders(httpReader));
    const contentLength = response.headers.get(HTTP_HEADER_CONTENT_LENGTH);
    if (contentLength) {
      httpReader.size = Number(contentLength);
    } else {
      await getRequestData2(httpReader, httpReader.options);
    }
  }
}
async function sendFetchRequest(method, { options, url }, headers) {
  const response = await fetch(url, Object.assign({}, options, { method, headers }));
  if (response.status < 400) {
    return response;
  } else {
    throw response.status == 416 ? new Error(ERR_HTTP_RANGE) : new Error(ERR_HTTP_STATUS + (response.statusText || response.status));
  }
}
function sendXMLHttpRequest(method, { url }, headers) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("load", () => {
      if (request.status < 400) {
        const headers2 = [];
        request.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((header) => {
          const splitHeader = header.trim().split(/\s*:\s*/);
          splitHeader[0] = splitHeader[0].trim().replace(/^[a-z]|-[a-z]/g, (value) => value.toUpperCase());
          headers2.push(splitHeader);
        });
        resolve({
          status: request.status,
          arrayBuffer: () => request.response,
          headers: new Map(headers2)
        });
      } else {
        reject(request.status == 416 ? new Error(ERR_HTTP_RANGE) : new Error(ERR_HTTP_STATUS + (request.statusText || request.status)));
      }
    }, false);
    request.addEventListener("error", (event) => reject(event.detail ? event.detail.error : new Error("Network error")), false);
    request.open(method, url);
    if (headers) {
      for (const entry of Object.entries(headers)) {
        request.setRequestHeader(entry[0], entry[1]);
      }
    }
    request.responseType = "arraybuffer";
    request.send();
  });
}
class HttpReader extends Reader {
  constructor(url, options = {}) {
    super();
    Object.assign(this, {
      url,
      reader: options.useXHR ? new XHRReader(url, options) : new FetchReader(url, options)
    });
  }
  set size(value) {
  }
  get size() {
    return this.reader.size;
  }
  async init() {
    await this.reader.init();
    super.init();
  }
  readUint8Array(index, length) {
    return this.reader.readUint8Array(index, length);
  }
}
class HttpRangeReader extends HttpReader {
  constructor(url, options = {}) {
    options.useRangeHeader = true;
    super(url, options);
  }
}
class Uint8ArrayReader extends Reader {
  constructor(array) {
    super();
    Object.assign(this, {
      array,
      size: array.length
    });
  }
  readUint8Array(index, length) {
    return this.array.slice(index, index + length);
  }
}
class Uint8ArrayWriter extends Writer {
  init(initSize = 0) {
    Object.assign(this, {
      offset: 0,
      array: new Uint8Array(initSize)
    });
    super.init();
  }
  writeUint8Array(array) {
    const writer = this;
    if (writer.offset + array.length > writer.array.length) {
      const previousArray = writer.array;
      writer.array = new Uint8Array(previousArray.length + array.length);
      writer.array.set(previousArray);
    }
    writer.array.set(array, writer.offset);
    writer.offset += array.length;
  }
  getData() {
    return this.array;
  }
}
class SplitDataReader extends Reader {
  constructor(readers) {
    super();
    this.readers = readers;
  }
  async init() {
    const reader = this;
    const { readers } = reader;
    reader.lastDiskNumber = 0;
    reader.lastDiskOffset = 0;
    await Promise.all(readers.map(async (diskReader, indexDiskReader) => {
      await diskReader.init();
      if (indexDiskReader != readers.length - 1) {
        reader.lastDiskOffset += diskReader.size;
      }
      reader.size += diskReader.size;
    }));
    super.init();
  }
  async readUint8Array(offset, length, diskNumber = 0) {
    const reader = this;
    const { readers } = this;
    let result;
    let currentDiskNumber = diskNumber;
    if (currentDiskNumber == -1) {
      currentDiskNumber = readers.length - 1;
    }
    let currentReaderOffset = offset;
    while (currentReaderOffset >= readers[currentDiskNumber].size) {
      currentReaderOffset -= readers[currentDiskNumber].size;
      currentDiskNumber++;
    }
    const currentReader = readers[currentDiskNumber];
    const currentReaderSize = currentReader.size;
    if (currentReaderOffset + length <= currentReaderSize) {
      result = await readUint8Array(currentReader, currentReaderOffset, length);
    } else {
      const chunkLength = currentReaderSize - currentReaderOffset;
      result = new Uint8Array(length);
      result.set(await readUint8Array(currentReader, currentReaderOffset, chunkLength));
      result.set(await reader.readUint8Array(offset + chunkLength, length - chunkLength, diskNumber), chunkLength);
    }
    reader.lastDiskNumber = Math.max(currentDiskNumber, reader.lastDiskNumber);
    return result;
  }
}
class SplitDataWriter extends Stream {
  constructor(writerGenerator, maxSize = 4294967295) {
    super();
    const writer = this;
    Object.assign(writer, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize,
      availableSize: maxSize
    });
    let diskSourceWriter, diskWritable, diskWriter;
    const writable = new WritableStream({
      async write(chunk) {
        const { availableSize } = writer;
        if (!diskWriter) {
          const { value, done } = await writerGenerator.next();
          if (done && !value) {
            throw new Error(ERR_ITERATOR_COMPLETED_TOO_SOON);
          } else {
            diskSourceWriter = value;
            diskSourceWriter.size = 0;
            if (diskSourceWriter.maxSize) {
              writer.maxSize = diskSourceWriter.maxSize;
            }
            writer.availableSize = writer.maxSize;
            await initStream(diskSourceWriter);
            diskWritable = value.writable;
            diskWriter = diskWritable.getWriter();
          }
          await this.write(chunk);
        } else if (chunk.length >= availableSize) {
          await writeChunk(chunk.slice(0, availableSize));
          await closeDisk();
          writer.diskOffset += diskSourceWriter.size;
          writer.diskNumber++;
          diskWriter = null;
          await this.write(chunk.slice(availableSize));
        } else {
          await writeChunk(chunk);
        }
      },
      async close() {
        await diskWriter.ready;
        await closeDisk();
      }
    });
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return writable;
      }
    });
    async function writeChunk(chunk) {
      const chunkLength = chunk.length;
      if (chunkLength) {
        await diskWriter.ready;
        await diskWriter.write(chunk);
        diskSourceWriter.size += chunkLength;
        writer.size += chunkLength;
        writer.availableSize -= chunkLength;
      }
    }
    async function closeDisk() {
      diskWritable.size = diskSourceWriter.size;
      await diskWriter.close();
    }
  }
}
function isHttpFamily(url) {
  const { baseURL } = getConfiguration();
  const { protocol } = new URL(url, baseURL);
  return protocol == "http:" || protocol == "https:";
}
async function initStream(stream, initSize) {
  if (stream.init && !stream.initialized) {
    await stream.init(initSize);
  } else {
    return Promise.resolve();
  }
}
function initReader(reader) {
  if (Array.isArray(reader)) {
    reader = new SplitDataReader(reader);
  }
  if (reader instanceof ReadableStream) {
    reader = {
      readable: reader
    };
  }
  return reader;
}
function initWriter(writer) {
  if (writer.writable === UNDEFINED_VALUE && typeof writer.next == FUNCTION_TYPE) {
    writer = new SplitDataWriter(writer);
  }
  if (writer instanceof WritableStream) {
    writer = {
      writable: writer
    };
  }
  const { writable } = writer;
  if (writable.size === UNDEFINED_VALUE) {
    writable.size = 0;
  }
  if (!(writer instanceof SplitDataWriter)) {
    Object.assign(writer, {
      diskNumber: 0,
      diskOffset: 0,
      availableSize: Infinity,
      maxSize: Infinity
    });
  }
  return writer;
}
function readUint8Array(reader, offset, size, diskNumber) {
  return reader.readUint8Array(offset, size, diskNumber);
}
const SplitZipReader = SplitDataReader;
const SplitZipWriter = SplitDataWriter;
const CP437 = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split("");
const VALID_CP437 = CP437.length == 256;
function decodeCP437(stringValue) {
  if (VALID_CP437) {
    let result = "";
    for (let indexCharacter = 0; indexCharacter < stringValue.length; indexCharacter++) {
      result += CP437[stringValue[indexCharacter]];
    }
    return result;
  } else {
    return new TextDecoder().decode(stringValue);
  }
}
function decodeText(value, encoding) {
  if (encoding && encoding.trim().toLowerCase() == "cp437") {
    return decodeCP437(value);
  } else {
    return new TextDecoder(encoding).decode(value);
  }
}
const PROPERTY_NAME_FILENAME = "filename";
const PROPERTY_NAME_RAW_FILENAME = "rawFilename";
const PROPERTY_NAME_COMMENT = "comment";
const PROPERTY_NAME_RAW_COMMENT = "rawComment";
const PROPERTY_NAME_UNCOMPPRESSED_SIZE = "uncompressedSize";
const PROPERTY_NAME_COMPPRESSED_SIZE = "compressedSize";
const PROPERTY_NAME_OFFSET = "offset";
const PROPERTY_NAME_DISK_NUMBER_START = "diskNumberStart";
const PROPERTY_NAME_LAST_MODIFICATION_DATE = "lastModDate";
const PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE = "rawLastModDate";
const PROPERTY_NAME_LAST_ACCESS_DATE = "lastAccessDate";
const PROPERTY_NAME_RAW_LAST_ACCESS_DATE = "rawLastAccessDate";
const PROPERTY_NAME_CREATION_DATE = "creationDate";
const PROPERTY_NAME_RAW_CREATION_DATE = "rawCreationDate";
const PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE = "internalFileAttribute";
const PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES = "internalFileAttributes";
const PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE = "externalFileAttribute";
const PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES = "externalFileAttributes";
const PROPERTY_NAME_MS_DOS_COMPATIBLE = "msDosCompatible";
const PROPERTY_NAME_ZIP64 = "zip64";
const PROPERTY_NAME_ENCRYPTED = "encrypted";
const PROPERTY_NAME_VERSION = "version";
const PROPERTY_NAME_VERSION_MADE_BY = "versionMadeBy";
const PROPERTY_NAME_ZIPCRYPTO = "zipCrypto";
const PROPERTY_NAME_DIRECTORY = "directory";
const PROPERTY_NAME_EXECUTABLE = "executable";
const PROPERTY_NAMES = [
  PROPERTY_NAME_FILENAME,
  PROPERTY_NAME_RAW_FILENAME,
  PROPERTY_NAME_COMPPRESSED_SIZE,
  PROPERTY_NAME_UNCOMPPRESSED_SIZE,
  PROPERTY_NAME_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE,
  PROPERTY_NAME_COMMENT,
  PROPERTY_NAME_RAW_COMMENT,
  PROPERTY_NAME_LAST_ACCESS_DATE,
  PROPERTY_NAME_CREATION_DATE,
  PROPERTY_NAME_OFFSET,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_DISK_NUMBER_START,
  PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_INTERNAL_FILE_ATTRIBUTES,
  PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTE,
  PROPERTY_NAME_EXTERNAL_FILE_ATTRIBUTES,
  PROPERTY_NAME_MS_DOS_COMPATIBLE,
  PROPERTY_NAME_ZIP64,
  PROPERTY_NAME_ENCRYPTED,
  PROPERTY_NAME_VERSION,
  PROPERTY_NAME_VERSION_MADE_BY,
  PROPERTY_NAME_ZIPCRYPTO,
  PROPERTY_NAME_DIRECTORY,
  PROPERTY_NAME_EXECUTABLE,
  "bitFlag",
  "signature",
  "filenameUTF8",
  "commentUTF8",
  "compressionMethod",
  "extraField",
  "rawExtraField",
  "extraFieldZip64",
  "extraFieldUnicodePath",
  "extraFieldUnicodeComment",
  "extraFieldAES",
  "extraFieldNTFS",
  "extraFieldExtendedTimestamp"
];
class Entry {
  constructor(data) {
    PROPERTY_NAMES.forEach((name) => this[name] = data[name]);
  }
}
const ERR_BAD_FORMAT = "File format is not recognized";
const ERR_EOCDR_NOT_FOUND = "End of central directory not found";
const ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND = "End of Zip64 central directory locator not found";
const ERR_CENTRAL_DIRECTORY_NOT_FOUND = "Central directory header not found";
const ERR_LOCAL_FILE_HEADER_NOT_FOUND = "Local file header not found";
const ERR_EXTRAFIELD_ZIP64_NOT_FOUND = "Zip64 extra field not found";
const ERR_ENCRYPTED = "File contains encrypted entry";
const ERR_UNSUPPORTED_ENCRYPTION = "Encryption method not supported";
const ERR_UNSUPPORTED_COMPRESSION = "Compression method not supported";
const ERR_SPLIT_ZIP_FILE = "Split zip file";
const CHARSET_UTF8 = "utf-8";
const CHARSET_CP437 = "cp437";
const ZIP64_PROPERTIES = [
  [PROPERTY_NAME_UNCOMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_COMPPRESSED_SIZE, MAX_32_BITS],
  [PROPERTY_NAME_OFFSET, MAX_32_BITS],
  [PROPERTY_NAME_DISK_NUMBER_START, MAX_16_BITS]
];
const ZIP64_EXTRACTION = {
  [MAX_16_BITS]: {
    getValue: getUint32,
    bytes: 4
  },
  [MAX_32_BITS]: {
    getValue: getBigUint64,
    bytes: 8
  }
};
class ZipReader {
  constructor(reader, options = {}) {
    Object.assign(this, {
      reader: initReader(reader),
      options,
      config: getConfiguration()
    });
  }
  async *getEntriesGenerator(options = {}) {
    const zipReader = this;
    let { reader } = zipReader;
    const { config: config2 } = zipReader;
    await initStream(reader);
    if (reader.size === UNDEFINED_VALUE || !reader.readUint8Array) {
      reader = new BlobReader(await new Response(reader.readable).blob());
      await initStream(reader);
    }
    if (reader.size < END_OF_CENTRAL_DIR_LENGTH) {
      throw new Error(ERR_BAD_FORMAT);
    }
    reader.chunkSize = getChunkSize(config2);
    const endOfDirectoryInfo = await seekSignature(reader, END_OF_CENTRAL_DIR_SIGNATURE, reader.size, END_OF_CENTRAL_DIR_LENGTH, MAX_16_BITS * 16);
    if (!endOfDirectoryInfo) {
      const signatureArray = await readUint8Array(reader, 0, 4);
      const signatureView = getDataView(signatureArray);
      if (getUint32(signatureView) == SPLIT_ZIP_FILE_SIGNATURE) {
        throw new Error(ERR_SPLIT_ZIP_FILE);
      } else {
        throw new Error(ERR_EOCDR_NOT_FOUND);
      }
    }
    const endOfDirectoryView = getDataView(endOfDirectoryInfo);
    let directoryDataLength = getUint32(endOfDirectoryView, 12);
    let directoryDataOffset = getUint32(endOfDirectoryView, 16);
    const commentOffset = endOfDirectoryInfo.offset;
    const commentLength = getUint16(endOfDirectoryView, 20);
    const appendedDataOffset = commentOffset + END_OF_CENTRAL_DIR_LENGTH + commentLength;
    let lastDiskNumber = getUint16(endOfDirectoryView, 4);
    const expectedLastDiskNumber = reader.lastDiskNumber || 0;
    let diskNumber = getUint16(endOfDirectoryView, 6);
    let filesLength = getUint16(endOfDirectoryView, 8);
    let prependedDataLength = 0;
    let startOffset = 0;
    if (directoryDataOffset == MAX_32_BITS || directoryDataLength == MAX_32_BITS || filesLength == MAX_16_BITS || diskNumber == MAX_16_BITS) {
      const endOfDirectoryLocatorArray = await readUint8Array(reader, endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH, ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH);
      const endOfDirectoryLocatorView = getDataView(endOfDirectoryLocatorArray);
      if (getUint32(endOfDirectoryLocatorView, 0) == ZIP64_END_OF_CENTRAL_DIR_LOCATOR_SIGNATURE) {
        directoryDataOffset = getBigUint64(endOfDirectoryLocatorView, 8);
        let endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1);
        let endOfDirectoryView2 = getDataView(endOfDirectoryArray);
        const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - ZIP64_END_OF_CENTRAL_DIR_LOCATOR_LENGTH - ZIP64_END_OF_CENTRAL_DIR_LENGTH;
        if (getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE && directoryDataOffset != expectedDirectoryDataOffset) {
          const originalDirectoryDataOffset = directoryDataOffset;
          directoryDataOffset = expectedDirectoryDataOffset;
          prependedDataLength = directoryDataOffset - originalDirectoryDataOffset;
          endOfDirectoryArray = await readUint8Array(reader, directoryDataOffset, ZIP64_END_OF_CENTRAL_DIR_LENGTH, -1);
          endOfDirectoryView2 = getDataView(endOfDirectoryArray);
        }
        if (getUint32(endOfDirectoryView2, 0) != ZIP64_END_OF_CENTRAL_DIR_SIGNATURE) {
          throw new Error(ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND);
        }
        if (lastDiskNumber == MAX_16_BITS) {
          lastDiskNumber = getUint32(endOfDirectoryView2, 16);
        }
        if (diskNumber == MAX_16_BITS) {
          diskNumber = getUint32(endOfDirectoryView2, 20);
        }
        if (filesLength == MAX_16_BITS) {
          filesLength = getBigUint64(endOfDirectoryView2, 32);
        }
        if (directoryDataLength == MAX_32_BITS) {
          directoryDataLength = getBigUint64(endOfDirectoryView2, 40);
        }
        directoryDataOffset -= directoryDataLength;
      }
    }
    if (directoryDataOffset >= reader.size) {
      prependedDataLength = reader.size - directoryDataOffset - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
      directoryDataOffset = reader.size - directoryDataLength - END_OF_CENTRAL_DIR_LENGTH;
    }
    if (expectedLastDiskNumber != lastDiskNumber) {
      throw new Error(ERR_SPLIT_ZIP_FILE);
    }
    if (directoryDataOffset < 0) {
      throw new Error(ERR_BAD_FORMAT);
    }
    let offset = 0;
    let directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
    let directoryView = getDataView(directoryArray);
    if (directoryDataLength) {
      const expectedDirectoryDataOffset = endOfDirectoryInfo.offset - directoryDataLength;
      if (getUint32(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE && directoryDataOffset != expectedDirectoryDataOffset) {
        const originalDirectoryDataOffset = directoryDataOffset;
        directoryDataOffset = expectedDirectoryDataOffset;
        prependedDataLength += directoryDataOffset - originalDirectoryDataOffset;
        directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
        directoryView = getDataView(directoryArray);
      }
    }
    const expectedDirectoryDataLength = endOfDirectoryInfo.offset - directoryDataOffset - (reader.lastDiskOffset || 0);
    if (directoryDataLength != expectedDirectoryDataLength && expectedDirectoryDataLength >= 0) {
      directoryDataLength = expectedDirectoryDataLength;
      directoryArray = await readUint8Array(reader, directoryDataOffset, directoryDataLength, diskNumber);
      directoryView = getDataView(directoryArray);
    }
    if (directoryDataOffset < 0 || directoryDataOffset >= reader.size) {
      throw new Error(ERR_BAD_FORMAT);
    }
    const filenameEncoding = getOptionValue(zipReader, options, "filenameEncoding");
    const commentEncoding = getOptionValue(zipReader, options, "commentEncoding");
    for (let indexFile = 0; indexFile < filesLength; indexFile++) {
      const fileEntry = new ZipEntry(reader, config2, zipReader.options);
      if (getUint32(directoryView, offset) != CENTRAL_FILE_HEADER_SIGNATURE) {
        throw new Error(ERR_CENTRAL_DIRECTORY_NOT_FOUND);
      }
      readCommonHeader(fileEntry, directoryView, offset + 6);
      const languageEncodingFlag = Boolean(fileEntry.bitFlag.languageEncodingFlag);
      const filenameOffset = offset + 46;
      const extraFieldOffset = filenameOffset + fileEntry.filenameLength;
      const commentOffset2 = extraFieldOffset + fileEntry.extraFieldLength;
      const versionMadeBy = getUint16(directoryView, offset + 4);
      const msDosCompatible = versionMadeBy >> 8 == 0;
      const unixCompatible = versionMadeBy >> 8 == 3;
      const rawFilename = directoryArray.subarray(filenameOffset, extraFieldOffset);
      const commentLength2 = getUint16(directoryView, offset + 32);
      const endOffset = commentOffset2 + commentLength2;
      const rawComment = directoryArray.subarray(commentOffset2, endOffset);
      const filenameUTF8 = languageEncodingFlag;
      const commentUTF8 = languageEncodingFlag;
      const externalFileAttributes = getUint32(directoryView, offset + 38);
      const directory = msDosCompatible && (getUint8(directoryView, offset + 38) & FILE_ATTR_MSDOS_DIR_MASK) == FILE_ATTR_MSDOS_DIR_MASK || unixCompatible && (externalFileAttributes >> 16 & FILE_ATTR_UNIX_DIR_MASK) == FILE_ATTR_UNIX_DIR_MASK || rawFilename.length && rawFilename[rawFilename.length - 1] == DIRECTORY_SIGNATURE.charCodeAt(0);
      const executable = unixCompatible && (externalFileAttributes >> 16 & FILE_ATTR_UNIX_EXECUTABLE_MASK) == FILE_ATTR_UNIX_EXECUTABLE_MASK;
      const offsetFileEntry = getUint32(directoryView, offset + 42) + prependedDataLength;
      Object.assign(fileEntry, {
        versionMadeBy,
        msDosCompatible,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: commentLength2,
        directory,
        offset: offsetFileEntry,
        diskNumberStart: getUint16(directoryView, offset + 34),
        internalFileAttributes: getUint16(directoryView, offset + 36),
        externalFileAttributes,
        rawFilename,
        filenameUTF8,
        commentUTF8,
        rawExtraField: directoryArray.subarray(extraFieldOffset, commentOffset2),
        executable
      });
      fileEntry.internalFileAttribute = fileEntry.internalFileAttributes;
      fileEntry.externalFileAttribute = fileEntry.externalFileAttributes;
      const decode = getOptionValue(zipReader, options, "decodeText") || decodeText;
      const rawFilenameEncoding = filenameUTF8 ? CHARSET_UTF8 : filenameEncoding || CHARSET_CP437;
      const rawCommentEncoding = commentUTF8 ? CHARSET_UTF8 : commentEncoding || CHARSET_CP437;
      let filename = decode(rawFilename, rawFilenameEncoding);
      if (filename === UNDEFINED_VALUE) {
        filename = decodeText(rawFilename, rawFilenameEncoding);
      }
      let comment = decode(rawComment, rawCommentEncoding);
      if (comment === UNDEFINED_VALUE) {
        comment = decodeText(rawComment, rawCommentEncoding);
      }
      Object.assign(fileEntry, {
        rawComment,
        filename,
        comment,
        directory: directory || filename.endsWith(DIRECTORY_SIGNATURE)
      });
      startOffset = Math.max(offsetFileEntry, startOffset);
      readCommonFooter(fileEntry, fileEntry, directoryView, offset + 6);
      fileEntry.zipCrypto = fileEntry.encrypted && !fileEntry.extraFieldAES;
      const entry = new Entry(fileEntry);
      entry.getData = (writer, options2) => fileEntry.getData(writer, entry, options2);
      offset = endOffset;
      const { onprogress } = options;
      if (onprogress) {
        try {
          await onprogress(indexFile + 1, filesLength, new Entry(fileEntry));
        } catch (_) {
        }
      }
      yield entry;
    }
    const extractPrependedData = getOptionValue(zipReader, options, "extractPrependedData");
    const extractAppendedData = getOptionValue(zipReader, options, "extractAppendedData");
    if (extractPrependedData) {
      zipReader.prependedData = startOffset > 0 ? await readUint8Array(reader, 0, startOffset) : new Uint8Array();
    }
    zipReader.comment = commentLength ? await readUint8Array(reader, commentOffset + END_OF_CENTRAL_DIR_LENGTH, commentLength) : new Uint8Array();
    if (extractAppendedData) {
      zipReader.appendedData = appendedDataOffset < reader.size ? await readUint8Array(reader, appendedDataOffset, reader.size - appendedDataOffset) : new Uint8Array();
    }
    return true;
  }
  async getEntries(options = {}) {
    const entries = [];
    for await (const entry of this.getEntriesGenerator(options)) {
      entries.push(entry);
    }
    return entries;
  }
  async close() {
  }
}
class ZipReaderStream {
  constructor(options = {}) {
    const { readable, writable } = new TransformStream();
    const gen = new ZipReader(readable, options).getEntriesGenerator();
    this.readable = new ReadableStream({
      async pull(controller) {
        const { done, value } = await gen.next();
        if (done)
          return controller.close();
        const chunk = {
          ...value,
          readable: function() {
            const { readable: readable2, writable: writable2 } = new TransformStream();
            if (value.getData) {
              value.getData(writable2);
              return readable2;
            }
          }()
        };
        delete chunk.getData;
        controller.enqueue(chunk);
      }
    });
    this.writable = writable;
  }
}
class ZipEntry {
  constructor(reader, config2, options) {
    Object.assign(this, {
      reader,
      config: config2,
      options
    });
  }
  async getData(writer, fileEntry, options = {}) {
    const zipEntry = this;
    const {
      reader,
      offset,
      diskNumberStart,
      extraFieldAES,
      compressionMethod,
      config: config2,
      bitFlag,
      signature,
      rawLastModDate,
      uncompressedSize,
      compressedSize
    } = zipEntry;
    const localDirectory = fileEntry.localDirectory = {};
    const dataArray = await readUint8Array(reader, offset, 30, diskNumberStart);
    const dataView = getDataView(dataArray);
    let password = getOptionValue(zipEntry, options, "password");
    let rawPassword = getOptionValue(zipEntry, options, "rawPassword");
    const passThrough = getOptionValue(zipEntry, options, "passThrough");
    password = password && password.length && password;
    rawPassword = rawPassword && rawPassword.length && rawPassword;
    if (extraFieldAES) {
      if (extraFieldAES.originalCompressionMethod != COMPRESSION_METHOD_AES) {
        throw new Error(ERR_UNSUPPORTED_COMPRESSION);
      }
    }
    if (compressionMethod != COMPRESSION_METHOD_STORE && compressionMethod != COMPRESSION_METHOD_DEFLATE && !passThrough) {
      throw new Error(ERR_UNSUPPORTED_COMPRESSION);
    }
    if (getUint32(dataView, 0) != LOCAL_FILE_HEADER_SIGNATURE) {
      throw new Error(ERR_LOCAL_FILE_HEADER_NOT_FOUND);
    }
    readCommonHeader(localDirectory, dataView, 4);
    localDirectory.rawExtraField = localDirectory.extraFieldLength ? await readUint8Array(reader, offset + 30 + localDirectory.filenameLength, localDirectory.extraFieldLength, diskNumberStart) : new Uint8Array();
    readCommonFooter(zipEntry, localDirectory, dataView, 4, true);
    Object.assign(fileEntry, {
      lastAccessDate: localDirectory.lastAccessDate,
      creationDate: localDirectory.creationDate
    });
    const encrypted = zipEntry.encrypted && localDirectory.encrypted && !passThrough;
    const zipCrypto = encrypted && !extraFieldAES;
    if (!passThrough) {
      fileEntry.zipCrypto = zipCrypto;
    }
    if (encrypted) {
      if (!zipCrypto && extraFieldAES.strength === UNDEFINED_VALUE) {
        throw new Error(ERR_UNSUPPORTED_ENCRYPTION);
      } else if (!password && !rawPassword) {
        throw new Error(ERR_ENCRYPTED);
      }
    }
    const dataOffset = offset + 30 + localDirectory.filenameLength + localDirectory.extraFieldLength;
    const size = compressedSize;
    const readable = reader.readable;
    Object.assign(readable, {
      diskNumberStart,
      offset: dataOffset,
      size
    });
    const signal = getOptionValue(zipEntry, options, "signal");
    const checkPasswordOnly = getOptionValue(zipEntry, options, "checkPasswordOnly");
    if (checkPasswordOnly) {
      writer = new WritableStream();
    }
    writer = initWriter(writer);
    await initStream(writer, passThrough ? compressedSize : uncompressedSize);
    const { writable } = writer;
    const { onstart, onprogress, onend } = options;
    const workerOptions = {
      options: {
        codecType: CODEC_INFLATE,
        password,
        rawPassword,
        zipCrypto,
        encryptionStrength: extraFieldAES && extraFieldAES.strength,
        signed: getOptionValue(zipEntry, options, "checkSignature") && !passThrough,
        passwordVerification: zipCrypto && (bitFlag.dataDescriptor ? rawLastModDate >>> 8 & 255 : signature >>> 24 & 255),
        signature,
        compressed: compressionMethod != 0 && !passThrough,
        encrypted: zipEntry.encrypted && !passThrough,
        useWebWorkers: getOptionValue(zipEntry, options, "useWebWorkers"),
        useCompressionStream: getOptionValue(zipEntry, options, "useCompressionStream"),
        transferStreams: getOptionValue(zipEntry, options, "transferStreams"),
        checkPasswordOnly
      },
      config: config2,
      streamOptions: { signal, size, onstart, onprogress, onend }
    };
    let outputSize = 0;
    try {
      ({ outputSize } = await runWorker({ readable, writable }, workerOptions));
    } catch (error) {
      if (!checkPasswordOnly || error.message != ERR_ABORT_CHECK_PASSWORD) {
        throw error;
      }
    } finally {
      const preventClose = getOptionValue(zipEntry, options, "preventClose");
      writable.size += outputSize;
      if (!preventClose && !writable.locked) {
        await writable.getWriter().close();
      }
    }
    return checkPasswordOnly ? UNDEFINED_VALUE : writer.getData ? writer.getData() : writable;
  }
}
function readCommonHeader(directory, dataView, offset) {
  const rawBitFlag = directory.rawBitFlag = getUint16(dataView, offset + 2);
  const encrypted = (rawBitFlag & BITFLAG_ENCRYPTED) == BITFLAG_ENCRYPTED;
  const rawLastModDate = getUint32(dataView, offset + 6);
  Object.assign(directory, {
    encrypted,
    version: getUint16(dataView, offset),
    bitFlag: {
      level: (rawBitFlag & BITFLAG_LEVEL) >> 1,
      dataDescriptor: (rawBitFlag & BITFLAG_DATA_DESCRIPTOR) == BITFLAG_DATA_DESCRIPTOR,
      languageEncodingFlag: (rawBitFlag & BITFLAG_LANG_ENCODING_FLAG) == BITFLAG_LANG_ENCODING_FLAG
    },
    rawLastModDate,
    lastModDate: getDate(rawLastModDate),
    filenameLength: getUint16(dataView, offset + 22),
    extraFieldLength: getUint16(dataView, offset + 24)
  });
}
function readCommonFooter(fileEntry, directory, dataView, offset, localDirectory) {
  const { rawExtraField } = directory;
  const extraField = directory.extraField = /* @__PURE__ */ new Map();
  const rawExtraFieldView = getDataView(new Uint8Array(rawExtraField));
  let offsetExtraField = 0;
  try {
    while (offsetExtraField < rawExtraField.length) {
      const type = getUint16(rawExtraFieldView, offsetExtraField);
      const size = getUint16(rawExtraFieldView, offsetExtraField + 2);
      extraField.set(type, {
        type,
        data: rawExtraField.slice(offsetExtraField + 4, offsetExtraField + 4 + size)
      });
      offsetExtraField += 4 + size;
    }
  } catch (_) {
  }
  const compressionMethod = getUint16(dataView, offset + 4);
  Object.assign(directory, {
    signature: getUint32(dataView, offset + 10),
    uncompressedSize: getUint32(dataView, offset + 18),
    compressedSize: getUint32(dataView, offset + 14)
  });
  const extraFieldZip64 = extraField.get(EXTRAFIELD_TYPE_ZIP64);
  if (extraFieldZip64) {
    readExtraFieldZip64(extraFieldZip64, directory);
    directory.extraFieldZip64 = extraFieldZip64;
  }
  const extraFieldUnicodePath = extraField.get(EXTRAFIELD_TYPE_UNICODE_PATH);
  if (extraFieldUnicodePath) {
    readExtraFieldUnicode(extraFieldUnicodePath, PROPERTY_NAME_FILENAME, PROPERTY_NAME_RAW_FILENAME, directory, fileEntry);
    directory.extraFieldUnicodePath = extraFieldUnicodePath;
  }
  const extraFieldUnicodeComment = extraField.get(EXTRAFIELD_TYPE_UNICODE_COMMENT);
  if (extraFieldUnicodeComment) {
    readExtraFieldUnicode(extraFieldUnicodeComment, PROPERTY_NAME_COMMENT, PROPERTY_NAME_RAW_COMMENT, directory, fileEntry);
    directory.extraFieldUnicodeComment = extraFieldUnicodeComment;
  }
  const extraFieldAES = extraField.get(EXTRAFIELD_TYPE_AES);
  if (extraFieldAES) {
    readExtraFieldAES(extraFieldAES, directory, compressionMethod);
    directory.extraFieldAES = extraFieldAES;
  } else {
    directory.compressionMethod = compressionMethod;
  }
  const extraFieldNTFS = extraField.get(EXTRAFIELD_TYPE_NTFS);
  if (extraFieldNTFS) {
    readExtraFieldNTFS(extraFieldNTFS, directory);
    directory.extraFieldNTFS = extraFieldNTFS;
  }
  const extraFieldExtendedTimestamp = extraField.get(EXTRAFIELD_TYPE_EXTENDED_TIMESTAMP);
  if (extraFieldExtendedTimestamp) {
    readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory);
    directory.extraFieldExtendedTimestamp = extraFieldExtendedTimestamp;
  }
  const extraFieldUSDZ = extraField.get(EXTRAFIELD_TYPE_USDZ);
  if (extraFieldUSDZ) {
    directory.extraFieldUSDZ = extraFieldUSDZ;
  }
}
function readExtraFieldZip64(extraFieldZip64, directory) {
  directory.zip64 = true;
  const extraFieldView = getDataView(extraFieldZip64.data);
  const missingProperties = ZIP64_PROPERTIES.filter(([propertyName, max]) => directory[propertyName] == max);
  for (let indexMissingProperty = 0, offset = 0; indexMissingProperty < missingProperties.length; indexMissingProperty++) {
    const [propertyName, max] = missingProperties[indexMissingProperty];
    if (directory[propertyName] == max) {
      const extraction = ZIP64_EXTRACTION[max];
      directory[propertyName] = extraFieldZip64[propertyName] = extraction.getValue(extraFieldView, offset);
      offset += extraction.bytes;
    } else if (extraFieldZip64[propertyName]) {
      throw new Error(ERR_EXTRAFIELD_ZIP64_NOT_FOUND);
    }
  }
}
function readExtraFieldUnicode(extraFieldUnicode, propertyName, rawPropertyName, directory, fileEntry) {
  const extraFieldView = getDataView(extraFieldUnicode.data);
  const crc32 = new Crc32();
  crc32.append(fileEntry[rawPropertyName]);
  const dataViewSignature = getDataView(new Uint8Array(4));
  dataViewSignature.setUint32(0, crc32.get(), true);
  const signature = getUint32(extraFieldView, 1);
  Object.assign(extraFieldUnicode, {
    version: getUint8(extraFieldView, 0),
    [propertyName]: decodeText(extraFieldUnicode.data.subarray(5)),
    valid: !fileEntry.bitFlag.languageEncodingFlag && signature == getUint32(dataViewSignature, 0)
  });
  if (extraFieldUnicode.valid) {
    directory[propertyName] = extraFieldUnicode[propertyName];
    directory[propertyName + "UTF8"] = true;
  }
}
function readExtraFieldAES(extraFieldAES, directory, compressionMethod) {
  const extraFieldView = getDataView(extraFieldAES.data);
  const strength = getUint8(extraFieldView, 4);
  Object.assign(extraFieldAES, {
    vendorVersion: getUint8(extraFieldView, 0),
    vendorId: getUint8(extraFieldView, 2),
    strength,
    originalCompressionMethod: compressionMethod,
    compressionMethod: getUint16(extraFieldView, 5)
  });
  directory.compressionMethod = extraFieldAES.compressionMethod;
}
function readExtraFieldNTFS(extraFieldNTFS, directory) {
  const extraFieldView = getDataView(extraFieldNTFS.data);
  let offsetExtraField = 4;
  let tag1Data;
  try {
    while (offsetExtraField < extraFieldNTFS.data.length && !tag1Data) {
      const tagValue = getUint16(extraFieldView, offsetExtraField);
      const attributeSize = getUint16(extraFieldView, offsetExtraField + 2);
      if (tagValue == EXTRAFIELD_TYPE_NTFS_TAG1) {
        tag1Data = extraFieldNTFS.data.slice(offsetExtraField + 4, offsetExtraField + 4 + attributeSize);
      }
      offsetExtraField += 4 + attributeSize;
    }
  } catch (_) {
  }
  try {
    if (tag1Data && tag1Data.length == 24) {
      const tag1View = getDataView(tag1Data);
      const rawLastModDate = tag1View.getBigUint64(0, true);
      const rawLastAccessDate = tag1View.getBigUint64(8, true);
      const rawCreationDate = tag1View.getBigUint64(16, true);
      Object.assign(extraFieldNTFS, {
        rawLastModDate,
        rawLastAccessDate,
        rawCreationDate
      });
      const lastModDate = getDateNTFS(rawLastModDate);
      const lastAccessDate = getDateNTFS(rawLastAccessDate);
      const creationDate = getDateNTFS(rawCreationDate);
      const extraFieldData = { lastModDate, lastAccessDate, creationDate };
      Object.assign(extraFieldNTFS, extraFieldData);
      Object.assign(directory, extraFieldData);
    }
  } catch (_) {
  }
}
function readExtraFieldExtendedTimestamp(extraFieldExtendedTimestamp, directory, localDirectory) {
  const extraFieldView = getDataView(extraFieldExtendedTimestamp.data);
  const flags = getUint8(extraFieldView, 0);
  const timeProperties = [];
  const timeRawProperties = [];
  if (localDirectory) {
    if ((flags & 1) == 1) {
      timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
    }
    if ((flags & 2) == 2) {
      timeProperties.push(PROPERTY_NAME_LAST_ACCESS_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_LAST_ACCESS_DATE);
    }
    if ((flags & 4) == 4) {
      timeProperties.push(PROPERTY_NAME_CREATION_DATE);
      timeRawProperties.push(PROPERTY_NAME_RAW_CREATION_DATE);
    }
  } else if (extraFieldExtendedTimestamp.data.length >= 5) {
    timeProperties.push(PROPERTY_NAME_LAST_MODIFICATION_DATE);
    timeRawProperties.push(PROPERTY_NAME_RAW_LAST_MODIFICATION_DATE);
  }
  let offset = 1;
  timeProperties.forEach((propertyName, indexProperty) => {
    if (extraFieldExtendedTimestamp.data.length >= offset + 4) {
      const time = getUint32(extraFieldView, offset);
      directory[propertyName] = extraFieldExtendedTimestamp[propertyName] = new Date(time * 1e3);
      const rawPropertyName = timeRawProperties[indexProperty];
      extraFieldExtendedTimestamp[rawPropertyName] = time;
    }
    offset += 4;
  });
}
async function seekSignature(reader, signature, startOffset, minimumBytes, maximumLength) {
  const signatureArray = new Uint8Array(4);
  const signatureView = getDataView(signatureArray);
  setUint32(signatureView, 0, signature);
  const maximumBytes = minimumBytes + maximumLength;
  return await seek(minimumBytes) || await seek(Math.min(maximumBytes, startOffset));
  async function seek(length) {
    const offset = startOffset - length;
    const bytes = await readUint8Array(reader, offset, length);
    for (let indexByte = bytes.length - minimumBytes; indexByte >= 0; indexByte--) {
      if (bytes[indexByte] == signatureArray[0] && bytes[indexByte + 1] == signatureArray[1] && bytes[indexByte + 2] == signatureArray[2] && bytes[indexByte + 3] == signatureArray[3]) {
        return {
          offset: offset + indexByte,
          buffer: bytes.slice(indexByte, indexByte + minimumBytes).buffer
        };
      }
    }
  }
}
function getOptionValue(zipReader, options, name) {
  return options[name] === UNDEFINED_VALUE ? zipReader.options[name] : options[name];
}
function getDate(timeRaw) {
  const date = (timeRaw & 4294901760) >> 16, time = timeRaw & 65535;
  try {
    return new Date(1980 + ((date & 65024) >> 9), ((date & 480) >> 5) - 1, date & 31, (time & 63488) >> 11, (time & 2016) >> 5, (time & 31) * 2, 0);
  } catch (_) {
  }
}
function getDateNTFS(timeRaw) {
  return new Date(Number(timeRaw / BigInt(1e4) - BigInt(116444736e5)));
}
function getUint8(view, offset) {
  return view.getUint8(offset);
}
function getUint16(view, offset) {
  return view.getUint16(offset, true);
}
function getUint32(view, offset) {
  return view.getUint32(offset, true);
}
function getBigUint64(view, offset) {
  return Number(view.getBigUint64(offset, true));
}
function setUint32(view, offset, value) {
  view.setUint32(offset, value, true);
}
function getDataView(array) {
  return new DataView(array.buffer);
}
configure({ Inflate: ZipInflate });
const zipImport = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BlobReader,
  BlobWriter,
  Data64URIReader,
  Data64URIWriter,
  ERR_BAD_FORMAT,
  ERR_CENTRAL_DIRECTORY_NOT_FOUND,
  ERR_ENCRYPTED,
  ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND,
  ERR_EOCDR_NOT_FOUND,
  ERR_EXTRAFIELD_ZIP64_NOT_FOUND,
  ERR_HTTP_RANGE,
  ERR_INVALID_PASSWORD,
  ERR_INVALID_SIGNATURE,
  ERR_ITERATOR_COMPLETED_TOO_SOON,
  ERR_LOCAL_FILE_HEADER_NOT_FOUND,
  ERR_SPLIT_ZIP_FILE,
  ERR_UNSUPPORTED_COMPRESSION,
  ERR_UNSUPPORTED_ENCRYPTION,
  HttpRangeReader,
  HttpReader,
  Reader,
  SplitDataReader,
  SplitDataWriter,
  SplitZipReader,
  SplitZipWriter,
  TextReader,
  TextWriter,
  Uint8ArrayReader,
  Uint8ArrayWriter,
  Writer,
  ZipReader,
  ZipReaderStream,
  configure,
  getMimeType,
  initReader,
  initStream,
  initWriter,
  readUint8Array,
  terminateWorkers
}, Symbol.toStringTag, { value: "Module" }));
const zipjs = zipImport;
class ZipTraceModelBackend {
  constructor(traceURL, server, progress) {
    __publicField(this, "_zipReader");
    __publicField(this, "_entriesPromise");
    __publicField(this, "_traceURL");
    this._traceURL = traceURL;
    zipjs.configure({ baseURL: self.location.href });
    this._zipReader = new zipjs.ZipReader(
      new zipjs.HttpReader(formatUrl(traceURL, server), { mode: "cors", preventHeadRequest: true }),
      { useWebWorkers: false }
    );
    this._entriesPromise = this._zipReader.getEntries({ onprogress: progress }).then((entries) => {
      const map = /* @__PURE__ */ new Map();
      for (const entry of entries)
        map.set(entry.filename, entry);
      return map;
    });
  }
  isLive() {
    return false;
  }
  traceURL() {
    return this._traceURL;
  }
  async entryNames() {
    const entries = await this._entriesPromise;
    return [...entries.keys()];
  }
  async hasEntry(entryName) {
    const entries = await this._entriesPromise;
    return entries.has(entryName);
  }
  async readText(entryName) {
    var _a;
    const entries = await this._entriesPromise;
    const entry = entries.get(entryName);
    if (!entry)
      return;
    const writer = new zipjs.TextWriter();
    await ((_a = entry.getData) == null ? void 0 : _a.call(entry, writer));
    return writer.getData();
  }
  async readBlob(entryName) {
    const entries = await this._entriesPromise;
    const entry = entries.get(entryName);
    if (!entry)
      return;
    const writer = new zipjs.BlobWriter();
    await entry.getData(writer);
    return writer.getData();
  }
}
class FetchTraceModelBackend {
  constructor(path, server) {
    __publicField(this, "_entriesPromise");
    __publicField(this, "_path");
    __publicField(this, "_server");
    this._path = path;
    this._server = server;
    this._entriesPromise = server.readFile(path).then(async (response) => {
      if (!response)
        throw new Error("File not found");
      const json = await response.json();
      const entries = /* @__PURE__ */ new Map();
      for (const entry of json.entries)
        entries.set(entry.name, entry.path);
      return entries;
    });
  }
  isLive() {
    return true;
  }
  traceURL() {
    return this._path;
  }
  async entryNames() {
    const entries = await this._entriesPromise;
    return [...entries.keys()];
  }
  async hasEntry(entryName) {
    const entries = await this._entriesPromise;
    return entries.has(entryName);
  }
  async readText(entryName) {
    const response = await this._readEntry(entryName);
    return response == null ? void 0 : response.text();
  }
  async readBlob(entryName) {
    const response = await this._readEntry(entryName);
    return (response == null ? void 0 : response.status) === 200 ? await (response == null ? void 0 : response.blob()) : void 0;
  }
  async _readEntry(entryName) {
    const entries = await this._entriesPromise;
    const fileName = entries.get(entryName);
    if (!fileName)
      return;
    return this._server.readFile(fileName);
  }
}
function formatUrl(trace, server) {
  let url = trace.startsWith("http") || trace.startsWith("blob") ? trace : server.getFileURL(trace).toString();
  if (url.startsWith("https://www.dropbox.com/"))
    url = "https://dl.dropboxusercontent.com/" + url.substring("https://www.dropbox.com/".length);
  return url;
}
class TraceViewerServer {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getFileURL(path) {
    const url = new URL("trace/file", this.baseUrl);
    url.searchParams.set("path", path);
    return url;
  }
  async readFile(path) {
    const response = await fetch(this.getFileURL(path));
    if (response.status === 404)
      return;
    return response;
  }
}
self.addEventListener("install", function(event) {
  self.skipWaiting();
});
self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});
const scopePath = new URL(self.registration.scope).pathname;
const loadedTraces = /* @__PURE__ */ new Map();
const clientIdToTraceUrls = /* @__PURE__ */ new Map();
async function loadTrace(traceUrl, traceFileName, client, limit, progress) {
  var _a;
  await gc();
  const clientId = (client == null ? void 0 : client.id) ?? "";
  let data = clientIdToTraceUrls.get(clientId);
  if (!data) {
    const clientURL = new URL((client == null ? void 0 : client.url) ?? self.registration.scope);
    const traceViewerServerBaseUrl = new URL(clientURL.searchParams.get("server") ?? "../", clientURL);
    data = { limit, traceUrls: /* @__PURE__ */ new Set(), traceViewerServer: new TraceViewerServer(traceViewerServerBaseUrl) };
    clientIdToTraceUrls.set(clientId, data);
  }
  data.traceUrls.add(traceUrl);
  const traceModel = new TraceModel();
  try {
    const [fetchProgress, unzipProgress] = splitProgress(progress, [0.5, 0.4, 0.1]);
    const backend = traceUrl.endsWith("json") ? new FetchTraceModelBackend(traceUrl, data.traceViewerServer) : new ZipTraceModelBackend(traceUrl, data.traceViewerServer, fetchProgress);
    await traceModel.load(backend, unzipProgress);
  } catch (error) {
    console.error(error);
    if (((_a = error == null ? void 0 : error.message) == null ? void 0 : _a.includes("Cannot find .trace file")) && await traceModel.hasEntry("index.html"))
      throw new Error("Could not load trace. Did you upload a Playwright HTML report instead? Make sure to extract the archive first and then double-click the index.html file or put it on a web server.");
    if (error instanceof TraceVersionError)
      throw new Error(`Could not load trace from ${traceFileName || traceUrl}. ${error.message}`);
    if (traceFileName)
      throw new Error(`Could not load trace from ${traceFileName}. Make sure to upload a valid Playwright trace.`);
    throw new Error(`Could not load trace from ${traceUrl}. Make sure a valid Playwright Trace is accessible over this url.`);
  }
  const snapshotServer = new SnapshotServer(traceModel.storage(), (sha1) => traceModel.resourceForSha1(sha1));
  loadedTraces.set(traceUrl, { traceModel, snapshotServer });
  return traceModel;
}
async function doFetch(event) {
  var _a;
  if (event.request.url.startsWith("chrome-extension://"))
    return fetch(event.request);
  if (event.request.headers.get("x-pw-serviceworker") === "forward") {
    const request2 = new Request(event.request);
    request2.headers.delete("x-pw-serviceworker");
    return fetch(request2);
  }
  const request = event.request;
  const client = await self.clients.get(event.clientId);
  const isDeployedAsHttps = self.registration.scope.startsWith("https://");
  if (request.url.startsWith(self.registration.scope)) {
    const url = new URL(unwrapPopoutUrl(request.url));
    const relativePath = url.pathname.substring(scopePath.length - 1);
    if (relativePath === "/ping") {
      await gc();
      return new Response(null, { status: 200 });
    }
    const traceUrl2 = url.searchParams.get("trace");
    if (relativePath === "/contexts") {
      try {
        const limit = url.searchParams.has("limit") ? +url.searchParams.get("limit") : void 0;
        const traceModel = await loadTrace(traceUrl2, url.searchParams.get("traceFileName"), client, limit, (done, total) => {
          client.postMessage({ method: "progress", params: { done, total } });
        });
        return new Response(JSON.stringify(traceModel.contextEntries), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: error == null ? void 0 : error.message }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    if (relativePath.startsWith("/snapshotInfo/")) {
      const { snapshotServer: snapshotServer2 } = loadedTraces.get(traceUrl2) || {};
      if (!snapshotServer2)
        return new Response(null, { status: 404 });
      const pageOrFrameId = relativePath.substring("/snapshotInfo/".length);
      return snapshotServer2.serveSnapshotInfo(pageOrFrameId, url.searchParams);
    }
    if (relativePath.startsWith("/snapshot/")) {
      const { snapshotServer: snapshotServer2 } = loadedTraces.get(traceUrl2) || {};
      if (!snapshotServer2)
        return new Response(null, { status: 404 });
      const pageOrFrameId = relativePath.substring("/snapshot/".length);
      const response = snapshotServer2.serveSnapshot(pageOrFrameId, url.searchParams, url.href);
      if (isDeployedAsHttps)
        response.headers.set("Content-Security-Policy", "upgrade-insecure-requests");
      return response;
    }
    if (relativePath.startsWith("/closest-screenshot/")) {
      const { snapshotServer: snapshotServer2 } = loadedTraces.get(traceUrl2) || {};
      if (!snapshotServer2)
        return new Response(null, { status: 404 });
      const pageOrFrameId = relativePath.substring("/closest-screenshot/".length);
      return snapshotServer2.serveClosestScreenshot(pageOrFrameId, url.searchParams);
    }
    if (relativePath.startsWith("/sha1/")) {
      const sha1 = relativePath.slice("/sha1/".length);
      for (const trace of loadedTraces.values()) {
        const blob = await trace.traceModel.resourceForSha1(sha1);
        if (blob)
          return new Response(blob, { status: 200, headers: downloadHeaders(url.searchParams) });
      }
      return new Response(null, { status: 404 });
    }
    if (relativePath.startsWith("/file/")) {
      const path = url.searchParams.get("path");
      const traceViewerServer = (_a = clientIdToTraceUrls.get(event.clientId ?? "")) == null ? void 0 : _a.traceViewerServer;
      if (!traceViewerServer)
        throw new Error("client is not initialized");
      const response = await traceViewerServer.readFile(path);
      if (!response)
        return new Response(null, { status: 404 });
      return response;
    }
    return fetch(event.request);
  }
  const snapshotUrl = unwrapPopoutUrl(client.url);
  const traceUrl = new URL(snapshotUrl).searchParams.get("trace");
  const { snapshotServer } = loadedTraces.get(traceUrl) || {};
  if (!snapshotServer)
    return new Response(null, { status: 404 });
  const lookupUrls = [request.url];
  if (isDeployedAsHttps && request.url.startsWith("https://"))
    lookupUrls.push(request.url.replace(/^https/, "http"));
  return snapshotServer.serveResource(lookupUrls, request.method, snapshotUrl);
}
function downloadHeaders(searchParams) {
  const name = searchParams.get("dn");
  const contentType = searchParams.get("dct");
  if (!name)
    return;
  const headers = new Headers();
  headers.set("Content-Disposition", `attachment; filename="attachment"; filename*=UTF-8''${encodeURIComponent(name)}`);
  if (contentType)
    headers.set("Content-Type", contentType);
  return headers;
}
async function gc() {
  const clients = await self.clients.matchAll();
  const usedTraces = /* @__PURE__ */ new Set();
  for (const [clientId, data] of clientIdToTraceUrls) {
    if (!clients.find((c) => c.id === clientId)) {
      clientIdToTraceUrls.delete(clientId);
      continue;
    }
    if (data.limit !== void 0) {
      const ordered = [...data.traceUrls];
      data.traceUrls = new Set(ordered.slice(ordered.length - data.limit));
    }
    data.traceUrls.forEach((url) => usedTraces.add(url));
  }
  for (const traceUrl of loadedTraces.keys()) {
    if (!usedTraces.has(traceUrl))
      loadedTraces.delete(traceUrl);
  }
}
self.addEventListener("fetch", function(event) {
  event.respondWith(doFetch(event));
});
