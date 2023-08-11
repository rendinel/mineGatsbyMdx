"use strict";
exports.id = "component---src-templates-blog-category-jsx";
exports.ids = ["component---src-templates-blog-category-jsx"];
exports.modules = {

/***/ "./src/components/Home/Card.jsx":
/*!**************************************!*\
  !*** ./src/components/Home/Card.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ "./src/components/Home/Category.jsx");




function Card({
  post
}) {
  const {
    date,
    title,
    preview,
    slug,
    category
  } = post.frontmatter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    color: "#757575",
    fontSize: "0.875rem"
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Category__WEBPACK_IMPORTED_MODULE_2__["default"], {
    category: category
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    color: "#292929",
    as: "h3",
    fontWeight: "400",
    fontSize: "1.5rem"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    lineHeight: "1.54",
    my: "1rem",
    fontSize: "1.125rem",
    as: "p",
    color: "rgba(0,0,0,.8)"
  }, preview), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {
    as: gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: `/blog/${slug}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    fontSize: "1rem",
    textDecoration: "underline",
    _hover: {
      color: '#0074d9'
    }
  }, "Read Article")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    h: "1px",
    bg: "#e6e6e6",
    my: "3rem"
  }));
}

/***/ }),

/***/ "./src/components/Home/CardList.jsx":
/*!******************************************!*\
  !*** ./src/components/Home/CardList.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./src/components/Home/Card.jsx");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination */ "./src/components/Home/Pagination.jsx");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category */ "./src/components/Home/Category.jsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-PULVB27S.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs");





function CardList({
  posts,
  cats,
  title,
  currentPage,
  numberOfPages,
  isHome
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    pt: "3rem",
    px: "1rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    mb: "1rem",
    fontWeight: "400",
    lineHeight: "1.3",
    as: "h2",
    fontSize: "1.875rem"
  }, title), cats && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {
    mt: "0.5rem",
    mb: "1rem"
  }, cats.map(cat => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: cat,
      category: cat
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    h: "1px",
    bg: "#e6e6e6",
    mb: "3rem"
  }), posts.map(post => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      post: post,
      key: post.frontmatter.slug
    });
  }), isHome && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentPage: currentPage,
    numberOfPages: numberOfPages
  }));
}

/***/ }),

/***/ "./src/components/Home/Category.jsx":
/*!******************************************!*\
  !*** ./src/components/Home/Category.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");



function Category({
  category
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
    as: gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: `/blog/${category}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    _hover: {
      color: '#0074d9'
    },
    mt: "0.5rem",
    mr: "0.5rem",
    mb: "1rem",
    color: "#757575",
    fontSize: "0.875rem"
  }, "#", category));
}

/***/ }),

/***/ "./src/components/Home/Pagination.jsx":
/*!********************************************!*\
  !*** ./src/components/Home/Pagination.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-K7XRJ7NL.mjs");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chunk-2OOHT3W5.mjs");



function Pagination({
  currentPage,
  numberOfPages
}) {
  const prevPage = currentPage - 1 === 0 || currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`;
  const nextPage = currentPage === numberOfPages ? `/blog` : `/blog/${currentPage + 1}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    mb: "1.5rem",
    direction: "row",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    direction: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
    _hover: {
      underline: 'none'
    },
    as: gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: prevPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    fontSize: "1.125rem"
  }, "\u2190 Prev")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
    _hover: {
      underline: 'none'
    },
    as: gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,
    to: nextPage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
    fontSize: "1.125rem"
  }, " Next \u2192 "))));
}

/***/ }),

/***/ "./src/components/Layout/Seo.jsx":
/*!***************************************!*\
  !*** ./src/components/Layout/Seo.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Seo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-site-metadata */ "./src/hooks/use-site-metadata.jsx");


function Seo({
  title,
  description,
  pathname,
  children,
  published
}) {
  const {
    title: defaultTitle,
    author,
    description: defaultDescription,
    image,
    icon,
    siteUrl,
    twitterUsername
  } = (0,_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_1__.useSiteMetadata)();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    icon: `${siteUrl}${icon}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    author,
    published
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, `${seo.title} - ${seo.description}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "google-site-verification",
    content: "mjq5DtsDhyOgGE3egTFHS3JMajGqOVf8Aaiupq0A6BI"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "author",
    content: seo.author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:creator",
    content: seo.twitterUsername
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "article:published_time",
    content: seo.published
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: seo.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: seo.description
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:url",
    content: seo.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:image",
    content: seo.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:image:alt",
    content: "my social media banner"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "icon",
    href: seo.icon
  }), children);
}

/***/ }),

/***/ "./src/hooks/use-site-metadata.jsx":
/*!*****************************************!*\
  !*** ./src/hooks/use-site-metadata.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSiteMetadata: () => (/* binding */ useSiteMetadata)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_370345306_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/370345306.json */ "./public/page-data/sq/d/370345306.json");

const useSiteMetadata = () => {
  const data = _public_page_data_sq_d_370345306_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.site.siteMetadata;
};

/***/ }),

/***/ "./src/templates/BlogCategory.jsx?export=default":
/*!*******************************************************!*\
  !*** ./src/templates/BlogCategory.jsx?export=default ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ BlogCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Seo */ "./src/components/Layout/Seo.jsx");
/* harmony import */ var _components_Home_CardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/CardList */ "./src/components/Home/CardList.jsx");



const CategoryQuery = "3471113478";
function BlogCategory({
  pageContext,
  data
}) {
  const {
    cat
  } = pageContext;
  const posts = data.allMdx.nodes;
  const title = cat[0].toUpperCase() + cat.slice(1);
  console.log(cat, posts);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Home_CardList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: posts,
    title: `All ${title} posts`
  }));
}
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_Seo__WEBPACK_IMPORTED_MODULE_1__["default"], null);

/***/ }),

/***/ "./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayToObjectNotation: () => (/* binding */ arrayToObjectNotation),
/* harmony export */   breakpoints: () => (/* binding */ breakpoints),
/* harmony export */   isCustomBreakpoint: () => (/* binding */ isCustomBreakpoint),
/* harmony export */   isResponsiveObjectLike: () => (/* binding */ isResponsiveObjectLike),
/* harmony export */   mapResponsive: () => (/* binding */ mapResponsive),
/* harmony export */   objectToArrayNotation: () => (/* binding */ objectToArrayNotation)
/* harmony export */ });
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/shared-utils */ "./node_modules/@chakra-ui/shared-utils/dist/index.mjs");
// src/responsive.ts

var breakpoints = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function mapResponsive(prop, mapper) {
  if (Array.isArray(prop)) {
    return prop.map((item) => item === null ? null : mapper(item));
  }
  if ((0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.isObject)(prop)) {
    return Object.keys(prop).reduce((result, key) => {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }
  if (prop != null) {
    return mapper(prop);
  }
  return null;
}
function objectToArrayNotation(obj, bps = breakpoints) {
  const result = bps.map((br) => {
    var _a;
    return (_a = obj[br]) != null ? _a : null;
  });
  const lastItem = result[result.length - 1];
  while (lastItem === null)
    result.pop();
  return result;
}
function arrayToObjectNotation(values, bps = breakpoints) {
  const result = {};
  values.forEach((value, index) => {
    const key = bps[index];
    if (value == null)
      return;
    result[key] = value;
  });
  return result;
}
function isResponsiveObjectLike(obj, bps = breakpoints) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.every((key) => bps.includes(key));
}
var isCustomBreakpoint = (v) => Number.isNaN(Number(v));




/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-5VJV6UNA.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-5VJV6UNA.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDividerStyles: () => (/* binding */ getDividerStyles)
/* harmony export */ });
/* harmony import */ var _chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/breakpoint-utils */ "./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs");
'use client'

// src/stack/stack.utils.tsx
;
function getDividerStyles(options) {
  const { spacing, direction } = options;
  const dividerStyles = {
    column: {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: spacing,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: spacing,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": (0,_chakra_ui_breakpoint_utils__WEBPACK_IMPORTED_MODULE_0__.mapResponsive)(
      direction,
      (value) => dividerStyles[value]
    )
  };
}


//# sourceMappingURL=chunk-5VJV6UNA.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Heading: () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-TKWR62NH.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/styled-system/dist/index.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs");
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/shared-utils */ "./node_modules/@chakra-ui/shared-utils/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client'

// src/heading.tsx
;


var Heading = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Heading2(props, ref) {
  const styles = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.useStyleConfig)("Heading", props);
  const { className, ...rest } = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.omitThemingProps)(props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _chakra_ui_system__WEBPACK_IMPORTED_MODULE_4__.chakra.h2,
    {
      ref,
      className: (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-heading", props.className),
      ...rest,
      __css: styles
    }
  );
});
Heading.displayName = "Heading";


//# sourceMappingURL=chunk-7OLJDQMT.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-ZFQCCYWD.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-ZFQCCYWD.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackItem: () => (/* binding */ StackItem)
/* harmony export */ });
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client'

// src/stack/stack-item.tsx
;

var StackItem = (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.chakra.div,
  {
    className: "chakra-stack__item",
    ...props,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...props["__css"]
    }
  }
);
StackItem.displayName = "StackItem";


//# sourceMappingURL=chunk-ZFQCCYWD.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: () => (/* binding */ Stack)
/* harmony export */ });
/* harmony import */ var _chunk_ZFQCCYWD_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunk-ZFQCCYWD.mjs */ "./node_modules/@chakra-ui/layout/dist/chunk-ZFQCCYWD.mjs");
/* harmony import */ var _chunk_5VJV6UNA_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-5VJV6UNA.mjs */ "./node_modules/@chakra-ui/layout/dist/chunk-5VJV6UNA.mjs");
/* harmony import */ var _chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react-children-utils */ "./node_modules/@chakra-ui/react-children-utils/dist/index.mjs");
/* harmony import */ var _chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/shared-utils */ "./node_modules/@chakra-ui/shared-utils/dist/index.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs");
/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/system */ "./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
'use client'
;


// src/stack/stack.tsx





var Stack = (0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref) => {
  const {
    isInline,
    direction: directionProp,
    align,
    justify,
    spacing = "0.5rem",
    wrap,
    children,
    divider,
    className,
    shouldWrapChildren,
    ...rest
  } = props;
  const direction = isInline ? "row" : directionProp != null ? directionProp : "column";
  const dividerStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => (0,_chunk_5VJV6UNA_mjs__WEBPACK_IMPORTED_MODULE_3__.getDividerStyles)({ spacing, direction }),
    [spacing, direction]
  );
  const hasDivider = !!divider;
  const shouldUseChildren = !shouldWrapChildren && !hasDivider;
  const clones = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const validChildren = (0,_chakra_ui_react_children_utils__WEBPACK_IMPORTED_MODULE_4__.getValidChildren)(children);
    return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
      const key = typeof child.key !== "undefined" ? child.key : index;
      const isLast = index + 1 === validChildren.length;
      const wrappedChild = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_ZFQCCYWD_mjs__WEBPACK_IMPORTED_MODULE_5__.StackItem, { children: child }, key);
      const _child = shouldWrapChildren ? wrappedChild : child;
      if (!hasDivider)
        return _child;
      const clonedDivider = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(
        divider,
        {
          __css: dividerStyle
        }
      );
      const _divider = isLast ? null : clonedDivider;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        _child,
        _divider
      ] }, key);
    });
  }, [
    divider,
    dividerStyle,
    hasDivider,
    shouldUseChildren,
    shouldWrapChildren,
    children
  ]);
  const _className = (0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-stack", className);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    _chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.chakra.div,
    {
      ref,
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      flexWrap: wrap,
      gap: hasDivider ? void 0 : spacing,
      className: _className,
      ...rest,
      children: clones
    }
  );
});
Stack.displayName = "Stack";


//# sourceMappingURL=chunk-ZHMYA64R.mjs.map

/***/ }),

/***/ "./node_modules/@chakra-ui/react-children-utils/dist/index.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/@chakra-ui/react-children-utils/dist/index.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValidChildren: () => (/* binding */ getValidChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
// src/index.ts

function getValidChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(
    (child) => (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)
  );
}



/***/ }),

/***/ "./public/page-data/sq/d/370345306.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/370345306.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Lucio Rendine Blog","description":"My blog where i publish coding tutorials.","twitterUsername":"@LucioRendine","image":"/profilepic2.png","icon":"/favicon.ico","siteUrl":"https://mrnutrition.vercel.app","author":"Lucio Rendine"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-category-jsx.js.map