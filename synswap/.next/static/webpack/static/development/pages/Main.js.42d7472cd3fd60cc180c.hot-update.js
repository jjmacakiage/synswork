webpackHotUpdate("static/development/pages/Main.js",{

/***/ "./pages/Main.js":
/*!***********************!*\
  !*** ./pages/Main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_awesome_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-awesome-tabs */ "./node_modules/react-awesome-tabs/dist/react-awesome-tabs.js");
/* harmony import */ var react_awesome_tabs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_awesome_tabs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _resources_styles_react_awesome_tabs_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resources/styles/react-awesome-tabs.scss */ "./resources/styles/react-awesome-tabs.scss");
/* harmony import */ var _resources_styles_react_awesome_tabs_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resources_styles_react_awesome_tabs_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_main_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/main/Header */ "./components/main/Header.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home */ "./pages/Home.js");
/* harmony import */ var _NewTrade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NewTrade */ "./pages/NewTrade.js");
/* harmony import */ var _Trade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Trade */ "./pages/Trade.js");
/* harmony import */ var _Blotter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Blotter */ "./pages/Blotter.js");
/* harmony import */ var next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/dist/build/output/log */ "./node_modules/next/dist/build/output/log.js");
/* harmony import */ var next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_Auth_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/Auth/auth */ "./utils/Auth/auth.js");
/* harmony import */ var _utils_Auth_get_host__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/Auth/get-host */ "./utils/Auth/get-host.js");






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

var Main = function Main() {
  /**
   * @constant activeTab
   * @type {object}
   * a number that represents the activeTab piece of state
   */
  var activeTab = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.TabReducer.activeTab;
  });
  /**
   * @var tabs
   * @type {object}
   * an array of objects representing the tabs, with each object in the format { title, index, component }
   */

  var tabs = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.TabReducer.tabs;
  });
  /**
   * @constant dispatch
   * @type {function}
   * gives access to dispatch function from Redux store
   */

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  /**
   * @constant tradeProps
   * receives data from addNewTrade function and updates the most recent TradeProps
   */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    data: {
      columns: [],
      rows: []
    }
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      tradeProps = _useState2[0],
      changeProps = _useState2[1];
  /**
   * @constant MAIN_TABS
   * @type {array}
   * array of objects that contains a 'key' and a 'component' that is mapped to the 'component' attribute from a tab object in
   * @function matchLink
   */


  var MAIN_TABS = [{
    key: 'Home',
    component: Object(_Home__WEBPACK_IMPORTED_MODULE_13__["default"])({
      onClick: handleClick.bind(_this)
    })
  }, {
    key: 'NewTrade',
    component: Object(_NewTrade__WEBPACK_IMPORTED_MODULE_14__["default"])({
      onClick: handleClick
    })
  }, {
    key: 'Trade',
    component: Object(_Trade__WEBPACK_IMPORTED_MODULE_15__["default"])(tradeProps)
  }, {
    key: 'Blotter',
    component: Object(_Blotter__WEBPACK_IMPORTED_MODULE_16__["default"])()
  }];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(['Home']),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      openTabs = _useState4[0],
      changeTabs = _useState4[1];
  /**
   * @function matchLink
   * @type string
   * @param link
   * helper function that receives a link {string} from an option in the <HomePane />'s (child components of <Home />) and
   * matches it to a 'component' in the MAIN_TABS array via the 'key'
   */


  function matchLink(link) {
    for (var i = 0; i < MAIN_TABS.length; i++) {
      var data = MAIN_TABS[i];

      if (link === data.key) {
        return i;
      }
    }

    return new next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_17__["error"]('Component Not Found');
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
   * eventHandler helper function that takes the link as a param and returns a component number from matchLink()...
   * ...then dispatches a new tab object containing a title, index, and component keys to be appended to 'tabs'...
   * ...piece of state
   */


  function handleClick(link) {
    var component = matchLink(link);

    if (openTabs.indexOf(link) === -1) {
      var newTabContent = {
        title: link,
        index: tabs.length,
        component: component
      };
      dispatch({
        type: 'ADD_TAB',
        payload: newTabContent
      });
      changeTabs(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(openTabs).push(link));
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


  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 2
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_main_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
    items: ['Home', 'Blotter', 'New Trade'],
    links: ['Home', 'Blotter', 'NewTrade'],
    onClick: handleClick.bind(_this)
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: 12,
    style: {
      maxWidth: 'min-content'
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_awesome_tabs__WEBPACK_IMPORTED_MODULE_7___default.a, {
    active: activeTab,
    onTabSwitch: handleTabSwitch.bind(_this),
    onTabPositionChange: handleTabPositionChange.bind(_this),
    onTabClose: handleTabClose.bind(_this),
    draggable: true,
    showAdd: false
  }, //maps 'tabs' piece of state to a <Tab> component, changes when 'tabs' changes
  tabs.map(function (value, index) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_awesome_tabs__WEBPACK_IMPORTED_MODULE_7__["Tab"], {
      key: value.title + index,
      title: value.title,
      showClose: index !== 0
    }, MAIN_TABS[value.component].component);
  }))));
};

Main.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _nextCookie, token, apiUrl, redirectOnError, response, js;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_10___default()(ctx), token = _nextCookie.token;
            apiUrl = Object(_utils_Auth_get_host__WEBPACK_IMPORTED_MODULE_19__["default"])(ctx.req) + '/api/profile';

            redirectOnError = function redirectOnError() {
              return  true ? next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/Login') : undefined;
            };

            _context.prev = 3;
            _context.next = 6;
            return fetch(apiUrl, {
              credentials: 'include',
              headers: {
                Authorization: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  token: token
                })
              }
            });

          case 6:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 15;
              break;
            }

            _context.next = 10;
            return response.json();

          case 10:
            js = _context.sent;
            console.log('js', js);
            return _context.abrupt("return", js);

          case 15:
            _context.next = 17;
            return redirectOnError();

          case 17:
            return _context.abrupt("return", _context.sent);

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", redirectOnError());

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 20]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_Auth_auth__WEBPACK_IMPORTED_MODULE_18__["withAuthSync"])(Main));

/***/ })

})
//# sourceMappingURL=Main.js.42d7472cd3fd60cc180c.hot-update.js.map