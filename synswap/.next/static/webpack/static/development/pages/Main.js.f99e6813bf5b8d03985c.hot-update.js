webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");







function Table(props) {
  function pullStuff(obj, param) {
    var getKeys = function getKeys(obj) {
      if (typeof obj !== 'object') {
        throw new Error('Invalid JSON');
      }

      var result = [];

      var topKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(obj);

      for (var i = 0; i < topKeys.length; i++) {
        var topKey = topKeys[i];
        var topEntry = obj[topKey];

        if (typeof topEntry === 'string' || typeof topEntry === 'number') {
          result.push(topKey);
        } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(topEntry)) {
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

      var topValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(obj);

      for (var i = 0; i < topValues.length; i++) {
        var topValue = topValues[i];

        if (typeof topValue === 'string' || typeof topValue === 'number') {
          result.push(topValue);
        } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(topValue)) {
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

  var formatData = function formatData(data) {
    var columns = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data[0]);

    var result = [];
    result.push(columns);

    for (var i = 0; i < data.length; i++) {
      result.push(pullStuff(data[i], 'values'));
    }

    return result;
  };

  var data = formatData(props.data);

  var cellRenderer = function cellRenderer(_ref) {
    var columnIndex = _ref.columnIndex,
        key = _ref.key,
        rowIndex = _ref.rowIndex;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
      key: key,
      square: true,
      raised: true
    }, data[rowIndex][columnIndex]);
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_5__["AutoSizer"], null, function (_ref2) {
    var _React$createElement;

    var width = _ref2.width,
        height = _ref2.height;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_5__["MultiGrid"], (_React$createElement = {
      cellRenderer: cellRenderer,
      columnCount: data[0].length,
      columnWidth: 1800 / data[0].length,
      fixedColumnCount: 0
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "fixedColumnCount", 1), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "height", 600), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "rowCount", data.length), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "rowHeight", 30), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "width", 1000), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "style", {
      marginLeft: 20
    }), _React$createElement));
  });
}

/***/ })

})
//# sourceMappingURL=Main.js.f99e6813bf5b8d03985c.hot-update.js.map