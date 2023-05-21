(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6025:
/***/ ((module) => {

// Exports
module.exports = {
	"footerBody": "Footer_footerBody___A_HH",
	"logoCircle": "Footer_logoCircle__I0RxD",
	"line": "Footer_line__SiR9h",
	"linkCard": "Footer_linkCard___acwh",
	"heading": "Footer_heading__M3iTK",
	"noprint": "Footer_noprint__hEu_v"
};


/***/ }),

/***/ 3737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6025);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);







function Footer() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const pageHandler = (url)=>{
        router.push({
            pathname: url
        });
    };
    const hotelUrlHandler = (hotelId)=>{
        router.push({
            pathname: `/hotel/google/list/${hotelId}/`,
            query: {
                checkin: String(moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date()).format("DD-MM-YYYY")),
                num_nights: String(1),
                num_guests: String(2),
                hotel_id: String(hotelId)
            }
        });
    };
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            name: "Hotel Aira Xing by Staybook",
            hotelId: `24669`
        },
        {
            name: "Staybook Jyoti Mahal A Heritage Hotel",
            hotelId: "25095"
        },
        {
            name: "Staybook Hotel Jai Balaji New Delhi Train Station",
            hotelId: "23690"
        },
        {
            name: "Staybook Hotel Pinky Villa",
            hotelId: "23540"
        },
        {
            name: "Staybook Atlanta New Delhi Train Station",
            hotelId: "24712"
        },
        {
            name: "Staybook WoodsView Mall Road Mussorie",
            hotelId: "12348"
        },
        {
            name: "Staybook Shivdev New Delhi Railway Station",
            hotelId: ""
        },
        {
            name: "Staybook BlueSky Camp, Manali",
            hotelId: "12347"
        },
        {
            name: "Staybook@South Delhi",
            hotelId: "12349"
        },
        {
            name: "Staybook City Stories New Delhi Train Station",
            hotelId: "12346"
        },
        {
            name: "Corbett Paradiso Resort By Staybook",
            hotelId: "12345"
        }
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footerBody)} ${(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().noprint)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                    src: `/images/footerBg.svg`,
                    alt: "StayBook",
                    layout: "fill",
                    objectFit: "contain",
                    objectPosition: "left"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logoCircle),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: `/images/logo.png`,
                            alt: "StayBook",
                            layout: "fill",
                            objectFit: "contain",
                            objectPosition: "center"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().line)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "2022 \xa9 StayBook, New Delhi. All rights reserved"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "Tel: +91-8373929299",
                            children: "Ph. no: +91-8373929299"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "mailto: booking@staybook.in",
                            children: "booking@staybook.in"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkCard)} ${(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().noprint)}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().heading),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Hotels:"
                                }),
                                data.map((hotel, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `text-[#cf8f24] my-1 cursor-pointer hover:underline text-sm`,
                                        onClick: hotelUrlHandler.bind(null, hotel.hotelId),
                                        children: hotel.name
                                    }, index))
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().heading),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Socials:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "https://www.instagram.com/staybook_1/",
                                    target: "_blank",
                                    children: "Instagram"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "https://www.facebook.com/budgetfriendlyhotel?paipv=0&eav=AfZ-waWz6OajACPaAqHeTptaNS9Rt4i4iwbdVK0jE5KwoQfbZ6GsLkTVHLjTpMMeyxk",
                                    target: "_blank",
                                    children: "Facebook"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "https://twitter.com/stayboook",
                                    target: "_blank",
                                    children: "Twitter"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().heading),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Interests:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/packages",
                                    children: "Tours and Packages"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/blogs",
                                    children: "Blogs"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/aboutus",
                                    children: "About Us"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/contactUs",
                                    children: "Contact Us"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/FAQ",
                                    children: "FAQ"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().heading),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Misc:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/tnc",
                                    children: "Terms and Conditions"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/policy/privacy-policy",
                                    children: "Privacy Policy"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/policy/refund-policy",
                                    children: "Refund Policy"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/policy/general-policy",
                                    children: "General Policy"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 7953:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1835);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3737);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__]);
_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Layout(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navbar_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: props.children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3205:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FullNavbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
framer_motion__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function FullNavbar(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const hotelUrlHandler = (hotelId)=>{
        props.setFullNavbar(false);
        router.push({
            pathname: `/hotel/google/list/${hotelId}/`,
            query: {
                checkin: String(moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format("DD-MM-YYYY")),
                num_nights: String(1),
                num_guests: String(2),
                hotel_id: String(hotelId)
            }
        });
    };
    const [hotelsList, setHotelsList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([
        {
            name: "Hotel Aira Xing by Staybook",
            hotelId: `24669`
        },
        {
            name: "Staybook Jyoti Mahal A Heritage Hotel",
            hotelId: "25095"
        },
        {
            name: "Staybook Hotel Jai Balaji New Delhi Train Station",
            hotelId: "23690"
        },
        {
            name: "Staybook Hotel Pinky Villa",
            hotelId: "23540"
        },
        {
            name: "Staybook Atlanta New Delhi Train Station",
            hotelId: "24712"
        },
        {
            name: "Staybook WoodsView Mall Road Mussorie",
            hotelId: "12348"
        },
        {
            name: "Staybook Shivdev New Delhi Railway Station",
            hotelId: ""
        },
        {
            name: "Staybook BlueSky Camp, Manali",
            hotelId: "12347"
        },
        {
            name: "Staybook@South Delhi",
            hotelId: "12349"
        },
        {
            name: "Staybook City Stories New Delhi Train Station",
            hotelId: "12346"
        },
        {
            name: "Corbett Paradiso Resort By Staybook",
            hotelId: "12345"
        }
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            className: `fixed flex flex-col left-0 top-0 w-screen h-screen z-50 bg-[#fff] px-8 py-6 md:px-12 md:py-8`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `relative w-full flex justify-between mb-2 md:mb-4`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `relative flex items-center align-middle h-10 w-40 md:h-16 md:w-56 my-auto`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `/logo.png`,
                                alt: "icon",
                                layout: "fill",
                                objectFit: "contain",
                                objectPosition: "left",
                                className: ``
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>{
                                props.setFullNavbar(!props.fullNavbar);
                            },
                            className: `relative flex my-auto items-center align-middle h-8 w-8 md:h-10 md:w-10 rounded-full bg-slate-200 hover:bg-slate-300 cursor-pointer`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `/close.png`,
                                alt: "img",
                                layout: "fill",
                                objectFit: "cover",
                                className: "p-2"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `relative w-full h-full flex justify-between flex-col overflow-y-scroll md:flex-row md:flex-wrap space-y-2 no-scrollbar`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `relative flex flex-col`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `text-center font-semibold text-4xl font-serif text-gray-400 mb-3`,
                                    children: "Hotels"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `relative flex flex-col space-y-2 no-scrollbar`,
                                    children: hotelsList.map((hotel, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`,
                                            onClick: hotelUrlHandler.bind(null, hotel.hotelId),
                                            children: hotel.name
                                        }, index))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `relative flex flex-col`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `text-center font-semibold text-4xl font-serif text-gray-400 mb-3`,
                                    children: "Profile"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `relative flex flex-col space-y-2 no-scrollbar`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/profile",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`,
                                                onClick: ()=>{
                                                    props.setFullNavbar(false);
                                                },
                                                children: "Login"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/profile",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`,
                                                onClick: ()=>{
                                                    props.setFullNavbar(false);
                                                },
                                                children: "My Profile"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/profile/personal-info",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`,
                                                onClick: ()=>{
                                                    props.setFullNavbar(false);
                                                },
                                                children: "Personal Info"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/profile/my-bookings",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `text-[#cf8f24] my-1 cursor-pointer hover:underline text-md text-justify`,
                                                onClick: ()=>{
                                                    props.setFullNavbar(false);
                                                },
                                                children: "My Bookings"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `relative flex w-full py-2 mx-auto justify-center align-middle items-center`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>{
                            props.setFullNavbar(false);
                            router.push("/hotel");
                        },
                        className: `relative px-4 py-2 w-fit bg-[#cf8f24] text-white rounded-md`,
                        children: "Book Hotel"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8894:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavDropDown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function NavDropDown(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            initial: {
                opacity: 0.0
            },
            transition: {
                duration: 2.0,
                type: "spring",
                stiffness: 200
            },
            whileInView: {
                opacity: 1
            },
            className: `absolute bg-white shadow-lg border-[1px] px-2 py-2 rounded-lg mt-4 right-2 z-50 overflow-y-scroll`,
            onClick: ()=>{
                props.setDropDown(false);
            },
            children: props.dropDown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `relative flex flex-col w-full overflow-y-scroll`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/hotel`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `relative flex align-middle items-center my-auto w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `reltive flex`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `/nav-drop-down/hotels.png`,
                                            alt: "icon",
                                            width: 30,
                                            height: 30,
                                            className: `rounded-full mr-2 border-[1px] border-gray-400`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: `my-auto font-serif text-lg font-medium`,
                                            children: "Hotels"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "relative w-full p-[1px] my-1 bg-gray-200"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/packages",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `reltive flex`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `/nav-drop-down/packages.png`,
                                            alt: "icon",
                                            width: 30,
                                            height: 30,
                                            className: `rounded-full mr-2 border-[1px] border-gray-400`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: `my-auto font-serif text-lg font-medium`,
                                            children: "Tour Packages"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "relative w-full p-[1px] my-1 bg-gray-200"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/blogs",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `reltive flex`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `/nav-drop-down/blog.png`,
                                            alt: "icon",
                                            width: 30,
                                            height: 30,
                                            className: `rounded-full mr-2 border-[1px] border-gray-400`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: `my-auto font-serif text-lg font-medium`,
                                            children: "Blogs"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "relative w-full p-[1px] my-1 bg-gray-200"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/about",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `reltive flex`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `/nav-drop-down/about.png`,
                                            alt: "icon",
                                            width: 30,
                                            height: 30,
                                            className: `rounded-full mr-2 border-[1px] border-gray-400`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: `my-auto font-serif text-lg font-medium`,
                                            children: "About Us"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "relative w-full p-[1px] my-1 bg-gray-200"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/contact",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `reltive flex`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `/nav-drop-down/contact-us.png`,
                                            alt: "icon",
                                            width: 30,
                                            height: 30,
                                            className: `rounded-full mr-2 border-[1px] border-gray-400`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: `my-auto font-serif text-lg font-medium`,
                                            children: "Contact Us"
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "relative w-full p-[1px] my-1 bg-gray-300"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/login",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: `relative w-full text-left cursor-pointer hover:bg-slate-100 hover:shadow-sm px-2 py-1 rounded-md whitespace-no-wrap`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `reltive flex`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: `/nav-drop-down/my-profile.png`,
                                            alt: "icon",
                                            width: 30,
                                            height: 30,
                                            className: `rounded-full mr-2 border-[1px] border-gray-400`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: `my-auto font-serif text-lg font-medium`,
                                            children: "My Profile"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FullNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3205);
/* harmony import */ var _searchbar_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8826);
/* harmony import */ var _NavDropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8894);
/* harmony import */ var _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8121);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FullNavbar__WEBPACK_IMPORTED_MODULE_5__, _searchbar_SearchBar__WEBPACK_IMPORTED_MODULE_6__, _NavDropDown__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__]);
([_FullNavbar__WEBPACK_IMPORTED_MODULE_5__, _searchbar_SearchBar__WEBPACK_IMPORTED_MODULE_6__, _NavDropDown__WEBPACK_IMPORTED_MODULE_7__, _lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Navbar(props) {
    const [dropDown, setDropDown] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [fullNavbar, setFullNavbar] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [searchBar, setSearchBar] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const urlHandler = (url)=>{
        router.replace({
            pathname: url
        });
    };
    const [image_Url, setImage_Url] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("/user.png");
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        async function fetchData() {
            const imgUrl = await (0,_lib_firebase_userHandler__WEBPACK_IMPORTED_MODULE_8__/* .fetchUserImageUrl */ .CD)();
            if (imgUrl !== "") {
                setImage_Url(imgUrl);
            }
        }
        fetchData();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            fullNavbar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FullNavbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                fullNavbar: fullNavbar,
                setFullNavbar: setFullNavbar
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: `sticky flex justify-between items-center align-middle top-0 z-40 grid-cols-3 bg-white shadow-md py-3 px-3`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `relative flex items-center align-middle h-10 w-40 cursor-pointer my-auto`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `/logo.png`,
                                alt: "icon",
                                layout: "fill",
                                objectFit: "contain",
                                objectPosition: "left",
                                className: ``
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `relative stickey w-full items-center align-middle`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_searchbar_SearchBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: ()=>{
                                    setDropDown(!dropDown);
                                },
                                className: `flex relative space-x-2 text-gray-400 items-center align-middle cursor-pointer p-1 border-2 rounded-full shadow-sm hover:shadow-md`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.MenuIcon, {
                                        height: 30,
                                        width: 40
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: image_Url,
                                        alt: "icon",
                                        height: 30,
                                        width: 30,
                                        objectFit: "contain",
                                        objectPosition: "left",
                                        className: `rounded-full`
                                    })
                                ]
                            }),
                            dropDown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavDropDown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                dropDown: dropDown,
                                setDropDown: setDropDown
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

/***/ 8826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(886);
/* harmony import */ var react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8130);
/* harmony import */ var react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_date_range_dist_theme_default_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4304);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4038);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




 // main style file







function SearchBar(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [searchInput, setSearchInput] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [checkInDate, setCheckInDate] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Date());
    const [checkOutDate, setCheckOutDate] = react__WEBPACK_IMPORTED_MODULE_1___default().useState((0,_lib_helper__WEBPACK_IMPORTED_MODULE_10__/* .addDays */ .E4)(new Date(), 1));
    const [numberOfGuests, setNumberOfGuests] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(2);
    const [searchBarPlaceHolder, setSearchBarPlaceHolder] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("Search hotels in Delhi");
    const dateSelectionRange = {
        startDate: checkInDate,
        endDate: checkOutDate,
        key: "selection"
    };
    const rangeHandler = (selectedRange)=>{
        setCheckInDate(selectedRange.selection.startDate);
        setCheckOutDate(selectedRange.selection.endDate);
    };
    const resetSearchTextHandler = ()=>{
        setSearchInput("");
    };
    const guestNumberHandler = (action)=>{
        if (action === 1) {
            if (numberOfGuests <= 3) {
                setNumberOfGuests(numberOfGuests + 1);
            }
        } else {
            if (numberOfGuests >= 3) {
                setNumberOfGuests(numberOfGuests - 1);
            }
        }
    };
    const searchHandler = (event)=>{
        router.push({
            pathname: "/search",
            query: {
                q: String(searchInput),
                checkin: String(moment__WEBPACK_IMPORTED_MODULE_9___default()(checkInDate).format("DD-MM-YYYY")),
                checkout: String(moment__WEBPACK_IMPORTED_MODULE_9___default()(checkOutDate).format("DD-MM-YYYY")),
                num_nights: String((0,_lib_helper__WEBPACK_IMPORTED_MODULE_10__/* .getDateDifference */ .hM)(checkInDate, checkOutDate)),
                num_guests: String(numberOfGuests)
            }
        });
        resetSearchTextHandler();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] hidden md:flex flex-col justify-center items-center mx-auto`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    initial: {
                        opacity: 0.0,
                        y: -35
                    },
                    transition: {
                        duration: 2.0,
                        type: "spring",
                        stiffness: 100
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    // className={`hidden relative w-[100%] sm:flex flex-row justify-between items-center md:border-2 rounded-full py-1 px-2 md:shadow-sm hover:shadow-md`}
                    className: `relative w-[100%] flex flex-row justify-between items-center border-2 rounded-full py-1 px-2 shadow-sm hover:shadow-md`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            value: searchInput,
                            onChange: (event)=>setSearchInput(event.target.value),
                            type: "text",
                            placeholder: searchBarPlaceHolder,
                            // className={`flex-grow pl-2 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400`}
                            className: `flex-grow pl-2 bg-transparent outline-none text-md text-gray-600 placeholder-gray-400`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {
                            // className={`hidden md:inline-flex h-8 bg-red-400 text-white p-2 rounded-full cursor-pointer`}
                            className: `h-8 bg-[#cf8f24] text-white p-2 rounded-full cursor-pointer`,
                            onClick: searchHandler
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `${!searchInput ? "hidden" : "absolute"} 
          w-fit align-middle items-center justify-center mt-[500px] p-2 rounded-lg bg-slate-100 z-30`,
                    // w-fit align-middle items-center justify-center mt-[530px] p-2 rounded-lg bg-slate-100 z-50`}
                    initial: {
                        opacity: 0.0
                    },
                    transition: {
                        duration: 4.0,
                        type: "spring",
                        stiffness: 200
                    },
                    whileInView: {
                        opacity: 1.0
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `flex`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_date_range__WEBPACK_IMPORTED_MODULE_7__.DateRangePicker, {
                                ranges: [
                                    dateSelectionRange
                                ],
                                minDate: new Date(),
                                rangeColors: [
                                    "#cf8f24"
                                ],
                                onChange: rangeHandler
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex flex-row flex-between pt-2 border-b-2`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: `text-2xl font-semibold flex-grow`,
                                    children: "Number of Guests"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `flex items-center align-middle justify-center`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `p-[6px] bg-gray-300 rounded-full mr-3 cursor-pointer`,
                                            onClick: ()=>guestNumberHandler(-1),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                alt: "icon",
                                                src: `/minus-icon.png`,
                                                width: "10",
                                                height: "10"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_6__.UsersIcon, {
                                            className: `h-6`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            "aria-label": "Search",
                                            onChange: (e)=>{},
                                            type: "number",
                                            value: numberOfGuests,
                                            min: 2,
                                            max: 4,
                                            className: `w-8 text-lg ml-2 text-right outline-none text-[#cf8f24]`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `p-[6px] bg-gray-300 rounded-full ml-3 cursor-pointer`,
                                            onClick: ()=>guestNumberHandler(1),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                alt: "icon",
                                                src: `/plus-icon.png`,
                                                width: "10",
                                                height: "10"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex pt-2`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `flex-grow text-gray-500`,
                                    onClick: resetSearchTextHandler,
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: `flex-grow text-[#cf8f24]`,
                                    onClick: searchHandler,
                                    children: "Search"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_colors_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7509);
/* harmony import */ var _styles_colors_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_colors_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_HotelCarousel_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8828);
/* harmony import */ var _styles_HotelCarousel_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_HotelCarousel_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7953);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5191);
/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__]);
_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const progress = new (_badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_6___default())({
    size: 4,
    color: "#FE595E",
    className: "z-100",
    delay: 100
});
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on("routeChangeStart", progress.start);
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on("routeChangeComplete", progress.finish);
next_router__WEBPACK_IMPORTED_MODULE_4___default().events.on("routeChangeError", progress.finish);
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 886:
/***/ (() => {



/***/ }),

/***/ 8130:
/***/ (() => {



/***/ }),

/***/ 8828:
/***/ (() => {



/***/ }),

/***/ 7509:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 5191:
/***/ ((module) => {

"use strict";
module.exports = require("@badrap/bar-of-progress");

/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 5567:
/***/ ((module) => {

"use strict";
module.exports = require("jwt-decode");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4304:
/***/ ((module) => {

"use strict";
module.exports = require("react-date-range");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,1396,2636,5675,29,1664,4038,7145,8121], () => (__webpack_exec__(4178)));
module.exports = __webpack_exports__;

})();