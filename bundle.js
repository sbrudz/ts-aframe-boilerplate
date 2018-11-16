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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nexports.__esModule = true;\nAFRAME.registerComponent('hello-world', {\n    schema: {\n        rotationSpeed: {\n            \"default\": 2\n        }\n    },\n    /**\n     * Set if component needs multiple instancing.\n     */\n    multiple: false,\n    /**\n     * Called once when component is attached. Generally for initial setup.\n     */\n    init: function () {\n    },\n    /**\n     * Called when component is attached and when component data changes.\n     * Generally modifies the entity based on the data.\n     */\n    update: function (oldData) {\n    },\n    /**\n     * Called when a component is removed (e.g., via removeAttribute).\n     * Generally undoes all modifications to the entity.\n     */\n    remove: function () {\n    },\n    /**\n     * Called on each scene tick.\n     */\n    tick: function (time, timeDelta) {\n        if (this.isPlaying) {\n            var rotation = this.el.getAttribute('rotation');\n            var newRotation = __assign({}, rotation);\n            newRotation.x += this.data.rotationSpeed;\n            newRotation.z += this.data.rotationSpeed;\n            this.el.setAttribute('rotation', newRotation);\n        }\n    },\n    /**\n     * Called when entity pauses.\n     * Use to stop or remove any dynamic or background behavior such as events.\n     */\n    pause: function () {\n    },\n    /**\n     * Called when entity resumes.\n     * Use to continue or add any dynamic or background behavior such as events.\n     */\n    play: function () {\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGhlbGxvLXdvcmxkIGNvbXBvbmVudCBmb3IgQS1GcmFtZS5cbiAqL1xuaW1wb3J0IHtDb29yZGluYXRlfSBmcm9tIFwiYWZyYW1lXCI7XG5cbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnaGVsbG8td29ybGQnLCB7XG4gICAgc2NoZW1hOiB7XG4gICAgICAgIHJvdGF0aW9uU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDJcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgaWYgY29tcG9uZW50IG5lZWRzIG11bHRpcGxlIGluc3RhbmNpbmcuXG4gICAgICovXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIG9uY2Ugd2hlbiBjb21wb25lbnQgaXMgYXR0YWNoZWQuIEdlbmVyYWxseSBmb3IgaW5pdGlhbCBzZXR1cC5cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGNvbXBvbmVudCBpcyBhdHRhY2hlZCBhbmQgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxuICAgICAqIEdlbmVyYWxseSBtb2RpZmllcyB0aGUgZW50aXR5IGJhc2VkIG9uIHRoZSBkYXRhLlxuICAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKG9sZERhdGEpIHtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgcmVtb3ZlZCAoZS5nLiwgdmlhIHJlbW92ZUF0dHJpYnV0ZSkuXG4gICAgICogR2VuZXJhbGx5IHVuZG9lcyBhbGwgbW9kaWZpY2F0aW9ucyB0byB0aGUgZW50aXR5LlxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gZWFjaCBzY2VuZSB0aWNrLlxuICAgICAqL1xuICAgIHRpY2s6IGZ1bmN0aW9uICh0aW1lOiBudW1iZXIsIHRpbWVEZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgICAgICAgY29uc3Qgcm90YXRpb246IENvb3JkaW5hdGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgncm90YXRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdGF0aW9uID0gey4uLnJvdGF0aW9ufTtcbiAgICAgICAgICAgIG5ld1JvdGF0aW9uLnggKz0gdGhpcy5kYXRhLnJvdGF0aW9uU3BlZWQ7XG4gICAgICAgICAgICBuZXdSb3RhdGlvbi56ICs9IHRoaXMuZGF0YS5yb3RhdGlvblNwZWVkO1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJywgbmV3Um90YXRpb24pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGVudGl0eSBwYXVzZXMuXG4gICAgICogVXNlIHRvIHN0b3Agb3IgcmVtb3ZlIGFueSBkeW5hbWljIG9yIGJhY2tncm91bmQgYmVoYXZpb3Igc3VjaCBhcyBldmVudHMuXG4gICAgICovXG4gICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZW50aXR5IHJlc3VtZXMuXG4gICAgICogVXNlIHRvIGNvbnRpbnVlIG9yIGFkZCBhbnkgZHluYW1pYyBvciBiYWNrZ3JvdW5kIGJlaGF2aW9yIHN1Y2ggYXMgZXZlbnRzLlxuICAgICAqL1xuICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });