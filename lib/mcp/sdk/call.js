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
var call_exports = {};
__export(call_exports, {
  callTool: () => callTool
});
module.exports = __toCommonJS(call_exports);
var mcpBundle = __toESM(require("./bundle.js"));
async function callTool(mcpUrl, name, params) {
  const transport = new mcpBundle.StreamableHTTPClientTransport(new URL(mcpUrl));
  const client = new mcpBundle.Client({ name: "Internal", version: "0.0.0" });
  await client.connect(transport);
  try {
    return await client.callTool({ name, arguments: params });
  } finally {
    await transport.terminateSession();
    await client.close();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  callTool
});
//# sourceMappingURL=call.js.map
