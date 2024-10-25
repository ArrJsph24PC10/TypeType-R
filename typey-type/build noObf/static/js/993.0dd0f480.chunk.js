"use strict";
(self["webpackChunktypey_type"] = self["webpackChunktypey_type"] || []).push([[993],{

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

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ progress_Progress)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2483);
// EXTERNAL MODULE: ./node_modules/react-ga4/dist/index.js
var dist = __webpack_require__(3071);
// EXTERNAL MODULE: ./src/components/ErrorBoundary.tsx
var ErrorBoundary = __webpack_require__(8337);
// EXTERNAL MODULE: ./src/components/PseudoContentButton.tsx
var PseudoContentButton = __webpack_require__(3008);
// EXTERNAL MODULE: ./src/components/OutboundLink.tsx
var OutboundLink = __webpack_require__(5029);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6723);
;// ./src/pages/progress/components/RecommendationDescription.tsx
const RecommendationDescription=_ref=>{let{studyType}=_ref;let description;switch(studyType){case"error":description=/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Unable to fetch the recommendation course. Check your Internet connection and try ",/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:".",children:"refresh the page"}),"."]});break;case"practice":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Practice a longer lesson and mimic real usage as closely as possible. Write as fast as you can without causing misstrokes. Explore classic stories that use simple and common sentences."});break;case"drill":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Regularly drill common words to build up your muscle memory. Write as fast as you can, aiming for a high speed score. Pick specific drills that focus on similar words."});break;case"revise":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Revise lessons with lots of words you want to memorise, like the top 100 words. Try to recall briefs before revealing their strokes. Avoid fingerspelling or writing out words in long form."});break;case"discover":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Discover new words without hiding their briefs while you learn to write them. Write slowly, concentrating on accuracy and forming good habits around how you stroke word parts."});break;case"compete":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"To really push your speed and vocabulary, you might add some competition. Try a race. Unexpected material can also teach you to how to adapt to unknown words under pressure."});break;case"game":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"You\u2019ve been so diligent! You might take a break from drilling and try a game. Steno games let you make mistakes and think differently about what you\u2019ve learned."});break;case"wildcard":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Well done! You\u2019ve typed a lot of words today. You might rest your hands and your mind for now, and come back in 4+\xA0hours."});break;case"break":description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Well done! You\u2019ve typed a lot of words today. You might rest your hands and your mind for now. Save your progress and take 5\xA0minutes or come back in 4+\xA0hours."});break;default:description=/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Practice writing as fast as you can without causing misstrokes using simple sentences and common words."});break;}return/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb3",children:description});};/* harmony default export */ const components_RecommendationDescription = (RecommendationDescription);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(5350);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(3391);
// EXTERNAL MODULE: ./src/components/Announcer/useAnnouncer.tsx
var useAnnouncer = __webpack_require__(483);
// EXTERNAL MODULE: ./node_modules/jotai/esm/react.mjs
var esm_react = __webpack_require__(2976);
// EXTERNAL MODULE: ./src/states/lessonState.ts
var lessonState = __webpack_require__(2800);
// EXTERNAL MODULE: ./src/states/lessonIndexState.ts
var lessonIndexState = __webpack_require__(8204);
// EXTERNAL MODULE: ./src/utils/params.js
var params = __webpack_require__(6462);
;// ./src/utils/recommendations.js
let recommendedStudySession=[// null,
'practice','drill','revise','discover','wildcard','break'// repeat
];const games=[{studyType:'game',limitNumberOfWords:null,repetitions:null,linkTitle:"KAOES (keys) game",linkText:"Play KAOES (keys) game",link:'/games/KAOES'},{studyType:'game',limitNumberOfWords:null,repetitions:null,linkTitle:"SHUFL (shuffle) game",linkText:"Play SHUFL (shuffle) game",link:'/games/SHUFL'},{studyType:'game',limitNumberOfWords:null,repetitions:null,linkTitle:"TPEUBGSZ (fixes) game",linkText:"Play TPEUBGSZ (fixes) game",link:'/games/TPEUBGSZ'}];function getRecommendedNextLesson(courses){let lessonsProgress=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};let history=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};let numberOfWordsSeen=arguments.length>3&&arguments[3]!==undefined?arguments[3]:0;let numberOfWordsMemorised=arguments.length>4&&arguments[4]!==undefined?arguments[4]:0;let lessonIndex=arguments.length>5&&arguments[5]!==undefined?arguments[5]:{};let metWords=arguments.length>6&&arguments[6]!==undefined?arguments[6]:{};// fallback lesson:
let recommendedNextLesson={studyType:"practice",limitNumberOfWords:300,repetitions:1,linkTitle:"Top 10000 Project Gutenberg words",linkText:"Practice 300 words from Top 10000 Project Gutenberg words",link:"/typey-type"+"/lessons/drills/top-10000-project-gutenberg-words/?recommended=true&"+params/* default */.A.practiceParams};// Check currentStep to set index of recommendedStudySession
// For given step, check if it's viable e.g. you've seen punctuation and basic words so you can do practice:
// metWords = { "a": 1, "man": 1, "!": 1, ".": 1, "?": 1, "as": 1, "if": 1 }
// 'A': KPA/AEU
// 'man!': PHAPB SKHRAPL
// 'A': KPA/AEU
// 'man.': PHAPB TP-PL
// 'A': KPA/AEU
// 'man?': PHAPB H-F
// 'As': AZ
// 'if.': TP TP-PL
// If not viable, move to next step; if nothing is valid (e.g. you've discovered ALL words on Typey Type, fall back to top 10,000 project gutenberg words practice
let recommendedStudySessionIndex=0;if(typeof history==="object"){switch(history["currentStep"]){case"practice":recommendedStudySessionIndex=0;break;case"drill":recommendedStudySessionIndex=1;break;case"revise":recommendedStudySessionIndex=2;break;case"discover":recommendedStudySessionIndex=3;break;case"wildcard":recommendedStudySessionIndex=4;break;case"compete":recommendedStudySessionIndex=4;break;case"game":recommendedStudySessionIndex=4;break;case"break":recommendedStudySessionIndex=5;break;case null:recommendedStudySessionIndex=0;break;default:recommendedStudySessionIndex=0;break;}}if(recommendedStudySession[recommendedStudySessionIndex]==="practice"&&numberOfWordsMemorised<2){recommendedStudySessionIndex=recommendedStudySessionIndex+1;}if(recommendedStudySession[recommendedStudySessionIndex]==="practice"){let practiceParams='?recommended=true&'+params/* default */.A.practiceParams;let practiceChoice=Math.random()<.9?"practiceLessons":"practiceAllYourWords";switch(practiceChoice){case"practiceAllYourWords":practiceParams=practiceParams.replace('newWords=1','newWords=0');recommendedNextLesson.limitNumberOfWords=300;recommendedNextLesson.linkTitle="Your words";recommendedNextLesson.linkText="Practice your words";recommendedNextLesson.link="/lessons/progress/"+practiceParams;recommendedNextLesson.studyType='practice';recommendedNextLesson.repetitions=1;break;case"practiceLessons":let recommendedPracticeLesson=courses.practiceCourse.find(recommendable=>{let entryInLessonsProgress=lessonsProgress["/typey-type"+recommendable.path];let seenOrMemorisedChoice=Math.random()<.9?"numberOfWordsSeen":"numberOfWordsMemorised";// You've never seen it before, so it's probably a good one to start
if(typeof entryInLessonsProgress==="undefined"){return true;}else{if(typeof entryInLessonsProgress[seenOrMemorisedChoice]!=="undefined"){if(seenOrMemorisedChoice==="numberOfWordsMemorised"){// You've memorised most of this lesson already, so it is probably boring.
// We don't aim for 100% because we're tracking unique number of words seen.
// Practice lessons contains some word repetition so number of unique words so it
// will always fall short of the target.
if(entryInLessonsProgress[seenOrMemorisedChoice]>=.6*recommendable.target){return false;}else{return true;}}else{if(entryInLessonsProgress["numberOfWordsToDiscover"]===0){return false;}else{return true;}}}else{return true;}}// return false;
});let wordCount=300;let recommendedPracticeLessonInIndex=lessonIndex.find(recommended=>{return"/lessons"+recommended.path===recommendedPracticeLesson.path;});if(typeof recommendedPracticeLessonInIndex!=="undefined"){if(typeof recommendedPracticeLessonInIndex.wordCount!=="undefined"){wordCount=recommendedPracticeLessonInIndex.wordCount;}}if(typeof recommendedPracticeLesson!=="undefined"){recommendedNextLesson.studyType='practice';recommendedNextLesson.limitNumberOfWords=Math.min(300,wordCount);recommendedNextLesson.repetitions=1;recommendedNextLesson.linkTitle=recommendedPracticeLesson.lessonTitle;recommendedNextLesson.linkText="Practice "+recommendedPracticeLesson.lessonTitle;recommendedNextLesson.link=recommendedPracticeLesson.path.replace(/lesson.txt$/,'')+practiceParams;}break;default:practiceParams=practiceParams.replace('newWords=1','newWords=0');recommendedNextLesson.limitNumberOfWords=300;recommendedNextLesson.linkTitle="Your words";recommendedNextLesson.linkText="Practice your words";recommendedNextLesson.link="/lessons/progress/?recommended=true&"+params/* default */.A.practiceParams;recommendedNextLesson.studyType='practice';recommendedNextLesson.repetitions=1;break;}}if(recommendedStudySession[recommendedStudySessionIndex]==="drill"&&numberOfWordsMemorised<2){recommendedStudySessionIndex=recommendedStudySessionIndex+1;}if(recommendedStudySession[recommendedStudySessionIndex]==="drill"){let entryInLessonsProgress;let drillChoice=Math.random()<.5?"drillLessons":"drillMemorised";switch(drillChoice){case"drillMemorised":recommendedNextLesson.studyType='drill';recommendedNextLesson.limitNumberOfWords=100;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle="Your memorised words";recommendedNextLesson.linkText="Your memorised words";recommendedNextLesson.link="/lessons/progress/memorised/?recommended=true&"+params/* default */.A.drillParams;break;case"drillLessons":let recommendedDrillLesson=courses.drillCourse.find(recommendable=>{entryInLessonsProgress=lessonsProgress["/typey-type"+recommendable.path];// No lessonsProgress lesson matches recommendable.path, then you've never seen that lesson
// It's not a great candidate for drilling
if(typeof entryInLessonsProgress==="undefined"){return false;}// Don't pick this lesson if you've already memorised 15 words and its target was 15
if((entryInLessonsProgress['numberOfWordsMemorised']||0)>=recommendable['target']){return false;}// Don't pick this lesson if it has fewer than 15 memorised words because it will be a boring lesson
if((entryInLessonsProgress['numberOfWordsMemorised']||0)<15){return false;}return true;});if(typeof recommendedDrillLesson!=="undefined"){recommendedNextLesson.studyType='drill';recommendedNextLesson.limitNumberOfWords=100;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle=recommendedDrillLesson.lessonTitle;recommendedNextLesson.linkText="Drill "+recommendedNextLesson.limitNumberOfWords+" words from "+recommendedDrillLesson.lessonTitle+" with "+recommendedNextLesson.repetitions+" repetitions";recommendedNextLesson.link=recommendedDrillLesson.path.replace(/lesson.txt$/,'')+"?recommended=true&"+params/* default */.A.drillParams;}else{recommendedNextLesson.studyType='drill';recommendedNextLesson.limitNumberOfWords=100;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle="Your memorised words";recommendedNextLesson.linkText="Your memorised words";recommendedNextLesson.link="/lessons/progress/memorised/?recommended=true&"+params/* default */.A.drillParams;}break;default:recommendedNextLesson.studyType='drill';recommendedNextLesson.limitNumberOfWords=100;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle="Your memorised words";recommendedNextLesson.linkText="Your memorised words";recommendedNextLesson.link="/lessons/progress/memorised/?recommended=true&"+params/* default */.A.drillParams;break;}}if(recommendedStudySession[recommendedStudySessionIndex]==="revise"&&numberOfWordsSeen<15){recommendedStudySessionIndex=recommendedStudySessionIndex+1;}if(recommendedStudySession[recommendedStudySessionIndex]==="revise"){// One day it could include an option to revise your worst words or tricky words
let reviseChoice=Math.random()<.5?"reviseLessons":"reviseSeen";switch(reviseChoice){case"reviseSeen":recommendedNextLesson.studyType='revise';recommendedNextLesson.limitNumberOfWords=50;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle="Your revision words";recommendedNextLesson.linkText="Your revision words";recommendedNextLesson.link="/lessons/progress/seen/?recommended=true&"+params/* default */.A.reviseParams;break;case"reviseLessons":let entryInLessonsProgress;let recommendedRevisionLesson=courses.revisionCourse.find(recommendable=>{// no lessonsProgress lesson matches recommendable.path, then you've never seen that lesson
// so it's probably not a good candidate for revision
entryInLessonsProgress=lessonsProgress["/typey-type"+recommendable.path];if(typeof entryInLessonsProgress==="undefined"){return false;}// don't pick this lesson if you've already seen 15 words and its target was 15
if(entryInLessonsProgress['numberOfWordsSeen']>=recommendable['target']){return false;}// don't pick this lesson if it has fewer than 15 seen words because you've already memorised all the words in this lesson
if(entryInLessonsProgress['numberOfWordsSeen']<15){return false;}return true;});if(typeof recommendedRevisionLesson!=="undefined"){recommendedNextLesson.studyType='revise';recommendedNextLesson.limitNumberOfWords=50;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle=recommendedRevisionLesson.lessonTitle;recommendedNextLesson.linkText="Revise 50 words from "+recommendedRevisionLesson.lessonTitle+" with 3 repetitions";recommendedNextLesson.link=recommendedRevisionLesson.path.replace(/lesson.txt$/,'')+"?recommended=true&"+params/* default */.A.reviseParams;}else{recommendedNextLesson.studyType='revise';recommendedNextLesson.limitNumberOfWords=50;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle="Your revision words";recommendedNextLesson.linkText="Your revision words";recommendedNextLesson.link="/lessons/progress/seen/?recommended=true&"+params/* default */.A.reviseParams;}break;default:recommendedNextLesson.studyType='revise';recommendedNextLesson.limitNumberOfWords=50;recommendedNextLesson.repetitions=3;recommendedNextLesson.linkTitle="Your revision words";recommendedNextLesson.linkText="Your revision words";recommendedNextLesson.link="/lessons/progress/seen/?recommended=true&"+params/* default */.A.reviseParams;break;}}// Once a step is chosen, pick a valid lesson/step for that
// For discover, review lessonsProgress for words seen and compare against targets in recommendedDiscoverCourse
if(recommendedStudySession[recommendedStudySessionIndex]==="discover"){let discoverParams="?recommended=true&"+params/* default */.A.discoverParams;let entryInLessonsProgress;let recommendedDiscoverLesson=courses.discoverCourse.find(recommendable=>{// no lessonsProgress lesson matches recommendable.path, then you've never seen that lesson
// so it's probably a good candidate
if(typeof lessonsProgress["/typey-type"+recommendable.path]==="undefined"){return true;}entryInLessonsProgress=lessonsProgress["/typey-type"+recommendable.path];// don't pick this lesson if you've already seen/memorised 15 words and its target was 15
if((entryInLessonsProgress['numberOfWordsSeen']||0)+(entryInLessonsProgress['numberOfWordsMemorised']||0)>=recommendable['target']){return false;}// don't pick this lesson if you've seen ALL the words (leftToDiscover === 0)
if(entryInLessonsProgress['numberOfWordsToDiscover']===0){return false;}return true;});let wordCount=15;let recommendedDiscoverLessonInIndex=lessonIndex.find(recommended=>{return"/lessons"+recommended.path===recommendedDiscoverLesson.path;});if(typeof recommendedDiscoverLessonInIndex!=="undefined"){if(typeof recommendedDiscoverLessonInIndex.wordCount!=="undefined"){wordCount=recommendedDiscoverLessonInIndex.wordCount;}}let wordsLeftToDiscover=15;if(lessonsProgress[recommendedDiscoverLesson.path]&&lessonsProgress[recommendedDiscoverLesson.path].numberOfWordsToDiscover){wordsLeftToDiscover=lessonsProgress[recommendedDiscoverLesson.path].numberOfWordsToDiscover;}let limitNumberOfWords=Math.min(15,wordCount,wordsLeftToDiscover);if(recommendedDiscoverLesson.path.includes("briefs")||recommendedDiscoverLesson.path.includes("punctuation")||recommendedDiscoverLesson.path.includes("longest")){limitNumberOfWords=Math.min(5,wordCount,wordsLeftToDiscover);discoverParams=discoverParams.replace("limitNumberOfWords=15","limitNumberOfWords="+limitNumberOfWords.toString());}if(typeof recommendedDiscoverLesson!=="undefined"){recommendedNextLesson.studyType='discover';recommendedNextLesson.limitNumberOfWords=limitNumberOfWords;recommendedNextLesson.repetitions=5;recommendedNextLesson.linkTitle=recommendedDiscoverLesson.lessonTitle;recommendedNextLesson.linkText="Discover "+limitNumberOfWords+" words from "+recommendedDiscoverLesson.lessonTitle+" with 5 repetitions";recommendedNextLesson.link=recommendedDiscoverLesson.path.replace(/lesson.txt$/,'')+discoverParams;}}// if (recommendedStudySession[recommendedStudySessionIndex] === "wildcard" && numberOfWordsMemorised < 50) {
//   recommendedStudySessionIndex = recommendedStudySessionIndex + 1;
// }
if(recommendedStudySession[recommendedStudySessionIndex]==="wildcard"){// One day it could include "test"
let wildcardChoice=Math.random()<.5?"compete":"game";switch(wildcardChoice){case"compete":recommendedNextLesson.studyType='compete';recommendedNextLesson.limitNumberOfWords=null;recommendedNextLesson.repetitions=null;recommendedNextLesson.linkTitle="Type Racer";recommendedNextLesson.linkText="Play Type Racer";recommendedNextLesson.link='https://play.typeracer.com/?universe=steno';break;case"game":if(numberOfWordsSeen+numberOfWordsMemorised<100){Object.assign(recommendedNextLesson,games[0]);}else{if(Math.random()<0.5){Object.assign(recommendedNextLesson,games[1]);}else{Object.assign(recommendedNextLesson,games[2]);}}break;default:recommendedNextLesson.studyType='break';recommendedNextLesson.limitNumberOfWords=null;recommendedNextLesson.repetitions=null;recommendedNextLesson.linkTitle="Take a break";recommendedNextLesson.linkText="Take a break";recommendedNextLesson.link='/break';break;}}if(recommendedStudySession[recommendedStudySessionIndex]==="break"){recommendedNextLesson.studyType='break';recommendedNextLesson.limitNumberOfWords=null;recommendedNextLesson.repetitions=null;recommendedNextLesson.linkTitle="Save your progress and take a break";recommendedNextLesson.linkText="Take a break";recommendedNextLesson.link='/break';}return recommendedNextLesson;}
// EXTERNAL MODULE: ./node_modules/jotai/esm/vanilla/utils.mjs
var utils = __webpack_require__(1506);
;// ./src/states/recommendedCoursesState.ts
const recommendedCoursesFallback={"discoverCourse":[{"path":"/lessons/fundamentals/one-syllable-words-with-simple-keys/lesson.txt","lessonTitle":"One-syllable words with simple keys","target":15}],"revisionCourse":[{"path":"/lessons/drills/top-10000-project-gutenberg-words/lesson.txt","lessonTitle":"Top 10000 Project Gutenberg words","target":10000}],"drillCourse":[{"path":"/lessons/drills/top-10000-project-gutenberg-words/lesson.txt","lessonTitle":"Top 10000 Project Gutenberg words","target":10000}],"practiceCourse":[{"path":"/lessons/drills/top-10000-project-gutenberg-words/lesson.txt","lessonTitle":"Top 10000 Project Gutenberg words","target":10000}]};function fetchRecommendations(){return fetch("/typey-type"+"/lessons/recommendations.json",{method:"GET",credentials:"same-origin"}).then(response=>{return response.json();}).then(json=>{return json;}).catch(()=>{return recommendedCoursesFallback;});}const _recommendedCoursesState=(0,utils/* atomWithLazy */.Wj)(fetchRecommendations);/**
 * This suspends while loading
 */const useRecommendedCourses=()=>{return (0,esm_react/* useAtomValue */.md)(_recommendedCoursesState);};
// EXTERNAL MODULE: ./node_modules/jotai/esm/vanilla.mjs
var vanilla = __webpack_require__(2660);
;// ./src/states/recommendationsState.ts
const defaultRecommendedNextLesson={studyType:"practice",limitNumberOfWords:50,repetitions:1,linkTitle:"Top 10000 Project Gutenberg words",linkText:"Practice 150 words from Top 10000 Project Gutenberg words",link:"/typey-type"+"/lessons/drills/top-10000-project-gutenberg-words/?recommended=true&"+params/* default */.A.practiceParams};const recommendedNextLessonState=(0,vanilla/* atom */.eU)(defaultRecommendedNextLesson);const defaultRecommendationHistory={currentStep:null};const recommendationHistoryState=(0,vanilla/* atom */.eU)(defaultRecommendationHistory);
;// ./src/pages/progress/components/RecommendationBoxFallback.tsx
const RecommendationBoxFallback=()=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"panel bg-white dark:bg-coolgrey-1000 min-h-424 p5 mb3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:"mt0 pb1 bb b--brand-primary-tint mb3",children:"Recommended\u2026"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb0 mt4",children:/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Loading\u2026"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"de-emphasized",children:"\u2026"}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_RecommendationDescription,{studyType:"discover"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:true,className:"mr2 link-button dib",style:{lineHeight:2},children:"Loading\u2026"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:true,id:"js-skip-button",className:"button button--secondary pl3 pr3",children:"Skip"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"hide",id:"js-next-recommended-link-text",children:"\xA0"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap content-start-ns",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap"})})]});};/* harmony default export */ const components_RecommendationBoxFallback = (RecommendationBoxFallback);
;// ./src/pages/progress/components/RecommendationBox.tsx
/**
 * Examples:
 * "https://play.typeracer.com/?universe=steno"
 * "/lessons/stories/proverbs/proverbs-starting-with-p/?recommended=true&study=practice&showStrokes=0&hideStrokesOnLastRepetition=1&newWords=1&seenWords=1&retainedWords=1&repetitions=1&limitNumberOfWords=0&sortOrder=sortOff"
 */const RecommendationBox=_ref=>{let{lessonsProgress,yourSeenWordCount,yourMemorisedWordCount,metWords}=_ref;const[toRecommendedNextLesson,setToRecommendedNextLesson]=(0,react.useState)(false);const lessonIndex=(0,lessonIndexState/* useLessonIndex */.W)();const recommendedCourses=useRecommendedCourses();const setRevisionMode=(0,esm_react/* useSetAtom */.Xr)(lessonState/* revisionModeState */.O);const{updateMessage}=(0,useAnnouncer/* useAnnouncerApi */.b)();const firstRecommendationBoxRender=(0,react.useRef)(true);const[recommendationHistory,setRecommendationHistory]=(0,esm_react/* useAtom */.fp)(recommendationHistoryState);const[recommendedNextLesson,setRecommendedNextLesson]=(0,esm_react/* useAtom */.fp)(recommendedNextLessonState);(0,react.useEffect)(()=>{try{if((recommendationHistory===null||recommendationHistory===void 0?void 0:recommendationHistory["currentStep"])===null){setRevisionMode(false);updateRecommendationHistory(recommendationHistory);}}catch(e){console.error(e);}// TODO: review this:
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);// }, [recommendationHistory, setRevisionMode, updateRecommendationHistory]);
(0,react.useEffect)(()=>{if(firstRecommendationBoxRender.current){firstRecommendationBoxRender.current=false;}else{setRevisionMode(false);updateRecommendationHistory(recommendationHistory);}// TODO: revisit this after reducing parent component re-renders and converting class component to function component
// eslint-disable-next-line react-hooks/exhaustive-deps
},[toRecommendedNextLesson]);function updateRecommendationHistory(prevRecommendationHistory){let newRecommendationHistory=Object.assign({},prevRecommendationHistory);if(typeof newRecommendationHistory["currentStep"]==="undefined"||newRecommendationHistory["currentStep"]===null){newRecommendationHistory["currentStep"]="break";}switch(newRecommendationHistory["currentStep"]){case null:newRecommendationHistory["currentStep"]="drill";break;case"practice":newRecommendationHistory["currentStep"]="drill";break;case"drill":newRecommendationHistory["currentStep"]="revise";break;case"revise":newRecommendationHistory["currentStep"]="discover";break;case"discover":newRecommendationHistory["currentStep"]="wildcard";break;case"wildcard":newRecommendationHistory["currentStep"]="break";break;case"break":newRecommendationHistory["currentStep"]="practice";break;default:newRecommendationHistory["currentStep"]="practice";break;}const nextRecommendedLesson=getRecommendedNextLesson(recommendedCourses,lessonsProgress,newRecommendationHistory,yourSeenWordCount,yourMemorisedWordCount,lessonIndex,metWords);const typedNextRecommendedLesson=nextRecommendedLesson;setRecommendationHistory(newRecommendationHistory);setRecommendedNextLesson(typedNextRecommendedLesson);// For new Typey Type students, there may be no valid practice/drill/revision recommendations so it may recommend "Discover" 4 times in a row. If the recommendation is the same as the previous recommendation, update the recommendation history again to skip ahead:
let prevRecommendedLesson=recommendedNextLesson;if(prevRecommendedLesson.linkText===nextRecommendedLesson.linkText&&nextRecommendedLesson.studyType!=="error"&&nextRecommendedLesson.studyType!=="break"){updateRecommendationHistory(newRecommendationHistory);}}const recommendAnotherLesson=()=>{dist/* default */.Ay.event({category:"Recommendations",action:"Skip recommended",label:(recommendedNextLesson===null||recommendedNextLesson===void 0?void 0:recommendedNextLesson.link)||"BAD_INPUT"});const element=document.getElementById("js-skip-button");if(element){element.focus();}// Note: This is a hacky hack. It would be better to clean up the mess of
// code handling recommendations and either have the code that gets the
// recommendation call the announcer with the new recommendation (but not
// when other actions fetch recommendations) or somehow get the *new*
// recommendation from state/props/refs and announce it here instead of
// relying on sketchy timeouts and querying the DOM.
setTimeout(()=>{const toAnnounce=document.getElementById("js-next-recommended-link-text");if(toAnnounce&&toAnnounce.textContent!=="Loading…"){var _toAnnounce$textConte;updateMessage(`Recommended: ${(_toAnnounce$textConte=toAnnounce.textContent)!==null&&_toAnnounce$textConte!==void 0?_toAnnounce$textConte:""}`);}},100);setRevisionMode(false);updateRecommendationHistory(recommendationHistory);};function startRecommendedStep(e){var _recommendedNextLesso;dist/* default */.Ay.event({category:"Recommendations",action:"Start recommended step",label:recommendedNextLesson.link||"BAD_INPUT"});if((_recommendedNextLesso=recommendedNextLesson.link)!==null&&_recommendedNextLesso!==void 0&&_recommendedNextLesso.startsWith("http")){setRevisionMode(false);// lets external link open in a new tab
updateRecommendationHistory(recommendationHistory);}else{setToRecommendedNextLesson(true);// does not navigate using link but instead allows Router Redirect
e.preventDefault();}}let recommendedNextLessonBox;let recommendedNextLessonHeading;let recommendedLink;let recommendedLinkTitle;let metadataStats;let studyType;let recommendedNextLessonCallToActionButton;let recommendedNextLessonHeadingClassNames="mt0 pb1 bb b--brand-primary-tint mb3";if(!!recommendedNextLesson){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[recommendedNextLesson.limitNumberOfWords," ",recommendedNextLesson.limitNumberOfWords===1?"word":"words"," |"," ",recommendedNextLesson.repetitions," repetitions"]});studyType=recommendedNextLesson.studyType;if(studyType==="error"){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:"No recommendation."});}else if(studyType==="wildcard"){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:"External link."});}else if(studyType==="game"){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:"Solve puzzles to exercise your steno knowledge"});}else if(studyType==="compete"){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:"Increase your speed while racing against others"});}else if(studyType==="break"){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:"Take 5\xA0minutes or come\xA0back in 4+\xA0hours."});}else if(recommendedNextLesson.repetitions===1){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[recommendedNextLesson.limitNumberOfWords," ",recommendedNextLesson.limitNumberOfWords===1?"word":"words"," |"," ",recommendedNextLesson.repetitions," repetition"]});}if(recommendedNextLesson!==null&&recommendedNextLesson!==void 0&&recommendedNextLesson.lessonTitle&&recommendedNextLesson.lessonTitle.length<10){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[recommendedNextLesson.limitNumberOfWords," ",recommendedNextLesson.limitNumberOfWords===1?"word":"words"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})," ",recommendedNextLesson.repetitions," repetitions"]});if(recommendedNextLesson.repetitions===1){metadataStats=/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[recommendedNextLesson.limitNumberOfWords," ",recommendedNextLesson.limitNumberOfWords===1?"word":"words"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})," ",recommendedNextLesson.repetitions," repetition"]});}}switch(recommendedNextLesson.studyType){case"error":recommendedNextLessonCallToActionButton="Practice";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: error"});break;case"practice":recommendedNextLessonCallToActionButton="Practice";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: practice"});break;case"drill":recommendedNextLessonCallToActionButton="Drill";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: drill"});break;case"revise":recommendedNextLessonCallToActionButton="Revise";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: revise"});break;case"discover":recommendedNextLessonCallToActionButton="Discover";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: discover"});break;case"break":recommendedNextLessonCallToActionButton="Take a break";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: break"});break;case"game":recommendedNextLessonCallToActionButton="Play";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: game"});break;case"compete":recommendedNextLessonCallToActionButton="Compete";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: compete"});break;default:recommendedNextLessonCallToActionButton="Start now";recommendedNextLessonHeading=/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:recommendedNextLessonHeadingClassNames,children:"Recommended: practice"});break;}if(recommendedNextLesson.link.startsWith("http")){recommendedLink=/*#__PURE__*/(0,jsx_runtime.jsxs)(OutboundLink/* default */.A,{eventLabel:recommendedNextLessonCallToActionButton,"aria-label":recommendedNextLessonCallToActionButton+" (external link opens in new tab)",to:recommendedNextLesson.link,onClick:startRecommendedStep,className:"link-button dib",style:{lineHeight:2},children:[recommendedNextLessonCallToActionButton," (opens in new tab)"]});}else{recommendedLink=/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{onClick:startRecommendedStep,to:recommendedNextLesson.link,className:"link-button dib",style:{lineHeight:2},children:recommendedNextLessonCallToActionButton});}if(studyType==="error"){recommendedLinkTitle="Unable to load recommendation";recommendedLink=/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:".",className:"link-button dib",style:{lineHeight:2},children:"Refresh"});}else{recommendedLinkTitle=recommendedNextLesson.linkTitle;}recommendedNextLessonBox=/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"panel bg-white dark:bg-coolgrey-1000 min-h-424 p5 mb3",children:[recommendedNextLessonHeading,/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb0 mt4",children:/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:recommendedLinkTitle})}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"de-emphasized",children:metadataStats}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_RecommendationDescription,{studyType:recommendedNextLesson.studyType}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap gap-4",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:recommendedLink}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:recommendAnotherLesson,id:"js-skip-button",className:"button button--secondary pl3 pr3",children:"Skip"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"hide",id:"js-next-recommended-link-text",children:recommendedNextLesson.linkText})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap content-start-ns",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap"})})]});}else{recommendedNextLessonBox=/*#__PURE__*/(0,jsx_runtime.jsx)(components_RecommendationBoxFallback,{});}if(toRecommendedNextLesson===true){return/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.rd,{push:true,to:recommendedNextLesson.link});}return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:recommendedNextLessonBox});};/* harmony default export */ const components_RecommendationBox = (RecommendationBox);
// EXTERNAL MODULE: ./src/states/recentLessonHistoryState.ts
var recentLessonHistoryState = __webpack_require__(7683);
;// ./src/pages/progress/components/RecentLessons.tsx
/** The most *recent* lesson is the *last* history item in the array */const RecentLessons=_ref=>{var _useAtomValue;let{lessonIndex}=_ref;const recentLessonHistory=(_useAtomValue=(0,esm_react/* useAtomValue */.md)(recentLessonHistoryState/* recentLessonHistoryState */.R))===null||_useAtomValue===void 0?void 0:_useAtomValue.history;const hasRecentLessons=recentLessonHistory&&recentLessonHistory.length>0&&recentLessonHistory[0]&&recentLessonHistory[0].path;const linkList=hasRecentLessons?recentLessonHistory.filter(recentLesson=>lessonIndex.find(lesson=>recentLesson.path.includes("/lessons/progress")||lesson.path===recentLesson.path.replace("/lessons","")+"lesson.txt")).map(recentLesson=>{let lesson=lessonIndex.find(lesson=>lesson.path===recentLesson.path.replace("/lessons","")+"lesson.txt");if(recentLesson.path.includes("/lessons/progress")){const path=recentLesson.path.replace("/lessons","");const title=path.includes("memorised")?"Your memorised words":path.includes("seen")?"Your revision words":"Your words";lesson={path,title};}let studyType="practice";// NOTE: does not check if studyType is legit
if(recentLesson&&recentLesson.studyType){studyType=recentLesson.studyType;}const studyTypeKey=`${studyType}Params`;return lesson?/*#__PURE__*/(0,jsx_runtime.jsx)("li",{className:"unstyled-list-item mb1",children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/lessons"+lesson.path.replace(/lesson\.txt$/,"").replace(/\/{2,}/g,"/")+"?recent=1&"+params/* default */.A[studyTypeKey],id:"ga--recent-lessons--"+lesson.path.replace(/[/.]/g,"-"),children:lesson.title})},lesson.path):undefined;}).filter(Boolean)// guard against undefined result from find
.reverse():undefined;const recentLessons=hasRecentLessons?/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Recent lessons"}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"unstyled-list",children:linkList})]}):null;return recentLessons;};/* harmony default export */ const components_RecentLessons = (RecentLessons);
// EXTERNAL MODULE: ./src/utils/confetti.js
var confetti = __webpack_require__(5708);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(9133);
;// ./src/pages/progress/components/FlashcardsBox.tsx
// This magic time stamp matches the default time used in flashcardsRecommendations
const defaultTimestamp=1558144862000;const FlashcardsBox=_ref=>{let{flashcardsNextLesson,skipButtonId,startFlashcards,updateFlashcardsRecommendation}=_ref;const{updateMessage}=(0,useAnnouncer/* useAnnouncerApi */.b)();const onSkipFlashcards=()=>{dist/* default */.Ay.event({category:"Flashcards",action:"Skip recommended flashcards",label:(flashcardsNextLesson===null||flashcardsNextLesson===void 0?void 0:flashcardsNextLesson.link)||"BAD_INPUT"});// Note: This is a hacky hack. It would be better to clean up the mess of
// code handling recommendations and either have the code that gets the
// recommendation call the announcer with the new recommendation (but not
// when other actions fetch recommendations) or somehow get the *new*
// recommendation from state/props/refs and announce it here instead of
// relying on sketchy timeouts and querying the DOM.
setTimeout(()=>{const toAnnounce=document.getElementById("js-next-recommended-link-text");if(toAnnounce&&toAnnounce.textContent!=="Loading…"){var _toAnnounce$textConte;updateMessage(`Recommended: ${(_toAnnounce$textConte=toAnnounce.textContent)!==null&&_toAnnounce$textConte!==void 0?_toAnnounce$textConte:""}`);}},100);updateFlashcardsRecommendation();};return!!flashcardsNextLesson?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bw-12 br-4 b--solid b--brand-primary p3 mb3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"text-right",children:/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:flashcardsNextLesson.linkTitle})}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"text-right de-emphasized","data-chromatic":"ignore",children:flashcardsNextLesson.lastSeen===defaultTimestamp?"New flashcards":`Seen ${utils_utils/* relativeTimeAgo */.t2(Date.now(),flashcardsNextLesson.lastSeen)} ago`}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:onSkipFlashcards,id:skipButtonId||"js-flashcards-skip-button",className:"button button--secondary mr2 pl3 pr3",children:"Skip"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-right",children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{onClick:startFlashcards,to:flashcardsNextLesson.link,className:"link-button dib",style:{lineHeight:2},children:"Study"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"hide",id:"js-next-recommended-link-text",children:flashcardsNextLesson.linkTitle})]})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"bw-12 br-4 b--solid b--brand-primary p3 mb3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"text-right",children:/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Loading\u2026"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"text-right de-emphasized"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:onSkipFlashcards,id:skipButtonId||"js-flashcards-skip-button",className:"button button--secondary mr2 pl3 pr3",children:"Skip"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-right",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{disabled:true,className:"link-button dib",style:{lineHeight:2},children:"Loading\u2026"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"hide",id:"js-next-recommended-link-text",children:"Loading\u2026"})]})]});};/* harmony default export */ const components_FlashcardsBox = (FlashcardsBox);
// EXTERNAL MODULE: ./src/pages/lessons/components/UserSettings/updateFlashcardSetting.js
var updateFlashcardSetting = __webpack_require__(9892);
// EXTERNAL MODULE: ./src/states/flashcardsProgressState.ts + 1 modules
var flashcardsProgressState = __webpack_require__(6525);
;// ./src/pages/progress/components/FlashcardsSection.tsx
const FlashcardsSection=_ref=>{let{showOnSmallScreen,flashcardsCourseLevel,skipButtonId,updateFlashcardsRecommendation}=_ref;const{flashcardsNextLesson}=(0,esm_react/* useAtomValue */.md)(flashcardsProgressState/* flashcardsRecommendationState */.YV);const changeFlashcardCourseLevel=(0,updateFlashcardSetting/* useChangeFlashcardCourseLevel */.b)();(0,react.useEffect)(()=>{updateFlashcardsRecommendation();// eslint-disable-next-line react-hooks/exhaustive-deps
},[flashcardsCourseLevel]);const startFlashcards=()=>{dist/* default */.Ay.event({category:"Flashcards",action:"Start recommended flashcards",label:(flashcardsNextLesson===null||flashcardsNextLesson===void 0?void 0:flashcardsNextLesson.link)||"BAD_INPUT"});};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:`mx-auto${showOnSmallScreen?" p3 mw-1024 show-sm-only":""}`,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:`mw100${showOnSmallScreen?" w-336":""}`,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Flashcards"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(ErrorBoundary/* default */.A,{relative:true,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"clearfix mb2 mt2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"mb1 db",htmlFor:showOnSmallScreen?"smFlashcardsCourseLevel":"mdFlashcardsCourseLevel",children:"Choose flashcard level"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("select",{id:showOnSmallScreen?"smFlashcardsCourseLevel":"mdFlashcardsCourseLevel",name:"flashcardsCourseLevel",value:flashcardsCourseLevel,onChange:changeFlashcardCourseLevel,className:"form-control form-control--large mw100 w-336",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"noviceCourse",children:"Novice"}),/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"beginnerCourse",children:"Beginner"}),/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"competentCourse",children:"Competent"}),/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"proficientCourse",children:"Proficient"}),/*#__PURE__*/(0,jsx_runtime.jsx)("option",{value:"expertCourse",children:"Expert"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_FlashcardsBox,{skipButtonId:skipButtonId,flashcardsNextLesson:flashcardsNextLesson,startFlashcards:startFlashcards,updateFlashcardsRecommendation:updateFlashcardsRecommendation})]})]})});};/* harmony default export */ const components_FlashcardsSection = (FlashcardsSection);
// EXTERNAL MODULE: ./node_modules/react-numeric-input/index.js
var react_numeric_input = __webpack_require__(4656);
var react_numeric_input_default = /*#__PURE__*/__webpack_require__.n(react_numeric_input);
// EXTERNAL MODULE: ./src/images/AlertRobot.svg
var AlertRobot = __webpack_require__(4148);
;// ./src/images/BoredRobot.svg
var _path, _path2, _rect, _rect2, _rect3, _path3, _rect4, _rect5, _rect6, _rect7, _rect8, _rect9, _rect10, _rect11, _rect12, _rect13, _rect14, _rect15, _rect16, _rect17, _rect18, _rect19, _rect20, _rect21, _rect22, _rect23, _rect24, _rect25, _rect26, _rect27, _path4, _circle, _circle2, _path5, _path6, _path7, _path8, _path9, _path10, _path11, _circle3, _circle4;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

function SvgBoredRobot(_ref, svgRef) {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", _extends({
    viewBox: "0 0 77 124",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M76.0012 78.404C74.001 64.0127 62.436 60.0127 52.8708 60.0127L52.8708 64.0127C68.5229 64.3869 70.7838 76.6409 70.7838 78.404C70.7838 81.8823 76.48 81.8491 76.0012 78.404Z",
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 1.73913
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M1.00084 78.404C3.00098 64.0127 14.4357 60.0127 24.0009 60.0127L24.0009 64.0127C8.34873 64.3869 6.00084 76.6409 6.00084 78.404C6.00084 81.8823 0.522027 81.8491 1.00084 78.404Z",
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 1.73913
  })), _rect || (_rect = /*#__PURE__*/react.createElement("rect", {
    x: 25,
    y: 98,
    width: 7,
    height: 21,
    fill: "#202630"
  })), _rect2 || (_rect2 = /*#__PURE__*/react.createElement("rect", {
    x: 45,
    y: 98,
    width: 7,
    height: 21,
    fill: "#202630"
  })), _rect3 || (_rect3 = /*#__PURE__*/react.createElement("rect", {
    x: 30,
    y: 45,
    width: 17,
    height: 5,
    fill: "#202630"
  })), _path3 || (_path3 = /*#__PURE__*/react.createElement("path", {
    d: "M18 60C18 54.4772 22.4772 50 28 50H49C54.5228 50 59 54.4772 59 60V89C59 94.5228 54.5228 99 49 99H28C22.4772 99 18 94.5228 18 89V60Z",
    fill: "#949494"
  })), _rect4 || (_rect4 = /*#__PURE__*/react.createElement("rect", {
    x: 50.97,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect5 || (_rect5 = /*#__PURE__*/react.createElement("rect", {
    x: 50.97,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect6 || (_rect6 = /*#__PURE__*/react.createElement("rect", {
    x: 48.3883,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect7 || (_rect7 = /*#__PURE__*/react.createElement("rect", {
    x: 48.3883,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect8 || (_rect8 = /*#__PURE__*/react.createElement("rect", {
    x: 45.8075,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect9 || (_rect9 = /*#__PURE__*/react.createElement("rect", {
    x: 45.8075,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect10 || (_rect10 = /*#__PURE__*/react.createElement("rect", {
    x: 43.2255,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect11 || (_rect11 = /*#__PURE__*/react.createElement("rect", {
    x: 43.2255,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect12 || (_rect12 = /*#__PURE__*/react.createElement("rect", {
    x: 40.6438,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect13 || (_rect13 = /*#__PURE__*/react.createElement("rect", {
    x: 40.6438,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect14 || (_rect14 = /*#__PURE__*/react.createElement("rect", {
    x: 41.9958,
    y: 70.3042,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect15 || (_rect15 = /*#__PURE__*/react.createElement("rect", {
    x: 39.4149,
    y: 70.3042,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect16 || (_rect16 = /*#__PURE__*/react.createElement("rect", {
    x: 37.325,
    y: 63.4045,
    width: 2.45848,
    height: 6.28387,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect17 || (_rect17 = /*#__PURE__*/react.createElement("rect", {
    x: 35.7264,
    y: 70.3042,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect18 || (_rect18 = /*#__PURE__*/react.createElement("rect", {
    x: 33.146,
    y: 70.3042,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect19 || (_rect19 = /*#__PURE__*/react.createElement("rect", {
    x: 34.4985,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect20 || (_rect20 = /*#__PURE__*/react.createElement("rect", {
    x: 34.4985,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect21 || (_rect21 = /*#__PURE__*/react.createElement("rect", {
    x: 31.9164,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect22 || (_rect22 = /*#__PURE__*/react.createElement("rect", {
    x: 31.9164,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect23 || (_rect23 = /*#__PURE__*/react.createElement("rect", {
    x: 29.3356,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect24 || (_rect24 = /*#__PURE__*/react.createElement("rect", {
    x: 29.3356,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect25 || (_rect25 = /*#__PURE__*/react.createElement("rect", {
    x: 26.7535,
    y: 66.8552,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect26 || (_rect26 = /*#__PURE__*/react.createElement("rect", {
    x: 26.7535,
    y: 63.4045,
    width: 1.96678,
    height: 2.8339,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _rect27 || (_rect27 = /*#__PURE__*/react.createElement("rect", {
    x: 26.7534,
    y: 60.9414,
    width: 26.1828,
    height: 1.8482,
    rx: 0.462772,
    fill: "#202630",
    stroke: "#202630",
    strokeWidth: 0.115693
  })), _path4 || (_path4 = /*#__PURE__*/react.createElement("path", {
    d: "M47 4.48695C40.2243 2.53439 37 9.51792 37 13.9999H40C39.5282 6.74529 44.8491 5.7889 47 7.33062V4.48695Z",
    fill: "#202630",
    stroke: "#202630"
  })), _circle || (_circle = /*#__PURE__*/react.createElement("circle", {
    cx: 49,
    cy: 7,
    r: 4,
    fill: "#202630"
  })), _circle2 || (_circle2 = /*#__PURE__*/react.createElement("circle", {
    cx: 50.5,
    cy: 5.5,
    r: 1.5,
    fill: "white"
  })), _path5 || (_path5 = /*#__PURE__*/react.createElement("path", {
    d: "M28.5 113C23.8056 113 19.9999 118.5 20 121.5C20.0001 124.5 37 124.5 37 121.5C37 118.5 33.1944 113 28.5 113Z",
    fill: "#202630"
  })), _path6 || (_path6 = /*#__PURE__*/react.createElement("path", {
    d: "M48.5 113C43.8056 113 39.9999 118.5 40 121.5C40.0001 124.5 57 124.5 57 121.5C57 118.5 53.1944 113 48.5 113Z",
    fill: "#202630"
  })), _path7 || (_path7 = /*#__PURE__*/react.createElement("path", {
    d: "M62 33C64.2091 33 66 31.2091 66 29C66 26.7909 64.2091 25 62 25V33Z",
    fill: "#202630"
  })), _path8 || (_path8 = /*#__PURE__*/react.createElement("path", {
    d: "M11 29C11 31.2091 12.7909 33 15 33V25C12.7909 25 11 26.7909 11 29Z",
    fill: "#202630"
  })), _path9 || (_path9 = /*#__PURE__*/react.createElement("path", {
    d: "M14 25.0954C14 18.9676 18.9676 14 25.0954 14H51.9046C58.0324 14 63 18.9676 63 25.0954V33C63 39.6274 57.6274 45 51 45H26C19.3726 45 14 39.6274 14 33V25.0954Z",
    fill: "#949494"
  })), _path10 || (_path10 = /*#__PURE__*/react.createElement("path", {
    d: "M20 25.224C20 22.3389 22.3389 20 25.224 20H51.776C54.6611 20 57 22.3389 57 25.224V31C57 35.4183 53.4183 39 49 39H28C23.5817 39 20 35.4183 20 31V25.224Z",
    fill: "white"
  })), _path11 || (_path11 = /*#__PURE__*/react.createElement("path", {
    d: "M41.9646 32.4173L35.9646 32.4173C35.4123 32.4173 34.9644 32.8651 34.9644 33.4173C34.9643 33.6888 34.9644 33.9355 34.9647 34.0473C34.9688 35.8694 37.0263 36 38.9646 36C40.9029 36 42.9646 35.9416 42.9646 34.0473L42.9646 33.4173C42.9646 32.8651 42.5168 32.4173 41.9646 32.4173Z",
    fill: "#202630"
  })), _circle3 || (_circle3 = /*#__PURE__*/react.createElement("circle", {
    cx: 30,
    cy: 28,
    r: 3,
    fill: "#202630"
  })), _circle4 || (_circle4 = /*#__PURE__*/react.createElement("circle", {
    cx: 47,
    cy: 28,
    r: 3,
    fill: "#202630"
  })));
}
const ForwardRef = /*#__PURE__*/react.forwardRef(SvgBoredRobot);
/* harmony default export */ const BoredRobot = (__webpack_require__.p + "static/media/BoredRobot.565aa6cdc7dad57642d2151346a33c6a.svg");

// EXTERNAL MODULE: ./src/images/HappyRobot.svg
var HappyRobot = __webpack_require__(4960);
;// ./src/pages/progress/components/TodaysEffortsOrGoals.tsx
const TodaysEffortsGoals=_ref=>{let{userGoalsWords,todayWordCount}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[userGoalsWords,userGoalsWords<=todayWordCount?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:" \u2022"})," Done!"]}):null]});};const TodaysEffortsOrGoals=_ref2=>{let{cancelSetGoals,handleNewWordsGoalInputChange,handleOldWordsGoalInputChange,newWordsGoalMet,newWordsGoalUnveiled,oldWordsGoalMet,oldWordsGoalUnveiled,celebrateCompletedGoals,saveGoals,showSetGoalsForm,showSetGoalsFormFn,startingMetWordsToday,todayNewWordCount,todayOldWordCount,unveilOldWordsGoal,unveilNewWordsGoal,userGoalInputNewWords,userGoalInputOldWords,userGoals}=_ref2;const grabStyle=function(){return false;};function revealCompletedGoals(){celebrateCompletedGoals(oldWordsGoalMet&&!oldWordsGoalUnveiled,newWordsGoalMet&&!newWordsGoalUnveiled);unveilOldWordsGoal(oldWordsGoalMet?true:oldWordsGoalUnveiled);unveilNewWordsGoal(newWordsGoalMet?true:newWordsGoalUnveiled);const element=document.getElementById("js-todays-efforts");if(element){element.focus();}}let todaysEffortsOrGoals;if(showSetGoalsForm){todaysEffortsOrGoals=/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("form",{onSubmit:saveGoals,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"pt4 pb4",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mb3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"pb1",id:"js-first-interactive-form-field-element",htmlFor:"userGoalInputOldWords",children:"Old words goal"}),/*#__PURE__*/(0,jsx_runtime.jsx)((react_numeric_input_default()),{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:false,className:"form-control w-100",disabled:!showSetGoalsForm,id:"userGoalInputOldWords",max:10000,min:1,name:"userGoalInputOldWords",onChange:handleOldWordsGoalInputChange,precision:0,spellCheck:"false",step:1,style:grabStyle(),type:"number",value:userGoalInputOldWords,snap:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt1 text-small de-emphasized",children:"(50\u2013200 recommended)"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mb3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{className:"pb1",htmlFor:"userGoalInputNewWords",children:"New words goal"}),/*#__PURE__*/(0,jsx_runtime.jsx)((react_numeric_input_default()),{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",autoFocus:false,className:"form-control w-100",disabled:!showSetGoalsForm,id:"userGoalInputNewWords",max:10000,min:1,name:"userGoalInputNewWords",onChange:handleNewWordsGoalInputChange,precision:0,spellCheck:"false",step:1,style:grabStyle(),type:"number",value:userGoalInputNewWords,snap:true}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt1 text-small de-emphasized",children:"(5\u201340 recommended)"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-end",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:cancelSetGoals,className:"button button--secondary mr2 dib",children:"Cancel"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:saveGoals,className:"button mr2 dib",children:"Save goals"})]})]})})});}else if(oldWordsGoalMet&&!oldWordsGoalUnveiled||newWordsGoalMet&&!newWordsGoalUnveiled){todaysEffortsOrGoals=/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"inline-flex flex-column items-center pt4 pb4 bb b--brand-primary-tint w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"todays-effort-reveal-robot",children:/*#__PURE__*/(0,jsx_runtime.jsx)(AlertRobot/* ReactComponent */.h,{})}),"You completed a goal!",/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:revealCompletedGoals,className:"button button--secondary mt3 dib",children:"Reveal"})]})});}else{let todaysEffortsOldGoalsRow=/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center pt4 pb4 bb b--brand-primary-tint w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex todays-effort-goal-robot pl2",children:userGoals.oldWords<=todayOldWordCount?/*#__PURE__*/(0,jsx_runtime.jsx)(HappyRobot/* ReactComponent */.h,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(ForwardRef,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"stat__number stat__number--display pl3 mr1",children:todayOldWordCount}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["Old ",todayOldWordCount!==1?"words":"word",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"text-small",children:["Your goal:"," ",/*#__PURE__*/(0,jsx_runtime.jsx)(TodaysEffortsGoals,{userGoalsWords:userGoals.oldWords,todayWordCount:todayOldWordCount})]})]})]});if(!startingMetWordsToday||Object.keys(startingMetWordsToday).length<15){todaysEffortsOldGoalsRow=null;}todaysEffortsOrGoals=/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[todaysEffortsOldGoalsRow,/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"inline-flex items-center pt4 pb4 bb b--brand-primary-tint w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex todays-effort-goal-robot pl2",children:userGoals.newWords<=todayNewWordCount?/*#__PURE__*/(0,jsx_runtime.jsx)(HappyRobot/* ReactComponent */.h,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(ForwardRef,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"stat__number stat__number--display pl3 mr1",children:todayNewWordCount}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:["New ",todayNewWordCount!==1?"words":"word",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{className:"text-small",children:["Your goal:",/*#__PURE__*/(0,jsx_runtime.jsx)(TodaysEffortsGoals,{userGoalsWords:userGoals.newWords,todayWordCount:todayNewWordCount})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-right",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{id:"js-set-goals-button",onClick:showSetGoalsFormFn,className:"button button--secondary mt3 dib",children:"Set goals"})})]});}return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{className:"mt0 mb0 pt5 pb1 bb b--brand-primary-tint",id:"js-todays-efforts",tabIndex:-1,children:"Today\u2019s efforts"}),todaysEffortsOrGoals]});};/* harmony default export */ const components_TodaysEffortsOrGoals = (TodaysEffortsOrGoals);
;// ./src/pages/progress/utils/formatSpacePlacementValue.ts
const formatSpacePlacementValue=userSettings=>{if(!(userSettings!==null&&userSettings!==void 0&&userSettings.spacePlacement)){return"not set";}switch(userSettings.spacePlacement){case"spaceBeforeOutput":return"Space before output";case"spaceAfterOutput":return"Space after output";case"spaceOff":return"Ignore spaces";case"spaceExact":return"Exact spacing";default:return"not set";}};/* harmony default export */ const utils_formatSpacePlacementValue = (formatSpacePlacementValue);
// EXTERNAL MODULE: ./src/utils/makeDownloadHref.ts
var makeDownloadHref = __webpack_require__(8833);
// EXTERNAL MODULE: ./src/utils/trimAndSumUniqMetWords.ts
var trimAndSumUniqMetWords = __webpack_require__(5792);
;// ./src/pages/progress/utils/formatProgressFileDownloadName.ts
/** Example: "typey-type-reformatted-progress-" */const dashifiedDate=new Date().toDateString().replace(/ /g,"-").toLowerCase();const formatProgressFileDownloadName=prefix=>`${prefix}${dashifiedDate}.json`;/* harmony default export */ const utils_formatProgressFileDownloadName = (formatProgressFileDownloadName);
;// ./src/pages/progress/components/ReformatProgress.tsx
const ReformatProgress=_ref=>{let{metWords,userSettings}=_ref;const[reformattedProgress,setReformattedProgress]=(0,react.useState)({});const downloadReformattedProgressHref=(0,react.useMemo)(()=>(0,makeDownloadHref/* default */.A)(reformattedProgress),[reformattedProgress]);const downloadReformattedProgress=(0,react.useCallback)(()=>{const spacePlacement=userSettings.spacePlacement;let reformattedProgress=(0,trimAndSumUniqMetWords/* default */.A)(metWords);if(spacePlacement==="spaceBeforeOutput"){reformattedProgress=Object.fromEntries(Object.entries(reformattedProgress).map(_ref2=>{let[word,count]=_ref2;return[" "+word,count];}));}else if(spacePlacement==="spaceAfterOutput"){reformattedProgress=Object.fromEntries(Object.entries(reformattedProgress).map(_ref3=>{let[word,count]=_ref3;return[word+" ",count];}));}setReformattedProgress(reformattedProgress);dist/* default */.Ay.event({category:"Downloads",action:"Click",label:"typey-type-reformatted-progress.json"});},[metWords,userSettings.spacePlacement]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"bg-coolgrey-300 dark:bg-coolgrey-1000 pl1 pr1",children:["If you\u2019ve changed your spacing settings, you can download a reformatted \u201Cprogress file\u201D to match your new setting. After downloading it, if you're happy it looks good you can load it back into Typey Type. Then visit each lesson to update lesson progress. Your current spacing setting is:"," ",utils_formatSpacePlacementValue(userSettings),"."," ",/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:downloadReformattedProgressHref,download:utils_formatProgressFileDownloadName("typey-type-reformatted-progress-"),onClick:downloadReformattedProgress,children:"Download reformatted progress file"})]});};/* harmony default export */ const components_ReformatProgress = (ReformatProgress);
;// ./src/pages/progress/components/ProgressLessonLinks.tsx
const getPracticeAllLink=(seen,memorised)=>seen>1&&memorised>0?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/lessons/progress/",children:"Practice\xA0your words"}),"."," "]}):null;const getDrillMemorisedLink=memorised=>memorised>0?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.N_,{to:"/lessons/progress/memorised/",children:["Drill\xA0",memorised," memorised word",memorised===1?"":"s"]}),"."," "]}):null;const getReviseSeenLink=seen=>seen>0?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.N_,{to:"/lessons/progress/seen/",children:["Revise\xA0",seen," seen word",seen===1?"":"s"]}),"."," "]}):null;const getDiscoverNewLink=(yourWordCount,userSettings)=>{var _userSettings$studyPr,_userSettings$studyPr2;const defaultDiscoverParams=params/* default */.A.discover;const userDiscoverParams=(_userSettings$studyPr=(_userSettings$studyPr2=userSettings.studyPresets)===null||_userSettings$studyPr2===void 0?void 0:_userSettings$studyPr2[0])!==null&&_userSettings$studyPr!==void 0?_userSettings$studyPr:{limitNumberOfWords:5,repetitions:3};const combinedDiscoverParams={...defaultDiscoverParams,...userDiscoverParams};const discoverParamsString=(0,params/* createParamString */.R)(combinedDiscoverParams);return yourWordCount<10000&&yourWordCount>0?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/lessons/drills/top-10000-project-gutenberg-words/?recommended=true&"+discoverParamsString,children:"Discover new words"}),"."]}):null;};const ProgressLessonLinks=_ref=>{let{userSettings,yourWordCount,yourSeenWordCount,yourMemorisedWordCount}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:getPracticeAllLink(yourSeenWordCount,yourMemorisedWordCount)},"practice-all"),/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:getDrillMemorisedLink(yourMemorisedWordCount)},"drill-memorised"),/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:getReviseSeenLink(yourSeenWordCount)},"revise-seen"),/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:getDiscoverNewLink(yourWordCount,userSettings)},"discover-new")]});};/* harmony default export */ const components_ProgressLessonLinks = (ProgressLessonLinks);
// EXTERNAL MODULE: ./node_modules/d3-format/src/defaultLocale.js + 8 modules
var defaultLocale = __webpack_require__(9211);
;// ./src/pages/progress/components/ProgressSummaryCompleted.tsx
const IntroToCelebrate10000Memorised=_ref=>{let{yourWordCount}=_ref;(0,react.useEffect)(()=>{dist/* default */.Ay.event({category:"MemorisedTypeyType10000",action:"MemorisedTypeyType10000",label:"MemorisedTypeyType10000"});},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Woohoo! You rock! What a magnificent effort to memorise 10,000 words. You are an expert stenographer now! You\u2019ve successfully typed"," ",(0,defaultLocale/* format */.GP)(",")(yourWordCount)," words. It\u2019s time to"," "]});};const IntroToCelebrate10000Typed=_ref2=>{let{yourWordCount}=_ref2;(0,react.useEffect)(()=>{dist/* default */.Ay.event({category:"CompletedTypeyType10000",action:"CompletedTypeyType10000",label:"CompletedTypeyType10000"});},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Woohoo! You rock! You\u2019ve successfully typed ",(0,defaultLocale/* format */.GP)(",")(yourWordCount)," ","words. You are an accomplished stenographer now! You\u2019ve completed 100% of 10,000 words. It\u2019s time to"," "]});};const ProgressSummaryCompleted=_ref3=>{let{restartConfetti,userSettings,yourWordCount,yourMemorisedWordCount,yourSeenWordCount}=_ref3;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[yourMemorisedWordCount>=10000?/*#__PURE__*/(0,jsx_runtime.jsx)(IntroToCelebrate10000Memorised,{yourWordCount:yourWordCount}):/*#__PURE__*/(0,jsx_runtime.jsx)(IntroToCelebrate10000Typed,{yourWordCount:yourWordCount}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"button-that-looks-like-a-link",id:"celebrate-button",onClick:restartConfetti,onKeyDown:restartConfetti,children:"celebrate!"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_ProgressLessonLinks,{userSettings:userSettings,yourWordCount:yourWordCount,yourSeenWordCount:yourSeenWordCount,yourMemorisedWordCount:yourMemorisedWordCount})})]});};/* harmony default export */ const components_ProgressSummaryCompleted = (ProgressSummaryCompleted);
;// ./src/pages/progress/components/ProgressSummaryAndLinks.tsx
const ProgressSummaryAndLinks=_ref=>{let{metWords,restartConfetti,userSettings,yourSeenWordCount,yourMemorisedWordCount}=_ref;const yourWordCount=(0,react.useMemo)(()=>Object.keys(metWords).length||0,[metWords]);const progressPercent=(0,react.useMemo)(()=>Math.round(yourWordCount/10000*100)||0,[yourWordCount]);const IntroSentence=()=>/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:["You\u2019ve successfully typed ",yourWordCount," ",yourWordCount===1?"word":"words"," without misstrokes."," "]});const MaybeProgressPercentSentence=_ref2=>{let{yourSeenWordCount}=_ref2;return yourSeenWordCount>1?/*#__PURE__*/(0,jsx_runtime.jsx)("span",{children:`You’re ${progressPercent}% of the way to 10,000 words. `}):null;};return yourWordCount>=10000?/*#__PURE__*/(0,jsx_runtime.jsx)(components_ProgressSummaryCompleted,{restartConfetti:restartConfetti,userSettings:userSettings,yourWordCount:yourWordCount,yourMemorisedWordCount:yourMemorisedWordCount,yourSeenWordCount:yourSeenWordCount}):/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IntroSentence,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(MaybeProgressPercentSentence,{yourSeenWordCount:yourSeenWordCount}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_ProgressLessonLinks,{userSettings:userSettings,yourWordCount:yourWordCount,yourSeenWordCount:yourSeenWordCount,yourMemorisedWordCount:yourMemorisedWordCount})]});};/* harmony default export */ const components_ProgressSummaryAndLinks = (ProgressSummaryAndLinks);
;// ./src/components/Icons/icon-images/Checkmark.svg
var Checkmark_path;
function Checkmark_extends() { return Checkmark_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Checkmark_extends.apply(null, arguments); }

function SvgCheckmark(_ref, svgRef) {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", Checkmark_extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, Checkmark_path || (Checkmark_path = /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    d: "M2.06 16.354l5.442 5.44a.5.5 0 0 0 .766-.07l11.57-16.912a.5.5 0 0 0-.254-.757l-1.041-.347a.5.5 0 0 0-.565.184L8.064 17.77l-3.71-3.71a.5.5 0 0 0-.708 0l-1.585 1.585a.5.5 0 0 0 0 .708z"
  })));
}
const Checkmark_ForwardRef = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(SvgCheckmark)));
/* harmony default export */ const Checkmark = (__webpack_require__.p + "static/media/Checkmark.ead2583cd96549ec6d98d8b1b49aa0d5.svg");

;// ./src/components/Icons/icon-images/TriangleRight.svg
var TriangleRight_path;
function TriangleRight_extends() { return TriangleRight_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, TriangleRight_extends.apply(null, arguments); }

function SvgTriangleRight(_ref, svgRef) {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", TriangleRight_extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, TriangleRight_path || (TriangleRight_path = /*#__PURE__*/React.createElement("path", {
    d: "M8.445 2.557l7.305 9.13a.5.5 0 0 1 0 .625l-7.305 9.131A.25.25 0 0 1 8 21.287V2.713a.25.25 0 0 1 .445-.156z"
  })));
}
const TriangleRight_ForwardRef = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(SvgTriangleRight)));
/* harmony default export */ const TriangleRight = (__webpack_require__.p + "static/media/TriangleRight.16ddddf6bca6186a40e26b524165beb7.svg");

// EXTERNAL MODULE: ./src/components/Icons/Icon.tsx
var Icon = __webpack_require__(5135);
// EXTERNAL MODULE: ./src/components/Tooltip.tsx + 5 modules
var Tooltip = __webpack_require__(861);
// EXTERNAL MODULE: ./src/utils/slugifyTitle.ts
var slugifyTitle = __webpack_require__(7057);
;// ./src/pages/progress/components/LessonsProgress.tsx
const LessonsProgress=_ref=>{let{lessonIndex,lessonsProgress}=_ref;function progressIconClasses(color){return`text-${color}-600 `+"progress-circle "+"relative "+"svg-baseline "+"svg-icon-wrapper";}function unstarted(id){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"dib",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{"data-tooltip-id":id,"data-tooltip-content":"Unstarted",tabIndex:0,className:progressIconClasses("violet")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.A,{id:id})]});}function inProgress(id){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"dib",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{"data-tooltip-id":id,"data-tooltip-content":"In progress",tabIndex:0,className:progressIconClasses("violet"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.A,{iconSVGImport:TriangleRight,width:"1em",height:"1em",style:{transform:"translateX(0.025em) scale(0.6)"}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.A,{id:id})]});}function lessonComplete(id){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"dib",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{"data-tooltip-id":id,"data-tooltip-content":"100 words done or lesson complete",tabIndex:0,className:progressIconClasses("green"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.A,{iconSVGImport:Checkmark,width:"1em",height:"1em",style:{transform:"scale(0.6)"}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.A,{id:id})]});}const linkList=lessonIndex.map(lesson=>{let htmlIdForLesson=(0,slugifyTitle/* default */.A)(lesson.path.slice(1).replace("/lesson.txt",""));let lessonsubtitle="";let wordCountDenominator=0;let numberOfWordsSeenOrMemorised=0;let lessonCompletion;if(lesson.subtitle&&lesson.subtitle.length>0){lessonsubtitle=": "+lesson.subtitle;}if(lesson.wordCount&&lesson.wordCount>0){wordCountDenominator=lesson.wordCount;}if(lessonsProgress&&lessonsProgress["/typey-type"+"/lessons"+lesson.path]){var _lessonsProgress,_lessonsProgress2,_lessonsProgress3;let toDiscover=((_lessonsProgress=lessonsProgress["/typey-type"+"/lessons"+lesson.path])===null||_lessonsProgress===void 0?void 0:_lessonsProgress.numberOfWordsToDiscover)||0;let seen=((_lessonsProgress2=lessonsProgress["/typey-type"+"/lessons"+lesson.path])===null||_lessonsProgress2===void 0?void 0:_lessonsProgress2.numberOfWordsSeen)||0;let memorised=((_lessonsProgress3=lessonsProgress["/typey-type"+"/lessons"+lesson.path])===null||_lessonsProgress3===void 0?void 0:_lessonsProgress3.numberOfWordsMemorised)||0;numberOfWordsSeenOrMemorised=seen+memorised;wordCountDenominator=seen+memorised+toDiscover;if(numberOfWordsSeenOrMemorised>=wordCountDenominator||numberOfWordsSeenOrMemorised>100){if(numberOfWordsSeenOrMemorised>=wordCountDenominator){numberOfWordsSeenOrMemorised=wordCountDenominator;}lessonCompletion=lessonComplete(htmlIdForLesson);}else if(numberOfWordsSeenOrMemorised>0){lessonCompletion=inProgress(htmlIdForLesson);}else{lessonCompletion=unstarted(htmlIdForLesson);}}else{lessonCompletion=unstarted(htmlIdForLesson);}if(lesson.category==="Fundamentals"||lesson.category==="Drills"&&lesson.title.startsWith("Top 100")||lesson.category==="Drills"&&lesson.title.startsWith("Top 200")){return/*#__PURE__*/(0,jsx_runtime.jsxs)("li",{className:"unstyled-list-item mb1",children:[lessonCompletion," ",/*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom/* Link */.N_,{to:`/lessons${lesson.path}`.replace(/lesson\.txt$/,"").replace(/\/{2,}/g,"/"),id:"ga--lesson-index-"+lesson.path.replace(/\/lesson\.txt/g,"").replace(/[/.]/g,"-"),children:[lesson.title,lessonsubtitle]})," ","\xB7"," ",/*#__PURE__*/(0,jsx_runtime.jsxs)("small",{children:[numberOfWordsSeenOrMemorised," of ",wordCountDenominator]})]},lesson.path);}else{return"";}});return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:linkList});};/* harmony default export */ const components_LessonsProgress = (LessonsProgress);
;// ./src/pages/progress/components/DownloadProgressButton.tsx
const DownloadProgressButton=_ref=>{let{metWords}=_ref;const downloadProgress=()=>{dist/* default */.Ay.event({category:"Downloads",action:"Click",label:"typey-type-progress.json"});};return/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:(0,makeDownloadHref/* default */.A)(metWords),download:utils_formatProgressFileDownloadName("typey-type-progress-"),onClick:downloadProgress,className:"link-button link-button-ghost table-cell mr1",children:"Download progress file"});};/* harmony default export */ const components_DownloadProgressButton = (DownloadProgressButton);
// EXTERNAL MODULE: ./src/components/Subheader.tsx
var Subheader = __webpack_require__(7532);
// EXTERNAL MODULE: ./node_modules/react-modal/lib/index.js
var lib = __webpack_require__(3939);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// ./src/pages/progress/components/BackupModal.tsx
const BackupModal=_ref=>{let{isOpen,handleCloseModal}=_ref;(0,react.useEffect)(()=>{lib_default().setAppElement("#js-app");},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)((lib_default()),{isOpen:isOpen,aria:{labelledby:"aria-modal-heading",describedby:"aria-modal-description"},ariaHideApp:true,closeTimeoutMS:300,role:"dialog",onRequestClose:handleCloseModal,className:{base:"modal",afterOpen:"modal--after-open",beforeClose:"modal--before-close"},overlayClassName:{base:"modal__overlay",afterOpen:"modal__overlay--after-open",beforeClose:"modal__overlay--before-close"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"aria-modal-heading",children:"Back up your progress"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["Typey Type saves your typing progress in your browser\u2019s local storage."," ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"bg-danger dark:text-coolgrey-900",children:"You\u2019ll lose your progress if you clear your browsing data (history, cookies, and cache)."})," ","If you share this device with other people or use Typey Type across several devices and browsers, you should save your progress elsewhere."]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Save progress"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"You can:"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("ul",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Copy your progress to your clipboard and save it in a text file somewhere safe, or"}),/*#__PURE__*/(0,jsx_runtime.jsx)("li",{children:"Hit \u201CDownload progress file\u201D to save your progress as a JSON file."})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Load progress"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["When you return, hit \u201CLoad progress\u201D and enter your progress to load it back into Typey Type. You can also clear your progress by loading in empty curly braces, ",/*#__PURE__*/(0,jsx_runtime.jsx)("code",{children:"{}"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-right",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"button",onClick:handleCloseModal,children:"OK"})})]});};/* harmony default export */ const components_BackupModal = (BackupModal);
// EXTERNAL MODULE: ./src/components/Icons/icon-images/ClosingCross.svg
var ClosingCross = __webpack_require__(2823);
// EXTERNAL MODULE: ./src/states/globalUserSettingsState.ts
var globalUserSettingsState = __webpack_require__(3187);
// EXTERNAL MODULE: ./src/pages/lessons/components/UserSettings/updateGlobalUserSetting.js
var updateGlobalUserSetting = __webpack_require__(8278);
;// ./src/pages/progress/components/BackupBanner.tsx
const BANNER_REAPPEAR_INTERVAL=1000*60*60*24*7;// 1 week
const BackupBanner=()=>{const dismissedTime=(0,esm_react/* useAtomValue */.md)(globalUserSettingsState/* backupBannerDismissedTime */.Jl);const dismiss=(0,updateGlobalUserSetting/* useDismissBackupBanner */.GE)();const[isModalOpen,setModalOpen]=(0,react.useState)(false);if(dismissedTime!==null&&Date.now()<dismissedTime+BANNER_REAPPEAR_INTERVAL)return null;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"notification notification--global  w-100 flex wrap justify-between pa1 p1 p3 pa3 mb3 items-center bg-danger dark:text-coolgrey-900",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"notification__message",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"mb0",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("strong",{children:"Back up your progress regularly:"})," Your progress data is saved in your browser. You\u2019ll lose your progress if you clear your browsing data (history, cookies, and cache)."," ",/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"de-emphasized-button",onClick:()=>setModalOpen(true),children:"Learn more"}),"."]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"de-emphasized-button flex items-center justify-center p1","aria-label":"Dismiss notification",onClick:dismiss,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* default */.A,{iconSVGImport:ClosingCross/* default */.A,width:"1em",height:"1em"})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_BackupModal,{isOpen:isModalOpen,handleCloseModal:()=>setModalOpen(false)})]});};/* harmony default export */ const components_BackupBanner = (BackupBanner);
// EXTERNAL MODULE: ./src/states/legacy/AppMethodsContext.tsx
var AppMethodsContext = __webpack_require__(4457);
// EXTERNAL MODULE: ./src/states/userSettingsState.ts
var userSettingsState = __webpack_require__(8282);
;// ./src/states/userGoalsState.ts
const userGoalsState=(0,utils/* atomWithStorage */.tG)("userGoals",{newWords:15,oldWords:50});const oldWordsGoalUnveiledState=(0,vanilla/* atom */.eU)(false);const newWordsGoalUnveiledState=(0,vanilla/* atom */.eU)(false);
;// ./src/pages/progress/Progress.tsx
const skipButtonId="js-flashcards-skip-button";const mobileSkipButtonId="js-mobile-flashcards-skip-button";let particles=[];const Progress=props=>{const{setPersonalPreferences,updateStartingMetWordsAndCounts}=(0,AppMethodsContext/* useAppMethods */.$W)();const globalUserSettings=(0,esm_react/* useAtomValue */.md)(globalUserSettingsState/* globalUserSettingsState */.tq);const userSettings=(0,esm_react/* useAtomValue */.md)(userSettingsState/* userSettingsState */.sj);const lessonIndex=(0,lessonIndexState/* useLessonIndex */.W)();const updateFlashcardsRecommendation=(0,flashcardsProgressState/* useUpdateFlashcardsRecommendation */.V3)();const[userGoals,setUserGoals]=(0,esm_react/* useAtom */.fp)(userGoalsState);const[oldWordsGoalUnveiled,setOldWordsGoalUnveiled]=(0,esm_react/* useAtom */.fp)(oldWordsGoalUnveiledState);const[newWordsGoalUnveiled,setNewWordsGoalUnveiled]=(0,esm_react/* useAtom */.fp)(newWordsGoalUnveiledState);const mainHeading=(0,react.useRef)(null);const canvas=(0,react.useRef)(null);const firstGoalsRender=(0,react.useRef)(true);const[canvasWidth]=(0,react.useState)(Math.floor(window.innerWidth));const[canvasHeight]=(0,react.useState)(Math.floor(window.innerHeight));const[flashWarning,setFlashWarning]=(0,react.useState)("");const[showLoadInput,setShowLoadInput]=(0,react.useState)(false);const[showSetGoalsForm,setShowSetGoalsForm]=(0,react.useState)(false);const[todayNewWordCount,setTodayNewWordCount]=(0,react.useState)(0);const[todayOldWordCount,setTodayOldWordCount]=(0,react.useState)(0);const[oldWordsGoalMet,setOldWordsGoalMet]=(0,react.useState)(false);const[newWordsGoalMet,setNewWordsGoalMet]=(0,react.useState)(false);const[userGoalInputOldWords,setUserGoalInputOldWords]=(0,react.useState)(50);const[userGoalInputNewWords,setUserGoalInputNewWords]=(0,react.useState)(15);const[isBackupModalOpen,setBackupModalOpen]=(0,react.useState)(false);(0,react.useEffect)(()=>{if(mainHeading){var _mainHeading$current;(_mainHeading$current=mainHeading.current)===null||_mainHeading$current===void 0?void 0:_mainHeading$current.focus();}try{updateFlashcardsRecommendation();}catch(e){console.error(e);}const[todayOldWordCountToUpdate,todayNewWordCountToUpdate]=Object.entries(props.metWords).reduce((accumulator,_ref)=>{let[phrase,timesSeen]=_ref;if(props.startingMetWordsToday[phrase]&&timesSeen-props.startingMetWordsToday[phrase]>0){accumulator[0]+=1;}else if(!props.startingMetWordsToday[phrase]&&timesSeen>0){accumulator[1]+=1;}return accumulator;},[0,0]);const oldWordsGoalMetToUpdate=userGoals.oldWords<=todayOldWordCountToUpdate?true:oldWordsGoalMet;const newWordsGoalMetToUpdate=userGoals.newWords<=todayNewWordCountToUpdate?true:newWordsGoalMet;setOldWordsGoalMet(oldWordsGoalMetToUpdate);setNewWordsGoalMet(newWordsGoalMetToUpdate);setTodayNewWordCount(todayNewWordCountToUpdate);setTodayOldWordCount(todayOldWordCountToUpdate);// TODO: revisit this after reducing parent component re-renders and converting class component to function component
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,react.useEffect)(()=>{if(firstGoalsRender.current){firstGoalsRender.current=false;}else{if(showSetGoalsForm){const element=document.getElementById("js-first-interactive-form-field-element");if(element){element.focus();}}else if(!showSetGoalsForm){const element=document.getElementById("js-set-goals-button");if(element){element.focus();}}}},[showSetGoalsForm]);(0,react.useEffect)(()=>{if(showLoadInput){const element=document.getElementById("js-metwords-from-personal-store--small");if(element){element.focus();}}},[showLoadInput]);function showLoadInputFn(){setShowLoadInput(true);}function handleLoadProgress(){const textareas=document.querySelectorAll(".js-metwords-from-personal-store");const textareaContents=textareas.length>1?textareas[1]:textareas[0];setPersonalPreferences(textareaContents.value);setFlashWarning("To update your lesson progress, visit the lessons.");let numberOfMetWords="0";try{const parsedMetWords=JSON.parse(textareaContents.value);numberOfMetWords=Object.keys(parsedMetWords).length.toString();updateStartingMetWordsAndCounts(parsedMetWords);setOldWordsGoalUnveiled(false);setNewWordsGoalUnveiled(false);setTodayOldWordCount(0);setTodayNewWordCount(0);setOldWordsGoalMet(false);setNewWordsGoalMet(false);}catch(error){numberOfMetWords="BAD_PROGRESS_INPUT";}if(textareaContents.value===""||textareaContents.value===" "){numberOfMetWords="EMPTY_PROGRESS_INPUT";}dist/* default */.Ay.event({category:"Progress",action:"Update progress",label:"Load met words: "+numberOfMetWords});}function saveGoals(event){event.preventDefault();dist/* default */.Ay.event({category:"Progress",action:"Save goals",label:"true"});const currentNewWords=userGoalInputNewWords;const currentOldWords=userGoalInputOldWords;const userGoalsToUpdate={newWords:currentNewWords,oldWords:currentOldWords};if(isNaN(currentOldWords)||currentOldWords===null){userGoalsToUpdate["oldWords"]=userGoals.oldWords||1;}if(isNaN(currentNewWords)||currentNewWords===null){userGoalsToUpdate["newWords"]=userGoals.newWords||1;}const oldWordsGoalUnveiledToUpdate=currentOldWords>userGoals.oldWords?false:oldWordsGoalUnveiled;const newWordsGoalUnveiledToUpdate=currentNewWords>userGoals.newWords?false:newWordsGoalUnveiled;setOldWordsGoalUnveiled(oldWordsGoalUnveiledToUpdate);setNewWordsGoalUnveiled(newWordsGoalUnveiledToUpdate);const oldWordsGoalMetToUpdate=todayOldWordCount<userGoalsToUpdate["oldWords"]?false:oldWordsGoalMet;const newWordsGoalMetToUpdate=todayNewWordCount<userGoalsToUpdate["newWords"]?false:newWordsGoalMet;setUserGoals(userGoalsToUpdate);setOldWordsGoalMet(oldWordsGoalMetToUpdate);setNewWordsGoalMet(newWordsGoalMetToUpdate);setShowSetGoalsForm(false);}function cancelSetGoals(event){event.preventDefault();dist/* default */.Ay.event({category:"Progress",action:"Cancel set goals",label:"true"});setShowSetGoalsForm(false);}function showSetGoalsFormFn(){dist/* default */.Ay.event({category:"Progress",action:"Show set goals form",label:"true"});setShowSetGoalsForm(true);setUserGoalInputOldWords(userGoals.oldWords);setUserGoalInputNewWords(userGoals.newWords);}function celebrateCompletedGoals(oldGoal,newGoal){if(oldGoal&&newGoal){confetti/* setupCanvas */.O5({sparsity:240,colors:5},"js-confetti-target",particles);}else{confetti/* setupCanvas */.O5({sparsity:960,colors:2},"js-confetti-target",particles);}confetti/* restartAnimation */.eV(particles,canvas.current,canvasWidth,canvasHeight);}function handleOldWordsGoalInputChange(event){setUserGoalInputOldWords(event);dist/* default */.Ay.event({category:"Progress",action:"Change old words goal",label:event||"BAD_INPUT"});return event;}function handleNewWordsGoalInputChange(event){setUserGoalInputNewWords(event);dist/* default */.Ay.event({category:"Progress",action:"Change new words goal",label:event||"BAD_INPUT"});return event;}function restartConfetti(event){if(event&&(event.keyCode&&event.keyCode===13||event.type==="click")){particles.splice(0);confetti/* cancelAnimation */.px();confetti/* setupCanvas */.O5({sparsity:60,colors:5,positioningRandomness:600},"js-page-confetti-target",particles);confetti/* restartAnimation */.eV(particles,canvas.current,canvasWidth,canvasHeight);}}const loadForm=showLoadInput?/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("label",{htmlFor:"js-metwords-from-personal-store--small",className:"inline-block mb05 visually-hidden",children:"Enter your progress here:"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap",style:{rowGap:"16px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{id:"js-metwords-from-personal-store--small",className:"js-metwords-from-personal-store progress-textarea bg-info dark:text-coolgrey-900 px1 py05 bw-1 b--solid br-4 db w-100 mr1",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:false,style:{maxWidth:"200px",maxHeight:"40px"},rows:1}),/*#__PURE__*/(0,jsx_runtime.jsx)(PseudoContentButton/* default */.A,{className:"link-button load-progress mr2",onClick:handleLoadProgress.bind(undefined),"aria-label":"Load progress from text",children:"Load progress"})]})]}):/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:showLoadInputFn.bind(undefined),className:"button button--secondary mr2","aria-label":"Show progress loading form",children:"Load progress"});return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{id:"main",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Subheader/* default */.A,{id:"js-page-confetti-target",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mr1 self-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:"flex items-center min-h-40",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{id:"progress",ref:mainHeading,tabIndex:-1,children:"Progress"})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mxn2",children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_DownloadProgressButton,{metWords:props.metWords})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("canvas",{ref:canvas,width:canvasWidth,height:canvasHeight,className:"fixed celebration-canvas top-0 left-0 pointer-none"}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_FlashcardsSection,{showOnSmallScreen:true,flashcardsCourseLevel:globalUserSettings.flashcardsCourseLevel,skipButtonId:mobileSkipButtonId,updateFlashcardsRecommendation:updateFlashcardsRecommendation}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:`p3 mx-auto mw-1024 mt3`,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"mb0",children:"Your progress"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap mb3",style:{columnGap:"16px",rowGap:"16px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"de-emphasized-button",style:{textDecorationLine:"none"},onClick:()=>setBackupModalOpen(true),children:"Learn more"}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_BackupModal,{isOpen:isBackupModalOpen,handleCloseModal:()=>setBackupModalOpen(false)}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap",style:{rowGap:"16px"},children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex",children:loadForm}),/*#__PURE__*/(0,jsx_runtime.jsx)(PseudoContentButton/* default */.A,{className:"js-clipboard-button link-button copy-to-clipboard",dataClipboardTarget:"#js-metwords-from-typey-type","aria-label":"Copy progress to clipboard",children:"Copy progress"})]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_BackupBanner,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_ProgressSummaryAndLinks,{metWords:props.metWords,restartConfetti:restartConfetti.bind(undefined),yourMemorisedWordCount:props.yourMemorisedWordCount,yourSeenWordCount:props.yourSeenWordCount,userSettings:userSettings}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-between pt3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mw-568 mr3 flex-grow nt-1",children:/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{relative:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense,{fallback:/*#__PURE__*/(0,jsx_runtime.jsx)(components_RecommendationBoxFallback,{}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_RecommendationBox,{lessonsProgress:props.lessonsProgress,yourSeenWordCount:props.yourSeenWordCount,yourMemorisedWordCount:props.yourMemorisedWordCount,metWords:props.metWords})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mw-368 flex-grow",id:"js-confetti-target",children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_TodaysEffortsOrGoals,{cancelSetGoals:cancelSetGoals.bind(undefined),handleNewWordsGoalInputChange:handleNewWordsGoalInputChange.bind(undefined),handleOldWordsGoalInputChange:handleOldWordsGoalInputChange.bind(undefined),newWordsGoalMet:newWordsGoalMet,newWordsGoalUnveiled:newWordsGoalUnveiled,oldWordsGoalMet:oldWordsGoalMet,oldWordsGoalUnveiled:oldWordsGoalUnveiled,celebrateCompletedGoals:celebrateCompletedGoals.bind(undefined),saveGoals:saveGoals.bind(undefined),showSetGoalsForm:showSetGoalsForm,showSetGoalsFormFn:showSetGoalsFormFn.bind(undefined),startingMetWordsToday:props.startingMetWordsToday,todayNewWordCount:todayNewWordCount,todayOldWordCount:todayOldWordCount,unveilOldWordsGoal:setOldWordsGoalUnveiled,unveilNewWordsGoal:setNewWordsGoalUnveiled,userGoalInputOldWords:userGoalInputOldWords,userGoalInputNewWords:userGoalInputNewWords,userGoals:userGoals})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:flashWarning.length>0?"bg-warning pl1 pr1":"hide","aria-live":"polite",children:flashWarning}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap justify-between",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mw-368 flex-grow order-1",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ErrorBoundary/* default */.A,{relative:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_RecentLessons,{lessonIndex:lessonIndex})}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_FlashcardsSection,{showOnSmallScreen:false,flashcardsCourseLevel:globalUserSettings.flashcardsCourseLevel,skipButtonId:skipButtonId,updateFlashcardsRecommendation:updateFlashcardsRecommendation})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mw-568",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{children:"Lessons progress"}),/*#__PURE__*/(0,jsx_runtime.jsx)("ul",{className:"unstyled-list",children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_LessonsProgress,{lessonIndex:lessonIndex,lessonsProgress:props.lessonsProgress})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{children:["There are more ",/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom/* Link */.N_,{to:"/lessons",children:"Lessons"}),", including lessons with sentences."]})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)("h3",{id:"vocabulary-progress",children:"Vocabulary progress"}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_ReformatProgress,{metWords:props.metWords,userSettings:userSettings}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:"Words you\u2019ve seen and times you\u2019ve typed them well:"}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{id:"js-metwords-from-typey-type",className:"w-100 mt3 mb3 quote break-words whitespace-break-spaces",children:/*#__PURE__*/(0,jsx_runtime.jsx)("small",{children:JSON.stringify(props.metWords)})})]})]})});};/* harmony default export */ const progress_Progress = (Progress);

/***/ }),

/***/ 9211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GP: () => (/* binding */ format),
  s: () => (/* binding */ formatPrefix)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/d3-format/src/exponent.js
var exponent = __webpack_require__(916);
;// ./node_modules/d3-format/src/formatGroup.js
/* harmony default export */ function formatGroup(grouping, thousands) {
  return function (value, width) {
    var i = value.length,
      t = [],
      j = 0,
      g = grouping[0],
      length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
;// ./node_modules/d3-format/src/formatNumerals.js
/* harmony default export */ function formatNumerals(numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
}
// EXTERNAL MODULE: ./node_modules/d3-format/src/formatSpecifier.js
var formatSpecifier = __webpack_require__(962);
;// ./node_modules/d3-format/src/formatTrim.js
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
// EXTERNAL MODULE: ./node_modules/d3-format/src/formatDecimal.js
var formatDecimal = __webpack_require__(7109);
;// ./node_modules/d3-format/src/formatPrefixAuto.js

var prefixExponent;
/* harmony default export */ function formatPrefixAuto(x, p) {
  var d = (0,formatDecimal/* formatDecimalParts */.f)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1],
    i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
    n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0,formatDecimal/* formatDecimalParts */.f)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}
;// ./node_modules/d3-format/src/formatRounded.js

/* harmony default export */ function formatRounded(x, p) {
  var d = (0,formatDecimal/* formatDecimalParts */.f)(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}
;// ./node_modules/d3-format/src/formatTypes.js



/* harmony default export */ const formatTypes = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": x => Math.round(x).toString(2),
  "c": x => x + "",
  "d": formatDecimal/* default */.A,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": x => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": x => Math.round(x).toString(16).toUpperCase(),
  "x": x => Math.round(x).toString(16)
});
;// ./node_modules/d3-format/src/identity.js
/* harmony default export */ function identity(x) {
  return x;
}
;// ./node_modules/d3-format/src/locale.js








var map = Array.prototype.map,
  prefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
/* harmony default export */ function locale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
    currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
    currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
    decimal = locale.decimal === undefined ? "." : locale.decimal + "",
    numerals = locale.numerals === undefined ? identity : formatNumerals(map.call(locale.numerals, String)),
    percent = locale.percent === undefined ? "%" : locale.percent + "",
    minus = locale.minus === undefined ? "−" : locale.minus + "",
    nan = locale.nan === undefined ? "NaN" : locale.nan + "";
  function newFormat(specifier) {
    specifier = (0,formatSpecifier/* default */.A)(specifier);
    var fill = specifier.fill,
      align = specifier.align,
      sign = specifier.sign,
      symbol = specifier.symbol,
      zero = specifier.zero,
      width = specifier.width,
      comma = specifier.comma,
      precision = specifier.precision,
      trim = specifier.trim,
      type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
      suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
      maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format(value) {
      var valuePrefix = prefix,
        valueSuffix = suffix,
        i,
        n,
        c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
        padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format.toString = function () {
      return specifier + "";
    };
    return format;
  }
  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = (0,formatSpecifier/* default */.A)(specifier), specifier.type = "f", specifier)),
      e = Math.max(-8, Math.min(8, Math.floor((0,exponent/* default */.A)(value) / 3))) * 3,
      k = Math.pow(10, -e),
      prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}
;// ./node_modules/d3-format/src/defaultLocale.js

var defaultLocale_locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  defaultLocale_locale = locale(definition);
  format = defaultLocale_locale.format;
  formatPrefix = defaultLocale_locale.formatPrefix;
  return defaultLocale_locale;
}

/***/ }),

/***/ 916:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7109);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return x = (0,_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__/* .formatDecimalParts */ .f)(Math.abs(x)), x ? x[1] : NaN;
}

/***/ }),

/***/ 7109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   f: () => (/* binding */ formatDecimalParts)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i,
    coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient, +x.slice(i + 1)];
}

/***/ }),

/***/ 962:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formatSpecifier)
/* harmony export */ });
/* unused harmony export FormatSpecifier */
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function () {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

/***/ })

}]);
//# sourceMappingURL=993.0dd0f480.chunk.js.map