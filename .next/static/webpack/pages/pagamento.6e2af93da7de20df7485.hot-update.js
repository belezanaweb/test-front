/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pagamento",{

/***/ "./src/hooks/useForm.ts":
/*!******************************!*\
  !*** ./src/hooks/useForm.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/mask */ \"./src/helpers/mask.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\nconst inputTypes = {\n  cardNumber: {\n    min: 19,\n    max: 19,\n    mask: '0000-0000-0000-0000',\n    message: 'Cartão Inválido',\n    regex: /[^\\d]+/gi\n  },\n  cardName: {\n    min: 5,\n    max: 50,\n    mask: '0',\n    message: 'Nome Inválido',\n    regex: /[^[a-zA-Z\\s]+/gi\n  },\n  expire: {\n    min: 7,\n    max: 7,\n    mask: '00/0000',\n    message: 'Validade Incorreta',\n    regex: /[^\\d]+/gi,\n    valid: /^(0[1-9]|1[0-2])\\/?([0-9]{2})$/\n  },\n  cvv: {\n    min: 3,\n    max: 3,\n    mask: '000',\n    message: 'Código Inválido',\n    regex: /[^\\d]+/gi\n  }\n};\n\nconst useForm = type => {\n  _s();\n\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);\n  const [valid, setValid] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n\n  function invalid() {\n    var _inputTypes$type;\n\n    if ((_inputTypes$type = inputTypes[type]) !== null && _inputTypes$type !== void 0 && _inputTypes$type.valid) {\n      console.log('valid', value.replace('/', '').match(inputTypes[type].valid)); // return value.match(inputTypes[type].valid)\n    }\n\n    return value.length < inputTypes[type].min || value.length > inputTypes[type].max ? true : false;\n  }\n\n  function onKeyUp(event) {\n    (0,_helpers_mask__WEBPACK_IMPORTED_MODULE_1__.default)(event.target, inputTypes[type].mask, event, inputTypes[type].regex);\n    setValue(event.target.value);\n  }\n\n  function warn() {\n    invalid() ? setError(inputTypes[type].message) : setError(null);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    invalid() ? setValid(false) : setValid(true);\n  }, [value]);\n  return {\n    value,\n    setValue,\n    valid,\n    error,\n    onKeyUp,\n    onFocus: () => setError(null),\n    onBlur: () => warn()\n  };\n};\n\n_s(useForm, \"uNwjTluuwHlQEbvqiIyqDoriqPA=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUZvcm0udHM/NjMyOSJdLCJuYW1lcyI6WyJpbnB1dFR5cGVzIiwiY2FyZE51bWJlciIsIm1pbiIsIm1heCIsIm1hc2siLCJtZXNzYWdlIiwicmVnZXgiLCJjYXJkTmFtZSIsImV4cGlyZSIsInZhbGlkIiwiY3Z2IiwidXNlRm9ybSIsInR5cGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiUmVhY3QiLCJlcnJvciIsInNldEVycm9yIiwic2V0VmFsaWQiLCJpbnZhbGlkIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJtYXRjaCIsImxlbmd0aCIsIm9uS2V5VXAiLCJldmVudCIsInRhcmdldCIsIndhcm4iLCJ1c2VFZmZlY3QiLCJvbkZvY3VzIiwib25CbHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQVdBLE1BQU1BLFVBQW9DLEdBQUc7QUFDM0NDLFlBQVUsRUFBRTtBQUNWQyxPQUFHLEVBQUUsRUFESztBQUVWQyxPQUFHLEVBQUUsRUFGSztBQUdWQyxRQUFJLEVBQUUscUJBSEk7QUFJVkMsV0FBTyxFQUFFLGlCQUpDO0FBS1ZDLFNBQUssRUFBRTtBQUxHLEdBRCtCO0FBUTNDQyxVQUFRLEVBQUU7QUFDUkwsT0FBRyxFQUFFLENBREc7QUFFUkMsT0FBRyxFQUFFLEVBRkc7QUFHUkMsUUFBSSxFQUFFLEdBSEU7QUFJUkMsV0FBTyxFQUFFLGVBSkQ7QUFLUkMsU0FBSyxFQUFFO0FBTEMsR0FSaUM7QUFlM0NFLFFBQU0sRUFBRTtBQUNOTixPQUFHLEVBQUUsQ0FEQztBQUVOQyxPQUFHLEVBQUUsQ0FGQztBQUdOQyxRQUFJLEVBQUUsU0FIQTtBQUlOQyxXQUFPLEVBQUUsb0JBSkg7QUFLTkMsU0FBSyxFQUFFLFVBTEQ7QUFNTkcsU0FBSyxFQUFFO0FBTkQsR0FmbUM7QUF1QjNDQyxLQUFHLEVBQUU7QUFDSFIsT0FBRyxFQUFFLENBREY7QUFFSEMsT0FBRyxFQUFFLENBRkY7QUFHSEMsUUFBSSxFQUFFLEtBSEg7QUFJSEMsV0FBTyxFQUFFLGlCQUpOO0FBS0hDLFNBQUssRUFBRTtBQUxKO0FBdkJzQyxDQUE3Qzs7QUFnQ0EsTUFBTUssT0FBTyxHQUFJQyxJQUFELElBQWtCO0FBQUE7O0FBQ2hDLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyxxREFBQSxDQUFvQixFQUFwQixDQUExQjtBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CRixxREFBQSxDQUE4QixJQUE5QixDQUExQjtBQUNBLFFBQU0sQ0FBQ04sS0FBRCxFQUFRUyxRQUFSLElBQW9CSCxxREFBQSxDQUF3QixLQUF4QixDQUExQjs7QUFFQSxXQUFTSSxPQUFULEdBQTRCO0FBQUE7O0FBQzFCLDRCQUFJbkIsVUFBVSxDQUFDWSxJQUFELENBQWQsNkNBQUksaUJBQWtCSCxLQUF0QixFQUE2QjtBQUMzQlcsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlIsS0FBSyxDQUFDUyxPQUFOLENBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QkMsS0FBdkIsQ0FBNkJ2QixVQUFVLENBQUNZLElBQUQsQ0FBVixDQUFpQkgsS0FBOUMsQ0FBckIsRUFEMkIsQ0FFM0I7QUFDRDs7QUFDRCxXQUFPSSxLQUFLLENBQUNXLE1BQU4sR0FBZXhCLFVBQVUsQ0FBQ1ksSUFBRCxDQUFWLENBQWlCVixHQUFoQyxJQUF1Q1csS0FBSyxDQUFDVyxNQUFOLEdBQWV4QixVQUFVLENBQUNZLElBQUQsQ0FBVixDQUFpQlQsR0FBdkUsR0FBNkUsSUFBN0UsR0FBb0YsS0FBM0Y7QUFDRDs7QUFFRCxXQUFTc0IsT0FBVCxDQUFpQkMsS0FBakIsRUFBbUM7QUFDakN0QiwwREFBSSxDQUFDc0IsS0FBSyxDQUFDQyxNQUFQLEVBQWUzQixVQUFVLENBQUNZLElBQUQsQ0FBVixDQUFpQlIsSUFBaEMsRUFBc0NzQixLQUF0QyxFQUE2QzFCLFVBQVUsQ0FBQ1ksSUFBRCxDQUFWLENBQWlCTixLQUE5RCxDQUFKO0FBQ0FRLFlBQVEsQ0FBQ1ksS0FBSyxDQUFDQyxNQUFOLENBQWFkLEtBQWQsQ0FBUjtBQUNEOztBQUVELFdBQVNlLElBQVQsR0FBc0I7QUFDcEJULFdBQU8sS0FBS0YsUUFBUSxDQUFDakIsVUFBVSxDQUFDWSxJQUFELENBQVYsQ0FBaUJQLE9BQWxCLENBQWIsR0FBMENZLFFBQVEsQ0FBQyxJQUFELENBQXpEO0FBQ0Q7O0FBRURZLGtEQUFTLENBQUMsTUFBTTtBQUNkVixXQUFPLEtBQUtELFFBQVEsQ0FBQyxLQUFELENBQWIsR0FBdUJBLFFBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0QsR0FGUSxFQUVOLENBQUNMLEtBQUQsQ0FGTSxDQUFUO0FBSUEsU0FBTztBQUNMQSxTQURLO0FBRUxDLFlBRks7QUFHTEwsU0FISztBQUlMTyxTQUpLO0FBS0xTLFdBTEs7QUFNTEssV0FBTyxFQUFFLE1BQU1iLFFBQVEsQ0FBQyxJQUFELENBTmxCO0FBT0xjLFVBQU0sRUFBRSxNQUFNSCxJQUFJO0FBUGIsR0FBUDtBQVNELENBbkNEOztHQUFNakIsTzs7QUFxQ04sK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlRm9ybS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFzayBmcm9tICcuLi9oZWxwZXJzL21hc2snO1xuXG5pbnRlcmZhY2UgaVR5cGUge1xuICBtaW46IG51bWJlcixcbiAgbWF4OiBudW1iZXIsXG4gIG1hc2s6IHN0cmluZyxcbiAgbWVzc2FnZTogc3RyaW5nLFxuICByZWdleD86IFJlZ0V4cCxcbiAgdmFsaWQ/OiBhbnksXG59XG5cbmNvbnN0IGlucHV0VHlwZXM6IHsgW2tleTogc3RyaW5nXTogaVR5cGUgfSA9IHtcbiAgY2FyZE51bWJlcjoge1xuICAgIG1pbjogMTksXG4gICAgbWF4OiAxOSxcbiAgICBtYXNrOiAnMDAwMC0wMDAwLTAwMDAtMDAwMCcsXG4gICAgbWVzc2FnZTogJ0NhcnTDo28gSW52w6FsaWRvJyxcbiAgICByZWdleDogL1teXFxkXSsvZ2lcbiAgfSxcbiAgY2FyZE5hbWU6IHtcbiAgICBtaW46IDUsXG4gICAgbWF4OiA1MCxcbiAgICBtYXNrOiAnMCcsXG4gICAgbWVzc2FnZTogJ05vbWUgSW52w6FsaWRvJyxcbiAgICByZWdleDogL1teW2EtekEtWlxcc10rL2dpXG4gIH0sXG4gIGV4cGlyZToge1xuICAgIG1pbjogNyxcbiAgICBtYXg6IDcsXG4gICAgbWFzazogJzAwLzAwMDAnLFxuICAgIG1lc3NhZ2U6ICdWYWxpZGFkZSBJbmNvcnJldGEnLFxuICAgIHJlZ2V4OiAvW15cXGRdKy9naSxcbiAgICB2YWxpZDogL14oMFsxLTldfDFbMC0yXSlcXC8/KFswLTldezJ9KSQvXG4gIH0sXG4gIGN2djoge1xuICAgIG1pbjogMyxcbiAgICBtYXg6IDMsXG4gICAgbWFzazogJzAwMCcsXG4gICAgbWVzc2FnZTogJ0PDs2RpZ28gSW52w6FsaWRvJyxcbiAgICByZWdleDogL1teXFxkXSsvZ2lcbiAgfSxcbn1cblxuY29uc3QgdXNlRm9ybSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3ZhbGlkLCBzZXRWYWxpZF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgZnVuY3Rpb24gaW52YWxpZCgpOiBib29sZWFuIHtcbiAgICBpZiAoaW5wdXRUeXBlc1t0eXBlXT8udmFsaWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd2YWxpZCcsIHZhbHVlLnJlcGxhY2UoJy8nLCAnJykubWF0Y2goaW5wdXRUeXBlc1t0eXBlXS52YWxpZCkpO1xuICAgICAgLy8gcmV0dXJuIHZhbHVlLm1hdGNoKGlucHV0VHlwZXNbdHlwZV0udmFsaWQpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPCBpbnB1dFR5cGVzW3R5cGVdLm1pbiB8fCB2YWx1ZS5sZW5ndGggPiBpbnB1dFR5cGVzW3R5cGVdLm1heCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5VXAoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIG1hc2soZXZlbnQudGFyZ2V0LCBpbnB1dFR5cGVzW3R5cGVdLm1hc2ssIGV2ZW50LCBpbnB1dFR5cGVzW3R5cGVdLnJlZ2V4KTtcbiAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FybigpOiB2b2lkIHtcbiAgICBpbnZhbGlkKCkgPyBzZXRFcnJvcihpbnB1dFR5cGVzW3R5cGVdLm1lc3NhZ2UpIDogc2V0RXJyb3IobnVsbCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGludmFsaWQoKSA/IHNldFZhbGlkKGZhbHNlKSA6IHNldFZhbGlkKHRydWUpO1xuICB9LCBbdmFsdWVdKVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWUsXG4gICAgc2V0VmFsdWUsXG4gICAgdmFsaWQsXG4gICAgZXJyb3IsXG4gICAgb25LZXlVcCxcbiAgICBvbkZvY3VzOiAoKSA9PiBzZXRFcnJvcihudWxsKSxcbiAgICBvbkJsdXI6ICgpID0+IHdhcm4oKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useForm.ts\n");

/***/ })

});