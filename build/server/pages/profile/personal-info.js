"use strict";
(() => {
var exports = {};
exports.id = 4359;
exports.ids = [4359];
exports.modules = {

/***/ 2689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoTile)
/* harmony export */ });
/* unused harmony export updateProfileDetailsHandler */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const updateProfileDetailsHandler = async (header, value)=>{
    const response = await fetch("/api/userProfile/updateUserDetails", {
        method: "POST",
        body: JSON.stringify({
            updateType: "",
            headerValue1: header,
            textValue1: value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    // console.log(data);
    return data;
};
function InfoTile(props) {
    const [editBtn, setEditBtn] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [inputValue, setInputValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.tileText);
    const saveTextHandler = async ()=>{
        const responseData = await updateProfileDetailsHandler(props.firebaseHeaderName, inputValue);
        setEditBtn(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative flex flex-col w-full`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `realtive flex flex-row justify-between mb-1 align-middle `,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex justify-center align-middle items-center text-left text-xl font-sans`,
                            children: props.headerText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            onClick: ()=>{
                                if (editBtn) {
                                    setInputValue(props.tileText);
                                }
                                setEditBtn(!editBtn);
                            },
                            className: `relative flex items-center p-1 rounded-3xl bg-slate-400 ${editBtn ? `px-3` : "px-5"} py-1 text-white cursor-pointer text-sm font-medium`,
                            children: editBtn ? "Cancel" : inputValue.length === 0 ? "Add" : "Edit"
                        })
                    ]
                }),
                !editBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `text-lg text-gray-500`,
                    children: inputValue.length === 0 ? "✹ Not provided ✹" : inputValue
                }),
                editBtn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex flex-col w-full`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex text-md text-gray-500 font-light`,
                            children: props.descriptionText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex my-6`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: `py-4 px-3 rounded-lg border border-gray-400 text-lg w-full md:w-[80%] xl:[60%]`,
                                type: props.inputType,
                                name: "email",
                                placeholder: props.placeHolderText,
                                value: inputValue,
                                onChange: (val)=>{
                                    setInputValue(val.target.value);
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            onClick: saveTextHandler,
                            className: `relative flex w-fit py-2 px-7 rounded-lg bg-black text-white font-medium text-lg cursor-pointer`,
                            children: "Save"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `mt-8 border-[1px] bg-gray-300`
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NameTile)
/* harmony export */ });
/* unused harmony export updateProfileDetailsHandler */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4038);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const updateProfileDetailsHandler = async (headerValue1, textValue1, headerValue2, textValue2, headerValue3, textValue3)=>{
    const response = await fetch("/api/userProfile/updateUserDetails", {
        method: "POST",
        body: JSON.stringify({
            updateType: _lib_helper__WEBPACK_IMPORTED_MODULE_3__/* .USER_UPDATE_TYPE_NAME */ .W5,
            headerValue1: headerValue1,
            textValue1: textValue1,
            headerValue2: headerValue2,
            textValue2: textValue2,
            headerValue3: headerValue3,
            textValue3: textValue3
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    // console.log(data);
    return data;
};
function NameTile(props) {
    const [editBtn, setEditBtn] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [textValue1, setTextValue1] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.firstText);
    const [textValue2, setTextValue2] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.middleText);
    const [textValue3, setTextValue3] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.lastText);
    const saveTextHandler = async ()=>{
        const responseData = await updateProfileDetailsHandler("User_First_Name", textValue1, "User_Middle_Name", textValue2, "User_Last_Name", textValue3);
        setEditBtn(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative flex flex-col w-full`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `realtive flex flex-row justify-between mb-1 align-middle `,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex justify-center align-middle items-center text-left text-xl font-sans`,
                            children: props.headerText
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            onClick: ()=>{
                                if (editBtn) {
                                    setTextValue1(props.firstText);
                                    setTextValue2(props.middleText);
                                    setTextValue3(props.lastText);
                                }
                                setEditBtn(!editBtn);
                            },
                            className: `relative flex items-center p-1 rounded-3xl bg-slate-400  ${editBtn ? `px-3` : "px-5"} py-1 text-white cursor-pointer text-sm font-medium`,
                            children: editBtn ? "Cancel" : textValue1.length === 0 && textValue2.length === 0 && textValue3.length === 0 ? "Add" : "Edit"
                        })
                    ]
                }),
                !editBtn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `text-lg text-gray-500`,
                    children: textValue1.length === 0 && textValue2.length === 0 && textValue3.length === 0 ? "✹ Not provided ✹" : `${textValue1} ${textValue2} ${textValue3}`
                }),
                editBtn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex flex-col w-full`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex text-md text-gray-500 font-light w-full`,
                            children: props.descriptionText
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex flex-col md:flex-row my-6 justify-between w-full md:w-[80%] xl:[60%]`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative md:w-[32%]`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: `py-4 px-3 rounded-lg border border-gray-400 text-lg w-full mb-2 md:mb-0`,
                                        type: props.inputType,
                                        name: "name",
                                        placeholder: props.firstNameplaceHolderText,
                                        value: textValue1,
                                        onChange: (val)=>{
                                            setTextValue1(val.target.value);
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative md:w-[32%]`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: `py-4 px-3 rounded-lg border border-gray-400 text-lg w-full mb-2 md:mb-0`,
                                        type: props.inputType,
                                        name: "name",
                                        placeholder: props.middleNameplaceHolderText,
                                        value: textValue2,
                                        onChange: (val)=>{
                                            setTextValue2(val.target.value);
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative md:w-[32%]`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: `py-4 px-3 rounded-lg border border-gray-400 text-lg w-full`,
                                        type: props.inputType,
                                        name: "name",
                                        placeholder: props.lastNameplaceHolderText,
                                        value: textValue3,
                                        onChange: (val)=>{
                                            setTextValue3(val.target.value);
                                        }
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            onClick: saveTextHandler,
                            className: `relative flex w-fit py-2 px-7 rounded-lg bg-black text-white font-medium text-lg cursor-pointer`,
                            children: "Save"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `mt-8 border-[1px] bg-gray-300`
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PersonalInformation),
/* harmony export */   "fetchHandler": () => (/* binding */ fetchHandler),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4038);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_profile_InfoTile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2689);
/* harmony import */ var _components_profile_NameTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1148);
/* harmony import */ var _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8121);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_profile_InfoTile__WEBPACK_IMPORTED_MODULE_6__, _components_profile_NameTile__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_profile_InfoTile__WEBPACK_IMPORTED_MODULE_6__, _components_profile_NameTile__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const fetchHandler = async ()=>{
    const data = await (0,_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__/* .getUserAccessTokenObject */ .Fb)();
    console.log(data);
    return data;
};
function PersonalInformation(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Personal Information"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/images/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: `w-screen flex flex-col items-center`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative flex w-[90%] mt-10`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: `text-md font-normal`,
                            children: "Profile \xa0＞\xa0 Personal info"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative flex w-[90%] mt-3`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: `text-4xl font-bold`,
                            children: "Personal info"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative flex flex-col space-y-8 w-[90%] mt-16`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_InfoTile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                firebaseHeaderName: `User_Display_Name`,
                                headerText: "Display Name",
                                tileText: props.userDetails.User_Display_Name,
                                placeHolderText: "Display Name",
                                descriptionText: "Enter your Display Name",
                                inputType: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_NameTile__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                headerText: `Legal name`,
                                firstNameplaceHolderText: `First Name`,
                                firstText: props.userDetails.User_First_Name,
                                middleNameplaceHolderText: `Middle Name`,
                                middleText: props.userDetails.User_Middle_Name,
                                lastNameplaceHolderText: `Last Name`,
                                lastText: props.userDetails.User_Last_Name,
                                descriptionText: "Enter your full name",
                                inputType: "name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_InfoTile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                firebaseHeaderName: `User_Mobile_Number`,
                                headerText: "Mobile Number",
                                tileText: props.userDetails.User_Mobile_Number,
                                placeHolderText: "Mobile Number",
                                descriptionText: "Enter your Mobile Number",
                                inputType: "number"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_InfoTile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                firebaseHeaderName: `User_Alternate_Mobile_Number`,
                                headerText: "Alt Mobile Number",
                                tileText: props.userDetails.User_Alternate_Mobile_Number,
                                placeHolderText: "Alternate Mobile Number",
                                descriptionText: "Enter your Alternate Mobile Number",
                                inputType: "number"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { personal-info: "personal-info" },
//       }
//     ],
//     // fallback: true,
//     fallback: "true",
//   };
// }
async function getServerSideProps(context) {
    const { req , res  } = context;
    const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_5__.parse)(req.headers.cookie || "");
    const userAccessToken = cookies[_lib_helper__WEBPACK_IMPORTED_MODULE_4__/* .USER_ACCESS_TOKEN */ .HU];
    const userAccessTokenObject = await (0,_lib_helper__WEBPACK_IMPORTED_MODULE_4__/* .extractJWTValues */ .xb)(userAccessToken);
    const userCollectionDoc = await (0,_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__/* .getUserProfileDetails */ .CR)(userAccessTokenObject);
    // console.log(userCollectionDoc);
    return {
        props: {
            userDetails: userCollectionDoc
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,4038,7145,8121], () => (__webpack_exec__(7386)));
module.exports = __webpack_exports__;

})();