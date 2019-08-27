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

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      spacing: 2
    }, [[0], [1, 2, 3], [4], [5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17], [18, 19, 20], [21, 22, 23]].map(function (value, index) {
      var temp = [];

      for (var i = 0; i < value.length; i++) {
        temp.push(returnExtended(value[i]));
      }

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

/***/ }),

/***/ "./js/new_trade_fields.js":
/*!********************************!*\
  !*** ./js/new_trade_fields.js ***!
  \********************************/
/*! exports provided: json, extractByKey, new_trade_fields, IRS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractByKey", function() { return extractByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_trade_fields", function() { return new_trade_fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRS", function() { return IRS; });
var json = {
  "contractIdentifier": [{
    "assignedIdentifier": [{
      "identifier": {
        "value": "SW2000",
        "meta": {
          "scheme": "http://www.barclays.com/swaps/trade-id"
        }
      },
      "version": 1
    }],
    "issuerReference": {
      "globalReference": "c6416b25",
      "externalReference": "party2"
    },
    "meta": {
      "globalKey": "b05803d"
    }
  }],
  "contractualProduct": {
    "economicTerms": {
      "payout": {
        "interestRatePayout": [{
          "calculationPeriodDates": {
            "calculationPeriodDatesAdjustments": {
              "businessCenters": {
                "businessCentersReference": {
                  "globalReference": "3deac93",
                  "externalReference": "primaryBusinessCenters"
                },
                "meta": {
                  "globalKey": "0"
                }
              },
              "businessDayConvention": "MODFOLLOWING",
              "meta": {
                "globalKey": "9125764f"
              }
            },
            "calculationPeriodFrequency": {
              "meta": {
                "globalKey": "2481db"
              },
              "period": "M",
              "periodMultiplier": 6,
              "rollConvention": "14"
            },
            "effectiveDate": {
              "adjustableDate": {
                "dateAdjustments": {
                  "businessDayConvention": "NONE",
                  "meta": {
                    "globalKey": "4703fc8"
                  }
                },
                "meta": {
                  "globalKey": "593369fa"
                },
                "unadjustedDate": "1994-12-14"
              },
              "meta": {
                "globalKey": "593369fa"
              }
            },
            "meta": {
              "globalKey": "1bc89b9c",
              "externalKey": "floatingCalcPeriodDates"
            },
            "terminationDate": {
              "adjustableDate": {
                "dateAdjustments": {
                  "businessCenters": {
                    "businessCenter": [{
                      "value": "DEFR"
                    }],
                    "meta": {
                      "globalKey": "3deac93",
                      "externalKey": "primaryBusinessCenters"
                    }
                  },
                  "businessDayConvention": "MODFOLLOWING",
                  "meta": {
                    "globalKey": "b80395e"
                  }
                },
                "meta": {
                  "globalKey": "c861d290"
                },
                "unadjustedDate": "1999-12-14"
              },
              "meta": {
                "globalKey": "c861d290"
              }
            }
          },
          "dayCountFraction": {
            "value": "ACT/360"
          },
          "meta": {
            "globalKey": "b90d6478"
          },
          "payerReceiver": {
            "payerPartyReference": {
              "globalReference": "468059e0",
              "externalReference": "party1"
            },
            "receiverPartyReference": {
              "globalReference": "c6416b25",
              "externalReference": "party2"
            }
          },
          "paymentDates": {
            "meta": {
              "globalKey": "4340854e"
            },
            "payRelativeTo": "CALCULATION_PERIOD_END_DATE",
            "paymentDatesAdjustments": {
              "businessCenters": {
                "businessCentersReference": {
                  "globalReference": "3deac93",
                  "externalReference": "primaryBusinessCenters"
                },
                "meta": {
                  "globalKey": "0"
                }
              },
              "businessDayConvention": "MODFOLLOWING",
              "meta": {
                "globalKey": "9125764f"
              }
            },
            "paymentFrequency": {
              "meta": {
                "globalKey": "121c7"
              },
              "period": "M",
              "periodMultiplier": 6
            }
          },
          "quantity": {
            "notionalSchedule": {
              "meta": {
                "globalKey": "1a115b3d"
              },
              "notionalStepSchedule": {
                "initialValue": 50000000.00,
                "meta": {
                  "globalKey": "27fa7367"
                },
                "currency": {
                  "value": "EUR",
                  "meta": {
                    "scheme": "http://www.fpml.org/coding-scheme/external/iso4217"
                  }
                }
              }
            }
          },
          "rateSpecification": {
            "floatingRate": {
              "floatingRateIndex": {
                "value": "EUR-LIBOR-BBA"
              },
              "indexTenor": {
                "meta": {
                  "globalKey": "121c7"
                },
                "period": "M",
                "periodMultiplier": 6
              },
              "meta": {
                "globalKey": "2506df34"
              }
            }
          },
          "resetDates": {
            "calculationPeriodDatesReference": {
              "globalReference": "1bc89b9c",
              "externalReference": "floatingCalcPeriodDates"
            },
            "fixingDates": {
              "meta": {
                "globalKey": "f4ae4220"
              },
              "period": "D",
              "periodMultiplier": -2,
              "dayType": "BUSINESS",
              "businessCenters": {
                "businessCenter": [{
                  "value": "GBLO"
                }],
                "meta": {
                  "globalKey": "407ac22"
                }
              },
              "businessDayConvention": "NONE",
              "dateRelativeTo": {
                "globalReference": "e0326547",
                "externalReference": "resetDates"
              }
            },
            "meta": {
              "globalKey": "e0326547",
              "externalKey": "resetDates"
            },
            "resetDatesAdjustments": {
              "businessCenters": {
                "businessCentersReference": {
                  "globalReference": "3deac93",
                  "externalReference": "primaryBusinessCenters"
                },
                "meta": {
                  "globalKey": "0"
                }
              },
              "businessDayConvention": "MODFOLLOWING",
              "meta": {
                "globalKey": "9125764f"
              }
            },
            "resetFrequency": {
              "meta": {
                "globalKey": "121c7"
              },
              "period": "M",
              "periodMultiplier": 6
            },
            "resetRelativeTo": "CALCULATION_PERIOD_START_DATE"
          }
        }, {
          "calculationPeriodDates": {
            "calculationPeriodDatesAdjustments": {
              "businessCenters": {
                "businessCentersReference": {
                  "globalReference": "3deac93",
                  "externalReference": "primaryBusinessCenters"
                },
                "meta": {
                  "globalKey": "0"
                }
              },
              "businessDayConvention": "MODFOLLOWING",
              "meta": {
                "globalKey": "9125764f"
              }
            },
            "calculationPeriodFrequency": {
              "meta": {
                "globalKey": "29e38a"
              },
              "period": "Y",
              "periodMultiplier": 1,
              "rollConvention": "14"
            },
            "effectiveDate": {
              "adjustableDate": {
                "dateAdjustments": {
                  "businessDayConvention": "NONE",
                  "meta": {
                    "globalKey": "4703fc8"
                  }
                },
                "meta": {
                  "globalKey": "593369fa"
                },
                "unadjustedDate": "1994-12-14"
              },
              "meta": {
                "globalKey": "593369fa"
              }
            },
            "meta": {
              "globalKey": "69249e88",
              "externalKey": "fixedCalcPeriodDates"
            },
            "terminationDate": {
              "adjustableDate": {
                "dateAdjustments": {
                  "businessCenters": {
                    "businessCentersReference": {
                      "globalReference": "3deac93",
                      "externalReference": "primaryBusinessCenters"
                    },
                    "meta": {
                      "globalKey": "0"
                    }
                  },
                  "businessDayConvention": "MODFOLLOWING",
                  "meta": {
                    "globalKey": "9125764f"
                  }
                },
                "meta": {
                  "globalKey": "6df2eedd"
                },
                "unadjustedDate": "1999-12-14"
              },
              "meta": {
                "globalKey": "6df2eedd"
              }
            }
          },
          "dayCountFraction": {
            "value": "30E/360"
          },
          "meta": {
            "globalKey": "1e9b3eb7"
          },
          "payerReceiver": {
            "payerPartyReference": {
              "globalReference": "c6416b25",
              "externalReference": "party2"
            },
            "receiverPartyReference": {
              "globalReference": "468059e0",
              "externalReference": "party1"
            }
          },
          "paymentDates": {
            "meta": {
              "globalKey": "434086bd"
            },
            "payRelativeTo": "CALCULATION_PERIOD_END_DATE",
            "paymentDatesAdjustments": {
              "businessCenters": {
                "businessCentersReference": {
                  "globalReference": "3deac93",
                  "externalReference": "primaryBusinessCenters"
                },
                "meta": {
                  "globalKey": "0"
                }
              },
              "businessDayConvention": "MODFOLLOWING",
              "meta": {
                "globalKey": "9125764f"
              }
            },
            "paymentFrequency": {
              "meta": {
                "globalKey": "14e38"
              },
              "period": "Y",
              "periodMultiplier": 1
            }
          },
          "quantity": {
            "notionalSchedule": {
              "meta": {
                "globalKey": "1a115b3d"
              },
              "notionalStepSchedule": {
                "initialValue": 50000000.00,
                "meta": {
                  "globalKey": "27fa7367"
                },
                "currency": {
                  "value": "EUR",
                  "meta": {
                    "scheme": "http://www.fpml.org/coding-scheme/external/iso4217"
                  }
                }
              }
            }
          },
          "rateSpecification": {
            "fixedRate": {
              "initialValue": 0.06,
              "meta": {
                "globalKey": "2ba0bfc"
              }
            }
          }
        }]
      },
      "rosettaKeyValue": "15fd01cb"
    },
    "productIdentification": {
      "productQualifier": "InterestRate_IRSwap_FixedFloat_PlainVanilla"
    }
  },
  "meta": {
    "globalKey": "2bc99229"
  },
  "party": [{
    "meta": {
      "globalKey": "468059e0",
      "externalKey": "party1"
    },
    "name": {
      "value": "Party A"
    },
    "partyId": [{
      "value": "PARTYAUS33",
      "meta": {
        "scheme": "http://www.fpml.org/coding-scheme/external/iso9362"
      }
    }]
  }, {
    "meta": {
      "globalKey": "c6416b25",
      "externalKey": "party2"
    },
    "partyId": [{
      "value": "BARCGB2L",
      "meta": {
        "scheme": "http://www.fpml.org/coding-scheme/external/iso9362"
      }
    }]
  }],
  "tradeDate": {
    "date": "1994-12-12",
    "meta": {
      "globalKey": "78c0e74"
    }
  }
};
function extractByKey(obj, key) {
  //Pull all values of specified key from nested JSON
  var arr = [];

  function extract(obj, arr, key) {
    //Recursively search for values of key in JSON tree
    if (obj instanceof Object) {
      var values = obj.values();

      for (var i = 0; i < keys.length; i++) {
        if (values[i] instanceof Object || values[i] instanceof Array) {
          extract(values[i], arr, key);
        } else if (values[i] === key) {
          arr.append(values[i]);
        }
      }
    } else if (obj instanceof Array) {
      for (var _i = 0; _i < obj.length; _i++) {
        extract(obj[_i], arr, key);
      }
    }

    return arr;
  }

  return extract(obj, arr, key);
}
var base_fields = [['Trade ID', 'text'], ['Trade Date', 'date'], ['Trade Type', 'select'], ['Counterparty', 'select'], ['Direction', 'select'], ['Amount', 'number'], ['Currency', 'select'], ['Fixed Rate', 'number'], ['Duration', 'select']];
var extended_fields = [['Counterparty Trade ID', 'text'], ['Termination Date (Fixed Leg)', 'date'], ['Bus Day Convention', 'select'], ['Business Centre', 'select'], ['Rate Reference', 'select'], ['Period', 'select'], ['Day Count Fraction', 'select'], ['Fixing Date Offset', 'select'], ['Bus Day Convention', 'select'], ['Business Centre', 'select'], ['Effective Date', 'date'], ['Bus Day Convention', 'select'], ['Business Centre', 'select'], ['Termination Date', 'date'], ['Bus Day Convention', 'select'], ['Business Centre', 'select'], ['Period (Fixed Leg)', 'select'], ['Day Count Fraction (Fixed Leg)', 'select'], ['Effective Date (Fixed Leg)', 'date'], ['Bus Day Convention', 'select'], ['Business Centre', 'select'], ['Termination Date (Fixed Leg)', 'date'], ['Bus Day Convention (Fixed Leg)', 'select'], ['Business Centre(Fixed Leg)', 'select']];
var new_trade_fields = function new_trade_fields() {
  var base = function base() {
    for (var i = 0; i < base_fields.length; i++) {
      base_fields[i].push('0');
    }

    return base_fields;
  };

  var extended = function extended() {
    for (var i = 0; i < extended_fields.length; i++) {
      extended_fields[i].push('1');
    }

    return extended_fields;
  };

  return base().concat(extended());
};
var IRS = {
  "tradeDate": "2019-08-02",
  "tradeType": "IRS",
  "direction": "PayFixed",
  "amount": 100000,
  "currency": "GBP",
  "fixedRate": 0.1,
  "duration": "5Y",
  "counterPartyId": 2,
  "terminationDate": {
    "date": "2020-08-02",
    "busDayConvention": "ModFollowing",
    "businessCentre": "GBLO"
  },
  "floatingLeg": {
    "rateReference": "EURIBOR",
    "effectiveDate": {
      "date": "2019-08-02",
      "busDayConvention": "ModFollowing",
      "businessCentre": "GBLO"
    },
    "terminationDate": {
      "date": "2020-08-02",
      "busDayConvention": "ModFollowing",
      "businessCentre": "GBLO"
    },
    "paymentTerms": {
      "period": "6M",
      "dayCountFraction": "ACT/360"
    },
    "fixingDateOffset": {
      "offset": "-2D",
      "busDayConvention": "ModFollowing",
      "businessCentre": "GBLO"
    }
  },
  "fixedLeg": {
    "effectiveDate": {
      "date": "2019-08-02",
      "busDayConvention": "ModFollowing",
      "businessCentre": "GBLO"
    },
    "terminationDate": {
      "date": "2019-08-02",
      "busDayConvention": "ModFollowing",
      "businessCentre": "GBLO"
    },
    "paymentTerms": {
      "period": "6M",
      "dayCountFraction": "ACT/360"
    }
  }
};

/***/ })

})
//# sourceMappingURL=Main.js.96b0f671042e04bcb2c6.hot-update.js.map