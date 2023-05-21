"use strict";
(() => {
var exports = {};
exports.id = 110;
exports.ids = [110];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 61:
/***/ ((module) => {

module.exports = import("@firebase/auth");;

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

/***/ 4914:
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
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, _firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_firebase__WEBPACK_IMPORTED_MODULE_0__, _firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

 // server side cookie only https and available on the server side



async function handler(req, res) {
    // req.body.token
    // const serverResponse = NextResponse.next();
    const data = req.body;
    const { authType , userEmail , userPassword  } = data;
    if (!userEmail || !userEmail.includes("@") || !userEmail.includes(".") || !userPassword || userPassword.trim().length < 7 || userPassword.includes(" ")) {
        res.status(422).json({
            userCredentials: null,
            error: null,
            message: "Invalid input - password must be at least 7 characters"
        });
        return;
    }
    try {
        if (authType === _lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .EMAIL_SIGNUP */ .kv) {
            const response = await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I, userEmail, userPassword);
            const userAccessToken = await response.user.getIdToken();
            const userId = response.user.uid;
            const displayName = userEmail.split("@")[0];
            await (0,_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_4__/* .createUserAccount */ .DO)(userAccessToken, userId, userEmail, "", "email", displayName);
            res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize(_lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .USER_ACCESS_TOKEN */ .HU, userAccessToken, {
                httpOnly: true,
                secure: "production" !== "development",
                maxAge: _lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_EXPIRATOIN_TIME */ .Cx,
                sameSite: "strict",
                path: "/"
            }));
            res.status(201).json(response);
        } else {
            const response = await (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_lib_firebase__WEBPACK_IMPORTED_MODULE_0__/* .auth */ .I, userEmail, userPassword);
            const userAccessToken = await response.user.getIdToken();
            res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize(_lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .USER_ACCESS_TOKEN */ .HU, userAccessToken, {
                httpOnly: true,
                secure: "production" !== "development",
                maxAge: _lib_helper__WEBPACK_IMPORTED_MODULE_2__/* .COOKIE_EXPIRATOIN_TIME */ .Cx,
                sameSite: "strict",
                path: "/"
            }));
            res.status(201).json(response);
        }
    } catch (error) {
        console.log(error);
        res.status(422).json({
            userCredentials: null,
            error,
            message: "Error occoured"
        });
    }
    // res.status(201).json({ message: queryOutput });
    return;
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
var __webpack_exports__ = __webpack_require__.X(0, [1418,6764], () => (__webpack_exec__(4914)));
module.exports = __webpack_exports__;

})();