"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [598],
  {
    6537: (t, n, e) => {
      function r(t, n) {
        return null == t || null == n
          ? NaN
          : t < n
            ? -1
            : t > n
              ? 1
              : t >= n
                ? 0
                : NaN;
      }
      e.d(n, { A: () => r });
    },
    5562: (t, n, e) => {
      e.d(n, { A: () => o });
      var r = e(6537);
      function i(t, n) {
        return null == t || null == n
          ? NaN
          : n < t
            ? -1
            : n > t
              ? 1
              : n >= t
                ? 0
                : NaN;
      }
      function o(t) {
        let n, e, o;
        function u(t, r) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : t.length;
          if (i < o) {
            if (0 !== n(r, r)) return o;
            do {
              const n = (i + o) >>> 1;
              e(t[n], r) < 0 ? (i = n + 1) : (o = n);
            } while (i < o);
          }
          return i;
        }
        return (
          2 !== t.length
            ? ((n = r.A),
              (e = (n, e) => (0, r.A)(t(n), e)),
              (o = (n, e) => t(n) - e))
            : ((n = t === r.A || t === i ? t : a), (e = t), (o = t)),
          {
            left: u,
            center: function (t, n) {
              let e =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
              const r = u(
                t,
                n,
                e,
                (arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : t.length) - 1,
              );
              return r > e && o(t[r - 1], n) > -o(t[r], n) ? r - 1 : r;
            },
            right: function (t, r) {
              let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                o =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : t.length;
              if (i < o) {
                if (0 !== n(r, r)) return o;
                do {
                  const n = (i + o) >>> 1;
                  e(t[n], r) <= 0 ? (i = n + 1) : (o = n);
                } while (i < o);
              }
              return i;
            },
          }
        );
      }
      function a() {
        return 0;
      }
    },
    5069: (t, n, e) => {
      function r(t, n) {
        let e;
        if (void 0 === n)
          for (const r of t)
            null != r && (e < r || (void 0 === e && r >= r)) && (e = r);
        else {
          let r = -1;
          for (let i of t)
            null != (i = n(i, ++r, t)) &&
              (e < i || (void 0 === e && i >= i)) &&
              (e = i);
        }
        return e;
      }
      e.d(n, { A: () => r });
    },
    231: (t, n, e) => {
      function r(t, n) {
        let e;
        if (void 0 === n)
          for (const r of t)
            null != r && (e > r || (void 0 === e && r >= r)) && (e = r);
        else {
          let r = -1;
          for (let i of t)
            null != (i = n(i, ++r, t)) &&
              (e > i || (void 0 === e && i >= i)) &&
              (e = i);
        }
        return e;
      }
      e.d(n, { A: () => r });
    },
    9211: (t, n, e) => {
      e.d(n, { GP: () => c, s: () => f });
      var r = e(916);
      var i = e(962);
      var o,
        a = e(7109);
      function u(t, n) {
        var e = (0, a.f)(t, n);
        if (!e) return t + "";
        var r = e[0],
          i = e[1];
        return i < 0
          ? "0." + new Array(-i).join("0") + r
          : r.length > i + 1
            ? r.slice(0, i + 1) + "." + r.slice(i + 1)
            : r + new Array(i - r.length + 2).join("0");
      }
      const s = {
        "%": (t, n) => (100 * t).toFixed(n),
        b: (t) => Math.round(t).toString(2),
        c: (t) => t + "",
        d: a.A,
        e: (t, n) => t.toExponential(n),
        f: (t, n) => t.toFixed(n),
        g: (t, n) => t.toPrecision(n),
        o: (t) => Math.round(t).toString(8),
        p: (t, n) => u(100 * t, n),
        r: u,
        s: function (t, n) {
          var e = (0, a.f)(t, n);
          if (!e) return t + "";
          var r = e[0],
            i = e[1],
            u = i - (o = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
            s = r.length;
          return u === s
            ? r
            : u > s
              ? r + new Array(u - s + 1).join("0")
              : u > 0
                ? r.slice(0, u) + "." + r.slice(u)
                : "0." +
                  new Array(1 - u).join("0") +
                  (0, a.f)(t, Math.max(0, n + u - 1))[0];
        },
        X: (t) => Math.round(t).toString(16).toUpperCase(),
        x: (t) => Math.round(t).toString(16),
      };
      function l(t) {
        return t;
      }
      var h,
        c,
        f,
        g = Array.prototype.map,
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
      function d(t) {
        var n,
          e,
          a =
            void 0 === t.grouping || void 0 === t.thousands
              ? l
              : ((n = g.call(t.grouping, Number)),
                (e = t.thousands + ""),
                function (t, r) {
                  for (
                    var i = t.length, o = [], a = 0, u = n[0], s = 0;
                    i > 0 &&
                    u > 0 &&
                    (s + u + 1 > r && (u = Math.max(1, r - s)),
                    o.push(t.substring((i -= u), i + u)),
                    !((s += u + 1) > r));

                  )
                    u = n[(a = (a + 1) % n.length)];
                  return o.reverse().join(e);
                }),
          u = void 0 === t.currency ? "" : t.currency[0] + "",
          h = void 0 === t.currency ? "" : t.currency[1] + "",
          c = void 0 === t.decimal ? "." : t.decimal + "",
          f =
            void 0 === t.numerals
              ? l
              : (function (t) {
                  return function (n) {
                    return n.replace(/[0-9]/g, function (n) {
                      return t[+n];
                    });
                  };
                })(g.call(t.numerals, String)),
          d = void 0 === t.percent ? "%" : t.percent + "",
          y = void 0 === t.minus ? "\u2212" : t.minus + "",
          v = void 0 === t.nan ? "NaN" : t.nan + "";
        function m(t) {
          var n = (t = (0, i.A)(t)).fill,
            e = t.align,
            r = t.sign,
            l = t.symbol,
            g = t.zero,
            m = t.width,
            _ = t.comma,
            b = t.precision,
            x = t.trim,
            w = t.type;
          "n" === w
            ? ((_ = !0), (w = "g"))
            : s[w] || (void 0 === b && (b = 12), (x = !0), (w = "g")),
            (g || ("0" === n && "=" === e)) && ((g = !0), (n = "0"), (e = "="));
          var M =
              "$" === l
                ? u
                : "#" === l && /[boxX]/.test(w)
                  ? "0" + w.toLowerCase()
                  : "",
            $ = "$" === l ? h : /[%p]/.test(w) ? d : "",
            A = s[w],
            N = /[defgprs%]/.test(w);
          function k(t) {
            var i,
              u,
              s,
              l = M,
              h = $;
            if ("c" === w) (h = A(t) + h), (t = "");
            else {
              var d = (t = +t) < 0 || 1 / t < 0;
              if (
                ((t = isNaN(t) ? v : A(Math.abs(t), b)),
                x &&
                  (t = (function (t) {
                    t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                      switch (t[r]) {
                        case ".":
                          i = n = r;
                          break;
                        case "0":
                          0 === i && (i = r), (n = r);
                          break;
                        default:
                          if (!+t[r]) break t;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
                  })(t)),
                d && 0 === +t && "+" !== r && (d = !1),
                (l =
                  (d ? ("(" === r ? r : y) : "-" === r || "(" === r ? "" : r) +
                  l),
                (h =
                  ("s" === w ? p[8 + o / 3] : "") +
                  h +
                  (d && "(" === r ? ")" : "")),
                N)
              )
                for (i = -1, u = t.length; ++i < u; )
                  if (48 > (s = t.charCodeAt(i)) || s > 57) {
                    (h = (46 === s ? c + t.slice(i + 1) : t.slice(i)) + h),
                      (t = t.slice(0, i));
                    break;
                  }
            }
            _ && !g && (t = a(t, 1 / 0));
            var k = l.length + t.length + h.length,
              E = k < m ? new Array(m - k + 1).join(n) : "";
            switch (
              (_ &&
                g &&
                ((t = a(E + t, E.length ? m - h.length : 1 / 0)), (E = "")),
              e)
            ) {
              case "<":
                t = l + t + h + E;
                break;
              case "=":
                t = l + E + t + h;
                break;
              case "^":
                t = E.slice(0, (k = E.length >> 1)) + l + t + h + E.slice(k);
                break;
              default:
                t = E + l + t + h;
            }
            return f(t);
          }
          return (
            (b =
              void 0 === b
                ? 6
                : /[gprs]/.test(w)
                  ? Math.max(1, Math.min(21, b))
                  : Math.max(0, Math.min(20, b))),
            (k.toString = function () {
              return t + "";
            }),
            k
          );
        }
        return {
          format: m,
          formatPrefix: function (t, n) {
            var e = m((((t = (0, i.A)(t)).type = "f"), t)),
              o = 3 * Math.max(-8, Math.min(8, Math.floor((0, r.A)(n) / 3))),
              a = Math.pow(10, -o),
              u = p[8 + o / 3];
            return function (t) {
              return e(a * t) + u;
            };
          },
        };
      }
      (h = d({ thousands: ",", grouping: [3], currency: ["$", ""] })),
        (c = h.format),
        (f = h.formatPrefix);
    },
    916: (t, n, e) => {
      e.d(n, { A: () => i });
      var r = e(7109);
      function i(t) {
        return (t = (0, r.f)(Math.abs(t))) ? t[1] : NaN;
      }
    },
    7109: (t, n, e) => {
      function r(t) {
        return Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString("en").replace(/,/g, "")
          : t.toString(10);
      }
      function i(t, n) {
        if (
          (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
            "e",
          )) < 0
        )
          return null;
        var e,
          r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
      }
      e.d(n, { A: () => r, f: () => i });
    },
    962: (t, n, e) => {
      e.d(n, { A: () => i });
      var r =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function i(t) {
        if (!(n = r.exec(t))) throw new Error("invalid format: " + t);
        var n;
        return new o({
          fill: n[1],
          align: n[2],
          sign: n[3],
          symbol: n[4],
          zero: n[5],
          width: n[6],
          comma: n[7],
          precision: n[8] && n[8].slice(1),
          trim: n[9],
          type: n[10],
        });
      }
      function o(t) {
        (this.fill = void 0 === t.fill ? " " : t.fill + ""),
          (this.align = void 0 === t.align ? ">" : t.align + ""),
          (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
          (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
          (this.zero = !!t.zero),
          (this.width = void 0 === t.width ? void 0 : +t.width),
          (this.comma = !!t.comma),
          (this.precision = void 0 === t.precision ? void 0 : +t.precision),
          (this.trim = !!t.trim),
          (this.type = void 0 === t.type ? "" : t.type + "");
      }
      (i.prototype = o.prototype),
        (o.prototype.toString = function () {
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
    9525: (t, n, e) => {
      e.d(n, { A: () => Mt });
      const r = Math.sqrt(50),
        i = Math.sqrt(10),
        o = Math.sqrt(2);
      function a(t, n, e) {
        const u = (n - t) / Math.max(0, e),
          s = Math.floor(Math.log10(u)),
          l = u / Math.pow(10, s),
          h = l >= r ? 10 : l >= i ? 5 : l >= o ? 2 : 1;
        let c, f, g;
        return (
          s < 0
            ? ((g = Math.pow(10, -s) / h),
              (c = Math.round(t * g)),
              (f = Math.round(n * g)),
              c / g < t && ++c,
              f / g > n && --f,
              (g = -g))
            : ((g = Math.pow(10, s) * h),
              (c = Math.round(t / g)),
              (f = Math.round(n / g)),
              c * g < t && ++c,
              f * g > n && --f),
          f < c && 0.5 <= e && e < 2 ? a(t, n, 2 * e) : [c, f, g]
        );
      }
      function u(t, n, e) {
        return a((t = +t), (n = +n), (e = +e))[2];
      }
      var s = e(6537),
        l = e(5562);
      const h = (0, l.A)(s.A),
        c = h.right,
        f =
          (h.left,
          (0, l.A)(function (t) {
            return null === t ? NaN : +t;
          }).center,
          c);
      function g(t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
      }
      function p(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e;
      }
      function d() {}
      var y = 0.7,
        v = 1 / y,
        m = "\\s*([+-]?\\d+)\\s*",
        _ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        b = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        x = /^#([0-9a-f]{3,8})$/,
        w = new RegExp(`^rgb\\(${m},${m},${m}\\)$`),
        M = new RegExp(`^rgb\\(${b},${b},${b}\\)$`),
        $ = new RegExp(`^rgba\\(${m},${m},${m},${_}\\)$`),
        A = new RegExp(`^rgba\\(${b},${b},${b},${_}\\)$`),
        N = new RegExp(`^hsl\\(${_},${b},${b}\\)$`),
        k = new RegExp(`^hsla\\(${_},${b},${b},${_}\\)$`),
        E = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function S() {
        return this.rgb().formatHex();
      }
      function T() {
        return this.rgb().formatRgb();
      }
      function q(t) {
        var n, e;
        return (
          (t = (t + "").trim().toLowerCase()),
          (n = x.exec(t))
            ? ((e = n[1].length),
              (n = parseInt(n[1], 16)),
              6 === e
                ? C(n)
                : 3 === e
                  ? new R(
                      ((n >> 8) & 15) | ((n >> 4) & 240),
                      ((n >> 4) & 15) | (240 & n),
                      ((15 & n) << 4) | (15 & n),
                      1,
                    )
                  : 8 === e
                    ? P(
                        (n >> 24) & 255,
                        (n >> 16) & 255,
                        (n >> 8) & 255,
                        (255 & n) / 255,
                      )
                    : 4 === e
                      ? P(
                          ((n >> 12) & 15) | ((n >> 8) & 240),
                          ((n >> 8) & 15) | ((n >> 4) & 240),
                          ((n >> 4) & 15) | (240 & n),
                          (((15 & n) << 4) | (15 & n)) / 255,
                        )
                      : null)
            : (n = w.exec(t))
              ? new R(n[1], n[2], n[3], 1)
              : (n = M.exec(t))
                ? new R(
                    (255 * n[1]) / 100,
                    (255 * n[2]) / 100,
                    (255 * n[3]) / 100,
                    1,
                  )
                : (n = $.exec(t))
                  ? P(n[1], n[2], n[3], n[4])
                  : (n = A.exec(t))
                    ? P(
                        (255 * n[1]) / 100,
                        (255 * n[2]) / 100,
                        (255 * n[3]) / 100,
                        n[4],
                      )
                    : (n = N.exec(t))
                      ? O(n[1], n[2] / 100, n[3] / 100, 1)
                      : (n = k.exec(t))
                        ? O(n[1], n[2] / 100, n[3] / 100, n[4])
                        : E.hasOwnProperty(t)
                          ? C(E[t])
                          : "transparent" === t
                            ? new R(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function C(t) {
        return new R((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function P(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
      }
      function j(t, n, e, r) {
        return 1 === arguments.length
          ? ((i = t) instanceof d || (i = q(i)),
            i ? new R((i = i.rgb()).r, i.g, i.b, i.opacity) : new R())
          : new R(t, n, e, null == r ? 1 : r);
        var i;
      }
      function R(t, n, e, r) {
        (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
      }
      function z() {
        return `#${X(this.r)}${X(this.g)}${X(this.b)}`;
      }
      function H() {
        const t = L(this.opacity);
        return `${1 === t ? "rgb(" : "rgba("}${G(this.r)}, ${G(this.g)}, ${G(this.b)}${1 === t ? ")" : `, ${t})`}`;
      }
      function L(t) {
        return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
      }
      function G(t) {
        return Math.max(0, Math.min(255, Math.round(t) || 0));
      }
      function X(t) {
        return ((t = G(t)) < 16 ? "0" : "") + t.toString(16);
      }
      function O(t, n, e, r) {
        return (
          r <= 0
            ? (t = n = e = NaN)
            : e <= 0 || e >= 1
              ? (t = n = NaN)
              : n <= 0 && (t = NaN),
          new I(t, n, e, r)
        );
      }
      function Y(t) {
        if (t instanceof I) return new I(t.h, t.s, t.l, t.opacity);
        if ((t instanceof d || (t = q(t)), !t)) return new I();
        if (t instanceof I) return t;
        var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          a = NaN,
          u = o - i,
          s = (o + i) / 2;
        return (
          u
            ? ((a =
                n === o
                  ? (e - r) / u + 6 * (e < r)
                  : e === o
                    ? (r - n) / u + 2
                    : (n - e) / u + 4),
              (u /= s < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (u = s > 0 && s < 1 ? 0 : a),
          new I(a, u, s, t.opacity)
        );
      }
      function I(t, n, e, r) {
        (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
      }
      function V(t) {
        return (t = (t || 0) % 360) < 0 ? t + 360 : t;
      }
      function B(t) {
        return Math.max(0, Math.min(1, t || 0));
      }
      function D(t, n, e) {
        return (
          255 *
          (t < 60
            ? n + ((e - n) * t) / 60
            : t < 180
              ? e
              : t < 240
                ? n + ((e - n) * (240 - t)) / 60
                : n)
        );
      }
      function F(t, n, e, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * n +
            (4 - 6 * o + 3 * a) * e +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      g(d, q, {
        copy(t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: S,
        formatHex: S,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return Y(this).formatHsl();
        },
        formatRgb: T,
        toString: T,
      }),
        g(
          R,
          j,
          p(d, {
            brighter(t) {
              return (
                (t = null == t ? v : Math.pow(v, t)),
                new R(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? y : Math.pow(y, t)),
                new R(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new R(G(this.r), G(this.g), G(this.b), L(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: z,
            formatHex: z,
            formatHex8: function () {
              return `#${X(this.r)}${X(this.g)}${X(this.b)}${X(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
            },
            formatRgb: H,
            toString: H,
          }),
        ),
        g(
          I,
          function (t, n, e, r) {
            return 1 === arguments.length
              ? Y(t)
              : new I(t, n, e, null == r ? 1 : r);
          },
          p(d, {
            brighter(t) {
              return (
                (t = null == t ? v : Math.pow(v, t)),
                new I(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker(t) {
              return (
                (t = null == t ? y : Math.pow(y, t)),
                new I(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb() {
              var t = (this.h % 360) + 360 * (this.h < 0),
                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                e = this.l,
                r = e + (e < 0.5 ? e : 1 - e) * n,
                i = 2 * e - r;
              return new R(
                D(t >= 240 ? t - 240 : t + 120, i, r),
                D(t, i, r),
                D(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity,
              );
            },
            clamp() {
              return new I(V(this.h), B(this.s), B(this.l), L(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const t = L(this.opacity);
              return `${1 === t ? "hsl(" : "hsla("}${V(this.h)}, ${100 * B(this.s)}%, ${100 * B(this.l)}%${1 === t ? ")" : `, ${t})`}`;
            },
          }),
        );
      const Z = (t) => () => t;
      function Q(t, n) {
        return function (e) {
          return t + e * n;
        };
      }
      function U(t) {
        return 1 === (t = +t)
          ? J
          : function (n, e) {
              return e - n
                ? (function (t, n, e) {
                    return (
                      (t = Math.pow(t, e)),
                      (n = Math.pow(n, e) - t),
                      (e = 1 / e),
                      function (r) {
                        return Math.pow(t + r * n, e);
                      }
                    );
                  })(n, e, t)
                : Z(isNaN(n) ? e : n);
            };
      }
      function J(t, n) {
        var e = n - t;
        return e ? Q(t, e) : Z(isNaN(t) ? n : t);
      }
      const K = (function t(n) {
        var e = U(n);
        function r(t, n) {
          var r = e((t = j(t)).r, (n = j(n)).r),
            i = e(t.g, n.g),
            o = e(t.b, n.b),
            a = J(t.opacity, n.opacity);
          return function (n) {
            return (
              (t.r = r(n)),
              (t.g = i(n)),
              (t.b = o(n)),
              (t.opacity = a(n)),
              t + ""
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function W(t) {
        return function (n) {
          var e,
            r,
            i = n.length,
            o = new Array(i),
            a = new Array(i),
            u = new Array(i);
          for (e = 0; e < i; ++e)
            (r = j(n[e])),
              (o[e] = r.r || 0),
              (a[e] = r.g || 0),
              (u[e] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (u = t(u)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = u(t)), r + "";
            }
          );
        };
      }
      W(function (t) {
        var n = t.length - 1;
        return function (e) {
          var r =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            i = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * i - o,
            u = r < n - 1 ? t[r + 2] : 2 * o - i;
          return F((e - r / n) * n, a, i, o, u);
        };
      }),
        W(function (t) {
          var n = t.length;
          return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
              i = t[(r + n - 1) % n],
              o = t[r % n],
              a = t[(r + 1) % n],
              u = t[(r + 2) % n];
            return F((e - r / n) * n, i, o, a, u);
          };
        });
      function tt(t, n) {
        var e,
          r = n ? n.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          a = new Array(r);
        for (e = 0; e < i; ++e) o[e] = st(t[e], n[e]);
        for (; e < r; ++e) a[e] = n[e];
        return function (t) {
          for (e = 0; e < i; ++e) a[e] = o[e](t);
          return a;
        };
      }
      function nt(t, n) {
        var e = new Date();
        return (
          (t = +t),
          (n = +n),
          function (r) {
            return e.setTime(t * (1 - r) + n * r), e;
          }
        );
      }
      function et(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return t * (1 - e) + n * e;
          }
        );
      }
      function rt(t, n) {
        var e,
          r = {},
          i = {};
        for (e in ((null !== t && "object" === typeof t) || (t = {}),
        (null !== n && "object" === typeof n) || (n = {}),
        n))
          e in t ? (r[e] = st(t[e], n[e])) : (i[e] = n[e]);
        return function (t) {
          for (e in r) i[e] = r[e](t);
          return i;
        };
      }
      var it = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        ot = new RegExp(it.source, "g");
      function at(t, n) {
        var e,
          r,
          i,
          o = (it.lastIndex = ot.lastIndex = 0),
          a = -1,
          u = [],
          s = [];
        for (t += "", n += ""; (e = it.exec(t)) && (r = ot.exec(n)); )
          (i = r.index) > o &&
            ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
            (e = e[0]) === (r = r[0])
              ? u[a]
                ? (u[a] += r)
                : (u[++a] = r)
              : ((u[++a] = null), s.push({ i: a, x: et(e, r) })),
            (o = ot.lastIndex);
        return (
          o < n.length && ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
          u.length < 2
            ? s[0]
              ? (function (t) {
                  return function (n) {
                    return t(n) + "";
                  };
                })(s[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(n)
            : ((n = s.length),
              function (t) {
                for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t);
                return u.join("");
              })
        );
      }
      function ut(t, n) {
        n || (n = []);
        var e,
          r = t ? Math.min(n.length, t.length) : 0,
          i = n.slice();
        return function (o) {
          for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
          return i;
        };
      }
      function st(t, n) {
        var e,
          r,
          i = typeof n;
        return null == n || "boolean" === i
          ? Z(n)
          : ("number" === i
              ? et
              : "string" === i
                ? (e = q(n))
                  ? ((n = e), K)
                  : at
                : n instanceof q
                  ? K
                  : n instanceof Date
                    ? nt
                    : ((r = n),
                      !ArrayBuffer.isView(r) || r instanceof DataView
                        ? Array.isArray(n)
                          ? tt
                          : ("function" !== typeof n.valueOf &&
                                "function" !== typeof n.toString) ||
                              isNaN(n)
                            ? rt
                            : et
                        : ut))(t, n);
      }
      function lt(t, n) {
        return (
          (t = +t),
          (n = +n),
          function (e) {
            return Math.round(t * (1 - e) + n * e);
          }
        );
      }
      function ht(t) {
        return +t;
      }
      var ct = [0, 1];
      function ft(t) {
        return t;
      }
      function gt(t, n) {
        return (n -= t = +t)
          ? function (e) {
              return (e - t) / n;
            }
          : ((e = isNaN(n) ? NaN : 0.5),
            function () {
              return e;
            });
        var e;
      }
      function pt(t, n, e) {
        var r = t[0],
          i = t[1],
          o = n[0],
          a = n[1];
        return (
          i < r
            ? ((r = gt(i, r)), (o = e(a, o)))
            : ((r = gt(r, i)), (o = e(o, a))),
          function (t) {
            return o(r(t));
          }
        );
      }
      function dt(t, n, e) {
        var r = Math.min(t.length, n.length) - 1,
          i = new Array(r),
          o = new Array(r),
          a = -1;
        for (
          t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
          ++a < r;

        )
          (i[a] = gt(t[a], t[a + 1])), (o[a] = e(n[a], n[a + 1]));
        return function (n) {
          var e = f(t, n, 1, r) - 1;
          return o[e](i[e](n));
        };
      }
      function yt() {
        var t,
          n,
          e,
          r,
          i,
          o,
          a = ct,
          u = ct,
          s = st,
          l = ft;
        function h() {
          var t = Math.min(a.length, u.length);
          return (
            l !== ft &&
              (l = (function (t, n) {
                var e;
                return (
                  t > n && ((e = t), (t = n), (n = e)),
                  function (e) {
                    return Math.max(t, Math.min(n, e));
                  }
                );
              })(a[0], a[t - 1])),
            (r = t > 2 ? dt : pt),
            (i = o = null),
            c
          );
        }
        function c(n) {
          return null == n || isNaN((n = +n))
            ? e
            : (i || (i = r(a.map(t), u, s)))(t(l(n)));
        }
        return (
          (c.invert = function (e) {
            return l(n((o || (o = r(u, a.map(t), et)))(e)));
          }),
          (c.domain = function (t) {
            return arguments.length
              ? ((a = Array.from(t, ht)), h())
              : a.slice();
          }),
          (c.range = function (t) {
            return arguments.length ? ((u = Array.from(t)), h()) : u.slice();
          }),
          (c.rangeRound = function (t) {
            return (u = Array.from(t)), (s = lt), h();
          }),
          (c.clamp = function (t) {
            return arguments.length ? ((l = !!t || ft), h()) : l !== ft;
          }),
          (c.interpolate = function (t) {
            return arguments.length ? ((s = t), h()) : s;
          }),
          (c.unknown = function (t) {
            return arguments.length ? ((e = t), c) : e;
          }),
          function (e, r) {
            return (t = e), (n = r), h();
          }
        );
      }
      function vt(t, n) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(t);
            break;
          default:
            this.range(n).domain(t);
        }
        return this;
      }
      var mt = e(962),
        _t = e(916);
      var bt = e(9211);
      function xt(t, n, e, r) {
        var i,
          o = (function (t, n, e) {
            e = +e;
            const r = (n = +n) < (t = +t),
              i = r ? u(n, t, e) : u(t, n, e);
            return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
          })(t, n, e);
        switch ((r = (0, mt.A)(null == r ? ",f" : r)).type) {
          case "s":
            var a = Math.max(Math.abs(t), Math.abs(n));
            return (
              null != r.precision ||
                isNaN(
                  (i = (function (t, n) {
                    return Math.max(
                      0,
                      3 *
                        Math.max(
                          -8,
                          Math.min(8, Math.floor((0, _t.A)(n) / 3)),
                        ) -
                        (0, _t.A)(Math.abs(t)),
                    );
                  })(o, a)),
                ) ||
                (r.precision = i),
              (0, bt.s)(r, a)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != r.precision ||
              isNaN(
                (i = (function (t, n) {
                  return (
                    (t = Math.abs(t)),
                    (n = Math.abs(n) - t),
                    Math.max(0, (0, _t.A)(n) - (0, _t.A)(t)) + 1
                  );
                })(o, Math.max(Math.abs(t), Math.abs(n)))),
              ) ||
              (r.precision = i - ("e" === r.type));
            break;
          case "f":
          case "%":
            null != r.precision ||
              isNaN(
                (i = (function (t) {
                  return Math.max(0, -(0, _t.A)(Math.abs(t)));
                })(o)),
              ) ||
              (r.precision = i - 2 * ("%" === r.type));
        }
        return (0, bt.GP)(r);
      }
      function wt(t) {
        var n = t.domain;
        return (
          (t.ticks = function (t) {
            var e = n();
            return (function (t, n, e) {
              if (!((e = +e) > 0)) return [];
              if ((t = +t) === (n = +n)) return [t];
              const r = n < t,
                [i, o, u] = r ? a(n, t, e) : a(t, n, e);
              if (!(o >= i)) return [];
              const s = o - i + 1,
                l = new Array(s);
              if (r)
                if (u < 0) for (let a = 0; a < s; ++a) l[a] = (o - a) / -u;
                else for (let a = 0; a < s; ++a) l[a] = (o - a) * u;
              else if (u < 0) for (let a = 0; a < s; ++a) l[a] = (i + a) / -u;
              else for (let a = 0; a < s; ++a) l[a] = (i + a) * u;
              return l;
            })(e[0], e[e.length - 1], null == t ? 10 : t);
          }),
          (t.tickFormat = function (t, e) {
            var r = n();
            return xt(r[0], r[r.length - 1], null == t ? 10 : t, e);
          }),
          (t.nice = function (e) {
            null == e && (e = 10);
            var r,
              i,
              o = n(),
              a = 0,
              s = o.length - 1,
              l = o[a],
              h = o[s],
              c = 10;
            for (
              h < l && ((i = l), (l = h), (h = i), (i = a), (a = s), (s = i));
              c-- > 0;

            ) {
              if ((i = u(l, h, e)) === r) return (o[a] = l), (o[s] = h), n(o);
              if (i > 0)
                (l = Math.floor(l / i) * i), (h = Math.ceil(h / i) * i);
              else {
                if (!(i < 0)) break;
                (l = Math.ceil(l * i) / i), (h = Math.floor(h * i) / i);
              }
              r = i;
            }
            return t;
          }),
          t
        );
      }
      function Mt() {
        var t = yt()(ft, ft);
        return (
          (t.copy = function () {
            return (
              (n = t),
              Mt()
                .domain(n.domain())
                .range(n.range())
                .interpolate(n.interpolate())
                .clamp(n.clamp())
                .unknown(n.unknown())
            );
            var n;
          }),
          vt.apply(t, arguments),
          wt(t)
        );
      }
    },
    202: (t, n, e) => {
      function r(t, n) {
        if (
          ((t = (function (t) {
            let n;
            for (; (n = t.sourceEvent); ) t = n;
            return t;
          })(t)),
          void 0 === n && (n = t.currentTarget),
          n)
        ) {
          var e = n.ownerSVGElement || n;
          if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return (
              (r.x = t.clientX),
              (r.y = t.clientY),
              [(r = r.matrixTransform(n.getScreenCTM().inverse())).x, r.y]
            );
          }
          if (n.getBoundingClientRect) {
            var i = n.getBoundingClientRect();
            return [
              t.clientX - i.left - n.clientLeft,
              t.clientY - i.top - n.clientTop,
            ];
          }
        }
        return [t.pageX, t.pageY];
      }
      e.d(n, { A: () => r });
    },
    8710: (t, n, e) => {
      e.d(n, { A: () => l });
      var r = e(6498),
        i = e(3711),
        o = e(5474),
        a = e(5105),
        u = e(8270),
        s = e(2661);
      function l(t, n, e) {
        var l = null,
          h = (0, i.A)(!0),
          c = null,
          f = o.A,
          g = null,
          p = (0, u.i)(d);
        function d(i) {
          var o,
            a,
            u,
            s,
            d,
            y = (i = (0, r.A)(i)).length,
            v = !1,
            m = new Array(y),
            _ = new Array(y);
          for (null == c && (g = f((d = p()))), o = 0; o <= y; ++o) {
            if (!(o < y && h((s = i[o]), o, i)) === v)
              if ((v = !v)) (a = o), g.areaStart(), g.lineStart();
              else {
                for (g.lineEnd(), g.lineStart(), u = o - 1; u >= a; --u)
                  g.point(m[u], _[u]);
                g.lineEnd(), g.areaEnd();
              }
            v &&
              ((m[o] = +t(s, o, i)),
              (_[o] = +n(s, o, i)),
              g.point(l ? +l(s, o, i) : m[o], e ? +e(s, o, i) : _[o]));
          }
          if (d) return (g = null), d + "" || null;
        }
        function y() {
          return (0, a.A)().defined(h).curve(f).context(c);
        }
        return (
          (t = "function" === typeof t ? t : void 0 === t ? s.x : (0, i.A)(+t)),
          (n =
            "function" === typeof n
              ? n
              : void 0 === n
                ? (0, i.A)(0)
                : (0, i.A)(+n)),
          (e = "function" === typeof e ? e : void 0 === e ? s.y : (0, i.A)(+e)),
          (d.x = function (n) {
            return arguments.length
              ? ((t = "function" === typeof n ? n : (0, i.A)(+n)),
                (l = null),
                d)
              : t;
          }),
          (d.x0 = function (n) {
            return arguments.length
              ? ((t = "function" === typeof n ? n : (0, i.A)(+n)), d)
              : t;
          }),
          (d.x1 = function (t) {
            return arguments.length
              ? ((l =
                  null == t
                    ? null
                    : "function" === typeof t
                      ? t
                      : (0, i.A)(+t)),
                d)
              : l;
          }),
          (d.y = function (t) {
            return arguments.length
              ? ((n = "function" === typeof t ? t : (0, i.A)(+t)),
                (e = null),
                d)
              : n;
          }),
          (d.y0 = function (t) {
            return arguments.length
              ? ((n = "function" === typeof t ? t : (0, i.A)(+t)), d)
              : n;
          }),
          (d.y1 = function (t) {
            return arguments.length
              ? ((e =
                  null == t
                    ? null
                    : "function" === typeof t
                      ? t
                      : (0, i.A)(+t)),
                d)
              : e;
          }),
          (d.lineX0 = d.lineY0 =
            function () {
              return y().x(t).y(n);
            }),
          (d.lineY1 = function () {
            return y().x(t).y(e);
          }),
          (d.lineX1 = function () {
            return y().x(l).y(n);
          }),
          (d.defined = function (t) {
            return arguments.length
              ? ((h = "function" === typeof t ? t : (0, i.A)(!!t)), d)
              : h;
          }),
          (d.curve = function (t) {
            return arguments.length ? ((f = t), null != c && (g = f(c)), d) : f;
          }),
          (d.context = function (t) {
            return arguments.length
              ? (null == t ? (c = g = null) : (g = f((c = t))), d)
              : c;
          }),
          d
        );
      }
    },
    6498: (t, n, e) => {
      e.d(n, { A: () => r });
      Array.prototype.slice;
      function r(t) {
        return "object" === typeof t && "length" in t ? t : Array.from(t);
      }
    },
    3711: (t, n, e) => {
      function r(t) {
        return function () {
          return t;
        };
      }
      e.d(n, { A: () => r });
    },
    5474: (t, n, e) => {
      function r(t) {
        this._context = t;
      }
      function i(t) {
        return new r(t);
      }
      e.d(n, { A: () => i }),
        (r.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            switch (((t = +t), (n = +n), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(t, n);
            }
          },
        });
    },
    8512: (t, n, e) => {
      function r(t) {
        return t < 0 ? -1 : 1;
      }
      function i(t, n, e) {
        var i = t._x1 - t._x0,
          o = n - t._x1,
          a = (t._y1 - t._y0) / (i || (o < 0 && -0)),
          u = (e - t._y1) / (o || (i < 0 && -0)),
          s = (a * o + u * i) / (i + o);
        return (
          (r(a) + r(u)) *
            Math.min(Math.abs(a), Math.abs(u), 0.5 * Math.abs(s)) || 0
        );
      }
      function o(t, n) {
        var e = t._x1 - t._x0;
        return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
      }
      function a(t, n, e) {
        var r = t._x0,
          i = t._y0,
          o = t._x1,
          a = t._y1,
          u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
      }
      function u(t) {
        this._context = t;
      }
      function s(t) {
        this._context = new l(t);
      }
      function l(t) {
        this._context = t;
      }
      function h(t) {
        return new u(t);
      }
      e.d(n, { G: () => h }),
        (u.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                a(this, this._t0, o(this, this._t0));
            }
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (t, n) {
            var e = NaN;
            if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, n)
                      : this._context.moveTo(t, n);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), a(this, o(this, (e = i(this, t, n))), e);
                  break;
                default:
                  a(this, this._t0, (e = i(this, t, n)));
              }
              (this._x0 = this._x1),
                (this._x1 = t),
                (this._y0 = this._y1),
                (this._y1 = n),
                (this._t0 = e);
            }
          },
        }),
        ((s.prototype = Object.create(u.prototype)).point = function (t, n) {
          u.prototype.point.call(this, n, t);
        }),
        (l.prototype = {
          moveTo: function (t, n) {
            this._context.moveTo(n, t);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (t, n) {
            this._context.lineTo(n, t);
          },
          bezierCurveTo: function (t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i);
          },
        });
    },
    5105: (t, n, e) => {
      e.d(n, { A: () => s });
      var r = e(6498),
        i = e(3711),
        o = e(5474),
        a = e(8270),
        u = e(2661);
      function s(t, n) {
        var e = (0, i.A)(!0),
          s = null,
          l = o.A,
          h = null,
          c = (0, a.i)(f);
        function f(i) {
          var o,
            a,
            u,
            f = (i = (0, r.A)(i)).length,
            g = !1;
          for (null == s && (h = l((u = c()))), o = 0; o <= f; ++o)
            !(o < f && e((a = i[o]), o, i)) === g &&
              ((g = !g) ? h.lineStart() : h.lineEnd()),
              g && h.point(+t(a, o, i), +n(a, o, i));
          if (u) return (h = null), u + "" || null;
        }
        return (
          (t = "function" === typeof t ? t : void 0 === t ? u.x : (0, i.A)(t)),
          (n = "function" === typeof n ? n : void 0 === n ? u.y : (0, i.A)(n)),
          (f.x = function (n) {
            return arguments.length
              ? ((t = "function" === typeof n ? n : (0, i.A)(+n)), f)
              : t;
          }),
          (f.y = function (t) {
            return arguments.length
              ? ((n = "function" === typeof t ? t : (0, i.A)(+t)), f)
              : n;
          }),
          (f.defined = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, i.A)(!!t)), f)
              : e;
          }),
          (f.curve = function (t) {
            return arguments.length ? ((l = t), null != s && (h = l(s)), f) : l;
          }),
          (f.context = function (t) {
            return arguments.length
              ? (null == t ? (s = h = null) : (h = l((s = t))), f)
              : s;
          }),
          f
        );
      }
    },
    8270: (t, n, e) => {
      e.d(n, { i: () => l });
      const r = Math.PI,
        i = 2 * r,
        o = 1e-6,
        a = i - o;
      function u(t) {
        this._ += t[0];
        for (let n = 1, e = t.length; n < e; ++n) this._ += arguments[n] + t[n];
      }
      class s {
        constructor(t) {
          (this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == t
                ? u
                : (function (t) {
                    let n = Math.floor(t);
                    if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
                    if (n > 15) return u;
                    const e = 10 ** n;
                    return function (t) {
                      this._ += t[0];
                      for (let n = 1, r = t.length; n < r; ++n)
                        this._ += Math.round(arguments[n] * e) / e + t[n];
                    };
                  })(t));
        }
        moveTo(t, n) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
        }
        closePath() {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(t, n) {
          this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
        }
        quadraticCurveTo(t, n, e, r) {
          this._append`Q${+t},${+n},${(this._x1 = +e)},${(this._y1 = +r)}`;
        }
        bezierCurveTo(t, n, e, r, i, o) {
          this
            ._append`C${+t},${+n},${+e},${+r},${(this._x1 = +i)},${(this._y1 = +o)}`;
        }
        arcTo(t, n, e, i, a) {
          if (((t = +t), (n = +n), (e = +e), (i = +i), (a = +a) < 0))
            throw new Error(`negative radius: ${a}`);
          let u = this._x1,
            s = this._y1,
            l = e - t,
            h = i - n,
            c = u - t,
            f = s - n,
            g = c * c + f * f;
          if (null === this._x1)
            this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
          else if (g > o)
            if (Math.abs(f * l - h * c) > o && a) {
              let p = e - u,
                d = i - s,
                y = l * l + h * h,
                v = p * p + d * d,
                m = Math.sqrt(y),
                _ = Math.sqrt(g),
                b =
                  a * Math.tan((r - Math.acos((y + g - v) / (2 * m * _))) / 2),
                x = b / _,
                w = b / m;
              Math.abs(x - 1) > o && this._append`L${t + x * c},${n + x * f}`,
                this
                  ._append`A${a},${a},0,0,${+(f * p > c * d)},${(this._x1 = t + w * l)},${(this._y1 = n + w * h)}`;
            } else this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
          else;
        }
        arc(t, n, e, u, s, l) {
          if (((t = +t), (n = +n), (l = !!l), (e = +e) < 0))
            throw new Error(`negative radius: ${e}`);
          let h = e * Math.cos(u),
            c = e * Math.sin(u),
            f = t + h,
            g = n + c,
            p = 1 ^ l,
            d = l ? u - s : s - u;
          null === this._x1
            ? this._append`M${f},${g}`
            : (Math.abs(this._x1 - f) > o || Math.abs(this._y1 - g) > o) &&
              this._append`L${f},${g}`,
            e &&
              (d < 0 && (d = (d % i) + i),
              d > a
                ? this
                    ._append`A${e},${e},0,1,${p},${t - h},${n - c}A${e},${e},0,1,${p},${(this._x1 = f)},${(this._y1 = g)}`
                : d > o &&
                  this
                    ._append`A${e},${e},0,${+(d >= r)},${p},${(this._x1 = t + e * Math.cos(s))},${(this._y1 = n + e * Math.sin(s))}`);
        }
        rect(t, n, e, r) {
          this
            ._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}h${(e = +e)}v${+r}h${-e}Z`;
        }
        toString() {
          return this._;
        }
      }
      function l(t) {
        let n = 3;
        return (
          (t.digits = function (e) {
            if (!arguments.length) return n;
            if (null == e) n = null;
            else {
              const t = Math.floor(e);
              if (!(t >= 0)) throw new RangeError(`invalid digits: ${e}`);
              n = t;
            }
            return t;
          }),
          () => new s(n)
        );
      }
      s.prototype;
    },
    2661: (t, n, e) => {
      function r(t) {
        return t[0];
      }
      function i(t) {
        return t[1];
      }
      e.d(n, { x: () => r, y: () => i });
    },
  },
]);
//# sourceMappingURL=598.8ada2e3e.chunk.js.map
