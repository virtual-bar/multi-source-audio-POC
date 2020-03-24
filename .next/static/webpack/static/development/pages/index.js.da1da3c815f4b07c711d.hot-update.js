webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/AudioTrack.tsx":
/*!***********************************!*\
  !*** ./components/AudioTrack.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/styles/index.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Brandon Whittle\\Desktop\\Virtual Bar\\multi-source-audio-POC\\components\\AudioTrack.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var audioTrack = function audioTrack(_ref) {
  var audioElement = _ref.audioElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      playing = _useState[0],
      setPlaying = _useState[1];

  var togglePlaying = function togglePlaying() {
    setPlaying(!playing);
    audioElement.paused ? audioElement.play() : audioElement.pause();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    "data-playing": playing,
    className: "control-play",
    role: "switch",
    onClick: togglePlaying,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, playing ? 'Playing' : 'Paused'));
};

/* harmony default export */ __webpack_exports__["default"] = (AudioTrack);

/***/ }),

/***/ "./components/Master.tsx":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AudioTrack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AudioTrack */ "./components/AudioTrack.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles */ "./components/styles/index.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Brandon Whittle\\Desktop\\Virtual Bar\\multi-source-audio-POC\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), _components_styles__WEBPACK_IMPORTED_MODULE_4__["flexCentered"]);

var getAudio = function getAudio(source) {
  if (true) {
    var audio = new Audio(source);
    return audio;
  }
};

var Home = function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Hello Next.js!"), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_AudioTrack__WEBPACK_IMPORTED_MODULE_2__["default"], {
    audioElement: getAudio('/outfoxing.mp3'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(_components_AudioTrack__WEBPACK_IMPORTED_MODULE_2__["default"], {
    audioElement: getAudio('/fadedTwo.mp3'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.da1da3c815f4b07c711d.hot-update.js.map