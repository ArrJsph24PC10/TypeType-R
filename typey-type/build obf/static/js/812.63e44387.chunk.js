"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [812],
  {
    5812: (e, s, i) => {
      i.r(s), i.d(s, { default: () => h });
      var n = i(2483),
        l = i(3071),
        r = i(5029),
        t = i(2226),
        o = i(5350),
        a = i(1886),
        d = i(5135),
        c = i(6723);
      const h = (e) => {
        let { location: s } = e;
        const i = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            var e;
            i && (null === (e = i.current) || void 0 === e || e.focus());
          }, []),
          (0, n.useEffect)(() => {
            var e;
            l.Ay.event({
              category: "Page not found",
              action: "Visited",
              label:
                null !==
                  (e = null === s || void 0 === s ? void 0 : s.pathname) &&
                void 0 !== e
                  ? e
                  : "That page doesn\u2019t exist",
            }),
              t.Cp("Page not found");
          }, [s]),
          (0, c.jsxs)("div", {
            children: [
              (0, c.jsx)("a", {
                href: "#main",
                className: "visually-hidden skip-to-link link-button",
                children: "Skip to main content",
              }),
              (0, c.jsx)("div", {
                className: "bg-violet-800 color-text-reverse",
                role: "banner",
                children: (0, c.jsx)("div", {
                  className: "mx-auto mw-1920 py2 px3",
                  children: (0, c.jsx)("nav", {
                    className: "flex flex-wrap items-center justify-between",
                    children: (0, c.jsx)("div", {
                      className:
                        "site-heading-banner min-h-40 flex items-center",
                      children: (0, c.jsx)(o.N_, {
                        to: "/",
                        className: "heading-link dib",
                        "aria-label": "Typey Type",
                        id: "ga--header--logo",
                        children: (0, c.jsxs)("h1", {
                          ref: i,
                          tabIndex: -1,
                          className: "flex items-end",
                          children: [
                            (0, c.jsx)(d.A, {
                              iconSVGImport: a.A,
                              color: "currentColor",
                              width: "0.5em",
                              height: "0.5em",
                              className: "icon mr1",
                            }),
                            (0, c.jsx)("span", {
                              className: "heading-link__logo-text",
                              children: "Typey\xa0Type",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
              (0, c.jsxs)("main", {
                id: "main",
                className: "p3 mx-auto mw-1024",
                children: [
                  (0, c.jsx)("h1", {
                    ref: i,
                    tabIndex: -1,
                    children: "That page doesn\u2019t exist",
                  }),
                  (0, c.jsx)("p", { children: "Try one of these instead:" }),
                  (0, c.jsxs)("ul", {
                    children: [
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/",
                          children: "Home",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/progress",
                          children: "Your progress",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/writer",
                          children: "Writer",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/lookup",
                          children: "Lookup",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/dictionaries",
                          children: "Dictionaries",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/lessons",
                          children: "Lessons",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/lessons/drills/top-100-words/",
                          children: "Top 100 Words",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/games",
                          children: "Games",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/support",
                          children: "Help and about",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/contribute",
                          children: "Contribute to Typey\xa0Type",
                        }),
                      }),
                      (0, c.jsx)("li", {
                        children: (0, c.jsx)(o.N_, {
                          to: "/break",
                          children: "Take a 5-minute break",
                        }),
                      }),
                    ],
                  }),
                  (0, c.jsxs)("p", {
                    children: [
                      (0, c.jsx)(r.A, {
                        eventLabel:
                          "Typey Type for Stenographers feedback form",
                        newTabAndIUnderstandTheAccessibilityImplications: !0,
                        to: "https://docs.google.com/forms/d/e/1FAIpQLSeevsX2oYEvnDHd3y8weg5_7-T8QZsF93ElAo28JO9Tmog-7Q/viewform?usp=sf_link",
                        children: "Share your feedback (opens in new tab)",
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=812.63e44387.chunk.js.map
