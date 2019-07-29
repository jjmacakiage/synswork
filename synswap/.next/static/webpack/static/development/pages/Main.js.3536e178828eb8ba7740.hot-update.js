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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_newtrade_NewTradeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/newtrade/NewTradeForm */ "./components/newtrade/NewTradeForm.js");
/* harmony import */ var _components_newtrade_CustomiseFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/newtrade/CustomiseFields */ "./components/newtrade/CustomiseFields.js");
/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DataTable */ "./components/DataTable.js");








/**
 * @class TabContainer
 * @param props
 * @return {*}
 * @constructor
 */

function TabContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "div",
    style: {
      padding: 8 * 3
    }
  }, props.children);
}

TabContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired
};
/**
 * @constant useStyles
 * hook used for styling
 */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    customise: {
      marginTop: 20
    }
  };
});
/**
 * @class NewTrade
 * Contains the forms for creating a NewTrade
 * Dependencies used:
 * @material-ui for Grid, makeStyles, Tabs, Tab, Typography
 * Custom Components used:
 * @class NewTradeForm
 * @class CustomiseFields
 */

function NewTrade(props) {
  var classes = useStyles();
  var FIELDS = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.NewTradeReducer.NEW_TRADE_FIELDS;
  });
  var trades_length = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.TradeReducer.tradeStates;
  }).length;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
  /**
   * @function handleSubmit
   * @param fields
   * takes fields passed in from NewTradeForm and appends to 'tradeStates' piece of state
   */


  function handleSubmit(fields) {
    var nameRemoved = fields.filter(function (value, index) {
      return index !== fields.length - 1;
    });
    var payload = {
      id: trades_length,
      value: nameRemoved
    };
    dispatch({
      type: 'NEW_TRADE',
      payload: payload
    });
    var columns = ['Field', 'Value'];
    props.addNewTrade(fields[fields.length - 1], columns, createRows(nameRemoved));
  }
  /**
   * @function createRows
   * @param data
   * takes data and maps each field to corresponding data input
   */


  function createRows(data) {
    var result = [];

    for (var i = 0; i < FIELDS.length; i++) {
      var row = [FIELDS[i], data[i]];
      result.push(row);
    }

    return result;
  }
  /**
   * @function addFields
   * @param addFields
   * takes the custom fields created in CustomiseFields component and appends to NEW_TRADE_FIELDS piece of state
   */


  function addFields(addFields) {
    dispatch({
      type: 'APPEND_FIELDS',
      payload: addFields
    });
  }
  /**
   * @function tabChange
   * @param e
   * @param newValue
   * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
   */


  function tabChange(e, newValue) {
    setValue(newValue);
  }
  /**
   * @return
   * @type Grid
   * @type TabContainer
   * @type Tab
   * @type Tabs
   * @type NewTradeForm
   * @type CustomiseFields
   */


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    value: value,
    onChange: tabChange,
    indicatorColor: "primary",
    textColor: "primary",
    centered: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    label: "Edit"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
    label: "Autofill"
  })), value === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_newtrade_NewTradeForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fieldList: FIELDS,
    onSubmit: handleSubmit.bind(this),
    isDisabled: false
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_newtrade_CustomiseFields__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.customise,
    addFields: addFields.bind(this)
  })))), value === 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TabContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, " Stuff "))));
}

/***/ })

})
//# sourceMappingURL=Main.js.3536e178828eb8ba7740.hot-update.js.map