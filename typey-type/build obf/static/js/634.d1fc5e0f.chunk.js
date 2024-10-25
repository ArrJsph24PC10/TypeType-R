"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [634],
  {
    634: (e, s, l) => {
      l.r(s), l.d(s, { default: () => E });
      var r = l(2483),
        a = l(3071);
      const n = "setRuleStatus",
        i = "setRuleWithDataStatus",
        t = "setRegexRuleData";
      var o = l(7532),
        h = l(5004);
      const c = {
          endsWithSuffix: "ignored",
          fewerThanFiveCharacters: "off",
          hasAnyLongVowel: "ignored",
          hasAnyShortVowel: "ignored",
          hasAnyVowelKey: "ignored",
          hasApostrophes: "off",
          hasCapitalLetter: "off",
          hasCoding: "off",
          hasCompoundClusters: "ignored",
          hasContractionsPluralsOrPossessives: "ignored",
          hasDictionaryFormatting: "off",
          hasDigraphs: "ignored",
          hasDiphthong: "ignored",
          hasDisambiguatingBrief: "off",
          hasDoubleConsonants: "ignored",
          hasDoubleLetters: "ignored",
          hasDoubleVowels: "ignored",
          hasEfAsVeeOrEss: "ignored",
          hasForcedWordEnding: "off",
          hasInversion: "ignored",
          hasLhsConsonantWithMultipleKeys: "ignored",
          hasLongTranslations: "ignored",
          hasLongWords: "ignored",
          hasMedical: "off",
          hasNumbers: "off",
          hasOneConsonantOnEachSide: "ignored",
          hasOneKeyPerFinger: "ignored",
          hasOneOrMoreSpaces: "ignored",
          hasOneSpace: "ignored",
          hasOnlyOneVowelKey: "ignored",
          hasOnlyShortIVowel: "ignored",
          hasPhillyShift: "off",
          hasPunctuation: "off",
          hasRhsConsonantWithMultipleKeys: "ignored",
          hasShortTranslations: "ignored",
          hasSimpleStenoKeys: "ignored",
          hasSomeConsonants: "ignored",
          hasStar: "off",
          hasStretchKeys: "ignored",
          hasSuppressedSpaceStroke: "off",
          hasUnstressedVowels: "ignored",
          hasVowelDisambiguator: "ignored",
          isBrief: "off",
          isFingerspelled: "off",
          isMultiStroke: "ignored",
          isOneSyllable: "on",
          isRomanNumeral: "off",
          isSingleStroke: "ignored",
          isSuperlative: "ignored",
          isUppercase: "off",
          moreThanOneSyllable: "ignored",
          moreThanTwoCharacters: "ignored",
          outlineIsTranslation: "ignored",
          startsWithPrefix: "ignored",
        },
        d = (e, s) =>
          (null === s || void 0 === s ? void 0 : s.type) === n
            ? ((e, s) => ({ ...e, [s.ruleName]: s.ruleStatus }))(e, s.payload)
            : e,
        m = {
          outlineRegexText: "",
          outlineMatching: "ignored",
          translationRegexText: "",
          translationMatching: "ignored",
        },
        u = (e, s) => {
          switch (null === s || void 0 === s ? void 0 : s.type) {
            case i:
              return ((e, s) => ({ ...e, [s.ruleName]: s.ruleStatus }))(
                e,
                s.payload,
              );
            case t:
              return ((e, s) => ({
                ...e,
                [`${s.entryPart}RegexText`]: s.regexText,
              }))(e, s.payload);
            default:
              return e;
          }
        };
      var x = l(3391),
        p = l(5350),
        g = l(6723);
      const j = (e) => {
          let {
            ruleName: s,
            prettyName: l,
            onChangeRuleStatus: r,
            rulesState: a,
          } = e;
          return (0, g.jsxs)("p", {
            className: "mb1 flex items-center",
            children: [
              (0, g.jsxs)("select", {
                id: s,
                name: s,
                value: a[s],
                onChange: r,
                "data-rule-status": a[s],
                className: "rule-select text-small form-control w-80 mr1",
                children: [
                  (0, g.jsx)("option", { value: "on", children: "On" }),
                  (0, g.jsx)("option", { value: "off", children: "Off" }),
                  (0, g.jsx)("option", {
                    value: "ignored",
                    children: "Ignored",
                  }),
                ],
              }),
              (0, g.jsx)("label", {
                className: "dib lh-single",
                htmlFor: s,
                children: l,
              }),
            ],
          });
        },
        N = (e) => {
          let {
            regexRuleName: s,
            regexRuleStatus: l,
            regexRuleDataValue: r,
            entryPart: a,
            onChangeEntryRegexStatus: n,
            onChangeEntryRegexData: i,
            placeholder: t,
          } = e;
          return (0, g.jsxs)("div", {
            className: "flex flex-wrap gap-4",
            children: [
              (0, g.jsxs)("p", {
                className: "mb1 flex items-center",
                children: [
                  (0, g.jsxs)("select", {
                    id: s,
                    name: s,
                    value: l,
                    onChange: n,
                    "data-rule-status": l,
                    className: "rule-select text-small form-control w-80 mr1",
                    children: [
                      (0, g.jsx)("option", { value: "on", children: "On" }),
                      (0, g.jsx)("option", { value: "off", children: "Off" }),
                      (0, g.jsx)("option", {
                        value: "ignored",
                        children: "Ignored",
                      }),
                    ],
                  }),
                  (0, g.jsxs)("label", {
                    className: "dib lh-single",
                    htmlFor: s,
                    children: ["has ", a, " matching"],
                  }),
                ],
              }),
              (0, g.jsxs)("p", {
                className: "flex flex-wrap items-center gap-4 mb1",
                children: [
                  (0, g.jsxs)("label", {
                    htmlFor: `${a}-regex`,
                    children: [a, " regex:"],
                  }),
                  (0, g.jsx)("input", {
                    id: `${a}-regex`,
                    className:
                      "caret-color bg-white dark:bg-coolgrey-1000 input-textarea underline overflow-hidden w-336",
                    autoCapitalize: "off",
                    autoComplete: "off",
                    autoCorrect: "off",
                    onChange: i,
                    placeholder: t,
                    spellCheck: !1,
                    type: "text",
                    value: r,
                  }),
                ],
              }),
            ],
          });
        },
        b = [
          { ruleName: "isOneSyllable", prettyName: "is one syllable" },
          {
            ruleName: "moreThanOneSyllable",
            prettyName: "has more than one syllable",
          },
          {
            ruleName: "moreThanTwoCharacters",
            prettyName: "has more than two characters",
          },
          {
            ruleName: "fewerThanFiveCharacters",
            prettyName: "has fewer than five characters",
          },
          { ruleName: "isSingleStroke", prettyName: "is single-stroke" },
          { ruleName: "isMultiStroke", prettyName: "is multi-stroke" },
          { ruleName: "isBrief", prettyName: "is a brief" },
          { ruleName: "hasStar", prettyName: "has star key" },
          { ruleName: "hasOneSpace", prettyName: "has one space" },
          {
            ruleName: "hasOneOrMoreSpaces",
            prettyName: "has one or more spaces",
          },
          { ruleName: "hasNumbers", prettyName: "has numbers" },
          { ruleName: "isRomanNumeral", prettyName: "is a Roman numeral" },
          { ruleName: "hasApostrophes", prettyName: "has apostrophes" },
          { ruleName: "hasPunctuation", prettyName: "has punctuation" },
          { ruleName: "hasCapitalLetter", prettyName: "has a capital letter" },
          { ruleName: "isUppercase", prettyName: "is entirely uppercase" },
          {
            ruleName: "hasSimpleStenoKeys",
            prettyName: "has simple steno keys",
          },
          {
            ruleName: "hasOneKeyPerFinger",
            prettyName: "has one key per finger",
          },
          { ruleName: "hasAnyVowelKey", prettyName: "has any vowel key" },
          { ruleName: "hasAnyLongVowel", prettyName: "has any long vowel" },
          { ruleName: "hasAnyShortVowel", prettyName: "has any short vowel" },
          {
            ruleName: "hasOnlyShortIVowel",
            prettyName: "has only short I vowel",
          },
          {
            ruleName: "hasOnlyOneVowelKey",
            prettyName: "has only one vowel key",
          },
          {
            ruleName: "hasUnstressedVowels",
            prettyName: "has unstressed vowels",
          },
          { ruleName: "hasDoubleVowels", prettyName: "has double vowels" },
          { ruleName: "hasDoubleLetters", prettyName: "has double letters" },
          {
            ruleName: "hasDoubleConsonants",
            prettyName: "has double consonants",
          },
          { ruleName: "hasSomeConsonants", prettyName: "has some consonants" },
          {
            ruleName: "hasOneConsonantOnEachSide",
            prettyName: "has one consonant on each side",
          },
          {
            ruleName: "hasLhsConsonantWithMultipleKeys",
            prettyName: "has left-side, multi-key consonant",
          },
          {
            ruleName: "hasRhsConsonantWithMultipleKeys",
            prettyName: "has right-side, multi-key consonant",
          },
          {
            ruleName: "hasDiphthong",
            prettyName: "has a diphthong like AU, OU, or OEU",
          },
          {
            ruleName: "hasVowelDisambiguator",
            prettyName: "has a vowel disambiguator like AE or AO",
          },
          {
            ruleName: "hasDigraphs",
            prettyName: "has digraphs like \u201cch\u201d or \u201cng\u201d",
          },
          {
            ruleName: "hasCompoundClusters",
            prettyName: "has compound clusters like BGS",
          },
          {
            ruleName: "hasContractionsPluralsOrPossessives",
            prettyName: "has contractions or possessives",
          },
          { ruleName: "hasInversion", prettyName: "has inversion" },
          {
            ruleName: "hasEfAsVeeOrEss",
            prettyName: "has \u201cF\u201d as \u201cV\u201d or \u201cS\u201d",
          },
          {
            ruleName: "hasShortTranslations",
            prettyName: "has short translations",
          },
          {
            ruleName: "hasLongTranslations",
            prettyName: "has long translations",
          },
          {
            ruleName: "hasLongWords",
            prettyName: "has long words (no spaces or dashes)",
          },
          { ruleName: "startsWithPrefix", prettyName: "starts with a prefix" },
          { ruleName: "endsWithSuffix", prettyName: "ends with a suffix" },
          {
            ruleName: "isSuperlative",
            prettyName: "is superlative (other than \u201cer\u201d endings)",
          },
          {
            ruleName: "outlineIsTranslation",
            prettyName: "outline is the same as translation",
          },
          { ruleName: "hasStretchKeys", prettyName: "has stretch keys D or Z" },
          { ruleName: "isFingerspelled", prettyName: "is fingerspelled" },
          {
            ruleName: "hasDisambiguatingBrief",
            prettyName: "has disambiguating brief like HEURD",
          },
          {
            ruleName: "hasSuppressedSpaceStroke",
            prettyName: "has suppressed space stroke, TK-LS",
          },
          {
            ruleName: "hasPhillyShift",
            prettyName: "has Philly shift like TDZ",
          },
          { ruleName: "hasCoding", prettyName: "has coding terms" },
          { ruleName: "hasMedical", prettyName: "has medical terms" },
          {
            ruleName: "hasForcedWordEnding",
            prettyName: "has /SP-S forced word ending",
          },
          {
            ruleName: "hasDictionaryFormatting",
            prettyName: "has dictionary formatting",
          },
        ];
      var f = l(969);
      const y = (e) => {
          let { children: s } = e;
          return (0, g.jsx)("h4", {
            className: "mb0 mt0 pt2 pb1 px3 h5 fw7",
            children: s,
          });
        },
        w = (e) => {
          let { children: s } = e;
          return (0, g.jsx)("div", {
            className: "mb0 pt0 pb1 px3 bb b--brand-primary-tint",
            children: s,
          });
        },
        k = (e) => {
          let { children: s } = e;
          return (0, g.jsx)("span", {
            className: "steno-stroke steno-stroke--subtle px05",
            children: s,
          });
        },
        S = (e) => {
          let { hideHelp: s, containerId: l } = e;
          return (0, g.jsx)("div", {
            id: l,
            className:
              "mh-page mw-744 overflow-y-scroll bg-slat dark:bg-coolgrey-1100 bl b--brand-primary-tint--60 dark:border-coolgrey-800 " +
              (s ? " hide" : ""),
            style: { flexGrow: 100, maxHeight: "2632px" },
            "aria-hidden": s,
            children: (0, g.jsxs)("div", {
              className: "mw100 type-face--sans-serif",
              children: [
                (0, g.jsx)("h3", {
                  className: "mb1 px3 mt3 pt3",
                  children: "Lesson generator help",
                }),
                (0, g.jsx)("p", {
                  className: "mb0 pt2 pb1 px3",
                  children: "To use the lesson generator:",
                }),
                (0, g.jsx)("div", {
                  className: "mb0 pt2 px3",
                  children: (0, g.jsxs)("ol", {
                    children: [
                      (0, g.jsx)("li", { children: "Select some rules" }),
                      (0, g.jsx)("li", {
                        children: "Press \u201cBuild lesson\u201d",
                      }),
                      (0, g.jsx)("li", {
                        children: "Press \u201cStart generated lesson\u201d",
                      }),
                    ],
                  }),
                }),
                (0, g.jsx)("p", {
                  className: "mb0 pt2 pb1 px3",
                  children: "Here are some details about the rules:",
                }),
                (0, g.jsx)("div", {
                  className: "mb0 pt2 px3",
                  children: (0, g.jsxs)("ul", {
                    children: [
                      (0, g.jsx)("li", {
                        children:
                          "Setting a rule to \u201cOn\u201d will build a lesson only containing entries that meet that rule.",
                      }),
                      (0, g.jsx)("li", {
                        children:
                          "Setting a rule to \u201cOff\u201d will build a lesson only containing entries that do NOT meet that rule.",
                      }),
                      (0, g.jsx)("li", {
                        children:
                          "Setting a rule to \u201cIgnored\u201d will include both words that do meet the rule and words that do NOT meet the rule; the rule is ignored.",
                      }),
                    ],
                  }),
                }),
                (0, g.jsx)("p", {
                  className: "mb0 pt1 pb1 px3 bb b--brand-primary-tint",
                  children:
                    "Some rules don\u2019t make sense to turn on at the same time, such as \u201cis one syllable\u201d and \u201chas more than one syllable\u201d, and will result in no words.",
                }),
                (0, g.jsx)(y, { children: "\u201cis one syllable\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule guesses the syllable count and only includes words that are 1 syllable long. Anything with a space and some particular terms like \u201cmysql\u201d are automatically considered more than one syllable.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201cone\u201d, \u201ccourse\u201d, \u201cthrough\u201d, \u201cbranch\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201ccity\u201d, \u201cdesire\u201d, \u201csomething\u201d, \u201cis it\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas more than one syllable\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule guesses the syllable count and only includes words that are more than 1 syllable long. Some particular terms like \u201cgenre\u201d are automatically considered more than one syllable.",
                  }),
                }),
                (0, g.jsx)(y, { children: "\u201cis a brief\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "This rule looks for skeleton briefs (no vowel keys), single vowel key briefs, and left-side or right-side only briefs. It also looks for specific extras like ",
                        (0, g.jsx)(k, { children: "SURG" }),
                        " for \u201csurgeon\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "P-B" }),
                        " for \u201cpeanut butter\u201d,",
                        " ",
                        (0, g.jsx)(k, { children: "SEPS" }),
                        " for \u201caccepts\u201d, and ",
                        (0, g.jsx)(k, { children: "OEB" }),
                        " for \u201cobserve\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas star key\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "This rule looks for ",
                        (0, g.jsx)(k, { children: "*" }),
                        ".",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "PWO*T" }),
                        " for \u201cboth\u201d. E.g. excludes",
                        " ",
                        (0, g.jsx)(k, { children: "PWOT" }),
                        " for \u201cbot\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas one space\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for dictionary translations with exactly 1 space.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. includes \u201cis it\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201cin real life\u201d and \u201cworld\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas one or more spaces\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for dictionary translations with 1 or more spaces.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201cis it\u201d and \u201cin real life\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201cworld\u201d and \u201c%\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas numbers\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for dictionary translations with any digits.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201c7-zip\u201d and \u201c100 Years of Solitude\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201cfactor VII\u201d, \u201cseven\u201d, and \u201c%\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201cis a Roman numeral\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "This rule looks for Roman numerals from I to XII (1 to 12) using the",
                        " ",
                        (0, g.jsx)(k, { children: "R" }),
                        " key.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "1-R" }),
                        " for \u201cI\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes \u201c1\u201d and ",
                        (0, g.jsx)(k, { children: "EU" }),
                        " for \u201cI\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas apostrophes\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "This rule looks for \u201c'\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. includes \u201cI'll\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. excludes \u201cill\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas punctuation\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for any punctuation and symbols, including emoji.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes \u201cI'll\u201d, \u201c\xa3\u201d, \u201c\xa9\u201d, \u201c\ud83d\udcaf\u201d, and",
                        " ",
                        (0, g.jsx)("code", { children: "{&%}" }),
                        ".",
                      ],
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201cill\u201d, \u201cis it\u201d, and \u201c1\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas a capital letter\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "This rule looks for any capital letter.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201cA\u201d, \u201ciPhone\u201d, and \u201cHTML\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201ca\u201d, \u201cphone\u201d, and \u201c.html\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201cis entirely uppercase\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for dictionary translations entirely made of uppercase letters.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201cA\u201d, \u201cASCII\u201d, and \u201cHTML\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201ca\u201d, \u201ciPhone\u201d, and \u201cHarry\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas simple steno keys\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for beginner-friendly steno keys, such as those that only need one 1 finger to press, plus star key and number bar. It includes multi-stroke entries.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "KAB" }),
                        " for \u201ccab\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "TKAB" }),
                        " for \u201cdab\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas one key per finger\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for outlines that contain no two-key combinations that must be pressed with a single finger. It also excludes multi-stroke entries.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "TEFT" }),
                        " and ",
                        (0, g.jsx)(k, { children: "SKES" }),
                        ".",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes outlines with ",
                        (0, g.jsx)(k, { children: "TS" }),
                        ", ",
                        (0, g.jsx)(k, { children: "TD" }),
                        ", or ",
                        (0, g.jsx)(k, { children: "*F" }),
                        ".",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas any vowel key\u201d" }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for any vowel key: ",
                      (0, g.jsx)(k, { children: "A" }),
                      ",",
                      " ",
                      (0, g.jsx)(k, { children: "O" }),
                      ", ",
                      (0, g.jsx)(k, { children: "E" }),
                      ", or ",
                      (0, g.jsx)(k, { children: "U" }),
                      ".",
                    ],
                  }),
                }),
                (0, g.jsx)(y, { children: "\u201chas any long vowel\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for outlines with any combinations of keys used for long vowels (as opposed to short vowels).",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "AOEU" }),
                        " for \u201ceye\u201d, ",
                        (0, g.jsx)(k, { children: "AEU" }),
                        " ",
                        "for \u201ca\u201d, and ",
                        (0, g.jsx)(k, { children: "OE" }),
                        " for \u201cowe\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "EU" }),
                        " for \u201cI\u201d, ",
                        (0, g.jsx)(k, { children: "A" }),
                        " for the prefix \u201ca\u201d, and ",
                        (0, g.jsx)(k, { children: "SEUTS" }),
                        " for \u201csits\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas any short vowel\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for outlines with any short vowel key combinations.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "EU" }),
                        " for \u201cI\u201d and ",
                        (0, g.jsx)(k, { children: "SAT" }),
                        " ",
                        "\u201csat\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "AOEU" }),
                        " for \u201ceye\u201d and",
                        " ",
                        (0, g.jsx)(k, { children: "SAOEUT" }),
                        " for \u201csight\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas only short I vowel\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "This rule looks for outlines containing ",
                        (0, g.jsx)(k, { children: "EU" }),
                        " and no other vowels. It also excludes ",
                        (0, g.jsx)(k, { children: "STREUF" }),
                        " for \u201cstrive\u201d, which is using the short \u201ci\u201d keys only to avoid conflict with \u201cstrife\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "SEUBGS" }),
                        " for \u201csix\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "RUPB" }),
                        " for \u201crun\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas only one vowel key\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "This rule looks for ",
                        (0, g.jsx)(k, { children: "A" }),
                        ", ",
                        (0, g.jsx)(k, { children: "O" }),
                        ",",
                        " ",
                        (0, g.jsx)(k, { children: "E" }),
                        ", or ",
                        (0, g.jsx)(k, { children: "U" }),
                        " without other surrounding vowel keys.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "THAT" }),
                        " for \u201cthat\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "SRAOU" }),
                        " for \u201cview\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas unstressed vowels\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for entries with dropped unstressed vowels.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "TEPD" }),
                        " for \u201ctepid\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "TEFT" }),
                        " for \u201ctest\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas double vowels\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for exactly two vowels in a row.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. includes \u201clook\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. excludes \u201cyaaaaaaay\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas double letters\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for any duplicate letters, but not triple letters.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. includes \u201cletter\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. excludes \u201cIII\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas double consonants\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for exactly two consonants\u201d in a row.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. includes \u201cHarry\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. excludes \u201cbest\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas some consonants\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for outlines containing two or more consonant keys.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. includes \u201cworld\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. excludes \u201ccat\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas one consonant on each side\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for one consonant from the left side of the steno board and one consonant from the right.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. includes \u201csap\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. excludes \u201cart\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas left-side, multi-key consonant\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule looks for multi-key consonants on the left-hand side of the board.",
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas right-side, multi-key consonant\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule looks for multi-key consonants on the right-hand side of the board.",
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas a diphthong like AU, OU, or OEU\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for outlines containing a diphthong:",
                      " ",
                      (0, g.jsx)(k, { children: "AU" }),
                      ", ",
                      (0, g.jsx)(k, { children: "OU" }),
                      ", or ",
                      (0, g.jsx)(k, { children: "OEU" }),
                      ".",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children:
                    "\u201chas a vowel disambiguator like AE or AO\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for outlines containing ",
                      (0, g.jsx)(k, { children: "AE" }),
                      " or",
                      " ",
                      (0, g.jsx)(k, { children: "AO" }),
                      " without other surrounding vowel keys.",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children:
                    "\u201chas digraphs like \u201cch\u201d or \u201cng\u201d\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for entries with a matching digraph outline and translation like ",
                      (0, g.jsx)(k, { children: "KH" }),
                      " and \u201cch\u201d.",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas compound clusters like BGS\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for compound clusters outlines with matching translations like ",
                      (0, g.jsx)(k, { children: "BGS" }),
                      " and \u201cction\u201d.",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas contractions or possessives\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for apostrophes in lower case words or with the word \u201cI\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201caren't\u201d and \u201cI'll\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children: "E.g. excludes \u201cL'Oreal\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201chas inversion\u201d" }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for entries with matching outlines and words with sounds out of steno order, such as ",
                      (0, g.jsx)(k, { children: "FL" }),
                      " and \u201clf\u201d or \u201clv\u201d.",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children:
                    "\u201chas \u201cF\u201d as \u201cV\u201d or \u201cS\u201d\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for ",
                      (0, g.jsx)(k, { children: "F" }),
                      " to write a word with a vowel (or \u201cy\u201d) and a \u201cs\u201d or \u201cv\u201d.",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas short translations\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule looks for dictionary translations shorter than 6 characters. Note, it can have surprising results with emoji.",
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas long translations\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule looks for dictionary translations longer than 16 characters, which may include spaces or hyphenated compound words. Note, it can have surprising results with emoji.",
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas long words (no spaces or dashes)\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for whole words longer than 10 characters. It excludes translations with hyphens or spaces.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201cimmeasurable\u201d and \u201cdistributes\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. excludes \u201calarm clock\u201d, \u201cUnited Nations\u201d, \u201cin real life\u201d and \u201ceastbound traffic\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, { children: "\u201cstarts with a prefix\u201d" }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule looks for outlines starting with a prefix stroke with a matching translation starting with the same prefix\u2019s text.",
                  }),
                }),
                (0, g.jsx)(y, { children: "\u201cends with a suffix\u201d" }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule looks for outlines ending with a suffix stroke with a matching translation ending with the same suffix\u2019s text.",
                  }),
                }),
                (0, g.jsx)(y, {
                  children:
                    "\u201cis superlative (other than \u201cer\u201d endings)\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for probable superlatives ending with \u201cier\u201d or \u201cest\u201d, or starting with \u201cmost \u201d or \u201cleast \u201d and ending in \u201cly\u201d. Ideally it would include words ending with \u201cer\u201d but they are hard to distinguish from other words like \u201cfear\u201d.",
                    }),
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "E.g. includes \u201csimpler\u201d, \u201chappiest\u201d, and \u201cmost loyal\u201d.",
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201coutline is the same as translation\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for entries where the outline uses the same letters as the translation.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "THAT" }),
                        " for \u201cthat\u201d and",
                        " ",
                        (0, g.jsx)(k, { children: "WAS" }),
                        " for \u201cwas\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas stretch keys D or Z\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for ",
                      (0, g.jsx)(k, { children: "D" }),
                      " or ",
                      (0, g.jsx)(k, { children: "Z" }),
                      ".",
                    ],
                  }),
                }),
                (0, g.jsx)(y, { children: "\u201cis fingerspelled\u201d" }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule looks for entries where every stroke is a fingerspelling outline.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "*E/KP*/T*/O*/R*/T*" }),
                        ".",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "HAPBD/SO*PL/TK-LS/S*/T*" }),
                        ".",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas disambiguating brief like HEURD\u201d",
                }),
                (0, g.jsxs)(w, {
                  children: [
                    (0, g.jsx)("p", {
                      className: "mb0",
                      children:
                        "This rule checks for specific outlines that do not match the translation phonetically and are instead adjusted to avoid a conflict with a similar entry.",
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. includes ",
                        (0, g.jsx)(k, { children: "WEUFS" }),
                        " for \u201cwives\u201d and",
                        " ",
                        (0, g.jsx)(k, { children: "STREUF" }),
                        " for \u201cstrive\u201d.",
                      ],
                    }),
                    (0, g.jsxs)("p", {
                      className: "mb0",
                      children: [
                        "E.g. excludes ",
                        (0, g.jsx)(k, { children: "HAOEURD" }),
                        " for \u201chydro^\u201d and",
                        " ",
                        (0, g.jsx)(k, { children: "STRAOEUF" }),
                        " for \u201cstrife\u201d.",
                      ],
                    }),
                  ],
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas suppressed space stroke, TK-LS\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule checks for ",
                      (0, g.jsx)(k, { children: "TK-LS" }),
                      ".",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas Philly shift like TDZ\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for ",
                      (0, g.jsx)(k, { children: "TDZ" }),
                      ", ",
                      (0, g.jsx)(k, { children: "TSD" }),
                      ",",
                      " ",
                      (0, g.jsx)(k, { children: "TSZ" }),
                      ", or ",
                      (0, g.jsx)(k, { children: "SDZ" }),
                      ".",
                    ],
                  }),
                }),
                (0, g.jsx)(y, { children: "\u201chas coding terms\u201d" }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule checks a list of coding terms like \u201cTypeScript\u201d, \u201cdef\u201d, \u201crm\u201d, and \u201chttp://\u201d.",
                  }),
                }),
                (0, g.jsx)(y, { children: "\u201chas medical terms\u201d" }),
                (0, g.jsx)(w, {
                  children: (0, g.jsx)("p", {
                    className: "mb0",
                    children:
                      "This rule checks a list of medical terms like \u201ccarpal tunnel\u201d, \u201cACE inhibitor\u201d, \u201cred blood cell\u201d, or \u201ccardinal veins\u201d.",
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas /SP-S forced word ending\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for ",
                      (0, g.jsx)(k, { children: "SP-S" }),
                      " strokes.",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas dictionary formatting\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for dictionary formatting text in outlines used by the Plover steno engine to transform results, such as",
                      " ",
                      (0, g.jsx)("code", { children: "{PLOVER:TOGGLE}" }),
                      " or",
                      " ",
                      (0, g.jsx)("code", { children: "{MODE:SNAKE}" }),
                      ".",
                    ],
                  }),
                }),
                (0, g.jsx)(y, { children: "\u201chas outline matching\u201d" }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for entries where the outline or strokes match the regular expression provided. This",
                      " ",
                      (0, g.jsx)("a", {
                        href: "https://www.sitepoint.com/learn-regex/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children:
                          "external link to learn more regular expressions opens in a new tab",
                      }),
                      ".",
                    ],
                  }),
                }),
                (0, g.jsx)(y, {
                  children: "\u201chas translation matching\u201d",
                }),
                (0, g.jsx)(w, {
                  children: (0, g.jsxs)("p", {
                    className: "mb0",
                    children: [
                      "This rule looks for entries where the translation or words match the regular expression provided. This",
                      " ",
                      (0, g.jsx)("a", {
                        href: "https://www.sitepoint.com/learn-regex/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children:
                          "external link to learn more regular expressions opens in a new tab",
                      }),
                      ".",
                    ],
                  }),
                }),
              ],
            }),
          });
        };
      var T = l(4457);
      const v = "collapsible-help",
        E = (e) => {
          var s;
          let {
            customLesson: l,
            customLessonMaterialValidationState: y,
            globalLookupDictionary: w,
          } = e;
          const { appFetchAndSetupGlobalDict: k, generateCustomLesson: E } = (0,
            T.$W)(),
            O = (0, r.useRef)(null),
            [R, C] = (0, r.useState)(!0),
            [A, D] = (0, r.useState)(!1),
            P = () => {
              C(!R);
            };
          (0, r.useEffect)(() => {
            k(!1, null).catch((e) => {
              console.error(e);
            });
          }, []),
            (0, r.useEffect)(() => {
              var e;
              null === (e = O.current) || void 0 === e || e.focus();
            }, []);
          const I = (e) => {
              D(!1),
                V({
                  type: i,
                  payload: {
                    ruleName: e.target.name,
                    ruleStatus: e.target.value,
                  },
                });
            },
            U = (e) => {
              D(!1),
                V({
                  type: t,
                  payload: {
                    entryPart: e.target.id.replace("-regex", ""),
                    regexText: e.target.value,
                  },
                });
            },
            [M, L] = (0, h.Mj)("rules-with-data", m),
            [F, V] = (0, r.useReducer)(u, {}, () => M),
            [K, W] = (0, h.Mj)("rules", c),
            [H, B] = (0, r.useReducer)(d, {}, () => K),
            $ = Object.fromEntries(
              Object.entries(H).filter((e) => {
                let [s, l] = e;
                return l;
              }),
            ),
            G = {
              outlineMatching: F.outlineMatching,
              outlineRegexText: F.outlineRegexText,
              translationMatching: F.translationMatching,
              translationRegexText: F.translationRegexText,
            },
            Z = (e) => {
              B({
                type: n,
                payload: {
                  ruleName: e.target.name,
                  ruleStatus: e.target.value,
                },
              }),
                W(H),
                L(F),
                a.Ay.event({
                  category: "Lesson generator",
                  action: "Change rule setting",
                  label: `${e.target.name}: ${e.target.value}`,
                });
            },
            _ = (0, x.W5)({ path: "/lessons", strict: !0, sensitive: !0 }),
            z =
              null !== (s = null === _ || void 0 === _ ? void 0 : _.url) &&
              void 0 !== s
                ? s
                : "";
          return (0, g.jsxs)("main", {
            id: "main",
            children: [
              (0, g.jsxs)(o.A, {
                children: [
                  (0, g.jsx)("div", {
                    className: "flex mr1 self-center",
                    children: (0, g.jsx)("header", {
                      className: "flex items-center min-h-40",
                      children: (0, g.jsx)("h2", {
                        ref: O,
                        tabIndex: -1,
                        id: "typey-type-for-stenographers-lesson-generator",
                        children: "Lesson generator",
                      }),
                    }),
                  }),
                  (0, g.jsx)("div", {
                    className: "flex flex-wrap mxn2",
                    children: (0, g.jsx)(p.N_, {
                      to: `${z}/custom/setup`.replace(/\/{2,}/g, "/"),
                      className: "link-button link-button-ghost table-cell mr1",
                      style: { lineHeight: 2 },
                      id: "ga--lesson-index--create-a-custom-lesson",
                      children: "Create a custom lesson",
                    }),
                  }),
                ],
              }),
              (0, g.jsx)("div", {
                className: "bg-info dark:bg-coolgrey-1100",
                children: (0, g.jsx)("div", {
                  className: "mx-auto mw-1920",
                  children: (0, g.jsx)("div", {
                    className: "flex-grow mx-auto mw-1440 min-w-0",
                    children: (0, g.jsxs)("div", {
                      className: "flex flex-wrap justify-between",
                      children: [
                        (0, g.jsx)("div", {
                          className: "flex-grow",
                          style: { flexBasis: "648px" },
                          children: (0, g.jsxs)("div", {
                            className: "p3 mx-auto mw-1024",
                            children: [
                              (0, g.jsxs)("div", {
                                className: "mt3 flex justify-between",
                                children: [
                                  (0, g.jsx)("h3", {
                                    className: "mt0",
                                    children: "Build lesson",
                                  }),
                                  (0, g.jsx)("p", {
                                    children: (0, g.jsx)("button", {
                                      className:
                                        "button button--secondary mb0 text-center" +
                                        (R ? " collapsed" : ""),
                                      onClick: P,
                                      onKeyPress: P,
                                      "aria-expanded": !R,
                                      "aria-controls": v,
                                      children: R ? "Show help" : "Hide help",
                                    }),
                                  }),
                                ],
                              }),
                              (0, g.jsxs)("div", {
                                children: [
                                  (0, g.jsx)("p", {
                                    children:
                                      "This page lets you generate custom lessons using Typey\xa0Type dictionaries and personal dictionaries.",
                                  }),
                                  (0, g.jsxs)("p", {
                                    children: [
                                      (0, g.jsxs)("span", {
                                        role: "img",
                                        "aria-label": "Warning!",
                                        children: ["\u26a0\ufe0f", " "],
                                      }),
                                      "Language is messy. These rules use heuristics and make imperfect guesses.",
                                    ],
                                  }),
                                  (0, g.jsx)("div", {
                                    className: "pb1 columns-2 columns-xs gap-4",
                                    children: b
                                      .slice(0, 16)
                                      .map((e) =>
                                        (0, g.jsx)(
                                          j,
                                          {
                                            ruleName: e.ruleName,
                                            prettyName: e.prettyName,
                                            rulesState: H,
                                            onChangeRuleStatus: Z,
                                          },
                                          e.ruleName,
                                        ),
                                      ),
                                  }),
                                  (0, g.jsxs)("details", {
                                    children: [
                                      (0, g.jsx)("summary", {
                                        children: (0, g.jsx)("p", {
                                          className:
                                            "cursor-pointer color-interactive",
                                          children: "More options\u2026",
                                        }),
                                      }),
                                      (0, g.jsxs)("div", {
                                        children: [
                                          (0, g.jsx)("div", {
                                            className:
                                              "columns-2 columns-xs gap-4 pb1",
                                            children: b
                                              .slice(16)
                                              .map((e) =>
                                                (0, g.jsx)(
                                                  j,
                                                  {
                                                    ruleName: e.ruleName,
                                                    prettyName: e.prettyName,
                                                    rulesState: H,
                                                    onChangeRuleStatus: Z,
                                                  },
                                                  e.ruleName,
                                                ),
                                              ),
                                          }),
                                          (0, g.jsx)("p", {
                                            className: "mb1 flex items-center",
                                            children: "Advanced:",
                                          }),
                                          (0, g.jsxs)("div", {
                                            className: "pb3",
                                            children: [
                                              (0, g.jsx)(N, {
                                                regexRuleName:
                                                  "translationMatching",
                                                regexRuleStatus:
                                                  F.translationMatching,
                                                regexRuleDataValue:
                                                  F.translationRegexText,
                                                entryPart: "translation",
                                                onChangeEntryRegexStatus: I,
                                                onChangeEntryRegexData: U,
                                                placeholder: ".*(ation|cean)$",
                                              }),
                                              (0, g.jsx)(N, {
                                                regexRuleName:
                                                  "outlineMatching",
                                                regexRuleStatus:
                                                  F.outlineMatching,
                                                regexRuleDataValue:
                                                  F.outlineRegexText,
                                                entryPart: "outline",
                                                onChangeEntryRegexStatus: I,
                                                onChangeEntryRegexData: U,
                                                placeholder: ".*[DZ]$",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, g.jsxs)("p", {
                                    children: [
                                      (0, g.jsx)("button", {
                                        className: "link-button dib mr1",
                                        style: { lineHeight: 2 },
                                        onClick: () => {
                                          E(w, $, G),
                                            ((F.translationRegexText.length >
                                              0 &&
                                              "ignored" ===
                                                F.translationMatching) ||
                                              (F.outlineRegexText.length > 0 &&
                                                "ignored" ===
                                                  F.outlineMatching)) &&
                                              D(!0),
                                            W(H),
                                            L(F);
                                        },
                                        type: "button",
                                        children: "Build lesson",
                                      }),
                                      (0, g.jsx)(p.N_, {
                                        to: "/lessons/custom?study=practice&newWords=1&seenWords=1&retainedWords=1&startFromWord=1",
                                        className:
                                          "link-button dib button button--secondary",
                                        style: { lineHeight: 2 },
                                        children: "Start generated lesson",
                                      }),
                                    ],
                                  }),
                                  A &&
                                    (0, g.jsx)("p", {
                                      children:
                                        "Note: an advanced setting is set to \u201cignored\u201d but has text. You can change the setting to \u201con\u201d or \u201coff\u201d or delete the text to hide this message.",
                                    }),
                                  (0, g.jsxs)("p", {
                                    children: [
                                      "fail" === y &&
                                        (0, g.jsxs)(g.Fragment, {
                                          children: [
                                            "That combination of rule settings results in no material. Try setting some rules to \u201cignored\u201d.",
                                            H.isOneSyllable ===
                                              H.moreThanOneSyllable &&
                                            "ignored" !== H.isOneSyllable
                                              ? " Change one of the syllable count settings."
                                              : "",
                                            (H.isOneSyllable !==
                                              H.hasLongWords &&
                                              H.isOneSyllable !==
                                                H.hasLongTranslations) ||
                                            "ignored" === H.isOneSyllable
                                              ? ""
                                              : " Change the one syllable or long words/translations settings.",
                                            H.isSingleStroke ===
                                              H.isMultiStroke &&
                                            "ignored" !== H.isSingleStroke
                                              ? " Change one of the stroke count settings."
                                              : "",
                                          ],
                                        }),
                                      "unvalidated" === y &&
                                        "Preview generated lesson here after building.",
                                      "success" === y &&
                                        `Preview generated lesson with ${l.presentedMaterial.length === f.A ? "max " : ""}${l.presentedMaterial.length} item${1 === l.presentedMaterial.length ? "" : "s"}:`,
                                    ],
                                  }),
                                  (0, g.jsx)("div", {
                                    children: (0, g.jsx)("ul", {
                                      children:
                                        "fail" === y || "unvalidated" === y
                                          ? void 0
                                          : l.presentedMaterial.map((e, s) =>
                                              (0, g.jsxs)(
                                                "li",
                                                {
                                                  className: "wrap",
                                                  children: [
                                                    e.phrase,
                                                    " ",
                                                    (0, g.jsx)("kbd", {
                                                      className:
                                                        "steno-stroke steno-stroke--subtle",
                                                      children: e.stroke,
                                                    }),
                                                  ],
                                                },
                                                `${s}-${e.phrase}-${e.stroke}`,
                                              ),
                                            ),
                                    }),
                                  }),
                                  "success" === y &&
                                    (0, g.jsx)(p.N_, {
                                      to: "/lessons/custom/setup",
                                      className:
                                        "link-button dib button button--secondary",
                                      style: { lineHeight: 2 },
                                      children: "Edit generated lesson",
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, g.jsx)(S, { hideHelp: R, containerId: v }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=634.d1fc5e0f.chunk.js.map
