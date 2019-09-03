webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/main/Header.js":
/*!***********************************!*\
  !*** ./components/main/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProfileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProfileMenu */ "./components/main/ProfileMenu.js");
/* harmony import */ var _home_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/List */ "./components/home/List.js");
/* harmony import */ var _SearchList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SearchList */ "./components/main/SearchList.js");









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      flexGrow: 1,
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["fade"])(theme.palette.common.white, 0.25)
      },
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    }),
    rootList: {
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      top: 36,
      right: 0,
      left: 0
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
});
function Header(props) {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      searchValue = _useState2[0],
      changeValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      isOpen = _useState4[0],
      open = _useState4[1];

  var items = props.items,
      links = props.links;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(items),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      resultList = _useState6[0],
      changeList = _useState6[1];

  var handleChange = function handleChange(e) {
    open(true);
    changeValue(e.target.value);
    filterList();
  };

  var filterList = function filterList() {
    var newList = resultList.filter(function (value) {
      return value.includes(searchValue);
    });
    changeList(newList);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    position: "static"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    className: classes.toolbar
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.search
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SearchList__WEBPACK_IMPORTED_MODULE_8__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProfileMenu__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    dark: true
  }))));
}

/***/ })

})
//# sourceMappingURL=Main.js.e6ba9241d7ffd8d21688.hot-update.js.map