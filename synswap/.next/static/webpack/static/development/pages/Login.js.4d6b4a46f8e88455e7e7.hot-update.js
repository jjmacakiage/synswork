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

/***/ }),

/***/ "./utils/Auth/login.js":
/*!*****************************!*\
  !*** ./utils/Auth/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return doLogin; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/Login */ "./pages/Login.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./utils/Auth/auth.js");





function doLogin(_x) {
  return _doLogin.apply(this, arguments);
}

function _doLogin() {
  _doLogin = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userData) {
    var username, url, response, _ref, token, error;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = userData.username;
            url = '../../pages/api/login';
            _context.prev = 2;
            _context.next = 5;
            return Object(_pages_Login__WEBPACK_IMPORTED_MODULE_3__["default"])(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                username: username
              })
            });

          case 5:
            response = _context.sent;

            if (!(response.status === 200)) {
              _context.next = 17;
              break;
            }

            _context.next = 9;
            return response.json();

          case 9:
            _ref = _context.sent;
            token = _ref.token;
            _context.next = 13;
            return Object(_auth__WEBPACK_IMPORTED_MODULE_4__["login"])({
              token: token
            });

          case 13:
            console.log('here');
            return _context.abrupt("return", {
              token: token,
              status: 'success'
            });

          case 17:
            console.log('Login failed.'); // https://github.com/developit/unfetch#caveats

            error = new Error(response.statusText);
            error.response = response;
            throw error;

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](2);
            console.error('You have an error in your code or there are Network issues.', _context.t0);
            return _context.abrupt("return", _context.t0);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 23]]);
  }));
  return _doLogin.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=Login.js.4d6b4a46f8e88455e7e7.hot-update.js.map