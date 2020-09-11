(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "https://yukon-literacy-coalition.github.io/ylc_website_v2/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MarginedContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SectionContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyText; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


var MarginedContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1odkvkp0"
})("margin:0 auto;max-width:1060px;padding:0 10px;display:grid;grid-template-columns:repeat(12,1fr);gap:20px;", function (p) {
  return p.className;
},  true ? "" : undefined);
var SectionContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1odkvkp1"
})( true ? {
  name: "mrshpo",
  styles: "padding:50px 0;"
} : undefined);
var BodyText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1odkvkp2"
})("grid-column-start:2;grid-column-end:12;", function (p) {
  return p.theme.fonts.body_text;
},  true ? "" : undefined);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return mqO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mqNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var facepaint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var facepaint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(facepaint__WEBPACK_IMPORTED_MODULE_2__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




/**
 * middle width: 1060
 * nav height: 64px
 */


var bps = ["400", "600", "800", "1060"]; // ${mq[1]} {
//   display: none;
// }
// import { mq } from "../../theme";
// ${mq[3]} {
//   font-size: 65px;
// }
// ${mq[2]} {
//   font-size: 50px;
// }
// ${mq[1]} {
//   font-size: 30px;
// }
// ${mq[0]} {
//   font-size: 20px;
// }

/**
 * NOTES
 * Upcoming.jsx uses a mq
 */

var mq = bps.map(function (bp) {
  return "@media (max-width: ".concat(bp, "px)");
});
var mqO = facepaint__WEBPACK_IMPORTED_MODULE_2___default()(["@media(max-width: ".concat(bps[3], "px)"), "@media(max-width: ".concat(bps[2], "px)"), "@media(max-width: ".concat(bps[1], "px)"), "@media(max-width: ".concat(bps[0], "px)")]);
var mqNew = function mqNew(bp) {
  return "@media (max-width: ".concat(bp, "px)");
};
var theme = {
  colors: {
    ylc_blue: "#2F3575",
    text: "#02111B",
    light_accent: "#EBF2FA",
    medium_accent: "#B4CDED",
    lighter_grey: "#FDFDFD",
    medium_grey: "#EFEFEF",
    faded_text: "#B3B7BA"
  },
  fonts: {
    big_header:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("font-family:Poppins;font-weight:bolder;", mqO({
      fontSize: ["75px", null, "60px", "40px", null]
    }),  true ? "" : undefined),
    medium_header:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("font-family:Poppins;font-weight:bold;", mqO({
      fontSize: ["36px", null, null, "25px", null]
    }),  true ? "" : undefined),
    small_header:  true ? {
      name: "1a1lgvv",
      styles: "font-size:24px;font-family:Poppins;font-weight:bold;"
    } : undefined,
    extra_small_header:  true ? {
      name: "78kk7b",
      styles: "font-size:20px;font-family:Poppins;font-weight:bold;"
    } : undefined,
    body_text:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("font-size:16px;font-family:Noto Sans;", mq[2], "{font-size:14px;}" + ( true ? "" : undefined)),
    body_text_bold:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("font-size:16px;font-family:Noto Sans;font-weight:bold;", mq[2], "{font-size:14px;}" + ( true ? "" : undefined)),
    small_body_text:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("font-size:12px;font-family:Noto Sans;", mq[2], "{font-size:10px;}" + ( true ? "" : undefined)),
    large_button_text:  true ? {
      name: "1h8234n",
      styles: "font-size:14px;font-family:Poppins;"
    } : undefined,
    small_button_text:  true ? {
      name: "1i5zjpi",
      styles: "font-size:12px;font-family:Poppins;"
    } : undefined
  },
  hover: {
    box:  true ? {
      name: "jk9kx8",
      styles: "box-shadow:0px 4px 4px lightgray;"
    } : undefined
  }
};

var _ref =  true ? {
  name: "1c5wnxy",
  styles: "*{box-sizing:border-box;}html{@font-face{font-family:Noto Sans;src:url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap\");}@font-face{font-family:Poppins;src:url(\"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap\");}}body{margin:0;a{text-decoration:none;color:inherit;&:hover:{color:\"#EFEFEF\";}}}"
} : undefined;

var Global = function Global() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
    styles: function styles(p) {
      return _ref;
    }
  });
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SmallSectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SectionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeaderText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkAndLightText; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilsJSX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





var SmallSectionTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "eicy6ci0"
})(function (p) {
  return p.theme.fonts.small_header;
}, " color:", function (p) {
  return p.theme.colors.text;
}, ";padding-bottom:50px;grid-column:span 13;" + ( true ? "" : undefined));
var SectionHeader = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eicy6ci1"
})(function (p) {
  return p.theme.fonts.medium_header;
}, ";height:", function (p) {
  return p === null || p === void 0 ? void 0 : p.height;
}, ";display:flex;justify-content:center;align-items:center;flex-direction:column;color:", function (p) {
  return p.theme.colors.text;
}, ";padding:30px 0;" + ( true ? "" : undefined));
var HeaderText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eicy6ci2"
})(function (p) {
  return p.theme.fonts.body_text;
}, ";margin:0 auto;padding:0 40px;text-align:center;grid-column:span 12;" + ( true ? "" : undefined));
var HeaderTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eicy6ci3"
})( true ? {
  name: "1is0qkf",
  styles: "padding:20px 0;"
} : undefined);

var DarkSpan = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "eicy6ci4"
})("color:", function (p) {
  return p.theme.colors.text;
}, ";" + ( true ? "" : undefined));

var LightSpan = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "eicy6ci5"
})("color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";" + ( true ? "" : undefined));

var DarkAndLightText = function DarkAndLightText(_ref) {
  var _splitText$;

  var text = _ref.text;
  var splitText = text ? Object(_utilsJSX__WEBPACK_IMPORTED_MODULE_3__[/* returnSplitText */ "a"])(text) : [];
  var darkText = "";
  var lightText = "";

  if (!!((_splitText$ = splitText[1]) === null || _splitText$ === void 0 ? void 0 : _splitText$.length)) {
    darkText = splitText[0];
    lightText = splitText[1];
  } else {
    lightText = splitText[0];
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(DarkSpan, null, darkText, " "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(LightSpan, null, lightText));
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SmallButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LargeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvertedLargeButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PageHeader; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _assets_tombstones_banner_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75);
/* harmony import */ var _assets_tombstones_banner_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_tombstones_banner_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_yukon_river_banner_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76);
/* harmony import */ var _assets_yukon_river_banner_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_yukon_river_banner_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_klondike_banner_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77);
/* harmony import */ var _assets_klondike_banner_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_klondike_banner_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_dempster_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78);
/* harmony import */ var _assets_dempster_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_dempster_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_dawson_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79);
/* harmony import */ var _assets_dawson_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_dawson_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_9__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












var SmallButtonStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button", {
  target: "e2kr7vu0"
})("transition:all 0.2s;background:", function (p) {
  return p.theme.colors.medium_accent;
}, ";border:none;width:70px;color:white;border-radius:2px;height:20px;cursor:pointer;", function (p) {
  return p.theme.fonts.small_button_text;
}, " &:hover{background:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";}" + ( true ? "" : undefined));

var SmallButton = function SmallButton(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SmallButtonStyled, {
    className: className
  }, children || "See More");
};

var LargeButtonStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("button", {
  target: "e2kr7vu1"
})("transition:all 0.2s;background:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";border:none;min-width:102px;color:white;border-radius:2px;height:29px;padding:0 10px;cursor:", function (p) {
  return p.disabled ? "normal" : "pointer";
}, ";", function (p) {
  return p.theme.fonts.large_button_text;
}, ";&:hover{background:", function (p) {
  return p.disabled ? "lightgrey" : p.theme.colors.text;
}, ";}background:", function (p) {
  return p.disabled && "lightgrey";
}, ";" + ( true ? "" : undefined));

var InvertedLargeButtonStyled = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(LargeButtonStyled, {
  target: "e2kr7vu2"
})("border:", function (p) {
  return p.theme.colors.ylc_blue;
}, " solid 1px;color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";background:white;&:hover{background:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";color:white;}" + ( true ? "" : undefined));

var LargeButton = function LargeButton(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      onClick = _ref3.onClick,
      disabled = _ref3.disabled;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(LargeButtonStyled, {
    onClick: onClick,
    className: className,
    disabled: disabled
  }, children || "Learn More");
};
var InvertedLargeButton = function InvertedLargeButton(_ref4) {
  var children = _ref4.children,
      className = _ref4.className;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(InvertedLargeButtonStyled, {
    className: className
  }, children || "Learn More");
};

var BigHeader = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "e2kr7vu3"
})(function (p) {
  return p.theme.fonts.big_header;
}, ";color:", function (p) {
  return p.theme.colors.text;
}, ";" + ( true ? "" : undefined));

var PageHeaderStyles =  true ? {
  name: "1g048k0",
  styles: "grid-column:span 12;align-self:center;"
} : undefined;

var PageHeaderContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e2kr7vu4"
})( true ? {
  name: "1v5fh3t",
  styles: "margin-top:64px;height:240px;"
} : undefined);

var PageHeaderBackground = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e2kr7vu5"
})("height:100%;background-image:linear-gradient( rgba(255,255,255,0.3),rgba(255,255,255,0.3),rgba(255,255,255,0.2) ),url(", function (p) {
  return p.bgImage;
}, ");background-size:cover;" + ( true ? "" : undefined));

var getRndInteger = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var _ref =  true ? {
  name: "10klw3m",
  styles: "height:100%;"
} : undefined;

var PageHeader = function PageHeader(_ref5) {
  var _ref5$text = _ref5.text,
      text = _ref5$text === void 0 ? "Title Needed" : _ref5$text,
      className = _ref5.className,
      bgImage = _ref5.bgImage;
  var imageArray = [_assets_tombstones_banner_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_yukon_river_banner_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_klondike_banner_jpg__WEBPACK_IMPORTED_MODULE_7___default.a, _assets_dempster_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_8___default.a, _assets_dawson_sky_banner_jpg__WEBPACK_IMPORTED_MODULE_9___default.a];
  var randomBgImage = imageArray[getRndInteger(1, imageArray.length + 1) - 1];
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(PageHeaderContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(PageHeaderBackground, {
    bgImage: bgImage || randomBgImage
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Layout__WEBPACK_IMPORTED_MODULE_3__[/* MarginedContainer */ "b"], {
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: PageHeaderStyles
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(BigHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Type__WEBPACK_IMPORTED_MODULE_4__[/* DarkAndLightText */ "a"], {
    text: text
  }))))));
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(40);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(93);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(95);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(44);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(45);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(96);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(41);

var _helpers = __webpack_require__(97);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(92)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _shared_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


 // import Moment from "react-moment";










var SectionHeader = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_shared_Type__WEBPACK_IMPORTED_MODULE_8__[/* SectionHeader */ "d"], {
  target: "eq4rs4u0"
})("padding:20px 10px;padding-bottom:0;", _theme__WEBPACK_IMPORTED_MODULE_9__[/* mq */ "b"][1], "{padding-top:0;text-align:center;}" + ( true ? "" : undefined));

var BodyText = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_shared_Layout__WEBPACK_IMPORTED_MODULE_5__[/* BodyText */ "a"], {
  target: "eq4rs4u1"
})( true ? "" : undefined);

var ButtonWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("a", {
  target: "eq4rs4u2"
})( true ? {
  name: "rx6nsn",
  styles: "grid-column:span 12;text-align:center;"
} : undefined);

var buttonMarginedStyles =  true ? {
  name: "7w6khc",
  styles: "padding-top:20px;"
} : undefined;

var SectionContainer = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_shared_Layout__WEBPACK_IMPORTED_MODULE_5__[/* SectionContainer */ "c"], {
  target: "eq4rs4u3"
})("padding-top:", function (p) {
  return (p === null || p === void 0 ? void 0 : p.subTitle) ? "0px" : "auto";
}, ";" + ( true ? "" : undefined));

var Author = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eq4rs4u4"
})("text-align:center;", function (p) {
  return p.theme.fonts.body_text_bold;
}, " padding-top:5px;" + ( true ? "" : undefined));

var Project = function Project(_ref) {
  var date = _ref.date,
      title = _ref.title,
      subTitle = _ref.subTitle,
      body = _ref.body,
      images = _ref.images,
      children = _ref.children,
      link = _ref.link,
      linkText = _ref.linkText,
      author = _ref.author;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_6__[/* PageHeader */ "c"], {
    text: title || "Title Needed"
  }), subTitle && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_8__[/* HeaderTitle */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_8__[/* DarkAndLightText */ "a"], {
    text: subTitle
  }), author && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Author, null, "by: " + author))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(SectionContainer, {
    subTitle: subTitle
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_5__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(BodyText, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    source: body || "Body text needed",
    escapeHtml: false
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_5__[/* MarginedContainer */ "b"], {
    css: buttonMarginedStyles
  }, link && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(ButtonWrapper, {
    href: "".concat(link)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_6__[/* LargeButton */ "b"], null, linkText || "See More"))), children, !!(images === null || images === void 0 ? void 0 : images.length) && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Carousel__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    images: images
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Project)); // const EventTitle = styled.div`
//   grid-column: span 12;
//   ${(p) => p.theme.fonts.medium_header}
//   text-align: center;
// `;
// <Moment format="MMMM Do, YYYY">{date}</Moment>

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("netlify-cms-app");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return returnSplitText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useWindowDimensions; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var truncate = function truncate(str, limit) {
  return str.split(" ").splice(0, limit).join(" ");
};
var returnSplitText = function returnSplitText(str) {
  var first = str.split(" ").splice(0, 1).join(" ");
  var rest = str.split(" ").splice(1).join(" ");
  return [first, rest];
};

var getWindowDimensions = function getWindowDimensions() {
  if (typeof window !== "undefined") {
    var _window = window,
        width = _window.innerWidth,
        height = _window.innerHeight;
    return {
      width: width,
      height: height
    };
  }
};

var useWindowDimensions = function useWindowDimensions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(typeof window !== "undefined" ? getWindowDimensions() : {
    innerWidth: 100,
    innerHeight: 100
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      windowDimensions = _useState2[0],
      setWindowDimensions = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof window !== "undefined") {
      var handleResize = function handleResize() {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return function () {
        return window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return windowDimensions;
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








var ProjectContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1yyw1w00"
})("transition:all 0.2s;grid-column:span 4;background:", function (p) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["lighten"])("0.17", p.theme.colors.medium_accent);
}, ";border-radius:3px;box-shadow:0px 2px 2px lightgray;&:hover{", function (p) {
  return p.theme.hover.box;
}, ";}", _theme__WEBPACK_IMPORTED_MODULE_5__[/* mq */ "b"][3], "{grid-column:span 6;}", _theme__WEBPACK_IMPORTED_MODULE_5__[/* mq */ "b"][2], "{grid-column:span 12;}" + ( true ? "" : undefined)); // IMAGE


var ImgContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1yyw1w01"
})("background:", function (p) {
  return p.isImage ? "transparent" : "grey";
}, ";height:286px;border-radius:3px 3px 0 0;display:flex;justify-content:center;align-items:center;overflow:hidden;" + ( true ? "" : undefined));

var ProjImg = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("img", {
  target: "e1yyw1w02"
})( true ? {
  name: "10rijcc",
  styles: "align-self:flex-start;flex-shrink:0;min-width:auto;min-height:100%;max-height:100%;border-radius:3px 3px 0 0;"
} : undefined);

var BodyContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1yyw1w03"
})( true ? {
  name: "ci5qmu",
  styles: "min-height:250px;display:flex;flex-direction:column;justify-content:space-between;"
} : undefined);

var ProjTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1yyw1w04"
})(function (p) {
  return p.theme.fonts.extra_small_header;
}, ";padding:20px 0;text-align:center;" + ( true ? "" : undefined));

var ProjBody = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1yyw1w05"
})("padding:0 10px 10px;", function (p) {
  return p.theme.fonts.body_text;
}, " font-size:14px;" + ( true ? "" : undefined));

var ButtonContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1yyw1w06"
})( true ? {
  name: "on7k3l",
  styles: "display:flex;justify-content:center;padding:10px 10px 20px;"
} : undefined);

var ProjectHighlight = function ProjectHighlight(_ref) {
  var project = _ref.project;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ProjectContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ImgContainer, {
    isImage: project === null || project === void 0 ? void 0 : project.image
  }, (project === null || project === void 0 ? void 0 : project.image) && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ProjImg, {
    src: project === null || project === void 0 ? void 0 : project.image
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(BodyContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ProjTitle, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Type__WEBPACK_IMPORTED_MODULE_4__[/* DarkAndLightText */ "a"], {
    text: (project === null || project === void 0 ? void 0 : project.title) || "Project Title"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ProjBody, null, (project === null || project === void 0 ? void 0 : project.body) || "Body text")), (project === null || project === void 0 ? void 0 : project.link) ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ButtonContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    href: project === null || project === void 0 ? void 0 : project.link,
    target: "_blank",
    rel: "noreferrer"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_2__[/* LargeButton */ "b"], null, (project === null || project === void 0 ? void 0 : project.btnText) || (project === null || project === void 0 ? void 0 : project.linkText) || "Learn More"))) : (project === null || project === void 0 ? void 0 : project.file) ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(ButtonContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    href: project === null || project === void 0 ? void 0 : project.file,
    download: true
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_2__[/* LargeButton */ "b"], null, (project === null || project === void 0 ? void 0 : project.btnText) || (project === null || project === void 0 ? void 0 : project.linkText) || "Download Here"))) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", null)));
};

/* harmony default export */ __webpack_exports__["a"] = (ProjectHighlight);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/dark_flake.5fd7ece1.png";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return usePosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagination; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





var usePosts = function usePosts(_ref) {
  var allItems = _ref.allItems;
  var postsPerPage = 12;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      currentItems = _useState2[0],
      setCurrentPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      itemsStart = _useState4[0],
      setPostsStart = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(postsPerPage),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      itemsEnd = _useState6[0],
      setPostsEnd = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setCurrentPosts(allItems.slice(itemsStart, itemsEnd));
  }, [allItems, itemsStart, itemsEnd]);

  var getDeeperItems = function getDeeperItems() {
    setCurrentPosts(allItems.slice(itemsEnd, itemsEnd + postsPerPage));
    setPostsStart(itemsEnd);
    setPostsEnd(itemsEnd + postsPerPage);
  };

  var getShallowerItems = function getShallowerItems() {
    setCurrentPosts(allItems.slice(itemsStart - postsPerPage, itemsStart));
    setPostsStart(itemsStart - postsPerPage);
    setPostsEnd(itemsStart);
  };

  return [getDeeperItems, getShallowerItems, itemsStart, itemsEnd, currentItems];
};

var LargeButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(_Features__WEBPACK_IMPORTED_MODULE_4__[/* LargeButton */ "b"], {
  target: "ecx0hs00"
})( true ? {
  name: "a5qkfk",
  styles: "margin:0 10px;"
} : undefined);

var PaginationContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "ecx0hs01"
})( true ? {
  name: "lawb5i",
  styles: "grid-column:span 12;text-align:center;padding:15px 0;"
} : undefined);

var Pagination = function Pagination(_ref2) {
  var _ref2$itemsStart = _ref2.itemsStart,
      itemsStart = _ref2$itemsStart === void 0 ? 0 : _ref2$itemsStart,
      _ref2$itemsEnd = _ref2.itemsEnd,
      itemsEnd = _ref2$itemsEnd === void 0 ? 0 : _ref2$itemsEnd,
      _ref2$allItems = _ref2.allItems,
      allItems = _ref2$allItems === void 0 ? [] : _ref2$allItems,
      _ref2$getShallowerIte = _ref2.getShallowerItems,
      getShallowerItems = _ref2$getShallowerIte === void 0 ? function () {} : _ref2$getShallowerIte,
      _ref2$getDeeperItems = _ref2.getDeeperItems,
      getDeeperItems = _ref2$getDeeperItems === void 0 ? function () {} : _ref2$getDeeperItems,
      _ref2$firstButton = _ref2.firstButton,
      firstButton = _ref2$firstButton === void 0 ? "Newer" : _ref2$firstButton,
      _ref2$secondButton = _ref2.secondButton,
      secondButton = _ref2$secondButton === void 0 ? "Older" : _ref2$secondButton;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(PaginationContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(LargeButton, {
    disabled: itemsStart <= 0,
    onClick: function onClick() {
      return getShallowerItems();
    }
  }, "< ".concat(firstButton)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(LargeButton, {
    disabled: itemsEnd >= allItems.length,
    onClick: function onClick() {
      return getDeeperItems();
    }
  }, "".concat(secondButton, " >")));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(41);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(94)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);






var Post = function Post(_ref) {
  var post = _ref.post;
  var postDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(post === null || post === void 0 ? void 0 : post.date).format("MMMM Do, YYYY");
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, post, {
    title: postDate
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Post));

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);






var Event = function Event(_ref) {
  var event = _ref.event;
  var eDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(event === null || event === void 0 ? void 0 : event.date).format("MMMM Do, YYYY");
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, event, {
    title: eDate
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Event));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutreachProject", function() { return OutreachProject; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_9__);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







 // LARGE STYLES



var OutreachContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg0"
})( true ? {
  name: "1ef16g2",
  styles: "padding-top:64px;padding-bottom:40px;"
} : undefined);

var ProjectsContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg1"
})("grid-column:span 12;margin-left:150px;padding:30px 20px 0;", _theme__WEBPACK_IMPORTED_MODULE_8__[/* mq */ "b"][2], "{margin-left:0;}" + ( true ? "" : undefined)); // SIDE MENU


var SideMenuStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg2"
})("transition:all 0.2s;width:150px;display:flex;flex-direction:column;position:fixed;background:white;height:100%;padding-left:10px;grid-column:span 2;border-radius:0 3px 3px 0;z-index:100;", _theme__WEBPACK_IMPORTED_MODULE_8__[/* mq */ "b"][2], "{left:", function (p) {
  return p.sideMenuOpen ? 0 : "-150px";
}, ";border-right:", function (p) {
  return p.theme.colors.ylc_blue;
}, " 1px solid;border-top:", function (p) {
  return p.theme.colors.ylc_blue;
}, " 1px solid;}" + ( true ? "" : undefined));

var SideMenuButton = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("span", {
  target: "eamikjg3"
})("position:absolute;top:10px;right:-99px;background:white;width:100px;height:35px;display:none;justify-content:center;align-items:center;text-align:center;border-radius:0 15px 15px 0;border:", function (p) {
  return p.theme.colors.ylc_blue;
}, " 1px solid;border-left:white 1px solid;color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";", _theme__WEBPACK_IMPORTED_MODULE_8__[/* mq */ "b"][2], "{display:flex;}" + ( true ? "" : undefined));

var SideTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg4"
})(function (p) {
  return p.theme.fonts.small_header;
}, " padding:30px 0;" + ( true ? "" : undefined));

var SideMenuItemStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("span", {
  target: "eamikjg5"
})(function (p) {
  return p.theme.fonts.body_text;
}, " padding:5px 0;" + ( true ? "" : undefined));

var SideMenuItem = function SideMenuItem(_ref) {
  var link = _ref.link,
      setSideMenuOpen = _ref.setSideMenuOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideMenuItemStyled, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    activeClass: "active",
    to: link,
    spy: true,
    smooth: true,
    offset: -64,
    duration: 500,
    onClick: function onClick() {
      return setSideMenuOpen(false);
    }
  }, link));
};

var SideMenu = function SideMenu(_ref2) {
  var projects = _ref2.projects,
      sideMenuOpen = _ref2.sideMenuOpen,
      setSideMenuOpen = _ref2.setSideMenuOpen;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideMenuStyled, {
    sideMenuOpen: sideMenuOpen
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideMenuButton, {
    onClick: function onClick() {
      return setSideMenuOpen(!sideMenuOpen);
    }
  }, sideMenuOpen ? "Close Menu" : "All projects"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideTitle, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_7__[/* DarkAndLightText */ "a"], {
    text: "Outreach Projects"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideMenuItem, {
    setSideMenuOpen: setSideMenuOpen,
    link: "About"
  }), projects.map(function (proj, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideMenuItem, {
      setSideMenuOpen: setSideMenuOpen,
      link: proj.title,
      key: proj.title + i
    });
  }));
}; // OUTREACH PROJECT


var ProjectContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg6"
})("display:flex;flex-direction:column;padding:50px 0;background:", function (p) {
  return p.isBlue ? p.theme.colors.light_accent : "white";
}, ";" + ( true ? "" : undefined));

var AboutProjectContainer = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(ProjectContainer, {
  target: "eamikjg7"
})("padding-top:0;background:", function (p) {
  return p.theme.colors.light_accent;
}, ";" + ( true ? "" : undefined));

var ProjectTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg8"
})(function (p) {
  return p.theme.fonts.medium_header;
}, " padding:20px 0;text-align:center;" + ( true ? "" : undefined));

var ProjectBody = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg9"
})(function (p) {
  return p.theme.fonts.body_text;
}, " padding:0 30px 20px;" + ( true ? "" : undefined));

var ProjectContentWrapper = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eamikjg10"
})( true ? {
  name: "f9qfdi",
  styles: "grid-column:span 12;"
} : undefined);

var OutreachProject = function OutreachProject(_ref3) {
  var _project$images;

  var project = _ref3.project,
      _ref3$index = _ref3.index,
      index = _ref3$index === void 0 ? 1 : _ref3$index;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    id: project === null || project === void 0 ? void 0 : project.title
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ProjectContainer, {
    isBlue: index % 2 !== 0
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ProjectTitle, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_7__[/* DarkAndLightText */ "a"], {
    text: project === null || project === void 0 ? void 0 : project.title
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ProjectBody, null, project === null || project === void 0 ? void 0 : project.body), !!(project === null || project === void 0 ? void 0 : (_project$images = project.images) === null || _project$images === void 0 ? void 0 : _project$images.length) && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Carousel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    images: project === null || project === void 0 ? void 0 : project.images
  })));
};

var Projects = function Projects(_ref4) {
  var projects = _ref4.projects;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ProjectsContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    id: "About"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(AboutProjectContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ProjectContentWrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ProjectTitle, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_7__[/* DarkAndLightText */ "a"], {
    text: "What are Outreach Projects?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ProjectBody, null, aboutText))), projects.map(function (proj, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(OutreachProject, {
      project: proj,
      key: proj.title + i,
      index: i
    });
  }));
};

var aboutText = "Our Community Outreach program takes family literacy out of the Family Literacy Centre and into the community. Through this program, YLC staff bring fun, inclusive, and free literacy-based activities to children and families across the Yukon. Whether we’re working in partnership with territorial governments and community organizations, or on independent projects, you’ll find us at culture camps, local cultural events, holiday celebrations, and much more. Supporting all communities in the Yukon is important to us. Our outreach program connects us to all Yukoners, and to the rich tapestry of projects taking place across the territory. Some of our current outreach work includes professional development workshops for childcare workers, providing activities for children and families at large-scale cultural events such as Haa Kusteeyí, The Moosehide Gathering, Carcross Commons openings, and the Adäka Festival and attending culture camps in partnership with local schools and First Nations.";

var Outreach = function Outreach(_ref5) {
  var outreachProjects = _ref5.outreachProjects;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      sideMenuOpen = _useState2[0],
      setSideMenuOpen = _useState2[1];

  var projects = outreachProjects || [];
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(OutreachContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_6__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideMenu, {
    projects: projects,
    sideMenuOpen: sideMenuOpen,
    setSideMenuOpen: setSideMenuOpen
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(Projects, {
    aboutText: aboutText,
    projects: projects
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_3__["withRouteData"])(Outreach));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Initiative", function() { return Initiative; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);




var Initiative = function Initiative(_ref) {
  var initiative = _ref.initiative;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], initiative);
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(Initiative));

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMember", function() { return StaffMember; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







 // staff styling



var StaffContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr700"
})("background:", function (p) {
  return p.odd ? p.theme.colors.light_accent : "white";
}, ";min-height:350px;padding:20px 0;" + ( true ? "" : undefined));

var StaffMarginedContainer = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], {
  target: "euscr701"
})("height:100%;", _theme__WEBPACK_IMPORTED_MODULE_7__[/* mq */ "b"][2], "{direction:rtl;}" + ( true ? "" : undefined));

var ImgSection = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr702"
})("grid-column:span 4;display:flex;justify-content:center;align-items:center;overflow:hidden;min-height:250px;", _theme__WEBPACK_IMPORTED_MODULE_7__[/* mq */ "b"][2], "{grid-column:span 12;}" + ( true ? "" : undefined));

var ImgContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr703"
})( true ? {
  name: "la08qj",
  styles: "height:250px;width:250px;display:flex;justify-content:center;align-items:center;overflow:hidden;img{flex-shrink:0;min-width:100%;min-height:100%;}background:lightgrey;"
} : undefined);

var TextContent = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr704"
})("grid-column:span 8;padding-right:20px;", _theme__WEBPACK_IMPORTED_MODULE_7__[/* mq */ "b"][2], "{grid-column:span 12;text-align:left;}" + ( true ? "" : undefined));

var NameAndRole = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr705"
})("display:flex;justify-content:space-between;", function (p) {
  return p.theme.fonts.extra_small_header;
}, " span:last-child{color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";}", _theme__WEBPACK_IMPORTED_MODULE_7__[/* mq */ "b"][2], "{flex-direction:column;}" + ( true ? "" : undefined));

var Bio = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr706"
})("padding:10px 0;", function (p) {
  return p.theme.fonts.body_text;
},  true ? "" : undefined); // BOARD STYLES


var MemberContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr707"
})( true ? "" : undefined);

var MemberText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "euscr708"
})("padding:20px 0;grid-column-start:2;grid-column-end:12;display:flex;span{width:33%;}", function (p) {
  return p.theme.fonts.extra_small_header;
}, " ", _theme__WEBPACK_IMPORTED_MODULE_7__[/* mq */ "b"][2], "{grid-column-start:1;grid-column-end:13;flex-direction:column;align-items:center;}", Object(_theme__WEBPACK_IMPORTED_MODULE_7__[/* mqO */ "d"])({
  fontSize: [null, null, null, "16px"]
}),  true ? "" : undefined);

var blueStyle = function blueStyle(theme) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("color:", theme.colors.ylc_blue, ";" + ( true ? "" : undefined))
  );
};

var SectionContainer = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], {
  target: "euscr709"
})( true ? {
  name: "1dacand",
  styles: "padding-top:0;"
} : undefined);

var StaffMember = function StaffMember(_ref) {
  var staff = _ref.staff,
      _ref$i = _ref.i,
      i = _ref$i === void 0 ? 1 : _ref$i;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(StaffContainer, {
    odd: i % 2 === 0
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(StaffMarginedContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ImgSection, {
    image: staff.image
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ImgContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
    src: staff.image,
    alt: ""
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(TextContent, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(NameAndRole, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* DarkAndLightText */ "a"], {
    text: staff === null || staff === void 0 ? void 0 : staff.name
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", null, staff === null || staff === void 0 ? void 0 : staff.role)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Bio, null, staff.bio))));
};

var Team = function Team(_ref2) {
  var staff = _ref2.staff,
      board = _ref2.board;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_5__[/* PageHeader */ "c"], {
    text: "Our Team"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* SectionHeader */ "d"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* HeaderTitle */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* DarkAndLightText */ "a"], {
    text: "Our Staff"
  }))), !!staff.length && staff.map(function (staff, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(StaffMember, {
      staff: staff,
      i: i,
      key: staff.name + i
    });
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(SectionContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* SectionHeader */ "d"], {
    height: "200px"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* HeaderTitle */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* DarkAndLightText */ "a"], {
    text: "Our Board"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* HeaderText */ "b"], null, "The Yukon Literacy Coalition board is representative of 8 Yukon regions with representation from the Yukon French community and holds a designated seat for a Yukon First Nations Elder."))), !!board.length && board.map(function (member, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(MemberContainer, {
      key: member.name + i
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(MemberText, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", null, member === null || member === void 0 ? void 0 : member.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
      css: blueStyle
    }, member === null || member === void 0 ? void 0 : member.role), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", null, member === null || member === void 0 ? void 0 : member.location))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Team));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLC", function() { return FLC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(109);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);






var FLC = function FLC(_ref) {
  var flc = _ref.flc;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    body: flc === null || flc === void 0 ? void 0 : flc.body,
    title: flc === null || flc === void 0 ? void 0 : flc.title,
    subTitle: flc === null || flc === void 0 ? void 0 : flc.subTitle,
    link: flc === null || flc === void 0 ? void 0 : flc.link,
    linkText: flc === null || flc === void 0 ? void 0 : flc.linkText,
    images: flc === null || flc === void 0 ? void 0 : flc.images
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(FLC));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imagine", function() { return Imagine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);

 // import styled from "@emotion/styled";
// import { css } from "@emotion/core";



var Imagine = function Imagine(_ref) {
  var imaginationLibrary = _ref.imaginationLibrary;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    body: imaginationLibrary === null || imaginationLibrary === void 0 ? void 0 : imaginationLibrary.body,
    title: imaginationLibrary === null || imaginationLibrary === void 0 ? void 0 : imaginationLibrary.title,
    subTitle: imaginationLibrary === null || imaginationLibrary === void 0 ? void 0 : imaginationLibrary.subTitle,
    link: imaginationLibrary === null || imaginationLibrary === void 0 ? void 0 : imaginationLibrary.link,
    linkText: imaginationLibrary === null || imaginationLibrary === void 0 ? void 0 : imaginationLibrary.linkText,
    images: imaginationLibrary === null || imaginationLibrary === void 0 ? void 0 : imaginationLibrary.images
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(Imagine));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCommunity", function() { return AboutCommunity; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);

 // import styled from "@emotion/styled";



var AboutCommunity = function AboutCommunity(_ref) {
  var aboutCommunity = _ref.aboutCommunity;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    body: aboutCommunity === null || aboutCommunity === void 0 ? void 0 : aboutCommunity.body,
    title: aboutCommunity === null || aboutCommunity === void 0 ? void 0 : aboutCommunity.title,
    subTitle: aboutCommunity === null || aboutCommunity === void 0 ? void 0 : aboutCommunity.subTitle,
    link: aboutCommunity === null || aboutCommunity === void 0 ? void 0 : aboutCommunity.link,
    linkText: aboutCommunity === null || aboutCommunity === void 0 ? void 0 : aboutCommunity.linkText,
    images: aboutCommunity === null || aboutCommunity === void 0 ? void 0 : aboutCommunity.images
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(AboutCommunity));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinLit", function() { return FinLit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);







var FinLit = function FinLit(_ref) {
  var onlineTools = _ref.onlineTools,
      financialLiteracy = _ref.financialLiteracy;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    body: financialLiteracy === null || financialLiteracy === void 0 ? void 0 : financialLiteracy.body,
    title: financialLiteracy === null || financialLiteracy === void 0 ? void 0 : financialLiteracy.title,
    subTitle: financialLiteracy === null || financialLiteracy === void 0 ? void 0 : financialLiteracy.subTitle,
    link: financialLiteracy === null || financialLiteracy === void 0 ? void 0 : financialLiteracy.link,
    linkText: financialLiteracy === null || financialLiteracy === void 0 ? void 0 : financialLiteracy.linkText,
    images: financialLiteracy === null || financialLiteracy === void 0 ? void 0 : financialLiteracy.images
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_3__[/* SectionHeader */ "d"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_3__[/* HeaderTitle */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_3__[/* DarkAndLightText */ "a"], {
    text: "Online Tools"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__[/* MarginedContainer */ "b"], null, !!(onlineTools === null || onlineTools === void 0 ? void 0 : onlineTools.length) && onlineTools.map(function (tool, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      project: tool,
      key: tool.title + i,
      title: true
    });
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(FinLit));

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportersLogos", function() { return SupportersLogos; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










var Logo = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1cdag4k0"
})("height:200px;display:flex;justify-content:center;align-items:center;overflow:hidden;img{flex-shrink:0;max-width:100%;max-height:100%;}", Object(_theme__WEBPACK_IMPORTED_MODULE_7__[/* mqO */ "d"])({
  gridColumn: ["span 3", "span 4", null, "span 6", "span 12"]
}),  true ? "" : undefined); // test


var Logos = function Logos(_ref) {
  var _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images;
  return images.map(function (image, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Logo, {
      key: image + i
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
      src: image.image,
      alt: ""
    }));
  });
};

var SectionStyles =  true ? {
  name: "1dacand",
  styles: "padding-top:0;"
} : undefined;
var SupportersLogos = function SupportersLogos(_ref2) {
  var supObj = _ref2.supObj;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* SectionHeader */ "d"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* HeaderTitle */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_6__[/* DarkAndLightText */ "a"], {
    text: "Our " + (supObj === null || supObj === void 0 ? void 0 : supObj.title)
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Logos, {
    images: supObj === null || supObj === void 0 ? void 0 : supObj.images
  })));
};

var Supporters = function Supporters(_ref3) {
  var supporters = _ref3.supporters;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_5__[/* PageHeader */ "c"], {
    text: "Our Supporters"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], {
    css: SectionStyles
  }, !!(supporters === null || supporters === void 0 ? void 0 : supporters.length) && supporters.map(function (supObj, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(SupportersLogos, {
      supObj: supObj,
      key: supObj.title + i
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Supporters));

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







var Title = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e13zik1h0"
})("grid-column:span 13;text-align:center;", function (p) {
  return p.theme.fonts.small_header;
},  true ? "" : undefined);

var Body = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e13zik1h1"
})("grid-column:span 13;", function (p) {
  return p.theme.fonts.body_text;
}, " text-align:center;" + ( true ? "" : undefined));

var ButtonContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e13zik1h2"
})( true ? {
  name: "jom7mi",
  styles: "grid-column:span 13;text-align:center;"
} : undefined);

var sectionStyles = function sectionStyles(theme) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"])("background:", theme.colors.medium_grey, ";" + ( true ? "" : undefined))
  );
};

var Announcement = function Announcement(_ref) {
  var announcement = _ref.announcement;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__[/* SectionContainer */ "c"], {
    css: sectionStyles
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Title, null, announcement === null || announcement === void 0 ? void 0 : announcement.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Body, null, announcement === null || announcement === void 0 ? void 0 : announcement.body), (announcement === null || announcement === void 0 ? void 0 : announcement.link) && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(ButtonContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {
    href: announcement.link,
    target: "_blank",
    rel: "noreferrer"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_2__[/* LargeButton */ "b"], null, "Learn More")))));
};

/* harmony default export */ __webpack_exports__["a"] = (Announcement);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListing; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);







var EventItem = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
  target: "eq20zog0"
})("transition:all 0.5s;border:1px solid transparent;border-right:1px solid ", function (p) {
  return p.border ? "transparent" : p.theme.colors.faded_text;
}, ";height:200px;background:white;cursor:pointer;padding-left:10px;grid-column:span 3;border-radius:2px;", _theme__WEBPACK_IMPORTED_MODULE_4__[/* mq */ "b"][3], "{grid-column:span 4;}", _theme__WEBPACK_IMPORTED_MODULE_4__[/* mq */ "b"][2], "{grid-column:span 6;border-bottom:1px solid ", function (p) {
  return p.border ? "transparent" : p.theme.colors.faded_text;
}, ";border-right:none;}", _theme__WEBPACK_IMPORTED_MODULE_4__[/* mq */ "b"][1], "{grid-column:span 12;}" + ( true ? "" : undefined));

var DateText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eq20zog1"
})(function (p) {
  return p.theme.fonts.extra_small_header;
}, ";color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";padding:10px 0;" + ( true ? "" : undefined));

var EventText = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(DateText, {
  target: "eq20zog2"
})("color:", function (p) {
  return p.theme.colors.text;
}, ";" + ( true ? "" : undefined));

var EventListing = function EventListing(_ref) {
  var event = _ref.event,
      className = _ref.className,
      border = _ref.border;
  var date = event.date,
      subTitle = event.subTitle,
      slug = event.slug;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(EventItem, {
    to: "/events/event/".concat(slug),
    className: className,
    border: border ? "true" : undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(DateText, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("DD MMMM YYYY")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, moment__WEBPACK_IMPORTED_MODULE_2___default()(date).format("h:MM a"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(EventText, null, subTitle)));
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListing; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
/* harmony import */ var remove_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remove_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Features__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilsJSX__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












var ImgContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "epqgvzm0"
})("width:100%;height:170px;background-image:url(", function (p) {
  return p.thumbnail;
}, ");background-color:", function (p) {
  return p.theme.colors.faded_text;
}, ";background-size:cover;background-position:bottom;border-radius:2px 2px 0 0;" + ( true ? "" : undefined));

var PostText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "epqgvzm1"
})(function (p) {
  return p.theme.fonts.body_text_bold;
}, ";color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";position:absolute;top:-25px;" + ( true ? "" : undefined));

var Title = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "epqgvzm2"
})(function (p) {
  return p.theme.fonts.body_text_bold;
}, ";position:relative;color:", function (p) {
  return p.theme.colors.text;
}, ";padding:20px 0;" + ( true ? "" : undefined));

var PostBodyContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "epqgvzm3"
})( true ? {
  name: "py9avq",
  styles: "text-align:center;padding:0 5px;"
} : undefined);

var PostBody = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "epqgvzm4"
})(function (p) {
  return p.theme.fonts.small_body_text;
}, " padding:0 10px 10px;" + ( true ? "" : undefined));

var Post = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "epqgvzm5"
})("transition:all 0.4s;height:350px;margin-top:25px;display:flex;flex-direction:column;justify-content:space-between;background:white;border-radius:2px;&:hover{", function (p) {
  return p.theme.hover.box;
}, " background:", function (p) {
  return Object(polished__WEBPACK_IMPORTED_MODULE_7__["lighten"])("0.17", p.theme.colors.medium_accent);
}, ";}" + ( true ? "" : undefined));

var SmallButContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "epqgvzm6"
})( true ? {
  name: "mij7fp",
  styles: "text-align:center;padding-bottom:20px;"
} : undefined);

var Link = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_reach_router__WEBPACK_IMPORTED_MODULE_4__["Link"], {
  target: "epqgvzm7"
})("grid-column:span 3;", _theme__WEBPACK_IMPORTED_MODULE_9__[/* mq */ "b"][3], "{grid-column:span 4;}", _theme__WEBPACK_IMPORTED_MODULE_9__[/* mq */ "b"][2], "{grid-column:span 6;}", _theme__WEBPACK_IMPORTED_MODULE_9__[/* mq */ "b"][1], "{grid-column:span 12;}" + ( true ? "" : undefined));

var _ref =  true ? {
  name: "79elbk",
  styles: "position:relative;"
} : undefined;

var PostListing = function PostListing(_ref2) {
  var post = _ref2.post,
      className = _ref2.className;
  var date = post.date,
      subTitle = post.subTitle,
      slug = post.slug,
      thumbnail = post.thumbnail,
      body = post.body;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Link, {
    className: className,
    to: "/news/post/".concat(slug)
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Post, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(PostText, null, moment__WEBPACK_IMPORTED_MODULE_3___default()(date).format("DD MMMM YYYY")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(ImgContainer, {
    thumbnail: thumbnail
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(PostBodyContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Title, null, subTitle), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(PostBody, null, Object(_utilsJSX__WEBPACK_IMPORTED_MODULE_8__[/* truncate */ "b"])(remove_markdown__WEBPACK_IMPORTED_MODULE_5___default()(body), 22), "..."))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(SmallButContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Features__WEBPACK_IMPORTED_MODULE_6__[/* SmallButton */ "d"], null, "Read"))));
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(20);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(12);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@emotion/styled-base"
var styled_base_ = __webpack_require__(1);
var styled_base_default = /*#__PURE__*/__webpack_require__.n(styled_base_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(3);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-elastic-carousel"
var external_react_elastic_carousel_ = __webpack_require__(80);
var external_react_elastic_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_elastic_carousel_);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Layout.jsx
var Layout = __webpack_require__(2);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Modal/index.jsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




var ModalLayerContainer = styled_base_default()("div", {
  target: "eykxdid0"
})("visibility:", function (p) {
  return p.modalVisible ? "visible" : "hidden";
}, "};height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:100;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;" + ( true ? "" : undefined));

var ModalOverlay = styled_base_default()("div", {
  target: "eykxdid1"
})( true ? {
  name: "o0mpqs",
  styles: "position:absolute;background:rgba(0,0,0,0.5);height:100vh;width:100vw;z-index:-1;"
} : undefined);

var Modal_ModalLayer = function ModalLayer(_ref) {
  var children = _ref.children,
      modalVisible = _ref.modalVisible,
      setModalVisible = _ref.setModalVisible;
  return Object(core_["jsx"])(ModalLayerContainer, {
    modalVisible: !!modalVisible
  }, children, Object(core_["jsx"])(ModalOverlay, {
    onClick: function onClick() {
      return setModalVisible(!modalVisible);
    }
  }));
};

var ContentContainer = styled_base_default()("div", {
  target: "eykxdid2"
})( true ? {
  name: "7fmx68",
  styles: "max-width:calc(100% - 100px);max-height:calc(100% - 100px);background:white;padding:20px;img{max-width:100%;width:auto;max-height:70vh;height:auto;display:block;}"
} : undefined);

var Modal_ModalContent = function ModalContent(props) {
  return Object(core_["jsx"])(ContentContainer, null, props.children);
};
// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/utilsJSX.js
var utilsJSX = __webpack_require__(17);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Carousel/index.jsx




function Carousel_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


// import { css } from "@emotion/core";






var CarouselContainer = styled_base_default()("div", {
  target: "e1bluvoa0"
})( true ? {
  name: "f9qfdi",
  styles: "grid-column:span 12;"
} : undefined);

var ImgWrapper = styled_base_default()("div", {
  target: "e1bluvoa1"
})( true ? {
  name: "zsdrsw",
  styles: "height:200px;display:flex;justify-content:center;align-items:center;overflow:hidden;"
} : undefined);

var Image = styled_base_default()("img", {
  target: "e1bluvoa2"
})( true ? {
  name: "k9osvm",
  styles: "align-self:flex-start;flex-shrink:0;min-width:100%;min-height:100%;max-height:120%;"
} : undefined);

var Carousel_CarouselComponent = function CarouselComponent(props) {
  var _useWindowDimensions = Object(utilsJSX["c" /* useWindowDimensions */])(),
      width = _useWindowDimensions.width;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      currentImage = _useState4[0],
      setCurrentImage = _useState4[1];

  var images = props.images;
  var imagesToShow = width > 800 ? 3 : width > 500 ? 2 : 1;
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])(Layout["c" /* SectionContainer */], null, Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, Object(core_["jsx"])(CarouselContainer, null, Object(core_["jsx"])(external_react_elastic_carousel_default.a, extends_default()({
    itemsToShow: imagesToShow
  }, props, {
    pagination: false,
    showArrows: (images === null || images === void 0 ? void 0 : images.length) > 2
  }), !!images.length && images.map(function (_ref, i) {
    var image = _ref.image;
    return Object(core_["jsx"])(ImgWrapper, {
      key: image + i
    }, Object(core_["jsx"])(Image, {
      onClick: function onClick() {
        setModalVisible(true);
        setCurrentImage(image);
      },
      src: image,
      alt: ""
    }));
  }))))), Object(core_["jsx"])(Modal_ModalLayer, {
    modalVisible: modalVisible,
    setModalVisible: setModalVisible
  }, Object(core_["jsx"])(Modal_ModalContent, null, Object(core_["jsx"])("img", {
    src: currentImage ? currentImage : undefined,
    alt: ""
  }))));
};

/* harmony default export */ var Carousel = __webpack_exports__["a"] = (Carousel_CarouselComponent);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@emotion/styled-base"
var styled_base_ = __webpack_require__(1);
var styled_base_default = /*#__PURE__*/__webpack_require__.n(styled_base_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(3);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(10);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(59);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/dark_flake.png
var dark_flake = __webpack_require__(19);
var dark_flake_default = /*#__PURE__*/__webpack_require__.n(dark_flake);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Loader/index.jsx



function _templateObject() {
  var data = taggedTemplateLiteral_default()([" \n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// import React from "react";

/** @jsx jsx */



var rotation = Object(core_["keyframes"])(_templateObject());

var LoaderContainer = styled_base_default()("div", {
  target: "e13p7emo0"
})( true ? {
  name: "1rgtraz",
  styles: "width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;img{max-height:25vw;opacity:0.5;}"
} : undefined);

var Loader_Loader = function Loader() {
  return Object(core_["jsx"])(LoaderContainer, null, Object(core_["jsx"])("img", {
    css:
    /*#__PURE__*/

    /*#__PURE__*/
    Object(core_["css"])("animation:", rotation, " 4s infinite linear;" + ( true ? "" : undefined)),
    src: dark_flake_default.a,
    alt: ""
  }));
};

/* harmony default export */ var shared_Loader = (Loader_Loader);
// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/theme.js
var theme = __webpack_require__(4);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Layout.jsx
var Layout = __webpack_require__(2);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(12);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(61);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/ham.svg
var ham = __webpack_require__(62);
var ham_default = /*#__PURE__*/__webpack_require__.n(ham);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/fb.svg
var fb = __webpack_require__(63);
var fb_default = /*#__PURE__*/__webpack_require__.n(fb);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/insta.svg
var insta = __webpack_require__(64);
var insta_default = /*#__PURE__*/__webpack_require__.n(insta);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/yt.svg
var yt = __webpack_require__(65);
var yt_default = /*#__PURE__*/__webpack_require__.n(yt);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(16);

// EXTERNAL MODULE: external "antd/dist/antd.min.css"
var antd_min_css_ = __webpack_require__(105);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Navigation/corrections.css
var corrections = __webpack_require__(106);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/close.png
var assets_close = __webpack_require__(66);
var close_default = /*#__PURE__*/__webpack_require__.n(assets_close);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Navigation/SideMenu.jsx


function SideMenu_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var SubMenu = external_antd_["Menu"].SubMenu;

var SideMenuContainer = styled_base_default()("div", {
  target: "e58gsv00"
})("transition:all 0.2s;width:300px;height:100vh;position:absolute;left:", function (p) {
  return p.sideMenuVisible ? 0 : "-300px";
}, ";top:0;background:white;text-align:left;overflow-y:scroll;" + ( true ? "" : undefined));

var SocialsSideBar = styled_base_default()("div", {
  target: "e58gsv01"
})( true ? {
  name: "kr4k96",
  styles: "display:flex;justify-content:space-around;width:100%;"
} : undefined);

var LogoContainer = styled_base_default()("div", {
  target: "e58gsv02"
})( true ? {
  name: "1vojkp1",
  styles: "display:flex;justify-content:space-around;width:100%;padding:20px 0;"
} : undefined);

var Logo = styled_base_default()("img", {
  target: "e58gsv03"
})( true ? {
  name: "7f50zt",
  styles: "height:50px;width:50px;"
} : undefined);

var CloseImg = styled_base_default()("img", {
  target: "e58gsv04"
})("position:absolute;top:20px;right:20px;height:20px;width:20px;color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";cursor:pointer;" + ( true ? "" : undefined));

var SideMenu_SideMenu = function SideMenu(_ref) {
  var sideMenuVisible = _ref.sideMenuVisible,
      setSideMenuVisible = _ref.setSideMenuVisible,
      SocialLinks = _ref.SocialLinks,
      DDButton = _ref.DDButton,
      DDButtonStyles = _ref.DDButtonStyles,
      communityLinks = _ref.communityLinks,
      getCommunityLinksArray = _ref.getCommunityLinksArray,
      aboutLinksArray = _ref.aboutLinksArray,
      familyLinksArray = _ref.familyLinksArray;
  var communityLinksArray = getCommunityLinksArray({
    communityLinks: communityLinks
  });
  return Object(core_["jsx"])(SideMenuContainer, {
    sideMenuVisible: sideMenuVisible
  }, Object(core_["jsx"])(CloseImg, {
    src: close_default.a,
    alt: "close side menu",
    onClick: function onClick() {
      return setSideMenuVisible(false);
    }
  }), Object(core_["jsx"])(external_antd_["Menu"], {
    mode: "inline",
    style: {
      height: "100%"
    }
  }, Object(core_["jsx"])(external_antd_["Menu"].Item, {
    style: {
      height: 100
    }
  }, Object(core_["jsx"])(LogoContainer, null, Object(core_["jsx"])(router_["Link"], {
    onClick: function onClick() {
      return setSideMenuVisible(false);
    },
    to: "/"
  }, Object(core_["jsx"])(Logo, {
    src: dark_flake_default.a,
    alt: ""
  })))), Object(core_["jsx"])(SubMenu, {
    title: Object(core_["jsx"])("span", null, "About"),
    style: {
      width: 256
    }
  }, aboutLinksArray.map(function (lnk, i) {
    return Object(core_["jsx"])(external_antd_["Menu"].Item, {
      onClick: function onClick() {
        return setSideMenuVisible(false);
      },
      key: "about" + i
    }, lnk);
  })), Object(core_["jsx"])(SubMenu, {
    title: Object(core_["jsx"])("span", null, "Family Literacy"),
    style: {
      width: 256
    }
  }, familyLinksArray.map(function (lnk, i) {
    return Object(core_["jsx"])(external_antd_["Menu"].Item, {
      onClick: function onClick() {
        return setSideMenuVisible(false);
      },
      key: "about" + i
    }, lnk);
  })), Object(core_["jsx"])(SubMenu, {
    title: Object(core_["jsx"])("span", null, "Community Initiatives"),
    style: {
      width: 256
    }
  }, communityLinksArray.map(function (lnk, i) {
    return Object(core_["jsx"])(external_antd_["Menu"].Item, {
      onClick: function onClick() {
        return setSideMenuVisible(false);
      },
      key: "about" + i
    }, lnk);
  })), Object(core_["jsx"])(external_antd_["Menu"].Item, null, Object(core_["jsx"])(router_["Link"], {
    onClick: function onClick() {
      return setSideMenuVisible(false);
    },
    to: "/news"
  }, "News")), Object(core_["jsx"])(external_antd_["Menu"].Item, null, Object(core_["jsx"])(router_["Link"], {
    onClick: function onClick() {
      return setSideMenuVisible(false);
    },
    to: "/events"
  }, "Events")), Object(core_["jsx"])(external_antd_["Menu"].Item, null, Object(core_["jsx"])(router_["Link"], {
    onClick: function onClick() {
      return setSideMenuVisible(false);
    },
    to: "/contact"
  }, "Contact")), Object(core_["jsx"])(external_antd_["Menu"].Item, null, Object(core_["jsx"])(SocialsSideBar, null, Object(core_["jsx"])(SocialLinks, null)))));
};
// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/book_bike.jpg
var book_bike = __webpack_require__(67);
var book_bike_default = /*#__PURE__*/__webpack_require__.n(book_bike);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/wallTent.jpg
var wallTent = __webpack_require__(68);
var wallTent_default = /*#__PURE__*/__webpack_require__.n(wallTent);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/whitehorse.jpg
var whitehorse = __webpack_require__(69);
var whitehorse_default = /*#__PURE__*/__webpack_require__.n(whitehorse);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Navigation/index.jsx




function Navigation_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }














 // import Loader from "../Loader";
//
// DROP DOWN
//



var DropDownContentContainer = styled_base_default()("div", {
  target: "e12994850"
})("transition:all 0.3s;visibility:hidden;opacity:0;display:flex;width:100%;min-height:266px;position:absolute;top:64px;left:0px;background:", function (p) {
  return p.theme.colors.light_accent;
}, ";" + ( true ? "" : undefined));

var Navigation_DDButtonStyles = styled_base_default()("span", {
  target: "e12994851"
})("transition:all 0.3s;height:100%;text-align:center;display:flex;align-content:center;justify-content:center;font-family:Noto Sans;font-size:15px;font-weight:bold;a,span{margin:auto;border-bottom:2px transparent solid;cursor:", function (p) {
  return p.to && "pointer";
}, " padding:0;}&:hover{transition:0.3s cubic-bezier(0.26,0.84,0.4,0.97);a,span{border-bottom:2px ", function (p) {
  return p.theme.colors.ylc_blue;
}, " solid;}}" + ( true ? "" : undefined));

var DropDownContainer = styled_base_default()("div", {
  target: "e12994852"
})("&:hover > ", DropDownContentContainer, "{transition:0.3s cubic-bezier(0.26,0.84,0.4,0.97);visibility:visible;opacity:1;}&:hover > ", Navigation_DDButtonStyles, "{transition:0.3s cubic-bezier(0.26,0.84,0.4,0.97);a{border-bottom:2px ", function (p) {
  return p.theme.colors.ylc_blue;
}, " solid;}}height:100%;" + ( true ? "" : undefined));

var MarginedDDContent = /*#__PURE__*/styled_base_default()(Layout["b" /* MarginedContainer */], {
  target: "e12994853"
})( true ? {
  name: "z977ns",
  styles: "justify-content:center;align-items:center;flex-grow:1;"
} : undefined);

var DDImgContainer = styled_base_default()("div", {
  target: "e12994854"
})("height:210px;background:grey;grid-column-start:3;grid-column-end:7;div{background-image:url(", function (p) {
  return p.image;
}, ");background-size:cover;width:100%;height:100%;}" + ( true ? "" : undefined));

var Navigation_DropDownContent = function DropDownContent(props) {
  return Object(core_["jsx"])(DropDownContentContainer, null, Object(core_["jsx"])(MarginedDDContent, null, props.children));
};

var Navigation_DDButton = function DDButton(_ref) {
  var to = _ref.to,
      text = _ref.text;
  return Object(core_["jsx"])(Navigation_DDButtonStyles, null, to ? Object(core_["jsx"])(router_["Link"], {
    to: to
  }, text) : Object(core_["jsx"])("span", null, text));
}; //
// NAV
//


var NavContainer = styled_base_default()("div", {
  target: "e12994855"
})("position:fixed;width:100%;height:64px;background-color:", function (_ref2) {
  var scrollPosition = _ref2.scrollPosition,
      isHome = _ref2.isHome;
  return isHome && scrollPosition < 100 ? "rgba(255,255,255,0.4)" : "white";
}, ";z-index:1000;transition:all 0.2s;color:", function (_ref3) {
  var scrollPosition = _ref3.scrollPosition,
      theme = _ref3.theme;
  return scrollPosition > 100 ? theme.colors.ylc_blue : theme.colors.text;
}, ";&:hover{background:", function (p) {
  return p.theme.colors.light_accent;
}, ";}" + ( true ? "" : undefined));

var Nav = /*#__PURE__*/styled_base_default()(Layout["b" /* MarginedContainer */], {
  target: "e12994856"
})( true ? {
  name: "2ll67m",
  styles: "height:64px;justify-content:space-between;align-items:center;a{padding:3px 0 3px;}"
} : undefined);

var BasicNavContainer = styled_base_default()("div", {
  target: "e12994857"
})( true ? {
  name: "147x205",
  styles: "display:flex;width:100%;justify-content:space-between;align-items:center;"
} : undefined);

var TopNavLinks = styled_base_default()("div", {
  target: "e12994858"
})("display:flex;justify-content:space-between;align-items:center;height:100%;grid-column-start:3;grid-column-end:11;", theme["b" /* mq */][2], "{display:none;}" + ( true ? "" : undefined));

var Navigation_BasicNav = function BasicNav(props) {
  return Object(core_["jsx"])(BasicNavContainer, null, Object(core_["jsx"])(Navigation_DDButton, {
    to: "/about",
    text: "About"
  }), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/family",
    text: "Family Literacy"
  }), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/community",
    text: "Community Initiatives"
  }), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/news",
    text: "News"
  }), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/events",
    text: "Events"
  }), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/contact",
    text: "Contact"
  }));
}; //
// LINKS
//

var LinksContainer = styled_base_default()("span", {
  target: "e12994859"
})( true ? {
  name: "16ehl1c",
  styles: "display:flex;flex-direction:column;padding:20px 0;grid-column-start:7;grid-column-end:13;min-height:210px;"
} : undefined);

var SubLinkContainer = styled_base_default()("div", {
  target: "e129948510"
})("padding-bottom:5px;", function (p) {
  return p.theme.fonts.body_text_bold;
}, " font-size:15px;&:hover a{border-bottom:2px solid ", function (p) {
  return p.theme.colors.ylc_blue;
}, ";}" + ( true ? "" : undefined));

var Navigation_aboutLinksArray = [Object(core_["jsx"])(router_["Link"], {
  to: "/about"
}, "What We Do"), Object(core_["jsx"])(router_["Link"], {
  to: "/about/approach"
}, "Our Approach"), Object(core_["jsx"])(router_["Link"], {
  to: "/about/team"
}, "Our Team"), Object(core_["jsx"])(router_["Link"], {
  to: "/about/supporters"
}, "Supporters"), Object(core_["jsx"])(router_["Link"], {
  to: "/about/opportunities"
}, "Job Opportunities")];

var Navigation_AboutLinks = function AboutLinks() {
  return Object(core_["jsx"])(LinksContainer, null, Navigation_aboutLinksArray.map(function (lnk, i) {
    return Object(core_["jsx"])(SubLinkContainer, {
      key: "boutLinks" + i
    }, lnk);
  }));
};

var Navigation_familyLinksArray = [Object(core_["jsx"])(router_["Link"], {
  to: "/family"
}, "What is Family Literacy?"), Object(core_["jsx"])(router_["Link"], {
  to: "/family/flc"
}, "Family Literacy Centre"), Object(core_["jsx"])(router_["Link"], {
  to: "/family/imagination"
}, "Imagination Library"), Object(core_["jsx"])(router_["Link"], {
  to: "/family/outreach"
}, "Outreach Projects"), Object(core_["jsx"])(router_["Link"], {
  to: "/family/resources"
}, "Resources")];

var Navigation_FamilyLinks = function FamilyLinks() {
  return Object(core_["jsx"])(LinksContainer, null, Navigation_familyLinksArray.map(function (lnk, i) {
    return Object(core_["jsx"])(SubLinkContainer, {
      key: "famLink" + i
    }, lnk);
  }));
};

var Navigation_getCommunityLinksArray = function getCommunityLinksArray(_ref4) {
  var communityLinks = _ref4.communityLinks;
  var generatedLinks = !!(communityLinks === null || communityLinks === void 0 ? void 0 : communityLinks.length) && communityLinks.map(function (init, i) {
    return Object(core_["jsx"])(router_["Link"], {
      key: init.slug + i,
      to: "/community/initiative/".concat(init.slug || "NAME/LINK_NEEDED")
    }, (init === null || init === void 0 ? void 0 : init.title) || "Title Needed");
  });
  var linksArray = generatedLinks || [];
  return [Object(core_["jsx"])(router_["Link"], {
    to: "/community"
  }, "About Community Initiatives"), Object(core_["jsx"])(router_["Link"], {
    to: "/community/financial_literacy"
  }, "Financial literacy")].concat(toConsumableArray_default()(linksArray));
};

var Navigation_CommunityLinks = function CommunityLinks(_ref5) {
  var communityLinks = _ref5.communityLinks;
  var communityLinksArray = Navigation_getCommunityLinksArray({
    communityLinks: communityLinks
  });
  return Object(core_["jsx"])(LinksContainer, null, communityLinksArray.map(function (lnk, i) {
    return Object(core_["jsx"])(SubLinkContainer, {
      key: "sub" + i
    }, lnk);
  }));
}; //
// LOGO & SOCIALS
//


var Navigation_Logo = styled_base_default()("img", {
  target: "e129948511"
})( true ? {
  name: "7f50zt",
  styles: "height:50px;width:50px;"
} : undefined);

var SocialsMainNav = styled_base_default()("span", {
  target: "e129948512"
})("grid-column-start:11;grid-column-end:13;display:flex;justify-content:space-around;align-items:center;padding-top:2px;padding-left:20px;", theme["b" /* mq */][2], "{display:none;}" + ( true ? "" : undefined));

var LogoSection = styled_base_default()("div", {
  target: "e129948513"
})("display:flex;justify-content:center;", theme["b" /* mq */][2], "{grid-column-start:6;grid-column-end:8;}" + ( true ? "" : undefined));

var SocialImg = styled_base_default()("img", {
  target: "e129948514"
})( true ? {
  name: "1t9pz9x",
  styles: "width:20px;height:20px;"
} : undefined);

var Navigation_SocialLinks = function SocialLinks() {
  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])("a", {
    href: "https://www.facebook.com/Yukon-Family-Literacy-Centre-193726640688169/",
    target: "_blank",
    rel: "noreferrer"
  }, Object(core_["jsx"])(SocialImg, {
    src: fb_default.a,
    alt: "facebook icon"
  })), Object(core_["jsx"])("a", {
    href: "https://www.youtube.com/channel/UCsoAKkydC9BSeKIXJTNwXGQ"
  }, Object(core_["jsx"])(SocialImg, {
    src: yt_default.a,
    alt: "youtube icon"
  })), Object(core_["jsx"])("a", {
    href: "https://www.instagram.com/yukonfamilyliteracycentre/"
  }, Object(core_["jsx"])(SocialImg, {
    src: insta_default.a,
    alt: "instagram icon"
  })));
}; //
// SIDE MENU
//


var HamburgerContainer = styled_base_default()("div", {
  target: "e129948515"
})("grid-column:span 2;display:none;cursor:pointer;", theme["b" /* mq */][2], "{display:block;}" + ( true ? "" : undefined)); //
// MAIN COMPONENT
//


var Navigation_Navigation = function Navigation(props) {
  var _useSiteData = Object(external_react_static_["useSiteData"])(),
      communityLinks = _useSiteData.communityLinks;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = slicedToArray_default()(_useState, 2),
      scrollPosition = _useState2[0],
      setScrollPosition = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      sideMenuVisible = _useState4[0],
      setSideMenuVisible = _useState4[1];

  var handleScroll = function handleScroll() {
    var position = typeof window !== "undefined" ? window.pageYOffset : 0;
    setScrollPosition(position);
  };

  Object(external_react_["useEffect"])(function () {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, {
        passive: true
      });
      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });
  return Object(core_["jsx"])(NavContainer, {
    isHome: props.isHome,
    scrollPosition: scrollPosition
  }, Object(core_["jsx"])(Nav, null, Object(core_["jsx"])(SideMenu_SideMenu, {
    sideMenuVisible: sideMenuVisible,
    setSideMenuVisible: setSideMenuVisible,
    SocialLinks: Navigation_SocialLinks,
    DDButtonStyles: Navigation_DDButtonStyles,
    DDButton: Navigation_DDButton,
    communityLinks: communityLinks,
    getCommunityLinksArray: Navigation_getCommunityLinksArray,
    aboutLinksArray: Navigation_aboutLinksArray,
    familyLinksArray: Navigation_familyLinksArray
  }), Object(core_["jsx"])(HamburgerContainer, null, Object(core_["jsx"])("img", {
    src: ham_default.a,
    alt: "hamburger menu",
    onClick: function onClick() {
      return setSideMenuVisible(true);
    }
  })), Object(core_["jsx"])(LogoSection, null, Object(core_["jsx"])(router_["Link"], {
    to: "/"
  }, Object(core_["jsx"])(Navigation_Logo, {
    src: dark_flake_default.a,
    alt: ""
  }))), Object(core_["jsx"])(TopNavLinks, null, Object(core_["jsx"])(DropDownContainer, null, Object(core_["jsx"])(Navigation_DDButton, {
    text: "About"
  }), Object(core_["jsx"])(Navigation_DropDownContent, null, Object(core_["jsx"])(DDImgContainer, {
    image: book_bike_default.a
  }, Object(core_["jsx"])("div", null)), Object(core_["jsx"])(Navigation_AboutLinks, null))), Object(core_["jsx"])(DropDownContainer, null, Object(core_["jsx"])(Navigation_DDButton, {
    text: "Family Literacy"
  }), Object(core_["jsx"])(Navigation_DropDownContent, null, Object(core_["jsx"])(DDImgContainer, {
    image: wallTent_default.a
  }, Object(core_["jsx"])("div", null)), Object(core_["jsx"])(Navigation_FamilyLinks, null))), Object(core_["jsx"])(DropDownContainer, null, Object(core_["jsx"])(Navigation_DDButton, {
    text: "Community Initiatives"
  }), Object(core_["jsx"])(Navigation_DropDownContent, null, Object(core_["jsx"])(DDImgContainer, {
    image: whitehorse_default.a
  }, Object(core_["jsx"])("div", null)), Object(core_["jsx"])(Navigation_CommunityLinks, {
    communityLinks: communityLinks
  }))), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/news",
    text: "News"
  }), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/events",
    text: "Events"
  }), Object(core_["jsx"])(Navigation_DDButton, {
    to: "/contact",
    text: "Contact"
  })), Object(core_["jsx"])(SocialsMainNav, null, Object(core_["jsx"])(Navigation_SocialLinks, null))));
}; // const ExportedNav = (
//   <React.Suspense fallback={<div />}>
//     <Navigation />
//   </React.Suspense>
// );


/* harmony default export */ var shared_Navigation = (Navigation_Navigation);
// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Footer/index.jsx


function Footer_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var FooterContainer = styled_base_default()("div", {
  target: "eiqobon0"
})("background:", function (p) {
  return p.theme.colors.medium_grey;
}, ";position:absolute;bottom:0;width:100%;height:230px;overflow:hidden;padding:0 20px;margin-top:0px;", theme["b" /* mq */][1], "{height:180px;}z-index:101;" + ( true ? "" : undefined));

var FooterLogo = styled_base_default()("img", {
  target: "eiqobon1"
})( true ? {
  name: "1cnbqzj",
  styles: "height:300px;position:absolute;bottom:-150px;right:calc(50% - 150px);overflow:hidden;"
} : undefined);

var MarginedFooter = /*#__PURE__*/styled_base_default()(Layout["b" /* MarginedContainer */], {
  target: "eiqobon2"
})( true ? {
  name: "7w6khc",
  styles: "padding-top:20px;"
} : undefined);

var Footer_BasicNavContainer = styled_base_default()("div", {
  target: "eiqobon3"
})("grid-column-start:1;grid-column-end:13;", theme["b" /* mq */][1], "{display:none;}" + ( true ? "" : undefined));

var Footer_Footer = function Footer() {
  return Object(core_["jsx"])(FooterContainer, null, Object(core_["jsx"])(MarginedFooter, null, Object(core_["jsx"])(Footer_BasicNavContainer, null, Object(core_["jsx"])(Navigation_BasicNav, null)), Object(core_["jsx"])(FooterLogo, {
    src: dark_flake_default.a,
    alt: ""
  })));
};

/* harmony default export */ var shared_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "emotion-theming"
var external_emotion_theming_ = __webpack_require__(33);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/App.js


function App_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






 // styling



 // Any routes that start with 'dynamic' will be treated as non-static routes


Object(external_react_static_["addPrefetchExcludes"])(["/admin"]); // const githubBasePath = "/ylc_website";
// STYLED COMPONENTS

var PageContent = styled_base_default()("div", {
  target: "e1j3r96y0"
})( true ? {
  name: "10klw3m",
  styles: "height:100%;"
} : undefined);

var ComponentContent = styled_base_default()("div", {
  target: "e1j3r96y1"
})( true ? {
  name: "10klw3m",
  styles: "height:100%;"
} : undefined);

var FullPage = styled_base_default()("div", {
  target: "e1j3r96y2"
})("background:", function (p) {
  return p.routePath === "about/opportunities" ? p.theme.colors.light_accent : "transparent";
}, ";" + ( true ? "" : undefined));

var App_ref =  true ? {
  name: "9euu6y",
  styles: "min-height:100vh;overflow:hidden;display:block;position:relative;padding-bottom:230px;"
} : undefined;

var appBodyStyles = function appBodyStyles(theme) {
  return App_ref;
}; //Dynamic routes


var CMS = undefined;

if (typeof document !== "undefined" && typeof window !== "undefined") {
  CMS = __webpack_require__(108)["default"];
}

var App_ScrollToTop = function ScrollToTop(_ref2) {
  var children = _ref2.children,
      location = _ref2.location;
  Object(external_react_["useEffect"])(function () {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return children;
};

function App() {
  return Object(core_["jsx"])(external_react_static_["Root"], null, Object(core_["jsx"])(theme["a" /* Global */], null), Object(core_["jsx"])(external_emotion_theming_["ThemeProvider"], {
    theme: theme["e" /* theme */]
  }, Object(core_["jsx"])(PageContent, {
    className: "page-content"
  }, Object(core_["jsx"])(external_react_default.a.Suspense, {
    fallback: Object(core_["jsx"])(shared_Loader, null)
  }, Object(core_["jsx"])(router_["Router"], null, Object(core_["jsx"])(App_ScrollToTop, {
    path: "/"
  }, CMS && Object(core_["jsx"])(CMS, {
    path: "/admin"
  }), Object(core_["jsx"])(external_react_static_["Routes"], {
    path: "*",
    render: function render(_ref3) {
      var routePath = _ref3.routePath,
          getComponentForPath = _ref3.getComponentForPath;
      var el = getComponentForPath(routePath);
      return Object(core_["jsx"])(FullPage, {
        routePath: routePath
      }, Object(core_["jsx"])("div", {
        css: appBodyStyles
      }, Object(core_["jsx"])(shared_Navigation // isHome={routePath === githubBasePath + "/"}
      , {
        isHome: routePath === "/"
      }), Object(core_["jsx"])(ComponentContent, {
        routePath: routePath
      }, el), Object(core_["jsx"])(shared_Footer, null)));
    }
  })))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(40);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(3);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(22);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("/Users/aaronjanke/web_projects/static-ylc-v2/node_modules/react-static/lib/browser");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




var FullPage = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e19w866t0"
})( true ? {
  name: "1pah5gs",
  styles: "position:fixed;height:100vh;width:100vw;z-index:100000000;display:flex;justify-content:center:align-items:center;"
} : undefined);

var FourOhFour = function FourOhFour() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(FullPage, null, "Error 404: Page not found!");
};

/* harmony default export */ __webpack_exports__["default"] = (FourOhFour);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _assets_pop_band_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84);
/* harmony import */ var _assets_pop_band_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_pop_band_jpg__WEBPACK_IMPORTED_MODULE_7__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










var MedHeader = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1uioms40"
})(function (p) {
  return p.theme.fonts.medium_header;
}, ";padding-bottom:20px;" + ( true ? "" : undefined));

var ImageContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1uioms41"
})("grid-column:span 12;background-image:url(", function (p) {
  return p.bgImage;
}, ");background-size:cover;width:100%;height:100%;display:flex;justify-content:center;padding:20px 0;" + ( true ? "" : undefined));

var ContactLocationContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1uioms42"
})("grid-column:span 6;padding:20px 20px 20px 0;", Object(_theme__WEBPACK_IMPORTED_MODULE_6__[/* mqNew */ "c"])(900), "{grid-column:span 12;display:flex;flex-direction:column;justify-content:center;}" + ( true ? "" : undefined));

var InfoLine = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1uioms43"
})(function (p) {
  return p.theme.fonts.body_text;
}, " padding-bottom:3px;display:grid;grid-template-columns:repeat(12,1fr);" + ( true ? "" : undefined));

var InfoHeader = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "e1uioms44"
})( true ? {
  name: "102a3kp",
  styles: "display:inline-block;font-weight:bold;grid-column:span 3;"
} : undefined);

var InfoText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "e1uioms45"
})( true ? {
  name: "1jwv65q",
  styles: "grid-column:span 9;"
} : undefined);

var Contact = function Contact(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_2__[/* PageHeader */ "c"], {
    text: "Contact Us"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ContactLocationContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(MedHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_5__[/* DarkAndLightText */ "a"], {
    text: "Contact Info"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Email:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "yukonliteracy@yukonliteracy.com")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Phone:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "(867) 668-6535")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Fax:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "(867) 668-6518"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ContactLocationContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(MedHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_5__[/* DarkAndLightText */ "a"], {
    text: "Hours And Location"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Hours:"), " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "from 9-5, Monday to Friday")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Address:"), " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "Suite 207-100 Main Street Whitehorse, YT Y1A 2A8"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ContactLocationContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(MedHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_5__[/* DarkAndLightText */ "a"], {
    text: "Family Literacy Centre"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Address:"), " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "Suite 207-100 Main Street Whitehorse, YT Y1A 2A8")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Phone:"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "(867) 668-8698"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ContactLocationContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(MedHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_5__[/* DarkAndLightText */ "a"], {
    text: "Pioneer Hotel"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Location:"), " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "Shipyards Park")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Season:"), " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "May to August")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoLine, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoHeader, null, "Phone:"), " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InfoText, null, "(867) 336-8577"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ImageContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
    src: _assets_pop_band_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact); // Pioneer Hotel - Shipyards Park
// May to August
// Phone: (867) 336-8577
// Family Literacy Centre
// 2nd Floor of the Canada Games Centre
// 200 Hamilton Blvd.
// Whitehorse, YT
// Y1A 0A6
// ​Phone: (867) 668-8698

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _assets_whatWeDoA_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85);
/* harmony import */ var _assets_whatWeDoA_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_whatWeDoA_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_whatWeDoB_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86);
/* harmony import */ var _assets_whatWeDoB_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_whatWeDoB_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_9__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }












var MediumHeader = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1bj7soo0"
})(function (p) {
  return p.theme.fonts.medium_header;
}, ";grid-column:span 12;" + ( true ? "" : undefined));

var MedHeaderCentered = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(MediumHeader, {
  target: "e1bj7soo1"
})( true ? {
  name: "xi606m",
  styles: "text-align:center;"
} : undefined);

var Body = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1bj7soo2"
})(function (p) {
  return p.theme.fonts.body_text;
}, " font-weight:normal;grid-column:span 12;" + ( true ? "" : undefined));

var CenteredBody = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(Body, {
  target: "e1bj7soo3"
})( true ? {
  name: "10wcsg1",
  styles: "grid-column-start:2;grid-column-end:12;"
} : undefined);

var AboutUs = function AboutUs(_ref) {
  var text = _ref.text;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(MedHeaderCentered, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_5__[/* DarkAndLightText */ "a"], {
    text: "About Us"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(CenteredBody, null, text)));
};

var ImageSection = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], {
  target: "e1bj7soo4"
})("min-height:400px;direction:", function (p) {
  return p.rightAligned ? "rtl" : "ltr";
}, ";", Object(_theme__WEBPACK_IMPORTED_MODULE_6__[/* mqNew */ "c"])(900), "{direction:ltr;min-height:auto;}" + ( true ? "" : undefined));

var HeaderAndBody = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1bj7soo5"
})("grid-column:span 6;display:flex;flex-direction:column;justify-content:center;", Object(_theme__WEBPACK_IMPORTED_MODULE_6__[/* mqNew */ "c"])(900), "{grid-column:span 12;padding-top:50px;}" + ( true ? "" : undefined));

var SectionImage = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1bj7soo6"
})("background:grey;grid-column:span 6;div{width:100%;height:400px;background-image:url(", function (p) {
  return p === null || p === void 0 ? void 0 : p.image;
}, ");background-size:cover;}", Object(_theme__WEBPACK_IMPORTED_MODULE_6__[/* mqNew */ "c"])(900), "{grid-column:span 12;div{width:auto;height:400px;}}" + ( true ? "" : undefined));

var SectionBody = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(Body, {
  target: "e1bj7soo7"
})( true ? {
  name: "uitvrg",
  styles: "padding-top:15px;"
} : undefined);

var SideSection = function SideSection(_ref2) {
  var text = _ref2.text,
      header = _ref2.header,
      rightAligned = _ref2.rightAligned,
      image = _ref2.image;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(ImageSection, {
    rightAligned: rightAligned
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SectionImage, {
    image: image
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(HeaderAndBody, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(MediumHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_5__[/* DarkAndLightText */ "a"], {
    text: header
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SectionBody, null, text || "text needed"))));
};

var StatementContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1bj7soo8"
})( true ? {
  name: "14o1apd",
  styles: "display:flex;align-items:center;justify-content:center;padding:30px 0;"
} : undefined);

var StatementsTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "e1bj7soo9"
})(function (p) {
  return p.theme.fonts.small_header;
}, " padding:0 20px;" + ( true ? "" : undefined));

var StatementLink = function StatementLink(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(StatementContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(StatementsTitle, null, "Annual Statements"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/about/statements"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_3__[/* LargeButton */ "b"], null, "Download Here"))));
};

var AboutText = "Founded in 2004, the Yukon Literacy Coalition is a registered non-profit organization dedicated to improving the lives of the people of the north by providing accessible and culturally appropriate learning opportunities. We serve the territory in many ways including: Literacy and Essential Skills (LES) embedded workshops and programs Conducting and participating in regional and national community-based research projects Operating the Family Literacy Centre (FLC) at the Canada Games Centre in Whitehorse and running a vibrant Yukon-wide outreach program Working in partnership with First Nation governments, Yukon government, municipalities and other non-profit organizations";
var MissionText = "We are a society of people dedicated to improving the quality of life of all Yukoners. We do this by building the foundational skills required for lifelong learning; acknowledging we are all adapting to an ever-changing world";
var AllianceText = "YLC has a long-standing formal collaboration with Ilitaqsiniq Nunavut Literacy Council and NWT Literacy Council working together for the same purpose, the same people, using the same approach. Together, we maximize our collective knowledge, skills and experiences to have a greater impact on people of the North";

var WhatWeDo = function WhatWeDo() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_3__[/* PageHeader */ "c"], {
    text: "What We Do"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(AboutUs, {
    text: AboutText
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideSection, {
    text: MissionText,
    header: "Our Mission Statement",
    rightAligned: true,
    image: _assets_whatWeDoA_jpg__WEBPACK_IMPORTED_MODULE_7___default.a
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(SideSection, {
    text: AllianceText,
    header: "Our Northern Alliance",
    image: _assets_whatWeDoB_jpg__WEBPACK_IMPORTED_MODULE_8___default.a
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(StatementLink, null));
};

/* harmony default export */ __webpack_exports__["default"] = (WhatWeDo);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _shared_Type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






var approachCopy = "We use a non-formal strength-based approach to meet the needs of learners. We believe in the importance of tapping into and building on the natural talents of participants by providing structured learning in a flexible way. We deliberately embed Literacy and Essential Skills (LES) into non-formal learning or training. Content, culture and LES are three strands braided seamlessly together to make a successful program.";
var approachCopy2 = "We deliver embedded LES programs, using non- formal learning which is structured learning planned in a flexible way. Our non- formal learning includes using a strength- based approach, making our programs learner centred, using clear language, offering a safe and respectful environment, making the programs accessible, and inclusion of healing and wellness.";
var approachCopy3 = "We are all learners.";
var litSkillsCopy = "LES are the skills that people need and use in all aspects of their lives including the workplace. These skills provide a foundation for learning other skills for work and life, and help workers advance in their jobs and adapt to changes in their workplaces.";
var litSkillsCopy2 = "For a breakdown of the nine essential  skills ";

var StyledCopy = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1nw64gh0"
})("padding:10px 0;grid-column-start:2;grid-column-end:12;", function (p) {
  return p.theme.fonts.body_text;
}, ";" + ( true ? "" : undefined));

var CenteredCopy = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(StyledCopy, {
  target: "e1nw64gh1"
})( true ? {
  name: "xi606m",
  styles: "text-align:center;"
} : undefined);

var MediumHeader = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1nw64gh2"
})(function (p) {
  return p.theme.fonts.medium_header;
}, ";grid-column:span 12;" + ( true ? "" : undefined));

var MedHeaderCentered = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(MediumHeader, {
  target: "e1nw64gh3"
})( true ? {
  name: "xi606m",
  styles: "text-align:center;"
} : undefined);

var ButtonContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "e1nw64gh4"
})( true ? {
  name: "174rtov",
  styles: "display:inline-block;padding:10px;"
} : undefined);

var Approach = function Approach(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_3__[/* PageHeader */ "c"], {
    text: "Our Approach"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(MedHeaderCentered, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_4__[/* DarkAndLightText */ "a"], {
    text: "At the Yukon Literacy Coalition"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(StyledCopy, null, approachCopy), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(StyledCopy, null, approachCopy2), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CenteredCopy, null, approachCopy3))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(MedHeaderCentered, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Type__WEBPACK_IMPORTED_MODULE_4__[/* DarkAndLightText */ "a"], {
    text: "Literacy and Essential Skills"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(StyledCopy, null, litSkillsCopy), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CenteredCopy, null, litSkillsCopy2, " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(ButtonContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
    href: "http://www.canada.ca/en/employment-social-development/programs/essential-skills/definitions.html"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_3__[/* LargeButton */ "b"], null, "Click Here")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Approach);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);








var sectionStyles = function sectionStyles(theme) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])("background:", theme.colors.light_accent, ";height:100%;" + ( true ? "" : undefined))
  );
};

var JobOpportunity = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "ezrz1qs0"
})("grid-column-start:2;grid-column-end:12;background:white;border:", function (p) {
  return p.theme.colors.medium_accent;
}, " 1px solid;padding:20px;border-radius:2px;display:flex;justify-content:space-between;align-items:center;" + ( true ? "" : undefined));

var OppText = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "ezrz1qs1"
})(function (p) {
  return p.theme.fonts.body_text_bold;
},  true ? "" : undefined);

var Opportunities = function Opportunities(_ref) {
  var jobOpportunities = _ref.jobOpportunities;
  var opportunitiesArray = !!(jobOpportunities === null || jobOpportunities === void 0 ? void 0 : jobOpportunities.length) && jobOpportunities || [];
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_5__[/* PageHeader */ "c"], {
    text: "Job Opportunities"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], {
    css: sectionStyles
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], null, !!opportunitiesArray.length ? opportunitiesArray.map(function (opp, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(JobOpportunity, {
      key: opp.title + i
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(OppText, null, opp.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
      href: opp.pdf,
      download: true
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_5__[/* LargeButton */ "b"], null, "Download PDF")));
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(JobOpportunity, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, "No current opportunities")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Opportunities));

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);









var StatementContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1mth5lq0"
})("grid-column:span 2;display:flex;justify-content:center;align-items:center;flex-direction:column;border:1px solid ", function (p) {
  return p.theme.colors.medium_accent;
}, ";border-radius:4px;height:110px;", _theme__WEBPACK_IMPORTED_MODULE_6__[/* mq */ "b"][3], "{grid-column:span 3;}", _theme__WEBPACK_IMPORTED_MODULE_6__[/* mq */ "b"][2], "{grid-column:span 4;}", _theme__WEBPACK_IMPORTED_MODULE_6__[/* mq */ "b"][1], "{grid-column:span 12;}" + ( true ? "" : undefined));

var StatementTitle = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1mth5lq1"
})(function (p) {
  return p.theme.fonts.extra_small_header;
}, " padding-bottom:10px;" + ( true ? "" : undefined));

var Statement = function Statement(_ref) {
  var statement = _ref.statement;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(StatementContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(StatementTitle, null, statement.title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
    href: statement.pdf,
    download: true
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_5__[/* LargeButton */ "b"], null, "Download")));
};

var Statements = function Statements(_ref2) {
  var statements = _ref2.statements;

  var sortArray = function sortArray(a, b) {
    var first = moment__WEBPACK_IMPORTED_MODULE_3___default()(a.statementYear).format("YYYY");
    var second = moment__WEBPACK_IMPORTED_MODULE_3___default()(b.statementYear).format("YYYY");
    return second - first;
  };

  var sortedArray = !!(statements === null || statements === void 0 ? void 0 : statements.length) ? statements.sort(sortArray) : [];
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_5__[/* PageHeader */ "c"], {
    text: "Annual Statements"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_4__[/* MarginedContainer */ "b"], null, !!sortedArray.length ? sortedArray.map(function (statement, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Statement, {
      statement: statement,
      key: (statement === null || statement === void 0 ? void 0 : statement.title) + i
    });
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null, "No statements available."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Statements));

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _shared_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








var FamilyCopy = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eudsun20"
})( true ? {
  name: "f9qfdi",
  styles: "grid-column:span 12;"
} : undefined);

var body = "Family literacy is parents/caregivers and children learning together. A child’s literacy development begins at birth and is shaped by their experiences in the home environment. By supporting parents/caregivers in their role as their children’s first teachers, we can provide a positive impact on the child’s emerging literacy skills and attitudes toward learning. Family literacy can apply to all families, and to most activities that take place within the everyday life at home. Young children mostly learn through the power of play, which helps to nurture the imagination and to give a child a sense of adventure. Through play, they can learn essential skills such as problem solving, sharing, emotional development, gross and fine motor skills, language and so much more. It has been proven that when parents/caregivers learn together with the child, through a wide variety of daily activities, they assist their children and themselves in becoming lifelong learners.";

var FamilyAbout = function FamilyAbout() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_shared_Project__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    body: body,
    title: "Family Literacy",
    subTitle: "What Is Family Literacy?"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FamilyAbout);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);







var Resources = function Resources(_ref) {
  var familyResources = _ref.familyResources;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_1__[/* PageHeader */ "c"], {
    text: "Family Literacy Resources"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__[/* MarginedContainer */ "b"], null, !!(familyResources === null || familyResources === void 0 ? void 0 : familyResources.length) && familyResources.map(function (resource, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      project: resource,
      key: resource.title + i
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Resources));

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _shared_SharedBlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _shared_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);









var Blog = function Blog(_ref) {
  var allItems = _ref.posts;

  var _usePosts = Object(_shared_Pagination__WEBPACK_IMPORTED_MODULE_6__[/* usePosts */ "b"])({
    allItems: allItems
  }),
      _usePosts2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_usePosts, 5),
      getDeeperItems = _usePosts2[0],
      getShallowerItems = _usePosts2[1],
      itemsStart = _usePosts2[2],
      itemsEnd = _usePosts2[3],
      currentItems = _usePosts2[4];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_3__[/* PageHeader */ "c"], {
    text: "The News"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_5__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_5__[/* MarginedContainer */ "b"], null, currentItems === null || currentItems === void 0 ? void 0 : currentItems.map(function (post, i) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_SharedBlog__WEBPACK_IMPORTED_MODULE_4__[/* PostListing */ "a"], {
      post: post,
      key: post.date + post.title
    });
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Pagination__WEBPACK_IMPORTED_MODULE_6__[/* Pagination */ "a"], {
    getDeeperItems: getDeeperItems,
    getShallowerItems: getShallowerItems,
    itemsStart: itemsStart,
    itemsEnd: itemsEnd,
    allItems: allItems
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(Blog));

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _shared_Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _shared_SharedEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _shared_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);









var EventsOverview = function EventsOverview(_ref) {
  var allItems = _ref.events;

  var _usePosts = Object(_shared_Pagination__WEBPACK_IMPORTED_MODULE_6__[/* usePosts */ "b"])({
    allItems: allItems
  }),
      _usePosts2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_usePosts, 5),
      getDeeperItems = _usePosts2[0],
      getShallowerItems = _usePosts2[1],
      itemsStart = _usePosts2[2],
      itemsEnd = _usePosts2[3],
      currentItems = _usePosts2[4];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Features__WEBPACK_IMPORTED_MODULE_4__[/* PageHeader */ "c"], {
    text: "Upcoming Events"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__[/* SectionContainer */ "c"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_3__[/* MarginedContainer */ "b"], null, currentItems.map(function (event, i) {
    var eventNumber = i + 1;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_SharedEvents__WEBPACK_IMPORTED_MODULE_5__[/* EventListing */ "a"], {
      event: event,
      key: event.date + event.title,
      border: eventNumber % 4 === 0
    });
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Pagination__WEBPACK_IMPORTED_MODULE_6__[/* Pagination */ "a"], {
    getDeeperItems: getDeeperItems,
    getShallowerItems: getShallowerItems,
    itemsStart: itemsStart,
    itemsEnd: itemsEnd,
    allItems: allItems,
    firstButton: "Sooner",
    secondButton: "Later"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_2__["withRouteData"])(EventsOverview));

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(3);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(7);

// EXTERNAL MODULE: external "@emotion/styled-base"
var styled_base_ = __webpack_require__(1);
var styled_base_default = /*#__PURE__*/__webpack_require__.n(styled_base_);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Layout.jsx
var Layout = __webpack_require__(2);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/theme.js
var src_theme = __webpack_require__(4);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/assets/kayaking.jpg
var kayaking = __webpack_require__(82);
var kayaking_default = /*#__PURE__*/__webpack_require__.n(kayaking);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/Home/Hero/index.jsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




 // NODE-SAFE IMPORTS


var TextLoop = undefined;

if (typeof document !== "undefined" && typeof window !== "undefined") {
  TextLoop = __webpack_require__(110)["default"];
}

var SmallHeader = styled_base_default()("div", {
  target: "e4httud0"
})(function (p) {
  return p.theme.fonts.small_header;
}, ";display:inline;", src_theme["b" /* mq */][1], "{font-size:20px;}" + ( true ? "" : undefined));

var DarkSmall = /*#__PURE__*/styled_base_default()(SmallHeader, {
  target: "e4httud1"
})("color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";" + ( true ? "" : undefined));

var BigHeader = styled_base_default()("div", {
  target: "e4httud2"
})(function (p) {
  return p.theme.fonts.big_header;
}, " color:white;", src_theme["b" /* mq */][3], "{font-size:65px;}", src_theme["b" /* mq */][2], "{font-size:50px;}", src_theme["b" /* mq */][1], "{font-size:30px;}", src_theme["b" /* mq */][0], "{font-size:20px;}" + ( true ? "" : undefined));

var DarkBig = /*#__PURE__*/styled_base_default()(BigHeader, {
  target: "e4httud3"
})("color:", function (p) {
  return p.theme.colors.ylc_blue;
}, ";width:100%;" + ( true ? "" : undefined));

var MarginedContainer = /*#__PURE__*/styled_base_default()(Layout["b" /* MarginedContainer */], {
  target: "e4httud4"
})( true ? {
  name: "j7qwjs",
  styles: "display:flex;flex-direction:column;"
} : undefined);

var HeroContainer = styled_base_default()("div", {
  target: "e4httud5"
})("background-image:linear-gradient( rgba(255,255,255,0.05),rgba(255,255,255,0.3),rgba(255,255,255,0.3),rgba(255,255,255,0.1),rgba(212,6,250,0.1) ),url(", kayaking_default.a, ");background-size:cover;background-position:top;padding:150px 0;perspective:10px;height:800px;width:100%;" + ( true ? "" : undefined));

var Hero_displayText = function displayText(_ref) {
  var shuffledWords = _ref.shuffledWords;
  return Object(core_["jsx"])(DarkBig, null, TextLoop ? Object(core_["jsx"])(TextLoop, {
    interval: 2500,
    fade: false,
    mask: true // adjustingSpeed={1000}
    ,
    springConfig: {
      stiffness: 300,
      damping: 80
    },
    children: shuffledWords // children={["Hunting and Gathering"]}

  }) : "Learning");
};

var Hero_Hero = function Hero(_ref2) {
  var words = _ref2.words;
  var shuffledWords = words.sort(function () {
    return Math.random() - 0.5;
  });
  return Object(core_["jsx"])(HeroContainer, null, Object(core_["jsx"])(MarginedContainer, null, Object(core_["jsx"])("div", null, Object(core_["jsx"])(SmallHeader, null, "At the "), Object(core_["jsx"])(DarkSmall, null, "Yukon Literacy Coalition")), Object(core_["jsx"])(DarkBig, null, "Literacy is"), Hero_displayText({
    shuffledWords: shuffledWords
  })));
};

/* harmony default export */ var Home_Hero = (Hero_Hero);
// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(10);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Type.jsx
var Type = __webpack_require__(5);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/SharedEvents/index.jsx
var SharedEvents = __webpack_require__(36);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/Features/index.jsx
var Features = __webpack_require__(6);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/utilsJSX.js
var utilsJSX = __webpack_require__(17);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/Home/Upcoming/index.jsx


function Upcoming_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


 // import { css } from "@emotion/core";








var SmallSectionTitle = /*#__PURE__*/styled_base_default()(Type["e" /* SmallSectionTitle */], {
  target: "ekg16lr0"
})( true ? {
  name: "17j09hu",
  styles: "grid-column:span 12;display:flex;justify-content:space-between;"
} : undefined);

var Upcoming_Upcoming = function Upcoming(_ref) {
  var events = _ref.events;

  var _useWindowDimensions = Object(utilsJSX["c" /* useWindowDimensions */])(),
      height = _useWindowDimensions.height,
      width = _useWindowDimensions.width;

  var upcomingAmount = width <= 1060 && width >= 800 ? 3 : 4;
  var upcomingEvents = (events === null || events === void 0 ? void 0 : events.length) > upcomingAmount ? events === null || events === void 0 ? void 0 : events.slice(0, upcomingAmount) : events || [];
  var eventsLength = upcomingEvents.length;
  return Object(core_["jsx"])(Layout["c" /* SectionContainer */], null, Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, Object(core_["jsx"])(SmallSectionTitle, null, Object(core_["jsx"])("em", null, "Upcoming Events"), Object(core_["jsx"])(router_["Link"], {
    to: "/events"
  }, Object(core_["jsx"])(Features["a" /* InvertedLargeButton */], null, "More Events")))), Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, !upcomingEvents.length && Object(core_["jsx"])("div", null, "No Upcoming Events"), !!upcomingEvents.length && upcomingEvents.map(function (event, i) {
    return Object(core_["jsx"])(SharedEvents["a" /* EventListing */], {
      event: event,
      key: event.date + event.title,
      border: eventsLength - 1 === i
    });
  })));
};

/* harmony default export */ var Home_Upcoming = (Upcoming_Upcoming);
// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/Home/Statement/index.jsx


function Statement_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









var CatchyStatement = styled_base_default()("div", {
  target: "e1paslnm0"
})(function (p) {
  return p.theme.fonts.small_header;
}, " grid-column:span 4;", src_theme["b" /* mq */][2], "{grid-column:span 12;}" + ( true ? "" : undefined));

var StatementButton = styled_base_default()("div", {
  target: "e1paslnm1"
})("grid-column:span 8;", src_theme["b" /* mq */][2], "{grid-column:span 12;}" + ( true ? "" : undefined));

var OtherStatement = styled_base_default()("div", {
  target: "e1paslnm2"
})(function (p) {
  return p.theme.fonts.body_text;
}, " padding-top:20px;" + ( true ? "" : undefined));

var Statement_sectionStyles = function sectionStyles(theme) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(core_["css"])("background:", theme.colors.light_accent, ";" + ( true ? "" : undefined))
  );
};

var ButtonContainer = styled_base_default()("div", {
  target: "e1paslnm3"
})( true ? {
  name: "7jru7m",
  styles: "width:100%;text-align:center;padding-top:20px;"
} : undefined);

var Statement_Statement = function Statement(props) {
  return Object(core_["jsx"])(Layout["c" /* SectionContainer */], {
    css: Statement_sectionStyles
  }, Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, Object(core_["jsx"])(CatchyStatement, null, "We are a society of people dedicated to improving the quality of life of all Yukoners."), Object(core_["jsx"])(StatementButton, null, Object(core_["jsx"])(OtherStatement, null, "We are passionate, experienced educators who are dedicated to developing and enhancing programs to empower learners of all ages. We offer Literacy and Essential Skills (LES) embedded workshops and programs at no cost throughout the Yukon."), Object(core_["jsx"])(ButtonContainer, null, Object(core_["jsx"])(router_["Link"], {
    to: "/about"
  }, Object(core_["jsx"])(Features["b" /* LargeButton */], null, "Learn More"))))));
};

/* harmony default export */ var Home_Statement = (Statement_Statement);
// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/Home/Announcement/index.jsx
var Announcement = __webpack_require__(34);

// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/SharedBlog/index.jsx
var SharedBlog = __webpack_require__(37);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/Home/RecentPosts/index.jsx


function RecentPosts_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











var RecentPosts_SmallSectionTitle = /*#__PURE__*/styled_base_default()(Type["e" /* SmallSectionTitle */], {
  target: "e1s7fkfj0"
})( true ? {
  name: "17j09hu",
  styles: "grid-column:span 12;display:flex;justify-content:space-between;"
} : undefined);

var PostStyles =  true ? {
  name: "1jewqar",
  styles: "grid-column:span 3;"
} : undefined;

var RecentPosts_sectionStyles = function sectionStyles(theme) {
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    Object(core_["css"])("background:", theme.colors.light_accent, ";" + ( true ? "" : undefined))
  );
};

var RecentPosts_RecentPosts = function RecentPosts(props) {
  var _useWindowDimensions = Object(utilsJSX["c" /* useWindowDimensions */])(),
      height = _useWindowDimensions.height,
      width = _useWindowDimensions.width;

  var upcomingAmount = width <= 1060 ? 3 : 4;
  var posts = props.posts;
  var recentPosts = (posts === null || posts === void 0 ? void 0 : posts.length) > upcomingAmount ? posts === null || posts === void 0 ? void 0 : posts.slice(0, upcomingAmount) : posts || [];
  return Object(core_["jsx"])(Layout["c" /* SectionContainer */], {
    css: RecentPosts_sectionStyles
  }, Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, Object(core_["jsx"])(RecentPosts_SmallSectionTitle, null, Object(core_["jsx"])("em", null, "News"), Object(core_["jsx"])(router_["Link"], {
    to: "/news"
  }, Object(core_["jsx"])(Features["a" /* InvertedLargeButton */], null, "More News")))), Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, !recentPosts.length && Object(core_["jsx"])("div", null, "No Recent News"), !!recentPosts.length && recentPosts.map(function (post, i) {
    return Object(core_["jsx"])(SharedBlog["a" /* PostListing */], {
      css: PostStyles,
      post: post,
      key: post.date + post.title
    });
  })));
};

/* harmony default export */ var Home_RecentPosts = (RecentPosts_RecentPosts);
// EXTERNAL MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/shared/ProjectHighlight/index.jsx
var ProjectHighlight = __webpack_require__(18);

// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/Home/Projects/index.jsx






var Projects_Projects = function Projects(_ref) {
  var projects = _ref.projects;
  return Object(core_["jsx"])(Layout["c" /* SectionContainer */], null, Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, Object(core_["jsx"])(Type["e" /* SmallSectionTitle */], null, Object(core_["jsx"])("em", null, "Project Highlights"))), Object(core_["jsx"])(Layout["b" /* MarginedContainer */], null, !!(projects === null || projects === void 0 ? void 0 : projects.length) && projects.map(function (project, i) {
    return Object(core_["jsx"])(ProjectHighlight["a" /* default */], {
      project: project,
      key: "proj" + i
    });
  })));
};

/* harmony default export */ var Home_Projects = (Projects_Projects);
// CONCATENATED MODULE: /Users/aaronjanke/web_projects/static-ylc-v2/src/Home/index.jsx










var Home_Home = function Home(_ref) {
  var _words$;

  var words = _ref.words,
      events = _ref.events,
      posts = _ref.posts,
      announcements = _ref.announcements,
      highlightedProjects = _ref.highlightedProjects;
  var wordsString = words === null || words === void 0 ? void 0 : (_words$ = words[0]) === null || _words$ === void 0 ? void 0 : _words$.words;
  var wordsArr = wordsString.split(",").map(function (i) {
    return i.trim();
  });
  var displayAnnc = announcements.some(function (annc) {
    return annc === null || annc === void 0 ? void 0 : annc.displayAnnouncement;
  });
  var currentAnnc = announcements.find(function (annc) {
    return annc === null || annc === void 0 ? void 0 : annc.displayAnnouncement;
  });
  return Object(core_["jsx"])("div", null, Object(core_["jsx"])(Home_Hero, {
    words: wordsArr
  }), Object(core_["jsx"])(Home_Statement, null), displayAnnc && Object(core_["jsx"])(Announcement["a" /* default */], {
    announcement: currentAnnc
  }), Object(core_["jsx"])(Home_Upcoming, {
    events: events
  }), Object(core_["jsx"])(Home_RecentPosts, {
    posts: posts
  }), Object(core_["jsx"])(Home_Projects, {
    projects: highlightedProjects
  }));
}; // const ExportedHome = document !== "undefined" && window !== "undefined" ? Home : <div />


/* harmony default export */ var src_Home = __webpack_exports__["default"] = (Object(external_react_static_["withRouteData"])(Home_Home));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactStatic = __webpack_require__(7);

var _router = __webpack_require__(10);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("facepaint");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4="

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIHN0eWxlPSJmaWxsOiMyRjM1NzUiIGQ9Ik0yNTUuMDIyLDUxMS45OThsMC4yMjksMC4wMDFsLTAuMDc5LDBsLTAuMTUsLTAuMDAxWm0xLjgwNiwwLjAwMWwtMC4wNzksMGwwLjIyOSwtMC4wMDFsLTAuMTUsMC4wMDFabS0yLjU4OCwtMC4wMDVsMC4yNDcsMC4wMDFsLTAuMTQyLDBsLTAuMTA1LC0wLjAwMVptMy40MTUsMC4wMDFsLTAuMTQyLDBsMC4yNDcsLTAuMDAxbC0wLjEwNSwwLjAwMVptLTQuMTY5LC0wLjAwN2wwLjE2NSwwLjAwMWwtMC4xMzIsLTAuMDAxbC0wLjAzMywwWm00Ljk5NSwwbC0wLjEzMiwwLjAwMWwwLjE2NSwtMC4wMDFsLTAuMDMzLDBabTAuODI2LC0wLjAwOWwtMC4wNTgsMC4wMDFsMC4yMjMsLTAuMDAzbC0wLjE2NSwwLjAwMlptLTYuNzc5LC0wLjAwMmwwLjIyMywwLjAwM2wtMC4wNTgsLTAuMDAxbC0wLjE2NSwtMC4wMDJabTcuNjA0LC0wLjAxbC0wLjEzNSwwLjAwMmwwLjI3NSwtMC4wMDRsLTAuMTQsMC4wMDJabS04LjQwNCwtMC4wMDJsMC4yNzUsMC4wMDRsLTAuMTM1LC0wLjAwMmwtMC4xNCwtMC4wMDJabTkuMjI4LC0wLjAxMmwtMC4xODIsMC4wMDNsMC4yNTQsLTAuMDA1bC0wLjA3MiwwLjAwMlptLTkuOTg0LC0wLjAwMmwwLjI1NCwwLjAwNWwtMC4xODIsLTAuMDAzbC0wLjA3MiwtMC4wMDJabS0wLjkzNywtMC4wMTlsMC4yMjUsMC4wMDVsLTAuMDQsLTAuMDAxbC0wLjE4NSwtMC4wMDRabTExLjc0NSwwLjAwNGwtMC4wNCwwLjAwMWwwLjIyNSwtMC4wMDVsLTAuMTg1LDAuMDA0Wm0tMTIuNTY3LC0wLjAyNWwwLjMwOSwwLjAwOGwtMC4xMjUsLTAuMDAzbC0wLjE4NCwtMC4wMDVabTEzLjM5LDAuMDA1bC0wLjEyNSwwLjAwM2wwLjMwOSwtMC4wMDhsLTAuMTg0LDAuMDA1Wm0wLjgyMywtMC4wMjJsLTAuMjAxLDAuMDA2bDAuMzE2LC0wLjAwOWwtMC4xMTUsMC4wMDNabS0xNC45NjcsLTAuMDAzbDAuMzE2LDAuMDA5bC0wLjIwMSwtMC4wMDZsLTAuMTE1LC0wLjAwM1ptLTAuNzIsLTAuMDIybDAuMjI1LDAuMDA3bC0wLjIxMiwtMC4wMDdsLTAuMTk0LC0wLjAwNmwwLjE4MSwwLjAwNlptMTYuNTA5LDBsLTAuMjEyLDAuMDA3bDAuMjI1LC0wLjAwN2wwLjE4MSwtMC4wMDZsLTAuMTk0LDAuMDA2Wm0wLjgyMSwtMC4wMjdsLTAuMTEyLDAuMDA0bDAuMzQ1LC0wLjAxMmwtMC4yMzMsMC4wMDhabS0xOC4zNzEsLTAuMDA4bDAuMzQ1LDAuMDEybC0wLjExMiwtMC4wMDRsLTAuMjMzLC0wLjAwOFptLTAuNzQ5LC0wLjAyOGwwLjM2MiwwLjAxM2wtMC4yMDEsLTAuMDA3bC0wLjE2MSwtMC4wMDZabTE5Ljk0MSwwLjAwNmwtMC4yMDEsMC4wMDdsMC4zNjIsLTAuMDEzbC0wLjE2MSwwLjAwNlptLTIwLjY3NiwtMC4wMzZsMC4zNTQsMC4wMTVsLTAuMjc3LC0wLjAxMWwtMC4wNzcsLTAuMDA0Wm0yMS40OTUsMC4wMDRsLTAuMjc3LDAuMDExbDAuMzU0LC0wLjAxNWwtMC4wNzcsMC4wMDRabS0yMi41MjUsLTAuMDQ5bDAuMzgsMC4wMTdsLTAuMDkzLC0wLjAwM2wtMC4yODcsLTAuMDE0Wm0yMy4zNDUsMC4wMTRsLTAuMDkzLDAuMDAzbDAuMzgsLTAuMDE3bC0wLjI4NywwLjAxNFptLTI0LjA4NCwtMC4wNDhsMC4zOTQsMC4wMThsLTAuMTg2LC0wLjAwOGwtMC4yMDgsLTAuMDFabTI0LjkwMiwwLjAxbC0wLjE4NiwwLjAwOGwwLjM5NCwtMC4wMThsLTAuMjA4LDAuMDFabS0yNS42MywtMC4wNDdsMC4zOTcsMC4wMmwtMC4yNzksLTAuMDEzbC0wLjExOCwtMC4wMDdabTI2LjQ0OCwwLjAwN2wtMC4yNzksMC4wMTNsMC4zOTcsLTAuMDJsLTAuMTE4LDAuMDA3Wm0wLjgxOCwtMC4wNDNsLTAuMzYyLDAuMDE5bDAuMzIxLC0wLjAxN2wwLjM3OCwtMC4wMjFsLTAuMzM3LDAuMDE5Wm0tMjcuOTI1LDAuMDAybDAuMzIxLDAuMDE3bC0wLjM2MiwtMC4wMTlsLTAuMzM3LC0wLjAxOWwwLjM3OCwwLjAyMVptMjguNzQxLC0wLjA0OGwtMC4xNiwwLjAwOWwwLjQwNiwtMC4wMjNsLTAuMjQ2LDAuMDE0Wm0tMjkuODQ0LC0wLjAxNGwwLjQwNiwwLjAyM2wtMC4xNiwtMC4wMDlsLTAuMjQ2LC0wLjAxNFptLTAuNzIyLC0wLjA0M2wwLjQwNSwwLjAyNGwtMC4yNTMsLTAuMDE0bC0wLjE1MiwtMC4wMVptMzEuMzgyLDAuMDFsLTAuMjUzLDAuMDE0bDAuNDA1LC0wLjAyNGwtMC4xNTIsMC4wMVptLTMyLjA3MSwtMC4wNTNsMC4zNjUsMC4wMjNsLTAuMzQsLTAuMDIxbC0wLjM0MiwtMC4wMjJsMC4zMTcsMC4wMlptMzIuODg3LDAuMDAybC0wLjM0LDAuMDIxbDAuMzY1LC0wLjAyM2wwLjMxNywtMC4wMmwtMC4zNDIsMC4wMjJabTAuODE0LC0wLjA1M2wtMC4xMjIsMC4wMDhsMC4zODcsLTAuMDI2bC0wLjI2NSwwLjAxOFptLTM0Ljc1NSwtMC4wMThsMC4zODcsMC4wMjZsLTAuMTIyLC0wLjAwOGwtMC4yNjUsLTAuMDE4Wm0tMC43MjEsLTAuMDVsMC4zOCwwLjAyN2wtMC4yMDgsLTAuMDE0bC0wLjE3MiwtMC4wMTNabTM2LjI5LDAuMDEzbC0wLjIwOCwwLjAxNGwwLjM4LC0wLjAyN2wtMC4xNzIsMC4wMTNabS0zNy4wMDksLTAuMDY0bDAuMzQ5LDAuMDI1bC0wLjI3MSwtMC4wMTlsLTAuMDc4LC0wLjAwNlptMzcuODIyLDAuMDA2bC0wLjI3MSwwLjAxOWwwLjM0OSwtMC4wMjVsLTAuMDc4LDAuMDA2Wm0tMzguNzg5LC0wLjA3OWwwLjMwNiwwLjAyM2wtMC4wNzQsLTAuMDA1bC0wLjIzMiwtMC4wMThabTM5LjYwMiwwLjAxOGwtMC4wNzQsMC4wMDVsMC4zMDYsLTAuMDIzbC0wLjIzMiwwLjAxOFptMC44MTEsLTAuMDYzbC0wLjE0NiwwLjAxMWwwLjMxMSwtMC4wMjVsLTAuMTY1LDAuMDE0Wm0tNDEuMTU3LC0wLjAxNGwwLjMxMSwwLjAyNWwtMC4xNDYsLTAuMDExbC0wLjE2NSwtMC4wMTRabS0wLjcyNSwtMC4wNTlsMC4yNjQsMC4wMjJsLTAuMTg2LC0wLjAxNWwtMC4wNzgsLTAuMDA3Wm00Mi42OTQsMC4wMDdsLTAuMTg2LDAuMDE1bDAuMjY0LC0wLjAyMmwtMC4wNzgsMC4wMDdabS00My40OTIsLTAuMDc0bDAuMDc5LDAuMDA3bC0wLjAxMywtMC4wMDFsLTAuMDY2LC0wLjAwNlptNDQuMzAyLDAuMDA2bC0wLjAxMywwLjAwMWwwLjA3OSwtMC4wMDdsLTAuMDY2LDAuMDA2Wm0wLjgxLC0wLjA3MWwtMC4wNzIsMC4wMDZsMC4xODEsLTAuMDE2bC0wLjEwOSwwLjAxWm0tNDUuOTY1LC0wLjAxbDAuMTgxLDAuMDE2bC0wLjA3MiwtMC4wMDZsLTAuMTA5LC0wLjAxWm0tMC43NSwtMC4wNjhsMC4xMzUsMC4wMTNsLTAuMDg0LC0wLjAwOGwtMC4wNTEsLTAuMDA1Wm00Ny41MjMsMC4wMDVsLTAuMDg0LDAuMDA4bDAuMTM1LC0wLjAxM2wtMC4wNTEsMC4wMDVabS02My43MzYsLTIuMDI1Yy0xMjIuMzE5LC0xOS4yMjYgLTIxNiwtMTI1LjIwMyAtMjE2LC0yNTIuODg3YzAsLTE0MS4yOSAxMTQuNzEsLTI1NiAyNTYsLTI1NmMxNDEuMjksMCAyNTYsMTE0LjcxIDI1NiwyNTZjMCwxMjcuNjg0IC05My42ODEsMjMzLjY2MSAtMjE2LDI1Mi44ODdsMCwtMTc4Ljg4N2w1OS42NSwwbDExLjM1LC03NGwtNzEsMGwwLC00OC4wMjFjMCwtMjAuMjQ1IDkuOTE4LC0zOS45NzkgNDEuNzE5LC0zOS45NzlsMzIuMjgxLDBsMCwtNjNjMCwwIC0yOS4yOTYsLTUgLTU3LjMwNSwtNWMtNTguNDc2LDAgLTk2LjY5NSwzNS40NCAtOTYuNjk1LDk5LjZsMCw1Ni40bC02NSwwbDAsNzRsNjUsMGwwLDE3OC44ODdaIi8+PC9zdmc+"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIHN0eWxlPSJmaWxsOiMyRjM1NzUiIGQ9Ik0yNTYsMGMxNDEuMjksMCAyNTYsMTE0LjcxIDI1NiwyNTZjMCwxNDEuMjkgLTExNC43MSwyNTYgLTI1NiwyNTZjLTE0MS4yOSwwIC0yNTYsLTExNC43MSAtMjU2LC0yNTZjMCwtMTQxLjI5IDExNC43MSwtMjU2IDI1NiwtMjU2Wm0wLDk2Yy00My40NTMsMCAtNDguOTAyLDAuMTg0IC02NS45NjgsMC45NjNjLTE3LjAzLDAuNzc3IC0yOC42NjEsMy40ODIgLTM4LjgzOSw3LjQzN2MtMTAuNTIxLDQuMDg5IC0xOS40NDQsOS41NiAtMjguMzM5LDE4LjQ1NWMtOC44OTUsOC44OTUgLTE0LjM2NiwxNy44MTggLTE4LjQ1NSwyOC4zMzljLTMuOTU1LDEwLjE3NyAtNi42NTksMjEuODA4IC03LjQzNywzOC44MzhjLTAuNzc4LDE3LjA2NiAtMC45NjIsMjIuNTE1IC0wLjk2Miw2NS45NjhjMCw0My40NTMgMC4xODQsNDguOTAyIDAuOTYyLDY1Ljk2OGMwLjc3OCwxNy4wMyAzLjQ4MiwyOC42NjEgNy40MzcsMzguODM4YzQuMDg5LDEwLjUyMSA5LjU2LDE5LjQ0NCAxOC40NTUsMjguMzRjOC44OTUsOC44OTUgMTcuODE4LDE0LjM2NiAyOC4zMzksMTguNDU1YzEwLjE3OCwzLjk1NCAyMS44MDksNi42NTkgMzguODM5LDcuNDM2YzE3LjA2NiwwLjc3OSAyMi41MTUsMC45NjMgNjUuOTY4LDAuOTYzYzQzLjQ1MywwIDQ4LjkwMiwtMC4xODQgNjUuOTY4LC0wLjk2M2MxNy4wMywtMC43NzcgMjguNjYxLC0zLjQ4MiAzOC44MzgsLTcuNDM2YzEwLjUyMSwtNC4wODkgMTkuNDQ0LC05LjU2IDI4LjM0LC0xOC40NTVjOC44OTUsLTguODk2IDE0LjM2NiwtMTcuODE5IDE4LjQ1NSwtMjguMzRjMy45NTQsLTEwLjE3NyA2LjY1OSwtMjEuODA4IDcuNDM2LC0zOC44MzhjMC43NzksLTE3LjA2NiAwLjk2MywtMjIuNTE1IDAuOTYzLC02NS45NjhjMCwtNDMuNDUzIC0wLjE4NCwtNDguOTAyIC0wLjk2MywtNjUuOTY4Yy0wLjc3NywtMTcuMDMgLTMuNDgyLC0yOC42NjEgLTcuNDM2LC0zOC44MzhjLTQuMDg5LC0xMC41MjEgLTkuNTYsLTE5LjQ0NCAtMTguNDU1LC0yOC4zMzljLTguODk2LC04Ljg5NSAtMTcuODE5LC0xNC4zNjYgLTI4LjM0LC0xOC40NTVjLTEwLjE3NywtMy45NTUgLTIxLjgwOCwtNi42NiAtMzguODM4LC03LjQzN2MtMTcuMDY2LC0wLjc3OSAtMjIuNTE1LC0wLjk2MyAtNjUuOTY4LC0wLjk2M1ptMCwyOC44MjljNDIuNzIyLDAgNDcuNzgyLDAuMTYzIDY0LjY1NCwwLjkzM2MxNS42LDAuNzEyIDI0LjA3MSwzLjMxOCAyOS43MDksNS41MDljNy40NjksMi45MDIgMTIuNzk5LDYuMzcgMTguMzk3LDExLjk2OWM1LjYsNS41OTggOS4wNjcsMTAuOTI5IDExLjk2OSwxOC4zOTdjMi4xOTEsNS42MzggNC43OTgsMTQuMTA5IDUuNTA5LDI5LjcwOWMwLjc3LDE2Ljg3MiAwLjkzMywyMS45MzIgMC45MzMsNjQuNjU0YzAsNDIuNzIyIC0wLjE2Myw0Ny43ODIgLTAuOTMzLDY0LjY1NGMtMC43MTEsMTUuNiAtMy4zMTgsMjQuMDcxIC01LjUwOSwyOS43MDljLTIuOTAyLDcuNDY5IC02LjM2OSwxMi43OTkgLTExLjk2OSwxOC4zOTdjLTUuNTk4LDUuNiAtMTAuOTI4LDkuMDY3IC0xOC4zOTcsMTEuOTY5Yy01LjYzOCwyLjE5MSAtMTQuMTA5LDQuNzk4IC0yOS43MDksNS41MDljLTE2Ljg2OSwwLjc3IC0yMS45MjksMC45MzMgLTY0LjY1NCwwLjkzM2MtNDIuNzI1LDAgLTQ3Ljc4NCwtMC4xNjMgLTY0LjY1NCwtMC45MzNjLTE1LjYsLTAuNzExIC0yNC4wNzEsLTMuMzE4IC0yOS43MDksLTUuNTA5Yy03LjQ2OSwtMi45MDIgLTEyLjc5OSwtNi4zNjkgLTE4LjM5OCwtMTEuOTY5Yy01LjU5OSwtNS41OTggLTkuMDY2LC0xMC45MjggLTExLjk2OCwtMTguMzk3Yy0yLjE5MSwtNS42MzggLTQuNzk4LC0xNC4xMDkgLTUuNTEsLTI5LjcwOWMtMC43NywtMTYuODcyIC0wLjkzMiwtMjEuOTMyIC0wLjkzMiwtNjQuNjU0YzAsLTQyLjcyMiAwLjE2MiwtNDcuNzgyIDAuOTMyLC02NC42NTRjMC43MTIsLTE1LjYgMy4zMTksLTI0LjA3MSA1LjUxLC0yOS43MDljMi45MDIsLTcuNDY4IDYuMzY5LC0xMi43OTkgMTEuOTY4LC0xOC4zOTdjNS41OTksLTUuNTk5IDEwLjkyOSwtOS4wNjcgMTguMzk4LC0xMS45NjljNS42MzgsLTIuMTkxIDE0LjEwOSwtNC43OTcgMjkuNzA5LC01LjUwOWMxNi44NzIsLTAuNzcgMjEuOTMyLC0wLjkzMyA2NC42NTQsLTAuOTMzWm0wLDQ5LjAwOWMtNDUuMzc3LDAgLTgyLjE2MiwzNi43ODUgLTgyLjE2Miw4Mi4xNjJjMCw0NS4zNzcgMzYuNzg1LDgyLjE2MiA4Mi4xNjIsODIuMTYyYzQ1LjM3NywwIDgyLjE2MiwtMzYuNzg1IDgyLjE2MiwtODIuMTYyYzAsLTQ1LjM3NyAtMzYuNzg1LC04Mi4xNjIgLTgyLjE2MiwtODIuMTYyWm0wLDEzNS40OTVjLTI5LjQ1NSwwIC01My4zMzMsLTIzLjg3OCAtNTMuMzMzLC01My4zMzNjMCwtMjkuNDU1IDIzLjg3OCwtNTMuMzMzIDUzLjMzMywtNTMuMzMzYzI5LjQ1NSwwIDUzLjMzMywyMy44NzggNTMuMzMzLDUzLjMzM2MwLDI5LjQ1NSAtMjMuODc4LDUzLjMzMyAtNTMuMzMzLDUzLjMzM1ptMTA0LjYwOSwtMTM4Ljc0MWMwLDEwLjYwNCAtOC41OTcsMTkuMTk5IC0xOS4yMDEsMTkuMTk5Yy0xMC42MDMsMCAtMTkuMTk5LC04LjU5NSAtMTkuMTk5LC0xOS4xOTljMCwtMTAuNjA0IDguNTk2LC0xOS4yIDE5LjE5OSwtMTkuMmMxMC42MDQsMCAxOS4yMDEsOC41OTYgMTkuMjAxLDE5LjJaIi8+PC9zdmc+"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTAwJSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjEwMCUiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIHN0eWxlPSJmaWxsOiMyRjM1NzUiIGQ9Ik0yNTYsMGMxNDEuMjksMCAyNTYsMTE0LjcxIDI1NiwyNTZjMCwxNDEuMjkgLTExNC43MSwyNTYgLTI1NiwyNTZjLTE0MS4yOSwwIC0yNTYsLTExNC43MSAtMjU2LC0yNTZjMCwtMTQxLjI5IDExNC43MSwtMjU2IDI1NiwtMjU2Wm0xNTMuMzE1LDE3OC45NzhjLTMuNjgsLTEzLjc2OSAtMTQuNTIyLC0yNC42MSAtMjguMjksLTI4LjI5Yy0yNC45NTgsLTYuNjg4IC0xMjUuMDI1LC02LjY4OCAtMTI1LjAyNSwtNi42ODhjMCwwIC0xMDAuMDY3LDAgLTEyNS4wMjUsNi42ODhjLTEzLjc2NSwzLjY4IC0yNC42MSwxNC41MjEgLTI4LjI5LDI4LjI5Yy02LjY4NSwyNC45NTUgLTYuNjg1LDc3LjAyNCAtNi42ODUsNzcuMDI0YzAsMCAwLDUyLjA2NyA2LjY4NSw3Ny4wMmMzLjY4LDEzLjc2OSAxNC41MjUsMjQuNjE0IDI4LjI5LDI4LjI5M2MyNC45NTgsNi42ODUgMTI1LjAyNSw2LjY4NSAxMjUuMDI1LDYuNjg1YzAsMCAxMDAuMDY3LDAgMTI1LjAyNSwtNi42ODVjMTMuNzY4LC0zLjY3OSAyNC42MSwtMTQuNTI0IDI4LjI5LC0yOC4yOTNjNi42ODUsLTI0Ljk1MyA2LjY4NSwtNzcuMDIgNi42ODUsLTc3LjAyYzAsMCAwLC01Mi4wNjkgLTYuNjg1LC03Ny4wMjRabS0xODUuMzE2LDEyNS4wMjVsMCwtOTYuMDAybDgzLjEzNyw0OC4wMDFsLTgzLjEzNyw0OC4wMDFaIi8+PC9zdmc+"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOSQAADkkBuSjvGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABfDSURBVHic7d07qG3bQcbxb54iCCYm4BMx2FgkRotEzNNCBXPPVVFEgyBoKypYWNlaWdqohZVoI4gYNXjvjWIsTEyEGHxELYKVYKLxkQci12Ja7L3O3eec/ViPOcYcj9+vOux79piz+/5nrXXXXNZ1zU3LsixJfiDJe5K8M8k3J/nHJH+b5CPruv5ZAICmLMvy/UkeJ3l7km9P8u9JPpXkk0l+Y13X/3rq798MgGVZ3pzkN5N87z3X+N0kP7+u62c3vXMA4GTLsnxNkl9N8uP3/LXPJvmZdV0/+OT3DgGwLMsPJvntJG864nr/neQn13X90Nl3DABcZFmW70rye0m+7shf+fV1XX8uuQ6AZVm+Mcmnc9z4H7ya5APruv7hSXcLAFzsevxfSvL6E3/1R9Z1/eAhAD6Y5IfPuL4IAIDKLhj/5OrtgG9dkrwvyV9ccB8iAAAquXD8D37xUZJ3X3gvr0vyu8uy/NCF5wAA99ho/JPkOx4lecfltyQCAKCkDcc/Sd7+KMmbNzgoEQEAUMTG458kX/soyd9vdFgiAgBgUwXGP0n+7lGSv97wwEQEAMAmCo1/knzqUZI/T/J/Gx8sAgDgAgXHP0lefrSu62eS/HKBw0UAAJyh8Pj/zrquf3z4IqDX5eqtgLcVuJDvCQCAIxUe/39L8rZ1XT//KEnWdX01yY/l6tuBtuaVAAA4QuHx/3KSH13X9fNJ8ujw03Vd/ynJ90QEAEB1Fcb/xXVdn3zz76Ob/1UEAEB9tcc/eSYAEhEAADXtMf7JLQGQiAAAqGGv8U/uCIBEBABASXuOf3JPACQiAABK2Hv8kwcCIBEBALClFsY/OSIAEhEAAFtoZfyTIwMgEQEAcImWxj85IQASEQAA51iW5X1paPyTEwMgEQEAcIrr8X85DY1/ckYAJCIAAI7R6vgnZwZAIgIA4D4tj39yQQAkIgAAbtP6+CcXBkAiAgDgph7GP9kgABIRAABJP+OfbBQAiQgAYG49jX+yYQAkIgCAOfU2/snGAZCIAADm0uP4JwUCIBEBAMyh1/FPCgVAIgIAGFvP458UDIBEBAAwpgrj/7jk+CeFAyARAQCMpdL4f7TA2U8pHgCJCABgDKOMf1IpABIRAEDfRhr/pGIAJCIAgD6NNv5J5QBIRAAAfRlx/JMdAiARAQD0YdTxT3YKgEQEANC2kcc/2TEAEhEAQJtGH/9k5wBIRAAAbZlh/JMGAiARAQC0YZbxTxoJgEQEALCvmcY/aSgAEhEAwD5mG/+ksQBIRAAAdc04/kmDAZCIAADqmHX8k0YDIBEBAJR1Pf4vZcLxTxoOgEQEAFDGjfF/Q4Hjmx//pPEASEQAANsy/leaD4BEBACwDeP/mi4CIBEBAFzG+D+tmwBIRAAA5zH+z+sqABIRAMBpjP/tuguARAQAcBzjf7cuAyARAQDcz/jfr9sASEQAALcz/g/rOgASEQDA04z/cboPgEQEAHCl8Ph/KYOMfzJIACQiAGB2Fcb/xVHGPxkoABIRADAr43+6oQIgEQEAszH+5xkuABIRADAL43++IQMgEQEAozP+lxk2ABIRADAq43+5oQMgEQEAo1mW5b0x/hcbPgASEQAwiuvxfznG/2JTBEAiAgB6Z/y3NU0AJCIAoFfGf3tTBUAiAgB6Y/zLmC4AEhEA0AvjX86UAZCIAIDWGf+ypg2ARAQAtMr4lzd1ACQiAKA1xr+O6QMgEQEArTD+9QiAayIAYF/Gvy4BcIMIANiH8a9PADxDBADUVWH8Hxv/5wmAW4gAgDoqjf/HCpzdPQFwBxEAUJbx35cAuIcIACjD+O9PADxABABsy/i3QQAcQQQAbMP4t0MAHEkEAFzG+LdFAJxABACcx/i3RwCcSAQAnMb4t0kAnEEEABzH+LdLAJxJBADcz/i3TQBcQAQA3M74t08AXEgEADzN+PdBAGxABABcMf79EAAbEQHA7Ix/XwTAhkQAMCvj3x8BsDERAMzG+PdJABQgAoBZGP9+CYBCRAAwOuPfNwFQkAgARmX8+ycAChMBwGiM/xgEQAUiABiF8R+HAKhEBAC9M/5jEQAViQCgV8Z/PAKgMhEA9Mb4j0kA7EAEAL0w/uMSADsRAUDrjP/YBMCORADQKuM/PgGwMxEAtMb4z0EANEAEAK0w/vMQAI0QAcDejP9cBEBDRACwF+M/HwHQGBEA1LYsy3ti/KcjABokAoBarsf/lRj/6QiARokAoDTjPzcB0DARAJRi/BEAjRMBwNaMP4kA6IIIALZi/DkQAJ0QAcCljD83CYCOiADgXMafZwmAzogA4FTGn9sIgA6JAOBYxp+7CIBOiQDgIcaf+wiAjokA4C7Gn4cIgM6JAOBZFcb/BePfPwEwABEAHFQa/78scDaVCYBBiADA+HMKATAQEQDzMv6cSgAMRgTAfIw/5xAAAxIBMA/jz7kEwKBEAIzP+HMJATAwEQDjMv5cSgAMTgTAeIw/WxAAExABMA7jz1YEwCREAPTP+LMlATAREQD9Mv5sTQBMRgRAf4w/JQiACYkA6IfxpxQBMCkRAO0z/pQkACYmAqBdxp/SBMDkRAC0x/hTgwBABEBDjD+1CACSiABogfGnJgHAEyIA9nM9/i/H+FOJAOApIgDquzH+X1XgeOPPrQQAzxEBUI/xZy8CgFuJACjP+LMnAcCdRACUY/zZmwDgXiIAtmf8aYEA4EEiALZj/GmFAOAoIgAuZ/xpiQDgaCIAzmf8aY0A4CQiAE5n/GmRAOBkIgCOZ/xplQDgLCIAHlZ4/L8Y488FBABnEwFwtwrj/9j4cwkBwEVEADzP+NMDAcDFRAC8ZlmWd8f40wEBwCZEADwZ/1di/OmAAGAzIoCZGX96IwDYlAhgRsafHgkANicCmInxp1cCgCJEADMw/vRMAFCMCGBkxp/eCQCKEgGMyPgzAgFAcSKAkRh/RiEAqEIEMALjz0gEANWIAHpm/BmNAKAqEUCPjD8jEgBUJwLoifFnVAKAXYgAelBh/F8w/uxFALAbEUDLKo3/xwucDUcRAOxKBNAi488MBAC7EwG0xPgzCwFAE0QALTD+zEQA0AwRwJ6MP7MRADRFBLAH48+MBADNEQHUZPyZlQCgSSKAGow/MxMANEsEUJLxZ3YCgKaJAEow/iAA6IAIYEvGH64IALogAtiC8YfXCAC6IQK4hPGHpwkAuiICOIfxh+cJALojAjiF8YfbCQC6JAI4hvGHuwkAuiUCuI/xh/sJALomAriN8YeHCQC6JwK4yfjDcQQAQxABJMYfTiEAGIYImJvxh9MIAIYiAuZk/OF0AoDhiIC5GH84jwBgSCJgDsYfzicAGJYIGJvxh8sIAIYmAsZk/OFyAoDhiYCxGH/YhgBgCiJgDMYftiMAmIYI6Jvxh20JAKYiAvpk/GF7AoDpiIC+GH8oQwAwJRHQB+MP5QgApiUC2rYsy7ti/KEYAcDURECbrsf/wzH+UIwAYHoioC3GH+oQABAR0ArjD/UIALgmAvZl/KEuAQA3iIB9GH+oTwDAM0RAXcYf9iEA4BYioA7jD/sRAHAHEVCW8Yd9CQC4hwgow/jD/gQAPEAEbMv4QxsEABxBBGzD+EM7BAAcSQRcpsL4v9/4w/EEAJxABJyn0vh/osDZMCwBACcSAacx/tAmAQBnEAHHMf7QLgEAZxIB9zP+0DYBABcQAbcz/tA+AQAXEgFPM/7QBwEAGxABV4w/9EMAwEZmjwDjD30RALChWSPA+EN/BABsbLYIMP7QJwEABcwSAcYf+iUAoJDRI8D4Q98EABQ0agQYf+ifAIDCRosA4w9jEABQwSgRYPxhHAIAKuk9Aow/jEUAQEW9RoDxh/EIAKistwi4Hv9XYvxhKAIAdtBLBNwY/zdefFfPM/6wIwEAO2k9Aow/jE0AwI5ajQDjD+MTALCz1iLA+MMcBAA0oJUIMP4wDwEAjdg7Aow/zEUAQEP2igDjD/MRANCY2hFg/GFOy7que98DcItlWd6S5CNJvqHA8a8m+UCSz8X4w5QEADSsQgT8b3zDH0xJAEDjCkdACV9I8oLxh7b5DAA0rvBnArZm/KETAgA60EkEGH/oiACATjQeAcYfOiMAoCONRoDxhw4JAOhMYxFg/KFTAgA61EgEGH/omACATu0cAcYfOicAoGM7RYDxhwEIAOhc5Qgw/jAIAQADuBEBnyt4mS/G+MMwBACM42uSfGXB878iydcXPB+oSADAAJZl+a4kLyV5fcHLPPcoYaBfAgA6V2n8D0QADEIAQMcqj/+BCIABCADo1E7jfyACoHMCADq08/gfiADomACAzjQy/gciADolAKAjjY3/gQiADgkA6ESj438gAqAzAgA60Pj4H4gA6IgAgMZ1Mv4HIgA6IQCgYYXH/8sp8+wAEQAdEADQqArj/2KS706ZpwiKAGicAIAG1Rj/dV3/ovCjhEUANEwAQGNqjf/hByIA5iQAoCG1x/9ABMB8BAA0Yq/xPxABMBcBAA3Ye/wPRADMQwDAzloZ/wMRAHMQALCj1sb/QATA+AQA7KTV8T8QATA2AQA7aH38D0QAjEsAQGXLsrwvHYz/gQiAMQkAqOh6/F9OJ+N/IAJgPAIAKul1/A9EAIxFAEAFvY//gQiAcQgAKGyU8T8QATAGAQAFjTb+ByIA+icAoJBRx/9ABEDfBAAUMPr4H4gA6JcAgI3NMv4HIgD6JABgQ7ON/4EIgP4IANjIrON/IAKgLwIANjD7+B+IAOiHAIALVRj/xz2M/4EIgD4IALhApfH/aIGzixIB0D4BAGcy/vcTAdA2AQBnMP7HEQHQLgEAJzL+pxEB0CYBACcw/ucRAdAeAQBHMv6XEQHQFgEARzD+2xAB0A4BAA8w/tsSAdAGAQD3MP5liADYnwCAOxj/skQA7EsAwC2Mfx0iAPYjAOAZxr8uEQD7EABwg/HfhwiA+gQAXLse/5di/HchAqAuAQB5avzfUOB4438kEQD1CACmZ/zbIgKgDgHA1Ix/m0QAlCcAmJbxb5sIgLIEAFMy/n0QAVCOAGA6xr8vIgDKEABMxfj3SQTA9gQA0zD+fRMBsC0BwBSM/xhEAGxHADA84z8WEQDbEAAMrfD4fynGfxciAC4nABhWhfF/0fjvRwTAZQQAQzL+cxABcD4BwHCM/1xEAJxHADAU4z8nEQCnEwAMw/jPTQTAaQQAQzD+JCIATiEA6N6yLO+N8eeaCIDjCAC6dj3+L8f4c4MIgIcJALpl/LmPCID7CQC6ZPw5hgiAuwkAumP8OYUIgNsJALpi/DmHCIDnCQC6Yfy5hAiApwkAumD82YIIgNcIAJpn/NmSCIArAoCmGX9KEAEgAGiY8ackEcDsBABNMv7UIAKYmQCgORXG/7Hx50AEMCsBQFMqjf/HCpxNx0QAMxIANMP4sycRwGwEAE0w/rRABDATAcDujD8tEQHMQgCwK+NPi0QAMxAA7Mb40zIRwOgEALsw/vRABDAyAUB1xp+eiABGJQCoyvjTIxHAiAQA1Rh/eiYCGI0AoArjzwhEACMRABRn/BmJCGAUAoCijD8jEgGMQABQjPFnZCKA3gkAijD+zEAE0DMBwOaMPzMRAfRKALAp48+MRAA9EgBsxvgzMxFAbwQAmzD+IALoiwDgYsYfXiMC6IUA4CLGH54nAuiBAOBsxh/uJgJonQDgLMYfHiYCaJkA4GTGH44nAmiVAOAkxh9OJwJokQDgaMYfzicCaI0A4CjGHy4nAmiJAOBBxh+2IwJohQDgXsYfticCaIEA4E7GH8oRAexNAHAr4w/liQD2JAB4jvGHekQAexEAPGVZlvfE+ENVIoA9CACeuB7/V2L8oToRQG0CgCTGH1ogAqhJAGD8oSEigFoEwOSMP7RHBFCDAJiY8Yd2iQBKEwCTMv7QPhFASQJgQsYf+iECKEUATMb4Q39EACUIgIkYf+iXCGBrAmASxh/6JwLYkgCYgPGHcYgAtiIABldh/F8w/lCXCGALAmBglcb/LwucDTxABHApATAo4w/jEwFcQgAMyPjDPEQA5xIAgzH+MB8RwDkEwECMP8xLBHAqATAI4w+IAE4hAAZg/IEDEcCxBEDnjD/wLBHAMQRAx4w/cBcRwEMEQKeMP/AQEcB9BECHjD9wLBHAXQRAZ4w/cCoRwG0EQEeMP3AuEcCzBEAnjD9wKRHATQKgA8Yf2IoI4EAANM74A1sTASQCoGnGHyhFBCAAGnU9/i/H+AOFiIC5CYAG3Rj/rypwvPEHnhAB8xIAjTH+QG0iYE4CoCHGH9iLCJiPAGiE8Qf2JgLmIgAaYPyBVoiAeQiAnRl/oDUiYA4CYEfGH2iVCBifANiJ8QdaJwLGJgB2YPyBXoiAcQmAyow/0BsRMCYBUFHh8f9ijD9QiAgYjwCopML4Pzb+QEkiYCwCoALjD4xCBIxDABRm/IHRiIAxCICClmV5d4w/MCAR0D8BUMj1+L8S4w8MSgT0TQAUYPyBWYiAfgmAjRl/YDYioE8CYEPGH5iVCOiPANiI8QdmJwL6IgA2YPwBroiAfgiACxl/gKeJgD4IgAsYf4DbiYD2CYAzGX+A+4mAtgmAMxh/gOOIgHYJgBMZf4DTiIA2CYATVBj/F4w/MCIR0B4BcKRK4//xAmcDNEEEtEUAHMH4A2xDBLRDADzA+ANsSwS0QQDcw/gDlCEC9icA7mD8AcoSAfsSALcw/gB1iID9CIBnGH+AukTAPgTADcYfYB8ioD4BcM34A+xLBNQlAGL8AVohAuqZPgCMP0BbREAdUweA8Qdokwgob9oAMP4AbRMBZU0ZAMYfoA8ioJzpAsD4A/RFBJQxVQAYf4A+iYDtTRMAxh+gbyJgW1MEgPEHGIMI2M7wAWD8AcYiArYxdAAYf4AxiYDLDRsAxh9gbCLgMkMGgPEHmIMION9wAWD8AeYiAs4zVAAYf4A5iYDTDRMAxh9gbiLgNEMEgPEHIBEBp+g+AIw/ADeJgON0HQDGH4DbiICHdRsAxh+A+4iA+3UZAMYfgGOIgLt1FwDGH4BTiIDbdRUAxh+Ac4iA53UTAMuyvCvGH4AziYCndREA1+P/4Rh/AC4gAl7TfAAYfwC2JAKuNB0Axh+AEkRAwwFg/AEoafYIaDIAjD8ANcwcAc0FgPEHoKZZI6CpADD+AOxhxghoJgCMPwB7mi0CmggA4w9AC2aKgN0DwPgD0JJZImDXADD+ALRohgjYLQAqjP/7jT8A5xo9AnYJgErj/4kCZwMwkZEjoHoAGH8AejJqBFQNAOMPQI9GjIBqAWD8AejZaBFQJQCMPwAjGCkCigeA8QdgJKNEQNEAMP4AjGiECCgWAMYfgJH1HgFFAsD4AzCDniNg8wAw/gDMpNcI2DQAjD8AM+oxAjYLAOMPwMx6i4BNAsD4A0BfEXBxABh/AHhNLxFwUQAYfwB4Xg8RcHYAGH8AuFvrEXBWABh/AHhYyxFwcgBcj/8rMf4A8KBWI+CkALgx/m889UJHMP4ADKnFCDg6AIw/AJyvtQg4KgCMPwBcrqUIeDAAjD8AbKeVCLg3AIw/AGyvhQi4MwCMPwCUs3cE3BoAxh8AytszAp4LAOMPAPXsFQFPBYDxB4D69oiAZV3Xqz8sy3cm+ZMYfwDYxbIsb0nykSTfUOD4V5P86LquH0quA2BZljcl+dskby5wwS8kecH4A8DDCkfAfyd567qunz28BfBrMf4AsLvCbwe8KcmvJsmS5HGSlwpcxPgDwJkKvxLwvY+SvL/AwcYfAC5Q+JWA73mU5J0bH2r8AWADBSPgHUuuPqH/ho0ONP4AsLECbwd85lGSf9noMOMPAAUUeCXgM49y9b//Xcr4A0BBG0fApx4l+eSFhxh/AKhgwwj46JKr9///Ick3nXGA8QeAyi78TMCfruv6fY/Wdf1Skp894wDjDwA7uOCVgP9J8tPJ9cOA1nX9oyS/csIB/xHjDwC7uREBnz7yV/4zyU+s6/rPyY2nAa7r+gtJfiDJvz5wwG8leYvxB4B9XUfAO5L8Uq4e9nOXDyV527quf3D4wZOnAT75wbJ8dZKfytUXBL0rV08H/Lskf5Pk99d1/fMtbx4AuNyyLN+S5LuTfFuSt+bqH/R/leQT67o+94H//wfAUlCFl2DdUQAAAABJRU5ErkJggg=="

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/book_bike.fb718fed.jpg";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/wallTent.c82714f1.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/whitehorse.8d9adb12.jpg";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

var imagesList = {
  label: "Images",
  name: "images",
  widget: "list",
  summary: "{{fields.image}}",
  fields: [{
    label: "Image",
    name: "image",
    widget: "image"
  }],
  hint: "To avoid slowing the website, please only upload images of less than 500kb. Ideally make them as small as possible but still retaining image quality. Also, the website is generally setup to accomodate images with square dimensions, so, when possible, please crop images to be squares."
};
var linkObject = {
  label: "Link",
  name: "link",
  widget: "string",
  required: false,
  hint: "This is optional. It must be a FULL link with the http signature such as 'http://www.google.com' (easiest just to copy it from the browser)"
};

var subTitle = function subTitle(text) {
  return {
    label: text || "Sub Title",
    name: "subTitle",
    widget: "string",
    required: false
  };
}; // const requiredLinkObject = {
//   label: "Link",
//   name: "link",
//   widget: "string",
//   hint:
//     "It must be a FULL link with the http signature such as 'http://www.google.com' (easiest just to copy it from the browser)",
// };


module.exports = {
  // BACKEND for development
  backend: {
    name: "proxy",
    proxy_url: "http://localhost:8081/api/v1",
    branch: "master"
    /* optional, defaults to master */

  },
  // BACKEND for production
  // backend: {
  //   name: "proxy",
  //   proxy_url: "http://localhost:8081/api/v1",
  //   branch: "master" /* optional, defaults to master */,
  // },
  media_folder: "public/uploads",
  public_folder: "/uploads",
  collections: [{
    name: "blog",
    label: "Blog Post",
    folder: "src/_blog-posts",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Layout",
      name: "layout",
      widget: "hidden",
      "default": "blog"
    }, {
      label: "Publish Date And Title",
      name: "date",
      widget: "datetime"
    }, {
      label: "Article Name",
      name: "subTitle",
      widget: "string"
    }, {
      label: "Author",
      name: "author",
      widget: "string",
      required: false
    }, linkObject, {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false
    }, {
      label: "Featured Image",
      name: "thumbnail",
      widget: "image",
      hint: "This is for the thumbnail"
    }, imagesList, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }]
  }, {
    name: "events",
    label: "Events",
    folder: "src/_events",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Layout",
      name: "layout",
      widget: "hidden",
      "default": "event"
    }, {
      label: "Event Date and Title",
      name: "date",
      widget: "datetime",
      dateFormat: "DD MMMM YYYY",
      timeFormat: "h:mm a"
    }, {
      label: "Event Name",
      name: "subTitle",
      widget: "string"
    }, imagesList, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }]
  }, {
    name: "outreach-projects",
    label: "Outreach Projects",
    folder: "src/_outreach-projects",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }, imagesList]
  }, {
    name: "rotating-words",
    label: "Rotating Words",
    folder: "src/_rotating-words",
    fields: [{
      label: "Words",
      hint: "Must be comma separated",
      name: "words",
      widget: "string"
    }]
  }, {
    name: "job-opportunities",
    label: "Job Opportunities",
    folder: "src/_job-opportunities",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "PDF",
      name: "pdf",
      widget: "file"
    }]
  }, {
    name: "statements",
    label: "Statements",
    folder: "src/_statements",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string",
      hint: "keep the title in the '2011-2012' format."
    }, {
      label: "PDF",
      name: "pdf",
      widget: "file"
    }, {
      label: "Statement year",
      name: "statementYear",
      widget: "datetime",
      dateFormat: "YYYY"
    }]
  }, {
    name: "announcements",
    label: "Announcements",
    folder: "src/_announcements",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, linkObject, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }, {
      label: "Display Announcement",
      name: "displayAnnouncement",
      widget: "boolean",
      "default": false
    }]
  }, {
    name: "communityInitiatives",
    label: "Community Initiatives",
    folder: "src/_community-initiatives",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, subTitle(), linkObject, {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false
    }, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }, imagesList]
  }, {
    name: "staff",
    label: "Staff",
    folder: "src/_staff",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Name",
      name: "name",
      widget: "string"
    }, {
      label: "Image",
      name: "image",
      widget: "image",
      required: false
    }, {
      label: "Role",
      name: "role",
      widget: "string"
    }, {
      label: "Bio",
      name: "bio",
      widget: "markdown"
    }]
  }, {
    name: "board",
    label: "Board",
    folder: "src/_board",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Name",
      name: "name",
      widget: "string"
    }, {
      label: "Location",
      name: "location",
      widget: "string"
    }, {
      label: "Role",
      name: "role",
      widget: "string"
    }]
  }, {
    name: "highlightedProjects",
    label: "Highlighted Projects",
    folder: "src/_highlighted-projects",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, linkObject, {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false
    }, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }, {
      label: "Image",
      name: "image",
      widget: "image"
    }]
  }, {
    name: "onlineTools",
    label: "Online Tools",
    folder: "src/_online-tools",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, linkObject, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }, {
      label: "Image",
      name: "image",
      widget: "image"
    }]
  }, {
    name: "flc",
    label: "FLC",
    folder: "src/_flc",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "Sub Title",
      name: "subTitle",
      widget: "string"
    }, linkObject, {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false
    }, imagesList, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }]
  }, {
    name: "imaginationLibrary",
    label: "Imagination Library",
    folder: "src/_imagination-library",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "Sub Title",
      name: "subTitle",
      widget: "string"
    }, linkObject, {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false
    }, imagesList, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }]
  }, {
    name: "aboutCommunity",
    label: "About Community Initiatives",
    folder: "src/_about-community",
    create: false,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "Sub Title",
      name: "subTitle",
      widget: "string"
    }, linkObject, {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false
    }, imagesList, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }]
  }, {
    name: "financialLiteracy",
    label: "Financial Literacy",
    folder: "src/_financial-literacy",
    create: false,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "Sub Title",
      name: "subTitle",
      widget: "string"
    }, linkObject, {
      label: "Link Text",
      name: "linkText",
      widget: "string",
      required: false
    }, imagesList, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }]
  }, {
    name: "supporters",
    label: "Supporters",
    folder: "src/_supporters",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, imagesList]
  }, {
    name: "familyResources",
    label: "Family Literacy Resources",
    folder: "src/_family-resources",
    create: true,
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
    fields: [{
      label: "Title",
      name: "title",
      widget: "string"
    }, {
      label: "File",
      name: "file",
      widget: "file"
    }, {
      label: "Body",
      name: "body",
      widget: "markdown"
    }, {
      label: "Image",
      name: "image",
      widget: "image"
    }]
  }]
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("@emotion/cache");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/tombstones_banner.9f2e0d8c.jpg";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/yukon_river_banner.2659667a.jpg";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/klondike_banner.4756307c.jpg";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/dempster_sky_banner.1d4fff11.jpg";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/dawson_sky_banner.c9106286.jpg";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-elastic-carousel");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/kayaking.5d97f03f.jpg";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("remove-markdown");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pop_band.cb63c777.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/whatWeDoA.835c5fd3.jpg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/whatWeDoB.e0043eb3.jpg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(88);
__webpack_require__(90);
module.exports = __webpack_require__(98);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(89)["default"];

var _require = __webpack_require__(43),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-emotion",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-styled-components",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(43),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(91),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);













































Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.jsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.jsx */).then(__webpack_require__.bind(null, 46))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.jsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(46);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.jsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.jsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Home",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/Home */).then(__webpack_require__.bind(null, 56))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(56);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Home";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/Home';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Contact",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/Contact */).then(__webpack_require__.bind(null, 47))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(47);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Contact";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/Contact';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/About",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/About */).then(__webpack_require__.bind(null, 48))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(48);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/About";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/About';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/About/Approach",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/About/Approach */).then(__webpack_require__.bind(null, 49))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/About/Approach');
  },
  resolve: function resolve() {
    return /*require.resolve*/(49);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/About/Approach";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/About/Approach';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/About/Team",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/About/Team');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/About/Team";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/About/Team';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/About/Supporters",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/About/Supporters');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/About/Supporters";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/About/Supporters';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/About/Opportunities",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/About/Opportunities */).then(__webpack_require__.bind(null, 50))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/About/Opportunities');
  },
  resolve: function resolve() {
    return /*require.resolve*/(50);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/About/Opportunities";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/About/Opportunities';
var t_8 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/About/Statements",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/About/Statements */).then(__webpack_require__.bind(null, 51))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/About/Statements');
  },
  resolve: function resolve() {
    return /*require.resolve*/(51);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/About/Statements";
  }
}), universalOptions);
t_8.template = '__react_static_root__/src/About/Statements';
var t_9 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Family",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/Family */).then(__webpack_require__.bind(null, 52))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Family');
  },
  resolve: function resolve() {
    return /*require.resolve*/(52);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Family";
  }
}), universalOptions);
t_9.template = '__react_static_root__/src/Family';
var t_10 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Family/Outreach",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 25))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Family/Outreach');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Family/Outreach";
  }
}), universalOptions);
t_10.template = '__react_static_root__/src/Family/Outreach';
var t_11 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Family/FLC",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Family/FLC');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Family/FLC";
  }
}), universalOptions);
t_11.template = '__react_static_root__/src/Family/FLC';
var t_12 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Family/Resources",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/Family/Resources */).then(__webpack_require__.bind(null, 53))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Family/Resources');
  },
  resolve: function resolve() {
    return /*require.resolve*/(53);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Family/Resources";
  }
}), universalOptions);
t_12.template = '__react_static_root__/src/Family/Resources';
var t_13 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Family/Imagine",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Family/Imagine');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Family/Imagine";
  }
}), universalOptions);
t_13.template = '__react_static_root__/src/Family/Imagine';
var t_14 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Community/Initiative",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Community/Initiative');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Community/Initiative";
  }
}), universalOptions);
t_14.template = '__react_static_root__/src/Community/Initiative';
var t_15 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Community",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Community');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Community";
  }
}), universalOptions);
t_15.template = '__react_static_root__/src/Community';
var t_16 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Community/FinLit",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Community/FinLit');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Community/FinLit";
  }
}), universalOptions);
t_16.template = '__react_static_root__/src/Community/FinLit';
var t_17 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Blog/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Blog/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Blog/Post";
  }
}), universalOptions);
t_17.template = '__react_static_root__/src/Blog/Post';
var t_18 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Blog",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/Blog */).then(__webpack_require__.bind(null, 54))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Blog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(54);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Blog";
  }
}), universalOptions);
t_18.template = '__react_static_root__/src/Blog';
var t_19 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Events/Event",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Events/Event');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Events/Event";
  }
}), universalOptions);
t_19.template = '__react_static_root__/src/Events/Event';
var t_20 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/Events",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/Events */).then(__webpack_require__.bind(null, 55))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/Events');
  },
  resolve: function resolve() {
    return /*require.resolve*/(55);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/Events";
  }
}), universalOptions);
t_20.template = '__react_static_root__/src/Events'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.jsx': t_0,
  '__react_static_root__/src/Home': t_1,
  '__react_static_root__/src/Contact': t_2,
  '__react_static_root__/src/About': t_3,
  '__react_static_root__/src/About/Approach': t_4,
  '__react_static_root__/src/About/Team': t_5,
  '__react_static_root__/src/About/Supporters': t_6,
  '__react_static_root__/src/About/Opportunities': t_7,
  '__react_static_root__/src/About/Statements': t_8,
  '__react_static_root__/src/Family': t_9,
  '__react_static_root__/src/Family/Outreach': t_10,
  '__react_static_root__/src/Family/FLC': t_11,
  '__react_static_root__/src/Family/Resources': t_12,
  '__react_static_root__/src/Family/Imagine': t_13,
  '__react_static_root__/src/Community/Initiative': t_14,
  '__react_static_root__/src/Community': t_15,
  '__react_static_root__/src/Community/FinLit': t_16,
  '__react_static_root__/src/Blog/Post': t_17,
  '__react_static_root__/src/Blog': t_18,
  '__react_static_root__/src/Events/Event': t_19,
  '__react_static_root__/src/Events': t_20
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.jsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(41);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 22,
	"./": 22,
	"./index": 22,
	"./index.js": 22
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 94;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(40);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(44);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(45);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(99);

var _interopRequireDefault = __webpack_require__(100);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(20));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(101));

var React = _interopRequireWildcard(__webpack_require__(3));

var _useStaticInfo = __webpack_require__(102);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(103)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("/Users/aaronjanke/web_projects/static-ylc-v2/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);


 // Your top level component

 // Export your top level component as JSX (for static rendering)


/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(104)(module)))

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("antd/dist/antd.min.css");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(107)(false);
// Module
exports.push([module.i, "a:hover {\n  color: inherit;\n}\n\nbody {\n  color: black;\n}\n", ""]);



/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(netlify_cms_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2);
/* harmony import */ var _Blog_Post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23);
/* harmony import */ var _Events_Event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(24);
/* harmony import */ var _Family_Outreach__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25);
/* harmony import */ var _Home_Announcement__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34);
/* harmony import */ var _Community_Initiative__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26);
/* harmony import */ var _About_Team__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(27);
/* harmony import */ var _shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18);
/* harmony import */ var _Family_FLC__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(28);
/* harmony import */ var _Family_Imagine__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(29);
/* harmony import */ var _Community__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(30);
/* harmony import */ var _Community_FinLit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(31);
/* harmony import */ var _About_Supporters__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(32);



function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











// Be sure to NOT import componenent with ROUTE data (i.e. the HOC).














var ComponentContainer = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "etlk5yw0"
})( true ? {
  name: "7w6khc",
  styles: "padding-top:20px;"
} : undefined);

if (typeof window !== "undefined") {
  window.CMS_MANUAL_INIT = true;
}

var DataAndStyleInjection = function DataAndStyleInjection(previewProps, Component, dataName, isContained) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      var _document = previewProps.document;

      var script = _document.createElement("script");

      script.src = "https://unpkg.com/alpinejs@2.5.0/dist/alpine.js";

      _document.head.appendChild(script);

      var link1 = _document.createElement("link");

      link1.href = "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap";
      link1.rel = "stylesheet";

      _document.head.appendChild(link1);

      var link2 = _document.createElement("link");

      link2.href = "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;1,400;1,700&display=swap";
      link2.rel = "stylesheet";

      _document.head.appendChild(link2);
    }
  }, [previewProps]);

  if (typeof document !== "undefined" && typeof window !== "undefined") {
    var _iframe$contentDocume;

    var iframe = typeof document !== "undefined" ? document.getElementsByTagName("iframe")[0] : {};
    var iframeHead = (iframe === null || iframe === void 0 ? void 0 : (_iframe$contentDocume = iframe.contentDocument) === null || _iframe$contentDocume === void 0 ? void 0 : _iframe$contentDocume.head) || "noIframeHead";
    var cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_6___default()({
      container: iframeHead
    });
    var entry = previewProps.entry;

    var data = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, dataName, entry.get("data").toJS());

    var ContainedComponent = function ContainedComponent(_ref) {
      var data = _ref.data;

      if (isContained) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_shared_Layout__WEBPACK_IMPORTED_MODULE_11__[/* MarginedContainer */ "b"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Component, data));
      } else {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Component, data);
      }
    };

    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(styled_components__WEBPACK_IMPORTED_MODULE_10__["StyleSheetManager"], {
      target: iframeHead
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["CacheProvider"], {
      value: cache
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_theme__WEBPACK_IMPORTED_MODULE_9__[/* Global */ "a"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(emotion_theming__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_9__[/* theme */ "e"]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(ComponentContainer, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(ContainedComponent, {
      data: data
    })))));
  }
};

var NetlifyCMS = function NetlifyCMS(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (typeof document !== "undefined" && typeof window !== "undefined") {
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("events", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Events_Event__WEBPACK_IMPORTED_MODULE_13__["Event"], "event");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("blog", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Blog_Post__WEBPACK_IMPORTED_MODULE_12__["Post"], "post");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("outreach-projects", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Family_Outreach__WEBPACK_IMPORTED_MODULE_14__["OutreachProject"], "project");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("announcements", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Home_Announcement__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], "announcement");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("communityInitiatives", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Community_Initiative__WEBPACK_IMPORTED_MODULE_16__["Initiative"], "initiative");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("staff", function (previewProps) {
        return DataAndStyleInjection(previewProps, _About_Team__WEBPACK_IMPORTED_MODULE_17__["StaffMember"], "staff");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("highlightedProjects", function (previewProps) {
        return DataAndStyleInjection(previewProps, _shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], "project", true);
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("onlineTools", function (previewProps) {
        return DataAndStyleInjection(previewProps, _shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], "project", true);
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("flc", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Family_FLC__WEBPACK_IMPORTED_MODULE_19__["default"], "flc");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("imaginationLibrary", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Family_Imagine__WEBPACK_IMPORTED_MODULE_20__["Imagine"], "imaginationLibrary");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("aboutCommunity", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Community__WEBPACK_IMPORTED_MODULE_21__["AboutCommunity"], "aboutCommunity");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("financialLiteracy", function (previewProps) {
        return DataAndStyleInjection(previewProps, _Community_FinLit__WEBPACK_IMPORTED_MODULE_22__["FinLit"], "financialLiteracy");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("supporters", function (previewProps) {
        return DataAndStyleInjection(previewProps, _About_Supporters__WEBPACK_IMPORTED_MODULE_23__["SupportersLogos"], "supObj");
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.registerPreviewTemplate("familyResources", function (previewProps) {
        return DataAndStyleInjection(previewProps, _shared_ProjectHighlight__WEBPACK_IMPORTED_MODULE_18__[/* default */ "a"], "project", true);
      });
      netlify_cms_app__WEBPACK_IMPORTED_MODULE_3___default.a.init({
        config: _config__WEBPACK_IMPORTED_MODULE_4___default.a
      });
    }
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    id: "nc-root"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_5__["withRouteData"])(NetlifyCMS)); // ReactDOM.render(<NetlifyApp />, document.getElementById("nc-root"));

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("react-text-loop");

/***/ })
/******/ ]);
});