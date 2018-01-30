var jabbalogger =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_objectAssign__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_objectAssign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_objectAssign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sinks_console__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinks_localStorage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logger__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loggerFactory__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guid__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return __WEBPACK_IMPORTED_MODULE_5__guid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return __WEBPACK_IMPORTED_MODULE_6__message__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventLog", function() { return __WEBPACK_IMPORTED_MODULE_6__message__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Measurement", function() { return __WEBPACK_IMPORTED_MODULE_6__message__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logLevel__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return __WEBPACK_IMPORTED_MODULE_7__logLevel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return __WEBPACK_IMPORTED_MODULE_3__logger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerConfiguration", function() { return __WEBPACK_IMPORTED_MODULE_4__loggerFactory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleSink", function() { return __WEBPACK_IMPORTED_MODULE_1__sinks_console__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageSink", function() { return __WEBPACK_IMPORTED_MODULE_2__sinks_localStorage__["a"]; });











/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogLevel; });
// Enums for logging level
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Information"] = 2] = "Information";
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    LogLevel[LogLevel["Error"] = 8] = "Error";
    LogLevel[LogLevel["Fatal"] = 16] = "Fatal";
})(LogLevel || (LogLevel = {}));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logLevel__ = __webpack_require__(1);



class Logger {
    constructor(logSinks) {
        this.logSinks = logSinks;
    }
    warning(message, tags = {}) {
        const log = new __WEBPACK_IMPORTED_MODULE_1__index__["EventLog"](__WEBPACK_IMPORTED_MODULE_2__logLevel__["a" /* LogLevel */].Warning, message, tags);
        this.write(log);
    }
    measure(name, value, tags = {}) {
        const measurement = new __WEBPACK_IMPORTED_MODULE_0__message__["b" /* Measurement */](name, value, tags);
        this.write(measurement);
    }
    flush() {
        return this.logSinks.flush();
    }
    emit(events) {
        try {
            this.logSinks.emit(events);
            return events;
        }
        catch (error) {
            throw error;
        }
    }
    write(message, properties, error) {
        this.logSinks.emit([message]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Logger;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MessageType; });
var MessageType;
(function (MessageType) {
    MessageType[MessageType["EventLog"] = 1] = "EventLog";
    MessageType[MessageType["Measurement"] = 2] = "Measurement";
})(MessageType || (MessageType = {}));
class EventLog {
    constructor(logLevel, message, tags) {
        this.id = '1234';
        this.logLevel = logLevel;
        this.logTime = new Date();
        this.message = message;
        this.tags = tags;
    }
    getMessageType() {
        return MessageType.EventLog;
    }
    getMessage() {
        return this.message;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventLog;

class Measurement {
    constructor(name, value, tags) {
        this.id = '1234';
        this.logTime = new Date();
        this.name = name;
        this.value = value;
        this.tags = tags;
    }
    getMessageType() {
        return MessageType.Measurement;
    }
    getMessage() {
        return `metrics: ${this.name} = ${this.value}`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Measurement;



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (typeof Object.assign != 'function') {
    Object.assign = function (target, varArgs) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var nextSource = arguments[index];
            if (nextSource != null) {
                for (var nextKey in nextSource) {
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
        }
        return to;
    };
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logLevel__ = __webpack_require__(1);


class ConsoleSink {
    constructor(options) {
        this.options = options || {};
        const internalConsole = this.options.console || typeof console !== 'undefined' && console || null;
        const stub = function () { };
        // console.debug is no-op for Node, so use console.log instead.
        const nodeConsole = !this.options.console && typeof process !== 'undefined' && process.versions.node;
        this.console = {
            error: (internalConsole && (internalConsole.error || internalConsole.log)) || stub,
            warn: (internalConsole && (internalConsole.warn || internalConsole.log)) || stub,
            info: (internalConsole && (internalConsole.info || internalConsole.log)) || stub,
            debug: (internalConsole && ((!nodeConsole && internalConsole.debug) || internalConsole.log)) || stub,
            log: (internalConsole && internalConsole.log) || stub
        };
    }
    emit(events) {
        for (let i = 0; i < events.length; ++i) {
            const e = events[i];
            if (e.getMessageType() == __WEBPACK_IMPORTED_MODULE_0__index__["MessageType"].Measurement) {
                this.writeToConsole(this.console.info, 'Measurement', e);
            }
            else {
                switch (e.logLevel) {
                    case __WEBPACK_IMPORTED_MODULE_1__logLevel__["a" /* LogLevel */].Fatal:
                        this.writeToConsole(this.console.error, 'Fatal', e);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__logLevel__["a" /* LogLevel */].Error:
                        this.writeToConsole(this.console.error, 'Error', e);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__logLevel__["a" /* LogLevel */].Warning:
                        this.writeToConsole(this.console.warn, 'Warning', e);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__logLevel__["a" /* LogLevel */].Information:
                        this.writeToConsole(this.console.info, 'Information', e);
                        break;
                    case __WEBPACK_IMPORTED_MODULE_1__logLevel__["a" /* LogLevel */].Debug:
                        this.writeToConsole(this.console.debug, 'Debug', e);
                        break;
                    default:
                        this.writeToConsole(this.console.log, 'Log', e);
                        break;
                }
            }
        }
        return events;
    }
    flush() {
        return Promise.resolve();
    }
    writeToConsole(logMethod, prefix, e) {
        let output = `[${prefix}][${e.logTime}] ${e.getMessage()}`;
        if (this.options.includeTimestamps) {
            output = `${e.logTime} ${output}`;
        }
        const values = [];
        logMethod(output, ...values);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsoleSink;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LocalStorageSink {
    constructor() {
        LocalStorageSink._isSupport = LocalStorageSink.isSupported();
    }
    isEnabled() {
        return LocalStorageSink._isSupport;
    }
    static isSupported() {
        try {
            const itemBackup = localStorage.getItem("");
            localStorage.removeItem("");
            localStorage.setItem("", "testData");
            localStorage.removeItem("");
            if (itemBackup !== null) {
                localStorage.setItem("", itemBackup);
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
    create() {
    }
    emit(events) {
        for (let i = 0; i < events.length; ++i) {
            const e = events[i];
            console.log("LocalStorage Logging id" + e.id + "with:" + JSON.stringify(e));
            localStorage.setItem(e.id, JSON.stringify(e));
        }
        return events;
    }
    flush() {
        throw new Error('Not implemented yet.');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalStorageSink;

class WebStorages {
    static get localStorage() {
        if (WebStorages._localStorage !== undefined) {
            return WebStorages._localStorage;
        }
        return WebStorages._localStorage = WebStorages.local();
    }
    static local() {
        if (typeof localStorage === 'undefined') {
            return null;
        }
        try {
            localStorage.getItem(''); // localStorage was disabled by user.
        }
        catch (_a) {
            return null;
        }
        return localStorage;
    }
}
/* unused harmony export WebStorages */



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sink__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logger__ = __webpack_require__(2);


class LoggerConfiguration {
    constructor() {
        this.logSinks = new __WEBPACK_IMPORTED_MODULE_0__sink__["a" /* LogSinks */]();
    }
    writeTo(sink) {
        this.logSinks.addSink(sink);
        return this;
    }
    create() {
        return new __WEBPACK_IMPORTED_MODULE_1__logger__["a" /* Logger */](this.logSinks);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoggerConfiguration;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LogSinks {
    constructor() {
        this.sinks = [];
        this.eventQueue = [];
        this.flushInProgress = false;
    }
    addSink(sink) {
        this.sinks.push(sink);
    }
    emit(events) {
        if (this.flushInProgress) {
            this.eventQueue = this.eventQueue.concat(events);
            return this.flushPromise;
        }
        else {
            if (!this.sinks.length || !events.length) {
                return Promise.resolve();
            }
            let promise = Promise.resolve(this.sinks[0].emit(events));
            for (let i = 1; i < this.sinks.length; ++i) {
                promise = promise.then(events => this.sinks[i].emit(events));
            }
            return promise;
        }
    }
    flush() {
        if (this.flushInProgress) {
            return this.flushPromise;
        }
        this.flushInProgress = true;
        return this.flushPromise = Promise.resolve()
            .then(() => {
            if (this.sinks.length === 0) {
                return;
            }
            let promise = this.sinks[0].flush();
            for (let i = 1; i < this.sinks.length; ++i) {
                promise = promise.then(() => this.sinks[i].flush());
            }
            return promise;
        })
            .then(() => {
            this.flushInProgress = false;
            const queuedEvents = this.eventQueue.slice();
            this.eventQueue = [];
            return this.emit(queuedEvents);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LogSinks;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Guid;



/***/ })
/******/ ]);