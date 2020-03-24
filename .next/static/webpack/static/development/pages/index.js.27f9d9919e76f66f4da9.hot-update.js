webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Master.tsx":
/*!*******************************!*\
  !*** ./components/Master.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/styles/index.ts");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Brandon Whittle\\Desktop\\Virtual Bar\\multi-source-audio-POC\\components\\Master.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 100vh;\n  width: 100%;\n  flex-direction: vertical;\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_3__["flexCentered"]);

var Master = function Master(_ref) {
  var audioElement = _ref.audioElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      playing = _useState[0],
      setPlaying = _useState[1];

  var togglePlaying = function togglePlaying() {
    setPlaying(!playing);
    audioElement.paused ? audioElement.play() : audioElement.pause();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    "data-playing": playing,
    className: "control-play",
    role: "switch",
    onClick: togglePlaying,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, playing ? 'Playing' : 'Paused')));
};

/* harmony default export */ __webpack_exports__["default"] = (Master);

/***/ })

})
//# sourceMappingURL=index.js.27f9d9919e76f66f4da9.hot-update.js.map