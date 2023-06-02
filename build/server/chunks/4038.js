"use strict";
exports.id = 4038;
exports.ids = [4038];
exports.modules = {

/***/ 4038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D4": () => (/* binding */ USER_BOOKINGS_COLLECTION_NAME),
/* harmony export */   "E4": () => (/* binding */ addDays),
/* harmony export */   "HU": () => (/* binding */ USER_ACCESS_TOKEN),
/* harmony export */   "OQ": () => (/* binding */ BOOKED_ROOMS_COLLECTION_NAME),
/* harmony export */   "W5": () => (/* binding */ USER_UPDATE_TYPE_NAME),
/* harmony export */   "YP": () => (/* binding */ USER_COLLECTION_NAME),
/* harmony export */   "Ym": () => (/* binding */ EMAIL_LOGIN),
/* harmony export */   "_w": () => (/* binding */ HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME),
/* harmony export */   "bw": () => (/* binding */ GOOGLE_LOGIN),
/* harmony export */   "e$": () => (/* binding */ getErrorMessage),
/* harmony export */   "hM": () => (/* binding */ getDateDifference),
/* harmony export */   "kr": () => (/* binding */ GOOGLE_SIGNUP),
/* harmony export */   "kv": () => (/* binding */ EMAIL_SIGNUP),
/* harmony export */   "li": () => (/* binding */ GET_USER_TOKEN_OBJECT),
/* harmony export */   "xb": () => (/* binding */ extractJWTValues)
/* harmony export */ });
/* unused harmony exports COOKIE_EXPIRATOIN_TIME, HOTEL_BOOKINGS_COLLECTION_NAME, HOTEL_OWNERS_COLLECTION_NAME, AFFILIATED_COLLECTION_NAME, HOTEL_ROOMS_COLLECTION_NAME, ROOM_PLANS_COLLECTION_NAME, ROOM_PRICE_PLANNER_COLLECTION_NAME, MONTH_NAME_LIST, unixToDate */
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5567);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);

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