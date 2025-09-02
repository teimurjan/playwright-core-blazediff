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
var mdb_exports = {};
__export(mdb_exports, {
  MDBBackend: () => MDBBackend,
  runMainBackend: () => runMainBackend,
  runOnPauseBackendLoop: () => runOnPauseBackendLoop
});
module.exports = __toCommonJS(mdb_exports);
var import_utilsBundle = require("playwright-core/lib/utilsBundle");
var import_utils = require("playwright-core/lib/utils");
var import_bundle = require("./bundle.js");
var import_bundle2 = require("./bundle.js");
var mcpBundle = __toESM(require("./bundle.js"));
var import_tool = require("./tool.js");
var mcpServer = __toESM(require("./server.js"));
var mcpHttp = __toESM(require("./http.js"));
var import_server = require("./server.js");
const mdbDebug = (0, import_utilsBundle.debug)("pw:mcp:mdb");
const errorsDebug = (0, import_utilsBundle.debug)("pw:mcp:errors");
class MDBBackend {
  constructor(topLevelBackend) {
    this._stack = [];
    this._initialized = false;
    this._topLevelBackend = topLevelBackend;
  }
  async initialize(server) {
    if (this._initialized)
      return;
    this._initialized = true;
    const transport = await (0, import_server.wrapInProcess)(this._topLevelBackend);
    await this._pushClient(transport);
  }
  async listTools() {
    const response = await this._client().listTools();
    return response.tools;
  }
  async callTool(name, args) {
    if (name === pushToolsSchema.name)
      return await this._pushTools(pushToolsSchema.inputSchema.parse(args || {}));
    const interruptPromise = new import_utils.ManualPromise();
    this._interruptPromise = interruptPromise;
    let [entry] = this._stack;
    while (entry && !entry.toolNames.includes(name)) {
      mdbDebug("popping client from stack for ", name);
      this._stack.shift();
      await entry.client.close();
      entry = this._stack[0];
    }
    const resultPromise = new import_utils.ManualPromise();
    entry.resultPromise = resultPromise;
    this._client().callTool({
      name,
      arguments: args
    }).then((result2) => {
      resultPromise.resolve(result2);
    }).catch((e) => {
      mdbDebug("error in client call", e);
      if (this._stack.length < 2)
        throw e;
      this._stack.shift();
      const prevEntry = this._stack[0];
      void prevEntry.resultPromise.then((result2) => resultPromise.resolve(result2));
    });
    const result = await Promise.race([interruptPromise, resultPromise]);
    if (interruptPromise.isDone())
      mdbDebug("client call intercepted", result);
    else
      mdbDebug("client call result", result);
    return result;
  }
  _client() {
    const [entry] = this._stack;
    if (!entry)
      throw new Error("No debugging backend available");
    return entry.client;
  }
  async _pushTools(params) {
    mdbDebug("pushing tools to the stack", params.mcpUrl);
    const transport = new import_bundle2.StreamableHTTPClientTransport(new URL(params.mcpUrl));
    await this._pushClient(transport, params.introMessage);
    return { content: [{ type: "text", text: "Tools pushed" }] };
  }
  async _pushClient(transport, introMessage) {
    mdbDebug("pushing client to the stack");
    const client = new mcpBundle.Client({ name: "Internal client", version: "0.0.0" });
    client.setRequestHandler(import_bundle.PingRequestSchema, () => ({}));
    await client.connect(transport);
    mdbDebug("connected to the new client");
    const { tools } = await client.listTools();
    this._stack.unshift({ client, toolNames: tools.map((tool) => tool.name), resultPromise: void 0 });
    mdbDebug("new tools added to the stack:", tools.map((tool) => tool.name));
    mdbDebug("interrupting current call:", !!this._interruptPromise);
    this._interruptPromise?.resolve({
      content: [{
        type: "text",
        text: introMessage || ""
      }]
    });
    this._interruptPromise = void 0;
    return { content: [{ type: "text", text: "Tools pushed" }] };
  }
}
const pushToolsSchema = (0, import_tool.defineToolSchema)({
  name: "mdb_push_tools",
  title: "Push MCP tools to the tools stack",
  description: "Push MCP tools to the tools stack",
  inputSchema: import_bundle.z.object({
    mcpUrl: import_bundle.z.string(),
    introMessage: import_bundle.z.string().optional()
  }),
  type: "readOnly"
});
async function runMainBackend(backendFactory, options) {
  const mdbBackend = new MDBBackend(backendFactory.create());
  const factory = {
    ...backendFactory,
    create: () => mdbBackend
  };
  const url = await startAsHttp(factory, { port: options?.port || 0 });
  process.env.PLAYWRIGHT_MDB_URL = url;
  if (options?.port !== void 0)
    return url;
  await mcpServer.connect(factory, new mcpBundle.StdioServerTransport(), false);
}
async function runOnPauseBackendLoop(mdbUrl, backend, introMessage) {
  const wrappedBackend = new OnceTimeServerBackendWrapper(backend);
  const factory = {
    name: "on-pause-backend",
    nameInConfig: "on-pause-backend",
    version: "0.0.0",
    create: () => wrappedBackend
  };
  const httpServer = await mcpHttp.startHttpServer({ port: 0 });
  await mcpHttp.installHttpTransport(httpServer, factory);
  const url = mcpHttp.httpAddressToString(httpServer.address());
  const client = new mcpBundle.Client({ name: "Internal client", version: "0.0.0" });
  client.setRequestHandler(import_bundle.PingRequestSchema, () => ({}));
  const transport = new import_bundle2.StreamableHTTPClientTransport(new URL(mdbUrl));
  await client.connect(transport);
  const pushToolsResult = await client.callTool({
    name: pushToolsSchema.name,
    arguments: {
      mcpUrl: url,
      introMessage
    }
  });
  if (pushToolsResult.isError)
    errorsDebug("Failed to push tools", pushToolsResult.content);
  await transport.terminateSession();
  await client.close();
  await wrappedBackend.waitForClosed();
  httpServer.close();
}
async function startAsHttp(backendFactory, options) {
  const httpServer = await mcpHttp.startHttpServer(options);
  await mcpHttp.installHttpTransport(httpServer, backendFactory);
  return mcpHttp.httpAddressToString(httpServer.address());
}
class OnceTimeServerBackendWrapper {
  constructor(backend) {
    this._selfDestructPromise = new import_utils.ManualPromise();
    this._backend = backend;
    this._backend.requestSelfDestruct = () => this._selfDestructPromise.resolve();
  }
  async initialize(server, clientVersion, roots) {
    await this._backend.initialize?.(server, clientVersion, roots);
  }
  async listTools() {
    return this._backend.listTools();
  }
  async callTool(name, args) {
    return this._backend.callTool(name, args);
  }
  serverClosed(server) {
    this._backend.serverClosed?.(server);
    this._selfDestructPromise.resolve();
  }
  async waitForClosed() {
    await this._selfDestructPromise;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MDBBackend,
  runMainBackend,
  runOnPauseBackendLoop
});
//# sourceMappingURL=mdb.js.map
