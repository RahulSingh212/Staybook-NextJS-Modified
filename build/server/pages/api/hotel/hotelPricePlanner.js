"use strict";
(() => {
var exports = {};
exports.id = 9009;
exports.ids = [9009];
exports.modules = {

/***/ 1191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function handler(req, res) {
    const receivedData = req.body;
    const { hotelId , fromDate , toDate  } = receivedData;
    //   curl --location 'https://cmapi.stayflexi.com/core/apiv1/cmservice/getroomrates/?pmsId=20021&hotelId=25095&roomTypeId=12353&ratePlanId=30298&fromDate=10-03-2023%2000:00:00&toDate=21-03-2023%2000:00:00' --header 'X-SF-API-KEY: mkfegijystay5u70djld9'
    // const apiUrl = `https://cmapi.stayflexi.com/core/apiv1/cmservice/getroomrates/?pmsId=20021&hotelId=${hotelId}&roomTypeId=12353&ratePlanId=30298&fromDate=${fromDate}%2000:00:00&toDate=${toDate}%2000:00:00`;
    const apiUrl = `https://cmapi.stayflexi.com/core/apiv1/cmservice/getroomrates/?pmsId=20021&hotelId=${hotelId}&roomTypeId=12353&ratePlanId=30298&fromDate=${fromDate}%2000:00:00&toDate=${toDate}%2000:00:00`;
    const apiKey = "mkfegijystay5u70djld9";
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
            "X-SF-API-KEY": apiKey,
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    res.status(201).json({
        pricePlan: data,
        error: null,
        message: `Price Plan fetched from ${fromDate} to ${toDate}.`
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1191));
module.exports = __webpack_exports__;

})();