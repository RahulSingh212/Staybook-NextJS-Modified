"use strict";
(() => {
var exports = {};
exports.id = 9320;
exports.ids = [9320];
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

/***/ 9025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6075);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7694);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_1__]);
_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
 // server side cookie only https and available on the server side


async function handler(req, res) {
    const data = req.body;
    const { authType , userAccessToken , userId , userEmail , userImageUrl , displayName  } = data;
    try {
        if (authType === _lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .GOOGLE_SIGNUP */ .kr) {
            await (0,_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_1__/* .createUserAccount */ .DO)(userAccessToken, userId, userEmail, userImageUrl, "google", displayName);
        }
        const response = await res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(_lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .USER_ACCESS_TOKEN */ .HU, userAccessToken, {
            httpOnly: true,
            secure: "production" !== "development",
            maxAge: _lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_EXPIRATOIN_TIME */ .Cx,
            sameSite: "strict",
            path: "/"
        }));
        res.status(201).json({
            userCredentials: response,
            error: null,
            message: "Unable to set auth cookie!"
        });
    } catch (error) {
        console.log("User-Google-Auth-Error");
        console.log(error);
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
var __webpack_exports__ = __webpack_require__.X(0, [1418,6764], () => (__webpack_exec__(9025)));
module.exports = __webpack_exports__;

})();