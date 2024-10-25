"use strict";
(self["webpackChunktypey_type"] = self["webpackChunktypey_type"] || []).push([[104],{

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2483);
// EXTERNAL MODULE: ./src/pages/games/components/Intro.jsx
var Intro = __webpack_require__(7154);
// EXTERNAL MODULE: ./node_modules/d3-time/src/interval.js
var interval = __webpack_require__(4788);
;// ./node_modules/d3-time/src/duration.js
const durationSecond = 1000;
const durationMinute = durationSecond * 60;
const durationHour = durationMinute * 60;
const durationDay = durationHour * 24;
const durationWeek = durationDay * 7;
const durationMonth = durationDay * 30;
const durationYear = durationDay * 365;
;// ./node_modules/d3-time/src/week.js


function timeWeekday(i) {
  return (0,interval/* timeInterval */.f)(date => {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setDate(date.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
const timeSunday = timeWeekday(0);
const timeMonday = timeWeekday(1);
const timeTuesday = timeWeekday(2);
const timeWednesday = timeWeekday(3);
const timeThursday = timeWeekday(4);
const timeFriday = timeWeekday(5);
const timeSaturday = timeWeekday(6);
const timeSundays = timeSunday.range;
const timeMondays = timeMonday.range;
const timeTuesdays = timeTuesday.range;
const timeWednesdays = timeWednesday.range;
const timeThursdays = timeThursday.range;
const timeFridays = timeFriday.range;
const timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return (0,interval/* timeInterval */.f)(date => {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}
const utcSunday = utcWeekday(0);
const utcMonday = utcWeekday(1);
const utcTuesday = utcWeekday(2);
const utcWednesday = utcWeekday(3);
const utcThursday = utcWeekday(4);
const utcFriday = utcWeekday(5);
const utcSaturday = utcWeekday(6);
const utcSundays = utcSunday.range;
const utcMondays = utcMonday.range;
const utcTuesdays = utcTuesday.range;
const utcWednesdays = utcWednesday.range;
const utcThursdays = utcThursday.range;
const utcFridays = utcFriday.range;
const utcSaturdays = utcSaturday.range;
;// ./node_modules/d3-time/src/day.js


const timeDay = (0,interval/* timeInterval */.f)(date => date.setHours(0, 0, 0, 0), (date, step) => date.setDate(date.getDate() + step), (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay, date => date.getDate() - 1);
const timeDays = timeDay.range;
const utcDay = (0,interval/* timeInterval */.f)(date => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, date => {
  return date.getUTCDate() - 1;
});
const utcDays = utcDay.range;
const unixDay = (0,interval/* timeInterval */.f)(date => {
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCDate(date.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, date => {
  return Math.floor(date / durationDay);
});
const unixDays = unixDay.range;
;// ./node_modules/d3-time/src/year.js

const timeYear = (0,interval/* timeInterval */.f)(date => {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, (date, step) => {
  date.setFullYear(date.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, date => {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
timeYear.every = k => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,interval/* timeInterval */.f)(date => {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setFullYear(date.getFullYear() + step * k);
  });
};
const timeYears = timeYear.range;
const utcYear = (0,interval/* timeInterval */.f)(date => {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, (date, step) => {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, date => {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = k => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0,interval/* timeInterval */.f)(date => {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, (date, step) => {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};
const utcYears = utcYear.range;
;// ./node_modules/d3-time-format/src/locale.js

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y, m, d) {
  return {
    y: y,
    m: m,
    d: d,
    H: 0,
    M: 0,
    S: 0,
    L: 0
  };
}
function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
    locale_date = locale.date,
    locale_time = locale.time,
    locale_periods = locale.periods,
    locale_weekdays = locale.days,
    locale_shortWeekdays = locale.shortDays,
    locale_months = locale.months,
    locale_shortMonths = locale.shortMonths;
  var periodRe = formatRe(locale_periods),
    periodLookup = formatLookup(locale_periods),
    weekdayRe = formatRe(locale_weekdays),
    weekdayLookup = formatLookup(locale_weekdays),
    shortWeekdayRe = formatRe(locale_shortWeekdays),
    shortWeekdayLookup = formatLookup(locale_shortWeekdays),
    monthRe = formatRe(locale_months),
    monthLookup = formatLookup(locale_months),
    shortMonthRe = formatRe(locale_shortMonths),
    shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
        i = -1,
        j = 0,
        n = specifier.length,
        c,
        pad,
        format;
      if (!(date instanceof Date)) date = new Date(+date);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate(1900, undefined, 1),
        i = parseSpecifier(d, specifier, string += "", 0),
        week,
        day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
      n = specifier.length,
      m = string.length,
      c,
      parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function (specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    parse: function (specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
    utcFormat: function (specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    utcParse: function (specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function () {
        return specifier;
      };
      return p;
    }
  };
}
var pads = {
    "-": "",
    "_": " ",
    "0": "0"
  },
  numberRe = /^\s*\d+/,
  // note: ignores next directive
  percentRe = /^%/,
  requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
    string = (sign ? -value : value) + "",
    length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}
;// ./node_modules/d3-time-format/src/defaultLocale.js

var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}
;// ./src/pages/games/KPOES/prompts.ts
const prompts={"creative-short-story":["A haiku","Eye contact","Hope","Windows","Electricity","Fear","Jealousy","Dreams","Animals","Cleaning","Moon","Revenge","Sweet","Desert","Competition","Wedding","Plants","Animals","1000 years","The future","The past","The present","Sharing","Umami","Responsibility","5 things you can see","Art","Places","Alarm","Books","Spice","Music","Nostalgia","Legends","Brave","Travel","Smoke","Doors","Culture","Light","Community","Puzzles","Unknown","Nature","Secret","Movies","Joke","Sport","Tradition","Coping","Embarrassment","Longing","Heroic","Advertisment","Magic","Wonder","Adjective","Whisper","Heat","4 things you feel","Neighbours","Flying","Colour","Forest","Shape","Contradiction","Friendship","Prizes","Sour","Winning","Beach","3 things you hear","Proximity","Direction","Grow","Scent","Gift","Ships","Farming","Stealing","Isolation","Dancing","Energise","Discover","Manners","2 things you smell","Copy","Empathy","Strength","Waterfall","Breathe","Time","Influence","Pattern","Choice","Concrete","Experiment","Cooking","Forgive","Teams","Power","Lyrics","Obstacle","Shrink","Follow","1 thing you taste","Truth","Resolution","Movement","Space","Fortune","Trust","Starting","Rain","Inspiration","Salty","What was it like being 5 years old? Where were you? What did you look like?","Size","Transformation","Balance","Threat","Substitute","Adapt","Smile","Senses","House boat","Dry","Cold","Chances","Questions","A speech","Promise","Mix","What if","Thrill","Science","Detail","Speed","Sky","Hobbies","Bubbles","What was it like being 10 years old? Where were you? What did you like?","Graphic","Explain","Borrow","Transport","Contrast","Memory","Failure","Swimming","Bitter","Names","An obituary","Switch","Personal","Mystery","Minerals","Communication","Bragging","Horror","What was it like being 12 years old? What did you like? What did you dislike?","Compare","Mischief","Paths","Create","Code","Scavenge","Self-portrait","Challenge","A newsletter","Canvas","Hybrid","Maps","Abstract","A snail mail letter","Mode","Busy","Passage","Repetition","A post card","Resilience","Play","What is it like being you?","Combine","Ideas","Favourites","Themes","Dwelling",// End of original entries
"A haiku","Eye contact","Hope","Windows","Electricity","Fear","Jealousy","Dreams","Animals","Cleaning","Moon","Revenge","Sweet","Desert","Competition","Wedding","Plants","Animals","1000 years","The future","The past","The present","Sharing","Umami","Responsibility","5 things you can see","Art","Places","Alarm","Books","Spice","Music","Nostalgia","Legends","Brave","Travel","Smoke","Doors","Culture","Light","Community","Puzzles","Unknown","Nature","Secret","Movies","Joke","Sport","Tradition","Coping","Embarrassment","Longing","Heroic","Advertisment","Magic","Wonder","Adjective","Whisper","Heat","4 things you feel","Neighbours","Flying","Colour","Forest","Shape","Contradiction","Friendship","Prizes","Sour","Winning","Beach","3 things you hear","Proximity","Direction","Grow","Scent","Gift","Ships","Farming","Stealing","Isolation","Dancing","Energise","Discover","Manners","2 things you smell","Copy","Empathy","Strength","Waterfall","Breathe","Time","Influence","Pattern","Choice","Concrete","Experiment","Cooking","Forgive","Teams","Power","Lyrics","Obstacle","Shrink","Follow","1 thing you taste","Truth","Resolution","Movement","Space","Fortune","Trust","Starting","Rain","Inspiration","Salty","What was it like being 5 years old? Where were you? What did you look like?","Size","Transformation","Balance","Threat","Substitute","Adapt","Smile","Senses","House boat","Dry","Cold","Chances","Questions","A speech","Promise","Mix","What if","Thrill","Science","Detail","Speed","Sky","Hobbies","Bubbles","What was it like being 10 years old? Where were you? What did you like?","Graphic","Explain","Borrow","Transport","Contrast","Memory","Failure","Swimming","Bitter","Names","An obituary","Switch","Personal","Mystery","Minerals","Communication","Bragging","Horror","What was it like being 12 years old? What did you like? What did you dislike?","Compare","Mischief","Paths","Create","Code","Scavenge","Self-portrait","Challenge","A newsletter","Canvas","Hybrid","Maps","Abstract","A snail mail letter","Mode","Busy","Passage"],"steno-motivations":["What specific skill would you like to achieve using stenography?","What would it look like/feel like if you could type using stenography?","How will things be different for you when you master stenography?","What would it feel like to have the skill of stenography?","What would it feel like to have mastered stenography?","If your goal was a t-shirt slogan, what would it say?","When would you like to have your current steno goal achieved?","How will you know that you have achieved your steno goal? What would the evidence of success be?","What are two things you could do today to start moving towards your steno goal?","What else could you do to keep momentum with steno?","When could you do one thing to help you keep momentum with steno?","What would an epic outcome look like for your steno journey?","What is your stenographic north star?","What is your current steno goal?","How will you measure your steno goal success?","What activities help you improve your steno speed?","What activities help you improve your steno vocabulary?","What activities help you improve your steno briefing and stroke efficiency?","What activities help you improve your steno ergonomics?","What is an achievable next milestone for you on your steno journey?","How much effort are you willing to put into steno practice?","How much effort have you put into steno practice?","How much effort have you recently put into steno practice?","What stops you doing more steno practice?","What obstacles are there to your steno success?","Is there a lovable project that you could do with steno to keep you motivated?","What is the next part of steno you need to learn?","What is your target performance level with steno?","What tools and resources do you need for your stenography journey?","What tools do you need to write comfortably with stenography?","What will the next 20 hours of your steno practice look like?","When will you next spend time concentrating on improving your steno skill?","How might you fix mistakes faster?","How might you spot steno mistakes quickly?","When could you do a short burst of steno practice?","How could you squeeze in more steno practice?","Where will you be when you next practice steno?","How might you get 1% better at steno today?","How might you learn a little more about steno?","How might you get more realistic steno practice?","Have you considered an accountability buddy for your steno practice?","Who could help you be successful at steno?","How will you remember to do steno practice?","Who has helped you with your steno practice?","Who might you help with steno?","What are your expectations about steno?","How might you close the gap between your steno expectations and reality?","What does steno success look like?","What are your options for improving your steno skill?","How might you spend your time, money, or energy on steno?","What's the most likely way your steno journey might be disrupted?","Imagine you've been wildly successful at mastering steno. What helped you get there?","Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?","What distracts you from mastering steno?","How will you know what you're getting better at steno?","How will you know you're getting more comfortable with steno?","What makes writing with steno feel comfortable or uncomfortable?","What's the slowest you could write with steno and still feel productive?","What's the slowest you could write with steno and feel comfortable?","What's the fastest you could write with steno with 100% accuracy?","How frequently do you practice steno?","How often do you revise more unusual words or steno briefs?","What leads to a successful steno study session for you?","What is your prediction about your steno skill one month from now?","What activities will improve your steno skill? How might you test the effectiveness of those activites?","What helps you remember steno briefs?","What helps you concentrate?","What helps you with recall?","What's missing from your steno practice?","What does steno mean to you?","What motivates you about steno?","What's an example of something that helps you practice steno?","How do you prioritise steno practice?","On a scale of 1 to 10, what is your current level of motivation?","What is important to you about stenography?","What is the next small step you can take to improve your steno skill?","What is an even smaller step you could take to improve your steno skill?","What is the next smallest milestone on your steno journey?","How should you go about thinking about steno practice?","What are the benefits of steno to you?","What do you hope to achieve with steno in the next week?","What do you hope to achieve with steno today?","What is the purpose of steno for you?","What is holding you back from steno success?","What concerns do you have about steno?","What have you tried so far to master steno?","When do steno problems occur?","What's working well for you with steno?","If you could do your steno journey over again, what would you do differently?","How well do you practice?","What is your action plan for mastering steno?","Are there advantages or disadvantages to starting your steno studies sooner or later?","How many prefixes and suffixes can you write?","How often do you take breaks?","What's your steno posture like?","How effectively do you use prefix and suffix entries?",// End of original entries
"What specific skill would you like to achieve using stenography?","What would it look like/feel like if you could type using stenography?","How will things be different for you when you master stenography?","What would it feel like to have the skill of stenography?","What would it feel like to have mastered stenography?","If your goal was a t-shirt slogan, what would it say?","When would you like to have your current steno goal achieved?","How will you know that you have achieved your steno goal? What would the evidence of success be?","What are two things you could do today to start moving towards your steno goal?","What else could you do to keep momentum with steno?","When could you do one thing to help you keep momentum with steno?","What would an epic outcome look like for your steno journey?","What is your stenographic north star?","What is your current steno goal?","How will you measure your steno goal success?","What activities help you improve your steno speed?","What activities help you improve your steno vocabulary?","What activities help you improve your steno briefing and stroke efficiency?","What activities help you improve your steno ergonomics?","What is an achievable next milestone for you on your steno journey?","How much effort are you willing to put into steno practice?","How much effort have you put into steno practice?","How much effort have you recently put into steno practice?","What stops you doing more steno practice?","What obstacles are there to your steno success?","Is there a lovable project that you could do with steno to keep you motivated?","What is the next part of steno you need to learn?","What is your target performance level with steno?","What tools and resources do you need for your stenography journey?","What tools do you need to write comfortably with stenography?","What will the next 20 hours of your steno practice look like?","When will you next spend time concentrating on improving your steno skill?","How might you fix mistakes faster?","How might you spot steno mistakes quickly?","When could you do a short burst of steno practice?","How could you squeeze in more steno practice?","Where will you be when you next practice steno?","How might you get 1% better at steno today?","How might you learn a little more about steno?","How might you get more realistic steno practice?","Have you considered an accountability buddy for your steno practice?","Who could help you be successful at steno?","How will you remember to do steno practice?","Who has helped you with your steno practice?","Who might you help with steno?","What are your expectations about steno?","How might you close the gap between your steno expectations and reality?","What does steno success look like?","What are your options for improving your steno skill?","How might you spend your time, money, or energy on steno?","What's the most likely way your steno journey might be disrupted?","Imagine you've been wildly successful at mastering steno. What helped you get there?","Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?","What distracts you from mastering steno?","How will you know what you're getting better at steno?","How will you know you're getting more comfortable with steno?","What makes writing with steno feel comfortable or uncomfortable?","What's the slowest you could write with steno and still feel productive?","What's the slowest you could write with steno and feel comfortable?","What's the fastest you could write with steno with 100% accuracy?","How frequently do you practice steno?","How often do you revise more unusual words or steno briefs?","What leads to a successful steno study session for you?","What is your prediction about your steno skill one month from now?","What activities will improve your steno skill? How might you test the effectiveness of those activites?","What helps you remember steno briefs?","What helps you concentrate?","What helps you with recall?","What's missing from your steno practice?","What does steno mean to you?","What motivates you about steno?","What's an example of something that helps you practice steno?","How do you prioritise steno practice?","On a scale of 1 to 10, what is your current level of motivation?","What is important to you about stenography?","What is the next small step you can take to improve your steno skill?","What is an even smaller step you could take to improve your steno skill?","What is the next smallest milestone on your steno journey?","How should you go about thinking about steno practice?","What are the benefits of steno to you?","What do you hope to achieve with steno in the next week?","What do you hope to achieve with steno today?","What is the purpose of steno for you?","What is holding you back from steno success?","What concerns do you have about steno?","What have you tried so far to master steno?","When do steno problems occur?","What's working well for you with steno?","If you could do your steno journey over again, what would you do differently?","How well do you practice?","What is your action plan for mastering steno?","Are there advantages or disadvantages to starting your steno studies sooner or later?","How many prefixes and suffixes can you write?","How often do you take breaks?","What's your steno posture like?","How effectively do you use prefix and suffix entries?","What specific skill would you like to achieve using stenography?","What would it look like/feel like if you could type using stenography?","How will things be different for you when you master stenography?","What would it feel like to have the skill of stenography?","What would it feel like to have mastered stenography?","If your goal was a t-shirt slogan, what would it say?","When would you like to have your current steno goal achieved?","How will you know that you have achieved your steno goal? What would the evidence of success be?","What are two things you could do today to start moving towards your steno goal?","What else could you do to keep momentum with steno?","When could you do one thing to help you keep momentum with steno?","What would an epic outcome look like for your steno journey?","What is your stenographic north star?","What is your current steno goal?","How will you measure your steno goal success?","What activities help you improve your steno speed?","What activities help you improve your steno vocabulary?","What activities help you improve your steno briefing and stroke efficiency?","What activities help you improve your steno ergonomics?","What is an achievable next milestone for you on your steno journey?","How much effort are you willing to put into steno practice?","How much effort have you put into steno practice?","How much effort have you recently put into steno practice?","What stops you doing more steno practice?","What obstacles are there to your steno success?","Is there a lovable project that you could do with steno to keep you motivated?","What is the next part of steno you need to learn?","What is your target performance level with steno?","What tools and resources do you need for your stenography journey?","What tools do you need to write comfortably with stenography?","What will the next 20 hours of your steno practice look like?","When will you next spend time concentrating on improving your steno skill?","How might you fix mistakes faster?","How might you spot steno mistakes quickly?","When could you do a short burst of steno practice?","How could you squeeze in more steno practice?","Where will you be when you next practice steno?","How might you get 1% better at steno today?","How might you learn a little more about steno?","How might you get more realistic steno practice?","Have you considered an accountability buddy for your steno practice?","Who could help you be successful at steno?","How will you remember to do steno practice?","Who has helped you with your steno practice?","Who might you help with steno?","What are your expectations about steno?","How might you close the gap between your steno expectations and reality?","What does steno success look like?","What are your options for improving your steno skill?","How might you spend your time, money, or energy on steno?","What's the most likely way your steno journey might be disrupted?","Imagine you've been wildly successful at mastering steno. What helped you get there?","Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?","What distracts you from mastering steno?","How will you know what you're getting better at steno?","How will you know you're getting more comfortable with steno?","What makes writing with steno feel comfortable or uncomfortable?","What's the slowest you could write with steno and still feel productive?","What's the slowest you could write with steno and feel comfortable?","What's the fastest you could write with steno with 100% accuracy?","How frequently do you practice steno?","How often do you revise more unusual words or steno briefs?","What leads to a successful steno study session for you?","What is your prediction about your steno skill one month from now?","What activities will improve your steno skill? How might you test the effectiveness of those activites?","What helps you remember steno briefs?","What helps you concentrate?","What helps you with recall?","What's missing from your steno practice?","What does steno mean to you?","What motivates you about steno?","What's an example of something that helps you practice steno?","How do you prioritise steno practice?","On a scale of 1 to 10, what is your current level of motivation?","What is important to you about stenography?","What is the next small step you can take to improve your steno skill?","What is an even smaller step you could take to improve your steno skill?","What is the next smallest milestone on your steno journey?","How should you go about thinking about steno practice?","What are the benefits of steno to you?","What do you hope to achieve with steno in the next week?","What do you hope to achieve with steno today?","What is the purpose of steno for you?","What is holding you back from steno success?","What concerns do you have about steno?","What have you tried so far to master steno?","When do steno problems occur?","What's working well for you with steno?","If you could do your steno journey over again, what would you do differently?","How well do you practice?","What is your action plan for mastering steno?","Are there advantages or disadvantages to starting your steno studies sooner or later?","How many prefixes and suffixes can you write?","How often do you take breaks?","What's your steno posture like?","How effectively do you use prefix and suffix entries?","What specific skill would you like to achieve using stenography?","What would it look like/feel like if you could type using stenography?","How will things be different for you when you master stenography?","What would it feel like to have the skill of stenography?","What would it feel like to have mastered stenography?","If your goal was a t-shirt slogan, what would it say?","When would you like to have your current steno goal achieved?","How will you know that you have achieved your steno goal? What would the evidence of success be?","What are two things you could do today to start moving towards your steno goal?","What else could you do to keep momentum with steno?","When could you do one thing to help you keep momentum with steno?","What would an epic outcome look like for your steno journey?","What is your stenographic north star?","What is your current steno goal?","How will you measure your steno goal success?","What activities help you improve your steno speed?","What activities help you improve your steno vocabulary?","What activities help you improve your steno briefing and stroke efficiency?","What activities help you improve your steno ergonomics?","What is an achievable next milestone for you on your steno journey?","How much effort are you willing to put into steno practice?","How much effort have you put into steno practice?","How much effort have you recently put into steno practice?","What stops you doing more steno practice?","What obstacles are there to your steno success?","Is there a lovable project that you could do with steno to keep you motivated?","What is the next part of steno you need to learn?","What is your target performance level with steno?","What tools and resources do you need for your stenography journey?","What tools do you need to write comfortably with stenography?","What will the next 20 hours of your steno practice look like?","When will you next spend time concentrating on improving your steno skill?","How might you fix mistakes faster?","How might you spot steno mistakes quickly?","When could you do a short burst of steno practice?","How could you squeeze in more steno practice?","Where will you be when you next practice steno?","How might you get 1% better at steno today?","How might you learn a little more about steno?","How might you get more realistic steno practice?","Have you considered an accountability buddy for your steno practice?","Who could help you be successful at steno?","How will you remember to do steno practice?","Who has helped you with your steno practice?","Who might you help with steno?","What are your expectations about steno?","How might you close the gap between your steno expectations and reality?","What does steno success look like?","What are your options for improving your steno skill?","How might you spend your time, money, or energy on steno?","What's the most likely way your steno journey might be disrupted?","Imagine you've been wildly successful at mastering steno. What helped you get there?","Suppose you've been unsuccessful at mastering steno. What stopped you getting there? How might you tackle that?","What distracts you from mastering steno?","How will you know what you're getting better at steno?","How will you know you're getting more comfortable with steno?","What makes writing with steno feel comfortable or uncomfortable?","What's the slowest you could write with steno and still feel productive?","What's the slowest you could write with steno and feel comfortable?","What's the fastest you could write with steno with 100% accuracy?","How frequently do you practice steno?","How often do you revise more unusual words or steno briefs?","What leads to a successful steno study session for you?","What is your prediction about your steno skill one month from now?","What activities will improve your steno skill? How might you test the effectiveness of those activites?","What helps you remember steno briefs?","What helps you concentrate?","What helps you with recall?","What's missing from your steno practice?","What does steno mean to you?","What motivates you about steno?","What's an example of something that helps you practice steno?","How do you prioritise steno practice?","On a scale of 1 to 10, what is your current level of motivation?","What is important to you about stenography?","What is the next small step you can take to improve your steno skill?","What is an even smaller step you could take to improve your steno skill?","What is the next smallest milestone on your steno journey?"],"journalling":["Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Life story","Change","Reflection","Lessons","Wishes",// End of original entries
"Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?","What have you achieved?","Thoughts","Ideas","Options","Approaches","Action","Feelings","Gratitude","Accomplishments","What have you learned this week?","What's on your mind?","What happened yesterday?","What happened today?","What will do you today?","What will do you this week?","What have you learned?"],"open-ended":[]};/* harmony default export */ const KPOES_prompts = (prompts);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6723);
;// ./src/pages/games/KPOES/Prompt.tsx
const defaultComposePrompt="creative-short-story";const composePrompts={"creative-short-story":"creative-short-story","steno-motivations":"steno-motivations","journalling":"journalling","open-ended":"open-ended"};const dayOfYear=+utcFormat("%j")(new Date());const promptIndex=Math.min(Math.max(dayOfYear-1,0),366);const getPrompt=composePrompt=>{var _prompts$composePromp,_prompts$composePromp2,_prompts$composePromp3,_prompts$composePromp4;switch(composePrompt){case"creative-short-story":return(_prompts$composePromp=KPOES_prompts[composePrompt][promptIndex])!==null&&_prompts$composePromp!==void 0?_prompts$composePromp:"Write a creative short story";case"steno-motivations":return(_prompts$composePromp2=KPOES_prompts[composePrompt][promptIndex])!==null&&_prompts$composePromp2!==void 0?_prompts$composePromp2:"Write about your steno motivations";case"journalling":return(_prompts$composePromp3=KPOES_prompts[composePrompt][promptIndex])!==null&&_prompts$composePromp3!==void 0?_prompts$composePromp3:"Write about your thoughts and feelings";case"open-ended":return(_prompts$composePromp4=KPOES_prompts[composePrompt][promptIndex])!==null&&_prompts$composePromp4!==void 0?_prompts$composePromp4:"Write anything you like";default:return"Write anything";}};const Prompt=()=>{const[composePrompt,setComposePrompt]=(0,react.useState)(defaultComposePrompt);const changePromptHandler=event=>{var _composePrompts$event;const newPrompt=(_composePrompts$event=composePrompts[event.target.value])!==null&&_composePrompts$event!==void 0?_composePrompts$event:defaultComposePrompt;setComposePrompt(newPrompt);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex",children:/*#__PURE__*/(0,jsx_runtime.jsx)("fieldset",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap items-center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("legend",{className:"mr3",children:/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"fw-bold text-center mb0",children:"Today's prompt:"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-wrap",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mr3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{htmlFor:"creative-short-story",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{onChange:changePromptHandler,type:"radio",name:"compose-prompt",id:"creative-short-story",value:"creative-short-story",defaultChecked:true})," ","Creative short story"]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mr3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{htmlFor:"steno-motivations",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{onChange:changePromptHandler,type:"radio",name:"compose-prompt",id:"steno-motivations",value:"steno-motivations"})," ","Steno motivation"]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mr3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{htmlFor:"journalling",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{onChange:changePromptHandler,type:"radio",name:"compose-prompt",id:"journalling",value:"journalling"})," ","Journalling"]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mr3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("label",{htmlFor:"open-ended",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("input",{onChange:changePromptHandler,type:"radio",name:"compose-prompt",id:"open-ended",value:"open-ended"})," ","Open-ended"]})})]})]})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{"data-chromatic":"ignore",className:"mt3 b--solid bw-2 b--brand-primary-tint bg-coolgrey-300 dark:bg-coolgrey-900 text-center pr3",children:["\u201C",getPrompt(composePrompt),"\u201D"]})]});};/* harmony default export */ const KPOES_Prompt = (Prompt);
// EXTERNAL MODULE: ./node_modules/jotai/esm/react.mjs
var esm_react = __webpack_require__(2976);
// EXTERNAL MODULE: ./src/components/PseudoContentButton.tsx
var PseudoContentButton = __webpack_require__(3008);
;// ./src/pages/games/KPOES/YourWordsHighlighted.tsx
const whitespaceRegexWithCaptures=/(\s)/;const YourWordsHighlighted=_ref=>{let{metWords,userSettings,yourWords}=_ref;const result=yourWords.trim().split(whitespaceRegexWithCaptures).filter(Boolean).map((wordPunctuationOrWhitespace,index,yourSplitWords)=>{if(wordPunctuationOrWhitespace===" ")return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:wordPunctuationOrWhitespace},index);if(wordPunctuationOrWhitespace==="\n")return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("br",{})},index);const typedCount=yourSplitWords.filter(typed=>typed===wordPunctuationOrWhitespace).length;const spacedWord=userSettings.spacePlacement==="spaceBeforeOutput"?` ${wordPunctuationOrWhitespace}`:userSettings.spacePlacement==="spaceAfterOutput"?`${wordPunctuationOrWhitespace} `:wordPunctuationOrWhitespace;if(!metWords[spacedWord]||metWords[spacedWord]&&typedCount===metWords[spacedWord])return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"highlight-new-word",children:wordPunctuationOrWhitespace},`${index}`);if(metWords[spacedWord]&&(metWords[spacedWord]===30||metWords[spacedWord]>30&&metWords[spacedWord]-typedCount<30))return/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"highlight-memorised-word",children:wordPunctuationOrWhitespace},`${index}`);return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:wordPunctuationOrWhitespace},index);});return/*#__PURE__*/(0,jsx_runtime.jsx)("p",{children:result});};/* harmony default export */ const KPOES_YourWordsHighlighted = (YourWordsHighlighted);
;// ./src/pages/games/KPOES/Legend.tsx
const Legend=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"mt3",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("details",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("summary",{className:"de-emphasized",children:"Highlights"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"flex flex-column",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"mb0 de-emphasized",children:["New words written for the first time have a"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{"borderBottom":"2px solid var(--magenta-700)"},children:"violet underline."})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"mb0 de-emphasized",children:["Newly memorised words written for the 30th time have a"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("span",{style:{"borderBottom":"2px solid var(--violet-600)"},children:"magenta underline."})]})]})]})});};/* harmony default export */ const KPOES_Legend = (Legend);
;// ./src/pages/games/KPOES/WordCount.tsx
const WordCount=_ref=>{let{wordCount}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:`${wordCount} ${wordCount===1?"word":"words"}`});};/* harmony default export */ const KPOES_WordCount = (WordCount);
// EXTERNAL MODULE: ./src/states/userSettingsState.ts
var userSettingsState = __webpack_require__(8282);
;// ./src/pages/games/KPOES/WriteYourWords.tsx
const wordsStorageKey="typey-KPOES-words";const timeStorageKey="typey-KPOES-time";const fourHours=1000*60*60*4;const YourWords=_ref=>{let{metWords,updateMultipleMetWords,userSettings}=_ref;const[wordCount,setWordCount]=(0,react.useState)(0);const[yourWords,setYourWords]=(0,react.useState)("");const[done,setDone]=(0,react.useState)(false);const spacePlacement=(0,esm_react/* useAtomValue */.md)(userSettingsState/* spacePlacementState */.tc);(0,react.useEffect)(()=>{try{if(window.localStorage){let yourKPOESwords=window.localStorage.getItem(wordsStorageKey);let yourKPOEStime=window.localStorage.getItem(timeStorageKey);if(yourKPOESwords&&yourKPOEStime&&Date.now()-(+yourKPOEStime||0)<fourHours){setYourWords(yourKPOESwords);}}}catch(error){console.error("Unable to read local storage. ",error);}},[]);const changeYourWordsHandler=event=>{setWordCount(event.target.value.trim().split(/\s/).filter(Boolean).length);const slicedYourWords=event.target.value.slice(0,10000);setYourWords(slicedYourWords);try{window.localStorage.setItem(wordsStorageKey,slicedYourWords);window.localStorage.setItem(timeStorageKey,`${Date.now()}`);}catch(error){console.error("Unable to write to local storage. ",error);}};const doneHandler=()=>{setDone(true);updateMultipleMetWords(yourWords.split(/\s/),spacePlacement);const copyButton=document.querySelector(".js-clipboard-button");if(copyButton){copyButton.focus();}};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:done?/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"mb0",children:["You wrote ",/*#__PURE__*/(0,jsx_runtime.jsx)(KPOES_WordCount,{wordCount:wordCount}),":"]}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{id:"your-words",className:"db lh1-5 py05 px1 bg-info dark:text-coolgrey-900 bw-1 b--solid b--brand-primary-tint br-4 w-100 mw100",children:/*#__PURE__*/(0,jsx_runtime.jsx)(KPOES_YourWordsHighlighted,{yourWords:yourWords,metWords:metWords,userSettings:userSettings})}),/*#__PURE__*/(0,jsx_runtime.jsx)(PseudoContentButton/* default */.A,{className:"js-clipboard-button button button--secondary table-cell mt3 mr2 copy-to-clipboard",style:{lineHeight:2},dataClipboardTarget:"#your-words",children:"Copy your words to clipboard"}),/*#__PURE__*/(0,jsx_runtime.jsx)(KPOES_Legend,{})]}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mb1",children:/*#__PURE__*/(0,jsx_runtime.jsx)("label",{htmlFor:"write-your-words",children:"Write your words"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{id:"write-your-words",className:"input-textarea bg-info dark:text-coolgrey-900 bw-1 b--solid br-4 db w-100 mw100",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:false,onChange:changeYourWordsHandler,rows:6,value:yourWords}),/*#__PURE__*/(0,jsx_runtime.jsx)("p",{className:"mt1",children:/*#__PURE__*/(0,jsx_runtime.jsx)(KPOES_WordCount,{wordCount:wordCount})}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"button mr2",onClick:doneHandler,children:"Done"})]})});};/* harmony default export */ const WriteYourWords = (YourWords);
// EXTERNAL MODULE: ./src/images/ComposingRobot.svg
var ComposingRobot = __webpack_require__(6145);
// EXTERNAL MODULE: ./src/components/StrokesForWords.tsx + 5 modules
var StrokesForWords = __webpack_require__(4480);
;// ./src/pages/games/KPOES/styles.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles = ({});
;// ./src/pages/games/KPOES/Game.tsx
const gameName="KPOES";const introText="Write what's in your head. This is a creative space for you to compose new text at your leisure. It may test your vocabulary and help you spot gaps in it. You could make a habit of writing a target number of words each day.";function Game(_ref){let{fetchAndSetupGlobalDict,globalLookupDictionary,globalLookupDictionaryLoaded,metWords,personalDictionaries,userSettings,updateMultipleMetWords}=_ref;return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"p3 mx-auto mw-1024",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex flex-wrap justify-between",children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mx-auto mw-1024 min-width-320 w-100",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("h3",{id:"typey-type-KPOES-game",className:"text-center mb3",children:[gameName," game"]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Intro/* default */.A,{introText:introText,robot:/*#__PURE__*/(0,jsx_runtime.jsx)(ComposingRobot/* ReactComponent */.h,{id:"composing-robot-KPOES",role:"img","aria-labelledby":"composing-robot-title"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(KPOES_Prompt,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(WriteYourWords,{metWords:metWords,updateMultipleMetWords:updateMultipleMetWords,userSettings:userSettings})]})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"mx-auto min-width-320 w-100 landing-page-section bg-slat dark:bg-coolgrey-1100 px3",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"pt6 mw-584 mx-auto text-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(StrokesForWords/* default */.A,{fetchAndSetupGlobalDict:fetchAndSetupGlobalDict,globalLookupDictionary:globalLookupDictionary,globalLookupDictionaryLoaded:globalLookupDictionaryLoaded,personalDictionaries:personalDictionaries,userSettings:userSettings})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("p",{className:"text-center mt10 text-small",children:["Got a suggestion?"," ",/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:"https://forms.gle/kkSZZJFrY4USohgq6",className:"mt0",target:"_blank",rel:"noopener noreferrer",id:"ga--KPOES--give-feedback",children:"Give feedback (form opens in new tab)"})]})]})]});}
// EXTERNAL MODULE: ./src/components/Subheader.tsx
var Subheader = __webpack_require__(7532);
// EXTERNAL MODULE: ./src/states/legacy/AppMethodsContext.tsx
var AppMethodsContext = __webpack_require__(4457);
;// ./src/pages/games/KPOES/Index.tsx
function Index(_ref){let{globalLookupDictionary,globalLookupDictionaryLoaded,personalDictionaries,metWords,userSettings}=_ref;const{appFetchAndSetupGlobalDict,updateMultipleMetWords}=(0,AppMethodsContext/* useAppMethods */.$W)();const mainHeading=(0,react.useRef)(null);(0,react.useEffect)(()=>{var _mainHeading$current;(_mainHeading$current=mainHeading.current)===null||_mainHeading$current===void 0?void 0:_mainHeading$current.focus();},[]);(0,react.useEffect)(()=>{appFetchAndSetupGlobalDict(false,null).catch(error=>{console.error(error);});},[appFetchAndSetupGlobalDict]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("main",{id:"main",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Subheader/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex mr1 self-center",children:/*#__PURE__*/(0,jsx_runtime.jsx)("header",{className:"flex items-center min-h-40",children:/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{ref:mainHeading,tabIndex:-1,children:"KPOES"})})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Game,{fetchAndSetupGlobalDict:appFetchAndSetupGlobalDict,metWords:metWords,globalLookupDictionary:globalLookupDictionary,globalLookupDictionaryLoaded:globalLookupDictionaryLoaded,personalDictionaries:personalDictionaries,userSettings:userSettings,updateMultipleMetWords:updateMultipleMetWords})]});}

/***/ }),

/***/ 7154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Intro)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2483);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6723);
function Intro(_ref){let{introText,robot}=_ref;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"mw-824 mr3 flex-grow",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"flex",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"w-100 mw-48 mr3 game-robot",children:robot}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:introText})]})});}

/***/ }),

/***/ 4788:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ timeInterval)
/* harmony export */ });
const t0 = new Date(),
  t1 = new Date();
function timeInterval(floori, offseti, count, field) {
  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date() : new Date(+date)), date;
  }
  interval.floor = date => {
    return floori(date = new Date(+date)), date;
  };
  interval.ceil = date => {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };
  interval.round = date => {
    const d0 = interval(date),
      d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };
  interval.offset = (date, step) => {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };
  interval.range = (start, stop, step) => {
    const range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    let previous;
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start); while (previous < start && start < stop);
    return range;
  };
  interval.filter = test => {
    return timeInterval(date => {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, (date, step) => {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };
  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = step => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? d => field(d) % step === 0 : d => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}

/***/ })

}]);
//# sourceMappingURL=104.e64ee925.chunk.js.map