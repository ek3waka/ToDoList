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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(195, 156, 226);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\r\n:root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(195, 156, 226);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }"],"sourceRoot":""}]);
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
        addButton.classList.add('project-button', 'add-project-button')
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



//где-то внутри проекта должно быть
/* openAddToDo.addEventListener('click', () => {
    const modal = document.querySelector('#addToDoCard')
    openModal(modal)
  })
 */
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
  const projectTitle = document.querySelector('.input-title')
  projectTitle.value = ''
  modal.classList.remove('active')
  overlay.classList.remove('active')
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
  if(evt.target.closest('.project-button')) {
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



/* let showtodoexample = new DisplayToDo().DOM(todoexample)
let showtodoexample2 = new DisplayToDo().DOM(todoexample2)
let showtodoexample3 = new DisplayToDo().DOM(todoexample3)
 */

/* let showProject =  new CreateProjectContainer()
let showProjectContainer = showProject.createprojectContainer(example)

let showToDos = showProject.createtoDoContainer()  */



/* showToDos.append(showtodoexample, showtodoexample2, showtodoexample3)

showProjectContainer.append(showToDos)
 */
/* main.append(showProjectContainer) */

menuBtn.addEventListener('click', () => {
    projectList.classList.toggle('hidden')
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZ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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtDQUFJLElBQUksZ0JBQWdCLE1BQU0saUNBQWlDLE1BQU0sbUJBQW1CO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzREFBVztBQUMxQztBQUNBO0FBQ0EsS0FBSyxJQUFJLFlBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZS1jYXJkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QtY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1jYXJkLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgLS1jYXJkLWhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBoMSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyNiwgNDElLCAxMCUsIDAuOTUyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA1OCA2Nik7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgNTggNjYpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2FsLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTM3LCAxMzQpO1xcclxcbiAgICB3aWR0aDogMjhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiwgLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3JkZXI6IDNcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1OCwgMTU4LCAxNTgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSwgLmFkZC1wcm9qZWN0LXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgICB3aWR0aDogMjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4xcmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jaGVjay10b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5OSwgOTksIDk5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDM3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTU2LCAyMjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10aXRsZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaW9yaXR5LXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi51bmRvbmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGl0bGU6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRlLWNhcmQuYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjUHJvamVjdCB7XFxyXFxuICAgIG9yZGVyOiA0O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBOzs7Ozs7Ozs7Ozs7Q0FZQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCx3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7OztBQUlBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixvQkFB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QkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsY0FBYzs7SUFFZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtBQUNKOzs7QUFHQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLFFBQVE7RUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXAnKTtcXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY2FyZC13aWR0aDogMzAwcHg7XFxyXFxuICAgIC0tY2FyZC1oZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgaDEsIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjYsIDQxJSwgMTAlLCAwLjk1Mik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgNTggNjYpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzIDU4IDY2KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtXFxyXFxufVxcclxcblxcclxcbi5sZWdhbC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDEzNywgMTM0KTtcXHJcXG4gICAgd2lkdGg6IDI4cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24sIC5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG9yZGVyOiAzXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTgsIDE1OCwgMTU4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUsIC5hZGQtcHJvamVjdC10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDQwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stdG9kby1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTksIDk5LCA5OSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgICB3aWR0aDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZCB7XFxyXFxuICAgIGhlaWdodDogMjVyZW07XFxyXFxuICAgIHdpZHRoOiAzNzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE1NiwgMjI2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGl0bGUge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvLXByaW9yaXR5IHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcmlvcml0eS10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udW5kb25lIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRpdGxlOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTM3LCAxNDMpO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTM3LCAxNDMpO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjb3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0ZS1jYXJkLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI1Byb2plY3Qge1xcclxcbiAgICBvcmRlcjogNDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbHVzIGZyb20gJy4vcGx1cy10aGljay5wbmcnXHJcbmltcG9ydCB7IENyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gJy4vcHJvamVjdC1saXN0J1xyXG5cclxuY2xhc3MgQ3JlYXRlQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RUb0NyZWF0ZSkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0VG9DcmVhdGUgPSBvYmplY3RUb0NyZWF0ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5jYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLmNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNZW51KCkgeyBcclxuICAgICAgICB0aGlzLmNhcmQuaWQgPSBgYWRkJHt0aGlzLm9iamVjdFRvQ3JlYXRlfUNhcmRgXHJcbiAgICAgICAgdGhpcy5jYXJkLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkJylcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRIZWFkZXInKVxyXG5cclxuICAgICAgICB0aGlzLmNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC10aXRsZScpXHJcbiAgICAgICAgdGhpcy5jYXJkVGl0bGUudGV4dENvbnRlbnQgPSBgQ3JlYXRlICR7dGhpcy5vYmplY3RUb0NyZWF0ZX1gXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ1dHRvbicpXHJcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCAnJnRpbWVzOycpXHJcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5pZCA9ICdjbG9zZU1vZGFsJ1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRIZWFkZXIuYXBwZW5kKHRoaXMuY2FyZFRpdGxlLCB0aGlzLmNsb3NlQnV0dG9uKVxyXG5cclxuICAgICAgICB0aGlzLmNhcmQuYXBwZW5kKHRoaXMuY2FyZEhlYWRlciwgbmV3IENyZWF0ZUFkZEJ1dHRvbigpLmNyZWF0ZUFkZEJ1dHRvbihgTmV3JHt0aGlzLm9iamVjdFRvQ3JlYXRlfWApKVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jYXJkXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlT3ZlcmxheSgpIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBvdmVybGF5LmlkID0gJ292ZXJsYXknXHJcbiAgICAgICAgcmV0dXJuIG92ZXJsYXlcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ3JlYXRlVG9kb01lbnUgZXh0ZW5kcyBDcmVhdGVDYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdFRvQ3JlYXRlKSB7XHJcbiAgICAgICAgc3VwZXIob2JqZWN0VG9DcmVhdGUpXHJcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aGlzLmRhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cubmFtZSA9ICdwcmlvcml0eSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtLm5hbWUgPSAncHJpb3JpdHknXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2gubmFtZSA9ICdwcmlvcml0eSdcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvdy50eXBlID0gJ3JhZGlvJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0udHlwZSA9ICdyYWRpbydcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaC50eXBlID0gJ3JhZGlvJ1xyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93LnZhbHVlID0gJ2xvdydcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaC52YWx1ZSA9ICdoaWdoJ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUb2RvTWVudSgpIHtcclxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtZm9ybScpXHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gYCR7dGhpcy5vYmplY3RUb0NyZWF0ZX0gVGl0bGVgXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRpdGxlJylcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLnRpdGxlSW5wdXQpXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZScpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHknKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZS1pbnB1dCcpXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5kYXRlUC50ZXh0Q29udGVudCA9ICdEYXRlJ1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmRhdGVQLCB0aGlzLmRhdGVJbnB1dClcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2hQLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRleHQnKVxyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93UC50ZXh0Q29udGVudCA9ICdMb3cnXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAudGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUC50ZXh0Q29udGVudCA9ICdIaWdoJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByaW9yaXR5TG93LCB0aGlzLnByaW9yaXR5TG93UCwgdGhpcy5wcmlvcml0eU1lZGl1bSwgdGhpcy5wcmlvcml0eU1lZGl1bVAsIHRoaXMucHJpb3JpdHlIaWdoLCB0aGlzLnByaW9yaXR5SGlnaFApXHJcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRhdGVJbnB1dENvbnRhaW5lciwgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcblxyXG5jbGFzcyBDcmVhdGVQcm9qZWN0TWVudSBleHRlbmRzIENyZWF0ZUNhcmQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICBzdXBlcihvYmplY3RUb0NyZWF0ZSlcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIH1cclxuICAgIGNyZWF0ZVByb2plY3RNZW51KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC1mb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfSBUaXRsZWBcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKVxyXG5cclxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMudGl0bGVJbnB1dClcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Q3JlYXRlQ2FyZCwgQ3JlYXRlUHJvamVjdE1lbnUsIENyZWF0ZVRvZG9NZW51fSIsImltcG9ydCBEYXRlIGZyb20gJy4vY2FsZW5kYXItY2xvY2sucG5nJ1xyXG5pbXBvcnQgVHJhc2ggZnJvbSAnLi9kZWxldGUucG5nJ1xyXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJy4vY2hlY2stYm9sZC5wbmcnXHJcbmltcG9ydCB7IENyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gJy4vcHJvamVjdC1saXN0J1xyXG5cclxuXHJcbmNsYXNzIFRvRG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuZG9uZSA9IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjaGFuZ2VEb25lKCkge1xyXG4gICAgICAgIHRoaXMuZG9uZSA9ICF0aGlzLmRvbmVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIERpc3BsYXlUb0RvIHtcclxuICAgIERPTSh0b2RvLCBpZCkge1xyXG4gICAgICAgIGNvbnN0IHRvRG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKVxyXG4gICAgICAgIHRvRG9JdGVtLmlkID0gaWRcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2stdG9kby1pdGVtJylcclxuICAgICAgICBcclxuICAgICAgICBpZiAodG9kby5kb25lID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgICAgIGNoZWNrZWQuc3JjID0gQ2hlY2tJY29uXHJcbiAgICAgICAgICAgIGNoZWNrLmFwcGVuZChjaGVja2VkKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHRvRG9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdG9Eb1RleHQuY2xhc3NMaXN0LmFkZCgndG9kby10ZXh0JylcclxuICAgICAgICB0b0RvVGV4dC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGRhdGVJY29uLnNyYyA9IERhdGVcclxuICAgICAgICBkYXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRvZG8ucHJpb3JpdHkpIHtcclxuICAgICAgICAgICAgY2FzZSAnbG93JzogXHJcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gJzAuNXJlbSBzb2xpZCBncmVlbidcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlICdoaWdoJzogXHJcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gJzAuNXJlbSBzb2xpZCBjcmltc29uJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9ICcwLjVyZW0gc29saWQgeWVsbG93J1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkdWVEYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGR1ZURhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJylcclxuICAgICAgICBkdWVEYXRlVGV4dC50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZVxyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVUb0RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBkZWxldGVUb0RvLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicsICdkZWxldGUtcHJvamVjdC1idXR0b24nKVxyXG4gICAgICAgIGRlbGV0ZVRvRG8uc3JjID0gVHJhc2hcclxuXHJcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kKGNoZWNrLCB0b0RvVGV4dCwgZGF0ZUljb24sIGR1ZURhdGVUZXh0LCBkZWxldGVUb0RvKVxyXG5cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB0b0RvSXRlbVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgQ3JlYXRlUHJvamVjdENvbnRhaW5lciB7XHJcbiAgICBjcmVhdGVwcm9qZWN0Q29udGFpbmVyKHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZVxyXG5cclxuICAgICAgICBjb25zdCBhZGRUb0RvID0gbmV3IENyZWF0ZUFkZEJ1dHRvblxyXG5cclxuICAgICAgICBjb25zdCBhZGRUb0RvQnV0dG9uID0gYWRkVG9Eby5jcmVhdGVBZGRCdXR0b24oJ1RvRG8nKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvRG9CdXR0b24pXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGV0b0RvQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1jb250YWluZXInKVxyXG4gICAgICAgIHJldHVybiB0b0RvQ29udGFpbmVyXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtUb0RvLCBEaXNwbGF5VG9EbywgQ3JlYXRlUHJvamVjdENvbnRhaW5lcn1cclxuIiwiaW1wb3J0IENoZWNrYm94IGZyb20gJy4vZm9ybWF0LWxpc3QtY2hlY2tib3gucG5nJ1xyXG5pbXBvcnQgVHJhc2ggZnJvbSAnLi9kZWxldGUucG5nJ1xyXG5pbXBvcnQgUGx1cyBmcm9tICcuL3BsdXMtdGhpY2sucG5nJ1xyXG5cclxuY2xhc3MgVXNlclByb2plY3RMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW11cclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgfVxyXG4gICAgZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0SW5kZXgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0QXJyYXkgPSBbXVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG9zID0gW11cclxuICAgIH1cclxuICAgIGFkZFRvRG9Ub1Byb2plY3QodG9Ebykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b0RvKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuY2xhc3MgRGlzcGxheVByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgaWQpIHtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICB9XHJcbiAgICBzaG93UHJvamVjdERPTSgpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJylcclxuICAgICAgICBwcm9qZWN0QnV0dG9uLmlkID0gdGhpcy5pZFxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgcHJvamVjdEljb24uc3JjID0gQ2hlY2tib3hcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nLCAnZGVsZXRlLXByb2plY3QtYnV0dG9uJylcclxuICAgICAgICBkZWxldGVQcm9qZWN0LnNyYyA9IFRyYXNoXHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hcHBlbmQocHJvamVjdEljb24sIHByb2plY3RUaXRsZSwgZGVsZXRlUHJvamVjdClcclxuICAgICAgICByZXR1cm4gcHJvamVjdEJ1dHRvblxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDcmVhdGVBZGRCdXR0b24ge1xyXG4gICAgY3JlYXRlQWRkQnV0dG9uKHdoYXRUb0NyZWF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJywgJ2FkZC1wcm9qZWN0LWJ1dHRvbicpXHJcbiAgICAgICAgYWRkQnV0dG9uLmlkID0gd2hhdFRvQ3JlYXRlXHJcblxyXG4gICAgICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGFkZEljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJylcclxuICAgICAgICBhZGRJY29uLnNyYyA9IFBsdXNcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhZGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIGFkZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpXHJcbiAgICAgICAgYWRkVGl0bGUudGV4dENvbnRlbnQgPSBgQWRkICR7d2hhdFRvQ3JlYXRlfWBcclxuXHJcbiAgICAgICAgYWRkQnV0dG9uLmFwcGVuZChhZGRJY29uLCBhZGRUaXRsZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZEJ1dHRvblxyXG4gICAgfVxyXG59XHJcblxyXG4vL9C30LDQutC40L3Rg9GC0Ywg0LHRiyDRgdC+0LfQtNCw0L3QuNC1INC+0LHRidC40YUg0LrQvtC80L/QvtC90LXQvdGC0L7QsiDQutGD0LTQsC3QvdC40LHRg9C00Ywg0LIg0LTRgNGD0LPQvtC5INC80L7QtNGD0LvRjCwg0YvRi9GL0YtcclxuXHJcblxyXG5leHBvcnQge1VzZXJQcm9qZWN0TGlzdCwgUHJvamVjdCwgRGlzcGxheVByb2plY3QsIENyZWF0ZUFkZEJ1dHRvbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBDb2cgZnJvbSAnLi9jb2cucG5nJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUucG5nJ1xyXG5pbXBvcnQgQ2hlY2sgZnJvbSAnLi9jaGVjay1ib2xkLnBuZycgLy9kZWxldGUgbGF0ZXIgd2hlbiByZW1vdmUgdG8gbW9kdWxlXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCB7VXNlclByb2plY3RMaXN0LCBQcm9qZWN0LCBEaXNwbGF5UHJvamVjdCwgQ3JlYXRlQWRkQnV0dG9uLCBQcm9qZWN0TGlzdH0gZnJvbSAnLi9wcm9qZWN0LWxpc3QnXHJcbmltcG9ydCB7Q3JlYXRlQ2FyZCwgQ3JlYXRlUHJvamVjdE1lbnUsIENyZWF0ZVRvZG9NZW51fSBmcm9tICcuL2NyZWF0ZS1jYXJkJ1xyXG5pbXBvcnQge1RvRG8sIERpc3BsYXlUb0RvLCBDcmVhdGVQcm9qZWN0Q29udGFpbmVyfSBmcm9tICcuL3Byb2plY3QtY2FyZCdcclxuXHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXHJcblxyXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcclxud3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJylcclxuXHJcbmJvZHkuYXBwZW5kKHdyYXBwZXIpXHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcilcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IHNldHRpbmdzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbmNvbnN0IG1lbnVCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxubWVudUJ0bkljb24uc3JjID0gTWVudVxyXG5tZW51QnRuSWNvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaWNvbicpXHJcblxyXG5tZW51QnRuLmFwcGVuZChtZW51QnRuSWNvbilcclxudGl0bGUudGV4dENvbnRlbnQgPSAnVG9Eb0xpc3QnXHJcblxyXG5jb25zdCBzZXR0aW5nc0J0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5zZXR0aW5nc0J0bkljb24uc3JjID0gQ29nXHJcbnNldHRpbmdzQnRuSWNvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItaWNvbicpXHJcbnNldHRpbmdzQnRuLmFwcGVuZChzZXR0aW5nc0J0bkljb24pXHJcblxyXG5oZWFkZXIuYXBwZW5kKG1lbnVCdG4sIHRpdGxlLCBzZXR0aW5nc0J0bilcclxuXHJcbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxucHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0JylcclxuY29uc3QgcHJvamVjdExpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxucHJvamVjdExpc3RUaXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcclxucHJvamVjdExpc3QuYXBwZW5kKHByb2plY3RMaXN0VGl0bGUpXHJcblxyXG5tYWluLmFwcGVuZChwcm9qZWN0TGlzdClcclxuXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXHJcbmNvbnN0IGxlZ2FsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmxlZ2FsSW5mby5jbGFzc0xpc3QuYWRkKCdsZWdhbC1pbmZvJylcclxuY29uc3Qgc2l0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBjb3B5UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5zaXRlTmFtZS50ZXh0Q29udGVudCA9IGBKaWphUmFyZSBJbmMuLCAyMDIyYFxyXG5jb3B5UmlnaHQudGV4dENvbnRlbnQgPSAnQWxsIHJpZ2h0cyByZXNlcnZlZCdcclxubGVnYWxJbmZvLmFwcGVuZChzaXRlTmFtZSwgY29weVJpZ2h0KVxyXG5mb290ZXIuYXBwZW5kQ2hpbGQobGVnYWxJbmZvKVxyXG53cmFwcGVyLmFwcGVuZChtYWluLCBmb290ZXIpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHVzZXJQcm9qZWN0TGlzdCA9IG5ldyBVc2VyUHJvamVjdExpc3QoKVxyXG5cclxuXHJcblxyXG5sZXQgZXhhbXBsZSA9IG5ldyBQcm9qZWN0KCdQcm9qZWN0MScpXHJcbnByb2plY3RMaXN0LmFwcGVuZChuZXcgRGlzcGxheVByb2plY3QoZXhhbXBsZSwgMCkuc2hvd1Byb2plY3RET00oKSlcclxuXHJcbmxldCBleGFtcGxlMiA9IG5ldyBQcm9qZWN0KCdFeGFtcGxlMicpXHJcbnByb2plY3RMaXN0LmFwcGVuZChuZXcgRGlzcGxheVByb2plY3QoZXhhbXBsZTIsIDEpLnNob3dQcm9qZWN0RE9NKCkpXHJcblxyXG5sZXQgYWRkUHJvamVjdEJ1dHRvbiA9IG5ldyBDcmVhdGVBZGRCdXR0b24oKVxyXG5wcm9qZWN0TGlzdC5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbi5jcmVhdGVBZGRCdXR0b24oJ1Byb2plY3QnKSlcclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vYWRkIHByb2plY3QgYW5kIHRvZG8gbW9kYWxcclxubGV0IGFkZFByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE1lbnUoJ1Byb2plY3QnKVxyXG5sZXQgY2FyZCA9IGFkZFByb2plY3QuY3JlYXRlTWVudSgpXHJcbmxldCBpbnB1dCA9IGFkZFByb2plY3QuY3JlYXRlUHJvamVjdE1lbnUoKVxyXG5cclxuY2FyZC5hcHBlbmQoaW5wdXQpXHJcbndyYXBwZXIuYXBwZW5kKGNhcmQpXHJcblxyXG5jb25zdCBvdmVybGF5ID0gYWRkUHJvamVjdC5jcmVhdGVPdmVybGF5KClcclxuYm9keS5hcHBlbmQob3ZlcmxheSlcclxuXHJcbmxldCBhZGRUb0RvID0gbmV3IENyZWF0ZVRvZG9NZW51KCdUb0RvJylcclxubGV0IGNhcmRUb0RvID0gYWRkVG9Eby5jcmVhdGVNZW51KClcclxubGV0IGlucHV0VG9EbyA9IGFkZFRvRG8uY3JlYXRlVG9kb01lbnUoKVxyXG5jYXJkVG9Eby5hcHBlbmQoaW5wdXRUb0RvKVxyXG53cmFwcGVyLmFwcGVuZChjYXJkVG9EbylcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5jb25zdCBvcGVuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNQcm9qZWN0JylcclxuY29uc3Qgb3BlbkFkZFRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVG9EbycpXHJcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2Nsb3NlTW9kYWwnKVxyXG5cclxuXHJcblxyXG5vcGVuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFByb2plY3RDYXJkJylcclxuICAgIG9wZW5Nb2RhbChtb2RhbClcclxuICAgIGFkZFByb2plY3RCeU5hbWUobW9kYWwpIFxyXG4gIH0pXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdEJ5TmFtZShtb2RhbCkge1xyXG4gIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTmV3UHJvamVjdCcpXHJcblxyXG4gIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC10aXRsZScpXHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChgJHtwcm9qZWN0VGl0bGUudmFsdWV9YClcclxuICAgICAgdXNlclByb2plY3RMaXN0LmFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3QpXHJcbiAgICAgIHByb2plY3RMaXN0LmFwcGVuZChuZXcgRGlzcGxheVByb2plY3QocHJvamVjdCwgdXNlclByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aC0xKS5zaG93UHJvamVjdERPTSgpKVxyXG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbn1cclxuXHJcblxyXG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gIGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRvRGVsZXRlKVxyXG4gICAgdXNlclByb2plY3RMaXN0LmRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3QocHJvamVjdFRvRGVsZXRlKVxyXG4gICAgY29uc29sZS5sb2codXNlclByb2plY3RMaXN0KVxyXG4gICAgcHJvamVjdExpc3QucmVtb3ZlQ2hpbGQoZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50KVxyXG4gICAgY29uc3QgQnV0dG9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjUHJvamVjdCB+IC5wcm9qZWN0LWJ1dHRvbicpXHJcbiAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKEJ1dHRvbnNMaXN0KTtcclxuICAgIGFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICBwcm9qZWN0LmlkID0gYXJyLmluZGV4T2YocHJvamVjdClcclxuICAgIH0pXHJcbiAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4vL9Cz0LTQtS3RgtC+INCy0L3Rg9GC0YDQuCDQv9GA0L7QtdC60YLQsCDQtNC+0LvQttC90L4g0LHRi9GC0YxcclxuLyogb3BlbkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb0RvQ2FyZCcpXHJcbiAgICBvcGVuTW9kYWwobW9kYWwpXHJcbiAgfSlcclxuICovXHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNyZWF0ZS1jYXJkLmFjdGl2ZScpXHJcbiAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4ge1xyXG4gICAgY2xvc2VNb2RhbChtb2RhbClcclxuICB9KVxyXG59KVxyXG5cclxuY2xvc2VNb2RhbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gYnV0dG9uLmNsb3Nlc3QoJy5jcmVhdGUtY2FyZCcpXHJcbiAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gIH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcclxuICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuXHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcclxuICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuXHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXRpdGxlJylcclxuICBwcm9qZWN0VGl0bGUudmFsdWUgPSAnJ1xyXG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5sZXQgdG9kb2V4YW1wbGUgPSBuZXcgVG9EbygnRG8gc210aCcsICcyOS4wMS4xMicsICdoaWdoJylcclxubGV0IHRvZG9leGFtcGxlMiA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTInLCAnMDEuMDEuNDInLCAnbG93JylcclxubGV0IHRvZG9leGFtcGxlMyA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTMnLCAnMTEuMTEuMjMnLCAnbWVkaXVtJylcclxuXHJcbmV4YW1wbGUuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZSlcclxuZXhhbXBsZS5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlMilcclxuZXhhbXBsZS5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlMylcclxuXHJcblxyXG5sZXQgdG9kb2V4YW1wbGU0ID0gbmV3IFRvRG8oJzEnLCAnMDEuMDEuMjMnLCAnbWVkaXVtJylcclxubGV0IHRvZG9leGFtcGxlNSA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTIzMjMnLCAnMDEuMDEuMjMnLCAnbWVkaXVtJylcclxubGV0IHRvZG9leGFtcGxlNiA9IG5ldyBUb0RvKCd0b2RvZXhhbXBsZTMyMTMyMzEnLCAnMDEuMDEuMjMnLCAnbWVkaXVtJylcclxuXHJcbmV4YW1wbGUyLmFkZFRvRG9Ub1Byb2plY3QodG9kb2V4YW1wbGU0KVxyXG5leGFtcGxlMi5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlNSlcclxuZXhhbXBsZTIuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZTYpXHJcblxyXG51c2VyUHJvamVjdExpc3QuYWRkUHJvamVjdFRvUHJvamVjdExpc3QoZXhhbXBsZSlcclxudXNlclByb2plY3RMaXN0LmFkZFByb2plY3RUb1Byb2plY3RMaXN0KGV4YW1wbGUyKVxyXG5cclxuXHJcblxyXG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2dCkge1xyXG4gIGlmKGV2dC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtYnV0dG9uJykpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jb250YWluZXInKSkge1xyXG4gICAgICBtYWluLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgdGFyZ2V0UHJvamVjdCA9IHVzZXJQcm9qZWN0TGlzdC5wcm9qZWN0c1tldnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWJ1dHRvbicpLmdldEF0dHJpYnV0ZSgnaWQnKV1cclxuICAgIGxldCBzaG93UHJvamVjdCA9ICBuZXcgQ3JlYXRlUHJvamVjdENvbnRhaW5lcigpXHJcbiAgICBsZXQgc2hvd1Byb2plY3RDb250YWluZXIgPSBzaG93UHJvamVjdC5jcmVhdGVwcm9qZWN0Q29udGFpbmVyKHRhcmdldFByb2plY3QpXHJcbiAgICBsZXQgc2hvd1RvRG9zID0gc2hvd1Byb2plY3QuY3JlYXRldG9Eb0NvbnRhaW5lcih0YXJnZXRQcm9qZWN0KVxyXG4gICAgbWFpbi5hcHBlbmQoc2hvd1Byb2plY3RDb250YWluZXIpXHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB0YXJnZXRQcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGxldCBzaG93dG9kb2V4YW1wbGUgPSBuZXcgRGlzcGxheVRvRG8oKS5ET00odGFyZ2V0UHJvamVjdC50b2Rvc1tpXSwgaSlcclxuICAgICAgc2hvd1RvRG9zLmFwcGVuZChzaG93dG9kb2V4YW1wbGUpXHJcbiAgICB9XHJcbiAgICBzaG93UHJvamVjdENvbnRhaW5lci5hcHBlbmQoc2hvd1RvRG9zKVxyXG4gICAgXHJcbiAgICAgIHNob3dQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgaWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2hlY2stdG9kby1pdGVtJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldFRvRG8gPSB0YXJnZXRQcm9qZWN0LnRvZG9zW2V2dC50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpLmdldEF0dHJpYnV0ZSgnaWQnKV1cclxuICAgICAgICAgIHRhcmdldFRvRG8uY2hhbmdlRG9uZSgpXHJcbiAgICAgICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgIGlmICh0YXJnZXRUb0RvLmRvbmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG4gICAgICAgICAgICBjaGVja2VkLnNyYyA9IENoZWNrXHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQuYXBwZW5kKGNoZWNrZWQpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBldnQudGFyZ2V0LnJlbW92ZShjaGVja2VkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjb25zdCBvcGVuQWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUb0RvJylcclxuICAgIG9wZW5BZGRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb0RvQ2FyZCcpXHJcbiAgICAgIG9wZW5Nb2RhbChtb2RhbClcclxuICAgICAgYWRkVG9Eb0J5TmFtZShtb2RhbCwgdGFyZ2V0UHJvamVjdCkgXHJcblxyXG4gICAgfSlcclxuICAgIH1cclxuICAgIH0pXHJcblxyXG5mdW5jdGlvbiBOb3JtYWxpemVEYXRlKGRhdGUpIHtcclxuICBsZXQgZGF0ZURheSA9IGRhdGVbZGF0ZS5sZW5ndGgtMl0gKyBkYXRlW2RhdGUubGVuZ3RoLTFdXHJcbiAgbGV0IG1vbnRoRGF0ZSA9IGRhdGVbZGF0ZS5sZW5ndGgtNV0gKyBkYXRlW2RhdGUubGVuZ3RoLTRdXHJcbiAgbGV0IHllYXJEYXRlID0gZGF0ZVtkYXRlLmxlbmd0aC04XSArIGRhdGVbZGF0ZS5sZW5ndGgtN11cclxuICByZXR1cm4gYCR7ZGF0ZURheX0uJHttb250aERhdGV9LiR7eWVhckRhdGV9YFxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0RvQnlOYW1lKG1vZGFsLCB0YXJnZXRQcm9qZWN0KSB7XHJcbiAgY29uc3QgYWRkTmV3VG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNOZXdUb0RvJylcclxuXHJcbiAgYWRkTmV3VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWNvbnRhaW5lcicpXHJcbiAgICAgIGNvbnN0IFRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3BsYWNlaG9sZGVyPVwiVG9EbyBUaXRsZVwiXScpXHJcbiAgICAgIGNvbnN0IFRvRG9EdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGF0ZS1pbnB1dCcpXHJcbiAgICAgIGNvbnN0IFRvRG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJylcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9EbyhgJHtUb0RvVGl0bGUudmFsdWV9YCwgYCR7Tm9ybWFsaXplRGF0ZShUb0RvRHVlRGF0ZS52YWx1ZSl9YCwgYCR7VG9Eb1ByaW9yaXR5LnZhbHVlfWApXHJcbiAgICAgIFxyXG4gICAgICB0YXJnZXRQcm9qZWN0LmFkZFRvRG9Ub1Byb2plY3QodG9kbylcclxuXHJcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKG5ldyBEaXNwbGF5VG9EbygpLkRPTSh0b2RvLCB0YXJnZXRQcm9qZWN0LnRvZG9zLmxlbmd0aCAtIDEpKVxyXG5cclxuICAgICAgY2xvc2VNb2RhbChtb2RhbClcclxuICAgIH0sIHsgb25jZTogdHJ1ZSB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qIGxldCBzaG93dG9kb2V4YW1wbGUgPSBuZXcgRGlzcGxheVRvRG8oKS5ET00odG9kb2V4YW1wbGUpXHJcbmxldCBzaG93dG9kb2V4YW1wbGUyID0gbmV3IERpc3BsYXlUb0RvKCkuRE9NKHRvZG9leGFtcGxlMilcclxubGV0IHNob3d0b2RvZXhhbXBsZTMgPSBuZXcgRGlzcGxheVRvRG8oKS5ET00odG9kb2V4YW1wbGUzKVxyXG4gKi9cclxuXHJcbi8qIGxldCBzaG93UHJvamVjdCA9ICBuZXcgQ3JlYXRlUHJvamVjdENvbnRhaW5lcigpXHJcbmxldCBzaG93UHJvamVjdENvbnRhaW5lciA9IHNob3dQcm9qZWN0LmNyZWF0ZXByb2plY3RDb250YWluZXIoZXhhbXBsZSlcclxuXHJcbmxldCBzaG93VG9Eb3MgPSBzaG93UHJvamVjdC5jcmVhdGV0b0RvQ29udGFpbmVyKCkgICovXHJcblxyXG5cclxuXHJcbi8qIHNob3dUb0Rvcy5hcHBlbmQoc2hvd3RvZG9leGFtcGxlLCBzaG93dG9kb2V4YW1wbGUyLCBzaG93dG9kb2V4YW1wbGUzKVxyXG5cclxuc2hvd1Byb2plY3RDb250YWluZXIuYXBwZW5kKHNob3dUb0RvcylcclxuICovXHJcbi8qIG1haW4uYXBwZW5kKHNob3dQcm9qZWN0Q29udGFpbmVyKSAqL1xyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbn0pXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==