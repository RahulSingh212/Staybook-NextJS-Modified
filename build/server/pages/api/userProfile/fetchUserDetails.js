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
exports.id = "pages/api/userProfile/fetchUserDetails";
exports.ids = ["pages/api/userProfile/fetchUserDetails"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
=======
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 4802:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

<<<<<<< HEAD
/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
=======
/***/ 5567:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

<<<<<<< HEAD
/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
=======
/***/ 3745:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

<<<<<<< HEAD
/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
=======
/***/ 401:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

<<<<<<< HEAD
/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
=======
/***/ 1492:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

<<<<<<< HEAD
/***/ "(api)/./lib/firebase/index.ts":
/*!*******************************!*\
  !*** ./lib/firebase/index.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"googleAuthProvider\": () => (/* binding */ googleAuthProvider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyD3MjpR_Ta6LRfoMOaoX-b-kTlVHuiuHtw\",\n    authDomain: \"staybook-de712.firebaseapp.com\",\n    databaseURL: \"https://staybook-de712-default-rtdb.firebaseio.com\",\n    projectId: \"staybook-de712\",\n    storageBucket: \"staybook-de712.appspot.com\",\n    messagingSenderId: \"946000733513\",\n    appId: \"1:946000733513:web:662ce04b970b3d8eb66698\",\n    measurementId: \"G-V29JV44EFX\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZmlyZWJhc2UvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ0c7QUFDbUI7QUFDM0I7QUFFbEQsTUFBTUksaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsYUFBYTtJQUNiQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0lBQ1BDLGVBQWU7QUFDakI7QUFFQSxzQkFBc0I7QUFDdEIsTUFBTUMsTUFBTWIsMkRBQWFBLENBQUNJO0FBQ25CLE1BQU1VLE9BQU9iLHNEQUFPQSxDQUFDWSxLQUFLO0FBQzFCLE1BQU1FLEtBQUtaLGdFQUFZQSxDQUFDVSxLQUFLO0FBQzdCLE1BQU1HLHFCQUFxQixJQUFJZCw2REFBa0JBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGF5Ym9vay1tb2RpZmllZC8uL2xpYi9maXJlYmFzZS9pbmRleC50cz82MjZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAsIEZpcmViYXNlQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgR29vZ2xlQXV0aFByb3ZpZGVyLCBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUQzTWpwUl9UYTZMUmZvTU9hb1gtYi1rVGxWSHVpdUh0d1wiLFxuICBhdXRoRG9tYWluOiBcInN0YXlib29rLWRlNzEyLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3N0YXlib29rLWRlNzEyLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwic3RheWJvb2stZGU3MTJcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzdGF5Ym9vay1kZTcxMi5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5NDYwMDA3MzM1MTNcIixcbiAgYXBwSWQ6IFwiMTo5NDYwMDA3MzM1MTM6d2ViOjY2MmNlMDRiOTcwYjNkOGViNjY2OThcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLVYyOUpWNDRFRlhcIixcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbmV4cG9ydCBjb25zdCBnb29nbGVBdXRoUHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwiZGIiLCJnb29nbGVBdXRoUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/firebase/index.ts\n");

/***/ }),

/***/ "(api)/./lib/helper/index.ts":
/*!*****************************!*\
  !*** ./lib/helper/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AFFILIATED_COLLECTION_NAME\": () => (/* binding */ AFFILIATED_COLLECTION_NAME),\n/* harmony export */   \"BOOKED_ROOMS_COLLECTION_NAME\": () => (/* binding */ BOOKED_ROOMS_COLLECTION_NAME),\n/* harmony export */   \"COOKIE_EXPIRATOIN_TIME\": () => (/* binding */ COOKIE_EXPIRATOIN_TIME),\n/* harmony export */   \"EMAIL_LOGIN\": () => (/* binding */ EMAIL_LOGIN),\n/* harmony export */   \"EMAIL_SIGNUP\": () => (/* binding */ EMAIL_SIGNUP),\n/* harmony export */   \"GET_USER_TOKEN_OBJECT\": () => (/* binding */ GET_USER_TOKEN_OBJECT),\n/* harmony export */   \"GOOGLE_LOGIN\": () => (/* binding */ GOOGLE_LOGIN),\n/* harmony export */   \"GOOGLE_SIGNUP\": () => (/* binding */ GOOGLE_SIGNUP),\n/* harmony export */   \"HOTEL_BOOKINGS_COLLECTION_NAME\": () => (/* binding */ HOTEL_BOOKINGS_COLLECTION_NAME),\n/* harmony export */   \"HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME\": () => (/* binding */ HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME),\n/* harmony export */   \"HOTEL_OWNERS_COLLECTION_NAME\": () => (/* binding */ HOTEL_OWNERS_COLLECTION_NAME),\n/* harmony export */   \"HOTEL_ROOMS_COLLECTION_NAME\": () => (/* binding */ HOTEL_ROOMS_COLLECTION_NAME),\n/* harmony export */   \"MONTH_NAME_LIST\": () => (/* binding */ MONTH_NAME_LIST),\n/* harmony export */   \"ROOM_PLANS_COLLECTION_NAME\": () => (/* binding */ ROOM_PLANS_COLLECTION_NAME),\n/* harmony export */   \"ROOM_PRICE_PLANNER_COLLECTION_NAME\": () => (/* binding */ ROOM_PRICE_PLANNER_COLLECTION_NAME),\n/* harmony export */   \"USER_ACCESS_TOKEN\": () => (/* binding */ USER_ACCESS_TOKEN),\n/* harmony export */   \"USER_BOOKINGS_COLLECTION_NAME\": () => (/* binding */ USER_BOOKINGS_COLLECTION_NAME),\n/* harmony export */   \"USER_COLLECTION_NAME\": () => (/* binding */ USER_COLLECTION_NAME),\n/* harmony export */   \"USER_UPDATE_TYPE_NAME\": () => (/* binding */ USER_UPDATE_TYPE_NAME),\n/* harmony export */   \"addDays\": () => (/* binding */ addDays),\n/* harmony export */   \"extractJWTValues\": () => (/* binding */ extractJWTValues),\n/* harmony export */   \"getDateDifference\": () => (/* binding */ getDateDifference),\n/* harmony export */   \"getErrorMessage\": () => (/* binding */ getErrorMessage),\n/* harmony export */   \"unixToDate\": () => (/* binding */ unixToDate)\n/* harmony export */ });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);\n\n// User Authentication Constants\nconst EMAIL_SIGNUP = \"email-sign-up\";\nconst EMAIL_LOGIN = \"email-log-in\";\nconst GOOGLE_SIGNUP = \"google-sign-up\";\nconst GOOGLE_LOGIN = \"google-log-in\";\nconst USER_ACCESS_TOKEN = \"user-access-token\";\nconst USER_COLLECTION_NAME = \"USER-PERSONAL-INFORMATION\";\nconst COOKIE_EXPIRATOIN_TIME = 30 * 24 * 60 * 60;\nconst GET_USER_TOKEN_OBJECT = \"get-user-token-obj\";\nconst USER_UPDATE_TYPE_NAME = \"update-user-name\";\n// Booking Hotels Constants\nconst HOTEL_BOOKINGS_COLLECTION_NAME = \"HOTEL-BOOKINGS-INFORMATION\";\nconst BOOKED_ROOMS_COLLECTION_NAME = \"HOTEL-BOOKINGS\";\nconst USER_BOOKINGS_COLLECTION_NAME = \"USER-BOOKINGS-INFORMATION\";\nconst HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME = \"BOOKED-ROOMS-INFORMATION\";\n// Price Planner Constants\nconst HOTEL_OWNERS_COLLECTION_NAME = \"HOTEL-PRICE-PLANNER-INFORMATION\";\nconst AFFILIATED_COLLECTION_NAME = \"AFFLIATED-HOTELS\";\nconst HOTEL_ROOMS_COLLECTION_NAME = \"HOTEL-ROOMS\";\nconst ROOM_PLANS_COLLECTION_NAME = \"ROOM-PLANS\";\nconst ROOM_PRICE_PLANNER_COLLECTION_NAME = \"ROOM-PRICE-PLANNER\";\nconst MONTH_NAME_LIST = [\n    \"JANUARY\",\n    \"FEBRUARY\",\n    \"MARCH\",\n    \"APRIL\",\n    \"MAY\",\n    \"JUNE\",\n    \"JULY\",\n    \"AUGUST\",\n    \"SEPTEMBER\",\n    \"OCTOBER\",\n    \"NOVEMBER\",\n    \"DECEMBER\"\n];\nfunction addDays(startDate, numberOfDays) {\n    const result = new Date(startDate);\n    result.setDate(result.getDate() + numberOfDays);\n    return result;\n}\nfunction getDateDifference(checkInDate, checkOutDate) {\n    var timeDiff = new Date(checkOutDate).getTime() - new Date(checkInDate).getTime();\n    var dayDiff = timeDiff / (1000 * 3600 * 24);\n    return Math.floor(dayDiff);\n}\nasync function getErrorMessage(errorValue) {\n    if (errorValue === \"auth/wrong-password\") {\n        return \"Wrong combination of the credentials!\";\n    } else if (errorValue === \"auth/email-already-in-use\") {\n        return \"Email already is in use!\";\n    } else {\n        return errorValue;\n    }\n}\nconst extractJWTValues = async (token)=>{\n    try {\n        const decodedValue = await jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);\n        return decodedValue;\n    } catch (error) {\n        return null;\n    }\n};\nconst unixToDate = async (timeStamp)=>{\n    const dateObj = new Date(Number(timeStamp) * 1000);\n    return dateObj;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvaGVscGVyL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBRXBDLGdDQUFnQztBQUN6QixNQUFNQyxlQUFlLGdCQUFnQjtBQUNyQyxNQUFNQyxjQUFjLGVBQWU7QUFDbkMsTUFBTUMsZ0JBQWdCLGlCQUFpQjtBQUN2QyxNQUFNQyxlQUFlLGdCQUFnQjtBQUNyQyxNQUFNQyxvQkFBb0Isb0JBQW9CO0FBQzlDLE1BQU1DLHVCQUF1Qiw0QkFBNEI7QUFDekQsTUFBTUMseUJBQXlCLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDakQsTUFBTUMsd0JBQXdCLHFCQUFxQjtBQUNuRCxNQUFNQyx3QkFBd0IsbUJBQW1CO0FBRXhELDJCQUEyQjtBQUNwQixNQUFNQyxpQ0FBaUMsNkJBQTZCO0FBQ3BFLE1BQU1DLCtCQUErQixpQkFBaUI7QUFDdEQsTUFBTUMsZ0NBQWdDLDRCQUE0QjtBQUNsRSxNQUFNQyx1Q0FBdUMsMkJBQTJCO0FBRy9FLDBCQUEwQjtBQUNuQixNQUFNQywrQkFBK0Isa0NBQWtDO0FBQ3ZFLE1BQU1DLDZCQUE2QixtQkFBbUI7QUFDdEQsTUFBTUMsOEJBQThCLGNBQWM7QUFDbEQsTUFBTUMsNkJBQTZCLGFBQWE7QUFDaEQsTUFBTUMscUNBQXFDLHFCQUFxQjtBQUVoRSxNQUFNQyxrQkFBa0I7SUFDN0I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUVLLFNBQVNDLFFBQ2RDLFNBQWlDLEVBQ2pDQyxZQUFvQixFQUNwQjtJQUNBLE1BQU1DLFNBQVMsSUFBSUMsS0FBS0g7SUFDeEJFLE9BQU9FLE9BQU8sQ0FBQ0YsT0FBT0csT0FBTyxLQUFLSjtJQUNsQyxPQUFPQztBQUNULENBQUM7QUFFTSxTQUFTSSxrQkFDZEMsV0FBbUMsRUFDbkNDLFlBQW9DLEVBQ3BDO0lBQ0EsSUFBSUMsV0FDRixJQUFJTixLQUFLSyxjQUFjRSxPQUFPLEtBQUssSUFBSVAsS0FBS0ksYUFBYUcsT0FBTztJQUNsRSxJQUFJQyxVQUFVRixXQUFZLFFBQU8sT0FBTyxFQUFDO0lBRXpDLE9BQU9HLEtBQUtDLEtBQUssQ0FBQ0Y7QUFDcEIsQ0FBQztBQUVNLGVBQWVHLGdCQUFnQkMsVUFBa0IsRUFBRTtJQUN4RCxJQUFJQSxlQUFlLHVCQUF1QjtRQUN4QyxPQUFPO0lBQ1QsT0FBTyxJQUFJQSxlQUFlLDZCQUE2QjtRQUNyRCxPQUFPO0lBQ1QsT0FBTztRQUNMLE9BQU9BO0lBQ1QsQ0FBQztBQUNILENBQUM7QUFFTSxNQUFNQyxtQkFBbUIsT0FBT0MsUUFBZTtJQUNwRCxJQUFJO1FBQ0YsTUFBTUMsZUFBZSxNQUFNdkMsaURBQVVBLENBQUNzQztRQUN0QyxPQUFPQztJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU8sSUFBSTtJQUNiO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLGFBQWEsT0FBT0MsWUFBbUI7SUFDbEQsTUFBTUMsVUFBVSxJQUFJbkIsS0FBS29CLE9BQU9GLGFBQWE7SUFDN0MsT0FBT0M7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheWJvb2stbW9kaWZpZWQvLi9saWIvaGVscGVyL2luZGV4LnRzPzZhZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcblxuLy8gVXNlciBBdXRoZW50aWNhdGlvbiBDb25zdGFudHNcbmV4cG9ydCBjb25zdCBFTUFJTF9TSUdOVVAgPSBcImVtYWlsLXNpZ24tdXBcIjtcbmV4cG9ydCBjb25zdCBFTUFJTF9MT0dJTiA9IFwiZW1haWwtbG9nLWluXCI7XG5leHBvcnQgY29uc3QgR09PR0xFX1NJR05VUCA9IFwiZ29vZ2xlLXNpZ24tdXBcIjtcbmV4cG9ydCBjb25zdCBHT09HTEVfTE9HSU4gPSBcImdvb2dsZS1sb2ctaW5cIjtcbmV4cG9ydCBjb25zdCBVU0VSX0FDQ0VTU19UT0tFTiA9IFwidXNlci1hY2Nlc3MtdG9rZW5cIjtcbmV4cG9ydCBjb25zdCBVU0VSX0NPTExFQ1RJT05fTkFNRSA9IFwiVVNFUi1QRVJTT05BTC1JTkZPUk1BVElPTlwiO1xuZXhwb3J0IGNvbnN0IENPT0tJRV9FWFBJUkFUT0lOX1RJTUUgPSAzMCAqIDI0ICogNjAgKiA2MDtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9UT0tFTl9PQkpFQ1QgPSBcImdldC11c2VyLXRva2VuLW9ialwiO1xuZXhwb3J0IGNvbnN0IFVTRVJfVVBEQVRFX1RZUEVfTkFNRSA9IFwidXBkYXRlLXVzZXItbmFtZVwiO1xuXG4vLyBCb29raW5nIEhvdGVscyBDb25zdGFudHNcbmV4cG9ydCBjb25zdCBIT1RFTF9CT09LSU5HU19DT0xMRUNUSU9OX05BTUUgPSBcIkhPVEVMLUJPT0tJTkdTLUlORk9STUFUSU9OXCI7XG5leHBvcnQgY29uc3QgQk9PS0VEX1JPT01TX0NPTExFQ1RJT05fTkFNRSA9IFwiSE9URUwtQk9PS0lOR1NcIjtcbmV4cG9ydCBjb25zdCBVU0VSX0JPT0tJTkdTX0NPTExFQ1RJT05fTkFNRSA9IFwiVVNFUi1CT09LSU5HUy1JTkZPUk1BVElPTlwiO1xuZXhwb3J0IGNvbnN0IEhPVEVMX0JPT0tJTkdTX1JPT01TX0NPTExFQ1RJT05fTkFNRSA9IFwiQk9PS0VELVJPT01TLUlORk9STUFUSU9OXCI7XG5cblxuLy8gUHJpY2UgUGxhbm5lciBDb25zdGFudHNcbmV4cG9ydCBjb25zdCBIT1RFTF9PV05FUlNfQ09MTEVDVElPTl9OQU1FID0gXCJIT1RFTC1QUklDRS1QTEFOTkVSLUlORk9STUFUSU9OXCI7XG5leHBvcnQgY29uc3QgQUZGSUxJQVRFRF9DT0xMRUNUSU9OX05BTUUgPSBcIkFGRkxJQVRFRC1IT1RFTFNcIjtcbmV4cG9ydCBjb25zdCBIT1RFTF9ST09NU19DT0xMRUNUSU9OX05BTUUgPSBcIkhPVEVMLVJPT01TXCI7XG5leHBvcnQgY29uc3QgUk9PTV9QTEFOU19DT0xMRUNUSU9OX05BTUUgPSBcIlJPT00tUExBTlNcIjtcbmV4cG9ydCBjb25zdCBST09NX1BSSUNFX1BMQU5ORVJfQ09MTEVDVElPTl9OQU1FID0gXCJST09NLVBSSUNFLVBMQU5ORVJcIjtcblxuZXhwb3J0IGNvbnN0IE1PTlRIX05BTUVfTElTVCA9IFtcbiAgXCJKQU5VQVJZXCIsXG4gIFwiRkVCUlVBUllcIixcbiAgXCJNQVJDSFwiLFxuICBcIkFQUklMXCIsXG4gIFwiTUFZXCIsXG4gIFwiSlVORVwiLFxuICBcIkpVTFlcIixcbiAgXCJBVUdVU1RcIixcbiAgXCJTRVBURU1CRVJcIixcbiAgXCJPQ1RPQkVSXCIsXG4gIFwiTk9WRU1CRVJcIixcbiAgXCJERUNFTUJFUlwiLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoXG4gIHN0YXJ0RGF0ZTogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSxcbiAgbnVtYmVyT2ZEYXlzOiBudW1iZXJcbikge1xuICBjb25zdCByZXN1bHQgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICByZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgbnVtYmVyT2ZEYXlzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGVEaWZmZXJlbmNlKFxuICBjaGVja0luRGF0ZTogc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSxcbiAgY2hlY2tPdXREYXRlOiBzdHJpbmcgfCBudW1iZXIgfCBEYXRlXG4pIHtcbiAgdmFyIHRpbWVEaWZmID1cbiAgICBuZXcgRGF0ZShjaGVja091dERhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGNoZWNrSW5EYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBkYXlEaWZmID0gdGltZURpZmYgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF5RGlmZik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3JWYWx1ZTogU3RyaW5nKSB7XG4gIGlmIChlcnJvclZhbHVlID09PSBcImF1dGgvd3JvbmctcGFzc3dvcmRcIikge1xuICAgIHJldHVybiBcIldyb25nIGNvbWJpbmF0aW9uIG9mIHRoZSBjcmVkZW50aWFscyFcIjtcbiAgfSBlbHNlIGlmIChlcnJvclZhbHVlID09PSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIikge1xuICAgIHJldHVybiBcIkVtYWlsIGFscmVhZHkgaXMgaW4gdXNlIVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlcnJvclZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBleHRyYWN0SldUVmFsdWVzID0gYXN5bmMgKHRva2VuOiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZWNvZGVkVmFsdWUgPSBhd2FpdCBqd3RfZGVjb2RlKHRva2VuKTtcbiAgICByZXR1cm4gZGVjb2RlZFZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdW5peFRvRGF0ZSA9IGFzeW5jICh0aW1lU3RhbXA6IGFueSkgPT4ge1xuICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoTnVtYmVyKHRpbWVTdGFtcCkgKiAxMDAwKTtcbiAgcmV0dXJuIGRhdGVPYmo7XG59O1xuIl0sIm5hbWVzIjpbImp3dF9kZWNvZGUiLCJFTUFJTF9TSUdOVVAiLCJFTUFJTF9MT0dJTiIsIkdPT0dMRV9TSUdOVVAiLCJHT09HTEVfTE9HSU4iLCJVU0VSX0FDQ0VTU19UT0tFTiIsIlVTRVJfQ09MTEVDVElPTl9OQU1FIiwiQ09PS0lFX0VYUElSQVRPSU5fVElNRSIsIkdFVF9VU0VSX1RPS0VOX09CSkVDVCIsIlVTRVJfVVBEQVRFX1RZUEVfTkFNRSIsIkhPVEVMX0JPT0tJTkdTX0NPTExFQ1RJT05fTkFNRSIsIkJPT0tFRF9ST09NU19DT0xMRUNUSU9OX05BTUUiLCJVU0VSX0JPT0tJTkdTX0NPTExFQ1RJT05fTkFNRSIsIkhPVEVMX0JPT0tJTkdTX1JPT01TX0NPTExFQ1RJT05fTkFNRSIsIkhPVEVMX09XTkVSU19DT0xMRUNUSU9OX05BTUUiLCJBRkZJTElBVEVEX0NPTExFQ1RJT05fTkFNRSIsIkhPVEVMX1JPT01TX0NPTExFQ1RJT05fTkFNRSIsIlJPT01fUExBTlNfQ09MTEVDVElPTl9OQU1FIiwiUk9PTV9QUklDRV9QTEFOTkVSX0NPTExFQ1RJT05fTkFNRSIsIk1PTlRIX05BTUVfTElTVCIsImFkZERheXMiLCJzdGFydERhdGUiLCJudW1iZXJPZkRheXMiLCJyZXN1bHQiLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJnZXREYXRlRGlmZmVyZW5jZSIsImNoZWNrSW5EYXRlIiwiY2hlY2tPdXREYXRlIiwidGltZURpZmYiLCJnZXRUaW1lIiwiZGF5RGlmZiIsIk1hdGgiLCJmbG9vciIsImdldEVycm9yTWVzc2FnZSIsImVycm9yVmFsdWUiLCJleHRyYWN0SldUVmFsdWVzIiwidG9rZW4iLCJkZWNvZGVkVmFsdWUiLCJlcnJvciIsInVuaXhUb0RhdGUiLCJ0aW1lU3RhbXAiLCJkYXRlT2JqIiwiTnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/helper/index.ts\n");

/***/ }),

/***/ "(api)/./pages/api/userProfile/fetchUserDetails.ts":
/*!***************************************************!*\
  !*** ./pages/api/userProfile/fetchUserDetails.ts ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/firebase */ \"(api)/./lib/firebase/index.ts\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/helper */ \"(api)/./lib/helper/index.ts\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nasync function handler(req, res) {\n    const receivedData = req.body;\n    const { userBooking  } = receivedData;\n    try {\n        const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_1__.parse)(req.headers.cookie || \"\");\n        const userAccessToken = await cookies[_lib_helper__WEBPACK_IMPORTED_MODULE_2__.USER_ACCESS_TOKEN];\n        if (userAccessToken) {\n            const userObj = await (0,_lib_helper__WEBPACK_IMPORTED_MODULE_2__.extractJWTValues)(userAccessToken);\n            const userData = userObj;\n            const user_Id = userData.user_id;\n            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_2__.USER_COLLECTION_NAME, user_Id);\n            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);\n            res.status(201).json({\n                userCredentials: docSnap.data(),\n                error: null,\n                message: \"User access token value generated!\"\n            });\n        } else {\n            res.status(201).json({\n                userCredentials: null,\n                error: null,\n                message: \"User access token does not exists!\"\n            });\n        }\n    } catch (error) {\n        res.status(422).json({\n            userCredentials: null,\n            error,\n            message: \"Error occoured\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlclByb2ZpbGUvZmV0Y2hVc2VyRGV0YWlscy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFFQTtBQWFwQjtBQUMyQjtBQUVqRCxlQUFlTyxRQUFRQyxHQUFRLEVBQUVDLEdBQVEsRUFBRTtJQUN6QyxNQUFNQyxlQUFlRixJQUFJRyxJQUFJO0lBQzdCLE1BQU0sRUFBRUMsWUFBVyxFQUFFLEdBQUdGO0lBRXhCLElBQUk7UUFDRixNQUFNRyxVQUFVWiw2Q0FBS0EsQ0FBQ08sSUFBSU0sT0FBTyxDQUFDQyxNQUFNLElBQUk7UUFDNUMsTUFBTUMsa0JBQWtCLE1BQU1ILE9BQU8sQ0FBQ1gsMERBQWlCQSxDQUFDO1FBRXhELElBQUljLGlCQUFpQjtZQUNuQixNQUFNQyxVQUFVLE1BQU1kLDZEQUFnQkEsQ0FBQ2E7WUFDdkMsTUFBTUUsV0FBZ0NEO1lBQ3RDLE1BQU1FLFVBQVVELFNBQVNFLE9BQU87WUFFaEMsTUFBTUMsU0FBU2hCLHVEQUFHQSxDQUNoQkwsNkNBQUVBLEVBQ0ZJLDZEQUFvQkEsRUFDcEJlO1lBRUYsTUFBTUcsVUFBVSxNQUFNaEIsMERBQU1BLENBQUNlO1lBRTdCWixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsaUJBQWlCSCxRQUFRSSxJQUFJO2dCQUM3QkMsT0FBTyxJQUFJO2dCQUNYQyxTQUFTO1lBQ1g7UUFDRixPQUFPO1lBQ0xuQixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsaUJBQWlCLElBQUk7Z0JBQ3JCRSxPQUFPLElBQUk7Z0JBQ1hDLFNBQVM7WUFDWDtRQUNGLENBQUM7SUFDSCxFQUFFLE9BQU9ELE9BQU87UUFDZGxCLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLGlCQUFpQixJQUFJO1lBQ3JCRTtZQUNBQyxTQUFTO1FBQ1g7SUFDRjtBQUNGO0FBRUEsaUVBQWVyQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RheWJvb2stbW9kaWZpZWQvLi9wYWdlcy9hcGkvdXNlclByb2ZpbGUvZmV0Y2hVc2VyRGV0YWlscy50cz83ODcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSBcIkAvbGliL2ZpcmViYXNlXCI7XG5pbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjsgLy8gc2VydmVyIHNpZGUgY29va2llIG9ubHkgaHR0cHMgYW5kIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyIHNpZGVcbmltcG9ydCB7IHNlcmlhbGl6ZSwgcGFyc2UgfSBmcm9tIFwiY29va2llXCI7XG5cbmltcG9ydCB7XG4gIEVNQUlMX1NJR05VUCxcbiAgRU1BSUxfTE9HSU4sXG4gIEdPT0dMRV9TSUdOVVAsXG4gIEdPT0dMRV9MT0dJTixcbiAgVVNFUl9BQ0NFU1NfVE9LRU4sXG4gIHVuaXhUb0RhdGUsXG4gIEdFVF9VU0VSX1RPS0VOX09CSkVDVCxcbiAgZXh0cmFjdEpXVFZhbHVlcyxcbiAgQ09PS0lFX0VYUElSQVRPSU5fVElNRSxcbiAgVVNFUl9DT0xMRUNUSU9OX05BTUUsXG59IGZyb20gXCJAL2xpYi9oZWxwZXJcIjtcbmltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogYW55LCByZXM6IGFueSkge1xuICBjb25zdCByZWNlaXZlZERhdGEgPSByZXEuYm9keTtcbiAgY29uc3QgeyB1c2VyQm9va2luZyB9ID0gcmVjZWl2ZWREYXRhO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlKHJlcS5oZWFkZXJzLmNvb2tpZSB8fCBcIlwiKTtcbiAgICBjb25zdCB1c2VyQWNjZXNzVG9rZW4gPSBhd2FpdCBjb29raWVzW1VTRVJfQUNDRVNTX1RPS0VOXTtcblxuICAgIGlmICh1c2VyQWNjZXNzVG9rZW4pIHtcbiAgICAgIGNvbnN0IHVzZXJPYmogPSBhd2FpdCBleHRyYWN0SldUVmFsdWVzKHVzZXJBY2Nlc3NUb2tlbik7XG4gICAgICBjb25zdCB1c2VyRGF0YTogeyB1c2VyX2lkOiBzdHJpbmcgfSA9IHVzZXJPYmogYXMgeyB1c2VyX2lkOiBzdHJpbmcgfTtcbiAgICAgIGNvbnN0IHVzZXJfSWQgPSB1c2VyRGF0YS51c2VyX2lkO1xuXG4gICAgICBjb25zdCBkb2NSZWYgPSBkb2MoXG4gICAgICAgIGRiLFxuICAgICAgICBVU0VSX0NPTExFQ1RJT05fTkFNRSxcbiAgICAgICAgdXNlcl9JZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcblxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgICB1c2VyQ3JlZGVudGlhbHM6IGRvY1NuYXAuZGF0YSgpLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIGFjY2VzcyB0b2tlbiB2YWx1ZSBnZW5lcmF0ZWQhXCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgICB1c2VyQ3JlZGVudGlhbHM6IG51bGwsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgYWNjZXNzIHRva2VuIGRvZXMgbm90IGV4aXN0cyFcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQyMikuanNvbih7XG4gICAgICB1c2VyQ3JlZGVudGlhbHM6IG51bGwsXG4gICAgICBlcnJvcixcbiAgICAgIG1lc3NhZ2U6IFwiRXJyb3Igb2Njb3VyZWRcIixcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImRiIiwicGFyc2UiLCJVU0VSX0FDQ0VTU19UT0tFTiIsImV4dHJhY3RKV1RWYWx1ZXMiLCJVU0VSX0NPTExFQ1RJT05fTkFNRSIsImRvYyIsImdldERvYyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZWNlaXZlZERhdGEiLCJib2R5IiwidXNlckJvb2tpbmciLCJjb29raWVzIiwiaGVhZGVycyIsImNvb2tpZSIsInVzZXJBY2Nlc3NUb2tlbiIsInVzZXJPYmoiLCJ1c2VyRGF0YSIsInVzZXJfSWQiLCJ1c2VyX2lkIiwiZG9jUmVmIiwiZG9jU25hcCIsInN0YXR1cyIsImpzb24iLCJ1c2VyQ3JlZGVudGlhbHMiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/userProfile/fetchUserDetails.ts\n");
=======
/***/ 6128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2253);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7694);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    const receivedData = req.body;
    const { userBooking  } = receivedData;
    try {
        const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_1__.parse)(req.headers.cookie || "");
        const userAccessToken = await cookies[_lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .USER_ACCESS_TOKEN */ .HU];
        if (userAccessToken) {
            const userObj = await (0,_lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .extractJWTValues */ .xb)(userAccessToken);
            const userData = userObj;
            const user_Id = userData.user_id;
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .USER_COLLECTION_NAME */ .YP, user_Id);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);
            res.status(201).json({
                userCredentials: docSnap.data(),
                error: null,
                message: "User access token value generated!"
            });
        } else {
            res.status(201).json({
                userCredentials: null,
                error: null,
                message: "User access token does not exists!"
            });
        }
    } catch (error) {
        res.status(422).json({
            userCredentials: null,
            error,
            message: "Error occoured"
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/userProfile/fetchUserDetails.ts"));
=======
var __webpack_exports__ = __webpack_require__.X(0, [1418], () => (__webpack_exec__(6128)));
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
module.exports = __webpack_exports__;

})();