"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.tsx\");\n/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Work */ \"./src/components/Work.tsx\");\n/* harmony import */ var _components_Achievements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Achievements */ \"./src/components/Achievements.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(param) {\n    var projects = param.projects, repos = param.repos;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), resumeData = ref[0], setResumeData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch(\"/resumeData.json\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setResumeData(data);\n        });\n    }, []);\n    console.log(\"projects\", projects);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto flex w-full flex-col items-center justify-center bg-gray-100 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"bhawkinson\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/two.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Work__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                projects: projects\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Resume, {\n                //@ts-ignore\n                data: resumeData.resume\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Achievements__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.resume\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                //@ts-ignore\n                data: resumeData.main\n            }, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/private-website/src/pages/index.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, _this);\n}, \"bZvTV4UWTy+ePeavylPDvbKzupU=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ3NCO0FBQ1Q7QUFDQTtBQUVBO0FBS1k7OztBQWdFckQsK0RBQWUsbUJBQW1DO1FBQWhDUSxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsS0FBSyxTQUFMQSxLQUFLOztJQUMvQixJQUFvQ04sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQTNFbEQsVUEyRW1CLEdBQW1CQSxHQUFZLEdBQS9CLEVBM0VuQixhQTJFa0MsR0FBSUEsR0FBWSxHQUFoQjtJQUVoQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RVLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUN0QkMsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUJBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLFNBQUNHLElBQUksRUFBSztZQUNkTCxhQUFhLENBQUNLLElBQUksQ0FBQztTQUNwQixDQUFDO0tBQ0wsRUFBRSxFQUFFLENBQUM7SUFFTkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFVixRQUFRLENBQUM7SUFFakMscUJBQ0UsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVFQUF1RTs7MEJBQ3BGLDhEQUFDcEIsa0RBQUk7O2tDQUNILDhEQUFDcUIsT0FBSztrQ0FBQyxZQUFVOzs7Ozs2QkFBUTtrQ0FDekIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTs7Ozs7NkJBQUc7Ozs7OztxQkFDOUI7MEJBQ1AsOERBQUNwQiwwREFBTTs7OztxQkFBRzswQkFFViw4REFBQ0Usd0RBQVE7Z0JBQUNFLFFBQVEsRUFBRUEsUUFBUTs7Ozs7cUJBQUk7MEJBQ2hDLDhEQUFDaUIsTUFBTTtnQkFDTCxZQUFZO2dCQUNaVCxJQUFJLEVBQUVOLFVBQVUsQ0FBQ2dCLE1BQU07Ozs7O3FCQUN2QjswQkFLRiw4REFBQ25CLGdFQUFZO2dCQUNYLFlBQVk7Z0JBQ1pTLElBQUksRUFBRU4sVUFBVSxDQUFDZ0IsTUFBTTs7Ozs7cUJBQ3ZCOzBCQUtGLDhEQUFDckIsMERBQU07Z0JBQ0wsWUFBWTtnQkFDWlcsSUFBSSxFQUFFTixVQUFVLENBQUNpQixJQUFJOzs7OztxQkFDckI7Ozs7OzthQUNFLENBQ1A7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFNraWxscyBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscydcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1dvcmsnXG5pbXBvcnQgeyBBY2hpZXZlbWVudCwgTWFpbiwgUHJvamVjdCB9IGZyb20gJy4uLy4uL3R5cGluZ3MnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQgeyBmZXRjaFJlcG9zLCBSZXBvIH0gZnJvbSAnLi4vY29yZS9naXRodWInXG5pbXBvcnQgQWNoaWV2ZW1lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvQWNoaWV2ZW1lbnRzJ1xuXG5pbnRlcmZhY2UgQXBwUHJvcHMge1xuICBtYWluOiBNYWluW11cbiAgYWNoaWV2ZW1lbnRzOiBBY2hpZXZlbWVudFtdXG4gIHByb2plY3RzOiBQcm9qZWN0W11cbiAgcmVwb3M6IHtcbiAgICBzdGFycmVkUmVwb3M6IFJlcG9bXVxuICAgIGNvbnRyaWJ1dGVkUmVwb3M6IFJlcG9bXVxuICB9XG4gIGltYWdlczogYW55XG59XG5cbmNvbnN0IGltYWdlc0FycmF5ID0gW1xuICB7XG4gICAgaWQ6IDAsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BvcnRmb2xpby9wb2gucG5nJyxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3J0Zm9saW8vN3MuZ2lmJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3J0Zm9saW8vaW5zdGFncmFtLmpwZWcnLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BvcnRmb2xpby93aW5zb21lLXRlbmxleS5wbmcnLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BvcnRmb2xpby9zcGVjdG8tYmxhY2sucG5nJyxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIGltYWdlOiAnL2ltYWdlcy9wb3J0Zm9saW8vc3BlY3RvLWJsYWNrLnBuZycsXG4gIH0sXG5dXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcnKVxuICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVkLmpzb24oKVxuXG4gIGNvbnN0IFtwcm9qZWN0c10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZmV0Y2hSZXBvcyhjb25maWcuZ2l0aHViVXNlcm5hbWUsIGNvbmZpZy5naXRodWJUb2tlbiksXG4gIF0pXG5cbiAgY29uc3QgbmV3UHJvamVjdHMgPSBwcm9qZWN0cy5jb250cmlidXRlZFJlcG9zLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4ucHJvamVjdCxcbiAgICAgIGltYWdlOiBpbWFnZXNBcnJheVtpbmRleF0sXG4gICAgfVxuICB9KVxuICBjb25zb2xlLmxvZygncHJvamVjdHMnLCBuZXdQcm9qZWN0cylcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9qZWN0czogbmV3UHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0KSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHByb2plY3RzLCByZXBvcyB9OiBBcHBQcm9wcykgPT4ge1xuICBjb25zdCBbcmVzdW1lRGF0YSwgc2V0UmVzdW1lRGF0YV0gPSB1c2VTdGF0ZSh7fSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvcmVzdW1lRGF0YS5qc29uJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRSZXN1bWVEYXRhKGRhdGEpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBjb25zb2xlLmxvZygncHJvamVjdHMnLCBwcm9qZWN0cylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS0xMDAgXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPmJoYXdraW5zb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90d28ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgPFByb2plY3RzIHByb2plY3RzPXtwcm9qZWN0c30gLz5cbiAgICAgIDxSZXN1bWVcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEucmVzdW1lfVxuICAgICAgLz5cbiAgICAgIHsvKiA8VGVzdGltb25pYWxzXG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLnRlc3RpbW9uaWFsc31cbiAgICAgIC8+ICovfVxuICAgICAgPEFjaGlldmVtZW50c1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgZGF0YT17cmVzdW1lRGF0YS5yZXN1bWV9XG4gICAgICAvPlxuICAgICAgey8qIDxDb250YWN0XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBkYXRhPXtyZXN1bWVEYXRhLm1haW59XG4gICAgICAvPiAqL31cbiAgICAgIDxGb290ZXJcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGRhdGE9e3Jlc3VtZURhdGEubWFpbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIkZvb3RlciIsIlByb2plY3RzIiwiQWNoaWV2ZW1lbnRzIiwicHJvamVjdHMiLCJyZXBvcyIsInJlc3VtZURhdGEiLCJzZXRSZXN1bWVEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIlJlc3VtZSIsInJlc3VtZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});