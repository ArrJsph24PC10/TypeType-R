"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [835],
  {
    1835: (e, s, t) => {
      t.r(s), t.d(s, { default: () => w });
      var i = t(2483),
        n = t(3391),
        o = t(514),
        r = t.n(o),
        a = t(5350),
        l = t(5029),
        c = t(4480),
        d = t(7532),
        h = t(2976),
        p = t(7468),
        u = t(6723);
      const y = (e) => {
        let {
          fetchAndSetupGlobalDict: s,
          globalLookupDictionary: t,
          globalLookupDictionaryLoaded: n,
          personalDictionaries: o,
          userSettings: r,
        } = e;
        const y = (0, h.md)(p.e),
          g = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          var e;
          g && (null === (e = g.current) || void 0 === e || e.focus());
        }, []);
        const m = y.map((e) => {
          const s = e.author && e.author.length > 0 ? e.author : "Typey Type",
            t = e.subtitle && e.subtitle.length > 0 ? ": " + e.subtitle : "",
            i = e.path.replace(/lesson.txt/, "lesson/").replace(/.json/, "/");
          return (0, u.jsx)(
            "li",
            {
              className: "unstyled-list-item mb1",
              children: (0, u.jsxs)(a.N_, {
                to: `${i}`.replace(/path\.txt$/, "").replace(/\/{2,}/g, "/"),
                id: "ga--dictionary-index-" + i.replace(/[/.]/g, "-"),
                children: [s, "\u2019s ", e.title, t],
              }),
            },
            e.path,
          );
        });
        return (0, u.jsxs)("main", {
          id: "main",
          children: [
            (0, u.jsx)(d.A, {
              children: (0, u.jsx)("div", {
                className: "flex mr1 self-center",
                children: (0, u.jsx)("header", {
                  className: "flex items-center min-h-40",
                  children: (0, u.jsx)("h2", {
                    ref: g,
                    tabIndex: -1,
                    children: "Dictionaries",
                  }),
                }),
              }),
            }),
            (0, u.jsx)("div", {
              className: "p3 mx-auto mw-1024",
              children: (0, u.jsxs)("div", {
                className: "flex flex-wrap justify-between",
                children: [
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsxs)("div", {
                        className: "mw-584",
                        children: [
                          (0, u.jsx)("h3", {
                            id: "typey-type-dictionary",
                            children: "Typey\xa0Type dictionary",
                          }),
                          (0, u.jsxs)("p", {
                            children: [
                              (0, u.jsx)(a.N_, {
                                to: "/dictionaries/typey-type/typey-type/",
                                children: "Typey\xa0Type\u2019s dictionary",
                              }),
                              " ",
                              "removes many misstrokes and mimics the",
                              " ",
                              (0, u.jsx)("strong", {
                                children: "Plover version 4 dictionary",
                              }),
                              ".",
                            ],
                          }),
                          (0, u.jsxs)("p", {
                            children: [
                              "You can use Plover\u2019s dictionary or you can use use Di\u2019s dictionaries that power Typey Type\u2019s stroke suggestions from",
                              " ",
                              (0, u.jsx)(l.A, {
                                eventLabel: "Di\u2019s Steno Dictionaries repo",
                                newTabAndIUnderstandTheAccessibilityImplications:
                                  !0,
                                to: "https://github.com/didoesdigital/steno-dictionaries",
                                children:
                                  "Di\u2019s Steno Dictionaries repo (opens in new tab)",
                              }),
                              ".",
                            ],
                          }),
                          (0, u.jsx)("h4", { children: "Stroke hints" }),
                          (0, u.jsxs)("p", {
                            children: [
                              "Typey\xa0Type\u2019s stroke hints look for the shortest briefs with penalties for briefs using multiple strokes, the star (",
                              (0, u.jsx)("code", { children: "*" }),
                              ") key, and non-standard prefix or suffix strokes.",
                            ],
                          }),
                          (0, u.jsx)("h4", {
                            children: "British English spelling",
                          }),
                          (0, u.jsxs)("p", {
                            children: [
                              "The",
                              " ",
                              (0, u.jsx)(a.N_, {
                                to: "/lessons/drills/top-10000-project-gutenberg-words/",
                                children:
                                  "Top 10000 Project Gutenberg words lesson",
                              }),
                              " ",
                              "and stories lessons like Aesop\u2019s Fables use British English spellings for words such as \u201cneighbour\u201d. For these you can use the",
                              " ",
                              (0, u.jsx)(a.N_, {
                                to: "/dictionaries/didoesdigital/dict-en-AU-with-extra-stroke/",
                                children:
                                  "Australian English with extra strokes",
                              }),
                              " ",
                              "dictionary. Typey\xa0Type\u2019s dictionary uses these entries when Plover has no entry for a word. Otherwise, you can fingerspell.",
                            ],
                          }),
                          (0, u.jsx)("h4", { children: "Corrections" }),
                          (0, u.jsxs)("p", {
                            children: [
                              "If you notice any odd strokes,",
                              " ",
                              (0, u.jsx)(l.A, {
                                eventLabel: "post to the feedback form",
                                newTabAndIUnderstandTheAccessibilityImplications:
                                  !0,
                                to: "https://docs.google.com/forms/d/e/1FAIpQLSeevsX2oYEvnDHd3y8weg5_7-T8QZsF93ElAo28JO9Tmog-7Q/viewform?usp=sf_link",
                                children:
                                  "use the feedback form to let Di know (opens in new tab)",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                      (0, u.jsxs)("div", {
                        className: "mw-584",
                        children: [
                          (0, u.jsx)("h3", { children: "Useful dictionaries" }),
                          (0, u.jsx)("ul", {
                            className: "unstyled-list",
                            children: m,
                          }),
                          (0, u.jsxs)("p", {
                            children: [
                              "Want to add another dictionary to this list?",
                              " ",
                              (0, u.jsx)(l.A, {
                                eventLabel:
                                  "Typey Type for Stenographers dictionary feedback form",
                                newTabAndIUnderstandTheAccessibilityImplications:
                                  !0,
                                to: "https://docs.google.com/spreadsheets/d/1w-9GciR8D7sWuLVxw9ATstF1tcyCjCe7UtIn7l80cXk/edit?usp=sharing",
                                children:
                                  "Share your dictionary (opens in a new tab)",
                              }),
                              ".",
                            ],
                          }),
                          (0, u.jsxs)("p", {
                            children: [
                              "For lesson-specific dictionaries, you can now \u201cDownload lesson hints as a dictionary\u201d from individual lesson pages. For example, see the bottom of the",
                              " ",
                              (0, u.jsx)(a.N_, {
                                to: "/lessons/drills/top-10000-project-gutenberg-words/",
                                children:
                                  "Top 10000 Project Gutenberg words lesson",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    className: "mt1 mw-336 flex-grow",
                    children: [
                      (0, u.jsx)("h3", {
                        className: "mt3",
                        children: "Custom dictionaries",
                      }),
                      (0, u.jsxs)("p", {
                        children: [
                          "To see your own stroke hints in lessons,",
                          " ",
                          (0, u.jsx)(a.N_, {
                            to: "/dictionaries/management",
                            children: "add your dictionaries",
                          }),
                          ".",
                        ],
                      }),
                      (0, u.jsx)("p", {
                        children: (0, u.jsx)(a.N_, {
                          to: "/dictionaries/management",
                          className: "link-button dib mt1",
                          style: { lineHeight: 2 },
                          id: "ga--dictionaries-index--add-dictionaries",
                          children: "Add your dictionaries",
                        }),
                      }),
                      (0, u.jsx)("h4", { children: "Use custom lessons" }),
                      (0, u.jsxs)("p", {
                        children: [
                          "To use a different dictionary or steno theory, upload your words and strokes to a ",
                          (0, u.jsx)(a.N_, {
                            to: "/lessons/custom",
                            children: "custom lesson",
                          }),
                          ". The briefs shown will match whatever strokes you provide.",
                        ],
                      }),
                      (0, u.jsx)("h4", { children: "Share your dictionaries" }),
                      (0, u.jsxs)("p", {
                        children: [
                          "To help the open steno community and Typey\xa0Type grow even faster, add your custom dictionaries to the",
                          " ",
                          (0, u.jsx)(l.A, {
                            eventLabel: "community\u2019s dictionaries",
                            newTabAndIUnderstandTheAccessibilityImplications:
                              !0,
                            to: "https://docs.google.com/spreadsheets/d/1w-9GciR8D7sWuLVxw9ATstF1tcyCjCe7UtIn7l80cXk/edit?usp=sharing",
                            children:
                              "community\u2019s dictionaries (opens in new tab)",
                          }),
                          ".",
                        ],
                      }),
                      (0, u.jsx)(c.A, {
                        fetchAndSetupGlobalDict: s,
                        globalLookupDictionary: t,
                        globalLookupDictionaryLoaded: n,
                        personalDictionaries: o,
                        userSettings: r,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var g = t(6975),
        m = t(4457),
        x = t(8282),
        b = t(8278);
      const j = r()({
          loader: () => t.e(304).then(t.bind(t, 8304)),
          loading: g.A,
          delay: 300,
        }),
        f = r()({
          loader: () => t.e(647).then(t.bind(t, 647)),
          loading: g.A,
          delay: 300,
        }),
        w = (e) => {
          var s;
          let {
            globalLookupDictionaryLoaded: t,
            globalLookupDictionary: o,
            personalDictionaries: r,
            ...a
          } = e;
          const l = (0, h.md)(x.sj),
            { updatePersonalDictionaries: c, appFetchAndSetupGlobalDict: d } =
              (0, m.$W)(),
            p = (0, b.J1)(),
            w = (0, n.W5)({ path: "/dictionaries", strict: !0, sensitive: !0 }),
            v =
              null !== (s = null === w || void 0 === w ? void 0 : w.url) &&
              void 0 !== s
                ? s
                : "";
          return (0, u.jsx)("div", {
            children: (0, u.jsxs)(n.dO, {
              children: [
                (0, u.jsx)(n.qh, {
                  path: [
                    `${v}/lessons/:category/:subcategory/:dictionaryPath`,
                    `${v}/lessons/fundamentals/:dictionaryPath`,
                    `${v}/lessons/drills/:dictionaryPath`,
                    `${v}/typey-type/:dictionaryPath`,
                    `${v}/individual/:dictionaryPath`,
                    `${v}/didoesdigital/:dictionaryPath`,
                    `${v}/plover/:dictionaryPath`,
                  ],
                  children: (0, u.jsx)(i.Suspense, {
                    fallback: (0, u.jsx)(g.A, {}),
                    children: (0, u.jsx)(j, {}),
                  }),
                }),
                (0, u.jsx)(n.qh, {
                  exact: !0,
                  path: `${v}/management`,
                  children: (0, u.jsx)(f, {
                    fetchAndSetupGlobalDict: d,
                    globalLookupDictionary: o,
                    toggleExperiment: p,
                    updatePersonalDictionaries: c,
                    ...a,
                  }),
                }),
                (0, u.jsx)(n.qh, {
                  exact: !0,
                  path: v,
                  children: (0, u.jsx)(i.Suspense, {
                    fallback: (0, u.jsx)(g.A, {}),
                    children: (0, u.jsx)(y, {
                      userSettings: l,
                      globalLookupDictionary: o,
                      globalLookupDictionaryLoaded: t,
                      personalDictionaries: r,
                      fetchAndSetupGlobalDict: d,
                      ...a,
                    }),
                  }),
                }),
              ],
            }),
          });
        };
    },
    8278: (e, s, t) => {
      t.d(s, { GE: () => c, J1: () => l, LL: () => r, yg: () => a });
      var i = t(3071),
        n = t(2976),
        o = t(3187);
      function r() {
        const e = (0, n.Xr)(o.Zb);
        return (s) => {
          let t = "BAD_INPUT";
          s &&
            s.target &&
            s.target.name &&
            (e(s.target.name), (t = s.target.name));
          let n = t;
          t || (n = "BAD_INPUT"),
            i.Ay.event({
              category: "Global user settings",
              action: "Change writer input",
              label: n,
            });
        };
      }
      function a() {
        const e = (0, n.Xr)(o.y4);
        return (s) => {
          let t = "BAD_INPUT";
          s &&
            s.target &&
            s.target.name &&
            (e(s.target.name), (t = s.target.name));
          let n = t;
          t || (n = "BAD_INPUT"),
            i.Ay.event({
              category: "Global user settings",
              action: "Change input for KAOES",
              label: n,
            });
        };
      }
      function l() {
        const e = (0, n.Xr)(o.AJ);
        return (s) => {
          const t = s.target,
            n = t.checked,
            o = t.name;
          e(o, n);
          let r = n;
          void 0 === n ? (r = "BAD_INPUT") : r.toString(),
            i.Ay.event({
              category: "Global user settings",
              action: "Change " + o,
              label: r,
            });
        };
      }
      function c() {
        const e = (0, n.Xr)(o.Jl);
        return () => {
          e(Date.now());
          i.Ay.event({
            category: "Global user settings",
            action: "Dismiss backup banner",
            label: "Dismiss",
          });
        };
      }
    },
    7468: (e, s, t) => {
      t.d(s, { e: () => o });
      var i = t(1506),
        n = t(7594);
      const o = (0, i.Wj)(n.NQ);
    },
  },
]);
//# sourceMappingURL=835.9622e558.chunk.js.map
