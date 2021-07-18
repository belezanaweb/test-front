/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/confirmacao";
exports.ids = ["pages/confirmacao"];
exports.modules = {

/***/ "./src/components/Heading/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Heading/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/Heading/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/crfeitoza/\\xC1rea de Trabalho/test-front/src/components/Heading/index.tsx\";\n\n\nconst Heading = ({\n  children\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading),\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Heading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvSGVhZGluZy9pbmRleC50c3g/OTg4MiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiY2hpbGRyZW4iLCJzdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBLE1BQU1BLE9BQVcsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUVsQyxzQkFBTztBQUFJLGFBQVMsRUFBRUMsbUVBQWY7QUFBQSxjQUErQkQ7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0gsQ0FIRDs7QUFLQSwrREFBZUQsT0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcblxuY29uc3QgSGVhZGluZzogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICByZXR1cm4gPGgyIGNsYXNzTmFtZT17c3R5bGUuaGVhZGluZ30+e2NoaWxkcmVufTwvaDI+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Heading/index.tsx\n");

/***/ }),

/***/ "./src/components/Shelf/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Shelf/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/Shelf/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Heading */ \"./src/components/Heading/index.tsx\");\n/* harmony import */ var _helpers_precify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/precify */ \"./src/helpers/precify.ts\");\n\n\nvar _jsxFileName = \"/home/crfeitoza/\\xC1rea de Trabalho/test-front/src/components/Shelf/index.tsx\";\n\n\n\n\n\n\nconst Shelf = ({\n  items\n}) => {\n  const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().asPath;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Heading__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: \"Produtos\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().list),\n        \"data-testid\": \"product-shelf\",\n        children: items.map(({\n          product\n        }) => {\n          const {\n            sku,\n            name,\n            imageObjects,\n            priceSpecification\n          } = product;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().productImage),\n              src: imageObjects[0].small,\n              loading: \"lazy\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 33\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().productName),\n              children: name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 33\n            }, undefined), route == '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().productPrice),\n              children: (0,_helpers_precify__WEBPACK_IMPORTED_MODULE_4__.currency)(priceSpecification.price)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 53\n            }, undefined)]\n          }, sku, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 37\n          }, undefined);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Shelf));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvU2hlbGYvaW5kZXgudHN4PzZjY2EiXSwibmFtZXMiOlsiU2hlbGYiLCJpdGVtcyIsInJvdXRlIiwidXNlUm91dGVyIiwiYXNQYXRoIiwic3R5bGUiLCJtYXAiLCJwcm9kdWN0Iiwic2t1IiwibmFtZSIsImltYWdlT2JqZWN0cyIsInByaWNlU3BlY2lmaWNhdGlvbiIsInNtYWxsIiwiY3VycmVuY3kiLCJwcmljZSIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUEsS0FBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW9CO0FBQ3hDLFFBQU1DLEtBQUssR0FBR0Msc0RBQVMsR0FBR0MsTUFBMUI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUyxlQUFTLEVBQUVDLHFFQUFwQjtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBRUEsZ0VBQWY7QUFBMkIsdUJBQVksZUFBdkM7QUFBQSxrQkFFUUosS0FBSyxDQUFDSyxHQUFOLENBQVUsQ0FBQztBQUFFQztBQUFGLFNBQUQsS0FBc0I7QUFDNUIsZ0JBQU07QUFBRUMsZUFBRjtBQUFPQyxnQkFBUDtBQUFhQyx3QkFBYjtBQUEyQkM7QUFBM0IsY0FBa0RKLE9BQXhEO0FBRUEsOEJBQVE7QUFBSSxxQkFBUyxFQUFFRixnRUFBZjtBQUFBLG9DQUNKO0FBQUssdUJBQVMsRUFBRUEsd0VBQWhCO0FBQW9DLGlCQUFHLEVBQUVLLFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZ0JFLEtBQXpEO0FBQWdFLHFCQUFPLEVBQUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESSxlQUVKO0FBQUcsdUJBQVMsRUFBRVAsdUVBQWQ7QUFBQSx3QkFBa0NJO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkksRUFJQVAsS0FBSyxJQUFJLEdBQVQsaUJBQWdCO0FBQUcsdUJBQVMsRUFBRUcsd0VBQWQ7QUFBQSx3QkFBb0NRLDBEQUFRLENBQUNGLGtCQUFrQixDQUFDRyxLQUFwQjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpoQjtBQUFBLGFBQWdDTixHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFSO0FBT0gsU0FWRDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREo7QUF1QkgsQ0ExQkQ7O0FBNEJBLDRFQUFlTyxpREFBQSxDQUFXZixLQUFYLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaGVsZi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcbmltcG9ydCBIZWFkaW5nIGZyb20gJy4uL0hlYWRpbmcnXG5pbXBvcnQgeyBjdXJyZW5jeSB9IGZyb20gJy4uLy4uL2hlbHBlcnMvcHJlY2lmeSc7XG5cblxuY29uc3QgU2hlbGY6IFJlYWN0LkZDID0gKHsgaXRlbXMgfTogYW55KSA9PiB7XG4gICAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKS5hc1BhdGhcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGluZz5Qcm9kdXRvczwvSGVhZGluZz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZS5saXN0fSBkYXRhLXRlc3RpZD1cInByb2R1Y3Qtc2hlbGZcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKCh7IHByb2R1Y3QgfTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBza3UsIG5hbWUsIGltYWdlT2JqZWN0cywgcHJpY2VTcGVjaWZpY2F0aW9uIH0gPSBwcm9kdWN0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXtzdHlsZS5pdGVtfSBrZXk9e3NrdX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5wcm9kdWN0SW1hZ2V9IHNyYz17aW1hZ2VPYmplY3RzWzBdLnNtYWxsfSBsb2FkaW5nPVwibGF6eVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucHJvZHVjdE5hbWV9PntuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgPT0gJy8nICYmIDxwIGNsYXNzTmFtZT17c3R5bGUucHJvZHVjdFByaWNlfSA+e2N1cnJlbmN5KHByaWNlU3BlY2lmaWNhdGlvbi5wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNoZWxmKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Shelf/index.tsx\n");

/***/ }),

/***/ "./src/constants/cart.ts":
/*!*******************************!*\
  !*** ./src/constants/cart.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userCart\": function() { return /* binding */ userCart; }\n/* harmony export */ });\nconst userCart = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10ZXN0Ly4vc3JjL2NvbnN0YW50cy9jYXJ0LnRzPzZjNmUiXSwibmFtZXMiOlsidXNlckNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxRQUFRLEdBQUcsaURBQWpCIiwiZmlsZSI6Ii4vc3JjL2NvbnN0YW50cy9jYXJ0LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHVzZXJDYXJ0ID0gJ2h0dHA6Ly93d3cubW9ja3kuaW8vdjIvNWIxNWM0OTIzMTAwMDA0YTAwNmYzYzA3JyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/cart.ts\n");

/***/ }),

/***/ "./src/helpers/precify.ts":
/*!********************************!*\
  !*** ./src/helpers/precify.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currency\": function() { return /* binding */ currency; }\n/* harmony export */ });\nconst currency = price => {\n  return price.toLocaleString('pt-BR', {\n    style: 'currency',\n    currency: 'BRL'\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10ZXN0Ly4vc3JjL2hlbHBlcnMvcHJlY2lmeS50cz84NThlIl0sIm5hbWVzIjpbImN1cnJlbmN5IiwicHJpY2UiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFJQyxLQUFELElBQW1CO0FBQ3ZDLFNBQU9BLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixPQUFyQixFQUE4QjtBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkgsWUFBUSxFQUFFO0FBQS9CLEdBQTlCLENBQVA7QUFDSCxDQUZNIiwiZmlsZSI6Ii4vc3JjL2hlbHBlcnMvcHJlY2lmeS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjdXJyZW5jeSA9IChwcmljZTogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHByaWNlLnRvTG9jYWxlU3RyaW5nKCdwdC1CUicsIHsgc3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnQlJMJyB9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/helpers/precify.ts\n");

/***/ }),

/***/ "./src/pages/confirmacao.tsx":
/*!***********************************!*\
  !*** ./src/pages/confirmacao.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Shelf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Shelf */ \"./src/components/Shelf/index.tsx\");\n/* harmony import */ var _constants_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/cart */ \"./src/constants/cart.ts\");\n\n\nvar _jsxFileName = \"/home/crfeitoza/\\xC1rea de Trabalho/test-front/src/pages/confirmacao.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst getStaticProps = async () => {\n  const res = await fetch(_constants_cart__WEBPACK_IMPORTED_MODULE_4__.userCart);\n  const data = await res.json();\n  return {\n    props: {\n      cart: data\n    }\n  };\n};\nfunction Cart({\n  cart\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Confirma\\xE7\\xE3o | Loja\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Shelf__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({}, cart), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10ZXN0Ly4vc3JjL3BhZ2VzL2NvbmZpcm1hY2FvLnRzeD9kOGUyIl0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJ1c2VyQ2FydCIsImRhdGEiLCJqc29uIiwicHJvcHMiLCJjYXJ0IiwiQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGNBQWMsR0FBRyxZQUFZO0FBQ3RDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNDLHFEQUFELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1ILEdBQUcsQ0FBQ0ksSUFBSixFQUFuQjtBQUVBLFNBQU87QUFDSEMsU0FBSyxFQUFFO0FBQUVDLFVBQUksRUFBRUg7QUFBUjtBQURKLEdBQVA7QUFHSCxDQVBNO0FBU1EsU0FBU0ksSUFBVCxDQUFjO0FBQUVEO0FBQUYsQ0FBZCxFQUE2QjtBQUN4QyxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSw4REFBQyxzREFBRCxvQkFBV0EsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQSxrQkFESjtBQVFIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbmZpcm1hY2FvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTaGVsZiBmcm9tICcuLi9jb21wb25lbnRzL1NoZWxmJ1xuaW1wb3J0IHsgdXNlckNhcnQgfSBmcm9tICcuLi9jb25zdGFudHMvY2FydCdcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVzZXJDYXJ0KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBjYXJ0OiBkYXRhIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoeyBjYXJ0IH06IGFueSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q29uZmlybWHDp8OjbyB8IExvamE8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFNoZWxmIHsuLi5jYXJ0fSAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/confirmacao.tsx\n");

/***/ }),

/***/ "./src/components/Heading/style.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Heading/style.module.scss ***!
  \**************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"heading\": \"style_heading__3DO1i\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvSGVhZGluZy9zdHlsZS5tb2R1bGUuc2Nzcz8zOTQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGluZy9zdHlsZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRpbmdcIjogXCJzdHlsZV9oZWFkaW5nX18zRE8xaVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Heading/style.module.scss\n");

/***/ }),

/***/ "./src/components/Shelf/style.module.scss":
/*!************************************************!*\
  !*** ./src/components/Shelf/style.module.scss ***!
  \************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"style_container__Ml4ml\",\n\t\"list\": \"style_list__3dkpr\",\n\t\"item\": \"style_item__n-NPi\",\n\t\"productImage\": \"style_productImage__1EWJg\",\n\t\"productName\": \"style_productName__2lZVG\",\n\t\"productPrice\": \"style_productPrice__2rEcD\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC10ZXN0Ly4vc3JjL2NvbXBvbmVudHMvU2hlbGYvc3R5bGUubW9kdWxlLnNjc3M/NTBiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaGVsZi9zdHlsZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlX2NvbnRhaW5lcl9fTWw0bWxcIixcblx0XCJsaXN0XCI6IFwic3R5bGVfbGlzdF9fM2RrcHJcIixcblx0XCJpdGVtXCI6IFwic3R5bGVfaXRlbV9fbi1OUGlcIixcblx0XCJwcm9kdWN0SW1hZ2VcIjogXCJzdHlsZV9wcm9kdWN0SW1hZ2VfXzFFV0pnXCIsXG5cdFwicHJvZHVjdE5hbWVcIjogXCJzdHlsZV9wcm9kdWN0TmFtZV9fMmxaVkdcIixcblx0XCJwcm9kdWN0UHJpY2VcIjogXCJzdHlsZV9wcm9kdWN0UHJpY2VfXzJyRWNEXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Shelf/style.module.scss\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/confirmacao.tsx"));
module.exports = __webpack_exports__;

})();