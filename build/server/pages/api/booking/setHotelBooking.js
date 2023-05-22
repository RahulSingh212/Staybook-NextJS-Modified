"use strict";
(() => {
var exports = {};
exports.id = 9153;
exports.ids = [9153];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 6354:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2253);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7694);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const shortid = __webpack_require__(5031);
const ownerHotelBookingList = async (userBooking, userBookingId, receiptId)=>{
    const docBookingRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .HOTEL_BOOKINGS_COLLECTION_NAME */ .GZ, userBooking.hotel_Owner_Id, userBooking.hotel_Firebase_Id, userBookingId);
    const response = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(docBookingRef, {
        booking_Id: userBookingId,
        booking_Time: String(userBooking.booking_Time),
        checkin_Time: String(userBooking.checkin_Time),
        checkout_Time: String(userBooking.checkout_Time),
        hotel_Image_Url: userBooking.hotel_Image_Url,
        hotel_Name: userBooking.hotel_Name,
        hotel_Landmark: userBooking.hotel_Landmark,
        hotel_Firebase_Id: userBooking.hotel_Firebase_Id,
        hotel_Sanity_Id: userBooking.hotel_Sanity_Id,
        total_Rooms_Count: userBooking.total_Rooms_Count,
        total_Room_Cost: userBooking.total_Room_Cost.toFixed(2),
        total_Tax: userBooking.total_Tax.toFixed(2),
        total_Price: userBooking.total_Price.toFixed(2),
        payment_Made: Math.floor(userBooking.amount_Paid) === Math.floor(userBooking.total_Price),
        amount_Paid: userBooking.amount_Paid,
        booking_Status: true,
        user_Unique_Id: userBooking.user_Unique_Id,
        user_Name: userBooking.user_Name,
        user_Address: userBooking.user_Address,
        user_Email_Id: userBooking.user_Email_Id,
        user_Phone_Number: userBooking.user_Phone_Number,
        razorpay_Payment_Id: userBooking.razorpay_Payment_Id,
        razorpay_Order_Id: userBooking.razorpay_Order_Id,
        razorpay_Signature_Id: userBooking.razorpay_Signature_Id,
        receipt_Id: receiptId
    });
    for(let i = 0; i < userBooking.roomsList.length; i++){
        const roomRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .HOTEL_BOOKINGS_COLLECTION_NAME */ .GZ, userBooking.hotel_Owner_Id, userBooking.hotel_Firebase_Id, userBookingId, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME */ ._w), {
            room_Id: userBooking.roomsList[i].room_Id,
            room_Name: userBooking.roomsList[i].room_Name,
            room_Info: userBooking.roomsList[i].room_Info,
            room_Count: userBooking.roomsList[i].room_Count,
            plan_Id: userBooking.roomsList[i].plan_Id,
            plan_Name: userBooking.roomsList[i].plan_Name,
            plan_Info: userBooking.roomsList[i].plan_Info,
            plan_Price: userBooking.roomsList[i].plan_Price,
            num_Guests: userBooking.roomsList[i].num_Guests,
            num_Children: userBooking.roomsList[i].num_Children,
            num_Infants: userBooking.roomsList[i].num_Infants
        });
    }
    return response;
};
const userHotelBookingListing = async (userBooking, receiptId)=>{
    const userDocRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .USER_BOOKINGS_COLLECTION_NAME */ .D4, userBooking.user_Email_Id, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .BOOKED_ROOMS_COLLECTION_NAME */ .OQ), {
        booking_Id: "",
        booking_Time: String(userBooking.booking_Time),
        checkin_Time: String(userBooking.checkin_Time),
        checkout_Time: String(userBooking.checkout_Time),
        hotel_Image_Url: userBooking.hotel_Image_Url,
        hotel_Name: userBooking.hotel_Name,
        hotel_Landmark: userBooking.hotel_Landmark,
        hotel_Owner_Id: userBooking.hotel_Owner_Id,
        hotel_Firebase_Id: userBooking.hotel_Firebase_Id,
        hotel_Sanity_Id: userBooking.hotel_Sanity_Id,
        total_Rooms_Count: userBooking.total_Rooms_Count,
        total_Room_Cost: userBooking.total_Room_Cost.toFixed(2),
        total_Tax: userBooking.total_Tax.toFixed(2),
        total_Price: userBooking.total_Price.toFixed(2),
        payment_Made: userBooking.amount_Paid.toFixed(2) === userBooking.total_Price.toFixed(2),
        amount_Paid: userBooking.amount_Paid,
        booking_Status: true,
        user_Unique_Id: userBooking.user_Unique_Id,
        user_Name: userBooking.user_Name,
        user_Address: userBooking.user_Address,
        user_Email_Id: userBooking.user_Email_Id,
        user_Phone_Number: userBooking.user_Phone_Number,
        razorpay_Payment_Id: userBooking.razorpay_Payment_Id,
        razorpay_Order_Id: userBooking.razorpay_Order_Id,
        razorpay_Signature_Id: userBooking.razorpay_Signature_Id,
        receipt_Id: receiptId
    });
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .USER_BOOKINGS_COLLECTION_NAME */ .D4, userBooking.user_Email_Id, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .BOOKED_ROOMS_COLLECTION_NAME */ .OQ, userDocRef.id);
    const response = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(docRef, {
        booking_Id: userDocRef.id
    });
    for(let i = 0; i < userBooking.roomsList.length; i++){
        const roomRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .USER_BOOKINGS_COLLECTION_NAME */ .D4, userBooking.user_Email_Id, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .BOOKED_ROOMS_COLLECTION_NAME */ .OQ, userDocRef.id, _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME */ ._w), {
            room_Id: userBooking.roomsList[i].room_Id,
            room_Name: userBooking.roomsList[i].room_Name,
            room_Info: userBooking.roomsList[i].room_Info,
            room_Count: userBooking.roomsList[i].room_Count,
            plan_Id: userBooking.roomsList[i].plan_Id,
            plan_Name: userBooking.roomsList[i].plan_Name,
            plan_Info: userBooking.roomsList[i].plan_Info,
            plan_Price: userBooking.roomsList[i].plan_Price,
            num_Guests: userBooking.roomsList[i].num_Guests,
            num_Children: userBooking.roomsList[i].num_Children,
            num_Infants: userBooking.roomsList[i].num_Infants
        });
    }
    return userDocRef;
};
async function handler(req, res) {
    const receivedData = req.body;
    const { userBooking  } = receivedData;
    try {
        const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(req.headers.cookie || "");
        const userAccessToken = cookies[_lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .USER_ACCESS_TOKEN */ .HU];
        if (userAccessToken) {
            const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(req.headers.cookie || "");
            const userAccessToken = cookies[_lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .USER_ACCESS_TOKEN */ .HU];
            const userObj = await (0,_lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .extractJWTValues */ .xb)(userAccessToken);
            const userData1 = userObj;
            const userData2 = userObj;
            userBooking.user_Unique_Id = userData2.user_id;
            userBooking.user_Email_Id = userData1.email;
        }
        const receipt_Id = userBooking.receipt_Id;
        const userDocRef = await userHotelBookingListing(userBooking, receipt_Id);
        const ownerDocRef = await ownerHotelBookingList(userBooking, userDocRef.id, receipt_Id);
        res.status(201).json({
            userCredentials: userDocRef,
            ownerCredentails: ownerDocRef,
            booking_Id: userDocRef.id,
            receipt_Id: receipt_Id,
            error: null,
            message: "User access token value generated!"
        });
    } catch (error) {
        console.log(error);
        res.status(422).json({
            userCredentials: null,
            ownerCredentails: null,
            booking_Id: "",
            receipt_Id: "",
            error,
            message: "Error occoured"
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1418], () => (__webpack_exec__(6354)));
module.exports = __webpack_exports__;

})();