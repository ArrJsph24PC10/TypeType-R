"use strict";
(self["webpackChunktypey_type"] = self["webpackChunktypey_type"] || []).push([[989],{

/***/ 9989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lookup_Lookup)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2483);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(3391);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(5350);
// EXTERNAL MODULE: ./src/components/StrokesForWords.tsx + 5 modules
var StrokesForWords = __webpack_require__(4480);
// EXTERNAL MODULE: ./src/components/PseudoContentButton.tsx
var PseudoContentButton = __webpack_require__(3008);
// EXTERNAL MODULE: ./src/components/Subheader.tsx
var Subheader = __webpack_require__(7532);
;// ./src/pages/lookup/utilities/getWordFamilyGroup.ts
const getWordFamilyGroup=(trimmedWord,globalLookupDictionary)=>{const commonFamilyGroupEndings=["ing","ed","ment","'s","ly","ion","s","er"];const familyGroup=[];commonFamilyGroupEndings.forEach(ending=>{const trimmedWordPlusEnding=trimmedWord+ending;if(globalLookupDictionary.get(trimmedWordPlusEnding)){familyGroup.push(trimmedWordPlusEnding);}});if(trimmedWord.endsWith("e")){if(globalLookupDictionary.get(trimmedWord.slice(0,-1)+"ing")){familyGroup.push(trimmedWord.slice(0,-1)+"ing");}}return familyGroup;};/* harmony default export */ const utilities_getWordFamilyGroup = (getWordFamilyGroup);
// EXTERNAL MODULE: ./src/states/legacy/AppMethodsContext.tsx
var AppMethodsContext = __webpack_require__(4457);
// EXTERNAL MODULE: ./node_modules/jotai/esm/react.mjs
var esm_react = __webpack_require__(2976);
// EXTERNAL MODULE: ./src/states/userSettingsState.ts
var userSettingsState = __webpack_require__(8282);
// EXTERNAL MODULE: ./src/utils/debounce.ts
var debounce = __webpack_require__(8265);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6723);
;// ./src/pages/lookup/Lookup.tsx
const Lookup=_ref=>{let{globalLookupDictionary,globalLookupDictionaryLoaded,personalDictionaries}=_ref;const location=(0,react_router/* useLocation */.zy)();const history=(0,react_router/* useHistory */.W6)();const[lookupTerm,setLookupTerm]=(0,react.useState)(()=>{var _URLSearchParams$get;return(_URLSearchParams$get=new URLSearchParams(location.search).get("q"))!==null&&_URLSearchParams$get!==void 0?_URLSearchParams$get:"";});const updateSearchParams=(0,react.useMemo)(()=>(0,debounce/* default */.A)(q=>{const search=q===""?undefined:`?q=${q}`;history.replace({search,hash:history.location.hash});},100),[history]);const userSettings=(0,esm_react/* useAtomValue */.md)(userSettingsState/* userSettingsState */.sj);const{appFetchAndSetupGlobalDict,setCustomLessonContent}=(0,AppMethodsContext/* useAppMethods */.$W)();const[bookmarkURL,setBookmarkURL]=(0,react.useState)("/typey-type"+"/lookup");const mainHeading=(0,react.useRef)(null);const[trackedPhrase,setTrackPhrase]=(0,react.useState)("");const[wordFamilyGroup,setWordFamilyGroup]=(0,react.useState)([]);(0,react.useEffect)(()=>{var _mainHeading$current;(_mainHeading$current=mainHeading.current)===null||_mainHeading$current===void 0?void 0:_mainHeading$current.focus();},[]);(0,react.useEffect)(()=>{updateSearchParams(encodeURIComponent(lookupTerm));},[lookupTerm,updateSearchParams]);(0,react.useEffect)(()=>{if(trackedPhrase.length>0){setWordFamilyGroup(utilities_getWordFamilyGroup(trackedPhrase,globalLookupDictionary));}else{setWordFamilyGroup([]);}},[trackedPhrase,globalLookupDictionary]);const strokesForWordsChange=phrase=>{setLookupTerm(phrase);const encodedPhrase=encodeURIComponent(phrase);setBookmarkURL("/typey-type"+"/lookup?q="+encodedPhrase);};const setUpCustomLesson=()=>{const words=wordFamilyGroup.slice();words.unshift(trackedPhrase);const maybeMaterial=words.map(word=>{if(globalLookupDictionary.get(word)){return{phrase:word,stroke:globalLookupDictionary.get(word)[0][0]};}else{return undefined;}}).filter(notUndefined=>!!notUndefined);const material=maybeMaterial;setCustomLessonContent(material);};const enabledCustomLessonLink=trackedPhrase.length>0;return/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{id:"main",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Subheader/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mr1 self-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:"flex items-center min-h-40",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{ref:mainHeading,tabIndex:-1,children:"Lookup"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mxn2",children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:enabledCustomLessonLink?"/lessons/custom/setup":"#",onClick:enabledCustomLessonLink?setUpCustomLesson:undefined,className:`link-button link-button-ghost table-cell mr1${enabledCustomLessonLink?"":" o-30"}`,children:"Set up custom lesson"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"p3 mx-auto mw-1024 mh-page","data-testid":"lookup-page-contents",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mw-584 w-100 flex-grow mr3 min-h-384",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(StrokesForWords/* default */.A,{fetchAndSetupGlobalDict:appFetchAndSetupGlobalDict,globalLookupDictionary:globalLookupDictionary,globalLookupDictionaryLoaded:globalLookupDictionaryLoaded,lookupTerm:lookupTerm,onChange:strokesForWordsChange,personalDictionaries:personalDictionaries,trackPhrase:setTrackPhrase,userSettings:userSettings})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mt0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:"h4",children:"Share link"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb0 truncate",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"py05 dib",id:"js-bookmark-url",children:["https://didoesdigital.com",bookmarkURL]})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(PseudoContentButton/* default */.A,{className:"js-clipboard-button button button--secondary table-cell mr2 copy-to-clipboard",style:{lineHeight:2},dataClipboardTarget:"#js-bookmark-url",children:"Copy link to clipboard"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt18 mw-336 flex-grow",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb1 de-emphasized",children:"Some related words:"}),wordFamilyGroup.length>0&&/*#__PURE__*/(0,jsx_runtime.jsx)("pre",{className:"fw4",children:wordFamilyGroup.join("\n")})]})})]})})]});};/* harmony default export */ const lookup_Lookup = (Lookup);

/***/ })

}]);
//# sourceMappingURL=989.e5eb49af.chunk.js.map