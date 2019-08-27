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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_loading_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-io */ "./node_modules/react-loading-io/dist/bundle.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_tradehelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/tradehelpers */ "./utils/tradehelpers.js");
/* harmony import */ var _js_new_trade_fields__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../js/new_trade_fields */ "./js/new_trade_fields.js");











/**
 * @constant useStyles
 * hook used for styling
 */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      isLoading = _useState2[0],
      changeLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      counterparty = _useState4[0],
      changeCounterparty = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
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
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, array.map(function (value, index) {
      if (value[1] !== 'select') {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
          item: true,
          xs: 4
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: value[0],
          key: value[0],
          type: value[1],
          render: function render(_ref) {
            var field = _ref.field,
                isSubmitting = _ref.form.isSubmitting;
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, field, {
              label: value[1] === 'date' ? '' : value[0],
              disabled: counterparty === '' || isSubmitting,
              variant: "outlined",
              type: value[1]
            }));
          }
        }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
          name: value[0]
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
          item: true,
          xs: 4
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          name: value[0],
          key: value[0],
          render: function render(_ref2) {
            var field = _ref2.field,
                isSubmitting = _ref2.form.isSubmitting;
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
              select: true,
              label: value[0],
              disabled: counterparty === '' || isSubmitting,
              variant: "outlined",
              type: value[1],
              style: {
                minWidth: 200
              }
            }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], null, "Default")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
              name: value[0]
            }));
          }
        }));
      }
    }));
  }

  function createGrid(items, divider) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
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

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      spacing: 2
    }, [[0], [1, 2, 3], [4], [5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17], [18, 19, 20], [21, 22, 23]].map(function (value, index) {
      var temp = [];

      for (var i = 0; i < value.length; i++) {
        temp.push(returnExtended(value[i]));
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        container: true,
        spacing: 2
      }, createFormColumns(temp)));
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "overline"
  }, " New Trade "), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_8___default.a, {
    active: isLoading,
    spinner: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_loading_io__WEBPACK_IMPORTED_MODULE_6__["Eclipse"], null),
    styles: {
      overlay: function overlay(base) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
          background: 'rgba(255, 255, 255, 0.1)'
        });
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    initialValues: [],
    enableReinitialize: true,
    onSubmit: function onSubmit(values, actions) {
      var extractByKey = validationFunctions[0];
      console.log(values);
      actions.setSubmitting(false);
    },
    validateOnBlur: true,
    render: function render(_ref3) {
      var errors = _ref3.errors,
          status = _ref3.status,
          touched = _ref3.touched,
          isSubmitting = _ref3.isSubmitting,
          isValidating = _ref3.isValidating;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
        select: true,
        label: value[0],
        disabled: isSubmitting,
        variant: "outlined",
        type: value[1],
        helperText: "Select Counterparty",
        onChange: function onChange(e) {
          return handleCounterpartyChange(e);
        }
      }, counterpartyList.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
          key: value + index,
          value: value
        }, value);
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        container: true,
        spacing: 2
      }, fields.map(function (field, index) {
        if (field[2] === '0') {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
            item: true,
            xs: 6,
            style: {
              marginTop: 2,
              marginBottom: 2
            }
          }, createFormColumns([field]));
        }
      })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        style: {
          marginTop: 20,
          marginBottom: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], null)), extendedFields(), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        variant: "contained",
        type: "submit",
        disabled: isValidating || isSubmitting
      }, " Submit "));
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.bab8da9f607fab8c4aaa.hot-update.js.map