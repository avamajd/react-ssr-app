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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./pages/Profile.js":
/*!**************************!*\
  !*** ./pages/Profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/UserInfo */ "./src/components/UserInfo.js");
/* harmony import */ var _src_components_UserEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/UserEditForm */ "./src/components/UserEditForm.js");
/* harmony import */ var _src_actions_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/actions/profileActions */ "./src/actions/profileActions.js");
/* harmony import */ var _src_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/actions/authActions */ "./src/actions/authActions.js");
/* harmony import */ var _src_styles_pages_profile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/pages/profile.scss */ "./src/styles/pages/profile.scss");
/* harmony import */ var _src_styles_pages_profile_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_pages_profile_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "G:\\projects\\nextjs-tavanito\\pages\\Profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Profile = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    0: userInfo,
    1: setUserInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let {
      token
    } = props;
    props.getUserInfo(token);
  }, []); //*************************************

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setUserInfo(props.data);
  }, [props.data]); //*************************************

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuthenticated) router.push('/');
  }, [props.isAuthenticated]); //*************************************

  const {
    0: showForm,
    1: setShowForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleSetEditForm = () => {
    setShowForm(true);
  };

  const handleUnsetEditForm = () => {
    setShowForm(false);
  }; //*************************************


  const handleLogoutClick = () => {
    props.logout();
    router.push('/');
  }; //*************************************


  return __jsx("div", {
    className: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "profile-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, !showForm ? __jsx(_src_components_UserInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setEditForm: handleSetEditForm,
    data: userInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }) : __jsx(_src_components_UserEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    unsetEditForm: handleUnsetEditForm,
    data: userInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }))), __jsx("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    className: "logout-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "outlined",
    color: "primary",
    className: "button",
    onClick: handleLogoutClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "\u062E\u0631\u0648\u062C")))));
};

const mapStateToProps = state => ({
  data: state.profile.data,
  token: state.auth.token,
  isAuthenticated: state.auth.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getUserInfo: _src_actions_profileActions__WEBPACK_IMPORTED_MODULE_4__["getUserInfo"],
  logout: _src_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["logout"]
})(Profile));

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

/***/ "./src/actions/profileActions.js":
/*!***************************************!*\
  !*** ./src/actions/profileActions.js ***!
  \***************************************/
/*! exports provided: getUserInfo, editUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editUserInfo", function() { return editUserInfo; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


const baseUrl = "https://api.tavanito.ir/v2"; //******************************************

const getUserInfoReq = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_USER_INFO"]
});

const getUserInfoComplete = data => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_USER_INFO_COMPLETE"],
  data
});

const getUserInfoError = error => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["GET_USER_INFO_ERROR"],
  error
});

const getUserInfo = token => {
  let uri = `${baseUrl}/user`;
  return dispatch => {
    dispatch(getUserInfoReq());
    fetch(uri, {
      method: "GET",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(res => {
      dispatch(getUserInfoComplete(res.data));
    }).catch(err => {
      dispatch(getUserInfoError(err));
    });
  };
}; //******************************************

const editUserInfoReq = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["EDIT_USER_INFO"]
});

const editUserInfoComplete = data => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["EDIT_USER_INFO_COMPLETE"],
  data
});

const editUserInfoError = error => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_1__["EDIT_USER_INFO_ERROR"],
  error
});

const editUserInfo = (token, data) => {
  let uri = `${baseUrl}/user`;
  return dispatch => {
    dispatch(editUserInfoReq());
    fetch(uri, {
      method: "PUT",
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data),
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "application/json"
      }
    }).then(res => res.json()).then(res => {
      dispatch(editUserInfoComplete(res.data));
    }).catch(err => {
      dispatch(editUserInfoError(err));
    });
  };
};

/***/ }),

/***/ "./src/components/UserEditForm.js":
/*!****************************************!*\
  !*** ./src/components/UserEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_edit_form_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-edit-form.scss */ "./src/components/user-edit-form.scss");
/* harmony import */ var _user_edit_form_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_edit_form_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_profileActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/profileActions */ "./src/actions/profileActions.js");

var _jsxFileName = "G:\\projects\\nextjs-tavanito\\src\\components\\UserEditForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const UserEditForm = props => {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: lastname,
    1: setLastname
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); //*************************************

  const handleClick = () => {
    props.unsetEditForm && props.unsetEditForm();
  }; //*************************************


  const {
    first_name,
    last_name,
    email,
    telephone,
    mobile,
    national_code
  } = props.data;
  return __jsx("div", {
    className: "profile-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      first_name,
      last_name,
      email,
      telephone,
      mobile,
      national_code
    },
    validate: values => {
      let errors = {}; //**************************************

      if (!values.first_name) {
        errors.first_name = "لطفاً نام خود را وارد نمایید.";
      } else if (!/(^\s*)[A-Zآ-ی]+(\s*$)/i.test(values.first_name)) {
        errors.first_name = "نام واردشده معتبر نیست.";
      } else {
        let first_name = values.first_name.split(/\s+/).filter(n => n !== "");
        setName(first_name);
      } //**************************************


      if (!values.last_name) {
        errors.last_name = "لطفاً نام خانوادگی خود را وارد نمایید.";
      } else if (!/(^\s*)[A-Zآ-ی]+(\s*$)/i.test(values.last_name)) {
        errors.last_name = "نام خانوادگی واردشده معتبر نیست.";
      } else {
        let last_name = values.last_name.split(/\s+/).filter(n => n !== "");
        setLastname(last_name);
      } //**************************************


      if (!values.email) {
        errors.email = "لطفاً ایمیل خود را وارد نمایید.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "ایمیل وارد شده معتبر نیست.";
      } //**************************************


      return errors;
    },
    onSubmit: (values, {
      setSubmitting
    }) => {
      const {
        mobile
      } = values,
            data = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(values, ["mobile"]);

      props.editUserInfo(props.token, data);
      props.unsetEditForm && props.unsetEditForm();
      setSubmitting(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, ({
    values,
    errors,
    touched,
    handleChange,
    //   handleBlur,
    //   handleSubmit,
    isSubmitting
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("div", {
    className: "row no-gutters px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    error: errors.first_name && touched.first_name,
    id: "first_name",
    label: "\u0646\u0627\u0645",
    name: "first_name",
    value: values.first_name,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined",
    type: "text",
    dir: "rtl",
    className: `col`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
    className: "error-msg",
    name: "first_name",
    component: "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    error: errors.last_name && touched.last_name,
    id: "last_name",
    label: "\u0646\u0627\u0645 \u062E\u0627\u0646\u0648\u0627\u062F\u06AF\u06CC",
    name: "last_name",
    value: values.last_name,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined",
    type: "text",
    dir: "rtl",
    className: `col`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
    className: "error-msg",
    name: "last_name",
    component: "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    error: errors.email && touched.email,
    id: "email",
    label: "\u0627\u06CC\u0645\u06CC\u0644",
    name: "email",
    value: values.email,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined",
    type: "text",
    className: `col`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
    className: "error-msg",
    name: "email",
    component: "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    error: errors.telephone && touched.telephone,
    id: "telephone",
    label: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
    name: "telephone",
    value: values.telephone,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined",
    type: "text",
    className: `col`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    disabled: true,
    error: errors.mobile && touched.mobile,
    id: "mobile",
    label: "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644",
    name: "mobile",
    value: values.mobile,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined",
    type: "text",
    className: `col`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default.a, {
    error: errors.national_code && touched.national_code,
    id: "national_code",
    label: "\u0634\u0645\u0627\u0631\u0647 \u0645\u0644\u06CC",
    name: "national_code",
    value: values.national_code,
    onChange: handleChange,
    margin: "normal",
    variant: "outlined",
    type: "text",
    className: `col`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, __jsx("div", {
    className: "buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: "cancel-button",
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: undefined
  }, "\u0627\u0646\u0635\u0631\u0627\u0641"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    type: "submit",
    variant: "contained",
    color: "primary",
    className: "confirm-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, "\u062A\u0627\u06CC\u06CC\u062F \u0648\u06CC\u0631\u0627\u06CC\u0634")))))));
};

const mapStateToProps = state => ({
  token: state.auth.token
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  editUserInfo: _actions_profileActions__WEBPACK_IMPORTED_MODULE_8__["editUserInfo"]
})(UserEditForm));

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_info_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info.scss */ "./src/components/user-info.scss");
/* harmony import */ var _user_info_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_user_info_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "G:\\projects\\nextjs-tavanito\\src\\components\\UserInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const UserInfo = props => {
  const {
    data
  } = props;
  const {
    0: userData,
    1: setuserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const userInfoItems = [{
    field: "نام:",
    value: userData.first_name
  }, {
    field: "نام خانوادگی:",
    value: userData.last_name
  }, {
    field: "ایمیل:",
    value: userData.email
  }, {
    field: "تلفن:",
    value: userData.telephone
  }, {
    field: "موبایل:",
    value: userData.mobile
  }, {
    field: "کد ملی:",
    value: userData.national_code
  } // { field: "تاریخ تولد:", value: userData.birthdate }
  ];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setuserData(data);
  }, [data]);

  const handleEditClick = () => {
    props.setEditForm && props.setEditForm();
  };

  return __jsx("div", {
    className: "user-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "row no-gutters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, userInfoItems.map((item, index) => __jsx("div", {
    className: "col-12",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: "info-item",
    id: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("span", {
    className: "info-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, item.field), __jsx("span", {
    className: "fa-num",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, item.value)), index !== userInfoItems.length - 1 ? __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }) : null)), __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "info-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "contained",
    color: "primary",
    className: "button",
    onClick: handleEditClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644")))));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./src/components/user-edit-form.scss":
/*!********************************************!*\
  !*** ./src/components/user-edit-form.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/user-info.scss":
/*!***************************************!*\
  !*** ./src/components/user-info.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/styles/pages/profile.scss":
/*!***************************************!*\
  !*** ./src/styles/pages/profile.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\projects\nextjs-tavanito\pages\Profile.js */"./pages/Profile.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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
//# sourceMappingURL=Profile.js.map