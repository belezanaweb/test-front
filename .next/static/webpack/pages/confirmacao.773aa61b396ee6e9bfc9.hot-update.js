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

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  Brand  \\n*/\\n/*\\n  Background\\n*/\\n/*\\n  Buttons\\n*/\\n/*\\n  Borders\\n*/\\n/*\\n Box-Shadows\\n*/\\n/*\\n  Texts\\n*/\\n/*\\n  Colors  \\n*/\\n/*\\n  Fonts\\n*/\\n/**\\n * Screen Sizes\\n */\\n/**\\n * Registros dos z-indexes\\n * Ordem decrescente\\n */\\n/**\\n * Z-indexes\\n */\\n.style_container__Ml4ml {\\n  width: 100%;\\n  background-color: #ffffff;\\n  padding: 0.8em;\\n  -webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\\n          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\\n  z-index: 1000;\\n}\\n\\n.style_list__3dkpr {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-pack: justify;\\n       justify-content: space-between;\\n  -moz-box-orient: vertical;\\n  -moz-box-direction: normal;\\n       flex-direction: column;\\n}\\n\\n.style_item__n-NPi {\\n  color: #cccccc;\\n  font-size: -moz-calc(13rem / 16);\\n  font-size: calc(13rem / 16);\\n  font-weight: bolder;\\n  padding: 0.2em;\\n}\\n\\n.style_isActive__t5orG {\\n  color: #ff7800;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://../../styles/settings/_colors.scss\",\"webpack://../../styles/settings/_fonts.scss\",\"webpack://../../styles/settings/_screen-sizes.scss\",\"webpack://../../styles/settings/_z-indexes.scss\",\"webpack://../../styles/tools/_functions.scss\",\"webpack://style.module.scss\"],\"names\":[],\"mappings\":\"AAAA;;CAAA;AAKA;;CAAA;AAOA;;CAAA;AAMA;;CAAA;AAKA;;CAAA;AAMA;;CAAA;AASA;;CAAA;ACtCA;;CAAA;ACAA;;EAAA;ACAA;;;EAAA;ACIA;;EAAA;ACFA;EACI,WAAA;EACA,yBLMS;EKLT,cAAA;EACA,iDAAA;UAAA,yCAAA;EACA,aAAA;AAiCJ;;AA/BA;EACI,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,8BAAA;EACA,yBAAA;EAAA,0BAAA;OAAA,sBAAA;AAkCJ;;AAhCA;EACI,cLoBc;EKnBd,gCAAA;EAAA,2BAAA;EACA,mBAAA;EACA,cAAA;AAmCJ;;AAjCA;EACI,cLWW;AKyBf\",\"sourcesContent\":[\"/*\\n  Brand  \\n*/\\n$c-brand: #ff6c00;\\n\\n/*\\n  Background\\n*/\\n$c-bg-grey-light: #eeeeee;\\n$c-bg-dark: #383935;\\n$c-bg-light: #ffffff;\\n\\n/*\\n  Buttons\\n*/\\n$c-button-enable: $c-brand;\\n$c-button-hover: #d45a00;\\n\\n/*\\n  Borders\\n*/\\n$c-border-line: #e5e5e5;\\n\\n/*\\n Box-Shadows\\n*/\\n$c-box-dark: #0d0d0d;\\n$c-box-light: #272626;\\n\\n/*\\n  Texts\\n*/\\n$c-text-brand: #ff7800;\\n$c-text-dark: #383935;\\n$c-text-light: #ffffff;\\n$c-text-inactive: #cccccc;\\n$c-text-heading: #999999;\\n\\n/*\\n  Colors  \\n*/\\n$c-ice: #f5f5f5;\\n$c-silver: #e7e7e7;\\n$c-dark-middle: #484747;\\n$c-grey: #aaaaaa;\\n$c-grey-dark: #807f7f;\\n$c-grey-light: #fbfbfb;\\n$c-white-medium: #f0f0f0;\\n\",\"/*\\n  Fonts\\n*/\\n\\n$f-main: Helvetica Neue, sans-serif;\\n$f-suport: helvetica, helvetica neue, helvetica, serif;\\n$f-size-base: 16;\\n\",\"/**\\n * Screen Sizes\\n */\\n$breakpoints: (\\n  \\\"smallPhone\\\": 300px,\\n  \\\"phone\\\": 340px,\\n  \\\"largePhone\\\": 410px,\\n  \\\"tablet\\\": 752px,\\n  \\\"laptop\\\": 1024px,\\n  \\\"monitor\\\": 1441px,\\n  \\\"tv\\\": 1920px,\\n  \\\"mobile\\\": 751px,\\n  \\\"desktop\\\": 752px,\\n);\\n\",\"/**\\n * Registros dos z-indexes\\n * Ordem decrescente\\n */\\n$z-indexes: ('logo', 'progressBar');\\n\",\"@function rem($font-pixel) {\\n  @return calc(#{$font-pixel}rem / #{$f-size-base});\\n}\\n\\n/**\\n * Z-indexes\\n */\\n@function z($name) {\\n  @if index($z-indexes, $name) {\\n    // starts with 1000, in case of externas libs\\n    @return (length($z-indexes) - index($z-indexes, $name)) + 1000;\\n  } @else {\\n    @warn 'Theres is no \\\"#{$name}\\\" in the z-index list; choose one of this items: #{$z-indexes}';\\n    @return null;\\n  }\\n}\\n\",\"@import \\\"styles\\\";\\n\\n.container {\\n    width: 100%;\\n    background-color: $c-bg-light;\\n    padding: 0.8em;\\n    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\\n    z-index: z(progressBar);\\n}\\n.list {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-direction: column;\\n}\\n.item {\\n    color: $c-text-inactive;\\n    font-size: rem(13);\\n    font-weight: bolder;\\n    padding: 0.2em;\\n}\\n.isActive {\\n    color: $c-text-brand;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"style_container__Ml4ml\",\n\t\"list\": \"style_list__3dkpr\",\n\t\"item\": \"style_item__n-NPi\",\n\t\"isActive\": \"style_isActive__t5orG\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2hlbGYvc3R5bGUubW9kdWxlLnNjc3M/Mjc3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsNlVBQTZVLGdCQUFnQiw4QkFBOEIsbUJBQW1CLHNEQUFzRCxzREFBc0Qsa0JBQWtCLEdBQUcsd0JBQXdCLHNCQUFzQixrQkFBa0IsMkJBQTJCLHdDQUF3Qyw4QkFBOEIsK0JBQStCLGdDQUFnQyxHQUFHLHdCQUF3QixtQkFBbUIscUNBQXFDLGdDQUFnQyx3QkFBd0IsbUJBQW1CLEdBQUcsNEJBQTRCLG1CQUFtQixHQUFHLE9BQU8sc1VBQXNVLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSwrREFBK0Qsb0RBQW9ELHNCQUFzQix1QkFBdUIsa0RBQWtELDJCQUEyQiwrQ0FBK0MsK0NBQStDLHdCQUF3Qiw0Q0FBNEMsd0JBQXdCLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLHdDQUF3QyxxQkFBcUIsMEJBQTBCLG1CQUFtQix3QkFBd0IseUJBQXlCLDJCQUEyQiw0REFBNEQseURBQXlELG1CQUFtQixpUUFBaVEscUdBQXFHLGlDQUFpQyxtQkFBbUIsWUFBWSxRQUFRLGFBQWEsRUFBRSxHQUFHLGdEQUFnRCxrQ0FBa0Msd0hBQXdILEtBQUssUUFBUSw4QkFBOEIsTUFBTSx1QkFBdUIsNkJBQTZCLFdBQVcsRUFBRSxtQkFBbUIsS0FBSyxHQUFHLHdCQUF3QixnQkFBZ0Isa0JBQWtCLG9DQUFvQyxxQkFBcUIsZ0RBQWdELDhCQUE4QixHQUFHLFNBQVMsb0JBQW9CLHFDQUFxQyw2QkFBNkIsR0FBRyxTQUFTLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHFCQUFxQixHQUFHLGFBQWEsMkJBQTJCLEdBQUcscUJBQXFCO0FBQ2hxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9zcmMvY29tcG9uZW50cy9TaGVsZi9zdHlsZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICBCcmFuZCAgXFxuKi9cXG4vKlxcbiAgQmFja2dyb3VuZFxcbiovXFxuLypcXG4gIEJ1dHRvbnNcXG4qL1xcbi8qXFxuICBCb3JkZXJzXFxuKi9cXG4vKlxcbiBCb3gtU2hhZG93c1xcbiovXFxuLypcXG4gIFRleHRzXFxuKi9cXG4vKlxcbiAgQ29sb3JzICBcXG4qL1xcbi8qXFxuICBGb250c1xcbiovXFxuLyoqXFxuICogU2NyZWVuIFNpemVzXFxuICovXFxuLyoqXFxuICogUmVnaXN0cm9zIGRvcyB6LWluZGV4ZXNcXG4gKiBPcmRlbSBkZWNyZXNjZW50ZVxcbiAqL1xcbi8qKlxcbiAqIFotaW5kZXhlc1xcbiAqL1xcbi5zdHlsZV9jb250YWluZXJfX01sNG1sIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDAuOGVtO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4uc3R5bGVfbGlzdF9fM2RrcHIge1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc3R5bGVfaXRlbV9fbi1OUGkge1xcbiAgY29sb3I6ICNjY2NjY2M7XFxuICBmb250LXNpemU6IC1tb3otY2FsYygxM3JlbSAvIDE2KTtcXG4gIGZvbnQtc2l6ZTogY2FsYygxM3JlbSAvIDE2KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG59XFxuXFxuLnN0eWxlX2lzQWN0aXZlX190NW9yRyB7XFxuICBjb2xvcjogI2ZmNzgwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4uLy4uL3N0eWxlcy9zZXR0aW5ncy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvc2V0dGluZ3MvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvc2V0dGluZ3MvX3NjcmVlbi1zaXplcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL3NldHRpbmdzL196LWluZGV4ZXMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy90b29scy9fZnVuY3Rpb25zLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBQTtBQUtBOztDQUFBO0FBT0E7O0NBQUE7QUFNQTs7Q0FBQTtBQUtBOztDQUFBO0FBTUE7O0NBQUE7QUFTQTs7Q0FBQTtBQ3RDQTs7Q0FBQTtBQ0FBOztFQUFBO0FDQUE7OztFQUFBO0FDSUE7O0VBQUE7QUNGQTtFQUNJLFdBQUE7RUFDQSx5QkxNUztFS0xULGNBQUE7RUFDQSxpREFBQTtVQUFBLHlDQUFBO0VBQ0EsYUFBQTtBQWlDSjs7QUEvQkE7RUFDSSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtPQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFBQSwwQkFBQTtPQUFBLHNCQUFBO0FBa0NKOztBQWhDQTtFQUNJLGNMb0JjO0VLbkJkLGdDQUFBO0VBQUEsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFtQ0o7O0FBakNBO0VBQ0ksY0xXVztBS3lCZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgQnJhbmQgIFxcbiovXFxuJGMtYnJhbmQ6ICNmZjZjMDA7XFxuXFxuLypcXG4gIEJhY2tncm91bmRcXG4qL1xcbiRjLWJnLWdyZXktbGlnaHQ6ICNlZWVlZWU7XFxuJGMtYmctZGFyazogIzM4MzkzNTtcXG4kYy1iZy1saWdodDogI2ZmZmZmZjtcXG5cXG4vKlxcbiAgQnV0dG9uc1xcbiovXFxuJGMtYnV0dG9uLWVuYWJsZTogJGMtYnJhbmQ7XFxuJGMtYnV0dG9uLWhvdmVyOiAjZDQ1YTAwO1xcblxcbi8qXFxuICBCb3JkZXJzXFxuKi9cXG4kYy1ib3JkZXItbGluZTogI2U1ZTVlNTtcXG5cXG4vKlxcbiBCb3gtU2hhZG93c1xcbiovXFxuJGMtYm94LWRhcms6ICMwZDBkMGQ7XFxuJGMtYm94LWxpZ2h0OiAjMjcyNjI2O1xcblxcbi8qXFxuICBUZXh0c1xcbiovXFxuJGMtdGV4dC1icmFuZDogI2ZmNzgwMDtcXG4kYy10ZXh0LWRhcms6ICMzODM5MzU7XFxuJGMtdGV4dC1saWdodDogI2ZmZmZmZjtcXG4kYy10ZXh0LWluYWN0aXZlOiAjY2NjY2NjO1xcbiRjLXRleHQtaGVhZGluZzogIzk5OTk5OTtcXG5cXG4vKlxcbiAgQ29sb3JzICBcXG4qL1xcbiRjLWljZTogI2Y1ZjVmNTtcXG4kYy1zaWx2ZXI6ICNlN2U3ZTc7XFxuJGMtZGFyay1taWRkbGU6ICM0ODQ3NDc7XFxuJGMtZ3JleTogI2FhYWFhYTtcXG4kYy1ncmV5LWRhcms6ICM4MDdmN2Y7XFxuJGMtZ3JleS1saWdodDogI2ZiZmJmYjtcXG4kYy13aGl0ZS1tZWRpdW06ICNmMGYwZjA7XFxuXCIsXCIvKlxcbiAgRm9udHNcXG4qL1xcblxcbiRmLW1haW46IEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbiRmLXN1cG9ydDogaGVsdmV0aWNhLCBoZWx2ZXRpY2EgbmV1ZSwgaGVsdmV0aWNhLCBzZXJpZjtcXG4kZi1zaXplLWJhc2U6IDE2O1xcblwiLFwiLyoqXFxuICogU2NyZWVuIFNpemVzXFxuICovXFxuJGJyZWFrcG9pbnRzOiAoXFxuICBcXFwic21hbGxQaG9uZVxcXCI6IDMwMHB4LFxcbiAgXFxcInBob25lXFxcIjogMzQwcHgsXFxuICBcXFwibGFyZ2VQaG9uZVxcXCI6IDQxMHB4LFxcbiAgXFxcInRhYmxldFxcXCI6IDc1MnB4LFxcbiAgXFxcImxhcHRvcFxcXCI6IDEwMjRweCxcXG4gIFxcXCJtb25pdG9yXFxcIjogMTQ0MXB4LFxcbiAgXFxcInR2XFxcIjogMTkyMHB4LFxcbiAgXFxcIm1vYmlsZVxcXCI6IDc1MXB4LFxcbiAgXFxcImRlc2t0b3BcXFwiOiA3NTJweCxcXG4pO1xcblwiLFwiLyoqXFxuICogUmVnaXN0cm9zIGRvcyB6LWluZGV4ZXNcXG4gKiBPcmRlbSBkZWNyZXNjZW50ZVxcbiAqL1xcbiR6LWluZGV4ZXM6ICgnbG9nbycsICdwcm9ncmVzc0JhcicpO1xcblwiLFwiQGZ1bmN0aW9uIHJlbSgkZm9udC1waXhlbCkge1xcbiAgQHJldHVybiBjYWxjKCN7JGZvbnQtcGl4ZWx9cmVtIC8gI3skZi1zaXplLWJhc2V9KTtcXG59XFxuXFxuLyoqXFxuICogWi1pbmRleGVzXFxuICovXFxuQGZ1bmN0aW9uIHooJG5hbWUpIHtcXG4gIEBpZiBpbmRleCgkei1pbmRleGVzLCAkbmFtZSkge1xcbiAgICAvLyBzdGFydHMgd2l0aCAxMDAwLCBpbiBjYXNlIG9mIGV4dGVybmFzIGxpYnNcXG4gICAgQHJldHVybiAobGVuZ3RoKCR6LWluZGV4ZXMpIC0gaW5kZXgoJHotaW5kZXhlcywgJG5hbWUpKSArIDEwMDA7XFxuICB9IEBlbHNlIHtcXG4gICAgQHdhcm4gJ1RoZXJlcyBpcyBubyBcXFwiI3skbmFtZX1cXFwiIGluIHRoZSB6LWluZGV4IGxpc3Q7IGNob29zZSBvbmUgb2YgdGhpcyBpdGVtczogI3skei1pbmRleGVzfSc7XFxuICAgIEByZXR1cm4gbnVsbDtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IFxcXCJzdHlsZXNcXFwiO1xcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGMtYmctbGlnaHQ7XFxuICAgIHBhZGRpbmc6IDAuOGVtO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgei1pbmRleDogeihwcm9ncmVzc0Jhcik7XFxufVxcbi5saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbSB7XFxuICAgIGNvbG9yOiAkYy10ZXh0LWluYWN0aXZlO1xcbiAgICBmb250LXNpemU6IHJlbSgxMyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcbn1cXG4uaXNBY3RpdmUge1xcbiAgICBjb2xvcjogJGMtdGV4dC1icmFuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVfY29udGFpbmVyX19NbDRtbFwiLFxuXHRcImxpc3RcIjogXCJzdHlsZV9saXN0X18zZGtwclwiLFxuXHRcIml0ZW1cIjogXCJzdHlsZV9pdGVtX19uLU5QaVwiLFxuXHRcImlzQWN0aXZlXCI6IFwic3R5bGVfaXNBY3RpdmVfX3Q1b3JHXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./src/components/Shelf/style.module.scss\n");

/***/ })

});