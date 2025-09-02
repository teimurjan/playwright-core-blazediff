"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var context_exports = {};
__export(context_exports, {
  Context: () => Context
});
module.exports = __toCommonJS(context_exports);
var import_testRunner = require("../../runner/testRunner");
class Context {
  constructor(configLocation, options) {
    this.configLocation = configLocation;
    this.options = options;
  }
  async createTestRunner() {
    if (this._testRunner)
      await this._testRunner.stopTests();
    const testRunner = new import_testRunner.TestRunner(this.configLocation, {});
    await testRunner.initialize({});
    this._testRunner = testRunner;
    testRunner.on(import_testRunner.TestRunnerEvent.TestFilesChanged, (testFiles) => {
      this._testRunner?.emit(import_testRunner.TestRunnerEvent.TestFilesChanged, testFiles);
    });
    this._testRunner = testRunner;
    return testRunner;
  }
  async close() {
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Context
});
//# sourceMappingURL=context.js.map
