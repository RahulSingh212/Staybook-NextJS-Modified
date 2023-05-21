(() => {
var exports = {};
exports.id = 2522;
exports.ids = [2522];
exports.modules = {

/***/ 367:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ FullScreenImageView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FullScreenImageView = (props)=>{
    const [imageIndex, setImageIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const enterFullscreen = async ()=>{
            try {
                await document.documentElement.requestFullscreen();
                console.log("Inside");
            } catch (error) {
                console.error("Failed to enter fullscreen mode:", error);
            }
        };
        const handleKeyDown = (event)=>{
            if (event.key === "Escape") {
                props.onClose();
            // enterFullscreen();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>{
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        props
    ]);
    const previousImageHandler = (event)=>{
        event.stopPropagation();
        if (imageIndex === 0) {
            setImageIndex(props.imageList.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };
    const nextImageHandler = (event)=>{
        event.stopPropagation();
        setImageIndex((imageIndex + 1) % props.imageList.length);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `fixed flex flex-col justify-center align-middle items-center left-0 top-0 w-screen h-screen z-50 bg-black no-scrollbar`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    onClick: props.onClose,
                    className: `absolute top-2 right-2  rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:bg-[#c4c2c2] z-40`,
                    src: `/close.png`,
                    alt: "amenity-img",
                    height: 27.5,
                    width: 27.5
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.ArrowSmLeftIcon, {
                    onClick: previousImageHandler,
                    className: `absolute left-2 h-8 w-8 md:h-16 md:w-16 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.ArrowSmRightIcon, {
                    onClick: nextImageHandler,
                    className: `absolute right-2 h-8 w-8 md:h-16 md:w-16 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-[80%] h-[80%]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: `h-full w-full`,
                        src: props.imageList[imageIndex],
                        alt: "h-img",
                        layout: "responsive",
                        objectFit: "cover",
                        height: 10,
                        width: 10
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `relative flex flex-row align-middle justify-center items-center my-2 w-full h-20 px-2 space-x-2 no-scrollbar overflow-x-scroll`,
                    children: props.imageList.map((imgUrl, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `h-full w-20`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                onClick: ()=>{
                                    setImageIndex(index);
                                },
                                className: `cursor-pointer shadow-lg ${index === imageIndex ? "border-4 border-blue-700" : ""}`,
                                src: imgUrl,
                                alt: "h-img",
                                layout: "responsive",
                                objectFit: "cover",
                                height: 10,
                                width: 10
                            })
                        }, index))
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AmenityCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function AmenityCard(props) {
    const [viewMore, setViewMore] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-full mb-4`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `pb-2`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `text-gray-500 text-2xl font-semibold`,
                        children: "Amenities"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `grid grid-cols-2 lg:grid-cols-3`,
                    children: [
                        props.amenitiesList.map((amenity, index)=>(!viewMore ? index < Math.min(4, props.amenitiesList.length) : index < props.amenitiesList.length) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative flex align-middle items-center pb-4`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `relative h-9 w-9 mr-2 flex rounded-full bg-gray-100`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: `rounded-full`,
                                            src: amenity.image_Url,
                                            alt: "amenity-img",
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `text-lg text-left`,
                                        children: amenity.name
                                    })
                                ]
                            }, amenity._id)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative`,
                            children: viewMore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`,
                                onClick: ()=>setViewMore(false),
                                children: "- Less"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`,
                                onClick: ()=>setViewMore(true),
                                children: "+ More"
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

/***/ 6751:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FullAmenityCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function FullAmenityCard(props) {
    const [viewMore, setViewMore] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-full mb-4`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `pb-2`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `text-gray-500 text-2xl font-semibold`,
                        children: "Hotel Amenities"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `grid grid-cols-2 xl:grid-cols-3`,
                    children: [
                        props?.aminityList?.map((amenity, index)=>(!viewMore ? index < Math.min(8, props.aminityList.length) : index < props.aminityList.length) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative flex align-middle items-center pb-4`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `relative h-7 w-7 mr-2 flex rounded-full bg-gray-100`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: `rounded-full p-1`,
                                            src: `/correct.png`,
                                            alt: "amenity-img",
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `text-xs md:text-base text-left`,
                                        children: amenity
                                    })
                                ]
                            }, String(index))),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative`,
                            children: viewMore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`,
                                onClick: ()=>setViewMore(false),
                                children: "- Less"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`,
                                onClick: ()=>setViewMore(true),
                                children: "+ More"
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

/***/ 9612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ BookingCard)
/* harmony export */ });
/* unused harmony exports makePayment, stayflexiHandler */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4809);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _BookingPriceCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(215);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4304);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _BookingPriceCard__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _BookingPriceCard__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const makePayment = async (userBooking)=>{
    const userResponse = await fetch("/api/booking/createNewRazorpayOrder", {
        method: "POST",
        body: JSON.stringify({
            userBooking: userBooking
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
};
const stayflexiHandler = async (hotelId, fromDate, toDate)=>{
    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("/api/hotel/hotelPricePlanner", {
        method: "POST",
        body: JSON.stringify({
            hotelId,
            fromDate,
            toDate
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log("API Handler Function");
    console.log(data);
    return data;
};
function BookingCard(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [dateRangePicker, setDateRangePicker] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [hotel_id, setHotelId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [checkin, setCheckin] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Date());
    const [checkout, setCheckout] = react__WEBPACK_IMPORTED_MODULE_1___default().useState((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addDays)(new Date(), 1));
    const [num_nights, setNum_nights] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
    const [num_guests, setNum_guests] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(2);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setHotelId(String(router.query.hotel_id));
        setNum_nights(Number(router.query.num_guests));
        setNum_guests(Number(router.query.num_guests));
        setCheckin(moment__WEBPACK_IMPORTED_MODULE_5___default()(router.query.checkin, "DD-MM-YYYY").toDate());
        setCheckout((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addDays)(moment__WEBPACK_IMPORTED_MODULE_5___default()(router.query.checkin, "DD-MM-YYYY").toDate(), Number(router.query.num_nights)));
    }, [
        router.query.hotel_id,
        router.query.checkin,
        router.query.num_guests,
        router.query.num_nights
    ]);
    const fetchStayFlexiHotelPrices = async ()=>{
        const fromDate = String(moment__WEBPACK_IMPORTED_MODULE_5___default()(checkin).format("DD-MM-YYYY"));
        const toDate = String(moment__WEBPACK_IMPORTED_MODULE_5___default()(checkout).format("DD-MM-YYYY"));
        const responseData = await stayflexiHandler(hotel_id, fromDate, toDate);
        console.log(responseData);
    };
    const formHanlder = async ()=>{
        resetSearchTextHandler();
        await props.roomSelectHandler();
        router.push("#bookinginformation");
    };
    const bookHotelHandler = async (event)=>{
        props.hotelBookingHandler();
    };
    const dateSelectionRange = {
        startDate: checkin,
        endDate: checkout,
        key: "selection"
    };
    const dateRangeHandler = (selectedRange)=>{
        setCheckin(selectedRange.selection.startDate);
        setCheckout(selectedRange.selection.endDate);
    };
    const guestNumberHandler = (action)=>{
        if (action === 1) {
            if (num_guests <= 3) {
                setNum_guests(num_guests + 1);
            }
        } else {
            if (num_guests >= 3) {
                setNum_guests(num_guests - 1);
            }
        }
    };
    const resetSearchTextHandler = ()=>{
        setDateRangePicker(false);
        setHotelId(String(router.query.hotel_id));
        setNum_nights(Number(router.query.num_guests));
        setNum_guests(Number(router.query.num_guests));
        setCheckin(moment__WEBPACK_IMPORTED_MODULE_5___default()(router.query.checkin, "DD-MM-YYYY").toDate());
        setCheckout((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.addDays)(moment__WEBPACK_IMPORTED_MODULE_5___default()(router.query.checkin, "DD-MM-YYYY").toDate(), Number(router.query.num_nights)));
    };
    const hotelDetailsHandler = ()=>{
        setDateRangePicker(false);
        router.replace({
            pathname: `/hotel/google/list/${hotel_id}/`,
            query: {
                checkin: String(moment__WEBPACK_IMPORTED_MODULE_5___default()(checkin).format("DD-MM-YYYY")),
                num_nights: String(num_nights),
                num_guests: String(num_guests),
                hotel_id: String(hotel_id)
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            id: "booking-card",
            className: `sticky w-full md:w-[37.5%] h-full bg-white py-6 px-4 rounded-xl top-20 right-0 shadow-xl`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: `w-full pb-4`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: `text-5xl font-semibold text-gray-500`,
                        children: [
                            "₹",
                            props.userBooking.getTotalPrice.toFixed(2)
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: `relative flex flex-col w-full mb-4 shadow-md bg-white rounded-2xl`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            onClick: ()=>{
                                setDateRangePicker(true);
                            },
                            className: `relative w-full flex justify-between border-red-950 border-[1px] rounded-t-lg cursor-pointer`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `relative flex flex-col w-[50%] px-4 py-2 border-r-[1px]  border-red-950 hover:bg-slate-100`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                            className: `text-xs font-semibold`,
                                            children: "CHECK-IN"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                            className: `text-xl font-medium`,
                                            children: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(checkin, "dd MMMM yy")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `relative flex flex-col w-[50%] px-4 py-2 hover:bg-slate-100`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                            className: `text-xs font-semibold`,
                                            children: "CHECK-OUT"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                            className: `text-xl font-medium`,
                                            children: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(checkout, "dd MMMM yy")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            onClick: ()=>{
                                setDateRangePicker(true);
                            },
                            className: `relative w-ful flex flex-col justify-between px-4 py-2 border-red-950 border-[1px] rounded-b-lg cursor-pointer hover:bg-slate-100`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-xs font-semibold`,
                                    children: "GUESTS"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-xl font-medium`,
                                    children: [
                                        num_guests,
                                        " guests"
                                    ]
                                })
                            ]
                        }),
                        dateRangePicker && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            className: `relative w-full align-middle flex flex-col align-center p-2 rounded-lg bg-white z-20 bottom-0 mt-1 border-red-950 border-[1px] overflow-x-scroll`,
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    onClick: resetSearchTextHandler,
                                    className: `absolute top-2 right-2  rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:bg-[#c4c2c2] z-40`,
                                    src: `/close.png`,
                                    alt: "amenity-img",
                                    height: 27.5,
                                    width: 27.5
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `flex mx-auto`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_date_range__WEBPACK_IMPORTED_MODULE_8__.DateRangePicker, {
                                        ranges: [
                                            dateSelectionRange
                                        ],
                                        minDate: new Date(),
                                        rangeColors: [
                                            "#cf8f24"
                                        ],
                                        onChange: dateRangeHandler,
                                        className: `relative w-full`
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `flex flex-row flex-between pt-2 border-b-2`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: `text-xl font-semibold flex-grow`,
                                            children: "Number of Guests"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `flex items-center align-middle justify-center`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `p-[6px] bg-gray-300 rounded-full mr-3 cursor-pointer`,
                                                    onClick: ()=>guestNumberHandler(-1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                        alt: "icon",
                                                        src: `/minus-icon.png`,
                                                        width: "10",
                                                        height: "10"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.UsersIcon, {
                                                    className: `h-5`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    "aria-label": "Search",
                                                    onChange: (e)=>{},
                                                    type: "number",
                                                    value: num_guests,
                                                    min: 2,
                                                    max: 4,
                                                    className: `w-8 text-lg ml-2 text-right outline-none text-[#cf8f24]`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `p-[6px] bg-gray-300 rounded-full ml-3 cursor-pointer`,
                                                    onClick: ()=>guestNumberHandler(1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
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
                                            className: `flex-grow text-gray-500 hover:bg-slate-200 py-1 rounded-md`,
                                            onClick: resetSearchTextHandler,
                                            children: "Cancel"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: `flex-grow text-[#cf8f24] hover:bg-slate-200 py-1 rounded-md`,
                                            onClick: hotelDetailsHandler,
                                            children: "Search"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: `w-full rounded-lg px-1 mb-2`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: `text-xl font-sans`,
                        children: [
                            props.userBooking.getTotalRoomCount,
                            " rooms"
                        ]
                    })
                }),
                props.userBooking.roomsList.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: `relative w-full flex flex-col items-center align-middle my-3 overflow-y-scroll h-36 py-2 shadow-md space-y-2`,
                    children: props.userBooking.roomsList.map((planInfo, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BookingPriceCard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            planIndex: index,
                            planInfo: planInfo,
                            userBooking: props.userBooking,
                            setRoomCount: props.setRoomCount,
                            setTotalRoomCost: props.setTotalRoomCost,
                            setTotalTax: props.setTotalTax,
                            setTotalPrice: props.setTotalPrice
                        }, index))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: `relative w-full flex flex-col align-middle items-center justify-between rounded-lg py-2 px-2 bg-white mt-2 mb-6 shadow-lg`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            className: `w-full relative flex flex-row align-middle items-center justify-between pb-1`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-gray-700 font-medium font-sans`,
                                    children: "Room Price"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-gray-700 font-medium font-sans`,
                                    children: [
                                        "₹",
                                        props.userBooking.getTotalRoomCost.toFixed(2)
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            className: `w-full relative flex flex-row align-middle items-center justify-between pb-1`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-gray-700 font-medium font-sans`,
                                    children: "Tax"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-gray-700 font-medium font-sans`,
                                    children: [
                                        "₹",
                                        props.userBooking.getTotalTax.toFixed(2)
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            className: `w-full border-2`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                            className: `w-full relative flex flex-row align-middle items-center justify-between pt-1`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-gray-700 font-medium font-sans`,
                                    children: "Total Cost"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                    className: `text-gray-700 font-medium font-sans`,
                                    children: [
                                        "₹",
                                        props.userBooking.getTotalPrice.toFixed(2)
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                    className: `w-full text-center text-lg font-semibold bg-[#cf8f24] rounded-lg hover:bg-red-500 text-white py-4 cursor-pointer`,
                    onClick: formHanlder,
                    children: `I'll reserve`
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BookingPriceCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function BookingPriceCard(props) {
    const removeHotelPlan = ()=>{
        props.userBooking.removeRoom(props.planInfo, props.planIndex);
        props.setRoomCount(props.userBooking.getTotalRoomCount);
        props.setTotalRoomCost(props.userBooking.getTotalRoomCost);
        props.setTotalTax(props.userBooking.getTotalTax);
        props.setTotalPrice(props.userBooking.getTotalPrice);
    };
    const updateChildToPlan = (event)=>{
        let val = Number(event.target.value);
        props.userBooking.updateChildToRoom(props.planIndex, val);
        props.setTotalRoomCost(props.userBooking.getTotalRoomCost);
        props.setTotalTax(props.userBooking.getTotalTax);
        props.setTotalPrice(props.userBooking.getTotalPrice);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-[95%] flex flex-col rounded-md shadow-md px-3 py-3`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex flex-row justify-between mb-2`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative w-[92.5%]`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `text-md font-mono`,
                                children: `${props.planInfo.room_Name}(${props.planInfo.plan_Name})`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            onClick: removeHotelPlan,
                            className: `relative h-6 w-6 cursor-pointer rounded-full bg-slate-200 hover:bg-slate-400`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: `rounded-lg p-1 h-2 w-2`,
                                src: `/close.png`,
                                alt: "amenity-img",
                                layout: "fill",
                                objectFit: "cover"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex flex-row justify-between align-middle items-center`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex flex-row align-middle items-center`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: ``,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: `text-lg text-gray-400 font-medium`,
                                        children: "Child"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `ml-4`,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        className: `relative h-full px-3 py-2 border-2 border-blue-400 rounded-md`,
                                        onChange: updateChildToPlan,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "0",
                                                children: "0"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "1",
                                                children: "1"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: ``,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `text-lg text-gray-400 font-medium`,
                                children: [
                                    props.planInfo.room_Count,
                                    "\xa0",
                                    props.planInfo.room_Count === 1 ? "Room" : "Rooms"
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

/***/ 6612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ MobileBookingCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const MobileBookingCard = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `fixed bottom-0 w-full flex flex-row justify-between align-middle items-center px-4 py-5 rounded-t-3xl border-[1px] border-[#6d6d6d] bg-[#fff] md:hidden z-20 scrollbar-hide`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative w-fit text-transparent bg-clip-text flex flex-row items-end text-gradient-to-r text-2xl font-mono font-bold bg-gradient-to-r from-[#1999a8] to-[#1caf95]`,
                            children: [
                                "₹",
                                props.userBooking.getTotalPrice.toFixed(2),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: `text-black text-sm font-light`,
                                    children: [
                                        "\xa0",
                                        props.userBooking.total_Price != 0 ? " nights" : ""
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative w-full flex mb-2 underline text-sm`,
                            children: [
                                (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(moment__WEBPACK_IMPORTED_MODULE_4___default()(props.checkin).toDate(), "dd MMMM yy"),
                                " -",
                                " ",
                                (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(moment__WEBPACK_IMPORTED_MODULE_4___default()(props.checkout).toDate(), "dd MMMM yy")
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    onClick: ()=>{
                        router.push("#booking-card");
                    },
                    className: `relative w-fit bg-gray-400 py-3 px-5 rounded-md text-center bg-gradient-to-r from-[#1999a8] to-[#1caf95] text-white cursor-pointer`,
                    children: "Reserve"
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1741:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DescriptionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function DescriptionCard(props) {
    const stringSplitter = (value, splitter)=>{
        if (!value.includes("-")) {
            let first = "";
            let rem = value;
            return {
                first,
                rem
            };
        }
        const [first, ...rest] = value.split("-");
        const rem = rest.join("-");
        return {
            first,
            rem
        };
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-full mb-4`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: ``,
                children: props.hotelDescriptionsList.map((value, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `pb-1 text-justify`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-2xl font-bold`,
                                children: stringSplitter(value, " - ").first.length > 0 ? `${stringSplitter(value, " - ").first} - ` : ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `font-mono text-xl`,
                                children: stringSplitter(value, " - ").rem
                            })
                        ]
                    }, String(index)))
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaymentInformation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5452);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_phone_input_2_lib_material_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var react_phone_input_2_lib_material_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_material_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4770);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_razorpay_razorpayHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_5__, _lib_razorpay_razorpayHandler__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_5__, _lib_razorpay_razorpayHandler__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const shortid = __webpack_require__(5031);
function PaymentInformation(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [paymentOption, setPaymentOption] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("pay-now");
    const [userFullName, setUserFullName] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.userBooking.user_Name);
    const [userMobileNumber, setUserMobileNumber] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.userBooking.user_Phone_Number);
    const [userEmailId, setUserEmailId] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.userBooking.user_Email_Id);
    const [userAddress, setUserAddress] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const bookHotelHandler = async (event)=>{
        if (userFullName.length < 5) {
            return;
        } else if (userMobileNumber.length < 8) {
            return;
        } else if (!userEmailId.includes("@") || !userEmailId.includes(".")) {
            return;
        }
        props.userBooking.user_Name = userFullName;
        props.userBooking.user_Phone_Number = userMobileNumber;
        props.userBooking.user_Email_Id = userEmailId;
        props.setUserBooking(props.userBooking);
        if (paymentOption === "pay-now") {
            const razorPayResponse = await (0,_lib_razorpay_razorpayHandler__WEBPACK_IMPORTED_MODULE_7__/* .makePayment */ .DP)(props.userBooking, props.setErrorMessage, props.setErrorModel, props.setLoadingModel);
        } else {
            props.setLoadingModel(true);
            props.userBooking.receipt_Id = shortid.generate();
            const data = await (0,_lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_5__/* .hotelBookingHandler */ .w1)(props.userBooking);
            if (data.booking_Id === "") {
                props.setErrorMessage("Booking Failed! Please try again.");
                props.setLoadingModel(false);
                props.setErrorModel(true);
            } else {
                (0,_lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_5__/* .bookingConfirmationRedirector */ .Xe)(router, data.booking_Id, data.receipt_Id, props.userBooking);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            id: "user-info",
            className: `relative w-[95%] h-full flex flex-col justify-center items-center mx-auto mb-10`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex flex-col-reverse w-full md:flex-row `,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex flex-col w-full md:w-[50%] lg:w-[40%] xl:w-[30%]`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative flex align-middle justify-center items-center mb-5 w-full`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        id: "bookinginformation",
                                        className: `font-semibold text-3xl font-serif`,
                                        children: "Booking Information"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative flex flex-col w-full space-y-2`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex text-left text-xl font-sans`,
                                                    children: `Enter your full name *`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex my-2`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: `py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full`,
                                                        type: `name`,
                                                        name: "name",
                                                        placeholder: `Full name`,
                                                        value: userFullName,
                                                        onChange: (val)=>{
                                                            setUserFullName(val.target.value);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex text-left text-xl font-sans`,
                                                    children: `Phone Number *`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex my-2 w-full`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        placeholder: `Phone Number`,
                                                        country: `in`,
                                                        searchPlaceholder: "Phone number",
                                                        value: userMobileNumber,
                                                        inputStyle: {
                                                            width: "100%"
                                                        },
                                                        onChange: (phone)=>{
                                                            console.log(userMobileNumber);
                                                            setUserMobileNumber(String(phone));
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex text-left text-xl font-sans`,
                                                    children: `Email Id *`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex my-2`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: `py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full`,
                                                        type: `email`,
                                                        name: "emamil",
                                                        placeholder: `Email id`,
                                                        value: userEmailId,
                                                        onChange: (val)=>{
                                                            setUserEmailId(val.target.value);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex text-left text-xl font-sans`,
                                                    children: `Select Payment Mode *`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex my-2 w-full`,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                        className: `py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full cursor-pointer`,
                                                        value: paymentOption,
                                                        onChange: (event)=>{
                                                            setPaymentOption(event.target.value);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "pay-now",
                                                                children: "Pay Now"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "pay-at-hotel",
                                                                children: "Pay at Hotel"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex text-left text-xl font-sans`,
                                                    children: `Enter your address`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                    className: `relative flex my-2 w-full`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: `py-4 px-3 rounded-md border border-gray-400 hover:border-black text-lg w-full`,
                                                        name: "address",
                                                        placeholder: `Address`,
                                                        value: userAddress,
                                                        onChange: (val)=>{
                                                            setUserAddress(val.target.value);
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex flex-col w-full md:w-[50%] lg:w-[60%] xl:w-[70%]`
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex justify-center align-middle items-center mt-10 px-6 py-2 w-full`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: bookHotelHandler,
                        className: `relative w-fit bg-red-500 px-6 py-2 rounded-lg cursor-pointer`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: `font-mono font-semibold text-xl text-white`,
                            children: "Book Now!"
                        })
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NearbyPlacesCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function NearbyPlacesCard(props) {
    const [viewMore, setViewMore] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-full mb-4`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `pb-2`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: `text-gray-500 text-2xl font-semibold`,
                        children: "Nearby Places"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `grid grid-cols-2 xl:grid-cols-3`,
                    children: [
                        props?.locationsList?.map((location, index)=>(!viewMore ? index < Math.min(8, props.locationsList.length) : index < props.locationsList.length) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                href: location.map_Url,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative flex align-middle items-center pb-4`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `relative h-7 w-7 mr-2 flex rounded-full bg-gray-100`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                className: `rounded-full p-1`,
                                                src: `/map-pin.png`,
                                                alt: "amenity-img",
                                                layout: "fill",
                                                objectFit: "cover"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `text-xs md:text-base text-left`,
                                            children: location.name
                                        })
                                    ]
                                })
                            }, String(index))),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative`,
                            children: viewMore ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`,
                                onClick: ()=>setViewMore(false),
                                children: "- Less"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `p-1 font-bold text-gray-600 hover:text-gray-500 rounded-lg cursor-pointer`,
                                onClick: ()=>setViewMore(true),
                                children: "+ More"
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

/***/ 9958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function InfoCard(props) {
    const [play, setPlay] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [imageIndex, setImageIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (play) {
            const interval = setInterval(()=>{
                const newIdx = (imageIndex + Number(1)) % props.roomInfo.image_List.length;
                setImageIndex(newIdx);
            }, 2000);
            return ()=>clearInterval(interval);
        }
    }, [
        imageIndex,
        play,
        props.roomInfo.image_List.length
    ]);
    const previousImageHandler = (event)=>{
        event.stopPropagation();
        if (imageIndex === 0) {
            setImageIndex(props.roomInfo.image_List.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };
    const nextImageHandler = (event)=>{
        event.stopPropagation();
        setImageIndex((imageIndex + 1) % props.roomInfo.image_List.length);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
            mode: "wait",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: `fixed flex flex-col justify-center align-middle items-center left-0 top-0 w-screen h-screen z-30 bg-black`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative flex flex-col overflow-y-scroll w-[95%] h-[80%] md:w-[75%] xl:w-[65%] p-4 bg-[#fff] rounded-2xl border-[1px] border-[#cf8f24] no-scrollbar`,
                    initial: {
                        opacity: 0.25
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: 2
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            onClick: props.roomModalHandler,
                            className: `absolute top-2 right-2  rounded-full p-1 border-[1px] cursor-pointer hover:bg-[#c4c2c2] z-40`,
                            src: `/close.png`,
                            alt: "amenity-img",
                            height: 27.5,
                            width: 27.5
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative flex flex-col md:flex-row w-full h-full no-scrollbar`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative w-full md:w-[50%] flex flex-col px-1 mb-4 md:mb-0`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `relative flex justify-center align-middle items-center w-full h-72 sm:h-[80] md:h-[55%] rounded-lg`,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.ArrowSmLeftIcon, {
                                                    onClick: previousImageHandler,
                                                    className: `absolute left-2 h-8 w-8 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.ArrowSmRightIcon, {
                                                    onClick: nextImageHandler,
                                                    className: `absolute right-2 h-8 w-8 rounded-full p-1 border-[1px] cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`
                                                }),
                                                !play && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.PlayIcon, {
                                                    onClick: ()=>{
                                                        setPlay(true);
                                                    },
                                                    className: `absolute bottom-2 left-2 h-8 w-8 rounded-full cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`
                                                }),
                                                play && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.PauseIcon, {
                                                    onClick: ()=>{
                                                        setPlay(false);
                                                    },
                                                    className: `absolute bottom-2 left-2 h-8 w-8 rounded-full cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.ZoomInIcon, {
                                                    onClick: props.openFullScreen,
                                                    className: `absolute bottom-2 right-2 h-8 w-8 rounded-full cursor-pointer bg-[#fff] hover:shadow-lg z-40 opacity-80 hover:opacity-100`
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    className: `rounded-lg border-[1px] border-[#cf8f24]`,
                                                    src: props.roomInfo.image_List[imageIndex],
                                                    alt: "hotel-img",
                                                    layout: "fill",
                                                    objectFit: "cover"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `relative flex align-middle justify-center items-center my-2 w-full h-16 px-2 space-x-2 no-scrollbar`,
                                            children: props.roomInfo.image_List.map((imgUrl, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `h-full w-20`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        onClick: ()=>{
                                                            setImageIndex(index);
                                                        },
                                                        className: `cursor-pointer shadow-lg ${index === imageIndex ? "border-4 border-blue-700" : ""}`,
                                                        src: imgUrl,
                                                        alt: "h-img",
                                                        layout: "responsive",
                                                        objectFit: "cover",
                                                        height: 10,
                                                        width: 10
                                                    })
                                                }, index))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                            className: `relative w-full mt-4`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `font-sans font-medium text-lg sm:text-2xl text-gray-500`,
                                                children: props.roomInfo.type
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                            className: `relative w-full`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `font-sans font-light text-md sm:text-xl text-gray-500`,
                                                children: props.roomInfo.info
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    className: `relative flex flex-col w-full h-full md:w-[50%] px-1`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                            className: `relative w-full align-top items-center`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: `font-sans font-medium text-lg sm:text-2xl text-gray-500 text-center`,
                                                children: "What we offer"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `overflow-x-auto no-scrollbar`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                className: `grid grid-cols-2 overflow-x-auto no-scrollbar`,
                                                children: props.roomAmenitiesList.map((amenity, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: `relative align-middle items-center space-x-1 flex mb-1 mr-2`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    className: `w-3 h-3`,
                                                                    alt: "available",
                                                                    src: `/correct.png`,
                                                                    height: 5,
                                                                    width: 5
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: `relative w-full whitespace-wrap`,
                                                                children: amenity
                                                            })
                                                        ]
                                                    }, index))
                                            })
                                        })
                                    ]
                                })
                            ]
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

/***/ 7165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlanCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _classModels_bookings_roomDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function PlanCard(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [num_child, setNumChild] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const [num_infants, setNumInfants] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const roomPlanHandler = ()=>{
        const rd = new _classModels_bookings_roomDetails__WEBPACK_IMPORTED_MODULE_4__/* .RoomDetails */ .X();
        rd.room_Name = `${props.roomName}`;
        rd.room_Info = `${props.roomInfo}`;
        rd.plan_Name = `${props.planInfo.title}`;
        rd.plan_Info = `${props.planInfo.info}`;
        rd.plan_Price = Number(`${props.planInfo.price}`);
        rd.num_Guests = Number(`${router.query.num_guests}`);
        rd.num_Children = Number(`${num_child}`);
        rd.num_Infants = Number(`${num_infants}`);
        props.userBooking.addNewRoom(rd);
        props.setRoomCount(props.userBooking.getTotalRoomCount);
        props.setTotalRoomCost(props.userBooking.getTotalRoomCost);
        props.setTotalTax(props.userBooking.getTotalTax);
        props.setTotalPrice(props.userBooking.getTotalPrice);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-full flex flex-col md:flex-row rounded-md shadow-lg px-4 py-3`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative w-full md:w-[25%] flex flex-col justify-evenly`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative w-full`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `font-sans font-medium text-lg sm:text-2xl text-gray-500`,
                                children: props.planInfo.title
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative w-full`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: `font-sans font-light text-md sm:text-xl text-gray-500`,
                                children: props.planInfo.info
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative w-full md:w-[60%] flex flex-col align-middle items-center md:px-2 my-4 md:my-0`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative w-full mb-2`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: `font-sans font-medium text-xs text-center md:text-left text-gray-500 underline`,
                                children: "Amenities"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative w-full flex flex-col space-y-1`,
                            children: props.planInfo.features.map((amenityName, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `relative flex items-center align-middle`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `text-xs pr-1`,
                                            children: "✓"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: ``,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `text-sm text-gray-500`,
                                                children: amenityName
                                            })
                                        })
                                    ]
                                }, String(index)))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative w-full md:w-[15%] flex md:flex-col align-middle items-center justify-between md:justify-around`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: `font-sans text-center font-medium text-lg sm:text-2xl text-gray-500`,
                                children: [
                                    "₹",
                                    props.planInfo.price
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            onClick: roomPlanHandler,
                            className: `relative w-fit bg-[#cf8f24] hover:bg-red-600 py-2 px-4 cursor-pointer rounded-lg align-middle items-center`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-white text-lg font-light text-center`,
                                children: "Select"
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

/***/ 8190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RoomInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PlanCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7165);
/* harmony import */ var _InfoCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9958);
/* harmony import */ var _UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _PlanCard__WEBPACK_IMPORTED_MODULE_4__, _InfoCard__WEBPACK_IMPORTED_MODULE_5__, _UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_6__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _PlanCard__WEBPACK_IMPORTED_MODULE_4__, _InfoCard__WEBPACK_IMPORTED_MODULE_5__, _UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function RoomInfo(props) {
    const [isFullScreen, setIsFullScreen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [roomDetails, setRoomDetails] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const roomInfoHandler = ()=>{
        setRoomDetails(!roomDetails);
    };
    const openFullScreen = ()=>{
        setRoomDetails(false);
        setIsFullScreen(true);
    };
    const closeFullScreen = ()=>{
        setIsFullScreen(false);
        setRoomDetails(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            isFullScreen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_6__/* .FullScreenImageView */ .O, {
                imageList: props.roomInfo.image_List,
                onClose: closeFullScreen
            }),
            roomDetails && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_InfoCard__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                roomInfo: props.roomInfo,
                roomAmenitiesList: props.roomAmenitiesList,
                roomModalHandler: roomInfoHandler,
                openFullScreen: openFullScreen
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: `relative w-full flex flex-col p-4 rounded-lg border-[1px] border-red-500`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative w-full flex flex-col-reverse md:flex-row justify-between mb-6`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative w-full md:w-[45%] h-full flex flex-col justify-between pr-2`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                className: `relative w-full mb-2`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: `font-sans font-medium text-lg sm:text-2xl text-gray-500`,
                                                    children: props.roomInfo.type
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                className: `relative w-full mb-4`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: `font-sans font-light text-md sm:text-xl text-gray-500`,
                                                    children: props.roomInfo.info
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        onClick: roomInfoHandler,
                                        className: `relative w-fit bg-[#cf8f24] hover:bg-red-500 py-1 px-3 cursor-pointer rounded-lg align-middle items-center`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `text-white text-lg font-light text-center`,
                                            children: "More Info"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative w-full md:w-[55%] h-56 sm:h-72 md:h-64 xl:h-60 shadow-lg hover:shadow-xl rounded-xl cursor-pointer`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    className: `rounded-lg`,
                                    src: props.roomInfo.image_List[0],
                                    alt: "amenity-img",
                                    layout: "fill",
                                    objectFit: "cover"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative w-full flex flex-col space-y-4`,
                        children: props.roomInfo.plans.map((plan, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PlanCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                planInfo: plan,
                                roomName: props.roomInfo.type,
                                roomInfo: props.roomInfo.info,
                                userBooking: props.userBooking,
                                setRoomCount: props.setRoomCount,
                                setTotalRoomCost: props.setTotalRoomCost,
                                setTotalTax: props.setTotalTax,
                                setTotalPrice: props.setTotalPrice
                            }, plan._key))
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RoomsCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _RoomInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8190);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _RoomInfo__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _RoomInfo__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function RoomsCard(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            className: `relative w-full flex flex-col mb-4`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative w-full align-middle items-center`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `text-4xl md:text-5xl lg:text-6xl text-center font-serif mb-4`,
                        children: "Choose your room(s)"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: `relative w-full flex flex-col space-y-6`,
                    children: props.roomsList.map((room, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RoomInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            roomInfo: room,
                            roomAmenitiesList: props.amenitiesList,
                            userBooking: props.userBooking,
                            setRoomCount: props.setRoomCount,
                            setTotalRoomCost: props.setTotalRoomCost,
                            setTotalTax: props.setTotalTax,
                            setTotalPrice: props.setTotalPrice
                        }, room._key))
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageGalleryCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(367);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ImageGalleryCard(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [galleryView, setGalleryView] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const galleryHandler = ()=>{
        setGalleryView(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            galleryView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_FullScreenImageView__WEBPACK_IMPORTED_MODULE_5__/* .FullScreenImageView */ .O, {
                imageList: props.hotelImgList,
                onClose: galleryHandler
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: `relative w-[95%] h-[275px] sm:h-[350px] md:h-[425px] lg:h-[500px] xl:h-[550px] flex flex-row items-center align-middle justify-between z-20 rounded-3xl mx-auto my-5`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative flex w-[75%] lg:w-[49%] h-full rounded-l-3xl`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: `relative rounded-l-3xl`,
                            src: props.hotelImgList[0],
                            alt: "hotel-img",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative flex flex-col justify-between w-[24.5%] lg:w-[50.5%] h-full rounded-r-3xl`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative flex flex-col lg:flex-row w-full h-[49.25%] rounded-tr-3xl items-center justify-between`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `relative flex w-full lg:w-[49.5%] h-full rounded-tr-3xl lg:rounded-tr-none`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: `relative rounded-tr-3xl lg:rounded-tr-none`,
                                            src: props.hotelImgList[1],
                                            alt: "hotel-img",
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `h-1 sm:h-2 lg:h-0`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `relative flex w-full lg:w-[49.5%] rounded-tr-none lg:rounded-tr-3xl h-full`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: `relative rounded-tr-none lg:rounded-tr-3xl`,
                                            src: props.hotelImgList[2],
                                            alt: "hotel-img",
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative flex flex-col lg:flex-row w-full h-[49.25%] rounded-br-3xl items-center justify-between`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `relative flex w-full lg:w-[49.5%] h-full`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: `relative`,
                                            src: props.hotelImgList[3],
                                            alt: "hotel-img",
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `h-1 sm:h-2 lg:h-0`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `relative flex w-full lg:w-[49.5%] rounded-br-3xl h-full`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: `relative rounded-br-3xl`,
                                            src: props.hotelImgList[4],
                                            alt: "hotel-img",
                                            layout: "fill",
                                            objectFit: "cover"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `absolute h-full w-full flex justify-end items-end`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                            className: `relative bottom-0 text-center text-white rounded-full p-3 md:p-5 bg-[#cf8f24] cursor-pointer mb-3 mr-3 opacity-80 hover:opacity-90 shadow-lg`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: `text-center text-xs md:text-base font-semibold rounded-full`,
                                onClick: ()=>setGalleryView(!galleryView),
                                children: [
                                    "Open",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Gallery"
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DP": () => (/* binding */ makePayment)
/* harmony export */ });
/* unused harmony exports paymentSignatureConfirmation, initializeRazorpay */
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _booking_bookingHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_1__]);
_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const paymentSignatureConfirmation = async (oId, pId, paymnentSignature)=>{
    const sigVal = `${oId}|${pId}`;
    const secret = "BzvQt2yLjo9SmwNAisWljZdx" || 0; // Replace with your actual secret value
    const hmac = crypto__WEBPACK_IMPORTED_MODULE_0___default().createHmac("sha256", secret);
    hmac.update(sigVal.toString());
    const signature = hmac.digest("hex");
    if (signature === paymnentSignature) {
        return true;
    } else {
        return false;
    }
};
const initializeRazorpay = (userBooking)=>{
    return new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = ()=>{
            resolve(true);
        };
        script.onerror = ()=>{
            resolve(false);
        };
        document.body.appendChild(script);
    });
};
const makePayment = async (userBooking, setErrorMessage, setErrorModel, setLoadingModel)=>{
    const res = await initializeRazorpay(userBooking);
    if (!res) {
        alert("Razorpay SDK Failed to load");
        setErrorMessage("Razorpay SDK Failed to load! Please try again.");
        setLoadingModel(false);
        setErrorModel(true);
        return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/booking/razorpay", {
        method: "POST",
        body: JSON.stringify({
            userBooking: userBooking
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((t)=>t.json());
    console.log(data);
    const receiptId = data.id;
    var options = {
        key: "rzp_live_VtMYXe2BzOEbRN",
        name: "StayBook",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Staybook Hotel Booking",
        image: "/images/favicon.png",
        handler: async function(response) {
            userBooking.razorpay_Payment_Id = response.razorpay_payment_id;
            userBooking.razorpay_Order_Id = response.razorpay_order_id;
            userBooking.razorpay_Signature_Id = response.razorpay_signature;
            const paymentConfirmation = await paymentSignatureConfirmation(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature);
            if (paymentConfirmation) {
                userBooking.amount_Paid = userBooking.total_Price;
                userBooking.receipt_Id = receiptId;
                setLoadingModel(true);
                const data = await (0,_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_1__/* .hotelBookingHandler */ .w1)(userBooking);
                const booking_status = "Booking Successful";
                const hotel_Name = userBooking.hotel_Name;
                const user_Name = userBooking.user_Name;
                const user_Email = userBooking.user_Email_Id;
                const user_Phone = userBooking.user_Phone_Number;
                const booking_receipt = userBooking.receipt_Id;
                const url = `/bookingInformation/${data.booking_Id}?booking_status=${encodeURIComponent(booking_status)}&hotel_Name=${encodeURIComponent(hotel_Name)}&user_Name=${encodeURIComponent(user_Name)}&user_Email=${encodeURIComponent(user_Email)}&user_Phone=${encodeURIComponent(user_Phone)}&booking_receipt=${encodeURIComponent(booking_receipt)}`;
                window.location.href = url;
            } else {
                setErrorMessage("Booking Failed! Please try again.");
                setLoadingModel(false);
                setErrorModel(true);
            }
        },
        prefill: {
            name: userBooking.user_Name,
            email: userBooking.user_Email_Id,
            contact: userBooking.user_Phone_Number
        },
        notes: {
            address: userBooking.user_Address
        },
        theme: {
            color: "#CF8F24"
        }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7777:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HotelInformation),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9329);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5091);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4038);
/* harmony import */ var _components_imageGallery_ImageGalleryCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(141);
/* harmony import */ var _components_hotel_AmenityCard_AmenityCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5899);
/* harmony import */ var _components_hotel_DescriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1741);
/* harmony import */ var _components_hotel_AmenityCard_FullAmenityCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6751);
/* harmony import */ var _components_hotel_PlacesCard_NearbyPlacesCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5545);
/* harmony import */ var _components_hotel_RoomsCard_RoomsCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4956);
/* harmony import */ var _components_hotel_BookingCard_BookingCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9612);
/* harmony import */ var _classModels_bookings_bookingDetails__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7160);
/* harmony import */ var _classModels_bookings_roomDetails__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9834);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_hotel_PaymentInfo_PaymentInformation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8639);
/* harmony import */ var _components_models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9244);
/* harmony import */ var _components_models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(681);
/* harmony import */ var _lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4770);
/* harmony import */ var _components_hotel_BookingCard_MobileBookingCard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6612);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _sanity__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_6__, _components_imageGallery_ImageGalleryCard__WEBPACK_IMPORTED_MODULE_10__, _components_hotel_AmenityCard_AmenityCard__WEBPACK_IMPORTED_MODULE_11__, _components_hotel_DescriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_12__, _components_hotel_AmenityCard_FullAmenityCard__WEBPACK_IMPORTED_MODULE_13__, _components_hotel_PlacesCard_NearbyPlacesCard__WEBPACK_IMPORTED_MODULE_14__, _components_hotel_RoomsCard_RoomsCard__WEBPACK_IMPORTED_MODULE_15__, _components_hotel_BookingCard_BookingCard__WEBPACK_IMPORTED_MODULE_16__, _components_hotel_PaymentInfo_PaymentInformation__WEBPACK_IMPORTED_MODULE_19__, _components_models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_20__, _components_models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_21__, _lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_22__, _components_hotel_BookingCard_MobileBookingCard__WEBPACK_IMPORTED_MODULE_23__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _sanity__WEBPACK_IMPORTED_MODULE_5__, next_sanity__WEBPACK_IMPORTED_MODULE_6__, _components_imageGallery_ImageGalleryCard__WEBPACK_IMPORTED_MODULE_10__, _components_hotel_AmenityCard_AmenityCard__WEBPACK_IMPORTED_MODULE_11__, _components_hotel_DescriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_12__, _components_hotel_AmenityCard_FullAmenityCard__WEBPACK_IMPORTED_MODULE_13__, _components_hotel_PlacesCard_NearbyPlacesCard__WEBPACK_IMPORTED_MODULE_14__, _components_hotel_RoomsCard_RoomsCard__WEBPACK_IMPORTED_MODULE_15__, _components_hotel_BookingCard_BookingCard__WEBPACK_IMPORTED_MODULE_16__, _components_hotel_PaymentInfo_PaymentInformation__WEBPACK_IMPORTED_MODULE_19__, _components_models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_20__, _components_models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_21__, _lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_22__, _components_hotel_BookingCard_MobileBookingCard__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























function HotelInformation(props) {
    const [formVisibility, setFormVisibility] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [bookingCardVisibility, setBookingCardVisibility] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [loadingModelVisible, setLoadingModel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [errorModelVisible, setErrorModel] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [userBooking, setUserBooking] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new _classModels_bookings_bookingDetails__WEBPACK_IMPORTED_MODULE_17__/* .BookingDetails */ .y());
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        const bookingDetails = new _classModels_bookings_bookingDetails__WEBPACK_IMPORTED_MODULE_17__/* .BookingDetails */ .y();
        bookingDetails.hotel_Firebase_Id = props.hotelInfo.hotel_Firebase_Unique_Id;
        bookingDetails.hotel_Sanity_Id = props.hotelInfo._id;
        bookingDetails.hotel_Owner_Id = props.hotelInfo.hotel_Owner_Unique_Id;
        bookingDetails.hotel_Image_Url = props.hotelInfo.image_List[0];
        bookingDetails.hotel_Name = props.hotelInfo.name;
        bookingDetails.hotel_Landmark = props.hotelInfo.landmark;
        let rm = new _classModels_bookings_roomDetails__WEBPACK_IMPORTED_MODULE_24__/* .RoomDetails */ .X();
        rm.room_Count = 1;
        rm.num_Guests = 2;
        rm.room_Name = props.hotelInfo.rooms[0].type;
        rm.room_Info = props.hotelInfo.rooms[0].info;
        rm.plan_Name = props.hotelInfo.rooms[0].plans[0].title;
        rm.plan_Info = props.hotelInfo.rooms[0].plans[0].info;
        rm.plan_Price = props.hotelInfo.rooms[0].plans[0].price;
        bookingDetails.roomsList.push(rm);
        bookingDetails.updateBookingDetails();
        setUserBooking(bookingDetails);
    }, [
        props.hotelInfo._id,
        props.hotelInfo.hotel_Firebase_Unique_Id,
        props.hotelInfo.hotel_Owner_Unique_Id,
        props.hotelInfo.image_List,
        props.hotelInfo.landmark,
        props.hotelInfo.name,
        props.hotelInfo.rooms
    ]);
    const [roomCount, setRoomCount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userBooking.total_Rooms_Count);
    const [totalRoomCost, setTotalRoomCost] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userBooking.total_Room_Cost);
    const [totalTax, setTotalTax] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userBooking.total_Tax);
    const [totalPrice, setTotalPrice] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(userBooking.total_Price);
    const [selectedRoomsList, setSelectedRoomsList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    const roomSelectHandler = async ()=>{
        if (userBooking.roomsList.length === 0) {
            setErrorMessage("Please select a room before creating a booking!");
            setErrorModel(true);
            return;
        }
        const response = await (0,_lib_booking_bookingHandler__WEBPACK_IMPORTED_MODULE_22__/* .fetchUserPersonalDetails */ .i)(userBooking);
        userBooking.user_Name = response.user_Name;
        userBooking.user_Phone_Number = response.user_Phone_Number;
        userBooking.user_Email_Id = response.user_Email_Id;
        setUserBooking(userBooking);
        setFormVisibility(true);
    };
    const hotelBookingHandler = async (event)=>{
        const data = await hotelBookingHandler(userBooking);
        setLoadingModel(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: props.hotelInfo.meta_title
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
                className: `w-screen scrollbar-hide`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_models_Loading_LoadingModel__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                        modelVisible: loadingModelVisible,
                        setLoadingModel: setLoadingModel
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_models_Error_ErrorModel__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                        errorMsg: errorMessage,
                        setErrorMessage: setErrorMessage,
                        modelVisible: errorModelVisible,
                        setErrorModel: setErrorModel
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative w-screen flex flex-col mb-5`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_imageGallery_ImageGalleryCard__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            hotelImgList: props.hotelInfo.image_List
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: `relative w-[95%] h-full flex flex-col md:flex-row justify-between mx-auto mb-10`,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: `relative w-full md:w-[60%] scrollbar-hide`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `w-full mb-4 text-center md:text-left`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: `text-5xl font-serif`,
                                            children: props.hotelInfo.name
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `w-full flex mb-4 text-justify items-center align-middle`,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                target: "_blank",
                                                href: props.hotelInfo.map,
                                                className: `cursor-pointer`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `p-2 rounded-full items-center align-middle hover:bg-slate-200 mr-2`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_18__.LocationMarkerIcon, {
                                                        className: `relative fill-black h-7 w-7 rounded-full cursor-pointer`
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `text-xl font-light text-justify`,
                                                children: props.hotelInfo.address
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `w-full flex flex-col lg:flex-row justify-between mb-4 md:items-center md:align-middle`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                className: `flex text-left items-center align-middle py-1`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: `font-semibold text-xl text-red-600 text-left`,
                                                        children: "PHONE:\xa0\xa0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: `text-xl`,
                                                        children: props.hotelInfo.phone
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                className: `flex text-start items-center align-middle py-1`,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: `font-semibold text-xl text-red-600 text-left`,
                                                        children: "EMAIL:\xa0\xa0"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: `text-xl`,
                                                        children: props.hotelInfo.email
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `rounded-3xl border-1 border-red-400 mb-4`
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_AmenityCard_AmenityCard__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        amenitiesList: props.hotelInfo.amenities_List
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_RoomsCard_RoomsCard__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                        roomsList: props.hotelInfo.rooms,
                                        amenitiesList: props.hotelInfo.hotel_amenities,
                                        userBooking: userBooking,
                                        setRoomCount: setRoomCount,
                                        setTotalRoomCost: setTotalRoomCost,
                                        setTotalTax: setTotalTax,
                                        setTotalPrice: setTotalPrice
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: `w-full mb-4 text-justify`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: `text-xl font-light text-justify`,
                                            children: props.hotelInfo.description
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_DescriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        hotelDescriptionsList: props.hotelInfo.hotel_description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_AmenityCard_FullAmenityCard__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        aminityList: props.hotelInfo.hotel_amenities
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_PlacesCard_NearbyPlacesCard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                        locationsList: props.hotelInfo.hotel_nearby_places
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_BookingCard_BookingCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .ZP, {
                                userBooking: userBooking,
                                setUserBooking: setUserBooking,
                                setRoomCount: setRoomCount,
                                setTotalRoomCost: setTotalRoomCost,
                                setTotalTax: setTotalTax,
                                setTotalPrice: setTotalPrice,
                                roomSelectHandler: roomSelectHandler,
                                hotelBookingHandler: hotelBookingHandler
                            })
                        ]
                    }),
                    formVisibility && userBooking.roomsList.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_PaymentInfo_PaymentInformation__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                        userBooking: userBooking,
                        setUserBooking: setUserBooking,
                        setErrorMessage: setErrorMessage,
                        setErrorModel: setErrorModel,
                        setLoadingModel: setLoadingModel
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_hotel_BookingCard_MobileBookingCard__WEBPACK_IMPORTED_MODULE_23__/* .MobileBookingCard */ .W, {
                        userBooking: userBooking,
                        checkin: props.checkin,
                        checkout: props.checkout
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const { params , query , req , res  } = await context;
    const slug_Name = params?.hotelInfo[0];
    const checkin = moment__WEBPACK_IMPORTED_MODULE_7___default()(query.checkin, "DD-MM-YYYY").toDate();
    const checkout = (0,_lib_helper__WEBPACK_IMPORTED_MODULE_9__/* .addDays */ .E4)(moment__WEBPACK_IMPORTED_MODULE_7___default()(query.checkin, "DD-MM-YYYY").toDate(), Number(query.num_nights));
    const num_nights = query.num_nights;
    const num_guests = query.num_guests;
    const hotel_id = params.hotelInfo[params.hotelInfo.length - 1];
    const hotelInfoQuery = next_sanity__WEBPACK_IMPORTED_MODULE_6__.groq`
    *[_type == "hotel" && (slug.current == "${slug_Name}" || id == "${hotel_id}")] {
      _id,
      landmark,
      address,
      "hotel_Firebase_Unique_Id":hotel_firebase_Unique_Id,
      hotel_Owner_Unique_Id,
      "amenities_List":amenities[]->{
        _id,
        name,
        "image_Url":image.asset->url,
      },
      card_amenities,
      description,
      email,
      hotel_amenities[],
      hotel_description[],
      hotel_nearby_places[]{
        "map_Url":nearby_place_link,
        "name":nearby_place_name,
      },
      id,
      "image_List":images[].asset->url,
      map,
      meta_desc,
      meta_title,
      name,
      phone,
      rooms[guests == ${num_guests}] | order(plan[].price asc) {
        "image_List": images[].asset->url,
        _key,
        info,
        ameneties,
        guests,
        type,
        plans[],
      },
      "slug_Name": slug.current,
    }
  `;
    let hotelInfo = await _sanity__WEBPACK_IMPORTED_MODULE_5__/* .sanityClient.fetch */ .i3.fetch(hotelInfoQuery);
    return {
        props: {
            hotelInfo: hotelInfo[0],
            checkin: String(moment__WEBPACK_IMPORTED_MODULE_7___default()(query.checkin, "DD-MM-YYYY").toDate()),
            checkout: String((0,_lib_helper__WEBPACK_IMPORTED_MODULE_9__/* .addDays */ .E4)(moment__WEBPACK_IMPORTED_MODULE_7___default()(query.checkin, "DD-MM-YYYY").toDate(), Number(query.num_nights))),
            num_nights: num_nights,
            num_guests: num_guests,
            hotel_id: hotel_id
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 26:
/***/ (() => {



/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@emailjs/browser");

/***/ }),

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4809:
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

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

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-input-2");

/***/ }),

/***/ 5031:
/***/ ((module) => {

"use strict";
module.exports = require("shortid");

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

/***/ }),

/***/ 5091:
/***/ ((module) => {

"use strict";
module.exports = import("next-sanity");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,1396,2636,5675,29,1664,4038,7145,4770,7482], () => (__webpack_exec__(7777)));
module.exports = __webpack_exports__;

})();