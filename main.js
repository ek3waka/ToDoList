/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.todo-item:hover {\r\n    background-color: rgb(145, 145, 145)\r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;;;;;;;;;;;CAYC,SAAS;CACT,UAAU;CACV,SAAS;CACT,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;;;AAIA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,SAAS;IACT,4CAA4C;IAC5C,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;;AAExB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;;AAGA;IACI,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,SAAS;IACT,iBAAiB;IACjB,qBAAqB;IACrB,6BAA6B;IAC7B;;AAEJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB;AACJ;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;;;;AAKA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,SAAS;IACT,iBAAiB;IACjB,qBAAqB;;AAEzB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;;AAGb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,wBAAwB;IACxB,0BAA0B;IAC1B,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB;IACrB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,cAAc;;IAEd,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB;AACJ;;;AAGA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;EACtB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,yCAAyC;EAC3C;;EAEA;IACE,QAAQ;EACV","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\r\n:root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.todo-item:hover {\r\n    background-color: rgb(145, 145, 145)\r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Common functions module/data-functions.js":
/*!*******************************************************!*\
  !*** ./src/Common functions module/data-functions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "normalizeDate": () => (/* binding */ normalizeDate)
/* harmony export */ });
function normalizeDate(date) {
    let dateDay = date[date.length-2] + date[date.length-1]
    let monthDate = date[date.length-5] + date[date.length-4]
    let yearDate = date[date.length-8] + date[date.length-7]
    return `${dateDay}.${monthDate}.${yearDate}`
  }

function getDate() {
    let now = new Date()
    let day = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)
    return now.getFullYear() + "-" + (month) + "-" + (day)
}



/***/ }),

/***/ "./src/Common functions module/modal-functions.js":
/*!********************************************************!*\
  !*** ./src/Common functions module/modal-functions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
/* harmony import */ var _data_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-functions */ "./src/Common functions module/data-functions.js");


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}
  
  function closeModal(modal) {
    if (modal == null) return
    const titles = document.querySelectorAll('.input-title')
    titles.forEach(title => {
      title.value = ''
    })
    const date = document.querySelector('.todo-date-input')
    const priorityMedium = document.querySelector('input[value="medium"]')
    date.value = `${(0,_data_functions__WEBPACK_IMPORTED_MODULE_0__.getDate)()}`
    priorityMedium.checked = true
    modal.classList.remove('active')
    overlay.classList.remove('active')
}



/***/ }),

/***/ "./src/Common functions module/read-data-from-localStorage.js":
/*!********************************************************************!*\
  !*** ./src/Common functions module/read-data-from-localStorage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readDataFromJSON": () => (/* binding */ readDataFromJSON)
/* harmony export */ });
/* harmony import */ var _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Elements modules/create-project.js */ "./src/Elements modules/create-project.js");
/* harmony import */ var _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Elements modules/create-todo */ "./src/Elements modules/create-todo.js");
/* harmony import */ var _DOM_modules_show_project_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOM modules/show-project-DOM */ "./src/DOM modules/show-project-DOM.js");




function readDataFromJSON(userProjectList, projectList) {
    if (localStorage.todolist == null) {
        let example = new _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_0__.Project('Project1')
        userProjectList.addProjectToProjectList(example)
        projectList.append(new _DOM_modules_show_project_DOM__WEBPACK_IMPORTED_MODULE_2__.DisplayProject(example, 0).displayProjectDOM())
    
        let todoexample = new _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_1__.ToDo('Do smth', '29.12.22', 'high')
        let todoexample2 = new _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_1__.ToDo('Do smth1', '01.01.23', 'low')
        let todoexample3 = new _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_1__.ToDo('Do smth2', '11.11.23', 'medium')
    
        example.addToDoToProject(todoexample)
        example.addToDoToProject(todoexample2)
        example.addToDoToProject(todoexample3)
        
    } else {
        let userProjectListProjects = JSON.parse(localStorage.todolist)
        for (let i=0; i<userProjectListProjects.projects.length; i++) {
            let project = new _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(userProjectListProjects.projects[i].title)
            for (let j=0; j<userProjectListProjects.projects[i].todos.length; j++) {
              let toDo = new _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_1__.ToDo(
                    userProjectListProjects.projects[i].todos[j].title, 
                    userProjectListProjects.projects[i].todos[j].dueDate,
                    userProjectListProjects.projects[i].todos[j].priority,
                    userProjectListProjects.projects[i].todos[j].done)
              
               project.addToDoToProject(toDo)
            } 
            userProjectList.addProjectToProjectList(project)
        }
        for (let i=0; i < userProjectList.projects.length; i++) {
          projectList.append(new _DOM_modules_show_project_DOM__WEBPACK_IMPORTED_MODULE_2__.DisplayProject(userProjectList.projects[i], i).displayProjectDOM())
        }
    }
}





/***/ }),

/***/ "./src/DOM modules/add-project-toDOM.js":
/*!**********************************************!*\
  !*** ./src/DOM modules/add-project-toDOM.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectByName": () => (/* binding */ addProjectByName)
/* harmony export */ });
/* harmony import */ var _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Elements modules/create-project.js */ "./src/Elements modules/create-project.js");
/* harmony import */ var _Elements_modules_create_project_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Elements modules/create-project-list.js */ "./src/Elements modules/create-project-list.js");
/* harmony import */ var _Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common functions module/modal-functions.js */ "./src/Common functions module/modal-functions.js");
/* harmony import */ var _show_project_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-project-DOM */ "./src/DOM modules/show-project-DOM.js");





function addProjectByName(modal, userProjectList, projectList) {
      const addNewProjectButton = document.querySelector('#NewProject')
      addNewProjectButton.addEventListener('click', () => {
          const projectTitle = document.querySelector('.input-title')
          const project = new _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(`${projectTitle.value}`)
          userProjectList.addProjectToProjectList(project)
          projectList.append(new _show_project_DOM__WEBPACK_IMPORTED_MODULE_3__.DisplayProject(project, userProjectList.projects.length-1).displayProjectDOM())
          ;(0,_Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(modal)
        }, { once: true })
}




/***/ }),

/***/ "./src/DOM modules/add-todo-toDOM.js":
/*!*******************************************!*\
  !*** ./src/DOM modules/add-todo-toDOM.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoByName": () => (/* binding */ addToDoByName)
/* harmony export */ });
/* harmony import */ var _Elements_modules_create_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Elements modules/create-todo.js */ "./src/Elements modules/create-todo.js");
/* harmony import */ var _Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common functions module/modal-functions.js */ "./src/Common functions module/modal-functions.js");
/* harmony import */ var _Common_functions_module_data_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common functions module/data-functions */ "./src/Common functions module/data-functions.js");
/* harmony import */ var _show_todo_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-todo-DOM */ "./src/DOM modules/show-todo-DOM.js");
/* harmony import */ var _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Elements modules/create-project.js */ "./src/Elements modules/create-project.js");






function addToDoByName(modal, targetProject) {
    const addNewToDoButton = document.querySelector('#NewToDo')
    
    addNewToDoButton.addEventListener('click', () => {
        console.log(targetProject)
        const todoContainer = document.querySelector('.todo-container')
        const ToDoTitle = document.querySelector('input[placeholder="ToDo Title"]')
        const ToDoDueDate = document.querySelector('.todo-date-input')
        const ToDoPriority = document.querySelector('input[name="priority"]:checked')
        
        const todo = new _Elements_modules_create_todo_js__WEBPACK_IMPORTED_MODULE_0__.ToDo(`${ToDoTitle.value}`, `${(0,_Common_functions_module_data_functions__WEBPACK_IMPORTED_MODULE_2__.normalizeDate)(ToDoDueDate.value)}`, `${ToDoPriority.value}`)
        
        targetProject.addToDoToProject(todo)
  
        todoContainer.append(new _show_todo_DOM__WEBPACK_IMPORTED_MODULE_3__.DisplayToDo().DOM(todo, targetProject.todos.length - 1))
  
        ;(0,_Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_1__.closeModal)(modal)
    }, { once: true })
  }

  

/***/ }),

/***/ "./src/DOM modules/delete-project-DOM.js":
/*!***********************************************!*\
  !*** ./src/DOM modules/delete-project-DOM.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _Elements_modules_create_project_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Elements modules/create-project-list.js */ "./src/Elements modules/create-project-list.js");


function deleteProject(evt, projectList, projectListDOM) {
    if(evt.target.closest('.delete-project-button')) {
      const projectToDelete = evt.target.parentElement.getAttribute('id') 
      projectList.deleteProjectFromProjectList(projectToDelete)
      projectListDOM.removeChild(evt.target.parentElement)
      const ButtonsList = document.querySelectorAll('.project-button')
      const arr = Array.from(ButtonsList);
      arr.forEach(project => {
        project.id = arr.indexOf(project)
      })
    }
  }



/***/ }),

/***/ "./src/DOM modules/delete-todo-DOM.js":
/*!********************************************!*\
  !*** ./src/DOM modules/delete-todo-DOM.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo)
/* harmony export */ });
function deleteTodo(evt, targetProject) {
    if(evt.target.closest('.todo-item > .delete-project-button')) {
        const todoContainer = document.querySelector('.todo-container')
        const toDoToDelete = evt.target.parentElement.getAttribute('id')
        targetProject.deleteToDoFromProject(toDoToDelete)
        todoContainer.removeChild(evt.target.parentElement)
        const toDosList = document.querySelectorAll('.todo-item')
        const arr = Array.from(toDosList);
        arr.forEach(todo => {
          todo.id = arr.indexOf(toDosList)
        })
    }
}



/***/ }),

/***/ "./src/DOM modules/show-common-components-DOM.js":
/*!*******************************************************!*\
  !*** ./src/DOM modules/show-common-components-DOM.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAddButton": () => (/* binding */ CreateAddButton)
/* harmony export */ });
/* harmony import */ var _Icons_plus_thick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/plus-thick.png */ "./src/Icons/plus-thick.png");


class CreateAddButton {
    createAddButton(whatToCreate) {
        const addButton = document.createElement('button')
        addButton.classList.add('add-project-button')
        addButton.id = whatToCreate

        const addIcon = document.createElement('img')
        addIcon.classList.add('project-icon')
        addIcon.src = _Icons_plus_thick_png__WEBPACK_IMPORTED_MODULE_0__
        
        const addTitle = document.createElement('p')
        addTitle.classList.add('project-name')
        addTitle.textContent = `Add ${whatToCreate}`

        addButton.append(addIcon, addTitle)

        return addButton
    }
}



/***/ }),

/***/ "./src/DOM modules/show-modals-DOM.js":
/*!********************************************!*\
  !*** ./src/DOM modules/show-modals-DOM.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateModal": () => (/* binding */ CreateModal),
/* harmony export */   "CreateProjectMenu": () => (/* binding */ CreateProjectMenu),
/* harmony export */   "CreateTodoMenu": () => (/* binding */ CreateTodoMenu)
/* harmony export */ });
/* harmony import */ var _show_common_components_DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-common-components-DOM.js */ "./src/DOM modules/show-common-components-DOM.js");
/* harmony import */ var _Common_functions_module_data_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common functions module/data-functions.js */ "./src/Common functions module/data-functions.js");



class CreateModal {
    constructor(objectToCreate) {
        this.objectToCreate = objectToCreate
        
        this.card = document.createElement('div')
        this.cardHeader = document.createElement('div')
        this.cardTitle = document.createElement('p')
        this.titleInput = document.createElement('input')
        this.closeButton = document.createElement('button')
    }

    createMenu() { 
        this.card.id = `add${this.objectToCreate}Card`
        this.card.classList.add('create-card')

        this.cardHeader.classList.add('cardHeader')

        this.cardTitle.classList.add('create-card-title')
        this.cardTitle.textContent = `Create ${this.objectToCreate}`
        
        this.closeButton.classList.add('closeButton')
        this.closeButton.insertAdjacentHTML('afterbegin', '&times;')
        this.closeButton.id = 'closeModal'

        this.cardHeader.append(this.cardTitle, this.closeButton)

        this.card.append(this.cardHeader, new _show_common_components_DOM_js__WEBPACK_IMPORTED_MODULE_0__.CreateAddButton().createAddButton(`New${this.objectToCreate}`))

        return this.card
    }

    createOverlay() {
        const overlay = document.createElement('div')
        overlay.id = 'overlay'
        return overlay
    }
}

class CreateTodoMenu extends CreateModal {
    constructor(objectToCreate) {
        super(objectToCreate)
        this.form = document.createElement('form')

        this.dateInputContainer = document.createElement('div')
        this.dateInput = document.createElement('input')
        this.dateP = document.createElement('p')

        this.priorityInputContainer = document.createElement('div')
        this.priority = document.createElement('p')

        this.priorityLow = document.createElement('input')
        this.priorityMedium = document.createElement('input')
        this.priorityHigh = document.createElement('input')

        this.priorityLowP = document.createElement('p')
        this.priorityMediumP = document.createElement('p')
        this.priorityHighP = document.createElement('p')


        this.priorityLow.name = 'priority'
        this.priorityMedium.name = 'priority'
        this.priorityHigh.name = 'priority'

        this.priorityLow.type = 'radio'
        this.priorityMedium.type = 'radio'
        this.priorityHigh.type = 'radio'

        this.priorityLow.value = 'low'
        this.priorityMedium.value = 'medium'
        this.priorityHigh.value = 'high'

    }

    createTodoMenu() {
        this.form.classList.add('create-card-form')

        this.titleInput.type = 'text'
        this.titleInput.placeholder = `${this.objectToCreate} Title`
        this.titleInput.classList.add('input-title')

        this.form.append(this.titleInput)

        this.dateInputContainer.classList.add('todo-date')
        this.priorityInputContainer.classList.add('todo-priority')


        this.dateInput.type = 'date'
        this.dateInput.classList.add('todo-date-input')
        this.dateInput.value = `${(0,_Common_functions_module_data_functions_js__WEBPACK_IMPORTED_MODULE_1__.getDate)()}`

        this.dateP.classList.add('create-card-text')
        this.dateP.textContent = 'Date'
        this.dateInputContainer.append(this.dateP, this.dateInput)

        this.priorityLowP.classList.add('create-card-text')
        this.priorityMediumP.classList.add('create-card-text')
        this.priorityHighP.classList.add('create-card-text')

        this.priorityLowP.textContent = 'Low'
        this.priorityMediumP.textContent = 'Medium'
        this.priorityHighP.textContent = 'High'
        
        this.priorityMedium.checked = true

        this.priorityInputContainer.append(this.priorityLow, this.priorityLowP, this.priorityMedium, this.priorityMediumP, this.priorityHigh, this.priorityHighP)
        this.form.append(this.dateInputContainer, this.priorityInputContainer)
        
        return this.form
    }   
}

class CreateProjectMenu extends CreateModal {
    constructor(objectToCreate) {
        super(objectToCreate)
        this.form = document.createElement('form')
    }
    createProjectMenu() {
        this.form.classList.add('create-card-form')

        this.titleInput.type = 'text'
        this.titleInput.placeholder = `${this.objectToCreate} Title`
        this.titleInput.classList.add('input-title')

        this.form.append(this.titleInput)
        return this.form
    }
}



/***/ }),

/***/ "./src/DOM modules/show-project-DOM.js":
/*!*********************************************!*\
  !*** ./src/DOM modules/show-project-DOM.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayProject": () => (/* binding */ DisplayProject)
/* harmony export */ });
/* harmony import */ var _Icons_format_list_checkbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/format-list-checkbox.png */ "./src/Icons/format-list-checkbox.png");
/* harmony import */ var _Icons_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/delete.png */ "./src/Icons/delete.png");



class DisplayProject {
    constructor(project, id) {
        this.project = project
        this.id = id
    }

    displayProjectDOM() {
        const projectButton = document.createElement('button')
        projectButton.classList.add('project-button')
        projectButton.id = this.id

        const projectIcon = document.createElement('img')
        projectIcon.classList.add('project-icon')
        projectIcon.src = _Icons_format_list_checkbox_png__WEBPACK_IMPORTED_MODULE_0__
        
        const projectTitle = document.createElement('p')
        projectTitle.classList.add('project-name')
        projectTitle.textContent = this.project.title

        const deleteProject = document.createElement('img')
        deleteProject.classList.add('project-icon', 'delete-project-button')
        deleteProject.src = _Icons_delete_png__WEBPACK_IMPORTED_MODULE_1__
        projectButton.append(projectIcon, projectTitle, deleteProject)

        return projectButton
    }
}




/***/ }),

/***/ "./src/DOM modules/show-project-list-DOM.js":
/*!**************************************************!*\
  !*** ./src/DOM modules/show-project-list-DOM.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectContainer": () => (/* binding */ CreateProjectContainer)
/* harmony export */ });
/* harmony import */ var _show_common_components_DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-common-components-DOM.js */ "./src/DOM modules/show-common-components-DOM.js");


class CreateProjectContainer {

    createprojectContainer(project) {
        const projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container')

        const projectTitle = document.createElement('div')
        projectTitle.classList.add('project-title')

        if (project.title == undefined) {
            projectTitle.textContent = ''
        } else { projectTitle.textContent = project.title }
        
        
        const addToDo = new _show_common_components_DOM_js__WEBPACK_IMPORTED_MODULE_0__.CreateAddButton

        const addToDoButton = addToDo.createAddButton('ToDo')
        
        projectContainer.append(projectTitle, addToDoButton)

        return projectContainer
    }

    createtoDoContainer() {
        const toDoContainer = document.createElement('div')
        toDoContainer.classList.add('todo-container')
        return toDoContainer
    }
}




/***/ }),

/***/ "./src/DOM modules/show-todo-DOM.js":
/*!******************************************!*\
  !*** ./src/DOM modules/show-todo-DOM.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayToDo": () => (/* binding */ DisplayToDo)
/* harmony export */ });
/* harmony import */ var _Icons_calendar_clock_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/calendar-clock.png */ "./src/Icons/calendar-clock.png");
/* harmony import */ var _Icons_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icons/delete.png */ "./src/Icons/delete.png");
/* harmony import */ var _Icons_check_bold_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icons/check-bold.png */ "./src/Icons/check-bold.png");




class DisplayToDo {
    DOM(todo, id) {
        const toDoItem = document.createElement('div')
        toDoItem.classList.add('todo-item')
        toDoItem.id = id
        const check = document.createElement('button')
        check.classList.add('check-todo-item')
        
        if (todo.done === true) {
            const checked = document.createElement('img')
            checked.classList.add('project-icon')
            checked.src = _Icons_check_bold_png__WEBPACK_IMPORTED_MODULE_2__
            check.append(checked)
        }

        const toDoText = document.createElement('p')
        toDoText.classList.add('todo-text')
        toDoText.textContent = todo.title

        const dateIcon = document.createElement('img')
        dateIcon.src = _Icons_calendar_clock_png__WEBPACK_IMPORTED_MODULE_0__
        dateIcon.classList.add('project-icon')

        switch (todo.priority) {
            case 'low': 
                toDoItem.style.borderLeft = '0.5rem solid green'
                break
            
            case 'high': 
                toDoItem.style.borderLeft = '0.5rem solid crimson'
                break
            
            default: 
                toDoItem.style.borderLeft = '0.5rem solid yellow'
                
        }

        const dueDateText = document.createElement('p')
        dueDateText.classList.add('due-date')
        dueDateText.textContent = todo.dueDate

        const deleteToDo = document.createElement('img')
        deleteToDo.classList.add('project-icon', 'delete-project-button')
        deleteToDo.src = _Icons_delete_png__WEBPACK_IMPORTED_MODULE_1__

        toDoItem.append(check, toDoText, dateIcon, dueDateText, deleteToDo)

        return toDoItem
    }

}



/***/ }),

/***/ "./src/DOM modules/show-todo-list-DOM.js":
/*!***********************************************!*\
  !*** ./src/DOM modules/show-todo-list-DOM.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showTodoList": () => (/* binding */ showTodoList)
/* harmony export */ });
/* harmony import */ var _toggle_todo_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-todo-check */ "./src/DOM modules/toggle-todo-check.js");
/* harmony import */ var _delete_todo_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-todo-DOM */ "./src/DOM modules/delete-todo-DOM.js");
/* harmony import */ var _show_project_list_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-project-list-DOM */ "./src/DOM modules/show-project-list-DOM.js");
/* harmony import */ var _Common_functions_module_modal_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common functions module/modal-functions */ "./src/Common functions module/modal-functions.js");
/* harmony import */ var _add_todo_toDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-todo-toDOM */ "./src/DOM modules/add-todo-toDOM.js");
/* harmony import */ var _show_todo_DOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-todo-DOM */ "./src/DOM modules/show-todo-DOM.js");







function showTodoList(evt, main, userProjectList) {
    if(evt.target.closest('.project-button :not(.add-project-button)')) {
        if (document.querySelector('.project-container')) {
          main.removeChild(document.querySelector('.project-container'))
        }
        const targetProject = userProjectList.projects[evt.target.closest('.project-button').getAttribute('id')]
        let showProject =  new _show_project_list_DOM__WEBPACK_IMPORTED_MODULE_2__.CreateProjectContainer()
        let showProjectContainer = showProject.createprojectContainer(targetProject)
        let showToDos = showProject.createtoDoContainer(targetProject)
        main.append(showProjectContainer)
        for (let i=0; i < targetProject.todos.length; i++) {
          let showtodoexample = new _show_todo_DOM__WEBPACK_IMPORTED_MODULE_5__.DisplayToDo().DOM(targetProject.todos[i], i)
          showToDos.append(showtodoexample)
        }
        showProjectContainer.append(showToDos)
    
    //toggle check
        showProjectContainer.addEventListener('click', (evt) => (0,_toggle_todo_check__WEBPACK_IMPORTED_MODULE_0__.toggleTodoCheck)(evt, targetProject))
    //delete todo
        showProjectContainer.addEventListener('click', (evt) => (0,_delete_todo_DOM__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(evt, targetProject))
    
        const openAddToDo = document.querySelector('#ToDo')
        
        openAddToDo.addEventListener('click', () => {
          const modal = document.querySelector('#addToDoCard')
          ;(0,_Common_functions_module_modal_functions__WEBPACK_IMPORTED_MODULE_3__.openModal)(modal)
          ;(0,_add_todo_toDOM__WEBPACK_IMPORTED_MODULE_4__.addToDoByName)(modal, targetProject) 
        })
      }
}




/***/ }),

/***/ "./src/DOM modules/toggle-todo-check.js":
/*!**********************************************!*\
  !*** ./src/DOM modules/toggle-todo-check.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleTodoCheck": () => (/* binding */ toggleTodoCheck)
/* harmony export */ });
/* harmony import */ var _Icons_check_bold_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Icons/check-bold.png */ "./src/Icons/check-bold.png");


function toggleTodoCheck(evt, targetProject) {
    if(evt.target.closest('.check-todo-item')) {
        const targetToDo = targetProject.todos[evt.target.closest('.todo-item').getAttribute('id')]
        targetToDo.changeDone()
        const checked = document.createElement('img')

        if (targetToDo.done === true) {
            checked.classList.add('project-icon')
            checked.src = _Icons_check_bold_png__WEBPACK_IMPORTED_MODULE_0__
            evt.target.append(checked)
        } else {
            evt.target.remove(checked)
        }
    }
    console.log(targetProject)
}



/***/ }),

/***/ "./src/Elements modules/create-project-list.js":
/*!*****************************************************!*\
  !*** ./src/Elements modules/create-project-list.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProjectList": () => (/* binding */ UserProjectList)
/* harmony export */ });
class UserProjectList {
    constructor () {
        this.projects = []
    }

    addProjectToProjectList(project) {
        this.projects.push(project)
    }

    deleteProjectFromProjectList(projectIndex) {
        this.projects.splice(projectIndex, 1)
    }
}






/***/ }),

/***/ "./src/Elements modules/create-project.js":
/*!************************************************!*\
  !*** ./src/Elements modules/create-project.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor (title) {
        this.title = title
        this.todos = []
    }

    addToDoToProject(toDo) {
        this.todos.push(toDo)
    }

    deleteToDoFromProject(toDoIndex) {
        this.todos.splice(toDoIndex, 1)
    }
}



/***/ }),

/***/ "./src/Elements modules/create-todo.js":
/*!*********************************************!*\
  !*** ./src/Elements modules/create-todo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
    constructor(title, dueDate, priority, done = false) {
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.done = done
    }
    changeDone() {
        this.done = !this.done
    }
    getDone() {
        return this.done
    }
}



/***/ }),

/***/ "./src/Icons/calendar-clock.png":
/*!**************************************!*\
  !*** ./src/Icons/calendar-clock.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c05418e5062a5123f95.png";

/***/ }),

/***/ "./src/Icons/check-bold.png":
/*!**********************************!*\
  !*** ./src/Icons/check-bold.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbefe47493f82467c494.png";

/***/ }),

/***/ "./src/Icons/cog.png":
/*!***************************!*\
  !*** ./src/Icons/cog.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f06443d81555c0cc2fd1.png";

/***/ }),

/***/ "./src/Icons/delete.png":
/*!******************************!*\
  !*** ./src/Icons/delete.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c14bd3faa68ea51d41e6.png";

/***/ }),

/***/ "./src/Icons/format-list-checkbox.png":
/*!********************************************!*\
  !*** ./src/Icons/format-list-checkbox.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4c5e40fafc0f4486df5.png";

/***/ }),

/***/ "./src/Icons/menu.png":
/*!****************************!*\
  !*** ./src/Icons/menu.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fecc4ece4ddcf0ec566a.png";

/***/ }),

/***/ "./src/Icons/plus-thick.png":
/*!**********************************!*\
  !*** ./src/Icons/plus-thick.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b37019c0559f7372b9a9.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_cog_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons/cog.png */ "./src/Icons/cog.png");
/* harmony import */ var _Icons_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/menu.png */ "./src/Icons/menu.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Elements_modules_create_project_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Elements modules/create-project-list.js */ "./src/Elements modules/create-project-list.js");
/* harmony import */ var _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Elements modules/create-project.js */ "./src/Elements modules/create-project.js");
/* harmony import */ var _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Elements modules/create-todo */ "./src/Elements modules/create-todo.js");
/* harmony import */ var _Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Common functions module/modal-functions.js */ "./src/Common functions module/modal-functions.js");
/* harmony import */ var _DOM_modules_show_modals_DOM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOM modules/show-modals-DOM */ "./src/DOM modules/show-modals-DOM.js");
/* harmony import */ var _DOM_modules_show_project_DOM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DOM modules/show-project-DOM */ "./src/DOM modules/show-project-DOM.js");
/* harmony import */ var _DOM_modules_show_common_components_DOM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DOM modules/show-common-components-DOM */ "./src/DOM modules/show-common-components-DOM.js");
/* harmony import */ var _DOM_modules_delete_project_DOM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DOM modules/delete-project-DOM */ "./src/DOM modules/delete-project-DOM.js");
/* harmony import */ var _DOM_modules_show_todo_list_DOM__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DOM modules/show-todo-list-DOM */ "./src/DOM modules/show-todo-list-DOM.js");
/* harmony import */ var _DOM_modules_add_project_toDOM__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DOM modules/add-project-toDOM */ "./src/DOM modules/add-project-toDOM.js");
/* harmony import */ var _DOM_modules_add_todo_toDOM__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DOM modules/add-todo-toDOM */ "./src/DOM modules/add-todo-toDOM.js");
/* harmony import */ var _DOM_modules_toggle_todo_check__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DOM modules/toggle-todo-check */ "./src/DOM modules/toggle-todo-check.js");
/* harmony import */ var _DOM_modules_delete_todo_DOM__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DOM modules/delete-todo-DOM */ "./src/DOM modules/delete-todo-DOM.js");
/* harmony import */ var _Common_functions_module_read_data_from_localStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Common functions module/read-data-from-localStorage */ "./src/Common functions module/read-data-from-localStorage.js");





















const body = document.querySelector('body')

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

body.append(wrapper)

const header = document.createElement('header')
wrapper.appendChild(header)

const main = document.createElement('main')

const menuBtn = document.createElement('button')
const title = document.createElement('div')
const settingsBtn = document.createElement('button')

const menuBtnIcon = document.createElement('img')
menuBtnIcon.src = _Icons_menu_png__WEBPACK_IMPORTED_MODULE_1__
menuBtnIcon.classList.add('header-icon')

menuBtn.append(menuBtnIcon)
title.textContent = 'ToDoList'

const settingsBtnIcon = document.createElement('img')
settingsBtnIcon.src = _Icons_cog_png__WEBPACK_IMPORTED_MODULE_0__
settingsBtnIcon.classList.add('header-icon')
settingsBtn.append(settingsBtnIcon)

header.append(menuBtn, title, settingsBtn)

const projectList = document.createElement('div')
projectList.classList.add('project-list')
const projectListTitle = document.createElement('h1')
projectListTitle.textContent = 'Projects'
projectList.append(projectListTitle)

main.append(projectList)

const footer = document.createElement('footer')
const legalInfo = document.createElement('div')
legalInfo.classList.add('legal-info')
const siteName = document.createElement('div')
const copyRight = document.createElement('div')
siteName.textContent = `JijaRare Inc., 2022`
copyRight.textContent = 'All rights reserved'
legalInfo.append(siteName, copyRight)
footer.appendChild(legalInfo)
wrapper.append(main, footer)

menuBtn.addEventListener('click', () => {
  projectList.classList.toggle('hidden')
})

const userProjectList = new _Elements_modules_create_project_list_js__WEBPACK_IMPORTED_MODULE_3__.UserProjectList()

;(0,_Common_functions_module_read_data_from_localStorage__WEBPACK_IMPORTED_MODULE_16__.readDataFromJSON)(userProjectList, projectList)

let addProjectButton = new _DOM_modules_show_common_components_DOM__WEBPACK_IMPORTED_MODULE_9__.CreateAddButton()
projectList.append(addProjectButton.createAddButton('Project'))

window.addEventListener('beforeunload', () => {
    localStorage.todolist = JSON.stringify(userProjectList)
})

let addProject = new _DOM_modules_show_modals_DOM__WEBPACK_IMPORTED_MODULE_7__.CreateProjectMenu('Project')
let card = addProject.createMenu()
let input = addProject.createProjectMenu()

card.append(input)

const overlay = addProject.createOverlay()
body.append(overlay)

let addToDo = new _DOM_modules_show_modals_DOM__WEBPACK_IMPORTED_MODULE_7__.CreateTodoMenu('ToDo')
let cardToDo = addToDo.createMenu()
let inputToDo = addToDo.createTodoMenu()
cardToDo.append(inputToDo)

wrapper.append(card)
wrapper.append(cardToDo)


const openAddProject = document.querySelector('#Project')
const openAddToDo = document.querySelector('#ToDo')
const closeModalButtons = document.querySelectorAll('#closeModal')

openAddProject.addEventListener('click', () => {
    const modal = document.querySelector('#addProjectCard')
    ;(0,_Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_6__.openModal)(modal)
    ;(0,_DOM_modules_add_project_toDOM__WEBPACK_IMPORTED_MODULE_12__.addProjectByName)(modal, userProjectList, projectList) 
})

projectList.addEventListener('click', (evt) => (0,_DOM_modules_delete_project_DOM__WEBPACK_IMPORTED_MODULE_10__.deleteProject)(evt, userProjectList, projectList)) 

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.create-card.active')
  modals.forEach(modal => {
    ;(0,_Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_6__.closeModal)(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.create-card')
    ;(0,_Common_functions_module_modal_functions_js__WEBPACK_IMPORTED_MODULE_6__.closeModal)(modal)
  })
})

projectList.addEventListener('click',(evt) => (0,_DOM_modules_show_todo_list_DOM__WEBPACK_IMPORTED_MODULE_11__.showTodoList)(evt, main, userProjectList))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVks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QUE0QixxRkFBZTtBQUMzQztBQUNBLHdHQUFnQjtBQUNoQjtBQUNBLDJCQUEyQixvRkFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFCQUFxQiwyRUFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3RUFBYztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RkFBUztBQUNiLElBQUksa0ZBQWdCO0FBQ3BCLENBQUM7QUFDRDtBQUNBLCtDQUErQywrRUFBYTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0ZBQVU7QUFDZCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RkFBVTtBQUNkLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSw4Q0FBOEMsOEVBQVksNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9kYXRhLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9tb2RhbC1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvQ29tbW9uIGZ1bmN0aW9ucyBtb2R1bGUvcmVhZC1kYXRhLWZyb20tbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL2FkZC1wcm9qZWN0LXRvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL2FkZC10b2RvLXRvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL2RlbGV0ZS1wcm9qZWN0LURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9kZWxldGUtdG9kby1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvc2hvdy1jb21tb24tY29tcG9uZW50cy1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvc2hvdy1tb2RhbHMtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL3Nob3ctcHJvamVjdC1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvc2hvdy1wcm9qZWN0LWxpc3QtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL3Nob3ctdG9kby1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvc2hvdy10b2RvLWxpc3QtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL3RvZ2dsZS10b2RvLWNoZWNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QtbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1jYXJkLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgLS1jYXJkLWhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBoMSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyNiwgNDElLCAxMCUsIDAuOTUyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA1OCA2Nik7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgNTggNjYpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2FsLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTM3LCAxMzQpO1xcclxcbiAgICB3aWR0aDogMjhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiwgLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3JkZXI6IDNcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1OCwgMTU4LCAxNTgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSwgLmFkZC1wcm9qZWN0LXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgICB3aWR0aDogMjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4xcmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSlcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLXRvZG8taXRlbSB7XFxyXFxuICAgIHdpZHRoOiAzMnB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDk5LCA5OSwgOTkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGV4dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQge1xcclxcbiAgICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgICB3aWR0aDogMzc1cHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxMzcsIDEzNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRpdGxlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtaW5wdXQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eSB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJpb3JpdHktdGl0bGUge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZG9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10aXRsZTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDEzNywgMTQzKTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZS1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDEzNywgMTQzKTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdGUtY2FyZC5hY3RpdmUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNQcm9qZWN0IHtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7OztDQVlDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOzs7O0FBSUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0I7O0FBRUo7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7Ozs7O0FBS0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOzs7QUFHYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYzs7SUFFZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtBQUNKOzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLFFBQVE7RUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXAnKTtcXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY2FyZC13aWR0aDogMzAwcHg7XFxyXFxuICAgIC0tY2FyZC1oZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgaDEsIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjYsIDQxJSwgMTAlLCAwLjk1Mik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgNTggNjYpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzIDU4IDY2KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtXFxyXFxufVxcclxcblxcclxcbi5sZWdhbC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDEzNywgMTM0KTtcXHJcXG4gICAgd2lkdGg6IDI4cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24sIC5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG9yZGVyOiAzXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTgsIDE1OCwgMTU4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUsIC5hZGQtcHJvamVjdC10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDQwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpXFxyXFxufVxcclxcblxcclxcbi5jaGVjay10b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5OSwgOTksIDk5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDM3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTM3LCAxMzQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10aXRsZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaW9yaXR5LXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi51bmRvbmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGl0bGU6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRlLWNhcmQuYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjUHJvamVjdCB7XFxyXFxuICAgIG9yZGVyOiA0O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblxyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblxyXG5cclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblxyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG5cclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcblxyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcblxyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIG5vcm1hbGl6ZURhdGUoZGF0ZSkge1xyXG4gICAgbGV0IGRhdGVEYXkgPSBkYXRlW2RhdGUubGVuZ3RoLTJdICsgZGF0ZVtkYXRlLmxlbmd0aC0xXVxyXG4gICAgbGV0IG1vbnRoRGF0ZSA9IGRhdGVbZGF0ZS5sZW5ndGgtNV0gKyBkYXRlW2RhdGUubGVuZ3RoLTRdXHJcbiAgICBsZXQgeWVhckRhdGUgPSBkYXRlW2RhdGUubGVuZ3RoLThdICsgZGF0ZVtkYXRlLmxlbmd0aC03XVxyXG4gICAgcmV0dXJuIGAke2RhdGVEYXl9LiR7bW9udGhEYXRlfS4ke3llYXJEYXRlfWBcclxuICB9XHJcblxyXG5mdW5jdGlvbiBnZXREYXRlKCkge1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIGxldCBkYXkgPSAoXCIwXCIgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMilcclxuICAgIGxldCBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcclxuICAgIHJldHVybiBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG1vbnRoKSArIFwiLVwiICsgKGRheSlcclxufVxyXG5cclxuZXhwb3J0IHtub3JtYWxpemVEYXRlLCBnZXREYXRlfSIsImltcG9ydCB7Z2V0RGF0ZX0gZnJvbSAnLi9kYXRhLWZ1bmN0aW9ucydcclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xyXG4gICAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcclxuICAgIGlmIChtb2RhbCA9PSBudWxsKSByZXR1cm5cclxuICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC10aXRsZScpXHJcbiAgICB0aXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XHJcbiAgICAgIHRpdGxlLnZhbHVlID0gJydcclxuICAgIH0pXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGF0ZS1pbnB1dCcpXHJcbiAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3ZhbHVlPVwibWVkaXVtXCJdJylcclxuICAgIGRhdGUudmFsdWUgPSBgJHtnZXREYXRlKCl9YFxyXG4gICAgcHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9IHRydWVcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7b3Blbk1vZGFsLCBjbG9zZU1vZGFsfSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LmpzJ1xyXG5pbXBvcnQgeyBUb0RvIH0gZnJvbSAnLi4vRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtdG9kbydcclxuaW1wb3J0IHsgRGlzcGxheVByb2plY3QgfSBmcm9tICcuLi9ET00gbW9kdWxlcy9zaG93LXByb2plY3QtRE9NJ1xyXG5cclxuZnVuY3Rpb24gcmVhZERhdGFGcm9tSlNPTih1c2VyUHJvamVjdExpc3QsIHByb2plY3RMaXN0KSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRvZG9saXN0ID09IG51bGwpIHtcclxuICAgICAgICBsZXQgZXhhbXBsZSA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0MScpXHJcbiAgICAgICAgdXNlclByb2plY3RMaXN0LmFkZFByb2plY3RUb1Byb2plY3RMaXN0KGV4YW1wbGUpXHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ldyBEaXNwbGF5UHJvamVjdChleGFtcGxlLCAwKS5kaXNwbGF5UHJvamVjdERPTSgpKVxyXG4gICAgXHJcbiAgICAgICAgbGV0IHRvZG9leGFtcGxlID0gbmV3IFRvRG8oJ0RvIHNtdGgnLCAnMjkuMTIuMjInLCAnaGlnaCcpXHJcbiAgICAgICAgbGV0IHRvZG9leGFtcGxlMiA9IG5ldyBUb0RvKCdEbyBzbXRoMScsICcwMS4wMS4yMycsICdsb3cnKVxyXG4gICAgICAgIGxldCB0b2RvZXhhbXBsZTMgPSBuZXcgVG9EbygnRG8gc210aDInLCAnMTEuMTEuMjMnLCAnbWVkaXVtJylcclxuICAgIFxyXG4gICAgICAgIGV4YW1wbGUuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZSlcclxuICAgICAgICBleGFtcGxlLmFkZFRvRG9Ub1Byb2plY3QodG9kb2V4YW1wbGUyKVxyXG4gICAgICAgIGV4YW1wbGUuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZTMpXHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB1c2VyUHJvamVjdExpc3RQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvZG9saXN0KVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx1c2VyUHJvamVjdExpc3RQcm9qZWN0cy5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHVzZXJQcm9qZWN0TGlzdFByb2plY3RzLnByb2plY3RzW2ldLnRpdGxlKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dXNlclByb2plY3RMaXN0UHJvamVjdHMucHJvamVjdHNbaV0udG9kb3MubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICBsZXQgdG9EbyA9IG5ldyBUb0RvKFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJQcm9qZWN0TGlzdFByb2plY3RzLnByb2plY3RzW2ldLnRvZG9zW2pdLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgICAgICB1c2VyUHJvamVjdExpc3RQcm9qZWN0cy5wcm9qZWN0c1tpXS50b2Rvc1tqXS5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJQcm9qZWN0TGlzdFByb2plY3RzLnByb2plY3RzW2ldLnRvZG9zW2pdLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJQcm9qZWN0TGlzdFByb2plY3RzLnByb2plY3RzW2ldLnRvZG9zW2pdLmRvbmUpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Eb1RvUHJvamVjdCh0b0RvKVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB1c2VyUHJvamVjdExpc3QuYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdXNlclByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3IERpc3BsYXlQcm9qZWN0KHVzZXJQcm9qZWN0TGlzdC5wcm9qZWN0c1tpXSwgaSkuZGlzcGxheVByb2plY3RET00oKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlYWREYXRhRnJvbUpTT04gfVxyXG5cclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QuanMnXHJcbmltcG9ydCB7IFVzZXJQcm9qZWN0TGlzdCB9IGZyb20gJy4uL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QtbGlzdC5qcydcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL21vZGFsLWZ1bmN0aW9ucy5qcydcclxuaW1wb3J0IHsgRGlzcGxheVByb2plY3QgfSBmcm9tICcuL3Nob3ctcHJvamVjdC1ET00nXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnlOYW1lKG1vZGFsLCB1c2VyUHJvamVjdExpc3QsIHByb2plY3RMaXN0KSB7XHJcbiAgICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTmV3UHJvamVjdCcpXHJcbiAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGl0bGUnKVxyXG4gICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3RUaXRsZS52YWx1ZX1gKVxyXG4gICAgICAgICAgdXNlclByb2plY3RMaXN0LmFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3QpXHJcbiAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3IERpc3BsYXlQcm9qZWN0KHByb2plY3QsIHVzZXJQcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGgtMSkuZGlzcGxheVByb2plY3RET00oKSlcclxuICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXHJcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2FkZFByb2plY3RCeU5hbWV9IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gJy4uL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXRvZG8uanMnXHJcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9tb2RhbC1mdW5jdGlvbnMuanMnXHJcbmltcG9ydCB7IG5vcm1hbGl6ZURhdGUgfSBmcm9tICcuLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9kYXRhLWZ1bmN0aW9ucydcclxuaW1wb3J0IHsgRGlzcGxheVRvRG8gfSBmcm9tICcuL3Nob3ctdG9kby1ET00nXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LmpzJ1xyXG5cclxuZnVuY3Rpb24gYWRkVG9Eb0J5TmFtZShtb2RhbCwgdGFyZ2V0UHJvamVjdCkge1xyXG4gICAgY29uc3QgYWRkTmV3VG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNOZXdUb0RvJylcclxuICAgIFxyXG4gICAgYWRkTmV3VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0KVxyXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IFRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3BsYWNlaG9sZGVyPVwiVG9EbyBUaXRsZVwiXScpXHJcbiAgICAgICAgY29uc3QgVG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kYXRlLWlucHV0JylcclxuICAgICAgICBjb25zdCBUb0RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKGAke1RvRG9UaXRsZS52YWx1ZX1gLCBgJHtub3JtYWxpemVEYXRlKFRvRG9EdWVEYXRlLnZhbHVlKX1gLCBgJHtUb0RvUHJpb3JpdHkudmFsdWV9YClcclxuICAgICAgICBcclxuICAgICAgICB0YXJnZXRQcm9qZWN0LmFkZFRvRG9Ub1Byb2plY3QodG9kbylcclxuICBcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChuZXcgRGlzcGxheVRvRG8oKS5ET00odG9kbywgdGFyZ2V0UHJvamVjdC50b2Rvcy5sZW5ndGggLSAxKSlcclxuICBcclxuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBleHBvcnQge2FkZFRvRG9CeU5hbWV9IiwiaW1wb3J0IHsgVXNlclByb2plY3RMaXN0IH0gZnJvbSAnLi4vRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtcHJvamVjdC1saXN0LmpzJ1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChldnQsIHByb2plY3RMaXN0LCBwcm9qZWN0TGlzdERPTSkge1xyXG4gICAgaWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSBcclxuICAgICAgcHJvamVjdExpc3QuZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0VG9EZWxldGUpXHJcbiAgICAgIHByb2plY3RMaXN0RE9NLnJlbW92ZUNoaWxkKGV2dC50YXJnZXQucGFyZW50RWxlbWVudClcclxuICAgICAgY29uc3QgQnV0dG9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKVxyXG4gICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKEJ1dHRvbnNMaXN0KTtcclxuICAgICAgYXJyLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgcHJvamVjdC5pZCA9IGFyci5pbmRleE9mKHByb2plY3QpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IHtkZWxldGVQcm9qZWN0fSIsImZ1bmN0aW9uIGRlbGV0ZVRvZG8oZXZ0LCB0YXJnZXRQcm9qZWN0KSB7XHJcbiAgICBpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0gPiAuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcclxuICAgICAgICBjb25zdCB0b0RvVG9EZWxldGUgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpXHJcbiAgICAgICAgdGFyZ2V0UHJvamVjdC5kZWxldGVUb0RvRnJvbVByb2plY3QodG9Eb1RvRGVsZXRlKVxyXG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQoZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgIGNvbnN0IHRvRG9zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKVxyXG4gICAgICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20odG9Eb3NMaXN0KTtcclxuICAgICAgICBhcnIuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgIHRvZG8uaWQgPSBhcnIuaW5kZXhPZih0b0Rvc0xpc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtkZWxldGVUb2RvfSIsImltcG9ydCBQbHVzIGZyb20gJy4uL0ljb25zL3BsdXMtdGhpY2sucG5nJ1xyXG5cclxuY2xhc3MgQ3JlYXRlQWRkQnV0dG9uIHtcclxuICAgIGNyZWF0ZUFkZEJ1dHRvbih3aGF0VG9DcmVhdGUpIHtcclxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idXR0b24nKVxyXG4gICAgICAgIGFkZEJ1dHRvbi5pZCA9IHdoYXRUb0NyZWF0ZVxyXG5cclxuICAgICAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgYWRkSWNvbi5zcmMgPSBQbHVzXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWRkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBhZGRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKVxyXG4gICAgICAgIGFkZFRpdGxlLnRleHRDb250ZW50ID0gYEFkZCAke3doYXRUb0NyZWF0ZX1gXHJcblxyXG4gICAgICAgIGFkZEJ1dHRvbi5hcHBlbmQoYWRkSWNvbiwgYWRkVGl0bGUpXHJcblxyXG4gICAgICAgIHJldHVybiBhZGRCdXR0b25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDcmVhdGVBZGRCdXR0b259IiwiaW1wb3J0IHsgQ3JlYXRlQWRkQnV0dG9uIH0gZnJvbSAnLi9zaG93LWNvbW1vbi1jb21wb25lbnRzLURPTS5qcydcclxuaW1wb3J0IHsgbm9ybWFsaXplRGF0ZSwgZ2V0RGF0ZSB9IGZyb20gJy4uL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL2RhdGEtZnVuY3Rpb25zLmpzJ1xyXG5cclxuY2xhc3MgQ3JlYXRlTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICB0aGlzLm9iamVjdFRvQ3JlYXRlID0gb2JqZWN0VG9DcmVhdGVcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5jYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVudSgpIHsgXHJcbiAgICAgICAgdGhpcy5jYXJkLmlkID0gYGFkZCR7dGhpcy5vYmplY3RUb0NyZWF0ZX1DYXJkYFxyXG4gICAgICAgIHRoaXMuY2FyZC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZCcpXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkSGVhZGVyJylcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGl0bGUnKVxyXG4gICAgICAgIHRoaXMuY2FyZFRpdGxlLnRleHRDb250ZW50ID0gYENyZWF0ZSAke3RoaXMub2JqZWN0VG9DcmVhdGV9YFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdXR0b24nKVxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJyZ0aW1lczsnKVxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaWQgPSAnY2xvc2VNb2RhbCdcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkSGVhZGVyLmFwcGVuZCh0aGlzLmNhcmRUaXRsZSwgdGhpcy5jbG9zZUJ1dHRvbilcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkLmFwcGVuZCh0aGlzLmNhcmRIZWFkZXIsIG5ldyBDcmVhdGVBZGRCdXR0b24oKS5jcmVhdGVBZGRCdXR0b24oYE5ldyR7dGhpcy5vYmplY3RUb0NyZWF0ZX1gKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZFxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgb3ZlcmxheS5pZCA9ICdvdmVybGF5J1xyXG4gICAgICAgIHJldHVybiBvdmVybGF5XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENyZWF0ZVRvZG9NZW51IGV4dGVuZHMgQ3JlYXRlTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICBzdXBlcihvYmplY3RUb0NyZWF0ZSlcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvdy5uYW1lID0gJ3ByaW9yaXR5J1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0ubmFtZSA9ICdwcmlvcml0eSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaC5uYW1lID0gJ3ByaW9yaXR5J1xyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93LnR5cGUgPSAncmFkaW8nXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bS50eXBlID0gJ3JhZGlvJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoLnR5cGUgPSAncmFkaW8nXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cudmFsdWUgPSAnbG93J1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0udmFsdWUgPSAnbWVkaXVtJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRvZG9NZW51KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC1mb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfSBUaXRsZWBcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKVxyXG5cclxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMudGl0bGVJbnB1dClcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmRhdGVJbnB1dC50eXBlID0gJ2RhdGUnXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWlucHV0JylcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dC52YWx1ZSA9IGAke2dldERhdGUoKX1gXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5kYXRlUC50ZXh0Q29udGVudCA9ICdEYXRlJ1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmRhdGVQLCB0aGlzLmRhdGVJbnB1dClcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2hQLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRleHQnKVxyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93UC50ZXh0Q29udGVudCA9ICdMb3cnXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAudGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUC50ZXh0Q29udGVudCA9ICdIaWdoJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByaW9yaXR5TG93LCB0aGlzLnByaW9yaXR5TG93UCwgdGhpcy5wcmlvcml0eU1lZGl1bSwgdGhpcy5wcmlvcml0eU1lZGl1bVAsIHRoaXMucHJpb3JpdHlIaWdoLCB0aGlzLnByaW9yaXR5SGlnaFApXHJcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRhdGVJbnB1dENvbnRhaW5lciwgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1cclxuICAgIH0gICBcclxufVxyXG5cclxuY2xhc3MgQ3JlYXRlUHJvamVjdE1lbnUgZXh0ZW5kcyBDcmVhdGVNb2RhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RUb0NyZWF0ZSkge1xyXG4gICAgICAgIHN1cGVyKG9iamVjdFRvQ3JlYXRlKVxyXG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlUHJvamVjdE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLWZvcm0nKVxyXG5cclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IGAke3RoaXMub2JqZWN0VG9DcmVhdGV9IFRpdGxlYFxyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC10aXRsZScpXHJcblxyXG4gICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy50aXRsZUlucHV0KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDcmVhdGVNb2RhbCwgQ3JlYXRlVG9kb01lbnUsIENyZWF0ZVByb2plY3RNZW51fSIsImltcG9ydCBDaGVja2JveCBmcm9tICcuLi9JY29ucy9mb3JtYXQtbGlzdC1jaGVja2JveC5wbmcnXHJcbmltcG9ydCBUcmFzaCBmcm9tICcuLi9JY29ucy9kZWxldGUucG5nJ1xyXG5cclxuY2xhc3MgRGlzcGxheVByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgaWQpIHtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb2plY3RET00oKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5pZCA9IHRoaXMuaWRcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgcHJvamVjdEljb24uc3JjID0gQ2hlY2tib3hcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nLCAnZGVsZXRlLXByb2plY3QtYnV0dG9uJylcclxuICAgICAgICBkZWxldGVQcm9qZWN0LnNyYyA9IFRyYXNoXHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hcHBlbmQocHJvamVjdEljb24sIHByb2plY3RUaXRsZSwgZGVsZXRlUHJvamVjdClcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RCdXR0b25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtEaXNwbGF5UHJvamVjdH1cclxuIiwiaW1wb3J0IHsgQ3JlYXRlQWRkQnV0dG9uIH0gZnJvbSAnLi9zaG93LWNvbW1vbi1jb21wb25lbnRzLURPTS5qcydcclxuXHJcbmNsYXNzIENyZWF0ZVByb2plY3RDb250YWluZXIge1xyXG5cclxuICAgIGNyZWF0ZXByb2plY3RDb250YWluZXIocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICcnXHJcbiAgICAgICAgfSBlbHNlIHsgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZSB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWRkVG9EbyA9IG5ldyBDcmVhdGVBZGRCdXR0b25cclxuXHJcbiAgICAgICAgY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGFkZFRvRG8uY3JlYXRlQWRkQnV0dG9uKCdUb0RvJylcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvRG9CdXR0b24pXHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRldG9Eb0NvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJylcclxuICAgICAgICByZXR1cm4gdG9Eb0NvbnRhaW5lclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0NyZWF0ZVByb2plY3RDb250YWluZXJ9XHJcbiIsImltcG9ydCBEYXRlIGZyb20gJy4uL0ljb25zL2NhbGVuZGFyLWNsb2NrLnBuZydcclxuaW1wb3J0IFRyYXNoIGZyb20gJy4uL0ljb25zL2RlbGV0ZS5wbmcnXHJcbmltcG9ydCBDaGVja0ljb24gZnJvbSAnLi4vSWNvbnMvY2hlY2stYm9sZC5wbmcnXHJcblxyXG5jbGFzcyBEaXNwbGF5VG9EbyB7XHJcbiAgICBET00odG9kbywgaWQpIHtcclxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJylcclxuICAgICAgICB0b0RvSXRlbS5pZCA9IGlkXHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLXRvZG8taXRlbScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvZG8uZG9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgICAgY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG4gICAgICAgICAgICBjaGVja2VkLnNyYyA9IENoZWNrSWNvblxyXG4gICAgICAgICAgICBjaGVjay5hcHBlbmQoY2hlY2tlZClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRvRG9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdG9Eb1RleHQuY2xhc3NMaXN0LmFkZCgndG9kby10ZXh0JylcclxuICAgICAgICB0b0RvVGV4dC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGRhdGVJY29uLnNyYyA9IERhdGVcclxuICAgICAgICBkYXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgY2FzZSAnbG93JzogXHJcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gJzAuNXJlbSBzb2xpZCBncmVlbidcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdoaWdoJzogXHJcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gJzAuNXJlbSBzb2xpZCBjcmltc29uJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9ICcwLjVyZW0gc29saWQgeWVsbG93J1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJylcclxuICAgICAgICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZVxyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBkZWxldGVUb0RvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicsICdkZWxldGUtcHJvamVjdC1idXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZVRvRG8uc3JjID0gVHJhc2hcclxuXHJcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kKGNoZWNrLCB0b0RvVGV4dCwgZGF0ZUljb24sIGR1ZURhdGVUZXh0LCBkZWxldGVUb0RvKVxyXG5cclxuICAgICAgICByZXR1cm4gdG9Eb0l0ZW1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7RGlzcGxheVRvRG99IiwiaW1wb3J0IHsgdG9nZ2xlVG9kb0NoZWNrIH0gZnJvbSBcIi4vdG9nZ2xlLXRvZG8tY2hlY2tcIlxyXG5pbXBvcnQgeyBkZWxldGVUb2RvIH0gZnJvbSAnLi9kZWxldGUtdG9kby1ET00nXHJcbmltcG9ydCB7IENyZWF0ZVByb2plY3RDb250YWluZXIgfSBmcm9tICcuL3Nob3ctcHJvamVjdC1saXN0LURPTSdcclxuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vQ29tbW9uIGZ1bmN0aW9ucyBtb2R1bGUvbW9kYWwtZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBhZGRUb0RvQnlOYW1lIH0gZnJvbSAnLi9hZGQtdG9kby10b0RPTSdcclxuaW1wb3J0IHsgRGlzcGxheVRvRG8gfSBmcm9tICcuL3Nob3ctdG9kby1ET00nXHJcblxyXG5mdW5jdGlvbiBzaG93VG9kb0xpc3QoZXZ0LCBtYWluLCB1c2VyUHJvamVjdExpc3QpIHtcclxuICAgIGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtYnV0dG9uIDpub3QoLmFkZC1wcm9qZWN0LWJ1dHRvbiknKSkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKSkge1xyXG4gICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHVzZXJQcm9qZWN0TGlzdC5wcm9qZWN0c1tldnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWJ1dHRvbicpLmdldEF0dHJpYnV0ZSgnaWQnKV1cclxuICAgICAgICBsZXQgc2hvd1Byb2plY3QgPSAgbmV3IENyZWF0ZVByb2plY3RDb250YWluZXIoKVxyXG4gICAgICAgIGxldCBzaG93UHJvamVjdENvbnRhaW5lciA9IHNob3dQcm9qZWN0LmNyZWF0ZXByb2plY3RDb250YWluZXIodGFyZ2V0UHJvamVjdClcclxuICAgICAgICBsZXQgc2hvd1RvRG9zID0gc2hvd1Byb2plY3QuY3JlYXRldG9Eb0NvbnRhaW5lcih0YXJnZXRQcm9qZWN0KVxyXG4gICAgICAgIG1haW4uYXBwZW5kKHNob3dQcm9qZWN0Q29udGFpbmVyKVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHRhcmdldFByb2plY3QudG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGxldCBzaG93dG9kb2V4YW1wbGUgPSBuZXcgRGlzcGxheVRvRG8oKS5ET00odGFyZ2V0UHJvamVjdC50b2Rvc1tpXSwgaSlcclxuICAgICAgICAgIHNob3dUb0Rvcy5hcHBlbmQoc2hvd3RvZG9leGFtcGxlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzaG93UHJvamVjdENvbnRhaW5lci5hcHBlbmQoc2hvd1RvRG9zKVxyXG4gICAgXHJcbiAgICAvL3RvZ2dsZSBjaGVja1xyXG4gICAgICAgIHNob3dQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gdG9nZ2xlVG9kb0NoZWNrKGV2dCwgdGFyZ2V0UHJvamVjdCkpXHJcbiAgICAvL2RlbGV0ZSB0b2RvXHJcbiAgICAgICAgc2hvd1Byb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiBkZWxldGVUb2RvKGV2dCwgdGFyZ2V0UHJvamVjdCkpXHJcbiAgICBcclxuICAgICAgICBjb25zdCBvcGVuQWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUb0RvJylcclxuICAgICAgICBcclxuICAgICAgICBvcGVuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvRG9DYXJkJylcclxuICAgICAgICAgIG9wZW5Nb2RhbChtb2RhbClcclxuICAgICAgICAgIGFkZFRvRG9CeU5hbWUobW9kYWwsIHRhcmdldFByb2plY3QpIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7c2hvd1RvZG9MaXN0fSIsImltcG9ydCBDaGVjayBmcm9tICcuLi9JY29ucy9jaGVjay1ib2xkLnBuZydcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVRvZG9DaGVjayhldnQsIHRhcmdldFByb2plY3QpIHtcclxuICAgIGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLmNoZWNrLXRvZG8taXRlbScpKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VG9EbyA9IHRhcmdldFByb2plY3QudG9kb3NbZXZ0LnRhcmdldC5jbG9zZXN0KCcudG9kby1pdGVtJykuZ2V0QXR0cmlidXRlKCdpZCcpXVxyXG4gICAgICAgIHRhcmdldFRvRG8uY2hhbmdlRG9uZSgpXHJcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRUb0RvLmRvbmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG4gICAgICAgICAgICBjaGVja2VkLnNyYyA9IENoZWNrXHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQuYXBwZW5kKGNoZWNrZWQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXZ0LnRhcmdldC5yZW1vdmUoY2hlY2tlZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0KVxyXG59XHJcblxyXG5leHBvcnQge3RvZ2dsZVRvZG9DaGVja30iLCJjbGFzcyBVc2VyUHJvamVjdExpc3Qge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0KHByb2plY3RJbmRleCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtVc2VyUHJvamVjdExpc3R9IiwiY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG9zID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0RvVG9Qcm9qZWN0KHRvRG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9EbylcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUb0RvRnJvbVByb2plY3QodG9Eb0luZGV4KSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodG9Eb0luZGV4LCAxKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1Byb2plY3R9IiwiY2xhc3MgVG9EbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICB0aGlzLmRvbmUgPSBkb25lXHJcbiAgICB9XHJcbiAgICBjaGFuZ2VEb25lKCkge1xyXG4gICAgICAgIHRoaXMuZG9uZSA9ICF0aGlzLmRvbmVcclxuICAgIH1cclxuICAgIGdldERvbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9uZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1RvRG99IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBDb2cgZnJvbSAnLi9JY29ucy9jb2cucG5nJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL0ljb25zL21lbnUucG5nJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuXHJcbmltcG9ydCB7IFVzZXJQcm9qZWN0TGlzdCB9IGZyb20gJy4vRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtcHJvamVjdC1saXN0LmpzJ1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LmpzJ1xyXG5pbXBvcnQgeyBUb0RvIH0gZnJvbSAnLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS10b2RvJ1xyXG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICcuL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL21vZGFsLWZ1bmN0aW9ucy5qcydcclxuaW1wb3J0IHsgQ3JlYXRlTW9kYWwsIENyZWF0ZVRvZG9NZW51LCBDcmVhdGVQcm9qZWN0TWVudX0gZnJvbSAnLi9ET00gbW9kdWxlcy9zaG93LW1vZGFscy1ET00nXHJcbmltcG9ydCB7IERpc3BsYXlQcm9qZWN0IH0gZnJvbSAnLi9ET00gbW9kdWxlcy9zaG93LXByb2plY3QtRE9NJ1xyXG5pbXBvcnQgeyBDcmVhdGVBZGRCdXR0b24gfSBmcm9tICcuL0RPTSBtb2R1bGVzL3Nob3ctY29tbW9uLWNvbXBvbmVudHMtRE9NJ1xyXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9ET00gbW9kdWxlcy9kZWxldGUtcHJvamVjdC1ET00nXHJcbmltcG9ydCB7IHNob3dUb2RvTGlzdCB9IGZyb20gJy4vRE9NIG1vZHVsZXMvc2hvdy10b2RvLWxpc3QtRE9NJ1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0QnlOYW1lIH0gZnJvbSAnLi9ET00gbW9kdWxlcy9hZGQtcHJvamVjdC10b0RPTSdcclxuaW1wb3J0IHsgYWRkVG9Eb0J5TmFtZSB9IGZyb20gJy4vRE9NIG1vZHVsZXMvYWRkLXRvZG8tdG9ET00nXHJcbmltcG9ydCB7IHRvZ2dsZVRvZG9DaGVjayB9IGZyb20gJy4vRE9NIG1vZHVsZXMvdG9nZ2xlLXRvZG8tY2hlY2snXHJcbmltcG9ydCB7IGRlbGV0ZVRvZG8gfSBmcm9tICcuL0RPTSBtb2R1bGVzL2RlbGV0ZS10b2RvLURPTSdcclxuaW1wb3J0IHsgcmVhZERhdGFGcm9tSlNPTiB9IGZyb20gJy4vQ29tbW9uIGZ1bmN0aW9ucyBtb2R1bGUvcmVhZC1kYXRhLWZyb20tbG9jYWxTdG9yYWdlJ1xyXG5cclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKVxyXG5cclxuYm9keS5hcHBlbmQod3JhcHBlcilcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxyXG5cclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuY29uc3QgbWVudUJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5tZW51QnRuSWNvbi5zcmMgPSBNZW51XHJcbm1lbnVCdG5JY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJylcclxuXHJcbm1lbnVCdG4uYXBwZW5kKG1lbnVCdG5JY29uKVxyXG50aXRsZS50ZXh0Q29udGVudCA9ICdUb0RvTGlzdCdcclxuXHJcbmNvbnN0IHNldHRpbmdzQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbnNldHRpbmdzQnRuSWNvbi5zcmMgPSBDb2dcclxuc2V0dGluZ3NCdG5JY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJylcclxuc2V0dGluZ3NCdG4uYXBwZW5kKHNldHRpbmdzQnRuSWNvbilcclxuXHJcbmhlYWRlci5hcHBlbmQobWVudUJ0biwgdGl0bGUsIHNldHRpbmdzQnRuKVxyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5wcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKVxyXG5jb25zdCBwcm9qZWN0TGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5wcm9qZWN0TGlzdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xyXG5wcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdExpc3RUaXRsZSlcclxuXHJcbm1haW4uYXBwZW5kKHByb2plY3RMaXN0KVxyXG5cclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuY29uc3QgbGVnYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGVnYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2xlZ2FsLWluZm8nKVxyXG5jb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IGNvcHlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnNpdGVOYW1lLnRleHRDb250ZW50ID0gYEppamFSYXJlIEluYy4sIDIwMjJgXHJcbmNvcHlSaWdodC50ZXh0Q29udGVudCA9ICdBbGwgcmlnaHRzIHJlc2VydmVkJ1xyXG5sZWdhbEluZm8uYXBwZW5kKHNpdGVOYW1lLCBjb3B5UmlnaHQpXHJcbmZvb3Rlci5hcHBlbmRDaGlsZChsZWdhbEluZm8pXHJcbndyYXBwZXIuYXBwZW5kKG1haW4sIGZvb3RlcilcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxufSlcclxuXHJcbmNvbnN0IHVzZXJQcm9qZWN0TGlzdCA9IG5ldyBVc2VyUHJvamVjdExpc3QoKVxyXG5cclxucmVhZERhdGFGcm9tSlNPTih1c2VyUHJvamVjdExpc3QsIHByb2plY3RMaXN0KVxyXG5cclxubGV0IGFkZFByb2plY3RCdXR0b24gPSBuZXcgQ3JlYXRlQWRkQnV0dG9uKClcclxucHJvamVjdExpc3QuYXBwZW5kKGFkZFByb2plY3RCdXR0b24uY3JlYXRlQWRkQnV0dG9uKCdQcm9qZWN0JykpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnRvZG9saXN0ID0gSlNPTi5zdHJpbmdpZnkodXNlclByb2plY3RMaXN0KVxyXG59KVxyXG5cclxubGV0IGFkZFByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE1lbnUoJ1Byb2plY3QnKVxyXG5sZXQgY2FyZCA9IGFkZFByb2plY3QuY3JlYXRlTWVudSgpXHJcbmxldCBpbnB1dCA9IGFkZFByb2plY3QuY3JlYXRlUHJvamVjdE1lbnUoKVxyXG5cclxuY2FyZC5hcHBlbmQoaW5wdXQpXHJcblxyXG5jb25zdCBvdmVybGF5ID0gYWRkUHJvamVjdC5jcmVhdGVPdmVybGF5KClcclxuYm9keS5hcHBlbmQob3ZlcmxheSlcclxuXHJcbmxldCBhZGRUb0RvID0gbmV3IENyZWF0ZVRvZG9NZW51KCdUb0RvJylcclxubGV0IGNhcmRUb0RvID0gYWRkVG9Eby5jcmVhdGVNZW51KClcclxubGV0IGlucHV0VG9EbyA9IGFkZFRvRG8uY3JlYXRlVG9kb01lbnUoKVxyXG5jYXJkVG9Eby5hcHBlbmQoaW5wdXRUb0RvKVxyXG5cclxud3JhcHBlci5hcHBlbmQoY2FyZClcclxud3JhcHBlci5hcHBlbmQoY2FyZFRvRG8pXHJcblxyXG5cclxuY29uc3Qgb3BlbkFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJvamVjdCcpXHJcbmNvbnN0IG9wZW5BZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RvRG8nKVxyXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjbG9zZU1vZGFsJylcclxuXHJcbm9wZW5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdENhcmQnKVxyXG4gICAgb3Blbk1vZGFsKG1vZGFsKVxyXG4gICAgYWRkUHJvamVjdEJ5TmFtZShtb2RhbCwgdXNlclByb2plY3RMaXN0LCBwcm9qZWN0TGlzdCkgXHJcbn0pXHJcblxyXG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IGRlbGV0ZVByb2plY3QoZXZ0LCB1c2VyUHJvamVjdExpc3QsIHByb2plY3RMaXN0KSkgXHJcblxyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGUtY2FyZC5hY3RpdmUnKVxyXG4gIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcclxuICAgIGNsb3NlTW9kYWwobW9kYWwpXHJcbiAgfSlcclxufSlcclxuXHJcbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcuY3JlYXRlLWNhcmQnKVxyXG4gICAgY2xvc2VNb2RhbChtb2RhbClcclxuICB9KVxyXG59KVxyXG5cclxucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldnQpID0+IHNob3dUb2RvTGlzdChldnQsIG1haW4sIHVzZXJQcm9qZWN0TGlzdCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9