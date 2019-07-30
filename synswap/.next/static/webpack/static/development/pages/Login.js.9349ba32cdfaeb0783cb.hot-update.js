webpackHotUpdate("static/development/pages/Login.js",{

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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
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
              _context.next = 16;
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
            return _context.abrupt("return", {
              token: token,
              status: 'success'
            });

          case 16:
            console.log('Login failed.'); // https://github.com/developit/unfetch#caveats

            error = new Error(response.statusText);
            error.response = response;
            throw error;

          case 20:
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](2);
            console.error('You have an error in your code or there are Network issues.', _context.t0);
            return _context.abrupt("return", _context.t0);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));
  return _doLogin.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=Login.js.9349ba32cdfaeb0783cb.hot-update.js.map