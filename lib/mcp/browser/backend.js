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
var backend_exports = {};
__export(backend_exports, {
  BrowserBackend: () => BrowserBackend,
  runBrowserBackendOnError: () => runBrowserBackendOnError
});
module.exports = __toCommonJS(backend_exports);
var mcp = __toESM(require("../sdk/exports"));
var mcpBundle = __toESM(require("../sdk/bundle"));
var import_tools = require("./tools");
var import_exports = require("../sdk/exports");
var import_mdb = require("../sdk/mdb");
var import_util = require("../../util");
const tools = [import_tools.snapshot, import_tools.pickLocator, import_tools.evaluate];
class BrowserBackend {
  constructor(page) {
    this.name = "Playwright";
    this.version = "0.0.1";
    this._tools = tools;
    this._page = page;
  }
  async initialize() {
  }
  async listTools() {
    return [...this._tools.map((tool) => mcp.toMcpTool(tool.schema)), mcp.toMcpTool(doneToolSchema)];
  }
  async callTool(name, args) {
    if (name === "done") {
      this.requestSelfDestruct?.();
      return {
        content: [{ type: "text", text: "Done" }]
      };
    }
    const tool = this._tools.find((tool2) => tool2.schema.name === name);
    if (!tool)
      throw new Error(`Tool not found: ${name}. Available tools: ${this._tools.map((tool2) => tool2.schema.name).join(", ")}`);
    const parsedArguments = tool.schema.inputSchema.parse(args || {});
    return await tool.handle(this._page, parsedArguments);
  }
}
const doneToolSchema = (0, import_exports.defineToolSchema)({
  name: "done",
  title: "Done",
  description: "Done",
  inputSchema: mcpBundle.z.object({}),
  type: "destructive"
});
async function runBrowserBackendOnError(page, message) {
  if (!process.env.PLAYWRIGHT_DEBUGGER_ENABLED)
    return;
  const snapshot2 = await page._snapshotForAI();
  const introMessage = `### Paused on error:
${(0, import_util.stripAnsiEscapes)(message())}

### Current page snapshot:
${snapshot2}

### Task
Try recovering from the error prior to continuing, use following tools to recover: ${tools.map((tool) => tool.schema.name).join(", ")}`;
  await (0, import_mdb.runOnPauseBackendLoop)(process.env.PLAYWRIGHT_MDB_URL, new BrowserBackend(page), introMessage);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BrowserBackend,
  runBrowserBackendOnError
});
//# sourceMappingURL=backend.js.map
