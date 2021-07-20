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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/mask */ \"./src/helpers/mask.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\n\nconst inputTypes = {\n  cardNumber: {\n    min: 19,\n    max: 19,\n    mask: '0000-0000-0000-0000',\n    message: 'Cartão Inválido',\n    regex: /[^\\d]+/gi\n  },\n  cardName: {\n    min: 5,\n    max: 50,\n    mask: '0',\n    message: 'Nome Inválido',\n    regex: /[^[a-zA-Z\\s]+/gi\n  },\n  expire: {\n    min: 7,\n    max: 7,\n    mask: '00/0000',\n    message: 'Validade Incorreta',\n    regex: /[^\\d]+/gi,\n    valid: /^(0[1-9]|1[0-2])\\/?([0-9]{4})$/\n  },\n  cvv: {\n    min: 3,\n    max: 3,\n    mask: '000',\n    message: 'Código Inválido',\n    regex: /[^\\d]+/gi\n  }\n};\n\nconst useForm = type => {\n  _s();\n\n  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null);\n  const [valid, setValid] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);\n\n  function invalid() {\n    var _inputTypes$type;\n\n    if ((_inputTypes$type = inputTypes[type]) !== null && _inputTypes$type !== void 0 && _inputTypes$type.valid) {\n      console.log('valid', value.replace('/', '').match(inputTypes[type].valid));\n      return value.replace(/[^d]+/, '').match(inputTypes[type].valid) ? false : true;\n    }\n\n    return value.length < inputTypes[type].min || value.length > inputTypes[type].max ? true : false;\n  }\n\n  function onKeyUp(event) {\n    (0,_helpers_mask__WEBPACK_IMPORTED_MODULE_1__.default)(event.target, inputTypes[type].mask, event, inputTypes[type].regex);\n    setValue(event.target.value);\n  }\n\n  function warn() {\n    invalid() ? setError(inputTypes[type].message) : setError(null);\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    invalid() ? setValid(false) : setValid(true);\n  }, [value]);\n  return {\n    value,\n    setValue,\n    valid,\n    error,\n    onKeyUp,\n    onFocus: () => setError(null),\n    onBlur: () => warn()\n  };\n};\n\n_s(useForm, \"uNwjTluuwHlQEbvqiIyqDoriqPA=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useForm);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUZvcm0udHM/NjMyOSJdLCJuYW1lcyI6WyJpbnB1dFR5cGVzIiwiY2FyZE51bWJlciIsIm1pbiIsIm1heCIsIm1hc2siLCJtZXNzYWdlIiwicmVnZXgiLCJjYXJkTmFtZSIsImV4cGlyZSIsInZhbGlkIiwiY3Z2IiwidXNlRm9ybSIsInR5cGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiUmVhY3QiLCJlcnJvciIsInNldEVycm9yIiwic2V0VmFsaWQiLCJpbnZhbGlkIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJtYXRjaCIsImxlbmd0aCIsIm9uS2V5VXAiLCJldmVudCIsInRhcmdldCIsIndhcm4iLCJ1c2VFZmZlY3QiLCJvbkZvY3VzIiwib25CbHVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQVdBLE1BQU1BLFVBQW9DLEdBQUc7QUFDM0NDLFlBQVUsRUFBRTtBQUNWQyxPQUFHLEVBQUUsRUFESztBQUVWQyxPQUFHLEVBQUUsRUFGSztBQUdWQyxRQUFJLEVBQUUscUJBSEk7QUFJVkMsV0FBTyxFQUFFLGlCQUpDO0FBS1ZDLFNBQUssRUFBRTtBQUxHLEdBRCtCO0FBUTNDQyxVQUFRLEVBQUU7QUFDUkwsT0FBRyxFQUFFLENBREc7QUFFUkMsT0FBRyxFQUFFLEVBRkc7QUFHUkMsUUFBSSxFQUFFLEdBSEU7QUFJUkMsV0FBTyxFQUFFLGVBSkQ7QUFLUkMsU0FBSyxFQUFFO0FBTEMsR0FSaUM7QUFlM0NFLFFBQU0sRUFBRTtBQUNOTixPQUFHLEVBQUUsQ0FEQztBQUVOQyxPQUFHLEVBQUUsQ0FGQztBQUdOQyxRQUFJLEVBQUUsU0FIQTtBQUlOQyxXQUFPLEVBQUUsb0JBSkg7QUFLTkMsU0FBSyxFQUFFLFVBTEQ7QUFNTkcsU0FBSyxFQUFFO0FBTkQsR0FmbUM7QUF1QjNDQyxLQUFHLEVBQUU7QUFDSFIsT0FBRyxFQUFFLENBREY7QUFFSEMsT0FBRyxFQUFFLENBRkY7QUFHSEMsUUFBSSxFQUFFLEtBSEg7QUFJSEMsV0FBTyxFQUFFLGlCQUpOO0FBS0hDLFNBQUssRUFBRTtBQUxKO0FBdkJzQyxDQUE3Qzs7QUFnQ0EsTUFBTUssT0FBTyxHQUFJQyxJQUFELElBQWtCO0FBQUE7O0FBQ2hDLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CQyxxREFBQSxDQUFvQixFQUFwQixDQUExQjtBQUNBLFFBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLElBQW9CRixxREFBQSxDQUE4QixJQUE5QixDQUExQjtBQUNBLFFBQU0sQ0FBQ04sS0FBRCxFQUFRUyxRQUFSLElBQW9CSCxxREFBQSxDQUF3QixLQUF4QixDQUExQjs7QUFFQSxXQUFTSSxPQUFULEdBQTRCO0FBQUE7O0FBQzFCLDRCQUFJbkIsVUFBVSxDQUFDWSxJQUFELENBQWQsNkNBQUksaUJBQWtCSCxLQUF0QixFQUE2QjtBQUMzQlcsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQlIsS0FBSyxDQUFDUyxPQUFOLENBQWMsR0FBZCxFQUFtQixFQUFuQixFQUF1QkMsS0FBdkIsQ0FBNkJ2QixVQUFVLENBQUNZLElBQUQsQ0FBVixDQUFpQkgsS0FBOUMsQ0FBckI7QUFDQSxhQUFPSSxLQUFLLENBQUNTLE9BQU4sQ0FBYyxPQUFkLEVBQXVCLEVBQXZCLEVBQTJCQyxLQUEzQixDQUFpQ3ZCLFVBQVUsQ0FBQ1ksSUFBRCxDQUFWLENBQWlCSCxLQUFsRCxJQUEyRCxLQUEzRCxHQUFtRSxJQUExRTtBQUNEOztBQUNELFdBQU9JLEtBQUssQ0FBQ1csTUFBTixHQUFleEIsVUFBVSxDQUFDWSxJQUFELENBQVYsQ0FBaUJWLEdBQWhDLElBQXVDVyxLQUFLLENBQUNXLE1BQU4sR0FBZXhCLFVBQVUsQ0FBQ1ksSUFBRCxDQUFWLENBQWlCVCxHQUF2RSxHQUE2RSxJQUE3RSxHQUFvRixLQUEzRjtBQUNEOztBQUVELFdBQVNzQixPQUFULENBQWlCQyxLQUFqQixFQUFtQztBQUNqQ3RCLDBEQUFJLENBQUNzQixLQUFLLENBQUNDLE1BQVAsRUFBZTNCLFVBQVUsQ0FBQ1ksSUFBRCxDQUFWLENBQWlCUixJQUFoQyxFQUFzQ3NCLEtBQXRDLEVBQTZDMUIsVUFBVSxDQUFDWSxJQUFELENBQVYsQ0FBaUJOLEtBQTlELENBQUo7QUFDQVEsWUFBUSxDQUFDWSxLQUFLLENBQUNDLE1BQU4sQ0FBYWQsS0FBZCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU2UsSUFBVCxHQUFzQjtBQUNwQlQsV0FBTyxLQUFLRixRQUFRLENBQUNqQixVQUFVLENBQUNZLElBQUQsQ0FBVixDQUFpQlAsT0FBbEIsQ0FBYixHQUEwQ1ksUUFBUSxDQUFDLElBQUQsQ0FBekQ7QUFDRDs7QUFFRFksa0RBQVMsQ0FBQyxNQUFNO0FBQ2RWLFdBQU8sS0FBS0QsUUFBUSxDQUFDLEtBQUQsQ0FBYixHQUF1QkEsUUFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDRCxHQUZRLEVBRU4sQ0FBQ0wsS0FBRCxDQUZNLENBQVQ7QUFJQSxTQUFPO0FBQ0xBLFNBREs7QUFFTEMsWUFGSztBQUdMTCxTQUhLO0FBSUxPLFNBSks7QUFLTFMsV0FMSztBQU1MSyxXQUFPLEVBQUUsTUFBTWIsUUFBUSxDQUFDLElBQUQsQ0FObEI7QUFPTGMsVUFBTSxFQUFFLE1BQU1ILElBQUk7QUFQYixHQUFQO0FBU0QsQ0FuQ0Q7O0dBQU1qQixPOztBQXFDTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3NyYy9ob29rcy91c2VGb3JtLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXNrIGZyb20gJy4uL2hlbHBlcnMvbWFzayc7XG5cbmludGVyZmFjZSBpVHlwZSB7XG4gIG1pbjogbnVtYmVyLFxuICBtYXg6IG51bWJlcixcbiAgbWFzazogc3RyaW5nLFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIHJlZ2V4PzogUmVnRXhwLFxuICB2YWxpZD86IGFueSxcbn1cblxuY29uc3QgaW5wdXRUeXBlczogeyBba2V5OiBzdHJpbmddOiBpVHlwZSB9ID0ge1xuICBjYXJkTnVtYmVyOiB7XG4gICAgbWluOiAxOSxcbiAgICBtYXg6IDE5LFxuICAgIG1hc2s6ICcwMDAwLTAwMDAtMDAwMC0wMDAwJyxcbiAgICBtZXNzYWdlOiAnQ2FydMOjbyBJbnbDoWxpZG8nLFxuICAgIHJlZ2V4OiAvW15cXGRdKy9naVxuICB9LFxuICBjYXJkTmFtZToge1xuICAgIG1pbjogNSxcbiAgICBtYXg6IDUwLFxuICAgIG1hc2s6ICcwJyxcbiAgICBtZXNzYWdlOiAnTm9tZSBJbnbDoWxpZG8nLFxuICAgIHJlZ2V4OiAvW15bYS16QS1aXFxzXSsvZ2lcbiAgfSxcbiAgZXhwaXJlOiB7XG4gICAgbWluOiA3LFxuICAgIG1heDogNyxcbiAgICBtYXNrOiAnMDAvMDAwMCcsXG4gICAgbWVzc2FnZTogJ1ZhbGlkYWRlIEluY29ycmV0YScsXG4gICAgcmVnZXg6IC9bXlxcZF0rL2dpLFxuICAgIHZhbGlkOiAvXigwWzEtOV18MVswLTJdKVxcLz8oWzAtOV17NH0pJC9cbiAgfSxcbiAgY3Z2OiB7XG4gICAgbWluOiAzLFxuICAgIG1heDogMyxcbiAgICBtYXNrOiAnMDAwJyxcbiAgICBtZXNzYWdlOiAnQ8OzZGlnbyBJbnbDoWxpZG8nLFxuICAgIHJlZ2V4OiAvW15cXGRdKy9naVxuICB9LFxufVxuXG5jb25zdCB1c2VGb3JtID0gKHR5cGU6IHN0cmluZykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oJycpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbdmFsaWQsIHNldFZhbGlkXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBmdW5jdGlvbiBpbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGlmIChpbnB1dFR5cGVzW3R5cGVdPy52YWxpZCkge1xuICAgICAgY29uc29sZS5sb2coJ3ZhbGlkJywgdmFsdWUucmVwbGFjZSgnLycsICcnKS5tYXRjaChpbnB1dFR5cGVzW3R5cGVdLnZhbGlkKSk7XG4gICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW15kXSsvLCAnJykubWF0Y2goaW5wdXRUeXBlc1t0eXBlXS52YWxpZCkgPyBmYWxzZSA6IHRydWVcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA8IGlucHV0VHlwZXNbdHlwZV0ubWluIHx8IHZhbHVlLmxlbmd0aCA+IGlucHV0VHlwZXNbdHlwZV0ubWF4ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlVcChldmVudDogYW55KTogdm9pZCB7XG4gICAgbWFzayhldmVudC50YXJnZXQsIGlucHV0VHlwZXNbdHlwZV0ubWFzaywgZXZlbnQsIGlucHV0VHlwZXNbdHlwZV0ucmVnZXgpO1xuICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB3YXJuKCk6IHZvaWQge1xuICAgIGludmFsaWQoKSA/IHNldEVycm9yKGlucHV0VHlwZXNbdHlwZV0ubWVzc2FnZSkgOiBzZXRFcnJvcihudWxsKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW52YWxpZCgpID8gc2V0VmFsaWQoZmFsc2UpIDogc2V0VmFsaWQodHJ1ZSk7XG4gIH0sIFt2YWx1ZV0pXG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZSxcbiAgICBzZXRWYWx1ZSxcbiAgICB2YWxpZCxcbiAgICBlcnJvcixcbiAgICBvbktleVVwLFxuICAgIG9uRm9jdXM6ICgpID0+IHNldEVycm9yKG51bGwpLFxuICAgIG9uQmx1cjogKCkgPT4gd2FybigpLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useForm.ts\n");

/***/ })

});