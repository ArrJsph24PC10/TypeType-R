"use strict";
(self.webpackChunktypey_type = self.webpackChunktypey_type || []).push([
  [116],
  {
    2116: (e, s, o) => {
      o.r(s), o.d(s, { default: () => c });
      var t = o(2483),
        r = o(5029),
        i = o(5350),
        n = o(6723);
      const a = (e) => {
          let { children: s } = e;
          return (0, n.jsx)("dl", {
            className: "lg:flex lg:flex-row lg:flex-wrap lg:overflow-visible",
            children: s,
          });
        },
        l = (e) => {
          let { children: s } = e;
          return (0, n.jsx)("dt", {
            className:
              "mb05 lg:grow-0 lg:shrink-0 lg:basis-32 lg:overflow-hidden lg:text-ellipsis",
            children: s,
          });
        },
        h = (e) => {
          let { children: s } = e;
          return (0, n.jsx)("dd", {
            className:
              "mb-4 lg:grow-0 lg:shrink-0 lg:basis-27rem lg:ml-auto lg:overflow-hidden lg:text-ellipsis",
            children: s,
          });
        };
      var d = o(7532);
      const c = () => {
        const e = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(() => {
            window.location.hash = window.decodeURIComponent(
              window.location.hash,
            );
            const s = () => {
              const e = window.location.hash;
              if (e && e.length > 0)
                try {
                  const s = document.querySelector(
                    (function (e) {
                      if (
                        e.includes(":~:text") &&
                        e
                          .replace(":~:text=", "")
                          .includes(encodeURIComponent("How long"))
                      )
                        return "#time-to-learn";
                      return e;
                    })(e),
                  );
                  let o = 0;
                  s &&
                    s.getBoundingClientRect().top &&
                    (o = s.getBoundingClientRect().top);
                  const t = {
                    left: 0,
                    top: window.scrollY + o,
                    behavior: "smooth",
                  };
                  s &&
                    (window.scrollTo(t),
                    window.setTimeout(function () {
                      null === s || void 0 === s || s.focus();
                    }, 1e3));
                } catch (s) {
                  console.error(s);
                }
            };
            var o;
            (s(),
            (window.onhashchange = s),
            e.current && !window.location.hash) &&
              (null === (o = e.current) || void 0 === o || o.focus());
          }, []),
          (0, n.jsxs)("main", {
            id: "main",
            children: [
              (0, n.jsx)(d.A, {
                children: (0, n.jsx)("div", {
                  className: "flex mr1 self-center",
                  children: (0, n.jsx)("header", {
                    className: "flex items-center min-h-40",
                    children: (0, n.jsx)("h2", {
                      ref: e,
                      tabIndex: -1,
                      id: "about-typey-type-for-stenographers",
                      children: "About Typey\xa0Type for Stenographers",
                    }),
                  }),
                }),
              }),
              (0, n.jsx)("div", {
                className: "p3 mx-auto mw-1024 type-face--sans-serif",
                children: (0, n.jsxs)("div", {
                  className: "mw-568",
                  children: [
                    (0, n.jsxs)("p", {
                      className: "mt3",
                      children: [
                        "Typey\xa0Type is a typing app designed to help",
                        " ",
                        (0, n.jsx)("a", {
                          href: "#about-stenography",
                          children: "stenography",
                        }),
                        " (steno) students learn steno faster. You can learn briefs and improve your stenographic speed and accuracy. Lessons evolve as you progress. They have tight feedback loops so you learn to fix misstrokes immediately. You can effortlessly track progress in your brief vocabulary and rapidly increase in steno skill.",
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "about-stenography",
                      children: "Stenography",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "The process of writing shorthand is called",
                        " ",
                        (0, n.jsx)("strong", { children: "stenography" }),
                        ". Using a stenotype machine (or a fancy keyboard) and special software, you can type over 100 or even 200 words per minute. You press keys together on a stenotype machine like playing a piano chord. The software translates the combination into meaningful words according to their phonetic sounds. Plover is the world\u2019s first free, open-source stenography program. You can learn more about Plover from the",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Open steno project",
                          to: "http://openstenoproject.org/",
                          children: "Open steno project",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "about-the-creator",
                      children: "About the creator, Di",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Hi! I\u2019m ",
                        (0, n.jsx)("a", {
                          href: "https://didoesdigital.com/",
                          children: "Di",
                        }),
                        ". I created Typey\xa0Type to help myself learn and practice stenography as an ergonomic alternative for typing. I had sore wrists from the painful contortions of keyboard shortcuts on a qwerty keyboard. Back in 2017, there weren't a lot of options for steno students to interactively practice new words. So using my design and development skills, I built Typey\xa0Type. I designed it to work on the web so that it would be easy for people to access and start using straight away without installing anything.",
                      ],
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Since then it's been a labour of love. Inspired by the people that use Typey\xa0Type and share their stories, I continue to make changes and improvements to help students on their steno journeys.",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "If you want to help fund my efforts on this project, you can",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Patreon",
                          to: "https://www.patreon.com/didoesdigital",
                          children: "become a supporter on Patreon.",
                        }),
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "steno-terms",
                      children: "Steno terms",
                    }),
                    (0, n.jsxs)(a, {
                      children: [
                        (0, n.jsx)(l, { children: "Briefs" }),
                        (0, n.jsx)(h, {
                          children:
                            "Loosely, a brief or outline is the specified combination of keys pressed together to produce a specific word or phrase. Strictly, a brief or abbreviation is a shortened outline form with fewer strokes than the phonetic outline.",
                        }),
                        (0, n.jsx)(l, { children: "Strokes" }),
                        (0, n.jsx)(h, {
                          children:
                            "A stroke is a combination of keys held together and released to write a word or sound. A multi-stroke brief is a combination of strokes pressed to produce a word or phrase (usually of more syllables).",
                        }),
                        (0, n.jsx)(l, { children: "Misstrokes" }),
                        (0, n.jsxs)(h, {
                          children: [
                            "Misstrokes are extra entries that use similar keys to produce the word you meant to write. If you regularly mistype a word, you might add a misstroke entry for the keys you are incorrectly pressing so that your dictionaries effectively autocorrects your mistakes. For example, the misstroke",
                            " ",
                            (0, n.jsx)("span", {
                              className: "steno-stroke",
                              children: "SPHAOEU",
                            }),
                            " to write \u201csupply\u201d is missing the left-hand ",
                            (0, n.jsx)("span", {
                              className: "steno-stroke",
                              children: "R",
                            }),
                            " key from the usual outline",
                            " ",
                            (0, n.jsx)("span", {
                              className: "steno-stroke",
                              children: "SPHRAOEU",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsx)(l, { children: "Plover" }),
                        (0, n.jsxs)(h, {
                          children: [
                            " ",
                            (0, n.jsx)(r.A, {
                              eventLabel: "Plover",
                              to: "http://www.openstenoproject.org/plover/",
                              children: "Plover",
                            }),
                            " ",
                            "is the world\u2019s first free, open-source stenography program. It works cross-platform on Windows, macOS, and Linux operating systems.",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "typey-type-notes",
                      children: "Typey\xa0Type notes",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Typey\xa0Type embraces ideas of spaced repetitions and deliberate practice to teach steno effectively:",
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)(r.A, {
                            eventLabel: "spaced repetitions",
                            to: "https://en.wikipedia.org/wiki/Spaced_repetition",
                            children: "Spaced repetitions",
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)(r.A, {
                            eventLabel: "deliberate practice",
                            to: "https://en.wikipedia.org/wiki/Practice_(learning_method)#Deliberate_practice",
                            children: "Deliberate practice",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "typey-type-progress-tracking",
                      children: "Typey Type progress tracking",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "When you \u201cstop\u201d a lesson before reaching the end or you complete a lesson, Typey\xa0Type will save",
                        " ",
                        (0, n.jsx)(i.N_, {
                          to: "/progress",
                          children: "your progress",
                        }),
                        ". That\u2019s when it saves all the new words you\u2019ve successfully typed. If you leave a lesson without stopping it or finishing it, you\u2019ll lose that lesson\u2019s progress. Typey\xa0Type saves your brief progress in your browser\u2019s local storage. You\u2019ll lose your progress if you clear your browsing data (history, cookies, and cache). If you share this device with other people or use Typey\xa0Type across several devices and browsers, you should save your progress elsewhere. Copy your progress to your clipboard and save it in a text file somewhere safe. When you return, enter your progress to load it back into Typey\xa0Type.",
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "typey-type-dictionary",
                      children: "Typey\xa0Type dictionary",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Typey\xa0Type uses a version of the Plover dictionary that comes built into the Plover software. Typey\xa0Type\u2019s version is based on a copy of Plover\u2019s from a few years ago. I have since spent many hours meticulously amending it. This helps Typey\xa0Type suggests the best brief available. It chooses the \u201cbest\u201d stroke by looking for the shortest stroke, where there are penalties for multi-stroke briefs and briefs that use the star (",
                        (0, n.jsx)("code", { children: "*" }),
                        ") key. I have also removed thousands of misstrokes to hide them when learning Plover theory. There are some manual adjustments too. These show strokes that are more consistent with similar words, more consistent with Plover\u2019s theory, phonetic, or easier to stroke.",
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        (0, n.jsx)(i.N_, {
                          to: "/lessons/custom",
                          children: "Typey\xa0Type custom lessons",
                        }),
                        " let you use your own briefs or steno theory.",
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "If you notice any odd strokes,",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "post to the feedback form",
                          to: "https://docs.google.com/forms/d/e/1FAIpQLSeevsX2oYEvnDHd3y8weg5_7-T8QZsF93ElAo28JO9Tmog-7Q/viewform?usp=sf_link",
                          children: "post to the feedback form",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "typey-type-hints",
                      children: "Typey\xa0Type hints",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "To manually show a stroke hint in a lesson that otherwise hides hints, press ",
                        (0, n.jsx)("kbd", { children: "Tab" }),
                        " to focus on the stroke hint and",
                        " ",
                        (0, n.jsx)("kbd", { children: "Space" }),
                        " activate it. This will automatically move your focus back to typing. To avoid losing time doing this, you can create a brief to press ",
                        (0, n.jsx)("kbd", { children: "Tab" }),
                        " and ",
                        (0, n.jsx)("kbd", { children: "Space" }),
                        " for you, such as",
                        " ",
                        (0, n.jsx)("code", {
                          className: "tag-missing-full-stop",
                          children: '"STA*PB": "{#Tab}{#space}",',
                        }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "typey-type-shortcuts",
                      children: "Typey\xa0Type shortcuts",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "There are some keyboard shortcuts available when you finish a lesson that make use of the browser\u2019s built in",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "accesskey",
                          to: "https://en.m.wikipedia.org/wiki/Access_key",
                          children: "accesskey functionality",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "To jump to the ",
                        (0, n.jsx)("strong", {
                          className: "fw7",
                          children: "next lesson",
                        }),
                        ", use the",
                        " ",
                        (0, n.jsx)("code", { children: "accesskey" }),
                        " shortcut plus the ",
                        (0, n.jsx)("kbd", { children: "o" }),
                        " key. You can create a steno brief for the shortcut like this:",
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            "For macOS: ",
                            (0, n.jsx)("code", {
                              children: '"HR*FPB": "{#control(option(o))}",',
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            "For everything else:",
                            " ",
                            (0, n.jsx)("code", {
                              children: '"HR*FPB": "{#alt(shift(o))}",',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "To ",
                        (0, n.jsx)("strong", {
                          className: "fw7",
                          children: "restart a lesson",
                        }),
                        ", use the",
                        " ",
                        (0, n.jsx)("code", { children: "accesskey" }),
                        " shortcut plus the ",
                        (0, n.jsx)("kbd", { children: "s" }),
                        " key. You can create a steno brief for the shortcut like this:",
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            "For macOS: ",
                            (0, n.jsx)("code", {
                              children: '"STA*RT": "{#control(option(s))}",',
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            "For everything else:",
                            " ",
                            (0, n.jsx)("code", {
                              children: '"STA*RT": "{#alt(shift(s))}",',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "To ",
                        (0, n.jsx)("strong", {
                          className: "fw7",
                          children: "revise selected words",
                        }),
                        ", use the",
                        " ",
                        (0, n.jsx)("code", { children: "accesskey" }),
                        " shortcut plus the ",
                        (0, n.jsx)("kbd", { children: "r" }),
                        " key. You can create a steno brief for the shortcut like this:",
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            "For macOS: ",
                            (0, n.jsx)("code", {
                              children: '"SRAO*EUZ": "{#control(option(r))}",',
                            }),
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            "For everything else:",
                            " ",
                            (0, n.jsx)("code", {
                              children: '"SRAO*EUZ": "{#alt(shift(r))}",',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "To activate accesskey shortcuts, use the browser",
                        " ",
                        (0, n.jsx)("code", { children: "accesskey" }),
                        " shortcut plus the specific shortcut key, which is usually a letter, such as ",
                        (0, n.jsx)("kbd", { children: "s" }),
                        ". The",
                        " ",
                        (0, n.jsx)("code", { children: "accesskey" }),
                        " shortcut for most browsers is:",
                      ],
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)("kbd", { children: "Ctrl" }),
                            "+",
                            (0, n.jsx)("kbd", { children: "Option" }),
                            " on a Mac,",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)("kbd", { children: "Alt" }),
                            "+",
                            (0, n.jsx)("kbd", { children: "Shift" }),
                            " on Windows and other operating systems.",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "typey-type-terms",
                      children: "Typey\xa0Type terms",
                    }),
                    (0, n.jsxs)(a, {
                      children: [
                        (0, n.jsx)(l, { children: "Spacing" }),
                        (0, n.jsx)(h, {
                          children:
                            "Typey\xa0Type lets you choose where spaces should appear in a phrase for checking if you typed it correctly. Steno software can insert spaces before or after words, depending on the specific software and its settings. For example, Plover inserts spaces before words by default, and has a setting to insert spaces after words. Plover also provides extra spacing and capitalisation modes that can be set on the fly. This might suppress spaces or insert other punctuation (like dashes). A QWERTYist may feel more comfortable drilling words without any spaces, or sentences with spaces as the end.",
                        }),
                        (0, n.jsx)(l, { children: "Seen words" }),
                        (0, n.jsx)(h, {
                          children:
                            'Typey\xa0Type tracks words you\u2019ve "seen" or "met". Each time you successfully type a new word, that\u2019s logged as a successful meeting.',
                        }),
                        (0, n.jsx)(l, { children: "Words per minute (WPM)" }),
                        (0, n.jsx)(h, {
                          children:
                            "To track your typing speed, Typey\xa0Type displays the number of words you\u2019ve typed per minute using the unit \u201cwords per minute (WPM)\u201d. A word is considered to be 5 letters long on average. This means you might type many short words and have a higher WPM score.",
                        }),
                        (0, n.jsx)(l, { children: "Discover" }),
                        (0, n.jsx)(h, {
                          children:
                            "The first type of study session lets you discover new briefs by showing only a limited number of new words while revealing their strokes. Write these words slowly, concentrating on accuracy and forming good habits around how you stroke word parts. Focus on lessons with interesting words, especially top words for your needs, such as common English words for general usage. You might also study domain specific phrases for particular industries.",
                        }),
                        (0, n.jsx)(l, { children: "Revise" }),
                        (0, n.jsx)(h, {
                          children:
                            "The next type of study session helps you revise recently learned briefs by showing only words you\u2019ve seen. Apply effort to recall these briefs before showing strokes. Avoid fingerspelling or stroking out long, phonetic forms of words so you can memorise and rehearse the best brief for every word. Choose a lesson with the majority of words you\u2019re interested in nailing first like the top 1000 words.",
                        }),
                        (0, n.jsx)(l, { children: "Drill" }),
                        (0, n.jsx)(h, {
                          children:
                            "The third type of study session is about building up your muscle memory and testing your skills. Write as fast and furiously as you can and aim for a high WPM score. Pick specific drills that focus on a certain kind of brief or many similar words so you can associate them together.",
                        }),
                        (0, n.jsx)(l, { children: "Practice" }),
                        (0, n.jsx)(h, {
                          children:
                            "The final type of study session lets you mimic real usage as closely as possible. Write as fast as you can without causing misstrokes. Explore stories that use real sentences.",
                        }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "flashcards",
                      tabIndex: -1,
                      children: "Flashcards",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Flashcards are designed for mobile devices so you can memorise steno briefs on the go. When you\u2019re unable to recall a brief, tap \u201cHard\u201d to say it was hard to remember. When you can recall a brief without hesitation, tap \u201cEasy\u201d. While studying flashcards, imagine which fingers and the shape of the outline you\u2019d use to stroke a word.",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "If it\u2019s been a while since you\u2019ve studied, the \u201cthreshold\u201d will be set quite high. You\u2019ll see flashcards you\u2019ve studied that are below the threshold. That is, if the threshold is 12, you\u2019ll see flashcards for words you\u2019ve marked \u201cEasy\u201d less than 12 times. If you\u2019ve marked a word as \u201cEasy\u201d 15 times, it won\u2019t shown again until more time has passed.",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Thanks to Jim Ladd, you can also use the Anki app to memorise briefs. He built flashcard decks for the Top 2000 Words from Project Gutenberg using Typey\xa0Type steno diagrams:",
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)(r.A, {
                            eventLabel: "Anki",
                            to: "https://apps.ankiweb.net/",
                            children: "Anki",
                          }),
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)(r.A, {
                            eventLabel:
                              "flashcard decks for the Top 2000 Words",
                            to: "https://github.com/jladdjr/anki-decks/tree/master/Plover%20-%20Project%20Gutenberg%20Top%2010k%20Words",
                            children: "Flashcard decks for the Top 2000 Words",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "offline",
                      tabIndex: -1,
                      children: "Offline",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Typey\xa0Type does not yet officially support offline use through the website. Until then, it\u2019s technically possible to make it work offline by running the code yourself. You can follow the steps from the",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Typey Type repo README",
                          to: "https://github.com/didoesdigital/typey-type/blob/master/README.md",
                          children: "Typey\xa0Type repo README",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "learn-steno",
                      children: "Learning stenography",
                    }),
                    (0, n.jsx)("h4", {
                      id: "try-steno",
                      children: "How can you try out steno?",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "For an idea of how steno feels and works, you can",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "install Plover",
                          to: "http://openstenoproject.org/",
                          children: "install Plover",
                        }),
                        " ",
                        "and use its \u201carpeggiate\u201d setting. This setting lets you use a QWERTY keyboard to write stenography. The trick is that you press each key separately and then press space bar to send the stroke. Usually a stenographer will press all keys together and release them together. Most QWERTY keyboards, however, are non-NKRO (N-key roll over), meaning only the first 6 keys held together will be noticed; later keys are ignored. Arpeggiate will let you explore steno, but is unrealistic.",
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "requirements-for-steno",
                      children: "What do you need to learn steno?",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "You need a true NKRO (N-key roll over) supported keyboard and software like Plover (a free and open steno engine).",
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel:
                                "true NKRO (N-key roll over) supported keyboard",
                              to: "https://plover.wiki/index.php/Supported_hardware#Known_supported_stenotypes",
                              children:
                                "True NKRO (N-key roll over) supported keyboards",
                            }),
                            " ",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel: "stenotype machine",
                              to: "https://plover.wiki/index.php/Supported_hardware#Stenotype_machines",
                              children: "Stenotype machines",
                            }),
                            " ",
                          ],
                        }),
                        (0, n.jsx)("li", {
                          children: (0, n.jsx)(r.A, {
                            eventLabel: "Plover (free and open)",
                            to: "http://www.openstenoproject.org/plover/",
                            children: "Plover",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "time-to-learn",
                      children: "How long does it take to learn steno?",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "To write text for personal use, such as writing emails and instant messages, you could learn basic steno at ~40WPM within 3\u20136 months. To productively use steno to write most text at under 100WPM, it might take 6\u201318\xa0months. For live dictation at 200WPM, it might take you 2\xa0or\xa0more years. If you are learning stenography for ergonomic reasons and have injuries to manage, it could take longer.",
                    }),
                    (0, n.jsx)("h4", {
                      id: "discovery",
                      children:
                        "How many new briefs should you learn each day?",
                    }),
                    (0, n.jsx)("p", { children: "5\u201340." }),
                    (0, n.jsx)("p", {
                      children:
                        "Learning new briefs is like expanding your vocabulary in a new language. One rule of thumb in learning languages is to strive for 15 new words a day, conservatively, or 25 new words a day, aggressively. For one day that might not seem like much, but after a month that\u2019s about 500 new words.",
                    }),
                    (0, n.jsx)("h4", {
                      id: "revision",
                      children: "How many briefs should you revise each day?",
                    }),
                    (0, n.jsx)("p", { children: "100\u2013200." }),
                    (0, n.jsx)("h4", {
                      id: "metronome",
                      children: "Why might you use the metronome?",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Using a metronome might help you improve your rhythm for each stroke in finger drills. By drilling difficult transitions between pairs of strokes that slow you down or cause you hesitation using a metronome, you may improve your slowest pairs.",
                    }),
                    (0, n.jsx)("h4", {
                      id: "lesson-categories",
                      children: "What kinds of lessons are there?",
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#fundamentals",
                              children: "Fundamentals",
                            }),
                            " let you practise the main elements of stenographic theory so you get the gist of what keys connect to what sounds and what letters or syllables they produce.",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#drills",
                              children: "Drills",
                            }),
                            " are sets of common, randomly ordered words, such as names, dates, pronouns, and numbers.",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#collections",
                              children: "Collections",
                            }),
                            " are sets of lessons. They might be domain-specific, such as",
                            " ",
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#tech",
                              children: "tech",
                            }),
                            " lessons, or have stenographic or linguistic significance, such as",
                            " ",
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#irreversible-binomials",
                              children: "irreversible\xa0binomials",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#stories",
                              children: "Stories",
                            }),
                            " include any lessons with words in sentence order, such as",
                            " ",
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#virginia-woolf",
                              children: "Virginia Woolf stories",
                            }),
                            " ",
                            "or",
                            " ",
                            (0, n.jsx)(i.N_, {
                              to: "/lessons#proverbial-phrases",
                              children: "proverbial\xa0phrases",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("h4", {
                      id: "palantype",
                      children: "What\u2019s a \u201cpalantype\u201d?",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Typey\xa0Type supports alternative steno key layouts such as \u201cpalantype\u201d. A palantype is an alternative shorthand machine to a stenotype with more keys. That means palantype can have fewer theory conflicts and be easier to learn. Meanwhile, stenography is more popular and more ergonomic.",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Learn palantype",
                          to: "http://www.openstenoproject.org/palantype/tutorial/2016/08/21/learn-palantype.html",
                          children: "Learn palantype",
                        }),
                        " ",
                        "and learn more about",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Palan versus Steno",
                          to: "http://www.openstenoproject.org/palantype/palantype/2016/08/21/palan-versus-steno.html",
                          children: "Palan versus Steno",
                        }),
                        " ",
                        "from the Open Steno Project.",
                      ],
                    }),
                    (0, n.jsx)("h3", { id: "progress", children: "Progress" }),
                    (0, n.jsxs)("p", {
                      children: [
                        "See how much",
                        " ",
                        (0, n.jsx)(i.N_, {
                          to: "/progress",
                          children:
                            "progress you\u2019ve made with Typey\xa0Type",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "contribute",
                      children: "Want to contribute?",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Learn how to",
                        " ",
                        (0, n.jsx)(i.N_, {
                          to: "/contribute",
                          children: "contribute to Typey\xa0Type",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("h3", { id: "donate", children: "Donate" }),
                    (0, n.jsxs)("p", {
                      children: [
                        "You can support my efforts on",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Patreon",
                          to: "https://www.patreon.com/didoesdigital",
                          children: "Patreon",
                        }),
                        ". A monthly donation helps me build more lessons and features to help you fast-track your steno progress.",
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "code",
                      children: "Code on GitHub",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "Here\u2019s some of the code used by Typey\xa0Type available on GitHub:",
                    }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel: "Typey Type repo",
                              to: "https://github.com/didoesdigital/typey-type",
                              children: "Typey\xa0Type repo",
                            }),
                            ". This contains the application code that makes Typey\xa0Type do useful things.",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel: "Typey Type data repo",
                              to: "https://github.com/didoesdigital/typey-type-data",
                              children: "Typey\xa0Type data repo",
                            }),
                            ". This project is the result of automated scripts that produce lesson data used by Typey\xa0Type. The scripts are not included.",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel: "Steno dictionaries repo",
                              to: "https://github.com/didoesdigital/steno-dictionaries/",
                              children: "Steno dictionaries",
                            }),
                            ". This repository contains Di\u2019s stenography dictionaries that power Typey\xa0Type\u2019s stroke suggestions, as well as extra dictionaries for day-to-day steno usage.",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel:
                                "Stenoboard diagram SVG to React repo",
                              to: "https://github.com/didoesdigital/typey-type-stenoboard-diagram-svg-to-react",
                              children: "Stenoboard diagram SVG to React",
                            }),
                            ". This project contains scripts used to manually convert SVG steno diagrams into React syntax to be used by the main Typey\xa0Type repo.",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("h3", { id: "news", children: "Want news?" }),
                    (0, n.jsxs)("p", {
                      children: [
                        "Sign up for",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Typey Type updates and steno news",
                          to: "https://didoesdigital.com/#newsletter",
                          children: "Typey\xa0Type updates and steno news",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("h3", { id: "credits", children: "Credits" }),
                    (0, n.jsxs)("ul", {
                      children: [
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel: "Wikipedia provides homophones",
                              to: "https://en.wikipedia.org/wiki/Wikipedia:Lists_of_common_misspellings/Homophones",
                              children: "Wikipedia provides homophones",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel:
                                "Wikipedia provides proverbial phrases",
                              to: "https://en.wikipedia.org/wiki/List_of_proverbial_phrases",
                              children: "Wikipedia provides proverbial phrases",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel: "Wikipedia provides proverbs",
                              to: "https://en.wiktionary.org/wiki/Appendix:English_proverbs",
                              children: "Wiktionary provides proverbs",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel:
                                "Wikipedia provides irreversible binomials",
                              to: "https://en.wikipedia.org/wiki/Irreversible_binomial",
                              children:
                                "Wikipedia provides irreversible binomials",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel:
                                "Wikipedia provides Speech to the Troops at Tilbury",
                              to: "https://en.wikipedia.org/wiki/Speech_to_the_Troops_at_Tilbury",
                              children:
                                "Wikipedia provides Speech to the Troops at Tilbury",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            " ",
                            (0, n.jsx)(r.A, {
                              eventLabel: "Wiktionary provides frequency lists",
                              to: "https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists",
                              children: "Wiktionary provides frequency lists",
                            }),
                            ".",
                          ],
                        }),
                        (0, n.jsxs)("li", {
                          children: [
                            (0, n.jsx)(r.A, {
                              eventLabel:
                                "Metronome sounds come from Dev_Tones by RCP Tones",
                              to: "https://rcptones.com/dev_tones/",
                              children:
                                "The metronome sound, \u201cdigi_plink\u201d, comes from Dev_Tones by RCP Tones",
                            }),
                            " ",
                            "under a",
                            " ",
                            (0, n.jsx)(r.A, {
                              eventLabel:
                                "Creative Commons license (CC BY 3.0 US)",
                              to: "https://creativecommons.org/licenses/by/3.0/us/legalcode",
                              children:
                                "Creative Commons license (CC BY 3.0 US)",
                            }),
                            " ",
                            "and was adapted to include silence at the end for a slower metronome tempo.",
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)("h3", { id: "support", children: "Support" }),
                    (0, n.jsxs)("p", {
                      children: [
                        "For help with Typey\xa0Type,",
                        " ",
                        (0, n.jsx)("a", {
                          href: "mailto:typeytype@didoesdigital.com",
                          children: "email typeytype@didoesdigital.com",
                        }),
                        " ",
                        "or",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "post to the feedback form",
                          to: "https://docs.google.com/forms/d/e/1FAIpQLSeevsX2oYEvnDHd3y8weg5_7-T8QZsF93ElAo28JO9Tmog-7Q/viewform?usp=sf_link",
                          children: "post to the feedback form",
                        }),
                        ".",
                      ],
                    }),
                    (0, n.jsx)("h3", {
                      id: "privacy",
                      tabIndex: -1,
                      children: "Privacy",
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "This site uses",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Google Analytics",
                          to: "https://www.google.com/intl/en/policies/privacy/",
                          children: "Google Analytics",
                        }),
                        " ",
                        "to track usage data for improving the site using cookies. Typey\xa0Type anonymises IP addresses before sending them to Google and Google Analytics retains cookie data for 26 months.",
                      ],
                    }),
                    (0, n.jsxs)("p", {
                      children: [
                        "This site uses",
                        " ",
                        (0, n.jsx)(r.A, {
                          eventLabel: "Sentry",
                          to: "https://sentry.io/privacy/",
                          children: "Sentry",
                        }),
                        " ",
                        "for error reporting to improve the site.",
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=116.af2bade4.chunk.js.map
