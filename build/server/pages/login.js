"use strict";
(() => {
var exports = {};
exports.id = 3459;
exports.ids = [3459];
exports.modules = {

/***/ 6841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthCard)
/* harmony export */ });
/* unused harmony export userEmailAuthApiHandler */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9244);
/* harmony import */ var _models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(681);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4038);
/* harmony import */ var _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8121);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_6__, _models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_6__, _models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const userEmailAuthApiHandler = async (authType, userEmail, userPassword)=>{
    const response = await fetch("/api/auth/userEmailAuth", {
        method: "POST",
        body: JSON.stringify({
            authType,
            userEmail,
            userPassword
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
};
function AuthCard(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const emailInputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const passwordInputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const confirmPasswordInputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const [loadingModelVisible, setLoadingModel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [errorModelVisible, setErrorModel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [googleLogin, setGoogleLogin] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [isLogin, setIsLogin] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const [isPasswordVisible, setPasswordVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [imgIdx, setHotelIdx] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const interval = setInterval(()=>{
            const newIdx = (imgIdx + Number(1)) % props.imagesList.length;
            setHotelIdx(newIdx);
        }, 1750);
        return ()=>clearInterval(interval);
    }, [
        imgIdx,
        props.imagesList.length
    ]);
    const googleLoginHandler = async ()=>{
        const userResponse = await (0,_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_9__/* .googleAuthentication */ .oP)();
        if (!userResponse.userCredentials && !userResponse.error) {
            setErrorMessage(String(userResponse.message));
            setErrorModel(true);
        } else if (userResponse.error) {
            console.log("User error: " + userResponse.error);
            const displayErrorMsg = await (0,_lib_helper__WEBPACK_IMPORTED_MODULE_8__/* .getErrorMessage */ .e$)("Google authentication error!");
            setErrorMessage(String(displayErrorMsg));
            setErrorModel(true);
        } else {
            setLoadingModel(true);
            router.push("/profile");
        }
    };
    const emailLoginHandler = async (event)=>{
        event.preventDefault();
        setLoadingModel(true);
        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current?.value;
        if (!isLogin && enteredPassword !== enteredConfirmPassword) {
            setLoadingModel(false);
            setErrorMessage("Password does not match!");
            setErrorModel(true);
            console.log("Entered Password does not match");
            return;
        }
        try {
            const userResponse = await userEmailAuthApiHandler(isLogin ? _lib_helper__WEBPACK_IMPORTED_MODULE_8__/* .EMAIL_LOGIN */ .Ym : _lib_helper__WEBPACK_IMPORTED_MODULE_8__/* .EMAIL_SIGNUP */ .kv, enteredEmail, enteredPassword);
            console.log("UserResponse");
            console.log(userResponse);
            if (userResponse.error) {
                setLoadingModel(false);
                setErrorModel(true);
                const displayErrorMsg = await (0,_lib_helper__WEBPACK_IMPORTED_MODULE_8__/* .getErrorMessage */ .e$)(userResponse.error.code);
                setErrorMessage(String(displayErrorMsg));
            } else {
                // setLoadingModel(false);
                router.push("/profile");
            }
        } catch (error) {
            setLoadingModel(false);
            setErrorModel(true);
            setErrorMessage("Authentication failed!");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                modelVisible: loadingModelVisible,
                setLoadingModel: setLoadingModel
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                errorMsg: errorMessage,
                setErrorMessage: setErrorMessage,
                modelVisible: errorModelVisible,
                setErrorModel: setErrorModel
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: `relative w-[90%] sm:w-[95%] sm:h-[600px] xl:w-[1150px] flex justify-between shadow-2xl rounded-2xl mt-5 p-5 bg-gray-100`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative flex flex-col w-full sm:w-[50%] h-full items-center justify-center`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative w-full mb-2`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `text-4xl font-semibold font-serif text-gray-600 text-center`,
                                    children: isLogin ? "Log-in" : "Sign-up"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative w-full mb-6`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: `font-light text-md text-red-600 text-center`,
                                    children: "Please enter your credentails"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative flex w-full align-middle items-center justify-center`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: emailLoginHandler,
                                    className: `flex flex-col w-full gap-4 align-middle items-center justify-center`,
                                    action: "",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: `p-3 rounded-xl border w-full lg:w-[80%] xl:[60%]`,
                                            type: "text",
                                            name: "email",
                                            placeholder: "Email",
                                            ref: emailInputRef
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `relative w-full lg:w-[80%] xl:[60%]`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: `p-3 rounded-xl border w-full`,
                                                    type: isPasswordVisible ? "text" : "password",
                                                    name: "password",
                                                    placeholder: "Password",
                                                    ref: passwordInputRef
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>setPasswordVisible(!isPasswordVisible),
                                                    className: `absolute right-2 rounded-full bottom-1/4 cursor-pointer`,
                                                    children: isPasswordVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.EyeIcon, {
                                                        className: `relative h-5 w-5 rounded-full`
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.EyeOffIcon, {
                                                        className: `relative h-5 w-5 rounded-full`
                                                    })
                                                })
                                            ]
                                        }),
                                        !isLogin ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `relative w-full lg:w-[80%] xl:[60%]`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    className: `p-3 rounded-xl border w-full`,
                                                    type: isConfirmPasswordVisible ? "text" : "password",
                                                    name: "password",
                                                    placeholder: "Confirm Password",
                                                    ref: confirmPasswordInputRef
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>setConfirmPasswordVisible(!isConfirmPasswordVisible),
                                                    className: `absolute right-2 rounded-full bottom-1/4 cursor-pointer`,
                                                    children: isConfirmPasswordVisible ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.EyeIcon, {
                                                        className: `relative h-5 w-5 rounded-full`
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.EyeOffIcon, {
                                                        className: `relative h-5 w-5 rounded-full`
                                                    })
                                                })
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `bg-red-600 py-3 w-[82.5%] md:w-[65%] lg:w-[55%] rounded-3xl items-center text-white font-semibold cursor-pointer shadow-md`,
                                            children: isLogin ? "Log in" : "Sign up"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative my-5 grid grid-cols-3 items-center align-middle w-full lg:w-[80%] xl:[60%] text-center`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: `border-gray-400`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-center`,
                                        children: "OR"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                        className: `border-gray-400`
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                onClick: googleLoginHandler,
                                className: "relative flex align-middle items-center justify-center bg-white p-3 w-[82.5%] md:w-[65%] lg:w-[55%] rounded-3xl font-semibold cursor-pointer shadow-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: `/google-icon.png`,
                                        alt: "icon",
                                        width: 25,
                                        height: 25,
                                        className: `mr-2`
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: `text-gray-500`,
                                        children: [
                                            isLogin ? "Log-in" : "Sign-up",
                                            " with Google"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `relative w-full lg:w-[80%] xl:[60%] my-8`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                    className: `border-gray-400`
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative flex w-full lg:w-[80%] xl:[60%] align-middle items-center justify-between`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `text-md text-gray-600`,
                                            children: isLogin ? "Create new account" : "Login to your account"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>setIsLogin(!isLogin),
                                        className: `py-1 px-5 rounded-full border-[1px] border-gray-300 bg-white cursor-pointer hover:shadow-md text-gray-500`,
                                        children: isLogin ? "Sign-up" : "Log-in"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `hidden sm:block relative w-[45%] h-full shadow-2xl rounded-lg`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: `rounded-lg`,
                                src: `${props.imagesList[imgIdx].url}`,
                                alt: "amenity-img",
                                layout: "fill",
                                objectFit: "cover"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `absolute w-full text-center top-2 bg-slate-200 px-2`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `text-2xl font-serif text-center`,
                                    children: props.imagesList[imgIdx].name
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_login_AuthCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6841);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5091);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9329);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_login_AuthCard__WEBPACK_IMPORTED_MODULE_3__, next_sanity__WEBPACK_IMPORTED_MODULE_4__, _sanity__WEBPACK_IMPORTED_MODULE_5__]);
([_components_login_AuthCard__WEBPACK_IMPORTED_MODULE_3__, next_sanity__WEBPACK_IMPORTED_MODULE_4__, _sanity__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Login(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "StayBook - Login"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: `w-screen flex justify-center align-middle items-center`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_login_AuthCard__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    imagesList: props.imagesList
                })
            })
        ]
    });
}
const getStaticProps = async (context)=>{
    const hotelImageListQuery = next_sanity__WEBPACK_IMPORTED_MODULE_4__.groq`
      *[_type == "hotel"] {
          name,
          "url":images[0].asset->url
      }
  `;
    const imagesList = await _sanity__WEBPACK_IMPORTED_MODULE_5__/* .sanityClient.fetch */ .i3.fetch(hotelImageListQuery);
    return {
        props: {
            imagesList
        }
    };
};
function jwt_decode(arg0) {
    throw new Error("Function not implemented.");
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 5567:
/***/ ((module) => {

module.exports = require("jwt-decode");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,1396,2636,5675,4038,7145,8121,7482], () => (__webpack_exec__(8368)));
module.exports = __webpack_exports__;

})();