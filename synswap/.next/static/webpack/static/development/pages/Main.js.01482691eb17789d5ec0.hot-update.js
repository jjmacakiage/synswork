webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./pages/NewTrade.js":
/*!***************************!*\
  !*** ./pages/NewTrade.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewTrade; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_home_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/List */ "./components/home/List.js");
/* harmony import */ var _components_main_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main/Header */ "./components/main/Header.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_newtrade_NewTradeContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/newtrade/NewTradeContent */ "./components/newtrade/NewTradeContent.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_NewTrade_new_trade_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/NewTrade/new_trade_util */ "./utils/NewTrade/new_trade_util.js");










function NewTrade(props) {
  var fields = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.NewTradeReducer.NEW_TRADE_FIELDS;
  });
  var counterpartyList = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.NewTradeReducer.counterpartyList;
  });
  var currentUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.AuthReducer.token;
  });
  var trades_length = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.TradeReducer.tradeStates;
  }).length;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function fetchList() {
      return _fetchList.apply(this, arguments);
    }

    function _fetchList() {
      _fetchList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_utils_NewTrade_new_trade_util__WEBPACK_IMPORTED_MODULE_8__["default"])(currentUser);

              case 2:
                res = _context.sent;

                if (!(res.status === 'success')) {
                  _context.next = 7;
                  break;
                }

                dispatch({
                  type: 'CHANGE_COUNTERPARTYLIST',
                  payload: res.counterpartyList
                });
                _context.next = 8;
                break;

              case 7:
                return _context.abrupt("return");

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchList.apply(this, arguments);
    }

    fetchList();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_main_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: ['Home', 'Blotter', 'New Trade'],
    links: ['Home', 'Blotter', 'NewTrade']
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Drawer, {
    items: ['Create New Trade', 'Go To Blotter'],
    links: ['NewTrade', 'Blotter'],
    onClick: props.onClick,
    fields: fields,
    counterpartyList: counterpartyList,
    trades_length: trades_length
  }))));
}

function Drawer(props) {
  var items = props.items,
      links = props.links,
      onClick = props.onClick;
  var fields = props.fields,
      counterpartyList = props.counterpartyList,
      trades_length = props.trades_length;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "space-around"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      maxWidth: "min-content",
      left: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_home_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClose: function handleClose() {},
    items: items,
    links: links,
    onClick: onClick
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: 15
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_newtrade_NewTradeContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fields: fields,
    counterpartyList: counterpartyList,
    trades_length: trades_length
  })));
}

/***/ })

})
//# sourceMappingURL=Main.js.01482691eb17789d5ec0.hot-update.js.map