"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [993],
  {
    8278: (e, t, s) => {
      s.d(t, { GE: () => d, J1: () => a, LL: () => l, yg: () => i });
      var r = s(3071),
        o = s(2976),
        n = s(3187);
      function l() {
        const e = (0, o.Xr)(n.Zb);
        return (t) => {
          let s = "BAD_INPUT";
          t &&
            t.target &&
            t.target.name &&
            (e(t.target.name), (s = t.target.name));
          let o = s;
          s || (o = "BAD_INPUT"),
            r.Ay.event({
              category: "Global user settings",
              action: "Change writer input",
              label: o,
            });
        };
      }
      function i() {
        const e = (0, o.Xr)(n.y4);
        return (t) => {
          let s = "BAD_INPUT";
          t &&
            t.target &&
            t.target.name &&
            (e(t.target.name), (s = t.target.name));
          let o = s;
          s || (o = "BAD_INPUT"),
            r.Ay.event({
              category: "Global user settings",
              action: "Change input for KAOES",
              label: o,
            });
        };
      }
      function a() {
        const e = (0, o.Xr)(n.AJ);
        return (t) => {
          const s = t.target,
            o = s.checked,
            n = s.name;
          e(n, o);
          let l = o;
          void 0 === o ? (l = "BAD_INPUT") : l.toString(),
            r.Ay.event({
              category: "Global user settings",
              action: "Change " + n,
              label: l,
            });
        };
      }
      function d() {
        const e = (0, o.Xr)(n.Jl);
        return () => {
          e(Date.now());
          r.Ay.event({
            category: "Global user settings",
            action: "Dismiss backup banner",
            label: "Dismiss",
          });
        };
      }
    },
    5993: (e, t, s) => {
      s.r(t), s.d(t, { default: () => ft });
      var r = s(2483),
        o = s(3071),
        n = s(8337),
        l = s(3008),
        i = s(5029),
        a = s(6723);
      const d = (e) => {
        let t,
          { studyType: s } = e;
        switch (s) {
          case "error":
            t = (0, a.jsxs)(a.Fragment, {
              children: [
                "Unable to fetch the recommendation course. Check your Internet connection and try ",
                (0, a.jsx)("a", { href: ".", children: "refresh the page" }),
                ".",
              ],
            });
            break;
          case "practice":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "Practice a longer lesson and mimic real usage as closely as possible. Write as fast as you can without causing misstrokes. Explore classic stories that use simple and common sentences.",
            });
            break;
          case "drill":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "Regularly drill common words to build up your muscle memory. Write as fast as you can, aiming for a high speed score. Pick specific drills that focus on similar words.",
            });
            break;
          case "revise":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "Revise lessons with lots of words you want to memorise, like the top 100 words. Try to recall briefs before revealing their strokes. Avoid fingerspelling or writing out words in long form.",
            });
            break;
          case "discover":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "Discover new words without hiding their briefs while you learn to write them. Write slowly, concentrating on accuracy and forming good habits around how you stroke word parts.",
            });
            break;
          case "compete":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "To really push your speed and vocabulary, you might add some competition. Try a race. Unexpected material can also teach you to how to adapt to unknown words under pressure.",
            });
            break;
          case "game":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "You\u2019ve been so diligent! You might take a break from drilling and try a game. Steno games let you make mistakes and think differently about what you\u2019ve learned.",
            });
            break;
          case "wildcard":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "Well done! You\u2019ve typed a lot of words today. You might rest your hands and your mind for now, and come back in 4+\xa0hours.",
            });
            break;
          case "break":
            t = (0, a.jsx)(a.Fragment, {
              children:
                "Well done! You\u2019ve typed a lot of words today. You might rest your hands and your mind for now. Save your progress and take 5\xa0minutes or come back in 4+\xa0hours.",
            });
            break;
          default:
            t = (0, a.jsx)(a.Fragment, {
              children:
                "Practice writing as fast as you can without causing misstrokes using simple sentences and common words.",
            });
        }
        return (0, a.jsx)("p", { className: "mb3", children: t });
      };
      var c = s(5350),
        m = s(3391),
        u = s(483),
        h = s(2976),
        p = s(2800),
        f = s(8204),
        y = s(6462);
      let x = ["practice", "drill", "revise", "discover", "wildcard", "break"];
      const g = [
        {
          studyType: "game",
          limitNumberOfWords: null,
          repetitions: null,
          linkTitle: "KAOES (keys) game",
          linkText: "Play KAOES (keys) game",
          link: "/games/KAOES",
        },
        {
          studyType: "game",
          limitNumberOfWords: null,
          repetitions: null,
          linkTitle: "SHUFL (shuffle) game",
          linkText: "Play SHUFL (shuffle) game",
          link: "/games/SHUFL",
        },
        {
          studyType: "game",
          limitNumberOfWords: null,
          repetitions: null,
          linkTitle: "TPEUBGSZ (fixes) game",
          linkText: "Play TPEUBGSZ (fixes) game",
          link: "/games/TPEUBGSZ",
        },
      ];
      var b = s(1506);
      const j = {
        discoverCourse: [
          {
            path: "/lessons/fundamentals/one-syllable-words-with-simple-keys/lesson.txt",
            lessonTitle: "One-syllable words with simple keys",
            target: 15,
          },
        ],
        revisionCourse: [
          {
            path: "/lessons/drills/top-10000-project-gutenberg-words/lesson.txt",
            lessonTitle: "Top 10000 Project Gutenberg words",
            target: 1e4,
          },
        ],
        drillCourse: [
          {
            path: "/lessons/drills/top-10000-project-gutenberg-words/lesson.txt",
            lessonTitle: "Top 10000 Project Gutenberg words",
            target: 1e4,
          },
        ],
        practiceCourse: [
          {
            path: "/lessons/drills/top-10000-project-gutenberg-words/lesson.txt",
            lessonTitle: "Top 10000 Project Gutenberg words",
            target: 1e4,
          },
        ],
      };
      const v = (0, b.Wj)(function () {
        return fetch("/typey-type/lessons/recommendations.json", {
          method: "GET",
          credentials: "same-origin",
        })
          .then((e) => e.json())
          .then((e) => e)
          .catch(() => j);
      });
      var w = s(2660);
      const k = {
          studyType: "practice",
          limitNumberOfWords: 50,
          repetitions: 1,
          linkTitle: "Top 10000 Project Gutenberg words",
          linkText: "Practice 150 words from Top 10000 Project Gutenberg words",
          link:
            "/typey-type/lessons/drills/top-10000-project-gutenberg-words/?recommended=true&" +
            y.A.practiceParams,
        },
        N = (0, w.eU)(k),
        W = (0, w.eU)({ currentStep: null }),
        C = () =>
          (0, a.jsxs)(r.Fragment, {
            children: [
              (0, a.jsxs)("div", {
                className:
                  "panel bg-white dark:bg-coolgrey-1000 min-h-424 p5 mb3",
                children: [
                  (0, a.jsx)("h3", {
                    className: "mt0 pb1 bb b--brand-primary-tint mb3",
                    children: "Recommended\u2026",
                  }),
                  (0, a.jsx)("p", {
                    className: "mb0 mt4",
                    children: (0, a.jsx)("strong", {
                      children: "Loading\u2026",
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "de-emphasized",
                    children: "\u2026",
                  }),
                  (0, a.jsx)(d, { studyType: "discover" }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-wrap",
                    children: [
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)("button", {
                          disabled: !0,
                          className: "mr2 link-button dib",
                          style: { lineHeight: 2 },
                          children: "Loading\u2026",
                        }),
                      }),
                      (0, a.jsx)("button", {
                        disabled: !0,
                        id: "js-skip-button",
                        className: "button button--secondary pl3 pr3",
                        children: "Skip",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "hide",
                    id: "js-next-recommended-link-text",
                    children: "\xa0",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "flex flex-wrap content-start-ns",
                children: (0, a.jsx)("div", { className: "flex flex-wrap" }),
              }),
            ],
          }),
        T = (e) => {
          let {
            lessonsProgress: t,
            yourSeenWordCount: s,
            yourMemorisedWordCount: n,
            metWords: l,
          } = e;
          const [b, j] = (0, r.useState)(!1),
            w = (0, f.W)(),
            k = (0, h.md)(v),
            T = (0, h.Xr)(p.O),
            { updateMessage: S } = (0, u.b)(),
            O = (0, r.useRef)(!0),
            [A, M] = (0, h.fp)(W),
            [E, P] = (0, h.fp)(N);
          function F(e) {
            let r = Object.assign({}, e);
            switch (
              (("undefined" !== typeof r.currentStep &&
                null !== r.currentStep) ||
                (r.currentStep = "break"),
              r.currentStep)
            ) {
              case null:
              case "practice":
                r.currentStep = "drill";
                break;
              case "drill":
                r.currentStep = "revise";
                break;
              case "revise":
                r.currentStep = "discover";
                break;
              case "discover":
                r.currentStep = "wildcard";
                break;
              case "wildcard":
                r.currentStep = "break";
                break;
              default:
                r.currentStep = "practice";
            }
            const o = (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  s =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : 0,
                  n =
                    arguments.length > 5 && void 0 !== arguments[5]
                      ? arguments[5]
                      : {},
                  l = {
                    studyType: "practice",
                    limitNumberOfWords: 300,
                    repetitions: 1,
                    linkTitle: "Top 10000 Project Gutenberg words",
                    linkText:
                      "Practice 300 words from Top 10000 Project Gutenberg words",
                    link:
                      "/typey-type/lessons/drills/top-10000-project-gutenberg-words/?recommended=true&" +
                      y.A.practiceParams,
                  },
                  i = 0;
                if ("object" === typeof s)
                  switch (s.currentStep) {
                    case "practice":
                    case null:
                    default:
                      i = 0;
                      break;
                    case "drill":
                      i = 1;
                      break;
                    case "revise":
                      i = 2;
                      break;
                    case "discover":
                      i = 3;
                      break;
                    case "wildcard":
                    case "compete":
                    case "game":
                      i = 4;
                      break;
                    case "break":
                      i = 5;
                  }
                if (
                  ("practice" === x[i] && o < 2 && (i += 1),
                  "practice" === x[i])
                ) {
                  let s = "?recommended=true&" + y.A.practiceParams;
                  switch (
                    Math.random() < 0.9
                      ? "practiceLessons"
                      : "practiceAllYourWords"
                  ) {
                    case "practiceAllYourWords":
                      (s = s.replace("newWords=1", "newWords=0")),
                        (l.limitNumberOfWords = 300),
                        (l.linkTitle = "Your words"),
                        (l.linkText = "Practice your words"),
                        (l.link = "/lessons/progress/" + s),
                        (l.studyType = "practice"),
                        (l.repetitions = 1);
                      break;
                    case "practiceLessons":
                      let r = e.practiceCourse.find((e) => {
                          let s = t["/typey-type" + e.path],
                            r =
                              Math.random() < 0.9
                                ? "numberOfWordsSeen"
                                : "numberOfWordsMemorised";
                          return (
                            "undefined" === typeof s ||
                            "undefined" === typeof s[r] ||
                            ("numberOfWordsMemorised" === r
                              ? !(s[r] >= 0.6 * e.target)
                              : 0 !== s.numberOfWordsToDiscover)
                          );
                        }),
                        o = 300,
                        i = n.find((e) => "/lessons" + e.path === r.path);
                      "undefined" !== typeof i &&
                        "undefined" !== typeof i.wordCount &&
                        (o = i.wordCount),
                        "undefined" !== typeof r &&
                          ((l.studyType = "practice"),
                          (l.limitNumberOfWords = Math.min(300, o)),
                          (l.repetitions = 1),
                          (l.linkTitle = r.lessonTitle),
                          (l.linkText = "Practice " + r.lessonTitle),
                          (l.link = r.path.replace(/lesson.txt$/, "") + s));
                      break;
                    default:
                      (s = s.replace("newWords=1", "newWords=0")),
                        (l.limitNumberOfWords = 300),
                        (l.linkTitle = "Your words"),
                        (l.linkText = "Practice your words"),
                        (l.link =
                          "/lessons/progress/?recommended=true&" +
                          y.A.practiceParams),
                        (l.studyType = "practice"),
                        (l.repetitions = 1);
                  }
                }
                if (("drill" === x[i] && o < 2 && (i += 1), "drill" === x[i])) {
                  let s;
                  switch (
                    Math.random() < 0.5 ? "drillLessons" : "drillMemorised"
                  ) {
                    case "drillMemorised":
                    default:
                      (l.studyType = "drill"),
                        (l.limitNumberOfWords = 100),
                        (l.repetitions = 3),
                        (l.linkTitle = "Your memorised words"),
                        (l.linkText = "Your memorised words"),
                        (l.link =
                          "/lessons/progress/memorised/?recommended=true&" +
                          y.A.drillParams);
                      break;
                    case "drillLessons":
                      let r = e.drillCourse.find(
                        (e) => (
                          (s = t["/typey-type" + e.path]),
                          "undefined" !== typeof s &&
                            !((s.numberOfWordsMemorised || 0) >= e.target) &&
                            !((s.numberOfWordsMemorised || 0) < 15)
                        ),
                      );
                      "undefined" !== typeof r
                        ? ((l.studyType = "drill"),
                          (l.limitNumberOfWords = 100),
                          (l.repetitions = 3),
                          (l.linkTitle = r.lessonTitle),
                          (l.linkText =
                            "Drill " +
                            l.limitNumberOfWords +
                            " words from " +
                            r.lessonTitle +
                            " with " +
                            l.repetitions +
                            " repetitions"),
                          (l.link =
                            r.path.replace(/lesson.txt$/, "") +
                            "?recommended=true&" +
                            y.A.drillParams))
                        : ((l.studyType = "drill"),
                          (l.limitNumberOfWords = 100),
                          (l.repetitions = 3),
                          (l.linkTitle = "Your memorised words"),
                          (l.linkText = "Your memorised words"),
                          (l.link =
                            "/lessons/progress/memorised/?recommended=true&" +
                            y.A.drillParams));
                  }
                }
                if (
                  ("revise" === x[i] && r < 15 && (i += 1), "revise" === x[i])
                )
                  switch (
                    Math.random() < 0.5 ? "reviseLessons" : "reviseSeen"
                  ) {
                    case "reviseSeen":
                    default:
                      (l.studyType = "revise"),
                        (l.limitNumberOfWords = 50),
                        (l.repetitions = 3),
                        (l.linkTitle = "Your revision words"),
                        (l.linkText = "Your revision words"),
                        (l.link =
                          "/lessons/progress/seen/?recommended=true&" +
                          y.A.reviseParams);
                      break;
                    case "reviseLessons":
                      let s,
                        r = e.revisionCourse.find(
                          (e) => (
                            (s = t["/typey-type" + e.path]),
                            "undefined" !== typeof s &&
                              !(s.numberOfWordsSeen >= e.target) &&
                              !(s.numberOfWordsSeen < 15)
                          ),
                        );
                      "undefined" !== typeof r
                        ? ((l.studyType = "revise"),
                          (l.limitNumberOfWords = 50),
                          (l.repetitions = 3),
                          (l.linkTitle = r.lessonTitle),
                          (l.linkText =
                            "Revise 50 words from " +
                            r.lessonTitle +
                            " with 3 repetitions"),
                          (l.link =
                            r.path.replace(/lesson.txt$/, "") +
                            "?recommended=true&" +
                            y.A.reviseParams))
                        : ((l.studyType = "revise"),
                          (l.limitNumberOfWords = 50),
                          (l.repetitions = 3),
                          (l.linkTitle = "Your revision words"),
                          (l.linkText = "Your revision words"),
                          (l.link =
                            "/lessons/progress/seen/?recommended=true&" +
                            y.A.reviseParams));
                  }
                if ("discover" === x[i]) {
                  let s,
                    r = "?recommended=true&" + y.A.discoverParams,
                    o = e.discoverCourse.find(
                      (e) =>
                        "undefined" === typeof t["/typey-type" + e.path] ||
                        ((s = t["/typey-type" + e.path]),
                        !(
                          (s.numberOfWordsSeen || 0) +
                            (s.numberOfWordsMemorised || 0) >=
                          e.target
                        ) && 0 !== s.numberOfWordsToDiscover),
                    ),
                    i = 15,
                    a = n.find((e) => "/lessons" + e.path === o.path);
                  "undefined" !== typeof a &&
                    "undefined" !== typeof a.wordCount &&
                    (i = a.wordCount);
                  let d = 15;
                  t[o.path] &&
                    t[o.path].numberOfWordsToDiscover &&
                    (d = t[o.path].numberOfWordsToDiscover);
                  let c = Math.min(15, i, d);
                  (o.path.includes("briefs") ||
                    o.path.includes("punctuation") ||
                    o.path.includes("longest")) &&
                    ((c = Math.min(5, i, d)),
                    (r = r.replace(
                      "limitNumberOfWords=15",
                      "limitNumberOfWords=" + c.toString(),
                    ))),
                    "undefined" !== typeof o &&
                      ((l.studyType = "discover"),
                      (l.limitNumberOfWords = c),
                      (l.repetitions = 5),
                      (l.linkTitle = o.lessonTitle),
                      (l.linkText =
                        "Discover " +
                        c +
                        " words from " +
                        o.lessonTitle +
                        " with 5 repetitions"),
                      (l.link = o.path.replace(/lesson.txt$/, "") + r));
                }
                if ("wildcard" === x[i])
                  switch (Math.random() < 0.5 ? "compete" : "game") {
                    case "compete":
                      (l.studyType = "compete"),
                        (l.limitNumberOfWords = null),
                        (l.repetitions = null),
                        (l.linkTitle = "Type Racer"),
                        (l.linkText = "Play Type Racer"),
                        (l.link = "https://play.typeracer.com/?universe=steno");
                      break;
                    case "game":
                      r + o < 100
                        ? Object.assign(l, g[0])
                        : Math.random() < 0.5
                          ? Object.assign(l, g[1])
                          : Object.assign(l, g[2]);
                      break;
                    default:
                      (l.studyType = "break"),
                        (l.limitNumberOfWords = null),
                        (l.repetitions = null),
                        (l.linkTitle = "Take a break"),
                        (l.linkText = "Take a break"),
                        (l.link = "/break");
                  }
                return (
                  "break" === x[i] &&
                    ((l.studyType = "break"),
                    (l.limitNumberOfWords = null),
                    (l.repetitions = null),
                    (l.linkTitle = "Save your progress and take a break"),
                    (l.linkText = "Take a break"),
                    (l.link = "/break")),
                  l
                );
              })(k, t, r, s, n, w, l),
              i = o;
            M(r),
              P(i),
              E.linkText === o.linkText &&
                "error" !== o.studyType &&
                "break" !== o.studyType &&
                F(r);
          }
          (0, r.useEffect)(() => {
            try {
              null === (null === A || void 0 === A ? void 0 : A.currentStep) &&
                (T(!1), F(A));
            } catch (e) {
              console.error(e);
            }
          }, []),
            (0, r.useEffect)(() => {
              O.current ? (O.current = !1) : (T(!1), F(A));
            }, [b]);
          const G = () => {
            o.Ay.event({
              category: "Recommendations",
              action: "Skip recommended",
              label:
                (null === E || void 0 === E ? void 0 : E.link) || "BAD_INPUT",
            });
            const e = document.getElementById("js-skip-button");
            e && e.focus(),
              setTimeout(() => {
                const e = document.getElementById(
                  "js-next-recommended-link-text",
                );
                var t;
                e &&
                  "Loading\u2026" !== e.textContent &&
                  S(
                    `Recommended: ${null !== (t = e.textContent) && void 0 !== t ? t : ""}`,
                  );
              }, 100),
              T(!1),
              F(A);
          };
          function I(e) {
            var t;
            o.Ay.event({
              category: "Recommendations",
              action: "Start recommended step",
              label: E.link || "BAD_INPUT",
            }),
              null !== (t = E.link) && void 0 !== t && t.startsWith("http")
                ? (T(!1), F(A))
                : (j(!0), e.preventDefault());
          }
          let L,
            D,
            R,
            Y,
            _,
            B,
            U,
            z = "mt0 pb1 bb b--brand-primary-tint mb3";
          if (E) {
            switch (
              ((_ = (0, a.jsxs)(r.Fragment, {
                children: [
                  E.limitNumberOfWords,
                  " ",
                  1 === E.limitNumberOfWords ? "word" : "words",
                  " |",
                  " ",
                  E.repetitions,
                  " repetitions",
                ],
              })),
              (B = E.studyType),
              "error" === B
                ? (_ = (0, a.jsx)(r.Fragment, {
                    children: "No recommendation.",
                  }))
                : "wildcard" === B
                  ? (_ = (0, a.jsx)(r.Fragment, { children: "External link." }))
                  : "game" === B
                    ? (_ = (0, a.jsx)(r.Fragment, {
                        children:
                          "Solve puzzles to exercise your steno knowledge",
                      }))
                    : "compete" === B
                      ? (_ = (0, a.jsx)(r.Fragment, {
                          children:
                            "Increase your speed while racing against others",
                        }))
                      : "break" === B
                        ? (_ = (0, a.jsx)(r.Fragment, {
                            children:
                              "Take 5\xa0minutes or come\xa0back in 4+\xa0hours.",
                          }))
                        : 1 === E.repetitions &&
                          (_ = (0, a.jsxs)(r.Fragment, {
                            children: [
                              E.limitNumberOfWords,
                              " ",
                              1 === E.limitNumberOfWords ? "word" : "words",
                              " |",
                              " ",
                              E.repetitions,
                              " repetition",
                            ],
                          })),
              null !== E &&
                void 0 !== E &&
                E.lessonTitle &&
                E.lessonTitle.length < 10 &&
                ((_ = (0, a.jsxs)(r.Fragment, {
                  children: [
                    E.limitNumberOfWords,
                    " ",
                    1 === E.limitNumberOfWords ? "word" : "words",
                    " ",
                    (0, a.jsx)("br", {}),
                    " ",
                    E.repetitions,
                    " repetitions",
                  ],
                })),
                1 === E.repetitions &&
                  (_ = (0, a.jsxs)(r.Fragment, {
                    children: [
                      E.limitNumberOfWords,
                      " ",
                      1 === E.limitNumberOfWords ? "word" : "words",
                      " ",
                      (0, a.jsx)("br", {}),
                      " ",
                      E.repetitions,
                      " repetition",
                    ],
                  }))),
              E.studyType)
            ) {
              case "error":
                (U = "Practice"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: error",
                  }));
                break;
              case "practice":
                (U = "Practice"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: practice",
                  }));
                break;
              case "drill":
                (U = "Drill"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: drill",
                  }));
                break;
              case "revise":
                (U = "Revise"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: revise",
                  }));
                break;
              case "discover":
                (U = "Discover"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: discover",
                  }));
                break;
              case "break":
                (U = "Take a break"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: break",
                  }));
                break;
              case "game":
                (U = "Play"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: game",
                  }));
                break;
              case "compete":
                (U = "Compete"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: compete",
                  }));
                break;
              default:
                (U = "Start now"),
                  (D = (0, a.jsx)("h3", {
                    className: z,
                    children: "Recommended: practice",
                  }));
            }
            (R = E.link.startsWith("http")
              ? (0, a.jsxs)(i.A, {
                  eventLabel: U,
                  "aria-label": U + " (external link opens in new tab)",
                  to: E.link,
                  onClick: I,
                  className: "link-button dib",
                  style: { lineHeight: 2 },
                  children: [U, " (opens in new tab)"],
                })
              : (0, a.jsx)(c.N_, {
                  onClick: I,
                  to: E.link,
                  className: "link-button dib",
                  style: { lineHeight: 2 },
                  children: U,
                })),
              "error" === B
                ? ((Y = "Unable to load recommendation"),
                  (R = (0, a.jsx)("a", {
                    href: ".",
                    className: "link-button dib",
                    style: { lineHeight: 2 },
                    children: "Refresh",
                  })))
                : (Y = E.linkTitle),
              (L = (0, a.jsxs)(r.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "panel bg-white dark:bg-coolgrey-1000 min-h-424 p5 mb3",
                    children: [
                      D,
                      (0, a.jsx)("p", {
                        className: "mb0 mt4",
                        children: (0, a.jsx)("strong", { children: Y }),
                      }),
                      (0, a.jsx)("p", {
                        className: "de-emphasized",
                        children: _,
                      }),
                      (0, a.jsx)(d, { studyType: E.studyType }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                          (0, a.jsx)("div", { children: R }),
                          (0, a.jsx)("button", {
                            onClick: G,
                            id: "js-skip-button",
                            className: "button button--secondary pl3 pr3",
                            children: "Skip",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "hide",
                        id: "js-next-recommended-link-text",
                        children: E.linkText,
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "flex flex-wrap content-start-ns",
                    children: (0, a.jsx)("div", {
                      className: "flex flex-wrap",
                    }),
                  }),
                ],
              }));
          } else L = (0, a.jsx)(C, {});
          return !0 === b
            ? (0, a.jsx)(m.rd, { push: !0, to: E.link })
            : (0, a.jsx)(r.Fragment, { children: L });
        };
      var S = s(7683);
      const O = (e) => {
        var t;
        let { lessonIndex: s } = e;
        const o =
            null === (t = (0, h.md)(S.R)) || void 0 === t ? void 0 : t.history,
          n = o && o.length > 0 && o[0] && o[0].path,
          l = n
            ? o
                .filter((e) =>
                  s.find(
                    (t) =>
                      e.path.includes("/lessons/progress") ||
                      t.path === e.path.replace("/lessons", "") + "lesson.txt",
                  ),
                )
                .map((e) => {
                  let t = s.find(
                    (t) =>
                      t.path === e.path.replace("/lessons", "") + "lesson.txt",
                  );
                  if (e.path.includes("/lessons/progress")) {
                    const s = e.path.replace("/lessons", ""),
                      r = s.includes("memorised")
                        ? "Your memorised words"
                        : s.includes("seen")
                          ? "Your revision words"
                          : "Your words";
                    t = { path: s, title: r };
                  }
                  let r = "practice";
                  e && e.studyType && (r = e.studyType);
                  const o = `${r}Params`;
                  return t
                    ? (0, a.jsx)(
                        "li",
                        {
                          className: "unstyled-list-item mb1",
                          children: (0, a.jsx)(c.N_, {
                            to:
                              "/lessons" +
                              t.path
                                .replace(/lesson\.txt$/, "")
                                .replace(/\/{2,}/g, "/") +
                              "?recent=1&" +
                              y.A[o],
                            id:
                              "ga--recent-lessons--" +
                              t.path.replace(/[/.]/g, "-"),
                            children: t.title,
                          }),
                        },
                        t.path,
                      )
                    : void 0;
                })
                .filter(Boolean)
                .reverse()
            : void 0;
        return n
          ? (0, a.jsxs)(r.Fragment, {
              children: [
                (0, a.jsx)("h3", { children: "Recent lessons" }),
                (0, a.jsx)("ul", { className: "unstyled-list", children: l }),
              ],
            })
          : null;
      };
      var A = s(5708),
        M = s(9133);
      const E = (e) => {
        let {
          flashcardsNextLesson: t,
          skipButtonId: s,
          startFlashcards: r,
          updateFlashcardsRecommendation: n,
        } = e;
        const { updateMessage: l } = (0, u.b)(),
          i = () => {
            o.Ay.event({
              category: "Flashcards",
              action: "Skip recommended flashcards",
              label:
                (null === t || void 0 === t ? void 0 : t.link) || "BAD_INPUT",
            }),
              setTimeout(() => {
                const e = document.getElementById(
                  "js-next-recommended-link-text",
                );
                var t;
                e &&
                  "Loading\u2026" !== e.textContent &&
                  l(
                    `Recommended: ${null !== (t = e.textContent) && void 0 !== t ? t : ""}`,
                  );
              }, 100),
              n();
          };
        return t
          ? (0, a.jsxs)("div", {
              className: "bw-12 br-4 b--solid b--brand-primary p3 mb3",
              children: [
                (0, a.jsx)("p", {
                  className: "text-right",
                  children: (0, a.jsx)("strong", { children: t.linkTitle }),
                }),
                (0, a.jsx)("p", {
                  className: "text-right de-emphasized",
                  "data-chromatic": "ignore",
                  children:
                    1558144862e3 === t.lastSeen
                      ? "New flashcards"
                      : `Seen ${M.t2(Date.now(), t.lastSeen)} ago`,
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-wrap justify-end",
                  children: [
                    (0, a.jsx)("button", {
                      onClick: i,
                      id: s || "js-flashcards-skip-button",
                      className: "button button--secondary mr2 pl3 pr3",
                      children: "Skip",
                    }),
                    (0, a.jsx)("div", {
                      className: "text-right",
                      children: (0, a.jsx)(c.N_, {
                        onClick: r,
                        to: t.link,
                        className: "link-button dib",
                        style: { lineHeight: 2 },
                        children: "Study",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "hide",
                      id: "js-next-recommended-link-text",
                      children: t.linkTitle,
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsxs)("div", {
              className: "bw-12 br-4 b--solid b--brand-primary p3 mb3",
              children: [
                (0, a.jsx)("p", {
                  className: "text-right",
                  children: (0, a.jsx)("strong", { children: "Loading\u2026" }),
                }),
                (0, a.jsx)("p", { className: "text-right de-emphasized" }),
                (0, a.jsxs)("div", {
                  className: "flex flex-wrap justify-end",
                  children: [
                    (0, a.jsx)("button", {
                      onClick: i,
                      id: s || "js-flashcards-skip-button",
                      className: "button button--secondary mr2 pl3 pr3",
                      children: "Skip",
                    }),
                    (0, a.jsx)("div", {
                      className: "text-right",
                      children: (0, a.jsx)("button", {
                        disabled: !0,
                        className: "link-button dib",
                        style: { lineHeight: 2 },
                        children: "Loading\u2026",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "hide",
                      id: "js-next-recommended-link-text",
                      children: "Loading\u2026",
                    }),
                  ],
                }),
              ],
            });
      };
      var P = s(9892),
        F = s(6525);
      const G = (e) => {
        let {
          showOnSmallScreen: t,
          flashcardsCourseLevel: s,
          skipButtonId: l,
          updateFlashcardsRecommendation: i,
        } = e;
        const { flashcardsNextLesson: d } = (0, h.md)(F.YV),
          c = (0, P.b)();
        (0, r.useEffect)(() => {
          i();
        }, [s]);
        return (0, a.jsx)("div", {
          className: "mx-auto" + (t ? " p3 mw-1024 show-sm-only" : ""),
          children: (0, a.jsxs)("div", {
            className: "mw100" + (t ? " w-336" : ""),
            children: [
              (0, a.jsx)("h3", { children: "Flashcards" }),
              (0, a.jsxs)(n.A, {
                relative: !0,
                children: [
                  (0, a.jsxs)("div", {
                    className: "clearfix mb2 mt2",
                    children: [
                      (0, a.jsx)("label", {
                        className: "mb1 db",
                        htmlFor: t
                          ? "smFlashcardsCourseLevel"
                          : "mdFlashcardsCourseLevel",
                        children: "Choose flashcard level",
                      }),
                      (0, a.jsxs)("select", {
                        id: t
                          ? "smFlashcardsCourseLevel"
                          : "mdFlashcardsCourseLevel",
                        name: "flashcardsCourseLevel",
                        value: s,
                        onChange: c,
                        className:
                          "form-control form-control--large mw100 w-336",
                        children: [
                          (0, a.jsx)("option", {
                            value: "noviceCourse",
                            children: "Novice",
                          }),
                          (0, a.jsx)("option", {
                            value: "beginnerCourse",
                            children: "Beginner",
                          }),
                          (0, a.jsx)("option", {
                            value: "competentCourse",
                            children: "Competent",
                          }),
                          (0, a.jsx)("option", {
                            value: "proficientCourse",
                            children: "Proficient",
                          }),
                          (0, a.jsx)("option", {
                            value: "expertCourse",
                            children: "Expert",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(E, {
                    skipButtonId: l,
                    flashcardsNextLesson: d,
                    startFlashcards: () => {
                      o.Ay.event({
                        category: "Flashcards",
                        action: "Start recommended flashcards",
                        label:
                          (null === d || void 0 === d ? void 0 : d.link) ||
                          "BAD_INPUT",
                      });
                    },
                    updateFlashcardsRecommendation: i,
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var I,
        L,
        D,
        R,
        Y,
        _,
        B,
        U,
        z,
        $,
        H,
        V,
        Z,
        X,
        J,
        K,
        q,
        Q,
        ee,
        te,
        se,
        re,
        oe,
        ne,
        le,
        ie,
        ae,
        de,
        ce,
        me,
        ue,
        he,
        pe,
        fe,
        ye,
        xe,
        ge,
        be,
        je,
        ve,
        we,
        ke,
        Ne = s(4656),
        We = s.n(Ne),
        Ce = s(4148);
      function Te() {
        return (
          (Te = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var s = arguments[t];
                  for (var r in s)
                    ({}).hasOwnProperty.call(s, r) && (e[r] = s[r]);
                }
                return e;
              }),
          Te.apply(null, arguments)
        );
      }
      function Se(e, t) {
        let { title: s, titleId: o, ...n } = e;
        return r.createElement(
          "svg",
          Te(
            {
              viewBox: "0 0 77 124",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": o,
            },
            n,
          ),
          s ? r.createElement("title", { id: o }, s) : null,
          I ||
            (I = r.createElement("path", {
              d: "M76.0012 78.404C74.001 64.0127 62.436 60.0127 52.8708 60.0127L52.8708 64.0127C68.5229 64.3869 70.7838 76.6409 70.7838 78.404C70.7838 81.8823 76.48 81.8491 76.0012 78.404Z",
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 1.73913,
            })),
          L ||
            (L = r.createElement("path", {
              d: "M1.00084 78.404C3.00098 64.0127 14.4357 60.0127 24.0009 60.0127L24.0009 64.0127C8.34873 64.3869 6.00084 76.6409 6.00084 78.404C6.00084 81.8823 0.522027 81.8491 1.00084 78.404Z",
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 1.73913,
            })),
          D ||
            (D = r.createElement("rect", {
              x: 25,
              y: 98,
              width: 7,
              height: 21,
              fill: "#202630",
            })),
          R ||
            (R = r.createElement("rect", {
              x: 45,
              y: 98,
              width: 7,
              height: 21,
              fill: "#202630",
            })),
          Y ||
            (Y = r.createElement("rect", {
              x: 30,
              y: 45,
              width: 17,
              height: 5,
              fill: "#202630",
            })),
          _ ||
            (_ = r.createElement("path", {
              d: "M18 60C18 54.4772 22.4772 50 28 50H49C54.5228 50 59 54.4772 59 60V89C59 94.5228 54.5228 99 49 99H28C22.4772 99 18 94.5228 18 89V60Z",
              fill: "#949494",
            })),
          B ||
            (B = r.createElement("rect", {
              x: 50.97,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          U ||
            (U = r.createElement("rect", {
              x: 50.97,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          z ||
            (z = r.createElement("rect", {
              x: 48.3883,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          $ ||
            ($ = r.createElement("rect", {
              x: 48.3883,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          H ||
            (H = r.createElement("rect", {
              x: 45.8075,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          V ||
            (V = r.createElement("rect", {
              x: 45.8075,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          Z ||
            (Z = r.createElement("rect", {
              x: 43.2255,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          X ||
            (X = r.createElement("rect", {
              x: 43.2255,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          J ||
            (J = r.createElement("rect", {
              x: 40.6438,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          K ||
            (K = r.createElement("rect", {
              x: 40.6438,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          q ||
            (q = r.createElement("rect", {
              x: 41.9958,
              y: 70.3042,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          Q ||
            (Q = r.createElement("rect", {
              x: 39.4149,
              y: 70.3042,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          ee ||
            (ee = r.createElement("rect", {
              x: 37.325,
              y: 63.4045,
              width: 2.45848,
              height: 6.28387,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          te ||
            (te = r.createElement("rect", {
              x: 35.7264,
              y: 70.3042,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          se ||
            (se = r.createElement("rect", {
              x: 33.146,
              y: 70.3042,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          re ||
            (re = r.createElement("rect", {
              x: 34.4985,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          oe ||
            (oe = r.createElement("rect", {
              x: 34.4985,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          ne ||
            (ne = r.createElement("rect", {
              x: 31.9164,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          le ||
            (le = r.createElement("rect", {
              x: 31.9164,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          ie ||
            (ie = r.createElement("rect", {
              x: 29.3356,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          ae ||
            (ae = r.createElement("rect", {
              x: 29.3356,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          de ||
            (de = r.createElement("rect", {
              x: 26.7535,
              y: 66.8552,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          ce ||
            (ce = r.createElement("rect", {
              x: 26.7535,
              y: 63.4045,
              width: 1.96678,
              height: 2.8339,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          me ||
            (me = r.createElement("rect", {
              x: 26.7534,
              y: 60.9414,
              width: 26.1828,
              height: 1.8482,
              rx: 0.462772,
              fill: "#202630",
              stroke: "#202630",
              strokeWidth: 0.115693,
            })),
          ue ||
            (ue = r.createElement("path", {
              d: "M47 4.48695C40.2243 2.53439 37 9.51792 37 13.9999H40C39.5282 6.74529 44.8491 5.7889 47 7.33062V4.48695Z",
              fill: "#202630",
              stroke: "#202630",
            })),
          he ||
            (he = r.createElement("circle", {
              cx: 49,
              cy: 7,
              r: 4,
              fill: "#202630",
            })),
          pe ||
            (pe = r.createElement("circle", {
              cx: 50.5,
              cy: 5.5,
              r: 1.5,
              fill: "white",
            })),
          fe ||
            (fe = r.createElement("path", {
              d: "M28.5 113C23.8056 113 19.9999 118.5 20 121.5C20.0001 124.5 37 124.5 37 121.5C37 118.5 33.1944 113 28.5 113Z",
              fill: "#202630",
            })),
          ye ||
            (ye = r.createElement("path", {
              d: "M48.5 113C43.8056 113 39.9999 118.5 40 121.5C40.0001 124.5 57 124.5 57 121.5C57 118.5 53.1944 113 48.5 113Z",
              fill: "#202630",
            })),
          xe ||
            (xe = r.createElement("path", {
              d: "M62 33C64.2091 33 66 31.2091 66 29C66 26.7909 64.2091 25 62 25V33Z",
              fill: "#202630",
            })),
          ge ||
            (ge = r.createElement("path", {
              d: "M11 29C11 31.2091 12.7909 33 15 33V25C12.7909 25 11 26.7909 11 29Z",
              fill: "#202630",
            })),
          be ||
            (be = r.createElement("path", {
              d: "M14 25.0954C14 18.9676 18.9676 14 25.0954 14H51.9046C58.0324 14 63 18.9676 63 25.0954V33C63 39.6274 57.6274 45 51 45H26C19.3726 45 14 39.6274 14 33V25.0954Z",
              fill: "#949494",
            })),
          je ||
            (je = r.createElement("path", {
              d: "M20 25.224C20 22.3389 22.3389 20 25.224 20H51.776C54.6611 20 57 22.3389 57 25.224V31C57 35.4183 53.4183 39 49 39H28C23.5817 39 20 35.4183 20 31V25.224Z",
              fill: "white",
            })),
          ve ||
            (ve = r.createElement("path", {
              d: "M41.9646 32.4173L35.9646 32.4173C35.4123 32.4173 34.9644 32.8651 34.9644 33.4173C34.9643 33.6888 34.9644 33.9355 34.9647 34.0473C34.9688 35.8694 37.0263 36 38.9646 36C40.9029 36 42.9646 35.9416 42.9646 34.0473L42.9646 33.4173C42.9646 32.8651 42.5168 32.4173 41.9646 32.4173Z",
              fill: "#202630",
            })),
          we ||
            (we = r.createElement("circle", {
              cx: 30,
              cy: 28,
              r: 3,
              fill: "#202630",
            })),
          ke ||
            (ke = r.createElement("circle", {
              cx: 47,
              cy: 28,
              r: 3,
              fill: "#202630",
            })),
        );
      }
      const Oe = r.forwardRef(Se);
      s.p;
      var Ae = s(4960);
      const Me = (e) => {
          let { userGoalsWords: t, todayWordCount: s } = e;
          return (0, a.jsxs)(r.Fragment, {
            children: [
              t,
              t <= s
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        children: " \u2022",
                      }),
                      " Done!",
                    ],
                  })
                : null,
            ],
          });
        },
        Ee = (e) => {
          let {
            cancelSetGoals: t,
            handleNewWordsGoalInputChange: s,
            handleOldWordsGoalInputChange: o,
            newWordsGoalMet: n,
            newWordsGoalUnveiled: l,
            oldWordsGoalMet: i,
            oldWordsGoalUnveiled: d,
            celebrateCompletedGoals: c,
            saveGoals: m,
            showSetGoalsForm: u,
            showSetGoalsFormFn: h,
            startingMetWordsToday: p,
            todayNewWordCount: f,
            todayOldWordCount: y,
            unveilOldWordsGoal: x,
            unveilNewWordsGoal: g,
            userGoalInputNewWords: b,
            userGoalInputOldWords: j,
            userGoals: v,
          } = e;
          let w;
          if (u)
            w = (0, a.jsx)(r.Fragment, {
              children: (0, a.jsx)("form", {
                onSubmit: m,
                children: (0, a.jsxs)("div", {
                  className: "pt4 pb4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "mb3",
                      children: [
                        (0, a.jsx)("label", {
                          className: "pb1",
                          id: "js-first-interactive-form-field-element",
                          htmlFor: "userGoalInputOldWords",
                          children: "Old words goal",
                        }),
                        (0, a.jsx)(We(), {
                          autoCapitalize: "off",
                          autoComplete: "off",
                          autoCorrect: "off",
                          autoFocus: !1,
                          className: "form-control w-100",
                          disabled: !u,
                          id: "userGoalInputOldWords",
                          max: 1e4,
                          min: 1,
                          name: "userGoalInputOldWords",
                          onChange: o,
                          precision: 0,
                          spellCheck: "false",
                          step: 1,
                          style: !1,
                          type: "number",
                          value: j,
                          snap: !0,
                        }),
                        (0, a.jsx)("div", {
                          className: "mt1 text-small de-emphasized",
                          children: "(50\u2013200 recommended)",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "mb3",
                      children: [
                        (0, a.jsx)("label", {
                          className: "pb1",
                          htmlFor: "userGoalInputNewWords",
                          children: "New words goal",
                        }),
                        (0, a.jsx)(We(), {
                          autoCapitalize: "off",
                          autoComplete: "off",
                          autoCorrect: "off",
                          autoFocus: !1,
                          className: "form-control w-100",
                          disabled: !u,
                          id: "userGoalInputNewWords",
                          max: 1e4,
                          min: 1,
                          name: "userGoalInputNewWords",
                          onChange: s,
                          precision: 0,
                          spellCheck: "false",
                          step: 1,
                          style: !1,
                          type: "number",
                          value: b,
                          snap: !0,
                        }),
                        (0, a.jsx)("div", {
                          className: "mt1 text-small de-emphasized",
                          children: "(5\u201340 recommended)",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-wrap justify-end",
                      children: [
                        (0, a.jsx)("button", {
                          onClick: t,
                          className: "button button--secondary mr2 dib",
                          children: "Cancel",
                        }),
                        (0, a.jsx)("button", {
                          onClick: m,
                          className: "button mr2 dib",
                          children: "Save goals",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          else if ((i && !d) || (n && !l))
            w = (0, a.jsx)(r.Fragment, {
              children: (0, a.jsxs)("div", {
                className:
                  "inline-flex flex-column items-center pt4 pb4 bb b--brand-primary-tint w-100",
                children: [
                  (0, a.jsx)("div", {
                    className: "todays-effort-reveal-robot",
                    children: (0, a.jsx)(Ce.h, {}),
                  }),
                  "You completed a goal!",
                  (0, a.jsx)("button", {
                    onClick: function () {
                      c(i && !d, n && !l), x(!!i || d), g(!!n || l);
                      const e = document.getElementById("js-todays-efforts");
                      e && e.focus();
                    },
                    className: "button button--secondary mt3 dib",
                    children: "Reveal",
                  }),
                ],
              }),
            });
          else {
            let e = (0, a.jsxs)("div", {
              className:
                "inline-flex items-center pt4 pb4 bb b--brand-primary-tint w-100",
              children: [
                (0, a.jsx)("div", {
                  className: "flex todays-effort-goal-robot pl2",
                  children:
                    v.oldWords <= y ? (0, a.jsx)(Ae.h, {}) : (0, a.jsx)(Oe, {}),
                }),
                (0, a.jsx)("div", {
                  className: "stat__number stat__number--display pl3 mr1",
                  children: y,
                }),
                (0, a.jsxs)("div", {
                  children: [
                    "Old ",
                    1 !== y ? "words" : "word",
                    (0, a.jsx)("br", {}),
                    (0, a.jsxs)("span", {
                      className: "text-small",
                      children: [
                        "Your goal:",
                        " ",
                        (0, a.jsx)(Me, {
                          userGoalsWords: v.oldWords,
                          todayWordCount: y,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
            (!p || Object.keys(p).length < 15) && (e = null),
              (w = (0, a.jsxs)(r.Fragment, {
                children: [
                  e,
                  (0, a.jsxs)("div", {
                    className:
                      "inline-flex items-center pt4 pb4 bb b--brand-primary-tint w-100",
                    children: [
                      (0, a.jsx)("div", {
                        className: "flex todays-effort-goal-robot pl2",
                        children:
                          v.newWords <= f
                            ? (0, a.jsx)(Ae.h, {})
                            : (0, a.jsx)(Oe, {}),
                      }),
                      (0, a.jsx)("div", {
                        className: "stat__number stat__number--display pl3 mr1",
                        children: f,
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          "New ",
                          1 !== f ? "words" : "word",
                          (0, a.jsx)("br", {}),
                          (0, a.jsxs)("span", {
                            className: "text-small",
                            children: [
                              "Your goal:",
                              (0, a.jsx)(Me, {
                                userGoalsWords: v.newWords,
                                todayWordCount: f,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "text-right",
                    children: (0, a.jsx)("button", {
                      id: "js-set-goals-button",
                      onClick: h,
                      className: "button button--secondary mt3 dib",
                      children: "Set goals",
                    }),
                  }),
                ],
              }));
          }
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("h3", {
                className: "mt0 mb0 pt5 pb1 bb b--brand-primary-tint",
                id: "js-todays-efforts",
                tabIndex: -1,
                children: "Today\u2019s efforts",
              }),
              w,
            ],
          });
        },
        Pe = (e) => {
          if (null === e || void 0 === e || !e.spacePlacement) return "not set";
          switch (e.spacePlacement) {
            case "spaceBeforeOutput":
              return "Space before output";
            case "spaceAfterOutput":
              return "Space after output";
            case "spaceOff":
              return "Ignore spaces";
            case "spaceExact":
              return "Exact spacing";
            default:
              return "not set";
          }
        };
      var Fe = s(8833),
        Ge = s(5792);
      const Ie = new Date().toDateString().replace(/ /g, "-").toLowerCase(),
        Le = (e) => `${e}${Ie}.json`,
        De = (e) => {
          let { metWords: t, userSettings: s } = e;
          const [n, l] = (0, r.useState)({}),
            i = (0, r.useMemo)(() => (0, Fe.A)(n), [n]),
            d = (0, r.useCallback)(() => {
              const e = s.spacePlacement;
              let r = (0, Ge.A)(t);
              "spaceBeforeOutput" === e
                ? (r = Object.fromEntries(
                    Object.entries(r).map((e) => {
                      let [t, s] = e;
                      return [" " + t, s];
                    }),
                  ))
                : "spaceAfterOutput" === e &&
                  (r = Object.fromEntries(
                    Object.entries(r).map((e) => {
                      let [t, s] = e;
                      return [t + " ", s];
                    }),
                  )),
                l(r),
                o.Ay.event({
                  category: "Downloads",
                  action: "Click",
                  label: "typey-type-reformatted-progress.json",
                });
            }, [t, s.spacePlacement]);
          return (0, a.jsxs)("p", {
            className: "bg-coolgrey-300 dark:bg-coolgrey-1000 pl1 pr1",
            children: [
              "If you\u2019ve changed your spacing settings, you can download a reformatted \u201cprogress file\u201d to match your new setting. After downloading it, if you're happy it looks good you can load it back into Typey Type. Then visit each lesson to update lesson progress. Your current spacing setting is:",
              " ",
              Pe(s),
              ".",
              " ",
              (0, a.jsx)("a", {
                href: i,
                download: Le("typey-type-reformatted-progress-"),
                onClick: d,
                children: "Download reformatted progress file",
              }),
            ],
          });
        },
        Re = (e) =>
          e > 0
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(c.N_, {
                    to: "/lessons/progress/memorised/",
                    children: [
                      "Drill\xa0",
                      e,
                      " memorised word",
                      1 === e ? "" : "s",
                    ],
                  }),
                  ".",
                  " ",
                ],
              })
            : null,
        Ye = (e) =>
          e > 0
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(c.N_, {
                    to: "/lessons/progress/seen/",
                    children: [
                      "Revise\xa0",
                      e,
                      " seen word",
                      1 === e ? "" : "s",
                    ],
                  }),
                  ".",
                  " ",
                ],
              })
            : null,
        _e = (e, t) => {
          var s, r;
          const o = {
              ...y.A.discover,
              ...(null !==
                (s =
                  null === (r = t.studyPresets) || void 0 === r
                    ? void 0
                    : r[0]) && void 0 !== s
                ? s
                : { limitNumberOfWords: 5, repetitions: 3 }),
            },
            n = (0, y.R)(o);
          return e < 1e4 && e > 0
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(c.N_, {
                    to:
                      "/lessons/drills/top-10000-project-gutenberg-words/?recommended=true&" +
                      n,
                    children: "Discover new words",
                  }),
                  ".",
                ],
              })
            : null;
        },
        Be = (e) => {
          let {
            userSettings: t,
            yourWordCount: s,
            yourSeenWordCount: o,
            yourMemorisedWordCount: n,
          } = e;
          return (0, a.jsx)(a.Fragment, {
            children: [
              (0, a.jsx)(
                r.Fragment,
                {
                  children:
                    ((l = o),
                    (i = n),
                    l > 1 && i > 0
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(c.N_, {
                              to: "/lessons/progress/",
                              children: "Practice\xa0your words",
                            }),
                            ".",
                            " ",
                          ],
                        })
                      : null),
                },
                "practice-all",
              ),
              (0, a.jsx)(r.Fragment, { children: Re(n) }, "drill-memorised"),
              (0, a.jsx)(r.Fragment, { children: Ye(o) }, "revise-seen"),
              (0, a.jsx)(r.Fragment, { children: _e(s, t) }, "discover-new"),
            ],
          });
          var l, i;
        };
      var Ue = s(9211);
      const ze = (e) => {
          let { yourWordCount: t } = e;
          return (
            (0, r.useEffect)(() => {
              o.Ay.event({
                category: "MemorisedTypeyType10000",
                action: "MemorisedTypeyType10000",
                label: "MemorisedTypeyType10000",
              });
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                "Woohoo! You rock! What a magnificent effort to memorise 10,000 words. You are an expert stenographer now! You\u2019ve successfully typed",
                " ",
                (0, Ue.GP)(",")(t),
                " words. It\u2019s time to",
                " ",
              ],
            })
          );
        },
        $e = (e) => {
          let { yourWordCount: t } = e;
          return (
            (0, r.useEffect)(() => {
              o.Ay.event({
                category: "CompletedTypeyType10000",
                action: "CompletedTypeyType10000",
                label: "CompletedTypeyType10000",
              });
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                "Woohoo! You rock! You\u2019ve successfully typed ",
                (0, Ue.GP)(",")(t),
                " ",
                "words. You are an accomplished stenographer now! You\u2019ve completed 100% of 10,000 words. It\u2019s time to",
                " ",
              ],
            })
          );
        },
        He = (e) => {
          let {
            restartConfetti: t,
            userSettings: s,
            yourWordCount: r,
            yourMemorisedWordCount: o,
            yourSeenWordCount: n,
          } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("p", {
                children: [
                  o >= 1e4
                    ? (0, a.jsx)(ze, { yourWordCount: r })
                    : (0, a.jsx)($e, { yourWordCount: r }),
                  (0, a.jsx)("button", {
                    className: "button-that-looks-like-a-link",
                    id: "celebrate-button",
                    onClick: t,
                    onKeyDown: t,
                    children: "celebrate!",
                  }),
                ],
              }),
              (0, a.jsx)("p", {
                children: (0, a.jsx)(Be, {
                  userSettings: s,
                  yourWordCount: r,
                  yourSeenWordCount: n,
                  yourMemorisedWordCount: o,
                }),
              }),
            ],
          });
        },
        Ve = (e) => {
          let {
            metWords: t,
            restartConfetti: s,
            userSettings: o,
            yourSeenWordCount: n,
            yourMemorisedWordCount: l,
          } = e;
          const i = (0, r.useMemo)(() => Object.keys(t).length || 0, [t]),
            d = (0, r.useMemo)(() => Math.round((i / 1e4) * 100) || 0, [i]),
            c = () =>
              (0, a.jsxs)("span", {
                children: [
                  "You\u2019ve successfully typed ",
                  i,
                  " ",
                  1 === i ? "word" : "words",
                  " without misstrokes.",
                  " ",
                ],
              }),
            m = (e) => {
              let { yourSeenWordCount: t } = e;
              return t > 1
                ? (0, a.jsx)("span", {
                    children: `You\u2019re ${d}% of the way to 10,000 words. `,
                  })
                : null;
            };
          return i >= 1e4
            ? (0, a.jsx)(He, {
                restartConfetti: s,
                userSettings: o,
                yourWordCount: i,
                yourMemorisedWordCount: l,
                yourSeenWordCount: n,
              })
            : (0, a.jsxs)("p", {
                children: [
                  (0, a.jsx)(c, {}),
                  (0, a.jsx)(m, { yourSeenWordCount: n }),
                  (0, a.jsx)(Be, {
                    userSettings: o,
                    yourWordCount: i,
                    yourSeenWordCount: n,
                    yourMemorisedWordCount: l,
                  }),
                ],
              });
        };
      const Ze =
        s.p + "static/media/Checkmark.ead2583cd96549ec6d98d8b1b49aa0d5.svg";
      const Xe =
        s.p + "static/media/TriangleRight.16ddddf6bca6186a40e26b524165beb7.svg";
      var Je = s(5135),
        Ke = s(861),
        qe = s(7057);
      const Qe = (e) => {
          let { lessonIndex: t, lessonsProgress: s } = e;
          function r(e) {
            return `text-${e}-600 progress-circle relative svg-baseline svg-icon-wrapper`;
          }
          function o(e) {
            return (0, a.jsxs)("div", {
              className: "dib",
              children: [
                (0, a.jsx)("div", {
                  "data-tooltip-id": e,
                  "data-tooltip-content": "Unstarted",
                  tabIndex: 0,
                  className: r("violet"),
                }),
                (0, a.jsx)(Ke.A, { id: e }),
              ],
            });
          }
          const n = t.map((e) => {
            let t,
              n = (0, qe.A)(e.path.slice(1).replace("/lesson.txt", "")),
              l = "",
              i = 0,
              d = 0;
            if (
              (e.subtitle && e.subtitle.length > 0 && (l = ": " + e.subtitle),
              e.wordCount && e.wordCount > 0 && (i = e.wordCount),
              s && s["/typey-type/lessons" + e.path])
            ) {
              var m, u, h;
              let l =
                  (null === (m = s["/typey-type/lessons" + e.path]) ||
                  void 0 === m
                    ? void 0
                    : m.numberOfWordsToDiscover) || 0,
                c =
                  (null === (u = s["/typey-type/lessons" + e.path]) ||
                  void 0 === u
                    ? void 0
                    : u.numberOfWordsSeen) || 0,
                f =
                  (null === (h = s["/typey-type/lessons" + e.path]) ||
                  void 0 === h
                    ? void 0
                    : h.numberOfWordsMemorised) || 0;
              (d = c + f),
                (i = c + f + l),
                d >= i || d > 100
                  ? (d >= i && (d = i),
                    (p = n),
                    (t = (0, a.jsxs)("div", {
                      className: "dib",
                      children: [
                        (0, a.jsx)("div", {
                          "data-tooltip-id": p,
                          "data-tooltip-content":
                            "100 words done or lesson complete",
                          tabIndex: 0,
                          className: r("green"),
                          children: (0, a.jsx)(Je.A, {
                            iconSVGImport: Ze,
                            width: "1em",
                            height: "1em",
                            style: { transform: "scale(0.6)" },
                          }),
                        }),
                        (0, a.jsx)(Ke.A, { id: p }),
                      ],
                    })))
                  : (t =
                      d > 0
                        ? (function (e) {
                            return (0, a.jsxs)("div", {
                              className: "dib",
                              children: [
                                (0, a.jsx)("div", {
                                  "data-tooltip-id": e,
                                  "data-tooltip-content": "In progress",
                                  tabIndex: 0,
                                  className: r("violet"),
                                  children: (0, a.jsx)(Je.A, {
                                    iconSVGImport: Xe,
                                    width: "1em",
                                    height: "1em",
                                    style: {
                                      transform:
                                        "translateX(0.025em) scale(0.6)",
                                    },
                                  }),
                                }),
                                (0, a.jsx)(Ke.A, { id: e }),
                              ],
                            });
                          })(n)
                        : o(n));
            } else t = o(n);
            var p;
            return "Fundamentals" === e.category ||
              ("Drills" === e.category && e.title.startsWith("Top 100")) ||
              ("Drills" === e.category && e.title.startsWith("Top 200"))
              ? (0, a.jsxs)(
                  "li",
                  {
                    className: "unstyled-list-item mb1",
                    children: [
                      t,
                      " ",
                      (0, a.jsxs)(c.N_, {
                        to: `/lessons${e.path}`
                          .replace(/lesson\.txt$/, "")
                          .replace(/\/{2,}/g, "/"),
                        id:
                          "ga--lesson-index-" +
                          e.path
                            .replace(/\/lesson\.txt/g, "")
                            .replace(/[/.]/g, "-"),
                        children: [e.title, l],
                      }),
                      " ",
                      "\xb7",
                      " ",
                      (0, a.jsxs)("small", { children: [d, " of ", i] }),
                    ],
                  },
                  e.path,
                )
              : "";
          });
          return (0, a.jsx)(a.Fragment, { children: n });
        },
        et = (e) => {
          let { metWords: t } = e;
          return (0, a.jsx)("a", {
            href: (0, Fe.A)(t),
            download: Le("typey-type-progress-"),
            onClick: () => {
              o.Ay.event({
                category: "Downloads",
                action: "Click",
                label: "typey-type-progress.json",
              });
            },
            className: "link-button link-button-ghost table-cell mr1",
            children: "Download progress file",
          });
        };
      var tt = s(7532),
        st = s(3939),
        rt = s.n(st);
      const ot = (e) => {
        let { isOpen: t, handleCloseModal: s } = e;
        return (
          (0, r.useEffect)(() => {
            rt().setAppElement("#js-app");
          }, []),
          (0, a.jsxs)(rt(), {
            isOpen: t,
            aria: {
              labelledby: "aria-modal-heading",
              describedby: "aria-modal-description",
            },
            ariaHideApp: !0,
            closeTimeoutMS: 300,
            role: "dialog",
            onRequestClose: s,
            className: {
              base: "modal",
              afterOpen: "modal--after-open",
              beforeClose: "modal--before-close",
            },
            overlayClassName: {
              base: "modal__overlay",
              afterOpen: "modal__overlay--after-open",
              beforeClose: "modal__overlay--before-close",
            },
            children: [
              (0, a.jsx)("h3", {
                id: "aria-modal-heading",
                children: "Back up your progress",
              }),
              (0, a.jsxs)("p", {
                children: [
                  "Typey Type saves your typing progress in your browser\u2019s local storage.",
                  " ",
                  (0, a.jsx)("span", {
                    className: "bg-danger dark:text-coolgrey-900",
                    children:
                      "You\u2019ll lose your progress if you clear your browsing data (history, cookies, and cache).",
                  }),
                  " ",
                  "If you share this device with other people or use Typey Type across several devices and browsers, you should save your progress elsewhere.",
                ],
              }),
              (0, a.jsx)("h3", { children: "Save progress" }),
              (0, a.jsx)("p", { children: "You can:" }),
              (0, a.jsxs)("ul", {
                children: [
                  (0, a.jsx)("li", {
                    children:
                      "Copy your progress to your clipboard and save it in a text file somewhere safe, or",
                  }),
                  (0, a.jsx)("li", {
                    children:
                      "Hit \u201cDownload progress file\u201d to save your progress as a JSON file.",
                  }),
                ],
              }),
              (0, a.jsx)("h3", { children: "Load progress" }),
              (0, a.jsxs)("p", {
                children: [
                  "When you return, hit \u201cLoad progress\u201d and enter your progress to load it back into Typey Type. You can also clear your progress by loading in empty curly braces, ",
                  (0, a.jsx)("code", { children: "{}" }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "text-right",
                children: (0, a.jsx)("button", {
                  className: "button",
                  onClick: s,
                  children: "OK",
                }),
              }),
            ],
          })
        );
      };
      var nt = s(2823),
        lt = s(3187),
        it = s(8278);
      const at = () => {
        const e = (0, h.md)(lt.Jl),
          t = (0, it.GE)(),
          [s, o] = (0, r.useState)(!1);
        return null !== e && Date.now() < e + 6048e5
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "notification notification--global  w-100 flex wrap justify-between pa1 p1 p3 pa3 mb3 items-center bg-danger dark:text-coolgrey-900",
                  children: [
                    (0, a.jsx)("div", {
                      className: "notification__message",
                      children: (0, a.jsxs)("p", {
                        className: "mb0",
                        children: [
                          (0, a.jsx)("strong", {
                            children: "Back up your progress regularly:",
                          }),
                          " Your progress data is saved in your browser. You\u2019ll lose your progress if you clear your browsing data (history, cookies, and cache).",
                          " ",
                          (0, a.jsx)("button", {
                            className: "de-emphasized-button",
                            onClick: () => o(!0),
                            children: "Learn more",
                          }),
                          ".",
                        ],
                      }),
                    }),
                    (0, a.jsx)("button", {
                      className:
                        "de-emphasized-button flex items-center justify-center p1",
                      "aria-label": "Dismiss notification",
                      onClick: t,
                      children: (0, a.jsx)(Je.A, {
                        iconSVGImport: nt.A,
                        width: "1em",
                        height: "1em",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(ot, { isOpen: s, handleCloseModal: () => o(!1) }),
              ],
            });
      };
      var dt = s(4457),
        ct = s(8282);
      const mt = (0, b.tG)("userGoals", { newWords: 15, oldWords: 50 }),
        ut = (0, w.eU)(!1),
        ht = (0, w.eU)(!1);
      let pt = [];
      const ft = (e) => {
        const {
            setPersonalPreferences: t,
            updateStartingMetWordsAndCounts: s,
          } = (0, dt.$W)(),
          i = (0, h.md)(lt.tq),
          d = (0, h.md)(ct.sj),
          m = (0, f.W)(),
          u = (0, F.V3)(),
          [p, y] = (0, h.fp)(mt),
          [x, g] = (0, h.fp)(ut),
          [b, j] = (0, h.fp)(ht),
          v = (0, r.useRef)(null),
          w = (0, r.useRef)(null),
          k = (0, r.useRef)(!0),
          [N] = (0, r.useState)(Math.floor(window.innerWidth)),
          [W] = (0, r.useState)(Math.floor(window.innerHeight)),
          [S, M] = (0, r.useState)(""),
          [E, P] = (0, r.useState)(!1),
          [I, L] = (0, r.useState)(!1),
          [D, R] = (0, r.useState)(0),
          [Y, _] = (0, r.useState)(0),
          [B, U] = (0, r.useState)(!1),
          [z, $] = (0, r.useState)(!1),
          [H, V] = (0, r.useState)(50),
          [Z, X] = (0, r.useState)(15),
          [J, K] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          var t;
          v && (null === (t = v.current) || void 0 === t || t.focus());
          try {
            u();
          } catch (l) {
            console.error(l);
          }
          const [s, r] = Object.entries(e.metWords).reduce(
              (t, s) => {
                let [r, o] = s;
                return (
                  e.startingMetWordsToday[r] &&
                  o - e.startingMetWordsToday[r] > 0
                    ? (t[0] += 1)
                    : !e.startingMetWordsToday[r] && o > 0 && (t[1] += 1),
                  t
                );
              },
              [0, 0],
            ),
            o = p.oldWords <= s || B,
            n = p.newWords <= r || z;
          U(o), $(n), R(r), _(s);
        }, []),
          (0, r.useEffect)(() => {
            if (k.current) k.current = !1;
            else if (I) {
              const e = document.getElementById(
                "js-first-interactive-form-field-element",
              );
              e && e.focus();
            } else if (!I) {
              const e = document.getElementById("js-set-goals-button");
              e && e.focus();
            }
          }, [I]),
          (0, r.useEffect)(() => {
            if (E) {
              const e = document.getElementById(
                "js-metwords-from-personal-store--small",
              );
              e && e.focus();
            }
          }, [E]);
        const q = E
          ? (0, a.jsxs)(r.Fragment, {
              children: [
                (0, a.jsx)("label", {
                  htmlFor: "js-metwords-from-personal-store--small",
                  className: "inline-block mb05 visually-hidden",
                  children: "Enter your progress here:",
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-wrap",
                  style: { rowGap: "16px" },
                  children: [
                    (0, a.jsx)("textarea", {
                      id: "js-metwords-from-personal-store--small",
                      className:
                        "js-metwords-from-personal-store progress-textarea bg-info dark:text-coolgrey-900 px1 py05 bw-1 b--solid br-4 db w-100 mr1",
                      autoCapitalize: "off",
                      autoComplete: "off",
                      autoCorrect: "off",
                      spellCheck: !1,
                      style: { maxWidth: "200px", maxHeight: "40px" },
                      rows: 1,
                    }),
                    (0, a.jsx)(l.A, {
                      className: "link-button load-progress mr2",
                      onClick: function () {
                        const e = document.querySelectorAll(
                            ".js-metwords-from-personal-store",
                          ),
                          r = e.length > 1 ? e[1] : e[0];
                        t(r.value),
                          M(
                            "To update your lesson progress, visit the lessons.",
                          );
                        let n = "0";
                        try {
                          const e = JSON.parse(r.value);
                          (n = Object.keys(e).length.toString()),
                            s(e),
                            g(!1),
                            j(!1),
                            _(0),
                            R(0),
                            U(!1),
                            $(!1);
                        } catch (l) {
                          n = "BAD_PROGRESS_INPUT";
                        }
                        ("" !== r.value && " " !== r.value) ||
                          (n = "EMPTY_PROGRESS_INPUT"),
                          o.Ay.event({
                            category: "Progress",
                            action: "Update progress",
                            label: "Load met words: " + n,
                          });
                      }.bind(void 0),
                      "aria-label": "Load progress from text",
                      children: "Load progress",
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsx)("button", {
              onClick: function () {
                P(!0);
              }.bind(void 0),
              className: "button button--secondary mr2",
              "aria-label": "Show progress loading form",
              children: "Load progress",
            });
        return (0, a.jsx)("div", {
          children: (0, a.jsxs)("main", {
            id: "main",
            children: [
              (0, a.jsxs)(tt.A, {
                id: "js-page-confetti-target",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex mr1 self-center",
                    children: (0, a.jsx)("header", {
                      className: "flex items-center min-h-40",
                      children: (0, a.jsx)("h2", {
                        id: "progress",
                        ref: v,
                        tabIndex: -1,
                        children: "Progress",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "flex mxn2",
                    children: (0, a.jsx)(et, { metWords: e.metWords }),
                  }),
                ],
              }),
              (0, a.jsx)("canvas", {
                ref: w,
                width: N,
                height: W,
                className: "fixed celebration-canvas top-0 left-0 pointer-none",
              }),
              (0, a.jsx)(G, {
                showOnSmallScreen: !0,
                flashcardsCourseLevel: i.flashcardsCourseLevel,
                skipButtonId: "js-mobile-flashcards-skip-button",
                updateFlashcardsRecommendation: u,
              }),
              (0, a.jsxs)("div", {
                className: "p3 mx-auto mw-1024 mt3",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-wrap justify-between",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "mb0",
                        children: "Your progress",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-wrap mb3",
                        style: { columnGap: "16px", rowGap: "16px" },
                        children: [
                          (0, a.jsx)("button", {
                            className: "de-emphasized-button",
                            style: { textDecorationLine: "none" },
                            onClick: () => K(!0),
                            children: "Learn more",
                          }),
                          (0, a.jsx)(ot, {
                            isOpen: J,
                            handleCloseModal: () => K(!1),
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-wrap",
                            style: { rowGap: "16px" },
                            children: [
                              (0, a.jsx)("div", {
                                className: "flex",
                                children: q,
                              }),
                              (0, a.jsx)(l.A, {
                                className:
                                  "js-clipboard-button link-button copy-to-clipboard",
                                dataClipboardTarget:
                                  "#js-metwords-from-typey-type",
                                "aria-label": "Copy progress to clipboard",
                                children: "Copy progress",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(at, {}),
                  (0, a.jsx)(Ve, {
                    metWords: e.metWords,
                    restartConfetti: function (e) {
                      e &&
                        ((e.keyCode && 13 === e.keyCode) ||
                          "click" === e.type) &&
                        (pt.splice(0),
                        A.px(),
                        A.O5(
                          {
                            sparsity: 60,
                            colors: 5,
                            positioningRandomness: 600,
                          },
                          "js-page-confetti-target",
                          pt,
                        ),
                        A.eV(pt, w.current, N, W));
                    }.bind(void 0),
                    yourMemorisedWordCount: e.yourMemorisedWordCount,
                    yourSeenWordCount: e.yourSeenWordCount,
                    userSettings: d,
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-wrap justify-between pt3",
                    children: [
                      (0, a.jsx)("div", {
                        className: "mw-568 mr3 flex-grow nt-1",
                        children: (0, a.jsx)(n.A, {
                          relative: !0,
                          children: (0, a.jsx)(r.Suspense, {
                            fallback: (0, a.jsx)(C, {}),
                            children: (0, a.jsx)(T, {
                              lessonsProgress: e.lessonsProgress,
                              yourSeenWordCount: e.yourSeenWordCount,
                              yourMemorisedWordCount: e.yourMemorisedWordCount,
                              metWords: e.metWords,
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "mw-368 flex-grow",
                        id: "js-confetti-target",
                        children: (0, a.jsx)(Ee, {
                          cancelSetGoals: function (e) {
                            e.preventDefault(),
                              o.Ay.event({
                                category: "Progress",
                                action: "Cancel set goals",
                                label: "true",
                              }),
                              L(!1);
                          }.bind(void 0),
                          handleNewWordsGoalInputChange: function (e) {
                            return (
                              X(e),
                              o.Ay.event({
                                category: "Progress",
                                action: "Change new words goal",
                                label: e || "BAD_INPUT",
                              }),
                              e
                            );
                          }.bind(void 0),
                          handleOldWordsGoalInputChange: function (e) {
                            return (
                              V(e),
                              o.Ay.event({
                                category: "Progress",
                                action: "Change old words goal",
                                label: e || "BAD_INPUT",
                              }),
                              e
                            );
                          }.bind(void 0),
                          newWordsGoalMet: z,
                          newWordsGoalUnveiled: b,
                          oldWordsGoalMet: B,
                          oldWordsGoalUnveiled: x,
                          celebrateCompletedGoals: function (e, t) {
                            e && t
                              ? A.O5(
                                  { sparsity: 240, colors: 5 },
                                  "js-confetti-target",
                                  pt,
                                )
                              : A.O5(
                                  { sparsity: 960, colors: 2 },
                                  "js-confetti-target",
                                  pt,
                                ),
                              A.eV(pt, w.current, N, W);
                          }.bind(void 0),
                          saveGoals: function (e) {
                            e.preventDefault(),
                              o.Ay.event({
                                category: "Progress",
                                action: "Save goals",
                                label: "true",
                              });
                            const t = Z,
                              s = H,
                              r = { newWords: t, oldWords: s };
                            (isNaN(s) || null === s) &&
                              (r.oldWords = p.oldWords || 1),
                              (isNaN(t) || null === t) &&
                                (r.newWords = p.newWords || 1);
                            const n = !(s > p.oldWords) && x,
                              l = !(t > p.newWords) && b;
                            g(n), j(l);
                            const i = !(Y < r.oldWords) && B,
                              a = !(D < r.newWords) && z;
                            y(r), U(i), $(a), L(!1);
                          }.bind(void 0),
                          showSetGoalsForm: I,
                          showSetGoalsFormFn: function () {
                            o.Ay.event({
                              category: "Progress",
                              action: "Show set goals form",
                              label: "true",
                            }),
                              L(!0),
                              V(p.oldWords),
                              X(p.newWords);
                          }.bind(void 0),
                          startingMetWordsToday: e.startingMetWordsToday,
                          todayNewWordCount: D,
                          todayOldWordCount: Y,
                          unveilOldWordsGoal: g,
                          unveilNewWordsGoal: j,
                          userGoalInputOldWords: H,
                          userGoalInputNewWords: Z,
                          userGoals: p,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: S.length > 0 ? "bg-warning pl1 pr1" : "hide",
                    "aria-live": "polite",
                    children: S,
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-wrap justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "mw-368 flex-grow order-1",
                        children: [
                          (0, a.jsx)(n.A, {
                            relative: !0,
                            children: (0, a.jsx)(O, { lessonIndex: m }),
                          }),
                          (0, a.jsx)(G, {
                            showOnSmallScreen: !1,
                            flashcardsCourseLevel: i.flashcardsCourseLevel,
                            skipButtonId: "js-flashcards-skip-button",
                            updateFlashcardsRecommendation: u,
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "mw-568",
                        children: [
                          (0, a.jsx)("h3", { children: "Lessons progress" }),
                          (0, a.jsx)("ul", {
                            className: "unstyled-list",
                            children: (0, a.jsx)(Qe, {
                              lessonIndex: m,
                              lessonsProgress: e.lessonsProgress,
                            }),
                          }),
                          (0, a.jsxs)("p", {
                            children: [
                              "There are more ",
                              (0, a.jsx)(c.N_, {
                                to: "/lessons",
                                children: "Lessons",
                              }),
                              ", including lessons with sentences.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("h3", {
                    id: "vocabulary-progress",
                    children: "Vocabulary progress",
                  }),
                  (0, a.jsx)(De, { metWords: e.metWords, userSettings: d }),
                  (0, a.jsx)("p", {
                    children:
                      "Words you\u2019ve seen and times you\u2019ve typed them well:",
                  }),
                  (0, a.jsx)("p", {
                    id: "js-metwords-from-typey-type",
                    className:
                      "w-100 mt3 mb3 quote break-words whitespace-break-spaces",
                    children: (0, a.jsx)("small", {
                      children: JSON.stringify(e.metWords),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    9211: (e, t, s) => {
      s.d(t, { GP: () => m, s: () => u });
      var r = s(916);
      var o = s(962);
      var n,
        l = s(7109);
      function i(e, t) {
        var s = (0, l.f)(e, t);
        if (!s) return e + "";
        var r = s[0],
          o = s[1];
        return o < 0
          ? "0." + new Array(-o).join("0") + r
          : r.length > o + 1
            ? r.slice(0, o + 1) + "." + r.slice(o + 1)
            : r + new Array(o - r.length + 2).join("0");
      }
      const a = {
        "%": (e, t) => (100 * e).toFixed(t),
        b: (e) => Math.round(e).toString(2),
        c: (e) => e + "",
        d: l.A,
        e: (e, t) => e.toExponential(t),
        f: (e, t) => e.toFixed(t),
        g: (e, t) => e.toPrecision(t),
        o: (e) => Math.round(e).toString(8),
        p: (e, t) => i(100 * e, t),
        r: i,
        s: function (e, t) {
          var s = (0, l.f)(e, t);
          if (!s) return e + "";
          var r = s[0],
            o = s[1],
            i = o - (n = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = r.length;
          return i === a
            ? r
            : i > a
              ? r + new Array(i - a + 1).join("0")
              : i > 0
                ? r.slice(0, i) + "." + r.slice(i)
                : "0." +
                  new Array(1 - i).join("0") +
                  (0, l.f)(e, Math.max(0, t + i - 1))[0];
        },
        X: (e) => Math.round(e).toString(16).toUpperCase(),
        x: (e) => Math.round(e).toString(16),
      };
      function d(e) {
        return e;
      }
      var c,
        m,
        u,
        h = Array.prototype.map,
        p = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function f(e) {
        var t,
          s,
          l =
            void 0 === e.grouping || void 0 === e.thousands
              ? d
              : ((t = h.call(e.grouping, Number)),
                (s = e.thousands + ""),
                function (e, r) {
                  for (
                    var o = e.length, n = [], l = 0, i = t[0], a = 0;
                    o > 0 &&
                    i > 0 &&
                    (a + i + 1 > r && (i = Math.max(1, r - a)),
                    n.push(e.substring((o -= i), o + i)),
                    !((a += i + 1) > r));

                  )
                    i = t[(l = (l + 1) % t.length)];
                  return n.reverse().join(s);
                }),
          i = void 0 === e.currency ? "" : e.currency[0] + "",
          c = void 0 === e.currency ? "" : e.currency[1] + "",
          m = void 0 === e.decimal ? "." : e.decimal + "",
          u =
            void 0 === e.numerals
              ? d
              : (function (e) {
                  return function (t) {
                    return t.replace(/[0-9]/g, function (t) {
                      return e[+t];
                    });
                  };
                })(h.call(e.numerals, String)),
          f = void 0 === e.percent ? "%" : e.percent + "",
          y = void 0 === e.minus ? "\u2212" : e.minus + "",
          x = void 0 === e.nan ? "NaN" : e.nan + "";
        function g(e) {
          var t = (e = (0, o.A)(e)).fill,
            s = e.align,
            r = e.sign,
            d = e.symbol,
            h = e.zero,
            g = e.width,
            b = e.comma,
            j = e.precision,
            v = e.trim,
            w = e.type;
          "n" === w
            ? ((b = !0), (w = "g"))
            : a[w] || (void 0 === j && (j = 12), (v = !0), (w = "g")),
            (h || ("0" === t && "=" === s)) && ((h = !0), (t = "0"), (s = "="));
          var k =
              "$" === d
                ? i
                : "#" === d && /[boxX]/.test(w)
                  ? "0" + w.toLowerCase()
                  : "",
            N = "$" === d ? c : /[%p]/.test(w) ? f : "",
            W = a[w],
            C = /[defgprs%]/.test(w);
          function T(e) {
            var o,
              i,
              a,
              d = k,
              c = N;
            if ("c" === w) (c = W(e) + c), (e = "");
            else {
              var f = (e = +e) < 0 || 1 / e < 0;
              if (
                ((e = isNaN(e) ? x : W(Math.abs(e), j)),
                v &&
                  (e = (function (e) {
                    e: for (var t, s = e.length, r = 1, o = -1; r < s; ++r)
                      switch (e[r]) {
                        case ".":
                          o = t = r;
                          break;
                        case "0":
                          0 === o && (o = r), (t = r);
                          break;
                        default:
                          if (!+e[r]) break e;
                          o > 0 && (o = 0);
                      }
                    return o > 0 ? e.slice(0, o) + e.slice(t + 1) : e;
                  })(e)),
                f && 0 === +e && "+" !== r && (f = !1),
                (d =
                  (f ? ("(" === r ? r : y) : "-" === r || "(" === r ? "" : r) +
                  d),
                (c =
                  ("s" === w ? p[8 + n / 3] : "") +
                  c +
                  (f && "(" === r ? ")" : "")),
                C)
              )
                for (o = -1, i = e.length; ++o < i; )
                  if (48 > (a = e.charCodeAt(o)) || a > 57) {
                    (c = (46 === a ? m + e.slice(o + 1) : e.slice(o)) + c),
                      (e = e.slice(0, o));
                    break;
                  }
            }
            b && !h && (e = l(e, 1 / 0));
            var T = d.length + e.length + c.length,
              S = T < g ? new Array(g - T + 1).join(t) : "";
            switch (
              (b &&
                h &&
                ((e = l(S + e, S.length ? g - c.length : 1 / 0)), (S = "")),
              s)
            ) {
              case "<":
                e = d + e + c + S;
                break;
              case "=":
                e = d + S + e + c;
                break;
              case "^":
                e = S.slice(0, (T = S.length >> 1)) + d + e + c + S.slice(T);
                break;
              default:
                e = S + d + e + c;
            }
            return u(e);
          }
          return (
            (j =
              void 0 === j
                ? 6
                : /[gprs]/.test(w)
                  ? Math.max(1, Math.min(21, j))
                  : Math.max(0, Math.min(20, j))),
            (T.toString = function () {
              return e + "";
            }),
            T
          );
        }
        return {
          format: g,
          formatPrefix: function (e, t) {
            var s = g((((e = (0, o.A)(e)).type = "f"), e)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor((0, r.A)(t) / 3))),
              l = Math.pow(10, -n),
              i = p[8 + n / 3];
            return function (e) {
              return s(l * e) + i;
            };
          },
        };
      }
      (c = f({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (m = c.format),
        (u = c.formatPrefix);
    },
    916: (e, t, s) => {
      s.d(t, { A: () => o });
      var r = s(7109);
      function o(e) {
        return (e = (0, r.f)(Math.abs(e))) ? e[1] : NaN;
      }
    },
    7109: (e, t, s) => {
      function r(e) {
        return Math.abs((e = Math.round(e))) >= 1e21
          ? e.toLocaleString("en").replace(/,/g, "")
          : e.toString(10);
      }
      function o(e, t) {
        if (
          (s = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf(
            "e",
          )) < 0
        )
          return null;
        var s,
          r = e.slice(0, s);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(s + 1)];
      }
      s.d(t, { A: () => r, f: () => o });
    },
    962: (e, t, s) => {
      s.d(t, { A: () => o });
      var r =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function o(e) {
        if (!(t = r.exec(e))) throw new Error("invalid format: " + e);
        var t;
        return new n({
          fill: t[1],
          align: t[2],
          sign: t[3],
          symbol: t[4],
          zero: t[5],
          width: t[6],
          comma: t[7],
          precision: t[8] && t[8].slice(1),
          trim: t[9],
          type: t[10],
        });
      }
      function n(e) {
        (this.fill = void 0 === e.fill ? " " : e.fill + ""),
          (this.align = void 0 === e.align ? ">" : e.align + ""),
          (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
          (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
          (this.zero = !!e.zero),
          (this.width = void 0 === e.width ? void 0 : +e.width),
          (this.comma = !!e.comma),
          (this.precision = void 0 === e.precision ? void 0 : +e.precision),
          (this.trim = !!e.trim),
          (this.type = void 0 === e.type ? "" : e.type + "");
      }
      (o.prototype = n.prototype),
        (n.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision
              ? ""
              : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        });
    },
  },
]);
//# sourceMappingURL=993.39f61626.chunk.js.map
