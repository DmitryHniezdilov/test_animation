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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/nav/nav.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/nav/nav.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//onclick to burger
document.querySelector('.js-btn').onclick = function () {
  document.querySelector('.js-btn').classList.toggle('is-active');
  document.querySelector('.js-drop').classList.toggle('is-open');
};

/***/ }),

/***/ "./src/blocks/modules/slider-text/slider-text.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/slider-text/slider-text.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// <!-- Initialize Swiper -->
var sliderText = new Swiper('.slider-text', {
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true
});
var sliderImg = new Swiper(".slider-img__ratio", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  centeredSlides: true,
  allowTouchMove: false,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  },
  on: {
    init: function init() {
      this.slides[2].classList.add("js-fade");
      this.slides[3].classList.add("js-fade");
      this.slides[4].classList.add("js-fade");
    },
    transitionStart: function transitionStart() {
      var removeFade = document.querySelectorAll(".js-fade");

      if (removeFade.length > 0) {
        for (var i = 0; i < removeFade.length; i++) {
          removeFade[i].classList.remove("js-fade");
        }
      }
    },
    transitionEnd: function transitionEnd() {
      var imgActive = document.querySelectorAll(".swiper-slide-active");
      imgActive[1].classList.add("js-fade");
      var imgNext = document.querySelectorAll(".swiper-slide-next");
      imgNext[1].classList.add("js-fade");
      var imgPrev = document.querySelectorAll(".swiper-slide-prev");
      imgPrev[1].classList.add("js-fade");
    }
  }
}); // <!-- Initialize sliderImg -->

sliderText.on('slideNextTransitionStart', function () {
  sliderImg.slideNext(10, false);
});
sliderText.on('slidePrevTransitionStart', function () {
  sliderImg.slidePrev(10, false);
}); // <!-- Svg animation activate -->

var pathAnim = document.querySelector(".is-pathAnim");
sliderText.on('slideChangeTransitionStart', function () {
  pathAnim.classList.remove("is-pathAnim");
  setTimeout(function () {
    pathAnim.classList.add("is-pathAnim");
  }, 1);
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/nav/nav */ "./src/blocks/modules/nav/nav.js");
/* harmony import */ var _modules_nav_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_nav_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_slider_text_slider_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/slider-text/slider-text */ "./src/blocks/modules/slider-text/slider-text.js");
/* harmony import */ var _modules_slider_text_slider_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_text_slider_text__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
// "use strict";


/***/ })

/******/ });
//# sourceMappingURL=main.js.map