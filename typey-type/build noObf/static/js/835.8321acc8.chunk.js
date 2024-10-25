"use strict";
(self["webpackChunktypey_type"] = self["webpackChunktypey_type"] || []).push([[835],{

/***/ 1835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dictionaries_Dictionaries)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2483);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(3391);
// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(514);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(5350);
// EXTERNAL MODULE: ./src/components/OutboundLink.tsx
var OutboundLink = __webpack_require__(5029);
// EXTERNAL MODULE: ./src/components/StrokesForWords.tsx + 5 modules
var StrokesForWords = __webpack_require__(4480);
// EXTERNAL MODULE: ./src/components/Subheader.tsx
var Subheader = __webpack_require__(7532);
// EXTERNAL MODULE: ./node_modules/jotai/esm/react.mjs
var esm_react = __webpack_require__(2976);
// EXTERNAL MODULE: ./src/states/dictionaryIndexState.ts
var dictionaryIndexState = __webpack_require__(7468);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6723);
;// ./src/pages/dictionaries/DictionariesIndex.tsx
const DictionariesIndex=_ref=>{let{fetchAndSetupGlobalDict,globalLookupDictionary,globalLookupDictionaryLoaded,personalDictionaries,userSettings}=_ref;const dictionaryIndex=(0,esm_react/* useAtomValue */.md)(dictionaryIndexState/* dictionaryIndexState */.e);const mainHeading=(0,react.useRef)(null);(0,react.useEffect)(()=>{if(mainHeading){var _mainHeading$current;(_mainHeading$current=mainHeading.current)===null||_mainHeading$current===void 0?void 0:_mainHeading$current.focus();}},[]);const linkList=dictionaryIndex.map(dictionary=>{const author=dictionary.author&&dictionary.author.length>0?dictionary.author:"Typey Type";const subtitle=dictionary.subtitle&&dictionary.subtitle.length>0?": "+dictionary.subtitle:"";const dictionarypath=dictionary.path.replace(/lesson.txt/,"lesson/")// This is deprecated
.replace(/.json/,"/");return/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"unstyled-list-item mb1",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.N_,{to:`${dictionarypath}`.replace(/path\.txt$/,"").replace(/\/{2,}/g,"/"),id:"ga--dictionary-index-"+dictionarypath.replace(/[/.]/g,"-"),children:[author,"\u2019s ",dictionary.title,subtitle]})},dictionary.path);});return/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{id:"main",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Subheader/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mr1 self-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:"flex items-center min-h-40",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{ref:mainHeading,tabIndex:-1,children:"Dictionaries"})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"p3 mx-auto mw-1024",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mw-584",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"typey-type-dictionary",children:"Typey\xA0Type dictionary"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/dictionaries/typey-type/typey-type/",children:"Typey\xA0Type\u2019s dictionary"})," ","removes many misstrokes and mimics the"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Plover version 4 dictionary"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["You can use Plover\u2019s dictionary or you can use use Di\u2019s dictionaries that power Typey Type\u2019s stroke suggestions from"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(OutboundLink/* default */.A,{eventLabel:"Di\u2019s Steno Dictionaries repo",newTabAndIUnderstandTheAccessibilityImplications:true,to:"https://github.com/didoesdigital/steno-dictionaries",children:"Di\u2019s Steno Dictionaries repo (opens in new tab)"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"Stroke hints"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Typey\xA0Type\u2019s stroke hints look for the shortest briefs with penalties for briefs using multiple strokes, the star (",/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:"*"}),") key, and non-standard prefix or suffix strokes."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"British English spelling"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["The"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/lessons/drills/top-10000-project-gutenberg-words/",children:"Top 10000 Project Gutenberg words lesson"})," ","and stories lessons like Aesop\u2019s Fables use British English spellings for words such as \u201Cneighbour\u201D. For these you can use the"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/dictionaries/didoesdigital/dict-en-AU-with-extra-stroke/",children:"Australian English with extra strokes"})," ","dictionary. Typey\xA0Type\u2019s dictionary uses these entries when Plover has no entry for a word. Otherwise, you can fingerspell."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"Corrections"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["If you notice any odd strokes,"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(OutboundLink/* default */.A,{eventLabel:"post to the feedback form",newTabAndIUnderstandTheAccessibilityImplications:true,to:"https://docs.google.com/forms/d/e/1FAIpQLSeevsX2oYEvnDHd3y8weg5_7-T8QZsF93ElAo28JO9Tmog-7Q/viewform?usp=sf_link",children:"use the feedback form to let Di know (opens in new tab)"}),"."]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mw-584",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Useful dictionaries"}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"unstyled-list",children:linkList}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Want to add another dictionary to this list?"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(OutboundLink/* default */.A,{eventLabel:"Typey Type for Stenographers dictionary feedback form",newTabAndIUnderstandTheAccessibilityImplications:true,to:"https://docs.google.com/spreadsheets/d/1w-9GciR8D7sWuLVxw9ATstF1tcyCjCe7UtIn7l80cXk/edit?usp=sharing",children:"Share your dictionary (opens in a new tab)"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["For lesson-specific dictionaries, you can now \u201CDownload lesson hints as a dictionary\u201D from individual lesson pages. For example, see the bottom of the"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/lessons/drills/top-10000-project-gutenberg-words/",children:"Top 10000 Project Gutenberg words lesson"}),"."]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mt1 mw-336 flex-grow",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:"mt3",children:"Custom dictionaries"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["To see your own stroke hints in lessons,"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/dictionaries/management",children:"add your dictionaries"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/dictionaries/management",className:"link-button dib mt1",style:{lineHeight:2},id:"ga--dictionaries-index--add-dictionaries",children:"Add your dictionaries"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"Use custom lessons"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["To use a different dictionary or steno theory, upload your words and strokes to a ",/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/lessons/custom",children:"custom lesson"}),". The briefs shown will match whatever strokes you provide."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h4",{children:"Share your dictionaries"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["To help the open steno community and Typey\xA0Type grow even faster, add your custom dictionaries to the"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(OutboundLink/* default */.A,{eventLabel:"community\u2019s dictionaries",newTabAndIUnderstandTheAccessibilityImplications:true,to:"https://docs.google.com/spreadsheets/d/1w-9GciR8D7sWuLVxw9ATstF1tcyCjCe7UtIn7l80cXk/edit?usp=sharing",children:"community\u2019s dictionaries (opens in new tab)"}),"."]}),/*#__PURE__*/(0,jsx_runtime.jsx)(StrokesForWords/* default */.A,{fetchAndSetupGlobalDict:fetchAndSetupGlobalDict,globalLookupDictionary:globalLookupDictionary,globalLookupDictionaryLoaded:globalLookupDictionaryLoaded,personalDictionaries:personalDictionaries,userSettings:userSettings})]})]})})]});};/* harmony default export */ const dictionaries_DictionariesIndex = (DictionariesIndex);
// EXTERNAL MODULE: ./src/components/PageLoading.tsx + 2 modules
var PageLoading = __webpack_require__(6975);
// EXTERNAL MODULE: ./src/states/legacy/AppMethodsContext.tsx
var AppMethodsContext = __webpack_require__(4457);
// EXTERNAL MODULE: ./src/states/userSettingsState.ts
var userSettingsState = __webpack_require__(8282);
// EXTERNAL MODULE: ./src/pages/lessons/components/UserSettings/updateGlobalUserSetting.js
var updateGlobalUserSetting = __webpack_require__(8278);
;// ./src/pages/dictionaries/Dictionaries.tsx
const AsyncDictionary=lib_default()({loader:()=>__webpack_require__.e(/* import() */ 304).then(__webpack_require__.bind(__webpack_require__, 8304)),loading:PageLoading/* default */.A,delay:300});const AsyncDictionaryManagement=lib_default()({loader:()=>__webpack_require__.e(/* import() */ 647).then(__webpack_require__.bind(__webpack_require__, 647)),loading:PageLoading/* default */.A,delay:300});const Dictionaries=_ref=>{var _match$url;let{globalLookupDictionaryLoaded,globalLookupDictionary,personalDictionaries,...dictionaryProps}=_ref;const userSettings=(0,esm_react/* useAtomValue */.md)(userSettingsState/* userSettingsState */.sj);const{updatePersonalDictionaries,appFetchAndSetupGlobalDict}=(0,AppMethodsContext/* useAppMethods */.$W)();const toggleExperiment=(0,updateGlobalUserSetting/* useToggleExperiment */.J1)();const match=(0,react_router/* useRouteMatch */.W5)({path:"/dictionaries",strict:true,sensitive:true});const url=(_match$url=match===null||match===void 0?void 0:match.url)!==null&&_match$url!==void 0?_match$url:"";return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.dO,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.qh,{path:[`${url}/lessons/:category/:subcategory/:dictionaryPath`,`${url}/lessons/fundamentals/:dictionaryPath`,`${url}/lessons/drills/:dictionaryPath`,`${url}/typey-type/:dictionaryPath`,`${url}/individual/:dictionaryPath`,`${url}/didoesdigital/:dictionaryPath`,`${url}/plover/:dictionaryPath`],children:/*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense,{fallback:/*#__PURE__*/(0,jsx_runtime.jsx)(PageLoading/* default */.A,{}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(AsyncDictionary,{})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.qh,{exact:true,path:`${url}/management`,children:/*#__PURE__*/(0,jsx_runtime.jsx)(AsyncDictionaryManagement,{fetchAndSetupGlobalDict:appFetchAndSetupGlobalDict,globalLookupDictionary:globalLookupDictionary,toggleExperiment:toggleExperiment,updatePersonalDictionaries:updatePersonalDictionaries,...dictionaryProps})}),/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.qh,{exact:true,path:url,children:/*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense,{fallback:/*#__PURE__*/(0,jsx_runtime.jsx)(PageLoading/* default */.A,{}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(dictionaries_DictionariesIndex,{userSettings:userSettings,globalLookupDictionary:globalLookupDictionary,globalLookupDictionaryLoaded:globalLookupDictionaryLoaded,personalDictionaries:personalDictionaries,fetchAndSetupGlobalDict:appFetchAndSetupGlobalDict,...dictionaryProps})})})]})});};/* harmony default export */ const dictionaries_Dictionaries = (Dictionaries);

/***/ }),

/***/ 8278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GE: () => (/* binding */ useDismissBackupBanner),
/* harmony export */   J1: () => (/* binding */ useToggleExperiment),
/* harmony export */   LL: () => (/* binding */ useChangeWriterInput),
/* harmony export */   yg: () => (/* binding */ useChangeInputForKAOES)
/* harmony export */ });
/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3071);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2976);
/* harmony import */ var _states_globalUserSettingsState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3187);
// (event: SyntheticInputEvent<HTMLInputElement>) => void
function useChangeWriterInput(){const setState=(0,jotai__WEBPACK_IMPORTED_MODULE_2__/* .useSetAtom */ .Xr)(_states_globalUserSettingsState__WEBPACK_IMPORTED_MODULE_1__/* .writerInputState */ .Zb);return event=>{let name="BAD_INPUT";if(event&&event.target&&event.target.name){setState(event.target.name);name=event.target.name;}let labelString=name;if(!name){labelString="BAD_INPUT";}react_ga4__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.event({category:"Global user settings",action:"Change writer input",label:labelString});};}function useChangeInputForKAOES(){const setState=(0,jotai__WEBPACK_IMPORTED_MODULE_2__/* .useSetAtom */ .Xr)(_states_globalUserSettingsState__WEBPACK_IMPORTED_MODULE_1__/* .inputForKAOESState */ .y4);return event=>{let name="BAD_INPUT";if(event&&event.target&&event.target.name){setState(event.target.name);name=event.target.name;}let labelString=name;if(!name){labelString="BAD_INPUT";}react_ga4__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.event({category:"Global user settings",action:"Change input for KAOES",label:labelString});};}function useToggleExperiment(){const setState=(0,jotai__WEBPACK_IMPORTED_MODULE_2__/* .useSetAtom */ .Xr)(_states_globalUserSettingsState__WEBPACK_IMPORTED_MODULE_1__/* .experimentsState */ .AJ);return event=>{const target=event.target;const value=target.checked;const name=target.name;setState(name,value);let labelString=value;if(value===undefined){labelString="BAD_INPUT";}else{labelString.toString();}react_ga4__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.event({category:"Global user settings",action:"Change "+name,label:labelString});};}function useDismissBackupBanner(){const setState=(0,jotai__WEBPACK_IMPORTED_MODULE_2__/* .useSetAtom */ .Xr)(_states_globalUserSettingsState__WEBPACK_IMPORTED_MODULE_1__/* .backupBannerDismissedTime */ .Jl);return()=>{setState(Date.now());let labelString="Dismiss";react_ga4__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.event({category:"Global user settings",action:"Dismiss backup banner",label:labelString});};}

/***/ }),

/***/ 7468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ dictionaryIndexState)
/* harmony export */ });
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1506);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7594);
const dictionaryIndexState=(0,jotai_utils__WEBPACK_IMPORTED_MODULE_0__/* .atomWithLazy */ .Wj)(_utils_getData__WEBPACK_IMPORTED_MODULE_1__/* .fetchDictionaryIndex */ .NQ);

/***/ })

}]);
//# sourceMappingURL=835.8321acc8.chunk.js.map