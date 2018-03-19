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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/***/ (function(module, exports) {

eval("var __assign = (this && this.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nAFRAME.registerComponent('hello-world', {\n    schema: {\n        rotationSpeed: {\n            \"default\": 2\n        }\n    },\n    /**\n     * Set if component needs multiple instancing.\n     */\n    multiple: false,\n    /**\n     * Called once when component is attached. Generally for initial setup.\n     */\n    init: function () {\n    },\n    /**\n     * Called when component is attached and when component data changes.\n     * Generally modifies the entity based on the data.\n     */\n    update: function (oldData) {\n    },\n    /**\n     * Called when a component is removed (e.g., via removeAttribute).\n     * Generally undoes all modifications to the entity.\n     */\n    remove: function () { },\n    /**\n     * Called on each scene tick.\n     */\n    tick: function (time, timeDelta) {\n        if (this.isPlaying) {\n            var rotation = this.el.getAttribute('rotation');\n            var newRotation = __assign({}, rotation);\n            newRotation.x += this.data.rotationSpeed;\n            newRotation.z += this.data.rotationSpeed;\n            this.el.setAttribute('rotation', newRotation);\n        }\n    },\n    /**\n     * Called when entity pauses.\n     * Use to stop or remove any dynamic or background behavior such as events.\n     */\n    pause: function () { },\n    /**\n     * Called when entity resumes.\n     * Use to continue or add any dynamic or background behavior such as events.\n     */\n    play: function () { }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGhlbGxvLXdvcmxkIGNvbXBvbmVudCBmb3IgQS1GcmFtZS5cbiAqL1xuaW1wb3J0IENvb3JkaW5hdGUgPSBBRnJhbWUuQ29vcmRpbmF0ZTtcblxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdoZWxsby13b3JsZCcsIHtcbiAgICBzY2hlbWE6IHtcbiAgICAgICAgcm90YXRpb25TcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMlxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBpZiBjb21wb25lbnQgbmVlZHMgbXVsdGlwbGUgaW5zdGFuY2luZy5cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogZmFsc2UsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb25jZSB3aGVuIGNvbXBvbmVudCBpcyBhdHRhY2hlZC4gR2VuZXJhbGx5IGZvciBpbml0aWFsIHNldHVwLlxuICAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGlzIGF0dGFjaGVkIGFuZCB3aGVuIGNvbXBvbmVudCBkYXRhIGNoYW5nZXMuXG4gICAgICogR2VuZXJhbGx5IG1vZGlmaWVzIHRoZSBlbnRpdHkgYmFzZWQgb24gdGhlIGRhdGEuXG4gICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAob2xkRGF0YSkge1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGNvbXBvbmVudCBpcyByZW1vdmVkIChlLmcuLCB2aWEgcmVtb3ZlQXR0cmlidXRlKS5cbiAgICAgKiBHZW5lcmFsbHkgdW5kb2VzIGFsbCBtb2RpZmljYXRpb25zIHRvIHRoZSBlbnRpdHkuXG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7IH0sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgb24gZWFjaCBzY2VuZSB0aWNrLlxuICAgICAqL1xuICAgIHRpY2s6IGZ1bmN0aW9uICh0aW1lOiBudW1iZXIsIHRpbWVEZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgICAgICAgY29uc3Qgcm90YXRpb246IENvb3JkaW5hdGUgPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgncm90YXRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdGF0aW9uID0geyAuLi5yb3RhdGlvbiB9O1xuICAgICAgICAgICAgbmV3Um90YXRpb24ueCArPSB0aGlzLmRhdGEucm90YXRpb25TcGVlZDtcbiAgICAgICAgICAgIG5ld1JvdGF0aW9uLnogKz0gdGhpcy5kYXRhLnJvdGF0aW9uU3BlZWQ7XG4gICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgncm90YXRpb24nLCBuZXdSb3RhdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZW50aXR5IHBhdXNlcy5cbiAgICAgKiBVc2UgdG8gc3RvcCBvciByZW1vdmUgYW55IGR5bmFtaWMgb3IgYmFja2dyb3VuZCBiZWhhdmlvciBzdWNoIGFzIGV2ZW50cy5cbiAgICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24gKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBlbnRpdHkgcmVzdW1lcy5cbiAgICAgKiBVc2UgdG8gY29udGludWUgb3IgYWRkIGFueSBkeW5hbWljIG9yIGJhY2tncm91bmQgYmVoYXZpb3Igc3VjaCBhcyBldmVudHMuXG4gICAgICovXG4gICAgcGxheTogZnVuY3Rpb24gKCkge31cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });