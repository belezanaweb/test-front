/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Button/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_BillingContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/BillingContext */ \"./src/contexts/BillingContext.tsx\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"./src/components/Button/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/crfeitoza/\\xC1rea de Trabalho/test-front/src/components/Button/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Button = ({\n  to,\n  children\n}) => {\n  _s();\n\n  var _useRouter;\n\n  const path = (_useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)()) === null || _useRouter === void 0 ? void 0 : _useRouter.asPath;\n  const {\n    cardApproved\n  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_contexts_BillingContext__WEBPACK_IMPORTED_MODULE_4__.BillingContext);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),\n    disabled: path == \"/pagamento\" && !cardApproved ? true : false,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: to,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Button, \"M3uE5aV6ZktSCdWFvJxrXdpOaEc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzeD8wNzdhIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInRvIiwiY2hpbGRyZW4iLCJwYXRoIiwidXNlUm91dGVyIiwiYXNQYXRoIiwiY2FyZEFwcHJvdmVkIiwidXNlQ29udGV4dCIsIkJpbGxpbmdDb250ZXh0Iiwic3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUMsSUFBRjtBQUFNQztBQUFOLENBQUQsS0FBMkI7QUFBQTs7QUFBQTs7QUFDeEMsUUFBTUMsSUFBSSxpQkFBR0Msc0RBQVMsRUFBWiwrQ0FBRyxXQUFhQyxNQUExQjtBQUVBLFFBQU07QUFBRUM7QUFBRixNQUFtQkMsaURBQVUsQ0FBQ0Msb0VBQUQsQ0FBbkM7QUFFQSxzQkFDRTtBQUFRLGFBQVMsRUFBRUMsa0VBQW5CO0FBQWlDLFlBQVEsRUFBRU4sSUFBSSxJQUFJLFlBQVIsSUFBd0IsQ0FBQ0csWUFBekIsR0FBd0MsSUFBeEMsR0FBK0MsS0FBMUY7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRUwsRUFBWjtBQUFBLGdCQUFpQkM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBVkQ7O0dBQU1GLE07VUFDU0ksa0Q7OztLQURUSixNO0FBWU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJpbGxpbmdDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvQmlsbGluZ0NvbnRleHQnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7IHRvLCBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgY29uc3QgcGF0aCA9IHVzZVJvdXRlcigpPy5hc1BhdGhcblxuICBjb25zdCB7IGNhcmRBcHByb3ZlZCB9ID0gdXNlQ29udGV4dChCaWxsaW5nQ29udGV4dClcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IGRpc2FibGVkPXtwYXRoID09IFwiL3BhZ2FtZW50b1wiICYmICFjYXJkQXBwcm92ZWQgPyB0cnVlIDogZmFsc2V9PlxuICAgICAgPExpbmsgaHJlZj17dG99PntjaGlsZHJlbn08L0xpbms+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Button/index.tsx\n");

/***/ })

});