webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/DataTable.js":
/*!*********************************!*\
  !*** ./components/DataTable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactVirtualizedTable; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");



















var styles = function styles(theme) {
  return {
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    tableRow: {
      cursor: 'pointer'
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200]
      }
    },
    tableCell: {
      flex: 1
    },
    noClick: {
      cursor: 'initial'
    }
  };
};

var MuiVirtualizedTable =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(MuiVirtualizedTable, _PureComponent);

  function MuiVirtualizedTable() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MuiVirtualizedTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MuiVirtualizedTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "getRowClassName", function (_ref) {
      var index = _ref.index;
      var _this$props = _this.props,
          classes = _this$props.classes,
          onRowClick = _this$props.onRowClick;
      return Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])(classes.tableRow, classes.flexContainer, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, classes.tableRowHover, index !== -1 && onRowClick != null));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "cellRenderer", function (_ref2) {
      var cellData = _ref2.cellData,
          columnIndex = _ref2.columnIndex;
      var _this$props2 = _this.props,
          columns = _this$props2.columns,
          classes = _this$props2.classes,
          rowHeight = _this$props2.rowHeight,
          onRowClick = _this$props2.onRowClick;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15__["default"], {
        component: "div",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])(classes.tableCell, classes.flexContainer, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, classes.noClick, onRowClick == null)),
        variant: "body",
        style: {
          height: rowHeight
        },
        align: columnIndex != null && columns[columnIndex].numeric || false ? 'right' : 'left'
      }, cellData);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "headerRenderer", function (_ref3) {
      var label = _ref3.label,
          columnIndex = _ref3.columnIndex;
      var _this$props3 = _this.props,
          headerHeight = _this$props3.headerHeight,
          columns = _this$props3.columns,
          classes = _this$props3.classes;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_15__["default"], {
        component: "div",
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_13__["default"])(classes.tableCell, classes.flexContainer, classes.noClick),
        variant: "head",
        style: {
          height: headerHeight,
          justifyContent: "center"
        },
        align: columns[columnIndex].numeric || false ? 'right' : 'left'
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", null, label));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MuiVirtualizedTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          classes = _this$props4.classes,
          columns = _this$props4.columns,
          tableProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props4, ["classes", "columns"]);

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_17__["AutoSizer"], null, function (_ref4) {
        var height = _ref4.height,
            width = _ref4.width;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_17__["Table"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          height: height,
          width: width
        }, tableProps, {
          rowClassName: _this2.getRowClassName
        }), columns.map(function (_ref5, index) {
          var dataKey = _ref5.dataKey,
              other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref5, ["dataKey"]);

          return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_17__["Column"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            key: dataKey,
            headerRenderer: function headerRenderer(headerProps) {
              return _this2.headerRenderer(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, headerProps, {
                columnIndex: index
              }));
            },
            className: classes.flexContainer,
            cellRenderer: _this2.cellRenderer,
            dataKey: dataKey
          }, other));
        }));
      });
    }
  }]);

  return MuiVirtualizedTable;
}(react__WEBPACK_IMPORTED_MODULE_11__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(MuiVirtualizedTable, "defaultProps", {
  headerHeight: 48,
  rowHeight: 48
});

MuiVirtualizedTable.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object.isRequired,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.object).isRequired,
  headerHeight: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.func,
  rowHeight: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number
};
var VirtualizedTable = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(styles)(MuiVirtualizedTable);

function formatColumns(columns) {
  if (columns.length === 0 || columns[0].width) {
    return columns;
  }

  var result = [];
  var width = 1800 / columns.length;

  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];
    var object = {
      width: width,
      label: column,
      dataKey: column.toString().toLowerCase().replace("\s", ""),
      numeric: !isNaN(column)
    };
    result.push(object);
  }

  return result;
}

function formatRows(rows, columns) {
  var result = [];

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var temp = [];

    for (var j = 0; j < row.length; j++) {
      var dataKey = columns[j].toString().toLowerCase().replace("\s", "");
      temp.push(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, dataKey, row[j]));
    }

    temp.reduce(function (result, item) {
      var key = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item)[0];

      result[key] = item[key];
      return result;
    }, {});
    result.push();
  }
}

function ReactVirtualizedTable(props) {
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      height: 400,
      width: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(VirtualizedTable, {
    rowCount: props.data.rows.length,
    rowGetter: function rowGetter(_ref6) {
      var index = _ref6.index;
      return props.data.rows[index];
    },
    columns: formatColumns(props.data.columns),
    onRowClick: props.onRowClick
  }));
}

/***/ })

})
//# sourceMappingURL=Main.js.26f6dfdb0d5f74791d6a.hot-update.js.map