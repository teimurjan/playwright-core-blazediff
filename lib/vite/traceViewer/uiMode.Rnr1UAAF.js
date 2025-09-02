const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/xtermModule-Es_gt_u7.js","./xtermModule.EsaqrrTX.css"])))=>i.map(i=>d[i]);
import { u as useMeasure, r as reactExports, f as currentTheme, _ as __vitePreload, g as addThemeListener, h as removeThemeListener, j as jsxRuntimeExports, R as React, E as Expandable, s as settings, i as clsx, k as TreeView, t as testStatusIcon, m as msToString, l as Toolbar, n as ToolbarButton, M as MultiTraceModel, b as Workbench, o as useSetting, T as TestServerConnection, W as WebSocketTestServerTransport, S as SplitView, p as SettingsView, a as DefaultSettingsView, d as applyTheme, e as clientExports } from "./assets/defaultSettingsView-70enpUY1.js";
var define_process_env_default = {};
class TeleReporterReceiver {
  constructor(reporter, options = {}) {
    this.isListing = false;
    this._tests = /* @__PURE__ */ new Map();
    this._rootSuite = new TeleSuite("", "root");
    this._options = options;
    this._reporter = reporter;
  }
  reset() {
    this._rootSuite._entries = [];
    this._tests.clear();
  }
  dispatch(message) {
    const { method, params } = message;
    if (method === "onConfigure") {
      this._onConfigure(params.config);
      return;
    }
    if (method === "onProject") {
      this._onProject(params.project);
      return;
    }
    if (method === "onBegin") {
      this._onBegin();
      return;
    }
    if (method === "onTestBegin") {
      this._onTestBegin(params.testId, params.result);
      return;
    }
    if (method === "onTestEnd") {
      this._onTestEnd(params.test, params.result);
      return;
    }
    if (method === "onStepBegin") {
      this._onStepBegin(params.testId, params.resultId, params.step);
      return;
    }
    if (method === "onAttach") {
      this._onAttach(params.testId, params.resultId, params.attachments);
      return;
    }
    if (method === "onStepEnd") {
      this._onStepEnd(params.testId, params.resultId, params.step);
      return;
    }
    if (method === "onError") {
      this._onError(params.error);
      return;
    }
    if (method === "onStdIO") {
      this._onStdIO(params.type, params.testId, params.resultId, params.data, params.isBase64);
      return;
    }
    if (method === "onEnd")
      return this._onEnd(params.result);
    if (method === "onExit")
      return this._onExit();
  }
  _onConfigure(config) {
    var _a, _b;
    this._rootDir = config.rootDir;
    this._config = this._parseConfig(config);
    (_b = (_a = this._reporter).onConfigure) == null ? void 0 : _b.call(_a, this._config);
  }
  _onProject(project) {
    let projectSuite = this._options.mergeProjects ? this._rootSuite.suites.find((suite) => suite.project().name === project.name) : void 0;
    if (!projectSuite) {
      projectSuite = new TeleSuite(project.name, "project");
      this._rootSuite._addSuite(projectSuite);
    }
    projectSuite._project = this._parseProject(project);
    for (const suite of project.suites)
      this._mergeSuiteInto(suite, projectSuite);
  }
  _onBegin() {
    var _a, _b;
    (_b = (_a = this._reporter).onBegin) == null ? void 0 : _b.call(_a, this._rootSuite);
  }
  _onTestBegin(testId, payload) {
    var _a, _b;
    const test = this._tests.get(testId);
    if (this._options.clearPreviousResultsWhenTestBegins)
      test.results = [];
    const testResult = test._createTestResult(payload.id);
    testResult.retry = payload.retry;
    testResult.workerIndex = payload.workerIndex;
    testResult.parallelIndex = payload.parallelIndex;
    testResult.setStartTimeNumber(payload.startTime);
    (_b = (_a = this._reporter).onTestBegin) == null ? void 0 : _b.call(_a, test, testResult);
  }
  _onTestEnd(testEndPayload, payload) {
    var _a, _b, _c;
    const test = this._tests.get(testEndPayload.testId);
    test.timeout = testEndPayload.timeout;
    test.expectedStatus = testEndPayload.expectedStatus;
    const result = test.results.find((r) => r._id === payload.id);
    result.duration = payload.duration;
    result.status = payload.status;
    result.errors = payload.errors;
    result.error = (_a = result.errors) == null ? void 0 : _a[0];
    if (!!payload.attachments)
      result.attachments = this._parseAttachments(payload.attachments);
    if (payload.annotations) {
      this._absoluteAnnotationLocationsInplace(payload.annotations);
      result.annotations = payload.annotations;
      test.annotations = payload.annotations;
    }
    (_c = (_b = this._reporter).onTestEnd) == null ? void 0 : _c.call(_b, test, result);
    result._stepMap = /* @__PURE__ */ new Map();
  }
  _onStepBegin(testId, resultId, payload) {
    var _a, _b;
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    const parentStep = payload.parentStepId ? result._stepMap.get(payload.parentStepId) : void 0;
    const location = this._absoluteLocation(payload.location);
    const step = new TeleTestStep(payload, parentStep, location, result);
    if (parentStep)
      parentStep.steps.push(step);
    else
      result.steps.push(step);
    result._stepMap.set(payload.id, step);
    (_b = (_a = this._reporter).onStepBegin) == null ? void 0 : _b.call(_a, test, result, step);
  }
  _onStepEnd(testId, resultId, payload) {
    var _a, _b;
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    const step = result._stepMap.get(payload.id);
    step._endPayload = payload;
    step.duration = payload.duration;
    step.error = payload.error;
    (_b = (_a = this._reporter).onStepEnd) == null ? void 0 : _b.call(_a, test, result, step);
  }
  _onAttach(testId, resultId, attachments) {
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    result.attachments.push(...attachments.map((a) => ({
      name: a.name,
      contentType: a.contentType,
      path: a.path,
      body: a.base64 && globalThis.Buffer ? Buffer.from(a.base64, "base64") : void 0
    })));
  }
  _onError(error) {
    var _a, _b;
    (_b = (_a = this._reporter).onError) == null ? void 0 : _b.call(_a, error);
  }
  _onStdIO(type, testId, resultId, data, isBase64) {
    var _a, _b, _c, _d;
    const chunk = isBase64 ? globalThis.Buffer ? Buffer.from(data, "base64") : atob(data) : data;
    const test = testId ? this._tests.get(testId) : void 0;
    const result = test && resultId ? test.results.find((r) => r._id === resultId) : void 0;
    if (type === "stdout") {
      result == null ? void 0 : result.stdout.push(chunk);
      (_b = (_a = this._reporter).onStdOut) == null ? void 0 : _b.call(_a, chunk, test, result);
    } else {
      result == null ? void 0 : result.stderr.push(chunk);
      (_d = (_c = this._reporter).onStdErr) == null ? void 0 : _d.call(_c, chunk, test, result);
    }
  }
  async _onEnd(result) {
    var _a, _b;
    await ((_b = (_a = this._reporter).onEnd) == null ? void 0 : _b.call(_a, {
      status: result.status,
      startTime: new Date(result.startTime),
      duration: result.duration
    }));
  }
  _onExit() {
    var _a, _b;
    return (_b = (_a = this._reporter).onExit) == null ? void 0 : _b.call(_a);
  }
  _parseConfig(config) {
    const result = { ...baseFullConfig, ...config };
    if (this._options.configOverrides) {
      result.configFile = this._options.configOverrides.configFile;
      result.reportSlowTests = this._options.configOverrides.reportSlowTests;
      result.quiet = this._options.configOverrides.quiet;
      result.reporter = [...this._options.configOverrides.reporter];
    }
    return result;
  }
  _parseProject(project) {
    return {
      metadata: project.metadata,
      name: project.name,
      outputDir: this._absolutePath(project.outputDir),
      repeatEach: project.repeatEach,
      retries: project.retries,
      testDir: this._absolutePath(project.testDir),
      testIgnore: parseRegexPatterns(project.testIgnore),
      testMatch: parseRegexPatterns(project.testMatch),
      timeout: project.timeout,
      grep: parseRegexPatterns(project.grep),
      grepInvert: parseRegexPatterns(project.grepInvert),
      dependencies: project.dependencies,
      teardown: project.teardown,
      snapshotDir: this._absolutePath(project.snapshotDir),
      use: project.use
    };
  }
  _parseAttachments(attachments) {
    return attachments.map((a) => {
      return {
        ...a,
        body: a.base64 && globalThis.Buffer ? Buffer.from(a.base64, "base64") : void 0
      };
    });
  }
  _mergeSuiteInto(jsonSuite, parent) {
    let targetSuite = parent.suites.find((s) => s.title === jsonSuite.title);
    if (!targetSuite) {
      targetSuite = new TeleSuite(jsonSuite.title, parent.type === "project" ? "file" : "describe");
      parent._addSuite(targetSuite);
    }
    targetSuite.location = this._absoluteLocation(jsonSuite.location);
    jsonSuite.entries.forEach((e) => {
      if ("testId" in e)
        this._mergeTestInto(e, targetSuite);
      else
        this._mergeSuiteInto(e, targetSuite);
    });
  }
  _mergeTestInto(jsonTest, parent) {
    let targetTest = this._options.mergeTestCases ? parent.tests.find((s) => s.title === jsonTest.title && s.repeatEachIndex === jsonTest.repeatEachIndex) : void 0;
    if (!targetTest) {
      targetTest = new TeleTestCase(jsonTest.testId, jsonTest.title, this._absoluteLocation(jsonTest.location), jsonTest.repeatEachIndex);
      parent._addTest(targetTest);
      this._tests.set(targetTest.id, targetTest);
    }
    this._updateTest(jsonTest, targetTest);
  }
  _updateTest(payload, test) {
    test.id = payload.testId;
    test.location = this._absoluteLocation(payload.location);
    test.retries = payload.retries;
    test.tags = payload.tags ?? [];
    test.annotations = payload.annotations ?? [];
    this._absoluteAnnotationLocationsInplace(test.annotations);
    return test;
  }
  _absoluteAnnotationLocationsInplace(annotations) {
    for (const annotation of annotations) {
      if (annotation.location)
        annotation.location = this._absoluteLocation(annotation.location);
    }
  }
  _absoluteLocation(location) {
    if (!location)
      return location;
    return {
      ...location,
      file: this._absolutePath(location.file)
    };
  }
  _absolutePath(relativePath) {
    if (relativePath === void 0)
      return;
    return this._options.resolvePath ? this._options.resolvePath(this._rootDir, relativePath) : this._rootDir + "/" + relativePath;
  }
}
class TeleSuite {
  constructor(title, type) {
    this._entries = [];
    this._requireFile = "";
    this._parallelMode = "none";
    this.title = title;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  get suites() {
    return this._entries.filter((e) => e.type !== "test");
  }
  get tests() {
    return this._entries.filter((e) => e.type === "test");
  }
  entries() {
    return this._entries;
  }
  allTests() {
    const result = [];
    const visit = (suite) => {
      for (const entry of suite.entries()) {
        if (entry.type === "test")
          result.push(entry);
        else
          visit(entry);
      }
    };
    visit(this);
    return result;
  }
  titlePath() {
    const titlePath = this.parent ? this.parent.titlePath() : [];
    if (this.title || this._type !== "describe")
      titlePath.push(this.title);
    return titlePath;
  }
  project() {
    var _a;
    return this._project ?? ((_a = this.parent) == null ? void 0 : _a.project());
  }
  _addTest(test) {
    test.parent = this;
    this._entries.push(test);
  }
  _addSuite(suite) {
    suite.parent = this;
    this._entries.push(suite);
  }
}
class TeleTestCase {
  constructor(id, title, location, repeatEachIndex) {
    this.fn = () => {
    };
    this.results = [];
    this.type = "test";
    this.expectedStatus = "passed";
    this.timeout = 0;
    this.annotations = [];
    this.retries = 0;
    this.tags = [];
    this.repeatEachIndex = 0;
    this.id = id;
    this.title = title;
    this.location = location;
    this.repeatEachIndex = repeatEachIndex;
  }
  titlePath() {
    const titlePath = this.parent ? this.parent.titlePath() : [];
    titlePath.push(this.title);
    return titlePath;
  }
  outcome() {
    return computeTestCaseOutcome(this);
  }
  ok() {
    const status = this.outcome();
    return status === "expected" || status === "flaky" || status === "skipped";
  }
  _createTestResult(id) {
    const result = new TeleTestResult(this.results.length, id);
    this.results.push(result);
    return result;
  }
}
class TeleTestStep {
  constructor(payload, parentStep, location, result) {
    this.duration = -1;
    this.steps = [];
    this._startTime = 0;
    this.title = payload.title;
    this.category = payload.category;
    this.location = location;
    this.parent = parentStep;
    this._startTime = payload.startTime;
    this._result = result;
  }
  titlePath() {
    var _a;
    const parentPath = ((_a = this.parent) == null ? void 0 : _a.titlePath()) || [];
    return [...parentPath, this.title];
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(value) {
    this._startTime = +value;
  }
  get attachments() {
    var _a, _b;
    return ((_b = (_a = this._endPayload) == null ? void 0 : _a.attachments) == null ? void 0 : _b.map((index) => this._result.attachments[index])) ?? [];
  }
  get annotations() {
    var _a;
    return ((_a = this._endPayload) == null ? void 0 : _a.annotations) ?? [];
  }
}
class TeleTestResult {
  constructor(retry, id) {
    this.parallelIndex = -1;
    this.workerIndex = -1;
    this.duration = -1;
    this.stdout = [];
    this.stderr = [];
    this.attachments = [];
    this.annotations = [];
    this.status = "skipped";
    this.steps = [];
    this.errors = [];
    this._stepMap = /* @__PURE__ */ new Map();
    this._startTime = 0;
    this.retry = retry;
    this._id = id;
  }
  setStartTimeNumber(startTime) {
    this._startTime = startTime;
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(value) {
    this._startTime = +value;
  }
}
const baseFullConfig = {
  forbidOnly: false,
  fullyParallel: false,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: "always",
  projects: [],
  reporter: [[define_process_env_default.CI ? "dot" : "list"]],
  reportSlowTests: {
    max: 5,
    threshold: 3e5
    /* 5 minutes */
  },
  configFile: "",
  rootDir: "",
  quiet: false,
  shard: null,
  updateSnapshots: "missing",
  updateSourceMethod: "patch",
  version: "",
  workers: 0,
  webServer: null
};
function parseRegexPatterns(patterns) {
  return patterns.map((p) => {
    if (p.s !== void 0)
      return p.s;
    return new RegExp(p.r.source, p.r.flags);
  });
}
function computeTestCaseOutcome(test) {
  let skipped = 0;
  let expected = 0;
  let unexpected = 0;
  for (const result of test.results) {
    if (result.status === "interrupted") ;
    else if (result.status === "skipped" && test.expectedStatus === "skipped") {
      ++skipped;
    } else if (result.status === "skipped") ;
    else if (result.status === test.expectedStatus) {
      ++expected;
    } else {
      ++unexpected;
    }
  }
  if (expected === 0 && unexpected === 0)
    return "skipped";
  if (unexpected === 0)
    return "expected";
  if (expected === 0 && skipped === 0)
    return "unexpected";
  return "flaky";
}
class TestTree {
  constructor(rootFolder, rootSuite, loadErrors, projectFilters, pathSeparator) {
    this._treeItemById = /* @__PURE__ */ new Map();
    this._treeItemByTestId = /* @__PURE__ */ new Map();
    const filterProjects = projectFilters && [...projectFilters.values()].some(Boolean);
    this.pathSeparator = pathSeparator;
    this.rootItem = {
      kind: "group",
      subKind: "folder",
      id: rootFolder,
      title: "",
      location: { file: "", line: 0, column: 0 },
      duration: 0,
      parent: void 0,
      children: [],
      status: "none",
      hasLoadErrors: false
    };
    this._treeItemById.set(rootFolder, this.rootItem);
    const visitSuite = (project, parentSuite, parentGroup) => {
      for (const suite of parentSuite.suites) {
        if (!suite.title) {
          visitSuite(project, suite, parentGroup);
          continue;
        }
        let group = parentGroup.children.find((item) => item.kind === "group" && item.title === suite.title);
        if (!group) {
          group = {
            kind: "group",
            subKind: "describe",
            id: "suite:" + parentSuite.titlePath().join("") + "" + suite.title,
            // account for anonymous suites
            title: suite.title,
            location: suite.location,
            duration: 0,
            parent: parentGroup,
            children: [],
            status: "none",
            hasLoadErrors: false
          };
          this._addChild(parentGroup, group);
        }
        visitSuite(project, suite, group);
      }
      for (const test of parentSuite.tests) {
        const title = test.title;
        let testCaseItem = parentGroup.children.find((t) => t.kind !== "group" && t.title === title);
        if (!testCaseItem) {
          testCaseItem = {
            kind: "case",
            id: "test:" + test.titlePath().join(""),
            title,
            parent: parentGroup,
            children: [],
            tests: [],
            location: test.location,
            duration: 0,
            status: "none",
            project: void 0,
            test: void 0,
            tags: test.tags
          };
          this._addChild(parentGroup, testCaseItem);
        }
        const result = test.results[0];
        let status = "none";
        if ((result == null ? void 0 : result[statusEx]) === "scheduled")
          status = "scheduled";
        else if ((result == null ? void 0 : result[statusEx]) === "running")
          status = "running";
        else if ((result == null ? void 0 : result.status) === "skipped")
          status = "skipped";
        else if ((result == null ? void 0 : result.status) === "interrupted")
          status = "none";
        else if (result && test.outcome() !== "expected")
          status = "failed";
        else if (result && test.outcome() === "expected")
          status = "passed";
        testCaseItem.tests.push(test);
        const testItem = {
          kind: "test",
          id: test.id,
          title: project.name,
          location: test.location,
          test,
          parent: testCaseItem,
          children: [],
          status,
          duration: test.results.length ? Math.max(0, test.results[0].duration) : 0,
          project
        };
        this._addChild(testCaseItem, testItem);
        this._treeItemByTestId.set(test.id, testItem);
        testCaseItem.duration = testCaseItem.children.reduce((a, b) => a + b.duration, 0);
      }
    };
    for (const projectSuite of (rootSuite == null ? void 0 : rootSuite.suites) || []) {
      if (filterProjects && !projectFilters.get(projectSuite.title))
        continue;
      for (const fileSuite of projectSuite.suites) {
        const fileItem = this._fileItem(fileSuite.location.file.split(pathSeparator), true);
        visitSuite(projectSuite.project(), fileSuite, fileItem);
      }
    }
    for (const loadError of loadErrors) {
      if (!loadError.location)
        continue;
      const fileItem = this._fileItem(loadError.location.file.split(pathSeparator), true);
      fileItem.hasLoadErrors = true;
    }
  }
  _addChild(parent, child) {
    parent.children.push(child);
    child.parent = parent;
    this._treeItemById.set(child.id, child);
  }
  filterTree(filterText, statusFilters, runningTestIds) {
    const tokens = filterText.trim().toLowerCase().split(" ");
    const filtersStatuses = [...statusFilters.values()].some(Boolean);
    const filter = (testCase) => {
      const titleWithTags = [...testCase.tests[0].titlePath(), ...testCase.tests[0].tags].join(" ").toLowerCase();
      if (!tokens.every((token) => titleWithTags.includes(token)) && !testCase.tests.some((t) => runningTestIds == null ? void 0 : runningTestIds.has(t.id)))
        return false;
      testCase.children = testCase.children.filter((test) => {
        return !filtersStatuses || (runningTestIds == null ? void 0 : runningTestIds.has(test.test.id)) || statusFilters.get(test.status);
      });
      testCase.tests = testCase.children.map((c) => c.test);
      return !!testCase.children.length;
    };
    const visit = (treeItem) => {
      const newChildren = [];
      for (const child of treeItem.children) {
        if (child.kind === "case") {
          if (filter(child))
            newChildren.push(child);
        } else {
          visit(child);
          if (child.children.length || child.hasLoadErrors)
            newChildren.push(child);
        }
      }
      treeItem.children = newChildren;
    };
    visit(this.rootItem);
  }
  _fileItem(filePath, isFile) {
    if (filePath.length === 0)
      return this.rootItem;
    const fileName = filePath.join(this.pathSeparator);
    const existingFileItem = this._treeItemById.get(fileName);
    if (existingFileItem)
      return existingFileItem;
    const parentFileItem = this._fileItem(filePath.slice(0, filePath.length - 1), false);
    const fileItem = {
      kind: "group",
      subKind: isFile ? "file" : "folder",
      id: fileName,
      title: filePath[filePath.length - 1],
      location: { file: fileName, line: 0, column: 0 },
      duration: 0,
      parent: parentFileItem,
      children: [],
      status: "none",
      hasLoadErrors: false
    };
    this._addChild(parentFileItem, fileItem);
    return fileItem;
  }
  sortAndPropagateStatus() {
    sortAndPropagateStatus(this.rootItem);
  }
  flattenForSingleProject() {
    const visit = (treeItem) => {
      if (treeItem.kind === "case" && treeItem.children.length === 1) {
        treeItem.project = treeItem.children[0].project;
        treeItem.test = treeItem.children[0].test;
        treeItem.children = [];
        this._treeItemByTestId.set(treeItem.test.id, treeItem);
      } else {
        treeItem.children.forEach(visit);
      }
    };
    visit(this.rootItem);
  }
  shortenRoot() {
    let shortRoot = this.rootItem;
    while (shortRoot.children.length === 1 && shortRoot.children[0].kind === "group" && shortRoot.children[0].subKind === "folder")
      shortRoot = shortRoot.children[0];
    shortRoot.location = this.rootItem.location;
    this.rootItem = shortRoot;
  }
  testIds() {
    const result = /* @__PURE__ */ new Set();
    const visit = (treeItem) => {
      if (treeItem.kind === "case")
        treeItem.tests.forEach((t) => result.add(t.id));
      treeItem.children.forEach(visit);
    };
    visit(this.rootItem);
    return result;
  }
  fileNames() {
    const result = /* @__PURE__ */ new Set();
    const visit = (treeItem) => {
      if (treeItem.kind === "group" && treeItem.subKind === "file")
        result.add(treeItem.id);
      else
        treeItem.children.forEach(visit);
    };
    visit(this.rootItem);
    return [...result];
  }
  flatTreeItems() {
    const result = [];
    const visit = (treeItem) => {
      result.push(treeItem);
      treeItem.children.forEach(visit);
    };
    visit(this.rootItem);
    return result;
  }
  treeItemById(id) {
    return this._treeItemById.get(id);
  }
  collectTestIds(treeItem) {
    return treeItem ? collectTestIds(treeItem) : /* @__PURE__ */ new Set();
  }
}
function sortAndPropagateStatus(treeItem) {
  for (const child of treeItem.children)
    sortAndPropagateStatus(child);
  if (treeItem.kind === "group") {
    treeItem.children.sort((a, b) => {
      const fc = a.location.file.localeCompare(b.location.file);
      return fc || a.location.line - b.location.line;
    });
  }
  let allPassed = treeItem.children.length > 0;
  let allSkipped = treeItem.children.length > 0;
  let hasFailed = false;
  let hasRunning = false;
  let hasScheduled = false;
  for (const child of treeItem.children) {
    allSkipped = allSkipped && child.status === "skipped";
    allPassed = allPassed && (child.status === "passed" || child.status === "skipped");
    hasFailed = hasFailed || child.status === "failed";
    hasRunning = hasRunning || child.status === "running";
    hasScheduled = hasScheduled || child.status === "scheduled";
  }
  if (hasRunning)
    treeItem.status = "running";
  else if (hasScheduled)
    treeItem.status = "scheduled";
  else if (hasFailed)
    treeItem.status = "failed";
  else if (allSkipped)
    treeItem.status = "skipped";
  else if (allPassed)
    treeItem.status = "passed";
}
function collectTestIds(treeItem) {
  const testIds = /* @__PURE__ */ new Set();
  const visit = (treeItem2) => {
    var _a;
    if (treeItem2.kind === "case")
      treeItem2.tests.map((t) => t.id).forEach((id) => testIds.add(id));
    else if (treeItem2.kind === "test")
      testIds.add(treeItem2.id);
    else
      (_a = treeItem2.children) == null ? void 0 : _a.forEach(visit);
  };
  visit(treeItem);
  return testIds;
}
const statusEx = Symbol("statusEx");
class TeleSuiteUpdater {
  constructor(options) {
    this.loadErrors = [];
    this.progress = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0
    };
    this._lastRunTestCount = 0;
    this._receiver = new TeleReporterReceiver(this._createReporter(), {
      mergeProjects: true,
      mergeTestCases: true,
      resolvePath: (rootDir, relativePath) => rootDir + options.pathSeparator + relativePath,
      clearPreviousResultsWhenTestBegins: true
    });
    this._options = options;
  }
  _createReporter() {
    return {
      version: () => "v2",
      onConfigure: (c) => {
        this.config = c;
        this._lastRunReceiver = new TeleReporterReceiver({
          version: () => "v2",
          onBegin: (suite) => {
            this._lastRunTestCount = suite.allTests().length;
            this._lastRunReceiver = void 0;
          }
        }, {
          mergeProjects: true,
          mergeTestCases: false,
          resolvePath: (rootDir, relativePath) => rootDir + this._options.pathSeparator + relativePath
        });
      },
      onBegin: (suite) => {
        var _a;
        if (!this.rootSuite)
          this.rootSuite = suite;
        if (this._testResultsSnapshot) {
          for (const test of this.rootSuite.allTests())
            test.results = ((_a = this._testResultsSnapshot) == null ? void 0 : _a.get(test.id)) || test.results;
          this._testResultsSnapshot = void 0;
        }
        this.progress.total = this._lastRunTestCount;
        this.progress.passed = 0;
        this.progress.failed = 0;
        this.progress.skipped = 0;
        this._options.onUpdate(true);
      },
      onEnd: () => {
        this._options.onUpdate(true);
      },
      onTestBegin: (test, testResult) => {
        testResult[statusEx] = "running";
        this._options.onUpdate();
      },
      onTestEnd: (test, testResult) => {
        if (test.outcome() === "skipped")
          ++this.progress.skipped;
        else if (test.outcome() === "unexpected")
          ++this.progress.failed;
        else
          ++this.progress.passed;
        testResult[statusEx] = testResult.status;
        this._options.onUpdate();
      },
      onError: (error) => this._handleOnError(error),
      printsToStdio: () => false
    };
  }
  processGlobalReport(report) {
    const receiver = new TeleReporterReceiver({
      version: () => "v2",
      onConfigure: (c) => {
        this.config = c;
      },
      onError: (error) => this._handleOnError(error)
    });
    for (const message of report)
      void receiver.dispatch(message);
  }
  processListReport(report) {
    var _a;
    const tests = ((_a = this.rootSuite) == null ? void 0 : _a.allTests()) || [];
    this._testResultsSnapshot = new Map(tests.map((test) => [test.id, test.results]));
    this._receiver.reset();
    for (const message of report)
      void this._receiver.dispatch(message);
  }
  processTestReportEvent(message) {
    var _a, _b, _c;
    (_b = (_a = this._lastRunReceiver) == null ? void 0 : _a.dispatch(message)) == null ? void 0 : _b.catch(() => {
    });
    (_c = this._receiver.dispatch(message)) == null ? void 0 : _c.catch(() => {
    });
  }
  _handleOnError(error) {
    var _a, _b;
    this.loadErrors.push(error);
    (_b = (_a = this._options).onError) == null ? void 0 : _b.call(_a, error);
    this._options.onUpdate();
  }
  asModel() {
    return {
      rootSuite: this.rootSuite || new TeleSuite("", "root"),
      config: this.config,
      loadErrors: this.loadErrors,
      progress: this.progress
    };
  }
}
const XtermWrapper = ({
  source
}) => {
  const [measure, xtermElement] = useMeasure();
  const [theme, setTheme] = reactExports.useState(currentTheme());
  const [modulePromise] = reactExports.useState(__vitePreload(() => import("./assets/xtermModule-Es_gt_u7.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then((m) => m.default));
  const terminal = reactExports.useRef(null);
  reactExports.useEffect(() => {
    addThemeListener(setTheme);
    return () => removeThemeListener(setTheme);
  }, []);
  reactExports.useEffect(() => {
    const oldSourceWrite = source.write;
    const oldSourceClear = source.clear;
    (async () => {
      const { Terminal, FitAddon } = await modulePromise;
      const element = xtermElement.current;
      if (!element)
        return;
      const terminalTheme = theme === "dark-mode" ? darkTheme : lightTheme;
      if (terminal.current && terminal.current.terminal.options.theme === terminalTheme)
        return;
      if (terminal.current)
        element.textContent = "";
      const newTerminal = new Terminal({
        convertEol: true,
        fontSize: 13,
        scrollback: 1e4,
        fontFamily: "var(--vscode-editor-font-family)",
        theme: terminalTheme
      });
      const fitAddon = new FitAddon();
      newTerminal.loadAddon(fitAddon);
      for (const p of source.pending)
        newTerminal.write(p);
      source.write = (data) => {
        source.pending.push(data);
        newTerminal.write(data);
      };
      source.clear = () => {
        source.pending = [];
        newTerminal.clear();
      };
      newTerminal.open(element);
      fitAddon.fit();
      terminal.current = { terminal: newTerminal, fitAddon };
    })();
    return () => {
      source.clear = oldSourceClear;
      source.write = oldSourceWrite;
    };
  }, [modulePromise, terminal, xtermElement, source, theme]);
  reactExports.useEffect(() => {
    setTimeout(() => {
      if (!terminal.current)
        return;
      terminal.current.fitAddon.fit();
      source.resize(terminal.current.terminal.cols, terminal.current.terminal.rows);
    }, 250);
  }, [measure, source]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "output", className: "xterm-wrapper", style: { flex: "auto" }, ref: xtermElement });
};
const lightTheme = {
  foreground: "#383a42",
  background: "#fafafa",
  cursor: "#383a42",
  black: "#000000",
  red: "#e45649",
  green: "#50a14f",
  yellow: "#c18401",
  blue: "#4078f2",
  magenta: "#a626a4",
  cyan: "#0184bc",
  white: "#a0a0a0",
  brightBlack: "#000000",
  brightRed: "#e06c75",
  brightGreen: "#98c379",
  brightYellow: "#d19a66",
  brightBlue: "#4078f2",
  brightMagenta: "#a626a4",
  brightCyan: "#0184bc",
  brightWhite: "#383a42",
  selectionBackground: "#d7d7d7",
  selectionForeground: "#383a42"
};
const darkTheme = {
  foreground: "#f8f8f2",
  background: "#1e1e1e",
  cursor: "#f8f8f0",
  black: "#000000",
  red: "#ff5555",
  green: "#50fa7b",
  yellow: "#f1fa8c",
  blue: "#bd93f9",
  magenta: "#ff79c6",
  cyan: "#8be9fd",
  white: "#bfbfbf",
  brightBlack: "#4d4d4d",
  brightRed: "#ff6e6e",
  brightGreen: "#69ff94",
  brightYellow: "#ffffa5",
  brightBlue: "#d6acff",
  brightMagenta: "#ff92df",
  brightCyan: "#a4ffff",
  brightWhite: "#e6e6e6",
  selectionBackground: "#44475a",
  selectionForeground: "#f8f8f2"
};
const FiltersView = ({ filterText, setFilterText, statusFilters, setStatusFilters, projectFilters, setProjectFilters, testModel, runTests }) => {
  const [expanded, setExpanded] = React.useState(false);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const statusLine = [...statusFilters.entries()].filter(([_, v]) => v).map(([s]) => s).join(" ") || "all";
  const projectsLine = [...projectFilters.entries()].filter(([_, v]) => v).map(([p]) => p).join(" ") || "all";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Expandable,
      {
        expanded,
        setExpanded,
        title: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "search",
            placeholder: "Filter (e.g. text, @tag)",
            spellCheck: false,
            value: filterText,
            onChange: (e) => {
              setFilterText(e.target.value);
            },
            onKeyDown: (e) => {
              if (e.key === "Enter")
                runTests();
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-summary", title: "Status: " + statusLine + "\nProjects: " + projectsLine, onClick: () => setExpanded(!expanded), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Status:" }),
      " ",
      statusLine,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Projects:" }),
      " ",
      projectsLine
    ] }),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hbox", style: { marginLeft: 14, maxHeight: 200, overflowY: "auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-list", role: "list", "data-testid": "status-filters", children: [...statusFilters.entries()].map(([status, value]) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-entry", role: "listitem", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: value, onChange: () => {
            const copy = new Map(statusFilters);
            copy.set(status, !copy.get(status));
            setStatusFilters(copy);
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: status })
        ] }) }, status);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-list", role: "list", "data-testid": "project-filters", children: [...projectFilters.entries()].map(([projectName, value]) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-entry", role: "listitem", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: value, onChange: () => {
            var _a;
            const copy = new Map(projectFilters);
            copy.set(projectName, !copy.get(projectName));
            setProjectFilters(copy);
            const configFile = (_a = testModel == null ? void 0 : testModel.config) == null ? void 0 : _a.configFile;
            if (configFile)
              settings.setObject(configFile + ":projects", [...copy.entries()].filter(([_, v]) => v).map(([k]) => k));
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: projectName || "untitled" })
        ] }) }, projectName);
      }) })
    ] })
  ] });
};
const TagView = ({ tag, style, onClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: clsx("tag", `tag-color-${tagNameToColor(tag)}`),
      onClick,
      style: { margin: "6px 0 0 6px", ...style },
      title: `Click to filter by tag: ${tag}`,
      children: tag
    }
  );
};
function tagNameToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 8) - hash);
  return Math.abs(hash % 6);
}
const TestTreeView = TreeView;
const TestListView = ({ filterText, testModel, testServerConnection, testTree, runTests, runningState, watchAll, watchedTreeIds, setWatchedTreeIds, isLoading, onItemSelected, requestedCollapseAllCount, requestedExpandAllCount, setFilterText, onRevealSource }) => {
  const [treeState, setTreeState] = React.useState({ expandedItems: /* @__PURE__ */ new Map() });
  const [selectedTreeItemId, setSelectedTreeItemId] = React.useState();
  const [collapseAllCount, setCollapseAllCount] = React.useState(requestedCollapseAllCount);
  const [expandAllCount, setExpandAllCount] = React.useState(requestedExpandAllCount);
  React.useEffect(() => {
    if (collapseAllCount !== requestedCollapseAllCount) {
      treeState.expandedItems.clear();
      for (const item of testTree.flatTreeItems())
        treeState.expandedItems.set(item.id, false);
      setCollapseAllCount(requestedCollapseAllCount);
      setSelectedTreeItemId(void 0);
      setTreeState({ ...treeState });
      return;
    }
    if (expandAllCount !== requestedExpandAllCount) {
      treeState.expandedItems.clear();
      for (const item of testTree.flatTreeItems())
        treeState.expandedItems.set(item.id, true);
      setExpandAllCount(requestedExpandAllCount);
      setSelectedTreeItemId(void 0);
      setTreeState({ ...treeState });
      return;
    }
    if (!runningState || runningState.itemSelectedByUser)
      return;
    let selectedTreeItem2;
    const visit = (treeItem) => {
      var _a;
      treeItem.children.forEach(visit);
      if (selectedTreeItem2)
        return;
      if (treeItem.status === "failed") {
        if (treeItem.kind === "test" && runningState.testIds.has(treeItem.test.id))
          selectedTreeItem2 = treeItem;
        else if (treeItem.kind === "case" && runningState.testIds.has((_a = treeItem.tests[0]) == null ? void 0 : _a.id))
          selectedTreeItem2 = treeItem;
      }
    };
    visit(testTree.rootItem);
    if (selectedTreeItem2)
      setSelectedTreeItemId(selectedTreeItem2.id);
  }, [runningState, setSelectedTreeItemId, testTree, collapseAllCount, setCollapseAllCount, requestedCollapseAllCount, expandAllCount, setExpandAllCount, requestedExpandAllCount, treeState, setTreeState]);
  const selectedTreeItem = React.useMemo(() => {
    if (!selectedTreeItemId)
      return void 0;
    return testTree.treeItemById(selectedTreeItemId);
  }, [selectedTreeItemId, testTree]);
  React.useEffect(() => {
    if (!testModel)
      return;
    const testFile = itemLocation(selectedTreeItem, testModel);
    let selectedTest;
    if ((selectedTreeItem == null ? void 0 : selectedTreeItem.kind) === "test")
      selectedTest = selectedTreeItem.test;
    else if ((selectedTreeItem == null ? void 0 : selectedTreeItem.kind) === "case" && selectedTreeItem.tests.length === 1)
      selectedTest = selectedTreeItem.tests[0];
    onItemSelected({ treeItem: selectedTreeItem, testCase: selectedTest, testFile });
  }, [testModel, selectedTreeItem, onItemSelected]);
  React.useEffect(() => {
    if (isLoading)
      return;
    if (watchAll) {
      testServerConnection == null ? void 0 : testServerConnection.watchNoReply({ fileNames: testTree.fileNames() });
    } else {
      const fileNames = /* @__PURE__ */ new Set();
      for (const itemId of watchedTreeIds.value) {
        const treeItem = testTree.treeItemById(itemId);
        const fileName = treeItem == null ? void 0 : treeItem.location.file;
        if (fileName)
          fileNames.add(fileName);
      }
      testServerConnection == null ? void 0 : testServerConnection.watchNoReply({ fileNames: [...fileNames] });
    }
  }, [isLoading, testTree, watchAll, watchedTreeIds, testServerConnection]);
  const runTreeItem = (treeItem) => {
    setSelectedTreeItemId(treeItem.id);
    runTests("bounce-if-busy", testTree.collectTestIds(treeItem));
  };
  const handleTagClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.metaKey || e.ctrlKey) {
      const parts = filterText.split(" ");
      if (parts.includes(tag))
        setFilterText(parts.filter((t) => t !== tag).join(" ").trim());
      else
        setFilterText((filterText + " " + tag).trim());
    } else {
      setFilterText((filterText.split(" ").filter((t) => !t.startsWith("@")).join(" ") + " " + tag).trim());
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TestTreeView,
    {
      name: "tests",
      treeState,
      setTreeState,
      rootItem: testTree.rootItem,
      dataTestId: "test-tree",
      render: (treeItem) => {
        const prefixId = treeItem.id.replace(/[^\w\d-_]/g, "-");
        const labelId = prefixId + "-label";
        const timeId = prefixId + "-time";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hbox ui-mode-tree-item", "aria-labelledby": `${labelId} ${timeId}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: labelId, className: "ui-mode-tree-item-title", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: treeItem.title }),
            treeItem.kind === "case" ? treeItem.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(TagView, { tag: tag.slice(1), onClick: (e) => handleTagClick(e, tag) }, tag)) : null
          ] }),
          !!treeItem.duration && treeItem.status !== "skipped" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: timeId, className: "ui-mode-tree-item-time", children: msToString(treeItem.duration) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noMinHeight: true, noShadow: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "play", title: "Run", onClick: () => runTreeItem(treeItem), disabled: !!runningState && !runningState.completed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "go-to-file", title: "Show source", onClick: onRevealSource, style: treeItem.kind === "group" && treeItem.subKind === "folder" ? { visibility: "hidden" } : {} }),
            !watchAll && /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "eye", title: "Watch", onClick: () => {
              if (watchedTreeIds.value.has(treeItem.id))
                watchedTreeIds.value.delete(treeItem.id);
              else
                watchedTreeIds.value.add(treeItem.id);
              setWatchedTreeIds({ ...watchedTreeIds });
            }, toggled: watchedTreeIds.value.has(treeItem.id) })
          ] })
        ] });
      },
      icon: (treeItem) => testStatusIcon(treeItem.status),
      title: (treeItem) => treeItem.title,
      selectedItem: selectedTreeItem,
      onAccepted: runTreeItem,
      onSelected: (treeItem) => {
        if (runningState)
          runningState.itemSelectedByUser = true;
        setSelectedTreeItemId(treeItem.id);
      },
      isError: (treeItem) => treeItem.kind === "group" ? treeItem.hasLoadErrors : false,
      autoExpandDepth: filterText ? 5 : 1,
      noItemsMessage: isLoading ? "Loading…" : "No tests"
    }
  );
};
function itemLocation(item, model) {
  if (!item || !model)
    return;
  return {
    file: item.location.file,
    line: item.location.line,
    column: item.location.column,
    source: {
      errors: model.loadErrors.filter((e) => {
        var _a;
        return ((_a = e.location) == null ? void 0 : _a.file) === item.location.file;
      }).map((e) => ({ line: e.location.line, message: e.message })),
      content: void 0
    }
  };
}
function artifactsFolderName(workerIndex) {
  return `.playwright-artifacts-${workerIndex}`;
}
const TraceView = ({ item, rootDir, onOpenExternally, revealSource, pathSeparator }) => {
  var _a, _b;
  const [model, setModel] = React.useState(void 0);
  const [counter, setCounter] = React.useState(0);
  const pollTimer = React.useRef(null);
  const { outputDir } = React.useMemo(() => {
    const outputDir2 = item.testCase ? outputDirForTestCase(item.testCase) : void 0;
    return { outputDir: outputDir2 };
  }, [item]);
  React.useEffect(() => {
    var _a2, _b2;
    if (pollTimer.current)
      clearTimeout(pollTimer.current);
    const result = (_a2 = item.testCase) == null ? void 0 : _a2.results[0];
    if (!result) {
      setModel(void 0);
      return;
    }
    const attachment = result && result.duration >= 0 && result.attachments.find((a) => a.name === "trace");
    if (attachment && attachment.path) {
      loadSingleTraceFile(attachment.path).then((model2) => setModel({ model: model2, isLive: false }));
      return;
    }
    if (!outputDir) {
      setModel(void 0);
      return;
    }
    const traceLocation = [
      outputDir,
      artifactsFolderName(result.workerIndex),
      "traces",
      `${(_b2 = item.testCase) == null ? void 0 : _b2.id}.json`
    ].join(pathSeparator);
    pollTimer.current = setTimeout(async () => {
      try {
        const model2 = await loadSingleTraceFile(traceLocation);
        setModel({ model: model2, isLive: true });
      } catch {
        const model2 = new MultiTraceModel([]);
        model2.errorDescriptors.push(...result.errors.flatMap((error) => !!error.message ? [{ message: error.message }] : []));
        setModel({ model: model2, isLive: false });
      } finally {
        setCounter(counter + 1);
      }
    }, 500);
    return () => {
      if (pollTimer.current)
        clearTimeout(pollTimer.current);
    };
  }, [outputDir, item, setModel, counter, setCounter, pathSeparator]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Workbench,
    {
      model: model == null ? void 0 : model.model,
      showSourcesFirst: true,
      rootDir,
      fallbackLocation: item.testFile,
      isLive: model == null ? void 0 : model.isLive,
      status: (_a = item.treeItem) == null ? void 0 : _a.status,
      annotations: ((_b = item.testCase) == null ? void 0 : _b.annotations) ?? [],
      onOpenExternally,
      revealSource
    },
    "workbench"
  );
};
const outputDirForTestCase = (testCase) => {
  var _a;
  for (let suite = testCase.parent; suite; suite = suite.parent) {
    if (suite.project())
      return (_a = suite.project()) == null ? void 0 : _a.outputDir;
  }
  return void 0;
};
async function loadSingleTraceFile(url) {
  const params = new URLSearchParams();
  params.set("trace", url);
  params.set("limit", "1");
  const response = await fetch(`contexts?${params.toString()}`);
  const contextEntries = await response.json();
  return new MultiTraceModel(contextEntries);
}
let xtermSize = { cols: 80 };
const xtermDataSource = {
  pending: [],
  clear: () => {
  },
  write: (data) => xtermDataSource.pending.push(data),
  resize: () => {
  }
};
const searchParams = new URLSearchParams(window.location.search);
const testServerBaseUrl = new URL(searchParams.get("server") ?? "../", window.location.href);
const wsURL = new URL(searchParams.get("ws"), testServerBaseUrl);
wsURL.protocol = wsURL.protocol === "https:" ? "wss:" : "ws:";
const queryParams = {
  args: searchParams.getAll("arg"),
  grep: searchParams.get("grep") || void 0,
  grepInvert: searchParams.get("grepInvert") || void 0,
  projects: searchParams.getAll("project"),
  workers: searchParams.get("workers") || void 0,
  headed: searchParams.has("headed"),
  updateSnapshots: searchParams.get("updateSnapshots") || void 0,
  reporters: searchParams.has("reporter") ? searchParams.getAll("reporter") : void 0,
  pathSeparator: searchParams.get("pathSeparator") || "/"
};
if (queryParams.updateSnapshots && !["all", "changed", "none", "missing"].includes(queryParams.updateSnapshots))
  queryParams.updateSnapshots = void 0;
const isMac = navigator.platform === "MacIntel";
const UIModeView = ({}) => {
  var _a;
  const [filterText, setFilterText] = React.useState("");
  const [isShowingOutput, setIsShowingOutput] = React.useState(false);
  const [outputContainsError, setOutputContainsError] = React.useState(false);
  const [statusFilters, setStatusFilters] = React.useState(/* @__PURE__ */ new Map([
    ["passed", false],
    ["failed", false],
    ["skipped", false]
  ]));
  const [projectFilters, setProjectFilters] = React.useState(/* @__PURE__ */ new Map());
  const [testModel, setTestModel] = React.useState();
  const [progress, setProgress] = React.useState();
  const [selectedItem, setSelectedItem] = React.useState({});
  const [visibleTestIds, setVisibleTestIds] = React.useState(/* @__PURE__ */ new Set());
  const [isLoading, setIsLoading] = React.useState(false);
  const [runningState, setRunningState] = React.useState();
  const isRunningTest = runningState && !runningState.completed;
  const [watchAll, setWatchAll] = useSetting("watch-all", false);
  const [watchedTreeIds, setWatchedTreeIds] = React.useState({ value: /* @__PURE__ */ new Set() });
  const commandQueue = React.useRef(Promise.resolve());
  const runTestBacklog = React.useRef(/* @__PURE__ */ new Set());
  const [collapseAllCount, setCollapseAllCount] = React.useState(0);
  const [expandAllCount, setExpandAllCount] = React.useState(0);
  const [isDisconnected, setIsDisconnected] = React.useState(false);
  const [hasBrowsers, setHasBrowsers] = React.useState(true);
  const [testServerConnection, setTestServerConnection] = React.useState();
  const [teleSuiteUpdater, setTeleSuiteUpdater] = React.useState();
  const [settingsVisible, setSettingsVisible] = React.useState(false);
  const [testingOptionsVisible, setTestingOptionsVisible] = React.useState(false);
  const [revealSource, setRevealSource] = React.useState(false);
  const onRevealSource = React.useCallback(() => setRevealSource(true), [setRevealSource]);
  const [updateSnapshots, setUpdateSnapshots] = useSetting("updateSnapshots", "missing");
  const inputRef = React.useRef(null);
  const reloadTests = React.useCallback(() => {
    setTestServerConnection((prevConnection) => {
      prevConnection == null ? void 0 : prevConnection.close();
      return new TestServerConnection(new WebSocketTestServerTransport(wsURL));
    });
  }, []);
  React.useEffect(() => {
    var _a2;
    (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    setIsLoading(true);
    reloadTests();
  }, [reloadTests]);
  React.useEffect(() => {
    if (!testServerConnection)
      return;
    const disposables = [
      testServerConnection.onStdio((params) => {
        if (params.buffer) {
          const data = atob(params.buffer);
          xtermDataSource.write(data);
        } else {
          xtermDataSource.write(params.text);
        }
        if (params.type === "stderr")
          setOutputContainsError(true);
      }),
      testServerConnection.onClose(() => setIsDisconnected(true))
    ];
    xtermDataSource.resize = (cols, rows) => {
      xtermSize = { cols, rows };
      testServerConnection.resizeTerminalNoReply({ cols, rows });
    };
    return () => {
      for (const disposable of disposables)
        disposable.dispose();
    };
  }, [testServerConnection]);
  React.useEffect(() => {
    if (!testServerConnection)
      return;
    let throttleTimer;
    const teleSuiteUpdater2 = new TeleSuiteUpdater({
      onUpdate: (immediate) => {
        clearTimeout(throttleTimer);
        throttleTimer = void 0;
        if (immediate) {
          setTestModel(teleSuiteUpdater2.asModel());
        } else if (!throttleTimer) {
          throttleTimer = setTimeout(() => {
            setTestModel(teleSuiteUpdater2.asModel());
          }, 250);
        }
      },
      onError: (error) => {
        xtermDataSource.write((error.stack || error.value || "") + "\n");
        setOutputContainsError(true);
      },
      pathSeparator: queryParams.pathSeparator
    });
    setTeleSuiteUpdater(teleSuiteUpdater2);
    setTestModel(void 0);
    setIsLoading(true);
    setWatchedTreeIds({ value: /* @__PURE__ */ new Set() });
    (async () => {
      try {
        await testServerConnection.initialize({
          interceptStdio: true,
          watchTestDirs: true
        });
        const { status, report } = await testServerConnection.runGlobalSetup({});
        teleSuiteUpdater2.processGlobalReport(report);
        if (status !== "passed")
          return;
        const result = await testServerConnection.listTests({ projects: queryParams.projects, locations: queryParams.args, grep: queryParams.grep, grepInvert: queryParams.grepInvert });
        teleSuiteUpdater2.processListReport(result.report);
        testServerConnection.onReport((params) => {
          teleSuiteUpdater2.processTestReportEvent(params);
        });
        const { hasBrowsers: hasBrowsers2 } = await testServerConnection.checkBrowsers({});
        setHasBrowsers(hasBrowsers2);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => {
      clearTimeout(throttleTimer);
    };
  }, [testServerConnection]);
  React.useEffect(() => {
    if (!testModel)
      return;
    const { config, rootSuite } = testModel;
    const selectedProjects = config.configFile ? settings.getObject(config.configFile + ":projects", void 0) : void 0;
    const newFilter = new Map(projectFilters);
    for (const projectName of newFilter.keys()) {
      if (!rootSuite.suites.find((s) => s.title === projectName))
        newFilter.delete(projectName);
    }
    for (const projectSuite of rootSuite.suites) {
      if (!newFilter.has(projectSuite.title))
        newFilter.set(projectSuite.title, !!(selectedProjects == null ? void 0 : selectedProjects.includes(projectSuite.title)));
    }
    if (!selectedProjects && newFilter.size && ![...newFilter.values()].includes(true))
      newFilter.set(newFilter.entries().next().value[0], true);
    if (projectFilters.size !== newFilter.size || [...projectFilters].some(([k, v]) => newFilter.get(k) !== v))
      setProjectFilters(newFilter);
  }, [projectFilters, testModel]);
  React.useEffect(() => {
    if (isRunningTest && (testModel == null ? void 0 : testModel.progress))
      setProgress(testModel.progress);
    else if (!testModel)
      setProgress(void 0);
  }, [testModel, isRunningTest]);
  const { testTree } = React.useMemo(() => {
    if (!testModel)
      return { testTree: new TestTree("", new TeleSuite("", "root"), [], projectFilters, queryParams.pathSeparator) };
    const testTree2 = new TestTree("", testModel.rootSuite, testModel.loadErrors, projectFilters, queryParams.pathSeparator);
    testTree2.filterTree(filterText, statusFilters, isRunningTest ? runningState == null ? void 0 : runningState.testIds : void 0);
    testTree2.sortAndPropagateStatus();
    testTree2.shortenRoot();
    testTree2.flattenForSingleProject();
    setVisibleTestIds(testTree2.testIds());
    return { testTree: testTree2 };
  }, [filterText, testModel, statusFilters, projectFilters, setVisibleTestIds, runningState, isRunningTest]);
  const runTests = React.useCallback((mode, testIds) => {
    if (!testServerConnection || !testModel)
      return;
    if (mode === "bounce-if-busy" && isRunningTest)
      return;
    runTestBacklog.current = /* @__PURE__ */ new Set([...runTestBacklog.current, ...testIds]);
    commandQueue.current = commandQueue.current.then(async () => {
      var _a2, _b, _c;
      const testIds2 = runTestBacklog.current;
      runTestBacklog.current = /* @__PURE__ */ new Set();
      if (!testIds2.size)
        return;
      {
        for (const test of ((_a2 = testModel.rootSuite) == null ? void 0 : _a2.allTests()) || []) {
          if (testIds2.has(test.id)) {
            test.results = [];
            const result = test._createTestResult("pending");
            result[statusEx] = "scheduled";
          }
        }
        setTestModel({ ...testModel });
      }
      const time = "  [" + (/* @__PURE__ */ new Date()).toLocaleTimeString() + "]";
      xtermDataSource.write("\x1B[2m—".repeat(Math.max(0, xtermSize.cols - time.length)) + time + "\x1B[22m");
      setProgress({ total: 0, passed: 0, failed: 0, skipped: 0 });
      setRunningState({ testIds: testIds2 });
      await testServerConnection.runTests({
        locations: queryParams.args,
        grep: queryParams.grep,
        grepInvert: queryParams.grepInvert,
        testIds: [...testIds2],
        projects: [...projectFilters].filter(([_, v]) => v).map(([p]) => p),
        updateSnapshots,
        reporters: queryParams.reporters,
        trace: "on"
      });
      for (const test of ((_b = testModel.rootSuite) == null ? void 0 : _b.allTests()) || []) {
        if (((_c = test.results[0]) == null ? void 0 : _c.duration) === -1)
          test.results = [];
      }
      setTestModel({ ...testModel });
      setRunningState((oldState) => oldState ? { ...oldState, completed: true } : void 0);
    });
  }, [projectFilters, isRunningTest, testModel, testServerConnection, updateSnapshots]);
  React.useEffect(() => {
    if (!testServerConnection || !teleSuiteUpdater)
      return;
    const disposable = testServerConnection.onTestFilesChanged(async (params) => {
      commandQueue.current = commandQueue.current.then(async () => {
        setIsLoading(true);
        try {
          const result = await testServerConnection.listTests({ projects: queryParams.projects, locations: queryParams.args, grep: queryParams.grep, grepInvert: queryParams.grepInvert });
          teleSuiteUpdater.processListReport(result.report);
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      });
      await commandQueue.current;
      if (params.testFiles.length === 0)
        return;
      const testModel2 = teleSuiteUpdater.asModel();
      const testTree2 = new TestTree("", testModel2.rootSuite, testModel2.loadErrors, projectFilters, queryParams.pathSeparator);
      const testIds = [];
      const set = new Set(params.testFiles);
      if (watchAll) {
        const visit = (treeItem) => {
          const fileName = treeItem.location.file;
          if (fileName && set.has(fileName))
            testIds.push(...testTree2.collectTestIds(treeItem));
          if (treeItem.kind === "group" && treeItem.subKind === "folder")
            treeItem.children.forEach(visit);
        };
        visit(testTree2.rootItem);
      } else {
        for (const treeId of watchedTreeIds.value) {
          const treeItem = testTree2.treeItemById(treeId);
          const fileName = treeItem == null ? void 0 : treeItem.location.file;
          if (fileName && set.has(fileName))
            testIds.push(...testTree2.collectTestIds(treeItem));
        }
      }
      runTests("queue-if-busy", new Set(testIds));
    });
    return () => disposable.dispose();
  }, [runTests, testServerConnection, watchAll, watchedTreeIds, teleSuiteUpdater, projectFilters]);
  React.useEffect(() => {
    if (!testServerConnection)
      return;
    const onShortcutEvent = (e) => {
      if (e.code === "Backquote" && e.ctrlKey) {
        e.preventDefault();
        setIsShowingOutput(!isShowingOutput);
      } else if (e.code === "F5" && e.shiftKey) {
        e.preventDefault();
        testServerConnection == null ? void 0 : testServerConnection.stopTestsNoReply({});
      } else if (e.code === "F5") {
        e.preventDefault();
        runTests("bounce-if-busy", visibleTestIds);
      }
    };
    addEventListener("keydown", onShortcutEvent);
    return () => {
      removeEventListener("keydown", onShortcutEvent);
    };
  }, [runTests, reloadTests, testServerConnection, visibleTestIds, isShowingOutput]);
  const dialogRef = React.useRef(null);
  const openInstallDialog = React.useCallback((e) => {
    var _a2;
    e.preventDefault();
    e.stopPropagation();
    (_a2 = dialogRef.current) == null ? void 0 : _a2.showModal();
  }, []);
  const closeInstallDialog = React.useCallback((e) => {
    var _a2;
    e.preventDefault();
    e.stopPropagation();
    (_a2 = dialogRef.current) == null ? void 0 : _a2.close();
  }, []);
  const installBrowsers = React.useCallback((e) => {
    closeInstallDialog(e);
    setIsShowingOutput(true);
    testServerConnection == null ? void 0 : testServerConnection.installBrowsers({}).then(async () => {
      setIsShowingOutput(false);
      const { hasBrowsers: hasBrowsers2 } = await (testServerConnection == null ? void 0 : testServerConnection.checkBrowsers({}));
      setHasBrowsers(hasBrowsers2);
    });
  }, [closeInstallDialog, testServerConnection]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox ui-mode", children: [
    !hasBrowsers && /* @__PURE__ */ jsxRuntimeExports.jsxs("dialog", { ref: dialogRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-lightbulb" }),
        "Install browsers"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "body", children: [
        "Playwright did not find installed browsers.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Would you like to run `playwright install`?",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button", onClick: installBrowsers, children: "Install" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button secondary", onClick: closeInstallDialog, children: "Dismiss" })
      ] })
    ] }),
    isDisconnected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "disconnected", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "UI Mode disconnected" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", onClick: () => window.location.href = "/", children: "Reload the page" }),
        " to reconnect"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SplitView,
      {
        sidebarSize: 250,
        minSidebarSize: 150,
        orientation: "horizontal",
        sidebarIsFirst: true,
        settingName: "testListSidebar",
        main: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("vbox", !isShowingOutput && "hidden"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", style: { flex: "none" }, children: "Output" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "circle-slash", title: "Clear output", onClick: () => {
                xtermDataSource.clear();
                setOutputContainsError(false);
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spacer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "close", title: "Close", onClick: () => setIsShowingOutput(false) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XtermWrapper, { source: xtermDataSource })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("vbox", isShowingOutput && "hidden"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TraceView,
            {
              pathSeparator: queryParams.pathSeparator,
              item: selectedItem,
              rootDir: (_a = testModel == null ? void 0 : testModel.config) == null ? void 0 : _a.rootDir,
              revealSource,
              onOpenExternally: (location) => testServerConnection == null ? void 0 : testServerConnection.openNoReply({ location: { file: location.file, line: location.line, column: location.column } })
            }
          ) })
        ] }),
        sidebar: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox ui-mode-sidebar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noShadow: true, noMinHeight: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "playwright-logo.svg", alt: "Playwright logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "Playwright" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "refresh", title: "Reload", onClick: () => reloadTests(), disabled: isRunningTest || isLoading }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "terminal", title: "Toggle output — " + (isMac ? "⌃`" : "Ctrl + `"), toggled: isShowingOutput, onClick: () => {
                setIsShowingOutput(!isShowingOutput);
              } }),
              outputContainsError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { title: "Output contains error", style: { position: "absolute", top: 2, right: 2, width: 7, height: 7, borderRadius: "50%", backgroundColor: "var(--vscode-notificationsErrorIcon-foreground)" } })
            ] }),
            !hasBrowsers && /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "lightbulb-autofix", style: { color: "var(--vscode-list-warningForeground)" }, title: "Playwright browsers are missing", onClick: openInstallDialog })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FiltersView,
            {
              filterText,
              setFilterText,
              statusFilters,
              setStatusFilters,
              projectFilters,
              setProjectFilters,
              testModel,
              runTests: () => runTests("bounce-if-busy", visibleTestIds)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { className: "section-toolbar", noMinHeight: true, children: [
            !isRunningTest && !progress && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "Tests" }),
            !isRunningTest && progress && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "status-line", className: "status-line", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              progress.passed,
              "/",
              progress.total,
              " passed (",
              progress.passed / progress.total * 100 | 0,
              "%)"
            ] }) }),
            isRunningTest && progress && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "status-line", className: "status-line", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Running ",
              progress.passed,
              "/",
              runningState.testIds.size,
              " passed (",
              progress.passed / runningState.testIds.size * 100 | 0,
              "%)"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "play", title: "Run all — F5", onClick: () => runTests("bounce-if-busy", visibleTestIds), disabled: isRunningTest || isLoading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "debug-stop", title: "Stop — " + (isMac ? "⇧F5" : "Shift + F5"), onClick: () => testServerConnection == null ? void 0 : testServerConnection.stopTests({}), disabled: !isRunningTest || isLoading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "eye", title: "Watch all", toggled: watchAll, onClick: () => {
              setWatchedTreeIds({ value: /* @__PURE__ */ new Set() });
              setWatchAll(!watchAll);
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "collapse-all", title: "Collapse all", onClick: () => {
              setCollapseAllCount(collapseAllCount + 1);
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "expand-all", title: "Expand all", onClick: () => {
              setExpandAllCount(expandAllCount + 1);
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TestListView,
            {
              filterText,
              testModel,
              testTree,
              testServerConnection,
              runningState,
              runTests,
              onItemSelected: setSelectedItem,
              watchAll,
              watchedTreeIds,
              setWatchedTreeIds,
              isLoading,
              requestedCollapseAllCount: collapseAllCount,
              requestedExpandAllCount: expandAllCount,
              setFilterText,
              onRevealSource
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noShadow: true, noMinHeight: true, className: "settings-toolbar", onClick: () => setTestingOptionsVisible(!testingOptionsVisible), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `codicon codicon-${testingOptionsVisible ? "chevron-down" : "chevron-right"}`,
                style: { marginLeft: 5 },
                title: testingOptionsVisible ? "Hide Testing Options" : "Show Testing Options"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "Testing Options" })
          ] }),
          testingOptionsVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsView, { settings: [
            { type: "select", options: [
              { label: "All", value: "all" },
              { label: "Changed", value: "changed" },
              { label: "Missing", value: "missing" },
              { label: "None", value: "none" }
            ], value: updateSnapshots, set: setUpdateSnapshots, name: "Update snapshots" }
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noShadow: true, noMinHeight: true, className: "settings-toolbar", onClick: () => setSettingsVisible(!settingsVisible), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `codicon codicon-${settingsVisible ? "chevron-down" : "chevron-right"}`,
                style: { marginLeft: 5 },
                title: settingsVisible ? "Hide Settings" : "Show Settings"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "Settings" })
          ] }),
          settingsVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(DefaultSettingsView, {})
        ] })
      }
    )
  ] });
};
(async () => {
  applyTheme();
  if (window.location.protocol !== "file:") {
    if (window.location.href.includes("isUnderTest=true"))
      await new Promise((f) => setTimeout(f, 1e3));
    if (!navigator.serviceWorker)
      throw new Error(`Service workers are not supported.
Make sure to serve the website (${window.location}) via HTTPS or localhost.`);
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
  clientExports.createRoot(document.querySelector("#root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(UIModeView, {}));
})();


//# sourceMappingURL=data:application/json;base64,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QXVFLE9BQU8sUUFBUSwyQkFBMkI7QUFDekgsNEJBQWMsU0FBUyxjQUFjO0FBQzNDLFNBQUMsVUFBVSxjQUFjLFlBQVk7QUFDakMsZ0JBQUksUUFBYyxDQUFLO0FBQ2pCLGdDQUFjLHFCQUFxQixNQUFNLEVBQUU7QUFBQSxPQUN0RDtBQUFBO0FBSUgsZ0JBQVksV0FBVztBQUFFLFlBQU0sTUFBTTtBQUFBLE9BQU0sR0FBSztBQUFBO0FBR3pDWSwyQkFBVyxTQUFTLGNBQWMsT0FBTyxDQUFFLEVBQUUsT0FBUVosa0NBQUEsa0JBQVUsQ0FBRTtBQUM1RSxHQUFHIiwibmFtZXMiOlsidHJlZUl0ZW0iLCJSZWFjdC51c2VTdGF0ZSIsIlJlYWN0LnVzZVJlZiIsIlJlYWN0LnVzZUVmZmVjdCIsImpzeCIsImpzeHMiLCJzZWxlY3RlZFRyZWVJdGVtIiwib3V0cHV0RGlyIiwiX2EiLCJtb2RlbCIsIl9iIiwidGVsZVN1aXRlVXBkYXRlciIsImhhc0Jyb3dzZXJzIiwidGVzdFRyZWUiLCJ0ZXN0SWRzIiwidGVzdE1vZGVsIiwiUmVhY3RET00uY3JlYXRlUm9vdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wbGF5d3JpZ2h0L3NyYy9pc29tb3JwaGljL3RlbGVSZWNlaXZlci50cyIsIi4uLy4uLy4uLy4uL3BsYXl3cmlnaHQvc3JjL2lzb21vcnBoaWMvdGVzdFRyZWUudHMiLCIuLi8uLi8uLi8uLi9wbGF5d3JpZ2h0L3NyYy9pc29tb3JwaGljL3RlbGVTdWl0ZVVwZGF0ZXIudHMiLCIuLi8uLi8uLi8uLi93ZWIvc3JjL2NvbXBvbmVudHMveHRlcm1XcmFwcGVyLnRzeCIsIi4uLy4uLy4uLy4uL3RyYWNlLXZpZXdlci9zcmMvdWkvdWlNb2RlRmlsdGVyc1ZpZXcudHN4IiwiLi4vLi4vLi4vLi4vdHJhY2Utdmlld2VyL3NyYy91aS90YWcudHN4IiwiLi4vLi4vLi4vLi4vdHJhY2Utdmlld2VyL3NyYy91aS91aU1vZGVUZXN0TGlzdFZpZXcudHN4IiwiLi4vLi4vLi4vLi4vcGxheXdyaWdodC9zcmMvaXNvbW9ycGhpYy9mb2xkZXJzLnRzIiwiLi4vLi4vLi4vLi4vdHJhY2Utdmlld2VyL3NyYy91aS91aU1vZGVUcmFjZVZpZXcudHN4IiwiLi4vLi4vLi4vLi4vdHJhY2Utdmlld2VyL3NyYy91aS91aU1vZGVWaWV3LnRzeCIsIi4uLy4uLy4uLy4uL3RyYWNlLXZpZXdlci9zcmMvdWlNb2RlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB0eXBlIHsgTWV0YWRhdGEsIFRlc3RBbm5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMvdGVzdCc7XG5pbXBvcnQgdHlwZSAqIGFzIHJlcG9ydGVyVHlwZXMgZnJvbSAnLi4vLi4vdHlwZXMvdGVzdFJlcG9ydGVyJztcbmltcG9ydCB0eXBlIHsgUmVwb3J0ZXJWMiB9IGZyb20gJy4uL3JlcG9ydGVycy9yZXBvcnRlclYyJztcblxuZXhwb3J0IHR5cGUgU3RyaW5nSW50ZXJuID0gKHM6IHN0cmluZykgPT4gc3RyaW5nO1xuZXhwb3J0IHR5cGUgSnNvbkxvY2F0aW9uID0gcmVwb3J0ZXJUeXBlcy5Mb2NhdGlvbjtcbmV4cG9ydCB0eXBlIEpzb25FcnJvciA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEpzb25TdGFja0ZyYW1lID0geyBmaWxlOiBzdHJpbmcsIGxpbmU6IG51bWJlciwgY29sdW1uOiBudW1iZXIgfTtcblxuZXhwb3J0IHR5cGUgSnNvblN0ZElPVHlwZSA9ICdzdGRvdXQnIHwgJ3N0ZGVycic7XG5cbmV4cG9ydCB0eXBlIEpzb25Db25maWcgPSBQaWNrPHJlcG9ydGVyVHlwZXMuRnVsbENvbmZpZywgJ2NvbmZpZ0ZpbGUnIHwgJ2dsb2JhbFRpbWVvdXQnIHwgJ21heEZhaWx1cmVzJyB8ICdtZXRhZGF0YScgfCAncm9vdERpcicgfCAndmVyc2lvbicgfCAnd29ya2VycycgfCAnZ2xvYmFsU2V0dXAnIHwgJ2dsb2JhbFRlYXJkb3duJz47XG5cbmV4cG9ydCB0eXBlIEpzb25QYXR0ZXJuID0ge1xuICBzPzogc3RyaW5nO1xuICByPzogeyBzb3VyY2U6IHN0cmluZywgZmxhZ3M6IHN0cmluZyB9O1xufTtcblxuZXhwb3J0IHR5cGUgSnNvblByb2plY3QgPSB7XG4gIGdyZXA6IEpzb25QYXR0ZXJuW107XG4gIGdyZXBJbnZlcnQ6IEpzb25QYXR0ZXJuW107XG4gIG1ldGFkYXRhOiBNZXRhZGF0YTtcbiAgbmFtZTogc3RyaW5nO1xuICBkZXBlbmRlbmNpZXM6IHN0cmluZ1tdO1xuICAvLyBUaGlzIGlzIHJlbGF0aXZlIHRvIHJvb3QgZGlyLlxuICBzbmFwc2hvdERpcjogc3RyaW5nO1xuICAvLyBUaGlzIGlzIHJlbGF0aXZlIHRvIHJvb3QgZGlyLlxuICBvdXRwdXREaXI6IHN0cmluZztcbiAgcmVwZWF0RWFjaDogbnVtYmVyO1xuICByZXRyaWVzOiBudW1iZXI7XG4gIHN1aXRlczogSnNvblN1aXRlW107XG4gIHRlYXJkb3duPzogc3RyaW5nO1xuICAvLyBUaGlzIGlzIHJlbGF0aXZlIHRvIHJvb3QgZGlyLlxuICB0ZXN0RGlyOiBzdHJpbmc7XG4gIHRlc3RJZ25vcmU6IEpzb25QYXR0ZXJuW107XG4gIHRlc3RNYXRjaDogSnNvblBhdHRlcm5bXTtcbiAgdGltZW91dDogbnVtYmVyO1xuICB1c2U6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG59O1xuXG5leHBvcnQgdHlwZSBKc29uU3VpdGUgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxvY2F0aW9uPzogSnNvbkxvY2F0aW9uO1xuICBlbnRyaWVzOiAoSnNvblN1aXRlIHwgSnNvblRlc3RDYXNlKVtdO1xufTtcblxuZXhwb3J0IHR5cGUgSnNvblRlc3RDYXNlID0ge1xuICB0ZXN0SWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgbG9jYXRpb246IEpzb25Mb2NhdGlvbjtcbiAgcmV0cmllczogbnVtYmVyO1xuICB0YWdzPzogc3RyaW5nW107XG4gIHJlcGVhdEVhY2hJbmRleDogbnVtYmVyO1xuICBhbm5vdGF0aW9ucz86IFRlc3RBbm5vdGF0aW9uW107XG59O1xuXG5leHBvcnQgdHlwZSBKc29uVGVzdEVuZCA9IHtcbiAgdGVzdElkOiBzdHJpbmc7XG4gIGV4cGVjdGVkU3RhdHVzOiByZXBvcnRlclR5cGVzLlRlc3RTdGF0dXM7XG4gIHRpbWVvdXQ6IG51bWJlcjtcbiAgLy8gRHJvcHBlZCBpbiAxLjUyLiBLZXB0IGFzIGVtcHR5IGFycmF5IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgYW5ub3RhdGlvbnM6IFtdO1xufTtcblxuZXhwb3J0IHR5cGUgSnNvblRlc3RSZXN1bHRTdGFydCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgcmV0cnk6IG51bWJlcjtcbiAgd29ya2VySW5kZXg6IG51bWJlcjtcbiAgcGFyYWxsZWxJbmRleDogbnVtYmVyO1xuICBzdGFydFRpbWU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25BdHRhY2htZW50ID0gT21pdDxyZXBvcnRlclR5cGVzLlRlc3RSZXN1bHRbJ2F0dGFjaG1lbnRzJ11bMF0sICdib2R5Jz4gJiB7IGJhc2U2ND86IHN0cmluZzsgfTtcblxuZXhwb3J0IHR5cGUgSnNvblRlc3RSZXN1bHRFbmQgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHN0YXR1czogcmVwb3J0ZXJUeXBlcy5UZXN0U3RhdHVzO1xuICBlcnJvcnM6IHJlcG9ydGVyVHlwZXMuVGVzdEVycm9yW107XG4gIC8qKiBObyBsb25nZXIgZW1pdHRlZCwgYnV0IGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5ICovXG4gIGF0dGFjaG1lbnRzPzogSnNvbkF0dGFjaG1lbnRbXTtcbiAgYW5ub3RhdGlvbnM/OiBUZXN0QW5ub3RhdGlvbltdO1xufTtcblxuZXhwb3J0IHR5cGUgSnNvblRlc3RTdGVwU3RhcnQgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHBhcmVudFN0ZXBJZD86IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZyxcbiAgc3RhcnRUaW1lOiBudW1iZXI7XG4gIGxvY2F0aW9uPzogcmVwb3J0ZXJUeXBlcy5Mb2NhdGlvbjtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25UZXN0U3RlcEVuZCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgZXJyb3I/OiByZXBvcnRlclR5cGVzLlRlc3RFcnJvcjtcbiAgYXR0YWNobWVudHM/OiBudW1iZXJbXTsgLy8gaW5kZXggb2YgSnNvblRlc3RSZXN1bHRFbmQuYXR0YWNobWVudHNcbiAgYW5ub3RhdGlvbnM/OiBUZXN0QW5ub3RhdGlvbltdO1xufTtcblxuZXhwb3J0IHR5cGUgSnNvblRlc3RSZXN1bHRPbkF0dGFjaCA9IHtcbiAgdGVzdElkOiBzdHJpbmc7XG4gIHJlc3VsdElkOiBzdHJpbmc7XG4gIGF0dGFjaG1lbnRzOiBKc29uQXR0YWNobWVudFtdO1xufTtcblxuZXhwb3J0IHR5cGUgSnNvbkZ1bGxSZXN1bHQgPSB7XG4gIHN0YXR1czogcmVwb3J0ZXJUeXBlcy5GdWxsUmVzdWx0WydzdGF0dXMnXTtcbiAgc3RhcnRUaW1lOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBKc29uRXZlbnQgPSBKc29uT25Db25maWd1cmVFdmVudCB8IEpzb25PbkJsb2JSZXBvcnRNZXRhZGF0YUV2ZW50IHwgSnNvbk9uRW5kRXZlbnQgfCBKc29uT25FeGl0RXZlbnQgfCBKc29uT25Qcm9qZWN0RXZlbnQgfCBKc29uT25CZWdpbkV2ZW50IHwgSnNvbk9uVGVzdEJlZ2luRXZlbnRcbiAgfCBKc29uT25UZXN0RW5kRXZlbnQgfCBKc29uT25TdGVwQmVnaW5FdmVudCB8IEpzb25PblN0ZXBFbmRFdmVudCB8IEpzb25PbkF0dGFjaEV2ZW50IHwgSnNvbk9uRXJyb3JFdmVudCB8IEpzb25PblN0ZElPRXZlbnQ7XG5cbmV4cG9ydCB0eXBlIEpzb25PbkNvbmZpZ3VyZUV2ZW50ID0ge1xuICBtZXRob2Q6ICdvbkNvbmZpZ3VyZSc7XG4gIHBhcmFtczoge1xuICAgIGNvbmZpZzogSnNvbkNvbmZpZztcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25PbkJsb2JSZXBvcnRNZXRhZGF0YUV2ZW50ID0ge1xuICBtZXRob2Q6ICdvbkJsb2JSZXBvcnRNZXRhZGF0YSc7XG4gIHBhcmFtczogQmxvYlJlcG9ydE1ldGFkYXRhO1xufTtcblxuZXhwb3J0IHR5cGUgSnNvbk9uUHJvamVjdEV2ZW50ID0ge1xuICBtZXRob2Q6ICdvblByb2plY3QnO1xuICBwYXJhbXM6IHtcbiAgICBwcm9qZWN0OiBKc29uUHJvamVjdDtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25PbkJlZ2luRXZlbnQgPSB7XG4gIG1ldGhvZDogJ29uQmVnaW4nO1xuICBwYXJhbXM6IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25PblRlc3RCZWdpbkV2ZW50ID0ge1xuICBtZXRob2Q6ICdvblRlc3RCZWdpbic7XG4gIHBhcmFtczoge1xuICAgIHRlc3RJZDogc3RyaW5nO1xuICAgIHJlc3VsdDogSnNvblRlc3RSZXN1bHRTdGFydDtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25PblRlc3RFbmRFdmVudCA9IHtcbiAgbWV0aG9kOiAnb25UZXN0RW5kJztcbiAgcGFyYW1zOiB7XG4gICAgdGVzdDogSnNvblRlc3RFbmQ7XG4gICAgdGVzdElkPzogc3RyaW5nO1xuICAgIHJlc3VsdDogSnNvblRlc3RSZXN1bHRFbmQ7XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBKc29uT25TdGVwQmVnaW5FdmVudCA9IHtcbiAgbWV0aG9kOiAnb25TdGVwQmVnaW4nO1xuICBwYXJhbXM6IHtcbiAgICB0ZXN0SWQ6IHN0cmluZztcbiAgICByZXN1bHRJZDogc3RyaW5nO1xuICAgIHN0ZXA6IEpzb25UZXN0U3RlcFN0YXJ0O1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgSnNvbk9uU3RlcEVuZEV2ZW50ID0ge1xuICBtZXRob2Q6ICdvblN0ZXBFbmQnO1xuICBwYXJhbXM6IHtcbiAgICB0ZXN0SWQ6IHN0cmluZztcbiAgICByZXN1bHRJZDogc3RyaW5nO1xuICAgIHN0ZXA6IEpzb25UZXN0U3RlcEVuZDtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25PbkF0dGFjaEV2ZW50ID0ge1xuICBtZXRob2Q6ICdvbkF0dGFjaCc7XG4gIHBhcmFtczogSnNvblRlc3RSZXN1bHRPbkF0dGFjaDtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25PbkVycm9yRXZlbnQgPSB7XG4gIG1ldGhvZDogJ29uRXJyb3InO1xuICBwYXJhbXM6IHtcbiAgICBlcnJvcjogcmVwb3J0ZXJUeXBlcy5UZXN0RXJyb3I7XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBKc29uT25TdGRJT0V2ZW50ID0ge1xuICBtZXRob2Q6ICdvblN0ZElPJztcbiAgcGFyYW1zOiB7XG4gICAgdHlwZTogSnNvblN0ZElPVHlwZTtcbiAgICB0ZXN0SWQ/OiBzdHJpbmc7XG4gICAgcmVzdWx0SWQ/OiBzdHJpbmc7XG4gICAgZGF0YTogc3RyaW5nO1xuICAgIGlzQmFzZTY0OiBib29sZWFuO1xuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgSnNvbk9uRW5kRXZlbnQgPSB7XG4gIG1ldGhvZDogJ29uRW5kJztcbiAgcGFyYW1zOiB7XG4gICAgcmVzdWx0OiBKc29uRnVsbFJlc3VsdDtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEpzb25PbkV4aXRFdmVudCA9IHtcbiAgbWV0aG9kOiAnb25FeGl0JztcbiAgcGFyYW1zOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgdHlwZSBCbG9iUmVwb3J0TWV0YWRhdGEgPSB7XG4gIHZlcnNpb246IG51bWJlcjtcbiAgdXNlckFnZW50OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHNoYXJkPzogeyB0b3RhbDogbnVtYmVyLCBjdXJyZW50OiBudW1iZXIgfTtcbiAgcGF0aFNlcGFyYXRvcj86IHN0cmluZztcbn07XG5cbnR5cGUgVGVsZVJlcG9ydGVyUmVjZWl2ZXJPcHRpb25zID0ge1xuICBtZXJnZVByb2plY3RzPzogYm9vbGVhbjtcbiAgbWVyZ2VUZXN0Q2FzZXM/OiBib29sZWFuO1xuICByZXNvbHZlUGF0aD86IChyb290RGlyOiBzdHJpbmcsIHJlbGF0aXZlUGF0aDogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIGNvbmZpZ092ZXJyaWRlcz86IFBpY2s8cmVwb3J0ZXJUeXBlcy5GdWxsQ29uZmlnLCAnY29uZmlnRmlsZScgfCAncXVpZXQnIHwgJ3JlcG9ydFNsb3dUZXN0cycgfCAncmVwb3J0ZXInPjtcbiAgY2xlYXJQcmV2aW91c1Jlc3VsdHNXaGVuVGVzdEJlZ2lucz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY2xhc3MgVGVsZVJlcG9ydGVyUmVjZWl2ZXIge1xuICBwdWJsaWMgaXNMaXN0aW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX3Jvb3RTdWl0ZTogVGVsZVN1aXRlO1xuICBwcml2YXRlIF9vcHRpb25zOiBUZWxlUmVwb3J0ZXJSZWNlaXZlck9wdGlvbnM7XG4gIHByaXZhdGUgX3JlcG9ydGVyOiBSZXBvcnRlclYyO1xuICBwcml2YXRlIF90ZXN0cyA9IG5ldyBNYXA8c3RyaW5nLCBUZWxlVGVzdENhc2U+KCk7XG4gIHByaXZhdGUgX3Jvb3REaXIhOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbmZpZyE6IHJlcG9ydGVyVHlwZXMuRnVsbENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihyZXBvcnRlcjogUmVwb3J0ZXJWMiwgb3B0aW9uczogVGVsZVJlcG9ydGVyUmVjZWl2ZXJPcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9yb290U3VpdGUgPSBuZXcgVGVsZVN1aXRlKCcnLCAncm9vdCcpO1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuX3JlcG9ydGVyID0gcmVwb3J0ZXI7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLl9yb290U3VpdGUuX2VudHJpZXMgPSBbXTtcbiAgICB0aGlzLl90ZXN0cy5jbGVhcigpO1xuICB9XG5cbiAgZGlzcGF0Y2gobWVzc2FnZTogSnNvbkV2ZW50KTogUHJvbWlzZTx2b2lkPiB8IHZvaWQge1xuICAgIGNvbnN0IHsgbWV0aG9kLCBwYXJhbXMgfSA9IG1lc3NhZ2U7XG4gICAgaWYgKG1ldGhvZCA9PT0gJ29uQ29uZmlndXJlJykge1xuICAgICAgdGhpcy5fb25Db25maWd1cmUocGFyYW1zLmNvbmZpZyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXRob2QgPT09ICdvblByb2plY3QnKSB7XG4gICAgICB0aGlzLl9vblByb2plY3QocGFyYW1zLnByb2plY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnb25CZWdpbicpIHtcbiAgICAgIHRoaXMuX29uQmVnaW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ29uVGVzdEJlZ2luJykge1xuICAgICAgdGhpcy5fb25UZXN0QmVnaW4ocGFyYW1zLnRlc3RJZCwgcGFyYW1zLnJlc3VsdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtZXRob2QgPT09ICdvblRlc3RFbmQnKSB7XG4gICAgICB0aGlzLl9vblRlc3RFbmQocGFyYW1zLnRlc3QsIHBhcmFtcy5yZXN1bHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnb25TdGVwQmVnaW4nKSB7XG4gICAgICB0aGlzLl9vblN0ZXBCZWdpbihwYXJhbXMudGVzdElkLCBwYXJhbXMucmVzdWx0SWQsIHBhcmFtcy5zdGVwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ29uQXR0YWNoJykge1xuICAgICAgdGhpcy5fb25BdHRhY2gocGFyYW1zLnRlc3RJZCwgcGFyYW1zLnJlc3VsdElkLCBwYXJhbXMuYXR0YWNobWVudHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnb25TdGVwRW5kJykge1xuICAgICAgdGhpcy5fb25TdGVwRW5kKHBhcmFtcy50ZXN0SWQsIHBhcmFtcy5yZXN1bHRJZCwgcGFyYW1zLnN0ZXApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnb25FcnJvcicpIHtcbiAgICAgIHRoaXMuX29uRXJyb3IocGFyYW1zLmVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG1ldGhvZCA9PT0gJ29uU3RkSU8nKSB7XG4gICAgICB0aGlzLl9vblN0ZElPKHBhcmFtcy50eXBlLCBwYXJhbXMudGVzdElkLCBwYXJhbXMucmVzdWx0SWQsIHBhcmFtcy5kYXRhLCBwYXJhbXMuaXNCYXNlNjQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnb25FbmQnKVxuICAgICAgcmV0dXJuIHRoaXMuX29uRW5kKHBhcmFtcy5yZXN1bHQpO1xuICAgIGlmIChtZXRob2QgPT09ICdvbkV4aXQnKVxuICAgICAgcmV0dXJuIHRoaXMuX29uRXhpdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25Db25maWd1cmUoY29uZmlnOiBKc29uQ29uZmlnKSB7XG4gICAgdGhpcy5fcm9vdERpciA9IGNvbmZpZy5yb290RGlyO1xuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX3BhcnNlQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5fcmVwb3J0ZXIub25Db25maWd1cmU/Lih0aGlzLl9jb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25Qcm9qZWN0KHByb2plY3Q6IEpzb25Qcm9qZWN0KSB7XG4gICAgbGV0IHByb2plY3RTdWl0ZSA9IHRoaXMuX29wdGlvbnMubWVyZ2VQcm9qZWN0cyA/IHRoaXMuX3Jvb3RTdWl0ZS5zdWl0ZXMuZmluZChzdWl0ZSA9PiBzdWl0ZS5wcm9qZWN0KCkhLm5hbWUgPT09IHByb2plY3QubmFtZSkgOiB1bmRlZmluZWQ7XG4gICAgaWYgKCFwcm9qZWN0U3VpdGUpIHtcbiAgICAgIHByb2plY3RTdWl0ZSA9IG5ldyBUZWxlU3VpdGUocHJvamVjdC5uYW1lLCAncHJvamVjdCcpO1xuICAgICAgdGhpcy5fcm9vdFN1aXRlLl9hZGRTdWl0ZShwcm9qZWN0U3VpdGUpO1xuICAgIH1cbiAgICAvLyBBbHdheXMgdXBkYXRlIHByb2plY3QgaW4gd2F0Y2ggbW9kZS5cbiAgICBwcm9qZWN0U3VpdGUuX3Byb2plY3QgPSB0aGlzLl9wYXJzZVByb2plY3QocHJvamVjdCk7XG4gICAgZm9yIChjb25zdCBzdWl0ZSBvZiBwcm9qZWN0LnN1aXRlcylcbiAgICAgIHRoaXMuX21lcmdlU3VpdGVJbnRvKHN1aXRlLCBwcm9qZWN0U3VpdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25CZWdpbigpIHtcbiAgICB0aGlzLl9yZXBvcnRlci5vbkJlZ2luPy4odGhpcy5fcm9vdFN1aXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uVGVzdEJlZ2luKHRlc3RJZDogc3RyaW5nLCBwYXlsb2FkOiBKc29uVGVzdFJlc3VsdFN0YXJ0KSB7XG4gICAgY29uc3QgdGVzdCA9IHRoaXMuX3Rlc3RzLmdldCh0ZXN0SWQpITtcbiAgICBpZiAodGhpcy5fb3B0aW9ucy5jbGVhclByZXZpb3VzUmVzdWx0c1doZW5UZXN0QmVnaW5zKVxuICAgICAgdGVzdC5yZXN1bHRzID0gW107XG4gICAgY29uc3QgdGVzdFJlc3VsdCA9IHRlc3QuX2NyZWF0ZVRlc3RSZXN1bHQocGF5bG9hZC5pZCk7XG4gICAgdGVzdFJlc3VsdC5yZXRyeSA9IHBheWxvYWQucmV0cnk7XG4gICAgdGVzdFJlc3VsdC53b3JrZXJJbmRleCA9IHBheWxvYWQud29ya2VySW5kZXg7XG4gICAgdGVzdFJlc3VsdC5wYXJhbGxlbEluZGV4ID0gcGF5bG9hZC5wYXJhbGxlbEluZGV4O1xuICAgIHRlc3RSZXN1bHQuc2V0U3RhcnRUaW1lTnVtYmVyKHBheWxvYWQuc3RhcnRUaW1lKTtcbiAgICB0aGlzLl9yZXBvcnRlci5vblRlc3RCZWdpbj8uKHRlc3QsIHRlc3RSZXN1bHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25UZXN0RW5kKHRlc3RFbmRQYXlsb2FkOiBKc29uVGVzdEVuZCwgcGF5bG9hZDogSnNvblRlc3RSZXN1bHRFbmQpIHtcbiAgICBjb25zdCB0ZXN0ID0gdGhpcy5fdGVzdHMuZ2V0KHRlc3RFbmRQYXlsb2FkLnRlc3RJZCkhO1xuICAgIHRlc3QudGltZW91dCA9IHRlc3RFbmRQYXlsb2FkLnRpbWVvdXQ7XG4gICAgdGVzdC5leHBlY3RlZFN0YXR1cyA9IHRlc3RFbmRQYXlsb2FkLmV4cGVjdGVkU3RhdHVzO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRlc3QucmVzdWx0cy5maW5kKHIgPT4gci5faWQgPT09IHBheWxvYWQuaWQpITtcbiAgICByZXN1bHQuZHVyYXRpb24gPSBwYXlsb2FkLmR1cmF0aW9uO1xuICAgIHJlc3VsdC5zdGF0dXMgPSBwYXlsb2FkLnN0YXR1cztcbiAgICByZXN1bHQuZXJyb3JzID0gcGF5bG9hZC5lcnJvcnM7XG4gICAgcmVzdWx0LmVycm9yID0gcmVzdWx0LmVycm9ycz8uWzBdO1xuICAgIC8vIEF0dGFjaG1lbnRzIGFyZSBvbmx5IHByZXNlbnQgaGVyZSBmcm9tIGxlZ2FjeSBibG9icy4gVGhlc2Ugb3ZlcnJpZGUgYWxsIF9vbkF0dGFjaCBldmVudHNcbiAgICBpZiAoISFwYXlsb2FkLmF0dGFjaG1lbnRzKVxuICAgICAgcmVzdWx0LmF0dGFjaG1lbnRzID0gdGhpcy5fcGFyc2VBdHRhY2htZW50cyhwYXlsb2FkLmF0dGFjaG1lbnRzKTtcbiAgICBpZiAocGF5bG9hZC5hbm5vdGF0aW9ucykge1xuICAgICAgdGhpcy5fYWJzb2x1dGVBbm5vdGF0aW9uTG9jYXRpb25zSW5wbGFjZShwYXlsb2FkLmFubm90YXRpb25zKTtcbiAgICAgIHJlc3VsdC5hbm5vdGF0aW9ucyA9IHBheWxvYWQuYW5ub3RhdGlvbnM7XG4gICAgICB0ZXN0LmFubm90YXRpb25zID0gcGF5bG9hZC5hbm5vdGF0aW9ucztcbiAgICB9XG4gICAgdGhpcy5fcmVwb3J0ZXIub25UZXN0RW5kPy4odGVzdCwgcmVzdWx0KTtcbiAgICAvLyBGcmVlIHVwIHRoZSBtZW1vcnkgYXMgd29uJ3Qgc2VlIHRoZXNlIHN0ZXAgaWRzLlxuICAgIHJlc3VsdC5fc3RlcE1hcCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU3RlcEJlZ2luKHRlc3RJZDogc3RyaW5nLCByZXN1bHRJZDogc3RyaW5nLCBwYXlsb2FkOiBKc29uVGVzdFN0ZXBTdGFydCkge1xuICAgIGNvbnN0IHRlc3QgPSB0aGlzLl90ZXN0cy5nZXQodGVzdElkKSE7XG4gICAgY29uc3QgcmVzdWx0ID0gdGVzdC5yZXN1bHRzLmZpbmQociA9PiByLl9pZCA9PT0gcmVzdWx0SWQpITtcbiAgICBjb25zdCBwYXJlbnRTdGVwID0gcGF5bG9hZC5wYXJlbnRTdGVwSWQgPyByZXN1bHQuX3N0ZXBNYXAuZ2V0KHBheWxvYWQucGFyZW50U3RlcElkKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5fYWJzb2x1dGVMb2NhdGlvbihwYXlsb2FkLmxvY2F0aW9uKTtcbiAgICBjb25zdCBzdGVwID0gbmV3IFRlbGVUZXN0U3RlcChwYXlsb2FkLCBwYXJlbnRTdGVwLCBsb2NhdGlvbiwgcmVzdWx0KTtcbiAgICBpZiAocGFyZW50U3RlcClcbiAgICAgIHBhcmVudFN0ZXAuc3RlcHMucHVzaChzdGVwKTtcbiAgICBlbHNlXG4gICAgICByZXN1bHQuc3RlcHMucHVzaChzdGVwKTtcbiAgICByZXN1bHQuX3N0ZXBNYXAuc2V0KHBheWxvYWQuaWQsIHN0ZXApO1xuICAgIHRoaXMuX3JlcG9ydGVyLm9uU3RlcEJlZ2luPy4odGVzdCwgcmVzdWx0LCBzdGVwKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU3RlcEVuZCh0ZXN0SWQ6IHN0cmluZywgcmVzdWx0SWQ6IHN0cmluZywgcGF5bG9hZDogSnNvblRlc3RTdGVwRW5kKSB7XG4gICAgY29uc3QgdGVzdCA9IHRoaXMuX3Rlc3RzLmdldCh0ZXN0SWQpITtcbiAgICBjb25zdCByZXN1bHQgPSB0ZXN0LnJlc3VsdHMuZmluZChyID0+IHIuX2lkID09PSByZXN1bHRJZCkhO1xuICAgIGNvbnN0IHN0ZXAgPSByZXN1bHQuX3N0ZXBNYXAuZ2V0KHBheWxvYWQuaWQpITtcbiAgICBzdGVwLl9lbmRQYXlsb2FkID0gcGF5bG9hZDtcbiAgICBzdGVwLmR1cmF0aW9uID0gcGF5bG9hZC5kdXJhdGlvbjtcbiAgICBzdGVwLmVycm9yID0gcGF5bG9hZC5lcnJvcjtcbiAgICB0aGlzLl9yZXBvcnRlci5vblN0ZXBFbmQ/Lih0ZXN0LCByZXN1bHQsIHN0ZXApO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25BdHRhY2godGVzdElkOiBzdHJpbmcsIHJlc3VsdElkOiBzdHJpbmcsIGF0dGFjaG1lbnRzOiBKc29uQXR0YWNobWVudFtdKSB7XG4gICAgY29uc3QgdGVzdCA9IHRoaXMuX3Rlc3RzLmdldCh0ZXN0SWQpITtcbiAgICBjb25zdCByZXN1bHQgPSB0ZXN0LnJlc3VsdHMuZmluZChyID0+IHIuX2lkID09PSByZXN1bHRJZCkhO1xuICAgIHJlc3VsdC5hdHRhY2htZW50cy5wdXNoKC4uLmF0dGFjaG1lbnRzLm1hcChhID0+ICh7XG4gICAgICBuYW1lOiBhLm5hbWUsXG4gICAgICBjb250ZW50VHlwZTogYS5jb250ZW50VHlwZSxcbiAgICAgIHBhdGg6IGEucGF0aCxcbiAgICAgIGJvZHk6IGEuYmFzZTY0ICYmIChnbG9iYWxUaGlzIGFzIGFueSkuQnVmZmVyID8gQnVmZmVyLmZyb20oYS5iYXNlNjQsICdiYXNlNjQnKSA6IHVuZGVmaW5lZCxcbiAgICB9KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25FcnJvcihlcnJvcjogcmVwb3J0ZXJUeXBlcy5UZXN0RXJyb3IpIHtcbiAgICB0aGlzLl9yZXBvcnRlci5vbkVycm9yPy4oZXJyb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25TdGRJTyh0eXBlOiBKc29uU3RkSU9UeXBlLCB0ZXN0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZCwgcmVzdWx0SWQ6IHN0cmluZyB8IHVuZGVmaW5lZCwgZGF0YTogc3RyaW5nLCBpc0Jhc2U2NDogYm9vbGVhbikge1xuICAgIGNvbnN0IGNodW5rID0gaXNCYXNlNjQgPyAoKGdsb2JhbFRoaXMgYXMgYW55KS5CdWZmZXIgPyBCdWZmZXIuZnJvbShkYXRhLCAnYmFzZTY0JykgOiBhdG9iKGRhdGEpKSA6IGRhdGE7XG4gICAgY29uc3QgdGVzdCA9IHRlc3RJZCA/IHRoaXMuX3Rlc3RzLmdldCh0ZXN0SWQpIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRlc3QgJiYgcmVzdWx0SWQgPyB0ZXN0LnJlc3VsdHMuZmluZChyID0+IHIuX2lkID09PSByZXN1bHRJZCkgOiB1bmRlZmluZWQ7XG4gICAgaWYgKHR5cGUgPT09ICdzdGRvdXQnKSB7XG4gICAgICByZXN1bHQ/LnN0ZG91dC5wdXNoKGNodW5rKTtcbiAgICAgIHRoaXMuX3JlcG9ydGVyLm9uU3RkT3V0Py4oY2h1bmssIHRlc3QsIHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdD8uc3RkZXJyLnB1c2goY2h1bmspO1xuICAgICAgdGhpcy5fcmVwb3J0ZXIub25TdGRFcnI/LihjaHVuaywgdGVzdCwgcmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9vbkVuZChyZXN1bHQ6IEpzb25GdWxsUmVzdWx0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5fcmVwb3J0ZXIub25FbmQ/Lih7XG4gICAgICBzdGF0dXM6IHJlc3VsdC5zdGF0dXMsXG4gICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKHJlc3VsdC5zdGFydFRpbWUpLFxuICAgICAgZHVyYXRpb246IHJlc3VsdC5kdXJhdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRXhpdCgpOiBQcm9taXNlPHZvaWQ+IHwgdm9pZCB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcG9ydGVyLm9uRXhpdD8uKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYXJzZUNvbmZpZyhjb25maWc6IEpzb25Db25maWcpOiByZXBvcnRlclR5cGVzLkZ1bGxDb25maWcge1xuICAgIGNvbnN0IHJlc3VsdCA9IHsgLi4uYmFzZUZ1bGxDb25maWcsIC4uLmNvbmZpZyB9O1xuICAgIGlmICh0aGlzLl9vcHRpb25zLmNvbmZpZ092ZXJyaWRlcykge1xuICAgICAgcmVzdWx0LmNvbmZpZ0ZpbGUgPSB0aGlzLl9vcHRpb25zLmNvbmZpZ092ZXJyaWRlcy5jb25maWdGaWxlO1xuICAgICAgcmVzdWx0LnJlcG9ydFNsb3dUZXN0cyA9IHRoaXMuX29wdGlvbnMuY29uZmlnT3ZlcnJpZGVzLnJlcG9ydFNsb3dUZXN0cztcbiAgICAgIHJlc3VsdC5xdWlldCA9IHRoaXMuX29wdGlvbnMuY29uZmlnT3ZlcnJpZGVzLnF1aWV0O1xuICAgICAgcmVzdWx0LnJlcG9ydGVyID0gWy4uLnRoaXMuX29wdGlvbnMuY29uZmlnT3ZlcnJpZGVzLnJlcG9ydGVyXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX3BhcnNlUHJvamVjdChwcm9qZWN0OiBKc29uUHJvamVjdCk6IFRlbGVGdWxsUHJvamVjdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1ldGFkYXRhOiBwcm9qZWN0Lm1ldGFkYXRhLFxuICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxuICAgICAgb3V0cHV0RGlyOiB0aGlzLl9hYnNvbHV0ZVBhdGgocHJvamVjdC5vdXRwdXREaXIpLFxuICAgICAgcmVwZWF0RWFjaDogcHJvamVjdC5yZXBlYXRFYWNoLFxuICAgICAgcmV0cmllczogcHJvamVjdC5yZXRyaWVzLFxuICAgICAgdGVzdERpcjogdGhpcy5fYWJzb2x1dGVQYXRoKHByb2plY3QudGVzdERpciksXG4gICAgICB0ZXN0SWdub3JlOiBwYXJzZVJlZ2V4UGF0dGVybnMocHJvamVjdC50ZXN0SWdub3JlKSxcbiAgICAgIHRlc3RNYXRjaDogcGFyc2VSZWdleFBhdHRlcm5zKHByb2plY3QudGVzdE1hdGNoKSxcbiAgICAgIHRpbWVvdXQ6IHByb2plY3QudGltZW91dCxcbiAgICAgIGdyZXA6IHBhcnNlUmVnZXhQYXR0ZXJucyhwcm9qZWN0LmdyZXApIGFzIFJlZ0V4cFtdLFxuICAgICAgZ3JlcEludmVydDogcGFyc2VSZWdleFBhdHRlcm5zKHByb2plY3QuZ3JlcEludmVydCkgYXMgUmVnRXhwW10sXG4gICAgICBkZXBlbmRlbmNpZXM6IHByb2plY3QuZGVwZW5kZW5jaWVzLFxuICAgICAgdGVhcmRvd246IHByb2plY3QudGVhcmRvd24sXG4gICAgICBzbmFwc2hvdERpcjogdGhpcy5fYWJzb2x1dGVQYXRoKHByb2plY3Quc25hcHNob3REaXIpLFxuICAgICAgdXNlOiBwcm9qZWN0LnVzZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VBdHRhY2htZW50cyhhdHRhY2htZW50czogSnNvbkF0dGFjaG1lbnRbXSk6IHJlcG9ydGVyVHlwZXMuVGVzdFJlc3VsdFsnYXR0YWNobWVudHMnXSB7XG4gICAgcmV0dXJuIGF0dGFjaG1lbnRzLm1hcChhID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmEsXG4gICAgICAgIGJvZHk6IGEuYmFzZTY0ICYmIChnbG9iYWxUaGlzIGFzIGFueSkuQnVmZmVyID8gQnVmZmVyLmZyb20oYS5iYXNlNjQsICdiYXNlNjQnKSA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9tZXJnZVN1aXRlSW50byhqc29uU3VpdGU6IEpzb25TdWl0ZSwgcGFyZW50OiBUZWxlU3VpdGUpOiB2b2lkIHtcbiAgICBsZXQgdGFyZ2V0U3VpdGUgPSBwYXJlbnQuc3VpdGVzLmZpbmQocyA9PiBzLnRpdGxlID09PSBqc29uU3VpdGUudGl0bGUpO1xuICAgIGlmICghdGFyZ2V0U3VpdGUpIHtcbiAgICAgIHRhcmdldFN1aXRlID0gbmV3IFRlbGVTdWl0ZShqc29uU3VpdGUudGl0bGUsIHBhcmVudC50eXBlID09PSAncHJvamVjdCcgPyAnZmlsZScgOiAnZGVzY3JpYmUnKTtcbiAgICAgIHBhcmVudC5fYWRkU3VpdGUodGFyZ2V0U3VpdGUpO1xuICAgIH1cbiAgICB0YXJnZXRTdWl0ZS5sb2NhdGlvbiA9IHRoaXMuX2Fic29sdXRlTG9jYXRpb24oanNvblN1aXRlLmxvY2F0aW9uKTtcbiAgICBqc29uU3VpdGUuZW50cmllcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgaWYgKCd0ZXN0SWQnIGluIGUpXG4gICAgICAgIHRoaXMuX21lcmdlVGVzdEludG8oZSwgdGFyZ2V0U3VpdGUhKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5fbWVyZ2VTdWl0ZUludG8oZSwgdGFyZ2V0U3VpdGUhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX21lcmdlVGVzdEludG8oanNvblRlc3Q6IEpzb25UZXN0Q2FzZSwgcGFyZW50OiBUZWxlU3VpdGUpIHtcbiAgICBsZXQgdGFyZ2V0VGVzdCA9IHRoaXMuX29wdGlvbnMubWVyZ2VUZXN0Q2FzZXMgPyBwYXJlbnQudGVzdHMuZmluZChzID0+IHMudGl0bGUgPT09IGpzb25UZXN0LnRpdGxlICYmIHMucmVwZWF0RWFjaEluZGV4ID09PSBqc29uVGVzdC5yZXBlYXRFYWNoSW5kZXgpIDogdW5kZWZpbmVkO1xuICAgIGlmICghdGFyZ2V0VGVzdCkge1xuICAgICAgdGFyZ2V0VGVzdCA9IG5ldyBUZWxlVGVzdENhc2UoanNvblRlc3QudGVzdElkLCBqc29uVGVzdC50aXRsZSwgdGhpcy5fYWJzb2x1dGVMb2NhdGlvbihqc29uVGVzdC5sb2NhdGlvbiksIGpzb25UZXN0LnJlcGVhdEVhY2hJbmRleCk7XG4gICAgICBwYXJlbnQuX2FkZFRlc3QodGFyZ2V0VGVzdCk7XG4gICAgICB0aGlzLl90ZXN0cy5zZXQodGFyZ2V0VGVzdC5pZCwgdGFyZ2V0VGVzdCk7XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZVRlc3QoanNvblRlc3QsIHRhcmdldFRlc3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVGVzdChwYXlsb2FkOiBKc29uVGVzdENhc2UsIHRlc3Q6IFRlbGVUZXN0Q2FzZSk6IFRlbGVUZXN0Q2FzZSB7XG4gICAgdGVzdC5pZCA9IHBheWxvYWQudGVzdElkO1xuICAgIHRlc3QubG9jYXRpb24gPSB0aGlzLl9hYnNvbHV0ZUxvY2F0aW9uKHBheWxvYWQubG9jYXRpb24pO1xuICAgIHRlc3QucmV0cmllcyA9IHBheWxvYWQucmV0cmllcztcbiAgICB0ZXN0LnRhZ3MgPSBwYXlsb2FkLnRhZ3MgPz8gW107XG4gICAgdGVzdC5hbm5vdGF0aW9ucyA9IHBheWxvYWQuYW5ub3RhdGlvbnMgPz8gW107XG4gICAgdGhpcy5fYWJzb2x1dGVBbm5vdGF0aW9uTG9jYXRpb25zSW5wbGFjZSh0ZXN0LmFubm90YXRpb25zKTtcbiAgICByZXR1cm4gdGVzdDtcbiAgfVxuXG4gIHByaXZhdGUgX2Fic29sdXRlQW5ub3RhdGlvbkxvY2F0aW9uc0lucGxhY2UoYW5ub3RhdGlvbnM6IFRlc3RBbm5vdGF0aW9uW10pIHtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb24gb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgIGlmIChhbm5vdGF0aW9uLmxvY2F0aW9uKVxuICAgICAgICBhbm5vdGF0aW9uLmxvY2F0aW9uID0gdGhpcy5fYWJzb2x1dGVMb2NhdGlvbihhbm5vdGF0aW9uLmxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hYnNvbHV0ZUxvY2F0aW9uKGxvY2F0aW9uOiByZXBvcnRlclR5cGVzLkxvY2F0aW9uKTogcmVwb3J0ZXJUeXBlcy5Mb2NhdGlvbjtcbiAgcHJpdmF0ZSBfYWJzb2x1dGVMb2NhdGlvbihsb2NhdGlvbj86IHJlcG9ydGVyVHlwZXMuTG9jYXRpb24pOiByZXBvcnRlclR5cGVzLkxvY2F0aW9uIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9hYnNvbHV0ZUxvY2F0aW9uKGxvY2F0aW9uOiByZXBvcnRlclR5cGVzLkxvY2F0aW9uIHwgdW5kZWZpbmVkKTogcmVwb3J0ZXJUeXBlcy5Mb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFsb2NhdGlvbilcbiAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ubG9jYXRpb24sXG4gICAgICBmaWxlOiB0aGlzLl9hYnNvbHV0ZVBhdGgobG9jYXRpb24uZmlsZSksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2Fic29sdXRlUGF0aChyZWxhdGl2ZVBhdGg6IHN0cmluZyk6IHN0cmluZztcbiAgcHJpdmF0ZSBfYWJzb2x1dGVQYXRoKHJlbGF0aXZlUGF0aD86IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfYWJzb2x1dGVQYXRoKHJlbGF0aXZlUGF0aD86IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHJlbGF0aXZlUGF0aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgcmV0dXJuO1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLnJlc29sdmVQYXRoID8gdGhpcy5fb3B0aW9ucy5yZXNvbHZlUGF0aCh0aGlzLl9yb290RGlyLCByZWxhdGl2ZVBhdGgpIDogdGhpcy5fcm9vdERpciArICcvJyArIHJlbGF0aXZlUGF0aDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVsZVN1aXRlIGltcGxlbWVudHMgcmVwb3J0ZXJUeXBlcy5TdWl0ZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxvY2F0aW9uPzogcmVwb3J0ZXJUeXBlcy5Mb2NhdGlvbjtcbiAgcGFyZW50PzogVGVsZVN1aXRlO1xuICBfZW50cmllczogKFRlbGVTdWl0ZSB8IFRlbGVUZXN0Q2FzZSlbXSA9IFtdO1xuICBfcmVxdWlyZUZpbGU6IHN0cmluZyA9ICcnO1xuICBfdGltZW91dDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBfcmV0cmllczogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICBfcHJvamVjdDogVGVsZUZ1bGxQcm9qZWN0IHwgdW5kZWZpbmVkO1xuICBfcGFyYWxsZWxNb2RlOiAnbm9uZScgfCAnZGVmYXVsdCcgfCAnc2VyaWFsJyB8ICdwYXJhbGxlbCcgPSAnbm9uZSc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3R5cGU6ICdyb290JyB8ICdwcm9qZWN0JyB8ICdmaWxlJyB8ICdkZXNjcmliZSc7XG5cbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgdHlwZTogJ3Jvb3QnIHwgJ3Byb2plY3QnIHwgJ2ZpbGUnIHwgJ2Rlc2NyaWJlJykge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgZ2V0IHN1aXRlcygpOiBUZWxlU3VpdGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudHJpZXMuZmlsdGVyKGUgPT4gZS50eXBlICE9PSAndGVzdCcpIGFzIFRlbGVTdWl0ZVtdO1xuICB9XG5cbiAgZ2V0IHRlc3RzKCk6IFRlbGVUZXN0Q2FzZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZW50cmllcy5maWx0ZXIoZSA9PiBlLnR5cGUgPT09ICd0ZXN0JykgYXMgVGVsZVRlc3RDYXNlW107XG4gIH1cblxuICBlbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbnRyaWVzO1xuICB9XG5cbiAgYWxsVGVzdHMoKTogcmVwb3J0ZXJUeXBlcy5UZXN0Q2FzZVtdIHtcbiAgICBjb25zdCByZXN1bHQ6IHJlcG9ydGVyVHlwZXMuVGVzdENhc2VbXSA9IFtdO1xuICAgIGNvbnN0IHZpc2l0ID0gKHN1aXRlOiByZXBvcnRlclR5cGVzLlN1aXRlKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHN1aXRlLmVudHJpZXMoKSkge1xuICAgICAgICBpZiAoZW50cnkudHlwZSA9PT0gJ3Rlc3QnKVxuICAgICAgICAgIHJlc3VsdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHZpc2l0KGVudHJ5KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZpc2l0KHRoaXMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0aXRsZVBhdGgoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHRpdGxlUGF0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudGl0bGVQYXRoKCkgOiBbXTtcbiAgICAvLyBJZ25vcmUgYW5vbnltb3VzIGRlc2NyaWJlIGJsb2Nrcy5cbiAgICBpZiAodGhpcy50aXRsZSB8fCB0aGlzLl90eXBlICE9PSAnZGVzY3JpYmUnKVxuICAgICAgdGl0bGVQYXRoLnB1c2godGhpcy50aXRsZSk7XG4gICAgcmV0dXJuIHRpdGxlUGF0aDtcbiAgfVxuXG4gIHByb2plY3QoKTogVGVsZUZ1bGxQcm9qZWN0IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcHJvamVjdCA/PyB0aGlzLnBhcmVudD8ucHJvamVjdCgpO1xuICB9XG5cbiAgX2FkZFRlc3QodGVzdDogVGVsZVRlc3RDYXNlKSB7XG4gICAgdGVzdC5wYXJlbnQgPSB0aGlzO1xuICAgIHRoaXMuX2VudHJpZXMucHVzaCh0ZXN0KTtcbiAgfVxuXG4gIF9hZGRTdWl0ZShzdWl0ZTogVGVsZVN1aXRlKSB7XG4gICAgc3VpdGUucGFyZW50ID0gdGhpcztcbiAgICB0aGlzLl9lbnRyaWVzLnB1c2goc3VpdGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZWxlVGVzdENhc2UgaW1wbGVtZW50cyByZXBvcnRlclR5cGVzLlRlc3RDYXNlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZm4gPSAoKSA9PiB7fTtcbiAgcmVzdWx0czogVGVsZVRlc3RSZXN1bHRbXSA9IFtdO1xuICBsb2NhdGlvbjogcmVwb3J0ZXJUeXBlcy5Mb2NhdGlvbjtcbiAgcGFyZW50ITogVGVsZVN1aXRlO1xuICB0eXBlOiAndGVzdCcgPSAndGVzdCc7XG5cbiAgZXhwZWN0ZWRTdGF0dXM6IHJlcG9ydGVyVHlwZXMuVGVzdFN0YXR1cyA9ICdwYXNzZWQnO1xuICB0aW1lb3V0ID0gMDtcbiAgYW5ub3RhdGlvbnM6IFRlc3RBbm5vdGF0aW9uW10gPSBbXTtcbiAgcmV0cmllcyA9IDA7XG4gIHRhZ3M6IHN0cmluZ1tdID0gW107XG4gIHJlcGVhdEVhY2hJbmRleCA9IDA7XG4gIGlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGl0bGU6IHN0cmluZywgbG9jYXRpb246IHJlcG9ydGVyVHlwZXMuTG9jYXRpb24sIHJlcGVhdEVhY2hJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy5yZXBlYXRFYWNoSW5kZXggPSByZXBlYXRFYWNoSW5kZXg7XG4gIH1cblxuICB0aXRsZVBhdGgoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHRpdGxlUGF0aCA9IHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQudGl0bGVQYXRoKCkgOiBbXTtcbiAgICB0aXRsZVBhdGgucHVzaCh0aGlzLnRpdGxlKTtcbiAgICByZXR1cm4gdGl0bGVQYXRoO1xuICB9XG5cbiAgb3V0Y29tZSgpOiAnc2tpcHBlZCcgfCAnZXhwZWN0ZWQnIHwgJ3VuZXhwZWN0ZWQnIHwgJ2ZsYWt5JyB7XG4gICAgcmV0dXJuIGNvbXB1dGVUZXN0Q2FzZU91dGNvbWUodGhpcyk7XG4gIH1cblxuICBvaygpOiBib29sZWFuIHtcbiAgICBjb25zdCBzdGF0dXMgPSB0aGlzLm91dGNvbWUoKTtcbiAgICByZXR1cm4gc3RhdHVzID09PSAnZXhwZWN0ZWQnIHx8IHN0YXR1cyA9PT0gJ2ZsYWt5JyB8fCBzdGF0dXMgPT09ICdza2lwcGVkJztcbiAgfVxuXG4gIF9jcmVhdGVUZXN0UmVzdWx0KGlkOiBzdHJpbmcpOiBUZWxlVGVzdFJlc3VsdCB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFRlbGVUZXN0UmVzdWx0KHRoaXMucmVzdWx0cy5sZW5ndGgsIGlkKTtcbiAgICB0aGlzLnJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuY2xhc3MgVGVsZVRlc3RTdGVwIGltcGxlbWVudHMgcmVwb3J0ZXJUeXBlcy5UZXN0U3RlcCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGxvY2F0aW9uOiByZXBvcnRlclR5cGVzLkxvY2F0aW9uIHwgdW5kZWZpbmVkO1xuICBwYXJlbnQ6IHJlcG9ydGVyVHlwZXMuVGVzdFN0ZXAgfCB1bmRlZmluZWQ7XG4gIGR1cmF0aW9uOiBudW1iZXIgPSAtMTtcbiAgc3RlcHM6IHJlcG9ydGVyVHlwZXMuVGVzdFN0ZXBbXSA9IFtdO1xuICBlcnJvcjogcmVwb3J0ZXJUeXBlcy5UZXN0RXJyb3IgfCB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBfcmVzdWx0OiBUZWxlVGVzdFJlc3VsdDtcbiAgX2VuZFBheWxvYWQ/OiBKc29uVGVzdFN0ZXBFbmQ7XG5cbiAgcHJpdmF0ZSBfc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHBheWxvYWQ6IEpzb25UZXN0U3RlcFN0YXJ0LCBwYXJlbnRTdGVwOiByZXBvcnRlclR5cGVzLlRlc3RTdGVwIHwgdW5kZWZpbmVkLCBsb2NhdGlvbjogcmVwb3J0ZXJUeXBlcy5Mb2NhdGlvbiB8IHVuZGVmaW5lZCwgcmVzdWx0OiBUZWxlVGVzdFJlc3VsdCkge1xuICAgIHRoaXMudGl0bGUgPSBwYXlsb2FkLnRpdGxlO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBwYXlsb2FkLmNhdGVnb3J5O1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudFN0ZXA7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gcGF5bG9hZC5zdGFydFRpbWU7XG4gICAgdGhpcy5fcmVzdWx0ID0gcmVzdWx0O1xuICB9XG5cbiAgdGl0bGVQYXRoKCkge1xuICAgIGNvbnN0IHBhcmVudFBhdGggPSB0aGlzLnBhcmVudD8udGl0bGVQYXRoKCkgfHwgW107XG4gICAgcmV0dXJuIFsuLi5wYXJlbnRQYXRoLCB0aGlzLnRpdGxlXTtcbiAgfVxuXG4gIGdldCBzdGFydFRpbWUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX3N0YXJ0VGltZSk7XG4gIH1cblxuICBzZXQgc3RhcnRUaW1lKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5fc3RhcnRUaW1lID0gK3ZhbHVlO1xuICB9XG5cbiAgZ2V0IGF0dGFjaG1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRQYXlsb2FkPy5hdHRhY2htZW50cz8ubWFwKGluZGV4ID0+IHRoaXMuX3Jlc3VsdC5hdHRhY2htZW50c1tpbmRleF0pID8/IFtdO1xuICB9XG5cbiAgZ2V0IGFubm90YXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmRQYXlsb2FkPy5hbm5vdGF0aW9ucyA/PyBbXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGVsZVRlc3RSZXN1bHQgaW1wbGVtZW50cyByZXBvcnRlclR5cGVzLlRlc3RSZXN1bHQge1xuICByZXRyeTogcmVwb3J0ZXJUeXBlcy5UZXN0UmVzdWx0WydyZXRyeSddO1xuICBwYXJhbGxlbEluZGV4OiByZXBvcnRlclR5cGVzLlRlc3RSZXN1bHRbJ3BhcmFsbGVsSW5kZXgnXSA9IC0xO1xuICB3b3JrZXJJbmRleDogcmVwb3J0ZXJUeXBlcy5UZXN0UmVzdWx0Wyd3b3JrZXJJbmRleCddID0gLTE7XG4gIGR1cmF0aW9uOiByZXBvcnRlclR5cGVzLlRlc3RSZXN1bHRbJ2R1cmF0aW9uJ10gPSAtMTtcbiAgc3Rkb3V0OiByZXBvcnRlclR5cGVzLlRlc3RSZXN1bHRbJ3N0ZG91dCddID0gW107XG4gIHN0ZGVycjogcmVwb3J0ZXJUeXBlcy5UZXN0UmVzdWx0WydzdGRlcnInXSA9IFtdO1xuICBhdHRhY2htZW50czogcmVwb3J0ZXJUeXBlcy5UZXN0UmVzdWx0WydhdHRhY2htZW50cyddID0gW107XG4gIGFubm90YXRpb25zOiByZXBvcnRlclR5cGVzLlRlc3RSZXN1bHRbJ2Fubm90YXRpb25zJ10gPSBbXTtcbiAgc3RhdHVzOiByZXBvcnRlclR5cGVzLlRlc3RTdGF0dXMgPSAnc2tpcHBlZCc7XG4gIHN0ZXBzOiBUZWxlVGVzdFN0ZXBbXSA9IFtdO1xuICBlcnJvcnM6IHJlcG9ydGVyVHlwZXMuVGVzdFJlc3VsdFsnZXJyb3JzJ10gPSBbXTtcbiAgZXJyb3I6IHJlcG9ydGVyVHlwZXMuVGVzdFJlc3VsdFsnZXJyb3InXTtcblxuICBfc3RlcE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBUZWxlVGVzdFN0ZXA+KCk7XG4gIF9pZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3N0YXJ0VGltZTogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihyZXRyeTogbnVtYmVyLCBpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZXRyeSA9IHJldHJ5O1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBzZXRTdGFydFRpbWVOdW1iZXIoc3RhcnRUaW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gIH1cblxuICBnZXQgc3RhcnRUaW1lKCk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLl9zdGFydFRpbWUpO1xuICB9XG5cbiAgc2V0IHN0YXJ0VGltZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9ICt2YWx1ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBUZWxlRnVsbFByb2plY3QgPSByZXBvcnRlclR5cGVzLkZ1bGxQcm9qZWN0O1xuXG5leHBvcnQgY29uc3QgYmFzZUZ1bGxDb25maWc6IHJlcG9ydGVyVHlwZXMuRnVsbENvbmZpZyA9IHtcbiAgZm9yYmlkT25seTogZmFsc2UsXG4gIGZ1bGx5UGFyYWxsZWw6IGZhbHNlLFxuICBnbG9iYWxTZXR1cDogbnVsbCxcbiAgZ2xvYmFsVGVhcmRvd246IG51bGwsXG4gIGdsb2JhbFRpbWVvdXQ6IDAsXG4gIGdyZXA6IC8uKi8sXG4gIGdyZXBJbnZlcnQ6IG51bGwsXG4gIG1heEZhaWx1cmVzOiAwLFxuICBtZXRhZGF0YToge30sXG4gIHByZXNlcnZlT3V0cHV0OiAnYWx3YXlzJyxcbiAgcHJvamVjdHM6IFtdLFxuICByZXBvcnRlcjogW1twcm9jZXNzLmVudi5DSSA/ICdkb3QnIDogJ2xpc3QnXV0sXG4gIHJlcG9ydFNsb3dUZXN0czogeyBtYXg6IDUsIHRocmVzaG9sZDogMzAwXzAwMCAvKiA1IG1pbnV0ZXMgKi8gfSxcbiAgY29uZmlnRmlsZTogJycsXG4gIHJvb3REaXI6ICcnLFxuICBxdWlldDogZmFsc2UsXG4gIHNoYXJkOiBudWxsLFxuICB1cGRhdGVTbmFwc2hvdHM6ICdtaXNzaW5nJyxcbiAgdXBkYXRlU291cmNlTWV0aG9kOiAncGF0Y2gnLFxuICB2ZXJzaW9uOiAnJyxcbiAgd29ya2VyczogMCxcbiAgd2ViU2VydmVyOiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZVJlZ2V4UGF0dGVybnMocGF0dGVybnM6IHN0cmluZyB8IFJlZ0V4cCB8IChzdHJpbmcgfCBSZWdFeHApW10pOiBKc29uUGF0dGVybltdIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhdHRlcm5zKSlcbiAgICBwYXR0ZXJucyA9IFtwYXR0ZXJuc107XG4gIHJldHVybiBwYXR0ZXJucy5tYXAocyA9PiB7XG4gICAgaWYgKHR5cGVvZiBzID09PSAnc3RyaW5nJylcbiAgICAgIHJldHVybiB7IHMgfTtcbiAgICByZXR1cm4geyByOiB7IHNvdXJjZTogcy5zb3VyY2UsIGZsYWdzOiBzLmZsYWdzIH0gfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlZ2V4UGF0dGVybnMocGF0dGVybnM6IEpzb25QYXR0ZXJuW10pOiAoc3RyaW5nIHwgUmVnRXhwKVtdIHtcbiAgcmV0dXJuIHBhdHRlcm5zLm1hcChwID0+IHtcbiAgICBpZiAocC5zICE9PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gcC5zO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHAuciEuc291cmNlLCBwLnIhLmZsYWdzKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlVGVzdENhc2VPdXRjb21lKHRlc3Q6IHJlcG9ydGVyVHlwZXMuVGVzdENhc2UpIHtcbiAgbGV0IHNraXBwZWQgPSAwO1xuICBsZXQgZGlkTm90UnVuID0gMDtcbiAgbGV0IGV4cGVjdGVkID0gMDtcbiAgbGV0IGludGVycnVwdGVkID0gMDtcbiAgbGV0IHVuZXhwZWN0ZWQgPSAwO1xuICBmb3IgKGNvbnN0IHJlc3VsdCBvZiB0ZXN0LnJlc3VsdHMpIHtcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2ludGVycnVwdGVkJykge1xuICAgICAgKytpbnRlcnJ1cHRlZDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdza2lwcGVkJyAmJiB0ZXN0LmV4cGVjdGVkU3RhdHVzID09PSAnc2tpcHBlZCcpIHtcbiAgICAgIC8vIE9ubHkgdGVzdHMgXCJleHBlY3RlZCB0byBiZSBza2lwcGVkXCIgYXJlIHNraXBwZWQuIFRoZXNlIHdlcmUgc3BlY2lmaWNhbGx5XG4gICAgICAvLyBtYXJrZWQgd2l0aCB0ZXN0LnNraXAgb3IgdGVzdC5maXhtZS5cbiAgICAgICsrc2tpcHBlZDtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdza2lwcGVkJykge1xuICAgICAgLy8gVGVzdHMgdGhhdCB3ZXJlIGV4cGVjdGVkIHRvIHJ1biwgYnV0IHdlcmUgc2tpcHBlZCBhcmUgXCJkaWQgbm90IHJ1blwiLlxuICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW46XG4gICAgICAvLyAtIHRlc3RpbmcgZmluaXNoZWQgZWFybHk7XG4gICAgICAvLyAtIHRlc3QgZmFpbHVyZSBwcmV2ZW50ZWQgb3RoZXIgdGVzdHMgaW4gdGhlIHNlcmlhbCBzdWl0ZSB0byBydW47XG4gICAgICAvLyAtIHByb2JhYmx5IG1vcmUgY2FzZXMhXG4gICAgICArK2RpZE5vdFJ1bjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5zdGF0dXMgPT09IHRlc3QuZXhwZWN0ZWRTdGF0dXMpIHtcbiAgICAgIC8vIEVpdGhlciBwYXNzZWQgYW5kIGV4cGVjdGVkIHRvIHBhc3MsIG9yIGZhaWxlZCBhbmQgZXhwZWN0ZWQgdG8gZmFpbC5cbiAgICAgICsrZXhwZWN0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICsrdW5leHBlY3RlZDtcbiAgICB9XG4gIH1cblxuICAvLyBUZXN0cyB0aGF0IHdlcmUgXCJza2lwcGVkIGFzIGV4cGVjdGVkXCIgYXJlIGNvbnNpZGVyZWQgZXF1YWwgdG8gXCJleHBlY3RlZFwiIGJlbG93LFxuICAvLyBiZWNhdXNlIHRoYXQncyB0aGUgZXhwZWN0ZWQgb3V0Y29tZS5cbiAgLy9cbiAgLy8gSG93ZXZlciwgd2Ugc3BlY2lmaWNhbGx5IGRpZmZlcmVudGlhdGUgdGhlIGNhc2Ugb2YgXCJvbmx5IHNraXBwZWRcIlxuICAvLyBhbmQgc2hvdyBpdCBhcyBcInNraXBwZWRcIiBpbiBhbGwgcmVwb3J0ZXJzLlxuICAvL1xuICAvLyBNb3JlIGV4b3RpYyBjYXNlcyBsaWtlIFwiZmFpbGVkIG9uIGZpcnN0IHJ1biBhbmQgc2tpcHBlZCBvbiByZXRyeVwiIGFyZSBmbGFreS5cbiAgaWYgKGV4cGVjdGVkID09PSAwICYmIHVuZXhwZWN0ZWQgPT09IDApXG4gICAgcmV0dXJuICdza2lwcGVkJzsgIC8vIGFsbCByZXN1bHRzIHdlcmUgc2tpcHBlZCBvciBpbnRlcnJ1cHRlZFxuICBpZiAodW5leHBlY3RlZCA9PT0gMClcbiAgICByZXR1cm4gJ2V4cGVjdGVkJzsgIC8vIG5vIGZhaWx1cmVzLCBqdXN0IGV4cGVjdGVkK3NraXBwZWRcbiAgaWYgKGV4cGVjdGVkID09PSAwICYmIHNraXBwZWQgPT09IDApXG4gICAgcmV0dXJuICd1bmV4cGVjdGVkJzsgIC8vIG9ubHkgZmFpbHVyZXNcbiAgcmV0dXJuICdmbGFreSc7ICAvLyBleHBlY3RlZCt1bmV4cGVjdGVkIG9yIHNraXBwZWQrdW5leHBlY3RlZFxufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IHR5cGUgVGVzdEl0ZW1TdGF0dXMgPSAnbm9uZScgfCAncnVubmluZycgfCAnc2NoZWR1bGVkJyB8ICdwYXNzZWQnIHwgJ2ZhaWxlZCcgfCAnc2tpcHBlZCc7XG5pbXBvcnQgdHlwZSAqIGFzIHJlcG9ydGVyVHlwZXMgZnJvbSAnLi4vLi4vdHlwZXMvdGVzdFJlcG9ydGVyJztcblxuLy8gLS0gUmV1c2UgYm91bmRhcnkgLS0gRXZlcnl0aGluZyBiZWxvdyB0aGlzIGxpbmUgaXMgcmV1c2VkIGluIHRoZSB2c2NvZGUgZXh0ZW5zaW9uLlxuXG5leHBvcnQgdHlwZSBUcmVlSXRlbUJhc2UgPSB7XG4gIGtpbmQ6ICdyb290JyB8ICdncm91cCcgfCAnY2FzZScgfCAndGVzdCcsXG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGxvY2F0aW9uOiByZXBvcnRlclR5cGVzLkxvY2F0aW9uLFxuICBkdXJhdGlvbjogbnVtYmVyO1xuICBwYXJlbnQ6IFRyZWVJdGVtIHwgdW5kZWZpbmVkO1xuICBjaGlsZHJlbjogVHJlZUl0ZW1bXTtcbiAgc3RhdHVzOiBUZXN0SXRlbVN0YXR1cztcbn07XG5cbmV4cG9ydCB0eXBlIEdyb3VwSXRlbSA9IFRyZWVJdGVtQmFzZSAmIHtcbiAga2luZDogJ2dyb3VwJztcbiAgc3ViS2luZDogJ2ZvbGRlcicgfCAnZmlsZScgfCAnZGVzY3JpYmUnO1xuICBoYXNMb2FkRXJyb3JzOiBib29sZWFuO1xuICBjaGlsZHJlbjogKFRlc3RDYXNlSXRlbSB8IEdyb3VwSXRlbSlbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFRlc3RDYXNlSXRlbSA9IFRyZWVJdGVtQmFzZSAmIHtcbiAga2luZDogJ2Nhc2UnLFxuICB0ZXN0czogcmVwb3J0ZXJUeXBlcy5UZXN0Q2FzZVtdO1xuICBjaGlsZHJlbjogVGVzdEl0ZW1bXTtcbiAgdGVzdDogcmVwb3J0ZXJUeXBlcy5UZXN0Q2FzZSB8IHVuZGVmaW5lZDtcbiAgcHJvamVjdDogcmVwb3J0ZXJUeXBlcy5GdWxsUHJvamVjdCB8IHVuZGVmaW5lZDtcbiAgdGFnczogQXJyYXk8c3RyaW5nPjtcbn07XG5cbmV4cG9ydCB0eXBlIFRlc3RJdGVtID0gVHJlZUl0ZW1CYXNlICYge1xuICBraW5kOiAndGVzdCcsXG4gIHRlc3Q6IHJlcG9ydGVyVHlwZXMuVGVzdENhc2U7XG4gIHByb2plY3Q6IHJlcG9ydGVyVHlwZXMuRnVsbFByb2plY3Q7XG59O1xuXG5leHBvcnQgdHlwZSBUcmVlSXRlbSA9IEdyb3VwSXRlbSB8IFRlc3RDYXNlSXRlbSB8IFRlc3RJdGVtO1xuXG5leHBvcnQgY2xhc3MgVGVzdFRyZWUge1xuICByb290SXRlbTogR3JvdXBJdGVtO1xuICBwcml2YXRlIF90cmVlSXRlbUJ5SWQgPSBuZXcgTWFwPHN0cmluZywgVHJlZUl0ZW0+KCk7XG4gIHByaXZhdGUgX3RyZWVJdGVtQnlUZXN0SWQgPSBuZXcgTWFwPHN0cmluZywgVGVzdEl0ZW0gfCBUZXN0Q2FzZUl0ZW0+KCk7XG4gIHJlYWRvbmx5IHBhdGhTZXBhcmF0b3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihyb290Rm9sZGVyOiBzdHJpbmcsIHJvb3RTdWl0ZTogcmVwb3J0ZXJUeXBlcy5TdWl0ZSB8IHVuZGVmaW5lZCwgbG9hZEVycm9yczogcmVwb3J0ZXJUeXBlcy5UZXN0RXJyb3JbXSwgcHJvamVjdEZpbHRlcnM6IE1hcDxzdHJpbmcsIGJvb2xlYW4+IHwgdW5kZWZpbmVkLCBwYXRoU2VwYXJhdG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWx0ZXJQcm9qZWN0cyA9IHByb2plY3RGaWx0ZXJzICYmIFsuLi5wcm9qZWN0RmlsdGVycy52YWx1ZXMoKV0uc29tZShCb29sZWFuKTtcbiAgICB0aGlzLnBhdGhTZXBhcmF0b3IgPSBwYXRoU2VwYXJhdG9yO1xuICAgIHRoaXMucm9vdEl0ZW0gPSB7XG4gICAgICBraW5kOiAnZ3JvdXAnLFxuICAgICAgc3ViS2luZDogJ2ZvbGRlcicsXG4gICAgICBpZDogcm9vdEZvbGRlcixcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGxvY2F0aW9uOiB7IGZpbGU6ICcnLCBsaW5lOiAwLCBjb2x1bW46IDAgfSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgcGFyZW50OiB1bmRlZmluZWQsXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBzdGF0dXM6ICdub25lJyxcbiAgICAgIGhhc0xvYWRFcnJvcnM6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5fdHJlZUl0ZW1CeUlkLnNldChyb290Rm9sZGVyLCB0aGlzLnJvb3RJdGVtKTtcblxuICAgIGNvbnN0IHZpc2l0U3VpdGUgPSAocHJvamVjdDogcmVwb3J0ZXJUeXBlcy5GdWxsUHJvamVjdCwgcGFyZW50U3VpdGU6IHJlcG9ydGVyVHlwZXMuU3VpdGUsIHBhcmVudEdyb3VwOiBHcm91cEl0ZW0pID0+IHtcbiAgICAgIGZvciAoY29uc3Qgc3VpdGUgb2YgcGFyZW50U3VpdGUuc3VpdGVzKSB7XG4gICAgICAgIGlmICghc3VpdGUudGl0bGUpIHtcbiAgICAgICAgICAvLyBGbGF0dGVuIGFub255bW91cyBkZXNjcmliZXMuXG4gICAgICAgICAgdmlzaXRTdWl0ZShwcm9qZWN0LCBzdWl0ZSwgcGFyZW50R3JvdXApO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdyb3VwID0gcGFyZW50R3JvdXAuY2hpbGRyZW4uZmluZChpdGVtID0+IGl0ZW0ua2luZCA9PT0gJ2dyb3VwJyAmJiBpdGVtLnRpdGxlID09PSBzdWl0ZS50aXRsZSkgYXMgR3JvdXBJdGVtIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIWdyb3VwKSB7XG4gICAgICAgICAgZ3JvdXAgPSB7XG4gICAgICAgICAgICBraW5kOiAnZ3JvdXAnLFxuICAgICAgICAgICAgc3ViS2luZDogJ2Rlc2NyaWJlJyxcbiAgICAgICAgICAgIGlkOiAnc3VpdGU6JyArIHBhcmVudFN1aXRlLnRpdGxlUGF0aCgpLmpvaW4oJ1xceDFlJykgKyAnXFx4MWUnICsgc3VpdGUudGl0bGUsICAvLyBhY2NvdW50IGZvciBhbm9ueW1vdXMgc3VpdGVzXG4gICAgICAgICAgICB0aXRsZTogc3VpdGUudGl0bGUsXG4gICAgICAgICAgICBsb2NhdGlvbjogc3VpdGUubG9jYXRpb24hLFxuICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudEdyb3VwLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgc3RhdHVzOiAnbm9uZScsXG4gICAgICAgICAgICBoYXNMb2FkRXJyb3JzOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuX2FkZENoaWxkKHBhcmVudEdyb3VwLCBncm91cCk7XG4gICAgICAgIH1cbiAgICAgICAgdmlzaXRTdWl0ZShwcm9qZWN0LCBzdWl0ZSwgZ3JvdXApO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHRlc3Qgb2YgcGFyZW50U3VpdGUudGVzdHMpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0ZXN0LnRpdGxlO1xuICAgICAgICBsZXQgdGVzdENhc2VJdGVtID0gcGFyZW50R3JvdXAuY2hpbGRyZW4uZmluZCh0ID0+IHQua2luZCAhPT0gJ2dyb3VwJyAmJiB0LnRpdGxlID09PSB0aXRsZSkgYXMgVGVzdENhc2VJdGVtO1xuICAgICAgICBpZiAoIXRlc3RDYXNlSXRlbSkge1xuICAgICAgICAgIHRlc3RDYXNlSXRlbSA9IHtcbiAgICAgICAgICAgIGtpbmQ6ICdjYXNlJyxcbiAgICAgICAgICAgIGlkOiAndGVzdDonICsgdGVzdC50aXRsZVBhdGgoKS5qb2luKCdcXHgxZScpLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudEdyb3VwLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgdGVzdHM6IFtdLFxuICAgICAgICAgICAgbG9jYXRpb246IHRlc3QubG9jYXRpb24sXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIHN0YXR1czogJ25vbmUnLFxuICAgICAgICAgICAgcHJvamVjdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGVzdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdGFnczogdGVzdC50YWdzLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5fYWRkQ2hpbGQocGFyZW50R3JvdXAsIHRlc3RDYXNlSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0ZXN0LnJlc3VsdHNbMF07XG4gICAgICAgIGxldCBzdGF0dXM6ICdub25lJyB8ICdydW5uaW5nJyB8ICdzY2hlZHVsZWQnIHwgJ3Bhc3NlZCcgfCAnZmFpbGVkJyB8ICdza2lwcGVkJyA9ICdub25lJztcbiAgICAgICAgaWYgKChyZXN1bHQgYXMgYW55KT8uW3N0YXR1c0V4XSA9PT0gJ3NjaGVkdWxlZCcpXG4gICAgICAgICAgc3RhdHVzID0gJ3NjaGVkdWxlZCc7XG4gICAgICAgIGVsc2UgaWYgKChyZXN1bHQgYXMgYW55KT8uW3N0YXR1c0V4XSA9PT0gJ3J1bm5pbmcnKVxuICAgICAgICAgIHN0YXR1cyA9ICdydW5uaW5nJztcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0Py5zdGF0dXMgPT09ICdza2lwcGVkJylcbiAgICAgICAgICBzdGF0dXMgPSAnc2tpcHBlZCc7XG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdD8uc3RhdHVzID09PSAnaW50ZXJydXB0ZWQnKVxuICAgICAgICAgIHN0YXR1cyA9ICdub25lJztcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0ICYmIHRlc3Qub3V0Y29tZSgpICE9PSAnZXhwZWN0ZWQnKVxuICAgICAgICAgIHN0YXR1cyA9ICdmYWlsZWQnO1xuICAgICAgICBlbHNlIGlmIChyZXN1bHQgJiYgdGVzdC5vdXRjb21lKCkgPT09ICdleHBlY3RlZCcpXG4gICAgICAgICAgc3RhdHVzID0gJ3Bhc3NlZCc7XG5cbiAgICAgICAgdGVzdENhc2VJdGVtLnRlc3RzLnB1c2godGVzdCk7XG4gICAgICAgIGNvbnN0IHRlc3RJdGVtOiBUZXN0SXRlbSA9IHtcbiAgICAgICAgICBraW5kOiAndGVzdCcsXG4gICAgICAgICAgaWQ6IHRlc3QuaWQsXG4gICAgICAgICAgdGl0bGU6IHByb2plY3QubmFtZSxcbiAgICAgICAgICBsb2NhdGlvbjogdGVzdC5sb2NhdGlvbiEsXG4gICAgICAgICAgdGVzdCxcbiAgICAgICAgICBwYXJlbnQ6IHRlc3RDYXNlSXRlbSxcbiAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgIGR1cmF0aW9uOiB0ZXN0LnJlc3VsdHMubGVuZ3RoID8gTWF0aC5tYXgoMCwgdGVzdC5yZXN1bHRzWzBdLmR1cmF0aW9uKSA6IDAsXG4gICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fYWRkQ2hpbGQodGVzdENhc2VJdGVtLCB0ZXN0SXRlbSk7XG4gICAgICAgIHRoaXMuX3RyZWVJdGVtQnlUZXN0SWQuc2V0KHRlc3QuaWQsIHRlc3RJdGVtKTtcbiAgICAgICAgdGVzdENhc2VJdGVtLmR1cmF0aW9uID0gKHRlc3RDYXNlSXRlbS5jaGlsZHJlbiBhcyBUZXN0SXRlbVtdKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLmR1cmF0aW9uLCAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBwcm9qZWN0U3VpdGUgb2Ygcm9vdFN1aXRlPy5zdWl0ZXMgfHwgW10pIHtcbiAgICAgIGlmIChmaWx0ZXJQcm9qZWN0cyAmJiAhcHJvamVjdEZpbHRlcnMuZ2V0KHByb2plY3RTdWl0ZS50aXRsZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZm9yIChjb25zdCBmaWxlU3VpdGUgb2YgcHJvamVjdFN1aXRlLnN1aXRlcykge1xuICAgICAgICBjb25zdCBmaWxlSXRlbSA9IHRoaXMuX2ZpbGVJdGVtKGZpbGVTdWl0ZS5sb2NhdGlvbiEuZmlsZS5zcGxpdChwYXRoU2VwYXJhdG9yKSwgdHJ1ZSk7XG4gICAgICAgIHZpc2l0U3VpdGUocHJvamVjdFN1aXRlLnByb2plY3QoKSEsIGZpbGVTdWl0ZSwgZmlsZUl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbG9hZEVycm9yIG9mIGxvYWRFcnJvcnMpIHtcbiAgICAgIGlmICghbG9hZEVycm9yLmxvY2F0aW9uKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNvbnN0IGZpbGVJdGVtID0gdGhpcy5fZmlsZUl0ZW0obG9hZEVycm9yLmxvY2F0aW9uLmZpbGUuc3BsaXQocGF0aFNlcGFyYXRvciksIHRydWUpO1xuICAgICAgZmlsZUl0ZW0uaGFzTG9hZEVycm9ycyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQ2hpbGQocGFyZW50OiBUcmVlSXRlbSwgY2hpbGQ6IFRyZWVJdGVtKSB7XG4gICAgcGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIGNoaWxkLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLl90cmVlSXRlbUJ5SWQuc2V0KGNoaWxkLmlkLCBjaGlsZCk7XG4gIH1cblxuICBmaWx0ZXJUcmVlKGZpbHRlclRleHQ6IHN0cmluZywgc3RhdHVzRmlsdGVyczogTWFwPHN0cmluZywgYm9vbGVhbj4sIHJ1bm5pbmdUZXN0SWRzOiBTZXQ8c3RyaW5nPiB8IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHRva2VucyA9IGZpbHRlclRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKTtcbiAgICBjb25zdCBmaWx0ZXJzU3RhdHVzZXMgPSBbLi4uc3RhdHVzRmlsdGVycy52YWx1ZXMoKV0uc29tZShCb29sZWFuKTtcblxuICAgIGNvbnN0IGZpbHRlciA9ICh0ZXN0Q2FzZTogVGVzdENhc2VJdGVtKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZVdpdGhUYWdzID0gWy4uLnRlc3RDYXNlLnRlc3RzWzBdLnRpdGxlUGF0aCgpLCAuLi50ZXN0Q2FzZS50ZXN0c1swXS50YWdzXS5qb2luKCcgJykudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICghdG9rZW5zLmV2ZXJ5KHRva2VuID0+IHRpdGxlV2l0aFRhZ3MuaW5jbHVkZXModG9rZW4pKSAmJiAhdGVzdENhc2UudGVzdHMuc29tZSh0ID0+IHJ1bm5pbmdUZXN0SWRzPy5oYXModC5pZCkpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB0ZXN0Q2FzZS5jaGlsZHJlbiA9ICh0ZXN0Q2FzZS5jaGlsZHJlbiBhcyBUZXN0SXRlbVtdKS5maWx0ZXIodGVzdCA9PiB7XG4gICAgICAgIHJldHVybiAhZmlsdGVyc1N0YXR1c2VzIHx8IHJ1bm5pbmdUZXN0SWRzPy5oYXModGVzdC50ZXN0LmlkKSB8fCBzdGF0dXNGaWx0ZXJzLmdldCh0ZXN0LnN0YXR1cyk7XG4gICAgICB9KTtcbiAgICAgIHRlc3RDYXNlLnRlc3RzID0gKHRlc3RDYXNlLmNoaWxkcmVuIGFzIFRlc3RJdGVtW10pLm1hcChjID0+IGMudGVzdCk7XG4gICAgICByZXR1cm4gISF0ZXN0Q2FzZS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfTtcblxuICAgIGNvbnN0IHZpc2l0ID0gKHRyZWVJdGVtOiBHcm91cEl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IG5ld0NoaWxkcmVuOiAoR3JvdXBJdGVtIHwgVGVzdENhc2VJdGVtKVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRyZWVJdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGlmIChjaGlsZC5raW5kID09PSAnY2FzZScpIHtcbiAgICAgICAgICBpZiAoZmlsdGVyKGNoaWxkKSlcbiAgICAgICAgICAgIG5ld0NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZpc2l0KGNoaWxkKTtcbiAgICAgICAgICBpZiAoY2hpbGQuY2hpbGRyZW4ubGVuZ3RoIHx8IGNoaWxkLmhhc0xvYWRFcnJvcnMpXG4gICAgICAgICAgICBuZXdDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdHJlZUl0ZW0uY2hpbGRyZW4gPSBuZXdDaGlsZHJlbjtcbiAgICB9O1xuICAgIHZpc2l0KHRoaXMucm9vdEl0ZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsZUl0ZW0oZmlsZVBhdGg6IHN0cmluZ1tdLCBpc0ZpbGU6IGJvb2xlYW4pOiBHcm91cEl0ZW0ge1xuICAgIGlmIChmaWxlUGF0aC5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5yb290SXRlbTtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVQYXRoLmpvaW4odGhpcy5wYXRoU2VwYXJhdG9yKTtcbiAgICBjb25zdCBleGlzdGluZ0ZpbGVJdGVtID0gdGhpcy5fdHJlZUl0ZW1CeUlkLmdldChmaWxlTmFtZSk7XG4gICAgaWYgKGV4aXN0aW5nRmlsZUl0ZW0pXG4gICAgICByZXR1cm4gZXhpc3RpbmdGaWxlSXRlbSBhcyBHcm91cEl0ZW07XG4gICAgY29uc3QgcGFyZW50RmlsZUl0ZW0gPSB0aGlzLl9maWxlSXRlbShmaWxlUGF0aC5zbGljZSgwLCBmaWxlUGF0aC5sZW5ndGggLSAxKSwgZmFsc2UpO1xuICAgIGNvbnN0IGZpbGVJdGVtOiBHcm91cEl0ZW0gPSB7XG4gICAgICBraW5kOiAnZ3JvdXAnLFxuICAgICAgc3ViS2luZDogaXNGaWxlID8gJ2ZpbGUnIDogJ2ZvbGRlcicsXG4gICAgICBpZDogZmlsZU5hbWUsXG4gICAgICB0aXRsZTogZmlsZVBhdGhbZmlsZVBhdGgubGVuZ3RoIC0gMV0sXG4gICAgICBsb2NhdGlvbjogeyBmaWxlOiBmaWxlTmFtZSwgbGluZTogMCwgY29sdW1uOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIHBhcmVudDogcGFyZW50RmlsZUl0ZW0sXG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBzdGF0dXM6ICdub25lJyxcbiAgICAgIGhhc0xvYWRFcnJvcnM6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5fYWRkQ2hpbGQocGFyZW50RmlsZUl0ZW0sIGZpbGVJdGVtKTtcbiAgICByZXR1cm4gZmlsZUl0ZW07XG4gIH1cblxuICBzb3J0QW5kUHJvcGFnYXRlU3RhdHVzKCkge1xuICAgIHNvcnRBbmRQcm9wYWdhdGVTdGF0dXModGhpcy5yb290SXRlbSk7XG4gIH1cblxuICBmbGF0dGVuRm9yU2luZ2xlUHJvamVjdCgpIHtcbiAgICBjb25zdCB2aXNpdCA9ICh0cmVlSXRlbTogVHJlZUl0ZW0pID0+IHtcbiAgICAgIGlmICh0cmVlSXRlbS5raW5kID09PSAnY2FzZScgJiYgdHJlZUl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRyZWVJdGVtLnByb2plY3QgPSB0cmVlSXRlbS5jaGlsZHJlblswXS5wcm9qZWN0O1xuICAgICAgICB0cmVlSXRlbS50ZXN0ID0gdHJlZUl0ZW0uY2hpbGRyZW5bMF0udGVzdDtcbiAgICAgICAgdHJlZUl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5fdHJlZUl0ZW1CeVRlc3RJZC5zZXQodHJlZUl0ZW0udGVzdC5pZCwgdHJlZUl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZUl0ZW0uY2hpbGRyZW4uZm9yRWFjaCh2aXNpdCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2aXNpdCh0aGlzLnJvb3RJdGVtKTtcbiAgfVxuXG4gIHNob3J0ZW5Sb290KCkge1xuICAgIGxldCBzaG9ydFJvb3QgPSB0aGlzLnJvb3RJdGVtO1xuICAgIHdoaWxlIChzaG9ydFJvb3QuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIHNob3J0Um9vdC5jaGlsZHJlblswXS5raW5kID09PSAnZ3JvdXAnICYmIHNob3J0Um9vdC5jaGlsZHJlblswXS5zdWJLaW5kID09PSAnZm9sZGVyJylcbiAgICAgIHNob3J0Um9vdCA9IHNob3J0Um9vdC5jaGlsZHJlblswXTtcbiAgICBzaG9ydFJvb3QubG9jYXRpb24gPSB0aGlzLnJvb3RJdGVtLmxvY2F0aW9uO1xuICAgIHRoaXMucm9vdEl0ZW0gPSBzaG9ydFJvb3Q7XG4gIH1cblxuICB0ZXN0SWRzKCk6IFNldDxzdHJpbmc+IHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCB2aXNpdCA9ICh0cmVlSXRlbTogVHJlZUl0ZW0pID0+IHtcbiAgICAgIGlmICh0cmVlSXRlbS5raW5kID09PSAnY2FzZScpXG4gICAgICAgIHRyZWVJdGVtLnRlc3RzLmZvckVhY2godCA9PiByZXN1bHQuYWRkKHQuaWQpKTtcbiAgICAgIHRyZWVJdGVtLmNoaWxkcmVuLmZvckVhY2godmlzaXQpO1xuICAgIH07XG4gICAgdmlzaXQodGhpcy5yb290SXRlbSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZpbGVOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgdmlzaXQgPSAodHJlZUl0ZW06IFRyZWVJdGVtKSA9PiB7XG4gICAgICBpZiAodHJlZUl0ZW0ua2luZCA9PT0gJ2dyb3VwJyAmJiB0cmVlSXRlbS5zdWJLaW5kID09PSAnZmlsZScpXG4gICAgICAgIHJlc3VsdC5hZGQodHJlZUl0ZW0uaWQpO1xuICAgICAgZWxzZVxuICAgICAgICB0cmVlSXRlbS5jaGlsZHJlbi5mb3JFYWNoKHZpc2l0KTtcbiAgICB9O1xuICAgIHZpc2l0KHRoaXMucm9vdEl0ZW0pO1xuICAgIHJldHVybiBbLi4ucmVzdWx0XTtcbiAgfVxuXG4gIGZsYXRUcmVlSXRlbXMoKTogVHJlZUl0ZW1bXSB7XG4gICAgY29uc3QgcmVzdWx0OiBUcmVlSXRlbVtdID0gW107XG4gICAgY29uc3QgdmlzaXQgPSAodHJlZUl0ZW06IFRyZWVJdGVtKSA9PiB7XG4gICAgICByZXN1bHQucHVzaCh0cmVlSXRlbSk7XG4gICAgICB0cmVlSXRlbS5jaGlsZHJlbi5mb3JFYWNoKHZpc2l0KTtcbiAgICB9O1xuICAgIHZpc2l0KHRoaXMucm9vdEl0ZW0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0cmVlSXRlbUJ5SWQoaWQ6IHN0cmluZyk6IFRyZWVJdGVtIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fdHJlZUl0ZW1CeUlkLmdldChpZCk7XG4gIH1cblxuICBjb2xsZWN0VGVzdElkcyh0cmVlSXRlbT86IFRyZWVJdGVtKTogU2V0PHN0cmluZz4ge1xuICAgIHJldHVybiB0cmVlSXRlbSA/IGNvbGxlY3RUZXN0SWRzKHRyZWVJdGVtKSA6IG5ldyBTZXQoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEFuZFByb3BhZ2F0ZVN0YXR1cyh0cmVlSXRlbTogVHJlZUl0ZW0pIHtcbiAgZm9yIChjb25zdCBjaGlsZCBvZiB0cmVlSXRlbS5jaGlsZHJlbilcbiAgICBzb3J0QW5kUHJvcGFnYXRlU3RhdHVzKGNoaWxkKTtcblxuICBpZiAodHJlZUl0ZW0ua2luZCA9PT0gJ2dyb3VwJykge1xuICAgIHRyZWVJdGVtLmNoaWxkcmVuLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IGZjID0gYS5sb2NhdGlvbi5maWxlLmxvY2FsZUNvbXBhcmUoYi5sb2NhdGlvbi5maWxlKTtcbiAgICAgIHJldHVybiBmYyB8fCBhLmxvY2F0aW9uLmxpbmUgLSBiLmxvY2F0aW9uLmxpbmU7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgYWxsUGFzc2VkID0gdHJlZUl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMDtcbiAgbGV0IGFsbFNraXBwZWQgPSB0cmVlSXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICBsZXQgaGFzRmFpbGVkID0gZmFsc2U7XG4gIGxldCBoYXNSdW5uaW5nID0gZmFsc2U7XG4gIGxldCBoYXNTY2hlZHVsZWQgPSBmYWxzZTtcblxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRyZWVJdGVtLmNoaWxkcmVuKSB7XG4gICAgYWxsU2tpcHBlZCA9IGFsbFNraXBwZWQgJiYgY2hpbGQuc3RhdHVzID09PSAnc2tpcHBlZCc7XG4gICAgYWxsUGFzc2VkID0gYWxsUGFzc2VkICYmIChjaGlsZC5zdGF0dXMgPT09ICdwYXNzZWQnIHx8IGNoaWxkLnN0YXR1cyA9PT0gJ3NraXBwZWQnKTtcbiAgICBoYXNGYWlsZWQgPSBoYXNGYWlsZWQgfHwgY2hpbGQuc3RhdHVzID09PSAnZmFpbGVkJztcbiAgICBoYXNSdW5uaW5nID0gaGFzUnVubmluZyB8fCBjaGlsZC5zdGF0dXMgPT09ICdydW5uaW5nJztcbiAgICBoYXNTY2hlZHVsZWQgPSBoYXNTY2hlZHVsZWQgfHwgY2hpbGQuc3RhdHVzID09PSAnc2NoZWR1bGVkJztcbiAgfVxuXG4gIGlmIChoYXNSdW5uaW5nKVxuICAgIHRyZWVJdGVtLnN0YXR1cyA9ICdydW5uaW5nJztcbiAgZWxzZSBpZiAoaGFzU2NoZWR1bGVkKVxuICAgIHRyZWVJdGVtLnN0YXR1cyA9ICdzY2hlZHVsZWQnO1xuICBlbHNlIGlmIChoYXNGYWlsZWQpXG4gICAgdHJlZUl0ZW0uc3RhdHVzID0gJ2ZhaWxlZCc7XG4gIGVsc2UgaWYgKGFsbFNraXBwZWQpXG4gICAgdHJlZUl0ZW0uc3RhdHVzID0gJ3NraXBwZWQnO1xuICBlbHNlIGlmIChhbGxQYXNzZWQpXG4gICAgdHJlZUl0ZW0uc3RhdHVzID0gJ3Bhc3NlZCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0VGVzdElkcyh0cmVlSXRlbTogVHJlZUl0ZW0pOiBTZXQ8c3RyaW5nPiB7XG4gIGNvbnN0IHRlc3RJZHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgdmlzaXQgPSAodHJlZUl0ZW06IFRyZWVJdGVtKSA9PiB7XG4gICAgaWYgKHRyZWVJdGVtLmtpbmQgPT09ICdjYXNlJylcbiAgICAgIHRyZWVJdGVtLnRlc3RzLm1hcCh0ID0+IHQuaWQpLmZvckVhY2goaWQgPT4gdGVzdElkcy5hZGQoaWQpKTtcbiAgICBlbHNlIGlmICh0cmVlSXRlbS5raW5kID09PSAndGVzdCcpXG4gICAgICB0ZXN0SWRzLmFkZCh0cmVlSXRlbS5pZCk7XG4gICAgZWxzZVxuICAgICAgdHJlZUl0ZW0uY2hpbGRyZW4/LmZvckVhY2godmlzaXQpO1xuICB9O1xuICB2aXNpdCh0cmVlSXRlbSk7XG4gIHJldHVybiB0ZXN0SWRzO1xufVxuXG5leHBvcnQgY29uc3Qgc3RhdHVzRXggPSBTeW1ib2woJ3N0YXR1c0V4Jyk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBUZWxlUmVwb3J0ZXJSZWNlaXZlciwgVGVsZVN1aXRlIH0gZnJvbSAnLi90ZWxlUmVjZWl2ZXInO1xuaW1wb3J0IHsgc3RhdHVzRXggfSBmcm9tICcuL3Rlc3RUcmVlJztcblxuaW1wb3J0IHR5cGUgKiBhcyByZXBvcnRlclR5cGVzIGZyb20gJy4uLy4uL3R5cGVzL3Rlc3RSZXBvcnRlcic7XG5pbXBvcnQgdHlwZSB7IFJlcG9ydGVyVjIgfSBmcm9tICcuLi9yZXBvcnRlcnMvcmVwb3J0ZXJWMic7XG5cbmV4cG9ydCB0eXBlIFRlbGVTdWl0ZVVwZGF0ZXJQcm9ncmVzcyA9IHtcbiAgdG90YWw6IG51bWJlcjtcbiAgcGFzc2VkOiBudW1iZXI7XG4gIGZhaWxlZDogbnVtYmVyO1xuICBza2lwcGVkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBUZWxlU3VpdGVVcGRhdGVyVGVzdE1vZGVsID0ge1xuICBjb25maWc6IHJlcG9ydGVyVHlwZXMuRnVsbENvbmZpZztcbiAgcm9vdFN1aXRlOiByZXBvcnRlclR5cGVzLlN1aXRlO1xuICBsb2FkRXJyb3JzOiByZXBvcnRlclR5cGVzLlRlc3RFcnJvcltdO1xuICBwcm9ncmVzczogVGVsZVN1aXRlVXBkYXRlclByb2dyZXNzO1xufTtcblxuZXhwb3J0IHR5cGUgVGVsZVN1aXRlVXBkYXRlck9wdGlvbnMgPSB7XG4gIG9uVXBkYXRlOiAoZm9yY2U/OiBib29sZWFuKSA9PiB2b2lkLFxuICBvbkVycm9yPzogKGVycm9yOiByZXBvcnRlclR5cGVzLlRlc3RFcnJvcikgPT4gdm9pZDtcbiAgcGF0aFNlcGFyYXRvcjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIFRlbGVTdWl0ZVVwZGF0ZXIge1xuICByb290U3VpdGU6IFRlbGVTdWl0ZSB8IHVuZGVmaW5lZDtcbiAgY29uZmlnOiByZXBvcnRlclR5cGVzLkZ1bGxDb25maWcgfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IGxvYWRFcnJvcnM6IHJlcG9ydGVyVHlwZXMuVGVzdEVycm9yW10gPSBbXTtcbiAgcmVhZG9ubHkgcHJvZ3Jlc3M6IFRlbGVTdWl0ZVVwZGF0ZXJQcm9ncmVzcyA9IHtcbiAgICB0b3RhbDogMCxcbiAgICBwYXNzZWQ6IDAsXG4gICAgZmFpbGVkOiAwLFxuICAgIHNraXBwZWQ6IDAsXG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVjZWl2ZXI6IFRlbGVSZXBvcnRlclJlY2VpdmVyO1xuICBwcml2YXRlIF9sYXN0UnVuUmVjZWl2ZXI6IFRlbGVSZXBvcnRlclJlY2VpdmVyIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9sYXN0UnVuVGVzdENvdW50ID0gMDtcbiAgcHJpdmF0ZSBfb3B0aW9uczogVGVsZVN1aXRlVXBkYXRlck9wdGlvbnM7XG4gIHByaXZhdGUgX3Rlc3RSZXN1bHRzU25hcHNob3Q6IE1hcDxzdHJpbmcsIHJlcG9ydGVyVHlwZXMuVGVzdFJlc3VsdFtdPiB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBUZWxlU3VpdGVVcGRhdGVyT3B0aW9ucykge1xuICAgIHRoaXMuX3JlY2VpdmVyID0gbmV3IFRlbGVSZXBvcnRlclJlY2VpdmVyKHRoaXMuX2NyZWF0ZVJlcG9ydGVyKCksIHtcbiAgICAgIG1lcmdlUHJvamVjdHM6IHRydWUsXG4gICAgICBtZXJnZVRlc3RDYXNlczogdHJ1ZSxcbiAgICAgIHJlc29sdmVQYXRoOiAocm9vdERpciwgcmVsYXRpdmVQYXRoKSA9PiByb290RGlyICsgb3B0aW9ucy5wYXRoU2VwYXJhdG9yICsgcmVsYXRpdmVQYXRoLFxuICAgICAgY2xlYXJQcmV2aW91c1Jlc3VsdHNXaGVuVGVzdEJlZ2luczogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVJlcG9ydGVyKCk6IFJlcG9ydGVyVjIge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiAoKSA9PiAndjInLFxuXG4gICAgICBvbkNvbmZpZ3VyZTogKGM6IHJlcG9ydGVyVHlwZXMuRnVsbENvbmZpZykgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGM7XG4gICAgICAgIC8vIFRlbGVSZXBvcnRSZWNlaXZlciBpcyBtZXJnaW5nIGV2ZXJ5dGhpbmcgaW50byBhIHNpbmdsZSBzdWl0ZSwgc28gd2hlbiB3ZVxuICAgICAgICAvLyBydW4gb25lIHRlc3QsIHdlIHN0aWxsIGdldCBtYW55IHRlc3RzIHZpYSByb290U3VpdGUuYWxsVGVzdHMoKS5sZW5ndGguXG4gICAgICAgIC8vIFRvIHdvcmsgYXJvdW5kIHRoYXQsIGhhdmUgYSBkZWRpY2F0ZWQgcGVyLXJ1biByZWNlaXZlciB0aGF0IHdpbGwgb25seSBoYXZlXG4gICAgICAgIC8vIHN1aXRlIGZvciBhIHNpbmdsZSB0ZXN0IHJ1biwgYW5kIGhlbmNlIHdpbGwgaGF2ZSBjb3JyZWN0IHRvdGFsLlxuICAgICAgICB0aGlzLl9sYXN0UnVuUmVjZWl2ZXIgPSBuZXcgVGVsZVJlcG9ydGVyUmVjZWl2ZXIoe1xuICAgICAgICAgIHZlcnNpb246ICgpID0+ICd2MicsXG4gICAgICAgICAgb25CZWdpbjogKHN1aXRlOiByZXBvcnRlclR5cGVzLlN1aXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0UnVuVGVzdENvdW50ID0gc3VpdGUuYWxsVGVzdHMoKS5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLl9sYXN0UnVuUmVjZWl2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgbWVyZ2VQcm9qZWN0czogdHJ1ZSxcbiAgICAgICAgICBtZXJnZVRlc3RDYXNlczogZmFsc2UsXG4gICAgICAgICAgcmVzb2x2ZVBhdGg6IChyb290RGlyLCByZWxhdGl2ZVBhdGgpID0+IHJvb3REaXIgKyB0aGlzLl9vcHRpb25zLnBhdGhTZXBhcmF0b3IgKyByZWxhdGl2ZVBhdGgsXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgb25CZWdpbjogKHN1aXRlOiByZXBvcnRlclR5cGVzLlN1aXRlKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5yb290U3VpdGUpXG4gICAgICAgICAgdGhpcy5yb290U3VpdGUgPSBzdWl0ZSBhcyBUZWxlU3VpdGU7XG4gICAgICAgIC8vIEFzIHNvb24gYXMgbmV3IHRlc3QgdHJlZSBpcyBidWlsdCBhZGQgcHJldmlvdXMgcmVzdWx0cywgYmVmb3JlIGNhbGxpbmcgb25VcGRhdGVcbiAgICAgICAgLy8gdG8gYXZvaWQgZmxhc2hpbmcgZW1wdHkgcmVzdWx0cyBpbiB0aGUgVUkuXG4gICAgICAgIGlmICh0aGlzLl90ZXN0UmVzdWx0c1NuYXBzaG90KSB7XG4gICAgICAgICAgZm9yIChjb25zdCB0ZXN0IG9mIHRoaXMucm9vdFN1aXRlLmFsbFRlc3RzKCkpXG4gICAgICAgICAgICB0ZXN0LnJlc3VsdHMgPSB0aGlzLl90ZXN0UmVzdWx0c1NuYXBzaG90Py5nZXQodGVzdC5pZCkgfHwgdGVzdC5yZXN1bHRzO1xuICAgICAgICAgIHRoaXMuX3Rlc3RSZXN1bHRzU25hcHNob3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9ncmVzcy50b3RhbCA9IHRoaXMuX2xhc3RSdW5UZXN0Q291bnQ7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MucGFzc2VkID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzcy5mYWlsZWQgPSAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzLnNraXBwZWQgPSAwO1xuICAgICAgICB0aGlzLl9vcHRpb25zLm9uVXBkYXRlKHRydWUpO1xuICAgICAgfSxcblxuICAgICAgb25FbmQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5vblVwZGF0ZSh0cnVlKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uVGVzdEJlZ2luOiAodGVzdDogcmVwb3J0ZXJUeXBlcy5UZXN0Q2FzZSwgdGVzdFJlc3VsdDogcmVwb3J0ZXJUeXBlcy5UZXN0UmVzdWx0KSA9PiB7XG4gICAgICAgICh0ZXN0UmVzdWx0IGFzIGFueSlbc3RhdHVzRXhdID0gJ3J1bm5pbmcnO1xuICAgICAgICB0aGlzLl9vcHRpb25zLm9uVXBkYXRlKCk7XG4gICAgICB9LFxuXG4gICAgICBvblRlc3RFbmQ6ICh0ZXN0OiByZXBvcnRlclR5cGVzLlRlc3RDYXNlLCB0ZXN0UmVzdWx0OiByZXBvcnRlclR5cGVzLlRlc3RSZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHRlc3Qub3V0Y29tZSgpID09PSAnc2tpcHBlZCcpXG4gICAgICAgICAgKyt0aGlzLnByb2dyZXNzLnNraXBwZWQ7XG4gICAgICAgIGVsc2UgaWYgKHRlc3Qub3V0Y29tZSgpID09PSAndW5leHBlY3RlZCcpXG4gICAgICAgICAgKyt0aGlzLnByb2dyZXNzLmZhaWxlZDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICsrdGhpcy5wcm9ncmVzcy5wYXNzZWQ7XG4gICAgICAgICh0ZXN0UmVzdWx0IGFzIGFueSlbc3RhdHVzRXhdID0gdGVzdFJlc3VsdC5zdGF0dXM7XG4gICAgICAgIHRoaXMuX29wdGlvbnMub25VcGRhdGUoKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uRXJyb3I6IChlcnJvcjogcmVwb3J0ZXJUeXBlcy5UZXN0RXJyb3IpID0+IHRoaXMuX2hhbmRsZU9uRXJyb3IoZXJyb3IpLFxuXG4gICAgICBwcmludHNUb1N0ZGlvOiAoKSA9PiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgcHJvY2Vzc0dsb2JhbFJlcG9ydChyZXBvcnQ6IGFueVtdKSB7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBuZXcgVGVsZVJlcG9ydGVyUmVjZWl2ZXIoe1xuICAgICAgdmVyc2lvbjogKCkgPT4gJ3YyJyxcbiAgICAgIG9uQ29uZmlndXJlOiAoYzogcmVwb3J0ZXJUeXBlcy5GdWxsQ29uZmlnKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gYztcbiAgICAgIH0sXG4gICAgICBvbkVycm9yOiAoZXJyb3I6IHJlcG9ydGVyVHlwZXMuVGVzdEVycm9yKSA9PiB0aGlzLl9oYW5kbGVPbkVycm9yKGVycm9yKVxuICAgIH0pO1xuICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiByZXBvcnQpXG4gICAgICB2b2lkIHJlY2VpdmVyLmRpc3BhdGNoKG1lc3NhZ2UpO1xuICB9XG5cbiAgcHJvY2Vzc0xpc3RSZXBvcnQocmVwb3J0OiBhbnlbXSkge1xuICAgIC8vIFNhdmUgdGVzdCByZXN1bHRzIGFuZCByZXNldCBhbGwgcHJvamVjdHMsIHRoZSByZXN1bHRzIHdpbGwgYmUgcmVzdG9yZWQgYWZ0ZXJcbiAgICAvLyBuZXcgcHJvamVjdCBzdHJ1Y3R1cmUgaXMgYnVpbHQuXG4gICAgY29uc3QgdGVzdHMgPSB0aGlzLnJvb3RTdWl0ZT8uYWxsVGVzdHMoKSB8fCBbXTtcbiAgICB0aGlzLl90ZXN0UmVzdWx0c1NuYXBzaG90ID0gbmV3IE1hcCh0ZXN0cy5tYXAodGVzdCA9PiBbdGVzdC5pZCwgdGVzdC5yZXN1bHRzXSkpO1xuICAgIHRoaXMuX3JlY2VpdmVyLnJlc2V0KCk7XG4gICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIHJlcG9ydClcbiAgICAgIHZvaWQgdGhpcy5fcmVjZWl2ZXIuZGlzcGF0Y2gobWVzc2FnZSk7XG4gIH1cblxuICBwcm9jZXNzVGVzdFJlcG9ydEV2ZW50KG1lc3NhZ2U6IGFueSkge1xuICAgIC8vIFRoZSBvcmRlciBvZiByZWNlaXZlciBkaXNwYXRjaGVzIG1hdHRlcnMgaGVyZSwgd2Ugd2FudCB0byBhc3NpZ24gYGxhc3RSdW5UZXN0Q291bnRgXG4gICAgLy8gYmVmb3JlIHdlIHVzZSBpdC5cbiAgICB0aGlzLl9sYXN0UnVuUmVjZWl2ZXI/LmRpc3BhdGNoKG1lc3NhZ2UpPy5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIHRoaXMuX3JlY2VpdmVyLmRpc3BhdGNoKG1lc3NhZ2UpPy5jYXRjaCgoKSA9PiB7IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT25FcnJvcihlcnJvcjogcmVwb3J0ZXJUeXBlcy5UZXN0RXJyb3IpIHtcbiAgICB0aGlzLmxvYWRFcnJvcnMucHVzaChlcnJvcik7XG4gICAgdGhpcy5fb3B0aW9ucy5vbkVycm9yPy4oZXJyb3IpO1xuICAgIHRoaXMuX29wdGlvbnMub25VcGRhdGUoKTtcbiAgfVxuXG4gIGFzTW9kZWwoKTogVGVsZVN1aXRlVXBkYXRlclRlc3RNb2RlbCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvb3RTdWl0ZTogdGhpcy5yb290U3VpdGUgfHwgbmV3IFRlbGVTdWl0ZSgnJywgJ3Jvb3QnKSxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWchLFxuICAgICAgbG9hZEVycm9yczogdGhpcy5sb2FkRXJyb3JzLFxuICAgICAgcHJvZ3Jlc3M6IHRoaXMucHJvZ3Jlc3MsXG4gICAgfTtcbiAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3h0ZXJtV3JhcHBlci5jc3MnO1xuaW1wb3J0IHR5cGUgeyBJVGhlbWUsIFRlcm1pbmFsIH0gZnJvbSAneHRlcm0nO1xuaW1wb3J0IHR5cGUgeyBGaXRBZGRvbiB9IGZyb20gJ3h0ZXJtLWFkZG9uLWZpdCc7XG5pbXBvcnQgdHlwZSB7IFh0ZXJtTW9kdWxlIH0gZnJvbSAnLi94dGVybU1vZHVsZSc7XG5pbXBvcnQgeyBjdXJyZW50VGhlbWUsIGFkZFRoZW1lTGlzdGVuZXIsIHJlbW92ZVRoZW1lTGlzdGVuZXIgfSBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgeyB1c2VNZWFzdXJlIH0gZnJvbSAnLi4vdWlVdGlscyc7XG5cbmV4cG9ydCB0eXBlIFh0ZXJtRGF0YVNvdXJjZSA9IHtcbiAgcGVuZGluZzogKHN0cmluZyB8IFVpbnQ4QXJyYXkpW107XG4gIGNsZWFyOiAoKSA9PiB2b2lkLFxuICB3cml0ZTogKGRhdGE6IHN0cmluZyB8IFVpbnQ4QXJyYXkpID0+IHZvaWQ7XG4gIHJlc2l6ZTogKGNvbHM6IG51bWJlciwgcm93czogbnVtYmVyKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IFh0ZXJtV3JhcHBlcjogUmVhY3QuRkM8eyBzb3VyY2U6IFh0ZXJtRGF0YVNvdXJjZSB9PiA9ICh7XG4gIHNvdXJjZSxcbn0pID0+IHtcbiAgY29uc3QgW21lYXN1cmUsIHh0ZXJtRWxlbWVudF0gPSB1c2VNZWFzdXJlPEhUTUxEaXZFbGVtZW50PigpO1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlKGN1cnJlbnRUaGVtZSgpKTtcbiAgY29uc3QgW21vZHVsZVByb21pc2VdID0gUmVhY3QudXNlU3RhdGU8UHJvbWlzZTxYdGVybU1vZHVsZT4+KGltcG9ydCgnLi94dGVybU1vZHVsZScpLnRoZW4obSA9PiBtLmRlZmF1bHQpKTtcbiAgY29uc3QgdGVybWluYWwgPSBSZWFjdC51c2VSZWY8eyB0ZXJtaW5hbDogVGVybWluYWwsIGZpdEFkZG9uOiBGaXRBZGRvbiB9IHwgbnVsbD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhZGRUaGVtZUxpc3RlbmVyKHNldFRoZW1lKTtcbiAgICByZXR1cm4gKCkgPT4gcmVtb3ZlVGhlbWVMaXN0ZW5lcihzZXRUaGVtZSk7XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9sZFNvdXJjZVdyaXRlID0gc291cmNlLndyaXRlO1xuICAgIGNvbnN0IG9sZFNvdXJjZUNsZWFyID0gc291cmNlLmNsZWFyO1xuXG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIC8vIEFsd2F5cyBsb2FkIHRoZSBtb2R1bGUgZmlyc3QuXG4gICAgICBjb25zdCB7IFRlcm1pbmFsLCBGaXRBZGRvbiB9ID0gYXdhaXQgbW9kdWxlUHJvbWlzZTtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB4dGVybUVsZW1lbnQuY3VycmVudDtcbiAgICAgIGlmICghZWxlbWVudClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBjb25zdCB0ZXJtaW5hbFRoZW1lID0gdGhlbWUgPT09ICdkYXJrLW1vZGUnID8gZGFya1RoZW1lIDogbGlnaHRUaGVtZTtcbiAgICAgIGlmICh0ZXJtaW5hbC5jdXJyZW50ICYmIHRlcm1pbmFsLmN1cnJlbnQudGVybWluYWwub3B0aW9ucy50aGVtZSA9PT0gdGVybWluYWxUaGVtZSlcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICBpZiAodGVybWluYWwuY3VycmVudClcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgICBjb25zdCBuZXdUZXJtaW5hbCA9IG5ldyBUZXJtaW5hbCh7XG4gICAgICAgIGNvbnZlcnRFb2w6IHRydWUsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgc2Nyb2xsYmFjazogMTAwMDAsXG4gICAgICAgIGZvbnRGYW1pbHk6ICd2YXIoLS12c2NvZGUtZWRpdG9yLWZvbnQtZmFtaWx5KScsXG4gICAgICAgIHRoZW1lOiB0ZXJtaW5hbFRoZW1lLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZpdEFkZG9uID0gbmV3IEZpdEFkZG9uKCk7XG4gICAgICBuZXdUZXJtaW5hbC5sb2FkQWRkb24oZml0QWRkb24pO1xuICAgICAgZm9yIChjb25zdCBwIG9mIHNvdXJjZS5wZW5kaW5nKVxuICAgICAgICBuZXdUZXJtaW5hbC53cml0ZShwKTtcbiAgICAgIHNvdXJjZS53cml0ZSA9IChkYXRhID0+IHtcbiAgICAgICAgc291cmNlLnBlbmRpbmcucHVzaChkYXRhKTtcbiAgICAgICAgbmV3VGVybWluYWwud3JpdGUoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHNvdXJjZS5jbGVhciA9ICgpID0+IHtcbiAgICAgICAgc291cmNlLnBlbmRpbmcgPSBbXTtcbiAgICAgICAgbmV3VGVybWluYWwuY2xlYXIoKTtcbiAgICAgIH07XG4gICAgICBuZXdUZXJtaW5hbC5vcGVuKGVsZW1lbnQpO1xuICAgICAgZml0QWRkb24uZml0KCk7XG4gICAgICB0ZXJtaW5hbC5jdXJyZW50ID0geyB0ZXJtaW5hbDogbmV3VGVybWluYWwsIGZpdEFkZG9uIH07XG4gICAgfSkoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc291cmNlLmNsZWFyID0gb2xkU291cmNlQ2xlYXI7XG4gICAgICBzb3VyY2Uud3JpdGUgPSBvbGRTb3VyY2VXcml0ZTtcbiAgICB9O1xuICB9LCBbbW9kdWxlUHJvbWlzZSwgdGVybWluYWwsIHh0ZXJtRWxlbWVudCwgc291cmNlLCB0aGVtZV0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRml0IHJlYWRzIGRhdGEgZnJvbSB0aGUgdGVybWluYWwgaXRzZWxmLCB3aGljaCB1cGRhdGVzIGxhemlseSwgcHJvYmFibHkgb24gc29tZSB0aW1lclxuICAgIC8vIG9yIG11dGF0aW9uIG9ic2VydmVyLiBXb3JrIGFyb3VuZCBpdC5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGVybWluYWwuY3VycmVudClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdGVybWluYWwuY3VycmVudC5maXRBZGRvbi5maXQoKTtcbiAgICAgIHNvdXJjZS5yZXNpemUodGVybWluYWwuY3VycmVudC50ZXJtaW5hbC5jb2xzLCB0ZXJtaW5hbC5jdXJyZW50LnRlcm1pbmFsLnJvd3MpO1xuICAgIH0sIDI1MCk7XG4gIH0sIFttZWFzdXJlLCBzb3VyY2VdKTtcblxuICByZXR1cm4gPGRpdiBkYXRhLXRlc3RpZD0nb3V0cHV0JyBjbGFzc05hbWU9J3h0ZXJtLXdyYXBwZXInIHN0eWxlPXt7IGZsZXg6ICdhdXRvJyB9fSByZWY9e3h0ZXJtRWxlbWVudH0+PC9kaXY+O1xufTtcblxuY29uc3QgbGlnaHRUaGVtZTogSVRoZW1lID0ge1xuICBmb3JlZ3JvdW5kOiAnIzM4M2E0MicsXG4gIGJhY2tncm91bmQ6ICcjZmFmYWZhJyxcbiAgY3Vyc29yOiAnIzM4M2E0MicsXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHJlZDogJyNlNDU2NDknLFxuICBncmVlbjogJyM1MGExNGYnLFxuICB5ZWxsb3c6ICcjYzE4NDAxJyxcbiAgYmx1ZTogJyM0MDc4ZjInLFxuICBtYWdlbnRhOiAnI2E2MjZhNCcsXG4gIGN5YW46ICcjMDE4NGJjJyxcbiAgd2hpdGU6ICcjYTBhMGEwJyxcbiAgYnJpZ2h0QmxhY2s6ICcjMDAwMDAwJyxcbiAgYnJpZ2h0UmVkOiAnI2UwNmM3NScsXG4gIGJyaWdodEdyZWVuOiAnIzk4YzM3OScsXG4gIGJyaWdodFllbGxvdzogJyNkMTlhNjYnLFxuICBicmlnaHRCbHVlOiAnIzQwNzhmMicsXG4gIGJyaWdodE1hZ2VudGE6ICcjYTYyNmE0JyxcbiAgYnJpZ2h0Q3lhbjogJyMwMTg0YmMnLFxuICBicmlnaHRXaGl0ZTogJyMzODNhNDInLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kOiAnI2Q3ZDdkNycsXG4gIHNlbGVjdGlvbkZvcmVncm91bmQ6ICcjMzgzYTQyJyxcbn07XG5cbmNvbnN0IGRhcmtUaGVtZTogSVRoZW1lID0ge1xuICBmb3JlZ3JvdW5kOiAnI2Y4ZjhmMicsXG4gIGJhY2tncm91bmQ6ICcjMWUxZTFlJyxcbiAgY3Vyc29yOiAnI2Y4ZjhmMCcsXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIHJlZDogJyNmZjU1NTUnLFxuICBncmVlbjogJyM1MGZhN2InLFxuICB5ZWxsb3c6ICcjZjFmYThjJyxcbiAgYmx1ZTogJyNiZDkzZjknLFxuICBtYWdlbnRhOiAnI2ZmNzljNicsXG4gIGN5YW46ICcjOGJlOWZkJyxcbiAgd2hpdGU6ICcjYmZiZmJmJyxcbiAgYnJpZ2h0QmxhY2s6ICcjNGQ0ZDRkJyxcbiAgYnJpZ2h0UmVkOiAnI2ZmNmU2ZScsXG4gIGJyaWdodEdyZWVuOiAnIzY5ZmY5NCcsXG4gIGJyaWdodFllbGxvdzogJyNmZmZmYTUnLFxuICBicmlnaHRCbHVlOiAnI2Q2YWNmZicsXG4gIGJyaWdodE1hZ2VudGE6ICcjZmY5MmRmJyxcbiAgYnJpZ2h0Q3lhbjogJyNhNGZmZmYnLFxuICBicmlnaHRXaGl0ZTogJyNlNmU2ZTYnLFxuICBzZWxlY3Rpb25CYWNrZ3JvdW5kOiAnIzQ0NDc1YScsXG4gIHNlbGVjdGlvbkZvcmVncm91bmQ6ICcjZjhmOGYyJyxcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgJ0B3ZWIvY29tbW9uLmNzcyc7XG5pbXBvcnQgeyBFeHBhbmRhYmxlIH0gZnJvbSAnQHdlYi9jb21wb25lbnRzL2V4cGFuZGFibGUnO1xuaW1wb3J0ICdAd2ViL3RoaXJkX3BhcnR5L3ZzY29kZS9jb2RpY29uLmNzcyc7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gJ0B3ZWIvdWlVdGlscyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL3VpTW9kZUZpbHRlcnNWaWV3LmNzcyc7XG5pbXBvcnQgdHlwZSB7IFRlbGVTdWl0ZVVwZGF0ZXJUZXN0TW9kZWwgfSBmcm9tICdAdGVzdElzb21vcnBoaWMvdGVsZVN1aXRlVXBkYXRlcic7XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJzVmlldzogUmVhY3QuRkM8e1xuICBmaWx0ZXJUZXh0OiBzdHJpbmc7XG4gIHNldEZpbHRlclRleHQ6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG4gIHN0YXR1c0ZpbHRlcnM6IE1hcDxzdHJpbmcsIGJvb2xlYW4+O1xuICBzZXRTdGF0dXNGaWx0ZXJzOiAoZmlsdGVyczogTWFwPHN0cmluZywgYm9vbGVhbj4pID0+IHZvaWQ7XG4gIHByb2plY3RGaWx0ZXJzOiBNYXA8c3RyaW5nLCBib29sZWFuPjtcbiAgc2V0UHJvamVjdEZpbHRlcnM6IChmaWx0ZXJzOiBNYXA8c3RyaW5nLCBib29sZWFuPikgPT4gdm9pZDtcbiAgdGVzdE1vZGVsOiBUZWxlU3VpdGVVcGRhdGVyVGVzdE1vZGVsIHwgdW5kZWZpbmVkLFxuICBydW5UZXN0czogKCkgPT4gdm9pZDtcbn0+ID0gKHsgZmlsdGVyVGV4dCwgc2V0RmlsdGVyVGV4dCwgc3RhdHVzRmlsdGVycywgc2V0U3RhdHVzRmlsdGVycywgcHJvamVjdEZpbHRlcnMsIHNldFByb2plY3RGaWx0ZXJzLCB0ZXN0TW9kZWwsIHJ1blRlc3RzIH0pID0+IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdGF0dXNMaW5lID0gWy4uLnN0YXR1c0ZpbHRlcnMuZW50cmllcygpXS5maWx0ZXIoKFtfLCB2XSkgPT4gdikubWFwKChbc10pID0+IHMpLmpvaW4oJyAnKSB8fCAnYWxsJztcbiAgY29uc3QgcHJvamVjdHNMaW5lID0gWy4uLnByb2plY3RGaWx0ZXJzLmVudHJpZXMoKV0uZmlsdGVyKChbXywgdl0pID0+IHYpLm1hcCgoW3BdKSA9PiBwKS5qb2luKCcgJykgfHwgJ2FsbCc7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVycyc+XG4gICAgPEV4cGFuZGFibGVcbiAgICAgIGV4cGFuZGVkPXtleHBhbmRlZH1cbiAgICAgIHNldEV4cGFuZGVkPXtzZXRFeHBhbmRlZH1cbiAgICAgIHRpdGxlPXs8aW5wdXQgcmVmPXtpbnB1dFJlZn0gdHlwZT0nc2VhcmNoJyBwbGFjZWhvbGRlcj0nRmlsdGVyIChlLmcuIHRleHQsIEB0YWcpJyBzcGVsbENoZWNrPXtmYWxzZX0gdmFsdWU9e2ZpbHRlclRleHR9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICBzZXRGaWx0ZXJUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpXG4gICAgICAgICAgICBydW5UZXN0cygpO1xuICAgICAgICB9fSAvPn0+XG4gICAgPC9FeHBhbmRhYmxlPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmaWx0ZXItc3VtbWFyeScgdGl0bGU9eydTdGF0dXM6ICcgKyBzdGF0dXNMaW5lICsgJ1xcblByb2plY3RzOiAnICsgcHJvamVjdHNMaW5lfSBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCghZXhwYW5kZWQpfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmlsdGVyLWxhYmVsJz5TdGF0dXM6PC9zcGFuPiB7c3RhdHVzTGluZX1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZmlsdGVyLWxhYmVsJz5Qcm9qZWN0czo8L3NwYW4+IHtwcm9qZWN0c0xpbmV9XG4gICAgPC9kaXY+XG4gICAge2V4cGFuZGVkICYmIDxkaXYgY2xhc3NOYW1lPSdoYm94JyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxNCwgbWF4SGVpZ2h0OiAyMDAsIG92ZXJmbG93WTogJ2F1dG8nIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbHRlci1saXN0JyByb2xlPSdsaXN0JyBkYXRhLXRlc3RpZD0nc3RhdHVzLWZpbHRlcnMnPlxuICAgICAgICB7Wy4uLnN0YXR1c0ZpbHRlcnMuZW50cmllcygpXS5tYXAoKFtzdGF0dXMsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWVudHJ5JyBrZXk9e3N0YXR1c30gcm9sZT0nbGlzdGl0ZW0nPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ZhbHVlfSBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgTWFwKHN0YXR1c0ZpbHRlcnMpO1xuICAgICAgICAgICAgICAgIGNvcHkuc2V0KHN0YXR1cywgIWNvcHkuZ2V0KHN0YXR1cykpO1xuICAgICAgICAgICAgICAgIHNldFN0YXR1c0ZpbHRlcnMoY29weSk7XG4gICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgPGRpdj57c3RhdHVzfTwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWxpc3QnIHJvbGU9J2xpc3QnIGRhdGEtdGVzdGlkPSdwcm9qZWN0LWZpbHRlcnMnPlxuICAgICAgICB7Wy4uLnByb2plY3RGaWx0ZXJzLmVudHJpZXMoKV0ubWFwKChbcHJvamVjdE5hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nZmlsdGVyLWVudHJ5JyBrZXk9e3Byb2plY3ROYW1lfSAgcm9sZT0nbGlzdGl0ZW0nPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ZhbHVlfSBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgTWFwKHByb2plY3RGaWx0ZXJzKTtcbiAgICAgICAgICAgICAgICBjb3B5LnNldChwcm9qZWN0TmFtZSwgIWNvcHkuZ2V0KHByb2plY3ROYW1lKSk7XG4gICAgICAgICAgICAgICAgc2V0UHJvamVjdEZpbHRlcnMoY29weSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnRmlsZSA9IHRlc3RNb2RlbD8uY29uZmlnPy5jb25maWdGaWxlO1xuICAgICAgICAgICAgICAgIGlmIChjb25maWdGaWxlKVxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3Muc2V0T2JqZWN0KGNvbmZpZ0ZpbGUgKyAnOnByb2plY3RzJywgWy4uLmNvcHkuZW50cmllcygpXS5maWx0ZXIoKFtfLCB2XSkgPT4gdikubWFwKChba10pID0+IGspKTtcbiAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICA8ZGl2Pntwcm9qZWN0TmFtZSB8fCAndW50aXRsZWQnfTwvZGl2PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+fVxuICA8L2Rpdj47XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBjbHN4IH0gZnJvbSAnQHdlYi91aVV0aWxzJztcbmltcG9ydCAnLi90YWcuY3NzJztcblxuZXhwb3J0IGNvbnN0IFRhZ1ZpZXcgPSAoeyB0YWcsIHN0eWxlLCBvbkNsaWNrIH06IHsgdGFnOiBzdHJpbmcsIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcywgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkIH0pID0+IHtcbiAgcmV0dXJuIDxzcGFuXG4gICAgY2xhc3NOYW1lPXtjbHN4KCd0YWcnLCBgdGFnLWNvbG9yLSR7dGFnTmFtZVRvQ29sb3IodGFnKX1gKX1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIHN0eWxlPXt7IG1hcmdpbjogJzZweCAwIDAgNnB4JywgLi4uc3R5bGUgfX1cbiAgICB0aXRsZT17YENsaWNrIHRvIGZpbHRlciBieSB0YWc6ICR7dGFnfWB9XG4gID5cbiAgICB7dGFnfVxuICA8L3NwYW4+O1xufTtcblxuLy8gaGFzaCBzdHJpbmcgdG8gaW50ZWdlciBpbiByYW5nZSBbMCwgNl0gZm9yIGNvbG9yIGluZGV4LCB0byBnZXQgc2FtZSBjb2xvciBmb3Igc2FtZSB0YWdcbmZ1bmN0aW9uIHRhZ05hbWVUb0NvbG9yKHN0cjogc3RyaW5nKSB7XG4gIGxldCBoYXNoID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgaGFzaCA9IHN0ci5jaGFyQ29kZUF0KGkpICsgKChoYXNoIDw8IDgpIC0gaGFzaCk7XG4gIHJldHVybiBNYXRoLmFicyhoYXNoICUgNik7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFRyZWVJdGVtIH0gZnJvbSAnQHRlc3RJc29tb3JwaGljL3Rlc3RUcmVlJztcbmltcG9ydCB0eXBlIHsgVGVzdFRyZWUgfSBmcm9tICdAdGVzdElzb21vcnBoaWMvdGVzdFRyZWUnO1xuaW1wb3J0ICdAd2ViL2NvbW1vbi5jc3MnO1xuaW1wb3J0IHsgVG9vbGJhciB9IGZyb20gJ0B3ZWIvY29tcG9uZW50cy90b29sYmFyJztcbmltcG9ydCB7IFRvb2xiYXJCdXR0b24gfSBmcm9tICdAd2ViL2NvbXBvbmVudHMvdG9vbGJhckJ1dHRvbic7XG5pbXBvcnQgdHlwZSB7IFRyZWVTdGF0ZSB9IGZyb20gJ0B3ZWIvY29tcG9uZW50cy90cmVlVmlldyc7XG5pbXBvcnQgeyBUcmVlVmlldyB9IGZyb20gJ0B3ZWIvY29tcG9uZW50cy90cmVlVmlldyc7XG5pbXBvcnQgJ0B3ZWIvdGhpcmRfcGFydHkvdnNjb2RlL2NvZGljb24uY3NzJztcbmltcG9ydCB7IG1zVG9TdHJpbmcgfSBmcm9tICdAd2ViL3VpVXRpbHMnO1xuaW1wb3J0IHR5cGUgKiBhcyByZXBvcnRlclR5cGVzIGZyb20gJ3BsYXl3cmlnaHQvdHlwZXMvdGVzdFJlcG9ydGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFNvdXJjZUxvY2F0aW9uIH0gZnJvbSAnLi9tb2RlbFV0aWwnO1xuaW1wb3J0IHsgdGVzdFN0YXR1c0ljb24gfSBmcm9tICcuL3Rlc3RVdGlscyc7XG5pbXBvcnQgJy4vdWlNb2RlVGVzdExpc3RWaWV3LmNzcyc7XG5pbXBvcnQgdHlwZSB7IFRlc3RTZXJ2ZXJDb25uZWN0aW9uIH0gZnJvbSAnQHRlc3RJc29tb3JwaGljL3Rlc3RTZXJ2ZXJDb25uZWN0aW9uJztcbmltcG9ydCB7IFRhZ1ZpZXcgfSBmcm9tICcuL3RhZyc7XG5pbXBvcnQgdHlwZSB7IFRlbGVTdWl0ZVVwZGF0ZXJUZXN0TW9kZWwgfSBmcm9tICdAdGVzdElzb21vcnBoaWMvdGVsZVN1aXRlVXBkYXRlcic7XG5cbmNvbnN0IFRlc3RUcmVlVmlldyA9IFRyZWVWaWV3PFRyZWVJdGVtPjtcblxuZXhwb3J0IGNvbnN0IFRlc3RMaXN0VmlldzogUmVhY3QuRkM8e1xuICBmaWx0ZXJUZXh0OiBzdHJpbmcsXG4gIHRlc3RUcmVlOiBUZXN0VHJlZSxcbiAgdGVzdFNlcnZlckNvbm5lY3Rpb246IFRlc3RTZXJ2ZXJDb25uZWN0aW9uIHwgdW5kZWZpbmVkLFxuICB0ZXN0TW9kZWw/OiBUZWxlU3VpdGVVcGRhdGVyVGVzdE1vZGVsLFxuICBydW5UZXN0czogKG1vZGU6ICdib3VuY2UtaWYtYnVzeScgfCAncXVldWUtaWYtYnVzeScsIHRlc3RJZHM6IFNldDxzdHJpbmc+KSA9PiB2b2lkLFxuICBydW5uaW5nU3RhdGU/OiB7IHRlc3RJZHM6IFNldDxzdHJpbmc+LCBpdGVtU2VsZWN0ZWRCeVVzZXI/OiBib29sZWFuLCBjb21wbGV0ZWQ/OiBib29sZWFuIH0sXG4gIHdhdGNoQWxsOiBib29sZWFuLFxuICB3YXRjaGVkVHJlZUlkczogeyB2YWx1ZTogU2V0PHN0cmluZz4gfSxcbiAgc2V0V2F0Y2hlZFRyZWVJZHM6IChpZHM6IHsgdmFsdWU6IFNldDxzdHJpbmc+IH0pID0+IHZvaWQsXG4gIGlzTG9hZGluZz86IGJvb2xlYW4sXG4gIG9uSXRlbVNlbGVjdGVkOiAoaXRlbTogeyB0cmVlSXRlbT86IFRyZWVJdGVtLCB0ZXN0Q2FzZT86IHJlcG9ydGVyVHlwZXMuVGVzdENhc2UsIHRlc3RGaWxlPzogU291cmNlTG9jYXRpb24gfSkgPT4gdm9pZCxcbiAgcmVxdWVzdGVkQ29sbGFwc2VBbGxDb3VudDogbnVtYmVyLFxuICByZXF1ZXN0ZWRFeHBhbmRBbGxDb3VudDogbnVtYmVyLFxuICBzZXRGaWx0ZXJUZXh0OiAodGV4dDogc3RyaW5nKSA9PiB2b2lkLFxuICBvblJldmVhbFNvdXJjZTogKCkgPT4gdm9pZCxcbn0+ID0gKHsgZmlsdGVyVGV4dCwgdGVzdE1vZGVsLCB0ZXN0U2VydmVyQ29ubmVjdGlvbiwgdGVzdFRyZWUsIHJ1blRlc3RzLCBydW5uaW5nU3RhdGUsIHdhdGNoQWxsLCB3YXRjaGVkVHJlZUlkcywgc2V0V2F0Y2hlZFRyZWVJZHMsIGlzTG9hZGluZywgb25JdGVtU2VsZWN0ZWQsIHJlcXVlc3RlZENvbGxhcHNlQWxsQ291bnQsIHJlcXVlc3RlZEV4cGFuZEFsbENvdW50LCBzZXRGaWx0ZXJUZXh0LCBvblJldmVhbFNvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IFt0cmVlU3RhdGUsIHNldFRyZWVTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTxUcmVlU3RhdGU+KHsgZXhwYW5kZWRJdGVtczogbmV3IE1hcCgpIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRUcmVlSXRlbUlkLCBzZXRTZWxlY3RlZFRyZWVJdGVtSWRdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xuICBjb25zdCBbY29sbGFwc2VBbGxDb3VudCwgc2V0Q29sbGFwc2VBbGxDb3VudF0gPSBSZWFjdC51c2VTdGF0ZShyZXF1ZXN0ZWRDb2xsYXBzZUFsbENvdW50KTtcbiAgY29uc3QgW2V4cGFuZEFsbENvdW50LCBzZXRFeHBhbmRBbGxDb3VudF0gPSBSZWFjdC51c2VTdGF0ZShyZXF1ZXN0ZWRFeHBhbmRBbGxDb3VudCk7XG5cbiAgLy8gTG9vayBmb3IgYSBmaXJzdCBmYWlsdXJlIHdpdGhpbiB0aGUgcnVuIGJhdGNoIHRvIHNlbGVjdCBpdC5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJZiBjb2xsYXBzZSB3YXMgcmVxdWVzdGVkLCBjbGVhciB0aGUgZXhwYW5kZWQgaXRlbXMgYW5kIHJldHVybiB3L28gc2VsZWN0ZWQgaXRlbS5cbiAgICBpZiAoY29sbGFwc2VBbGxDb3VudCAhPT0gcmVxdWVzdGVkQ29sbGFwc2VBbGxDb3VudCkge1xuICAgICAgdHJlZVN0YXRlLmV4cGFuZGVkSXRlbXMuY2xlYXIoKTtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0ZXN0VHJlZS5mbGF0VHJlZUl0ZW1zKCkpXG4gICAgICAgIHRyZWVTdGF0ZS5leHBhbmRlZEl0ZW1zLnNldChpdGVtLmlkLCBmYWxzZSk7XG4gICAgICBzZXRDb2xsYXBzZUFsbENvdW50KHJlcXVlc3RlZENvbGxhcHNlQWxsQ291bnQpO1xuICAgICAgc2V0U2VsZWN0ZWRUcmVlSXRlbUlkKHVuZGVmaW5lZCk7XG4gICAgICBzZXRUcmVlU3RhdGUoeyAuLi50cmVlU3RhdGUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV4cGFuZEFsbENvdW50ICE9PSByZXF1ZXN0ZWRFeHBhbmRBbGxDb3VudCkge1xuICAgICAgdHJlZVN0YXRlLmV4cGFuZGVkSXRlbXMuY2xlYXIoKTtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0ZXN0VHJlZS5mbGF0VHJlZUl0ZW1zKCkpXG4gICAgICAgIHRyZWVTdGF0ZS5leHBhbmRlZEl0ZW1zLnNldChpdGVtLmlkLCB0cnVlKTtcbiAgICAgIHNldEV4cGFuZEFsbENvdW50KHJlcXVlc3RlZEV4cGFuZEFsbENvdW50KTtcbiAgICAgIHNldFNlbGVjdGVkVHJlZUl0ZW1JZCh1bmRlZmluZWQpO1xuICAgICAgc2V0VHJlZVN0YXRlKHsgLi4udHJlZVN0YXRlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcnVubmluZ1N0YXRlIHx8IHJ1bm5pbmdTdGF0ZS5pdGVtU2VsZWN0ZWRCeVVzZXIpXG4gICAgICByZXR1cm47XG4gICAgbGV0IHNlbGVjdGVkVHJlZUl0ZW06IFRyZWVJdGVtIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHZpc2l0ID0gKHRyZWVJdGVtOiBUcmVlSXRlbSkgPT4ge1xuICAgICAgdHJlZUl0ZW0uY2hpbGRyZW4uZm9yRWFjaCh2aXNpdCk7XG4gICAgICBpZiAoc2VsZWN0ZWRUcmVlSXRlbSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKHRyZWVJdGVtLnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcbiAgICAgICAgaWYgKHRyZWVJdGVtLmtpbmQgPT09ICd0ZXN0JyAmJiBydW5uaW5nU3RhdGUudGVzdElkcy5oYXModHJlZUl0ZW0udGVzdC5pZCkpXG4gICAgICAgICAgc2VsZWN0ZWRUcmVlSXRlbSA9IHRyZWVJdGVtO1xuICAgICAgICBlbHNlIGlmICh0cmVlSXRlbS5raW5kID09PSAnY2FzZScgJiYgcnVubmluZ1N0YXRlLnRlc3RJZHMuaGFzKHRyZWVJdGVtLnRlc3RzWzBdPy5pZCkpXG4gICAgICAgICAgc2VsZWN0ZWRUcmVlSXRlbSA9IHRyZWVJdGVtO1xuICAgICAgfVxuICAgIH07XG4gICAgdmlzaXQodGVzdFRyZWUucm9vdEl0ZW0pO1xuXG4gICAgaWYgKHNlbGVjdGVkVHJlZUl0ZW0pXG4gICAgICBzZXRTZWxlY3RlZFRyZWVJdGVtSWQoc2VsZWN0ZWRUcmVlSXRlbS5pZCk7XG4gIH0sIFtydW5uaW5nU3RhdGUsIHNldFNlbGVjdGVkVHJlZUl0ZW1JZCwgdGVzdFRyZWUsIGNvbGxhcHNlQWxsQ291bnQsIHNldENvbGxhcHNlQWxsQ291bnQsIHJlcXVlc3RlZENvbGxhcHNlQWxsQ291bnQsIGV4cGFuZEFsbENvdW50LCBzZXRFeHBhbmRBbGxDb3VudCwgcmVxdWVzdGVkRXhwYW5kQWxsQ291bnQsIHRyZWVTdGF0ZSwgc2V0VHJlZVN0YXRlXSk7XG5cbiAgLy8gQ29tcHV0ZSBzZWxlY3RlZCBpdGVtXG4gIGNvbnN0IHNlbGVjdGVkVHJlZUl0ZW0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkVHJlZUl0ZW1JZClcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRlc3RUcmVlLnRyZWVJdGVtQnlJZChzZWxlY3RlZFRyZWVJdGVtSWQpO1xuICB9LCBbc2VsZWN0ZWRUcmVlSXRlbUlkLCB0ZXN0VHJlZV0pO1xuXG4gIC8vIEhhbmRsZSBzZWxlY3Rpb24gZWZmZWN0cyBzZXBhcmF0ZWx5XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0ZXN0TW9kZWwpXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgdGVzdEZpbGUgPSBpdGVtTG9jYXRpb24oc2VsZWN0ZWRUcmVlSXRlbSwgdGVzdE1vZGVsKTtcbiAgICBsZXQgc2VsZWN0ZWRUZXN0OiByZXBvcnRlclR5cGVzLlRlc3RDYXNlIHwgdW5kZWZpbmVkO1xuICAgIGlmIChzZWxlY3RlZFRyZWVJdGVtPy5raW5kID09PSAndGVzdCcpXG4gICAgICBzZWxlY3RlZFRlc3QgPSBzZWxlY3RlZFRyZWVJdGVtLnRlc3Q7XG4gICAgZWxzZSBpZiAoc2VsZWN0ZWRUcmVlSXRlbT8ua2luZCA9PT0gJ2Nhc2UnICYmIHNlbGVjdGVkVHJlZUl0ZW0udGVzdHMubGVuZ3RoID09PSAxKVxuICAgICAgc2VsZWN0ZWRUZXN0ID0gc2VsZWN0ZWRUcmVlSXRlbS50ZXN0c1swXTtcbiAgICBvbkl0ZW1TZWxlY3RlZCh7IHRyZWVJdGVtOiBzZWxlY3RlZFRyZWVJdGVtLCB0ZXN0Q2FzZTogc2VsZWN0ZWRUZXN0LCB0ZXN0RmlsZSB9KTtcbiAgfSwgW3Rlc3RNb2RlbCwgc2VsZWN0ZWRUcmVlSXRlbSwgb25JdGVtU2VsZWN0ZWRdKTtcblxuICAvLyBVcGRhdGUgd2F0Y2ggYWxsLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0xvYWRpbmcpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHdhdGNoQWxsKSB7XG4gICAgICB0ZXN0U2VydmVyQ29ubmVjdGlvbj8ud2F0Y2hOb1JlcGx5KHsgZmlsZU5hbWVzOiB0ZXN0VHJlZS5maWxlTmFtZXMoKSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZU5hbWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW1JZCBvZiB3YXRjaGVkVHJlZUlkcy52YWx1ZSkge1xuICAgICAgICBjb25zdCB0cmVlSXRlbSA9IHRlc3RUcmVlLnRyZWVJdGVtQnlJZChpdGVtSWQpO1xuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHRyZWVJdGVtPy5sb2NhdGlvbi5maWxlO1xuICAgICAgICBpZiAoZmlsZU5hbWUpXG4gICAgICAgICAgZmlsZU5hbWVzLmFkZChmaWxlTmFtZSk7XG4gICAgICB9XG4gICAgICB0ZXN0U2VydmVyQ29ubmVjdGlvbj8ud2F0Y2hOb1JlcGx5KHsgZmlsZU5hbWVzOiBbLi4uZmlsZU5hbWVzXSB9KTtcbiAgICB9XG4gIH0sIFtpc0xvYWRpbmcsIHRlc3RUcmVlLCB3YXRjaEFsbCwgd2F0Y2hlZFRyZWVJZHMsIHRlc3RTZXJ2ZXJDb25uZWN0aW9uXSk7XG5cbiAgY29uc3QgcnVuVHJlZUl0ZW0gPSAodHJlZUl0ZW06IFRyZWVJdGVtKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRUcmVlSXRlbUlkKHRyZWVJdGVtLmlkKTtcbiAgICBydW5UZXN0cygnYm91bmNlLWlmLWJ1c3knLCB0ZXN0VHJlZS5jb2xsZWN0VGVzdElkcyh0cmVlSXRlbSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRhZ0NsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIHRhZzogc3RyaW5nKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gZmlsdGVyVGV4dC5zcGxpdCgnICcpO1xuICAgICAgaWYgKHBhcnRzLmluY2x1ZGVzKHRhZykpXG4gICAgICAgIHNldEZpbHRlclRleHQocGFydHMuZmlsdGVyKHQgPT4gdCAhPT0gdGFnKS5qb2luKCcgJykudHJpbSgpKTtcbiAgICAgIGVsc2VcbiAgICAgICAgc2V0RmlsdGVyVGV4dCgoZmlsdGVyVGV4dCArICcgJyArIHRhZykudHJpbSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVwbGFjZSBhbGwgZXhpc3RpbmcgdGFncyB3aXRoIHRoaXMgdGFnLlxuICAgICAgc2V0RmlsdGVyVGV4dCgoZmlsdGVyVGV4dC5zcGxpdCgnICcpLmZpbHRlcih0ID0+ICF0LnN0YXJ0c1dpdGgoJ0AnKSkuam9pbignICcpICsgJyAnICsgdGFnKS50cmltKCkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gPFRlc3RUcmVlVmlld1xuICAgIG5hbWU9J3Rlc3RzJ1xuICAgIHRyZWVTdGF0ZT17dHJlZVN0YXRlfVxuICAgIHNldFRyZWVTdGF0ZT17c2V0VHJlZVN0YXRlfVxuICAgIHJvb3RJdGVtPXt0ZXN0VHJlZS5yb290SXRlbX1cbiAgICBkYXRhVGVzdElkPSd0ZXN0LXRyZWUnXG4gICAgcmVuZGVyPXt0cmVlSXRlbSA9PiB7XG4gICAgICBjb25zdCBwcmVmaXhJZCA9IHRyZWVJdGVtLmlkLnJlcGxhY2UoL1teXFx3XFxkLV9dL2csICctJyk7XG4gICAgICBjb25zdCBsYWJlbElkID0gcHJlZml4SWQgKyAnLWxhYmVsJztcbiAgICAgIGNvbnN0IHRpbWVJZCA9IHByZWZpeElkICsgJy10aW1lJztcbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0naGJveCB1aS1tb2RlLXRyZWUtaXRlbScgYXJpYS1sYWJlbGxlZGJ5PXtgJHtsYWJlbElkfSAke3RpbWVJZH1gfT5cbiAgICAgICAgPGRpdiBpZD17bGFiZWxJZH0gY2xhc3NOYW1lPSd1aS1tb2RlLXRyZWUtaXRlbS10aXRsZSc+XG4gICAgICAgICAgPHNwYW4+e3RyZWVJdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICB7dHJlZUl0ZW0ua2luZCA9PT0gJ2Nhc2UnID8gdHJlZUl0ZW0udGFncy5tYXAodGFnID0+IDxUYWdWaWV3IGtleT17dGFnfSB0YWc9e3RhZy5zbGljZSgxKX0gb25DbGljaz17ZSA9PiBoYW5kbGVUYWdDbGljayhlLCB0YWcpfSAvPikgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgeyEhdHJlZUl0ZW0uZHVyYXRpb24gJiYgdHJlZUl0ZW0uc3RhdHVzICE9PSAnc2tpcHBlZCcgJiYgPGRpdiBpZD17dGltZUlkfSBjbGFzc05hbWU9J3VpLW1vZGUtdHJlZS1pdGVtLXRpbWUnPnttc1RvU3RyaW5nKHRyZWVJdGVtLmR1cmF0aW9uKX08L2Rpdj59XG4gICAgICAgIDxUb29sYmFyIG5vTWluSGVpZ2h0PXt0cnVlfSBub1NoYWRvdz17dHJ1ZX0+XG4gICAgICAgICAgPFRvb2xiYXJCdXR0b24gaWNvbj0ncGxheScgdGl0bGU9J1J1bicgb25DbGljaz17KCkgPT4gcnVuVHJlZUl0ZW0odHJlZUl0ZW0pfSBkaXNhYmxlZD17ISFydW5uaW5nU3RhdGUgJiYgIXJ1bm5pbmdTdGF0ZS5jb21wbGV0ZWR9PjwvVG9vbGJhckJ1dHRvbj5cbiAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBpY29uPSdnby10by1maWxlJyB0aXRsZT0nU2hvdyBzb3VyY2UnIG9uQ2xpY2s9e29uUmV2ZWFsU291cmNlfSBzdHlsZT17KHRyZWVJdGVtLmtpbmQgPT09ICdncm91cCcgJiYgdHJlZUl0ZW0uc3ViS2luZCA9PT0gJ2ZvbGRlcicpID8geyB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9IDoge319PjwvVG9vbGJhckJ1dHRvbj5cbiAgICAgICAgICB7IXdhdGNoQWxsICYmIDxUb29sYmFyQnV0dG9uIGljb249J2V5ZScgdGl0bGU9J1dhdGNoJyBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2F0Y2hlZFRyZWVJZHMudmFsdWUuaGFzKHRyZWVJdGVtLmlkKSlcbiAgICAgICAgICAgICAgd2F0Y2hlZFRyZWVJZHMudmFsdWUuZGVsZXRlKHRyZWVJdGVtLmlkKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgd2F0Y2hlZFRyZWVJZHMudmFsdWUuYWRkKHRyZWVJdGVtLmlkKTtcbiAgICAgICAgICAgIHNldFdhdGNoZWRUcmVlSWRzKHsgLi4ud2F0Y2hlZFRyZWVJZHMgfSk7XG4gICAgICAgICAgfX0gdG9nZ2xlZD17d2F0Y2hlZFRyZWVJZHMudmFsdWUuaGFzKHRyZWVJdGVtLmlkKX0+PC9Ub29sYmFyQnV0dG9uPn1cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9kaXY+O1xuICAgIH19XG4gICAgaWNvbj17dHJlZUl0ZW0gPT4gdGVzdFN0YXR1c0ljb24odHJlZUl0ZW0uc3RhdHVzKX1cbiAgICB0aXRsZT17dHJlZUl0ZW0gPT4gdHJlZUl0ZW0udGl0bGV9XG4gICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZFRyZWVJdGVtfVxuICAgIG9uQWNjZXB0ZWQ9e3J1blRyZWVJdGVtfVxuICAgIG9uU2VsZWN0ZWQ9e3RyZWVJdGVtID0+IHtcbiAgICAgIGlmIChydW5uaW5nU3RhdGUpXG4gICAgICAgIHJ1bm5pbmdTdGF0ZS5pdGVtU2VsZWN0ZWRCeVVzZXIgPSB0cnVlO1xuICAgICAgc2V0U2VsZWN0ZWRUcmVlSXRlbUlkKHRyZWVJdGVtLmlkKTtcbiAgICB9fVxuICAgIGlzRXJyb3I9e3RyZWVJdGVtID0+IHRyZWVJdGVtLmtpbmQgPT09ICdncm91cCcgPyB0cmVlSXRlbS5oYXNMb2FkRXJyb3JzIDogZmFsc2V9XG4gICAgYXV0b0V4cGFuZERlcHRoPXtmaWx0ZXJUZXh0ID8gNSA6IDF9XG4gICAgbm9JdGVtc01lc3NhZ2U9e2lzTG9hZGluZyA/ICdMb2FkaW5nXFx1MjAyNicgOiAnTm8gdGVzdHMnfSAvPjtcbn07XG5cbmZ1bmN0aW9uIGl0ZW1Mb2NhdGlvbihpdGVtOiBUcmVlSXRlbSB8IHVuZGVmaW5lZCwgbW9kZWw6IFRlbGVTdWl0ZVVwZGF0ZXJUZXN0TW9kZWwgfCB1bmRlZmluZWQpOiBTb3VyY2VMb2NhdGlvbiB8IHVuZGVmaW5lZCB7XG4gIGlmICghaXRlbSB8fCAhbW9kZWwpXG4gICAgcmV0dXJuO1xuICByZXR1cm4ge1xuICAgIGZpbGU6IGl0ZW0ubG9jYXRpb24uZmlsZSxcbiAgICBsaW5lOiBpdGVtLmxvY2F0aW9uLmxpbmUsXG4gICAgY29sdW1uOiBpdGVtLmxvY2F0aW9uLmNvbHVtbixcbiAgICBzb3VyY2U6IHtcbiAgICAgIGVycm9yczogbW9kZWwubG9hZEVycm9ycy5maWx0ZXIoZSA9PiBlLmxvY2F0aW9uPy5maWxlID09PSBpdGVtLmxvY2F0aW9uLmZpbGUpLm1hcChlID0+ICh7IGxpbmU6IGUubG9jYXRpb24hLmxpbmUsIG1lc3NhZ2U6IGUubWVzc2FnZSEgfSkpLFxuICAgICAgY29udGVudDogdW5kZWZpbmVkLFxuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhcnRpZmFjdHNGb2xkZXJOYW1lKHdvcmtlckluZGV4OiBudW1iZXIpIHtcbiAgcmV0dXJuIGAucGxheXdyaWdodC1hcnRpZmFjdHMtJHt3b3JrZXJJbmRleH1gO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYXJ0aWZhY3RzRm9sZGVyTmFtZSB9IGZyb20gJ0B0ZXN0SXNvbW9ycGhpYy9mb2xkZXJzJztcbmltcG9ydCB0eXBlIHsgVHJlZUl0ZW0gfSBmcm9tICdAdGVzdElzb21vcnBoaWMvdGVzdFRyZWUnO1xuaW1wb3J0ICdAd2ViL2NvbW1vbi5jc3MnO1xuaW1wb3J0ICdAd2ViL3RoaXJkX3BhcnR5L3ZzY29kZS9jb2RpY29uLmNzcyc7XG5pbXBvcnQgdHlwZSAqIGFzIHJlcG9ydGVyVHlwZXMgZnJvbSAncGxheXdyaWdodC90eXBlcy90ZXN0UmVwb3J0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQ29udGV4dEVudHJ5IH0gZnJvbSAnLi4vdHlwZXMvZW50cmllcyc7XG5pbXBvcnQgdHlwZSB7IFNvdXJjZUxvY2F0aW9uIH0gZnJvbSAnLi9tb2RlbFV0aWwnO1xuaW1wb3J0IHsgTXVsdGlUcmFjZU1vZGVsIH0gZnJvbSAnLi9tb2RlbFV0aWwnO1xuaW1wb3J0IHsgV29ya2JlbmNoIH0gZnJvbSAnLi93b3JrYmVuY2gnO1xuXG5leHBvcnQgY29uc3QgVHJhY2VWaWV3OiBSZWFjdC5GQzx7XG4gIGl0ZW06IHsgdHJlZUl0ZW0/OiBUcmVlSXRlbSwgdGVzdEZpbGU/OiBTb3VyY2VMb2NhdGlvbiwgdGVzdENhc2U/OiByZXBvcnRlclR5cGVzLlRlc3RDYXNlIH0sXG4gIHJvb3REaXI/OiBzdHJpbmcsXG4gIG9uT3BlbkV4dGVybmFsbHk/OiAobG9jYXRpb246IFNvdXJjZUxvY2F0aW9uKSA9PiB2b2lkLFxuICByZXZlYWxTb3VyY2U/OiBib29sZWFuLFxuICBwYXRoU2VwYXJhdG9yOiBzdHJpbmcsXG59PiA9ICh7IGl0ZW0sIHJvb3REaXIsIG9uT3BlbkV4dGVybmFsbHksIHJldmVhbFNvdXJjZSwgcGF0aFNlcGFyYXRvciB9KSA9PiB7XG4gIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gUmVhY3QudXNlU3RhdGU8eyBtb2RlbDogTXVsdGlUcmFjZU1vZGVsLCBpc0xpdmU6IGJvb2xlYW4gfSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3QgW2NvdW50ZXIsIHNldENvdW50ZXJdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IHBvbGxUaW1lciA9IFJlYWN0LnVzZVJlZjxOb2RlSlMuVGltZW91dCB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHsgb3V0cHV0RGlyIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBvdXRwdXREaXIgPSBpdGVtLnRlc3RDYXNlID8gb3V0cHV0RGlyRm9yVGVzdENhc2UoaXRlbS50ZXN0Q2FzZSkgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHsgb3V0cHV0RGlyIH07XG4gIH0sIFtpdGVtXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocG9sbFRpbWVyLmN1cnJlbnQpXG4gICAgICBjbGVhclRpbWVvdXQocG9sbFRpbWVyLmN1cnJlbnQpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gaXRlbS50ZXN0Q2FzZT8ucmVzdWx0c1swXTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgc2V0TW9kZWwodW5kZWZpbmVkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGZpbmlzaGVkLlxuICAgIGNvbnN0IGF0dGFjaG1lbnQgPSByZXN1bHQgJiYgcmVzdWx0LmR1cmF0aW9uID49IDAgJiYgcmVzdWx0LmF0dGFjaG1lbnRzLmZpbmQoYSA9PiBhLm5hbWUgPT09ICd0cmFjZScpO1xuICAgIGlmIChhdHRhY2htZW50ICYmIGF0dGFjaG1lbnQucGF0aCkge1xuICAgICAgbG9hZFNpbmdsZVRyYWNlRmlsZShhdHRhY2htZW50LnBhdGgpLnRoZW4obW9kZWwgPT4gc2V0TW9kZWwoeyBtb2RlbCwgaXNMaXZlOiBmYWxzZSB9KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFvdXRwdXREaXIpIHtcbiAgICAgIHNldE1vZGVsKHVuZGVmaW5lZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdHJhY2VMb2NhdGlvbiA9IFtcbiAgICAgIG91dHB1dERpcixcbiAgICAgIGFydGlmYWN0c0ZvbGRlck5hbWUocmVzdWx0IS53b3JrZXJJbmRleCksXG4gICAgICAndHJhY2VzJyxcbiAgICAgIGAke2l0ZW0udGVzdENhc2U/LmlkfS5qc29uYFxuICAgIF0uam9pbihwYXRoU2VwYXJhdG9yKTtcbiAgICAvLyBTdGFydCBwb2xsaW5nIHJ1bm5pbmcgdGVzdC5cbiAgICBwb2xsVGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBhd2FpdCBsb2FkU2luZ2xlVHJhY2VGaWxlKHRyYWNlTG9jYXRpb24pO1xuICAgICAgICBzZXRNb2RlbCh7IG1vZGVsLCBpc0xpdmU6IHRydWUgfSk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgTXVsdGlUcmFjZU1vZGVsKFtdKTtcbiAgICAgICAgbW9kZWwuZXJyb3JEZXNjcmlwdG9ycy5wdXNoKC4uLnJlc3VsdC5lcnJvcnMuZmxhdE1hcChlcnJvciA9PiAhIWVycm9yLm1lc3NhZ2UgPyBbeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIH1dIDogW10pKTtcbiAgICAgICAgc2V0TW9kZWwoeyBtb2RlbCwgaXNMaXZlOiBmYWxzZSB9KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldENvdW50ZXIoY291bnRlciArIDEpO1xuICAgICAgfVxuICAgIH0sIDUwMCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwb2xsVGltZXIuY3VycmVudClcbiAgICAgICAgY2xlYXJUaW1lb3V0KHBvbGxUaW1lci5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbb3V0cHV0RGlyLCBpdGVtLCBzZXRNb2RlbCwgY291bnRlciwgc2V0Q291bnRlciwgcGF0aFNlcGFyYXRvcl0pO1xuXG4gIHJldHVybiA8V29ya2JlbmNoXG4gICAga2V5PSd3b3JrYmVuY2gnXG4gICAgbW9kZWw9e21vZGVsPy5tb2RlbH1cbiAgICBzaG93U291cmNlc0ZpcnN0PXt0cnVlfVxuICAgIHJvb3REaXI9e3Jvb3REaXJ9XG4gICAgZmFsbGJhY2tMb2NhdGlvbj17aXRlbS50ZXN0RmlsZX1cbiAgICBpc0xpdmU9e21vZGVsPy5pc0xpdmV9XG4gICAgc3RhdHVzPXtpdGVtLnRyZWVJdGVtPy5zdGF0dXN9XG4gICAgYW5ub3RhdGlvbnM9e2l0ZW0udGVzdENhc2U/LmFubm90YXRpb25zID8/IFtdfVxuICAgIG9uT3BlbkV4dGVybmFsbHk9e29uT3BlbkV4dGVybmFsbHl9XG4gICAgcmV2ZWFsU291cmNlPXtyZXZlYWxTb3VyY2V9XG4gIC8+O1xufTtcblxuY29uc3Qgb3V0cHV0RGlyRm9yVGVzdENhc2UgPSAodGVzdENhc2U6IHJlcG9ydGVyVHlwZXMuVGVzdENhc2UpOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBmb3IgKGxldCBzdWl0ZTogcmVwb3J0ZXJUeXBlcy5TdWl0ZSB8IHVuZGVmaW5lZCA9IHRlc3RDYXNlLnBhcmVudDsgc3VpdGU7IHN1aXRlID0gc3VpdGUucGFyZW50KSB7XG4gICAgaWYgKHN1aXRlLnByb2plY3QoKSlcbiAgICAgIHJldHVybiBzdWl0ZS5wcm9qZWN0KCk/Lm91dHB1dERpcjtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZFNpbmdsZVRyYWNlRmlsZSh1cmw6IHN0cmluZyk6IFByb21pc2U8TXVsdGlUcmFjZU1vZGVsPiB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgcGFyYW1zLnNldCgndHJhY2UnLCB1cmwpO1xuICBwYXJhbXMuc2V0KCdsaW1pdCcsICcxJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGNvbnRleHRzPyR7cGFyYW1zLnRvU3RyaW5nKCl9YCk7XG4gIGNvbnN0IGNvbnRleHRFbnRyaWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIENvbnRleHRFbnRyeVtdO1xuICByZXR1cm4gbmV3IE11bHRpVHJhY2VNb2RlbChjb250ZXh0RW50cmllcyk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgJ0B3ZWIvdGhpcmRfcGFydHkvdnNjb2RlL2NvZGljb24uY3NzJztcbmltcG9ydCAnQHdlYi9jb21tb24uY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZWxlU3VpdGUgfSBmcm9tICdAdGVzdElzb21vcnBoaWMvdGVsZVJlY2VpdmVyJztcbmltcG9ydCB7IFRlbGVTdWl0ZVVwZGF0ZXIsIHR5cGUgVGVsZVN1aXRlVXBkYXRlclByb2dyZXNzLCB0eXBlIFRlbGVTdWl0ZVVwZGF0ZXJUZXN0TW9kZWwgfSBmcm9tICdAdGVzdElzb21vcnBoaWMvdGVsZVN1aXRlVXBkYXRlcic7XG5pbXBvcnQgdHlwZSB7IFRlbGVUZXN0Q2FzZSB9IGZyb20gJ0B0ZXN0SXNvbW9ycGhpYy90ZWxlUmVjZWl2ZXInO1xuaW1wb3J0IHR5cGUgKiBhcyByZXBvcnRlclR5cGVzIGZyb20gJ3BsYXl3cmlnaHQvdHlwZXMvdGVzdFJlcG9ydGVyJztcbmltcG9ydCB7IFNwbGl0VmlldyB9IGZyb20gJ0B3ZWIvY29tcG9uZW50cy9zcGxpdFZpZXcnO1xuaW1wb3J0IHR5cGUgeyBTb3VyY2VMb2NhdGlvbiB9IGZyb20gJy4vbW9kZWxVdGlsJztcbmltcG9ydCAnLi91aU1vZGVWaWV3LmNzcyc7XG5pbXBvcnQgeyBUb29sYmFyQnV0dG9uIH0gZnJvbSAnQHdlYi9jb21wb25lbnRzL3Rvb2xiYXJCdXR0b24nO1xuaW1wb3J0IHsgVG9vbGJhciB9IGZyb20gJ0B3ZWIvY29tcG9uZW50cy90b29sYmFyJztcbmltcG9ydCB0eXBlIHsgWHRlcm1EYXRhU291cmNlIH0gZnJvbSAnQHdlYi9jb21wb25lbnRzL3h0ZXJtV3JhcHBlcic7XG5pbXBvcnQgeyBYdGVybVdyYXBwZXIgfSBmcm9tICdAd2ViL2NvbXBvbmVudHMveHRlcm1XcmFwcGVyJztcbmltcG9ydCB7IGNsc3gsIHNldHRpbmdzLCB1c2VTZXR0aW5nIH0gZnJvbSAnQHdlYi91aVV0aWxzJztcbmltcG9ydCB7IHN0YXR1c0V4LCBUZXN0VHJlZSB9IGZyb20gJ0B0ZXN0SXNvbW9ycGhpYy90ZXN0VHJlZSc7XG5pbXBvcnQgdHlwZSB7IFRyZWVJdGVtICB9IGZyb20gJ0B0ZXN0SXNvbW9ycGhpYy90ZXN0VHJlZSc7XG5pbXBvcnQgeyBUZXN0U2VydmVyQ29ubmVjdGlvbiwgV2ViU29ja2V0VGVzdFNlcnZlclRyYW5zcG9ydCB9IGZyb20gJ0B0ZXN0SXNvbW9ycGhpYy90ZXN0U2VydmVyQ29ubmVjdGlvbic7XG5pbXBvcnQgeyBGaWx0ZXJzVmlldyB9IGZyb20gJy4vdWlNb2RlRmlsdGVyc1ZpZXcnO1xuaW1wb3J0IHsgVGVzdExpc3RWaWV3IH0gZnJvbSAnLi91aU1vZGVUZXN0TGlzdFZpZXcnO1xuaW1wb3J0IHsgVHJhY2VWaWV3IH0gZnJvbSAnLi91aU1vZGVUcmFjZVZpZXcnO1xuaW1wb3J0IHsgU2V0dGluZ3NWaWV3IH0gZnJvbSAnLi9zZXR0aW5nc1ZpZXcnO1xuaW1wb3J0IHsgRGVmYXVsdFNldHRpbmdzVmlldyB9IGZyb20gJy4vZGVmYXVsdFNldHRpbmdzVmlldyc7XG5cbmxldCB4dGVybVNpemUgPSB7IGNvbHM6IDgwLCByb3dzOiAyNCB9O1xuY29uc3QgeHRlcm1EYXRhU291cmNlOiBYdGVybURhdGFTb3VyY2UgPSB7XG4gIHBlbmRpbmc6IFtdLFxuICBjbGVhcjogKCkgPT4ge30sXG4gIHdyaXRlOiBkYXRhID0+IHh0ZXJtRGF0YVNvdXJjZS5wZW5kaW5nLnB1c2goZGF0YSksXG4gIHJlc2l6ZTogKCkgPT4ge30sXG59O1xuXG5jb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuY29uc3QgdGVzdFNlcnZlckJhc2VVcmwgPSBuZXcgVVJMKHNlYXJjaFBhcmFtcy5nZXQoJ3NlcnZlcicpID8/ICcuLi8nLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG5jb25zdCB3c1VSTCA9IG5ldyBVUkwoc2VhcmNoUGFyYW1zLmdldCgnd3MnKSEsIHRlc3RTZXJ2ZXJCYXNlVXJsKTtcbndzVVJMLnByb3RvY29sID0gKHdzVVJMLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICd3c3M6JyA6ICd3czonKTtcbmNvbnN0IHF1ZXJ5UGFyYW1zID0ge1xuICBhcmdzOiBzZWFyY2hQYXJhbXMuZ2V0QWxsKCdhcmcnKSxcbiAgZ3JlcDogc2VhcmNoUGFyYW1zLmdldCgnZ3JlcCcpIHx8IHVuZGVmaW5lZCxcbiAgZ3JlcEludmVydDogc2VhcmNoUGFyYW1zLmdldCgnZ3JlcEludmVydCcpIHx8IHVuZGVmaW5lZCxcbiAgcHJvamVjdHM6IHNlYXJjaFBhcmFtcy5nZXRBbGwoJ3Byb2plY3QnKSxcbiAgd29ya2Vyczogc2VhcmNoUGFyYW1zLmdldCgnd29ya2VycycpIHx8IHVuZGVmaW5lZCxcbiAgaGVhZGVkOiBzZWFyY2hQYXJhbXMuaGFzKCdoZWFkZWQnKSxcbiAgdXBkYXRlU25hcHNob3RzOiAoc2VhcmNoUGFyYW1zLmdldCgndXBkYXRlU25hcHNob3RzJykgYXMgcmVwb3J0ZXJUeXBlcy5GdWxsQ29uZmlnWyd1cGRhdGVTbmFwc2hvdHMnXSB8IHVuZGVmaW5lZCkgfHwgdW5kZWZpbmVkLFxuICByZXBvcnRlcnM6IHNlYXJjaFBhcmFtcy5oYXMoJ3JlcG9ydGVyJykgPyBzZWFyY2hQYXJhbXMuZ2V0QWxsKCdyZXBvcnRlcicpIDogdW5kZWZpbmVkLFxuICBwYXRoU2VwYXJhdG9yOiBzZWFyY2hQYXJhbXMuZ2V0KCdwYXRoU2VwYXJhdG9yJykgfHwgJy8nLFxufTtcbmlmIChxdWVyeVBhcmFtcy51cGRhdGVTbmFwc2hvdHMgJiYgIVsnYWxsJywgJ2NoYW5nZWQnLCAnbm9uZScsICdtaXNzaW5nJ10uaW5jbHVkZXMocXVlcnlQYXJhbXMudXBkYXRlU25hcHNob3RzKSlcbiAgcXVlcnlQYXJhbXMudXBkYXRlU25hcHNob3RzID0gdW5kZWZpbmVkO1xuXG5jb25zdCBpc01hYyA9IG5hdmlnYXRvci5wbGF0Zm9ybSA9PT0gJ01hY0ludGVsJztcblxuZXhwb3J0IGNvbnN0IFVJTW9kZVZpZXc6IFJlYWN0LkZDPHt9PiA9ICh7XG59KSA9PiB7XG4gIGNvbnN0IFtmaWx0ZXJUZXh0LCBzZXRGaWx0ZXJUZXh0XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJycpO1xuICBjb25zdCBbaXNTaG93aW5nT3V0cHV0LCBzZXRJc1Nob3dpbmdPdXRwdXRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbb3V0cHV0Q29udGFpbnNFcnJvciwgc2V0T3V0cHV0Q29udGFpbnNFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdGF0dXNGaWx0ZXJzLCBzZXRTdGF0dXNGaWx0ZXJzXSA9IFJlYWN0LnVzZVN0YXRlPE1hcDxzdHJpbmcsIGJvb2xlYW4+PihuZXcgTWFwKFtcbiAgICBbJ3Bhc3NlZCcsIGZhbHNlXSxcbiAgICBbJ2ZhaWxlZCcsIGZhbHNlXSxcbiAgICBbJ3NraXBwZWQnLCBmYWxzZV0sXG4gIF0pKTtcbiAgY29uc3QgW3Byb2plY3RGaWx0ZXJzLCBzZXRQcm9qZWN0RmlsdGVyc10gPSBSZWFjdC51c2VTdGF0ZTxNYXA8c3RyaW5nLCBib29sZWFuPj4obmV3IE1hcCgpKTtcbiAgY29uc3QgW3Rlc3RNb2RlbCwgc2V0VGVzdE1vZGVsXSA9IFJlYWN0LnVzZVN0YXRlPFRlbGVTdWl0ZVVwZGF0ZXJUZXN0TW9kZWw+KCk7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGU8VGVsZVN1aXRlVXBkYXRlclByb2dyZXNzICYgeyB0b3RhbDogbnVtYmVyIH0gfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW0sIHNldFNlbGVjdGVkSXRlbV0gPSBSZWFjdC51c2VTdGF0ZTx7IHRyZWVJdGVtPzogVHJlZUl0ZW0sIHRlc3RGaWxlPzogU291cmNlTG9jYXRpb24sIHRlc3RDYXNlPzogcmVwb3J0ZXJUeXBlcy5UZXN0Q2FzZSB9Pih7fSk7XG4gIGNvbnN0IFt2aXNpYmxlVGVzdElkcywgc2V0VmlzaWJsZVRlc3RJZHNdID0gUmVhY3QudXNlU3RhdGU8U2V0PHN0cmluZz4+KG5ldyBTZXQoKSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtydW5uaW5nU3RhdGUsIHNldFJ1bm5pbmdTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZTx7IHRlc3RJZHM6IFNldDxzdHJpbmc+LCBpdGVtU2VsZWN0ZWRCeVVzZXI/OiBib29sZWFuLCBjb21wbGV0ZWQ/OiBib29sZWFuIH0gfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IGlzUnVubmluZ1Rlc3QgPSBydW5uaW5nU3RhdGUgJiYgIXJ1bm5pbmdTdGF0ZS5jb21wbGV0ZWQ7XG5cbiAgY29uc3QgW3dhdGNoQWxsLCBzZXRXYXRjaEFsbF0gPSB1c2VTZXR0aW5nPGJvb2xlYW4+KCd3YXRjaC1hbGwnLCBmYWxzZSk7XG4gIGNvbnN0IFt3YXRjaGVkVHJlZUlkcywgc2V0V2F0Y2hlZFRyZWVJZHNdID0gUmVhY3QudXNlU3RhdGU8eyB2YWx1ZTogU2V0PHN0cmluZz4gfT4oeyB2YWx1ZTogbmV3IFNldCgpIH0pO1xuICBjb25zdCBjb21tYW5kUXVldWUgPSBSZWFjdC51c2VSZWYoUHJvbWlzZS5yZXNvbHZlKCkpO1xuICBjb25zdCBydW5UZXN0QmFja2xvZyA9IFJlYWN0LnVzZVJlZjxTZXQ8c3RyaW5nPj4obmV3IFNldCgpKTtcbiAgY29uc3QgW2NvbGxhcHNlQWxsQ291bnQsIHNldENvbGxhcHNlQWxsQ291bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtleHBhbmRBbGxDb3VudCwgc2V0RXhwYW5kQWxsQ291bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc0Rpc2Nvbm5lY3RlZCwgc2V0SXNEaXNjb25uZWN0ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzQnJvd3NlcnMsIHNldEhhc0Jyb3dzZXJzXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdGVzdFNlcnZlckNvbm5lY3Rpb24sIHNldFRlc3RTZXJ2ZXJDb25uZWN0aW9uXSA9IFJlYWN0LnVzZVN0YXRlPFRlc3RTZXJ2ZXJDb25uZWN0aW9uPigpO1xuICBjb25zdCBbdGVsZVN1aXRlVXBkYXRlciwgc2V0VGVsZVN1aXRlVXBkYXRlcl0gPSBSZWFjdC51c2VTdGF0ZTxUZWxlU3VpdGVVcGRhdGVyPigpO1xuICBjb25zdCBbc2V0dGluZ3NWaXNpYmxlLCBzZXRTZXR0aW5nc1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGVzdGluZ09wdGlvbnNWaXNpYmxlLCBzZXRUZXN0aW5nT3B0aW9uc1Zpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmV2ZWFsU291cmNlLCBzZXRSZXZlYWxTb3VyY2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvblJldmVhbFNvdXJjZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHNldFJldmVhbFNvdXJjZSh0cnVlKSwgW3NldFJldmVhbFNvdXJjZV0pO1xuXG4gIGNvbnN0IFt1cGRhdGVTbmFwc2hvdHMsIHNldFVwZGF0ZVNuYXBzaG90c10gPSB1c2VTZXR0aW5nPHJlcG9ydGVyVHlwZXMuRnVsbENvbmZpZ1sndXBkYXRlU25hcHNob3RzJ10+KCd1cGRhdGVTbmFwc2hvdHMnLCAnbWlzc2luZycpO1xuXG4gIGNvbnN0IGlucHV0UmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IHJlbG9hZFRlc3RzID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFRlc3RTZXJ2ZXJDb25uZWN0aW9uKHByZXZDb25uZWN0aW9uID0+IHtcbiAgICAgIHByZXZDb25uZWN0aW9uPy5jbG9zZSgpO1xuICAgICAgcmV0dXJuIG5ldyBUZXN0U2VydmVyQ29ubmVjdGlvbihuZXcgV2ViU29ja2V0VGVzdFNlcnZlclRyYW5zcG9ydCh3c1VSTCkpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy8gTG9hZCB0ZXN0cyBvbiBzdGFydHVwLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHJlbG9hZFRlc3RzKCk7XG4gIH0sIFtyZWxvYWRUZXN0c10pO1xuXG4gIC8vIFdpcmUgc2VydmVyIGNvbm5lY3Rpb24gdG8gdGhlIGF1eGlsaWFyeSBVSSBmZWF0dXJlcy5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXRlc3RTZXJ2ZXJDb25uZWN0aW9uKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGRpc3Bvc2FibGVzID0gW1xuICAgICAgdGVzdFNlcnZlckNvbm5lY3Rpb24ub25TdGRpbyhwYXJhbXMgPT4ge1xuICAgICAgICBpZiAocGFyYW1zLmJ1ZmZlcikge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhdG9iKHBhcmFtcy5idWZmZXIpO1xuICAgICAgICAgIHh0ZXJtRGF0YVNvdXJjZS53cml0ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4dGVybURhdGFTb3VyY2Uud3JpdGUocGFyYW1zLnRleHQhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3N0ZGVycicpXG4gICAgICAgICAgc2V0T3V0cHV0Q29udGFpbnNFcnJvcih0cnVlKTtcbiAgICAgIH0pLFxuICAgICAgdGVzdFNlcnZlckNvbm5lY3Rpb24ub25DbG9zZSgoKSA9PiBzZXRJc0Rpc2Nvbm5lY3RlZCh0cnVlKSlcbiAgICBdO1xuICAgIHh0ZXJtRGF0YVNvdXJjZS5yZXNpemUgPSAoY29scywgcm93cykgPT4ge1xuICAgICAgeHRlcm1TaXplID0geyBjb2xzLCByb3dzIH07XG4gICAgICB0ZXN0U2VydmVyQ29ubmVjdGlvbi5yZXNpemVUZXJtaW5hbE5vUmVwbHkoeyBjb2xzLCByb3dzIH0pO1xuICAgIH07XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZGlzcG9zYWJsZSBvZiBkaXNwb3NhYmxlcylcbiAgICAgICAgZGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gICAgfTtcbiAgfSwgW3Rlc3RTZXJ2ZXJDb25uZWN0aW9uXSk7XG5cbiAgLy8gVGhpcyBpcyB0aGUgbWFpbiByb3V0aW5lLCBldmVyeSB0aW1lIGNvbm5lY3Rpb24gdXBkYXRlcyBpdCBzdGFydHMgdGhlXG4gIC8vIHdob2xlIHdvcmtmbG93LlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdGVzdFNlcnZlckNvbm5lY3Rpb24pXG4gICAgICByZXR1cm47XG5cbiAgICBsZXQgdGhyb3R0bGVUaW1lcjogTm9kZUpTLlRpbWVvdXQgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGVsZVN1aXRlVXBkYXRlciA9IG5ldyBUZWxlU3VpdGVVcGRhdGVyKHtcbiAgICAgIG9uVXBkYXRlOiBpbW1lZGlhdGUgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhyb3R0bGVUaW1lcik7XG4gICAgICAgIHRocm90dGxlVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChpbW1lZGlhdGUpIHtcbiAgICAgICAgICBzZXRUZXN0TW9kZWwodGVsZVN1aXRlVXBkYXRlci5hc01vZGVsKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aHJvdHRsZVRpbWVyKSB7XG4gICAgICAgICAgdGhyb3R0bGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGVzdE1vZGVsKHRlbGVTdWl0ZVVwZGF0ZXIuYXNNb2RlbCgpKTtcbiAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICB4dGVybURhdGFTb3VyY2Uud3JpdGUoKGVycm9yLnN0YWNrIHx8IGVycm9yLnZhbHVlIHx8ICcnKSArICdcXG4nKTtcbiAgICAgICAgc2V0T3V0cHV0Q29udGFpbnNFcnJvcih0cnVlKTtcbiAgICAgIH0sXG4gICAgICBwYXRoU2VwYXJhdG9yOiBxdWVyeVBhcmFtcy5wYXRoU2VwYXJhdG9yLFxuICAgIH0pO1xuXG4gICAgc2V0VGVsZVN1aXRlVXBkYXRlcih0ZWxlU3VpdGVVcGRhdGVyKTtcblxuICAgIHNldFRlc3RNb2RlbCh1bmRlZmluZWQpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBzZXRXYXRjaGVkVHJlZUlkcyh7IHZhbHVlOiBuZXcgU2V0KCkgfSk7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRlc3RTZXJ2ZXJDb25uZWN0aW9uLmluaXRpYWxpemUoe1xuICAgICAgICAgIGludGVyY2VwdFN0ZGlvOiB0cnVlLFxuICAgICAgICAgIHdhdGNoVGVzdERpcnM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzLCByZXBvcnQgfSA9IGF3YWl0IHRlc3RTZXJ2ZXJDb25uZWN0aW9uLnJ1bkdsb2JhbFNldHVwKHt9KTtcbiAgICAgICAgdGVsZVN1aXRlVXBkYXRlci5wcm9jZXNzR2xvYmFsUmVwb3J0KHJlcG9ydCk7XG4gICAgICAgIGlmIChzdGF0dXMgIT09ICdwYXNzZWQnKVxuICAgICAgICAgIHJldHVybjtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0ZXN0U2VydmVyQ29ubmVjdGlvbi5saXN0VGVzdHMoeyBwcm9qZWN0czogcXVlcnlQYXJhbXMucHJvamVjdHMsIGxvY2F0aW9uczogcXVlcnlQYXJhbXMuYXJncywgZ3JlcDogcXVlcnlQYXJhbXMuZ3JlcCwgZ3JlcEludmVydDogcXVlcnlQYXJhbXMuZ3JlcEludmVydCB9KTtcbiAgICAgICAgdGVsZVN1aXRlVXBkYXRlci5wcm9jZXNzTGlzdFJlcG9ydChyZXN1bHQucmVwb3J0KTtcblxuICAgICAgICB0ZXN0U2VydmVyQ29ubmVjdGlvbi5vblJlcG9ydChwYXJhbXMgPT4ge1xuICAgICAgICAgIHRlbGVTdWl0ZVVwZGF0ZXIucHJvY2Vzc1Rlc3RSZXBvcnRFdmVudChwYXJhbXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB7IGhhc0Jyb3dzZXJzIH0gPSBhd2FpdCB0ZXN0U2VydmVyQ29ubmVjdGlvbi5jaGVja0Jyb3dzZXJzKHt9KTtcbiAgICAgICAgc2V0SGFzQnJvd3NlcnMoaGFzQnJvd3NlcnMpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQodGhyb3R0bGVUaW1lcik7XG4gICAgfTtcbiAgfSwgW3Rlc3RTZXJ2ZXJDb25uZWN0aW9uXSk7XG5cbiAgLy8gVXBkYXRlIHByb2plY3QgZmlsdGVyIGRlZmF1bHQgdmFsdWVzLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdGVzdE1vZGVsKVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc3QgeyBjb25maWcsIHJvb3RTdWl0ZSB9ID0gdGVzdE1vZGVsO1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdHMgPSBjb25maWcuY29uZmlnRmlsZSA/IHNldHRpbmdzLmdldE9iamVjdDxzdHJpbmdbXSB8IHVuZGVmaW5lZD4oY29uZmlnLmNvbmZpZ0ZpbGUgKyAnOnByb2plY3RzJywgdW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXdGaWx0ZXIgPSBuZXcgTWFwKHByb2plY3RGaWx0ZXJzKTtcbiAgICBmb3IgKGNvbnN0IHByb2plY3ROYW1lIG9mIG5ld0ZpbHRlci5rZXlzKCkpIHtcbiAgICAgIGlmICghcm9vdFN1aXRlLnN1aXRlcy5maW5kKHMgPT4gcy50aXRsZSA9PT0gcHJvamVjdE5hbWUpKVxuICAgICAgICBuZXdGaWx0ZXIuZGVsZXRlKHByb2plY3ROYW1lKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwcm9qZWN0U3VpdGUgb2Ygcm9vdFN1aXRlLnN1aXRlcykge1xuICAgICAgaWYgKCFuZXdGaWx0ZXIuaGFzKHByb2plY3RTdWl0ZS50aXRsZSkpXG4gICAgICAgIG5ld0ZpbHRlci5zZXQocHJvamVjdFN1aXRlLnRpdGxlLCAhIXNlbGVjdGVkUHJvamVjdHM/LmluY2x1ZGVzKHByb2plY3RTdWl0ZS50aXRsZSkpO1xuICAgIH1cbiAgICBpZiAoIXNlbGVjdGVkUHJvamVjdHMgJiYgbmV3RmlsdGVyLnNpemUgJiYgIVsuLi5uZXdGaWx0ZXIudmFsdWVzKCldLmluY2x1ZGVzKHRydWUpKVxuICAgICAgbmV3RmlsdGVyLnNldChuZXdGaWx0ZXIuZW50cmllcygpLm5leHQoKS52YWx1ZSFbMF0sIHRydWUpO1xuICAgIGlmIChwcm9qZWN0RmlsdGVycy5zaXplICE9PSBuZXdGaWx0ZXIuc2l6ZSB8fCBbLi4ucHJvamVjdEZpbHRlcnNdLnNvbWUoKFtrLCB2XSkgPT4gbmV3RmlsdGVyLmdldChrKSAhPT0gdikpXG4gICAgICBzZXRQcm9qZWN0RmlsdGVycyhuZXdGaWx0ZXIpO1xuICB9LCBbcHJvamVjdEZpbHRlcnMsIHRlc3RNb2RlbF0pO1xuXG4gIC8vIFVwZGF0ZSBwcm9ncmVzcy5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNSdW5uaW5nVGVzdCAmJiB0ZXN0TW9kZWw/LnByb2dyZXNzKVxuICAgICAgc2V0UHJvZ3Jlc3ModGVzdE1vZGVsLnByb2dyZXNzKTtcbiAgICBlbHNlIGlmICghdGVzdE1vZGVsKVxuICAgICAgc2V0UHJvZ3Jlc3ModW5kZWZpbmVkKTtcbiAgfSwgW3Rlc3RNb2RlbCwgaXNSdW5uaW5nVGVzdF0pO1xuXG4gIC8vIFRlc3QgdHJlZSBpcyBidWlsdCBmcm9tIHRoZSBtb2RlbCBhbmQgZmlsdGVycy5cbiAgY29uc3QgeyB0ZXN0VHJlZSB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCF0ZXN0TW9kZWwpXG4gICAgICByZXR1cm4geyB0ZXN0VHJlZTogbmV3IFRlc3RUcmVlKCcnLCBuZXcgVGVsZVN1aXRlKCcnLCAncm9vdCcpLCBbXSwgcHJvamVjdEZpbHRlcnMsIHF1ZXJ5UGFyYW1zLnBhdGhTZXBhcmF0b3IpIH07XG4gICAgY29uc3QgdGVzdFRyZWUgPSBuZXcgVGVzdFRyZWUoJycsIHRlc3RNb2RlbC5yb290U3VpdGUsIHRlc3RNb2RlbC5sb2FkRXJyb3JzLCBwcm9qZWN0RmlsdGVycywgcXVlcnlQYXJhbXMucGF0aFNlcGFyYXRvcik7XG4gICAgdGVzdFRyZWUuZmlsdGVyVHJlZShmaWx0ZXJUZXh0LCBzdGF0dXNGaWx0ZXJzLCBpc1J1bm5pbmdUZXN0ID8gcnVubmluZ1N0YXRlPy50ZXN0SWRzIDogdW5kZWZpbmVkKTtcbiAgICB0ZXN0VHJlZS5zb3J0QW5kUHJvcGFnYXRlU3RhdHVzKCk7XG4gICAgdGVzdFRyZWUuc2hvcnRlblJvb3QoKTtcbiAgICB0ZXN0VHJlZS5mbGF0dGVuRm9yU2luZ2xlUHJvamVjdCgpO1xuICAgIHNldFZpc2libGVUZXN0SWRzKHRlc3RUcmVlLnRlc3RJZHMoKSk7XG4gICAgcmV0dXJuIHsgdGVzdFRyZWUgfTtcbiAgfSwgW2ZpbHRlclRleHQsIHRlc3RNb2RlbCwgc3RhdHVzRmlsdGVycywgcHJvamVjdEZpbHRlcnMsIHNldFZpc2libGVUZXN0SWRzLCBydW5uaW5nU3RhdGUsIGlzUnVubmluZ1Rlc3RdKTtcblxuICBjb25zdCBydW5UZXN0cyA9IFJlYWN0LnVzZUNhbGxiYWNrKChtb2RlOiAncXVldWUtaWYtYnVzeScgfCAnYm91bmNlLWlmLWJ1c3knLCB0ZXN0SWRzOiBTZXQ8c3RyaW5nPikgPT4ge1xuICAgIGlmICghdGVzdFNlcnZlckNvbm5lY3Rpb24gfHwgIXRlc3RNb2RlbClcbiAgICAgIHJldHVybjtcbiAgICBpZiAobW9kZSA9PT0gJ2JvdW5jZS1pZi1idXN5JyAmJiBpc1J1bm5pbmdUZXN0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgcnVuVGVzdEJhY2tsb2cuY3VycmVudCA9IG5ldyBTZXQoWy4uLnJ1blRlc3RCYWNrbG9nLmN1cnJlbnQsIC4uLnRlc3RJZHNdKTtcbiAgICBjb21tYW5kUXVldWUuY3VycmVudCA9IGNvbW1hbmRRdWV1ZS5jdXJyZW50LnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGVzdElkcyA9IHJ1blRlc3RCYWNrbG9nLmN1cnJlbnQ7XG4gICAgICBydW5UZXN0QmFja2xvZy5jdXJyZW50ID0gbmV3IFNldCgpO1xuICAgICAgaWYgKCF0ZXN0SWRzLnNpemUpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgLy8gQ2xlYXIgdGVzdCByZXN1bHRzLlxuICAgICAge1xuICAgICAgICBmb3IgKGNvbnN0IHRlc3Qgb2YgdGVzdE1vZGVsLnJvb3RTdWl0ZT8uYWxsVGVzdHMoKSB8fCBbXSkge1xuICAgICAgICAgIGlmICh0ZXN0SWRzLmhhcyh0ZXN0LmlkKSkge1xuICAgICAgICAgICAgdGVzdC5yZXN1bHRzID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSAodGVzdCBhcyBUZWxlVGVzdENhc2UpLl9jcmVhdGVUZXN0UmVzdWx0KCdwZW5kaW5nJyk7XG4gICAgICAgICAgICAocmVzdWx0IGFzIGFueSlbc3RhdHVzRXhdID0gJ3NjaGVkdWxlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRlc3RNb2RlbCh7IC4uLnRlc3RNb2RlbCB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGltZSA9ICcgIFsnICsgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKSArICddJztcbiAgICAgIHh0ZXJtRGF0YVNvdXJjZS53cml0ZSgnXFx4MUJbMm3igJQnLnJlcGVhdChNYXRoLm1heCgwLCB4dGVybVNpemUuY29scyAtIHRpbWUubGVuZ3RoKSkgKyB0aW1lICsgJ1xceDFCWzIybScpO1xuICAgICAgc2V0UHJvZ3Jlc3MoeyB0b3RhbDogMCwgcGFzc2VkOiAwLCBmYWlsZWQ6IDAsIHNraXBwZWQ6IDAgfSk7XG4gICAgICBzZXRSdW5uaW5nU3RhdGUoeyB0ZXN0SWRzIH0pO1xuXG4gICAgICBhd2FpdCB0ZXN0U2VydmVyQ29ubmVjdGlvbi5ydW5UZXN0cyh7XG4gICAgICAgIGxvY2F0aW9uczogcXVlcnlQYXJhbXMuYXJncyxcbiAgICAgICAgZ3JlcDogcXVlcnlQYXJhbXMuZ3JlcCxcbiAgICAgICAgZ3JlcEludmVydDogcXVlcnlQYXJhbXMuZ3JlcEludmVydCxcbiAgICAgICAgdGVzdElkczogWy4uLnRlc3RJZHNdLFxuICAgICAgICBwcm9qZWN0czogWy4uLnByb2plY3RGaWx0ZXJzXS5maWx0ZXIoKFtfLCB2XSkgPT4gdikubWFwKChbcF0pID0+IHApLFxuICAgICAgICB1cGRhdGVTbmFwc2hvdHMsXG4gICAgICAgIHJlcG9ydGVyczogcXVlcnlQYXJhbXMucmVwb3J0ZXJzLFxuICAgICAgICB0cmFjZTogJ29uJyxcbiAgICAgIH0pO1xuICAgICAgLy8gQ2xlYXIgcGVuZGluZyB0ZXN0cyBpbiBjYXNlIG9mIGludGVycnVwdC5cbiAgICAgIGZvciAoY29uc3QgdGVzdCBvZiB0ZXN0TW9kZWwucm9vdFN1aXRlPy5hbGxUZXN0cygpIHx8IFtdKSB7XG4gICAgICAgIGlmICh0ZXN0LnJlc3VsdHNbMF0/LmR1cmF0aW9uID09PSAtMSlcbiAgICAgICAgICB0ZXN0LnJlc3VsdHMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHNldFRlc3RNb2RlbCh7IC4uLnRlc3RNb2RlbCB9KTtcbiAgICAgIHNldFJ1bm5pbmdTdGF0ZShvbGRTdGF0ZSA9PiBvbGRTdGF0ZSA/ICh7IC4uLm9sZFN0YXRlLCBjb21wbGV0ZWQ6IHRydWUgfSkgOiB1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9LCBbcHJvamVjdEZpbHRlcnMsIGlzUnVubmluZ1Rlc3QsIHRlc3RNb2RlbCwgdGVzdFNlcnZlckNvbm5lY3Rpb24sIHVwZGF0ZVNuYXBzaG90c10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0ZXN0U2VydmVyQ29ubmVjdGlvbiB8fCAhdGVsZVN1aXRlVXBkYXRlcilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBkaXNwb3NhYmxlID0gdGVzdFNlcnZlckNvbm5lY3Rpb24ub25UZXN0RmlsZXNDaGFuZ2VkKGFzeW5jIHBhcmFtcyA9PiB7XG4gICAgICAvLyBmZXRjaCB0aGUgbmV3IGxpc3Qgb2YgdGVzdHNcbiAgICAgIGNvbW1hbmRRdWV1ZS5jdXJyZW50ID0gY29tbWFuZFF1ZXVlLmN1cnJlbnQudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0ZXN0U2VydmVyQ29ubmVjdGlvbi5saXN0VGVzdHMoeyBwcm9qZWN0czogcXVlcnlQYXJhbXMucHJvamVjdHMsIGxvY2F0aW9uczogcXVlcnlQYXJhbXMuYXJncywgZ3JlcDogcXVlcnlQYXJhbXMuZ3JlcCwgZ3JlcEludmVydDogcXVlcnlQYXJhbXMuZ3JlcEludmVydCB9KTtcbiAgICAgICAgICB0ZWxlU3VpdGVVcGRhdGVyLnByb2Nlc3NMaXN0UmVwb3J0KHJlc3VsdC5yZXBvcnQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGF3YWl0IGNvbW1hbmRRdWV1ZS5jdXJyZW50O1xuXG4gICAgICBpZiAocGFyYW1zLnRlc3RGaWxlcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybjtcblxuICAgICAgLy8gcnVuIGFmZmVjdGVkIHdhdGNoZWQgdGVzdHNcbiAgICAgIGNvbnN0IHRlc3RNb2RlbCA9IHRlbGVTdWl0ZVVwZGF0ZXIuYXNNb2RlbCgpO1xuICAgICAgY29uc3QgdGVzdFRyZWUgPSBuZXcgVGVzdFRyZWUoJycsIHRlc3RNb2RlbC5yb290U3VpdGUsIHRlc3RNb2RlbC5sb2FkRXJyb3JzLCBwcm9qZWN0RmlsdGVycywgcXVlcnlQYXJhbXMucGF0aFNlcGFyYXRvcik7XG5cbiAgICAgIGNvbnN0IHRlc3RJZHM6IHN0cmluZ1tdID0gW107XG4gICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KHBhcmFtcy50ZXN0RmlsZXMpO1xuICAgICAgaWYgKHdhdGNoQWxsKSB7XG4gICAgICAgIGNvbnN0IHZpc2l0ID0gKHRyZWVJdGVtOiBUcmVlSXRlbSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gdHJlZUl0ZW0ubG9jYXRpb24uZmlsZTtcbiAgICAgICAgICBpZiAoZmlsZU5hbWUgJiYgc2V0LmhhcyhmaWxlTmFtZSkpXG4gICAgICAgICAgICB0ZXN0SWRzLnB1c2goLi4udGVzdFRyZWUuY29sbGVjdFRlc3RJZHModHJlZUl0ZW0pKTtcbiAgICAgICAgICBpZiAodHJlZUl0ZW0ua2luZCA9PT0gJ2dyb3VwJyAmJiB0cmVlSXRlbS5zdWJLaW5kID09PSAnZm9sZGVyJylcbiAgICAgICAgICAgIHRyZWVJdGVtLmNoaWxkcmVuLmZvckVhY2godmlzaXQpO1xuICAgICAgICB9O1xuICAgICAgICB2aXNpdCh0ZXN0VHJlZS5yb290SXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IHRyZWVJZCBvZiB3YXRjaGVkVHJlZUlkcy52YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHRyZWVJdGVtID0gdGVzdFRyZWUudHJlZUl0ZW1CeUlkKHRyZWVJZCk7XG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSB0cmVlSXRlbT8ubG9jYXRpb24uZmlsZTtcbiAgICAgICAgICBpZiAoZmlsZU5hbWUgJiYgc2V0LmhhcyhmaWxlTmFtZSkpXG4gICAgICAgICAgICB0ZXN0SWRzLnB1c2goLi4udGVzdFRyZWUuY29sbGVjdFRlc3RJZHModHJlZUl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcnVuVGVzdHMoJ3F1ZXVlLWlmLWJ1c3knLCBuZXcgU2V0KHRlc3RJZHMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKCkgPT4gZGlzcG9zYWJsZS5kaXNwb3NlKCk7XG4gIH0sIFtydW5UZXN0cywgdGVzdFNlcnZlckNvbm5lY3Rpb24sIHdhdGNoQWxsLCB3YXRjaGVkVHJlZUlkcywgdGVsZVN1aXRlVXBkYXRlciwgcHJvamVjdEZpbHRlcnNdKTtcblxuICAvLyBTaG9ydGN1dHMuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF0ZXN0U2VydmVyQ29ubmVjdGlvbilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBvblNob3J0Y3V0RXZlbnQgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgaWYgKGUuY29kZSA9PT0gJ0JhY2txdW90ZScgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0SXNTaG93aW5nT3V0cHV0KCFpc1Nob3dpbmdPdXRwdXQpO1xuICAgICAgfSBlbHNlIGlmIChlLmNvZGUgPT09ICdGNScgJiYgZS5zaGlmdEtleSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRlc3RTZXJ2ZXJDb25uZWN0aW9uPy5zdG9wVGVzdHNOb1JlcGx5KHt9KTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb2RlID09PSAnRjUnKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcnVuVGVzdHMoJ2JvdW5jZS1pZi1idXN5JywgdmlzaWJsZVRlc3RJZHMpO1xuICAgICAgfVxuICAgIH07XG4gICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uU2hvcnRjdXRFdmVudCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblNob3J0Y3V0RXZlbnQpO1xuICAgIH07XG4gIH0sIFtydW5UZXN0cywgcmVsb2FkVGVzdHMsIHRlc3RTZXJ2ZXJDb25uZWN0aW9uLCB2aXNpYmxlVGVzdElkcywgaXNTaG93aW5nT3V0cHV0XSk7XG5cbiAgY29uc3QgZGlhbG9nUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaWFsb2dFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgb3Blbkluc3RhbGxEaWFsb2cgPSBSZWFjdC51c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRpYWxvZ1JlZi5jdXJyZW50Py5zaG93TW9kYWwoKTtcbiAgfSwgW10pO1xuICBjb25zdCBjbG9zZUluc3RhbGxEaWFsb2cgPSBSZWFjdC51c2VDYWxsYmFjaygoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRpYWxvZ1JlZi5jdXJyZW50Py5jbG9zZSgpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGluc3RhbGxCcm93c2VycyA9IFJlYWN0LnVzZUNhbGxiYWNrKChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgY2xvc2VJbnN0YWxsRGlhbG9nKGUpO1xuICAgIHNldElzU2hvd2luZ091dHB1dCh0cnVlKTtcbiAgICB0ZXN0U2VydmVyQ29ubmVjdGlvbj8uaW5zdGFsbEJyb3dzZXJzKHt9KS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAgIHNldElzU2hvd2luZ091dHB1dChmYWxzZSk7XG4gICAgICBjb25zdCB7IGhhc0Jyb3dzZXJzIH0gPSBhd2FpdCB0ZXN0U2VydmVyQ29ubmVjdGlvbj8uY2hlY2tCcm93c2Vycyh7fSk7XG4gICAgICBzZXRIYXNCcm93c2VycyhoYXNCcm93c2Vycyk7XG4gICAgfSk7XG4gIH0sIFtjbG9zZUluc3RhbGxEaWFsb2csIHRlc3RTZXJ2ZXJDb25uZWN0aW9uXSk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSd2Ym94IHVpLW1vZGUnPlxuICAgIHshaGFzQnJvd3NlcnMgJiYgPGRpYWxvZyByZWY9e2RpYWxvZ1JlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPjxzcGFuIGNsYXNzTmFtZT0nY29kaWNvbiBjb2RpY29uLWxpZ2h0YnVsYic+PC9zcGFuPkluc3RhbGwgYnJvd3NlcnM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgUGxheXdyaWdodCBkaWQgbm90IGZpbmQgaW5zdGFsbGVkIGJyb3dzZXJzLlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgV291bGQgeW91IGxpa2UgdG8gcnVuIGBwbGF5d3JpZ2h0IGluc3RhbGxgP1xuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbicgb25DbGljaz17aW5zdGFsbEJyb3dzZXJzfT5JbnN0YWxsPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gc2Vjb25kYXJ5JyBvbkNsaWNrPXtjbG9zZUluc3RhbGxEaWFsb2d9PkRpc21pc3M8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGlhbG9nPn1cbiAgICB7aXNEaXNjb25uZWN0ZWQgJiYgPGRpdiBjbGFzc05hbWU9J2Rpc2Nvbm5lY3RlZCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlVJIE1vZGUgZGlzY29ubmVjdGVkPC9kaXY+XG4gICAgICA8ZGl2PjxhIGhyZWY9JyMnIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nfT5SZWxvYWQgdGhlIHBhZ2U8L2E+IHRvIHJlY29ubmVjdDwvZGl2PlxuICAgIDwvZGl2Pn1cbiAgICA8U3BsaXRWaWV3XG4gICAgICBzaWRlYmFyU2l6ZT17MjUwfVxuICAgICAgbWluU2lkZWJhclNpemU9ezE1MH1cbiAgICAgIG9yaWVudGF0aW9uPSdob3Jpem9udGFsJ1xuICAgICAgc2lkZWJhcklzRmlyc3Q9e3RydWV9XG4gICAgICBzZXR0aW5nTmFtZT0ndGVzdExpc3RTaWRlYmFyJ1xuICAgICAgbWFpbj17PGRpdiBjbGFzc05hbWU9J3Zib3gnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgndmJveCcsICFpc1Nob3dpbmdPdXRwdXQgJiYgJ2hpZGRlbicpfT5cbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJyBzdHlsZT17eyBmbGV4OiAnbm9uZScgfX0+T3V0cHV0PC9kaXY+XG4gICAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBpY29uPSdjaXJjbGUtc2xhc2gnIHRpdGxlPSdDbGVhciBvdXRwdXQnIG9uQ2xpY2s9eygpID0+IHsgeHRlcm1EYXRhU291cmNlLmNsZWFyKCk7IHNldE91dHB1dENvbnRhaW5zRXJyb3IoZmFsc2UpOyB9fT48L1Rvb2xiYXJCdXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2VyJz48L2Rpdj5cbiAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uIGljb249J2Nsb3NlJyB0aXRsZT0nQ2xvc2UnIG9uQ2xpY2s9eygpID0+IHNldElzU2hvd2luZ091dHB1dChmYWxzZSl9PjwvVG9vbGJhckJ1dHRvbj5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgPFh0ZXJtV3JhcHBlciBzb3VyY2U9e3h0ZXJtRGF0YVNvdXJjZX0+PC9YdGVybVdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgndmJveCcsIGlzU2hvd2luZ091dHB1dCAmJiAnaGlkZGVuJyl9PlxuICAgICAgICAgIDxUcmFjZVZpZXdcbiAgICAgICAgICAgIHBhdGhTZXBhcmF0b3I9e3F1ZXJ5UGFyYW1zLnBhdGhTZXBhcmF0b3J9XG4gICAgICAgICAgICBpdGVtPXtzZWxlY3RlZEl0ZW19XG4gICAgICAgICAgICByb290RGlyPXt0ZXN0TW9kZWw/LmNvbmZpZz8ucm9vdERpcn1cbiAgICAgICAgICAgIHJldmVhbFNvdXJjZT17cmV2ZWFsU291cmNlfVxuICAgICAgICAgICAgb25PcGVuRXh0ZXJuYWxseT17bG9jYXRpb24gPT4gdGVzdFNlcnZlckNvbm5lY3Rpb24/Lm9wZW5Ob1JlcGx5KHsgbG9jYXRpb246IHsgZmlsZTogbG9jYXRpb24uZmlsZSwgbGluZTogbG9jYXRpb24ubGluZSwgY29sdW1uOiBsb2NhdGlvbi5jb2x1bW4gfSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pn1cbiAgICAgIHNpZGViYXI9ezxkaXYgY2xhc3NOYW1lPSd2Ym94IHVpLW1vZGUtc2lkZWJhcic+XG4gICAgICAgIDxUb29sYmFyIG5vU2hhZG93PXt0cnVlfSBub01pbkhlaWdodD17dHJ1ZX0+XG4gICAgICAgICAgPGltZyBzcmM9J3BsYXl3cmlnaHQtbG9nby5zdmcnIGFsdD0nUGxheXdyaWdodCBsb2dvJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5QbGF5d3JpZ2h0PC9kaXY+XG4gICAgICAgICAgPFRvb2xiYXJCdXR0b24gaWNvbj0ncmVmcmVzaCcgdGl0bGU9J1JlbG9hZCcgb25DbGljaz17KCkgPT4gcmVsb2FkVGVzdHMoKX0gZGlzYWJsZWQ9e2lzUnVubmluZ1Rlc3QgfHwgaXNMb2FkaW5nfT48L1Rvb2xiYXJCdXR0b24+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxUb29sYmFyQnV0dG9uIGljb249eyd0ZXJtaW5hbCd9IHRpdGxlPXsnVG9nZ2xlIG91dHB1dCDigJQgJyArIChpc01hYyA/ICfijINgJyA6ICdDdHJsICsgYCcpfSB0b2dnbGVkPXtpc1Nob3dpbmdPdXRwdXR9IG9uQ2xpY2s9eygpID0+IHsgc2V0SXNTaG93aW5nT3V0cHV0KCFpc1Nob3dpbmdPdXRwdXQpOyB9fSAvPlxuICAgICAgICAgICAge291dHB1dENvbnRhaW5zRXJyb3IgJiYgPGRpdiB0aXRsZT0nT3V0cHV0IGNvbnRhaW5zIGVycm9yJyBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAyLCByaWdodDogMiwgd2lkdGg6IDcsIGhlaWdodDogNywgYm9yZGVyUmFkaXVzOiAnNTAlJywgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tdnNjb2RlLW5vdGlmaWNhdGlvbnNFcnJvckljb24tZm9yZWdyb3VuZCknIH19IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshaGFzQnJvd3NlcnMgJiYgPFRvb2xiYXJCdXR0b24gaWNvbj0nbGlnaHRidWxiLWF1dG9maXgnIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdnNjb2RlLWxpc3Qtd2FybmluZ0ZvcmVncm91bmQpJyB9fSB0aXRsZT0nUGxheXdyaWdodCBicm93c2VycyBhcmUgbWlzc2luZycgb25DbGljaz17b3Blbkluc3RhbGxEaWFsb2d9IC8+fVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDxGaWx0ZXJzVmlld1xuICAgICAgICAgIGZpbHRlclRleHQ9e2ZpbHRlclRleHR9XG4gICAgICAgICAgc2V0RmlsdGVyVGV4dD17c2V0RmlsdGVyVGV4dH1cbiAgICAgICAgICBzdGF0dXNGaWx0ZXJzPXtzdGF0dXNGaWx0ZXJzfVxuICAgICAgICAgIHNldFN0YXR1c0ZpbHRlcnM9e3NldFN0YXR1c0ZpbHRlcnN9XG4gICAgICAgICAgcHJvamVjdEZpbHRlcnM9e3Byb2plY3RGaWx0ZXJzfVxuICAgICAgICAgIHNldFByb2plY3RGaWx0ZXJzPXtzZXRQcm9qZWN0RmlsdGVyc31cbiAgICAgICAgICB0ZXN0TW9kZWw9e3Rlc3RNb2RlbH1cbiAgICAgICAgICBydW5UZXN0cz17KCkgPT4gcnVuVGVzdHMoJ2JvdW5jZS1pZi1idXN5JywgdmlzaWJsZVRlc3RJZHMpfSAvPlxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9J3NlY3Rpb24tdG9vbGJhcicgbm9NaW5IZWlnaHQ9e3RydWV9PlxuICAgICAgICAgIHshaXNSdW5uaW5nVGVzdCAmJiAhcHJvZ3Jlc3MgJiYgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUnPlRlc3RzPC9kaXY+fVxuICAgICAgICAgIHshaXNSdW5uaW5nVGVzdCAmJiBwcm9ncmVzcyAmJiA8ZGl2IGRhdGEtdGVzdGlkPSdzdGF0dXMtbGluZScgY2xhc3NOYW1lPSdzdGF0dXMtbGluZSc+XG4gICAgICAgICAgICA8ZGl2Pntwcm9ncmVzcy5wYXNzZWR9L3twcm9ncmVzcy50b3RhbH0gcGFzc2VkICh7KHByb2dyZXNzLnBhc3NlZCAvIHByb2dyZXNzLnRvdGFsKSAqIDEwMCB8IDB9JSk8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAge2lzUnVubmluZ1Rlc3QgJiYgcHJvZ3Jlc3MgJiYgPGRpdiBkYXRhLXRlc3RpZD0nc3RhdHVzLWxpbmUnIGNsYXNzTmFtZT0nc3RhdHVzLWxpbmUnPlxuICAgICAgICAgICAgPGRpdj5SdW5uaW5nIHtwcm9ncmVzcy5wYXNzZWR9L3tydW5uaW5nU3RhdGUudGVzdElkcy5zaXplfSBwYXNzZWQgKHsocHJvZ3Jlc3MucGFzc2VkIC8gcnVubmluZ1N0YXRlLnRlc3RJZHMuc2l6ZSkgKiAxMDAgfCAwfSUpPC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgIDxUb29sYmFyQnV0dG9uIGljb249J3BsYXknIHRpdGxlPSdSdW4gYWxsIOKAlCBGNScgb25DbGljaz17KCkgPT4gcnVuVGVzdHMoJ2JvdW5jZS1pZi1idXN5JywgdmlzaWJsZVRlc3RJZHMpfSBkaXNhYmxlZD17aXNSdW5uaW5nVGVzdCB8fCBpc0xvYWRpbmd9PjwvVG9vbGJhckJ1dHRvbj5cbiAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBpY29uPSdkZWJ1Zy1zdG9wJyB0aXRsZT17J1N0b3Ag4oCUICcgKyAoaXNNYWMgPyAn4oenRjUnIDogJ1NoaWZ0ICsgRjUnKX0gb25DbGljaz17KCkgPT4gdGVzdFNlcnZlckNvbm5lY3Rpb24/LnN0b3BUZXN0cyh7fSl9IGRpc2FibGVkPXshaXNSdW5uaW5nVGVzdCB8fCBpc0xvYWRpbmd9PjwvVG9vbGJhckJ1dHRvbj5cbiAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBpY29uPSdleWUnIHRpdGxlPSdXYXRjaCBhbGwnIHRvZ2dsZWQ9e3dhdGNoQWxsfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRXYXRjaGVkVHJlZUlkcyh7IHZhbHVlOiBuZXcgU2V0KCkgfSk7XG4gICAgICAgICAgICBzZXRXYXRjaEFsbCghd2F0Y2hBbGwpO1xuICAgICAgICAgIH19PjwvVG9vbGJhckJ1dHRvbj5cbiAgICAgICAgICA8VG9vbGJhckJ1dHRvbiBpY29uPSdjb2xsYXBzZS1hbGwnIHRpdGxlPSdDb2xsYXBzZSBhbGwnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldENvbGxhcHNlQWxsQ291bnQoY29sbGFwc2VBbGxDb3VudCArIDEpO1xuICAgICAgICAgIH19IC8+XG4gICAgICAgICAgPFRvb2xiYXJCdXR0b24gaWNvbj0nZXhwYW5kLWFsbCcgdGl0bGU9J0V4cGFuZCBhbGwnIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEV4cGFuZEFsbENvdW50KGV4cGFuZEFsbENvdW50ICsgMSk7XG4gICAgICAgICAgfX0gLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8VGVzdExpc3RWaWV3XG4gICAgICAgICAgZmlsdGVyVGV4dD17ZmlsdGVyVGV4dH1cbiAgICAgICAgICB0ZXN0TW9kZWw9e3Rlc3RNb2RlbH1cbiAgICAgICAgICB0ZXN0VHJlZT17dGVzdFRyZWV9XG4gICAgICAgICAgdGVzdFNlcnZlckNvbm5lY3Rpb249e3Rlc3RTZXJ2ZXJDb25uZWN0aW9ufVxuICAgICAgICAgIHJ1bm5pbmdTdGF0ZT17cnVubmluZ1N0YXRlfVxuICAgICAgICAgIHJ1blRlc3RzPXtydW5UZXN0c31cbiAgICAgICAgICBvbkl0ZW1TZWxlY3RlZD17c2V0U2VsZWN0ZWRJdGVtfVxuICAgICAgICAgIHdhdGNoQWxsPXt3YXRjaEFsbH1cbiAgICAgICAgICB3YXRjaGVkVHJlZUlkcz17d2F0Y2hlZFRyZWVJZHN9XG4gICAgICAgICAgc2V0V2F0Y2hlZFRyZWVJZHM9e3NldFdhdGNoZWRUcmVlSWRzfVxuICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgIHJlcXVlc3RlZENvbGxhcHNlQWxsQ291bnQ9e2NvbGxhcHNlQWxsQ291bnR9XG4gICAgICAgICAgcmVxdWVzdGVkRXhwYW5kQWxsQ291bnQ9e2V4cGFuZEFsbENvdW50fVxuICAgICAgICAgIHNldEZpbHRlclRleHQ9e3NldEZpbHRlclRleHR9XG4gICAgICAgICAgb25SZXZlYWxTb3VyY2U9e29uUmV2ZWFsU291cmNlfVxuICAgICAgICAvPlxuICAgICAgICA8VG9vbGJhciBub1NoYWRvdz17dHJ1ZX0gbm9NaW5IZWlnaHQ9e3RydWV9IGNsYXNzTmFtZT0nc2V0dGluZ3MtdG9vbGJhcicgb25DbGljaz17KCkgPT4gc2V0VGVzdGluZ09wdGlvbnNWaXNpYmxlKCF0ZXN0aW5nT3B0aW9uc1Zpc2libGUpfT5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29kaWNvbiBjb2RpY29uLSR7dGVzdGluZ09wdGlvbnNWaXNpYmxlID8gJ2NoZXZyb24tZG93bicgOiAnY2hldnJvbi1yaWdodCd9YH1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX1cbiAgICAgICAgICAgIHRpdGxlPXt0ZXN0aW5nT3B0aW9uc1Zpc2libGUgPyAnSGlkZSBUZXN0aW5nIE9wdGlvbnMnIDogJ1Nob3cgVGVzdGluZyBPcHRpb25zJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlJz5UZXN0aW5nIE9wdGlvbnM8L2Rpdj5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICB7dGVzdGluZ09wdGlvbnNWaXNpYmxlICYmIDxTZXR0aW5nc1ZpZXcgc2V0dGluZ3M9e1tcbiAgICAgICAgICB7IHR5cGU6ICdzZWxlY3QnLCBvcHRpb25zOiBbXG4gICAgICAgICAgICB7IGxhYmVsOiAnQWxsJywgdmFsdWU6ICdhbGwnIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiAnQ2hhbmdlZCcsIHZhbHVlOiAnY2hhbmdlZCcgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6ICdNaXNzaW5nJywgdmFsdWU6ICdtaXNzaW5nJyB9LFxuICAgICAgICAgICAgeyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogJ25vbmUnIH0sXG4gICAgICAgICAgXSwgdmFsdWU6IHVwZGF0ZVNuYXBzaG90cywgc2V0OiBzZXRVcGRhdGVTbmFwc2hvdHMgYXMgKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQsIG5hbWU6ICdVcGRhdGUgc25hcHNob3RzJyB9LFxuICAgICAgICBdfSAvPn1cbiAgICAgICAgPFRvb2xiYXIgbm9TaGFkb3c9e3RydWV9IG5vTWluSGVpZ2h0PXt0cnVlfSBjbGFzc05hbWU9J3NldHRpbmdzLXRvb2xiYXInIG9uQ2xpY2s9eygpID0+IHNldFNldHRpbmdzVmlzaWJsZSghc2V0dGluZ3NWaXNpYmxlKX0+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvZGljb24gY29kaWNvbi0ke3NldHRpbmdzVmlzaWJsZSA/ICdjaGV2cm9uLWRvd24nIDogJ2NoZXZyb24tcmlnaHQnfWB9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19XG4gICAgICAgICAgICB0aXRsZT17c2V0dGluZ3NWaXNpYmxlID8gJ0hpZGUgU2V0dGluZ3MnIDogJ1Nob3cgU2V0dGluZ3MnfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUnPlNldHRpbmdzPC9kaXY+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAge3NldHRpbmdzVmlzaWJsZSAmJiA8RGVmYXVsdFNldHRpbmdzVmlldyAvPn1cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIC8+XG4gIDwvZGl2Pjtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgJ0B3ZWIvY29tbW9uLmNzcyc7XG5pbXBvcnQgeyBhcHBseVRoZW1lIH0gZnJvbSAnQHdlYi90aGVtZSc7XG5pbXBvcnQgJ0B3ZWIvdGhpcmRfcGFydHkvdnNjb2RlL2NvZGljb24uY3NzJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgVUlNb2RlVmlldyB9IGZyb20gJy4vdWkvdWlNb2RlVmlldyc7XG5cbihhc3luYyAoKSA9PiB7XG4gIGFwcGx5VGhlbWUoKTtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2ZpbGU6Jykge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcygnaXNVbmRlclRlc3Q9dHJ1ZScpKVxuICAgICAgYXdhaXQgbmV3IFByb21pc2UoZiA9PiBzZXRUaW1lb3V0KGYsIDEwMDApKTtcbiAgICBpZiAoIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2aWNlIHdvcmtlcnMgYXJlIG5vdCBzdXBwb3J0ZWQuXFxuTWFrZSBzdXJlIHRvIHNlcnZlIHRoZSB3ZWJzaXRlICgke3dpbmRvdy5sb2NhdGlvbn0pIHZpYSBIVFRQUyBvciBsb2NhbGhvc3QuYCk7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmJ1bmRsZS5qcycpO1xuICAgIGlmICghbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oZiA9PiB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLm9uY29udHJvbGxlcmNoYW5nZSA9ICgpID0+IGYoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEtlZXAgU1cgcnVubmluZy5cbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHsgZmV0Y2goJ3BpbmcnKTsgfSwgMTAwMDApO1xuICB9XG5cbiAgUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpISkucmVuZGVyKDxVSU1vZGVWaWV3Lz4pO1xufSkoKTtcbiJdLCJmaWxlIjoidWlNb2RlLlJucjFVQUFGLmpzIn0=