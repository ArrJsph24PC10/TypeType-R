"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [304],
  {
    8304: (e, t, n) => {
      n.r(t), n.d(t, { default: () => b });
      var i = n(2483),
        s = n(5556),
        a = n.n(s),
        r = n(5350),
        l = n(3391),
        o = n(3071),
        c = n(2226),
        d = n(7532),
        p = n(6723);
      const h = () => {
        const e = (0, i.useRef)(null),
          t = (0, l.zy)();
        return (
          (0, i.useEffect)(() => {
            let e = "Missing dictionary";
            t && t.pathname && (e = t.pathname),
              o.Ay.event({
                category: "Dictionary not found",
                action: "Visited",
                label: e,
              }),
              c.Cp("Dictionary not found");
          }, [t]),
          (0, i.useEffect)(() => {
            var t;
            e && (null === (t = e.current) || void 0 === t || t.focus());
          }, []),
          (0, p.jsx)(a(), {
            title: "Typey Type | Missing dictionary",
            children: (0, p.jsxs)("main", {
              id: "main",
              children: [
                (0, p.jsx)(d.A, {
                  children: (0, p.jsx)("div", {
                    className: "flex mr1 self-center",
                    children: (0, p.jsx)("header", {
                      className: "flex items-center min-h-40",
                      children: (0, p.jsx)("h2", {
                        ref: e,
                        className: "table-cell mr2",
                        tabIndex: -1,
                        children: "Missing dictionary",
                      }),
                    }),
                  }),
                }),
                (0, p.jsx)("div", {
                  className: "mx-auto mw-1024 p3",
                  children: (0, p.jsxs)("div", {
                    className: "mw-568",
                    children: [
                      (0, p.jsx)("p", {
                        className: "mt3",
                        children:
                          "That dictionary couldn\u2019t be found. Try another:",
                      }),
                      (0, p.jsx)("ul", {
                        children: (0, p.jsx)("li", {
                          children: (0, p.jsx)(r.N_, {
                            to: "/dictionaries",
                            children: "All dictionaries",
                          }),
                        }),
                      }),
                      (0, p.jsxs)("p", {
                        children: [
                          "Or",
                          " ",
                          (0, p.jsx)("a", {
                            href:
                              "https://docs.google.com/forms/d/e/1FAIpQLSfqBBEs5Fl8vgay03fEXzSU7Ey_pms6Y6Nt2Yk8gFftGhAWQA/viewform?usp=pp_url&entry.1884511690=" +
                              encodeURIComponent(
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.pathname) || "",
                              ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            id: "ga--dictionary--give-feedback",
                            children: "let me know (form opens in a new tab)",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
      var y = n(3008),
        m = n(9502),
        u = n(483),
        f = n(2976),
        x = n(7468);
      const j = 1e3,
        g = (e) =>
          e.startsWith("/typey-type") ||
          e.startsWith("/dictionaries/") ||
          e.startsWith("/lessons/") ||
          e.startsWith("/support"),
        b = () => {
          const e = (0, f.md)(x.e),
            t = (0, i.useRef)(null),
            { updateMessage: n } = (0, u.b)(),
            [s, c] = (0, i.useState)(!0),
            [b, v] = (0, i.useState)(!1),
            [N, k] = (0, i.useState)({
              author: "Typey Type",
              title: "Loading dictionary\u2026",
              subtitle: "",
              category: "Typey Type",
              subcategory: "",
              tagline: "Loading\u2026",
              link: "/typey-type/support#typey-type-dictionary",
              path: "/dictionaries/typey-type/top-10.json",
              contents: {
                "-T": "the",
                "-F": "of",
                SKP: "and",
                TO: "to",
                AEU: "a",
                TPH: "in",
                TPOR: "for",
                S: "is",
                OPB: "on",
                THA: "that",
              },
            }),
            w = (0, l.zy)();
          (0, i.useEffect)(() => {
            var e;
            t && (null === (e = t.current) || void 0 === e || e.focus());
          }, []),
            (0, i.useEffect)(() => {
              !w.pathname.startsWith("/dictionaries/custom") &&
                w.pathname.startsWith("/dictionaries") &&
                fetch("/typey-type" + w.pathname.replace(/\/$/, ".json"), {
                  method: "GET",
                  credentials: "same-origin",
                })
                  .then((t) => {
                    const i = t.headers.get("content-type");
                    if (i && -1 !== i.indexOf("application/json"))
                      return t.json().then((t) => {
                        const i = {
                          ...(0, m.Ww)("/typey-type" + w.pathname, e),
                          contents: t,
                        };
                        k(i), n("Finished loading: " + i.title), c(!1);
                      });
                    throw new Error("Unable to load dictionary");
                  })
                  .catch((e) => {
                    console.log("Unable to load dictionary", e),
                      n("Unable to load dictionary"),
                      v(!0);
                  });
            }, [w]);
          const T = () => {
            o.Ay.event({
              category: "Downloads",
              action: "Click",
              label:
                null !== N &&
                void 0 !== N &&
                N.path &&
                "/dictionaries/typey-type/top-10.json" !== N.path
                  ? N.path
                  : "No dictionary path",
            });
          };
          if (b) return (0, p.jsx)(h, {});
          if (N) {
            const [e, n] = ((e) => {
                let t = "";
                (t = JSON.stringify(e).split('",').join('",\n')),
                  (t = "{\n" + t.slice(1, t.length));
                const n = t.split("\n"),
                  i = n.length;
                if (i > j) {
                  let e = n.slice(0, j);
                  (e[999] = e[999].slice(0, -1)),
                    e.push("}"),
                    (t = e.join("\n"));
                }
                return [t, i];
              })(N.contents),
              i =
                n > j
                  ? (0, p.jsxs)("p", {
                      className: "bg-danger dark:text-coolgrey-900",
                      children: [
                        "The dictionary is too large to display in full so this only shows the first ",
                        j,
                        " entries.",
                      ],
                    })
                  : "",
              l =
                ((A = N.link),
                g(A)
                  ? null
                  : (0, p.jsx)("p", {
                      className: "mt3",
                      children: (0, p.jsx)("a", {
                        href: A,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: "Learn more (opens in new tab)",
                      }),
                    })),
              o = ((e, t) =>
                g(e)
                  ? `/typey-type${e}`.startsWith("/typey-type/lessons")
                    ? (0, p.jsx)("p", {
                        children: (0, p.jsxs)(r.N_, {
                          to: e,
                          children: ["Lesson: ", t],
                        }),
                      })
                    : (0, p.jsx)("p", {
                        children: (0, p.jsx)(r.N_, {
                          to: e,
                          children: "Learn more",
                        }),
                      })
                  : null)(N.link, N.title);
            return (0, p.jsx)(a(), {
              title: "Typey Type | Dictionary: " + N.title,
              children: (0, p.jsxs)("main", {
                id: "main",
                children: [
                  (0, p.jsxs)(d.A, {
                    children: [
                      (0, p.jsx)("div", {
                        className: "flex mr1 self-center",
                        children: (0, p.jsx)("header", {
                          className: "flex items-center min-h-40",
                          children: (0, p.jsxs)("h2", {
                            className: "table-cell mr2",
                            ref: t,
                            tabIndex: -1,
                            children: [
                              s
                                ? (0, p.jsx)("span", {
                                    children: "Loading dictionary\u2026",
                                  })
                                : N.title,
                              b &&
                                (0, p.jsx)("span", {
                                  children: "Loading failed.",
                                }),
                            ],
                          }),
                        }),
                      }),
                      (0, p.jsxs)("div", {
                        className: "flex mxn2",
                        children: [
                          (0, p.jsx)("a", {
                            href: "/typey-type" + N.path,
                            download: "",
                            onClick: T,
                            className:
                              "link-button link-button-ghost table-cell mr1",
                            children: "Download",
                          }),
                          (0, p.jsx)(y.A, {
                            className:
                              "js-clipboard-button button button--secondary table-cell mr1 copy-to-clipboard",
                            style: { lineHeight: 2 },
                            dataClipboardTarget: "#js-dictionary-json-pre",
                            children: "Copy to clipboard",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, p.jsxs)("div", {
                    className: "p3 mx-auto mw-1024",
                    children: [
                      (0, p.jsxs)("div", {
                        className: "mw-568",
                        children: [
                          N.author &&
                            !N.tagline.includes("Loading") &&
                            (0, p.jsxs)("p", {
                              className:
                                "text-small text-uppercase de-emphasized mt3",
                              children: ["Contributor: ", N.author],
                            }),
                          N.tagline &&
                            !N.tagline.includes("Loading") &&
                            (0, p.jsx)("p", { children: N.tagline }),
                          N.link &&
                            !N.link.includes("/typey-type/support") &&
                            o,
                          N.link && l,
                          (0, p.jsx)("h3", { children: "The dictionary" }),
                          b && (0, p.jsx)("p", { children: "Loading failed." }),
                          !s && i,
                          s
                            ? (0, p.jsx)("p", { children: "Loading\u2026" })
                            : (0, p.jsx)("pre", {
                                className:
                                  "quote h-168 overflow-scroll mw-384 mt1 mb3",
                                id: "js-dictionary-json-pre",
                                tabIndex: 0,
                                children: (0, p.jsx)("code", { children: e }),
                              }),
                        ],
                      }),
                      (0, p.jsx)("p", {
                        children: (0, p.jsx)("a", {
                          href:
                            "https://docs.google.com/forms/d/e/1FAIpQLSfqBBEs5Fl8vgay03fEXzSU7Ey_pms6Y6Nt2Yk8gFftGhAWQA/viewform?usp=pp_url&entry.1884511690=" +
                            encodeURIComponent(
                              (null === w || void 0 === w
                                ? void 0
                                : w.pathname) || "",
                            ),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          id: "ga--dictionary--give-feedback",
                          children:
                            "Give feedback on this dictionary (form opens in a new tab)",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
          return (0, p.jsx)("div", {
            children: (0, p.jsx)("h2", {
              ref: t,
              tabIndex: -1,
              children: "That dictionary is missing.",
            }),
          });
          var A;
        };
    },
  },
]);
//# sourceMappingURL=304.abbb6c78.chunk.js.map
