/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pagamento",{

/***/ "./src/pages/pagamento.tsx":
/*!*********************************!*\
  !*** ./src/pages/pagamento.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Cart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_crfeitoza_rea_de_Trabalho_test_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_BillingContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/BillingContext */ \"./src/contexts/BillingContext.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./src/components/Button/index.tsx\");\n/* harmony import */ var _components_CardForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CardForm */ \"./src/components/CardForm/index.tsx\");\n/* harmony import */ var _components_Totals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Totals */ \"./src/components/Totals/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/crfeitoza/\\xC1rea de Trabalho/test-front/src/pages/pagamento.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_crfeitoza_rea_de_Trabalho_test_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Cart({\n  cart\n}) {\n  _s();\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const {\n    cardApproved\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_BillingContext__WEBPACK_IMPORTED_MODULE_5__.BillingContext);\n\n  function handleClick() {\n    if (!cardApproved) return;\n    router.push('/confirmacao');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Pagamento | Loja\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardForm__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Totals__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread({}, cart), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__.default, {\n      handleClick: handleClick,\n      allow: cardApproved,\n      children: \"finalizar o pedido\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Cart, \"VfV/6/zcJkTrvYQc5qjRGt+fQds=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Cart;\n\nvar _c;\n\n$RefreshReg$(_c, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BhZ2FtZW50by50c3g/NDU3OCJdLCJuYW1lcyI6WyJDYXJ0IiwiY2FydCIsInJvdXRlciIsInVzZVJvdXRlciIsImNhcmRBcHByb3ZlZCIsInVzZUNvbnRleHQiLCJCaWxsaW5nQ29udGV4dCIsImhhbmRsZUNsaWNrIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUE2QjtBQUFBOztBQUN4QyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQW1CQyxpREFBVSxDQUFDQyxvRUFBRCxDQUFuQzs7QUFFQSxXQUFTQyxXQUFULEdBQXVCO0FBQ25CLFFBQUksQ0FBQ0gsWUFBTCxFQUFtQjtBQUNuQkYsVUFBTSxDQUFDTSxJQUFQLENBQVksY0FBWjtBQUNIOztBQUNELHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJLDhEQUFDLHVEQUFELG9CQUFZUCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JLDhEQUFDLHVEQUFEO0FBQVEsaUJBQVcsRUFBRU0sV0FBckI7QUFBa0MsV0FBSyxFQUFFSCxZQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUEsa0JBREo7QUFVSDs7R0FsQnVCSixJO1VBQ0xHLGtEOzs7S0FES0gsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wYWdhbWVudG8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlckNhcnQgfSBmcm9tICcuLi9jb25zdGFudHMvY2FydCdcbmltcG9ydCB7IEJpbGxpbmdDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQmlsbGluZ0NvbnRleHQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcbmltcG9ydCBDYXJkRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmRGb3JtJ1xuaW1wb3J0IFRvdGFscyBmcm9tICcuLi9jb21wb25lbnRzL1RvdGFscydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCh7IGNhcnQgfTogYW55KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGNhcmRBcHByb3ZlZCB9ID0gdXNlQ29udGV4dChCaWxsaW5nQ29udGV4dClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBpZiAoIWNhcmRBcHByb3ZlZCkgcmV0dXJuXG4gICAgICAgIHJvdXRlci5wdXNoKCcvY29uZmlybWFjYW8nKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlBhZ2FtZW50byB8IExvamE8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPENhcmRGb3JtIC8+XG4gICAgICAgICAgICA8VG90YWxzIHsuLi5jYXJ0fSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBoYW5kbGVDbGljaz17aGFuZGxlQ2xpY2t9IGFsbG93PXtjYXJkQXBwcm92ZWR9PmZpbmFsaXphciBvIHBlZGlkbzwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVzZXJDYXJ0KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBjYXJ0OiBkYXRhIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/pagamento.tsx\n");

/***/ })

});