"use strict";
<<<<<<< HEAD
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return Error;\n    }\n}));\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react\"));\nconst _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! ../shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps(param) {\n    let { res , err  } = param;\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nconst styles = {\n    error: {\n        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52\n        fontFamily: 'system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: \"0 20px 0 0\",\n        paddingRight: 23,\n        fontSize: 24,\n        fontWeight: 500,\n        verticalAlign: \"top\",\n        lineHeight: \"49px\"\n    },\n    h2: {\n        fontSize: 14,\n        fontWeight: 400,\n        lineHeight: \"49px\",\n        margin: 0\n    }\n};\nclass Error extends _react.default.Component {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? statusCode + \": \" + title : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                /* CSS minified from\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ${\n                  withDarkMode\n                    ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }`\n                    : ''\n                }\n               */ __html: \"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}\" + (withDarkMode ? \"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}\" : \"\")\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\n(()=>{\n    Error.displayName = \"ErrorPage\";\n})();\n(()=>{\n    Error.getInitialProps = _getInitialProps;\n})();\n(()=>{\n    Error.origGetInitialProps = _getInitialProps;\n})();\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGSCwyQ0FBMEM7SUFDdENJLFlBQVksSUFBSTtJQUNoQkMsS0FBSyxXQUFXO1FBQ1osT0FBT0M7SUFDWDtBQUNKLENBQUMsRUFBQztBQUNGLE1BQU1DLDJCQUEyQkMsbUJBQU9BLENBQUMsK0hBQXlDO0FBQ2xGLE1BQU1DLFNBQVMsV0FBVyxHQUFHRix5QkFBeUJHLENBQUMsQ0FBQ0YsbUJBQU9BLENBQUMsb0JBQU87QUFDdkUsTUFBTUcsUUFBUSxXQUFXLEdBQUdKLHlCQUF5QkcsQ0FBQyxDQUFDRixtQkFBT0EsQ0FBQyx1RUFBb0I7QUFDbkYsTUFBTUksY0FBYztJQUNoQixLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0FBQ1Q7QUFDQSxTQUFTQyxpQkFBaUJDLEtBQUssRUFBRTtJQUM3QixJQUFJLEVBQUVDLElBQUcsRUFBR0MsSUFBRyxFQUFHLEdBQUdGO0lBQ3JCLE1BQU1HLGFBQWFGLE9BQU9BLElBQUlFLFVBQVUsR0FBR0YsSUFBSUUsVUFBVSxHQUFHRCxNQUFNQSxJQUFJQyxVQUFVLEdBQUcsR0FBRztJQUN0RixPQUFPO1FBQ0hBO0lBQ0o7QUFDSjtBQUNBLE1BQU1DLFNBQVM7SUFDWEMsT0FBTztRQUNILDBGQUEwRjtRQUMxRkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFdBQVc7UUFDWEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsZ0JBQWdCO0lBQ3BCO0lBQ0FDLE1BQU07UUFDRkosU0FBUztRQUNURCxXQUFXO0lBQ2Y7SUFDQU0sSUFBSTtRQUNBTCxTQUFTO1FBQ1RNLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxVQUFVO1FBQ1ZDLFlBQVk7UUFDWkMsZUFBZTtRQUNmQyxZQUFZO0lBQ2hCO0lBQ0FDLElBQUk7UUFDQUosVUFBVTtRQUNWQyxZQUFZO1FBQ1pFLFlBQVk7UUFDWkwsUUFBUTtJQUNaO0FBQ0o7QUFDQSxNQUFNdkIsY0FBY0csT0FBTzJCLE9BQU8sQ0FBQ0MsU0FBUztJQUN4Q0MsU0FBUztRQUNMLE1BQU0sRUFBRXJCLFdBQVUsRUFBR3NCLGNBQWMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBQ3ZELE1BQU1DLFFBQVEsSUFBSSxDQUFDRCxLQUFLLENBQUNDLEtBQUssSUFBSTdCLFdBQVcsQ0FBQ0ssV0FBVyxJQUFJO1FBQzdELE9BQU8sV0FBVyxHQUFHUixPQUFPMkIsT0FBTyxDQUFDTSxhQUFhLENBQUMsT0FBTztZQUNyREMsT0FBT3pCLE9BQU9DLEtBQUs7UUFDdkIsR0FBRyxXQUFXLEdBQUdWLE9BQU8yQixPQUFPLENBQUNNLGFBQWEsQ0FBQy9CLE1BQU15QixPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsR0FBRzNCLE9BQU8yQixPQUFPLENBQUNNLGFBQWEsQ0FBQyxTQUFTLElBQUksRUFBRXpCLGFBQWFBLGFBQWEsT0FBT3dCLFFBQVEseURBQXlELElBQUksV0FBVyxHQUFHaEMsT0FBTzJCLE9BQU8sQ0FBQ00sYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFLFdBQVcsR0FBR2pDLE9BQU8yQixPQUFPLENBQUNNLGFBQWEsQ0FBQyxTQUFTO1lBQzNVRSx5QkFBeUI7Z0JBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7O2VBZ0JELEdBQUdDLFFBQVEsbUdBQW9HTixDQUFBQSxlQUFlLG9JQUFvSSxFQUFFO1lBQ3ZRO1FBQ0osSUFBSXRCLGFBQWEsV0FBVyxHQUFHUixPQUFPMkIsT0FBTyxDQUFDTSxhQUFhLENBQUMsTUFBTTtZQUM5REksV0FBVztZQUNYSCxPQUFPekIsT0FBT1UsRUFBRTtRQUNwQixHQUFHWCxjQUFjLElBQUksRUFBRSxXQUFXLEdBQUdSLE9BQU8yQixPQUFPLENBQUNNLGFBQWEsQ0FBQyxPQUFPO1lBQ3JFQyxPQUFPekIsT0FBT1MsSUFBSTtRQUN0QixHQUFHLFdBQVcsR0FBR2xCLE9BQU8yQixPQUFPLENBQUNNLGFBQWEsQ0FBQyxNQUFNO1lBQ2hEQyxPQUFPekIsT0FBT2lCLEVBQUU7UUFDcEIsR0FBRyxJQUFJLENBQUNLLEtBQUssQ0FBQ0MsS0FBSyxJQUFJeEIsYUFBYXdCLFFBQVEsV0FBVyxHQUFHaEMsT0FBTzJCLE9BQU8sQ0FBQ00sYUFBYSxDQUFDakMsT0FBTzJCLE9BQU8sQ0FBQ1csUUFBUSxFQUFFLElBQUksRUFBRSx5R0FBeUcsRUFBRTtJQUNyTztBQUNKO0FBQ0MsS0FBSTtJQUNEekMsTUFBTTBDLFdBQVcsR0FBRztBQUN4QjtBQUNDLEtBQUk7SUFDRDFDLE1BQU0yQyxlQUFlLEdBQUdwQztBQUM1QjtBQUNDLEtBQUk7SUFDRFAsTUFBTTRDLG1CQUFtQixHQUFHckM7QUFDaEM7QUFFQSxJQUFJLENBQUMsT0FBT1gsUUFBUWtDLE9BQU8sS0FBSyxjQUFlLE9BQU9sQyxRQUFRa0MsT0FBTyxLQUFLLFlBQVlsQyxRQUFRa0MsT0FBTyxLQUFLLElBQUksS0FBTSxPQUFPbEMsUUFBUWtDLE9BQU8sQ0FBQ2UsVUFBVSxLQUFLLGFBQWE7SUFDcktuRCxPQUFPQyxjQUFjLENBQUNDLFFBQVFrQyxPQUFPLEVBQUUsY0FBYztRQUFFakMsT0FBTyxJQUFJO0lBQUM7SUFDbkVILE9BQU9vRCxNQUFNLENBQUNsRCxRQUFRa0MsT0FBTyxFQUFFbEM7SUFDL0JtRCxPQUFPbkQsT0FBTyxHQUFHQSxRQUFRa0MsT0FBTztBQUNsQyxDQUFDLENBRUQsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheWJvb2stbW9kaWZpZWQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcz8xOGYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gRXJyb3I7XG4gICAgfVxufSk7XG5jb25zdCBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0XCIpO1xuY29uc3QgX3JlYWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgX2hlYWQgPSAvKiNfX1BVUkVfXyovIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5fKHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XG4gICAgNDAwOiBcIkJhZCBSZXF1ZXN0XCIsXG4gICAgNDA0OiBcIlRoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmRcIixcbiAgICA0MDU6IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCIsXG4gICAgNTAwOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiXG59O1xuZnVuY3Rpb24gX2dldEluaXRpYWxQcm9wcyhwYXJhbSkge1xuICAgIGxldCB7IHJlcyAsIGVyciAgfSA9IHBhcmFtO1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGVcbiAgICB9O1xufVxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGVycm9yOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9ibG9iL21haW4vbW9kZXJuLW5vcm1hbGl6ZS5jc3MjTDM4LUw1MlxuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLFwiU2Vnb2UgVUlcIixSb2JvdG8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIicsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgIH0sXG4gICAgZGVzYzoge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICBtYXJnaW46IFwiMCAyMHB4IDAgMFwiLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IDIzLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogXCJ0b3BcIixcbiAgICAgICAgbGluZUhlaWdodDogXCI0OXB4XCJcbiAgICB9LFxuICAgIGgyOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQ5cHhcIixcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgfVxufTtcbmNsYXNzIEVycm9yIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSAsIHdpdGhEYXJrTW9kZSA9dHJ1ZSAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXSB8fCBcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkXCI7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IHN0YXR1c0NvZGUgKyBcIjogXCIgKyB0aXRsZSA6IFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZFwiKSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIC8qIENTUyBtaW5pZmllZCBmcm9tXG4gICAgICAgICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgY29sb3I6ICMwMDA7IGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgd2l0aERhcmtNb2RlXG4gICAgICAgICAgICAgICAgICAgID8gYEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxuICAgICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgKi8gX19odG1sOiBcImJvZHl7Y29sb3I6IzAwMDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luOjB9Lm5leHQtZXJyb3ItaDF7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCByZ2JhKDAsMCwwLC4zKX1cIiArICh3aXRoRGFya01vZGUgPyBcIkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6ZGFyayl7Ym9keXtjb2xvcjojZmZmO2JhY2tncm91bmQ6IzAwMH0ubmV4dC1lcnJvci1oMXtib3JkZXItcmlnaHQ6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpfX1cIiA6IFwiXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm5leHQtZXJyb3ItaDFcIixcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSk7XG4gICAgfVxufVxuKCgpPT57XG4gICAgRXJyb3IuZGlzcGxheU5hbWUgPSBcIkVycm9yUGFnZVwiO1xufSkoKTtcbigoKT0+e1xuICAgIEVycm9yLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG59KSgpO1xuKCgpPT57XG4gICAgRXJyb3Iub3JpZ0dldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG59KSgpO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZXJyb3IuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsIkVycm9yIiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl8iLCJfaGVhZCIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInBhcmFtIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsInN0eWxlcyIsImVycm9yIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZGVzYyIsImgxIiwibWFyZ2luIiwicGFkZGluZ1JpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidmVydGljYWxBbGlnbiIsImxpbmVIZWlnaHQiLCJoMiIsImRlZmF1bHQiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ3aXRoRGFya01vZGUiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIl9fZXNNb2R1bGUiLCJhc3NpZ24iLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/head.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/head.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\"use client\";\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    defaultHead: function() {\n        return defaultHead;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _interop_require_wildcard = __webpack_require__(/*! @swc/helpers/_/_interop_require_wildcard */ \"./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(/*! react */ \"react\"));\nconst _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! ./side-effect */ \"./side-effect\"));\nconst _ampcontext = __webpack_require__(/*! ./amp-context */ \"./amp-context\");\nconst _headmanagercontext = __webpack_require__(/*! ./head-manager-context */ \"../shared/lib/head-manager-context\");\nconst _ampmode = __webpack_require__(/*! ./amp-mode */ \"./amp-mode\");\nconst _warnonce = __webpack_require__(/*! ./utils/warn-once */ \"./utils/warn-once\");\nfunction defaultHead(inAmpMode) {\n    if (inAmpMode === void 0) inAmpMode = false;\n    const head = [\n        /*#__PURE__*/ _react.default.createElement(\"meta\", {\n            charSet: \"utf-8\"\n        })\n    ];\n    if (!inAmpMode) {\n        head.push(/*#__PURE__*/ _react.default.createElement(\"meta\", {\n            name: \"viewport\",\n            content: \"width=device-width\"\n        }));\n    }\n    return head;\n}\nfunction onlyReactElement(list, child) {\n    // React children can be \"string\" or \"number\" in this case we ignore them for backwards compat\n    if (typeof child === \"string\" || typeof child === \"number\") {\n        return list;\n    }\n    // Adds support for React.Fragment\n    if (child.type === _react.default.Fragment) {\n        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{\n            if (typeof fragmentChild === \"string\" || typeof fragmentChild === \"number\") {\n                return fragmentList;\n            }\n            return fragmentList.concat(fragmentChild);\n        }, []));\n    }\n    return list.concat(child);\n}\nconst METATYPES = [\n    \"name\",\n    \"httpEquiv\",\n    \"charSet\",\n    \"itemProp\"\n];\n/*\n returns a function for filtering head child elements\n which shouldn't be duplicated, like <title/>\n Also adds support for deduplicated `key` properties\n*/ function unique() {\n    const keys = new Set();\n    const tags = new Set();\n    const metaTypes = new Set();\n    const metaCategories = {};\n    return (h)=>{\n        let isUnique = true;\n        let hasKey = false;\n        if (h.key && typeof h.key !== \"number\" && h.key.indexOf(\"$\") > 0) {\n            hasKey = true;\n            const key = h.key.slice(h.key.indexOf(\"$\") + 1);\n            if (keys.has(key)) {\n                isUnique = false;\n            } else {\n                keys.add(key);\n            }\n        }\n        // eslint-disable-next-line default-case\n        switch(h.type){\n            case \"title\":\n            case \"base\":\n                if (tags.has(h.type)) {\n                    isUnique = false;\n                } else {\n                    tags.add(h.type);\n                }\n                break;\n            case \"meta\":\n                for(let i = 0, len = METATYPES.length; i < len; i++){\n                    const metatype = METATYPES[i];\n                    if (!h.props.hasOwnProperty(metatype)) continue;\n                    if (metatype === \"charSet\") {\n                        if (metaTypes.has(metatype)) {\n                            isUnique = false;\n                        } else {\n                            metaTypes.add(metatype);\n                        }\n                    } else {\n                        const category = h.props[metatype];\n                        const categories = metaCategories[metatype] || new Set();\n                        if ((metatype !== \"name\" || !hasKey) && categories.has(category)) {\n                            isUnique = false;\n                        } else {\n                            categories.add(category);\n                            metaCategories[metatype] = categories;\n                        }\n                    }\n                }\n                break;\n        }\n        return isUnique;\n    };\n}\n/**\n *\n * @param headChildrenElements List of children of <Head>\n */ function reduceComponents(headChildrenElements, props) {\n    const { inAmpMode  } = props;\n    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{\n        const key = c.key || i;\n        if (false) {}\n        if (true) {\n            // omit JSON-LD structured data snippets from the warning\n            if (c.type === \"script\" && c.props[\"type\"] !== \"application/ld+json\") {\n                const srcMessage = c.props[\"src\"] ? '<script> tag with src=\"' + c.props[\"src\"] + '\"' : \"inline <script>\";\n                (0, _warnonce.warnOnce)(\"Do not add <script> tags using next/head (see \" + srcMessage + \"). Use next/script instead. \\nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component\");\n            } else if (c.type === \"link\" && c.props[\"rel\"] === \"stylesheet\") {\n                (0, _warnonce.warnOnce)('Do not add stylesheets using next/head (see <link rel=\"stylesheet\"> tag with href=\"' + c.props[\"href\"] + '\"). Use Document instead. \\nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component');\n            }\n        }\n        return /*#__PURE__*/ _react.default.cloneElement(c, {\n            key\n        });\n    });\n}\n/**\n * This component injects elements to `<head>` of your page.\n * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.\n */ function Head(param) {\n    let { children  } = param;\n    const ampState = (0, _react.useContext)(_ampcontext.AmpStateContext);\n    const headManager = (0, _react.useContext)(_headmanagercontext.HeadManagerContext);\n    return /*#__PURE__*/ _react.default.createElement(_sideeffect.default, {\n        reduceComponentsToState: reduceComponents,\n        headManager: headManager,\n        inAmpMode: (0, _ampmode.isInAmpMode)(ampState)\n    }, children);\n}\nconst _default = Head;\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=head.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFDYTtBQURiO0FBRUFBLDhDQUE2QztJQUN6Q0csT0FBTyxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0YsS0FBTUMsQ0FBQUEsQ0FHTjtBQUNBLFNBQVNHLFFBQVFDLE1BQU0sRUFBRUMsR0FBRyxFQUFFO0lBQzFCLElBQUksSUFBSUMsUUFBUUQsSUFBSVQsT0FBT0MsY0FBYyxDQUFDTyxRQUFRRSxNQUFNO1FBQ3BEQyxZQUFZLElBQUk7UUFDaEJDLEtBQUtILEdBQUcsQ0FBQ0MsS0FBSztJQUNsQjtBQUNKO0FBQ0FILFFBQVFMLFNBQVM7SUFDYkcsYUFBYSxXQUFXO1FBQ3BCLE9BQU9BO0lBQ1g7SUFDQUMsU0FBUyxXQUFXO1FBQ2hCLE9BQU9PO0lBQ1g7QUFDSjtBQUNBLE1BQU1DLDJCQUEyQkMsbUJBQU9BLENBQUMsK0hBQXlDO0FBQ2xGLE1BQU1DLDRCQUE0QkQsbUJBQU9BLENBQUMsaUlBQTBDO0FBQ3BGLE1BQU1FLFNBQVMsV0FBVyxHQUFHRCwwQkFBMEJFLENBQUMsQ0FBQ0gsbUJBQU9BLENBQUMsb0JBQU87QUFDeEUsTUFBTUksY0FBYyxXQUFXLEdBQUdMLHlCQUF5QkksQ0FBQyxDQUFDSCxtQkFBT0EsQ0FBQyxvQ0FBZTtBQUNwRixNQUFNSyxjQUFjTCxtQkFBT0EsQ0FBQyxvQ0FBZTtBQUMzQyxNQUFNTSxzQkFBc0JOLG1CQUFPQSxDQUFDLGtFQUF3QjtBQUM1RCxNQUFNTyxXQUFXUCxtQkFBT0EsQ0FBQyw4QkFBWTtBQUNyQyxNQUFNUSxZQUFZUixtQkFBT0EsQ0FBQyw0Q0FBbUI7QUFFN0MsU0FBU1YsWUFBWW1CLFNBQVMsRUFBRTtJQUM1QixJQUFJQSxjQUFjLEtBQUssR0FBR0EsWUFBWSxLQUFLO0lBQzNDLE1BQU1DLE9BQU87UUFDVCxXQUFXLEdBQUdSLE9BQU9YLE9BQU8sQ0FBQ29CLGFBQWEsQ0FBQyxRQUFRO1lBQy9DQyxTQUFTO1FB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LENBQUN5RSxZQUFZLENBQUNULEdBQUc7WUFDaERqQjtRQUNKO0lBQ0o7QUFDSjtBQUNBOzs7Q0FHQyxHQUFHLFNBQVM2QixLQUFLQyxLQUFLLEVBQUU7SUFDckIsSUFBSSxFQUFFNUMsU0FBUSxFQUFHLEdBQUc0QztJQUNwQixNQUFNQyxXQUFXLENBQUMsR0FBR25FLE9BQU9vRSxVQUFVLEVBQUVqRSxZQUFZa0UsZUFBZTtJQUNuRSxNQUFNQyxjQUFjLENBQUMsR0FBR3RFLE9BQU9vRSxVQUFVLEVBQUVoRSxvQkFBb0JtRSxrQkFBa0I7SUFDakYsT0FBTyxXQUFXLEdBQUd2RSxPQUFPWCxPQUFPLENBQUNvQixhQUFhLENBQUNQLFlBQVliLE9BQU8sRUFBRTtRQUNuRW1GLHlCQUF5QnhCO1FBQ3pCc0IsYUFBYUE7UUFDYi9ELFdBQVcsQ0FBQyxHQUFHRixTQUFTb0UsV0FBVyxFQUFFTjtJQUN6QyxHQUFHN0M7QUFDUDtBQUNBLE1BQU0xQixXQUFXcUU7QUFFakIsSUFBSSxDQUFDLE9BQU9oRixRQUFRSSxPQUFPLEtBQUssY0FBZSxPQUFPSixRQUFRSSxPQUFPLEtBQUssWUFBWUosUUFBUUksT0FBTyxLQUFLLElBQUksS0FBTSxPQUFPSixRQUFRSSxPQUFPLENBQUNxRixVQUFVLEtBQUssYUFBYTtJQUNySzNGLE9BQU9DLGNBQWMsQ0FBQ0MsUUFBUUksT0FBTyxFQUFFLGNBQWM7UUFBRUgsT0FBTyxJQUFJO0lBQUM7SUFDbkVILE9BQU80RixNQUFNLENBQUMxRixRQUFRSSxPQUFPLEVBQUVKO0lBQy9CRSxPQUFPRixPQUFPLEdBQUdBLFFBQVFJLE9BQU87QUFDbEMsQ0FBQyxDQUVELGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXlib29rLW1vZGlmaWVkLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanM/ZmI1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuMCAmJiAobW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdEhlYWQ6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBkZWZhdWx0SGVhZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0SGVhZDtcbiAgICB9LFxuICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxufSk7XG5jb25zdCBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0XCIpO1xuY29uc3QgX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvXy9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkXCIpO1xuY29uc3QgX3JlYWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLl8ocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IF9zaWRlZWZmZWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwiLi9zaWRlLWVmZmVjdFwiKSk7XG5jb25zdCBfYW1wY29udGV4dCA9IHJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO1xuY29uc3QgX2hlYWRtYW5hZ2VyY29udGV4dCA9IHJlcXVpcmUoXCIuL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO1xuY29uc3QgX2FtcG1vZGUgPSByZXF1aXJlKFwiLi9hbXAtbW9kZVwiKTtcbmNvbnN0IF93YXJub25jZSA9IHJlcXVpcmUoXCIuL3V0aWxzL3dhcm4tb25jZVwiKTtcblxuZnVuY3Rpb24gZGVmYXVsdEhlYWQoaW5BbXBNb2RlKSB7XG4gICAgaWYgKGluQW1wTW9kZSA9PT0gdm9pZCAwKSBpbkFtcE1vZGUgPSBmYWxzZTtcbiAgICBjb25zdCBoZWFkID0gW1xuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGNoYXJTZXQ6IFwidXRmLThcIlxuICAgICAgICB9KVxuICAgIF07XG4gICAgaWYgKCFpbkFtcE1vZGUpIHtcbiAgICAgICAgaGVhZC5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkO1xufVxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChsaXN0LCBjaGlsZCkge1xuICAgIC8vIFJlYWN0IGNoaWxkcmVuIGNhbiBiZSBcInN0cmluZ1wiIG9yIFwibnVtYmVyXCIgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVtIGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgY2hpbGQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICAgIC8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbiAgICBpZiAoY2hpbGQudHlwZSA9PT0gX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QuY29uY2F0KC8vIEB0cy1leHBlY3QtZXJyb3IgQHR5cGVzL3JlYWN0IGRvZXMgbm90IHJlbW92ZSBmcmFnbWVudHMgYnV0IHRoaXMgY291bGQgYWxzbyByZXR1cm4gUmVhY3RQb3J0YWxbXVxuICAgICAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoLy8gQHRzLWV4cGVjdC1lcnJvciBAdHlwZXMvcmVhY3QgZG9lcyBub3QgcmVtb3ZlIGZyYWdtZW50cyBidXQgdGhpcyBjb3VsZCBhbHNvIHJldHVybiBSZWFjdFBvcnRhbFtdXG4gICAgICAgIChmcmFnbWVudExpc3QsIGZyYWdtZW50Q2hpbGQpPT57XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7XG4gICAgICAgIH0sIFtdKSk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7XG59XG5jb25zdCBNRVRBVFlQRVMgPSBbXG4gICAgXCJuYW1lXCIsXG4gICAgXCJodHRwRXF1aXZcIixcbiAgICBcImNoYXJTZXRcIixcbiAgICBcIml0ZW1Qcm9wXCJcbl07XG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi8gZnVuY3Rpb24gdW5pcXVlKCkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgdGFncyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgbWV0YUNhdGVnb3JpZXMgPSB7fTtcbiAgICByZXR1cm4gKGgpPT57XG4gICAgICAgIGxldCBpc1VuaXF1ZSA9IHRydWU7XG4gICAgICAgIGxldCBoYXNLZXkgPSBmYWxzZTtcbiAgICAgICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gXCJudW1iZXJcIiAmJiBoLmtleS5pbmRleE9mKFwiJFwiKSA+IDApIHtcbiAgICAgICAgICAgIGhhc0tleSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKFwiJFwiKSArIDEpO1xuICAgICAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoKGgudHlwZSl7XG4gICAgICAgICAgICBjYXNlIFwidGl0bGVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJiYXNlXCI6XG4gICAgICAgICAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWdzLmFkZChoLnR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZXRhXCI6XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMCwgbGVuID0gTUVUQVRZUEVTLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWV0YXR5cGUgPSBNRVRBVFlQRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0YXR5cGUgPT09IFwiY2hhclNldFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09IFwibmFtZVwiIHx8ICFoYXNLZXkpICYmIGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1VuaXF1ZTtcbiAgICB9O1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRDaGlsZHJlbkVsZW1lbnRzIExpc3Qgb2YgY2hpbGRyZW4gb2YgPEhlYWQ+XG4gKi8gZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhoZWFkQ2hpbGRyZW5FbGVtZW50cywgcHJvcHMpIHtcbiAgICBjb25zdCB7IGluQW1wTW9kZSAgfSA9IHByb3BzO1xuICAgIHJldHVybiBoZWFkQ2hpbGRyZW5FbGVtZW50cy5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pLnJldmVyc2UoKS5jb25jYXQoZGVmYXVsdEhlYWQoaW5BbXBNb2RlKS5yZXZlcnNlKCkpLmZpbHRlcih1bmlxdWUoKSkucmV2ZXJzZSgpLm1hcCgoYywgaSk9PntcbiAgICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCIgJiYgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJocmVmXCJdICYmIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3NcIixcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L1wiXG4gICAgICAgICAgICBdLnNvbWUoKHVybCk9PmMucHJvcHNbXCJocmVmXCJdLnN0YXJ0c1dpdGgodXJsKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYy5wcm9wcyB8fCB7fVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJkYXRhLWhyZWZcIl0gPSBuZXdQcm9wc1tcImhyZWZcIl07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbXCJocmVmXCJdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1tcImRhdGEtb3B0aW1pemVkLWZvbnRzXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICAvLyBvbWl0IEpTT04tTEQgc3RydWN0dXJlZCBkYXRhIHNuaXBwZXRzIGZyb20gdGhlIHdhcm5pbmdcbiAgICAgICAgICAgIGlmIChjLnR5cGUgPT09IFwic2NyaXB0XCIgJiYgYy5wcm9wc1tcInR5cGVcIl0gIT09IFwiYXBwbGljYXRpb24vbGQranNvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjTWVzc2FnZSA9IGMucHJvcHNbXCJzcmNcIl0gPyAnPHNjcmlwdD4gdGFnIHdpdGggc3JjPVwiJyArIGMucHJvcHNbXCJzcmNcIl0gKyAnXCInIDogXCJpbmxpbmUgPHNjcmlwdD5cIjtcbiAgICAgICAgICAgICAgICAoMCwgX3dhcm5vbmNlLndhcm5PbmNlKShcIkRvIG5vdCBhZGQgPHNjcmlwdD4gdGFncyB1c2luZyBuZXh0L2hlYWQgKHNlZSBcIiArIHNyY01lc3NhZ2UgKyBcIikuIFVzZSBuZXh0L3NjcmlwdCBpbnN0ZWFkLiBcXG5TZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25vLXNjcmlwdC10YWdzLWluLWhlYWQtY29tcG9uZW50XCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjLnR5cGUgPT09IFwibGlua1wiICYmIGMucHJvcHNbXCJyZWxcIl0gPT09IFwic3R5bGVzaGVldFwiKSB7XG4gICAgICAgICAgICAgICAgKDAsIF93YXJub25jZS53YXJuT25jZSkoJ0RvIG5vdCBhZGQgc3R5bGVzaGVldHMgdXNpbmcgbmV4dC9oZWFkIChzZWUgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiPiB0YWcgd2l0aCBocmVmPVwiJyArIGMucHJvcHNbXCJocmVmXCJdICsgJ1wiKS4gVXNlIERvY3VtZW50IGluc3RlYWQuIFxcblNlZSBtb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tc3R5bGVzaGVldHMtaW4taGVhZC1jb21wb25lbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYywge1xuICAgICAgICAgICAga2V5XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqLyBmdW5jdGlvbiBIZWFkKHBhcmFtKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gIH0gPSBwYXJhbTtcbiAgICBjb25zdCBhbXBTdGF0ZSA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2FtcGNvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtcbiAgICBjb25zdCBoZWFkTWFuYWdlciA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRtYW5hZ2VyY29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NpZGVlZmZlY3QuZGVmYXVsdCwge1xuICAgICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogcmVkdWNlQ29tcG9uZW50cyxcbiAgICAgICAgaGVhZE1hbmFnZXI6IGhlYWRNYW5hZ2VyLFxuICAgICAgICBpbkFtcE1vZGU6ICgwLCBfYW1wbW9kZS5pc0luQW1wTW9kZSkoYW1wU3RhdGUpXG4gICAgfSwgY2hpbGRyZW4pO1xufVxuY29uc3QgX2RlZmF1bHQgPSBIZWFkO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm1vZHVsZSIsImRlZmF1bHRIZWFkIiwiZGVmYXVsdCIsIl9leHBvcnQiLCJ0YXJnZXQiLCJhbGwiLCJuYW1lIiwiZW51bWVyYWJsZSIsImdldCIsIl9kZWZhdWx0IiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQiLCJfcmVhY3QiLCJfIiwiX3NpZGVlZmZlY3QiLCJfYW1wY29udGV4dCIsIl9oZWFkbWFuYWdlcmNvbnRleHQiLCJfYW1wbW9kZSIsIl93YXJub25jZSIsImluQW1wTW9kZSIsImhlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2hhclNldCIsInB1c2giLCJjb250ZW50Iiwib25seVJlYWN0RWxlbWVudCIsImxpc3QiLCJjaGlsZCIsInR5cGUiLCJGcmFnbWVudCIsImNvbmNhdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInByb3BzIiwiY2hpbGRyZW4iLCJyZWR1Y2UiLCJmcmFnbWVudExpc3QiLCJmcmFnbWVudENoaWxkIiwiTUVUQVRZUEVTIiwidW5pcXVlIiwia2V5cyIsIlNldCIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImhhc0tleSIsImtleSIsImluZGV4T2YiLCJzbGljZSIsImhhcyIsImFkZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJtZXRhdHlwZSIsImhhc093blByb3BlcnR5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRDaGlsZHJlbkVsZW1lbnRzIiwicmV2ZXJzZSIsImZpbHRlciIsIm1hcCIsImMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX09QVElNSVpFX0ZPTlRTIiwic29tZSIsInVybCIsInN0YXJ0c1dpdGgiLCJuZXdQcm9wcyIsInVuZGVmaW5lZCIsImNsb25lRWxlbWVudCIsInNyY01lc3NhZ2UiLCJ3YXJuT25jZSIsIkhlYWQiLCJwYXJhbSIsImFtcFN0YXRlIiwidXNlQ29udGV4dCIsIkFtcFN0YXRlQ29udGV4dCIsImhlYWRNYW5hZ2VyIiwiSGVhZE1hbmFnZXJDb250ZXh0IiwicmVkdWNlQ29tcG9uZW50c1RvU3RhdGUiLCJpc0luQW1wTW9kZSIsIl9fZXNNb2R1bGUiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/shared/lib/head.js\n");

/***/ }),

/***/ "./amp-context":
/*!******************************************************!*\
  !*** external "next/dist/shared/lib/amp-context.js" ***!
  \******************************************************/
=======
(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 3499:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return Error;
    }
}));
const _interop_require_default = __webpack_require__(5577);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6689));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2636));
const statusCodes = {
    400: "Bad Request",
    404: "This page could not be found",
    405: "Method Not Allowed",
    500: "Internal Server Error"
};
function _getInitialProps(param) {
    let { res , err  } = param;
    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
}
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block",
        textAlign: "left"
    },
    h1: {
        display: "inline-block",
        margin: "0 20px 0 0",
        paddingRight: 23,
        fontSize: 24,
        fontWeight: 500,
        verticalAlign: "top",
        lineHeight: "49px"
    },
    h2: {
        fontSize: 14,
        fontWeight: 400,
        lineHeight: "49px",
        margin: 0
    }
};
class Error extends _react.default.Component {
    render() {
        const { statusCode , withDarkMode =true  } = this.props;
        const title = this.props.title || statusCodes[statusCode] || "An unexpected error has occurred";
        return /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.error
        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("title", null, statusCode ? statusCode + ": " + title : "Application error: a client-side exception has occurred")), /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("style", {
            dangerouslySetInnerHTML: {
                /* CSS minified from
                body { margin: 0; color: #000; background: #fff; }
                .next-error-h1 {
                  border-right: 1px solid rgba(0, 0, 0, .3);
                }

                ${
                  withDarkMode
                    ? `@media (prefers-color-scheme: dark) {
                  body { color: #fff; background: #000; }
                  .next-error-h1 {
                    border-right: 1px solid rgba(255, 255, 255, .3);
                  }
                }`
                    : ''
                }
               */ __html: "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" + (withDarkMode ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}" : "")
            }
        }), statusCode ? /*#__PURE__*/ _react.default.createElement("h1", {
            className: "next-error-h1",
            style: styles.h1
        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement("div", {
            style: styles.desc
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            style: styles.h2
        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "Application error: a client-side exception has occurred (see the browser console for more information)"), "."))));
    }
}
(()=>{
    Error.displayName = "ErrorPage";
})();
(()=>{
    Error.getInitialProps = _getInitialProps;
})();
(()=>{
    Error.origGetInitialProps = _getInitialProps;
})();
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_error.js.map


/***/ }),

/***/ 3918:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

<<<<<<< HEAD
/***/ "./amp-mode":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/amp-mode.js" ***!
  \***************************************************/
=======
/***/ 5732:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

<<<<<<< HEAD
/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
=======
/***/ 2796:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

<<<<<<< HEAD
/***/ "./side-effect":
/*!******************************************************!*\
  !*** external "next/dist/shared/lib/side-effect.js" ***!
  \******************************************************/
=======
/***/ 2470:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

<<<<<<< HEAD
/***/ "./utils/warn-once":
/*!**********************************************************!*\
  !*** external "next/dist/shared/lib/utils/warn-once.js" ***!
  \**********************************************************/
=======
/***/ 618:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

<<<<<<< HEAD
/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
=======
/***/ 6689:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("react");

<<<<<<< HEAD
/***/ }),

/***/ "./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQ0FBZ0M7QUFDNUM7QUFDQSwyQ0FBMkM7QUFDM0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF5Ym9vay1tb2RpZmllZC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvY2pzL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5janM/ZDAyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fID0gZXhwb3J0cy5faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _getRequireWildcardCache(nodeInterop) {\n    if (typeof WeakMap !== \"function\") return null;\n\n    var cacheBabelInterop = new WeakMap();\n    var cacheNodeInterop = new WeakMap();\n\n    return (_getRequireWildcardCache = function(nodeInterop) {\n        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;\n    })(nodeInterop);\n}\nexports._ = exports._interop_require_wildcard = _interop_require_wildcard;\nfunction _interop_require_wildcard(obj, nodeInterop) {\n    if (!nodeInterop && obj && obj.__esModule) return obj;\n    if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") return { default: obj };\n\n    var cache = _getRequireWildcardCache(nodeInterop);\n\n    if (cache && cache.has(obj)) return cache.get(obj);\n\n    var newObj = {};\n    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n\n    for (var key in obj) {\n        if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) {\n            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);\n            else newObj[key] = obj[key];\n        }\n    }\n\n    newObj.default = obj;\n\n    if (cache) cache.set(obj, newObj);\n\n    return newObj;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFNBQVMsR0FBRyxpQ0FBaUM7QUFDN0M7QUFDQTtBQUNBLHVGQUF1Rjs7QUFFdkY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheWJvb2stbW9kaWZpZWQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLmNqcz9iZTE4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHtcbiAgICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG5cbiAgICB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICAgIHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTtcblxuICAgIHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24obm9kZUludGVyb3ApIHtcbiAgICAgICAgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wO1xuICAgIH0pKG5vZGVJbnRlcm9wKTtcbn1cbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV93aWxkY2FyZCA9IF9pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQ7XG5mdW5jdGlvbiBfaW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHtcbiAgICBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgcmV0dXJuIG9iajtcbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4geyBkZWZhdWx0OiBvYmogfTtcblxuICAgIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7XG5cbiAgICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHJldHVybiBjYWNoZS5nZXQob2JqKTtcblxuICAgIHZhciBuZXdPYmogPSB7fTtcbiAgICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICAgIGVsc2UgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5ld09iai5kZWZhdWx0ID0gb2JqO1xuXG4gICAgaWYgKGNhY2hlKSBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuXG4gICAgcmV0dXJuIG5ld09iajtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs\n");

=======
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
=======
var __webpack_exports__ = __webpack_require__.X(0, [1396,2636], () => (__webpack_exec__(3499)));
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
module.exports = __webpack_exports__;

})();