webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./reducers/NewTradeReducer.js":
/*!*************************************!*\
  !*** ./reducers/NewTradeReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewTradeReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _js_new_trade_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/new_trade_fields */ "./js/new_trade_fields.js");


var INITIAL_STATE = {
  tabs: [],
  NEW_TRADE_FIELDS: _js_new_trade_fields__WEBPACK_IMPORTED_MODULE_1__["new_trade_fields"],
  AUTOFILL_FIELDS: [],
  FIELD_DATA: [],
  validationSchema: {},
  // || API CALL TO OBTAIN DEFAULT SCHEMA
  validationFunctions: []
};
function NewTradeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'APPEND_FIELDS':
      var result = state.NEW_TRADE_FIELDS.concat(action.payload);
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        NEW_TRADE_FIELDS: result
      });

    case 'CHANGE_SCHEMA':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    default:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.8ff3332006e9a0e5f184.hot-update.js.map