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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\n  $.fn.Swifteroo = function () {\n    var $swifteroo = $(this);\n\n    function init() {\n      setVars();\n      bindEvents();\n    }\n\n    function setVars() {}\n\n    function bindEvents() {\n      $swifteroo.on('mousemove', getMousePosition);\n      $swifteroo.on('mouseleave', resetOrigin);\n\n      if (window.DeviceOrientationEvent) {\n        window.addEventListener(\"deviceorientation\", function () {\n          getDevicePosition(event.beta, event.gamma);\n        }, true);\n      } else if (window.DeviceMotionEvent) {\n        window.addEventListener('devicemotion', function () {\n          getDevicePosition(event.acceleration.x * 2, event.acceleration.y * 2);\n        }, true);\n      } else {\n        window.addEventListener(\"MozOrientation\", function () {\n          getDevicePosition(orientation.x * 50, orientation.y * 50);\n        }, true);\n      }\n    }\n\n    function resetOrigin() {\n      setTransformOrigin(50, 50, 0, 0, 0);\n    }\n\n    function getDevicePosition(z, x) {\n      var relativeYPositionPercentage = 100 / 180 * (x + 90);\n\n      if (relativeYPositionPercentage < 0) {\n        relativeYPositionPercentage = 0;\n      }\n\n      if (relativeYPositionPercentage > 100) {\n        relativeYPositionPercentage = 100;\n      }\n\n      var relativeXPositionPercentage = 100 / 180 * (z + 90);\n\n      if (relativeXPositionPercentage < 0) {\n        relativeXPositionPercentage = 0;\n      }\n\n      if (relativeXPositionPercentage > 100) {\n        relativeXPositionPercentage = 100;\n      }\n\n      var maxRotateDegrees = 50;\n      var rotation3dX = maxRotateDegrees * (relativeXPositionPercentage - 50) / 100;\n\n      if (rotation3dX > maxRotateDegrees / 2) {\n        rotation3dX = maxRotateDegrees;\n      }\n\n      if (rotation3dX < maxRotateDegrees / 2 * -1) {\n        rotation3dX = maxRotateDegrees * -1;\n      }\n\n      rotation3dX = rotation3dX * 2;\n      var rotation3dY = maxRotateDegrees * (relativeYPositionPercentage - 50) / 100;\n\n      if (rotation3dY > maxRotateDegrees / 2) {\n        rotation3dY = maxRotateDegrees;\n      }\n\n      if (rotation3dY < maxRotateDegrees / 2 * -1) {\n        rotation3dY = maxRotateDegrees * -1;\n      }\n\n      rotation3dY = rotation3dY * 2;\n      var rotation3dZ = maxRotateDegrees * (relativeXPositionPercentage - 50) / 200 * -1;\n\n      if (rotation3dZ > maxRotateDegrees / 2) {\n        rotation3dZ = maxRotateDegrees;\n      }\n\n      if (rotation3dZ < maxRotateDegrees / 2 * -1) {\n        rotation3dZ = maxRotateDegrees * -1;\n      }\n\n      rotation3dZ = rotation3dZ * 2;\n      setTransformOrigin(relativeXPositionPercentage, relativeYPositionPercentage, rotation3dX, rotation3dY, rotation3dZ);\n    }\n\n    function getMousePosition(e) {\n      var swifterooOffset = $swifteroo.offset();\n      var swifterooHeight = $swifteroo.height();\n      var swifterooWidth = $swifteroo.width();\n      var maxPercentage = 80;\n      var minPercentage = 20;\n      var relativeXPosition = e.clientX - swifterooOffset.left;\n      var relativeXPositionPercentage = maxPercentage / swifterooWidth * relativeXPosition;\n\n      if (relativeXPositionPercentage > maxPercentage) {\n        relativeXPositionPercentage = maxPercentage;\n      }\n\n      if (relativeXPositionPercentage < minPercentage) {\n        relativeXPositionPercentage = minPercentage;\n      }\n\n      var relativeYPosition = e.clientY - swifterooOffset.top;\n      var relativeYPositionPercentage = maxPercentage / swifterooHeight * relativeYPosition;\n\n      if (relativeYPositionPercentage > maxPercentage) {\n        relativeYPositionPercentage = maxPercentage;\n      }\n\n      if (relativeYPositionPercentage < minPercentage) {\n        relativeYPositionPercentage = minPercentage;\n      }\n\n      var maxRotateDegrees = 20;\n      var rotation3dX = maxRotateDegrees * (relativeXPositionPercentage - 50) / 100;\n\n      if (rotation3dX > maxRotateDegrees / 2) {\n        rotation3dX = maxRotateDegrees;\n      }\n\n      if (rotation3dX < maxRotateDegrees / 2 * -1) {\n        rotation3dX = maxRotateDegrees * -1;\n      }\n\n      var rotation3dY = maxRotateDegrees * (relativeYPositionPercentage - 50) / 100;\n\n      if (rotation3dY > maxRotateDegrees / 2) {\n        rotation3dY = maxRotateDegrees;\n      }\n\n      if (rotation3dY < maxRotateDegrees / 2 * -1) {\n        rotation3dY = maxRotateDegrees * -1;\n      }\n\n      var rotation3dZ = maxRotateDegrees * (relativeXPositionPercentage - 50) / 200 * -1;\n\n      if (rotation3dZ > maxRotateDegrees / 2) {\n        rotation3dZ = maxRotateDegrees;\n      }\n\n      if (rotation3dZ < maxRotateDegrees / 2 * -1) {\n        rotation3dZ = maxRotateDegrees * -1;\n      } // console.log(relativeXPositionPercentage, relativeYPositionPercentage, rotation3dX, rotation3dY, rotation3dZ);\n\n\n      setTransformOrigin(relativeXPositionPercentage, relativeYPositionPercentage, rotation3dX, rotation3dY, rotation3dZ);\n    }\n\n    function setTransformOrigin(x, y, degX, degY, degZ) {\n      var origin = x + '% ' + y + '% 0';\n      var rotation3dX = degX + 'deg';\n      var rotation3dY = degY + 'deg';\n      var rotation3dZ = degZ + 'deg';\n      $swifteroo.css({\n        'transform-origin': origin,\n        '-webkit-transform-origin': origin,\n        '-moz-transform-origin': origin,\n        '-ms-transform-origin': origin,\n        'transform': 'perspective(350px) rotateX(' + rotation3dX + ')' + 'rotateY(' + rotation3dY + ')' + 'rotateZ(' + rotation3dZ + ')'\n      });\n    }\n\n    init();\n  };\n\n  $('.swifteroo').Swifteroo();\n})(jQuery);\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ })

/******/ });