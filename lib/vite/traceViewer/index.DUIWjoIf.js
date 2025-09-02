import { M as MultiTraceModel, r as reactExports, T as TestServerConnection, W as WebSocketTestServerTransport, j as jsxRuntimeExports, D as DialogToolbarButton, a as DefaultSettingsView, b as Workbench, c as Dialog, d as applyTheme, e as clientExports } from "./assets/defaultSettingsView-70enpUY1.js";
const WorkbenchLoader = () => {
  const [isServer, setIsServer] = reactExports.useState(false);
  const [traceURLs, setTraceURLs] = reactExports.useState([]);
  const [uploadedTraceNames, setUploadedTraceNames] = reactExports.useState([]);
  const [model, setModel] = reactExports.useState(emptyModel);
  const [progress, setProgress] = reactExports.useState({ done: 0, total: 0 });
  const [dragOver, setDragOver] = reactExports.useState(false);
  const [processingErrorMessage, setProcessingErrorMessage] = reactExports.useState(null);
  const [fileForLocalModeError, setFileForLocalModeError] = reactExports.useState(null);
  const [showProgressDialog, setShowProgressDialog] = reactExports.useState(false);
  const processTraceFiles = reactExports.useCallback((files) => {
    const blobUrls = [];
    const fileNames = [];
    const url = new URL(window.location.href);
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (!file)
        continue;
      const blobTraceURL = URL.createObjectURL(file);
      blobUrls.push(blobTraceURL);
      fileNames.push(file.name);
      url.searchParams.append("trace", blobTraceURL);
      url.searchParams.append("traceFileName", file.name);
    }
    const href = url.toString();
    window.history.pushState({}, "", href);
    setTraceURLs(blobUrls);
    setUploadedTraceNames(fileNames);
    setDragOver(false);
    setProcessingErrorMessage(null);
  }, []);
  reactExports.useEffect(() => {
    const listener = async (e) => {
      var _a;
      if (!((_a = e.clipboardData) == null ? void 0 : _a.files.length))
        return;
      for (const file of e.clipboardData.files) {
        if (file.type !== "application/zip")
          return;
      }
      e.preventDefault();
      processTraceFiles(e.clipboardData.files);
    };
    document.addEventListener("paste", listener);
    return () => document.removeEventListener("paste", listener);
  });
  reactExports.useEffect(() => {
    const listener = (e) => {
      const { method, params } = e.data;
      if (method !== "load" || !((params == null ? void 0 : params.trace) instanceof Blob))
        return;
      const traceFile = new File([params.trace], "trace.zip", { type: "application/zip" });
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(traceFile);
      processTraceFiles(dataTransfer.files);
    };
    window.addEventListener("message", listener);
    return () => window.removeEventListener("message", listener);
  });
  const handleDropEvent = reactExports.useCallback((event) => {
    event.preventDefault();
    processTraceFiles(event.dataTransfer.files);
  }, [processTraceFiles]);
  const handleFileInputChange = reactExports.useCallback((event) => {
    event.preventDefault();
    if (!event.target.files)
      return;
    processTraceFiles(event.target.files);
  }, [processTraceFiles]);
  reactExports.useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const newTraceURLs = params.getAll("trace");
    setIsServer(params.has("isServer"));
    for (const url of newTraceURLs) {
      if (url.startsWith("file:")) {
        setFileForLocalModeError(url || null);
        return;
      }
    }
    if (params.has("isServer")) {
      const guid = new URLSearchParams(window.location.search).get("ws");
      const wsURL = new URL(`../${guid}`, window.location.toString());
      wsURL.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const testServerConnection = new TestServerConnection(new WebSocketTestServerTransport(wsURL));
      testServerConnection.onLoadTraceRequested(async (params2) => {
        setTraceURLs(params2.traceUrl ? [params2.traceUrl] : []);
        setDragOver(false);
        setProcessingErrorMessage(null);
      });
      testServerConnection.initialize({}).catch(() => {
      });
    } else if (!newTraceURLs.some((url) => url.startsWith("blob:"))) {
      setTraceURLs(newTraceURLs);
    }
  }, []);
  reactExports.useEffect(() => {
    (async () => {
      if (traceURLs.length) {
        const swListener = (event) => {
          if (event.data.method === "progress")
            setProgress(event.data.params);
        };
        navigator.serviceWorker.addEventListener("message", swListener);
        setProgress({ done: 0, total: 1 });
        const contextEntries = [];
        for (let i = 0; i < traceURLs.length; i++) {
          const url = traceURLs[i];
          const params = new URLSearchParams();
          params.set("trace", url);
          if (uploadedTraceNames.length)
            params.set("traceFileName", uploadedTraceNames[i]);
          params.set("limit", String(traceURLs.length));
          const response = await fetch(`contexts?${params.toString()}`);
          if (!response.ok) {
            if (!isServer)
              setTraceURLs([]);
            setProcessingErrorMessage((await response.json()).error);
            return;
          }
          contextEntries.push(...await response.json());
        }
        navigator.serviceWorker.removeEventListener("message", swListener);
        const model2 = new MultiTraceModel(contextEntries);
        setProgress({ done: 0, total: 0 });
        setModel(model2);
      } else {
        setModel(emptyModel);
      }
    })();
  }, [isServer, traceURLs, uploadedTraceNames]);
  const showLoading = progress.done !== progress.total && progress.total !== 0;
  reactExports.useEffect(() => {
    if (showLoading) {
      const timeout = setTimeout(() => {
        setShowProgressDialog(true);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setShowProgressDialog(false);
    }
  }, [showLoading]);
  const showFileUploadDropArea = !!(!isServer && !dragOver && !fileForLocalModeError && (!traceURLs.length || processingErrorMessage));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox workbench-loader", onDragOver: (event) => {
    event.preventDefault();
    setDragOver(true);
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hbox header", ...showFileUploadDropArea ? { inert: "true" } : {}, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "playwright-logo.svg", alt: "Playwright logo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "product", children: "Playwright" }),
      model.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: model.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spacer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogToolbarButton, { icon: "settings-gear", title: "Settings", dialogDataTestId: "settings-toolbar-dialog", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultSettingsView, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workbench, { model, inert: showFileUploadDropArea }),
    fileForLocalModeError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drop-target", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Trace Viewer uses Service Workers to show traces. To view trace:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { paddingTop: 20 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "1. Click ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: fileForLocalModeError, children: "here" }),
          " to put your trace into the download shelf"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "2. Go to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://trace.playwright.dev", children: "trace.playwright.dev" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "3. Drop the trace from the download shelf into the page" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: showProgressDialog, isModal: true, className: "progress-dialog", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "progress-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", role: "heading", "aria-level": 1, children: "Loading Playwright Trace..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inner-progress", style: { width: progress.total ? 100 * progress.done / progress.total + "%" : 0 } }) })
    ] }) }),
    showFileUploadDropArea && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drop-target", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "processing-error", role: "alert", children: processingErrorMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", role: "heading", "aria-level": 1, children: "Drop Playwright Trace to load" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "or" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        const input = document.createElement("input");
        input.type = "file";
        input.multiple = true;
        input.click();
        input.addEventListener("change", (e) => handleFileInputChange(e));
      }, type: "button", children: "Select file(s)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxWidth: 400 }, children: "Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally." })
    ] }),
    isServer && !traceURLs.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "drop-target", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "Select test to see the trace" }) }),
    dragOver && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "drop-target",
        onDragLeave: () => {
          setDragOver(false);
        },
        onDrop: (event) => handleDropEvent(event),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "Release to analyse the Playwright Trace" })
      }
    )
  ] });
};
const emptyModel = new MultiTraceModel([]);
const LiveWorkbenchLoader = ({ traceJson }) => {
  const [model, setModel] = reactExports.useState(void 0);
  const [counter, setCounter] = reactExports.useState(0);
  const pollTimer = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (pollTimer.current)
      clearTimeout(pollTimer.current);
    pollTimer.current = setTimeout(async () => {
      try {
        const model2 = await loadSingleTraceFile(traceJson);
        setModel(model2);
      } catch {
        const model2 = new MultiTraceModel([]);
        setModel(model2);
      } finally {
        setCounter(counter + 1);
      }
    }, 500);
    return () => {
      if (pollTimer.current)
        clearTimeout(pollTimer.current);
    };
  }, [traceJson, counter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Workbench, { model, isLive: true });
};
async function loadSingleTraceFile(traceJson) {
  const params = new URLSearchParams();
  params.set("trace", traceJson);
  params.set("limit", "1");
  const response = await fetch(`contexts?${params.toString()}`);
  const contextEntries = await response.json();
  return new MultiTraceModel(contextEntries);
}
(async () => {
  const queryParams = new URLSearchParams(window.location.search);
  applyTheme();
  if (window.location.protocol !== "file:") {
    if (queryParams.get("isUnderTest") === "true")
      await new Promise((f) => setTimeout(f, 1e3));
    if (!navigator.serviceWorker)
      throw new Error(`Service workers are not supported.
Make sure to serve the Trace Viewer (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js");
    if (!navigator.serviceWorker.controller) {
      await new Promise((f) => {
        navigator.serviceWorker.oncontrollerchange = () => f();
      });
    }
    setInterval(function() {
      fetch("ping");
    }, 1e4);
  }
  const trace = queryParams.get("trace");
  const traceIsLive = trace == null ? void 0 : trace.endsWith(".json");
  const workbench = traceIsLive ? /* @__PURE__ */ jsxRuntimeExports.jsx(LiveWorkbenchLoader, { traceJson: trace }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WorkbenchLoader, {});
  clientExports.createRoot(document.querySelector("#root")).render(workbench);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguRFVJV2pvSWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYWNlLXZpZXdlci9zcmMvdWkvd29ya2JlbmNoTG9hZGVyLnRzeCIsIi4uLy4uLy4uLy4uL3RyYWNlLXZpZXdlci9zcmMvdWkvbGl2ZVdvcmtiZW5jaExvYWRlci50c3giLCIuLi8uLi8uLi8uLi90cmFjZS12aWV3ZXIvc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IENvbnRleHRFbnRyeSB9IGZyb20gJy4uL3R5cGVzL2VudHJpZXMnO1xuaW1wb3J0IHsgTXVsdGlUcmFjZU1vZGVsIH0gZnJvbSAnLi9tb2RlbFV0aWwnO1xuaW1wb3J0ICcuL3dvcmtiZW5jaExvYWRlci5jc3MnO1xuaW1wb3J0IHsgV29ya2JlbmNoIH0gZnJvbSAnLi93b3JrYmVuY2gnO1xuaW1wb3J0IHsgVGVzdFNlcnZlckNvbm5lY3Rpb24sIFdlYlNvY2tldFRlc3RTZXJ2ZXJUcmFuc3BvcnQgfSBmcm9tICdAdGVzdElzb21vcnBoaWMvdGVzdFNlcnZlckNvbm5lY3Rpb24nO1xuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dUb29sYmFyQnV0dG9uIH0gZnJvbSAnQHdlYi9jb21wb25lbnRzL2RpYWxvZyc7XG5pbXBvcnQgeyBEZWZhdWx0U2V0dGluZ3NWaWV3IH0gZnJvbSAnLi9kZWZhdWx0U2V0dGluZ3NWaWV3JztcblxuZXhwb3J0IGNvbnN0IFdvcmtiZW5jaExvYWRlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e1xufT4gPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NlcnZlciwgc2V0SXNTZXJ2ZXJdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbdHJhY2VVUkxzLCBzZXRUcmFjZVVSTHNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3VwbG9hZGVkVHJhY2VOYW1lcywgc2V0VXBsb2FkZWRUcmFjZU5hbWVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gUmVhY3QudXNlU3RhdGU8TXVsdGlUcmFjZU1vZGVsPihlbXB0eU1vZGVsKTtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSBSZWFjdC51c2VTdGF0ZTx7IGRvbmU6IG51bWJlciwgdG90YWw6IG51bWJlciB9Pih7IGRvbmU6IDAsIHRvdGFsOiAwIH0pO1xuICBjb25zdCBbZHJhZ092ZXIsIHNldERyYWdPdmVyXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3Byb2Nlc3NpbmdFcnJvck1lc3NhZ2UsIHNldFByb2Nlc3NpbmdFcnJvck1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmaWxlRm9yTG9jYWxNb2RlRXJyb3IsIHNldEZpbGVGb3JMb2NhbE1vZGVFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3Nob3dQcm9ncmVzc0RpYWxvZywgc2V0U2hvd1Byb2dyZXNzRGlhbG9nXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBwcm9jZXNzVHJhY2VGaWxlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKChmaWxlczogRmlsZUxpc3QpID0+IHtcbiAgICBjb25zdCBibG9iVXJscyA9IFtdO1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IFtdO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlcy5pdGVtKGkpO1xuICAgICAgaWYgKCFmaWxlKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNvbnN0IGJsb2JUcmFjZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBibG9iVXJscy5wdXNoKGJsb2JUcmFjZVVSTCk7XG4gICAgICBmaWxlTmFtZXMucHVzaChmaWxlLm5hbWUpO1xuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3RyYWNlJywgYmxvYlRyYWNlVVJMKTtcbiAgICAgIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd0cmFjZUZpbGVOYW1lJywgZmlsZS5uYW1lKTtcbiAgICB9XG4gICAgY29uc3QgaHJlZiA9IHVybC50b1N0cmluZygpO1xuICAgIC8vIFNuYXBzaG90IGxvYWRlcnMgd2lsbCBpbmhlcml0IHRoZSB0cmFjZSB1cmwgZnJvbSB0aGUgcXVlcnkgcGFyYW1ldGVycyxcbiAgICAvLyBzbyBzZXQgaXQgaGVyZS5cbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBocmVmKTtcbiAgICBzZXRUcmFjZVVSTHMoYmxvYlVybHMpO1xuICAgIHNldFVwbG9hZGVkVHJhY2VOYW1lcyhmaWxlTmFtZXMpO1xuICAgIHNldERyYWdPdmVyKGZhbHNlKTtcbiAgICBzZXRQcm9jZXNzaW5nRXJyb3JNZXNzYWdlKG51bGwpO1xuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGFzeW5jIChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKCFlLmNsaXBib2FyZERhdGE/LmZpbGVzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGUuY2xpcGJvYXJkRGF0YS5maWxlcykge1xuICAgICAgICBpZiAoZmlsZS50eXBlICE9PSAnYXBwbGljYXRpb24vemlwJylcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcm9jZXNzVHJhY2VGaWxlcyhlLmNsaXBib2FyZERhdGEuZmlsZXMpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgbGlzdGVuZXIpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IChlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgbWV0aG9kLCBwYXJhbXMgfSA9IGUuZGF0YTtcblxuICAgICAgaWYgKG1ldGhvZCAhPT0gJ2xvYWQnIHx8ICEocGFyYW1zPy50cmFjZSBpbnN0YW5jZW9mIEJsb2IpKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIGNvbnN0IHRyYWNlRmlsZSA9IG5ldyBGaWxlKFtwYXJhbXMudHJhY2VdLCAndHJhY2UuemlwJywgeyB0eXBlOiAnYXBwbGljYXRpb24vemlwJyB9KTtcbiAgICAgIGNvbnN0IGRhdGFUcmFuc2ZlciA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcblxuICAgICAgZGF0YVRyYW5zZmVyLml0ZW1zLmFkZCh0cmFjZUZpbGUpO1xuXG4gICAgICBwcm9jZXNzVHJhY2VGaWxlcyhkYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIpO1xuICB9KTtcblxuICBjb25zdCBoYW5kbGVEcm9wRXZlbnQgPSBSZWFjdC51c2VDYWxsYmFjaygoZXZlbnQ6IFJlYWN0LkRyYWdFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2Nlc3NUcmFjZUZpbGVzKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gIH0sIFtwcm9jZXNzVHJhY2VGaWxlc10pO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVJbnB1dENoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5maWxlcylcbiAgICAgIHJldHVybjtcbiAgICBwcm9jZXNzVHJhY2VGaWxlcyhldmVudC50YXJnZXQuZmlsZXMpO1xuICB9LCBbcHJvY2Vzc1RyYWNlRmlsZXNdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICBjb25zdCBuZXdUcmFjZVVSTHMgPSBwYXJhbXMuZ2V0QWxsKCd0cmFjZScpO1xuICAgIHNldElzU2VydmVyKHBhcmFtcy5oYXMoJ2lzU2VydmVyJykpO1xuXG4gICAgLy8gRG9uJ3QgYWNjZXB0IGZpbGU6Ly8gVVJMcyAtIHRoaXMgbWVhbnMgd2UgcmUgb3BlbmVkIGxvY2FsbHkuXG4gICAgZm9yIChjb25zdCB1cmwgb2YgbmV3VHJhY2VVUkxzKSB7XG4gICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJ2ZpbGU6JykpIHtcbiAgICAgICAgc2V0RmlsZUZvckxvY2FsTW9kZUVycm9yKHVybCB8fCBudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuaGFzKCdpc1NlcnZlcicpKSB7XG4gICAgICBjb25zdCBndWlkID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ3dzJyk7XG4gICAgICBjb25zdCB3c1VSTCA9IG5ldyBVUkwoYC4uLyR7Z3VpZH1gLCB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKSk7XG4gICAgICB3c1VSTC5wcm90b2NvbCA9ICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ3dzczonIDogJ3dzOicpO1xuICAgICAgY29uc3QgdGVzdFNlcnZlckNvbm5lY3Rpb24gPSBuZXcgVGVzdFNlcnZlckNvbm5lY3Rpb24obmV3IFdlYlNvY2tldFRlc3RTZXJ2ZXJUcmFuc3BvcnQod3NVUkwpKTtcbiAgICAgIHRlc3RTZXJ2ZXJDb25uZWN0aW9uLm9uTG9hZFRyYWNlUmVxdWVzdGVkKGFzeW5jIHBhcmFtcyA9PiB7XG4gICAgICAgIHNldFRyYWNlVVJMcyhwYXJhbXMudHJhY2VVcmwgPyBbcGFyYW1zLnRyYWNlVXJsXSA6IFtdKTtcbiAgICAgICAgc2V0RHJhZ092ZXIoZmFsc2UpO1xuICAgICAgICBzZXRQcm9jZXNzaW5nRXJyb3JNZXNzYWdlKG51bGwpO1xuICAgICAgfSk7XG4gICAgICB0ZXN0U2VydmVyQ29ubmVjdGlvbi5pbml0aWFsaXplKHt9KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfSBlbHNlIGlmICghbmV3VHJhY2VVUkxzLnNvbWUodXJsID0+IHVybC5zdGFydHNXaXRoKCdibG9iOicpKSkge1xuICAgICAgLy8gRG9uJ3QgcmUtdXNlIGJsb2IgZmlsZSBVUkxzIG9uIHBhZ2UgbG9hZCAocmVzdWx0cyBpbiBGZXRjaCBlcnJvcilcbiAgICAgIHNldFRyYWNlVVJMcyhuZXdUcmFjZVVSTHMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh0cmFjZVVSTHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHN3TGlzdGVuZXIgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChldmVudC5kYXRhLm1ldGhvZCA9PT0gJ3Byb2dyZXNzJylcbiAgICAgICAgICAgIHNldFByb2dyZXNzKGV2ZW50LmRhdGEucGFyYW1zKTtcbiAgICAgICAgfTtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHN3TGlzdGVuZXIpO1xuICAgICAgICBzZXRQcm9ncmVzcyh7IGRvbmU6IDAsIHRvdGFsOiAxIH0pO1xuICAgICAgICBjb25zdCBjb250ZXh0RW50cmllczogQ29udGV4dEVudHJ5W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFjZVVSTHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB1cmwgPSB0cmFjZVVSTHNbaV07XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgIHBhcmFtcy5zZXQoJ3RyYWNlJywgdXJsKTtcbiAgICAgICAgICBpZiAodXBsb2FkZWRUcmFjZU5hbWVzLmxlbmd0aClcbiAgICAgICAgICAgIHBhcmFtcy5zZXQoJ3RyYWNlRmlsZU5hbWUnLCB1cGxvYWRlZFRyYWNlTmFtZXNbaV0pO1xuICAgICAgICAgIHBhcmFtcy5zZXQoJ2xpbWl0JywgU3RyaW5nKHRyYWNlVVJMcy5sZW5ndGgpKTtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBjb250ZXh0cz8ke3BhcmFtcy50b1N0cmluZygpfWApO1xuICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGlmICghaXNTZXJ2ZXIpXG4gICAgICAgICAgICAgIHNldFRyYWNlVVJMcyhbXSk7XG4gICAgICAgICAgICBzZXRQcm9jZXNzaW5nRXJyb3JNZXNzYWdlKChhd2FpdCByZXNwb25zZS5qc29uKCkpLmVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGV4dEVudHJpZXMucHVzaCguLi4oYXdhaXQgcmVzcG9uc2UuanNvbigpKSk7XG4gICAgICAgIH1cbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHN3TGlzdGVuZXIpO1xuICAgICAgICBjb25zdCBtb2RlbCA9IG5ldyBNdWx0aVRyYWNlTW9kZWwoY29udGV4dEVudHJpZXMpO1xuICAgICAgICBzZXRQcm9ncmVzcyh7IGRvbmU6IDAsIHRvdGFsOiAwIH0pO1xuICAgICAgICBzZXRNb2RlbChtb2RlbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRNb2RlbChlbXB0eU1vZGVsKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbaXNTZXJ2ZXIsIHRyYWNlVVJMcywgdXBsb2FkZWRUcmFjZU5hbWVzXSk7XG5cbiAgY29uc3Qgc2hvd0xvYWRpbmcgPSBwcm9ncmVzcy5kb25lICE9PSBwcm9ncmVzcy50b3RhbCAmJiBwcm9ncmVzcy50b3RhbCAhPT0gMDtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG93TG9hZGluZykge1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRTaG93UHJvZ3Jlc3NEaWFsb2codHJ1ZSk7XG4gICAgICB9LCAyMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTaG93UHJvZ3Jlc3NEaWFsb2coZmFsc2UpO1xuICAgIH1cbiAgfSwgW3Nob3dMb2FkaW5nXSk7XG5cbiAgY29uc3Qgc2hvd0ZpbGVVcGxvYWREcm9wQXJlYSA9ICEhKCFpc1NlcnZlciAmJiAhZHJhZ092ZXIgJiYgIWZpbGVGb3JMb2NhbE1vZGVFcnJvciAmJiAoIXRyYWNlVVJMcy5sZW5ndGggfHwgcHJvY2Vzc2luZ0Vycm9yTWVzc2FnZSkpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0ndmJveCB3b3JrYmVuY2gtbG9hZGVyJyBvbkRyYWdPdmVyPXtldmVudCA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHNldERyYWdPdmVyKHRydWUpOyB9fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT0naGJveCBoZWFkZXInIHsuLi4oc2hvd0ZpbGVVcGxvYWREcm9wQXJlYSA/IHsgaW5lcnQ6ICd0cnVlJyB9IDoge30pfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dvJz5cbiAgICAgICAgPGltZyBzcmM9J3BsYXl3cmlnaHQtbG9nby5zdmcnIGFsdD0nUGxheXdyaWdodCBsb2dvJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+UGxheXdyaWdodDwvZGl2PlxuICAgICAge21vZGVsLnRpdGxlICYmIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+e21vZGVsLnRpdGxlfTwvZGl2Pn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZXInPjwvZGl2PlxuICAgICAgPERpYWxvZ1Rvb2xiYXJCdXR0b24gaWNvbj0nc2V0dGluZ3MtZ2VhcicgdGl0bGU9J1NldHRpbmdzJyBkaWFsb2dEYXRhVGVzdElkPSdzZXR0aW5ncy10b29sYmFyLWRpYWxvZyc+XG4gICAgICAgIDxEZWZhdWx0U2V0dGluZ3NWaWV3IC8+XG4gICAgICA8L0RpYWxvZ1Rvb2xiYXJCdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPFdvcmtiZW5jaCBtb2RlbD17bW9kZWx9IGluZXJ0PXtzaG93RmlsZVVwbG9hZERyb3BBcmVhfSAvPlxuICAgIHtmaWxlRm9yTG9jYWxNb2RlRXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2Ryb3AtdGFyZ2V0Jz5cbiAgICAgIDxkaXY+VHJhY2UgVmlld2VyIHVzZXMgU2VydmljZSBXb3JrZXJzIHRvIHNob3cgdHJhY2VzLiBUbyB2aWV3IHRyYWNlOjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiAyMCB9fT5cbiAgICAgICAgPGRpdj4xLiBDbGljayA8YSBocmVmPXtmaWxlRm9yTG9jYWxNb2RlRXJyb3J9PmhlcmU8L2E+IHRvIHB1dCB5b3VyIHRyYWNlIGludG8gdGhlIGRvd25sb2FkIHNoZWxmPC9kaXY+XG4gICAgICAgIDxkaXY+Mi4gR28gdG8gPGEgaHJlZj0naHR0cHM6Ly90cmFjZS5wbGF5d3JpZ2h0LmRldic+dHJhY2UucGxheXdyaWdodC5kZXY8L2E+PC9kaXY+XG4gICAgICAgIDxkaXY+My4gRHJvcCB0aGUgdHJhY2UgZnJvbSB0aGUgZG93bmxvYWQgc2hlbGYgaW50byB0aGUgcGFnZTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+fVxuICAgIDxEaWFsb2cgb3Blbj17c2hvd1Byb2dyZXNzRGlhbG9nfSBpc01vZGFsPXt0cnVlfSBjbGFzc05hbWU9J3Byb2dyZXNzLWRpYWxvZyc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZ3Jlc3MtY29udGVudCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZScgcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD17MX0+TG9hZGluZyBQbGF5d3JpZ2h0IFRyYWNlLi4uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9ncmVzcy13cmFwcGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5uZXItcHJvZ3Jlc3MnIHN0eWxlPXt7IHdpZHRoOiBwcm9ncmVzcy50b3RhbCA/ICgxMDAgKiBwcm9ncmVzcy5kb25lIC8gcHJvZ3Jlc3MudG90YWwpICsgJyUnIDogMCB9fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0RpYWxvZz5cbiAgICB7c2hvd0ZpbGVVcGxvYWREcm9wQXJlYSAmJiA8ZGl2IGNsYXNzTmFtZT0nZHJvcC10YXJnZXQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2Nlc3NpbmctZXJyb3InIHJvbGU9J2FsZXJ0Jz57cHJvY2Vzc2luZ0Vycm9yTWVzc2FnZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZScgcm9sZT0naGVhZGluZycgYXJpYS1sZXZlbD17MX0+RHJvcCBQbGF5d3JpZ2h0IFRyYWNlIHRvIGxvYWQ8L2Rpdj5cbiAgICAgIDxkaXY+b3I8L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XG4gICAgICAgIGlucHV0Lm11bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiBoYW5kbGVGaWxlSW5wdXRDaGFuZ2UoZSkpO1xuICAgICAgfX0gdHlwZT0nYnV0dG9uJz5TZWxlY3QgZmlsZShzKTwvYnV0dG9uPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogNDAwIH19PlBsYXl3cmlnaHQgVHJhY2UgVmlld2VyIGlzIGEgUHJvZ3Jlc3NpdmUgV2ViIEFwcCwgaXQgZG9lcyBub3Qgc2VuZCB5b3VyIHRyYWNlIGFueXdoZXJlLFxuICAgICAgICBpdCBvcGVucyBpdCBsb2NhbGx5LjwvZGl2PlxuICAgIDwvZGl2Pn1cbiAgICB7aXNTZXJ2ZXIgJiYgIXRyYWNlVVJMcy5sZW5ndGggJiYgPGRpdiBjbGFzc05hbWU9J2Ryb3AtdGFyZ2V0Jz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+U2VsZWN0IHRlc3QgdG8gc2VlIHRoZSB0cmFjZTwvZGl2PlxuICAgIDwvZGl2Pn1cbiAgICB7ZHJhZ092ZXIgJiYgPGRpdiBjbGFzc05hbWU9J2Ryb3AtdGFyZ2V0J1xuICAgICAgb25EcmFnTGVhdmU9eygpID0+IHsgc2V0RHJhZ092ZXIoZmFsc2UpOyB9fVxuICAgICAgb25Ecm9wPXtldmVudCA9PiBoYW5kbGVEcm9wRXZlbnQoZXZlbnQpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aXRsZSc+UmVsZWFzZSB0byBhbmFseXNlIHRoZSBQbGF5d3JpZ2h0IFRyYWNlPC9kaXY+XG4gICAgPC9kaXY+fVxuICA8L2Rpdj47XG59O1xuXG5leHBvcnQgY29uc3QgZW1wdHlNb2RlbCA9IG5ldyBNdWx0aVRyYWNlTW9kZWwoW10pO1xuIiwiLypcbiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTXVsdGlUcmFjZU1vZGVsIH0gZnJvbSAnLi9tb2RlbFV0aWwnO1xuaW1wb3J0ICcuL3dvcmtiZW5jaExvYWRlci5jc3MnO1xuaW1wb3J0IHsgV29ya2JlbmNoIH0gZnJvbSAnLi93b3JrYmVuY2gnO1xuXG5pbXBvcnQgdHlwZSB7IENvbnRleHRFbnRyeSB9IGZyb20gJy4uL3R5cGVzL2VudHJpZXMnO1xuXG5leHBvcnQgY29uc3QgTGl2ZVdvcmtiZW5jaExvYWRlcjogUmVhY3QuRkM8eyB0cmFjZUpzb246IHN0cmluZyB9PiA9ICh7IHRyYWNlSnNvbiB9KSA9PiB7XG4gIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gUmVhY3QudXNlU3RhdGU8TXVsdGlUcmFjZU1vZGVsIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgcG9sbFRpbWVyID0gUmVhY3QudXNlUmVmPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocG9sbFRpbWVyLmN1cnJlbnQpXG4gICAgICBjbGVhclRpbWVvdXQocG9sbFRpbWVyLmN1cnJlbnQpO1xuXG4gICAgLy8gU3RhcnQgcG9sbGluZyBydW5uaW5nIHRlc3QuXG4gICAgcG9sbFRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gYXdhaXQgbG9hZFNpbmdsZVRyYWNlRmlsZSh0cmFjZUpzb24pO1xuICAgICAgICBzZXRNb2RlbChtb2RlbCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgTXVsdGlUcmFjZU1vZGVsKFtdKTtcbiAgICAgICAgc2V0TW9kZWwobW9kZWwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0Q291bnRlcihjb3VudGVyICsgMSk7XG4gICAgICB9XG4gICAgfSwgNTAwKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHBvbGxUaW1lci5jdXJyZW50KVxuICAgICAgICBjbGVhclRpbWVvdXQocG9sbFRpbWVyLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFt0cmFjZUpzb24sIGNvdW50ZXJdKTtcblxuICByZXR1cm4gPFdvcmtiZW5jaCBtb2RlbD17bW9kZWx9IGlzTGl2ZT17dHJ1ZX0gLz47XG59O1xuXG5hc3luYyBmdW5jdGlvbiBsb2FkU2luZ2xlVHJhY2VGaWxlKHRyYWNlSnNvbjogc3RyaW5nKTogUHJvbWlzZTxNdWx0aVRyYWNlTW9kZWw+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICBwYXJhbXMuc2V0KCd0cmFjZScsIHRyYWNlSnNvbik7XG4gIHBhcmFtcy5zZXQoJ2xpbWl0JywgJzEnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgY29udGV4dHM/JHtwYXJhbXMudG9TdHJpbmcoKX1gKTtcbiAgY29uc3QgY29udGV4dEVudHJpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgYXMgQ29udGV4dEVudHJ5W107XG4gIHJldHVybiBuZXcgTXVsdGlUcmFjZU1vZGVsKGNvbnRleHRFbnRyaWVzKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAnQHdlYi9jb21tb24uY3NzJztcbmltcG9ydCB7IGFwcGx5VGhlbWUgfSBmcm9tICdAd2ViL3RoZW1lJztcbmltcG9ydCAnQHdlYi90aGlyZF9wYXJ0eS92c2NvZGUvY29kaWNvbi5jc3MnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyBXb3JrYmVuY2hMb2FkZXIgfSBmcm9tICcuL3VpL3dvcmtiZW5jaExvYWRlcic7XG5pbXBvcnQgeyBMaXZlV29ya2JlbmNoTG9hZGVyIH0gZnJvbSAnLi91aS9saXZlV29ya2JlbmNoTG9hZGVyJztcblxuKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gIGFwcGx5VGhlbWUoKTtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2ZpbGU6Jykge1xuICAgIGlmIChxdWVyeVBhcmFtcy5nZXQoJ2lzVW5kZXJUZXN0JykgPT09ICd0cnVlJylcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKGYgPT4gc2V0VGltZW91dChmLCAxMDAwKSk7XG4gICAgaWYgKCFuYXZpZ2F0b3Iuc2VydmljZVdvcmtlcilcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmljZSB3b3JrZXJzIGFyZSBub3Qgc3VwcG9ydGVkLlxcbk1ha2Ugc3VyZSB0byBzZXJ2ZSB0aGUgVHJhY2UgVmlld2VyICgke3dpbmRvdy5sb2NhdGlvbn0pIHZpYSBIVFRQUyBvciBsb2NhbGhvc3QuYCk7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmJ1bmRsZS5qcycpO1xuICAgIGlmICghbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oZiA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLm9uY29udHJvbGxlcmNoYW5nZSA9ICgpID0+IGYoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEtlZXAgU1cgcnVubmluZy5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgZmV0Y2goJ3BpbmcnKTsgfSwgMTAwMDApO1xuICB9XG5cbiAgY29uc3QgdHJhY2UgPSBxdWVyeVBhcmFtcy5nZXQoJ3RyYWNlJyk7XG4gIGNvbnN0IHRyYWNlSXNMaXZlID0gdHJhY2U/LmVuZHNXaXRoKCcuanNvbicpO1xuICBjb25zdCB3b3JrYmVuY2ggPSB0cmFjZUlzTGl2ZSA/IDxMaXZlV29ya2JlbmNoTG9hZGVyIHRyYWNlSnNvbj17dHJhY2UhfSAvPiA6IDxXb3JrYmVuY2hMb2FkZXIvPjtcbiAgUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpISkucmVuZGVyKHdvcmtiZW5jaCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIlJlYWN0LnVzZVN0YXRlIiwiUmVhY3QudXNlQ2FsbGJhY2siLCJSZWFjdC51c2VFZmZlY3QiLCJwYXJhbXMiLCJtb2RlbCIsImpzeHMiLCJqc3giLCJSZWFjdC51c2VSZWYiLCJSZWFjdERPTS5jcmVhdGVSb290Il0sIm1hcHBpbmdzIjoiO0FBeUJPLE1BQU0sa0JBQ1IsTUFBTTtBQUNULFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSUEsYUFBQUEsU0FBd0IsS0FBSztBQUM3RCxRQUFNLENBQUMsV0FBVyxZQUFZLElBQUlBLGFBQUFBLFNBQXlCLENBQUEsQ0FBRTtBQUM3RCxRQUFNLENBQUMsb0JBQW9CLHFCQUFxQixJQUFJQSxhQUFBQSxTQUF5QixDQUFBLENBQUU7QUFDL0UsUUFBTSxDQUFDLE9BQU8sUUFBUSxJQUFJQSxhQUFBQSxTQUFnQyxVQUFVO0FBQzlELFFBQUEsQ0FBQyxVQUFVLFdBQVcsSUFBSUEsYUFBZ0QsU0FBQSxFQUFFLE1BQU0sR0FBRyxPQUFPLEdBQUc7QUFDckcsUUFBTSxDQUFDLFVBQVUsV0FBVyxJQUFJQSxhQUFBQSxTQUF3QixLQUFLO0FBQzdELFFBQU0sQ0FBQyx3QkFBd0IseUJBQXlCLElBQUlBLGFBQUFBLFNBQThCLElBQUk7QUFDOUYsUUFBTSxDQUFDLHVCQUF1Qix3QkFBd0IsSUFBSUEsYUFBQUEsU0FBOEIsSUFBSTtBQUM1RixRQUFNLENBQUMsb0JBQW9CLHFCQUFxQixJQUFJQSxhQUFBQSxTQUF3QixLQUFLO0FBRWpGLFFBQU0sb0JBQW9CQyx5QkFBa0IsQ0FBQyxVQUFvQjtBQUMvRCxVQUFNLFdBQVcsQ0FBQztBQUNsQixVQUFNLFlBQVksQ0FBQztBQUNuQixVQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sU0FBUyxJQUFJO0FBQ3hDLGFBQVMs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
