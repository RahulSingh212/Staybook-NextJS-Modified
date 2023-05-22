(() => {
var exports = {};
exports.id = 1055;
exports.ids = [1055];
exports.modules = {

/***/ 3939:
/***/ ((module) => {

// Exports
module.exports = {
	"outerFloat": "BlogCard_outerFloat__abo9y",
	"floating": "BlogCard_floating__2LLdb",
	"innerFloat": "BlogCard_innerFloat__JumwV",
	"searchBlogsButton": "BlogCard_searchBlogsButton__09ZtG",
	"heading": "BlogCard_heading__WYY5g",
	"blogHeader": "BlogCard_blogHeader__WyQFO",
	"blogSearch": "BlogCard_blogSearch__PBCim",
	"blogsContainer": "BlogCard_blogsContainer__6qmqa",
	"button": "BlogCard_button__ZR3uz",
	"postBody": "BlogCard_postBody__l95Ie",
	"background": "BlogCard_background__vwWNw",
	"content": "BlogCard_content__VroBY"
};


/***/ }),

/***/ 8568:
/***/ ((module) => {

// Exports
module.exports = {
	"outerFloat": "blogs_outerFloat__xh5Su",
	"floating": "blogs_floating__SIjZY",
	"innerFloat": "blogs_innerFloat__qF7Kf",
	"searchBlogsButton": "blogs_searchBlogsButton__aG8wV",
	"heading": "blogs_heading__YxUL9",
	"blogHeader": "blogs_blogHeader__4Ixof",
	"blogSearch": "blogs_blogSearch__RVauV",
	"blogsContainer": "blogs_blogsContainer__pNEUJ",
	"button": "blogs_button__9OIR8",
	"postBody": "blogs_postBody__sh1K_",
	"background": "blogs_background__o6TlP",
	"content": "blogs_content___PsIB"
};


/***/ }),

/***/ 5871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BlogCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BlogCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3939);
/* harmony import */ var _BlogCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_BlogCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function BlogCard(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const showBlogDetails = ()=>{
        console.log("Slug-Name");
        console.log(props.post.slug.current);
        router.push({
            pathname: `/blogs/${props.post.slug.current}`
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_BlogCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().blogCard),
        onClick: showBlogDetails,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: props.post.mainImage.asset.url,
                alt: props.post.title,
                layout: "fill",
                objectFit: "contain",
                objectPosition: "left"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: props.post.title
            })
        ]
    }, props.post.slug.current);
}


/***/ }),

/***/ 1306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blogs),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blogs_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8568);
/* harmony import */ var _blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5091);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9329);
/* harmony import */ var _components_screens_blogs_BlogCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5871);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_4__, _sanity__WEBPACK_IMPORTED_MODULE_5__]);
([next_sanity__WEBPACK_IMPORTED_MODULE_4__, _sanity__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Blogs(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [posts, setPosts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.posts);
    const [filteredPosts, setFilteredPosts] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.filteredPosts);
    const handleChange = (e)=>{
        setQuery(e.target.value);
    };
    const toPlainText = (blocks)=>{
        return blocks.map((block)=>{
            if (block._type !== "block" || !block.children) {
                return "";
            }
            return block.children.map((child)=>child.text).join("");
        }).join("\n\n");
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const filter = [];
        posts.forEach((post)=>{
            if (post.title.toLowerCase().includes(query.toLowerCase()) || toPlainText(post.body).toLowerCase().includes(query.toLowerCase())) {
                filter.push(post);
            }
        });
        setFilteredPosts(filter);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "StayBook Blogs"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "StayBook Booking engine for Hotels enabled with high speed wifi throughout. There are different wifi connections on different floors. The guest can find the wifi passwords on the wifi cards inside of their rooms we have a specialized work station for our guests with high speed cables. Delhi hotels"
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
                className: `w-screen`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default().outerFloat),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default().floating),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default().innerFloat),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        router.push({
                                            pathname: "/hotel"
                                        });
                                    },
                                    className: `${(_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btn)} ${(_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["btn-primary"])} cursor-pointer`,
                                    children: "Book Now"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default().blogHeader),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: `/images/favicon.png`,
                                alt: "StayBook Hotels",
                                layout: "fill",
                                objectFit: "contain",
                                objectPosition: "left"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default().heading),
                                children: "Blog page"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["sr-only"]),
                                children: "Search"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: `relative w-[90%] flex justify-center`,
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "relative w-[90%] placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm blogSearch",
                                        placeholder: "Search blogs",
                                        type: "text",
                                        name: "search",
                                        value: query,
                                        onChange: handleChange
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        id: "searchBlogsButton",
                                        type: "submit",
                                        className: "relative w-[10%] p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex align-middle items-center justify-evenly",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["sr-only"]),
                                                children: "Search"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_blogs_module_scss__WEBPACK_IMPORTED_MODULE_8___default().blogsContainer),
                        children: filteredPosts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_screens_blogs_BlogCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                post: post
                            }, index))
                    })
                ]
            })
        ]
    });
}
const getStaticProps = async ()=>{
    const blogsQuery = next_sanity__WEBPACK_IMPORTED_MODULE_4__.groq`
    *[_type == "post"] {
      title,
      slug,
      body,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }
  `;
    const blogsList = await _sanity__WEBPACK_IMPORTED_MODULE_5__/* .sanityClient.fetch */ .i3.fetch(blogsQuery);
    return {
        props: {
            posts: blogsList,
            filteredPosts: blogsList
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9329:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ 1791:
/***/ ((module) => {

"use strict";
module.exports = require("@sanity/image-url");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

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

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5091:
/***/ ((module) => {

"use strict";
module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,1396,2636,5675], () => (__webpack_exec__(1306)));
module.exports = __webpack_exports__;

})();