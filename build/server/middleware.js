// runtime can't be in strict mode because a global variable is assign and maybe created.
<<<<<<< HEAD
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["middleware"],{

/***/ "(middleware)/./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InvalidTokenError\": () => (/* binding */ n),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction e(e){this.message=e}e.prototype=new Error,e.prototype.name=\"InvalidCharacterError\";var r=\"undefined\"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,\"\");if(t.length%4==1)throw new e(\"'atob' failed: The string to be decoded is not correctly encoded.\");for(var n,o,a=0,i=0,c=\"\";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\".indexOf(o);return c};function t(e){var t=e.replace(/-/g,\"+\").replace(/_/g,\"/\");switch(t.length%4){case 0:break;case 2:t+=\"==\";break;case 3:t+=\"=\";break;default:throw\"Illegal base64url string!\"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t=\"0\"+t),\"%\"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if(\"string\"!=typeof e)throw new n(\"Invalid token specified\");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(\".\")[o]))}catch(e){throw new n(\"Invalid token specified: \"+e.message)}}n.prototype=new Error,n.prototype.name=\"InvalidTokenError\";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);\n//# sourceMappingURL=jwt-decode.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL2p3dC1kZWNvZGUvYnVpbGQvand0LWRlY29kZS5lc20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxjQUFjLGVBQWUsK0RBQStELHFGQUFxRixrQ0FBa0Msa0dBQWtHLHlCQUF5QixnQkFBZ0Isc0pBQXNKLFVBQVUsY0FBYyw0Q0FBNEMsbUJBQW1CLGFBQWEsZUFBZSxNQUFNLGNBQWMsTUFBTSx5Q0FBeUMsSUFBSSxtQkFBbUIsNkRBQTZELGlEQUFpRCxtQ0FBbUMsSUFBSSxJQUFJLFNBQVMsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLDZEQUE2RCxtQkFBbUIsYUFBYSxJQUFJLHNDQUFzQyxTQUFTLG9EQUFvRCwyREFBMkQsaUVBQWUsQ0FBQyxFQUFnQztBQUM1c0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2p3dC1kZWNvZGUvYnVpbGQvand0LWRlY29kZS5lc20uanM/MThhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlKGUpe3RoaXMubWVzc2FnZT1lfWUucHJvdG90eXBlPW5ldyBFcnJvcixlLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZENoYXJhY3RlckVycm9yXCI7dmFyIHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmF0b2ImJndpbmRvdy5hdG9iLmJpbmQod2luZG93KXx8ZnVuY3Rpb24ocil7dmFyIHQ9U3RyaW5nKHIpLnJlcGxhY2UoLz0rJC8sXCJcIik7aWYodC5sZW5ndGglND09MSl0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO2Zvcih2YXIgbixvLGE9MCxpPTAsYz1cIlwiO289dC5jaGFyQXQoaSsrKTt+byYmKG49YSU0PzY0Km4rbzpvLGErKyU0KT9jKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZuPj4oLTIqYSY2KSk6MClvPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5pbmRleE9mKG8pO3JldHVybiBjfTtmdW5jdGlvbiB0KGUpe3ZhciB0PWUucmVwbGFjZSgvLS9nLFwiK1wiKS5yZXBsYWNlKC9fL2csXCIvXCIpO3N3aXRjaCh0Lmxlbmd0aCU0KXtjYXNlIDA6YnJlYWs7Y2FzZSAyOnQrPVwiPT1cIjticmVhaztjYXNlIDM6dCs9XCI9XCI7YnJlYWs7ZGVmYXVsdDp0aHJvd1wiSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nIVwifXRyeXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyKGUpLnJlcGxhY2UoLyguKS9nLChmdW5jdGlvbihlLHIpe3ZhciB0PXIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gdC5sZW5ndGg8MiYmKHQ9XCIwXCIrdCksXCIlXCIrdH0pKSl9KHQpfWNhdGNoKGUpe3JldHVybiByKHQpfX1mdW5jdGlvbiBuKGUpe3RoaXMubWVzc2FnZT1lfWZ1bmN0aW9uIG8oZSxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkXCIpO3ZhciBvPSEwPT09KHI9cnx8e30pLmhlYWRlcj8wOjE7dHJ5e3JldHVybiBKU09OLnBhcnNlKHQoZS5zcGxpdChcIi5cIilbb10pKX1jYXRjaChlKXt0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkOiBcIitlLm1lc3NhZ2UpfX1uLnByb3RvdHlwZT1uZXcgRXJyb3Isbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRUb2tlbkVycm9yXCI7ZXhwb3J0IGRlZmF1bHQgbztleHBvcnR7biBhcyBJbnZhbGlkVG9rZW5FcnJvcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qd3QtZGVjb2RlLmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/jwt-decode/build/jwt-decode.esm.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified&matchers=!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified&matchers=! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dist_esm_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/esm/server/web/adapter */ \"(middleware)/./node_modules/next/dist/esm/server/web/adapter.js\");\n\n        \n\n        (0,next_dist_esm_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__.enhanceGlobals)()\n\n        var mod = __webpack_require__(/*! ./middleware.ts */ \"(middleware)/./middleware.ts\")\n        var handler = mod.middleware || mod.default;\n\n        if (typeof handler !== 'function') {\n          throw new Error('The Middleware \"pages/middleware\" must export a `middleware` or a `default` function');\n        }\n\n        /* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(opts) {\n          return (0,next_dist_esm_server_web_adapter__WEBPACK_IMPORTED_MODULE_0__.adapter)({\n              ...opts,\n              page: \"/middleware\",\n              handler,\n          })\n        }\n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1taWRkbGV3YXJlLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPSUyRlVzZXJzJTJGbXltYWMlMkZEZXNrdG9wJTJGc3RheWJvb2slMkZzdGF5Ym9vay1tb2RpZmllZCUyRnN0YXlib29rLW1vZGlmaWVkJTJGbWlkZGxld2FyZS50cyZwYWdlPSUyRm1pZGRsZXdhcmUmcm9vdERpcj0lMkZVc2VycyUyRm15bWFjJTJGRGVza3RvcCUyRnN0YXlib29rJTJGc3RheWJvb2stbW9kaWZpZWQlMkZzdGF5Ym9vay1tb2RpZmllZCZtYXRjaGVycz0hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLFFBQWtGOztBQUVsRixRQUFRLGdGQUFjOztBQUV0QixrQkFBa0IsbUJBQU8sQ0FBQyxxREFBaUI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsNkJBQWUsb0NBQVU7QUFDakMsaUJBQWlCLHlFQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ZDMzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgaW1wb3J0IHsgYWRhcHRlciwgZW5oYW5jZUdsb2JhbHMgfSBmcm9tICduZXh0L2Rpc3QvZXNtL3NlcnZlci93ZWIvYWRhcHRlcidcblxuICAgICAgICBlbmhhbmNlR2xvYmFscygpXG5cbiAgICAgICAgdmFyIG1vZCA9IHJlcXVpcmUoXCIuL21pZGRsZXdhcmUudHNcIilcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBtb2QubWlkZGxld2FyZSB8fCBtb2QuZGVmYXVsdDtcblxuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBNaWRkbGV3YXJlIFwicGFnZXMvbWlkZGxld2FyZVwiIG11c3QgZXhwb3J0IGEgYG1pZGRsZXdhcmVgIG9yIGEgYGRlZmF1bHRgIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICAgIHJldHVybiBhZGFwdGVyKHtcbiAgICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICAgICAgcGFnZTogXCIvbWlkZGxld2FyZVwiLFxuICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified&matchers=!\n");

/***/ }),

/***/ "(middleware)/./lib/helper/index.ts":
/*!*****************************!*\
  !*** ./lib/helper/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AFFILIATED_COLLECTION_NAME\": () => (/* binding */ AFFILIATED_COLLECTION_NAME),\n/* harmony export */   \"BOOKED_ROOMS_COLLECTION_NAME\": () => (/* binding */ BOOKED_ROOMS_COLLECTION_NAME),\n/* harmony export */   \"COOKIE_EXPIRATOIN_TIME\": () => (/* binding */ COOKIE_EXPIRATOIN_TIME),\n/* harmony export */   \"EMAIL_LOGIN\": () => (/* binding */ EMAIL_LOGIN),\n/* harmony export */   \"EMAIL_SIGNUP\": () => (/* binding */ EMAIL_SIGNUP),\n/* harmony export */   \"GET_USER_TOKEN_OBJECT\": () => (/* binding */ GET_USER_TOKEN_OBJECT),\n/* harmony export */   \"GOOGLE_LOGIN\": () => (/* binding */ GOOGLE_LOGIN),\n/* harmony export */   \"GOOGLE_SIGNUP\": () => (/* binding */ GOOGLE_SIGNUP),\n/* harmony export */   \"HOTEL_BOOKINGS_COLLECTION_NAME\": () => (/* binding */ HOTEL_BOOKINGS_COLLECTION_NAME),\n/* harmony export */   \"HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME\": () => (/* binding */ HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME),\n/* harmony export */   \"HOTEL_OWNERS_COLLECTION_NAME\": () => (/* binding */ HOTEL_OWNERS_COLLECTION_NAME),\n/* harmony export */   \"HOTEL_ROOMS_COLLECTION_NAME\": () => (/* binding */ HOTEL_ROOMS_COLLECTION_NAME),\n/* harmony export */   \"MONTH_NAME_LIST\": () => (/* binding */ MONTH_NAME_LIST),\n/* harmony export */   \"ROOM_PLANS_COLLECTION_NAME\": () => (/* binding */ ROOM_PLANS_COLLECTION_NAME),\n/* harmony export */   \"ROOM_PRICE_PLANNER_COLLECTION_NAME\": () => (/* binding */ ROOM_PRICE_PLANNER_COLLECTION_NAME),\n/* harmony export */   \"USER_ACCESS_TOKEN\": () => (/* binding */ USER_ACCESS_TOKEN),\n/* harmony export */   \"USER_BOOKINGS_COLLECTION_NAME\": () => (/* binding */ USER_BOOKINGS_COLLECTION_NAME),\n/* harmony export */   \"USER_COLLECTION_NAME\": () => (/* binding */ USER_COLLECTION_NAME),\n/* harmony export */   \"USER_UPDATE_TYPE_NAME\": () => (/* binding */ USER_UPDATE_TYPE_NAME),\n/* harmony export */   \"addDays\": () => (/* binding */ addDays),\n/* harmony export */   \"extractJWTValues\": () => (/* binding */ extractJWTValues),\n/* harmony export */   \"getDateDifference\": () => (/* binding */ getDateDifference),\n/* harmony export */   \"getErrorMessage\": () => (/* binding */ getErrorMessage),\n/* harmony export */   \"unixToDate\": () => (/* binding */ unixToDate)\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"(middleware)/./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\n// User Authentication Constants\nconst EMAIL_SIGNUP = \"email-sign-up\";\nconst EMAIL_LOGIN = \"email-log-in\";\nconst GOOGLE_SIGNUP = \"google-sign-up\";\nconst GOOGLE_LOGIN = \"google-log-in\";\nconst USER_ACCESS_TOKEN = \"user-access-token\";\nconst USER_COLLECTION_NAME = \"USER-PERSONAL-INFORMATION\";\nconst COOKIE_EXPIRATOIN_TIME = 30 * 24 * 60 * 60;\nconst GET_USER_TOKEN_OBJECT = \"get-user-token-obj\";\nconst USER_UPDATE_TYPE_NAME = \"update-user-name\";\n// Booking Hotels Constants\nconst HOTEL_BOOKINGS_COLLECTION_NAME = \"HOTEL-BOOKINGS-INFORMATION\";\nconst BOOKED_ROOMS_COLLECTION_NAME = \"HOTEL-BOOKINGS\";\nconst USER_BOOKINGS_COLLECTION_NAME = \"USER-BOOKINGS-INFORMATION\";\nconst HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME = \"BOOKED-ROOMS-INFORMATION\";\n// Price Planner Constants\nconst HOTEL_OWNERS_COLLECTION_NAME = \"HOTEL-PRICE-PLANNER-INFORMATION\";\nconst AFFILIATED_COLLECTION_NAME = \"AFFLIATED-HOTELS\";\nconst HOTEL_ROOMS_COLLECTION_NAME = \"HOTEL-ROOMS\";\nconst ROOM_PLANS_COLLECTION_NAME = \"ROOM-PLANS\";\nconst ROOM_PRICE_PLANNER_COLLECTION_NAME = \"ROOM-PRICE-PLANNER\";\nconst MONTH_NAME_LIST = [\n    \"JANUARY\",\n    \"FEBRUARY\",\n    \"MARCH\",\n    \"APRIL\",\n    \"MAY\",\n    \"JUNE\",\n    \"JULY\",\n    \"AUGUST\",\n    \"SEPTEMBER\",\n    \"OCTOBER\",\n    \"NOVEMBER\",\n    \"DECEMBER\"\n];\nfunction addDays(startDate, numberOfDays) {\n    const result = new Date(startDate);\n    result.setDate(result.getDate() + numberOfDays);\n    return result;\n}\nfunction getDateDifference(checkInDate, checkOutDate) {\n    var timeDiff = new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();\n    var dayDiff = timeDiff / (1000 * 3600 * 24);\n    return Math.floor(dayDiff);\n}\nasync function getErrorMessage(errorValue) {\n    if (errorValue === \"auth/wrong-password\") {\n        return \"Wrong combination of the credentials!\";\n    } else if (errorValue === \"auth/email-already-in-use\") {\n        return \"Email already is in use!\";\n    } else {\n        return errorValue;\n    }\n}\nconst extractJWTValues = async (token)=>{\n    try {\n        const decodedValue = await (0,jwt_decode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(token);\n        return decodedValue;\n    } catch (error) {\n        return null;\n    }\n};\nconst unixToDate = async (timeStamp)=>{\n    const dateObj = new Date(Number(timeStamp) * 1000);\n    return dateObj;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbGliL2hlbHBlci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBRXBDLGdDQUFnQztBQUN6QixNQUFNQyxlQUFlLGdCQUFnQjtBQUNyQyxNQUFNQyxjQUFjLGVBQWU7QUFDbkMsTUFBTUMsZ0JBQWdCLGlCQUFpQjtBQUN2QyxNQUFNQyxlQUFlLGdCQUFnQjtBQUNyQyxNQUFNQyxvQkFBb0Isb0JBQW9CO0FBQzlDLE1BQU1DLHVCQUF1Qiw0QkFBNEI7QUFDekQsTUFBTUMseUJBQXlCLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDakQsTUFBTUMsd0JBQXdCLHFCQUFxQjtBQUNuRCxNQUFNQyx3QkFBd0IsbUJBQW1CO0FBRXhELDJCQUEyQjtBQUNwQixNQUFNQyxpQ0FBaUMsNkJBQTZCO0FBQ3BFLE1BQU1DLCtCQUErQixpQkFBaUI7QUFDdEQsTUFBTUMsZ0NBQWdDLDRCQUE0QjtBQUNsRSxNQUFNQyx1Q0FBdUMsMkJBQTJCO0FBRy9FLDBCQUEwQjtBQUNuQixNQUFNQywrQkFBK0Isa0NBQWtDO0FBQ3ZFLE1BQU1DLDZCQUE2QixtQkFBbUI7QUFDdEQsTUFBTUMsOEJBQThCLGNBQWM7QUFDbEQsTUFBTUMsNkJBQTZCLGFBQWE7QUFDaEQsTUFBTUMscUNBQXFDLHFCQUFxQjtBQUVoRSxNQUFNQyxrQkFBa0I7SUFDN0I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUVLLFNBQVNDLFFBQ2RDLFNBQWlDLEVBQ2pDQyxZQUFvQixFQUNwQjtJQUNBLE1BQU1DLFNBQVMsSUFBSUMsS0FBS0g7SUFDeEJFLE9BQU9FLE9BQU8sQ0FBQ0YsT0FBT0csT0FBTyxLQUFLSjtJQUNsQyxPQUFPQztBQUNULENBQUM7QUFFTSxTQUFTSSxrQkFDZEMsV0FBbUMsRUFDbkNDLFlBQW9DLEVBQ3BDO0lBQ0EsSUFBSUMsV0FDRixJQUFJTixLQUFLSyxjQUFjRSxPQUFPLEtBQUssSUFBSVAsS0FBS0ksYUFBYUcsT0FBTztJQUNsRSxJQUFJQyxVQUFVRixXQUFZLFFBQU8sT0FBTyxFQUFDO0lBRXpDLE9BQU9HLEtBQUtDLEtBQUssQ0FBQ0Y7QUFDcEIsQ0FBQztBQUVNLGVBQWVHLGdCQUFnQkMsVUFBa0IsRUFBRTtJQUN4RCxJQUFJQSxlQUFlLHVCQUF1QjtRQUN4QyxPQUFPO0lBQ1QsT0FBTyxJQUFJQSxlQUFlLDZCQUE2QjtRQUNyRCxPQUFPO0lBQ1QsT0FBTztRQUNMLE9BQU9BO0lBQ1QsQ0FBQztBQUNILENBQUM7QUFFTSxNQUFNQyxtQkFBbUIsT0FBT0MsUUFBZTtJQUNwRCxJQUFJO1FBQ0YsTUFBTUMsZUFBZSxNQUFNdkMsc0RBQVVBLENBQUNzQztRQUN0QyxPQUFPQztJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU8sSUFBSTtJQUNiO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLGFBQWEsT0FBT0MsWUFBbUI7SUFDbEQsTUFBTUMsVUFBVSxJQUFJbkIsS0FBS29CLE9BQU9GLGFBQWE7SUFDN0MsT0FBT0M7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9oZWxwZXIvaW5kZXgudHM/NmFkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuXG4vLyBVc2VyIEF1dGhlbnRpY2F0aW9uIENvbnN0YW50c1xuZXhwb3J0IGNvbnN0IEVNQUlMX1NJR05VUCA9IFwiZW1haWwtc2lnbi11cFwiO1xuZXhwb3J0IGNvbnN0IEVNQUlMX0xPR0lOID0gXCJlbWFpbC1sb2ctaW5cIjtcbmV4cG9ydCBjb25zdCBHT09HTEVfU0lHTlVQID0gXCJnb29nbGUtc2lnbi11cFwiO1xuZXhwb3J0IGNvbnN0IEdPT0dMRV9MT0dJTiA9IFwiZ29vZ2xlLWxvZy1pblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQUNDRVNTX1RPS0VOID0gXCJ1c2VyLWFjY2Vzcy10b2tlblwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQ09MTEVDVElPTl9OQU1FID0gXCJVU0VSLVBFUlNPTkFMLUlORk9STUFUSU9OXCI7XG5leHBvcnQgY29uc3QgQ09PS0lFX0VYUElSQVRPSU5fVElNRSA9IDMwICogMjQgKiA2MCAqIDYwO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1RPS0VOX09CSkVDVCA9IFwiZ2V0LXVzZXItdG9rZW4tb2JqXCI7XG5leHBvcnQgY29uc3QgVVNFUl9VUERBVEVfVFlQRV9OQU1FID0gXCJ1cGRhdGUtdXNlci1uYW1lXCI7XG5cbi8vIEJvb2tpbmcgSG90ZWxzIENvbnN0YW50c1xuZXhwb3J0IGNvbnN0IEhPVEVMX0JPT0tJTkdTX0NPTExFQ1RJT05fTkFNRSA9IFwiSE9URUwtQk9PS0lOR1MtSU5GT1JNQVRJT05cIjtcbmV4cG9ydCBjb25zdCBCT09LRURfUk9PTVNfQ09MTEVDVElPTl9OQU1FID0gXCJIT1RFTC1CT09LSU5HU1wiO1xuZXhwb3J0IGNvbnN0IFVTRVJfQk9PS0lOR1NfQ09MTEVDVElPTl9OQU1FID0gXCJVU0VSLUJPT0tJTkdTLUlORk9STUFUSU9OXCI7XG5leHBvcnQgY29uc3QgSE9URUxfQk9PS0lOR1NfUk9PTVNfQ09MTEVDVElPTl9OQU1FID0gXCJCT09LRUQtUk9PTVMtSU5GT1JNQVRJT05cIjtcblxuXG4vLyBQcmljZSBQbGFubmVyIENvbnN0YW50c1xuZXhwb3J0IGNvbnN0IEhPVEVMX09XTkVSU19DT0xMRUNUSU9OX05BTUUgPSBcIkhPVEVMLVBSSUNFLVBMQU5ORVItSU5GT1JNQVRJT05cIjtcbmV4cG9ydCBjb25zdCBBRkZJTElBVEVEX0NPTExFQ1RJT05fTkFNRSA9IFwiQUZGTElBVEVELUhPVEVMU1wiO1xuZXhwb3J0IGNvbnN0IEhPVEVMX1JPT01TX0NPTExFQ1RJT05fTkFNRSA9IFwiSE9URUwtUk9PTVNcIjtcbmV4cG9ydCBjb25zdCBST09NX1BMQU5TX0NPTExFQ1RJT05fTkFNRSA9IFwiUk9PTS1QTEFOU1wiO1xuZXhwb3J0IGNvbnN0IFJPT01fUFJJQ0VfUExBTk5FUl9DT0xMRUNUSU9OX05BTUUgPSBcIlJPT00tUFJJQ0UtUExBTk5FUlwiO1xuXG5leHBvcnQgY29uc3QgTU9OVEhfTkFNRV9MSVNUID0gW1xuICBcIkpBTlVBUllcIixcbiAgXCJGRUJSVUFSWVwiLFxuICBcIk1BUkNIXCIsXG4gIFwiQVBSSUxcIixcbiAgXCJNQVlcIixcbiAgXCJKVU5FXCIsXG4gIFwiSlVMWVwiLFxuICBcIkFVR1VTVFwiLFxuICBcIlNFUFRFTUJFUlwiLFxuICBcIk9DVE9CRVJcIixcbiAgXCJOT1ZFTUJFUlwiLFxuICBcIkRFQ0VNQkVSXCIsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhcbiAgc3RhcnREYXRlOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlLFxuICBudW1iZXJPZkRheXM6IG51bWJlclxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XG4gIHJlc3VsdC5zZXREYXRlKHJlc3VsdC5nZXREYXRlKCkgKyBudW1iZXJPZkRheXMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZURpZmZlcmVuY2UoXG4gIGNoZWNrSW5EYXRlOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlLFxuICBjaGVja091dERhdGU6IHN0cmluZyB8IG51bWJlciB8IERhdGVcbikge1xuICB2YXIgdGltZURpZmYgPVxuICAgIG5ldyBEYXRlKGNoZWNrT3V0RGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoY2hlY2tJbkRhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGRheURpZmYgPSB0aW1lRGlmZiAvICgxMDAwICogMzYwMCAqIDI0KTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihkYXlEaWZmKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvclZhbHVlOiBTdHJpbmcpIHtcbiAgaWYgKGVycm9yVmFsdWUgPT09IFwiYXV0aC93cm9uZy1wYXNzd29yZFwiKSB7XG4gICAgcmV0dXJuIFwiV3JvbmcgY29tYmluYXRpb24gb2YgdGhlIGNyZWRlbnRpYWxzIVwiO1xuICB9IGVsc2UgaWYgKGVycm9yVmFsdWUgPT09IFwiYXV0aC9lbWFpbC1hbHJlYWR5LWluLXVzZVwiKSB7XG4gICAgcmV0dXJuIFwiRW1haWwgYWxyZWFkeSBpcyBpbiB1c2UhXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGV4dHJhY3RKV1RWYWx1ZXMgPSBhc3luYyAodG9rZW46IGFueSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRlY29kZWRWYWx1ZSA9IGF3YWl0IGp3dF9kZWNvZGUodG9rZW4pO1xuICAgIHJldHVybiBkZWNvZGVkVmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1bml4VG9EYXRlID0gYXN5bmMgKHRpbWVTdGFtcDogYW55KSA9PiB7XG4gIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZShOdW1iZXIodGltZVN0YW1wKSAqIDEwMDApO1xuICByZXR1cm4gZGF0ZU9iajtcbn07XG4iXSwibmFtZXMiOlsiand0X2RlY29kZSIsIkVNQUlMX1NJR05VUCIsIkVNQUlMX0xPR0lOIiwiR09PR0xFX1NJR05VUCIsIkdPT0dMRV9MT0dJTiIsIlVTRVJfQUNDRVNTX1RPS0VOIiwiVVNFUl9DT0xMRUNUSU9OX05BTUUiLCJDT09LSUVfRVhQSVJBVE9JTl9USU1FIiwiR0VUX1VTRVJfVE9LRU5fT0JKRUNUIiwiVVNFUl9VUERBVEVfVFlQRV9OQU1FIiwiSE9URUxfQk9PS0lOR1NfQ09MTEVDVElPTl9OQU1FIiwiQk9PS0VEX1JPT01TX0NPTExFQ1RJT05fTkFNRSIsIlVTRVJfQk9PS0lOR1NfQ09MTEVDVElPTl9OQU1FIiwiSE9URUxfQk9PS0lOR1NfUk9PTVNfQ09MTEVDVElPTl9OQU1FIiwiSE9URUxfT1dORVJTX0NPTExFQ1RJT05fTkFNRSIsIkFGRklMSUFURURfQ09MTEVDVElPTl9OQU1FIiwiSE9URUxfUk9PTVNfQ09MTEVDVElPTl9OQU1FIiwiUk9PTV9QTEFOU19DT0xMRUNUSU9OX05BTUUiLCJST09NX1BSSUNFX1BMQU5ORVJfQ09MTEVDVElPTl9OQU1FIiwiTU9OVEhfTkFNRV9MSVNUIiwiYWRkRGF5cyIsInN0YXJ0RGF0ZSIsIm51bWJlck9mRGF5cyIsInJlc3VsdCIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImdldERhdGVEaWZmZXJlbmNlIiwiY2hlY2tJbkRhdGUiLCJjaGVja091dERhdGUiLCJ0aW1lRGlmZiIsImdldFRpbWUiLCJkYXlEaWZmIiwiTWF0aCIsImZsb29yIiwiZ2V0RXJyb3JNZXNzYWdlIiwiZXJyb3JWYWx1ZSIsImV4dHJhY3RKV1RWYWx1ZXMiLCJ0b2tlbiIsImRlY29kZWRWYWx1ZSIsImVycm9yIiwidW5peFRvRGF0ZSIsInRpbWVTdGFtcCIsImRhdGVPYmoiLCJOdW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./lib/helper/index.ts\n");

/***/ }),

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"middleware\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/helper */ \"(middleware)/./lib/helper/index.ts\");\n\n\nfunction middleware(req, res) {\n    const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    const userAccessToken = req.cookies.get(_lib_helper__WEBPACK_IMPORTED_MODULE_1__.USER_ACCESS_TOKEN);\n    console.log(req.url);\n    // console.log(userAccessToken);\n    if (req.nextUrl.pathname.startsWith(\"/login\") && userAccessToken) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/profile\", req.url));\n    }\n    if (req.nextUrl.pathname.startsWith(\"/profile\") && !userAccessToken) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redirect(new URL(\"/login\", req.url));\n    }\n    //   console.log(\"Request: \", req.nextUrl.pathname);\n    //   const cookie = req.cookies.get(\"user-access-token\");\n    //   console.log(\"Cookie: \", cookie);\n    //   const cookieValue = req.cookies.get(\"user-auth-cookie\")?.valueOf();\n    //   const allCookies = req.cookies;\n    //   const isCookieExists = req.cookies.has(\"user-auth-cookie\");\n    //   const deleteCookie = req.cookies.delete(\"user-auth-cookie\");\n    /////////////////////////////////////////\n    //   if (req.cookies.has(\"user-auth-cookie\")) {\n    //     const url = req.nextUrl.clone();\n    //     url.pathname = \"/profile/user\";\n    //     return NextResponse.rewrite(url);\n    //   }\n    // if (req.cookies.has(\"user-auth-cookie\")) {\n    //     return NextResponse.rewrite(new URL('/profile/user', req.nextUrl));\n    // }\n    return response;\n}\nconst config = {\n    matcher: [\n        \"/\",\n        \"/login\",\n        \"/profile\",\n        \"/profile/my-bookings\",\n        \"/profile/personal-info\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBRVA7QUFFMUMsU0FBU0UsV0FBV0MsR0FBZ0IsRUFBRUMsR0FBaUIsRUFBRTtJQUM5RCxNQUFNQyxXQUFXTCx1RkFBaUI7SUFDbEMsTUFBTU8sa0JBQWtCSixJQUFJSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsMERBQWlCQTtJQUV6RFMsUUFBUUMsR0FBRyxDQUFDUixJQUFJUyxHQUFHO0lBQ25CLGdDQUFnQztJQUNoQyxJQUFJVCxJQUFJVSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGFBQWFSLGlCQUFpQjtRQUNoRSxPQUFPUCwyRkFBcUIsQ0FBQyxJQUFJaUIsSUFBSSxZQUFZZCxJQUFJUyxHQUFHO0lBQzFELENBQUM7SUFDRCxJQUFJVCxJQUFJVSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGVBQWUsQ0FBQ1IsaUJBQWlCO1FBQ25FLE9BQU9QLDJGQUFxQixDQUFDLElBQUlpQixJQUFJLFVBQVVkLElBQUlTLEdBQUc7SUFDeEQsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCx5REFBeUQ7SUFDekQscUNBQXFDO0lBQ3JDLHdFQUF3RTtJQUN4RSxvQ0FBb0M7SUFDcEMsZ0VBQWdFO0lBQ2hFLGlFQUFpRTtJQUVqRSx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsd0NBQXdDO0lBQ3hDLE1BQU07SUFFTiw2Q0FBNkM7SUFDN0MsMEVBQTBFO0lBQzFFLElBQUk7SUFFSixPQUFPUDtBQUNULENBQUM7QUFFTSxNQUFNYSxTQUFTO0lBQ3BCQyxTQUFTO1FBQUM7UUFBSztRQUFVO1FBQVk7UUFBd0I7S0FBeUI7QUFDeEYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLnRzPzQyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFVTRVJfQUNDRVNTX1RPS0VOIH0gZnJvbSBcIi4vbGliL2hlbHBlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXE6IE5leHRSZXF1ZXN0LCByZXM6IE5leHRSZXNwb25zZSkge1xuICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5uZXh0KCk7XG4gIGNvbnN0IHVzZXJBY2Nlc3NUb2tlbiA9IHJlcS5jb29raWVzLmdldChVU0VSX0FDQ0VTU19UT0tFTik7XG5cbiAgY29uc29sZS5sb2cocmVxLnVybCk7XG4gIC8vIGNvbnNvbGUubG9nKHVzZXJBY2Nlc3NUb2tlbik7XG4gIGlmIChyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2xvZ2luXCIpICYmIHVzZXJBY2Nlc3NUb2tlbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9wcm9maWxlXCIsIHJlcS51cmwpKTtcbiAgfVxuICBpZiAocmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9wcm9maWxlXCIpICYmICF1c2VyQWNjZXNzVG9rZW4pIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvbG9naW5cIiwgcmVxLnVybCkpO1xuICB9XG4gIC8vICAgY29uc29sZS5sb2coXCJSZXF1ZXN0OiBcIiwgcmVxLm5leHRVcmwucGF0aG5hbWUpO1xuICAvLyAgIGNvbnN0IGNvb2tpZSA9IHJlcS5jb29raWVzLmdldChcInVzZXItYWNjZXNzLXRva2VuXCIpO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiQ29va2llOiBcIiwgY29va2llKTtcbiAgLy8gICBjb25zdCBjb29raWVWYWx1ZSA9IHJlcS5jb29raWVzLmdldChcInVzZXItYXV0aC1jb29raWVcIik/LnZhbHVlT2YoKTtcbiAgLy8gICBjb25zdCBhbGxDb29raWVzID0gcmVxLmNvb2tpZXM7XG4gIC8vICAgY29uc3QgaXNDb29raWVFeGlzdHMgPSByZXEuY29va2llcy5oYXMoXCJ1c2VyLWF1dGgtY29va2llXCIpO1xuICAvLyAgIGNvbnN0IGRlbGV0ZUNvb2tpZSA9IHJlcS5jb29raWVzLmRlbGV0ZShcInVzZXItYXV0aC1jb29raWVcIik7XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gICBpZiAocmVxLmNvb2tpZXMuaGFzKFwidXNlci1hdXRoLWNvb2tpZVwiKSkge1xuICAvLyAgICAgY29uc3QgdXJsID0gcmVxLm5leHRVcmwuY2xvbmUoKTtcbiAgLy8gICAgIHVybC5wYXRobmFtZSA9IFwiL3Byb2ZpbGUvdXNlclwiO1xuICAvLyAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZXdyaXRlKHVybCk7XG4gIC8vICAgfVxuXG4gIC8vIGlmIChyZXEuY29va2llcy5oYXMoXCJ1c2VyLWF1dGgtY29va2llXCIpKSB7XG4gIC8vICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJld3JpdGUobmV3IFVSTCgnL3Byb2ZpbGUvdXNlcicsIHJlcS5uZXh0VXJsKSk7XG4gIC8vIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIG1hdGNoZXI6IFtcIi9cIiwgXCIvbG9naW5cIiwgXCIvcHJvZmlsZVwiLCBcIi9wcm9maWxlL215LWJvb2tpbmdzXCIsIFwiL3Byb2ZpbGUvcGVyc29uYWwtaW5mb1wiXSxcbn07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiVVNFUl9BQ0NFU1NfVE9LRU4iLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJuZXh0IiwidXNlckFjY2Vzc1Rva2VuIiwiY29va2llcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwicmVkaXJlY3QiLCJVUkwiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/client/components/app-router-headers.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/esm/client/components/app-router-headers.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ACTION\": () => (/* binding */ ACTION),\n/* harmony export */   \"FETCH_CACHE_HEADER\": () => (/* binding */ FETCH_CACHE_HEADER),\n/* harmony export */   \"FLIGHT_PARAMETERS\": () => (/* binding */ FLIGHT_PARAMETERS),\n/* harmony export */   \"NEXT_ROUTER_PREFETCH\": () => (/* binding */ NEXT_ROUTER_PREFETCH),\n/* harmony export */   \"NEXT_ROUTER_STATE_TREE\": () => (/* binding */ NEXT_ROUTER_STATE_TREE),\n/* harmony export */   \"NEXT_URL\": () => (/* binding */ NEXT_URL),\n/* harmony export */   \"RSC\": () => (/* binding */ RSC),\n/* harmony export */   \"RSC_CONTENT_TYPE_HEADER\": () => (/* binding */ RSC_CONTENT_TYPE_HEADER),\n/* harmony export */   \"RSC_VARY_HEADER\": () => (/* binding */ RSC_VARY_HEADER)\n/* harmony export */ });\nconst RSC = \"RSC\";\nconst ACTION = \"Next-Action\";\nconst NEXT_ROUTER_STATE_TREE = \"Next-Router-State-Tree\";\nconst NEXT_ROUTER_PREFETCH = \"Next-Router-Prefetch\";\nconst NEXT_URL = \"Next-Url\";\nconst FETCH_CACHE_HEADER = \"x-vercel-sc-headers\";\nconst RSC_CONTENT_TYPE_HEADER = \"text/x-component\";\nconst RSC_VARY_HEADER = RSC + \", \" + NEXT_ROUTER_STATE_TREE + \", \" + NEXT_ROUTER_PREFETCH;\nconst FLIGHT_PARAMETERS = [\n    [\n        RSC\n    ],\n    [\n        NEXT_ROUTER_STATE_TREE\n    ],\n    [\n        NEXT_ROUTER_PREFETCH\n    ]\n]; //# sourceMappingURL=app-router-headers.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vY2xpZW50L2NvbXBvbmVudHMvYXBwLXJvdXRlci1oZWFkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLE1BQU0sTUFBTTtBQUNsQixNQUFNQyxTQUFTLGNBQWM7QUFDN0IsTUFBTUMseUJBQXlCLHlCQUF5QjtBQUN4RCxNQUFNQyx1QkFBdUIsdUJBQXVCO0FBQ3BELE1BQU1DLFdBQVcsV0FBVztBQUM1QixNQUFNQyxxQkFBcUIsc0JBQXNCO0FBQ2pELE1BQU1DLDBCQUEwQixtQkFBbUI7QUFDbkQsTUFBTUMsa0JBQWtCUCxNQUFNLE9BQU9FLHlCQUF5QixPQUFPQyxxQkFBcUI7QUFDMUYsTUFBTUssb0JBQW9CO0lBQzdCO1FBQ0lSO0tBQ0g7SUFDRDtRQUNJRTtLQUNIO0lBQ0Q7UUFDSUM7S0FDSDtDQUNKLENBQUMsQ0FFRiw4Q0FBOEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vY2xpZW50L2NvbXBvbmVudHMvYXBwLXJvdXRlci1oZWFkZXJzLmpzPzIyN2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFJTQyA9IFwiUlNDXCI7XG5leHBvcnQgY29uc3QgQUNUSU9OID0gXCJOZXh0LUFjdGlvblwiO1xuZXhwb3J0IGNvbnN0IE5FWFRfUk9VVEVSX1NUQVRFX1RSRUUgPSBcIk5leHQtUm91dGVyLVN0YXRlLVRyZWVcIjtcbmV4cG9ydCBjb25zdCBORVhUX1JPVVRFUl9QUkVGRVRDSCA9IFwiTmV4dC1Sb3V0ZXItUHJlZmV0Y2hcIjtcbmV4cG9ydCBjb25zdCBORVhUX1VSTCA9IFwiTmV4dC1VcmxcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9DQUNIRV9IRUFERVIgPSBcIngtdmVyY2VsLXNjLWhlYWRlcnNcIjtcbmV4cG9ydCBjb25zdCBSU0NfQ09OVEVOVF9UWVBFX0hFQURFUiA9IFwidGV4dC94LWNvbXBvbmVudFwiO1xuZXhwb3J0IGNvbnN0IFJTQ19WQVJZX0hFQURFUiA9IFJTQyArIFwiLCBcIiArIE5FWFRfUk9VVEVSX1NUQVRFX1RSRUUgKyBcIiwgXCIgKyBORVhUX1JPVVRFUl9QUkVGRVRDSDtcbmV4cG9ydCBjb25zdCBGTElHSFRfUEFSQU1FVEVSUyA9IFtcbiAgICBbXG4gICAgICAgIFJTQ1xuICAgIF0sXG4gICAgW1xuICAgICAgICBORVhUX1JPVVRFUl9TVEFURV9UUkVFXG4gICAgXSxcbiAgICBbXG4gICAgICAgIE5FWFRfUk9VVEVSX1BSRUZFVENIXG4gICAgXVxuXTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlci1oZWFkZXJzLmpzLm1hcCJdLCJuYW1lcyI6WyJSU0MiLCJBQ1RJT04iLCJORVhUX1JPVVRFUl9TVEFURV9UUkVFIiwiTkVYVF9ST1VURVJfUFJFRkVUQ0giLCJORVhUX1VSTCIsIkZFVENIX0NBQ0hFX0hFQURFUiIsIlJTQ19DT05URU5UX1RZUEVfSEVBREVSIiwiUlNDX1ZBUllfSEVBREVSIiwiRkxJR0hUX1BBUkFNRVRFUlMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/client/components/app-router-headers.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/get-hostname.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/get-hostname.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHostname\": () => (/* binding */ getHostname)\n/* harmony export */ });\n/**\n * Takes an object with a hostname property (like a parsed URL) and some\n * headers that may contain Host and returns the preferred hostname.\n * @param parsed An object containing a hostname property.\n * @param headers A dictionary with headers containing a `host`.\n */ function getHostname(parsed, headers) {\n    // Get the hostname from the headers if it exists, otherwise use the parsed\n    // hostname.\n    let hostname;\n    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {\n        hostname = headers.host.toString().split(\":\")[0];\n    } else if (parsed.hostname) {\n        hostname = parsed.hostname;\n    } else return;\n    return hostname.toLowerCase();\n} //# sourceMappingURL=get-hostname.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9nZXQtaG9zdG5hbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7OztDQUtDLEdBQVUsU0FBU0EsWUFBWUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFDN0MsMkVBQTJFO0lBQzNFLFlBQVk7SUFDWixJQUFJQztJQUNKLElBQUksQ0FBQ0QsV0FBVyxJQUFJLEdBQUcsS0FBSyxJQUFJQSxRQUFRRSxJQUFJLEtBQUssQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDSixRQUFRRSxJQUFJLEdBQUc7UUFDM0VELFdBQVdELFFBQVFFLElBQUksQ0FBQ0csUUFBUSxHQUFHQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDcEQsT0FBTyxJQUFJUCxPQUFPRSxRQUFRLEVBQUU7UUFDeEJBLFdBQVdGLE9BQU9FLFFBQVE7SUFDOUIsT0FBTztJQUNQLE9BQU9BLFNBQVNNLFdBQVc7QUFDL0IsQ0FBQyxDQUVELHdDQUF3QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zaGFyZWQvbGliL2dldC1ob3N0bmFtZS5qcz83NjMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGFrZXMgYW4gb2JqZWN0IHdpdGggYSBob3N0bmFtZSBwcm9wZXJ0eSAobGlrZSBhIHBhcnNlZCBVUkwpIGFuZCBzb21lXG4gKiBoZWFkZXJzIHRoYXQgbWF5IGNvbnRhaW4gSG9zdCBhbmQgcmV0dXJucyB0aGUgcHJlZmVycmVkIGhvc3RuYW1lLlxuICogQHBhcmFtIHBhcnNlZCBBbiBvYmplY3QgY29udGFpbmluZyBhIGhvc3RuYW1lIHByb3BlcnR5LlxuICogQHBhcmFtIGhlYWRlcnMgQSBkaWN0aW9uYXJ5IHdpdGggaGVhZGVycyBjb250YWluaW5nIGEgYGhvc3RgLlxuICovIGV4cG9ydCBmdW5jdGlvbiBnZXRIb3N0bmFtZShwYXJzZWQsIGhlYWRlcnMpIHtcbiAgICAvLyBHZXQgdGhlIGhvc3RuYW1lIGZyb20gdGhlIGhlYWRlcnMgaWYgaXQgZXhpc3RzLCBvdGhlcndpc2UgdXNlIHRoZSBwYXJzZWRcbiAgICAvLyBob3N0bmFtZS5cbiAgICBsZXQgaG9zdG5hbWU7XG4gICAgaWYgKChoZWFkZXJzID09IG51bGwgPyB2b2lkIDAgOiBoZWFkZXJzLmhvc3QpICYmICFBcnJheS5pc0FycmF5KGhlYWRlcnMuaG9zdCkpIHtcbiAgICAgICAgaG9zdG5hbWUgPSBoZWFkZXJzLmhvc3QudG9TdHJpbmcoKS5zcGxpdChcIjpcIilbMF07XG4gICAgfSBlbHNlIGlmIChwYXJzZWQuaG9zdG5hbWUpIHtcbiAgICAgICAgaG9zdG5hbWUgPSBwYXJzZWQuaG9zdG5hbWU7XG4gICAgfSBlbHNlIHJldHVybjtcbiAgICByZXR1cm4gaG9zdG5hbWUudG9Mb3dlckNhc2UoKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0LWhvc3RuYW1lLmpzLm1hcCJdLCJuYW1lcyI6WyJnZXRIb3N0bmFtZSIsInBhcnNlZCIsImhlYWRlcnMiLCJob3N0bmFtZSIsImhvc3QiLCJBcnJheSIsImlzQXJyYXkiLCJ0b1N0cmluZyIsInNwbGl0IiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/get-hostname.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"detectDomainLocale\": () => (/* binding */ detectDomainLocale)\n/* harmony export */ });\nfunction detectDomainLocale(domainItems, hostname, detectedLocale) {\n    if (!domainItems) return;\n    if (detectedLocale) {\n        detectedLocale = detectedLocale.toLowerCase();\n    }\n    for (const item of domainItems){\n        var _item_domain, _item_locales;\n        // remove port if present\n        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(\":\")[0].toLowerCase();\n        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {\n            return item;\n        }\n    }\n} //# sourceMappingURL=detect-domain-locale.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxtQkFBbUJDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDdEUsSUFBSSxDQUFDRixhQUFhO0lBQ2xCLElBQUlFLGdCQUFnQjtRQUNoQkEsaUJBQWlCQSxlQUFlQyxXQUFXO0lBQy9DLENBQUM7SUFDRCxLQUFLLE1BQU1DLFFBQVFKLFlBQVk7UUFDM0IsSUFBSUssY0FBY0M7UUFDbEIseUJBQXlCO1FBQ3pCLE1BQU1DLGlCQUFpQixDQUFDRixlQUFlRCxLQUFLSSxNQUFNLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSUgsYUFBYUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNOLFdBQVcsRUFBRTtRQUMvRyxJQUFJRixhQUFhTSxrQkFBa0JMLG1CQUFtQkUsS0FBS00sYUFBYSxDQUFDUCxXQUFXLE1BQU8sRUFBQ0csZ0JBQWdCRixLQUFLTyxPQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSUwsY0FBY00sSUFBSSxDQUFDLENBQUNDLFNBQVNBLE9BQU9WLFdBQVcsT0FBT0QsZUFBZSxHQUFHO1lBQ2pOLE9BQU9FO1FBQ1gsQ0FBQztJQUNMO0FBQ0osQ0FBQyxDQUVELGdEQUFnRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanM/YmNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLCBob3N0bmFtZSwgZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICBpZiAoIWRvbWFpbkl0ZW1zKSByZXR1cm47XG4gICAgaWYgKGRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIGRldGVjdGVkTG9jYWxlID0gZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXtcbiAgICAgICAgdmFyIF9pdGVtX2RvbWFpbiwgX2l0ZW1fbG9jYWxlcztcbiAgICAgICAgLy8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuICAgICAgICBjb25zdCBkb21haW5Ib3N0bmFtZSA9IChfaXRlbV9kb21haW4gPSBpdGVtLmRvbWFpbikgPT0gbnVsbCA/IHZvaWQgMCA6IF9pdGVtX2RvbWFpbi5zcGxpdChcIjpcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGhvc3RuYW1lID09PSBkb21haW5Ib3N0bmFtZSB8fCBkZXRlY3RlZExvY2FsZSA9PT0gaXRlbS5kZWZhdWx0TG9jYWxlLnRvTG93ZXJDYXNlKCkgfHwgKChfaXRlbV9sb2NhbGVzID0gaXRlbS5sb2NhbGVzKSA9PSBudWxsID8gdm9pZCAwIDogX2l0ZW1fbG9jYWxlcy5zb21lKChsb2NhbGUpPT5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gZGV0ZWN0ZWRMb2NhbGUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldGVjdC1kb21haW4tbG9jYWxlLmpzLm1hcCJdLCJuYW1lcyI6WyJkZXRlY3REb21haW5Mb2NhbGUiLCJkb21haW5JdGVtcyIsImhvc3RuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJ0b0xvd2VyQ2FzZSIsIml0ZW0iLCJfaXRlbV9kb21haW4iLCJfaXRlbV9sb2NhbGVzIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW4iLCJzcGxpdCIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVzIiwic29tZSIsImxvY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"normalizeLocalePath\": () => (/* binding */ normalizeLocalePath)\n/* harmony export */ });\n/**\n * For a pathname that may include a locale from a list of locales, it\n * removes the locale from the pathname returning it alongside with the\n * detected locale.\n *\n * @param pathname A pathname that may include a locale.\n * @param locales A list of locales.\n * @returns The detected locale and pathname without locale\n */ function normalizeLocalePath(pathname, locales) {\n    let detectedLocale;\n    // first item will be empty string from splitting at first char\n    const pathnameParts = pathname.split(\"/\");\n    (locales || []).some((locale)=>{\n        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {\n            detectedLocale = locale;\n            pathnameParts.splice(1, 1);\n            pathname = pathnameParts.join(\"/\") || \"/\";\n            return true;\n        }\n        return false;\n    });\n    return {\n        pathname,\n        detectedLocale\n    };\n} //# sourceMappingURL=normalize-locale-path.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7O0NBUUMsR0FBVSxTQUFTQSxvQkFBb0JDLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQ3ZELElBQUlDO0lBQ0osK0RBQStEO0lBQy9ELE1BQU1DLGdCQUFnQkgsU0FBU0ksS0FBSyxDQUFDO0lBQ3BDSCxDQUFBQSxXQUFXLEVBQUUsRUFBRUksSUFBSSxDQUFDLENBQUNDLFNBQVM7UUFDM0IsSUFBSUgsYUFBYSxDQUFDLEVBQUUsSUFBSUEsYUFBYSxDQUFDLEVBQUUsQ0FBQ0ksV0FBVyxPQUFPRCxPQUFPQyxXQUFXLElBQUk7WUFDN0VMLGlCQUFpQkk7WUFDakJILGNBQWNLLE1BQU0sQ0FBQyxHQUFHO1lBQ3hCUixXQUFXRyxjQUFjTSxJQUFJLENBQUMsUUFBUTtZQUN0QyxPQUFPLElBQUk7UUFDZixDQUFDO1FBQ0QsT0FBTyxLQUFLO0lBQ2hCO0lBQ0EsT0FBTztRQUNIVDtRQUNBRTtJQUNKO0FBQ0osQ0FBQyxDQUVELGlEQUFpRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzPzZmODYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGb3IgYSBwYXRobmFtZSB0aGF0IG1heSBpbmNsdWRlIGEgbG9jYWxlIGZyb20gYSBsaXN0IG9mIGxvY2FsZXMsIGl0XG4gKiByZW1vdmVzIHRoZSBsb2NhbGUgZnJvbSB0aGUgcGF0aG5hbWUgcmV0dXJuaW5nIGl0IGFsb25nc2lkZSB3aXRoIHRoZVxuICogZGV0ZWN0ZWQgbG9jYWxlLlxuICpcbiAqIEBwYXJhbSBwYXRobmFtZSBBIHBhdGhuYW1lIHRoYXQgbWF5IGluY2x1ZGUgYSBsb2NhbGUuXG4gKiBAcGFyYW0gbG9jYWxlcyBBIGxpc3Qgb2YgbG9jYWxlcy5cbiAqIEByZXR1cm5zIFRoZSBkZXRlY3RlZCBsb2NhbGUgYW5kIHBhdGhuYW1lIHdpdGhvdXQgbG9jYWxlXG4gKi8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsIGxvY2FsZXMpIHtcbiAgICBsZXQgZGV0ZWN0ZWRMb2NhbGU7XG4gICAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKT0+e1xuICAgICAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXSAmJiBwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oXCIvXCIpIHx8IFwiL1wiO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBkZXRlY3RlZExvY2FsZVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiXSwibmFtZXMiOlsibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsImxvY2FsZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ensureLeadingSlash\": () => (/* binding */ ensureLeadingSlash)\n/* harmony export */ });\n/**\n * For a given page path, this function ensures that there is a leading slash.\n * If there is not a leading slash, one is added, otherwise it is noop.\n */ function ensureLeadingSlash(path) {\n    return path.startsWith(\"/\") ? path : \"/\" + path;\n} //# sourceMappingURL=ensure-leading-slash.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9wYWdlLXBhdGgvZW5zdXJlLWxlYWRpbmctc2xhc2guanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Q0FHQyxHQUFVLFNBQVNBLG1CQUFtQkMsSUFBSSxFQUFFO0lBQ3pDLE9BQU9BLEtBQUtDLFVBQVUsQ0FBQyxPQUFPRCxPQUFPLE1BQU1BLElBQUk7QUFDbkQsQ0FBQyxDQUVELGdEQUFnRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zaGFyZWQvbGliL3BhZ2UtcGF0aC9lbnN1cmUtbGVhZGluZy1zbGFzaC5qcz8wNDY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRm9yIGEgZ2l2ZW4gcGFnZSBwYXRoLCB0aGlzIGZ1bmN0aW9uIGVuc3VyZXMgdGhhdCB0aGVyZSBpcyBhIGxlYWRpbmcgc2xhc2guXG4gKiBJZiB0aGVyZSBpcyBub3QgYSBsZWFkaW5nIHNsYXNoLCBvbmUgaXMgYWRkZWQsIG90aGVyd2lzZSBpdCBpcyBub29wLlxuICovIGV4cG9ydCBmdW5jdGlvbiBlbnN1cmVMZWFkaW5nU2xhc2gocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpID8gcGF0aCA6IFwiL1wiICsgcGF0aDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW5zdXJlLWxlYWRpbmctc2xhc2guanMubWFwIl0sIm5hbWVzIjpbImVuc3VyZUxlYWRpbmdTbGFzaCIsInBhdGgiLCJzdGFydHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLocale\": () => (/* binding */ addLocale)\n/* harmony export */ });\n/* harmony import */ var _add_path_prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-path-prefix */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js\");\n/* harmony import */ var _path_has_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-has-prefix */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js\");\n\n\n/**\n * For a given path and a locale, if the locale is given, it will prefix the\n * locale. The path shouldn't be an API path. If a default locale is given the\n * prefix will be omitted if the locale is already the default locale.\n */ function addLocale(path, locale, defaultLocale, ignorePrefix) {\n    // If no locale was given or the locale is the default locale, we don't need\n    // to prefix the path.\n    if (!locale || locale === defaultLocale) return path;\n    const lower = path.toLowerCase();\n    // If the path is an API path or the path already has the locale prefix, we\n    // don't need to prefix the path.\n    if (!ignorePrefix) {\n        if ((0,_path_has_prefix__WEBPACK_IMPORTED_MODULE_1__.pathHasPrefix)(lower, \"/api\")) return path;\n        if ((0,_path_has_prefix__WEBPACK_IMPORTED_MODULE_1__.pathHasPrefix)(lower, \"/\" + locale.toLowerCase())) return path;\n    }\n    // Add the locale prefix to the path.\n    return (0,_add_path_prefix__WEBPACK_IMPORTED_MODULE_0__.addPathPrefix)(path, \"/\" + locale);\n} //# sourceMappingURL=add-locale.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYWRkLWxvY2FsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFDQTtBQUNsRDs7OztDQUlDLEdBQVUsU0FBU0UsVUFBVUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFO0lBQ3JFLDRFQUE0RTtJQUM1RSxzQkFBc0I7SUFDdEIsSUFBSSxDQUFDRixVQUFVQSxXQUFXQyxlQUFlLE9BQU9GO0lBQ2hELE1BQU1JLFFBQVFKLEtBQUtLLFdBQVc7SUFDOUIsMkVBQTJFO0lBQzNFLGlDQUFpQztJQUNqQyxJQUFJLENBQUNGLGNBQWM7UUFDZixJQUFJTCwrREFBYUEsQ0FBQ00sT0FBTyxTQUFTLE9BQU9KO1FBQ3pDLElBQUlGLCtEQUFhQSxDQUFDTSxPQUFPLE1BQU1ILE9BQU9JLFdBQVcsS0FBSyxPQUFPTDtJQUNqRSxDQUFDO0lBQ0QscUNBQXFDO0lBQ3JDLE9BQU9ILCtEQUFhQSxDQUFDRyxNQUFNLE1BQU1DO0FBQ3JDLENBQUMsQ0FFRCxzQ0FBc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYWRkLWxvY2FsZS5qcz9mODMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFBhdGhQcmVmaXggfSBmcm9tIFwiLi9hZGQtcGF0aC1wcmVmaXhcIjtcbmltcG9ydCB7IHBhdGhIYXNQcmVmaXggfSBmcm9tIFwiLi9wYXRoLWhhcy1wcmVmaXhcIjtcbi8qKlxuICogRm9yIGEgZ2l2ZW4gcGF0aCBhbmQgYSBsb2NhbGUsIGlmIHRoZSBsb2NhbGUgaXMgZ2l2ZW4sIGl0IHdpbGwgcHJlZml4IHRoZVxuICogbG9jYWxlLiBUaGUgcGF0aCBzaG91bGRuJ3QgYmUgYW4gQVBJIHBhdGguIElmIGEgZGVmYXVsdCBsb2NhbGUgaXMgZ2l2ZW4gdGhlXG4gKiBwcmVmaXggd2lsbCBiZSBvbWl0dGVkIGlmIHRoZSBsb2NhbGUgaXMgYWxyZWFkeSB0aGUgZGVmYXVsdCBsb2NhbGUuXG4gKi8gZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUsIGlnbm9yZVByZWZpeCkge1xuICAgIC8vIElmIG5vIGxvY2FsZSB3YXMgZ2l2ZW4gb3IgdGhlIGxvY2FsZSBpcyB0aGUgZGVmYXVsdCBsb2NhbGUsIHdlIGRvbid0IG5lZWRcbiAgICAvLyB0byBwcmVmaXggdGhlIHBhdGguXG4gICAgaWYgKCFsb2NhbGUgfHwgbG9jYWxlID09PSBkZWZhdWx0TG9jYWxlKSByZXR1cm4gcGF0aDtcbiAgICBjb25zdCBsb3dlciA9IHBhdGgudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBJZiB0aGUgcGF0aCBpcyBhbiBBUEkgcGF0aCBvciB0aGUgcGF0aCBhbHJlYWR5IGhhcyB0aGUgbG9jYWxlIHByZWZpeCwgd2VcbiAgICAvLyBkb24ndCBuZWVkIHRvIHByZWZpeCB0aGUgcGF0aC5cbiAgICBpZiAoIWlnbm9yZVByZWZpeCkge1xuICAgICAgICBpZiAocGF0aEhhc1ByZWZpeChsb3dlciwgXCIvYXBpXCIpKSByZXR1cm4gcGF0aDtcbiAgICAgICAgaWYgKHBhdGhIYXNQcmVmaXgobG93ZXIsIFwiL1wiICsgbG9jYWxlLnRvTG93ZXJDYXNlKCkpKSByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBsb2NhbGUgcHJlZml4IHRvIHRoZSBwYXRoLlxuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIFwiL1wiICsgbG9jYWxlKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWRkLWxvY2FsZS5qcy5tYXAiXSwibmFtZXMiOlsiYWRkUGF0aFByZWZpeCIsInBhdGhIYXNQcmVmaXgiLCJhZGRMb2NhbGUiLCJwYXRoIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImlnbm9yZVByZWZpeCIsImxvd2VyIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPathPrefix\": () => (/* binding */ addPathPrefix)\n/* harmony export */ });\n/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-path */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js\");\n\n/**\n * Adds the provided prefix to the given path. It first ensures that the path\n * is indeed starting with a slash.\n */ function addPathPrefix(path, prefix) {\n    if (!path.startsWith(\"/\") || !prefix) {\n        return path;\n    }\n    const { pathname , query , hash  } = (0,_parse_path__WEBPACK_IMPORTED_MODULE_0__.parsePath)(path);\n    return \"\" + prefix + pathname + query + hash;\n} //# sourceMappingURL=add-path-prefix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYWRkLXBhdGgtcHJlZml4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ3pDOzs7Q0FHQyxHQUFVLFNBQVNDLGNBQWNDLElBQUksRUFBRUMsTUFBTSxFQUFFO0lBQzVDLElBQUksQ0FBQ0QsS0FBS0UsVUFBVSxDQUFDLFFBQVEsQ0FBQ0QsUUFBUTtRQUNsQyxPQUFPRDtJQUNYLENBQUM7SUFDRCxNQUFNLEVBQUVHLFNBQVEsRUFBR0MsTUFBSyxFQUFHQyxLQUFJLEVBQUcsR0FBR1Asc0RBQVNBLENBQUNFO0lBQy9DLE9BQU8sS0FBS0MsU0FBU0UsV0FBV0MsUUFBUUM7QUFDNUMsQ0FBQyxDQUVELDJDQUEyQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hZGQtcGF0aC1wcmVmaXguanM/MTA3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZVBhdGggfSBmcm9tIFwiLi9wYXJzZS1wYXRoXCI7XG4vKipcbiAqIEFkZHMgdGhlIHByb3ZpZGVkIHByZWZpeCB0byB0aGUgZ2l2ZW4gcGF0aC4gSXQgZmlyc3QgZW5zdXJlcyB0aGF0IHRoZSBwYXRoXG4gKiBpcyBpbmRlZWQgc3RhcnRpbmcgd2l0aCBhIHNsYXNoLlxuICovIGV4cG9ydCBmdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKFwiL1wiKSB8fCAhcHJlZml4KSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lICwgcXVlcnkgLCBoYXNoICB9ID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgIHJldHVybiBcIlwiICsgcHJlZml4ICsgcGF0aG5hbWUgKyBxdWVyeSArIGhhc2g7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZC1wYXRoLXByZWZpeC5qcy5tYXAiXSwibmFtZXMiOlsicGFyc2VQYXRoIiwiYWRkUGF0aFByZWZpeCIsInBhdGgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aG5hbWUiLCJxdWVyeSIsImhhc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addPathSuffix\": () => (/* binding */ addPathSuffix)\n/* harmony export */ });\n/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-path */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js\");\n\n/**\n * Similarly to `addPathPrefix`, this function adds a suffix at the end on the\n * provided path. It also works only for paths ensuring the argument starts\n * with a slash.\n */ function addPathSuffix(path, suffix) {\n    if (!path.startsWith(\"/\") || !suffix) {\n        return path;\n    }\n    const { pathname , query , hash  } = (0,_parse_path__WEBPACK_IMPORTED_MODULE_0__.parsePath)(path);\n    return \"\" + pathname + suffix + query + hash;\n} //# sourceMappingURL=add-path-suffix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYWRkLXBhdGgtc3VmZml4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ3pDOzs7O0NBSUMsR0FBVSxTQUFTQyxjQUFjQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtJQUM1QyxJQUFJLENBQUNELEtBQUtFLFVBQVUsQ0FBQyxRQUFRLENBQUNELFFBQVE7UUFDbEMsT0FBT0Q7SUFDWCxDQUFDO0lBQ0QsTUFBTSxFQUFFRyxTQUFRLEVBQUdDLE1BQUssRUFBR0MsS0FBSSxFQUFHLEdBQUdQLHNEQUFTQSxDQUFDRTtJQUMvQyxPQUFPLEtBQUtHLFdBQVdGLFNBQVNHLFFBQVFDO0FBQzVDLENBQUMsQ0FFRCwyQ0FBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYWRkLXBhdGgtc3VmZml4LmpzP2RmY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2VQYXRoIH0gZnJvbSBcIi4vcGFyc2UtcGF0aFwiO1xuLyoqXG4gKiBTaW1pbGFybHkgdG8gYGFkZFBhdGhQcmVmaXhgLCB0aGlzIGZ1bmN0aW9uIGFkZHMgYSBzdWZmaXggYXQgdGhlIGVuZCBvbiB0aGVcbiAqIHByb3ZpZGVkIHBhdGguIEl0IGFsc28gd29ya3Mgb25seSBmb3IgcGF0aHMgZW5zdXJpbmcgdGhlIGFyZ3VtZW50IHN0YXJ0c1xuICogd2l0aCBhIHNsYXNoLlxuICovIGV4cG9ydCBmdW5jdGlvbiBhZGRQYXRoU3VmZml4KHBhdGgsIHN1ZmZpeCkge1xuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKFwiL1wiKSB8fCAhc3VmZml4KSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lICwgcXVlcnkgLCBoYXNoICB9ID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgIHJldHVybiBcIlwiICsgcGF0aG5hbWUgKyBzdWZmaXggKyBxdWVyeSArIGhhc2g7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZC1wYXRoLXN1ZmZpeC5qcy5tYXAiXSwibmFtZXMiOlsicGFyc2VQYXRoIiwiYWRkUGF0aFN1ZmZpeCIsInBhdGgiLCJzdWZmaXgiLCJzdGFydHNXaXRoIiwicGF0aG5hbWUiLCJxdWVyeSIsImhhc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"normalizeAppPath\": () => (/* binding */ normalizeAppPath),\n/* harmony export */   \"normalizeRscPath\": () => (/* binding */ normalizeRscPath)\n/* harmony export */ });\n/* harmony import */ var _page_path_ensure_leading_slash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../page-path/ensure-leading-slash */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js\");\n\n/**\n * Normalizes an app route so it represents the actual request path. Essentially\n * performing the following transformations:\n *\n * - `/(dashboard)/user/[id]/page` to `/user/[id]`\n * - `/(dashboard)/account/page` to `/account`\n * - `/user/[id]/page` to `/user/[id]`\n * - `/account/page` to `/account`\n * - `/page` to `/`\n * - `/(dashboard)/user/[id]/route` to `/user/[id]`\n * - `/(dashboard)/account/route` to `/account`\n * - `/user/[id]/route` to `/user/[id]`\n * - `/account/route` to `/account`\n * - `/route` to `/`\n * - `/` to `/`\n *\n * @param route the app route to normalize\n * @returns the normalized pathname\n */ function normalizeAppPath(route) {\n    return (0,_page_path_ensure_leading_slash__WEBPACK_IMPORTED_MODULE_0__.ensureLeadingSlash)(route.split(\"/\").reduce((pathname, segment, index, segments)=>{\n        // Empty segments are ignored.\n        if (!segment) {\n            return pathname;\n        }\n        // Groups are ignored.\n        if (segment.startsWith(\"(\") && segment.endsWith(\")\")) {\n            return pathname;\n        }\n        // Parallel segments are ignored.\n        if (segment.startsWith(\"@\")) {\n            return pathname;\n        }\n        // The last segment (if it's a leaf) should be ignored.\n        if ((segment === \"page\" || segment === \"route\") && index === segments.length - 1) {\n            return pathname;\n        }\n        return pathname + \"/\" + segment;\n    }, \"\"));\n}\n/**\n * Strips the `.rsc` extension if it's in the pathname.\n * Since this function is used on full urls it checks `?` for searchParams handling.\n */ function normalizeRscPath(pathname, enabled) {\n    return enabled ? pathname.replace(/\\.rsc($|\\?)/, \"$1\") : pathname;\n} //# sourceMappingURL=app-paths.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYXBwLXBhdGhzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwRTtBQUMxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JDLEdBQVUsU0FBU0MsaUJBQWlCQyxLQUFLLEVBQUU7SUFDeEMsT0FBT0YsbUZBQWtCQSxDQUFDRSxNQUFNQyxLQUFLLENBQUMsS0FBS0MsTUFBTSxDQUFDLENBQUNDLFVBQVVDLFNBQVNDLE9BQU9DLFdBQVc7UUFDcEYsOEJBQThCO1FBQzlCLElBQUksQ0FBQ0YsU0FBUztZQUNWLE9BQU9EO1FBQ1gsQ0FBQztRQUNELHNCQUFzQjtRQUN0QixJQUFJQyxRQUFRRyxVQUFVLENBQUMsUUFBUUgsUUFBUUksUUFBUSxDQUFDLE1BQU07WUFDbEQsT0FBT0w7UUFDWCxDQUFDO1FBQ0QsaUNBQWlDO1FBQ2pDLElBQUlDLFFBQVFHLFVBQVUsQ0FBQyxNQUFNO1lBQ3pCLE9BQU9KO1FBQ1gsQ0FBQztRQUNELHVEQUF1RDtRQUN2RCxJQUFJLENBQUNDLFlBQVksVUFBVUEsWUFBWSxPQUFNLEtBQU1DLFVBQVVDLFNBQVNHLE1BQU0sR0FBRyxHQUFHO1lBQzlFLE9BQU9OO1FBQ1gsQ0FBQztRQUNELE9BQU9BLFdBQVcsTUFBTUM7SUFDNUIsR0FBRztBQUNQLENBQUM7QUFDRDs7O0NBR0MsR0FBVSxTQUFTTSxpQkFBaUJQLFFBQVEsRUFBRVEsT0FBTyxFQUFFO0lBQ3BELE9BQU9BLFVBQVVSLFNBQVNTLE9BQU8sQ0FBQyxlQUNsQyxRQUFRVCxRQUFRO0FBQ3BCLENBQUMsQ0FFRCxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYXBwLXBhdGhzLmpzP2I2ODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5zdXJlTGVhZGluZ1NsYXNoIH0gZnJvbSBcIi4uLy4uL3BhZ2UtcGF0aC9lbnN1cmUtbGVhZGluZy1zbGFzaFwiO1xuLyoqXG4gKiBOb3JtYWxpemVzIGFuIGFwcCByb3V0ZSBzbyBpdCByZXByZXNlbnRzIHRoZSBhY3R1YWwgcmVxdWVzdCBwYXRoLiBFc3NlbnRpYWxseVxuICogcGVyZm9ybWluZyB0aGUgZm9sbG93aW5nIHRyYW5zZm9ybWF0aW9uczpcbiAqXG4gKiAtIGAvKGRhc2hib2FyZCkvdXNlci9baWRdL3BhZ2VgIHRvIGAvdXNlci9baWRdYFxuICogLSBgLyhkYXNoYm9hcmQpL2FjY291bnQvcGFnZWAgdG8gYC9hY2NvdW50YFxuICogLSBgL3VzZXIvW2lkXS9wYWdlYCB0byBgL3VzZXIvW2lkXWBcbiAqIC0gYC9hY2NvdW50L3BhZ2VgIHRvIGAvYWNjb3VudGBcbiAqIC0gYC9wYWdlYCB0byBgL2BcbiAqIC0gYC8oZGFzaGJvYXJkKS91c2VyL1tpZF0vcm91dGVgIHRvIGAvdXNlci9baWRdYFxuICogLSBgLyhkYXNoYm9hcmQpL2FjY291bnQvcm91dGVgIHRvIGAvYWNjb3VudGBcbiAqIC0gYC91c2VyL1tpZF0vcm91dGVgIHRvIGAvdXNlci9baWRdYFxuICogLSBgL2FjY291bnQvcm91dGVgIHRvIGAvYWNjb3VudGBcbiAqIC0gYC9yb3V0ZWAgdG8gYC9gXG4gKiAtIGAvYCB0byBgL2BcbiAqXG4gKiBAcGFyYW0gcm91dGUgdGhlIGFwcCByb3V0ZSB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHRoZSBub3JtYWxpemVkIHBhdGhuYW1lXG4gKi8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFwcFBhdGgocm91dGUpIHtcbiAgICByZXR1cm4gZW5zdXJlTGVhZGluZ1NsYXNoKHJvdXRlLnNwbGl0KFwiL1wiKS5yZWR1Y2UoKHBhdGhuYW1lLCBzZWdtZW50LCBpbmRleCwgc2VnbWVudHMpPT57XG4gICAgICAgIC8vIEVtcHR5IHNlZ21lbnRzIGFyZSBpZ25vcmVkLlxuICAgICAgICBpZiAoIXNlZ21lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHcm91cHMgYXJlIGlnbm9yZWQuXG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoXCIoXCIpICYmIHNlZ21lbnQuZW5kc1dpdGgoXCIpXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGFyYWxsZWwgc2VnbWVudHMgYXJlIGlnbm9yZWQuXG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoXCJAXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIGxhc3Qgc2VnbWVudCAoaWYgaXQncyBhIGxlYWYpIHNob3VsZCBiZSBpZ25vcmVkLlxuICAgICAgICBpZiAoKHNlZ21lbnQgPT09IFwicGFnZVwiIHx8IHNlZ21lbnQgPT09IFwicm91dGVcIikgJiYgaW5kZXggPT09IHNlZ21lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXRobmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aG5hbWUgKyBcIi9cIiArIHNlZ21lbnQ7XG4gICAgfSwgXCJcIikpO1xufVxuLyoqXG4gKiBTdHJpcHMgdGhlIGAucnNjYCBleHRlbnNpb24gaWYgaXQncyBpbiB0aGUgcGF0aG5hbWUuXG4gKiBTaW5jZSB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgb24gZnVsbCB1cmxzIGl0IGNoZWNrcyBgP2AgZm9yIHNlYXJjaFBhcmFtcyBoYW5kbGluZy5cbiAqLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUnNjUGF0aChwYXRobmFtZSwgZW5hYmxlZCkge1xuICAgIHJldHVybiBlbmFibGVkID8gcGF0aG5hbWUucmVwbGFjZSgvXFwucnNjKCR8XFw/KS8sIC8vICQxIGVuc3VyZXMgYD9gIGlzIHByZXNlcnZlZFxuICAgIFwiJDFcIikgOiBwYXRobmFtZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXBhdGhzLmpzLm1hcCJdLCJuYW1lcyI6WyJlbnN1cmVMZWFkaW5nU2xhc2giLCJub3JtYWxpemVBcHBQYXRoIiwicm91dGUiLCJzcGxpdCIsInJlZHVjZSIsInBhdGhuYW1lIiwic2VnbWVudCIsImluZGV4Iiwic2VnbWVudHMiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJsZW5ndGgiLCJub3JtYWxpemVSc2NQYXRoIiwiZW5hYmxlZCIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatNextPathnameInfo\": () => (/* binding */ formatNextPathnameInfo)\n/* harmony export */ });\n/* harmony import */ var _remove_trailing_slash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-trailing-slash */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js\");\n/* harmony import */ var _add_path_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-path-prefix */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js\");\n/* harmony import */ var _add_path_suffix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-path-suffix */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js\");\n/* harmony import */ var _add_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-locale */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js\");\n\n\n\n\nfunction formatNextPathnameInfo(info) {\n    let pathname = (0,_add_locale__WEBPACK_IMPORTED_MODULE_3__.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);\n    if (info.buildId || !info.trailingSlash) {\n        pathname = (0,_remove_trailing_slash__WEBPACK_IMPORTED_MODULE_0__.removeTrailingSlash)(pathname);\n    }\n    if (info.buildId) {\n        pathname = (0,_add_path_suffix__WEBPACK_IMPORTED_MODULE_2__.addPathSuffix)((0,_add_path_prefix__WEBPACK_IMPORTED_MODULE_1__.addPathPrefix)(pathname, \"/_next/data/\" + info.buildId), info.pathname === \"/\" ? \"index.json\" : \".json\");\n    }\n    pathname = (0,_add_path_prefix__WEBPACK_IMPORTED_MODULE_1__.addPathPrefix)(pathname, info.basePath);\n    return !info.buildId && info.trailingSlash ? !pathname.endsWith(\"/\") ? (0,_add_path_suffix__WEBPACK_IMPORTED_MODULE_2__.addPathSuffix)(pathname, \"/\") : pathname : (0,_remove_trailing_slash__WEBPACK_IMPORTED_MODULE_0__.removeTrailingSlash)(pathname);\n} //# sourceMappingURL=format-next-pathname-info.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LW5leHQtcGF0aG5hbWUtaW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4RDtBQUNaO0FBQ0E7QUFDVDtBQUNsQyxTQUFTSSx1QkFBdUJDLElBQUksRUFBRTtJQUN6QyxJQUFJQyxXQUFXSCxzREFBU0EsQ0FBQ0UsS0FBS0MsUUFBUSxFQUFFRCxLQUFLRSxNQUFNLEVBQUVGLEtBQUtHLE9BQU8sR0FBR0MsWUFBWUosS0FBS0ssYUFBYSxFQUFFTCxLQUFLTSxZQUFZO0lBQ3JILElBQUlOLEtBQUtHLE9BQU8sSUFBSSxDQUFDSCxLQUFLTyxhQUFhLEVBQUU7UUFDckNOLFdBQVdOLDJFQUFtQkEsQ0FBQ007SUFDbkMsQ0FBQztJQUNELElBQUlELEtBQUtHLE9BQU8sRUFBRTtRQUNkRixXQUFXSiwrREFBYUEsQ0FBQ0QsK0RBQWFBLENBQUNLLFVBQVUsaUJBQWlCRCxLQUFLRyxPQUFPLEdBQUdILEtBQUtDLFFBQVEsS0FBSyxNQUFNLGVBQWUsT0FBTztJQUNuSSxDQUFDO0lBQ0RBLFdBQVdMLCtEQUFhQSxDQUFDSyxVQUFVRCxLQUFLUSxRQUFRO0lBQ2hELE9BQU8sQ0FBQ1IsS0FBS0csT0FBTyxJQUFJSCxLQUFLTyxhQUFhLEdBQUcsQ0FBQ04sU0FBU1EsUUFBUSxDQUFDLE9BQU9aLCtEQUFhQSxDQUFDSSxVQUFVLE9BQU9BLFFBQVEsR0FBR04sMkVBQW1CQSxDQUFDTSxTQUFTO0FBQ2xKLENBQUMsQ0FFRCxxREFBcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LW5leHQtcGF0aG5hbWUtaW5mby5qcz81NDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbW92ZVRyYWlsaW5nU2xhc2ggfSBmcm9tIFwiLi9yZW1vdmUtdHJhaWxpbmctc2xhc2hcIjtcbmltcG9ydCB7IGFkZFBhdGhQcmVmaXggfSBmcm9tIFwiLi9hZGQtcGF0aC1wcmVmaXhcIjtcbmltcG9ydCB7IGFkZFBhdGhTdWZmaXggfSBmcm9tIFwiLi9hZGQtcGF0aC1zdWZmaXhcIjtcbmltcG9ydCB7IGFkZExvY2FsZSB9IGZyb20gXCIuL2FkZC1sb2NhbGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROZXh0UGF0aG5hbWVJbmZvKGluZm8pIHtcbiAgICBsZXQgcGF0aG5hbWUgPSBhZGRMb2NhbGUoaW5mby5wYXRobmFtZSwgaW5mby5sb2NhbGUsIGluZm8uYnVpbGRJZCA/IHVuZGVmaW5lZCA6IGluZm8uZGVmYXVsdExvY2FsZSwgaW5mby5pZ25vcmVQcmVmaXgpO1xuICAgIGlmIChpbmZvLmJ1aWxkSWQgfHwgIWluZm8udHJhaWxpbmdTbGFzaCkge1xuICAgICAgICBwYXRobmFtZSA9IHJlbW92ZVRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xuICAgIH1cbiAgICBpZiAoaW5mby5idWlsZElkKSB7XG4gICAgICAgIHBhdGhuYW1lID0gYWRkUGF0aFN1ZmZpeChhZGRQYXRoUHJlZml4KHBhdGhuYW1lLCBcIi9fbmV4dC9kYXRhL1wiICsgaW5mby5idWlsZElkKSwgaW5mby5wYXRobmFtZSA9PT0gXCIvXCIgPyBcImluZGV4Lmpzb25cIiA6IFwiLmpzb25cIik7XG4gICAgfVxuICAgIHBhdGhuYW1lID0gYWRkUGF0aFByZWZpeChwYXRobmFtZSwgaW5mby5iYXNlUGF0aCk7XG4gICAgcmV0dXJuICFpbmZvLmJ1aWxkSWQgJiYgaW5mby50cmFpbGluZ1NsYXNoID8gIXBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSA/IGFkZFBhdGhTdWZmaXgocGF0aG5hbWUsIFwiL1wiKSA6IHBhdGhuYW1lIDogcmVtb3ZlVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC1uZXh0LXBhdGhuYW1lLWluZm8uanMubWFwIl0sIm5hbWVzIjpbInJlbW92ZVRyYWlsaW5nU2xhc2giLCJhZGRQYXRoUHJlZml4IiwiYWRkUGF0aFN1ZmZpeCIsImFkZExvY2FsZSIsImZvcm1hdE5leHRQYXRobmFtZUluZm8iLCJpbmZvIiwicGF0aG5hbWUiLCJsb2NhbGUiLCJidWlsZElkIiwidW5kZWZpbmVkIiwiZGVmYXVsdExvY2FsZSIsImlnbm9yZVByZWZpeCIsInRyYWlsaW5nU2xhc2giLCJiYXNlUGF0aCIsImVuZHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNextPathnameInfo\": () => (/* binding */ getNextPathnameInfo)\n/* harmony export */ });\n/* harmony import */ var _i18n_normalize_locale_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../i18n/normalize-locale-path */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js\");\n/* harmony import */ var _remove_path_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-path-prefix */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js\");\n/* harmony import */ var _path_has_prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path-has-prefix */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js\");\n\n\n\nfunction getNextPathnameInfo(pathname, options) {\n    var _options_nextConfig;\n    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};\n    const info = {\n        pathname: pathname,\n        trailingSlash: pathname !== \"/\" ? pathname.endsWith(\"/\") : trailingSlash\n    };\n    if (basePath && (0,_path_has_prefix__WEBPACK_IMPORTED_MODULE_2__.pathHasPrefix)(info.pathname, basePath)) {\n        info.pathname = (0,_remove_path_prefix__WEBPACK_IMPORTED_MODULE_1__.removePathPrefix)(info.pathname, basePath);\n        info.basePath = basePath;\n    }\n    if (options.parseData === true && info.pathname.startsWith(\"/_next/data/\") && info.pathname.endsWith(\".json\")) {\n        const paths = info.pathname.replace(/^\\/_next\\/data\\//, \"\").replace(/\\.json$/, \"\").split(\"/\");\n        const buildId = paths[0];\n        info.pathname = paths[1] !== \"index\" ? \"/\" + paths.slice(1).join(\"/\") : \"/\";\n        info.buildId = buildId;\n    }\n    // If provided, use the locale route normalizer to detect the locale instead\n    // of the function below.\n    if (options.i18nProvider) {\n        const result = options.i18nProvider.analyze(info.pathname);\n        info.locale = result.detectedLocale;\n        var _result_pathname;\n        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;\n    } else if (i18n) {\n        const pathLocale = (0,_i18n_normalize_locale_path__WEBPACK_IMPORTED_MODULE_0__.normalizeLocalePath)(info.pathname, i18n.locales);\n        info.locale = pathLocale.detectedLocale;\n        var _pathLocale_pathname;\n        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;\n    }\n    return info;\n} //# sourceMappingURL=get-next-pathname-info.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LW5leHQtcGF0aG5hbWUtaW5mby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVFO0FBQ2Y7QUFDTjtBQUMzQyxTQUFTRyxvQkFBb0JDLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQ25ELElBQUlDO0lBQ0osTUFBTSxFQUFFQyxTQUFRLEVBQUdDLEtBQUksRUFBR0MsY0FBYSxFQUFHLEdBQUcsQ0FBQ0gsc0JBQXNCRCxRQUFRSyxVQUFVLEtBQUssSUFBSSxHQUFHSixzQkFBc0IsQ0FBQyxDQUFDO0lBQzFILE1BQU1LLE9BQU87UUFDVFAsVUFBVUE7UUFDVkssZUFBZUwsYUFBYSxNQUFNQSxTQUFTUSxRQUFRLENBQUMsT0FBT0gsYUFBYTtJQUM1RTtJQUNBLElBQUlGLFlBQVlMLCtEQUFhQSxDQUFDUyxLQUFLUCxRQUFRLEVBQUVHLFdBQVc7UUFDcERJLEtBQUtQLFFBQVEsR0FBR0gscUVBQWdCQSxDQUFDVSxLQUFLUCxRQUFRLEVBQUVHO1FBQ2hESSxLQUFLSixRQUFRLEdBQUdBO0lBQ3BCLENBQUM7SUFDRCxJQUFJRixRQUFRUSxTQUFTLEtBQUssSUFBSSxJQUFJRixLQUFLUCxRQUFRLENBQUNVLFVBQVUsQ0FBQyxtQkFBbUJILEtBQUtQLFFBQVEsQ0FBQ1EsUUFBUSxDQUFDLFVBQVU7UUFDM0csTUFBTUcsUUFBUUosS0FBS1AsUUFBUSxDQUFDWSxPQUFPLENBQUMsb0JBQW9CLElBQUlBLE9BQU8sQ0FBQyxXQUFXLElBQUlDLEtBQUssQ0FBQztRQUN6RixNQUFNQyxVQUFVSCxLQUFLLENBQUMsRUFBRTtRQUN4QkosS0FBS1AsUUFBUSxHQUFHVyxLQUFLLENBQUMsRUFBRSxLQUFLLFVBQVUsTUFBTUEsTUFBTUksS0FBSyxDQUFDLEdBQUdDLElBQUksQ0FBQyxPQUFPLEdBQUc7UUFDM0VULEtBQUtPLE9BQU8sR0FBR0E7SUFDbkIsQ0FBQztJQUNELDRFQUE0RTtJQUM1RSx5QkFBeUI7SUFDekIsSUFBSWIsUUFBUWdCLFlBQVksRUFBRTtRQUN0QixNQUFNQyxTQUFTakIsUUFBUWdCLFlBQVksQ0FBQ0UsT0FBTyxDQUFDWixLQUFLUCxRQUFRO1FBQ3pETyxLQUFLYSxNQUFNLEdBQUdGLE9BQU9HLGNBQWM7UUFDbkMsSUFBSUM7UUFDSmYsS0FBS1AsUUFBUSxHQUFHLENBQUNzQixtQkFBbUJKLE9BQU9sQixRQUFRLEtBQUssSUFBSSxHQUFHc0IsbUJBQW1CZixLQUFLUCxRQUFRO0lBQ25HLE9BQU8sSUFBSUksTUFBTTtRQUNiLE1BQU1tQixhQUFhM0IsZ0ZBQW1CQSxDQUFDVyxLQUFLUCxRQUFRLEVBQUVJLEtBQUtvQixPQUFPO1FBQ2xFakIsS0FBS2EsTUFBTSxHQUFHRyxXQUFXRixjQUFjO1FBQ3ZDLElBQUlJO1FBQ0psQixLQUFLUCxRQUFRLEdBQUcsQ0FBQ3lCLHVCQUF1QkYsV0FBV3ZCLFFBQVEsS0FBSyxJQUFJLEdBQUd5Qix1QkFBdUJsQixLQUFLUCxRQUFRO0lBQy9HLENBQUM7SUFDRCxPQUFPTztBQUNYLENBQUMsQ0FFRCxrREFBa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LW5leHQtcGF0aG5hbWUtaW5mby5qcz8xNDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tIFwiLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIjtcbmltcG9ydCB7IHJlbW92ZVBhdGhQcmVmaXggfSBmcm9tIFwiLi9yZW1vdmUtcGF0aC1wcmVmaXhcIjtcbmltcG9ydCB7IHBhdGhIYXNQcmVmaXggfSBmcm9tIFwiLi9wYXRoLWhhcy1wcmVmaXhcIjtcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0UGF0aG5hbWVJbmZvKHBhdGhuYW1lLCBvcHRpb25zKSB7XG4gICAgdmFyIF9vcHRpb25zX25leHRDb25maWc7XG4gICAgY29uc3QgeyBiYXNlUGF0aCAsIGkxOG4gLCB0cmFpbGluZ1NsYXNoICB9ID0gKF9vcHRpb25zX25leHRDb25maWcgPSBvcHRpb25zLm5leHRDb25maWcpICE9IG51bGwgPyBfb3B0aW9uc19uZXh0Q29uZmlnIDoge307XG4gICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgICAgICB0cmFpbGluZ1NsYXNoOiBwYXRobmFtZSAhPT0gXCIvXCIgPyBwYXRobmFtZS5lbmRzV2l0aChcIi9cIikgOiB0cmFpbGluZ1NsYXNoXG4gICAgfTtcbiAgICBpZiAoYmFzZVBhdGggJiYgcGF0aEhhc1ByZWZpeChpbmZvLnBhdGhuYW1lLCBiYXNlUGF0aCkpIHtcbiAgICAgICAgaW5mby5wYXRobmFtZSA9IHJlbW92ZVBhdGhQcmVmaXgoaW5mby5wYXRobmFtZSwgYmFzZVBhdGgpO1xuICAgICAgICBpbmZvLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnBhcnNlRGF0YSA9PT0gdHJ1ZSAmJiBpbmZvLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvX25leHQvZGF0YS9cIikgJiYgaW5mby5wYXRobmFtZS5lbmRzV2l0aChcIi5qc29uXCIpKSB7XG4gICAgICAgIGNvbnN0IHBhdGhzID0gaW5mby5wYXRobmFtZS5yZXBsYWNlKC9eXFwvX25leHRcXC9kYXRhXFwvLywgXCJcIikucmVwbGFjZSgvXFwuanNvbiQvLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gICAgICAgIGNvbnN0IGJ1aWxkSWQgPSBwYXRoc1swXTtcbiAgICAgICAgaW5mby5wYXRobmFtZSA9IHBhdGhzWzFdICE9PSBcImluZGV4XCIgPyBcIi9cIiArIHBhdGhzLnNsaWNlKDEpLmpvaW4oXCIvXCIpIDogXCIvXCI7XG4gICAgICAgIGluZm8uYnVpbGRJZCA9IGJ1aWxkSWQ7XG4gICAgfVxuICAgIC8vIElmIHByb3ZpZGVkLCB1c2UgdGhlIGxvY2FsZSByb3V0ZSBub3JtYWxpemVyIHRvIGRldGVjdCB0aGUgbG9jYWxlIGluc3RlYWRcbiAgICAvLyBvZiB0aGUgZnVuY3Rpb24gYmVsb3cuXG4gICAgaWYgKG9wdGlvbnMuaTE4blByb3ZpZGVyKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG9wdGlvbnMuaTE4blByb3ZpZGVyLmFuYWx5emUoaW5mby5wYXRobmFtZSk7XG4gICAgICAgIGluZm8ubG9jYWxlID0gcmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICB2YXIgX3Jlc3VsdF9wYXRobmFtZTtcbiAgICAgICAgaW5mby5wYXRobmFtZSA9IChfcmVzdWx0X3BhdGhuYW1lID0gcmVzdWx0LnBhdGhuYW1lKSAhPSBudWxsID8gX3Jlc3VsdF9wYXRobmFtZSA6IGluZm8ucGF0aG5hbWU7XG4gICAgfSBlbHNlIGlmIChpMThuKSB7XG4gICAgICAgIGNvbnN0IHBhdGhMb2NhbGUgPSBub3JtYWxpemVMb2NhbGVQYXRoKGluZm8ucGF0aG5hbWUsIGkxOG4ubG9jYWxlcyk7XG4gICAgICAgIGluZm8ubG9jYWxlID0gcGF0aExvY2FsZS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgdmFyIF9wYXRoTG9jYWxlX3BhdGhuYW1lO1xuICAgICAgICBpbmZvLnBhdGhuYW1lID0gKF9wYXRoTG9jYWxlX3BhdGhuYW1lID0gcGF0aExvY2FsZS5wYXRobmFtZSkgIT0gbnVsbCA/IF9wYXRoTG9jYWxlX3BhdGhuYW1lIDogaW5mby5wYXRobmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGluZm87XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldC1uZXh0LXBhdGhuYW1lLWluZm8uanMubWFwIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJyZW1vdmVQYXRoUHJlZml4IiwicGF0aEhhc1ByZWZpeCIsImdldE5leHRQYXRobmFtZUluZm8iLCJwYXRobmFtZSIsIm9wdGlvbnMiLCJfb3B0aW9uc19uZXh0Q29uZmlnIiwiYmFzZVBhdGgiLCJpMThuIiwidHJhaWxpbmdTbGFzaCIsIm5leHRDb25maWciLCJpbmZvIiwiZW5kc1dpdGgiLCJwYXJzZURhdGEiLCJzdGFydHNXaXRoIiwicGF0aHMiLCJyZXBsYWNlIiwic3BsaXQiLCJidWlsZElkIiwic2xpY2UiLCJqb2luIiwiaTE4blByb3ZpZGVyIiwicmVzdWx0IiwiYW5hbHl6ZSIsImxvY2FsZSIsImRldGVjdGVkTG9jYWxlIiwiX3Jlc3VsdF9wYXRobmFtZSIsInBhdGhMb2NhbGUiLCJsb2NhbGVzIiwiX3BhdGhMb2NhbGVfcGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parsePath\": () => (/* binding */ parsePath)\n/* harmony export */ });\n/**\n * Given a path this function will find the pathname, query and hash and return\n * them. This is useful to parse full paths on the client side.\n * @param path A path to parse e.g. /foo/bar?id=1#hash\n */ function parsePath(path) {\n    const hashIndex = path.indexOf(\"#\");\n    const queryIndex = path.indexOf(\"?\");\n    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);\n    if (hasQuery || hashIndex > -1) {\n        return {\n            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),\n            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : \"\",\n            hash: hashIndex > -1 ? path.slice(hashIndex) : \"\"\n        };\n    }\n    return {\n        pathname: path,\n        query: \"\",\n        hash: \"\"\n    };\n} //# sourceMappingURL=parse-path.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcGF0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Q0FJQyxHQUFVLFNBQVNBLFVBQVVDLElBQUksRUFBRTtJQUNoQyxNQUFNQyxZQUFZRCxLQUFLRSxPQUFPLENBQUM7SUFDL0IsTUFBTUMsYUFBYUgsS0FBS0UsT0FBTyxDQUFDO0lBQ2hDLE1BQU1FLFdBQVdELGFBQWEsQ0FBQyxLQUFNRixDQUFBQSxZQUFZLEtBQUtFLGFBQWFGLFNBQVE7SUFDM0UsSUFBSUcsWUFBWUgsWUFBWSxDQUFDLEdBQUc7UUFDNUIsT0FBTztZQUNISSxVQUFVTCxLQUFLTSxTQUFTLENBQUMsR0FBR0YsV0FBV0QsYUFBYUYsU0FBUztZQUM3RE0sT0FBT0gsV0FBV0osS0FBS00sU0FBUyxDQUFDSCxZQUFZRixZQUFZLENBQUMsSUFBSUEsWUFBWU8sU0FBUyxJQUFJLEVBQUU7WUFDekZDLE1BQU1SLFlBQVksQ0FBQyxJQUFJRCxLQUFLVSxLQUFLLENBQUNULGFBQWEsRUFBRTtRQUNyRDtJQUNKLENBQUM7SUFDRCxPQUFPO1FBQ0hJLFVBQVVMO1FBQ1ZPLE9BQU87UUFDUEUsTUFBTTtJQUNWO0FBQ0osQ0FBQyxDQUVELHNDQUFzQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1wYXRoLmpzP2IzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHaXZlbiBhIHBhdGggdGhpcyBmdW5jdGlvbiB3aWxsIGZpbmQgdGhlIHBhdGhuYW1lLCBxdWVyeSBhbmQgaGFzaCBhbmQgcmV0dXJuXG4gKiB0aGVtLiBUaGlzIGlzIHVzZWZ1bCB0byBwYXJzZSBmdWxsIHBhdGhzIG9uIHRoZSBjbGllbnQgc2lkZS5cbiAqIEBwYXJhbSBwYXRoIEEgcGF0aCB0byBwYXJzZSBlLmcuIC9mb28vYmFyP2lkPTEjaGFzaFxuICovIGV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCkge1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZihcIiNcIik7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIik7XG4gICAgY29uc3QgaGFzUXVlcnkgPSBxdWVyeUluZGV4ID4gLTEgJiYgKGhhc2hJbmRleCA8IDAgfHwgcXVlcnlJbmRleCA8IGhhc2hJbmRleCk7XG4gICAgaWYgKGhhc1F1ZXJ5IHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRobmFtZTogcGF0aC5zdWJzdHJpbmcoMCwgaGFzUXVlcnkgPyBxdWVyeUluZGV4IDogaGFzaEluZGV4KSxcbiAgICAgICAgICAgIHF1ZXJ5OiBoYXNRdWVyeSA/IHBhdGguc3Vic3RyaW5nKHF1ZXJ5SW5kZXgsIGhhc2hJbmRleCA+IC0xID8gaGFzaEluZGV4IDogdW5kZWZpbmVkKSA6IFwiXCIsXG4gICAgICAgICAgICBoYXNoOiBoYXNoSW5kZXggPiAtMSA/IHBhdGguc2xpY2UoaGFzaEluZGV4KSA6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWU6IHBhdGgsXG4gICAgICAgIHF1ZXJ5OiBcIlwiLFxuICAgICAgICBoYXNoOiBcIlwiXG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcGF0aC5qcy5tYXAiXSwibmFtZXMiOlsicGFyc2VQYXRoIiwicGF0aCIsImhhc2hJbmRleCIsImluZGV4T2YiLCJxdWVyeUluZGV4IiwiaGFzUXVlcnkiLCJwYXRobmFtZSIsInN1YnN0cmluZyIsInF1ZXJ5IiwidW5kZWZpbmVkIiwiaGFzaCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pathHasPrefix\": () => (/* binding */ pathHasPrefix)\n/* harmony export */ });\n/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-path */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js\");\n\n/**\n * Checks if a given path starts with a given prefix. It ensures it matches\n * exactly without containing extra chars. e.g. prefix /docs should replace\n * for /docs, /docs/, /docs/a but not /docsss\n * @param path The path to check.\n * @param prefix The prefix to check against.\n */ function pathHasPrefix(path, prefix) {\n    if (typeof path !== \"string\") {\n        return false;\n    }\n    const { pathname  } = (0,_parse_path__WEBPACK_IMPORTED_MODULE_0__.parsePath)(path);\n    return pathname === prefix || pathname.startsWith(prefix + \"/\");\n} //# sourceMappingURL=path-has-prefix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1oYXMtcHJlZml4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ3pDOzs7Ozs7Q0FNQyxHQUFVLFNBQVNDLGNBQWNDLElBQUksRUFBRUMsTUFBTSxFQUFFO0lBQzVDLElBQUksT0FBT0QsU0FBUyxVQUFVO1FBQzFCLE9BQU8sS0FBSztJQUNoQixDQUFDO0lBQ0QsTUFBTSxFQUFFRSxTQUFRLEVBQUcsR0FBR0osc0RBQVNBLENBQUNFO0lBQ2hDLE9BQU9FLGFBQWFELFVBQVVDLFNBQVNDLFVBQVUsQ0FBQ0YsU0FBUztBQUMvRCxDQUFDLENBRUQsMkNBQTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvZXNtL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhdGgtaGFzLXByZWZpeC5qcz82NGJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlUGF0aCB9IGZyb20gXCIuL3BhcnNlLXBhdGhcIjtcbi8qKlxuICogQ2hlY2tzIGlmIGEgZ2l2ZW4gcGF0aCBzdGFydHMgd2l0aCBhIGdpdmVuIHByZWZpeC4gSXQgZW5zdXJlcyBpdCBtYXRjaGVzXG4gKiBleGFjdGx5IHdpdGhvdXQgY29udGFpbmluZyBleHRyYSBjaGFycy4gZS5nLiBwcmVmaXggL2RvY3Mgc2hvdWxkIHJlcGxhY2VcbiAqIGZvciAvZG9jcywgL2RvY3MvLCAvZG9jcy9hIGJ1dCBub3QgL2RvY3Nzc1xuICogQHBhcmFtIHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0gcHJlZml4IFRoZSBwcmVmaXggdG8gY2hlY2sgYWdhaW5zdC5cbiAqLyBleHBvcnQgZnVuY3Rpb24gcGF0aEhhc1ByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lICB9ID0gcGFyc2VQYXRoKHBhdGgpO1xuICAgIHJldHVybiBwYXRobmFtZSA9PT0gcHJlZml4IHx8IHBhdGhuYW1lLnN0YXJ0c1dpdGgocHJlZml4ICsgXCIvXCIpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLWhhcy1wcmVmaXguanMubWFwIl0sIm5hbWVzIjpbInBhcnNlUGF0aCIsInBhdGhIYXNQcmVmaXgiLCJwYXRoIiwicHJlZml4IiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"relativizeURL\": () => (/* binding */ relativizeURL)\n/* harmony export */ });\n/**\n * Given a URL as a string and a base URL it will make the URL relative\n * if the parsed protocol and host is the same as the one in the base\n * URL. Otherwise it returns the same URL string.\n */ function relativizeURL(url, base) {\n    const baseURL = typeof base === \"string\" ? new URL(base) : base;\n    const relative = new URL(url, base);\n    const origin = baseURL.protocol + \"//\" + baseURL.host;\n    return relative.protocol + \"//\" + relative.host === origin ? relative.toString().replace(origin, \"\") : relative.toString();\n} //# sourceMappingURL=relativize-url.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVsYXRpdml6ZS11cmwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0NBSUMsR0FBVSxTQUFTQSxjQUFjQyxHQUFHLEVBQUVDLElBQUksRUFBRTtJQUN6QyxNQUFNQyxVQUFVLE9BQU9ELFNBQVMsV0FBVyxJQUFJRSxJQUFJRixRQUFRQSxJQUFJO0lBQy9ELE1BQU1HLFdBQVcsSUFBSUQsSUFBSUgsS0FBS0M7SUFDOUIsTUFBTUksU0FBU0gsUUFBUUksUUFBUSxHQUFHLE9BQU9KLFFBQVFLLElBQUk7SUFDckQsT0FBT0gsU0FBU0UsUUFBUSxHQUFHLE9BQU9GLFNBQVNHLElBQUksS0FBS0YsU0FBU0QsU0FBU0ksUUFBUSxHQUFHQyxPQUFPLENBQUNKLFFBQVEsTUFBTUQsU0FBU0ksUUFBUSxFQUFFO0FBQzlILENBQUMsQ0FFRCwwQ0FBMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVsYXRpdml6ZS11cmwuanM/NzNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdpdmVuIGEgVVJMIGFzIGEgc3RyaW5nIGFuZCBhIGJhc2UgVVJMIGl0IHdpbGwgbWFrZSB0aGUgVVJMIHJlbGF0aXZlXG4gKiBpZiB0aGUgcGFyc2VkIHByb3RvY29sIGFuZCBob3N0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgaW4gdGhlIGJhc2VcbiAqIFVSTC4gT3RoZXJ3aXNlIGl0IHJldHVybnMgdGhlIHNhbWUgVVJMIHN0cmluZy5cbiAqLyBleHBvcnQgZnVuY3Rpb24gcmVsYXRpdml6ZVVSTCh1cmwsIGJhc2UpIHtcbiAgICBjb25zdCBiYXNlVVJMID0gdHlwZW9mIGJhc2UgPT09IFwic3RyaW5nXCIgPyBuZXcgVVJMKGJhc2UpIDogYmFzZTtcbiAgICBjb25zdCByZWxhdGl2ZSA9IG5ldyBVUkwodXJsLCBiYXNlKTtcbiAgICBjb25zdCBvcmlnaW4gPSBiYXNlVVJMLnByb3RvY29sICsgXCIvL1wiICsgYmFzZVVSTC5ob3N0O1xuICAgIHJldHVybiByZWxhdGl2ZS5wcm90b2NvbCArIFwiLy9cIiArIHJlbGF0aXZlLmhvc3QgPT09IG9yaWdpbiA/IHJlbGF0aXZlLnRvU3RyaW5nKCkucmVwbGFjZShvcmlnaW4sIFwiXCIpIDogcmVsYXRpdmUudG9TdHJpbmcoKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVsYXRpdml6ZS11cmwuanMubWFwIl0sIm5hbWVzIjpbInJlbGF0aXZpemVVUkwiLCJ1cmwiLCJiYXNlIiwiYmFzZVVSTCIsIlVSTCIsInJlbGF0aXZlIiwib3JpZ2luIiwicHJvdG9jb2wiLCJob3N0IiwidG9TdHJpbmciLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removePathPrefix\": () => (/* binding */ removePathPrefix)\n/* harmony export */ });\n/* harmony import */ var _path_has_prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path-has-prefix */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js\");\n\n/**\n * Given a path and a prefix it will remove the prefix when it exists in the\n * given path. It ensures it matches exactly without containing extra chars\n * and if the prefix is not there it will be noop.\n *\n * @param path The path to remove the prefix from.\n * @param prefix The prefix to be removed.\n */ function removePathPrefix(path, prefix) {\n    // If the path doesn't start with the prefix we can return it as is. This\n    // protects us from situations where the prefix is a substring of the path\n    // prefix such as:\n    //\n    // For prefix: /blog\n    //\n    //   /blog -> true\n    //   /blog/ -> true\n    //   /blog/1 -> true\n    //   /blogging -> false\n    //   /blogging/ -> false\n    //   /blogging/1 -> false\n    if (!(0,_path_has_prefix__WEBPACK_IMPORTED_MODULE_0__.pathHasPrefix)(path, prefix)) {\n        return path;\n    }\n    // Remove the prefix from the path via slicing.\n    const withoutPrefix = path.slice(prefix.length);\n    // If the path without the prefix starts with a `/` we can return it as is.\n    if (withoutPrefix.startsWith(\"/\")) {\n        return withoutPrefix;\n    }\n    // If the path without the prefix doesn't start with a `/` we need to add it\n    // back to the path to make sure it's a valid path.\n    return \"/\" + withoutPrefix;\n} //# sourceMappingURL=remove-path-prefix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVtb3ZlLXBhdGgtcHJlZml4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBQ2xEOzs7Ozs7O0NBT0MsR0FBVSxTQUFTQyxpQkFBaUJDLElBQUksRUFBRUMsTUFBTSxFQUFFO0lBQy9DLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsa0JBQWtCO0lBQ2xCLEVBQUU7SUFDRixvQkFBb0I7SUFDcEIsRUFBRTtJQUNGLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLElBQUksQ0FBQ0gsK0RBQWFBLENBQUNFLE1BQU1DLFNBQVM7UUFDOUIsT0FBT0Q7SUFDWCxDQUFDO0lBQ0QsK0NBQStDO0lBQy9DLE1BQU1FLGdCQUFnQkYsS0FBS0csS0FBSyxDQUFDRixPQUFPRyxNQUFNO0lBQzlDLDJFQUEyRTtJQUMzRSxJQUFJRixjQUFjRyxVQUFVLENBQUMsTUFBTTtRQUMvQixPQUFPSDtJQUNYLENBQUM7SUFDRCw0RUFBNEU7SUFDNUUsbURBQW1EO0lBQ25ELE9BQU8sTUFBTUE7QUFDakIsQ0FBQyxDQUVELDhDQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yZW1vdmUtcGF0aC1wcmVmaXguanM/MTFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXRoSGFzUHJlZml4IH0gZnJvbSBcIi4vcGF0aC1oYXMtcHJlZml4XCI7XG4vKipcbiAqIEdpdmVuIGEgcGF0aCBhbmQgYSBwcmVmaXggaXQgd2lsbCByZW1vdmUgdGhlIHByZWZpeCB3aGVuIGl0IGV4aXN0cyBpbiB0aGVcbiAqIGdpdmVuIHBhdGguIEl0IGVuc3VyZXMgaXQgbWF0Y2hlcyBleGFjdGx5IHdpdGhvdXQgY29udGFpbmluZyBleHRyYSBjaGFyc1xuICogYW5kIGlmIHRoZSBwcmVmaXggaXMgbm90IHRoZXJlIGl0IHdpbGwgYmUgbm9vcC5cbiAqXG4gKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCB0byByZW1vdmUgdGhlIHByZWZpeCBmcm9tLlxuICogQHBhcmFtIHByZWZpeCBUaGUgcHJlZml4IHRvIGJlIHJlbW92ZWQuXG4gKi8gZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgLy8gSWYgdGhlIHBhdGggZG9lc24ndCBzdGFydCB3aXRoIHRoZSBwcmVmaXggd2UgY2FuIHJldHVybiBpdCBhcyBpcy4gVGhpc1xuICAgIC8vIHByb3RlY3RzIHVzIGZyb20gc2l0dWF0aW9ucyB3aGVyZSB0aGUgcHJlZml4IGlzIGEgc3Vic3RyaW5nIG9mIHRoZSBwYXRoXG4gICAgLy8gcHJlZml4IHN1Y2ggYXM6XG4gICAgLy9cbiAgICAvLyBGb3IgcHJlZml4OiAvYmxvZ1xuICAgIC8vXG4gICAgLy8gICAvYmxvZyAtPiB0cnVlXG4gICAgLy8gICAvYmxvZy8gLT4gdHJ1ZVxuICAgIC8vICAgL2Jsb2cvMSAtPiB0cnVlXG4gICAgLy8gICAvYmxvZ2dpbmcgLT4gZmFsc2VcbiAgICAvLyAgIC9ibG9nZ2luZy8gLT4gZmFsc2VcbiAgICAvLyAgIC9ibG9nZ2luZy8xIC0+IGZhbHNlXG4gICAgaWYgKCFwYXRoSGFzUHJlZml4KHBhdGgsIHByZWZpeCkpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgcHJlZml4IGZyb20gdGhlIHBhdGggdmlhIHNsaWNpbmcuXG4gICAgY29uc3Qgd2l0aG91dFByZWZpeCA9IHBhdGguc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgLy8gSWYgdGhlIHBhdGggd2l0aG91dCB0aGUgcHJlZml4IHN0YXJ0cyB3aXRoIGEgYC9gIHdlIGNhbiByZXR1cm4gaXQgYXMgaXMuXG4gICAgaWYgKHdpdGhvdXRQcmVmaXguc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgICAgcmV0dXJuIHdpdGhvdXRQcmVmaXg7XG4gICAgfVxuICAgIC8vIElmIHRoZSBwYXRoIHdpdGhvdXQgdGhlIHByZWZpeCBkb2Vzbid0IHN0YXJ0IHdpdGggYSBgL2Agd2UgbmVlZCB0byBhZGQgaXRcbiAgICAvLyBiYWNrIHRvIHRoZSBwYXRoIHRvIG1ha2Ugc3VyZSBpdCdzIGEgdmFsaWQgcGF0aC5cbiAgICByZXR1cm4gXCIvXCIgKyB3aXRob3V0UHJlZml4O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW1vdmUtcGF0aC1wcmVmaXguanMubWFwIl0sIm5hbWVzIjpbInBhdGhIYXNQcmVmaXgiLCJyZW1vdmVQYXRoUHJlZml4IiwicGF0aCIsInByZWZpeCIsIndpdGhvdXRQcmVmaXgiLCJzbGljZSIsImxlbmd0aCIsInN0YXJ0c1dpdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeTrailingSlash\": () => (/* binding */ removeTrailingSlash)\n/* harmony export */ });\n/**\n * Removes the trailing slash for a given route or page path. Preserves the\n * root page. Examples:\n *   - `/foo/bar/` -> `/foo/bar`\n *   - `/foo/bar` -> `/foo/bar`\n *   - `/` -> `/`\n */ function removeTrailingSlash(route) {\n    return route.replace(/\\/$/, \"\") || \"/\";\n} //# sourceMappingURL=remove-trailing-slash.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVtb3ZlLXRyYWlsaW5nLXNsYXNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O0NBTUMsR0FBVSxTQUFTQSxvQkFBb0JDLEtBQUssRUFBRTtJQUMzQyxPQUFPQSxNQUFNQyxPQUFPLENBQUMsT0FBTyxPQUFPO0FBQ3ZDLENBQUMsQ0FFRCxpREFBaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVtb3ZlLXRyYWlsaW5nLXNsYXNoLmpzPzgyZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBmb3IgYSBnaXZlbiByb3V0ZSBvciBwYWdlIHBhdGguIFByZXNlcnZlcyB0aGVcbiAqIHJvb3QgcGFnZS4gRXhhbXBsZXM6XG4gKiAgIC0gYC9mb28vYmFyL2AgLT4gYC9mb28vYmFyYFxuICogICAtIGAvZm9vL2JhcmAgLT4gYC9mb28vYmFyYFxuICogICAtIGAvYCAtPiBgL2BcbiAqLyBleHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhaWxpbmdTbGFzaChyb3V0ZSkge1xuICAgIHJldHVybiByb3V0ZS5yZXBsYWNlKC9cXC8kLywgXCJcIikgfHwgXCIvXCI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlbW92ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiXSwibmFtZXMiOlsicmVtb3ZlVHJhaWxpbmdTbGFzaCIsInJvdXRlIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/get-hostname.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/get-hostname.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"getHostname\", ({\n    enumerable: true,\n    get: function() {\n        return getHostname;\n    }\n}));\nfunction getHostname(parsed, headers) {\n    // Get the hostname from the headers if it exists, otherwise use the parsed\n    // hostname.\n    let hostname;\n    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {\n        hostname = headers.host.toString().split(\":\")[0];\n    } else if (parsed.hostname) {\n        hostname = parsed.hostname;\n    } else return;\n    return hostname.toLowerCase();\n} //# sourceMappingURL=get-hostname.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2dldC1ob3N0bmFtZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGSCwrQ0FBOEM7SUFDMUNJLFlBQVksSUFBSTtJQUNoQkMsS0FBSyxXQUFXO1FBQ1osT0FBT0M7SUFDWDtBQUNKLENBQUMsRUFBQztBQUNGLFNBQVNBLFlBQVlDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0lBQ2xDLDJFQUEyRTtJQUMzRSxZQUFZO0lBQ1osSUFBSUM7SUFDSixJQUFJLENBQUNELFdBQVcsSUFBSSxHQUFHLEtBQUssSUFBSUEsUUFBUUUsSUFBSSxLQUFLLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0osUUFBUUUsSUFBSSxHQUFHO1FBQzNFRCxXQUFXRCxRQUFRRSxJQUFJLENBQUNHLFFBQVEsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3BELE9BQU8sSUFBSVAsT0FBT0UsUUFBUSxFQUFFO1FBQ3hCQSxXQUFXRixPQUFPRSxRQUFRO0lBQzlCLE9BQU87SUFDUCxPQUFPQSxTQUFTTSxXQUFXO0FBQy9CLEVBRUEsd0NBQXdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9nZXQtaG9zdG5hbWUuanM/NGNmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImdldEhvc3RuYW1lXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXRIb3N0bmFtZTtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIGdldEhvc3RuYW1lKHBhcnNlZCwgaGVhZGVycykge1xuICAgIC8vIEdldCB0aGUgaG9zdG5hbWUgZnJvbSB0aGUgaGVhZGVycyBpZiBpdCBleGlzdHMsIG90aGVyd2lzZSB1c2UgdGhlIHBhcnNlZFxuICAgIC8vIGhvc3RuYW1lLlxuICAgIGxldCBob3N0bmFtZTtcbiAgICBpZiAoKGhlYWRlcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGhlYWRlcnMuaG9zdCkgJiYgIUFycmF5LmlzQXJyYXkoaGVhZGVycy5ob3N0KSkge1xuICAgICAgICBob3N0bmFtZSA9IGhlYWRlcnMuaG9zdC50b1N0cmluZygpLnNwbGl0KFwiOlwiKVswXTtcbiAgICB9IGVsc2UgaWYgKHBhcnNlZC5ob3N0bmFtZSkge1xuICAgICAgICBob3N0bmFtZSA9IHBhcnNlZC5ob3N0bmFtZTtcbiAgICB9IGVsc2UgcmV0dXJuO1xuICAgIHJldHVybiBob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXQtaG9zdG5hbWUuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsImdldEhvc3RuYW1lIiwicGFyc2VkIiwiaGVhZGVycyIsImhvc3RuYW1lIiwiaG9zdCIsIkFycmF5IiwiaXNBcnJheSIsInRvU3RyaW5nIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/get-hostname.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"detectDomainLocale\", ({\n    enumerable: true,\n    get: function() {\n        return detectDomainLocale;\n    }\n}));\nfunction detectDomainLocale(domainItems, hostname, detectedLocale) {\n    if (!domainItems) return;\n    if (detectedLocale) {\n        detectedLocale = detectedLocale.toLowerCase();\n    }\n    for (const item of domainItems){\n        var _item_domain, _item_locales;\n        // remove port if present\n        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(\":\")[0].toLowerCase();\n        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {\n            return item;\n        }\n    }\n} //# sourceMappingURL=detect-domain-locale.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkgsc0RBQXFEO0lBQ2pESSxZQUFZLElBQUk7SUFDaEJDLEtBQUssV0FBVztRQUNaLE9BQU9DO0lBQ1g7QUFDSixDQUFDLEVBQUM7QUFDRixTQUFTQSxtQkFBbUJDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDL0QsSUFBSSxDQUFDRixhQUFhO0lBQ2xCLElBQUlFLGdCQUFnQjtRQUNoQkEsaUJBQWlCQSxlQUFlQyxXQUFXO0lBQy9DLENBQUM7SUFDRCxLQUFLLE1BQU1DLFFBQVFKLFlBQVk7UUFDM0IsSUFBSUssY0FBY0M7UUFDbEIseUJBQXlCO1FBQ3pCLE1BQU1DLGlCQUFpQixDQUFDRixlQUFlRCxLQUFLSSxNQUFNLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSUgsYUFBYUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNOLFdBQVcsRUFBRTtRQUMvRyxJQUFJRixhQUFhTSxrQkFBa0JMLG1CQUFtQkUsS0FBS00sYUFBYSxDQUFDUCxXQUFXLE1BQU8sRUFBQ0csZ0JBQWdCRixLQUFLTyxPQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSUwsY0FBY00sSUFBSSxDQUFDLENBQUNDLFNBQVNBLE9BQU9WLFdBQVcsT0FBT0QsZUFBZSxHQUFHO1lBQ2pOLE9BQU9FO1FBQ1gsQ0FBQztJQUNMO0FBQ0osRUFFQSxnREFBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanM/NzhkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRldGVjdERvbWFpbkxvY2FsZVwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZGV0ZWN0RG9tYWluTG9jYWxlO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLCBob3N0bmFtZSwgZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICBpZiAoIWRvbWFpbkl0ZW1zKSByZXR1cm47XG4gICAgaWYgKGRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIGRldGVjdGVkTG9jYWxlID0gZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXtcbiAgICAgICAgdmFyIF9pdGVtX2RvbWFpbiwgX2l0ZW1fbG9jYWxlcztcbiAgICAgICAgLy8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuICAgICAgICBjb25zdCBkb21haW5Ib3N0bmFtZSA9IChfaXRlbV9kb21haW4gPSBpdGVtLmRvbWFpbikgPT0gbnVsbCA/IHZvaWQgMCA6IF9pdGVtX2RvbWFpbi5zcGxpdChcIjpcIilbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGhvc3RuYW1lID09PSBkb21haW5Ib3N0bmFtZSB8fCBkZXRlY3RlZExvY2FsZSA9PT0gaXRlbS5kZWZhdWx0TG9jYWxlLnRvTG93ZXJDYXNlKCkgfHwgKChfaXRlbV9sb2NhbGVzID0gaXRlbS5sb2NhbGVzKSA9PSBudWxsID8gdm9pZCAwIDogX2l0ZW1fbG9jYWxlcy5zb21lKChsb2NhbGUpPT5sb2NhbGUudG9Mb3dlckNhc2UoKSA9PT0gZGV0ZWN0ZWRMb2NhbGUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldGVjdC1kb21haW4tbG9jYWxlLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJkb21haW5JdGVtcyIsImhvc3RuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJ0b0xvd2VyQ2FzZSIsIml0ZW0iLCJfaXRlbV9kb21haW4iLCJfaXRlbV9sb2NhbGVzIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW4iLCJzcGxpdCIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVzIiwic29tZSIsImxvY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"normalizeLocalePath\", ({\n    enumerable: true,\n    get: function() {\n        return normalizeLocalePath;\n    }\n}));\nfunction normalizeLocalePath(pathname, locales) {\n    let detectedLocale;\n    // first item will be empty string from splitting at first char\n    const pathnameParts = pathname.split(\"/\");\n    (locales || []).some((locale)=>{\n        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {\n            detectedLocale = locale;\n            pathnameParts.splice(1, 1);\n            pathname = pathnameParts.join(\"/\") || \"/\";\n            return true;\n        }\n        return false;\n    });\n    return {\n        pathname,\n        detectedLocale\n    };\n} //# sourceMappingURL=normalize-locale-path.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUN6Q0csT0FBTyxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILHVEQUFzRDtJQUNsREksWUFBWSxJQUFJO0lBQ2hCQyxLQUFLLFdBQVc7UUFDWixPQUFPQztJQUNYO0FBQ0osQ0FBQyxFQUFDO0FBQ0YsU0FBU0Esb0JBQW9CQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUM1QyxJQUFJQztJQUNKLCtEQUErRDtJQUMvRCxNQUFNQyxnQkFBZ0JILFNBQVNJLEtBQUssQ0FBQztJQUNwQ0gsQ0FBQUEsV0FBVyxFQUFFLEVBQUVJLElBQUksQ0FBQyxDQUFDQyxTQUFTO1FBQzNCLElBQUlILGFBQWEsQ0FBQyxFQUFFLElBQUlBLGFBQWEsQ0FBQyxFQUFFLENBQUNJLFdBQVcsT0FBT0QsT0FBT0MsV0FBVyxJQUFJO1lBQzdFTCxpQkFBaUJJO1lBQ2pCSCxjQUFjSyxNQUFNLENBQUMsR0FBRztZQUN4QlIsV0FBV0csY0FBY00sSUFBSSxDQUFDLFFBQVE7WUFDdEMsT0FBTyxJQUFJO1FBQ2YsQ0FBQztRQUNELE9BQU8sS0FBSztJQUNoQjtJQUNBLE9BQU87UUFDSFQ7UUFDQUU7SUFDSjtBQUNKLEVBRUEsaURBQWlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcz8wNDNiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm9ybWFsaXplTG9jYWxlUGF0aFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplTG9jYWxlUGF0aDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsIGxvY2FsZXMpIHtcbiAgICBsZXQgZGV0ZWN0ZWRMb2NhbGU7XG4gICAgLy8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG4gICAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcbiAgICAobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKT0+e1xuICAgICAgICBpZiAocGF0aG5hbWVQYXJ0c1sxXSAmJiBwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZTtcbiAgICAgICAgICAgIHBhdGhuYW1lUGFydHMuc3BsaWNlKDEsIDEpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oXCIvXCIpIHx8IFwiL1wiO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBkZXRlY3RlZExvY2FsZVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsImxvY2FsZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-locale.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/add-locale.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"addLocale\", ({\n    enumerable: true,\n    get: function() {\n        return addLocale;\n    }\n}));\nconst _addpathprefix = __webpack_require__(/*! ./add-path-prefix */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js\");\nconst _pathhasprefix = __webpack_require__(/*! ./path-has-prefix */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js\");\nfunction addLocale(path, locale, defaultLocale, ignorePrefix) {\n    // If no locale was given or the locale is the default locale, we don't need\n    // to prefix the path.\n    if (!locale || locale === defaultLocale) return path;\n    const lower = path.toLowerCase();\n    // If the path is an API path or the path already has the locale prefix, we\n    // don't need to prefix the path.\n    if (!ignorePrefix) {\n        if ((0, _pathhasprefix.pathHasPrefix)(lower, \"/api\")) return path;\n        if ((0, _pathhasprefix.pathHasPrefix)(lower, \"/\" + locale.toLowerCase())) return path;\n    }\n    // Add the locale prefix to the path.\n    return (0, _addpathprefix.addPathPrefix)(path, \"/\" + locale);\n} //# sourceMappingURL=add-locale.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hZGQtbG9jYWxlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUN6Q0csT0FBTyxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILDZDQUE0QztJQUN4Q0ksWUFBWSxJQUFJO0lBQ2hCQyxLQUFLLFdBQVc7UUFDWixPQUFPQztJQUNYO0FBQ0osQ0FBQyxFQUFDO0FBQ0YsTUFBTUMsaUJBQWlCQyxtQkFBT0EsQ0FBQywyR0FBbUI7QUFDbEQsTUFBTUMsaUJBQWlCRCxtQkFBT0EsQ0FBQywyR0FBbUI7QUFDbEQsU0FBU0YsVUFBVUksSUFBSSxFQUFFQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFO0lBQzFELDRFQUE0RTtJQUM1RSxzQkFBc0I7SUFDdEIsSUFBSSxDQUFDRixVQUFVQSxXQUFXQyxlQUFlLE9BQU9GO0lBQ2hELE1BQU1JLFFBQVFKLEtBQUtLLFdBQVc7SUFDOUIsMkVBQTJFO0lBQzNFLGlDQUFpQztJQUNqQyxJQUFJLENBQUNGLGNBQWM7UUFDZixJQUFJLENBQUMsR0FBR0osZUFBZU8sYUFBYSxFQUFFRixPQUFPLFNBQVMsT0FBT0o7UUFDN0QsSUFBSSxDQUFDLEdBQUdELGVBQWVPLGFBQWEsRUFBRUYsT0FBTyxNQUFNSCxPQUFPSSxXQUFXLEtBQUssT0FBT0w7SUFDckYsQ0FBQztJQUNELHFDQUFxQztJQUNyQyxPQUFPLENBQUMsR0FBR0gsZUFBZVUsYUFBYSxFQUFFUCxNQUFNLE1BQU1DO0FBQ3pELEVBRUEsc0NBQXNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYWRkLWxvY2FsZS5qcz8wMjMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWRkTG9jYWxlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhZGRMb2NhbGU7XG4gICAgfVxufSk7XG5jb25zdCBfYWRkcGF0aHByZWZpeCA9IHJlcXVpcmUoXCIuL2FkZC1wYXRoLXByZWZpeFwiKTtcbmNvbnN0IF9wYXRoaGFzcHJlZml4ID0gcmVxdWlyZShcIi4vcGF0aC1oYXMtcHJlZml4XCIpO1xuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSwgaWdub3JlUHJlZml4KSB7XG4gICAgLy8gSWYgbm8gbG9jYWxlIHdhcyBnaXZlbiBvciB0aGUgbG9jYWxlIGlzIHRoZSBkZWZhdWx0IGxvY2FsZSwgd2UgZG9uJ3QgbmVlZFxuICAgIC8vIHRvIHByZWZpeCB0aGUgcGF0aC5cbiAgICBpZiAoIWxvY2FsZSB8fCBsb2NhbGUgPT09IGRlZmF1bHRMb2NhbGUpIHJldHVybiBwYXRoO1xuICAgIGNvbnN0IGxvd2VyID0gcGF0aC50b0xvd2VyQ2FzZSgpO1xuICAgIC8vIElmIHRoZSBwYXRoIGlzIGFuIEFQSSBwYXRoIG9yIHRoZSBwYXRoIGFscmVhZHkgaGFzIHRoZSBsb2NhbGUgcHJlZml4LCB3ZVxuICAgIC8vIGRvbid0IG5lZWQgdG8gcHJlZml4IHRoZSBwYXRoLlxuICAgIGlmICghaWdub3JlUHJlZml4KSB7XG4gICAgICAgIGlmICgoMCwgX3BhdGhoYXNwcmVmaXgucGF0aEhhc1ByZWZpeCkobG93ZXIsIFwiL2FwaVwiKSkgcmV0dXJuIHBhdGg7XG4gICAgICAgIGlmICgoMCwgX3BhdGhoYXNwcmVmaXgucGF0aEhhc1ByZWZpeCkobG93ZXIsIFwiL1wiICsgbG9jYWxlLnRvTG93ZXJDYXNlKCkpKSByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgLy8gQWRkIHRoZSBsb2NhbGUgcHJlZml4IHRvIHRoZSBwYXRoLlxuICAgIHJldHVybiAoMCwgX2FkZHBhdGhwcmVmaXguYWRkUGF0aFByZWZpeCkocGF0aCwgXCIvXCIgKyBsb2NhbGUpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGQtbG9jYWxlLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJhZGRMb2NhbGUiLCJfYWRkcGF0aHByZWZpeCIsInJlcXVpcmUiLCJfcGF0aGhhc3ByZWZpeCIsInBhdGgiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiaWdub3JlUHJlZml4IiwibG93ZXIiLCJ0b0xvd2VyQ2FzZSIsInBhdGhIYXNQcmVmaXgiLCJhZGRQYXRoUHJlZml4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-locale.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"addPathPrefix\", ({\n    enumerable: true,\n    get: function() {\n        return addPathPrefix;\n    }\n}));\nconst _parsepath = __webpack_require__(/*! ./parse-path */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/parse-path.js\");\nfunction addPathPrefix(path, prefix) {\n    if (!path.startsWith(\"/\") || !prefix) {\n        return path;\n    }\n    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);\n    return \"\" + prefix + pathname + query + hash;\n} //# sourceMappingURL=add-path-prefix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hZGQtcGF0aC1wcmVmaXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkgsaURBQWdEO0lBQzVDSSxZQUFZLElBQUk7SUFDaEJDLEtBQUssV0FBVztRQUNaLE9BQU9DO0lBQ1g7QUFDSixDQUFDLEVBQUM7QUFDRixNQUFNQyxhQUFhQyxtQkFBT0EsQ0FBQyxpR0FBYztBQUN6QyxTQUFTRixjQUFjRyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtJQUNqQyxJQUFJLENBQUNELEtBQUtFLFVBQVUsQ0FBQyxRQUFRLENBQUNELFFBQVE7UUFDbEMsT0FBT0Q7SUFDWCxDQUFDO0lBQ0QsTUFBTSxFQUFFRyxTQUFRLEVBQUdDLE1BQUssRUFBR0MsS0FBSSxFQUFHLEdBQUcsQ0FBQyxHQUFHUCxXQUFXUSxTQUFTLEVBQUVOO0lBQy9ELE9BQU8sS0FBS0MsU0FBU0UsV0FBV0MsUUFBUUM7QUFDNUMsRUFFQSwyQ0FBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hZGQtcGF0aC1wcmVmaXguanM/YzEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFkZFBhdGhQcmVmaXhcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFkZFBhdGhQcmVmaXg7XG4gICAgfVxufSk7XG5jb25zdCBfcGFyc2VwYXRoID0gcmVxdWlyZShcIi4vcGFyc2UtcGF0aFwiKTtcbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpIHx8ICFwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgLCBxdWVyeSAsIGhhc2ggIH0gPSAoMCwgX3BhcnNlcGF0aC5wYXJzZVBhdGgpKHBhdGgpO1xuICAgIHJldHVybiBcIlwiICsgcHJlZml4ICsgcGF0aG5hbWUgKyBxdWVyeSArIGhhc2g7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZC1wYXRoLXByZWZpeC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiYWRkUGF0aFByZWZpeCIsIl9wYXJzZXBhdGgiLCJyZXF1aXJlIiwicGF0aCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaGFzaCIsInBhcnNlUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"addPathSuffix\", ({\n    enumerable: true,\n    get: function() {\n        return addPathSuffix;\n    }\n}));\nconst _parsepath = __webpack_require__(/*! ./parse-path */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/parse-path.js\");\nfunction addPathSuffix(path, suffix) {\n    if (!path.startsWith(\"/\") || !suffix) {\n        return path;\n    }\n    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);\n    return \"\" + pathname + suffix + query + hash;\n} //# sourceMappingURL=add-path-suffix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hZGQtcGF0aC1zdWZmaXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkgsaURBQWdEO0lBQzVDSSxZQUFZLElBQUk7SUFDaEJDLEtBQUssV0FBVztRQUNaLE9BQU9DO0lBQ1g7QUFDSixDQUFDLEVBQUM7QUFDRixNQUFNQyxhQUFhQyxtQkFBT0EsQ0FBQyxpR0FBYztBQUN6QyxTQUFTRixjQUFjRyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtJQUNqQyxJQUFJLENBQUNELEtBQUtFLFVBQVUsQ0FBQyxRQUFRLENBQUNELFFBQVE7UUFDbEMsT0FBT0Q7SUFDWCxDQUFDO0lBQ0QsTUFBTSxFQUFFRyxTQUFRLEVBQUdDLE1BQUssRUFBR0MsS0FBSSxFQUFHLEdBQUcsQ0FBQyxHQUFHUCxXQUFXUSxTQUFTLEVBQUVOO0lBQy9ELE9BQU8sS0FBS0csV0FBV0YsU0FBU0csUUFBUUM7QUFDNUMsRUFFQSwyQ0FBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9hZGQtcGF0aC1zdWZmaXguanM/N2IzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFkZFBhdGhTdWZmaXhcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFkZFBhdGhTdWZmaXg7XG4gICAgfVxufSk7XG5jb25zdCBfcGFyc2VwYXRoID0gcmVxdWlyZShcIi4vcGFyc2UtcGF0aFwiKTtcbmZ1bmN0aW9uIGFkZFBhdGhTdWZmaXgocGF0aCwgc3VmZml4KSB7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpIHx8ICFzdWZmaXgpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgLCBxdWVyeSAsIGhhc2ggIH0gPSAoMCwgX3BhcnNlcGF0aC5wYXJzZVBhdGgpKHBhdGgpO1xuICAgIHJldHVybiBcIlwiICsgcGF0aG5hbWUgKyBzdWZmaXggKyBxdWVyeSArIGhhc2g7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkZC1wYXRoLXN1ZmZpeC5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiYWRkUGF0aFN1ZmZpeCIsIl9wYXJzZXBhdGgiLCJyZXF1aXJlIiwicGF0aCIsInN1ZmZpeCIsInN0YXJ0c1dpdGgiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaGFzaCIsInBhcnNlUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"formatNextPathnameInfo\", ({\n    enumerable: true,\n    get: function() {\n        return formatNextPathnameInfo;\n    }\n}));\nconst _removetrailingslash = __webpack_require__(/*! ./remove-trailing-slash */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js\");\nconst _addpathprefix = __webpack_require__(/*! ./add-path-prefix */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js\");\nconst _addpathsuffix = __webpack_require__(/*! ./add-path-suffix */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js\");\nconst _addlocale = __webpack_require__(/*! ./add-locale */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/add-locale.js\");\nfunction formatNextPathnameInfo(info) {\n    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);\n    if (info.buildId || !info.trailingSlash) {\n        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);\n    }\n    if (info.buildId) {\n        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, \"/_next/data/\" + info.buildId), info.pathname === \"/\" ? \"index.json\" : \".json\");\n    }\n    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);\n    return !info.buildId && info.trailingSlash ? !pathname.endsWith(\"/\") ? (0, _addpathsuffix.addPathSuffix)(pathname, \"/\") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);\n} //# sourceMappingURL=format-next-pathname-info.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9mb3JtYXQtbmV4dC1wYXRobmFtZS1pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUN6Q0csT0FBTyxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILDBEQUF5RDtJQUNyREksWUFBWSxJQUFJO0lBQ2hCQyxLQUFLLFdBQVc7UUFDWixPQUFPQztJQUNYO0FBQ0osQ0FBQyxFQUFDO0FBQ0YsTUFBTUMsdUJBQXVCQyxtQkFBT0EsQ0FBQyx1SEFBeUI7QUFDOUQsTUFBTUMsaUJBQWlCRCxtQkFBT0EsQ0FBQywyR0FBbUI7QUFDbEQsTUFBTUUsaUJBQWlCRixtQkFBT0EsQ0FBQywyR0FBbUI7QUFDbEQsTUFBTUcsYUFBYUgsbUJBQU9BLENBQUMsaUdBQWM7QUFDekMsU0FBU0YsdUJBQXVCTSxJQUFJLEVBQUU7SUFDbEMsSUFBSUMsV0FBVyxDQUFDLEdBQUdGLFdBQVdHLFNBQVMsRUFBRUYsS0FBS0MsUUFBUSxFQUFFRCxLQUFLRyxNQUFNLEVBQUVILEtBQUtJLE9BQU8sR0FBR0MsWUFBWUwsS0FBS00sYUFBYSxFQUFFTixLQUFLTyxZQUFZO0lBQ3JJLElBQUlQLEtBQUtJLE9BQU8sSUFBSSxDQUFDSixLQUFLUSxhQUFhLEVBQUU7UUFDckNQLFdBQVcsQ0FBQyxHQUFHTixxQkFBcUJjLG1CQUFtQixFQUFFUjtJQUM3RCxDQUFDO0lBQ0QsSUFBSUQsS0FBS0ksT0FBTyxFQUFFO1FBQ2RILFdBQVcsQ0FBQyxHQUFHSCxlQUFlWSxhQUFhLEVBQUUsQ0FBQyxHQUFHYixlQUFlYyxhQUFhLEVBQUVWLFVBQVUsaUJBQWlCRCxLQUFLSSxPQUFPLEdBQUdKLEtBQUtDLFFBQVEsS0FBSyxNQUFNLGVBQWUsT0FBTztJQUMzSyxDQUFDO0lBQ0RBLFdBQVcsQ0FBQyxHQUFHSixlQUFlYyxhQUFhLEVBQUVWLFVBQVVELEtBQUtZLFFBQVE7SUFDcEUsT0FBTyxDQUFDWixLQUFLSSxPQUFPLElBQUlKLEtBQUtRLGFBQWEsR0FBRyxDQUFDUCxTQUFTWSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUdmLGVBQWVZLGFBQWEsRUFBRVQsVUFBVSxPQUFPQSxRQUFRLEdBQUcsQ0FBQyxHQUFHTixxQkFBcUJjLG1CQUFtQixFQUFFUixTQUFTO0FBQ2hNLEVBRUEscURBQXFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LW5leHQtcGF0aG5hbWUtaW5mby5qcz9iMTQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZm9ybWF0TmV4dFBhdGhuYW1lSW5mb1wiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0TmV4dFBhdGhuYW1lSW5mbztcbiAgICB9XG59KTtcbmNvbnN0IF9yZW1vdmV0cmFpbGluZ3NsYXNoID0gcmVxdWlyZShcIi4vcmVtb3ZlLXRyYWlsaW5nLXNsYXNoXCIpO1xuY29uc3QgX2FkZHBhdGhwcmVmaXggPSByZXF1aXJlKFwiLi9hZGQtcGF0aC1wcmVmaXhcIik7XG5jb25zdCBfYWRkcGF0aHN1ZmZpeCA9IHJlcXVpcmUoXCIuL2FkZC1wYXRoLXN1ZmZpeFwiKTtcbmNvbnN0IF9hZGRsb2NhbGUgPSByZXF1aXJlKFwiLi9hZGQtbG9jYWxlXCIpO1xuZnVuY3Rpb24gZm9ybWF0TmV4dFBhdGhuYW1lSW5mbyhpbmZvKSB7XG4gICAgbGV0IHBhdGhuYW1lID0gKDAsIF9hZGRsb2NhbGUuYWRkTG9jYWxlKShpbmZvLnBhdGhuYW1lLCBpbmZvLmxvY2FsZSwgaW5mby5idWlsZElkID8gdW5kZWZpbmVkIDogaW5mby5kZWZhdWx0TG9jYWxlLCBpbmZvLmlnbm9yZVByZWZpeCk7XG4gICAgaWYgKGluZm8uYnVpbGRJZCB8fCAhaW5mby50cmFpbGluZ1NsYXNoKSB7XG4gICAgICAgIHBhdGhuYW1lID0gKDAsIF9yZW1vdmV0cmFpbGluZ3NsYXNoLnJlbW92ZVRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtcbiAgICB9XG4gICAgaWYgKGluZm8uYnVpbGRJZCkge1xuICAgICAgICBwYXRobmFtZSA9ICgwLCBfYWRkcGF0aHN1ZmZpeC5hZGRQYXRoU3VmZml4KSgoMCwgX2FkZHBhdGhwcmVmaXguYWRkUGF0aFByZWZpeCkocGF0aG5hbWUsIFwiL19uZXh0L2RhdGEvXCIgKyBpbmZvLmJ1aWxkSWQpLCBpbmZvLnBhdGhuYW1lID09PSBcIi9cIiA/IFwiaW5kZXguanNvblwiIDogXCIuanNvblwiKTtcbiAgICB9XG4gICAgcGF0aG5hbWUgPSAoMCwgX2FkZHBhdGhwcmVmaXguYWRkUGF0aFByZWZpeCkocGF0aG5hbWUsIGluZm8uYmFzZVBhdGgpO1xuICAgIHJldHVybiAhaW5mby5idWlsZElkICYmIGluZm8udHJhaWxpbmdTbGFzaCA/ICFwYXRobmFtZS5lbmRzV2l0aChcIi9cIikgPyAoMCwgX2FkZHBhdGhzdWZmaXguYWRkUGF0aFN1ZmZpeCkocGF0aG5hbWUsIFwiL1wiKSA6IHBhdGhuYW1lIDogKDAsIF9yZW1vdmV0cmFpbGluZ3NsYXNoLnJlbW92ZVRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LW5leHQtcGF0aG5hbWUtaW5mby5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiZm9ybWF0TmV4dFBhdGhuYW1lSW5mbyIsIl9yZW1vdmV0cmFpbGluZ3NsYXNoIiwicmVxdWlyZSIsIl9hZGRwYXRocHJlZml4IiwiX2FkZHBhdGhzdWZmaXgiLCJfYWRkbG9jYWxlIiwiaW5mbyIsInBhdGhuYW1lIiwiYWRkTG9jYWxlIiwibG9jYWxlIiwiYnVpbGRJZCIsInVuZGVmaW5lZCIsImRlZmF1bHRMb2NhbGUiLCJpZ25vcmVQcmVmaXgiLCJ0cmFpbGluZ1NsYXNoIiwicmVtb3ZlVHJhaWxpbmdTbGFzaCIsImFkZFBhdGhTdWZmaXgiLCJhZGRQYXRoUHJlZml4IiwiYmFzZVBhdGgiLCJlbmRzV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"getNextPathnameInfo\", ({\n    enumerable: true,\n    get: function() {\n        return getNextPathnameInfo;\n    }\n}));\nconst _normalizelocalepath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ \"(middleware)/./node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js\");\nconst _removepathprefix = __webpack_require__(/*! ./remove-path-prefix */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js\");\nconst _pathhasprefix = __webpack_require__(/*! ./path-has-prefix */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js\");\nfunction getNextPathnameInfo(pathname, options) {\n    var _options_nextConfig;\n    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};\n    const info = {\n        pathname: pathname,\n        trailingSlash: pathname !== \"/\" ? pathname.endsWith(\"/\") : trailingSlash\n    };\n    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {\n        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);\n        info.basePath = basePath;\n    }\n    if (options.parseData === true && info.pathname.startsWith(\"/_next/data/\") && info.pathname.endsWith(\".json\")) {\n        const paths = info.pathname.replace(/^\\/_next\\/data\\//, \"\").replace(/\\.json$/, \"\").split(\"/\");\n        const buildId = paths[0];\n        info.pathname = paths[1] !== \"index\" ? \"/\" + paths.slice(1).join(\"/\") : \"/\";\n        info.buildId = buildId;\n    }\n    // If provided, use the locale route normalizer to detect the locale instead\n    // of the function below.\n    if (options.i18nProvider) {\n        const result = options.i18nProvider.analyze(info.pathname);\n        info.locale = result.detectedLocale;\n        var _result_pathname;\n        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;\n    } else if (i18n) {\n        const pathLocale = (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);\n        info.locale = pathLocale.detectedLocale;\n        var _pathLocale_pathname;\n        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;\n    }\n    return info;\n} //# sourceMappingURL=get-next-pathname-info.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtbmV4dC1wYXRobmFtZS1pbmZvLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUN6Q0csT0FBTyxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILHVEQUFzRDtJQUNsREksWUFBWSxJQUFJO0lBQ2hCQyxLQUFLLFdBQVc7UUFDWixPQUFPQztJQUNYO0FBQ0osQ0FBQyxFQUFDO0FBQ0YsTUFBTUMsdUJBQXVCQyxtQkFBT0EsQ0FBQyx3SEFBa0M7QUFDdkUsTUFBTUMsb0JBQW9CRCxtQkFBT0EsQ0FBQyxpSEFBc0I7QUFDeEQsTUFBTUUsaUJBQWlCRixtQkFBT0EsQ0FBQywyR0FBbUI7QUFDbEQsU0FBU0Ysb0JBQW9CSyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUM1QyxJQUFJQztJQUNKLE1BQU0sRUFBRUMsU0FBUSxFQUFHQyxLQUFJLEVBQUdDLGNBQWEsRUFBRyxHQUFHLENBQUNILHNCQUFzQkQsUUFBUUssVUFBVSxLQUFLLElBQUksR0FBR0osc0JBQXNCLENBQUMsQ0FBQztJQUMxSCxNQUFNSyxPQUFPO1FBQ1RQLFVBQVVBO1FBQ1ZLLGVBQWVMLGFBQWEsTUFBTUEsU0FBU1EsUUFBUSxDQUFDLE9BQU9ILGFBQWE7SUFDNUU7SUFDQSxJQUFJRixZQUFZLENBQUMsR0FBR0osZUFBZVUsYUFBYSxFQUFFRixLQUFLUCxRQUFRLEVBQUVHLFdBQVc7UUFDeEVJLEtBQUtQLFFBQVEsR0FBRyxDQUFDLEdBQUdGLGtCQUFrQlksZ0JBQWdCLEVBQUVILEtBQUtQLFFBQVEsRUFBRUc7UUFDdkVJLEtBQUtKLFFBQVEsR0FBR0E7SUFDcEIsQ0FBQztJQUNELElBQUlGLFFBQVFVLFNBQVMsS0FBSyxJQUFJLElBQUlKLEtBQUtQLFFBQVEsQ0FBQ1ksVUFBVSxDQUFDLG1CQUFtQkwsS0FBS1AsUUFBUSxDQUFDUSxRQUFRLENBQUMsVUFBVTtRQUMzRyxNQUFNSyxRQUFRTixLQUFLUCxRQUFRLENBQUNjLE9BQU8sQ0FBQyxvQkFBb0IsSUFBSUEsT0FBTyxDQUFDLFdBQVcsSUFBSUMsS0FBSyxDQUFDO1FBQ3pGLE1BQU1DLFVBQVVILEtBQUssQ0FBQyxFQUFFO1FBQ3hCTixLQUFLUCxRQUFRLEdBQUdhLEtBQUssQ0FBQyxFQUFFLEtBQUssVUFBVSxNQUFNQSxNQUFNSSxLQUFLLENBQUMsR0FBR0MsSUFBSSxDQUFDLE9BQU8sR0FBRztRQUMzRVgsS0FBS1MsT0FBTyxHQUFHQTtJQUNuQixDQUFDO0lBQ0QsNEVBQTRFO0lBQzVFLHlCQUF5QjtJQUN6QixJQUFJZixRQUFRa0IsWUFBWSxFQUFFO1FBQ3RCLE1BQU1DLFNBQVNuQixRQUFRa0IsWUFBWSxDQUFDRSxPQUFPLENBQUNkLEtBQUtQLFFBQVE7UUFDekRPLEtBQUtlLE1BQU0sR0FBR0YsT0FBT0csY0FBYztRQUNuQyxJQUFJQztRQUNKakIsS0FBS1AsUUFBUSxHQUFHLENBQUN3QixtQkFBbUJKLE9BQU9wQixRQUFRLEtBQUssSUFBSSxHQUFHd0IsbUJBQW1CakIsS0FBS1AsUUFBUTtJQUNuRyxPQUFPLElBQUlJLE1BQU07UUFDYixNQUFNcUIsYUFBYSxDQUFDLEdBQUc3QixxQkFBcUI4QixtQkFBbUIsRUFBRW5CLEtBQUtQLFFBQVEsRUFBRUksS0FBS3VCLE9BQU87UUFDNUZwQixLQUFLZSxNQUFNLEdBQUdHLFdBQVdGLGNBQWM7UUFDdkMsSUFBSUs7UUFDSnJCLEtBQUtQLFFBQVEsR0FBRyxDQUFDNEIsdUJBQXVCSCxXQUFXekIsUUFBUSxLQUFLLElBQUksR0FBRzRCLHVCQUF1QnJCLEtBQUtQLFFBQVE7SUFDL0csQ0FBQztJQUNELE9BQU9PO0FBQ1gsRUFFQSxrREFBa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtbmV4dC1wYXRobmFtZS1pbmZvLmpzPzBkMjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXROZXh0UGF0aG5hbWVJbmZvXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXROZXh0UGF0aG5hbWVJbmZvO1xuICAgIH1cbn0pO1xuY29uc3QgX25vcm1hbGl6ZWxvY2FsZXBhdGggPSByZXF1aXJlKFwiLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG5jb25zdCBfcmVtb3ZlcGF0aHByZWZpeCA9IHJlcXVpcmUoXCIuL3JlbW92ZS1wYXRoLXByZWZpeFwiKTtcbmNvbnN0IF9wYXRoaGFzcHJlZml4ID0gcmVxdWlyZShcIi4vcGF0aC1oYXMtcHJlZml4XCIpO1xuZnVuY3Rpb24gZ2V0TmV4dFBhdGhuYW1lSW5mbyhwYXRobmFtZSwgb3B0aW9ucykge1xuICAgIHZhciBfb3B0aW9uc19uZXh0Q29uZmlnO1xuICAgIGNvbnN0IHsgYmFzZVBhdGggLCBpMThuICwgdHJhaWxpbmdTbGFzaCAgfSA9IChfb3B0aW9uc19uZXh0Q29uZmlnID0gb3B0aW9ucy5uZXh0Q29uZmlnKSAhPSBudWxsID8gX29wdGlvbnNfbmV4dENvbmZpZyA6IHt9O1xuICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICAgICAgdHJhaWxpbmdTbGFzaDogcGF0aG5hbWUgIT09IFwiL1wiID8gcGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpIDogdHJhaWxpbmdTbGFzaFxuICAgIH07XG4gICAgaWYgKGJhc2VQYXRoICYmICgwLCBfcGF0aGhhc3ByZWZpeC5wYXRoSGFzUHJlZml4KShpbmZvLnBhdGhuYW1lLCBiYXNlUGF0aCkpIHtcbiAgICAgICAgaW5mby5wYXRobmFtZSA9ICgwLCBfcmVtb3ZlcGF0aHByZWZpeC5yZW1vdmVQYXRoUHJlZml4KShpbmZvLnBhdGhuYW1lLCBiYXNlUGF0aCk7XG4gICAgICAgIGluZm8uYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyc2VEYXRhID09PSB0cnVlICYmIGluZm8ucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9fbmV4dC9kYXRhL1wiKSAmJiBpbmZvLnBhdGhuYW1lLmVuZHNXaXRoKFwiLmpzb25cIikpIHtcbiAgICAgICAgY29uc3QgcGF0aHMgPSBpbmZvLnBhdGhuYW1lLnJlcGxhY2UoL15cXC9fbmV4dFxcL2RhdGFcXC8vLCBcIlwiKS5yZXBsYWNlKC9cXC5qc29uJC8sIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgICAgICAgY29uc3QgYnVpbGRJZCA9IHBhdGhzWzBdO1xuICAgICAgICBpbmZvLnBhdGhuYW1lID0gcGF0aHNbMV0gIT09IFwiaW5kZXhcIiA/IFwiL1wiICsgcGF0aHMuc2xpY2UoMSkuam9pbihcIi9cIikgOiBcIi9cIjtcbiAgICAgICAgaW5mby5idWlsZElkID0gYnVpbGRJZDtcbiAgICB9XG4gICAgLy8gSWYgcHJvdmlkZWQsIHVzZSB0aGUgbG9jYWxlIHJvdXRlIG5vcm1hbGl6ZXIgdG8gZGV0ZWN0IHRoZSBsb2NhbGUgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBmdW5jdGlvbiBiZWxvdy5cbiAgICBpZiAob3B0aW9ucy5pMThuUHJvdmlkZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gb3B0aW9ucy5pMThuUHJvdmlkZXIuYW5hbHl6ZShpbmZvLnBhdGhuYW1lKTtcbiAgICAgICAgaW5mby5sb2NhbGUgPSByZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIHZhciBfcmVzdWx0X3BhdGhuYW1lO1xuICAgICAgICBpbmZvLnBhdGhuYW1lID0gKF9yZXN1bHRfcGF0aG5hbWUgPSByZXN1bHQucGF0aG5hbWUpICE9IG51bGwgPyBfcmVzdWx0X3BhdGhuYW1lIDogaW5mby5wYXRobmFtZTtcbiAgICB9IGVsc2UgaWYgKGkxOG4pIHtcbiAgICAgICAgY29uc3QgcGF0aExvY2FsZSA9ICgwLCBfbm9ybWFsaXplbG9jYWxlcGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShpbmZvLnBhdGhuYW1lLCBpMThuLmxvY2FsZXMpO1xuICAgICAgICBpbmZvLmxvY2FsZSA9IHBhdGhMb2NhbGUuZGV0ZWN0ZWRMb2NhbGU7XG4gICAgICAgIHZhciBfcGF0aExvY2FsZV9wYXRobmFtZTtcbiAgICAgICAgaW5mby5wYXRobmFtZSA9IChfcGF0aExvY2FsZV9wYXRobmFtZSA9IHBhdGhMb2NhbGUucGF0aG5hbWUpICE9IG51bGwgPyBfcGF0aExvY2FsZV9wYXRobmFtZSA6IGluZm8ucGF0aG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBpbmZvO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXQtbmV4dC1wYXRobmFtZS1pbmZvLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJnZXROZXh0UGF0aG5hbWVJbmZvIiwiX25vcm1hbGl6ZWxvY2FsZXBhdGgiLCJyZXF1aXJlIiwiX3JlbW92ZXBhdGhwcmVmaXgiLCJfcGF0aGhhc3ByZWZpeCIsInBhdGhuYW1lIiwib3B0aW9ucyIsIl9vcHRpb25zX25leHRDb25maWciLCJiYXNlUGF0aCIsImkxOG4iLCJ0cmFpbGluZ1NsYXNoIiwibmV4dENvbmZpZyIsImluZm8iLCJlbmRzV2l0aCIsInBhdGhIYXNQcmVmaXgiLCJyZW1vdmVQYXRoUHJlZml4IiwicGFyc2VEYXRhIiwic3RhcnRzV2l0aCIsInBhdGhzIiwicmVwbGFjZSIsInNwbGl0IiwiYnVpbGRJZCIsInNsaWNlIiwiam9pbiIsImkxOG5Qcm92aWRlciIsInJlc3VsdCIsImFuYWx5emUiLCJsb2NhbGUiLCJkZXRlY3RlZExvY2FsZSIsIl9yZXN1bHRfcGF0aG5hbWUiLCJwYXRoTG9jYWxlIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImxvY2FsZXMiLCJfcGF0aExvY2FsZV9wYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/parse-path.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/parse-path.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/**\n * Given a path this function will find the pathname, query and hash and return\n * them. This is useful to parse full paths on the client side.\n * @param path A path to parse e.g. /foo/bar?id=1#hash\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"parsePath\", ({\n    enumerable: true,\n    get: function() {\n        return parsePath;\n    }\n}));\nfunction parsePath(path) {\n    const hashIndex = path.indexOf(\"#\");\n    const queryIndex = path.indexOf(\"?\");\n    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);\n    if (hasQuery || hashIndex > -1) {\n        return {\n            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),\n            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : \"\",\n            hash: hashIndex > -1 ? path.slice(hashIndex) : \"\"\n        };\n    }\n    return {\n        pathname: path,\n        query: \"\",\n        hash: \"\"\n    };\n} //# sourceMappingURL=parse-path.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1wYXRoLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7O0NBSUMsR0FBZ0I7QUFDakJBLDhDQUE2QztJQUN6Q0csT0FBTyxJQUFJO0FBQ2YsQ0FBQyxFQUFDO0FBQ0ZILDZDQUE0QztJQUN4Q0ksWUFBWSxJQUFJO0lBQ2hCQyxLQUFLLFdBQVc7UUFDWixPQUFPQztJQUNYO0FBQ0osQ0FBQyxFQUFDO0FBQ0YsU0FBU0EsVUFBVUMsSUFBSSxFQUFFO0lBQ3JCLE1BQU1DLFlBQVlELEtBQUtFLE9BQU8sQ0FBQztJQUMvQixNQUFNQyxhQUFhSCxLQUFLRSxPQUFPLENBQUM7SUFDaEMsTUFBTUUsV0FBV0QsYUFBYSxDQUFDLEtBQU1GLENBQUFBLFlBQVksS0FBS0UsYUFBYUYsU0FBUTtJQUMzRSxJQUFJRyxZQUFZSCxZQUFZLENBQUMsR0FBRztRQUM1QixPQUFPO1lBQ0hJLFVBQVVMLEtBQUtNLFNBQVMsQ0FBQyxHQUFHRixXQUFXRCxhQUFhRixTQUFTO1lBQzdETSxPQUFPSCxXQUFXSixLQUFLTSxTQUFTLENBQUNILFlBQVlGLFlBQVksQ0FBQyxJQUFJQSxZQUFZTyxTQUFTLElBQUksRUFBRTtZQUN6RkMsTUFBTVIsWUFBWSxDQUFDLElBQUlELEtBQUtVLEtBQUssQ0FBQ1QsYUFBYSxFQUFFO1FBQ3JEO0lBQ0osQ0FBQztJQUNELE9BQU87UUFDSEksVUFBVUw7UUFDVk8sT0FBTztRQUNQRSxNQUFNO0lBQ1Y7QUFDSixFQUVBLHNDQUFzQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXBhdGguanM/ZTUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdpdmVuIGEgcGF0aCB0aGlzIGZ1bmN0aW9uIHdpbGwgZmluZCB0aGUgcGF0aG5hbWUsIHF1ZXJ5IGFuZCBoYXNoIGFuZCByZXR1cm5cbiAqIHRoZW0uIFRoaXMgaXMgdXNlZnVsIHRvIHBhcnNlIGZ1bGwgcGF0aHMgb24gdGhlIGNsaWVudCBzaWRlLlxuICogQHBhcmFtIHBhdGggQSBwYXRoIHRvIHBhcnNlIGUuZy4gL2Zvby9iYXI/aWQ9MSNoYXNoXG4gKi8gXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVBhdGhcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlUGF0aDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiI1wiKTtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKFwiP1wiKTtcbiAgICBjb25zdCBoYXNRdWVyeSA9IHF1ZXJ5SW5kZXggPiAtMSAmJiAoaGFzaEluZGV4IDwgMCB8fCBxdWVyeUluZGV4IDwgaGFzaEluZGV4KTtcbiAgICBpZiAoaGFzUXVlcnkgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBwYXRoLnN1YnN0cmluZygwLCBoYXNRdWVyeSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpLFxuICAgICAgICAgICAgcXVlcnk6IGhhc1F1ZXJ5ID8gcGF0aC5zdWJzdHJpbmcocXVlcnlJbmRleCwgaGFzaEluZGV4ID4gLTEgPyBoYXNoSW5kZXggOiB1bmRlZmluZWQpIDogXCJcIixcbiAgICAgICAgICAgIGhhc2g6IGhhc2hJbmRleCA+IC0xID8gcGF0aC5zbGljZShoYXNoSW5kZXgpIDogXCJcIlxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZTogcGF0aCxcbiAgICAgICAgcXVlcnk6IFwiXCIsXG4gICAgICAgIGhhc2g6IFwiXCJcbiAgICB9O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1wYXRoLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJwYXJzZVBhdGgiLCJwYXRoIiwiaGFzaEluZGV4IiwiaW5kZXhPZiIsInF1ZXJ5SW5kZXgiLCJoYXNRdWVyeSIsInBhdGhuYW1lIiwic3Vic3RyaW5nIiwicXVlcnkiLCJ1bmRlZmluZWQiLCJoYXNoIiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/parse-path.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"pathHasPrefix\", ({\n    enumerable: true,\n    get: function() {\n        return pathHasPrefix;\n    }\n}));\nconst _parsepath = __webpack_require__(/*! ./parse-path */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/parse-path.js\");\nfunction pathHasPrefix(path, prefix) {\n    if (typeof path !== \"string\") {\n        return false;\n    }\n    const { pathname  } = (0, _parsepath.parsePath)(path);\n    return pathname === prefix || pathname.startsWith(prefix + \"/\");\n} //# sourceMappingURL=path-has-prefix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXRoLWhhcy1wcmVmaXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkgsaURBQWdEO0lBQzVDSSxZQUFZLElBQUk7SUFDaEJDLEtBQUssV0FBVztRQUNaLE9BQU9DO0lBQ1g7QUFDSixDQUFDLEVBQUM7QUFDRixNQUFNQyxhQUFhQyxtQkFBT0EsQ0FBQyxpR0FBYztBQUN6QyxTQUFTRixjQUFjRyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtJQUNqQyxJQUFJLE9BQU9ELFNBQVMsVUFBVTtRQUMxQixPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUNELE1BQU0sRUFBRUUsU0FBUSxFQUFHLEdBQUcsQ0FBQyxHQUFHSixXQUFXSyxTQUFTLEVBQUVIO0lBQ2hELE9BQU9FLGFBQWFELFVBQVVDLFNBQVNFLFVBQVUsQ0FBQ0gsU0FBUztBQUMvRCxFQUVBLDJDQUEyQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhdGgtaGFzLXByZWZpeC5qcz9iNTM4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGF0aEhhc1ByZWZpeFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGF0aEhhc1ByZWZpeDtcbiAgICB9XG59KTtcbmNvbnN0IF9wYXJzZXBhdGggPSByZXF1aXJlKFwiLi9wYXJzZS1wYXRoXCIpO1xuZnVuY3Rpb24gcGF0aEhhc1ByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IHBhdGhuYW1lICB9ID0gKDAsIF9wYXJzZXBhdGgucGFyc2VQYXRoKShwYXRoKTtcbiAgICByZXR1cm4gcGF0aG5hbWUgPT09IHByZWZpeCB8fCBwYXRobmFtZS5zdGFydHNXaXRoKHByZWZpeCArIFwiL1wiKTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC1oYXMtcHJlZml4LmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJwYXRoSGFzUHJlZml4IiwiX3BhcnNlcGF0aCIsInJlcXVpcmUiLCJwYXRoIiwicHJlZml4IiwicGF0aG5hbWUiLCJwYXJzZVBhdGgiLCJzdGFydHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"removePathPrefix\", ({\n    enumerable: true,\n    get: function() {\n        return removePathPrefix;\n    }\n}));\nconst _pathhasprefix = __webpack_require__(/*! ./path-has-prefix */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js\");\nfunction removePathPrefix(path, prefix) {\n    // If the path doesn't start with the prefix we can return it as is. This\n    // protects us from situations where the prefix is a substring of the path\n    // prefix such as:\n    //\n    // For prefix: /blog\n    //\n    //   /blog -> true\n    //   /blog/ -> true\n    //   /blog/1 -> true\n    //   /blogging -> false\n    //   /blogging/ -> false\n    //   /blogging/1 -> false\n    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {\n        return path;\n    }\n    // Remove the prefix from the path via slicing.\n    const withoutPrefix = path.slice(prefix.length);\n    // If the path without the prefix starts with a `/` we can return it as is.\n    if (withoutPrefix.startsWith(\"/\")) {\n        return withoutPrefix;\n    }\n    // If the path without the prefix doesn't start with a `/` we need to add it\n    // back to the path to make sure it's a valid path.\n    return \"/\" + withoutPrefix;\n} //# sourceMappingURL=remove-path-prefix.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yZW1vdmUtcGF0aC1wcmVmaXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRkgsb0RBQW1EO0lBQy9DSSxZQUFZLElBQUk7SUFDaEJDLEtBQUssV0FBVztRQUNaLE9BQU9DO0lBQ1g7QUFDSixDQUFDLEVBQUM7QUFDRixNQUFNQyxpQkFBaUJDLG1CQUFPQSxDQUFDLDJHQUFtQjtBQUNsRCxTQUFTRixpQkFBaUJHLElBQUksRUFBRUMsTUFBTSxFQUFFO0lBQ3BDLHlFQUF5RTtJQUN6RSwwRUFBMEU7SUFDMUUsa0JBQWtCO0lBQ2xCLEVBQUU7SUFDRixvQkFBb0I7SUFDcEIsRUFBRTtJQUNGLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLElBQUksQ0FBQyxDQUFDLEdBQUdILGVBQWVJLGFBQWEsRUFBRUYsTUFBTUMsU0FBUztRQUNsRCxPQUFPRDtJQUNYLENBQUM7SUFDRCwrQ0FBK0M7SUFDL0MsTUFBTUcsZ0JBQWdCSCxLQUFLSSxLQUFLLENBQUNILE9BQU9JLE1BQU07SUFDOUMsMkVBQTJFO0lBQzNFLElBQUlGLGNBQWNHLFVBQVUsQ0FBQyxNQUFNO1FBQy9CLE9BQU9IO0lBQ1gsQ0FBQztJQUNELDRFQUE0RTtJQUM1RSxtREFBbUQ7SUFDbkQsT0FBTyxNQUFNQTtBQUNqQixFQUVBLDhDQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JlbW92ZS1wYXRoLXByZWZpeC5qcz82MTQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVtb3ZlUGF0aFByZWZpeFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFByZWZpeDtcbiAgICB9XG59KTtcbmNvbnN0IF9wYXRoaGFzcHJlZml4ID0gcmVxdWlyZShcIi4vcGF0aC1oYXMtcHJlZml4XCIpO1xuZnVuY3Rpb24gcmVtb3ZlUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICAvLyBJZiB0aGUgcGF0aCBkb2Vzbid0IHN0YXJ0IHdpdGggdGhlIHByZWZpeCB3ZSBjYW4gcmV0dXJuIGl0IGFzIGlzLiBUaGlzXG4gICAgLy8gcHJvdGVjdHMgdXMgZnJvbSBzaXR1YXRpb25zIHdoZXJlIHRoZSBwcmVmaXggaXMgYSBzdWJzdHJpbmcgb2YgdGhlIHBhdGhcbiAgICAvLyBwcmVmaXggc3VjaCBhczpcbiAgICAvL1xuICAgIC8vIEZvciBwcmVmaXg6IC9ibG9nXG4gICAgLy9cbiAgICAvLyAgIC9ibG9nIC0+IHRydWVcbiAgICAvLyAgIC9ibG9nLyAtPiB0cnVlXG4gICAgLy8gICAvYmxvZy8xIC0+IHRydWVcbiAgICAvLyAgIC9ibG9nZ2luZyAtPiBmYWxzZVxuICAgIC8vICAgL2Jsb2dnaW5nLyAtPiBmYWxzZVxuICAgIC8vICAgL2Jsb2dnaW5nLzEgLT4gZmFsc2VcbiAgICBpZiAoISgwLCBfcGF0aGhhc3ByZWZpeC5wYXRoSGFzUHJlZml4KShwYXRoLCBwcmVmaXgpKSB7XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIHByZWZpeCBmcm9tIHRoZSBwYXRoIHZpYSBzbGljaW5nLlxuICAgIGNvbnN0IHdpdGhvdXRQcmVmaXggPSBwYXRoLnNsaWNlKHByZWZpeC5sZW5ndGgpO1xuICAgIC8vIElmIHRoZSBwYXRoIHdpdGhvdXQgdGhlIHByZWZpeCBzdGFydHMgd2l0aCBhIGAvYCB3ZSBjYW4gcmV0dXJuIGl0IGFzIGlzLlxuICAgIGlmICh3aXRob3V0UHJlZml4LnN0YXJ0c1dpdGgoXCIvXCIpKSB7XG4gICAgICAgIHJldHVybiB3aXRob3V0UHJlZml4O1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcGF0aCB3aXRob3V0IHRoZSBwcmVmaXggZG9lc24ndCBzdGFydCB3aXRoIGEgYC9gIHdlIG5lZWQgdG8gYWRkIGl0XG4gICAgLy8gYmFjayB0byB0aGUgcGF0aCB0byBtYWtlIHN1cmUgaXQncyBhIHZhbGlkIHBhdGguXG4gICAgcmV0dXJuIFwiL1wiICsgd2l0aG91dFByZWZpeDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVtb3ZlLXBhdGgtcHJlZml4LmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJnZXQiLCJyZW1vdmVQYXRoUHJlZml4IiwiX3BhdGhoYXNwcmVmaXgiLCJyZXF1aXJlIiwicGF0aCIsInByZWZpeCIsInBhdGhIYXNQcmVmaXgiLCJ3aXRob3V0UHJlZml4Iiwic2xpY2UiLCJsZW5ndGgiLCJzdGFydHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/**\n * Removes the trailing slash for a given route or page path. Preserves the\n * root page. Examples:\n *   - `/foo/bar/` -> `/foo/bar`\n *   - `/foo/bar` -> `/foo/bar`\n *   - `/` -> `/`\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"removeTrailingSlash\", ({\n    enumerable: true,\n    get: function() {\n        return removeTrailingSlash;\n    }\n}));\nfunction removeTrailingSlash(route) {\n    return route.replace(/\\/$/, \"\") || \"/\";\n} //# sourceMappingURL=remove-trailing-slash.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yZW1vdmUtdHJhaWxpbmctc2xhc2guanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztDQU1DLEdBQWdCO0FBQ2pCQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGSCx1REFBc0Q7SUFDbERJLFlBQVksSUFBSTtJQUNoQkMsS0FBSyxXQUFXO1FBQ1osT0FBT0M7SUFDWDtBQUNKLENBQUMsRUFBQztBQUNGLFNBQVNBLG9CQUFvQkMsS0FBSyxFQUFFO0lBQ2hDLE9BQU9BLE1BQU1DLE9BQU8sQ0FBQyxPQUFPLE9BQU87QUFDdkMsRUFFQSxpREFBaUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yZW1vdmUtdHJhaWxpbmctc2xhc2guanM/ZWMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIGZvciBhIGdpdmVuIHJvdXRlIG9yIHBhZ2UgcGF0aC4gUHJlc2VydmVzIHRoZVxuICogcm9vdCBwYWdlLiBFeGFtcGxlczpcbiAqICAgLSBgL2Zvby9iYXIvYCAtPiBgL2Zvby9iYXJgXG4gKiAgIC0gYC9mb28vYmFyYCAtPiBgL2Zvby9iYXJgXG4gKiAgIC0gYC9gIC0+IGAvYFxuICovIFwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVtb3ZlVHJhaWxpbmdTbGFzaFwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVHJhaWxpbmdTbGFzaDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nU2xhc2gocm91dGUpIHtcbiAgICByZXR1cm4gcm91dGUucmVwbGFjZSgvXFwvJC8sIFwiXCIpIHx8IFwiL1wiO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZW1vdmUtdHJhaWxpbmctc2xhc2guanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZW51bWVyYWJsZSIsImdldCIsInJlbW92ZVRyYWlsaW5nU2xhc2giLCJyb3V0ZSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\n\n// src/index.ts\nvar src_exports = {};\n__export(src_exports, {\n  RequestCookies: () => RequestCookies,\n  ResponseCookies: () => ResponseCookies\n});\nmodule.exports = __toCommonJS(src_exports);\n\n// src/serialize.ts\nfunction serialize(c) {\n  const attrs = [\n    \"path\" in c && c.path && `Path=${c.path}`,\n    \"expires\" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === \"number\" ? new Date(c.expires) : c.expires).toUTCString()}`,\n    \"maxAge\" in c && c.maxAge && `Max-Age=${c.maxAge}`,\n    \"domain\" in c && c.domain && `Domain=${c.domain}`,\n    \"secure\" in c && c.secure && \"Secure\",\n    \"httpOnly\" in c && c.httpOnly && \"HttpOnly\",\n    \"sameSite\" in c && c.sameSite && `SameSite=${c.sameSite}`\n  ].filter(Boolean);\n  return `${c.name}=${encodeURIComponent(c.value ?? \"\")}; ${attrs.join(\"; \")}`;\n}\nfunction parseCookieString(cookie) {\n  const map = /* @__PURE__ */ new Map();\n  for (const pair of cookie.split(/; */)) {\n    if (!pair)\n      continue;\n    const splitAt = pair.indexOf(\"=\");\n    const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];\n    try {\n      map.set(key, decodeURIComponent(value ?? \"true\"));\n    } catch {\n    }\n  }\n  return map;\n}\nfunction parseSetCookieString(setCookie) {\n  if (!setCookie) {\n    return void 0;\n  }\n  const [[name, value], ...attributes] = parseCookieString(setCookie);\n  const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(\n    attributes.map(([key, value2]) => [key.toLowerCase(), value2])\n  );\n  const cookie = {\n    name,\n    value: decodeURIComponent(value),\n    domain,\n    ...expires && { expires: new Date(expires) },\n    ...httponly && { httpOnly: true },\n    ...typeof maxage === \"string\" && { maxAge: Number(maxage) },\n    path,\n    ...samesite && { sameSite: parseSameSite(samesite) },\n    ...secure && { secure: true }\n  };\n  return compact(cookie);\n}\nfunction compact(t) {\n  const newT = {};\n  for (const key in t) {\n    if (t[key]) {\n      newT[key] = t[key];\n    }\n  }\n  return newT;\n}\nvar SAME_SITE = [\"strict\", \"lax\", \"none\"];\nfunction parseSameSite(string) {\n  string = string.toLowerCase();\n  return SAME_SITE.includes(string) ? string : void 0;\n}\n\n// src/request-cookies.ts\nvar RequestCookies = class {\n  constructor(requestHeaders) {\n    this._parsed = /* @__PURE__ */ new Map();\n    this._headers = requestHeaders;\n    const header = requestHeaders.get(\"cookie\");\n    if (header) {\n      const parsed = parseCookieString(header);\n      for (const [name, value] of parsed) {\n        this._parsed.set(name, { name, value });\n      }\n    }\n  }\n  [Symbol.iterator]() {\n    return this._parsed[Symbol.iterator]();\n  }\n  get size() {\n    return this._parsed.size;\n  }\n  get(...args) {\n    const name = typeof args[0] === \"string\" ? args[0] : args[0].name;\n    return this._parsed.get(name);\n  }\n  getAll(...args) {\n    var _a;\n    const all = Array.from(this._parsed);\n    if (!args.length) {\n      return all.map(([_, value]) => value);\n    }\n    const name = typeof args[0] === \"string\" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;\n    return all.filter(([n]) => n === name).map(([_, value]) => value);\n  }\n  has(name) {\n    return this._parsed.has(name);\n  }\n  set(...args) {\n    const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;\n    const map = this._parsed;\n    map.set(name, { name, value });\n    this._headers.set(\n      \"cookie\",\n      Array.from(map).map(([_, value2]) => serialize(value2)).join(\"; \")\n    );\n    return this;\n  }\n  delete(names) {\n    const map = this._parsed;\n    const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));\n    this._headers.set(\n      \"cookie\",\n      Array.from(map).map(([_, value]) => serialize(value)).join(\"; \")\n    );\n    return result;\n  }\n  clear() {\n    this.delete(Array.from(this._parsed.keys()));\n    return this;\n  }\n  [Symbol.for(\"edge-runtime.inspect.custom\")]() {\n    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;\n  }\n  toString() {\n    return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join(\"; \");\n  }\n};\n\n// src/response-cookies.ts\nvar ResponseCookies = class {\n  constructor(responseHeaders) {\n    this._parsed = /* @__PURE__ */ new Map();\n    var _a;\n    this._headers = responseHeaders;\n    const setCookie = ((_a = responseHeaders.getAll) == null ? void 0 : _a.call(responseHeaders, \"set-cookie\")) ?? responseHeaders.get(\"set-cookie\") ?? [];\n    const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);\n    for (const cookieString of cookieStrings) {\n      const parsed = parseSetCookieString(cookieString);\n      if (parsed)\n        this._parsed.set(parsed.name, parsed);\n    }\n  }\n  get(...args) {\n    const key = typeof args[0] === \"string\" ? args[0] : args[0].name;\n    return this._parsed.get(key);\n  }\n  getAll(...args) {\n    var _a;\n    const all = Array.from(this._parsed.values());\n    if (!args.length) {\n      return all;\n    }\n    const key = typeof args[0] === \"string\" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;\n    return all.filter((c) => c.name === key);\n  }\n  set(...args) {\n    const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;\n    const map = this._parsed;\n    map.set(name, normalizeCookie({ name, value, ...cookie }));\n    replace(map, this._headers);\n    return this;\n  }\n  delete(...args) {\n    const name = typeof args[0] === \"string\" ? args[0] : args[0].name;\n    return this.set({ name, value: \"\", expires: new Date(0) });\n  }\n  [Symbol.for(\"edge-runtime.inspect.custom\")]() {\n    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;\n  }\n  toString() {\n    return [...this._parsed.values()].map(serialize).join(\"; \");\n  }\n};\nfunction replace(bag, headers) {\n  headers.delete(\"set-cookie\");\n  for (const [, value] of bag) {\n    const serialized = serialize(value);\n    headers.append(\"set-cookie\", serialized);\n  }\n}\nfunction normalizeCookie(cookie = { name: \"\", value: \"\" }) {\n  if (typeof cookie.expires === \"number\") {\n    cookie.expires = new Date(cookie.expires);\n  }\n  if (cookie.maxAge) {\n    cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);\n  }\n  if (cookie.path === null || cookie.path === void 0) {\n    cookie.path = \"/\";\n  }\n  return cookie;\n}\nfunction splitCookiesString(cookiesString) {\n  if (!cookiesString)\n    return [];\n  var cookiesStrings = [];\n  var pos = 0;\n  var start;\n  var ch;\n  var lastComma;\n  var nextStart;\n  var cookiesSeparatorFound;\n  function skipWhitespace() {\n    while (pos < cookiesString.length && /\\s/.test(cookiesString.charAt(pos))) {\n      pos += 1;\n    }\n    return pos < cookiesString.length;\n  }\n  function notSpecialChar() {\n    ch = cookiesString.charAt(pos);\n    return ch !== \"=\" && ch !== \";\" && ch !== \",\";\n  }\n  while (pos < cookiesString.length) {\n    start = pos;\n    cookiesSeparatorFound = false;\n    while (skipWhitespace()) {\n      ch = cookiesString.charAt(pos);\n      if (ch === \",\") {\n        lastComma = pos;\n        pos += 1;\n        skipWhitespace();\n        nextStart = pos;\n        while (pos < cookiesString.length && notSpecialChar()) {\n          pos += 1;\n        }\n        if (pos < cookiesString.length && cookiesString.charAt(pos) === \"=\") {\n          cookiesSeparatorFound = true;\n          pos = nextStart;\n          cookiesStrings.push(cookiesString.substring(start, lastComma));\n          start = pos;\n        } else {\n          pos = lastComma + 1;\n        }\n      } else {\n        pos += 1;\n      }\n    }\n    if (!cookiesSeparatorFound || pos >= cookiesString.length) {\n      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));\n    }\n  }\n  return cookiesStrings;\n}\n// Annotate the CommonJS export names for ESM import in node:\n0 && (0);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9AZWRnZS1ydW50aW1lL2Nvb2tpZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxtRUFBbUUsZ0ZBQWdGO0FBQ25KLDRDQUE0QyxTQUFTO0FBQ3JELDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLFlBQVksT0FBTyxHQUFHLG9DQUFvQyxFQUFFLGNBQWMsR0FBRztBQUM3RTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNERBQTREO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQscUJBQXFCLGdCQUFnQjtBQUNyQyx1Q0FBdUMsd0JBQXdCO0FBQy9EO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlEQUFpRDtBQUM5RTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU8sR0FBRyw0QkFBNEIsV0FBVztBQUNyRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1Q0FBdUM7QUFDN0Q7QUFDQTtBQUNBLDhCQUE4QixpREFBaUQ7QUFDL0U7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sQ0FHTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL0BlZGdlLXJ1bnRpbWUvY29va2llcy9pbmRleC5qcz9jNzhlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcblxuLy8gc3JjL2luZGV4LnRzXG52YXIgc3JjX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KHNyY19leHBvcnRzLCB7XG4gIFJlcXVlc3RDb29raWVzOiAoKSA9PiBSZXF1ZXN0Q29va2llcyxcbiAgUmVzcG9uc2VDb29raWVzOiAoKSA9PiBSZXNwb25zZUNvb2tpZXNcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoc3JjX2V4cG9ydHMpO1xuXG4vLyBzcmMvc2VyaWFsaXplLnRzXG5mdW5jdGlvbiBzZXJpYWxpemUoYykge1xuICBjb25zdCBhdHRycyA9IFtcbiAgICBcInBhdGhcIiBpbiBjICYmIGMucGF0aCAmJiBgUGF0aD0ke2MucGF0aH1gLFxuICAgIFwiZXhwaXJlc1wiIGluIGMgJiYgKGMuZXhwaXJlcyB8fCBjLmV4cGlyZXMgPT09IDApICYmIGBFeHBpcmVzPSR7KHR5cGVvZiBjLmV4cGlyZXMgPT09IFwibnVtYmVyXCIgPyBuZXcgRGF0ZShjLmV4cGlyZXMpIDogYy5leHBpcmVzKS50b1VUQ1N0cmluZygpfWAsXG4gICAgXCJtYXhBZ2VcIiBpbiBjICYmIGMubWF4QWdlICYmIGBNYXgtQWdlPSR7Yy5tYXhBZ2V9YCxcbiAgICBcImRvbWFpblwiIGluIGMgJiYgYy5kb21haW4gJiYgYERvbWFpbj0ke2MuZG9tYWlufWAsXG4gICAgXCJzZWN1cmVcIiBpbiBjICYmIGMuc2VjdXJlICYmIFwiU2VjdXJlXCIsXG4gICAgXCJodHRwT25seVwiIGluIGMgJiYgYy5odHRwT25seSAmJiBcIkh0dHBPbmx5XCIsXG4gICAgXCJzYW1lU2l0ZVwiIGluIGMgJiYgYy5zYW1lU2l0ZSAmJiBgU2FtZVNpdGU9JHtjLnNhbWVTaXRlfWBcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG4gIHJldHVybiBgJHtjLm5hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGMudmFsdWUgPz8gXCJcIil9OyAke2F0dHJzLmpvaW4oXCI7IFwiKX1gO1xufVxuZnVuY3Rpb24gcGFyc2VDb29raWVTdHJpbmcoY29va2llKSB7XG4gIGNvbnN0IG1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gIGZvciAoY29uc3QgcGFpciBvZiBjb29raWUuc3BsaXQoLzsgKi8pKSB7XG4gICAgaWYgKCFwYWlyKVxuICAgICAgY29udGludWU7XG4gICAgY29uc3Qgc3BsaXRBdCA9IHBhaXIuaW5kZXhPZihcIj1cIik7XG4gICAgY29uc3QgW2tleSwgdmFsdWVdID0gW3BhaXIuc2xpY2UoMCwgc3BsaXRBdCksIHBhaXIuc2xpY2Uoc3BsaXRBdCArIDEpXTtcbiAgICB0cnkge1xuICAgICAgbWFwLnNldChrZXksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSA/PyBcInRydWVcIikpO1xuICAgIH0gY2F0Y2gge1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWFwO1xufVxuZnVuY3Rpb24gcGFyc2VTZXRDb29raWVTdHJpbmcoc2V0Q29va2llKSB7XG4gIGlmICghc2V0Q29va2llKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBjb25zdCBbW25hbWUsIHZhbHVlXSwgLi4uYXR0cmlidXRlc10gPSBwYXJzZUNvb2tpZVN0cmluZyhzZXRDb29raWUpO1xuICBjb25zdCB7IGRvbWFpbiwgZXhwaXJlcywgaHR0cG9ubHksIG1heGFnZSwgcGF0aCwgc2FtZXNpdGUsIHNlY3VyZSB9ID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIGF0dHJpYnV0ZXMubWFwKChba2V5LCB2YWx1ZTJdKSA9PiBba2V5LnRvTG93ZXJDYXNlKCksIHZhbHVlMl0pXG4gICk7XG4gIGNvbnN0IGNvb2tpZSA9IHtcbiAgICBuYW1lLFxuICAgIHZhbHVlOiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpLFxuICAgIGRvbWFpbixcbiAgICAuLi5leHBpcmVzICYmIHsgZXhwaXJlczogbmV3IERhdGUoZXhwaXJlcykgfSxcbiAgICAuLi5odHRwb25seSAmJiB7IGh0dHBPbmx5OiB0cnVlIH0sXG4gICAgLi4udHlwZW9mIG1heGFnZSA9PT0gXCJzdHJpbmdcIiAmJiB7IG1heEFnZTogTnVtYmVyKG1heGFnZSkgfSxcbiAgICBwYXRoLFxuICAgIC4uLnNhbWVzaXRlICYmIHsgc2FtZVNpdGU6IHBhcnNlU2FtZVNpdGUoc2FtZXNpdGUpIH0sXG4gICAgLi4uc2VjdXJlICYmIHsgc2VjdXJlOiB0cnVlIH1cbiAgfTtcbiAgcmV0dXJuIGNvbXBhY3QoY29va2llKTtcbn1cbmZ1bmN0aW9uIGNvbXBhY3QodCkge1xuICBjb25zdCBuZXdUID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHQpIHtcbiAgICBpZiAodFtrZXldKSB7XG4gICAgICBuZXdUW2tleV0gPSB0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdUO1xufVxudmFyIFNBTUVfU0lURSA9IFtcInN0cmljdFwiLCBcImxheFwiLCBcIm5vbmVcIl07XG5mdW5jdGlvbiBwYXJzZVNhbWVTaXRlKHN0cmluZykge1xuICBzdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIFNBTUVfU0lURS5pbmNsdWRlcyhzdHJpbmcpID8gc3RyaW5nIDogdm9pZCAwO1xufVxuXG4vLyBzcmMvcmVxdWVzdC1jb29raWVzLnRzXG52YXIgUmVxdWVzdENvb2tpZXMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlcXVlc3RIZWFkZXJzKSB7XG4gICAgdGhpcy5fcGFyc2VkID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICB0aGlzLl9oZWFkZXJzID0gcmVxdWVzdEhlYWRlcnM7XG4gICAgY29uc3QgaGVhZGVyID0gcmVxdWVzdEhlYWRlcnMuZ2V0KFwiY29va2llXCIpO1xuICAgIGlmIChoZWFkZXIpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlQ29va2llU3RyaW5nKGhlYWRlcik7XG4gICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZV0gb2YgcGFyc2VkKSB7XG4gICAgICAgIHRoaXMuX3BhcnNlZC5zZXQobmFtZSwgeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlZFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cbiAgZ2V0IHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlZC5zaXplO1xuICB9XG4gIGdldCguLi5hcmdzKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJnc1swXSA6IGFyZ3NbMF0ubmFtZTtcbiAgICByZXR1cm4gdGhpcy5fcGFyc2VkLmdldChuYW1lKTtcbiAgfVxuICBnZXRBbGwoLi4uYXJncykge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBhbGwgPSBBcnJheS5mcm9tKHRoaXMuX3BhcnNlZCk7XG4gICAgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGFsbC5tYXAoKFtfLCB2YWx1ZV0pID0+IHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJnc1swXSA6IChfYSA9IGFyZ3NbMF0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5uYW1lO1xuICAgIHJldHVybiBhbGwuZmlsdGVyKChbbl0pID0+IG4gPT09IG5hbWUpLm1hcCgoW18sIHZhbHVlXSkgPT4gdmFsdWUpO1xuICB9XG4gIGhhcyhuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlZC5oYXMobmFtZSk7XG4gIH1cbiAgc2V0KC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gYXJncy5sZW5ndGggPT09IDEgPyBbYXJnc1swXS5uYW1lLCBhcmdzWzBdLnZhbHVlXSA6IGFyZ3M7XG4gICAgY29uc3QgbWFwID0gdGhpcy5fcGFyc2VkO1xuICAgIG1hcC5zZXQobmFtZSwgeyBuYW1lLCB2YWx1ZSB9KTtcbiAgICB0aGlzLl9oZWFkZXJzLnNldChcbiAgICAgIFwiY29va2llXCIsXG4gICAgICBBcnJheS5mcm9tKG1hcCkubWFwKChbXywgdmFsdWUyXSkgPT4gc2VyaWFsaXplKHZhbHVlMikpLmpvaW4oXCI7IFwiKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZGVsZXRlKG5hbWVzKSB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5fcGFyc2VkO1xuICAgIGNvbnN0IHJlc3VsdCA9ICFBcnJheS5pc0FycmF5KG5hbWVzKSA/IG1hcC5kZWxldGUobmFtZXMpIDogbmFtZXMubWFwKChuYW1lKSA9PiBtYXAuZGVsZXRlKG5hbWUpKTtcbiAgICB0aGlzLl9oZWFkZXJzLnNldChcbiAgICAgIFwiY29va2llXCIsXG4gICAgICBBcnJheS5mcm9tKG1hcCkubWFwKChbXywgdmFsdWVdKSA9PiBzZXJpYWxpemUodmFsdWUpKS5qb2luKFwiOyBcIilcbiAgICApO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5kZWxldGUoQXJyYXkuZnJvbSh0aGlzLl9wYXJzZWQua2V5cygpKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgW1N5bWJvbC5mb3IoXCJlZGdlLXJ1bnRpbWUuaW5zcGVjdC5jdXN0b21cIildKCkge1xuICAgIHJldHVybiBgUmVxdWVzdENvb2tpZXMgJHtKU09OLnN0cmluZ2lmeShPYmplY3QuZnJvbUVudHJpZXModGhpcy5fcGFyc2VkKSl9YDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BhcnNlZC52YWx1ZXMoKV0ubWFwKCh2KSA9PiBgJHt2Lm5hbWV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHYudmFsdWUpfWApLmpvaW4oXCI7IFwiKTtcbiAgfVxufTtcblxuLy8gc3JjL3Jlc3BvbnNlLWNvb2tpZXMudHNcbnZhciBSZXNwb25zZUNvb2tpZXMgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlc3BvbnNlSGVhZGVycykge1xuICAgIHRoaXMuX3BhcnNlZCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG4gICAgdmFyIF9hO1xuICAgIHRoaXMuX2hlYWRlcnMgPSByZXNwb25zZUhlYWRlcnM7XG4gICAgY29uc3Qgc2V0Q29va2llID0gKChfYSA9IHJlc3BvbnNlSGVhZGVycy5nZXRBbGwpID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKHJlc3BvbnNlSGVhZGVycywgXCJzZXQtY29va2llXCIpKSA/PyByZXNwb25zZUhlYWRlcnMuZ2V0KFwic2V0LWNvb2tpZVwiKSA/PyBbXTtcbiAgICBjb25zdCBjb29raWVTdHJpbmdzID0gQXJyYXkuaXNBcnJheShzZXRDb29raWUpID8gc2V0Q29va2llIDogc3BsaXRDb29raWVzU3RyaW5nKHNldENvb2tpZSk7XG4gICAgZm9yIChjb25zdCBjb29raWVTdHJpbmcgb2YgY29va2llU3RyaW5ncykge1xuICAgICAgY29uc3QgcGFyc2VkID0gcGFyc2VTZXRDb29raWVTdHJpbmcoY29va2llU3RyaW5nKTtcbiAgICAgIGlmIChwYXJzZWQpXG4gICAgICAgIHRoaXMuX3BhcnNlZC5zZXQocGFyc2VkLm5hbWUsIHBhcnNlZCk7XG4gICAgfVxuICB9XG4gIGdldCguLi5hcmdzKSB7XG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzWzBdIDogYXJnc1swXS5uYW1lO1xuICAgIHJldHVybiB0aGlzLl9wYXJzZWQuZ2V0KGtleSk7XG4gIH1cbiAgZ2V0QWxsKC4uLmFyZ3MpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgYWxsID0gQXJyYXkuZnJvbSh0aGlzLl9wYXJzZWQudmFsdWVzKCkpO1xuICAgIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhbGw7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IHR5cGVvZiBhcmdzWzBdID09PSBcInN0cmluZ1wiID8gYXJnc1swXSA6IChfYSA9IGFyZ3NbMF0pID09IG51bGwgPyB2b2lkIDAgOiBfYS5uYW1lO1xuICAgIHJldHVybiBhbGwuZmlsdGVyKChjKSA9PiBjLm5hbWUgPT09IGtleSk7XG4gIH1cbiAgc2V0KC4uLmFyZ3MpIHtcbiAgICBjb25zdCBbbmFtZSwgdmFsdWUsIGNvb2tpZV0gPSBhcmdzLmxlbmd0aCA9PT0gMSA/IFthcmdzWzBdLm5hbWUsIGFyZ3NbMF0udmFsdWUsIGFyZ3NbMF1dIDogYXJncztcbiAgICBjb25zdCBtYXAgPSB0aGlzLl9wYXJzZWQ7XG4gICAgbWFwLnNldChuYW1lLCBub3JtYWxpemVDb29raWUoeyBuYW1lLCB2YWx1ZSwgLi4uY29va2llIH0pKTtcbiAgICByZXBsYWNlKG1hcCwgdGhpcy5faGVhZGVycyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgZGVsZXRlKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBuYW1lID0gdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIgPyBhcmdzWzBdIDogYXJnc1swXS5uYW1lO1xuICAgIHJldHVybiB0aGlzLnNldCh7IG5hbWUsIHZhbHVlOiBcIlwiLCBleHBpcmVzOiBuZXcgRGF0ZSgwKSB9KTtcbiAgfVxuICBbU3ltYm9sLmZvcihcImVkZ2UtcnVudGltZS5pbnNwZWN0LmN1c3RvbVwiKV0oKSB7XG4gICAgcmV0dXJuIGBSZXNwb25zZUNvb2tpZXMgJHtKU09OLnN0cmluZ2lmeShPYmplY3QuZnJvbUVudHJpZXModGhpcy5fcGFyc2VkKSl9YDtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BhcnNlZC52YWx1ZXMoKV0ubWFwKHNlcmlhbGl6ZSkuam9pbihcIjsgXCIpO1xuICB9XG59O1xuZnVuY3Rpb24gcmVwbGFjZShiYWcsIGhlYWRlcnMpIHtcbiAgaGVhZGVycy5kZWxldGUoXCJzZXQtY29va2llXCIpO1xuICBmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiBiYWcpIHtcbiAgICBjb25zdCBzZXJpYWxpemVkID0gc2VyaWFsaXplKHZhbHVlKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcInNldC1jb29raWVcIiwgc2VyaWFsaXplZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUNvb2tpZShjb29raWUgPSB7IG5hbWU6IFwiXCIsIHZhbHVlOiBcIlwiIH0pIHtcbiAgaWYgKHR5cGVvZiBjb29raWUuZXhwaXJlcyA9PT0gXCJudW1iZXJcIikge1xuICAgIGNvb2tpZS5leHBpcmVzID0gbmV3IERhdGUoY29va2llLmV4cGlyZXMpO1xuICB9XG4gIGlmIChjb29raWUubWF4QWdlKSB7XG4gICAgY29va2llLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgY29va2llLm1heEFnZSAqIDFlMyk7XG4gIH1cbiAgaWYgKGNvb2tpZS5wYXRoID09PSBudWxsIHx8IGNvb2tpZS5wYXRoID09PSB2b2lkIDApIHtcbiAgICBjb29raWUucGF0aCA9IFwiL1wiO1xuICB9XG4gIHJldHVybiBjb29raWU7XG59XG5mdW5jdGlvbiBzcGxpdENvb2tpZXNTdHJpbmcoY29va2llc1N0cmluZykge1xuICBpZiAoIWNvb2tpZXNTdHJpbmcpXG4gICAgcmV0dXJuIFtdO1xuICB2YXIgY29va2llc1N0cmluZ3MgPSBbXTtcbiAgdmFyIHBvcyA9IDA7XG4gIHZhciBzdGFydDtcbiAgdmFyIGNoO1xuICB2YXIgbGFzdENvbW1hO1xuICB2YXIgbmV4dFN0YXJ0O1xuICB2YXIgY29va2llc1NlcGFyYXRvckZvdW5kO1xuICBmdW5jdGlvbiBza2lwV2hpdGVzcGFjZSgpIHtcbiAgICB3aGlsZSAocG9zIDwgY29va2llc1N0cmluZy5sZW5ndGggJiYgL1xccy8udGVzdChjb29raWVzU3RyaW5nLmNoYXJBdChwb3MpKSkge1xuICAgICAgcG9zICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aDtcbiAgfVxuICBmdW5jdGlvbiBub3RTcGVjaWFsQ2hhcigpIHtcbiAgICBjaCA9IGNvb2tpZXNTdHJpbmcuY2hhckF0KHBvcyk7XG4gICAgcmV0dXJuIGNoICE9PSBcIj1cIiAmJiBjaCAhPT0gXCI7XCIgJiYgY2ggIT09IFwiLFwiO1xuICB9XG4gIHdoaWxlIChwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCkge1xuICAgIHN0YXJ0ID0gcG9zO1xuICAgIGNvb2tpZXNTZXBhcmF0b3JGb3VuZCA9IGZhbHNlO1xuICAgIHdoaWxlIChza2lwV2hpdGVzcGFjZSgpKSB7XG4gICAgICBjaCA9IGNvb2tpZXNTdHJpbmcuY2hhckF0KHBvcyk7XG4gICAgICBpZiAoY2ggPT09IFwiLFwiKSB7XG4gICAgICAgIGxhc3RDb21tYSA9IHBvcztcbiAgICAgICAgcG9zICs9IDE7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIG5leHRTdGFydCA9IHBvcztcbiAgICAgICAgd2hpbGUgKHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoICYmIG5vdFNwZWNpYWxDaGFyKCkpIHtcbiAgICAgICAgICBwb3MgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zIDwgY29va2llc1N0cmluZy5sZW5ndGggJiYgY29va2llc1N0cmluZy5jaGFyQXQocG9zKSA9PT0gXCI9XCIpIHtcbiAgICAgICAgICBjb29raWVzU2VwYXJhdG9yRm91bmQgPSB0cnVlO1xuICAgICAgICAgIHBvcyA9IG5leHRTdGFydDtcbiAgICAgICAgICBjb29raWVzU3RyaW5ncy5wdXNoKGNvb2tpZXNTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0LCBsYXN0Q29tbWEpKTtcbiAgICAgICAgICBzdGFydCA9IHBvcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3MgPSBsYXN0Q29tbWEgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjb29raWVzU2VwYXJhdG9yRm91bmQgfHwgcG9zID49IGNvb2tpZXNTdHJpbmcubGVuZ3RoKSB7XG4gICAgICBjb29raWVzU3RyaW5ncy5wdXNoKGNvb2tpZXNTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0LCBjb29raWVzU3RyaW5nLmxlbmd0aCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29va2llc1N0cmluZ3M7XG59XG4vLyBBbm5vdGF0ZSB0aGUgQ29tbW9uSlMgZXhwb3J0IG5hbWVzIGZvciBFU00gaW1wb3J0IGluIG5vZGU6XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgUmVxdWVzdENvb2tpZXMsXG4gIFJlc3BvbnNlQ29va2llc1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/lib/constants.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/esm/lib/constants.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_DIR_ALIAS\": () => (/* binding */ APP_DIR_ALIAS),\n/* harmony export */   \"CACHE_ONE_YEAR\": () => (/* binding */ CACHE_ONE_YEAR),\n/* harmony export */   \"DOT_NEXT_ALIAS\": () => (/* binding */ DOT_NEXT_ALIAS),\n/* harmony export */   \"ESLINT_DEFAULT_DIRS\": () => (/* binding */ ESLINT_DEFAULT_DIRS),\n/* harmony export */   \"ESLINT_DEFAULT_DIRS_WITH_APP\": () => (/* binding */ ESLINT_DEFAULT_DIRS_WITH_APP),\n/* harmony export */   \"ESLINT_PROMPT_VALUES\": () => (/* binding */ ESLINT_PROMPT_VALUES),\n/* harmony export */   \"GSP_NO_RETURNED_VALUE\": () => (/* binding */ GSP_NO_RETURNED_VALUE),\n/* harmony export */   \"GSSP_COMPONENT_MEMBER_ERROR\": () => (/* binding */ GSSP_COMPONENT_MEMBER_ERROR),\n/* harmony export */   \"GSSP_NO_RETURNED_VALUE\": () => (/* binding */ GSSP_NO_RETURNED_VALUE),\n/* harmony export */   \"INSTRUMENTATION_HOOKS_LOCATION_REGEXP\": () => (/* binding */ INSTRUMENTATION_HOOKS_LOCATION_REGEXP),\n/* harmony export */   \"INSTRUMENTATION_HOOK_FILENAME\": () => (/* binding */ INSTRUMENTATION_HOOK_FILENAME),\n/* harmony export */   \"MIDDLEWARE_FILENAME\": () => (/* binding */ MIDDLEWARE_FILENAME),\n/* harmony export */   \"MIDDLEWARE_LOCATION_REGEXP\": () => (/* binding */ MIDDLEWARE_LOCATION_REGEXP),\n/* harmony export */   \"NEXT_QUERY_PARAM_PREFIX\": () => (/* binding */ NEXT_QUERY_PARAM_PREFIX),\n/* harmony export */   \"NON_STANDARD_NODE_ENV\": () => (/* binding */ NON_STANDARD_NODE_ENV),\n/* harmony export */   \"PAGES_DIR_ALIAS\": () => (/* binding */ PAGES_DIR_ALIAS),\n/* harmony export */   \"PRERENDER_REVALIDATE_HEADER\": () => (/* binding */ PRERENDER_REVALIDATE_HEADER),\n/* harmony export */   \"PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER\": () => (/* binding */ PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER),\n/* harmony export */   \"PUBLIC_DIR_MIDDLEWARE_CONFLICT\": () => (/* binding */ PUBLIC_DIR_MIDDLEWARE_CONFLICT),\n/* harmony export */   \"ROOT_DIR_ALIAS\": () => (/* binding */ ROOT_DIR_ALIAS),\n/* harmony export */   \"RSC_ACTION_CLIENT_WRAPPER_ALIAS\": () => (/* binding */ RSC_ACTION_CLIENT_WRAPPER_ALIAS),\n/* harmony export */   \"RSC_ACTION_PROXY_ALIAS\": () => (/* binding */ RSC_ACTION_PROXY_ALIAS),\n/* harmony export */   \"RSC_ACTION_VALIDATE_ALIAS\": () => (/* binding */ RSC_ACTION_VALIDATE_ALIAS),\n/* harmony export */   \"RSC_MOD_REF_PROXY_ALIAS\": () => (/* binding */ RSC_MOD_REF_PROXY_ALIAS),\n/* harmony export */   \"SERVER_PROPS_EXPORT_ERROR\": () => (/* binding */ SERVER_PROPS_EXPORT_ERROR),\n/* harmony export */   \"SERVER_PROPS_GET_INIT_PROPS_CONFLICT\": () => (/* binding */ SERVER_PROPS_GET_INIT_PROPS_CONFLICT),\n/* harmony export */   \"SERVER_PROPS_SSG_CONFLICT\": () => (/* binding */ SERVER_PROPS_SSG_CONFLICT),\n/* harmony export */   \"SERVER_RUNTIME\": () => (/* binding */ SERVER_RUNTIME),\n/* harmony export */   \"SSG_FALLBACK_EXPORT_ERROR\": () => (/* binding */ SSG_FALLBACK_EXPORT_ERROR),\n/* harmony export */   \"SSG_GET_INITIAL_PROPS_CONFLICT\": () => (/* binding */ SSG_GET_INITIAL_PROPS_CONFLICT),\n/* harmony export */   \"STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR\": () => (/* binding */ STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR),\n/* harmony export */   \"UNSTABLE_REVALIDATE_RENAME_ERROR\": () => (/* binding */ UNSTABLE_REVALIDATE_RENAME_ERROR),\n/* harmony export */   \"WEBPACK_LAYERS\": () => (/* binding */ WEBPACK_LAYERS)\n/* harmony export */ });\nconst NEXT_QUERY_PARAM_PREFIX = \"nxtP\";\nconst PRERENDER_REVALIDATE_HEADER = \"x-prerender-revalidate\";\nconst PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = \"x-prerender-revalidate-if-generated\";\n// in seconds\nconst CACHE_ONE_YEAR = 31536000;\n// Patterns to detect middleware files\nconst MIDDLEWARE_FILENAME = \"middleware\";\nconst MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;\n// Pattern to detect instrumentation hooks file\nconst INSTRUMENTATION_HOOK_FILENAME = \"instrumentation\";\nconst INSTRUMENTATION_HOOKS_LOCATION_REGEXP = `(?:src/)?${INSTRUMENTATION_HOOK_FILENAME}`;\n// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,\n// we have to use a private alias\nconst PAGES_DIR_ALIAS = \"private-next-pages\";\nconst DOT_NEXT_ALIAS = \"private-dot-next\";\nconst ROOT_DIR_ALIAS = \"private-next-root-dir\";\nconst APP_DIR_ALIAS = \"private-next-app-dir\";\nconst RSC_MOD_REF_PROXY_ALIAS = \"private-next-rsc-mod-ref-proxy\";\nconst RSC_ACTION_VALIDATE_ALIAS = \"private-next-rsc-action-validate\";\nconst RSC_ACTION_PROXY_ALIAS = \"private-next-rsc-action-proxy\";\nconst RSC_ACTION_CLIENT_WRAPPER_ALIAS = \"private-next-rsc-action-client-wrapper\";\nconst PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;\nconst SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;\nconst SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;\nconst SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;\nconst STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;\nconst SERVER_PROPS_EXPORT_ERROR = `pages with \\`getServerSideProps\\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;\nconst GSP_NO_RETURNED_VALUE = \"Your `getStaticProps` function did not return an object. Did you forget to add a `return`?\";\nconst GSSP_NO_RETURNED_VALUE = \"Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?\";\nconst UNSTABLE_REVALIDATE_RENAME_ERROR = \"The `unstable_revalidate` property is available for general use.\\n\" + \"Please use `revalidate` instead.\";\nconst GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;\nconst NON_STANDARD_NODE_ENV = `You are using a non-standard \"NODE_ENV\" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;\nconst SSG_FALLBACK_EXPORT_ERROR = `Pages with \\`fallback\\` enabled in \\`getStaticPaths\\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;\n// Consolidate this consts when the `appDir` will be stable.\nconst ESLINT_DEFAULT_DIRS = [\n    \"pages\",\n    \"components\",\n    \"lib\",\n    \"src\"\n];\nconst ESLINT_DEFAULT_DIRS_WITH_APP = [\n    \"app\",\n    ...ESLINT_DEFAULT_DIRS\n];\nconst ESLINT_PROMPT_VALUES = [\n    {\n        title: \"Strict\",\n        recommended: true,\n        config: {\n            extends: \"next/core-web-vitals\"\n        }\n    },\n    {\n        title: \"Base\",\n        config: {\n            extends: \"next\"\n        }\n    },\n    {\n        title: \"Cancel\",\n        config: null\n    }\n];\nconst SERVER_RUNTIME = {\n    edge: \"edge\",\n    experimentalEdge: \"experimental-edge\",\n    nodejs: \"nodejs\"\n};\nconst WEBPACK_LAYERS = {\n    shared: \"sc_shared\",\n    server: \"sc_server\",\n    client: \"sc_client\",\n    action: \"sc_action\",\n    api: \"api\",\n    middleware: \"middleware\",\n    edgeAsset: \"edge-asset\",\n    appClient: \"app-client\"\n};\n\n//# sourceMappingURL=constants.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vbGliL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNBO0FBQ0E7QUFDUDtBQUNPO0FBQ1A7QUFDTztBQUNBLCtDQUErQyxvQkFBb0I7QUFDMUU7QUFDTztBQUNBLDBEQUEwRCw4QkFBOEI7QUFDL0Y7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvZXNtL2xpYi9jb25zdGFudHMuanM/ZmY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTkVYVF9RVUVSWV9QQVJBTV9QUkVGSVggPSBcIm54dFBcIjtcbmV4cG9ydCBjb25zdCBQUkVSRU5ERVJfUkVWQUxJREFURV9IRUFERVIgPSBcIngtcHJlcmVuZGVyLXJldmFsaWRhdGVcIjtcbmV4cG9ydCBjb25zdCBQUkVSRU5ERVJfUkVWQUxJREFURV9PTkxZX0dFTkVSQVRFRF9IRUFERVIgPSBcIngtcHJlcmVuZGVyLXJldmFsaWRhdGUtaWYtZ2VuZXJhdGVkXCI7XG4vLyBpbiBzZWNvbmRzXG5leHBvcnQgY29uc3QgQ0FDSEVfT05FX1lFQVIgPSAzMTUzNjAwMDtcbi8vIFBhdHRlcm5zIHRvIGRldGVjdCBtaWRkbGV3YXJlIGZpbGVzXG5leHBvcnQgY29uc3QgTUlERExFV0FSRV9GSUxFTkFNRSA9IFwibWlkZGxld2FyZVwiO1xuZXhwb3J0IGNvbnN0IE1JRERMRVdBUkVfTE9DQVRJT05fUkVHRVhQID0gYCg/OnNyYy8pPyR7TUlERExFV0FSRV9GSUxFTkFNRX1gO1xuLy8gUGF0dGVybiB0byBkZXRlY3QgaW5zdHJ1bWVudGF0aW9uIGhvb2tzIGZpbGVcbmV4cG9ydCBjb25zdCBJTlNUUlVNRU5UQVRJT05fSE9PS19GSUxFTkFNRSA9IFwiaW5zdHJ1bWVudGF0aW9uXCI7XG5leHBvcnQgY29uc3QgSU5TVFJVTUVOVEFUSU9OX0hPT0tTX0xPQ0FUSU9OX1JFR0VYUCA9IGAoPzpzcmMvKT8ke0lOU1RSVU1FTlRBVElPTl9IT09LX0ZJTEVOQU1FfWA7XG4vLyBCZWNhdXNlIG9uIFdpbmRvd3MgYWJzb2x1dGUgcGF0aHMgaW4gdGhlIGdlbmVyYXRlZCBjb2RlIGNhbiBicmVhayBiZWNhdXNlIG9mIG51bWJlcnMsIGVnIDEgaW4gdGhlIHBhdGgsXG4vLyB3ZSBoYXZlIHRvIHVzZSBhIHByaXZhdGUgYWxpYXNcbmV4cG9ydCBjb25zdCBQQUdFU19ESVJfQUxJQVMgPSBcInByaXZhdGUtbmV4dC1wYWdlc1wiO1xuZXhwb3J0IGNvbnN0IERPVF9ORVhUX0FMSUFTID0gXCJwcml2YXRlLWRvdC1uZXh0XCI7XG5leHBvcnQgY29uc3QgUk9PVF9ESVJfQUxJQVMgPSBcInByaXZhdGUtbmV4dC1yb290LWRpclwiO1xuZXhwb3J0IGNvbnN0IEFQUF9ESVJfQUxJQVMgPSBcInByaXZhdGUtbmV4dC1hcHAtZGlyXCI7XG5leHBvcnQgY29uc3QgUlNDX01PRF9SRUZfUFJPWFlfQUxJQVMgPSBcInByaXZhdGUtbmV4dC1yc2MtbW9kLXJlZi1wcm94eVwiO1xuZXhwb3J0IGNvbnN0IFJTQ19BQ1RJT05fVkFMSURBVEVfQUxJQVMgPSBcInByaXZhdGUtbmV4dC1yc2MtYWN0aW9uLXZhbGlkYXRlXCI7XG5leHBvcnQgY29uc3QgUlNDX0FDVElPTl9QUk9YWV9BTElBUyA9IFwicHJpdmF0ZS1uZXh0LXJzYy1hY3Rpb24tcHJveHlcIjtcbmV4cG9ydCBjb25zdCBSU0NfQUNUSU9OX0NMSUVOVF9XUkFQUEVSX0FMSUFTID0gXCJwcml2YXRlLW5leHQtcnNjLWFjdGlvbi1jbGllbnQtd3JhcHBlclwiO1xuZXhwb3J0IGNvbnN0IFBVQkxJQ19ESVJfTUlERExFV0FSRV9DT05GTElDVCA9IGBZb3UgY2FuIG5vdCBoYXZlIGEgJ19uZXh0JyBmb2xkZXIgaW5zaWRlIG9mIHlvdXIgcHVibGljIGZvbGRlci4gVGhpcyBjb25mbGljdHMgd2l0aCB0aGUgaW50ZXJuYWwgJy9fbmV4dCcgcm91dGUuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3B1YmxpYy1uZXh0LWZvbGRlci1jb25mbGljdGA7XG5leHBvcnQgY29uc3QgU1NHX0dFVF9JTklUSUFMX1BST1BTX0NPTkZMSUNUID0gYFlvdSBjYW4gbm90IHVzZSBnZXRJbml0aWFsUHJvcHMgd2l0aCBnZXRTdGF0aWNQcm9wcy4gVG8gdXNlIFNTRywgcGxlYXNlIHJlbW92ZSB5b3VyIGdldEluaXRpYWxQcm9wc2A7XG5leHBvcnQgY29uc3QgU0VSVkVSX1BST1BTX0dFVF9JTklUX1BST1BTX0NPTkZMSUNUID0gYFlvdSBjYW4gbm90IHVzZSBnZXRJbml0aWFsUHJvcHMgd2l0aCBnZXRTZXJ2ZXJTaWRlUHJvcHMuIFBsZWFzZSByZW1vdmUgZ2V0SW5pdGlhbFByb3BzLmA7XG5leHBvcnQgY29uc3QgU0VSVkVSX1BST1BTX1NTR19DT05GTElDVCA9IGBZb3UgY2FuIG5vdCB1c2UgZ2V0U3RhdGljUHJvcHMgb3IgZ2V0U3RhdGljUGF0aHMgd2l0aCBnZXRTZXJ2ZXJTaWRlUHJvcHMuIFRvIHVzZSBTU0csIHBsZWFzZSByZW1vdmUgZ2V0U2VydmVyU2lkZVByb3BzYDtcbmV4cG9ydCBjb25zdCBTVEFUSUNfU1RBVFVTX1BBR0VfR0VUX0lOSVRJQUxfUFJPUFNfRVJST1IgPSBgY2FuIG5vdCBoYXZlIGdldEluaXRpYWxQcm9wcy9nZXRTZXJ2ZXJTaWRlUHJvcHMsIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLzQwNC1nZXQtaW5pdGlhbC1wcm9wc2A7XG5leHBvcnQgY29uc3QgU0VSVkVSX1BST1BTX0VYUE9SVF9FUlJPUiA9IGBwYWdlcyB3aXRoIFxcYGdldFNlcnZlclNpZGVQcm9wc1xcYCBjYW4gbm90IGJlIGV4cG9ydGVkLiBTZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dzc3AtZXhwb3J0YDtcbmV4cG9ydCBjb25zdCBHU1BfTk9fUkVUVVJORURfVkFMVUUgPSBcIllvdXIgYGdldFN0YXRpY1Byb3BzYCBmdW5jdGlvbiBkaWQgbm90IHJldHVybiBhbiBvYmplY3QuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBhIGByZXR1cm5gP1wiO1xuZXhwb3J0IGNvbnN0IEdTU1BfTk9fUkVUVVJORURfVkFMVUUgPSBcIllvdXIgYGdldFNlcnZlclNpZGVQcm9wc2AgZnVuY3Rpb24gZGlkIG5vdCByZXR1cm4gYW4gb2JqZWN0LiBEaWQgeW91IGZvcmdldCB0byBhZGQgYSBgcmV0dXJuYD9cIjtcbmV4cG9ydCBjb25zdCBVTlNUQUJMRV9SRVZBTElEQVRFX1JFTkFNRV9FUlJPUiA9IFwiVGhlIGB1bnN0YWJsZV9yZXZhbGlkYXRlYCBwcm9wZXJ0eSBpcyBhdmFpbGFibGUgZm9yIGdlbmVyYWwgdXNlLlxcblwiICsgXCJQbGVhc2UgdXNlIGByZXZhbGlkYXRlYCBpbnN0ZWFkLlwiO1xuZXhwb3J0IGNvbnN0IEdTU1BfQ09NUE9ORU5UX01FTUJFUl9FUlJPUiA9IGBjYW4gbm90IGJlIGF0dGFjaGVkIHRvIGEgcGFnZSdzIGNvbXBvbmVudCBhbmQgbXVzdCBiZSBleHBvcnRlZCBmcm9tIHRoZSBwYWdlLiBTZWUgbW9yZSBpbmZvIGhlcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dzc3AtY29tcG9uZW50LW1lbWJlcmA7XG5leHBvcnQgY29uc3QgTk9OX1NUQU5EQVJEX05PREVfRU5WID0gYFlvdSBhcmUgdXNpbmcgYSBub24tc3RhbmRhcmQgXCJOT0RFX0VOVlwiIHZhbHVlIGluIHlvdXIgZW52aXJvbm1lbnQuIFRoaXMgY3JlYXRlcyBpbmNvbnNpc3RlbmNpZXMgaW4gdGhlIHByb2plY3QgYW5kIGlzIHN0cm9uZ2x5IGFkdmlzZWQgYWdhaW5zdC4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9ub24tc3RhbmRhcmQtbm9kZS1lbnZgO1xuZXhwb3J0IGNvbnN0IFNTR19GQUxMQkFDS19FWFBPUlRfRVJST1IgPSBgUGFnZXMgd2l0aCBcXGBmYWxsYmFja1xcYCBlbmFibGVkIGluIFxcYGdldFN0YXRpY1BhdGhzXFxgIGNhbiBub3QgYmUgZXhwb3J0ZWQuIFNlZSBtb3JlIGluZm8gaGVyZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvc3NnLWZhbGxiYWNrLXRydWUtZXhwb3J0YDtcbi8vIENvbnNvbGlkYXRlIHRoaXMgY29uc3RzIHdoZW4gdGhlIGBhcHBEaXJgIHdpbGwgYmUgc3RhYmxlLlxuZXhwb3J0IGNvbnN0IEVTTElOVF9ERUZBVUxUX0RJUlMgPSBbXG4gICAgXCJwYWdlc1wiLFxuICAgIFwiY29tcG9uZW50c1wiLFxuICAgIFwibGliXCIsXG4gICAgXCJzcmNcIlxuXTtcbmV4cG9ydCBjb25zdCBFU0xJTlRfREVGQVVMVF9ESVJTX1dJVEhfQVBQID0gW1xuICAgIFwiYXBwXCIsXG4gICAgLi4uRVNMSU5UX0RFRkFVTFRfRElSU1xuXTtcbmV4cG9ydCBjb25zdCBFU0xJTlRfUFJPTVBUX1ZBTFVFUyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlN0cmljdFwiLFxuICAgICAgICByZWNvbW1lbmRlZDogdHJ1ZSxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICBleHRlbmRzOiBcIm5leHQvY29yZS13ZWItdml0YWxzXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJCYXNlXCIsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgZXh0ZW5kczogXCJuZXh0XCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDYW5jZWxcIixcbiAgICAgICAgY29uZmlnOiBudWxsXG4gICAgfVxuXTtcbmV4cG9ydCBjb25zdCBTRVJWRVJfUlVOVElNRSA9IHtcbiAgICBlZGdlOiBcImVkZ2VcIixcbiAgICBleHBlcmltZW50YWxFZGdlOiBcImV4cGVyaW1lbnRhbC1lZGdlXCIsXG4gICAgbm9kZWpzOiBcIm5vZGVqc1wiXG59O1xuZXhwb3J0IGNvbnN0IFdFQlBBQ0tfTEFZRVJTID0ge1xuICAgIHNoYXJlZDogXCJzY19zaGFyZWRcIixcbiAgICBzZXJ2ZXI6IFwic2Nfc2VydmVyXCIsXG4gICAgY2xpZW50OiBcInNjX2NsaWVudFwiLFxuICAgIGFjdGlvbjogXCJzY19hY3Rpb25cIixcbiAgICBhcGk6IFwiYXBpXCIsXG4gICAgbWlkZGxld2FyZTogXCJtaWRkbGV3YXJlXCIsXG4gICAgZWRnZUFzc2V0OiBcImVkZ2UtYXNzZXRcIixcbiAgICBhcHBDbGllbnQ6IFwiYXBwLWNsaWVudFwiXG59O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/lib/constants.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/internal-utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/internal-utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripInternalQueries\": () => (/* binding */ stripInternalQueries),\n/* harmony export */   \"stripInternalSearchParams\": () => (/* binding */ stripInternalSearchParams)\n/* harmony export */ });\nconst INTERNAL_QUERY_NAMES = [\n    \"__nextFallback\",\n    \"__nextLocale\",\n    \"__nextInferredLocaleFromDefault\",\n    \"__nextDefaultLocale\",\n    \"__nextIsNotFound\"\n];\nconst EXTENDED_INTERNAL_QUERY_NAMES = [\n    \"__nextDataReq\"\n];\nfunction stripInternalQueries(query) {\n    for (const name of INTERNAL_QUERY_NAMES){\n        delete query[name];\n    }\n}\nfunction stripInternalSearchParams(searchParams, extended) {\n    for (const name of INTERNAL_QUERY_NAMES){\n        searchParams.delete(name);\n    }\n    if (extended) {\n        for (const name of EXTENDED_INTERNAL_QUERY_NAMES){\n            searchParams.delete(name);\n        }\n    }\n    return searchParams;\n}\n\n//# sourceMappingURL=internal-utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL2ludGVybmFsLXV0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zZXJ2ZXIvaW50ZXJuYWwtdXRpbHMuanM/MjliYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTlRFUk5BTF9RVUVSWV9OQU1FUyA9IFtcbiAgICBcIl9fbmV4dEZhbGxiYWNrXCIsXG4gICAgXCJfX25leHRMb2NhbGVcIixcbiAgICBcIl9fbmV4dEluZmVycmVkTG9jYWxlRnJvbURlZmF1bHRcIixcbiAgICBcIl9fbmV4dERlZmF1bHRMb2NhbGVcIixcbiAgICBcIl9fbmV4dElzTm90Rm91bmRcIlxuXTtcbmNvbnN0IEVYVEVOREVEX0lOVEVSTkFMX1FVRVJZX05BTUVTID0gW1xuICAgIFwiX19uZXh0RGF0YVJlcVwiXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwSW50ZXJuYWxRdWVyaWVzKHF1ZXJ5KSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIElOVEVSTkFMX1FVRVJZX05BTUVTKXtcbiAgICAgICAgZGVsZXRlIHF1ZXJ5W25hbWVdO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEludGVybmFsU2VhcmNoUGFyYW1zKHNlYXJjaFBhcmFtcywgZXh0ZW5kZWQpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgSU5URVJOQUxfUVVFUllfTkFNRVMpe1xuICAgICAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKG5hbWUpO1xuICAgIH1cbiAgICBpZiAoZXh0ZW5kZWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIEVYVEVOREVEX0lOVEVSTkFMX1FVRVJZX05BTUVTKXtcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5kZWxldGUobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJuYWwtdXRpbHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/internal-utils.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/adapter.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/adapter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"adapter\": () => (/* binding */ adapter),\n/* harmony export */   \"enhanceGlobals\": () => (/* binding */ enhanceGlobals)\n/* harmony export */ });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"(middleware)/./node_modules/next/dist/esm/server/web/error.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"(middleware)/./node_modules/next/dist/esm/server/web/utils.js\");\n/* harmony import */ var _spec_extension_fetch_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spec-extension/fetch-event */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js\");\n/* harmony import */ var _spec_extension_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spec-extension/request */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/request.js\");\n/* harmony import */ var _spec_extension_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spec-extension/response */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/response.js\");\n/* harmony import */ var _shared_lib_router_utils_relativize_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/lib/router/utils/relativize-url */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js\");\n/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./next-url */ \"(middleware)/./node_modules/next/dist/esm/server/web/next-url.js\");\n/* harmony import */ var _internal_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal-utils */ \"(middleware)/./node_modules/next/dist/esm/server/internal-utils.js\");\n/* harmony import */ var _shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/lib/router/utils/app-paths */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js\");\n/* harmony import */ var _client_components_app_router_headers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../client/components/app-router-headers */ \"(middleware)/./node_modules/next/dist/esm/client/components/app-router-headers.js\");\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/constants */ \"(middleware)/./node_modules/next/dist/esm/lib/constants.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass NextRequestHint extends _spec_extension_request__WEBPACK_IMPORTED_MODULE_3__.NextRequest {\n    constructor(params){\n        super(params.input, params.init);\n        this.sourcePage = params.page;\n    }\n    get request() {\n        throw new _error__WEBPACK_IMPORTED_MODULE_0__.PageSignatureError({\n            page: this.sourcePage\n        });\n    }\n    respondWith() {\n        throw new _error__WEBPACK_IMPORTED_MODULE_0__.PageSignatureError({\n            page: this.sourcePage\n        });\n    }\n    waitUntil() {\n        throw new _error__WEBPACK_IMPORTED_MODULE_0__.PageSignatureError({\n            page: this.sourcePage\n        });\n    }\n}\nconst FLIGHT_PARAMETERS = [\n    [\n        _client_components_app_router_headers__WEBPACK_IMPORTED_MODULE_9__.RSC\n    ],\n    [\n        _client_components_app_router_headers__WEBPACK_IMPORTED_MODULE_9__.NEXT_ROUTER_STATE_TREE\n    ],\n    [\n        _client_components_app_router_headers__WEBPACK_IMPORTED_MODULE_9__.NEXT_ROUTER_PREFETCH\n    ],\n    [\n        _client_components_app_router_headers__WEBPACK_IMPORTED_MODULE_9__.FETCH_CACHE_HEADER\n    ]\n];\nasync function registerInstrumentation() {\n    if (\"_ENTRIES\" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {\n        try {\n            await _ENTRIES.middleware_instrumentation.register();\n        } catch (err) {\n            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;\n            throw err;\n        }\n    }\n}\nlet registerInstrumentationPromise = null;\nfunction ensureInstrumentationRegistered() {\n    if (!registerInstrumentationPromise) {\n        registerInstrumentationPromise = registerInstrumentation();\n    }\n    return registerInstrumentationPromise;\n}\nasync function adapter(params) {\n    await ensureInstrumentationRegistered();\n    // TODO-APP: use explicit marker for this\n    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== \"undefined\";\n    params.request.url = (0,_shared_lib_router_utils_app_paths__WEBPACK_IMPORTED_MODULE_8__.normalizeRscPath)(params.request.url, true);\n    const requestUrl = new _next_url__WEBPACK_IMPORTED_MODULE_6__.NextURL(params.request.url, {\n        headers: params.request.headers,\n        nextConfig: params.request.nextConfig\n    });\n    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.\n    // Instead we use the keys before iteration.\n    const keys = [\n        ...requestUrl.searchParams.keys()\n    ];\n    for (const key of keys){\n        const value = requestUrl.searchParams.getAll(key);\n        if (key !== _lib_constants__WEBPACK_IMPORTED_MODULE_10__.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_lib_constants__WEBPACK_IMPORTED_MODULE_10__.NEXT_QUERY_PARAM_PREFIX)) {\n            const normalizedKey = key.substring(_lib_constants__WEBPACK_IMPORTED_MODULE_10__.NEXT_QUERY_PARAM_PREFIX.length);\n            requestUrl.searchParams.delete(normalizedKey);\n            for (const val of value){\n                requestUrl.searchParams.append(normalizedKey, val);\n            }\n            requestUrl.searchParams.delete(key);\n        }\n    }\n    // Ensure users only see page requests, never data requests.\n    const buildId = requestUrl.buildId;\n    requestUrl.buildId = \"\";\n    const isDataReq = params.request.headers[\"x-nextjs-data\"];\n    if (isDataReq && requestUrl.pathname === \"/index\") {\n        requestUrl.pathname = \"/\";\n    }\n    const requestHeaders = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.fromNodeHeaders)(params.request.headers);\n    const flightHeaders = new Map();\n    // Parameters should only be stripped for middleware\n    if (!isEdgeRendering) {\n        for (const param of FLIGHT_PARAMETERS){\n            const key = param.toString().toLowerCase();\n            const value = requestHeaders.get(key);\n            if (value) {\n                flightHeaders.set(key, requestHeaders.get(key));\n                requestHeaders.delete(key);\n            }\n        }\n    }\n    // Strip internal query parameters off the request.\n    (0,_internal_utils__WEBPACK_IMPORTED_MODULE_7__.stripInternalSearchParams)(requestUrl.searchParams, true);\n    const request = new NextRequestHint({\n        page: params.page,\n        input:  false ? 0 : String(requestUrl),\n        init: {\n            body: params.request.body,\n            geo: params.request.geo,\n            headers: requestHeaders,\n            ip: params.request.ip,\n            method: params.request.method,\n            nextConfig: params.request.nextConfig\n        }\n    });\n    /**\n   * This allows to identify the request as a data request. The user doesn't\n   * need to know about this property neither use it. We add it for testing\n   * purposes.\n   */ if (isDataReq) {\n        Object.defineProperty(request, \"__isData\", {\n            enumerable: false,\n            value: true\n        });\n    }\n    if (!globalThis.__incrementalCache && params.IncrementalCache) {\n        globalThis.__incrementalCache = new params.IncrementalCache({\n            appDir: true,\n            fetchCache: true,\n            minimalMode: \"development\" !== \"development\",\n            fetchCacheKeyPrefix: undefined,\n            dev: \"development\" === \"development\",\n            requestHeaders: params.request.headers,\n            requestProtocol: \"https\",\n            getPrerenderManifest: ()=>{\n                return {\n                    version: -1,\n                    routes: {},\n                    dynamicRoutes: {},\n                    notFoundRoutes: [],\n                    preview: {\n                        previewModeId: \"development-id\"\n                    }\n                };\n            }\n        });\n    }\n    const event = new _spec_extension_fetch_event__WEBPACK_IMPORTED_MODULE_2__.NextFetchEvent({\n        request,\n        page: params.page\n    });\n    let response = await params.handler(request, event);\n    // check if response is a Response object\n    if (response && !(response instanceof Response)) {\n        throw new TypeError(\"Expected an instance of Response to be returned\");\n    }\n    /**\n   * For rewrites we must always include the locale in the final pathname\n   * so we re-create the NextURL forcing it to include it when the it is\n   * an internal rewrite. Also we make sure the outgoing rewrite URL is\n   * a data URL if the request was a data request.\n   */ const rewrite = response == null ? void 0 : response.headers.get(\"x-middleware-rewrite\");\n    if (response && rewrite) {\n        const rewriteUrl = new _next_url__WEBPACK_IMPORTED_MODULE_6__.NextURL(rewrite, {\n            forceLocale: true,\n            headers: params.request.headers,\n            nextConfig: params.request.nextConfig\n        });\n        if (true) {\n            if (rewriteUrl.host === request.nextUrl.host) {\n                rewriteUrl.buildId = buildId || rewriteUrl.buildId;\n                response.headers.set(\"x-middleware-rewrite\", String(rewriteUrl));\n            }\n        }\n        /**\n     * When the request is a data request we must show if there was a rewrite\n     * with an internal header so the client knows which component to load\n     * from the data request.\n     */ const relativizedRewrite = (0,_shared_lib_router_utils_relativize_url__WEBPACK_IMPORTED_MODULE_5__.relativizeURL)(String(rewriteUrl), String(requestUrl));\n        if (isDataReq && // if the rewrite is external and external rewrite\n        // resolving config is enabled don't add this header\n        // so the upstream app can set it instead\n        !(undefined && 0)) {\n            response.headers.set(\"x-nextjs-rewrite\", relativizedRewrite);\n        }\n    }\n    /**\n   * For redirects we will not include the locale in case when it is the\n   * default and we must also make sure the outgoing URL is a data one if\n   * the incoming request was a data request.\n   */ const redirect = response == null ? void 0 : response.headers.get(\"Location\");\n    if (response && redirect && !isEdgeRendering) {\n        const redirectURL = new _next_url__WEBPACK_IMPORTED_MODULE_6__.NextURL(redirect, {\n            forceLocale: false,\n            headers: params.request.headers,\n            nextConfig: params.request.nextConfig\n        });\n        /**\n     * Responses created from redirects have immutable headers so we have\n     * to clone the response to be able to modify it.\n     */ response = new Response(response.body, response);\n        if (true) {\n            if (redirectURL.host === request.nextUrl.host) {\n                redirectURL.buildId = buildId || redirectURL.buildId;\n                response.headers.set(\"Location\", String(redirectURL));\n            }\n        }\n        /**\n     * When the request is a data request we can't use the location header as\n     * it may end up with CORS error. Instead we map to an internal header so\n     * the client knows the destination.\n     */ if (isDataReq) {\n            response.headers.delete(\"Location\");\n            response.headers.set(\"x-nextjs-redirect\", (0,_shared_lib_router_utils_relativize_url__WEBPACK_IMPORTED_MODULE_5__.relativizeURL)(String(redirectURL), String(requestUrl)));\n        }\n    }\n    const finalResponse = response ? response : _spec_extension_response__WEBPACK_IMPORTED_MODULE_4__.NextResponse.next();\n    // Flight headers are not overridable / removable so they are applied at the end.\n    const middlewareOverrideHeaders = finalResponse.headers.get(\"x-middleware-override-headers\");\n    const overwrittenHeaders = [];\n    if (middlewareOverrideHeaders) {\n        for (const [key, value] of flightHeaders){\n            finalResponse.headers.set(`x-middleware-request-${key}`, value);\n            overwrittenHeaders.push(key);\n        }\n        if (overwrittenHeaders.length > 0) {\n            finalResponse.headers.set(\"x-middleware-override-headers\", middlewareOverrideHeaders + \",\" + overwrittenHeaders.join(\",\"));\n        }\n    }\n    return {\n        response: finalResponse,\n        waitUntil: Promise.all(event[_spec_extension_fetch_event__WEBPACK_IMPORTED_MODULE_2__.waitUntilSymbol])\n    };\n}\nfunction getUnsupportedModuleErrorMessage(module) {\n    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found\n    return `The edge runtime does not support Node.js '${module}' module.\nLearn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;\n}\nfunction __import_unsupported(moduleName) {\n    const proxy = new Proxy(function() {}, {\n        get (_obj, prop) {\n            if (prop === \"then\") {\n                return {};\n            }\n            throw new Error(getUnsupportedModuleErrorMessage(moduleName));\n        },\n        construct () {\n            throw new Error(getUnsupportedModuleErrorMessage(moduleName));\n        },\n        apply (_target, _this, args) {\n            if (typeof args[0] === \"function\") {\n                return args[0](proxy);\n            }\n            throw new Error(getUnsupportedModuleErrorMessage(moduleName));\n        }\n    });\n    return new Proxy({}, {\n        get: ()=>proxy\n    });\n}\nfunction enhanceGlobals() {\n    // The condition is true when the \"process\" module is provided\n    if (process !== __webpack_require__.g.process) {\n        // prefer local process but global.process has correct \"env\"\n        process.env = __webpack_require__.g.process.env;\n        __webpack_require__.g.process = process;\n    }\n    // to allow building code that import but does not use node.js modules,\n    // webpack will expect this function to exist in global scope\n    Object.defineProperty(globalThis, \"__import_unsupported\", {\n        value: __import_unsupported,\n        enumerable: false,\n        configurable: false\n    });\n    // Eagerly fire instrumentation hook to make the startup faster.\n    void ensureInstrumentationRegistered();\n}\n\n//# sourceMappingURL=adapter.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9hZGFwdGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDSDtBQUNvQjtBQUNQO0FBQ0U7QUFDb0I7QUFDZDtBQUMxQjtBQUN5QjtBQUNhO0FBQ3dEO0FBQ3JFO0FBQzlELDhCQUE4QixnRUFBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFrQjtBQUNwQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFrQjtBQUNwQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFrQjtBQUNwQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQUc7QUFDWDtBQUNBO0FBQ0EsUUFBUSx5RkFBc0I7QUFDOUI7QUFDQTtBQUNBLFFBQVEsdUZBQW9CO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLHFGQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUZBQW1GLFlBQVk7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9GQUFnQjtBQUN6QywyQkFBMkIsOENBQU87QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvRUFBdUIsbUJBQW1CLG9FQUF1QjtBQUNyRixnREFBZ0QsMkVBQThCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBFQUF5QjtBQUM3QjtBQUNBO0FBQ0EsZUFBZSxNQUE4QyxHQUFHLENBQWtCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQW9CO0FBQzdDLGlDQUFpQyxTQUF5QztBQUMxRSxpQkFBaUIsYUFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0JBQXNCLHVFQUFjO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxZQUFZLElBQStDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzRkFBYTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQXNELElBQUksQ0FBeUM7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLDhDQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBK0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxzRkFBYTtBQUNuRTtBQUNBO0FBQ0EsZ0RBQWdELHVFQUFpQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELElBQUk7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3RUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxPQUFPO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQSxvQkFBb0IscUJBQU07QUFDMUI7QUFDQSxzQkFBc0IscUJBQU07QUFDNUIsUUFBUSxxQkFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zZXJ2ZXIvd2ViL2FkYXB0ZXIuanM/NTg2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlU2lnbmF0dXJlRXJyb3IgfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHsgZnJvbU5vZGVIZWFkZXJzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IE5leHRGZXRjaEV2ZW50IH0gZnJvbSBcIi4vc3BlYy1leHRlbnNpb24vZmV0Y2gtZXZlbnRcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIi4vc3BlYy1leHRlbnNpb24vcmVxdWVzdFwiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIi4vc3BlYy1leHRlbnNpb24vcmVzcG9uc2VcIjtcbmltcG9ydCB7IHJlbGF0aXZpemVVUkwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcmVsYXRpdml6ZS11cmxcIjtcbmltcG9ydCB7IHdhaXRVbnRpbFN5bWJvbCB9IGZyb20gXCIuL3NwZWMtZXh0ZW5zaW9uL2ZldGNoLWV2ZW50XCI7XG5pbXBvcnQgeyBOZXh0VVJMIH0gZnJvbSBcIi4vbmV4dC11cmxcIjtcbmltcG9ydCB7IHN0cmlwSW50ZXJuYWxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiLi4vaW50ZXJuYWwtdXRpbHNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZVJzY1BhdGggfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvYXBwLXBhdGhzXCI7XG5pbXBvcnQgeyBGRVRDSF9DQUNIRV9IRUFERVIsIE5FWFRfUk9VVEVSX1BSRUZFVENILCBORVhUX1JPVVRFUl9TVEFURV9UUkVFLCBSU0MgfSBmcm9tIFwiLi4vLi4vY2xpZW50L2NvbXBvbmVudHMvYXBwLXJvdXRlci1oZWFkZXJzXCI7XG5pbXBvcnQgeyBORVhUX1FVRVJZX1BBUkFNX1BSRUZJWCB9IGZyb20gXCIuLi8uLi9saWIvY29uc3RhbnRzXCI7XG5jbGFzcyBOZXh0UmVxdWVzdEhpbnQgZXh0ZW5kcyBOZXh0UmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1zKXtcbiAgICAgICAgc3VwZXIocGFyYW1zLmlucHV0LCBwYXJhbXMuaW5pdCk7XG4gICAgICAgIHRoaXMuc291cmNlUGFnZSA9IHBhcmFtcy5wYWdlO1xuICAgIH1cbiAgICBnZXQgcmVxdWVzdCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhZ2VTaWduYXR1cmVFcnJvcih7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnNvdXJjZVBhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlc3BvbmRXaXRoKCkge1xuICAgICAgICB0aHJvdyBuZXcgUGFnZVNpZ25hdHVyZUVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuc291cmNlUGFnZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgd2FpdFVudGlsKCkge1xuICAgICAgICB0aHJvdyBuZXcgUGFnZVNpZ25hdHVyZUVycm9yKHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuc291cmNlUGFnZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBGTElHSFRfUEFSQU1FVEVSUyA9IFtcbiAgICBbXG4gICAgICAgIFJTQ1xuICAgIF0sXG4gICAgW1xuICAgICAgICBORVhUX1JPVVRFUl9TVEFURV9UUkVFXG4gICAgXSxcbiAgICBbXG4gICAgICAgIE5FWFRfUk9VVEVSX1BSRUZFVENIXG4gICAgXSxcbiAgICBbXG4gICAgICAgIEZFVENIX0NBQ0hFX0hFQURFUlxuICAgIF1cbl07XG5hc3luYyBmdW5jdGlvbiByZWdpc3Rlckluc3RydW1lbnRhdGlvbigpIHtcbiAgICBpZiAoXCJfRU5UUklFU1wiIGluIGdsb2JhbFRoaXMgJiYgX0VOVFJJRVMubWlkZGxld2FyZV9pbnN0cnVtZW50YXRpb24gJiYgX0VOVFJJRVMubWlkZGxld2FyZV9pbnN0cnVtZW50YXRpb24ucmVnaXN0ZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IF9FTlRSSUVTLm1pZGRsZXdhcmVfaW5zdHJ1bWVudGF0aW9uLnJlZ2lzdGVyKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSBgQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyBpbnN0cnVtZW50YXRpb24gaG9vazogJHtlcnIubWVzc2FnZX1gO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxufVxubGV0IHJlZ2lzdGVySW5zdHJ1bWVudGF0aW9uUHJvbWlzZSA9IG51bGw7XG5mdW5jdGlvbiBlbnN1cmVJbnN0cnVtZW50YXRpb25SZWdpc3RlcmVkKCkge1xuICAgIGlmICghcmVnaXN0ZXJJbnN0cnVtZW50YXRpb25Qcm9taXNlKSB7XG4gICAgICAgIHJlZ2lzdGVySW5zdHJ1bWVudGF0aW9uUHJvbWlzZSA9IHJlZ2lzdGVySW5zdHJ1bWVudGF0aW9uKCk7XG4gICAgfVxuICAgIHJldHVybiByZWdpc3Rlckluc3RydW1lbnRhdGlvblByb21pc2U7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRhcHRlcihwYXJhbXMpIHtcbiAgICBhd2FpdCBlbnN1cmVJbnN0cnVtZW50YXRpb25SZWdpc3RlcmVkKCk7XG4gICAgLy8gVE9ETy1BUFA6IHVzZSBleHBsaWNpdCBtYXJrZXIgZm9yIHRoaXNcbiAgICBjb25zdCBpc0VkZ2VSZW5kZXJpbmcgPSB0eXBlb2Ygc2VsZi5fX0JVSUxEX01BTklGRVNUICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIHBhcmFtcy5yZXF1ZXN0LnVybCA9IG5vcm1hbGl6ZVJzY1BhdGgocGFyYW1zLnJlcXVlc3QudXJsLCB0cnVlKTtcbiAgICBjb25zdCByZXF1ZXN0VXJsID0gbmV3IE5leHRVUkwocGFyYW1zLnJlcXVlc3QudXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IHBhcmFtcy5yZXF1ZXN0LmhlYWRlcnMsXG4gICAgICAgIG5leHRDb25maWc6IHBhcmFtcy5yZXF1ZXN0Lm5leHRDb25maWdcbiAgICB9KTtcbiAgICAvLyBJdGVyYXRvciB1c2VzIGFuIGluZGV4IHRvIGtlZXAgdHJhY2sgb2YgdGhlIGN1cnJlbnQgaXRlcmF0aW9uLiBCZWNhdXNlIG9mIGRlbGV0aW5nIGFuZCBhcHBlbmRpbmcgYmVsb3cgd2UgY2FuJ3QganVzdCB1c2UgdGhlIGl0ZXJhdG9yLlxuICAgIC8vIEluc3RlYWQgd2UgdXNlIHRoZSBrZXlzIGJlZm9yZSBpdGVyYXRpb24uXG4gICAgY29uc3Qga2V5cyA9IFtcbiAgICAgICAgLi4ucmVxdWVzdFVybC5zZWFyY2hQYXJhbXMua2V5cygpXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKXtcbiAgICAgICAgY29uc3QgdmFsdWUgPSByZXF1ZXN0VXJsLnNlYXJjaFBhcmFtcy5nZXRBbGwoa2V5KTtcbiAgICAgICAgaWYgKGtleSAhPT0gTkVYVF9RVUVSWV9QQVJBTV9QUkVGSVggJiYga2V5LnN0YXJ0c1dpdGgoTkVYVF9RVUVSWV9QQVJBTV9QUkVGSVgpKSB7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkS2V5ID0ga2V5LnN1YnN0cmluZyhORVhUX1FVRVJZX1BBUkFNX1BSRUZJWC5sZW5ndGgpO1xuICAgICAgICAgICAgcmVxdWVzdFVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKG5vcm1hbGl6ZWRLZXkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdmFsdWUpe1xuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwuc2VhcmNoUGFyYW1zLmFwcGVuZChub3JtYWxpemVkS2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVxdWVzdFVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRW5zdXJlIHVzZXJzIG9ubHkgc2VlIHBhZ2UgcmVxdWVzdHMsIG5ldmVyIGRhdGEgcmVxdWVzdHMuXG4gICAgY29uc3QgYnVpbGRJZCA9IHJlcXVlc3RVcmwuYnVpbGRJZDtcbiAgICByZXF1ZXN0VXJsLmJ1aWxkSWQgPSBcIlwiO1xuICAgIGNvbnN0IGlzRGF0YVJlcSA9IHBhcmFtcy5yZXF1ZXN0LmhlYWRlcnNbXCJ4LW5leHRqcy1kYXRhXCJdO1xuICAgIGlmIChpc0RhdGFSZXEgJiYgcmVxdWVzdFVybC5wYXRobmFtZSA9PT0gXCIvaW5kZXhcIikge1xuICAgICAgICByZXF1ZXN0VXJsLnBhdGhuYW1lID0gXCIvXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gZnJvbU5vZGVIZWFkZXJzKHBhcmFtcy5yZXF1ZXN0LmhlYWRlcnMpO1xuICAgIGNvbnN0IGZsaWdodEhlYWRlcnMgPSBuZXcgTWFwKCk7XG4gICAgLy8gUGFyYW1ldGVycyBzaG91bGQgb25seSBiZSBzdHJpcHBlZCBmb3IgbWlkZGxld2FyZVxuICAgIGlmICghaXNFZGdlUmVuZGVyaW5nKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgRkxJR0hUX1BBUkFNRVRFUlMpe1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFyYW0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXF1ZXN0SGVhZGVycy5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZsaWdodEhlYWRlcnMuc2V0KGtleSwgcmVxdWVzdEhlYWRlcnMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFN0cmlwIGludGVybmFsIHF1ZXJ5IHBhcmFtZXRlcnMgb2ZmIHRoZSByZXF1ZXN0LlxuICAgIHN0cmlwSW50ZXJuYWxTZWFyY2hQYXJhbXMocmVxdWVzdFVybC5zZWFyY2hQYXJhbXMsIHRydWUpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgTmV4dFJlcXVlc3RIaW50KHtcbiAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2UsXG4gICAgICAgIGlucHV0OiBwcm9jZXNzLmVudi5fX05FWFRfTk9fTUlERExFV0FSRV9VUkxfTk9STUFMSVpFID8gcGFyYW1zLnJlcXVlc3QudXJsIDogU3RyaW5nKHJlcXVlc3RVcmwpLFxuICAgICAgICBpbml0OiB7XG4gICAgICAgICAgICBib2R5OiBwYXJhbXMucmVxdWVzdC5ib2R5LFxuICAgICAgICAgICAgZ2VvOiBwYXJhbXMucmVxdWVzdC5nZW8sXG4gICAgICAgICAgICBoZWFkZXJzOiByZXF1ZXN0SGVhZGVycyxcbiAgICAgICAgICAgIGlwOiBwYXJhbXMucmVxdWVzdC5pcCxcbiAgICAgICAgICAgIG1ldGhvZDogcGFyYW1zLnJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgbmV4dENvbmZpZzogcGFyYW1zLnJlcXVlc3QubmV4dENvbmZpZ1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLyoqXG4gICAqIFRoaXMgYWxsb3dzIHRvIGlkZW50aWZ5IHRoZSByZXF1ZXN0IGFzIGEgZGF0YSByZXF1ZXN0LiBUaGUgdXNlciBkb2Vzbid0XG4gICAqIG5lZWQgdG8ga25vdyBhYm91dCB0aGlzIHByb3BlcnR5IG5laXRoZXIgdXNlIGl0LiBXZSBhZGQgaXQgZm9yIHRlc3RpbmdcbiAgICogcHVycG9zZXMuXG4gICAqLyBpZiAoaXNEYXRhUmVxKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1ZXN0LCBcIl9faXNEYXRhXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghZ2xvYmFsVGhpcy5fX2luY3JlbWVudGFsQ2FjaGUgJiYgcGFyYW1zLkluY3JlbWVudGFsQ2FjaGUpIHtcbiAgICAgICAgZ2xvYmFsVGhpcy5fX2luY3JlbWVudGFsQ2FjaGUgPSBuZXcgcGFyYW1zLkluY3JlbWVudGFsQ2FjaGUoe1xuICAgICAgICAgICAgYXBwRGlyOiB0cnVlLFxuICAgICAgICAgICAgZmV0Y2hDYWNoZTogdHJ1ZSxcbiAgICAgICAgICAgIG1pbmltYWxNb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiLFxuICAgICAgICAgICAgZmV0Y2hDYWNoZUtleVByZWZpeDogcHJvY2Vzcy5lbnYuX19ORVhUX0ZFVENIX0NBQ0hFX0tFWV9QUkVGSVgsXG4gICAgICAgICAgICBkZXY6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gICAgICAgICAgICByZXF1ZXN0SGVhZGVyczogcGFyYW1zLnJlcXVlc3QuaGVhZGVycyxcbiAgICAgICAgICAgIHJlcXVlc3RQcm90b2NvbDogXCJodHRwc1wiLFxuICAgICAgICAgICAgZ2V0UHJlcmVuZGVyTWFuaWZlc3Q6ICgpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogLTEsXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlczoge30sXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNSb3V0ZXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdNb2RlSWQ6IFwiZGV2ZWxvcG1lbnQtaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IE5leHRGZXRjaEV2ZW50KHtcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgcGFnZTogcGFyYW1zLnBhZ2VcbiAgICB9KTtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBwYXJhbXMuaGFuZGxlcihyZXF1ZXN0LCBldmVudCk7XG4gICAgLy8gY2hlY2sgaWYgcmVzcG9uc2UgaXMgYSBSZXNwb25zZSBvYmplY3RcbiAgICBpZiAocmVzcG9uc2UgJiYgIShyZXNwb25zZSBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgUmVzcG9uc2UgdG8gYmUgcmV0dXJuZWRcIik7XG4gICAgfVxuICAgIC8qKlxuICAgKiBGb3IgcmV3cml0ZXMgd2UgbXVzdCBhbHdheXMgaW5jbHVkZSB0aGUgbG9jYWxlIGluIHRoZSBmaW5hbCBwYXRobmFtZVxuICAgKiBzbyB3ZSByZS1jcmVhdGUgdGhlIE5leHRVUkwgZm9yY2luZyBpdCB0byBpbmNsdWRlIGl0IHdoZW4gdGhlIGl0IGlzXG4gICAqIGFuIGludGVybmFsIHJld3JpdGUuIEFsc28gd2UgbWFrZSBzdXJlIHRoZSBvdXRnb2luZyByZXdyaXRlIFVSTCBpc1xuICAgKiBhIGRhdGEgVVJMIGlmIHRoZSByZXF1ZXN0IHdhcyBhIGRhdGEgcmVxdWVzdC5cbiAgICovIGNvbnN0IHJld3JpdGUgPSByZXNwb25zZSA9PSBudWxsID8gdm9pZCAwIDogcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJ4LW1pZGRsZXdhcmUtcmV3cml0ZVwiKTtcbiAgICBpZiAocmVzcG9uc2UgJiYgcmV3cml0ZSkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsID0gbmV3IE5leHRVUkwocmV3cml0ZSwge1xuICAgICAgICAgICAgZm9yY2VMb2NhbGU6IHRydWUsXG4gICAgICAgICAgICBoZWFkZXJzOiBwYXJhbXMucmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICAgICAgbmV4dENvbmZpZzogcGFyYW1zLnJlcXVlc3QubmV4dENvbmZpZ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfTk9fTUlERExFV0FSRV9VUkxfTk9STUFMSVpFKSB7XG4gICAgICAgICAgICBpZiAocmV3cml0ZVVybC5ob3N0ID09PSByZXF1ZXN0Lm5leHRVcmwuaG9zdCkge1xuICAgICAgICAgICAgICAgIHJld3JpdGVVcmwuYnVpbGRJZCA9IGJ1aWxkSWQgfHwgcmV3cml0ZVVybC5idWlsZElkO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuc2V0KFwieC1taWRkbGV3YXJlLXJld3JpdGVcIiwgU3RyaW5nKHJld3JpdGVVcmwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgKiBXaGVuIHRoZSByZXF1ZXN0IGlzIGEgZGF0YSByZXF1ZXN0IHdlIG11c3Qgc2hvdyBpZiB0aGVyZSB3YXMgYSByZXdyaXRlXG4gICAgICogd2l0aCBhbiBpbnRlcm5hbCBoZWFkZXIgc28gdGhlIGNsaWVudCBrbm93cyB3aGljaCBjb21wb25lbnQgdG8gbG9hZFxuICAgICAqIGZyb20gdGhlIGRhdGEgcmVxdWVzdC5cbiAgICAgKi8gY29uc3QgcmVsYXRpdml6ZWRSZXdyaXRlID0gcmVsYXRpdml6ZVVSTChTdHJpbmcocmV3cml0ZVVybCksIFN0cmluZyhyZXF1ZXN0VXJsKSk7XG4gICAgICAgIGlmIChpc0RhdGFSZXEgJiYgLy8gaWYgdGhlIHJld3JpdGUgaXMgZXh0ZXJuYWwgYW5kIGV4dGVybmFsIHJld3JpdGVcbiAgICAgICAgLy8gcmVzb2x2aW5nIGNvbmZpZyBpcyBlbmFibGVkIGRvbid0IGFkZCB0aGlzIGhlYWRlclxuICAgICAgICAvLyBzbyB0aGUgdXBzdHJlYW0gYXBwIGNhbiBzZXQgaXQgaW5zdGVhZFxuICAgICAgICAhKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFRFUk5BTF9NSURETEVXQVJFX1JFV1JJVEVfUkVTT0xWRSAmJiByZWxhdGl2aXplZFJld3JpdGUubWF0Y2goL2h0dHAocyk/OlxcL1xcLy8pKSkge1xuICAgICAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5zZXQoXCJ4LW5leHRqcy1yZXdyaXRlXCIsIHJlbGF0aXZpemVkUmV3cml0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAqIEZvciByZWRpcmVjdHMgd2Ugd2lsbCBub3QgaW5jbHVkZSB0aGUgbG9jYWxlIGluIGNhc2Ugd2hlbiBpdCBpcyB0aGVcbiAgICogZGVmYXVsdCBhbmQgd2UgbXVzdCBhbHNvIG1ha2Ugc3VyZSB0aGUgb3V0Z29pbmcgVVJMIGlzIGEgZGF0YSBvbmUgaWZcbiAgICogdGhlIGluY29taW5nIHJlcXVlc3Qgd2FzIGEgZGF0YSByZXF1ZXN0LlxuICAgKi8gY29uc3QgcmVkaXJlY3QgPSByZXNwb25zZSA9PSBudWxsID8gdm9pZCAwIDogcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJMb2NhdGlvblwiKTtcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVkaXJlY3QgJiYgIWlzRWRnZVJlbmRlcmluZykge1xuICAgICAgICBjb25zdCByZWRpcmVjdFVSTCA9IG5ldyBOZXh0VVJMKHJlZGlyZWN0LCB7XG4gICAgICAgICAgICBmb3JjZUxvY2FsZTogZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJzOiBwYXJhbXMucmVxdWVzdC5oZWFkZXJzLFxuICAgICAgICAgICAgbmV4dENvbmZpZzogcGFyYW1zLnJlcXVlc3QubmV4dENvbmZpZ1xuICAgICAgICB9KTtcbiAgICAgICAgLyoqXG4gICAgICogUmVzcG9uc2VzIGNyZWF0ZWQgZnJvbSByZWRpcmVjdHMgaGF2ZSBpbW11dGFibGUgaGVhZGVycyBzbyB3ZSBoYXZlXG4gICAgICogdG8gY2xvbmUgdGhlIHJlc3BvbnNlIHRvIGJlIGFibGUgdG8gbW9kaWZ5IGl0LlxuICAgICAqLyByZXNwb25zZSA9IG5ldyBSZXNwb25zZShyZXNwb25zZS5ib2R5LCByZXNwb25zZSk7XG4gICAgICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX05PX01JRERMRVdBUkVfVVJMX05PUk1BTElaRSkge1xuICAgICAgICAgICAgaWYgKHJlZGlyZWN0VVJMLmhvc3QgPT09IHJlcXVlc3QubmV4dFVybC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVUkwuYnVpbGRJZCA9IGJ1aWxkSWQgfHwgcmVkaXJlY3RVUkwuYnVpbGRJZDtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzLnNldChcIkxvY2F0aW9uXCIsIFN0cmluZyhyZWRpcmVjdFVSTCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHJlcXVlc3QgaXMgYSBkYXRhIHJlcXVlc3Qgd2UgY2FuJ3QgdXNlIHRoZSBsb2NhdGlvbiBoZWFkZXIgYXNcbiAgICAgKiBpdCBtYXkgZW5kIHVwIHdpdGggQ09SUyBlcnJvci4gSW5zdGVhZCB3ZSBtYXAgdG8gYW4gaW50ZXJuYWwgaGVhZGVyIHNvXG4gICAgICogdGhlIGNsaWVudCBrbm93cyB0aGUgZGVzdGluYXRpb24uXG4gICAgICovIGlmIChpc0RhdGFSZXEpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZGVsZXRlKFwiTG9jYXRpb25cIik7XG4gICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzLnNldChcIngtbmV4dGpzLXJlZGlyZWN0XCIsIHJlbGF0aXZpemVVUkwoU3RyaW5nKHJlZGlyZWN0VVJMKSwgU3RyaW5nKHJlcXVlc3RVcmwpKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZmluYWxSZXNwb25zZSA9IHJlc3BvbnNlID8gcmVzcG9uc2UgOiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICAgIC8vIEZsaWdodCBoZWFkZXJzIGFyZSBub3Qgb3ZlcnJpZGFibGUgLyByZW1vdmFibGUgc28gdGhleSBhcmUgYXBwbGllZCBhdCB0aGUgZW5kLlxuICAgIGNvbnN0IG1pZGRsZXdhcmVPdmVycmlkZUhlYWRlcnMgPSBmaW5hbFJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwieC1taWRkbGV3YXJlLW92ZXJyaWRlLWhlYWRlcnNcIik7XG4gICAgY29uc3Qgb3ZlcndyaXR0ZW5IZWFkZXJzID0gW107XG4gICAgaWYgKG1pZGRsZXdhcmVPdmVycmlkZUhlYWRlcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZmxpZ2h0SGVhZGVycyl7XG4gICAgICAgICAgICBmaW5hbFJlc3BvbnNlLmhlYWRlcnMuc2V0KGB4LW1pZGRsZXdhcmUtcmVxdWVzdC0ke2tleX1gLCB2YWx1ZSk7XG4gICAgICAgICAgICBvdmVyd3JpdHRlbkhlYWRlcnMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvdmVyd3JpdHRlbkhlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmluYWxSZXNwb25zZS5oZWFkZXJzLnNldChcIngtbWlkZGxld2FyZS1vdmVycmlkZS1oZWFkZXJzXCIsIG1pZGRsZXdhcmVPdmVycmlkZUhlYWRlcnMgKyBcIixcIiArIG92ZXJ3cml0dGVuSGVhZGVycy5qb2luKFwiLFwiKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzcG9uc2U6IGZpbmFsUmVzcG9uc2UsXG4gICAgICAgIHdhaXRVbnRpbDogUHJvbWlzZS5hbGwoZXZlbnRbd2FpdFVudGlsU3ltYm9sXSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0VW5zdXBwb3J0ZWRNb2R1bGVFcnJvck1lc3NhZ2UobW9kdWxlKSB7XG4gICAgLy8gd2FybmluZzogaWYgeW91IGNoYW5nZSB0aGVzZSBtZXNzYWdlcywgeW91IG11c3QgYWRqdXN0IGhvdyByZWFjdC1kZXYtb3ZlcmxheSdzIG1pZGRsZXdhcmUgZGV0ZWN0cyBtb2R1bGVzIG5vdCBmb3VuZFxuICAgIHJldHVybiBgVGhlIGVkZ2UgcnVudGltZSBkb2VzIG5vdCBzdXBwb3J0IE5vZGUuanMgJyR7bW9kdWxlfScgbW9kdWxlLlxuTGVhcm4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm9kZS1tb2R1bGUtaW4tZWRnZS1ydW50aW1lYDtcbn1cbmZ1bmN0aW9uIF9faW1wb3J0X3Vuc3VwcG9ydGVkKG1vZHVsZU5hbWUpIHtcbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShmdW5jdGlvbigpIHt9LCB7XG4gICAgICAgIGdldCAoX29iaiwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwidGhlblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGdldFVuc3VwcG9ydGVkTW9kdWxlRXJyb3JNZXNzYWdlKG1vZHVsZU5hbWUpKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29uc3RydWN0ICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihnZXRVbnN1cHBvcnRlZE1vZHVsZUVycm9yTWVzc2FnZShtb2R1bGVOYW1lKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGx5IChfdGFyZ2V0LCBfdGhpcywgYXJncykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJnc1swXShwcm94eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0VW5zdXBwb3J0ZWRNb2R1bGVFcnJvck1lc3NhZ2UobW9kdWxlTmFtZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBQcm94eSh7fSwge1xuICAgICAgICBnZXQ6ICgpPT5wcm94eVxuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuaGFuY2VHbG9iYWxzKCkge1xuICAgIC8vIFRoZSBjb25kaXRpb24gaXMgdHJ1ZSB3aGVuIHRoZSBcInByb2Nlc3NcIiBtb2R1bGUgaXMgcHJvdmlkZWRcbiAgICBpZiAocHJvY2VzcyAhPT0gZ2xvYmFsLnByb2Nlc3MpIHtcbiAgICAgICAgLy8gcHJlZmVyIGxvY2FsIHByb2Nlc3MgYnV0IGdsb2JhbC5wcm9jZXNzIGhhcyBjb3JyZWN0IFwiZW52XCJcbiAgICAgICAgcHJvY2Vzcy5lbnYgPSBnbG9iYWwucHJvY2Vzcy5lbnY7XG4gICAgICAgIGdsb2JhbC5wcm9jZXNzID0gcHJvY2VzcztcbiAgICB9XG4gICAgLy8gdG8gYWxsb3cgYnVpbGRpbmcgY29kZSB0aGF0IGltcG9ydCBidXQgZG9lcyBub3QgdXNlIG5vZGUuanMgbW9kdWxlcyxcbiAgICAvLyB3ZWJwYWNrIHdpbGwgZXhwZWN0IHRoaXMgZnVuY3Rpb24gdG8gZXhpc3QgaW4gZ2xvYmFsIHNjb3BlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIFwiX19pbXBvcnRfdW5zdXBwb3J0ZWRcIiwge1xuICAgICAgICB2YWx1ZTogX19pbXBvcnRfdW5zdXBwb3J0ZWQsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgLy8gRWFnZXJseSBmaXJlIGluc3RydW1lbnRhdGlvbiBob29rIHRvIG1ha2UgdGhlIHN0YXJ0dXAgZmFzdGVyLlxuICAgIHZvaWQgZW5zdXJlSW5zdHJ1bWVudGF0aW9uUmVnaXN0ZXJlZCgpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGFwdGVyLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/adapter.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/error.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/error.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageSignatureError\": () => (/* binding */ PageSignatureError),\n/* harmony export */   \"RemovedPageError\": () => (/* binding */ RemovedPageError),\n/* harmony export */   \"RemovedUAError\": () => (/* binding */ RemovedUAError)\n/* harmony export */ });\nclass PageSignatureError extends Error {\n    constructor({ page  }){\n        super(`The middleware \"${page}\" accepts an async API directly with the form:\n  \n  export function middleware(request, event) {\n    return NextResponse.redirect('/new-location')\n  }\n  \n  Read more: https://nextjs.org/docs/messages/middleware-new-signature\n  `);\n    }\n}\nclass RemovedPageError extends Error {\n    constructor(){\n        super(`The request.page has been deprecated in favour of \\`URLPattern\\`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  `);\n    }\n}\nclass RemovedUAError extends Error {\n    constructor(){\n        super(`The request.ua has been removed in favour of \\`userAgent\\` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  `);\n    }\n}\n\n//# sourceMappingURL=error.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTztBQUNQLGtCQUFrQixPQUFPO0FBQ3pCLGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9lcnJvci5qcz9lMDc2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlU2lnbmF0dXJlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IoeyBwYWdlICB9KXtcbiAgICAgICAgc3VwZXIoYFRoZSBtaWRkbGV3YXJlIFwiJHtwYWdlfVwiIGFjY2VwdHMgYW4gYXN5bmMgQVBJIGRpcmVjdGx5IHdpdGggdGhlIGZvcm06XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXF1ZXN0LCBldmVudCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QoJy9uZXctbG9jYXRpb24nKVxuICB9XG4gIFxuICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL21pZGRsZXdhcmUtbmV3LXNpZ25hdHVyZVxuICBgKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVtb3ZlZFBhZ2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihgVGhlIHJlcXVlc3QucGFnZSBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBcXGBVUkxQYXR0ZXJuXFxgLlxuICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL21pZGRsZXdhcmUtcmVxdWVzdC1wYWdlXG4gIGApO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZW1vdmVkVUFFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcihgVGhlIHJlcXVlc3QudWEgaGFzIGJlZW4gcmVtb3ZlZCBpbiBmYXZvdXIgb2YgXFxgdXNlckFnZW50XFxgIGZ1bmN0aW9uLlxuICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL21pZGRsZXdhcmUtcGFyc2UtdXNlci1hZ2VudFxuICBgKTtcbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/error.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/next-url.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/next-url.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NextURL\": () => (/* binding */ NextURL)\n/* harmony export */ });\n/* harmony import */ var _shared_lib_i18n_detect_domain_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/lib/i18n/detect-domain-locale */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js\");\n/* harmony import */ var _shared_lib_router_utils_format_next_pathname_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/lib/router/utils/format-next-pathname-info */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js\");\n/* harmony import */ var _shared_lib_get_hostname__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/lib/get-hostname */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/get-hostname.js\");\n/* harmony import */ var _shared_lib_router_utils_get_next_pathname_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/lib/router/utils/get-next-pathname-info */ \"(middleware)/./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js\");\n\n\n\n\nconst REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\\/\\/)(127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;\nfunction parseURL(url, base) {\n    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, \"localhost\"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, \"localhost\"));\n}\nconst Internal = Symbol(\"NextURLInternal\");\nclass NextURL {\n    constructor(input, baseOrOpts, opts){\n        let base;\n        let options;\n        if (typeof baseOrOpts === \"object\" && \"pathname\" in baseOrOpts || typeof baseOrOpts === \"string\") {\n            base = baseOrOpts;\n            options = opts || {};\n        } else {\n            options = opts || baseOrOpts || {};\n        }\n        this[Internal] = {\n            url: parseURL(input, base ?? options.base),\n            options: options,\n            basePath: \"\"\n        };\n        this.analyze();\n    }\n    analyze() {\n        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;\n        const info = (0,_shared_lib_router_utils_get_next_pathname_info__WEBPACK_IMPORTED_MODULE_3__.getNextPathnameInfo)(this[Internal].url.pathname, {\n            nextConfig: this[Internal].options.nextConfig,\n            parseData: !undefined,\n            i18nProvider: this[Internal].options.i18nProvider\n        });\n        const hostname = (0,_shared_lib_get_hostname__WEBPACK_IMPORTED_MODULE_2__.getHostname)(this[Internal].url, this[Internal].options.headers);\n        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0,_shared_lib_i18n_detect_domain_locale__WEBPACK_IMPORTED_MODULE_0__.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);\n        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);\n        this[Internal].url.pathname = info.pathname;\n        this[Internal].defaultLocale = defaultLocale;\n        this[Internal].basePath = info.basePath ?? \"\";\n        this[Internal].buildId = info.buildId;\n        this[Internal].locale = info.locale ?? defaultLocale;\n        this[Internal].trailingSlash = info.trailingSlash;\n    }\n    formatPathname() {\n        return (0,_shared_lib_router_utils_format_next_pathname_info__WEBPACK_IMPORTED_MODULE_1__.formatNextPathnameInfo)({\n            basePath: this[Internal].basePath,\n            buildId: this[Internal].buildId,\n            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,\n            locale: this[Internal].locale,\n            pathname: this[Internal].url.pathname,\n            trailingSlash: this[Internal].trailingSlash\n        });\n    }\n    formatSearch() {\n        return this[Internal].url.search;\n    }\n    get buildId() {\n        return this[Internal].buildId;\n    }\n    set buildId(buildId) {\n        this[Internal].buildId = buildId;\n    }\n    get locale() {\n        return this[Internal].locale ?? \"\";\n    }\n    set locale(locale) {\n        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;\n        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {\n            throw new TypeError(`The NextURL configuration includes no locale \"${locale}\"`);\n        }\n        this[Internal].locale = locale;\n    }\n    get defaultLocale() {\n        return this[Internal].defaultLocale;\n    }\n    get domainLocale() {\n        return this[Internal].domainLocale;\n    }\n    get searchParams() {\n        return this[Internal].url.searchParams;\n    }\n    get host() {\n        return this[Internal].url.host;\n    }\n    set host(value) {\n        this[Internal].url.host = value;\n    }\n    get hostname() {\n        return this[Internal].url.hostname;\n    }\n    set hostname(value) {\n        this[Internal].url.hostname = value;\n    }\n    get port() {\n        return this[Internal].url.port;\n    }\n    set port(value) {\n        this[Internal].url.port = value;\n    }\n    get protocol() {\n        return this[Internal].url.protocol;\n    }\n    set protocol(value) {\n        this[Internal].url.protocol = value;\n    }\n    get href() {\n        const pathname = this.formatPathname();\n        const search = this.formatSearch();\n        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;\n    }\n    set href(url) {\n        this[Internal].url = parseURL(url);\n        this.analyze();\n    }\n    get origin() {\n        return this[Internal].url.origin;\n    }\n    get pathname() {\n        return this[Internal].url.pathname;\n    }\n    set pathname(value) {\n        this[Internal].url.pathname = value;\n    }\n    get hash() {\n        return this[Internal].url.hash;\n    }\n    set hash(value) {\n        this[Internal].url.hash = value;\n    }\n    get search() {\n        return this[Internal].url.search;\n    }\n    set search(value) {\n        this[Internal].url.search = value;\n    }\n    get password() {\n        return this[Internal].url.password;\n    }\n    set password(value) {\n        this[Internal].url.password = value;\n    }\n    get username() {\n        return this[Internal].url.username;\n    }\n    set username(value) {\n        this[Internal].url.username = value;\n    }\n    get basePath() {\n        return this[Internal].basePath;\n    }\n    set basePath(value) {\n        this[Internal].basePath = value.startsWith(\"/\") ? value : `/${value}`;\n    }\n    toString() {\n        return this.href;\n    }\n    toJSON() {\n        return this.href;\n    }\n    [Symbol.for(\"edge-runtime.inspect.custom\")]() {\n        return {\n            href: this.href,\n            origin: this.origin,\n            protocol: this.protocol,\n            username: this.username,\n            password: this.password,\n            host: this.host,\n            hostname: this.hostname,\n            port: this.port,\n            pathname: this.pathname,\n            search: this.search,\n            searchParams: this.searchParams,\n            hash: this.hash\n        };\n    }\n    clone() {\n        return new NextURL(String(this), this[Internal].options);\n    }\n}\n\n//# sourceMappingURL=next-url.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9uZXh0LXVybC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnRjtBQUNpQjtBQUNyQztBQUMrQjtBQUMzRixxR0FBcUcsRUFBRTtBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0dBQW1CO0FBQ3hDO0FBQ0Esd0JBQXdCLFNBQThDO0FBQ3RFO0FBQ0EsU0FBUztBQUNULHlCQUF5QixxRUFBVztBQUNwQywrSUFBK0kseUZBQWtCO0FBQ2pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEdBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRixPQUFPO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixjQUFjLElBQUksVUFBVSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsTUFBTTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9uZXh0LXVybC5qcz9lYzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRldGVjdERvbWFpbkxvY2FsZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGVcIjtcbmltcG9ydCB7IGZvcm1hdE5leHRQYXRobmFtZUluZm8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LW5leHQtcGF0aG5hbWUtaW5mb1wiO1xuaW1wb3J0IHsgZ2V0SG9zdG5hbWUgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYi9nZXQtaG9zdG5hbWVcIjtcbmltcG9ydCB7IGdldE5leHRQYXRobmFtZUluZm8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LW5leHQtcGF0aG5hbWUtaW5mb1wiO1xuY29uc3QgUkVHRVhfTE9DQUxIT1NUX0hPU1ROQU1FID0gLyg/IV5odHRwcz86XFwvXFwvKSgxMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfXw6OjF8bG9jYWxob3N0KS87XG5mdW5jdGlvbiBwYXJzZVVSTCh1cmwsIGJhc2UpIHtcbiAgICByZXR1cm4gbmV3IFVSTChTdHJpbmcodXJsKS5yZXBsYWNlKFJFR0VYX0xPQ0FMSE9TVF9IT1NUTkFNRSwgXCJsb2NhbGhvc3RcIiksIGJhc2UgJiYgU3RyaW5nKGJhc2UpLnJlcGxhY2UoUkVHRVhfTE9DQUxIT1NUX0hPU1ROQU1FLCBcImxvY2FsaG9zdFwiKSk7XG59XG5jb25zdCBJbnRlcm5hbCA9IFN5bWJvbChcIk5leHRVUkxJbnRlcm5hbFwiKTtcbmV4cG9ydCBjbGFzcyBOZXh0VVJMIHtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCwgYmFzZU9yT3B0cywgb3B0cyl7XG4gICAgICAgIGxldCBiYXNlO1xuICAgICAgICBsZXQgb3B0aW9ucztcbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlT3JPcHRzID09PSBcIm9iamVjdFwiICYmIFwicGF0aG5hbWVcIiBpbiBiYXNlT3JPcHRzIHx8IHR5cGVvZiBiYXNlT3JPcHRzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBiYXNlID0gYmFzZU9yT3B0cztcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdHMgfHwgYmFzZU9yT3B0cyB8fCB7fTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW0ludGVybmFsXSA9IHtcbiAgICAgICAgICAgIHVybDogcGFyc2VVUkwoaW5wdXQsIGJhc2UgPz8gb3B0aW9ucy5iYXNlKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICBiYXNlUGF0aDogXCJcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFuYWx5emUoKTtcbiAgICB9XG4gICAgYW5hbHl6ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZywgX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnX2kxOG4sIF90aGlzX0ludGVybmFsX2RvbWFpbkxvY2FsZSwgX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnMSwgX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnX2kxOG4xO1xuICAgICAgICBjb25zdCBpbmZvID0gZ2V0TmV4dFBhdGhuYW1lSW5mbyh0aGlzW0ludGVybmFsXS51cmwucGF0aG5hbWUsIHtcbiAgICAgICAgICAgIG5leHRDb25maWc6IHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMubmV4dENvbmZpZyxcbiAgICAgICAgICAgIHBhcnNlRGF0YTogIXByb2Nlc3MuZW52Ll9fTkVYVF9OT19NSURETEVXQVJFX1VSTF9OT1JNQUxJWkUsXG4gICAgICAgICAgICBpMThuUHJvdmlkZXI6IHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMuaTE4blByb3ZpZGVyXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBob3N0bmFtZSA9IGdldEhvc3RuYW1lKHRoaXNbSW50ZXJuYWxdLnVybCwgdGhpc1tJbnRlcm5hbF0ub3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0uZG9tYWluTG9jYWxlID0gdGhpc1tJbnRlcm5hbF0ub3B0aW9ucy5pMThuUHJvdmlkZXIgPyB0aGlzW0ludGVybmFsXS5vcHRpb25zLmkxOG5Qcm92aWRlci5kZXRlY3REb21haW5Mb2NhbGUoaG9zdG5hbWUpIDogZGV0ZWN0RG9tYWluTG9jYWxlKChfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcgPSB0aGlzW0ludGVybmFsXS5vcHRpb25zLm5leHRDb25maWcpID09IG51bGwgPyB2b2lkIDAgOiAoX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnX2kxOG4gPSBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcuaTE4bikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZ19pMThuLmRvbWFpbnMsIGhvc3RuYW1lKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdExvY2FsZSA9ICgoX3RoaXNfSW50ZXJuYWxfZG9tYWluTG9jYWxlID0gdGhpc1tJbnRlcm5hbF0uZG9tYWluTG9jYWxlKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXNfSW50ZXJuYWxfZG9tYWluTG9jYWxlLmRlZmF1bHRMb2NhbGUpIHx8ICgoX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnMSA9IHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMubmV4dENvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IChfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWdfaTE4bjEgPSBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcxLmkxOG4pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWdfaTE4bjEuZGVmYXVsdExvY2FsZSk7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC5wYXRobmFtZSA9IGluZm8ucGF0aG5hbWU7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xuICAgICAgICB0aGlzW0ludGVybmFsXS5iYXNlUGF0aCA9IGluZm8uYmFzZVBhdGggPz8gXCJcIjtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0uYnVpbGRJZCA9IGluZm8uYnVpbGRJZDtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0ubG9jYWxlID0gaW5mby5sb2NhbGUgPz8gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udHJhaWxpbmdTbGFzaCA9IGluZm8udHJhaWxpbmdTbGFzaDtcbiAgICB9XG4gICAgZm9ybWF0UGF0aG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXROZXh0UGF0aG5hbWVJbmZvKHtcbiAgICAgICAgICAgIGJhc2VQYXRoOiB0aGlzW0ludGVybmFsXS5iYXNlUGF0aCxcbiAgICAgICAgICAgIGJ1aWxkSWQ6IHRoaXNbSW50ZXJuYWxdLmJ1aWxkSWQsXG4gICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiAhdGhpc1tJbnRlcm5hbF0ub3B0aW9ucy5mb3JjZUxvY2FsZSA/IHRoaXNbSW50ZXJuYWxdLmRlZmF1bHRMb2NhbGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsb2NhbGU6IHRoaXNbSW50ZXJuYWxdLmxvY2FsZSxcbiAgICAgICAgICAgIHBhdGhuYW1lOiB0aGlzW0ludGVybmFsXS51cmwucGF0aG5hbWUsXG4gICAgICAgICAgICB0cmFpbGluZ1NsYXNoOiB0aGlzW0ludGVybmFsXS50cmFpbGluZ1NsYXNoXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmb3JtYXRTZWFyY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwuc2VhcmNoO1xuICAgIH1cbiAgICBnZXQgYnVpbGRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLmJ1aWxkSWQ7XG4gICAgfVxuICAgIHNldCBidWlsZElkKGJ1aWxkSWQpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0uYnVpbGRJZCA9IGJ1aWxkSWQ7XG4gICAgfVxuICAgIGdldCBsb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS5sb2NhbGUgPz8gXCJcIjtcbiAgICB9XG4gICAgc2V0IGxvY2FsZShsb2NhbGUpIHtcbiAgICAgICAgdmFyIF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZywgX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnX2kxOG47XG4gICAgICAgIGlmICghdGhpc1tJbnRlcm5hbF0ubG9jYWxlIHx8ICEoKF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZyA9IHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMubmV4dENvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IChfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWdfaTE4biA9IF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZy5pMThuKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnX2kxOG4ubG9jYWxlcy5pbmNsdWRlcyhsb2NhbGUpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIE5leHRVUkwgY29uZmlndXJhdGlvbiBpbmNsdWRlcyBubyBsb2NhbGUgXCIke2xvY2FsZX1cImApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLmxvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG4gICAgZ2V0IGRlZmF1bHRMb2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS5kZWZhdWx0TG9jYWxlO1xuICAgIH1cbiAgICBnZXQgZG9tYWluTG9jYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0uZG9tYWluTG9jYWxlO1xuICAgIH1cbiAgICBnZXQgc2VhcmNoUGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLnNlYXJjaFBhcmFtcztcbiAgICB9XG4gICAgZ2V0IGhvc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwuaG9zdDtcbiAgICB9XG4gICAgc2V0IGhvc3QodmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLmhvc3QgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGhvc3RuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLmhvc3RuYW1lO1xuICAgIH1cbiAgICBzZXQgaG9zdG5hbWUodmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLmhvc3RuYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwb3J0KCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLnBvcnQ7XG4gICAgfVxuICAgIHNldCBwb3J0KHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC5wb3J0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBwcm90b2NvbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLnVybC5wcm90b2NvbDtcbiAgICB9XG4gICAgc2V0IHByb3RvY29sKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC5wcm90b2NvbCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaHJlZigpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSB0aGlzLmZvcm1hdFBhdGhuYW1lKCk7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IHRoaXMuZm9ybWF0U2VhcmNoKCk7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByb3RvY29sfS8vJHt0aGlzLmhvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke3RoaXMuaGFzaH1gO1xuICAgIH1cbiAgICBzZXQgaHJlZih1cmwpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsID0gcGFyc2VVUkwodXJsKTtcbiAgICAgICAgdGhpcy5hbmFseXplKCk7XG4gICAgfVxuICAgIGdldCBvcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwub3JpZ2luO1xuICAgIH1cbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwucGF0aG5hbWU7XG4gICAgfVxuICAgIHNldCBwYXRobmFtZSh2YWx1ZSkge1xuICAgICAgICB0aGlzW0ludGVybmFsXS51cmwucGF0aG5hbWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGhhc2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwuaGFzaDtcbiAgICB9XG4gICAgc2V0IGhhc2godmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLmhhc2ggPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHNlYXJjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLnVybC5zZWFyY2g7XG4gICAgfVxuICAgIHNldCBzZWFyY2godmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLnNlYXJjaCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcGFzc3dvcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwucGFzc3dvcmQ7XG4gICAgfVxuICAgIHNldCBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICB0aGlzW0ludGVybmFsXS51cmwucGFzc3dvcmQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHVzZXJuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLnVzZXJuYW1lO1xuICAgIH1cbiAgICBzZXQgdXNlcm5hbWUodmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLnVzZXJuYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBiYXNlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLmJhc2VQYXRoO1xuICAgIH1cbiAgICBzZXQgYmFzZVBhdGgodmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0uYmFzZVBhdGggPSB2YWx1ZS5zdGFydHNXaXRoKFwiL1wiKSA/IHZhbHVlIDogYC8ke3ZhbHVlfWA7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ocmVmO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhyZWY7XG4gICAgfVxuICAgIFtTeW1ib2wuZm9yKFwiZWRnZS1ydW50aW1lLmluc3BlY3QuY3VzdG9tXCIpXSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHRoaXMuaHJlZixcbiAgICAgICAgICAgIG9yaWdpbjogdGhpcy5vcmlnaW4sXG4gICAgICAgICAgICBwcm90b2NvbDogdGhpcy5wcm90b2NvbCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydCxcbiAgICAgICAgICAgIHBhdGhuYW1lOiB0aGlzLnBhdGhuYW1lLFxuICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtczogdGhpcy5zZWFyY2hQYXJhbXMsXG4gICAgICAgICAgICBoYXNoOiB0aGlzLmhhc2hcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTmV4dFVSTChTdHJpbmcodGhpcyksIHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMpO1xuICAgIH1cbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV4dC11cmwuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/next-url.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/cookies.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/compiled/@edge-runtime/cookies */ \"(middleware)/./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js\");\n/* harmony import */ var next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_compiled_edge_runtime_cookies__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=cookies.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9jb29raWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDs7QUFFekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9jb29raWVzLmpzP2RkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIm5leHQvZGlzdC9jb21waWxlZC9AZWRnZS1ydW50aW1lL2Nvb2tpZXNcIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29va2llcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/cookies.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NextFetchEvent\": () => (/* binding */ NextFetchEvent),\n/* harmony export */   \"waitUntilSymbol\": () => (/* binding */ waitUntilSymbol)\n/* harmony export */ });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error */ \"(middleware)/./node_modules/next/dist/esm/server/web/error.js\");\n\nconst responseSymbol = Symbol(\"response\");\nconst passThroughSymbol = Symbol(\"passThrough\");\nconst waitUntilSymbol = Symbol(\"waitUntil\");\nclass FetchEvent {\n    // eslint-disable-next-line @typescript-eslint/no-useless-constructor\n    constructor(_request){\n        this[waitUntilSymbol] = [];\n        this[passThroughSymbol] = false;\n    }\n    respondWith(response) {\n        if (!this[responseSymbol]) {\n            this[responseSymbol] = Promise.resolve(response);\n        }\n    }\n    passThroughOnException() {\n        this[passThroughSymbol] = true;\n    }\n    waitUntil(promise) {\n        this[waitUntilSymbol].push(promise);\n    }\n}\nclass NextFetchEvent extends FetchEvent {\n    constructor(params){\n        super(params.request);\n        this.sourcePage = params.page;\n    }\n    /**\n   * @deprecated The `request` is now the first parameter and the API is now async.\n   *\n   * Read more: https://nextjs.org/docs/messages/middleware-new-signature\n   */ get request() {\n        throw new _error__WEBPACK_IMPORTED_MODULE_0__.PageSignatureError({\n            page: this.sourcePage\n        });\n    }\n    /**\n   * @deprecated Using `respondWith` is no longer needed.\n   *\n   * Read more: https://nextjs.org/docs/messages/middleware-new-signature\n   */ respondWith() {\n        throw new _error__WEBPACK_IMPORTED_MODULE_0__.PageSignatureError({\n            page: this.sourcePage\n        });\n    }\n}\n\n//# sourceMappingURL=fetch-event.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9mZXRjaC1ldmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFDOUM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0RBQWtCO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzREFBa0I7QUFDcEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL2ZldGNoLWV2ZW50LmpzP2Y3OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZVNpZ25hdHVyZUVycm9yIH0gZnJvbSBcIi4uL2Vycm9yXCI7XG5jb25zdCByZXNwb25zZVN5bWJvbCA9IFN5bWJvbChcInJlc3BvbnNlXCIpO1xuY29uc3QgcGFzc1Rocm91Z2hTeW1ib2wgPSBTeW1ib2woXCJwYXNzVGhyb3VnaFwiKTtcbmV4cG9ydCBjb25zdCB3YWl0VW50aWxTeW1ib2wgPSBTeW1ib2woXCJ3YWl0VW50aWxcIik7XG5jbGFzcyBGZXRjaEV2ZW50IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZWxlc3MtY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihfcmVxdWVzdCl7XG4gICAgICAgIHRoaXNbd2FpdFVudGlsU3ltYm9sXSA9IFtdO1xuICAgICAgICB0aGlzW3Bhc3NUaHJvdWdoU3ltYm9sXSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXNwb25kV2l0aChyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXRoaXNbcmVzcG9uc2VTeW1ib2xdKSB7XG4gICAgICAgICAgICB0aGlzW3Jlc3BvbnNlU3ltYm9sXSA9IFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFzc1Rocm91Z2hPbkV4Y2VwdGlvbigpIHtcbiAgICAgICAgdGhpc1twYXNzVGhyb3VnaFN5bWJvbF0gPSB0cnVlO1xuICAgIH1cbiAgICB3YWl0VW50aWwocHJvbWlzZSkge1xuICAgICAgICB0aGlzW3dhaXRVbnRpbFN5bWJvbF0ucHVzaChwcm9taXNlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTmV4dEZldGNoRXZlbnQgZXh0ZW5kcyBGZXRjaEV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwYXJhbXMpe1xuICAgICAgICBzdXBlcihwYXJhbXMucmVxdWVzdCk7XG4gICAgICAgIHRoaXMuc291cmNlUGFnZSA9IHBhcmFtcy5wYWdlO1xuICAgIH1cbiAgICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVGhlIGByZXF1ZXN0YCBpcyBub3cgdGhlIGZpcnN0IHBhcmFtZXRlciBhbmQgdGhlIEFQSSBpcyBub3cgYXN5bmMuXG4gICAqXG4gICAqIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbWlkZGxld2FyZS1uZXctc2lnbmF0dXJlXG4gICAqLyBnZXQgcmVxdWVzdCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhZ2VTaWduYXR1cmVFcnJvcih7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnNvdXJjZVBhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2luZyBgcmVzcG9uZFdpdGhgIGlzIG5vIGxvbmdlciBuZWVkZWQuXG4gICAqXG4gICAqIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbWlkZGxld2FyZS1uZXctc2lnbmF0dXJlXG4gICAqLyByZXNwb25kV2l0aCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBhZ2VTaWduYXR1cmVFcnJvcih7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnNvdXJjZVBhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mZXRjaC1ldmVudC5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/request.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/spec-extension/request.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INTERNALS\": () => (/* binding */ INTERNALS),\n/* harmony export */   \"NextRequest\": () => (/* binding */ NextRequest)\n/* harmony export */ });\n/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next-url */ \"(middleware)/./node_modules/next/dist/esm/server/web/next-url.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"(middleware)/./node_modules/next/dist/esm/server/web/utils.js\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error */ \"(middleware)/./node_modules/next/dist/esm/server/web/error.js\");\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookies */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/cookies.js\");\n\n\n\n\nconst INTERNALS = Symbol(\"internal request\");\nclass NextRequest extends Request {\n    constructor(input, init = {}){\n        const url = typeof input !== \"string\" && \"url\" in input ? input.url : String(input);\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.validateURL)(url);\n        super(url, init);\n        const nextUrl = new _next_url__WEBPACK_IMPORTED_MODULE_0__.NextURL(url, {\n            headers: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toNodeHeaders)(this.headers),\n            nextConfig: init.nextConfig\n        });\n        this[INTERNALS] = {\n            cookies: new _cookies__WEBPACK_IMPORTED_MODULE_3__.RequestCookies(this.headers),\n            geo: init.geo || {},\n            ip: init.ip,\n            nextUrl,\n            url:  false ? 0 : nextUrl.toString()\n        };\n    }\n    [Symbol.for(\"edge-runtime.inspect.custom\")]() {\n        return {\n            cookies: this.cookies,\n            geo: this.geo,\n            ip: this.ip,\n            nextUrl: this.nextUrl,\n            url: this.url,\n            // rest of props come from Request\n            bodyUsed: this.bodyUsed,\n            cache: this.cache,\n            credentials: this.credentials,\n            destination: this.destination,\n            headers: Object.fromEntries(this.headers),\n            integrity: this.integrity,\n            keepalive: this.keepalive,\n            method: this.method,\n            mode: this.mode,\n            redirect: this.redirect,\n            referrer: this.referrer,\n            referrerPolicy: this.referrerPolicy,\n            signal: this.signal\n        };\n    }\n    get cookies() {\n        return this[INTERNALS].cookies;\n    }\n    get geo() {\n        return this[INTERNALS].geo;\n    }\n    get ip() {\n        return this[INTERNALS].ip;\n    }\n    get nextUrl() {\n        return this[INTERNALS].nextUrl;\n    }\n    /**\n   * @deprecated\n   * `page` has been deprecated in favour of `URLPattern`.\n   * Read more: https://nextjs.org/docs/messages/middleware-request-page\n   */ get page() {\n        throw new _error__WEBPACK_IMPORTED_MODULE_2__.RemovedPageError();\n    }\n    /**\n   * @deprecated\n   * `ua` has been removed in favour of \\`userAgent\\` function.\n   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n   */ get ua() {\n        throw new _error__WEBPACK_IMPORTED_MODULE_2__.RemovedUAError();\n    }\n    get url() {\n        return this[INTERNALS].url;\n    }\n}\n\n//# sourceMappingURL=request.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9yZXF1ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzQztBQUNnQjtBQUNNO0FBQ2pCO0FBQ3BDO0FBQ0E7QUFDUCxnQ0FBZ0M7QUFDaEM7QUFDQSxRQUFRLG1EQUFXO0FBQ25CO0FBQ0EsNEJBQTRCLDhDQUFPO0FBQ25DLHFCQUFxQixxREFBYTtBQUNsQztBQUNBLFNBQVM7QUFDVDtBQUNBLHlCQUF5QixvREFBYztBQUN2QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLGlCQUFpQixNQUE4QyxHQUFHLENBQUc7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2VzbS9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL3JlcXVlc3QuanM/YzQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0VVJMIH0gZnJvbSBcIi4uL25leHQtdXJsXCI7XG5pbXBvcnQgeyB0b05vZGVIZWFkZXJzLCB2YWxpZGF0ZVVSTCB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgUmVtb3ZlZFVBRXJyb3IsIFJlbW92ZWRQYWdlRXJyb3IgfSBmcm9tIFwiLi4vZXJyb3JcIjtcbmltcG9ydCB7IFJlcXVlc3RDb29raWVzIH0gZnJvbSBcIi4vY29va2llc1wiO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMUyA9IFN5bWJvbChcImludGVybmFsIHJlcXVlc3RcIik7XG5leHBvcnQgY2xhc3MgTmV4dFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCwgaW5pdCA9IHt9KXtcbiAgICAgICAgY29uc3QgdXJsID0gdHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiICYmIFwidXJsXCIgaW4gaW5wdXQgPyBpbnB1dC51cmwgOiBTdHJpbmcoaW5wdXQpO1xuICAgICAgICB2YWxpZGF0ZVVSTCh1cmwpO1xuICAgICAgICBzdXBlcih1cmwsIGluaXQpO1xuICAgICAgICBjb25zdCBuZXh0VXJsID0gbmV3IE5leHRVUkwodXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0b05vZGVIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICAgICAgICBuZXh0Q29uZmlnOiBpbml0Lm5leHRDb25maWdcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXNbSU5URVJOQUxTXSA9IHtcbiAgICAgICAgICAgIGNvb2tpZXM6IG5ldyBSZXF1ZXN0Q29va2llcyh0aGlzLmhlYWRlcnMpLFxuICAgICAgICAgICAgZ2VvOiBpbml0LmdlbyB8fCB7fSxcbiAgICAgICAgICAgIGlwOiBpbml0LmlwLFxuICAgICAgICAgICAgbmV4dFVybCxcbiAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuX19ORVhUX05PX01JRERMRVdBUkVfVVJMX05PUk1BTElaRSA/IHVybCA6IG5leHRVcmwudG9TdHJpbmcoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBbU3ltYm9sLmZvcihcImVkZ2UtcnVudGltZS5pbnNwZWN0LmN1c3RvbVwiKV0oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb29raWVzOiB0aGlzLmNvb2tpZXMsXG4gICAgICAgICAgICBnZW86IHRoaXMuZ2VvLFxuICAgICAgICAgICAgaXA6IHRoaXMuaXAsXG4gICAgICAgICAgICBuZXh0VXJsOiB0aGlzLm5leHRVcmwsXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgICAgICAgLy8gcmVzdCBvZiBwcm9wcyBjb21lIGZyb20gUmVxdWVzdFxuICAgICAgICAgICAgYm9keVVzZWQ6IHRoaXMuYm9keVVzZWQsXG4gICAgICAgICAgICBjYWNoZTogdGhpcy5jYWNoZSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB0aGlzLmNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgZGVzdGluYXRpb246IHRoaXMuZGVzdGluYXRpb24sXG4gICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuZnJvbUVudHJpZXModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIGludGVncml0eTogdGhpcy5pbnRlZ3JpdHksXG4gICAgICAgICAgICBrZWVwYWxpdmU6IHRoaXMua2VlcGFsaXZlLFxuICAgICAgICAgICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICAgICAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiB0aGlzLnJlZGlyZWN0LFxuICAgICAgICAgICAgcmVmZXJyZXI6IHRoaXMucmVmZXJyZXIsXG4gICAgICAgICAgICByZWZlcnJlclBvbGljeTogdGhpcy5yZWZlcnJlclBvbGljeSxcbiAgICAgICAgICAgIHNpZ25hbDogdGhpcy5zaWduYWxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0IGNvb2tpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0lOVEVSTkFMU10uY29va2llcztcbiAgICB9XG4gICAgZ2V0IGdlbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTXS5nZW87XG4gICAgfVxuICAgIGdldCBpcCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTXS5pcDtcbiAgICB9XG4gICAgZ2V0IG5leHRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0lOVEVSTkFMU10ubmV4dFVybDtcbiAgICB9XG4gICAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIGBwYWdlYCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm91ciBvZiBgVVJMUGF0dGVybmAuXG4gICAqIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbWlkZGxld2FyZS1yZXF1ZXN0LXBhZ2VcbiAgICovIGdldCBwYWdlKCkge1xuICAgICAgICB0aHJvdyBuZXcgUmVtb3ZlZFBhZ2VFcnJvcigpO1xuICAgIH1cbiAgICAvKipcbiAgICogQGRlcHJlY2F0ZWRcbiAgICogYHVhYCBoYXMgYmVlbiByZW1vdmVkIGluIGZhdm91ciBvZiBcXGB1c2VyQWdlbnRcXGAgZnVuY3Rpb24uXG4gICAqIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbWlkZGxld2FyZS1wYXJzZS11c2VyLWFnZW50XG4gICAqLyBnZXQgdWEoKSB7XG4gICAgICAgIHRocm93IG5ldyBSZW1vdmVkVUFFcnJvcigpO1xuICAgIH1cbiAgICBnZXQgdXJsKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnVybDtcbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/request.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/response.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/spec-extension/response.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NextResponse\": () => (/* binding */ NextResponse)\n/* harmony export */ });\n/* harmony import */ var _next_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../next-url */ \"(middleware)/./node_modules/next/dist/esm/server/web/next-url.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"(middleware)/./node_modules/next/dist/esm/server/web/utils.js\");\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookies */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/cookies.js\");\n\n\n\nconst INTERNALS = Symbol(\"internal response\");\nconst REDIRECTS = new Set([\n    301,\n    302,\n    303,\n    307,\n    308\n]);\nfunction handleMiddlewareField(init, headers) {\n    var _init_request;\n    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {\n        if (!(init.request.headers instanceof Headers)) {\n            throw new Error(\"request.headers must be an instance of Headers\");\n        }\n        const keys = [];\n        for (const [key, value] of init.request.headers){\n            headers.set(\"x-middleware-request-\" + key, value);\n            keys.push(key);\n        }\n        headers.set(\"x-middleware-override-headers\", keys.join(\",\"));\n    }\n}\nclass NextResponse extends Response {\n    constructor(body, init = {}){\n        super(body, init);\n        this[INTERNALS] = {\n            cookies: new _cookies__WEBPACK_IMPORTED_MODULE_2__.ResponseCookies(this.headers),\n            url: init.url ? new _next_url__WEBPACK_IMPORTED_MODULE_0__.NextURL(init.url, {\n                headers: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toNodeHeaders)(this.headers),\n                nextConfig: init.nextConfig\n            }) : undefined\n        };\n    }\n    [Symbol.for(\"edge-runtime.inspect.custom\")]() {\n        return {\n            cookies: this.cookies,\n            url: this.url,\n            // rest of props come from Response\n            body: this.body,\n            bodyUsed: this.bodyUsed,\n            headers: Object.fromEntries(this.headers),\n            ok: this.ok,\n            redirected: this.redirected,\n            status: this.status,\n            statusText: this.statusText,\n            type: this.type\n        };\n    }\n    get cookies() {\n        return this[INTERNALS].cookies;\n    }\n    static json(body, init) {\n        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.\n        const response = Response.json(body, init);\n        return new NextResponse(response.body, response);\n    }\n    static redirect(url, init) {\n        const status = typeof init === \"number\" ? init : (init == null ? void 0 : init.status) ?? 307;\n        if (!REDIRECTS.has(status)) {\n            throw new RangeError('Failed to execute \"redirect\" on \"response\": Invalid status code');\n        }\n        const initObj = typeof init === \"object\" ? init : {};\n        const headers = new Headers(initObj == null ? void 0 : initObj.headers);\n        headers.set(\"Location\", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.validateURL)(url));\n        return new NextResponse(null, {\n            ...initObj,\n            headers,\n            status\n        });\n    }\n    static rewrite(destination, init) {\n        const headers = new Headers(init == null ? void 0 : init.headers);\n        headers.set(\"x-middleware-rewrite\", (0,_utils__WEBPACK_IMPORTED_MODULE_1__.validateURL)(destination));\n        handleMiddlewareField(init, headers);\n        return new NextResponse(null, {\n            ...init,\n            headers\n        });\n    }\n    static next(init) {\n        const headers = new Headers(init == null ? void 0 : init.headers);\n        headers.set(\"x-middleware-next\", \"1\");\n        handleMiddlewareField(init, headers);\n        return new NextResponse(null, {\n            ...init,\n            headers\n        });\n    }\n}\n\n//# sourceMappingURL=response.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9yZXNwb25zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNDO0FBQ2dCO0FBQ1Y7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EseUJBQXlCLHFEQUFlO0FBQ3hDLGdDQUFnQyw4Q0FBTztBQUN2Qyx5QkFBeUIscURBQWE7QUFDdEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtREFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsbURBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvZXNtL3NlcnZlci93ZWIvc3BlYy1leHRlbnNpb24vcmVzcG9uc2UuanM/YTJhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0VVJMIH0gZnJvbSBcIi4uL25leHQtdXJsXCI7XG5pbXBvcnQgeyB0b05vZGVIZWFkZXJzLCB2YWxpZGF0ZVVSTCB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHsgUmVzcG9uc2VDb29raWVzIH0gZnJvbSBcIi4vY29va2llc1wiO1xuY29uc3QgSU5URVJOQUxTID0gU3ltYm9sKFwiaW50ZXJuYWwgcmVzcG9uc2VcIik7XG5jb25zdCBSRURJUkVDVFMgPSBuZXcgU2V0KFtcbiAgICAzMDEsXG4gICAgMzAyLFxuICAgIDMwMyxcbiAgICAzMDcsXG4gICAgMzA4XG5dKTtcbmZ1bmN0aW9uIGhhbmRsZU1pZGRsZXdhcmVGaWVsZChpbml0LCBoZWFkZXJzKSB7XG4gICAgdmFyIF9pbml0X3JlcXVlc3Q7XG4gICAgaWYgKGluaXQgPT0gbnVsbCA/IHZvaWQgMCA6IChfaW5pdF9yZXF1ZXN0ID0gaW5pdC5yZXF1ZXN0KSA9PSBudWxsID8gdm9pZCAwIDogX2luaXRfcmVxdWVzdC5oZWFkZXJzKSB7XG4gICAgICAgIGlmICghKGluaXQucmVxdWVzdC5oZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlcXVlc3QuaGVhZGVycyBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIEhlYWRlcnNcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBpbml0LnJlcXVlc3QuaGVhZGVycyl7XG4gICAgICAgICAgICBoZWFkZXJzLnNldChcIngtbWlkZGxld2FyZS1yZXF1ZXN0LVwiICsga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkZXJzLnNldChcIngtbWlkZGxld2FyZS1vdmVycmlkZS1oZWFkZXJzXCIsIGtleXMuam9pbihcIixcIikpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBOZXh0UmVzcG9uc2UgZXh0ZW5kcyBSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IoYm9keSwgaW5pdCA9IHt9KXtcbiAgICAgICAgc3VwZXIoYm9keSwgaW5pdCk7XG4gICAgICAgIHRoaXNbSU5URVJOQUxTXSA9IHtcbiAgICAgICAgICAgIGNvb2tpZXM6IG5ldyBSZXNwb25zZUNvb2tpZXModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIHVybDogaW5pdC51cmwgPyBuZXcgTmV4dFVSTChpbml0LnVybCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRvTm9kZUhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgICAgICBuZXh0Q29uZmlnOiBpbml0Lm5leHRDb25maWdcbiAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIFtTeW1ib2wuZm9yKFwiZWRnZS1ydW50aW1lLmluc3BlY3QuY3VzdG9tXCIpXSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcyxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAvLyByZXN0IG9mIHByb3BzIGNvbWUgZnJvbSBSZXNwb25zZVxuICAgICAgICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgICAgICAgYm9keVVzZWQ6IHRoaXMuYm9keVVzZWQsXG4gICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuZnJvbUVudHJpZXModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIG9rOiB0aGlzLm9rLFxuICAgICAgICAgICAgcmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgY29va2llcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTXS5jb29raWVzO1xuICAgIH1cbiAgICBzdGF0aWMganNvbihib2R5LCBpbml0KSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVGhpcyBpcyBub3QgaW4gbGliL2RvbSByaWdodCBub3csIGFuZCB3ZSBjYW4ndCBhdWdtZW50IGl0LlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IFJlc3BvbnNlLmpzb24oYm9keSwgaW5pdCk7XG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKHJlc3BvbnNlLmJvZHksIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgc3RhdGljIHJlZGlyZWN0KHVybCwgaW5pdCkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IGluaXQgOiAoaW5pdCA9PSBudWxsID8gdm9pZCAwIDogaW5pdC5zdGF0dXMpID8/IDMwNztcbiAgICAgICAgaWYgKCFSRURJUkVDVFMuaGFzKHN0YXR1cykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcInJlZGlyZWN0XCIgb24gXCJyZXNwb25zZVwiOiBJbnZhbGlkIHN0YXR1cyBjb2RlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdE9iaiA9IHR5cGVvZiBpbml0ID09PSBcIm9iamVjdFwiID8gaW5pdCA6IHt9O1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdE9iaiA9PSBudWxsID8gdm9pZCAwIDogaW5pdE9iai5oZWFkZXJzKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCB2YWxpZGF0ZVVSTCh1cmwpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgLi4uaW5pdE9iaixcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyByZXdyaXRlKGRlc3RpbmF0aW9uLCBpbml0KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbml0ID09IG51bGwgPyB2b2lkIDAgOiBpbml0LmhlYWRlcnMpO1xuICAgICAgICBoZWFkZXJzLnNldChcIngtbWlkZGxld2FyZS1yZXdyaXRlXCIsIHZhbGlkYXRlVVJMKGRlc3RpbmF0aW9uKSk7XG4gICAgICAgIGhhbmRsZU1pZGRsZXdhcmVGaWVsZChpbml0LCBoZWFkZXJzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgLi4uaW5pdCxcbiAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBuZXh0KGluaXQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGluaXQgPT0gbnVsbCA/IHZvaWQgMCA6IGluaXQuaGVhZGVycyk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFwieC1taWRkbGV3YXJlLW5leHRcIiwgXCIxXCIpO1xuICAgICAgICBoYW5kbGVNaWRkbGV3YXJlRmllbGQoaW5pdCwgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgICAgIC4uLmluaXQsXG4gICAgICAgICAgICBoZWFkZXJzXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzcG9uc2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/response.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/esm/server/web/utils.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/esm/server/web/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fromNodeHeaders\": () => (/* binding */ fromNodeHeaders),\n/* harmony export */   \"splitCookiesString\": () => (/* binding */ splitCookiesString),\n/* harmony export */   \"toNodeHeaders\": () => (/* binding */ toNodeHeaders),\n/* harmony export */   \"validateURL\": () => (/* binding */ validateURL)\n/* harmony export */ });\nfunction fromNodeHeaders(object) {\n    const headers = new Headers();\n    for (let [key, value] of Object.entries(object)){\n        const values = Array.isArray(value) ? value : [\n            value\n        ];\n        for (let v of values){\n            if (typeof v === \"undefined\") continue;\n            if (typeof v === \"number\") {\n                v = v.toString();\n            }\n            headers.append(key, v);\n        }\n    }\n    return headers;\n}\n/*\n  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas\n  that are within a single set-cookie field-value, such as in the Expires portion.\n  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2\n  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128\n  React Native's fetch does this for *every* header, including set-cookie.\n  \n  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25\n  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation\n*/ function splitCookiesString(cookiesString) {\n    var cookiesStrings = [];\n    var pos = 0;\n    var start;\n    var ch;\n    var lastComma;\n    var nextStart;\n    var cookiesSeparatorFound;\n    function skipWhitespace() {\n        while(pos < cookiesString.length && /\\s/.test(cookiesString.charAt(pos))){\n            pos += 1;\n        }\n        return pos < cookiesString.length;\n    }\n    function notSpecialChar() {\n        ch = cookiesString.charAt(pos);\n        return ch !== \"=\" && ch !== \";\" && ch !== \",\";\n    }\n    while(pos < cookiesString.length){\n        start = pos;\n        cookiesSeparatorFound = false;\n        while(skipWhitespace()){\n            ch = cookiesString.charAt(pos);\n            if (ch === \",\") {\n                // ',' is a cookie separator if we have later first '=', not ';' or ','\n                lastComma = pos;\n                pos += 1;\n                skipWhitespace();\n                nextStart = pos;\n                while(pos < cookiesString.length && notSpecialChar()){\n                    pos += 1;\n                }\n                // currently special character\n                if (pos < cookiesString.length && cookiesString.charAt(pos) === \"=\") {\n                    // we found cookies separator\n                    cookiesSeparatorFound = true;\n                    // pos is inside the next cookie, so back up and return it.\n                    pos = nextStart;\n                    cookiesStrings.push(cookiesString.substring(start, lastComma));\n                    start = pos;\n                } else {\n                    // in param ',' or param separator ';',\n                    // we continue from that comma\n                    pos = lastComma + 1;\n                }\n            } else {\n                pos += 1;\n            }\n        }\n        if (!cookiesSeparatorFound || pos >= cookiesString.length) {\n            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));\n        }\n    }\n    return cookiesStrings;\n}\nfunction toNodeHeaders(headers) {\n    const result = {};\n    const cookies = [];\n    if (headers) {\n        for (const [key, value] of headers.entries()){\n            if (key.toLowerCase() === \"set-cookie\") {\n                // We may have gotten a comma joined string of cookies, or multiple\n                // set-cookie headers. We need to merge them into one header array\n                // to represent all the cookies.\n                cookies.push(...splitCookiesString(value));\n                result[key] = cookies.length === 1 ? cookies[0] : cookies;\n            } else {\n                result[key] = value;\n            }\n        }\n    }\n    return result;\n}\n/**\n * Validate the correctness of a user-provided URL.\n */ function validateURL(url) {\n    try {\n        return String(new URL(String(url)));\n    } catch (error) {\n        throw new Error(`URL is malformed \"${String(url)}\". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {\n            cause: error\n        });\n    }\n}\n\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi91dGlscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQVc7QUFDWDtBQUNBO0FBQ0EsTUFBTTtBQUNOLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9lc20vc2VydmVyL3dlYi91dGlscy5qcz8zYzZlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmcm9tTm9kZUhlYWRlcnMob2JqZWN0KSB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpe1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgdiBvZiB2YWx1ZXMpe1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcInVuZGVmaW5lZFwiKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHYgPSB2LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzO1xufVxuLypcbiAgU2V0LUNvb2tpZSBoZWFkZXIgZmllbGQtdmFsdWVzIGFyZSBzb21ldGltZXMgY29tbWEgam9pbmVkIGluIG9uZSBzdHJpbmcuIFRoaXMgc3BsaXRzIHRoZW0gd2l0aG91dCBjaG9raW5nIG9uIGNvbW1hc1xuICB0aGF0IGFyZSB3aXRoaW4gYSBzaW5nbGUgc2V0LWNvb2tpZSBmaWVsZC12YWx1ZSwgc3VjaCBhcyBpbiB0aGUgRXhwaXJlcyBwb3J0aW9uLlxuICBUaGlzIGlzIHVuY29tbW9uLCBidXQgZXhwbGljaXRseSBhbGxvd2VkIC0gc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNjE2I3NlY3Rpb24tNC4yXG4gIE5vZGUuanMgZG9lcyB0aGlzIGZvciBldmVyeSBoZWFkZXIgKmV4Y2VwdCogc2V0LWNvb2tpZSAtIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvYmxvYi9kNWUzNjNiNzdlYmFmMWNhZjY3Y2Q3NTI4MjI0YjY1MWM4NjgxNWMxL2xpYi9faHR0cF9pbmNvbWluZy5qcyNMMTI4XG4gIFJlYWN0IE5hdGl2ZSdzIGZldGNoIGRvZXMgdGhpcyBmb3IgKmV2ZXJ5KiBoZWFkZXIsIGluY2x1ZGluZyBzZXQtY29va2llLlxuICBcbiAgQmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvajJvYmpjL2NvbW1pdC8xNjgyMGZkYmM4Zjc2Y2EwYzMzNDcyODEwY2UwY2IwM2QyMGVmZTI1XG4gIENyZWRpdHMgdG86IGh0dHBzOi8vZ2l0aHViLmNvbS90b21iYWxsIGZvciBvcmlnaW5hbCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2NocnVzYXJ0IGZvciBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uXG4qLyBleHBvcnQgZnVuY3Rpb24gc3BsaXRDb29raWVzU3RyaW5nKGNvb2tpZXNTdHJpbmcpIHtcbiAgICB2YXIgY29va2llc1N0cmluZ3MgPSBbXTtcbiAgICB2YXIgcG9zID0gMDtcbiAgICB2YXIgc3RhcnQ7XG4gICAgdmFyIGNoO1xuICAgIHZhciBsYXN0Q29tbWE7XG4gICAgdmFyIG5leHRTdGFydDtcbiAgICB2YXIgY29va2llc1NlcGFyYXRvckZvdW5kO1xuICAgIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgICAgICB3aGlsZShwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCAmJiAvXFxzLy50ZXN0KGNvb2tpZXNTdHJpbmcuY2hhckF0KHBvcykpKXtcbiAgICAgICAgICAgIHBvcyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aDtcbiAgICB9XG4gICAgZnVuY3Rpb24gbm90U3BlY2lhbENoYXIoKSB7XG4gICAgICAgIGNoID0gY29va2llc1N0cmluZy5jaGFyQXQocG9zKTtcbiAgICAgICAgcmV0dXJuIGNoICE9PSBcIj1cIiAmJiBjaCAhPT0gXCI7XCIgJiYgY2ggIT09IFwiLFwiO1xuICAgIH1cbiAgICB3aGlsZShwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCl7XG4gICAgICAgIHN0YXJ0ID0gcG9zO1xuICAgICAgICBjb29raWVzU2VwYXJhdG9yRm91bmQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoc2tpcFdoaXRlc3BhY2UoKSl7XG4gICAgICAgICAgICBjaCA9IGNvb2tpZXNTdHJpbmcuY2hhckF0KHBvcyk7XG4gICAgICAgICAgICBpZiAoY2ggPT09IFwiLFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gJywnIGlzIGEgY29va2llIHNlcGFyYXRvciBpZiB3ZSBoYXZlIGxhdGVyIGZpcnN0ICc9Jywgbm90ICc7JyBvciAnLCdcbiAgICAgICAgICAgICAgICBsYXN0Q29tbWEgPSBwb3M7XG4gICAgICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICAgICAgICBuZXh0U3RhcnQgPSBwb3M7XG4gICAgICAgICAgICAgICAgd2hpbGUocG9zIDwgY29va2llc1N0cmluZy5sZW5ndGggJiYgbm90U3BlY2lhbENoYXIoKSl7XG4gICAgICAgICAgICAgICAgICAgIHBvcyArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgc3BlY2lhbCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICBpZiAocG9zIDwgY29va2llc1N0cmluZy5sZW5ndGggJiYgY29va2llc1N0cmluZy5jaGFyQXQocG9zKSA9PT0gXCI9XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgY29va2llcyBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgY29va2llc1NlcGFyYXRvckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcG9zIGlzIGluc2lkZSB0aGUgbmV4dCBjb29raWUsIHNvIGJhY2sgdXAgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgICAgICAgICAgcG9zID0gbmV4dFN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBjb29raWVzU3RyaW5ncy5wdXNoKGNvb2tpZXNTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0LCBsYXN0Q29tbWEpKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBwb3M7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gcGFyYW0gJywnIG9yIHBhcmFtIHNlcGFyYXRvciAnOycsXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNvbnRpbnVlIGZyb20gdGhhdCBjb21tYVxuICAgICAgICAgICAgICAgICAgICBwb3MgPSBsYXN0Q29tbWEgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb29raWVzU2VwYXJhdG9yRm91bmQgfHwgcG9zID49IGNvb2tpZXNTdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb29raWVzU3RyaW5ncy5wdXNoKGNvb2tpZXNTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0LCBjb29raWVzU3RyaW5nLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb29raWVzU3RyaW5ncztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b05vZGVIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBjb29raWVzID0gW107XG4gICAgaWYgKGhlYWRlcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgaGVhZGVycy5lbnRyaWVzKCkpe1xuICAgICAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBcInNldC1jb29raWVcIikge1xuICAgICAgICAgICAgICAgIC8vIFdlIG1heSBoYXZlIGdvdHRlbiBhIGNvbW1hIGpvaW5lZCBzdHJpbmcgb2YgY29va2llcywgb3IgbXVsdGlwbGVcbiAgICAgICAgICAgICAgICAvLyBzZXQtY29va2llIGhlYWRlcnMuIFdlIG5lZWQgdG8gbWVyZ2UgdGhlbSBpbnRvIG9uZSBoZWFkZXIgYXJyYXlcbiAgICAgICAgICAgICAgICAvLyB0byByZXByZXNlbnQgYWxsIHRoZSBjb29raWVzLlxuICAgICAgICAgICAgICAgIGNvb2tpZXMucHVzaCguLi5zcGxpdENvb2tpZXNTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvb2tpZXMubGVuZ3RoID09PSAxID8gY29va2llc1swXSA6IGNvb2tpZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogVmFsaWRhdGUgdGhlIGNvcnJlY3RuZXNzIG9mIGEgdXNlci1wcm92aWRlZCBVUkwuXG4gKi8gZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVVJMKHVybCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcobmV3IFVSTChTdHJpbmcodXJsKSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVVJMIGlzIG1hbGZvcm1lZCBcIiR7U3RyaW5nKHVybCl9XCIuIFBsZWFzZSB1c2Ugb25seSBhYnNvbHV0ZSBVUkxzIC0gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbWlkZGxld2FyZS1yZWxhdGl2ZS11cmxzYCwge1xuICAgICAgICAgICAgY2F1c2U6IGVycm9yXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/esm/server/web/utils.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/server/web/exports/next-response.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/server/web/exports/next-response.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("// This file is for modularized imports for next/server to get fully-treeshaking.\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _response.NextResponse;\n    }\n}));\nconst _response = __webpack_require__(/*! ../spec-extension/response */ \"(middleware)/./node_modules/next/dist/server/web/spec-extension/response.js\");\n\n//# sourceMappingURL=next-response.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvd2ViL2V4cG9ydHMvbmV4dC1yZXNwb25zZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCLG1CQUFPLENBQUMsK0dBQTRCOztBQUV0RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci93ZWIvZXhwb3J0cy9uZXh0LXJlc3BvbnNlLmpzP2Q4ODIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzIGZvciBuZXh0L3NlcnZlciB0byBnZXQgZnVsbHktdHJlZXNoYWtpbmcuXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9yZXNwb25zZS5OZXh0UmVzcG9uc2U7XG4gICAgfVxufSk7XG5jb25zdCBfcmVzcG9uc2UgPSByZXF1aXJlKFwiLi4vc3BlYy1leHRlbnNpb24vcmVzcG9uc2VcIik7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5leHQtcmVzcG9uc2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/server/web/exports/next-response.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/server/web/next-url.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/server/web/next-url.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"NextURL\", ({\n    enumerable: true,\n    get: function() {\n        return NextURL;\n    }\n}));\nconst _detectdomainlocale = __webpack_require__(/*! ../../shared/lib/i18n/detect-domain-locale */ \"(middleware)/./node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js\");\nconst _formatnextpathnameinfo = __webpack_require__(/*! ../../shared/lib/router/utils/format-next-pathname-info */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js\");\nconst _gethostname = __webpack_require__(/*! ../../shared/lib/get-hostname */ \"(middleware)/./node_modules/next/dist/shared/lib/get-hostname.js\");\nconst _getnextpathnameinfo = __webpack_require__(/*! ../../shared/lib/router/utils/get-next-pathname-info */ \"(middleware)/./node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js\");\nconst REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\\/\\/)(127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;\nfunction parseURL(url, base) {\n    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, \"localhost\"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, \"localhost\"));\n}\nconst Internal = Symbol(\"NextURLInternal\");\nclass NextURL {\n    constructor(input, baseOrOpts, opts){\n        let base;\n        let options;\n        if (typeof baseOrOpts === \"object\" && \"pathname\" in baseOrOpts || typeof baseOrOpts === \"string\") {\n            base = baseOrOpts;\n            options = opts || {};\n        } else {\n            options = opts || baseOrOpts || {};\n        }\n        this[Internal] = {\n            url: parseURL(input, base ?? options.base),\n            options: options,\n            basePath: \"\"\n        };\n        this.analyze();\n    }\n    analyze() {\n        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;\n        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {\n            nextConfig: this[Internal].options.nextConfig,\n            parseData: !undefined,\n            i18nProvider: this[Internal].options.i18nProvider\n        });\n        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);\n        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);\n        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);\n        this[Internal].url.pathname = info.pathname;\n        this[Internal].defaultLocale = defaultLocale;\n        this[Internal].basePath = info.basePath ?? \"\";\n        this[Internal].buildId = info.buildId;\n        this[Internal].locale = info.locale ?? defaultLocale;\n        this[Internal].trailingSlash = info.trailingSlash;\n    }\n    formatPathname() {\n        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({\n            basePath: this[Internal].basePath,\n            buildId: this[Internal].buildId,\n            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,\n            locale: this[Internal].locale,\n            pathname: this[Internal].url.pathname,\n            trailingSlash: this[Internal].trailingSlash\n        });\n    }\n    formatSearch() {\n        return this[Internal].url.search;\n    }\n    get buildId() {\n        return this[Internal].buildId;\n    }\n    set buildId(buildId) {\n        this[Internal].buildId = buildId;\n    }\n    get locale() {\n        return this[Internal].locale ?? \"\";\n    }\n    set locale(locale) {\n        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;\n        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {\n            throw new TypeError(`The NextURL configuration includes no locale \"${locale}\"`);\n        }\n        this[Internal].locale = locale;\n    }\n    get defaultLocale() {\n        return this[Internal].defaultLocale;\n    }\n    get domainLocale() {\n        return this[Internal].domainLocale;\n    }\n    get searchParams() {\n        return this[Internal].url.searchParams;\n    }\n    get host() {\n        return this[Internal].url.host;\n    }\n    set host(value) {\n        this[Internal].url.host = value;\n    }\n    get hostname() {\n        return this[Internal].url.hostname;\n    }\n    set hostname(value) {\n        this[Internal].url.hostname = value;\n    }\n    get port() {\n        return this[Internal].url.port;\n    }\n    set port(value) {\n        this[Internal].url.port = value;\n    }\n    get protocol() {\n        return this[Internal].url.protocol;\n    }\n    set protocol(value) {\n        this[Internal].url.protocol = value;\n    }\n    get href() {\n        const pathname = this.formatPathname();\n        const search = this.formatSearch();\n        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;\n    }\n    set href(url) {\n        this[Internal].url = parseURL(url);\n        this.analyze();\n    }\n    get origin() {\n        return this[Internal].url.origin;\n    }\n    get pathname() {\n        return this[Internal].url.pathname;\n    }\n    set pathname(value) {\n        this[Internal].url.pathname = value;\n    }\n    get hash() {\n        return this[Internal].url.hash;\n    }\n    set hash(value) {\n        this[Internal].url.hash = value;\n    }\n    get search() {\n        return this[Internal].url.search;\n    }\n    set search(value) {\n        this[Internal].url.search = value;\n    }\n    get password() {\n        return this[Internal].url.password;\n    }\n    set password(value) {\n        this[Internal].url.password = value;\n    }\n    get username() {\n        return this[Internal].url.username;\n    }\n    set username(value) {\n        this[Internal].url.username = value;\n    }\n    get basePath() {\n        return this[Internal].basePath;\n    }\n    set basePath(value) {\n        this[Internal].basePath = value.startsWith(\"/\") ? value : `/${value}`;\n    }\n    toString() {\n        return this.href;\n    }\n    toJSON() {\n        return this.href;\n    }\n    [Symbol.for(\"edge-runtime.inspect.custom\")]() {\n        return {\n            href: this.href,\n            origin: this.origin,\n            protocol: this.protocol,\n            username: this.username,\n            password: this.password,\n            host: this.host,\n            hostname: this.hostname,\n            port: this.port,\n            pathname: this.pathname,\n            search: this.search,\n            searchParams: this.searchParams,\n            hash: this.hash\n        };\n    }\n    clone() {\n        return new NextURL(String(this), this[Internal].options);\n    }\n}\n\n//# sourceMappingURL=next-url.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvd2ViL25leHQtdXJsLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsNEJBQTRCLG1CQUFPLENBQUMsaUlBQTRDO0FBQ2hGLGdDQUFnQyxtQkFBTyxDQUFDLDJKQUF5RDtBQUNqRyxxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBK0I7QUFDNUQsNkJBQTZCLG1CQUFPLENBQUMscUpBQXNEO0FBQzNGLHFHQUFxRyxFQUFFO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBOEM7QUFDdEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLE9BQU87QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWMsSUFBSSxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxNQUFNO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci93ZWIvbmV4dC11cmwuanM/NDM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5leHRVUkxcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE5leHRVUkw7XG4gICAgfVxufSk7XG5jb25zdCBfZGV0ZWN0ZG9tYWlubG9jYWxlID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZVwiKTtcbmNvbnN0IF9mb3JtYXRuZXh0cGF0aG5hbWVpbmZvID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC1uZXh0LXBhdGhuYW1lLWluZm9cIik7XG5jb25zdCBfZ2V0aG9zdG5hbWUgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2xpYi9nZXQtaG9zdG5hbWVcIik7XG5jb25zdCBfZ2V0bmV4dHBhdGhuYW1laW5mbyA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtbmV4dC1wYXRobmFtZS1pbmZvXCIpO1xuY29uc3QgUkVHRVhfTE9DQUxIT1NUX0hPU1ROQU1FID0gLyg/IV5odHRwcz86XFwvXFwvKSgxMjcoPzpcXC4oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pKXszfXw6OjF8bG9jYWxob3N0KS87XG5mdW5jdGlvbiBwYXJzZVVSTCh1cmwsIGJhc2UpIHtcbiAgICByZXR1cm4gbmV3IFVSTChTdHJpbmcodXJsKS5yZXBsYWNlKFJFR0VYX0xPQ0FMSE9TVF9IT1NUTkFNRSwgXCJsb2NhbGhvc3RcIiksIGJhc2UgJiYgU3RyaW5nKGJhc2UpLnJlcGxhY2UoUkVHRVhfTE9DQUxIT1NUX0hPU1ROQU1FLCBcImxvY2FsaG9zdFwiKSk7XG59XG5jb25zdCBJbnRlcm5hbCA9IFN5bWJvbChcIk5leHRVUkxJbnRlcm5hbFwiKTtcbmNsYXNzIE5leHRVUkwge1xuICAgIGNvbnN0cnVjdG9yKGlucHV0LCBiYXNlT3JPcHRzLCBvcHRzKXtcbiAgICAgICAgbGV0IGJhc2U7XG4gICAgICAgIGxldCBvcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIGJhc2VPck9wdHMgPT09IFwib2JqZWN0XCIgJiYgXCJwYXRobmFtZVwiIGluIGJhc2VPck9wdHMgfHwgdHlwZW9mIGJhc2VPck9wdHMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlT3JPcHRzO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdHMgfHwge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zID0gb3B0cyB8fCBiYXNlT3JPcHRzIHx8IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdID0ge1xuICAgICAgICAgICAgdXJsOiBwYXJzZVVSTChpbnB1dCwgYmFzZSA/PyBvcHRpb25zLmJhc2UpLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgIGJhc2VQYXRoOiBcIlwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYW5hbHl6ZSgpO1xuICAgIH1cbiAgICBhbmFseXplKCkge1xuICAgICAgICB2YXIgX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnLCBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWdfaTE4biwgX3RoaXNfSW50ZXJuYWxfZG9tYWluTG9jYWxlLCBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcxLCBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWdfaTE4bjE7XG4gICAgICAgIGNvbnN0IGluZm8gPSAoMCwgX2dldG5leHRwYXRobmFtZWluZm8uZ2V0TmV4dFBhdGhuYW1lSW5mbykodGhpc1tJbnRlcm5hbF0udXJsLnBhdGhuYW1lLCB7XG4gICAgICAgICAgICBuZXh0Q29uZmlnOiB0aGlzW0ludGVybmFsXS5vcHRpb25zLm5leHRDb25maWcsXG4gICAgICAgICAgICBwYXJzZURhdGE6ICFwcm9jZXNzLmVudi5fX05FWFRfTk9fTUlERExFV0FSRV9VUkxfTk9STUFMSVpFLFxuICAgICAgICAgICAgaTE4blByb3ZpZGVyOiB0aGlzW0ludGVybmFsXS5vcHRpb25zLmkxOG5Qcm92aWRlclxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaG9zdG5hbWUgPSAoMCwgX2dldGhvc3RuYW1lLmdldEhvc3RuYW1lKSh0aGlzW0ludGVybmFsXS51cmwsIHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMuaGVhZGVycyk7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLmRvbWFpbkxvY2FsZSA9IHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMuaTE4blByb3ZpZGVyID8gdGhpc1tJbnRlcm5hbF0ub3B0aW9ucy5pMThuUHJvdmlkZXIuZGV0ZWN0RG9tYWluTG9jYWxlKGhvc3RuYW1lKSA6ICgwLCBfZGV0ZWN0ZG9tYWlubG9jYWxlLmRldGVjdERvbWFpbkxvY2FsZSkoKF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZyA9IHRoaXNbSW50ZXJuYWxdLm9wdGlvbnMubmV4dENvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IChfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWdfaTE4biA9IF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZy5pMThuKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnX2kxOG4uZG9tYWlucywgaG9zdG5hbWUpO1xuICAgICAgICBjb25zdCBkZWZhdWx0TG9jYWxlID0gKChfdGhpc19JbnRlcm5hbF9kb21haW5Mb2NhbGUgPSB0aGlzW0ludGVybmFsXS5kb21haW5Mb2NhbGUpID09IG51bGwgPyB2b2lkIDAgOiBfdGhpc19JbnRlcm5hbF9kb21haW5Mb2NhbGUuZGVmYXVsdExvY2FsZSkgfHwgKChfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcxID0gdGhpc1tJbnRlcm5hbF0ub3B0aW9ucy5uZXh0Q29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogKF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZ19pMThuMSA9IF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZzEuaTE4bikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZ19pMThuMS5kZWZhdWx0TG9jYWxlKTtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLnBhdGhuYW1lID0gaW5mby5wYXRobmFtZTtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0uZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLmJhc2VQYXRoID0gaW5mby5iYXNlUGF0aCA/PyBcIlwiO1xuICAgICAgICB0aGlzW0ludGVybmFsXS5idWlsZElkID0gaW5mby5idWlsZElkO1xuICAgICAgICB0aGlzW0ludGVybmFsXS5sb2NhbGUgPSBpbmZvLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuICAgICAgICB0aGlzW0ludGVybmFsXS50cmFpbGluZ1NsYXNoID0gaW5mby50cmFpbGluZ1NsYXNoO1xuICAgIH1cbiAgICBmb3JtYXRQYXRobmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfZm9ybWF0bmV4dHBhdGhuYW1laW5mby5mb3JtYXROZXh0UGF0aG5hbWVJbmZvKSh7XG4gICAgICAgICAgICBiYXNlUGF0aDogdGhpc1tJbnRlcm5hbF0uYmFzZVBhdGgsXG4gICAgICAgICAgICBidWlsZElkOiB0aGlzW0ludGVybmFsXS5idWlsZElkLFxuICAgICAgICAgICAgZGVmYXVsdExvY2FsZTogIXRoaXNbSW50ZXJuYWxdLm9wdGlvbnMuZm9yY2VMb2NhbGUgPyB0aGlzW0ludGVybmFsXS5kZWZhdWx0TG9jYWxlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbG9jYWxlOiB0aGlzW0ludGVybmFsXS5sb2NhbGUsXG4gICAgICAgICAgICBwYXRobmFtZTogdGhpc1tJbnRlcm5hbF0udXJsLnBhdGhuYW1lLFxuICAgICAgICAgICAgdHJhaWxpbmdTbGFzaDogdGhpc1tJbnRlcm5hbF0udHJhaWxpbmdTbGFzaFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZm9ybWF0U2VhcmNoKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLnNlYXJjaDtcbiAgICB9XG4gICAgZ2V0IGJ1aWxkSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS5idWlsZElkO1xuICAgIH1cbiAgICBzZXQgYnVpbGRJZChidWlsZElkKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLmJ1aWxkSWQgPSBidWlsZElkO1xuICAgIH1cbiAgICBnZXQgbG9jYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0ubG9jYWxlID8/IFwiXCI7XG4gICAgfVxuICAgIHNldCBsb2NhbGUobG9jYWxlKSB7XG4gICAgICAgIHZhciBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcsIF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZ19pMThuO1xuICAgICAgICBpZiAoIXRoaXNbSW50ZXJuYWxdLmxvY2FsZSB8fCAhKChfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcgPSB0aGlzW0ludGVybmFsXS5vcHRpb25zLm5leHRDb25maWcpID09IG51bGwgPyB2b2lkIDAgOiAoX3RoaXNfSW50ZXJuYWxfb3B0aW9uc19uZXh0Q29uZmlnX2kxOG4gPSBfdGhpc19JbnRlcm5hbF9vcHRpb25zX25leHRDb25maWcuaTE4bikgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzX0ludGVybmFsX29wdGlvbnNfbmV4dENvbmZpZ19pMThuLmxvY2FsZXMuaW5jbHVkZXMobG9jYWxlKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBOZXh0VVJMIGNvbmZpZ3VyYXRpb24gaW5jbHVkZXMgbm8gbG9jYWxlIFwiJHtsb2NhbGV9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW0ludGVybmFsXS5sb2NhbGUgPSBsb2NhbGU7XG4gICAgfVxuICAgIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0uZGVmYXVsdExvY2FsZTtcbiAgICB9XG4gICAgZ2V0IGRvbWFpbkxvY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLmRvbWFpbkxvY2FsZTtcbiAgICB9XG4gICAgZ2V0IHNlYXJjaFBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLnVybC5zZWFyY2hQYXJhbXM7XG4gICAgfVxuICAgIGdldCBob3N0KCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLmhvc3Q7XG4gICAgfVxuICAgIHNldCBob3N0KHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC5ob3N0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBob3N0bmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLnVybC5ob3N0bmFtZTtcbiAgICB9XG4gICAgc2V0IGhvc3RuYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC5ob3N0bmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcG9ydCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLnVybC5wb3J0O1xuICAgIH1cbiAgICBzZXQgcG9ydCh2YWx1ZSkge1xuICAgICAgICB0aGlzW0ludGVybmFsXS51cmwucG9ydCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgcHJvdG9jb2woKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwucHJvdG9jb2w7XG4gICAgfVxuICAgIHNldCBwcm90b2NvbCh2YWx1ZSkge1xuICAgICAgICB0aGlzW0ludGVybmFsXS51cmwucHJvdG9jb2wgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGhyZWYoKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gdGhpcy5mb3JtYXRQYXRobmFtZSgpO1xuICAgICAgICBjb25zdCBzZWFyY2ggPSB0aGlzLmZvcm1hdFNlYXJjaCgpO1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm90b2NvbH0vLyR7dGhpcy5ob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHt0aGlzLmhhc2h9YDtcbiAgICB9XG4gICAgc2V0IGhyZWYodXJsKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybCA9IHBhcnNlVVJMKHVybCk7XG4gICAgICAgIHRoaXMuYW5hbHl6ZSgpO1xuICAgIH1cbiAgICBnZXQgb3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLm9yaWdpbjtcbiAgICB9XG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLnBhdGhuYW1lO1xuICAgIH1cbiAgICBzZXQgcGF0aG5hbWUodmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLnBhdGhuYW1lID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBoYXNoKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLmhhc2g7XG4gICAgfVxuICAgIHNldCBoYXNoKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC5oYXNoID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBzZWFyY2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS51cmwuc2VhcmNoO1xuICAgIH1cbiAgICBzZXQgc2VhcmNoKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC5zZWFyY2ggPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IHBhc3N3b3JkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tJbnRlcm5hbF0udXJsLnBhc3N3b3JkO1xuICAgIH1cbiAgICBzZXQgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgdGhpc1tJbnRlcm5hbF0udXJsLnBhc3N3b3JkID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCB1c2VybmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSW50ZXJuYWxdLnVybC51c2VybmFtZTtcbiAgICB9XG4gICAgc2V0IHVzZXJuYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLnVybC51c2VybmFtZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYmFzZVBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW0ludGVybmFsXS5iYXNlUGF0aDtcbiAgICB9XG4gICAgc2V0IGJhc2VQYXRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXNbSW50ZXJuYWxdLmJhc2VQYXRoID0gdmFsdWUuc3RhcnRzV2l0aChcIi9cIikgPyB2YWx1ZSA6IGAvJHt2YWx1ZX1gO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHJlZjtcbiAgICB9XG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ocmVmO1xuICAgIH1cbiAgICBbU3ltYm9sLmZvcihcImVkZ2UtcnVudGltZS5pbnNwZWN0LmN1c3RvbVwiKV0oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiB0aGlzLmhyZWYsXG4gICAgICAgICAgICBvcmlnaW46IHRoaXMub3JpZ2luLFxuICAgICAgICAgICAgcHJvdG9jb2w6IHRoaXMucHJvdG9jb2wsXG4gICAgICAgICAgICB1c2VybmFtZTogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgICAgICAgaG9zdG5hbWU6IHRoaXMuaG9zdG5hbWUsXG4gICAgICAgICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICAgICAgICBwYXRobmFtZTogdGhpcy5wYXRobmFtZSxcbiAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICBzZWFyY2hQYXJhbXM6IHRoaXMuc2VhcmNoUGFyYW1zLFxuICAgICAgICAgICAgaGFzaDogdGhpcy5oYXNoXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IE5leHRVUkwoU3RyaW5nKHRoaXMpLCB0aGlzW0ludGVybmFsXS5vcHRpb25zKTtcbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5leHQtdXJsLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/server/web/next-url.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/server/web/spec-extension/cookies.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/dist/server/web/spec-extension/cookies.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && 0;\n_export_star(__webpack_require__(/*! next/dist/compiled/@edge-runtime/cookies */ \"(middleware)/./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js\"), exports);\nfunction _export_star(from, to) {\n    Object.keys(from).forEach(function(k) {\n        if (k !== \"default\" && !Object.prototype.hasOwnProperty.call(to, k)) {\n            Object.defineProperty(to, k, {\n                enumerable: true,\n                get: function() {\n                    return from[k];\n                }\n            });\n        }\n    });\n    return from;\n}\n\n//# sourceMappingURL=cookies.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL2Nvb2tpZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixLQUFLLENBQTZEO0FBQ2xFLGFBQWEsbUJBQU8sQ0FBQywrSEFBMEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9jb29raWVzLmpzPzM0NDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIF9fZXhwb3J0KHJlcXVpcmUoXCJuZXh0L2Rpc3QvY29tcGlsZWQvQGVkZ2UtcnVudGltZS9jb29raWVzXCIpKTtcbl9leHBvcnRfc3RhcihyZXF1aXJlKFwibmV4dC9kaXN0L2NvbXBpbGVkL0BlZGdlLXJ1bnRpbWUvY29va2llc1wiKSwgZXhwb3J0cyk7XG5mdW5jdGlvbiBfZXhwb3J0X3N0YXIoZnJvbSwgdG8pIHtcbiAgICBPYmplY3Qua2V5cyhmcm9tKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodG8sIGspKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGssIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZyb207XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvb2tpZXMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/server/web/spec-extension/cookies.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/server/web/spec-extension/response.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/server/web/spec-extension/response.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"NextResponse\", ({\n    enumerable: true,\n    get: function() {\n        return NextResponse;\n    }\n}));\nconst _nexturl = __webpack_require__(/*! ../next-url */ \"(middleware)/./node_modules/next/dist/server/web/next-url.js\");\nconst _utils = __webpack_require__(/*! ../utils */ \"(middleware)/./node_modules/next/dist/server/web/utils.js\");\nconst _cookies = __webpack_require__(/*! ./cookies */ \"(middleware)/./node_modules/next/dist/server/web/spec-extension/cookies.js\");\nconst INTERNALS = Symbol(\"internal response\");\nconst REDIRECTS = new Set([\n    301,\n    302,\n    303,\n    307,\n    308\n]);\nfunction handleMiddlewareField(init, headers) {\n    var _init_request;\n    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {\n        if (!(init.request.headers instanceof Headers)) {\n            throw new Error(\"request.headers must be an instance of Headers\");\n        }\n        const keys = [];\n        for (const [key, value] of init.request.headers){\n            headers.set(\"x-middleware-request-\" + key, value);\n            keys.push(key);\n        }\n        headers.set(\"x-middleware-override-headers\", keys.join(\",\"));\n    }\n}\nclass NextResponse extends Response {\n    constructor(body, init = {}){\n        super(body, init);\n        this[INTERNALS] = {\n            cookies: new _cookies.ResponseCookies(this.headers),\n            url: init.url ? new _nexturl.NextURL(init.url, {\n                headers: (0, _utils.toNodeHeaders)(this.headers),\n                nextConfig: init.nextConfig\n            }) : undefined\n        };\n    }\n    [Symbol.for(\"edge-runtime.inspect.custom\")]() {\n        return {\n            cookies: this.cookies,\n            url: this.url,\n            // rest of props come from Response\n            body: this.body,\n            bodyUsed: this.bodyUsed,\n            headers: Object.fromEntries(this.headers),\n            ok: this.ok,\n            redirected: this.redirected,\n            status: this.status,\n            statusText: this.statusText,\n            type: this.type\n        };\n    }\n    get cookies() {\n        return this[INTERNALS].cookies;\n    }\n    static json(body, init) {\n        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.\n        const response = Response.json(body, init);\n        return new NextResponse(response.body, response);\n    }\n    static redirect(url, init) {\n        const status = typeof init === \"number\" ? init : (init == null ? void 0 : init.status) ?? 307;\n        if (!REDIRECTS.has(status)) {\n            throw new RangeError('Failed to execute \"redirect\" on \"response\": Invalid status code');\n        }\n        const initObj = typeof init === \"object\" ? init : {};\n        const headers = new Headers(initObj == null ? void 0 : initObj.headers);\n        headers.set(\"Location\", (0, _utils.validateURL)(url));\n        return new NextResponse(null, {\n            ...initObj,\n            headers,\n            status\n        });\n    }\n    static rewrite(destination, init) {\n        const headers = new Headers(init == null ? void 0 : init.headers);\n        headers.set(\"x-middleware-rewrite\", (0, _utils.validateURL)(destination));\n        handleMiddlewareField(init, headers);\n        return new NextResponse(null, {\n            ...init,\n            headers\n        });\n    }\n    static next(init) {\n        const headers = new Headers(init == null ? void 0 : init.headers);\n        headers.set(\"x-middleware-next\", \"1\");\n        handleMiddlewareField(init, headers);\n        return new NextResponse(null, {\n            ...init,\n            headers\n        });\n    }\n}\n\n//# sourceMappingURL=response.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL3Jlc3BvbnNlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsaUJBQWlCLG1CQUFPLENBQUMsaUZBQWE7QUFDdEMsZUFBZSxtQkFBTyxDQUFDLDJFQUFVO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLDZGQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL3dlYi9zcGVjLWV4dGVuc2lvbi9yZXNwb25zZS5qcz85NmNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTmV4dFJlc3BvbnNlXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2U7XG4gICAgfVxufSk7XG5jb25zdCBfbmV4dHVybCA9IHJlcXVpcmUoXCIuLi9uZXh0LXVybFwiKTtcbmNvbnN0IF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IF9jb29raWVzID0gcmVxdWlyZShcIi4vY29va2llc1wiKTtcbmNvbnN0IElOVEVSTkFMUyA9IFN5bWJvbChcImludGVybmFsIHJlc3BvbnNlXCIpO1xuY29uc3QgUkVESVJFQ1RTID0gbmV3IFNldChbXG4gICAgMzAxLFxuICAgIDMwMixcbiAgICAzMDMsXG4gICAgMzA3LFxuICAgIDMwOFxuXSk7XG5mdW5jdGlvbiBoYW5kbGVNaWRkbGV3YXJlRmllbGQoaW5pdCwgaGVhZGVycykge1xuICAgIHZhciBfaW5pdF9yZXF1ZXN0O1xuICAgIGlmIChpbml0ID09IG51bGwgPyB2b2lkIDAgOiAoX2luaXRfcmVxdWVzdCA9IGluaXQucmVxdWVzdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9pbml0X3JlcXVlc3QuaGVhZGVycykge1xuICAgICAgICBpZiAoIShpbml0LnJlcXVlc3QuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXF1ZXN0LmhlYWRlcnMgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBIZWFkZXJzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgaW5pdC5yZXF1ZXN0LmhlYWRlcnMpe1xuICAgICAgICAgICAgaGVhZGVycy5zZXQoXCJ4LW1pZGRsZXdhcmUtcmVxdWVzdC1cIiArIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZGVycy5zZXQoXCJ4LW1pZGRsZXdhcmUtb3ZlcnJpZGUtaGVhZGVyc1wiLCBrZXlzLmpvaW4oXCIsXCIpKTtcbiAgICB9XG59XG5jbGFzcyBOZXh0UmVzcG9uc2UgZXh0ZW5kcyBSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IoYm9keSwgaW5pdCA9IHt9KXtcbiAgICAgICAgc3VwZXIoYm9keSwgaW5pdCk7XG4gICAgICAgIHRoaXNbSU5URVJOQUxTXSA9IHtcbiAgICAgICAgICAgIGNvb2tpZXM6IG5ldyBfY29va2llcy5SZXNwb25zZUNvb2tpZXModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIHVybDogaW5pdC51cmwgPyBuZXcgX25leHR1cmwuTmV4dFVSTChpbml0LnVybCwge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6ICgwLCBfdXRpbHMudG9Ob2RlSGVhZGVycykodGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgICAgICBuZXh0Q29uZmlnOiBpbml0Lm5leHRDb25maWdcbiAgICAgICAgICAgIH0pIDogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIFtTeW1ib2wuZm9yKFwiZWRnZS1ydW50aW1lLmluc3BlY3QuY3VzdG9tXCIpXSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvb2tpZXM6IHRoaXMuY29va2llcyxcbiAgICAgICAgICAgIHVybDogdGhpcy51cmwsXG4gICAgICAgICAgICAvLyByZXN0IG9mIHByb3BzIGNvbWUgZnJvbSBSZXNwb25zZVxuICAgICAgICAgICAgYm9keTogdGhpcy5ib2R5LFxuICAgICAgICAgICAgYm9keVVzZWQ6IHRoaXMuYm9keVVzZWQsXG4gICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuZnJvbUVudHJpZXModGhpcy5oZWFkZXJzKSxcbiAgICAgICAgICAgIG9rOiB0aGlzLm9rLFxuICAgICAgICAgICAgcmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkLFxuICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgY29va2llcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTXS5jb29raWVzO1xuICAgIH1cbiAgICBzdGF0aWMganNvbihib2R5LCBpbml0KSB7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVGhpcyBpcyBub3QgaW4gbGliL2RvbSByaWdodCBub3csIGFuZCB3ZSBjYW4ndCBhdWdtZW50IGl0LlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IFJlc3BvbnNlLmpzb24oYm9keSwgaW5pdCk7XG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKHJlc3BvbnNlLmJvZHksIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgc3RhdGljIHJlZGlyZWN0KHVybCwgaW5pdCkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IGluaXQgOiAoaW5pdCA9PSBudWxsID8gdm9pZCAwIDogaW5pdC5zdGF0dXMpID8/IDMwNztcbiAgICAgICAgaWYgKCFSRURJUkVDVFMuaGFzKHN0YXR1cykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcInJlZGlyZWN0XCIgb24gXCJyZXNwb25zZVwiOiBJbnZhbGlkIHN0YXR1cyBjb2RlJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdE9iaiA9IHR5cGVvZiBpbml0ID09PSBcIm9iamVjdFwiID8gaW5pdCA6IHt9O1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5pdE9iaiA9PSBudWxsID8gdm9pZCAwIDogaW5pdE9iai5oZWFkZXJzKTtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCAoMCwgX3V0aWxzLnZhbGlkYXRlVVJMKSh1cmwpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgLi4uaW5pdE9iaixcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyByZXdyaXRlKGRlc3RpbmF0aW9uLCBpbml0KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbml0ID09IG51bGwgPyB2b2lkIDAgOiBpbml0LmhlYWRlcnMpO1xuICAgICAgICBoZWFkZXJzLnNldChcIngtbWlkZGxld2FyZS1yZXdyaXRlXCIsICgwLCBfdXRpbHMudmFsaWRhdGVVUkwpKGRlc3RpbmF0aW9uKSk7XG4gICAgICAgIGhhbmRsZU1pZGRsZXdhcmVGaWVsZChpbml0LCBoZWFkZXJzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UobnVsbCwge1xuICAgICAgICAgICAgLi4uaW5pdCxcbiAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBuZXh0KGluaXQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGluaXQgPT0gbnVsbCA/IHZvaWQgMCA6IGluaXQuaGVhZGVycyk7XG4gICAgICAgIGhlYWRlcnMuc2V0KFwieC1taWRkbGV3YXJlLW5leHRcIiwgXCIxXCIpO1xuICAgICAgICBoYW5kbGVNaWRkbGV3YXJlRmllbGQoaW5pdCwgaGVhZGVycyk7XG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgICAgIC4uLmluaXQsXG4gICAgICAgICAgICBoZWFkZXJzXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzcG9uc2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/server/web/spec-extension/response.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/server/web/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/server/web/utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    fromNodeHeaders: function() {\n        return fromNodeHeaders;\n    },\n    splitCookiesString: function() {\n        return splitCookiesString;\n    },\n    toNodeHeaders: function() {\n        return toNodeHeaders;\n    },\n    validateURL: function() {\n        return validateURL;\n    }\n});\nfunction fromNodeHeaders(object) {\n    const headers = new Headers();\n    for (let [key, value] of Object.entries(object)){\n        const values = Array.isArray(value) ? value : [\n            value\n        ];\n        for (let v of values){\n            if (typeof v === \"undefined\") continue;\n            if (typeof v === \"number\") {\n                v = v.toString();\n            }\n            headers.append(key, v);\n        }\n    }\n    return headers;\n}\nfunction splitCookiesString(cookiesString) {\n    var cookiesStrings = [];\n    var pos = 0;\n    var start;\n    var ch;\n    var lastComma;\n    var nextStart;\n    var cookiesSeparatorFound;\n    function skipWhitespace() {\n        while(pos < cookiesString.length && /\\s/.test(cookiesString.charAt(pos))){\n            pos += 1;\n        }\n        return pos < cookiesString.length;\n    }\n    function notSpecialChar() {\n        ch = cookiesString.charAt(pos);\n        return ch !== \"=\" && ch !== \";\" && ch !== \",\";\n    }\n    while(pos < cookiesString.length){\n        start = pos;\n        cookiesSeparatorFound = false;\n        while(skipWhitespace()){\n            ch = cookiesString.charAt(pos);\n            if (ch === \",\") {\n                // ',' is a cookie separator if we have later first '=', not ';' or ','\n                lastComma = pos;\n                pos += 1;\n                skipWhitespace();\n                nextStart = pos;\n                while(pos < cookiesString.length && notSpecialChar()){\n                    pos += 1;\n                }\n                // currently special character\n                if (pos < cookiesString.length && cookiesString.charAt(pos) === \"=\") {\n                    // we found cookies separator\n                    cookiesSeparatorFound = true;\n                    // pos is inside the next cookie, so back up and return it.\n                    pos = nextStart;\n                    cookiesStrings.push(cookiesString.substring(start, lastComma));\n                    start = pos;\n                } else {\n                    // in param ',' or param separator ';',\n                    // we continue from that comma\n                    pos = lastComma + 1;\n                }\n            } else {\n                pos += 1;\n            }\n        }\n        if (!cookiesSeparatorFound || pos >= cookiesString.length) {\n            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));\n        }\n    }\n    return cookiesStrings;\n}\nfunction toNodeHeaders(headers) {\n    const result = {};\n    const cookies = [];\n    if (headers) {\n        for (const [key, value] of headers.entries()){\n            if (key.toLowerCase() === \"set-cookie\") {\n                // We may have gotten a comma joined string of cookies, or multiple\n                // set-cookie headers. We need to merge them into one header array\n                // to represent all the cookies.\n                cookies.push(...splitCookiesString(value));\n                result[key] = cookies.length === 1 ? cookies[0] : cookies;\n            } else {\n                result[key] = value;\n            }\n        }\n    }\n    return result;\n}\nfunction validateURL(url) {\n    try {\n        return String(new URL(String(url)));\n    } catch (error) {\n        throw new Error(`URL is malformed \"${String(url)}\". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {\n            cause: error\n        });\n    }\n}\n\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvd2ViL3V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUtMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvd2ViL3V0aWxzLmpzP2EwZmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4wICYmIChtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmcm9tTm9kZUhlYWRlcnM6IG51bGwsXG4gICAgc3BsaXRDb29raWVzU3RyaW5nOiBudWxsLFxuICAgIHRvTm9kZUhlYWRlcnM6IG51bGwsXG4gICAgdmFsaWRhdGVVUkw6IG51bGxcbn0pO1xuZnVuY3Rpb24gX2V4cG9ydCh0YXJnZXQsIGFsbCkge1xuICAgIGZvcih2YXIgbmFtZSBpbiBhbGwpT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGFsbFtuYW1lXVxuICAgIH0pO1xufVxuX2V4cG9ydChleHBvcnRzLCB7XG4gICAgZnJvbU5vZGVIZWFkZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZyb21Ob2RlSGVhZGVycztcbiAgICB9LFxuICAgIHNwbGl0Q29va2llc1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBzcGxpdENvb2tpZXNTdHJpbmc7XG4gICAgfSxcbiAgICB0b05vZGVIZWFkZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRvTm9kZUhlYWRlcnM7XG4gICAgfSxcbiAgICB2YWxpZGF0ZVVSTDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZVVSTDtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIGZyb21Ob2RlSGVhZGVycyhvYmplY3QpIHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSl7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCB2IG9mIHZhbHVlcyl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwidW5kZWZpbmVkXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdiA9IHYudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlcnM7XG59XG5mdW5jdGlvbiBzcGxpdENvb2tpZXNTdHJpbmcoY29va2llc1N0cmluZykge1xuICAgIHZhciBjb29raWVzU3RyaW5ncyA9IFtdO1xuICAgIHZhciBwb3MgPSAwO1xuICAgIHZhciBzdGFydDtcbiAgICB2YXIgY2g7XG4gICAgdmFyIGxhc3RDb21tYTtcbiAgICB2YXIgbmV4dFN0YXJ0O1xuICAgIHZhciBjb29raWVzU2VwYXJhdG9yRm91bmQ7XG4gICAgZnVuY3Rpb24gc2tpcFdoaXRlc3BhY2UoKSB7XG4gICAgICAgIHdoaWxlKHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoICYmIC9cXHMvLnRlc3QoY29va2llc1N0cmluZy5jaGFyQXQocG9zKSkpe1xuICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoO1xuICAgIH1cbiAgICBmdW5jdGlvbiBub3RTcGVjaWFsQ2hhcigpIHtcbiAgICAgICAgY2ggPSBjb29raWVzU3RyaW5nLmNoYXJBdChwb3MpO1xuICAgICAgICByZXR1cm4gY2ggIT09IFwiPVwiICYmIGNoICE9PSBcIjtcIiAmJiBjaCAhPT0gXCIsXCI7XG4gICAgfVxuICAgIHdoaWxlKHBvcyA8IGNvb2tpZXNTdHJpbmcubGVuZ3RoKXtcbiAgICAgICAgc3RhcnQgPSBwb3M7XG4gICAgICAgIGNvb2tpZXNTZXBhcmF0b3JGb3VuZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZShza2lwV2hpdGVzcGFjZSgpKXtcbiAgICAgICAgICAgIGNoID0gY29va2llc1N0cmluZy5jaGFyQXQocG9zKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gXCIsXCIpIHtcbiAgICAgICAgICAgICAgICAvLyAnLCcgaXMgYSBjb29raWUgc2VwYXJhdG9yIGlmIHdlIGhhdmUgbGF0ZXIgZmlyc3QgJz0nLCBub3QgJzsnIG9yICcsJ1xuICAgICAgICAgICAgICAgIGxhc3RDb21tYSA9IHBvcztcbiAgICAgICAgICAgICAgICBwb3MgKz0gMTtcbiAgICAgICAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgICAgICAgIG5leHRTdGFydCA9IHBvcztcbiAgICAgICAgICAgICAgICB3aGlsZShwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCAmJiBub3RTcGVjaWFsQ2hhcigpKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRseSBzcGVjaWFsIGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIGlmIChwb3MgPCBjb29raWVzU3RyaW5nLmxlbmd0aCAmJiBjb29raWVzU3RyaW5nLmNoYXJBdChwb3MpID09PSBcIj1cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCBjb29raWVzIHNlcGFyYXRvclxuICAgICAgICAgICAgICAgICAgICBjb29raWVzU2VwYXJhdG9yRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBwb3MgaXMgaW5zaWRlIHRoZSBuZXh0IGNvb2tpZSwgc28gYmFjayB1cCBhbmQgcmV0dXJuIGl0LlxuICAgICAgICAgICAgICAgICAgICBwb3MgPSBuZXh0U3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZXNTdHJpbmdzLnB1c2goY29va2llc1N0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGxhc3RDb21tYSkpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IHBvcztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBwYXJhbSAnLCcgb3IgcGFyYW0gc2VwYXJhdG9yICc7JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY29udGludWUgZnJvbSB0aGF0IGNvbW1hXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IGxhc3RDb21tYSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvb2tpZXNTZXBhcmF0b3JGb3VuZCB8fCBwb3MgPj0gY29va2llc1N0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvb2tpZXNTdHJpbmdzLnB1c2goY29va2llc1N0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGNvb2tpZXNTdHJpbmcubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZXNTdHJpbmdzO1xufVxuZnVuY3Rpb24gdG9Ob2RlSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgY29va2llcyA9IFtdO1xuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGhlYWRlcnMuZW50cmllcygpKXtcbiAgICAgICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJzZXQtY29va2llXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBtYXkgaGF2ZSBnb3R0ZW4gYSBjb21tYSBqb2luZWQgc3RyaW5nIG9mIGNvb2tpZXMsIG9yIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgLy8gc2V0LWNvb2tpZSBoZWFkZXJzLiBXZSBuZWVkIHRvIG1lcmdlIHRoZW0gaW50byBvbmUgaGVhZGVyIGFycmF5XG4gICAgICAgICAgICAgICAgLy8gdG8gcmVwcmVzZW50IGFsbCB0aGUgY29va2llcy5cbiAgICAgICAgICAgICAgICBjb29raWVzLnB1c2goLi4uc3BsaXRDb29raWVzU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjb29raWVzLmxlbmd0aCA9PT0gMSA/IGNvb2tpZXNbMF0gOiBjb29raWVzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVVSTCh1cmwpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG5ldyBVUkwoU3RyaW5nKHVybCkpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVSTCBpcyBtYWxmb3JtZWQgXCIke1N0cmluZyh1cmwpfVwiLiBQbGVhc2UgdXNlIG9ubHkgYWJzb2x1dGUgVVJMcyAtIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL21pZGRsZXdhcmUtcmVsYXRpdmUtdXJsc2AsIHtcbiAgICAgICAgICAgIGNhdXNlOiBlcnJvclxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/server/web/utils.js\n");
=======
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[826],{

/***/ 193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fapple_2FDownloads_2FStayBook_NextJS_Modified_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLyhcXC8_2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FXFwvbG9naW4oLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvbG9naW4ifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlXFwvbXktYm9va2luZ3MoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcHJvZmlsZS9teS1ib29raW5ncyJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGVcXC9wZXJzb25hbC1pbmZvKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUvcGVyc29uYWwtaW5mbyJ9XQ_3D_3D_)
});

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/error.js
class PageSignatureError extends Error {
    constructor({ page  }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
}

//# sourceMappingURL=error.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/utils.js
function fromNodeHeaders(object) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(object)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.
  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.
  
  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/ function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeHeaders(headers) {
    const result = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                result[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}
/**
 * Validate the correctness of a user-provided URL.
 */ function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}

//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js

const responseSymbol = Symbol("response");
const passThroughSymbol = Symbol("passThrough");
const waitUntilSymbol = Symbol("waitUntil");
class FetchEvent {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(_request){
        this[waitUntilSymbol] = [];
        this[passThroughSymbol] = false;
    }
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        this[waitUntilSymbol].push(promise);
    }
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        super(params.request);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}

//# sourceMappingURL=fetch-event.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js

/**
 * Adds the provided prefix to the given path. It first ensures that the path
 * is indeed starting with a slash.
 */ function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js

/**
 * Similarly to `addPathPrefix`, this function adds a suffix at the end on the
 * provided path. It also works only for paths ensuring the argument starts
 * with a slash.
 */ function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = parsePath(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js

/**
 * Checks if a given path starts with a given prefix. It ensures it matches
 * exactly without containing extra chars. e.g. prefix /docs should replace
 * for /docs, /docs/, /docs/a but not /docsss
 * @param path The path to check.
 * @param prefix The prefix to check against.
 */ function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = parsePath(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js


/**
 * For a given path and a locale, if the locale is given, it will prefix the
 * locale. The path shouldn't be an API path. If a default locale is given the
 * prefix will be omitted if the locale is already the default locale.
 */ function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if (pathHasPrefix(lower, "/api")) return path;
        if (pathHasPrefix(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return addPathPrefix(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js




function formatNextPathnameInfo(info) {
    let pathname = addLocale(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = removeTrailingSlash(pathname);
    }
    if (info.buildId) {
        pathname = addPathSuffix(addPathPrefix(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = addPathPrefix(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? addPathSuffix(pathname, "/") : pathname : removeTrailingSlash(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/get-hostname.js
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js

/**
 * Given a path and a prefix it will remove the prefix when it exists in the
 * given path. It ensures it matches exactly without containing extra chars
 * and if the prefix is not there it will be noop.
 *
 * @param path The path to remove the prefix from.
 * @param prefix The prefix to be removed.
 */ function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!pathHasPrefix(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js



function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && pathHasPrefix(info.pathname, basePath)) {
        info.pathname = removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/next-url.js




const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;
        const info = getNextPathnameInfo(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = getHostname(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : detectDomainLocale((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return formatNextPathnameInfo({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}

//# sourceMappingURL=next-url.js.map
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var cookies = __webpack_require__(768);
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/cookies.js


//# sourceMappingURL=cookies.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/request.js




const INTERNALS = Symbol("internal request");
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        validateURL(url);
        super(url, init);
        const nextUrl = new NextURL(url, {
            headers: toNodeHeaders(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new cookies.RequestCookies(this.headers),
            geo: init.geo || {},
            ip: init.ip,
            nextUrl,
            url:  false ? 0 : nextUrl.toString()
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            geo: this.geo,
            ip: this.ip,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get geo() {
        return this[INTERNALS].geo;
    }
    get ip() {
        return this[INTERNALS].ip;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new RemovedPageError();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new RemovedUAError();
    }
    get url() {
        return this[INTERNALS].url;
    }
}

//# sourceMappingURL=request.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/spec-extension/response.js



const response_INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[response_INTERNALS] = {
            cookies: new cookies.ResponseCookies(this.headers),
            url: init.url ? new NextURL(init.url, {
                headers: toNodeHeaders(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[response_INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", validateURL(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", validateURL(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}

//# sourceMappingURL=response.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js
/**
 * Given a URL as a string and a base URL it will make the URL relative
 * if the parsed protocol and host is the same as the one in the base
 * URL. Otherwise it returns the same URL string.
 */ function relativizeURL(url, base) {
    const baseURL = typeof base === "string" ? new URL(base) : base;
    const relative = new URL(url, base);
    const origin = baseURL.protocol + "//" + baseURL.host;
    return relative.protocol + "//" + relative.host === origin ? relative.toString().replace(origin, "") : relative.toString();
} //# sourceMappingURL=relativize-url.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/internal-utils.js
const INTERNAL_QUERY_NAMES = [
    "__nextFallback",
    "__nextLocale",
    "__nextInferredLocaleFromDefault",
    "__nextDefaultLocale",
    "__nextIsNotFound"
];
const EXTENDED_INTERNAL_QUERY_NAMES = [
    "__nextDataReq"
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(searchParams, extended) {
    for (const name of INTERNAL_QUERY_NAMES){
        searchParams.delete(name);
    }
    if (extended) {
        for (const name of EXTENDED_INTERNAL_QUERY_NAMES){
            searchParams.delete(name);
        }
    }
    return searchParams;
}

//# sourceMappingURL=internal-utils.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js

/**
 * Normalizes an app route so it represents the actual request path. Essentially
 * performing the following transformations:
 *
 * - `/(dashboard)/user/[id]/page` to `/user/[id]`
 * - `/(dashboard)/account/page` to `/account`
 * - `/user/[id]/page` to `/user/[id]`
 * - `/account/page` to `/account`
 * - `/page` to `/`
 * - `/(dashboard)/user/[id]/route` to `/user/[id]`
 * - `/(dashboard)/account/route` to `/account`
 * - `/user/[id]/route` to `/user/[id]`
 * - `/account/route` to `/account`
 * - `/route` to `/`
 * - `/` to `/`
 *
 * @param route the app route to normalize
 * @returns the normalized pathname
 */ function normalizeAppPath(route) {
    return ensureLeadingSlash(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (segment.startsWith("(") && segment.endsWith(")")) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment.startsWith("@")) {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
/**
 * Strips the `.rsc` extension if it's in the pathname.
 * Since this function is used on full urls it checks `?` for searchParams handling.
 */ function normalizeRscPath(pathname, enabled) {
    return enabled ? pathname.replace(/\.rsc($|\?)/, "$1") : pathname;
} //# sourceMappingURL=app-paths.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/client/components/app-router-headers.js
const RSC = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const RSC_VARY_HEADER = RSC + ", " + NEXT_ROUTER_STATE_TREE + ", " + NEXT_ROUTER_PREFETCH;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
]; //# sourceMappingURL=app-router-headers.js.map

;// CONCATENATED MODULE: ./node_modules/next/dist/esm/lib/constants.js
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
// in seconds
const CACHE_ONE_YEAR = 31536000;
// Patterns to detect middleware files
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
// Pattern to detect instrumentation hooks file
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const INSTRUMENTATION_HOOKS_LOCATION_REGEXP = `(?:src/)?${INSTRUMENTATION_HOOK_FILENAME}`;
// Because on Windows absolute paths in the generated code can break because of numbers, eg 1 in the path,
// we have to use a private alias
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = (/* unused pure expression or super */ null && (`You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`));
const SSG_GET_INITIAL_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`));
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`));
const SERVER_PROPS_SSG_CONFLICT = (/* unused pure expression or super */ null && (`You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`));
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = (/* unused pure expression or super */ null && (`can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`));
const SERVER_PROPS_EXPORT_ERROR = (/* unused pure expression or super */ null && (`pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`));
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = (/* unused pure expression or super */ null && ("The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead."));
const GSSP_COMPONENT_MEMBER_ERROR = (/* unused pure expression or super */ null && (`can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`));
const NON_STANDARD_NODE_ENV = (/* unused pure expression or super */ null && (`You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`));
const SSG_FALLBACK_EXPORT_ERROR = (/* unused pure expression or super */ null && (`Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`));
// Consolidate this consts when the `appDir` will be stable.
const ESLINT_DEFAULT_DIRS = [
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_DEFAULT_DIRS_WITH_APP = [
    "app",
    ...ESLINT_DEFAULT_DIRS
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
const WEBPACK_LAYERS = {
    shared: "sc_shared",
    server: "sc_server",
    client: "sc_client",
    action: "sc_action",
    api: "api",
    middleware: "middleware",
    edgeAsset: "edge-asset",
    appClient: "app-client"
};

//# sourceMappingURL=constants.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/esm/server/web/adapter.js












class NextRequestHint extends NextRequest {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    respondWith() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
    waitUntil() {
        throw new PageSignatureError({
            page: this.sourcePage
        });
    }
}
const adapter_FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ],
    [
        FETCH_CACHE_HEADER
    ]
];
async function registerInstrumentation() {
    if ("_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && _ENTRIES.middleware_instrumentation.register) {
        try {
            await _ENTRIES.middleware_instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
async function adapter(params) {
    await ensureInstrumentationRegistered();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof self.__BUILD_MANIFEST !== "undefined";
    params.request.url = normalizeRscPath(params.request.url, true);
    const requestUrl = new NextURL(params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    for (const key of requestUrl.searchParams.keys()){
        const value = requestUrl.searchParams.getAll(key);
        if (key !== NEXT_QUERY_PARAM_PREFIX && key.startsWith(NEXT_QUERY_PARAM_PREFIX)) {
            const normalizedKey = key.substring(NEXT_QUERY_PARAM_PREFIX.length);
            requestUrl.searchParams.delete(normalizedKey);
            for (const val of value){
                requestUrl.searchParams.append(normalizedKey, val);
            }
            requestUrl.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    const buildId = requestUrl.buildId;
    requestUrl.buildId = "";
    const isDataReq = params.request.headers["x-nextjs-data"];
    if (isDataReq && requestUrl.pathname === "/index") {
        requestUrl.pathname = "/";
    }
    const requestHeaders = fromNodeHeaders(params.request.headers);
    const flightHeaders = new Map();
    // Parameters should only be stripped for middleware
    if (!isEdgeRendering) {
        for (const param of adapter_FLIGHT_PARAMETERS){
            const key = param.toString().toLowerCase();
            const value = requestHeaders.get(key);
            if (value) {
                flightHeaders.set(key, requestHeaders.get(key));
                requestHeaders.delete(key);
            }
        }
    }
    // Strip internal query parameters off the request.
    stripInternalSearchParams(requestUrl.searchParams, true);
    const request = new NextRequestHint({
        page: params.page,
        input:  false ? 0 : String(requestUrl),
        init: {
            body: params.request.body,
            geo: params.request.geo,
            headers: requestHeaders,
            ip: params.request.ip,
            method: params.request.method,
            nextConfig: params.request.nextConfig
        }
    });
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isDataReq) {
        Object.defineProperty(request, "__isData", {
            enumerable: false,
            value: true
        });
    }
    if (!globalThis.__incrementalCache && params.IncrementalCache) {
        globalThis.__incrementalCache = new params.IncrementalCache({
            appDir: true,
            fetchCache: true,
            minimalMode: true,
            fetchCacheKeyPrefix: undefined,
            dev: "production" === "development",
            requestHeaders: params.request.headers,
            requestProtocol: "https",
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: {
                        previewModeId: "development-id"
                    }
                };
            }
        });
    }
    const event = new NextFetchEvent({
        request,
        page: params.page
    });
    let response = await params.handler(request, event);
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw new TypeError("Expected an instance of Response to be returned");
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get("x-middleware-rewrite");
    if (response && rewrite) {
        const rewriteUrl = new NextURL(rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (true) {
            if (rewriteUrl.host === request.nextUrl.host) {
                rewriteUrl.buildId = buildId || rewriteUrl.buildId;
                response.headers.set("x-middleware-rewrite", String(rewriteUrl));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const relativizedRewrite = relativizeURL(String(rewriteUrl), String(requestUrl));
        if (isDataReq && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(undefined && 0)) {
            response.headers.set("x-nextjs-rewrite", relativizedRewrite);
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get("Location");
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new NextURL(redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if (true) {
            if (redirectURL.host === request.nextUrl.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set("Location", String(redirectURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isDataReq) {
            response.headers.delete("Location");
            response.headers.set("x-nextjs-redirect", relativizeURL(String(redirectURL), String(requestUrl)));
        }
    }
    const finalResponse = response ? response : NextResponse.next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get("x-middleware-override-headers");
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set("x-middleware-override-headers", middlewareOverrideHeaders + "," + overwrittenHeaders.join(","));
        }
    }
    return {
        response: finalResponse,
        waitUntil: Promise.all(event[waitUntilSymbol])
    };
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how react-dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === "then") {
                return {};
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        construct () {
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        },
        apply (_target, _this, args) {
            if (typeof args[0] === "function") {
                return args[0](proxy);
            }
            throw new Error(getUnsupportedModuleErrorMessage(moduleName));
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    // The condition is true when the "process" module is provided
    if (process !== __webpack_require__.g.process) {
        // prefer local process but global.process has correct "env"
        process.env = __webpack_require__.g.process.env;
        __webpack_require__.g.process = process;
    }
    // to allow building code that import but does not use node.js modules,
    // webpack will expect this function to exist in global scope
    Object.defineProperty(globalThis, "__import_unsupported", {
        value: __import_unsupported,
        enumerable: false,
        configurable: false
    });
    // Eagerly fire instrumentation hook to make the startup faster.
    void ensureInstrumentationRegistered();
}

//# sourceMappingURL=adapter.js.map
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=private-next-root-dir%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fapple%2FDownloads%2FStayBook-NextJS-Modified&matchers=W3sicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg%2FOlxcLyhcXC8%2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk%2FXFwvbG9naW4oLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvbG9naW4ifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlXFwvbXktYm9va2luZ3MoLmpzb24pP1tcXC8jXFw%2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcHJvZmlsZS9teS1ib29raW5ncyJ9LHsicmVnZXhwIjoiXig%2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGVcXC9wZXJzb25hbC1pbmZvKC5qc29uKT9bXFwvI1xcP10%2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUvcGVyc29uYWwtaW5mbyJ9XQ%3D%3D!

        

        enhanceGlobals()

        var mod = __webpack_require__(551)
        var handler = mod.middleware || mod.default;

        if (typeof handler !== 'function') {
          throw new Error('The Middleware "pages/middleware" must export a `middleware` or a `default` function');
        }

        /* harmony default export */ function next_middleware_loaderabsolutePagePath_private_next_root_dir_2Fmiddleware_ts_page_2Fmiddleware_rootDir_2FUsers_2Fapple_2FDownloads_2FStayBook_NextJS_Modified_matchers_W3sicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpPyg_2FOlxcLyhcXC8_2FaW5kZXh8XFwvP2luZGV4XFwuanNvbikpP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvIn0seyJyZWdleHAiOiJeKD86XFwvKF9uZXh0XFwvZGF0YVxcL1teL117MSx9KSk_2FXFwvbG9naW4oLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvbG9naW4ifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUifSx7InJlZ2V4cCI6Il4oPzpcXC8oX25leHRcXC9kYXRhXFwvW14vXXsxLH0pKT9cXC9wcm9maWxlXFwvbXktYm9va2luZ3MoLmpzb24pP1tcXC8jXFw_2FXT8kIiwib3JpZ2luYWxTb3VyY2UiOiIvcHJvZmlsZS9teS1ib29raW5ncyJ9LHsicmVnZXhwIjoiXig_2FOlxcLyhfbmV4dFxcL2RhdGFcXC9bXi9dezEsfSkpP1xcL3Byb2ZpbGVcXC9wZXJzb25hbC1pbmZvKC5qc29uKT9bXFwvI1xcP10_2FJCIsIm9yaWdpbmFsU291cmNlIjoiL3Byb2ZpbGUvcGVyc29uYWwtaW5mbyJ9XQ_3D_3D_(opts) {
          return adapter({
              ...opts,
              page: "/middleware",
              handler,
          })
        }
    

/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "middleware": () => (/* binding */ middleware)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(458);
;// CONCATENATED MODULE: ./node_modules/jwt-decode/build/jwt-decode.esm.js
function e(e){this.message=e}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";/* harmony default export */ const jwt_decode_esm = ((/* unused pure expression or super */ null && (o)));
//# sourceMappingURL=jwt-decode.esm.js.map

;// CONCATENATED MODULE: ./lib/helper/index.ts

// User Authentication Constants
const EMAIL_SIGNUP = "email-sign-up";
const EMAIL_LOGIN = "email-log-in";
const GOOGLE_SIGNUP = "google-sign-up";
const GOOGLE_LOGIN = "google-log-in";
const USER_ACCESS_TOKEN = "user-access-token";
const USER_COLLECTION_NAME = "USER-PERSONAL-INFORMATION";
const COOKIE_EXPIRATOIN_TIME = (/* unused pure expression or super */ null && (30 * 24 * 60 * 60));
const GET_USER_TOKEN_OBJECT = "get-user-token-obj";
const USER_UPDATE_TYPE_NAME = "update-user-name";
// Booking Hotels Constants
const HOTEL_BOOKINGS_COLLECTION_NAME = "HOTEL-BOOKINGS-INFORMATION";
const BOOKED_ROOMS_COLLECTION_NAME = "HOTEL-BOOKINGS";
const USER_BOOKINGS_COLLECTION_NAME = "USER-BOOKINGS-INFORMATION";
const HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME = "BOOKED-ROOMS-INFORMATION";
// Price Planner Constants
const HOTEL_OWNERS_COLLECTION_NAME = "HOTEL-PRICE-PLANNER-INFORMATION";
const AFFILIATED_COLLECTION_NAME = "AFFLIATED-HOTELS";
const HOTEL_ROOMS_COLLECTION_NAME = "HOTEL-ROOMS";
const ROOM_PLANS_COLLECTION_NAME = "ROOM-PLANS";
const ROOM_PRICE_PLANNER_COLLECTION_NAME = "ROOM-PRICE-PLANNER";
const MONTH_NAME_LIST = (/* unused pure expression or super */ null && ([
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
]));
function addDays(startDate, numberOfDays) {
    const result = new Date(startDate);
    result.setDate(result.getDate() + numberOfDays);
    return result;
}
function getDateDifference(checkInDate, checkOutDate) {
    var timeDiff = new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    return Math.floor(dayDiff);
}
async function getErrorMessage(errorValue) {
    if (errorValue === "auth/wrong-password") {
        return "Wrong combination of the credentials!";
    } else if (errorValue === "auth/email-already-in-use") {
        return "Email already is in use!";
    } else {
        return errorValue;
    }
}
const extractJWTValues = async (token)=>{
    try {
        const decodedValue = await jwt_decode(token);
        return decodedValue;
    } catch (error) {
        return null;
    }
};
const unixToDate = async (timeStamp)=>{
    const dateObj = new Date(Number(timeStamp) * 1000);
    return dateObj;
};

;// CONCATENATED MODULE: ./middleware.ts


function middleware(req, res) {
    const response = next_response/* default.next */.Z.next();
    const userAccessToken = req.cookies.get(USER_ACCESS_TOKEN);
    console.log(req.url);
    // console.log(userAccessToken);
    if (req.nextUrl.pathname.startsWith("/login") && userAccessToken) {
        return next_response/* default.redirect */.Z.redirect(new URL("/profile", req.url));
    }
    if (req.nextUrl.pathname.startsWith("/profile") && !userAccessToken) {
        return next_response/* default.redirect */.Z.redirect(new URL("/login", req.url));
    }
    //   console.log("Request: ", req.nextUrl.pathname);
    //   const cookie = req.cookies.get("user-access-token");
    //   console.log("Cookie: ", cookie);
    //   const cookieValue = req.cookies.get("user-auth-cookie")?.valueOf();
    //   const allCookies = req.cookies;
    //   const isCookieExists = req.cookies.has("user-auth-cookie");
    //   const deleteCookie = req.cookies.delete("user-auth-cookie");
    /////////////////////////////////////////
    //   if (req.cookies.has("user-auth-cookie")) {
    //     const url = req.nextUrl.clone();
    //     url.pathname = "/profile/user";
    //     return NextResponse.rewrite(url);
    //   }
    // if (req.cookies.has("user-auth-cookie")) {
    //     return NextResponse.rewrite(new URL('/profile/user', req.nextUrl));
    // }
    return response;
}
const config = {
    matcher: [
        "/",
        "/login",
        "/profile",
        "/profile/my-bookings",
        "/profile/personal-info"
    ]
};


/***/ }),

/***/ 893:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getHostname", ({
    enumerable: true,
    get: function() {
        return getHostname;
    }
}));
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":")[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map


/***/ }),

/***/ 815:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "detectDomainLocale", ({
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
}));
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":")[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 178:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeLocalePath", ({
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
}));
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map


/***/ }),

/***/ 520:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _addpathprefix = __webpack_require__(759);
const _pathhasprefix = __webpack_require__(51);
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 759:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathPrefix", ({
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
}));
const _parsepath = __webpack_require__(200);
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map


/***/ }),

/***/ 15:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addPathSuffix", ({
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
}));
const _parsepath = __webpack_require__(200);
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map


/***/ }),

/***/ 918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "formatNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
}));
const _removetrailingslash = __webpack_require__(539);
const _addpathprefix = __webpack_require__(759);
const _addpathsuffix = __webpack_require__(15);
const _addlocale = __webpack_require__(520);
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map


/***/ }),

/***/ 482:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getNextPathnameInfo", ({
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
}));
const _normalizelocalepath = __webpack_require__(178);
const _removepathprefix = __webpack_require__(612);
const _pathhasprefix = __webpack_require__(51);
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath , i18n , trailingSlash  } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname: pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        info.buildId = buildId;
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (options.i18nProvider) {
        const result = options.i18nProvider.analyze(info.pathname);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
    } else if (i18n) {
        const pathLocale = (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = pathLocale.detectedLocale;
        var _pathLocale_pathname;
        info.pathname = (_pathLocale_pathname = pathLocale.pathname) != null ? _pathLocale_pathname : info.pathname;
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map


/***/ }),

/***/ 200:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "parsePath", ({
    enumerable: true,
    get: function() {
        return parsePath;
    }
}));
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map


/***/ }),

/***/ 51:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pathHasPrefix", ({
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
}));
const _parsepath = __webpack_require__(200);
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname  } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map


/***/ }),

/***/ 612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removePathPrefix", ({
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
}));
const _pathhasprefix = __webpack_require__(51);
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map


/***/ }),

/***/ 539:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "removeTrailingSlash", ({
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
}));
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map


/***/ }),

/***/ 768:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RequestCookies: () => RequestCookies,
  ResponseCookies: () => ResponseCookies
});
module.exports = __toCommonJS(src_exports);

// src/serialize.ts
function serialize(c) {
  const attrs = [
    "path" in c && c.path && `Path=${c.path}`,
    "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
    "maxAge" in c && c.maxAge && `Max-Age=${c.maxAge}`,
    "domain" in c && c.domain && `Domain=${c.domain}`,
    "secure" in c && c.secure && "Secure",
    "httpOnly" in c && c.httpOnly && "HttpOnly",
    "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`
  ].filter(Boolean);
  return `${c.name}=${encodeURIComponent(c.value ?? "")}; ${attrs.join("; ")}`;
}
function parseCookieString(cookie) {
  const map = /* @__PURE__ */ new Map();
  for (const pair of cookie.split(/; */)) {
    if (!pair)
      continue;
    const splitAt = pair.indexOf("=");
    const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
    try {
      map.set(key, decodeURIComponent(value ?? "true"));
    } catch {
    }
  }
  return map;
}
function parseSetCookieString(setCookie) {
  if (!setCookie) {
    return void 0;
  }
  const [[name, value], ...attributes] = parseCookieString(setCookie);
  const { domain, expires, httponly, maxage, path, samesite, secure } = Object.fromEntries(
    attributes.map(([key, value2]) => [key.toLowerCase(), value2])
  );
  const cookie = {
    name,
    value: decodeURIComponent(value),
    domain,
    ...expires && { expires: new Date(expires) },
    ...httponly && { httpOnly: true },
    ...typeof maxage === "string" && { maxAge: Number(maxage) },
    path,
    ...samesite && { sameSite: parseSameSite(samesite) },
    ...secure && { secure: true }
  };
  return compact(cookie);
}
function compact(t) {
  const newT = {};
  for (const key in t) {
    if (t[key]) {
      newT[key] = t[key];
    }
  }
  return newT;
}
var SAME_SITE = ["strict", "lax", "none"];
function parseSameSite(string) {
  string = string.toLowerCase();
  return SAME_SITE.includes(string) ? string : void 0;
}

// src/request-cookies.ts
var RequestCookies = class {
  constructor(requestHeaders) {
    this._parsed = /* @__PURE__ */ new Map();
    this._headers = requestHeaders;
    const header = requestHeaders.get("cookie");
    if (header) {
      const parsed = parseCookieString(header);
      for (const [name, value] of parsed) {
        this._parsed.set(name, { name, value });
      }
    }
  }
  [Symbol.iterator]() {
    return this._parsed[Symbol.iterator]();
  }
  get size() {
    return this._parsed.size;
  }
  get(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(name);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed);
    if (!args.length) {
      return all.map(([_, value]) => value);
    }
    const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter(([n]) => n === name).map(([_, value]) => value);
  }
  has(name) {
    return this._parsed.has(name);
  }
  set(...args) {
    const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
    const map = this._parsed;
    map.set(name, { name, value });
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value2]) => serialize(value2)).join("; ")
    );
    return this;
  }
  delete(names) {
    const map = this._parsed;
    const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
    this._headers.set(
      "cookie",
      Array.from(map).map(([_, value]) => serialize(value)).join("; ")
    );
    return result;
  }
  clear() {
    this.delete(Array.from(this._parsed.keys()));
    return this;
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
  }
};

// src/response-cookies.ts
var ResponseCookies = class {
  constructor(responseHeaders) {
    this._parsed = /* @__PURE__ */ new Map();
    var _a;
    this._headers = responseHeaders;
    const setCookie = ((_a = responseHeaders.getAll) == null ? void 0 : _a.call(responseHeaders, "set-cookie")) ?? responseHeaders.get("set-cookie") ?? [];
    const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
    for (const cookieString of cookieStrings) {
      const parsed = parseSetCookieString(cookieString);
      if (parsed)
        this._parsed.set(parsed.name, parsed);
    }
  }
  get(...args) {
    const key = typeof args[0] === "string" ? args[0] : args[0].name;
    return this._parsed.get(key);
  }
  getAll(...args) {
    var _a;
    const all = Array.from(this._parsed.values());
    if (!args.length) {
      return all;
    }
    const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
    return all.filter((c) => c.name === key);
  }
  set(...args) {
    const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
    const map = this._parsed;
    map.set(name, normalizeCookie({ name, value, ...cookie }));
    replace(map, this._headers);
    return this;
  }
  delete(...args) {
    const name = typeof args[0] === "string" ? args[0] : args[0].name;
    return this.set({ name, value: "", expires: new Date(0) });
  }
  [Symbol.for("edge-runtime.inspect.custom")]() {
    return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
  }
  toString() {
    return [...this._parsed.values()].map(serialize).join("; ");
  }
};
function replace(bag, headers) {
  headers.delete("set-cookie");
  for (const [, value] of bag) {
    const serialized = serialize(value);
    headers.append("set-cookie", serialized);
  }
}
function normalizeCookie(cookie = { name: "", value: "" }) {
  if (typeof cookie.expires === "number") {
    cookie.expires = new Date(cookie.expires);
  }
  if (cookie.maxAge) {
    cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
  }
  if (cookie.path === null || cookie.path === void 0) {
    cookie.path = "/";
  }
  return cookie;
}
function splitCookiesString(cookiesString) {
  if (!cookiesString)
    return [];
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (0);


/***/ }),

/***/ 458:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(57);

//# sourceMappingURL=next-response.js.map

/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextURL", ({
    enumerable: true,
    get: function() {
        return NextURL;
    }
}));
const _detectdomainlocale = __webpack_require__(815);
const _formatnextpathnameinfo = __webpack_require__(918);
const _gethostname = __webpack_require__(893);
const _getnextpathnameinfo = __webpack_require__(482);
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n, _this_Internal_domainLocale, _this_Internal_options_nextConfig1, _this_Internal_options_nextConfig_i18n1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !undefined,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig, _this_Internal_options_nextConfig_i18n;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}

//# sourceMappingURL=next-url.js.map

/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && 0;
_export_star(__webpack_require__(768), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=cookies.js.map

/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "NextResponse", ({
    enumerable: true,
    get: function() {
        return NextResponse;
    }
}));
const _nexturl = __webpack_require__(961);
const _utils = __webpack_require__(625);
const _cookies = __webpack_require__(993);
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies.ResponseCookies(this.headers),
            url: init.url ? new _nexturl.NextURL(init.url, {
                headers: (0, _utils.toNodeHeaders)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        // @ts-expect-error This is not in lib/dom right now, and we can't augment it.
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils.validateURL)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 625:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromNodeHeaders: function() {
        return fromNodeHeaders;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeHeaders: function() {
        return toNodeHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
function fromNodeHeaders(object) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(object)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeHeaders(headers) {
    const result = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                result[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}

//# sourceMappingURL=utils.js.map
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
/******/ var __webpack_exports__ = (__webpack_exec__("(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified%2Fmiddleware.ts&page=%2Fmiddleware&rootDir=%2FUsers%2Fmymac%2FDesktop%2Fstaybook%2Fstaybook-modified%2Fstaybook-modified&matchers=!"));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
=======
/******/ var __webpack_exports__ = (__webpack_exec__(193));
/******/ (_ENTRIES = typeof _ENTRIES === "undefined" ? {} : _ENTRIES).middleware_middleware = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=middleware.js.map
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
