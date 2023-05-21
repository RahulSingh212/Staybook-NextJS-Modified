"use strict";
exports.id = 8121;
exports.ids = [8121];
exports.modules = {

/***/ 8121:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CD": () => (/* binding */ fetchUserImageUrl),
/* harmony export */   "CR": () => (/* binding */ getUserProfileDetails),
/* harmony export */   "Fb": () => (/* binding */ getUserAccessTokenObject),
/* harmony export */   "dE": () => (/* binding */ getUserBookings),
/* harmony export */   "oP": () => (/* binding */ googleAuthentication)
/* harmony export */ });
/* unused harmony export createUserAccount */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4038);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9819);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _classModels_bookings_bookingDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7160);
/* harmony import */ var _classModels_bookings_roomDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _index__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _index__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const googleAuthentication = async ()=>{
    try {
        const googleResponse = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup)(_index__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I, _index__WEBPACK_IMPORTED_MODULE_2__/* .googleAuthProvider */ .q);
        const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider.credentialFromResult(googleResponse);
        if (!credential) {
            return {
                userCredentials: null,
                error: null,
                message: "Google account not selected!"
            };
        }
        const user = googleResponse.user;
        const userAccessToken = await googleResponse.user.getIdToken();
        const userId = user.uid;
        const userEmail = user.email;
        const userImageUrl = user.photoURL;
        const displayName = user.displayName;
        let authType = "";
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_index__WEBPACK_IMPORTED_MODULE_2__.db, _helper__WEBPACK_IMPORTED_MODULE_1__/* .USER_COLLECTION_NAME */ .YP, userId);
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);
        if (docSnap.exists()) {
            authType = _helper__WEBPACK_IMPORTED_MODULE_1__/* .GOOGLE_LOGIN */ .bw;
        } else {
            authType = _helper__WEBPACK_IMPORTED_MODULE_1__/* .GOOGLE_SIGNUP */ .kr;
        }
        const response = await fetch("/api/auth/userGoogleAuth", {
            method: "POST",
            body: JSON.stringify({
                authType,
                userAccessToken,
                userId,
                userEmail,
                userImageUrl,
                displayName
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(user);
        return {
            userCredentials: user,
            error: null,
            message: ""
        };
    } catch (error) {
        console.log("User-Handler-Error");
        return {
            userCredentials: null,
            error,
            message: "Error occoured"
        };
    }
};
const createUserAccount = async (accessToken, userId, userEmailId, userImageUrl = "", authType = "email", displayName = "")=>{
    const response = await setDoc(doc(db, USER_COLLECTION_NAME, userId), {
        User_Id: userId,
        User_Access_Token: accessToken,
        User_Auth_Type: authType,
        User_Display_Name: displayName,
        User_First_Name: "",
        User_Middle_Name: "",
        User_Last_Name: "",
        User_Gender: "",
        User_Image_Url: userImageUrl,
        User_Mobile_Number: "",
        User_Alternate_Mobile_Number: "",
        User_Email_Id: userEmailId,
        User_Permanent_Address: "",
        User_Coins: "0"
    });
};
const getUserAccessTokenObject = async ()=>{
    const baseUrl = "https://localhost:3000";
    const requestType = _helper__WEBPACK_IMPORTED_MODULE_1__/* .GET_USER_TOKEN_OBJECT */ .li;
    console.log(baseUrl);
    const response = await fetch(`/api/userProfile/fetchUserAccessToken`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log("Cred " + data.userCredentials);
    return data.userCredentials;
};
const getUserProfileDetails = async (userAccessTokenObject)=>{
    if (userAccessTokenObject === null) return null;
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_index__WEBPACK_IMPORTED_MODULE_2__.db, _helper__WEBPACK_IMPORTED_MODULE_1__/* .USER_COLLECTION_NAME */ .YP, userAccessTokenObject.user_id);
    const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);
    return docSnap.data();
};
const getUserBookings = async (userAccessTokenObject)=>{
    const userEmailId = userAccessTokenObject.email;
    const firestore = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
    const bookingCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(firestore, _helper__WEBPACK_IMPORTED_MODULE_1__/* .USER_BOOKINGS_COLLECTION_NAME */ .D4, userEmailId, _helper__WEBPACK_IMPORTED_MODULE_1__/* .BOOKED_ROOMS_COLLECTION_NAME */ .OQ);
    const bookingsQuerySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(bookingCollectionRef);
    let bookingList = [];
    for (let booking of bookingsQuerySnapshot.docs){
        const bookedRoomsCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(firestore, _helper__WEBPACK_IMPORTED_MODULE_1__/* .USER_BOOKINGS_COLLECTION_NAME */ .D4, userEmailId, _helper__WEBPACK_IMPORTED_MODULE_1__/* .BOOKED_ROOMS_COLLECTION_NAME */ .OQ, booking.id, _helper__WEBPACK_IMPORTED_MODULE_1__/* .HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME */ ._w);
        let bookingInfo = new _classModels_bookings_bookingDetails__WEBPACK_IMPORTED_MODULE_4__/* .BookingDetails */ .y();
        let bookedRoomsList = [];
        const roomsQuerySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(bookedRoomsCollectionRef);
        for (let room of roomsQuerySnapshot.docs){
            let roomInfo = new _classModels_bookings_roomDetails__WEBPACK_IMPORTED_MODULE_5__/* .RoomDetails */ .X();
            roomInfo.room_Id = room.id;
            roomInfo.room_Name = room.data().room_Name;
            roomInfo.room_Info = room.data().room_Info;
            roomInfo.room_Count = room.data().room_Count;
            roomInfo.plan_Id = room.data().plan_Id;
            roomInfo.plan_Name = room.data().plan_Name;
            roomInfo.plan_Info = room.data().plan_Info;
            roomInfo.plan_Price = room.data().plan_Price;
            roomInfo.num_Guests = room.data().num_Guests;
            roomInfo.num_Children = room.data().num_Children;
            roomInfo.num_Infants = room.data().num_Infants;
            bookedRoomsList.push(roomInfo);
        }
        bookingInfo.roomsList = bookedRoomsList;
        bookingInfo.booking_Id = booking.id;
        bookingInfo.hotel_Image_Url = booking.data().hotel_Image_Url;
        bookingInfo.hotel_Name = booking.data().hotel_Name;
        bookingInfo.hotel_Landmark = booking.data().hotel_Landmark;
        bookingInfo.hotel_Owner_Id = booking.data().hotel_Owner_Id;
        bookingInfo.hotel_Firebase_Id = booking.data().hotel_Firebase_Id;
        bookingInfo.hotel_Sanity_Id = booking.data().hotel_Sanity_Id;
        bookingInfo.user_Unique_Id = booking.data().user_Unique_Id;
        bookingInfo.user_Email_Id = booking.data().user_Email_Id;
        bookingInfo.user_Name = booking.data().user_Name;
        bookingInfo.user_Phone_Number = booking.data().user_Phone_Number;
        bookingInfo.total_Rooms_Count = booking.data().total_Rooms_Count;
        bookingInfo.total_Room_Cost = booking.data().total_Room_Cost;
        bookingInfo.total_Tax = booking.data().total_Tax;
        bookingInfo.total_Price = booking.data().total_Price;
        bookingInfo.payment_Made = booking.data().payment_Made;
        bookingInfo.amount_Paid = booking.data().amount_Paid;
        bookingInfo.booking_Time = new Date(booking.data().booking_Time);
        bookingInfo.checkin_Time = new Date(booking.data().checkin_Time);
        bookingInfo.checkout_Time = new Date(booking.data().checkout_Time);
        bookingInfo.razorpay_Payment_Id = booking.data().razorpay_Payment_Id;
        bookingInfo.razorpay_Order_Id = booking.data().razorpay_Order_Id;
        bookingInfo.razorpay_Signature_Id = booking.data().razorpay_Signature_Id;
        bookingInfo.receipt_Id = booking.data().receipt_Id;
        bookingList.push(bookingInfo);
    }
    return JSON.stringify(bookingList);
};
const fetchUserImageUrl = async ()=>{
    const response = await fetch("/api/userProfile/fetchUserDetails", {
        method: "POST",
        body: JSON.stringify({
            userBooking: "userBooking"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    let imageUrl = "";
    if (data.userCredentials) {
        imageUrl = data.userCredentials.User_Image_Url;
    }
    return imageUrl;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;