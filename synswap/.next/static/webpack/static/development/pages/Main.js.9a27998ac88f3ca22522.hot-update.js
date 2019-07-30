webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/main/ProfileMenu.js":
/*!****************************************!*\
  !*** ./components/main/ProfileMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfileMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_Auth_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Auth/auth */ "./utils/Auth/auth.js");







var StyledMenu = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  paper: {
    border: '1px solid #d3d4d5'
  }
})(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Menu"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    elevation: 0,
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, props));
});
var StyledMenuItem = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(function (theme) {
  return {
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white
        }
      }
    }
  };
})(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"]);
function ProfileMenu() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    dispatch({
      type: 'LOGOUT'
    });
    Object(_utils_Auth_auth__WEBPACK_IMPORTED_MODULE_6__["logout"])();
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    "aria-controls": "customized-menu",
    "aria-haspopup": "true",
    variant: "contained",
    onClick: handleClick
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["PersonOutlineSharp"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMenu, {
    id: "customized-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledMenuItem, {
    onClick: handleLogout
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__["ExitToApp"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
    primary: "Log Out"
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.9a27998ac88f3ca22522.hot-update.js.map