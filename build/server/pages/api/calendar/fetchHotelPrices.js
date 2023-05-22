"use strict";
(() => {
var exports = {};
exports.id = 4692;
exports.ids = [4692];
exports.modules = {

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

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

/***/ 9425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ hotelPriceRangeMatrix)
});

// UNUSED EXPORTS: getMonth

;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
;// CONCATENATED MODULE: ./lib/calendar/calendarHandler.ts

function getMonth(year = dayjs().year(), month = dayjs().month()) {
    month = Math.floor(month);
    // const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    // console.log(new Date(year, 24, 1));
    let currentMonthCount = 0 - firstDayOfTheMonth;
    // console.log("Call " + year + " " + firstDayOfTheMonth + " " + currentMonthCount);
    const daysMatrix = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
}
const hotelPriceRangeMatrix = ()=>{
    const startDate = new Date(new Date().getFullYear(), 0, 1);
    const endDate = new Date(new Date().getFullYear() + 2, Number(11), Number(31));
    console.log(startDate.toLocaleDateString());
    console.log(endDate.toLocaleDateString());
    var threeYearPriceList = [
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ]
    ];
    for(let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)){
        var yearVal = currentDate.getFullYear(), monthVal = currentDate.getMonth(), dayVal = currentDate.getDate();
        var yearIdx = yearVal - new Date().getFullYear();
        threeYearPriceList[yearIdx][monthVal].push({
            plan_Base_Price: 0,
            plan_Child_Price: 0,
            plan_Infant_Price: 0
        });
    }
    return threeYearPriceList;
};


/***/ }),

/***/ 9779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2253);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7694);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var _lib_calendar_calendarHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    const priceList = (0,_lib_calendar_calendarHandler__WEBPACK_IMPORTED_MODULE_3__/* .hotelPriceRangeMatrix */ .i)();
    const receivedData = req.body;
    const { firebase_Hotel_Id , hotelOwnerUniqueId , hotelUniqueId , fromDate , toDate , num_guests  } = receivedData;
    // const hotelOwnerUniqueId = "WKIwkkplX4U6ECb2dqpltKlh4WD2";
    // const hotelUniqueId = "f9EVYs1fi61PbFlI5JeR";
    const startDate = new Date(Date.parse(fromDate));
    const endDate = new Date(Date.parse(toDate));
    var yearVal = startDate.getFullYear();
    var monthVal = startDate.getMonth();
    var dateVal = startDate.getDate() + 1;
    try {
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_1__/* .HOTEL_OWNERS_COLLECTION_NAME */ .Ve, hotelOwnerUniqueId, _lib_helper__WEBPACK_IMPORTED_MODULE_1__/* .AFFILIATED_COLLECTION_NAME */ .xd, hotelUniqueId, _lib_helper__WEBPACK_IMPORTED_MODULE_1__/* .HOTEL_ROOMS_COLLECTION_NAME */ .aY, `GUESTS-COUNT-${num_guests}`, _lib_helper__WEBPACK_IMPORTED_MODULE_1__/* .ROOM_PLANS_COLLECTION_NAME */ .X9);
        const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(docRef);
        let list = [];
        const hotelData = await docSnap.forEach((val)=>{
            list.push(val.data());
        });
        console.log(list);
        res.status(201).json({
            hotelPrice: list,
            error: null,
            message: "Successfully price generated!"
        });
    } catch (error) {}
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
var __webpack_exports__ = __webpack_require__.X(0, [1418], () => (__webpack_exec__(9779)));
module.exports = __webpack_exports__;

})();