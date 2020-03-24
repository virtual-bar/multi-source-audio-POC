webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Master.tsx":
/*!*******************************!*\
  !*** ./components/Master.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/styles/index.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Brandon Whittle\\Desktop\\Virtual Bar\\multi-source-audio-POC\\components\\Master.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Master = function Master(_ref) {
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

/* harmony default export */ __webpack_exports__["default"] = (Master);

/***/ })

})
//# sourceMappingURL=index.js.1f8afabc859c8c4b20f7.hot-update.js.map