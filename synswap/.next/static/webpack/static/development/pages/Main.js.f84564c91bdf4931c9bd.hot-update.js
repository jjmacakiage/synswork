webpackHotUpdate("static/development/pages/Main.js",{

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
    var interval = setInterval(function () {
      callback(params);
    }, delay);
    return function () {
      return clearInterval(interval);
    };
  }, []);
}

var Main = function Main() {
  var fetchTrades = function fetchTrades(isFirst) {
    var doFetch =
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
                console.log(response);
                dispatch({
                  type: isFirst ? 'INITIAL_FETCH' : 'FETCH_TRADES',
                  payload: response.data.trades
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      return function doFetch() {
        return _ref.apply(this, arguments);
      };
    }();

    doFetch();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    fetchTrades(true);
  }, []);
  useInterval(fetchTrades, false, 5000);
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
    }, MAIN_TABS[value.component].component)));
  }))));
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
//# sourceMappingURL=Main.js.f84564c91bdf4931c9bd.hot-update.js.map