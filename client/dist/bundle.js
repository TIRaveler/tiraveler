/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Main = __webpack_require__(/*! ./Main */ \"./client/src/components/Main.jsx\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nvar _Login = __webpack_require__(/*! ./Login */ \"./client/src/components/Login.jsx\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Search = __webpack_require__(/*! ./Search */ \"./client/src/components/Search.jsx\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _Time = __webpack_require__(/*! ./Time */ \"./client/src/components/Time.jsx\");\n\nvar _Time2 = _interopRequireDefault(_Time);\n\nvar _Photos = __webpack_require__(/*! ./Photos */ \"./client/src/components/Photos.jsx\");\n\nvar _Photos2 = _interopRequireDefault(_Photos);\n\nvar _Events = __webpack_require__(/*! ./Events */ \"./client/src/components/Events.jsx\");\n\nvar _Events2 = _interopRequireDefault(_Events);\n\nvar _Review = __webpack_require__(/*! ./Review */ \"./client/src/components/Review.jsx\");\n\nvar _Review2 = _interopRequireDefault(_Review);\n\nvar _Finalized = __webpack_require__(/*! ./Finalized */ \"./client/src/components/Finalized.jsx\");\n\nvar _Finalized2 = _interopRequireDefault(_Finalized);\n\nvar _Itinerary = __webpack_require__(/*! ./Itinerary */ \"./client/src/components/Itinerary.jsx\");\n\nvar _Itinerary2 = _interopRequireDefault(_Itinerary);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      selectedPhotos: [],\n      pictures: []\n    };\n    _this.postSelectedTags = _this.postSelectedTags.bind(_this);\n    return _this;\n  }\n\n  //getPictures:\n\n  //  superFunction(key) {\n  //   return (event) => {\n  //     this.setState({ [key]: event.target.value });\n  //     console.log('supperFunction is called!')\n  //   };\n  // }\n\n  _createClass(App, [{\n    key: 'postSelectedTags',\n    value: function postSelectedTags(event) {\n      this.setState({ selectedPhotos: event.target.value });\n      $.ajax({\n        url: '/events/search',\n        data: JSON.stringify(event.target.value),\n        type: \"POST\",\n        error: function error(xhr, status, err) {\n          console.error(err);\n        },\n        success: function success(data) {\n          console.log('Data posted', data);\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        _reactRouterDom.BrowserRouter,\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Main2.default, null);\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/login', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Login2.default, null);\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/search', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Search2.default, null);\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/time', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Time2.default, null);\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/photos', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Photos2.default, { sendSelectedPhotos: _this2.postSelectedTags });\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/events', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Events2.default, null);\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/review', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Review2.default, null);\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/finalized', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Finalized2.default, null);\n            } }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/myItineraries', exact: true, render: function render(props) {\n              return _react2.default.createElement(_Itinerary2.default, null);\n            } })\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(_react2.default.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./client/src/components/App.jsx?");

/***/ }),

/***/ "./client/src/components/Events.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Events.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Events = function Events() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Events'\n  );\n};\n\nexports.default = Events;\n\n//# sourceURL=webpack:///./client/src/components/Events.jsx?");

/***/ }),

/***/ "./client/src/components/Finalized.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/Finalized.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Finalized = function Finalized() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Finalized'\n  );\n};\n\nexports.default = Finalized;\n\n//# sourceURL=webpack:///./client/src/components/Finalized.jsx?");

/***/ }),

/***/ "./client/src/components/Itinerary.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/Itinerary.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Itinerary = function Itinerary() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Itinerary'\n  );\n};\n\nexports.default = Itinerary;\n\n//# sourceURL=webpack:///./client/src/components/Itinerary.jsx?");

/***/ }),

/***/ "./client/src/components/Login.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Login.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Login comp'\n  );\n};\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./client/src/components/Login.jsx?");

/***/ }),

/***/ "./client/src/components/Main.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Main.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Main = function Main() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'HI! WORLD!'\n  );\n};\n\nexports.default = Main;\n\n//# sourceURL=webpack:///./client/src/components/Main.jsx?");

/***/ }),

/***/ "./client/src/components/Photos.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Photos.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Photos = function (_Component) {\n  _inherits(Photos, _Component);\n\n  function Photos(props) {\n    _classCallCheck(this, Photos);\n\n    var _this = _possibleConstructorReturn(this, (Photos.__proto__ || Object.getPrototypeOf(Photos)).call(this, props));\n\n    _this.state = {\n      pictures: []\n    };\n    return _this;\n  }\n\n  _createClass(Photos, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      fetch('/photos/search', { method: 'POST' }).then(function (response) {\n\n        return response.json();\n      }).then(function (data) {\n        console.log('fetch data', data);\n        var picArray = data.photos.photo.map(function (pic) {\n          var srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';\n          var picTitle = pic.title;\n          return _react2.default.createElement(\n            'div',\n            { key: pic.id },\n            _react2.default.createElement(_semanticUiReact.Image, {\n              src: srcPath,\n              text: picTitle\n            }),\n            _react2.default.createElement(_semanticUiReact.Checkbox, { label: { children: 'select' } })\n          );\n        });\n        this.setState({ pictures: picArray });\n      }.bind(this));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          { className: 'ui big header' },\n          'Select 5 places you want to go! '\n        ),\n        _react2.default.createElement(\n          _semanticUiReact.Image.Group,\n          { size: 'medium', horizontal: true, image: true },\n          this.state.pictures\n        ),\n        _react2.default.createElement(\n          'button',\n          { className: 'ui blue button', onClick: this.props.sendSelectedPhotos },\n          'Submit'\n        )\n      );\n    }\n  }]);\n\n  return Photos;\n}(_react.Component);\n\nexports.default = Photos;\n\n//# sourceURL=webpack:///./client/src/components/Photos.jsx?");

/***/ }),

/***/ "./client/src/components/Review.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Review.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Review = function Review() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Review'\n  );\n};\n\nexports.default = Review;\n\n//# sourceURL=webpack:///./client/src/components/Review.jsx?");

/***/ }),

/***/ "./client/src/components/Search.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Search.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Search = function Search() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Search'\n  );\n};\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./client/src/components/Search.jsx?");

/***/ }),

/***/ "./client/src/components/Time.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Time.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Time = function Time() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Time'\n  );\n};\n\nexports.default = Time;\n\n//# sourceURL=webpack:///./client/src/components/Time.jsx?");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = __webpack_require__(/*! ./components/App */ \"./client/src/components/App.jsx\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDOM" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactRouterDOM;\n\n//# sourceURL=webpack:///external_%22ReactRouterDOM%22?");

/***/ }),

/***/ "semantic-ui-react":
/*!**********************************!*\
  !*** external "semanticUIReact" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = semanticUIReact;\n\n//# sourceURL=webpack:///external_%22semanticUIReact%22?");

/***/ })

/******/ });