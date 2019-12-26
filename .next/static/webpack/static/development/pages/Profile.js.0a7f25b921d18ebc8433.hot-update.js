webpackHotUpdate("static\\development\\pages\\Profile.js",{

/***/ "./pages/Profile.js":
/*!**************************!*\
  !*** ./pages/Profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_components_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/UserInfo */ "./src/components/UserInfo.js");
/* harmony import */ var _src_components_UserEditForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/UserEditForm */ "./src/components/UserEditForm.js");
/* harmony import */ var _src_actions_profileActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/actions/profileActions */ "./src/actions/profileActions.js");
/* harmony import */ var _src_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/actions/authActions */ "./src/actions/authActions.js");
/* harmony import */ var _src_styles_pages_profile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/pages/profile.scss */ "./src/styles/pages/profile.scss");
/* harmony import */ var _src_styles_pages_profile_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_pages_profile_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "G:\\projects\\nextjs-tavanito\\pages\\Profile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Profile = function Profile(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      userInfo = _useState[0],
      setUserInfo = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var token = props.token;
    props.getUserInfo(token);
  }, []); //*************************************

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setUserInfo(props.data);
  }, [props.data]); //*************************************

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.isAuthenticated) router.push('/');
  }, [props.isAuthenticated]); //*************************************

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showForm = _useState2[0],
      setShowForm = _useState2[1];

  var handleSetEditForm = function handleSetEditForm() {
    setShowForm(true);
  };

  var handleUnsetEditForm = function handleUnsetEditForm() {
    setShowForm(false);
  }; //*************************************


  var handleLogoutClick = function handleLogoutClick() {
    props.logout();
    router.push('/');
  }; //*************************************


  return __jsx("div", {
    className: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "profile-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, !showForm ? __jsx(_src_components_UserInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setEditForm: handleSetEditForm,
    data: userInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }) : __jsx(_src_components_UserEditForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    unsetEditForm: handleUnsetEditForm,
    data: userInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), __jsx("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: "logout-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "outlined",
    color: "primary",
    className: "button",
    onClick: handleLogoutClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u062E\u0631\u0648\u062C")))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.profile.data,
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getUserInfo: _src_actions_profileActions__WEBPACK_IMPORTED_MODULE_4__["getUserInfo"],
  logout: _src_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["logout"]
})(Profile));

/***/ })

})
//# sourceMappingURL=Profile.js.0a7f25b921d18ebc8433.hot-update.js.map