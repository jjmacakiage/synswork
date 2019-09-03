webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/TableTwo.js":
/*!********************************!*\
  !*** ./components/TableTwo.js ***!
  \********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");








var TableTwo = function TableTwo(props) {
  console.log(props.data);

  function formatColumns(columns) {
    if (columns.length === 0 || columns[0].width) {
      return columns;
    }

    var result = [];
    var width = 1800 / columns.length;

    for (var i = 0; i < columns.length; i++) {
      var column = columns[i];
      var object = {
        title: column,
        field: column.toString().toLowerCase().replace("\s", "")
      };
      result.push(object);
    }

    return result;
  }

  function formatRows(rows, columns) {
    if (rows.length === 0 || !rows[0].length) {
      return rows;
    }

    var result = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var temp = [];

      for (var j = 0; j < row.length; j++) {
        var dataKey = columns[j].toString().toLowerCase().replace("\s", "");
        temp.push(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, dataKey, row[j]));
      }

      var objectList = temp.reduce(function (result, item) {
        var key = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(item)[0];

        result[key] = item[key];
        return result;
      }, {});
      result.push(objectList);
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

  var data = props.data;
  var columns = !data.rows ? pullStuff(data[0], 'keys') : data.columns;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_5___default.a, {
    columns: formatColumns(columns),
    icons: _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__,
    data: data,
    options: {
      filtering: true
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TableTwo);

/***/ })

})
//# sourceMappingURL=Main.js.e904aa14d3da93eaa114.hot-update.js.map