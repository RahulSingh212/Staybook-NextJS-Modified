"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 3162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);



function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "https://checkout.razorpay.com/v1/checkout.ts"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              (function() {
                var options = {
                  key: '${"BzvQt2yLjo9SmwNAisWljZdx"}',
                  name: 'Rahul Singh',
                  description: 'YOUR_DESCRIPTION',
                  image: 'https://lh3.googleusercontent.com/a/AEdFTp65wOTrRfPJH4y-cXtcNYNw6kbbrjkhQAEpWljMyw=s96-c',
                  handler: function(response) {
                    console.log(response);
                  },
                  prefill: {
                    name: 'Rahul Singh',
                    email: 'rahulsinghrs174326@gmail.com',
                    contact: '7543041204',
                  },
                  notes: {
                    address: 'New Delhi',
                  },
                  theme: {
                    color: 'blue',
                  },
                };
                if (typeof window !== 'undefined' && typeof window.Razorpay === 'undefined') {
                  var script = document.createElement('script');
                  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                  script.async = true;
                  script.onload = function() {
                    var Razorpay = new window.Razorpay(options);
                    Razorpay.on('payment.failed', function(response) {
                      console.log(response.error.code);
                      console.log(response.error.description);
                      console.log(response.error.source);
                      console.log(response.error.step);
                      console.log(response.error.reason);
                      console.log(response.error.metadata.order_id);
                      console.log(response.error.metadata.payment_id);
                    });
                    window.Razorpay = Razorpay;
                  }
                  document.body.appendChild(script);
                } else if (typeof window !== 'undefined' && typeof window.Razorpay !== 'undefined') {
                  var Razorpay = new window.Razorpay(options);
                  Razorpay.on('payment.failed', function(response) {
                    console.log(response.error.code);
                    console.log(response.error.description);
                    console.log(response.error.source);
                    console.log(response.error.step);
                    console.log(response.error.reason);
                    console.log(response.error.metadata.order_id);
                    console.log(response.error.metadata.payment_id);
                  });
                  window.Razorpay = Razorpay;
                }
              })();
            `
                        }
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,1396,29,1803], () => (__webpack_exec__(3162)));
module.exports = __webpack_exports__;

})();