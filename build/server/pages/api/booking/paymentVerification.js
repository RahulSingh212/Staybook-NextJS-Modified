"use strict";
(() => {
var exports = {};
exports.id = 4707;
exports.ids = [4707];
exports.modules = {

/***/ 4871:
/***/ ((module) => {

module.exports = require("razorpay");

/***/ }),

/***/ 5031:
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

/***/ 8933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "razorpayInstance": () => (/* binding */ razorpayInstance)
/* harmony export */ });
const Razorpay = __webpack_require__(4871);
const shortid = __webpack_require__(5031);
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_API_ID,
    key_secret: process.env.RAZORPAY_API_SECRET_KEY
});
async function handler(req, res) {
    const receivedData = req.body;
    const { orderCredentails , userBooking  } = receivedData;
    try {
    // res.status(201).json({
    //   paymentCredentails: options,
    //   error: null,
    //   message: "User payment successful.",
    // });
    } catch (error) {
        console.log(error);
        res.status(422).json({
            paymentCredentails: null,
            error,
            message: "Error occoured"
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8933));
module.exports = __webpack_exports__;

})();