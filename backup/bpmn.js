/*! bpmn-js - bpmn-navigated-viewer v3.4.1 | Copyright (c) 2014-present, camunda Services GmbH | bpmn.io/license */
!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.BpmnJS = t());
})(this, function() {
  "use strict";
  function e(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var t = e(function(e) {
      "function" == typeof Object.create
        ? (e.exports = function(e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }));
          })
        : (e.exports = function(e, t) {
            e.super_ = t;
            function n() {}
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          });
    }),
    n = Object.prototype.toString,
    o = Object.prototype.hasOwnProperty;
  function l(e) {
    return void 0 !== e;
  }
  function u(e) {
    return "[object Array]" === n.call(e);
  }
  function k(e) {
    return "[object Object]" === n.call(e);
  }
  function s(e) {
    return "[object Number]" === n.call(e);
  }
  function h(e) {
    return "[object Function]" === n.call(e);
  }
  function p(e) {
    return "[object String]" === n.call(e);
  }
  function C(e, n) {
    var i;
    return (
      (n = (function(t) {
        return h(t)
          ? t
          : function(e) {
              return e === t;
            };
      })(n)),
      P(e, function(e, t) {
        if (n(e, t)) return (i = e), !1;
      }),
      i
    );
  }
  function M(e, n) {
    var i = [];
    return (
      P(e, function(e, t) {
        n(e, t) && i.push(e);
      }),
      i
    );
  }
  function P(e, t) {
    if (
      !(function(e) {
        return void 0 === e;
      })(e)
    ) {
      var n,
        i,
        r = u(e) ? m : c;
      for (var a in e) {
        if (((n = e), (i = a), o.call(n, i))) if (!1 === t(e[a], r(a))) return;
      }
    }
  }
  function y(e, n, i) {
    return (
      P(e, function(e, t) {
        i = n(i, e, t);
      }),
      i
    );
  }
  function r(e, i) {
    return y(
      e,
      function(e, t, n) {
        return e && i(t, n);
      },
      !0
    );
  }
  function i(e) {
    return function(n) {
      return r(e, function(e, t) {
        return n[t] === e;
      });
    };
  }
  function c(e) {
    return e;
  }
  function m(e) {
    return Number(e);
  }
  function f(e, t) {
    return e.bind(t);
  }
  var a =
    Object.assign ||
    function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
      return e;
    };
  function T(e) {
    for (
      var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1;
      i < t;
      i++
    )
      n[i - 1] = arguments[i];
    return a.apply(void 0, [e].concat(n));
  }
  function d(e, t) {
    if (g) return e.indexOf(t);
    for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
    return -1;
  }
  var g = [].indexOf,
    v = /\s+/,
    x = Object.prototype.toString;
  function b(e) {
    return new E(e);
  }
  function E(e) {
    if (!e || !e.nodeType)
      throw new Error("A DOM element reference is required");
    (this.el = e), (this.list = e.classList);
  }
  function w(e) {
    for (var t; e.childNodes.length; ) (t = e.childNodes[0]), e.removeChild(t);
    return e;
  }
  (E.prototype.add = function(e) {
    if (this.list) return this.list.add(e), this;
    var t = this.array();
    return ~d(t, e) || t.push(e), (this.el.className = t.join(" ")), this;
  }),
    (E.prototype.remove = function(e) {
      if ("[object RegExp]" == x.call(e)) return this.removeMatching(e);
      if (this.list) return this.list.remove(e), this;
      var t = this.array(),
        n = d(t, e);
      return ~n && t.splice(n, 1), (this.el.className = t.join(" ")), this;
    }),
    (E.prototype.removeMatching = function(e) {
      for (var t = this.array(), n = 0; n < t.length; n++)
        e.test(t[n]) && this.remove(t[n]);
      return this;
    }),
    (E.prototype.toggle = function(e, t) {
      return (
        this.list
          ? void 0 !== t
            ? t !== this.list.toggle(e, t) && this.list.toggle(e)
            : this.list.toggle(e)
          : void 0 !== t
          ? t
            ? this.add(e)
            : this.remove(e)
          : this.has(e)
          ? this.remove(e)
          : this.add(e),
        this
      );
    }),
    (E.prototype.array = function() {
      var e = (this.el.getAttribute("class") || "")
        .replace(/^\s+|\s+$/g, "")
        .split(v);
      return "" === e[0] && e.shift(), e;
    }),
    (E.prototype.has = E.prototype.contains = function(e) {
      return this.list ? this.list.contains(e) : !!~d(this.array(), e);
    });
  var _ = Element.prototype,
    A =
      _.matchesSelector ||
      _.webkitMatchesSelector ||
      _.mozMatchesSelector ||
      _.msMatchesSelector ||
      _.oMatchesSelector,
    S = function(e, t) {
      if (A) return A.call(e, t);
      for (var n = e.parentNode.querySelectorAll(t), i = 0; i < n.length; ++i)
        if (n[i] == e) return !0;
      return !1;
    };
  function R(e, t, n) {
    for (var i = n ? e : e.parentNode; i && i !== document; ) {
      if (S(i, t)) return i;
      i = i.parentNode;
    }
  }
  var N,
    D = window.addEventListener ? "addEventListener" : "attachEvent",
    O = window.removeEventListener ? "removeEventListener" : "detachEvent",
    B = "addEventListener" != D ? "on" : "",
    L = {
      bind: function(e, t, n, i) {
        return e[D](B + t, n, i || !1), n;
      },
      unbind: function(e, t, n, i) {
        return e[O](B + t, n, i || !1), n;
      }
    },
    I = ["focus", "blur"],
    F = {
      bind: function(n, i, e, r, t) {
        return (
          -1 !== I.indexOf(e) && (t = !0),
          L.bind(
            n,
            e,
            function(e) {
              var t = e.target || e.srcElement;
              (e.delegateTarget = R(t, i, !0)),
                e.delegateTarget && r.call(n, e);
            },
            t
          )
        );
      },
      unbind: function(e, t, n, i) {
        -1 !== I.indexOf(t) && (i = !0), L.unbind(e, t, n, i);
      }
    },
    j = function(e, t) {
      if ("string" != typeof e) throw new TypeError("String expected");
      t || (t = document);
      var n = /<([\w:]+)/.exec(e);
      if (!n) return t.createTextNode(e);
      e = e.replace(/^\s+|\s+$/g, "");
      var i = n[1];
      if ("body" == i) {
        var r = t.createElement("html");
        return (r.innerHTML = e), r.removeChild(r.lastChild);
      }
      var a = W[i] || W._default,
        o = a[0],
        s = a[1],
        l = a[2];
      (r = t.createElement("div")).innerHTML = s + e + l;
      for (; o--; ) r = r.lastChild;
      if (r.firstChild == r.lastChild) return r.removeChild(r.firstChild);
      var p = t.createDocumentFragment();
      for (; r.firstChild; ) p.appendChild(r.removeChild(r.firstChild));
      return p;
    },
    V = !1;
  "undefined" != typeof document &&
    (((N = document.createElement("div")).innerHTML =
      '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>'),
    (V = !N.getElementsByTagName("link").length),
    (N = void 0));
  var W = {
    legend: [1, "<fieldset>", "</fieldset>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    _default: V ? [1, "X<div>", "</div>"] : [0, "", ""]
  };
  (W.td = W.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"]),
    (W.option = W.optgroup = [1, '<select multiple="multiple">', "</select>"]),
    (W.thead = W.tbody = W.colgroup = W.caption = W.tfoot = [
      1,
      "<table>",
      "</table>"
    ]),
    (W.polyline = W.ellipse = W.polygon = W.circle = W.text = W.line = W.path = W.rect = W.g = [
      1,
      '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',
      "</svg>"
    ]);
  var z = "undefined" != typeof Element ? Element.prototype : {},
    G =
      z.matches ||
      z.matchesSelector ||
      z.webkitMatchesSelector ||
      z.mozMatchesSelector ||
      z.msMatchesSelector ||
      z.oMatchesSelector,
    $ = function(e, t) {
      if (!e || 1 !== e.nodeType) return !1;
      if (G) return G.call(e, t);
      for (var n = e.parentNode.querySelectorAll(t), i = 0; i < n.length; i++)
        if (n[i] == e) return !0;
      return !1;
    };
  function K(e, t) {
    return (t = t || document).querySelector(e);
  }
  function H(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function U(e, t) {
    return t.appendChild(
      (function(e, t) {
        if (e.ownerDocument !== t.ownerDocument)
          try {
            return t.ownerDocument.importNode(e, !0);
          } catch (e) {}
        return e;
      })(e, t)
    );
  }
  function q(e, t) {
    return U(t, e), e;
  }
  var Y = 2,
    X = {
      "alignment-baseline": 1,
      "baseline-shift": 1,
      clip: 1,
      "clip-path": 1,
      "clip-rule": 1,
      color: 1,
      "color-interpolation": 1,
      "color-interpolation-filters": 1,
      "color-profile": 1,
      "color-rendering": 1,
      cursor: 1,
      direction: 1,
      display: 1,
      "dominant-baseline": 1,
      "enable-background": 1,
      fill: 1,
      "fill-opacity": 1,
      "fill-rule": 1,
      filter: 1,
      "flood-color": 1,
      "flood-opacity": 1,
      font: 1,
      "font-family": 1,
      "font-size": Y,
      "font-size-adjust": 1,
      "font-stretch": 1,
      "font-style": 1,
      "font-variant": 1,
      "font-weight": 1,
      "glyph-orientation-horizontal": 1,
      "glyph-orientation-vertical": 1,
      "image-rendering": 1,
      kerning: 1,
      "letter-spacing": 1,
      "lighting-color": 1,
      marker: 1,
      "marker-end": 1,
      "marker-mid": 1,
      "marker-start": 1,
      mask: 1,
      opacity: 1,
      overflow: 1,
      "pointer-events": 1,
      "shape-rendering": 1,
      "stop-color": 1,
      "stop-opacity": 1,
      stroke: 1,
      "stroke-dasharray": 1,
      "stroke-dashoffset": 1,
      "stroke-linecap": 1,
      "stroke-linejoin": 1,
      "stroke-miterlimit": 1,
      "stroke-opacity": 1,
      "stroke-width": Y,
      "text-anchor": 1,
      "text-decoration": 1,
      "text-rendering": 1,
      "unicode-bidi": 1,
      visibility: 1,
      "word-spacing": 1,
      "writing-mode": 1
    };
  function Z(e, t, n) {
    var i = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      r = X[i];
    r
      ? (r === Y && "number" == typeof n && (n = String(n) + "px"),
        (e.style[i] = n))
      : e.setAttributeNS(null, t, n);
  }
  function J(e, t, n) {
    if ("string" == typeof t) {
      if (void 0 === n)
        return (function(e, t) {
          return X[t] ? e.style[t] : e.getAttributeNS(null, t);
        })(e, t);
      Z(e, t, n);
    } else
      !(function(e, t) {
        var n,
          i,
          r = Object.keys(t);
        for (n = 0; (i = r[n]); n++) Z(e, i, t[i]);
      })(e, t);
    return e;
  }
  function Q(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
    return -1;
  }
  var ee = /\s+/,
    te = Object.prototype.toString;
  function ne(e) {
    return void 0 !== e;
  }
  function ie(e) {
    return new re(e);
  }
  function re(e) {
    if (!e || !e.nodeType)
      throw new Error("A DOM element reference is required");
    (this.el = e), (this.list = e.classList);
  }
  function ae(e) {
    var t = e.parentNode;
    return t && t.removeChild(e), e;
  }
  (re.prototype.add = function(e) {
    if (this.list) return this.list.add(e), this;
    var t = this.array();
    return (
      ~Q(t, e) || t.push(e),
      ne(this.el.className.baseVal)
        ? (this.el.className.baseVal = t.join(" "))
        : (this.el.className = t.join(" ")),
      this
    );
  }),
    (re.prototype.remove = function(e) {
      if ("[object RegExp]" === te.call(e)) return this.removeMatching(e);
      if (this.list) return this.list.remove(e), this;
      var t = this.array(),
        n = Q(t, e);
      return (
        ~n && t.splice(n, 1), (this.el.className.baseVal = t.join(" ")), this
      );
    }),
    (re.prototype.removeMatching = function(e) {
      for (var t = this.array(), n = 0; n < t.length; n++)
        e.test(t[n]) && this.remove(t[n]);
      return this;
    }),
    (re.prototype.toggle = function(e, t) {
      return (
        this.list
          ? ne(t)
            ? t !== this.list.toggle(e, t) && this.list.toggle(e)
            : this.list.toggle(e)
          : ne(t)
          ? t
            ? this.add(e)
            : this.remove(e)
          : this.has(e)
          ? this.remove(e)
          : this.add(e),
        this
      );
    }),
    (re.prototype.array = function() {
      var e = (this.el.getAttribute("class") || "")
        .replace(/^\s+|\s+$/g, "")
        .split(ee);
      return "" === e[0] && e.shift(), e;
    }),
    (re.prototype.has = re.prototype.contains = function(e) {
      return this.list ? this.list.contains(e) : !!~Q(this.array(), e);
    });
  var oe = { svg: "http://www.w3.org/2000/svg" },
    se = '<svg xmlns="' + oe.svg + '"';
  function le(e) {
    var t = !1;
    "<svg" === e.substring(0, 4)
      ? -1 === e.indexOf(oe.svg) && (e = se + e.substring(4))
      : ((e = se + ">" + e + "</svg>"), (t = !0));
    var n = (function(e) {
      var t;
      return (
        ((t = new DOMParser()).async = !1), t.parseFromString(e, "text/xml")
      );
    })(e);
    if (!t) return n;
    for (
      var i = document.createDocumentFragment(), r = n.firstChild;
      r.firstChild;

    )
      i.appendChild(r.firstChild);
    return i;
  }
  function pe(e, t) {
    var n;
    return (
      (n =
        "<" === e.charAt(0)
          ? ((n = le(e).firstChild), document.importNode(n, !0))
          : document.createElementNS(oe.svg, e)),
      t && J(n, t),
      n
    );
  }
  var ce = pe("svg");
  function ue(e, t) {
    var n,
      i,
      r = Object.keys(t);
    for (n = 0; (i = r[n]); n++) e[i] = t[i];
    return e;
  }
  function he(e) {
    return e ? ce.createSVGTransformFromMatrix(e) : ce.createSVGTransform();
  }
  var me = /([&<>]{1})/g,
    fe = /([\n\r"]{1})/g,
    de = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "'" };
  function ye(e, t) {
    return e.replace(t, function(e, t) {
      return de[t] || t;
    });
  }
  function ge(e, t) {
    var n, i, r, a, o;
    switch (e.nodeType) {
      case 3:
        t.push(ye(e.textContent, me));
        break;
      case 1:
        if ((t.push("<", e.tagName), e.hasAttributes()))
          for (n = 0, i = (r = e.attributes).length; n < i; ++n)
            (a = r.item(n)), t.push(" ", a.name, '="', ye(a.value, fe), '"');
        if (e.hasChildNodes()) {
          for (t.push(">"), n = 0, i = (o = e.childNodes).length; n < i; ++n)
            ge(o.item(n), t);
          t.push("</", e.tagName, ">");
        } else t.push("/>");
        break;
      case 8:
        t.push("\x3c!--", ye(e.nodeValue, me), "--\x3e");
        break;
      case 4:
        t.push("<![CDATA[", e.nodeValue, "]]>");
        break;
      default:
        throw new Error("unable to handle node " + e.nodeType);
    }
    return t;
  }
  function ve(e, t) {
    var n = le(t);
    if (
      ((function(e) {
        for (var t; (t = e.firstChild); ) ae(t);
      })(e),
      t)
    ) {
      !(function(e) {
        return "#document-fragment" === e.nodeName;
      })(n) && (n = n.documentElement);
      for (
        var i = (function(e) {
            return Array.prototype.slice.call(e);
          })(n.childNodes),
          r = 0;
        r < i.length;
        r++
      )
        U(i[r], e);
    }
  }
  function xe(e, t) {
    if (void 0 === t)
      return (function(e) {
        for (var t = e.firstChild, n = []; t; ) ge(t, n), (t = t.nextSibling);
        return n.join("");
      })(e);
    try {
      ve(e, t);
    } catch (e) {
      throw new Error("error parsing SVG: " + e.message);
    }
    return e;
  }
  function be(e, t) {
    var n = e.transform.baseVal;
    return (
      t &&
        (Array.isArray(t) || (t = [t]),
        (function(e, t) {
          var n, i, r, a;
          for (e.clear(), n = 0; (i = t[n]); n++)
            e.appendItem(
              ((r = e),
              (a = i) instanceof SVGMatrix
                ? r.createSVGTransformFromMatrix(a)
                : a)
            );
        })(n, t)),
      n.consolidate()
    );
  }
  var Ee = /^class /;
  function we(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }
  function _e() {
    var e = Array.prototype.slice.call(arguments);
    1 === e.length && we(e[0]) && (e = e[0]);
    var t = e.pop();
    return (t.$inject = e), t;
  }
  var Ae = /constructor\s*[^(]*\(\s*([^)]*)\)/m,
    Se = /^function\s*[^(]*\(\s*([^)]*)\)/m,
    Re = /\/\*([^*]*)\*\//m;
  function Ce(e) {
    if ("function" != typeof e)
      throw new Error('Cannot annotate "' + e + '". Expected a function!');
    var t = e.toString().match(
      (function(e) {
        return Ee.test(e.toString());
      })(e)
        ? Ae
        : Se
    );
    return (
      (t &&
        t[1] &&
        t[1].split(",").map(function(e) {
          return (t = e.match(Re)) ? t[1].trim() : e.trim();
        })) ||
      []
    );
  }
  var Me =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(e) {
          return typeof e;
        }
      : function(e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
  function ke(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n;
    }
    return Array.from(e);
  }
  function Pe(e, r) {
    r = r || {
      get: function(e, t) {
        if ((s.push(e), !1 === t)) return null;
        throw p('No provider for "' + e + '"!');
      }
    };
    function a(e, t) {
      if (!m[e] && -1 !== e.indexOf(".")) {
        for (var n = e.split("."), i = a(n.shift()); n.length; )
          i = i[n.shift()];
        return i;
      }
      if (Te(l, e)) return l[e];
      if (Te(m, e)) {
        if (-1 !== s.indexOf(e))
          throw (s.push(e), p("Cannot resolve circular dependency!"));
        return s.push(e), (l[e] = m[e][0](m[e][1])), s.pop(), l[e];
      }
      return r.get(e, t);
    }
    function o(e) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      if ("function" != typeof e) {
        if (!we(e))
          throw new Error('Cannot invoke "' + e + '". Expected a function!');
        e = _e(e.slice());
      }
      return {
        fn: e,
        dependencies: (e.$inject || Ce(e)).map(function(e) {
          return Te(t, e) ? t[e] : a(e);
        })
      };
    }
    function t(e) {
      var t = o(e),
        n = t.dependencies,
        i = t.fn;
      return new (Function.prototype.bind.apply(i, [null].concat(ke(n))))();
    }
    function n(e, t, n) {
      var i = o(e, n),
        r = i.dependencies,
        a = i.fn;
      return a.call.apply(a, [t].concat(ke(r)));
    }
    function h(t) {
      return _e(function(e) {
        return t.get(e);
      });
    }
    var s = [],
      m = (this._providers = Object.create(r._providers || null)),
      l = (this._instances = Object.create(null)),
      f = (l.injector = this),
      p = function(e) {
        var t = s.join(" -> ");
        return (s.length = 0), new Error(t ? e + " (Resolving: " + t + ")" : e);
      },
      c = {
        factory: n,
        type: t,
        value: function(e) {
          return e;
        }
      };
    e.forEach(function(i) {
      function r(e, t) {
        return "value" !== e && we(t) && (t = _e(t.slice())), t;
      }
      if (
        i instanceof
        function() {
          var n = [];
          (this.factory = function(e, t) {
            return n.push([e, "factory", t]), this;
          }),
            (this.value = function(e, t) {
              return n.push([e, "value", t]), this;
            }),
            (this.type = function(e, t) {
              return n.push([e, "type", t]), this;
            }),
            (this.forEach = function(e) {
              n.forEach(e);
            });
        }
      )
        i.forEach(function(e) {
          var t = e[0],
            n = e[1],
            i = e[2];
          m[t] = [c[n], r(n, i), n];
        });
      else if ("object" === (void 0 === i ? "undefined" : Me(i)))
        if (i.__exports__) {
          var e = Object.keys(i).reduce(function(e, t) {
              return "__" !== t.substring(0, 2) && (e[t] = i[t]), e;
            }, Object.create(null)),
            t = new Pe((i.__modules__ || []).concat([e]), f),
            n = _e(function(e) {
              return t.get(e);
            });
          i.__exports__.forEach(function(e) {
            m[e] = [n, e, "private", t];
          });
        } else
          Object.keys(i).forEach(function(e) {
            if ("private" !== i[e][2]) {
              var t = i[e][0],
                n = i[e][1];
              m[e] = [c[t], r(t, n), t];
            } else m[e] = i[e];
          });
    }),
      (this.get = a),
      (this.invoke = n),
      (this.instantiate = t),
      (this.createChild = function(e, t) {
        if (t && t.length) {
          var n,
            i,
            r,
            a,
            o = Object.create(null),
            s = Object.create(null),
            l = [],
            p = [],
            c = [];
          for (var u in m)
            (n = m[u]),
              -1 !== t.indexOf(u) &&
                ("private" === n[2]
                  ? -1 === (i = l.indexOf(n[3]))
                    ? ((r = n[3].createChild([], t)),
                      (a = h(r)),
                      l.push(n[3]),
                      p.push(r),
                      c.push(a),
                      (o[u] = [a, u, "private", r]))
                    : (o[u] = [c[i], u, "private", p[i]])
                  : (o[u] = [n[2], n[1]]),
                (s[u] = !0)),
              ("factory" !== n[2] && "type" !== n[2]) ||
                !n[1].$scope ||
                t.forEach(function(e) {
                  -1 !== n[1].$scope.indexOf(e) &&
                    ((o[u] = [n[2], n[1]]), (s[e] = !0));
                });
          t.forEach(function(e) {
            if (!s[e])
              throw new Error(
                'No provider for "' +
                  e +
                  '". Cannot use provider from the parent!'
              );
          }),
            e.unshift(o);
        }
        return new Pe(e, f);
      });
  }
  function Te(e, t) {
    return Object.hasOwnProperty.call(e, t);
  }
  var Ne = 1e3;
  function De(e, t) {
    var a = this;
    (t = t || Ne),
      e.on(["render.shape", "render.connection"], t, function(e, t) {
        var n = e.type,
          i = t.element,
          r = t.gfx;
        if (a.canRender(i))
          return "render.shape" === n
            ? a.drawShape(r, i)
            : a.drawConnection(r, i);
      }),
      e.on(["render.getShapePath", "render.getConnectionPath"], t, function(
        e,
        t
      ) {
        if (a.canRender(t))
          return "render.getShapePath" === e.type
            ? a.getShapePath(t)
            : a.getConnectionPath(t);
      });
  }
  function Oe(e) {
    return e.join(",").replace(/,?([A-z]),?/g, "$1");
  }
  function Be(e) {
    for (var t, n = "", i = 0; (t = e[i]); i++) n += t.x + "," + t.y + " ";
    return n;
  }
  function Le(e, t) {
    var n = pe("polyline");
    return J(n, { points: Be(e) }), t && J(n, t), n;
  }
  (De.prototype.canRender = function() {}),
    (De.prototype.drawShape = function() {}),
    (De.prototype.drawConnection = function() {}),
    (De.prototype.getShapePath = function() {}),
    (De.prototype.getConnectionPath = function() {});
  function Ie(e, t) {
    De.call(this, e, 1),
      (this.CONNECTION_STYLE = t.style(["no-fill"], {
        strokeWidth: 5,
        stroke: "fuchsia"
      })),
      (this.SHAPE_STYLE = t.style({
        fill: "white",
        stroke: "fuchsia",
        strokeWidth: 2
      }));
  }
  t(Ie, De),
    (Ie.prototype.canRender = function() {
      return !0;
    }),
    (Ie.prototype.drawShape = function(e, t) {
      var n = pe("rect");
      return (
        J(n, { x: 0, y: 0, width: t.width || 0, height: t.height || 0 }),
        J(n, this.SHAPE_STYLE),
        q(e, n),
        n
      );
    }),
    (Ie.prototype.drawConnection = function(e, t) {
      var n = Le(t.waypoints, this.CONNECTION_STYLE);
      return q(e, n), n;
    }),
    (Ie.prototype.getShapePath = function(e) {
      var t = e.x,
        n = e.y,
        i = e.width;
      return Oe([
        ["M", t, n],
        ["l", i, 0],
        ["l", 0, e.height],
        ["l", -i, 0],
        ["z"]
      ]);
    }),
    (Ie.prototype.getConnectionPath = function(e) {
      var t,
        n,
        i = e.waypoints,
        r = [];
      for (t = 0; (n = i[t]); t++)
        (n = n.original || n), r.push([0 === t ? "M" : "L", n.x, n.y]);
      return Oe(r);
    }),
    (Ie.$inject = ["eventBus", "styles"]);
  var Fe = {
    __init__: ["defaultRenderer"],
    defaultRenderer: ["type", Ie],
    styles: [
      "type",
      function() {
        var i = {
            "no-fill": { fill: "none" },
            "no-border": { strokeOpacity: 0 },
            "no-events": { pointerEvents: "none" }
          },
          r = this;
        (this.cls = function(e, t, n) {
          return T(this.style(t, n), { class: e });
        }),
          (this.style = function(e, t) {
            u(e) || t || ((t = e), (e = []));
            var n = y(
              e,
              function(e, t) {
                return T(e, i[t] || {});
              },
              {}
            );
            return t ? T(n, t) : n;
          }),
          (this.computeStyle = function(e, t, n) {
            return (
              u(t) || ((n = t), (t = [])), r.style(t || [], T({}, n, e || {}))
            );
          });
      }
    ]
  };
  function je(e, o) {
    var s, l, p, c;
    return (
      (o = !!o),
      u(e) || (e = [e]),
      P(e, function(e) {
        var t = e;
        e.waypoints && !o && (t = je(e.waypoints, !0));
        var n = t.x,
          i = t.y,
          r = t.height || 0,
          a = t.width || 0;
        (n < s || void 0 === s) && (s = n),
          (i < l || void 0 === l) && (l = i),
          (p < n + a || void 0 === p) && (p = n + a),
          (c < i + r || void 0 === c) && (c = i + r);
      }),
      { x: s, y: l, height: c - l, width: p - s }
    );
  }
  function Ve(e, t) {
    return Math.round(e * t) / t;
  }
  function We(e) {
    return s(e) ? e + "px" : e;
  }
  function ze(e, t, n) {
    var i = pe("g");
    ie(i).add(t);
    var r = void 0 !== n ? n : e.childNodes.length - 1;
    return e.insertBefore(i, e.childNodes[r] || null), i;
  }
  var Ge = { shape: ["x", "y", "width", "height"], connection: ["waypoints"] };
  function $e(e, t, n, i) {
    (this._eventBus = t),
      (this._elementRegistry = i),
      (this._graphicsFactory = n),
      this._init(e || {});
  }
  function Ke(e, t) {
    var n =
      "matrix(" +
      t.a +
      "," +
      t.b +
      "," +
      t.c +
      "," +
      t.d +
      "," +
      t.e +
      "," +
      t.f +
      ")";
    e.setAttribute("transform", n);
  }
  ($e.$inject = [
    "config.canvas",
    "eventBus",
    "graphicsFactory",
    "elementRegistry"
  ]),
    ($e.prototype._init = function(e) {
      var t = this._eventBus,
        n = (this._container = (function(e) {
          var t =
              (e = T({}, { width: "100%", height: "100%" }, e)).container ||
              document.body,
            n = document.createElement("div");
          return (
            n.setAttribute("class", "djs-container"),
            T(n.style, {
              position: "relative",
              overflow: "hidden",
              width: We(e.width),
              height: We(e.height)
            }),
            t.appendChild(n),
            n
          );
        })(e)),
        i = (this._svg = pe("svg"));
      J(i, { width: "100%", height: "100%" }), q(n, i);
      var r = (this._viewport = ze(i, "viewport"));
      !(this._layers = {}) !== e.deferUpdate &&
        (this._viewboxChanged = (function(n, i) {
          var r, a, o, s;
          function t() {
            var e = Date.now(),
              t = s + i - e;
            if (0 < t) return l(t);
            n.apply(o, a), (r = s = a = o = void 0);
          }
          function l(e) {
            r = setTimeout(t, e);
          }
          return function() {
            s = Date.now();
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            (a = t), (o = this), r || l(i);
          };
        })(f(this._viewboxChanged, this), 300)),
        t.on(
          "diagram.init",
          function() {
            t.fire("canvas.init", { svg: i, viewport: r });
          },
          this
        ),
        t.on(
          [
            "shape.added",
            "connection.added",
            "shape.removed",
            "connection.removed",
            "elements.changed"
          ],
          function() {
            delete this._cachedViewbox;
          },
          this
        ),
        t.on("diagram.destroy", 500, this._destroy, this),
        t.on("diagram.clear", 500, this._clear, this);
    }),
    ($e.prototype._destroy = function(e) {
      this._eventBus.fire("canvas.destroy", {
        svg: this._svg,
        viewport: this._viewport
      });
      var t = this._container.parentNode;
      t && t.removeChild(this._container),
        delete this._svg,
        delete this._container,
        delete this._layers,
        delete this._rootElement,
        delete this._viewport;
    }),
    ($e.prototype._clear = function() {
      var n = this;
      this._elementRegistry.getAll().forEach(function(e) {
        var t = (function(e) {
          return "waypoints" in e ? "connection" : "x" in e ? "shape" : "root";
        })(e);
        "root" === t ? n.setRootElement(null, !0) : n._removeElement(e, t);
      }),
        delete this._cachedViewbox;
    }),
    ($e.prototype.getDefaultLayer = function() {
      return this.getLayer("base", 0);
    }),
    ($e.prototype.getLayer = function(e, t) {
      if (!e) throw new Error("must specify a name");
      var n = this._layers[e];
      if (
        (n || (n = this._layers[e] = this._createLayer(e, t)),
        void 0 !== t && n.index !== t)
      )
        throw new Error(
          "layer <" + e + "> already created at index <" + t + ">"
        );
      return n.group;
    }),
    ($e.prototype._createLayer = function(e, n) {
      n || (n = 0);
      var t = y(
        this._layers,
        function(e, t) {
          return n >= t.index && e++, e;
        },
        0
      );
      return { group: ze(this._viewport, "layer-" + e, t), index: n };
    }),
    ($e.prototype.getContainer = function() {
      return this._container;
    }),
    ($e.prototype._updateMarker = function(e, t, n) {
      var i;
      e.id || (e = this._elementRegistry.get(e)),
        (i = this._elementRegistry._elements[e.id]) &&
          (P([i.gfx, i.secondaryGfx], function(e) {
            e && (n ? ie(e).add(t) : ie(e).remove(t));
          }),
          this._eventBus.fire("element.marker.update", {
            element: e,
            gfx: i.gfx,
            marker: t,
            add: !!n
          }));
    }),
    ($e.prototype.addMarker = function(e, t) {
      this._updateMarker(e, t, !0);
    }),
    ($e.prototype.removeMarker = function(e, t) {
      this._updateMarker(e, t, !1);
    }),
    ($e.prototype.hasMarker = function(e, t) {
      return (
        e.id || (e = this._elementRegistry.get(e)),
        ie(this.getGraphics(e)).has(t)
      );
    }),
    ($e.prototype.toggleMarker = function(e, t) {
      this.hasMarker(e, t) ? this.removeMarker(e, t) : this.addMarker(e, t);
    }),
    ($e.prototype.getRootElement = function() {
      return (
        this._rootElement ||
          this.setRootElement({ id: "__implicitroot", children: [] }),
        this._rootElement
      );
    }),
    ($e.prototype.setRootElement = function(e, t) {
      e && this._ensureValid("root", e);
      var n = this._rootElement,
        i = this._elementRegistry,
        r = this._eventBus;
      if (n) {
        if (!t)
          throw new Error("rootElement already set, need to specify override");
        r.fire("root.remove", { element: n }),
          r.fire("root.removed", { element: n }),
          i.remove(n);
      }
      if (e) {
        var a = this.getDefaultLayer();
        r.fire("root.add", { element: e }),
          i.add(e, a, this._svg),
          r.fire("root.added", { element: e, gfx: a });
      }
      return (this._rootElement = e);
    }),
    ($e.prototype._ensureValid = function(e, t) {
      if (!t.id) throw new Error("element must have an id");
      if (this._elementRegistry.get(t.id))
        throw new Error("element with id " + t.id + " already exists");
      var n = Ge[e];
      if (
        !r(n, function(e) {
          return void 0 !== t[e];
        })
      )
        throw new Error("must supply { " + n.join(", ") + " } with " + e);
    }),
    ($e.prototype._setParent = function(e, t, n) {
      !(function(e, t, n) {
        if (e && t) {
          "number" != typeof n && (n = -1);
          var i = e.indexOf(t);
          if (-1 !== i) {
            if (i === n) return;
            if (-1 === n) return;
            e.splice(i, 1);
          }
          -1 !== n ? e.splice(n, 0, t) : e.push(t);
        }
      })(t.children, e, n),
        (e.parent = t);
    }),
    ($e.prototype._addElement = function(e, t, n, i) {
      n = n || this.getRootElement();
      var r = this._eventBus,
        a = this._graphicsFactory;
      this._ensureValid(e, t),
        r.fire(e + ".add", { element: t, parent: n }),
        this._setParent(t, n, i);
      var o = a.create(e, t, i);
      return (
        this._elementRegistry.add(t, o),
        a.update(e, t, o),
        r.fire(e + ".added", { element: t, gfx: o }),
        t
      );
    }),
    ($e.prototype.addShape = function(e, t, n) {
      return this._addElement("shape", e, t, n);
    }),
    ($e.prototype.addConnection = function(e, t, n) {
      return this._addElement("connection", e, t, n);
    }),
    ($e.prototype._removeElement = function(e, t) {
      var n = this._elementRegistry,
        i = this._graphicsFactory,
        r = this._eventBus;
      if ((e = n.get(e.id || e)))
        return (
          r.fire(t + ".remove", { element: e }),
          i.remove(e),
          (function(e, t) {
            if (!e || !t) return;
            var n = e.indexOf(t);
            -1 !== n && e.splice(n, 1);
          })(e.parent && e.parent.children, e),
          (e.parent = null),
          r.fire(t + ".removed", { element: e }),
          n.remove(e),
          e
        );
    }),
    ($e.prototype.removeShape = function(e) {
      return this._removeElement(e, "shape");
    }),
    ($e.prototype.removeConnection = function(e) {
      return this._removeElement(e, "connection");
    }),
    ($e.prototype.getGraphics = function(e, t) {
      return this._elementRegistry.getGraphics(e, t);
    }),
    ($e.prototype._changeViewbox = function(e) {
      this._eventBus.fire("canvas.viewbox.changing"),
        e.apply(this),
        (this._cachedViewbox = null),
        this._viewboxChanged();
    }),
    ($e.prototype._viewboxChanged = function() {
      this._eventBus.fire("canvas.viewbox.changed", {
        viewbox: this.viewbox()
      });
    }),
    ($e.prototype.viewbox = function(t) {
      if (void 0 === t && this._cachedViewbox) return this._cachedViewbox;
      var e,
        n,
        i,
        r,
        a,
        o,
        s = this._viewport,
        l = this.getSize();
      return t
        ? (this._changeViewbox(function() {
            r = Math.min(l.width / t.width, l.height / t.height);
            var e = this._svg
              .createSVGMatrix()
              .scale(r)
              .translate(-t.x, -t.y);
            be(s, e);
          }),
          t)
        : ((e = this.getDefaultLayer().getBBox()),
          (n = (i = be(s))
            ? i.matrix
            : (function(e, t, n, i, r, a) {
                var o = ce.createSVGMatrix();
                switch (arguments.length) {
                  case 0:
                    return o;
                  case 1:
                    return ue(o, e);
                  case 6:
                    return ue(o, { a: e, b: t, c: n, d: i, e: r, f: a });
                }
              })()),
          (r = Ve(n.a, 1e3)),
          (a = Ve(-n.e || 0, 1e3)),
          (o = Ve(-n.f || 0, 1e3)),
          (t = this._cachedViewbox = {
            x: a ? a / r : 0,
            y: o ? o / r : 0,
            width: l.width / r,
            height: l.height / r,
            scale: r,
            inner: { width: e.width, height: e.height, x: e.x, y: e.y },
            outer: l
          }));
    }),
    ($e.prototype.scroll = function(e) {
      var t = this._viewport,
        n = t.getCTM();
      return (
        e &&
          this._changeViewbox(function() {
            (e = T({ dx: 0, dy: 0 }, e || {})),
              (n = this._svg
                .createSVGMatrix()
                .translate(e.dx, e.dy)
                .multiply(n)),
              Ke(t, n);
          }),
        { x: n.e, y: n.f }
      );
    }),
    ($e.prototype.zoom = function(e, t) {
      return e
        ? "fit-viewport" === e
          ? this._fitViewport(t)
          : (this._changeViewbox(function() {
              "object" != typeof t &&
                ((n = this.viewbox().outer),
                (t = { x: n.width / 2, y: n.height / 2 })),
                (i = this._setZoom(e, t));
            }),
            Ve(i.a, 1e3))
        : this.viewbox(e).scale;
      var n, i;
    }),
    ($e.prototype._fitViewport = function(e) {
      var t,
        n,
        i = this.viewbox(),
        r = i.outer,
        a = i.inner;
      return (
        (n =
          0 <= a.x &&
          0 <= a.y &&
          a.x + a.width <= r.width &&
          a.y + a.height <= r.height &&
          !e
            ? {
                x: 0,
                y: 0,
                width: Math.max(a.width + a.x, r.width),
                height: Math.max(a.height + a.y, r.height)
              }
            : ((t = Math.min(1, r.width / a.width, r.height / a.height)),
              {
                x: a.x + (e ? a.width / 2 - r.width / t / 2 : 0),
                y: a.y + (e ? a.height / 2 - r.height / t / 2 : 0),
                width: r.width / t,
                height: r.height / t
              })),
        this.viewbox(n),
        this.viewbox(!1).scale
      );
    }),
    ($e.prototype._setZoom = function(e, t) {
      var n,
        i,
        r,
        a,
        o = this._svg,
        s = this._viewport,
        l = o.createSVGMatrix(),
        p = o.createSVGPoint(),
        c = (i = s.getCTM()).a;
      return (
        (a = t
          ? ((n = T(p, t).matrixTransform(i.inverse())),
            (r = l
              .translate(n.x, n.y)
              .scale((1 / c) * e)
              .translate(-n.x, -n.y)),
            i.multiply(r))
          : l.scale(e)),
        Ke(this._viewport, a),
        a
      );
    }),
    ($e.prototype.getSize = function() {
      return {
        width: this._container.clientWidth,
        height: this._container.clientHeight
      };
    }),
    ($e.prototype.getAbsoluteBBox = function(e) {
      var t,
        n = this.viewbox();
      e.waypoints ? (t = this.getGraphics(e).getBBox()) : (t = e);
      return {
        x: t.x * n.scale - n.x * n.scale,
        y: t.y * n.scale - n.y * n.scale,
        width: t.width * n.scale,
        height: t.height * n.scale
      };
    }),
    ($e.prototype.resized = function() {
      delete this._cachedViewbox, this._eventBus.fire("canvas.resized");
    });
  var He = "data-element-id";
  function Ue(e) {
    (this._elements = {}), (this._eventBus = e);
  }
  (Ue.$inject = ["eventBus"]),
    (Ue.prototype.add = function(e, t, n) {
      var i = e.id;
      this._validateId(i),
        J(t, He, i),
        n && J(n, He, i),
        (this._elements[i] = { element: e, gfx: t, secondaryGfx: n });
    }),
    (Ue.prototype.remove = function(e) {
      var t = this._elements,
        n = e.id || e,
        i = n && t[n];
      i &&
        (J(i.gfx, He, ""),
        i.secondaryGfx && J(i.secondaryGfx, He, ""),
        delete t[n]);
    }),
    (Ue.prototype.updateId = function(e, t) {
      this._validateId(t),
        "string" == typeof e && (e = this.get(e)),
        this._eventBus.fire("element.updateId", { element: e, newId: t });
      var n = this.getGraphics(e),
        i = this.getGraphics(e, !0);
      this.remove(e), (e.id = t), this.add(e, n, i);
    }),
    (Ue.prototype.get = function(e) {
      var t;
      t = "string" == typeof e ? e : e && J(e, He);
      var n = this._elements[t];
      return n && n.element;
    }),
    (Ue.prototype.filter = function(n) {
      var i = [];
      return (
        this.forEach(function(e, t) {
          n(e, t) && i.push(e);
        }),
        i
      );
    }),
    (Ue.prototype.getAll = function() {
      return this.filter(function(e) {
        return e;
      });
    }),
    (Ue.prototype.forEach = function(r) {
      var a = this._elements;
      Object.keys(a).forEach(function(e) {
        var t = a[e],
          n = t.element,
          i = t.gfx;
        return r(n, i);
      });
    }),
    (Ue.prototype.getGraphics = function(e, t) {
      var n = e.id || e,
        i = this._elements[n];
      return i && (t ? i.secondaryGfx : i.gfx);
    }),
    (Ue.prototype._validateId = function(e) {
      if (!e) throw new Error("element must have an id");
      if (this._elements[e])
        throw new Error("element with id " + e + " already added");
    });
  var qe = {
    extend: function(e, i, t, r) {
      var a = t.inverse;
      return (
        Object.defineProperty(e, "remove", {
          value: function(e) {
            var t = this.indexOf(e);
            return -1 !== t && (this.splice(t, 1), i.unset(e, a, r)), e;
          }
        }),
        Object.defineProperty(e, "contains", {
          value: function(e) {
            return -1 !== this.indexOf(e);
          }
        }),
        Object.defineProperty(e, "add", {
          value: function(e, t) {
            var n = this.indexOf(e);
            if (void 0 === t) {
              if (-1 !== n) return;
              t = this.length;
            }
            -1 !== n && this.splice(n, 1),
              this.splice(t, 0, e),
              -1 === n && i.set(e, a, r);
          }
        }),
        Object.defineProperty(e, "__refs_collection", { value: !0 }),
        e
      );
    },
    isExtended: function(e) {
      return !0 === e.__refs_collection;
    }
  };
  function Ye(t, n, i) {
    var e = qe.extend(i[n.name] || [], t, n, i);
    Object.defineProperty(i, n.name, { enumerable: n.enumerable, value: e }),
      e.length &&
        e.forEach(function(e) {
          t.set(e, n.inverse, i);
        });
  }
  function Xe(e, t) {
    if (!(this instanceof Xe)) return new Xe(e, t);
    ((e.inverse = t).inverse = e),
      (this.props = {}),
      (this.props[e.name] = e),
      (this.props[t.name] = t);
  }
  (Xe.prototype.bind = function(e, t) {
    if ("string" == typeof t) {
      if (!this.props[t]) throw new Error("no property <" + t + "> in ref");
      t = this.props[t];
    }
    t.collection
      ? Ye(this, t, e)
      : (function(n, e, i) {
          var r = e.inverse,
            a = i[e.name];
          Object.defineProperty(i, e.name, {
            configurable: e.configurable,
            enumerable: e.enumerable,
            get: function() {
              return a;
            },
            set: function(e) {
              if (e !== a) {
                var t = a;
                (a = null), t && n.unset(t, r, i), (a = e), n.set(a, r, i);
              }
            }
          });
        })(this, t, e);
  }),
    (Xe.prototype.ensureRefsCollection = function(e, t) {
      var n = e[t.name];
      return qe.isExtended(n) || Ye(this, t, e), n;
    }),
    (Xe.prototype.ensureBound = function(e, t) {
      !(function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t.name || t);
      })(e, t) && this.bind(e, t);
    }),
    (Xe.prototype.unset = function(e, t, n) {
      e &&
        (this.ensureBound(e, t),
        t.collection
          ? this.ensureRefsCollection(e, t).remove(n)
          : (e[t.name] = void 0));
    }),
    (Xe.prototype.set = function(e, t, n) {
      e &&
        (this.ensureBound(e, t),
        t.collection
          ? this.ensureRefsCollection(e, t).add(n)
          : (e[t.name] = n));
    });
  var Ze = Xe,
    Je = qe;
  Ze.Collection = Je;
  var Qe = new Ze(
      { name: "children", enumerable: !0, collection: !0 },
      { name: "parent" }
    ),
    et = new Ze(
      { name: "labels", enumerable: !0, collection: !0 },
      { name: "labelTarget" }
    ),
    tt = new Ze({ name: "attachers", collection: !0 }, { name: "host" }),
    nt = new Ze({ name: "outgoing", collection: !0 }, { name: "source" }),
    it = new Ze({ name: "incoming", collection: !0 }, { name: "target" });
  function rt() {
    Object.defineProperty(this, "businessObject", { writable: !0 }),
      Object.defineProperty(this, "label", {
        get: function() {
          return this.labels[0];
        },
        set: function(e) {
          var t = this.label,
            n = this.labels;
          !e && t ? n.remove(t) : n.add(e, 0);
        }
      }),
      Qe.bind(this, "parent"),
      et.bind(this, "labels"),
      nt.bind(this, "outgoing"),
      it.bind(this, "incoming");
  }
  function at() {
    rt.call(this),
      Qe.bind(this, "children"),
      tt.bind(this, "host"),
      tt.bind(this, "attachers");
  }
  function ot() {
    at.call(this);
  }
  function st() {
    at.call(this), et.bind(this, "labelTarget");
  }
  function lt() {
    rt.call(this), nt.bind(this, "source"), it.bind(this, "target");
  }
  t(at, rt), t(ot, at), t(st, at), t(lt, rt);
  var pt = { connection: lt, shape: at, label: st, root: ot };
  function ct() {
    this._uid = 12;
  }
  (ct.prototype.createRoot = function(e) {
    return this.create("root", e);
  }),
    (ct.prototype.createLabel = function(e) {
      return this.create("label", e);
    }),
    (ct.prototype.createShape = function(e) {
      return this.create("shape", e);
    }),
    (ct.prototype.createConnection = function(e) {
      return this.create("connection", e);
    }),
    (ct.prototype.create = function(e, t) {
      return (
        (t = T({}, t || {})).id || (t.id = e + "_" + this._uid++),
        (function(e, t) {
          var n = pt[e];
          if (!n) throw new Error("unknown type: <" + e + ">");
          return T(new n(), t);
        })(e, t)
      );
    });
  var ut = "__fn",
    ht = Array.prototype.slice;
  function mt() {
    (this._listeners = {}), this.on("diagram.destroy", 1, this._destroy, this);
  }
  function ft() {}
  function dt(e, t, n) {
    var i = he();
    i.setTranslate(t, n), be(e, i);
  }
  function yt(e, t) {
    (this._eventBus = e), (this._elementRegistry = t);
  }
  function gt(e, t, n) {
    t.insertBefore(e, n || t.firstChild);
  }
  (mt.prototype.on = function(e, t, n, i) {
    if (((e = u(e) ? e : [e]), h(t) && ((i = n), (n = t), (t = 1e3)), !s(t)))
      throw new Error("priority must be a number");
    var r = n;
    i && ((r = f(n, i))[ut] = n[ut] || n);
    var a = this;
    e.forEach(function(e) {
      a._addListener(e, { priority: t, callback: r, next: null });
    });
  }),
    (mt.prototype.once = function(t, e, n, i) {
      var r = this;
      if ((h(e) && ((i = n), (n = e), (e = 1e3)), !s(e)))
        throw new Error("priority must be a number");
      function a() {
        var e = n.apply(i, arguments);
        return r.off(t, a), e;
      }
      (a[ut] = n), this.on(t, e, a);
    }),
    (mt.prototype.off = function(e, t) {
      e = u(e) ? e : [e];
      var n = this;
      e.forEach(function(e) {
        n._removeListener(e, t);
      });
    }),
    (mt.prototype.createEvent = function(e) {
      var t = new ft();
      return t.init(e), t;
    }),
    (mt.prototype.fire = function(e, t) {
      var n, i, r, a;
      if (
        ((a = ht.call(arguments)),
        "object" == typeof e && (e = (n = e).type),
        !e)
      )
        throw new Error("no event type specified");
      if ((i = this._listeners[e])) {
        n = t instanceof ft ? t : this.createEvent(t);
        var o = (a[0] = n).type;
        e !== o && (n.type = e);
        try {
          r = this._invokeListeners(n, a, i);
        } finally {
          e !== o && (n.type = o);
        }
        return void 0 === r && n.defaultPrevented && (r = !1), r;
      }
    }),
    (mt.prototype.handleError = function(e) {
      return !1 === this.fire("error", { error: e });
    }),
    (mt.prototype._destroy = function() {
      this._listeners = {};
    }),
    (mt.prototype._invokeListeners = function(e, t, n) {
      for (var i; n && !e.cancelBubble; )
        (i = this._invokeListener(e, t, n)), (n = n.next);
      return i;
    }),
    (mt.prototype._invokeListener = function(e, t, n) {
      var i;
      try {
        void 0 !==
          (i = (function(e, t) {
            return e.apply(null, t);
          })(n.callback, t)) && ((e.returnValue = i), e.stopPropagation()),
          !1 === i && e.preventDefault();
      } catch (e) {
        if (!this.handleError(e))
          throw (console.error("unhandled error in event listener"),
          console.error(e.stack),
          e);
      }
      return i;
    }),
    (mt.prototype._addListener = function(e, t) {
      var n,
        i = this._getListeners(e);
      if (i) {
        for (; i; ) {
          if (i.priority < t.priority)
            return (
              (t.next = i), void (n ? (n.next = t) : this._setListeners(e, t))
            );
          i = (n = i).next;
        }
        n.next = t;
      } else this._setListeners(e, t);
    }),
    (mt.prototype._getListeners = function(e) {
      return this._listeners[e];
    }),
    (mt.prototype._setListeners = function(e, t) {
      this._listeners[e] = t;
    }),
    (mt.prototype._removeListener = function(e, t) {
      var n,
        i,
        r,
        a = this._getListeners(e);
      if (t)
        for (; a; )
          (n = a.next),
            ((r = a.callback) !== t && r[ut] !== t) ||
              (i ? (i.next = n) : this._setListeners(e, n)),
            (i = a),
            (a = n);
      else this._setListeners(e, null);
    }),
    (ft.prototype.stopPropagation = function() {
      this.cancelBubble = !0;
    }),
    (ft.prototype.preventDefault = function() {
      this.defaultPrevented = !0;
    }),
    (ft.prototype.init = function(e) {
      T(this, e || {});
    }),
    (yt.$inject = ["eventBus", "elementRegistry"]),
    (yt.prototype._getChildren = function(e) {
      var t,
        n = this._elementRegistry.getGraphics(e);
      return (
        e.parent
          ? (t = (function(e) {
              return e.parentNode.childNodes[1];
            })(n)) ||
            (ie((t = pe("g"))).add("djs-children"), q(n.parentNode, t))
          : (t = n),
        t
      );
    }),
    (yt.prototype._clear = function(e) {
      var t = (function(e) {
        return K(".djs-visual", e);
      })(e);
      return w(t), t;
    }),
    (yt.prototype._createContainer = function(e, t, n) {
      var i = pe("g");
      ie(i).add("djs-group"),
        void 0 !== n ? gt(i, t, t.childNodes[n]) : q(t, i);
      var r = pe("g");
      ie(r).add("djs-element"), ie(r).add("djs-" + e), q(i, r);
      var a = pe("g");
      return ie(a).add("djs-visual"), q(r, a), r;
    }),
    (yt.prototype.create = function(e, t, n) {
      var i = this._getChildren(t.parent);
      return this._createContainer(e, i, n);
    }),
    (yt.prototype.updateContainments = function(e) {
      var i = this,
        r = this._elementRegistry;
      P(
        y(
          e,
          function(e, t) {
            return t.parent && (e[t.parent.id] = t.parent), e;
          },
          {}
        ),
        function(e) {
          var t = e.children;
          if (t) {
            var n = i._getChildren(e);
            P(t.slice().reverse(), function(e) {
              gt(r.getGraphics(e).parentNode, n);
            });
          }
        }
      );
    }),
    (yt.prototype.drawShape = function(e, t) {
      return this._eventBus.fire("render.shape", { gfx: e, element: t });
    }),
    (yt.prototype.getShapePath = function(e) {
      return this._eventBus.fire("render.getShapePath", e);
    }),
    (yt.prototype.drawConnection = function(e, t) {
      return this._eventBus.fire("render.connection", { gfx: e, element: t });
    }),
    (yt.prototype.getConnectionPath = function(e) {
      return this._eventBus.fire("render.getConnectionPath", e);
    }),
    (yt.prototype.update = function(e, t, n) {
      if (t.parent) {
        var i = this._clear(n);
        if ("shape" === e) this.drawShape(i, t), dt(n, t.x, t.y);
        else {
          if ("connection" !== e) throw new Error("unknown type: " + e);
          this.drawConnection(i, t);
        }
        t.hidden ? J(n, "display", "none") : J(n, "display", "block");
      }
    }),
    (yt.prototype.remove = function(e) {
      ae(this._elementRegistry.getGraphics(e).parentNode);
    });
  var vt = {
    __depends__: [Fe],
    __init__: ["canvas"],
    canvas: ["type", $e],
    elementRegistry: ["type", Ue],
    elementFactory: ["type", ct],
    eventBus: ["type", mt],
    graphicsFactory: ["type", yt]
  };
  function xt(e) {
    var n = [],
      i = [];
    function r(e) {
      return 0 <= n.indexOf(e);
    }
    e.forEach(function e(t) {
      r(t) ||
        ((t.__depends__ || []).forEach(e),
        r(t) ||
          ((function(e) {
            n.push(e);
          })(t),
          (t.__init__ || []).forEach(function(e) {
            i.push(e);
          })));
    });
    var t = new Pe(n);
    return (
      i.forEach(function(e) {
        try {
          t["string" == typeof e ? "get" : "invoke"](e);
        } catch (e) {
          throw (console.error("Failed to instantiate component"),
          console.error(e.stack),
          e);
        }
      }),
      t
    );
  }
  function bt(e, t) {
    (this.injector = t =
      t ||
      (function(e) {
        return xt(
          [{ config: ["value", (e = e || {})] }, vt].concat(e.modules || [])
        );
      })(e)),
      (this.get = t.get),
      (this.invoke = t.invoke),
      this.get("eventBus").fire("diagram.init");
  }
  function Et() {}
  function wt(e, t) {
    (this.model = e), (this.properties = t);
  }
  (bt.prototype.destroy = function() {
    this.get("eventBus").fire("diagram.destroy");
  }),
    (bt.prototype.clear = function() {
      this.get("eventBus").fire("diagram.clear");
    }),
    (Et.prototype.get = function(e) {
      return this.$model.properties.get(this, e);
    }),
    (Et.prototype.set = function(e, t) {
      this.$model.properties.set(this, e, t);
    }),
    (wt.prototype.createType = function(e) {
      var t = this.model,
        n = this.properties,
        i = Object.create(Et.prototype);
      P(e.properties, function(e) {
        e.isMany || void 0 === e.default || (i[e.name] = e.default);
      }),
        n.defineModel(i, t),
        n.defineDescriptor(i, e);
      var r = e.ns.name;
      function a(e) {
        n.define(this, "$type", { value: r, enumerable: !0 }),
          n.define(this, "$attrs", { value: {} }),
          n.define(this, "$parent", { writable: !0 }),
          P(
            e,
            f(function(e, t) {
              this.set(t, e);
            }, this)
          );
      }
      return (
        (a.prototype = i),
        (a.hasType = i.$instanceOf = this.model.hasType),
        n.defineModel(a, t),
        n.defineDescriptor(a, e),
        a
      );
    });
  var _t = { String: !0, Boolean: !0, Integer: !0, Real: !0, Element: !0 },
    At = {
      String: function(e) {
        return e;
      },
      Boolean: function(e) {
        return "true" === e;
      },
      Integer: function(e) {
        return parseInt(e, 10);
      },
      Real: function(e) {
        return parseFloat(e, 10);
      }
    };
  function St(e, t) {
    var n = At[e];
    return n ? n(t) : t;
  }
  function Rt(e) {
    return !!_t[e];
  }
  function Ct(e) {
    return !!At[e];
  }
  function Mt(e, t) {
    var n,
      i,
      r = e.split(/:/);
    if (1 === r.length) (n = e), (i = t);
    else {
      if (2 !== r.length)
        throw new Error("expected <prefix:localName> or <localName>, got " + e);
      (n = r[1]), (i = r[0]);
    }
    return { name: (e = (i ? i + ":" : "") + n), prefix: i, localName: n };
  }
  function kt(e) {
    (this.ns = e),
      (this.name = e.name),
      (this.allTypes = []),
      (this.allTypesByName = {}),
      (this.properties = []),
      (this.propertiesByName = {});
  }
  function Pt(e, t) {
    (this.packageMap = {}),
      (this.typeMap = {}),
      (this.packages = []),
      (this.properties = t),
      P(e, f(this.registerPackage, this));
  }
  function Tt(e, t, n) {
    var i = t[n];
    if (i in e)
      throw new Error("package with " + n + " <" + i + "> already defined");
  }
  function Nt(e) {
    this.model = e;
  }
  function Dt(e, t, n) {
    Object.defineProperty(e, t.name, {
      enumerable: !t.isReference,
      writable: !0,
      value: n,
      configurable: !0
    });
  }
  function Ot(e) {
    (this.properties = new Nt(this)),
      (this.factory = new wt(this, this.properties)),
      (this.registry = new Pt(e, this.properties)),
      (this.typeCache = {});
  }
  (kt.prototype.build = function() {
    return (function(t, e) {
      var n = {},
        i = Object(t);
      return (
        P(e, function(e) {
          e in i && (n[e] = t[e]);
        }),
        n
      );
    })(this, [
      "ns",
      "name",
      "allTypes",
      "allTypesByName",
      "properties",
      "propertiesByName",
      "bodyProperty",
      "idProperty"
    ]);
  }),
    (kt.prototype.addProperty = function(e, t, n) {
      "boolean" == typeof t && ((n = t), (t = void 0)),
        this.addNamedProperty(e, !1 !== n);
      var i = this.properties;
      void 0 !== t ? i.splice(t, 0, e) : i.push(e);
    }),
    (kt.prototype.replaceProperty = function(e, t, n) {
      var i = e.ns,
        r = this.properties,
        a = this.propertiesByName,
        o = e.name !== t.name;
      if (e.isId) {
        if (!t.isId)
          throw new Error(
            "property <" +
              t.ns.name +
              "> must be id property to refine <" +
              e.ns.name +
              ">"
          );
        this.setIdProperty(t, !1);
      }
      if (e.isBody) {
        if (!t.isBody)
          throw new Error(
            "property <" +
              t.ns.name +
              "> must be body property to refine <" +
              e.ns.name +
              ">"
          );
        this.setBodyProperty(t, !1);
      }
      var s = r.indexOf(e);
      if (-1 === s)
        throw new Error("property <" + i.name + "> not found in property list");
      r.splice(s, 1),
        this.addProperty(t, n ? void 0 : s, o),
        (a[i.name] = a[i.localName] = t);
    }),
    (kt.prototype.redefineProperty = function(e, t, n) {
      var i = e.ns.prefix,
        r = t.split("#"),
        a = Mt(r[0], i),
        o = Mt(r[1], a.prefix).name,
        s = this.propertiesByName[o];
      if (!s) throw new Error("refined property <" + o + "> not found");
      this.replaceProperty(s, e, n), delete e.redefines;
    }),
    (kt.prototype.addNamedProperty = function(e, t) {
      var n = e.ns,
        i = this.propertiesByName;
      t &&
        (this.assertNotDefined(e, n.name),
        this.assertNotDefined(e, n.localName)),
        (i[n.name] = i[n.localName] = e);
    }),
    (kt.prototype.removeNamedProperty = function(e) {
      var t = e.ns,
        n = this.propertiesByName;
      delete n[t.name], delete n[t.localName];
    }),
    (kt.prototype.setBodyProperty = function(e, t) {
      if (t && this.bodyProperty)
        throw new Error(
          "body property defined multiple times (<" +
            this.bodyProperty.ns.name +
            ">, <" +
            e.ns.name +
            ">)"
        );
      this.bodyProperty = e;
    }),
    (kt.prototype.setIdProperty = function(e, t) {
      if (t && this.idProperty)
        throw new Error(
          "id property defined multiple times (<" +
            this.idProperty.ns.name +
            ">, <" +
            e.ns.name +
            ">)"
        );
      this.idProperty = e;
    }),
    (kt.prototype.assertNotDefined = function(e, t) {
      var n = e.name,
        i = this.propertiesByName[n];
      if (i)
        throw new Error(
          "property <" +
            n +
            "> already defined; override of <" +
            i.definedBy.ns.name +
            "#" +
            i.ns.name +
            "> by <" +
            e.definedBy.ns.name +
            "#" +
            e.ns.name +
            "> not allowed without redefines"
        );
    }),
    (kt.prototype.hasProperty = function(e) {
      return this.propertiesByName[e];
    }),
    (kt.prototype.addTrait = function(i, r) {
      var e = this.allTypesByName,
        t = this.allTypes,
        n = i.name;
      n in e ||
        (P(
          i.properties,
          f(function(e) {
            (e = T({}, e, { name: e.ns.localName, inherited: r })),
              Object.defineProperty(e, "definedBy", { value: i });
            var t = e.replaces,
              n = e.redefines;
            t || n
              ? this.redefineProperty(e, t || n, t)
              : (e.isBody && this.setBodyProperty(e),
                e.isId && this.setIdProperty(e),
                this.addProperty(e));
          }, this)
        ),
        t.push(i),
        (e[n] = i));
    }),
    (Pt.prototype.getPackage = function(e) {
      return this.packageMap[e];
    }),
    (Pt.prototype.getPackages = function() {
      return this.packages;
    }),
    (Pt.prototype.registerPackage = function(t) {
      t = T({}, t);
      var e = this.packageMap;
      Tt(e, t, "prefix"),
        Tt(e, t, "uri"),
        P(
          t.types,
          f(function(e) {
            this.registerType(e, t);
          }, this)
        ),
        (e[t.uri] = e[t.prefix] = t),
        this.packages.push(t);
    }),
    (Pt.prototype.registerType = function(e, t) {
      var i = Mt(
          (e = T({}, e, {
            superClass: (e.superClass || []).slice(),
            extends: (e.extends || []).slice(),
            properties: (e.properties || []).slice(),
            meta: T(e.meta || {})
          })).name,
          t.prefix
        ),
        n = i.name,
        r = {};
      P(
        e.properties,
        f(function(e) {
          var t = Mt(e.name, i.prefix),
            n = t.name;
          Rt(e.type) || (e.type = Mt(e.type, t.prefix).name),
            T(e, { ns: t, name: n }),
            (r[n] = e);
        }, this)
      ),
        T(e, { ns: i, name: n, propertiesByName: r }),
        P(
          e.extends,
          f(function(e) {
            var t = this.typeMap[e];
            (t.traits = t.traits || []), t.traits.push(n);
          }, this)
        ),
        this.definePackage(e, t),
        (this.typeMap[n] = e);
    }),
    (Pt.prototype.mapTypes = function(i, r, e) {
      var t = Rt(i.name) ? { name: i.name } : this.typeMap[i.name],
        a = this;
      function n(e) {
        return o(e, !0);
      }
      function o(e, t) {
        var n = Mt(e, Rt(e) ? "" : i.prefix);
        a.mapTypes(n, r, t);
      }
      if (!t) throw new Error("unknown type <" + i.name + ">");
      P(t.superClass, e ? n : o), r(t, !e), P(t.traits, n);
    }),
    (Pt.prototype.getEffectiveDescriptor = function(e) {
      var t = Mt(e),
        n = new kt(t);
      this.mapTypes(t, function(e, t) {
        n.addTrait(e, t);
      });
      var i = n.build();
      return this.definePackage(i, i.allTypes[i.allTypes.length - 1].$pkg), i;
    }),
    (Pt.prototype.definePackage = function(e, t) {
      this.properties.define(e, "$pkg", { value: t });
    }),
    (Nt.prototype.set = function(e, t, n) {
      var i = this.model.getPropertyDescriptor(e, t),
        r = i && i.name;
      !(function(e) {
        return void 0 === e;
      })(n)
        ? i
          ? r in e
            ? (e[r] = n)
            : Dt(e, i, n)
          : (e.$attrs[t] = n)
        : i
        ? delete e[r]
        : delete e.$attrs[t];
    }),
    (Nt.prototype.get = function(e, t) {
      var n = this.model.getPropertyDescriptor(e, t);
      if (!n) return e.$attrs[t];
      var i = n.name;
      return !e[i] && n.isMany && Dt(e, n, []), e[i];
    }),
    (Nt.prototype.define = function(e, t, n) {
      Object.defineProperty(e, t, n);
    }),
    (Nt.prototype.defineDescriptor = function(e, t) {
      this.define(e, "$descriptor", { value: t });
    }),
    (Nt.prototype.defineModel = function(e, t) {
      this.define(e, "$model", { value: t });
    }),
    (Ot.prototype.create = function(e, t) {
      var n = this.getType(e);
      if (!n) throw new Error("unknown type <" + e + ">");
      return new n(t);
    }),
    (Ot.prototype.getType = function(e) {
      var t = this.typeCache,
        n = p(e) ? e : e.ns.name,
        i = t[n];
      return (
        i ||
          ((e = this.registry.getEffectiveDescriptor(n)),
          (i = t[n] = this.factory.createType(e))),
        i
      );
    }),
    (Ot.prototype.createAny = function(e, t, n) {
      var i = Mt(e),
        r = {
          $type: e,
          $instanceOf: function(e) {
            return e === this.$type;
          }
        },
        a = {
          name: e,
          isGeneric: !0,
          ns: { prefix: i.prefix, localName: i.localName, uri: t }
        };
      return (
        this.properties.defineDescriptor(r, a),
        this.properties.defineModel(r, this),
        this.properties.define(r, "$parent", { enumerable: !1, writable: !0 }),
        P(n, function(e, t) {
          k(e) && void 0 !== e.value ? (r[e.name] = e.value) : (r[t] = e);
        }),
        r
      );
    }),
    (Ot.prototype.getPackage = function(e) {
      return this.registry.getPackage(e);
    }),
    (Ot.prototype.getPackages = function() {
      return this.registry.getPackages();
    }),
    (Ot.prototype.getElementDescriptor = function(e) {
      return e.$descriptor;
    }),
    (Ot.prototype.hasType = function(e, t) {
      return (
        void 0 === t && ((t = e), (e = this)),
        t in e.$model.getElementDescriptor(e).allTypesByName
      );
    }),
    (Ot.prototype.getPropertyDescriptor = function(e, t) {
      return this.getElementDescriptor(e).propertiesByName[t];
    }),
    (Ot.prototype.getTypeDescriptor = function(e) {
      return this.registry.typeMap[e];
    });
  var Bt = String.fromCharCode,
    Lt = Object.prototype.hasOwnProperty,
    It = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/gi,
    Ft = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
  function jt(e, t, n, i) {
    return i
      ? Lt.call(Ft, i)
        ? Ft[i]
        : "&" + i + ";"
      : Bt(t || parseInt(n, 16));
  }
  function Vt(e) {
    return 3 < e.length && -1 !== e.indexOf("&") ? e.replace(It, jt) : e;
  }
  Object.keys(Ft).forEach(function(e) {
    Ft[e.toUpperCase()] = Ft[e];
  });
  var Wt = "http://www.w3.org/2001/XMLSchema-instance",
    zt = "xsi",
    Gt = "xsi:type",
    $t = "non-whitespace outside of root node";
  function Kt(e) {
    return new Error(e);
  }
  function Ht(e) {
    return "missing namespace for prefix <" + e + ">";
  }
  function Ut(e) {
    return { get: e, enumerable: !0 };
  }
  function qt(e) {
    var t,
      n = {};
    for (t in e) n[t] = e[t];
    return n;
  }
  function Yt(e) {
    return e + "$uri";
  }
  function Xt() {
    return { line: 0, column: 0 };
  }
  function Zt(e) {
    throw e;
  }
  function Jt(e) {
    if (!this) return new Jt(e);
    var g,
      _,
      A,
      S,
      n,
      R,
      C,
      M,
      k,
      P = e && e.proxy,
      i = Zt,
      T = Xt,
      N = !1,
      D = !1,
      t = null,
      O = !1;
    function B(e) {
      e instanceof Error || (e = Kt(e)), i((t = e), T);
    }
    function L(e) {
      n && (e instanceof Error || (e = Kt(e)), n(e, T));
    }
    (this.on = function(e, t) {
      if ("function" != typeof t) throw Kt("required args <name, cb>");
      switch (e) {
        case "openTag":
          _ = t;
          break;
        case "text":
          g = t;
          break;
        case "closeTag":
          A = t;
          break;
        case "error":
          i = t;
          break;
        case "warn":
          n = t;
          break;
        case "cdata":
          S = t;
          break;
        case "attention":
          M = t;
          break;
        case "question":
          C = t;
          break;
        case "comment":
          R = t;
          break;
        default:
          throw Kt("unsupported event: " + e);
      }
      return this;
    }),
      (this.ns = function(e) {
        if ((void 0 === e && (e = {}), "object" != typeof e))
          throw Kt("required args <nsMap={}>");
        var t,
          n = {};
        for (t in e) n[t] = e[t];
        return (n[Wt] = zt), (D = !0), (k = n), this;
      }),
      (this.parse = function(e) {
        if ("string" != typeof e) throw Kt("required args <xml=string>");
        return (
          (t = null),
          (function(o) {
            var e,
              t,
              n,
              i,
              r,
              a,
              s,
              l,
              p,
              v,
              c = D ? [] : null,
              x = D
                ? (function(e) {
                    var t,
                      n,
                      i = {};
                    for (t in e) (i[(n = e[t])] = n), (i[Yt(n)] = t);
                    return i;
                  })(k)
                : null,
              u = [],
              b = 0,
              h = !1,
              m = !1,
              f = 0,
              d = 0,
              E = "",
              w = 0;
            function y() {
              if (null !== v) return v;
              var e,
                t,
                n,
                i,
                r,
                a,
                o,
                s,
                l,
                p,
                c,
                u = D && x.xmlns,
                h = D && N ? [] : null,
                m = w,
                f = E,
                d = f.length,
                y = {},
                g = {};
              e: for (; m < d; m++)
                if (
                  ((l = !1),
                  !(32 === (p = f.charCodeAt(m)) || (p < 14 && 8 < p)))
                ) {
                  for (
                    !(p < 65 || 122 < p || (90 < p && p < 97)) ||
                      (95 !== p &&
                        58 !== p &&
                        (L("illegal first char attribute name"), (l = !0))),
                      c = m + 1;
                    c < d;
                    c++
                  )
                    if (
                      !(
                        (96 < (p = f.charCodeAt(c)) && p < 123) ||
                        (64 < p && p < 91) ||
                        (47 < p && p < 59) ||
                        46 === p ||
                        45 === p ||
                        95 === p
                      )
                    ) {
                      if (32 === p || (p < 14 && 8 < p)) {
                        L("missing attribute value"), (m = c);
                        continue e;
                      }
                      if (61 === p) break;
                      L("illegal attribute name char"), (l = !0);
                    }
                  if (
                    ("xmlns:xmlns" === (s = f.substring(m, c)) &&
                      (L("illegal declaration of xmlns"), (l = !0)),
                    34 === (p = f.charCodeAt(c + 1)))
                  )
                    -1 !== (c = f.indexOf('"', (m = c + 2))) ||
                      (-1 !== (c = f.indexOf("'", m)) &&
                        (L("attribute value quote missmatch"), (l = !0)));
                  else if (39 === p)
                    -1 !== (c = f.indexOf("'", (m = c + 2))) ||
                      (-1 !== (c = f.indexOf('"', m)) &&
                        (L("attribute value quote missmatch"), (l = !0)));
                  else
                    for (
                      L("missing attribute value quotes"), l = !0, c += 1;
                      c < d &&
                      !(32 === (p = f.charCodeAt(c + 1)) || (p < 14 && 8 < p));
                      c++
                    );
                  for (
                    -1 === c &&
                      (L("missing closing quotes"), (c = d), (l = !0)),
                      l || (a = f.substring(m, c)),
                      m = c;
                    c + 1 < d &&
                    !(32 === (p = f.charCodeAt(c + 1)) || (p < 14 && 8 < p));
                    c++
                  )
                    m === c &&
                      (L("illegal character after attribute end"), (l = !0));
                  if (((m = c + 1), !l))
                    if (s in g) L("attribute <" + s + "> already defined");
                    else if (((g[s] = !0), D))
                      if (N) {
                        if (
                          null !==
                          (r =
                            "xmlns" === s
                              ? "xmlns"
                              : 120 === s.charCodeAt(0) &&
                                "xmlns:" === s.substr(0, 6)
                              ? s.substr(6)
                              : null)
                        ) {
                          if (((e = Vt(a)), (t = Yt(r)), !(o = k[e]))) {
                            if ("xmlns" === r || (t in x && x[t] !== e))
                              for (; (o = "ns" + b++), void 0 !== x[o]; );
                            else o = r;
                            k[e] = o;
                          }
                          x[r] !== o &&
                            (i || ((x = qt(x)), (i = !0)),
                            (x[r] = o),
                            "xmlns" === r && ((x[Yt(o)] = e), (u = o)),
                            (x[t] = e)),
                            (y[s] = a);
                          continue;
                        }
                        h.push(s, a);
                      } else
                        -1 !== (p = s.indexOf(":"))
                          ? (n = x[s.substring(0, p)])
                            ? ((s =
                                u === n ? s.substr(p + 1) : n + s.substr(p)) ===
                                Gt &&
                                (a =
                                  -1 !== (p = a.indexOf(":"))
                                    ? ((n = a.substring(0, p)),
                                      (n = x[n] || n) + a.substring(p))
                                    : u + ":" + a),
                              (y[s] = a))
                            : L(Ht(s.substring(0, p)))
                          : (y[s] = a);
                    else y[s] = a;
                }
              if (N)
                for (m = 0, d = h.length; m < d; m++) {
                  if (((s = h[m++]), (a = h[m]), -1 !== (p = s.indexOf(":")))) {
                    if (!(n = x[s.substring(0, p)])) {
                      L(Ht(s.substring(0, p)));
                      continue;
                    }
                    (s = u === n ? s.substr(p + 1) : n + s.substr(p)) === Gt &&
                      (a =
                        -1 !== (p = a.indexOf(":"))
                          ? ((n = a.substring(0, p)),
                            (n = x[n] || n) + a.substring(p))
                          : u + ":" + a);
                  }
                  y[s] = a;
                }
              return (v = y);
            }
            (T = function() {
              for (
                var e, t = /(\r\n|\r|\n)/g, n = 0, i = 0, r = 0, a = d;
                r <= f &&
                (e = t.exec(o)) &&
                ((a = e[0].length + e.index), !(f < a));

              )
                (n += 1), (r = a);
              return {
                data:
                  -1 == f
                    ? ((i = a), o.substring(d))
                    : 0 === d
                    ? (console.log(f - r), o.substring(d, f))
                    : ((i = f - r),
                      -1 == d ? o.substring(f) : o.substring(f, d + 1)),
                line: n,
                column: i
              };
            }),
              P &&
                (p = Object.create(
                  {},
                  {
                    name: Ut(function() {
                      return s;
                    }),
                    originalName: Ut(function() {
                      return l;
                    }),
                    attrs: Ut(y),
                    ns: Ut(function() {
                      return x;
                    })
                  }
                ));
            for (; -1 !== d; ) {
              if (-1 === (f = 60 === o.charCodeAt(d) ? d : o.indexOf("<", d)))
                return u.length
                  ? B("unexpected end of file")
                  : 0 === d
                  ? B("missing start tag")
                  : d < o.length && o.substring(d).trim() && L($t);
              if (d !== f)
                if (u.length) {
                  if (g && (g(o.substring(d, f), Vt, T), O)) return;
                } else if (o.substring(d, f).trim() && (L($t), O)) return;
              if (33 !== (r = o.charCodeAt(f + 1)))
                if (63 !== r) {
                  if (-1 == (d = o.indexOf(">", f + 1)))
                    return B("unclosed tag");
                  if (((v = {}), 47 === r)) {
                    if (((m = !(h = !1)), !u.length))
                      return B("missing open tag");
                    if (
                      ((t = s = u.pop()),
                      (i = f + 2 + t.length),
                      o.substring(f + 2, i) !== t)
                    )
                      return B("closing tag mismatch");
                    for (; i < d; i++)
                      if (!(32 === (r = o.charCodeAt(i)) || (8 < r && r < 14)))
                        return B("close tag");
                  } else {
                    if (
                      ((m =
                        47 === o.charCodeAt(d - 1)
                          ? ((t = s = o.substring(f + 1, d - 1)), (h = !0))
                          : ((t = s = o.substring(f + 1, d)), !(h = !0))),
                      !(
                        (96 < r && r < 123) ||
                        (64 < r && r < 91) ||
                        95 === r ||
                        58 === r
                      ))
                    )
                      return B("illegal first char nodeName");
                    for (i = 1, n = t.length; i < n; i++)
                      if (
                        !(
                          (96 < (r = t.charCodeAt(i)) && r < 123) ||
                          (64 < r && r < 91) ||
                          (47 < r && r < 59) ||
                          45 === r ||
                          95 === r ||
                          46 == r
                        )
                      ) {
                        if (32 === r || (r < 14 && 8 < r)) {
                          (s = t.substring(0, i)), (v = null);
                          break;
                        }
                        return B("invalid nodeName");
                      }
                    m || u.push(s);
                  }
                  if (D) {
                    if (
                      ((e = x),
                      h &&
                        (m || c.push(e),
                        null !== v ||
                          ((N = -1 !== t.indexOf("xmlns", i)) &&
                            ((w = i), (E = t), y(), (N = !1)))),
                      -1 !== (r = (l = s).indexOf(":")))
                    ) {
                      if (!(a = x[s.substring(0, r)]))
                        return B("missing namespace on <" + l + ">");
                      s = s.substr(r + 1);
                    } else a = x.xmlns;
                    a && (s = a + ":" + s);
                  }
                  if (
                    h &&
                    ((w = i),
                    (E = t),
                    _ && (P ? _(p, Vt, m, T) : _(s, y, Vt, m, T), O))
                  )
                    return;
                  if (m) {
                    if (A && (A(P ? p : s, Vt, h, T), O)) return;
                    D && (x = h ? e : c.pop());
                  }
                  d += 1;
                } else {
                  if (-1 === (d = o.indexOf("?>", f)))
                    return B("unclosed question");
                  if (C && (C(o.substring(f, d + 2), T), O)) return;
                  d += 2;
                }
              else {
                if (
                  91 === (r = o.charCodeAt(f + 2)) &&
                  "CDATA[" === o.substr(f + 3, 6)
                ) {
                  if (-1 === (d = o.indexOf("]]>", f)))
                    return B("unclosed cdata");
                  if (S && (S(o.substring(f + 9, d), T), O)) return;
                  d += 3;
                  continue;
                }
                if (45 === r && 45 === o.charCodeAt(f + 3)) {
                  if (-1 === (d = o.indexOf("--\x3e", f)))
                    return B("unclosed comment");
                  if (R && (R(o.substring(f + 4, d), Vt, T), O)) return;
                  d += 3;
                  continue;
                }
                if (-1 === (d = o.indexOf(">", f + 1)))
                  return B("unclosed tag");
                if (M && (M(o.substring(f, d + 1), Vt, T), O)) return;
                d += 1;
              }
            }
          })(e),
          (T = Xt),
          (O = !1),
          t
        );
      }),
      (this.stop = function() {
        O = !0;
      });
  }
  function Qt(e) {
    return e.xml && "lowerCase" === e.xml.tagAlias;
  }
  var en = { xsi: "http://www.w3.org/2001/XMLSchema-instance" },
    tn = "xsi:type";
  function nn(e) {
    return e.xml && e.xml.serialize;
  }
  function rn(e) {
    return nn(e) === tn;
  }
  function an(e, t) {
    return Qt(t)
      ? e.prefix +
          ":" +
          (function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          })(e.localName)
      : e.name;
  }
  function on(e) {
    return new Error(e);
  }
  function sn(e) {
    return e.$descriptor;
  }
  function ln(e) {
    T(this, e),
      (this.elementsById = {}),
      (this.references = []),
      (this.warnings = []),
      (this.addReference = function(e) {
        this.references.push(e);
      }),
      (this.addElement = function(e) {
        if (!e) throw on("expected element");
        var t,
          n = this.elementsById,
          i = sn(e).idProperty;
        if (i && (t = e.get(i.name))) {
          if (n[t]) throw on("duplicate ID <" + t + ">");
          n[t] = e;
        }
      }),
      (this.addWarning = function(e) {
        this.warnings.push(e);
      });
  }
  function pn() {}
  function cn() {}
  function un() {}
  function hn(e, t) {
    (this.property = e), (this.context = t);
  }
  function mn(e, t) {
    (this.element = t), (this.propertyDesc = e);
  }
  function fn() {}
  function dn(e, t, n) {
    (this.model = e), (this.type = e.getType(t)), (this.context = n);
  }
  function yn(e, t, n) {
    dn.call(this, e, t, n);
  }
  function gn(e, t, n) {
    (this.model = e), (this.context = n);
  }
  function vn(e) {
    e instanceof Ot && (e = { model: e }), T(this, { lax: !1 }, e);
  }
  (pn.prototype.handleEnd = function() {}),
    (pn.prototype.handleText = function() {}),
    (pn.prototype.handleNode = function() {}),
    ((cn.prototype = Object.create(pn.prototype)).handleNode = function() {
      return this;
    }),
    ((un.prototype = Object.create(pn.prototype)).handleText = function(e) {
      this.body = (this.body || "") + e;
    }),
    ((hn.prototype = Object.create(un.prototype)).handleNode = function(e) {
      if (this.element) throw on("expected no sub nodes");
      return (this.element = this.createReference(e)), this;
    }),
    (hn.prototype.handleEnd = function() {
      this.element.id = this.body;
    }),
    (hn.prototype.createReference = function(e) {
      return { property: this.property.ns.name, id: "" };
    }),
    ((mn.prototype = Object.create(un.prototype)).handleEnd = function() {
      var e = this.body || "",
        t = this.element,
        n = this.propertyDesc;
      (e = St(n.type, e)), n.isMany ? t.get(n.name).push(e) : t.set(n.name, e);
    }),
    ((fn.prototype = Object.create(un.prototype)).handleNode = function(e) {
      var t = this,
        n = this.element;
      return (
        n
          ? (t = this.handleChild(e))
          : ((n = this.element = this.createElement(e)),
            this.context.addElement(n)),
        t
      );
    }),
    ((dn.prototype = Object.create(fn.prototype)).addReference = function(e) {
      this.context.addReference(e);
    }),
    (dn.prototype.handleText = function(e) {
      if (!sn(this.element).bodyProperty)
        throw on("unexpected body text <" + e + ">");
      un.prototype.handleText.call(this, e);
    }),
    (dn.prototype.handleEnd = function() {
      var e = this.body,
        t = this.element,
        n = sn(t).bodyProperty;
      n && void 0 !== e && ((e = St(n.type, e)), t.set(n.name, e));
    }),
    (dn.prototype.createElement = function(e) {
      var i,
        t = e.attributes,
        n = this.type,
        r = sn(n),
        a = this.context,
        o = new n({}),
        s = this.model;
      return (
        P(t, function(e, t) {
          var n = r.propertiesByName[t];
          n && n.isReference
            ? n.isMany
              ? P(e.split(" "), function(e) {
                  a.addReference({ element: o, property: n.ns.name, id: e });
                })
              : a.addReference({ element: o, property: n.ns.name, id: e })
            : (n
                ? (e = St(n.type, e))
                : "xmlns" !== t &&
                  ((i = Mt(t, r.ns.prefix)),
                  s.getPackage(i.prefix) &&
                    a.addWarning({
                      message: "unknown attribute <" + t + ">",
                      element: o,
                      property: t,
                      value: e
                    })),
              o.set(t, e));
        }),
        o
      );
    }),
    (dn.prototype.getPropertyForNode = function(e) {
      var t,
        n,
        i = Mt(e.name),
        r = this.type,
        a = this.model,
        o = sn(r),
        s = i.name,
        l = o.propertiesByName[s];
      if (l)
        return rn(l) && (t = e.attributes[tn])
          ? ((t = (function(e, t) {
              var n = Mt(e);
              return (function(e, t) {
                var n = e.name,
                  i = e.localName,
                  r = t.xml && t.xml.typePrefix;
                return r && 0 === i.indexOf(r)
                  ? e.prefix + ":" + i.slice(r.length)
                  : n;
              })(n, t.getPackage(n.prefix));
            })(t, a)),
            T({}, l, { effectiveType: sn((n = a.getType(t))).name }))
          : l;
      var p = a.getPackage(i.prefix);
      if (p) {
        if (
          ((t = an(i, p)),
          (n = a.getType(t)),
          (l = C(o.properties, function(e) {
            return (
              !e.isVirtual &&
              !e.isReference &&
              !e.isAttribute &&
              n.hasType(e.type)
            );
          })))
        )
          return T({}, l, { effectiveType: sn(n).name });
      } else if (
        (l = C(o.properties, function(e) {
          return !e.isReference && !e.isAttribute && "Element" === e.type;
        }))
      )
        return l;
      throw on("unrecognized element <" + i.name + ">");
    }),
    (dn.prototype.toString = function() {
      return "ElementDescriptor[" + sn(this.type).name + "]";
    }),
    (dn.prototype.valueHandler = function(e, t) {
      return new mn(e, t);
    }),
    (dn.prototype.referenceHandler = function(e) {
      return new hn(e, this.context);
    }),
    (dn.prototype.handler = function(e) {
      return "Element" === e
        ? new gn(this.model, e, this.context)
        : new dn(this.model, e, this.context);
    }),
    (dn.prototype.handleChild = function(e) {
      var t, n, i, r;
      if (
        ((t = this.getPropertyForNode(e)),
        (i = this.element),
        Ct((n = t.effectiveType || t.type)))
      )
        return this.valueHandler(t, i);
      var a = (r = t.isReference
        ? this.referenceHandler(t).handleNode(e)
        : this.handler(n).handleNode(e)).element;
      return (
        void 0 !== a &&
          (t.isMany ? i.get(t.name).push(a) : i.set(t.name, a),
          t.isReference
            ? (T(a, { element: i }), this.context.addReference(a))
            : (a.$parent = i)),
        r
      );
    }),
    ((yn.prototype = Object.create(dn.prototype)).createElement = function(e) {
      var t = e.name,
        n = Mt(t),
        i = this.model,
        r = this.type,
        a = i.getPackage(n.prefix),
        o = (a && an(n, a)) || t;
      if (!r.hasType(o))
        throw on("unexpected element <" + e.originalName + ">");
      return dn.prototype.createElement.call(this, e);
    }),
    ((gn.prototype = Object.create(fn.prototype)).createElement = function(e) {
      var t = e.name,
        n = Mt(t).prefix,
        i = e.ns[n + "$uri"],
        r = e.attributes;
      return this.model.createAny(t, i, r);
    }),
    (gn.prototype.handleChild = function(e) {
      var t = new gn(this.model, "Element", this.context).handleNode(e),
        n = this.element,
        i = t.element;
      return (
        void 0 !== i &&
          ((n.$children = n.$children || []).push(i), (i.$parent = n)),
        t
      );
    }),
    (gn.prototype.handleEnd = function() {
      this.body && (this.element.$body = this.body);
    }),
    (vn.prototype.fromXML = function(n, e, i) {
      var r = e.rootHandler;
      e instanceof dn
        ? ((r = e), (e = {}))
        : "string" == typeof e
        ? ((r = this.handler(e)), (e = {}))
        : "string" == typeof r && (r = this.handler(r));
      var t = this.model,
        o = this.lax,
        p = new ln(T({}, e, { rootHandler: r })),
        a = new Jt({ proxy: !0 }),
        s = (function() {
          var e = [];
          return (
            Object.defineProperty(e, "peek", {
              value: function() {
                return this[this.length - 1];
              }
            }),
            e
          );
        })();
      function l(e, t, n) {
        var i = t(),
          r = i.line,
          a = i.column,
          o = i.data;
        "<" === o.charAt(0) &&
          -1 !== o.indexOf(" ") &&
          (o = o.slice(0, o.indexOf(" ")) + ">");
        var s =
          "unparsable content " +
          (o ? o + " " : "") +
          "detected\n\tline: " +
          r +
          "\n\tcolumn: " +
          a +
          "\n\tnested error: " +
          e.message;
        if (n) return p.addWarning({ message: s, error: e }), !0;
        throw on(s);
      }
      function c(e, t) {
        return l(e, t, !0);
      }
      (r.context = p), s.push(r);
      var u = /^<\?xml /i,
        h = / encoding="([^"]+)"/i,
        m = /^utf-8$/i;
      function f(e, t) {
        try {
          s.peek().handleText(e);
        } catch (e) {
          c(e, t);
        }
      }
      var d = t.getPackages().reduce(function(e, t) {
        return (e[t.uri] = t.prefix), e;
      }, {});
      a
        .ns(d)
        .on("openTag", function(e, i, t, n) {
          var r = e.attrs || {},
            a = Object.keys(r).reduce(function(e, t) {
              var n = i(r[t]);
              return (e[t] = n), e;
            }, {});
          !(function(e, t) {
            var n = s.peek();
            try {
              s.push(n.handleNode(e));
            } catch (e) {
              l(e, t, o) && s.push(new cn());
            }
          })(
            {
              name: e.name,
              originalName: e.originalName,
              attributes: a,
              ns: e.ns
            },
            n
          );
        })
        .on("question", function(e) {
          if (u.test(e)) {
            var t = h.exec(e),
              n = t && t[1];
            n &&
              !m.test(n) &&
              p.addWarning({
                message:
                  "unsupported document encoding <" +
                  n +
                  ">, falling back to UTF-8"
              });
          }
        })
        .on("closeTag", function() {
          s.pop().handleEnd();
        })
        .on("cdata", f)
        .on("text", function(e, t, n) {
          !(function(e, t) {
            (e = e.trim()) && f(e, t);
          })(t(e), n);
        })
        .on("error", l)
        .on("warn", c),
        (function(e) {
          setTimeout(e, 0);
        })(function() {
          var t;
          try {
            a.parse(n),
              (function() {
                var e,
                  t,
                  n = p.elementsById,
                  i = p.references;
                for (e = 0; (t = i[e]); e++) {
                  var r = t.element,
                    a = n[t.id],
                    o = sn(r).propertiesByName[t.property];
                  if (
                    (a ||
                      p.addWarning({
                        message: "unresolved reference <" + t.id + ">",
                        element: t.element,
                        property: t.property,
                        value: t.id
                      }),
                    o.isMany)
                  ) {
                    var s = r.get(o.name),
                      l = s.indexOf(t);
                    -1 === l && (l = s.length), a ? (s[l] = a) : s.splice(l, 1);
                  } else r.set(o.name, a);
                }
              })();
          } catch (e) {
            t = e;
          }
          var e = r.element;
          t ||
            e ||
            (t = on(
              "failed to parse document as <" + r.type.$descriptor.name + ">"
            )),
            i(t, t ? void 0 : e, p);
        });
    }),
    (vn.prototype.handler = function(e) {
      return new yn(this.model, e);
    });
  var xn = /<|>|'|"|&|\n\r|\n/g,
    bn = /<|>|&/g;
  function En(t) {
    var n = {},
      i = {},
      r = {},
      a = [],
      o = [];
    (this.byUri = function(e) {
      return i[e] || (t && t.byUri(e));
    }),
      (this.add = function(e, t) {
        (i[e.uri] = e),
          t ? a.push(e) : o.push(e),
          this.mapPrefix(e.prefix, e.uri);
      }),
      (this.uriByPrefix = function(e) {
        return n[e || "xmlns"];
      }),
      (this.mapPrefix = function(e, t) {
        n[e || "xmlns"] = t;
      }),
      (this.logUsed = function(e) {
        var t = e.uri;
        r[t] = this.byUri(t);
      }),
      (this.getUsed = function(e) {
        return [].concat(a, o).filter(function(e) {
          return r[e.uri];
        });
      });
  }
  function wn(e, t) {
    (e.super_ = t),
      (e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }));
  }
  function _n(e) {
    return p(e) ? e : (e.prefix ? e.prefix + ":" : "") + e.localName;
  }
  function An(e) {
    return (function(e, n) {
      var i = [];
      return (
        P(e, function(e, t) {
          i.push(n(e, t));
        }),
        i
      );
    })(e.getUsed(), function(e) {
      return { name: "xmlns" + (e.prefix ? ":" + e.prefix : ""), value: e.uri };
    });
  }
  function Sn(e, t) {
    return t.isGeneric
      ? T({ localName: t.ns.localName }, e)
      : T(
          {
            localName: (function(e, t) {
              return Qt(t)
                ? (function(e) {
                    return e.charAt(0).toLowerCase() + e.slice(1);
                  })(e)
                : e;
            })(t.ns.localName, t.$pkg)
          },
          e
        );
  }
  var Rn = {
      "\n": "#10",
      "\n\r": "#10",
      '"': "#34",
      "'": "#39",
      "<": "#60",
      ">": "#62",
      "&": "#38"
    },
    Cn = { "<": "lt", ">": "gt", "&": "amp" };
  function Mn(e, t, n) {
    return (e = p(e) ? e : "" + e).replace(t, function(e) {
      return "&" + n[e] + ";";
    });
  }
  function kn(e) {
    this.tagName = e;
  }
  function Pn() {}
  function Tn(e) {
    this.tagName = e;
  }
  function Nn(e, t) {
    (this.body = []),
      (this.attrs = []),
      (this.parent = e),
      (this.propertyDescriptor = t);
  }
  function Dn(e, t) {
    Nn.call(this, e, t);
  }
  function On() {
    (this.value = ""),
      (this.write = function(e) {
        this.value += e;
      });
  }
  function Bn(t, e) {
    var n = [""];
    (this.append = function(e) {
      return t.write(e), this;
    }),
      (this.appendNewLine = function() {
        return e && t.write("\n"), this;
      }),
      (this.appendIndent = function() {
        return e && t.write(n.join("  ")), this;
      }),
      (this.indent = function() {
        return n.push(""), this;
      }),
      (this.unindent = function() {
        return n.pop(), this;
      });
  }
  function Ln(r) {
    return (
      (r = T({ format: !1, preamble: !0 }, r || {})),
      {
        toXML: function(e, t) {
          var n = t || new On(),
            i = new Bn(n, r.format);
          if (
            (r.preamble && i.append('<?xml version="1.0" encoding="UTF-8"?>\n'),
            new Nn().build(e).serializeTo(i),
            !t)
          )
            return n.value;
        }
      }
    );
  }
  function In(e, t) {
    Ot.call(this, e, t);
  }
  (kn.prototype.build = function(e) {
    return (this.element = e), this;
  }),
    (kn.prototype.serializeTo = function(e) {
      e.appendIndent()
        .append(
          "<" + this.tagName + ">" + this.element.id + "</" + this.tagName + ">"
        )
        .appendNewLine();
    }),
    (Pn.prototype.serializeValue = Pn.prototype.serializeTo = function(e) {
      e.append(
        this.escape
          ? (function(e) {
              return Mn(e, bn, Cn);
            })(this.value)
          : this.value
      );
    }),
    (Pn.prototype.build = function(e, t) {
      return (
        (this.value = t),
        "String" === e.type && -1 !== t.search(bn) && (this.escape = !0),
        this
      );
    }),
    wn(Tn, Pn),
    (Tn.prototype.serializeTo = function(e) {
      e.appendIndent().append("<" + this.tagName + ">"),
        this.serializeValue(e),
        e.append("</" + this.tagName + ">").appendNewLine();
    }),
    (Nn.prototype.build = function(e) {
      var t,
        n,
        i = (this.element = e).$descriptor,
        r = this.propertyDescriptor,
        a = i.isGeneric;
      return (
        (t = a ? this.parseGeneric(e) : this.parseNsAttributes(e)),
        (this.ns = r ? this.nsPropertyTagName(r) : this.nsTagName(i)),
        (this.tagName = this.addTagName(this.ns)),
        a ||
          ((n = (function(i) {
            return M(i.$descriptor.properties, function(e) {
              var t = e.name;
              if (e.isVirtual) return !1;
              if (!i.hasOwnProperty(t)) return !1;
              var n = i[t];
              return n !== e.default && null !== n && (!e.isMany || n.length);
            });
          })(e)),
          this.parseAttributes(
            (function(e) {
              return M(e, function(e) {
                return e.isAttr;
              });
            })(n)
          ),
          this.parseContainments(
            (function(e) {
              return M(e, function(e) {
                return !e.isAttr;
              });
            })(n)
          )),
        this.parseGenericAttributes(e, t),
        this
      );
    }),
    (Nn.prototype.nsTagName = function(e) {
      return Sn(this.logNamespaceUsed(e.ns), e);
    }),
    (Nn.prototype.nsPropertyTagName = function(e) {
      return (function(e, t) {
        return T({ localName: t.ns.localName }, e);
      })(this.logNamespaceUsed(e.ns), e);
    }),
    (Nn.prototype.isLocalNs = function(e) {
      return e.uri === this.ns.uri;
    }),
    (Nn.prototype.nsAttributeName = function(e) {
      var t;
      if (((t = p(e) ? Mt(e) : e.ns), e.inherited))
        return { localName: t.localName };
      var n = this.logNamespaceUsed(t);
      return (
        this.getNamespaces().logUsed(n),
        this.isLocalNs(n)
          ? { localName: t.localName }
          : T({ localName: t.localName }, n)
      );
    }),
    (Nn.prototype.parseGeneric = function(n) {
      var i = this,
        r = this.body,
        a = [];
      return (
        P(n, function(e, t) {
          "$body" === t
            ? r.push(new Pn().build({ type: "String" }, e))
            : "$children" === t
            ? P(e, function(e) {
                r.push(new Nn(i).build(e));
              })
            : 0 === t.indexOf("$") ||
              (i.parseNsAttribute(n, t, e) && a.push({ name: t, value: e }));
        }),
        a
      );
    }),
    (Nn.prototype.parseNsAttribute = function(e, t, n) {
      var i,
        r = e.$model,
        a = Mt(t);
      if (
        ("xmlns" === a.prefix && (i = { prefix: a.localName, uri: n }),
        a.prefix || "xmlns" !== a.localName || (i = { uri: n }),
        !i)
      )
        return { name: t, value: n };
      if (r && r.getPackage(n)) this.logNamespace(i, !0, !0);
      else {
        var o = this.logNamespaceUsed(i, !0);
        this.getNamespaces().logUsed(o);
      }
    }),
    (Nn.prototype.parseNsAttributes = function(i, e) {
      var r = this,
        t = i.$attrs,
        a = [];
      return (
        P(t, function(e, t) {
          var n = r.parseNsAttribute(i, t, e);
          n && a.push(n);
        }),
        a
      );
    }),
    (Nn.prototype.parseGenericAttributes = function(n, e) {
      var i = this;
      P(e, function(t) {
        if (t.name !== tn)
          try {
            i.addAttribute(i.nsAttributeName(t.name), t.value);
          } catch (e) {
            console.warn(
              "missing namespace information for ",
              t.name,
              "=",
              t.value,
              "on",
              n,
              e
            );
          }
      });
    }),
    (Nn.prototype.parseContainments = function(e) {
      var a = this,
        o = this.body,
        s = this.element;
      P(e, function(n) {
        var e = s.get(n.name),
          t = n.isReference;
        if ((n.isMany || (e = [e]), n.isBody)) o.push(new Pn().build(n, e[0]));
        else if (Ct(n.type))
          P(e, function(e) {
            o.push(new Tn(a.addTagName(a.nsPropertyTagName(n))).build(n, e));
          });
        else if (t)
          P(e, function(e) {
            o.push(new kn(a.addTagName(a.nsPropertyTagName(n))).build(e));
          });
        else {
          var i = rn(n),
            r = (function(e) {
              return "property" === nn(e);
            })(n);
          P(e, function(e) {
            var t;
            (t = i ? new Dn(a, n) : r ? new Nn(a, n) : new Nn(a)),
              o.push(t.build(e));
          });
        }
      });
    }),
    (Nn.prototype.getNamespaces = function(e) {
      var t,
        n = this.namespaces,
        i = this.parent;
      return (
        n ||
          ((t = i && i.getNamespaces()),
          e || !t ? (this.namespaces = n = new En(t)) : (n = t)),
        n
      );
    }),
    (Nn.prototype.logNamespace = function(e, t, n) {
      var i = this.getNamespaces(n),
        r = e.uri,
        a = e.prefix;
      return i.byUri(r) || i.add(e, t), i.mapPrefix(a, r), e;
    }),
    (Nn.prototype.logNamespaceUsed = function(e, t) {
      var n,
        i,
        r,
        a = this.element.$model,
        o = this.getNamespaces(t),
        s = e.prefix,
        l = e.uri;
      if (!s && !l) return { localName: e.localName };
      if (
        ((r = en[s] || (a && (a.getPackage(s) || {}).uri)),
        !(l = l || r || o.uriByPrefix(s)))
      )
        throw new Error("no namespace uri given for prefix <" + s + ">");
      if (!(e = o.byUri(l))) {
        for (n = s, i = 1; o.uriByPrefix(n); ) n = s + "_" + i++;
        e = this.logNamespace({ prefix: n, uri: l }, r === l);
      }
      return s && o.mapPrefix(s, l), e;
    }),
    (Nn.prototype.parseAttributes = function(e) {
      var i = this,
        r = this.element;
      P(e, function(e) {
        var t = r.get(e.name);
        if (e.isReference)
          if (e.isMany) {
            var n = [];
            P(t, function(e) {
              n.push(e.id);
            }),
              (t = n.join(" "));
          } else t = t.id;
        i.addAttribute(i.nsAttributeName(e), t);
      });
    }),
    (Nn.prototype.addTagName = function(e) {
      var t = this.logNamespaceUsed(e);
      return this.getNamespaces().logUsed(t), _n(e);
    }),
    (Nn.prototype.addAttribute = function(e, t) {
      var n = this.attrs;
      p(t) &&
        (t = (function(e) {
          return Mn(e, xn, Rn);
        })(t)),
        n.push({ name: e, value: t });
    }),
    (Nn.prototype.serializeAttributes = function(t) {
      var e = this.attrs,
        n = this.namespaces;
      n && (e = An(n).concat(e)),
        P(e, function(e) {
          t.append(" ")
            .append(_n(e.name))
            .append('="')
            .append(e.value)
            .append('"');
        });
    }),
    (Nn.prototype.serializeTo = function(t) {
      var e = this.body[0],
        n = e && e.constructor !== Pn;
      t.appendIndent().append("<" + this.tagName),
        this.serializeAttributes(t),
        t.append(e ? ">" : " />"),
        e &&
          (n && t.appendNewLine().indent(),
          P(this.body, function(e) {
            e.serializeTo(t);
          }),
          n && t.unindent().appendIndent(),
          t.append("</" + this.tagName + ">")),
        t.appendNewLine();
    }),
    wn(Dn, Nn),
    (Dn.prototype.parseNsAttributes = function(e) {
      var t = Nn.prototype.parseNsAttributes.call(this, e),
        n = e.$descriptor;
      if (n.name === this.propertyDescriptor.type) return t;
      var i = (this.typeNs = this.nsTagName(n));
      this.getNamespaces().logUsed(this.typeNs);
      var r = e.$model.getPackage(i.uri),
        a = (r.xml && r.xml.typePrefix) || "";
      return (
        this.addAttribute(
          this.nsAttributeName(tn),
          (i.prefix ? i.prefix + ":" : "") + a + n.ns.localName
        ),
        t
      );
    }),
    (Dn.prototype.isLocalNs = function(e) {
      return e.uri === (this.typeNs || this.ns).uri;
    }),
    ((In.prototype = Object.create(Ot.prototype)).fromXML = function(
      e,
      t,
      n,
      i
    ) {
      p(t) || ((i = n), (n = t), (t = "bpmn:Definitions")),
        h(n) && ((i = n), (n = {}));
      var r = new vn(T({ model: this, lax: !0 }, n)),
        a = r.handler(t);
      r.fromXML(e, a, i);
    });
  In.prototype.toXML = function(e, t, n) {
    h(t) && ((n = t), (t = {}));
    var i,
      r,
      a = new Ln(t);
    try {
      i = a.toXML(e);
    } catch (e) {
      r = e;
    }
    return n(r, i);
  };
  var Fn = {
    bpmn: {
      name: "BPMN20",
      uri: "http://www.omg.org/spec/BPMN/20100524/MODEL",
      associations: [],
      types: [
        {
          name: "Interface",
          superClass: ["RootElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "operations", type: "Operation", isMany: !0 },
            { name: "implementationRef", type: "String", isAttr: !0 }
          ]
        },
        {
          name: "Operation",
          superClass: ["BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "inMessageRef", type: "Message", isReference: !0 },
            { name: "outMessageRef", type: "Message", isReference: !0 },
            { name: "errorRef", type: "Error", isMany: !0, isReference: !0 },
            { name: "implementationRef", type: "String", isAttr: !0 }
          ]
        },
        { name: "EndPoint", superClass: ["RootElement"] },
        { name: "Auditing", superClass: ["BaseElement"] },
        {
          name: "GlobalTask",
          superClass: ["CallableElement"],
          properties: [{ name: "resources", type: "ResourceRole", isMany: !0 }]
        },
        { name: "Monitoring", superClass: ["BaseElement"] },
        { name: "Performer", superClass: ["ResourceRole"] },
        {
          name: "Process",
          superClass: ["FlowElementsContainer", "CallableElement"],
          properties: [
            { name: "processType", type: "ProcessType", isAttr: !0 },
            { name: "isClosed", isAttr: !0, type: "Boolean" },
            { name: "auditing", type: "Auditing" },
            { name: "monitoring", type: "Monitoring" },
            { name: "properties", type: "Property", isMany: !0 },
            {
              name: "laneSets",
              type: "LaneSet",
              isMany: !0,
              replaces: "FlowElementsContainer#laneSets"
            },
            {
              name: "flowElements",
              type: "FlowElement",
              isMany: !0,
              replaces: "FlowElementsContainer#flowElements"
            },
            { name: "artifacts", type: "Artifact", isMany: !0 },
            { name: "resources", type: "ResourceRole", isMany: !0 },
            {
              name: "correlationSubscriptions",
              type: "CorrelationSubscription",
              isMany: !0
            },
            { name: "supports", type: "Process", isMany: !0, isReference: !0 },
            {
              name: "definitionalCollaborationRef",
              type: "Collaboration",
              isAttr: !0,
              isReference: !0
            },
            { name: "isExecutable", isAttr: !0, type: "Boolean" }
          ]
        },
        {
          name: "LaneSet",
          superClass: ["BaseElement"],
          properties: [
            { name: "lanes", type: "Lane", isMany: !0 },
            { name: "name", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "Lane",
          superClass: ["BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "partitionElementRef",
              type: "BaseElement",
              isAttr: !0,
              isReference: !0
            },
            { name: "partitionElement", type: "BaseElement" },
            {
              name: "flowNodeRef",
              type: "FlowNode",
              isMany: !0,
              isReference: !0
            },
            {
              name: "childLaneSet",
              type: "LaneSet",
              xml: { serialize: "xsi:type" }
            }
          ]
        },
        { name: "GlobalManualTask", superClass: ["GlobalTask"] },
        { name: "ManualTask", superClass: ["Task"] },
        {
          name: "UserTask",
          superClass: ["Task"],
          properties: [
            { name: "renderings", type: "Rendering", isMany: !0 },
            { name: "implementation", isAttr: !0, type: "String" }
          ]
        },
        { name: "Rendering", superClass: ["BaseElement"] },
        { name: "HumanPerformer", superClass: ["Performer"] },
        { name: "PotentialOwner", superClass: ["HumanPerformer"] },
        {
          name: "GlobalUserTask",
          superClass: ["GlobalTask"],
          properties: [
            { name: "implementation", isAttr: !0, type: "String" },
            { name: "renderings", type: "Rendering", isMany: !0 }
          ]
        },
        {
          name: "Gateway",
          isAbstract: !0,
          superClass: ["FlowNode"],
          properties: [
            {
              name: "gatewayDirection",
              type: "GatewayDirection",
              default: "Unspecified",
              isAttr: !0
            }
          ]
        },
        {
          name: "EventBasedGateway",
          superClass: ["Gateway"],
          properties: [
            { name: "instantiate", default: !1, isAttr: !0, type: "Boolean" },
            {
              name: "eventGatewayType",
              type: "EventBasedGatewayType",
              isAttr: !0,
              default: "Exclusive"
            }
          ]
        },
        {
          name: "ComplexGateway",
          superClass: ["Gateway"],
          properties: [
            {
              name: "activationCondition",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            {
              name: "default",
              type: "SequenceFlow",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "ExclusiveGateway",
          superClass: ["Gateway"],
          properties: [
            {
              name: "default",
              type: "SequenceFlow",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "InclusiveGateway",
          superClass: ["Gateway"],
          properties: [
            {
              name: "default",
              type: "SequenceFlow",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        { name: "ParallelGateway", superClass: ["Gateway"] },
        { name: "RootElement", isAbstract: !0, superClass: ["BaseElement"] },
        {
          name: "Relationship",
          superClass: ["BaseElement"],
          properties: [
            { name: "type", isAttr: !0, type: "String" },
            { name: "direction", type: "RelationshipDirection", isAttr: !0 },
            { name: "source", isMany: !0, isReference: !0, type: "Element" },
            { name: "target", isMany: !0, isReference: !0, type: "Element" }
          ]
        },
        {
          name: "BaseElement",
          isAbstract: !0,
          properties: [
            { name: "id", isAttr: !0, type: "String", isId: !0 },
            { name: "documentation", type: "Documentation", isMany: !0 },
            {
              name: "extensionDefinitions",
              type: "ExtensionDefinition",
              isMany: !0,
              isReference: !0
            },
            { name: "extensionElements", type: "ExtensionElements" }
          ]
        },
        {
          name: "Extension",
          properties: [
            {
              name: "mustUnderstand",
              default: !1,
              isAttr: !0,
              type: "Boolean"
            },
            {
              name: "definition",
              type: "ExtensionDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "ExtensionDefinition",
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "extensionAttributeDefinitions",
              type: "ExtensionAttributeDefinition",
              isMany: !0
            }
          ]
        },
        {
          name: "ExtensionAttributeDefinition",
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "type", isAttr: !0, type: "String" },
            { name: "isReference", default: !1, isAttr: !0, type: "Boolean" },
            {
              name: "extensionDefinition",
              type: "ExtensionDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "ExtensionElements",
          properties: [
            { name: "valueRef", isAttr: !0, isReference: !0, type: "Element" },
            { name: "values", type: "Element", isMany: !0 },
            {
              name: "extensionAttributeDefinition",
              type: "ExtensionAttributeDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Documentation",
          superClass: ["BaseElement"],
          properties: [
            { name: "text", type: "String", isBody: !0 },
            {
              name: "textFormat",
              default: "text/plain",
              isAttr: !0,
              type: "String"
            }
          ]
        },
        {
          name: "Event",
          isAbstract: !0,
          superClass: ["FlowNode", "InteractionNode"],
          properties: [{ name: "properties", type: "Property", isMany: !0 }]
        },
        { name: "IntermediateCatchEvent", superClass: ["CatchEvent"] },
        { name: "IntermediateThrowEvent", superClass: ["ThrowEvent"] },
        { name: "EndEvent", superClass: ["ThrowEvent"] },
        {
          name: "StartEvent",
          superClass: ["CatchEvent"],
          properties: [
            { name: "isInterrupting", default: !0, isAttr: !0, type: "Boolean" }
          ]
        },
        {
          name: "ThrowEvent",
          isAbstract: !0,
          superClass: ["Event"],
          properties: [
            { name: "dataInputs", type: "DataInput", isMany: !0 },
            {
              name: "dataInputAssociations",
              type: "DataInputAssociation",
              isMany: !0
            },
            { name: "inputSet", type: "InputSet" },
            { name: "eventDefinitions", type: "EventDefinition", isMany: !0 },
            {
              name: "eventDefinitionRef",
              type: "EventDefinition",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "CatchEvent",
          isAbstract: !0,
          superClass: ["Event"],
          properties: [
            {
              name: "parallelMultiple",
              isAttr: !0,
              type: "Boolean",
              default: !1
            },
            { name: "dataOutputs", type: "DataOutput", isMany: !0 },
            {
              name: "dataOutputAssociations",
              type: "DataOutputAssociation",
              isMany: !0
            },
            { name: "outputSet", type: "OutputSet" },
            { name: "eventDefinitions", type: "EventDefinition", isMany: !0 },
            {
              name: "eventDefinitionRef",
              type: "EventDefinition",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "BoundaryEvent",
          superClass: ["CatchEvent"],
          properties: [
            {
              name: "cancelActivity",
              default: !0,
              isAttr: !0,
              type: "Boolean"
            },
            {
              name: "attachedToRef",
              type: "Activity",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "EventDefinition",
          isAbstract: !0,
          superClass: ["RootElement"]
        },
        { name: "CancelEventDefinition", superClass: ["EventDefinition"] },
        {
          name: "ErrorEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            { name: "errorRef", type: "Error", isAttr: !0, isReference: !0 }
          ]
        },
        { name: "TerminateEventDefinition", superClass: ["EventDefinition"] },
        {
          name: "EscalationEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            {
              name: "escalationRef",
              type: "Escalation",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Escalation",
          properties: [
            {
              name: "structureRef",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            },
            { name: "name", isAttr: !0, type: "String" },
            { name: "escalationCode", isAttr: !0, type: "String" }
          ],
          superClass: ["RootElement"]
        },
        {
          name: "CompensateEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            {
              name: "waitForCompletion",
              isAttr: !0,
              type: "Boolean",
              default: !0
            },
            {
              name: "activityRef",
              type: "Activity",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "TimerEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            {
              name: "timeDate",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            {
              name: "timeCycle",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            {
              name: "timeDuration",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            }
          ]
        },
        {
          name: "LinkEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "target",
              type: "LinkEventDefinition",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "source",
              type: "LinkEventDefinition",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "MessageEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            {
              name: "messageRef",
              type: "Message",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "operationRef",
              type: "Operation",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "ConditionalEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            {
              name: "condition",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            }
          ]
        },
        {
          name: "SignalEventDefinition",
          superClass: ["EventDefinition"],
          properties: [
            { name: "signalRef", type: "Signal", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "Signal",
          superClass: ["RootElement"],
          properties: [
            {
              name: "structureRef",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            },
            { name: "name", isAttr: !0, type: "String" }
          ]
        },
        { name: "ImplicitThrowEvent", superClass: ["ThrowEvent"] },
        {
          name: "DataState",
          superClass: ["BaseElement"],
          properties: [{ name: "name", isAttr: !0, type: "String" }]
        },
        {
          name: "ItemAwareElement",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "itemSubjectRef",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            },
            { name: "dataState", type: "DataState" }
          ]
        },
        {
          name: "DataAssociation",
          superClass: ["BaseElement"],
          properties: [
            { name: "assignment", type: "Assignment", isMany: !0 },
            {
              name: "sourceRef",
              type: "ItemAwareElement",
              isMany: !0,
              isReference: !0
            },
            { name: "targetRef", type: "ItemAwareElement", isReference: !0 },
            {
              name: "transformation",
              type: "FormalExpression",
              xml: { serialize: "property" }
            }
          ]
        },
        {
          name: "DataInput",
          superClass: ["ItemAwareElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "isCollection", default: !1, isAttr: !0, type: "Boolean" },
            {
              name: "inputSetRef",
              type: "InputSet",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            },
            {
              name: "inputSetWithOptional",
              type: "InputSet",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            },
            {
              name: "inputSetWithWhileExecuting",
              type: "InputSet",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "DataOutput",
          superClass: ["ItemAwareElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "isCollection", default: !1, isAttr: !0, type: "Boolean" },
            {
              name: "outputSetRef",
              type: "OutputSet",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            },
            {
              name: "outputSetWithOptional",
              type: "OutputSet",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            },
            {
              name: "outputSetWithWhileExecuting",
              type: "OutputSet",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "InputSet",
          superClass: ["BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "dataInputRefs",
              type: "DataInput",
              isMany: !0,
              isReference: !0
            },
            {
              name: "optionalInputRefs",
              type: "DataInput",
              isMany: !0,
              isReference: !0
            },
            {
              name: "whileExecutingInputRefs",
              type: "DataInput",
              isMany: !0,
              isReference: !0
            },
            {
              name: "outputSetRefs",
              type: "OutputSet",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "OutputSet",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "dataOutputRefs",
              type: "DataOutput",
              isMany: !0,
              isReference: !0
            },
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "inputSetRefs",
              type: "InputSet",
              isMany: !0,
              isReference: !0
            },
            {
              name: "optionalOutputRefs",
              type: "DataOutput",
              isMany: !0,
              isReference: !0
            },
            {
              name: "whileExecutingOutputRefs",
              type: "DataOutput",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Property",
          superClass: ["ItemAwareElement"],
          properties: [{ name: "name", isAttr: !0, type: "String" }]
        },
        { name: "DataInputAssociation", superClass: ["DataAssociation"] },
        { name: "DataOutputAssociation", superClass: ["DataAssociation"] },
        {
          name: "InputOutputSpecification",
          superClass: ["BaseElement"],
          properties: [
            { name: "dataInputs", type: "DataInput", isMany: !0 },
            { name: "dataOutputs", type: "DataOutput", isMany: !0 },
            { name: "inputSets", type: "InputSet", isMany: !0 },
            { name: "outputSets", type: "OutputSet", isMany: !0 }
          ]
        },
        {
          name: "DataObject",
          superClass: ["FlowElement", "ItemAwareElement"],
          properties: [
            { name: "isCollection", default: !1, isAttr: !0, type: "Boolean" }
          ]
        },
        {
          name: "InputOutputBinding",
          properties: [
            {
              name: "inputDataRef",
              type: "InputSet",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "outputDataRef",
              type: "OutputSet",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "operationRef",
              type: "Operation",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Assignment",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "from",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            { name: "to", type: "Expression", xml: { serialize: "xsi:type" } }
          ]
        },
        {
          name: "DataStore",
          superClass: ["RootElement", "ItemAwareElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "capacity", isAttr: !0, type: "Integer" },
            { name: "isUnlimited", default: !0, isAttr: !0, type: "Boolean" }
          ]
        },
        {
          name: "DataStoreReference",
          superClass: ["ItemAwareElement", "FlowElement"],
          properties: [
            {
              name: "dataStoreRef",
              type: "DataStore",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "DataObjectReference",
          superClass: ["ItemAwareElement", "FlowElement"],
          properties: [
            {
              name: "dataObjectRef",
              type: "DataObject",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "ConversationLink",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "sourceRef",
              type: "InteractionNode",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "targetRef",
              type: "InteractionNode",
              isAttr: !0,
              isReference: !0
            },
            { name: "name", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "ConversationAssociation",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "innerConversationNodeRef",
              type: "ConversationNode",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "outerConversationNodeRef",
              type: "ConversationNode",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "CallConversation",
          superClass: ["ConversationNode"],
          properties: [
            {
              name: "calledCollaborationRef",
              type: "Collaboration",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "participantAssociations",
              type: "ParticipantAssociation",
              isMany: !0
            }
          ]
        },
        { name: "Conversation", superClass: ["ConversationNode"] },
        {
          name: "SubConversation",
          superClass: ["ConversationNode"],
          properties: [
            { name: "conversationNodes", type: "ConversationNode", isMany: !0 }
          ]
        },
        {
          name: "ConversationNode",
          isAbstract: !0,
          superClass: ["InteractionNode", "BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "participantRef",
              type: "Participant",
              isMany: !0,
              isReference: !0
            },
            {
              name: "messageFlowRefs",
              type: "MessageFlow",
              isMany: !0,
              isReference: !0
            },
            { name: "correlationKeys", type: "CorrelationKey", isMany: !0 }
          ]
        },
        { name: "GlobalConversation", superClass: ["Collaboration"] },
        {
          name: "PartnerEntity",
          superClass: ["RootElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "participantRef",
              type: "Participant",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "PartnerRole",
          superClass: ["RootElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "participantRef",
              type: "Participant",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "CorrelationProperty",
          superClass: ["RootElement"],
          properties: [
            {
              name: "correlationPropertyRetrievalExpression",
              type: "CorrelationPropertyRetrievalExpression",
              isMany: !0
            },
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "type",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Error",
          superClass: ["RootElement"],
          properties: [
            {
              name: "structureRef",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            },
            { name: "name", isAttr: !0, type: "String" },
            { name: "errorCode", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "CorrelationKey",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "correlationPropertyRef",
              type: "CorrelationProperty",
              isMany: !0,
              isReference: !0
            },
            { name: "name", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "Expression",
          superClass: ["BaseElement"],
          isAbstract: !1,
          properties: [{ name: "body", type: "String", isBody: !0 }]
        },
        {
          name: "FormalExpression",
          superClass: ["Expression"],
          properties: [
            { name: "language", isAttr: !0, type: "String" },
            {
              name: "evaluatesToTypeRef",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Message",
          superClass: ["RootElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "itemRef",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "ItemDefinition",
          superClass: ["RootElement"],
          properties: [
            { name: "itemKind", type: "ItemKind", isAttr: !0 },
            { name: "structureRef", type: "String", isAttr: !0 },
            { name: "isCollection", default: !1, isAttr: !0, type: "Boolean" },
            { name: "import", type: "Import", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "FlowElement",
          isAbstract: !0,
          superClass: ["BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "auditing", type: "Auditing" },
            { name: "monitoring", type: "Monitoring" },
            {
              name: "categoryValueRef",
              type: "CategoryValue",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "SequenceFlow",
          superClass: ["FlowElement"],
          properties: [
            { name: "isImmediate", isAttr: !0, type: "Boolean" },
            {
              name: "conditionExpression",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            {
              name: "sourceRef",
              type: "FlowNode",
              isAttr: !0,
              isReference: !0
            },
            { name: "targetRef", type: "FlowNode", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "FlowElementsContainer",
          isAbstract: !0,
          superClass: ["BaseElement"],
          properties: [
            { name: "laneSets", type: "LaneSet", isMany: !0 },
            { name: "flowElements", type: "FlowElement", isMany: !0 }
          ]
        },
        {
          name: "CallableElement",
          isAbstract: !0,
          superClass: ["RootElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "ioSpecification",
              type: "InputOutputSpecification",
              xml: { serialize: "property" }
            },
            {
              name: "supportedInterfaceRef",
              type: "Interface",
              isMany: !0,
              isReference: !0
            },
            {
              name: "ioBinding",
              type: "InputOutputBinding",
              isMany: !0,
              xml: { serialize: "property" }
            }
          ]
        },
        {
          name: "FlowNode",
          isAbstract: !0,
          superClass: ["FlowElement"],
          properties: [
            {
              name: "incoming",
              type: "SequenceFlow",
              isMany: !0,
              isReference: !0
            },
            {
              name: "outgoing",
              type: "SequenceFlow",
              isMany: !0,
              isReference: !0
            },
            {
              name: "lanes",
              type: "Lane",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "CorrelationPropertyRetrievalExpression",
          superClass: ["BaseElement"],
          properties: [
            { name: "messagePath", type: "FormalExpression" },
            { name: "messageRef", type: "Message", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "CorrelationPropertyBinding",
          superClass: ["BaseElement"],
          properties: [
            { name: "dataPath", type: "FormalExpression" },
            {
              name: "correlationPropertyRef",
              type: "CorrelationProperty",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Resource",
          superClass: ["RootElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "resourceParameters",
              type: "ResourceParameter",
              isMany: !0
            }
          ]
        },
        {
          name: "ResourceParameter",
          superClass: ["BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "isRequired", isAttr: !0, type: "Boolean" },
            {
              name: "type",
              type: "ItemDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "CorrelationSubscription",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "correlationKeyRef",
              type: "CorrelationKey",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "correlationPropertyBinding",
              type: "CorrelationPropertyBinding",
              isMany: !0
            }
          ]
        },
        {
          name: "MessageFlow",
          superClass: ["BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "sourceRef",
              type: "InteractionNode",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "targetRef",
              type: "InteractionNode",
              isAttr: !0,
              isReference: !0
            },
            { name: "messageRef", type: "Message", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "MessageFlowAssociation",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "innerMessageFlowRef",
              type: "MessageFlow",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "outerMessageFlowRef",
              type: "MessageFlow",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "InteractionNode",
          isAbstract: !0,
          properties: [
            {
              name: "incomingConversationLinks",
              type: "ConversationLink",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            },
            {
              name: "outgoingConversationLinks",
              type: "ConversationLink",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Participant",
          superClass: ["InteractionNode", "BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            {
              name: "interfaceRef",
              type: "Interface",
              isMany: !0,
              isReference: !0
            },
            {
              name: "participantMultiplicity",
              type: "ParticipantMultiplicity"
            },
            {
              name: "endPointRefs",
              type: "EndPoint",
              isMany: !0,
              isReference: !0
            },
            { name: "processRef", type: "Process", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "ParticipantAssociation",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "innerParticipantRef",
              type: "Participant",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "outerParticipantRef",
              type: "Participant",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "ParticipantMultiplicity",
          properties: [
            { name: "minimum", default: 0, isAttr: !0, type: "Integer" },
            { name: "maximum", default: 1, isAttr: !0, type: "Integer" }
          ],
          superClass: ["BaseElement"]
        },
        {
          name: "Collaboration",
          superClass: ["RootElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "isClosed", isAttr: !0, type: "Boolean" },
            { name: "participants", type: "Participant", isMany: !0 },
            { name: "messageFlows", type: "MessageFlow", isMany: !0 },
            { name: "artifacts", type: "Artifact", isMany: !0 },
            { name: "conversations", type: "ConversationNode", isMany: !0 },
            {
              name: "conversationAssociations",
              type: "ConversationAssociation"
            },
            {
              name: "participantAssociations",
              type: "ParticipantAssociation",
              isMany: !0
            },
            {
              name: "messageFlowAssociations",
              type: "MessageFlowAssociation",
              isMany: !0
            },
            { name: "correlationKeys", type: "CorrelationKey", isMany: !0 },
            {
              name: "choreographyRef",
              type: "Choreography",
              isMany: !0,
              isReference: !0
            },
            { name: "conversationLinks", type: "ConversationLink", isMany: !0 }
          ]
        },
        {
          name: "ChoreographyActivity",
          isAbstract: !0,
          superClass: ["FlowNode"],
          properties: [
            {
              name: "participantRef",
              type: "Participant",
              isMany: !0,
              isReference: !0
            },
            {
              name: "initiatingParticipantRef",
              type: "Participant",
              isAttr: !0,
              isReference: !0
            },
            { name: "correlationKeys", type: "CorrelationKey", isMany: !0 },
            {
              name: "loopType",
              type: "ChoreographyLoopType",
              default: "None",
              isAttr: !0
            }
          ]
        },
        {
          name: "CallChoreography",
          superClass: ["ChoreographyActivity"],
          properties: [
            {
              name: "calledChoreographyRef",
              type: "Choreography",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "participantAssociations",
              type: "ParticipantAssociation",
              isMany: !0
            }
          ]
        },
        {
          name: "SubChoreography",
          superClass: ["ChoreographyActivity", "FlowElementsContainer"],
          properties: [{ name: "artifacts", type: "Artifact", isMany: !0 }]
        },
        {
          name: "ChoreographyTask",
          superClass: ["ChoreographyActivity"],
          properties: [
            {
              name: "messageFlowRef",
              type: "MessageFlow",
              isMany: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Choreography",
          superClass: ["Collaboration", "FlowElementsContainer"]
        },
        {
          name: "GlobalChoreographyTask",
          superClass: ["Choreography"],
          properties: [
            {
              name: "initiatingParticipantRef",
              type: "Participant",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "TextAnnotation",
          superClass: ["Artifact"],
          properties: [
            { name: "text", type: "String" },
            {
              name: "textFormat",
              default: "text/plain",
              isAttr: !0,
              type: "String"
            }
          ]
        },
        {
          name: "Group",
          superClass: ["Artifact"],
          properties: [
            {
              name: "categoryValueRef",
              type: "CategoryValue",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Association",
          superClass: ["Artifact"],
          properties: [
            {
              name: "associationDirection",
              type: "AssociationDirection",
              isAttr: !0
            },
            {
              name: "sourceRef",
              type: "BaseElement",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "targetRef",
              type: "BaseElement",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "Category",
          superClass: ["RootElement"],
          properties: [
            { name: "categoryValue", type: "CategoryValue", isMany: !0 },
            { name: "name", isAttr: !0, type: "String" }
          ]
        },
        { name: "Artifact", isAbstract: !0, superClass: ["BaseElement"] },
        {
          name: "CategoryValue",
          superClass: ["BaseElement"],
          properties: [
            {
              name: "categorizedFlowElements",
              type: "FlowElement",
              isVirtual: !0,
              isMany: !0,
              isReference: !0
            },
            { name: "value", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "Activity",
          isAbstract: !0,
          superClass: ["FlowNode"],
          properties: [
            {
              name: "isForCompensation",
              default: !1,
              isAttr: !0,
              type: "Boolean"
            },
            {
              name: "default",
              type: "SequenceFlow",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "ioSpecification",
              type: "InputOutputSpecification",
              xml: { serialize: "property" }
            },
            {
              name: "boundaryEventRefs",
              type: "BoundaryEvent",
              isMany: !0,
              isReference: !0
            },
            { name: "properties", type: "Property", isMany: !0 },
            {
              name: "dataInputAssociations",
              type: "DataInputAssociation",
              isMany: !0
            },
            {
              name: "dataOutputAssociations",
              type: "DataOutputAssociation",
              isMany: !0
            },
            { name: "startQuantity", default: 1, isAttr: !0, type: "Integer" },
            { name: "resources", type: "ResourceRole", isMany: !0 },
            {
              name: "completionQuantity",
              default: 1,
              isAttr: !0,
              type: "Integer"
            },
            { name: "loopCharacteristics", type: "LoopCharacteristics" }
          ]
        },
        {
          name: "ServiceTask",
          superClass: ["Task"],
          properties: [
            { name: "implementation", isAttr: !0, type: "String" },
            {
              name: "operationRef",
              type: "Operation",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "SubProcess",
          superClass: ["Activity", "FlowElementsContainer", "InteractionNode"],
          properties: [
            {
              name: "triggeredByEvent",
              default: !1,
              isAttr: !0,
              type: "Boolean"
            },
            { name: "artifacts", type: "Artifact", isMany: !0 }
          ]
        },
        {
          name: "LoopCharacteristics",
          isAbstract: !0,
          superClass: ["BaseElement"]
        },
        {
          name: "MultiInstanceLoopCharacteristics",
          superClass: ["LoopCharacteristics"],
          properties: [
            { name: "isSequential", default: !1, isAttr: !0, type: "Boolean" },
            {
              name: "behavior",
              type: "MultiInstanceBehavior",
              default: "All",
              isAttr: !0
            },
            {
              name: "loopCardinality",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            {
              name: "loopDataInputRef",
              type: "ItemAwareElement",
              isReference: !0
            },
            {
              name: "loopDataOutputRef",
              type: "ItemAwareElement",
              isReference: !0
            },
            {
              name: "inputDataItem",
              type: "DataInput",
              xml: { serialize: "property" }
            },
            {
              name: "outputDataItem",
              type: "DataOutput",
              xml: { serialize: "property" }
            },
            {
              name: "complexBehaviorDefinition",
              type: "ComplexBehaviorDefinition",
              isMany: !0
            },
            {
              name: "completionCondition",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            {
              name: "oneBehaviorEventRef",
              type: "EventDefinition",
              isAttr: !0,
              isReference: !0
            },
            {
              name: "noneBehaviorEventRef",
              type: "EventDefinition",
              isAttr: !0,
              isReference: !0
            }
          ]
        },
        {
          name: "StandardLoopCharacteristics",
          superClass: ["LoopCharacteristics"],
          properties: [
            { name: "testBefore", default: !1, isAttr: !0, type: "Boolean" },
            {
              name: "loopCondition",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            { name: "loopMaximum", type: "Integer", isAttr: !0 }
          ]
        },
        {
          name: "CallActivity",
          superClass: ["Activity"],
          properties: [{ name: "calledElement", type: "String", isAttr: !0 }]
        },
        { name: "Task", superClass: ["Activity", "InteractionNode"] },
        {
          name: "SendTask",
          superClass: ["Task"],
          properties: [
            { name: "implementation", isAttr: !0, type: "String" },
            {
              name: "operationRef",
              type: "Operation",
              isAttr: !0,
              isReference: !0
            },
            { name: "messageRef", type: "Message", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "ReceiveTask",
          superClass: ["Task"],
          properties: [
            { name: "implementation", isAttr: !0, type: "String" },
            { name: "instantiate", default: !1, isAttr: !0, type: "Boolean" },
            {
              name: "operationRef",
              type: "Operation",
              isAttr: !0,
              isReference: !0
            },
            { name: "messageRef", type: "Message", isAttr: !0, isReference: !0 }
          ]
        },
        {
          name: "ScriptTask",
          superClass: ["Task"],
          properties: [
            { name: "scriptFormat", isAttr: !0, type: "String" },
            { name: "script", type: "String" }
          ]
        },
        {
          name: "BusinessRuleTask",
          superClass: ["Task"],
          properties: [{ name: "implementation", isAttr: !0, type: "String" }]
        },
        {
          name: "AdHocSubProcess",
          superClass: ["SubProcess"],
          properties: [
            {
              name: "completionCondition",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            { name: "ordering", type: "AdHocOrdering", isAttr: !0 },
            {
              name: "cancelRemainingInstances",
              default: !0,
              isAttr: !0,
              type: "Boolean"
            }
          ]
        },
        {
          name: "Transaction",
          superClass: ["SubProcess"],
          properties: [
            { name: "protocol", isAttr: !0, type: "String" },
            { name: "method", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "GlobalScriptTask",
          superClass: ["GlobalTask"],
          properties: [
            { name: "scriptLanguage", isAttr: !0, type: "String" },
            { name: "script", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "GlobalBusinessRuleTask",
          superClass: ["GlobalTask"],
          properties: [{ name: "implementation", isAttr: !0, type: "String" }]
        },
        {
          name: "ComplexBehaviorDefinition",
          superClass: ["BaseElement"],
          properties: [
            { name: "condition", type: "FormalExpression" },
            { name: "event", type: "ImplicitThrowEvent" }
          ]
        },
        {
          name: "ResourceRole",
          superClass: ["BaseElement"],
          properties: [
            { name: "resourceRef", type: "Resource", isReference: !0 },
            {
              name: "resourceParameterBindings",
              type: "ResourceParameterBinding",
              isMany: !0
            },
            {
              name: "resourceAssignmentExpression",
              type: "ResourceAssignmentExpression"
            },
            { name: "name", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "ResourceParameterBinding",
          properties: [
            {
              name: "expression",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            },
            {
              name: "parameterRef",
              type: "ResourceParameter",
              isAttr: !0,
              isReference: !0
            }
          ],
          superClass: ["BaseElement"]
        },
        {
          name: "ResourceAssignmentExpression",
          properties: [
            {
              name: "expression",
              type: "Expression",
              xml: { serialize: "xsi:type" }
            }
          ],
          superClass: ["BaseElement"]
        },
        {
          name: "Import",
          properties: [
            { name: "importType", isAttr: !0, type: "String" },
            { name: "location", isAttr: !0, type: "String" },
            { name: "namespace", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "Definitions",
          superClass: ["BaseElement"],
          properties: [
            { name: "name", isAttr: !0, type: "String" },
            { name: "targetNamespace", isAttr: !0, type: "String" },
            {
              name: "expressionLanguage",
              default: "http://www.w3.org/1999/XPath",
              isAttr: !0,
              type: "String"
            },
            {
              name: "typeLanguage",
              default: "http://www.w3.org/2001/XMLSchema",
              isAttr: !0,
              type: "String"
            },
            { name: "imports", type: "Import", isMany: !0 },
            { name: "extensions", type: "Extension", isMany: !0 },
            { name: "rootElements", type: "RootElement", isMany: !0 },
            { name: "diagrams", isMany: !0, type: "bpmndi:BPMNDiagram" },
            { name: "exporter", isAttr: !0, type: "String" },
            { name: "relationships", type: "Relationship", isMany: !0 },
            { name: "exporterVersion", isAttr: !0, type: "String" }
          ]
        }
      ],
      enumerations: [
        {
          name: "ProcessType",
          literalValues: [
            { name: "None" },
            { name: "Public" },
            { name: "Private" }
          ]
        },
        {
          name: "GatewayDirection",
          literalValues: [
            { name: "Unspecified" },
            { name: "Converging" },
            { name: "Diverging" },
            { name: "Mixed" }
          ]
        },
        {
          name: "EventBasedGatewayType",
          literalValues: [{ name: "Parallel" }, { name: "Exclusive" }]
        },
        {
          name: "RelationshipDirection",
          literalValues: [
            { name: "None" },
            { name: "Forward" },
            { name: "Backward" },
            { name: "Both" }
          ]
        },
        {
          name: "ItemKind",
          literalValues: [{ name: "Physical" }, { name: "Information" }]
        },
        {
          name: "ChoreographyLoopType",
          literalValues: [
            { name: "None" },
            { name: "Standard" },
            { name: "MultiInstanceSequential" },
            { name: "MultiInstanceParallel" }
          ]
        },
        {
          name: "AssociationDirection",
          literalValues: [{ name: "None" }, { name: "One" }, { name: "Both" }]
        },
        {
          name: "MultiInstanceBehavior",
          literalValues: [
            { name: "None" },
            { name: "One" },
            { name: "All" },
            { name: "Complex" }
          ]
        },
        {
          name: "AdHocOrdering",
          literalValues: [{ name: "Parallel" }, { name: "Sequential" }]
        }
      ],
      prefix: "bpmn",
      xml: { tagAlias: "lowerCase", typePrefix: "t" }
    },
    bpmndi: {
      name: "BPMNDI",
      uri: "http://www.omg.org/spec/BPMN/20100524/DI",
      types: [
        {
          name: "BPMNDiagram",
          properties: [
            {
              name: "plane",
              type: "BPMNPlane",
              redefines: "di:Diagram#rootElement"
            },
            { name: "labelStyle", type: "BPMNLabelStyle", isMany: !0 }
          ],
          superClass: ["di:Diagram"]
        },
        {
          name: "BPMNPlane",
          properties: [
            {
              name: "bpmnElement",
              isAttr: !0,
              isReference: !0,
              type: "bpmn:BaseElement",
              redefines: "di:DiagramElement#modelElement"
            }
          ],
          superClass: ["di:Plane"]
        },
        {
          name: "BPMNShape",
          properties: [
            {
              name: "bpmnElement",
              isAttr: !0,
              isReference: !0,
              type: "bpmn:BaseElement",
              redefines: "di:DiagramElement#modelElement"
            },
            { name: "isHorizontal", isAttr: !0, type: "Boolean" },
            { name: "isExpanded", isAttr: !0, type: "Boolean" },
            { name: "isMarkerVisible", isAttr: !0, type: "Boolean" },
            { name: "label", type: "BPMNLabel" },
            { name: "isMessageVisible", isAttr: !0, type: "Boolean" },
            {
              name: "participantBandKind",
              type: "ParticipantBandKind",
              isAttr: !0
            },
            {
              name: "choreographyActivityShape",
              type: "BPMNShape",
              isAttr: !0,
              isReference: !0
            }
          ],
          superClass: ["di:LabeledShape"]
        },
        {
          name: "BPMNEdge",
          properties: [
            { name: "label", type: "BPMNLabel" },
            {
              name: "bpmnElement",
              isAttr: !0,
              isReference: !0,
              type: "bpmn:BaseElement",
              redefines: "di:DiagramElement#modelElement"
            },
            {
              name: "sourceElement",
              isAttr: !0,
              isReference: !0,
              type: "di:DiagramElement",
              redefines: "di:Edge#source"
            },
            {
              name: "targetElement",
              isAttr: !0,
              isReference: !0,
              type: "di:DiagramElement",
              redefines: "di:Edge#target"
            },
            {
              name: "messageVisibleKind",
              type: "MessageVisibleKind",
              isAttr: !0,
              default: "initiating"
            }
          ],
          superClass: ["di:LabeledEdge"]
        },
        {
          name: "BPMNLabel",
          properties: [
            {
              name: "labelStyle",
              type: "BPMNLabelStyle",
              isAttr: !0,
              isReference: !0,
              redefines: "di:DiagramElement#style"
            }
          ],
          superClass: ["di:Label"]
        },
        {
          name: "BPMNLabelStyle",
          properties: [{ name: "font", type: "dc:Font" }],
          superClass: ["di:Style"]
        }
      ],
      enumerations: [
        {
          name: "ParticipantBandKind",
          literalValues: [
            { name: "top_initiating" },
            { name: "middle_initiating" },
            { name: "bottom_initiating" },
            { name: "top_non_initiating" },
            { name: "middle_non_initiating" },
            { name: "bottom_non_initiating" }
          ]
        },
        {
          name: "MessageVisibleKind",
          literalValues: [{ name: "initiating" }, { name: "non_initiating" }]
        }
      ],
      associations: [],
      prefix: "bpmndi"
    },
    dc: {
      name: "DC",
      uri: "http://www.omg.org/spec/DD/20100524/DC",
      types: [
        { name: "Boolean" },
        { name: "Integer" },
        { name: "Real" },
        { name: "String" },
        {
          name: "Font",
          properties: [
            { name: "name", type: "String", isAttr: !0 },
            { name: "size", type: "Real", isAttr: !0 },
            { name: "isBold", type: "Boolean", isAttr: !0 },
            { name: "isItalic", type: "Boolean", isAttr: !0 },
            { name: "isUnderline", type: "Boolean", isAttr: !0 },
            { name: "isStrikeThrough", type: "Boolean", isAttr: !0 }
          ]
        },
        {
          name: "Point",
          properties: [
            { name: "x", type: "Real", default: "0", isAttr: !0 },
            { name: "y", type: "Real", default: "0", isAttr: !0 }
          ]
        },
        {
          name: "Bounds",
          properties: [
            { name: "x", type: "Real", default: "0", isAttr: !0 },
            { name: "y", type: "Real", default: "0", isAttr: !0 },
            { name: "width", type: "Real", isAttr: !0 },
            { name: "height", type: "Real", isAttr: !0 }
          ]
        }
      ],
      prefix: "dc",
      associations: []
    },
    di: {
      name: "DI",
      uri: "http://www.omg.org/spec/DD/20100524/DI",
      types: [
        {
          name: "DiagramElement",
          isAbstract: !0,
          properties: [
            { name: "id", type: "String", isAttr: !0, isId: !0 },
            { name: "extension", type: "Extension" },
            {
              name: "owningDiagram",
              type: "Diagram",
              isReadOnly: !0,
              isVirtual: !0,
              isReference: !0
            },
            {
              name: "owningElement",
              type: "DiagramElement",
              isReadOnly: !0,
              isVirtual: !0,
              isReference: !0
            },
            {
              name: "modelElement",
              isReadOnly: !0,
              isVirtual: !0,
              isReference: !0,
              type: "Element"
            },
            {
              name: "style",
              type: "Style",
              isReadOnly: !0,
              isVirtual: !0,
              isReference: !0
            },
            {
              name: "ownedElement",
              type: "DiagramElement",
              isReadOnly: !0,
              isVirtual: !0,
              isMany: !0
            }
          ]
        },
        { name: "Node", isAbstract: !0, superClass: ["DiagramElement"] },
        {
          name: "Edge",
          isAbstract: !0,
          superClass: ["DiagramElement"],
          properties: [
            {
              name: "source",
              type: "DiagramElement",
              isReadOnly: !0,
              isVirtual: !0,
              isReference: !0
            },
            {
              name: "target",
              type: "DiagramElement",
              isReadOnly: !0,
              isVirtual: !0,
              isReference: !0
            },
            {
              name: "waypoint",
              isUnique: !1,
              isMany: !0,
              type: "dc:Point",
              xml: { serialize: "xsi:type" }
            }
          ]
        },
        {
          name: "Diagram",
          isAbstract: !0,
          properties: [
            { name: "id", type: "String", isAttr: !0, isId: !0 },
            {
              name: "rootElement",
              type: "DiagramElement",
              isReadOnly: !0,
              isVirtual: !0
            },
            { name: "name", isAttr: !0, type: "String" },
            { name: "documentation", isAttr: !0, type: "String" },
            { name: "resolution", isAttr: !0, type: "Real" },
            {
              name: "ownedStyle",
              type: "Style",
              isReadOnly: !0,
              isVirtual: !0,
              isMany: !0
            }
          ]
        },
        {
          name: "Shape",
          isAbstract: !0,
          superClass: ["Node"],
          properties: [{ name: "bounds", type: "dc:Bounds" }]
        },
        {
          name: "Plane",
          isAbstract: !0,
          superClass: ["Node"],
          properties: [
            {
              name: "planeElement",
              type: "DiagramElement",
              subsettedProperty: "DiagramElement-ownedElement",
              isMany: !0
            }
          ]
        },
        {
          name: "LabeledEdge",
          isAbstract: !0,
          superClass: ["Edge"],
          properties: [
            {
              name: "ownedLabel",
              type: "Label",
              isReadOnly: !0,
              subsettedProperty: "DiagramElement-ownedElement",
              isVirtual: !0,
              isMany: !0
            }
          ]
        },
        {
          name: "LabeledShape",
          isAbstract: !0,
          superClass: ["Shape"],
          properties: [
            {
              name: "ownedLabel",
              type: "Label",
              isReadOnly: !0,
              subsettedProperty: "DiagramElement-ownedElement",
              isVirtual: !0,
              isMany: !0
            }
          ]
        },
        {
          name: "Label",
          isAbstract: !0,
          superClass: ["Node"],
          properties: [{ name: "bounds", type: "dc:Bounds" }]
        },
        {
          name: "Style",
          isAbstract: !0,
          properties: [{ name: "id", type: "String", isAttr: !0, isId: !0 }]
        },
        {
          name: "Extension",
          properties: [{ name: "values", type: "Element", isMany: !0 }]
        }
      ],
      associations: [],
      prefix: "di",
      xml: { tagAlias: "lowerCase" }
    },
    bioc: {
      name: "bpmn.io colors for BPMN",
      uri: "http://bpmn.io/schema/bpmn/biocolor/1.0",
      prefix: "bioc",
      types: [
        {
          name: "ColoredShape",
          extends: ["bpmndi:BPMNShape"],
          properties: [
            { name: "stroke", isAttr: !0, type: "String" },
            { name: "fill", isAttr: !0, type: "String" }
          ]
        },
        {
          name: "ColoredEdge",
          extends: ["bpmndi:BPMNEdge"],
          properties: [
            { name: "stroke", isAttr: !0, type: "String" },
            { name: "fill", isAttr: !0, type: "String" }
          ]
        }
      ],
      enumerations: [],
      associations: []
    }
  };
  function jn(e, t) {
    return new In(T({}, Fn, e), t);
  }
  function Vn(e) {
    return e ? "<" + e.$type + (e.id ? ' id="' + e.id : "") + '" />' : "<null>";
  }
  var Wn = new Ze(
    { name: "bpmnElement", enumerable: !0 },
    { name: "di", configurable: !0 }
  );
  function zn(e, t) {
    return e.$instanceOf(t);
  }
  function Gn(o, s) {
    var l = {},
      p = [];
    function c(t, n) {
      return function(e) {
        t(e, n);
      };
    }
    function i(e) {
      l[e.id] = e;
    }
    function r(t, e) {
      try {
        var n =
          t.di &&
          (function(e, t) {
            if (e.gfx)
              throw new Error(
                s("already rendered {element}", { element: Vn(e) })
              );
            return o.element(e, t);
          })(t, e);
        return i(t), n;
      } catch (e) {
        u(e.message, { element: t, error: e }),
          console.error(s("failed to import {element}", { element: Vn(t) })),
          console.error(e);
      }
    }
    function u(e, t) {
      o.error(e, t);
    }
    function h(e) {
      var t = e.bpmnElement;
      t
        ? t.di
          ? u(
              s("multiple DI elements defined for {element}", {
                element: Vn(t)
              }),
              { element: t }
            )
          : (Wn.bind(t, "di"), (t.di = e))
        : u(s("no bpmnElement referenced in {element}", { element: Vn(e) }), {
            element: e
          });
    }
    function m(e) {
      !(function(e) {
        h(e), P(e.planeElement, t);
      })(e.plane);
    }
    function t(e) {
      h(e);
    }
    function f() {
      for (; p.length; ) p.shift()();
    }
    function d(e, t) {
      S(e, t), b(e.ioSpecification, t), x(e.artifacts, t), i(e);
    }
    function y(e, t) {
      r(e, t);
    }
    function a(e, t) {
      r(e, t);
    }
    function n(e, t) {
      r(e, t);
    }
    function g(e, t) {
      r(e, t);
    }
    function v(e, t) {
      r(e, t);
    }
    function x(e, t) {
      P(e, function(e) {
        zn(e, "bpmn:Association")
          ? p.push(function() {
              v(e, t);
            })
          : v(e, t);
      });
    }
    function b(e, t) {
      e && (P(e.dataInputs, c(n, t)), P(e.dataOutputs, c(g, t)));
    }
    function E(e, t) {
      S(e, t), x(e.artifacts, t);
    }
    function w(e, t) {
      r(e, t);
    }
    function _(t, n) {
      p.push(function() {
        var e = r(t, n);
        t.childLaneSet && A(t.childLaneSet, e || n),
          (function(n) {
            P(n.flowNodeRef, function(e) {
              var t = e.get("lanes");
              t && t.push(n);
            });
          })(t);
      });
    }
    function A(e, t) {
      P(e.lanes, c(_, t));
    }
    function S(e, t) {
      !(function(e, t) {
        P(e, function(e) {
          zn(e, "bpmn:SequenceFlow")
            ? p.push(function() {
                !(function(e, t) {
                  r(e, t);
                })(e, t);
              })
            : zn(e, "bpmn:BoundaryEvent")
            ? p.unshift(function() {
                !(function(e, t) {
                  r(e, t);
                })(e, t);
              })
            : zn(e, "bpmn:FlowNode")
            ? (function(e, t) {
                var n = r(e, t);
                zn(e, "bpmn:SubProcess") && E(e, n || t),
                  zn(e, "bpmn:Activity") && b(e.ioSpecification, t),
                  p.push(function() {
                    P(e.dataInputAssociations, c(a, t)),
                      P(e.dataOutputAssociations, c(a, t));
                  });
              })(e, t)
            : zn(e, "bpmn:DataObject") ||
              (zn(e, "bpmn:DataStoreReference")
                ? w(e, t)
                : zn(e, "bpmn:DataObjectReference")
                ? w(e, t)
                : u(
                    s(
                      "unrecognized flowElement {element} in context {context}",
                      {
                        element: Vn(e),
                        context: t ? Vn(t.businessObject) : "null"
                      }
                    ),
                    { element: e, context: t }
                  ));
        });
      })(e.flowElements, t),
        e.laneSets &&
          (function(e, t) {
            P(e, c(A, t));
          })(e.laneSets, t);
    }
    function R(e, t) {
      var n = r(e, t),
        i = e.processRef;
      i && d(i, n || t);
    }
    return {
      handleDeferred: f,
      handleDefinitions: function(e, t) {
        var n = e.diagrams;
        if (t && -1 === n.indexOf(t))
          throw new Error(s("diagram not part of bpmn:Definitions"));
        if ((!t && n && n.length && (t = n[0]), !t))
          throw new Error(s("no diagram to display"));
        m(t);
        var i = t.plane;
        if (!i)
          throw new Error(s("no plane for {element}", { element: Vn(t) }));
        var r = i.bpmnElement;
        if (!r) {
          if (
            !(r = (function(e) {
              return C(e.rootElements, function(e) {
                return zn(e, "bpmn:Process") || zn(e, "bpmn:Collaboration");
              });
            })(e))
          )
            throw new Error(s("no process or collaboration to display"));
          u(
            s("correcting missing bpmnElement on {plane} to {rootElement}", {
              plane: Vn(i),
              rootElement: Vn(r)
            })
          ),
            (i.bpmnElement = r),
            h(i);
        }
        var a = (function(e, t) {
          return o.root(e, t);
        })(r, i);
        if (zn(r, "bpmn:Process")) d(r, a);
        else {
          if (!zn(r, "bpmn:Collaboration"))
            throw new Error(
              s("unsupported bpmnElement for {plane}: {rootElement}", {
                plane: Vn(i),
                rootElement: Vn(r)
              })
            );
          !(function(e) {
            P(e.participants, c(R)),
              x(e.artifacts),
              p.push(function() {
                !(function(e, t) {
                  P(e, c(y, t));
                })(e.messageFlows);
              });
          })(r),
            (function(e, t) {
              M(e, function(e) {
                return (
                  !(function(e) {
                    return l[e.id];
                  })(e) &&
                  zn(e, "bpmn:Process") &&
                  e.laneSets
                );
              }).forEach(c(d, t));
            })(e.rootElements, a);
        }
        f();
      },
      handleSubProcess: E,
      registerDi: h
    };
  }
  function $n(e, t) {
    var n = Kn(e);
    return n && "function" == typeof n.$instanceOf && n.$instanceOf(t);
  }
  function Kn(e) {
    return (e && e.businessObject) || e;
  }
  function Hn(e) {
    return (
      !$n(e, "bpmn:CallActivity") &&
      ($n(e, "bpmn:SubProcess")
        ? !!Kn(e).di.isExpanded
        : !$n(e, "bpmn:Participant") || !!Kn(e).processRef)
    );
  }
  function Un(t, n, i) {
    return (function(e, t) {
      return !!C(e, t);
    })(t.eventDefinitions, function(e) {
      return (
        e.$type === n &&
        (function(n, e) {
          return r(e, function(e, t) {
            return n[t] == e;
          });
        })(t, i)
      );
    });
  }
  function qn(e) {
    return e.businessObject.di;
  }
  function Yn(e) {
    return e.businessObject;
  }
  function Xn(e, t) {
    return qn(e).get("bioc:fill") || t || "white";
  }
  function Zn(e, t) {
    return qn(e).get("bioc:stroke") || t || "black";
  }
  var Jn = e(function(e) {
    var l = (e.exports = function(e, t) {
      if ((t || (t = 16), void 0 === e && (e = 128), e <= 0)) return "0";
      for (
        var n = Math.log(Math.pow(2, e)) / Math.log(t), i = 2;
        n === 1 / 0;
        i *= 2
      )
        n = (Math.log(Math.pow(2, e / i)) / Math.log(t)) * i;
      var r = n - Math.floor(n),
        a = "";
      for (i = 0; i < Math.floor(n); i++) {
        a = Math.floor(Math.random() * t).toString(t) + a;
      }
      if (r) {
        var o = Math.pow(t, r);
        a = Math.floor(Math.random() * o).toString(t) + a;
      }
      var s = parseInt(a, t);
      return s !== 1 / 0 && s >= Math.pow(2, e) ? l(e, t) : a;
    });
    l.rack = function(i, r, a) {
      function n(e) {
        var t = 0;
        do {
          if (10 < t++) {
            if (!a) throw new Error("too many ID collisions, use more bits");
            i += a;
          }
          var n = l(i, r);
        } while (Object.hasOwnProperty.call(o, n));
        return (o[n] = e), n;
      }
      var o = (n.hats = {});
      return (
        (n.get = function(e) {
          return n.hats[e];
        }),
        (n.set = function(e, t) {
          return (n.hats[e] = t), n;
        }),
        (n.bits = i || 128),
        (n.base = r || 16),
        n
      );
    };
  });
  function Qn(e) {
    if (!(this instanceof Qn)) return new Qn(e);
    (e = e || [128, 36, 1]),
      (this._seed = e.length ? Jn.rack(e[0], e[1], e[2]) : e);
  }
  var ei = Qn;
  (Qn.prototype.next = function(e) {
    return this._seed(e || !0);
  }),
    (Qn.prototype.nextPrefixed = function(e, t) {
      for (var n; (n = e + this.next(!0)), this.assigned(n); );
      return this.claim(n, t), n;
    }),
    (Qn.prototype.claim = function(e, t) {
      this._seed.set(e, t || !0);
    }),
    (Qn.prototype.assigned = function(e) {
      return this._seed.get(e) || !1;
    }),
    (Qn.prototype.unclaim = function(e) {
      delete this._seed.hats[e];
    }),
    (Qn.prototype.clear = function() {
      var e,
        t = this._seed.hats;
      for (e in t) this.unclaim(e);
    });
  var ti = new ei();
  function ni(e, t, r, c, s, a, n) {
    De.call(this, t, n);
    var u = e && e.defaultFillColor,
      h = e && e.defaultStrokeColor,
      o = ti.next(),
      l = {},
      p = r.computeStyle;
    function m(e, t) {
      var n = T(
          {
            fill: "black",
            strokeWidth: 1,
            strokeLinecap: "round",
            strokeDasharray: "none"
          },
          t.attrs
        ),
        i = t.ref || { x: 0, y: 0 },
        r = t.scale || 1;
      "none" === n.strokeDasharray && (n.strokeDasharray = [1e4, 1]);
      var a = pe("marker");
      J(t.element, n),
        q(a, t.element),
        J(a, {
          id: e,
          viewBox: "0 0 20 20",
          refX: i.x,
          refY: i.y,
          markerWidth: 20 * r,
          markerHeight: 20 * r,
          orient: "auto"
        });
      var o = K("defs", s._svg);
      o || ((o = pe("defs")), q(s._svg, o)), q(o, a), (l[e] = a);
    }
    function f(e) {
      return e.replace(/[()\s,#]+/g, "_");
    }
    function d(e, t, n) {
      var i = e + "-" + f(t) + "-" + f(n) + "-" + o;
      return (
        l[i] ||
          (function(e, t, n, i) {
            if ("sequenceflow-end" === t) {
              var r = pe("path");
              J(r, { d: "M 1 5 L 11 10 L 1 15 Z" }),
                m(e, {
                  element: r,
                  ref: { x: 11, y: 10 },
                  scale: 0.5,
                  attrs: { fill: i, stroke: i }
                });
            }
            if ("messageflow-start" === t) {
              var a = pe("circle");
              J(a, { cx: 6, cy: 6, r: 3.5 }),
                m(e, {
                  element: a,
                  attrs: { fill: n, stroke: i },
                  ref: { x: 6, y: 6 }
                });
            }
            if ("messageflow-end" === t) {
              var o = pe("path");
              J(o, { d: "m 1 5 l 0 -3 l 7 3 l -7 3 z" }),
                m(e, {
                  element: o,
                  attrs: { fill: n, stroke: i, strokeLinecap: "butt" },
                  ref: { x: 8.5, y: 5 }
                });
            }
            if ("association-start" === t) {
              var s = pe("path");
              J(s, { d: "M 11 5 L 1 10 L 11 15" }),
                m(e, {
                  element: s,
                  attrs: { fill: "none", stroke: i, strokeWidth: 1.5 },
                  ref: { x: 1, y: 10 },
                  scale: 0.5
                });
            }
            if ("association-end" === t) {
              var l = pe("path");
              J(l, { d: "M 1 5 L 11 10 L 1 15" }),
                m(e, {
                  element: l,
                  attrs: { fill: "none", stroke: i, strokeWidth: 1.5 },
                  ref: { x: 12, y: 10 },
                  scale: 0.5
                });
            }
            if ("conditional-flow-marker" === t) {
              var p = pe("path");
              J(p, { d: "M 0 10 L 8 6 L 16 10 L 8 14 Z" }),
                m(e, {
                  element: p,
                  attrs: { fill: n, stroke: i },
                  ref: { x: -1, y: 10 },
                  scale: 0.5
                });
            }
            if ("conditional-default-flow-marker" === t) {
              var c = pe("path");
              J(c, { d: "M 6 4 L 10 16" }),
                m(e, {
                  element: c,
                  attrs: { stroke: i },
                  ref: { x: 0, y: 10 },
                  scale: 0.5
                });
            }
          })(i, e, t, n),
        "url(#" + i + ")"
      );
    }
    function y(e, t, n, i, r) {
      k(i) && ((r = i), (i = 0)),
        (i = i || 0),
        "none" ===
          (r = p(r, { stroke: "black", strokeWidth: 2, fill: "white" })).fill &&
          delete r.fillOpacity;
      var a = t / 2,
        o = n / 2,
        s = pe("circle");
      return (
        J(s, { cx: a, cy: o, r: Math.round((t + n) / 4 - i) }),
        J(s, r),
        q(e, s),
        s
      );
    }
    function g(e, t, n, i, r, a) {
      k(r) && ((a = r), (r = 0)),
        (r = r || 0),
        (a = p(a, { stroke: "black", strokeWidth: 2, fill: "white" }));
      var o = pe("rect");
      return (
        J(o, { x: r, y: r, width: t - 2 * r, height: n - 2 * r, rx: i, ry: i }),
        J(o, a),
        q(e, o),
        o
      );
    }
    function v(e, t, n) {
      var i = Le(
        t,
        (n = p(n, ["no-fill"], {
          stroke: "black",
          strokeWidth: 2,
          fill: "none"
        }))
      );
      return q(e, i), i;
    }
    function x(e, t, n) {
      n = p(n, ["no-fill"], { strokeWidth: 2, stroke: "black" });
      var i = pe("path");
      return J(i, { d: t }), J(i, n), q(e, i), i;
    }
    function i(e, t, n, i) {
      return x(t, n, T({ "data-marker": e }, i));
    }
    function b(n) {
      return function(e, t) {
        return C[n](e, t);
      };
    }
    function E(e) {
      return C[e];
    }
    function w(e, t) {
      var n = Yn(e),
        i = (function(e) {
          return (
            "bpmn:IntermediateThrowEvent" === e.$type ||
            "bpmn:EndEvent" === e.$type
          );
        })(n);
      return Un(n, "bpmn:MessageEventDefinition")
        ? E("bpmn:MessageEventDefinition")(t, e, i)
        : Un(n, "bpmn:TimerEventDefinition")
        ? E("bpmn:TimerEventDefinition")(t, e, i)
        : Un(n, "bpmn:ConditionalEventDefinition")
        ? E("bpmn:ConditionalEventDefinition")(t, e)
        : Un(n, "bpmn:SignalEventDefinition")
        ? E("bpmn:SignalEventDefinition")(t, e, i)
        : Un(n, "bpmn:CancelEventDefinition") &&
          Un(n, "bpmn:TerminateEventDefinition", { parallelMultiple: !1 })
        ? E("bpmn:MultipleEventDefinition")(t, e, i)
        : Un(n, "bpmn:CancelEventDefinition") &&
          Un(n, "bpmn:TerminateEventDefinition", { parallelMultiple: !0 })
        ? E("bpmn:ParallelMultipleEventDefinition")(t, e, i)
        : Un(n, "bpmn:EscalationEventDefinition")
        ? E("bpmn:EscalationEventDefinition")(t, e, i)
        : Un(n, "bpmn:LinkEventDefinition")
        ? E("bpmn:LinkEventDefinition")(t, e, i)
        : Un(n, "bpmn:ErrorEventDefinition")
        ? E("bpmn:ErrorEventDefinition")(t, e, i)
        : Un(n, "bpmn:CancelEventDefinition")
        ? E("bpmn:CancelEventDefinition")(t, e, i)
        : Un(n, "bpmn:CompensateEventDefinition")
        ? E("bpmn:CompensateEventDefinition")(t, e, i)
        : Un(n, "bpmn:TerminateEventDefinition")
        ? E("bpmn:TerminateEventDefinition")(t, e, i)
        : null;
    }
    function _(e, t, n) {
      n = T({ size: { width: 100 } }, n);
      var i = a.createText(t || "", n);
      return ie(i).add("djs-label"), q(e, i), i;
    }
    function A(e, t, n) {
      return _(e, Yn(t).name, {
        box: t,
        align: n,
        padding: 5,
        style: { fill: Zn(t, h) }
      });
    }
    function S(e, t, n) {
      !(function(e, t, n, i, r) {
        var a = he();
        a.setTranslate(t, n);
        var o = he();
        o.setRotate(i, 0, 0);
        var s = he();
        s.setScale(r || 1, r || 1), be(e, [a, o, s]);
      })(
        _(e, t, {
          box: { height: 30, width: n.height },
          align: "center-middle",
          style: { fill: Zn(n, h) }
        }),
        0,
        -(-1 * n.height),
        270
      );
    }
    function R(e) {
      for (
        var t = e.waypoints, n = "m  " + t[0].x + "," + t[0].y, i = 1;
        i < t.length;
        i++
      )
        n += "L" + t[i].x + "," + t[i].y + " ";
      return n;
    }
    var C = (this.handlers = {
      "bpmn:Event": function(e, t, n) {
        return (
          "fillOpacity" in n || (n.fillOpacity = 0.95),
          y(e, t.width, t.height, n)
        );
      },
      "bpmn:StartEvent": function(e, t) {
        var n = { fill: Xn(t, u), stroke: Zn(t, h) };
        Yn(t).isInterrupting ||
          (n = {
            strokeDasharray: "6",
            strokeLinecap: "round",
            fill: Xn(t, u),
            stroke: Zn(t, h)
          });
        var i = E("bpmn:Event")(e, t, n);
        return w(t, e), i;
      },
      "bpmn:MessageEventDefinition": function(e, t, n) {
        return x(
          e,
          c.getScaledPath("EVENT_MESSAGE", {
            xScaleFactor: 0.9,
            yScaleFactor: 0.9,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.235, my: 0.315 }
          }),
          {
            strokeWidth: 1,
            fill: n ? Zn(t, h) : Xn(t, u),
            stroke: n ? Xn(t, u) : Zn(t, h)
          }
        );
      },
      "bpmn:TimerEventDefinition": function(e, t) {
        var n = y(e, t.width, t.height, 0.2 * t.height, {
          strokeWidth: 2,
          fill: Xn(t, u),
          stroke: Zn(t, h)
        });
        x(
          e,
          c.getScaledPath("EVENT_TIMER_WH", {
            xScaleFactor: 0.75,
            yScaleFactor: 0.75,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.5, my: 0.5 }
          }),
          { strokeWidth: 2, strokeLinecap: "square", stroke: Zn(t, h) }
        );
        for (var i = 0; i < 12; i++) {
          var r = c.getScaledPath("EVENT_TIMER_LINE", {
              xScaleFactor: 0.75,
              yScaleFactor: 0.75,
              containerWidth: t.width,
              containerHeight: t.height,
              position: { mx: 0.5, my: 0.5 }
            }),
            a = t.width / 2;
          x(e, r, {
            strokeWidth: 1,
            strokeLinecap: "square",
            transform: "rotate(" + 30 * i + "," + t.height / 2 + "," + a + ")",
            stroke: Zn(t, h)
          });
        }
        return n;
      },
      "bpmn:EscalationEventDefinition": function(e, t, n) {
        return x(
          e,
          c.getScaledPath("EVENT_ESCALATION", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.5, my: 0.2 }
          }),
          { strokeWidth: 1, fill: n ? Zn(t, h) : "none", stroke: Zn(t, h) }
        );
      },
      "bpmn:ConditionalEventDefinition": function(e, t) {
        return x(
          e,
          c.getScaledPath("EVENT_CONDITIONAL", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.5, my: 0.222 }
          }),
          { strokeWidth: 1, stroke: Zn(t, h) }
        );
      },
      "bpmn:LinkEventDefinition": function(e, t, n) {
        return x(
          e,
          c.getScaledPath("EVENT_LINK", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.57, my: 0.263 }
          }),
          { strokeWidth: 1, fill: n ? Zn(t, h) : "none", stroke: Zn(t, h) }
        );
      },
      "bpmn:ErrorEventDefinition": function(e, t, n) {
        return x(
          e,
          c.getScaledPath("EVENT_ERROR", {
            xScaleFactor: 1.1,
            yScaleFactor: 1.1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.2, my: 0.722 }
          }),
          { strokeWidth: 1, fill: n ? Zn(t, h) : "none", stroke: Zn(t, h) }
        );
      },
      "bpmn:CancelEventDefinition": function(e, t, n) {
        var i = x(
          e,
          c.getScaledPath("EVENT_CANCEL_45", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.638, my: -0.055 }
          }),
          { strokeWidth: 1, fill: n ? Zn(t, h) : "none", stroke: Zn(t, h) }
        );
        return (
          (function(e, t) {
            var n = he();
            n.setRotate(t, 0, 0), be(e, n);
          })(i, 45),
          i
        );
      },
      "bpmn:CompensateEventDefinition": function(e, t, n) {
        return x(
          e,
          c.getScaledPath("EVENT_COMPENSATION", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.22, my: 0.5 }
          }),
          { strokeWidth: 1, fill: n ? Zn(t, h) : "none", stroke: Zn(t, h) }
        );
      },
      "bpmn:SignalEventDefinition": function(e, t, n) {
        return x(
          e,
          c.getScaledPath("EVENT_SIGNAL", {
            xScaleFactor: 0.9,
            yScaleFactor: 0.9,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.5, my: 0.2 }
          }),
          { strokeWidth: 1, fill: n ? Zn(t, h) : "none", stroke: Zn(t, h) }
        );
      },
      "bpmn:MultipleEventDefinition": function(e, t, n) {
        return x(
          e,
          c.getScaledPath("EVENT_MULTIPLE", {
            xScaleFactor: 1.1,
            yScaleFactor: 1.1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.222, my: 0.36 }
          }),
          { strokeWidth: 1, fill: n ? Zn(t, h) : "none" }
        );
      },
      "bpmn:ParallelMultipleEventDefinition": function(e, t) {
        return x(
          e,
          c.getScaledPath("EVENT_PARALLEL_MULTIPLE", {
            xScaleFactor: 1.2,
            yScaleFactor: 1.2,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.458, my: 0.194 }
          }),
          { strokeWidth: 1, fill: Zn(t, h), stroke: Zn(t, h) }
        );
      },
      "bpmn:EndEvent": function(e, t) {
        var n = E("bpmn:Event")(e, t, {
          strokeWidth: 4,
          fill: Xn(t, u),
          stroke: Zn(t, h)
        });
        return w(t, e), n;
      },
      "bpmn:TerminateEventDefinition": function(e, t) {
        return y(e, t.width, t.height, 8, {
          strokeWidth: 4,
          fill: Zn(t, h),
          stroke: Zn(t, h)
        });
      },
      "bpmn:IntermediateEvent": function(e, t) {
        var n = E("bpmn:Event")(e, t, {
          strokeWidth: 1,
          fill: Xn(t, u),
          stroke: Zn(t, h)
        });
        return (
          y(e, t.width, t.height, 3, {
            strokeWidth: 1,
            fill: Xn(t, "none"),
            stroke: Zn(t, h)
          }),
          w(t, e),
          n
        );
      },
      "bpmn:IntermediateCatchEvent": b("bpmn:IntermediateEvent"),
      "bpmn:IntermediateThrowEvent": b("bpmn:IntermediateEvent"),
      "bpmn:Activity": function(e, t, n) {
        return (
          "fillOpacity" in (n = n || {}) || (n.fillOpacity = 0.95),
          g(e, t.width, t.height, 10, n)
        );
      },
      "bpmn:Task": function(e, t) {
        var n = { fill: Xn(t, u), stroke: Zn(t, h) },
          i = E("bpmn:Activity")(e, t, n);
        return A(e, t, "center-middle"), M(e, t), i;
      },
      "bpmn:ServiceTask": function(e, t) {
        var n = E("bpmn:Task")(e, t);
        return (
          x(
            e,
            c.getScaledPath("TASK_TYPE_SERVICE", { abspos: { x: 12, y: 18 } }),
            { strokeWidth: 1, fill: Xn(t, u), stroke: Zn(t, h) }
          ),
          x(
            e,
            c.getScaledPath("TASK_TYPE_SERVICE_FILL", {
              abspos: { x: 17.2, y: 18 }
            }),
            { strokeWidth: 0, fill: Xn(t, u) }
          ),
          x(
            e,
            c.getScaledPath("TASK_TYPE_SERVICE", { abspos: { x: 17, y: 22 } }),
            { strokeWidth: 1, fill: Xn(t, u), stroke: Zn(t, h) }
          ),
          n
        );
      },
      "bpmn:UserTask": function(e, t) {
        var n = E("bpmn:Task")(e, t);
        return (
          x(
            e,
            c.getScaledPath("TASK_TYPE_USER_1", { abspos: { x: 15, y: 12 } }),
            { strokeWidth: 0.5, fill: Xn(t, u), stroke: Zn(t, h) }
          ),
          x(
            e,
            c.getScaledPath("TASK_TYPE_USER_2", { abspos: { x: 15, y: 12 } }),
            { strokeWidth: 0.5, fill: Xn(t, u), stroke: Zn(t, h) }
          ),
          x(
            e,
            c.getScaledPath("TASK_TYPE_USER_3", { abspos: { x: 15, y: 12 } }),
            { strokeWidth: 0.5, fill: Zn(t, h), stroke: Zn(t, h) }
          ),
          n
        );
      },
      "bpmn:ManualTask": function(e, t) {
        var n = E("bpmn:Task")(e, t);
        return (
          x(
            e,
            c.getScaledPath("TASK_TYPE_MANUAL", { abspos: { x: 17, y: 15 } }),
            { strokeWidth: 0.5, fill: Xn(t, u), stroke: Zn(t, h) }
          ),
          n
        );
      },
      "bpmn:SendTask": function(e, t) {
        var n = E("bpmn:Task")(e, t);
        return (
          x(
            e,
            c.getScaledPath("TASK_TYPE_SEND", {
              xScaleFactor: 1,
              yScaleFactor: 1,
              containerWidth: 21,
              containerHeight: 14,
              position: { mx: 0.285, my: 0.357 }
            }),
            { strokeWidth: 1, fill: Zn(t, h), stroke: Xn(t, u) }
          ),
          n
        );
      },
      "bpmn:ReceiveTask": function(e, t) {
        var n = Yn(t),
          i = E("bpmn:Task")(e, t);
        return (
          x(
            e,
            n.instantiate
              ? (y(e, 28, 28, 4.4, { strokeWidth: 1 }),
                c.getScaledPath("TASK_TYPE_INSTANTIATING_SEND", {
                  abspos: { x: 7.77, y: 9.52 }
                }))
              : c.getScaledPath("TASK_TYPE_SEND", {
                  xScaleFactor: 0.9,
                  yScaleFactor: 0.9,
                  containerWidth: 21,
                  containerHeight: 14,
                  position: { mx: 0.3, my: 0.4 }
                }),
            { strokeWidth: 1, fill: Xn(t, u), stroke: Zn(t, h) }
          ),
          i
        );
      },
      "bpmn:ScriptTask": function(e, t) {
        var n = E("bpmn:Task")(e, t);
        return (
          x(
            e,
            c.getScaledPath("TASK_TYPE_SCRIPT", { abspos: { x: 15, y: 20 } }),
            { strokeWidth: 1, stroke: Zn(t, h) }
          ),
          n
        );
      },
      "bpmn:BusinessRuleTask": function(e, t) {
        var n = E("bpmn:Task")(e, t);
        return (
          J(
            x(
              e,
              c.getScaledPath("TASK_TYPE_BUSINESS_RULE_HEADER", {
                abspos: { x: 8, y: 8 }
              })
            ),
            { strokeWidth: 1, fill: Xn(t, "#aaaaaa"), stroke: Zn(t, h) }
          ),
          J(
            x(
              e,
              c.getScaledPath("TASK_TYPE_BUSINESS_RULE_MAIN", {
                abspos: { x: 8, y: 8 }
              })
            ),
            { strokeWidth: 1, stroke: Zn(t, h) }
          ),
          n
        );
      },
      "bpmn:SubProcess": function(e, t, n) {
        n = T({ fill: Xn(t, u), stroke: Zn(t, h) }, n);
        var i = E("bpmn:Activity")(e, t, n),
          r = Hn(t);
        return (
          (function(e) {
            return e && !!Kn(e).triggeredByEvent;
          })(t) && J(i, { strokeDasharray: "1,2" }),
          A(e, t, r ? "center-top" : "center-middle"),
          r ? M(e, t) : M(e, t, ["SubProcessMarker"]),
          i
        );
      },
      "bpmn:AdHocSubProcess": function(e, t) {
        return E("bpmn:SubProcess")(e, t);
      },
      "bpmn:Transaction": function(e, t) {
        var n = E("bpmn:SubProcess")(e, t),
          i = r.style(["no-fill", "no-events"], { stroke: Zn(t, h) });
        return g(e, t.width, t.height, 8, 3, i), n;
      },
      "bpmn:CallActivity": function(e, t) {
        return E("bpmn:SubProcess")(e, t, { strokeWidth: 5 });
      },
      "bpmn:Participant": function(e, t) {
        var n = { fillOpacity: 0.95, fill: Xn(t, u), stroke: Zn(t, h) },
          i = E("bpmn:Lane")(e, t, n);
        Hn(t)
          ? (v(e, [{ x: 30, y: 0 }, { x: 30, y: t.height }], {
              stroke: Zn(t, h)
            }),
            S(e, Yn(t).name, t))
          : _(e, Yn(t).name, {
              box: t,
              align: "center-middle",
              style: { fill: Zn(t, h) }
            });
        return (
          !!Yn(t).participantMultiplicity &&
            E("ParticipantMultiplicityMarker")(e, t),
          i
        );
      },
      "bpmn:Lane": function(e, t, n) {
        var i = g(
            e,
            t.width,
            t.height,
            0,
            T({ fill: Xn(t, u), fillOpacity: 0.35, stroke: Zn(t, h) }, n)
          ),
          r = Yn(t);
        "bpmn:Lane" === r.$type && S(e, r.name, t);
        return i;
      },
      "bpmn:InclusiveGateway": function(e, t) {
        var n = E("bpmn:Gateway")(e, t);
        return (
          y(e, t.width, t.height, 0.24 * t.height, {
            strokeWidth: 2.5,
            fill: Xn(t, u),
            stroke: Zn(t, h)
          }),
          n
        );
      },
      "bpmn:ExclusiveGateway": function(e, t) {
        var n = E("bpmn:Gateway")(e, t),
          i = c.getScaledPath("GATEWAY_EXCLUSIVE", {
            xScaleFactor: 0.4,
            yScaleFactor: 0.4,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.32, my: 0.3 }
          });
        return (
          qn(t).isMarkerVisible &&
            x(e, i, { strokeWidth: 1, fill: Zn(t, h), stroke: Zn(t, h) }),
          n
        );
      },
      "bpmn:ComplexGateway": function(e, t) {
        var n = E("bpmn:Gateway")(e, t);
        return (
          x(
            e,
            c.getScaledPath("GATEWAY_COMPLEX", {
              xScaleFactor: 0.5,
              yScaleFactor: 0.5,
              containerWidth: t.width,
              containerHeight: t.height,
              position: { mx: 0.46, my: 0.26 }
            }),
            { strokeWidth: 1, fill: Zn(t, h), stroke: Zn(t, h) }
          ),
          n
        );
      },
      "bpmn:ParallelGateway": function(e, t) {
        var n = E("bpmn:Gateway")(e, t);
        return (
          x(
            e,
            c.getScaledPath("GATEWAY_PARALLEL", {
              xScaleFactor: 0.6,
              yScaleFactor: 0.6,
              containerWidth: t.width,
              containerHeight: t.height,
              position: { mx: 0.46, my: 0.2 }
            }),
            { strokeWidth: 1, fill: Zn(t, h), stroke: Zn(t, h) }
          ),
          n
        );
      },
      "bpmn:EventBasedGateway": function(e, t) {
        var n = Yn(t),
          i = E("bpmn:Gateway")(e, t);
        y(e, t.width, t.height, 0.2 * t.height, {
          strokeWidth: 1,
          fill: "none",
          stroke: Zn(t, h)
        });
        var r,
          a,
          o = n.eventGatewayType,
          s = !!n.instantiate;
        if ("Parallel" === o) {
          var l = c.getScaledPath("GATEWAY_PARALLEL", {
            xScaleFactor: 0.4,
            yScaleFactor: 0.4,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.474, my: 0.296 }
          });
          J(x(e, l), { strokeWidth: 1, fill: "none" });
        } else if ("Exclusive" === o) {
          if (!s)
            J(y(e, t.width, t.height, 0.26 * t.height), {
              strokeWidth: 1,
              fill: "none",
              stroke: Zn(t, h)
            });
          (r = c.getScaledPath("GATEWAY_EVENT_BASED", {
            xScaleFactor: 0.18,
            yScaleFactor: 0.18,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.36, my: 0.44 }
          })),
            (a = { strokeWidth: 2, fill: Xn(t, "none"), stroke: Zn(t, h) }),
            x(e, r, a);
        }
        return i;
      },
      "bpmn:Gateway": function(e, t) {
        var n = { fill: Xn(t, u), fillOpacity: 0.95, stroke: Zn(t, h) };
        return (function(e, t, n, i) {
          var r = t / 2,
            a = n / 2,
            o = [{ x: r, y: 0 }, { x: t, y: a }, { x: r, y: n }, { x: 0, y: a }]
              .map(function(e) {
                return e.x + "," + e.y;
              })
              .join(" ");
          i = p(i, { stroke: "black", strokeWidth: 2, fill: "white" });
          var s = pe("polygon");
          return J(s, { points: o }), J(s, i), q(e, s), s;
        })(e, t.width, t.height, n);
      },
      "bpmn:SequenceFlow": function(e, t) {
        var n,
          i = R(t),
          r = Xn(t, u),
          a = Zn(t, h),
          o = x(e, i, {
            strokeLinejoin: "round",
            markerEnd: d("sequenceflow-end", r, a),
            stroke: Zn(t, h)
          }),
          s = Yn(t);
        return (
          t.source &&
            ((n = t.source.businessObject),
            s.conditionExpression &&
              n.$instanceOf("bpmn:Activity") &&
              J(o, { markerStart: d("conditional-flow-marker", r, a) }),
            n.default &&
              (n.$instanceOf("bpmn:Gateway") ||
                n.$instanceOf("bpmn:Activity")) &&
              n.default === s &&
              J(o, {
                markerStart: d("conditional-default-flow-marker", r, a)
              })),
          o
        );
      },
      "bpmn:Association": function(e, t, n) {
        var i = Yn(t),
          r = Xn(t, u),
          a = Zn(t, h);
        return (
          (n = T(
            {
              strokeDasharray: "0.5, 5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: Zn(t, h)
            },
            n || {}
          )),
          ("One" !== i.associationDirection &&
            "Both" !== i.associationDirection) ||
            (n.markerEnd = d("association-end", r, a)),
          "Both" === i.associationDirection &&
            (n.markerStart = d("association-start", r, a)),
          v(e, t.waypoints, n)
        );
      },
      "bpmn:DataInputAssociation": function(e, t) {
        var n = Xn(t, u),
          i = Zn(t, h);
        return E("bpmn:Association")(e, t, {
          markerEnd: d("association-end", n, i)
        });
      },
      "bpmn:DataOutputAssociation": function(e, t) {
        var n = Xn(t, u),
          i = Zn(t, h);
        return E("bpmn:Association")(e, t, {
          markerEnd: d("association-end", n, i)
        });
      },
      "bpmn:MessageFlow": function(e, t) {
        var n = Yn(t),
          i = qn(t),
          r = Xn(t, u),
          a = Zn(t, h),
          o = x(e, R(t), {
            markerEnd: d("messageflow-end", r, a),
            markerStart: d("messageflow-start", r, a),
            strokeDasharray: "10, 12",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5px",
            stroke: Zn(t, h)
          });
        if (n.messageRef) {
          var s = o.getPointAtLength(o.getTotalLength() / 2),
            l = c.getScaledPath("MESSAGE_FLOW_MARKER", {
              abspos: { x: s.x, y: s.y }
            }),
            p = { strokeWidth: 1 };
          "initiating" === i.messageVisibleKind
            ? ((p.fill = "white"), (p.stroke = "black"))
            : ((p.fill = "#888"), (p.stroke = "white")),
            x(e, l, p);
        }
        return o;
      },
      "bpmn:DataObject": function(e, t) {
        var n = x(
          e,
          c.getScaledPath("DATA_OBJECT_PATH", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0.474, my: 0.296 }
          }),
          { fill: Xn(t, u), fillOpacity: 0.95, stroke: Zn(t, h) }
        );
        return (
          (function(e) {
            var t = e.dataObjectRef;
            return e.isCollection || (t && t.isCollection);
          })(Yn(t)) &&
            (function(e, t) {
              var n = (t.height - 16) / t.height,
                i = c.getScaledPath("DATA_OBJECT_COLLECTION_PATH", {
                  xScaleFactor: 1,
                  yScaleFactor: 1,
                  containerWidth: t.width,
                  containerHeight: t.height,
                  position: { mx: 0.451, my: n }
                });
              x(e, i, { strokeWidth: 2 });
            })(e, t),
          n
        );
      },
      "bpmn:DataObjectReference": b("bpmn:DataObject"),
      "bpmn:DataInput": function(e, t) {
        var n = c.getRawPath("DATA_ARROW"),
          i = E("bpmn:DataObject")(e, t);
        return x(e, n, { strokeWidth: 1 }), i;
      },
      "bpmn:DataOutput": function(e, t) {
        var n = c.getRawPath("DATA_ARROW"),
          i = E("bpmn:DataObject")(e, t);
        return x(e, n, { strokeWidth: 1, fill: "black" }), i;
      },
      "bpmn:DataStoreReference": function(e, t) {
        return x(
          e,
          c.getScaledPath("DATA_STORE", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: { mx: 0, my: 0.133 }
          }),
          {
            strokeWidth: 2,
            fill: Xn(t, u),
            fillOpacity: 0.95,
            stroke: Zn(t, h)
          }
        );
      },
      "bpmn:BoundaryEvent": function(e, t) {
        var n = Yn(t).cancelActivity,
          i = { strokeWidth: 1, fill: Xn(t, u), stroke: Zn(t, h) };
        n || ((i.strokeDasharray = "6"), (i.strokeLinecap = "round"));
        var r = T({}, i, { fillOpacity: 1 }),
          a = T({}, i, { fill: "none" }),
          o = E("bpmn:Event")(e, t, r);
        return y(e, t.width, t.height, 3, a), w(t, e), o;
      },
      "bpmn:Group": function(e, t) {
        var n = Yn(t),
          i = qn(t),
          r = g(e, t.width, t.height, 10, {
            strokeWidth: 1,
            strokeDasharray: "8,3,1,3",
            fill: "none",
            pointerEvents: "none"
          }),
          a = n.categoryValueRef || {};
        if (a.value) {
          var o = i.label ? i.label.bounds : t;
          _(e, a.value, { box: o, style: { fill: Zn(t, h) } });
        }
        return r;
      },
      label: function(e, t) {
        return (function(e, t) {
          var n = Yn(t),
            i = {
              width: 90,
              height: 30,
              x: t.width / 2 + t.x,
              y: t.height / 2 + t.y
            };
          return _(e, n.name, {
            box: i,
            fitBox: !0,
            style: T({}, a.getExternalStyle(), { fill: Zn(t, h) })
          });
        })(e, t);
      },
      "bpmn:TextAnnotation": function(e, t) {
        var n = g(e, t.width, t.height, 0, 0, { fill: "none", stroke: "none" });
        return (
          x(
            e,
            c.getScaledPath("TEXT_ANNOTATION", {
              xScaleFactor: 1,
              yScaleFactor: 1,
              containerWidth: t.width,
              containerHeight: t.height,
              position: { mx: 0, my: 0 }
            }),
            { stroke: Zn(t, h) }
          ),
          _(e, Yn(t).text || "", {
            box: t,
            align: "left-top",
            padding: 5,
            style: { fill: Zn(t, h) }
          }),
          n
        );
      },
      ParticipantMultiplicityMarker: function(e, t) {
        i(
          "participant-multiplicity",
          e,
          c.getScaledPath("MARKER_PARALLEL", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: {
              mx: t.width / 2 / t.width,
              my: (t.height - 15) / t.height
            }
          }),
          { strokeWidth: 1, fill: Xn(t, u), stroke: Zn(t, h) }
        );
      },
      SubProcessMarker: function(e, t) {
        dt(
          g(e, 14, 14, 0, { strokeWidth: 1, fill: Xn(t, u), stroke: Zn(t, h) }),
          t.width / 2 - 7.5,
          t.height - 20
        ),
          i(
            "sub-process",
            e,
            c.getScaledPath("MARKER_SUB_PROCESS", {
              xScaleFactor: 1.5,
              yScaleFactor: 1.5,
              containerWidth: t.width,
              containerHeight: t.height,
              position: {
                mx: (t.width / 2 - 7.5) / t.width,
                my: (t.height - 20) / t.height
              }
            }),
            { fill: Xn(t, u), stroke: Zn(t, h) }
          );
      },
      ParallelMarker: function(e, t, n) {
        i(
          "parallel",
          e,
          c.getScaledPath("MARKER_PARALLEL", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: {
              mx: (t.width / 2 + n.parallel) / t.width,
              my: (t.height - 20) / t.height
            }
          }),
          { fill: Xn(t, u), stroke: Zn(t, h) }
        );
      },
      SequentialMarker: function(e, t, n) {
        i(
          "sequential",
          e,
          c.getScaledPath("MARKER_SEQUENTIAL", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: {
              mx: (t.width / 2 + n.seq) / t.width,
              my: (t.height - 19) / t.height
            }
          }),
          { fill: Xn(t, u), stroke: Zn(t, h) }
        );
      },
      CompensationMarker: function(e, t, n) {
        i(
          "compensation",
          e,
          c.getScaledPath("MARKER_COMPENSATION", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: {
              mx: (t.width / 2 + n.compensation) / t.width,
              my: (t.height - 13) / t.height
            }
          }),
          { strokeWidth: 1, fill: Xn(t, u), stroke: Zn(t, h) }
        );
      },
      LoopMarker: function(e, t, n) {
        i(
          "loop",
          e,
          c.getScaledPath("MARKER_LOOP", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: {
              mx: (t.width / 2 + n.loop) / t.width,
              my: (t.height - 7) / t.height
            }
          }),
          {
            strokeWidth: 1,
            fill: Xn(t, u),
            stroke: Zn(t, h),
            strokeLinecap: "round",
            strokeMiterlimit: 0.5
          }
        );
      },
      AdhocMarker: function(e, t, n) {
        i(
          "adhoc",
          e,
          c.getScaledPath("MARKER_ADHOC", {
            xScaleFactor: 1,
            yScaleFactor: 1,
            containerWidth: t.width,
            containerHeight: t.height,
            position: {
              mx: (t.width / 2 + n.adhoc) / t.width,
              my: (t.height - 15) / t.height
            }
          }),
          { strokeWidth: 1, fill: Zn(t, h), stroke: Zn(t, h) }
        );
      }
    });
    function M(t, n, e) {
      var i,
        r = Yn(n),
        a = e && -1 !== e.indexOf("SubProcessMarker");
      (i = a
        ? { seq: -21, parallel: -22, compensation: -42, loop: -18, adhoc: 10 }
        : { seq: -3, parallel: -6, compensation: -27, loop: 0, adhoc: 10 }),
        P(e, function(e) {
          E(e)(t, n, i);
        }),
        r.isForCompensation && E("CompensationMarker")(t, n, i),
        "bpmn:AdHocSubProcess" === r.$type && E("AdhocMarker")(t, n, i);
      var o = r.loopCharacteristics,
        s = o && o.isSequential;
      o &&
        (void 0 === s && E("LoopMarker")(t, n, i),
        !1 === s && E("ParallelMarker")(t, n, i),
        !0 === s && E("SequentialMarker")(t, n, i));
    }
    this._drawPath = x;
  }
  t(ni, De),
    (ni.$inject = [
      "config.bpmnRenderer",
      "eventBus",
      "styles",
      "pathMap",
      "canvas",
      "textRenderer"
    ]),
    (ni.prototype.canRender = function(e) {
      return $n(e, "bpmn:BaseElement");
    }),
    (ni.prototype.drawShape = function(e, t) {
      var n = t.type;
      return (0, this.handlers[n])(e, t);
    }),
    (ni.prototype.drawConnection = function(e, t) {
      var n = t.type;
      return (0, this.handlers[n])(e, t);
    }),
    (ni.prototype.getShapePath = function(e) {
      return $n(e, "bpmn:Event")
        ? (function(e) {
            var t = e.x + e.width / 2,
              n = e.y + e.height / 2,
              i = e.width / 2;
            return Oe([
              ["M", t, n],
              ["m", 0, -i],
              ["a", i, i, 0, 1, 1, 0, 2 * i],
              ["a", i, i, 0, 1, 1, 0, -2 * i],
              ["z"]
            ]);
          })(e)
        : $n(e, "bpmn:Activity")
        ? (function(e, t) {
            var n = e.x,
              i = e.y,
              r = e.width,
              a = e.height;
            return Oe([
              ["M", n + t, i],
              ["l", r - 2 * t, 0],
              ["a", t, t, 0, 0, 1, t, t],
              ["l", 0, a - 2 * t],
              ["a", t, t, 0, 0, 1, -t, t],
              ["l", 2 * t - r, 0],
              ["a", t, t, 0, 0, 1, -t, -t],
              ["l", 0, 2 * t - a],
              ["a", t, t, 0, 0, 1, t, -t],
              ["z"]
            ]);
          })(e, 10)
        : $n(e, "bpmn:Gateway")
        ? (function(e) {
            var t = e.width / 2,
              n = e.height / 2;
            return Oe([
              ["M", e.x + t, e.y],
              ["l", t, n],
              ["l", -t, n],
              ["l", -t, -n],
              ["z"]
            ]);
          })(e)
        : (function(e) {
            var t = e.x,
              n = e.y,
              i = e.width;
            return Oe([
              ["M", t, n],
              ["l", i, 0],
              ["l", 0, e.height],
              ["l", -i, 0],
              ["z"]
            ]);
          })(e);
    });
  var ii = 0,
    ri = { width: 150, height: 50 };
  function ai(e, t) {
    var n;
    t.textContent = e;
    try {
      var i,
        r = "" === e;
      return (
        (t.textContent = r ? "dummy" : e),
        (i = { width: (n = t.getBBox()).width + 2 * n.x, height: n.height }),
        r && (i.width = 0),
        i
      );
    } catch (e) {
      return { width: 0, height: 0 };
    }
  }
  function oi(e, t, n) {
    for (var i, r = e.shift(), a = r; ; ) {
      if (
        (((i = ai(a, n)).width = a ? i.width : 0),
        " " === a || "" === a || i.width < Math.round(t) || a.length < 2)
      )
        return si(e, a, r, i);
      a = li(a, i.width, t);
    }
  }
  function si(e, t, n, i) {
    if (t.length < n.length) {
      var r = n.slice(t.length).trim();
      e.unshift(r);
    }
    return { width: i.width, height: i.height, text: t };
  }
  function li(e, t, n) {
    var i = Math.max(e.length * (n / t), 1),
      r = (function(e, t) {
        var n,
          i = e.split(/(\s|-)/g),
          r = [],
          a = 0;
        if (1 < i.length)
          for (; (n = i.shift()); ) {
            if (!(n.length + a < t)) {
              "-" === n && r.pop();
              break;
            }
            r.push(n), (a += n.length);
          }
        return r.join("");
      })(e, i);
    return r || (r = e.slice(0, Math.max(Math.round(i - 1), 1))), r;
  }
  function pi(e) {
    this._config = T(
      {},
      { size: ri, padding: ii, style: {}, align: "center-top" },
      e || {}
    );
  }
  (pi.prototype.createText = function(e, t) {
    return this.layoutText(e, t).element;
  }),
    (pi.prototype.getDimensions = function(e, t) {
      return this.layoutText(e, t).dimensions;
    }),
    (pi.prototype.layoutText = function(e, t) {
      var n = T({}, this._config.size, t.box),
        i = T({}, this._config.style, t.style),
        r = (function(e) {
          var t = e.split("-");
          return { horizontal: t[0] || "center", vertical: t[1] || "top" };
        })(t.align || this._config.align),
        a = (function(e) {
          return k(e)
            ? T({ top: 0, left: 0, right: 0, bottom: 0 }, e)
            : { top: e, left: e, right: e, bottom: e };
        })(void 0 !== t.padding ? t.padding : this._config.padding),
        o = t.fitBox || !1,
        s = (function(e) {
          if ("fontSize" in e && "lineHeight" in e)
            return e.lineHeight * parseInt(e.fontSize, 10);
        })(i),
        l = e.split(/\r?\n/g),
        p = [],
        c = n.width - a.left - a.right,
        u = pe("text");
      for (
        J(u, { x: 0, y: 0 }),
          J(u, i),
          q(
            (function() {
              var e = document.getElementById("helper-svg");
              return (
                e ||
                  (J((e = pe("svg")), {
                    id: "helper-svg",
                    width: 0,
                    height: 0,
                    style: "visibility: hidden; position: fixed"
                  }),
                  document.body.appendChild(e)),
                e
              );
            })(),
            u
          );
        l.length;

      )
        p.push(oi(l, c, u));
      "middle" === r.vertical && (a.top = a.bottom = 0);
      var h =
          y(
            p,
            function(e, t, n) {
              return e + (s || t.height);
            },
            0
          ) +
          a.top +
          a.bottom,
        m = y(
          p,
          function(e, t, n) {
            return t.width > e ? t.width : e;
          },
          0
        ),
        f = a.top;
      "middle" === r.vertical && (f += (n.height - h) / 2),
        (f -= (s || p[0].height) / 4);
      var d = pe("text");
      return (
        J(d, i),
        P(p, function(e) {
          var t;
          switch (((f += s || e.height), r.horizontal)) {
            case "left":
              t = a.left;
              break;
            case "right":
              t = (o ? m : c) - a.right - e.width;
              break;
            default:
              t = Math.max(((o ? m : c) - e.width) / 2 + a.left, 0);
          }
          var n = pe("tspan");
          J(n, { x: t, y: f }), (n.textContent = e.text), q(d, n);
        }),
        ae(u),
        { dimensions: { width: m, height: h }, element: d }
      );
    });
  function ci(e) {
    var i = T(
        {
          fontFamily: "Arial, sans-serif",
          fontSize: 12,
          fontWeight: "normal",
          lineHeight: 1.2
        },
        (e && e.defaultStyle) || {}
      ),
      t = parseInt(i.fontSize, 10) - 1,
      r = T({}, i, { fontSize: t }, (e && e.externalStyle) || {}),
      a = new pi({ style: i });
    (this.getExternalLabelBounds = function(e, t) {
      var n = a.getDimensions(t, {
        box: {
          width: 90,
          height: 30,
          x: e.width / 2 + e.x,
          y: e.height / 2 + e.y
        },
        style: r
      });
      return {
        x: Math.round(e.x + e.width / 2 - n.width / 2),
        y: Math.round(e.y),
        width: Math.ceil(n.width),
        height: Math.ceil(n.height)
      };
    }),
      (this.getTextAnnotationBounds = function(e, t) {
        var n = a.getDimensions(t, {
          box: e,
          style: i,
          align: "left-top",
          padding: 5
        });
        return {
          x: e.x,
          y: e.y,
          width: e.width,
          height: Math.max(30, Math.round(n.height))
        };
      }),
      (this.createText = function(e, t) {
        return a.createText(e, t || {});
      }),
      (this.getDefaultStyle = function() {
        return i;
      }),
      (this.getExternalStyle = function() {
        return r;
      });
  }
  ci.$inject = ["config.textRenderer"];
  var ui = /\{([^}]+)\}/g,
    hi = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g;
  var mi = {
    __init__: ["bpmnRenderer"],
    bpmnRenderer: ["type", ni],
    textRenderer: ["type", ci],
    pathMap: [
      "type",
      function() {
        (this.pathMap = {
          EVENT_MESSAGE: {
            d:
              "m {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}",
            height: 36,
            width: 36,
            heightElements: [6, 14],
            widthElements: [10.5, 21]
          },
          EVENT_SIGNAL: {
            d: "M {mx},{my} l {e.x0},{e.y0} l -{e.x1},0 Z",
            height: 36,
            width: 36,
            heightElements: [18],
            widthElements: [10, 20]
          },
          EVENT_ESCALATION: {
            d:
              "M {mx},{my} l {e.x0},{e.y0} l -{e.x0},-{e.y1} l -{e.x0},{e.y1} Z",
            height: 36,
            width: 36,
            heightElements: [20, 7],
            widthElements: [8]
          },
          EVENT_CONDITIONAL: {
            d:
              "M {e.x0},{e.y0} l {e.x1},0 l 0,{e.y2} l -{e.x1},0 Z M {e.x2},{e.y3} l {e.x0},0 M {e.x2},{e.y4} l {e.x0},0 M {e.x2},{e.y5} l {e.x0},0 M {e.x2},{e.y6} l {e.x0},0 M {e.x2},{e.y7} l {e.x0},0 M {e.x2},{e.y8} l {e.x0},0 ",
            height: 36,
            width: 36,
            heightElements: [8.5, 14.5, 18, 11.5, 14.5, 17.5, 20.5, 23.5, 26.5],
            widthElements: [10.5, 14.5, 12.5]
          },
          EVENT_LINK: {
            d:
              "m {mx},{my} 0,{e.y0} -{e.x1},0 0,{e.y1} {e.x1},0 0,{e.y0} {e.x0},-{e.y2} -{e.x0},-{e.y2} z",
            height: 36,
            width: 36,
            heightElements: [4.4375, 6.75, 7.8125],
            widthElements: [9.84375, 13.5]
          },
          EVENT_ERROR: {
            d:
              "m {mx},{my} {e.x0},-{e.y0} {e.x1},-{e.y1} {e.x2},{e.y2} {e.x3},-{e.y3} -{e.x4},{e.y4} -{e.x5},-{e.y5} z",
            height: 36,
            width: 36,
            heightElements: [0.023, 8.737, 8.151, 16.564, 10.591, 8.714],
            widthElements: [0.085, 6.672, 6.97, 4.273, 5.337, 6.636]
          },
          EVENT_CANCEL_45: {
            d:
              "m {mx},{my} -{e.x1},0 0,{e.x0} {e.x1},0 0,{e.y1} {e.x0},0 0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z",
            height: 36,
            width: 36,
            heightElements: [4.75, 8.5],
            widthElements: [4.75, 8.5]
          },
          EVENT_COMPENSATION: {
            d:
              "m {mx},{my} {e.x0},-{e.y0} 0,{e.y1} z m {e.x1},-{e.y2} {e.x2},-{e.y3} 0,{e.y1} -{e.x2},-{e.y3} z",
            height: 36,
            width: 36,
            heightElements: [6.5, 13, 0.4, 6.1],
            widthElements: [9, 9.3, 8.7]
          },
          EVENT_TIMER_WH: {
            d: "M {mx},{my} l {e.x0},-{e.y0} m -{e.x0},{e.y0} l {e.x1},{e.y1} ",
            height: 36,
            width: 36,
            heightElements: [10, 2],
            widthElements: [3, 7]
          },
          EVENT_TIMER_LINE: {
            d: "M {mx},{my} m {e.x0},{e.y0} l -{e.x1},{e.y1} ",
            height: 36,
            width: 36,
            heightElements: [10, 3],
            widthElements: [0, 0]
          },
          EVENT_MULTIPLE: {
            d:
              "m {mx},{my} {e.x1},-{e.y0} {e.x1},{e.y0} -{e.x0},{e.y1} -{e.x2},0 z",
            height: 36,
            width: 36,
            heightElements: [6.28099, 12.56199],
            widthElements: [3.1405, 9.42149, 12.56198]
          },
          EVENT_PARALLEL_MULTIPLE: {
            d:
              "m {mx},{my} {e.x0},0 0,{e.y1} {e.x1},0 0,{e.y0} -{e.x1},0 0,{e.y1} -{e.x0},0 0,-{e.y1} -{e.x1},0 0,-{e.y0} {e.x1},0 z",
            height: 36,
            width: 36,
            heightElements: [2.56228, 7.68683],
            widthElements: [2.56228, 7.68683]
          },
          GATEWAY_EXCLUSIVE: {
            d:
              "m {mx},{my} {e.x0},{e.y0} {e.x1},{e.y0} {e.x2},0 {e.x4},{e.y2} {e.x4},{e.y1} {e.x2},0 {e.x1},{e.y3} {e.x0},{e.y3} {e.x3},0 {e.x5},{e.y1} {e.x5},{e.y2} {e.x3},0 z",
            height: 17.5,
            width: 17.5,
            heightElements: [8.5, 6.5312, -6.5312, -8.5],
            widthElements: [6.5, -6.5, 3, -3, 5, -5]
          },
          GATEWAY_PARALLEL: {
            d:
              "m {mx},{my} 0,{e.y1} -{e.x1},0 0,{e.y0} {e.x1},0 0,{e.y1} {e.x0},0 0,-{e.y1} {e.x1},0 0,-{e.y0} -{e.x1},0 0,-{e.y1} -{e.x0},0 z",
            height: 30,
            width: 30,
            heightElements: [5, 12.5],
            widthElements: [5, 12.5]
          },
          GATEWAY_EVENT_BASED: {
            d:
              "m {mx},{my} {e.x0},{e.y0} {e.x0},{e.y1} {e.x1},{e.y2} {e.x2},0 z",
            height: 11,
            width: 11,
            heightElements: [-6, 6, 12, -12],
            widthElements: [9, -3, -12]
          },
          GATEWAY_COMPLEX: {
            d:
              "m {mx},{my} 0,{e.y0} -{e.x0},-{e.y1} -{e.x1},{e.y2} {e.x0},{e.y1} -{e.x2},0 0,{e.y3} {e.x2},0  -{e.x0},{e.y1} l {e.x1},{e.y2} {e.x0},-{e.y1} 0,{e.y0} {e.x3},0 0,-{e.y0} {e.x0},{e.y1} {e.x1},-{e.y2} -{e.x0},-{e.y1} {e.x2},0 0,-{e.y3} -{e.x2},0 {e.x0},-{e.y1} -{e.x1},-{e.y2} -{e.x0},{e.y1} 0,-{e.y0} -{e.x3},0 z",
            height: 17.125,
            width: 17.125,
            heightElements: [4.875, 3.4375, 2.125, 3],
            widthElements: [3.4375, 2.125, 4.875, 3]
          },
          DATA_OBJECT_PATH: {
            d:
              "m 0,0 {e.x1},0 {e.x0},{e.y0} 0,{e.y1} -{e.x2},0 0,-{e.y2} {e.x1},0 0,{e.y0} {e.x0},0",
            height: 61,
            width: 51,
            heightElements: [10, 50, 60],
            widthElements: [10, 40, 50, 60]
          },
          DATA_OBJECT_COLLECTION_PATH: {
            d:
              "m {mx}, {my} m  0 15  l 0 -15 m  4 15  l 0 -15 m  4 15  l 0 -15 ",
            height: 61,
            width: 51,
            heightElements: [12],
            widthElements: [1, 6, 12, 15]
          },
          DATA_ARROW: {
            d: "m 5,9 9,0 0,-3 5,5 -5,5 0,-3 -9,0 z",
            height: 61,
            width: 51,
            heightElements: [],
            widthElements: []
          },
          DATA_STORE: {
            d:
              "m  {mx},{my} l  0,{e.y2} c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 l  0,-{e.y2} c -{e.x0},-{e.y1} -{e.x1},-{e.y1} -{e.x2},0c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0 m  -{e.x2},{e.y0}c  {e.x0},{e.y1} {e.x1},{e.y1} {e.x2},0m  -{e.x2},{e.y0}c  {e.x0},{e.y1} {e.x1},{e.y1}  {e.x2},0",
            height: 61,
            width: 61,
            heightElements: [7, 10, 45],
            widthElements: [2, 58, 60]
          },
          TEXT_ANNOTATION: {
            d: "m {mx}, {my} m 10,0 l -10,0 l 0,{e.y0} l 10,0",
            height: 30,
            width: 10,
            heightElements: [30],
            widthElements: [10]
          },
          MARKER_SUB_PROCESS: {
            d: "m{mx},{my} m 7,2 l 0,10 m -5,-5 l 10,0",
            height: 10,
            width: 10,
            heightElements: [],
            widthElements: []
          },
          MARKER_PARALLEL: {
            d: "m{mx},{my} m 3,2 l 0,10 m 3,-10 l 0,10 m 3,-10 l 0,10",
            height: 10,
            width: 10,
            heightElements: [],
            widthElements: []
          },
          MARKER_SEQUENTIAL: {
            d: "m{mx},{my} m 0,3 l 10,0 m -10,3 l 10,0 m -10,3 l 10,0",
            height: 10,
            width: 10,
            heightElements: [],
            widthElements: []
          },
          MARKER_COMPENSATION: {
            d: "m {mx},{my} 7,-5 0,10 z m 7.1,-0.3 6.9,-4.7 0,10 -6.9,-4.7 z",
            height: 10,
            width: 21,
            heightElements: [],
            widthElements: []
          },
          MARKER_LOOP: {
            d:
              "m {mx},{my} c 3.526979,0 6.386161,-2.829858 6.386161,-6.320661 0,-3.490806 -2.859182,-6.320661 -6.386161,-6.320661 -3.526978,0 -6.38616,2.829855 -6.38616,6.320661 0,1.745402 0.714797,3.325567 1.870463,4.469381 0.577834,0.571908 1.265885,1.034728 2.029916,1.35457 l -0.718163,-3.909793 m 0.718163,3.909793 -3.885211,0.802902",
            height: 13.9,
            width: 13.7,
            heightElements: [],
            widthElements: []
          },
          MARKER_ADHOC: {
            d:
              "m {mx},{my} m 0.84461,2.64411 c 1.05533,-1.23780996 2.64337,-2.07882 4.29653,-1.97997996 2.05163,0.0805 3.85579,1.15803 5.76082,1.79107 1.06385,0.34139996 2.24454,0.1438 3.18759,-0.43767 0.61743,-0.33642 1.2775,-0.64078 1.7542,-1.17511 0,0.56023 0,1.12046 0,1.6807 -0.98706,0.96237996 -2.29792,1.62393996 -3.6918,1.66181996 -1.24459,0.0927 -2.46671,-0.2491 -3.59505,-0.74812 -1.35789,-0.55965 -2.75133,-1.33436996 -4.27027,-1.18121996 -1.37741,0.14601 -2.41842,1.13685996 -3.44288,1.96782996 z",
            height: 4,
            width: 15,
            heightElements: [],
            widthElements: []
          },
          TASK_TYPE_SEND: {
            d:
              "m {mx},{my} l 0,{e.y1} l {e.x1},0 l 0,-{e.y1} z l {e.x0},{e.y0} l {e.x0},-{e.y0}",
            height: 14,
            width: 21,
            heightElements: [6, 14],
            widthElements: [10.5, 21]
          },
          TASK_TYPE_SCRIPT: {
            d:
              "m {mx},{my} c 9.966553,-6.27276 -8.000926,-7.91932 2.968968,-14.938 l -8.802728,0 c -10.969894,7.01868 6.997585,8.66524 -2.968967,14.938 z m -7,-12 l 5,0 m -4.5,3 l 4.5,0 m -3,3 l 5,0m -4,3 l 5,0",
            height: 15,
            width: 12.6,
            heightElements: [6, 14],
            widthElements: [10.5, 21]
          },
          TASK_TYPE_USER_1: {
            d:
              "m {mx},{my} c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5"
          },
          TASK_TYPE_USER_2: {
            d:
              "m {mx},{my} m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 "
          },
          TASK_TYPE_USER_3: {
            d:
              "m {mx},{my} m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z"
          },
          TASK_TYPE_MANUAL: {
            d:
              "m {mx},{my} c 0.234,-0.01 5.604,0.008 8.029,0.004 0.808,0 1.271,-0.172 1.417,-0.752 0.227,-0.898 -0.334,-1.314 -1.338,-1.316 -2.467,-0.01 -7.886,-0.004 -8.108,-0.004 -0.014,-0.079 0.016,-0.533 0,-0.61 0.195,-0.042 8.507,0.006 9.616,0.002 0.877,-0.007 1.35,-0.438 1.353,-1.208 0.003,-0.768 -0.479,-1.09 -1.35,-1.091 -2.968,-0.002 -9.619,-0.013 -9.619,-0.013 v -0.591 c 0,0 5.052,-0.016 7.225,-0.016 0.888,-0.002 1.354,-0.416 1.351,-1.193 -0.006,-0.761 -0.492,-1.196 -1.361,-1.196 -3.473,-0.005 -10.86,-0.003 -11.0829995,-0.003 -0.022,-0.047 -0.045,-0.094 -0.069,-0.139 0.3939995,-0.319 2.0409995,-1.626 2.4149995,-2.017 0.469,-0.4870005 0.519,-1.1650005 0.162,-1.6040005 -0.414,-0.511 -0.973,-0.5 -1.48,-0.236 -1.4609995,0.764 -6.5999995,3.6430005 -7.7329995,4.2710005 -0.9,0.499 -1.516,1.253 -1.882,2.19 -0.37000002,0.95 -0.17,2.01 -0.166,2.979 0.004,0.718 -0.27300002,1.345 -0.055,2.063 0.629,2.087 2.425,3.312 4.859,3.318 4.6179995,0.014 9.2379995,-0.139 13.8569995,-0.158 0.755,-0.004 1.171,-0.301 1.182,-1.033 0.012,-0.754 -0.423,-0.969 -1.183,-0.973 -1.778,-0.01 -5.824,-0.004 -6.04,-0.004 10e-4,-0.084 0.003,-0.586 10e-4,-0.67 z"
          },
          TASK_TYPE_INSTANTIATING_SEND: {
            d: "m {mx},{my} l 0,8.4 l 12.6,0 l 0,-8.4 z l 6.3,3.6 l 6.3,-3.6"
          },
          TASK_TYPE_SERVICE: {
            d:
              "m {mx},{my} v -1.71335 c 0.352326,-0.0705 0.703932,-0.17838 1.047628,-0.32133 0.344416,-0.14465 0.665822,-0.32133 0.966377,-0.52145 l 1.19431,1.18005 1.567487,-1.57688 -1.195028,-1.18014 c 0.403376,-0.61394 0.683079,-1.29908 0.825447,-2.01824 l 1.622133,-0.01 v -2.2196 l -1.636514,0.01 c -0.07333,-0.35153 -0.178319,-0.70024 -0.323564,-1.04372 -0.145244,-0.34406 -0.321407,-0.6644 -0.522735,-0.96217 l 1.131035,-1.13631 -1.583305,-1.56293 -1.129598,1.13589 c -0.614052,-0.40108 -1.302883,-0.68093 -2.022633,-0.82247 l 0.0093,-1.61852 h -2.241173 l 0.0042,1.63124 c -0.353763,0.0736 -0.705369,0.17977 -1.049785,0.32371 -0.344415,0.14437 -0.665102,0.32092 -0.9635006,0.52046 l -1.1698628,-1.15823 -1.5667691,1.5792 1.1684265,1.15669 c -0.4026573,0.61283 -0.68308,1.29797 -0.8247287,2.01713 l -1.6588041,0.003 v 2.22174 l 1.6724648,-0.006 c 0.073327,0.35077 0.1797598,0.70243 0.3242851,1.04472 0.1452428,0.34448 0.3214064,0.6644 0.5227339,0.96066 l -1.1993431,1.19723 1.5840256,1.56011 1.1964668,-1.19348 c 0.6140517,0.40346 1.3028827,0.68232 2.0233517,0.82331 l 7.19e-4,1.69892 h 2.226848 z m 0.221462,-3.9957 c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z"
          },
          TASK_TYPE_SERVICE_FILL: {
            d:
              "m {mx},{my} c -1.788948,0.7502 -3.8576,-0.0928 -4.6097055,-1.87438 -0.7521065,-1.78321 0.090598,-3.84627 1.8802645,-4.59604 1.78823,-0.74936 3.856881,0.0929 4.608987,1.87437 0.752106,1.78165 -0.0906,3.84612 -1.879546,4.59605 z"
          },
          TASK_TYPE_BUSINESS_RULE_HEADER: { d: "m {mx},{my} 0,4 20,0 0,-4 z" },
          TASK_TYPE_BUSINESS_RULE_MAIN: {
            d: "m {mx},{my} 0,12 20,0 0,-12 zm 0,8 l 20,0 m -13,-4 l 0,8"
          },
          MESSAGE_FLOW_MARKER: {
            d:
              "m {mx},{my} m -10.5 ,-7 l 0,14 l 21,0 l 0,-14 z l 10.5,6 l 10.5,-6"
          }
        }),
          (this.getRawPath = function(e) {
            return this.pathMap[e].d;
          }),
          (this.getScaledPath = function(e, t) {
            var n,
              i,
              r = this.pathMap[e];
            i = t.abspos
              ? ((n = t.abspos.x), t.abspos.y)
              : ((n = t.containerWidth * t.position.mx),
                t.containerHeight * t.position.my);
            var a = {};
            if (t.position) {
              for (
                var o = (t.containerHeight / r.height) * t.yScaleFactor,
                  s = (t.containerWidth / r.width) * t.xScaleFactor,
                  l = 0;
                l < r.heightElements.length;
                l++
              )
                a["y" + l] = r.heightElements[l] * o;
              for (var p = 0; p < r.widthElements.length; p++)
                a["x" + p] = r.widthElements[p] * s;
            }
            return (function(e, n) {
              return String(e).replace(ui, function(e, t) {
                return (function(e, t, n) {
                  var a = n;
                  return (
                    t.replace(hi, function(e, t, n, i, r) {
                      (t = t || i),
                        a &&
                          (t in a && (a = a[t]),
                          "function" == typeof a && r && (a = a()));
                    }),
                    (a = (null == a || a == n ? e : a) + "")
                  );
                })(e, t, n);
              });
            })(r.d, { mx: n, my: i, e: a });
          });
      }
    ]
  };
  var fi = {
      translate: [
        "value",
        function(e, n) {
          return (
            (n = n || {}),
            e.replace(/{([^}]+)}/g, function(e, t) {
              return n[t] || "{" + t + "}";
            })
          );
        }
      ]
    },
    di = { width: 90, height: 20 },
    yi = 15;
  function gi(e) {
    var t = e.length / 2 - 1,
      n = e[Math.floor(t)],
      i = e[Math.ceil(0.01 + t)],
      r = (function(e) {
        var t = e.length / 2 - 1,
          n = e[Math.floor(t)],
          i = e[Math.ceil(0.01 + t)];
        return { x: n.x + (i.x - n.x) / 2, y: n.y + (i.y - n.y) / 2 };
      })(e),
      a = Math.atan((i.y - n.y) / (i.x - n.x)),
      o = r.x,
      s = r.y;
    return Math.abs(a) < Math.PI / 2 ? (s -= yi) : (o += yi), { x: o, y: s };
  }
  function vi(e, t) {
    var n,
      i,
      r,
      a = e.di.label;
    return (
      a && a.bounds
        ? ((r = a.bounds),
          (i = { width: Math.max(di.width, r.width), height: r.height }),
          (n = { x: r.x + r.width / 2, y: r.y + r.height / 2 }))
        : ((n = (function(e) {
            return e.waypoints
              ? gi(e.waypoints)
              : { x: e.x + e.width / 2, y: e.y + e.height + di.height / 2 };
          })(t)),
          (i = di)),
      T({ x: n.x - i.width / 2, y: n.y - i.height / 2 }, i)
    );
  }
  /**
   * This file contains portions that got extraced from Snap.svg (licensed Apache-2.0).
   *
   * @see https://github.com/adobe-webplatform/Snap.svg/blob/master/src/path.js
   */ Math.PI;
  function xi(e) {
    return (function(e) {
      return { x: Math.round(e.x), y: Math.round(e.y) };
    })({ x: e.x + (e.width || 0) / 2, y: e.y + (e.height || 0) / 2 });
  }
  function bi(e, t) {
    return T({ id: e.id, type: e.$type, businessObject: e }, t);
  }
  function Ei(e, t, n, i) {
    return new Error(
      e(
        "element {element} referenced by {referenced}#{property} not yet drawn",
        { element: Vn(n), referenced: Vn(t), property: i }
      )
    );
  }
  function wi(e, t, n, i, r, a) {
    (this._eventBus = e),
      (this._canvas = t),
      (this._elementFactory = n),
      (this._elementRegistry = i),
      (this._translate = r),
      (this._textRenderer = a);
  }
  (wi.$inject = [
    "eventBus",
    "canvas",
    "elementFactory",
    "elementRegistry",
    "translate",
    "textRenderer"
  ]),
    (wi.prototype.add = function(e, t) {
      var n,
        i,
        r,
        a = e.di,
        o = this._translate;
      if ($n(a, "bpmndi:BPMNPlane"))
        (n = this._elementFactory.createRoot(bi(e))),
          this._canvas.setRootElement(n);
      else if ($n(a, "bpmndi:BPMNShape")) {
        var s = !Hn(e);
        i = t && (t.hidden || t.collapsed);
        var l = e.di.bounds;
        (n = this._elementFactory.createShape(
          bi(e, {
            collapsed: s,
            hidden: i,
            x: Math.round(l.x),
            y: Math.round(l.y),
            width: Math.round(l.width),
            height: Math.round(l.height)
          })
        )),
          $n(e, "bpmn:BoundaryEvent") && this._attachBoundary(e, n),
          $n(e, "bpmn:Lane") && (r = 0),
          $n(e, "bpmn:DataStoreReference") &&
            ((function(e, t) {
              var n = t.x,
                i = t.y;
              return (
                n >= e.x &&
                n <= e.x + e.width &&
                i >= e.y &&
                i <= e.y + e.height
              );
            })(t, xi(l)) ||
              (t = this._canvas.getRootElement())),
          this._canvas.addShape(n, t, r);
      } else {
        if (!$n(a, "bpmndi:BPMNEdge"))
          throw new Error(
            o("unknown di {di} for element {semantic}", {
              di: Vn(a),
              semantic: Vn(e)
            })
          );
        var p = this._getSource(e),
          c = this._getTarget(e);
        (i = t && (t.hidden || t.collapsed)),
          (n = this._elementFactory.createConnection(
            bi(e, {
              hidden: i,
              source: p,
              target: c,
              waypoints: (function(e, t, n) {
                var i = e.di.waypoint;
                return !i || i.length < 2
                  ? [xi(t), xi(n)]
                  : i.map(function(e) {
                      return { x: e.x, y: e.y };
                    });
              })(e, p, c)
            })
          )),
          $n(e, "bpmn:DataAssociation") && (t = null),
          $n(e, "bpmn:SequenceFlow") && (r = 0),
          this._canvas.addConnection(n, t, r);
      }
      return (
        (function(e) {
          return (
            $n(e, "bpmn:Event") ||
            $n(e, "bpmn:Gateway") ||
            $n(e, "bpmn:DataStoreReference") ||
            $n(e, "bpmn:DataObjectReference") ||
            $n(e, "bpmn:DataInput") ||
            $n(e, "bpmn:DataOutput") ||
            $n(e, "bpmn:SequenceFlow") ||
            $n(e, "bpmn:MessageFlow")
          );
        })(e) &&
          e.name &&
          this.addLabel(e, n),
        this._eventBus.fire("bpmnElement.added", { element: n }),
        n
      );
    }),
    (wi.prototype._attachBoundary = function(e, t) {
      var n = this._translate,
        i = e.attachedToRef;
      if (!i)
        throw new Error(
          n("missing {semantic}#attachedToRef", { semantic: Vn(e) })
        );
      var r = this._elementRegistry.get(i.id),
        a = r && r.attachers;
      if (!r) throw Ei(n, e, i, "attachedToRef");
      (t.host = r),
        a || (r.attachers = a = []),
        -1 === a.indexOf(t) && a.push(t);
    }),
    (wi.prototype.addLabel = function(e, t) {
      var n, i, r;
      return (
        (n = vi(e, t)),
        (i = e.name) && (n = this._textRenderer.getExternalLabelBounds(n, i)),
        (r = this._elementFactory.createLabel(
          bi(e, {
            id: e.id + "_label",
            labelTarget: t,
            type: "label",
            hidden: t.hidden || !e.name,
            x: Math.round(n.x),
            y: Math.round(n.y),
            width: Math.round(n.width),
            height: Math.round(n.height)
          })
        )),
        this._canvas.addShape(r, t.parent)
      );
    }),
    (wi.prototype._getEnd = function(e, t) {
      var n,
        i,
        r = e.$type,
        a = this._translate;
      if (
        ((i = e[t + "Ref"]),
        "source" === t && "bpmn:DataInputAssociation" === r && (i = i && i[0]),
        (("source" === t && "bpmn:DataOutputAssociation" === r) ||
          ("target" === t && "bpmn:DataInputAssociation" === r)) &&
          (i = e.$parent),
        (n = i && this._getElement(i)))
      )
        return n;
      throw i
        ? Ei(a, e, i, t + "Ref")
        : new Error(
            a("{semantic}#{side} Ref not specified", {
              semantic: Vn(e),
              side: t
            })
          );
    }),
    (wi.prototype._getSource = function(e) {
      return this._getEnd(e, "source");
    }),
    (wi.prototype._getTarget = function(e) {
      return this._getEnd(e, "target");
    }),
    (wi.prototype._getElement = function(e) {
      return this._elementRegistry.get(e.id);
    });
  var _i = {
    __depends__: [mi, { __depends__: [fi], bpmnImporter: ["type", wi] }]
  };
  function Ai(e) {
    return e.originalEvent || e.srcEvent;
  }
  function Si(e) {
    return (
      e.pointers && e.pointers.length && (e = e.pointers[0]),
      e.touches && e.touches.length && (e = e.touches[0]),
      e ? { x: e.clientX, y: e.clientY } : null
    );
  }
  function Ri(e) {
    return !(Ai(e) || e).button;
  }
  function Ci(e) {
    var t = Ai(e) || e;
    return !!Ri(e) && (/mac/i.test(navigator.platform) ? t.metaKey : t.ctrlKey);
  }
  function Mi(e) {
    return !0;
  }
  function ki(a, o, e) {
    var r = e.cls("djs-hit", ["no-fill", "no-border"], {
      stroke: "white",
      strokeWidth: 15
    });
    function s(e, t, n) {
      var i, r;
      !(function(e, t) {
        return !(u[e] || Ri)(t);
      })(e, t) &&
        (n
          ? (r = o.getGraphics(n))
          : (i = t.delegateTarget || t.target) && ((r = i), (n = o.get(r))),
        r &&
          n &&
          !1 === a.fire(e, { element: n, gfx: r, originalEvent: t }) &&
          (t.stopPropagation(), t.preventDefault()));
    }
    var l = {};
    function p(e) {
      return l[e];
    }
    var c = {
        mouseover: "element.hover",
        mouseout: "element.out",
        click: "element.click",
        dblclick: "element.dblclick",
        mousedown: "element.mousedown",
        mouseup: "element.mouseup",
        contextmenu: "element.contextmenu"
      },
      u = { "element.contextmenu": Mi };
    var h = "svg, .djs-element";
    function i(e, t, n, i) {
      var r = (l[n] = function(e) {
        s(n, e);
      });
      i && (u[n] = i), (r.$delegate = F.bind(e, h, t, r));
    }
    function m(e, t, n) {
      var i = p(n);
      i && F.unbind(e, t, i.$delegate);
    }
    a.on("canvas.destroy", function(e) {
      !(function(n) {
        P(c, function(e, t) {
          m(n, t, e);
        });
      })(e.svg);
    }),
      a.on("canvas.init", function(e) {
        !(function(n) {
          P(c, function(e, t) {
            i(n, t, e);
          });
        })(e.svg);
      }),
      a.on(["shape.added", "connection.added"], function(e) {
        var t,
          n = e.element,
          i = e.gfx;
        n.waypoints
          ? (t = Le(n.waypoints))
          : J((t = pe("rect")), {
              x: 0,
              y: 0,
              width: n.width,
              height: n.height
            }),
          J(t, r),
          q(i, t);
      }),
      a.on("shape.changed", 500, function(e) {
        var t = e.element;
        J(K(".djs-hit", e.gfx), { width: t.width, height: t.height });
      }),
      a.on("connection.changed", function(e) {
        var t = e.element;
        !(function(e, t) {
          J(e, { points: Be(t) });
        })(K(".djs-hit", e.gfx), t.waypoints);
      }),
      (this.fire = s),
      (this.triggerMouseEvent = function(e, t, n) {
        var i = c[e];
        if (!i) throw new Error("unmapped DOM event name <" + e + ">");
        return s(i, t, n);
      }),
      (this.mouseHandler = p),
      (this.registerEvent = i),
      (this.unregisterEvent = m);
  }
  ki.$inject = ["eventBus", "elementRegistry", "styles"];
  var Pi = { __init__: ["interactionEvents"], interactionEvents: ["type", ki] };
  function Ti(e, t, n) {
    this.offset = 6;
    var i = t.cls("djs-outline", ["no-fill"]),
      r = this;
    function a(e, t) {
      var n = pe("rect");
      return J(n, T({ x: 10, y: 10, width: 100, height: 100 }, i)), q(e, n), n;
    }
    e.on(["shape.added", "shape.changed"], 500, function(e) {
      var t = e.element,
        n = e.gfx,
        i = K(".djs-outline", n);
      i || (i = a(n)), r.updateShapeOutline(i, t);
    }),
      e.on(["connection.added", "connection.changed"], function(e) {
        var t = e.element,
          n = e.gfx,
          i = K(".djs-outline", n);
        i || (i = a(n)), r.updateConnectionOutline(i, t);
      });
  }
  (Ti.prototype.updateShapeOutline = function(e, t) {
    J(e, {
      x: -this.offset,
      y: -this.offset,
      width: t.width + 2 * this.offset,
      height: t.height + 2 * this.offset
    });
  }),
    (Ti.prototype.updateConnectionOutline = function(e, t) {
      var n = je(t);
      J(e, {
        x: n.x - this.offset,
        y: n.y - this.offset,
        width: n.width + 2 * this.offset,
        height: n.height + 2 * this.offset
      });
    }),
    (Ti.$inject = ["eventBus", "styles", "elementRegistry"]);
  var Ni = { __init__: ["outline"], outline: ["type", Ti] };
  function Di(e) {
    (this._eventBus = e), (this._selectedElements = []);
    var n = this;
    e.on(["shape.remove", "connection.remove"], function(e) {
      var t = e.element;
      n.deselect(t);
    }),
      e.on(["diagram.clear"], function(e) {
        n.select(null);
      });
  }
  (Di.$inject = ["eventBus"]),
    (Di.prototype.deselect = function(e) {
      var t = this._selectedElements,
        n = t.indexOf(e);
      if (-1 !== n) {
        var i = t.slice();
        t.splice(n, 1),
          this._eventBus.fire("selection.changed", {
            oldSelection: i,
            newSelection: t
          });
      }
    }),
    (Di.prototype.get = function() {
      return this._selectedElements;
    }),
    (Di.prototype.isSelected = function(e) {
      return -1 !== this._selectedElements.indexOf(e);
    }),
    (Di.prototype.select = function(e, t) {
      var n = this._selectedElements,
        i = n.slice();
      u(e) || (e = e ? [e] : []),
        t
          ? P(e, function(e) {
              -1 === n.indexOf(e) && n.push(e);
            })
          : (this._selectedElements = n = e.slice()),
        this._eventBus.fire("selection.changed", {
          oldSelection: i,
          newSelection: n
        });
    });
  var Oi = "selected";
  function Bi(e, n, t, i) {
    function r(e, t) {
      n.addMarker(e, t);
    }
    function a(e, t) {
      n.removeMarker(e, t);
    }
    (this._multiSelectionBox = null),
      e.on("element.hover", function(e) {
        r(e.element, "hover");
      }),
      e.on("element.out", function(e) {
        a(e.element, "hover");
      }),
      e.on("selection.changed", function(e) {
        var t = e.oldSelection,
          n = e.newSelection;
        P(t, function(e) {
          -1 === n.indexOf(e) &&
            (function(e) {
              a(e, Oi);
            })(e);
        }),
          P(n, function(e) {
            -1 === t.indexOf(e) &&
              (function(e) {
                r(e, Oi);
              })(e);
          });
      });
  }
  function Li(e, a, o, i) {
    e.on("create.end", 500, function(e) {
      e.context.canExecute && a.select(e.context.shape);
    }),
      e.on("connect.end", 500, function(e) {
        e.context.canExecute && e.context.target && a.select(e.context.target);
      }),
      e.on("shape.move.end", 500, function(e) {
        var t = e.previousSelection || [],
          n = i.get(e.context.shape.id);
        C(t, function(e) {
          return n.id === e.id;
        }) || a.select(n);
      }),
      e.on("element.click", function(e) {
        var t = e.element;
        t === o.getRootElement() && (t = null);
        var n = a.isSelected(t),
          i = 1 < a.get().length,
          r = Ci(e);
        if (n && i) return r ? a.deselect(t) : a.select(t);
        n ? a.deselect(t) : a.select(t, r);
      });
  }
  (Bi.$inject = ["eventBus", "canvas", "selection", "styles"]),
    (Li.$inject = ["eventBus", "selection", "canvas", "elementRegistry"]);
  var Ii = {
    __init__: ["selectionVisuals", "selectionBehavior"],
    __depends__: [Pi, Ni],
    selection: ["type", Di],
    selectionVisuals: ["type", Bi],
    selectionBehavior: ["type", Li]
  };
  function Fi(e) {
    (this._counter = 0),
      (this._prefix =
        (e ? e + "-" : "") + Math.floor(1e9 * Math.random()) + "-");
  }
  Fi.prototype.next = function() {
    return this._prefix + ++this._counter;
  };
  var ji = new Fi("ov");
  function Vi(e, t, n, i) {
    (this._eventBus = t),
      (this._canvas = n),
      (this._elementRegistry = i),
      (this._ids = ji),
      (this._overlayDefaults = T({ show: null, scale: !0 }, e && e.defaults)),
      (this._overlays = {}),
      (this._overlayContainers = []),
      (this._overlayRoot = (function(e) {
        var t = j(
          '<div class="djs-overlay-container" style="position: absolute; width: 0; height: 0;" />'
        );
        return e.insertBefore(t, e.firstChild), t;
      })(n.getContainer())),
      this._init();
  }
  function Wi(e, t, n) {
    T(e.style, { left: t + "px", top: n + "px" });
  }
  function zi(e, t) {
    e.style.display = !1 === t ? "none" : "";
  }
  function Gi(t, n) {
    (t.style["transform-origin"] = "top left"),
      ["", "-ms-", "-webkit-"].forEach(function(e) {
        t.style[e + "transform"] = n;
      });
  }
  (Vi.$inject = ["config.overlays", "eventBus", "canvas", "elementRegistry"]),
    (Vi.prototype.get = function(e) {
      if (
        (p(e) && (e = { id: e }),
        p(e.element) && (e.element = this._elementRegistry.get(e.element)),
        e.element)
      ) {
        var t = this._getOverlayContainer(e.element, !0);
        return t
          ? e.type
            ? M(t.overlays, i({ type: e.type }))
            : t.overlays.slice()
          : [];
      }
      return e.type
        ? M(this._overlays, i({ type: e.type }))
        : e.id
        ? this._overlays[e.id]
        : null;
    }),
    (Vi.prototype.add = function(e, t, n) {
      if (
        (k(t) && ((n = t), (t = null)),
        e.id || (e = this._elementRegistry.get(e)),
        !n.position)
      )
        throw new Error("must specifiy overlay position");
      if (!n.html) throw new Error("must specifiy overlay html");
      if (!e) throw new Error("invalid element specified");
      var i = this._ids.next();
      return (
        (n = T({}, this._overlayDefaults, n, {
          id: i,
          type: t,
          element: e,
          html: n.html
        })),
        this._addOverlay(n),
        i
      );
    }),
    (Vi.prototype.remove = function(e) {
      var t = this.get(e) || [];
      u(t) || (t = [t]);
      var i = this;
      P(t, function(e) {
        var t = i._getOverlayContainer(e.element, !0);
        if (
          (e &&
            (H(e.html),
            H(e.htmlContainer),
            delete e.htmlContainer,
            delete e.element,
            delete i._overlays[e.id]),
          t)
        ) {
          var n = t.overlays.indexOf(e);
          -1 !== n && t.overlays.splice(n, 1);
        }
      });
    }),
    (Vi.prototype.show = function() {
      zi(this._overlayRoot);
    }),
    (Vi.prototype.hide = function() {
      zi(this._overlayRoot, !1);
    }),
    (Vi.prototype.clear = function() {
      (this._overlays = {}),
        (this._overlayContainers = []),
        w(this._overlayRoot);
    }),
    (Vi.prototype._updateOverlayContainer = function(e) {
      var t = e.element,
        n = e.html,
        i = t.x,
        r = t.y;
      if (t.waypoints) {
        var a = je(t);
        (i = a.x), (r = a.y);
      }
      Wi(n, i, r),
        (function(e, t, n) {
          2 == arguments.length
            ? e.getAttribute(t)
            : null === n
            ? e.removeAttribute(t)
            : e.setAttribute(t, n);
        })(e.html, "data-container-id", t.id);
    }),
    (Vi.prototype._updateOverlay = function(e) {
      var t,
        n,
        i = e.position,
        r = e.htmlContainer,
        a = e.element,
        o = i.left,
        s = i.top;
      void 0 !== i.right &&
        ((t = a.waypoints ? je(a).width : a.width), (o = -1 * i.right + t));
      void 0 !== i.bottom &&
        ((n = a.waypoints ? je(a).height : a.height), (s = -1 * i.bottom + n));
      Wi(r, o || 0, s || 0);
    }),
    (Vi.prototype._createOverlayContainer = function(e) {
      var t = j('<div class="djs-overlays" style="position: absolute" />');
      this._overlayRoot.appendChild(t);
      var n = { html: t, element: e, overlays: [] };
      return (
        this._updateOverlayContainer(n), this._overlayContainers.push(n), n
      );
    }),
    (Vi.prototype._updateRoot = function(e) {
      var t = e.scale || 1,
        n =
          "matrix(" + [t, 0, 0, t, -1 * e.x * t, -1 * e.y * t].join(",") + ")";
      Gi(this._overlayRoot, n);
    }),
    (Vi.prototype._getOverlayContainer = function(t, e) {
      var n = C(this._overlayContainers, function(e) {
        return e.element === t;
      });
      return n || e ? n : this._createOverlayContainer(t);
    }),
    (Vi.prototype._addOverlay = function(e) {
      var t,
        n,
        i = e.id,
        r = e.element,
        a = e.html;
      a.get && a.constructor.prototype.jquery && (a = a.get(0)),
        p(a) && (a = j(a)),
        (n = this._getOverlayContainer(r)),
        (t = j(
          '<div class="djs-overlay" data-overlay-id="' +
            i +
            '" style="position: absolute">'
        )).appendChild(a),
        e.type && b(t).add("djs-overlay-" + e.type),
        (e.htmlContainer = t),
        n.overlays.push(e),
        n.html.appendChild(t),
        (this._overlays[i] = e),
        this._updateOverlay(e),
        this._updateOverlayVisibilty(e, this._canvas.viewbox());
    }),
    (Vi.prototype._updateOverlayVisibilty = function(e, t) {
      var n = e.show,
        i = n && n.minZoom,
        r = n && n.maxZoom,
        a = e.htmlContainer,
        o = !0;
      n &&
        (((l(i) && i > t.scale) || (l(r) && r < t.scale)) && (o = !1),
        zi(a, o)),
        this._updateOverlayScale(e, t);
    }),
    (Vi.prototype._updateOverlayScale = function(e, t) {
      var n,
        i,
        r,
        a = e.scale,
        o = e.htmlContainer,
        s = "";
      !0 !== a &&
        ((i = !1 === a ? (n = 1) : ((n = a.min), a.max)),
        l(n) && t.scale < n && (r = (1 / t.scale || 1) * n),
        l(i) && t.scale > i && (r = (1 / t.scale || 1) * i)),
        l(r) && (s = "scale(" + r + "," + r + ")"),
        Gi(o, s);
    }),
    (Vi.prototype._updateOverlaysVisibilty = function(t) {
      var n = this;
      P(this._overlays, function(e) {
        n._updateOverlayVisibilty(e, t);
      });
    }),
    (Vi.prototype._init = function() {
      var e = this._eventBus,
        r = this;
      e.on("canvas.viewbox.changing", function(e) {
        r.hide();
      }),
        e.on("canvas.viewbox.changed", function(e) {
          !(function(e) {
            r._updateRoot(e), r._updateOverlaysVisibilty(e), r.show();
          })(e.viewbox);
        }),
        e.on(["shape.remove", "connection.remove"], function(e) {
          var t = e.element;
          P(r.get({ element: t }), function(e) {
            r.remove(e.id);
          });
          var n = r._getOverlayContainer(t);
          if (n) {
            H(n.html);
            var i = r._overlayContainers.indexOf(n);
            -1 !== i && r._overlayContainers.splice(i, 1);
          }
        }),
        e.on("element.changed", 500, function(e) {
          var t = e.element,
            n = r._getOverlayContainer(t, !0);
          n &&
            (P(n.overlays, function(e) {
              r._updateOverlay(e);
            }),
            r._updateOverlayContainer(n));
        }),
        e.on("element.marker.update", function(e) {
          var t = r._getOverlayContainer(e.element, !0);
          t && b(t.html)[e.add ? "add" : "remove"](e.marker);
        }),
        e.on("diagram.clear", this.clear, this);
    });
  var $i = { __init__: ["overlays"], overlays: ["type", Vi] },
    Ki =
      '<img width="52" height="52" src="' +
      ("data:image/svg+xml," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960"><path fill="#fff" d="M960 60v839c0 33-27 61-60 61H60c-33 0-60-27-60-60V60C0 27 27 0 60 0h839c34 0 61 27 61 60z"/><path fill="#52b415" d="M217 548a205 205 0 0 0-144 58 202 202 0 0 0-4 286 202 202 0 0 0 285 3 200 200 0 0 0 48-219 203 203 0 0 0-185-128zM752 6a206 206 0 0 0-192 285 206 206 0 0 0 269 111 207 207 0 0 0 111-260A204 204 0 0 0 752 6zM62 0A62 62 0 0 0 0 62v398l60 46a259 259 0 0 1 89-36c5-28 10-57 14-85l99 2 12 85a246 246 0 0 1 88 38l70-52 69 71-52 68c17 30 29 58 35 90l86 14-2 100-86 12a240 240 0 0 1-38 89l43 58h413c37 0 60-27 60-61V407a220 220 0 0 1-44 40l21 85-93 39-45-76a258 258 0 0 1-98 1l-45 76-94-39 22-85a298 298 0 0 1-70-69l-86 22-38-94 76-45a258 258 0 0 1-1-98l-76-45 40-94 85 22a271 271 0 0 1 41-47z"/></svg>'
        )) +
      '" />';
  /**
   * This file must not be changed or exchanged.
   *
   * @see http://bpmn.io/license for more information.
   */ function Hi(e) {
    return e.join(";");
  }
  var Ui,
    qi =
      '<div class="bjs-powered-by-lightbox" style="' +
      Hi([
        "z-index: 1001",
        "position: fixed",
        "top: 0",
        "left: 0",
        "right: 0",
        "bottom: 0"
      ]) +
      '"><div class="backdrop" style="' +
      Hi(["width: 100%", "height: 100%", "background: rgba(0,0,0,0.2)"]) +
      '"></div><div class="notice" style="' +
      Hi([
        "position: absolute",
        "left: 50%",
        "top: 40%",
        "margin: 0 -130px",
        "width: 260px",
        "padding: 10px",
        "background: white",
        "border: solid 1px #AAA",
        "border-radius: 3px",
        "font-family: Helvetica, Arial, sans-serif",
        "font-size: 14px",
        "line-height: 1.2em"
      ]) +
      '"><a href="http://bpmn.io" target="_blank" style="float: left; margin-right: 10px">' +
      Ki +
      '</a>Web-based tooling for BPMN, DMN and CMMN diagrams powered by <a href="http://bpmn.io" target="_blank">bpmn.io</a>.</div></div>';
  var Yi = { width: "100%", height: "100%", position: "relative" };
  function Xi(e) {
    return e + (s(e) ? "px" : "");
  }
  function Zi(e) {
    (e = T({}, Yi, e)),
      (this._moddle = this._createModdle(e)),
      (this._container = this._createContainer(e)),
      /**
       * Adds the project logo to the diagram container as
       * required by the bpmn.io license.
       *
       * @see http://bpmn.io/license
       *
       * @param {Element} container
       */
      (function(e) {
        var t = j(
          '<a href="http://bpmn.io" target="_blank" class="bjs-powered-by" title="Powered by bpmn.io" style="position: absolute; bottom: 15px; right: 15px; z-index: 100">' +
            Ki +
            "</a>"
        );
        e.appendChild(t),
          L.bind(t, "click", function(e) {
            Ui ||
              ((Ui = j(qi)),
              F.bind(Ui, ".backdrop", "click", function(e) {
                document.body.removeChild(Ui);
              })),
              document.body.appendChild(Ui),
              e.preventDefault();
          });
      })(this._container),
      this._init(this._container, this._moddle, e);
  }
  function Ji(e) {
    return !e.altKey && (e.ctrlKey || e.metaKey);
  }
  function Qi(e, t) {
    return -1 < (e = u(e) ? e : [e]).indexOf(t.key);
  }
  function er(e) {
    return e.shiftKey;
  }
  t(Zi, bt),
    (Zi.prototype.importXML = function(e, r, a) {
      h(r) && ((a = r), (r = null)), (a = a || function() {});
      var o = this;
      (e = this._emit("import.parse.start", { xml: e }) || e),
        this._moddle.fromXML(e, "bpmn:Definitions", function(e, t, n) {
          t =
            o._emit("import.parse.complete", {
              error: e,
              definitions: t,
              context: n
            }) || t;
          var i = n.warnings;
          if (e)
            return (
              (e =
                /**
                 * The code in the <project-logo></project-logo> area
                 * must not be changed.
                 *
                 * @see http://bpmn.io/license for more information.
                 */
                (function(e) {
                  var t = /unparsable content <([^>]+)> detected([\s\S]*)$/.exec(
                    e.message
                  );
                  return (
                    t &&
                      (e.message =
                        "unparsable content <" +
                        t[1] +
                        "> detected; this may indicate an invalid BPMN 2.0 diagram file" +
                        t[2]),
                    e
                  );
                })(e)),
              o._emit("import.done", { error: e, warnings: i }),
              a(e, i)
            );
          o._setDefinitions(t),
            o.open(r, function(e, t) {
              var n = [].concat(i, t || []);
              o._emit("import.done", { error: e, warnings: n }), a(e, n);
            });
        });
    }),
    (Zi.prototype.open = function(e, t) {
      h(e) && ((t = e), (e = null));
      var n = this._definitions,
        i = e;
      if (((t = t || function() {}), !n))
        return t(new Error("no XML imported"));
      if (
        "string" == typeof e &&
        !(i = (function(e, t) {
          return (
            (t &&
              C(e.diagrams, function(e) {
                return e.id === t;
              })) ||
            null
          );
        })(n, e))
      )
        return t(new Error("BPMNDiagram <" + e + "> not found"));
      try {
        this.clear();
      } catch (e) {
        return t(e);
      }
      return (function(e, t, n, i) {
        var r, a, o;
        h(n) && ((i = n), (n = null));
        var s,
          l,
          p,
          c = [];
        try {
          (r = e.get("bpmnImporter")),
            (a = e.get("eventBus")),
            (o = e.get("translate")),
            a.fire("import.render.start", { definitions: t }),
            (l = t),
            (p = n),
            new Gn(
              {
                root: function(e) {
                  return r.add(e);
                },
                element: function(e, t) {
                  return r.add(e, t);
                },
                error: function(e, t) {
                  c.push({ message: e, context: t });
                }
              },
              o
            ).handleDefinitions(l, p),
            a.fire("import.render.complete", { error: s, warnings: c });
        } catch (e) {
          s = e;
        }
        i(s, c);
      })(this, n, i, t);
    }),
    (Zi.prototype.saveXML = function(e, n) {
      n || ((n = e), (e = {}));
      var i = this,
        t = this._definitions;
      if (!t) return n(new Error("no definitions loaded"));
      (t = this._emit("saveXML.start", { definitions: t }) || t),
        this._moddle.toXML(t, e, function(e, t) {
          try {
            (t = i._emit("saveXML.serialized", { error: e, xml: t }) || t),
              i._emit("saveXML.done", { error: e, xml: t });
          } catch (e) {
            console.error("error in saveXML life-cycle listener", e);
          }
          n(e, t);
        });
    }),
    (Zi.prototype.saveSVG = function(e, t) {
      var n, i;
      t || ((t = e), (e = {})), this._emit("saveSVG.start");
      try {
        var r = this.get("canvas"),
          a = r.getDefaultLayer(),
          o = K("defs", r._svg),
          s = xe(a),
          l = o ? "<defs>" + xe(o) + "</defs>" : "",
          p = a.getBBox();
        n =
          '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- created with bpmn-js / http://bpmn.io --\x3e\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' +
          p.width +
          '" height="' +
          p.height +
          '" viewBox="' +
          p.x +
          " " +
          p.y +
          " " +
          p.width +
          " " +
          p.height +
          '" version="1.1">' +
          l +
          s +
          "</svg>";
      } catch (e) {
        i = e;
      }
      this._emit("saveSVG.done", { error: i, svg: n }), t(i, n);
    }),
    (Zi.prototype._setDefinitions = function(e) {
      this._definitions = e;
    }),
    (Zi.prototype.getModules = function() {
      return this._modules;
    }),
    (Zi.prototype.clear = function() {
      this.get("elementRegistry").forEach(function(e) {
        var t = e.businessObject;
        t && t.di && delete t.di;
      }),
        bt.prototype.clear.call(this);
    }),
    (Zi.prototype.destroy = function() {
      bt.prototype.destroy.call(this), H(this._container);
    }),
    (Zi.prototype.on = function(e, t, n, i) {
      return this.get("eventBus").on(e, t, n, i);
    }),
    (Zi.prototype.off = function(e, t) {
      this.get("eventBus").off(e, t);
    }),
    (Zi.prototype.attachTo = function(e) {
      if (!e) throw new Error("parentNode required");
      this.detach(),
        e.get && e.constructor.prototype.jquery && (e = e.get(0)),
        "string" == typeof e && (e = K(e)),
        e.appendChild(this._container),
        this._emit("attach", {}),
        this.get("canvas").resized();
    }),
    (Zi.prototype.getDefinitions = function() {
      return this._definitions;
    }),
    (Zi.prototype.detach = function() {
      var e = this._container,
        t = e.parentNode;
      t && (this._emit("detach", {}), t.removeChild(e));
    }),
    (Zi.prototype._init = function(e, t, n) {
      var i = n.modules || this.getModules(),
        r = n.additionalModules || [],
        a = [].concat(
          [{ bpmnjs: ["value", this], moddle: ["value", t] }],
          i,
          r
        ),
        o = T(
          (function(e, n) {
            var i = {};
            return (
              P(Object(e), function(e, t) {
                -1 === n.indexOf(t) && (i[t] = e);
              }),
              i
            );
          })(n, ["additionalModules"]),
          { canvas: T({}, n.canvas, { container: e }), modules: a }
        );
      bt.call(this, o), n && n.container && this.attachTo(n.container);
    }),
    (Zi.prototype._emit = function(e, t) {
      return this.get("eventBus").fire(e, t);
    }),
    (Zi.prototype._createContainer = function(e) {
      var t = j('<div class="bjs-container"></div>');
      return (
        T(t.style, {
          width: Xi(e.width),
          height: Xi(e.height),
          position: e.position
        }),
        t
      );
    }),
    (Zi.prototype._createModdle = function(e) {
      return new jn(T({}, this._moddleExtensions, e.moddleExtensions));
    }),
    (Zi.prototype._modules = [_i, fi, Ii, $i]),
    (Zi.prototype._moddleExtensions = {});
  var tr = "keyboard.keydown";
  function nr(e, t) {
    var n = this;
    (this._config = e || {}),
      (this._eventBus = t),
      (this._keyHandler = this._keyHandler.bind(this)),
      t.on("diagram.destroy", function() {
        n._fire("destroy"), n.unbind();
      }),
      t.on("diagram.init", function() {
        n._fire("init");
      }),
      t.on("attach", function() {
        e && e.bindTo && n.bind(e.bindTo);
      }),
      t.on("detach", function() {
        n.unbind();
      });
  }
  (nr.$inject = ["config.keyboard", "eventBus"]),
    (nr.prototype._keyHandler = function(e) {
      if (
        !(function(e) {
          return e && ($(e, "input, textarea") || "true" === e.contentEditable);
        })(e.target)
      ) {
        var t = { keyEvent: e };
        this._eventBus.fire(tr, t) && e.preventDefault();
      }
    }),
    (nr.prototype.bind = function(e) {
      this.unbind(),
        (this._node = e),
        L.bind(e, "keydown", this._keyHandler, !0),
        this._fire("bind");
    }),
    (nr.prototype.getBinding = function() {
      return this._node;
    }),
    (nr.prototype.unbind = function() {
      var e = this._node;
      e && (this._fire("unbind"), L.unbind(e, "keydown", this._keyHandler, !0)),
        (this._node = null);
    }),
    (nr.prototype._fire = function(e) {
      this._eventBus.fire("keyboard." + e, { node: this._node });
    }),
    (nr.prototype.addListener = function(e, t) {
      h(e) && ((t = e), (e = 1e3)), this._eventBus.on(tr, e, t);
    }),
    (nr.prototype.hasModifier = function(e) {
      return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
    }),
    (nr.prototype.isCmd = Ji),
    (nr.prototype.isShift = er),
    (nr.prototype.isKey = Qi);
  function ir(e, n) {
    var i = this;
    e.on("editorActions.init", 500, function(e) {
      var t = e.editorActions;
      i.registerBindings(n, t);
    });
  }
  (ir.$inject = ["eventBus", "keyboard"]),
    (ir.prototype.registerBindings = function(n, i) {
      function e(e, t) {
        i.isRegistered(e) && n.addListener(t);
      }
      e("undo", function(e) {
        var t = e.keyEvent;
        if (Ji(t) && !er(t) && Qi(["z", "Z"], t)) return i.trigger("undo"), !0;
      }),
        e("redo", function(e) {
          var t = e.keyEvent;
          if (Ji(t) && (Qi(["y", "Y"], t) || (Qi(["z", "Z"], t) && er(t))))
            return i.trigger("redo"), !0;
        }),
        e("copy", function(e) {
          var t = e.keyEvent;
          if (Ji(t) && Qi(["c", "C"], t)) return i.trigger("copy"), !0;
        }),
        e("paste", function(e) {
          var t = e.keyEvent;
          if (Ji(t) && Qi(["v", "V"], t)) return i.trigger("paste"), !0;
        }),
        e("stepZoom", function(e) {
          var t = e.keyEvent;
          if (Qi(["+", "Add"], t) && Ji(t))
            return i.trigger("stepZoom", { value: 1 }), !0;
        }),
        e("stepZoom", function(e) {
          var t = e.keyEvent;
          if (Qi(["-", "Subtract"], t) && Ji(t))
            return i.trigger("stepZoom", { value: -1 }), !0;
        }),
        e("zoom", function(e) {
          var t = e.keyEvent;
          if (Qi("0", t) && Ji(t)) return i.trigger("zoom", { value: 1 }), !0;
        }),
        e("removeSelection", function(e) {
          if (Qi(["Delete", "Del"], e.keyEvent))
            return i.trigger("removeSelection"), !0;
        });
    });
  var rr = {
      __init__: ["keyboard", "keyboardBindings"],
      keyboard: ["type", nr],
      keyboardBindings: ["type", ir]
    },
    ar = { moveSpeed: 50, moveSpeedAccelerated: 200 };
  function or(e, a, r) {
    var o = this;
    (this._config = T({}, ar, e || {})),
      a.addListener(function(e) {
        var t = e.keyEvent,
          n = o._config;
        if (!a.isCmd(t)) return;
        if (
          a.isKey(
            [
              "ArrowLeft",
              "Left",
              "ArrowUp",
              "Up",
              "ArrowDown",
              "Down",
              "ArrowRight",
              "Right"
            ],
            t
          )
        ) {
          var i,
            r = a.isShift(t) ? n.moveSpeedAccelerated : n.moveSpeed;
          switch (t.key) {
            case "ArrowLeft":
            case "Left":
              i = "left";
              break;
            case "ArrowUp":
            case "Up":
              i = "up";
              break;
            case "ArrowRight":
            case "Right":
              i = "right";
              break;
            case "ArrowDown":
            case "Down":
              i = "down";
          }
          return o.moveCanvas({ speed: r, direction: i }), !0;
        }
      }),
      (this.moveCanvas = function(e) {
        var t = 0,
          n = 0,
          i = e.speed / Math.min(Math.sqrt(r.viewbox().scale), 1);
        switch (e.direction) {
          case "left":
            t = i;
            break;
          case "up":
            n = i;
            break;
          case "right":
            t = -i;
            break;
          case "down":
            n = -i;
        }
        r.scroll({ dx: t, dy: n });
      });
  }
  or.$inject = ["config.keyboardMove", "keyboard", "canvas"];
  var sr = {
      __depends__: [rr],
      __init__: ["keyboardMove"],
      keyboardMove: ["type", or]
    },
    lr = /^djs-cursor-.*$/;
  function pr(e) {
    var t = b(document.body);
    t.removeMatching(lr), e && t.add("djs-cursor-" + e);
  }
  var cr = 5e3;
  function ur(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function hr(r, a) {
    var o;
    function t(e) {
      var t = o.start,
        n = Si(e),
        i = ur(n, t);
      (!o.dragging &&
        15 <
          (function(e) {
            return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2));
          })(i) &&
        ((o.dragging = !0),
        (function(e, t) {
          function n() {
            return !1;
          }
          (t = t || "element.click"), e.once(t, cr, n);
        })(r),
        pr("grab")),
      o.dragging) &&
        ((i = ur(n, o.last || o.start)),
        a.scroll({ dx: i.x, dy: i.y }),
        (o.last = n));
      e.preventDefault();
    }
    function n(e) {
      L.unbind(document, "mousemove", t),
        L.unbind(document, "mouseup", n),
        pr((o = null));
    }
    r.on("element.mousedown", 500, function(e) {
      return (function(e) {
        if (R(e.target, ".djs-draggable")) return;
        if (e.button || e.ctrlKey || e.shiftKey || e.altKey) return;
        return (
          (o = { start: Si(e) }),
          L.bind(document, "mousemove", t),
          L.bind(document, "mouseup", n),
          !0
        );
      })(e.originalEvent);
    });
  }
  hr.$inject = ["eventBus", "canvas"];
  var mr = { __init__: ["moveCanvas"], moveCanvas: ["type", hr] };
  function fr(e) {
    return Math.log(e) / Math.log(10);
  }
  function dr(e, t) {
    var n = fr(e.min),
      i = fr(e.max);
    return (Math.abs(n) + Math.abs(i)) / t;
  }
  var yr =
      Math.sign ||
      function(e) {
        return 0 <= e ? 1 : -1;
      },
    gr = { min: 0.2, max: 4 };
  function vr(t, e, n) {
    (t = t || {}),
      (this._enabled = !1),
      (this._canvas = n),
      (this._container = n._container),
      (this._handleWheel = f(this._handleWheel, this)),
      (this._totalDelta = 0),
      (this._scale = t.scale || 0.75);
    var i = this;
    e.on("canvas.init", function(e) {
      i._init(!1 !== t.enabled);
    });
  }
  (vr.$inject = ["config.zoomScroll", "eventBus", "canvas"]),
    (vr.prototype.scroll = function(e) {
      this._canvas.scroll(e);
    }),
    (vr.prototype.reset = function() {
      this._canvas.zoom("fit-viewport");
    }),
    (vr.prototype.zoom = function(e, t) {
      var n = dr(gr, 20);
      (this._totalDelta += e),
        0.1 < Math.abs(this._totalDelta) &&
          (this._zoom(e, t, n), (this._totalDelta = 0));
    }),
    (vr.prototype._handleWheel = function(e) {
      if (!R(e.target, ".djs-scrollable", !0)) {
        var t = this._container;
        e.preventDefault();
        var n,
          i = e.ctrlKey,
          r = e.shiftKey,
          a = -1 * this._scale;
        if (
          ((a *= i
            ? 0 === e.deltaMode
              ? 0.02
              : 0.32
            : 0 === e.deltaMode
            ? 1
            : 16),
          i)
        ) {
          var o = t.getBoundingClientRect(),
            s = { x: e.clientX - o.left, y: e.clientY - o.top };
          (n =
            Math.sqrt(Math.pow(e.deltaY, 2) + Math.pow(e.deltaX, 2)) *
            yr(e.deltaY) *
            a),
            this.zoom(n, s);
        } else
          (n = r
            ? { dx: a * e.deltaY, dy: 0 }
            : { dx: a * e.deltaX, dy: a * e.deltaY }),
            this.scroll(n);
      }
    }),
    (vr.prototype.stepZoom = function(e, t) {
      var n = dr(gr, 10);
      this._zoom(e, t, n);
    }),
    (vr.prototype._zoom = function(e, t, n) {
      var i = this._canvas,
        r = 0 < e ? 1 : -1,
        a = fr(i.zoom()),
        o = Math.round(a / n) * n;
      o += n * r;
      var s = Math.pow(10, o);
      i.zoom(
        (function(e, t) {
          return Math.max(e.min, Math.min(e.max, t));
        })(gr, s),
        t
      );
    }),
    (vr.prototype.toggle = function(e) {
      var t = this._container,
        n = this._handleWheel,
        i = this._enabled;
      return (
        void 0 === e && (e = !i),
        i !== e && L[e ? "bind" : "unbind"](t, "wheel", n, !1),
        (this._enabled = e)
      );
    }),
    (vr.prototype._init = function(e) {
      this.toggle(e);
    });
  var xr = { __init__: ["zoomScroll"], zoomScroll: ["type", vr] };
  function br(e) {
    Zi.call(this, e);
  }
  return (
    t(br, Zi),
    (br.prototype._modules = [].concat(
      br.prototype._modules,
      (br.prototype._navigationModules = [sr, mr, xr])
    )),
    br
  );
});
