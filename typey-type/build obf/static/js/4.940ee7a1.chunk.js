(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [4],
  {
    5022: (e, t, n) => {
      var r = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt,
        a = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        f = "object" == typeof self && self && self.Object === Object && self,
        s = a || f || Function("return this")(),
        l = Object.prototype.toString,
        d = Math.max,
        v = Math.min,
        y = function () {
          return s.Date.now();
        };
      function p(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function g(e) {
        if ("number" == typeof e) return e;
        if (
          (function (e) {
            return (
              "symbol" == typeof e ||
              ((function (e) {
                return !!e && "object" == typeof e;
              })(e) &&
                "[object Symbol]" == l.call(e))
            );
          })(e)
        )
          return NaN;
        if (p(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = p(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(r, "");
        var n = i.test(e);
        return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? NaN : +e;
      }
      e.exports = function (e, t, n) {
        var r,
          o,
          i,
          u,
          c,
          a,
          f = 0,
          s = !1,
          l = !1,
          w = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function b(t) {
          var n = r,
            i = o;
          return (r = o = void 0), (f = t), (u = e.apply(i, n));
        }
        function h(e) {
          var n = e - a;
          return void 0 === a || n >= t || n < 0 || (l && e - f >= i);
        }
        function m() {
          var e = y();
          if (h(e)) return k(e);
          c = setTimeout(
            m,
            (function (e) {
              var n = t - (e - a);
              return l ? v(n, i - (e - f)) : n;
            })(e),
          );
        }
        function k(e) {
          return (c = void 0), w && r ? b(e) : ((r = o = void 0), u);
        }
        function E() {
          var e = y(),
            n = h(e);
          if (((r = arguments), (o = this), (a = e), n)) {
            if (void 0 === c)
              return (function (e) {
                return (f = e), (c = setTimeout(m, t)), s ? b(e) : u;
              })(a);
            if (l) return (c = setTimeout(m, t)), b(a);
          }
          return void 0 === c && (c = setTimeout(m, t)), u;
        }
        return (
          (t = g(t) || 0),
          p(n) &&
            ((s = !!n.leading),
            (i = (l = "maxWait" in n) ? d(g(n.maxWait) || 0, t) : i),
            (w = "trailing" in n ? !!n.trailing : w)),
          (E.cancel = function () {
            void 0 !== c && clearTimeout(c), (f = 0), (r = a = o = c = void 0);
          }),
          (E.flush = function () {
            return void 0 === c ? u : k(y());
          }),
          E
        );
      };
    },
    5004: (e, t, n) => {
      "use strict";
      n.d(t, { Mj: () => a });
      var r = n(2483);
      n(5022);
      var o = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;
      function i(e, t, n, i) {
        const u = (0, r.useRef)(t);
        o(() => {
          u.current = t;
        }, [t]),
          (0, r.useEffect)(() => {
            const t = (null == n ? void 0 : n.current) ?? window;
            if (!t || !t.addEventListener) return;
            const r = (e) => {
              u.current(e);
            };
            return (
              t.addEventListener(e, r, i),
              () => {
                t.removeEventListener(e, r, i);
              }
            );
          }, [e, n, i]);
      }
      function u(e) {
        const t = (0, r.useRef)(() => {
          throw new Error("Cannot call an event handler while rendering.");
        });
        return (
          o(() => {
            t.current = e;
          }, [e]),
          (0, r.useCallback)(
            function () {
              return t.current(...arguments);
            },
            [t],
          )
        );
      }
      var c = "undefined" === typeof window;
      function a(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { initializeWithValue: o = !0 } = n,
          a = (0, r.useCallback)(
            (e) => (n.serializer ? n.serializer(e) : JSON.stringify(e)),
            [n],
          ),
          f = (0, r.useCallback)(
            (e) => {
              if (n.deserializer) return n.deserializer(e);
              if ("undefined" === e) return;
              const r = t instanceof Function ? t() : t;
              let o;
              try {
                o = JSON.parse(e);
              } catch (i) {
                return console.error("Error parsing JSON:", i), r;
              }
              return o;
            },
            [n, t],
          ),
          s = (0, r.useCallback)(() => {
            const n = t instanceof Function ? t() : t;
            if (c) return n;
            try {
              const t = window.localStorage.getItem(e);
              return t ? f(t) : n;
            } catch (r) {
              return (
                console.warn(
                  `Error reading localStorage key \u201c${e}\u201d:`,
                  r,
                ),
                n
              );
            }
          }, [t, e, f]),
          [l, d] = (0, r.useState)(() =>
            o ? s() : t instanceof Function ? t() : t,
          ),
          v = u((t) => {
            c &&
              console.warn(
                `Tried setting localStorage key \u201c${e}\u201d even though environment is not a client`,
              );
            try {
              const n = t instanceof Function ? t(s()) : t;
              window.localStorage.setItem(e, a(n)),
                d(n),
                window.dispatchEvent(
                  new StorageEvent("local-storage", { key: e }),
                );
            } catch (n) {
              console.warn(
                `Error setting localStorage key \u201c${e}\u201d:`,
                n,
              );
            }
          });
        (0, r.useEffect)(() => {
          d(s());
        }, [e]);
        const y = (0, r.useCallback)(
          (t) => {
            ((null == t ? void 0 : t.key) && t.key !== e) || d(s());
          },
          [e, s],
        );
        return i("storage", y), i("local-storage", y), [l, v];
      }
    },
  },
]);
//# sourceMappingURL=4.940ee7a1.chunk.js.map
