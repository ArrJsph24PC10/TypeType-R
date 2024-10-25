"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [989],
  {
    9989: (e, s, t) => {
      t.r(s), t.d(s, { default: () => x });
      var l = t(2483),
        a = t(3391),
        n = t(5350),
        o = t(4480),
        c = t(3008),
        i = t(7532);
      const r = (e, s) => {
        const t = [];
        return (
          ["ing", "ed", "ment", "'s", "ly", "ion", "s", "er"].forEach((l) => {
            const a = e + l;
            s.get(a) && t.push(a);
          }),
          e.endsWith("e") &&
            s.get(e.slice(0, -1) + "ing") &&
            t.push(e.slice(0, -1) + "ing"),
          t
        );
      };
      var d = t(4457),
        h = t(2976),
        p = t(8282),
        u = t(8265),
        m = t(6723);
      const x = (e) => {
        let {
          globalLookupDictionary: s,
          globalLookupDictionaryLoaded: t,
          personalDictionaries: x,
        } = e;
        const j = (0, a.zy)(),
          b = (0, a.W6)(),
          [f, g] = (0, l.useState)(() => {
            var e;
            return null !== (e = new URLSearchParams(j.search).get("q")) &&
              void 0 !== e
              ? e
              : "";
          }),
          k = (0, l.useMemo)(
            () =>
              (0, u.A)((e) => {
                const s = "" === e ? void 0 : `?q=${e}`;
                b.replace({ search: s, hash: b.location.hash });
              }, 100),
            [b],
          ),
          y = (0, h.md)(p.sj),
          { appFetchAndSetupGlobalDict: v, setCustomLessonContent: N } = (0,
          d.$W)(),
          [w, S] = (0, l.useState)("/typey-type/lookup"),
          C = (0, l.useRef)(null),
          [L, D] = (0, l.useState)(""),
          [A, E] = (0, l.useState)([]);
        (0, l.useEffect)(() => {
          var e;
          null === (e = C.current) || void 0 === e || e.focus();
        }, []),
          (0, l.useEffect)(() => {
            k(encodeURIComponent(f));
          }, [f, k]),
          (0, l.useEffect)(() => {
            L.length > 0 ? E(r(L, s)) : E([]);
          }, [L, s]);
        const R = L.length > 0;
        return (0, m.jsxs)("main", {
          id: "main",
          children: [
            (0, m.jsxs)(i.A, {
              children: [
                (0, m.jsx)("div", {
                  className: "flex mr1 self-center",
                  children: (0, m.jsx)("header", {
                    className: "flex items-center min-h-40",
                    children: (0, m.jsx)("h2", {
                      ref: C,
                      tabIndex: -1,
                      children: "Lookup",
                    }),
                  }),
                }),
                (0, m.jsx)("div", {
                  className: "flex mxn2",
                  children: (0, m.jsx)(n.N_, {
                    to: R ? "/lessons/custom/setup" : "#",
                    onClick: R
                      ? () => {
                          const e = A.slice();
                          e.unshift(L);
                          const t = e
                            .map((e) =>
                              s.get(e)
                                ? { phrase: e, stroke: s.get(e)[0][0] }
                                : void 0,
                            )
                            .filter((e) => !!e);
                          N(t);
                        }
                      : void 0,
                    className:
                      "link-button link-button-ghost table-cell mr1" +
                      (R ? "" : " o-30"),
                    children: "Set up custom lesson",
                  }),
                }),
              ],
            }),
            (0, m.jsx)("div", {
              className: "p3 mx-auto mw-1024 mh-page",
              "data-testid": "lookup-page-contents",
              children: (0, m.jsxs)("div", {
                className: "flex flex-wrap justify-between",
                children: [
                  (0, m.jsxs)("div", {
                    className: "mw-584 w-100 flex-grow mr3 min-h-384",
                    children: [
                      (0, m.jsx)("div", {
                        children: (0, m.jsx)(o.A, {
                          fetchAndSetupGlobalDict: v,
                          globalLookupDictionary: s,
                          globalLookupDictionaryLoaded: t,
                          lookupTerm: f,
                          onChange: (e) => {
                            g(e);
                            const s = encodeURIComponent(e);
                            S("/typey-type/lookup?q=" + s);
                          },
                          personalDictionaries: x,
                          trackPhrase: D,
                          userSettings: y,
                        }),
                      }),
                      (0, m.jsxs)("div", {
                        className: "",
                        children: [
                          (0, m.jsxs)("div", {
                            className: "mt0",
                            children: [
                              (0, m.jsx)("h3", {
                                className: "h4",
                                children: "Share link",
                              }),
                              (0, m.jsx)("p", {
                                className: "mb0 truncate",
                                children: (0, m.jsxs)("span", {
                                  className: "py05 dib",
                                  id: "js-bookmark-url",
                                  children: ["https://didoesdigital.com", w],
                                }),
                              }),
                            ],
                          }),
                          (0, m.jsx)(c.A, {
                            className:
                              "js-clipboard-button button button--secondary table-cell mr2 copy-to-clipboard",
                            style: { lineHeight: 2 },
                            dataClipboardTarget: "#js-bookmark-url",
                            children: "Copy link to clipboard",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsx)("div", {
                    className: "mt18 mw-336 flex-grow",
                    children: (0, m.jsxs)("div", {
                      children: [
                        (0, m.jsx)("p", {
                          className: "mb1 de-emphasized",
                          children: "Some related words:",
                        }),
                        A.length > 0 &&
                          (0, m.jsx)("pre", {
                            className: "fw4",
                            children: A.join("\n"),
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=989.b93ddf86.chunk.js.map
