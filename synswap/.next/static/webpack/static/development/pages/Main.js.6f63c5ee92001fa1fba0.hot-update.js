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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_loading_io__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-loading-io */ "./node_modules/react-loading-io/dist/bundle.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_tradehelpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/tradehelpers */ "./utils/tradehelpers.js");




















function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(props, ["children", "value", "index"]);

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({
    component: "div",
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index)
  }, other), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Box"], {
    p: 3
  }, children));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    'aria-controls': "simple-tabpanel-".concat(index)
  };
}
/**
 * @constant useStyles
 * hook used for styling
 */


var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(function (theme) {
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
  var IRS = schema.IRS;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      isLoading = _useState2[0],
      changeLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
      counterparty = _useState4[0],
      changeCounterparty = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["useDispatch"])();

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var irsSchema = function irsSchema(values) {
    var generateSchema = function generateSchema(object, values) {
      var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object);

      var valueCount = 0;
      var result = {};

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var obj = object[key];

        if (typeof obj === 'string' || typeof obj === 'number') {
          result = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, result, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, key, values[valueCount]));
          valueCount++;
        } else {
          result = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, result, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, key, generateSchema(obj, values.slice(valueCount, valueCount + _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object).length))));
          valueCount = valueCount + _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object).length;
        }
      }

      return result;
    };

    return generateSchema(IRS, values);
  };
  /**
   * @function handleSubmit
   * @param values
   * takes fields passed in from the form and sends to api
   */


  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values) {
      var url, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = 'http://localhost:4000/api/traders/1/trades'; //console.log(values);

              data = values; //irsSchema(Object.values(values));

              _context.prev = 2;
              axios__WEBPACK_IMPORTED_MODULE_12___default.a.post(url, {
                data: data
              }).then(function (response) {
                if (response.status === 200) {
                  console.log(response);
                  dispatch({
                    type: 'NEW_TRADE',
                    payload: [response.data.data, values]
                  });
                  return response.data;
                } else {
                  console.log('Trade register failed.', response.status);
                  var error = new Error(response.statusText);
                  error.response = response;
                  throw error;
                }
              });
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](2);
              console.error('You have an error in your code or there are Network issues.', _context.t0);
              return _context.abrupt("return", _context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 6]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * @function tabChange
   * @param e
   * @param newValue
   * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
   */


  function tabChange(e, newValue) {
    setValue(newValue);
  }

  function generateInitial(array, values) {
    var result = {};

    for (var i = 0; i < array.length; i++) {
      result = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, result, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, array[i][0], values[i]));
    }

    return result;
  }

  function handleCounterpartyChange(e) {
    changeCounterparty(e.target.value);
  }

  function createFormColumns(array) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, array.map(function (value, index) {
      if (value[1] !== 'select') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
          item: true,
          xs: 4
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["Field"], {
          name: value[0],
          key: value[0],
          type: value[1],
          render: function render(_ref2) {
            var field = _ref2.field,
                isSubmitting = _ref2.form.isSubmitting;
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TextField"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, field, {
              label: value[1] === 'date' ? '' : value[0],
              disabled: counterparty === '' || isSubmitting,
              variant: "outlined",
              type: value[1],
              helperText: value[1] === 'date' ? value[0] : ''
            }));
          }
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["ErrorMessage"], {
          name: value[0],
          component: "div"
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
          item: true,
          xs: 4
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["Field"], {
          name: value[0],
          key: value[0],
          component: true
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["ErrorMessage"], {
          name: value[0],
          component: "div"
        }));
      }
    }));
  }

  function extendedFields() {
    var extended = fields.filter(function (field) {
      return field[2] === '1';
    });

    var returnExtended = function returnExtended(i) {
      return extended[i];
    };

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
      container: true,
      spacing: 2
    }, [[0], [1, 2, 3], [4], [5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17], [18, 19, 20], [21, 22, 23]].map(function (value, index) {
      var temp = [];

      for (var i = 0; i < value.length; i++) {
        temp.push(returnExtended(value[i]));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
        item: true,
        xs: 12,
        key: value + index
      }, index === 2 || index === 7 ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          marginTop: 20,
          marginBottom: 20
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
        variant: "overline",
        style: {
          marginBottom: 20
        }
      }, index === 2 ? "Floating Leg" : "Fixed Leg"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Divider"], {
        dark: true
      })) : null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
        container: true,
        spacing: 2
      }, createFormColumns(temp)));
    }));
  }
  /**
   * @return
   * @type Grid
   * @type TabContainer
   * @type div
   */


  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
    variant: "overline",
    style: {
      marginBottom: 20
    }
  }, " ", counterparty === '' ? 'New Trade' : counterparty), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Tabs"], {
    value: value,
    onChange: tabChange,
    centered: true
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Tab"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({
    label: "Main"
  }, a11yProps(0))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Tab"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({
    label: "Details"
  }, a11yProps(1)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_17___default.a, {
    active: isLoading,
    spinner: react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_loading_io__WEBPACK_IMPORTED_MODULE_15__["Eclipse"], null),
    styles: {
      overlay: function overlay(base) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, base, {
          background: 'rgba(255, 255, 255, 0.1)'
        });
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["Formik"], {
    initialValues: generateInitial(fields, new Array(fields.length).fill('')),
    enableReinitialize: true,
    onSubmit: function onSubmit(values, actions) {
      console.log(irsSchema(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(values)));
      handleSubmit(IRS, values);
      actions.setSubmitting(false);
    },
    validateOnBlur: true,
    render: function render(_ref3) {
      var errors = _ref3.errors,
          status = _ref3.status,
          touched = _ref3.touched,
          isSubmitting = _ref3.isSubmitting,
          isValidating = _ref3.isValidating;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_16__["Form"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TabPanel, {
        value: value,
        index: 0
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["TextField"], {
        select: true,
        label: "Select Counterparty",
        disabled: isSubmitting,
        variant: "outlined",
        type: value[1],
        value: counterparty,
        onChange: function onChange(e) {
          return handleCounterpartyChange(e);
        },
        style: {
          width: '100%',
          marginBottom: 20
        }
      }, counterpartyList.map(function (value, index) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["MenuItem"], {
          key: value + index,
          value: value
        }, value);
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
        container: true,
        spacing: 2
      }, fields.map(function (field, index) {
        if (field[2] === '0') {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Grid"], {
            item: true,
            xs: 6,
            style: {
              marginTop: 2,
              marginBottom: 2
            },
            key: field + index
          }, createFormColumns([field]));
        }
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(TabPanel, {
        index: 1,
        value: value
      }, extendedFields(), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        variant: "contained",
        type: "submit",
        disabled: isValidating || isSubmitting || counterparty === '',
        style: {
          marginTop: 20
        }
      }, "Submit")));
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.6f63c5ee92001fa1fba0.hot-update.js.map