"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [378],
  {
    8378: (e, t, r) => {
      r.r(t), r.d(t, { default: () => R });
      var n = r(2483),
        s = r(3071),
        a = r(231),
        o = r(5069),
        l = r(5562),
        i = r(9211),
        c = r(9525),
        d = r(202),
        m = r(8512);
      const h = (e) => {
          let t = {
            marginTop: 16,
            marginRight: 16,
            marginBottom: 16,
            marginLeft: 16,
            ...e,
          };
          return {
            ...t,
            boundedHeight: Math.max(t.height - t.marginTop - t.marginBottom, 0),
            boundedWidth: Math.max(t.width - t.marginLeft - t.marginRight, 0),
          };
        },
        u = (e) => {
          const t = (0, n.useRef)(),
            r = h(e),
            [s, a] = (0, n.useState)(0),
            [o, l] = (0, n.useState)(0);
          (0, n.useEffect)(() => {
            if (r.width && r.height) return [t, r];
            const e = t.current,
              n = new ResizeObserver((e) => {
                if (!Array.isArray(e)) return;
                if (!e.length) return;
                const t = e[0];
                s !== t.contentRect.width && a(t.contentRect.width),
                  o !== t.contentRect.height && l(t.contentRect.height);
              });
            return n.observe(e), () => n.unobserve(e);
          }, [e, o, s, r]);
          const i = h({ ...r, width: r.width || s, height: r.height || o });
          return [t, i];
        };
      var x = r(983),
        p = r(1886),
        g = r(5135),
        y = r(8337),
        f = r(6723);
      const b = (0, i.GP)(","),
        A = {
          x: (e) => {
            let {
              dimensions: t,
              scale: r,
              gridLines: s,
              numberOfTicks: a,
              ...o
            } = e;
            const l = (0, n.useMemo)(
              () => r.ticks(a).map((e) => ({ value: e, xOffset: r(e) })),
              [r, a],
            );
            return (0, f.jsx)("g", {
              transform: `translate(0, ${t.boundedHeight})`,
              role: "presentation",
              ...o,
              children: l.map((e) => {
                let { value: t, xOffset: r } = e;
                return (0, f.jsxs)(
                  "g",
                  {
                    transform: `translate(${r}, 0)`,
                    role: "presentation",
                    children: [
                      (0, f.jsx)("line", {
                        y2: 4,
                        role: "presentation",
                        style: { pointerEvents: "none", stroke: "#E3E3E3" },
                      }),
                      (0, f.jsx)(
                        "text",
                        {
                          "aria-hidden": "true",
                          role: "presentation",
                          style: {
                            textAnchor: "middle",
                            transform: "translateY(24px)",
                            userSelect: "none",
                          },
                          children: b(t),
                        },
                        t,
                      ),
                    ],
                  },
                  t,
                );
              }),
            });
          },
          y: (e) => {
            let {
              dimensions: t,
              scale: r,
              gridLines: s,
              numberOfTicks: a,
              ...o
            } = e;
            const [l, i] = !0 === s ? [-t.boundedWidth, 0] : [0, 4],
              c = (0, n.useMemo)(
                () => r.ticks(a).map((e) => ({ value: e, yOffset: r(e) })),
                [r, a],
              );
            return (0, f.jsx)("g", {
              transform: `translate(${t.boundedWidth}, 0)`,
              role: "presentation",
              ...o,
              children: c.map((e, t) => {
                let { value: r, yOffset: n } = e;
                return (0, f.jsxs)(
                  "g",
                  {
                    transform: `translate(0, ${n})`,
                    role: "presentation",
                    children: [
                      (0, f.jsx)("line", {
                        x1: l,
                        x2: i,
                        role: "presentation",
                        style: { pointerEvents: "none", stroke: "#E3E3E3" },
                      }),
                      (0, f.jsx)(
                        "text",
                        {
                          "aria-hidden": "true",
                          role: "presentation",
                          style: {
                            textAnchor: "start",
                            transform: "translateX(8px)",
                            userSelect: "none",
                          },
                          dy: "0.32em",
                          children: `${b(r)}${t === c.length - 1 ? " WPM" : ""}`,
                        },
                        r,
                      ),
                    ],
                  },
                  r,
                );
              }),
            });
          },
        },
        k = (e) => {
          let { dimension: t, dimensions: r, ...n } = e;
          const s = A[t];
          return s ? (0, f.jsx)(s, { dimensions: r, ...n }) : null;
        },
        j = (e) => {
          let { scaleRange: t, tickSize: r } = e;
          return (0, f.jsx)("path", {
            d: `M ${t[0]} ${r} v ${-r} H ${t[1]} v ${r}`,
            fill: "none",
            stroke: "#A8A8A8",
            role: "presentation",
          });
        },
        v = (0, n.createContext)(),
        $ = (e) => {
          let {
            dimensions: t,
            onMouseMove: r = null,
            onTouchMove: n = null,
            onMouseOut: s = null,
            onTouchEnd: a = null,
            accessibleTitle: o,
            children: l,
          } = e;
          return (0, f.jsx)(v.Provider, {
            value: t,
            children: (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)("h3", {
                  className: "visually-hidden",
                  id: "chart-title",
                  children: o,
                }),
                (0, f.jsxs)("svg", {
                  width: t.width,
                  height: t.height,
                  "aria-labelledby": "chart-title",
                  children: [
                    (0, f.jsx)("g", {
                      transform: `translate(${t.marginLeft}, ${t.marginTop})`,
                      role: "presentation",
                      children: l,
                    }),
                    (0, f.jsx)("rect", {
                      x: 0,
                      y: 0,
                      width: t.width,
                      height: t.height,
                      fill: "transparent",
                      onMouseMove: r,
                      onTouchMove: n,
                      onMouseOut: s,
                      onTouchEnd: a,
                      role: "presentation",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        C = (e) => {
          let {
            data: t,
            accessibleLabel: r,
            keyAccessor: s,
            xAccessor: a,
            yAccessor: o,
            colorAccessor: l,
            onFocus: i,
            onBlur: c,
            ...d
          } = e;
          return (0, f.jsx)("g", {
            tabIndex: 0,
            role: "list",
            "aria-label": "Measurement points",
            children:
              null === t || void 0 === t
                ? void 0
                : t.map((e, t) =>
                    (0, n.createElement)("circle", {
                      ...d,
                      "aria-label": r(e),
                      key: s(e, t),
                      cx: a(e),
                      cy: o(e),
                      r: 4,
                      role: "listitem",
                      style: { fill: l(e) },
                      tabIndex: 0,
                      onFocus: (t) => i(t, e),
                      onBlur: c,
                    }),
                  ),
          });
        },
        P = (e) => {
          let {
            datum: t,
            xAccessor: r,
            yAccessor: n,
            colorAccessor: s,
            ...a
          } = e;
          return (0, f.jsx)("circle", {
            ...a,
            role: "presentation",
            cx: r(t),
            cy: n(t),
            r: 8,
            style: { fill: s(t), opacity: 0.5 },
          });
        };
      var E = r(5105),
        M = r(8710);
      const T = (e) => {
          let {
            type: t,
            data: r,
            xAccessor: n,
            yAccessor: s,
            y0Accessor: a,
            colorAccessor: o = "#9880C2",
            interpolation: l,
            ...i
          } = e;
          const c =
              "line" === t
                ? (0, E.A)().x(n).y(s).curve(l)
                : (0, M.A)().x(n).y(s).y0(a).y1(s).curve(l),
            d =
              "area" === t
                ? { fill: o, strokeWidth: 0 }
                : {
                    fill: "none",
                    stroke: o,
                    strokeWidth: "3px",
                    strokeLinecap: "round",
                  };
          return (0, f.jsx)("path", {
            ...i,
            style: d,
            d: c(r),
            role: "presentation",
          });
        },
        w = (e) => {
          let {
            dimensions: t,
            translateX: r,
            translateY: n,
            children: s,
            ...a
          } = e;
          const o = r - 120 < 0,
            l = r + 120 > t.width,
            i = {
              backgroundColor: "#fff",
              border: "2px solid #E2E0E5",
              borderRadius: "4px",
              color: "var(--coolgrey-1000)",
              padding: "8px 16px",
              pointerEvents: "none",
              position: "absolute",
              textAlign: "center",
              transition: "transform 0.1s ease-in-out 0s",
              transform: `translate(\n      calc(${o ? "0%" : l ? "-100%" : "-50%"} + ${r}px),\n      calc(-100% + ${n}px)\n    )`,
            };
          return (0, f.jsx)("div", {
            style: i,
            "aria-hidden": !0,
            children: s,
          });
        },
        L = (e) => {
          let { x1: t, y1: r, x2: n, y2: s, stroke: a } = e;
          return (0, f.jsx)("line", {
            x1: t,
            y1: r,
            x2: n,
            y2: s,
            fill: "none",
            stroke: a,
            role: "presentation",
          });
        },
        F = 8,
        W = 4,
        I = function (e) {
          return arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            ? e.markedCorrect && !e.attemptPeak
              ? (0, f.jsx)("span", {
                  style: {
                    backgroundColor: "transparent",
                    borderBottom: "2px solid transparent",
                  },
                  role: "img",
                  "aria-label": " correct",
                  children: "\xa0\ud83d\udc4f",
                })
              : null
            : e.markedCorrect && !e.attemptPeak
              ? ", correct!"
              : "";
        };
      function R(e) {
        let { data: t } = e;
        const [r, h] = (0, n.useState)(null),
          [b, A] = u({
            marginTop: 24,
            marginRight: 96,
            marginBottom: 36,
            marginLeft: 8,
          });
        (0, n.useEffect)(() => {
          s.Ay.event({
            category: "CompletedLessonWithChart",
            action: "CompletedLessonWithChart",
            label: "CompletedLessonWithChart",
          });
        }, []);
        const v = (0, n.useCallback)((e) => e.elapsedTime, []),
          E = (0, n.useCallback)((e) => e.wordsPerMinute, []),
          M = (e) =>
            "materialIndex" in e && e.materialIndex < 4
              ? "#868091"
              : e.attemptPeak
                ? e.markedCorrect
                  ? "#CD840E"
                  : "#E17547"
                : e.markedCorrect
                  ? "#9880C2"
                  : "#E26F99",
          R = (0, n.useCallback)(
            null === t
              ? null
              : (0, c.A)()
                  .domain([
                    1e3 * Math.floor((0, a.A)(t.dataPoints, v) / 1e3),
                    1e3 * Math.ceil((0, o.A)(t.dataPoints, v) / 1e3),
                  ])
                  .range([0, A.boundedWidth]),
            [t.dataPoints, v, A],
          ),
          N = 1.2 * (0, o.A)(t.dataPoints, E),
          O = (0, n.useCallback)(
            null === t
              ? null
              : (0, c.A)()
                  .domain([
                    0,
                    ((e) =>
                      e < 60
                        ? 60
                        : e < 100
                          ? 100
                          : e < 200
                            ? 200
                            : e < 300
                              ? 300
                              : 400)(N),
                  ])
                  .range([A.boundedHeight, 0])
                  .nice(),
            [A, N],
          ),
          S = (0, n.useCallback)((e) => R(v(e)), [v, R]),
          B = (0, n.useCallback)((e) => O(E(e)), [E, O]),
          G = (0, n.useCallback)(null === t ? null : O(O.domain()[0]), [t, O]),
          H = 8 * t.dataPoints.length > A.boundedWidth,
          z = (0, l.A)((e) => v(e)),
          Y = (e) => {
            try {
              var r;
              const n =
                  (null === (r = (0, d.A)(e)) || void 0 === r
                    ? void 0
                    : r[0]) || 0 - A.marginLeft,
                s = R.invert(n),
                a = z.center(t.dataPoints, s),
                o = t.dataPoints[a];
              h(o);
            } catch (n) {
              console.error(n);
            }
          },
          _ = () => {
            h(null);
          };
        return (0, f.jsxs)("div", {
          className: "mt3 mb1 relative",
          style: { height: "240px" },
          ref: b,
          children: [
            (0, f.jsx)("div", {
              className: "chart-logo-lockup absolute bg-white mb0 pointer-none",
              children: (0, f.jsxs)("p", {
                className: "flex items-end pr1 mb0",
                children: [
                  (0, f.jsx)(g.A, {
                    iconSVGImport: p.A,
                    color: "currentColor",
                    width: "1.25em",
                    height: "1.25em",
                    className: "icon mr1",
                    style: { transform: "translateY(-0.333333em)" },
                  }),
                  (0, f.jsx)("span", {
                    className: "heading-link__logo-text",
                    "aria-hidden": !0,
                    children: "Typey\xa0Type",
                  }),
                ],
              }),
            }),
            null === r
              ? null
              : (0, f.jsx)(y.A, {
                  relative: !0,
                  vanish: !0,
                  children: (0, f.jsxs)(w, {
                    dimensions: A,
                    translateX: S(r) + A.marginLeft,
                    translateY: Math.max(B(r) + A.marginTop - F, -F),
                    children: [
                      (0, f.jsxs)("p", {
                        className: "mw-240 mb0 mt1 flex",
                        children: [
                          (0, f.jsx)("span", {
                            className: "current-phrase-material truncate px05",
                            children: ((X = r), X.material),
                          }),
                          I(r, !0),
                        ],
                      }),
                      (0, f.jsxs)("p", {
                        className: "mw-240 mb1 flex",
                        children: [
                          (0, f.jsx)("span", {
                            className: "truncate px05 bg-info",
                            style: {
                              backgroundColor: ((e) =>
                                e.attemptPeak
                                  ? e.markedCorrect
                                    ? "#FCF5E9"
                                    : "#FAEFEA"
                                  : e.markedCorrect
                                    ? "#F1EEF6"
                                    : "#FAEBF0")(r),
                              borderBottom: `2px solid ${M(r)}`,
                            },
                            children: r.typedText.replace(/^ $/, "\xa0"),
                          }),
                          I(r, !0),
                        ],
                      }),
                      (0, f.jsxs)("p", {
                        className: "mb0",
                        children: [
                          "materialIndex" in r && r.materialIndex < 4
                            ? "~"
                            : "",
                          (0, i.GP)(",d")(E(r)),
                          " WPM",
                          r.hintWasShown
                            ? (0, f.jsx)("span", {
                                "aria-label": "(hinted)",
                                role: "img",
                                children: "\xa0\u2139\ufe0f",
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                }),
            (0, f.jsx)($, {
              dimensions: A,
              onMouseMove: Y,
              onTouchMove: Y,
              onMouseOut: _,
              onTouchEnd: _,
              accessibleTitle: "Line chart of your typing speed over time",
              children:
                null === t
                  ? null
                  : (0, f.jsxs)(f.Fragment, {
                      children: [
                        (0, f.jsx)(k, {
                          dimension: "y",
                          dimensions: A,
                          scale: O,
                          numberOfTicks: 4,
                          gridLines: !0,
                        }),
                        (0, f.jsx)("g", {
                          role: "presentation",
                          transform: `translate(0, ${A.boundedHeight})`,
                          children: (0, f.jsx)(j, {
                            scaleRange: R.range(),
                            tickSize: W,
                          }),
                        }),
                        (0, f.jsx)(T, {
                          type: "line",
                          data: t.dataPoints.filter((e) => !e.attemptPeak),
                          xAccessor: S,
                          yAccessor: B,
                          y0Accessor: G,
                          interpolation: m.G,
                          colorAccessor: "#9880C2",
                        }),
                        (0, f.jsx)(T, {
                          type: "area",
                          data: t.dataPoints.filter((e) => !e.attemptPeak),
                          xAccessor: S,
                          yAccessor: B,
                          y0Accessor: G,
                          interpolation: m.G,
                          colorAccessor: "rgba(60%, 50%, 76%, 0.2)",
                        }),
                        (0, f.jsx)(T, {
                          type: "line",
                          data: t.dataPoints.filter(
                            (e) =>
                              !e.attemptPeak &&
                              "materialIndex" in e &&
                              e.materialIndex < 4,
                          ),
                          xAccessor: S,
                          yAccessor: B,
                          y0Accessor: G,
                          interpolation: m.G,
                          colorAccessor: "#868091",
                        }),
                        H
                          ? t.dataPoints
                              .filter(
                                (e) =>
                                  !e.attemptPeak &&
                                  !(
                                    "materialIndex" in e && e.materialIndex < 4
                                  ) &&
                                  !e.markedCorrect,
                              )
                              .map((e) =>
                                (0, f.jsx)(
                                  L,
                                  {
                                    x1: S(e),
                                    y1: B(e) - 8,
                                    x2: S(e),
                                    y2: B(e) + 8,
                                    stroke: M(e),
                                  },
                                  e.materialIndex,
                                ),
                              )
                          : (0, f.jsx)(C, {
                              data: t.dataPoints,
                              accessibleLabel: (e) => {
                                const t = `${(0, i.GP)(",d")(E(e))} WPM`,
                                  r =
                                    "" + (e.hintWasShown ? " (hinted). " : "");
                                return e.markedCorrect
                                  ? `${e.material}: ${t}${I(e)}${r}`
                                  : e.material === e.typedText
                                    ? `${e.material}: ${t}${I(e)}. ${r}`
                                    : `${e.material}: ${t}${I(e)}; you typed: ${e.typedText}. ${r}`;
                              },
                              keyAccessor: (e, t) => t,
                              xAccessor: S,
                              yAccessor: B,
                              colorAccessor: M,
                              onFocus: (e, t) => {
                                h(t || null);
                              },
                              onBlur: _,
                            }),
                        null === r
                          ? null
                          : (0, f.jsx)(P, {
                              datum: r,
                              xAccessor: S,
                              yAccessor: B,
                              colorAccessor: M,
                            }),
                        (0, f.jsxs)("text", {
                          textAnchor: "start",
                          transform: `translate(0, ${A.boundedHeight})`,
                          dy: "1.5em",
                          children: [
                            (0, f.jsx)("tspan", {
                              role: "img",
                              "aria-label": "Start time",
                              children: "\u23f1",
                            }),
                            " ",
                            (0, x.z)(R.domain()[0]),
                          ],
                        }),
                        (0, f.jsxs)("text", {
                          textAnchor: "end",
                          transform: `translate(${R.range()[1]}, ${A.boundedHeight})`,
                          dy: "1.5em",
                          children: [
                            (0, x.z)(R.domain()[1]),
                            " ",
                            (0, f.jsx)("tspan", {
                              role: "img",
                              "aria-label": "Finished time",
                              children: "\u23f1",
                            }),
                          ],
                        }),
                      ],
                    }),
            }),
          ],
        });
        var X;
      }
    },
  },
]);
//# sourceMappingURL=378.24e13ff4.chunk.js.map
