"use strict";
(self["webpackChunktypey_type"] = self["webpackChunktypey_type"] || []).push([[304],{

/***/ 8304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dictionaries_Dictionary)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2483);
// EXTERNAL MODULE: ./node_modules/react-document-title/index.js
var react_document_title = __webpack_require__(5556);
var react_document_title_default = /*#__PURE__*/__webpack_require__.n(react_document_title);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(5350);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(3391);
// EXTERNAL MODULE: ./node_modules/react-ga4/dist/index.js
var dist = __webpack_require__(3071);
// EXTERNAL MODULE: ./node_modules/@sentry/minimal/esm/index.js + 1 modules
var esm = __webpack_require__(2226);
// EXTERNAL MODULE: ./src/components/Subheader.tsx
var Subheader = __webpack_require__(7532);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6723);
;// ./src/pages/dictionaries/DictionaryNotFound.tsx
// fullURL = "https://docs.google.com/forms/d/e/1FAIpQLSfqBBEs5Fl8vgay03fEXzSU7Ey_pms6Y6Nt2Yk8gFftGhAWQA/viewform?usp=pp_url&entry.1884511690=Example";
const googleFormURL="https://docs.google.com/forms/d/e/1FAIpQLSfqBBEs5Fl8vgay03fEXzSU7Ey_pms6Y6Nt2Yk8gFftGhAWQA/viewform?usp=pp_url&entry.1884511690=";const DictionaryNotFound=()=>{const mainHeading=(0,react.useRef)(null);const location=(0,react_router/* useLocation */.zy)();(0,react.useEffect)(()=>{let labelString="Missing dictionary";if(location&&location.pathname){labelString=location.pathname;}dist/* default */.Ay.event({category:"Dictionary not found",action:"Visited",label:labelString});esm/* captureException */.Cp("Dictionary not found");},[location]);(0,react.useEffect)(()=>{if(mainHeading){var _mainHeading$current;(_mainHeading$current=mainHeading.current)===null||_mainHeading$current===void 0?void 0:_mainHeading$current.focus();}},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)((react_document_title_default()),{title:"Typey Type | Missing dictionary",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{id:"main",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Subheader/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mr1 self-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:"flex items-center min-h-40",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{ref:mainHeading,className:"table-cell mr2",tabIndex:-1,children:"Missing dictionary"})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mx-auto mw-1024 p3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mw-568",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mt3",children:"That dictionary couldn\u2019t be found. Try another:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/dictionaries",children:"All dictionaries"})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Or"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:googleFormURL+encodeURIComponent((location===null||location===void 0?void 0:location.pathname)||""),target:"_blank",rel:"noopener noreferrer",id:"ga--dictionary--give-feedback",children:"let me know (form opens in a new tab)"})]})]})})]})});};/* harmony default export */ const dictionaries_DictionaryNotFound = (DictionaryNotFound);
// EXTERNAL MODULE: ./src/components/PseudoContentButton.tsx
var PseudoContentButton = __webpack_require__(3008);
// EXTERNAL MODULE: ./src/utils/typey-type.js
var typey_type = __webpack_require__(9502);
// EXTERNAL MODULE: ./src/components/Announcer/useAnnouncer.tsx
var useAnnouncer = __webpack_require__(483);
// EXTERNAL MODULE: ./node_modules/jotai/esm/react.mjs
var esm_react = __webpack_require__(2976);
// EXTERNAL MODULE: ./src/states/dictionaryIndexState.ts
var dictionaryIndexState = __webpack_require__(7468);
;// ./src/pages/dictionaries/Dictionary.tsx
// fullURL = "https://docs.google.com/forms/d/e/1FAIpQLSfqBBEs5Fl8vgay03fEXzSU7Ey_pms6Y6Nt2Yk8gFftGhAWQA/viewform?usp=pp_url&entry.1884511690=Example";
const Dictionary_googleFormURL="https://docs.google.com/forms/d/e/1FAIpQLSfqBBEs5Fl8vgay03fEXzSU7Ey_pms6Y6Nt2Yk8gFftGhAWQA/viewform?usp=pp_url&entry.1884511690=";const truncationLimit=1000;/** Example: "/lessons/collections/tech/react/" */const isInternalDictLink=dictLink=>dictLink.startsWith("/typey-type")||dictLink.startsWith("/dictionaries/")||dictLink.startsWith("/lessons/")||dictLink.startsWith("/support");const getExternalLink=dictLink=>isInternalDictLink(dictLink)?null:/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mt3",children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:dictLink,target:"_blank",rel:"noopener noreferrer",children:"Learn more (opens in new tab)"})});const getInternalLink=(dictLink,dictTitle)=>isInternalDictLink(dictLink)?`${"/typey-type"}${dictLink}`.startsWith("/typey-type"+"/lessons")?/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.N_,{to:dictLink,children:["Lesson: ",dictTitle]})}):/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:dictLink,children:"Learn more"})}):null;const getDictionaryContentsString=dictContents=>{let contents="";contents=JSON.stringify(dictContents).split('",').join('",\n');contents="{\n"+contents.slice(1,contents.length);// split first line {"STROKE": "TRANSLATION", on {"
const contentsArray=contents.split("\n");const contentsArrayLength=contentsArray.length;if(contentsArrayLength>truncationLimit){let newContents=contentsArray.slice(0,truncationLimit);newContents[truncationLimit-1]=newContents[truncationLimit-1].slice(0,-1);// removing trailing comma
newContents.push("}");contents=newContents.join("\n");}return[contents,contentsArrayLength];};const Dictionary=()=>{const dictionaryIndex=(0,esm_react/* useAtomValue */.md)(dictionaryIndexState/* dictionaryIndexState */.e);const mainHeading=(0,react.useRef)(null);const{updateMessage}=(0,useAnnouncer/* useAnnouncerApi */.b)();const[loadingDictionaryContents,setLoadingDictionaryContents]=(0,react.useState)(true);const[hasError,setHasError]=(0,react.useState)(false);const[dictionary,setDictionary]=(0,react.useState)({author:"Typey Type",title:"Loading dictionary…",subtitle:"",category:"Typey Type",subcategory:"",tagline:"Loading…",link:"/typey-type"+"/support#typey-type-dictionary",path:"/dictionaries/typey-type/top-10.json",contents:{"-T":"the","-F":"of","SKP":"and","TO":"to","AEU":"a","TPH":"in","TPOR":"for","S":"is","OPB":"on","THA":"that"}});const location=(0,react_router/* useLocation */.zy)();(0,react.useEffect)(()=>{if(mainHeading){var _mainHeading$current;(_mainHeading$current=mainHeading.current)===null||_mainHeading$current===void 0?void 0:_mainHeading$current.focus();}},[]);(0,react.useEffect)(()=>{if(!location.pathname.startsWith("/dictionaries/custom")&&location.pathname.startsWith("/dictionaries")){fetch("/typey-type"+location.pathname.replace(/\/$/,".json"),{method:"GET",credentials:"same-origin"}).then(response=>{const contentType=response.headers.get("content-type");if(contentType&&contentType.indexOf("application/json")!==-1){return response.json().then(dictionaryContents=>{const dictIndexEntry=(0,typey_type/* lookUpDictionaryInIndex */.Ww)("/typey-type"+location.pathname,dictionaryIndex);const dictionaryData={...dictIndexEntry,contents:dictionaryContents};setDictionary(dictionaryData);updateMessage("Finished loading: "+dictionaryData.title);setLoadingDictionaryContents(false);});}else{throw new Error("Unable to load dictionary");}}).catch(error=>{console.log("Unable to load dictionary",error);updateMessage("Unable to load dictionary");setHasError(true);});}// FIXME: updateMessage in dependency array
// eslint-disable-next-line react-hooks/exhaustive-deps
},[location]);const trackDownloadDictionary=()=>{dist/* default */.Ay.event({category:"Downloads",action:"Click",label:dictionary!==null&&dictionary!==void 0&&dictionary.path&&dictionary.path!=="/dictionaries/typey-type/top-10.json"?dictionary.path:"No dictionary path"});};if(hasError){return/*#__PURE__*/(0,jsx_runtime.jsx)(dictionaries_DictionaryNotFound,{});}if(dictionary){const[contents,contentsArrayLength]=getDictionaryContentsString(dictionary.contents);const truncatedMessage=contentsArrayLength>truncationLimit?/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"bg-danger dark:text-coolgrey-900",children:["The dictionary is too large to display in full so this only shows the first ",truncationLimit," entries."]}):"";const externalLink=getExternalLink(dictionary.link);const internalLink=getInternalLink(dictionary.link,dictionary.title);return/*#__PURE__*/(0,jsx_runtime.jsx)((react_document_title_default()),{title:"Typey Type | Dictionary: "+dictionary.title,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{id:"main",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Subheader/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mr1 self-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:"flex items-center min-h-40",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("h2",{className:"table-cell mr2",ref:mainHeading,tabIndex:-1,children:[loadingDictionaryContents?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Loading dictionary\u2026"}):dictionary.title,hasError&&/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:"Loading failed."})]})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex mxn2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"/typey-type"+dictionary.path,download:"",onClick:trackDownloadDictionary,className:"link-button link-button-ghost table-cell mr1",children:"Download"}),/*#__PURE__*/(0,jsx_runtime.jsx)(PseudoContentButton/* default */.A,{className:"js-clipboard-button button button--secondary table-cell mr1 copy-to-clipboard",style:{lineHeight:2},dataClipboardTarget:"#js-dictionary-json-pre",children:"Copy to clipboard"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"p3 mx-auto mw-1024",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mw-568",children:[dictionary.author&&!dictionary.tagline.includes("Loading")&&/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"text-small text-uppercase de-emphasized mt3",children:["Contributor: ",dictionary.author]}),dictionary.tagline&&!dictionary.tagline.includes("Loading")&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:dictionary.tagline}),dictionary.link&&!dictionary.link.includes("/typey-type/support")&&internalLink,dictionary.link&&externalLink,/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"The dictionary"}),hasError&&/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Loading failed."}),!loadingDictionaryContents&&truncatedMessage,loadingDictionaryContents?/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Loading\u2026"}):/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{className:"quote h-168 overflow-scroll mw-384 mt1 mb3",id:"js-dictionary-json-pre",tabIndex:0,children:/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:contents})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:Dictionary_googleFormURL+encodeURIComponent((location===null||location===void 0?void 0:location.pathname)||""),target:"_blank",rel:"noopener noreferrer",id:"ga--dictionary--give-feedback",children:"Give feedback on this dictionary (form opens in a new tab)"})})]})]})});}else{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{ref:mainHeading,tabIndex:-1,children:"That dictionary is missing."})});}};/* harmony default export */ const dictionaries_Dictionary = (Dictionary);

/***/ })

}]);
//# sourceMappingURL=304.f570f69b.chunk.js.map