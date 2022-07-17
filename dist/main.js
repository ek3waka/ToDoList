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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(195, 156, 226);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;;;;;;;;;;;CAYC,SAAS;CACT,UAAU;CACV,SAAS;CACT,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;;;AAIA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gCAAgC;IAChC,SAAS;IACT,4CAA4C;IAC5C,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;;AAExB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,oBAAoB;IACpB,2BAA2B;AAC/B;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;;AAGA;IACI,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,oBAAoB;IACpB,mBAAmB;IACnB,oCAAoC;IACpC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,SAAS;IACT,iBAAiB;IACjB,qBAAqB;IACrB,6BAA6B;IAC7B;;AAEJ;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB;AACJ;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;;;;;AAKA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,eAAe;IACf,oBAAoB;IACpB,SAAS;IACT,iBAAiB;IACjB,qBAAqB;;AAEzB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;IAClB,iCAAiC;IACjC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;;AAGb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,wBAAwB;IACxB,0BAA0B;IAC1B,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,qBAAqB;IACrB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,sBAAsB;IACtB,cAAc;IACd,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,cAAc;;IAEd,eAAe;IACf,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB;AACJ;;;AAGA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;EACtB;;EAEA;IACE,UAAU;IACV,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,yCAAyC;EAC3C;;EAEA;IACE,QAAQ;EACV","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\r\n:root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(195, 156, 226);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }"],"sourceRoot":""}]);
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

/***/ "./src/create-card.js":
/*!****************************!*\
  !*** ./src/create-card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCard": () => (/* binding */ CreateCard),
/* harmony export */   "CreateProjectMenu": () => (/* binding */ CreateProjectMenu),
/* harmony export */   "CreateTodoMenu": () => (/* binding */ CreateTodoMenu)
/* harmony export */ });
/* harmony import */ var _plus_thick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plus-thick.png */ "./src/plus-thick.png");
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");



class CreateCard {
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

        this.card.append(this.cardHeader, new _project_list__WEBPACK_IMPORTED_MODULE_1__.CreateAddButton().createAddButton(`New${this.objectToCreate}`))

        return this.card
    }

    createOverlay() {
        const overlay = document.createElement('div')
        overlay.id = 'overlay'
        return overlay
    }
}

class CreateTodoMenu extends CreateCard {
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
        this.dateInput.value = `${getDate()}`

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

class CreateProjectMenu extends CreateCard {
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


function getDate() {
    let now = new Date()
    let day = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)
    return now.getFullYear() + "-" + (month) + "-" + (day)
}



/***/ }),

/***/ "./src/project-card.js":
/*!*****************************!*\
  !*** ./src/project-card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateProjectContainer": () => (/* binding */ CreateProjectContainer),
/* harmony export */   "DisplayToDo": () => (/* binding */ DisplayToDo),
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _calendar_clock_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-clock.png */ "./src/calendar-clock.png");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _check_bold_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-bold.png */ "./src/check-bold.png");
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");






class ToDo {
    constructor(title, dueDate, priority) {
        this.title = title
        this.dueDate = dueDate
        this.priority = priority
        this.done = false
    }
    changeDone() {
        this.done = !this.done
    }
    getDone() {
        return this.done
    }
}


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
            checked.src = _check_bold_png__WEBPACK_IMPORTED_MODULE_2__
            check.append(checked)
        }


        const toDoText = document.createElement('p')
        toDoText.classList.add('todo-text')
        toDoText.textContent = todo.title

        const dateIcon = document.createElement('img')
        dateIcon.src = _calendar_clock_png__WEBPACK_IMPORTED_MODULE_0__
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
        deleteToDo.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__

        toDoItem.append(check, toDoText, dateIcon, dueDateText, deleteToDo)



        return toDoItem
    }

}

class CreateProjectContainer {
    createprojectContainer(project) {
        const projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container')

        const projectTitle = document.createElement('div')
        projectTitle.classList.add('project-title')
        projectTitle.textContent = project.title
        
        const addToDo = new _project_list__WEBPACK_IMPORTED_MODULE_3__.CreateAddButton

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

/***/ "./src/project-list.js":
/*!*****************************!*\
  !*** ./src/project-list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAddButton": () => (/* binding */ CreateAddButton),
/* harmony export */   "DisplayProject": () => (/* binding */ DisplayProject),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "UserProjectList": () => (/* binding */ UserProjectList)
/* harmony export */ });
/* harmony import */ var _format_list_checkbox_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-list-checkbox.png */ "./src/format-list-checkbox.png");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _plus_thick_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plus-thick.png */ "./src/plus-thick.png");




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

let projectArray = []

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



class DisplayProject {
    constructor(project, id) {
        this.project = project
        this.id = id
    }
    showProjectDOM() {
        const projectButton = document.createElement('button')
        projectButton.classList.add('project-button')
        projectButton.id = this.id


        const projectIcon = document.createElement('img')
        projectIcon.classList.add('project-icon')
        projectIcon.src = _format_list_checkbox_png__WEBPACK_IMPORTED_MODULE_0__
        
        const projectTitle = document.createElement('p')
        projectTitle.classList.add('project-name')
        projectTitle.textContent = this.project.title

        const deleteProject = document.createElement('img')
        deleteProject.classList.add('project-icon', 'delete-project-button')
        deleteProject.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__
        projectButton.append(projectIcon, projectTitle, deleteProject)
        return projectButton
    }
}

class CreateAddButton {
    createAddButton(whatToCreate) {
        const addButton = document.createElement('button')
        addButton.classList.add('add-project-button')
        addButton.id = whatToCreate

        const addIcon = document.createElement('img')
        addIcon.classList.add('project-icon')
        addIcon.src = _plus_thick_png__WEBPACK_IMPORTED_MODULE_2__
        
        const addTitle = document.createElement('p')
        addTitle.classList.add('project-name')
        addTitle.textContent = `Add ${whatToCreate}`

        addButton.append(addIcon, addTitle)

        return addButton
    }
}

//закинуть бы создание общих компонентов куда-нибудь в другой модуль, ыыыы





/***/ }),

/***/ "./src/calendar-clock.png":
/*!********************************!*\
  !*** ./src/calendar-clock.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c05418e5062a5123f95.png";

/***/ }),

/***/ "./src/check-bold.png":
/*!****************************!*\
  !*** ./src/check-bold.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbefe47493f82467c494.png";

/***/ }),

/***/ "./src/cog.png":
/*!*********************!*\
  !*** ./src/cog.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f06443d81555c0cc2fd1.png";

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c14bd3faa68ea51d41e6.png";

/***/ }),

/***/ "./src/format-list-checkbox.png":
/*!**************************************!*\
  !*** ./src/format-list-checkbox.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4c5e40fafc0f4486df5.png";

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fecc4ece4ddcf0ec566a.png";

/***/ }),

/***/ "./src/plus-thick.png":
/*!****************************!*\
  !*** ./src/plus-thick.png ***!
  \****************************/
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
/* harmony import */ var _cog_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cog.png */ "./src/cog.png");
/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.png */ "./src/menu.png");
/* harmony import */ var _check_bold_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-bold.png */ "./src/check-bold.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-list */ "./src/project-list.js");
/* harmony import */ var _create_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-card */ "./src/create-card.js");
/* harmony import */ var _project_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-card */ "./src/project-card.js");


 //delete later when remove to module






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
menuBtnIcon.src = _menu_png__WEBPACK_IMPORTED_MODULE_1__
menuBtnIcon.classList.add('header-icon')

menuBtn.append(menuBtnIcon)
title.textContent = 'ToDoList'

const settingsBtnIcon = document.createElement('img')
settingsBtnIcon.src = _cog_png__WEBPACK_IMPORTED_MODULE_0__
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















const userProjectList = new _project_list__WEBPACK_IMPORTED_MODULE_4__.UserProjectList()



let example = new _project_list__WEBPACK_IMPORTED_MODULE_4__.Project('Project1')
projectList.append(new _project_list__WEBPACK_IMPORTED_MODULE_4__.DisplayProject(example, 0).showProjectDOM())

let example2 = new _project_list__WEBPACK_IMPORTED_MODULE_4__.Project('Example2')
projectList.append(new _project_list__WEBPACK_IMPORTED_MODULE_4__.DisplayProject(example2, 1).showProjectDOM())

let addProjectButton = new _project_list__WEBPACK_IMPORTED_MODULE_4__.CreateAddButton()
projectList.append(addProjectButton.createAddButton('Project'))


/////////////////////
///add project and todo modal
let addProject = new _create_card__WEBPACK_IMPORTED_MODULE_5__.CreateProjectMenu('Project')
let card = addProject.createMenu()
let input = addProject.createProjectMenu()

card.append(input)
wrapper.append(card)

const overlay = addProject.createOverlay()
body.append(overlay)

let addToDo = new _create_card__WEBPACK_IMPORTED_MODULE_5__.CreateTodoMenu('ToDo')
let cardToDo = addToDo.createMenu()
let inputToDo = addToDo.createTodoMenu()
cardToDo.append(inputToDo)
wrapper.append(cardToDo)
///////////////////////////////



const openAddProject = document.querySelector('#Project')
const openAddToDo = document.querySelector('#ToDo')
const closeModalButtons = document.querySelectorAll('#closeModal')



openAddProject.addEventListener('click', () => {
    const modal = document.querySelector('#addProjectCard')
    openModal(modal)
    addProjectByName(modal) 
  })


function addProjectByName(modal) {
  const addNewProjectButton = document.querySelector('#NewProject')

  addNewProjectButton.addEventListener('click', () => {
      const projectTitle = document.querySelector('.input-title')
      const project = new _project_list__WEBPACK_IMPORTED_MODULE_4__.Project(`${projectTitle.value}`)
      userProjectList.addProjectToProjectList(project)
      projectList.append(new _project_list__WEBPACK_IMPORTED_MODULE_4__.DisplayProject(project, userProjectList.projects.length-1).showProjectDOM())
      closeModal(modal)
    }, { once: true })
}


projectList.addEventListener('click', function(evt) {
  if(evt.target.closest('.delete-project-button')) {
    const projectToDelete = evt.target.getAttribute('id')
    console.log(projectToDelete)
    userProjectList.deleteProjectFromProjectList(projectToDelete)
    console.log(userProjectList)
    projectList.removeChild(evt.target.parentElement)
    const ButtonsList = document.querySelectorAll('#Project ~ .project-button')
    const arr = Array.from(ButtonsList);
    arr.forEach(project => {
      project.id = arr.indexOf(project)
    })
    }
    })




overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.create-card.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.create-card')
    closeModal(modal)
  })
})

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
  date.value = `${getDate()}`
  priorityMedium.checked = true
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


function getDate() {
    let now = new Date()
    let day = ("0" + now.getDate()).slice(-2)
    let month = ("0" + (now.getMonth() + 1)).slice(-2)
    return now.getFullYear() + "-" + (month) + "-" + (day)
}



let todoexample = new _project_card__WEBPACK_IMPORTED_MODULE_6__.ToDo('Do smth', '29.01.12', 'high')
let todoexample2 = new _project_card__WEBPACK_IMPORTED_MODULE_6__.ToDo('todoexample2', '01.01.42', 'low')
let todoexample3 = new _project_card__WEBPACK_IMPORTED_MODULE_6__.ToDo('todoexample3', '11.11.23', 'medium')

example.addToDoToProject(todoexample)
example.addToDoToProject(todoexample2)
example.addToDoToProject(todoexample3)


let todoexample4 = new _project_card__WEBPACK_IMPORTED_MODULE_6__.ToDo('1', '01.01.23', 'medium')
let todoexample5 = new _project_card__WEBPACK_IMPORTED_MODULE_6__.ToDo('todoexample2323', '01.01.23', 'medium')
let todoexample6 = new _project_card__WEBPACK_IMPORTED_MODULE_6__.ToDo('todoexample3213231', '01.01.23', 'medium')

example2.addToDoToProject(todoexample4)
example2.addToDoToProject(todoexample5)
example2.addToDoToProject(todoexample6)

userProjectList.addProjectToProjectList(example)
userProjectList.addProjectToProjectList(example2)



projectList.addEventListener('click', function(evt) {
  if(evt.target.closest('.project-button :not(.add-project-button)')) {
    if (document.querySelector('.project-container')) {
      main.removeChild(document.querySelector('.project-container'))
    }
    const targetProject = userProjectList.projects[evt.target.closest('.project-button').getAttribute('id')]
    let showProject =  new _project_card__WEBPACK_IMPORTED_MODULE_6__.CreateProjectContainer()
    let showProjectContainer = showProject.createprojectContainer(targetProject)
    let showToDos = showProject.createtoDoContainer(targetProject)
    main.append(showProjectContainer)
    for (let i=0; i < targetProject.todos.length; i++) {
      let showtodoexample = new _project_card__WEBPACK_IMPORTED_MODULE_6__.DisplayToDo().DOM(targetProject.todos[i], i)
      showToDos.append(showtodoexample)
    }
    showProjectContainer.append(showToDos)
    
    showProjectContainer.addEventListener('click', function(evt) {
      if(evt.target.closest('.check-todo-item')) {
          const targetToDo = targetProject.todos[evt.target.closest('.todo-item').getAttribute('id')]
          targetToDo.changeDone()
          const checked = document.createElement('img')
          if (targetToDo.done === true) {
            checked.classList.add('project-icon')
            checked.src = _check_bold_png__WEBPACK_IMPORTED_MODULE_2__
            evt.target.append(checked)
          } else {
            evt.target.remove(checked)
          }
      }
    })

    showProjectContainer.addEventListener('click', function(evt) {
      if(evt.target.closest('.todo-item > .delete-project-button')) {
        const todoContainer = document.querySelector('.todo-container')
        const toDoToDelete = evt.target.getAttribute('id')
        console.log(toDoToDelete)
        targetProject.deleteToDoFromProject(toDoToDelete)
        console.log(targetProject)
        todoContainer.removeChild(evt.target.parentElement)
        const toDosList = document.querySelectorAll('.todo-item')
        const arr = Array.from(toDosList);
        arr.forEach(todo => {
          todo.id = arr.indexOf(toDosList)
        })
        }
        })

    const openAddToDo = document.querySelector('#ToDo')
    openAddToDo.addEventListener('click', () => {
      const modal = document.querySelector('#addToDoCard')
      openModal(modal)
      addToDoByName(modal, targetProject) 
    })
    }
    })

  


function NormalizeDate(date) {
  let dateDay = date[date.length-2] + date[date.length-1]
  let monthDate = date[date.length-5] + date[date.length-4]
  let yearDate = date[date.length-8] + date[date.length-7]
  return `${dateDay}.${monthDate}.${yearDate}`
}

function addToDoByName(modal, targetProject) {
  const addNewToDoButton = document.querySelector('#NewToDo')

  addNewToDoButton.addEventListener('click', () => {
      const todoContainer = document.querySelector('.todo-container')
      const ToDoTitle = document.querySelector('input[placeholder="ToDo Title"]')
      const ToDoDueDate = document.querySelector('.todo-date-input')
      const ToDoPriority = document.querySelector('input[name="priority"]:checked')
      
      const todo = new _project_card__WEBPACK_IMPORTED_MODULE_6__.ToDo(`${ToDoTitle.value}`, `${NormalizeDate(ToDoDueDate.value)}`, `${ToDoPriority.value}`)
      
      targetProject.addToDoToProject(todo)

      todoContainer.append(new _project_card__WEBPACK_IMPORTED_MODULE_6__.DisplayToDo().DOM(todo, targetProject.todos.length - 1))

      closeModal(modal)
    }, { once: true })
  }



menuBtn.addEventListener('click', () => {
    projectList.classList.toggle('hidden')
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZ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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUSxHQUFHLFVBQVUsR0FBRyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0NBQUksSUFBSSxnQkFBZ0IsTUFBTSxpQ0FBaUMsTUFBTSxtQkFBbUI7QUFDL0c7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNEQUFXO0FBQzFDO0FBQ0E7QUFDQSxLQUFLLElBQUksWUFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY3JlYXRlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC1jYXJkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWNhcmQtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAtLWNhcmQtaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGgxLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI2LCA0MSUsIDEwJSwgMC45NTIpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzIDU4IDY2KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA1OCA2Nik7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ubGVnYWwtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWljb24ge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxMzcsIDEzNCk7XFxyXFxuICAgIHdpZHRoOiAyOHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uLCAuYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBvcmRlcjogM1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLCAuYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTU4LCAxNTgsIDE1OCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLCAuYWRkLXByb2plY3QtdGV4dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWljb24ge1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLXRvZG8taXRlbSB7XFxyXFxuICAgIHdpZHRoOiAzMnB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDk5LCA5OSwgOTkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGV4dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQge1xcclxcbiAgICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgICB3aWR0aDogMzc1cHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxNTYsIDIyNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRpdGxlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtaW5wdXQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eSB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJpb3JpdHktdGl0bGUge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZG9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10aXRsZTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDEzNywgMTQzKTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZS1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDEzNywgMTQzKTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdGUtY2FyZC5hY3RpdmUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNQcm9qZWN0IHtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7Ozs7Ozs7Ozs7OztDQVlDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOzs7O0FBSUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJ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dFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCcpO1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1jYXJkLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgLS1jYXJkLWhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBoMSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyNiwgNDElLCAxMCUsIDAuOTUyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA1OCA2Nik7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgNTggNjYpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2FsLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTM3LCAxMzQpO1xcclxcbiAgICB3aWR0aDogMjhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiwgLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3JkZXI6IDNcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1OCwgMTU4LCAxNTgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSwgLmFkZC1wcm9qZWN0LXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgICB3aWR0aDogMjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4xcmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jaGVjay10b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5OSwgOTksIDk5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDM3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTU2LCAyMjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10aXRsZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaW9yaXR5LXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi51bmRvbmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGl0bGU6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRlLWNhcmQuYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjUHJvamVjdCB7XFxyXFxuICAgIG9yZGVyOiA0O1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsdXMgZnJvbSAnLi9wbHVzLXRoaWNrLnBuZydcclxuaW1wb3J0IHsgQ3JlYXRlQWRkQnV0dG9uIH0gZnJvbSAnLi9wcm9qZWN0LWxpc3QnXHJcblxyXG5jbGFzcyBDcmVhdGVDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdFRvQ3JlYXRlKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RUb0NyZWF0ZSA9IG9iamVjdFRvQ3JlYXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLmNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lbnUoKSB7IFxyXG4gICAgICAgIHRoaXMuY2FyZC5pZCA9IGBhZGQke3RoaXMub2JqZWN0VG9DcmVhdGV9Q2FyZGBcclxuICAgICAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQnKVxyXG5cclxuICAgICAgICB0aGlzLmNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZEhlYWRlcicpXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRpdGxlJylcclxuICAgICAgICB0aGlzLmNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGBDcmVhdGUgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfWBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnV0dG9uJylcclxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsICcmdGltZXM7JylcclxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlTW9kYWwnXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZEhlYWRlci5hcHBlbmQodGhpcy5jYXJkVGl0bGUsIHRoaXMuY2xvc2VCdXR0b24pXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZC5hcHBlbmQodGhpcy5jYXJkSGVhZGVyLCBuZXcgQ3JlYXRlQWRkQnV0dG9uKCkuY3JlYXRlQWRkQnV0dG9uKGBOZXcke3RoaXMub2JqZWN0VG9DcmVhdGV9YCkpXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPdmVybGF5KCkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG92ZXJsYXkuaWQgPSAnb3ZlcmxheSdcclxuICAgICAgICByZXR1cm4gb3ZlcmxheVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDcmVhdGVUb2RvTWVudSBleHRlbmRzIENyZWF0ZUNhcmQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICBzdXBlcihvYmplY3RUb0NyZWF0ZSlcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvdy5uYW1lID0gJ3ByaW9yaXR5J1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0ubmFtZSA9ICdwcmlvcml0eSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaC5uYW1lID0gJ3ByaW9yaXR5J1xyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93LnR5cGUgPSAncmFkaW8nXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bS50eXBlID0gJ3JhZGlvJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoLnR5cGUgPSAncmFkaW8nXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cudmFsdWUgPSAnbG93J1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0udmFsdWUgPSAnbWVkaXVtJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRvZG9NZW51KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC1mb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfSBUaXRsZWBcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKVxyXG5cclxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMudGl0bGVJbnB1dClcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmRhdGVJbnB1dC50eXBlID0gJ2RhdGUnXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWlucHV0JylcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dC52YWx1ZSA9IGAke2dldERhdGUoKX1gXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5kYXRlUC50ZXh0Q29udGVudCA9ICdEYXRlJ1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmRhdGVQLCB0aGlzLmRhdGVJbnB1dClcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2hQLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRleHQnKVxyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93UC50ZXh0Q29udGVudCA9ICdMb3cnXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAudGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUC50ZXh0Q29udGVudCA9ICdIaWdoJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByaW9yaXR5TG93LCB0aGlzLnByaW9yaXR5TG93UCwgdGhpcy5wcmlvcml0eU1lZGl1bSwgdGhpcy5wcmlvcml0eU1lZGl1bVAsIHRoaXMucHJpb3JpdHlIaWdoLCB0aGlzLnByaW9yaXR5SGlnaFApXHJcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRhdGVJbnB1dENvbnRhaW5lciwgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcblxyXG5jbGFzcyBDcmVhdGVQcm9qZWN0TWVudSBleHRlbmRzIENyZWF0ZUNhcmQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICBzdXBlcihvYmplY3RUb0NyZWF0ZSlcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIH1cclxuICAgIGNyZWF0ZVByb2plY3RNZW51KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC1mb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfSBUaXRsZWBcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKVxyXG5cclxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMudGl0bGVJbnB1dClcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREYXRlKCkge1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIGxldCBkYXkgPSAoXCIwXCIgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMilcclxuICAgIGxldCBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcclxuICAgIHJldHVybiBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG1vbnRoKSArIFwiLVwiICsgKGRheSlcclxufVxyXG5cclxuZXhwb3J0IHtDcmVhdGVDYXJkLCBDcmVhdGVQcm9qZWN0TWVudSwgQ3JlYXRlVG9kb01lbnV9IiwiaW1wb3J0IERhdGUgZnJvbSAnLi9jYWxlbmRhci1jbG9jay5wbmcnXHJcbmltcG9ydCBUcmFzaCBmcm9tICcuL2RlbGV0ZS5wbmcnXHJcbmltcG9ydCBDaGVja0ljb24gZnJvbSAnLi9jaGVjay1ib2xkLnBuZydcclxuaW1wb3J0IHsgQ3JlYXRlQWRkQnV0dG9uIH0gZnJvbSAnLi9wcm9qZWN0LWxpc3QnXHJcblxyXG5cclxuY2xhc3MgVG9EbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5kb25lID0gZmFsc2VcclxuICAgIH1cclxuICAgIGNoYW5nZURvbmUoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lID0gIXRoaXMuZG9uZVxyXG4gICAgfVxyXG4gICAgZ2V0RG9uZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb25lXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBEaXNwbGF5VG9EbyB7XHJcbiAgICBET00odG9kbywgaWQpIHtcclxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJylcclxuICAgICAgICB0b0RvSXRlbS5pZCA9IGlkXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLXRvZG8taXRlbScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvZG8uZG9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgICAgY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG4gICAgICAgICAgICBjaGVja2VkLnNyYyA9IENoZWNrSWNvblxyXG4gICAgICAgICAgICBjaGVjay5hcHBlbmQoY2hlY2tlZClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCB0b0RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRvRG9UZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGV4dCcpXHJcbiAgICAgICAgdG9Eb1RleHQudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBkYXRlSWNvbi5zcmMgPSBEYXRlXHJcbiAgICAgICAgZGF0ZUljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJylcclxuXHJcbiAgICAgICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6IFxyXG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9ICcwLjVyZW0gc29saWQgZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnaGlnaCc6IFxyXG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9ICcwLjVyZW0gc29saWQgY3JpbXNvbidcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJvcmRlckxlZnQgPSAnMC41cmVtIHNvbGlkIHllbGxvdydcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpXHJcbiAgICAgICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGVcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nLCAnZGVsZXRlLXByb2plY3QtYnV0dG9uJylcclxuICAgICAgICBkZWxldGVUb0RvLnNyYyA9IFRyYXNoXHJcblxyXG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZChjaGVjaywgdG9Eb1RleHQsIGRhdGVJY29uLCBkdWVEYXRlVGV4dCwgZGVsZXRlVG9EbylcclxuXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdG9Eb0l0ZW1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIENyZWF0ZVByb2plY3RDb250YWluZXIge1xyXG4gICAgY3JlYXRlcHJvamVjdENvbnRhaW5lcihwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGVcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhZGRUb0RvID0gbmV3IENyZWF0ZUFkZEJ1dHRvblxyXG5cclxuICAgICAgICBjb25zdCBhZGRUb0RvQnV0dG9uID0gYWRkVG9Eby5jcmVhdGVBZGRCdXR0b24oJ1RvRG8nKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvRG9CdXR0b24pXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGV0b0RvQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKVxyXG4gICAgICAgIHJldHVybiB0b0RvQ29udGFpbmVyXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtUb0RvLCBEaXNwbGF5VG9EbywgQ3JlYXRlUHJvamVjdENvbnRhaW5lcn1cclxuIiwiaW1wb3J0IENoZWNrYm94IGZyb20gJy4vZm9ybWF0LWxpc3QtY2hlY2tib3gucG5nJ1xyXG5pbXBvcnQgVHJhc2ggZnJvbSAnLi9kZWxldGUucG5nJ1xyXG5pbXBvcnQgUGx1cyBmcm9tICcuL3BsdXMtdGhpY2sucG5nJ1xyXG5cclxuY2xhc3MgVXNlclByb2plY3RMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgfVxyXG4gICAgZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0SW5kZXgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0QXJyYXkgPSBbXVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG9zID0gW11cclxuICAgIH1cclxuICAgIGFkZFRvRG9Ub1Byb2plY3QodG9Ebykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b0RvKVxyXG4gICAgfVxyXG4gICAgZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0KHRvRG9JbmRleCkge1xyXG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKHRvRG9JbmRleCwgMSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBEaXNwbGF5UHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LCBpZCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgIH1cclxuICAgIHNob3dQcm9qZWN0RE9NKCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKVxyXG4gICAgICAgIHByb2plY3RCdXR0b24uaWQgPSB0aGlzLmlkXHJcblxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJylcclxuICAgICAgICBwcm9qZWN0SWNvbi5zcmMgPSBDaGVja2JveFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZVxyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicsICdkZWxldGUtcHJvamVjdC1idXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZVByb2plY3Quc3JjID0gVHJhc2hcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmFwcGVuZChwcm9qZWN0SWNvbiwgcHJvamVjdFRpdGxlLCBkZWxldGVQcm9qZWN0KVxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0QnV0dG9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENyZWF0ZUFkZEJ1dHRvbiB7XHJcbiAgICBjcmVhdGVBZGRCdXR0b24od2hhdFRvQ3JlYXRlKSB7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtYnV0dG9uJylcclxuICAgICAgICBhZGRCdXR0b24uaWQgPSB3aGF0VG9DcmVhdGVcclxuXHJcbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG4gICAgICAgIGFkZEljb24uc3JjID0gUGx1c1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFkZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgYWRkVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJylcclxuICAgICAgICBhZGRUaXRsZS50ZXh0Q29udGVudCA9IGBBZGQgJHt3aGF0VG9DcmVhdGV9YFxyXG5cclxuICAgICAgICBhZGRCdXR0b24uYXBwZW5kKGFkZEljb24sIGFkZFRpdGxlKVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkQnV0dG9uXHJcbiAgICB9XHJcbn1cclxuXHJcbi8v0LfQsNC60LjQvdGD0YLRjCDQsdGLINGB0L7Qt9C00LDQvdC40LUg0L7QsdGJ0LjRhSDQutC+0LzQv9C+0L3QtdC90YLQvtCyINC60YPQtNCwLdC90LjQsdGD0LTRjCDQsiDQtNGA0YPQs9C+0Lkg0LzQvtC00YPQu9GMLCDRi9GL0YvRi1xyXG5cclxuXHJcbmV4cG9ydCB7VXNlclByb2plY3RMaXN0LCBQcm9qZWN0LCBEaXNwbGF5UHJvamVjdCwgQ3JlYXRlQWRkQnV0dG9ufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENvZyBmcm9tICcuL2NvZy5wbmcnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5wbmcnXHJcbmltcG9ydCBDaGVjayBmcm9tICcuL2NoZWNrLWJvbGQucG5nJyAvL2RlbGV0ZSBsYXRlciB3aGVuIHJlbW92ZSB0byBtb2R1bGVcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0IHtVc2VyUHJvamVjdExpc3QsIFByb2plY3QsIERpc3BsYXlQcm9qZWN0LCBDcmVhdGVBZGRCdXR0b24sIFByb2plY3RMaXN0fSBmcm9tICcuL3Byb2plY3QtbGlzdCdcclxuaW1wb3J0IHtDcmVhdGVDYXJkLCBDcmVhdGVQcm9qZWN0TWVudSwgQ3JlYXRlVG9kb01lbnV9IGZyb20gJy4vY3JlYXRlLWNhcmQnXHJcbmltcG9ydCB7VG9EbywgRGlzcGxheVRvRG8sIENyZWF0ZVByb2plY3RDb250YWluZXJ9IGZyb20gJy4vcHJvamVjdC1jYXJkJ1xyXG5cclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKVxyXG5cclxuYm9keS5hcHBlbmQod3JhcHBlcilcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxyXG5cclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuY29uc3QgbWVudUJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5tZW51QnRuSWNvbi5zcmMgPSBNZW51XHJcbm1lbnVCdG5JY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJylcclxuXHJcbm1lbnVCdG4uYXBwZW5kKG1lbnVCdG5JY29uKVxyXG50aXRsZS50ZXh0Q29udGVudCA9ICdUb0RvTGlzdCdcclxuXHJcbmNvbnN0IHNldHRpbmdzQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbnNldHRpbmdzQnRuSWNvbi5zcmMgPSBDb2dcclxuc2V0dGluZ3NCdG5JY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJylcclxuc2V0dGluZ3NCdG4uYXBwZW5kKHNldHRpbmdzQnRuSWNvbilcclxuXHJcbmhlYWRlci5hcHBlbmQobWVudUJ0biwgdGl0bGUsIHNldHRpbmdzQnRuKVxyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5wcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKVxyXG5jb25zdCBwcm9qZWN0TGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5wcm9qZWN0TGlzdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xyXG5wcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdExpc3RUaXRsZSlcclxuXHJcbm1haW4uYXBwZW5kKHByb2plY3RMaXN0KVxyXG5cclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuY29uc3QgbGVnYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGVnYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2xlZ2FsLWluZm8nKVxyXG5jb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IGNvcHlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnNpdGVOYW1lLnRleHRDb250ZW50ID0gYEppamFSYXJlIEluYy4sIDIwMjJgXHJcbmNvcHlSaWdodC50ZXh0Q29udGVudCA9ICdBbGwgcmlnaHRzIHJlc2VydmVkJ1xyXG5sZWdhbEluZm8uYXBwZW5kKHNpdGVOYW1lLCBjb3B5UmlnaHQpXHJcbmZvb3Rlci5hcHBlbmRDaGlsZChsZWdhbEluZm8pXHJcbndyYXBwZXIuYXBwZW5kKG1haW4sIGZvb3RlcilcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgdXNlclByb2plY3RMaXN0ID0gbmV3IFVzZXJQcm9qZWN0TGlzdCgpXHJcblxyXG5cclxuXHJcbmxldCBleGFtcGxlID0gbmV3IFByb2plY3QoJ1Byb2plY3QxJylcclxucHJvamVjdExpc3QuYXBwZW5kKG5ldyBEaXNwbGF5UHJvamVjdChleGFtcGxlLCAwKS5zaG93UHJvamVjdERPTSgpKVxyXG5cclxubGV0IGV4YW1wbGUyID0gbmV3IFByb2plY3QoJ0V4YW1wbGUyJylcclxucHJvamVjdExpc3QuYXBwZW5kKG5ldyBEaXNwbGF5UHJvamVjdChleGFtcGxlMiwgMSkuc2hvd1Byb2plY3RET00oKSlcclxuXHJcbmxldCBhZGRQcm9qZWN0QnV0dG9uID0gbmV3IENyZWF0ZUFkZEJ1dHRvbigpXHJcbnByb2plY3RMaXN0LmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uLmNyZWF0ZUFkZEJ1dHRvbignUHJvamVjdCcpKVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy9hZGQgcHJvamVjdCBhbmQgdG9kbyBtb2RhbFxyXG5sZXQgYWRkUHJvamVjdCA9IG5ldyBDcmVhdGVQcm9qZWN0TWVudSgnUHJvamVjdCcpXHJcbmxldCBjYXJkID0gYWRkUHJvamVjdC5jcmVhdGVNZW51KClcclxubGV0IGlucHV0ID0gYWRkUHJvamVjdC5jcmVhdGVQcm9qZWN0TWVudSgpXHJcblxyXG5jYXJkLmFwcGVuZChpbnB1dClcclxud3JhcHBlci5hcHBlbmQoY2FyZClcclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBhZGRQcm9qZWN0LmNyZWF0ZU92ZXJsYXkoKVxyXG5ib2R5LmFwcGVuZChvdmVybGF5KVxyXG5cclxubGV0IGFkZFRvRG8gPSBuZXcgQ3JlYXRlVG9kb01lbnUoJ1RvRG8nKVxyXG5sZXQgY2FyZFRvRG8gPSBhZGRUb0RvLmNyZWF0ZU1lbnUoKVxyXG5sZXQgaW5wdXRUb0RvID0gYWRkVG9Eby5jcmVhdGVUb2RvTWVudSgpXHJcbmNhcmRUb0RvLmFwcGVuZChpbnB1dFRvRG8pXHJcbndyYXBwZXIuYXBwZW5kKGNhcmRUb0RvKVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbmNvbnN0IG9wZW5BZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Byb2plY3QnKVxyXG5jb25zdCBvcGVuQWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUb0RvJylcclxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2xvc2VNb2RhbCcpXHJcblxyXG5cclxuXHJcbm9wZW5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdENhcmQnKVxyXG4gICAgb3Blbk1vZGFsKG1vZGFsKVxyXG4gICAgYWRkUHJvamVjdEJ5TmFtZShtb2RhbCkgXHJcbiAgfSlcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnlOYW1lKG1vZGFsKSB7XHJcbiAgY29uc3QgYWRkTmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNOZXdQcm9qZWN0JylcclxuXHJcbiAgYWRkTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXRpdGxlJylcclxuICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3RUaXRsZS52YWx1ZX1gKVxyXG4gICAgICB1c2VyUHJvamVjdExpc3QuYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdClcclxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ldyBEaXNwbGF5UHJvamVjdChwcm9qZWN0LCB1c2VyUHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoLTEpLnNob3dQcm9qZWN0RE9NKCkpXHJcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpXHJcbiAgICB9LCB7IG9uY2U6IHRydWUgfSlcclxufVxyXG5cclxuXHJcbnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgaWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IGV2dC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9EZWxldGUpXHJcbiAgICB1c2VyUHJvamVjdExpc3QuZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0VG9EZWxldGUpXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyUHJvamVjdExpc3QpXHJcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQpXHJcbiAgICBjb25zdCBCdXR0b25zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNQcm9qZWN0IH4gLnByb2plY3QtYnV0dG9uJylcclxuICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20oQnV0dG9uc0xpc3QpO1xyXG4gICAgYXJyLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgIHByb2plY3QuaWQgPSBhcnIuaW5kZXhPZihwcm9qZWN0KVxyXG4gICAgfSlcclxuICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGUtY2FyZC5hY3RpdmUnKVxyXG4gIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcclxuICAgIGNsb3NlTW9kYWwobW9kYWwpXHJcbiAgfSlcclxufSlcclxuXHJcbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcuY3JlYXRlLWNhcmQnKVxyXG4gICAgY2xvc2VNb2RhbChtb2RhbClcclxuICB9KVxyXG59KVxyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XHJcbiAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxyXG4gIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC10aXRsZScpXHJcbiAgdGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xyXG4gICAgdGl0bGUudmFsdWUgPSAnJ1xyXG4gIH0pXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRhdGUtaW5wdXQnKVxyXG4gIGNvbnN0IHByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdmFsdWU9XCJtZWRpdW1cIl0nKVxyXG4gIGRhdGUudmFsdWUgPSBgJHtnZXREYXRlKCl9YFxyXG4gIHByaW9yaXR5TWVkaXVtLmNoZWNrZWQgPSB0cnVlXHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXREYXRlKCkge1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIGxldCBkYXkgPSAoXCIwXCIgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMilcclxuICAgIGxldCBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcclxuICAgIHJldHVybiBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG1vbnRoKSArIFwiLVwiICsgKGRheSlcclxufVxyXG5cclxuXHJcblxyXG5sZXQgdG9kb2V4YW1wbGUgPSBuZXcgVG9EbygnRG8gc210aCcsICcyOS4wMS4xMicsICdoaWdoJylcclxubGV0IHRvZG9leGFtcGxlMiA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTInLCAnMDEuMDEuNDInLCAnbG93JylcclxubGV0IHRvZG9leGFtcGxlMyA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTMnLCAnMTEuMTEuMjMnLCAnbWVkaXVtJylcclxuXHJcbmV4YW1wbGUuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZSlcclxuZXhhbXBsZS5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlMilcclxuZXhhbXBsZS5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlMylcclxuXHJcblxyXG5sZXQgdG9kb2V4YW1wbGU0ID0gbmV3IFRvRG8oJzEnLCAnMDEuMDEuMjMnLCAnbWVkaXVtJylcclxubGV0IHRvZG9leGFtcGxlNSA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTIzMjMnLCAnMDEuMDEuMjMnLCAnbWVkaXVtJylcclxubGV0IHRvZG9leGFtcGxlNiA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTMyMTMyMzEnLCAnMDEuMDEuMjMnLCAnbWVkaXVtJylcclxuXHJcbmV4YW1wbGUyLmFkZFRvRG9Ub1Byb2plY3QodG9kb2V4YW1wbGU0KVxyXG5leGFtcGxlMi5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlNSlcclxuZXhhbXBsZTIuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZTYpXHJcblxyXG51c2VyUHJvamVjdExpc3QuYWRkUHJvamVjdFRvUHJvamVjdExpc3QoZXhhbXBsZSlcclxudXNlclByb2plY3RMaXN0LmFkZFByb2plY3RUb1Byb2plY3RMaXN0KGV4YW1wbGUyKVxyXG5cclxuXHJcblxyXG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gIGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtYnV0dG9uIDpub3QoLmFkZC1wcm9qZWN0LWJ1dHRvbiknKSkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpKSB7XHJcbiAgICAgIG1haW4ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykpXHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gdXNlclByb2plY3RMaXN0LnByb2plY3RzW2V2dC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtYnV0dG9uJykuZ2V0QXR0cmlidXRlKCdpZCcpXVxyXG4gICAgbGV0IHNob3dQcm9qZWN0ID0gIG5ldyBDcmVhdGVQcm9qZWN0Q29udGFpbmVyKClcclxuICAgIGxldCBzaG93UHJvamVjdENvbnRhaW5lciA9IHNob3dQcm9qZWN0LmNyZWF0ZXByb2plY3RDb250YWluZXIodGFyZ2V0UHJvamVjdClcclxuICAgIGxldCBzaG93VG9Eb3MgPSBzaG93UHJvamVjdC5jcmVhdGV0b0RvQ29udGFpbmVyKHRhcmdldFByb2plY3QpXHJcbiAgICBtYWluLmFwcGVuZChzaG93UHJvamVjdENvbnRhaW5lcilcclxuICAgIGZvciAobGV0IGk9MDsgaSA8IHRhcmdldFByb2plY3QudG9kb3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IHNob3d0b2RvZXhhbXBsZSA9IG5ldyBEaXNwbGF5VG9EbygpLkRPTSh0YXJnZXRQcm9qZWN0LnRvZG9zW2ldLCBpKVxyXG4gICAgICBzaG93VG9Eb3MuYXBwZW5kKHNob3d0b2RvZXhhbXBsZSlcclxuICAgIH1cclxuICAgIHNob3dQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChzaG93VG9Eb3MpXHJcbiAgICBcclxuICAgIHNob3dQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgIGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLmNoZWNrLXRvZG8taXRlbScpKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXRUb0RvID0gdGFyZ2V0UHJvamVjdC50b2Rvc1tldnQudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKS5nZXRBdHRyaWJ1dGUoJ2lkJyldXHJcbiAgICAgICAgICB0YXJnZXRUb0RvLmNoYW5nZURvbmUoKVxyXG4gICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICBpZiAodGFyZ2V0VG9Eby5kb25lID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJylcclxuICAgICAgICAgICAgY2hlY2tlZC5zcmMgPSBDaGVja1xyXG4gICAgICAgICAgICBldnQudGFyZ2V0LmFwcGVuZChjaGVja2VkKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXZ0LnRhcmdldC5yZW1vdmUoY2hlY2tlZClcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBzaG93UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICBpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0gPiAuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcclxuICAgICAgICBjb25zdCB0b0RvVG9EZWxldGUgPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9Ub0RlbGV0ZSlcclxuICAgICAgICB0YXJnZXRQcm9qZWN0LmRlbGV0ZVRvRG9Gcm9tUHJvamVjdCh0b0RvVG9EZWxldGUpXHJcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0UHJvamVjdClcclxuICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKGV2dC50YXJnZXQucGFyZW50RWxlbWVudClcclxuICAgICAgICBjb25zdCB0b0Rvc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJylcclxuICAgICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKHRvRG9zTGlzdCk7XHJcbiAgICAgICAgYXJyLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICB0b2RvLmlkID0gYXJyLmluZGV4T2YodG9Eb3NMaXN0KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb3BlbkFkZFRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVG9EbycpXHJcbiAgICBvcGVuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9Eb0NhcmQnKVxyXG4gICAgICBvcGVuTW9kYWwobW9kYWwpXHJcbiAgICAgIGFkZFRvRG9CeU5hbWUobW9kYWwsIHRhcmdldFByb2plY3QpIFxyXG4gICAgfSlcclxuICAgIH1cclxuICAgIH0pXHJcblxyXG4gIFxyXG5cclxuXHJcbmZ1bmN0aW9uIE5vcm1hbGl6ZURhdGUoZGF0ZSkge1xyXG4gIGxldCBkYXRlRGF5ID0gZGF0ZVtkYXRlLmxlbmd0aC0yXSArIGRhdGVbZGF0ZS5sZW5ndGgtMV1cclxuICBsZXQgbW9udGhEYXRlID0gZGF0ZVtkYXRlLmxlbmd0aC01XSArIGRhdGVbZGF0ZS5sZW5ndGgtNF1cclxuICBsZXQgeWVhckRhdGUgPSBkYXRlW2RhdGUubGVuZ3RoLThdICsgZGF0ZVtkYXRlLmxlbmd0aC03XVxyXG4gIHJldHVybiBgJHtkYXRlRGF5fS4ke21vbnRoRGF0ZX0uJHt5ZWFyRGF0ZX1gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvRG9CeU5hbWUobW9kYWwsIHRhcmdldFByb2plY3QpIHtcclxuICBjb25zdCBhZGROZXdUb0RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI05ld1RvRG8nKVxyXG5cclxuICBhZGROZXdUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcclxuICAgICAgY29uc3QgVG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbcGxhY2Vob2xkZXI9XCJUb0RvIFRpdGxlXCJdJylcclxuICAgICAgY29uc3QgVG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kYXRlLWlucHV0JylcclxuICAgICAgY29uc3QgVG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKVxyXG4gICAgICBcclxuICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKGAke1RvRG9UaXRsZS52YWx1ZX1gLCBgJHtOb3JtYWxpemVEYXRlKFRvRG9EdWVEYXRlLnZhbHVlKX1gLCBgJHtUb0RvUHJpb3JpdHkudmFsdWV9YClcclxuICAgICAgXHJcbiAgICAgIHRhcmdldFByb2plY3QuYWRkVG9Eb1RvUHJvamVjdCh0b2RvKVxyXG5cclxuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQobmV3IERpc3BsYXlUb0RvKCkuRE9NKHRvZG8sIHRhcmdldFByb2plY3QudG9kb3MubGVuZ3RoIC0gMSkpXHJcblxyXG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuXHJcblxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9