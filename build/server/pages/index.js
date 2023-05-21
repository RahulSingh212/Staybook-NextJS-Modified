"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 8851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HotelCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9329);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_sanity__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function HotelCarousel(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [hotelIdx, setHotelIdx] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const bookHotelHandler = ()=>{
        router.push({
            pathname: `/hotel/google/list/${props.hotelsList[hotelIdx].id}/`,
            query: {
                checkin: String(moment__WEBPACK_IMPORTED_MODULE_5___default()(new Date()).format("DD-MM-YYYY")),
                num_nights: String(1),
                num_guests: String(2),
                hotel_id: String(props.hotelsList[hotelIdx].id)
            }
        });
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const interval = setInterval(()=>{
            const newIdx = (hotelIdx + Number(1)) % props.hotelsList.length;
            setHotelIdx(newIdx);
        }, 2000);
        return ()=>clearInterval(interval);
    }, [
        hotelIdx,
        props.hotelsList.length
    ]);
    const selectHotelCardHandler = (selectedIndex)=>{
        setHotelIdx(selectedIndex);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `flex flex-col w-screen mb-16`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                    onClick: bookHotelHandler,
                    initial: {
                        opacity: 0.0,
                        y: -35
                    },
                    transition: {
                        duration: 1.0,
                        type: "spring",
                        stiffness: 100
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    className: `relative w-screen h-full md:h-[700px] lg:h-[500px] flex flex-col md:flex-row justify-center items-center px-5 pt-5 pb-8 cursor-pointer`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `relative flex flex-col items-center justify-center w-[80%] h-56 sm:w-[70%] sm:h-64 md:w-1/2 md:h-full`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `relative z-20 w-[100%] h-[100%] md:w-[70%] md:h-[60%] lg:w-[75%] lg:h-[65%] mr-10 mb-10 md:mr-16 md:mb-16 lg:mr-28 lg:mb-24 rounded-lg`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__/* .urlFor */ .uH)(props.hotelsList[hotelIdx].image_Url[0]).url(),
                                        alt: "icon",
                                        layout: "fill",
                                        // objectFit="contain"
                                        objectPosition: "center",
                                        className: `rounded-lg drop-shadow-xl`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `absolute z-10 w-[100%] h-[100%] md:w-[70%] md:h-[60%] lg:w-[75%] lg:h-[65%] ml-10 mt-10 md:ml-16 md:mt-16 lg:ml-28 lg:mt-24 rounded-lg`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: (0,_sanity__WEBPACK_IMPORTED_MODULE_3__/* .urlFor */ .uH)(props.hotelsList[hotelIdx].image_Url[1]).url(),
                                        alt: "icon",
                                        layout: "fill",
                                        // objectFit="contain"
                                        objectPosition: "center",
                                        className: `rounded-lg drop-shadow-xl`
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex flex-col items-center justify-center w-[100%] md:w-[50%] h-[100%] mt-8`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `py-5 px-2`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: `text-3xl sm:text-4xl text-center font-serif`,
                                        children: props.hotelsList[hotelIdx].hotel_Name
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `text-justify py-5 px-2 sm:px-5 font-light text-[#6d6d6d]`,
                                    children: props.hotelsList[hotelIdx].description
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `relative flex flex-row items-center justify-center align-middle mb-5`,
                    children: props.hotelsList.map((hotel, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `flex flex-row items-center align-middle`,
                            children: index === hotelIdx ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectedHotelRing, {
                                hotel_Name: hotel.hotel_Name
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HotelRing, {
                                hotelIndex: index,
                                setHotelIdx: setHotelIdx,
                                hotel_Name: hotel.hotel_Name
                            })
                        }, hotel._id))
                })
            ]
        })
    });
}
const SelectedHotelRing = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `items-center`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `border-2 border-red-600 z-1 bg-red-600 rounded-full mx-1 sm:mx-3 md:mx-4 cursor-pointer`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `p-1 z-2 rounded-full bg-white`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `items-center p-2 z-3 rounded-full bg-red-600`
                    })
                })
            })
        })
    });
};
const HotelRing = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `items-center p-2 z-3 mx-1 sm:mx-3 md:mx-4 rounded-full bg-red-600 cursor-pointer`,
            onClick: (event)=>props.setHotelIdx(props.hotelIndex)
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HotelRegions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_RegionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_widgets_RegionCard__WEBPACK_IMPORTED_MODULE_2__]);
_widgets_RegionCard__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const boxVariant = {
    visible: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 1
        }
    },
    hidden: {
        opacity: 0,
        translateX: "15"
    }
};
function HotelRegions(props) {
    const [hotelRegionIdx, setHotelRegionIdx] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const interval = setInterval(()=>{
            const newIdx = (hotelRegionIdx + Number(1)) % props.hotelRegionsList.length;
            setHotelRegionIdx(newIdx);
        }, 5000);
        return ()=>clearInterval(interval);
    }, [
        hotelRegionIdx,
        props.hotelRegionsList.length
    ]);
    const selectHotelRegionCardHandler = (selectedIndex)=>{
        setHotelRegionIdx(selectedIndex);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `relative flex flex-col justify-evenly items-center align-middle mx-w-full mb-16`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `flex flex-col justify-center items-center align-middle pb-4`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `text-5xl sm:text-6xl md:text-7xl text-center px-5 font-serif`,
                        children: "Hotel Regions"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `relative w-[90%] flex space-x-8 overflow-x-scroll my-2 scrollbar-hide no-scrollbar`,
                    children: props.hotelRegionsList.map((hr)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets_RegionCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            hotelRegion: hr
                        }, hr._id))
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SpeacialOffers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SpeacialOffers(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative flex flex-col items-center justify-center align-middle w-screen h-screen mb-16`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `flex justify-center items-center align-middle pb-6`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {
                        initial: {
                            opacity: 0.0,
                            y: 30
                        },
                        transition: {
                            duration: 2.0,
                            type: "spring"
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        className: `text-5xl sm:text-6xl md:text-7xl text-center pb-5 font-serif`,
                        children: "Special Offers"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `relative flex items-center justify-center align-middle w-[90%] h-[90%] rounded-full px-4`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                            src: `/specialOffers-background.png`,
                            alt: "icon",
                            layout: "fill",
                            // objectFit="contain"
                            objectPosition: "center",
                            className: `rounded-3xl drop-shadow-xl`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `absolute flex flex-col items-center justify-evenly w-[90%] h-[70%] md:w-[80%] md:h-[60%] lg:w-[65%] lg:h-[45%] bg-slate-100 rounded-[50px] opacity-90`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {
                                        initial: {
                                            opacity: 0.0,
                                            y: 30
                                        },
                                        transition: {
                                            duration: 2.0,
                                            type: "spring"
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: `text-4xl text-center`,
                                        children: "Get Best Price GUARANTEED!"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col align-middle items-center text-center px-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                                            initial: {
                                                opacity: 0.0,
                                                y: 40
                                            },
                                            transition: {
                                                duration: 3.0,
                                                type: "spring"
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            className: `text-center text-[20px] text-[#6d6d6d]`,
                                            children: "We can help you fit your stay and experience within your alloted budget."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `p-2`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: `/contact`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                                                    initial: {
                                                        opacity: 0.0,
                                                        y: 50
                                                    },
                                                    transition: {
                                                        duration: 3.0,
                                                        type: "spring"
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    className: `text-4xl text-center cursor-pointer text-red-500 hover:text-red-700`,
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
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

/***/ 2907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ToursAndTravels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ToursAndTravels(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            initial: {
                opacity: 0.0,
                y: 35
            },
            transition: {
                duration: 2.0,
                type: "spring"
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            className: `relative flex flex-col w-screen top-0 items-center justify-center mb-16`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `relative w-[90%] h-[400px] md:h-[450px] lg:h-[550px] rounded-b-full`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: "/background.jpg",
                        alt: "tours and travels",
                        layout: "fill",
                        objectPosition: "center",
                        className: `relative rounded-b-[180px] bg-red-500 h-fit`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    initial: {
                        opacity: 0.0,
                        y: 30
                    },
                    transition: {
                        duration: 2.0,
                        type: "spring"
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    className: `relative w-[90%] flex items-center justify-center align-middle text-center py-2 md:py-4`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `text-5xl sm:text-6xl md:text-7xl text-center font-serif`,
                        children: "Tours and Travels"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    initial: {
                        opacity: 0.0,
                        y: 30
                    },
                    transition: {
                        duration: 2.0,
                        type: "spring"
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    className: `relative w-[90%] flex items-center justify-center align-middle text-center text-[#6d6d6d] text-2xl py-4`,
                    children: "Staybook offers customised family trips tailored to the needs of any family, large or small, with youngsters or the elderly. It is a fantastic chance to spend quality time together in a fantastic location."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: `/packages`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        initial: {
                            opacity: 0.0,
                            y: 30
                        },
                        transition: {
                            duration: 2.0,
                            type: "spring"
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        className: `relative flex items-center justify-center align-middle text-center text-lg border-2 rounded-lg px-16 py-5 border-[#cf8f24] hover:bg-[#cf8f24] cursor-pointer`,
                        children: "Find More"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5091);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9329);
/* harmony import */ var _components_hotelsSlideView_HotelCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8851);
/* harmony import */ var _components_regions_HotelRegions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5393);
/* harmony import */ var _components_screens_home_ToursAndTravels__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2907);
/* harmony import */ var _components_screens_home_SpecialOffers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_3__, _sanity__WEBPACK_IMPORTED_MODULE_4__, _components_hotelsSlideView_HotelCarousel__WEBPACK_IMPORTED_MODULE_5__, _components_regions_HotelRegions__WEBPACK_IMPORTED_MODULE_6__, _components_screens_home_ToursAndTravels__WEBPACK_IMPORTED_MODULE_7__, _components_screens_home_SpecialOffers__WEBPACK_IMPORTED_MODULE_8__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_3__, _sanity__WEBPACK_IMPORTED_MODULE_4__, _components_hotelsSlideView_HotelCarousel__WEBPACK_IMPORTED_MODULE_5__, _components_regions_HotelRegions__WEBPACK_IMPORTED_MODULE_6__, _components_screens_home_ToursAndTravels__WEBPACK_IMPORTED_MODULE_7__, _components_screens_home_SpecialOffers__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";






function Home(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "StayBook"
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
                className: `mx-auto`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "hotels",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotelsSlideView_HotelCarousel__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            hotelsList: props.hotelsList
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "regions",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_regions_HotelRegions__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            hotelRegionsList: props.hotelRegionsList
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "tnt",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_screens_home_ToursAndTravels__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        id: "offers",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_screens_home_SpecialOffers__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const hotelsListQuery = next_sanity__WEBPACK_IMPORTED_MODULE_3__.groq`
    *[_type == "hotel"] | order(order asc) {
      "hotel_Name":name,
      _id,
      id,
      "hotel_Id":id,
      description,
      "image_Url":images[][0...2].asset->url,
      "slug_Name": slug.current,
    }
  `;
    const hotelRegionsListQuery = next_sanity__WEBPACK_IMPORTED_MODULE_3__.groq`
    *[_type == "navoptions"]{
      _id,
      id,
      name,
      "slug_Name": slug.current,
      "image_Url": image.asset->url
    }
  `;
    const hotelsList = await _sanity__WEBPACK_IMPORTED_MODULE_4__/* .sanityClient.fetch */ .i3.fetch(hotelsListQuery);
    const hotelRegionsList = await _sanity__WEBPACK_IMPORTED_MODULE_4__/* .sanityClient.fetch */ .i3.fetch(hotelRegionsListQuery);
    return {
        props: {
            hotelsList,
            hotelRegionsList
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

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

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [5893,1396,2636,5675,29,1664,6626], () => (__webpack_exec__(2603)));
module.exports = __webpack_exports__;

})();