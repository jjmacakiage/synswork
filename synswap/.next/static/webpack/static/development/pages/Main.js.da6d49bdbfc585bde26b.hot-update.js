webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./pages/Blotter.js":
/*!**************************!*\
  !*** ./pages/Blotter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blotter; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DataTable */ "./components/DataTable.js");
/* harmony import */ var _components_main_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/main/Header */ "./components/main/Header.js");









function Blotter() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    rows: [['f']],
    columns: ['a']
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var trades = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.TradeReducer.tradeStates;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    //ADD AJAX REQUEST TO FETCH TRADE DATA HERE
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = 'http://localhost:4000/api/parties/1/trades';
                _context.prev = 1;
                axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(url).then(function (response) {
                  console.log(response.data.trades);
                  setData(response.data.trades);
                });
                _context.next = 9;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](1);
                console.error('You have an error in your code or there are Network issues.', _context.t0);
                return _context.abrupt("return", _context.t0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 5]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [trades]);

  function exportToCSV() {
    var csv = '';

    for (var i = 0; i < data.columns.length; i++) {
      csv += data.columns[i] + ',';
    }

    csv += '\n';

    for (var _i = 0; _i < data.rows.length; _i++) {
      var row = data.rows[_i];
      csv += row.join(',');
      csv += "\n";
    }

    ;
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    var date = new Date();
    var month = date.getUTCMonth();
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    var name = year + '-' + month + '-' + day;
    hiddenElement.download = name + '.csv';
    hiddenElement.click();
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "primary",
    onClick: exportToCSV.bind(this)
  }, "Export to CSV")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.da6d49bdbfc585bde26b.hot-update.js.map