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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/models/cards.ts":
/*!*****************************!*\
  !*** ./lib/models/cards.ts ***!
  \*****************************/
/*! exports provided: CARD_TYPES, CARD_CARDINALITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_TYPES", function() { return CARD_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_CARDINALITY", function() { return CARD_CARDINALITY; });
// Enum of card types
var CARD_TYPES;
(function (CARD_TYPES) {
    CARD_TYPES["VIDEO"] = "video";
    CARD_TYPES["E_LEARNING"] = "elearning";
    CARD_TYPES["LEARNING_PLAN"] = "learning_plan";
    CARD_TYPES["PLAYLIST"] = "playlist";
})(CARD_TYPES || (CARD_TYPES = {}));
// Enum of card cardinality
var CARD_CARDINALITY;
(function (CARD_CARDINALITY) {
    CARD_CARDINALITY["SINGLE"] = "single";
    CARD_CARDINALITY["COLLECTION"] = "collection";
})(CARD_CARDINALITY || (CARD_CARDINALITY = {}));


/***/ }),

/***/ "./lib/models/carousel.ts":
/*!********************************!*\
  !*** ./lib/models/carousel.ts ***!
  \********************************/
/*! exports provided: CHUNK_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHUNK_SIZE", function() { return CHUNK_SIZE; });
// Static and hardcoded carousel chunk size
var CHUNK_SIZE = 5;


/***/ }),

/***/ "./lib/src/carousel.ts":
/*!*****************************!*\
  !*** ./lib/src/carousel.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/carousel */ "./lib/models/carousel.ts");
/* harmony import */ var _utils_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cards */ "./lib/utils/cards.ts");
/* harmony import */ var _utils_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/duration */ "./lib/utils/duration.ts");



// Main Class - Carousel library
var Carousel = /** @class */ (function () {
    /**
     * Class constructor
     * @param {ICarouselOptions} options
     */
    function Carousel(_a) {
        var container = _a.container, title = _a.title, subtitle = _a.subtitle, icon = _a.icon, maxPage = _a.maxPage, fetchCards = _a.fetchCards;
        this.container = undefined;
        this.page = 0;
        this.maxPage = 0;
        this.cards = [];
        this.fetchCards = undefined;
        this.xDown = null;
        this.yDown = null;
        if (!container) {
            throw new Error("You can't create a Carousel without a container!");
        }
        // Get container node: will be used by library for create the Carousel
        var containerNode = document.getElementById(container);
        containerNode.className = 'carousel';
        // Create Carouselheader
        var headerNode = Carousel.createHeader({
            title: title,
            subtitle: subtitle,
            icon: icon
        });
        var bodyNode = this.createBody(maxPage);
        // Append header in container node
        if (headerNode) {
            containerNode.appendChild(headerNode);
        }
        // Append body in container node
        containerNode.appendChild(bodyNode);
        this.container = containerNode;
        this.maxPage = maxPage !== null && maxPage !== void 0 ? maxPage : 0;
        // Save the fetch cards function
        this.fetchCards = fetchCards;
        // I'm ready to fetch the first cards chunk!
        this.handleFetchCards();
    }
    /**
     * Utility method fo create Carousel Header
     * If a class method does not use this, it can convert a static function
     * {@link https://eslint.org/docs/rules/class-methods-use-this}
     *
     * @param {ICarouselHeader} params
     * @param {string} params.title
     * @param {string} params.subtitle
     * @param {string} params.icon
     * @returns {HTMLDivElement|undefined}
     */
    Carousel.createHeader = function (_a) {
        var title = _a.title, subtitle = _a.subtitle, icon = _a.icon;
        // Header will be created only if one of inner elements exists
        if (!title && !subtitle && !icon) {
            return undefined;
        }
        var headerNode = document.createElement('div');
        headerNode.className = 'carouselHeader';
        /**
         * Icon element will be created only if icon exist
         * Create icon element and append it to the parent
         */
        if (icon) {
            var iconNode = document.createElement('div');
            iconNode.className = 'carouselHeader__image material-icons';
            iconNode.textContent = icon;
            headerNode.appendChild(iconNode);
        }
        // Content will be created only if one of inner elements exists
        if (title || subtitle) {
            var contentNode = document.createElement('div');
            contentNode.className = 'carouselHeaderContent';
            // Create title element and append it to the parent
            if (title) {
                var titleNode = document.createElement('p');
                titleNode.className = 'carouselHeaderContent__title';
                titleNode.textContent = title;
                contentNode.appendChild(titleNode);
            }
            // Create subtitle element and append it to the parent
            if (subtitle) {
                var subtitleNode = document.createElement('p');
                subtitleNode.className = 'carouselHeaderContent__subtitle';
                subtitleNode.textContent = subtitle;
                contentNode.appendChild(subtitleNode);
            }
            // Append content header node to the parent
            headerNode.appendChild(contentNode);
        }
        return headerNode;
    };
    /**
     * Utility method for create Carousel body
     *
     * @param {number} maxPage
     * @returns {HTMLDivElement}
     */
    Carousel.prototype.createBody = function (maxPage) {
        var _this = this;
        var bodyNode = document.createElement('div');
        bodyNode.className = 'carouselBody';
        var goAheadNode = document.createElement('div');
        var goPrevNode = document.createElement('div');
        // Create CHUNK_SIZE cards to append in the body
        for (var i = 0; i < _models_carousel__WEBPACK_IMPORTED_MODULE_0__["CHUNK_SIZE"]; i++) {
            var cardNode = Carousel.createCard();
            bodyNode.appendChild(cardNode);
        }
        goAheadNode.className = 'carouselBody__goAhead hide material-icons';
        goPrevNode.className = 'carouselBody__goPrev hide material-icons';
        goAheadNode.textContent = 'arrow_forward_ios';
        goPrevNode.textContent = 'arrow_back_ios';
        /**
         * Attach event listener to arrows elements to go ahead and prev
         * in the carousel
         */
        goAheadNode.addEventListener('click', function () { return _this.goAhead(); });
        goPrevNode.addEventListener('click', function () { return _this.goBack(); });
        // Show the ahead arrow only if exist more than one page
        if (maxPage > 0) {
            goAheadNode.classList.remove('hide');
        }
        bodyNode.appendChild(goAheadNode);
        bodyNode.appendChild(goPrevNode);
        bodyNode.addEventListener('touchstart', function (evt) { return _this.handleTouchStart(evt); });
        bodyNode.addEventListener('touchmove', function (evt) { return _this.handleTouchMove(evt); });
        return bodyNode;
    };
    /**
     * Utility method for create a card
     * If a class method does not use this, it can convert a static function
     * {@link https://eslint.org/docs/rules/class-methods-use-this}
     *
     * @returns {HTMLDivElement}
     */
    Carousel.createCard = function () {
        var cardNode = document.createElement('div');
        var imageNode = document.createElement('div');
        var typeNode = document.createElement('div');
        var durationNode = document.createElement('div');
        var bodyNode = document.createElement('div');
        var titleNode = document.createElement('div');
        var subTitleNode = document.createElement('div');
        var topLoadingNode = document.createElement('div');
        var bottomLoadingNode = document.createElement('div');
        var firstDivInnerTopLoadingNode = document.createElement('div');
        var secondDivInnerTopLoadingNode = document.createElement('div');
        var firstDivInnerBottomLoadingNode = document.createElement('div');
        var secondDivInnerBottomLoadingNode = document.createElement('div');
        var thirdDivInnerBottomLoadingNode = document.createElement('div');
        cardNode.className = 'carouselCard';
        imageNode.className = 'carouselCardImage';
        typeNode.className = 'carouselCardImage__type';
        durationNode.className = 'carouselCardImage__duration';
        bodyNode.className = 'carouselCardBody';
        titleNode.className = 'carouselCardBody__title';
        subTitleNode.className = 'carouselCardBody__subtitle';
        topLoadingNode.className = 'carouselCardBody__topLoading';
        bottomLoadingNode.className = 'carouselCardBody__bottomLoading';
        topLoadingNode.appendChild(firstDivInnerTopLoadingNode);
        topLoadingNode.appendChild(secondDivInnerTopLoadingNode);
        bottomLoadingNode.appendChild(firstDivInnerBottomLoadingNode);
        bottomLoadingNode.appendChild(secondDivInnerBottomLoadingNode);
        bottomLoadingNode.appendChild(thirdDivInnerBottomLoadingNode);
        imageNode.appendChild(typeNode);
        imageNode.appendChild(durationNode);
        bodyNode.appendChild(titleNode);
        bodyNode.appendChild(subTitleNode);
        bodyNode.appendChild(topLoadingNode);
        bodyNode.appendChild(bottomLoadingNode);
        cardNode.appendChild(imageNode);
        cardNode.appendChild(bodyNode);
        return cardNode;
    };
    /**
     * Utility method for get the arrow ahead node
     *
     * @returns {HTMLDivElement}
     */
    Carousel.prototype.getArrowAheadNode = function () {
        return this.container.getElementsByClassName('carouselBody__goAhead')[0];
    };
    /**
     * Utility method for get the arrow prev node
     *
     * @returns {HTMLDivElement}
     */
    Carousel.prototype.getArrowPrevNode = function () {
        return this.container.getElementsByClassName('carouselBody__goPrev')[0];
    };
    /**
     * Utility method for get all Carousel cards node
     *
     * @returns {HTMLCollectionOf<Element>}
     */
    Carousel.prototype.getCardsNode = function () {
        return this.container.getElementsByClassName('carouselCard');
    };
    /**
     * Utility method for get a Carousel card node based on a index
     *
     * @param {number} index
     * @returns {HTMLDivElement}
     */
    Carousel.prototype.getCardNode = function (index) {
        var cardsNode = this.getCardsNode();
        return cardsNode[index];
    };
    /**
     * Utility method for get image node by its card
     * If a class method does not use this, it can convert a static function
     * {@link https://eslint.org/docs/rules/class-methods-use-this}
     *
     * @param {HTMLDivElement} cardNode
     * @returns {HTMLDivElement}
     */
    Carousel.getCardImageNode = function (cardNode) {
        return cardNode.getElementsByClassName('carouselCardImage')[0];
    };
    /**
     * Utility method for get title node by its card
     * If a class method does not use this, it can convert a static function
     * {@link https://eslint.org/docs/rules/class-methods-use-this}
     *
     * @param {HTMLDivElement} cardNode
     * @returns {HTMLDivElement}
     */
    Carousel.getCardTitleNode = function (cardNode) {
        return cardNode.getElementsByClassName('carouselCardBody__title')[0];
    };
    /**
     * Utility method for get subtitle node by its card
     * If a class method does not use this, it can convert a static function
     * {@link https://eslint.org/docs/rules/class-methods-use-this}
     *
     * @param {HTMLDivElement} cardNode
     * @returns {HTMLDivElement}
     */
    Carousel.getCardSubtitleNode = function (cardNode) {
        return cardNode.getElementsByClassName('carouselCardBody__subtitle')[0];
    };
    /**
     * The method is responsible to increment the current page
     * number, show the prev arrow node and hide the ahead arrow node
     * based on max page supported by Carousel, and call handleFetchCards method
     * for get new data
     */
    Carousel.prototype.goAhead = function () {
        if (this.page >= this.maxPage - 1) {
            return;
        }
        ++this.page;
        var goAheadNode = this.getArrowAheadNode();
        var goPrevNode = this.getArrowPrevNode();
        goPrevNode.classList.remove('hide');
        if (this.page >= this.maxPage - 1) {
            goAheadNode.classList.add('hide');
        }
        this.handleFetchCards();
    };
    /**
     * The method is responsible to decrement the current page
     * number, show the ahead arrow node and hide the prev arrow node
     * if you are in the first page. In the end it call handleFetchCards method
     * for get new data
     */
    Carousel.prototype.goBack = function () {
        if (this.page === 0) {
            return;
        }
        --this.page;
        var goAheadNode = this.getArrowAheadNode();
        var goPrevNode = this.getArrowPrevNode();
        goAheadNode.classList.remove('hide');
        if (this.page === 0) {
            goPrevNode.classList.add('hide');
        }
        this.handleFetchCards();
    };
    /**
     * The method set card values by ICarouselCard DTO
     * in "index" position
     *
     * @param {ICarouselCard} card
     * @param {number} index
     */
    Carousel.prototype.setCard = function (card, index) {
        var _a;
        var image = card.image, type = card.type, duration = card.duration, title = card.title, subtitle = card.subtitle;
        var cardNode = this.getCardNode(index);
        var imageNode = Carousel.getCardImageNode(cardNode);
        var titleNode = Carousel.getCardTitleNode(cardNode);
        var subTitleNode = Carousel.getCardSubtitleNode(cardNode);
        if (image) {
            imageNode.style.backgroundImage = "url(" + image + ")";
        }
        if (type) {
            var parsedType = type;
            var label = (_a = _utils_cards__WEBPACK_IMPORTED_MODULE_1__["CARD_TYPES_LABELS"][parsedType]) !== null && _a !== void 0 ? _a : parsedType;
            imageNode.getElementsByClassName('carouselCardImage__type')[0].textContent = label;
        }
        if (duration) {
            var label = Object(_utils_duration__WEBPACK_IMPORTED_MODULE_2__["getLabelDuration"])(duration);
            imageNode.getElementsByClassName('carouselCardImage__duration')[0].textContent = label;
        }
        if (title) {
            titleNode.textContent = title;
        }
        if (subtitle) {
            subTitleNode.textContent = subtitle;
        }
    };
    /**
     * The method set cards values by an array of ICarouselCard DTO
     *
     * @param {ICarouselCard[]} cards
     */
    Carousel.prototype.setCards = function (cards) {
        var cardsNode = this.getCardsNode();
        for (var i = 0; i < cardsNode.length; i++) {
            this.setCard(cards[i], i);
        }
    };
    /**
     * The method handle the fetch cards: it's a wrapper to call
     * when you require new carousel data.
     * It use the cache data if exist it, or call the fetchCards
     * method for get new data.
     */
    Carousel.prototype.handleFetchCards = function () {
        var _this = this;
        // Use cache!
        if (this.cards[this.page]) {
            this.setCards(this.cards[this.page]);
            return;
        }
        // Add carousel loading state!
        this.container.classList.add('carousel--loading');
        /**
         * Invoke the fetchCards method and use the list of
         * cards returned for:
         * 1) Save it in the cache based on the current active page
         * 2) Call setCards method for set cards values
         * 3) Remove carousel loading state
         *
         * Yeah, i know: what happen if the Promise is rejected?
         * I thought about it, and my answer is: everything and nothing.
         * So, maybe is better not implement a catch/finally without
         * any other informations!
         */
        this.fetchCards().then(function (cards) {
            _this.cards[_this.page] = cards;
            _this.setCards(cards);
            _this.container.classList.remove('carousel--loading');
        });
    };
    /**
     * The method handle the touch start event
     *
     * @param {TouchEvent} evt
     */
    Carousel.prototype.handleTouchStart = function (evt) {
        this.xDown = evt.touches[0].clientX;
        this.yDown = evt.touches[0].clientY;
    };
    /**
     * The method handle touch move event.
     * With some differences, i can know if:
     *
     * - You swipe on right
     * - You swipe on left
     * - You swipe up
     * - You swipe down
     *
     * @param {TouchEvent} evt
     */
    Carousel.prototype.handleTouchMove = function (evt) {
        if (!this.xDown || !this.yDown) {
            return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        var xDiff = this.xDown - xUp;
        var yDiff = this.yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                // Swipe on left
                this.goAhead();
            }
            else {
                // Swipe on right
                this.goBack();
            }
        }
        else if (yDiff > 0) {
            // Swipe up
        }
        else {
            // Swipe down
        }
        // Reset values
        this.xDown = null;
        this.yDown = null;
    };
    return Carousel;
}());
// Carousel is now available on window global object 🎉️!
window.Carousel = Carousel;


/***/ }),

/***/ "./lib/src/styles/index.scss":
/*!***********************************!*\
  !*** ./lib/src/styles/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./lib/utils/cards.ts":
/*!****************************!*\
  !*** ./lib/utils/cards.ts ***!
  \****************************/
/*! exports provided: CARD_TYPES_LABELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_TYPES_LABELS", function() { return CARD_TYPES_LABELS; });
/* harmony import */ var _models_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/cards */ "./lib/models/cards.ts");
var _a;

// Get card types labels!
var CARD_TYPES_LABELS = (_a = {},
    _a[_models_cards__WEBPACK_IMPORTED_MODULE_0__["CARD_TYPES"].VIDEO] = 'Video',
    _a[_models_cards__WEBPACK_IMPORTED_MODULE_0__["CARD_TYPES"].E_LEARNING] = 'Elearning',
    _a[_models_cards__WEBPACK_IMPORTED_MODULE_0__["CARD_TYPES"].LEARNING_PLAN] = 'Learning Plan',
    _a[_models_cards__WEBPACK_IMPORTED_MODULE_0__["CARD_TYPES"].PLAYLIST] = 'Playlist',
    _a);


/***/ }),

/***/ "./lib/utils/duration.ts":
/*!*******************************!*\
  !*** ./lib/utils/duration.ts ***!
  \*******************************/
/*! exports provided: getLabelDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelDuration", function() { return getLabelDuration; });
/* eslint-disable import/prefer-default-export */
/**
 * The function transform a duration in a human-readable label
 *
 * @param {number} duration
 * @returns {string}
 */
function getLabelDuration(duration) {
    var hours = Math.floor(((duration % 31536000) % 86400) / 3600);
    var minutes = Math.floor((((duration % 31536000) % 86400) % 3600) / 60);
    var seconds = (((duration % 31536000) % 86400) % 3600) % 60;
    var formattedSeconds = String(seconds).length === 1 ? seconds + "0" : seconds;
    if (hours === 0) {
        return minutes + ":" + formattedSeconds;
    }
    return hours + "h" + (minutes && " " + minutes + "m") + (seconds && " " + seconds + "s");
}


/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./lib/src/carousel.ts ./lib/src/styles/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib/src/carousel.ts */"./lib/src/carousel.ts");
module.exports = __webpack_require__(/*! ./lib/src/styles/index.scss */"./lib/src/styles/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL21vZGVscy9jYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvbW9kZWxzL2Nhcm91c2VsLnRzIiwid2VicGFjazovLy8uL2xpYi9zcmMvY2Fyb3VzZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9kYjVmIiwid2VicGFjazovLy8uL2xpYi91dGlscy9jYXJkcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvZHVyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQ2pDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRD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QVU7QUFDakIsT0FBTyx3REFBVTtBQUNqQjs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8vIEVudW0gb2YgY2FyZCB0eXBlc1xuZXhwb3J0IHZhciBDQVJEX1RZUEVTO1xuKGZ1bmN0aW9uIChDQVJEX1RZUEVTKSB7XG4gICAgQ0FSRF9UWVBFU1tcIlZJREVPXCJdID0gXCJ2aWRlb1wiO1xuICAgIENBUkRfVFlQRVNbXCJFX0xFQVJOSU5HXCJdID0gXCJlbGVhcm5pbmdcIjtcbiAgICBDQVJEX1RZUEVTW1wiTEVBUk5JTkdfUExBTlwiXSA9IFwibGVhcm5pbmdfcGxhblwiO1xuICAgIENBUkRfVFlQRVNbXCJQTEFZTElTVFwiXSA9IFwicGxheWxpc3RcIjtcbn0pKENBUkRfVFlQRVMgfHwgKENBUkRfVFlQRVMgPSB7fSkpO1xuLy8gRW51bSBvZiBjYXJkIGNhcmRpbmFsaXR5XG5leHBvcnQgdmFyIENBUkRfQ0FSRElOQUxJVFk7XG4oZnVuY3Rpb24gKENBUkRfQ0FSRElOQUxJVFkpIHtcbiAgICBDQVJEX0NBUkRJTkFMSVRZW1wiU0lOR0xFXCJdID0gXCJzaW5nbGVcIjtcbiAgICBDQVJEX0NBUkRJTkFMSVRZW1wiQ09MTEVDVElPTlwiXSA9IFwiY29sbGVjdGlvblwiO1xufSkoQ0FSRF9DQVJESU5BTElUWSB8fCAoQ0FSRF9DQVJESU5BTElUWSA9IHt9KSk7XG4iLCIvLyBTdGF0aWMgYW5kIGhhcmRjb2RlZCBjYXJvdXNlbCBjaHVuayBzaXplXG5leHBvcnQgdmFyIENIVU5LX1NJWkUgPSA1O1xuIiwiaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL21vZGVscy9jYXJvdXNlbCc7XG5pbXBvcnQgeyBDQVJEX1RZUEVTX0xBQkVMUyB9IGZyb20gJy4uL3V0aWxzL2NhcmRzJztcbmltcG9ydCB7IGdldExhYmVsRHVyYXRpb24gfSBmcm9tICcuLi91dGlscy9kdXJhdGlvbic7XG4vLyBNYWluIENsYXNzIC0gQ2Fyb3VzZWwgbGlicmFyeVxudmFyIENhcm91c2VsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtJQ2Fyb3VzZWxPcHRpb25zfSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ2Fyb3VzZWwoX2EpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9hLmNvbnRhaW5lciwgdGl0bGUgPSBfYS50aXRsZSwgc3VidGl0bGUgPSBfYS5zdWJ0aXRsZSwgaWNvbiA9IF9hLmljb24sIG1heFBhZ2UgPSBfYS5tYXhQYWdlLCBmZXRjaENhcmRzID0gX2EuZmV0Y2hDYXJkcztcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICAgIHRoaXMubWF4UGFnZSA9IDA7XG4gICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgdGhpcy5mZXRjaENhcmRzID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnhEb3duID0gbnVsbDtcbiAgICAgICAgdGhpcy55RG93biA9IG51bGw7XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuJ3QgY3JlYXRlIGEgQ2Fyb3VzZWwgd2l0aG91dCBhIGNvbnRhaW5lciFcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IGNvbnRhaW5lciBub2RlOiB3aWxsIGJlIHVzZWQgYnkgbGlicmFyeSBmb3IgY3JlYXRlIHRoZSBDYXJvdXNlbFxuICAgICAgICB2YXIgY29udGFpbmVyTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcik7XG4gICAgICAgIGNvbnRhaW5lck5vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsJztcbiAgICAgICAgLy8gQ3JlYXRlIENhcm91c2VsaGVhZGVyXG4gICAgICAgIHZhciBoZWFkZXJOb2RlID0gQ2Fyb3VzZWwuY3JlYXRlSGVhZGVyKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHN1YnRpdGxlOiBzdWJ0aXRsZSxcbiAgICAgICAgICAgIGljb246IGljb25cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBib2R5Tm9kZSA9IHRoaXMuY3JlYXRlQm9keShtYXhQYWdlKTtcbiAgICAgICAgLy8gQXBwZW5kIGhlYWRlciBpbiBjb250YWluZXIgbm9kZVxuICAgICAgICBpZiAoaGVhZGVyTm9kZSkge1xuICAgICAgICAgICAgY29udGFpbmVyTm9kZS5hcHBlbmRDaGlsZChoZWFkZXJOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgYm9keSBpbiBjb250YWluZXIgbm9kZVxuICAgICAgICBjb250YWluZXJOb2RlLmFwcGVuZENoaWxkKGJvZHlOb2RlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXJOb2RlO1xuICAgICAgICB0aGlzLm1heFBhZ2UgPSBtYXhQYWdlICE9PSBudWxsICYmIG1heFBhZ2UgIT09IHZvaWQgMCA/IG1heFBhZ2UgOiAwO1xuICAgICAgICAvLyBTYXZlIHRoZSBmZXRjaCBjYXJkcyBmdW5jdGlvblxuICAgICAgICB0aGlzLmZldGNoQ2FyZHMgPSBmZXRjaENhcmRzO1xuICAgICAgICAvLyBJJ20gcmVhZHkgdG8gZmV0Y2ggdGhlIGZpcnN0IGNhcmRzIGNodW5rIVxuICAgICAgICB0aGlzLmhhbmRsZUZldGNoQ2FyZHMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBtZXRob2QgZm8gY3JlYXRlIENhcm91c2VsIEhlYWRlclxuICAgICAqIElmIGEgY2xhc3MgbWV0aG9kIGRvZXMgbm90IHVzZSB0aGlzLCBpdCBjYW4gY29udmVydCBhIHN0YXRpYyBmdW5jdGlvblxuICAgICAqIHtAbGluayBodHRwczovL2VzbGludC5vcmcvZG9jcy9ydWxlcy9jbGFzcy1tZXRob2RzLXVzZS10aGlzfVxuICAgICAqXG4gICAgICogQHBhcmFtIHtJQ2Fyb3VzZWxIZWFkZXJ9IHBhcmFtc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudGl0bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnN1YnRpdGxlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5pY29uXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBDYXJvdXNlbC5jcmVhdGVIZWFkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gX2EudGl0bGUsIHN1YnRpdGxlID0gX2Euc3VidGl0bGUsIGljb24gPSBfYS5pY29uO1xuICAgICAgICAvLyBIZWFkZXIgd2lsbCBiZSBjcmVhdGVkIG9ubHkgaWYgb25lIG9mIGlubmVyIGVsZW1lbnRzIGV4aXN0c1xuICAgICAgICBpZiAoIXRpdGxlICYmICFzdWJ0aXRsZSAmJiAhaWNvbikge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGVhZGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJOb2RlLmNsYXNzTmFtZSA9ICdjYXJvdXNlbEhlYWRlcic7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJY29uIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkIG9ubHkgaWYgaWNvbiBleGlzdFxuICAgICAgICAgKiBDcmVhdGUgaWNvbiBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgIHZhciBpY29uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWNvbk5vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsSGVhZGVyX19pbWFnZSBtYXRlcmlhbC1pY29ucyc7XG4gICAgICAgICAgICBpY29uTm9kZS50ZXh0Q29udGVudCA9IGljb247XG4gICAgICAgICAgICBoZWFkZXJOb2RlLmFwcGVuZENoaWxkKGljb25Ob2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDb250ZW50IHdpbGwgYmUgY3JlYXRlZCBvbmx5IGlmIG9uZSBvZiBpbm5lciBlbGVtZW50cyBleGlzdHNcbiAgICAgICAgaWYgKHRpdGxlIHx8IHN1YnRpdGxlKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnROb2RlLmNsYXNzTmFtZSA9ICdjYXJvdXNlbEhlYWRlckNvbnRlbnQnO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRpdGxlIGVsZW1lbnQgYW5kIGFwcGVuZCBpdCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgIHRpdGxlTm9kZS5jbGFzc05hbWUgPSAnY2Fyb3VzZWxIZWFkZXJDb250ZW50X190aXRsZSc7XG4gICAgICAgICAgICAgICAgdGl0bGVOb2RlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgY29udGVudE5vZGUuYXBwZW5kQ2hpbGQodGl0bGVOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzdWJ0aXRsZSBlbGVtZW50IGFuZCBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudFxuICAgICAgICAgICAgaWYgKHN1YnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1YnRpdGxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZU5vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsSGVhZGVyQ29udGVudF9fc3VidGl0bGUnO1xuICAgICAgICAgICAgICAgIHN1YnRpdGxlTm9kZS50ZXh0Q29udGVudCA9IHN1YnRpdGxlO1xuICAgICAgICAgICAgICAgIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKHN1YnRpdGxlTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHBlbmQgY29udGVudCBoZWFkZXIgbm9kZSB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBoZWFkZXJOb2RlLmFwcGVuZENoaWxkKGNvbnRlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhZGVyTm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIGZvciBjcmVhdGUgQ2Fyb3VzZWwgYm9keVxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFBhZ2VcbiAgICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XG4gICAgICovXG4gICAgQ2Fyb3VzZWwucHJvdG90eXBlLmNyZWF0ZUJvZHkgPSBmdW5jdGlvbiAobWF4UGFnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgYm9keU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9keU5vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsQm9keSc7XG4gICAgICAgIHZhciBnb0FoZWFkTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgZ29QcmV2Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBDcmVhdGUgQ0hVTktfU0laRSBjYXJkcyB0byBhcHBlbmQgaW4gdGhlIGJvZHlcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBDSFVOS19TSVpFOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYXJkTm9kZSA9IENhcm91c2VsLmNyZWF0ZUNhcmQoKTtcbiAgICAgICAgICAgIGJvZHlOb2RlLmFwcGVuZENoaWxkKGNhcmROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBnb0FoZWFkTm9kZS5jbGFzc05hbWUgPSAnY2Fyb3VzZWxCb2R5X19nb0FoZWFkIGhpZGUgbWF0ZXJpYWwtaWNvbnMnO1xuICAgICAgICBnb1ByZXZOb2RlLmNsYXNzTmFtZSA9ICdjYXJvdXNlbEJvZHlfX2dvUHJldiBoaWRlIG1hdGVyaWFsLWljb25zJztcbiAgICAgICAgZ29BaGVhZE5vZGUudGV4dENvbnRlbnQgPSAnYXJyb3dfZm9yd2FyZF9pb3MnO1xuICAgICAgICBnb1ByZXZOb2RlLnRleHRDb250ZW50ID0gJ2Fycm93X2JhY2tfaW9zJztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEF0dGFjaCBldmVudCBsaXN0ZW5lciB0byBhcnJvd3MgZWxlbWVudHMgdG8gZ28gYWhlYWQgYW5kIHByZXZcbiAgICAgICAgICogaW4gdGhlIGNhcm91c2VsXG4gICAgICAgICAqL1xuICAgICAgICBnb0FoZWFkTm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmdvQWhlYWQoKTsgfSk7XG4gICAgICAgIGdvUHJldk5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5nb0JhY2soKTsgfSk7XG4gICAgICAgIC8vIFNob3cgdGhlIGFoZWFkIGFycm93IG9ubHkgaWYgZXhpc3QgbW9yZSB0aGFuIG9uZSBwYWdlXG4gICAgICAgIGlmIChtYXhQYWdlID4gMCkge1xuICAgICAgICAgICAgZ29BaGVhZE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9XG4gICAgICAgIGJvZHlOb2RlLmFwcGVuZENoaWxkKGdvQWhlYWROb2RlKTtcbiAgICAgICAgYm9keU5vZGUuYXBwZW5kQ2hpbGQoZ29QcmV2Tm9kZSk7XG4gICAgICAgIGJvZHlOb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0KGV2dCk7IH0pO1xuICAgICAgICBib2R5Tm9kZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVUb3VjaE1vdmUoZXZ0KTsgfSk7XG4gICAgICAgIHJldHVybiBib2R5Tm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIGZvciBjcmVhdGUgYSBjYXJkXG4gICAgICogSWYgYSBjbGFzcyBtZXRob2QgZG9lcyBub3QgdXNlIHRoaXMsIGl0IGNhbiBjb252ZXJ0IGEgc3RhdGljIGZ1bmN0aW9uXG4gICAgICoge0BsaW5rIGh0dHBzOi8vZXNsaW50Lm9yZy9kb2NzL3J1bGVzL2NsYXNzLW1ldGhvZHMtdXNlLXRoaXN9XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XG4gICAgICovXG4gICAgQ2Fyb3VzZWwuY3JlYXRlQ2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNhcmROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBpbWFnZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIHR5cGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBkdXJhdGlvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIGJvZHlOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciB0aXRsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIHN1YlRpdGxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgdG9wTG9hZGluZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIGJvdHRvbUxvYWRpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBmaXJzdERpdklubmVyVG9wTG9hZGluZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIHNlY29uZERpdklubmVyVG9wTG9hZGluZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIGZpcnN0RGl2SW5uZXJCb3R0b21Mb2FkaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgc2Vjb25kRGl2SW5uZXJCb3R0b21Mb2FkaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgdGhpcmREaXZJbm5lckJvdHRvbUxvYWRpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmROb2RlLmNsYXNzTmFtZSA9ICdjYXJvdXNlbENhcmQnO1xuICAgICAgICBpbWFnZU5vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsQ2FyZEltYWdlJztcbiAgICAgICAgdHlwZU5vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsQ2FyZEltYWdlX190eXBlJztcbiAgICAgICAgZHVyYXRpb25Ob2RlLmNsYXNzTmFtZSA9ICdjYXJvdXNlbENhcmRJbWFnZV9fZHVyYXRpb24nO1xuICAgICAgICBib2R5Tm9kZS5jbGFzc05hbWUgPSAnY2Fyb3VzZWxDYXJkQm9keSc7XG4gICAgICAgIHRpdGxlTm9kZS5jbGFzc05hbWUgPSAnY2Fyb3VzZWxDYXJkQm9keV9fdGl0bGUnO1xuICAgICAgICBzdWJUaXRsZU5vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsQ2FyZEJvZHlfX3N1YnRpdGxlJztcbiAgICAgICAgdG9wTG9hZGluZ05vZGUuY2xhc3NOYW1lID0gJ2Nhcm91c2VsQ2FyZEJvZHlfX3RvcExvYWRpbmcnO1xuICAgICAgICBib3R0b21Mb2FkaW5nTm9kZS5jbGFzc05hbWUgPSAnY2Fyb3VzZWxDYXJkQm9keV9fYm90dG9tTG9hZGluZyc7XG4gICAgICAgIHRvcExvYWRpbmdOb2RlLmFwcGVuZENoaWxkKGZpcnN0RGl2SW5uZXJUb3BMb2FkaW5nTm9kZSk7XG4gICAgICAgIHRvcExvYWRpbmdOb2RlLmFwcGVuZENoaWxkKHNlY29uZERpdklubmVyVG9wTG9hZGluZ05vZGUpO1xuICAgICAgICBib3R0b21Mb2FkaW5nTm9kZS5hcHBlbmRDaGlsZChmaXJzdERpdklubmVyQm90dG9tTG9hZGluZ05vZGUpO1xuICAgICAgICBib3R0b21Mb2FkaW5nTm9kZS5hcHBlbmRDaGlsZChzZWNvbmREaXZJbm5lckJvdHRvbUxvYWRpbmdOb2RlKTtcbiAgICAgICAgYm90dG9tTG9hZGluZ05vZGUuYXBwZW5kQ2hpbGQodGhpcmREaXZJbm5lckJvdHRvbUxvYWRpbmdOb2RlKTtcbiAgICAgICAgaW1hZ2VOb2RlLmFwcGVuZENoaWxkKHR5cGVOb2RlKTtcbiAgICAgICAgaW1hZ2VOb2RlLmFwcGVuZENoaWxkKGR1cmF0aW9uTm9kZSk7XG4gICAgICAgIGJvZHlOb2RlLmFwcGVuZENoaWxkKHRpdGxlTm9kZSk7XG4gICAgICAgIGJvZHlOb2RlLmFwcGVuZENoaWxkKHN1YlRpdGxlTm9kZSk7XG4gICAgICAgIGJvZHlOb2RlLmFwcGVuZENoaWxkKHRvcExvYWRpbmdOb2RlKTtcbiAgICAgICAgYm9keU5vZGUuYXBwZW5kQ2hpbGQoYm90dG9tTG9hZGluZ05vZGUpO1xuICAgICAgICBjYXJkTm9kZS5hcHBlbmRDaGlsZChpbWFnZU5vZGUpO1xuICAgICAgICBjYXJkTm9kZS5hcHBlbmRDaGlsZChib2R5Tm9kZSk7XG4gICAgICAgIHJldHVybiBjYXJkTm9kZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIGZvciBnZXQgdGhlIGFycm93IGFoZWFkIG5vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH1cbiAgICAgKi9cbiAgICBDYXJvdXNlbC5wcm90b3R5cGUuZ2V0QXJyb3dBaGVhZE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbEJvZHlfX2dvQWhlYWQnKVswXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIGZvciBnZXQgdGhlIGFycm93IHByZXYgbm9kZVxuICAgICAqXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxuICAgICAqL1xuICAgIENhcm91c2VsLnByb3RvdHlwZS5nZXRBcnJvd1ByZXZOb2RlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2Fyb3VzZWxCb2R5X19nb1ByZXYnKVswXTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIGZvciBnZXQgYWxsIENhcm91c2VsIGNhcmRzIG5vZGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+fVxuICAgICAqL1xuICAgIENhcm91c2VsLnByb3RvdHlwZS5nZXRDYXJkc05vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbENhcmQnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIGZvciBnZXQgYSBDYXJvdXNlbCBjYXJkIG5vZGUgYmFzZWQgb24gYSBpbmRleFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxuICAgICAqL1xuICAgIENhcm91c2VsLnByb3RvdHlwZS5nZXRDYXJkTm9kZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgY2FyZHNOb2RlID0gdGhpcy5nZXRDYXJkc05vZGUoKTtcbiAgICAgICAgcmV0dXJuIGNhcmRzTm9kZVtpbmRleF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZCBmb3IgZ2V0IGltYWdlIG5vZGUgYnkgaXRzIGNhcmRcbiAgICAgKiBJZiBhIGNsYXNzIG1ldGhvZCBkb2VzIG5vdCB1c2UgdGhpcywgaXQgY2FuIGNvbnZlcnQgYSBzdGF0aWMgZnVuY3Rpb25cbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvY2xhc3MtbWV0aG9kcy11c2UtdGhpc31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGNhcmROb2RlXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxuICAgICAqL1xuICAgIENhcm91c2VsLmdldENhcmRJbWFnZU5vZGUgPSBmdW5jdGlvbiAoY2FyZE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGNhcmROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsQ2FyZEltYWdlJylbMF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZCBmb3IgZ2V0IHRpdGxlIG5vZGUgYnkgaXRzIGNhcmRcbiAgICAgKiBJZiBhIGNsYXNzIG1ldGhvZCBkb2VzIG5vdCB1c2UgdGhpcywgaXQgY2FuIGNvbnZlcnQgYSBzdGF0aWMgZnVuY3Rpb25cbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvY2xhc3MtbWV0aG9kcy11c2UtdGhpc31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGNhcmROb2RlXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxuICAgICAqL1xuICAgIENhcm91c2VsLmdldENhcmRUaXRsZU5vZGUgPSBmdW5jdGlvbiAoY2FyZE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGNhcmROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsQ2FyZEJvZHlfX3RpdGxlJylbMF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IG1ldGhvZCBmb3IgZ2V0IHN1YnRpdGxlIG5vZGUgYnkgaXRzIGNhcmRcbiAgICAgKiBJZiBhIGNsYXNzIG1ldGhvZCBkb2VzIG5vdCB1c2UgdGhpcywgaXQgY2FuIGNvbnZlcnQgYSBzdGF0aWMgZnVuY3Rpb25cbiAgICAgKiB7QGxpbmsgaHR0cHM6Ly9lc2xpbnQub3JnL2RvY3MvcnVsZXMvY2xhc3MtbWV0aG9kcy11c2UtdGhpc31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTERpdkVsZW1lbnR9IGNhcmROb2RlXG4gICAgICogQHJldHVybnMge0hUTUxEaXZFbGVtZW50fVxuICAgICAqL1xuICAgIENhcm91c2VsLmdldENhcmRTdWJ0aXRsZU5vZGUgPSBmdW5jdGlvbiAoY2FyZE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGNhcmROb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nhcm91c2VsQ2FyZEJvZHlfX3N1YnRpdGxlJylbMF07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgbWV0aG9kIGlzIHJlc3BvbnNpYmxlIHRvIGluY3JlbWVudCB0aGUgY3VycmVudCBwYWdlXG4gICAgICogbnVtYmVyLCBzaG93IHRoZSBwcmV2IGFycm93IG5vZGUgYW5kIGhpZGUgdGhlIGFoZWFkIGFycm93IG5vZGVcbiAgICAgKiBiYXNlZCBvbiBtYXggcGFnZSBzdXBwb3J0ZWQgYnkgQ2Fyb3VzZWwsIGFuZCBjYWxsIGhhbmRsZUZldGNoQ2FyZHMgbWV0aG9kXG4gICAgICogZm9yIGdldCBuZXcgZGF0YVxuICAgICAqL1xuICAgIENhcm91c2VsLnByb3RvdHlwZS5nb0FoZWFkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlID49IHRoaXMubWF4UGFnZSAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICArK3RoaXMucGFnZTtcbiAgICAgICAgdmFyIGdvQWhlYWROb2RlID0gdGhpcy5nZXRBcnJvd0FoZWFkTm9kZSgpO1xuICAgICAgICB2YXIgZ29QcmV2Tm9kZSA9IHRoaXMuZ2V0QXJyb3dQcmV2Tm9kZSgpO1xuICAgICAgICBnb1ByZXZOb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+PSB0aGlzLm1heFBhZ2UgLSAxKSB7XG4gICAgICAgICAgICBnb0FoZWFkTm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVGZXRjaENhcmRzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgbWV0aG9kIGlzIHJlc3BvbnNpYmxlIHRvIGRlY3JlbWVudCB0aGUgY3VycmVudCBwYWdlXG4gICAgICogbnVtYmVyLCBzaG93IHRoZSBhaGVhZCBhcnJvdyBub2RlIGFuZCBoaWRlIHRoZSBwcmV2IGFycm93IG5vZGVcbiAgICAgKiBpZiB5b3UgYXJlIGluIHRoZSBmaXJzdCBwYWdlLiBJbiB0aGUgZW5kIGl0IGNhbGwgaGFuZGxlRmV0Y2hDYXJkcyBtZXRob2RcbiAgICAgKiBmb3IgZ2V0IG5ldyBkYXRhXG4gICAgICovXG4gICAgQ2Fyb3VzZWwucHJvdG90eXBlLmdvQmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC0tdGhpcy5wYWdlO1xuICAgICAgICB2YXIgZ29BaGVhZE5vZGUgPSB0aGlzLmdldEFycm93QWhlYWROb2RlKCk7XG4gICAgICAgIHZhciBnb1ByZXZOb2RlID0gdGhpcy5nZXRBcnJvd1ByZXZOb2RlKCk7XG4gICAgICAgIGdvQWhlYWROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gMCkge1xuICAgICAgICAgICAgZ29QcmV2Tm9kZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVGZXRjaENhcmRzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgbWV0aG9kIHNldCBjYXJkIHZhbHVlcyBieSBJQ2Fyb3VzZWxDYXJkIERUT1xuICAgICAqIGluIFwiaW5kZXhcIiBwb3NpdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtJQ2Fyb3VzZWxDYXJkfSBjYXJkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgQ2Fyb3VzZWwucHJvdG90eXBlLnNldENhcmQgPSBmdW5jdGlvbiAoY2FyZCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgaW1hZ2UgPSBjYXJkLmltYWdlLCB0eXBlID0gY2FyZC50eXBlLCBkdXJhdGlvbiA9IGNhcmQuZHVyYXRpb24sIHRpdGxlID0gY2FyZC50aXRsZSwgc3VidGl0bGUgPSBjYXJkLnN1YnRpdGxlO1xuICAgICAgICB2YXIgY2FyZE5vZGUgPSB0aGlzLmdldENhcmROb2RlKGluZGV4KTtcbiAgICAgICAgdmFyIGltYWdlTm9kZSA9IENhcm91c2VsLmdldENhcmRJbWFnZU5vZGUoY2FyZE5vZGUpO1xuICAgICAgICB2YXIgdGl0bGVOb2RlID0gQ2Fyb3VzZWwuZ2V0Q2FyZFRpdGxlTm9kZShjYXJkTm9kZSk7XG4gICAgICAgIHZhciBzdWJUaXRsZU5vZGUgPSBDYXJvdXNlbC5nZXRDYXJkU3VidGl0bGVOb2RlKGNhcmROb2RlKTtcbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICBpbWFnZU5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBpbWFnZSArIFwiKVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICB2YXIgcGFyc2VkVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSAoX2EgPSBDQVJEX1RZUEVTX0xBQkVMU1twYXJzZWRUeXBlXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogcGFyc2VkVHlwZTtcbiAgICAgICAgICAgIGltYWdlTm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbENhcmRJbWFnZV9fdHlwZScpWzBdLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBnZXRMYWJlbER1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGltYWdlTm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJvdXNlbENhcmRJbWFnZV9fZHVyYXRpb24nKVswXS50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgdGl0bGVOb2RlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1YnRpdGxlKSB7XG4gICAgICAgICAgICBzdWJUaXRsZU5vZGUudGV4dENvbnRlbnQgPSBzdWJ0aXRsZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIG1ldGhvZCBzZXQgY2FyZHMgdmFsdWVzIGJ5IGFuIGFycmF5IG9mIElDYXJvdXNlbENhcmQgRFRPXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0lDYXJvdXNlbENhcmRbXX0gY2FyZHNcbiAgICAgKi9cbiAgICBDYXJvdXNlbC5wcm90b3R5cGUuc2V0Q2FyZHMgPSBmdW5jdGlvbiAoY2FyZHMpIHtcbiAgICAgICAgdmFyIGNhcmRzTm9kZSA9IHRoaXMuZ2V0Q2FyZHNOb2RlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FyZHNOb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNldENhcmQoY2FyZHNbaV0sIGkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgbWV0aG9kIGhhbmRsZSB0aGUgZmV0Y2ggY2FyZHM6IGl0J3MgYSB3cmFwcGVyIHRvIGNhbGxcbiAgICAgKiB3aGVuIHlvdSByZXF1aXJlIG5ldyBjYXJvdXNlbCBkYXRhLlxuICAgICAqIEl0IHVzZSB0aGUgY2FjaGUgZGF0YSBpZiBleGlzdCBpdCwgb3IgY2FsbCB0aGUgZmV0Y2hDYXJkc1xuICAgICAqIG1ldGhvZCBmb3IgZ2V0IG5ldyBkYXRhLlxuICAgICAqL1xuICAgIENhcm91c2VsLnByb3RvdHlwZS5oYW5kbGVGZXRjaENhcmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBVc2UgY2FjaGUhXG4gICAgICAgIGlmICh0aGlzLmNhcmRzW3RoaXMucGFnZV0pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FyZHModGhpcy5jYXJkc1t0aGlzLnBhZ2VdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY2Fyb3VzZWwgbG9hZGluZyBzdGF0ZSFcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWwtLWxvYWRpbmcnKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludm9rZSB0aGUgZmV0Y2hDYXJkcyBtZXRob2QgYW5kIHVzZSB0aGUgbGlzdCBvZlxuICAgICAgICAgKiBjYXJkcyByZXR1cm5lZCBmb3I6XG4gICAgICAgICAqIDEpIFNhdmUgaXQgaW4gdGhlIGNhY2hlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGFjdGl2ZSBwYWdlXG4gICAgICAgICAqIDIpIENhbGwgc2V0Q2FyZHMgbWV0aG9kIGZvciBzZXQgY2FyZHMgdmFsdWVzXG4gICAgICAgICAqIDMpIFJlbW92ZSBjYXJvdXNlbCBsb2FkaW5nIHN0YXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIFllYWgsIGkga25vdzogd2hhdCBoYXBwZW4gaWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQ/XG4gICAgICAgICAqIEkgdGhvdWdodCBhYm91dCBpdCwgYW5kIG15IGFuc3dlciBpczogZXZlcnl0aGluZyBhbmQgbm90aGluZy5cbiAgICAgICAgICogU28sIG1heWJlIGlzIGJldHRlciBub3QgaW1wbGVtZW50IGEgY2F0Y2gvZmluYWxseSB3aXRob3V0XG4gICAgICAgICAqIGFueSBvdGhlciBpbmZvcm1hdGlvbnMhXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZldGNoQ2FyZHMoKS50aGVuKGZ1bmN0aW9uIChjYXJkcykge1xuICAgICAgICAgICAgX3RoaXMuY2FyZHNbX3RoaXMucGFnZV0gPSBjYXJkcztcbiAgICAgICAgICAgIF90aGlzLnNldENhcmRzKGNhcmRzKTtcbiAgICAgICAgICAgIF90aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbC0tbG9hZGluZycpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBtZXRob2QgaGFuZGxlIHRoZSB0b3VjaCBzdGFydCBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldnRcbiAgICAgKi9cbiAgICBDYXJvdXNlbC5wcm90b3R5cGUuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy54RG93biA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHRoaXMueURvd24gPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGhlIG1ldGhvZCBoYW5kbGUgdG91Y2ggbW92ZSBldmVudC5cbiAgICAgKiBXaXRoIHNvbWUgZGlmZmVyZW5jZXMsIGkgY2FuIGtub3cgaWY6XG4gICAgICpcbiAgICAgKiAtIFlvdSBzd2lwZSBvbiByaWdodFxuICAgICAqIC0gWW91IHN3aXBlIG9uIGxlZnRcbiAgICAgKiAtIFlvdSBzd2lwZSB1cFxuICAgICAqIC0gWW91IHN3aXBlIGRvd25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZ0XG4gICAgICovXG4gICAgQ2Fyb3VzZWwucHJvdG90eXBlLmhhbmRsZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnhEb3duIHx8ICF0aGlzLnlEb3duKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHhVcCA9IGV2dC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHZhciB5VXAgPSBldnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICB2YXIgeERpZmYgPSB0aGlzLnhEb3duIC0geFVwO1xuICAgICAgICB2YXIgeURpZmYgPSB0aGlzLnlEb3duIC0geVVwO1xuICAgICAgICBpZiAoTWF0aC5hYnMoeERpZmYpID4gTWF0aC5hYnMoeURpZmYpKSB7XG4gICAgICAgICAgICBpZiAoeERpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU3dpcGUgb24gbGVmdFxuICAgICAgICAgICAgICAgIHRoaXMuZ29BaGVhZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU3dpcGUgb24gcmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHlEaWZmID4gMCkge1xuICAgICAgICAgICAgLy8gU3dpcGUgdXBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFN3aXBlIGRvd25cbiAgICAgICAgfVxuICAgICAgICAvLyBSZXNldCB2YWx1ZXNcbiAgICAgICAgdGhpcy54RG93biA9IG51bGw7XG4gICAgICAgIHRoaXMueURvd24gPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIENhcm91c2VsO1xufSgpKTtcbi8vIENhcm91c2VsIGlzIG5vdyBhdmFpbGFibGUgb24gd2luZG93IGdsb2JhbCBvYmplY3Qg8J+Oie+4jyFcbndpbmRvdy5DYXJvdXNlbCA9IENhcm91c2VsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIF9hO1xuaW1wb3J0IHsgQ0FSRF9UWVBFUyB9IGZyb20gJy4uL21vZGVscy9jYXJkcyc7XG4vLyBHZXQgY2FyZCB0eXBlcyBsYWJlbHMhXG5leHBvcnQgdmFyIENBUkRfVFlQRVNfTEFCRUxTID0gKF9hID0ge30sXG4gICAgX2FbQ0FSRF9UWVBFUy5WSURFT10gPSAnVmlkZW8nLFxuICAgIF9hW0NBUkRfVFlQRVMuRV9MRUFSTklOR10gPSAnRWxlYXJuaW5nJyxcbiAgICBfYVtDQVJEX1RZUEVTLkxFQVJOSU5HX1BMQU5dID0gJ0xlYXJuaW5nIFBsYW4nLFxuICAgIF9hW0NBUkRfVFlQRVMuUExBWUxJU1RdID0gJ1BsYXlsaXN0JyxcbiAgICBfYSk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0cmFuc2Zvcm0gYSBkdXJhdGlvbiBpbiBhIGh1bWFuLXJlYWRhYmxlIGxhYmVsXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxEdXJhdGlvbihkdXJhdGlvbikge1xuICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKChkdXJhdGlvbiAlIDMxNTM2MDAwKSAlIDg2NDAwKSAvIDM2MDApO1xuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoKChkdXJhdGlvbiAlIDMxNTM2MDAwKSAlIDg2NDAwKSAlIDM2MDApIC8gNjApO1xuICAgIHZhciBzZWNvbmRzID0gKCgoZHVyYXRpb24gJSAzMTUzNjAwMCkgJSA4NjQwMCkgJSAzNjAwKSAlIDYwO1xuICAgIHZhciBmb3JtYXR0ZWRTZWNvbmRzID0gU3RyaW5nKHNlY29uZHMpLmxlbmd0aCA9PT0gMSA/IHNlY29uZHMgKyBcIjBcIiA6IHNlY29uZHM7XG4gICAgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBtaW51dGVzICsgXCI6XCIgKyBmb3JtYXR0ZWRTZWNvbmRzO1xuICAgIH1cbiAgICByZXR1cm4gaG91cnMgKyBcImhcIiArIChtaW51dGVzICYmIFwiIFwiICsgbWludXRlcyArIFwibVwiKSArIChzZWNvbmRzICYmIFwiIFwiICsgc2Vjb25kcyArIFwic1wiKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=