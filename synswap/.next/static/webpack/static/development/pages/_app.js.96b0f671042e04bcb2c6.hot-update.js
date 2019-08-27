webpackHotUpdate("static/development/pages/_app.js",{

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
//# sourceMappingURL=_app.js.96b0f671042e04bcb2c6.hot-update.js.map