function Fh(s, o) {
  for (var d = 0; d < o.length; d++) {
    const r = o[d];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const y in r)
        if (y !== 'default' && !(y in s)) {
          const j = Object.getOwnPropertyDescriptor(r, y);
          j &&
            Object.defineProperty(
              s,
              y,
              j.get ? j : { enumerable: !0, get: () => r[y] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const y of document.querySelectorAll('link[rel="modulepreload"]')) r(y);
  new MutationObserver((y) => {
    for (const j of y)
      if (j.type === 'childList')
        for (const z of j.addedNodes)
          z.tagName === 'LINK' && z.rel === 'modulepreload' && r(z);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(y) {
    const j = {};
    return (
      y.integrity && (j.integrity = y.integrity),
      y.referrerPolicy && (j.referrerPolicy = y.referrerPolicy),
      y.crossOrigin === 'use-credentials'
        ? (j.credentials = 'include')
        : y.crossOrigin === 'anonymous'
          ? (j.credentials = 'omit')
          : (j.credentials = 'same-origin'),
      j
    );
  }
  function r(y) {
    if (y.ep) return;
    y.ep = !0;
    const j = d(y);
    fetch(y.href, j);
  }
})();
function sm(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, 'default')
    ? s.default
    : s;
}
var bs = { exports: {} },
  On = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gd;
function Ih() {
  if (Gd) return On;
  Gd = 1;
  var s = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment');
  function d(r, y, j) {
    var z = null;
    if (
      (j !== void 0 && (z = '' + j),
      y.key !== void 0 && (z = '' + y.key),
      'key' in y)
    ) {
      j = {};
      for (var O in y) O !== 'key' && (j[O] = y[O]);
    } else j = y;
    return (
      (y = j.ref),
      { $$typeof: s, type: r, key: z, ref: y !== void 0 ? y : null, props: j }
    );
  }
  return ((On.Fragment = o), (On.jsx = d), (On.jsxs = d), On);
}
var Yd;
function Ph() {
  return (Yd || ((Yd = 1), (bs.exports = Ih())), bs.exports);
}
var c = Ph(),
  Ss = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ld;
function e1() {
  if (Ld) return V;
  Ld = 1;
  var s = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    d = Symbol.for('react.fragment'),
    r = Symbol.for('react.strict_mode'),
    y = Symbol.for('react.profiler'),
    j = Symbol.for('react.consumer'),
    z = Symbol.for('react.context'),
    O = Symbol.for('react.forward_ref'),
    N = Symbol.for('react.suspense'),
    p = Symbol.for('react.memo'),
    D = Symbol.for('react.lazy'),
    U = Symbol.for('react.activity'),
    X = Symbol.iterator;
  function ue(v) {
    return v === null || typeof v != 'object'
      ? null
      : ((v = (X && v[X]) || v['@@iterator']),
        typeof v == 'function' ? v : null);
  }
  var te = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    W = Object.assign,
    L = {};
  function ce(v, C, q) {
    ((this.props = v),
      (this.context = C),
      (this.refs = L),
      (this.updater = q || te));
  }
  ((ce.prototype.isReactComponent = {}),
    (ce.prototype.setState = function (v, C) {
      if (typeof v != 'object' && typeof v != 'function' && v != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, v, C, 'setState');
    }),
    (ce.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, 'forceUpdate');
    }));
  function be() {}
  be.prototype = ce.prototype;
  function le(v, C, q) {
    ((this.props = v),
      (this.context = C),
      (this.refs = L),
      (this.updater = q || te));
  }
  var Ee = (le.prototype = new be());
  ((Ee.constructor = le), W(Ee, ce.prototype), (Ee.isPureReactComponent = !0));
  var we = Array.isArray;
  function Je() {}
  var ae = { H: null, A: null, T: null, S: null },
    ke = Object.prototype.hasOwnProperty;
  function Tt(v, C, q) {
    var w = q.ref;
    return {
      $$typeof: s,
      type: v,
      key: C,
      ref: w !== void 0 ? w : null,
      props: q,
    };
  }
  function Fl(v, C) {
    return Tt(v.type, C, v.props);
  }
  function _t(v) {
    return typeof v == 'object' && v !== null && v.$$typeof === s;
  }
  function We(v) {
    var C = { '=': '=0', ':': '=2' };
    return (
      '$' +
      v.replace(/[=:]/g, function (q) {
        return C[q];
      })
    );
  }
  var Tl = /\/+/g;
  function Ht(v, C) {
    return typeof v == 'object' && v !== null && v.key != null
      ? We('' + v.key)
      : C.toString(36);
  }
  function Et(v) {
    switch (v.status) {
      case 'fulfilled':
        return v.value;
      case 'rejected':
        throw v.reason;
      default:
        switch (
          (typeof v.status == 'string'
            ? v.then(Je, Je)
            : ((v.status = 'pending'),
              v.then(
                function (C) {
                  v.status === 'pending' &&
                    ((v.status = 'fulfilled'), (v.value = C));
                },
                function (C) {
                  v.status === 'pending' &&
                    ((v.status = 'rejected'), (v.reason = C));
                }
              )),
          v.status)
        ) {
          case 'fulfilled':
            return v.value;
          case 'rejected':
            throw v.reason;
        }
    }
    throw v;
  }
  function A(v, C, q, w, K) {
    var $ = typeof v;
    ($ === 'undefined' || $ === 'boolean') && (v = null);
    var oe = !1;
    if (v === null) oe = !0;
    else
      switch ($) {
        case 'bigint':
        case 'string':
        case 'number':
          oe = !0;
          break;
        case 'object':
          switch (v.$$typeof) {
            case s:
            case o:
              oe = !0;
              break;
            case D:
              return ((oe = v._init), A(oe(v._payload), C, q, w, K));
          }
      }
    if (oe)
      return (
        (K = K(v)),
        (oe = w === '' ? '.' + Ht(v, 0) : w),
        we(K)
          ? ((q = ''),
            oe != null && (q = oe.replace(Tl, '$&/') + '/'),
            A(K, C, q, '', function (qa) {
              return qa;
            }))
          : K != null &&
            (_t(K) &&
              (K = Fl(
                K,
                q +
                  (K.key == null || (v && v.key === K.key)
                    ? ''
                    : ('' + K.key).replace(Tl, '$&/') + '/') +
                  oe
              )),
            C.push(K)),
        1
      );
    oe = 0;
    var Ve = w === '' ? '.' : w + ':';
    if (we(v))
      for (var Ae = 0; Ae < v.length; Ae++)
        ((w = v[Ae]), ($ = Ve + Ht(w, Ae)), (oe += A(w, C, q, $, K)));
    else if (((Ae = ue(v)), typeof Ae == 'function'))
      for (v = Ae.call(v), Ae = 0; !(w = v.next()).done; )
        ((w = w.value), ($ = Ve + Ht(w, Ae++)), (oe += A(w, C, q, $, K)));
    else if ($ === 'object') {
      if (typeof v.then == 'function') return A(Et(v), C, q, w, K);
      throw (
        (C = String(v)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (C === '[object Object]'
              ? 'object with keys {' + Object.keys(v).join(', ') + '}'
              : C) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return oe;
  }
  function H(v, C, q) {
    if (v == null) return v;
    var w = [],
      K = 0;
    return (
      A(v, w, '', '', function ($) {
        return C.call(q, $, K++);
      }),
      w
    );
  }
  function Z(v) {
    if (v._status === -1) {
      var C = v._result;
      ((C = C()),
        C.then(
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = q));
          },
          function (q) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = q));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = C)));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var he =
      typeof reportError == 'function'
        ? reportError
        : function (v) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var C = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof v == 'object' &&
                  v !== null &&
                  typeof v.message == 'string'
                    ? String(v.message)
                    : String(v),
                error: v,
              });
              if (!window.dispatchEvent(C)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', v);
              return;
            }
            console.error(v);
          },
    pe = {
      map: H,
      forEach: function (v, C, q) {
        H(
          v,
          function () {
            C.apply(this, arguments);
          },
          q
        );
      },
      count: function (v) {
        var C = 0;
        return (
          H(v, function () {
            C++;
          }),
          C
        );
      },
      toArray: function (v) {
        return (
          H(v, function (C) {
            return C;
          }) || []
        );
      },
      only: function (v) {
        if (!_t(v))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return v;
      },
    };
  return (
    (V.Activity = U),
    (V.Children = pe),
    (V.Component = ce),
    (V.Fragment = d),
    (V.Profiler = y),
    (V.PureComponent = le),
    (V.StrictMode = r),
    (V.Suspense = N),
    (V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae),
    (V.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (v) {
        return ae.H.useMemoCache(v);
      },
    }),
    (V.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (V.cacheSignal = function () {
      return null;
    }),
    (V.cloneElement = function (v, C, q) {
      if (v == null)
        throw Error(
          'The argument must be a React element, but you passed ' + v + '.'
        );
      var w = W({}, v.props),
        K = v.key;
      if (C != null)
        for ($ in (C.key !== void 0 && (K = '' + C.key), C))
          !ke.call(C, $) ||
            $ === 'key' ||
            $ === '__self' ||
            $ === '__source' ||
            ($ === 'ref' && C.ref === void 0) ||
            (w[$] = C[$]);
      var $ = arguments.length - 2;
      if ($ === 1) w.children = q;
      else if (1 < $) {
        for (var oe = Array($), Ve = 0; Ve < $; Ve++)
          oe[Ve] = arguments[Ve + 2];
        w.children = oe;
      }
      return Tt(v.type, K, w);
    }),
    (V.createContext = function (v) {
      return (
        (v = {
          $$typeof: z,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: j, _context: v }),
        v
      );
    }),
    (V.createElement = function (v, C, q) {
      var w,
        K = {},
        $ = null;
      if (C != null)
        for (w in (C.key !== void 0 && ($ = '' + C.key), C))
          ke.call(C, w) &&
            w !== 'key' &&
            w !== '__self' &&
            w !== '__source' &&
            (K[w] = C[w]);
      var oe = arguments.length - 2;
      if (oe === 1) K.children = q;
      else if (1 < oe) {
        for (var Ve = Array(oe), Ae = 0; Ae < oe; Ae++)
          Ve[Ae] = arguments[Ae + 2];
        K.children = Ve;
      }
      if (v && v.defaultProps)
        for (w in ((oe = v.defaultProps), oe))
          K[w] === void 0 && (K[w] = oe[w]);
      return Tt(v, $, K);
    }),
    (V.createRef = function () {
      return { current: null };
    }),
    (V.forwardRef = function (v) {
      return { $$typeof: O, render: v };
    }),
    (V.isValidElement = _t),
    (V.lazy = function (v) {
      return { $$typeof: D, _payload: { _status: -1, _result: v }, _init: Z };
    }),
    (V.memo = function (v, C) {
      return { $$typeof: p, type: v, compare: C === void 0 ? null : C };
    }),
    (V.startTransition = function (v) {
      var C = ae.T,
        q = {};
      ae.T = q;
      try {
        var w = v(),
          K = ae.S;
        (K !== null && K(q, w),
          typeof w == 'object' &&
            w !== null &&
            typeof w.then == 'function' &&
            w.then(Je, he));
      } catch ($) {
        he($);
      } finally {
        (C !== null && q.types !== null && (C.types = q.types), (ae.T = C));
      }
    }),
    (V.unstable_useCacheRefresh = function () {
      return ae.H.useCacheRefresh();
    }),
    (V.use = function (v) {
      return ae.H.use(v);
    }),
    (V.useActionState = function (v, C, q) {
      return ae.H.useActionState(v, C, q);
    }),
    (V.useCallback = function (v, C) {
      return ae.H.useCallback(v, C);
    }),
    (V.useContext = function (v) {
      return ae.H.useContext(v);
    }),
    (V.useDebugValue = function () {}),
    (V.useDeferredValue = function (v, C) {
      return ae.H.useDeferredValue(v, C);
    }),
    (V.useEffect = function (v, C) {
      return ae.H.useEffect(v, C);
    }),
    (V.useEffectEvent = function (v) {
      return ae.H.useEffectEvent(v);
    }),
    (V.useId = function () {
      return ae.H.useId();
    }),
    (V.useImperativeHandle = function (v, C, q) {
      return ae.H.useImperativeHandle(v, C, q);
    }),
    (V.useInsertionEffect = function (v, C) {
      return ae.H.useInsertionEffect(v, C);
    }),
    (V.useLayoutEffect = function (v, C) {
      return ae.H.useLayoutEffect(v, C);
    }),
    (V.useMemo = function (v, C) {
      return ae.H.useMemo(v, C);
    }),
    (V.useOptimistic = function (v, C) {
      return ae.H.useOptimistic(v, C);
    }),
    (V.useReducer = function (v, C, q) {
      return ae.H.useReducer(v, C, q);
    }),
    (V.useRef = function (v) {
      return ae.H.useRef(v);
    }),
    (V.useState = function (v) {
      return ae.H.useState(v);
    }),
    (V.useSyncExternalStore = function (v, C, q) {
      return ae.H.useSyncExternalStore(v, C, q);
    }),
    (V.useTransition = function () {
      return ae.H.useTransition();
    }),
    (V.version = '19.2.3'),
    V
  );
}
var Xd;
function Os() {
  return (Xd || ((Xd = 1), (Ss.exports = e1())), Ss.exports);
}
var R = Os();
const Cs = sm(R),
  t1 = Fh({ __proto__: null, default: Cs }, [R]);
var js = { exports: {} },
  Cn = {},
  Ns = { exports: {} },
  Es = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qd;
function l1() {
  return (
    Qd ||
      ((Qd = 1),
      (function (s) {
        function o(A, H) {
          var Z = A.length;
          A.push(H);
          e: for (; 0 < Z; ) {
            var he = (Z - 1) >>> 1,
              pe = A[he];
            if (0 < y(pe, H)) ((A[he] = H), (A[Z] = pe), (Z = he));
            else break e;
          }
        }
        function d(A) {
          return A.length === 0 ? null : A[0];
        }
        function r(A) {
          if (A.length === 0) return null;
          var H = A[0],
            Z = A.pop();
          if (Z !== H) {
            A[0] = Z;
            e: for (var he = 0, pe = A.length, v = pe >>> 1; he < v; ) {
              var C = 2 * (he + 1) - 1,
                q = A[C],
                w = C + 1,
                K = A[w];
              if (0 > y(q, Z))
                w < pe && 0 > y(K, q)
                  ? ((A[he] = K), (A[w] = Z), (he = w))
                  : ((A[he] = q), (A[C] = Z), (he = C));
              else if (w < pe && 0 > y(K, Z))
                ((A[he] = K), (A[w] = Z), (he = w));
              else break e;
            }
          }
          return H;
        }
        function y(A, H) {
          var Z = A.sortIndex - H.sortIndex;
          return Z !== 0 ? Z : A.id - H.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var j = performance;
          s.unstable_now = function () {
            return j.now();
          };
        } else {
          var z = Date,
            O = z.now();
          s.unstable_now = function () {
            return z.now() - O;
          };
        }
        var N = [],
          p = [],
          D = 1,
          U = null,
          X = 3,
          ue = !1,
          te = !1,
          W = !1,
          L = !1,
          ce = typeof setTimeout == 'function' ? setTimeout : null,
          be = typeof clearTimeout == 'function' ? clearTimeout : null,
          le = typeof setImmediate < 'u' ? setImmediate : null;
        function Ee(A) {
          for (var H = d(p); H !== null; ) {
            if (H.callback === null) r(p);
            else if (H.startTime <= A)
              (r(p), (H.sortIndex = H.expirationTime), o(N, H));
            else break;
            H = d(p);
          }
        }
        function we(A) {
          if (((W = !1), Ee(A), !te))
            if (d(N) !== null) ((te = !0), Je || ((Je = !0), We()));
            else {
              var H = d(p);
              H !== null && Et(we, H.startTime - A);
            }
        }
        var Je = !1,
          ae = -1,
          ke = 5,
          Tt = -1;
        function Fl() {
          return L ? !0 : !(s.unstable_now() - Tt < ke);
        }
        function _t() {
          if (((L = !1), Je)) {
            var A = s.unstable_now();
            Tt = A;
            var H = !0;
            try {
              e: {
                ((te = !1), W && ((W = !1), be(ae), (ae = -1)), (ue = !0));
                var Z = X;
                try {
                  t: {
                    for (
                      Ee(A), U = d(N);
                      U !== null && !(U.expirationTime > A && Fl());
                    ) {
                      var he = U.callback;
                      if (typeof he == 'function') {
                        ((U.callback = null), (X = U.priorityLevel));
                        var pe = he(U.expirationTime <= A);
                        if (((A = s.unstable_now()), typeof pe == 'function')) {
                          ((U.callback = pe), Ee(A), (H = !0));
                          break t;
                        }
                        (U === d(N) && r(N), Ee(A));
                      } else r(N);
                      U = d(N);
                    }
                    if (U !== null) H = !0;
                    else {
                      var v = d(p);
                      (v !== null && Et(we, v.startTime - A), (H = !1));
                    }
                  }
                  break e;
                } finally {
                  ((U = null), (X = Z), (ue = !1));
                }
                H = void 0;
              }
            } finally {
              H ? We() : (Je = !1);
            }
          }
        }
        var We;
        if (typeof le == 'function')
          We = function () {
            le(_t);
          };
        else if (typeof MessageChannel < 'u') {
          var Tl = new MessageChannel(),
            Ht = Tl.port2;
          ((Tl.port1.onmessage = _t),
            (We = function () {
              Ht.postMessage(null);
            }));
        } else
          We = function () {
            ce(_t, 0);
          };
        function Et(A, H) {
          ae = ce(function () {
            A(s.unstable_now());
          }, H);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (s.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (ke = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return X;
          }),
          (s.unstable_next = function (A) {
            switch (X) {
              case 1:
              case 2:
              case 3:
                var H = 3;
                break;
              default:
                H = X;
            }
            var Z = X;
            X = H;
            try {
              return A();
            } finally {
              X = Z;
            }
          }),
          (s.unstable_requestPaint = function () {
            L = !0;
          }),
          (s.unstable_runWithPriority = function (A, H) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var Z = X;
            X = A;
            try {
              return H();
            } finally {
              X = Z;
            }
          }),
          (s.unstable_scheduleCallback = function (A, H, Z) {
            var he = s.unstable_now();
            switch (
              (typeof Z == 'object' && Z !== null
                ? ((Z = Z.delay),
                  (Z = typeof Z == 'number' && 0 < Z ? he + Z : he))
                : (Z = he),
              A)
            ) {
              case 1:
                var pe = -1;
                break;
              case 2:
                pe = 250;
                break;
              case 5:
                pe = 1073741823;
                break;
              case 4:
                pe = 1e4;
                break;
              default:
                pe = 5e3;
            }
            return (
              (pe = Z + pe),
              (A = {
                id: D++,
                callback: H,
                priorityLevel: A,
                startTime: Z,
                expirationTime: pe,
                sortIndex: -1,
              }),
              Z > he
                ? ((A.sortIndex = Z),
                  o(p, A),
                  d(N) === null &&
                    A === d(p) &&
                    (W ? (be(ae), (ae = -1)) : (W = !0), Et(we, Z - he)))
                : ((A.sortIndex = pe),
                  o(N, A),
                  te || ue || ((te = !0), Je || ((Je = !0), We()))),
              A
            );
          }),
          (s.unstable_shouldYield = Fl),
          (s.unstable_wrapCallback = function (A) {
            var H = X;
            return function () {
              var Z = X;
              X = H;
              try {
                return A.apply(this, arguments);
              } finally {
                X = Z;
              }
            };
          }));
      })(Es)),
    Es
  );
}
var Zd;
function a1() {
  return (Zd || ((Zd = 1), (Ns.exports = l1())), Ns.exports);
}
var zs = { exports: {} },
  Ze = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd;
function n1() {
  if (Vd) return Ze;
  Vd = 1;
  var s = Os();
  function o(N) {
    var p = 'https://react.dev/errors/' + N;
    if (1 < arguments.length) {
      p += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        p += '&args[]=' + encodeURIComponent(arguments[D]);
    }
    return (
      'Minified React error #' +
      N +
      '; visit ' +
      p +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function d() {}
  var r = {
      d: {
        f: d,
        r: function () {
          throw Error(o(522));
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d,
      },
      p: 0,
      findDOMNode: null,
    },
    y = Symbol.for('react.portal');
  function j(N, p, D) {
    var U =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: y,
      key: U == null ? null : '' + U,
      children: N,
      containerInfo: p,
      implementation: D,
    };
  }
  var z = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(N, p) {
    if (N === 'font') return '';
    if (typeof p == 'string') return p === 'use-credentials' ? p : '';
  }
  return (
    (Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Ze.createPortal = function (N, p) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(o(299));
      return j(N, p, null, D);
    }),
    (Ze.flushSync = function (N) {
      var p = z.T,
        D = r.p;
      try {
        if (((z.T = null), (r.p = 2), N)) return N();
      } finally {
        ((z.T = p), (r.p = D), r.d.f());
      }
    }),
    (Ze.preconnect = function (N, p) {
      typeof N == 'string' &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == 'string'
                ? p === 'use-credentials'
                  ? p
                  : ''
                : void 0))
          : (p = null),
        r.d.C(N, p));
    }),
    (Ze.prefetchDNS = function (N) {
      typeof N == 'string' && r.d.D(N);
    }),
    (Ze.preinit = function (N, p) {
      if (typeof N == 'string' && p && typeof p.as == 'string') {
        var D = p.as,
          U = O(D, p.crossOrigin),
          X = typeof p.integrity == 'string' ? p.integrity : void 0,
          ue = typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0;
        D === 'style'
          ? r.d.S(N, typeof p.precedence == 'string' ? p.precedence : void 0, {
              crossOrigin: U,
              integrity: X,
              fetchPriority: ue,
            })
          : D === 'script' &&
            r.d.X(N, {
              crossOrigin: U,
              integrity: X,
              fetchPriority: ue,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
      }
    }),
    (Ze.preinitModule = function (N, p) {
      if (typeof N == 'string')
        if (typeof p == 'object' && p !== null) {
          if (p.as == null || p.as === 'script') {
            var D = O(p.as, p.crossOrigin);
            r.d.M(N, {
              crossOrigin: D,
              integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
              nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
            });
          }
        } else p == null && r.d.M(N);
    }),
    (Ze.preload = function (N, p) {
      if (
        typeof N == 'string' &&
        typeof p == 'object' &&
        p !== null &&
        typeof p.as == 'string'
      ) {
        var D = p.as,
          U = O(D, p.crossOrigin);
        r.d.L(N, D, {
          crossOrigin: U,
          integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          nonce: typeof p.nonce == 'string' ? p.nonce : void 0,
          type: typeof p.type == 'string' ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == 'string' ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == 'string' ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == 'string' ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == 'string' ? p.imageSizes : void 0,
          media: typeof p.media == 'string' ? p.media : void 0,
        });
      }
    }),
    (Ze.preloadModule = function (N, p) {
      if (typeof N == 'string')
        if (p) {
          var D = O(p.as, p.crossOrigin);
          r.d.m(N, {
            as: typeof p.as == 'string' && p.as !== 'script' ? p.as : void 0,
            crossOrigin: D,
            integrity: typeof p.integrity == 'string' ? p.integrity : void 0,
          });
        } else r.d.m(N);
    }),
    (Ze.requestFormReset = function (N) {
      r.d.r(N);
    }),
    (Ze.unstable_batchedUpdates = function (N, p) {
      return N(p);
    }),
    (Ze.useFormState = function (N, p, D) {
      return z.H.useFormState(N, p, D);
    }),
    (Ze.useFormStatus = function () {
      return z.H.useHostTransitionStatus();
    }),
    (Ze.version = '19.2.3'),
    Ze
  );
}
var Kd;
function fm() {
  if (Kd) return zs.exports;
  Kd = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return (s(), (zs.exports = n1()), zs.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd;
function i1() {
  if (Jd) return Cn;
  Jd = 1;
  var s = a1(),
    o = Os(),
    d = fm();
  function r(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function y(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function j(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function z(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function O(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function N(e) {
    if (j(e) !== e) throw Error(r(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = j(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return (N(n), e);
          if (i === a) return (N(n), t);
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== a.return) ((l = n), (a = i));
      else {
        for (var u = !1, f = n.child; f; ) {
          if (f === l) {
            ((u = !0), (l = n), (a = i));
            break;
          }
          if (f === a) {
            ((u = !0), (a = n), (l = i));
            break;
          }
          f = f.sibling;
        }
        if (!u) {
          for (f = i.child; f; ) {
            if (f === l) {
              ((u = !0), (l = i), (a = n));
              break;
            }
            if (f === a) {
              ((u = !0), (a = i), (l = n));
              break;
            }
            f = f.sibling;
          }
          if (!u) throw Error(r(189));
        }
      }
      if (l.alternate !== a) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = D(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var U = Object.assign,
    X = Symbol.for('react.element'),
    ue = Symbol.for('react.transitional.element'),
    te = Symbol.for('react.portal'),
    W = Symbol.for('react.fragment'),
    L = Symbol.for('react.strict_mode'),
    ce = Symbol.for('react.profiler'),
    be = Symbol.for('react.consumer'),
    le = Symbol.for('react.context'),
    Ee = Symbol.for('react.forward_ref'),
    we = Symbol.for('react.suspense'),
    Je = Symbol.for('react.suspense_list'),
    ae = Symbol.for('react.memo'),
    ke = Symbol.for('react.lazy'),
    Tt = Symbol.for('react.activity'),
    Fl = Symbol.for('react.memo_cache_sentinel'),
    _t = Symbol.iterator;
  function We(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (_t && e[_t]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var Tl = Symbol.for('react.client.reference');
  function Ht(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === Tl ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case W:
        return 'Fragment';
      case ce:
        return 'Profiler';
      case L:
        return 'StrictMode';
      case we:
        return 'Suspense';
      case Je:
        return 'SuspenseList';
      case Tt:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case te:
          return 'Portal';
        case le:
          return e.displayName || 'Context';
        case be:
          return (e._context.displayName || 'Context') + '.Consumer';
        case Ee:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ae:
          return (
            (t = e.displayName || null),
            t !== null ? t : Ht(e.type) || 'Memo'
          );
        case ke:
          ((t = e._payload), (e = e._init));
          try {
            return Ht(e(t));
          } catch {}
      }
    return null;
  }
  var Et = Array.isArray,
    A = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    H = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Z = { pending: !1, data: null, method: null, action: null },
    he = [],
    pe = -1;
  function v(e) {
    return { current: e };
  }
  function C(e) {
    0 > pe || ((e.current = he[pe]), (he[pe] = null), pe--);
  }
  function q(e, t) {
    (pe++, (he[pe] = e.current), (e.current = t));
  }
  var w = v(null),
    K = v(null),
    $ = v(null),
    oe = v(null);
  function Ve(e, t) {
    switch ((q($, t), q(K, e), q(w, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? sd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = sd(t)), (e = fd(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (C(w), q(w, e));
  }
  function Ae() {
    (C(w), C(K), C($));
  }
  function qa(e) {
    e.memoizedState !== null && q(oe, e);
    var t = w.current,
      l = fd(t, e.type);
    t !== l && (q(K, e), q(w, l));
  }
  function qn(e) {
    (K.current === e && (C(w), C(K)),
      oe.current === e && (C(oe), (Mn._currentValue = Z)));
  }
  var lu, qs;
  function _l(e) {
    if (lu === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((lu = (t && t[1]) || ''),
          (qs =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      lu +
      e +
      qs
    );
  }
  var au = !1;
  function nu(e, t) {
    if (!e || au) return '';
    au = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var _ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(_.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(_, []);
                } catch (E) {
                  var S = E;
                }
                Reflect.construct(e, [], _);
              } else {
                try {
                  _.call();
                } catch (E) {
                  S = E;
                }
                e.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                S = E;
              }
              (_ = e()) &&
                typeof _.catch == 'function' &&
                _.catch(function () {});
            }
          } catch (E) {
            if (E && S && typeof E.stack == 'string') return [E.stack, S.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        'name'
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var i = a.DetermineComponentFrameRoot(),
        u = i[0],
        f = i[1];
      if (u && f) {
        var m = u.split(`
`),
          b = f.split(`
`);
        for (
          n = a = 0;
          a < m.length && !m[a].includes('DetermineComponentFrameRoot');
        )
          a++;
        for (; n < b.length && !b[n].includes('DetermineComponentFrameRoot'); )
          n++;
        if (a === m.length || n === b.length)
          for (
            a = m.length - 1, n = b.length - 1;
            1 <= a && 0 <= n && m[a] !== b[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== b[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || m[a] !== b[n])) {
                  var M =
                    `
` + m[a].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      M.includes('<anonymous>') &&
                      (M = M.replace('<anonymous>', e.displayName)),
                    M
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((au = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : '') ? _l(l) : '';
  }
  function Tm(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return _l(e.type);
      case 16:
        return _l('Lazy');
      case 13:
        return e.child !== t && t !== null
          ? _l('Suspense Fallback')
          : _l('Suspense');
      case 19:
        return _l('SuspenseList');
      case 0:
      case 15:
        return nu(e.type, !1);
      case 11:
        return nu(e.type.render, !1);
      case 1:
        return nu(e.type, !0);
      case 31:
        return _l('Activity');
      default:
        return '';
    }
  }
  function Bs(e) {
    try {
      var t = '',
        l = null;
      do ((t += Tm(e, l)), (l = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var iu = Object.prototype.hasOwnProperty,
    uu = s.unstable_scheduleCallback,
    cu = s.unstable_cancelCallback,
    _m = s.unstable_shouldYield,
    Om = s.unstable_requestPaint,
    nt = s.unstable_now,
    Cm = s.unstable_getCurrentPriorityLevel,
    ws = s.unstable_ImmediatePriority,
    Gs = s.unstable_UserBlockingPriority,
    Bn = s.unstable_NormalPriority,
    Um = s.unstable_LowPriority,
    Ys = s.unstable_IdlePriority,
    Dm = s.log,
    Rm = s.unstable_setDisableYieldValue,
    Ba = null,
    it = null;
  function el(e) {
    if (
      (typeof Dm == 'function' && Rm(e),
      it && typeof it.setStrictMode == 'function')
    )
      try {
        it.setStrictMode(Ba, e);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Bm,
    Hm = Math.log,
    qm = Math.LN2;
  function Bm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Hm(e) / qm) | 0)) | 0);
  }
  var wn = 256,
    Gn = 262144,
    Yn = 4194304;
  function Ol(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ln(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      u = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~i),
          a !== 0
            ? (n = Ol(a))
            : ((u &= f),
              u !== 0
                ? (n = Ol(u))
                : l || ((l = f & ~e), l !== 0 && (n = Ol(l)))))
        : ((f = a & ~i),
          f !== 0
            ? (n = Ol(f))
            : u !== 0
              ? (n = Ol(u))
              : l || ((l = a & ~e), l !== 0 && (n = Ol(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & i) === 0 &&
            ((i = n & -n),
            (l = t & -t),
            i >= l || (i === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function wa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function wm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ls() {
    var e = Yn;
    return ((Yn <<= 1), (Yn & 62914560) === 0 && (Yn = 4194304), e);
  }
  function su(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ga(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Gm(e, t, l, a, n, i) {
    var u = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var f = e.entanglements,
      m = e.expirationTimes,
      b = e.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var M = 31 - ut(l),
        _ = 1 << M;
      ((f[M] = 0), (m[M] = -1));
      var S = b[M];
      if (S !== null)
        for (b[M] = null, M = 0; M < S.length; M++) {
          var E = S[M];
          E !== null && (E.lane &= -536870913);
        }
      l &= ~_;
    }
    (a !== 0 && Xs(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t)));
  }
  function Xs(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ut(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 261930)));
  }
  function Qs(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ut(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function Zs(e, t) {
    var l = t & -t;
    return (
      (l = (l & 42) !== 0 ? 1 : fu(l)),
      (l & (e.suspendedLanes | t)) !== 0 ? 0 : l
    );
  }
  function fu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function ru(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Vs() {
    var e = H.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ud(e.type));
  }
  function Ks(e, t) {
    var l = H.p;
    try {
      return ((H.p = e), t());
    } finally {
      H.p = l;
    }
  }
  var tl = Math.random().toString(36).slice(2),
    Ge = '__reactFiber$' + tl,
    $e = '__reactProps$' + tl,
    Il = '__reactContainer$' + tl,
    ou = '__reactEvents$' + tl,
    Ym = '__reactListeners$' + tl,
    Lm = '__reactHandles$' + tl,
    Js = '__reactResources$' + tl,
    Ya = '__reactMarker$' + tl;
  function du(e) {
    (delete e[Ge], delete e[$e], delete e[ou], delete e[Ym], delete e[Lm]);
  }
  function Pl(e) {
    var t = e[Ge];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[Il] || l[Ge])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = gd(e); e !== null; ) {
            if ((l = e[Ge])) return l;
            e = gd(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function ea(e) {
    if ((e = e[Ge] || e[Il])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function La(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ta(e) {
    var t = e[Js];
    return (
      t ||
        (t = e[Js] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function qe(e) {
    e[Ya] = !0;
  }
  var ks = new Set(),
    Ws = {};
  function Cl(e, t) {
    (la(e, t), la(e + 'Capture', t));
  }
  function la(e, t) {
    for (Ws[e] = t, e = 0; e < t.length; e++) ks.add(t[e]);
  }
  var Xm = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    $s = {},
    Fs = {};
  function Qm(e) {
    return iu.call(Fs, e)
      ? !0
      : iu.call($s, e)
        ? !1
        : Xm.test(e)
          ? (Fs[e] = !0)
          : (($s[e] = !0), !1);
  }
  function Xn(e, t, l) {
    if (Qm(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var a = t.toLowerCase().slice(0, 5);
            if (a !== 'data-' && a !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + l);
      }
  }
  function Qn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + l);
    }
  }
  function qt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, '' + a);
    }
  }
  function ht(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Is(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function Zm(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var n = a.get,
        i = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (u) {
            ((l = '' + u), i.call(this, u));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (u) {
            l = '' + u;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function mu(e) {
    if (!e._valueTracker) {
      var t = Is(e) ? 'checked' : 'value';
      e._valueTracker = Zm(e, t, '' + e[t]);
    }
  }
  function Ps(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = '';
    return (
      e && (a = Is(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Zn(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vm = /[\n"\\]/g;
  function vt(e) {
    return e.replace(Vm, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function hu(e, t, l, a, n, i, u, f) {
    ((e.name = ''),
      u != null &&
      typeof u != 'function' &&
      typeof u != 'symbol' &&
      typeof u != 'boolean'
        ? (e.type = u)
        : e.removeAttribute('type'),
      t != null
        ? u === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + ht(t))
          : e.value !== '' + ht(t) && (e.value = '' + ht(t))
        : (u !== 'submit' && u !== 'reset') || e.removeAttribute('value'),
      t != null
        ? vu(e, u, ht(t))
        : l != null
          ? vu(e, u, ht(l))
          : a != null && e.removeAttribute('value'),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != 'function' && typeof n != 'symbol'),
      f != null &&
      typeof f != 'function' &&
      typeof f != 'symbol' &&
      typeof f != 'boolean'
        ? (e.name = '' + ht(f))
        : e.removeAttribute('name'));
  }
  function ef(e, t, l, a, n, i, u, f) {
    if (
      (i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== 'submit' && i !== 'reset') || t != null)) {
        mu(e);
        return;
      }
      ((l = l != null ? '' + ht(l) : ''),
        (t = t != null ? '' + ht(t) : l),
        f || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != 'function' && typeof a != 'symbol' && !!a),
      (e.checked = f ? e.checked : !!a),
      (e.defaultChecked = !!a),
      u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (e.name = u),
      mu(e));
  }
  function vu(e, t, l) {
    (t === 'number' && Zn(e.ownerDocument) === e) ||
      e.defaultValue === '' + l ||
      (e.defaultValue = '' + l);
  }
  function aa(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t['$' + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty('$' + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = '' + ht(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function tf(e, t, l) {
    if (
      t != null &&
      ((t = '' + ht(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? '' + ht(l) : '';
  }
  function lf(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(r(92));
        if (Et(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ''), (t = l));
    }
    ((l = ht(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== '' && a !== null && (e.value = a),
      mu(e));
  }
  function na(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Km = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function af(e, t, l) {
    var a = t.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? a
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : a
        ? e.setProperty(t, l)
        : typeof l != 'number' || l === 0 || Km.has(t)
          ? t === 'float'
            ? (e.cssFloat = l)
            : (e[t] = ('' + l).trim())
          : (e[t] = l + 'px');
  }
  function nf(e, t, l) {
    if (t != null && typeof t != 'object') throw Error(r(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf('--') === 0
            ? e.setProperty(a, '')
            : a === 'float'
              ? (e.cssFloat = '')
              : (e[a] = ''));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && af(e, n, a));
    } else for (var i in t) t.hasOwnProperty(i) && af(e, i, t[i]);
  }
  function gu(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Jm = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    km =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vn(e) {
    return km.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Bt() {}
  var yu = null;
  function pu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ia = null,
    ua = null;
  function uf(e) {
    var t = ea(e);
    if (t && (e = t.stateNode)) {
      var l = e[$e] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (hu(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === 'radio' && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + vt('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[$e] || null;
                if (!n) throw Error(r(90));
                hu(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && Ps(a));
          }
          break e;
        case 'textarea':
          tf(e, l.value, l.defaultValue);
          break e;
        case 'select':
          ((t = l.value), t != null && aa(e, !!l.multiple, t, !1));
      }
    }
  }
  var xu = !1;
  function cf(e, t, l) {
    if (xu) return e(t, l);
    xu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((xu = !1),
        (ia !== null || ua !== null) &&
          (Ui(), ia && ((t = ia), (e = ua), (ua = ia = null), uf(t), e)))
      )
        for (t = 0; t < e.length; t++) uf(e[t]);
    }
  }
  function Xa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[$e] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != 'function') throw Error(r(231, t, typeof l));
    return l;
  }
  var wt = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    bu = !1;
  if (wt)
    try {
      var Qa = {};
      (Object.defineProperty(Qa, 'passive', {
        get: function () {
          bu = !0;
        },
      }),
        window.addEventListener('test', Qa, Qa),
        window.removeEventListener('test', Qa, Qa));
    } catch {
      bu = !1;
    }
  var ll = null,
    Su = null,
    Kn = null;
  function sf() {
    if (Kn) return Kn;
    var e,
      t = Su,
      l = t.length,
      a,
      n = 'value' in ll ? ll.value : ll.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var u = l - e;
    for (a = 1; a <= u && t[l - a] === n[i - a]; a++);
    return (Kn = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function Jn(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function kn() {
    return !0;
  }
  function ff() {
    return !1;
  }
  function Fe(e) {
    function t(l, a, n, i, u) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null));
      for (var f in e)
        e.hasOwnProperty(f) && ((l = e[f]), (this[f] = l ? l(i) : i[f]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? kn
          : ff),
        (this.isPropagationStopped = ff),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = kn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = kn));
        },
        persist: function () {},
        isPersistent: kn,
      }),
      t
    );
  }
  var Ul = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wn = Fe(Ul),
    Za = U({}, Ul, { view: 0, detail: 0 }),
    Wm = Fe(Za),
    ju,
    Nu,
    Va,
    $n = U({}, Za, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Va &&
              (Va && e.type === 'mousemove'
                ? ((ju = e.screenX - Va.screenX), (Nu = e.screenY - Va.screenY))
                : (Nu = ju = 0),
              (Va = e)),
            ju);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Nu;
      },
    }),
    rf = Fe($n),
    $m = U({}, $n, { dataTransfer: 0 }),
    Fm = Fe($m),
    Im = U({}, Za, { relatedTarget: 0 }),
    Eu = Fe(Im),
    Pm = U({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e0 = Fe(Pm),
    t0 = U({}, Ul, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    l0 = Fe(t0),
    a0 = U({}, Ul, { data: 0 }),
    of = Fe(a0),
    n0 = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    i0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    u0 = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function c0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = u0[e])
        ? !!t[e]
        : !1;
  }
  function zu() {
    return c0;
  }
  var s0 = U({}, Za, {
      key: function (e) {
        if (e.key) {
          var t = n0[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Jn(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? i0[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zu,
      charCode: function (e) {
        return e.type === 'keypress' ? Jn(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Jn(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    f0 = Fe(s0),
    r0 = U({}, $n, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    df = Fe(r0),
    o0 = U({}, Za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zu,
    }),
    d0 = Fe(o0),
    m0 = U({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    h0 = Fe(m0),
    v0 = U({}, $n, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    g0 = Fe(v0),
    y0 = U({}, Ul, { newState: 0, oldState: 0 }),
    p0 = Fe(y0),
    x0 = [9, 13, 27, 32],
    Mu = wt && 'CompositionEvent' in window,
    Ka = null;
  wt && 'documentMode' in document && (Ka = document.documentMode);
  var b0 = wt && 'TextEvent' in window && !Ka,
    mf = wt && (!Mu || (Ka && 8 < Ka && 11 >= Ka)),
    hf = ' ',
    vf = !1;
  function gf(e, t) {
    switch (e) {
      case 'keyup':
        return x0.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function yf(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var ca = !1;
  function S0(e, t) {
    switch (e) {
      case 'compositionend':
        return yf(t);
      case 'keypress':
        return t.which !== 32 ? null : ((vf = !0), hf);
      case 'textInput':
        return ((e = t.data), e === hf && vf ? null : e);
      default:
        return null;
    }
  }
  function j0(e, t) {
    if (ca)
      return e === 'compositionend' || (!Mu && gf(e, t))
        ? ((e = sf()), (Kn = Su = ll = null), (ca = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return mf && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var N0 = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function pf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!N0[e.type] : t === 'textarea';
  }
  function xf(e, t, l, a) {
    (ia ? (ua ? ua.push(a) : (ua = [a])) : (ia = a),
      (t = Gi(t, 'onChange')),
      0 < t.length &&
        ((l = new Wn('onChange', 'change', null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var Ja = null,
    ka = null;
  function E0(e) {
    ld(e, 0);
  }
  function Fn(e) {
    var t = La(e);
    if (Ps(t)) return e;
  }
  function bf(e, t) {
    if (e === 'change') return t;
  }
  var Sf = !1;
  if (wt) {
    var Au;
    if (wt) {
      var Tu = 'oninput' in document;
      if (!Tu) {
        var jf = document.createElement('div');
        (jf.setAttribute('oninput', 'return;'),
          (Tu = typeof jf.oninput == 'function'));
      }
      Au = Tu;
    } else Au = !1;
    Sf = Au && (!document.documentMode || 9 < document.documentMode);
  }
  function Nf() {
    Ja && (Ja.detachEvent('onpropertychange', Ef), (ka = Ja = null));
  }
  function Ef(e) {
    if (e.propertyName === 'value' && Fn(ka)) {
      var t = [];
      (xf(t, ka, e, pu(e)), cf(E0, t));
    }
  }
  function z0(e, t, l) {
    e === 'focusin'
      ? (Nf(), (Ja = t), (ka = l), Ja.attachEvent('onpropertychange', Ef))
      : e === 'focusout' && Nf();
  }
  function M0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Fn(ka);
  }
  function A0(e, t) {
    if (e === 'click') return Fn(t);
  }
  function T0(e, t) {
    if (e === 'input' || e === 'change') return Fn(t);
  }
  function _0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ct = typeof Object.is == 'function' ? Object.is : _0;
  function Wa(e, t) {
    if (ct(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!iu.call(t, n) || !ct(e[n], t[n])) return !1;
    }
    return !0;
  }
  function zf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mf(e, t) {
    var l = zf(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = zf(l);
    }
  }
  function Af(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Af(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Tf(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Zn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Zn(e.document);
    }
    return t;
  }
  function _u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var O0 = wt && 'documentMode' in document && 11 >= document.documentMode,
    sa = null,
    Ou = null,
    $a = null,
    Cu = !1;
  function _f(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Cu ||
      sa == null ||
      sa !== Zn(a) ||
      ((a = sa),
      'selectionStart' in a && _u(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      ($a && Wa($a, a)) ||
        (($a = a),
        (a = Gi(Ou, 'onSelect')),
        0 < a.length &&
          ((t = new Wn('onSelect', 'select', null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = sa))));
  }
  function Dl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l['Webkit' + e] = 'webkit' + t),
      (l['Moz' + e] = 'moz' + t),
      l
    );
  }
  var fa = {
      animationend: Dl('Animation', 'AnimationEnd'),
      animationiteration: Dl('Animation', 'AnimationIteration'),
      animationstart: Dl('Animation', 'AnimationStart'),
      transitionrun: Dl('Transition', 'TransitionRun'),
      transitionstart: Dl('Transition', 'TransitionStart'),
      transitioncancel: Dl('Transition', 'TransitionCancel'),
      transitionend: Dl('Transition', 'TransitionEnd'),
    },
    Uu = {},
    Of = {};
  wt &&
    ((Of = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete fa.animationend.animation,
      delete fa.animationiteration.animation,
      delete fa.animationstart.animation),
    'TransitionEvent' in window || delete fa.transitionend.transition);
  function Rl(e) {
    if (Uu[e]) return Uu[e];
    if (!fa[e]) return e;
    var t = fa[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Of) return (Uu[e] = t[l]);
    return e;
  }
  var Cf = Rl('animationend'),
    Uf = Rl('animationiteration'),
    Df = Rl('animationstart'),
    C0 = Rl('transitionrun'),
    U0 = Rl('transitionstart'),
    D0 = Rl('transitioncancel'),
    Rf = Rl('transitionend'),
    Hf = new Map(),
    Du =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Du.push('scrollEnd');
  function zt(e, t) {
    (Hf.set(e, t), Cl(t, [e]));
  }
  var In =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' &&
                  e !== null &&
                  typeof e.message == 'string'
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', e);
              return;
            }
            console.error(e);
          },
    gt = [],
    ra = 0,
    Ru = 0;
  function Pn() {
    for (var e = ra, t = (Ru = ra = 0); t < e; ) {
      var l = gt[t];
      gt[t++] = null;
      var a = gt[t];
      gt[t++] = null;
      var n = gt[t];
      gt[t++] = null;
      var i = gt[t];
      if (((gt[t++] = null), a !== null && n !== null)) {
        var u = a.pending;
        (u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
          (a.pending = n));
      }
      i !== 0 && qf(l, n, i);
    }
  }
  function ei(e, t, l, a) {
    ((gt[ra++] = e),
      (gt[ra++] = t),
      (gt[ra++] = l),
      (gt[ra++] = a),
      (Ru |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function Hu(e, t, l, a) {
    return (ei(e, t, l, a), ti(e));
  }
  function Hl(e, t) {
    return (ei(e, null, null, t), ti(e));
  }
  function qf(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      ((i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return));
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ut(l)),
          (e = i.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function ti(e) {
    if (50 < xn) throw ((xn = 0), (Zc = null), Error(r(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var oa = {};
  function R0(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function st(e, t, l, a) {
    return new R0(e, t, l, a);
  }
  function qu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Gt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = st(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function Bf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function li(e, t, l, a, n, i) {
    var u = 0;
    if (((a = e), typeof e == 'function')) qu(e) && (u = 1);
    else if (typeof e == 'string')
      u = Gh(e, l, w.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case Tt:
          return (
            (e = st(31, l, t, n)),
            (e.elementType = Tt),
            (e.lanes = i),
            e
          );
        case W:
          return ql(l.children, n, i, t);
        case L:
          ((u = 8), (n |= 24));
          break;
        case ce:
          return (
            (e = st(12, l, t, n | 2)),
            (e.elementType = ce),
            (e.lanes = i),
            e
          );
        case we:
          return (
            (e = st(13, l, t, n)),
            (e.elementType = we),
            (e.lanes = i),
            e
          );
        case Je:
          return (
            (e = st(19, l, t, n)),
            (e.elementType = Je),
            (e.lanes = i),
            e
          );
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case le:
                u = 10;
                break e;
              case be:
                u = 9;
                break e;
              case Ee:
                u = 11;
                break e;
              case ae:
                u = 14;
                break e;
              case ke:
                ((u = 16), (a = null));
                break e;
            }
          ((u = 29),
            (l = Error(r(130, e === null ? 'null' : typeof e, ''))),
            (a = null));
      }
    return (
      (t = st(u, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = i),
      t
    );
  }
  function ql(e, t, l, a) {
    return ((e = st(7, e, a, t)), (e.lanes = l), e);
  }
  function Bu(e, t, l) {
    return ((e = st(6, e, null, t)), (e.lanes = l), e);
  }
  function wf(e) {
    var t = st(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function wu(e, t, l) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Gf = new WeakMap();
  function yt(e, t) {
    if (typeof e == 'object' && e !== null) {
      var l = Gf.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Bs(t) }), Gf.set(e, t), t);
    }
    return { value: e, source: t, stack: Bs(t) };
  }
  var da = [],
    ma = 0,
    ai = null,
    Fa = 0,
    pt = [],
    xt = 0,
    al = null,
    Ot = 1,
    Ct = '';
  function Yt(e, t) {
    ((da[ma++] = Fa), (da[ma++] = ai), (ai = e), (Fa = t));
  }
  function Yf(e, t, l) {
    ((pt[xt++] = Ot), (pt[xt++] = Ct), (pt[xt++] = al), (al = e));
    var a = Ot;
    e = Ct;
    var n = 32 - ut(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var i = 32 - ut(t) + n;
    if (30 < i) {
      var u = n - (n % 5);
      ((i = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (n -= u),
        (Ot = (1 << (32 - ut(t) + n)) | (l << n) | a),
        (Ct = i + e));
    } else ((Ot = (1 << i) | (l << n) | a), (Ct = e));
  }
  function Gu(e) {
    e.return !== null && (Yt(e, 1), Yf(e, 1, 0));
  }
  function Yu(e) {
    for (; e === ai; )
      ((ai = da[--ma]), (da[ma] = null), (Fa = da[--ma]), (da[ma] = null));
    for (; e === al; )
      ((al = pt[--xt]),
        (pt[xt] = null),
        (Ct = pt[--xt]),
        (pt[xt] = null),
        (Ot = pt[--xt]),
        (pt[xt] = null));
  }
  function Lf(e, t) {
    ((pt[xt++] = Ot),
      (pt[xt++] = Ct),
      (pt[xt++] = al),
      (Ot = t.id),
      (Ct = t.overflow),
      (al = e));
  }
  var Ye = null,
    Se = null,
    ne = !1,
    nl = null,
    bt = !1,
    Lu = Error(r(519));
  function il(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? 'text'
          : 'HTML',
        ''
      )
    );
    throw (Ia(yt(t, e)), Lu);
  }
  function Xf(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[Ge] = e), (t[$e] = a), l)) {
      case 'dialog':
        (I('cancel', t), I('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        I('load', t);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Sn.length; l++) I(Sn[l], t);
        break;
      case 'source':
        I('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (I('error', t), I('load', t));
        break;
      case 'details':
        I('toggle', t);
        break;
      case 'input':
        (I('invalid', t),
          ef(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ));
        break;
      case 'select':
        I('invalid', t);
        break;
      case 'textarea':
        (I('invalid', t), lf(t, a.value, a.defaultValue, a.children));
    }
    ((l = a.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      t.textContent === '' + l ||
      a.suppressHydrationWarning === !0 ||
      ud(t.textContent, l)
        ? (a.popover != null && (I('beforetoggle', t), I('toggle', t)),
          a.onScroll != null && I('scroll', t),
          a.onScrollEnd != null && I('scrollend', t),
          a.onClick != null && (t.onclick = Bt),
          (t = !0))
        : (t = !1),
      t || il(e, !0));
  }
  function Qf(e) {
    for (Ye = e.return; Ye; )
      switch (Ye.tag) {
        case 5:
        case 31:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          Ye = Ye.return;
      }
  }
  function ha(e) {
    if (e !== Ye) return !1;
    if (!ne) return (Qf(e), (ne = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== 'form' && l !== 'button') || is(e.type, e.memoizedProps))),
        (l = !l)),
      l && Se && il(e),
      Qf(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      Se = vd(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      Se = vd(e);
    } else
      t === 27
        ? ((t = Se), xl(e.type) ? ((e = rs), (rs = null), (Se = e)) : (Se = t))
        : (Se = Ye ? jt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Bl() {
    ((Se = Ye = null), (ne = !1));
  }
  function Xu() {
    var e = nl;
    return (
      e !== null &&
        (tt === null ? (tt = e) : tt.push.apply(tt, e), (nl = null)),
      e
    );
  }
  function Ia(e) {
    nl === null ? (nl = [e]) : nl.push(e);
  }
  var Qu = v(null),
    wl = null,
    Lt = null;
  function ul(e, t, l) {
    (q(Qu, t._currentValue), (t._currentValue = l));
  }
  function Xt(e) {
    ((e._currentValue = Qu.current), C(Qu));
  }
  function Zu(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Vu(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var f = i;
          i = n;
          for (var m = 0; m < t.length; m++)
            if (f.context === t[m]) {
              ((i.lanes |= l),
                (f = i.alternate),
                f !== null && (f.lanes |= l),
                Zu(i.return, l, e),
                a || (u = null));
              break e;
            }
          i = f.next;
        }
      } else if (n.tag === 18) {
        if (((u = n.return), u === null)) throw Error(r(341));
        ((u.lanes |= l),
          (i = u.alternate),
          i !== null && (i.lanes |= l),
          Zu(u, l, e),
          (u = null));
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (((n = u.sibling), n !== null)) {
            ((n.return = u.return), (u = n));
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function va(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(r(387));
        if (((u = u.memoizedProps), u !== null)) {
          var f = n.type;
          ct(n.pendingProps.value, u.value) ||
            (e !== null ? e.push(f) : (e = [f]));
        }
      } else if (n === oe.current) {
        if (((u = n.alternate), u === null)) throw Error(r(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Mn) : (e = [Mn]));
      }
      n = n.return;
    }
    (e !== null && Vu(t, e, l, a), (t.flags |= 262144));
  }
  function ni(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ct(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Gl(e) {
    ((wl = e),
      (Lt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Le(e) {
    return Zf(wl, e);
  }
  function ii(e, t) {
    return (wl === null && Gl(e), Zf(e, t));
  }
  function Zf(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Lt === null)) {
      if (e === null) throw Error(r(308));
      ((Lt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Lt = Lt.next = t;
    return l;
  }
  var H0 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    q0 = s.unstable_scheduleCallback,
    B0 = s.unstable_NormalPriority,
    Oe = {
      $$typeof: le,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ku() {
    return { controller: new H0(), data: new Map(), refCount: 0 };
  }
  function Pa(e) {
    (e.refCount--,
      e.refCount === 0 &&
        q0(B0, function () {
          e.controller.abort();
        }));
  }
  var en = null,
    Ju = 0,
    ga = 0,
    ya = null;
  function w0(e, t) {
    if (en === null) {
      var l = (en = []);
      ((Ju = 0),
        (ga = $c()),
        (ya = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (Ju++, t.then(Vf, Vf), t);
  }
  function Vf() {
    if (--Ju === 0 && en !== null) {
      ya !== null && (ya.status = 'fulfilled');
      var e = en;
      ((en = null), (ga = 0), (ya = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function G0(e, t) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = 'fulfilled'), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = 'rejected', a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Kf = A.S;
  A.S = function (e, t) {
    ((Oo = nt()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        w0(e, t),
      Kf !== null && Kf(e, t));
  };
  var Yl = v(null);
  function ku() {
    var e = Yl.current;
    return e !== null ? e : xe.pooledCache;
  }
  function ui(e, t) {
    t === null ? q(Yl, Yl.current) : q(Yl, t.pool);
  }
  function Jf() {
    var e = ku();
    return e === null ? null : { parent: Oe._currentValue, pool: e };
  }
  var pa = Error(r(460)),
    Wu = Error(r(474)),
    ci = Error(r(542)),
    si = { then: function () {} };
  function kf(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Wf(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(Bt, Bt), (t = l)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Ff(e), e);
      default:
        if (typeof t.status == 'string') t.then(Bt, Bt);
        else {
          if (((e = xe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'fulfilled'), (n.value = a));
                }
              },
              function (a) {
                if (t.status === 'pending') {
                  var n = t;
                  ((n.status = 'rejected'), (n.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Ff(e), e);
        }
        throw ((Xl = t), pa);
    }
  }
  function Ll(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == 'object' && typeof l.then == 'function'
        ? ((Xl = l), pa)
        : l;
    }
  }
  var Xl = null;
  function $f() {
    if (Xl === null) throw Error(r(459));
    var e = Xl;
    return ((Xl = null), e);
  }
  function Ff(e) {
    if (e === pa || e === ci) throw Error(r(483));
  }
  var xa = null,
    tn = 0;
  function fi(e) {
    var t = tn;
    return ((tn += 1), xa === null && (xa = []), Wf(xa, e, t));
  }
  function ln(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function ri(e, t) {
    throw t.$$typeof === X
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ));
  }
  function If(e) {
    function t(g, h) {
      if (e) {
        var x = g.deletions;
        x === null ? ((g.deletions = [h]), (g.flags |= 16)) : x.push(h);
      }
    }
    function l(g, h) {
      if (!e) return null;
      for (; h !== null; ) (t(g, h), (h = h.sibling));
      return null;
    }
    function a(g) {
      for (var h = new Map(); g !== null; )
        (g.key !== null ? h.set(g.key, g) : h.set(g.index, g), (g = g.sibling));
      return h;
    }
    function n(g, h) {
      return ((g = Gt(g, h)), (g.index = 0), (g.sibling = null), g);
    }
    function i(g, h, x) {
      return (
        (g.index = x),
        e
          ? ((x = g.alternate),
            x !== null
              ? ((x = x.index), x < h ? ((g.flags |= 67108866), h) : x)
              : ((g.flags |= 67108866), h))
          : ((g.flags |= 1048576), h)
      );
    }
    function u(g) {
      return (e && g.alternate === null && (g.flags |= 67108866), g);
    }
    function f(g, h, x, T) {
      return h === null || h.tag !== 6
        ? ((h = Bu(x, g.mode, T)), (h.return = g), h)
        : ((h = n(h, x)), (h.return = g), h);
    }
    function m(g, h, x, T) {
      var Y = x.type;
      return Y === W
        ? M(g, h, x.props.children, T, x.key)
        : h !== null &&
            (h.elementType === Y ||
              (typeof Y == 'object' &&
                Y !== null &&
                Y.$$typeof === ke &&
                Ll(Y) === h.type))
          ? ((h = n(h, x.props)), ln(h, x), (h.return = g), h)
          : ((h = li(x.type, x.key, x.props, null, g.mode, T)),
            ln(h, x),
            (h.return = g),
            h);
    }
    function b(g, h, x, T) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== x.containerInfo ||
        h.stateNode.implementation !== x.implementation
        ? ((h = wu(x, g.mode, T)), (h.return = g), h)
        : ((h = n(h, x.children || [])), (h.return = g), h);
    }
    function M(g, h, x, T, Y) {
      return h === null || h.tag !== 7
        ? ((h = ql(x, g.mode, T, Y)), (h.return = g), h)
        : ((h = n(h, x)), (h.return = g), h);
    }
    function _(g, h, x) {
      if (
        (typeof h == 'string' && h !== '') ||
        typeof h == 'number' ||
        typeof h == 'bigint'
      )
        return ((h = Bu('' + h, g.mode, x)), (h.return = g), h);
      if (typeof h == 'object' && h !== null) {
        switch (h.$$typeof) {
          case ue:
            return (
              (x = li(h.type, h.key, h.props, null, g.mode, x)),
              ln(x, h),
              (x.return = g),
              x
            );
          case te:
            return ((h = wu(h, g.mode, x)), (h.return = g), h);
          case ke:
            return ((h = Ll(h)), _(g, h, x));
        }
        if (Et(h) || We(h))
          return ((h = ql(h, g.mode, x, null)), (h.return = g), h);
        if (typeof h.then == 'function') return _(g, fi(h), x);
        if (h.$$typeof === le) return _(g, ii(g, h), x);
        ri(g, h);
      }
      return null;
    }
    function S(g, h, x, T) {
      var Y = h !== null ? h.key : null;
      if (
        (typeof x == 'string' && x !== '') ||
        typeof x == 'number' ||
        typeof x == 'bigint'
      )
        return Y !== null ? null : f(g, h, '' + x, T);
      if (typeof x == 'object' && x !== null) {
        switch (x.$$typeof) {
          case ue:
            return x.key === Y ? m(g, h, x, T) : null;
          case te:
            return x.key === Y ? b(g, h, x, T) : null;
          case ke:
            return ((x = Ll(x)), S(g, h, x, T));
        }
        if (Et(x) || We(x)) return Y !== null ? null : M(g, h, x, T, null);
        if (typeof x.then == 'function') return S(g, h, fi(x), T);
        if (x.$$typeof === le) return S(g, h, ii(g, x), T);
        ri(g, x);
      }
      return null;
    }
    function E(g, h, x, T, Y) {
      if (
        (typeof T == 'string' && T !== '') ||
        typeof T == 'number' ||
        typeof T == 'bigint'
      )
        return ((g = g.get(x) || null), f(h, g, '' + T, Y));
      if (typeof T == 'object' && T !== null) {
        switch (T.$$typeof) {
          case ue:
            return (
              (g = g.get(T.key === null ? x : T.key) || null),
              m(h, g, T, Y)
            );
          case te:
            return (
              (g = g.get(T.key === null ? x : T.key) || null),
              b(h, g, T, Y)
            );
          case ke:
            return ((T = Ll(T)), E(g, h, x, T, Y));
        }
        if (Et(T) || We(T))
          return ((g = g.get(x) || null), M(h, g, T, Y, null));
        if (typeof T.then == 'function') return E(g, h, x, fi(T), Y);
        if (T.$$typeof === le) return E(g, h, x, ii(h, T), Y);
        ri(h, T);
      }
      return null;
    }
    function B(g, h, x, T) {
      for (
        var Y = null, se = null, G = h, k = (h = 0), ee = null;
        G !== null && k < x.length;
        k++
      ) {
        G.index > k ? ((ee = G), (G = null)) : (ee = G.sibling);
        var fe = S(g, G, x[k], T);
        if (fe === null) {
          G === null && (G = ee);
          break;
        }
        (e && G && fe.alternate === null && t(g, G),
          (h = i(fe, h, k)),
          se === null ? (Y = fe) : (se.sibling = fe),
          (se = fe),
          (G = ee));
      }
      if (k === x.length) return (l(g, G), ne && Yt(g, k), Y);
      if (G === null) {
        for (; k < x.length; k++)
          ((G = _(g, x[k], T)),
            G !== null &&
              ((h = i(G, h, k)),
              se === null ? (Y = G) : (se.sibling = G),
              (se = G)));
        return (ne && Yt(g, k), Y);
      }
      for (G = a(G); k < x.length; k++)
        ((ee = E(G, g, k, x[k], T)),
          ee !== null &&
            (e &&
              ee.alternate !== null &&
              G.delete(ee.key === null ? k : ee.key),
            (h = i(ee, h, k)),
            se === null ? (Y = ee) : (se.sibling = ee),
            (se = ee)));
      return (
        e &&
          G.forEach(function (El) {
            return t(g, El);
          }),
        ne && Yt(g, k),
        Y
      );
    }
    function Q(g, h, x, T) {
      if (x == null) throw Error(r(151));
      for (
        var Y = null, se = null, G = h, k = (h = 0), ee = null, fe = x.next();
        G !== null && !fe.done;
        k++, fe = x.next()
      ) {
        G.index > k ? ((ee = G), (G = null)) : (ee = G.sibling);
        var El = S(g, G, fe.value, T);
        if (El === null) {
          G === null && (G = ee);
          break;
        }
        (e && G && El.alternate === null && t(g, G),
          (h = i(El, h, k)),
          se === null ? (Y = El) : (se.sibling = El),
          (se = El),
          (G = ee));
      }
      if (fe.done) return (l(g, G), ne && Yt(g, k), Y);
      if (G === null) {
        for (; !fe.done; k++, fe = x.next())
          ((fe = _(g, fe.value, T)),
            fe !== null &&
              ((h = i(fe, h, k)),
              se === null ? (Y = fe) : (se.sibling = fe),
              (se = fe)));
        return (ne && Yt(g, k), Y);
      }
      for (G = a(G); !fe.done; k++, fe = x.next())
        ((fe = E(G, g, k, fe.value, T)),
          fe !== null &&
            (e &&
              fe.alternate !== null &&
              G.delete(fe.key === null ? k : fe.key),
            (h = i(fe, h, k)),
            se === null ? (Y = fe) : (se.sibling = fe),
            (se = fe)));
      return (
        e &&
          G.forEach(function ($h) {
            return t(g, $h);
          }),
        ne && Yt(g, k),
        Y
      );
    }
    function ye(g, h, x, T) {
      if (
        (typeof x == 'object' &&
          x !== null &&
          x.type === W &&
          x.key === null &&
          (x = x.props.children),
        typeof x == 'object' && x !== null)
      ) {
        switch (x.$$typeof) {
          case ue:
            e: {
              for (var Y = x.key; h !== null; ) {
                if (h.key === Y) {
                  if (((Y = x.type), Y === W)) {
                    if (h.tag === 7) {
                      (l(g, h.sibling),
                        (T = n(h, x.props.children)),
                        (T.return = g),
                        (g = T));
                      break e;
                    }
                  } else if (
                    h.elementType === Y ||
                    (typeof Y == 'object' &&
                      Y !== null &&
                      Y.$$typeof === ke &&
                      Ll(Y) === h.type)
                  ) {
                    (l(g, h.sibling),
                      (T = n(h, x.props)),
                      ln(T, x),
                      (T.return = g),
                      (g = T));
                    break e;
                  }
                  l(g, h);
                  break;
                } else t(g, h);
                h = h.sibling;
              }
              x.type === W
                ? ((T = ql(x.props.children, g.mode, T, x.key)),
                  (T.return = g),
                  (g = T))
                : ((T = li(x.type, x.key, x.props, null, g.mode, T)),
                  ln(T, x),
                  (T.return = g),
                  (g = T));
            }
            return u(g);
          case te:
            e: {
              for (Y = x.key; h !== null; ) {
                if (h.key === Y)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === x.containerInfo &&
                    h.stateNode.implementation === x.implementation
                  ) {
                    (l(g, h.sibling),
                      (T = n(h, x.children || [])),
                      (T.return = g),
                      (g = T));
                    break e;
                  } else {
                    l(g, h);
                    break;
                  }
                else t(g, h);
                h = h.sibling;
              }
              ((T = wu(x, g.mode, T)), (T.return = g), (g = T));
            }
            return u(g);
          case ke:
            return ((x = Ll(x)), ye(g, h, x, T));
        }
        if (Et(x)) return B(g, h, x, T);
        if (We(x)) {
          if (((Y = We(x)), typeof Y != 'function')) throw Error(r(150));
          return ((x = Y.call(x)), Q(g, h, x, T));
        }
        if (typeof x.then == 'function') return ye(g, h, fi(x), T);
        if (x.$$typeof === le) return ye(g, h, ii(g, x), T);
        ri(g, x);
      }
      return (typeof x == 'string' && x !== '') ||
        typeof x == 'number' ||
        typeof x == 'bigint'
        ? ((x = '' + x),
          h !== null && h.tag === 6
            ? (l(g, h.sibling), (T = n(h, x)), (T.return = g), (g = T))
            : (l(g, h), (T = Bu(x, g.mode, T)), (T.return = g), (g = T)),
          u(g))
        : l(g, h);
    }
    return function (g, h, x, T) {
      try {
        tn = 0;
        var Y = ye(g, h, x, T);
        return ((xa = null), Y);
      } catch (G) {
        if (G === pa || G === ci) throw G;
        var se = st(29, G, null, g.mode);
        return ((se.lanes = T), (se.return = g), se);
      } finally {
      }
    };
  }
  var Ql = If(!0),
    Pf = If(!1),
    cl = !1;
  function $u(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Fu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function sl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function fl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (re & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = ti(e)),
        qf(e, null, l),
        t
      );
    }
    return (ei(e, a, t, l), ti(e));
  }
  function an(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Qs(e, l));
    }
  }
  function Iu(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (i === null ? (n = i = u) : (i = i.next = u), (l = l.next));
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var Pu = !1;
  function nn() {
    if (Pu) {
      var e = ya;
      if (e !== null) throw e;
    }
  }
  function un(e, t, l, a) {
    Pu = !1;
    var n = e.updateQueue;
    cl = !1;
    var i = n.firstBaseUpdate,
      u = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var m = f,
        b = m.next;
      ((m.next = null), u === null ? (i = b) : (u.next = b), (u = m));
      var M = e.alternate;
      M !== null &&
        ((M = M.updateQueue),
        (f = M.lastBaseUpdate),
        f !== u &&
          (f === null ? (M.firstBaseUpdate = b) : (f.next = b),
          (M.lastBaseUpdate = m)));
    }
    if (i !== null) {
      var _ = n.baseState;
      ((u = 0), (M = b = m = null), (f = i));
      do {
        var S = f.lane & -536870913,
          E = S !== f.lane;
        if (E ? (P & S) === S : (a & S) === S) {
          (S !== 0 && S === ga && (Pu = !0),
            M !== null &&
              (M = M.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var B = e,
              Q = f;
            S = t;
            var ye = l;
            switch (Q.tag) {
              case 1:
                if (((B = Q.payload), typeof B == 'function')) {
                  _ = B.call(ye, _, S);
                  break e;
                }
                _ = B;
                break e;
              case 3:
                B.flags = (B.flags & -65537) | 128;
              case 0:
                if (
                  ((B = Q.payload),
                  (S = typeof B == 'function' ? B.call(ye, _, S) : B),
                  S == null)
                )
                  break e;
                _ = U({}, _, S);
                break e;
              case 2:
                cl = !0;
            }
          }
          ((S = f.callback),
            S !== null &&
              ((e.flags |= 64),
              E && (e.flags |= 8192),
              (E = n.callbacks),
              E === null ? (n.callbacks = [S]) : E.push(S)));
        } else
          ((E = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            M === null ? ((b = M = E), (m = _)) : (M = M.next = E),
            (u |= S));
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          ((E = f),
            (f = E.next),
            (E.next = null),
            (n.lastBaseUpdate = E),
            (n.shared.pending = null));
        }
      } while (!0);
      (M === null && (m = _),
        (n.baseState = m),
        (n.firstBaseUpdate = b),
        (n.lastBaseUpdate = M),
        i === null && (n.shared.lanes = 0),
        (hl |= u),
        (e.lanes = u),
        (e.memoizedState = _));
    }
  }
  function er(e, t) {
    if (typeof e != 'function') throw Error(r(191, e));
    e.call(t);
  }
  function tr(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) er(l[e], t);
  }
  var ba = v(null),
    oi = v(0);
  function lr(e, t) {
    ((e = Ft), q(oi, e), q(ba, t), (Ft = e | t.baseLanes));
  }
  function ec() {
    (q(oi, Ft), q(ba, ba.current));
  }
  function tc() {
    ((Ft = oi.current), C(ba), C(oi));
  }
  var ft = v(null),
    St = null;
  function rl(e) {
    var t = e.alternate;
    (q(Te, Te.current & 1),
      q(ft, e),
      St === null &&
        (t === null || ba.current !== null || t.memoizedState !== null) &&
        (St = e));
  }
  function lc(e) {
    (q(Te, Te.current), q(ft, e), St === null && (St = e));
  }
  function ar(e) {
    e.tag === 22
      ? (q(Te, Te.current), q(ft, e), St === null && (St = e))
      : ol();
  }
  function ol() {
    (q(Te, Te.current), q(ft, ft.current));
  }
  function rt(e) {
    (C(ft), St === e && (St = null), C(Te));
  }
  var Te = v(0);
  function di(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || ss(l) || fs(l)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Qt = 0,
    J = null,
    ve = null,
    Ce = null,
    mi = !1,
    Sa = !1,
    Zl = !1,
    hi = 0,
    cn = 0,
    ja = null,
    Y0 = 0;
  function ze() {
    throw Error(r(321));
  }
  function ac(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!ct(e[l], t[l])) return !1;
    return !0;
  }
  function nc(e, t, l, a, n, i) {
    return (
      (Qt = i),
      (J = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (A.H = e === null || e.memoizedState === null ? Yr : xc),
      (Zl = !1),
      (i = l(a, n)),
      (Zl = !1),
      Sa && (i = ir(t, l, a, n)),
      nr(e),
      i
    );
  }
  function nr(e) {
    A.H = rn;
    var t = ve !== null && ve.next !== null;
    if (((Qt = 0), (Ce = ve = J = null), (mi = !1), (cn = 0), (ja = null), t))
      throw Error(r(300));
    e === null ||
      Ue ||
      ((e = e.dependencies), e !== null && ni(e) && (Ue = !0));
  }
  function ir(e, t, l, a) {
    J = e;
    var n = 0;
    do {
      if ((Sa && (ja = null), (cn = 0), (Sa = !1), 25 <= n))
        throw Error(r(301));
      if (((n += 1), (Ce = ve = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((A.H = Lr), (i = t(l, a)));
    } while (Sa);
    return i;
  }
  function L0() {
    var e = A.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? sn(t) : t),
      (e = e.useState()[0]),
      (ve !== null ? ve.memoizedState : null) !== e && (J.flags |= 1024),
      t
    );
  }
  function ic() {
    var e = hi !== 0;
    return ((hi = 0), e);
  }
  function uc(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function cc(e) {
    if (mi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      mi = !1;
    }
    ((Qt = 0), (Ce = ve = J = null), (Sa = !1), (cn = hi = 0), (ja = null));
  }
  function Ke() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ce === null ? (J.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce);
  }
  function _e() {
    if (ve === null) {
      var e = J.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ve.next;
    var t = Ce === null ? J.memoizedState : Ce.next;
    if (t !== null) ((Ce = t), (ve = e));
    else {
      if (e === null)
        throw J.alternate === null ? Error(r(467)) : Error(r(310));
      ((ve = e),
        (e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null,
        }),
        Ce === null ? (J.memoizedState = Ce = e) : (Ce = Ce.next = e));
    }
    return Ce;
  }
  function vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sn(e) {
    var t = cn;
    return (
      (cn += 1),
      ja === null && (ja = []),
      (e = Wf(ja, e, t)),
      (t = J),
      (Ce === null ? t.memoizedState : Ce.next) === null &&
        ((t = t.alternate),
        (A.H = t === null || t.memoizedState === null ? Yr : xc)),
      e
    );
  }
  function gi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return sn(e);
      if (e.$$typeof === le) return Le(e);
    }
    throw Error(r(438, String(e)));
  }
  function sc(e) {
    var t = null,
      l = J.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = J.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = vi()), (J.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Fl;
    return (t.index++, l);
  }
  function Zt(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function yi(e) {
    var t = _e();
    return fc(t, ve, e);
  }
  function fc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        ((n.next = i.next), (i.next = u));
      }
      ((t.baseQueue = n = i), (a.pending = null));
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var f = (u = null),
        m = null,
        b = t,
        M = !1;
      do {
        var _ = b.lane & -536870913;
        if (_ !== b.lane ? (P & _) === _ : (Qt & _) === _) {
          var S = b.revertLane;
          if (S === 0)
            (m !== null &&
              (m = m.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null,
                }),
              _ === ga && (M = !0));
          else if ((Qt & S) === S) {
            ((b = b.next), S === ga && (M = !0));
            continue;
          } else
            ((_ = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null,
            }),
              m === null ? ((f = m = _), (u = i)) : (m = m.next = _),
              (J.lanes |= S),
              (hl |= S));
          ((_ = b.action),
            Zl && l(i, _),
            (i = b.hasEagerState ? b.eagerState : l(i, _)));
        } else
          ((S = {
            lane: _,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          }),
            m === null ? ((f = m = S), (u = i)) : (m = m.next = S),
            (J.lanes |= _),
            (hl |= _));
        b = b.next;
      } while (b !== null && b !== t);
      if (
        (m === null ? (u = i) : (m.next = f),
        !ct(i, e.memoizedState) && ((Ue = !0), M && ((l = ya), l !== null)))
      )
        throw l;
      ((e.memoizedState = i),
        (e.baseState = u),
        (e.baseQueue = m),
        (a.lastRenderedState = i));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function rc(e) {
    var t = _e(),
      l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = (n = n.next);
      do ((i = e(i, u.action)), (u = u.next));
      while (u !== n);
      (ct(i, t.memoizedState) || (Ue = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, a];
  }
  function ur(e, t, l) {
    var a = J,
      n = _e(),
      i = ne;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var u = !ct((ve || n).memoizedState, l);
    if (
      (u && ((n.memoizedState = l), (Ue = !0)),
      (n = n.queue),
      mc(fr.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || u || (Ce !== null && Ce.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Na(9, { destroy: void 0 }, sr.bind(null, a, n, l, t), null),
        xe === null)
      )
        throw Error(r(349));
      i || (Qt & 127) !== 0 || cr(a, t, l);
    }
    return l;
  }
  function cr(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = J.updateQueue),
      t === null
        ? ((t = vi()), (J.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function sr(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), rr(t) && or(e));
  }
  function fr(e, t, l) {
    return l(function () {
      rr(t) && or(e);
    });
  }
  function rr(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !ct(e, l);
    } catch {
      return !0;
    }
  }
  function or(e) {
    var t = Hl(e, 2);
    t !== null && lt(t, e, 2);
  }
  function oc(e) {
    var t = Ke();
    if (typeof e == 'function') {
      var l = e;
      if (((e = l()), Zl)) {
        el(!0);
        try {
          l();
        } finally {
          el(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function dr(e, t, l, a) {
    return ((e.baseState = l), fc(e, ve, typeof a == 'function' ? a : Zt));
  }
  function X0(e, t, l, a, n) {
    if (bi(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          i.listeners.push(u);
        },
      };
      (A.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), mr(t, i))
          : ((i.next = l.next), (t.pending = l.next = i)));
    }
  }
  function mr(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = A.T,
        u = {};
      A.T = u;
      try {
        var f = l(n, a),
          m = A.S;
        (m !== null && m(u, f), hr(e, t, f));
      } catch (b) {
        dc(e, t, b);
      } finally {
        (i !== null && u.types !== null && (i.types = u.types), (A.T = i));
      }
    } else
      try {
        ((i = l(n, a)), hr(e, t, i));
      } catch (b) {
        dc(e, t, b);
      }
  }
  function hr(e, t, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            vr(e, t, a);
          },
          function (a) {
            return dc(e, t, a);
          }
        )
      : vr(e, t, l);
  }
  function vr(e, t, l) {
    ((t.status = 'fulfilled'),
      (t.value = l),
      gr(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), mr(e, l))));
  }
  function dc(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = 'rejected'), (t.reason = l), gr(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function gr(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function yr(e, t) {
    return t;
  }
  function pr(e, t) {
    if (ne) {
      var l = xe.formState;
      if (l !== null) {
        e: {
          var a = J;
          if (ne) {
            if (Se) {
              t: {
                for (var n = Se, i = bt; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = jt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((i = n.data), (n = i === 'F!' || i === 'F' ? n : null));
              }
              if (n) {
                ((Se = jt(n.nextSibling)), (a = n.data === 'F!'));
                break e;
              }
            }
            il(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = Ke()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yr,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Br.bind(null, J, a)),
      (a.dispatch = l),
      (a = oc(!1)),
      (i = pc.bind(null, J, !1, a.queue)),
      (a = Ke()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = X0.bind(null, J, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function xr(e) {
    var t = _e();
    return br(t, ve, e);
  }
  function br(e, t, l) {
    if (
      ((t = fc(e, t, yr)[0]),
      (e = yi(Zt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var a = sn(t);
      } catch (u) {
        throw u === pa ? ci : u;
      }
    else a = t;
    t = _e();
    var n = t.queue,
      i = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((J.flags |= 2048),
        Na(9, { destroy: void 0 }, Q0.bind(null, n, l), null)),
      [a, i, e]
    );
  }
  function Q0(e, t) {
    e.action = t;
  }
  function Sr(e) {
    var t = _e(),
      l = ve;
    if (l !== null) return br(t, l, e);
    (_e(), (t = t.memoizedState), (l = _e()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function Na(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = J.updateQueue),
      t === null && ((t = vi()), (J.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function jr() {
    return _e().memoizedState;
  }
  function pi(e, t, l, a) {
    var n = Ke();
    ((J.flags |= e),
      (n.memoizedState = Na(
        1 | t,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      )));
  }
  function xi(e, t, l, a) {
    var n = _e();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    ve !== null && a !== null && ac(a, ve.memoizedState.deps)
      ? (n.memoizedState = Na(t, i, l, a))
      : ((J.flags |= e), (n.memoizedState = Na(1 | t, i, l, a)));
  }
  function Nr(e, t) {
    pi(8390656, 8, e, t);
  }
  function mc(e, t) {
    xi(2048, 8, e, t);
  }
  function Z0(e) {
    J.flags |= 4;
    var t = J.updateQueue;
    if (t === null) ((t = vi()), (J.updateQueue = t), (t.events = [e]));
    else {
      var l = t.events;
      l === null ? (t.events = [e]) : l.push(e);
    }
  }
  function Er(e) {
    var t = _e().memoizedState;
    return (
      Z0({ ref: t, nextImpl: e }),
      function () {
        if ((re & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function zr(e, t) {
    return xi(4, 2, e, t);
  }
  function Mr(e, t) {
    return xi(4, 4, e, t);
  }
  function Ar(e, t) {
    if (typeof t == 'function') {
      e = e();
      var l = t(e);
      return function () {
        typeof l == 'function' ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Tr(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), xi(4, 4, Ar.bind(null, t, e), l));
  }
  function hc() {}
  function _r(e, t) {
    var l = _e();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && ac(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Or(e, t) {
    var l = _e();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && ac(t, a[1])) return a[0];
    if (((a = e()), Zl)) {
      el(!0);
      try {
        e();
      } finally {
        el(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function vc(e, t, l) {
    return l === void 0 || ((Qt & 1073741824) !== 0 && (P & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Uo()), (J.lanes |= e), (hl |= e), l);
  }
  function Cr(e, t, l, a) {
    return ct(l, t)
      ? l
      : ba.current !== null
        ? ((e = vc(e, l, a)), ct(e, t) || (Ue = !0), e)
        : (Qt & 42) === 0 || ((Qt & 1073741824) !== 0 && (P & 261930) === 0)
          ? ((Ue = !0), (e.memoizedState = l))
          : ((e = Uo()), (J.lanes |= e), (hl |= e), t);
  }
  function Ur(e, t, l, a, n) {
    var i = H.p;
    H.p = i !== 0 && 8 > i ? i : 8;
    var u = A.T,
      f = {};
    ((A.T = f), pc(e, !1, t, l));
    try {
      var m = n(),
        b = A.S;
      if (
        (b !== null && b(f, m),
        m !== null && typeof m == 'object' && typeof m.then == 'function')
      ) {
        var M = G0(m, a);
        fn(e, t, M, mt(e));
      } else fn(e, t, a, mt(e));
    } catch (_) {
      fn(e, t, { then: function () {}, status: 'rejected', reason: _ }, mt());
    } finally {
      ((H.p = i),
        u !== null && f.types !== null && (u.types = f.types),
        (A.T = u));
    }
  }
  function V0() {}
  function gc(e, t, l, a) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Dr(e).queue;
    Ur(
      e,
      n,
      t,
      Z,
      l === null
        ? V0
        : function () {
            return (Rr(e), l(a));
          }
    );
  }
  function Dr(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: Z,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Rr(e) {
    var t = Dr(e);
    (t.next === null && (t = e.alternate.memoizedState),
      fn(e, t.next.queue, {}, mt()));
  }
  function yc() {
    return Le(Mn);
  }
  function Hr() {
    return _e().memoizedState;
  }
  function qr() {
    return _e().memoizedState;
  }
  function K0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = mt();
          e = sl(l);
          var a = fl(t, e, l);
          (a !== null && (lt(a, t, l), an(a, t, l)),
            (t = { cache: Ku() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function J0(e, t, l) {
    var a = mt();
    ((l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      bi(e)
        ? wr(t, l)
        : ((l = Hu(e, t, l, a)), l !== null && (lt(l, e, a), Gr(l, t, a))));
  }
  function Br(e, t, l) {
    var a = mt();
    fn(e, t, l, a);
  }
  function fn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (bi(e)) wr(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            f = i(u, l);
          if (((n.hasEagerState = !0), (n.eagerState = f), ct(f, u)))
            return (ei(e, t, n, 0), xe === null && Pn(), !1);
        } catch {
        } finally {
        }
      if (((l = Hu(e, t, n, a)), l !== null))
        return (lt(l, e, a), Gr(l, t, a), !0);
    }
    return !1;
  }
  function pc(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: $c(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      bi(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = Hu(e, l, a, 2)), t !== null && lt(t, e, 2));
  }
  function bi(e) {
    var t = e.alternate;
    return e === J || (t !== null && t === J);
  }
  function wr(e, t) {
    Sa = mi = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Gr(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Qs(e, l));
    }
  }
  var rn = {
    readContext: Le,
    use: gi,
    useCallback: ze,
    useContext: ze,
    useEffect: ze,
    useImperativeHandle: ze,
    useLayoutEffect: ze,
    useInsertionEffect: ze,
    useMemo: ze,
    useReducer: ze,
    useRef: ze,
    useState: ze,
    useDebugValue: ze,
    useDeferredValue: ze,
    useTransition: ze,
    useSyncExternalStore: ze,
    useId: ze,
    useHostTransitionStatus: ze,
    useFormState: ze,
    useActionState: ze,
    useOptimistic: ze,
    useMemoCache: ze,
    useCacheRefresh: ze,
  };
  rn.useEffectEvent = ze;
  var Yr = {
      readContext: Le,
      use: gi,
      useCallback: function (e, t) {
        return ((Ke().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Le,
      useEffect: Nr,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          pi(4194308, 4, Ar.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return pi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        pi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = Ke();
        t = t === void 0 ? null : t;
        var a = e();
        if (Zl) {
          el(!0);
          try {
            e();
          } finally {
            el(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = Ke();
        if (l !== void 0) {
          var n = l(t);
          if (Zl) {
            el(!0);
            try {
              l(t);
            } finally {
              el(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = J0.bind(null, J, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ke();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = oc(e);
        var t = e.queue,
          l = Br.bind(null, J, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: hc,
      useDeferredValue: function (e, t) {
        var l = Ke();
        return vc(l, e, t);
      },
      useTransition: function () {
        var e = oc(!1);
        return (
          (e = Ur.bind(null, J, e.queue, !0, !1)),
          (Ke().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = J,
          n = Ke();
        if (ne) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (((l = t()), xe === null)) throw Error(r(349));
          (P & 127) !== 0 || cr(a, t, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (n.queue = i),
          Nr(fr.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          Na(9, { destroy: void 0 }, sr.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = Ke(),
          t = xe.identifierPrefix;
        if (ne) {
          var l = Ct,
            a = Ot;
          ((l = (a & ~(1 << (32 - ut(a) - 1))).toString(32) + l),
            (t = '_' + t + 'R_' + l),
            (l = hi++),
            0 < l && (t += 'H' + l.toString(32)),
            (t += '_'));
        } else ((l = Y0++), (t = '_' + t + 'r_' + l.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: yc,
      useFormState: pr,
      useActionState: pr,
      useOptimistic: function (e) {
        var t = Ke();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = pc.bind(null, J, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: sc,
      useCacheRefresh: function () {
        return (Ke().memoizedState = K0.bind(null, J));
      },
      useEffectEvent: function (e) {
        var t = Ke(),
          l = { impl: e };
        return (
          (t.memoizedState = l),
          function () {
            if ((re & 2) !== 0) throw Error(r(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    xc = {
      readContext: Le,
      use: gi,
      useCallback: _r,
      useContext: Le,
      useEffect: mc,
      useImperativeHandle: Tr,
      useInsertionEffect: zr,
      useLayoutEffect: Mr,
      useMemo: Or,
      useReducer: yi,
      useRef: jr,
      useState: function () {
        return yi(Zt);
      },
      useDebugValue: hc,
      useDeferredValue: function (e, t) {
        var l = _e();
        return Cr(l, ve.memoizedState, e, t);
      },
      useTransition: function () {
        var e = yi(Zt)[0],
          t = _e().memoizedState;
        return [typeof e == 'boolean' ? e : sn(e), t];
      },
      useSyncExternalStore: ur,
      useId: Hr,
      useHostTransitionStatus: yc,
      useFormState: xr,
      useActionState: xr,
      useOptimistic: function (e, t) {
        var l = _e();
        return dr(l, ve, e, t);
      },
      useMemoCache: sc,
      useCacheRefresh: qr,
    };
  xc.useEffectEvent = Er;
  var Lr = {
    readContext: Le,
    use: gi,
    useCallback: _r,
    useContext: Le,
    useEffect: mc,
    useImperativeHandle: Tr,
    useInsertionEffect: zr,
    useLayoutEffect: Mr,
    useMemo: Or,
    useReducer: rc,
    useRef: jr,
    useState: function () {
      return rc(Zt);
    },
    useDebugValue: hc,
    useDeferredValue: function (e, t) {
      var l = _e();
      return ve === null ? vc(l, e, t) : Cr(l, ve.memoizedState, e, t);
    },
    useTransition: function () {
      var e = rc(Zt)[0],
        t = _e().memoizedState;
      return [typeof e == 'boolean' ? e : sn(e), t];
    },
    useSyncExternalStore: ur,
    useId: Hr,
    useHostTransitionStatus: yc,
    useFormState: Sr,
    useActionState: Sr,
    useOptimistic: function (e, t) {
      var l = _e();
      return ve !== null
        ? dr(l, ve, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    },
    useMemoCache: sc,
    useCacheRefresh: qr,
  };
  Lr.useEffectEvent = Er;
  function bc(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : U({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Sc = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = mt(),
        n = sl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = fl(e, n, a)),
        t !== null && (lt(t, e, a), an(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = mt(),
        n = sl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = fl(e, n, a)),
        t !== null && (lt(t, e, a), an(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = mt(),
        a = sl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = fl(e, a, l)),
        t !== null && (lt(t, e, l), an(t, e, l)));
    },
  };
  function Xr(e, t, l, a, n, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(a, i, u)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Wa(l, a) || !Wa(n, i)
          : !0
    );
  }
  function Qr(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Sc.enqueueReplaceState(t, t.state, null));
  }
  function Vl(e, t) {
    var l = t;
    if ('ref' in t) {
      l = {};
      for (var a in t) a !== 'ref' && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = U({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Zr(e) {
    In(e);
  }
  function Vr(e) {
    console.error(e);
  }
  function Kr(e) {
    In(e);
  }
  function Si(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Jr(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function jc(e, t, l) {
    return (
      (l = sl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Si(e, t);
      }),
      l
    );
  }
  function kr(e) {
    return ((e = sl(e)), (e.tag = 3), e);
  }
  function Wr(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == 'function') {
      var i = a.value;
      ((e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          Jr(t, l, a);
        }));
    }
    var u = l.stateNode;
    u !== null &&
      typeof u.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Jr(t, l, a),
          typeof n != 'function' &&
            (vl === null ? (vl = new Set([this])) : vl.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : '',
        });
      });
  }
  function k0(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == 'object' && typeof a.then == 'function')
    ) {
      if (
        ((t = l.alternate),
        t !== null && va(t, l, n, !0),
        (l = ft.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              St === null ? Di() : l.alternate === null && Me === 0 && (Me = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === si
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Jc(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === si
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Jc(e, a, n)),
              !1
            );
        }
        throw Error(r(435, l.tag));
      }
      return (Jc(e, a, n), Di(), !1);
    }
    if (ne)
      return (
        (t = ft.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Lu && ((e = Error(r(422), { cause: a })), Ia(yt(e, l))))
          : (a !== Lu && ((t = Error(r(423), { cause: a })), Ia(yt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = yt(a, l)),
            (n = jc(e.stateNode, a, n)),
            Iu(e, n),
            Me !== 4 && (Me = 2)),
        !1
      );
    var i = Error(r(520), { cause: a });
    if (
      ((i = yt(i, l)),
      pn === null ? (pn = [i]) : pn.push(i),
      Me !== 4 && (Me = 2),
      t === null)
    )
      return !0;
    ((a = yt(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = jc(l.stateNode, a, e)),
            Iu(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (i !== null &&
                  typeof i.componentDidCatch == 'function' &&
                  (vl === null || !vl.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = kr(n)),
              Wr(n, e, l, a),
              Iu(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Nc = Error(r(461)),
    Ue = !1;
  function Xe(e, t, l, a) {
    t.child = e === null ? Pf(t, null, l, a) : Ql(t, e.child, l, a);
  }
  function $r(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ('ref' in a) {
      var u = {};
      for (var f in a) f !== 'ref' && (u[f] = a[f]);
    } else u = a;
    return (
      Gl(t),
      (a = nc(e, t, l, u, i, n)),
      (f = ic()),
      e !== null && !Ue
        ? (uc(e, t, n), Vt(e, t, n))
        : (ne && f && Gu(t), (t.flags |= 1), Xe(e, t, a, n), t.child)
    );
  }
  function Fr(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == 'function' &&
        !qu(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = i), Ir(e, t, i, a, n))
        : ((e = li(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !Cc(e, n))) {
      var u = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Wa), l(u, a) && e.ref === t.ref)
      )
        return Vt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Gt(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ir(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Wa(i, a) && e.ref === t.ref)
        if (((Ue = !1), (t.pendingProps = a = i), Cc(e, n)))
          (e.flags & 131072) !== 0 && (Ue = !0);
        else return ((t.lanes = e.lanes), Vt(e, t, n));
    }
    return Ec(e, t, l, a, n);
  }
  function Pr(e, t, l, a) {
    var n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (a = t.child = e.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~i;
        } else ((a = 0), (t.child = null));
        return eo(e, t, i, l, a);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && ui(t, i !== null ? i.cachePool : null),
          i !== null ? lr(t, i) : ec(),
          ar(t));
      else
        return (
          (a = t.lanes = 536870912),
          eo(e, t, i !== null ? i.baseLanes | l : l, l, a)
        );
    } else
      i !== null
        ? (ui(t, i.cachePool), lr(t, i), ol(), (t.memoizedState = null))
        : (e !== null && ui(t, null), ec(), ol());
    return (Xe(e, t, n, l), t.child);
  }
  function on(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function eo(e, t, l, a, n) {
    var i = ku();
    return (
      (i = i === null ? null : { parent: Oe._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: l, cachePool: i }),
      e !== null && ui(t, null),
      ec(),
      ar(t),
      e !== null && va(e, t, a, !0),
      (t.childLanes = n),
      null
    );
  }
  function ji(e, t) {
    return (
      (t = Ei({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function to(e, t, l) {
    return (
      Ql(t, e.child, null, l),
      (e = ji(t, t.pendingProps)),
      (e.flags |= 2),
      rt(t),
      (t.memoizedState = null),
      e
    );
  }
  function W0(e, t, l) {
    var a = t.pendingProps,
      n = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ne) {
        if (a.mode === 'hidden')
          return ((e = ji(t, a)), (t.lanes = 536870912), on(null, e));
        if (
          (lc(t),
          (e = Se)
            ? ((e = hd(e, bt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: al !== null ? { id: Ot, overflow: Ct } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = wf(e)),
                (l.return = t),
                (t.child = l),
                (Ye = t),
                (Se = null)))
            : (e = null),
          e === null)
        )
          throw il(t);
        return ((t.lanes = 536870912), null);
      }
      return ji(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if ((lc(t), n))
        if (t.flags & 256) ((t.flags &= -257), (t = to(e, t, l)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        (Ue || va(e, t, l, !1), (n = (l & e.childLanes) !== 0), Ue || n)
      ) {
        if (
          ((a = xe),
          a !== null && ((u = Zs(a, l)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Hl(e, u), lt(a, e, u), Nc);
        (Di(), (t = to(e, t, l)));
      } else
        ((e = i.treeContext),
          (Se = jt(u.nextSibling)),
          (Ye = t),
          (ne = !0),
          (nl = null),
          (bt = !1),
          e !== null && Lf(t, e),
          (t = ji(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Gt(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Ni(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Ec(e, t, l, a, n) {
    return (
      Gl(t),
      (l = nc(e, t, l, a, void 0, n)),
      (a = ic()),
      e !== null && !Ue
        ? (uc(e, t, n), Vt(e, t, n))
        : (ne && a && Gu(t), (t.flags |= 1), Xe(e, t, l, n), t.child)
    );
  }
  function lo(e, t, l, a, n, i) {
    return (
      Gl(t),
      (t.updateQueue = null),
      (l = ir(t, a, l, n)),
      nr(e),
      (a = ic()),
      e !== null && !Ue
        ? (uc(e, t, i), Vt(e, t, i))
        : (ne && a && Gu(t), (t.flags |= 1), Xe(e, t, l, i), t.child)
    );
  }
  function ao(e, t, l, a, n) {
    if ((Gl(t), t.stateNode === null)) {
      var i = oa,
        u = l.contextType;
      (typeof u == 'object' && u !== null && (i = Le(u)),
        (i = new l(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Sc),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        $u(t),
        (u = l.contextType),
        (i.context = typeof u == 'object' && u !== null ? Le(u) : oa),
        (i.state = t.memoizedState),
        (u = l.getDerivedStateFromProps),
        typeof u == 'function' && (bc(t, l, u, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function' ||
          (typeof i.UNSAFE_componentWillMount != 'function' &&
            typeof i.componentWillMount != 'function') ||
          ((u = i.state),
          typeof i.componentWillMount == 'function' && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == 'function' &&
            i.UNSAFE_componentWillMount(),
          u !== i.state && Sc.enqueueReplaceState(i, i.state, null),
          un(t, a, i, n),
          nn(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps,
        m = Vl(l, f);
      i.props = m;
      var b = i.context,
        M = l.contextType;
      ((u = oa), typeof M == 'object' && M !== null && (u = Le(M)));
      var _ = l.getDerivedStateFromProps;
      ((M =
        typeof _ == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function'),
        (f = t.pendingProps !== f),
        M ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((f || b !== u) && Qr(t, i, a, u)),
        (cl = !1));
      var S = t.memoizedState;
      ((i.state = S),
        un(t, a, i, n),
        nn(),
        (b = t.memoizedState),
        f || S !== b || cl
          ? (typeof _ == 'function' && (bc(t, l, _, a), (b = t.memoizedState)),
            (m = cl || Xr(t, l, m, a, S, b, u))
              ? (M ||
                  (typeof i.UNSAFE_componentWillMount != 'function' &&
                    typeof i.componentWillMount != 'function') ||
                  (typeof i.componentWillMount == 'function' &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == 'function' &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = b)),
            (i.props = a),
            (i.state = b),
            (i.context = u),
            (a = m))
          : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((i = t.stateNode),
        Fu(e, t),
        (u = t.memoizedProps),
        (M = Vl(l, u)),
        (i.props = M),
        (_ = t.pendingProps),
        (S = i.context),
        (b = l.contextType),
        (m = oa),
        typeof b == 'object' && b !== null && (m = Le(b)),
        (f = l.getDerivedStateFromProps),
        (b =
          typeof f == 'function' ||
          typeof i.getSnapshotBeforeUpdate == 'function') ||
          (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof i.componentWillReceiveProps != 'function') ||
          ((u !== _ || S !== m) && Qr(t, i, a, m)),
        (cl = !1),
        (S = t.memoizedState),
        (i.state = S),
        un(t, a, i, n),
        nn());
      var E = t.memoizedState;
      u !== _ ||
      S !== E ||
      cl ||
      (e !== null && e.dependencies !== null && ni(e.dependencies))
        ? (typeof f == 'function' && (bc(t, l, f, a), (E = t.memoizedState)),
          (M =
            cl ||
            Xr(t, l, M, a, S, E, m) ||
            (e !== null && e.dependencies !== null && ni(e.dependencies)))
            ? (b ||
                (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                  typeof i.componentWillUpdate != 'function') ||
                (typeof i.componentWillUpdate == 'function' &&
                  i.componentWillUpdate(a, E, m),
                typeof i.UNSAFE_componentWillUpdate == 'function' &&
                  i.UNSAFE_componentWillUpdate(a, E, m)),
              typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = E)),
          (i.props = a),
          (i.state = E),
          (i.context = m),
          (a = M))
        : (typeof i.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      Ni(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != 'function'
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ql(t, e.child, null, n)),
              (t.child = Ql(t, null, l, n)))
            : Xe(e, t, l, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Vt(e, t, n)),
      e
    );
  }
  function no(e, t, l, a) {
    return (Bl(), (t.flags |= 256), Xe(e, t, l, a), t.child);
  }
  var zc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Mc(e) {
    return { baseLanes: e, cachePool: Jf() };
  }
  function Ac(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= dt), e);
  }
  function io(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u =
          e !== null && e.memoizedState === null ? !1 : (Te.current & 2) !== 0),
      u && ((n = !0), (t.flags &= -129)),
      (u = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ne) {
        if (
          (n ? rl(t) : ol(),
          (e = Se)
            ? ((e = hd(e, bt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: al !== null ? { id: Ot, overflow: Ct } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = wf(e)),
                (l.return = t),
                (t.child = l),
                (Ye = t),
                (Se = null)))
            : (e = null),
          e === null)
        )
          throw il(t);
        return (fs(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n
          ? (ol(),
            (n = t.mode),
            (f = Ei({ mode: 'hidden', children: f }, n)),
            (a = ql(a, n, l, null)),
            (f.return = t),
            (a.return = t),
            (f.sibling = a),
            (t.child = f),
            (a = t.child),
            (a.memoizedState = Mc(l)),
            (a.childLanes = Ac(e, u, l)),
            (t.memoizedState = zc),
            on(null, a))
          : (rl(t), Tc(t, f))
      );
    }
    var m = e.memoizedState;
    if (m !== null && ((f = m.dehydrated), f !== null)) {
      if (i)
        t.flags & 256
          ? (rl(t), (t.flags &= -257), (t = _c(e, t, l)))
          : t.memoizedState !== null
            ? (ol(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ol(),
              (f = a.fallback),
              (n = t.mode),
              (a = Ei({ mode: 'visible', children: a.children }, n)),
              (f = ql(f, n, l, null)),
              (f.flags |= 2),
              (a.return = t),
              (f.return = t),
              (a.sibling = f),
              (t.child = a),
              Ql(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Mc(l)),
              (a.childLanes = Ac(e, u, l)),
              (t.memoizedState = zc),
              (t = on(null, a)));
      else if ((rl(t), fs(f))) {
        if (((u = f.nextSibling && f.nextSibling.dataset), u)) var b = u.dgst;
        ((u = b),
          (a = Error(r(419))),
          (a.stack = ''),
          (a.digest = u),
          Ia({ value: a, source: null, stack: null }),
          (t = _c(e, t, l)));
      } else if (
        (Ue || va(e, t, l, !1), (u = (l & e.childLanes) !== 0), Ue || u)
      ) {
        if (
          ((u = xe),
          u !== null && ((a = Zs(u, l)), a !== 0 && a !== m.retryLane))
        )
          throw ((m.retryLane = a), Hl(e, a), lt(u, e, a), Nc);
        (ss(f) || Di(), (t = _c(e, t, l)));
      } else
        ss(f)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = m.treeContext),
            (Se = jt(f.nextSibling)),
            (Ye = t),
            (ne = !0),
            (nl = null),
            (bt = !1),
            e !== null && Lf(t, e),
            (t = Tc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (ol(),
        (f = a.fallback),
        (n = t.mode),
        (m = e.child),
        (b = m.sibling),
        (a = Gt(m, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = m.subtreeFlags & 65011712),
        b !== null ? (f = Gt(b, f)) : ((f = ql(f, n, l, null)), (f.flags |= 2)),
        (f.return = t),
        (a.return = t),
        (a.sibling = f),
        (t.child = a),
        on(null, a),
        (a = t.child),
        (f = e.child.memoizedState),
        f === null
          ? (f = Mc(l))
          : ((n = f.cachePool),
            n !== null
              ? ((m = Oe._currentValue),
                (n = n.parent !== m ? { parent: m, pool: m } : n))
              : (n = Jf()),
            (f = { baseLanes: f.baseLanes | l, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = Ac(e, u, l)),
        (t.memoizedState = zc),
        on(e.child, a))
      : (rl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Gt(l, { mode: 'visible', children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((u = t.deletions),
          u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Tc(e, t) {
    return (
      (t = Ei({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ei(e, t) {
    return ((e = st(22, e, null, t)), (e.lanes = 0), e);
  }
  function _c(e, t, l) {
    return (
      Ql(t, e.child, null, l),
      (e = Tc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function uo(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Zu(e.return, t, l));
  }
  function Oc(e, t, l, a, n, i) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: i,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n),
        (u.treeForkCount = i));
  }
  function co(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    a = a.children;
    var u = Te.current,
      f = (u & 2) !== 0;
    if (
      (f ? ((u = (u & 1) | 2), (t.flags |= 128)) : (u &= 1),
      q(Te, u),
      Xe(e, t, a, l),
      (a = ne ? Fa : 0),
      !f && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && uo(e, l, t);
        else if (e.tag === 19) uo(e, l, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (n) {
      case 'forwards':
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate),
            e !== null && di(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Oc(t, !1, n, l, i, a));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && di(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        Oc(t, !0, l, null, i, a);
        break;
      case 'together':
        Oc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (hl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((va(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Gt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Gt(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Cc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ni(e)));
  }
  function $0(e, t, l) {
    switch (t.tag) {
      case 3:
        (Ve(t, t.stateNode.containerInfo),
          ul(t, Oe, e.memoizedState.cache),
          Bl());
        break;
      case 27:
      case 5:
        qa(t);
        break;
      case 4:
        Ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        ul(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), lc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (rl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? io(e, t, l)
              : (rl(t), (e = Vt(e, t, l)), e !== null ? e.sibling : null);
        rl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (va(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return co(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          q(Te, Te.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Pr(e, t, l, t.pendingProps));
      case 24:
        ul(t, Oe, e.memoizedState.cache);
    }
    return Vt(e, t, l);
  }
  function so(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ue = !0;
      else {
        if (!Cc(e, l) && (t.flags & 128) === 0) return ((Ue = !1), $0(e, t, l));
        Ue = (e.flags & 131072) !== 0;
      }
    else ((Ue = !1), ne && (t.flags & 1048576) !== 0 && Yf(t, Fa, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ll(t.elementType)), (t.type = e), typeof e == 'function'))
            qu(e)
              ? ((a = Vl(e, a)), (t.tag = 1), (t = ao(null, t, e, a, l)))
              : ((t.tag = 0), (t = Ec(null, t, e, a, l)));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === Ee) {
                ((t.tag = 11), (t = $r(null, t, e, a, l)));
                break e;
              } else if (n === ae) {
                ((t.tag = 14), (t = Fr(null, t, e, a, l)));
                break e;
              }
            }
            throw ((t = Ht(e) || e), Error(r(306, t, '')));
          }
        }
        return t;
      case 0:
        return Ec(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = Vl(a, t.pendingProps)), ao(e, t, a, n, l));
      case 3:
        e: {
          if ((Ve(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          ((n = i.element), Fu(e, t), un(t, a, null, l));
          var u = t.memoizedState;
          if (
            ((a = u.cache),
            ul(t, Oe, a),
            a !== i.cache && Vu(t, [Oe], l, !0),
            nn(),
            (a = u.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: u.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = no(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = yt(Error(r(424)), t)), Ia(n), (t = no(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                Se = jt(e.firstChild),
                  Ye = t,
                  ne = !0,
                  nl = null,
                  bt = !0,
                  l = Pf(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Bl(), a === n)) {
              t = Vt(e, t, l);
              break e;
            }
            Xe(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ni(e, t),
          e === null
            ? (l = bd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : ne ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Yi($.current).createElement(l)),
                (a[Ge] = t),
                (a[$e] = e),
                Qe(a, l, e),
                qe(a),
                (t.stateNode = a))
            : (t.memoizedState = bd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          qa(t),
          e === null &&
            ne &&
            ((a = t.stateNode = yd(t.type, t.pendingProps, $.current)),
            (Ye = t),
            (bt = !0),
            (n = Se),
            xl(t.type) ? ((rs = n), (Se = jt(a.firstChild))) : (Se = n)),
          Xe(e, t, t.pendingProps.children, l),
          Ni(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ne &&
            ((n = a = Se) &&
              ((a = Mh(a, t.type, t.pendingProps, bt)),
              a !== null
                ? ((t.stateNode = a),
                  (Ye = t),
                  (Se = jt(a.firstChild)),
                  (bt = !1),
                  (n = !0))
                : (n = !1)),
            n || il(t)),
          qa(t),
          (n = t.type),
          (i = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (a = i.children),
          is(n, i) ? (a = null) : u !== null && is(n, u) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = nc(e, t, L0, null, null, l)), (Mn._currentValue = n)),
          Ni(e, t),
          Xe(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            ne &&
            ((e = l = Se) &&
              ((l = Ah(l, t.pendingProps, bt)),
              l !== null
                ? ((t.stateNode = l), (Ye = t), (Se = null), (e = !0))
                : (e = !1)),
            e || il(t)),
          null
        );
      case 13:
        return io(e, t, l);
      case 4:
        return (
          Ve(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ql(t, null, a, l)) : Xe(e, t, a, l),
          t.child
        );
      case 11:
        return $r(e, t, t.type, t.pendingProps, l);
      case 7:
        return (Xe(e, t, t.pendingProps, l), t.child);
      case 8:
        return (Xe(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (Xe(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          ul(t, t.type, a.value),
          Xe(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Gl(t),
          (n = Le(n)),
          (a = a(n)),
          (t.flags |= 1),
          Xe(e, t, a, l),
          t.child
        );
      case 14:
        return Fr(e, t, t.type, t.pendingProps, l);
      case 15:
        return Ir(e, t, t.type, t.pendingProps, l);
      case 19:
        return co(e, t, l);
      case 31:
        return W0(e, t, l);
      case 22:
        return Pr(e, t, l, t.pendingProps);
      case 24:
        return (
          Gl(t),
          (a = Le(Oe)),
          e === null
            ? ((n = ku()),
              n === null &&
                ((n = xe),
                (i = Ku()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (t.memoizedState = { parent: a, cache: n }),
              $u(t),
              ul(t, Oe, n))
            : ((e.lanes & l) !== 0 && (Fu(e, t), un(t, null, null, l), nn()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  ul(t, Oe, a))
                : ((a = i.cache),
                  ul(t, Oe, a),
                  a !== n.cache && Vu(t, [Oe], l, !0))),
          Xe(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Kt(e) {
    e.flags |= 4;
  }
  function Uc(e, t, l, a, n) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (n & 335544128) === n))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (qo()) e.flags |= 8192;
        else throw ((Xl = si), Wu);
    } else e.flags &= -16777217;
  }
  function fo(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !zd(t)))
      if (qo()) e.flags |= 8192;
      else throw ((Xl = si), Wu);
  }
  function zi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Ls() : 536870912), (e.lanes |= t), (Aa |= t)));
  }
  function dn(e, t) {
    if (!ne)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function F0(e, t, l) {
    var a = t.pendingProps;
    switch ((Yu(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (je(t), null);
      case 1:
        return (je(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(Oe),
          Ae(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ha(t)
              ? Kt(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Xu())),
          je(t),
          null
        );
      case 26:
        var n = t.type,
          i = t.memoizedState;
        return (
          e === null
            ? (Kt(t),
              i !== null ? (je(t), fo(t, i)) : (je(t), Uc(t, n, null, a, l)))
            : i
              ? i !== e.memoizedState
                ? (Kt(t), je(t), fo(t, i))
                : (je(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && Kt(t),
                je(t),
                Uc(t, n, e, a, l)),
          null
        );
      case 27:
        if (
          (qn(t),
          (l = $.current),
          (n = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (je(t), null);
          }
          ((e = w.current),
            ha(t) ? Xf(t) : ((e = yd(n, a, l)), (t.stateNode = e), Kt(t)));
        }
        return (je(t), null);
      case 5:
        if ((qn(t), (n = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Kt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (je(t), null);
          }
          if (((i = w.current), ha(t))) Xf(t);
          else {
            var u = Yi($.current);
            switch (i) {
              case 1:
                i = u.createElementNS('http://www.w3.org/2000/svg', n);
                break;
              case 2:
                i = u.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                break;
              default:
                switch (n) {
                  case 'svg':
                    i = u.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 'math':
                    i = u.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      n
                    );
                    break;
                  case 'script':
                    ((i = u.createElement('div')),
                      (i.innerHTML = '<script><\/script>'),
                      (i = i.removeChild(i.firstChild)));
                    break;
                  case 'select':
                    ((i =
                      typeof a.is == 'string'
                        ? u.createElement('select', { is: a.is })
                        : u.createElement('select')),
                      a.multiple
                        ? (i.multiple = !0)
                        : a.size && (i.size = a.size));
                    break;
                  default:
                    i =
                      typeof a.is == 'string'
                        ? u.createElement(n, { is: a.is })
                        : u.createElement(n);
                }
            }
            ((i[Ge] = t), (i[$e] = a));
            e: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === t) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break e;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            t.stateNode = i;
            e: switch ((Qe(i, n, a), n)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                a = !!a.autoFocus;
                break e;
              case 'img':
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Kt(t);
          }
        }
        return (
          je(t),
          Uc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Kt(t);
        else {
          if (typeof a != 'string' && t.stateNode === null) throw Error(r(166));
          if (((e = $.current), ha(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = Ye),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[Ge] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                ud(e.nodeValue, l)
              )),
              e || il(t, !0));
          } else
            ((e = Yi(e).createTextNode(a)), (e[Ge] = t), (t.stateNode = e));
        }
        return (je(t), null);
      case 31:
        if (((l = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = ha(t)), l !== null)) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[Ge] = t;
            } else
              (Bl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (je(t), (e = !1));
          } else
            ((l = Xu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (e = !0));
          if (!e) return t.flags & 256 ? (rt(t), t) : (rt(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (je(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = ha(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(r(317));
              n[Ge] = t;
            } else
              (Bl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (je(t), (n = !1));
          } else
            ((n = Xu()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (rt(t), t) : (rt(t), null);
        }
        return (
          rt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = l), t)
            : ((l = a !== null),
              (e = e !== null && e.memoizedState !== null),
              l &&
                ((a = t.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== n && (a.flags |= 2048)),
              l !== e && l && (t.child.flags |= 8192),
              zi(t, t.updateQueue),
              je(t),
              null)
        );
      case 4:
        return (Ae(), e === null && es(t.stateNode.containerInfo), je(t), null);
      case 10:
        return (Xt(t.type), je(t), null);
      case 19:
        if ((C(Te), (a = t.memoizedState), a === null)) return (je(t), null);
        if (((n = (t.flags & 128) !== 0), (i = a.rendering), i === null))
          if (n) dn(a, !1);
          else {
            if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = di(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      dn(a, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      zi(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (Bf(l, e), (l = l.sibling));
                  return (
                    q(Te, (Te.current & 1) | 2),
                    ne && Yt(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              nt() > Oi &&
              ((t.flags |= 128), (n = !0), dn(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = di(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                zi(t, e),
                dn(a, !0),
                a.tail === null &&
                  a.tailMode === 'hidden' &&
                  !i.alternate &&
                  !ne)
              )
                return (je(t), null);
            } else
              2 * nt() - a.renderingStartTime > Oi &&
                l !== 536870912 &&
                ((t.flags |= 128), (n = !0), dn(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = a.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (a.last = i));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = nt()),
            (e.sibling = null),
            (l = Te.current),
            q(Te, n ? (l & 1) | 2 : l & 1),
            ne && Yt(t, a.treeForkCount),
            e)
          : (je(t), null);
      case 22:
      case 23:
        return (
          rt(t),
          tc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : je(t),
          (l = t.updateQueue),
          l !== null && zi(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && C(Yl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Xt(Oe),
          je(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function I0(e, t) {
    switch ((Yu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xt(Oe),
          Ae(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (qn(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((rt(t), t.alternate === null)) throw Error(r(340));
          Bl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (rt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Bl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (C(Te), null);
      case 4:
        return (Ae(), null);
      case 10:
        return (Xt(t.type), null);
      case 22:
      case 23:
        return (
          rt(t),
          tc(),
          e !== null && C(Yl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Xt(Oe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ro(e, t) {
    switch ((Yu(t), t.tag)) {
      case 3:
        (Xt(Oe), Ae());
        break;
      case 26:
      case 27:
      case 5:
        qn(t);
        break;
      case 4:
        Ae();
        break;
      case 31:
        t.memoizedState !== null && rt(t);
        break;
      case 13:
        rt(t);
        break;
      case 19:
        C(Te);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        (rt(t), tc(), e !== null && C(Yl));
        break;
      case 24:
        Xt(Oe);
    }
  }
  function mn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              u = l.inst;
            ((a = i()), (u.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (f) {
      me(t, t.return, f);
    }
  }
  function dl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst,
              f = u.destroy;
            if (f !== void 0) {
              ((u.destroy = void 0), (n = t));
              var m = l,
                b = f;
              try {
                b();
              } catch (M) {
                me(n, m, M);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (M) {
      me(t, t.return, M);
    }
  }
  function oo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        tr(t, l);
      } catch (a) {
        me(e, e.return, a);
      }
    }
  }
  function mo(e, t, l) {
    ((l.props = Vl(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      me(e, t, a);
    }
  }
  function hn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == 'function' ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      me(e, t, n);
    }
  }
  function Ut(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == 'function')
        try {
          a();
        } catch (n) {
          me(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (n) {
          me(e, t, n);
        }
      else l.current = null;
  }
  function ho(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus();
          break e;
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function Dc(e, t, l) {
    try {
      var a = e.stateNode;
      (bh(a, e.type, l, t), (a[$e] = t));
    } catch (n) {
      me(e, e.return, n);
    }
  }
  function vo(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && xl(e.type)) ||
      e.tag === 4
    );
  }
  function Rc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || vo(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && xl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Hc(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === 'HTML'
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Bt)));
    else if (
      a !== 4 &&
      (a === 27 && xl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Hc(e, t, l), e = e.sibling; e !== null; )
        (Hc(e, t, l), (e = e.sibling));
  }
  function Mi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && xl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Mi(e, t, l), e = e.sibling; e !== null; )
        (Mi(e, t, l), (e = e.sibling));
  }
  function go(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (Qe(t, a, l), (t[Ge] = e), (t[$e] = l));
    } catch (i) {
      me(e, e.return, i);
    }
  }
  var Jt = !1,
    De = !1,
    qc = !1,
    yo = typeof WeakSet == 'function' ? WeakSet : Set,
    Be = null;
  function P0(e, t) {
    if (((e = e.containerInfo), (as = Ji), (e = Tf(e)), _u(e))) {
      if ('selectionStart' in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break e;
            }
            var u = 0,
              f = -1,
              m = -1,
              b = 0,
              M = 0,
              _ = e,
              S = null;
            t: for (;;) {
              for (
                var E;
                _ !== l || (n !== 0 && _.nodeType !== 3) || (f = u + n),
                  _ !== i || (a !== 0 && _.nodeType !== 3) || (m = u + a),
                  _.nodeType === 3 && (u += _.nodeValue.length),
                  (E = _.firstChild) !== null;
              )
                ((S = _), (_ = E));
              for (;;) {
                if (_ === e) break t;
                if (
                  (S === l && ++b === n && (f = u),
                  S === i && ++M === a && (m = u),
                  (E = _.nextSibling) !== null)
                )
                  break;
                ((_ = S), (S = _.parentNode));
              }
              _ = E;
            }
            l = f === -1 || m === -1 ? null : { start: f, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      ns = { focusedElem: e, selectionRange: l }, Ji = !1, Be = t;
      Be !== null;
    )
      if (
        ((t = Be), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Be = e));
      else
        for (; Be !== null; ) {
          switch (((t = Be), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (l = 0; l < e.length; l++)
                  ((n = e[l]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                ((e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode));
                try {
                  var B = Vl(l.type, n);
                  ((e = a.getSnapshotBeforeUpdate(B, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Q) {
                  me(l, l.return, Q);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  cs(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      cs(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Be = e));
            break;
          }
          Be = t.return;
        }
  }
  function po(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Wt(e, l), a & 4 && mn(5, l));
        break;
      case 1:
        if ((Wt(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (u) {
              me(l, l.return, u);
            }
          else {
            var n = Vl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              me(l, l.return, u);
            }
          }
        (a & 64 && oo(l), a & 512 && hn(l, l.return));
        break;
      case 3:
        if ((Wt(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            tr(e, t);
          } catch (u) {
            me(l, l.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && go(l);
      case 26:
      case 5:
        (Wt(e, l), t === null && a & 4 && ho(l), a & 512 && hn(l, l.return));
        break;
      case 12:
        Wt(e, l);
        break;
      case 31:
        (Wt(e, l), a & 4 && So(e, l));
        break;
      case 13:
        (Wt(e, l),
          a & 4 && jo(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = sh.bind(null, l)), Th(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Jt), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || De), (n = Jt));
          var i = De;
          ((Jt = a),
            (De = t) && !i ? $t(e, l, (l.subtreeFlags & 8772) !== 0) : Wt(e, l),
            (Jt = n),
            (De = i));
        }
        break;
      case 30:
        break;
      default:
        Wt(e, l);
    }
  }
  function xo(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), xo(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && du(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ne = null,
    Ie = !1;
  function kt(e, t, l) {
    for (l = l.child; l !== null; ) (bo(e, t, l), (l = l.sibling));
  }
  function bo(e, t, l) {
    if (it && typeof it.onCommitFiberUnmount == 'function')
      try {
        it.onCommitFiberUnmount(Ba, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (De || Ut(l, t),
          kt(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        De || Ut(l, t);
        var a = Ne,
          n = Ie;
        (xl(l.type) && ((Ne = l.stateNode), (Ie = !1)),
          kt(e, t, l),
          Nn(l.stateNode),
          (Ne = a),
          (Ie = n));
        break;
      case 5:
        De || Ut(l, t);
      case 6:
        if (
          ((a = Ne),
          (n = Ie),
          (Ne = null),
          kt(e, t, l),
          (Ne = a),
          (Ie = n),
          Ne !== null)
        )
          if (Ie)
            try {
              (Ne.nodeType === 9
                ? Ne.body
                : Ne.nodeName === 'HTML'
                  ? Ne.ownerDocument.body
                  : Ne
              ).removeChild(l.stateNode);
            } catch (i) {
              me(l, t, i);
            }
          else
            try {
              Ne.removeChild(l.stateNode);
            } catch (i) {
              me(l, t, i);
            }
        break;
      case 18:
        Ne !== null &&
          (Ie
            ? ((e = Ne),
              dd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                l.stateNode
              ),
              Ha(e))
            : dd(Ne, l.stateNode));
        break;
      case 4:
        ((a = Ne),
          (n = Ie),
          (Ne = l.stateNode.containerInfo),
          (Ie = !0),
          kt(e, t, l),
          (Ne = a),
          (Ie = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (dl(2, l, t), De || dl(4, l, t), kt(e, t, l));
        break;
      case 1:
        (De ||
          (Ut(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == 'function' && mo(l, t, a)),
          kt(e, t, l));
        break;
      case 21:
        kt(e, t, l);
        break;
      case 22:
        ((De = (a = De) || l.memoizedState !== null), kt(e, t, l), (De = a));
        break;
      default:
        kt(e, t, l);
    }
  }
  function So(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Ha(e);
      } catch (l) {
        me(t, t.return, l);
      }
    }
  }
  function jo(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Ha(e);
      } catch (l) {
        me(t, t.return, l);
      }
  }
  function eh(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new yo()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new yo()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Ai(e, t) {
    var l = eh(e);
    t.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = fh.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function Pe(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          u = t,
          f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (xl(f.type)) {
                ((Ne = f.stateNode), (Ie = !1));
                break e;
              }
              break;
            case 5:
              ((Ne = f.stateNode), (Ie = !1));
              break e;
            case 3:
            case 4:
              ((Ne = f.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          f = f.return;
        }
        if (Ne === null) throw Error(r(160));
        (bo(i, u, n),
          (Ne = null),
          (Ie = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (No(t, e), (t = t.sibling));
  }
  var Mt = null;
  function No(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Pe(t, e),
          et(e),
          a & 4 && (dl(3, e, e.return), mn(3, e), dl(5, e, e.return)));
        break;
      case 1:
        (Pe(t, e),
          et(e),
          a & 512 && (De || l === null || Ut(l, l.return)),
          a & 64 &&
            Jt &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = Mt;
        if (
          (Pe(t, e),
          et(e),
          a & 512 && (De || l === null || Ut(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case 'title':
                      ((i = n.getElementsByTagName('title')[0]),
                        (!i ||
                          i[Ya] ||
                          i[Ge] ||
                          i.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          i.hasAttribute('itemprop')) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector('head > title')
                          )),
                        Qe(i, a, l),
                        (i[Ge] = e),
                        qe(i),
                        (a = i));
                      break e;
                    case 'link':
                      var u = Nd('link', 'href', n).get(a + (l.href || ''));
                      if (u) {
                        for (var f = 0; f < u.length; f++)
                          if (
                            ((i = u[f]),
                            i.getAttribute('href') ===
                              (l.href == null || l.href === ''
                                ? null
                                : l.href) &&
                              i.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            u.splice(f, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)),
                        Qe(i, a, l),
                        n.head.appendChild(i));
                      break;
                    case 'meta':
                      if (
                        (u = Nd('meta', 'content', n).get(
                          a + (l.content || '')
                        ))
                      ) {
                        for (f = 0; f < u.length; f++)
                          if (
                            ((i = u[f]),
                            i.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              i.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            u.splice(f, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)),
                        Qe(i, a, l),
                        n.head.appendChild(i));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((i[Ge] = e), qe(i), (a = i));
                }
                e.stateNode = a;
              } else Ed(n, e.type, e.stateNode);
            else e.stateNode = jd(n, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? Ed(n, e.type, e.stateNode)
                  : jd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Dc(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Pe(t, e),
          et(e),
          a & 512 && (De || l === null || Ut(l, l.return)),
          l !== null && a & 4 && Dc(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Pe(t, e),
          et(e),
          a & 512 && (De || l === null || Ut(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            na(n, '');
          } catch (B) {
            me(e, e.return, B);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Dc(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (qc = !0));
        break;
      case 6:
        if ((Pe(t, e), et(e), a & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (B) {
            me(e, e.return, B);
          }
        }
        break;
      case 3:
        if (
          ((Qi = null),
          (n = Mt),
          (Mt = Li(t.containerInfo)),
          Pe(t, e),
          (Mt = n),
          et(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ha(t.containerInfo);
          } catch (B) {
            me(e, e.return, B);
          }
        qc && ((qc = !1), Eo(e));
        break;
      case 4:
        ((a = Mt),
          (Mt = Li(e.stateNode.containerInfo)),
          Pe(t, e),
          et(e),
          (Mt = a));
        break;
      case 12:
        (Pe(t, e), et(e));
        break;
      case 31:
        (Pe(t, e),
          et(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ai(e, a))));
        break;
      case 13:
        (Pe(t, e),
          et(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (_i = nt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ai(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null,
          b = Jt,
          M = De;
        if (
          ((Jt = b || n),
          (De = M || m),
          Pe(t, e),
          (De = M),
          (Jt = b),
          et(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || m || Jt || De || Kl(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                m = l = t;
                try {
                  if (((i = m.stateNode), n))
                    ((u = i.style),
                      typeof u.setProperty == 'function'
                        ? u.setProperty('display', 'none', 'important')
                        : (u.display = 'none'));
                  else {
                    f = m.stateNode;
                    var _ = m.memoizedProps.style,
                      S =
                        _ != null && _.hasOwnProperty('display')
                          ? _.display
                          : null;
                    f.style.display =
                      S == null || typeof S == 'boolean' ? '' : ('' + S).trim();
                  }
                } catch (B) {
                  me(m, m.return, B);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? '' : m.memoizedProps;
                } catch (B) {
                  me(m, m.return, B);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                m = t;
                try {
                  var E = m.stateNode;
                  n ? md(E, !0) : md(m.stateNode, !1);
                } catch (B) {
                  me(m, m.return, B);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Ai(e, l))));
        break;
      case 19:
        (Pe(t, e),
          et(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Ai(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Pe(t, e), et(e));
    }
  }
  function et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (vo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = Rc(e);
            Mi(e, i, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (na(u, ''), (l.flags &= -33));
            var f = Rc(e);
            Mi(e, f, u);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo,
              b = Rc(e);
            Hc(e, b, m);
            break;
          default:
            throw Error(r(161));
        }
      } catch (M) {
        me(e, e.return, M);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Eo(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Eo(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Wt(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (po(e, t.alternate, t), (t = t.sibling));
  }
  function Kl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (dl(4, t, t.return), Kl(t));
          break;
        case 1:
          Ut(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == 'function' && mo(t, t.return, l),
            Kl(t));
          break;
        case 27:
          Nn(t.stateNode);
        case 26:
        case 5:
          (Ut(t, t.return), Kl(t));
          break;
        case 22:
          t.memoizedState === null && Kl(t);
          break;
        case 30:
          Kl(t);
          break;
        default:
          Kl(t);
      }
      e = e.sibling;
    }
  }
  function $t(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ($t(n, i, l), mn(4, i));
          break;
        case 1:
          if (
            ($t(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == 'function')
          )
            try {
              n.componentDidMount();
            } catch (b) {
              me(a, a.return, b);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  er(m[n], f);
            } catch (b) {
              me(a, a.return, b);
            }
          }
          (l && u & 64 && oo(i), hn(i, i.return));
          break;
        case 27:
          go(i);
        case 26:
        case 5:
          ($t(n, i, l), l && a === null && u & 4 && ho(i), hn(i, i.return));
          break;
        case 12:
          $t(n, i, l);
          break;
        case 31:
          ($t(n, i, l), l && u & 4 && So(n, i));
          break;
        case 13:
          ($t(n, i, l), l && u & 4 && jo(n, i));
          break;
        case 22:
          (i.memoizedState === null && $t(n, i, l), hn(i, i.return));
          break;
        case 30:
          break;
        default:
          $t(n, i, l);
      }
      t = t.sibling;
    }
  }
  function Bc(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && Pa(l)));
  }
  function wc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Pa(e)));
  }
  function At(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (zo(e, t, l, a), (t = t.sibling));
  }
  function zo(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (At(e, t, l, a), n & 2048 && mn(9, t));
        break;
      case 1:
        At(e, t, l, a);
        break;
      case 3:
        (At(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Pa(e))));
        break;
      case 12:
        if (n & 2048) {
          (At(e, t, l, a), (e = t.stateNode));
          try {
            var i = t.memoizedProps,
              u = i.id,
              f = i.onPostCommit;
            typeof f == 'function' &&
              f(
                u,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0
              );
          } catch (m) {
            me(t, t.return, m);
          }
        } else At(e, t, l, a);
        break;
      case 31:
        At(e, t, l, a);
        break;
      case 13:
        At(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (u = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? At(e, t, l, a)
              : vn(e, t)
            : i._visibility & 2
              ? At(e, t, l, a)
              : ((i._visibility |= 2),
                Ea(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Bc(u, t));
        break;
      case 24:
        (At(e, t, l, a), n & 2048 && wc(t.alternate, t));
        break;
      default:
        At(e, t, l, a);
    }
  }
  function Ea(e, t, l, a, n) {
    for (
      n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var i = e,
        u = t,
        f = l,
        m = a,
        b = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Ea(i, u, f, m, n), mn(8, u));
          break;
        case 23:
          break;
        case 22:
          var M = u.stateNode;
          (u.memoizedState !== null
            ? M._visibility & 2
              ? Ea(i, u, f, m, n)
              : vn(i, u)
            : ((M._visibility |= 2), Ea(i, u, f, m, n)),
            n && b & 2048 && Bc(u.alternate, u));
          break;
        case 24:
          (Ea(i, u, f, m, n), n && b & 2048 && wc(u.alternate, u));
          break;
        default:
          Ea(i, u, f, m, n);
      }
      t = t.sibling;
    }
  }
  function vn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (vn(l, a), n & 2048 && Bc(a.alternate, a));
            break;
          case 24:
            (vn(l, a), n & 2048 && wc(a.alternate, a));
            break;
          default:
            vn(l, a);
        }
        t = t.sibling;
      }
  }
  var gn = 8192;
  function za(e, t, l) {
    if (e.subtreeFlags & gn)
      for (e = e.child; e !== null; ) (Mo(e, t, l), (e = e.sibling));
  }
  function Mo(e, t, l) {
    switch (e.tag) {
      case 26:
        (za(e, t, l),
          e.flags & gn &&
            e.memoizedState !== null &&
            Yh(l, Mt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        za(e, t, l);
        break;
      case 3:
      case 4:
        var a = Mt;
        ((Mt = Li(e.stateNode.containerInfo)), za(e, t, l), (Mt = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = gn), (gn = 16777216), za(e, t, l), (gn = a))
            : za(e, t, l));
        break;
      default:
        za(e, t, l);
    }
  }
  function Ao(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function yn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Be = a), _o(a, e));
        }
      Ao(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (To(e), (e = e.sibling));
  }
  function To(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (yn(e), e.flags & 2048 && dl(9, e, e.return));
        break;
      case 3:
        yn(e);
        break;
      case 12:
        yn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ti(e))
          : yn(e);
        break;
      default:
        yn(e);
    }
  }
  function Ti(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((Be = a), _o(a, e));
        }
      Ao(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (dl(8, t, t.return), Ti(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Ti(t)));
          break;
        default:
          Ti(t);
      }
      e = e.sibling;
    }
  }
  function _o(e, t) {
    for (; Be !== null; ) {
      var l = Be;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Pa(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (Be = a));
      else
        e: for (l = e; Be !== null; ) {
          a = Be;
          var n = a.sibling,
            i = a.return;
          if ((xo(a), a === l)) {
            Be = null;
            break e;
          }
          if (n !== null) {
            ((n.return = i), (Be = n));
            break e;
          }
          Be = i;
        }
    }
  }
  var th = {
      getCacheForType: function (e) {
        var t = Le(Oe),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
      cacheSignal: function () {
        return Le(Oe).controller.signal;
      },
    },
    lh = typeof WeakMap == 'function' ? WeakMap : Map,
    re = 0,
    xe = null,
    F = null,
    P = 0,
    de = 0,
    ot = null,
    ml = !1,
    Ma = !1,
    Gc = !1,
    Ft = 0,
    Me = 0,
    hl = 0,
    Jl = 0,
    Yc = 0,
    dt = 0,
    Aa = 0,
    pn = null,
    tt = null,
    Lc = !1,
    _i = 0,
    Oo = 0,
    Oi = 1 / 0,
    Ci = null,
    vl = null,
    He = 0,
    gl = null,
    Ta = null,
    It = 0,
    Xc = 0,
    Qc = null,
    Co = null,
    xn = 0,
    Zc = null;
  function mt() {
    return (re & 2) !== 0 && P !== 0 ? P & -P : A.T !== null ? $c() : Vs();
  }
  function Uo() {
    if (dt === 0)
      if ((P & 536870912) === 0 || ne) {
        var e = Gn;
        ((Gn <<= 1), (Gn & 3932160) === 0 && (Gn = 262144), (dt = e));
      } else dt = 536870912;
    return ((e = ft.current), e !== null && (e.flags |= 32), dt);
  }
  function lt(e, t, l) {
    (((e === xe && (de === 2 || de === 9)) || e.cancelPendingCommit !== null) &&
      (_a(e, 0), yl(e, P, dt, !1)),
      Ga(e, l),
      ((re & 2) === 0 || e !== xe) &&
        (e === xe &&
          ((re & 2) === 0 && (Jl |= l), Me === 4 && yl(e, P, dt, !1)),
        Dt(e)));
  }
  function Do(e, t, l) {
    if ((re & 6) !== 0) throw Error(r(327));
    var a = (!l && (t & 127) === 0 && (t & e.expiredLanes) === 0) || wa(e, t),
      n = a ? ih(e, t) : Kc(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        Ma && !a && yl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !ah(l))) {
          ((n = Kc(e, t, !1)), (i = !1));
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var u = 0;
          else
            ((u = e.pendingLanes & -536870913),
              (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0));
          if (u !== 0) {
            t = u;
            e: {
              var f = e;
              n = pn;
              var m = f.current.memoizedState.isDehydrated;
              if ((m && (_a(f, u).flags |= 256), (u = Kc(f, u, !1)), u !== 2)) {
                if (Gc && !m) {
                  ((f.errorRecoveryDisabledLanes |= i), (Jl |= i), (n = 4));
                  break e;
                }
                ((i = tt),
                  (tt = n),
                  i !== null &&
                    (tt === null ? (tt = i) : tt.push.apply(tt, i)));
              }
              n = u;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (_a(e, 0), yl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yl(a, t, dt, !ml);
              break e;
            case 2:
              tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((n = _i + 300 - nt()), 10 < n)) {
            if ((yl(a, t, dt, !ml), Ln(a, 0, !0) !== 0)) break e;
            ((It = t),
              (a.timeoutHandle = rd(
                Ro.bind(
                  null,
                  a,
                  l,
                  tt,
                  Ci,
                  Lc,
                  t,
                  dt,
                  Jl,
                  Aa,
                  ml,
                  i,
                  'Throttled',
                  -0,
                  0
                ),
                n
              )));
            break e;
          }
          Ro(a, l, tt, Ci, Lc, t, dt, Jl, Aa, ml, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Dt(e);
  }
  function Ro(e, t, l, a, n, i, u, f, m, b, M, _, S, E) {
    if (
      ((e.timeoutHandle = -1),
      (_ = t.subtreeFlags),
      _ & 8192 || (_ & 16785408) === 16785408)
    ) {
      ((_ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Bt,
      }),
        Mo(t, i, _));
      var B =
        (i & 62914560) === i ? _i - nt() : (i & 4194048) === i ? Oo - nt() : 0;
      if (((B = Lh(_, B)), B !== null)) {
        ((It = i),
          (e.cancelPendingCommit = B(
            Xo.bind(null, e, t, i, l, a, n, u, f, m, M, _, null, S, E)
          )),
          yl(e, i, u, !b));
        return;
      }
    }
    Xo(e, t, i, l, a, n, u, f, m);
  }
  function ah(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!ct(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function yl(e, t, l, a) {
    ((t &= ~Yc),
      (t &= ~Jl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var i = 31 - ut(n),
        u = 1 << i;
      ((a[i] = -1), (n &= ~u));
    }
    l !== 0 && Xs(e, l, t);
  }
  function Ui() {
    return (re & 6) === 0 ? (bn(0), !1) : !0;
  }
  function Vc() {
    if (F !== null) {
      if (de === 0) var e = F.return;
      else ((e = F), (Lt = wl = null), cc(e), (xa = null), (tn = 0), (e = F));
      for (; e !== null; ) (ro(e.alternate, e), (e = e.return));
      F = null;
    }
  }
  function _a(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), Nh(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      (It = 0),
      Vc(),
      (xe = e),
      (F = l = Gt(e.current, null)),
      (P = t),
      (de = 0),
      (ot = null),
      (ml = !1),
      (Ma = wa(e, t)),
      (Gc = !1),
      (Aa = dt = Yc = Jl = hl = Me = 0),
      (tt = pn = null),
      (Lc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ut(a),
          i = 1 << n;
        ((t |= e[n]), (a &= ~i));
      }
    return ((Ft = t), Pn(), l);
  }
  function Ho(e, t) {
    ((J = null),
      (A.H = rn),
      t === pa || t === ci
        ? ((t = $f()), (de = 3))
        : t === Wu
          ? ((t = $f()), (de = 4))
          : (de =
              t === Nc
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (ot = t),
      F === null && ((Me = 1), Si(e, yt(t, e.current))));
  }
  function qo() {
    var e = ft.current;
    return e === null
      ? !0
      : (P & 4194048) === P
        ? St === null
        : (P & 62914560) === P || (P & 536870912) !== 0
          ? e === St
          : !1;
  }
  function Bo() {
    var e = A.H;
    return ((A.H = rn), e === null ? rn : e);
  }
  function wo() {
    var e = A.A;
    return ((A.A = th), e);
  }
  function Di() {
    ((Me = 4),
      ml || ((P & 4194048) !== P && ft.current !== null) || (Ma = !0),
      ((hl & 134217727) === 0 && (Jl & 134217727) === 0) ||
        xe === null ||
        yl(xe, P, dt, !1));
  }
  function Kc(e, t, l) {
    var a = re;
    re |= 2;
    var n = Bo(),
      i = wo();
    ((xe !== e || P !== t) && ((Ci = null), _a(e, t)), (t = !1));
    var u = Me;
    e: do
      try {
        if (de !== 0 && F !== null) {
          var f = F,
            m = ot;
          switch (de) {
            case 8:
              (Vc(), (u = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ft.current === null && (t = !0);
              var b = de;
              if (((de = 0), (ot = null), Oa(e, f, m, b), l && Ma)) {
                u = 0;
                break e;
              }
              break;
            default:
              ((b = de), (de = 0), (ot = null), Oa(e, f, m, b));
          }
        }
        (nh(), (u = Me));
        break;
      } catch (M) {
        Ho(e, M);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Lt = wl = null),
      (re = a),
      (A.H = n),
      (A.A = i),
      F === null && ((xe = null), (P = 0), Pn()),
      u
    );
  }
  function nh() {
    for (; F !== null; ) Go(F);
  }
  function ih(e, t) {
    var l = re;
    re |= 2;
    var a = Bo(),
      n = wo();
    xe !== e || P !== t
      ? ((Ci = null), (Oi = nt() + 500), _a(e, t))
      : (Ma = wa(e, t));
    e: do
      try {
        if (de !== 0 && F !== null) {
          t = F;
          var i = ot;
          t: switch (de) {
            case 1:
              ((de = 0), (ot = null), Oa(e, t, i, 1));
              break;
            case 2:
            case 9:
              if (kf(i)) {
                ((de = 0), (ot = null), Yo(t));
                break;
              }
              ((t = function () {
                ((de !== 2 && de !== 9) || xe !== e || (de = 7), Dt(e));
              }),
                i.then(t, t));
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              kf(i)
                ? ((de = 0), (ot = null), Yo(t))
                : ((de = 0), (ot = null), Oa(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (F.tag) {
                case 26:
                  u = F.memoizedState;
                case 5:
                case 27:
                  var f = F;
                  if (u ? zd(u) : f.stateNode.complete) {
                    ((de = 0), (ot = null));
                    var m = f.sibling;
                    if (m !== null) F = m;
                    else {
                      var b = f.return;
                      b !== null ? ((F = b), Ri(b)) : (F = null);
                    }
                    break t;
                  }
              }
              ((de = 0), (ot = null), Oa(e, t, i, 5));
              break;
            case 6:
              ((de = 0), (ot = null), Oa(e, t, i, 6));
              break;
            case 8:
              (Vc(), (Me = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        uh();
        break;
      } catch (M) {
        Ho(e, M);
      }
    while (!0);
    return (
      (Lt = wl = null),
      (A.H = a),
      (A.A = n),
      (re = l),
      F !== null ? 0 : ((xe = null), (P = 0), Pn(), Me)
    );
  }
  function uh() {
    for (; F !== null && !_m(); ) Go(F);
  }
  function Go(e) {
    var t = so(e.alternate, e, Ft);
    ((e.memoizedProps = e.pendingProps), t === null ? Ri(e) : (F = t));
  }
  function Yo(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = lo(l, t, t.pendingProps, t.type, void 0, P);
        break;
      case 11:
        t = lo(l, t, t.pendingProps, t.type.render, t.ref, P);
        break;
      case 5:
        cc(t);
      default:
        (ro(l, t), (t = F = Bf(t, Ft)), (t = so(l, t, Ft)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ri(e) : (F = t));
  }
  function Oa(e, t, l, a) {
    ((Lt = wl = null), cc(t), (xa = null), (tn = 0));
    var n = t.return;
    try {
      if (k0(e, n, t, l, P)) {
        ((Me = 1), Si(e, yt(l, e.current)), (F = null));
        return;
      }
    } catch (i) {
      if (n !== null) throw ((F = n), i);
      ((Me = 1), Si(e, yt(l, e.current)), (F = null));
      return;
    }
    t.flags & 32768
      ? (ne || a === 1
          ? (e = !0)
          : Ma || (P & 536870912) !== 0
            ? (e = !1)
            : ((ml = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = ft.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Lo(t, e))
      : Ri(t);
  }
  function Ri(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Lo(t, ml);
        return;
      }
      e = t.return;
      var l = F0(t.alternate, t, Ft);
      if (l !== null) {
        F = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        F = t;
        return;
      }
      F = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function Lo(e, t) {
    do {
      var l = I0(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (F = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        F = e;
        return;
      }
      F = e = l;
    } while (e !== null);
    ((Me = 6), (F = null));
  }
  function Xo(e, t, l, a, n, i, u, f, m) {
    e.cancelPendingCommit = null;
    do Hi();
    while (He !== 0);
    if ((re & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= Ru),
        Gm(e, l, i, u, f, m),
        e === xe && ((F = xe = null), (P = 0)),
        (Ta = t),
        (gl = e),
        (It = l),
        (Xc = i),
        (Qc = n),
        (Co = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            rh(Bn, function () {
              return (Jo(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = A.T), (A.T = null), (n = H.p), (H.p = 2), (u = re), (re |= 4));
        try {
          P0(e, t, l);
        } finally {
          ((re = u), (H.p = n), (A.T = a));
        }
      }
      ((He = 1), Qo(), Zo(), Vo());
    }
  }
  function Qo() {
    if (He === 1) {
      He = 0;
      var e = gl,
        t = Ta,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = A.T), (A.T = null));
        var a = H.p;
        H.p = 2;
        var n = re;
        re |= 4;
        try {
          No(t, e);
          var i = ns,
            u = Tf(e.containerInfo),
            f = i.focusedElem,
            m = i.selectionRange;
          if (
            u !== f &&
            f &&
            f.ownerDocument &&
            Af(f.ownerDocument.documentElement, f)
          ) {
            if (m !== null && _u(f)) {
              var b = m.start,
                M = m.end;
              if ((M === void 0 && (M = b), 'selectionStart' in f))
                ((f.selectionStart = b),
                  (f.selectionEnd = Math.min(M, f.value.length)));
              else {
                var _ = f.ownerDocument || document,
                  S = (_ && _.defaultView) || window;
                if (S.getSelection) {
                  var E = S.getSelection(),
                    B = f.textContent.length,
                    Q = Math.min(m.start, B),
                    ye = m.end === void 0 ? Q : Math.min(m.end, B);
                  !E.extend && Q > ye && ((u = ye), (ye = Q), (Q = u));
                  var g = Mf(f, Q),
                    h = Mf(f, ye);
                  if (
                    g &&
                    h &&
                    (E.rangeCount !== 1 ||
                      E.anchorNode !== g.node ||
                      E.anchorOffset !== g.offset ||
                      E.focusNode !== h.node ||
                      E.focusOffset !== h.offset)
                  ) {
                    var x = _.createRange();
                    (x.setStart(g.node, g.offset),
                      E.removeAllRanges(),
                      Q > ye
                        ? (E.addRange(x), E.extend(h.node, h.offset))
                        : (x.setEnd(h.node, h.offset), E.addRange(x)));
                  }
                }
              }
            }
            for (_ = [], E = f; (E = E.parentNode); )
              E.nodeType === 1 &&
                _.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
            for (
              typeof f.focus == 'function' && f.focus(), f = 0;
              f < _.length;
              f++
            ) {
              var T = _[f];
              ((T.element.scrollLeft = T.left), (T.element.scrollTop = T.top));
            }
          }
          ((Ji = !!as), (ns = as = null));
        } finally {
          ((re = n), (H.p = a), (A.T = l));
        }
      }
      ((e.current = t), (He = 2));
    }
  }
  function Zo() {
    if (He === 2) {
      He = 0;
      var e = gl,
        t = Ta,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = A.T), (A.T = null));
        var a = H.p;
        H.p = 2;
        var n = re;
        re |= 4;
        try {
          po(e, t.alternate, t);
        } finally {
          ((re = n), (H.p = a), (A.T = l));
        }
      }
      He = 3;
    }
  }
  function Vo() {
    if (He === 4 || He === 3) {
      ((He = 0), Om());
      var e = gl,
        t = Ta,
        l = It,
        a = Co;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (He = 5)
        : ((He = 0), (Ta = gl = null), Ko(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (vl = null),
        ru(l),
        (t = t.stateNode),
        it && typeof it.onCommitFiberRoot == 'function')
      )
        try {
          it.onCommitFiberRoot(Ba, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = A.T), (n = H.p), (H.p = 2), (A.T = null));
        try {
          for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
            var f = a[u];
            i(f.value, { componentStack: f.stack });
          }
        } finally {
          ((A.T = t), (H.p = n));
        }
      }
      ((It & 3) !== 0 && Hi(),
        Dt(e),
        (n = e.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? e === Zc
            ? xn++
            : ((xn = 0), (Zc = e))
          : (xn = 0),
        bn(0));
    }
  }
  function Ko(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Pa(t)));
  }
  function Hi() {
    return (Qo(), Zo(), Vo(), Jo());
  }
  function Jo() {
    if (He !== 5) return !1;
    var e = gl,
      t = Xc;
    Xc = 0;
    var l = ru(It),
      a = A.T,
      n = H.p;
    try {
      ((H.p = 32 > l ? 32 : l), (A.T = null), (l = Qc), (Qc = null));
      var i = gl,
        u = It;
      if (((He = 0), (Ta = gl = null), (It = 0), (re & 6) !== 0))
        throw Error(r(331));
      var f = re;
      if (
        ((re |= 4),
        To(i.current),
        zo(i, i.current, u, l),
        (re = f),
        bn(0, !1),
        it && typeof it.onPostCommitFiberRoot == 'function')
      )
        try {
          it.onPostCommitFiberRoot(Ba, i);
        } catch {}
      return !0;
    } finally {
      ((H.p = n), (A.T = a), Ko(e, t));
    }
  }
  function ko(e, t, l) {
    ((t = yt(l, t)),
      (t = jc(e.stateNode, t, 2)),
      (e = fl(e, t, 2)),
      e !== null && (Ga(e, 2), Dt(e)));
  }
  function me(e, t, l) {
    if (e.tag === 3) ko(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ko(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof a.componentDidCatch == 'function' &&
              (vl === null || !vl.has(a)))
          ) {
            ((e = yt(l, e)),
              (l = kr(2)),
              (a = fl(t, l, 2)),
              a !== null && (Wr(l, a, t, e), Ga(a, 2), Dt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new lh();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((Gc = !0), n.add(l), (e = ch.bind(null, e, t, l)), t.then(e, e));
  }
  function ch(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      xe === e &&
        (P & l) === l &&
        (Me === 4 || (Me === 3 && (P & 62914560) === P && 300 > nt() - _i)
          ? (re & 2) === 0 && _a(e, 0)
          : (Yc |= l),
        Aa === P && (Aa = 0)),
      Dt(e));
  }
  function Wo(e, t) {
    (t === 0 && (t = Ls()), (e = Hl(e, t)), e !== null && (Ga(e, t), Dt(e)));
  }
  function sh(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), Wo(e, l));
  }
  function fh(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(t), Wo(e, l));
  }
  function rh(e, t) {
    return uu(e, t);
  }
  var qi = null,
    Ca = null,
    kc = !1,
    Bi = !1,
    Wc = !1,
    pl = 0;
  function Dt(e) {
    (e !== Ca &&
      e.next === null &&
      (Ca === null ? (qi = Ca = e) : (Ca = Ca.next = e)),
      (Bi = !0),
      kc || ((kc = !0), dh()));
  }
  function bn(e, t) {
    if (!Wc && Bi) {
      Wc = !0;
      do
        for (var l = !1, a = qi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes,
                f = a.pingedLanes;
              ((i = (1 << (31 - ut(42 | e) + 1)) - 1),
                (i &= n & ~(u & ~f)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((l = !0), Po(a, i));
          } else
            ((i = P),
              (i = Ln(
                a,
                a === xe ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || wa(a, i) || ((l = !0), Po(a, i)));
          a = a.next;
        }
      while (l);
      Wc = !1;
    }
  }
  function oh() {
    $o();
  }
  function $o() {
    Bi = kc = !1;
    var e = 0;
    pl !== 0 && jh() && (e = pl);
    for (var t = nt(), l = null, a = qi; a !== null; ) {
      var n = a.next,
        i = Fo(a, t);
      (i === 0
        ? ((a.next = null),
          l === null ? (qi = n) : (l.next = n),
          n === null && (Ca = l))
        : ((l = a), (e !== 0 || (i & 3) !== 0) && (Bi = !0)),
        (a = n));
    }
    ((He !== 0 && He !== 5) || bn(e), pl !== 0 && (pl = 0));
  }
  function Fo(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;
    ) {
      var u = 31 - ut(i),
        f = 1 << u,
        m = n[u];
      (m === -1
        ? ((f & l) === 0 || (f & a) !== 0) && (n[u] = wm(f, t))
        : m <= t && (e.expiredLanes |= f),
        (i &= ~f));
    }
    if (
      ((t = xe),
      (l = P),
      (l = Ln(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (de === 2 || de === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && cu(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || wa(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && cu(a), ru(l))) {
        case 2:
        case 8:
          l = Gs;
          break;
        case 32:
          l = Bn;
          break;
        case 268435456:
          l = Ys;
          break;
        default:
          l = Bn;
      }
      return (
        (a = Io.bind(null, e)),
        (l = uu(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && cu(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Io(e, t) {
    if (He !== 0 && He !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Hi() && e.callbackNode !== l) return null;
    var a = P;
    return (
      (a = Ln(
        e,
        e === xe ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Do(e, a, t),
          Fo(e, nt()),
          e.callbackNode != null && e.callbackNode === l
            ? Io.bind(null, e)
            : null)
    );
  }
  function Po(e, t) {
    if (Hi()) return null;
    Do(e, t, !0);
  }
  function dh() {
    Eh(function () {
      (re & 6) !== 0 ? uu(ws, oh) : $o();
    });
  }
  function $c() {
    if (pl === 0) {
      var e = ga;
      (e === 0 && ((e = wn), (wn <<= 1), (wn & 261888) === 0 && (wn = 256)),
        (pl = e));
    }
    return pl;
  }
  function ed(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Vn('' + e);
  }
  function td(e, t) {
    var l = t.ownerDocument.createElement('input');
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute('form', e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function mh(e, t, l, a, n) {
    if (t === 'submit' && l && l.stateNode === n) {
      var i = ed((n[$e] || null).action),
        u = a.submitter;
      u &&
        ((t = (t = u[$e] || null)
          ? ed(t.formAction)
          : u.getAttribute('formAction')),
        t !== null && ((i = t), (u = null)));
      var f = new Wn('action', 'action', null, a, n);
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (pl !== 0) {
                  var m = u ? td(n, u) : new FormData(n);
                  gc(
                    l,
                    { pending: !0, data: m, method: n.method, action: i },
                    null,
                    m
                  );
                }
              } else
                typeof i == 'function' &&
                  (f.preventDefault(),
                  (m = u ? td(n, u) : new FormData(n)),
                  gc(
                    l,
                    { pending: !0, data: m, method: n.method, action: i },
                    i,
                    m
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Fc = 0; Fc < Du.length; Fc++) {
    var Ic = Du[Fc],
      hh = Ic.toLowerCase(),
      vh = Ic[0].toUpperCase() + Ic.slice(1);
    zt(hh, 'on' + vh);
  }
  (zt(Cf, 'onAnimationEnd'),
    zt(Uf, 'onAnimationIteration'),
    zt(Df, 'onAnimationStart'),
    zt('dblclick', 'onDoubleClick'),
    zt('focusin', 'onFocus'),
    zt('focusout', 'onBlur'),
    zt(C0, 'onTransitionRun'),
    zt(U0, 'onTransitionStart'),
    zt(D0, 'onTransitionCancel'),
    zt(Rf, 'onTransitionEnd'),
    la('onMouseEnter', ['mouseout', 'mouseover']),
    la('onMouseLeave', ['mouseout', 'mouseover']),
    la('onPointerEnter', ['pointerout', 'pointerover']),
    la('onPointerLeave', ['pointerout', 'pointerover']),
    Cl(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    Cl(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Cl('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Cl(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Cl(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Cl(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var Sn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    gh = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Sn)
    );
  function ld(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var f = a[u],
              m = f.instance,
              b = f.currentTarget;
            if (((f = f.listener), m !== i && n.isPropagationStopped()))
              break e;
            ((i = f), (n.currentTarget = b));
            try {
              i(n);
            } catch (M) {
              In(M);
            }
            ((n.currentTarget = null), (i = m));
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((f = a[u]),
              (m = f.instance),
              (b = f.currentTarget),
              (f = f.listener),
              m !== i && n.isPropagationStopped())
            )
              break e;
            ((i = f), (n.currentTarget = b));
            try {
              i(n);
            } catch (M) {
              In(M);
            }
            ((n.currentTarget = null), (i = m));
          }
      }
    }
  }
  function I(e, t) {
    var l = t[ou];
    l === void 0 && (l = t[ou] = new Set());
    var a = e + '__bubble';
    l.has(a) || (ad(t, e, 2, !1), l.add(a));
  }
  function Pc(e, t, l) {
    var a = 0;
    (t && (a |= 4), ad(l, e, a, t));
  }
  var wi = '_reactListening' + Math.random().toString(36).slice(2);
  function es(e) {
    if (!e[wi]) {
      ((e[wi] = !0),
        ks.forEach(function (l) {
          l !== 'selectionchange' && (gh.has(l) || Pc(l, !1, e), Pc(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[wi] || ((t[wi] = !0), Pc('selectionchange', !1, t));
    }
  }
  function ad(e, t, l, a) {
    switch (Ud(t)) {
      case 2:
        var n = Zh;
        break;
      case 8:
        n = Vh;
        break;
      default:
        n = vs;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !bu ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function ts(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var m = u.tag;
              if ((m === 3 || m === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (((u = Pl(f)), u === null)) return;
            if (((m = u.tag), m === 5 || m === 6 || m === 26 || m === 27)) {
              a = i = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    cf(function () {
      var b = i,
        M = pu(l),
        _ = [];
      e: {
        var S = Hf.get(e);
        if (S !== void 0) {
          var E = Wn,
            B = e;
          switch (e) {
            case 'keypress':
              if (Jn(l) === 0) break e;
            case 'keydown':
            case 'keyup':
              E = f0;
              break;
            case 'focusin':
              ((B = 'focus'), (E = Eu));
              break;
            case 'focusout':
              ((B = 'blur'), (E = Eu));
              break;
            case 'beforeblur':
            case 'afterblur':
              E = Eu;
              break;
            case 'click':
              if (l.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              E = rf;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              E = Fm;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              E = d0;
              break;
            case Cf:
            case Uf:
            case Df:
              E = e0;
              break;
            case Rf:
              E = h0;
              break;
            case 'scroll':
            case 'scrollend':
              E = Wm;
              break;
            case 'wheel':
              E = g0;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              E = l0;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              E = df;
              break;
            case 'toggle':
            case 'beforetoggle':
              E = p0;
          }
          var Q = (t & 4) !== 0,
            ye = !Q && (e === 'scroll' || e === 'scrollend'),
            g = Q ? (S !== null ? S + 'Capture' : null) : S;
          Q = [];
          for (var h = b, x; h !== null; ) {
            var T = h;
            if (
              ((x = T.stateNode),
              (T = T.tag),
              (T !== 5 && T !== 26 && T !== 27) ||
                x === null ||
                g === null ||
                ((T = Xa(h, g)), T != null && Q.push(jn(h, T, x))),
              ye)
            )
              break;
            h = h.return;
          }
          0 < Q.length &&
            ((S = new E(S, B, null, l, M)), _.push({ event: S, listeners: Q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((S = e === 'mouseover' || e === 'pointerover'),
            (E = e === 'mouseout' || e === 'pointerout'),
            S &&
              l !== yu &&
              (B = l.relatedTarget || l.fromElement) &&
              (Pl(B) || B[Il]))
          )
            break e;
          if (
            (E || S) &&
            ((S =
              M.window === M
                ? M
                : (S = M.ownerDocument)
                  ? S.defaultView || S.parentWindow
                  : window),
            E
              ? ((B = l.relatedTarget || l.toElement),
                (E = b),
                (B = B ? Pl(B) : null),
                B !== null &&
                  ((ye = j(B)),
                  (Q = B.tag),
                  B !== ye || (Q !== 5 && Q !== 27 && Q !== 6)) &&
                  (B = null))
              : ((E = null), (B = b)),
            E !== B)
          ) {
            if (
              ((Q = rf),
              (T = 'onMouseLeave'),
              (g = 'onMouseEnter'),
              (h = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Q = df),
                (T = 'onPointerLeave'),
                (g = 'onPointerEnter'),
                (h = 'pointer')),
              (ye = E == null ? S : La(E)),
              (x = B == null ? S : La(B)),
              (S = new Q(T, h + 'leave', E, l, M)),
              (S.target = ye),
              (S.relatedTarget = x),
              (T = null),
              Pl(M) === b &&
                ((Q = new Q(g, h + 'enter', B, l, M)),
                (Q.target = x),
                (Q.relatedTarget = ye),
                (T = Q)),
              (ye = T),
              E && B)
            )
              t: {
                for (Q = yh, g = E, h = B, x = 0, T = g; T; T = Q(T)) x++;
                T = 0;
                for (var Y = h; Y; Y = Q(Y)) T++;
                for (; 0 < x - T; ) ((g = Q(g)), x--);
                for (; 0 < T - x; ) ((h = Q(h)), T--);
                for (; x--; ) {
                  if (g === h || (h !== null && g === h.alternate)) {
                    Q = g;
                    break t;
                  }
                  ((g = Q(g)), (h = Q(h)));
                }
                Q = null;
              }
            else Q = null;
            (E !== null && nd(_, S, E, Q, !1),
              B !== null && ye !== null && nd(_, ye, B, Q, !0));
          }
        }
        e: {
          if (
            ((S = b ? La(b) : window),
            (E = S.nodeName && S.nodeName.toLowerCase()),
            E === 'select' || (E === 'input' && S.type === 'file'))
          )
            var se = bf;
          else if (pf(S))
            if (Sf) se = T0;
            else {
              se = M0;
              var G = z0;
            }
          else
            ((E = S.nodeName),
              !E ||
              E.toLowerCase() !== 'input' ||
              (S.type !== 'checkbox' && S.type !== 'radio')
                ? b && gu(b.elementType) && (se = bf)
                : (se = A0));
          if (se && (se = se(e, b))) {
            xf(_, se, l, M);
            break e;
          }
          (G && G(e, S, b),
            e === 'focusout' &&
              b &&
              S.type === 'number' &&
              b.memoizedProps.value != null &&
              vu(S, 'number', S.value));
        }
        switch (((G = b ? La(b) : window), e)) {
          case 'focusin':
            (pf(G) || G.contentEditable === 'true') &&
              ((sa = G), (Ou = b), ($a = null));
            break;
          case 'focusout':
            $a = Ou = sa = null;
            break;
          case 'mousedown':
            Cu = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Cu = !1), _f(_, l, M));
            break;
          case 'selectionchange':
            if (O0) break;
          case 'keydown':
          case 'keyup':
            _f(_, l, M);
        }
        var k;
        if (Mu)
          e: {
            switch (e) {
              case 'compositionstart':
                var ee = 'onCompositionStart';
                break e;
              case 'compositionend':
                ee = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ee = 'onCompositionUpdate';
                break e;
            }
            ee = void 0;
          }
        else
          ca
            ? gf(e, l) && (ee = 'onCompositionEnd')
            : e === 'keydown' &&
              l.keyCode === 229 &&
              (ee = 'onCompositionStart');
        (ee &&
          (mf &&
            l.locale !== 'ko' &&
            (ca || ee !== 'onCompositionStart'
              ? ee === 'onCompositionEnd' && ca && (k = sf())
              : ((ll = M),
                (Su = 'value' in ll ? ll.value : ll.textContent),
                (ca = !0))),
          (G = Gi(b, ee)),
          0 < G.length &&
            ((ee = new of(ee, e, null, l, M)),
            _.push({ event: ee, listeners: G }),
            k ? (ee.data = k) : ((k = yf(l)), k !== null && (ee.data = k)))),
          (k = b0 ? S0(e, l) : j0(e, l)) &&
            ((ee = Gi(b, 'onBeforeInput')),
            0 < ee.length &&
              ((G = new of('onBeforeInput', 'beforeinput', null, l, M)),
              _.push({ event: G, listeners: ee }),
              (G.data = k))),
          mh(_, e, b, l, M));
      }
      ld(_, t);
    });
  }
  function jn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function Gi(e, t) {
    for (var l = t + 'Capture', a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Xa(e, l)),
          n != null && a.unshift(jn(e, n, i)),
          (n = Xa(e, t)),
          n != null && a.push(jn(e, n, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function yh(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function nd(e, t, l, a, n) {
    for (var i = t._reactName, u = []; l !== null && l !== a; ) {
      var f = l,
        m = f.alternate,
        b = f.stateNode;
      if (((f = f.tag), m !== null && m === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        b === null ||
        ((m = b),
        n
          ? ((b = Xa(l, i)), b != null && u.unshift(jn(l, b, m)))
          : n || ((b = Xa(l, i)), b != null && u.push(jn(l, b, m)))),
        (l = l.return));
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var ph = /\r\n?/g,
    xh = /\u0000|\uFFFD/g;
  function id(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        ph,
        `
`
      )
      .replace(xh, '');
  }
  function ud(e, t) {
    return ((t = id(t)), id(e) === t);
  }
  function ge(e, t, l, a, n, i) {
    switch (l) {
      case 'children':
        typeof a == 'string'
          ? t === 'body' || (t === 'textarea' && a === '') || na(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') &&
            t !== 'body' &&
            na(e, '' + a);
        break;
      case 'className':
        Qn(e, 'class', a);
        break;
      case 'tabIndex':
        Qn(e, 'tabindex', a);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Qn(e, l, a);
        break;
      case 'style':
        nf(e, a, i);
        break;
      case 'data':
        if (t !== 'object') {
          Qn(e, 'data', a);
          break;
        }
      case 'src':
      case 'href':
        if (a === '' && (t !== 'a' || l !== 'href')) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'symbol' ||
          typeof a == 'boolean'
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = Vn('' + a)), e.setAttribute(l, a));
        break;
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == 'function' &&
            (l === 'formAction'
              ? (t !== 'input' && ge(e, t, 'name', n.name, n, null),
                ge(e, t, 'formEncType', n.formEncType, n, null),
                ge(e, t, 'formMethod', n.formMethod, n, null),
                ge(e, t, 'formTarget', n.formTarget, n, null))
              : (ge(e, t, 'encType', n.encType, n, null),
                ge(e, t, 'method', n.method, n, null),
                ge(e, t, 'target', n.target, n, null)));
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          e.removeAttribute(l);
          break;
        }
        ((a = Vn('' + a)), e.setAttribute(l, a));
        break;
      case 'onClick':
        a != null && (e.onclick = Bt);
        break;
      case 'onScroll':
        a != null && I('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && I('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        e.multiple = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'muted':
        e.muted = a && typeof a != 'function' && typeof a != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          a == null ||
          typeof a == 'function' ||
          typeof a == 'boolean' ||
          typeof a == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((l = Vn('' + a)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '' + a)
          : e.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol'
          ? e.setAttribute(l, '')
          : e.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        a === !0
          ? e.setAttribute(l, '')
          : a !== !1 &&
              a != null &&
              typeof a != 'function' &&
              typeof a != 'symbol'
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case 'popover':
        (I('beforetoggle', e), I('toggle', e), Xn(e, 'popover', a));
        break;
      case 'xlinkActuate':
        qt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a);
        break;
      case 'xlinkArcrole':
        qt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a);
        break;
      case 'xlinkRole':
        qt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', a);
        break;
      case 'xlinkShow':
        qt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', a);
        break;
      case 'xlinkTitle':
        qt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', a);
        break;
      case 'xlinkType':
        qt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', a);
        break;
      case 'xmlBase':
        qt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a);
        break;
      case 'xmlLang':
        qt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a);
        break;
      case 'xmlSpace':
        qt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a);
        break;
      case 'is':
        Xn(e, 'is', a);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = Jm.get(l) || l), Xn(e, l, a));
    }
  }
  function ls(e, t, l, a, n, i) {
    switch (l) {
      case 'style':
        nf(e, a, i);
        break;
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(r(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof a == 'string'
          ? na(e, a)
          : (typeof a == 'number' || typeof a == 'bigint') && na(e, '' + a);
        break;
      case 'onScroll':
        a != null && I('scroll', e);
        break;
      case 'onScrollEnd':
        a != null && I('scrollend', e);
        break;
      case 'onClick':
        a != null && (e.onclick = Bt);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Ws.hasOwnProperty(l))
          e: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((n = l.endsWith('Capture')),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[$e] || null),
              (i = i != null ? i[l] : null),
              typeof i == 'function' && e.removeEventListener(t, i, n),
              typeof a == 'function')
            ) {
              (typeof i != 'function' &&
                i !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, '')
                : Xn(e, l, a);
          }
    }
  }
  function Qe(e, t, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (I('error', e), I('load', e));
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case 'src':
                  a = !0;
                  break;
                case 'srcSet':
                  n = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(r(137, t));
                default:
                  ge(e, t, i, u, l, null);
              }
          }
        (n && ge(e, t, 'srcSet', l.srcSet, l, null),
          a && ge(e, t, 'src', l.src, l, null));
        return;
      case 'input':
        I('invalid', e);
        var f = (i = u = n = null),
          m = null,
          b = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var M = l[a];
            if (M != null)
              switch (a) {
                case 'name':
                  n = M;
                  break;
                case 'type':
                  u = M;
                  break;
                case 'checked':
                  m = M;
                  break;
                case 'defaultChecked':
                  b = M;
                  break;
                case 'value':
                  i = M;
                  break;
                case 'defaultValue':
                  f = M;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (M != null) throw Error(r(137, t));
                  break;
                default:
                  ge(e, t, a, M, l, null);
              }
          }
        ef(e, i, f, m, b, u, n, !1);
        return;
      case 'select':
        (I('invalid', e), (a = u = i = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((f = l[n]), f != null))
            switch (n) {
              case 'value':
                i = f;
                break;
              case 'defaultValue':
                u = f;
                break;
              case 'multiple':
                a = f;
              default:
                ge(e, t, n, f, l, null);
            }
        ((t = i),
          (l = u),
          (e.multiple = !!a),
          t != null ? aa(e, !!a, t, !1) : l != null && aa(e, !!a, l, !0));
        return;
      case 'textarea':
        (I('invalid', e), (i = n = a = null));
        for (u in l)
          if (l.hasOwnProperty(u) && ((f = l[u]), f != null))
            switch (u) {
              case 'value':
                a = f;
                break;
              case 'defaultValue':
                n = f;
                break;
              case 'children':
                i = f;
                break;
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(r(91));
                break;
              default:
                ge(e, t, u, f, l, null);
            }
        lf(e, a, n, i);
        return;
      case 'option':
        for (m in l)
          if (l.hasOwnProperty(m) && ((a = l[m]), a != null))
            switch (m) {
              case 'selected':
                e.selected =
                  a && typeof a != 'function' && typeof a != 'symbol';
                break;
              default:
                ge(e, t, m, a, l, null);
            }
        return;
      case 'dialog':
        (I('beforetoggle', e), I('toggle', e), I('cancel', e), I('close', e));
        break;
      case 'iframe':
      case 'object':
        I('load', e);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < Sn.length; a++) I(Sn[a], e);
        break;
      case 'image':
        (I('error', e), I('load', e));
        break;
      case 'details':
        I('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (I('error', e), I('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (b in l)
          if (l.hasOwnProperty(b) && ((a = l[b]), a != null))
            switch (b) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(r(137, t));
              default:
                ge(e, t, b, a, l, null);
            }
        return;
      default:
        if (gu(t)) {
          for (M in l)
            l.hasOwnProperty(M) &&
              ((a = l[M]), a !== void 0 && ls(e, t, M, a, l, void 0));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && ((a = l[f]), a != null && ge(e, t, f, a, l, null));
  }
  function bh(e, t, l, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var n = null,
          i = null,
          u = null,
          f = null,
          m = null,
          b = null,
          M = null;
        for (E in l) {
          var _ = l[E];
          if (l.hasOwnProperty(E) && _ != null)
            switch (E) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                m = _;
              default:
                a.hasOwnProperty(E) || ge(e, t, E, null, a, _);
            }
        }
        for (var S in a) {
          var E = a[S];
          if (((_ = l[S]), a.hasOwnProperty(S) && (E != null || _ != null)))
            switch (S) {
              case 'type':
                i = E;
                break;
              case 'name':
                n = E;
                break;
              case 'checked':
                b = E;
                break;
              case 'defaultChecked':
                M = E;
                break;
              case 'value':
                u = E;
                break;
              case 'defaultValue':
                f = E;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (E != null) throw Error(r(137, t));
                break;
              default:
                E !== _ && ge(e, t, S, E, a, _);
            }
        }
        hu(e, u, f, m, b, M, i, n);
        return;
      case 'select':
        E = u = f = S = null;
        for (i in l)
          if (((m = l[i]), l.hasOwnProperty(i) && m != null))
            switch (i) {
              case 'value':
                break;
              case 'multiple':
                E = m;
              default:
                a.hasOwnProperty(i) || ge(e, t, i, null, a, m);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (m = l[n]),
            a.hasOwnProperty(n) && (i != null || m != null))
          )
            switch (n) {
              case 'value':
                S = i;
                break;
              case 'defaultValue':
                f = i;
                break;
              case 'multiple':
                u = i;
              default:
                i !== m && ge(e, t, n, i, a, m);
            }
        ((t = f),
          (l = u),
          (a = E),
          S != null
            ? aa(e, !!l, S, !1)
            : !!a != !!l &&
              (t != null ? aa(e, !!l, t, !0) : aa(e, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        E = S = null;
        for (f in l)
          if (
            ((n = l[f]),
            l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ge(e, t, f, null, a, n);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (i = l[u]),
            a.hasOwnProperty(u) && (n != null || i != null))
          )
            switch (u) {
              case 'value':
                S = n;
                break;
              case 'defaultValue':
                E = n;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (n != null) throw Error(r(91));
                break;
              default:
                n !== i && ge(e, t, u, n, a, i);
            }
        tf(e, S, E);
        return;
      case 'option':
        for (var B in l)
          if (
            ((S = l[B]),
            l.hasOwnProperty(B) && S != null && !a.hasOwnProperty(B))
          )
            switch (B) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                ge(e, t, B, null, a, S);
            }
        for (m in a)
          if (
            ((S = a[m]),
            (E = l[m]),
            a.hasOwnProperty(m) && S !== E && (S != null || E != null))
          )
            switch (m) {
              case 'selected':
                e.selected =
                  S && typeof S != 'function' && typeof S != 'symbol';
                break;
              default:
                ge(e, t, m, S, a, E);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Q in l)
          ((S = l[Q]),
            l.hasOwnProperty(Q) &&
              S != null &&
              !a.hasOwnProperty(Q) &&
              ge(e, t, Q, null, a, S));
        for (b in a)
          if (
            ((S = a[b]),
            (E = l[b]),
            a.hasOwnProperty(b) && S !== E && (S != null || E != null))
          )
            switch (b) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (S != null) throw Error(r(137, t));
                break;
              default:
                ge(e, t, b, S, a, E);
            }
        return;
      default:
        if (gu(t)) {
          for (var ye in l)
            ((S = l[ye]),
              l.hasOwnProperty(ye) &&
                S !== void 0 &&
                !a.hasOwnProperty(ye) &&
                ls(e, t, ye, void 0, a, S));
          for (M in a)
            ((S = a[M]),
              (E = l[M]),
              !a.hasOwnProperty(M) ||
                S === E ||
                (S === void 0 && E === void 0) ||
                ls(e, t, M, S, a, E));
          return;
        }
    }
    for (var g in l)
      ((S = l[g]),
        l.hasOwnProperty(g) &&
          S != null &&
          !a.hasOwnProperty(g) &&
          ge(e, t, g, null, a, S));
    for (_ in a)
      ((S = a[_]),
        (E = l[_]),
        !a.hasOwnProperty(_) ||
          S === E ||
          (S == null && E == null) ||
          ge(e, t, _, S, a, E));
  }
  function cd(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function Sh() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, l = performance.getEntriesByType('resource'), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          i = n.transferSize,
          u = n.initiatorType,
          f = n.duration;
        if (i && f && cd(u)) {
          for (u = 0, f = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a],
              b = m.startTime;
            if (b > f) break;
            var M = m.transferSize,
              _ = m.initiatorType;
            M &&
              cd(_) &&
              ((m = m.responseEnd), (u += M * (m < f ? 1 : (f - b) / (m - b))));
          }
          if ((--a, (t += (8 * (i + u)) / (n.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var as = null,
    ns = null;
  function Yi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function sd(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function fd(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function is(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var us = null;
  function jh() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === us
        ? !1
        : ((us = e), !0)
      : ((us = null), !1);
  }
  var rd = typeof setTimeout == 'function' ? setTimeout : void 0,
    Nh = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    od = typeof Promise == 'function' ? Promise : void 0,
    Eh =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof od < 'u'
          ? function (e) {
              return od.resolve(null).then(e).catch(zh);
            }
          : rd;
  function zh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function xl(e) {
    return e === 'head';
  }
  function dd(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === '/$' || l === '/&')) {
          if (a === 0) {
            (e.removeChild(n), Ha(t));
            return;
          }
          a--;
        } else if (
          l === '$' ||
          l === '$?' ||
          l === '$~' ||
          l === '$!' ||
          l === '&'
        )
          a++;
        else if (l === 'html') Nn(e.ownerDocument.documentElement);
        else if (l === 'head') {
          ((l = e.ownerDocument.head), Nn(l));
          for (var i = l.firstChild; i; ) {
            var u = i.nextSibling,
              f = i.nodeName;
            (i[Ya] ||
              f === 'SCRIPT' ||
              f === 'STYLE' ||
              (f === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
              l.removeChild(i),
              (i = u));
          }
        } else l === 'body' && Nn(e.ownerDocument.body);
      l = n;
    } while (l);
    Ha(t);
  }
  function md(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? t
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = 'none'))
            : ((l.style.display = l._stashedDisplay || ''),
              l.getAttribute('style') === '' && l.removeAttribute('style'))
          : l.nodeType === 3 &&
            (t
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ''))
              : (l.nodeValue = l._stashedText || '')),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === '/$')) {
          if (e === 0) break;
          e--;
        } else (l !== '$' && l !== '$?' && l !== '$~' && l !== '$!') || e++;
      l = a;
    } while (l);
  }
  function cs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (cs(l), du(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(l);
    }
  }
  function Mh(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (a) {
        if (!e[Ya])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((i = e.getAttribute('rel')),
                i === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute('href') !==
                  (n.href == null || n.href === '' ? null : n.href) ||
                e.getAttribute('crossorigin') !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute('title') !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((i = e.getAttribute('src')),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute('type') !== (n.type == null ? null : n.type) ||
                  e.getAttribute('crossorigin') !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var i = n.name == null ? null : '' + n.name;
        if (n.type === 'hidden' && e.getAttribute('name') === i) return e;
      } else return e;
      if (((e = jt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ah(e, t, l) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !l) ||
        ((e = jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function hd(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function ss(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function fs(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function Th(e, t) {
    var l = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || l.readyState !== 'loading') t();
    else {
      var a = function () {
        (t(), l.removeEventListener('DOMContentLoaded', a));
      };
      (l.addEventListener('DOMContentLoaded', a), (e._reactRetry = a));
    }
  }
  function jt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' ||
            t === '$!' ||
            t === '$?' ||
            t === '$~' ||
            t === '&' ||
            t === 'F!' ||
            t === 'F')
        )
          break;
        if (t === '/$' || t === '/&') return null;
      }
    }
    return e;
  }
  var rs = null;
  function vd(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '/$' || l === '/&') {
          if (t === 0) return jt(e.nextSibling);
          t--;
        } else
          (l !== '$' && l !== '$!' && l !== '$?' && l !== '$~' && l !== '&') ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function gd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === '$' || l === '$!' || l === '$?' || l === '$~' || l === '&') {
          if (t === 0) return e;
          t--;
        } else (l !== '/$' && l !== '/&') || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function yd(e, t, l) {
    switch (((t = Yi(l)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Nn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    du(e);
  }
  var Nt = new Map(),
    pd = new Set();
  function Li(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Pt = H.d;
  H.d = { f: _h, r: Oh, D: Ch, C: Uh, L: Dh, m: Rh, X: qh, S: Hh, M: Bh };
  function _h() {
    var e = Pt.f(),
      t = Ui();
    return e || t;
  }
  function Oh(e) {
    var t = ea(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Rr(t) : Pt.r(e);
  }
  var Ua = typeof document > 'u' ? null : document;
  function xd(e, t, l) {
    var a = Ua;
    if (a && typeof t == 'string' && t) {
      var n = vt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == 'string' && (n += '[crossorigin="' + l + '"]'),
        pd.has(n) ||
          (pd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement('link')),
            Qe(t, 'link', e),
            qe(t),
            a.head.appendChild(t))));
    }
  }
  function Ch(e) {
    (Pt.D(e), xd('dns-prefetch', e, null));
  }
  function Uh(e, t) {
    (Pt.C(e, t), xd('preconnect', e, t));
  }
  function Dh(e, t, l) {
    Pt.L(e, t, l);
    var a = Ua;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + vt(t) + '"]';
      t === 'image' && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + vt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' &&
            (n += '[imagesizes="' + vt(l.imageSizes) + '"]'))
        : (n += '[href="' + vt(e) + '"]');
      var i = n;
      switch (t) {
        case 'style':
          i = Da(e);
          break;
        case 'script':
          i = Ra(e);
      }
      Nt.has(i) ||
        ((e = U(
          {
            rel: 'preload',
            href: t === 'image' && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        Nt.set(i, e),
        a.querySelector(n) !== null ||
          (t === 'style' && a.querySelector(En(i))) ||
          (t === 'script' && a.querySelector(zn(i))) ||
          ((t = a.createElement('link')),
          Qe(t, 'link', e),
          qe(t),
          a.head.appendChild(t)));
    }
  }
  function Rh(e, t) {
    Pt.m(e, t);
    var l = Ua;
    if (l && e) {
      var a = t && typeof t.as == 'string' ? t.as : 'script',
        n =
          'link[rel="modulepreload"][as="' + vt(a) + '"][href="' + vt(e) + '"]',
        i = n;
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          i = Ra(e);
      }
      if (
        !Nt.has(i) &&
        ((e = U({ rel: 'modulepreload', href: e }, t)),
        Nt.set(i, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(zn(i))) return;
        }
        ((a = l.createElement('link')),
          Qe(a, 'link', e),
          qe(a),
          l.head.appendChild(a));
      }
    }
  }
  function Hh(e, t, l) {
    Pt.S(e, t, l);
    var a = Ua;
    if (a && e) {
      var n = ta(a).hoistableStyles,
        i = Da(e);
      t = t || 'default';
      var u = n.get(i);
      if (!u) {
        var f = { loading: 0, preload: null };
        if ((u = a.querySelector(En(i)))) f.loading = 5;
        else {
          ((e = U({ rel: 'stylesheet', href: e, 'data-precedence': t }, l)),
            (l = Nt.get(i)) && os(e, l));
          var m = (u = a.createElement('link'));
          (qe(m),
            Qe(m, 'link', e),
            (m._p = new Promise(function (b, M) {
              ((m.onload = b), (m.onerror = M));
            })),
            m.addEventListener('load', function () {
              f.loading |= 1;
            }),
            m.addEventListener('error', function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Xi(u, t, a));
        }
        ((u = { type: 'stylesheet', instance: u, count: 1, state: f }),
          n.set(i, u));
      }
    }
  }
  function qh(e, t) {
    Pt.X(e, t);
    var l = Ua;
    if (l && e) {
      var a = ta(l).hoistableScripts,
        n = Ra(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(zn(n))),
        i ||
          ((e = U({ src: e, async: !0 }, t)),
          (t = Nt.get(n)) && ds(e, t),
          (i = l.createElement('script')),
          qe(i),
          Qe(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Bh(e, t) {
    Pt.M(e, t);
    var l = Ua;
    if (l && e) {
      var a = ta(l).hoistableScripts,
        n = Ra(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(zn(n))),
        i ||
          ((e = U({ src: e, async: !0, type: 'module' }, t)),
          (t = Nt.get(n)) && ds(e, t),
          (i = l.createElement('script')),
          qe(i),
          Qe(i, 'link', e),
          l.head.appendChild(i)),
        (i = { type: 'script', instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function bd(e, t, l, a) {
    var n = (n = $.current) ? Li(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((t = Da(l.href)),
            (l = ta(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: 'style', instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          e = Da(l.href);
          var i = ta(n).hoistableStyles,
            u = i.get(e);
          if (
            (u ||
              ((n = n.ownerDocument || n),
              (u = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, u),
              (i = n.querySelector(En(e))) &&
                !i._p &&
                ((u.instance = i), (u.state.loading = 5)),
              Nt.has(e) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Nt.set(e, l),
                i || wh(n, e, l, u.state))),
            t && a === null)
          )
            throw Error(r(528, ''));
          return u;
        }
        if (t && a !== null) throw Error(r(529, ''));
        return null;
      case 'script':
        return (
          (t = l.async),
          (l = l.src),
          typeof l == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = Ra(l)),
              (l = ta(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function Da(e) {
    return 'href="' + vt(e) + '"';
  }
  function En(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Sd(e) {
    return U({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function wh(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (a.loading = 1)
      : ((t = e.createElement('link')),
        (a.preload = t),
        t.addEventListener('load', function () {
          return (a.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (a.loading |= 2);
        }),
        Qe(t, 'link', l),
        qe(t),
        e.head.appendChild(t));
  }
  function Ra(e) {
    return '[src="' + vt(e) + '"]';
  }
  function zn(e) {
    return 'script[async]' + e;
  }
  function jd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var a = e.querySelector('style[data-href~="' + vt(l.href) + '"]');
          if (a) return ((t.instance = a), qe(a), a);
          var n = U({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement('style')),
            qe(a),
            Qe(a, 'style', n),
            Xi(a, l.precedence, e),
            (t.instance = a)
          );
        case 'stylesheet':
          n = Da(l.href);
          var i = e.querySelector(En(n));
          if (i) return ((t.state.loading |= 4), (t.instance = i), qe(i), i);
          ((a = Sd(l)),
            (n = Nt.get(n)) && os(a, n),
            (i = (e.ownerDocument || e).createElement('link')),
            qe(i));
          var u = i;
          return (
            (u._p = new Promise(function (f, m) {
              ((u.onload = f), (u.onerror = m));
            })),
            Qe(i, 'link', a),
            (t.state.loading |= 4),
            Xi(i, l.precedence, e),
            (t.instance = i)
          );
        case 'script':
          return (
            (i = Ra(l.src)),
            (n = e.querySelector(zn(i)))
              ? ((t.instance = n), qe(n), n)
              : ((a = l),
                (n = Nt.get(i)) && ((a = U({}, l)), ds(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement('script')),
                qe(n),
                Qe(n, 'link', a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case 'void':
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Xi(a, l.precedence, e));
    return t.instance;
  }
  function Xi(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        u = 0;
      u < a.length;
      u++
    ) {
      var f = a[u];
      if (f.dataset.precedence === t) i = f;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function os(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function ds(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Qi = null;
  function Nd(e, t, l) {
    if (Qi === null) {
      var a = new Map(),
        n = (Qi = new Map());
      n.set(l, a);
    } else ((n = Qi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[Ya] ||
          i[Ge] ||
          (e === 'link' && i.getAttribute('rel') === 'stylesheet')
        ) &&
        i.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var u = i.getAttribute(t) || '';
        u = e + u;
        var f = a.get(u);
        f ? f.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function Ed(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === 'title' ? e.querySelector('head > title') : null
      ));
  }
  function Gh(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled),
              typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function zd(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function Yh(e, t, l, a) {
    if (
      l.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Da(a.href),
          i = t.querySelector(En(n));
        if (i) {
          ((t = i._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Zi.bind(e)), t.then(e, e)),
            (l.state.loading |= 4),
            (l.instance = i),
            qe(i));
          return;
        }
        ((i = t.ownerDocument || t),
          (a = Sd(a)),
          (n = Nt.get(n)) && os(a, n),
          (i = i.createElement('link')),
          qe(i));
        var u = i;
        ((u._p = new Promise(function (f, m) {
          ((u.onload = f), (u.onerror = m));
        })),
          Qe(i, 'link', a),
          (l.instance = i));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(l, t),
        (t = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (e.count++,
          (l = Zi.bind(e)),
          t.addEventListener('load', l),
          t.addEventListener('error', l)));
    }
  }
  var ms = 0;
  function Lh(e, t) {
    return (
      e.stylesheets && e.count === 0 && Ki(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Ki(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                ((e.unsuspend = null), i());
              }
            }, 6e4 + t);
            0 < e.imgBytes && ms === 0 && (ms = 62500 * Sh());
            var n = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Ki(e, e.stylesheets), e.unsuspend))
                ) {
                  var i = e.unsuspend;
                  ((e.unsuspend = null), i());
                }
              },
              (e.imgBytes > ms ? 50 : 800) + t
            );
            return (
              (e.unsuspend = l),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Zi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ki(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Vi = null;
  function Ki(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Vi = new Map()),
        t.forEach(Xh, e),
        (Vi = null),
        Zi.call(e)));
  }
  function Xh(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Vi.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), Vi.set(e, l));
        for (
          var n = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var u = n[i];
          (u.nodeName === 'LINK' || u.getAttribute('media') !== 'not all') &&
            (l.set(u.dataset.precedence, u), (a = u));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (u = n.getAttribute('data-precedence')),
        (i = l.get(u) || a),
        i === a && l.set(null, n),
        l.set(u, n),
        this.count++,
        (a = Zi.bind(this)),
        n.addEventListener('load', a),
        n.addEventListener('error', a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Mn = {
    $$typeof: le,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0,
  };
  function Qh(e, t, l, a, n, i, u, f, m) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = su(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = su(0)),
      (this.hiddenUpdates = su(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = m),
      (this.incompleteTransitions = new Map()));
  }
  function Md(e, t, l, a, n, i, u, f, m, b, M, _) {
    return (
      (e = new Qh(e, t, l, u, m, b, M, _, f)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = st(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = Ku()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      $u(i),
      e
    );
  }
  function Ad(e) {
    return e ? ((e = oa), e) : oa;
  }
  function Td(e, t, l, a, n, i) {
    ((n = Ad(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = sl(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = fl(e, a, t)),
      l !== null && (lt(l, e, t), an(l, e, t)));
  }
  function _d(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function hs(e, t) {
    (_d(e, t), (e = e.alternate) && _d(e, t));
  }
  function Od(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Hl(e, 67108864);
      (t !== null && lt(t, e, 67108864), hs(e, 67108864));
    }
  }
  function Cd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = mt();
      t = fu(t);
      var l = Hl(e, t);
      (l !== null && lt(l, e, t), hs(e, t));
    }
  }
  var Ji = !0;
  function Zh(e, t, l, a) {
    var n = A.T;
    A.T = null;
    var i = H.p;
    try {
      ((H.p = 2), vs(e, t, l, a));
    } finally {
      ((H.p = i), (A.T = n));
    }
  }
  function Vh(e, t, l, a) {
    var n = A.T;
    A.T = null;
    var i = H.p;
    try {
      ((H.p = 8), vs(e, t, l, a));
    } finally {
      ((H.p = i), (A.T = n));
    }
  }
  function vs(e, t, l, a) {
    if (Ji) {
      var n = gs(a);
      if (n === null) (ts(e, t, a, ki, l), Dd(e, a));
      else if (Jh(n, e, t, l, a)) a.stopPropagation();
      else if ((Dd(e, a), t & 4 && -1 < Kh.indexOf(e))) {
        for (; n !== null; ) {
          var i = ea(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var u = Ol(i.pendingLanes);
                  if (u !== 0) {
                    var f = i;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; u; ) {
                      var m = 1 << (31 - ut(u));
                      ((f.entanglements[1] |= m), (u &= ~m));
                    }
                    (Dt(i), (re & 6) === 0 && ((Oi = nt() + 500), bn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Hl(i, 2)), f !== null && lt(f, i, 2), Ui(), hs(i, 2));
            }
          if (((i = gs(a)), i === null && ts(e, t, a, ki, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else ts(e, t, a, null, l);
    }
  }
  function gs(e) {
    return ((e = pu(e)), ys(e));
  }
  var ki = null;
  function ys(e) {
    if (((ki = null), (e = Pl(e)), e !== null)) {
      var t = j(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = z(t)), e !== null)) return e;
          e = null;
        } else if (l === 31) {
          if (((e = O(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((ki = e), null);
  }
  function Ud(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (Cm()) {
          case ws:
            return 2;
          case Gs:
            return 8;
          case Bn:
          case Um:
            return 32;
          case Ys:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ps = !1,
    bl = null,
    Sl = null,
    jl = null,
    An = new Map(),
    Tn = new Map(),
    Nl = [],
    Kh =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function Dd(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        bl = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Sl = null;
        break;
      case 'mouseover':
      case 'mouseout':
        jl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        An.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Tn.delete(t.pointerId);
    }
  }
  function _n(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = ea(t)), t !== null && Od(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Jh(e, t, l, a, n) {
    switch (t) {
      case 'focusin':
        return ((bl = _n(bl, e, t, l, a, n)), !0);
      case 'dragenter':
        return ((Sl = _n(Sl, e, t, l, a, n)), !0);
      case 'mouseover':
        return ((jl = _n(jl, e, t, l, a, n)), !0);
      case 'pointerover':
        var i = n.pointerId;
        return (An.set(i, _n(An.get(i) || null, e, t, l, a, n)), !0);
      case 'gotpointercapture':
        return (
          (i = n.pointerId),
          Tn.set(i, _n(Tn.get(i) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Rd(e) {
    var t = Pl(e.target);
    if (t !== null) {
      var l = j(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = z(l)), t !== null)) {
            ((e.blockedOn = t),
              Ks(e.priority, function () {
                Cd(l);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = O(l)), t !== null)) {
            ((e.blockedOn = t),
              Ks(e.priority, function () {
                Cd(l);
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Wi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = gs(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((yu = a), l.target.dispatchEvent(a), (yu = null));
      } else return ((t = ea(l)), t !== null && Od(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function Hd(e, t, l) {
    Wi(e) && l.delete(t);
  }
  function kh() {
    ((ps = !1),
      bl !== null && Wi(bl) && (bl = null),
      Sl !== null && Wi(Sl) && (Sl = null),
      jl !== null && Wi(jl) && (jl = null),
      An.forEach(Hd),
      Tn.forEach(Hd));
  }
  function $i(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ps ||
        ((ps = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, kh)));
  }
  var Fi = null;
  function qd(e) {
    Fi !== e &&
      ((Fi = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        Fi === e && (Fi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != 'function') {
            if (ys(a || l) === null) continue;
            break;
          }
          var i = ea(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            gc(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Ha(e) {
    function t(m) {
      return $i(m, e);
    }
    (bl !== null && $i(bl, e),
      Sl !== null && $i(Sl, e),
      jl !== null && $i(jl, e),
      An.forEach(t),
      Tn.forEach(t));
    for (var l = 0; l < Nl.length; l++) {
      var a = Nl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Nl.length && ((l = Nl[0]), l.blockedOn === null); )
      (Rd(l), l.blockedOn === null && Nl.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          u = n[$e] || null;
        if (typeof i == 'function') u || qd(l);
        else if (u) {
          var f = null;
          if (i && i.hasAttribute('formAction')) {
            if (((n = i), (u = i[$e] || null))) f = u.formAction;
            else if (ys(n) !== null) continue;
          } else f = u.action;
          (typeof f == 'function' ? (l[a + 1] = f) : (l.splice(a, 3), (a -= 3)),
            qd(l));
        }
      }
  }
  function Bd() {
    function e(i) {
      i.canIntercept &&
        i.info === 'react-transition' &&
        i.intercept({
          handler: function () {
            return new Promise(function (u) {
              return (n = u);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (n !== null && (n(), (n = null)), a || setTimeout(l, 20));
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(l, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function xs(e) {
    this._internalRoot = e;
  }
  ((Ii.prototype.render = xs.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var l = t.current,
        a = mt();
      Td(l, a, e, t, null, null);
    }),
    (Ii.prototype.unmount = xs.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Td(e.current, 2, null, e, null, null), Ui(), (t[Il] = null));
        }
      }));
  function Ii(e) {
    this._internalRoot = e;
  }
  Ii.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Vs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Nl.length && t !== 0 && t < Nl[l].priority; l++);
      (Nl.splice(l, 0, e), l === 0 && Rd(e));
    }
  };
  var wd = o.version;
  if (wd !== '19.2.3') throw Error(r(527, wd, '19.2.3'));
  H.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(r(188))
        : ((e = Object.keys(e).join(',')), Error(r(268, e)));
    return (
      (e = p(t)),
      (e = e !== null ? D(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Wh = {
    bundleType: 0,
    version: '19.2.3',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: A,
    reconcilerVersion: '19.2.3',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pi.isDisabled && Pi.supportsFiber)
      try {
        ((Ba = Pi.inject(Wh)), (it = Pi));
      } catch {}
  }
  return (
    (Cn.createRoot = function (e, t) {
      if (!y(e)) throw Error(r(299));
      var l = !1,
        a = '',
        n = Zr,
        i = Vr,
        u = Kr;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = Md(e, 1, !1, null, null, l, a, null, n, i, u, Bd)),
        (e[Il] = t.current),
        es(e),
        new xs(t)
      );
    }),
    (Cn.hydrateRoot = function (e, t, l) {
      if (!y(e)) throw Error(r(299));
      var a = !1,
        n = '',
        i = Zr,
        u = Vr,
        f = Kr,
        m = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (u = l.onCaughtError),
          l.onRecoverableError !== void 0 && (f = l.onRecoverableError),
          l.formState !== void 0 && (m = l.formState)),
        (t = Md(e, 1, !0, t, l ?? null, a, n, m, i, u, f, Bd)),
        (t.context = Ad(null)),
        (l = t.current),
        (a = mt()),
        (a = fu(a)),
        (n = sl(a)),
        (n.callback = null),
        fl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Ga(t, l),
        Dt(t),
        (e[Il] = t.current),
        es(e),
        new Ii(t)
      );
    }),
    (Cn.version = '19.2.3'),
    Cn
  );
}
var kd;
function u1() {
  if (kd) return js.exports;
  kd = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return (s(), (js.exports = i1()), js.exports);
}
var c1 = u1();
const s1 = sm(c1);
fm();
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Un() {
  return (
    (Un = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var o = 1; o < arguments.length; o++) {
            var d = arguments[o];
            for (var r in d)
              Object.prototype.hasOwnProperty.call(d, r) && (s[r] = d[r]);
          }
          return s;
        }),
    Un.apply(this, arguments)
  );
}
var Ml;
(function (s) {
  ((s.Pop = 'POP'), (s.Push = 'PUSH'), (s.Replace = 'REPLACE'));
})(Ml || (Ml = {}));
const Wd = 'popstate';
function f1(s) {
  s === void 0 && (s = {});
  function o(y, j) {
    let {
      pathname: z = '/',
      search: O = '',
      hash: N = '',
    } = kl(y.location.hash.substr(1));
    return (
      !z.startsWith('/') && !z.startsWith('.') && (z = '/' + z),
      As(
        '',
        { pathname: z, search: O, hash: N },
        (j.state && j.state.usr) || null,
        (j.state && j.state.key) || 'default'
      )
    );
  }
  function d(y, j) {
    let z = y.document.querySelector('base'),
      O = '';
    if (z && z.getAttribute('href')) {
      let N = y.location.href,
        p = N.indexOf('#');
      O = p === -1 ? N : N.slice(0, p);
    }
    return O + '#' + (typeof j == 'string' ? j : eu(j));
  }
  function r(y, j) {
    Us(
      y.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(j) +
        ')'
    );
  }
  return o1(o, d, r, s);
}
function Re(s, o) {
  if (s === !1 || s === null || typeof s > 'u') throw new Error(o);
}
function Us(s, o) {
  if (!s) {
    typeof console < 'u' && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function r1() {
  return Math.random().toString(36).substr(2, 8);
}
function $d(s, o) {
  return { usr: s.state, key: s.key, idx: o };
}
function As(s, o, d, r) {
  return (
    d === void 0 && (d = null),
    Un(
      { pathname: typeof s == 'string' ? s : s.pathname, search: '', hash: '' },
      typeof o == 'string' ? kl(o) : o,
      { state: d, key: (o && o.key) || r || r1() }
    )
  );
}
function eu(s) {
  let { pathname: o = '/', search: d = '', hash: r = '' } = s;
  return (
    d && d !== '?' && (o += d.charAt(0) === '?' ? d : '?' + d),
    r && r !== '#' && (o += r.charAt(0) === '#' ? r : '#' + r),
    o
  );
}
function kl(s) {
  let o = {};
  if (s) {
    let d = s.indexOf('#');
    d >= 0 && ((o.hash = s.substr(d)), (s = s.substr(0, d)));
    let r = s.indexOf('?');
    (r >= 0 && ((o.search = s.substr(r)), (s = s.substr(0, r))),
      s && (o.pathname = s));
  }
  return o;
}
function o1(s, o, d, r) {
  r === void 0 && (r = {});
  let { window: y = document.defaultView, v5Compat: j = !1 } = r,
    z = y.history,
    O = Ml.Pop,
    N = null,
    p = D();
  p == null && ((p = 0), z.replaceState(Un({}, z.state, { idx: p }), ''));
  function D() {
    return (z.state || { idx: null }).idx;
  }
  function U() {
    O = Ml.Pop;
    let L = D(),
      ce = L == null ? null : L - p;
    ((p = L), N && N({ action: O, location: W.location, delta: ce }));
  }
  function X(L, ce) {
    O = Ml.Push;
    let be = As(W.location, L, ce);
    (d && d(be, L), (p = D() + 1));
    let le = $d(be, p),
      Ee = W.createHref(be);
    try {
      z.pushState(le, '', Ee);
    } catch (we) {
      if (we instanceof DOMException && we.name === 'DataCloneError') throw we;
      y.location.assign(Ee);
    }
    j && N && N({ action: O, location: W.location, delta: 1 });
  }
  function ue(L, ce) {
    O = Ml.Replace;
    let be = As(W.location, L, ce);
    (d && d(be, L), (p = D()));
    let le = $d(be, p),
      Ee = W.createHref(be);
    (z.replaceState(le, '', Ee),
      j && N && N({ action: O, location: W.location, delta: 0 }));
  }
  function te(L) {
    let ce = y.location.origin !== 'null' ? y.location.origin : y.location.href,
      be = typeof L == 'string' ? L : eu(L);
    return (
      (be = be.replace(/ $/, '%20')),
      Re(
        ce,
        'No window.location.(origin|href) available to create URL for href: ' +
          be
      ),
      new URL(be, ce)
    );
  }
  let W = {
    get action() {
      return O;
    },
    get location() {
      return s(y, z);
    },
    listen(L) {
      if (N) throw new Error('A history only accepts one active listener');
      return (
        y.addEventListener(Wd, U),
        (N = L),
        () => {
          (y.removeEventListener(Wd, U), (N = null));
        }
      );
    },
    createHref(L) {
      return o(y, L);
    },
    createURL: te,
    encodeLocation(L) {
      let ce = te(L);
      return { pathname: ce.pathname, search: ce.search, hash: ce.hash };
    },
    push: X,
    replace: ue,
    go(L) {
      return z.go(L);
    },
  };
  return W;
}
var Fd;
(function (s) {
  ((s.data = 'data'),
    (s.deferred = 'deferred'),
    (s.redirect = 'redirect'),
    (s.error = 'error'));
})(Fd || (Fd = {}));
function d1(s, o, d) {
  d === void 0 && (d = '/');
  let r = typeof o == 'string' ? kl(o) : o,
    y = Ds(r.pathname || '/', d);
  if (y == null) return null;
  let j = rm(s);
  m1(j);
  let z = null;
  for (let O = 0; z == null && O < j.length; ++O) {
    let N = z1(y);
    z = j1(j[O], N);
  }
  return z;
}
function rm(s, o, d, r) {
  (o === void 0 && (o = []),
    d === void 0 && (d = []),
    r === void 0 && (r = ''));
  let y = (j, z, O) => {
    let N = {
      relativePath: O === void 0 ? j.path || '' : O,
      caseSensitive: j.caseSensitive === !0,
      childrenIndex: z,
      route: j,
    };
    N.relativePath.startsWith('/') &&
      (Re(
        N.relativePath.startsWith(r),
        'Absolute route path "' +
          N.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (N.relativePath = N.relativePath.slice(r.length)));
    let p = Al([r, N.relativePath]),
      D = d.concat(N);
    (j.children &&
      j.children.length > 0 &&
      (Re(
        j.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + p + '".')
      ),
      rm(j.children, o, D, p)),
      !(j.path == null && !j.index) &&
        o.push({ path: p, score: b1(p, j.index), routesMeta: D }));
  };
  return (
    s.forEach((j, z) => {
      var O;
      if (j.path === '' || !((O = j.path) != null && O.includes('?'))) y(j, z);
      else for (let N of om(j.path)) y(j, z, N);
    }),
    o
  );
}
function om(s) {
  let o = s.split('/');
  if (o.length === 0) return [];
  let [d, ...r] = o,
    y = d.endsWith('?'),
    j = d.replace(/\?$/, '');
  if (r.length === 0) return y ? [j, ''] : [j];
  let z = om(r.join('/')),
    O = [];
  return (
    O.push(...z.map((N) => (N === '' ? j : [j, N].join('/')))),
    y && O.push(...z),
    O.map((N) => (s.startsWith('/') && N === '' ? '/' : N))
  );
}
function m1(s) {
  s.sort((o, d) =>
    o.score !== d.score
      ? d.score - o.score
      : S1(
          o.routesMeta.map((r) => r.childrenIndex),
          d.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const h1 = /^:[\w-]+$/,
  v1 = 3,
  g1 = 2,
  y1 = 1,
  p1 = 10,
  x1 = -2,
  Id = (s) => s === '*';
function b1(s, o) {
  let d = s.split('/'),
    r = d.length;
  return (
    d.some(Id) && (r += x1),
    o && (r += g1),
    d
      .filter((y) => !Id(y))
      .reduce((y, j) => y + (h1.test(j) ? v1 : j === '' ? y1 : p1), r)
  );
}
function S1(s, o) {
  return s.length === o.length && s.slice(0, -1).every((r, y) => r === o[y])
    ? s[s.length - 1] - o[o.length - 1]
    : 0;
}
function j1(s, o) {
  let { routesMeta: d } = s,
    r = {},
    y = '/',
    j = [];
  for (let z = 0; z < d.length; ++z) {
    let O = d[z],
      N = z === d.length - 1,
      p = y === '/' ? o : o.slice(y.length) || '/',
      D = N1(
        { path: O.relativePath, caseSensitive: O.caseSensitive, end: N },
        p
      );
    if (!D) return null;
    Object.assign(r, D.params);
    let U = O.route;
    (j.push({
      params: r,
      pathname: Al([y, D.pathname]),
      pathnameBase: _1(Al([y, D.pathnameBase])),
      route: U,
    }),
      D.pathnameBase !== '/' && (y = Al([y, D.pathnameBase])));
  }
  return j;
}
function N1(s, o) {
  typeof s == 'string' && (s = { path: s, caseSensitive: !1, end: !0 });
  let [d, r] = E1(s.path, s.caseSensitive, s.end),
    y = o.match(d);
  if (!y) return null;
  let j = y[0],
    z = j.replace(/(.)\/+$/, '$1'),
    O = y.slice(1);
  return {
    params: r.reduce((p, D, U) => {
      let { paramName: X, isOptional: ue } = D;
      if (X === '*') {
        let W = O[U] || '';
        z = j.slice(0, j.length - W.length).replace(/(.)\/+$/, '$1');
      }
      const te = O[U];
      return (
        ue && !te ? (p[X] = void 0) : (p[X] = (te || '').replace(/%2F/g, '/')),
        p
      );
    }, {}),
    pathname: j,
    pathnameBase: z,
    pattern: s,
  };
}
function E1(s, o, d) {
  (o === void 0 && (o = !1),
    d === void 0 && (d = !0),
    Us(
      s === '*' || !s.endsWith('*') || s.endsWith('/*'),
      'Route path "' +
        s +
        '" will be treated as if it were ' +
        ('"' + s.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + s.replace(/\*$/, '/*') + '".')
    ));
  let r = [],
    y =
      '^' +
      s
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (z, O, N) => (
            r.push({ paramName: O, isOptional: N != null }),
            N ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    s.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (y += s === '*' || s === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : d
        ? (y += '\\/*$')
        : s !== '' && s !== '/' && (y += '(?:(?=\\/|$))'),
    [new RegExp(y, o ? void 0 : 'i'), r]
  );
}
function z1(s) {
  try {
    return s
      .split('/')
      .map((o) => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/');
  } catch (o) {
    return (
      Us(
        !1,
        'The URL path "' +
          s +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + o + ').')
      ),
      s
    );
  }
}
function Ds(s, o) {
  if (o === '/') return s;
  if (!s.toLowerCase().startsWith(o.toLowerCase())) return null;
  let d = o.endsWith('/') ? o.length - 1 : o.length,
    r = s.charAt(d);
  return r && r !== '/' ? null : s.slice(d) || '/';
}
function M1(s, o) {
  o === void 0 && (o = '/');
  let {
    pathname: d,
    search: r = '',
    hash: y = '',
  } = typeof s == 'string' ? kl(s) : s;
  return {
    pathname: d ? (d.startsWith('/') ? d : A1(d, o)) : o,
    search: O1(r),
    hash: C1(y),
  };
}
function A1(s, o) {
  let d = o.replace(/\/+$/, '').split('/');
  return (
    s.split('/').forEach((y) => {
      y === '..' ? d.length > 1 && d.pop() : y !== '.' && d.push(y);
    }),
    d.length > 1 ? d.join('/') : '/'
  );
}
function Ms(s, o, d, r) {
  return (
    "Cannot include a '" +
    s +
    "' character in a manually specified " +
    ('`to.' +
      o +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + d + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function T1(s) {
  return s.filter(
    (o, d) => d === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function dm(s, o) {
  let d = T1(s);
  return o
    ? d.map((r, y) => (y === s.length - 1 ? r.pathname : r.pathnameBase))
    : d.map((r) => r.pathnameBase);
}
function mm(s, o, d, r) {
  r === void 0 && (r = !1);
  let y;
  typeof s == 'string'
    ? (y = kl(s))
    : ((y = Un({}, s)),
      Re(
        !y.pathname || !y.pathname.includes('?'),
        Ms('?', 'pathname', 'search', y)
      ),
      Re(
        !y.pathname || !y.pathname.includes('#'),
        Ms('#', 'pathname', 'hash', y)
      ),
      Re(!y.search || !y.search.includes('#'), Ms('#', 'search', 'hash', y)));
  let j = s === '' || y.pathname === '',
    z = j ? '/' : y.pathname,
    O;
  if (z == null) O = d;
  else {
    let U = o.length - 1;
    if (!r && z.startsWith('..')) {
      let X = z.split('/');
      for (; X[0] === '..'; ) (X.shift(), (U -= 1));
      y.pathname = X.join('/');
    }
    O = U >= 0 ? o[U] : '/';
  }
  let N = M1(y, O),
    p = z && z !== '/' && z.endsWith('/'),
    D = (j || z === '.') && d.endsWith('/');
  return (!N.pathname.endsWith('/') && (p || D) && (N.pathname += '/'), N);
}
const Al = (s) => s.join('/').replace(/\/\/+/g, '/'),
  _1 = (s) => s.replace(/\/+$/, '').replace(/^\/*/, '/'),
  O1 = (s) => (!s || s === '?' ? '' : s.startsWith('?') ? s : '?' + s),
  C1 = (s) => (!s || s === '#' ? '' : s.startsWith('#') ? s : '#' + s);
function U1(s) {
  return (
    s != null &&
    typeof s.status == 'number' &&
    typeof s.statusText == 'string' &&
    typeof s.internal == 'boolean' &&
    'data' in s
  );
}
const hm = ['post', 'put', 'patch', 'delete'];
new Set(hm);
const D1 = ['get', ...hm];
new Set(D1);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Dn() {
  return (
    (Dn = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var o = 1; o < arguments.length; o++) {
            var d = arguments[o];
            for (var r in d)
              Object.prototype.hasOwnProperty.call(d, r) && (s[r] = d[r]);
          }
          return s;
        }),
    Dn.apply(this, arguments)
  );
}
const Rs = R.createContext(null),
  R1 = R.createContext(null),
  Wl = R.createContext(null),
  tu = R.createContext(null),
  $l = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  vm = R.createContext(null);
function H1(s, o) {
  let { relative: d } = o === void 0 ? {} : o;
  Rn() || Re(!1);
  let { basename: r, navigator: y } = R.useContext(Wl),
    { hash: j, pathname: z, search: O } = ym(s, { relative: d }),
    N = z;
  return (
    r !== '/' && (N = z === '/' ? r : Al([r, z])),
    y.createHref({ pathname: N, search: O, hash: j })
  );
}
function Rn() {
  return R.useContext(tu) != null;
}
function Rt() {
  return (Rn() || Re(!1), R.useContext(tu).location);
}
function gm(s) {
  R.useContext(Wl).static || R.useLayoutEffect(s);
}
function q1() {
  let { isDataRoute: s } = R.useContext($l);
  return s ? W1() : B1();
}
function B1() {
  Rn() || Re(!1);
  let s = R.useContext(Rs),
    { basename: o, future: d, navigator: r } = R.useContext(Wl),
    { matches: y } = R.useContext($l),
    { pathname: j } = Rt(),
    z = JSON.stringify(dm(y, d.v7_relativeSplatPath)),
    O = R.useRef(!1);
  return (
    gm(() => {
      O.current = !0;
    }),
    R.useCallback(
      function (p, D) {
        if ((D === void 0 && (D = {}), !O.current)) return;
        if (typeof p == 'number') {
          r.go(p);
          return;
        }
        let U = mm(p, JSON.parse(z), j, D.relative === 'path');
        (s == null &&
          o !== '/' &&
          (U.pathname = U.pathname === '/' ? o : Al([o, U.pathname])),
          (D.replace ? r.replace : r.push)(U, D.state, D));
      },
      [o, r, z, j, s]
    )
  );
}
function ym(s, o) {
  let { relative: d } = o === void 0 ? {} : o,
    { future: r } = R.useContext(Wl),
    { matches: y } = R.useContext($l),
    { pathname: j } = Rt(),
    z = JSON.stringify(dm(y, r.v7_relativeSplatPath));
  return R.useMemo(() => mm(s, JSON.parse(z), j, d === 'path'), [s, z, j, d]);
}
function w1(s, o) {
  return G1(s, o);
}
function G1(s, o, d, r) {
  Rn() || Re(!1);
  let { navigator: y } = R.useContext(Wl),
    { matches: j } = R.useContext($l),
    z = j[j.length - 1],
    O = z ? z.params : {};
  z && z.pathname;
  let N = z ? z.pathnameBase : '/';
  z && z.route;
  let p = Rt(),
    D;
  if (o) {
    var U;
    let L = typeof o == 'string' ? kl(o) : o;
    (N === '/' || ((U = L.pathname) != null && U.startsWith(N)) || Re(!1),
      (D = L));
  } else D = p;
  let X = D.pathname || '/',
    ue = X;
  if (N !== '/') {
    let L = N.replace(/^\//, '').split('/');
    ue = '/' + X.replace(/^\//, '').split('/').slice(L.length).join('/');
  }
  let te = d1(s, { pathname: ue }),
    W = Z1(
      te &&
        te.map((L) =>
          Object.assign({}, L, {
            params: Object.assign({}, O, L.params),
            pathname: Al([
              N,
              y.encodeLocation
                ? y.encodeLocation(L.pathname).pathname
                : L.pathname,
            ]),
            pathnameBase:
              L.pathnameBase === '/'
                ? N
                : Al([
                    N,
                    y.encodeLocation
                      ? y.encodeLocation(L.pathnameBase).pathname
                      : L.pathnameBase,
                  ]),
          })
        ),
      j,
      d,
      r
    );
  return o && W
    ? R.createElement(
        tu.Provider,
        {
          value: {
            location: Dn(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              D
            ),
            navigationType: Ml.Pop,
          },
        },
        W
      )
    : W;
}
function Y1() {
  let s = k1(),
    o = U1(s)
      ? s.status + ' ' + s.statusText
      : s instanceof Error
        ? s.message
        : JSON.stringify(s),
    d = s instanceof Error ? s.stack : null,
    y = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement('h2', null, 'Unexpected Application Error!'),
    R.createElement('h3', { style: { fontStyle: 'italic' } }, o),
    d ? R.createElement('pre', { style: y }, d) : null,
    null
  );
}
const L1 = R.createElement(Y1, null);
class X1 extends R.Component {
  constructor(o) {
    (super(o),
      (this.state = {
        location: o.location,
        revalidation: o.revalidation,
        error: o.error,
      }));
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, d) {
    return d.location !== o.location ||
      (d.revalidation !== 'idle' && o.revalidation === 'idle')
      ? { error: o.error, location: o.location, revalidation: o.revalidation }
      : {
          error: o.error !== void 0 ? o.error : d.error,
          location: d.location,
          revalidation: o.revalidation || d.revalidation,
        };
  }
  componentDidCatch(o, d) {
    console.error(
      'React Router caught the following error during render',
      o,
      d
    );
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          $l.Provider,
          { value: this.props.routeContext },
          R.createElement(vm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Q1(s) {
  let { routeContext: o, match: d, children: r } = s,
    y = R.useContext(Rs);
  return (
    y &&
      y.static &&
      y.staticContext &&
      (d.route.errorElement || d.route.ErrorBoundary) &&
      (y.staticContext._deepestRenderedBoundaryId = d.route.id),
    R.createElement($l.Provider, { value: o }, r)
  );
}
function Z1(s, o, d, r) {
  var y;
  if (
    (o === void 0 && (o = []),
    d === void 0 && (d = null),
    r === void 0 && (r = null),
    s == null)
  ) {
    var j;
    if ((j = d) != null && j.errors) s = d.matches;
    else return null;
  }
  let z = s,
    O = (y = d) == null ? void 0 : y.errors;
  if (O != null) {
    let D = z.findIndex(
      (U) => U.route.id && (O == null ? void 0 : O[U.route.id])
    );
    (D >= 0 || Re(!1), (z = z.slice(0, Math.min(z.length, D + 1))));
  }
  let N = !1,
    p = -1;
  if (d && r && r.v7_partialHydration)
    for (let D = 0; D < z.length; D++) {
      let U = z[D];
      if (
        ((U.route.HydrateFallback || U.route.hydrateFallbackElement) && (p = D),
        U.route.id)
      ) {
        let { loaderData: X, errors: ue } = d,
          te =
            U.route.loader &&
            X[U.route.id] === void 0 &&
            (!ue || ue[U.route.id] === void 0);
        if (U.route.lazy || te) {
          ((N = !0), p >= 0 ? (z = z.slice(0, p + 1)) : (z = [z[0]]));
          break;
        }
      }
    }
  return z.reduceRight((D, U, X) => {
    let ue,
      te = !1,
      W = null,
      L = null;
    d &&
      ((ue = O && U.route.id ? O[U.route.id] : void 0),
      (W = U.route.errorElement || L1),
      N &&
        (p < 0 && X === 0
          ? ($1('route-fallback'), (te = !0), (L = null))
          : p === X &&
            ((te = !0), (L = U.route.hydrateFallbackElement || null))));
    let ce = o.concat(z.slice(0, X + 1)),
      be = () => {
        let le;
        return (
          ue
            ? (le = W)
            : te
              ? (le = L)
              : U.route.Component
                ? (le = R.createElement(U.route.Component, null))
                : U.route.element
                  ? (le = U.route.element)
                  : (le = D),
          R.createElement(Q1, {
            match: U,
            routeContext: { outlet: D, matches: ce, isDataRoute: d != null },
            children: le,
          })
        );
      };
    return d && (U.route.ErrorBoundary || U.route.errorElement || X === 0)
      ? R.createElement(X1, {
          location: d.location,
          revalidation: d.revalidation,
          component: W,
          error: ue,
          children: be(),
          routeContext: { outlet: null, matches: ce, isDataRoute: !0 },
        })
      : be();
  }, null);
}
var pm = (function (s) {
    return (
      (s.UseBlocker = 'useBlocker'),
      (s.UseRevalidator = 'useRevalidator'),
      (s.UseNavigateStable = 'useNavigate'),
      s
    );
  })(pm || {}),
  xm = (function (s) {
    return (
      (s.UseBlocker = 'useBlocker'),
      (s.UseLoaderData = 'useLoaderData'),
      (s.UseActionData = 'useActionData'),
      (s.UseRouteError = 'useRouteError'),
      (s.UseNavigation = 'useNavigation'),
      (s.UseRouteLoaderData = 'useRouteLoaderData'),
      (s.UseMatches = 'useMatches'),
      (s.UseRevalidator = 'useRevalidator'),
      (s.UseNavigateStable = 'useNavigate'),
      (s.UseRouteId = 'useRouteId'),
      s
    );
  })(xm || {});
function V1(s) {
  let o = R.useContext(Rs);
  return (o || Re(!1), o);
}
function K1(s) {
  let o = R.useContext(R1);
  return (o || Re(!1), o);
}
function J1(s) {
  let o = R.useContext($l);
  return (o || Re(!1), o);
}
function bm(s) {
  let o = J1(),
    d = o.matches[o.matches.length - 1];
  return (d.route.id || Re(!1), d.route.id);
}
function k1() {
  var s;
  let o = R.useContext(vm),
    d = K1(),
    r = bm();
  return o !== void 0 ? o : (s = d.errors) == null ? void 0 : s[r];
}
function W1() {
  let { router: s } = V1(pm.UseNavigateStable),
    o = bm(xm.UseNavigateStable),
    d = R.useRef(!1);
  return (
    gm(() => {
      d.current = !0;
    }),
    R.useCallback(
      function (y, j) {
        (j === void 0 && (j = {}),
          d.current &&
            (typeof y == 'number'
              ? s.navigate(y)
              : s.navigate(y, Dn({ fromRouteId: o }, j))));
      },
      [s, o]
    )
  );
}
const Pd = {};
function $1(s, o, d) {
  Pd[s] || (Pd[s] = !0);
}
function zl(s) {
  Re(!1);
}
function F1(s) {
  let {
    basename: o = '/',
    children: d = null,
    location: r,
    navigationType: y = Ml.Pop,
    navigator: j,
    static: z = !1,
    future: O,
  } = s;
  Rn() && Re(!1);
  let N = o.replace(/^\/*/, '/'),
    p = R.useMemo(
      () => ({
        basename: N,
        navigator: j,
        static: z,
        future: Dn({ v7_relativeSplatPath: !1 }, O),
      }),
      [N, O, j, z]
    );
  typeof r == 'string' && (r = kl(r));
  let {
      pathname: D = '/',
      search: U = '',
      hash: X = '',
      state: ue = null,
      key: te = 'default',
    } = r,
    W = R.useMemo(() => {
      let L = Ds(D, N);
      return L == null
        ? null
        : {
            location: { pathname: L, search: U, hash: X, state: ue, key: te },
            navigationType: y,
          };
    }, [N, D, U, X, ue, te, y]);
  return W == null
    ? null
    : R.createElement(
        Wl.Provider,
        { value: p },
        R.createElement(tu.Provider, { children: d, value: W })
      );
}
function I1(s) {
  let { children: o, location: d } = s;
  return w1(Ts(o), d);
}
new Promise(() => {});
function Ts(s, o) {
  o === void 0 && (o = []);
  let d = [];
  return (
    R.Children.forEach(s, (r, y) => {
      if (!R.isValidElement(r)) return;
      let j = [...o, y];
      if (r.type === R.Fragment) {
        d.push.apply(d, Ts(r.props.children, j));
        return;
      }
      (r.type !== zl && Re(!1), !r.props.index || !r.props.children || Re(!1));
      let z = {
        id: r.props.id || j.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (z.children = Ts(r.props.children, j)), d.push(z));
    }),
    d
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (s) {
          for (var o = 1; o < arguments.length; o++) {
            var d = arguments[o];
            for (var r in d)
              Object.prototype.hasOwnProperty.call(d, r) && (s[r] = d[r]);
          }
          return s;
        }),
    _s.apply(this, arguments)
  );
}
function P1(s, o) {
  if (s == null) return {};
  var d = {},
    r = Object.keys(s),
    y,
    j;
  for (j = 0; j < r.length; j++)
    ((y = r[j]), !(o.indexOf(y) >= 0) && (d[y] = s[y]));
  return d;
}
function ev(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function tv(s, o) {
  return s.button === 0 && (!o || o === '_self') && !ev(s);
}
const lv = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  av = '6';
try {
  window.__reactRouterVersion = av;
} catch {}
const nv = 'startTransition',
  em = t1[nv];
function iv(s) {
  let { basename: o, children: d, future: r, window: y } = s,
    j = R.useRef();
  j.current == null && (j.current = f1({ window: y, v5Compat: !0 }));
  let z = j.current,
    [O, N] = R.useState({ action: z.action, location: z.location }),
    { v7_startTransition: p } = r || {},
    D = R.useCallback(
      (U) => {
        p && em ? em(() => N(U)) : N(U);
      },
      [N, p]
    );
  return (
    R.useLayoutEffect(() => z.listen(D), [z, D]),
    R.createElement(F1, {
      basename: o,
      children: d,
      location: O.location,
      navigationType: O.action,
      navigator: z,
      future: r,
    })
  );
}
const uv =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  cv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  at = R.forwardRef(function (o, d) {
    let {
        onClick: r,
        relative: y,
        reloadDocument: j,
        replace: z,
        state: O,
        target: N,
        to: p,
        preventScrollReset: D,
        unstable_viewTransition: U,
      } = o,
      X = P1(o, lv),
      { basename: ue } = R.useContext(Wl),
      te,
      W = !1;
    if (typeof p == 'string' && cv.test(p) && ((te = p), uv))
      try {
        let le = new URL(window.location.href),
          Ee = p.startsWith('//') ? new URL(le.protocol + p) : new URL(p),
          we = Ds(Ee.pathname, ue);
        Ee.origin === le.origin && we != null
          ? (p = we + Ee.search + Ee.hash)
          : (W = !0);
      } catch {}
    let L = H1(p, { relative: y }),
      ce = sv(p, {
        replace: z,
        state: O,
        target: N,
        preventScrollReset: D,
        relative: y,
        unstable_viewTransition: U,
      });
    function be(le) {
      (r && r(le), le.defaultPrevented || ce(le));
    }
    return R.createElement(
      'a',
      _s({}, X, { href: te || L, onClick: W || j ? r : be, ref: d, target: N })
    );
  });
var tm;
(function (s) {
  ((s.UseScrollRestoration = 'useScrollRestoration'),
    (s.UseSubmit = 'useSubmit'),
    (s.UseSubmitFetcher = 'useSubmitFetcher'),
    (s.UseFetcher = 'useFetcher'),
    (s.useViewTransitionState = 'useViewTransitionState'));
})(tm || (tm = {}));
var lm;
(function (s) {
  ((s.UseFetcher = 'useFetcher'),
    (s.UseFetchers = 'useFetchers'),
    (s.UseScrollRestoration = 'useScrollRestoration'));
})(lm || (lm = {}));
function sv(s, o) {
  let {
      target: d,
      replace: r,
      state: y,
      preventScrollReset: j,
      relative: z,
      unstable_viewTransition: O,
    } = o === void 0 ? {} : o,
    N = q1(),
    p = Rt(),
    D = ym(s, { relative: z });
  return R.useCallback(
    (U) => {
      if (tv(U, d)) {
        U.preventDefault();
        let X = r !== void 0 ? r : eu(p) === eu(D);
        N(s, {
          replace: X,
          state: y,
          preventScrollReset: j,
          relative: z,
          unstable_viewTransition: O,
        });
      }
    },
    [p, N, D, r, y, d, s, j, z, O]
  );
}
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fv = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  rv = (s) =>
    s.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, d, r) =>
      r ? r.toUpperCase() : d.toLowerCase()
    ),
  am = (s) => {
    const o = rv(s);
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  Sm = (...s) =>
    s
      .filter((o, d, r) => !!o && o.trim() !== '' && r.indexOf(o) === d)
      .join(' ')
      .trim(),
  ov = (s) => {
    for (const o in s)
      if (o.startsWith('aria-') || o === 'role' || o === 'title') return !0;
  };
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var dv = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mv = R.forwardRef(
  (
    {
      color: s = 'currentColor',
      size: o = 24,
      strokeWidth: d = 2,
      absoluteStrokeWidth: r,
      className: y = '',
      children: j,
      iconNode: z,
      ...O
    },
    N
  ) =>
    R.createElement(
      'svg',
      {
        ref: N,
        ...dv,
        width: o,
        height: o,
        stroke: s,
        strokeWidth: r ? (Number(d) * 24) / Number(o) : d,
        className: Sm('lucide', y),
        ...(!j && !ov(O) && { 'aria-hidden': 'true' }),
        ...O,
      },
      [
        ...z.map(([p, D]) => R.createElement(p, D)),
        ...(Array.isArray(j) ? j : [j]),
      ]
    )
);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ie = (s, o) => {
  const d = R.forwardRef(({ className: r, ...y }, j) =>
    R.createElement(mv, {
      ref: j,
      iconNode: o,
      className: Sm(`lucide-${fv(am(s))}`, `lucide-${s}`, r),
      ...y,
    })
  );
  return ((d.displayName = am(s)), d);
};
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hv = [
    ['path', { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', key: 'jecpp' }],
    [
      'rect',
      { width: '20', height: '14', x: '2', y: '6', rx: '2', key: 'i6l2r4' },
    ],
  ],
  jm = ie('briefcase', hv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vv = [
    ['path', { d: 'M10 12h4', key: 'a56b0p' }],
    ['path', { d: 'M10 8h4', key: '1sr2af' }],
    ['path', { d: 'M14 21v-3a2 2 0 0 0-4 0v3', key: '1rgiei' }],
    [
      'path',
      {
        d: 'M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2',
        key: 'secmi2',
      },
    ],
    ['path', { d: 'M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16', key: '16ra0t' }],
  ],
  gv = ie('building-2', vv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yv = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
  nm = ie('chevron-down', yv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pv = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
  xv = ie('chevron-right', pv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bv = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
  ],
  Sv = ie('circle-check', bv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jv = [
    [
      'rect',
      {
        width: '8',
        height: '4',
        x: '8',
        y: '2',
        rx: '1',
        ry: '1',
        key: 'tgr4d6',
      },
    ],
    [
      'path',
      {
        d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
        key: '116196',
      },
    ],
    ['path', { d: 'm9 14 2 2 4-4', key: 'df797q' }],
  ],
  Nv = ie('clipboard-check', jv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ev = [
    [
      'path',
      {
        d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
        key: '1jg4f8',
      },
    ],
  ],
  zv = ie('facebook', Ev);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mv = [
    [
      'path',
      {
        d: 'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
        key: '1oefj6',
      },
    ],
    ['path', { d: 'M14 2v5a1 1 0 0 0 1 1h5', key: 'wfsgrz' }],
    ['path', { d: 'm9 15 2 2 4-4', key: '1grp1n' }],
  ],
  Av = ie('file-check', Mv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tv = [
    [
      'path',
      {
        d: 'M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z',
        key: 'sc7q7i',
      },
    ],
  ],
  _v = ie('funnel', Tv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ov = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    [
      'path',
      { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' },
    ],
    ['path', { d: 'M2 12h20', key: '9i4pu4' }],
  ],
  Cv = ie('globe', Ov);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uv = [
    ['path', { d: 'M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5', key: '1p9q5i' }],
    ['path', { d: 'M14 6a6 6 0 0 1 6 6v3', key: '1hnv84' }],
    ['path', { d: 'M4 15v-3a6 6 0 0 1 6-6', key: '9ciidu' }],
    [
      'rect',
      { x: '2', y: '15', width: '20', height: '4', rx: '1', key: 'g3x8cw' },
    ],
  ],
  Nm = ie('hard-hat', Uv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dv = [
    [
      'path',
      {
        d: 'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z',
        key: 'zw3jo',
      },
    ],
    [
      'path',
      {
        d: 'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12',
        key: '1wduqc',
      },
    ],
    [
      'path',
      {
        d: 'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17',
        key: 'kqbvx6',
      },
    ],
  ],
  Rv = ie('layers', Dv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hv = [
    [
      'path',
      {
        d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z',
        key: 'nnexq3',
      },
    ],
    [
      'path',
      { d: 'M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12', key: 'mt58a7' },
    ],
  ],
  qv = ie('leaf', Hv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bv = [
    [
      'path',
      {
        d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
        key: 'c2jq9f',
      },
    ],
    ['rect', { width: '4', height: '12', x: '2', y: '9', key: 'mk3on5' }],
    ['circle', { cx: '4', cy: '4', r: '2', key: 'bt5ra8' }],
  ],
  wv = ie('linkedin', Bv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gv = [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]],
  Yv = ie('loader-circle', Gv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lv = [
    ['path', { d: 'm22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7', key: '132q7q' }],
    [
      'rect',
      { x: '2', y: '4', width: '20', height: '16', rx: '2', key: 'izxlao' },
    ],
  ],
  Xv = ie('mail', Lv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qv = [
    [
      'path',
      {
        d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
        key: '1r0f0z',
      },
    ],
    ['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
  ],
  Em = ie('map-pin', Qv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zv = [
    ['path', { d: 'M15 3h6v6', key: '1q9fwt' }],
    ['path', { d: 'm21 3-7 7', key: '1l2asr' }],
    ['path', { d: 'm3 21 7-7', key: 'tjx5ai' }],
    ['path', { d: 'M9 21H3v-6', key: 'wtvkvv' }],
  ],
  Vv = ie('maximize-2', Zv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kv = [
    ['path', { d: 'M4 5h16', key: '1tepv9' }],
    ['path', { d: 'M4 12h16', key: '1lakjw' }],
    ['path', { d: 'M4 19h16', key: '1djgab' }],
  ],
  Jv = ie('menu', Kv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kv = [
    ['path', { d: 'M6 18h8', key: '1borvv' }],
    ['path', { d: 'M3 22h18', key: '8prr45' }],
    ['path', { d: 'M14 22a7 7 0 1 0 0-14h-1', key: '1jwaiy' }],
    ['path', { d: 'M9 14h2', key: '197e7h' }],
    ['path', { d: 'M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z', key: '1bmzmy' }],
    ['path', { d: 'M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3', key: '1drr47' }],
  ],
  Wv = ie('microscope', kv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $v = [
    [
      'path',
      {
        d: 'M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384',
        key: '9njp5v',
      },
    ],
  ],
  Fv = ie('phone', $v);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iv = [
    [
      'path',
      { d: 'm14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999', key: '1lw9ds' },
    ],
    [
      'path',
      {
        d: 'M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024',
        key: 'ffj4ej',
      },
    ],
    [
      'path',
      {
        d: 'M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069',
        key: '8tj4zw',
      },
    ],
    [
      'path',
      {
        d: 'M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z',
        key: 'hh6h97',
      },
    ],
  ],
  Pv = ie('pickaxe', Iv);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eg = [
    [
      'path',
      {
        d: 'M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5',
        key: 'x6z5xu',
      },
    ],
    [
      'path',
      {
        d: 'M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12',
        key: '1x4zh5',
      },
    ],
    ['path', { d: 'm14 16-3 3 3 3', key: 'f6jyew' }],
    ['path', { d: 'M8.293 13.596 7.196 9.5 3.1 10.598', key: 'wf1obh' }],
    [
      'path',
      {
        d: 'm9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843',
        key: '9tzpgr',
      },
    ],
    ['path', { d: 'm13.378 9.633 4.096 1.098 1.097-4.096', key: '1oe83g' }],
  ],
  tg = ie('recycle', eg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = [
    ['path', { d: 'M12 3v18', key: '108xh3' }],
    ['path', { d: 'm19 8 3 8a5 5 0 0 1-6 0zV7', key: 'zcdpyk' }],
    ['path', { d: 'M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1', key: '1yorad' }],
    ['path', { d: 'm5 8 3 8a5 5 0 0 1-6 0zV7', key: 'eua70x' }],
    ['path', { d: 'M7 21h10', key: '1b0cd5' }],
  ],
  ag = ie('scale', lg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = [
    ['path', { d: 'M19 17V5a2 2 0 0 0-2-2H4', key: 'zz82l3' }],
    [
      'path',
      {
        d: 'M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3',
        key: '1ph1d7',
      },
    ],
  ],
  ig = ie('scroll', ng);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ug = [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ],
  cg = ie('search', ug);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = [
    [
      'path',
      {
        d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
        key: '1ffxy3',
      },
    ],
    ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
  ],
  fg = ie('send', sg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rg = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
    ['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }],
  ],
  og = ie('shield-check', rg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dg = [
    [
      'path',
      {
        d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
        key: 'oel41y',
      },
    ],
  ],
  mg = ie('shield', dg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hg = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
    ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
  ],
  vg = ie('target', hg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = [
    [
      'path',
      {
        d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
        key: 'pff0z6',
      },
    ],
  ],
  yg = ie('twitter', gg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = [
    ['path', { d: 'm16 11 2 2 4-4', key: '9rsbq5' }],
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ],
  xg = ie('user-check', pg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bg = [
    ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
    ['path', { d: 'M16 3.128a4 4 0 0 1 0 7.744', key: '16gr8j' }],
    ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
    ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ],
  zm = ie('users', bg);
/**
 * @license lucide-react v0.561.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sg = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  Mm = ie('x', Sg),
  Hs = ({ className: s }) =>
    c.jsx('div', {
      className: `${s} relative flex items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-slate-100 shadow-inner`,
      children: c.jsx('img', {
        src: './logo.png',
        alt: 'GEO Mining & Environmental Consultancy',
        className: 'w-full h-full object-contain p-0.5',
        onError: (o) => {
          const d = o.target;
          ((d.src =
            'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/geomining-logo.png'),
            (d.onerror = () => {
              d.src =
                'https://api.dicebear.com/7.x/initials/svg?seed=GM&backgroundColor=2d5a27&fontColor=ffffff&fontSize=45';
            }));
        },
      }),
    }),
  im = [
    { name: 'Home', href: '/' },
    {
      name: 'About the Group',
      href: '/about-us',
      children: [
        { name: 'Overview', href: '/about-us#overview' },
        { name: 'Vision, Mission & Values', href: '/about-us#values' },
        { name: 'Group Structure', href: '/about-us#structure' },
        { name: 'Regional Presence', href: '/about-us#presence' },
      ],
    },
    {
      name: 'Subsidiaries',
      href: '/subsidiaries',
      children: [
        {
          name: 'StoneCrest Resource Limited',
          href: '/subsidiaries#stonecrest-resource',
        },
        {
          name: 'StoneCrest Mining Corporation',
          href: '/subsidiaries#stonecrest-mining',
        },
      ],
    },
    {
      name: 'Sustainability & Community',
      href: '/sustainability',
      children: [
        {
          name: 'Environmental Management',
          href: '/sustainability#environment',
        },
        {
          name: 'Community Development & CDA',
          href: '/sustainability#community',
        },
        { name: 'Health & Safety', href: '/sustainability#safety' },
        {
          name: 'Rehabilitation & Closure',
          href: '/sustainability#rehabilitation',
        },
      ],
    },
    {
      name: 'Projects & Services',
      href: '/projects-services',
      children: [
        {
          name: 'Geological & Environmental Consultancy',
          href: '/projects-services#consultancy',
        },
        {
          name: 'Exploration Projects',
          href: '/projects-services#exploration',
        },
        { name: 'Mining Operations', href: '/projects-services#mining' },
      ],
    },
    { name: 'Media Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '#contact' },
  ],
  jg = () => {
    const [s, o] = R.useState(!1),
      [d, r] = R.useState(null),
      y = Rt(),
      j = (O) =>
        !!(
          (O === '/' && y.pathname === '/') ||
          (O !== '/' && (y.pathname === O || y.pathname.startsWith(O + '/')))
        ),
      z = (O) => {
        r(d === O ? null : O);
      };
    return c.jsxs('header', {
      className:
        'sticky top-0 z-50 w-full bg-white shadow-lg font-sans border-b border-slate-100',
      children: [
        c.jsx('div', {
          className: 'bg-[#2d5a27] text-white py-2 px-4 md:px-8',
          children: c.jsxs('div', {
            className:
              'max-w-7xl mx-auto flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest',
            children: [
              c.jsxs('div', {
                className: 'flex items-center space-x-6',
                children: [
                  c.jsxs('span', {
                    className: 'flex items-center gap-1.5 text-slate-100',
                    children: [
                      c.jsx(Em, { size: 12, className: 'text-amber-400' }),
                      'Liberia HQ',
                    ],
                  }),
                  c.jsx('span', {
                    className: 'hidden sm:inline text-white/20',
                    children: '|',
                  }),
                  c.jsx('span', {
                    className: 'hidden sm:inline text-amber-400 font-medium',
                    children: 'Guided by Science, Grounded in Sustainability',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'hidden md:flex gap-6 text-slate-100',
                children: [
                  c.jsx('a', {
                    href: '#',
                    className: 'hover:text-amber-400 transition-colors',
                    children: 'Client Portal',
                  }),
                  c.jsx('a', {
                    href: '#',
                    className: 'hover:text-amber-400 transition-colors',
                    children: 'Careers',
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx('div', {
          className: 'bg-white',
          children: c.jsx('div', {
            className: 'max-w-7xl mx-auto px-4 md:px-8',
            children: c.jsxs('div', {
              className: 'flex justify-between items-center h-24 md:h-32',
              children: [
                c.jsxs(at, {
                  to: '/',
                  className: 'flex-shrink-0 flex items-center gap-4 group',
                  children: [
                    c.jsx(Hs, {
                      className:
                        'w-16 h-16 md:w-24 md:h-24 shadow-xl transition-transform duration-500 group-hover:scale-105',
                    }),
                    c.jsxs('div', {
                      className: 'flex flex-col',
                      children: [
                        c.jsx('span', {
                          className:
                            'text-[#2d5a27] font-black text-xl md:text-2xl leading-none tracking-tight',
                          children: 'GeoMining',
                        }),
                        c.jsx('span', {
                          className:
                            'text-slate-500 text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em] mt-2 max-w-[180px]',
                          children: 'AND ENVIRONMENTAL CONSULTANCY',
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsx('nav', {
                  className: 'hidden xl:flex space-x-1 h-full items-center',
                  children: im.map((O) =>
                    c.jsxs(
                      'div',
                      {
                        className: 'relative group h-full flex items-center',
                        children: [
                          c.jsxs(at, {
                            to: O.href,
                            className: `px-4 py-2 font-bold text-[10px] uppercase tracking-wider transition-all flex items-center gap-1.5 h-full ${j(O.href) ? 'text-[#2d5a27] border-b-4 border-[#2d5a27]' : 'text-slate-600 hover:text-[#2d5a27]'}`,
                            children: [
                              O.name,
                              O.children &&
                                c.jsx(nm, {
                                  size: 12,
                                  className: 'opacity-40',
                                }),
                            ],
                          }),
                          O.children &&
                            c.jsx('div', {
                              className:
                                'absolute top-full left-0 w-72 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border-t-4 border-[#2d5a27]',
                              children: c.jsx('div', {
                                className: 'py-2',
                                children: O.children.map((N) =>
                                  c.jsx(
                                    at,
                                    {
                                      to: N.href,
                                      className:
                                        'block px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-slate-600 hover:bg-slate-50 hover:text-[#2d5a27] transition-colors border-b border-slate-50 last:border-0',
                                      children: N.name,
                                    },
                                    N.name
                                  )
                                ),
                              }),
                            }),
                        ],
                      },
                      O.name
                    )
                  ),
                }),
                c.jsx('div', {
                  className: 'xl:hidden',
                  children: c.jsx('button', {
                    onClick: () => o(!s),
                    className:
                      'text-slate-900 hover:text-[#2d5a27] focus:outline-none p-3 bg-slate-50 rounded-full transition-colors',
                    children: s
                      ? c.jsx(Mm, { size: 24 })
                      : c.jsx(Jv, { size: 24 }),
                  }),
                }),
              ],
            }),
          }),
        }),
        s &&
          c.jsx('div', {
            className:
              'xl:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full h-[calc(100vh-130px)] overflow-y-auto',
            children: c.jsx('div', {
              className: 'px-6 pt-6 pb-24 space-y-2',
              children: im.map((O) =>
                c.jsxs(
                  'div',
                  {
                    className: 'border-b border-slate-50 last:border-0',
                    children: [
                      c.jsxs('div', {
                        className: 'flex justify-between items-center py-1',
                        children: [
                          c.jsx(at, {
                            to: O.href,
                            className:
                              'block py-4 text-sm font-bold text-slate-900 uppercase tracking-tight hover:text-[#2d5a27] flex-grow',
                            onClick: () => !O.children && o(!1),
                            children: O.name,
                          }),
                          O.children &&
                            c.jsx('button', {
                              onClick: () => z(O.name),
                              className: 'p-4 text-slate-400',
                              children:
                                d === O.name
                                  ? c.jsx(nm, { size: 20 })
                                  : c.jsx(xv, { size: 20 }),
                            }),
                        ],
                      }),
                      O.children &&
                        d === O.name &&
                        c.jsx('div', {
                          className: 'bg-slate-50 px-4 pb-4 mb-4 rounded-xl',
                          children: O.children.map((N) =>
                            c.jsx(
                              at,
                              {
                                to: N.href,
                                className:
                                  'block py-3.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#2d5a27] border-l-2 border-slate-200 pl-4 transition-all',
                                onClick: () => o(!1),
                                children: N.name,
                              },
                              N.name
                            )
                          ),
                        }),
                    ],
                  },
                  O.name
                )
              ),
            }),
          }),
      ],
    });
  },
  Ng = () => {
    const [s, o] = R.useState({ name: '', email: '', message: '' }),
      [d, r] = R.useState(!1),
      [y, j] = R.useState(!1),
      z = (N) => {
        (N.preventDefault(),
          r(!0),
          setTimeout(() => {
            (r(!1),
              j(!0),
              o({ name: '', email: '', message: '' }),
              setTimeout(() => j(!1), 5e3));
          }, 1e3));
      },
      O = (N) => {
        const { name: p, value: D } = N.target;
        o((U) => ({ ...U, [p]: D }));
      };
    return c.jsx('footer', {
      className:
        'bg-slate-900 text-white pt-16 pb-8 border-t-4 border-[#2d5a27]',
      id: 'contact',
      children: c.jsxs('div', {
        className: 'max-w-7xl mx-auto px-4 md:px-8',
        children: [
          c.jsxs('div', {
            className:
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16',
            children: [
              c.jsxs('div', {
                children: [
                  c.jsxs('div', {
                    className: 'flex items-center gap-4 mb-6',
                    children: [
                      c.jsx(Hs, { className: 'w-16 h-16 shadow-lg' }),
                      c.jsxs('div', {
                        className: 'flex flex-col',
                        children: [
                          c.jsx('h3', {
                            className: 'text-lg font-black tracking-tighter',
                            children: 'GeoMining',
                          }),
                          c.jsx('span', {
                            className:
                              'text-[8px] text-slate-400 uppercase tracking-widest',
                            children: 'Consultancy',
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx('p', {
                    className: 'text-slate-400 text-sm leading-relaxed mb-6',
                    children:
                      'Advancing Responsible Mineral Development in Liberia and West Africa. Guided by Science, Grounded in Sustainability.',
                  }),
                  c.jsxs('div', {
                    className: 'flex space-x-4',
                    children: [
                      c.jsx('a', {
                        href: '#',
                        className:
                          'w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-[#2d5a27] transition-all',
                        children: c.jsx(wv, { size: 18 }),
                      }),
                      c.jsx('a', {
                        href: '#',
                        className:
                          'w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-[#2d5a27] transition-all',
                        children: c.jsx(yg, { size: 18 }),
                      }),
                      c.jsx('a', {
                        href: '#',
                        className:
                          'w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-[#2d5a27] transition-all',
                        children: c.jsx(zv, { size: 18 }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                children: [
                  c.jsx('h4', {
                    className:
                      'text-amber-500 font-bold uppercase tracking-wider text-xs mb-6',
                    children: 'The Group',
                  }),
                  c.jsxs('ul', {
                    className: 'space-y-3 text-sm text-slate-300 font-medium',
                    children: [
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/about-us',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'About Us',
                        }),
                      }),
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/subsidiaries',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Subsidiaries',
                        }),
                      }),
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/gallery',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Media Gallery',
                        }),
                      }),
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/sustainability',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Sustainability',
                        }),
                      }),
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/governance',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Governance',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                children: [
                  c.jsx('h4', {
                    className:
                      'text-amber-500 font-bold uppercase tracking-wider text-xs mb-6',
                    children: 'Services',
                  }),
                  c.jsxs('ul', {
                    className: 'space-y-3 text-sm text-slate-300 font-medium',
                    children: [
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/projects-services',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Geological Consultancy',
                        }),
                      }),
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/projects-services',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Mining Operations',
                        }),
                      }),
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/projects-services',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Environmental Impact',
                        }),
                      }),
                      c.jsx('li', {
                        children: c.jsx(at, {
                          to: '/projects-services',
                          className: 'hover:text-amber-500 transition-colors',
                          children: 'Resource Exploration',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                children: [
                  c.jsx('h4', {
                    className:
                      'text-amber-500 font-bold uppercase tracking-wider text-xs mb-6',
                    children: 'Direct Contact',
                  }),
                  c.jsxs('ul', {
                    className: 'space-y-4 text-sm text-slate-300 mb-8',
                    children: [
                      c.jsxs('li', {
                        className: 'flex items-start gap-3',
                        children: [
                          c.jsx(Em, {
                            size: 18,
                            className: 'text-[#2d5a27] mt-0.5 shrink-0',
                          }),
                          c.jsxs('span', {
                            children: [
                              'Monrovia, Liberia',
                              c.jsx('br', {}),
                              'West Africa',
                            ],
                          }),
                        ],
                      }),
                      c.jsxs('li', {
                        className: 'flex items-center gap-3',
                        children: [
                          c.jsx(Fv, {
                            size: 18,
                            className: 'text-[#2d5a27] shrink-0',
                          }),
                          c.jsx('span', { children: '+231 77 000 0000' }),
                        ],
                      }),
                      c.jsxs('li', {
                        className: 'flex items-center gap-3',
                        children: [
                          c.jsx(Xv, {
                            size: 18,
                            className: 'text-[#2d5a27] shrink-0',
                          }),
                          c.jsx('a', {
                            href: 'mailto:info@geominingconsult.com',
                            className: 'hover:text-amber-500 break-all',
                            children: 'info@geominingconsult.com',
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs('div', {
                    className:
                      'bg-slate-800/50 p-6 rounded-lg border border-slate-800',
                    children: [
                      c.jsxs('h5', {
                        className:
                          'text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2',
                        children: [
                          c.jsx(fg, { size: 12, className: 'text-amber-500' }),
                          'Quick Inquiry',
                        ],
                      }),
                      c.jsxs('form', {
                        onSubmit: z,
                        className: 'space-y-3',
                        children: [
                          c.jsx('input', {
                            type: 'text',
                            name: 'name',
                            value: s.name,
                            onChange: O,
                            placeholder: 'Your Name',
                            required: !0,
                            className:
                              'w-full bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-amber-500 transition-colors',
                          }),
                          c.jsx('input', {
                            type: 'email',
                            name: 'email',
                            value: s.email,
                            onChange: O,
                            placeholder: 'Your Email',
                            required: !0,
                            className:
                              'w-full bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-amber-500 transition-colors',
                          }),
                          c.jsx('textarea', {
                            name: 'message',
                            value: s.message,
                            onChange: O,
                            placeholder: 'Your Message',
                            required: !0,
                            rows: 2,
                            className:
                              'w-full bg-slate-900 border border-slate-700 text-white text-xs px-3 py-2.5 rounded-md focus:outline-none focus:border-amber-500 transition-colors resize-none',
                          }),
                          c.jsx('button', {
                            type: 'submit',
                            disabled: d,
                            className: `w-full py-2.5 px-4 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${y ? 'bg-green-600 text-white' : 'bg-amber-500 text-slate-900 hover:bg-white'} disabled:opacity-50`,
                            children: d
                              ? 'Sending...'
                              : y
                                ? 'Message Sent'
                                : 'Send Message',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs('div', {
            className:
              'border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest',
            children: [
              c.jsxs('p', {
                children: [
                  '© ',
                  new Date().getFullYear(),
                  ' GeoMining and Environmental Consultancy. All rights reserved.',
                ],
              }),
              c.jsxs('div', {
                className: 'flex space-x-6 mt-4 md:mt-0',
                children: [
                  c.jsx('a', {
                    href: '#',
                    className: 'hover:text-white transition-colors',
                    children: 'Privacy Policy',
                  }),
                  c.jsx('a', {
                    href: '#',
                    className: 'hover:text-white transition-colors',
                    children: 'Terms of Service',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Eg = () => {
    const [s, o] = R.useState(!1);
    return c.jsxs('div', {
      className:
        'relative w-full h-[600px] md:h-[750px] bg-slate-900 overflow-hidden',
      id: 'about',
      children: [
        c.jsx('img', {
          src: './hero-background.jpg',
          alt: 'GEO Mining Operations',
          onLoad: () => o(!0),
          className: `absolute inset-0 w-full h-full object-cover object-right md:object-center transition-all duration-1000 ${s ? 'opacity-80 scale-100 blur-0' : 'opacity-0 scale-110 blur-xl'}`,
        }),
        !s &&
          c.jsx('div', {
            className:
              'absolute inset-0 bg-slate-900 flex items-center justify-center',
            children: c.jsx('div', {
              className:
                'w-12 h-12 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin',
            }),
          }),
        c.jsx('div', {
          className:
            'absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10',
        }),
        c.jsx('div', { className: 'absolute inset-0 bg-black/10 z-10' }),
        c.jsx('div', {
          className:
            'relative z-20 max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center',
          children: c.jsxs('div', {
            className: 'max-w-4xl animate-fade-in-up',
            children: [
              c.jsxs('div', {
                className:
                  'inline-flex items-center gap-3 py-2 px-4 mb-8 bg-[#2d5a27] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm shadow-2xl',
                children: [
                  c.jsx('span', {
                    className:
                      'w-2 h-2 bg-amber-400 rounded-full animate-pulse',
                  }),
                  'About The Consultancy',
                ],
              }),
              c.jsxs('h1', {
                className:
                  'text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] mb-8 drop-shadow-2xl',
                children: [
                  'Advancing Responsible ',
                  c.jsx('br', {}),
                  c.jsx('strong', {
                    className:
                      'font-extrabold text-amber-400 uppercase tracking-tighter',
                    children: 'Mineral Development',
                  }),
                ],
              }),
              c.jsx('div', {
                className:
                  'max-w-xl border-l-4 border-amber-500 pl-8 py-3 bg-black/20 backdrop-blur-sm',
                children: c.jsx('p', {
                  className:
                    'text-lg md:text-xl text-slate-100 font-medium leading-relaxed',
                  children:
                    'Geo Mining & Environmental Consultancy is a Liberian-based group committed to the responsible development of mineral resources across West Africa.',
                }),
              }),
              c.jsxs('div', {
                className: 'mt-12 flex flex-wrap gap-5',
                children: [
                  c.jsx('a', {
                    href: '#contact',
                    className:
                      'bg-amber-500 text-slate-900 px-12 py-5 font-black text-xs uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_20px_50px_rgba(245,158,11,0.3)]',
                    children: 'Partner With Us',
                  }),
                  c.jsx('a', {
                    href: '#overview',
                    className:
                      'bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all transform hover:-translate-y-1',
                    children: 'Our Vision',
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsx('div', {
          className:
            'absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-transparent to-transparent z-30',
        }),
        c.jsx('div', {
          className:
            'absolute bottom-10 left-8 hidden md:block animate-bounce opacity-30 z-30',
          children: c.jsx('div', { className: 'w-px h-16 bg-white' }),
        }),
      ],
    });
  },
  zg = () =>
    c.jsx('section', {
      id: 'structure',
      className: 'py-20 bg-white',
      children: c.jsxs('div', {
        className: 'max-w-7xl mx-auto px-4 md:px-8',
        children: [
          c.jsxs('div', {
            className: 'mb-16 max-w-3xl',
            children: [
              c.jsx('h2', {
                className:
                  'text-amber-500 font-bold uppercase tracking-widest text-sm mb-3',
                children: 'Group Structure',
              }),
              c.jsx('h3', {
                className:
                  'text-3xl md:text-4xl font-light text-slate-900 mb-6',
                children: 'An Integrated Mining Value Chain',
              }),
              c.jsx('p', {
                className: 'text-slate-600 leading-relaxed',
                children:
                  'Geo Mining & Environmental Consultancy operates as a parent holding and strategic company, overseeing two specialized subsidiaries that together deliver integrated solutions from exploration to production.',
              }),
            ],
          }),
          c.jsxs('div', {
            className: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
            children: [
              c.jsxs('div', {
                className:
                  'bg-slate-900 text-white p-8 rounded-sm relative overflow-hidden group',
                children: [
                  c.jsx('div', {
                    className:
                      'absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity',
                    children: c.jsx(jm, { size: 120 }),
                  }),
                  c.jsxs('div', {
                    className: 'relative z-10',
                    children: [
                      c.jsx('div', {
                        className:
                          'w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 p-1',
                        children: c.jsx(Hs, { className: 'w-full h-full' }),
                      }),
                      c.jsx('h4', {
                        className: 'text-xl font-bold mb-2',
                        children: 'Geo Mining & Environmental Consultancy',
                      }),
                      c.jsx('p', {
                        className:
                          'text-amber-500 text-xs font-bold uppercase tracking-wider mb-6',
                        children: 'Parent Company',
                      }),
                      c.jsx('p', {
                        className:
                          'text-slate-300 text-sm mb-6 leading-relaxed',
                        children:
                          'Provides strategic leadership, technical oversight, and environmental governance. Serves as the foundation for all subsidiary operations.',
                      }),
                      c.jsxs('ul', {
                        className: 'space-y-2 text-sm text-slate-400',
                        children: [
                          c.jsxs('li', {
                            className: 'flex items-start gap-2',
                            children: [
                              c.jsx('span', {
                                className: 'text-amber-500 mt-1',
                                children: '▪',
                              }),
                              ' Geological consultancy & Feasibility',
                            ],
                          }),
                          c.jsxs('li', {
                            className: 'flex items-start gap-2',
                            children: [
                              c.jsx('span', {
                                className: 'text-amber-500 mt-1',
                                children: '▪',
                              }),
                              ' Environmental & Social Impact (ESIA)',
                            ],
                          }),
                          c.jsxs('li', {
                            className: 'flex items-start gap-2',
                            children: [
                              c.jsx('span', {
                                className: 'text-amber-500 mt-1',
                                children: '▪',
                              }),
                              ' Regulatory Compliance (EPA)',
                            ],
                          }),
                          c.jsxs('li', {
                            className: 'flex items-start gap-2',
                            children: [
                              c.jsx('span', {
                                className: 'text-amber-500 mt-1',
                                children: '▪',
                              }),
                              ' ESG Policy & Community Relations',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx('div', {
                className:
                  'bg-slate-50 border border-slate-200 p-8 rounded-sm relative overflow-hidden group hover:border-amber-500 transition-colors',
                children: c.jsxs('div', {
                  className: 'relative z-10',
                  children: [
                    c.jsx('div', {
                      className: 'h-16 mb-6 flex items-center',
                      children: c.jsx('img', {
                        src: 'https://placehold.co/200x200/png?text=Resource+Logo',
                        alt: 'StoneCrest Resource Limited Logo',
                        className: 'max-h-full max-w-full object-contain',
                      }),
                    }),
                    c.jsx('h4', {
                      className: 'text-xl font-bold text-slate-900 mb-2',
                      children: 'StoneCrest Resource Limited',
                    }),
                    c.jsx('p', {
                      className:
                        'text-amber-600 text-xs font-bold uppercase tracking-wider mb-6',
                      children: 'Exploration & Resource Development',
                    }),
                    c.jsx('p', {
                      className: 'text-slate-600 text-sm mb-6 leading-relaxed',
                      children:
                        'Focuses on identifying, evaluating, and advancing mineral resources through early-stage development and geological surveys.',
                    }),
                    c.jsxs('ul', {
                      className: 'space-y-2 text-sm text-slate-600',
                      children: [
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' Mineral exploration & surveys',
                          ],
                        }),
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' Mapping, sampling & data analysis',
                          ],
                        }),
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' Resource estimation',
                          ],
                        }),
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' Early project development',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              c.jsx('div', {
                className:
                  'bg-slate-50 border border-slate-200 p-8 rounded-sm relative overflow-hidden group hover:border-amber-500 transition-colors',
                children: c.jsxs('div', {
                  className: 'relative z-10',
                  children: [
                    c.jsx('div', {
                      className: 'h-16 mb-6 flex items-center',
                      children: c.jsx('img', {
                        src: 'https://placehold.co/300x200/png?text=Mining+Logo',
                        alt: 'StoneCrest Mining Corporation Logo',
                        className: 'max-h-full max-w-full object-contain',
                      }),
                    }),
                    c.jsx('h4', {
                      className: 'text-xl font-bold text-slate-900 mb-2',
                      children: 'StoneCrest Mining Corporation',
                    }),
                    c.jsx('p', {
                      className:
                        'text-amber-600 text-xs font-bold uppercase tracking-wider mb-6',
                      children: 'Mining Operations & Production',
                    }),
                    c.jsx('p', {
                      className: 'text-slate-600 text-sm mb-6 leading-relaxed',
                      children:
                        'Responsible for mine development and production, translating exploration success into operational projects safely and responsibly.',
                    }),
                    c.jsxs('ul', {
                      className: 'space-y-2 text-sm text-slate-600',
                      children: [
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' Mine development & planning',
                          ],
                        }),
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' Mining & processing operations',
                          ],
                        }),
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' HSE management',
                          ],
                        }),
                        c.jsxs('li', {
                          className: 'flex items-start gap-2',
                          children: [
                            c.jsx('span', {
                              className: 'text-amber-500 mt-1',
                              children: '▪',
                            }),
                            ' Site rehabilitation & closure',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  um = () => {
    const { hash: s } = Rt();
    return (
      R.useEffect(() => {
        if (s) {
          const o = document.getElementById(s.replace('#', ''));
          o && o.scrollIntoView({ behavior: 'smooth' });
        }
      }, [s]),
      c.jsxs('div', {
        children: [
          c.jsx(Eg, {}),
          c.jsxs('section', {
            id: 'overview',
            className:
              'py-20 max-w-4xl mx-auto px-4 md:px-8 text-center scroll-mt-24',
            children: [
              c.jsx('h2', {
                className: 'text-3xl font-light text-slate-900 mb-6',
                children: 'About The Group',
              }),
              c.jsx('p', {
                className: 'text-lg text-slate-600 leading-relaxed mb-8',
                children:
                  'Geo Mining & Environmental Consultancy is a Liberian-based mining and environmental services group providing integrated geological, environmental, and strategic support to mining projects across Liberia and the wider West African region. Headquartered in Liberia, the company serves as the parent and holding entity overseeing the Group’s subsidiaries and setting governance, environmental, and operational standards.',
              }),
              c.jsx('p', {
                className: 'text-slate-600 leading-relaxed',
                children:
                  'With a strong focus on responsible resource development, Geo Mining & Environmental Consultancy delivers technical excellence while ensuring compliance with national regulations and international best practices.',
              }),
            ],
          }),
          c.jsx('section', {
            className: 'bg-slate-50 py-20',
            children: c.jsxs('div', {
              className:
                'max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16',
              children: [
                c.jsxs('div', {
                  children: [
                    c.jsxs('div', {
                      className: 'flex items-center gap-3 mb-4',
                      children: [
                        c.jsx('div', {
                          className:
                            'p-2 bg-amber-500 rounded-sm text-slate-900',
                          children: c.jsx(Cv, { size: 20 }),
                        }),
                        c.jsx('h3', {
                          className: 'text-2xl font-bold text-slate-900',
                          children: 'Who We Are',
                        }),
                      ],
                    }),
                    c.jsx('p', {
                      className: 'text-slate-600 leading-relaxed mb-6',
                      children:
                        'Geo Mining & Environmental Consultancy provides leadership, technical oversight, and environmental governance across the Group. The company plays a central role in guiding mining projects from early-stage assessment through development and production, ensuring that environmental protection, community engagement, and sustainability are embedded in every project.',
                    }),
                  ],
                }),
                c.jsxs('div', {
                  children: [
                    c.jsxs('div', {
                      className: 'flex items-center gap-3 mb-4',
                      children: [
                        c.jsx('div', {
                          className:
                            'p-2 bg-amber-500 rounded-sm text-slate-900',
                          children: c.jsx(jm, { size: 20 }),
                        }),
                        c.jsx('h3', {
                          className: 'text-2xl font-bold text-slate-900',
                          children: 'What We Do',
                        }),
                      ],
                    }),
                    c.jsx('ul', {
                      className: 'space-y-4 text-slate-700',
                      children: [
                        'Geological consultancy and feasibility studies',
                        'Environmental and Social Impact Assessments (ESIA)',
                        'Regulatory compliance with the Liberia EPA & Ministry of Mines',
                        'ESG policy development and implementation',
                        'Community engagement and stakeholder management',
                        'Risk management and project oversight',
                      ].map((o, d) =>
                        c.jsxs(
                          'li',
                          {
                            className: 'flex items-start gap-3',
                            children: [
                              c.jsx(Sv, {
                                className: 'text-amber-600 shrink-0 mt-1',
                                size: 18,
                              }),
                              c.jsx('span', { children: o }),
                            ],
                          },
                          d
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
          c.jsx('div', {
            id: 'structure',
            className: 'scroll-mt-24',
            children: c.jsx(zg, {}),
          }),
          c.jsx('section', {
            id: 'values',
            className: 'py-20 bg-slate-900 text-white scroll-mt-24',
            children: c.jsxs('div', {
              className: 'max-w-7xl mx-auto px-4 md:px-8',
              children: [
                c.jsxs('div', {
                  className: 'mb-12 max-w-3xl',
                  children: [
                    c.jsx('h2', {
                      className:
                        'text-amber-500 font-bold uppercase tracking-widest text-sm mb-3',
                      children: 'Core Principles',
                    }),
                    c.jsx('h3', {
                      className: 'text-3xl font-light mb-6',
                      children: 'Our Purpose & Values',
                    }),
                    c.jsx('p', {
                      className: 'text-lg text-slate-300 leading-relaxed',
                      children:
                        'To responsibly develop mineral resources in Liberia and West Africa while protecting the environment, empowering communities, and contributing to sustainable economic growth.',
                    }),
                  ],
                }),
                c.jsx('div', {
                  className:
                    'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6',
                  children: [
                    'Environmental Stewardship',
                    'Integrity & Transparency',
                    'Technical Excellence',
                    'Community Partnership',
                    'Local Empowerment',
                  ].map((o, d) =>
                    c.jsxs(
                      'div',
                      {
                        className:
                          'bg-slate-800 p-6 rounded-sm border-t-4 border-amber-500 hover:bg-slate-700 transition-colors',
                        children: [
                          c.jsx(vg, {
                            className: 'text-amber-500 mb-4',
                            size: 24,
                          }),
                          c.jsx('h4', {
                            className: 'font-bold text-lg',
                            children: o,
                          }),
                        ],
                      },
                      d
                    )
                  ),
                }),
              ],
            }),
          }),
          c.jsx('section', {
            id: 'presence',
            className: 'py-20 bg-white scroll-mt-24',
            children: c.jsxs('div', {
              className:
                'max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12',
              children: [
                c.jsxs('div', {
                  className: 'flex-1',
                  children: [
                    c.jsx('h3', {
                      className: 'text-2xl font-bold text-slate-900 mb-4',
                      children: 'Our Regional Presence',
                    }),
                    c.jsx('p', {
                      className: 'text-slate-600 leading-relaxed mb-6',
                      children:
                        'With operations rooted in Liberia and experience across West Africa, Geo Mining & Environmental Consultancy combines local insight with regional expertise to deliver solutions tailored to the realities of African mining environments.',
                    }),
                  ],
                }),
                c.jsx('div', {
                  className: 'flex-1',
                  children: c.jsx('img', {
                    src: 'https://picsum.photos/800/400?grayscale&blur=1',
                    alt: 'Regional Map',
                    className:
                      'w-full h-auto rounded-sm shadow-lg grayscale hover:grayscale-0 transition-all',
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Hn = ({ title: s, subtitle: o, category: d, image: r }) =>
    c.jsxs('div', {
      className: 'relative w-full h-[400px] bg-slate-900 overflow-hidden',
      children: [
        c.jsx('div', {
          className: 'absolute inset-0 bg-cover bg-center',
          style: {
            backgroundImage: `url("${r || 'https://picsum.photos/1920/600?grayscale&blur=2'}")`,
            opacity: 0.5,
          },
        }),
        c.jsx('div', {
          className:
            'absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent',
        }),
        c.jsx('div', {
          className:
            'relative max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col justify-center',
          children: c.jsxs('div', {
            className: 'max-w-3xl animate-fade-in-up',
            children: [
              d &&
                c.jsx('span', {
                  className:
                    'inline-block py-1 px-3 mb-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-sm',
                  children: d,
                }),
              c.jsx('h1', {
                className:
                  'text-4xl md:text-5xl font-light text-white leading-tight mb-6',
                children: s,
              }),
              o &&
                c.jsx('p', {
                  className:
                    'text-lg text-slate-200 font-light leading-relaxed border-l-4 border-amber-500 pl-6',
                  children: o,
                }),
            ],
          }),
        }),
      ],
    }),
  Mg = () => {
    const { hash: s } = Rt();
    return (
      R.useEffect(() => {
        if (s) {
          const o = document.getElementById(s.replace('#', ''));
          o && o.scrollIntoView({ behavior: 'smooth' });
        }
      }, [s]),
      c.jsxs('div', {
        children: [
          c.jsx(Hn, {
            title: 'Our Subsidiaries',
            category: 'Group Structure',
            subtitle:
              'Specialized subsidiaries delivering the complete mining value chain.',
            image: 'https://picsum.photos/1920/800?grayscale',
          }),
          c.jsxs('section', {
            className: 'py-20 bg-white',
            children: [
              c.jsxs('div', {
                className: 'max-w-4xl mx-auto px-4 md:px-8 text-center mb-16',
                children: [
                  c.jsx('h2', {
                    className: 'text-3xl font-light text-slate-900 mb-6',
                    children: 'Our Operating Companies',
                  }),
                  c.jsx('p', {
                    className: 'text-lg text-slate-600 leading-relaxed',
                    children:
                      'Geo Mining & Environmental Consultancy oversees two specialized subsidiaries, each focused on distinct but complementary areas of the mining value chain.',
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'max-w-7xl mx-auto px-4 md:px-8 space-y-16',
                children: [
                  c.jsx('div', {
                    id: 'stonecrest-resource',
                    className:
                      'flex flex-col md:flex-row gap-12 items-start border-l-4 border-amber-500 pl-6 md:pl-12 py-4 scroll-mt-24',
                    children: c.jsxs('div', {
                      className: 'flex-1',
                      children: [
                        c.jsxs('div', {
                          className:
                            'flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6',
                          children: [
                            c.jsx('div', {
                              className:
                                'w-32 h-32 flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 p-2',
                              children: c.jsx('img', {
                                src: 'https://placehold.co/400x400/png?text=Resource+Logo',
                                alt: 'StoneCrest Resource Limited Logo',
                                className:
                                  'max-w-full max-h-full object-contain',
                              }),
                            }),
                            c.jsxs('div', {
                              children: [
                                c.jsx('h3', {
                                  className:
                                    'text-3xl font-bold text-slate-900',
                                  children: 'StoneCrest Resource Limited',
                                }),
                                c.jsx('span', {
                                  className:
                                    'text-amber-600 font-bold uppercase text-xs tracking-wider',
                                  children:
                                    'Exploration & Resource Development',
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx('p', {
                          className:
                            'text-slate-600 mb-6 leading-relaxed text-lg',
                          children:
                            'StoneCrest Resource Limited is responsible for mineral exploration and early-stage resource development across Liberia and the West African region. The company focuses on identifying and advancing mineral opportunities through sound geological practices and responsible exploration methods.',
                        }),
                        c.jsxs('div', {
                          className:
                            'bg-slate-50 p-6 rounded-sm border border-slate-100',
                          children: [
                            c.jsx('h4', {
                              className:
                                'font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2',
                              children: 'Core Activities',
                            }),
                            c.jsxs('ul', {
                              className:
                                'grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700',
                              children: [
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-amber-500 rounded-full',
                                    }),
                                    ' Geological mapping and mineral exploration',
                                  ],
                                }),
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-amber-500 rounded-full',
                                    }),
                                    ' Sampling, data analysis, and interpretation',
                                  ],
                                }),
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-amber-500 rounded-full',
                                    }),
                                    ' Resource estimation and technical reporting',
                                  ],
                                }),
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-amber-500 rounded-full',
                                    }),
                                    ' Early project development and evaluation',
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx('p', {
                          className: 'text-sm text-slate-500 mt-4 italic',
                          children:
                            'StoneCrest Resource Limited operates in strict alignment with the environmental, governance, and sustainability frameworks established by the parent company.',
                        }),
                      ],
                    }),
                  }),
                  c.jsx('hr', { className: 'border-slate-100' }),
                  c.jsx('div', {
                    id: 'stonecrest-mining',
                    className:
                      'flex flex-col md:flex-row gap-12 items-start border-l-4 border-slate-900 pl-6 md:pl-12 py-4 scroll-mt-24',
                    children: c.jsxs('div', {
                      className: 'flex-1',
                      children: [
                        c.jsxs('div', {
                          className:
                            'flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6',
                          children: [
                            c.jsx('div', {
                              className:
                                'w-48 h-32 flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 p-2',
                              children: c.jsx('img', {
                                src: 'https://placehold.co/600x400/png?text=Mining+Corp+Logo',
                                alt: 'StoneCrest Mining Corporation Logo',
                                className:
                                  'max-w-full max-h-full object-contain',
                              }),
                            }),
                            c.jsxs('div', {
                              children: [
                                c.jsx('h3', {
                                  className:
                                    'text-3xl font-bold text-slate-900',
                                  children: 'StoneCrest Mining Corporation',
                                }),
                                c.jsx('span', {
                                  className:
                                    'text-amber-600 font-bold uppercase text-xs tracking-wider',
                                  children: 'Mining Operations & Production',
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx('p', {
                          className:
                            'text-slate-600 mb-6 leading-relaxed text-lg',
                          children:
                            'StoneCrest Mining Corporation leads the Group’s mining and production activities. The company is responsible for developing and operating mining projects in a safe, efficient, and environmentally responsible manner.',
                        }),
                        c.jsxs('div', {
                          className:
                            'bg-slate-50 p-6 rounded-sm border border-slate-100',
                          children: [
                            c.jsx('h4', {
                              className:
                                'font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2',
                              children: 'Core Activities',
                            }),
                            c.jsxs('ul', {
                              className:
                                'grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700',
                              children: [
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-slate-900 rounded-full',
                                    }),
                                    ' Mine development and operational planning',
                                  ],
                                }),
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-slate-900 rounded-full',
                                    }),
                                    ' Mining and processing operations',
                                  ],
                                }),
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-slate-900 rounded-full',
                                    }),
                                    ' Health, safety, and environmental management',
                                  ],
                                }),
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-slate-900 rounded-full',
                                    }),
                                    ' Implementation of Environmental Management Plans',
                                  ],
                                }),
                                c.jsxs('li', {
                                  className: 'flex items-center gap-2',
                                  children: [
                                    c.jsx('div', {
                                      className:
                                        'w-1.5 h-1.5 bg-slate-900 rounded-full',
                                    }),
                                    ' Mine rehabilitation and closure planning',
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx('p', {
                          className: 'text-sm text-slate-500 mt-4 italic',
                          children:
                            'StoneCrest Mining Corporation executes projects in full compliance with Liberian mining laws, community agreements, and ESG standards.',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          c.jsx('section', {
            className: 'bg-slate-900 text-white py-20',
            children: c.jsxs('div', {
              className: 'max-w-4xl mx-auto px-4 md:px-8 text-center',
              children: [
                c.jsx(Rv, {
                  className: 'mx-auto text-amber-500 mb-6',
                  size: 48,
                }),
                c.jsx('h3', {
                  className: 'text-2xl font-bold mb-4',
                  children: 'Integrated Approach',
                }),
                c.jsx('p', {
                  className: 'text-slate-300 text-lg leading-relaxed',
                  children:
                    'Together, the subsidiaries operate within a structured framework that ensures seamless project development from exploration to production while maintaining high environmental and social standards.',
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  Ag = () => {
    const { hash: s } = Rt();
    R.useEffect(() => {
      if (s) {
        const d = document.getElementById(s.replace('#', ''));
        d && d.scrollIntoView({ behavior: 'smooth' });
      }
    }, [s]);
    const o = [
      {
        id: 'environment',
        icon: qv,
        label: 'Environmental Protection',
        meaning: 'EPA compliance, biodiversity, land restoration',
      },
      {
        id: 'community',
        icon: zm,
        label: 'Community Development',
        meaning: 'CDA, local benefits, stakeholder engagement',
      },
      {
        id: 'safety',
        icon: Nm,
        label: 'Occupational Safety',
        meaning: 'Worker safety & training',
      },
      {
        id: 'compliance',
        icon: ig,
        label: 'Regulatory Compliance',
        meaning: 'Mining law, EPA permits',
      },
      {
        id: 'employment',
        icon: xg,
        label: 'Local Employment',
        meaning: 'Liberian workforce & capacity building',
      },
      {
        id: 'rehabilitation',
        icon: tg,
        label: 'Rehabilitation & Closure',
        meaning: 'Post-mining land use',
      },
    ];
    return c.jsxs('div', {
      children: [
        c.jsx(Hn, {
          title: 'Sustainability & Community',
          category: 'Our Commitment',
          subtitle:
            'Sustainability is embedded across all Group activities and decision-making processes.',
          image: 'https://picsum.photos/1920/801?grayscale',
        }),
        c.jsxs('section', {
          className: 'py-20 bg-white',
          children: [
            c.jsxs('div', {
              className: 'max-w-4xl mx-auto px-4 md:px-8 mb-16 text-center',
              children: [
                c.jsx('h2', {
                  className: 'text-3xl font-light text-slate-900 mb-6',
                  children: 'Sustainability Framework',
                }),
                c.jsx('p', {
                  className: 'text-lg text-slate-600 leading-relaxed',
                  children:
                    'Geo Mining & Environmental Consultancy is committed to sustainable mining practices that protect the environment, support host communities, and create long-term value.',
                }),
              ],
            }),
            c.jsx('div', {
              className:
                'max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
              children: o.map((d) =>
                c.jsx(
                  'div',
                  {
                    id: d.id,
                    className:
                      'p-8 border border-slate-200 rounded-sm hover:border-amber-500 transition-colors group scroll-mt-24 bg-slate-50',
                    children: c.jsxs('div', {
                      className: 'flex flex-col items-center text-center',
                      children: [
                        c.jsx('div', {
                          className:
                            'w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all border border-slate-100',
                          children: c.jsx(d.icon, {
                            className:
                              'text-slate-700 group-hover:text-amber-600 transition-colors',
                            size: 32,
                            strokeWidth: 1.5,
                          }),
                        }),
                        c.jsx('h3', {
                          className: 'text-xl font-bold text-slate-900 mb-3',
                          children: d.label,
                        }),
                        c.jsx('p', {
                          className: 'text-slate-600 leading-relaxed text-sm',
                          children: d.meaning,
                        }),
                      ],
                    }),
                  },
                  d.id
                )
              ),
            }),
            c.jsx('div', {
              className: 'max-w-4xl mx-auto px-4 md:px-8 mt-20 text-center',
              children: c.jsxs('div', {
                className:
                  'bg-slate-50 p-10 rounded-sm border-t-4 border-slate-900',
                children: [
                  c.jsx(og, {
                    className: 'mx-auto text-slate-900 mb-4',
                    size: 40,
                  }),
                  c.jsx('h3', {
                    className: 'text-2xl font-bold text-slate-900 mb-4',
                    children: 'Our Commitment to the Future',
                  }),
                  c.jsx('p', {
                    className: 'text-slate-600 leading-relaxed',
                    children:
                      'Through responsible operations and continuous improvement, Geo Mining & Environmental Consultancy aims to contribute positively to Liberia’s natural resource sector and support sustainable development across West Africa.',
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Tg = () => {
    const { hash: s } = Rt();
    return (
      R.useEffect(() => {
        if (s) {
          const o = document.getElementById(s.replace('#', ''));
          o && o.scrollIntoView({ behavior: 'smooth' });
        }
      }, [s]),
      c.jsxs('div', {
        children: [
          c.jsx(Hn, {
            title: 'Governance & Compliance',
            category: 'Corporate Responsibility',
            subtitle:
              'Upholding the highest standards of ethical conduct, regulatory compliance, and transparency.',
            image: 'https://picsum.photos/1920/802?grayscale',
          }),
          c.jsxs('section', {
            className: 'py-20 bg-white',
            children: [
              c.jsxs('div', {
                id: 'framework',
                className:
                  'max-w-4xl mx-auto px-4 md:px-8 text-center mb-16 scroll-mt-24',
                children: [
                  c.jsx('h2', {
                    className: 'text-3xl font-light text-slate-900 mb-6',
                    children: 'Our Framework',
                  }),
                  c.jsx('p', {
                    className: 'text-lg text-slate-600 leading-relaxed',
                    children:
                      'At Geo Mining & Environmental Consultancy, strict adherence to national laws and international best practices is non-negotiable. Our governance framework ensures accountability at all levels of the organization.',
                  }),
                ],
              }),
              c.jsxs('div', {
                className:
                  'max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12',
                children: [
                  c.jsxs('div', {
                    className: 'space-y-8',
                    children: [
                      c.jsxs('div', {
                        id: 'compliance',
                        className: 'flex gap-6 scroll-mt-24',
                        children: [
                          c.jsx('div', {
                            className: 'flex-shrink-0',
                            children: c.jsx('div', {
                              className:
                                'w-12 h-12 bg-amber-500 rounded-sm flex items-center justify-center text-slate-900',
                              children: c.jsx(ag, { size: 24 }),
                            }),
                          }),
                          c.jsxs('div', {
                            children: [
                              c.jsx('h3', {
                                className:
                                  'text-xl font-bold text-slate-900 mb-3',
                                children: 'Regulatory Compliance',
                              }),
                              c.jsxs('p', {
                                className:
                                  'text-slate-600 mb-4 leading-relaxed',
                                children: [
                                  'We operate in full compliance with the ',
                                  c.jsx('strong', {
                                    children:
                                      'Liberia Environmental Protection Agency (EPA)',
                                  }),
                                  ' and the ',
                                  c.jsx('strong', {
                                    children: 'Ministry of Mines & Energy',
                                  }),
                                  '. Our operations meet all permitting requirements and regulatory standards set forth by the Government of Liberia.',
                                ],
                              }),
                              c.jsxs('ul', {
                                className: 'text-sm text-slate-500 space-y-2',
                                children: [
                                  c.jsx('li', {
                                    className: 'flex items-center gap-2',
                                    children:
                                      '✔ Liberia Mining and Minerals Law',
                                  }),
                                  c.jsx('li', {
                                    className: 'flex items-center gap-2',
                                    children:
                                      '✔ Environmental Protection and Management Law',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs('div', {
                        id: 'ethics',
                        className: 'flex gap-6 scroll-mt-24',
                        children: [
                          c.jsx('div', {
                            className: 'flex-shrink-0',
                            children: c.jsx('div', {
                              className:
                                'w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-white',
                              children: c.jsx(mg, { size: 24 }),
                            }),
                          }),
                          c.jsxs('div', {
                            children: [
                              c.jsx('h3', {
                                className:
                                  'text-xl font-bold text-slate-900 mb-3',
                                children: 'Ethical Business Conduct',
                              }),
                              c.jsx('p', {
                                className: 'text-slate-600 leading-relaxed',
                                children:
                                  'Integrity and transparency are core to our business model. We maintain a zero-tolerance policy towards corruption and are committed to ethical dealings with all stakeholders, partners, and government bodies.',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs('div', {
                    className: 'space-y-8',
                    children: [
                      c.jsxs('div', {
                        className: 'flex gap-6',
                        children: [
                          c.jsx('div', {
                            className: 'flex-shrink-0',
                            children: c.jsx('div', {
                              className:
                                'w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-white',
                              children: c.jsx(Av, { size: 24 }),
                            }),
                          }),
                          c.jsxs('div', {
                            children: [
                              c.jsx('h3', {
                                className:
                                  'text-xl font-bold text-slate-900 mb-3',
                                children: 'Risk Management',
                              }),
                              c.jsx('p', {
                                className: 'text-slate-600 leading-relaxed',
                                children:
                                  'Our comprehensive risk management strategies identify, assess, and mitigate operational, environmental, and social risks. Regular audits and oversight ensure our projects remain safe and sustainable.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs('div', {
                        className: 'flex gap-6',
                        children: [
                          c.jsx('div', {
                            className: 'flex-shrink-0',
                            children: c.jsx('div', {
                              className:
                                'w-12 h-12 bg-amber-500 rounded-sm flex items-center justify-center text-slate-900',
                              children: c.jsx(gv, { size: 24 }),
                            }),
                          }),
                          c.jsxs('div', {
                            children: [
                              c.jsx('h3', {
                                className:
                                  'text-xl font-bold text-slate-900 mb-3',
                                children: 'Corporate Oversight',
                              }),
                              c.jsx('p', {
                                className: 'text-slate-600 leading-relaxed',
                                children:
                                  'As the parent holding company, Geo Mining & Environmental Consultancy sets the governance tone for all subsidiaries, ensuring that StoneCrest Resource Limited and StoneCrest Mining Corporation adhere to the same rigorous standards.',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsx('section', {
            className: 'bg-slate-50 py-16 border-t border-slate-200',
            children: c.jsxs('div', {
              className: 'max-w-4xl mx-auto px-4 md:px-8 text-center',
              children: [
                c.jsx('h3', {
                  className: 'text-2xl font-bold text-slate-900 mb-4',
                  children: 'Commitment to Transparency',
                }),
                c.jsx('p', {
                  className: 'text-slate-600 mb-8',
                  children:
                    'We believe that transparent operations build trust with our communities and investors.',
                }),
                c.jsx('a', {
                  href: '#contact',
                  className:
                    'inline-block bg-slate-900 text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-amber-500 hover:text-slate-900 transition-colors rounded-sm',
                  children: 'Contact Compliance Team',
                }),
              ],
            }),
          }),
        ],
      })
    );
  },
  _g = () => {
    const { hash: s } = Rt();
    R.useEffect(() => {
      if (s) {
        const d = document.getElementById(s.replace('#', ''));
        d && d.scrollIntoView({ behavior: 'smooth' });
      }
    }, [s]);
    const o = [
      {
        id: 'consultancy',
        title: 'Geological Consultancy',
        description:
          'Comprehensive geological studies, feasibility assessments, and resource estimation to guide project development.',
        icon: cg,
      },
      {
        id: 'exploration',
        title: 'Exploration Services',
        description:
          'Mineral exploration including mapping, sampling, data analysis, and technical reporting for new discoveries.',
        icon: Wv,
      },
      {
        id: 'mining',
        title: 'Mining Operations',
        description:
          'End-to-end mine development, operational planning, and processing execution.',
        icon: Pv,
      },
      {
        title: 'Environmental Impact (ESIA)',
        description:
          'Full Environmental and Social Impact Assessments ensuring regulatory compliance and sustainability.',
        icon: Nv,
      },
      {
        title: 'Community Engagement',
        description:
          'Stakeholder management, Community Development Agreements (CDA), and social license to operate.',
        icon: zm,
      },
      {
        title: 'HSE Management',
        description:
          'Health, Safety, and Environmental management systems implementation and oversight.',
        icon: Nm,
      },
    ];
    return c.jsxs('div', {
      children: [
        c.jsx(Hn, {
          title: 'Projects & Services',
          category: 'What We Do',
          subtitle:
            'Delivering integrated solutions across the mining lifecycle, from exploration to rehabilitation.',
          image: 'https://picsum.photos/1920/803?grayscale',
        }),
        c.jsx('section', {
          className: 'py-20 bg-white',
          children: c.jsxs('div', {
            className: 'max-w-7xl mx-auto px-4 md:px-8',
            children: [
              c.jsxs('div', {
                className: 'text-center mb-16 max-w-3xl mx-auto',
                children: [
                  c.jsx('h2', {
                    className: 'text-3xl font-light text-slate-900 mb-6',
                    children: 'Our Expertise',
                  }),
                  c.jsx('p', {
                    className: 'text-lg text-slate-600 leading-relaxed',
                    children:
                      'Geo Mining & Environmental Consultancy offers a full suite of services tailored to the West African mining sector. Our integrated approach ensures technical excellence at every stage.',
                  }),
                ],
              }),
              c.jsx('div', {
                className:
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
                children: o.map((d, r) =>
                  c.jsxs(
                    'div',
                    {
                      id: d.id,
                      className:
                        'bg-slate-50 p-8 rounded-sm border border-slate-100 hover:border-amber-500 hover:shadow-md transition-all group scroll-mt-24',
                      children: [
                        c.jsx('div', {
                          className:
                            'w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-amber-500 transition-colors',
                          children: c.jsx(d.icon, {
                            className:
                              'text-slate-700 group-hover:text-slate-900 transition-colors',
                            size: 28,
                          }),
                        }),
                        c.jsx('h3', {
                          className: 'text-xl font-bold text-slate-900 mb-3',
                          children: d.title,
                        }),
                        c.jsx('p', {
                          className: 'text-slate-600 text-sm leading-relaxed',
                          children: d.description,
                        }),
                      ],
                    },
                    r
                  )
                ),
              }),
            ],
          }),
        }),
        c.jsx('section', {
          className: 'py-20 bg-slate-900 text-white',
          children: c.jsxs('div', {
            className:
              'max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12',
            children: [
              c.jsxs('div', {
                className: 'flex-1',
                children: [
                  c.jsx('h2', {
                    className:
                      'text-amber-500 font-bold uppercase tracking-widest text-sm mb-3',
                    children: 'Project Focus',
                  }),
                  c.jsx('h3', {
                    className: 'text-3xl font-light mb-6',
                    children: 'Operational Excellence',
                  }),
                  c.jsx('p', {
                    className: 'text-slate-300 leading-relaxed mb-8',
                    children:
                      'Our subsidiaries are currently engaged in key projects across Nimba, Grand Bassa, and Cape Mount. We deploy advanced technologies and responsible practices to unlock value while preserving the environment.',
                  }),
                  c.jsxs('ul', {
                    className: 'space-y-4 text-slate-400',
                    children: [
                      c.jsxs('li', {
                        className: 'flex items-center gap-3',
                        children: [
                          c.jsx('div', {
                            className: 'w-2 h-2 bg-amber-500 rounded-full',
                          }),
                          c.jsx('span', {
                            children: 'Gold and Iron Ore Production',
                          }),
                        ],
                      }),
                      c.jsxs('li', {
                        className: 'flex items-center gap-3',
                        children: [
                          c.jsx('div', {
                            className: 'w-2 h-2 bg-amber-500 rounded-full',
                          }),
                          c.jsx('span', {
                            children: 'Rehabilitation & Closure Planning',
                          }),
                        ],
                      }),
                      c.jsxs('li', {
                        className: 'flex items-center gap-3',
                        children: [
                          c.jsx('div', {
                            className: 'w-2 h-2 bg-amber-500 rounded-full',
                          }),
                          c.jsx('span', {
                            children: 'Local Workforce Development',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs('div', {
                className: 'flex-1 relative',
                children: [
                  c.jsx('div', {
                    className:
                      'absolute top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-sm z-0 hidden md:block',
                  }),
                  c.jsx('img', {
                    src: 'https://picsum.photos/800/500?grayscale',
                    alt: 'Mining Operation',
                    className: 'relative z-10 rounded-sm shadow-xl',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  cm = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=1200',
      category: 'Operations',
      title: 'Open Pit Operations',
      description:
        'Heavy machinery active at a primary extraction site in Liberia.',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1200',
      category: 'Exploration',
      title: 'Geological Core Sampling',
      description:
        'Exploration team conducting core analysis in the Nimba region.',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1574689049868-e94ed5301745?q=80&w=1200',
      category: 'Environment',
      title: 'Water Management System',
      description:
        'Advanced filtration systems ensuring zero discharge impact on local waterways.',
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200',
      category: 'Community',
      title: 'Education Support Program',
      description:
        'Handing over a new community learning center as part of the CDA.',
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1533038590840-1cde6b66b7c6?q=80&w=1200',
      category: 'Operations',
      title: 'Processing Facility',
      description:
        'State-of-the-art mineral processing unit during shift change.',
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200',
      category: 'Environment',
      title: 'Land Rehabilitation',
      description:
        'Reforestation of previously mined sectors with indigenous species.',
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200',
      category: 'Exploration',
      title: 'Aero-Magnetic Surveying',
      description:
        'Regional exploration mapping using advanced geophysical tools.',
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200',
      category: 'Community',
      title: 'Local Health Initiative',
      description:
        'Mobile health clinic providing services to remote host communities.',
    },
    {
      id: '9',
      url: 'https://images.unsplash.com/photo-1541888941255-202496a5c20c?q=80&w=1200',
      category: 'Operations',
      title: 'Safety Training Seminar',
      description:
        'Mandatory HSE refresher course for all site operational staff.',
    },
  ],
  Og = ({ image: s, onClick: o }) => {
    const [d, r] = R.useState(!1);
    return c.jsxs('div', {
      className:
        'group relative h-80 overflow-hidden bg-slate-100 rounded-sm cursor-pointer shadow-sm border border-slate-100',
      onClick: () => o(s),
      children: [
        !d &&
          c.jsx('div', {
            className:
              'absolute inset-0 flex items-center justify-center bg-slate-50',
            children: c.jsx(Yv, {
              className: 'w-8 h-8 text-slate-300 animate-spin',
            }),
          }),
        c.jsx('img', {
          src: s.url,
          alt: s.title,
          loading: 'lazy',
          onLoad: () => r(!0),
          className: `w-full h-full object-cover transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-105 ${d ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`,
        }),
        d &&
          c.jsxs(c.Fragment, {
            children: [
              c.jsx('div', {
                className:
                  'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700',
              }),
              c.jsxs('div', {
                className:
                  'absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out',
                children: [
                  c.jsx('span', {
                    className:
                      'inline-block px-2 py-1 mb-2 bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest shadow-lg',
                    children: s.category,
                  }),
                  c.jsx('h3', {
                    className:
                      'text-white font-bold text-lg mb-1 drop-shadow-md',
                    children: s.title,
                  }),
                  c.jsx('p', {
                    className:
                      'text-slate-300 text-xs transition-opacity duration-500 line-clamp-2 leading-relaxed',
                    children: s.description,
                  }),
                ],
              }),
              c.jsx('div', {
                className:
                  'absolute top-4 right-4 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100',
                children: c.jsx('div', {
                  className:
                    'w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-amber-500 hover:text-slate-900 transition-colors',
                  children: c.jsx(Vv, { size: 18 }),
                }),
              }),
            ],
          }),
      ],
    });
  },
  Cg = () => {
    const [s, o] = R.useState('All'),
      [d, r] = R.useState(null),
      y = ['All', 'Operations', 'Exploration', 'Community', 'Environment'],
      j = s === 'All' ? cm : cm.filter((z) => z.category === s);
    return c.jsxs('div', {
      className: 'bg-white',
      children: [
        c.jsx(Hn, {
          title: 'Visual Archive',
          category: 'Media Gallery',
          subtitle:
            'Explore our operational footprint, community impact, and commitment to environmental excellence.',
          image:
            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920',
        }),
        c.jsx('section', {
          className: 'py-16',
          children: c.jsxs('div', {
            className: 'max-w-7xl mx-auto px-4 md:px-8',
            children: [
              c.jsxs('div', {
                className:
                  'flex flex-col md:flex-row justify-between items-center mb-12 gap-6 border-b border-slate-100 pb-8',
                children: [
                  c.jsxs('div', {
                    className: 'flex items-center gap-2 text-slate-400',
                    children: [
                      c.jsx(_v, { size: 18 }),
                      c.jsx('span', {
                        className:
                          'text-xs font-bold uppercase tracking-widest',
                        children: 'Filter By:',
                      }),
                    ],
                  }),
                  c.jsx('div', {
                    className: 'flex flex-wrap justify-center gap-2',
                    children: y.map((z) =>
                      c.jsx(
                        'button',
                        {
                          onClick: () => o(z),
                          className: `px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${s === z ? 'bg-amber-500 text-slate-900 shadow-lg shadow-amber-500/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`,
                          children: z,
                        },
                        z
                      )
                    ),
                  }),
                ],
              }),
              c.jsx('div', {
                className:
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
                children: j.map((z) =>
                  c.jsx(Og, { image: z, onClick: r }, z.id)
                ),
              }),
              j.length === 0 &&
                c.jsx('div', {
                  className: 'py-20 text-center text-slate-400 italic',
                  children: 'No images found in this category.',
                }),
            ],
          }),
        }),
        d &&
          c.jsxs('div', {
            className:
              'fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 md:p-10 transition-opacity duration-300',
            children: [
              c.jsx('button', {
                onClick: () => r(null),
                className:
                  'absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50',
                children: c.jsx(Mm, { size: 32 }),
              }),
              c.jsxs('div', {
                className:
                  'max-w-6xl w-full flex flex-col md:flex-row bg-slate-900 shadow-2xl overflow-hidden rounded-sm relative animate-[fadeIn_0.3s_ease-out]',
                children: [
                  c.jsx('div', {
                    className:
                      'flex-[2] bg-black flex items-center justify-center',
                    children: c.jsx('img', {
                      src: d.url,
                      alt: d.title,
                      className: 'w-full h-full object-contain',
                    }),
                  }),
                  c.jsxs('div', {
                    className:
                      'flex-1 p-8 md:p-12 flex flex-col justify-center',
                    children: [
                      c.jsx('span', {
                        className:
                          'text-amber-500 font-bold uppercase text-xs tracking-widest mb-4',
                        children: d.category,
                      }),
                      c.jsx('h2', {
                        className:
                          'text-2xl md:text-3xl font-light text-white mb-6 border-b border-slate-800 pb-6',
                        children: d.title,
                      }),
                      c.jsxs('p', {
                        className:
                          'text-slate-400 leading-relaxed mb-10 italic',
                        children: ['"', d.description, '"'],
                      }),
                      c.jsxs('div', {
                        className:
                          'mt-auto pt-6 border-t border-slate-800 flex items-center gap-4',
                        children: [
                          c.jsx('div', {
                            className:
                              'w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs',
                            children: 'GEO',
                          }),
                          c.jsx('div', {
                            className:
                              'text-xs text-slate-500 uppercase tracking-widest',
                            children: 'Verified Site Capture • 2024',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        c.jsx('style', {
          dangerouslySetInnerHTML: {
            __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `,
          },
        }),
      ],
    });
  },
  Ug = () => {
    const { pathname: s } = window.location;
    return (
      Cs.useEffect(() => {
        window.scrollTo(0, 0);
      }, [s]),
      null
    );
  },
  Dg = () =>
    c.jsxs(iv, {
      children: [
        c.jsx(Ug, {}),
        c.jsxs('div', {
          className:
            'min-h-screen bg-white flex flex-col font-sans text-slate-900',
          children: [
            c.jsx(jg, {}),
            c.jsx('main', {
              className: 'flex-grow',
              children: c.jsxs(I1, {
                children: [
                  c.jsx(zl, { path: '/', element: c.jsx(um, {}) }),
                  c.jsx(zl, { path: '/about-us', element: c.jsx(um, {}) }),
                  c.jsx(zl, { path: '/subsidiaries', element: c.jsx(Mg, {}) }),
                  c.jsx(zl, {
                    path: '/sustainability',
                    element: c.jsx(Ag, {}),
                  }),
                  c.jsx(zl, { path: '/governance', element: c.jsx(Tg, {}) }),
                  c.jsx(zl, {
                    path: '/projects-services',
                    element: c.jsx(_g, {}),
                  }),
                  c.jsx(zl, { path: '/gallery', element: c.jsx(Cg, {}) }),
                ],
              }),
            }),
            c.jsx(Ng, {}),
          ],
        }),
      ],
    }),
  Am = document.getElementById('root');
if (!Am) throw new Error('Could not find root element to mount to');
const Rg = s1.createRoot(Am);
Rg.render(c.jsx(Cs.StrictMode, { children: c.jsx(Dg, {}) }));
