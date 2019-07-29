webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./pages/Trade.js":
/*!************************!*\
  !*** ./pages/Trade.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trade; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DataTable */ "./components/DataTable.js");






var columns = [{
  width: 400,
  label: 'Dessert',
  dataKey: 'dessert'
}, {
  width: 240,
  label: "Calories\xA0(g)",
  dataKey: 'calories',
  numeric: true
}, {
  width: 240,
  label: "Fat\xA0(g)",
  dataKey: 'fat',
  numeric: true
}, {
  width: 240,
  label: "Carbs\xA0(g)",
  dataKey: 'carbs',
  numeric: true
}, {
  width: 240,
  label: "Protein\xA0(g)",
  dataKey: 'protein',
  numeric: true
}];
var sample = [['Frozen yoghurt', 159, 6.0, 24, 4.0], ['Ice cream sandwich', 237, 9.0, 37, 4.3], ['Eclair', 262, 16.0, 24, 6.0], ['Cupcake', 305, 3.7, 67, 4.3], ['Gingerbread', 356, 16.0, 49, 3.9]];

function createData(id, dessert, calories, fat, carbs, protein) {
  return {
    id: id,
    dessert: dessert,
    calories: calories,
    fat: fat,
    carbs: carbs,
    protein: protein
  };
}

var rows = [];

for (var i = 0; i < 200; i += 1) {
  var randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData.apply(void 0, [i].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(randomSelection))));
}
/**
 * @class TabContainer
 * @param props
 * @return {*}
 * @constructor
 */


function TabContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    component: "div",
    style: {
      padding: 8 * 3
    }
  }, props.children);
}

TabContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired
};
function Trade(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    rows: [],
    columns: []
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];
  /**
   * @function tabChange
   * @param e
   * @param newValue
   * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
   */


  function tabChange(e, newValue) {
    setValue(newValue);
  }

  console.log(props.data);
  var pseudo = [["1", "1"], ["2", "12"], ["3", "13"], ["4", "14"], ["5", "15"], ["6", "16"], ["7", "17"], ["8", "18"], ["9", "199"], ["10", "183973"], ["11", "1297e12"], ["12", "1297e1972"]];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    value: value,
    onChange: tabChange,
    indicatorColor: "primary",
    textColor: "primary",
    centered: true
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    label: "Fields"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    label: "Autofill"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    label: "CashFlow Schedule"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    label: "Confirmation"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    label: "Best Match Score"
  })), value === 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: {
      columns: props.data.columns,
      rows: pseudo
    },
    onRowClick: function onRowClick() {
      return window.alert('row clicked');
    }
  })), value === 1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_DataTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: {
      columns: columns,
      rows: rows
    },
    onRowClick: function onRowClick() {
      return window.alert('row clicked');
    }
  })), value === 2 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, " CashFlow Schedule "), value === 3 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, " Confirmation "), value === 4 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, " Best Match Score ")));
}

/***/ })

})
//# sourceMappingURL=Main.js.71a355e20ebde64db9b3.hot-update.js.map