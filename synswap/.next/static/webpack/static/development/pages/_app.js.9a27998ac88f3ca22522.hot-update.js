webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/AuthReducer.js":
/*!*********************************!*\
  !*** ./reducers/AuthReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

var INITIAL_STATE = {
  username: '',
  password: '',
  token: ''
};
function AuthReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'LOGIN':
      return action.payload;

    case 'LOGOUT':
      return INITIAL_STATE;

    default:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.9a27998ac88f3ca22522.hot-update.js.map