"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [104],
  {
    104: (e, t, o) => {
      o.r(t), o.d(t, { default: () => kt });
      var a = o(2483),
        n = o(7154),
        s = o(4788);
      const r = 6e4,
        i = 864e5,
        u = 6048e5;
      function h(e) {
        return (0, s.f)(
          (t) => {
            t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
              t.setHours(0, 0, 0, 0);
          },
          (e, t) => {
            e.setDate(e.getDate() + 7 * t);
          },
          (e, t) =>
            (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * r) / u,
        );
      }
      const l = h(0),
        c = h(1),
        y = h(2),
        d = h(3),
        p = h(4),
        m = h(5),
        g = h(6);
      l.range, c.range, y.range, d.range, p.range, m.range, g.range;
      function w(e) {
        return (0, s.f)(
          (t) => {
            t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
              t.setUTCHours(0, 0, 0, 0);
          },
          (e, t) => {
            e.setUTCDate(e.getUTCDate() + 7 * t);
          },
          (e, t) => (t - e) / u,
        );
      }
      const f = w(0),
        W = w(1),
        v = w(2),
        b = w(3),
        k = w(4),
        x = w(5),
        H = w(6),
        C =
          (f.range,
          W.range,
          v.range,
          b.range,
          k.range,
          x.range,
          H.range,
          (0, s.f)(
            (e) => e.setHours(0, 0, 0, 0),
            (e, t) => e.setDate(e.getDate() + t),
            (e, t) =>
              (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * r) / i,
            (e) => e.getDate() - 1,
          )),
        T =
          (C.range,
          (0, s.f)(
            (e) => {
              e.setUTCHours(0, 0, 0, 0);
            },
            (e, t) => {
              e.setUTCDate(e.getUTCDate() + t);
            },
            (e, t) => (t - e) / i,
            (e) => e.getUTCDate() - 1,
          )),
        A =
          (T.range,
          (0, s.f)(
            (e) => {
              e.setUTCHours(0, 0, 0, 0);
            },
            (e, t) => {
              e.setUTCDate(e.getUTCDate() + t);
            },
            (e, t) => (t - e) / i,
            (e) => Math.floor(e / i),
          ).range,
          (0, s.f)(
            (e) => {
              e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
            },
            (e, t) => {
              e.setFullYear(e.getFullYear() + t);
            },
            (e, t) => t.getFullYear() - e.getFullYear(),
            (e) => e.getFullYear(),
          ));
      A.every = (e) =>
        isFinite((e = Math.floor(e))) && e > 0
          ? (0, s.f)(
              (t) => {
                t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                  t.setMonth(0, 1),
                  t.setHours(0, 0, 0, 0);
              },
              (t, o) => {
                t.setFullYear(t.getFullYear() + o * e);
              },
            )
          : null;
      A.range;
      const j = (0, s.f)(
        (e) => {
          e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          e.setUTCFullYear(e.getUTCFullYear() + t);
        },
        (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
        (e) => e.getUTCFullYear(),
      );
      j.every = (e) =>
        isFinite((e = Math.floor(e))) && e > 0
          ? (0, s.f)(
              (t) => {
                t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                  t.setUTCMonth(0, 1),
                  t.setUTCHours(0, 0, 0, 0);
              },
              (t, o) => {
                t.setUTCFullYear(t.getUTCFullYear() + o * e);
              },
            )
          : null;
      j.range;
      function S(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
          return t.setFullYear(e.y), t;
        }
        return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
      }
      function D(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
          return t.setUTCFullYear(e.y), t;
        }
        return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
      }
      function F(e, t, o) {
        return { y: e, m: t, d: o, H: 0, M: 0, S: 0, L: 0 };
      }
      var M,
        U,
        I = { "-": "", _: " ", 0: "0" },
        N = /^\s*\d+/,
        O = /^%/,
        L = /[\\^$*+?|[\]().{}]/g;
      function G(e, t, o) {
        var a = e < 0 ? "-" : "",
          n = (a ? -e : e) + "",
          s = n.length;
        return a + (s < o ? new Array(o - s + 1).join(t) + n : n);
      }
      function Y(e) {
        return e.replace(L, "\\$&");
      }
      function P(e) {
        return new RegExp("^(?:" + e.map(Y).join("|") + ")", "i");
      }
      function B(e) {
        return new Map(e.map((e, t) => [e.toLowerCase(), t]));
      }
      function E(e, t, o) {
        var a = N.exec(t.slice(o, o + 1));
        return a ? ((e.w = +a[0]), o + a[0].length) : -1;
      }
      function z(e, t, o) {
        var a = N.exec(t.slice(o, o + 1));
        return a ? ((e.u = +a[0]), o + a[0].length) : -1;
      }
      function q(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.U = +a[0]), o + a[0].length) : -1;
      }
      function Z(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.V = +a[0]), o + a[0].length) : -1;
      }
      function R(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.W = +a[0]), o + a[0].length) : -1;
      }
      function J(e, t, o) {
        var a = N.exec(t.slice(o, o + 4));
        return a ? ((e.y = +a[0]), o + a[0].length) : -1;
      }
      function $(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a
          ? ((e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3)), o + a[0].length)
          : -1;
      }
      function V(e, t, o) {
        var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(o, o + 6));
        return a
          ? ((e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00"))), o + a[0].length)
          : -1;
      }
      function Q(e, t, o) {
        var a = N.exec(t.slice(o, o + 1));
        return a ? ((e.q = 3 * a[0] - 3), o + a[0].length) : -1;
      }
      function K(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.m = a[0] - 1), o + a[0].length) : -1;
      }
      function X(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.d = +a[0]), o + a[0].length) : -1;
      }
      function _(e, t, o) {
        var a = N.exec(t.slice(o, o + 3));
        return a ? ((e.m = 0), (e.d = +a[0]), o + a[0].length) : -1;
      }
      function ee(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.H = +a[0]), o + a[0].length) : -1;
      }
      function te(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.M = +a[0]), o + a[0].length) : -1;
      }
      function oe(e, t, o) {
        var a = N.exec(t.slice(o, o + 2));
        return a ? ((e.S = +a[0]), o + a[0].length) : -1;
      }
      function ae(e, t, o) {
        var a = N.exec(t.slice(o, o + 3));
        return a ? ((e.L = +a[0]), o + a[0].length) : -1;
      }
      function ne(e, t, o) {
        var a = N.exec(t.slice(o, o + 6));
        return a ? ((e.L = Math.floor(a[0] / 1e3)), o + a[0].length) : -1;
      }
      function se(e, t, o) {
        var a = O.exec(t.slice(o, o + 1));
        return a ? o + a[0].length : -1;
      }
      function re(e, t, o) {
        var a = N.exec(t.slice(o));
        return a ? ((e.Q = +a[0]), o + a[0].length) : -1;
      }
      function ie(e, t, o) {
        var a = N.exec(t.slice(o));
        return a ? ((e.s = +a[0]), o + a[0].length) : -1;
      }
      function ue(e, t) {
        return G(e.getDate(), t, 2);
      }
      function he(e, t) {
        return G(e.getHours(), t, 2);
      }
      function le(e, t) {
        return G(e.getHours() % 12 || 12, t, 2);
      }
      function ce(e, t) {
        return G(1 + C.count(A(e), e), t, 3);
      }
      function ye(e, t) {
        return G(e.getMilliseconds(), t, 3);
      }
      function de(e, t) {
        return ye(e, t) + "000";
      }
      function pe(e, t) {
        return G(e.getMonth() + 1, t, 2);
      }
      function me(e, t) {
        return G(e.getMinutes(), t, 2);
      }
      function ge(e, t) {
        return G(e.getSeconds(), t, 2);
      }
      function we(e) {
        var t = e.getDay();
        return 0 === t ? 7 : t;
      }
      function fe(e, t) {
        return G(l.count(A(e) - 1, e), t, 2);
      }
      function We(e) {
        var t = e.getDay();
        return t >= 4 || 0 === t ? p(e) : p.ceil(e);
      }
      function ve(e, t) {
        return (e = We(e)), G(p.count(A(e), e) + (4 === A(e).getDay()), t, 2);
      }
      function be(e) {
        return e.getDay();
      }
      function ke(e, t) {
        return G(c.count(A(e) - 1, e), t, 2);
      }
      function xe(e, t) {
        return G(e.getFullYear() % 100, t, 2);
      }
      function He(e, t) {
        return G((e = We(e)).getFullYear() % 100, t, 2);
      }
      function Ce(e, t) {
        return G(e.getFullYear() % 1e4, t, 4);
      }
      function Te(e, t) {
        var o = e.getDay();
        return G(
          (e = o >= 4 || 0 === o ? p(e) : p.ceil(e)).getFullYear() % 1e4,
          t,
          4,
        );
      }
      function Ae(e) {
        var t = e.getTimezoneOffset();
        return (
          (t > 0 ? "-" : ((t *= -1), "+")) +
          G((t / 60) | 0, "0", 2) +
          G(t % 60, "0", 2)
        );
      }
      function je(e, t) {
        return G(e.getUTCDate(), t, 2);
      }
      function Se(e, t) {
        return G(e.getUTCHours(), t, 2);
      }
      function De(e, t) {
        return G(e.getUTCHours() % 12 || 12, t, 2);
      }
      function Fe(e, t) {
        return G(1 + T.count(j(e), e), t, 3);
      }
      function Me(e, t) {
        return G(e.getUTCMilliseconds(), t, 3);
      }
      function Ue(e, t) {
        return Me(e, t) + "000";
      }
      function Ie(e, t) {
        return G(e.getUTCMonth() + 1, t, 2);
      }
      function Ne(e, t) {
        return G(e.getUTCMinutes(), t, 2);
      }
      function Oe(e, t) {
        return G(e.getUTCSeconds(), t, 2);
      }
      function Le(e) {
        var t = e.getUTCDay();
        return 0 === t ? 7 : t;
      }
      function Ge(e, t) {
        return G(f.count(j(e) - 1, e), t, 2);
      }
      function Ye(e) {
        var t = e.getUTCDay();
        return t >= 4 || 0 === t ? k(e) : k.ceil(e);
      }
      function Pe(e, t) {
        return (
          (e = Ye(e)), G(k.count(j(e), e) + (4 === j(e).getUTCDay()), t, 2)
        );
      }
      function Be(e) {
        return e.getUTCDay();
      }
      function Ee(e, t) {
        return G(W.count(j(e) - 1, e), t, 2);
      }
      function ze(e, t) {
        return G(e.getUTCFullYear() % 100, t, 2);
      }
      function qe(e, t) {
        return G((e = Ye(e)).getUTCFullYear() % 100, t, 2);
      }
      function Ze(e, t) {
        return G(e.getUTCFullYear() % 1e4, t, 4);
      }
      function Re(e, t) {
        var o = e.getUTCDay();
        return G(
          (e = o >= 4 || 0 === o ? k(e) : k.ceil(e)).getUTCFullYear() % 1e4,
          t,
          4,
        );
      }
      function Je() {
        return "+0000";
      }
      function $e() {
        return "%";
      }
      function Ve(e) {
        return +e;
      }
      function Qe(e) {
        return Math.floor(+e / 1e3);
      }
      (M = (function (e) {
        var t = e.dateTime,
          o = e.date,
          a = e.time,
          n = e.periods,
          s = e.days,
          r = e.shortDays,
          i = e.months,
          u = e.shortMonths,
          h = P(n),
          l = B(n),
          y = P(s),
          d = B(s),
          p = P(r),
          m = B(r),
          g = P(i),
          w = B(i),
          f = P(u),
          v = B(u),
          b = {
            a: function (e) {
              return r[e.getDay()];
            },
            A: function (e) {
              return s[e.getDay()];
            },
            b: function (e) {
              return u[e.getMonth()];
            },
            B: function (e) {
              return i[e.getMonth()];
            },
            c: null,
            d: ue,
            e: ue,
            f: de,
            g: He,
            G: Te,
            H: he,
            I: le,
            j: ce,
            L: ye,
            m: pe,
            M: me,
            p: function (e) {
              return n[+(e.getHours() >= 12)];
            },
            q: function (e) {
              return 1 + ~~(e.getMonth() / 3);
            },
            Q: Ve,
            s: Qe,
            S: ge,
            u: we,
            U: fe,
            V: ve,
            w: be,
            W: ke,
            x: null,
            X: null,
            y: xe,
            Y: Ce,
            Z: Ae,
            "%": $e,
          },
          k = {
            a: function (e) {
              return r[e.getUTCDay()];
            },
            A: function (e) {
              return s[e.getUTCDay()];
            },
            b: function (e) {
              return u[e.getUTCMonth()];
            },
            B: function (e) {
              return i[e.getUTCMonth()];
            },
            c: null,
            d: je,
            e: je,
            f: Ue,
            g: qe,
            G: Re,
            H: Se,
            I: De,
            j: Fe,
            L: Me,
            m: Ie,
            M: Ne,
            p: function (e) {
              return n[+(e.getUTCHours() >= 12)];
            },
            q: function (e) {
              return 1 + ~~(e.getUTCMonth() / 3);
            },
            Q: Ve,
            s: Qe,
            S: Oe,
            u: Le,
            U: Ge,
            V: Pe,
            w: Be,
            W: Ee,
            x: null,
            X: null,
            y: ze,
            Y: Ze,
            Z: Je,
            "%": $e,
          },
          x = {
            a: function (e, t, o) {
              var a = p.exec(t.slice(o));
              return a
                ? ((e.w = m.get(a[0].toLowerCase())), o + a[0].length)
                : -1;
            },
            A: function (e, t, o) {
              var a = y.exec(t.slice(o));
              return a
                ? ((e.w = d.get(a[0].toLowerCase())), o + a[0].length)
                : -1;
            },
            b: function (e, t, o) {
              var a = f.exec(t.slice(o));
              return a
                ? ((e.m = v.get(a[0].toLowerCase())), o + a[0].length)
                : -1;
            },
            B: function (e, t, o) {
              var a = g.exec(t.slice(o));
              return a
                ? ((e.m = w.get(a[0].toLowerCase())), o + a[0].length)
                : -1;
            },
            c: function (e, o, a) {
              return j(e, t, o, a);
            },
            d: X,
            e: X,
            f: ne,
            g: $,
            G: J,
            H: ee,
            I: ee,
            j: _,
            L: ae,
            m: K,
            M: te,
            p: function (e, t, o) {
              var a = h.exec(t.slice(o));
              return a
                ? ((e.p = l.get(a[0].toLowerCase())), o + a[0].length)
                : -1;
            },
            q: Q,
            Q: re,
            s: ie,
            S: oe,
            u: z,
            U: q,
            V: Z,
            w: E,
            W: R,
            x: function (e, t, a) {
              return j(e, o, t, a);
            },
            X: function (e, t, o) {
              return j(e, a, t, o);
            },
            y: $,
            Y: J,
            Z: V,
            "%": se,
          };
        function H(e, t) {
          return function (o) {
            var a,
              n,
              s,
              r = [],
              i = -1,
              u = 0,
              h = e.length;
            for (o instanceof Date || (o = new Date(+o)); ++i < h; )
              37 === e.charCodeAt(i) &&
                (r.push(e.slice(u, i)),
                null != (n = I[(a = e.charAt(++i))])
                  ? (a = e.charAt(++i))
                  : (n = "e" === a ? " " : "0"),
                (s = t[a]) && (a = s(o, n)),
                r.push(a),
                (u = i + 1));
            return r.push(e.slice(u, i)), r.join("");
          };
        }
        function A(e, t) {
          return function (o) {
            var a,
              n,
              s = F(1900, void 0, 1);
            if (j(s, e, (o += ""), 0) != o.length) return null;
            if ("Q" in s) return new Date(s.Q);
            if ("s" in s) return new Date(1e3 * s.s + ("L" in s ? s.L : 0));
            if (
              (t && !("Z" in s) && (s.Z = 0),
              "p" in s && (s.H = (s.H % 12) + 12 * s.p),
              void 0 === s.m && (s.m = "q" in s ? s.q : 0),
              "V" in s)
            ) {
              if (s.V < 1 || s.V > 53) return null;
              "w" in s || (s.w = 1),
                "Z" in s
                  ? ((n = (a = D(F(s.y, 0, 1))).getUTCDay()),
                    (a = n > 4 || 0 === n ? W.ceil(a) : W(a)),
                    (a = T.offset(a, 7 * (s.V - 1))),
                    (s.y = a.getUTCFullYear()),
                    (s.m = a.getUTCMonth()),
                    (s.d = a.getUTCDate() + ((s.w + 6) % 7)))
                  : ((n = (a = S(F(s.y, 0, 1))).getDay()),
                    (a = n > 4 || 0 === n ? c.ceil(a) : c(a)),
                    (a = C.offset(a, 7 * (s.V - 1))),
                    (s.y = a.getFullYear()),
                    (s.m = a.getMonth()),
                    (s.d = a.getDate() + ((s.w + 6) % 7)));
            } else
              ("W" in s || "U" in s) &&
                ("w" in s || (s.w = "u" in s ? s.u % 7 : "W" in s ? 1 : 0),
                (n =
                  "Z" in s
                    ? D(F(s.y, 0, 1)).getUTCDay()
                    : S(F(s.y, 0, 1)).getDay()),
                (s.m = 0),
                (s.d =
                  "W" in s
                    ? ((s.w + 6) % 7) + 7 * s.W - ((n + 5) % 7)
                    : s.w + 7 * s.U - ((n + 6) % 7)));
            return "Z" in s
              ? ((s.H += (s.Z / 100) | 0), (s.M += s.Z % 100), D(s))
              : S(s);
          };
        }
        function j(e, t, o, a) {
          for (var n, s, r = 0, i = t.length, u = o.length; r < i; ) {
            if (a >= u) return -1;
            if (37 === (n = t.charCodeAt(r++))) {
              if (
                ((n = t.charAt(r++)),
                !(s = x[n in I ? t.charAt(r++) : n]) || (a = s(e, o, a)) < 0)
              )
                return -1;
            } else if (n != o.charCodeAt(a++)) return -1;
          }
          return a;
        }
        return (
          (b.x = H(o, b)),
          (b.X = H(a, b)),
          (b.c = H(t, b)),
          (k.x = H(o, k)),
          (k.X = H(a, k)),
          (k.c = H(t, k)),
          {
            format: function (e) {
              var t = H((e += ""), b);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            parse: function (e) {
              var t = A((e += ""), !1);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcFormat: function (e) {
              var t = H((e += ""), k);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcParse: function (e) {
              var t = A((e += ""), !0);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })),
        M.format,
        M.parse,
        (U = M.utcFormat),
        M.utcParse;
      const Ke = {
        "creative-short-story": [
          "A haiku",
          "Eye contact",
          "Hope",
          "Windows",
          "Electricity",
          "Fear",
          "Jealousy",
          "Dreams",
          "Animals",
          "Cleaning",
          "Moon",
          "Revenge",
          "Sweet",
          "Desert",
          "Competition",
          "Wedding",
          "Plants",
          "Animals",
          "1000 years",
          "The future",
          "The past",
          "The present",
          "Sharing",
          "Umami",
          "Responsibility",
          "5 things you can see",
          "Art",
          "Places",
          "Alarm",
          "Books",
          "Spice",
          "Music",
          "Nostalgia",
          "Legends",
          "Brave",
          "Travel",
          "Smoke",
          "Doors",
          "Culture",
          "Light",
          "Community",
          "Puzzles",
          "Unknown",
          "Nature",
          "Secret",
          "Movies",
          "Joke",
          "Sport",
          "Tradition",
          "Coping",
          "Embarrassment",
          "Longing",
          "Heroic",
          "Advertisment",
          "Magic",
          "Wonder",
          "Adjective",
          "Whisper",
          "Heat",
          "4 things you feel",
          "Neighbours",
          "Flying",
          "Colour",
          "Forest",
          "Shape",
          "Contradiction",
          "Friendship",
          "Prizes",
          "Sour",
          "Winning",
          "Beach",
          "3 things you hear",
          "Proximity",
          "Direction",
          "Grow",
          "Scent",
          "Gift",
          "Ships",
          "Farming",
          "Stealing",
          "Isolation",
          "Dancing",
          "Energise",
          "Discover",
          "Manners",
          "2 things you smell",
          "Copy",
          "Empathy",
          "Strength",
          "Waterfall",
          "Breathe",
          "Time",
          "Influence",
          "Pattern",
          "Choice",
          "Concrete",
          "Experiment",
          "Cooking",
          "Forgive",
          "Teams",
          "Power",
          "Lyrics",
          "Obstacle",
          "Shrink",
          "Follow",
          "1 thing you taste",
          "Truth",
          "Resolution",
          "Movement",
          "Space",
          "Fortune",
          "Trust",
          "Starting",
          "Rain",
          "Inspiration",
          "Salty",
          "What was it like being 5 years old? Where were you? What did you look like?",
          "Size",
          "Transformation",
          "Balance",
          "Threat",
          "Substitute",
          "Adapt",
          "Smile",
          "Senses",
          "House boat",
          "Dry",
          "Cold",
          "Chances",
          "Questions",
          "A speech",
          "Promise",
          "Mix",
          "What if",
          "Thrill",
          "Science",
          "Detail",
          "Speed",
          "Sky",
          "Hobbies",
          "Bubbles",
          "What was it like being 10 years old? Where were you? What did you like?",
          "Graphic",
          "Explain",
          "Borrow",
          "Transport",
          "Contrast",
          "Memory",
          "Failure",
          "Swimming",
          "Bitter",
          "Names",
          "An obituary",
          "Switch",
          "Personal",
          "Mystery",
          "Minerals",
          "Communication",
          "Bragging",
          "Horror",
          "What was it like being 12 years old? What did you like? What did you dislike?",
          "Compare",
          "Mischief",
          "Paths",
          "Create",
          "Code",
          "Scavenge",
          "Self-portrait",
          "Challenge",
          "A newsletter",
          "Canvas",
          "Hybrid",
          "Maps",
          "Abstract",
          "A snail mail letter",
          "Mode",
          "Busy",
          "Passage",
          "Repetition",
          "A post card",
          "Resilience",
          "Play",
          "What is it like being you?",
          "Combine",
          "Ideas",
          "Favourites",
          "Themes",
          "Dwelling",
          "A haiku",
          "Eye contact",
          "Hope",
          "Windows",
          "Electricity",
          "Fear",
          "Jealousy",
          "Dreams",
          "Animals",
          "Cleaning",
          "Moon",
          "Revenge",
          "Sweet",
          "Desert",
          "Competition",
          "Wedding",
          "Plants",
          "Animals",
          "1000 years",
          "The future",
          "The past",
          "The present",
          "Sharing",
          "Umami",
          "Responsibility",
          "5 things you can see",
          "Art",
          "Places",
          "Alarm",
          "Books",
          "Spice",
          "Music",
          "Nostalgia",
          "Legends",
          "Brave",
          "Travel",
          "Smoke",
          "Doors",
          "Culture",
          "Light",
          "Community",
          "Puzzles",
          "Unknown",
          "Nature",
          "Secret",
          "Movies",
          "Joke",
          "Sport",
          "Tradition",
          "Coping",
          "Embarrassment",
          "Longing",
          "Heroic",
          "Advertisment",
          "Magic",
          "Wonder",
          "Adjective",
          "Whisper",
          "Heat",
          "4 things you feel",
          "Neighbours",
          "Flying",
          "Colour",
          "Forest",
          "Shape",
          "Contradiction",
          "Friendship",
          "Prizes",
          "Sour",
          "Winning",
          "Beach",
          "3 things you hear",
          "Proximity",
          "Direction",
          "Grow",
          "Scent",
          "Gift",
          "Ships",
          "Farming",
          "Stealing",
          "Isolation",
          "Dancing",
          "Energise",
          "Discover",
          "Manners",
          "2 things you smell",
          "Copy",
          "Empathy",
          "Strength",
          "Waterfall",
          "Breathe",
          "Time",
          "Influence",
          "Pattern",
          "Choice",
          "Concrete",
          "Experiment",
          "Cooking",
          "Forgive",
          "Teams",
          "Power",
          "Lyrics",
          "Obstacle",
          "Shrink",
          "Follow",
          "1 thing you taste",
          "Truth",
          "Resolution",
          "Movement",
          "Space",
          "Fortune",
          "Trust",
          "Starting",
          "Rain",
          "Inspiration",
          "Salty",
          "What was it like being 5 years old? Where were you? What did you look like?",
          "Size",
          "Transformation",
          "Balance",
          "Threat",
          "Substitute",
          "Adapt",
          "Smile",
          "Senses",
          "House boat",
          "Dry",
          "Cold",
          "Chances",
          "Questions",
          "A speech",
          "Promise",
          "Mix",
          "What if",
          "Thrill",
          "Science",
          "Detail",
          "Speed",
          "Sky",
          "Hobbies",
          "Bubbles",
          "What was it like being 10 years old? Where were you? What did you like?",
          "Graphic",
          "Explain",
          "Borrow",
          "Transport",
          "Contrast",
          "Memory",
          "Failure",
          "Swimming",
          "Bitter",
          "Names",
          "An obituary",
          "Switch",
          "Personal",
          "Mystery",
          "Minerals",
          "Communication",
          "Bragging",
          "Horror",
          "What was it like being 12 years old? What did you like? What did you dislike?",
          "Compare",
          "Mischief",
          "Paths",
          "Create",
          "Code",
          "Scavenge",
          "Self-portrait",
          "Challenge",
          "A newsletter",
          "Canvas",
          "Hybrid",
          "Maps",
          "Abstract",
          "A snail mail letter",
          "Mode",
          "Busy",
          "Passage",
        ],
        "steno-motivations": [
          "What specific skill would you like to achieve using stenography?",
          "What would it look like/feel like if you could type using stenography?",
          "How will things be different for you when you master stenography?",
          "What would it feel like to have the skill of stenography?",
          "What would it feel like to have mastered stenography?",
          "If your goal was a t-shirt slogan, what would it say?",
          "When would you like to have your current steno goal achieved?",
          "How will you know that you have achieved your steno goal? What would the evidence of success be?",
          "What are two things you could do today to start moving towards your steno goal?",
          "What else could you do to keep momentum with steno?",
          "When could you do one thing to help you keep momentum with steno?",
          "What would an epic outcome look like for your steno journey?",
          "What is your stenographic north star?",
          "What is your current steno goal?",
          "How will you measure your steno goal success?",
          "What activities help you improve your steno speed?",
          "What activities help you improve your steno vocabulary?",
          "What activities help you improve your steno briefing and stroke efficiency?",
          "What activities help you improve your steno ergonomics?",
          "What is an achievable next milestone for you on your steno journey?",
          "How much effort are you willing to put into steno practice?",
          "How much effort have you put into steno practice?",
          "How much effort have you recently put into steno practice?",
          "What stops you doing more steno practice?",
          "What obstacles are there to your steno success?",
          "Is there a lovable project that you could do with steno to keep you motivated?",
          "What is the next part of steno you need to learn?",
          "What is your target performance level with steno?",
          "What tools and resources do you need for your stenography journey?",
          "What tools do you need to write comfortably with stenography?",
          "What will the next 20 hours of your steno practice look like?",
          "When will you next spend time concentrating on improving your steno skill?",
          "How might you fix mistakes faster?",
          "How might you spot steno mistakes quickly?",
          "When could you do a short burst of steno practice?",
          "How could you squeeze in more steno practice?",
          "Where will you be when you next practice steno?",
          "How might you get 1% better at steno today?",
          "How might you learn a little more about steno?",
          "How might you get more realistic steno practice?",
          "Have you considered an accountability buddy for your steno practice?",
          "Who could help you be successful at steno?",
          "How will you remember to do steno practice?",
          "Who has helped you with your steno practice?",
          "Who might you help with steno?",
          "What are your expectations about steno?",
          "How might you close the gap between your steno expectations and reality?",
          "What does steno success look like?",
          "What are your options for improving your steno skill?",
          "How might you spend your time, money, or energy on steno?",
          "What's the most likely way your steno journey might be disrupted?",
          "Imagine you've been wildly successful at mastering steno. What helped you get there?",
          "Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?",
          "What distracts you from mastering steno?",
          "How will you know what you're getting better at steno?",
          "How will you know you're getting more comfortable with steno?",
          "What makes writing with steno feel comfortable or uncomfortable?",
          "What's the slowest you could write with steno and still feel productive?",
          "What's the slowest you could write with steno and feel comfortable?",
          "What's the fastest you could write with steno with 100% accuracy?",
          "How frequently do you practice steno?",
          "How often do you revise more unusual words or steno briefs?",
          "What leads to a successful steno study session for you?",
          "What is your prediction about your steno skill one month from now?",
          "What activities will improve your steno skill? How might you test the effectiveness of those activites?",
          "What helps you remember steno briefs?",
          "What helps you concentrate?",
          "What helps you with recall?",
          "What's missing from your steno practice?",
          "What does steno mean to you?",
          "What motivates you about steno?",
          "What's an example of something that helps you practice steno?",
          "How do you prioritise steno practice?",
          "On a scale of 1 to 10, what is your current level of motivation?",
          "What is important to you about stenography?",
          "What is the next small step you can take to improve your steno skill?",
          "What is an even smaller step you could take to improve your steno skill?",
          "What is the next smallest milestone on your steno journey?",
          "How should you go about thinking about steno practice?",
          "What are the benefits of steno to you?",
          "What do you hope to achieve with steno in the next week?",
          "What do you hope to achieve with steno today?",
          "What is the purpose of steno for you?",
          "What is holding you back from steno success?",
          "What concerns do you have about steno?",
          "What have you tried so far to master steno?",
          "When do steno problems occur?",
          "What's working well for you with steno?",
          "If you could do your steno journey over again, what would you do differently?",
          "How well do you practice?",
          "What is your action plan for mastering steno?",
          "Are there advantages or disadvantages to starting your steno studies sooner or later?",
          "How many prefixes and suffixes can you write?",
          "How often do you take breaks?",
          "What's your steno posture like?",
          "How effectively do you use prefix and suffix entries?",
          "What specific skill would you like to achieve using stenography?",
          "What would it look like/feel like if you could type using stenography?",
          "How will things be different for you when you master stenography?",
          "What would it feel like to have the skill of stenography?",
          "What would it feel like to have mastered stenography?",
          "If your goal was a t-shirt slogan, what would it say?",
          "When would you like to have your current steno goal achieved?",
          "How will you know that you have achieved your steno goal? What would the evidence of success be?",
          "What are two things you could do today to start moving towards your steno goal?",
          "What else could you do to keep momentum with steno?",
          "When could you do one thing to help you keep momentum with steno?",
          "What would an epic outcome look like for your steno journey?",
          "What is your stenographic north star?",
          "What is your current steno goal?",
          "How will you measure your steno goal success?",
          "What activities help you improve your steno speed?",
          "What activities help you improve your steno vocabulary?",
          "What activities help you improve your steno briefing and stroke efficiency?",
          "What activities help you improve your steno ergonomics?",
          "What is an achievable next milestone for you on your steno journey?",
          "How much effort are you willing to put into steno practice?",
          "How much effort have you put into steno practice?",
          "How much effort have you recently put into steno practice?",
          "What stops you doing more steno practice?",
          "What obstacles are there to your steno success?",
          "Is there a lovable project that you could do with steno to keep you motivated?",
          "What is the next part of steno you need to learn?",
          "What is your target performance level with steno?",
          "What tools and resources do you need for your stenography journey?",
          "What tools do you need to write comfortably with stenography?",
          "What will the next 20 hours of your steno practice look like?",
          "When will you next spend time concentrating on improving your steno skill?",
          "How might you fix mistakes faster?",
          "How might you spot steno mistakes quickly?",
          "When could you do a short burst of steno practice?",
          "How could you squeeze in more steno practice?",
          "Where will you be when you next practice steno?",
          "How might you get 1% better at steno today?",
          "How might you learn a little more about steno?",
          "How might you get more realistic steno practice?",
          "Have you considered an accountability buddy for your steno practice?",
          "Who could help you be successful at steno?",
          "How will you remember to do steno practice?",
          "Who has helped you with your steno practice?",
          "Who might you help with steno?",
          "What are your expectations about steno?",
          "How might you close the gap between your steno expectations and reality?",
          "What does steno success look like?",
          "What are your options for improving your steno skill?",
          "How might you spend your time, money, or energy on steno?",
          "What's the most likely way your steno journey might be disrupted?",
          "Imagine you've been wildly successful at mastering steno. What helped you get there?",
          "Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?",
          "What distracts you from mastering steno?",
          "How will you know what you're getting better at steno?",
          "How will you know you're getting more comfortable with steno?",
          "What makes writing with steno feel comfortable or uncomfortable?",
          "What's the slowest you could write with steno and still feel productive?",
          "What's the slowest you could write with steno and feel comfortable?",
          "What's the fastest you could write with steno with 100% accuracy?",
          "How frequently do you practice steno?",
          "How often do you revise more unusual words or steno briefs?",
          "What leads to a successful steno study session for you?",
          "What is your prediction about your steno skill one month from now?",
          "What activities will improve your steno skill? How might you test the effectiveness of those activites?",
          "What helps you remember steno briefs?",
          "What helps you concentrate?",
          "What helps you with recall?",
          "What's missing from your steno practice?",
          "What does steno mean to you?",
          "What motivates you about steno?",
          "What's an example of something that helps you practice steno?",
          "How do you prioritise steno practice?",
          "On a scale of 1 to 10, what is your current level of motivation?",
          "What is important to you about stenography?",
          "What is the next small step you can take to improve your steno skill?",
          "What is an even smaller step you could take to improve your steno skill?",
          "What is the next smallest milestone on your steno journey?",
          "How should you go about thinking about steno practice?",
          "What are the benefits of steno to you?",
          "What do you hope to achieve with steno in the next week?",
          "What do you hope to achieve with steno today?",
          "What is the purpose of steno for you?",
          "What is holding you back from steno success?",
          "What concerns do you have about steno?",
          "What have you tried so far to master steno?",
          "When do steno problems occur?",
          "What's working well for you with steno?",
          "If you could do your steno journey over again, what would you do differently?",
          "How well do you practice?",
          "What is your action plan for mastering steno?",
          "Are there advantages or disadvantages to starting your steno studies sooner or later?",
          "How many prefixes and suffixes can you write?",
          "How often do you take breaks?",
          "What's your steno posture like?",
          "How effectively do you use prefix and suffix entries?",
          "What specific skill would you like to achieve using stenography?",
          "What would it look like/feel like if you could type using stenography?",
          "How will things be different for you when you master stenography?",
          "What would it feel like to have the skill of stenography?",
          "What would it feel like to have mastered stenography?",
          "If your goal was a t-shirt slogan, what would it say?",
          "When would you like to have your current steno goal achieved?",
          "How will you know that you have achieved your steno goal? What would the evidence of success be?",
          "What are two things you could do today to start moving towards your steno goal?",
          "What else could you do to keep momentum with steno?",
          "When could you do one thing to help you keep momentum with steno?",
          "What would an epic outcome look like for your steno journey?",
          "What is your stenographic north star?",
          "What is your current steno goal?",
          "How will you measure your steno goal success?",
          "What activities help you improve your steno speed?",
          "What activities help you improve your steno vocabulary?",
          "What activities help you improve your steno briefing and stroke efficiency?",
          "What activities help you improve your steno ergonomics?",
          "What is an achievable next milestone for you on your steno journey?",
          "How much effort are you willing to put into steno practice?",
          "How much effort have you put into steno practice?",
          "How much effort have you recently put into steno practice?",
          "What stops you doing more steno practice?",
          "What obstacles are there to your steno success?",
          "Is there a lovable project that you could do with steno to keep you motivated?",
          "What is the next part of steno you need to learn?",
          "What is your target performance level with steno?",
          "What tools and resources do you need for your stenography journey?",
          "What tools do you need to write comfortably with stenography?",
          "What will the next 20 hours of your steno practice look like?",
          "When will you next spend time concentrating on improving your steno skill?",
          "How might you fix mistakes faster?",
          "How might you spot steno mistakes quickly?",
          "When could you do a short burst of steno practice?",
          "How could you squeeze in more steno practice?",
          "Where will you be when you next practice steno?",
          "How might you get 1% better at steno today?",
          "How might you learn a little more about steno?",
          "How might you get more realistic steno practice?",
          "Have you considered an accountability buddy for your steno practice?",
          "Who could help you be successful at steno?",
          "How will you remember to do steno practice?",
          "Who has helped you with your steno practice?",
          "Who might you help with steno?",
          "What are your expectations about steno?",
          "How might you close the gap between your steno expectations and reality?",
          "What does steno success look like?",
          "What are your options for improving your steno skill?",
          "How might you spend your time, money, or energy on steno?",
          "What's the most likely way your steno journey might be disrupted?",
          "Imagine you've been wildly successful at mastering steno. What helped you get there?",
          "Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?",
          "What distracts you from mastering steno?",
          "How will you know what you're getting better at steno?",
          "How will you know you're getting more comfortable with steno?",
          "What makes writing with steno feel comfortable or uncomfortable?",
          "What's the slowest you could write with steno and still feel productive?",
          "What's the slowest you could write with steno and feel comfortable?",
          "What's the fastest you could write with steno with 100% accuracy?",
          "How frequently do you practice steno?",
          "How often do you revise more unusual words or steno briefs?",
          "What leads to a successful steno study session for you?",
          "What is your prediction about your steno skill one month from now?",
          "What activities will improve your steno skill? How might you test the effectiveness of those activites?",
          "What helps you remember steno briefs?",
          "What helps you concentrate?",
          "What helps you with recall?",
          "What's missing from your steno practice?",
          "What does steno mean to you?",
          "What motivates you about steno?",
          "What's an example of something that helps you practice steno?",
          "How do you prioritise steno practice?",
          "On a scale of 1 to 10, what is your current level of motivation?",
          "What is important to you about stenography?",
          "What is the next small step you can take to improve your steno skill?",
          "What is an even smaller step you could take to improve your steno skill?",
          "What is the next smallest milestone on your steno journey?",
          "How should you go about thinking about steno practice?",
          "What are the benefits of steno to you?",
          "What do you hope to achieve with steno in the next week?",
          "What do you hope to achieve with steno today?",
          "What is the purpose of steno for you?",
          "What is holding you back from steno success?",
          "What concerns do you have about steno?",
          "What have you tried so far to master steno?",
          "When do steno problems occur?",
          "What's working well for you with steno?",
          "If you could do your steno journey over again, what would you do differently?",
          "How well do you practice?",
          "What is your action plan for mastering steno?",
          "Are there advantages or disadvantages to starting your steno studies sooner or later?",
          "How many prefixes and suffixes can you write?",
          "How often do you take breaks?",
          "What's your steno posture like?",
          "How effectively do you use prefix and suffix entries?",
          "What specific skill would you like to achieve using stenography?",
          "What would it look like/feel like if you could type using stenography?",
          "How will things be different for you when you master stenography?",
          "What would it feel like to have the skill of stenography?",
          "What would it feel like to have mastered stenography?",
          "If your goal was a t-shirt slogan, what would it say?",
          "When would you like to have your current steno goal achieved?",
          "How will you know that you have achieved your steno goal? What would the evidence of success be?",
          "What are two things you could do today to start moving towards your steno goal?",
          "What else could you do to keep momentum with steno?",
          "When could you do one thing to help you keep momentum with steno?",
          "What would an epic outcome look like for your steno journey?",
          "What is your stenographic north star?",
          "What is your current steno goal?",
          "How will you measure your steno goal success?",
          "What activities help you improve your steno speed?",
          "What activities help you improve your steno vocabulary?",
          "What activities help you improve your steno briefing and stroke efficiency?",
          "What activities help you improve your steno ergonomics?",
          "What is an achievable next milestone for you on your steno journey?",
          "How much effort are you willing to put into steno practice?",
          "How much effort have you put into steno practice?",
          "How much effort have you recently put into steno practice?",
          "What stops you doing more steno practice?",
          "What obstacles are there to your steno success?",
          "Is there a lovable project that you could do with steno to keep you motivated?",
          "What is the next part of steno you need to learn?",
          "What is your target performance level with steno?",
          "What tools and resources do you need for your stenography journey?",
          "What tools do you need to write comfortably with stenography?",
          "What will the next 20 hours of your steno practice look like?",
          "When will you next spend time concentrating on improving your steno skill?",
          "How might you fix mistakes faster?",
          "How might you spot steno mistakes quickly?",
          "When could you do a short burst of steno practice?",
          "How could you squeeze in more steno practice?",
          "Where will you be when you next practice steno?",
          "How might you get 1% better at steno today?",
          "How might you learn a little more about steno?",
          "How might you get more realistic steno practice?",
          "Have you considered an accountability buddy for your steno practice?",
          "Who could help you be successful at steno?",
          "How will you remember to do steno practice?",
          "Who has helped you with your steno practice?",
          "Who might you help with steno?",
          "What are your expectations about steno?",
          "How might you close the gap between your steno expectations and reality?",
          "What does steno success look like?",
          "What are your options for improving your steno skill?",
          "How might you spend your time, money, or energy on steno?",
          "What's the most likely way your steno journey might be disrupted?",
          "Imagine you've been wildly successful at mastering steno. What helped you get there?",
          "Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?",
          "What distracts you from mastering steno?",
          "How will you know what you're getting better at steno?",
          "How will you know you're getting more comfortable with steno?",
          "What makes writing with steno feel comfortable or uncomfortable?",
          "What's the slowest you could write with steno and still feel productive?",
          "What's the slowest you could write with steno and feel comfortable?",
          "What's the fastest you could write with steno with 100% accuracy?",
          "How frequently do you practice steno?",
          "How often do you revise more unusual words or steno briefs?",
          "What leads to a successful steno study session for you?",
          "What is your prediction about your steno skill one month from now?",
          "What activities will improve your steno skill? How might you test the effectiveness of those activites?",
          "What helps you remember steno briefs?",
          "What helps you concentrate?",
          "What helps you with recall?",
          "What's missing from your steno practice?",
          "What does steno mean to you?",
          "What motivates you about steno?",
          "What's an example of something that helps you practice steno?",
          "How do you prioritise steno practice?",
          "On a scale of 1 to 10, what is your current level of motivation?",
          "What is important to you about stenography?",
          "What is the next small step you can take to improve your steno skill?",
          "What is an even smaller step you could take to improve your steno skill?",
          "What is the next smallest milestone on your steno journey?",
        ],
        journalling: [
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Life story",
          "Change",
          "Reflection",
          "Lessons",
          "Wishes",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
          "What have you achieved?",
          "Thoughts",
          "Ideas",
          "Options",
          "Approaches",
          "Action",
          "Feelings",
          "Gratitude",
          "Accomplishments",
          "What have you learned this week?",
          "What's on your mind?",
          "What happened yesterday?",
          "What happened today?",
          "What will do you today?",
          "What will do you this week?",
          "What have you learned?",
        ],
        "open-ended": [],
      };
      var Xe = o(6723);
      const _e = "creative-short-story",
        et = {
          "creative-short-story": "creative-short-story",
          "steno-motivations": "steno-motivations",
          journalling: "journalling",
          "open-ended": "open-ended",
        },
        tt = +U("%j")(new Date()),
        ot = Math.min(Math.max(tt - 1, 0), 366),
        at = (e) => {
          var t, o, a, n;
          switch (e) {
            case "creative-short-story":
              return null !== (t = Ke[e][ot]) && void 0 !== t
                ? t
                : "Write a creative short story";
            case "steno-motivations":
              return null !== (o = Ke[e][ot]) && void 0 !== o
                ? o
                : "Write about your steno motivations";
            case "journalling":
              return null !== (a = Ke[e][ot]) && void 0 !== a
                ? a
                : "Write about your thoughts and feelings";
            case "open-ended":
              return null !== (n = Ke[e][ot]) && void 0 !== n
                ? n
                : "Write anything you like";
            default:
              return "Write anything";
          }
        },
        nt = () => {
          const [e, t] = (0, a.useState)(_e),
            o = (e) => {
              var o;
              const a =
                null !== (o = et[e.target.value]) && void 0 !== o ? o : _e;
              t(a);
            };
          return (0, Xe.jsxs)(Xe.Fragment, {
            children: [
              (0, Xe.jsx)("div", {
                className: "flex",
                children: (0, Xe.jsx)("fieldset", {
                  children: (0, Xe.jsxs)("div", {
                    className: "flex flex-wrap items-center",
                    children: [
                      (0, Xe.jsx)("legend", {
                        className: "mr3",
                        children: (0, Xe.jsx)("p", {
                          className: "fw-bold text-center mb0",
                          children: "Today's prompt:",
                        }),
                      }),
                      (0, Xe.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                          (0, Xe.jsx)("div", {
                            className: "mr3",
                            children: (0, Xe.jsxs)("label", {
                              htmlFor: "creative-short-story",
                              children: [
                                (0, Xe.jsx)("input", {
                                  onChange: o,
                                  type: "radio",
                                  name: "compose-prompt",
                                  id: "creative-short-story",
                                  value: "creative-short-story",
                                  defaultChecked: !0,
                                }),
                                " ",
                                "Creative short story",
                              ],
                            }),
                          }),
                          (0, Xe.jsx)("div", {
                            className: "mr3",
                            children: (0, Xe.jsxs)("label", {
                              htmlFor: "steno-motivations",
                              children: [
                                (0, Xe.jsx)("input", {
                                  onChange: o,
                                  type: "radio",
                                  name: "compose-prompt",
                                  id: "steno-motivations",
                                  value: "steno-motivations",
                                }),
                                " ",
                                "Steno motivation",
                              ],
                            }),
                          }),
                          (0, Xe.jsx)("div", {
                            className: "mr3",
                            children: (0, Xe.jsxs)("label", {
                              htmlFor: "journalling",
                              children: [
                                (0, Xe.jsx)("input", {
                                  onChange: o,
                                  type: "radio",
                                  name: "compose-prompt",
                                  id: "journalling",
                                  value: "journalling",
                                }),
                                " ",
                                "Journalling",
                              ],
                            }),
                          }),
                          (0, Xe.jsx)("div", {
                            className: "mr3",
                            children: (0, Xe.jsxs)("label", {
                              htmlFor: "open-ended",
                              children: [
                                (0, Xe.jsx)("input", {
                                  onChange: o,
                                  type: "radio",
                                  name: "compose-prompt",
                                  id: "open-ended",
                                  value: "open-ended",
                                }),
                                " ",
                                "Open-ended",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, Xe.jsxs)("p", {
                "data-chromatic": "ignore",
                className:
                  "mt3 b--solid bw-2 b--brand-primary-tint bg-coolgrey-300 dark:bg-coolgrey-900 text-center pr3",
                children: ["\u201c", at(e), "\u201d"],
              }),
            ],
          });
        };
      var st = o(2976),
        rt = o(3008);
      const it = /(\s)/,
        ut = (e) => {
          let { metWords: t, userSettings: o, yourWords: n } = e;
          const s = n
            .trim()
            .split(it)
            .filter(Boolean)
            .map((e, n, s) => {
              if (" " === e) return (0, Xe.jsx)(a.Fragment, { children: e }, n);
              if ("\n" === e)
                return (0, Xe.jsx)(
                  a.Fragment,
                  { children: (0, Xe.jsx)("br", {}) },
                  n,
                );
              const r = s.filter((t) => t === e).length,
                i =
                  "spaceBeforeOutput" === o.spacePlacement
                    ? ` ${e}`
                    : "spaceAfterOutput" === o.spacePlacement
                      ? `${e} `
                      : e;
              return !t[i] || (t[i] && r === t[i])
                ? (0, Xe.jsx)(
                    "span",
                    { className: "highlight-new-word", children: e },
                    `${n}`,
                  )
                : t[i] && (30 === t[i] || (t[i] > 30 && t[i] - r < 30))
                  ? (0, Xe.jsx)(
                      "span",
                      { className: "highlight-memorised-word", children: e },
                      `${n}`,
                    )
                  : (0, Xe.jsx)(a.Fragment, { children: e }, n);
            });
          return (0, Xe.jsx)("p", { children: s });
        },
        ht = () =>
          (0, Xe.jsx)("div", {
            className: "mt3",
            children: (0, Xe.jsxs)("details", {
              children: [
                (0, Xe.jsx)("summary", {
                  className: "de-emphasized",
                  children: "Highlights",
                }),
                (0, Xe.jsxs)("div", {
                  className: "flex flex-column",
                  children: [
                    (0, Xe.jsxs)("p", {
                      className: "mb0 de-emphasized",
                      children: [
                        "New words written for the first time have a",
                        " ",
                        (0, Xe.jsx)("span", {
                          style: {
                            borderBottom: "2px solid var(--magenta-700)",
                          },
                          children: "violet underline.",
                        }),
                      ],
                    }),
                    (0, Xe.jsxs)("p", {
                      className: "mb0 de-emphasized",
                      children: [
                        "Newly memorised words written for the 30th time have a",
                        " ",
                        (0, Xe.jsx)("span", {
                          style: {
                            borderBottom: "2px solid var(--violet-600)",
                          },
                          children: "magenta underline.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        lt = (e) => {
          let { wordCount: t } = e;
          return (0, Xe.jsx)(Xe.Fragment, {
            children: `${t} ${1 === t ? "word" : "words"}`,
          });
        };
      var ct = o(8282);
      const yt = "typey-KPOES-words",
        dt = "typey-KPOES-time",
        pt = (e) => {
          let { metWords: t, updateMultipleMetWords: o, userSettings: n } = e;
          const [s, r] = (0, a.useState)(0),
            [i, u] = (0, a.useState)(""),
            [h, l] = (0, a.useState)(!1),
            c = (0, st.md)(ct.tc);
          (0, a.useEffect)(() => {
            try {
              if (window.localStorage) {
                let e = window.localStorage.getItem(yt),
                  t = window.localStorage.getItem(dt);
                e && t && Date.now() - (+t || 0) < 144e5 && u(e);
              }
            } catch (e) {
              console.error("Unable to read local storage. ", e);
            }
          }, []);
          return (0, Xe.jsx)("div", {
            children: h
              ? (0, Xe.jsxs)(Xe.Fragment, {
                  children: [
                    (0, Xe.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "You wrote ",
                        (0, Xe.jsx)(lt, { wordCount: s }),
                        ":",
                      ],
                    }),
                    (0, Xe.jsx)("div", {
                      id: "your-words",
                      className:
                        "db lh1-5 py05 px1 bg-info dark:text-coolgrey-900 bw-1 b--solid b--brand-primary-tint br-4 w-100 mw100",
                      children: (0, Xe.jsx)(ut, {
                        yourWords: i,
                        metWords: t,
                        userSettings: n,
                      }),
                    }),
                    (0, Xe.jsx)(rt.A, {
                      className:
                        "js-clipboard-button button button--secondary table-cell mt3 mr2 copy-to-clipboard",
                      style: { lineHeight: 2 },
                      dataClipboardTarget: "#your-words",
                      children: "Copy your words to clipboard",
                    }),
                    (0, Xe.jsx)(ht, {}),
                  ],
                })
              : (0, Xe.jsxs)(Xe.Fragment, {
                  children: [
                    (0, Xe.jsx)("p", {
                      className: "mb1",
                      children: (0, Xe.jsx)("label", {
                        htmlFor: "write-your-words",
                        children: "Write your words",
                      }),
                    }),
                    (0, Xe.jsx)("textarea", {
                      id: "write-your-words",
                      className:
                        "input-textarea bg-info dark:text-coolgrey-900 bw-1 b--solid br-4 db w-100 mw100",
                      autoCapitalize: "off",
                      autoComplete: "off",
                      autoCorrect: "off",
                      spellCheck: !1,
                      onChange: (e) => {
                        r(
                          e.target.value.trim().split(/\s/).filter(Boolean)
                            .length,
                        );
                        const t = e.target.value.slice(0, 1e4);
                        u(t);
                        try {
                          window.localStorage.setItem(yt, t),
                            window.localStorage.setItem(dt, `${Date.now()}`);
                        } catch (o) {
                          console.error(
                            "Unable to write to local storage. ",
                            o,
                          );
                        }
                      },
                      rows: 6,
                      value: i,
                    }),
                    (0, Xe.jsx)("p", {
                      className: "mt1",
                      children: (0, Xe.jsx)(lt, { wordCount: s }),
                    }),
                    (0, Xe.jsx)("button", {
                      className: "button mr2",
                      onClick: () => {
                        l(!0), o(i.split(/\s/), c);
                        const e = document.querySelector(
                          ".js-clipboard-button",
                        );
                        e && e.focus();
                      },
                      children: "Done",
                    }),
                  ],
                }),
          });
        };
      var mt = o(6145),
        gt = o(4480);
      const wt = "KPOES",
        ft =
          "Write what's in your head. This is a creative space for you to compose new text at your leisure. It may test your vocabulary and help you spot gaps in it. You could make a habit of writing a target number of words each day.";
      function Wt(e) {
        let {
          fetchAndSetupGlobalDict: t,
          globalLookupDictionary: o,
          globalLookupDictionaryLoaded: a,
          metWords: s,
          personalDictionaries: r,
          userSettings: i,
          updateMultipleMetWords: u,
        } = e;
        return (0, Xe.jsxs)("div", {
          children: [
            (0, Xe.jsx)("div", {
              className: "p3 mx-auto mw-1024",
              children: (0, Xe.jsx)("div", {
                className: "flex flex-wrap justify-between",
                children: (0, Xe.jsxs)("div", {
                  className: "mx-auto mw-1024 min-width-320 w-100",
                  children: [
                    (0, Xe.jsxs)("h3", {
                      id: "typey-type-KPOES-game",
                      className: "text-center mb3",
                      children: [wt, " game"],
                    }),
                    (0, Xe.jsx)(n.A, {
                      introText: ft,
                      robot: (0, Xe.jsx)(mt.h, {
                        id: "composing-robot-KPOES",
                        role: "img",
                        "aria-labelledby": "composing-robot-title",
                      }),
                    }),
                    (0, Xe.jsx)(nt, {}),
                    (0, Xe.jsx)(pt, {
                      metWords: s,
                      updateMultipleMetWords: u,
                      userSettings: i,
                    }),
                  ],
                }),
              }),
            }),
            (0, Xe.jsxs)("div", {
              className:
                "mx-auto min-width-320 w-100 landing-page-section bg-slat dark:bg-coolgrey-1100 px3",
              children: [
                (0, Xe.jsx)("div", {
                  className: "pt6 mw-584 mx-auto text-center",
                  children: (0, Xe.jsx)(gt.A, {
                    fetchAndSetupGlobalDict: t,
                    globalLookupDictionary: o,
                    globalLookupDictionaryLoaded: a,
                    personalDictionaries: r,
                    userSettings: i,
                  }),
                }),
                (0, Xe.jsxs)("p", {
                  className: "text-center mt10 text-small",
                  children: [
                    "Got a suggestion?",
                    " ",
                    (0, Xe.jsx)("a", {
                      href: "https://forms.gle/kkSZZJFrY4USohgq6",
                      className: "mt0",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      id: "ga--KPOES--give-feedback",
                      children: "Give feedback (form opens in new tab)",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var vt = o(7532),
        bt = o(4457);
      function kt(e) {
        let {
          globalLookupDictionary: t,
          globalLookupDictionaryLoaded: o,
          personalDictionaries: n,
          metWords: s,
          userSettings: r,
        } = e;
        const { appFetchAndSetupGlobalDict: i, updateMultipleMetWords: u } = (0,
          bt.$W)(),
          h = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            var e;
            null === (e = h.current) || void 0 === e || e.focus();
          }, []),
          (0, a.useEffect)(() => {
            i(!1, null).catch((e) => {
              console.error(e);
            });
          }, [i]),
          (0, Xe.jsxs)("main", {
            id: "main",
            children: [
              (0, Xe.jsx)(vt.A, {
                children: (0, Xe.jsx)("div", {
                  className: "flex mr1 self-center",
                  children: (0, Xe.jsx)("header", {
                    className: "flex items-center min-h-40",
                    children: (0, Xe.jsx)("h2", {
                      ref: h,
                      tabIndex: -1,
                      children: "KPOES",
                    }),
                  }),
                }),
              }),
              (0, Xe.jsx)(Wt, {
                fetchAndSetupGlobalDict: i,
                metWords: s,
                globalLookupDictionary: t,
                globalLookupDictionaryLoaded: o,
                personalDictionaries: n,
                userSettings: r,
                updateMultipleMetWords: u,
              }),
            ],
          })
        );
      }
    },
    7154: (e, t, o) => {
      o.d(t, { A: () => n });
      o(2483);
      var a = o(6723);
      function n(e) {
        let { introText: t, robot: o } = e;
        return (0, a.jsx)("div", {
          className: "mw-824 mr3 flex-grow",
          children: (0, a.jsxs)("div", {
            className: "flex",
            children: [
              (0, a.jsx)("div", {
                className: "w-100 mw-48 mr3 game-robot",
                children: o,
              }),
              (0, a.jsx)("p", { children: t }),
            ],
          }),
        });
      }
    },
    4788: (e, t, o) => {
      o.d(t, { f: () => s });
      const a = new Date(),
        n = new Date();
      function s(e, t, o, r) {
        function i(t) {
          return e((t = 0 === arguments.length ? new Date() : new Date(+t))), t;
        }
        return (
          (i.floor = (t) => (e((t = new Date(+t))), t)),
          (i.ceil = (o) => (e((o = new Date(o - 1))), t(o, 1), e(o), o)),
          (i.round = (e) => {
            const t = i(e),
              o = i.ceil(e);
            return e - t < o - e ? t : o;
          }),
          (i.offset = (e, o) => (
            t((e = new Date(+e)), null == o ? 1 : Math.floor(o)), e
          )),
          (i.range = (o, a, n) => {
            const s = [];
            if (
              ((o = i.ceil(o)),
              (n = null == n ? 1 : Math.floor(n)),
              !(o < a) || !(n > 0))
            )
              return s;
            let r;
            do {
              s.push((r = new Date(+o))), t(o, n), e(o);
            } while (r < o && o < a);
            return s;
          }),
          (i.filter = (o) =>
            s(
              (t) => {
                if (t >= t) for (; e(t), !o(t); ) t.setTime(t - 1);
              },
              (e, a) => {
                if (e >= e)
                  if (a < 0) for (; ++a <= 0; ) for (; t(e, -1), !o(e); );
                  else for (; --a >= 0; ) for (; t(e, 1), !o(e); );
              },
            )),
          o &&
            ((i.count = (t, s) => (
              a.setTime(+t), n.setTime(+s), e(a), e(n), Math.floor(o(a, n))
            )),
            (i.every = (e) => (
              (e = Math.floor(e)),
              isFinite(e) && e > 0
                ? e > 1
                  ? i.filter(
                      r
                        ? (t) => r(t) % e === 0
                        : (t) => i.count(0, t) % e === 0,
                    )
                  : i
                : null
            ))),
          i
        );
      }
    },
  },
]);
//# sourceMappingURL=104.9f9037b7.chunk.js.map
