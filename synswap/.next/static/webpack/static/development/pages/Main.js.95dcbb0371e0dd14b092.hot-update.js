webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/newtrade/NewTradeContent.js":
/*!************************************************!*\
  !*** ./components/newtrade/NewTradeContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewTradeContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_loading_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loading-io */ "./node_modules/react-loading-io/dist/bundle.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_tradehelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/tradehelpers */ "./utils/tradehelpers.js");
/* harmony import */ var _js_new_trade_fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../js/new_trade_fields */ "./js/new_trade_fields.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");











/**
 * @constant useStyles
 * hook used for styling
 */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
 * @class NewTradeContent
 * Contains the forms for creating a NewTrade
 * Dependencies used:
 * @material-ui for Grid, makeStyles, Tabs, Tab, Typography
 * Custom Components used:
 * @class NewTradeContent
 */

function NewTradeContent(props) {
  var classes = useStyles();
  var fields = props.fields,
      counterpartyList = props.counterpartyList,
      trades_length = props.trades_length,
      schema = props.schema,
      validationFunctions = props.validationFunctions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isLoading = _useState2[0],
      changeLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      counterparty = _useState4[0],
      changeCounterparty = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];
  /**
   * @function handleSubmit
   * @param result
   * takes fields passed in from the form and appends to 'tradeStates' piece of state
   */


  function handleSubmit(result) {
    var nameRemoved = result.filter(function (value, index) {
      return index !== result.length - 1;
    });
    var payload = {
      id: trades_length,
      value: nameRemoved
    };
    dispatch({
      type: 'NEW_TRADE',
      payload: payload
    });
  }
  /**
   * @function addFields
   * @param addFields
   * takes the custom fields created in component and appends to NEW_TRADE_FIELDS piece of state
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
   * @type div
   */


  function handleCounterpartyChange(e) {
    changeCounterparty(e.target.value);
  }

  function createFormColumns(array) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, array.map(function (field, index) {
      if (field[1] !== 'select') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
          item: true,
          xs: 4
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
          name: field[0],
          key: field[0],
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
              label: field[1] === 'date' ? '' : field[0],
              disabled: counterparty === '',
              variant: "outlined",
              type: field[1]
            });
          }
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"], {
          name: field[0]
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
          item: true,
          xs: 4
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], {
          name: field[0],
          key: field[0],
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLabel"], {
              htmlFor: field[0]
            }, " ", field[0], " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
              input: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["OutlinedInput"], {
                name: field[0]
              })
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
              value: "DEFAULT"
            }, " Default")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"], {
              name: field[0]
            }));
          }
        }));
      }
    }));
  }

  function createGrid(items, divider) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 2
    }, items.map());
  }

  function extendedFields() {
    var extended = fields.filter(function (field) {
      return field[2] === '1';
    });

    var returnExtended = function returnExtended(i) {
      return extended[i];
    };

    var returnXS = function returnXS(i) {
      switch (i) {
        case 0 | 4:
          return 12;

        case 5 | 6 | 16 | 17:
          return 6;

        default:
          return 4;
      }
    };

    var returnOrientation = function returnOrientation(i) {
      switch (i) {
        case 0 | 4:
          return "col";

        default:
          return "row";
      }
    };

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 2
    }, [[0], [1, 2, 3], [4], [5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17], [18, 19, 20], [21, 22, 23]].map(function (value, index) {
      var temp = [];

      for (var i = 0; i < value.length; i++) {
        temp.push(returnExtended(value[i]));
      }

      console.log(temp);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        container: true,
        spacing: 2
      }, createFormColumns(temp)));
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "overline"
  }, " New Trade "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_7___default.a, {
    active: isLoading,
    spinner: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_loading_io__WEBPACK_IMPORTED_MODULE_5__["Eclipse"], null),
    styles: {
      overlay: function overlay(base) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
          background: 'rgba(255, 255, 255, 0.1)'
        });
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: fields,
    enableReinitialize: true,
    onSubmit: function onSubmit(values, actions) {
      var extractByKey = validationFunctions[0];
      console.log(values);
    },
    validateOnBlur: true
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched,
        isValidating = _ref.isValidating,
        isSubmitting = _ref.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Select"], {
      value: counterparty,
      onChange: function onChange(e) {
        return handleCounterpartyChange(e);
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      value: ""
    }, " Select Counterparty "), counterpartyList.map(function (value, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
        key: value + index,
        value: value
      }, value);
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 2
    }, fields.map(function (field, index) {
      if (field[2] === '0') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
          item: true,
          xs: 6,
          style: {
            marginTop: 2,
            marginBottom: 2
          }
        }, createFormColumns([field]));
      }
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        marginTop: 20,
        marginBottom: 20
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], null)), extendedFields(), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "contained",
      type: "submit",
      disabled: isValidating || isSubmitting
    }, " Submit "));
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.95dcbb0371e0dd14b092.hot-update.js.map