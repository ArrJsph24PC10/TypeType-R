"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [834],
  {
    5834: (e, r, t) => {
      t.r(r), t.d(r, { default: () => u });
      var n = t(2483),
        s = t(5350),
        a = t(3071),
        c = t(7532),
        l = t(6723);
      const i = (e) => {
          const r = Math.floor(e / 60);
          return `${r}:${((e) => {
            let r = String(e);
            for (; r.length < 2; ) r = "0" + r;
            return r;
          })(Math.floor(e - 60 * r))}`;
        },
        u = () => {
          const [e, r] = (0, n.useState)(300),
            t = (0, n.useRef)(null),
            u = (0, n.useRef)(null),
            o = (0, n.useRef)(null),
            d = e <= 0;
          (0, n.useEffect)(() => {
            const e = Date.now() + 3e5;
            return (
              (t.current = setInterval(() => {
                const n = Date.now(),
                  s = (e - n) / 1e3,
                  a = Math.round(s);
                s <= 0 && t.current && clearInterval(t.current), r(a);
              }, 500)),
              () => {
                t.current && clearInterval(t.current);
              }
            );
          }, []),
            (0, n.useEffect)(() => {
              var e;
              null === (e = u.current) || void 0 === e || e.focus();
            }, []),
            (0, n.useEffect)(() => {
              var e;
              d && (null === (e = o.current) || void 0 === e || e.focus());
            }, [d]);
          return (0, l.jsxs)("main", {
            id: "main",
            children: [
              (0, l.jsx)(c.A, {
                children: (0, l.jsx)("div", {
                  className: "flex mr1 self-center",
                  children: (0, l.jsx)("header", {
                    className: "flex items-center min-h-40",
                    children: (0, l.jsx)("h2", {
                      ref: u,
                      tabIndex: -1,
                      id: "take-a-break",
                      children: "Take a break",
                    }),
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: "p3 mx-auto mw-1024",
                children: (0, l.jsxs)("div", {
                  className: "mx-auto mw-568",
                  children: [
                    (0, l.jsx)("h2", {
                      ref: o,
                      tabIndex: -1,
                      className: "text-center mt3",
                      children: d
                        ? "Your break is done"
                        : "Your break starts now",
                    }),
                    (0, l.jsx)("p", {
                      className: "mt3 text-center mb3",
                      children:
                        "Rest your hands and your mind. Take a 5-minute break and continue or come back in 4+\xa0hours for another session.",
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "text-center mb3 stat__number stat__number--min-w",
                      children: (0, l.jsx)("span", {
                        "aria-live": "polite",
                        "aria-atomic": "true",
                        children: i(e),
                      }),
                    }),
                    d &&
                      (0, l.jsx)("p", {
                        className: "text-center",
                        children: (0, l.jsx)(s.N_, {
                          to: "/progress",
                          onClick: () => {
                            a.Ay.event({
                              category: "Break",
                              action: "Click",
                              label: "Review progress",
                            });
                          },
                          className: "link-button dib",
                          style: { lineHeight: 2 },
                          children: "Review progress",
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
//# sourceMappingURL=834.4a0a6aad.chunk.js.map
