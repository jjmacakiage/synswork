webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");












var Table = function Table(props) {
  var data = props.data;
  var columns = !data.rows ? pullStuff(data[0], 'keys') : data.columns;
  var tableIcons = {
    Add: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["AddBox"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Check: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Check"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Clear: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Clear"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Delete: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["DeleteOutline"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    DetailPanel: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ChevronRight"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Edit: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Edit"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Export: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["SaveAlt"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Filter: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["FilterList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    FirstPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["FirstPage"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    LastPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["LastPage"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    NextPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ChevronRight"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    PreviousPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ChevronLeft"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    ResetSearch: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Clear"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Search: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Search"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    SortArrow: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ArrowUpward"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    ThirdStateCheck: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["Remove"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    ViewColumn: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ViewColumn"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    })
  };

  function formatColumns(columns) {
    if (columns.length === 0 || columns[0].width) {
      return columns;
    }

    var result = [];
    var width = 1800 / columns.length;

    for (var i = 0; i < columns.length; i++) {
      var column = columns[i];
      var object = {
        title: column.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1"),
        field: column
      };
      result.push(object);
    }

    return result;
  }

  function formatRows(rows) {
    var result = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var temp = pullStuff(row, 'values');
      var temp2 = generateObj(columns, temp);
      result.push(temp2);
    }

    return result;
  }

  function generateObj(array, values) {
    var result = {};

    for (var i = 0; i < array.length; i++) {
      result = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, result, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, array[i], values[i]));
    }

    return result;
  }

  function pullStuff(obj, param) {
    var getKeys = function getKeys(obj) {
      if (typeof obj !== 'object') {
        throw new Error('Invalid JSON');
      }

      var result = [];

      var topKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(obj);

      for (var i = 0; i < topKeys.length; i++) {
        var topKey = topKeys[i];
        var topEntry = obj[topKey];

        if (typeof topEntry === 'string' || typeof topEntry === 'number') {
          result.push(topKey);
        } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(topEntry)) {
          var arrayEntry = void 0;

          for (arrayEntry in topEntry) {
            result.push(getKeys(arrayEntry, true));
          }
        } else {
          result.push(getKeys(topEntry));
        }
      }

      return result.flat(Infinity);
    };

    var getValues = function getValues(obj) {
      if (typeof obj !== 'object') {
        throw new Error('Invalid JSON');
      }

      var result = [];

      var topValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(obj);

      for (var i = 0; i < topValues.length; i++) {
        var topValue = topValues[i];

        if (typeof topValue === 'string' || typeof topValue === 'number') {
          result.push(topValue);
        } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(topValue)) {
          var arrayEntry = void 0;

          for (arrayEntry in topValue) {
            result.push(getValues(arrayEntry, true));
          }
        } else {
          result.push(getValues(topValue));
        }
      }

      return result.flat(Infinity);
    };

    switch (param) {
      case 'keys':
        return getKeys(obj, false);

      case 'values':
        return getValues(obj, false);

      default:
        return;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_7___default.a, {
    columns: formatColumns(columns),
    icons: tableIcons,
    data: formatRows(data),
    title: "Blotter",
    options: {
      filtering: true,
      exportButton: true,
      headerStyle: {
        backgroundColor: '#01579b'
      },
      cellStyle: {
        fontSize: 8
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./components/TableTwo.js":
false,

/***/ "./pages/Blotter.js":
/*!**************************!*\
  !*** ./pages/Blotter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blotter; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DataTable */ "./components/DataTable.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");







function Blotter() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var trades = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.TradeReducer.trades;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setData(trades);
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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    style: {
      padding: 50
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.407d85546207a51e3d6e.hot-update.js.map