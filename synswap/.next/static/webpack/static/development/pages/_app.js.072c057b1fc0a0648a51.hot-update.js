webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./js/new_trade_fields.js":
/*!********************************!*\
  !*** ./js/new_trade_fields.js ***!
  \********************************/
/*! exports provided: extractByKey, new_trade_fields, IRS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractByKey", function() { return extractByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_trade_fields", function() { return new_trade_fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRS", function() { return IRS; });
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
//# sourceMappingURL=_app.js.072c057b1fc0a0648a51.hot-update.js.map