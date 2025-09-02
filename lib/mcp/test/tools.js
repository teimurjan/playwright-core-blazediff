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
  debugTest: () => debugTest,
  listTests: () => listTests,
  runTests: () => runTests
});
module.exports = __toCommonJS(tools_exports);
var import_utils = require("playwright-core/lib/utils");
var import_bundle = require("../sdk/bundle");
var import_base = require("../../reporters/base");
var import_list = __toESM(require("../../reporters/list"));
var import_listModeReporter = __toESM(require("../../reporters/listModeReporter"));
var import_tool = require("./tool");
var import_streams = require("./streams");
const listTests = (0, import_tool.defineTool)({
  schema: {
    name: "playwright_test_list_tests",
    title: "List tests",
    description: "List tests",
    inputSchema: import_bundle.z.object({}),
    type: "readOnly"
  },
  handle: async (context) => {
    const { screen, stream } = createScreen();
    const reporter = new import_listModeReporter.default({ screen, includeTestId: true });
    const testRunner = await context.createTestRunner();
    await testRunner.listTests(reporter, {});
    return {
      content: [{ type: "text", text: stream.content() }]
    };
  }
});
const runTests = (0, import_tool.defineTool)({
  schema: {
    name: "playwright_test_run_tests",
    title: "Run tests",
    description: "Run tests",
    inputSchema: import_bundle.z.object({
      locations: import_bundle.z.array(import_bundle.z.string()).describe('Folder, file or location to run: "test/e2e" or "test/e2e/file.spec.ts" or "test/e2e/file.spec.ts:20"'),
      projects: import_bundle.z.array(import_bundle.z.string()).optional().describe('Projects to run, projects from playwright.config.ts, by default runs all projects. Running with "chromium" is a good start')
    }),
    type: "readOnly"
  },
  handle: async (context, params) => {
    const { screen, stream } = createScreen();
    const configDir = context.configLocation.configDir;
    const reporter = new import_list.default({ configDir, screen, includeTestId: true });
    const testRunner = await context.createTestRunner();
    const result = await testRunner.runTests(reporter, {
      locations: params.locations,
      projects: params.projects
    });
    const text = stream.content();
    return {
      content: [
        { type: "text", text }
      ],
      isError: result.status !== "passed"
    };
  }
});
const debugTest = (0, import_tool.defineTool)({
  schema: {
    name: "playwright_test_debug_test",
    title: "Debug single test",
    description: "Debug single test",
    inputSchema: import_bundle.z.object({
      test: import_bundle.z.object({
        id: import_bundle.z.string().describe("Test ID to debug."),
        title: import_bundle.z.string().describe("Human readable test title for granting permission to debug the test.")
      })
    }),
    type: "readOnly"
  },
  handle: async (context, params) => {
    const stream = new import_streams.StringWriteStream();
    const screen = {
      ...import_base.terminalScreen,
      isTTY: false,
      colors: import_utils.noColors,
      stdout: stream,
      stderr: stream
    };
    const configDir = context.configLocation.configDir;
    const reporter = new import_list.default({ configDir, screen });
    const testRunner = await context.createTestRunner();
    process.env.PLAYWRIGHT_DEBUGGER_ENABLED = "1";
    const result = await testRunner.runTests(reporter, {
      headed: true,
      testIds: [params.test.id],
      // For automatic recovery
      timeout: 0,
      workers: 1
    }).finally(() => {
      process.env.PLAYWRIGHT_DEBUGGER_ENABLED = void 0;
    });
    const text = stream.content();
    return {
      content: [
        { type: "text", text }
      ],
      isError: result.status !== "passed"
    };
  }
});
function createScreen() {
  const stream = new import_streams.StringWriteStream();
  const screen = {
    ...import_base.terminalScreen,
    isTTY: false,
    colors: import_utils.noColors,
    stdout: stream,
    stderr: stream
  };
  return { screen, stream };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  debugTest,
  listTests,
  runTests
});
//# sourceMappingURL=tools.js.map
