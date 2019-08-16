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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _NewTradeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewTradeForm */ "./components/newtrade/NewTradeForm.js");
/* harmony import */ var _CustomiseFields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomiseFields */ "./components/newtrade/CustomiseFields.js");
/* harmony import */ var _utils_tradehelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/tradehelpers */ "./utils/tradehelpers.js");
/* harmony import */ var react_loading_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loading-io */ "./node_modules/react-loading-io/dist/bundle.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_10__);











/**
 * @constant useStyles
 * hook used for styling
 */

var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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
 * @class NewTradeForm
 * @class CustomiseFields
 */

function NewTradeContent(props) {
  var classes = useStyles();
  var fields = props.fields,
      counterpartyList = props.counterpartyList,
      trades_length = props.trades_length;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isLoading = _useState2[0],
      changeLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      counterparty = _useState4[0],
      changeCounterparty = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];
  /**
   * @function handleSubmit
   * @param result
   * takes fields passed in from NewTradeForm and appends to 'tradeStates' piece of state
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


  function handleCounterpartyChange(e) {
    changeCounterparty(e.target.value);
  }

  function createFormColumns(array) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "row"
    }, [array].map(function (field) {
      if (field[2] !== 'select') {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Field"], {
          name: field[0],
          key: field[0],
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
              label: field[0],
              disabled: counterparty === '',
              variant: "outlined",
              type: field[2]
            });
          }
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"], {
          name: field[0]
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Field"], {
          name: field[0],
          key: field[0],
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLabel"], {
              htmlFor: field[0]
            }, " ", field[0], " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
              name: field[0]
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
              value: "DEFAULT"
            }, " Default")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["ErrorMessage"], {
              name: field[0]
            }));
          }
        });
      }
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_10___default.a, {
    active: false,
    spinner: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_loading_io__WEBPACK_IMPORTED_MODULE_8__["Ball"], null),
    styles: {
      overlay: function overlay(base) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
          background: 'rgba(255, 255, 255, 0.1)'
        });
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Formik"], {
    initialValues: [],
    onSubmit: function onSubmit(values, actions) {
      changeLoading(true);
      setTimeout(function () {
        changeLoading(false);
      }, 2000);
      console.log(values);
      actions.setSubmitting(false);
    },
    enableReinitialize: true
    /*onSubmit={(values, actions) => {
        MyImaginaryRestApiCall(user.id, values).then(
            updatedUser => {
                actions.setSubmitting(false);
                updateUser(updatedUser);
                onClose();
            },
            error => {
                actions.setSubmitting(false);
                actions.setErrors(transformMyRestApiErrorsToAnObject(error));
                actions.setStatus({ msg: 'Set some arbitrary status or data' });
            }
        );
    }}
    */
    ,
    validateOnBlur: true
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched,
        isValidating = _ref.isValidating,
        isSubmitting = _ref.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_9__["Form"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      value: value,
      onChange: tabChange,
      indicatorColor: "primary",
      textColor: "primary",
      centered: true
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      label: "Edit"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      label: "Autofill"
    })), value === 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_utils_tradehelpers__WEBPACK_IMPORTED_MODULE_7__["TabContainer"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 2
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 6
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
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
    })), fields.map(function (field, index) {
      if (field[2] === 0) {
        return createFormColumns([field]);
      }
    })))), value === 1 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_utils_tradehelpers__WEBPACK_IMPORTED_MODULE_7__["TabContainer"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 2
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 6
    }, function () {
      var extended = fields.filter(function (field) {
        return field[2] === 1;
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "secondary"
      }, createFormColumns([extended[0]]), createFormColumns([extended[1], extended[2], extended[3]]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        dark: true
      }), createFormColumns([extended[4]]), createFormColumns([extended[5], extended[6]]), createFormColumns([extended[7], extended[8], extended[9]]), createFormColumns([extended[10], extended[11], extended[12]]), createFormColumns([extended[13], extended[14], extended[15]]), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
        dark: true
      }), createFormColumns([extended[16], extended[17]]), createFormColumns([extended[18], extended[19], extended[20]]), createFormColumns([extended[21], extended[22], extended[23]]));
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      type: "submit",
      disabled: isValidating || isSubmitting
    }, " Submit "));
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.4da23379956496b5efbd.hot-update.js.map