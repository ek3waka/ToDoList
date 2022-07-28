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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.todo-item:hover {\r\n    background-color: rgb(145, 145, 145)\r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(195, 156, 226);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');\r\n:root {\r\n    --card-width: 300px;\r\n    --card-height: 500px;\r\n}\r\n\r\nhtml, body, div, span, applet, object, iframe, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, h1, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\nhtml {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Rubik', sans-serif;\r\n    margin: 0;\r\n    background-color: hsla(226, 41%, 10%, 0.952);\r\n    color: white;\r\n    font-size: 16px;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.wrapper {\r\n    min-height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    position: relative;\r\n}\r\n\r\nheader {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    font-size: 1.5rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 1rem;\r\n    \r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: flex-start;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(43 58 66);\r\n    height: 3rem;\r\n    padding: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem\r\n}\r\n\r\n.legal-info {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: none;\r\n    background-color: inherit;\r\n}\r\n\r\n.header-icon {\r\n    width: 24px;\r\n}\r\n\r\n\r\n.project-list {\r\n    padding-left: 1.5rem;\r\n    padding-top: 1.5rem;\r\n    background-color: rgb(139, 137, 134);\r\n    width: 28rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-button, .add-project-button {\r\n    width: 20rem;\r\n    height: 3rem;\r\n    background-color: rgb(204, 204, 204);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.2rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    transition: 0.15s ease-in-out;\r\n    order: 3\r\n    \r\n}\r\n\r\n.project-button:hover, .add-project-button:hover {\r\n    background-color:rgb(158, 158, 158);\r\n}\r\n\r\n.add-project-button {\r\n    margin-top: 2rem;\r\n}\r\n\r\n.project-name, .add-project-text {\r\n    flex-grow: 1;\r\n    text-align: start;\r\n}\r\n\r\n.project-icon {\r\n    width: 28px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-project-button:hover {\r\n    width: 29px;\r\n}\r\n\r\n.project-container {\r\n    flex-grow: 1;\r\n    background-color: rgb(182, 182, 182);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1.5rem;\r\n    padding-left: 6rem;\r\n    gap: 0.5rem\r\n}\r\n\r\n.project-title {\r\n    font-size: 2rem;\r\n    font-weight: 500;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.todo-item {\r\n    width: 40rem;\r\n    height: 3rem;\r\n    box-sizing: border-box;\r\n    background-color: rgb(136, 136, 136);\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 0.1rem 1rem;\r\n    gap: 1rem;\r\n    font-size: 1.2rem;\r\n    border-radius: 0.5rem;\r\n    \r\n}\r\n\r\n.todo-item:hover {\r\n    background-color: rgb(145, 145, 145)\r\n}\r\n\r\n.check-todo-item {\r\n    width: 32px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: rgb(211, 211, 211);\r\n    border-radius: 50%;\r\n    border: 2px solid rgb(99, 99, 99);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.todo-text {\r\n    flex-grow: 1;\r\n}\r\n\r\n.due-date {\r\n    width: 4rem;\r\n}\r\n\r\n\r\n.container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 3rem;\r\n    \r\n    \r\n}\r\n\r\n.container-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: var(--card-width);\r\n    height: var(--card-height);\r\n    font-size: 1.1rem;\r\n    text-align: start;\r\n    line-height: 1.8rem;\r\n}\r\n\r\n.table {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 2rem;\r\n    \r\n}\r\n\r\n.create-card {\r\n    height: 25rem;\r\n    width: 375px;\r\n    height: 350px;\r\n    padding-left: 2.5rem;\r\n    background-color: rgb(195, 156, 226);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-items: flex-start;\r\n    border-radius: 0.8rem;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10;\r\n    visibility: hidden;\r\n}\r\n\r\n.cardHeader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 20rem;\r\n}\r\n\r\n.create-card-title {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.closeButton {\r\n    cursor: pointer;\r\n    border: none;\r\n    outline: none;\r\n    background: none;\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.create-card-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1.5rem;\r\n    justify-items: space-around;\r\n}\r\n\r\n.input-title {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    width: 20rem;\r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n.todo-date {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 2rem;\r\n    width: 320px;\r\n    gap: 2rem;\r\n}\r\n\r\n.todo-date-input {\r\n    box-sizing: border-box;\r\n    height: 1.8rem;\r\n    \r\n    font-size: 1rem;\r\n    border-radius: 0.5rem;\r\n    padding-left: 1.5rem;\r\n    border: none;\r\n}\r\n\r\n\r\n.todo-priority {\r\n    width: 20rem;\r\n    height: 2rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem\r\n}\r\n\r\n\r\n.priority-title {\r\n    margin-right: 1.5rem;\r\n    flex-grow: 1;\r\n}\r\n\r\n.create-card-text {\r\n    font-size: 1.05rem;\r\n}\r\n\r\n.undone {\r\n    display: none;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n    transition: 1s ease-in-out;\r\n}\r\n\r\n.todo-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.input-title:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n.todo-date-input:focus {\r\n    border: 1px solid rgb(127, 137, 143);\r\n    outline: 0;\r\n}\r\n\r\n#overlay {\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n  }\r\n  \r\n  #overlay.active {\r\n    opacity: 1;\r\n    pointer-events: all;\r\n  }\r\n\r\n  .create-card.active {\r\n    visibility: visible;\r\n    transform: translate(-50%, -50%) scale(1);\r\n  }\r\n\r\n  #Project {\r\n    order: 4;\r\n  }"],"sourceRoot":""}]);
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






function addToDoByName(modal, targetProject) {
    const addNewToDoButton = document.querySelector('#NewToDo')
  
    addNewToDoButton.addEventListener('click', () => {
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
      const projectToDelete = evt.target.getAttribute('id')
      console.log(projectToDelete)
      projectList.deleteProjectFromProjectList(projectToDelete)
      projectListDOM.removeChild(evt.target.parentElement)
      const ButtonsList = document.querySelectorAll('#Project ~ .project-button')
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
        const toDoToDelete = evt.target.getAttribute('id')
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





/////////////////
if (localStorage.todolist == null) {
    console.log('todolist not here')
    let example = new _Elements_modules_create_project_js__WEBPACK_IMPORTED_MODULE_4__.Project('Project1')
    userProjectList.addProjectToProjectList(example)
    projectList.append(new _DOM_modules_show_project_DOM__WEBPACK_IMPORTED_MODULE_8__.DisplayProject(example, 0).displayProjectDOM())

    let todoexample = new _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_5__.ToDo('Do smth', '29.12.22', 'high')
    let todoexample2 = new _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_5__.ToDo('Do smth1', '01.01.23', 'low')
    let todoexample3 = new _Elements_modules_create_todo__WEBPACK_IMPORTED_MODULE_5__.ToDo('Do smth2', '11.11.23', 'medium')

    example.addToDoToProject(todoexample)
    example.addToDoToProject(todoexample2)
    example.addToDoToProject(todoexample3)
} else {
    let userProjectListProjects = JSON.parse(localStorage.todolist)
    userProjectList.projects = userProjectListProjects.projects.slice()
    for (let i=0; i < userProjectList.projects.length; i++) {
      projectList.append(new _DOM_modules_show_project_DOM__WEBPACK_IMPORTED_MODULE_8__.DisplayProject(userProjectList.projects[i], i).displayProjectDOM())
    }
}

let addProjectButton = new _DOM_modules_show_common_components_DOM__WEBPACK_IMPORTED_MODULE_9__.CreateAddButton()
projectList.append(addProjectButton.createAddButton('Project'))




window.addEventListener('beforeunload', () => {
    localStorage.todolist = JSON.stringify(userProjectList)
})





/////////////////////
///add project and todo modal
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
///////////////////////////////

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVks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cGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL2RhdGEtZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL21vZGFsLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9hZGQtcHJvamVjdC10b0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9hZGQtdG9kby10b0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9kZWxldGUtcHJvamVjdC1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvZGVsZXRlLXRvZG8tRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL3Nob3ctY29tbW9uLWNvbXBvbmVudHMtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL3Nob3ctbW9kYWxzLURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9zaG93LXByb2plY3QtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL3Nob3ctcHJvamVjdC1saXN0LURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9zaG93LXRvZG8tRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL3Nob3ctdG9kby1saXN0LURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy90b2dnbGUtdG9kby1jaGVjay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS10b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SdWJpayZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tY2FyZC13aWR0aDogMzAwcHg7XFxyXFxuICAgIC0tY2FyZC1oZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgaDEsIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjYsIDQxJSwgMTAlLCAwLjk1Mik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgNTggNjYpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzIDU4IDY2KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtXFxyXFxufVxcclxcblxcclxcbi5sZWdhbC1pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0IHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDEzNywgMTM0KTtcXHJcXG4gICAgd2lkdGg6IDI4cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24sIC5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIG9yZGVyOiAzXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIsIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTgsIDE1OCwgMTU4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUsIC5hZGQtcHJvamVjdC10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDI5cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4MiwgMTgyLCAxODIpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDQwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpXFxyXFxufVxcclxcblxcclxcbi5jaGVjay10b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5OSwgOTksIDk5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICAgIHdpZHRoOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDM3NXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NSwgMTU2LCAyMjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGdhcDogMS41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10aXRsZSB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0IHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgIFxcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHkge1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByaW9yaXR5LXRpdGxlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLXRleHQge1xcclxcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxyXFxufVxcclxcblxcclxcbi51bmRvbmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGl0bGU6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI3LCAxMzcsIDE0Myk7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY3JlYXRlLWNhcmQuYWN0aXZlIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjUHJvamVjdCB7XFxyXFxuICAgIG9yZGVyOiA0O1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Ny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QUNoQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkI7QUFDSjs7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxRQUFRO0VBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwJyk7XFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWNhcmQtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAtLWNhcmQtaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGgxLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI2LCA0MSUsIDEwJSwgMC45NTIpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzIDU4IDY2KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA1OCA2Nik7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ubGVnYWwtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWljb24ge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxMzcsIDEzNCk7XFxyXFxuICAgIHdpZHRoOiAyOHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uLCAuYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBvcmRlcjogM1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLCAuYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTU4LCAxNTgsIDE1OCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLCAuYWRkLXByb2plY3QtdGV4dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWljb24ge1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KVxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stdG9kby1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTksIDk5LCA5OSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgICB3aWR0aDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZCB7XFxyXFxuICAgIGhlaWdodDogMjVyZW07XFxyXFxuICAgIHdpZHRoOiAzNzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE1NiwgMjI2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGl0bGUge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvLXByaW9yaXR5IHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcmlvcml0eS10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udW5kb25lIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRpdGxlOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTM3LCAxNDMpO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTM3LCAxNDMpO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjb3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0ZS1jYXJkLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI1Byb2plY3Qge1xcclxcbiAgICBvcmRlcjogNDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIG5vcm1hbGl6ZURhdGUoZGF0ZSkge1xyXG4gICAgbGV0IGRhdGVEYXkgPSBkYXRlW2RhdGUubGVuZ3RoLTJdICsgZGF0ZVtkYXRlLmxlbmd0aC0xXVxyXG4gICAgbGV0IG1vbnRoRGF0ZSA9IGRhdGVbZGF0ZS5sZW5ndGgtNV0gKyBkYXRlW2RhdGUubGVuZ3RoLTRdXHJcbiAgICBsZXQgeWVhckRhdGUgPSBkYXRlW2RhdGUubGVuZ3RoLThdICsgZGF0ZVtkYXRlLmxlbmd0aC03XVxyXG4gICAgcmV0dXJuIGAke2RhdGVEYXl9LiR7bW9udGhEYXRlfS4ke3llYXJEYXRlfWBcclxuICB9XHJcblxyXG5mdW5jdGlvbiBnZXREYXRlKCkge1xyXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIGxldCBkYXkgPSAoXCIwXCIgKyBub3cuZ2V0RGF0ZSgpKS5zbGljZSgtMilcclxuICAgIGxldCBtb250aCA9IChcIjBcIiArIChub3cuZ2V0TW9udGgoKSArIDEpKS5zbGljZSgtMilcclxuICAgIHJldHVybiBub3cuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG1vbnRoKSArIFwiLVwiICsgKGRheSlcclxufVxyXG5cclxuZXhwb3J0IHtub3JtYWxpemVEYXRlLCBnZXREYXRlfSIsImltcG9ydCB7Z2V0RGF0ZX0gZnJvbSAnLi9kYXRhLWZ1bmN0aW9ucydcclxuXHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xyXG4gICAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxufVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcclxuICAgIGlmIChtb2RhbCA9PSBudWxsKSByZXR1cm5cclxuICAgIGNvbnN0IHRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC10aXRsZScpXHJcbiAgICB0aXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XHJcbiAgICAgIHRpdGxlLnZhbHVlID0gJydcclxuICAgIH0pXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tZGF0ZS1pbnB1dCcpXHJcbiAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3ZhbHVlPVwibWVkaXVtXCJdJylcclxuICAgIGRhdGUudmFsdWUgPSBgJHtnZXREYXRlKCl9YFxyXG4gICAgcHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9IHRydWVcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7b3Blbk1vZGFsLCBjbG9zZU1vZGFsfSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LmpzJ1xyXG5pbXBvcnQgeyBVc2VyUHJvamVjdExpc3QgfSBmcm9tICcuLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LWxpc3QuanMnXHJcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9tb2RhbC1mdW5jdGlvbnMuanMnXHJcbmltcG9ydCB7IERpc3BsYXlQcm9qZWN0IH0gZnJvbSAnLi9zaG93LXByb2plY3QtRE9NJ1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdEJ5TmFtZShtb2RhbCwgdXNlclByb2plY3RMaXN0LCBwcm9qZWN0TGlzdCkge1xyXG4gICAgICBjb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI05ld1Byb2plY3QnKVxyXG4gICAgICBhZGROZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LXRpdGxlJylcclxuICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChgJHtwcm9qZWN0VGl0bGUudmFsdWV9YClcclxuICAgICAgICAgIHVzZXJQcm9qZWN0TGlzdC5hZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChwcm9qZWN0KVxyXG4gICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ldyBEaXNwbGF5UHJvamVjdChwcm9qZWN0LCB1c2VyUHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoLTEpLmRpc3BsYXlQcm9qZWN0RE9NKCkpXHJcbiAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHthZGRQcm9qZWN0QnlOYW1lfSIsImltcG9ydCB7IFRvRG8gfSBmcm9tICcuLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS10b2RvLmpzJ1xyXG5pbXBvcnQgeyBjbG9zZU1vZGFsIH0gZnJvbSAnLi4vQ29tbW9uIGZ1bmN0aW9ucyBtb2R1bGUvbW9kYWwtZnVuY3Rpb25zLmpzJ1xyXG5pbXBvcnQgeyBub3JtYWxpemVEYXRlIH0gZnJvbSAnLi4vQ29tbW9uIGZ1bmN0aW9ucyBtb2R1bGUvZGF0YS1mdW5jdGlvbnMnXHJcbmltcG9ydCB7IERpc3BsYXlUb0RvIH0gZnJvbSAnLi9zaG93LXRvZG8tRE9NJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFRvRG9CeU5hbWUobW9kYWwsIHRhcmdldFByb2plY3QpIHtcclxuICAgIGNvbnN0IGFkZE5ld1RvRG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTmV3VG9EbycpXHJcbiAgXHJcbiAgICBhZGROZXdUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IFRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3BsYWNlaG9sZGVyPVwiVG9EbyBUaXRsZVwiXScpXHJcbiAgICAgICAgY29uc3QgVG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kYXRlLWlucHV0JylcclxuICAgICAgICBjb25zdCBUb0RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKGAke1RvRG9UaXRsZS52YWx1ZX1gLCBgJHtub3JtYWxpemVEYXRlKFRvRG9EdWVEYXRlLnZhbHVlKX1gLCBgJHtUb0RvUHJpb3JpdHkudmFsdWV9YClcclxuICAgICAgICBcclxuICAgICAgICB0YXJnZXRQcm9qZWN0LmFkZFRvRG9Ub1Byb2plY3QodG9kbylcclxuICBcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChuZXcgRGlzcGxheVRvRG8oKS5ET00odG9kbywgdGFyZ2V0UHJvamVjdC50b2Rvcy5sZW5ndGggLSAxKSlcclxuICBcclxuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBleHBvcnQge2FkZFRvRG9CeU5hbWV9IiwiaW1wb3J0IHsgVXNlclByb2plY3RMaXN0IH0gZnJvbSAnLi4vRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtcHJvamVjdC1saXN0LmpzJ1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChldnQsIHByb2plY3RMaXN0LCBwcm9qZWN0TGlzdERPTSkge1xyXG4gICAgaWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gZXZ0LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJylcclxuICAgICAgY29uc29sZS5sb2cocHJvamVjdFRvRGVsZXRlKVxyXG4gICAgICBwcm9qZWN0TGlzdC5kZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0KHByb2plY3RUb0RlbGV0ZSlcclxuICAgICAgcHJvamVjdExpc3RET00ucmVtb3ZlQ2hpbGQoZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50KVxyXG4gICAgICBjb25zdCBCdXR0b25zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNQcm9qZWN0IH4gLnByb2plY3QtYnV0dG9uJylcclxuICAgICAgY29uc3QgYXJyID0gQXJyYXkuZnJvbShCdXR0b25zTGlzdCk7XHJcbiAgICAgIGFyci5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgIHByb2plY3QuaWQgPSBhcnIuaW5kZXhPZihwcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IHtkZWxldGVQcm9qZWN0fSIsImZ1bmN0aW9uIGRlbGV0ZVRvZG8oZXZ0LCB0YXJnZXRQcm9qZWN0KSB7XHJcbiAgICBpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0gPiAuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcclxuICAgICAgICBjb25zdCB0b0RvVG9EZWxldGUgPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKVxyXG4gICAgICAgIHRhcmdldFByb2plY3QuZGVsZXRlVG9Eb0Zyb21Qcm9qZWN0KHRvRG9Ub0RlbGV0ZSlcclxuICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKGV2dC50YXJnZXQucGFyZW50RWxlbWVudClcclxuICAgICAgICBjb25zdCB0b0Rvc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtJylcclxuICAgICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKHRvRG9zTGlzdCk7XHJcbiAgICAgICAgYXJyLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgICAgICB0b2RvLmlkID0gYXJyLmluZGV4T2YodG9Eb3NMaXN0KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7ZGVsZXRlVG9kb30iLCJpbXBvcnQgUGx1cyBmcm9tICcuLi9JY29ucy9wbHVzLXRoaWNrLnBuZydcclxuXHJcbmNsYXNzIENyZWF0ZUFkZEJ1dHRvbiB7XHJcbiAgICBjcmVhdGVBZGRCdXR0b24od2hhdFRvQ3JlYXRlKSB7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtYnV0dG9uJylcclxuICAgICAgICBhZGRCdXR0b24uaWQgPSB3aGF0VG9DcmVhdGVcclxuXHJcbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgYWRkSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG4gICAgICAgIGFkZEljb24uc3JjID0gUGx1c1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFkZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgYWRkVGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJylcclxuICAgICAgICBhZGRUaXRsZS50ZXh0Q29udGVudCA9IGBBZGQgJHt3aGF0VG9DcmVhdGV9YFxyXG5cclxuICAgICAgICBhZGRCdXR0b24uYXBwZW5kKGFkZEljb24sIGFkZFRpdGxlKVxyXG5cclxuICAgICAgICByZXR1cm4gYWRkQnV0dG9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Q3JlYXRlQWRkQnV0dG9ufSIsImltcG9ydCB7IENyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gJy4vc2hvdy1jb21tb24tY29tcG9uZW50cy1ET00uanMnXHJcbmltcG9ydCB7IG5vcm1hbGl6ZURhdGUsIGdldERhdGUgfSBmcm9tICcuLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9kYXRhLWZ1bmN0aW9ucy5qcydcclxuXHJcbmNsYXNzIENyZWF0ZU1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdFRvQ3JlYXRlKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RUb0NyZWF0ZSA9IG9iamVjdFRvQ3JlYXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLmNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lbnUoKSB7IFxyXG4gICAgICAgIHRoaXMuY2FyZC5pZCA9IGBhZGQke3RoaXMub2JqZWN0VG9DcmVhdGV9Q2FyZGBcclxuICAgICAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQnKVxyXG5cclxuICAgICAgICB0aGlzLmNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZEhlYWRlcicpXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRpdGxlJylcclxuICAgICAgICB0aGlzLmNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGBDcmVhdGUgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfWBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnV0dG9uJylcclxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsICcmdGltZXM7JylcclxuICAgICAgICB0aGlzLmNsb3NlQnV0dG9uLmlkID0gJ2Nsb3NlTW9kYWwnXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZEhlYWRlci5hcHBlbmQodGhpcy5jYXJkVGl0bGUsIHRoaXMuY2xvc2VCdXR0b24pXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZC5hcHBlbmQodGhpcy5jYXJkSGVhZGVyLCBuZXcgQ3JlYXRlQWRkQnV0dG9uKCkuY3JlYXRlQWRkQnV0dG9uKGBOZXcke3RoaXMub2JqZWN0VG9DcmVhdGV9YCkpXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVPdmVybGF5KCkge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG92ZXJsYXkuaWQgPSAnb3ZlcmxheSdcclxuICAgICAgICByZXR1cm4gb3ZlcmxheVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDcmVhdGVUb2RvTWVudSBleHRlbmRzIENyZWF0ZU1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdFRvQ3JlYXRlKSB7XHJcbiAgICAgICAgc3VwZXIob2JqZWN0VG9DcmVhdGUpXHJcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aGlzLmRhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cubmFtZSA9ICdwcmlvcml0eSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtLm5hbWUgPSAncHJpb3JpdHknXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2gubmFtZSA9ICdwcmlvcml0eSdcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvdy50eXBlID0gJ3JhZGlvJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0udHlwZSA9ICdyYWRpbydcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaC50eXBlID0gJ3JhZGlvJ1xyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93LnZhbHVlID0gJ2xvdydcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaC52YWx1ZSA9ICdoaWdoJ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUb2RvTWVudSgpIHtcclxuICAgICAgICB0aGlzLmZvcm0uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtZm9ybScpXHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gYCR7dGhpcy5vYmplY3RUb0NyZWF0ZX0gVGl0bGVgXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0LXRpdGxlJylcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLnRpdGxlSW5wdXQpXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZScpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tcHJpb3JpdHknKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZS1pbnB1dCcpXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQudmFsdWUgPSBgJHtnZXREYXRlKCl9YFxyXG5cclxuICAgICAgICB0aGlzLmRhdGVQLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRleHQnKVxyXG4gICAgICAgIHRoaXMuZGF0ZVAudGV4dENvbnRlbnQgPSAnRGF0ZSdcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dENvbnRhaW5lci5hcHBlbmQodGhpcy5kYXRlUCwgdGhpcy5kYXRlSW5wdXQpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3dQLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRleHQnKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW1QLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRleHQnKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC10ZXh0JylcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AudGV4dENvbnRlbnQgPSAnTG93J1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW1QLnRleHRDb250ZW50ID0gJ01lZGl1bSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaFAudGV4dENvbnRlbnQgPSAnSGlnaCdcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtLmNoZWNrZWQgPSB0cnVlXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmQodGhpcy5wcmlvcml0eUxvdywgdGhpcy5wcmlvcml0eUxvd1AsIHRoaXMucHJpb3JpdHlNZWRpdW0sIHRoaXMucHJpb3JpdHlNZWRpdW1QLCB0aGlzLnByaW9yaXR5SGlnaCwgdGhpcy5wcmlvcml0eUhpZ2hQKVxyXG4gICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy5kYXRlSW5wdXRDb250YWluZXIsIHRoaXMucHJpb3JpdHlJbnB1dENvbnRhaW5lcilcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtXHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmNsYXNzIENyZWF0ZVByb2plY3RNZW51IGV4dGVuZHMgQ3JlYXRlTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICBzdXBlcihvYmplY3RUb0NyZWF0ZSlcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIH1cclxuICAgIGNyZWF0ZVByb2plY3RNZW51KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC1mb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfSBUaXRsZWBcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKVxyXG5cclxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMudGl0bGVJbnB1dClcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Q3JlYXRlTW9kYWwsIENyZWF0ZVRvZG9NZW51LCBDcmVhdGVQcm9qZWN0TWVudX0iLCJpbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vSWNvbnMvZm9ybWF0LWxpc3QtY2hlY2tib3gucG5nJ1xyXG5pbXBvcnQgVHJhc2ggZnJvbSAnLi4vSWNvbnMvZGVsZXRlLnBuZydcclxuXHJcbmNsYXNzIERpc3BsYXlQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb2plY3QsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlQcm9qZWN0RE9NKCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKVxyXG4gICAgICAgIHByb2plY3RCdXR0b24uaWQgPSB0aGlzLmlkXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nKVxyXG4gICAgICAgIHByb2plY3RJY29uLnNyYyA9IENoZWNrYm94XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0LnRpdGxlXHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJywgJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zcmMgPSBUcmFzaFxyXG4gICAgICAgIHByb2plY3RCdXR0b24uYXBwZW5kKHByb2plY3RJY29uLCBwcm9qZWN0VGl0bGUsIGRlbGV0ZVByb2plY3QpXHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0QnV0dG9uXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7RGlzcGxheVByb2plY3R9XHJcbiIsImltcG9ydCB7IENyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gJy4vc2hvdy1jb21tb24tY29tcG9uZW50cy1ET00uanMnXHJcblxyXG5jbGFzcyBDcmVhdGVQcm9qZWN0Q29udGFpbmVyIHtcclxuXHJcbiAgICBjcmVhdGVwcm9qZWN0Q29udGFpbmVyKHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZScpXHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0LnRpdGxlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnJ1xyXG4gICAgICAgIH0gZWxzZSB7IHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGUgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFkZFRvRG8gPSBuZXcgQ3JlYXRlQWRkQnV0dG9uXHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRvRG9CdXR0b24gPSBhZGRUb0RvLmNyZWF0ZUFkZEJ1dHRvbignVG9EbycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlLCBhZGRUb0RvQnV0dG9uKVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdENvbnRhaW5lclxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZXRvRG9Db250YWluZXIoKSB7XHJcbiAgICAgICAgY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRhaW5lcicpXHJcbiAgICAgICAgcmV0dXJuIHRvRG9Db250YWluZXJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDcmVhdGVQcm9qZWN0Q29udGFpbmVyfVxyXG4iLCJpbXBvcnQgRGF0ZSBmcm9tICcuLi9JY29ucy9jYWxlbmRhci1jbG9jay5wbmcnXHJcbmltcG9ydCBUcmFzaCBmcm9tICcuLi9JY29ucy9kZWxldGUucG5nJ1xyXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJy4uL0ljb25zL2NoZWNrLWJvbGQucG5nJ1xyXG5cclxuY2xhc3MgRGlzcGxheVRvRG8ge1xyXG4gICAgRE9NKHRvZG8sIGlkKSB7XHJcbiAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRvRG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbScpXHJcbiAgICAgICAgdG9Eb0l0ZW0uaWQgPSBpZFxyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKCdjaGVjay10b2RvLWl0ZW0nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0b2RvLmRvbmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGNoZWNrZWQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJylcclxuICAgICAgICAgICAgY2hlY2tlZC5zcmMgPSBDaGVja0ljb25cclxuICAgICAgICAgICAgY2hlY2suYXBwZW5kKGNoZWNrZWQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b0RvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRvRG9UZXh0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGV4dCcpXHJcbiAgICAgICAgdG9Eb1RleHQudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBkYXRlSWNvbi5zcmMgPSBEYXRlXHJcbiAgICAgICAgZGF0ZUljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJylcclxuXHJcbiAgICAgICAgc3dpdGNoICh0b2RvLnByaW9yaXR5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6IFxyXG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9ICcwLjVyZW0gc29saWQgZ3JlZW4nXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSAnaGlnaCc6IFxyXG4gICAgICAgICAgICAgICAgdG9Eb0l0ZW0uc3R5bGUuYm9yZGVyTGVmdCA9ICcwLjVyZW0gc29saWQgY3JpbXNvbidcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJvcmRlckxlZnQgPSAnMC41cmVtIHNvbGlkIHllbGxvdydcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBkdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKCdkdWUtZGF0ZScpXHJcbiAgICAgICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGVcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlVG9EbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgZGVsZXRlVG9Eby5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nLCAnZGVsZXRlLXByb2plY3QtYnV0dG9uJylcclxuICAgICAgICBkZWxldGVUb0RvLnNyYyA9IFRyYXNoXHJcblxyXG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZChjaGVjaywgdG9Eb1RleHQsIGRhdGVJY29uLCBkdWVEYXRlVGV4dCwgZGVsZXRlVG9EbylcclxuXHJcbiAgICAgICAgcmV0dXJuIHRvRG9JdGVtXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0Rpc3BsYXlUb0RvfSIsImltcG9ydCB7IHRvZ2dsZVRvZG9DaGVjayB9IGZyb20gXCIuL3RvZ2dsZS10b2RvLWNoZWNrXCJcclxuaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gJy4vZGVsZXRlLXRvZG8tRE9NJ1xyXG5pbXBvcnQgeyBDcmVhdGVQcm9qZWN0Q29udGFpbmVyIH0gZnJvbSAnLi9zaG93LXByb2plY3QtbGlzdC1ET00nXHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4uL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL21vZGFsLWZ1bmN0aW9ucydcclxuaW1wb3J0IHsgYWRkVG9Eb0J5TmFtZSB9IGZyb20gJy4vYWRkLXRvZG8tdG9ET00nXHJcbmltcG9ydCB7IERpc3BsYXlUb0RvIH0gZnJvbSAnLi9zaG93LXRvZG8tRE9NJ1xyXG5cclxuZnVuY3Rpb24gc2hvd1RvZG9MaXN0KGV2dCwgbWFpbiwgdXNlclByb2plY3RMaXN0KSB7XHJcbiAgICBpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWJ1dHRvbiA6bm90KC5hZGQtcHJvamVjdC1idXR0b24pJykpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykpIHtcclxuICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY29udGFpbmVyJykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRhcmdldFByb2plY3QgPSB1c2VyUHJvamVjdExpc3QucHJvamVjdHNbZXZ0LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1idXR0b24nKS5nZXRBdHRyaWJ1dGUoJ2lkJyldXHJcbiAgICAgICAgbGV0IHNob3dQcm9qZWN0ID0gIG5ldyBDcmVhdGVQcm9qZWN0Q29udGFpbmVyKClcclxuICAgICAgICBsZXQgc2hvd1Byb2plY3RDb250YWluZXIgPSBzaG93UHJvamVjdC5jcmVhdGVwcm9qZWN0Q29udGFpbmVyKHRhcmdldFByb2plY3QpXHJcbiAgICAgICAgbGV0IHNob3dUb0RvcyA9IHNob3dQcm9qZWN0LmNyZWF0ZXRvRG9Db250YWluZXIodGFyZ2V0UHJvamVjdClcclxuICAgICAgICBtYWluLmFwcGVuZChzaG93UHJvamVjdENvbnRhaW5lcilcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCB0YXJnZXRQcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgc2hvd3RvZG9leGFtcGxlID0gbmV3IERpc3BsYXlUb0RvKCkuRE9NKHRhcmdldFByb2plY3QudG9kb3NbaV0sIGkpXHJcbiAgICAgICAgICBzaG93VG9Eb3MuYXBwZW5kKHNob3d0b2RvZXhhbXBsZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvd1Byb2plY3RDb250YWluZXIuYXBwZW5kKHNob3dUb0RvcylcclxuICAgIFxyXG4gICAgLy90b2dnbGUgY2hlY2tcclxuICAgICAgICBzaG93UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHRvZ2dsZVRvZG9DaGVjayhldnQsIHRhcmdldFByb2plY3QpKVxyXG4gICAgLy9kZWxldGUgdG9kb1xyXG4gICAgICAgIHNob3dQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4gZGVsZXRlVG9kbyhldnQsIHRhcmdldFByb2plY3QpKVxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qgb3BlbkFkZFRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVG9EbycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgb3BlbkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb0RvQ2FyZCcpXHJcbiAgICAgICAgICBvcGVuTW9kYWwobW9kYWwpXHJcbiAgICAgICAgICBhZGRUb0RvQnlOYW1lKG1vZGFsLCB0YXJnZXRQcm9qZWN0KSBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQge3Nob3dUb2RvTGlzdH0iLCJpbXBvcnQgQ2hlY2sgZnJvbSAnLi4vSWNvbnMvY2hlY2stYm9sZC5wbmcnXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVUb2RvQ2hlY2soZXZ0LCB0YXJnZXRQcm9qZWN0KSB7XHJcbiAgICBpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVjay10b2RvLWl0ZW0nKSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFRvRG8gPSB0YXJnZXRQcm9qZWN0LnRvZG9zW2V2dC50YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpLmdldEF0dHJpYnV0ZSgnaWQnKV1cclxuICAgICAgICB0YXJnZXRUb0RvLmNoYW5nZURvbmUoKVxyXG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0VG9Eby5kb25lID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNoZWNrZWQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJylcclxuICAgICAgICAgICAgY2hlY2tlZC5zcmMgPSBDaGVja1xyXG4gICAgICAgICAgICBldnQudGFyZ2V0LmFwcGVuZChjaGVja2VkKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV2dC50YXJnZXQucmVtb3ZlKGNoZWNrZWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3RvZ2dsZVRvZG9DaGVja30iLCJjbGFzcyBVc2VyUHJvamVjdExpc3Qge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVQcm9qZWN0RnJvbVByb2plY3RMaXN0KHByb2plY3RJbmRleCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtVc2VyUHJvamVjdExpc3R9IiwiY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLnRvZG9zID0gW11cclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0RvVG9Qcm9qZWN0KHRvRG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9EbylcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUb0RvRnJvbVByb2plY3QodG9Eb0luZGV4KSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UodG9Eb0luZGV4LCAxKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1Byb2plY3R9IiwiY2xhc3MgVG9EbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICAgICAgdGhpcy5kb25lID0gZmFsc2VcclxuICAgIH1cclxuICAgIGNoYW5nZURvbmUoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lID0gIXRoaXMuZG9uZVxyXG4gICAgfVxyXG4gICAgZ2V0RG9uZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb25lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7VG9Eb30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENvZyBmcm9tICcuL0ljb25zL2NvZy5wbmcnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vSWNvbnMvbWVudS5wbmcnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5cclxuaW1wb3J0IHsgVXNlclByb2plY3RMaXN0IH0gZnJvbSAnLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LWxpc3QuanMnXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QuanMnXHJcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXRvZG8nXHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4vQ29tbW9uIGZ1bmN0aW9ucyBtb2R1bGUvbW9kYWwtZnVuY3Rpb25zLmpzJ1xyXG5pbXBvcnQgeyBDcmVhdGVNb2RhbCwgQ3JlYXRlVG9kb01lbnUsIENyZWF0ZVByb2plY3RNZW51fSBmcm9tICcuL0RPTSBtb2R1bGVzL3Nob3ctbW9kYWxzLURPTSdcclxuaW1wb3J0IHsgRGlzcGxheVByb2plY3QgfSBmcm9tICcuL0RPTSBtb2R1bGVzL3Nob3ctcHJvamVjdC1ET00nXHJcbmltcG9ydCB7IENyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gJy4vRE9NIG1vZHVsZXMvc2hvdy1jb21tb24tY29tcG9uZW50cy1ET00nXHJcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL0RPTSBtb2R1bGVzL2RlbGV0ZS1wcm9qZWN0LURPTSdcclxuaW1wb3J0IHsgc2hvd1RvZG9MaXN0IH0gZnJvbSAnLi9ET00gbW9kdWxlcy9zaG93LXRvZG8tbGlzdC1ET00nXHJcbmltcG9ydCB7IGFkZFByb2plY3RCeU5hbWUgfSBmcm9tICcuL0RPTSBtb2R1bGVzL2FkZC1wcm9qZWN0LXRvRE9NJ1xyXG5pbXBvcnQgeyBhZGRUb0RvQnlOYW1lIH0gZnJvbSAnLi9ET00gbW9kdWxlcy9hZGQtdG9kby10b0RPTSdcclxuaW1wb3J0IHsgdG9nZ2xlVG9kb0NoZWNrIH0gZnJvbSAnLi9ET00gbW9kdWxlcy90b2dnbGUtdG9kby1jaGVjaydcclxuaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gJy4vRE9NIG1vZHVsZXMvZGVsZXRlLXRvZG8tRE9NJ1xyXG5cclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKVxyXG5cclxuYm9keS5hcHBlbmQod3JhcHBlcilcclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxyXG5cclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuY29uc3QgbWVudUJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5tZW51QnRuSWNvbi5zcmMgPSBNZW51XHJcbm1lbnVCdG5JY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJylcclxuXHJcbm1lbnVCdG4uYXBwZW5kKG1lbnVCdG5JY29uKVxyXG50aXRsZS50ZXh0Q29udGVudCA9ICdUb0RvTGlzdCdcclxuXHJcbmNvbnN0IHNldHRpbmdzQnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbnNldHRpbmdzQnRuSWNvbi5zcmMgPSBDb2dcclxuc2V0dGluZ3NCdG5JY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1pY29uJylcclxuc2V0dGluZ3NCdG4uYXBwZW5kKHNldHRpbmdzQnRuSWNvbilcclxuXHJcbmhlYWRlci5hcHBlbmQobWVudUJ0biwgdGl0bGUsIHNldHRpbmdzQnRuKVxyXG5cclxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5wcm9qZWN0TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKVxyXG5jb25zdCBwcm9qZWN0TGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG5wcm9qZWN0TGlzdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xyXG5wcm9qZWN0TGlzdC5hcHBlbmQocHJvamVjdExpc3RUaXRsZSlcclxuXHJcbm1haW4uYXBwZW5kKHByb2plY3RMaXN0KVxyXG5cclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcclxuY29uc3QgbGVnYWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxubGVnYWxJbmZvLmNsYXNzTGlzdC5hZGQoJ2xlZ2FsLWluZm8nKVxyXG5jb25zdCBzaXRlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IGNvcHlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnNpdGVOYW1lLnRleHRDb250ZW50ID0gYEppamFSYXJlIEluYy4sIDIwMjJgXHJcbmNvcHlSaWdodC50ZXh0Q29udGVudCA9ICdBbGwgcmlnaHRzIHJlc2VydmVkJ1xyXG5sZWdhbEluZm8uYXBwZW5kKHNpdGVOYW1lLCBjb3B5UmlnaHQpXHJcbmZvb3Rlci5hcHBlbmRDaGlsZChsZWdhbEluZm8pXHJcbndyYXBwZXIuYXBwZW5kKG1haW4sIGZvb3RlcilcclxuXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxufSlcclxuXHJcbmNvbnN0IHVzZXJQcm9qZWN0TGlzdCA9IG5ldyBVc2VyUHJvamVjdExpc3QoKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbmlmIChsb2NhbFN0b3JhZ2UudG9kb2xpc3QgPT0gbnVsbCkge1xyXG4gICAgY29uc29sZS5sb2coJ3RvZG9saXN0IG5vdCBoZXJlJylcclxuICAgIGxldCBleGFtcGxlID0gbmV3IFByb2plY3QoJ1Byb2plY3QxJylcclxuICAgIHVzZXJQcm9qZWN0TGlzdC5hZGRQcm9qZWN0VG9Qcm9qZWN0TGlzdChleGFtcGxlKVxyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kKG5ldyBEaXNwbGF5UHJvamVjdChleGFtcGxlLCAwKS5kaXNwbGF5UHJvamVjdERPTSgpKVxyXG5cclxuICAgIGxldCB0b2RvZXhhbXBsZSA9IG5ldyBUb0RvKCdEbyBzbXRoJywgJzI5LjEyLjIyJywgJ2hpZ2gnKVxyXG4gICAgbGV0IHRvZG9leGFtcGxlMiA9IG5ldyBUb0RvKCdEbyBzbXRoMScsICcwMS4wMS4yMycsICdsb3cnKVxyXG4gICAgbGV0IHRvZG9leGFtcGxlMyA9IG5ldyBUb0RvKCdEbyBzbXRoMicsICcxMS4xMS4yMycsICdtZWRpdW0nKVxyXG5cclxuICAgIGV4YW1wbGUuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZSlcclxuICAgIGV4YW1wbGUuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZTIpXHJcbiAgICBleGFtcGxlLmFkZFRvRG9Ub1Byb2plY3QodG9kb2V4YW1wbGUzKVxyXG59IGVsc2Uge1xyXG4gICAgbGV0IHVzZXJQcm9qZWN0TGlzdFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb2xpc3QpXHJcbiAgICB1c2VyUHJvamVjdExpc3QucHJvamVjdHMgPSB1c2VyUHJvamVjdExpc3RQcm9qZWN0cy5wcm9qZWN0cy5zbGljZSgpXHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCB1c2VyUHJvamVjdExpc3QucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kKG5ldyBEaXNwbGF5UHJvamVjdCh1c2VyUHJvamVjdExpc3QucHJvamVjdHNbaV0sIGkpLmRpc3BsYXlQcm9qZWN0RE9NKCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBhZGRQcm9qZWN0QnV0dG9uID0gbmV3IENyZWF0ZUFkZEJ1dHRvbigpXHJcbnByb2plY3RMaXN0LmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uLmNyZWF0ZUFkZEJ1dHRvbignUHJvamVjdCcpKVxyXG5cclxuXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS50b2RvbGlzdCA9IEpTT04uc3RyaW5naWZ5KHVzZXJQcm9qZWN0TGlzdClcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vYWRkIHByb2plY3QgYW5kIHRvZG8gbW9kYWxcclxubGV0IGFkZFByb2plY3QgPSBuZXcgQ3JlYXRlUHJvamVjdE1lbnUoJ1Byb2plY3QnKVxyXG5sZXQgY2FyZCA9IGFkZFByb2plY3QuY3JlYXRlTWVudSgpXHJcbmxldCBpbnB1dCA9IGFkZFByb2plY3QuY3JlYXRlUHJvamVjdE1lbnUoKVxyXG5cclxuY2FyZC5hcHBlbmQoaW5wdXQpXHJcblxyXG5cclxuY29uc3Qgb3ZlcmxheSA9IGFkZFByb2plY3QuY3JlYXRlT3ZlcmxheSgpXHJcbmJvZHkuYXBwZW5kKG92ZXJsYXkpXHJcblxyXG5sZXQgYWRkVG9EbyA9IG5ldyBDcmVhdGVUb2RvTWVudSgnVG9EbycpXHJcbmxldCBjYXJkVG9EbyA9IGFkZFRvRG8uY3JlYXRlTWVudSgpXHJcbmxldCBpbnB1dFRvRG8gPSBhZGRUb0RvLmNyZWF0ZVRvZG9NZW51KClcclxuY2FyZFRvRG8uYXBwZW5kKGlucHV0VG9EbylcclxuXHJcblxyXG53cmFwcGVyLmFwcGVuZChjYXJkKVxyXG53cmFwcGVyLmFwcGVuZChjYXJkVG9EbylcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3Qgb3BlbkFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJvamVjdCcpXHJcbmNvbnN0IG9wZW5BZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RvRG8nKVxyXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjbG9zZU1vZGFsJylcclxuXHJcbm9wZW5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdENhcmQnKVxyXG4gICAgb3Blbk1vZGFsKG1vZGFsKVxyXG4gICAgYWRkUHJvamVjdEJ5TmFtZShtb2RhbCwgdXNlclByb2plY3RMaXN0LCBwcm9qZWN0TGlzdCkgXHJcbn0pXHJcblxyXG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IGRlbGV0ZVByb2plY3QoZXZ0LCB1c2VyUHJvamVjdExpc3QsIHByb2plY3RMaXN0KSkgXHJcblxyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlYXRlLWNhcmQuYWN0aXZlJylcclxuICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiB7XHJcbiAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gIH0pXHJcbn0pXHJcblxyXG5jbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBidXR0b24uY2xvc2VzdCgnLmNyZWF0ZS1jYXJkJylcclxuICAgIGNsb3NlTW9kYWwobW9kYWwpXHJcbiAgfSlcclxufSlcclxuXHJcbnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZ0KSA9PiBzaG93VG9kb0xpc3QoZXZ0LCBtYWluLCB1c2VyUHJvamVjdExpc3QpKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9