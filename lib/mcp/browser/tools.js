"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tools_exports = {};
__export(tools_exports, {
  elementSchema: () => elementSchema,
  evaluate: () => evaluate,
  pickLocator: () => pickLocator,
  snapshot: () => snapshot
});
module.exports = __toCommonJS(tools_exports);
var import_utils = require("playwright-core/lib/utils");
var import_tool = require("./tool.js");
var mcp = __toESM(require("../sdk/bundle"));
const snapshot = (0, import_tool.defineTool)({
  schema: {
    name: "playwright_test_browser_snapshot",
    title: "Capture page snapshot",
    description: "Capture page snapshot for debugging",
    inputSchema: mcp.z.object({}),
    type: "readOnly"
  },
  handle: async (page, params) => {
    const snapshot2 = await page._snapshotForAI();
    return {
      content: [
        {
          type: "text",
          text: snapshot2
        }
      ]
    };
  }
});
const elementSchema = mcp.z.object({
  element: mcp.z.string().describe("Human-readable element description used to obtain permission to interact with the element"),
  ref: mcp.z.string().describe("Exact target element reference from the page snapshot")
});
const pickLocator = (0, import_tool.defineTool)({
  schema: {
    name: "playwright_test_generate_locator",
    title: "Create locator for element",
    description: "Generate locator for the given element to use in tests",
    inputSchema: elementSchema,
    type: "readOnly"
  },
  handle: async (page, params) => {
    const locator = await refLocator(page, params);
    try {
      const { resolvedSelector } = await locator._resolveSelector();
      const locatorString = (0, import_utils.asLocator)("javascript", resolvedSelector);
      return { content: [{ type: "text", text: locatorString }] };
    } catch (e) {
      throw new Error(`Ref not found, likely because element was removed. Use ${snapshot.schema.name} to see what elements are currently on the page.`);
    }
  }
});
const evaluateSchema = mcp.z.object({
  function: mcp.z.string().describe("() => { /* code */ } or (element) => { /* code */ } when element is provided"),
  element: mcp.z.string().optional().describe("Human-readable element description used to obtain permission to interact with the element"),
  ref: mcp.z.string().optional().describe("Exact target element reference from the page snapshot")
});
const evaluate = (0, import_tool.defineTool)({
  schema: {
    name: "playwright_test_evaluate_on_pause",
    title: "Evaluate in page",
    description: "Evaluate JavaScript expression on page or element",
    inputSchema: evaluateSchema,
    type: "destructive"
  },
  handle: async (page, params) => {
    let locator;
    if (params.ref && params.element)
      locator = await refLocator(page, { ref: params.ref, element: params.element });
    const receiver = locator ?? page;
    const result = await receiver._evaluateFunction(params.function);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) || "undefined" }]
    };
  }
});
async function refLocator(page, elementRef) {
  const snapshot2 = await page._snapshotForAI();
  if (!snapshot2.includes(`[ref=${elementRef.ref}]`))
    throw new Error(`Ref ${elementRef.ref} not found in the current page snapshot. Try capturing new snapshot.`);
  return page.locator(`aria-ref=${elementRef.ref}`).describe(elementRef.element);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  elementSchema,
  evaluate,
  pickLocator,
  snapshot
});
//# sourceMappingURL=tools.js.map
