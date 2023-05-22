"use strict";
(() => {
var exports = {};
exports.id = 5150;
exports.ids = [5150];
exports.modules = {

/***/ 4871:
/***/ ((module) => {

module.exports = require("razorpay");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const Razorpay = __webpack_require__(4871);
const shortid = __webpack_require__(5031);
async function handler(req, res) {
    const receivedData = req.body;
    const { userBooking  } = receivedData;
    if (req.method === "POST") {
        // Initialize razorpay object
        const razorpay = new Razorpay({
            key_id: "rzp_live_VtMYXe2BzOEbRN",
            key_secret: "BzvQt2yLjo9SmwNAisWljZdx"
        });
        // Create an order -> generate the OrderID -> Send it to the Front-end
        const payment_capture = 1;
        const amount = userBooking.total_Price.toFixed(2);
        // const amount = 1;
        const currency = "INR";
        const options = {
            amount: (amount * 100).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture
        };
        try {
            const response = await razorpay.orders.create(options);
            res.status(200).json({
                id: response.id,
                currency: response.currency,
                amount: response.amount,
                error: null
            });
        } catch (err) {
            console.log(err);
            res.status(400).json({
                id: null,
                curreny: null,
                amount: null,
                error: err
            });
        }
    } else {
    // Handle any other HTTP method
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(302));
module.exports = __webpack_exports__;

})();