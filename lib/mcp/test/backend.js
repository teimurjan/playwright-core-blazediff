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
  TestServerBackend: () => TestServerBackend
});
module.exports = __toCommonJS(backend_exports);
var mcp = __toESM(require("../sdk/exports.js"));
var import_context = require("./context");
var import_tools = require("./tools.js");
var import_tools2 = require("../browser/tools");
class TestServerBackend {
  constructor(resolvedLocation, options) {
    this.name = "Playwright";
    this.version = "0.0.1";
    this._tools = [import_tools.listTests, import_tools.runTests, import_tools.debugTest];
    this._context = new import_context.Context(resolvedLocation, options);
  }
  async listTools() {
    return [
      ...this._tools.map((tool) => mcp.toMcpTool(tool.schema)),
      mcp.toMcpTool(import_tools2.snapshot.schema),
      mcp.toMcpTool(import_tools2.pickLocator.schema),
      mcp.toMcpTool(import_tools2.evaluate.schema)
    ];
  }
  async callTool(name, args) {
    const tool = this._tools.find((tool2) => tool2.schema.name === name);
    if (!tool)
      throw new Error(`Tool not found: ${name}. Available tools: ${this._tools.map((tool2) => tool2.schema.name).join(", ")}`);
    const parsedArguments = tool.schema.inputSchema.parse(args || {});
    return await tool.handle(this._context, parsedArguments);
  }
  serverClosed() {
    void this._context.close();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TestServerBackend
});
//# sourceMappingURL=backend.js.map
