/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.pug":
/*!*******************!*\
  !*** ./index.pug ***!
  \*******************/
/***/ ((module) => {

eval("module.exports='<!DOCTYPE html><html> <head> <title>WebPack</title><link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Trispace:wght@100&amp;display=swap\"><link rel=\"stylesheet\" href=\"style.css\"></head><body> <div id=\"app\"></div><div id=\"total\"></div><br><h1>Всё работает</h1><script src=\"./bundle.js\"></script></body></html>';\n\n//# sourceURL=webpack://test-webpack/./index.pug?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-webpack/./style.scss?");

/***/ }),

/***/ "./src/data_module.js":
/*!****************************!*\
  !*** ./src/data_module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n    {\r\n        name: \"Котлета\",\r\n        price: 1290\r\n    },\r\n    {\r\n        name: \"Курица\",\r\n        price: 3500\r\n    },\r\n    {\r\n        name: \"Помидоры\",\r\n        price: 3990\r\n    }\r\n]);\r\n\n\n//# sourceURL=webpack://test-webpack/./src/data_module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_module */ \"./src/data_module.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.pug */ \"./index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.scss */ \"./style.scss\");\n// импортируем список продуктов из модуля\r\n\r\n// импортирует полезные функции\r\n\r\n\r\n\r\n\r\nlet totalPrice = 0;\r\nconst cart = {};\r\nfor (let product of _data_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n    cart[product.name] = { ...product, count: 0 };\r\n}\r\n// после цикла cart будет содержать:\r\n// {\r\n//   \"Котлета\": {\r\n//     name: \"Котлета\",\r\n//     price: 1290,\r\n//     count: 0\r\n//   },\r\n//   ...\r\n// }\r\n// при чем оригинальный объект продукта останется прежним\r\n\r\nfunction renderItem({ name, price, count }) {\r\n    // добавляет на страницу верстку для одного продукта\r\n\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addHtml)(`\r\n    <p>\r\n      ${name} [ ${price} <i class=\"bi bi-cash\"></i> ] - ${count} шт\r\n      <button class=\"addTocart\" data-name=\"${name}\" data-price=\"${price}\">\r\n        Добавить\r\n      </button>\r\n    </p>\r\n  `);\r\n}\r\n\r\nfunction renderPage() {\r\n    // создает верстку страницы\r\n\r\n    // очищаем все\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.clearHtml)();\r\n    for (let product of _data_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n        // добавляем по одному продукты из списка\r\n        renderItem(cart[product.name]);\r\n    }\r\n    // добавляем в конце итог\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addHtml)(`Итог: ${totalPrice} руб`);\r\n\r\n    // выбирает все кнопки по классу addTocart\r\n    document.querySelectorAll(\".addTocart\").forEach((el) => {\r\n        // навешиваем им событие на \"клик\"\r\n        el.addEventListener(\"click\", (event) => {\r\n            // ЭТА ФУНКЦИЯ ВЫЗЫВАЕТСЯ ТОЛЬКО ПРИ КЛИКЕ\r\n\r\n            // достаем из атрибутов значение свойств\r\n            let name = event.target.getAttribute(\"data-name\");\r\n            let price = +event.target.getAttribute(\"data-price\");\r\n            // увеличиваем итог\r\n            totalPrice += price;\r\n            // увеличиваем количество в тележке\r\n            cart[name].count += 1;\r\n            // перерисовываем страницу\r\n            renderPage();\r\n        });\r\n    });\r\n}\r\n\r\nrenderPage();\r\n\n\n//# sourceURL=webpack://test-webpack/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHtml\": () => (/* binding */ addHtml),\n/* harmony export */   \"clearHtml\": () => (/* binding */ clearHtml)\n/* harmony export */ });\nfunction clearHtml() {\r\n    // просто очищает содержимое страницы\r\n    document.getElementById(\"app\").innerHTML = \"\";\r\n}\r\n\r\nfunction addHtml(content) {\r\n    // добавляет к содержимому страницы content\r\n    document.getElementById(\"app\").innerHTML += content;\r\n}\r\n\n\n//# sourceURL=webpack://test-webpack/./src/utils.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;