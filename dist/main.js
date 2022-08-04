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
        
        if (todo.done == true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVks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QUM7QUFDRDtBQUNBLDRCQUE0QixxRkFBZTtBQUMzQztBQUNBLHdHQUFnQjtBQUNoQjtBQUNBLDJCQUEyQixvRkFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EscUJBQXFCLDJFQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdFQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVGQUFTO0FBQ2IsSUFBSSxrRkFBZ0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0EsK0NBQStDLCtFQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RkFBVTtBQUNkLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdGQUFVO0FBQ2QsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLDhDQUE4Qyw4RUFBWSw2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL2RhdGEtZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL21vZGFsLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9yZWFkLWRhdGEtZnJvbS1sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvYWRkLXByb2plY3QtdG9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvYWRkLXRvZG8tdG9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvZGVsZXRlLXByb2plY3QtRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTSBtb2R1bGVzL2RlbGV0ZS10b2RvLURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9zaG93LWNvbW1vbi1jb21wb25lbnRzLURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9zaG93LW1vZGFscy1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvc2hvdy1wcm9qZWN0LURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9zaG93LXByb2plY3QtbGlzdC1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvc2hvdy10b2RvLURPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ET00gbW9kdWxlcy9zaG93LXRvZG8tbGlzdC1ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRE9NIG1vZHVsZXMvdG9nZ2xlLXRvZG8tY2hlY2suanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtcHJvamVjdC1saXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnViaWsmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWNhcmQtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAtLWNhcmQtaGVpZ2h0OiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGgxLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI2LCA0MSUsIDEwJSwgMC45NTIpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzIDU4IDY2KTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA1OCA2Nik7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ubGVnYWwtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbnAge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWljb24ge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxMzcsIDEzNCk7XFxyXFxuICAgIHdpZHRoOiAyOHJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uLCAuYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcclxcbiAgICBvcmRlcjogM1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyLCAuYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTU4LCAxNTgsIDE1OCk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLCAuYWRkLXByb2plY3QtdGV4dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWljb24ge1xcclxcbiAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAyOXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODIsIDE4MiwgMTgyKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjFyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KVxcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2stdG9kby1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTksIDk5LCA5OSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10ZXh0IHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgICB3aWR0aDogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZCB7XFxyXFxuICAgIGhlaWdodDogMjVyZW07XFxyXFxuICAgIHdpZHRoOiAzNzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTUsIDE1NiwgMjI2KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgei1pbmRleDogMTA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRIZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtdGl0bGUge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGhlaWdodDogMS44cmVtO1xcclxcbiAgICBcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvLXByaW9yaXR5IHtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcmlvcml0eS10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC10ZXh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udW5kb25lIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRpdGxlOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTM3LCAxNDMpO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0OmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyNywgMTM3LCAxNDMpO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAjb3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNyZWF0ZS1jYXJkLmFjdGl2ZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgI1Byb2plY3Qge1xcclxcbiAgICBvcmRlcjogNDtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTs7Ozs7Ozs7Ozs7O0NBWUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1Qsd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7Ozs7QUFJQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7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QUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsUUFBUTtFQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJ1YmlrJmRpc3BsYXk9c3dhcCcpO1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1jYXJkLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgLS1jYXJkLWhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBoMSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyNiwgNDElLCAxMCUsIDAuOTUyKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA1OCA2Nik7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMgNTggNjYpO1xcclxcbiAgICBoZWlnaHQ6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2FsLWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LWxpc3Qge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMTM3LCAxMzQpO1xcclxcbiAgICB3aWR0aDogMjhyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiwgLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW0gMXJlbTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG4gICAgb3JkZXI6IDNcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciwgLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1OCwgMTU4LCAxNTgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSwgLmFkZC1wcm9qZWN0LXRleHQge1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgICB3aWR0aDogMjlweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgyLCAxODIsIDE4Mik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcXHJcXG4gICAgZ2FwOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNiwgMTM2LCAxMzYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC4xcmVtIDFyZW07XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSlcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLXRvZG8taXRlbSB7XFxyXFxuICAgIHdpZHRoOiAzMnB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDk5LCA5OSwgOTkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGV4dCB7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gICAgd2lkdGg6IDRyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIFxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQge1xcclxcbiAgICBoZWlnaHQ6IDI1cmVtO1xcclxcbiAgICB3aWR0aDogMzc1cHg7XFxyXFxuICAgIGhlaWdodDogMzUwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxNTYsIDIyNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjhyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jYXJkSGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB3aWR0aDogMjByZW07XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGUtY2FyZC10aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZS1jYXJkLWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LXRpdGxlIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgaGVpZ2h0OiAxLjhyZW07XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUtaW5wdXQge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBoZWlnaHQ6IDEuOHJlbTtcXHJcXG4gICAgXFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eSB7XFxyXFxuICAgIHdpZHRoOiAyMHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXJlbVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJpb3JpdHktdGl0bGUge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlLWNhcmQtdGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZG9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC10aXRsZTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDEzNywgMTQzKTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZS1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjcsIDEzNywgMTQzKTtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jcmVhdGUtY2FyZC5hY3RpdmUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNQcm9qZWN0IHtcXHJcXG4gICAgb3JkZXI6IDQ7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG5cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG5cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHJcblxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcblxyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuXHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuXHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XHJcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuXHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcblxyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuXHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcblxyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcblxyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG5cclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5cclxuXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuXHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG5cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG5cclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG5cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgY3NzICs9IG9iai5jc3M7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcblxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9IC8vIEZvciBvbGQgSUVcclxuXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG5cclxuXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbm9ybWFsaXplRGF0ZShkYXRlKSB7XHJcbiAgICBsZXQgZGF0ZURheSA9IGRhdGVbZGF0ZS5sZW5ndGgtMl0gKyBkYXRlW2RhdGUubGVuZ3RoLTFdXHJcbiAgICBsZXQgbW9udGhEYXRlID0gZGF0ZVtkYXRlLmxlbmd0aC01XSArIGRhdGVbZGF0ZS5sZW5ndGgtNF1cclxuICAgIGxldCB5ZWFyRGF0ZSA9IGRhdGVbZGF0ZS5sZW5ndGgtOF0gKyBkYXRlW2RhdGUubGVuZ3RoLTddXHJcbiAgICByZXR1cm4gYCR7ZGF0ZURheX0uJHttb250aERhdGV9LiR7eWVhckRhdGV9YFxyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGUoKSB7XHJcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKVxyXG4gICAgbGV0IGRheSA9IChcIjBcIiArIG5vdy5nZXREYXRlKCkpLnNsaWNlKC0yKVxyXG4gICAgbGV0IG1vbnRoID0gKFwiMFwiICsgKG5vdy5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKVxyXG4gICAgcmV0dXJuIG5vdy5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAobW9udGgpICsgXCItXCIgKyAoZGF5KVxyXG59XHJcblxyXG5leHBvcnQge25vcm1hbGl6ZURhdGUsIGdldERhdGV9IiwiaW1wb3J0IHtnZXREYXRlfSBmcm9tICcuL2RhdGEtZnVuY3Rpb25zJ1xyXG5cclxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xyXG4gICAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxyXG4gICAgY29uc3QgdGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LXRpdGxlJylcclxuICAgIHRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHtcclxuICAgICAgdGl0bGUudmFsdWUgPSAnJ1xyXG4gICAgfSlcclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kYXRlLWlucHV0JylcclxuICAgIGNvbnN0IHByaW9yaXR5TWVkaXVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdmFsdWU9XCJtZWRpdW1cIl0nKVxyXG4gICAgZGF0ZS52YWx1ZSA9IGAke2dldERhdGUoKX1gXHJcbiAgICBwcmlvcml0eU1lZGl1bS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxufVxyXG5cclxuZXhwb3J0IHtvcGVuTW9kYWwsIGNsb3NlTW9kYWx9IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QuanMnXHJcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS10b2RvJ1xyXG5pbXBvcnQgeyBEaXNwbGF5UHJvamVjdCB9IGZyb20gJy4uL0RPTSBtb2R1bGVzL3Nob3ctcHJvamVjdC1ET00nXHJcblxyXG5mdW5jdGlvbiByZWFkRGF0YUZyb21KU09OKHVzZXJQcm9qZWN0TGlzdCwgcHJvamVjdExpc3QpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudG9kb2xpc3QgPT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBleGFtcGxlID0gbmV3IFByb2plY3QoJ1Byb2plY3QxJylcclxuICAgICAgICB1c2VyUHJvamVjdExpc3QuYWRkUHJvamVjdFRvUHJvamVjdExpc3QoZXhhbXBsZSlcclxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3IERpc3BsYXlQcm9qZWN0KGV4YW1wbGUsIDApLmRpc3BsYXlQcm9qZWN0RE9NKCkpXHJcbiAgICBcclxuICAgICAgICBsZXQgdG9kb2V4YW1wbGUgPSBuZXcgVG9EbygnRG8gc210aCcsICcyOS4xMi4yMicsICdoaWdoJylcclxuICAgICAgICBsZXQgdG9kb2V4YW1wbGUyID0gbmV3IFRvRG8oJ0RvIHNtdGgxJywgJzAxLjAxLjIzJywgJ2xvdycpXHJcbiAgICAgICAgbGV0IHRvZG9leGFtcGxlMyA9IG5ldyBUb0RvKCdEbyBzbXRoMicsICcxMS4xMS4yMycsICdtZWRpdW0nKVxyXG4gICAgXHJcbiAgICAgICAgZXhhbXBsZS5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlKVxyXG4gICAgICAgIGV4YW1wbGUuYWRkVG9Eb1RvUHJvamVjdCh0b2RvZXhhbXBsZTIpXHJcbiAgICAgICAgZXhhbXBsZS5hZGRUb0RvVG9Qcm9qZWN0KHRvZG9leGFtcGxlMylcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHVzZXJQcm9qZWN0TGlzdFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudG9kb2xpc3QpXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHVzZXJQcm9qZWN0TGlzdFByb2plY3RzLnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QodXNlclByb2plY3RMaXN0UHJvamVjdHMucHJvamVjdHNbaV0udGl0bGUpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx1c2VyUHJvamVjdExpc3RQcm9qZWN0cy5wcm9qZWN0c1tpXS50b2Rvcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIGxldCB0b0RvID0gbmV3IFRvRG8oXHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvamVjdExpc3RQcm9qZWN0cy5wcm9qZWN0c1tpXS50b2Rvc1tqXS50aXRsZSwgXHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvamVjdExpc3RQcm9qZWN0cy5wcm9qZWN0c1tpXS50b2Rvc1tqXS5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlclByb2plY3RMaXN0UHJvamVjdHMucHJvamVjdHNbaV0udG9kb3Nbal0ucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvamVjdExpc3RQcm9qZWN0cy5wcm9qZWN0c1tpXS50b2Rvc1tqXS5kb25lKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHByb2plY3QuYWRkVG9Eb1RvUHJvamVjdCh0b0RvKVxyXG4gICAgICBcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgdXNlclByb2plY3RMaXN0LmFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3QpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdXNlclByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3IERpc3BsYXlQcm9qZWN0KHVzZXJQcm9qZWN0TGlzdC5wcm9qZWN0c1tpXSwgaSkuZGlzcGxheVByb2plY3RET00oKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlYWREYXRhRnJvbUpTT04gfVxyXG5cclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QuanMnXHJcbmltcG9ydCB7IFVzZXJQcm9qZWN0TGlzdCB9IGZyb20gJy4uL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QtbGlzdC5qcydcclxuaW1wb3J0IHsgY2xvc2VNb2RhbCB9IGZyb20gJy4uL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL21vZGFsLWZ1bmN0aW9ucy5qcydcclxuaW1wb3J0IHsgRGlzcGxheVByb2plY3QgfSBmcm9tICcuL3Nob3ctcHJvamVjdC1ET00nXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnlOYW1lKG1vZGFsLCB1c2VyUHJvamVjdExpc3QsIHByb2plY3RMaXN0KSB7XHJcbiAgICAgIGNvbnN0IGFkZE5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTmV3UHJvamVjdCcpXHJcbiAgICAgIGFkZE5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdGl0bGUnKVxyXG4gICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGAke3Byb2plY3RUaXRsZS52YWx1ZX1gKVxyXG4gICAgICAgICAgdXNlclByb2plY3RMaXN0LmFkZFByb2plY3RUb1Byb2plY3RMaXN0KHByb2plY3QpXHJcbiAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3IERpc3BsYXlQcm9qZWN0KHByb2plY3QsIHVzZXJQcm9qZWN0TGlzdC5wcm9qZWN0cy5sZW5ndGgtMSkuZGlzcGxheVByb2plY3RET00oKSlcclxuICAgICAgICAgIGNsb3NlTW9kYWwobW9kYWwpXHJcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2FkZFByb2plY3RCeU5hbWV9IiwiaW1wb3J0IHsgVG9EbyB9IGZyb20gJy4uL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXRvZG8uanMnXHJcbmltcG9ydCB7IGNsb3NlTW9kYWwgfSBmcm9tICcuLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9tb2RhbC1mdW5jdGlvbnMuanMnXHJcbmltcG9ydCB7IG5vcm1hbGl6ZURhdGUgfSBmcm9tICcuLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9kYXRhLWZ1bmN0aW9ucydcclxuaW1wb3J0IHsgRGlzcGxheVRvRG8gfSBmcm9tICcuL3Nob3ctdG9kby1ET00nXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LmpzJ1xyXG5cclxuZnVuY3Rpb24gYWRkVG9Eb0J5TmFtZShtb2RhbCwgdGFyZ2V0UHJvamVjdCkge1xyXG4gICAgY29uc3QgYWRkTmV3VG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNOZXdUb0RvJylcclxuICAgIFxyXG4gICAgYWRkTmV3VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRQcm9qZWN0KVxyXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKVxyXG4gICAgICAgIGNvbnN0IFRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3BsYWNlaG9sZGVyPVwiVG9EbyBUaXRsZVwiXScpXHJcbiAgICAgICAgY29uc3QgVG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1kYXRlLWlucHV0JylcclxuICAgICAgICBjb25zdCBUb0RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb0RvKGAke1RvRG9UaXRsZS52YWx1ZX1gLCBgJHtub3JtYWxpemVEYXRlKFRvRG9EdWVEYXRlLnZhbHVlKX1gLCBgJHtUb0RvUHJpb3JpdHkudmFsdWV9YClcclxuICAgICAgICBcclxuICAgICAgICB0YXJnZXRQcm9qZWN0LmFkZFRvRG9Ub1Byb2plY3QodG9kbylcclxuICBcclxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChuZXcgRGlzcGxheVRvRG8oKS5ET00odG9kbywgdGFyZ2V0UHJvamVjdC50b2Rvcy5sZW5ndGggLSAxKSlcclxuICBcclxuICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxyXG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICBleHBvcnQge2FkZFRvRG9CeU5hbWV9IiwiaW1wb3J0IHsgVXNlclByb2plY3RMaXN0IH0gZnJvbSAnLi4vRWxlbWVudHMgbW9kdWxlcy9jcmVhdGUtcHJvamVjdC1saXN0LmpzJ1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChldnQsIHByb2plY3RMaXN0LCBwcm9qZWN0TGlzdERPTSkge1xyXG4gICAgaWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKSBcclxuICAgICAgcHJvamVjdExpc3QuZGVsZXRlUHJvamVjdEZyb21Qcm9qZWN0TGlzdChwcm9qZWN0VG9EZWxldGUpXHJcbiAgICAgIHByb2plY3RMaXN0RE9NLnJlbW92ZUNoaWxkKGV2dC50YXJnZXQucGFyZW50RWxlbWVudClcclxuICAgICAgY29uc3QgQnV0dG9uc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKVxyXG4gICAgICBjb25zdCBhcnIgPSBBcnJheS5mcm9tKEJ1dHRvbnNMaXN0KTtcclxuICAgICAgYXJyLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgcHJvamVjdC5pZCA9IGFyci5pbmRleE9mKHByb2plY3QpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IHtkZWxldGVQcm9qZWN0fSIsImZ1bmN0aW9uIGRlbGV0ZVRvZG8oZXZ0LCB0YXJnZXRQcm9qZWN0KSB7XHJcbiAgICBpZihldnQudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0gPiAuZGVsZXRlLXByb2plY3QtYnV0dG9uJykpIHtcclxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tY29udGFpbmVyJylcclxuICAgICAgICBjb25zdCB0b0RvVG9EZWxldGUgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpXHJcbiAgICAgICAgdGFyZ2V0UHJvamVjdC5kZWxldGVUb0RvRnJvbVByb2plY3QodG9Eb1RvRGVsZXRlKVxyXG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQoZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgIGNvbnN0IHRvRG9zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKVxyXG4gICAgICAgIGNvbnN0IGFyciA9IEFycmF5LmZyb20odG9Eb3NMaXN0KTtcclxuICAgICAgICBhcnIuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICAgIHRvZG8uaWQgPSBhcnIuaW5kZXhPZih0b0Rvc0xpc3QpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtkZWxldGVUb2RvfSIsImltcG9ydCBQbHVzIGZyb20gJy4uL0ljb25zL3BsdXMtdGhpY2sucG5nJ1xyXG5cclxuY2xhc3MgQ3JlYXRlQWRkQnV0dG9uIHtcclxuICAgIGNyZWF0ZUFkZEJ1dHRvbih3aGF0VG9DcmVhdGUpIHtcclxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idXR0b24nKVxyXG4gICAgICAgIGFkZEJ1dHRvbi5pZCA9IHdoYXRUb0NyZWF0ZVxyXG5cclxuICAgICAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgYWRkSWNvbi5zcmMgPSBQbHVzXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWRkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBhZGRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKVxyXG4gICAgICAgIGFkZFRpdGxlLnRleHRDb250ZW50ID0gYEFkZCAke3doYXRUb0NyZWF0ZX1gXHJcblxyXG4gICAgICAgIGFkZEJ1dHRvbi5hcHBlbmQoYWRkSWNvbiwgYWRkVGl0bGUpXHJcblxyXG4gICAgICAgIHJldHVybiBhZGRCdXR0b25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDcmVhdGVBZGRCdXR0b259IiwiaW1wb3J0IHsgQ3JlYXRlQWRkQnV0dG9uIH0gZnJvbSAnLi9zaG93LWNvbW1vbi1jb21wb25lbnRzLURPTS5qcydcclxuaW1wb3J0IHsgbm9ybWFsaXplRGF0ZSwgZ2V0RGF0ZSB9IGZyb20gJy4uL0NvbW1vbiBmdW5jdGlvbnMgbW9kdWxlL2RhdGEtZnVuY3Rpb25zLmpzJ1xyXG5cclxuY2xhc3MgQ3JlYXRlTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICB0aGlzLm9iamVjdFRvQ3JlYXRlID0gb2JqZWN0VG9DcmVhdGVcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGhpcy5jYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVudSgpIHsgXHJcbiAgICAgICAgdGhpcy5jYXJkLmlkID0gYGFkZCR7dGhpcy5vYmplY3RUb0NyZWF0ZX1DYXJkYFxyXG4gICAgICAgIHRoaXMuY2FyZC5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZCcpXHJcblxyXG4gICAgICAgIHRoaXMuY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkSGVhZGVyJylcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGl0bGUnKVxyXG4gICAgICAgIHRoaXMuY2FyZFRpdGxlLnRleHRDb250ZW50ID0gYENyZWF0ZSAke3RoaXMub2JqZWN0VG9DcmVhdGV9YFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2VCdXR0b24nKVxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJyZ0aW1lczsnKVxyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uaWQgPSAnY2xvc2VNb2RhbCdcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkSGVhZGVyLmFwcGVuZCh0aGlzLmNhcmRUaXRsZSwgdGhpcy5jbG9zZUJ1dHRvbilcclxuXHJcbiAgICAgICAgdGhpcy5jYXJkLmFwcGVuZCh0aGlzLmNhcmRIZWFkZXIsIG5ldyBDcmVhdGVBZGRCdXR0b24oKS5jcmVhdGVBZGRCdXR0b24oYE5ldyR7dGhpcy5vYmplY3RUb0NyZWF0ZX1gKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZFxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU92ZXJsYXkoKSB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgb3ZlcmxheS5pZCA9ICdvdmVybGF5J1xyXG4gICAgICAgIHJldHVybiBvdmVybGF5XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENyZWF0ZVRvZG9NZW51IGV4dGVuZHMgQ3JlYXRlTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0VG9DcmVhdGUpIHtcclxuICAgICAgICBzdXBlcihvYmplY3RUb0NyZWF0ZSlcclxuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuZGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5TWVkaXVtUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvdy5uYW1lID0gJ3ByaW9yaXR5J1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0ubmFtZSA9ICdwcmlvcml0eSdcclxuICAgICAgICB0aGlzLnByaW9yaXR5SGlnaC5uYW1lID0gJ3ByaW9yaXR5J1xyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93LnR5cGUgPSAncmFkaW8nXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bS50eXBlID0gJ3JhZGlvJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoLnR5cGUgPSAncmFkaW8nXHJcblxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlMb3cudmFsdWUgPSAnbG93J1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0udmFsdWUgPSAnbWVkaXVtJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRvZG9NZW51KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtY2FyZC1mb3JtJylcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBgJHt0aGlzLm9iamVjdFRvQ3JlYXRlfSBUaXRsZWBcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW5wdXQtdGl0bGUnKVxyXG5cclxuICAgICAgICB0aGlzLmZvcm0uYXBwZW5kKHRoaXMudGl0bGVJbnB1dClcclxuXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlJylcclxuICAgICAgICB0aGlzLnByaW9yaXR5SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1wcmlvcml0eScpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmRhdGVJbnB1dC50eXBlID0gJ2RhdGUnXHJcbiAgICAgICAgdGhpcy5kYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1kYXRlLWlucHV0JylcclxuICAgICAgICB0aGlzLmRhdGVJbnB1dC52YWx1ZSA9IGAke2dldERhdGUoKX1gXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5kYXRlUC50ZXh0Q29udGVudCA9ICdEYXRlJ1xyXG4gICAgICAgIHRoaXMuZGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLmRhdGVQLCB0aGlzLmRhdGVJbnB1dClcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUxvd1AuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLWNhcmQtdGV4dCcpXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUhpZ2hQLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLXRleHQnKVxyXG5cclxuICAgICAgICB0aGlzLnByaW9yaXR5TG93UC50ZXh0Q29udGVudCA9ICdMb3cnXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eU1lZGl1bVAudGV4dENvbnRlbnQgPSAnTWVkaXVtJ1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHlIaWdoUC50ZXh0Q29udGVudCA9ICdIaWdoJ1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlNZWRpdW0uY2hlY2tlZCA9IHRydWVcclxuXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZCh0aGlzLnByaW9yaXR5TG93LCB0aGlzLnByaW9yaXR5TG93UCwgdGhpcy5wcmlvcml0eU1lZGl1bSwgdGhpcy5wcmlvcml0eU1lZGl1bVAsIHRoaXMucHJpb3JpdHlIaWdoLCB0aGlzLnByaW9yaXR5SGlnaFApXHJcbiAgICAgICAgdGhpcy5mb3JtLmFwcGVuZCh0aGlzLmRhdGVJbnB1dENvbnRhaW5lciwgdGhpcy5wcmlvcml0eUlucHV0Q29udGFpbmVyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1cclxuICAgIH0gICBcclxufVxyXG5cclxuY2xhc3MgQ3JlYXRlUHJvamVjdE1lbnUgZXh0ZW5kcyBDcmVhdGVNb2RhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RUb0NyZWF0ZSkge1xyXG4gICAgICAgIHN1cGVyKG9iamVjdFRvQ3JlYXRlKVxyXG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgfVxyXG4gICAgY3JlYXRlUHJvamVjdE1lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1jYXJkLWZvcm0nKVxyXG5cclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0J1xyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IGAke3RoaXMub2JqZWN0VG9DcmVhdGV9IFRpdGxlYFxyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dC10aXRsZScpXHJcblxyXG4gICAgICAgIHRoaXMuZm9ybS5hcHBlbmQodGhpcy50aXRsZUlucHV0KVxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDcmVhdGVNb2RhbCwgQ3JlYXRlVG9kb01lbnUsIENyZWF0ZVByb2plY3RNZW51fSIsImltcG9ydCBDaGVja2JveCBmcm9tICcuLi9JY29ucy9mb3JtYXQtbGlzdC1jaGVja2JveC5wbmcnXHJcbmltcG9ydCBUcmFzaCBmcm9tICcuLi9JY29ucy9kZWxldGUucG5nJ1xyXG5cclxuY2xhc3MgRGlzcGxheVByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgaWQpIHtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheVByb2plY3RET00oKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5pZCA9IHRoaXMuaWRcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgcHJvamVjdEljb24uc3JjID0gQ2hlY2tib3hcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJylcclxuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWljb24nLCAnZGVsZXRlLXByb2plY3QtYnV0dG9uJylcclxuICAgICAgICBkZWxldGVQcm9qZWN0LnNyYyA9IFRyYXNoXHJcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hcHBlbmQocHJvamVjdEljb24sIHByb2plY3RUaXRsZSwgZGVsZXRlUHJvamVjdClcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RCdXR0b25cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtEaXNwbGF5UHJvamVjdH1cclxuIiwiaW1wb3J0IHsgQ3JlYXRlQWRkQnV0dG9uIH0gZnJvbSAnLi9zaG93LWNvbW1vbi1jb21wb25lbnRzLURPTS5qcydcclxuXHJcbmNsYXNzIENyZWF0ZVByb2plY3RDb250YWluZXIge1xyXG5cclxuICAgIGNyZWF0ZXByb2plY3RDb250YWluZXIocHJvamVjdCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRpdGxlJylcclxuXHJcbiAgICAgICAgaWYgKHByb2plY3QudGl0bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9ICcnXHJcbiAgICAgICAgfSBlbHNlIHsgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZSB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWRkVG9EbyA9IG5ldyBDcmVhdGVBZGRCdXR0b25cclxuXHJcbiAgICAgICAgY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGFkZFRvRG8uY3JlYXRlQWRkQnV0dG9uKCdUb0RvJylcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIGFkZFRvRG9CdXR0b24pXHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRldG9Eb0NvbnRhaW5lcigpIHtcclxuICAgICAgICBjb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGFpbmVyJylcclxuICAgICAgICByZXR1cm4gdG9Eb0NvbnRhaW5lclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0NyZWF0ZVByb2plY3RDb250YWluZXJ9XHJcbiIsImltcG9ydCBEYXRlIGZyb20gJy4uL0ljb25zL2NhbGVuZGFyLWNsb2NrLnBuZydcclxuaW1wb3J0IFRyYXNoIGZyb20gJy4uL0ljb25zL2RlbGV0ZS5wbmcnXHJcbmltcG9ydCBDaGVja0ljb24gZnJvbSAnLi4vSWNvbnMvY2hlY2stYm9sZC5wbmcnXHJcblxyXG5jbGFzcyBEaXNwbGF5VG9EbyB7XHJcbiAgICBET00odG9kbywgaWQpIHtcclxuICAgICAgICBjb25zdCB0b0RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9Eb0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJylcclxuICAgICAgICB0b0RvSXRlbS5pZCA9IGlkXHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLXRvZG8taXRlbScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRvZG8uZG9uZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgICAgIGNoZWNrZWQuc3JjID0gQ2hlY2tJY29uXHJcbiAgICAgICAgICAgIGNoZWNrLmFwcGVuZChjaGVja2VkKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9Eb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICB0b0RvVGV4dC5jbGFzc0xpc3QuYWRkKCd0b2RvLXRleHQnKVxyXG4gICAgICAgIHRvRG9UZXh0LnRleHRDb250ZW50ID0gdG9kby50aXRsZVxyXG5cclxuICAgICAgICBjb25zdCBkYXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgZGF0ZUljb24uc3JjID0gRGF0ZVxyXG4gICAgICAgIGRhdGVJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcblxyXG4gICAgICAgIHN3aXRjaCAodG9kby5wcmlvcml0eSkge1xyXG4gICAgICAgICAgICBjYXNlICdsb3cnOiBcclxuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJvcmRlckxlZnQgPSAnMC41cmVtIHNvbGlkIGdyZWVuJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOiBcclxuICAgICAgICAgICAgICAgIHRvRG9JdGVtLnN0eWxlLmJvcmRlckxlZnQgPSAnMC41cmVtIHNvbGlkIGNyaW1zb24nXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICB0b0RvSXRlbS5zdHlsZS5ib3JkZXJMZWZ0ID0gJzAuNXJlbSBzb2xpZCB5ZWxsb3cnXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGR1ZURhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgZHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKVxyXG4gICAgICAgIGR1ZURhdGVUZXh0LnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlXHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZVRvRG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGRlbGV0ZVRvRG8uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pY29uJywgJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpXHJcbiAgICAgICAgZGVsZXRlVG9Eby5zcmMgPSBUcmFzaFxyXG5cclxuICAgICAgICB0b0RvSXRlbS5hcHBlbmQoY2hlY2ssIHRvRG9UZXh0LCBkYXRlSWNvbiwgZHVlRGF0ZVRleHQsIGRlbGV0ZVRvRG8pXHJcblxyXG4gICAgICAgIHJldHVybiB0b0RvSXRlbVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtEaXNwbGF5VG9Eb30iLCJpbXBvcnQgeyB0b2dnbGVUb2RvQ2hlY2sgfSBmcm9tIFwiLi90b2dnbGUtdG9kby1jaGVja1wiXHJcbmltcG9ydCB7IGRlbGV0ZVRvZG8gfSBmcm9tICcuL2RlbGV0ZS10b2RvLURPTSdcclxuaW1wb3J0IHsgQ3JlYXRlUHJvamVjdENvbnRhaW5lciB9IGZyb20gJy4vc2hvdy1wcm9qZWN0LWxpc3QtRE9NJ1xyXG5pbXBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfSBmcm9tICcuLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9tb2RhbC1mdW5jdGlvbnMnXHJcbmltcG9ydCB7IGFkZFRvRG9CeU5hbWUgfSBmcm9tICcuL2FkZC10b2RvLXRvRE9NJ1xyXG5pbXBvcnQgeyBEaXNwbGF5VG9EbyB9IGZyb20gJy4vc2hvdy10b2RvLURPTSdcclxuXHJcbmZ1bmN0aW9uIHNob3dUb2RvTGlzdChldnQsIG1haW4sIHVzZXJQcm9qZWN0TGlzdCkge1xyXG4gICAgaWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1idXR0b24gOm5vdCguYWRkLXByb2plY3QtYnV0dG9uKScpKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpKSB7XHJcbiAgICAgICAgICBtYWluLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNvbnRhaW5lcicpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0YXJnZXRQcm9qZWN0ID0gdXNlclByb2plY3RMaXN0LnByb2plY3RzW2V2dC50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtYnV0dG9uJykuZ2V0QXR0cmlidXRlKCdpZCcpXVxyXG4gICAgICAgIGxldCBzaG93UHJvamVjdCA9ICBuZXcgQ3JlYXRlUHJvamVjdENvbnRhaW5lcigpXHJcbiAgICAgICAgbGV0IHNob3dQcm9qZWN0Q29udGFpbmVyID0gc2hvd1Byb2plY3QuY3JlYXRlcHJvamVjdENvbnRhaW5lcih0YXJnZXRQcm9qZWN0KVxyXG4gICAgICAgIGxldCBzaG93VG9Eb3MgPSBzaG93UHJvamVjdC5jcmVhdGV0b0RvQ29udGFpbmVyKHRhcmdldFByb2plY3QpXHJcbiAgICAgICAgbWFpbi5hcHBlbmQoc2hvd1Byb2plY3RDb250YWluZXIpXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgdGFyZ2V0UHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IHNob3d0b2RvZXhhbXBsZSA9IG5ldyBEaXNwbGF5VG9EbygpLkRPTSh0YXJnZXRQcm9qZWN0LnRvZG9zW2ldLCBpKVxyXG4gICAgICAgICAgc2hvd1RvRG9zLmFwcGVuZChzaG93dG9kb2V4YW1wbGUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dQcm9qZWN0Q29udGFpbmVyLmFwcGVuZChzaG93VG9Eb3MpXHJcbiAgICBcclxuICAgIC8vdG9nZ2xlIGNoZWNrXHJcbiAgICAgICAgc2hvd1Byb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB0b2dnbGVUb2RvQ2hlY2soZXZ0LCB0YXJnZXRQcm9qZWN0KSlcclxuICAgIC8vZGVsZXRlIHRvZG9cclxuICAgICAgICBzaG93UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IGRlbGV0ZVRvZG8oZXZ0LCB0YXJnZXRQcm9qZWN0KSlcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IG9wZW5BZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RvRG8nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIG9wZW5BZGRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9Eb0NhcmQnKVxyXG4gICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxyXG4gICAgICAgICAgYWRkVG9Eb0J5TmFtZShtb2RhbCwgdGFyZ2V0UHJvamVjdCkgXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHtzaG93VG9kb0xpc3R9IiwiaW1wb3J0IENoZWNrIGZyb20gJy4uL0ljb25zL2NoZWNrLWJvbGQucG5nJ1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlVG9kb0NoZWNrKGV2dCwgdGFyZ2V0UHJvamVjdCkge1xyXG4gICAgaWYoZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2hlY2stdG9kby1pdGVtJykpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRUb0RvID0gdGFyZ2V0UHJvamVjdC50b2Rvc1tldnQudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKS5nZXRBdHRyaWJ1dGUoJ2lkJyldXHJcbiAgICAgICAgdGFyZ2V0VG9Eby5jaGFuZ2VEb25lKClcclxuICAgICAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldFRvRG8uZG9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaWNvbicpXHJcbiAgICAgICAgICAgIGNoZWNrZWQuc3JjID0gQ2hlY2tcclxuICAgICAgICAgICAgZXZ0LnRhcmdldC5hcHBlbmQoY2hlY2tlZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBldnQudGFyZ2V0LnJlbW92ZShjaGVja2VkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRhcmdldFByb2plY3QpXHJcbn1cclxuXHJcbmV4cG9ydCB7dG9nZ2xlVG9kb0NoZWNrfSIsImNsYXNzIFVzZXJQcm9qZWN0TGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdFRvUHJvamVjdExpc3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3RGcm9tUHJvamVjdExpc3QocHJvamVjdEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge1VzZXJQcm9qZWN0TGlzdH0iLCJjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yICh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvRG9Ub1Byb2plY3QodG9Ebykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b0RvKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvRG9Gcm9tUHJvamVjdCh0b0RvSW5kZXgpIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnNwbGljZSh0b0RvSW5kZXgsIDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvamVjdH0iLCJjbGFzcyBUb0RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcclxuICAgIH1cclxuICAgIGNoYW5nZURvbmUoKSB7XHJcbiAgICAgICAgdGhpcy5kb25lID0gIXRoaXMuZG9uZVxyXG4gICAgfVxyXG4gICAgZ2V0RG9uZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb25lXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7VG9Eb30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IENvZyBmcm9tICcuL0ljb25zL2NvZy5wbmcnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vSWNvbnMvbWVudS5wbmcnXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5cclxuaW1wb3J0IHsgVXNlclByb2plY3RMaXN0IH0gZnJvbSAnLi9FbGVtZW50cyBtb2R1bGVzL2NyZWF0ZS1wcm9qZWN0LWxpc3QuanMnXHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXByb2plY3QuanMnXHJcbmltcG9ydCB7IFRvRG8gfSBmcm9tICcuL0VsZW1lbnRzIG1vZHVsZXMvY3JlYXRlLXRvZG8nXHJcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJy4vQ29tbW9uIGZ1bmN0aW9ucyBtb2R1bGUvbW9kYWwtZnVuY3Rpb25zLmpzJ1xyXG5pbXBvcnQgeyBDcmVhdGVNb2RhbCwgQ3JlYXRlVG9kb01lbnUsIENyZWF0ZVByb2plY3RNZW51fSBmcm9tICcuL0RPTSBtb2R1bGVzL3Nob3ctbW9kYWxzLURPTSdcclxuaW1wb3J0IHsgRGlzcGxheVByb2plY3QgfSBmcm9tICcuL0RPTSBtb2R1bGVzL3Nob3ctcHJvamVjdC1ET00nXHJcbmltcG9ydCB7IENyZWF0ZUFkZEJ1dHRvbiB9IGZyb20gJy4vRE9NIG1vZHVsZXMvc2hvdy1jb21tb24tY29tcG9uZW50cy1ET00nXHJcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL0RPTSBtb2R1bGVzL2RlbGV0ZS1wcm9qZWN0LURPTSdcclxuaW1wb3J0IHsgc2hvd1RvZG9MaXN0IH0gZnJvbSAnLi9ET00gbW9kdWxlcy9zaG93LXRvZG8tbGlzdC1ET00nXHJcbmltcG9ydCB7IGFkZFByb2plY3RCeU5hbWUgfSBmcm9tICcuL0RPTSBtb2R1bGVzL2FkZC1wcm9qZWN0LXRvRE9NJ1xyXG5pbXBvcnQgeyBhZGRUb0RvQnlOYW1lIH0gZnJvbSAnLi9ET00gbW9kdWxlcy9hZGQtdG9kby10b0RPTSdcclxuaW1wb3J0IHsgdG9nZ2xlVG9kb0NoZWNrIH0gZnJvbSAnLi9ET00gbW9kdWxlcy90b2dnbGUtdG9kby1jaGVjaydcclxuaW1wb3J0IHsgZGVsZXRlVG9kbyB9IGZyb20gJy4vRE9NIG1vZHVsZXMvZGVsZXRlLXRvZG8tRE9NJ1xyXG5pbXBvcnQgeyByZWFkRGF0YUZyb21KU09OIH0gZnJvbSAnLi9Db21tb24gZnVuY3Rpb25zIG1vZHVsZS9yZWFkLWRhdGEtZnJvbS1sb2NhbFN0b3JhZ2UnXHJcblxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpXHJcblxyXG5ib2R5LmFwcGVuZCh3cmFwcGVyKVxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxud3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpXHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXHJcblxyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG5jb25zdCBtZW51QnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbm1lbnVCdG5JY29uLnNyYyA9IE1lbnVcclxubWVudUJ0bkljb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWljb24nKVxyXG5cclxubWVudUJ0bi5hcHBlbmQobWVudUJ0bkljb24pXHJcbnRpdGxlLnRleHRDb250ZW50ID0gJ1RvRG9MaXN0J1xyXG5cclxuY29uc3Qgc2V0dGluZ3NCdG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuc2V0dGluZ3NCdG5JY29uLnNyYyA9IENvZ1xyXG5zZXR0aW5nc0J0bkljb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWljb24nKVxyXG5zZXR0aW5nc0J0bi5hcHBlbmQoc2V0dGluZ3NCdG5JY29uKVxyXG5cclxuaGVhZGVyLmFwcGVuZChtZW51QnRuLCB0aXRsZSwgc2V0dGluZ3NCdG4pXHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnByb2plY3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpXHJcbmNvbnN0IHByb2plY3RMaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbnByb2plY3RMaXN0VGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnXHJcbnByb2plY3RMaXN0LmFwcGVuZChwcm9qZWN0TGlzdFRpdGxlKVxyXG5cclxubWFpbi5hcHBlbmQocHJvamVjdExpc3QpXHJcblxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxyXG5jb25zdCBsZWdhbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5sZWdhbEluZm8uY2xhc3NMaXN0LmFkZCgnbGVnYWwtaW5mbycpXHJcbmNvbnN0IHNpdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3QgY29weVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcclxuc2l0ZU5hbWUudGV4dENvbnRlbnQgPSBgSmlqYVJhcmUgSW5jLiwgMjAyMmBcclxuY29weVJpZ2h0LnRleHRDb250ZW50ID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQnXHJcbmxlZ2FsSW5mby5hcHBlbmQoc2l0ZU5hbWUsIGNvcHlSaWdodClcclxuZm9vdGVyLmFwcGVuZENoaWxkKGxlZ2FsSW5mbylcclxud3JhcHBlci5hcHBlbmQobWFpbiwgZm9vdGVyKVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG59KVxyXG5cclxuY29uc3QgdXNlclByb2plY3RMaXN0ID0gbmV3IFVzZXJQcm9qZWN0TGlzdCgpXHJcblxyXG5yZWFkRGF0YUZyb21KU09OKHVzZXJQcm9qZWN0TGlzdCwgcHJvamVjdExpc3QpXHJcblxyXG5sZXQgYWRkUHJvamVjdEJ1dHRvbiA9IG5ldyBDcmVhdGVBZGRCdXR0b24oKVxyXG5wcm9qZWN0TGlzdC5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbi5jcmVhdGVBZGRCdXR0b24oJ1Byb2plY3QnKSlcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UudG9kb2xpc3QgPSBKU09OLnN0cmluZ2lmeSh1c2VyUHJvamVjdExpc3QpXHJcbn0pXHJcblxyXG4vLy9hZGQgcHJvamVjdCBhbmQgdG9kbyBtb2RhbFxyXG5sZXQgYWRkUHJvamVjdCA9IG5ldyBDcmVhdGVQcm9qZWN0TWVudSgnUHJvamVjdCcpXHJcbmxldCBjYXJkID0gYWRkUHJvamVjdC5jcmVhdGVNZW51KClcclxubGV0IGlucHV0ID0gYWRkUHJvamVjdC5jcmVhdGVQcm9qZWN0TWVudSgpXHJcblxyXG5jYXJkLmFwcGVuZChpbnB1dClcclxuXHJcbmNvbnN0IG92ZXJsYXkgPSBhZGRQcm9qZWN0LmNyZWF0ZU92ZXJsYXkoKVxyXG5ib2R5LmFwcGVuZChvdmVybGF5KVxyXG5cclxubGV0IGFkZFRvRG8gPSBuZXcgQ3JlYXRlVG9kb01lbnUoJ1RvRG8nKVxyXG5sZXQgY2FyZFRvRG8gPSBhZGRUb0RvLmNyZWF0ZU1lbnUoKVxyXG5sZXQgaW5wdXRUb0RvID0gYWRkVG9Eby5jcmVhdGVUb2RvTWVudSgpXHJcbmNhcmRUb0RvLmFwcGVuZChpbnB1dFRvRG8pXHJcblxyXG53cmFwcGVyLmFwcGVuZChjYXJkKVxyXG53cmFwcGVyLmFwcGVuZChjYXJkVG9EbylcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3Qgb3BlbkFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUHJvamVjdCcpXHJcbmNvbnN0IG9wZW5BZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RvRG8nKVxyXG5jb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjbG9zZU1vZGFsJylcclxuXHJcbm9wZW5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdENhcmQnKVxyXG4gICAgb3Blbk1vZGFsKG1vZGFsKVxyXG4gICAgYWRkUHJvamVjdEJ5TmFtZShtb2RhbCwgdXNlclByb2plY3RMaXN0LCBwcm9qZWN0TGlzdCkgXHJcbn0pXHJcblxyXG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IGRlbGV0ZVByb2plY3QoZXZ0LCB1c2VyUHJvamVjdExpc3QsIHByb2plY3RMaXN0KSkgXHJcblxyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGUtY2FyZC5hY3RpdmUnKVxyXG4gIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IHtcclxuICAgIGNsb3NlTW9kYWwobW9kYWwpXHJcbiAgfSlcclxufSlcclxuXHJcbmNsb3NlTW9kYWxCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGJ1dHRvbi5jbG9zZXN0KCcuY3JlYXRlLWNhcmQnKVxyXG4gICAgY2xvc2VNb2RhbChtb2RhbClcclxuICB9KVxyXG59KVxyXG5cclxucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldnQpID0+IHNob3dUb2RvTGlzdChldnQsIG1haW4sIHVzZXJQcm9qZWN0TGlzdCkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9