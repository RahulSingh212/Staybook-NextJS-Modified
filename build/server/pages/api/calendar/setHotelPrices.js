"use strict";
(() => {
var exports = {};
exports.id = 4043;
exports.ids = [4043];
exports.modules = {

/***/ 397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
async function handler(req, res) {
    const receivedData = req.body;
    const { firebase_Hotel_Id , hotelOwnerUniqueId , hotelUniqueId , selectedDate , num_guests , roomPlanUniqueId , plan_Base_Price , plan_Child_Price , plan_Infant_Price  } = receivedData;
    var yearVal = selectedDate.getFullYear();
    var monthVal = selectedDate.getMonth();
    var dateVal = selectedDate.getDate() + 1;
    console.log(yearVal + " " + monthVal + " " + dateVal);
// try {
//   const docRef = doc(
//     db,
//     HOTEL_OWNERS_COLLECTION_NAME,
//     hotelOwnerUniqueId,
//     AFFILIATED_COLLECTION_NAME,
//     hotelUniqueId,
//     HOTEL_ROOMS_COLLECTION_NAME,
//     `GUEST-COUNT-${num_guests}`,
//     ROOM_PLANS_COLLECTION_NAME,
//     roomPlanUniqueId,
//     ROOM_PRICE_PLANNER_COLLECTION_NAME,
//     `${yearVal}`,
//     `${MONTH_NAME_LIST[monthVal]}`,
//     `${dateVal}`
//   );
//   const response = await updateDoc(docRef, {
//     plan_Base_Price: plan_Child_Price,
//     plan_Child_Price: plan_Child_Price,
//     plan_Infant_Price: plan_Infant_Price,
//   });
//   res.status(201).json({
//     userCredentials: response,
//     error: null,
//     message: "User access token value generated!",
//   });
// } catch (error) {}
}



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(397));
module.exports = __webpack_exports__;

})();