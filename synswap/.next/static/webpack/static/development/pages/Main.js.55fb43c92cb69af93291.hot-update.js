webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/newtrade/Form.js":
/*!*************************************!*\
  !*** ./components/newtrade/Form.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-overlay */ "./node_modules/react-loading-overlay/lib/LoadingOverlay.js");
/* harmony import */ var react_loading_overlay__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_overlay__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_loading_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loading-io */ "./node_modules/react-loading-io/dist/bundle.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);










var NewTradeFrom = function NewTradeFrom(props) {
  //const validationSchema = useSelector(state => state.NewTradeReducer.validationSchema);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      counterparty = _React$useState2[0],
      changeCounterparty = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      isLoading = _React$useState4[0],
      changeLoading = _React$useState4[1];

  var values = function values() {
    var list = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(props.initialValues);

    var result = [];

    for (var i = 0; i < list.length; i++) {
      result.push([list[i], yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Required')]);
    }

    return Object.fromEntries(new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a(result));
  };

  var testSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape(values());
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_loading_overlay__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: isLoading,
    spinner: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_loading_io__WEBPACK_IMPORTED_MODULE_7__["Ball"], null),
    styles: {
      overlay: function overlay(base) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, base, {
          background: 'rgba(255, 255, 255, 0.1)'
        });
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: props.initialValues,
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
    validationSchema: testSchema,
    validateOnBlur: true
  }, function (_ref) {
    var errors = _ref.errors,
        touched = _ref.touched,
        isValidating = _ref.isValidating,
        isSubmitting = _ref.isSubmitting;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
      value: counterparty,
      onChange: function onChange(e) {
        return changeCounterparty(e.target.value);
      }
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
      value: ""
    }, " Select Counterparty "), props.counterparties.map(function (value, index) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
        key: value + index,
        value: value
      }, value);
    })), props.fields.map(function (field, index) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "col",
        key: field + index
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
        type: "name",
        name: field,
        disabled: counterparty === ''
      }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
        name: field
      }));
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      type: "submit",
      disabled: isValidating || isSubmitting
    }, " Submit "));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NewTradeFrom);

/***/ })

})
//# sourceMappingURL=Main.js.55fb43c92cb69af93291.hot-update.js.map