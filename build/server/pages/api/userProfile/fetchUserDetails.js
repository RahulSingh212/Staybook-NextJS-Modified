"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

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

/***/ 6128:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2253);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7694);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




async function handler(req, res) {
    const receivedData = req.body;
    const { userBooking  } = receivedData;
    try {
        const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_1__.parse)(req.headers.cookie || "");
        const userAccessToken = await cookies[_lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .USER_ACCESS_TOKEN */ .HU];
        if (userAccessToken) {
            const userObj = await (0,_lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .extractJWTValues */ .xb)(userAccessToken);
            const userData = userObj;
            const user_Id = userData.user_id;
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__.db, _lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .USER_COLLECTION_NAME */ .YP, user_Id);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)(docRef);
            res.status(201).json({
                userCredentials: docSnap.data(),
                error: null,
                message: "User access token value generated!"
            });
        } else {
            res.status(201).json({
                userCredentials: null,
                error: null,
                message: "User access token does not exists!"
            });
        }
    } catch (error) {
        res.status(422).json({
            userCredentials: null,
            error,
            message: "Error occoured"
        });
    }
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
var __webpack_exports__ = __webpack_require__.X(0, [1418], () => (__webpack_exec__(6128)));
module.exports = __webpack_exports__;

})();