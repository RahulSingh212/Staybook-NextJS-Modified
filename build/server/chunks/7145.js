"use strict";
exports.id = 7145;
exports.ids = [7145];
exports.modules = {

/***/ 7160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ BookingDetails)
/* harmony export */ });
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4038);

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
        this.checkout_Time = (0,_lib_helper__WEBPACK_IMPORTED_MODULE_0__/* .addDays */ .E4)(new Date(), 1);
        this.razorpay_Payment_Id = "";
        this.razorpay_Order_Id = "";
        this.razorpay_Signature_Id = "";
        this.receipt_Id = "";
    }
}


/***/ }),

/***/ 9834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ RoomDetails)
/* harmony export */ });
class RoomDetails {
    constructor(room_Id = "", room_Name = "", room_Info = "", room_Count = 1, plan_Id = "", plan_Name = "", plan_Info = "", plan_Price = 0.0, num_Guests = 0, num_Children = 0, num_Infants = 0){
        this.room_Id = room_Id;
        this.room_Name = room_Name;
        this.room_Info = room_Info;
        this.room_Count = room_Count;
        this.plan_Id = plan_Id;
        this.plan_Name = plan_Name;
        this.plan_Info = plan_Info;
        this.plan_Price = plan_Price;
        this.num_Guests = num_Guests;
        this.num_Children = num_Children;
        this.num_Infants = num_Infants;
    }
    compareRooms(room) {
        if (this.room_Id === room.room_Id && this.room_Name === room.room_Name && this.room_Info === room.room_Info && this.plan_Id === room.plan_Id && this.plan_Name === room.plan_Name && this.plan_Info === room.plan_Info && this.plan_Price === room.plan_Price && this.num_Guests === room.num_Guests && this.num_Children === room.num_Children && this.num_Infants === room.num_Infants) {
            return true;
        } else {
            return false;
        }
    }
}


/***/ }),

/***/ 9819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "q": () => (/* binding */ googleAuthProvider)
/* harmony export */ });
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

/***/ })

};
;