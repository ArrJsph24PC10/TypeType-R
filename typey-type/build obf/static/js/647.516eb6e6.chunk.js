"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [647],
  {
    647: (e, i, s) => {
      s.r(i), s.d(i, { default: () => v });
      var t = s(2226),
        n = s(8753),
        o = s(9742),
        r = s(2483),
        a = s(5556),
        l = s.n(a),
        c = s(3071),
        d = s(2823),
        h = s(5135),
        u = s(6723);
      const p = (e) => {
        let { onDismiss: i, children: s } = e;
        const [t, n] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            !t && i && i();
          }, [t, i]),
          (0, u.jsx)("div", {
            children: t
              ? (0, u.jsxs)("div", {
                  className:
                    "notification notification--global fixed w-100 flex wrap justify-between pa1 p1 p3 pa3 items-center bg-danger dark:text-coolgrey-900",
                  children: [
                    (0, u.jsx)("div", {
                      className: "notification__message",
                      children: s,
                    }),
                    (0, u.jsx)("button", {
                      className:
                        "de-emphasized-button flex items-center justify-center p1",
                      "aria-label": "Dismiss notification",
                      onClick: function () {
                        n(!1);
                      }.bind(void 0),
                      children: (0, u.jsx)(h.A, {
                        iconSVGImport: d.A,
                        width: "1em",
                        height: "1em",
                      }),
                    }),
                  ],
                })
              : null,
          })
        );
      };
      var m = s(4649),
        y = s(3008),
        f = s(9502),
        g = s(1438),
        x = s(7532),
        j = s(483),
        b = s(2976),
        w = s(3187);
      const k = {
          "11/*T": "11th",
          "E*/PHRAOUR/PWUS/KWRAOU/TPHUPL": "e pluribus unum",
          "E*/PHRAOUR/PWUS/KWRAOUPB": "e pluribus unum",
          "E*/PHRAOUR/PWUS/KWRAOUPB/UPL": "e pluribus unum",
          "SEPB/*AT": "sensate",
          "SWA/HAOEL/LAOE": "Swahili",
          "WEUBG/*APB": "Wiccan",
        },
        v = (e) => {
          var i;
          const s = (0, b.md)(w.tq),
            a = (0, r.useRef)(null),
            { updateMessage: d } = (0, j.b)(),
            [h, v] = (0, r.useState)(null),
            [N, T] = (0, r.useState)(!1),
            [A, S] = (0, r.useState)(!1),
            [E, P] = (0, r.useState)(null),
            [F, O] = (0, r.useState)([]),
            [D, W] = (0, r.useState)([]),
            [C, R] = (0, r.useState)([]),
            [U, I] = (0, r.useState)([]),
            [L, Y] = (0, r.useState)([]),
            [J, H] = (0, r.useState)(""),
            [B, G] = (0, r.useState)([]),
            M = e.globalLookupDictionary;
          function _(e) {
            d(
              "Unable to save dictionaries. See the message at the top of the page for more details.",
            ),
              P(e || null);
          }
          (0, r.useEffect)(() => {
            var e;
            null === (e = a.current) || void 0 === e || e.focus();
            let i = [];
            M &&
              M.configuration &&
              (i = M.configuration
                .filter((e) => e.startsWith(o.A.get("user") + ":"))
                .map((e) => e.replace(/^.+:/, ""))),
              O(i);
          }, [M]);
          let z = F.map((e, i) => (0, u.jsx)("li", { children: e }, i));
          const q = (0, u.jsx)(u.Fragment, {
            children: (0, u.jsxs)("details", {
              children: [
                (0, u.jsx)("summary", {
                  children: (0, u.jsx)("p", {
                    children:
                      "To see better stroke hints, you might move any misstrokes out of your main dictionaries into a separate misstrokes autocorrect dictionary and exclude it from Typey\xa0Type.",
                  }),
                }),
                (0, u.jsx)("p", {
                  children:
                    "Misstrokes are extra entries that use similar keys to produce the word you meant to write. If you regularly mistype a word, you might add a misstroke entry for the keys you are incorrectly pressing so that your dictionaries effectively autocorrects your mistakes. This is great for increasing the accuracy of your output.",
                }),
                (0, u.jsxs)("p", {
                  children: [
                    "While you're learning steno theory, it can be difficult to recognise misstrokes. It might then take longer to learn the theory and develop intuition about what strokes to use for longer words and variations. For example, if you use the misstroke",
                    " ",
                    (0, u.jsx)("span", {
                      className: "steno-stroke",
                      children: "SPHAOEU",
                    }),
                    " to write \u201csupply\u201d, which is missing the left-hand ",
                    (0, u.jsx)("span", {
                      className: "steno-stroke",
                      children: "R",
                    }),
                    " key from the usual outline ",
                    (0, u.jsx)("span", {
                      className: "steno-stroke",
                      children: "SPHRAOEU",
                    }),
                    ", it might take you longer to work out the brief",
                    " ",
                    (0, u.jsx)("span", {
                      className: "steno-stroke",
                      children: "SPHRAOEUG",
                    }),
                    " for \u201csupplying\u201d or",
                    " ",
                    (0, u.jsx)("span", {
                      className: "steno-stroke",
                      children: "SPWHRAOEU",
                    }),
                    " for \u201cblood\xa0supply\u201d.",
                  ],
                }),
              ],
            }),
          });
          let K =
              (null === h || void 0 === h ? void 0 : h.length) > 0
                ? (0, u.jsxs)(u.Fragment, {
                    children: [
                      (0, u.jsx)("p", {
                        children:
                          "Your dictionaries contain entries that might be misstrokes or bad habits:",
                      }),
                      (0, u.jsx)("ul", {
                        children: h.map((e, i) => {
                          const s = e.probableMisstrokes.map((e, i) =>
                            (0, u.jsxs)(
                              "li",
                              {
                                className: "bg-warning wrap",
                                children: ['"', e[0], '": "', e[1], '"'],
                              },
                              i,
                            ),
                          );
                          return (0, u.jsxs)(
                            "li",
                            {
                              children: [
                                e.name,
                                ":",
                                (0, u.jsx)("ul", { children: s }),
                              ],
                            },
                            i,
                          );
                        }),
                      }),
                      q,
                    ],
                  })
                : q,
            $ = (0, u.jsx)("p", {
              children:
                "You can import your dictionaries and your dictionary config to look up briefs using your own dictionaries.",
            }),
            Q = null,
            V = null,
            Z = null;
          const X = D.map((e, i, s) => (0, u.jsx)("li", { children: e[0] }, i)),
            ee = C.map((e, i, s) =>
              (0, u.jsxs)("li", { children: [e[0], ": ", e[1]] }, i),
            ),
            ie = U,
            se = L.map((e, i, s) => {
              let t = "";
              return (
                (t =
                  ie.indexOf(e) > -1
                    ? "unstyled-list-item"
                    : "unstyled-list-item bg-danger dark:text-coolgrey-900"),
                (0, u.jsx)("li", { className: t, children: e }, i)
              );
            });
          let te;
          switch (
            (D &&
              D.length > 0 &&
              ($ = (0, u.jsxs)(r.Fragment, {
                children: [
                  1 === D.length
                    ? (0, u.jsx)("p", { children: "Your added dictionary:" })
                    : (0, u.jsx)("p", { children: "Your added dictionaries:" }),
                  (0, u.jsx)("ul", { className: "wrap", children: X }),
                ],
              })),
            C &&
              C.length > 0 &&
              (V = (0, u.jsxs)(r.Fragment, {
                children: [
                  1 === C.length
                    ? (0, u.jsx)("p", {
                        children: "This dictionary is invalid:",
                      })
                    : (0, u.jsx)("p", {
                        children: "These dictionaries are invalid:",
                      }),
                  (0, u.jsx)("ul", {
                    className: "bg-danger dark:text-coolgrey-900 pl1 pr3 wrap",
                    children: ee,
                  }),
                ],
              })),
            J &&
              J.length > 4 &&
              (Q = (0, u.jsxs)(r.Fragment, {
                children: [
                  (0, u.jsxs)("p", {
                    className: "wrap",
                    children: [
                      "Your added dictionary config (",
                      J,
                      ") contains these dictionaries:",
                    ],
                  }),
                  (0, u.jsx)("ul", {
                    className: "wrap unstyled-list",
                    children: se,
                  }),
                ],
              })),
            B &&
              2 === B.length &&
              (Z = (0, u.jsxs)(r.Fragment, {
                children: [
                  (0, u.jsx)("p", {
                    children: "This dictionary config is invalid:",
                  }),
                  (0, u.jsxs)("p", {
                    className: "bg-danger dark:text-coolgrey-900 pl1 pr3 wrap",
                    children: [B[0], ": ", B[1]],
                  }),
                ],
              })),
            E)
          ) {
            case "AddToStorageFailed":
              te = (0, u.jsxs)("p", {
                children: [
                  "Your local storage is full so your dictionaries won't fit. Typey\xa0Type will still use them today but the next time you visit, you\u2019ll have to add your dictionaries again. For help, email",
                  " ",
                  (0, u.jsx)("a", {
                    href: "mailto:typeytype@didoesdigital.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "typeytype@didoesdigital.com",
                  }),
                ],
              });
              break;
            case "WriteToStorageFailed":
              te = (0, u.jsx)("p", {
                children:
                  "Typey\xa0Type couldn\u2019t update your local storage. Check your settings. It might also be full. Any changes to personal preferences and progress will be lost.",
              });
              break;
            case "NoLocalStorage":
              te = (0, u.jsx)("p", {
                children:
                  "Local storage is unavailable. Check your settings and permissions or try another browser. Changes to personal preferences and progress will be lost.",
              });
              break;
            case "FetchAndSetupGlobalDictFailed":
              te = (0, u.jsxs)("p", {
                children: [
                  "Typey\xa0Type couldn\u2019t set up a global dictionary using your personal dictionaries. For help, email",
                  " ",
                  (0, u.jsx)("a", {
                    href: "mailto:typeytype@didoesdigital.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "typeytype@didoesdigital.com",
                  }),
                ],
              });
              break;
            default:
              te = "";
          }
          return (0, u.jsx)(l(), {
            title: "Typey Type | Dictionary management",
            children: (0, u.jsxs)("main", {
              id: "main",
              children: [
                E
                  ? (0, u.jsx)(p, {
                      onDismiss: function () {
                        d(""), P(null);
                      }.bind(void 0),
                      children: te,
                    })
                  : null,
                (0, u.jsx)(x.A, {
                  children: (0, u.jsx)("div", {
                    className: "flex mr1 self-center",
                    children: (0, u.jsx)("header", {
                      className: "flex items-center min-h-40",
                      children: (0, u.jsx)("h2", {
                        className: "table-cell mr2",
                        ref: a,
                        tabIndex: -1,
                        children: "Dictionary management",
                      }),
                    }),
                  }),
                }),
                (0, u.jsx)("div", {
                  className:
                    "bg-info dark:bg-coolgrey-1100 landing-page-section",
                  children: (0, u.jsxs)("div", {
                    className: "p3 mx-auto mw-1024",
                    children: [
                      (0, u.jsx)("h3", {
                        children: "Dictionary management experiment",
                      }),
                      (0, u.jsxs)("details", {
                        children: [
                          (0, u.jsx)("summary", {
                            children: (0, u.jsxs)("p", {
                              children: [
                                (0, u.jsx)("span", {
                                  className: "bg-danger dark:text-coolgrey-900",
                                  children: "This feature is experimental!",
                                }),
                                " ",
                                "There are some known limitations, such as the size limit. Expand to learn more\u2026",
                              ],
                            }),
                          }),
                          (0, u.jsxs)("ul", {
                            children: [
                              (0, u.jsx)("li", {
                                children:
                                  "Local storage typically only holds about 5MB of data. If you have a bigger dictionary, you'll have to add it again on every visit.",
                              }),
                              (0, u.jsxs)("li", {
                                children: [
                                  "You cannot use duplicate dictionary names e.g. if you have",
                                  " ",
                                  (0, u.jsx)("code", {
                                    children: "../good/dict.json",
                                  }),
                                  " and",
                                  " ",
                                  (0, u.jsx)("code", {
                                    children: "../bad/dict.json",
                                  }),
                                  ", Typey\xa0Type will see them both as ",
                                  (0, u.jsx)("code", { children: "dict.json" }),
                                  " and panic.",
                                ],
                              }),
                              (0, u.jsx)("li", {
                                children:
                                  "This only works with JSON files. You cannot add Python or RTF dictionaries.",
                              }),
                              (0, u.jsx)("li", {
                                children:
                                  "This only works with Plover config files. This config file may decide the order of dictionaries for overwriting entries.",
                              }),
                              (0, u.jsx)("li", {
                                children:
                                  "This assumes you're using a newer version of Plover where the config file is in a certain format and the most important dictionary appears first.",
                              }),
                              (0, u.jsx)("li", {
                                children:
                                  "If you add multiple dictionaries with the same steno outline (JSON key) with different translations (JSON values), Typey\xa0Type will happily show the same outline as a hint for each of the words (or phrases), even though your configuration would prevent using both.",
                              }),
                              (0, u.jsx)("li", {
                                children:
                                  "The Writer feature will ignore your personal dictionaries entirely and show only Typey\xa0Type translations.",
                              }),
                              (0, u.jsx)("li", {
                                children:
                                  "This will probably do weird things with steno layouts other than the American (Ward Stone Ireland) layout and possibly with non-Plover theory punctuation.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, u.jsx)("p", {
                        children:
                          "Typey\xa0Type does not upload personal dictionaries anywhere. Your dictionaries stay on your device. Dictionary names (but not their contents) may be sent to Google Analytics.",
                      }),
                      (0, u.jsxs)("div", {
                        className: "block relative p1",
                        children: [
                          (0, u.jsxs)("label", {
                            className: "checkbox-label mb1",
                            children: [
                              (0, u.jsx)("input", {
                                className: "checkbox-input mr1",
                                type: "checkbox",
                                name: "stenohintsonthefly",
                                id: "stenohintsonthefly",
                                checked: !(
                                  null === s ||
                                  void 0 === s ||
                                  null === (i = s.experiments) ||
                                  void 0 === i ||
                                  !i.stenohintsonthefly
                                ),
                                onChange: e.toggleExperiment,
                              }),
                              (0, u.jsxs)("strong", {
                                children: [
                                  "Show your dictionary entries in lesson hints",
                                  " ",
                                  (0, u.jsx)("span", {
                                    className:
                                      "bg-danger dark:text-coolgrey-900",
                                    children:
                                      "(this is experimental with known limitations!)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, u.jsxs)("ul", {
                            className: "ml3",
                            children: [
                              (0, u.jsx)("li", {
                                children:
                                  "Typey\xa0Type will still use its own stroke hints for lessons with \u201cphrasing\u201d, \u201cprefixes\u201d, \u201csuffixes\u201d, \u201csteno-party-tricks\u201d, or \u201ccollections/tech\u201d in the URL.",
                              }),
                              (0, u.jsx)("li", {
                                children:
                                  "There are weird cases where Typey\xa0Type will show its own strokes for certain combinations of punctuation.",
                              }),
                              (0, u.jsxs)("li", {
                                children: [
                                  "You may see",
                                  " ",
                                  (0, u.jsx)("span", {
                                    className:
                                      "steno-stroke steno-stroke--subtle",
                                    children: "EU",
                                  }),
                                  " ",
                                  "or",
                                  " ",
                                  (0, u.jsx)("span", {
                                    className:
                                      "steno-stroke steno-stroke--subtle",
                                    children: "*EUP",
                                  }),
                                  " ",
                                  "shown for \u201cI\u201d instead of",
                                  " ",
                                  (0, u.jsx)("span", {
                                    className:
                                      "steno-stroke steno-stroke--subtle",
                                    children: "1-R",
                                  }),
                                  " ",
                                  "in the Roman Numerals lesson and similar quirks.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, u.jsx)("div", {
                  className:
                    "bg-white dark:bg-coolgrey-1000 landing-page-section",
                  children: (0, u.jsx)("div", {
                    className: "p3 mx-auto mw-1024 flex flex-wrap",
                    children: (0, u.jsxs)("div", {
                      className: "mw-568 mr3 flex-grow",
                      children: [
                        (0, u.jsx)("h3", {
                          children: "Dictionaries used for lookup",
                        }),
                        e.globalLookupDictionary &&
                        e.globalLookupDictionary.configuration
                          ? (0, u.jsxs)(u.Fragment, {
                              children: [
                                (0, u.jsx)("p", {
                                  children:
                                    "Typey\xa0Type will use these dictionaries for brief hints:",
                                }),
                                (0, u.jsxs)("ul", {
                                  children: [
                                    (0, u.jsx)("li", {
                                      children: "Typey Type's dictionaries",
                                    }),
                                    z,
                                    (0, u.jsx)("li", {
                                      children:
                                        "\u2026\xa0and for Lookup, Plover's latest dictionary too",
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, u.jsx)("p", {
                              children:
                                "No dictionaries have been loaded yet because this page doesn't need to show any strokes.",
                            }),
                        (0, u.jsx)("form", {
                          className: "mb3",
                          onSubmit: function (i) {
                            i.preventDefault(), T(!1), S(!0);
                            let s = L,
                              n = D.slice(0);
                            (n = n.sort(
                              (e, i) => s.indexOf(e[0]) - s.indexOf(i[0]),
                            )),
                              e.updatePersonalDictionaries({
                                dictionariesNamesAndContents: n,
                              });
                            let o = { v: "1", dicts: D },
                              r = (0, f.iJ)("personalDictionaries", o);
                            r &&
                              (_(r.name),
                              r.error &&
                                (t.Cp(r.error),
                                t.wd(
                                  "Write dictionaries error\u2026 " + r.message,
                                  "debug",
                                )));
                            let a = F || "No files for config";
                            c.Ay.event({
                              category: "Apply dictionary changes",
                              action: "Click apply button",
                              label: a,
                            });
                            const l = { dictionariesNamesAndContents: D };
                            e.fetchAndSetupGlobalDict(!0, l)
                              .then(() => {
                                T(!0), S(!1);
                              })
                              .catch((e) => {
                                console.error(e),
                                  _("FetchAndSetupGlobalDictFailed"),
                                  T(!1),
                                  S(!1);
                              });
                          }.bind(void 0),
                          children: (0, u.jsxs)("p", {
                            children: [
                              (0, u.jsx)(y.A, {
                                className: "pseudo-text--applied button mt1",
                                children: "Apply",
                              }),
                              A
                                ? (0, u.jsx)("span", {
                                    className: "dib ml2",
                                    children: "Applying",
                                  })
                                : null,
                              N
                                ? (0, u.jsx)("span", {
                                    className: "dib ml2",
                                    children: "Applied!",
                                  })
                                : null,
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, u.jsx)("div", {
                  className:
                    "bg-info dark:bg-coolgrey-1100 landing-page-section",
                  children: (0, u.jsx)("div", {
                    className: "p3 mx-auto mw-1024",
                    children: (0, u.jsxs)("div", {
                      className: "flex flex-wrap",
                      children: [
                        (0, u.jsxs)("div", {
                          className: "mw-568 mr3 flex-grow",
                          children: [
                            (0, u.jsx)("h3", { children: "Your dictionaries" }),
                            $,
                            V,
                            K,
                            Q,
                            Z,
                            (0, u.jsx)("form", {
                              className: "mt3 mb3",
                              onSubmit: function (e) {
                                e.preventDefault();
                                let i = (0, f.iJ)("personalDictionaries", []);
                                i
                                  ? (console.log(i),
                                    i.error &&
                                      (t.Cp(i.error),
                                      t.wd(
                                        "Write dictionaries error\u2026 " +
                                          i.message,
                                        "debug",
                                      )))
                                  : d("Applied!"),
                                  S(!1),
                                  P(null),
                                  O([]),
                                  W([]),
                                  R([]),
                                  I([]),
                                  Y([]),
                                  H(""),
                                  G([]),
                                  c.Ay.event({
                                    category: "Dictionary management",
                                    action: "Clear dictionaries and config",
                                    label: "Clear all",
                                  });
                              }.bind(void 0),
                              children: (0, u.jsx)("div", {
                                children: (0, u.jsx)("button", {
                                  type: "submit",
                                  className: "button button--danger mt1",
                                  children: "Clear dictionaries and config",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, u.jsxs)("div", {
                          className: "mw-384 w-336",
                          children: [
                            (0, u.jsx)("h3", { children: "Add files" }),
                            (0, u.jsxs)("form", {
                              className: "mb3",
                              onSubmit: function (e) {
                                e.preventDefault(), T(!1), S(!1);
                                const i = document.querySelector(
                                  "#dictionariesFileInput",
                                ).files;
                                let s = "No files for dictionaries";
                                if (i && i.length > 0) {
                                  let e = [];
                                  for (let s = 0; s < i.length; s++)
                                    e.push(i[s].name);
                                  s = e.join(", ");
                                }
                                c.Ay.event({
                                  category: "Dictionary management",
                                  action: "Add dictionaries",
                                  label: s,
                                }),
                                  (function (e) {
                                    let i = D.slice(),
                                      s = [],
                                      t = e.length;
                                    if (0 === t)
                                      W(i),
                                        R([
                                          [
                                            "No dictionary",
                                            "Choose a dictionary file to import.",
                                          ],
                                        ]);
                                    else {
                                      let o = [];
                                      for (let r = 0; r < t; ++r) {
                                        let t = e[r],
                                          a = t.name;
                                        const l = new FileReader();
                                        (l.onload = (e) => {
                                          let r = e.target.result;
                                          try {
                                            if (t.size > 25e6)
                                              throw new Error(
                                                "This file is too big (>25MB).",
                                              );
                                            if (
                                              !t.type.startsWith(
                                                "application/json",
                                              )
                                            )
                                              throw new Error(
                                                "This is not a JSON file.",
                                              );
                                            if (D.map((e) => e[0]).includes(a))
                                              throw new Error(
                                                "This dictionary name conflicts with an existing dictionary. You may have imported it already.",
                                              );
                                            if (
                                              "typey-type.json" === a &&
                                              t.size >= 2144740
                                            )
                                              throw new Error(
                                                "This dictionary looks like a copy of Typey Type's so we'll exclude it for now.",
                                              );
                                            if (
                                              a === n.A ||
                                              ("main.json" === a &&
                                                t.size > 4e3)
                                            )
                                              throw new Error(
                                                "This dictionary looks like a copy of Plover's latest dictionary so we'll exclude it for now.",
                                              );
                                            let e = JSON.parse(r);
                                            if (
                                              e.constructor !== {}.constructor
                                            )
                                              throw new Error(
                                                "This JSON does not contain an object.",
                                              );
                                            let s = Object.entries(e);
                                            if (s.length < 1)
                                              throw new Error(
                                                "This dictionary is empty.",
                                              );
                                            let l = [],
                                              c = s.length;
                                            for (let i = 0; i < c; ++i) {
                                              let [e, t] = s[i];
                                              if (
                                                null !==
                                                e.match(
                                                  /[^#STKPWHRAO*-EUFRPBLGTSDZ/]/,
                                                )
                                              ) {
                                                let i = 50,
                                                  s =
                                                    e.length > i
                                                      ? e.substring(0, i - 3) +
                                                        "\u2026"
                                                      : e.substring(0, i);
                                                throw new Error(
                                                  `${a} contains invalid steno outlines, such as: ${s}`,
                                                );
                                              }
                                              g[e] &&
                                                g[e] === t &&
                                                l.push([e, t]),
                                                k[e] &&
                                                  k[e] === t &&
                                                  l.push([e, t]);
                                            }
                                            e &&
                                              "object" === typeof e &&
                                              i.push([a, e]),
                                              l.length > 0 &&
                                                o.push({
                                                  name: a,
                                                  probableMisstrokes: l,
                                                });
                                          } catch (d) {
                                            s.push([a, d.message]);
                                          }
                                          const l = i.map((e) => e[0]);
                                          let c = (0, m.Q6)(L, l);
                                          O(c), I(l), W(i), R(s);
                                        }),
                                          l.readAsText(t);
                                      }
                                      v(o);
                                    }
                                  })(i);
                              }.bind(void 0),
                              children: [
                                (0, u.jsxs)("div", {
                                  className: "dib",
                                  children: [
                                    (0, u.jsx)("label", {
                                      className: "mb1",
                                      htmlFor: "dictionariesFileInput",
                                      children:
                                        "Add dictionaries in JSON format",
                                    }),
                                    (0, u.jsx)("p", {
                                      className: "text-small mb1",
                                      children:
                                        "You can add one dictionary after another using this form.",
                                    }),
                                    (0, u.jsx)("input", {
                                      type: "file",
                                      id: "dictionariesFileInput",
                                      name: "dictionary",
                                      className: "form-control",
                                      multiple: !0,
                                    }),
                                  ],
                                }),
                                (0, u.jsx)("div", {
                                  children: (0, u.jsx)("button", {
                                    type: "submit",
                                    className: "button mt1",
                                    children: "Add dictionaries",
                                  }),
                                }),
                              ],
                            }),
                            (0, u.jsxs)("form", {
                              className: "mb3",
                              onSubmit: function (e) {
                                e.preventDefault(), T(!1), S(!1);
                                const i = document.querySelector(
                                  "#dictionaryConfigFileInput",
                                ).files;
                                let s = "No files for config";
                                if (i && i.length > 0) {
                                  let e = [];
                                  for (let s = 0; s < i.length; s++)
                                    e.push(i[s].name);
                                  s = e.join(", ");
                                }
                                c.Ay.event({
                                  category: "Dictionary management",
                                  action: "Add config",
                                  label: s,
                                }),
                                  (function (e) {
                                    let i = "",
                                      s = [],
                                      t = [],
                                      n = e.length;
                                    if (n > 1)
                                      H(i),
                                        G([
                                          "Too many files",
                                          "Choose one config file.",
                                        ]);
                                    else if (1 !== n)
                                      H(i),
                                        G([
                                          "No config file",
                                          "Choose a config file to import.",
                                        ]);
                                    else if (e[0].name.endsWith(".cfg")) {
                                      let n = e[0],
                                        o = n.name;
                                      const r = new FileReader();
                                      (r.onload = (e) => {
                                        let n = e.target.result;
                                        try {
                                          let e = n.split("\n"),
                                            t = e.length,
                                            r = "";
                                          for (let i = 0; i < t; ++i)
                                            e[i].startsWith(
                                              "dictionaries = ",
                                            ) &&
                                              (r = JSON.parse(
                                                e[i].replace(
                                                  "dictionaries = ",
                                                  "",
                                                ),
                                              ));
                                          if (!r)
                                            throw new Error(
                                              "This file has no list of dictionaries.",
                                            );
                                          let a = r.length;
                                          for (let i = 0; i < a; ++i) {
                                            if (
                                              !r[i].hasOwnProperty("enabled") ||
                                              !r[i].hasOwnProperty("path")
                                            )
                                              throw new Error(
                                                "The list of dictionaries has no enabled dictionary paths.",
                                              );
                                            if (r[i].enabled) {
                                              let e = r[i].path
                                                .split("\\")
                                                .pop()
                                                .split("/")
                                                .pop();
                                              if (e.endsWith(".json"))
                                                s.push(e);
                                              else if (!e.endsWith(".py"))
                                                throw new Error(
                                                  `This doesn't look like a valid dictionary filename: ${e.slice(0, 50)}.`,
                                                );
                                            }
                                          }
                                          if (0 === s.length)
                                            throw new Error(
                                              "There were no valid JSON dictionaries found enabled in this config.",
                                            );
                                          i = o;
                                        } catch (a) {
                                          t = [o, a.message];
                                        }
                                        let r = (0, m.Q6)(s, U);
                                        O(r), H(i), Y(s), G(t);
                                      }),
                                        r.readAsText(n);
                                    } else
                                      H(i),
                                        G([
                                          "Incorrect file type",
                                          "The file name must end in \u201c.cfg\u201d.",
                                        ]);
                                  })(i);
                              }.bind(void 0),
                              children: [
                                (0, u.jsxs)("div", {
                                  className: "dib",
                                  children: [
                                    (0, u.jsx)("label", {
                                      className: "mb1",
                                      htmlFor: "dictionaryConfigFileInput",
                                      children: "Add config",
                                    }),
                                    (0, u.jsx)("input", {
                                      type: "file",
                                      id: "dictionaryConfigFileInput",
                                      name: "dictionaryConfig",
                                      className: "form-control",
                                      multiple: !0,
                                    }),
                                  ],
                                }),
                                (0, u.jsx)("div", {
                                  children: (0, u.jsx)("button", {
                                    type: "submit",
                                    className: "button mt1",
                                    children: "Add config",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        };
    },
  },
]);
//# sourceMappingURL=647.516eb6e6.chunk.js.map
