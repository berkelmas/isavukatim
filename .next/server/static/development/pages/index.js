module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/berkelmas/Desktop/isavukatim/components/Footer.js";


function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subscribe-area pt-100 pb-80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subscribe-separator pt-50 pb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-2 col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-logo mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/kucuklogo.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-10 col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-7 col-lg-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subscribe-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "B\xFClten\u0130m\u0130ze Abone Olun"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-5 col-lg-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subscribe-form mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    placeholder: "Email Adresinizi Girin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Abone Ol")))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-bottom-area pb-70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-widget mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "facebook",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "twitter",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "instagram",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "dribbble",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-dribbble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "pinterest",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-pinterest-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "google-plus",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-google-plus-g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "pinterest",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-pinterest-p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "widget-box mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-3 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-widget mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Quick Link"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Politic")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Travel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Study")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Country")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Sports"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-3 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-widget mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Most Visited"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Latest News ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Most Visited")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Recent News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "International")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Entertainment"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-3 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-widget mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Feature")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Life Style")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Economic")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Business"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-3 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-widget pt-50 mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-video",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), " Video")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-camera-retro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), " Picture"))))))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/MenuBar.js":
/*!*******************************!*\
  !*** ./components/MenuBar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/berkelmas/Desktop/isavukatim/components/MenuBar.js";




var MenuBar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MenuBar, _React$Component);

  function MenuBar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuBar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MenuBar).call(this, props));
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      isOpen: false,
      clickedDropdown: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuBar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "grey-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-12 header__menu header__menu-black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        color: "light",
        light: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
        className: "ml-auto float-sm-right",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "mr-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Ana Sayfa"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Avukata Dan\u0131\u015F\u0131n")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        style: {
          color: 'black',
          padding: '20px'
        },
        nav: true,
        caret: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Hukuki \u0130\xE7erikler"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        style: {
          backgroundColor: '#f8f9fa',
          border: 'none'
        },
        className: "submenu",
        left: "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        style: {
          backgroundColor: '#d8d8d8'
        },
        className: "custom-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "T\xFCm\xFCn\xFC G\xF6r")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar?kategori=kidemtazminati",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        className: "custom-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "K\u0131dem Tazminat\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar?kategori=ihbartazminati",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        className: "custom-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u0130hbar Tazminat\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar?kategori=iseiadedavasi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        className: "custom-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\u0130\u015Fe \u0130ade Davas\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar?kategori=hizmettespitdavasi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        className: "custom-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Hizmet Tespit Davalar\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar?kategori=genelsagliksigortasi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownItem"], {
        className: "custom-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Genel Sa\u011Fl\u0131k Sigortas\u0131")))))))))));
    }
  }]);

  return MenuBar;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MenuBar);

/***/ }),

/***/ "./components/NavbarUst.js":
/*!*********************************!*\
  !*** ./components/NavbarUst.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/berkelmas/Desktop/isavukatim/components/NavbarUst.js";


function NavbarUst() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__middle pt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4 col-md-3 d-flex align-items-center justify-content-md-start justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__logo text-center text-md-left mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/kucuklogo.png",
    alt: "Header Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8 col-md-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__add text-center text-md-right mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/add/header-add.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (NavbarUst);

/***/ }),

/***/ "./components/TopHeader.js":
/*!*********************************!*\
  !*** ./components/TopHeader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/berkelmas/Desktop/isavukatim/components/TopHeader.js";


function TopHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__top-area grey-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__top-menu top-menu-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Hakk\u0131m\u0131zda ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Gizlilik Politikas\u0131")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Bize Ula\u015F\u0131n"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__social header-social-black text-center text-md-right mt-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopHeader);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/TopHeader */ "./components/TopHeader.js");
/* harmony import */ var _components_NavbarUst__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/NavbarUst */ "./components/NavbarUst.js");
/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MenuBar */ "./components/MenuBar.js");







var _jsxFileName = "/Users/berkelmas/Desktop/isavukatim/pages/index.js";








var index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(index, _React$Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\u0130\u015F Avukat\u0131ndan \u0130\u015F Hukuku"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/fontawesome-all.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];s1.async=true;\n            s1.src='https://embed.tawk.to/5cb4a0c1c1fe2560f3feed5f/default';\n            s1.charset='UTF-8';\n            s1.setAttribute('crossorigin','*');\n            s0.parentNode.insertBefore(s1,s0);\n            })();\n            "
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_TopHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_NavbarUst__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_MenuBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "hero-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-6 col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero pos-relative mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero__thumb",
        "data-overlay": "dark-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: '/static/img/hero/part1/hero1.jpg',
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero__text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat mb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.articles[0].makale_kategori)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "pr-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.props.articles[0].makale_baslik))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero pos-relative mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero__thumb",
        "data-overlay": "dark-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/hero/part1/hero2.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero__text hero__text-small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat mb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.props.articles[1].makale_kategori)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.props.articles[1].makale_baslik))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-3 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero pos-relative mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero__thumb",
        "data-overlay": "dark-gradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/hero/part1/hero3.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "hero__text hero__text-small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat mb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, this.props.articles[2].makale_kategori)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, this.props.articles[2].makale_baslik)))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "news-area pt-30 pb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "G\xFCncel Haberler"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row row-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/sm1.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Paul Manafort\u2019s Accountant Testifies She Helped Alter Financial Documents")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/sm2.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Rina Sawayama Is Not the Asian Britney Spears")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/sm3.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Receiving the Summer Sols tice the Swedish Way"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/lg1.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat post-absolute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "politic"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, "Trump\u2019s Inaccurate Claims About High ways the world, Immigration and Beyonc\xE9.")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/lg2.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat post-absolute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "travel"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Moving From Buyer to Seller, Major League Soccer Revenue In The World Wide Claims About."))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-20 d-md-none d-xl-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-1.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "sm-cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "K\u0131dem Tazminat\u0131")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-13 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "K\u0131dem Tazminat\u0131ndaki Yenilikler")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "01 Eyl 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-2.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "sm-cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, "\u0130hbar Tazminat\u0131")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-13 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "\u0130hbar Tazminat\u0131 Nas\u0131l Hesaplan\u0131r?")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-3.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "sm-cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, "Fashion")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-13 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Nahan dow plays Lieral lership..")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-4.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "sm-cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "Travel")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-13 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "Weinstein pushs for dismissal.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-5.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "sm-cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, "Politic")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-13 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "New Season Tiets Seat Optional.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-6.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "sm-cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "Study")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-13 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "For Marilyn St Any Place Can Be..")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post-btn mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "btn btn-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, "view more"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-20 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/sm4.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }, "Paul Manafort\u2019s Accountant Testifies She Helped Alter Financial Documents")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/sm5.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, "Rina Sawayama Is Not the Asian Britney Spears")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/sm6.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457
        },
        __self: this
      }, "Receiving the Summer Sols tice the Swedish Way")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "cat-area pb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        __self: this
      }, "video news"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 481
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        "data-overlay": "dark",
        "data-opacity": "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/video/video.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "video-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/watch?v=kvld2Ik429A",
        className: "popup-video",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 490
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-22 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 491
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        __self: this
      }, "Group continues to sell and market memberships to Premier country club despite.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 500
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        __self: this
      }, "(03)"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        "data-overlay": "dark",
        "data-opacity": "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/video/video-2.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "video-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "https://www.youtube.com/watch?v=kvld2Ik429A",
        className: "popup-video",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-22 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521
        },
        __self: this
      }, "Group continues to sell and market memberships to Premier country club despite.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 526
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        __self: this
      }, "(03)")))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "cat-area pb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548
        },
        __self: this
      }, "Science")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 551
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 552
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/cat/cat1.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 554
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 557
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-18 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        },
        __self: this
      }, "Mustify Winner Is Rtired Because of Weaths Bads Ankle World Wide.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 568
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 569
        },
        __self: this
      }, "(03)")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cat-sm-post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-12.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        },
        __self: this
      }, "Hobots or Job Training: Mnutuers Grapple With How to Improve.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-11.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 600
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 603
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        },
        __self: this
      }, "Robots or Job Training: Manutues Grapple With How to Improve..")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 611
        },
        __self: this
      }, "01 Sep 2018")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 619
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621
        },
        __self: this
      }, "travel")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/cat/cat2.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-18 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 631
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632
        },
        __self: this
      }, "Robots or Job Training: Manutues Grapple With How to Improve.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 634
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642
        },
        __self: this
      }, "(03)")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cat-sm-post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 649
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 651
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 652
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-7.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658
        },
        __self: this
      }, "Canadian Shoppers Pay When Visa and MasterCard.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 660
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 661
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 662
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 663
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 670
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-8.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 677
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678
        },
        __self: this
      }, "Who is next football Super Hero. Check the future star")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 680
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 681
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 683
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 684
        },
        __self: this
      }, "01 Sep 2018")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6 d-md-none d-lg-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 694
        },
        __self: this
      }, "lifestyle")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 697
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 698
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 699
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/cat/cat3.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 700
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 703
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-18 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 704
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 705
        },
        __self: this
      }, "Denying passports to Americans along the border throwing their citizens.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 707
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 708
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 709
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 710
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 711
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 713
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 714
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 715
        },
        __self: this
      }, "(03)")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cat-sm-post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 722
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 723
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 724
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 725
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-10.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 726
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 729
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 730
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 731
        },
        __self: this
      }, "Hobots or Job Training: Mnutuers Grapple With How to Improve.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 733
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 735
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 736
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 737
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 743
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 744
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-9.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 746
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 749
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 750
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 751
        },
        __self: this
      }, "Robots or Job Training: Manutues Grapple With How to Improve..")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 753
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 754
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 755
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 756
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 757
        },
        __self: this
      }, "01 Sep 2018"))))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "add-area pb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 770
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 771
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 772
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6 d-md-none d-xl-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 773
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 774
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        __self: this
      }, "advertisement")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "add-banner mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 777
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/add/add.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 778
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-4 col-lg-8 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 781
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 782
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 783
        },
        __self: this
      }, "Magazine")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "cat-sm-post mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 785
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 786
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-thumb f-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 787
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 788
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/trendy/xs/xs-7.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 789
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix pl-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 792
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 793
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 794
        },
        __self: this
      }, "Robots or Job Training: Manuturers Grapple With How to Improve Their Economic Fortunes")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 796
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 797
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 798
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 799
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 800
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 806
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 807
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 808
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 809
        },
        __self: this
      }, "Japanese Medical School Accused of With How to Improve Their Economic Fortunes Riggmisions to Keep Women Out world.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 811
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 812
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 813
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 814
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 815
        },
        __self: this
      }, "01 Sep 2018")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small mb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 821
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text fix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 822
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 823
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 824
        },
        __self: this
      }, "Leslie Moonves Speaks on CBS Earnings Cabunsot About Harassment Allegations")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post__small-text-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 826
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 827
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 828
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 829
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 830
        },
        __self: this
      }, "01 Sep 2018")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6 d-md-none d-xl-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 839
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 840
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 841
        },
        __self: this
      }, "advertisement")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "add-banner mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 843
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/add/add.jpg",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 844
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "latest-area pb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 853
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 854
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 855
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 856
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "section-title mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 857
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 858
        },
        __self: this
      }, "latest news")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 862
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-7 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 863
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 864
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-4 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 865
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 866
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 867
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 868
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/latest/latest-1.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 869
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat post-absolute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 871
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 872
        },
        __self: this
      }, "politic"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-8 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 877
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 878
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 879
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 880
        },
        __self: this
      }, "Succession finale: jeremy strong keall\u2019s struggles what comes next.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 882
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 883
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 884
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 885
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 886
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 888
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 889
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 890
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "desc-text mb-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 894
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 895
        },
        __self: this
      }, "But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "btn btn-soft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 898
        },
        __self: this
      }, "read more")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 902
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-4 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 903
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 904
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 905
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 906
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/latest/latest-2.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 907
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat post-absolute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 909
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 910
        },
        __self: this
      }, "politic"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-8 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 915
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 916
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 917
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 918
        },
        __self: this
      }, "Critic\u2019s notebook: deep dives into jutice from shakespeare and atticus finch")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 920
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 921
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 922
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 923
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 924
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 926
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 927
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 928
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "desc-text mb-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 932
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 933
        },
        __self: this
      }, "But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete account.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "btn btn-soft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 936
        },
        __self: this
      }, "read more"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 941
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 942
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__thumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 943
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 944
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "img-100",
        src: "/static/img/latest/latest-lg.jpg",
        alt: "hero image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 945
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "post-cat post-absolute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 947
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 948
        },
        __self: this
      }, "politic"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text pt-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 951
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "title-16 pr-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 952
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 953
        },
        __self: this
      }, "Trump administration officials, have used veto power over other companies, forcing them to buy their products instead of .")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "postbox__text-meta pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 957
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 958
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 959
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-calendar-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 960
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 961
        },
        __self: this
      }, "01 Sep 2018")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 963
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "far fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 964
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 965
        },
        __self: this
      }, "(03)")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "desc-text mb-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 969
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 970
        },
        __self: this
      }, "But I must explain to you how all this mistaken idea of denouncing sure and praising Group continues to sell and market memberships to Premier country club despite. pain was born and I will give you a complete account. ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        className: "btn btn-soft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 974
        },
        __self: this
      }, "read more"))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
        className: "app-area pb-60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 983
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 984
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "grey-bg pt-55 pb-55 pl-60 pr-60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 985
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 986
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 987
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "app-text text-center text-xl-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 988
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 989
        },
        __self: this
      }, "Bizi Cepten Takip Edin"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 990
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-xl-6 col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 993
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "app-store text-center text-xl-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 994
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 995
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/store/apple.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 995
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 996
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/img/store/google.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 996
        },
        __self: this
      }))))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1006
        },
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, result, articles, nextPage, prevPage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('http://localhost:8000/makaleler');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                result = _context.sent;
                articles = result.results;
                nextPage = result.next;
                prevPage = result.prev;
                return _context.abrupt("return", {
                  articles: articles,
                  nextPage: nextPage,
                  prevPage: prevPage
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/berkelmas/Desktop/isavukatim/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map