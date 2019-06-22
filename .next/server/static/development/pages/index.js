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

/***/ "./apiEndpoints.js":
/*!*************************!*\
  !*** ./apiEndpoints.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var apiEndpoints = {
  mediaURL: 'http://localhost:8000/media/'
};
/* harmony default export */ __webpack_exports__["default"] = (apiEndpoints);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
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
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);











var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Footer, _React$Component);

  function Footer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).call(this, props));
    _this.state = {
      subMail: '',
      sendingSub: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      //console.log(this.state.subMail);
      //this.setState({subMail: ''});
      var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_8___default()(),
          publicRuntimeConfig = _getConfig.publicRuntimeConfig;

      var url = "".concat(publicRuntimeConfig.apiEndpoint, "addsubscriber/");
      this.setState({
        sendingSub: true
      });
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(url, {
        sub_email: this.state.subMail
      }).then(function (res) {
        return _this2.setState({
          subMail: '',
          sendingSub: false
        });
      }).catch(function (err) {
        console.log(err);

        _this2.setState({
          subMail: '',
          sendingSub: false
        });
      });
      e.preventDefault();
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        subMail: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("footer", {
        className: "footer-bg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "subscribe-area pt-100 pb-80"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "subscribe-separator pt-50 pb-20"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-2 col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "footer-logo mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/img/isavukatim-logo-beyaz-kucuk.png",
        alt: "i\u015F avukat\u0131m logosu"
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-10 col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-7 col-lg-7"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "subscribe-title"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, "B\xFClten\u0130m\u0130ze Abone Olun"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-5 col-lg-5"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "subscribe-form mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        onChange: this.handleChange,
        value: this.state.subMail,
        type: "email",
        placeholder: "Email Adresinizi Girin",
        required: true
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        disabled: this.state.sendingSub ? true : false
      }, "Abone Ol")))))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "footer-bottom-area pb-70"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-4"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "footer-widget mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "isavukatim.com hem avukatlara hem i\u015F\xE7i-i\u015Fveren taraf\u0131 ger\xE7ek ve t\xFCzel ki\u015Filere yard\u0131mc\u0131 olmak ve hukuki y\xF6nlendirmeler yapmak amac\u0131yla 2018 y\u0131l\u0131nda kurulmu\u015Ftur. Gerek \u0130\u015F Kanunu gerek ilgili mevzuatlar ve i\xE7tihatlar \xE7er\xE7evesinde size en do\u011Fru \u015Fekilde hukuki destek olmayi ilke haline getirmi\u015Ftir."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "footer-social"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "facebook",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fab fa-facebook-f"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "twitter",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fab fa-twitter"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "instagram",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "fab fa-instagram"
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "widget-box mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-12 col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "footer-widget mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Yay\u0131n Kategorileri"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "T\xFCm Makaleler"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/kidemtazminati"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "K\u0131dem Tazminat\u0131"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/ihbartazminati"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "\u0130hbar Tazminat\u0131"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/genelsagliksigortasi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Genel Sa\u011Fl\u0131k Sigortas\u0131"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/iseiadedavasi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "\u0130\u015Fe \u0130ade Davas\u0131"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/hizmettespitdavasi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Hizmet Tespit Davas\u0131")))))))))))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

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
        className: "grey-bg"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-xl-12 header__menu header__menu-black"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        color: "light",
        light: true,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarToggler"], {
        className: "ml-auto float-sm-right",
        onClick: this.toggle
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Collapse"], {
        isOpen: this.state.isOpen,
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Nav"], {
        className: "mr-auto",
        navbar: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Ana Sayfa"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/avukata-danis"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Avukata Dan\u0131\u015F\u0131n"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/kidemtazminati"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "K\u0131dem Tazminat\u0131"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/ihbartazminati"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "\u0130hbar Tazminat\u0131"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/iseiadedavasi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "\u0130\u015Fe \u0130ade"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["UncontrolledDropdown"], {
        nav: true,
        inNavbar: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownToggle"], {
        style: {
          color: 'black',
          padding: '20px'
        },
        nav: true,
        caret: true
      }, "Yay\u0131nlar"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["DropdownMenu"], {
        style: {
          backgroundColor: '#f8f9fa',
          border: 'none'
        },
        className: "submenu",
        left: "true"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        style: {
          backgroundColor: '#d8d8d8'
        },
        className: "custom-dropdown"
      }, "T\xFCm\xFCn\xFC G\xF6r")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/kidemtazminati"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "custom-dropdown"
      }, "K\u0131dem Tazminat\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/ihbartazminati"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "custom-dropdown"
      }, "\u0130hbar Tazminat\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/iseiadedavasi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "custom-dropdown"
      }, "\u0130\u015Fe \u0130ade Davas\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/hizmettespitdavasi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "custom-dropdown"
      }, "Hizmet Tespit Davalar\u0131")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/hukuki-yayinlar/kategori/genelsagliksigortasi"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "custom-dropdown"
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function NavbarUst() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__middle pt-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4 col-md-3 d-flex align-items-center justify-content-md-start justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__logo text-center text-md-left mb-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/isavukatim-logo-kucuk.png",
    alt: "Header Logo"
  }))))))));
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function TopHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__top-area grey-bg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__top-menu top-menu-black"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Ana Sayfa "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/gizlilik-politikasi"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Gizlilik Politikas\u0131"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/hukuki-yayinlar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Yay\u0131nlar ")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-xl-6 col-lg-6 col-md-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__social header-social-black text-center text-md-right mt-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-f"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-linkedin-in"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-instagram"
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_locale_tr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment/locale/tr */ "moment/locale/tr");
/* harmony import */ var moment_locale_tr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_locale_tr__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _apiEndpoints__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../apiEndpoints */ "./apiEndpoints.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TopHeader */ "./components/TopHeader.js");
/* harmony import */ var _components_NavbarUst__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/NavbarUst */ "./components/NavbarUst.js");
/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/MenuBar */ "./components/MenuBar.js");




















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
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("title", null, "\u0130\u015F Avukat\u0131ndan \u0130\u015F Hukuku"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/bootstrap.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/fontawesome-all.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/css/style.css"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement(\"script\"),s0=document.getElementsByTagName(\"script\")[0];s1.async=true;\n            s1.src='https://embed.tawk.to/5cb4a0c1c1fe2560f3feed5f/default';\n            s1.charset='UTF-8';\n            s1.setAttribute('crossorigin','*');\n            s0.parentNode.insertBefore(s1,s0);\n            })();\n            "
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_TopHeader__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_NavbarUst__WEBPACK_IMPORTED_MODULE_17__["default"], null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_MenuBar__WEBPACK_IMPORTED_MODULE_18__["default"], null)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "hero-area"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero pos-relative mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero__thumb",
        "data-overlay": "dark-gradient"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articles[0].id, "&makaleslug=").concat(this.props.articles[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articles[0].makale_slug, "/").concat(this.props.articles[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articles[0].image625x400),
        alt: "hero image"
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero__text"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "post-cat mb-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/hukuki-yayinlar/kategori/".concat(this.props.articles[0].makale_kategori_nondisplay)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#"
      }, this.props.articles[0].makale_kategori))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "pr-100"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articles[0].id, "&makaleslug=").concat(this.props.articles[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articles[0].makale_slug, "/").concat(this.props.articles[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articles[0].makale_baslik)))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero pos-relative mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero__thumb",
        "data-overlay": "dark-gradient"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articles[1].image297x400),
        alt: this.props.articles[1].makale_kategori
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero__text hero__text-small"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "post-cat mb-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articles[1].id, "&makaleslug=").concat(this.props.articles[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articles[1].makale_slug, "/").concat(this.props.articles[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articles[1].makale_kategori))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "pr-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articles[1].id, "&makaleslug=").concat(this.props.articles[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articles[1].makale_slug, "/").concat(this.props.articles[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articles[1].makale_baslik)))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-3 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero pos-relative mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero__thumb",
        "data-overlay": "dark-gradient"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articles[2].image297x400),
        alt: this.props.articles[2].makale_kategori
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "hero__text hero__text-small"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        className: "post-cat mb-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articles[2].id, "&makaleslug=").concat(this.props.articles[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articles[2].makale_slug, "/").concat(this.props.articles[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articles[2].makale_kategori))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h3", {
        className: "pr-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articles[2].id, "&makaleslug=").concat(this.props.articles[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articles[2].makale_slug, "/").concat(this.props.articles[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articles[2].makale_baslik))))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "news-area pt-30 pb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "section-title mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "G\xFCncel Haberler"))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row row-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-20"
      }, this.props.articlesKidem.map(function (articleKidem, index) {
        if (index < 3) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            key: index,
            className: "postbox mb-25"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__thumb"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/makale-detay?makaleid=".concat(articleKidem.id, "&makaleslug=").concat(articleKidem.makale_slug),
            as: "/makale-detay/".concat(articleKidem.makale_slug, "/").concat(articleKidem.id)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
            className: "postbox-img-240x160",
            src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(articleKidem.image240x160),
            alt: articleKidem.makale_kategori
          })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__text pt-10"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__text-meta pb-10"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
            className: "fas fa-calendar-alt"
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
            format: "D MMM YYYY"
          }, articleKidem.makale_yayintarihi))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
            className: "pr-0"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/makale-detay?makaleid=".concat(articleKidem.id, "&makaleslug=").concat(articleKidem.makale_slug),
            as: "/makale-detay/".concat(articleKidem.makale_slug, "/").concat(articleKidem.id)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, articleKidem.makale_baslik)))));
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-40"
      }, this.props.articlesIseiade.map(function (articleIseiade, index) {
        if (index < 2) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            key: index,
            className: "postbox mb-25"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__thumb"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/makale-detay?makaleid=".concat(articleIseiade.id, "&makaleslug=").concat(articleIseiade.makale_slug),
            as: "/makale-detay/".concat(articleIseiade.makale_slug, "/").concat(articleIseiade.id)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
            className: "postbox-img500x258",
            src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(articleIseiade.image500x287),
            alt: articleIseiade.makale_kategori
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
            className: "post-cat post-absolute"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/hukuki-yayinlar/kategori/".concat(articleIseiade.makale_kategori_nondisplay)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, articleIseiade.makale_kategori)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__text pt-10"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__text-meta pb-10"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
            className: "fas fa-calendar-alt"
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
            format: "D MMM YYYY"
          }, articleIseiade.makale_yayintarihi))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
            className: "title-16 pr-0"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/makale-detay?makaleid=".concat(articleIseiade.id, "&makaleslug=").concat(articleIseiade.makale_slug),
            as: "/makale-detay/".concat(articleIseiade.makale_slug, "/").concat(articleIseiade.id)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, articleIseiade.makale_baslik)))));
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-20 d-md-none d-xl-block"
      }, this.props.articles.map(function (article, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          key: index,
          className: "post__small mb-30"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "post__small-thumb f-left"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "/makale-detay?makaleid=".concat(article.id, "&makaleslug=").concat(article.makale_slug),
          as: "/makale-detay/".concat(article.makale_slug, "/").concat(article.id)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
          className: "postbox-img-100x85",
          src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(article.image100x85),
          alt: article.makale_kategori
        }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "post__small-text fix pl-10"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
          className: "sm-cat"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", {
          href: "/hukuki-yayinlar/kategori/".concat(article.makale_kategori_nondisplay)
        }, article.makale_kategori)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
          className: "title-13 pr-0"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/makale-detay?makaleid=".concat(article.id, "&makaleslug=").concat(article.makale_slug),
          as: "/makale-detay/".concat(article.makale_slug, "/").concat(article.id)
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, article.makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          className: "post__small-text-meta"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
          className: "fas fa-calendar-alt"
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
          format: "DD MMM YYYY"
        }, article.makale_yayintarihi)))))));
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-20 "
      }, this.props.articlesGenelsaglik.map(function (article, index) {
        if (index < 3) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            key: index,
            className: "postbox mb-25"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__thumb"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/makale-detay?makaleid=".concat(article.id, "&makaleslug=").concat(article.makale_slug),
            as: "/makale-detay/".concat(article.makale_slug, "/").concat(article.id)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
            className: "postbox-img-240x160",
            src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(article.image240x160),
            alt: article.makale_kategori
          })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__text pt-10"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            className: "postbox__text-meta pb-10"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
            className: "fas fa-calendar-alt"
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
            format: "DD MMM YYYY"
          }, article.makale_yayintarihi))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
            className: "pr-0"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/makale-detay?makaleid=".concat(article.id, "&makaleslug=").concat(article.makale_slug),
            as: "/makale-detay/".concat(article.makale_slug, "/").concat(article.id)
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, article.makale_baslik)))));
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "cat-area pb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "section-title mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "KIDEM TAZM\u0130NATI")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox mb-25"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__thumb"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesKidem[0].id, "&makaleslug=").concat(this.props.articlesKidem[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesKidem[0].makale_slug, "/").concat(this.props.articlesKidem[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-406x270",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesKidem[0].image500x287),
        alt: this.props.articlesKidem[0].makale_kategori
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__text pt-20"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-18 pr-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesKidem[0].id, "&makaleslug=").concat(this.props.articlesKidem[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesKidem[0].makale_slug, "/").concat(this.props.articlesKidem[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesKidem[0].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__text-meta pb-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesKidem[0].makale_yayintarihi))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cat-sm-post"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-thumb f-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesKidem[1].id, "&makaleslug=").concat(this.props.articlesKidem[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesKidem[1].makale_slug, "/").concat(this.props.articlesKidem[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-100x85",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesKidem[1].image100x85),
        alt: "".concat(this.props.articlesKidem[1].makale_kategori)
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text fix pl-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesKidem[1].id, "&makaleslug=").concat(this.props.articlesKidem[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesKidem[1].makale_slug, "/").concat(this.props.articlesKidem[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesKidem[1].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text-meta"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesKidem[1].makale_yayintarihi))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-thumb f-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesKidem[2].id, "&makaleslug=").concat(this.props.articlesKidem[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesKidem[2].makale_slug, "/").concat(this.props.articlesKidem[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-100x85",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesKidem[2].image100x85),
        alt: "".concat(this.props.articlesKidem[2].makale_kategori)
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text fix pl-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesKidem[2].id, "&makaleslug=").concat(this.props.articlesKidem[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesKidem[2].makale_slug, "/").concat(this.props.articlesKidem[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesKidem[2].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text-meta"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesKidem[2].makale_yayintarihi))))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "section-title mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "\u0130\u015EE \u0130ADE DAVASI")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox mb-25"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__thumb"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIseiade[0].id, "&makaleslug=").concat(this.props.articlesIseiade[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIseiade[0].makale_slug, "/").concat(this.props.articlesIseiade[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-406x270",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesIseiade[0].image500x287),
        alt: this.props.articlesIseiade[0].makale_kategori
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__text pt-20"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-18 pr-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIseiade[0].id, "&makaleslug=").concat(this.props.articlesIseiade[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIseiade[0].makale_slug, "/").concat(this.props.articlesIseiade[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesIseiade[0].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__text-meta pb-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesIseiade[0].makale_yayintarihi))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cat-sm-post"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-thumb f-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIseiade[1].id, "&makaleslug=").concat(this.props.articlesIseiade[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIseiade[1].makale_slug, "/").concat(this.props.articlesIseiade[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-100x85",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesIseiade[1].image100x85),
        alt: this.props.articlesIseiade[1].makale_kategori
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text fix pl-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIseiade[1].id, "&makaleslug=").concat(this.props.articlesIseiade[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIseiade[1].makale_slug, "/").concat(this.props.articlesIseiade[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesIseiade[1].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text-meta"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesIseiade[1].makale_yayintarihi))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-thumb f-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIseiade[2].id, "&makaleslug=").concat(this.props.articlesIseiade[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIseiade[2].makale_slug, "/").concat(this.props.articlesIseiade[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-100x85",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesIseiade[2].image100x85),
        alt: this.props.articlesIseiade[2].makale_kategori
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text fix pl-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIseiade[2].id, "&makaleslug=").concat(this.props.articlesIseiade[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIseiade[2].makale_slug, "/").concat(this.props.articlesIseiade[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesIseiade[2].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text-meta"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesIseiade[2].makale_yayintarihi))))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-xl-4 col-lg-4 col-md-6 d-md-none d-lg-block"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "section-title mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "\u0130HBAR TAZM\u0130NATI")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox mb-25"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__thumb"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIhbartazminati[0].id, "&makaleslug=").concat(this.props.articlesIhbartazminati[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIhbartazminati[0].makale_slug, "/").concat(this.props.articlesIhbartazminati[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-406x270",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesIhbartazminati[0].image500x287),
        alt: this.props.articlesIhbartazminati[0].makale_kategori
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__text pt-20"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-18 pr-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIhbartazminati[0].id, "&makaleslug=").concat(this.props.articlesIhbartazminati[0].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIhbartazminati[0].makale_slug, "/").concat(this.props.articlesIhbartazminati[0].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesIhbartazminati[0].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "postbox__text-meta pb-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesIhbartazminati[0].makale_yayintarihi))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "cat-sm-post"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-thumb f-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIhbartazminati[1].id, "&makaleslug=").concat(this.props.articlesIhbartazminati[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIhbartazminati[1].makale_slug, "/").concat(this.props.articlesIhbartazminati[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-100x85",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesIhbartazminati[1].image100x85),
        alt: this.props.articlesIhbartazminati[1].makale_kategori
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text fix pl-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIhbartazminati[1].id, "&makaleslug=").concat(this.props.articlesIhbartazminati[1].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIhbartazminati[1].makale_slug, "/").concat(this.props.articlesIhbartazminati[1].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesIhbartazminati[1].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text-meta"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesIhbartazminati[1].makale_yayintarihi))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small mb-30"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-thumb f-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIhbartazminati[2].id, "&makaleslug=").concat(this.props.articlesIhbartazminati[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIhbartazminati[2].makale_slug, "/").concat(this.props.articlesIhbartazminati[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "postbox-img-100x85",
        src: "".concat(_apiEndpoints__WEBPACK_IMPORTED_MODULE_14__["default"].mediaURL).concat(this.props.articlesIhbartazminati[2].image100x85),
        alt: this.props.articlesIhbartazminati[2].makale_kategori
      })))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text fix pl-10"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", {
        className: "title-16 pr-0 mt-0"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/makale-detay?makaleid=".concat(this.props.articlesIhbartazminati[2].id, "&makaleslug=").concat(this.props.articlesIhbartazminati[2].makale_slug),
        as: "/makale-detay/".concat(this.props.articlesIhbartazminati[2].makale_slug, "/").concat(this.props.articlesIhbartazminati[2].id)
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, this.props.articlesIhbartazminati[2].makale_baslik))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "post__small-text-meta"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("i", {
        className: "fas fa-calendar-alt"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_10___default.a, {
        format: "DD MMM YYYY"
      }, this.props.articlesIhbartazminati[2].makale_yayintarihi)))))))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "app-area pb-60"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "grey-bg pt-55 pb-55 pl-60 pr-60"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-xl-6 col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "app-text text-center text-xl-left"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", null, "Bizi Cepten Takip Edin"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br", null))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-xl-6 col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "app-store text-center text-xl-right"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        className: "mr-2 mb-1",
        src: "/static/img/store/apple.png",
        alt: "apple store app"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        src: "/static/img/store/google.png",
        alt: "play store app"
      }))))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _getConfig, publicRuntimeConfig, res, result, articles, resKidem, resultKidem, articlesKidem, resIseiade, resultIseiade, articlesIseiade, resGenelsaglik, resultGenelsaglik, articlesGenelsaglik, resIhbartazminati, resultIhbartazminati, articlesIhbartazminati;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _getConfig = next_config__WEBPACK_IMPORTED_MODULE_13___default()(), publicRuntimeConfig = _getConfig.publicRuntimeConfig; // gets the last 6 articles

                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("".concat(publicRuntimeConfig.apiEndpoint, "makalesixitem"));

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                result = _context.sent;
                articles = result.results; // gets the kidem tazminati articles

                _context.next = 10;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("".concat(publicRuntimeConfig.apiEndpoint, "kategorifilter?kategori=kidemtazminati"));

              case 10:
                resKidem = _context.sent;
                _context.next = 13;
                return resKidem.json();

              case 13:
                resultKidem = _context.sent;
                articlesKidem = resultKidem.results; // gets the ise iade davasi articles

                _context.next = 17;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("".concat(publicRuntimeConfig.apiEndpoint, "kategorifilter?kategori=iseiadedavasi"));

              case 17:
                resIseiade = _context.sent;
                _context.next = 20;
                return resIseiade.json();

              case 20:
                resultIseiade = _context.sent;
                articlesIseiade = resultIseiade.results; // gets genel saglik sigortasi articles

                _context.next = 24;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("".concat(publicRuntimeConfig.apiEndpoint, "kategorifilter?kategori=genelsagliksigortasi"));

              case 24:
                resGenelsaglik = _context.sent;
                _context.next = 27;
                return resGenelsaglik.json();

              case 27:
                resultGenelsaglik = _context.sent;
                articlesGenelsaglik = resultGenelsaglik.results; // gets ihbar tazminati articles

                _context.next = 31;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_12___default()("".concat(publicRuntimeConfig.apiEndpoint, "kategorifilter?kategori=ihbartazminati"));

              case 31:
                resIhbartazminati = _context.sent;
                _context.next = 34;
                return resIhbartazminati.json();

              case 34:
                resultIhbartazminati = _context.sent;
                articlesIhbartazminati = resultIhbartazminati.results;
                return _context.abrupt("return", {
                  articles: articles,
                  articlesKidem: articlesKidem,
                  articlesIseiade: articlesIseiade,
                  articlesGenelsaglik: articlesGenelsaglik,
                  articlesIhbartazminati: articlesIhbartazminati
                });

              case 37:
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
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ITopya\Desktop\isavukatim\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "moment/locale/tr":
/*!***********************************!*\
  !*** external "moment/locale/tr" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/tr");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

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