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



var useAudio = function useAudio(_ref) {
  var initialGain = _ref.initialGain;

  if (true) {
    var AudioContext = window.AudioContext;

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new AudioContext()),
        audioCtx = _useState[0];

    var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(audioCtx.createGain()),
        gainNode = _useState2[0];

    gainNode.gain.value = initialGain;
    return {
      audioCtx: audioCtx,
      gainNode: gainNode
    };
  }
};

var AudioTrack = function AudioTrack(_ref2) {
  var audioElement = _ref2.audioElement;

  if (true) {
    var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        _playing = _useState3[0],
        setPlaying = _useState3[1];

    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
        _volume = _useState4[0],
        setVolume = _useState4[1];

    var _useAudio = useAudio({
      initialGain: 1
    }),
        audioCtx = _useAudio.audioCtx,
        gainNode = _useAudio.gainNode;

    var _togglePlaying = function _togglePlaying() {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      setPlaying(!_playing);
    };

    var _changeVolume = function _changeVolume(e) {
      var value = e.target.value;
      setVolume(value);
    };

    var getAudioElement = function getAudioElement() {
      return audioElement;
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      var audioElement = getAudioElement();
      var track = audioCtx.createMediaElementSource(audioElement);
      track.connect(gainNode).connect(audioCtx.destination);
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      var audioElement = getAudioElement();

      if (_playing && audioElement.paused) {
        audioElement.play();
      } else if (!_playing && !audioElement.paused) {
        audioElement.pause();
      }

      gainNode.gain.value = _volume;
    }, [_playing, _volume]);
    return _playing;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    "data-playing": playing,
    className: "control-play",
    role: "switch",
    onClick: togglePlaying,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, playing ? 'Playing' : 'Paused'), __jsx("input", {
    type: "range",
    id: "volume",
    className: "control-volume",
    min: "0",
    max: "2",
    value: volume,
    onChange: changeVolume,
    list: "gainVals",
    step: "0.01",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx("datalist", {
    id: "gainVals",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("option", {
    value: "1",
    label: "unity",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AudioTrack);

/***/ })

})
//# sourceMappingURL=index.js.2c46138c2dc2d83e6e44.hot-update.js.map