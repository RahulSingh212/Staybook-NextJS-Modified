"use strict";
exports.id = 6764;
exports.ids = [6764];
exports.modules = {

/***/ 9936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export BookingDetails */
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7694);

class BookingDetails {
    //   constructor() {}
    //   constructor(
    //     roomsList: RoomDetails[] = [],
    //     booking_Id: string = "",
    //     hotel_Owner_Id: string = "",
    //     hotel_Firebase_Id: string = "",
    //     hotel_Sanity_Id: string = ""
    //   ) {
    //     this.roomsList = roomsList;
    //     this.booking_Id = booking_Id;
    //     this.hotel_Owner_Id = hotel_Owner_Id;
    //     this.hotel_Firebase_Id = hotel_Firebase_Id;
    //     this.hotel_Sanity_Id = hotel_Sanity_Id;
    //     (this.total_Rooms_Count = this.roomsList.length),
    //       (this.total_Room_Cost = this.calculateTotalRoomCost(this.roomsList));
    //     this.total_Tax = this.total_Room_Cost * 0.12;
    //     this.total_Price = this.total_Room_Cost * 1.12;
    //   }
    calculateTotalRoomCost(roomsList) {
        let totalRoomCost = 0;
        for(let i = 0; i < roomsList.length; i++){
            totalRoomCost += roomsList[i].plan_Price;
            totalRoomCost += roomsList[i].num_Children * 1000;
        }
        return totalRoomCost;
    }
    addNewRoom(roomInfo) {
        let chk = false, idx = -1;
        for(let i = 0; i < this.roomsList.length; i++){
            if (roomInfo.compareRooms(this.roomsList[i])) {
                chk = true;
                idx = i;
                break;
            }
        }
        if (chk) this.roomsList[idx].room_Count += 1;
        else this.roomsList.push(roomInfo);
        this.total_Guests_Count += roomInfo.num_Guests;
        this.total_Rooms_Count += 1;
        this.total_Room_Cost += roomInfo.plan_Price + roomInfo.num_Children * 1000;
        this.total_Room_Cost = Number(this.total_Room_Cost.toFixed(2));
        this.total_Tax = this.total_Room_Cost * 0.12;
        this.total_Tax = Number(this.total_Tax.toFixed(2));
        this.total_Price = this.total_Room_Cost * 1.12;
        this.total_Price = Number(this.total_Price.toFixed(2));
    }
    updateChildToRoom(planIdx, val) {
        this.total_Room_Cost -= this.roomsList[planIdx].num_Children * this.roomsList[planIdx].room_Count * 1000;
        this.total_Room_Cost += val * this.roomsList[planIdx].room_Count * 1000;
        this.total_Tax = this.total_Room_Cost * 0.12;
        this.total_Price = this.total_Room_Cost * 1.12;
        this.roomsList[planIdx].num_Children = val;
    }
    removeRoom(roomInfo, planIdx) {
        this.total_Guests_Count -= roomInfo.num_Guests;
        this.total_Rooms_Count -= roomInfo.room_Count;
        this.total_Room_Cost -= roomInfo.plan_Price * roomInfo.room_Count + roomInfo.num_Children * roomInfo.room_Count * 1000;
        this.total_Tax = this.total_Room_Cost * 0.12;
        this.total_Price = this.total_Room_Cost * 1.12;
        this.roomsList.splice(planIdx, 1);
    }
    updateBookingDetails() {
        let tot = 0, roomCnt = 0;
        for(let i = 0; i < this.roomsList.length; i++){
            tot += this.roomsList[i].plan_Price * this.roomsList[i].room_Count;
            roomCnt += this.roomsList[i].room_Count;
        }
        this.total_Rooms_Count = roomCnt;
        this.total_Room_Cost = tot;
        this.total_Tax = tot * 0.12;
        this.total_Price = tot * 1.12;
    }
    get getTotalRoomCount() {
        return this.total_Rooms_Count;
    }
    get getTotalRoomCost() {
        return this.total_Room_Cost;
    }
    get getTotalTax() {
        return this.total_Tax;
    }
    get getTotalPrice() {
        return this.total_Price;
    }
    constructor(){
        this.roomsList = [];
        this.booking_Id = "";
        this.hotel_Owner_Id = "";
        this.hotel_Image_Url = "";
        this.hotel_Name = "";
        this.hotel_Landmark = "";
        this.hotel_Firebase_Id = "";
        this.hotel_Sanity_Id = "";
        this.user_Unique_Id = "";
        this.user_Name = "";
        this.user_Email_Id = "";
        this.user_Phone_Number = "";
        this.user_Address = "";
        this.total_Rooms_Count = 0;
        this.total_Guests_Count = 2;
        this.total_Children_Count = 2;
        this.total_Room_Cost = 0;
        this.total_Tax = 0;
        this.total_Price = 0;
        this.payment_Made = false;
        this.amount_Paid = 0;
        this.booking_Time = new Date();
        this.checkin_Time = new Date();
        this.checkout_Time = addDays(new Date(), 1);
        this.razorpay_Payment_Id = "";
        this.razorpay_Order_Id = "";
        this.razorpay_Signature_Id = "";
        this.receipt_Id = "";
    }
}


/***/ }),

/***/ 6075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DO": () => (/* binding */ createUserAccount)
/* harmony export */ });
/* unused harmony exports googleAuthentication, getUserAccessTokenObject, getUserProfileDetails, getUserBookings, fetchUserImageUrl */
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7694);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2253);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
/* harmony import */ var _classModels_bookings_bookingDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9936);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _index__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, _index__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const googleAuthentication = async ()=>{
    try {
        const googleResponse = await signInWithPopup(auth, googleAuthProvider);
        const credential = GoogleAuthProvider.credentialFromResult(googleResponse);
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
        const docRef = doc(db, USER_COLLECTION_NAME, userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            authType = GOOGLE_LOGIN;
        } else {
            authType = GOOGLE_SIGNUP;
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
    const response = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_index__WEBPACK_IMPORTED_MODULE_2__.db, _helper__WEBPACK_IMPORTED_MODULE_1__/* .USER_COLLECTION_NAME */ .YP, userId), {
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
    const requestType = GET_USER_TOKEN_OBJECT;
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
    const docRef = doc(db, USER_COLLECTION_NAME, userAccessTokenObject.user_id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};
const getUserBookings = async (userAccessTokenObject)=>{
    const userEmailId = userAccessTokenObject.email;
    const firestore = getFirestore();
    const bookingCollectionRef = collection(firestore, USER_BOOKINGS_COLLECTION_NAME, userEmailId, BOOKED_ROOMS_COLLECTION_NAME);
    const bookingsQuerySnapshot = await getDocs(bookingCollectionRef);
    let bookingList = [];
    for (let booking of bookingsQuerySnapshot.docs){
        const bookedRoomsCollectionRef = collection(firestore, USER_BOOKINGS_COLLECTION_NAME, userEmailId, BOOKED_ROOMS_COLLECTION_NAME, booking.id, HOTEL_BOOKINGS_ROOMS_COLLECTION_NAME);
        let bookingInfo = new BookingDetails();
        let bookedRoomsList = [];
        const roomsQuerySnapshot = await getDocs(bookedRoomsCollectionRef);
        for (let room of roomsQuerySnapshot.docs){
            let roomInfo = new RoomDetails();
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