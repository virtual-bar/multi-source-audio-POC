webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Master */ "./components/Master.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Brandon Whittle\\Desktop\\Virtual Bar\\multi-source-audio-POC\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var getAudio = function getAudio(source) {
  if (true) {
    var audio = new Audio(source);
    return audio;
  }
};

var Home = function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Hello Next.js!"), __jsx(_components_Master__WEBPACK_IMPORTED_MODULE_1__["default"], {
    audioElement: getAudio('/outfoxing.mp3'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_components_Master__WEBPACK_IMPORTED_MODULE_1__["default"], {
    audioElement: getAudio('/fadedTwo.mp3'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.283f6c7001cb15903e72.hot-update.js.map