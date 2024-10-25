"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [690],
  {
    8278: (e, t, s) => {
      s.d(t, { GE: () => c, J1: () => l, LL: () => r, yg: () => i });
      var n = s(3071),
        a = s(2976),
        o = s(3187);
      function r() {
        const e = (0, a.Xr)(o.Zb);
        return (t) => {
          let s = "BAD_INPUT";
          t &&
            t.target &&
            t.target.name &&
            (e(t.target.name), (s = t.target.name));
          let a = s;
          s || (a = "BAD_INPUT"),
            n.Ay.event({
              category: "Global user settings",
              action: "Change writer input",
              label: a,
            });
        };
      }
      function i() {
        const e = (0, a.Xr)(o.y4);
        return (t) => {
          let s = "BAD_INPUT";
          t &&
            t.target &&
            t.target.name &&
            (e(t.target.name), (s = t.target.name));
          let a = s;
          s || (a = "BAD_INPUT"),
            n.Ay.event({
              category: "Global user settings",
              action: "Change input for KAOES",
              label: a,
            });
        };
      }
      function l() {
        const e = (0, a.Xr)(o.AJ);
        return (t) => {
          const s = t.target,
            a = s.checked,
            o = s.name;
          e(o, a);
          let r = a;
          void 0 === a ? (r = "BAD_INPUT") : r.toString(),
            n.Ay.event({
              category: "Global user settings",
              action: "Change " + o,
              label: r,
            });
        };
      }
      function c() {
        const e = (0, a.Xr)(o.Jl);
        return () => {
          e(Date.now());
          n.Ay.event({
            category: "Global user settings",
            action: "Dismiss backup banner",
            label: "Dismiss",
          });
        };
      }
    },
    7690: (e, t, s) => {
      s.r(t), s.d(t, { default: () => W });
      var n = s(2483),
        a = s(3071),
        o = s(2338),
        r = s(3831),
        i = s(3208),
        l = s(3112),
        c = s(8125),
        u = s(2625),
        d = s(9119),
        h = s(8939),
        p = s(7434),
        m = s(7329),
        y = s(8668),
        g = s(9502),
        S = s(6507),
        x = s(5820),
        b = s(9765),
        w = s(1029),
        f = s(8402),
        j = s(3746),
        v = s(9632),
        N = s(6648),
        L = s(355),
        k = s(6810),
        A = s(7594),
        B = s(7532),
        T = s(4457),
        I = s(8282),
        D = s(2105),
        R = s(2335),
        C = s(3187),
        U = s(8278),
        E = s(6723);
      class P extends n.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              stenoBrief: "",
              stenoStroke: new y.Ay(),
              stenoDictionary: {},
              writtenText: "",
              valueRawSteno: "",
              valueQWERTYSteno: "",
            });
        }
        updateRawSteno(e) {
          let t;
          (t = e && e.target && e.target.value ? e.target.value : ""),
            " " === t
              ? (this.sendStroke(this.state.stenoBrief), (t = ""))
              : t.includes(" ") &&
                ((t = t.trim()), this.sendStroke(t), (t = "")),
            this.setState({ stenoBrief: t, valueRawSteno: t });
        }
        updateQWERTYSteno(e) {
          let t;
          if (
            ((t = e && e.target && e.target.value ? e.target.value : ""),
            " " === t)
          )
            this.sendStroke(this.state.stenoBrief), (t = "");
          else if (t.includes(" ")) {
            t = t.trim();
            let e = this.updateBrief(t);
            this.sendStroke(e), (t = "");
          } else this.updateBrief(t);
          this.setState({ valueQWERTYSteno: t });
        }
        componentDidMount() {
          (0, A.$0)("/typey-type/dictionaries/typey-type/typey-type.json")
            .then((e) => {
              this.setState({ stenoDictionary: e });
            })
            .catch((e) => console.error(e)),
            this.mainHeading && this.mainHeading.focus();
        }
        downloadDiagramSVG(e) {
          let t,
            s =
              "typey-type-" +
              this.props.userSettings.stenoLayout.replace("stenoLayout", "") +
              "-" +
              (this.state.stenoBrief || "no-brief") +
              ".svg";
          a.Ay.event({
            category: "Downloads",
            action: "Click",
            label: s || "",
          });
          let n = document.getElementById("stenoDiagram");
          if (n) {
            let e = n.outerHTML;
            if (void 0 !== Blob) {
              let s = new Blob([e], { type: "image/svg+xml" });
              t = URL.createObjectURL(s);
            } else
              t = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(e);
          } else t = null;
          this.downloadLink && t && (this.downloadLink.href = t);
        }
        sendStroke(e) {
          let t = this.lookUpStrokeInDictionary(e),
            s = this.state.stenoBrief;
          s || (s = "BAD_INPUT"),
            a.Ay.event({ category: "Writer", action: "Send stroke", label: s }),
            this.setState({
              stenoBrief: "",
              stenoStroke: new y.Ay(),
              valueQWERTYSteno: "",
              valueRawSteno: "",
              writtenText: t,
            });
        }
        sendDiagramStroke() {
          this.sendStroke(this.state.stenoBrief);
        }
        lookUpStrokeInDictionary(e) {
          let t = e;
          return (
            this.state.stenoDictionary[e] &&
              (t = this.state.stenoDictionary[e]),
            t
          );
        }
        updateBrief(e) {
          let t = (0, g.LH)(e, this.props.userSettings.stenoLayout);
          return (
            this.setState({ stenoBrief: t.toString(), stenoStroke: t }),
            t.toString()
          );
        }
        addKeyToStenoBrief(e) {
          let t = this.state.stenoStroke.set(e);
          this.setState({
            stenoBrief: t.toString(),
            stenoStroke: t,
            valueQWERTYSteno: "",
            valueRawSteno: "",
          });
        }
        render() {
          let e = S.A,
            t = o.A,
            s = "e.g. HEU";
          switch (this.props.userSettings.stenoLayout) {
            case "stenoLayoutAmericanSteno":
            default:
              (e = S.A), (t = o.A), (s = "e.g. HEU");
              break;
            case "stenoLayoutNoNumberBarInnerThumbNumbers":
              (e = x.A), (t = r.A), (s = "e.g. HEU");
              break;
            case "stenoLayoutNoNumberBarOuterThumbNumbers":
              (e = b.A), (t = i.A), (s = "e.g. HEU");
              break;
            case "stenoLayoutBrazilianPortugueseSteno":
              (e = f.A), (t = c.A), (s = "e.g. #SKTFPLRAO*EURWBPGHTSDZ");
              break;
            case "stenoLayoutYaweiChineseSteno":
              (e = w.A), (t = l.A), (s = "e.g. #XBDZGWIUNEAO-#XBDZGWIUNEAO");
              break;
            case "stenoLayoutDanishSteno":
              (e = j.A), (t = u.A), (s = "e.g. #STKPVHRAO*\xc6\xc5FRPELKTSDDN");
              break;
            case "stenoLayoutItalianMichelaSteno":
              (e = v.A), (t = d.A), (s = "e.g. FSCZPNRXIUuieanpzcsf");
              break;
            case "stenoLayoutJapaneseSteno":
              (e = N.A),
                (t = h.A),
                (s =
                  "e.g. \u6f22\u300c4\u305f\u306a3\u304b\u30552\u3044\u30461\u304a\u3063*4\u305f\u306a3\u304b\u30552\u3044\u30461\u304a\u3063\u300d\u30ab");
              break;
            case "stenoLayoutKoreanModernCSteno":
              (e = L.A),
                (t = p.A),
                (s =
                  "e.g. 12345\u314e\u3141\u3131\u3148\u3134\u3137\u3147\u3145\u3142\u3139\u3157\u314f\u315c*\u3153\u316367890\u314e\u3147\u3139\u3131\u3137\u3142\u3134\u3145\u3148\u3141");
              break;
            case "stenoLayoutPalantype":
              (e = k.A), (t = m.A), (s = "e.g. SCPTH+MFRNLYOEAUI^NLCMFRPT+SH");
          }
          let n = null;
          document.getElementById("stenoDiagram") && (n = "#");
          let a =
            "typey-type-" +
            this.props.userSettings.stenoLayout.replace("stenoLayout", "") +
            "-" +
            (this.state.stenoBrief || "no-brief") +
            ".svg";
          return (0, E.jsxs)("main", {
            id: "main",
            children: [
              (0, E.jsxs)(B.A, {
                children: [
                  (0, E.jsx)("div", {
                    className: "flex mr1 self-center",
                    children: (0, E.jsx)("header", {
                      className: "flex items-center min-h-40",
                      children: (0, E.jsx)("h2", {
                        ref: (e) => {
                          this.mainHeading = e;
                        },
                        tabIndex: -1,
                        id: "writer",
                        children: "Writer",
                      }),
                    }),
                  }),
                  (0, E.jsx)("div", {
                    className: "flex mxn2",
                    children: n
                      ? (0, E.jsx)("a", {
                          href: n,
                          ref: (e) => {
                            this.downloadLink = e;
                          },
                          download: a,
                          onClick: this.downloadDiagramSVG.bind(this),
                          className:
                            "link-button link-button-ghost table-cell mr1",
                          children: "Download diagram (SVG)",
                        })
                      : null,
                  }),
                ],
              }),
              (0, E.jsx)("div", {
                className: "p3 mx-auto mw-1024",
                children: (0, E.jsxs)("div", {
                  className: "flex flex-wrap justify-between",
                  children: [
                    (0, E.jsxs)("div", {
                      className: "mw-568",
                      children: [
                        (0, E.jsxs)("p", {
                          className: "mw-448 h3 mr3 wrap text-center",
                          children: [
                            (0, E.jsx)("span", {
                              className: "visually-hidden",
                              children: "Your written text: ",
                            }),
                            this.state.writtenText,
                            "\u200b",
                          ],
                        }),
                        (0, E.jsx)("div", {
                          className: "mt4",
                          children: (0, E.jsx)(t, {
                            classes: "steno-diagram-svg mw100",
                            id: "stenoDiagram",
                            ...e(this.state.stenoBrief),
                            handleOnClick: this.addKeyToStenoBrief.bind(this),
                            brief: this.state.stenoBrief,
                            diagramWidth: "440",
                          }),
                        }),
                        (0, E.jsx)("p", {
                          className: "text-center mr4 mt1",
                          children: (0, E.jsx)("button", {
                            onClick: this.sendDiagramStroke.bind(this),
                            className: "button text-center",
                            children: "Send stroke",
                          }),
                        }),
                      ],
                    }),
                    (0, E.jsxs)("div", {
                      className: "mw-384 w-336",
                      children: [
                        (0, E.jsx)("h3", { children: "Settings" }),
                        (0, E.jsxs)("div", {
                          className: "flex flex-wrap",
                          children: [
                            "stenoLayoutAmericanSteno" ===
                              this.props.userSettings.stenoLayout &&
                            "qwerty" ===
                              this.props.globalUserSettings.writerInput
                              ? (0, E.jsxs)("p", {
                                  className: "mt1 mb2 mr1",
                                  children: [
                                    (0, E.jsx)("label", {
                                      htmlFor: "qwertyStenoInput",
                                      className: "db mb1",
                                      children: "QWERTY steno input",
                                    }),
                                    (0, E.jsx)("input", {
                                      id: "qwertyStenoInput",
                                      "aria-describedby":
                                        "qwerty-type-space-to-send",
                                      autoCapitalize: "off",
                                      autoComplete: "off",
                                      autoCorrect: "off",
                                      className:
                                        "input-textarea overflow-hidden",
                                      onChange:
                                        this.updateQWERTYSteno.bind(this),
                                      placeholder: "e.g. rnm",
                                      value: this.state.valueQWERTYSteno,
                                    }),
                                    (0, E.jsx)("span", {
                                      id: "qwerty-type-space-to-send",
                                      className: "text-small",
                                      children:
                                        "Type a space to send the stroke",
                                    }),
                                  ],
                                })
                              : null,
                            "raw" ===
                              this.props.globalUserSettings.writerInput ||
                            "stenoLayoutAmericanSteno" !==
                              this.props.userSettings.stenoLayout
                              ? (0, E.jsxs)("p", {
                                  className: "mt1 mb2 mr1",
                                  children: [
                                    (0, E.jsx)("label", {
                                      htmlFor: "rawStenoInput",
                                      className: "db mb1",
                                      children: "Raw steno input",
                                    }),
                                    (0, E.jsx)("input", {
                                      id: "rawStenoInput",
                                      "aria-describedby":
                                        "raw-type-space-to-send",
                                      autoCapitalize: "off",
                                      autoComplete: "off",
                                      autoCorrect: "off",
                                      className:
                                        "input-textarea overflow-hidden",
                                      onChange: this.updateRawSteno.bind(this),
                                      placeholder: s,
                                      value: this.state.valueRawSteno,
                                    }),
                                    (0, E.jsx)("span", {
                                      id: "raw-type-space-to-send",
                                      className: "text-small",
                                      children:
                                        "Type a space to send the stroke",
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                        (0, E.jsxs)("div", {
                          className: "mb2 mw-240",
                          children: [
                            (0, E.jsx)("label", {
                              className: "mb1 db",
                              htmlFor: "stenoLayout",
                              children: "Steno layout",
                            }),
                            (0, E.jsxs)("select", {
                              id: "stenoLayout",
                              name: "writerStenoLayout",
                              value: this.props.userSettings.stenoLayout,
                              onChange: this.props.changeStenoLayout,
                              className: "text-small form-control w6",
                              children: [
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutAmericanSteno",
                                  children:
                                    "Ward Stone Ireland (Plover, EcoSteno, SOFT/HRUF etc.)",
                                }),
                                (0, E.jsx)("option", {
                                  value:
                                    "stenoLayoutNoNumberBarInnerThumbNumbers",
                                  children:
                                    "Inner thumbers (TinyMod, Steko, etc.)",
                                }),
                                (0, E.jsx)("option", {
                                  value:
                                    "stenoLayoutNoNumberBarOuterThumbNumbers",
                                  children:
                                    "Outer thumbers (Uni, Georgi, etc.)",
                                }),
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutPalantype",
                                  children: "Palantype",
                                }),
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutBrazilianPortugueseSteno",
                                  children: "Brazilian Portuguese steno",
                                }),
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutYaweiChineseSteno",
                                  children: "Chinese Yawei steno",
                                }),
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutDanishSteno",
                                  children: "Danish steno",
                                }),
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutItalianMichelaSteno",
                                  children: "Italian Michela steno",
                                }),
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutJapaneseSteno",
                                  children: "Japanese steno",
                                }),
                                (0, E.jsx)("option", {
                                  value: "stenoLayoutKoreanModernCSteno",
                                  children: "Korean Modern C steno",
                                }),
                              ],
                            }),
                          ],
                        }),
                        "stenoLayoutAmericanSteno" ===
                        this.props.userSettings.stenoLayout
                          ? (0, E.jsxs)("fieldset", {
                              children: [
                                (0, E.jsx)("legend", {
                                  children: "Raw or QWERTY steno input",
                                }),
                                (0, E.jsxs)("div", {
                                  className: "flex",
                                  children: [
                                    (0, E.jsx)("div", {
                                      className:
                                        "flex flex-wrap justify-between",
                                      children: (0, E.jsx)("p", {
                                        className: "radio mr3",
                                        children: (0, E.jsxs)("label", {
                                          htmlFor: "raw",
                                          className: "mb1",
                                          children: [
                                            (0, E.jsx)("input", {
                                              type: "radio",
                                              name: "raw",
                                              id: "raw",
                                              onChange:
                                                this.props.changeWriterInput,
                                              checked:
                                                "raw" ===
                                                this.props.globalUserSettings
                                                  .writerInput,
                                            }),
                                            " Raw",
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, E.jsx)("div", {
                                      className:
                                        "flex flex-wrap justify-between",
                                      children: (0, E.jsx)("p", {
                                        className: "radio mr3",
                                        children: (0, E.jsxs)("label", {
                                          htmlFor: "qwerty",
                                          className: "mb1",
                                          children: [
                                            (0, E.jsx)("input", {
                                              type: "radio",
                                              name: "qwerty",
                                              id: "qwerty",
                                              onChange:
                                                this.props.changeWriterInput,
                                              checked:
                                                "qwerty" ===
                                                this.props.globalUserSettings
                                                  .writerInput,
                                            }),
                                            " QWERTY",
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, E.jsx)("p", {
                              className: "text-small",
                              children:
                                "Note: clicking on the diagram only works for the Ward Stone Ireland (Plover, EcoSteno, SOFT/HRUF etc.) layout at this time.",
                            }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      }
      const W = (0, T.Gx)(
        (0, D.VL)(
          function (e) {
            const t = (0, R.J9)(),
              s = (0, U.LL)();
            return (0, E.jsx)(P, {
              ...e,
              changeStenoLayout: t,
              changeWriterInput: s,
            });
          },
          [
            ["userSettings", I.sj],
            ["globalUserSettings", C.tq],
          ],
        ),
      );
    },
  },
]);
//# sourceMappingURL=690.b6dbbc2c.chunk.js.map
