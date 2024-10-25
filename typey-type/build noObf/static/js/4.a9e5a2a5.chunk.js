(self["webpackChunktypey_type"] = self["webpackChunktypey_type"] || []).push([[4],{

/***/ 5022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
  nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function () {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime,
    lastInvokeTime = 0,
    leading = false,
    maxing = false,
    trailing = true;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs,
      thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime,
      result = wait - timeSinceLastCall;
    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
      timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(),
      isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;

/***/ }),

/***/ 5004:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mj: () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* unused harmony exports useBoolean, useClickAnyWhere, useCopyToClipboard, useCountdown, useCounter, useDarkMode, useDebounce, useDebounceCallback, useDebounceValue, useDocumentTitle, useEffectOnce, useElementSize, useEventCallback, useEventListener, useFetch, useHover, useImageOnLoad, useIntersectionObserver, useInterval, useIsClient, useIsFirstRender, useIsMounted, useIsomorphicLayoutEffect, useLockedBody, useMap, useMediaQuery, useOnClickOutside, useReadLocalStorage, useResizeObserver, useScreen, useScript, useScrollLock, useSessionStorage, useSsr, useStep, useTernaryDarkMode, useTimeout, useToggle, useUnmount, useUpdateEffect, useWindowSize */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2483);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5022);



// src/useBoolean/useBoolean.ts
function useBoolean(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);
  const setTrue = useCallback(() => {
    setValue(true);
  }, []);
  const setFalse = useCallback(() => {
    setValue(false);
  }, []);
  const toggle = useCallback(() => {
    setValue(x => !x);
  }, []);
  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle
  };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

// src/useEventListener/useEventListener.ts
function useEventListener(eventName, handler, element, options) {
  const savedHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const targetElement = (element == null ? void 0 : element.current) ?? window;
    if (!(targetElement && targetElement.addEventListener)) return;
    const listener = event => {
      savedHandler.current(event);
    };
    targetElement.addEventListener(eventName, listener, options);
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

// src/useClickAnyWhere/useClickAnyWhere.ts
function useClickAnyWhere(handler) {
  useEventListener("click", event => {
    handler(event);
  });
}
function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState(null);
  const copy = useCallback(async text => {
    if (!(navigator == null ? void 0 : navigator.clipboard)) {
      console.warn("Clipboard not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  }, []);
  return [copiedText, copy];
}
function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue ?? 0);
  const increment = () => {
    setCount(x => x + 1);
  };
  const decrement = () => {
    setCount(x => x - 1);
  };
  const reset = () => {
    setCount(initialValue ?? 0);
  };
  return {
    count,
    increment,
    decrement,
    reset,
    setCount
  };
}
function useInterval(callback, delay) {
  const savedCallback = useRef(callback);
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (delay === null) {
      return;
    }
    const id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

// src/useCountdown/useCountdown.ts
function useCountdown(countdownOptions) {
  let isDeprecated = false;
  let countStart, intervalMs, isIncrement, countStop;
  if ("seconds" in countdownOptions) {
    console.warn("[useCountdown:DEPRECATED] new interface is already available (see https://usehooks-ts.com/react-hook/use-countdown), the old version will retire on usehooks-ts@3.");
    isDeprecated = true;
    countStart = countdownOptions.seconds;
    intervalMs = countdownOptions.interval;
    isIncrement = countdownOptions.isIncrement;
  } else {
    ({
      countStart,
      intervalMs,
      isIncrement,
      countStop
    } = countdownOptions);
  }
  intervalMs = intervalMs ?? 1e3;
  isIncrement = isIncrement ?? false;
  countStop = countStop ?? 0;
  const {
    count,
    increment,
    decrement,
    reset: resetCounter
  } = useCounter(countStart);
  const {
    value: isCountdownRunning,
    setTrue: startCountdown,
    setFalse: stopCountdown
  } = useBoolean(false);
  const resetCountdown = () => {
    stopCountdown();
    resetCounter();
  };
  const countdownCallback = useCallback(() => {
    if (count === countStop) {
      stopCountdown();
      return;
    }
    if (isIncrement) {
      increment();
    } else {
      decrement();
    }
  }, [count, countStop, decrement, increment, isIncrement, stopCountdown]);
  useInterval(countdownCallback, isCountdownRunning ? intervalMs : null);
  return isDeprecated ? [count, {
    start: startCountdown,
    stop: stopCountdown,
    reset: resetCountdown
  }] : [count, {
    startCountdown,
    stopCountdown,
    resetCountdown
  }];
}
function useEventCallback(fn) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return ref.current(...arguments);
  }, [ref]);
}

// src/useLocalStorage/useLocalStorage.ts
var IS_SERVER = typeof window === "undefined";
function useLocalStorage(key, initialValue) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    initializeWithValue = true
  } = options;
  const serializer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    if (options.serializer) {
      return options.serializer(value);
    }
    return JSON.stringify(value);
  }, [options]);
  const deserializer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => {
    if (options.deserializer) {
      return options.deserializer(value);
    }
    if (value === "undefined") {
      return void 0;
    }
    const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return defaultValue;
    }
    return parsed;
  }, [options, initialValue]);
  const readValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
    if (IS_SERVER) {
      return initialValueToUse;
    }
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? deserializer(raw) : initialValueToUse;
    } catch (error) {
      console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
      return initialValueToUse;
    }
  }, [initialValue, key, deserializer]);
  const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return initialValue instanceof Function ? initialValue() : initialValue;
  });
  const setValue = useEventCallback(value => {
    if (IS_SERVER) {
      console.warn(`Tried setting localStorage key \u201C${key}\u201D even though environment is not a client`);
    }
    try {
      const newValue = value instanceof Function ? value(readValue()) : value;
      window.localStorage.setItem(key, serializer(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new StorageEvent("local-storage", {
        key
      }));
    } catch (error) {
      console.warn(`Error setting localStorage key \u201C${key}\u201D:`, error);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setStoredValue(readValue());
  }, [key]);
  const handleStorageChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if ((event == null ? void 0 : event.key) && event.key !== key) {
      return;
    }
    setStoredValue(readValue());
  }, [key, readValue]);
  useEventListener("storage", handleStorageChange);
  useEventListener("local-storage", handleStorageChange);
  return [storedValue, setValue];
}
var IS_SERVER2 = typeof window === "undefined";
function useMediaQuery(query, options) {
  const defaultValue = typeof options === "boolean" ? options : (options == null ? void 0 : options.defaultValue) ?? false;
  const initializeWithValue = typeof options === "boolean" ? void 0 : (options == null ? void 0 : options.initializeWithValue) ?? void 0;
  const getMatches = query2 => {
    if (IS_SERVER2) {
      return defaultValue;
    }
    return window.matchMedia(query2).matches;
  };
  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });
  function handleChange() {
    setMatches(getMatches(query));
  }
  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

// src/useDarkMode/useDarkMode.ts
var COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY = "usehooks-ts-dark-mode";
function useDarkMode(options) {
  let localStorageKeyProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOCAL_STORAGE_KEY;
  const counter = useRef(0);
  counter.current++;
  const defaultValue = typeof options === "boolean" ? options : options == null ? void 0 : options.defaultValue;
  const localStorageKey = typeof options === "boolean" ? localStorageKeyProps ?? LOCAL_STORAGE_KEY : (options == null ? void 0 : options.localStorageKey) ?? LOCAL_STORAGE_KEY;
  const initializeWithValue = typeof options === "boolean" ? void 0 : (options == null ? void 0 : options.initializeWithValue) ?? void 0;
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY, {
    initializeWithValue,
    defaultValue
  });
  const [isDarkMode, setDarkMode] = useLocalStorage(localStorageKey, defaultValue ?? isDarkOS ?? false, {
    initializeWithValue
  });
  useIsomorphicLayoutEffect(() => {
    if (isDarkOS !== isDarkMode) {
      setDarkMode(isDarkOS);
    }
  }, [isDarkOS]);
  return {
    isDarkMode,
    toggle: () => {
      setDarkMode(prev => !prev);
    },
    enable: () => {
      setDarkMode(true);
    },
    disable: () => {
      setDarkMode(false);
    },
    set: value => {
      setDarkMode(value);
    }
  };
}
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
function useUnmount(func) {
  const funcRef = useRef(func);
  funcRef.current = func;
  useEffect(() => () => {
    funcRef.current();
  }, []);
}

// src/useDebounceCallback/useDebounceCallback.ts
function useDebounceCallback(func) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let options = arguments.length > 2 ? arguments[2] : undefined;
  const debouncedFunc = useRef();
  useUnmount(() => {
    if (debouncedFunc.current) {
      debouncedFunc.current.cancel();
    }
  });
  const debounced = useMemo(() => {
    const debouncedFuncInstance = debounce(func, delay, options);
    const wrappedFunc = function () {
      return debouncedFuncInstance(...arguments);
    };
    wrappedFunc.cancel = () => {
      debouncedFuncInstance.cancel();
    };
    wrappedFunc.isPending = () => {
      return !!debouncedFunc.current;
    };
    wrappedFunc.flush = () => {
      return debouncedFuncInstance.flush();
    };
    return wrappedFunc;
  }, [func, delay, options]);
  useEffect(() => {
    debouncedFunc.current = debounce(func, delay, options);
  }, [func, delay, options]);
  return debounced;
}
function useDebounceValue(initialValue, delay, options) {
  const eq = (options == null ? void 0 : options.equalityFn) ?? ((left, right) => left === right);
  const unwrappedInitialValue = initialValue instanceof Function ? initialValue() : initialValue;
  const [debouncedValue, setDebouncedValue] = useState(unwrappedInitialValue);
  const previousValueRef = useRef(unwrappedInitialValue);
  const updateDebouncedValue = useDebounceCallback(setDebouncedValue, delay, options);
  if (!eq(previousValueRef.current, unwrappedInitialValue)) {
    updateDebouncedValue(unwrappedInitialValue);
    previousValueRef.current = unwrappedInitialValue;
  }
  return [debouncedValue, updateDebouncedValue];
}
function useDocumentTitle(title) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    preserveTitleOnUnmount = true
  } = options;
  const defaultTitle = useRef(null);
  useIsomorphicLayoutEffect(() => {
    defaultTitle.current = window.document.title;
  }, []);
  useIsomorphicLayoutEffect(() => {
    window.document.title = title;
  }, [title]);
  useUnmount(() => {
    if (!preserveTitleOnUnmount && defaultTitle.current) {
      window.document.title = defaultTitle.current;
    }
  });
}
function useEffectOnce(effect) {
  useEffect(effect, []);
}
function useElementSize() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    initializeWithValue = true
  } = options;
  const [ref, setRef] = useState(null);
  const readValue = useCallback(() => {
    return {
      width: (ref == null ? void 0 : ref.offsetWidth) ?? void 0,
      height: (ref == null ? void 0 : ref.offsetHeight) ?? void 0
    };
  }, [ref == null ? void 0 : ref.offsetHeight, ref == null ? void 0 : ref.offsetWidth]);
  const [size, setSize] = useState(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return {
      width: void 0,
      height: void 0
    };
  });
  const handleSize = useCallback(() => {
    setSize(readValue());
  }, [ref == null ? void 0 : ref.offsetHeight, ref == null ? void 0 : ref.offsetWidth]);
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, [ref == null ? void 0 : ref.offsetHeight, ref == null ? void 0 : ref.offsetWidth]);
  const result = [setRef, size];
  result.ref = result[0];
  result.width = size.width;
  result.height = size.height;
  return result;
}
function useFetch(url, options) {
  const cache = useRef({});
  const cancelRequest = useRef(false);
  const initialState = {
    error: void 0,
    data: void 0
  };
  const fetchReducer = (state2, action) => {
    switch (action.type) {
      case "loading":
        return {
          ...initialState
        };
      case "fetched":
        return {
          ...initialState,
          data: action.payload
        };
      case "error":
        return {
          ...initialState,
          error: action.payload
        };
      default:
        return state2;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (!url) return;
    cancelRequest.current = false;
    const fetchData = async () => {
      dispatch({
        type: "loading"
      });
      const currentCache = cache.current[url];
      if (currentCache) {
        dispatch({
          type: "fetched",
          payload: currentCache
        });
        return;
      }
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        cache.current[url] = data;
        if (cancelRequest.current) return;
        dispatch({
          type: "fetched",
          payload: data
        });
      } catch (error) {
        if (cancelRequest.current) return;
        dispatch({
          type: "error",
          payload: error
        });
      }
    };
    void fetchData();
    return () => {
      cancelRequest.current = true;
    };
  }, [url]);
  return state;
}
function useHover(elementRef) {
  const [value, setValue] = useState(false);
  const handleMouseEnter = () => {
    setValue(true);
  };
  const handleMouseLeave = () => {
    setValue(false);
  };
  useEventListener("mouseenter", handleMouseEnter, elementRef);
  useEventListener("mouseleave", handleMouseLeave, elementRef);
  return value;
}
function useImageOnLoad() {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageOnLoad = () => {
    setIsLoaded(true);
  };
  const css = {
    // Thumbnail style.
    thumbnail: {
      visibility: isLoaded ? "hidden" : "visible",
      filter: "blur(8px)",
      transition: "visibility 0ms ease-out 500ms"
    },
    // Full image style.
    fullSize: {
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 500ms ease-in 0ms"
    }
  };
  return {
    handleImageOnLoad,
    css
  };
}
function useIntersectionObserver(optionsOrLegacyRef, legacyOptions) {
  var _a;
  const isLegacySignature = "current" in optionsOrLegacyRef;
  const options = isLegacySignature ? legacyOptions : optionsOrLegacyRef;
  const {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
    initialIsIntersecting = false
  } = options ?? {};
  const [newRef, setNewRef] = useState(null);
  const ref = isLegacySignature ? optionsOrLegacyRef.current : newRef;
  const [state, setState] = useState(() => ({
    isIntersecting: initialIsIntersecting,
    entry: void 0
  }));
  const callbackRef = useRef();
  callbackRef.current = options == null ? void 0 : options.onChange;
  const frozen = ((_a = state.entry) == null ? void 0 : _a.isIntersecting) && freezeOnceVisible;
  useEffect(() => {
    if (!ref) return;
    if (!("IntersectionObserver" in window)) return;
    if (frozen) return;
    let unobserve;
    const observer = new IntersectionObserver(entries => {
      const thresholds = Array.isArray(observer.thresholds) ? observer.thresholds : [observer.thresholds];
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting && thresholds.some(threshold2 => entry.intersectionRatio >= threshold2);
        setState({
          isIntersecting,
          entry
        });
        if (callbackRef.current) {
          callbackRef.current(isIntersecting, entry);
        }
        if (isIntersecting && freezeOnceVisible && unobserve) {
          unobserve();
          unobserve = void 0;
        }
      });
    }, {
      threshold,
      root,
      rootMargin
    });
    observer.observe(ref);
    return () => {
      observer.disconnect();
    };
  }, [ref,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(threshold), root, rootMargin, frozen, freezeOnceVisible]);
  const prevRef = useRef(null);
  useEffect(() => {
    var _a2;
    if (!ref && ((_a2 = state.entry) == null ? void 0 : _a2.target) && !freezeOnceVisible && !frozen && prevRef.current !== state.entry.target) {
      prevRef.current = state.entry.target;
      setState({
        isIntersecting: initialIsIntersecting,
        entry: void 0
      });
    }
  }, [ref, state.entry, freezeOnceVisible, frozen, initialIsIntersecting]);
  if (isLegacySignature) {
    return state.entry;
  }
  const result = [setNewRef, !!state.isIntersecting, state.entry];
  result.ref = result[0];
  result.isIntersecting = result[1];
  result.entry = result[2];
  return result;
}
function useIsClient() {
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return isClient;
}
function useIsFirstRender() {
  const isFirst = useRef(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return isFirst.current;
}
function useIsMounted() {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return useCallback(() => isMounted.current, []);
}
function useLockedBody() {
  let initialLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  let rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "___gatsby";
  const [locked, setLocked] = useState(initialLocked);
  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    const root = document.getElementById(rootId);
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);
  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
  }, [initialLocked]);
  return [locked, setLocked];
}
function useMap() {
  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /* @__PURE__ */new Map();
  const [map, setMap] = useState(new Map(initialState));
  const actions = {
    set: useCallback((key, value) => {
      setMap(prev => {
        const copy = new Map(prev);
        copy.set(key, value);
        return copy;
      });
    }, []),
    setAll: useCallback(entries => {
      setMap(() => new Map(entries));
    }, []),
    remove: useCallback(key => {
      setMap(prev => {
        const copy = new Map(prev);
        copy.delete(key);
        return copy;
      });
    }, []),
    reset: useCallback(() => {
      setMap(() => /* @__PURE__ */new Map());
    }, [])
  };
  return [map, actions];
}

// src/useOnClickOutside/useOnClickOutside.ts
function useOnClickOutside(ref, handler) {
  let eventType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "mousedown";
  useEventListener(eventType, event => {
    const target = event.target;
    if (!target || !target.isConnected) {
      return;
    }
    const isOutside = Array.isArray(ref) ? ref.every(r => r.current && !r.current.contains(target)) : ref.current && !ref.current.contains(target);
    if (isOutside) {
      handler(event);
    }
  });
}
var IS_SERVER3 = typeof window === "undefined";
function useReadLocalStorage(key) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let {
    initializeWithValue = true
  } = options;
  if (IS_SERVER3) {
    initializeWithValue = false;
  }
  const deserializer = useCallback(value => {
    if (options.deserializer) {
      return options.deserializer(value);
    }
    if (value === "undefined") {
      return void 0;
    }
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
    return parsed;
  }, [options]);
  const readValue = useCallback(() => {
    if (IS_SERVER3) {
      return null;
    }
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? deserializer(raw) : null;
    } catch (error) {
      console.warn(`Error reading localStorage key \u201C${key}\u201D:`, error);
      return null;
    }
  }, [key, deserializer]);
  const [storedValue, setStoredValue] = useState(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return void 0;
  });
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);
  const handleStorageChange = useCallback(event => {
    if ((event == null ? void 0 : event.key) && event.key !== key) {
      return;
    }
    setStoredValue(readValue());
  }, [key, readValue]);
  useEventListener("storage", handleStorageChange);
  useEventListener("local-storage", handleStorageChange);
  return storedValue;
}
var initialSize = {
  width: void 0,
  height: void 0
};
function useResizeObserver(options) {
  const {
    ref,
    box = "content-box"
  } = options;
  const [{
    width,
    height
  }, setSize] = useState(initialSize);
  const isMounted = useIsMounted();
  const previousSize = useRef({
    ...initialSize
  });
  const onResize = useRef(void 0);
  onResize.current = options == null ? void 0 : options.onResize;
  useEffect(() => {
    if (!(ref == null ? void 0 : ref.current)) return;
    if (typeof window === "undefined" || !("ResizeObserver" in window)) return;
    const observer = new ResizeObserver(_ref => {
      let [entry] = _ref;
      const boxProp = box === "border-box" ? "borderBoxSize" : box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
      const newWidth = extractSize(entry, boxProp, "inlineSize");
      const newHeight = extractSize(entry, boxProp, "blockSize");
      const hasChanged = previousSize.current.width !== newWidth || previousSize.current.height !== newHeight;
      if (hasChanged) {
        const newSize = {
          width: newWidth,
          height: newHeight
        };
        previousSize.current.width = newWidth;
        previousSize.current.height = newHeight;
        if (onResize == null ? void 0 : onResize.current) {
          onResize.current(newSize);
        } else {
          if (isMounted()) {
            setSize(newSize);
          }
        }
      }
    });
    observer.observe(ref.current, {
      box
    });
    return () => {
      observer.disconnect();
    };
  }, [box, ref, isMounted]);
  return {
    width,
    height
  };
}
function extractSize(entry, box, sizeType) {
  if (!entry[box]) {
    if (box === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
    }
    return void 0;
  }
  return Array.isArray(entry[box]) ? entry[box][0][sizeType] :
  // @ts-ignore Support Firefox's non-standard behavior
  entry[box][sizeType];
}
var IS_SERVER4 = typeof window === "undefined";
function useScreen() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let {
    initializeWithValue = true
  } = options;
  if (IS_SERVER4) {
    initializeWithValue = false;
  }
  const readScreen = () => {
    if (IS_SERVER4) {
      return void 0;
    }
    return window.screen;
  };
  const [screen, setScreen] = useState(() => {
    if (initializeWithValue) {
      return readScreen();
    }
    return void 0;
  });
  const debouncedSetScreen = useDebounceCallback(setScreen, options == null ? void 0 : options.debounceDelay);
  function handleSize() {
    const newScreen = readScreen();
    const setSize = (options == null ? void 0 : options.debounceDelay) ? debouncedSetScreen : setScreen;
    if (newScreen) {
      const {
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth
      } = newScreen;
      setSize({
        width,
        height,
        availHeight,
        availWidth,
        colorDepth,
        orientation,
        pixelDepth
      });
    }
  }
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return screen;
}
var cachedScriptStatuses = /* @__PURE__ */new Map();
function getScriptNode(src) {
  const node = document.querySelector(`script[src="${src}"]`);
  const status = node == null ? void 0 : node.getAttribute("data-status");
  return {
    node,
    status
  };
}
function useScript(src, options) {
  const [status, setStatus] = useState(() => {
    if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
      return "idle";
    }
    if (typeof window === "undefined") {
      return "loading";
    }
    return cachedScriptStatuses.get(src) ?? "loading";
  });
  useEffect(() => {
    if (!src || (options == null ? void 0 : options.shouldPreventLoad)) {
      return;
    }
    const cachedScriptStatus = cachedScriptStatuses.get(src);
    if (cachedScriptStatus === "ready" || cachedScriptStatus === "error") {
      setStatus(cachedScriptStatus);
      return;
    }
    const script = getScriptNode(src);
    let scriptNode = script.node;
    if (!scriptNode) {
      scriptNode = document.createElement("script");
      scriptNode.src = src;
      scriptNode.async = true;
      if (options == null ? void 0 : options.id) {
        scriptNode.id = options.id;
      }
      scriptNode.setAttribute("data-status", "loading");
      document.body.appendChild(scriptNode);
      const setAttributeFromEvent = event => {
        const scriptStatus = event.type === "load" ? "ready" : "error";
        scriptNode == null ? void 0 : scriptNode.setAttribute("data-status", scriptStatus);
      };
      scriptNode.addEventListener("load", setAttributeFromEvent);
      scriptNode.addEventListener("error", setAttributeFromEvent);
    } else {
      setStatus(script.status ?? cachedScriptStatus ?? "loading");
    }
    const setStateFromEvent = event => {
      const newStatus = event.type === "load" ? "ready" : "error";
      setStatus(newStatus);
      cachedScriptStatuses.set(src, newStatus);
    };
    scriptNode.addEventListener("load", setStateFromEvent);
    scriptNode.addEventListener("error", setStateFromEvent);
    return () => {
      if (scriptNode) {
        scriptNode.removeEventListener("load", setStateFromEvent);
        scriptNode.removeEventListener("error", setStateFromEvent);
      }
      if (scriptNode && (options == null ? void 0 : options.removeOnUnmount)) {
        scriptNode.remove();
        cachedScriptStatuses.delete(src);
      }
    };
  }, [src, options == null ? void 0 : options.shouldPreventLoad, options == null ? void 0 : options.removeOnUnmount, options == null ? void 0 : options.id]);
  return status;
}
var IS_SERVER5 = typeof window === "undefined";
function useScrollLock() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    autoLock = true,
    lockTarget,
    widthReflow = true
  } = options;
  const [isLocked, setIsLocked] = useState(false);
  const target = useRef(null);
  const originalStyle = useRef(null);
  const lock = () => {
    if (target.current) {
      const {
        overflow,
        paddingRight
      } = target.current.style;
      originalStyle.current = {
        overflow,
        paddingRight
      };
      if (widthReflow) {
        const offsetWidth = target.current === document.body ? window.innerWidth : target.current.offsetWidth;
        const currentPaddingRight = parseInt(window.getComputedStyle(target.current).paddingRight, 10) || 0;
        const scrollbarWidth = offsetWidth - target.current.scrollWidth;
        target.current.style.paddingRight = `${scrollbarWidth + currentPaddingRight}px`;
      }
      target.current.style.overflow = "hidden";
      setIsLocked(true);
    }
  };
  const unlock = () => {
    if (target.current && originalStyle.current) {
      target.current.style.overflow = originalStyle.current.overflow;
      if (widthReflow) {
        target.current.style.paddingRight = originalStyle.current.paddingRight;
      }
    }
    setIsLocked(false);
  };
  useIsomorphicLayoutEffect(() => {
    if (IS_SERVER5) return;
    if (lockTarget) {
      target.current = typeof lockTarget === "string" ? document.querySelector(lockTarget) : lockTarget;
    }
    if (!target.current) {
      target.current = document.body;
    }
    if (autoLock) {
      lock();
    }
    return () => {
      unlock();
    };
  }, [autoLock, lockTarget, widthReflow]);
  return {
    isLocked,
    lock,
    unlock
  };
}
var IS_SERVER6 = typeof window === "undefined";
function useSessionStorage(key, initialValue) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    initializeWithValue = true
  } = options;
  const serializer = useCallback(value => {
    if (options.serializer) {
      return options.serializer(value);
    }
    return JSON.stringify(value);
  }, [options]);
  const deserializer = useCallback(value => {
    if (options.deserializer) {
      return options.deserializer(value);
    }
    if (value === "undefined") {
      return void 0;
    }
    const defaultValue = initialValue instanceof Function ? initialValue() : initialValue;
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return defaultValue;
    }
    return parsed;
  }, [options, initialValue]);
  const readValue = useCallback(() => {
    const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;
    if (IS_SERVER6) {
      return initialValueToUse;
    }
    try {
      const raw = window.sessionStorage.getItem(key);
      return raw ? deserializer(raw) : initialValueToUse;
    } catch (error) {
      console.warn(`Error reading sessionStorage key \u201C${key}\u201D:`, error);
      return initialValueToUse;
    }
  }, [initialValue, key, deserializer]);
  const [storedValue, setStoredValue] = useState(() => {
    if (initializeWithValue) {
      return readValue();
    }
    return initialValue instanceof Function ? initialValue() : initialValue;
  });
  const setValue = useEventCallback(value => {
    if (IS_SERVER6) {
      console.warn(`Tried setting sessionStorage key \u201C${key}\u201D even though environment is not a client`);
    }
    try {
      const newValue = value instanceof Function ? value(readValue()) : value;
      window.sessionStorage.setItem(key, serializer(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new StorageEvent("session-storage", {
        key
      }));
    } catch (error) {
      console.warn(`Error setting sessionStorage key \u201C${key}\u201D:`, error);
    }
  });
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);
  const handleStorageChange = useCallback(event => {
    if ((event == null ? void 0 : event.key) && event.key !== key) {
      return;
    }
    setStoredValue(readValue());
  }, [key, readValue]);
  useEventListener("storage", handleStorageChange);
  useEventListener("session-storage", handleStorageChange);
  return [storedValue, setValue];
}

// src/useSsr/useSsr.ts
function useSsr() {
  var _a;
  const isDOM =
  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
  typeof window !== "undefined" && !!((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  return {
    isBrowser: isDOM,
    isServer: !isDOM
  };
}
function useStep(maxStep) {
  const [currentStep, setCurrentStep] = useState(1);
  const canGoToNextStep = currentStep + 1 <= maxStep;
  const canGoToPrevStep = currentStep - 1 > 0;
  const setStep = useCallback(step => {
    const newStep = step instanceof Function ? step(currentStep) : step;
    if (newStep >= 1 && newStep <= maxStep) {
      setCurrentStep(newStep);
      return;
    }
    throw new Error("Step not valid");
  }, [maxStep, currentStep]);
  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep(step => step + 1);
    }
  }, [canGoToNextStep]);
  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep(step => step - 1);
    }
  }, [canGoToPrevStep]);
  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);
  return [currentStep, {
    goToNextStep,
    goToPrevStep,
    canGoToNextStep,
    canGoToPrevStep,
    setStep,
    reset
  }];
}

// src/useTernaryDarkMode/useTernaryDarkMode.ts
var COLOR_SCHEME_QUERY2 = "(prefers-color-scheme: dark)";
var LOCAL_STORAGE_KEY2 = "usehooks-ts-ternary-dark-mode";
function useTernaryDarkMode(options) {
  const defaultValue = typeof options === "string" ? "system" : (options == null ? void 0 : options.defaultValue) ?? "system";
  const localStorageKey = typeof options === "string" ? options : (options == null ? void 0 : options.localStorageKey) ?? LOCAL_STORAGE_KEY2;
  const initializeWithValue = typeof options === "string" ? void 0 : (options == null ? void 0 : options.initializeWithValue) ?? void 0;
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY2, {
    initializeWithValue
  });
  const [mode, setMode] = useLocalStorage(localStorageKey, defaultValue, {
    initializeWithValue
  });
  const isDarkMode = mode === "dark" || mode === "system" && isDarkOS;
  const toggleTernaryDarkMode = () => {
    const modes = ["light", "system", "dark"];
    setMode(prevMode => {
      const nextIndex = (modes.indexOf(prevMode) + 1) % modes.length;
      return modes[nextIndex];
    });
  };
  return {
    isDarkMode,
    ternaryDarkMode: mode,
    setTernaryDarkMode: setMode,
    toggleTernaryDarkMode
  };
}
function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);
    return () => {
      clearTimeout(id);
    };
  }, [delay]);
}
function useToggle(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);
  const toggle = useCallback(() => {
    setValue(x => !x);
  }, []);
  return [value, toggle, setValue];
}
function useUpdateEffect(effect, deps) {
  const isFirst = useIsFirstRender();
  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
}
var IS_SERVER7 = typeof window === "undefined";
function useWindowSize() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let {
    initializeWithValue = true
  } = options;
  if (IS_SERVER7) {
    initializeWithValue = false;
  }
  const [windowSize, setWindowSize] = useState(() => {
    if (initializeWithValue) {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    return {
      width: void 0,
      height: void 0
    };
  });
  const debouncedSetWindowSize = useDebounceCallback(setWindowSize, options == null ? void 0 : options.debounceDelay);
  function handleSize() {
    const setSize = (options == null ? void 0 : options.debounceDelay) ? debouncedSetWindowSize : setWindowSize;
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return windowSize;
}


/***/ })

}]);
//# sourceMappingURL=4.a9e5a2a5.chunk.js.map