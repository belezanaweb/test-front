/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/confirmacao",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Shelf/style.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Shelf/style.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  Brand  \\n*/\\n/*\\n  Background\\n*/\\n/*\\n  Buttons\\n*/\\n/*\\n  Borders\\n*/\\n/*\\n Box-Shadows\\n*/\\n/*\\n  Texts\\n*/\\n/*\\n  Colors  \\n*/\\n/*\\n  Fonts\\n*/\\n/**\\n * Screen Sizes\\n */\\n/**\\n * Registros dos z-indexes\\n * Ordem decrescente\\n */\\n/**\\n * Z-indexes\\n */\\n.style_container__Ml4ml {\\n  width: 100%;\\n  background-color: #ffffff;\\n  padding: 0.8em;\\n  -webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\\n          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\\n  z-index: 1000;\\n}\\n\\n.style_list__3dkpr {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-orient: vertical;\\n  -moz-box-direction: normal;\\n       flex-direction: column;\\n}\\n\\n.style_item__n-NPi {\\n  color: #383935;\\n  font-size: -moz-calc(13rem / 16);\\n  font-size: calc(13rem / 16);\\n  font-weight: bolder;\\n  padding: 0.2em;\\n  border: 1px solid #eeeeee;\\n}\\n\\n.style_isActive__t5orG {\\n  color: #ff7800;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../styles/settings/_colors.scss\",\"webpack://../../styles/settings/_fonts.scss\",\"webpack://../../styles/settings/_screen-sizes.scss\",\"webpack://../../styles/settings/_z-indexes.scss\",\"webpack://../../styles/tools/_functions.scss\",\"webpack://style.module.scss\"],\"names\":[],\"mappings\":\"AAAA;;CAAA;AAKA;;CAAA;AAOA;;CAAA;AAMA;;CAAA;AAKA;;CAAA;AAMA;;CAAA;AASA;;CAAA;ACtCA;;CAAA;ACAA;;EAAA;ACAA;;;EAAA;ACIA;;EAAA;ACFA;EACI,WAAA;EACA,yBLMS;EKLT,cAAA;EACA,iDAAA;UAAA,yCAAA;EACA,aAAA;AAiCJ;;AA/BA;EACI,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;AAkCJ;;AAhCA;EACI,cLkBU;EKjBV,gCAAA;EAAA,2BAAA;EACA,mBAAA;EACA,cAAA;EACA,yBAAA;AAmCJ;;AAjCA;EACI,cLUW;AK0Bf\",\"sourcesContent\":[\"/*\\n  Brand  \\n*/\\n$c-brand: #ff6c00;\\n\\n/*\\n  Background\\n*/\\n$c-bg-grey-light: #eeeeee;\\n$c-bg-dark: #383935;\\n$c-bg-light: #ffffff;\\n\\n/*\\n  Buttons\\n*/\\n$c-button-enable: $c-brand;\\n$c-button-hover: #d45a00;\\n\\n/*\\n  Borders\\n*/\\n$c-border-light: #eeeeee;\\n\\n/*\\n Box-Shadows\\n*/\\n$c-box-dark: #0d0d0d;\\n$c-box-light: #272626;\\n\\n/*\\n  Texts\\n*/\\n$c-text-brand: #ff7800;\\n$c-text-dark: #383935;\\n$c-text-light: #ffffff;\\n$c-text-inactive: #cccccc;\\n$c-text-heading: #999999;\\n\\n/*\\n  Colors  \\n*/\\n$c-ice: #f5f5f5;\\n$c-silver: #e7e7e7;\\n$c-dark-middle: #484747;\\n$c-grey: #aaaaaa;\\n$c-grey-dark: #807f7f;\\n$c-grey-light: #fbfbfb;\\n$c-white-medium: #f0f0f0;\\n\",\"/*\\n  Fonts\\n*/\\n\\n$f-main: Helvetica Neue, sans-serif;\\n$f-suport: helvetica, helvetica neue, helvetica, serif;\\n$f-size-base: 16;\\n\",\"/**\\n * Screen Sizes\\n */\\n$breakpoints: (\\n  \\\"smallPhone\\\": 300px,\\n  \\\"phone\\\": 340px,\\n  \\\"largePhone\\\": 410px,\\n  \\\"tablet\\\": 752px,\\n  \\\"laptop\\\": 1024px,\\n  \\\"monitor\\\": 1441px,\\n  \\\"tv\\\": 1920px,\\n  \\\"mobile\\\": 751px,\\n  \\\"desktop\\\": 752px,\\n);\\n\",\"/**\\n * Registros dos z-indexes\\n * Ordem decrescente\\n */\\n$z-indexes: ('logo', 'progressBar');\\n\",\"@function rem($font-pixel) {\\n  @return calc(#{$font-pixel}rem / #{$f-size-base});\\n}\\n\\n/**\\n * Z-indexes\\n */\\n@function z($name) {\\n  @if index($z-indexes, $name) {\\n    // starts with 1000, in case of externas libs\\n    @return (length($z-indexes) - index($z-indexes, $name)) + 1000;\\n  } @else {\\n    @warn 'Theres is no \\\"#{$name}\\\" in the z-index list; choose one of this items: #{$z-indexes}';\\n    @return null;\\n  }\\n}\\n\",\"@import \\\"styles\\\";\\n\\n.container {\\n    width: 100%;\\n    background-color: $c-bg-light;\\n    padding: 0.8em;\\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\\n    z-index: z(progressBar);\\n}\\n.list {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n}\\n.item {\\n    color: $c-text-dark;\\n    font-size: rem(13);\\n    font-weight: bolder;\\n    padding: 0.2em;\\n    border: 1px solid $c-border-light;\\n}\\n.isActive {\\n    color: $c-text-brand;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"style_container__Ml4ml\",\n\t\"list\": \"style_list__3dkpr\",\n\t\"item\": \"style_item__n-NPi\",\n\t\"isActive\": \"style_isActive__t5orG\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hlbGYvc3R5bGUubW9kdWxlLnNjc3M/Mjc3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsNlVBQTZVLGdCQUFnQiw4QkFBOEIsbUJBQW1CLHNEQUFzRCxzREFBc0Qsa0JBQWtCLEdBQUcsd0JBQXdCLHNCQUFzQixrQkFBa0IsMkJBQTJCLHdDQUF3Qyw4QkFBOEIsK0JBQStCLGdDQUFnQyxHQUFHLHdCQUF3QixtQkFBbUIscUNBQXFDLGdDQUFnQyx3QkFBd0IsbUJBQW1CLDhCQUE4QixHQUFHLDRCQUE0QixtQkFBbUIsR0FBRyxPQUFPLHNVQUFzVSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSwrREFBK0Qsb0RBQW9ELHNCQUFzQix1QkFBdUIsa0RBQWtELDJCQUEyQixnREFBZ0QsK0NBQStDLHdCQUF3Qiw0Q0FBNEMsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLHdDQUF3QyxxQkFBcUIsMEJBQTBCLG1CQUFtQix3QkFBd0IseUJBQXlCLDJCQUEyQiw0REFBNEQseURBQXlELG1CQUFtQixpUUFBaVEscUdBQXFHLGlDQUFpQyxtQkFBbUIsWUFBWSxRQUFRLGFBQWEsRUFBRSxHQUFHLGdEQUFnRCxrQ0FBa0Msd0hBQXdILEtBQUssUUFBUSw4QkFBOEIsTUFBTSx1QkFBdUIsNkJBQTZCLFdBQVcsRUFBRSxtQkFBbUIsS0FBSyxHQUFHLHdCQUF3QixnQkFBZ0Isa0JBQWtCLG9DQUFvQyxxQkFBcUIsZ0RBQWdELDhCQUE4QixHQUFHLFNBQVMsb0JBQW9CLHFDQUFxQyw2QkFBNkIsR0FBRyxTQUFTLDBCQUEwQix5QkFBeUIsMEJBQTBCLHFCQUFxQix3Q0FBd0MsR0FBRyxhQUFhLDJCQUEyQixHQUFHLHFCQUFxQjtBQUM5dUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vc3JjL2NvbXBvbmVudHMvU2hlbGYvc3R5bGUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgQnJhbmQgIFxcbiovXFxuLypcXG4gIEJhY2tncm91bmRcXG4qL1xcbi8qXFxuICBCdXR0b25zXFxuKi9cXG4vKlxcbiAgQm9yZGVyc1xcbiovXFxuLypcXG4gQm94LVNoYWRvd3NcXG4qL1xcbi8qXFxuICBUZXh0c1xcbiovXFxuLypcXG4gIENvbG9ycyAgXFxuKi9cXG4vKlxcbiAgRm9udHNcXG4qL1xcbi8qKlxcbiAqIFNjcmVlbiBTaXplc1xcbiAqL1xcbi8qKlxcbiAqIFJlZ2lzdHJvcyBkb3Mgei1pbmRleGVzXFxuICogT3JkZW0gZGVjcmVzY2VudGVcXG4gKi9cXG4vKipcXG4gKiBaLWluZGV4ZXNcXG4gKi9cXG4uc3R5bGVfY29udGFpbmVyX19NbDRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAwLjhlbTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuLnN0eWxlX2xpc3RfXzNka3ByIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN0eWxlX2l0ZW1fX24tTlBpIHtcXG4gIGNvbG9yOiAjMzgzOTM1O1xcbiAgZm9udC1zaXplOiAtbW96LWNhbGMoMTNyZW0gLyAxNik7XFxuICBmb250LXNpemU6IGNhbGMoMTNyZW0gLyAxNik7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xcbn1cXG5cXG4uc3R5bGVfaXNBY3RpdmVfX3Q1b3JHIHtcXG4gIGNvbG9yOiAjZmY3ODAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL3NldHRpbmdzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9zZXR0aW5ncy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9zZXR0aW5ncy9fc2NyZWVuLXNpemVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvc2V0dGluZ3MvX3otaW5kZXhlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL3Rvb2xzL19mdW5jdGlvbnMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFBO0FBS0E7O0NBQUE7QUFPQTs7Q0FBQTtBQU1BOztDQUFBO0FBS0E7O0NBQUE7QUFNQTs7Q0FBQTtBQVNBOztDQUFBO0FDdENBOztDQUFBO0FDQUE7O0VBQUE7QUNBQTs7O0VBQUE7QUNJQTs7RUFBQTtBQ0ZBO0VBQ0ksV0FBQTtFQUNBLHlCTE1TO0VLTFQsY0FBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7RUFDQSxhQUFBO0FBaUNKOztBQS9CQTtFQUNJLGlCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO09BQUEsOEJBQUE7RUFDQSx5QkFBQTtFQUFBLDBCQUFBO09BQUEsc0JBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksY0xrQlU7RUtqQlYsZ0NBQUE7RUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBbUNKOztBQWpDQTtFQUNJLGNMVVc7QUswQmZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gIEJyYW5kICBcXG4qL1xcbiRjLWJyYW5kOiAjZmY2YzAwO1xcblxcbi8qXFxuICBCYWNrZ3JvdW5kXFxuKi9cXG4kYy1iZy1ncmV5LWxpZ2h0OiAjZWVlZWVlO1xcbiRjLWJnLWRhcms6ICMzODM5MzU7XFxuJGMtYmctbGlnaHQ6ICNmZmZmZmY7XFxuXFxuLypcXG4gIEJ1dHRvbnNcXG4qL1xcbiRjLWJ1dHRvbi1lbmFibGU6ICRjLWJyYW5kO1xcbiRjLWJ1dHRvbi1ob3ZlcjogI2Q0NWEwMDtcXG5cXG4vKlxcbiAgQm9yZGVyc1xcbiovXFxuJGMtYm9yZGVyLWxpZ2h0OiAjZWVlZWVlO1xcblxcbi8qXFxuIEJveC1TaGFkb3dzXFxuKi9cXG4kYy1ib3gtZGFyazogIzBkMGQwZDtcXG4kYy1ib3gtbGlnaHQ6ICMyNzI2MjY7XFxuXFxuLypcXG4gIFRleHRzXFxuKi9cXG4kYy10ZXh0LWJyYW5kOiAjZmY3ODAwO1xcbiRjLXRleHQtZGFyazogIzM4MzkzNTtcXG4kYy10ZXh0LWxpZ2h0OiAjZmZmZmZmO1xcbiRjLXRleHQtaW5hY3RpdmU6ICNjY2NjY2M7XFxuJGMtdGV4dC1oZWFkaW5nOiAjOTk5OTk5O1xcblxcbi8qXFxuICBDb2xvcnMgIFxcbiovXFxuJGMtaWNlOiAjZjVmNWY1O1xcbiRjLXNpbHZlcjogI2U3ZTdlNztcXG4kYy1kYXJrLW1pZGRsZTogIzQ4NDc0NztcXG4kYy1ncmV5OiAjYWFhYWFhO1xcbiRjLWdyZXktZGFyazogIzgwN2Y3ZjtcXG4kYy1ncmV5LWxpZ2h0OiAjZmJmYmZiO1xcbiRjLXdoaXRlLW1lZGl1bTogI2YwZjBmMDtcXG5cIixcIi8qXFxuICBGb250c1xcbiovXFxuXFxuJGYtbWFpbjogSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxuJGYtc3Vwb3J0OiBoZWx2ZXRpY2EsIGhlbHZldGljYSBuZXVlLCBoZWx2ZXRpY2EsIHNlcmlmO1xcbiRmLXNpemUtYmFzZTogMTY7XFxuXCIsXCIvKipcXG4gKiBTY3JlZW4gU2l6ZXNcXG4gKi9cXG4kYnJlYWtwb2ludHM6IChcXG4gIFxcXCJzbWFsbFBob25lXFxcIjogMzAwcHgsXFxuICBcXFwicGhvbmVcXFwiOiAzNDBweCxcXG4gIFxcXCJsYXJnZVBob25lXFxcIjogNDEwcHgsXFxuICBcXFwidGFibGV0XFxcIjogNzUycHgsXFxuICBcXFwibGFwdG9wXFxcIjogMTAyNHB4LFxcbiAgXFxcIm1vbml0b3JcXFwiOiAxNDQxcHgsXFxuICBcXFwidHZcXFwiOiAxOTIwcHgsXFxuICBcXFwibW9iaWxlXFxcIjogNzUxcHgsXFxuICBcXFwiZGVza3RvcFxcXCI6IDc1MnB4LFxcbik7XFxuXCIsXCIvKipcXG4gKiBSZWdpc3Ryb3MgZG9zIHotaW5kZXhlc1xcbiAqIE9yZGVtIGRlY3Jlc2NlbnRlXFxuICovXFxuJHotaW5kZXhlczogKCdsb2dvJywgJ3Byb2dyZXNzQmFyJyk7XFxuXCIsXCJAZnVuY3Rpb24gcmVtKCRmb250LXBpeGVsKSB7XFxuICBAcmV0dXJuIGNhbGMoI3skZm9udC1waXhlbH1yZW0gLyAjeyRmLXNpemUtYmFzZX0pO1xcbn1cXG5cXG4vKipcXG4gKiBaLWluZGV4ZXNcXG4gKi9cXG5AZnVuY3Rpb24geigkbmFtZSkge1xcbiAgQGlmIGluZGV4KCR6LWluZGV4ZXMsICRuYW1lKSB7XFxuICAgIC8vIHN0YXJ0cyB3aXRoIDEwMDAsIGluIGNhc2Ugb2YgZXh0ZXJuYXMgbGlic1xcbiAgICBAcmV0dXJuIChsZW5ndGgoJHotaW5kZXhlcykgLSBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkpICsgMTAwMDtcXG4gIH0gQGVsc2Uge1xcbiAgICBAd2FybiAnVGhlcmVzIGlzIG5vIFxcXCIjeyRuYW1lfVxcXCIgaW4gdGhlIHotaW5kZXggbGlzdDsgY2hvb3NlIG9uZSBvZiB0aGlzIGl0ZW1zOiAjeyR6LWluZGV4ZXN9JztcXG4gICAgQHJldHVybiBudWxsO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgXFxcInN0eWxlc1xcXCI7XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYy1iZy1saWdodDtcXG4gICAgcGFkZGluZzogMC44ZW07XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICB6LWluZGV4OiB6KHByb2dyZXNzQmFyKTtcXG59XFxuLmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtIHtcXG4gICAgY29sb3I6ICRjLXRleHQtZGFyaztcXG4gICAgZm9udC1zaXplOiByZW0oMTMpO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBwYWRkaW5nOiAwLjJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGMtYm9yZGVyLWxpZ2h0O1xcbn1cXG4uaXNBY3RpdmUge1xcbiAgICBjb2xvcjogJGMtdGV4dC1icmFuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVfY29udGFpbmVyX19NbDRtbFwiLFxuXHRcImxpc3RcIjogXCJzdHlsZV9saXN0X18zZGtwclwiLFxuXHRcIml0ZW1cIjogXCJzdHlsZV9pdGVtX19uLU5QaVwiLFxuXHRcImlzQWN0aXZlXCI6IFwic3R5bGVfaXNBY3RpdmVfX3Q1b3JHXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Shelf/style.module.scss\n");

/***/ })

});