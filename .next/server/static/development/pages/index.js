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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_actions_authActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/actions/authActions */ "./src/actions/authActions.js");
/* harmony import */ var _src_components_Validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/Validator */ "./src/components/Validator.js");
/* harmony import */ var _src_styles_pages_login_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/styles/pages/login.scss */ "./src/styles/pages/login.scss");
/* harmony import */ var _src_styles_pages_login_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_styles_pages_login_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "G:\\projects\\nextjs-tavanito\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1) // width: 200

    }
  }
}));

const LoginForm = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"])();
  const classes = useStyles();
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    phoneNumber: "",
    otp: ""
  });
  const {
    0: validationMsg,
    1: setValidationMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("");
  const {
    0: notifMsg,
    1: setNotifMsg
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("");
  const {
    0: showOTP,
    1: setShowOTP
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false); //*************************************

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (!_src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isEmpty(props.auth.username)) {
      setShowOTP(true);
    }
  }, [props.auth.username]); //*************************************

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (!_src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isEmpty(props.auth.error)) {
      setValidationMsg(props.auth.error);
    }

    if (!_src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isEmpty(props.auth.message)) {
      setNotifMsg(props.auth.message);
    }
  }, [props.auth.error, props.auth.message]); //*************************************

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    if (!_src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isEmpty(props.auth.token)) {
      router.push("/Profile");
    }
  }, [props.auth.token]); //*************************************

  const handleSendCode = otp => {
    if (otp.length == 6) {
      props.setToken(otp);
    }
  }; //*************************************


  const handleChange = e => {
    let {
      name,
      value
    } = e.target;

    if (name === "phoneNumber") {
      if (_src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isEmpty(value) || _src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isNumber(value)) {
        setValidationMsg("");
      } else {
        value = value.slice(0, -1);
        setValidationMsg("لطفاً تنها مقدار عددی وارد نمایید.");
      }

      setValues(_objectSpread({}, values, {
        [name]: value
      }));
    } else if (name === "otp") {
      if (_src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isNumber(value) && _src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isShorterThan(value, 7)) {
        setValidationMsg("");
      } else {
        value = value.slice(0, -1);
      }

      setValues(_objectSpread({}, values, {
        [name]: value
      }));
      handleSendCode(value);
    }
  }; //*************************************


  const handleBlur = e => {
    let {
      value
    } = e.target;

    if (!_src_components_Validator__WEBPACK_IMPORTED_MODULE_13__["default"].isPhoneNumber(value)) {
      setValidationMsg("لطفاً یک شماره موبایل معتبر وارد نمایید.");
    }
  }; //*************************************


  const handleSubmit = e => {
    e.preventDefault();
    setValidationMsg("");
    props.login(values.phoneNumber);
  }; //*************************************


  return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("form", {
    className: `${classes.root} form` // noValidate
    ,
    autoComplete: "off",
    onSubmit: handleSubmit,
    dir: "rtl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, showOTP ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
    error: validationMsg !== "",
    name: "otp",
    value: values.otp,
    onChange: handleChange // required
    ,
    label: "\u06A9\u062F \u062A\u0627\u06CC\u06CC\u062F",
    dir: "rtl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), validationMsg ? __jsx("div", {
    className: "validation-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, validationMsg)) : null) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9___default.a, {
    error: validationMsg !== "",
    name: "phoneNumber",
    value: values.phoneNumber,
    onChange: handleChange,
    onBlur: handleBlur,
    required: true,
    label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
    dir: "rtl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), validationMsg ? __jsx("div", {
    className: "validation-msg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, validationMsg)) : null), !showOTP ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    variant: "contained",
    color: "secondary",
    type: "submit",
    value: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "\u0648\u0631\u0648\u062F") : null));
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    login: mobile => dispatch(Object(_src_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["login"])(mobile)),
    setToken: otp => dispatch(Object(_src_actions_authActions__WEBPACK_IMPORTED_MODULE_12__["setToken"])(otp))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(LoginForm));

/***/ }),

/***/ "./src/actions/authActions.js":
/*!************************************!*\
  !*** ./src/actions/authActions.js ***!
  \************************************/
/*! exports provided: login, setToken, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);



const baseUrl = "https://api.tavanito.ir/v2"; //******************************************

const loginReq = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]
});

const setUsername = (mobile, message) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_USERNAME"],
  username: mobile,
  message
});

const setUsernameError = error => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_USERNAME_ERROR"],
  error
});

const login = mobile => {
  let uri = `${baseUrl}/login/otp`;
  return dispatch => {
    dispatch(loginReq());
    fetch(uri, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        mobile
      })
    }).then(res => {
      res.json().then(res => {
        if (res.message) {
          dispatch(setUsername(mobile, res.message));
        } else if (res.errors && res.errors.mobile.length !== 0) dispatch(setUsernameError(res.errors.mobile[0]));
      });
    }).catch(err => {
      dispatch(setUsernameError(err));
    });
  };
}; //*******************************************

const setTokenReq = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_TOKEN"]
});

const setTokenComplete = token => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_TOKEN_COMPLETE"],
  token
});

const loginComplete = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["LOGIN_COMPLETE"]
});

const setTokenError = error => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["SET_TOKEN_ERROR"],
  error
});

const loginError = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["LOGIN_ERROR"]
});

const setToken = otp => {
  return (dispatch, getState) => {
    const mobile = getState().auth.username;
    let uri = `${baseUrl}/login?mobile=${mobile}&code=${otp}`;
    dispatch(setTokenReq());
    fetch(uri, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
        mobile
      })
    }).then(res => res.json()).then(res => {
      if (res.access_token && res.access_token !== "") {
        dispatch(setTokenComplete(res.access_token));
        dispatch(loginComplete());
      } else if (res.errors && res.errors.mobile.length !== 0) {
        dispatch(setTokenError(res.errors.mobile[0]));
        dispatch(loginError());
      }
    }).catch(err => {
      dispatch(setTokenError(err));
    });
  };
}; //******************************************

const logout = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]
  };
};

/***/ }),

/***/ "./src/components/Validator.js":
/*!*************************************!*\
  !*** ./src/components/Validator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  isNumber: str => {
    const pattern = /^[0-9]+$/;
    return pattern.test(str);
  },
  isPhoneNumber: str => {
    const pattern = /^(0)?9\d{9}$/;
    return pattern.test(str);
  },
  isShorterThan: (str, len) => str.length < len,
  isEmpty: value => value === undefined || value === null || typeof value === "object" && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(value).length === 0 || typeof value === "string" && value.trim().length === 0
});

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: LOGIN, LOGIN_COMPLETE, LOGIN_ERROR, SET_USERNAME, SET_USERNAME_ERROR, SET_TOKEN, SET_TOKEN_COMPLETE, SET_TOKEN_ERROR, LOGOUT, GET_USER_INFO, GET_USER_INFO_COMPLETE, GET_USER_INFO_ERROR, EDIT_USER_INFO, EDIT_USER_INFO_COMPLETE, EDIT_USER_INFO_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_COMPLETE", function() { return LOGIN_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_ERROR", function() { return LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME", function() { return SET_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERNAME_ERROR", function() { return SET_USERNAME_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN", function() { return SET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN_COMPLETE", function() { return SET_TOKEN_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TOKEN_ERROR", function() { return SET_TOKEN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_INFO", function() { return GET_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_INFO_COMPLETE", function() { return GET_USER_INFO_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_INFO_ERROR", function() { return GET_USER_INFO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_USER_INFO", function() { return EDIT_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_USER_INFO_COMPLETE", function() { return EDIT_USER_INFO_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_USER_INFO_ERROR", function() { return EDIT_USER_INFO_ERROR; });
const LOGIN = "LOGIN";
const LOGIN_COMPLETE = "LOGIN_COMPLETE";
const LOGIN_ERROR = "LOGIN_ERROR";
const SET_USERNAME = "SET_USERNAME";
const SET_USERNAME_ERROR = "SET_USERNAME_ERROR";
const SET_TOKEN = "SET_TOKEN";
const SET_TOKEN_COMPLETE = "SET_TOKEN_COMPLETE";
const SET_TOKEN_ERROR = "SET_TOKEN_ERROR";
const LOGOUT = "LOGOUT";
const GET_USER_INFO = "GET_USER_INFO";
const GET_USER_INFO_COMPLETE = "GET_USER_INFO_COMPLETE";
const GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR";
const EDIT_USER_INFO = "EDIT_USER_INFO";
const EDIT_USER_INFO_COMPLETE = "EDIT_USER_INFO_COMPLETE";
const EDIT_USER_INFO_ERROR = "EDIT_USER_INFO_ERROR";

/***/ }),

/***/ "./src/styles/pages/login.scss":
/*!*************************************!*\
  !*** ./src/styles/pages/login.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\projects\nextjs-tavanito\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map