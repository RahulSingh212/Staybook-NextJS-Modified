"use strict";
<<<<<<< HEAD
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/booking/razorpay";
exports.ids = ["pages/api/booking/razorpay"];
exports.modules = {

/***/ "razorpay":
/*!***************************!*\
  !*** external "razorpay" ***!
  \***************************/
=======
(() => {
var exports = {};
exports.id = 5150;
exports.ids = [5150];
exports.modules = {

/***/ 4871:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("razorpay");

/***/ }),

<<<<<<< HEAD
/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
=======
/***/ 5031:
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
/***/ ((module) => {

module.exports = require("shortid");

/***/ }),

<<<<<<< HEAD
/***/ "(api)/./pages/api/booking/razorpay.ts":
/*!***************************************!*\
  !*** ./pages/api/booking/razorpay.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst Razorpay = __webpack_require__(/*! razorpay */ \"razorpay\");\nconst shortid = __webpack_require__(/*! shortid */ \"shortid\");\nasync function handler(req, res) {\n    const receivedData = req.body;\n    const { userBooking  } = receivedData;\n    if (req.method === \"POST\") {\n        // Initialize razorpay object\n        const razorpay = new Razorpay({\n            key_id: \"rzp_live_VtMYXe2BzOEbRN\",\n            key_secret: \"BzvQt2yLjo9SmwNAisWljZdx\"\n        });\n        // Create an order -> generate the OrderID -> Send it to the Front-end\n        const payment_capture = 1;\n        const amount = Math.round(userBooking.total_Price);\n        // const amount = 1;\n        const currency = \"INR\";\n        const options = {\n            amount: (amount * 100).toString(),\n            currency,\n            receipt: shortid.generate(),\n            payment_capture\n        };\n        try {\n            const response = await razorpay.orders.create(options);\n            res.status(200).json({\n                id: response.id,\n                currency: response.currency,\n                amount: response.amount,\n                error: null\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(400).json({\n                id: null,\n                curreny: null,\n                amount: null,\n                error: err\n            });\n        }\n    } else {\n    // Handle any other HTTP method\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9va2luZy9yYXpvcnBheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUMsMEJBQVU7QUFDbkMsTUFBTUMsVUFBVUQsbUJBQU9BLENBQUMsd0JBQVM7QUFFbEIsZUFBZUUsUUFBUUMsR0FBUSxFQUFFQyxHQUFRLEVBQUU7SUFDeEQsTUFBTUMsZUFBZUYsSUFBSUcsSUFBSTtJQUM3QixNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHRjtJQUV4QixJQUFJRixJQUFJSyxNQUFNLEtBQUssUUFBUTtRQUN6Qiw2QkFBNkI7UUFDN0IsTUFBTUMsV0FBVyxJQUFJVixTQUFTO1lBQzVCVyxRQUFRQyx5QkFBb0M7WUFDNUNHLFlBQVlILDBCQUF1QztRQUNyRDtRQUVBLHNFQUFzRTtRQUN0RSxNQUFNSyxrQkFBa0I7UUFDeEIsTUFBTUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDWixZQUFZYSxXQUFXO1FBQ2pELG9CQUFvQjtRQUNwQixNQUFNQyxXQUFXO1FBQ2pCLE1BQU1DLFVBQVU7WUFDZEwsUUFBUSxDQUFDQSxTQUFTLEdBQUUsRUFBR00sUUFBUTtZQUMvQkY7WUFDQUcsU0FBU3ZCLFFBQVF3QixRQUFRO1lBQ3pCVDtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1VLFdBQVcsTUFBTWpCLFNBQVNrQixNQUFNLENBQUNDLE1BQU0sQ0FBQ047WUFDOUNsQixJQUFJeUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLElBQUlMLFNBQVNLLEVBQUU7Z0JBQ2ZWLFVBQVVLLFNBQVNMLFFBQVE7Z0JBQzNCSixRQUFRUyxTQUFTVCxNQUFNO2dCQUN2QmUsT0FBTyxJQUFJO1lBQ2I7UUFDRixFQUFFLE9BQU9DLEtBQUs7WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaN0IsSUFBSXlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxJQUFJLElBQUk7Z0JBQ1JLLFNBQVMsSUFBSTtnQkFDYm5CLFFBQVEsSUFBSTtnQkFDWmUsT0FBT0M7WUFDVDtRQUNGO0lBQ0YsT0FBTztJQUNMLCtCQUErQjtJQUNqQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXlib29rLW1vZGlmaWVkLy4vcGFnZXMvYXBpL2Jvb2tpbmcvcmF6b3JwYXkudHM/MTZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSYXpvcnBheSA9IHJlcXVpcmUoXCJyYXpvcnBheVwiKTtcbmNvbnN0IHNob3J0aWQgPSByZXF1aXJlKFwic2hvcnRpZFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IGFueSwgcmVzOiBhbnkpIHtcbiAgY29uc3QgcmVjZWl2ZWREYXRhID0gcmVxLmJvZHk7XG4gIGNvbnN0IHsgdXNlckJvb2tpbmcgfSA9IHJlY2VpdmVkRGF0YTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICAvLyBJbml0aWFsaXplIHJhem9ycGF5IG9iamVjdFxuICAgIGNvbnN0IHJhem9ycGF5ID0gbmV3IFJhem9ycGF5KHtcbiAgICAgIGtleV9pZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFaT1JQQVlfS0VZLFxuICAgICAga2V5X3NlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkFaT1JQQVlfU0VDUkVULFxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIGFuIG9yZGVyIC0+IGdlbmVyYXRlIHRoZSBPcmRlcklEIC0+IFNlbmQgaXQgdG8gdGhlIEZyb250LWVuZFxuICAgIGNvbnN0IHBheW1lbnRfY2FwdHVyZSA9IDE7XG4gICAgY29uc3QgYW1vdW50ID0gTWF0aC5yb3VuZCh1c2VyQm9va2luZy50b3RhbF9QcmljZSk7XG4gICAgLy8gY29uc3QgYW1vdW50ID0gMTtcbiAgICBjb25zdCBjdXJyZW5jeSA9IFwiSU5SXCI7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGFtb3VudDogKGFtb3VudCAqIDEwMCkudG9TdHJpbmcoKSxcbiAgICAgIGN1cnJlbmN5LFxuICAgICAgcmVjZWlwdDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICAgICAgcGF5bWVudF9jYXB0dXJlLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByYXpvcnBheS5vcmRlcnMuY3JlYXRlKG9wdGlvbnMpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICBpZDogcmVzcG9uc2UuaWQsXG4gICAgICAgIGN1cnJlbmN5OiByZXNwb25zZS5jdXJyZW5jeSxcbiAgICAgICAgYW1vdW50OiByZXNwb25zZS5hbW91bnQsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgY3VycmVueTogbnVsbCxcbiAgICAgICAgYW1vdW50OiBudWxsLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJhem9ycGF5IiwicmVxdWlyZSIsInNob3J0aWQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVjZWl2ZWREYXRhIiwiYm9keSIsInVzZXJCb29raW5nIiwibWV0aG9kIiwicmF6b3JwYXkiLCJrZXlfaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUkFaT1JQQVlfS0VZIiwia2V5X3NlY3JldCIsIk5FWFRfUFVCTElDX1JBWk9SUEFZX1NFQ1JFVCIsInBheW1lbnRfY2FwdHVyZSIsImFtb3VudCIsIk1hdGgiLCJyb3VuZCIsInRvdGFsX1ByaWNlIiwiY3VycmVuY3kiLCJvcHRpb25zIiwidG9TdHJpbmciLCJyZWNlaXB0IiwiZ2VuZXJhdGUiLCJyZXNwb25zZSIsIm9yZGVycyIsImNyZWF0ZSIsInN0YXR1cyIsImpzb24iLCJpZCIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/booking/razorpay.ts\n");
=======
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

>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
<<<<<<< HEAD
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/booking/razorpay.ts"));
=======
var __webpack_exports__ = (__webpack_exec__(302));
>>>>>>> 457ea5980aae4ccf7fcb5dbad33e7633f070ced0
module.exports = __webpack_exports__;

})();