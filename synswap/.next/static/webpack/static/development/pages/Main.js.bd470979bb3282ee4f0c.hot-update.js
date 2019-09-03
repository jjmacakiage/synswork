webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js");
/* harmony import */ var material_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");











var Table = function Table(props) {
  var data = props.data;
  var columns = !data.rows ? pullStuff(data[0], 'keys') : data.columns;
  var tableIcons = {
    Add: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["AddBox"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Check: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Check"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Clear: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Clear"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Delete: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["DeleteOutline"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    DetailPanel: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ChevronRight"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Edit: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Edit"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Export: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["SaveAlt"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Filter: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["FilterList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    FirstPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["FirstPage"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    LastPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["LastPage"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    NextPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ChevronRight"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    PreviousPage: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ChevronLeft"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    ResetSearch: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Clear"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    Search: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Search"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    SortArrow: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ArrowUpward"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    ThirdStateCheck: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["Remove"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    }),
    ViewColumn: Object(react__WEBPACK_IMPORTED_MODULE_6__["forwardRef"])(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ViewColumn"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
        ref: ref
      }));
    })
  };

  function formatColumns(columns) {
    if (columns.length === 0 || columns[0].width) {
      return columns;
    }

    var doText = function doText(text) {
      var newText = text.replace(/([A-Z]+)/g, " $1");
      return newText.charAt(0).toUpperCase() + newText.slice(1);
    };

    var result = [];

    for (var i = 0; i < columns.length; i++) {
      var column = columns[i];
      var object = {
        title: doText(column),
        field: column
      };
      result.push(object);
    }

    return result;
  }

  function formatRows(rows) {
    var result = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var temp = pullStuff(row, 'values');
      var temp2 = generateObj(columns, temp);
      result.push(temp2);
    }

    return result;
  }

  function generateObj(array, values) {
    var result = {};

    for (var i = 0; i < array.length; i++) {
      result = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, result, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, array[i], values[i]));
    }

    return result;
  }

  function pullStuff(obj, param) {
    var getKeys = function getKeys(obj) {
      if (typeof obj !== 'object') {
        throw new Error('Invalid JSON');
      }

      var result = [];

      var topKeys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(obj);

      for (var i = 0; i < topKeys.length; i++) {
        var topKey = topKeys[i];
        var topEntry = obj[topKey];

        if (typeof topEntry === 'string' || typeof topEntry === 'number') {
          result.push(topKey);
        } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(topEntry)) {
          var arrayEntry = void 0;

          for (arrayEntry in topEntry) {
            result.push(getKeys(arrayEntry, true));
          }
        } else {
          result.push(getKeys(topEntry));
        }
      }

      return result.flat(Infinity);
    };

    var getValues = function getValues(obj) {
      if (typeof obj !== 'object') {
        throw new Error('Invalid JSON');
      }

      var result = [];

      var topValues = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(obj);

      for (var i = 0; i < topValues.length; i++) {
        var topValue = topValues[i];

        if (typeof topValue === 'string' || typeof topValue === 'number') {
          result.push(topValue);
        } else if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(topValue)) {
          var arrayEntry = void 0;

          for (arrayEntry in topValue) {
            result.push(getValues(arrayEntry, true));
          }
        } else {
          result.push(getValues(topValue));
        }
      }

      return result.flat(Infinity);
    };

    switch (param) {
      case 'keys':
        return getKeys(obj, false);

      case 'values':
        return getValues(obj, false);

      default:
        return;
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(material_table__WEBPACK_IMPORTED_MODULE_7___default.a, {
    columns: formatColumns(columns),
    icons: tableIcons,
    data: formatRows(data),
    title: "Blotter",
    options: {
      filtering: true,
      exportButton: true,
      headerStyle: {
        backgroundColor: '#039dfc'
      },
      cellStyle: {
        fontSize: 8
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "./pages/Main.js":
/*!***********************!*\
  !*** ./pages/Main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_awesome_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-awesome-tabs */ "./node_modules/react-awesome-tabs/dist/react-awesome-tabs.js");
/* harmony import */ var react_awesome_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_awesome_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _resources_styles_react_awesome_tabs_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/styles/react-awesome-tabs.scss */ "./resources/styles/react-awesome-tabs.scss");
/* harmony import */ var _resources_styles_react_awesome_tabs_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resources_styles_react_awesome_tabs_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_main_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/main/Header */ "./components/main/Header.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Home */ "./pages/Home.js");
/* harmony import */ var _NewTrade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NewTrade */ "./pages/NewTrade.js");
/* harmony import */ var _Trade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Trade */ "./pages/Trade.js");
/* harmony import */ var _Blotter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Blotter */ "./pages/Blotter.js");
/* harmony import */ var _FileUpload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./FileUpload */ "./pages/FileUpload.js");
/* harmony import */ var next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/dist/build/output/log */ "./node_modules/next/dist/build/output/log.js");
/* harmony import */ var next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_Auth_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/Auth/auth */ "./utils/Auth/auth.js");
/* harmony import */ var _utils_Auth_get_host__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/Auth/get-host */ "./utils/Auth/get-host.js");





var _this = undefined;


















/**
 * @class Main
 * @constructor
 * Contains all the navigation functions, including the <Tabs /> and their functions (dispatched to reducers/TabReducer)
 * Dependencies used:
 * @react-awesome-tabs for the <Tabs> and <Tab> components, react-awesome-tabs.scss for styling (comes with module)
 * @material-ui for <Grid />
 * @react-redux for useDispatch and useSelector
 * Custom Components used:
 * @class NewTradeContent - New Trade page
 * @class Home - Home page
 * @class Trade - Trade page
 * @class Header - Header
 */

function useInterval(callback, params, delay) {
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setInterval(function () {
      callback(params);
    }, delay);
    return function () {
      console.log('Component Unmounted');
    };
  }, []);
}

var Main = function Main() {
  var blockNumber = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.TradeReducer.blockNumber;
  });

  var initialFetch =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var url, response;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "http://localhost:4000/api/traders/1/trades";
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(url);

            case 4:
              response = _context.sent;
              dispatch({
                type: 'INITIAL_FETCH',
                payload: {
                  trades: response.data.trades,
                  blockNumber: response.data.blocknumber
                }
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function initialFetch() {
      return _ref.apply(this, arguments);
    };
  }();

  var fetchTrades =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(bn) {
      var url, response, notifications;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "http://localhost:4000/api/updates/" + bn + "?traderid=1";
              _context2.prev = 1;
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(url);

            case 4:
              response = _context2.sent;

              if (response.data.success && response.data.trades) {
                dispatch({
                  type: 'FETCH_TRADES',
                  payload: {
                    trades: response.data.trades,
                    blockNumber: response.data.blocknumber
                  }
                });
                notifications = response.data.trades.map(function (trade) {
                  // TODO: Only new trade notifcations currently, currently cannot amend trades.
                  return {
                    message: "Amount: " + trade.amount + " Type: " + trade.tradeType,
                    title: "New trade with " + trade.counterPartyId + " alleged"
                  };
                });
                dispatch({
                  type: 'ADD_NOTIFICATIONS',
                  payload: notifications
                });
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function fetchTrades(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    initialFetch();
    return;
  }, []);
  useInterval(fetchTrades, blockNumber, 5000);
  /**
   * @constant activeTab
   * @type {object}
   * a number that represents the activeTab piece of state
   */

  var activeTab = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.TabReducer.activeTab;
  });
  /**
   * @var tabs
   * @type {object}
   * an array of objects representing the tabs, with each object in the format { title, index, component }
   */

  var tabs = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.TabReducer.tabs;
  });
  /**
   * @constant dispatch
   * @type {function}
   * gives access to dispatch function from Redux store
   */

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  /**
   * @constant MAIN_TABS
   * @type {array}
   * array of objects that contains a 'key' and a 'component' that is mapped to the 'component' attribute from a tab object in....
   * ....matchLink
   */

  var MAIN_TABS = [{
    key: 'Home',
    component: Object(_Home__WEBPACK_IMPORTED_MODULE_12__["default"])({
      onClick: handleClick.bind(_this)
    })
  }, {
    key: 'NewTrade',
    component: Object(_NewTrade__WEBPACK_IMPORTED_MODULE_13__["default"])({
      onClick: handleClick
    })
  }, {
    key: 'Trade',
    component: Object(_Trade__WEBPACK_IMPORTED_MODULE_14__["default"])()
  }, {
    key: 'Blotter',
    component: Object(_Blotter__WEBPACK_IMPORTED_MODULE_15__["default"])()
  }, {
    key: 'FileNewTrade',
    component: Object(_FileUpload__WEBPACK_IMPORTED_MODULE_16__["default"])()
  }];
  /**
   * @constant openTabs
   * @type {array}
   * used in handleClick method to redirect to a tab if it is already open
   */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(['Home']),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      openTabs = _useState2[0],
      changeTabs = _useState2[1];
  /**
   * @function matchLink
   * @type string
   * @param link
   * helper function that receives a link {string} from an option in the <HomePane />'s (child components of <Home />) and
   * matches it to a 'component' in the MAIN_TABS array via the 'key'
   * @return number
   */


  function matchLink(link) {
    for (var i = 0; i < MAIN_TABS.length; i++) {
      var data = MAIN_TABS[i];

      if (link === data.key) {
        return i;
      }
    }

    throw Error('Component Not Found');
  }
  /**
   * @function handleTabSwitch
   * @type number
   * @type dispatch
   * @param active
   * eventHandler helper function that takes the desired tab as a parameter and makes it the new active tab
   */


  function handleTabSwitch(active) {
    dispatch({
      type: 'SWITCH_TAB',
      payload: active
    });
  }
  /**
   * @function handleTabPositionChange
   * @type dispatch
   * @param a
   * @param b
   * eventHandler helper function that takes the two tabs to be switched around, switches their indices,...
   * ...and changes the new active tab
   */


  function handleTabPositionChange(a, b) {
    var c = tabs[a];
    tabs[a] = tabs[b];
    tabs[b] = c;

    if (activeTab === a) {
      dispatch({
        type: 'SWITCH_TAB',
        activeTab: b
      });
    } else if (activeTab === b) {
      dispatch({
        type: 'SWITCH_TAB',
        activeTab: a
      });
    }
  }
  /**
   * @function handleTabClose
   * @param index
   * eventHandler helper function that takes the closed tab and pops it from 'tabs' piece of state
   */


  function handleTabClose(index) {
    dispatch({
      type: 'REMOVE_TAB',
      payload: index
    });
    var newTabs = openTabs.filter(function (value, i) {
      return i !== index;
    });
    changeTabs(newTabs);
  }
  /**
   * @function handleClick
   * @param link
   * eventHandler helper function that takes the link as a param and returns a component number from matchLink()
   * if the tab is already open (!indexOf(link) === -1) then switch to that tab with handleTabSwitch
   * else dispatch a new tab object containing a title, index, and component keys to be appended to 'tabs'...
   * ...piece of state
   */


  function handleClick(link) {
    var component = matchLink(link);

    if (openTabs.indexOf(link) === -1) {
      var newTabContent = {
        title: link.match(/[A-Z][a-z]+|[0-9]+/g).join(" "),
        index: tabs.length,
        key: link,
        component: component
      };
      dispatch({
        type: 'ADD_TAB',
        payload: newTabContent
      });

      var newOpen = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(openTabs);

      newOpen.push(link);
      changeTabs(newOpen);
    } else {
      handleTabSwitch(openTabs.indexOf(link));
    }
  }
  /**
   * @return
   * @type Grid
   * @type Header
   * @type Tabs
   * @type Tab
   * @type MAIN_TABS[component]
   */


  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    style: {
      maxWidth: 'min-content',
      backgroundColor: '#f5f5f5'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_awesome_tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
    active: activeTab,
    onTabSwitch: handleTabSwitch.bind(_this),
    onTabPositionChange: handleTabPositionChange.bind(_this),
    onTabClose: handleTabClose.bind(_this),
    draggable: true,
    showAdd: false
  }, //maps 'tabs' piece of state to a <Tab> component, changes when 'tabs' changes
  tabs.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_awesome_tabs__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
      key: value.title + index,
      title: value.title,
      showClose: index !== 0
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      spacing: 4
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 12
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_main_Header__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 12
    }, createTab(value.key))));
  }))));

  function createTab(key) {
    switch (key) {
      case 'Home':
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: handleClick.bind(this)
        });

      case 'NewTrade':
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_NewTrade__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onClick: handleClick
        });

      case 'Trade':
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Trade__WEBPACK_IMPORTED_MODULE_14__["default"], null);

      case 'Blotter':
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Blotter__WEBPACK_IMPORTED_MODULE_15__["default"], null);

      case 'FileNewTrade':
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_FileUpload__WEBPACK_IMPORTED_MODULE_16__["default"], null);

      default:
        throw new next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17__["error"]('Tab Map Failed');
    }
  }
};
/**
 * @function getInitialProps
 * @param ctx
 * checks if user is already logged in before Main component is mounted, if not redirected to  Login page
 * @return {Promise<boolean|any|Promise<boolean>>}
 */

/* Main.getInitialProps = async ctx => {
    const { token } = nextCookie(ctx);
    const apiUrl = getHost(ctx.req) + '/api/profile';

    const redirectOnError = () =>
        typeof window !== 'undefined'
            ? Router.push('/Login')
            : ctx.res.writeHead(302, { Location: '/Login' }).end();

    try {
        const response = await fetch(apiUrl, {
            credentials: 'include',
            headers: {
                Authorization: JSON.stringify({ token })
            }
        });

        if (response.ok) {
            const js = await response.json()
            console.log('js', js);
            return js
        } else {
            // https://github.com/developit/unfetch#caveats
            return await redirectOnError()
        }
    } catch (error) {
        // Implementation or Network error
        return redirectOnError()
    }
};

export default withAuthSync(Main);

 */


/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

})
//# sourceMappingURL=Main.js.bd470979bb3282ee4f0c.hot-update.js.map