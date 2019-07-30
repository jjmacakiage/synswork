webpackHotUpdate("static/development/pages/Login.js",{

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Auth_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Auth/login */ "./utils/Auth/login.js");
/* harmony import */ var _components_login_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/login/LoginForm */ "./components/login/LoginForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: '',
    error: '',
    password: '',
    token: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      userData = _useState2[0],
      setUserData = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, payload;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return Object(_utils_Auth_login__WEBPACK_IMPORTED_MODULE_4__["default"])(userData);

            case 3:
              res = _context.sent;

              if (res.status === 'success') {
                payload = {
                  username: userData.username,
                  password: userData.password,
                  token: res.token
                };
                dispatch({
                  type: 'LOGIN',
                  payload: payload
                });
              } else {//setUserData({ ...userData, error: res });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "login"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_login_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: function onClick(e) {
      return handleSubmit(e);
    },
    username: userData.username,
    changeUsername: function changeUsername(e) {
      var newUsername = e.target.value;
      setUserData({
        username: newUsername,
        error: userData.error,
        password: userData.password
      });
    },
    changePassword: function changePassword(e) {
      var newPassword = e.target.value;
      setUserData({
        username: userData.username,
        error: userData.error,
        password: newPassword
      });
    }
  }));
}

/***/ })

})
//# sourceMappingURL=Login.js.72fd357b07787b68cde3.hot-update.js.map