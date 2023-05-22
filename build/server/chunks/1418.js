"use strict";
exports.id = 1418;
exports.ids = [1418];
exports.modules = {

/***/ 2253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* unused harmony export googleAuthProvider */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need



const firebaseConfig = {
    apiKey: "AIzaSyD3MjpR_Ta6LRfoMOaoX-b-kTlVHuiuHtw",
    authDomain: "staybook-de712.firebaseapp.com",
    databaseURL: "https://staybook-de712-default-rtdb.firebaseio.com",
    projectId: "staybook-de712",
    storageBucket: "staybook-de712.appspot.com",
    messagingSenderId: "946000733513",
    appId: "1:946000733513:web:662ce04b970b3d8eb66698",
    measurementId: "G-V29JV44EFX"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const googleAuthProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cx": () => (/* binding */ COOKIE_EXPIRATOIN_TIME),
/* harmony export */   "D4": () => (/* binding */ USER_BOOKINGS_COLLECTION_NAME),
/* harmony export */   "GZ": () => (/* binding */ HOTEL_BOOKINGS_COLLECTION_NAME),
/* harmony export */   "HU": () => (/* binding */ USER_ACCESS_TOKEN),
/* harmony export */   "OQ": () => (/* binding */ BOOKED_ROOMS_COLLECTION_NAME),
/* harmony export */   "Ve": () => (/* binding */ HOTEL_OWNERS_COLLECTION_NAME),
/* harmony export */   "W5": () => (/* binding */ USER_UPDATE_TYPE_NAME),
/* harmony export */   "X9": () => (/* binding */ ROOM_PLANS_COLLECTION_NAME),
/* harmony export */   "YP": () => (/* binding */ USER_COLLECTION_NAME),
/* harmony export */   "_w": () => (/* binding */ HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME),
/* harmony export */   "aY": () => (/* binding */ HOTEL_ROOMS_COLLECTION_NAME),
/* harmony export */   "kr": () => (/* binding */ GOOGLE_SIGNUP),
/* harmony export */   "kv": () => (/* binding */ EMAIL_SIGNUP),
/* harmony export */   "xb": () => (/* binding */ extractJWTValues),
/* harmony export */   "xd": () => (/* binding */ AFFILIATED_COLLECTION_NAME)
/* harmony export */ });
/* unused harmony exports EMAIL_LOGIN, GOOGLE_LOGIN, GET_USER_TOKEN_OBJECT, ROOM_PRICE_PLANNER_COLLECTION_NAME, MONTH_NAME_LIST, addDays, getDateDifference, getErrorMessage, unixToDate */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

// User Authentication Constants
const EMAIL_SIGNUP = "email-sign-up";
const EMAIL_LOGIN = "email-log-in";
const GOOGLE_SIGNUP = "google-sign-up";
const GOOGLE_LOGIN = "google-log-in";
const USER_ACCESS_TOKEN = "user-access-token";
const USER_COLLECTION_NAME = "USER-PERSONAL-INFORMATION";
const COOKIE_EXPIRATOIN_TIME = 30 * 24 * 60 * 60;
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
        const decodedValue = await jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(token);
        return decodedValue;
    } catch (error) {
        return null;
    }
};
const unixToDate = async (timeStamp)=>{
    const dateObj = new Date(Number(timeStamp) * 1000);
    return dateObj;
};


/***/ })

};
;