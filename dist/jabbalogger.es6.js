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
/* harmony export (immutable) */ __webpack_exports__["hex"] = hex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_objectAssign__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_objectAssign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_objectAssign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guid__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return __WEBPACK_IMPORTED_MODULE_1__guid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return __WEBPACK_IMPORTED_MODULE_2__message__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EventLog", function() { return __WEBPACK_IMPORTED_MODULE_2__message__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Measurement", function() { return __WEBPACK_IMPORTED_MODULE_2__message__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logLevel__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return __WEBPACK_IMPORTED_MODULE_3__logLevel__["a"]; });




function hex(str) {
    if (typeof str !== 'string') {
        return [];
    }
    return [str];
}


/***/ }),
/* 1 */
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
/* 2 */
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
    constructor(message) {
        this.id = '1234';
        this.logTime = new Date();
        this.message = message;
        this.tags = {};
    }
    getMessageType() {
        return MessageType.EventLog;
    }
    getMessage() {
        return {
            message: this.message,
            tags: this.tags
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventLog;

class Measurement {
    constructor(name, value) {
        this.id = '1234';
        this.logTime = new Date();
        this.name = name;
        this.value = value;
        this.tags = {};
    }
    getMessageType() {
        return MessageType.Measurement;
    }
    getMessage() {
        return {
            name: this.name,
            value: this.value,
            tags: this.tags
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Measurement;



/***/ }),
/* 4 */
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


/***/ })
/******/ ]);