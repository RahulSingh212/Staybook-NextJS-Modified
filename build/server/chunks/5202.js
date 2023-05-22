"use strict";
exports.id = 5202;
exports.ids = [5202];
exports.modules = {

/***/ 8012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HotelCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function HotelCard(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [imageIndex, setImageIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const previousImageHandler = (event)=>{
        event.stopPropagation();
        if (imageIndex === 0) {
            setImageIndex(props.hotelInfo.hotel_Img_List.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };
    const nextImageHandler = (event)=>{
        event.stopPropagation();
        setImageIndex((imageIndex + 1) % props.hotelInfo.hotel_Img_List.length);
    };
    const bookHotelHandler = ()=>{
        router.push({
            pathname: `/hotel/google/list/${props.hotel_Id}/`,
            query: {
                checkin: String(moment__WEBPACK_IMPORTED_MODULE_5___default()(props.checkin).format("DD-MM-YYYY")),
                num_nights: String(props.num_nights),
                num_guests: String(props.num_guests),
                hotel_id: String(props.hotel_Id)
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            onClick: bookHotelHandler,
            className: `relative flex flex-col sm:flex-row mx-2 md:mx-4 xl:mx-8 my-2 p-3 rounded-2xl bg-white hover:bg-slate-100 shadow-md hover:shadow-lg cursor-pointer`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex flex-row h-72 w-[100%] sm:h-80 sm:w-[45%] md:h-80 md:w-[40%] lg:h-72 lg:w-96 xl:h-80 xl:w-[480px] flex-shrink-0 mr-2 md:mr-4 xl:mr-6`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            onClick: bookHotelHandler,
                            initial: {
                                opacity: 0.5
                            },
                            transition: {
                                duration: 1.0,
                                type: "spring"
                            },
                            whileHover: {
                                opacity: 1
                            },
                            className: `absolute flex flex-row items-center align-middle h-full justify-between w-full z-20 px-2`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30`,
                                    onClick: previousImageHandler,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ArrowLeftIcon, {
                                        className: `fill-black h-7 w-7 p-1 rounded-full`
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `cursor-pointer bg-white shadow-lg border-black hover:shadow-2xl rounded-full opacity-90 z-30`,
                                    onClick: nextImageHandler,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.ArrowRightIcon, {
                                        className: `fill-black h-7 w-7 p-1 rounded-full`
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: `rounded-lg z-10 shadow-md`,
                            src: props.hotelInfo.hotel_Img_List[imageIndex],
                            alt: "hotel-img",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    initial: {
                        opacity: 0.0,
                        x: 25
                    },
                    transition: {
                        duration: 3.0,
                        type: "spring"
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    className: `relative flex flex-col justify-between sm:pr-2 w-full sm:w-[55%] md:w-[60%] lg:w-[70%] xl:w-[75%]`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `pb-4 pt-4 sm:pt-0`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `flex flex-row flex-between`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: `text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold`,
                                        children: props.hotelInfo.name
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `relative flex flex-row py-1 hover:underline hover:text-blue-600`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.LocationMarkerIcon, {
                                            className: `relative fill-[#cf8f24] h-7 w-7 p-1 border-2 border-[#cf8f24] rounded-full mr-2`
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: props.hotelInfo.map,
                                            className: `z-30`,
                                            target: "_blank",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `md:text-lg xl:text-xl`,
                                                children: props.hotelInfo.landmark
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `relative flex flex-col pb-4`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `relative flex flex-col sm:flex-row justify-between items-start w-[100%] mb-2`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `relative items-center flex space-x-2`,
                                            children: [
                                                ...Array(props.hotelInfo.rating)
                                            ].map((idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.StarIcon, {
                                                    className: `h-6 w-6 rounded-full p-1 shadow-md fill-[#cf8f24] border-[1px]`
                                                }, idx))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `relative flex`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `relative flex flex-row overflow-x-scroll scrollbar-hide no-scrollbar`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `relative flex flex-row overscroll-x-scroll w-full`,
                                        children: props.hotelInfo.amenities_List.map((amenity, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                className: `relative flex flex-row items-start align-middle justify-center rounded-full flex-shrink-0 mr-2 px-2 py-1 bg-white border-[1px]`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `relative h-5 w-5 mr-2 flex rounded-full bg-white`,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            className: `rounded-full`,
                                                            src: amenity.image_Url,
                                                            alt: "amenity-img",
                                                            layout: "fill",
                                                            objectFit: "cover"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: `text-sm text-center`,
                                                        children: amenity.name
                                                    })
                                                ]
                                            }, amenity._id))
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `flex flex-col sm:flex-row justify-between items-start sm:items-center`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `flex flex-col pb-4 sm:pb-0 justify-center`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-red-500 text-3xl font-bold`,
                                        children: `₹ ${props.hotelInfo.min_Price}`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-sm text-gray-500`,
                                        children: `per room per night`
                                    })
                                ]
                            })
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

/***/ 9329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i3": () => (/* binding */ sanityClient),
/* harmony export */   "uH": () => (/* binding */ urlFor)
/* harmony export */ });
/* unused harmony export config */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const config = {
    dataset: "blogs" || 0,
    projectId: "fifev1uu",
    apiVersion: "2023-03-25",
    useCdn: "production" === "production"
};
const sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);
const urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;