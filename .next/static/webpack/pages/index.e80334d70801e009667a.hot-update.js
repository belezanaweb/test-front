/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Shelf/style.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Shelf/style.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  Brand  \\n*/\\n/*\\n  Background\\n*/\\n/*\\n  Buttons\\n*/\\n/*\\n  Borders\\n*/\\n/*\\n Box-Shadows\\n*/\\n/*\\n  Texts\\n*/\\n/*\\n  Colors  \\n*/\\n/*\\n  Fonts\\n*/\\n/**\\n * Screen Sizes\\n */\\n/**\\n * Registros dos z-indexes\\n * Ordem decrescente\\n */\\n/**\\n * Z-indexes\\n */\\n.style_container__Ml4ml {\\n  width: 100%;\\n  background-color: #ffffff;\\n  padding: 0.2em;\\n}\\n\\n.style_list__3dkpr {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-orient: vertical;\\n  -moz-box-direction: normal;\\n       flex-direction: column;\\n}\\n\\n.style_item__n-NPi {\\n  color: #212122;\\n  font-size: -moz-calc(14rem / 16);\\n  font-size: calc(14rem / 16);\\n  padding: 0.2em;\\n  border: 1px solid #eeeeee;\\n  display: grid;\\n  grid-template-columns: repeat(8, 1fr);\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../styles/settings/_colors.scss\",\"webpack://../../styles/settings/_fonts.scss\",\"webpack://../../styles/settings/_screen-sizes.scss\",\"webpack://../../styles/settings/_z-indexes.scss\",\"webpack://../../styles/tools/_functions.scss\",\"webpack://style.module.scss\"],\"names\":[],\"mappings\":\"AAAA;;CAAA;AAKA;;CAAA;AAOA;;CAAA;AAMA;;CAAA;AAKA;;CAAA;AAMA;;CAAA;AASA;;CAAA;ACtCA;;CAAA;ACAA;;EAAA;ACAA;;;EAAA;ACIA;;EAAA;ACFA;EACI,WAAA;EACA,yBLMS;EKLT,cAAA;AAiCJ;;AA/BA;EACI,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;AAkCJ;;AAhCA;EACI,cLoBU;EKnBV,gCAAA;EAAA,2BAAA;EACA,cAAA;EACA,yBAAA;EACA,aAAA;EACA,qCAAA;AAmCJ\",\"sourcesContent\":[\"/*\\n  Brand  \\n*/\\n$c-brand: #ff6c00;\\n\\n/*\\n  Background\\n*/\\n$c-bg-grey-light: #eeeeee;\\n$c-bg-dark: #383935;\\n$c-bg-light: #ffffff;\\n\\n/*\\n  Buttons\\n*/\\n$c-button-enable: $c-brand;\\n$c-button-hover: #d45a00;\\n\\n/*\\n  Borders\\n*/\\n$c-border-light: #eeeeee;\\n\\n/*\\n Box-Shadows\\n*/\\n$c-box-dark: #0d0d0d;\\n$c-box-light: #272626;\\n\\n/*\\n  Texts\\n*/\\n$c-text-brand: #ff7800;\\n$c-text-dark: #212122;\\n$c-text-light: #ffffff;\\n$c-text-inactive: #cccccc;\\n$c-text-heading: #999999;\\n\\n/*\\n  Colors  \\n*/\\n$c-ice: #f5f5f5;\\n$c-silver: #e7e7e7;\\n$c-dark-middle: #484747;\\n$c-grey: #aaaaaa;\\n$c-grey-dark: #807f7f;\\n$c-grey-light: #fbfbfb;\\n$c-white-medium: #f0f0f0;\\n\",\"/*\\n  Fonts\\n*/\\n\\n$f-main: Helvetica Neue, sans-serif;\\n$f-suport: helvetica, helvetica neue, helvetica, serif;\\n$f-size-base: 16;\\n\",\"/**\\n * Screen Sizes\\n */\\n$breakpoints: (\\n  \\\"smallPhone\\\": 300px,\\n  \\\"phone\\\": 340px,\\n  \\\"largePhone\\\": 410px,\\n  \\\"tablet\\\": 752px,\\n  \\\"laptop\\\": 1024px,\\n  \\\"monitor\\\": 1441px,\\n  \\\"tv\\\": 1920px,\\n  \\\"mobile\\\": 751px,\\n  \\\"desktop\\\": 752px,\\n);\\n\",\"/**\\n * Registros dos z-indexes\\n * Ordem decrescente\\n */\\n$z-indexes: ('logo', 'progressBar');\\n\",\"@function rem($font-pixel) {\\n  @return calc(#{$font-pixel}rem / #{$f-size-base});\\n}\\n\\n/**\\n * Z-indexes\\n */\\n@function z($name) {\\n  @if index($z-indexes, $name) {\\n    // starts with 1000, in case of externas libs\\n    @return (length($z-indexes) - index($z-indexes, $name)) + 1000;\\n  } @else {\\n    @warn 'Theres is no \\\"#{$name}\\\" in the z-index list; choose one of this items: #{$z-indexes}';\\n    @return null;\\n  }\\n}\\n\",\"@import \\\"styles\\\";\\n\\n.container {\\n    width: 100%;\\n    background-color: $c-bg-light;\\n    padding: 0.2em;\\n}\\n.list {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n}\\n.item {\\n    color: $c-text-dark;\\n    font-size: rem(14);\\n    padding: 0.2em;\\n    border: 1px solid $c-border-light;\\n    display: grid;\\n    grid-template-columns: repeat(8, 1fr);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"style_container__Ml4ml\",\n\t\"list\": \"style_list__3dkpr\",\n\t\"item\": \"style_item__n-NPi\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hlbGYvc3R5bGUubW9kdWxlLnNjc3M/Mjc3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsNlVBQTZVLGdCQUFnQiw4QkFBOEIsbUJBQW1CLEdBQUcsd0JBQXdCLHNCQUFzQixrQkFBa0IsMkJBQTJCLHdDQUF3Qyw4QkFBOEIsK0JBQStCLGdDQUFnQyxHQUFHLHdCQUF3QixtQkFBbUIscUNBQXFDLGdDQUFnQyxtQkFBbUIsOEJBQThCLGtCQUFrQiwwQ0FBMEMsR0FBRyxPQUFPLHNVQUFzVSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLCtEQUErRCxvREFBb0Qsc0JBQXNCLHVCQUF1QixrREFBa0QsMkJBQTJCLGdEQUFnRCwrQ0FBK0Msd0JBQXdCLDRDQUE0Qyx3QkFBd0IseUJBQXlCLDRCQUE0QiwyQkFBMkIsd0NBQXdDLHFCQUFxQiwwQkFBMEIsbUJBQW1CLHdCQUF3Qix5QkFBeUIsMkJBQTJCLDREQUE0RCx5REFBeUQsbUJBQW1CLGlRQUFpUSxxR0FBcUcsaUNBQWlDLG1CQUFtQixZQUFZLFFBQVEsYUFBYSxFQUFFLEdBQUcsZ0RBQWdELGtDQUFrQyx3SEFBd0gsS0FBSyxRQUFRLDhCQUE4QixNQUFNLHVCQUF1Qiw2QkFBNkIsV0FBVyxFQUFFLG1CQUFtQixLQUFLLEdBQUcsd0JBQXdCLGdCQUFnQixrQkFBa0Isb0NBQW9DLHFCQUFxQixHQUFHLFNBQVMsb0JBQW9CLHFDQUFxQyw2QkFBNkIsR0FBRyxTQUFTLDBCQUEwQix5QkFBeUIscUJBQXFCLHdDQUF3QyxvQkFBb0IsNENBQTRDLEdBQUcscUJBQXFCO0FBQ2wrRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vc3JjL2NvbXBvbmVudHMvU2hlbGYvc3R5bGUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAgQnJhbmQgIFxcbiovXFxuLypcXG4gIEJhY2tncm91bmRcXG4qL1xcbi8qXFxuICBCdXR0b25zXFxuKi9cXG4vKlxcbiAgQm9yZGVyc1xcbiovXFxuLypcXG4gQm94LVNoYWRvd3NcXG4qL1xcbi8qXFxuICBUZXh0c1xcbiovXFxuLypcXG4gIENvbG9ycyAgXFxuKi9cXG4vKlxcbiAgRm9udHNcXG4qL1xcbi8qKlxcbiAqIFNjcmVlbiBTaXplc1xcbiAqL1xcbi8qKlxcbiAqIFJlZ2lzdHJvcyBkb3Mgei1pbmRleGVzXFxuICogT3JkZW0gZGVjcmVzY2VudGVcXG4gKi9cXG4vKipcXG4gKiBaLWluZGV4ZXNcXG4gKi9cXG4uc3R5bGVfY29udGFpbmVyX19NbDRtbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLnN0eWxlX2xpc3RfXzNka3ByIHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN0eWxlX2l0ZW1fX24tTlBpIHtcXG4gIGNvbG9yOiAjMjEyMTIyO1xcbiAgZm9udC1zaXplOiAtbW96LWNhbGMoMTRyZW0gLyAxNik7XFxuICBmb250LXNpemU6IGNhbGMoMTRyZW0gLyAxNik7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL3N0eWxlcy9zZXR0aW5ncy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvc2V0dGluZ3MvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvc2V0dGluZ3MvX3NjcmVlbi1zaXplcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL3NldHRpbmdzL196LWluZGV4ZXMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy90b29scy9fZnVuY3Rpb25zLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBQTtBQUtBOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBTUE7O0NBQUE7QUFTQTs7Q0FBQTtBQ3RDQTs7Q0FBQTtBQ0FBOztFQUFBO0FDQUE7OztFQUFBO0FDSUE7O0VBQUE7QUNGQTtFQUNJLFdBQUE7RUFDQSx5QkxNUztFS0xULGNBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7T0FBQSw4QkFBQTtFQUNBLHlCQUFBO0VBQUEsMEJBQUE7T0FBQSxzQkFBQTtBQWtDSjs7QUFoQ0E7RUFDSSxjTG9CVTtFS25CVixnQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0FBbUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICBCcmFuZCAgXFxuKi9cXG4kYy1icmFuZDogI2ZmNmMwMDtcXG5cXG4vKlxcbiAgQmFja2dyb3VuZFxcbiovXFxuJGMtYmctZ3JleS1saWdodDogI2VlZWVlZTtcXG4kYy1iZy1kYXJrOiAjMzgzOTM1O1xcbiRjLWJnLWxpZ2h0OiAjZmZmZmZmO1xcblxcbi8qXFxuICBCdXR0b25zXFxuKi9cXG4kYy1idXR0b24tZW5hYmxlOiAkYy1icmFuZDtcXG4kYy1idXR0b24taG92ZXI6ICNkNDVhMDA7XFxuXFxuLypcXG4gIEJvcmRlcnNcXG4qL1xcbiRjLWJvcmRlci1saWdodDogI2VlZWVlZTtcXG5cXG4vKlxcbiBCb3gtU2hhZG93c1xcbiovXFxuJGMtYm94LWRhcms6ICMwZDBkMGQ7XFxuJGMtYm94LWxpZ2h0OiAjMjcyNjI2O1xcblxcbi8qXFxuICBUZXh0c1xcbiovXFxuJGMtdGV4dC1icmFuZDogI2ZmNzgwMDtcXG4kYy10ZXh0LWRhcms6ICMyMTIxMjI7XFxuJGMtdGV4dC1saWdodDogI2ZmZmZmZjtcXG4kYy10ZXh0LWluYWN0aXZlOiAjY2NjY2NjO1xcbiRjLXRleHQtaGVhZGluZzogIzk5OTk5OTtcXG5cXG4vKlxcbiAgQ29sb3JzICBcXG4qL1xcbiRjLWljZTogI2Y1ZjVmNTtcXG4kYy1zaWx2ZXI6ICNlN2U3ZTc7XFxuJGMtZGFyay1taWRkbGU6ICM0ODQ3NDc7XFxuJGMtZ3JleTogI2FhYWFhYTtcXG4kYy1ncmV5LWRhcms6ICM4MDdmN2Y7XFxuJGMtZ3JleS1saWdodDogI2ZiZmJmYjtcXG4kYy13aGl0ZS1tZWRpdW06ICNmMGYwZjA7XFxuXCIsXCIvKlxcbiAgRm9udHNcXG4qL1xcblxcbiRmLW1haW46IEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbiRmLXN1cG9ydDogaGVsdmV0aWNhLCBoZWx2ZXRpY2EgbmV1ZSwgaGVsdmV0aWNhLCBzZXJpZjtcXG4kZi1zaXplLWJhc2U6IDE2O1xcblwiLFwiLyoqXFxuICogU2NyZWVuIFNpemVzXFxuICovXFxuJGJyZWFrcG9pbnRzOiAoXFxuICBcXFwic21hbGxQaG9uZVxcXCI6IDMwMHB4LFxcbiAgXFxcInBob25lXFxcIjogMzQwcHgsXFxuICBcXFwibGFyZ2VQaG9uZVxcXCI6IDQxMHB4LFxcbiAgXFxcInRhYmxldFxcXCI6IDc1MnB4LFxcbiAgXFxcImxhcHRvcFxcXCI6IDEwMjRweCxcXG4gIFxcXCJtb25pdG9yXFxcIjogMTQ0MXB4LFxcbiAgXFxcInR2XFxcIjogMTkyMHB4LFxcbiAgXFxcIm1vYmlsZVxcXCI6IDc1MXB4LFxcbiAgXFxcImRlc2t0b3BcXFwiOiA3NTJweCxcXG4pO1xcblwiLFwiLyoqXFxuICogUmVnaXN0cm9zIGRvcyB6LWluZGV4ZXNcXG4gKiBPcmRlbSBkZWNyZXNjZW50ZVxcbiAqL1xcbiR6LWluZGV4ZXM6ICgnbG9nbycsICdwcm9ncmVzc0JhcicpO1xcblwiLFwiQGZ1bmN0aW9uIHJlbSgkZm9udC1waXhlbCkge1xcbiAgQHJldHVybiBjYWxjKCN7JGZvbnQtcGl4ZWx9cmVtIC8gI3skZi1zaXplLWJhc2V9KTtcXG59XFxuXFxuLyoqXFxuICogWi1pbmRleGVzXFxuICovXFxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcXG4gIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xcbiAgICAvLyBzdGFydHMgd2l0aCAxMDAwLCBpbiBjYXNlIG9mIGV4dGVybmFzIGxpYnNcXG4gICAgQHJldHVybiAobGVuZ3RoKCR6LWluZGV4ZXMpIC0gaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpKSArIDEwMDA7XFxuICB9IEBlbHNlIHtcXG4gICAgQHdhcm4gJ1RoZXJlcyBpcyBubyBcXFwiI3skbmFtZX1cXFwiIGluIHRoZSB6LWluZGV4IGxpc3Q7IGNob29zZSBvbmUgb2YgdGhpcyBpdGVtczogI3skei1pbmRleGVzfSc7XFxuICAgIEByZXR1cm4gbnVsbDtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IFxcXCJzdHlsZXNcXFwiO1xcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGMtYmctbGlnaHQ7XFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLml0ZW0ge1xcbiAgICBjb2xvcjogJGMtdGV4dC1kYXJrO1xcbiAgICBmb250LXNpemU6IHJlbSgxNCk7XFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYy1ib3JkZXItbGlnaHQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlX2NvbnRhaW5lcl9fTWw0bWxcIixcblx0XCJsaXN0XCI6IFwic3R5bGVfbGlzdF9fM2RrcHJcIixcblx0XCJpdGVtXCI6IFwic3R5bGVfaXRlbV9fbi1OUGlcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Shelf/style.module.scss\n");

/***/ })

});