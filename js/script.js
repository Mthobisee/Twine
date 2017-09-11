"use strict";

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    }
    return Array.from(e)
}
var _slicedToArray = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    !r && s.return && s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
! function() {
    /**
     * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
     * Released under MIT license, http://github.com/requirejs/almond/LICENSE
     */
    var requirejs, require, define;
    ! function(e) {
        function t(e, t) {
            return v.call(e, t)
        }

        function n(e, t) {
            var n, r, i, o, a, s, u, c, l, f, p, d, h = t && t.split("/"),
                m = g.map,
                y = m && m["*"] || {};
            if (e) {
                for (e = e.split("/"), a = e.length - 1, g.nodeIdCompat && w.test(e[a]) && (e[a] = e[a].replace(w, "")), "." === e[0].charAt(0) && h && (d = h.slice(0, h.length - 1), e = d.concat(e)), l = 0; l < e.length; l++)
                    if (p = e[l], "." === p) e.splice(l, 1), l -= 1;
                    else if (".." === p) {
                    if (0 === l || 1 === l && ".." === e[2] || ".." === e[l - 1]) continue;
                    l > 0 && (e.splice(l - 1, 2), l -= 2)
                }
                e = e.join("/")
            }
            if ((h || y) && m) {
                for (n = e.split("/"), l = n.length; l > 0; l -= 1) {
                    if (r = n.slice(0, l).join("/"), h)
                        for (f = h.length; f > 0; f -= 1)
                            if (i = m[h.slice(0, f).join("/")], i && (i = i[r])) {
                                o = i, s = l;
                                break
                            }
                    if (o) break;
                    !u && y && y[r] && (u = y[r], c = l)
                }!o && u && (o = u, s = c), o && (n.splice(0, s, o), e = n.join("/"))
            }
            return e
        }

        function r(t, n) {
            return function() {
                var r = b.call(arguments, 0);
                return "string" != typeof r[0] && 1 === r.length && r.push(null), f.apply(e, r.concat([t, n]))
            }
        }

        function i(e) {
            return function(t) {
                return n(t, e)
            }
        }

        function o(e) {
            return function(t) {
                h[e] = t
            }
        }

        function a(n) {
            if (t(m, n)) {
                var r = m[n];
                delete m[n], y[n] = !0, l.apply(e, r)
            }
            if (!t(h, n) && !t(y, n)) throw new Error("No " + n);
            return h[n]
        }

        function s(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function u(e) {
            return e ? s(e) : []
        }

        function c(e) {
            return function() {
                return g && g.config && g.config[e] || {}
            }
        }
        var l, f, p, d, h = {},
            m = {},
            g = {},
            y = {},
            v = Object.prototype.hasOwnProperty,
            b = [].slice,
            w = /\.js$/;
        p = function(e, t) {
            var r, o = s(e),
                u = o[0],
                c = t[1];
            return e = o[1], u && (u = n(u, c), r = a(u)), u ? e = r && r.normalize ? r.normalize(e, i(c)) : n(e, c) : (e = n(e, c), o = s(e), u = o[0], e = o[1], u && (r = a(u))), {
                f: u ? u + "!" + e : e,
                n: e,
                pr: u,
                p: r
            }
        }, d = {
            require: function(e) {
                return r(e)
            },
            exports: function(e) {
                var t = h[e];
                return "undefined" != typeof t ? t : h[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: h[e],
                    config: c(e)
                }
            }
        }, l = function(n, i, s, c) {
            var l, f, g, v, b, w, x, T = [],
                O = "undefined" == typeof s ? "undefined" : _typeof(s);
            if (c = c || n, w = u(c), "undefined" === O || "function" === O) {
                for (i = !i.length && s.length ? ["require", "exports", "module"] : i, b = 0; b < i.length; b += 1)
                    if (v = p(i[b], w), f = v.f, "require" === f) T[b] = d.require(n);
                    else if ("exports" === f) T[b] = d.exports(n), x = !0;
                else if ("module" === f) l = T[b] = d.module(n);
                else if (t(h, f) || t(m, f) || t(y, f)) T[b] = a(f);
                else {
                    if (!v.p) throw new Error(n + " missing " + f);
                    v.p.load(v.n, r(c, !0), o(f), {}), T[b] = h[f]
                }
                g = s ? s.apply(h[n], T) : void 0, n && (l && l.exports !== e && l.exports !== h[n] ? h[n] = l.exports : g === e && x || (h[n] = g))
            } else n && (h[n] = s)
        }, requirejs = require = f = function(t, n, r, i, o) {
            if ("string" == typeof t) return d[t] ? d[t](n) : a(p(t, u(n)).f);
            if (!t.splice) {
                if (g = t, g.deps && f(g.deps, g.callback), !n) return;
                n.splice ? (t = n, n = r, r = null) : t = e
            }
            return n = n || function() {}, "function" == typeof r && (r = i, i = o), i ? l(e, t, n, r) : setTimeout(function() {
                l(e, t, n, r)
            }, 4), f
        }, f.config = function(e) {
            return f(e)
        }, requirejs._defined = h, define = function(e, n, r) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            n.splice || (r = n, n = []), t(h, e) || t(m, e) || (m[e] = [e, n, r])
        }, define.amd = {
            jQuery: !0
        }
    }(), define("almond", function() {}),
        function(e, t) {
            "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            function n(e, t) {
                t = t || te;
                var n = t.createElement("script");
                n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
            }

            function r(e) {
                var t = !!e && "length" in e && e.length,
                    n = he.type(e);
                return "function" === n || he.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
            }

            function i(e, t, n) {
                return he.isFunction(t) ? he.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? he.grep(e, function(e) {
                    return e === t !== n
                }) : "string" != typeof t ? he.grep(e, function(e) {
                    return ae.call(t, e) > -1 !== n
                }) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
                    return ae.call(t, e) > -1 !== n && 1 === e.nodeType
                }))
            }

            function o(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function a(e) {
                var t = {};
                return he.each(e.match(Ne) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function s(e) {
                return e
            }

            function u(e) {
                throw e
            }

            function c(e, t, n) {
                var r;
                try {
                    e && he.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && he.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e)
                } catch (e) {
                    n.call(void 0, e)
                }
            }

            function l() {
                te.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), he.ready()
            }

            function f() {
                this.expando = he.expando + f.uid++
            }

            function p(e) {
                return "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : e === +e + "" ? +e : De.test(e) ? JSON.parse(e) : e
            }

            function d(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(Re, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = p(n)
                        } catch (e) {}
                        Fe.set(e, t, n)
                    } else n = void 0;
                return n
            }

            function h(e, t, n, r) {
                var i, o = 1,
                    a = 20,
                    s = r ? function() {
                        return r.cur()
                    } : function() {
                        return he.css(e, t, "")
                    },
                    u = s(),
                    c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
                    l = (he.cssNumber[t] || "px" !== c && +u) && He.exec(he.css(e, t));
                if (l && l[3] !== c) {
                    c = c || l[3], n = n || [], l = +u || 1;
                    do o = o || ".5", l /= o, he.style(e, t, l + c); while (o !== (o = s() / u) && 1 !== o && --a)
                }
                return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
            }

            function m(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    i = We[r];
                return i ? i : (t = n.body.appendChild(n.createElement(r)), i = he.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), We[r] = i, i)
            }

            function g(e, t) {
                for (var n, r, i = [], o = 0, a = e.length; a > o; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Le.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Be(r) && (i[o] = m(r))) : "none" !== n && (i[o] = "none", Le.set(r, "display", n)));
                for (o = 0; a > o; o++) null != i[o] && (e[o].style.display = i[o]);
                return e
            }

            function y(e, t) {
                var n;
                return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
            }

            function v(e, t) {
                for (var n = 0, r = e.length; r > n; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"))
            }

            function b(e, t, n, r, i) {
                for (var o, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; h > d; d++)
                    if (o = e[d], o || 0 === o)
                        if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o);
                        else if (Je.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (Ue.exec(o) || ["", ""])[1].toLowerCase(), u = Xe[s] || Xe._default, a.innerHTML = u[1] + he.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
                    he.merge(p, a.childNodes), a = f.firstChild, a.textContent = ""
                } else p.push(t.createTextNode(o));
                for (f.textContent = "", d = 0; o = p[d++];)
                    if (r && he.inArray(o, r) > -1) i && i.push(o);
                    else if (c = he.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), c && v(a), n)
                    for (l = 0; o = a[l++];) Ge.test(o.type || "") && n.push(o);
                return f
            }

            function w() {
                return !0
            }

            function x() {
                return !1
            }

            function T() {
                try {
                    return te.activeElement
                } catch (e) {}
            }

            function O(e, t, n, r, i, o) {
                var a, s;
                if ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (s in t) O(e, s, n, r, t[s], o);
                    return e
                }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = x;
                else if (!i) return e;
                return 1 === o && (a = i, i = function(e) {
                    return he().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
                    he.event.add(this, t, i, r, n)
                })
            }

            function S(e, t) {
                return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
            }

            function j(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function k(e) {
                var t = rt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function C(e, t) {
                var n, r, i, o, a, s, u, c;
                if (1 === t.nodeType) {
                    if (Le.hasData(e) && (o = Le.access(e), a = Le.set(t, o), c = o.events)) {
                        delete a.handle, a.events = {};
                        for (i in c)
                            for (n = 0, r = c[i].length; r > n; n++) he.event.add(t, i, c[i][n])
                    }
                    Fe.hasData(e) && (s = Fe.access(e), u = he.extend({}, s), Fe.set(t, u))
                }
            }

            function A(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ze.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }

            function E(e, t, r, i) {
                t = ie.apply([], t);
                var o, a, s, u, c, l, f = 0,
                    p = e.length,
                    d = p - 1,
                    h = t[0],
                    m = he.isFunction(h);
                if (m || p > 1 && "string" == typeof h && !pe.checkClone && nt.test(h)) return e.each(function(n) {
                    var o = e.eq(n);
                    m && (t[0] = h.call(this, n, o.html())), E(o, t, r, i)
                });
                if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
                    for (s = he.map(y(o, "script"), j), u = s.length; p > f; f++) c = o, f !== d && (c = he.clone(c, !0, !0), u && he.merge(s, y(c, "script"))), r.call(e[f], c, f);
                    if (u)
                        for (l = s[s.length - 1].ownerDocument, he.map(s, k), f = 0; u > f; f++) c = s[f], Ge.test(c.type || "") && !Le.access(c, "globalEval") && he.contains(l, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(it, ""), l))
                }
                return e
            }

            function N(e, t, n) {
                for (var r, i = t ? he.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || he.cleanData(y(r)), r.parentNode && (n && he.contains(r.ownerDocument, r) && v(y(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            function _(e, t, n) {
                var r, i, o, a, s = e.style;
                return n = n || st(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !pe.pixelMarginRight() && at.test(a) && ot.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function P(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function I(e) {
                if (e in pt) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
                    if (e = ft[n] + t, e in pt) return e
            }

            function M(e, t, n) {
                var r = He.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function L(e, t, n, r, i) {
                var o, a = 0;
                for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; 4 > o; o += 2) "margin" === n && (a += he.css(e, n + $e[o], !0, i)), r ? ("content" === n && (a -= he.css(e, "padding" + $e[o], !0, i)), "margin" !== n && (a -= he.css(e, "border" + $e[o] + "Width", !0, i))) : (a += he.css(e, "padding" + $e[o], !0, i), "padding" !== n && (a += he.css(e, "border" + $e[o] + "Width", !0, i)));
                return a
            }

            function F(e, t, n) {
                var r, i = !0,
                    o = st(e),
                    a = "border-box" === he.css(e, "boxSizing", !1, o);
                if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), 0 >= r || null == r) {
                    if (r = _(e, t, o), (0 > r || null == r) && (r = e.style[t]), at.test(r)) return r;
                    i = a && (pe.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
                }
                return r + L(e, t, n || (a ? "border" : "content"), i, o) + "px"
            }

            function D(e, t, n, r, i) {
                return new D.prototype.init(e, t, n, r, i)
            }

            function R() {
                ht && (e.requestAnimationFrame(R), he.fx.tick())
            }

            function q() {
                return e.setTimeout(function() {
                    dt = void 0
                }), dt = he.now()
            }

            function H(e, t) {
                var n, r = 0,
                    i = {
                        height: e
                    };
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = $e[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function $(e, t, n) {
                for (var r, i = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = i.length; a > o; o++)
                    if (r = i[o].call(n, t, e)) return r
            }

            function B(e, t, n) {
                var r, i, o, a, s, u, c, l, f = "width" in t || "height" in t,
                    p = this,
                    d = {},
                    h = e.style,
                    m = e.nodeType && Be(e),
                    y = Le.get(e, "fxshow");
                n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (i = t[r], mt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                            if ("show" !== i || !y || void 0 === y[r]) continue;
                            m = !0
                        }
                        d[r] = y && y[r] || he.style(e, r)
                    }
                if (u = !he.isEmptyObject(t), u || !he.isEmptyObject(d)) {
                    f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = y && y.display, null == c && (c = Le.get(e, "display")), l = he.css(e, "display"), "none" === l && (c ? l = c : (g([e], !0), c = e.style.display || c, l = he.css(e, "display"), g([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === he.css(e, "float") && (u || (p.done(function() {
                        h.display = c
                    }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1;
                    for (r in d) u || (y ? "hidden" in y && (m = y.hidden) : y = Le.access(e, "fxshow", {
                        display: c
                    }), o && (y.hidden = !m), m && g([e], !0), p.done(function() {
                        m || g([e]), Le.remove(e, "fxshow");
                        for (r in d) he.style(e, r, d[r])
                    })), u = $(m ? y[r] : 0, r, p), r in y || (y[r] = u.start, m && (u.end = u.start, u.start = 0))
                }
            }

            function V(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = he.camelCase(n), i = t[r], o = e[n], he.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = he.cssHooks[r], a && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }

            function W(e, t, n) {
                var r, i, o = 0,
                    a = W.prefilters.length,
                    s = he.Deferred().always(function() {
                        delete u.elem
                    }),
                    u = function() {
                        if (i) return !1;
                        for (var t = dt || q(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
                        return s.notifyWith(e, [c, o, n]), 1 > o && u ? n : (s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: he.extend({}, t),
                        opts: he.extend(!0, {
                            specialEasing: {},
                            easing: he.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: dt || q(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? c.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; r > n; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    l = c.props;
                for (V(l, c.opts.specialEasing); a > o; o++)
                    if (r = W.prefilters[o].call(c, e, l, c.opts)) return he.isFunction(r.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(r.stop, r)), r;
                return he.map(l, $, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(u, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function z(e) {
                var t = e.match(Ne) || [];
                return t.join(" ")
            }

            function U(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function G(e, t, n, r) {
                var i;
                if (he.isArray(t)) he.each(t, function(t, i) {
                    n || kt.test(e) ? r(e, i) : G(e + "[" + ("object" === ("undefined" == typeof i ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r)
                });
                else if (n || "object" !== he.type(t)) r(e, t);
                else
                    for (i in t) G(e + "[" + i + "]", t[i], n, r)
            }

            function X(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, i = 0,
                        o = t.toLowerCase().match(Ne) || [];
                    if (he.isFunction(n))
                        for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function J(e, t, n, r) {
                function i(s) {
                    var u;
                    return o[s] = !0, he.each(e[s] || [], function(e, s) {
                        var c = s(t, n, r);
                        return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
                    }), u
                }
                var o = {},
                    a = e === Rt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }

            function Y(e, t) {
                var n, r, i = he.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && he.extend(!0, e, r), e
            }

            function Z(e, t, n) {
                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                    "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                    for (i in s)
                        if (s[i] && s[i].test(r)) {
                            u.unshift(i);
                            break
                        }
                if (u[0] in n) o = u[0];
                else {
                    for (i in n) {
                        if (!u[0] || e.converters[i + " " + u[0]]) {
                            o = i;
                            break
                        }
                        a || (a = i)
                    }
                    o = o || a
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
            }

            function Q(e, t, n, r) {
                var i, o, a, s, u, c = {},
                    l = e.dataTypes.slice();
                if (l[1])
                    for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                for (o = l.shift(); o;)
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                        if ("*" === o) o = u;
                        else if ("*" !== u && u !== o) {
                    if (a = c[u + " " + o] || c["* " + o], !a)
                        for (i in c)
                            if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                                a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e.throws) t = a(t);
                        else try {
                            t = a(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + u + " to " + o
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function K(e) {
                return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            var ee = [],
                te = e.document,
                ne = Object.getPrototypeOf,
                re = ee.slice,
                ie = ee.concat,
                oe = ee.push,
                ae = ee.indexOf,
                se = {},
                ue = se.toString,
                ce = se.hasOwnProperty,
                le = ce.toString,
                fe = le.call(Object),
                pe = {},
                de = "3.1.1",
                he = function e(t, n) {
                    return new e.fn.init(t, n)
                },
                me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ge = /^-ms-/,
                ye = /-([a-z])/g,
                ve = function(e, t) {
                    return t.toUpperCase()
                };
            he.fn = he.prototype = {
                jquery: de,
                constructor: he,
                length: 0,
                toArray: function() {
                    return re.call(this)
                },
                get: function(e) {
                    return null == e ? re.call(this) : 0 > e ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = he.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return he.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(he.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(re.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: oe,
                sort: ee.sort,
                splice: ee.splice
            }, he.extend = he.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" === ("undefined" == typeof a ? "undefined" : _typeof(a)) || he.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) n = a[t], r = e[t], a !== r && (c && r && (he.isPlainObject(r) || (i = he.isArray(r))) ? (i ? (i = !1, o = n && he.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(c, o, r)) : void 0 !== r && (a[t] = r));
                return a
            }, he.extend({
                expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === he.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = he.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return e && "[object Object]" === ue.call(e) ? (t = ne(e)) ? (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && le.call(n) === fe) : !0 : !1
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                type: function(e) {
                    return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e ? se[ue.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof(e)
                },
                globalEval: function(e) {
                    n(e)
                },
                camelCase: function(e) {
                    return e.replace(ge, "ms-").replace(ye, ve)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (r(e))
                        for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++);
                    else
                        for (i in e)
                            if (t.call(e[i], i, e[i]) === !1) break; return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(me, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (r(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : ae.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
                    return i
                },
                map: function(e, t, n) {
                    var i, o, a = 0,
                        s = [];
                    if (r(e))
                        for (i = e.length; i > a; a++) o = t(e[a], a, n), null != o && s.push(o);
                    else
                        for (a in e) o = t(e[a], a, n), null != o && s.push(o);
                    return ie.apply([], s)
                },
                guid: 1,
                proxy: function e(t, n) {
                    var r, i, e;
                    return "string" == typeof n && (r = t[n], n = t, t = r), he.isFunction(t) ? (i = re.call(arguments, 2), e = function() {
                        return t.apply(n || this, i.concat(re.call(arguments)))
                    }, e.guid = t.guid = t.guid || he.guid++, e) : void 0
                },
                now: Date.now,
                support: pe
            }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                se["[object " + t + "]"] = t.toLowerCase()
            });
            var be = function(e) {
                function t(e, t, n, r) {
                    var i, o, a, s, u, c, l, p = t && t.ownerDocument,
                        h = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                    if (!r && ((t ? t.ownerDocument || t : $) !== I && P(t), t = t || I, L)) {
                        if (11 !== h && (u = ye.exec(e)))
                            if (i = u[1]) {
                                if (9 === h) {
                                    if (!(a = t.getElementById(i))) return n;
                                    if (a.id === i) return n.push(a), n
                                } else if (p && (a = p.getElementById(i)) && q(t, a) && a.id === i) return n.push(a), n
                            } else {
                                if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                            }
                        if (!(!T.qsa || U[e + " "] || F && F.test(e))) {
                            if (1 !== h) p = t, l = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(xe, Te) : t.setAttribute("id", s = H), c = k(e), o = c.length; o--;) c[o] = "#" + s + " " + d(c[o]);
                                l = c.join(","), p = ve.test(e) && f(t.parentNode) || t
                            }
                            if (l) try {
                                return Q.apply(n, p.querySelectorAll(l)), n
                            } catch (e) {} finally {
                                s === H && t.removeAttribute("id")
                            }
                        }
                    }
                    return A(e.replace(se, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > O.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[H] = !0, e
                }

                function i(e) {
                    var t = I.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) O.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1
                    }
                }

                function l(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function f(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function p() {}

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        i = t.next,
                        o = i || r,
                        a = n && "parentNode" === o,
                        s = V++;
                    return t.first ? function(t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || a) return e(t, n, i);
                        return !1
                    } : function(t, n, u) {
                        var c, l, f, p = [B, s];
                        if (u) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || a)
                                    if (f = t[H] || (t[H] = {}), l = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((c = l[o]) && c[0] === B && c[1] === s) return p[2] = c[2];
                                        if (l[o] = p, p[2] = e(t, n, u)) return !0
                                    } return !1
                    }
                }

                function m(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                    return r
                }

                function y(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
                    return a
                }

                function v(e, t, n, i, o, a) {
                    return i && !i[H] && (i = v(i)), o && !o[H] && (o = v(o, a)), r(function(r, a, s, u) {
                        var c, l, f, p = [],
                            d = [],
                            h = a.length,
                            m = r || g(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !r && t ? m : y(m, p, e, s, u),
                            b = n ? o || (r ? e : h || i) ? [] : a : v;
                        if (n && n(v, b, s, u), i)
                            for (c = y(b, d), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (b[d[l]] = !(v[d[l]] = f));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], l = b.length; l--;)(f = b[l]) && c.push(v[l] = f);
                                    o(null, b = [], c, u)
                                }
                                for (l = b.length; l--;)(f = b[l]) && (c = o ? ee(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
                            }
                        } else b = y(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Q.apply(a, b)
                    })
                }

                function b(e) {
                    for (var t, n, r, i = e.length, o = O.relative[e[0].type], a = o || O.relative[" "], s = o ? 1 : 0, u = h(function(e) {
                            return e === t
                        }, a, !0), c = h(function(e) {
                            return ee(t, e) > -1
                        }, a, !0), l = [function(e, n, r) {
                            var i = !o && (r || n !== E) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                            return t = null, i
                        }]; i > s; s++)
                        if (n = O.relative[e[s].type]) l = [h(m(l), n)];
                        else {
                            if (n = O.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (r = ++s; i > r && !O.relative[e[r].type]; r++);
                                return v(s > 1 && m(l), s > 1 && d(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(se, "$1"), n, r > s && b(e.slice(s, r)), i > r && b(e = e.slice(r)), i > r && d(e))
                            }
                            l.push(n)
                        }
                    return m(l)
                }

                function w(e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function(r, a, s, u, c) {
                            var l, f, p, d = 0,
                                h = "0",
                                m = r && [],
                                g = [],
                                v = E,
                                b = r || o && O.find.TAG("*", c),
                                w = B += null == v ? 1 : Math.random() || .1,
                                x = b.length;
                            for (c && (E = a === I || a || c); h !== x && null != (l = b[h]); h++) {
                                if (o && l) {
                                    for (f = 0, a || l.ownerDocument === I || (P(l), s = !L); p = e[f++];)
                                        if (p(l, a || I, s)) {
                                            u.push(l);
                                            break
                                        }
                                    c && (B = w)
                                }
                                i && ((l = !p && l) && d--, r && m.push(l))
                            }
                            if (d += h, i && h !== d) {
                                for (f = 0; p = n[f++];) p(m, g, a, s);
                                if (r) {
                                    if (d > 0)
                                        for (; h--;) m[h] || g[h] || (g[h] = Y.call(u));
                                    g = y(g)
                                }
                                Q.apply(u, g), c && !r && g.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                            }
                            return c && (B = w, E = v), m
                        };
                    return i ? r(a) : a
                }
                var x, T, O, S, j, k, C, A, E, N, _, P, I, M, L, F, D, R, q, H = "sizzle" + 1 * new Date,
                    $ = e.document,
                    B = 0,
                    V = 0,
                    W = n(),
                    z = n(),
                    U = n(),
                    G = function(e, t) {
                        return e === t && (_ = !0), 0
                    },
                    X = {}.hasOwnProperty,
                    J = [],
                    Y = J.pop,
                    Z = J.push,
                    Q = J.push,
                    K = J.slice,
                    ee = function(e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
                    ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                    oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                    ae = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    ue = new RegExp("^" + ne + "*," + ne + "*"),
                    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    fe = new RegExp(oe),
                    pe = new RegExp("^" + re + "$"),
                    de = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + ie),
                        PSEUDO: new RegExp("^" + oe),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    me = /^h\d$/i,
                    ge = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    we = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Te = function(e, t) {
                        return t ? "\x00" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    Oe = function() {
                        P()
                    },
                    Se = h(function(e) {
                        return e.disabled === !0 && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Q.apply(J = K.call($.childNodes), $.childNodes), J[$.childNodes.length].nodeType
                } catch (e) {
                    Q = {
                        apply: J.length ? function(e, t) {
                            Z.apply(e, K.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                T = t.support = {}, j = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, P = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : $;
                    return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, M = I.documentElement, L = !j(I), $ !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Oe, !1) : n.attachEvent && n.attachEvent("onunload", Oe)), T.attributes = i(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), T.getElementsByTagName = i(function(e) {
                        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                    }), T.getElementsByClassName = ge.test(I.getElementsByClassName), T.getById = i(function(e) {
                        return M.appendChild(e).id = H, !I.getElementsByName || !I.getElementsByName(H).length
                    }), T.getById ? (O.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, O.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && L) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (O.filter.ID = function(e) {
                        var t = e.replace(be, we);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }, O.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && L) {
                            var n, r, i, o = t.getElementById(e);
                            if (o) {
                                if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                                for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                    if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                            }
                            return []
                        }
                    }), O.find.TAG = T.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, O.find.CLASS = T.getElementsByClassName && function(e, t) {
                        return "undefined" != typeof t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0
                    }, D = [], F = [], (T.qsa = ge.test(I.querySelectorAll)) && (i(function(e) {
                        M.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || F.push(".#.+[+~]")
                    }), i(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), M.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (T.matchesSelector = ge.test(R = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function(e) {
                        T.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), D.push("!=", oe)
                    }), F = F.length && new RegExp(F.join("|")), D = D.length && new RegExp(D.join("|")), t = ge.test(M.compareDocumentPosition), q = t || ge.test(M.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, G = t ? function(e, t) {
                        if (e === t) return _ = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === $ && q($, e) ? -1 : t === I || t.ownerDocument === $ && q($, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return _ = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            o = t.parentNode,
                            s = [e],
                            u = [t];
                        if (!i || !o) return e === I ? -1 : t === I ? 1 : i ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                        if (i === o) return a(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; s[r] === u[r];) r++;
                        return r ? a(s[r], u[r]) : s[r] === $ ? -1 : u[r] === $ ? 1 : 0
                    }, I) : I
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== I && P(e), n = n.replace(le, "='$1']"), !(!T.matchesSelector || !L || U[n + " "] || D && D.test(n) || F && F.test(n))) try {
                        var r = R.call(e, n);
                        if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (e) {}
                    return t(n, I, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== I && P(e), q(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== I && P(e);
                    var n = O.attrHandle[t.toLowerCase()],
                        r = n && X.call(O.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                    return void 0 !== r ? r : T.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.escape = function(e) {
                    return (e + "").replace(xe, Te)
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (_ = !T.detectDuplicates, N = !T.sortStable && e.slice(0), e.sort(G), _) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return N = null, e
                }, S = t.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += S(t);
                    return n
                }, O = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: de,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we),
                                "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(be, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = W[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var c, l, f, p, d, h, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !u && !s,
                                    b = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (p = t; p = p[m];)
                                                if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                        for (p = g, f = p[H] || (p[H] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], d = c[0] === B && c[1], b = d && c[2], p = d && g.childNodes[d]; p = ++d && p && p[m] || (b = d = 0) || h.pop();)
                                            if (1 === p.nodeType && ++b && p === t) {
                                                l[e] = [B, d, b];
                                                break
                                            }
                                    } else if (v && (p = t, f = p[H] || (p[H] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[e] || [], d = c[0] === B && c[1], b = d), b === !1)
                                        for (;
                                            (p = ++d && p && p[m] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && (f = p[H] || (p[H] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), l[e] = [B, b]), p !== t)););
                                    return b -= i, b === r || b % r === 0 && b / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var i, o = O.pseudos[e] || O.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], O.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
                            }) : function(e) {
                                return o(e, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = C(e.replace(se, "$1"));
                            return i[H] ? r(function(e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(be, we),
                                function(t) {
                                    return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function(e) {
                            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === M
                        },
                        focus: function(e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: c(!1),
                        disabled: c(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !O.pseudos.empty(e)
                        },
                        header: function(e) {
                            return me.test(e.nodeName)
                        },
                        input: function(e) {
                            return he.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, O.pseudos.nth = O.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) O.pseudos[x] = s(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) O.pseudos[x] = u(x);
                return p.prototype = O.filters = O.pseudos, O.setFilters = new p, k = t.tokenize = function(e, n) {
                    var r, i, o, a, s, u, c, l = z[e + " "];
                    if (l) return n ? 0 : l.slice(0);
                    for (s = e, u = [], c = O.preFilter; s;) {
                        (!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(se, " ")
                        }), s = s.slice(r.length));
                        for (a in O.filter) !(i = de[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : z(e, u).slice(0)
                }, C = t.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = U[e + " "];
                    if (!o) {
                        for (t || (t = k(e)), n = t.length; n--;) o = b(t[n]), o[H] ? r.push(o) : i.push(o);
                        o = U(e, w(i, r)), o.selector = e
                    }
                    return o
                }, A = t.select = function(e, t, n, r) {
                    var i, o, a, s, u, c = "function" == typeof e && e,
                        l = !r && k(e = c.selector || e);
                    if (n = n || [], 1 === l.length) {
                        if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && O.relative[o[1].type]) {
                            if (t = (O.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !O.relative[s = a.type]);)
                            if ((u = O.find[s]) && (r = u(a.matches[0].replace(be, we), ve.test(o[0].type) && f(t.parentNode) || t))) {
                                if (o.splice(i, 1), e = r.length && d(o), !e) return Q.apply(n, r), n;
                                break
                            }
                    }
                    return (c || C(e, l))(r, t, !L, n, !t || ve.test(e) && f(t.parentNode) || t), n
                }, T.sortStable = H.split("").sort(G).join("") === H, T.detectDuplicates = !!_, P(), T.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
                }), i(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), T.attributes && i(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(e);
            he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
            var we = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && he(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                xe = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                Te = he.expr.match.needsContext,
                Oe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                Se = /^.[^:#\[\.,]*$/;
            he.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, he.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                        i = this;
                    if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                        for (t = 0; r > t; t++)
                            if (he.contains(i[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; r > t; t++) he.find(e, i[t], n);
                    return r > 1 ? he.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(i(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(i(this, e || [], !0))
                },
                is: function(e) {
                    return !!i(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
                }
            });
            var je, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                Ce = he.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e) return this;
                    if (n = n || je, "string" == typeof e) {
                        if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Oe.test(r[1]) && he.isPlainObject(t))
                                for (r in t) he.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return i = te.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
                };
            Ce.prototype = he.fn, je = he(te);
            var Ae = /^(?:parents|prev(?:Until|All))/,
                Ee = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            he.fn.extend({
                has: function(e) {
                    var t = he(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; n > e; e++)
                            if (he.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof e && he(e);
                    if (!Te.test(e))
                        for (; i > r; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), he.each({
                parent: function e(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(e) {
                    return we(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return we(e, "parentNode", n)
                },
                next: function(e) {
                    return o(e, "nextSibling")
                },
                prev: function(e) {
                    return o(e, "previousSibling")
                },
                nextAll: function(e) {
                    return we(e, "nextSibling")
                },
                prevAll: function(e) {
                    return we(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return we(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return we(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return xe((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return xe(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || he.merge([], e.childNodes)
                }
            }, function(e, t) {
                he.fn[e] = function(n, r) {
                    var i = he.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = he.filter(r, i)), this.length > 1 && (Ee[e] || he.uniqueSort(i), Ae.test(e) && i.reverse()), this.pushStack(i)
                }
            });
            var Ne = /[^\x20\t\r\n\f]+/g;
            he.Callbacks = function(e) {
                e = "string" == typeof e ? a(e) : he.extend({}, e);
                var t, n, r, i, o = [],
                    s = [],
                    u = -1,
                    c = function() {
                        for (i = e.once, r = t = !0; s.length; u = -1)
                            for (n = s.shift(); ++u < o.length;) o[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = o.length, n = !1);
                        e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                    },
                    l = {
                        add: function() {
                            return o && (n && !t && (u = o.length - 1, s.push(n)), function t(n) {
                                he.each(n, function(n, r) {
                                    he.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== he.type(r) && t(r)
                                })
                            }(arguments), n && !t && c()), this
                        },
                        remove: function() {
                            return he.each(arguments, function(e, t) {
                                for (var n;
                                    (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), u >= n && u--
                            }), this
                        },
                        has: function(e) {
                            return e ? he.inArray(e, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []), this
                        },
                        disable: function() {
                            return i = s = [], o = n = "", this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return i = s = [], n || t || (o = n = ""), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return l
            }, he.extend({
                Deferred: function(t) {
                    var n = [
                            ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                            ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        i = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return i.then(null, e)
                            },
                            pipe: function() {
                                var e = arguments;
                                return he.Deferred(function(t) {
                                    he.each(n, function(n, r) {
                                        var i = he.isFunction(e[r[4]]) && e[r[4]];
                                        o[r[1]](function() {
                                            var e = i && i.apply(this, arguments);
                                            e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, r, i) {
                                function o(t, n, r, i) {
                                    return function() {
                                        var c = this,
                                            l = arguments,
                                            f = function() {
                                                var e, f;
                                                if (!(a > t)) {
                                                    if (e = r.apply(c, l), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    f = e && ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, he.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++, f.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (c = void 0, l = [e]), (i || n.resolveWith)(c, l))
                                                }
                                            },
                                            p = i ? f : function() {
                                                try {
                                                    f()
                                                } catch (e) {
                                                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== u && (c = void 0, l = [e]), n.rejectWith(c, l))
                                                }
                                            };
                                        t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
                                    }
                                }
                                var a = 0;
                                return he.Deferred(function(e) {
                                    n[0][3].add(o(0, e, he.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : s)), n[2][3].add(o(0, e, he.isFunction(r) ? r : u))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? he.extend(e, i) : i
                            }
                        },
                        o = {};
                    return he.each(n, function(e, t) {
                        var a = t[2],
                            s = t[5];
                        i[t[1]] = a.add, s && a.add(function() {
                            r = s
                        }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                        }, o[t[0] + "With"] = a.fireWith
                    }), i.promise(o), t && t.call(o, o), o
                },
                when: function(e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = re.call(arguments),
                        o = he.Deferred(),
                        a = function(e) {
                            return function(n) {
                                r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i)
                            }
                        };
                    if (1 >= t && (c(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || he.isFunction(i[n] && i[n].then))) return o.then();
                    for (; n--;) c(i[n], a(n), o.reject);
                    return o.promise()
                }
            });
            var _e = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            he.Deferred.exceptionHook = function(t, n) {
                e.console && e.console.warn && t && _e.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, he.readyException = function(t) {
                e.setTimeout(function() {
                    throw t
                })
            };
            var Pe = he.Deferred();
            he.fn.ready = function(e) {
                return Pe.then(e).catch(function(e) {
                    he.readyException(e)
                }), this
            }, he.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? he.readyWait++ : he.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Pe.resolveWith(te, [he]))
                }
            }), he.ready.then = Pe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
            var Ie = function e(t, n, r, i, o, a, s) {
                    var u = 0,
                        c = t.length,
                        l = null == r;
                    if ("object" === he.type(r)) {
                        o = !0;
                        for (u in r) e(t, n, u, r[u], !0, a, s)
                    } else if (void 0 !== i && (o = !0, he.isFunction(i) || (s = !0), l && (s ? (n.call(t, i), n = null) : (l = n, n = function(e, t, n) {
                            return l.call(he(e), n)
                        })), n))
                        for (; c > u; u++) n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
                    return o ? t : l ? n.call(t) : c ? n(t[0], r) : a
                },
                Me = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };
            f.uid = 1, f.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var r, i = this.cache(e);
                    if ("string" == typeof t) i[he.camelCase(t)] = n;
                    else
                        for (r in t) i[he.camelCase(r)] = t[r];
                    return i
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in r ? [t] : t.match(Ne) || []), n = t.length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !he.isEmptyObject(t)
                }
            };
            var Le = new f,
                Fe = new f,
                De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Re = /[A-Z]/g;
            he.extend({
                hasData: function(e) {
                    return Fe.hasData(e) || Le.hasData(e)
                },
                data: function(e, t, n) {
                    return Fe.access(e, t, n)
                },
                removeData: function(e, t) {
                    Fe.remove(e, t)
                },
                _data: function(e, t, n) {
                    return Le.access(e, t, n)
                },
                _removeData: function(e, t) {
                    Le.remove(e, t)
                }
            }), he.fn.extend({
                data: function e(t, n) {
                    var r, i, e, o = this[0],
                        a = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (e = Fe.get(o), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                            for (r = a.length; r--;) a[r] && (i = a[r].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), d(o, i, e[i])));
                            Le.set(o, "hasDataAttrs", !0)
                        }
                        return e
                    }
                    return "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) ? this.each(function() {
                        Fe.set(this, t)
                    }) : Ie(this, function(e) {
                        var n;
                        if (o && void 0 === e) {
                            if (n = Fe.get(o, t), void 0 !== n) return n;
                            if (n = d(o, t), void 0 !== n) return n
                        } else this.each(function() {
                            Fe.set(this, t, e)
                        })
                    }, null, n, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Fe.remove(this, e)
                    })
                }
            }), he.extend({
                queue: function e(t, n, r) {
                    var e;
                    return t ? (n = (n || "fx") + "queue", e = Le.get(t, n), r && (!e || he.isArray(r) ? e = Le.access(t, n, he.makeArray(r)) : e.push(r)), e || []) : void 0
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = he.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        o = he._queueHooks(e, t),
                        a = function() {
                            he.dequeue(e, t)
                        };
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return Le.get(e, n) || Le.access(e, n, {
                        empty: he.Callbacks("once memory").add(function() {
                            Le.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), he.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = he.queue(this, e, t);
                        he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        he.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = he.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --r || i.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Le.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(t)
                }
            });
            var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                He = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
                $e = ["Top", "Right", "Bottom", "Left"],
                Be = function(e, t) {
                    return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
                },
                Ve = function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i
                },
                We = {};
            he.fn.extend({
                show: function() {
                    return g(this, !0)
                },
                hide: function() {
                    return g(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Be(this) ? he(this).show() : he(this).hide()
                    })
                }
            });
            var ze = /^(?:checkbox|radio)$/i,
                Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                Ge = /^$|\/(?:java|ecma)script/i,
                Xe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
            var Je = /<|&#?\w+;/;
            ! function() {
                var e = te.createDocumentFragment(),
                    t = e.appendChild(te.createElement("div")),
                    n = te.createElement("input");
                n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var Ye = te.documentElement,
                Ze = /^key/,
                Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ke = /^([^.]*)(?:\.(.+)|)/;
            he.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, p, d, h, m, g = Le.get(e);
                    if (g)
                        for (n.handler && (o = n, n = o.handler, i = o.selector), i && he.find.matchesSelector(Ye, i), n.guid || (n.guid = he.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
                                return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                            }), t = (t || "").match(Ne) || [""], c = t.length; c--;) s = Ke.exec(t[c]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d && (f = he.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = he.event.special[d] || {}, l = he.extend({
                            type: d,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && he.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), he.event.global[d] = !0)
                },
                remove: function(e, t, n, r, i) {
                    var o, a, s, u, c, l, f, p, d, h, m, g = Le.hasData(e) && Le.get(e);
                    if (g && (u = g.events)) {
                        for (t = (t || "").match(Ne) || [""], c = t.length; c--;)
                            if (s = Ke.exec(t[c]) || [], d = m = s[1], h = (s[2] || "").split(".").sort(), d) {
                                for (f = he.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                                a && !p.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || he.removeEvent(e, d, g.handle), delete u[d])
                            } else
                                for (d in u) he.event.remove(e, d + t[c], n, r, !0);
                        he.isEmptyObject(u) && Le.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, i, o, a, s = he.event.fix(e),
                        u = new Array(arguments.length),
                        c = (Le.get(this, "events") || {})[s.type] || [],
                        l = he.event.special[s.type] || {};
                    for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                    if (s.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, s) !== !1) {
                        for (a = he.event.handlers.call(this, s, c), t = 0;
                            (i = a[t++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)(!s.rnamespace || s.rnamespace.test(o.namespace)) && (s.handleObj = o, s.data = o.data, r = ((he.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, a, s = [],
                        u = t.delegateCount,
                        c = e.target;
                    if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                                for (o = [], a = {}, n = 0; u > n; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? he(i, this).index(c) > -1 : he.find(i, this, null, [c]).length), a[i] && o.push(r);
                                o.length && s.push({
                                    elem: c,
                                    handlers: o
                                })
                            }
                    return c = this, u < t.length && s.push({
                        elem: c,
                        handlers: t.slice(u)
                    }), s
                },
                addProp: function(e, t) {
                    Object.defineProperty(he.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: he.isFunction(t) ? function() {
                            return this.originalEvent ? t(this.originalEvent) : void 0
                        } : function() {
                            return this.originalEvent ? this.originalEvent[e] : void 0
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[he.expando] ? e : new he.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== T() && this.focus ? (this.focus(), !1) : void 0
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === T() && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && he.nodeName(this, "input") ? (this.click(), !1) : void 0
                        },
                        _default: function(e) {
                            return he.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, he.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, he.Event = function(e, t) {
                return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
            }, he.Event.prototype = {
                constructor: he.Event,
                isDefaultPrevented: x,
                isPropagationStopped: x,
                isImmediatePropagationStopped: x,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, he.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, he.event.addProp), he.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                he.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (!i || i !== r && !he.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), he.fn.extend({
                on: function(e, t, n, r) {
                    return O(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return O(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = x), this.each(function() {
                        he.event.remove(this, e, n, t)
                    })
                }
            });
            var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                tt = /<script|<style|<link/i,
                nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                rt = /^true\/(.*)/,
                it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            he.extend({
                htmlPrefilter: function(e) {
                    return e.replace(et, "<$1></$2>")
                },
                clone: function e(t, n, r) {
                    var i, o, a, s, e = t.cloneNode(!0),
                        u = he.contains(t.ownerDocument, t);
                    if (!(pe.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || he.isXMLDoc(t)))
                        for (s = y(e), a = y(t), i = 0, o = a.length; o > i; i++) A(a[i], s[i]);
                    if (n)
                        if (r)
                            for (a = a || y(t), s = s || y(e), i = 0, o = a.length; o > i; i++) C(a[i], s[i]);
                        else C(t, e);
                    return s = y(e, "script"), s.length > 0 && v(s, !u && y(t, "script")), e
                },
                cleanData: function(e) {
                    for (var t, n, r, i = he.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Me(n)) {
                            if (t = n[Le.expando]) {
                                if (t.events)
                                    for (r in t.events) i[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                                n[Le.expando] = void 0
                            }
                            n[Fe.expando] && (n[Fe.expando] = void 0)
                        }
                }
            }), he.fn.extend({
                detach: function(e) {
                    return N(this, e, !0)
                },
                remove: function(e) {
                    return N(this, e)
                },
                text: function(e) {
                    return Ie(this, function(e) {
                        return void 0 === e ? he.text(this) : this.empty().each(function() {
                            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return E(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = S(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return E(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = S(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return E(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return E(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return he.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return Ie(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !tt.test(e) && !Xe[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = he.htmlPrefilter(e);
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return E(this, arguments, function(t) {
                        var n = this.parentNode;
                        he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), he.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                he.fn[e] = function(e) {
                    for (var n, r = [], i = he(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), he(i[a])[t](n), oe.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var ot = /^margin/,
                at = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
                st = function(t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                };
            ! function() {
                function t() {
                    if (s) {
                        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ye.appendChild(a);
                        var t = e.getComputedStyle(s);
                        n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, Ye.removeChild(a), s = null
                    }
                }
                var n, r, i, o, a = te.createElement("div"),
                    s = te.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(pe, {
                    pixelPosition: function() {
                        return t(), n
                    },
                    boxSizingReliable: function() {
                        return t(), r
                    },
                    pixelMarginRight: function() {
                        return t(), i
                    },
                    reliableMarginLeft: function() {
                        return t(), o
                    }
                }))
            }();
            var ut = /^(none|table(?!-c[ea]).+)/,
                ct = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                lt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                ft = ["Webkit", "Moz", "ms"],
                pt = te.createElement("div").style;
            he.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = _(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function e(t, n, r, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, a, s, u = he.camelCase(n),
                            e = t.style;
                        return n = he.cssProps[u] || (he.cssProps[u] = I(u) || u), s = he.cssHooks[n] || he.cssHooks[u], void 0 === r ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : e[n] : (a = "undefined" == typeof r ? "undefined" : _typeof(r), "string" === a && (o = He.exec(r)) && o[1] && (r = h(t, n, o), a = "number"), null != r && r === r && ("number" === a && (r += o && o[3] || (he.cssNumber[u] ? "" : "px")), pe.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (e[n] = "inherit"), s && "set" in s && void 0 === (r = s.set(t, r, i)) || (e[n] = r)), void 0)
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, a, s = he.camelCase(t);
                    return t = he.cssProps[s] || (he.cssProps[s] = I(s) || s), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _(e, t, r)), "normal" === i && t in lt && (i = lt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
                }
            }), he.each(["height", "width"], function(e, t) {
                he.cssHooks[t] = {
                    get: function(e, n, r) {
                        return n ? !ut.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, r) : Ve(e, ct, function() {
                            return F(e, t, r)
                        }) : void 0
                    },
                    set: function(e, n, r) {
                        var i, o = r && st(e),
                            a = r && L(e, t, r, "border-box" === he.css(e, "boxSizing", !1, o), o);
                        return a && (i = He.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = he.css(e, t)), M(e, n, a)
                    }
                }
            }), he.cssHooks.marginLeft = P(pe.reliableMarginLeft, function(e, t) {
                return t ? (parseFloat(_(e, "marginLeft")) || e.getBoundingClientRect().left - Ve(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px" : void 0
            }), he.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                he.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + $e[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, ot.test(e) || (he.cssHooks[e + t].set = M)
            }), he.fn.extend({
                css: function(e, t) {
                    return Ie(this, function(e, t, n) {
                        var r, i, o = {},
                            a = 0;
                        if (he.isArray(t)) {
                            for (r = st(e), i = t.length; i > a; a++) o[t[a]] = he.css(e, t[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), he.Tween = D, D.prototype = {
                constructor: D,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (he.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = D.propHooks[this.prop];
                    return e && e.get ? e.get(this) : D.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = D.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
                }
            }, D.prototype.init.prototype = D.prototype, D.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, he.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, he.fx = D.prototype.init, he.fx.step = {};
            var dt, ht, mt = /^(?:toggle|show|hide)$/,
                gt = /queueHooks$/;
            he.Animation = he.extend(W, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return h(n.elem, e, He.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                        for (var n, r = 0, i = e.length; i > r; r++) n = e[r], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
                    },
                    prefilters: [B],
                    prefilter: function(e, t) {
                        t ? W.prefilters.unshift(e) : W.prefilters.push(e)
                    }
                }), he.speed = function(e, t, n) {
                    var r = e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? he.extend({}, e) : {
                        complete: n || !n && t || he.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !he.isFunction(t) && t
                    };
                    return he.fx.off || te.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration = r.duration in he.fx.speeds ? he.fx.speeds[r.duration] : he.fx.speeds._default), (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        he.isFunction(r.old) && r.old.call(this), r.queue && he.dequeue(this, r.queue)
                    }, r
                }, he.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(Be).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = he.isEmptyObject(e),
                            o = he.speed(t, n, r),
                            a = function() {
                                var t = W(this, he.extend({}, e), o);
                                (i || Le.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = he.timers,
                                a = Le.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else
                                for (i in a) a[i] && a[i].stop && gt.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            (t || !n) && he.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = Le.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = he.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, he.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), he.each(["toggle", "show", "hide"], function(e, t) {
                    var n = he.fn[t];
                    he.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, r, i)
                    }
                }), he.each({
                    slideDown: H("show"),
                    slideUp: H("hide"),
                    slideToggle: H("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    he.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), he.timers = [], he.fx.tick = function() {
                    var e, t = 0,
                        n = he.timers;
                    for (dt = he.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                    n.length || he.fx.stop(), dt = void 0
                }, he.fx.timer = function(e) {
                    he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
                }, he.fx.interval = 13, he.fx.start = function() {
                    ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setInterval(he.fx.tick, he.fx.interval))
                }, he.fx.stop = function() {
                    e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
                }, he.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, he.fn.delay = function(t, n) {
                    return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function() {
                            e.clearTimeout(i)
                        }
                    })
                },
                function() {
                    var e = te.createElement("input"),
                        t = te.createElement("select"),
                        n = t.appendChild(te.createElement("option"));
                    e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
                }();
            var yt, vt = he.expr.attrHandle;
            he.fn.extend({
                attr: function(e, t) {
                    return Ie(this, he.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        he.removeAttr(this, e)
                    })
                }
            }), he.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (i = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = he.find.attr(e, t), null == r ? void 0 : r))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!pe.radioValue && "radio" === t && he.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                        i = t && t.match(Ne);
                    if (i && 1 === e.nodeType)
                        for (; n = i[r++];) e.removeAttribute(n)
                }
            }), yt = {
                set: function(e, t, n) {
                    return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = vt[t] || he.find.attr;
                vt[t] = function(e, t, r) {
                    var i, o, a = t.toLowerCase();
                    return r || (o = vt[a], vt[a] = i, i = null != n(e, t, r) ? a : null, vt[a] = o), i
                }
            });
            var bt = /^(?:input|select|textarea|button)$/i,
                wt = /^(?:a|area)$/i;
            he.fn.extend({
                prop: function(e, t) {
                    return Ie(this, he.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[he.propFix[e] || e]
                    })
                }
            }), he.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, i = he.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = he.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), pe.optSelected || (he.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                he.propFix[this.toLowerCase()] = this
            }), he.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (he.isFunction(e)) return this.each(function(t) {
                        he(this).addClass(e.call(this, t, U(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(Ne) || []; n = this[u++];)
                            if (i = U(n), r = 1 === n.nodeType && " " + z(i) + " ") {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                s = z(r), i !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, a, s, u = 0;
                    if (he.isFunction(e)) return this.each(function(t) {
                        he(this).removeClass(e.call(this, t, U(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Ne) || []; n = this[u++];)
                            if (i = U(n), r = 1 === n.nodeType && " " + z(i) + " ") {
                                for (a = 0; o = t[a++];)
                                    for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                s = z(r), i !== s && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = "undefined" == typeof e ? "undefined" : _typeof(e);
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(he.isFunction(e) ? function(n) {
                        he(this).toggleClass(e.call(this, n, U(this), t), t)
                    } : function() {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0, i = he(this), o = e.match(Ne) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else(void 0 === e || "boolean" === n) && (t = U(this), t && Le.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Le.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + z(U(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var xt = /\r/g;
            he.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0]; {
                        if (arguments.length) return r = he.isFunction(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, he(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : he.isArray(i) && (i = he.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                        if (i) return t = he.valHooks[i.type] || he.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
                    }
                }
            }), he.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = he.find.attr(e, "value");
                            return null != t ? t : z(he.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r, i = e.options,
                                o = e.selectedIndex,
                                a = "select-one" === e.type,
                                s = a ? null : [],
                                u = a ? o + 1 : i.length;
                            for (r = 0 > o ? u : a ? o : 0; u > r; r++)
                                if (n = i[r], !(!n.selected && r !== o || n.disabled || n.parentNode.disabled && he.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = he(n).val(), a) return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = he.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = he.inArray(he.valHooks.option.get(r), o) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), he.each(["radio", "checkbox"], function() {
                he.valHooks[this] = {
                    set: function(e, t) {
                        return he.isArray(t) ? e.checked = he.inArray(he(e).val(), t) > -1 : void 0
                    }
                }, pe.checkOn || (he.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var Tt = /^(?:focusinfocus|focusoutblur)$/;
            he.extend(he.event, {
                trigger: function(t, n, r, i) {
                    var o, a, s, u, c, l, f, p = [r || te],
                        d = ce.call(t, "type") ? t.type : t,
                        h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Tt.test(d + he.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[he.expando] ? t : new he.Event(d, "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                        if (!i && !f.noBubble && !he.isWindow(r)) {
                            for (u = f.delegateType || d, Tt.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
                            s === (r.ownerDocument || te) && p.push(s.defaultView || s.parentWindow || e)
                        }
                        for (o = 0;
                            (a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, l = (Le.get(a, "events") || {})[t.type] && Le.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Me(a) && (t.result = l.apply(a, n), t.result === !1 && t.preventDefault());
                        return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Me(r) || c && he.isFunction(r[d]) && !he.isWindow(r) && (s = r[c], s && (r[c] = null), he.event.triggered = d, r[d](), he.event.triggered = void 0, s && (r[c] = s)), t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = he.extend(new he.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    he.event.trigger(r, null, t)
                }
            }), he.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        he.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? he.event.trigger(e, t, n, !0) : void 0
                }
            }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                he.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), he.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), pe.focusin = "onfocusin" in e, pe.focusin || he.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    he.event.simulate(t, e.target, he.event.fix(e))
                };
                he.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = Le.access(r, t);
                        i || r.addEventListener(e, n, !0), Le.access(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = Le.access(r, t) - 1;
                        i ? Le.access(r, t, i) : (r.removeEventListener(e, n, !0), Le.remove(r, t))
                    }
                }
            });
            var Ot = e.location,
                St = he.now(),
                jt = /\?/;
            he.parseXML = function(t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return (!n || n.getElementsByTagName("parsererror").length) && he.error("Invalid XML: " + t), n
            };
            var kt = /\[\]$/,
                Ct = /\r?\n/g,
                At = /^(?:submit|button|image|reset|file)$/i,
                Et = /^(?:input|select|textarea|keygen)/i;
            he.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        var n = he.isFunction(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) G(n, e[n], t, i);
                return r.join("&")
            }, he.fn.extend({
                serialize: function() {
                    return he.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = he.prop(this, "elements");
                        return e ? he.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !he(this).is(":disabled") && Et.test(this.nodeName) && !At.test(e) && (this.checked || !ze.test(e))
                    }).map(function(e, t) {
                        var n = he(this).val();
                        return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Ct, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Ct, "\r\n")
                        }
                    }).get()
                }
            });
            var Nt = /%20/g,
                _t = /#.*$/,
                Pt = /([?&])_=[^&]*/,
                It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Lt = /^(?:GET|HEAD)$/,
                Ft = /^\/\//,
                Dt = {},
                Rt = {},
                qt = "*/".concat("*"),
                Ht = te.createElement("a");
            Ht.href = Ot.href, he.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ot.href,
                    type: "GET",
                    isLocal: Mt.test(Ot.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": qt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": he.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Y(Y(e, he.ajaxSettings), t) : Y(he.ajaxSettings, e)
                },
                ajaxPrefilter: X(Dt),
                ajaxTransport: X(Rt),
                ajax: function(t, n) {
                    function r(t, n, r, s) {
                        var c, p, d, w, x, T = n;
                        l || (l = !0, u && e.clearTimeout(u), i = void 0, a = s || "", O.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, r && (w = Z(h, O, r)), w = Q(h, w, O, c), c ? (h.ifModified && (x = O.getResponseHeader("Last-Modified"), x && (he.lastModified[o] = x), x = O.getResponseHeader("etag"), x && (he.etag[o] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, d = w.error, c = !d)) : (d = T, (t || !T) && (T = "error", 0 > t && (t = 0))), O.status = t, O.statusText = (n || T) + "", c ? y.resolveWith(m, [p, T, O]) : y.rejectWith(m, [O, T, d]), O.statusCode(b), b = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [O, h, c ? p : d]), v.fireWith(m, [O, T]), f && (g.trigger("ajaxComplete", [O, h]), --he.active || he.event.trigger("ajaxStop")))
                    }
                    "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
                    var i, o, a, s, u, c, l, f, p, d, h = he.ajaxSetup({}, n),
                        m = h.context || h,
                        g = h.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                        y = he.Deferred(),
                        v = he.Callbacks("once memory"),
                        b = h.statusCode || {},
                        w = {},
                        x = {},
                        T = "canceled",
                        O = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (l) {
                                    if (!s)
                                        for (s = {}; t = It.exec(a);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return l ? a : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == l && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == l && (h.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (l) O.always(e[O.status]);
                                    else
                                        for (t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || T;
                                return i && i.abort(t), r(0, t), this
                            }
                        };
                    if (y.promise(O), h.url = ((t || h.url || Ot.href) + "").replace(Ft, Ot.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                        c = te.createElement("a");
                        try {
                            c.href = h.url, c.href = c.href, h.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host
                        } catch (e) {
                            h.crossDomain = !0
                        }
                    }
                    if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), J(Dt, h, n, O), l) return O;
                    f = he.event && h.global, f && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Lt.test(h.type), o = h.url.replace(_t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (d = h.url.slice(o.length), h.data && (o += (jt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Pt, "$1"), d = (jt.test(o) ? "&" : "?") + "_=" + St++ + d), h.url = o + d), h.ifModified && (he.lastModified[o] && O.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && O.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && O.setRequestHeader("Content-Type", h.contentType), O.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]);
                    for (p in h.headers) O.setRequestHeader(p, h.headers[p]);
                    if (h.beforeSend && (h.beforeSend.call(m, O, h) === !1 || l)) return O.abort();
                    if (T = "abort", v.add(h.complete), O.done(h.success), O.fail(h.error), i = J(Rt, h, n, O)) {
                        if (O.readyState = 1, f && g.trigger("ajaxSend", [O, h]), l) return O;
                        h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                            O.abort("timeout")
                        }, h.timeout));
                        try {
                            l = !1, i.send(w, r)
                        } catch (e) {
                            if (l) throw e;
                            r(-1, e)
                        }
                    } else r(-1, "No Transport");
                    return O
                },
                getJSON: function(e, t, n) {
                    return he.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return he.get(e, void 0, t, "script")
                }
            }), he.each(["get", "post"], function(e, t) {
                he[t] = function(e, n, r, i) {
                    return he.isFunction(n) && (i = i || r, r = n, n = void 0), he.ajax(he.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, he.isPlainObject(e) && e))
                }
            }), he._evalUrl = function(e) {
                return he.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, he.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(e) {
                    return this.each(he.isFunction(e) ? function(t) {
                        he(this).wrapInner(e.call(this, t))
                    } : function() {
                        var t = he(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = he.isFunction(e);
                    return this.each(function(n) {
                        he(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        he(this).replaceWith(this.childNodes)
                    }), this
                }
            }), he.expr.pseudos.hidden = function(e) {
                return !he.expr.pseudos.visible(e)
            }, he.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, he.ajaxSettings.xhr = function() {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var $t = {
                    0: 200,
                    1223: 204
                },
                Bt = he.ajaxSettings.xhr();
            pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, he.ajaxTransport(function(t) {
                var n, r;
                return pe.cors || Bt && !t.crossDomain ? {
                    send: function(i, o) {
                        var a, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        n = function(e) {
                            return function() {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o($t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                            4 === s.readyState && e.setTimeout(function() {
                                n && r()
                            })
                        }, n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function() {
                        n && n()
                    }
                } : void 0
            }), he.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), he.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return he.globalEval(e), e
                    }
                }
            }), he.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), he.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n;
                    return {
                        send: function(r, i) {
                            t = he("<script>").prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), te.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
            var Vt = [],
                Wt = /(=)\?(?=&|$)|\?\?/;
            he.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = Vt.pop() || he.expando + "_" + St++;
                    return this[e] = !0, e
                }
            }), he.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, o, a, s = t.jsonp !== !1 && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
                return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Wt, "$1" + i) : t.jsonp !== !1 && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                    return a || he.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
                    a = arguments
                }, r.always(function() {
                    void 0 === o ? he(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Vt.push(i)), a && he.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), pe.createHTMLDocument = function() {
                var e = te.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
            }(), he.parseHTML = function(e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var r, i, o;
                return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = te.location.href, t.head.appendChild(r)) : t = te), i = Oe.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && he(o).remove(), he.merge([], i.childNodes))
            }, he.fn.load = function(e, t, n) {
                var r, i, o, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = z(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && (i = "POST"), a.length > 0 && he.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, a.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    a.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                he.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), he.expr.pseudos.animated = function(e) {
                return he.grep(he.timers, function(t) {
                    return e === t.elem
                }).length
            }, he.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, c, l = he.css(e, "position"),
                        f = he(e),
                        p = {};
                    "static" === l && (e.style.position = "relative"), s = f.offset(), o = he.css(e, "top"), u = he.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
                }
            }, he.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        he.offset.setOffset(this, e, t)
                    });
                    var t, n, r, i, o = this[0];
                    if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = K(i), t = i.documentElement, {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                    }) : r) : {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (r = e.offset()), r = {
                            top: r.top + he.css(e[0], "borderTopWidth", !0),
                            left: r.left + he.css(e[0], "borderLeftWidth", !0)
                        }), {
                            top: t.top - r.top - he.css(n, "marginTop", !0),
                            left: t.left - r.left - he.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
                        return e || Ye
                    })
                }
            }), he.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                he.fn[e] = function(r) {
                    return Ie(this, function(e, r, i) {
                        var o = K(e);
                        return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                    }, e, r, arguments.length)
                }
            }), he.each(["top", "left"], function(e, t) {
                he.cssHooks[t] = P(pe.pixelPosition, function(e, n) {
                    return n ? (n = _(e, t), at.test(n) ? he(e).position()[t] + "px" : n) : void 0
                })
            }), he.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                he.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    he.fn[r] = function(i, o) {
                        var a = arguments.length && (n || "boolean" != typeof i),
                            s = n || (i === !0 || o === !0 ? "margin" : "border");
                        return Ie(this, function(t, n, i) {
                            var o;
                            return he.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? he.css(t, n, s) : he.style(t, n, i, s)
                        }, t, a ? i : void 0, a)
                    }
                })
            }), he.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
                return he
            });
            var zt = e.jQuery,
                Ut = e.$;
            return he.noConflict = function(t) {
                return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = zt), he
            }, t || (e.jQuery = e.$ = he), he
        }),
        /*!
         * https://github.com/paulmillr/es6-shim
         * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
         *   and contributors,  MIT License
         * es6-shim: v0.35.1
         * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
         * Details and documentation:
         * https://github.com/paulmillr/es6-shim/
         */
        function(e, t) {
            "function" == typeof define && define.amd ? define("es6-shim", t) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = t() : e.returnExports = t()
        }(this, function() {
            var e, t = Function.call.bind(Function.apply),
                n = Function.call.bind(Function.call),
                r = Array.isArray,
                i = Object.keys,
                o = function(e) {
                    return function() {
                        return !t(e, this, arguments)
                    }
                },
                a = function(e) {
                    try {
                        return e(), !1
                    } catch (e) {
                        return !0
                    }
                },
                s = function(e) {
                    try {
                        return e()
                    } catch (e) {
                        return !1
                    }
                },
                u = o(a),
                c = function() {
                    return !a(function() {
                        Object.defineProperty({}, "x", {
                            get: function() {}
                        })
                    })
                },
                l = !!Object.defineProperty && c(),
                f = "foo" === function() {}.name,
                p = Function.call.bind(Array.prototype.forEach),
                d = Function.call.bind(Array.prototype.reduce),
                h = Function.call.bind(Array.prototype.filter),
                m = Function.call.bind(Array.prototype.some),
                g = function(e, t, n, r) {
                    !r && t in e || (l ? Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: n
                    }) : e[t] = n)
                },
                y = function(e, t, n) {
                    p(i(t), function(r) {
                        var i = t[r];
                        g(e, r, i, !!n)
                    })
                },
                v = Function.call.bind(Object.prototype.toString),
                b = "function" == typeof /abc/ ? function(e) {
                    return "function" == typeof e && "[object Function]" === v(e)
                } : function(e) {
                    return "function" == typeof e
                },
                w = {
                    getter: function(e, t, n) {
                        if (!l) throw new TypeError("getters require true ES5 support");
                        Object.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            get: n
                        })
                    },
                    proxy: function(e, t, n) {
                        if (!l) throw new TypeError("getters require true ES5 support");
                        var r = Object.getOwnPropertyDescriptor(e, t);
                        Object.defineProperty(n, t, {
                            configurable: r.configurable,
                            enumerable: r.enumerable,
                            get: function() {
                                return e[t]
                            },
                            set: function(n) {
                                e[t] = n
                            }
                        })
                    },
                    redefine: function(e, t, n) {
                        if (l) {
                            var r = Object.getOwnPropertyDescriptor(e, t);
                            r.value = n, Object.defineProperty(e, t, r)
                        } else e[t] = n
                    },
                    defineByDescriptor: function(e, t, n) {
                        l ? Object.defineProperty(e, t, n) : "value" in n && (e[t] = n.value)
                    },
                    preserveToString: function(e, t) {
                        t && b(t.toString) && g(e, "toString", t.toString.bind(t), !0)
                    }
                },
                x = Object.create || function(e, t) {
                    var n = function() {};
                    n.prototype = e;
                    var r = new n;
                    return "undefined" != typeof t && i(t).forEach(function(e) {
                        w.defineByDescriptor(r, e, t[e])
                    }), r
                },
                T = function(e, t) {
                    return Object.setPrototypeOf ? s(function() {
                        var n = function t(n) {
                            var r = new e(n);
                            return Object.setPrototypeOf(r, t.prototype), r
                        };
                        return Object.setPrototypeOf(n, e), n.prototype = x(e.prototype, {
                            constructor: {
                                value: n
                            }
                        }), t(n)
                    }) : !1
                },
                O = function() {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if ("undefined" != typeof global) return global;
                    throw new Error("unable to locate global object")
                },
                S = O(),
                j = S.isFinite,
                k = Function.call.bind(String.prototype.indexOf),
                C = Function.apply.bind(Array.prototype.indexOf),
                A = Function.call.bind(Array.prototype.concat),
                E = Function.call.bind(String.prototype.slice),
                N = Function.call.bind(Array.prototype.push),
                _ = Function.apply.bind(Array.prototype.push),
                P = Function.call.bind(Array.prototype.shift),
                I = Math.max,
                M = Math.min,
                L = Math.floor,
                F = Math.abs,
                D = Math.exp,
                R = Math.log,
                q = Math.sqrt,
                H = Function.call.bind(Object.prototype.hasOwnProperty),
                $ = function() {},
                B = S.Symbol || {},
                V = B.species || "@@species",
                W = Number.isNaN || function(e) {
                    return e !== e
                },
                z = Number.isFinite || function(e) {
                    return "number" == typeof e && j(e)
                },
                U = b(Math.sign) ? Math.sign : function(e) {
                    var t = Number(e);
                    return 0 === t ? t : W(t) ? t : 0 > t ? -1 : 1
                },
                G = function(e) {
                    return "[object Arguments]" === v(e)
                },
                X = function(e) {
                    return null !== e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== v(e) && "[object Function]" === v(e.callee)
                },
                J = G(arguments) ? G : X,
                Y = {
                    primitive: function(e) {
                        return null === e || "function" != typeof e && "object" !== ("undefined" == typeof e ? "undefined" : _typeof(e))
                    },
                    string: function(e) {
                        return "[object String]" === v(e)
                    },
                    regex: function(e) {
                        return "[object RegExp]" === v(e)
                    },
                    symbol: function(e) {
                        return "function" == typeof S.Symbol && "symbol" === ("undefined" == typeof e ? "undefined" : _typeof(e))
                    }
                },
                Z = function(e, t, n) {
                    var r = e[t];
                    g(e, t, n, !0), w.preserveToString(e[t], r)
                },
                Q = "function" == typeof B && "function" == typeof B.for && Y.symbol(B()),
                K = Y.symbol(B.iterator) ? B.iterator : "_es6-shim iterator_";
            S.Set && "function" == typeof(new S.Set)["@@iterator"] && (K = "@@iterator"), S.Reflect || g(S, "Reflect", {}, !0);
            var ee = S.Reflect,
                te = String,
                ne = {
                    Call: function(e, n) {
                        var r = arguments.length > 2 ? arguments[2] : [];
                        if (!ne.IsCallable(e)) throw new TypeError(e + " is not a function");
                        return t(e, n, r)
                    },
                    RequireObjectCoercible: function(e, t) {
                        if (null == e) throw new TypeError(t || "Cannot call method on " + e);
                        return e
                    },
                    TypeIsObject: function(e) {
                        return void 0 === e || null === e || e === !0 || e === !1 ? !1 : "function" == typeof e || "object" === ("undefined" == typeof e ? "undefined" : _typeof(e))
                    },
                    ToObject: function(e, t) {
                        return Object(ne.RequireObjectCoercible(e, t))
                    },
                    IsCallable: b,
                    IsConstructor: function(e) {
                        return ne.IsCallable(e)
                    },
                    ToInt32: function(e) {
                        return ne.ToNumber(e) >> 0
                    },
                    ToUint32: function(e) {
                        return ne.ToNumber(e) >>> 0
                    },
                    ToNumber: function(e) {
                        if ("[object Symbol]" === v(e)) throw new TypeError("Cannot convert a Symbol value to a number");
                        return +e
                    },
                    ToInteger: function(e) {
                        var t = ne.ToNumber(e);
                        return W(t) ? 0 : 0 !== t && z(t) ? (t > 0 ? 1 : -1) * L(F(t)) : t
                    },
                    ToLength: function(e) {
                        var t = ne.ToInteger(e);
                        return 0 >= t ? 0 : t > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t
                    },
                    SameValue: function(e, t) {
                        return e === t ? 0 === e ? 1 / e === 1 / t : !0 : W(e) && W(t)
                    },
                    SameValueZero: function(e, t) {
                        return e === t || W(e) && W(t)
                    },
                    IsIterable: function(e) {
                        return ne.TypeIsObject(e) && ("undefined" != typeof e[K] || J(e))
                    },
                    GetIterator: function(t) {
                        if (J(t)) return new e(t, "value");
                        var n = ne.GetMethod(t, K);
                        if (!ne.IsCallable(n)) throw new TypeError("value is not an iterable");
                        var r = ne.Call(n, t);
                        if (!ne.TypeIsObject(r)) throw new TypeError("bad iterator");
                        return r
                    },
                    GetMethod: function(e, t) {
                        var n = ne.ToObject(e)[t];
                        if (void 0 === n || null === n) return void 0;
                        if (!ne.IsCallable(n)) throw new TypeError("Method not callable: " + t);
                        return n
                    },
                    IteratorComplete: function(e) {
                        return !!e.done
                    },
                    IteratorClose: function(e, t) {
                        var n = ne.GetMethod(e, "return");
                        if (void 0 !== n) {
                            var r, i;
                            try {
                                r = ne.Call(n, e)
                            } catch (e) {
                                i = e
                            }
                            if (!t) {
                                if (i) throw i;
                                if (!ne.TypeIsObject(r)) throw new TypeError("Iterator's return method returned a non-object.")
                            }
                        }
                    },
                    IteratorNext: function(e) {
                        var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
                        if (!ne.TypeIsObject(t)) throw new TypeError("bad iterator");
                        return t
                    },
                    IteratorStep: function(e) {
                        var t = ne.IteratorNext(e),
                            n = ne.IteratorComplete(t);
                        return n ? !1 : t
                    },
                    Construct: function(e, t, n, r) {
                        var i = "undefined" == typeof n ? e : n;
                        if (!r && ee.construct) return ee.construct(e, t, i);
                        var o = i.prototype;
                        ne.TypeIsObject(o) || (o = Object.prototype);
                        var a = x(o),
                            s = ne.Call(e, a, t);
                        return ne.TypeIsObject(s) ? s : a
                    },
                    SpeciesConstructor: function(e, t) {
                        var n = e.constructor;
                        if (void 0 === n) return t;
                        if (!ne.TypeIsObject(n)) throw new TypeError("Bad constructor");
                        var r = n[V];
                        if (void 0 === r || null === r) return t;
                        if (!ne.IsConstructor(r)) throw new TypeError("Bad @@species");
                        return r
                    },
                    CreateHTML: function(e, t, n, r) {
                        var i = ne.ToString(e),
                            o = "<" + t;
                        if ("" !== n) {
                            var a = ne.ToString(r),
                                s = a.replace(/"/g, "&quot;");
                            o += " " + n + '="' + s + '"'
                        }
                        var u = o + ">",
                            c = u + i;
                        return c + "</" + t + ">"
                    },
                    IsRegExp: function(e) {
                        if (!ne.TypeIsObject(e)) return !1;
                        var t = e[B.match];
                        return "undefined" != typeof t ? !!t : Y.regex(e)
                    },
                    ToString: function(e) {
                        return te(e)
                    }
                };
            if (l && Q) {
                var re = function(e) {
                    if (Y.symbol(B[e])) return B[e];
                    var t = B.for("Symbol." + e);
                    return Object.defineProperty(B, e, {
                        configurable: !1,
                        enumerable: !1,
                        writable: !1,
                        value: t
                    }), t
                };
                if (!Y.symbol(B.search)) {
                    var ie = re("search"),
                        oe = String.prototype.search;
                    g(RegExp.prototype, ie, function(e) {
                        return ne.Call(oe, e, [this])
                    });
                    var ae = function(e) {
                        var t = ne.RequireObjectCoercible(this);
                        if (null !== e && "undefined" != typeof e) {
                            var n = ne.GetMethod(e, ie);
                            if ("undefined" != typeof n) return ne.Call(n, e, [t])
                        }
                        return ne.Call(oe, t, [ne.ToString(e)])
                    };
                    Z(String.prototype, "search", ae)
                }
                if (!Y.symbol(B.replace)) {
                    var se = re("replace"),
                        ue = String.prototype.replace;
                    g(RegExp.prototype, se, function(e, t) {
                        return ne.Call(ue, e, [this, t])
                    });
                    var ce = function(e, t) {
                        var n = ne.RequireObjectCoercible(this);
                        if (null !== e && "undefined" != typeof e) {
                            var r = ne.GetMethod(e, se);
                            if ("undefined" != typeof r) return ne.Call(r, e, [n, t])
                        }
                        return ne.Call(ue, n, [ne.ToString(e), t])
                    };
                    Z(String.prototype, "replace", ce)
                }
                if (!Y.symbol(B.split)) {
                    var le = re("split"),
                        fe = String.prototype.split;
                    g(RegExp.prototype, le, function(e, t) {
                        return ne.Call(fe, e, [this, t])
                    });
                    var pe = function(e, t) {
                        var n = ne.RequireObjectCoercible(this);
                        if (null !== e && "undefined" != typeof e) {
                            var r = ne.GetMethod(e, le);
                            if ("undefined" != typeof r) return ne.Call(r, e, [n, t])
                        }
                        return ne.Call(fe, n, [ne.ToString(e), t])
                    };
                    Z(String.prototype, "split", pe)
                }
                var de = Y.symbol(B.match),
                    he = de && function() {
                        var e = {};
                        return e[B.match] = function() {
                            return 42
                        }, 42 !== "a".match(e)
                    }();
                if (!de || he) {
                    var me = re("match"),
                        ge = String.prototype.match;
                    g(RegExp.prototype, me, function(e) {
                        return ne.Call(ge, e, [this])
                    });
                    var ye = function(e) {
                        var t = ne.RequireObjectCoercible(this);
                        if (null !== e && "undefined" != typeof e) {
                            var n = ne.GetMethod(e, me);
                            if ("undefined" != typeof n) return ne.Call(n, e, [t])
                        }
                        return ne.Call(ge, t, [ne.ToString(e)])
                    };
                    Z(String.prototype, "match", ye)
                }
            }
            var ve = function(e, t, n) {
                    w.preserveToString(t, e), Object.setPrototypeOf && Object.setPrototypeOf(e, t), l ? p(Object.getOwnPropertyNames(e), function(r) {
                        r in $ || n[r] || w.proxy(e, r, t)
                    }) : p(Object.keys(e), function(r) {
                        r in $ || n[r] || (t[r] = e[r])
                    }), t.prototype = e.prototype, w.redefine(e.prototype, "constructor", t)
                },
                be = function() {
                    return this
                },
                we = function(e) {
                    l && !H(e, V) && w.getter(e, V, be)
                },
                xe = function(e, t) {
                    var n = t || function() {
                        return this
                    };
                    g(e, K, n), !e[K] && Y.symbol(K) && (e[K] = n)
                },
                Te = function(e, t, n) {
                    l ? Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Oe = function(e, t, n) {
                    if (Te(e, t, n), !ne.SameValue(e[t], n)) throw new TypeError("property is nonconfigurable")
                },
                Se = function(e, t, n, r) {
                    if (!ne.TypeIsObject(e)) throw new TypeError("Constructor requires `new`: " + t.name);
                    var i = t.prototype;
                    ne.TypeIsObject(i) || (i = n);
                    var o = x(i);
                    for (var a in r)
                        if (H(r, a)) {
                            var s = r[a];
                            g(o, a, s, !0)
                        }
                    return o
                };
            if (String.fromCodePoint && 1 !== String.fromCodePoint.length) {
                var je = String.fromCodePoint;
                Z(String, "fromCodePoint", function() {
                    return ne.Call(je, this, arguments)
                })
            }
            var ke = {
                fromCodePoint: function() {
                    for (var e, t = [], n = 0, r = arguments.length; r > n; n++) {
                        if (e = Number(arguments[n]), !ne.SameValue(e, ne.ToInteger(e)) || 0 > e || e > 1114111) throw new RangeError("Invalid code point " + e);
                        65536 > e ? N(t, String.fromCharCode(e)) : (e -= 65536, N(t, String.fromCharCode((e >> 10) + 55296)), N(t, String.fromCharCode(e % 1024 + 56320)))
                    }
                    return t.join("")
                },
                raw: function(e) {
                    var t = ne.ToObject(e, "bad callSite"),
                        n = ne.ToObject(t.raw, "bad raw value"),
                        r = n.length,
                        i = ne.ToLength(r);
                    if (0 >= i) return "";
                    for (var o, a, s, u, c = [], l = 0; i > l && (o = ne.ToString(l), s = ne.ToString(n[o]), N(c, s), !(l + 1 >= i));) a = l + 1 < arguments.length ? arguments[l + 1] : "", u = ne.ToString(a), N(c, u), l += 1;
                    return c.join("")
                }
            };
            String.raw && "xy" !== String.raw({
                raw: {
                    0: "x",
                    1: "y",
                    length: 2
                }
            }) && Z(String, "raw", ke.raw), y(String, ke);
            var Ce = function e(t, n) {
                    if (1 > n) return "";
                    if (n % 2) return e(t, n - 1) + t;
                    var r = e(t, n / 2);
                    return r + r
                },
                Ae = 1 / 0,
                Ee = {
                    repeat: function(e) {
                        var t = ne.ToString(ne.RequireObjectCoercible(this)),
                            n = ne.ToInteger(e);
                        if (0 > n || n >= Ae) throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");
                        return Ce(t, n)
                    },
                    startsWith: function(e) {
                        var t = ne.ToString(ne.RequireObjectCoercible(this));
                        if (ne.IsRegExp(e)) throw new TypeError('Cannot call method "startsWith" with a regex');
                        var n, r = ne.ToString(e);
                        arguments.length > 1 && (n = arguments[1]);
                        var i = I(ne.ToInteger(n), 0);
                        return E(t, i, i + r.length) === r
                    },
                    endsWith: function(e) {
                        var t = ne.ToString(ne.RequireObjectCoercible(this));
                        if (ne.IsRegExp(e)) throw new TypeError('Cannot call method "endsWith" with a regex');
                        var n, r = ne.ToString(e),
                            i = t.length;
                        arguments.length > 1 && (n = arguments[1]);
                        var o = "undefined" == typeof n ? i : ne.ToInteger(n),
                            a = M(I(o, 0), i);
                        return E(t, a - r.length, a) === r
                    },
                    includes: function(e) {
                        if (ne.IsRegExp(e)) throw new TypeError('"includes" does not accept a RegExp');
                        var t, n = ne.ToString(e);
                        return arguments.length > 1 && (t = arguments[1]), -1 !== k(this, n, t)
                    },
                    codePointAt: function(e) {
                        var t = ne.ToString(ne.RequireObjectCoercible(this)),
                            n = ne.ToInteger(e),
                            r = t.length;
                        if (n >= 0 && r > n) {
                            var i = t.charCodeAt(n),
                                o = n + 1 === r;
                            if (55296 > i || i > 56319 || o) return i;
                            var a = t.charCodeAt(n + 1);
                            return 56320 > a || a > 57343 ? i : 1024 * (i - 55296) + (a - 56320) + 65536
                        }
                    }
                };
            if (String.prototype.includes && "a".includes("a", 1 / 0) !== !1 && Z(String.prototype, "includes", Ee.includes), String.prototype.startsWith && String.prototype.endsWith) {
                var Ne = a(function() {
                        "/a/".startsWith(/a/)
                    }),
                    _e = s(function() {
                        return "abc".startsWith("a", 1 / 0) === !1
                    });
                Ne && _e || (Z(String.prototype, "startsWith", Ee.startsWith), Z(String.prototype, "endsWith", Ee.endsWith))
            }
            if (Q) {
                var Pe = s(function() {
                    var e = /a/;
                    return e[B.match] = !1, "/a/".startsWith(e)
                });
                Pe || Z(String.prototype, "startsWith", Ee.startsWith);
                var Ie = s(function() {
                    var e = /a/;
                    return e[B.match] = !1, "/a/".endsWith(e)
                });
                Ie || Z(String.prototype, "endsWith", Ee.endsWith);
                var Me = s(function() {
                    var e = /a/;
                    return e[B.match] = !1, "/a/".includes(e)
                });
                Me || Z(String.prototype, "includes", Ee.includes)
            }
            y(String.prototype, Ee);
            var Le = ["	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028", "\u2029\ufeff"].join(""),
                Fe = new RegExp("(^[" + Le + "]+)|([" + Le + "]+$)", "g"),
                De = function() {
                    return ne.ToString(ne.RequireObjectCoercible(this)).replace(Fe, "")
                },
                Re = ["\x85", "\u200b", "\ufffe"].join(""),
                qe = new RegExp("[" + Re + "]", "g"),
                He = /^[\-+]0x[0-9a-f]+$/i,
                $e = Re.trim().length !== Re.length;
            g(String.prototype, "trim", De, $e);
            var Be = function(e) {
                    return {
                        value: e,
                        done: 0 === arguments.length
                    }
                },
                Ve = function(e) {
                    ne.RequireObjectCoercible(e), this._s = ne.ToString(e), this._i = 0
                };
            Ve.prototype.next = function() {
                var e = this._s,
                    t = this._i;
                if ("undefined" == typeof e || t >= e.length) return this._s = void 0, Be();
                var n, r, i = e.charCodeAt(t);
                return 55296 > i || i > 56319 || t + 1 === e.length ? r = 1 : (n = e.charCodeAt(t + 1), r = 56320 > n || n > 57343 ? 1 : 2), this._i = t + r, Be(e.substr(t, r))
            }, xe(Ve.prototype), xe(String.prototype, function() {
                return new Ve(this)
            });
            var We = {
                from: function(e) {
                    var t, r = this;
                    arguments.length > 1 && (t = arguments[1]);
                    var i, o;
                    if ("undefined" == typeof t) i = !1;
                    else {
                        if (!ne.IsCallable(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                        arguments.length > 2 && (o = arguments[2]), i = !0
                    }
                    var a, s, u, c = "undefined" != typeof(J(e) || ne.GetMethod(e, K));
                    if (c) {
                        s = ne.IsConstructor(r) ? Object(new r) : [];
                        var l, f, p = ne.GetIterator(e);
                        for (u = 0;;) {
                            if (l = ne.IteratorStep(p), l === !1) break;
                            f = l.value;
                            try {
                                i && (f = "undefined" == typeof o ? t(f, u) : n(t, o, f, u)), s[u] = f
                            } catch (e) {
                                throw ne.IteratorClose(p, !0), e
                            }
                            u += 1
                        }
                        a = u
                    } else {
                        var d = ne.ToObject(e);
                        a = ne.ToLength(d.length), s = ne.IsConstructor(r) ? Object(new r(a)) : new Array(a);
                        var h;
                        for (u = 0; a > u; ++u) h = d[u], i && (h = "undefined" == typeof o ? t(h, u) : n(t, o, h, u)), Oe(s, u, h)
                    }
                    return s.length = a, s
                },
                of: function() {
                    for (var e = arguments.length, t = this, n = r(t) || !ne.IsCallable(t) ? new Array(e) : ne.Construct(t, [e]), i = 0; e > i; ++i) Oe(n, i, arguments[i]);
                    return n.length = e, n
                }
            };
            y(Array, We), we(Array), e = function(e, t) {
                this.i = 0, this.array = e, this.kind = t
            }, y(e.prototype, {
                next: function() {
                    var t = this.i,
                        n = this.array;
                    if (!(this instanceof e)) throw new TypeError("Not an ArrayIterator");
                    if ("undefined" != typeof n)
                        for (var r = ne.ToLength(n.length); r > t; t++) {
                            var i, o = this.kind;
                            return "key" === o ? i = t : "value" === o ? i = n[t] : "entry" === o && (i = [t, n[t]]), this.i = t + 1, Be(i)
                        }
                    return this.array = void 0, Be()
                }
            }), xe(e.prototype);
            var ze = Array.of === We.of || function() {
                var e = function(e) {
                    this.length = e
                };
                e.prototype = [];
                var t = Array.of.apply(e, [1, 2]);
                return t instanceof e && 2 === t.length
            }();
            ze || Z(Array, "of", We.of);
            var Ue = {
                copyWithin: function(e, t) {
                    var n, r = ne.ToObject(this),
                        i = ne.ToLength(r.length),
                        o = ne.ToInteger(e),
                        a = ne.ToInteger(t),
                        s = 0 > o ? I(i + o, 0) : M(o, i),
                        u = 0 > a ? I(i + a, 0) : M(a, i);
                    arguments.length > 2 && (n = arguments[2]);
                    var c = "undefined" == typeof n ? i : ne.ToInteger(n),
                        l = 0 > c ? I(i + c, 0) : M(c, i),
                        f = M(l - u, i - s),
                        p = 1;
                    for (s > u && u + f > s && (p = -1, u += f - 1, s += f - 1); f > 0;) u in r ? r[s] = r[u] : delete r[s], u += p, s += p, f -= 1;
                    return r
                },
                fill: function(e) {
                    var t;
                    arguments.length > 1 && (t = arguments[1]);
                    var n;
                    arguments.length > 2 && (n = arguments[2]);
                    var r = ne.ToObject(this),
                        i = ne.ToLength(r.length);
                    t = ne.ToInteger("undefined" == typeof t ? 0 : t), n = ne.ToInteger("undefined" == typeof n ? i : n);
                    for (var o = 0 > t ? I(i + t, 0) : M(t, i), a = 0 > n ? i + n : n, s = o; i > s && a > s; ++s) r[s] = e;
                    return r
                },
                find: function(e) {
                    var t = ne.ToObject(this),
                        r = ne.ToLength(t.length);
                    if (!ne.IsCallable(e)) throw new TypeError("Array#find: predicate must be a function");
                    for (var i, o = arguments.length > 1 ? arguments[1] : null, a = 0; r > a; a++)
                        if (i = t[a], o) {
                            if (n(e, o, i, a, t)) return i
                        } else if (e(i, a, t)) return i
                },
                findIndex: function(e) {
                    var t = ne.ToObject(this),
                        r = ne.ToLength(t.length);
                    if (!ne.IsCallable(e)) throw new TypeError("Array#findIndex: predicate must be a function");
                    for (var i = arguments.length > 1 ? arguments[1] : null, o = 0; r > o; o++)
                        if (i) {
                            if (n(e, i, t[o], o, t)) return o
                        } else if (e(t[o], o, t)) return o;
                    return -1
                },
                keys: function() {
                    return new e(this, "key")
                },
                values: function() {
                    return new e(this, "value")
                },
                entries: function() {
                    return new e(this, "entry")
                }
            };
            if (Array.prototype.keys && !ne.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !ne.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[K] && (y(Array.prototype, {
                    values: Array.prototype[K]
                }), Y.symbol(B.unscopables) && (Array.prototype[B.unscopables].values = !0)), f && Array.prototype.values && "values" !== Array.prototype.values.name) {
                var Ge = Array.prototype.values;
                Z(Array.prototype, "values", function() {
                    return ne.Call(Ge, this, arguments)
                }), g(Array.prototype, K, Array.prototype.values, !0)
            }
            y(Array.prototype, Ue), 1 / [!0].indexOf(!0, -0) < 0 && g(Array.prototype, "indexOf", function() {
                var e = C(this, arguments);
                return 0 === e && 0 > 1 / e ? 0 : e
            }, !0), xe(Array.prototype, function() {
                return this.values()
            }), Object.getPrototypeOf && xe(Object.getPrototypeOf([].values()));
            var Xe = function() {
                    return s(function() {
                        return 0 === Array.from({
                            length: -1
                        }).length
                    })
                }(),
                Je = function() {
                    var e = Array.from([0].entries());
                    return 1 === e.length && r(e[0]) && 0 === e[0][0] && 0 === e[0][1]
                }();
            Xe && Je || Z(Array, "from", We.from);
            var Ye = function() {
                return s(function() {
                    return Array.from([0], void 0)
                })
            }();
            if (!Ye) {
                var Ze = Array.from;
                Z(Array, "from", function(e) {
                    return arguments.length > 1 && "undefined" != typeof arguments[1] ? ne.Call(Ze, this, arguments) : n(Ze, this, e)
                })
            }
            var Qe = -(Math.pow(2, 32) - 1),
                Ke = function(e, t) {
                    var r = {
                        length: Qe
                    };
                    return r[t ? (r.length >>> 0) - 1 : 0] = !0, s(function() {
                        return n(e, r, function() {
                            throw new RangeError("should not reach here")
                        }, []), !0
                    })
                };
            if (!Ke(Array.prototype.forEach)) {
                var et = Array.prototype.forEach;
                Z(Array.prototype, "forEach", function() {
                    return ne.Call(et, this.length >= 0 ? this : [], arguments)
                }, !0)
            }
            if (!Ke(Array.prototype.map)) {
                var tt = Array.prototype.map;
                Z(Array.prototype, "map", function() {
                    return ne.Call(tt, this.length >= 0 ? this : [], arguments)
                }, !0)
            }
            if (!Ke(Array.prototype.filter)) {
                var nt = Array.prototype.filter;
                Z(Array.prototype, "filter", function() {
                    return ne.Call(nt, this.length >= 0 ? this : [], arguments)
                }, !0)
            }
            if (!Ke(Array.prototype.some)) {
                var rt = Array.prototype.some;
                Z(Array.prototype, "some", function() {
                    return ne.Call(rt, this.length >= 0 ? this : [], arguments)
                }, !0)
            }
            if (!Ke(Array.prototype.every)) {
                var it = Array.prototype.every;
                Z(Array.prototype, "every", function() {
                    return ne.Call(it, this.length >= 0 ? this : [], arguments)
                }, !0)
            }
            if (!Ke(Array.prototype.reduce)) {
                var ot = Array.prototype.reduce;
                Z(Array.prototype, "reduce", function() {
                    return ne.Call(ot, this.length >= 0 ? this : [], arguments)
                }, !0)
            }
            if (!Ke(Array.prototype.reduceRight, !0)) {
                var at = Array.prototype.reduceRight;
                Z(Array.prototype, "reduceRight", function() {
                    return ne.Call(at, this.length >= 0 ? this : [], arguments)
                }, !0)
            }
            var st = 8 !== Number("0o10"),
                ut = 2 !== Number("0b10"),
                ct = m(Re, function(e) {
                    return 0 === Number(e + 0 + e)
                });
            if (st || ut || ct) {
                var lt = Number,
                    ft = /^0b[01]+$/i,
                    pt = /^0o[0-7]+$/i,
                    dt = ft.test.bind(ft),
                    ht = pt.test.bind(pt),
                    mt = function(e) {
                        var t;
                        if ("function" == typeof e.valueOf && (t = e.valueOf(), Y.primitive(t))) return t;
                        if ("function" == typeof e.toString && (t = e.toString(), Y.primitive(t))) return t;
                        throw new TypeError("No default value")
                    },
                    gt = qe.test.bind(qe),
                    yt = He.test.bind(He),
                    vt = function() {
                        var e = function(t) {
                            var n;
                            n = arguments.length > 0 ? Y.primitive(t) ? t : mt(t, "number") : 0, "string" == typeof n && (n = ne.Call(De, n), dt(n) ? n = parseInt(E(n, 2), 2) : ht(n) ? n = parseInt(E(n, 2), 8) : (gt(n) || yt(n)) && (n = 0 / 0));
                            var r = this,
                                i = s(function() {
                                    return lt.prototype.valueOf.call(r), !0
                                });
                            return r instanceof e && !i ? new lt(n) : lt(n)
                        };
                        return e
                    }();
                ve(lt, vt, {}), y(vt, {
                    NaN: lt.NaN,
                    MAX_VALUE: lt.MAX_VALUE,
                    MIN_VALUE: lt.MIN_VALUE,
                    NEGATIVE_INFINITY: lt.NEGATIVE_INFINITY,
                    POSITIVE_INFINITY: lt.POSITIVE_INFINITY
                }), Number = vt, w.redefine(S, "Number", vt)
            }
            var bt = Math.pow(2, 53) - 1;
            y(Number, {
                MAX_SAFE_INTEGER: bt,
                MIN_SAFE_INTEGER: -bt,
                EPSILON: 2.220446049250313e-16,
                parseInt: S.parseInt,
                parseFloat: S.parseFloat,
                isFinite: z,
                isInteger: function(e) {
                    return z(e) && ne.ToInteger(e) === e
                },
                isSafeInteger: function(e) {
                    return Number.isInteger(e) && F(e) <= Number.MAX_SAFE_INTEGER
                },
                isNaN: W
            }), g(Number, "parseInt", S.parseInt, Number.parseInt !== S.parseInt), [, 1].find(function(e, t) {
                return 0 === t
            }) || Z(Array.prototype, "find", Ue.find), 0 !== [, 1].findIndex(function(e, t) {
                return 0 === t
            }) && Z(Array.prototype, "findIndex", Ue.findIndex);
            var wt = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable),
                xt = function(e, t) {
                    l && wt(e, t) && Object.defineProperty(e, t, {
                        enumerable: !1
                    })
                },
                Tt = function() {
                    for (var e = Number(this), t = arguments.length, n = t - e, r = new Array(0 > n ? 0 : n), i = e; t > i; ++i) r[i - e] = arguments[i];
                    return r
                },
                Ot = function(e) {
                    return function(t, n) {
                        return t[n] = e[n], t
                    }
                },
                St = function(e, t) {
                    var n, r = i(Object(t));
                    return ne.IsCallable(Object.getOwnPropertySymbols) && (n = h(Object.getOwnPropertySymbols(Object(t)), wt(t))), d(A(r, n || []), Ot(t), e)
                },
                jt = {
                    assign: function(e) {
                        var t = ne.ToObject(e, "Cannot convert undefined or null to object");
                        return d(ne.Call(Tt, 1, arguments), St, t)
                    },
                    is: function(e, t) {
                        return ne.SameValue(e, t)
                    }
                },
                kt = Object.assign && Object.preventExtensions && function() {
                    var e = Object.preventExtensions({
                        1: 2
                    });
                    try {
                        Object.assign(e, "xy")
                    } catch (t) {
                        return "y" === e[1]
                    }
                }();
            if (kt && Z(Object, "assign", jt.assign), y(Object, jt), l) {
                var Ct = {
                    setPrototypeOf: function(e, t) {
                        var r, i = function(e, t) {
                                if (!ne.TypeIsObject(e)) throw new TypeError("cannot set prototype on a non-object");
                                if (null !== t && !ne.TypeIsObject(t)) throw new TypeError("can only set prototype to an object or null" + t)
                            },
                            o = function(e, t) {
                                return i(e, t), n(r, e, t), e
                            };
                        try {
                            r = e.getOwnPropertyDescriptor(e.prototype, t).set, n(r, {}, null)
                        } catch (n) {
                            if (e.prototype !== {}[t]) return;
                            r = function(e) {
                                this[t] = e
                            }, o.polyfill = o(o({}, null), e.prototype) instanceof e
                        }
                        return o
                    }(Object, "__proto__")
                };
                y(Object, Ct)
            }
            Object.setPrototypeOf && Object.getPrototypeOf && null !== Object.getPrototypeOf(Object.setPrototypeOf({}, null)) && null === Object.getPrototypeOf(Object.create(null)) && ! function() {
                var e = Object.create(null),
                    t = Object.getPrototypeOf,
                    n = Object.setPrototypeOf;
                Object.getPrototypeOf = function(n) {
                    var r = t(n);
                    return r === e ? null : r
                }, Object.setPrototypeOf = function(t, r) {
                    var i = null === r ? e : r;
                    return n(t, i)
                }, Object.setPrototypeOf.polyfill = !1
            }();
            var At = !a(function() {
                Object.keys("foo")
            });
            if (!At) {
                var Et = Object.keys;
                Z(Object, "keys", function(e) {
                    return Et(ne.ToObject(e))
                }), i = Object.keys
            }
            var Nt = a(function() {
                Object.keys(/a/g)
            });
            if (Nt) {
                var _t = Object.keys;
                Z(Object, "keys", function(e) {
                    if (Y.regex(e)) {
                        var t = [];
                        for (var n in e) H(e, n) && N(t, n);
                        return t
                    }
                    return _t(e)
                }), i = Object.keys
            }
            if (Object.getOwnPropertyNames) {
                var Pt = !a(function() {
                    Object.getOwnPropertyNames("foo")
                });
                if (!Pt) {
                    var It = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? Object.getOwnPropertyNames(window) : [],
                        Mt = Object.getOwnPropertyNames;
                    Z(Object, "getOwnPropertyNames", function(e) {
                        var t = ne.ToObject(e);
                        if ("[object Window]" === v(t)) try {
                            return Mt(t)
                        } catch (e) {
                            return A([], It)
                        }
                        return Mt(t)
                    })
                }
            }
            if (Object.getOwnPropertyDescriptor) {
                var Lt = !a(function() {
                    Object.getOwnPropertyDescriptor("foo", "bar")
                });
                if (!Lt) {
                    var Ft = Object.getOwnPropertyDescriptor;
                    Z(Object, "getOwnPropertyDescriptor", function(e, t) {
                        return Ft(ne.ToObject(e), t)
                    })
                }
            }
            if (Object.seal) {
                var Dt = !a(function() {
                    Object.seal("foo")
                });
                if (!Dt) {
                    var Rt = Object.seal;
                    Z(Object, "seal", function(e) {
                        return ne.TypeIsObject(e) ? Rt(e) : e
                    })
                }
            }
            if (Object.isSealed) {
                var qt = !a(function() {
                    Object.isSealed("foo")
                });
                if (!qt) {
                    var Ht = Object.isSealed;
                    Z(Object, "isSealed", function(e) {
                        return ne.TypeIsObject(e) ? Ht(e) : !0
                    })
                }
            }
            if (Object.freeze) {
                var $t = !a(function() {
                    Object.freeze("foo")
                });
                if (!$t) {
                    var Bt = Object.freeze;
                    Z(Object, "freeze", function(e) {
                        return ne.TypeIsObject(e) ? Bt(e) : e
                    })
                }
            }
            if (Object.isFrozen) {
                var Vt = !a(function() {
                    Object.isFrozen("foo")
                });
                if (!Vt) {
                    var Wt = Object.isFrozen;
                    Z(Object, "isFrozen", function(e) {
                        return ne.TypeIsObject(e) ? Wt(e) : !0
                    })
                }
            }
            if (Object.preventExtensions) {
                var zt = !a(function() {
                    Object.preventExtensions("foo")
                });
                if (!zt) {
                    var Ut = Object.preventExtensions;
                    Z(Object, "preventExtensions", function(e) {
                        return ne.TypeIsObject(e) ? Ut(e) : e
                    })
                }
            }
            if (Object.isExtensible) {
                var Gt = !a(function() {
                    Object.isExtensible("foo")
                });
                if (!Gt) {
                    var Xt = Object.isExtensible;
                    Z(Object, "isExtensible", function(e) {
                        return ne.TypeIsObject(e) ? Xt(e) : !1
                    })
                }
            }
            if (Object.getPrototypeOf) {
                var Jt = !a(function() {
                    Object.getPrototypeOf("foo")
                });
                if (!Jt) {
                    var Yt = Object.getPrototypeOf;
                    Z(Object, "getPrototypeOf", function(e) {
                        return Yt(ne.ToObject(e))
                    })
                }
            }
            var Zt = l && function() {
                var e = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags");
                return e && ne.IsCallable(e.get)
            }();
            if (l && !Zt) {
                var Qt = function() {
                    if (!ne.TypeIsObject(this)) throw new TypeError("Method called on incompatible type: must be an object.");
                    var e = "";
                    return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.unicode && (e += "u"), this.sticky && (e += "y"), e
                };
                w.getter(RegExp.prototype, "flags", Qt)
            }
            var Kt = l && s(function() {
                    return "/a/i" === String(new RegExp(/a/g, "i"))
                }),
                en = Q && l && function() {
                    var e = /./;
                    return e[B.match] = !1, RegExp(e) === e
                }(),
                tn = s(function() {
                    return "/abc/" === RegExp.prototype.toString.call({
                        source: "abc"
                    })
                }),
                nn = tn && s(function() {
                    return "/a/b" === RegExp.prototype.toString.call({
                        source: "a",
                        flags: "b"
                    })
                });
            if (!tn || !nn) {
                var rn = RegExp.prototype.toString;
                g(RegExp.prototype, "toString", function() {
                    var e = ne.RequireObjectCoercible(this);
                    if (Y.regex(e)) return n(rn, e);
                    var t = te(e.source),
                        r = te(e.flags);
                    return "/" + t + "/" + r
                }, !0), w.preserveToString(RegExp.prototype.toString, rn)
            }
            if (l && (!Kt || en)) {
                var on = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get,
                    an = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {},
                    sn = function() {
                        return this.source
                    },
                    un = ne.IsCallable(an.get) ? an.get : sn,
                    cn = RegExp,
                    ln = function() {
                        return function e(t, n) {
                            var r = ne.IsRegExp(t),
                                i = this instanceof e;
                            if (!i && r && "undefined" == typeof n && t.constructor === e) return t;
                            var o = t,
                                a = n;
                            return Y.regex(t) ? (o = ne.Call(un, t), a = "undefined" == typeof n ? ne.Call(on, t) : n, new e(o, a)) : (r && (o = t.source, a = "undefined" == typeof n ? t.flags : n), new cn(t, n))
                        }
                    }();
                ve(cn, ln, {
                    $input: !0
                }), RegExp = ln, w.redefine(S, "RegExp", ln)
            }
            if (l) {
                var fn = {
                    input: "$_",
                    lastMatch: "$&",
                    lastParen: "$+",
                    leftContext: "$`",
                    rightContext: "$'"
                };
                p(i(fn), function(e) {
                    e in RegExp && !(fn[e] in RegExp) && w.getter(RegExp, fn[e], function() {
                        return RegExp[e]
                    })
                })
            }
            we(RegExp);
            var pn = 1 / Number.EPSILON,
                dn = function(e) {
                    return e + pn - pn
                },
                hn = Math.pow(2, -23),
                mn = Math.pow(2, 127) * (2 - hn),
                gn = Math.pow(2, -126),
                yn = Math.E,
                vn = Math.LOG2E,
                bn = Math.LOG10E,
                wn = Number.prototype.clz;
            delete Number.prototype.clz;
            var xn = {
                acosh: function(e) {
                    var t = Number(e);
                    return W(t) || 1 > e ? 0 / 0 : 1 === t ? 0 : t === 1 / 0 ? t : R(t / yn + q(t + 1) * q(t - 1) / yn) + 1
                },
                asinh: function e(t) {
                    var n = Number(t);
                    return 0 !== n && j(n) ? 0 > n ? -e(-n) : R(n + q(n * n + 1)) : n
                },
                atanh: function(e) {
                    var t = Number(e);
                    return W(t) || -1 > t || t > 1 ? 0 / 0 : -1 === t ? -(1 / 0) : 1 === t ? 1 / 0 : 0 === t ? t : .5 * R((1 + t) / (1 - t))
                },
                cbrt: function(e) {
                    var t = Number(e);
                    if (0 === t) return t;
                    var n, r = 0 > t;
                    return r && (t = -t), t === 1 / 0 ? n = 1 / 0 : (n = D(R(t) / 3), n = (t / (n * n) + 2 * n) / 3), r ? -n : n
                },
                clz32: function(e) {
                    var t = Number(e),
                        n = ne.ToUint32(t);
                    return 0 === n ? 32 : wn ? ne.Call(wn, n) : 31 - L(R(n + .5) * vn)
                },
                cosh: function(e) {
                    var t = Number(e);
                    return 0 === t ? 1 : W(t) ? 0 / 0 : j(t) ? (0 > t && (t = -t), t > 21 ? D(t) / 2 : (D(t) + D(-t)) / 2) : 1 / 0
                },
                expm1: function(e) {
                    var t = Number(e);
                    if (t === -(1 / 0)) return -1;
                    if (!j(t) || 0 === t) return t;
                    if (F(t) > .5) return D(t) - 1;
                    for (var n = t, r = 0, i = 1; r + n !== r;) r += n, i += 1, n *= t / i;
                    return r
                },
                hypot: function() {
                    for (var e = 0, t = 0, n = 0; n < arguments.length; ++n) {
                        var r = F(Number(arguments[n]));
                        r > t ? (e *= t / r * (t / r), e += 1, t = r) : e += r > 0 ? r / t * (r / t) : r
                    }
                    return t === 1 / 0 ? 1 / 0 : t * q(e)
                },
                log2: function(e) {
                    return R(e) * vn
                },
                log10: function(e) {
                    return R(e) * bn
                },
                log1p: function(e) {
                    var t = Number(e);
                    return -1 > t || W(t) ? 0 / 0 : 0 === t || t === 1 / 0 ? t : -1 === t ? -(1 / 0) : 1 + t - 1 === 0 ? t : t * (R(1 + t) / (1 + t - 1))
                },
                sign: U,
                sinh: function(e) {
                    var t = Number(e);
                    return j(t) && 0 !== t ? F(t) < 1 ? (Math.expm1(t) - Math.expm1(-t)) / 2 : (D(t - 1) - D(-t - 1)) * yn / 2 : t
                },
                tanh: function(e) {
                    var t = Number(e);
                    return W(t) || 0 === t ? t : t >= 20 ? 1 : -20 >= t ? -1 : (Math.expm1(t) - Math.expm1(-t)) / (D(t) + D(-t))
                },
                trunc: function(e) {
                    var t = Number(e);
                    return 0 > t ? -L(-t) : L(t)
                },
                imul: function(e, t) {
                    var n = ne.ToUint32(e),
                        r = ne.ToUint32(t),
                        i = n >>> 16 & 65535,
                        o = 65535 & n,
                        a = r >>> 16 & 65535,
                        s = 65535 & r;
                    return o * s + (i * s + o * a << 16 >>> 0) | 0
                },
                fround: function(e) {
                    var t = Number(e);
                    if (0 === t || t === 1 / 0 || t === -(1 / 0) || W(t)) return t;
                    var n = U(t),
                        r = F(t);
                    if (gn > r) return n * dn(r / gn / hn) * gn * hn;
                    var i = (1 + hn / Number.EPSILON) * r,
                        o = i - (i - r);
                    return o > mn || W(o) ? n * (1 / 0) : n * o
                }
            };
            y(Math, xn), g(Math, "log1p", xn.log1p, -1e-17 !== Math.log1p(-1e-17)), g(Math, "asinh", xn.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7)), g(Math, "tanh", xn.tanh, -2e-17 !== Math.tanh(-2e-17)), g(Math, "acosh", xn.acosh, Math.acosh(Number.MAX_VALUE) === 1 / 0), g(Math, "cbrt", xn.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8), g(Math, "sinh", xn.sinh, -2e-17 !== Math.sinh(-2e-17));
            var Tn = Math.expm1(10);
            g(Math, "expm1", xn.expm1, Tn > 22025.465794806718 || 22025.465794806718 > Tn);
            var On = Math.round,
                Sn = 0 === Math.round(.5 - Number.EPSILON / 4) && 1 === Math.round(-.5 + Number.EPSILON / 3.99),
                jn = pn + 1,
                kn = 2 * pn - 1,
                Cn = [jn, kn].every(function(e) {
                    return Math.round(e) === e
                });
            g(Math, "round", function(e) {
                var t = L(e),
                    n = -1 === t ? -0 : t + 1;
                return .5 > e - t ? t : n
            }, !Sn || !Cn), w.preserveToString(Math.round, On);
            var An = Math.imul; - 5 !== Math.imul(4294967295, 5) && (Math.imul = xn.imul, w.preserveToString(Math.imul, An)), 2 !== Math.imul.length && Z(Math, "imul", function() {
                return ne.Call(An, Math, arguments)
            });
            var En = function() {
                var e = S.setTimeout;
                if ("function" == typeof e || "object" === ("undefined" == typeof e ? "undefined" : _typeof(e))) {
                    ne.IsPromise = function(e) {
                        return ne.TypeIsObject(e) ? "undefined" == typeof e._promise ? !1 : !0 : !1
                    };
                    var t, r = function(e) {
                        if (!ne.IsConstructor(e)) throw new TypeError("Bad promise constructor");
                        var t = this,
                            n = function(e, n) {
                                if (void 0 !== t.resolve || void 0 !== t.reject) throw new TypeError("Bad Promise implementation!");
                                t.resolve = e, t.reject = n
                            };
                        if (t.resolve = void 0, t.reject = void 0, t.promise = new e(n), !ne.IsCallable(t.resolve) || !ne.IsCallable(t.reject)) throw new TypeError("Bad promise constructor")
                    };
                    "undefined" != typeof window && ne.IsCallable(window.postMessage) && (t = function() {
                        var e = [],
                            t = "zero-timeout-message",
                            n = function(n) {
                                N(e, n), window.postMessage(t, "*")
                            },
                            r = function(n) {
                                if (n.source === window && n.data === t) {
                                    if (n.stopPropagation(), 0 === e.length) return;
                                    var r = P(e);
                                    r()
                                }
                            };
                        return window.addEventListener("message", r, !0), n
                    });
                    var i, o, a = function() {
                            var e = S.Promise,
                                t = e && e.resolve && e.resolve();
                            return t && function(e) {
                                return t.then(e)
                            }
                        },
                        s = ne.IsCallable(S.setImmediate) ? S.setImmediate : "object" === ("undefined" == typeof process ? "undefined" : _typeof(process)) && process.nextTick ? process.nextTick : a() || (ne.IsCallable(t) ? t() : function(t) {
                            e(t, 0)
                        }),
                        u = function(e) {
                            return e
                        },
                        c = function(e) {
                            throw e
                        },
                        l = 0,
                        f = 1,
                        p = 2,
                        d = 0,
                        h = 1,
                        m = 2,
                        g = {},
                        v = function(e, t, n) {
                            s(function() {
                                b(e, t, n)
                            })
                        },
                        b = function(e, t, n) {
                            var r, i;
                            if (t === g) return e(n);
                            try {
                                r = e(n), i = t.resolve
                            } catch (e) {
                                r = e, i = t.reject
                            }
                            i(r)
                        },
                        w = function(e, t) {
                            var n = e._promise,
                                r = n.reactionLength;
                            if (r > 0 && (v(n.fulfillReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                                for (var i = 1, o = 0; r > i; i++, o += 3) v(n[o + d], n[o + m], t), e[o + d] = void 0, e[o + h] = void 0, e[o + m] = void 0;
                            n.result = t, n.state = f, n.reactionLength = 0
                        },
                        x = function(e, t) {
                            var n = e._promise,
                                r = n.reactionLength;
                            if (r > 0 && (v(n.rejectReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                                for (var i = 1, o = 0; r > i; i++, o += 3) v(n[o + h], n[o + m], t), e[o + d] = void 0, e[o + h] = void 0, e[o + m] = void 0;
                            n.result = t, n.state = p, n.reactionLength = 0
                        },
                        T = function(e) {
                            var t = !1,
                                n = function(n) {
                                    var r;
                                    if (!t) {
                                        if (t = !0, n === e) return x(e, new TypeError("Self resolution"));
                                        if (!ne.TypeIsObject(n)) return w(e, n);
                                        try {
                                            r = n.then
                                        } catch (t) {
                                            return x(e, t)
                                        }
                                        return ne.IsCallable(r) ? void s(function() {
                                            j(e, n, r)
                                        }) : w(e, n)
                                    }
                                },
                                r = function(n) {
                                    return t ? void 0 : (t = !0, x(e, n))
                                };
                            return {
                                resolve: n,
                                reject: r
                            }
                        },
                        O = function(e, t, r, i) {
                            e === o ? n(e, t, r, i, g) : n(e, t, r, i)
                        },
                        j = function(e, t, n) {
                            var r = T(e),
                                i = r.resolve,
                                o = r.reject;
                            try {
                                O(n, t, i, o)
                            } catch (e) {
                                o(e)
                            }
                        },
                        k = function() {
                            var e = function(t) {
                                if (!(this instanceof e)) throw new TypeError('Constructor Promise requires "new"');

                                if (this && this._promise) throw new TypeError("Bad construction");
                                if (!ne.IsCallable(t)) throw new TypeError("not a valid resolver");
                                var n = Se(this, e, i, {
                                        _promise: {
                                            result: void 0,
                                            state: l,
                                            reactionLength: 0,
                                            fulfillReactionHandler0: void 0,
                                            rejectReactionHandler0: void 0,
                                            reactionCapability0: void 0
                                        }
                                    }),
                                    r = T(n),
                                    o = r.reject;
                                try {
                                    t(r.resolve, o)
                                } catch (e) {
                                    o(e)
                                }
                                return n
                            };
                            return e
                        }();
                    i = k.prototype;
                    var C = function(e, t, n, r) {
                            var i = !1;
                            return function(o) {
                                if (!i && (i = !0, t[e] = o, 0 === --r.count)) {
                                    var a = n.resolve;
                                    a(t)
                                }
                            }
                        },
                        A = function(e, t, n) {
                            for (var r, i, o = e.iterator, a = [], s = {
                                    count: 1
                                }, u = 0;;) {
                                try {
                                    if (r = ne.IteratorStep(o), r === !1) {
                                        e.done = !0;
                                        break
                                    }
                                    i = r.value
                                } catch (t) {
                                    throw e.done = !0, t
                                }
                                a[u] = void 0;
                                var c = t.resolve(i),
                                    l = C(u, a, n, s);
                                s.count += 1, O(c.then, c, l, n.reject), u += 1
                            }
                            if (0 === --s.count) {
                                var f = n.resolve;
                                f(a)
                            }
                            return n.promise
                        },
                        E = function(e, t, n) {
                            for (var r, i, o, a = e.iterator;;) {
                                try {
                                    if (r = ne.IteratorStep(a), r === !1) {
                                        e.done = !0;
                                        break
                                    }
                                    i = r.value
                                } catch (t) {
                                    throw e.done = !0, t
                                }
                                o = t.resolve(i), O(o.then, o, n.resolve, n.reject)
                            }
                            return n.promise
                        };
                    return y(k, {
                        all: function(e) {
                            var t = this;
                            if (!ne.TypeIsObject(t)) throw new TypeError("Promise is not object");
                            var n, i, o = new r(t);
                            try {
                                return n = ne.GetIterator(e), i = {
                                    iterator: n,
                                    done: !1
                                }, A(i, t, o)
                            } catch (e) {
                                var a = e;
                                if (i && !i.done) try {
                                    ne.IteratorClose(n, !0)
                                } catch (e) {
                                    a = e
                                }
                                var s = o.reject;
                                return s(a), o.promise
                            }
                        },
                        race: function(e) {
                            var t = this;
                            if (!ne.TypeIsObject(t)) throw new TypeError("Promise is not object");
                            var n, i, o = new r(t);
                            try {
                                return n = ne.GetIterator(e), i = {
                                    iterator: n,
                                    done: !1
                                }, E(i, t, o)
                            } catch (e) {
                                var a = e;
                                if (i && !i.done) try {
                                    ne.IteratorClose(n, !0)
                                } catch (e) {
                                    a = e
                                }
                                var s = o.reject;
                                return s(a), o.promise
                            }
                        },
                        reject: function(e) {
                            var t = this;
                            if (!ne.TypeIsObject(t)) throw new TypeError("Bad promise constructor");
                            var n = new r(t),
                                i = n.reject;
                            return i(e), n.promise
                        },
                        resolve: function(e) {
                            var t = this;
                            if (!ne.TypeIsObject(t)) throw new TypeError("Bad promise constructor");
                            if (ne.IsPromise(e)) {
                                var n = e.constructor;
                                if (n === t) return e
                            }
                            var i = new r(t),
                                o = i.resolve;
                            return o(e), i.promise
                        }
                    }), y(i, {
                        catch: function(e) {
                            return this.then(null, e)
                        },
                        then: function(e, t) {
                            var n = this;
                            if (!ne.IsPromise(n)) throw new TypeError("not a promise");
                            var i, o = ne.SpeciesConstructor(n, k),
                                a = arguments.length > 2 && arguments[2] === g;
                            i = a && o === k ? g : new r(o);
                            var s, y = ne.IsCallable(e) ? e : u,
                                b = ne.IsCallable(t) ? t : c,
                                w = n._promise;
                            if (w.state === l) {
                                if (0 === w.reactionLength) w.fulfillReactionHandler0 = y, w.rejectReactionHandler0 = b, w.reactionCapability0 = i;
                                else {
                                    var x = 3 * (w.reactionLength - 1);
                                    w[x + d] = y, w[x + h] = b, w[x + m] = i
                                }
                                w.reactionLength += 1
                            } else if (w.state === f) s = w.result, v(y, i, s);
                            else {
                                if (w.state !== p) throw new TypeError("unexpected Promise state");
                                s = w.result, v(b, i, s)
                            }
                            return i.promise
                        }
                    }), g = new r(k), o = i.then, k
                }
            }();
            if (S.Promise && (delete S.Promise.accept, delete S.Promise.defer, delete S.Promise.prototype.chain), "function" == typeof En) {
                y(S, {
                    Promise: En
                });
                var Nn = T(S.Promise, function(e) {
                        return e.resolve(42).then(function() {}) instanceof e
                    }),
                    _n = !a(function() {
                        S.Promise.reject(42).then(null, 5).then(null, $)
                    }),
                    Pn = a(function() {
                        S.Promise.call(3, $)
                    }),
                    In = function(e) {
                        var t = e.resolve(5);
                        t.constructor = {};
                        var n = e.resolve(t);
                        try {
                            n.then(null, $).then(null, $)
                        } catch (e) {
                            return !0
                        }
                        return t === n
                    }(S.Promise),
                    Mn = l && function() {
                        var e = 0,
                            t = Object.defineProperty({}, "then", {
                                get: function() {
                                    e += 1
                                }
                            });
                        return Promise.resolve(t), 1 === e
                    }(),
                    Ln = function e(t) {
                        var n = new Promise(t);
                        t(3, function() {}), this.then = n.then, this.constructor = e
                    };
                Ln.prototype = Promise.prototype, Ln.all = Promise.all;
                var Fn = s(function() {
                    return !!Ln.all([1, 2])
                });
                if (Nn && _n && Pn && !In && Mn && !Fn || (Promise = En, Z(S, "Promise", En)), 1 !== Promise.all.length) {
                    var Dn = Promise.all;
                    Z(Promise, "all", function() {
                        return ne.Call(Dn, this, arguments)
                    })
                }
                if (1 !== Promise.race.length) {
                    var Rn = Promise.race;
                    Z(Promise, "race", function() {
                        return ne.Call(Rn, this, arguments)
                    })
                }
                if (1 !== Promise.resolve.length) {
                    var qn = Promise.resolve;
                    Z(Promise, "resolve", function() {
                        return ne.Call(qn, this, arguments)
                    })
                }
                if (1 !== Promise.reject.length) {
                    var Hn = Promise.reject;
                    Z(Promise, "reject", function() {
                        return ne.Call(Hn, this, arguments)
                    })
                }
                xt(Promise, "all"), xt(Promise, "race"), xt(Promise, "resolve"), xt(Promise, "reject"), we(Promise)
            }
            var $n = function(e) {
                    var t = i(d(e, function(e, t) {
                        return e[t] = !0, e
                    }, {}));
                    return e.join(":") === t.join(":")
                },
                Bn = $n(["z", "a", "bb"]),
                Vn = $n(["z", 1, "a", "3", 2]);
            if (l) {
                var Wn = function(e) {
                        return Bn ? "undefined" == typeof e || null === e ? "^" + ne.ToString(e) : "string" == typeof e ? "$" + e : "number" == typeof e ? Vn ? e : "n" + e : "boolean" == typeof e ? "b" + e : null : null
                    },
                    zn = function() {
                        return Object.create ? Object.create(null) : {}
                    },
                    Un = function(e, t, i) {
                        if (r(i) || Y.string(i)) p(i, function(e) {
                            if (!ne.TypeIsObject(e)) throw new TypeError("Iterator value " + e + " is not an entry object");
                            t.set(e[0], e[1])
                        });
                        else if (i instanceof e) n(e.prototype.forEach, i, function(e, n) {
                            t.set(n, e)
                        });
                        else {
                            var o, a;
                            if (null !== i && "undefined" != typeof i) {
                                if (a = t.set, !ne.IsCallable(a)) throw new TypeError("bad map");
                                o = ne.GetIterator(i)
                            }
                            if ("undefined" != typeof o)
                                for (;;) {
                                    var s = ne.IteratorStep(o);
                                    if (s === !1) break;
                                    var u = s.value;
                                    try {
                                        if (!ne.TypeIsObject(u)) throw new TypeError("Iterator value " + u + " is not an entry object");
                                        n(a, t, u[0], u[1])
                                    } catch (e) {
                                        throw ne.IteratorClose(o, !0), e
                                    }
                                }
                        }
                    },
                    Gn = function(e, t, i) {
                        if (r(i) || Y.string(i)) p(i, function(e) {
                            t.add(e)
                        });
                        else if (i instanceof e) n(e.prototype.forEach, i, function(e) {
                            t.add(e)
                        });
                        else {
                            var o, a;
                            if (null !== i && "undefined" != typeof i) {
                                if (a = t.add, !ne.IsCallable(a)) throw new TypeError("bad set");
                                o = ne.GetIterator(i)
                            }
                            if ("undefined" != typeof o)
                                for (;;) {
                                    var s = ne.IteratorStep(o);
                                    if (s === !1) break;
                                    var u = s.value;
                                    try {
                                        n(a, t, u)
                                    } catch (e) {
                                        throw ne.IteratorClose(o, !0), e
                                    }
                                }
                        }
                    },
                    Xn = {
                        Map: function() {
                            var e = {},
                                t = function(e, t) {
                                    this.key = e, this.value = t, this.next = null, this.prev = null
                                };
                            t.prototype.isRemoved = function() {
                                return this.key === e
                            };
                            var r = function(e) {
                                    return !!e._es6map
                                },
                                i = function(e, t) {
                                    if (!ne.TypeIsObject(e) || !r(e)) throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + ne.ToString(e))
                                },
                                o = function(e, t) {
                                    i(e, "[[MapIterator]]"), this.head = e._head, this.i = this.head, this.kind = t
                                };
                            o.prototype = {
                                next: function() {
                                    var e = this.i,
                                        t = this.kind,
                                        n = this.head;
                                    if ("undefined" == typeof this.i) return Be();
                                    for (; e.isRemoved() && e !== n;) e = e.prev;
                                    for (var r; e.next !== n;)
                                        if (e = e.next, !e.isRemoved()) return r = "key" === t ? e.key : "value" === t ? e.value : [e.key, e.value], this.i = e, Be(r);
                                    return this.i = void 0, Be()
                                }
                            }, xe(o.prototype);
                            var a, s = function e() {
                                if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                                if (this && this._es6map) throw new TypeError("Bad construction");
                                var n = Se(this, e, a, {
                                        _es6map: !0,
                                        _head: null,
                                        _storage: zn(),
                                        _size: 0
                                    }),
                                    r = new t(null, null);
                                return r.next = r.prev = r, n._head = r, arguments.length > 0 && Un(e, n, arguments[0]), n
                            };
                            return a = s.prototype, w.getter(a, "size", function() {
                                if ("undefined" == typeof this._size) throw new TypeError("size method called on incompatible Map");
                                return this._size
                            }), y(a, {
                                get: function(e) {
                                    i(this, "get");
                                    var t = Wn(e);
                                    if (null !== t) {
                                        var n = this._storage[t];
                                        return n ? n.value : void 0
                                    }
                                    for (var r = this._head, o = r;
                                        (o = o.next) !== r;)
                                        if (ne.SameValueZero(o.key, e)) return o.value
                                },
                                has: function(e) {
                                    i(this, "has");
                                    var t = Wn(e);
                                    if (null !== t) return "undefined" != typeof this._storage[t];
                                    for (var n = this._head, r = n;
                                        (r = r.next) !== n;)
                                        if (ne.SameValueZero(r.key, e)) return !0;
                                    return !1
                                },
                                set: function(e, n) {
                                    i(this, "set");
                                    var r, o = this._head,
                                        a = o,
                                        s = Wn(e);
                                    if (null !== s) {
                                        if ("undefined" != typeof this._storage[s]) return this._storage[s].value = n, this;
                                        r = this._storage[s] = new t(e, n), a = o.prev
                                    }
                                    for (;
                                        (a = a.next) !== o;)
                                        if (ne.SameValueZero(a.key, e)) return a.value = n, this;
                                    return r = r || new t(e, n), ne.SameValue(-0, e) && (r.key = 0), r.next = this._head, r.prev = this._head.prev, r.prev.next = r, r.next.prev = r, this._size += 1, this
                                },
                                delete: function(t) {
                                    i(this, "delete");
                                    var n = this._head,
                                        r = n,
                                        o = Wn(t);
                                    if (null !== o) {
                                        if ("undefined" == typeof this._storage[o]) return !1;
                                        r = this._storage[o].prev, delete this._storage[o]
                                    }
                                    for (;
                                        (r = r.next) !== n;)
                                        if (ne.SameValueZero(r.key, t)) return r.key = r.value = e, r.prev.next = r.next, r.next.prev = r.prev, this._size -= 1, !0;
                                    return !1
                                },
                                clear: function() {
                                    i(this, "clear"), this._size = 0, this._storage = zn();
                                    for (var t = this._head, n = t, r = n.next;
                                        (n = r) !== t;) n.key = n.value = e, r = n.next, n.next = n.prev = t;
                                    t.next = t.prev = t
                                },
                                keys: function() {
                                    return i(this, "keys"), new o(this, "key")
                                },
                                values: function() {
                                    return i(this, "values"), new o(this, "value")
                                },
                                entries: function() {
                                    return i(this, "entries"), new o(this, "key+value")
                                },
                                forEach: function(e) {
                                    i(this, "forEach");
                                    for (var t = arguments.length > 1 ? arguments[1] : null, r = this.entries(), o = r.next(); !o.done; o = r.next()) t ? n(e, t, o.value[1], o.value[0], this) : e(o.value[1], o.value[0], this)
                                }
                            }), xe(a, a.entries), s
                        }(),
                        Set: function() {
                            var e, t = function(e) {
                                    return e._es6set && "undefined" != typeof e._storage
                                },
                                r = function(e, n) {
                                    if (!ne.TypeIsObject(e) || !t(e)) throw new TypeError("Set.prototype." + n + " called on incompatible receiver " + ne.ToString(e))
                                },
                                o = function t() {
                                    if (!(this instanceof t)) throw new TypeError('Constructor Set requires "new"');
                                    if (this && this._es6set) throw new TypeError("Bad construction");
                                    var n = Se(this, t, e, {
                                        _es6set: !0,
                                        "[[SetData]]": null,
                                        _storage: zn()
                                    });
                                    if (!n._es6set) throw new TypeError("bad set");
                                    return arguments.length > 0 && Gn(t, n, arguments[0]), n
                                };
                            e = o.prototype;
                            var a = function(e) {
                                    var t = e;
                                    if ("^null" === t) return null;
                                    if ("^undefined" === t) return void 0;
                                    var n = t.charAt(0);
                                    return "$" === n ? E(t, 1) : "n" === n ? +E(t, 1) : "b" === n ? "btrue" === t : +t
                                },
                                s = function(e) {
                                    if (!e["[[SetData]]"]) {
                                        var t = e["[[SetData]]"] = new Xn.Map;
                                        p(i(e._storage), function(e) {
                                            var n = a(e);
                                            t.set(n, n)
                                        }), e["[[SetData]]"] = t
                                    }
                                    e._storage = null
                                };
                            return w.getter(o.prototype, "size", function() {
                                return r(this, "size"), this._storage ? i(this._storage).length : (s(this), this["[[SetData]]"].size)
                            }), y(o.prototype, {
                                has: function(e) {
                                    r(this, "has");
                                    var t;
                                    return this._storage && null !== (t = Wn(e)) ? !!this._storage[t] : (s(this), this["[[SetData]]"].has(e))
                                },
                                add: function(e) {
                                    r(this, "add");
                                    var t;
                                    return this._storage && null !== (t = Wn(e)) ? (this._storage[t] = !0, this) : (s(this), this["[[SetData]]"].set(e, e), this)
                                },
                                delete: function(e) {
                                    r(this, "delete");
                                    var t;
                                    if (this._storage && null !== (t = Wn(e))) {
                                        var n = H(this._storage, t);
                                        return delete this._storage[t] && n
                                    }
                                    return s(this), this["[[SetData]]"].delete(e)
                                },
                                clear: function() {
                                    r(this, "clear"), this._storage && (this._storage = zn()), this["[[SetData]]"] && this["[[SetData]]"].clear()
                                },
                                values: function() {
                                    return r(this, "values"), s(this), this["[[SetData]]"].values()
                                },
                                entries: function() {
                                    return r(this, "entries"), s(this), this["[[SetData]]"].entries()
                                },
                                forEach: function(e) {
                                    r(this, "forEach");
                                    var t = arguments.length > 1 ? arguments[1] : null,
                                        i = this;
                                    s(i), this["[[SetData]]"].forEach(function(r, o) {
                                        t ? n(e, t, o, o, i) : e(o, o, i)
                                    })
                                }
                            }), g(o.prototype, "keys", o.prototype.values, !0), xe(o.prototype, o.prototype.values), o
                        }()
                    };
                if (S.Map || S.Set) {
                    var Jn = s(function() {
                        return 2 === new Map([
                            [1, 2]
                        ]).get(1)
                    });
                    if (!Jn) {
                        var Yn = S.Map;
                        S.Map = function e() {
                            if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                            var t = new Yn;
                            return arguments.length > 0 && Un(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, S.Map.prototype), t
                        }, S.Map.prototype = x(Yn.prototype), g(S.Map.prototype, "constructor", S.Map, !0), w.preserveToString(S.Map, Yn)
                    }
                    var Zn = new Map,
                        Qn = function() {
                            var e = new Map([
                                [1, 0],
                                [2, 0],
                                [3, 0],
                                [4, 0]
                            ]);
                            return e.set(-0, e), e.get(0) === e && e.get(-0) === e && e.has(0) && e.has(-0)
                        }(),
                        Kn = Zn.set(1, 2) === Zn;
                    if (!Qn || !Kn) {
                        var er = Map.prototype.set;
                        Z(Map.prototype, "set", function(e, t) {
                            return n(er, this, 0 === e ? 0 : e, t), this
                        })
                    }
                    if (!Qn) {
                        var tr = Map.prototype.get,
                            nr = Map.prototype.has;
                        y(Map.prototype, {
                            get: function(e) {
                                return n(tr, this, 0 === e ? 0 : e)
                            },
                            has: function(e) {
                                return n(nr, this, 0 === e ? 0 : e)
                            }
                        }, !0), w.preserveToString(Map.prototype.get, tr), w.preserveToString(Map.prototype.has, nr)
                    }
                    var rr = new Set,
                        ir = function(e) {
                            return e.delete(0), e.add(-0), !e.has(0)
                        }(rr),
                        or = rr.add(1) === rr;
                    if (!ir || !or) {
                        var ar = Set.prototype.add;
                        Set.prototype.add = function(e) {
                            return n(ar, this, 0 === e ? 0 : e), this
                        }, w.preserveToString(Set.prototype.add, ar)
                    }
                    if (!ir) {
                        var sr = Set.prototype.has;
                        Set.prototype.has = function(e) {
                            return n(sr, this, 0 === e ? 0 : e)
                        }, w.preserveToString(Set.prototype.has, sr);
                        var ur = Set.prototype.delete;
                        Set.prototype.delete = function(e) {
                            return n(ur, this, 0 === e ? 0 : e)
                        }, w.preserveToString(Set.prototype.delete, ur)
                    }
                    var cr = T(S.Map, function(e) {
                            var t = new e([]);
                            return t.set(42, 42), t instanceof e
                        }),
                        lr = Object.setPrototypeOf && !cr,
                        fr = function() {
                            try {
                                return !(S.Map() instanceof S.Map)
                            } catch (e) {
                                return e instanceof TypeError
                            }
                        }();
                    if (0 !== S.Map.length || lr || !fr) {
                        var pr = S.Map;
                        S.Map = function e() {
                            if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                            var t = new pr;
                            return arguments.length > 0 && Un(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t
                        }, S.Map.prototype = pr.prototype, g(S.Map.prototype, "constructor", S.Map, !0), w.preserveToString(S.Map, pr)
                    }
                    var dr = T(S.Set, function(e) {
                            var t = new e([]);
                            return t.add(42, 42), t instanceof e
                        }),
                        hr = Object.setPrototypeOf && !dr,
                        mr = function() {
                            try {
                                return !(S.Set() instanceof S.Set)
                            } catch (e) {
                                return e instanceof TypeError
                            }
                        }();
                    if (0 !== S.Set.length || hr || !mr) {
                        var gr = S.Set;
                        S.Set = function e() {
                            if (!(this instanceof e)) throw new TypeError('Constructor Set requires "new"');
                            var t = new gr;
                            return arguments.length > 0 && Gn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t
                        }, S.Set.prototype = gr.prototype, g(S.Set.prototype, "constructor", S.Set, !0), w.preserveToString(S.Set, gr)
                    }
                    var yr = new S.Map,
                        vr = !s(function() {
                            return yr.keys().next().done
                        });
                    if (("function" != typeof S.Map.prototype.clear || 0 !== (new S.Set).size || 0 !== yr.size || "function" != typeof S.Map.prototype.keys || "function" != typeof S.Set.prototype.keys || "function" != typeof S.Map.prototype.forEach || "function" != typeof S.Set.prototype.forEach || u(S.Map) || u(S.Set) || "function" != typeof yr.keys().next || vr || !cr) && y(S, {
                            Map: Xn.Map,
                            Set: Xn.Set
                        }, !0), S.Set.prototype.keys !== S.Set.prototype.values && g(S.Set.prototype, "keys", S.Set.prototype.values, !0), xe(Object.getPrototypeOf((new S.Map).keys())), xe(Object.getPrototypeOf((new S.Set).keys())), f && "has" !== S.Set.prototype.has.name) {
                        var br = S.Set.prototype.has;
                        Z(S.Set.prototype, "has", function(e) {
                            return n(br, this, e)
                        })
                    }
                }
                y(S, Xn), we(S.Map), we(S.Set)
            }
            var wr = function(e) {
                    if (!ne.TypeIsObject(e)) throw new TypeError("target must be an object")
                },
                xr = {
                    apply: function() {
                        return ne.Call(ne.Call, null, arguments)
                    },
                    construct: function(e, t) {
                        if (!ne.IsConstructor(e)) throw new TypeError("First argument must be a constructor.");
                        var n = arguments.length > 2 ? arguments[2] : e;
                        if (!ne.IsConstructor(n)) throw new TypeError("new.target must be a constructor.");
                        return ne.Construct(e, t, n, "internal")
                    },
                    deleteProperty: function(e, t) {
                        if (wr(e), l) {
                            var n = Object.getOwnPropertyDescriptor(e, t);
                            if (n && !n.configurable) return !1
                        }
                        return delete e[t]
                    },
                    has: function(e, t) {
                        return wr(e), t in e
                    }
                };
            Object.getOwnPropertyNames && Object.assign(xr, {
                ownKeys: function(e) {
                    wr(e);
                    var t = Object.getOwnPropertyNames(e);
                    return ne.IsCallable(Object.getOwnPropertySymbols) && _(t, Object.getOwnPropertySymbols(e)), t
                }
            });
            var Tr = function(e) {
                return !a(e)
            };
            if (Object.preventExtensions && Object.assign(xr, {
                    isExtensible: function(e) {
                        return wr(e), Object.isExtensible(e)
                    },
                    preventExtensions: function(e) {
                        return wr(e), Tr(function() {
                            Object.preventExtensions(e)
                        })
                    }
                }), l) {
                var Or = function(e, t, n) {
                        var r = Object.getOwnPropertyDescriptor(e, t);
                        if (!r) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : Or(i, t, n)
                        }
                        return "value" in r ? r.value : r.get ? ne.Call(r.get, n) : void 0
                    },
                    Sr = function(e, t, r, i) {
                        var o = Object.getOwnPropertyDescriptor(e, t);
                        if (!o) {
                            var a = Object.getPrototypeOf(e);
                            if (null !== a) return Sr(a, t, r, i);
                            o = {
                                value: void 0,
                                writable: !0,
                                enumerable: !0,
                                configurable: !0
                            }
                        }
                        if ("value" in o) {
                            if (!o.writable) return !1;
                            if (!ne.TypeIsObject(i)) return !1;
                            var s = Object.getOwnPropertyDescriptor(i, t);
                            return s ? ee.defineProperty(i, t, {
                                value: r
                            }) : ee.defineProperty(i, t, {
                                value: r,
                                writable: !0,
                                enumerable: !0,
                                configurable: !0
                            })
                        }
                        return o.set ? (n(o.set, i, r), !0) : !1
                    };
                Object.assign(xr, {
                    defineProperty: function(e, t, n) {
                        return wr(e), Tr(function() {
                            Object.defineProperty(e, t, n)
                        })
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        return wr(e), Object.getOwnPropertyDescriptor(e, t)
                    },
                    get: function(e, t) {
                        wr(e);
                        var n = arguments.length > 2 ? arguments[2] : e;
                        return Or(e, t, n)
                    },
                    set: function(e, t, n) {
                        wr(e);
                        var r = arguments.length > 3 ? arguments[3] : e;
                        return Sr(e, t, n, r)
                    }
                })
            }
            if (Object.getPrototypeOf) {
                var jr = Object.getPrototypeOf;
                xr.getPrototypeOf = function(e) {
                    return wr(e), jr(e)
                }
            }
            if (Object.setPrototypeOf && xr.getPrototypeOf) {
                var kr = function(e, t) {
                    for (var n = t; n;) {
                        if (e === n) return !0;
                        n = xr.getPrototypeOf(n)
                    }
                    return !1
                };
                Object.assign(xr, {
                    setPrototypeOf: function(e, t) {
                        if (wr(e), null !== t && !ne.TypeIsObject(t)) throw new TypeError("proto must be an object or null");
                        return t === ee.getPrototypeOf(e) ? !0 : ee.isExtensible && !ee.isExtensible(e) ? !1 : kr(e, t) ? !1 : (Object.setPrototypeOf(e, t), !0)
                    }
                })
            }
            var Cr = function(e, t) {
                if (ne.IsCallable(S.Reflect[e])) {
                    var n = s(function() {
                        return S.Reflect[e](1), S.Reflect[e](0 / 0), S.Reflect[e](!0), !0
                    });
                    n && Z(S.Reflect, e, t)
                } else g(S.Reflect, e, t)
            };
            Object.keys(xr).forEach(function(e) {
                Cr(e, xr[e])
            });
            var Ar = S.Reflect.getPrototypeOf;
            if (f && Ar && "getPrototypeOf" !== Ar.name && Z(S.Reflect, "getPrototypeOf", function(e) {
                    return n(Ar, S.Reflect, e)
                }), S.Reflect.setPrototypeOf && s(function() {
                    return S.Reflect.setPrototypeOf(1, {}), !0
                }) && Z(S.Reflect, "setPrototypeOf", xr.setPrototypeOf), S.Reflect.defineProperty && (s(function() {
                    var e = !S.Reflect.defineProperty(1, "test", {
                            value: 1
                        }),
                        t = "function" != typeof Object.preventExtensions || !S.Reflect.defineProperty(Object.preventExtensions({}), "test", {});
                    return e && t
                }) || Z(S.Reflect, "defineProperty", xr.defineProperty)), S.Reflect.construct && (s(function() {
                    var e = function() {};
                    return S.Reflect.construct(function() {}, [], e) instanceof e
                }) || Z(S.Reflect, "construct", xr.construct)), "Invalid Date" !== String(new Date(0 / 0))) {
                var Er = Date.prototype.toString,
                    Nr = function() {
                        var e = +this;
                        return e !== e ? "Invalid Date" : ne.Call(Er, this)
                    };
                Z(Date.prototype, "toString", Nr)
            }
            var _r = {
                anchor: function(e) {
                    return ne.CreateHTML(this, "a", "name", e)
                },
                big: function() {
                    return ne.CreateHTML(this, "big", "", "")
                },
                blink: function() {
                    return ne.CreateHTML(this, "blink", "", "")
                },
                bold: function() {
                    return ne.CreateHTML(this, "b", "", "")
                },
                fixed: function() {
                    return ne.CreateHTML(this, "tt", "", "")
                },
                fontcolor: function(e) {
                    return ne.CreateHTML(this, "font", "color", e)
                },
                fontsize: function(e) {
                    return ne.CreateHTML(this, "font", "size", e)
                },
                italics: function() {
                    return ne.CreateHTML(this, "i", "", "")
                },
                link: function(e) {
                    return ne.CreateHTML(this, "a", "href", e)
                },
                small: function() {
                    return ne.CreateHTML(this, "small", "", "")
                },
                strike: function() {
                    return ne.CreateHTML(this, "strike", "", "")
                },
                sub: function() {
                    return ne.CreateHTML(this, "sub", "", "")
                },
                sup: function() {
                    return ne.CreateHTML(this, "sup", "", "")
                }
            };
            p(Object.keys(_r), function(e) {
                var t = String.prototype[e],
                    r = !1;
                if (ne.IsCallable(t)) {
                    var i = n(t, "", ' " '),
                        o = A([], i.match(/"/g)).length;
                    r = i !== i.toLowerCase() || o > 2
                } else r = !0;
                r && Z(String.prototype, e, _r[e])
            });
            var Pr = function() {
                    if (!Q) return !1;
                    var e = "object" === ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && "function" == typeof JSON.stringify ? JSON.stringify : null;
                    if (!e) return !1;
                    if ("undefined" != typeof e(B())) return !0;
                    if ("[null]" !== e([B()])) return !0;
                    var t = {
                        a: B()
                    };
                    return t[B()] = !0, "{}" !== e(t) ? !0 : !1
                }(),
                Ir = s(function() {
                    return Q ? "{}" === JSON.stringify(Object(B())) && "[{}]" === JSON.stringify([Object(B())]) : !0
                });
            if (Pr || !Ir) {
                var Mr = JSON.stringify;
                Z(JSON, "stringify", function(e) {
                    if ("symbol" !== ("undefined" == typeof e ? "undefined" : _typeof(e))) {
                        var t;
                        arguments.length > 1 && (t = arguments[1]);
                        var i = [e];
                        if (r(t)) i.push(t);
                        else {
                            var o = ne.IsCallable(t) ? t : null,
                                a = function(e, t) {
                                    var r = o ? n(o, this, e, t) : t;
                                    return "symbol" !== ("undefined" == typeof r ? "undefined" : _typeof(r)) ? Y.symbol(r) ? Ot({})(r) : r : void 0
                                };
                            i.push(a)
                        }
                        return arguments.length > 2 && i.push(arguments[2]), Mr.apply(this, i)
                    }
                })
            }
            return S
        }), define("jqueryplugins", ["jquery"], function(e) {
            e.prototype.extend({
                popAttr: function(e) {
                    var t = this.attr(e);
                    return this.removeAttr(e), t
                },
                popData: function(e) {
                    var t = this.data(e);
                    return this.removeData(e), t
                },
                tag: function() {
                    return this[0] && this[0].tagName && this[0].tagName.toLowerCase()
                },
                textNodes: function() {
                    return 1 === this.length && this[0] instanceof Text ? [this[0]] : Array.from(this.add(this.contents().add(this.find("*").contents())).filter(function() {
                        return this instanceof Text
                    })).sort(function(e, t) {
                        return 2 & e.compareDocumentPosition(t) ? 1 : -1
                    })
                },
                findAndFilter: function(e) {
                    return this.filter(e).add(this.find(e))
                }
            })
        }),
        function() {
            function e() {
                for (var e = 0; e < arguments.length; e++)
                    for (var t in arguments[e]) this[t] = arguments[e][t]
            }

            function t(e, t) {
                e.childAt = e.childAt || {};
                for (var n = t.start; n < t.end; n += 1) e.childAt[n] = t
            }

            function n(e, t, n, r) {
                return !(e.canFollow && !(e.canFollow.indexOf(n && n.type) > -1) || e.cannotFollow && (-1 !== e.cannotFollow.indexOf(n && n.type) || e.cannotFollow.indexOf("text") > -1 && r) || e.peek && e.peek.toLowerCase() !== t.slice(0, e.peek.length).toLowerCase())
            }

            function r(e) {
                for (var t = e.innerText, r = [], o = 0, s = o, u = t.length, c = null; u > o;) {
                    for (var l = t.slice(o), f = (r.length ? r[0] : e).innerMode, p = 0, d = f.length; d > p; p += 1) {
                        var h = a[f[p]];
                        if (n(h, l, c, o > s) && h.pattern.test(l)) {
                            var m = h.pattern.exec(l),
                                g = h.fn(m),
                                y = !1,
                                v = 0;
                            if (g.matches) {
                                for (; v < r.length; v += 1) {
                                    var b = r[v].type;
                                    if (b in g.matches) {
                                        y = !0;
                                        break
                                    }
                                    0 === b.indexOf("verbatim") && (b = "verbatimOpener"), g.cannotCross && g.cannotCross.indexOf(b) > -1 && (v = r.length - 1)
                                }
                                if (v >= r.length && !g.isFront) continue
                            }
                            o > s && e.addChild({
                                type: "text",
                                text: t.slice(s, o),
                                innerMode: f
                            }), c = e.addChild(g), o += c.text.length, s = o, y && (i(e, c, r[v]), r = r.slice(v + 1)), c.isFrontToken() && r.unshift(c);
                            break
                        }
                    }
                    p === d && (o += 1, null === c && (c = {
                        type: "text"
                    }))
                }
                for (o > s && e.addChild({
                        type: "text",
                        text: t.slice(s, o),
                        innerMode: (r.length ? r[0] : e).innerMode
                    }); r.length > 0;) r.shift().demote();
                return e
            }

            function i(e, n, r) {
                var i = e.children.indexOf(n),
                    o = e.children.indexOf(r);
                n.children = e.children.splice(o + 1, i - (o + 1)), n.children.forEach(function(e) {
                    t(n, e)
                }), n.type = n.matches[r.type], n.innerText = "";
                for (var a = 0, s = n.children.length; s > a; a++) n.innerText += n.children[a].text;
                n.start = r.start, n.text = r.text + n.innerText + n.text, Object.keys(r).forEach(function(e) {
                    Object.hasOwnProperty.call(n, e) || (n[e] = r[e])
                }), n.isFront && (n.isFront = !1), e.children.splice(o, 1), t(e, n)
            }
            var o = void 0,
                a = {};
            e.prototype = {
                constructor: e,
                addChild: function(n) {
                    var i = this.lastChildEnd(),
                        o = new e({
                            start: i,
                            end: n.text && i + n.text.length,
                            children: []
                        }, n);
                    return o.innerText && r(o), this.children.push(o), t(this, o), o
                },
                lastChild: function() {
                    return this.children ? this.children[this.children.length - 1] || null : null
                },
                lastChildEnd: function() {
                    var e = this.lastChild();
                    return e ? e.end : this.start + Math.max(0, this.text.indexOf(this.innerText))
                },
                tokenAt: function(e) {
                    if (e < this.start || e >= this.end) return null;
                    if (this.childAt) return this.childAt[e] && this.childAt[e].tokenAt(e) || this;
                    if (this.children.length)
                        for (var t = 0; t < this.children.length; t += 1) {
                            var n = this.children[t].tokenAt(e);
                            if (n) return n
                        }
                    return this
                },
                pathAt: function(e) {
                    if (e < this.start || e >= this.end) return [];
                    if (this.childAt) return (this.childAt[e] && this.childAt[e].pathAt(e) || []).concat(this);
                    var t = [];
                    if (this.children.length)
                        for (var n = 0; n < this.children.length; n += 1) {
                            var r = this.children[n].pathAt(e);
                            if (r.length) {
                                t.concat(r);
                                break
                            }
                        }
                    return t.concat(this)
                },
                nearestTokenAt: function(e) {
                    return e < this.start || e >= this.end ? null : this.children ? this.children.reduce(function(t, n) {
                        return t || (e >= n.start && e < n.end ? n : null)
                    }, null) : this
                },
                everyLeaf: function(e) {
                    return this.children && 0 !== this.children.length ? this.children.reduce(function(t, n) {
                        return n.everyLeaf(e) && t
                    }, !0) : !!e(this)
                },
                isWhitespace: function() {
                    return this.everyLeaf(function(e) {
                        return "whitespace" === e.type || !e.text.trim()
                    })
                },
                isFrontToken: function() {
                    return this.isFront
                },
                isBackToken: function() {
                    return "matches" in this
                },
                demote: function() {
                    this.type = "text"
                },
                error: function(e) {
                    this.type = "error", this.message = e
                },
                toString: function() {
                    var e = this.type + "(" + this.start + "\u2192" + this.end + ")";
                    return this.children && this.children.length > 0 && (e += "[" + this.children + "]"), e
                }
            }, o = {
                lex: function(t, n) {
                    return r(new e({
                        type: "root",
                        start: n || 0,
                        end: t.length,
                        text: t,
                        innerText: t,
                        children: [],
                        childAt: {},
                        innerMode: o.modes.start
                    }))
                },
                rules: a,
                modes: {}
            }, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = o : "function" == typeof define && define.amd ? define("lexer", [], function() {
                return o
            }) : this && this.loaded ? (this.modules || (this.modules = {}), this.modules.Lexer = o) : this.TwineLexer = o
        }.call(eval("this") || ("undefined" != typeof global ? global : window)),
        function() {
            function e(t) {
                return t && "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) ? (Object.keys(t).forEach(function(n) {
                    t[n] = e(t[n])
                }), t) : (t + "").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }

            function t() {
                return "[^" + Array.apply(0, arguments).map(e).join("") + "]*"
            }

            function n(e) {
                return function() {
                    return "(" + e + Array.apply(0, arguments).join("|") + ")"
                }
            }
            var r = void 0,
                i = n("?:"),
                o = n("?!"),
                a = n("?="),
                s = "[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*",
                u = s.replace("*", "+"),
                c = "\\b",
                l = "\\\\\\n\\\\?|\\n\\\\",
                f = "\\n(?!\\\\)",
                p = "[\\w\\-\\u00c0-\\u00de\\u00df-\\u00ff\\u0150\\u0170\\u0151\\u0171\\uD800-\\uDFFF]",
                d = p.replace("\\-", ""),
                h = i("\\n", "$"),
                m = "(" + i(l, "[^\\n]") + "+)",
                g = "\\*",
                y = s + "(" + g + "+)" + u + m + h,
                v = "(?:0\\.)",
                b = s + "(" + v + "+)" + u + m + h,
                w = s + "-{3,}" + s + h,
                x = s + "(#{1,6})" + s + m + h,
                T = s + "(==+>|<=+|=+><=+|<==+>)" + s + h,
                O = s + "(=+\\|+|\\|+=+|=+\\|+=+|\\|=+\\|)" + s + h,
                S = {
                    opener: "\\[\\[(?!\\[)",
                    text: "(" + t("]") + ")",
                    rightSeparator: i("\\->", "\\|"),
                    leftSeparator: "<\\-",
                    closer: "\\]\\]",
                    legacySeparator: "\\|",
                    legacyText: "(" + i("[^\\|\\]]", "\\]" + o("\\]")) + "+)"
                },
                j = d + "*" + d.replace("\\w", "a-zA-Z") + d + "*",
                k = "\\$(" + j + ")",
                C = "'s" + u + "(" + j + ")",
                A = "(" + j + ")" + u + "of" + c + o("it" + c),
                E = "'s" + u,
                N = "of" + c,
                _ = i("it", "time") + c,
                P = "its" + u + "(" + j + ")",
                I = "its" + u,
                M = "(" + j + ")" + u + "of" + u + "it" + c,
                L = "of" + c + u + "it" + c,
                F = {
                    opener: "\\(",
                    name: "(" + i(p + "+", k) + "):" + o("\\/"),
                    closer: "\\)"
                },
                D = "<<[^>\\s]+\\s*(?:\\\\.|'(?:[^'\\\\]*\\\\.)*[^'\\\\]*'|\"(?:[^\"\\\\]*\\\\.)*[^\"\\\\]*\"|[^'\"\\\\>]|>(?!>))*>>",
                R = i("=<", "=>", "[gl]te?" + c, "n?eq" + c, "isnot" + c, "are" + c, "x" + c),
                q = {
                    name: "[a-zA-Z][\\w\\-]*",
                    attrs: "(?:\"[^\"]*\"|'[^']*'|[^'\">])*?"
                },
                H = "\\|(" + p + "+)(>|\\))",
                $ = "(<|\\()(" + p + "+)\\|",
                B = "_(" + j + ")" + c,
                V = "\\b(\\-?\\d+(?:\\.\\d+)?(?:[eE][+\\-]?\\d+)?|NaN)" + o("m?s") + c;
            S.main = S.opener + i(S.text + S.rightSeparator, S.text.replace("*", "*?") + S.leftSeparator) + S.text, r = {
                upperLetter: "[A-Z\\u00c0-\\u00de\\u0150\\u0170]",
                lowerLetter: "[a-z0-9_\\-\\u00df-\\u00ff\\u0151\\u0171]",
                anyLetter: p,
                anyLetterStrict: d,
                whitespace: u,
                escapedLine: l,
                br: f,
                commentFront: "<!--",
                commentBack: "-->",
                tag: "<\\/?" + q.name + q.attrs + ">",
                tagPeek: "<",
                scriptStyleTag: "<(" + i("script", "style") + ")" + q.attrs + ">[^]*?<\\/\\1>",
                scriptStyleTagOpener: "<",
                url: "(" + i("https?", "mailto", "javascript", "ftp", "data") + ":\\/\\/[^\\s<]+[^<.,:;\"')\\]\\s])",
                bullet: g,
                hr: w,
                heading: x,
                align: T,
                column: O,
                bulleted: y,
                numbered: b,
                delOpener: e("~~"),
                italicOpener: e("//"),
                boldOpener: e("''"),
                supOpener: e("^^"),
                strongFront: e("**"),
                strongBack: e("**"),
                emFront: e("*"),
                emBack: e("*"),
                verbatimOpener: "`+",
                collapsedFront: "{",
                collapsedBack: "}",
                hookAppendedFront: "\\[",
                hookPrependedFront: H + "\\[",
                hookFront: "\\[",
                hookBack: "\\]" + o($),
                hookAppendedBack: "\\]" + $,
                passageLink: S.main + S.closer,
                passageLinkPeek: "[[",
                legacyLink: S.opener + S.legacyText + S.legacySeparator + S.legacyText + S.closer,
                legacyLinkPeek: "[[",
                simpleLink: S.opener + S.legacyText + S.closer,
                simpleLinkPeek: "[[",
                macroFront: F.opener + a(F.name),
                macroFrontPeek: "(",
                macroName: F.name,
                groupingFront: "\\(" + o(F.name),
                groupingFrontPeek: "(",
                groupingBack: "\\)",
                twine1Macro: D,
                twine1MacroPeek: "<<",
                property: C,
                propertyPeek: "'s",
                belongingProperty: A,
                possessiveOperator: E,
                belongingOperator: N,
                belongingOperatorPeek: "of",
                itsOperator: I,
                itsOperatorPeek: "its",
                belongingItOperator: L,
                belongingItOperatorPeek: "of",
                variable: k,
                variablePeek: "$",
                tempVariable: B,
                tempVariablePeek: "_",
                hookRef: "\\?(" + p + "+)\\b",
                hookRefPeek: "?",
                cssTime: "(\\d+\\.?\\d*|\\d*\\.?\\d+)(m?s)" + c,
                colour: i(i("Red", "Orange", "Yellow", "Lime", "Green", "Cyan", "Aqua", "Blue", "Navy", "Purple", "Fuchsia", "Magenta", "White", "Gray", "Grey", "Black"), "#[\\dA-Fa-f]{3}(?:[\\dA-Fa-f]{3})?"),
                number: V,
                boolean: i("true", "false") + c,
                identifier: _,
                itsProperty: P,
                itsPropertyPeek: "its",
                belongingItProperty: M,
                escapedStringChar: "\\\\[^\\n]",
                singleStringOpener: "'",
                doubleStringOpener: '"',
                is: "is" + o(u + "not", u + "in", u + "<", u + ">") + c,
                isNot: "is" + u + "not" + c,
                and: "and" + c,
                or: "or" + c,
                not: "not" + c,
                inequality: "((?:is(?:" + u + "not)?" + s + ")*)(" + i("<(?!=)", "<=", ">(?!=)", ">=") + ")",
                isIn: "is" + u + "in" + c,
                contains: "contains" + c,
                addition: e("+") + o("="),
                subtraction: e("-") + o("=", "\\d"),
                multiplication: e("*") + o("="),
                division: i("/", "%") + o("="),
                comma: ",",
                spread: "\\.\\.\\." + o("\\."),
                to: i("to" + c, "="),
                into: "into" + c,
                making: "making" + c,
                where: "where" + c,
                via: "via" + c,
                with: "with" + c,
                each: "each" + c,
                augmentedAssign: i("\\+", "\\-", "\\*", "\\/", "%") + "=",
                incorrectOperator: R
            }, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = r : "function" == typeof define && define.amd ? define("patterns", [], function() {
                return r
            }) : this && this.loaded ? (this.modules || (this.modules = {}), this.modules.Patterns = r) : this.Patterns = r
        }.call(eval("this") || ("undefined" != typeof global ? global : window)),
        function() {
            function e(e) {
                function t(e) {
                    return e = e || "innerText",
                        function(t) {
                            var n = t.reduceRight(function(e, t, n) {
                                    return e || (n ? t : "")
                                }, ""),
                                r = {};
                            return r[e] = n, r
                        }
                }

                function r(e, t) {
                    var n = {};
                    return n[e] = t,
                        function() {
                            return {
                                isFront: !0,
                                matches: n,
                                cannotCross: ["verbatimOpener"]
                            }
                        }
                }

                function i(e, t) {
                    return Object.keys(t).forEach(function(n) {
                        var r = t[n].fn;
                        t[n].fn = function(t) {
                            var i = r(t);
                            return i.text || (i.text = t[0]), i.type || (i.type = n), i.innerMode || (i.innerMode = e), i
                        }
                    }), t
                }
                var o = Object.bind(0, null),
                    a = [],
                    s = [],
                    u = i(a, {
                        hr: {
                            fn: o
                        },
                        bulleted: {
                            fn: function(e) {
                                return {
                                    depth: e[1].length,
                                    innerText: e[2]
                                }
                            }
                        },
                        numbered: {
                            fn: function(e) {
                                return {
                                    depth: e[1].length / 2,
                                    innerText: e[2]
                                }
                            }
                        },
                        heading: {
                            fn: function(e) {
                                return {
                                    depth: e[1].length,
                                    innerText: e[2]
                                }
                            }
                        },
                        align: {
                            fn: function(e) {
                                var t = void 0,
                                    n = e[1],
                                    r = n.indexOf("><");
                                return ~r ? (t = Math.round(r / (n.length - 2) * 50), 25 === t && (t = "center")) : "<" === n[0] && ">" === n.slice(-1) ? t = "justify" : n.indexOf(">") > -1 ? t = "right" : n.indexOf("<") > -1 && (t = "left"), {
                                    align: t
                                }
                            }
                        },
                        column: {
                            fn: function(e) {
                                var t = void 0,
                                    n = e[1],
                                    r = n.indexOf("|");
                                return r && r < n.length - 1 ? t = "center" : "|" === n[0] && "|" === n.slice(-1) ? t = "none" : r === n.length - 1 ? t = "right" : r || (t = "left"), {
                                    column: t,
                                    width: /\|+/.exec(n)[0].length,
                                    marginLeft: /^=*/.exec(n)[0].length,
                                    marginRight: /=*$/.exec(n)[0].length
                                }
                            }
                        }
                    });
                Object.keys(u).forEach(function(e) {
                    u[e].canFollow = [null, "br", "hr", "bulleted", "numbered", "heading", "align"], u[e].cannotFollow = ["text"]
                });
                var c = i(a, {
                        twine1Macro: {
                            fn: function() {
                                return {
                                    type: "error",
                                    message: "Harlowe macros use a different syntax to Twine 1 and SugarCube macros."
                                }
                            }
                        },
                        emBack: {
                            fn: function() {
                                return {
                                    matches: {
                                        emFront: "em"
                                    },
                                    cannotCross: ["verbatimOpener"]
                                }
                            }
                        },
                        strongBack: {
                            fn: function() {
                                return {
                                    matches: {
                                        strongFront: "strong"
                                    },
                                    cannotCross: ["verbatimOpener"]
                                }
                            }
                        },
                        strongFront: {
                            fn: function() {
                                return {
                                    isFront: !0
                                }
                            }
                        },
                        emFront: {
                            fn: function() {
                                return {
                                    isFront: !0
                                }
                            }
                        },
                        boldOpener: {
                            fn: r("boldOpener", "bold")
                        },
                        italicOpener: {
                            fn: r("italicOpener", "italic")
                        },
                        delOpener: {
                            fn: r("delOpener", "del")
                        },
                        supOpener: {
                            fn: r("supOpener", "sup")
                        },
                        commentFront: {
                            fn: function() {
                                return {
                                    isFront: !0
                                }
                            }
                        },
                        commentBack: {
                            fn: function() {
                                return {
                                    matches: {
                                        commentFront: "comment"
                                    }
                                }
                            }
                        },
                        scriptStyleTag: {
                            fn: o
                        },
                        tag: {
                            fn: o
                        },
                        url: {
                            fn: o
                        },
                        hookPrependedFront: {
                            fn: function(e) {
                                return {
                                    name: e[1],
                                    hidden: ")" === e[2],
                                    isFront: !0,
                                    tagPosition: "prepended"
                                }
                            }
                        },
                        hookFront: {
                            fn: function() {
                                return {
                                    isFront: !0
                                }
                            }
                        },
                        hookBack: {
                            fn: function() {
                                return {
                                    matches: {
                                        hookPrependedFront: "hook",
                                        hookFront: "hook"
                                    },
                                    cannotCross: ["verbatimOpener"]
                                }
                            }
                        },
                        hookAppendedBack: {
                            fn: function(e) {
                                return {
                                    name: e[2],
                                    hidden: "(" === e[1],
                                    tagPosition: "appended",
                                    matches: {
                                        hookFront: "hook"
                                    },
                                    cannotCross: ["verbatimOpener"]
                                }
                            }
                        },
                        verbatimOpener: {
                            fn: function(e) {
                                var t = e[0].length,
                                    n = {};
                                return n["verbatim" + t] = "verbatim", {
                                    type: "verbatim" + t,
                                    isFront: !0,
                                    matches: n
                                }
                            }
                        },
                        collapsedFront: {
                            fn: function() {
                                return {
                                    isFront: !0
                                }
                            }
                        },
                        collapsedBack: {
                            fn: function() {
                                return {
                                    matches: {
                                        collapsedFront: "collapsed"
                                    },
                                    cannotCross: ["verbatimOpener"]
                                }
                            }
                        },
                        escapedLine: {
                            fn: o
                        },
                        legacyLink: {
                            fn: function(e) {
                                return {
                                    type: "twineLink",
                                    innerText: e[1],
                                    passage: e[2]
                                }
                            }
                        },
                        br: {
                            fn: o
                        }
                    }),
                    l = i(s, {
                        macroFront: {
                            fn: function(e) {
                                return {
                                    isFront: !0,
                                    name: e[1]
                                }
                            }
                        },
                        groupingBack: {
                            fn: function() {
                                return {
                                    matches: {
                                        groupingFront: "grouping",
                                        macroFront: "macro"
                                    },
                                    cannotCross: ["singleStringOpener", "doubleStringOpener"]
                                }
                            }
                        },
                        passageLink: {
                            fn: function(e) {
                                var t = e[1],
                                    n = e[2],
                                    r = e[3];
                                return {
                                    type: "twineLink",
                                    innerText: n ? r : t,
                                    passage: t ? r : n
                                }
                            }
                        },
                        simpleLink: {
                            fn: function(e) {
                                return {
                                    type: "twineLink",
                                    innerText: e[1],
                                    passage: e[1]
                                }
                            }
                        },
                        variable: {
                            fn: t("name")
                        },
                        tempVariable: {
                            fn: t("name")
                        }
                    }),
                    f = i(s, Object.assign({
                        macroName: {
                            canFollow: ["macroFront"],
                            fn: function(e) {
                                return e[2] ? {
                                    isMethodCall: !0,
                                    innerText: e[2]
                                } : {
                                    isMethodCall: !1
                                }
                            }
                        },
                        groupingFront: {
                            fn: function() {
                                return {
                                    isFront: !0
                                }
                            }
                        },
                        property: {
                            fn: t("name"),
                            canFollow: ["variable", "hookRef", "property", "tempVariable", "colour", "itsProperty", "belongingItProperty", "macro", "grouping", "string", "boolean", "number"]
                        },
                        possessiveOperator: {
                            fn: o
                        },
                        itsProperty: {
                            cannotFollow: ["text"],
                            fn: t("name")
                        },
                        itsOperator: {
                            cannotFollow: ["text"],
                            fn: o
                        },
                        belongingItProperty: {
                            cannotFollow: ["text"],
                            fn: t("name")
                        },
                        belongingItOperator: {
                            cannotFollow: ["text"],
                            fn: o
                        },
                        belongingProperty: {
                            cannotFollow: ["text"],
                            fn: t("name")
                        },
                        belongingOperator: {
                            cannotFollow: ["text"],
                            fn: o
                        },
                        escapedStringChar: {
                            fn: function() {
                                return {
                                    type: "text"
                                }
                            }
                        },
                        singleStringOpener: {
                            fn: function() {
                                return {
                                    isFront: !0,
                                    matches: {
                                        singleStringOpener: "string"
                                    }
                                }
                            }
                        },
                        doubleStringOpener: {
                            fn: function() {
                                return {
                                    isFront: !0,
                                    matches: {
                                        doubleStringOpener: "string"
                                    }
                                }
                            }
                        },
                        hookRef: {
                            fn: t("name")
                        },
                        cssTime: {
                            fn: function(e) {
                                return {
                                    value: +e[1] * ("s" === e[2].toLowerCase() ? 1e3 : 1)
                                }
                            }
                        },
                        colour: {
                            cannotFollow: ["text"],
                            fn: function(e) {
                                var t, n = e[0].toLowerCase(),
                                    r = {
                                        red: "e61919",
                                        orange: "e68019",
                                        yellow: "e5e619",
                                        lime: "80e619",
                                        green: "19e619",
                                        cyan: "19e5e6",
                                        aqua: "19e5e6",
                                        blue: "197fe6",
                                        navy: "1919e6",
                                        purple: "7f19e6",
                                        fuchsia: "e619e5",
                                        magenta: "e619e5",
                                        white: "fff",
                                        black: "000",
                                        gray: "888",
                                        grey: "888"
                                    };
                                return t = Object.hasOwnProperty.call(r, n) ? "#" + r[n] : n, {
                                    colour: t
                                }
                            }
                        },
                        number: {
                            fn: function(e) {
                                return {
                                    value: parseFloat(e[0])
                                }
                            }
                        },
                        addition: {
                            fn: o
                        },
                        subtraction: {
                            fn: o
                        },
                        multiplication: {
                            fn: o
                        },
                        division: {
                            fn: o
                        },
                        inequality: {
                            fn: function(e) {
                                return {
                                    operator: e[2],
                                    negate: e[1].indexOf("not") > -1
                                }
                            }
                        },
                        augmentedAssign: {
                            fn: function(e) {
                                return {
                                    operator: e[0][0]
                                }
                            }
                        },
                        identifier: {
                            fn: t("name"),
                            cannotFollow: ["text"]
                        },
                        whitespace: {
                            fn: o,
                            cannotFollow: "text"
                        },
                        incorrectOperator: {
                            fn: function(e) {
                                var t = {
                                    "=>": ">=",
                                    "=<": "<=",
                                    gte: ">=",
                                    lte: "<=",
                                    gt: ">",
                                    lt: "<",
                                    eq: "is",
                                    isnot: "is not",
                                    neq: "is not",
                                    are: "is",
                                    x: "*"
                                }[e[0].toLowerCase()];
                                return {
                                    type: "error",
                                    message: "Please say " + (t ? "'" + t + "'" : "something else") + " instead of '" + e[0] + "'."
                                }
                            },
                            cannotFollow: "text"
                        }
                    }, ["boolean", "is", "to", "into", "where", "via", "with", "making", "each", "and", "or", "not", "isNot", "contains", "isIn"].reduce(function(e, t) {
                        return e[t] = {
                            fn: o,
                            cannotFollow: ["text"]
                        }, e
                    }, {}), ["comma", "spread", "addition", "subtraction", "multiplication", "division"].reduce(function(e, t) {
                        return e[t] = {
                            fn: o
                        }, e
                    }, {})));
                a.push.apply(a, _toConsumableArray(Object.keys(u)).concat(_toConsumableArray(Object.keys(l)), _toConsumableArray(Object.keys(c)))), s.push.apply(s, _toConsumableArray(Object.keys(l)).concat(_toConsumableArray(Object.keys(f))));
                var p = Object.assign({}, u, c, l, f);
                return Object.keys(p).forEach(function(e) {
                    var t = n[e];
                    p[e].pattern = "string" != typeof t ? t : new RegExp("^(?:" + t + ")", "i"), n[e + "Peek"] && (p[e].peek = n[e + "Peek"])
                }), Object.assign(e.rules, p), e.modes.start = e.modes.markup = a, e.modes.macro = s, e
            }

            function t(t) {
                return Object.freeze({
                    lex: e(t).lex,
                    Patterns: n
                })
            }
            var n = void 0;
            Object.assign = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? (n = require("./patterns"), module.exports = t(require("./lexer"))) : "function" == typeof define && define.amd ? define("markup", ["lexer", "patterns"], function(e, r) {
                return n = r, t(e)
            }) : this && this.loaded && this.modules ? (n = this.modules.Patterns, this.modules.Markup = t(this.modules.Lexer)) : (n = this.Patterns, this.TwineMarkup = t(this.TwineLexer))
        }.call(eval("this") || ("undefined" != typeof global ? global : window)), define("utils/selectors", [], function() {
            return Object.freeze({
                passage: "tw-passage",
                story: "tw-story",
                sidebar: "tw-sidebar",
                internalLink: "tw-link",
                brokenLink: "tw-broken-link",
                hook: "tw-hook",
                enchantment: "tw-enchantment",
                expression: "tw-expression",
                script: "[role=script]",
                stylesheet: "[role=stylesheet]",
                storyData: "tw-storydata",
                passageData: "tw-passagedata",
                collapsed: "tw-collapsed"
            })
        }), define("utils/polyfills", [], function() {
            var e = Array.prototype;
            "function" != typeof e.includes && (e.includes = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!Number.isNaN(t) && Number.isFinite(n) && "undefined" != typeof t) return e.indexOf.call(this, t, n) > -1;
                var r = Object(this),
                    i = parseInt(r.length);
                if (0 >= i) return !1;
                for (var o = n >= 0 ? n : Math.max(0, i + n); i > o;) {
                    if (Object.is(t, r[o])) return !0;
                    o += 1
                }
                return !1
            })
        }), define("utils", ["jquery", "markup", "utils/selectors", "utils/polyfills"], function(e, t, n) {
            function r(t, n) {
                var r = o[n];
                if (!r[t]) {
                    var i = e("<p>").appendTo(document.body).attr("data-t8n", t).addClass(n);
                    r[t] = c.cssTimeUnit(i.css("animation-duration")) + c.cssTimeUnit(i.css("animation-delay")), i.remove()
                }
                return r[t]
            }
            var i = {
                    configurable: 0,
                    writable: 0
                },
                o = {
                    "transition-in": Object.create(null),
                    "transition-out": Object.create(null)
                },
                a = "audio,blockquote,canvas,div,h1,h2,h3,h4,h5,hr,ol,p,pre,table,ul,video,tw-align,tw-story,tw-passage".split(","),
                s = "a,b,i,em,strong,sup,sub,abbr,acronym,s,strike,del,big,small,script,img,button,input,tw-link,tw-broken-link,tw-verbatim,tw-collapsed,tw-error".split(","),
                u = ["audio"],
                c = void 0,
                l = void 0;
            return c = {
                lockProperty: function(e, t, n) {
                    var r = Object.create(i);
                    return n && (r.value = n), Object.defineProperty(e, t, r), e
                },
                toJSLiteral: function(e) {
                    return e instanceof Map ? "(new Map(" + c.toJSLiteral([].concat(_toConsumableArray(e.entries()))) + "))" : e instanceof Set ? "(new Set(" + c.toJSLiteral([].concat(_toConsumableArray(e.values()))) + "))" : JSON.stringify(e)
                },
                cssTimeUnit: function(e) {
                    return e = e.toLowerCase(), "ms" === e.slice(-2) ? +e.slice(0, -2) || 0 : "s" === e.slice(-1) ? 1e3 * +e.slice(0, -1) || 0 : 0
                },
                nth: function(e) {
                    var t = (+e + "").slice(-1);
                    return e + ("1" === t ? "st" : "2" === t ? "nd" : "3" === t ? "rd" : "th")
                },
                plural: function(e, t) {
                    return e + " " + t + (e > 1 ? "s" : "")
                },
                andList: function(e) {
                    return 1 === e.length ? e[0] : e.slice(0, -1).join(", ") + " and " + e[e.length - 1]
                },
                realWhitespace: "[ \\n\\r\\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]",
                anyRealLetter: "[\\dA-Za-z\\u00c0-\\u00de\\u00df-\\u00ff\\u0150\\u0170\\u0151\\u0171\\uD800-\\uDFFF]",
                unescape: function(e) {
                    return e.replace(/&(?:amp|lt|gt|quot|nbsp|zwnj|#39|#96);/g, function(e) {
                        return {
                            "&amp;": "&",
                            "&gt;": ">",
                            "&lt;": "<",
                            "&quot;": '"',
                            "&#39;": "'",
                            "&nbsp;": String.fromCharCode(160),
                            "&zwnj;": String.fromCharCode(8204)
                        }[e]
                    })
                },
                escape: function(e) {
                    return e.replace(/[&><"']/g, function(e) {
                        return {
                            "&": "&amp;",
                            ">": "&gt;",
                            "<": "&lt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        }[e]
                    })
                },
                insensitiveName: function(e) {
                    return (e + "").toLowerCase().replace(/-|_/g, "")
                },
                childrenProbablyInline: function(e) {
                    var t = [];
                    return Array.prototype.every.call(e.find("*"), function(e) {
                        return e.hidden || /none|inline/.test(e.style.display) ? !0 : a.includes(e.tagName.toLowerCase()) || /none|inline/.test(e.style.display) ? !1 : s.includes(e.tagName.toLowerCase()) ? !0 : (t.push(e), !0)
                    }) && t.every(function(e) {
                        return /none|inline/.test(e.style.display)
                    })
                },
                transitionReplace: function(t, r, i) {
                    var o = t.closest(n.hook);
                    o.length > 0 && (t = o);
                    var a = e("<tw-transition-container>").css("position", "relative");
                    a.insertBefore(t.first());
                    var s = void 0;
                    r && (s = e("<tw-transition-container>").appendTo(a), r.appendTo(s));
                    var u = e("<tw-transition-container>").css("position", "absolute").prependTo(a);
                    t.detach().appendTo(u), c.transitionOut(u, i), r && c.transitionIn(s, i, function() {
                        s.unwrap().children().first().unwrap()
                    })
                },
                transitionOut: function(e, t, n) {
                    function i() {
                        e.remove()
                    }
                    var o = c.childrenProbablyInline(e),
                        a = e.length > 1 || !o || !["tw-hook", "tw-passage"].includes(e.tag());
                    a && (e = e.wrapAll("<tw-transition-container>").parent()), e.attr("data-t8n", t).addClass("transition-out"), c.childrenProbablyInline(e) && e.css("display", "inline-block"), "number" == typeof n && e.css("animation-duration", n + "ms");
                    var s = n || r(t, "transition-out");
                    s ? window.setTimeout(i, s) : i()
                },
                transitionIn: function(e, t, n) {
                    function i() {
                        var t = 0 === e.findAndFilter(u.join(",")).length;
                        a && t ? e.contents().unwrap() : e.removeClass("transition-in").removeAttr("data-t8n")
                    }
                    var o = c.childrenProbablyInline(e),
                        a = e.length > 1 || !o || !["tw-hook", "tw-passage"].includes(e.tag());
                    a && (e = e.wrapAll("<tw-transition-container>").parent()), e.attr("data-t8n", t).addClass("transition-in"), "number" == typeof n && e.css("animation-duration", n + "ms"), c.childrenProbablyInline(e) && e.css("display", "inline-block");
                    var s = n || r(t, "transition-in");
                    s ? window.setTimeout(i, s) : i()
                },
                $: function(t, n) {
                    return e(t, n || c.storyElement).not(".transition-out, .transition-out *")
                },
                impossible: function(e, t) {
                    window.console && console.error(e + "(): " + t)
                },
                assertMustHave: function(e, t) {
                    if (window.console)
                        for (var n = 0; n < t.length; n += 1) t[n] in e || console.error("Assertion failed: object lacks property " + t[n])
                },
                assertOnlyHas: function(e, t) {
                    if (window.console)
                        for (var n in e) t.includes(n) || console.error("Assertion failed: object had unexpected property '" + n + "'!")
                },
                get storyElement() {
                    return l
                }
            }, e(function() {
                return l = e(n.story)
            }), Object.freeze(c)
        }), define("passages", ["jquery", "utils", "utils/selectors"], function(e, t, n) {
            function r(e) {
                return Object.assign(new Map([
                    ["source", i(e.html())],
                    ["tags", (e.attr("tags") || "").split(/\s/) || []],
                    ["name", e.attr("name")]
                ]), {
                    TwineScript_TypeName: "passage datamap",
                    TwineScript_ObjectName: "a passage datamap"
                })
            }
            var i = t.unescape,
                o = Object.assign(new Map, {
                    TwineScript_ObjectName: "the Passages datamap",
                    getTagged: function(e) {
                        var t = [];
                        return this.forEach(function(n) {
                            var r = n instanceof Map && n.get("tags");
                            Array.isArray(r) && r.includes(e) && t.push(n)
                        }), t.sort(function(e, t) {
                            return e.get("name") > t.get("name")
                        })
                    },
                    create: r
                });
            return e(function() {
                Array.from(e(n.storyData + " > " + n.passageData)).forEach(function(t) {
                    t = e(t), o.set(t.attr("name"), new r(t))
                })
            }), o
        }), define("datatypes/hookset", ["jquery", "utils", "utils/selectors", "markup"], function(e, t, n, r) {
            function i(e, t, n) {
                var r = e.textContent.length;
                if (!(t >= r)) {
                    var i = void 0,
                        o = [i = 0 === t ? e : e.splitText(t)];
                    return n && (0 >= n && (n = r - n), r > n && o.push(i.splitText(n - t))), o
                }
            }

            function o(e, t) {
                var n = [],
                    r = "",
                    a = [];
                if (!e.length || !t) return a;
                for (; e.length > 0;) {
                    n.push(e[0]), r += e[0].textContent, e.shift();
                    var s = r.indexOf(t);
                    if (s > -1) {
                        for (var u, c = r.length - (s + t.length); s >= n[0].textContent.length;) s -= n[0].textContent.length, n.shift();
                        if (1 === n.length) {
                            var l = i(n[0], s, s + t.length);
                            a.push(l[0]), l[1] && e.unshift(l[1]);
                            break
                        }
                        a.push(i(n[0], s, n[0].length)[0]), (u = a).push.apply(u, _toConsumableArray(n.slice(1, -1)));
                        var f = i(n[n.length - 1], 0, n[n.length - 1].textContent.length - c);
                        a.push(f[0]), f[1] && e.unshift(f[1]), a = a.filter(Boolean);
                        break
                    }
                }
                return [a].concat(_toConsumableArray(o(e, t)))
            }

            function a(t, n, r) {
                var i = o(n.textNodes(), t),
                    a = e();
                return i.forEach(function(t) {
                    a = a.add(e(t).wrapAll(r))
                }), a.parent()
            }

            function s(e) {
                e = t.insensitiveName(e).replace(/\?/g, "").replace(/"/g, "&quot;");
                var r = n.hook + '[name="' + e + '"]';
                return r += {
                    page: ", tw-story",
                    passage: ", tw-passage",
                    sidebar: ", tw-sidebar",
                    link: ", tw-link, .enchantment-link"
                }[e] || ""
            }

            function u(n) {
                var r = n.dom,
                    i = e();
                this.prev && (i = i.add(u.call(this.prev, {
                    dom: r
                })));
                var o = function(t, n) {
                    return Array.isArray(n) ? n.reduce(function(e, n) {
                        return e.add(t.get(n))
                    }, e()) : e(t.get(n))
                };
                if (this.selector) {
                    var c = void 0;
                    c = this.selector.match("^" + f.hookRef + "$") ? r.add(r.parentsUntil(t.storyElement.parent())).findAndFilter(s(this.selector)) : a(this.selector, r, "<tw-pseudo-hook>"), i = i.add(this.properties.length ? this.properties.reduce(o, c) : c)
                }
                return this.base && (i = i.add(this.properties.reduce(o, u.call(this.base, {
                    dom: r
                })))), i
            }

            function c(e) {
                var n = e.dom;
                t.$("tw-pseudo-hook", n).contents().unwrap().parent().each(function() {
                    this.normalize()
                })
            }

            function l(e) {
                if (!e) return [];
                var n = e.selector,
                    r = e.base,
                    i = e.properties,
                    o = e.prev;
                return [JSON.stringify([t.insensitiveName(n) || "", l(r), [].concat(_toConsumableArray(i)).sort()])].concat(_toConsumableArray(l(o))).sort()
            }
            var f = r.Patterns,
                p = Object.freeze({
                    forEach: function(t, n) {
                        var r = u.call(this, t).each(function(t) {
                            n(e(this), t)
                        });
                        return c.call(this, t), r
                    },
                    get TwineScript_ObjectName() {
                        return this.properties.length > 0 || this.prev ? "a complex hook name" : this.selector + " (a hook name)"
                    },
                    TwineScript_TypeName: "a hook name (like ?this)",
                    TwineScript_Unstorable: !0,
                    "TwineScript_+": function(e) {
                        var t = e.TwineScript_Clone();
                        return t.prev = this, t
                    },
                    TwineScript_is: function(e) {
                        return l(this) + "" == l(e) + ""
                    },
                    TwineScript_GetElement: function(e) {
                        return p.create(void 0, this, [e], void 0)
                    },
                    TwineScript_Clone: function() {
                        return p.create(this.selector, this.base, this.properties, this.prev)
                    },
                    create: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                        return Object.assign(Object.create(this || p), {
                            selector: e,
                            base: t,
                            properties: n,
                            prev: r
                        })
                    },
                    from: function(e) {
                        return p.isPrototypeOf(e) ? e : p.create(e)
                    }
                });
            return p
        }), define("internaltypes/twineerror", ["jquery", "utils"], function(e, t) {
            var n = t.impossible,
                r = t.escape,
                i = {
                    syntax: "The markup seems to contain a mistake.",
                    saving: "I tried to save or load the game, but I couldn't do it.",
                    operation: "I tried to perform an operation on some data, but the data's type was incorrect.",
                    macrocall: "I tried to use a macro, but its call wasn't written correctly.",
                    datatype: "I tried to use a macro, but was given the wrong type of data to it.",
                    keyword: "I was given a keyword in a way that I didn't understand.",
                    infinite: "I almost ended up doing the same thing over and over, forever.",
                    property: "I tried to access a value in a string/array/datamap, but I couldn't find it.",
                    unimplemented: "I currently don't have this particular feature. I'm sorry.",
                    javascript: "This error message was reported by your browser's Javascript engine. I don't understand it either, but it usually means that an expression was badly written."
                },
                o = {
                    create: function(e, t, r) {
                        return t || n("TwineError.create", "called with only 1 string."), r || e in i || n("TwineError.create", "no error explanation given"), Object.assign(Object.create(this), {
                            type: e,
                            message: t,
                            explanation: r
                        })
                    },
                    fromError: function(e) {
                        return o.create("javascript", "\u2615 " + e.message)
                    },
                    containsError: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                        return t.reduce(function(e, t) {
                            return e ? e : t instanceof Error ? t : o.isPrototypeOf(t) ? t : Array.isArray(t) ? o.containsError.apply(o, _toConsumableArray(t)) : !1
                        }, !1)
                    },
                    createWarning: function(e, t) {
                        return Object.assign(this.create(e, t), {
                            warning: !0
                        })
                    },
                    render: function(t) {
                        t = t || "";
                        var n = e("<tw-error class='" + ("javascript" === this.type ? "javascript " : "") + (this.warning ? "warning" : "error") + "' title='" + r(t) + "'>" + r(this.message) + "</tw-error>"),
                            o = e("<tw-error-explanation>").text(this.explanation || i[this.type]).hide(),
                            a = e("<tw-error-explanation-button tabindex=0>").html("<span class='folddown-arrowhead'>&#9658;</span>");
                        return a.on("click", function() {
                            o.toggle(), a.children(".folddown-arrowhead").css("transform", "rotate(" + (o.is(":visible") ? "90deg" : "0deg") + ")")
                        }), n.append(a).append(o), n
                    }
                };
            return o
        }), define("utils/operationutils", ["utils", "datatypes/hookset", "internaltypes/twineerror"], function(e, t, n) {
            function r(e) {
                return !!e && ("object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) || "function" == typeof e)
            }

            function i(e) {
                return Array.isArray(e) ? "array" : e instanceof Map ? "datamap" : e instanceof Set ? "dataset" : "string" == typeof e ? "string" : e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) ? "object" : ""
            }

            function o(e, t) {
                if (e instanceof Map || g("isValidDatamapName", "called with non-Map"), "string" != typeof t && "number" != typeof t) return n.create("property", "Only strings and numbers can be used as data names for " + l(e) + ", not " + l(t) + ".");
                var r = "string" == typeof t ? +t : "" + t;
                return !Number.isNaN(r) && e.has(r) ? n.create("property", "You mustn't use both " + l(t) + " and " + l(r) + " as data names in the same datamap.") : !0
            }

            function a(e, t) {
                if (null === t) return void 0 === e;
                if (t.innerType) {
                    if ("optional" === t.pattern || "zero or more" === t.pattern) return void 0 === e ? !0 : a(e, t.innerType);
                    if ("either" === t.pattern) return t.innerType.some(function(t) {
                        return a(e, t)
                    });
                    if ("lambda" === t.pattern && a(e, t.innerType)) return "string" != typeof t.clauses && g("singleTypeCheck", "lambda signature had non-string clauses"), t.clauses.includes("where") === "where" in e && t.clauses.includes("making") === "making" in e && t.clauses.includes("via") === "via" in e && t.clauses.includes("with") === "with" in e;
                    if ("wrapped" === t.pattern) return a(e, t.innerType)
                }
                return void 0 !== t && void 0 === e ? !1 : "anything" !== t.TwineScript_TypeName || void 0 === e || e.TwineScript_Unstorable ? t === String ? "string" == typeof e : t === Boolean ? "boolean" == typeof e : t === parseInt ? "number" == typeof e && !Number.isNaN(e) && !(e + "").includes(".") : t === Number ? "number" == typeof e && !Number.isNaN(e) : t === Array ? Array.isArray(e) : t === Map || t === Set ? e instanceof t : Object.isPrototypeOf.call(t, e) : !0
            }

            function s(e) {
                return "string" == typeof e || Array.isArray(e) || t.isPrototypeOf(e)
            }

            function u(e) {
                if (!r(e)) return e;
                if ("function" == typeof e.TwineScript_Clone) return e.TwineScript_Clone();
                if (Array.isArray(e)) return [].concat(_toConsumableArray(e));
                if (e instanceof Map) return new Map(e);
                if (e instanceof Set) return new Set(e);
                if ("function" == typeof e) return Object.assign(e.bind(), e);
                switch (Object.getPrototypeOf(e)) {
                    case Object.prototype:
                        return Object.assign({}, e);
                    case null:
                        return Object.assign(Object.create(null), e)
                }
                return g("OperationUtils.clone", "The value " + (e.toSource ? e.toSource() : e) + " cannot be cloned!"), e
            }

            function c(e, t, n) {
                return "string" == typeof t && r(n) && "TwineScript_ToString" in n ? e(t, n.TwineScript_ToString()) : "string" == typeof n && r(t) && "TwineScript_ToString" in t ? e(t.TwineScript_ToString(), n) : !1
            }

            function l(e) {
                return r(e) && "TwineScript_ObjectName" in e ? e.TwineScript_ObjectName : Array.isArray(e) ? "an array" : e instanceof Map ? "a datamap" : e instanceof Set ? "a dataset" : "boolean" == typeof e ? "the boolean value '" + e + "'" : "string" == typeof e || "number" == typeof e ? "the " + ("undefined" == typeof e ? "undefined" : _typeof(e)) + " " + y(e) : void 0 === e ? "an empty variable" : "...whatever this is"
            }

            function f(e) {
                return e.innerType ? "either" === e.pattern ? (Array.isArray(e.innerType) || g("typeName", '"either" pattern had non-array inner type'), e.innerType.map(f).join(" or ")) : "optional" === e.pattern ? "(an optional) " + f(e.innerType) : f(e.innerType) : e === String || e === Number || e === Boolean ? "a " + _typeof(e()) : e === parseInt ? "a non-fractional number" : e === Map ? "a datamap" : e === Set ? "a dataset" : e === Array ? "an array" : r(e) && "TwineScript_TypeName" in e ? e.TwineScript_TypeName : l(e)
            }

            function p(e, t) {
                return "object" !== ("undefined" == typeof e ? "undefined" : _typeof(e)) && "object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) ? e === t : Array.isArray(e) && Array.isArray(t) ? e.length !== t.length ? !1 : e.every(function(e, n) {
                    return p(t[n], e)
                }) : e instanceof Map && t instanceof Map ? p(Array.from(e.entries()).sort(), Array.from(t.entries()).sort()) : e instanceof Set && t instanceof Set ? p([].concat(_toConsumableArray(e)), [].concat(_toConsumableArray(t))) : e && "function" == typeof e.TwineScript_is ? e.TwineScript_is(t) : e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && t && "object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) && Object.getPrototypeOf(e) === Object.prototype && Object.getPrototypeOf(t) === Object.prototype ? p(Object.getOwnPropertyNames(e).map(function(t) {
                    return [t, e[t]]
                }), Object.getOwnPropertyNames(t).map(function(e) {
                    return [e, t[e]]
                })) : Object.is(e, t)
            }

            function d(e, t) {
                if (e) {
                    if ("string" == typeof e) return e.includes(t);
                    if (Array.isArray(e)) return e.some(function(e) {
                        return p(e, t)
                    });
                    if (e instanceof Set || e instanceof Map) return Array.from(e.keys()).some(function(e) {
                        return p(e, t)
                    })
                }
                return n.create("operation", l(e) + " cannot contain any values, let alone " + l(t))
            }

            function h(e, t, r) {
                if (!t || !r) return n.create("macrocall", "The sub" + i(e) + " index values must not be 0 or NaN.");
                if (0 > t && (t = e.length + t + 1), 0 > r && (r = e.length + r + 1), t > r) return h(e, r, t);
                var o = "string" == typeof e;
                o && (e = Array.from(e));
                var a = e.slice(t > 0 ? t - 1 : t, r).map(u);
                return o ? a.join("") : a
            }

            function m(e) {
                return n.containsError(e) ? e : e && "function" == typeof e.TwineScript_Print ? e.TwineScript_Print() : e instanceof Map ? (e = Array.from(e.entries()), n.containsError(e) ? e : e.reduce(function(e, t) {
                    var n = _slicedToArray(t, 2),
                        r = n[0],
                        i = n[1];
                    return e + "<tr><td>`" + m(r) + "`</td><td>`" + m(i) + "`</td></tr>"
                }, "<table class=datamap>") + "</table>") : e instanceof Set ? Array.from(e.values()).map(m) + "" : Array.isArray(e) ? e.map(m) + "" : r(e) ? n.create("unimplemented", "I don't know how to print this value yet.") : e + ""
            }
            var g = e.impossible,
                y = e.toJSLiteral,
                v = Object.freeze({
                    isObject: r,
                    singleTypeCheck: a,
                    isValidDatamapName: o,
                    collectionType: i,
                    isSequential: s,
                    clone: u,
                    coerceToString: c,
                    objectName: l,
                    typeName: f,
                    is: p,
                    contains: d,
                    subset: h,
                    printBuiltinValue: m,
                    numericIndex: /^(?:[1-9]\d*|0)$/,
                    unique: function(e, t, n) {
                        return !n.slice(t + 1).some(function(t) {
                            return p(e, t)
                        })
                    }
                });
            return v
        }), define("datatypes/changercommand", ["utils", "utils/operationutils"], function(e, t) {
            var n = e.impossible,
                r = t.is,
                i = {},
                o = {
                    changer: !0,
                    TwineScript_TypeName: "a changer command",
                    TwineScript_Print: function() {
                        return "`[A '" + this.macroName + "' command]`"
                    },
                    create: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        return Array.isArray(t) || n("ChangerCommand.create", "params was not an array"), Object.assign(Object.create(this), {
                            macroName: e,
                            params: t,
                            next: r,
                            TwineScript_ObjectName: "a (" + e + ":) command"
                        })
                    },
                    "TwineScript_+": function(e) {
                        for (var t = this.TwineScript_Clone(), n = t; n.next;) n = n.next;
                        return n.next = e, t
                    },
                    TwineScript_is: function(e) {
                        return o.isPrototypeOf(e) ? this.macroName === e.macroName && r(this.params, e.params) && r(this.next, e.next) : void 0
                    },
                    TwineScript_Clone: function() {
                        return this.create(this.macroName, this.params, this.next)
                    },
                    run: function(e) {
                        i[this.macroName].apply(i, [e].concat(_toConsumableArray(this.params))), this.next && this.next.run(e)
                    },
                    register: function(e, t) {
                        i[e] = t
                    }
                };
            return Object.freeze(o)
        }), define("state", ["utils", "passages", "datatypes/changercommand", "internaltypes/twineerror", "utils/operationutils"], function(e, t, n, r, i) {
            function o(e) {
                p = (l[f] || c).create(e)
            }
            var a = e.impossible,
                s = i.objectName,
                u = {
                    TwineScript_ObjectName: "this story's variables",
                    TwineScript_VariableStore: !0
                },
                c = {
                    passage: "",
                    variables: u,
                    create: function(e, t) {
                        var n = Object.create(c);
                        return n.passage = e || "", n.variables = Object.assign(Object.create(this.variables), t), n
                    }
                },
                l = [],
                f = -1,
                p = c.create(),
                d = void 0,
                h = {
                    forward: [],
                    back: [],
                    load: []
                },
                m = Object.assign({get passage() {
                        return p.passage
                    },
                    get variables() {
                        return p.variables
                    },
                    get pastLength() {
                        return f
                    },
                    get futureLength() {
                        return l.length - 1 - f
                    },
                    passageNameVisited: function(e) {
                        var n = 0;
                        if (!t.get(e)) return 0;
                        for (var r = 0; f >= r; r++) n += +(e === l[r].passage);
                        return n
                    },
                    passageNameLastVisited: function(e) {
                        if (!t.get(e)) return 1 / 0;
                        if (e === p.passage) return 0;
                        for (var n = f; n > 0; n--)
                            if (l[n].passage === e) return f - n + 1;
                        return 1 / 0
                    },
                    pastPassageNames: function() {
                        for (var e = [], t = f - 1; t >= 0; t--) e.unshift(l[t].passage);
                        return e
                    },
                    play: function(e) {
                        p || a("State.play", "present is undefined!"), p.passage = e, l = l.slice(0, f + 1).concat(p), f += 1, o(e), h.forward.forEach(function(t) {
                            return t(e)
                        })
                    },
                    rewind: function(e) {
                        var t = 1,
                            n = !1;
                        if (e)
                            if ("string" == typeof e) {
                                if (t = this.passageNameLastVisited(e), t === 1 / 0) return
                            } else "number" == typeof e && (t = e);
                        for (; t > 0 && f > 0; t--) n = !0, f -= 1;
                        return n && (o(l[f].passage), h.back.forEach(function(e) {
                            return e()
                        })), n
                    },
                    fastForward: function(e) {
                        var t = 1,
                            n = !1;
                        for ("number" == typeof e && (t = e); t > 0 && l.length > 0; t--) n = !0, f += 1;
                        return n && (o(l[f].passage), h.forward.forEach(function(e) {
                            return e(l[f].passage, "fastForward")
                        })), n
                    },
                    on: function(e, t) {
                        return e in h ? ("function" != typeof t || h[e].includes(t) || h[e].push(t), m) : void a("State.on", "invalid event name")
                    },
                    reset: function() {
                        window.jasmine && (l = [], f = -1, p = c.create(), d = void 0, h.load.forEach(function(e) {
                            return e(l)
                        }))
                    }
                }, function() {
                    function e(t) {
                        return "number" == typeof t || "boolean" == typeof t || "string" == typeof t || null === t || Array.isArray(t) && t.every(e) || t instanceof Set && Array.from(t).every(e) || t instanceof Map && Array.from(t.values()).every(e) || n.isPrototypeOf(t)
                    }

                    function t(e, t) {
                        return t instanceof Set ? {
                            "(dataset:)": Array.from(t)
                        } : t instanceof Map ? {
                            "(datamap:)": Array.from(t)
                        } : n.isPrototypeOf(t) ? {
                            changer: {
                                name: t.macroName,
                                params: t.params,
                                next: t.next
                            }
                        } : t
                    }

                    function i(e, t) {
                        if (t && "object" === ("undefined" == typeof t ? "undefined" : _typeof(t))) {
                            if (Array.isArray(t["(dataset:)"])) return new Set(t["(dataset:)"]);
                            if (Array.isArray(t["(datamap:)"])) return new Map(t["(datamap:)"]);
                            if (t.changer && "object" === _typeof(t.changer)) {
                                var r = t.changer,
                                    i = r.name,
                                    o = r.params,
                                    a = r.next;
                                return n.create(i, o, a)
                            }
                        }
                        return t
                    }

                    function a() {
                        var n = l.slice(0, f + 1),
                            i = n.map(function(t) {
                                return Object.keys(t.variables).filter(function(n) {
                                    return t.variables[n] && !e(t.variables[n])
                                }).map(function(e) {
                                    return [e, t.variables[e]]
                                })
                            });
                        if (d || (d = i.reduce(function(e, t, n) {
                                var r = _slicedToArray(t, 2),
                                    i = r[0],
                                    o = r[1];
                                return e || i && [i, o, n + 1]
                            }, void 0)), d) {
                            var o = d,
                                a = _slicedToArray(o, 3),
                                u = a[0],
                                c = a[1],
                                p = a[2];
                            return r.create("saving", "The variable $" + u + " holds " + s(c) + " (which is, or contains, a complex data value) on turn " + p + "; the game can no longer be saved.")
                        }
                        try {
                            return JSON.stringify(n, t)
                        } catch (e) {
                            return !1
                        }
                    }

                    function p(e) {
                        var t = void 0,
                            n = u;
                        try {
                            t = JSON.parse(e, i)
                        } catch (e) {
                            return !1
                        }
                        return Array.isArray(t) ? (t = t.map(function(e) {
                            return "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.hasOwnProperty("passage") && e.hasOwnProperty("variables") ? (e.variables = Object.assign(Object.create(n), e.variables), n = e.variables, Object.assign(Object.create(c), e)) : !1
                        })).includes(!1) ? !1 : (l = t, h.load.forEach(function(e) {
                            return e(l)
                        }), f = l.length - 1, void o(l[f].passage)) : !1
                    }
                    return {
                        serialise: a,
                        deserialise: p
                    }
                }());
            return Object.seal(c), Object.freeze(m)
        }), define("datatypes/colour", ["jquery"], function(e) {
            function t(t) {
                if (t in s) return s[t];
                var n = e("<p>").css("background-color", t).css("background-color");
                return n = n.startsWith("rgb") ? n.match(/\d+/g).reduce(function(e, t, n) {
                    return e["rgb" [n]] = +t, e
                }, {}) : {
                    r: 192,
                    g: 192,
                    b: 192
                }, s[t] = n, n
            }

            function n(e) {
                return "string" != typeof e ? e : (e = e.replace("#", ""), e = e.replace(o, "$1$1$2$2$3$3"), {
                    r: parseInt(e.slice(0, 2), 16),
                    g: parseInt(e.slice(2, 4), 16),
                    b: parseInt(e.slice(4, 6), 16)
                })
            }

            function r(e) {
                var t = e.r,
                    n = e.g,
                    r = e.b,
                    i = e.a;
                t /= 255, n /= 255, r /= 255;
                var o = Math.max(t, n, r),
                    a = Math.min(t, n, r),
                    s = (o + a) / 2,
                    u = o - a;
                if (o === a) return {
                    h: 0,
                    s: 0,
                    l: s
                };
                var c = void 0;
                switch (o) {
                    case t:
                        c = (n - r) / u + (r > n ? 6 : 0);
                        break;
                    case n:
                        c = (r - t) / u + 2;
                        break;
                    case r:
                        c = (t - n) / u + 4
                }
                c = Math.round(60 * c);
                var l = s > .5 ? u / (2 - o - a) : u / (o + a);
                return {
                    h: c,
                    s: l,
                    l: s,
                    a: i
                }
            }

            function i(e) {
                function t(e) {
                    return 0 > e && (e += 1), e > 1 && (e -= 1), 1 / 6 > e ? u + 6 * (s - u) * e : .5 > e ? s : 2 / 3 > e ? u + (s - u) * (2 / 3 - e) * 6 : u
                }
                var n = e.h,
                    r = e.s,
                    i = e.l,
                    o = e.a;
                if (0 === r) {
                    var a = Math.floor(255 * i);
                    return {
                        r: a,
                        g: a,
                        b: a
                    }
                }
                n /= 360;
                var s = .5 > i ? i * (1 + r) : i + r - i * r,
                    u = 2 * i - s;
                return {
                    r: Math.floor(255 * t(n + 1 / 3)),
                    g: Math.floor(255 * t(n)),
                    b: Math.floor(255 * t(n - 1 / 3)),
                    a: o
                }
            }
            var o = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
                a = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
                s = Object.create(null),
                u = Object.freeze({
                    TwineScript_TypeName: "a colour",
                    TwineScript_ObjectName: "a colour",
                    "TwineScript_+": function(e) {
                        var t = this,
                            n = e;
                        return u.create({
                            r: Math.min(Math.round(.6 * (t.r + n.r)), 255),
                            g: Math.min(Math.round(.6 * (t.g + n.g)), 255),
                            b: Math.min(Math.round(.6 * (t.b + n.b)), 255),
                            a: (t.a + n.a) / 2
                        })
                    },
                    TwineScript_Print: function() {
                        return "<tw-colour style='background-color:rgba(" + [this.r, this.g, this.b, this.a].join(",") + ");'></span>"
                    },
                    TwineScript_is: function(e) {
                        return u.isPrototypeOf(e) && e.r === this.r && e.g === this.g && e.b === this.b && e.a === this.a
                    },
                    TwineScript_Clone: function() {
                        return u.create(this)
                    },
                    toRGBAString: function() {
                        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")"
                    },
                    get h() {
                        return r(this).h
                    },
                    get s() {
                        return r(this).s
                    },
                    get l() {
                        return r(this).l
                    },
                    create: function(e) {
                        return "string" == typeof e ? this.create(u.isHexString(e) ? n(e) : t(e)) : !("h" in e && "s" in e && "l" in e) || "r" in e || "g" in e || "b" in e ? ("a" in e && "number" == typeof e.a || (e.a = 1), Object.assign(Object.create(this), e)) : this.create(i(e))
                    },
                    isHexString: function(e) {
                        return "string" == typeof e && "#" === e[0] && (e.slice(1).match(o) || e.slice(1).match(a))
                    },
                    isCSS3Function: function(e) {
                        return "string" == typeof e && /^(?:rgb|hsl)a?\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?(?:,\s*\d+(?:\.\d+)?\s*)?\)$/.test(e)
                    }
                });
            return u
        }), define("internaltypes/varref", ["state", "internaltypes/twineerror", "utils", "utils/operationutils", "datatypes/hookset", "datatypes/colour"], function(e, t, n, r, i, o) {
            function a(e, n) {
                var r = void 0;
                if (e instanceof Map && (r = t.containsError(j(e, n)))) return r;
                if (w(e)) {
                    var o = void 0;
                    if ("number" == typeof n) {
                        if (0 === n) return t.create("property", "You can't access elements at position 0 of " + x(e) + ".", "Only positive and negative position values exist.");
                        n > 0 && (n -= 1)
                    } else if ("string" == typeof n && (o = /(\d+)(?:st|[nr]d|th)last/i.exec(n))) n = -o[1] + "";
                    else if ("string" == typeof n && (o = /(\d+)(?:st|[nr]d|th)/i.exec(n))) n = o[1] - 1 + "";
                    else if ("last" === n) n = -1;
                    else if (!["length", "any", "all"].includes(n) || i.isPrototypeOf(e)) return t.create("property", "You can only access position strings/numbers ('4th', 'last', '2ndlast', (2), etc.)" + (i.isPrototypeOf(e) ? "" : ", 'length', 'any' and 'all'") + " of " + x(e) + ", not " + x(n) + ".")
                } else if (e instanceof Set) {
                    if (!["length", "any", "all"].includes(n)) return t.create("property", "You can only get the 'length', 'any' and 'all' of a " + x(e) + ".", "To check contained values, use the 'contains' operator.");
                    "length" === n && (n = "size")
                } else if ("number" == typeof e || "boolean" == typeof e) return t.create("property", "You can't get data values from " + x(e) + ".");
                return n
            }

            function s(e, n) {
                var r = n.reduce(function(r, i, o) {
                    i.computed && (i = i.value), k.isPrototypeOf(i) && (i = i.get()), i = Array.isArray(i) ? i.map(function(t) {
                        return a(e, t)
                    }) : a(e, i);
                    var s = void 0;
                    return (s = t.containsError(r, i)) ? s : (o < n.length - 1 && (e = g(e, i)), r.push(i), r)
                }, []);
                return {
                    compiledPropertyChain: r,
                    deepestObject: e
                }
            }

            function u(e, t) {
                return 0 > t - 0 && Math.abs(t) <= e.length ? e.length + (t - 0) : t
            }

            function c(e, t) {
                var n = {
                    any: "'any' value of ",
                    all: "'all' values of "
                }[t];
                return {
                    determiner: t,
                    array: [].concat(_toConsumableArray(e)),
                    TwineScript_ObjectName: n + x(e),
                    TwineScript_TypeName: n + "a data structure",
                    TwineScript_Unstorable: !0,
                    TwineScript_Print: function() {
                        return "`[" + this.TwineScript_TypeName + "]`"
                    }
                }
            }

            function l(e, t) {
                if (void 0 === e) return e;
                if (e instanceof Map) return e.get(t);
                if (w(e) && (t = u(e, t)), "any" === t || "all" === t) return c(e, t);
                if (e.TwineScript_GetElement && Number.isFinite(+t)) return e.TwineScript_GetElement(t);
                var n = e[t];
                return "function" != typeof n ? n : void 0
            }

            function f(e) {
                return e.computed ? "string" == typeof e.value ? "('" + e.value + "')" : "(" + e.value + ")" : "'" + e + "'"
            }

            function p(e, n) {
                if (Array.isArray(n)) return n.map(function(t) {
                    return p(e, t)
                });
                if (i.isPrototypeOf(e)) return t.create("operation", "I can't modify " + x(e), "You should alter hooks indirectly using macros like (replace:) or (enchant:).");
                if (e instanceof Set) return t.create("operation", "I can't modify " + x(e), "You should use an (array:) if you need to modify the data inside this dataset.");
                if (o.isPrototypeOf(e)) return t.create("operation", "I can't modify the components of " + x(e));
                if (e instanceof Map) return !0;
                if (w(e)) {
                    if (["length", "any", "all"].includes(n)) return t.create("operation", "I can't forcibly alter the '" + n + "' of " + x(e) + ".");
                    if (+n !== (0 | n)) return t.create("property", x(e) + " can only have position keys ('3rd', '1st', (5), etc.), not " + f(n) + ".")
                }
                return e.TwineScript_Identifiers && n in e ? t.create("keyword", "I can't alter the value of the '" + n + "' identifier.", "You can only alter data in variables and hooks, not fixed identifiers.") : "number" == typeof e || "boolean" == typeof e ? t.create("operation", "You can't alter the data values of " + x(e) + ".") : !0
            }

            function d(e, t, n) {
                var r = t;
                e instanceof Map ? e.set(t, n) : (w(e) && (t = u(e, t)), e.TwineScript_Set ? e.TwineScript_Set(t) : e[t] = n), A.set.forEach(function(t) {
                    return t(e, r, n)
                })
            }

            function h(e, t) {
                var n = t;
                w(e) && (t = u(e, t)), Array.isArray(e) && S.exec(t) ? e.splice(t, 1) : e instanceof Map || e instanceof Set ? e.delete(t) : delete e[t], A.delete.forEach(function(t) {
                    return t(e, n)
                })
            }

            function m(e) {
                function t() {
                    return e
                }
                return {
                    get: t,
                    set: t,
                    delete: t,
                    varref: !0
                }
            }

            function g(n, r, o) {
                if (Array.isArray(r)) return i.isPrototypeOf(n) ? n.TwineScript_GetElement(r) : r.map(function(e) {
                    return g(n, e, e)
                })["string" == typeof n ? "join" : "valueOf"]("");
                "string" == typeof n && (n = [].concat(_toConsumableArray(n)));
                var a = l(n, r);
                return void 0 === a ? n === e.variables ? C : n.TwineScript_VariableStore ? t.create("property", "There isn't a temp variable named _" + o + " in this place.", "Temp variables only exist inside the same passage and hook in which they're (set:).") : t.create("property", "I can't find a " + f(o) + " data name in " + x(n)) : a
            }

            function y(e, n) {
                var r = this,
                    i = this.compiledPropertyChain.reduce(function(e, t) {
                        var n = void 0;
                        return n = 0 === e.length ? r.object : g.apply(void 0, _toConsumableArray(e[e.length - 1])), e.push([n, t]) && e
                    }, []).reduceRight(e, n);
                return t.containsError(i) ? i : void 0
            }
            var v = n.impossible,
                b = r.isObject,
                w = r.isSequential,
                x = r.objectName,
                T = r.typeName,
                O = r.clone,
                S = r.numericIndex,
                j = r.isValidDatamapName,
                k = void 0,
                C = 0,
                A = {
                    set: [],
                    delete: []
                };
            return k = Object.freeze({
                varref: !0,
                get: function() {
                    return g(this.deepestObject, this.compiledPropertyChain.slice(-1)[0], this.propertyChain.slice(-1)[0])
                },
                set: function(e) {
                    return !this.object || this.object.TwineScript_VariableStore || this.object.TwineScript_Identifiers ? y.call(this, function(e, n, r) {
                        var i = _slicedToArray(n, 2),
                            o = i[0],
                            a = i[1],
                            s = void 0;
                        if (s = t.containsError(e, o, a) || t.containsError(p(o, a))) return s;
                        if (e && e.TwineScript_Unstorable) return t.create("operation", T(e) + " can't be stored.");
                        if (r > 0 && (o = O(o)), "string" == typeof o) {
                            var u = function() {
                                if ("string" != typeof e || e.length !== (Array.isArray(a) ? a.length : 1)) return {
                                    v: t.create("datatype", "I can't put this non-string value, " + x(e) + ", in a string.")
                                };
                                o = [].concat(_toConsumableArray(o));
                                var n = [].concat(_toConsumableArray(e));
                                [].concat(a).forEach(function(e) {
                                    0 > 0 + e && (e = o.length + (0 + e)), o = [].concat(_toConsumableArray(o.slice(0, e)), [n.shift()], _toConsumableArray(o.slice(e + 1)))
                                }), o = o.join("")
                            }();
                            if ("object" === ("undefined" == typeof u ? "undefined" : _typeof(u))) return u.v
                        } else b(o) && (Array.isArray(a) && w(e) ? ("string" == typeof e && (e = [].concat(_toConsumableArray(e))), a.map(function(t, n) {
                            return [t, e[n]]
                        }).forEach(function(e) {
                            var t = _slicedToArray(e, 2),
                                n = t[0],
                                r = t[1];
                            return d(o, n, r)
                        })) : d(o, a, e));
                        return o
                    }, e) : t.create("macrocall", "I can't (set:) " + x(this) + ", if the " + (x(this.object).match(/ (.+$)/) || ["", "value"])[1] + " isn't stored in a variable.", "Modifying data structures that aren't in variables won't change the game state at all.")
                },
                delete: function() {
                    return y.call(this, function(e, n, r) {
                        var i = _slicedToArray(n, 2),
                            o = i[0],
                            a = i[1],
                            s = void 0;
                        if (s = t.containsError(e, o, a) || t.containsError(p(o, a))) return s;
                        if (r > 0 && (o = O(o)), null === e) {
                            var c = "string" == typeof o;
                            c && (o = [].concat(_toConsumableArray(o))), Array.isArray(a) ? (w(o) && (a = [].concat(_toConsumableArray(new Set(a))), a.sort(function(e, t) {
                                return u(o, t) - u(o, e)
                            })), a.forEach(function(e) {
                                return h(o, e)
                            })) : h(o, a), c && (o = o.join(""))
                        } else d(o, a, e);
                        return o
                    }, null)
                },
                create: function(e, n) {
                    var r = void 0;
                    if (r = t.containsError(e)) return m(r);
                    n = [].concat(n), k.isPrototypeOf(e) && (n = e.propertyChain.concat(n), e = e.object);
                    var i = s(e, n),
                        o = i.compiledPropertyChain,
                        a = i.deepestObject;
                    return (r = t.containsError(o, a)) ? m(r) : Object.assign(Object.create(k), {
                        object: e,
                        propertyChain: n,
                        compiledPropertyChain: o,
                        deepestObject: a
                    })
                },
                get TwineScript_ObjectName() {
                    return (this.object === e.variables ? "$" : x(this.object) + "'s ") + (1 === this.propertyChain.length ? f(this.propertyChain[0]) : this.propertyChain.reduce(function(e, t) {
                        return e + "'s " + f(t)
                    }))
                },
                on: function(e, t) {
                    return e in A ? ("function" != typeof t || A[e].includes(t) || A[e].push(t), k) : void v("VarRef.on", "invalid event name")
                }
            })
        }), define("twinescript/compiler", ["utils"], function(e) {
            function t(e, t) {
                for (var n = 0; n < e.length; n += 1)
                    if (t.includes(e[n].type)) return n;
                return 0 / 0
            }

            function n(e, n) {
                return e.length - 1 - t.apply(void 0, [
                    [].concat(_toConsumableArray(e)).reverse(), n
                ])
            }

            function r(e, r) {
                var i = [];
                return e.length ? ([
                    ["error"],
                    ["comma"],
                    ["spread"],
                    ["to"],
                    ["into"], {
                        rightAssociative: ["where", "via"]
                    }, {
                        rightAssociative: ["with", "making", "each"]
                    },
                    ["augmentedAssign"],
                    ["and", "or"],
                    ["is", "isNot"],
                    ["contains", "isIn"],
                    ["inequality"],
                    ["addition", "subtraction"],
                    ["multiplication", "division"],
                    ["not"],
                    ["belongingProperty"],
                    ["belongingOperator", "belongingItOperator"], {
                        rightAssociative: ["property"]
                    }, {
                        rightAssociative: ["itsProperty"]
                    },
                    ["belongingItProperty"], {
                        rightAssociative: ["possessiveOperator", "itsOperator"]
                    },
                    ["twineLink"],
                    ["macro"],
                    ["grouping"]
                ]["most" === r ? "reverse" : "valueOf"]().some(function(r) {
                    var o = void 0;
                    return o = r.rightAssociative ? n(e, r.rightAssociative) : t(e, r), !Number.isNaN(o) && o > -1 ? (i = [e[o], o], !0) : void 0
                }), i) : i
            }

            function i(e) {
                if ("inequality" === e.type) {
                    var t = e.operator;
                    return e.negate ? {
                        ">": "<=",
                        "<": ">=",
                        ">=": "<",
                        "<=": ">"
                    }[t] : t
                }
                return e.type
            }

            function o(e) {
                var t = i(e);
                return {
                    ">": "<",
                    "<": ">",
                    ">=": "<=",
                    "<=": ">=",
                    contains: "isIn",
                    isIn: "contains",
                    is: "isNot",
                    isNot: "is"
                }[t]
            }

            function a(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.isVarRef,
                    c = t.elidedComparison;
                if (e = [].concat(e), !e.length) return "";
                var l = e[0];
                if (1 === e.length) {
                    if ("identifier" === l.type) return n ? "VarRef.create(Operations.Identifiers," + s(l.text) + ")" : " Operations.Identifiers." + l.text.toLowerCase() + " ";
                    if ("variable" === l.type) return "VarRef.create(State.variables," + s(l.name) + ")" + (n ? "" : ".get()");
                    if ("tempVariable" === l.type) return "VarRef.create(section.stack[0].tempVariables," + s(l.name) + ")" + (n ? "" : ".get()");
                    if ("hookRef" === l.type) return " HookSet.create('?" + l.name + "') ";
                    if ("string" === l.type) return l.text.replace(/\n/g, "\\n");
                    if ("colour" === l.type) return "Colour.create(" + s(l.colour) + ")";
                    if ("root" === l.type) return a(l.children)
                }
                var f = void 0,
                    p = r(e, "least"),
                    d = _slicedToArray(p, 2);
                l = d[0], f = d[1];
                var h = (l || {}).type,
                    m = void 0,
                    g = void 0,
                    y = void 0,
                    v = void 0,
                    b = void 0,
                    w = void 0,
                    x = !0,
                    T = !0,
                    O = !1;
                if (h) {
                    if ("error" === h) return "TwineError.create('syntax'," + s(l.message) + ")";
                    if ("comma" === h) y = ",", T = !1;
                    else if ("spread" === h) y = "Operations.makeSpreader(", g = a(e.slice(f + 1)) + ")", x = !1;
                    else if ("to" === h) b = "to", g = a(e.slice(f + 1), {
                        isVarRef: !0
                    }), m = "Operations.setIt(" + a(e.slice(0, f), {
                        isVarRef: !0
                    }) + ")";
                    else if ("into" === h) b = "into", g = a(e.slice(0, f), {
                        isVarRef: !0
                    }), m = "Operations.setIt(" + a(e.slice(f + 1), {
                        isVarRef: !0
                    }) + ")";
                    else if ("where" === h || "via" === h) m = "Lambda.create(" + (a(e.slice(0, f), {
                        isVarRef: !0
                    }).trim() || "undefined") + ",", y = s(l.type) + ",", g = s(a(e.slice(f + 1))) + ")";
                    else if ("with" === h || "making" === h || "each" === h) {
                        var S = e.slice(f + 1);
                        ![2, 3].includes(S.length) || "whitespace" !== S[0].type || "tempVariable" !== S[1].type || S[2] && "whitespace" !== S[2].type ? (m = "TwineError.create('operation','I need a temporary variable to the right of \\'", y = l.type, g = "\\'.')") : "each" === h ? (m = "Lambda.create(", y = a(S, {
                            isVarRef: !0
                        }).trim(), g = ",'where','true')") : (m = "Lambda.create(" + (a(e.slice(0, f), {
                            isVarRef: !0
                        }).trim() || "undefined") + ",", y = s(l.type) + ",", g = s(S[1].name) + ")")
                    } else if ("augmentedAssign" === h) b = l.operator, m = a(e.slice(0, f), {
                        isVarRef: !0
                    }), g = "Operations['" + b + "'](" + (a(e.slice(0, f)) + "," + a(e.slice(f + 1))) + ")";
                    else if ("and" === h || "or" === h) {
                        var j = function() {
                            var t = function e(t) {
                                    var n = r(t, "least"),
                                        i = _slicedToArray(n, 2),
                                        o = i[0],
                                        a = i[1];
                                    if (o) return ["inequality", "is", "isNot", "isIn", "contains"].includes(o.type) ? o : ["and", "or"].includes(o.type) ? e(t.slice(0, a)) || e(t.slice(a + 1)) : void 0
                                },
                                u = t(e.slice(0, f)),
                                p = t(e.slice(f + 1)),
                                d = "TwineError.create('operation', 'This use of \"is not\" and \"" + h + "\" is grammatically ambiguous','Maybe try rewriting this as \"__ is not __ " + h + " __ is not __\"') ";
                            if (v = l.type, c === l.type) v = "", m = a(e.slice(0, f), {
                                isVarRef: n,
                                elidedComparison: c
                            }).trim(), y = ",", g = a(e.slice(f + 1), {
                                elidedComparison: c
                            }).trim();
                            else if (u && !p) {
                                var b = r(e.slice(0, f), "least"),
                                    w = _slicedToArray(b, 1),
                                    x = w[0],
                                    T = s(i(x));
                                if ("isNot" === x.type) return {
                                    v: d
                                };
                                g = "Operations.elidedComparisonOperator(" + s(l.type) + "," + T + "," + a(e.slice(f + 1), {
                                    elidedComparison: h
                                }) + ")"
                            } else if (!u && p) {
                                var O = p,
                                    S = e.indexOf(O),
                                    j = s(o(O));
                                if ("isNot" === O.type) return {
                                    v: d
                                };
                                g = "Operations.elidedComparisonOperator(" + s(l.type) + "," + j + "," + a(e.slice(0, f), {
                                    elidedComparison: h
                                }) + ")", m = a([].concat(_toConsumableArray(e.slice(S + 1)), [Object.assign(Object.create(O), _defineProperty({}, "inequality" === O.type ? "operator" : "type", o(O)))], _toConsumableArray(e.slice(f + 1, S))))
                            }
                        }();
                        if ("object" === ("undefined" == typeof j ? "undefined" : _typeof(j))) return j.v
                    } else if ("is" === h || "isNot" === h || "contains" === h || "isIn" === h || "inequality" === h) O = !0, v = i(l);
                    else if ("addition" === h || "subtraction" === h) v = l.text, m = a(e.slice(0, f)), m.trim() || (m = "0");
                    else if ("multiplication" === h || "division" === h) v = l.text;
                    else if ("not" === h) y = " ", g = "Operations.not(" + a(e.slice(f + 1)) + ")", x = !1;
                    else if ("belongingProperty" === h) g = "VarRef.create(" + a(e.slice(f + 1), {
                        isVarRef: !0
                    }) + "," + s(l.name) + ")" + (n ? "" : ".get()"), y = " ", x = T = !1;
                    else if ("belongingOperator" === h || "belongingItOperator" === h) l.type.includes("It") ? (g = "Operations.Identifiers.it", T = !1) : g = a(e.slice(f + 1), {
                        isVarRef: !0
                    }), w = "belonging";
                    else if ("property" === h) m = "VarRef.create(" + a(e.slice(0, f), {
                        isVarRef: !0
                    }) + "," + s(l.name) + ")" + (n ? "" : ".get()"), y = " ", x = T = !1;
                    else if ("itsProperty" === h || "belongingItProperty" === h) m = "VarRef.create(Operations.Identifiers.it," + s(l.name) + ").get()", y = " ", x = T = !1;
                    else if ("possessiveOperator" === h || "itsOperator" === h) l.type.includes("it") && (m = "Operations.Identifiers.it", x = !1), w = "possessive";
                    else if ("twineLink" === h) y = 'Macros.run("link-goto", [section,' + s(l.innerText) + "," + s(l.passage) + "])", x = T = !1;
                    else if ("macro" === h) {
                        var k = l.children[0];
                        "macroName" !== k.type && u("Compiler.compile", "macro token had no macroName child token"), y = "Macros.run(" + (k.isMethodCall ? a(k.children) : '"' + l.name + '"') + ", [section," + a(l.children.slice(1)) + "])", x = T = !1
                    } else "grouping" === h && (y = "(" + a(l.children, {
                        isVarRef: n
                    }) + ")", x = T = !1)
                } else;
                return f > -1 ? (v && (n = !1), m = m || a(e.slice(0, f), {
                    isVarRef: n
                }).trim(), g = g || a(e.slice(f + 1)).trim(), O && !m && (m = " Operations.Identifiers.it "), x && !m || T && !g ? "TwineError.create('operation','I need some code to be " + (x ? "left " : "") + (x && T ? "and " : "") + (T ? "right " : "") + 'of "' + l.text + "\"')" : y ? m + y + g : b ? "Operations.makeAssignmentRequest(" + [m, g, s(b)] + ")" : w ? "VarRef.create(" + ("belonging" === w ? g : m) + ",{computed:true,value:" + ("belonging" === w ? m : g) + "})" + (n ? "" : ".get()") : v ? " Operations[" + s(v) + "](" + m + "," + g + ") " : "") : 1 === e.length ? (("value" in e[0] ? e[0].value : e[0].text) + "").trim() || " " : e.reduce(function(e, t) {
                    return e + a(t, {
                        isVarRef: n
                    })
                }, "")
            }
            var s = e.toJSLiteral,
                u = e.impossible;
            return a
        }), define("renderer", ["utils", "markup", "twinescript/compiler", "internaltypes/twineerror"], function(e, t, n, r) {
            function i(e, t) {
                return "<" + t + ">" + e + "</" + t + ">"
            }

            function o(e, t) {
                var n = l.render(e.children);
                return n && i(n, t)
            }
            var a = e.escape,
                s = e.impossible,
                u = e.toJSLiteral,
                c = e.insensitiveName,
                l = void 0,
                f = "text-align: center; max-width:50%; ";
            return l = {
                options: {},
                exec: function() {
                    var e = void 0,
                        n = void 0;
                    return function(r) {
                        return "string" != typeof r ? (s("Renderer.exec", "source was not a string, but " + ("undefined" == typeof r ? "undefined" : _typeof(r))), "") : r === e ? n : (e = r, n = l.render(t.lex(r).children))
                    }
                }(),
                render: function e(s) {
                    var p = "",
                        d = [];
                    if (!s) return p;
                    for (var h = s.length, m = 0; h > m; m += 1) {
                        var g = s[m];
                        switch (g.type) {
                            case "error":
                                p += r.create("syntax", g.message).render(a(g.text))[0].outerHTML;
                                break;
                            case "numbered":
                            case "bulleted":
                                var y = "numbered" === g.type ? "ol" : "ul";
                                p += "<" + y + ">";
                                for (var v = 1; h > m && s[m] && s[m].type === g.type;) p += ("<" + y + ">").repeat(Math.max(0, s[m].depth - v)), p += ("</" + y + ">").repeat(Math.max(0, v - s[m].depth)), v = s[m].depth, p += o(s[m], "li"), m += 1;
                                m -= 1, p += ("</" + y + ">").repeat(v + 1);
                                break;
                            case "align":
                                for (; g && "align" === g.type;) {
                                    var b = g,
                                        w = b.align,
                                        x = m += 1;
                                    if ("left" === w) {
                                        m -= 1;
                                        break
                                    }
                                    for (; h > m && s[m] && "align" !== s[m].type;) m += 1;
                                    var T = e(s.slice(x, m)),
                                        O = "";
                                    switch (w) {
                                        case "center":
                                            O += f + "margin-left: auto; margin-right: auto;";
                                            break;
                                        case "justify":
                                        case "right":
                                            O += "text-align: " + w + ";";
                                            break;
                                        default:
                                            +w && (O += f + "margin-left: " + w + "%;")
                                    }
                                    p += "<tw-align " + (O ? 'style="' + O + '"' : "") + (l.options.debug ? ' title="' + g.text + '"' : "") + ">" + T + "</tw-align>\n", g = s[m]
                                }
                                break;
                            case "column":
                                for (var S = []; g && "column" === g.type;) {
                                    var j = g,
                                        k = j.column,
                                        C = m += 1;
                                    if ("none" === k) {
                                        m -= 1;
                                        break
                                    }
                                    for (; h > m && s[m] && "column" !== s[m].type;) m += 1;
                                    S.push({
                                        text: g.text,
                                        type: k,
                                        body: e(s.slice(C, m)),
                                        width: g.width,
                                        marginLeft: g.marginLeft,
                                        marginRight: g.marginRight
                                    }), g = s[m]
                                }
                                S.length && ! function() {
                                    var e = S.reduce(function(e, t) {
                                        return e + t.width
                                    }, 0);
                                    p += "<tw-columns>" + S.map(function(t) {
                                        return "<tw-column type=" + t.type + '  style="width:' + t.width / e * 100 + "%; margin-left: " + t.marginLeft + "em; margin-right: " + t.marginRight + 'em;" ' + (l.options.debug ? ' title="' + t.text + '"' : "") + ">" + t.body + "</tw-column>\n"
                                    }).join("") + "</tw-columns>"
                                }();
                                break;
                            case "heading":
                                p += o(g, "h" + g.depth);
                                break;
                            case "br":
                                (!d.length || /td|th/.test(d[0])) && (p += "<br>");
                                break;
                            case "hr":
                                p += "<hr>";
                                break;
                            case "escapedLine":
                            case "comment":
                                break;
                            case "inlineUrl":
                                p += '<a class="link" href="' + a(g.text) + '">' + g.text + "</a>";
                                break;
                            case "scriptStyleTag":
                            case "tag":
                                var A = g.text.toLowerCase();
                                /^<\/?(?:table|thead|tbody|tr|tfoot|td|th)\b/.test(A) && d[g.text.startsWith("</") ? "shift" : "unshift"](A), p += g.text.startsWith("</") ? g.text : g.text.replace(/>$/, " data-raw>");
                                break;
                            case "sub":
                            case "sup":
                            case "del":
                            case "strong":
                            case "em":
                                p += o(g, g.type);
                                break;
                            case "bold":
                                p += o(g, "b");
                                break;
                            case "italic":
                                p += o(g, "i");
                                break;
                            case "twineLink":
                                var E = t.lex("(link-goto:" + u(g.innerText) + "," + u(g.passage) + ")");
                                p += e(E.children);
                                break;
                            case "hook":
                                p += "<tw-hook " + (g.hidden ? "hidden " : "") + (g.name ? 'name="' + c(g.name) + '"' : "") + (l.options.debug && g.name ? ' title="Hook: ?' + g.name + '"' : "") + ' source="' + a(g.innerText) + '"></tw-hook>';
                                break;
                            case "verbatim":
                                p += i(a(g.innerText).replace(/\n/g, "<br>"), "tw-verbatim");
                                break;
                            case "collapsed":
                                p += o(g, "tw-collapsed");
                                break;
                            case "variable":
                            case "tempVariable":
                            case "macro":
                                p += '<tw-expression type="' + g.type + '" name="' + a(g.name || g.text) + '"' + (l.options.debug ? ' title="' + a(g.text) + '"' : "") + ' js="' + a(n(g)) + '"></tw-expression>';
                                break;
                            default:
                                p += g.children && g.children.length ? e(g.children) : g.text
                        }
                    }
                    return p
                }
            }, Object.freeze(l)
        }), define("utils/naturalsort", [], function() {
            return function(e) {
                return function t(n, r) {
                    var i, o, a, s, u = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
                        c = /(^[ ]*|[ ]*$)/g,
                        l = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                        f = /^0x[0-9a-f]+$/i,
                        p = /^0/,
                        d = function(e) {
                            return t.insensitive && ("" + e).toLowerCase() || "" + e
                        },
                        h = d(n).replace(c, "") || "",
                        m = d(r).replace(c, "") || "",
                        g = h.replace(u, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
                        y = m.replace(u, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
                        v = parseInt(h.match(f)) || 1 !== g.length && h.match(l) && Date.parse(h),
                        b = parseInt(m.match(f)) || v && m.match(l) && Date.parse(m) || null;
                    if (e && window.Intl && window.Intl.Collator && (a = window.Intl.Collator(e)), b) {
                        if (b > v) return -1;
                        if (v > b) return 1
                    }
                    for (var w = 0, x = Math.max(g.length, y.length); x > w; w++) {
                        if (i = !(g[w] || "").match(p) && parseFloat(g[w]) || g[w] || 0, o = !(y[w] || "").match(p) && parseFloat(y[w]) || y[w] || 0, isNaN(i) !== isNaN(o)) return isNaN(i) ? 1 : -1;
                        if (("undefined" == typeof i ? "undefined" : _typeof(i)) !== ("undefined" == typeof o ? "undefined" : _typeof(o))) i += "", o += "";
                        else if ("string" == typeof i && a && (s = a.compare(i, o), 0 !== s)) return s;
                        if (o > i) return -1;
                        if (i > o) return 1
                    }
                    return 0
                }
            }
        }), define("internaltypes/varscope", [], function() {
            return {
                TwineScript_ObjectName: "the temporary variables",
                TwineScript_VariableStore: !0
            }
        }), define("datatypes/lambda", ["utils", "utils/operationutils", "internaltypes/varscope", "internaltypes/twineerror"], function(e, t, n, r) {
            var i = e.toJSLiteral,
                o = e.insensitiveName,
                a = (e.plural, t.typeName, t.objectName, t.singleTypeCheck, Object.freeze({
                    lambda: !0,
                    TwineScript_TypeName: "a lambda",
                    TwineScript_ObjectName: function() {
                        return 'a "' + ("making" in this ? "making ... " : "") + ("with" in this ? "with ... " : "") + ("where" in this ? "where ... " : "") + ("via" in this ? "via ... " : "") + '" lambda'
                    },
                    TwineScript_Print: function() {
                        return "`[A lambda]`"
                    },
                    TwineScript_is: function(e) {
                        return e === this
                    },
                    TypeSignature: function(e) {
                        return {
                            pattern: "lambda",
                            innerType: a,
                            clauses: e
                        }
                    },
                    create: function(e, t, i) {
                        var s = void 0;
                        if (r.containsError(e)) return e;
                        if (a.isPrototypeOf(e)) {
                            if (t in e && ("where" !== t || "true" !== e[t])) return r.create("syntax", "This lambda has two '" + t + "' clauses.");
                            s = e
                        } else {
                            if (void 0 !== e && (!e || !e.varref || !n.isPrototypeOf(e.object) || e.propertyChain.length > 1)) return r.create("syntax", "This lambda needs to start with a single temporary variable.");
                            s = Object.create(this), s.loop = e ? e.propertyChain[0] : ""
                        }
                        s[t] = i;
                        var u = [s.making, s.with, s.loop].filter(function(e, t, n) {
                            return e && n.indexOf(o(e)) !== t
                        });
                        return u.length ? r.create("syntax", "This lambda has two variables named '" + u[0] + "'.", "Lambdas should have all-unique parameter names.") : s
                    },
                    apply: function(e, t) {
                        var o = t.loop,
                            a = t.with,
                            s = t.making,
                            u = t.fail,
                            c = t.pass,
                            l = t.ignoreVia,
                            f = Object.create(n);
                        [
                            [this.loop, o],
                            [this.with, a],
                            [this.making, s]
                        ].forEach(function(e) {
                            var t = _slicedToArray(e, 2),
                                n = t[0],
                                r = t[1];
                            return n && (f[n] = r)
                        }), e.stack.unshift(Object.assign(Object.create(null), {
                            tempVariables: f
                        })), e.eval("Operations").initialiseIt(!o || this.with || this.making ? r.create("operation", "I can't use 'it', or an implied 'it', in " + this.TwineScript_ObjectName()) : o);
                        var p = !l && this.via,
                            d = e.eval("where" in this ? "Operations.where(" + this.where + "," + (p || i(c)) + "," + i(u) + ")" : p || i(c));
                        return e.stack.shift(), d
                    },
                    filter: function(e, t) {
                        var n = this;
                        return t.reduce(function(t, i) {
                            var o = void 0;
                            if (o = r.containsError(t)) return o;
                            var a = n.apply(e, {
                                loop: i,
                                pass: !0,
                                fail: !1,
                                ignoreVia: !0
                            });
                            return (o = r.containsError(a)) ? o : t.concat(a ? [i] : [])
                        }, [])
                    }
                }));
            return a
        }), define("macros", ["jquery", "utils/naturalsort", "utils", "utils/operationutils", "datatypes/changercommand", "datatypes/lambda", "datatypes/hookset", "internaltypes/twineerror"], function(e, t, n, r, i, o, a, s) {
            function u(e) {
                return function(n) {
                    n = n.reduce(function(e, n) {
                        if (n && n.spreader === !0) {
                            var r = n.value;
                            if (Array.isArray(r) || "string" == typeof r)
                                for (var i = 0; i < r.length; i++) e.push(r[i]);
                            else r instanceof Set ? e.push.apply(e, _toConsumableArray(Array.from(r).sort(t("en")))) : e.push(s.create("operation", "I can't spread out " + g(r) + ", because it is not a string, dataset, or array."))
                        } else e.push(n);
                        return e
                    }, []);
                    var r = s.containsError(n);
                    return r ? r : e.apply(void 0, _toConsumableArray(n))
                }
            }

            function c(e, t, n) {
                n = [].concat(n || []), e = "(" + (Array.isArray(e) && e.length > 1 ? e[0] : e) + ":)";
                var r = void 0;
                return r = n.length > 0 ? "The " + e + " macro must only be given " + n.map(y).reduce(function(e, t, n, r) {
                        return e + (0 === n ? "" : n < r.length - 1 ? ", " : ", and ") + t
                    }, "") + (n.length > 1 ? ", in that order" : ".") : "The macro must not be given any data - just write " + e + ".",
                    function(i) {
                        for (var a = arguments.length, u = Array(a > 1 ? a - 1 : 0), c = 1; a > c; c++) u[c - 1] = arguments[c];
                        for (var l = void 0, f = (function(t) {
                                var i = n[t],
                                    a = u[t];
                                return t >= n.length && !l ? {
                                    v: s.create("datatype", u.length - n.length + " too many values were given to this " + e + " macro.", r)
                                } : (i || (i = l), !i.innerType || "rest" !== i.pattern && "zero or more" !== i.pattern || (l = i.innerType, "rest" === i.pattern && (i = i.innerType)), v(a, i) ? void 0 : void 0 === a ? {
                                    v: s.create("datatype", "The " + e + " macro needs " + d(n.length - t, "more value") + ".", r)
                                } : a && a.TwineScript_Unstorable && (i === b.TypeSignature.Any || i.innerType && i.innerType === b.TypeSignature.Any) ? {
                                    v: s.create("datatype", e + "'s " + p(t + 1) + " value, " + g(a) + ", is not valid data for this macro.", r)
                                } : a && o.isPrototypeOf(a) && "lambda" === i.pattern ? {
                                    v: s.create("datatype", e + "'s " + p(t + 1) + " value (a lambda) should have " + h(["where", "making", "via", "with"].filter(function(e) {
                                        return i.clauses.includes(e)
                                    }).map(function(e) {
                                        return "a '" + e + "' clause"
                                    })) + ", not " + h(["where", "making", "via", "with"].filter(function(e) {
                                        return e in a
                                    }).map(function(e) {
                                        return "a '" + e + "' clause"
                                    })) + ".")
                                } : {
                                    v: s.create("datatype", e + "'s " + p(t + 1) + " value is " + g(a) + ", but should be " + y(i) + ".", i.message || r)
                                })
                            }), m = 0, w = Math.max(u.length, n.length); w > m; m += 1) {
                            var x = f(m, w);
                            if ("object" === ("undefined" == typeof x ? "undefined" : _typeof(x))) return x.v
                        }
                        return t.apply(void 0, [i].concat(u))
                    }
            }

            function l(e, t) {
                Array.isArray(e) ? e.forEach(function(e) {
                    return m(w, f(e), t)
                }) : m(w, f(e), t)
            }
            var f = n.insensitiveName,
                p = n.nth,
                d = n.plural,
                h = n.andList,
                m = n.lockProperty,
                g = r.objectName,
                y = r.typeName,
                v = r.singleTypeCheck,
                b = void 0,
                w = {};
            return b = {
                has: function(e) {
                    return e = f(e), w.hasOwnProperty(e)
                },
                get: function(e) {
                    return e = f(e), w.hasOwnProperty(e) && w[e]
                },
                add: function e(t, n, r) {
                    return l(t, u(c(t, n, r))), e
                },
                addChanger: function e(t, n, r, o) {
                    return l(t, u(c(t, n, o))), i.register(Array.isArray(t) ? t[0] : t, r), e
                },
                TypeSignature: {
                    optional: function(e) {
                        return {
                            pattern: "optional",
                            innerType: e
                        }
                    },
                    zeroOrMore: function(e) {
                        return {
                            pattern: "zero or more",
                            innerType: e
                        }
                    },
                    either: function() {
                        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                        return {
                            pattern: "either",
                            innerType: t
                        }
                    },
                    rest: function(e) {
                        return {
                            pattern: "rest",
                            innerType: e
                        }
                    },
                    wrapped: function(e, t) {
                        return {
                            pattern: "wrapped",
                            innerType: e,
                            message: t
                        }
                    },
                    Any: {
                        TwineScript_TypeName: "anything"
                    }
                },
                run: function(e, t) {
                    return s.containsError(e) ? e : b.has(e) ? b.get(e)(t) : s.create("macrocall", "I can't run the macro '" + e + "' because it doesn't exist.", "Did you mean to run a macro? If you have a word written like (this:), it is regarded as a macro name.")
                }
            }, Object.freeze(b)
        }), define("datatypes/assignmentrequest", ["utils"], function(e) {
            var t = e.assertMustHave,
                n = Object.freeze({
                    assignmentRequest: !0,
                    TwineScript_TypeName: "a 'to' or 'into' expression",
                    TwineScript_ObjectName: "a 'to' or 'into' expression",
                    TwineScript_Unstorable: !0,
                    create: function(e, n, r) {
                        return t(e, ["varref"]), Object.assign(Object.create(this), {
                            dest: e,
                            src: n,
                            operator: r
                        })
                    }
                });
            return n
        }), define("twinescript/operations", ["state", "datatypes/colour", "datatypes/assignmentrequest", "utils/operationutils", "internaltypes/twineerror"], function(e, t, n, r, i) {
            function o(e, t, n, r) {
                return n = n || "do this to",
                    function(o, a) {
                        1 === t.length && (a = o);
                        var s = void 0;
                        return (s = i.containsError(o, a)) ? s : ("undefined" == typeof o ? "undefined" : _typeof(o)) !== e || ("undefined" == typeof a ? "undefined" : _typeof(a)) !== e ? i.create("operation", "I can only " + n + " " + e + "s, not " + m(("undefined" == typeof o ? "undefined" : _typeof(o)) !== e ? o : a) + ".", r) : t(o, a)
                    }
            }

            function a(e) {
                return function(t, n) {
                    var r = void 0;
                    return (r = i.containsError(t, n)) ? r : t && t.varref ? i.create("operation", "I can't give an expression a new value.") : ("undefined" == typeof t ? "undefined" : _typeof(t)) !== ("undefined" == typeof n ? "undefined" : _typeof(n)) || c(t) !== c(n) ? l(e, t, n) || i.create("operation", m(t) + " isn't the same type of data as " + m(n)) : e(t, n)
                }
            }

            function s(e) {
                var t = function t(n, r) {
                    var o = void 0;
                    if (o = i.containsError(n, r)) return o;
                    if (y = n, n.determiner) {
                        var a = function() {
                            var e = "all" === n.determiner;
                            return {
                                v: n.array.reduce(function(n, o) {
                                    var a = void 0,
                                        s = t(o, r);
                                    return (a = i.containsError(n, s)) ? a : e ? n && s : n || s
                                }, e)
                            }
                        }();
                        if ("object" === ("undefined" == typeof a ? "undefined" : _typeof(a))) return a.v
                    } else if (r.determiner) {
                        var s = function() {
                            var e = "all" === r.determiner;
                            return {
                                v: r.array.reduce(function(r, o) {
                                    var a = void 0,
                                        s = t(n, o);
                                    return (a = i.containsError(r, s)) ? a : e ? r && s : r || s
                                }, e)
                            }
                        }();
                        if ("object" === ("undefined" == typeof s ? "undefined" : _typeof(s))) return s.v
                    }
                    return e(n, r)
                };
                return t
            }
            var u = r.isObject,
                c = r.collectionType,
                l = r.coerceToString,
                f = r.is,
                p = r.clone,
                d = r.unique,
                h = r.contains,
                m = (r.typeName, r.objectName),
                g = void 0,
                y = 0,
                v = "If one of these values is a number, you may want to write a check that it 'is not 0'. Also, if one is a string, you may want to write a check that it 'is not \"\" '.";
            return g = {
                create: function(e) {
                    var t = Object.create(this);
                    return t.Identifiers = {
                        TwineScript_Identifiers: !0,
                        get it() {
                            return y
                        },
                        get time() {
                            return Date.now() - e.timestamp
                        }
                    }, t
                },
                elidedComparisonOperator: function(e, t) {
                    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                    return r.reduce(function(n, r) {
                        return "boolean" == typeof r ? r : g[e](n, g[t](y, r))
                    }, "and" === e)
                },
                and: o("boolean", a(function(e, t) {
                    return e && t
                }), "use 'and' to join", v),
                or: o("boolean", a(function(e, t) {
                    return e || t
                }), "use 'or' to join", v),
                not: o("boolean", function(e) {
                    return !e
                }, "use 'not' to invert", v),
                "+": a(function(e, t) {
                    if (Array.isArray(e)) return [].concat(_toConsumableArray(e), _toConsumableArray(t));
                    var n = void 0;
                    return e instanceof Map ? (n = new Map(e), t.forEach(function(e, t) {
                        return n.set(t, e)
                    }), n) : e instanceof Set ? new Set([].concat(_toConsumableArray(e), _toConsumableArray(t)).filter(d).map(p)) : "function" == typeof e["TwineScript_+"] ? e["TwineScript_+"](t) : "string|number|boolean".includes("undefined" == typeof e ? "undefined" : _typeof(e)) ? e + t : i.create("operation", "I can't use + on " + m(e) + ".")
                }),
                "-": a(function(e, t) {
                    if (Array.isArray(e)) return e.filter(function(e) {
                        return !t.some(function(t) {
                            return f(e, t)
                        })
                    });
                    if (e instanceof Set) {
                        var n = function() {
                            var n = [].concat(_toConsumableArray(t));
                            return {
                                v: new Set([].concat(_toConsumableArray(e)).filter(function(e) {
                                    return !n.some(function(t) {
                                        return f(e, t)
                                    })
                                }))
                            }
                        }();
                        if ("object" === ("undefined" == typeof n ? "undefined" : _typeof(n))) return n.v
                    }
                    return "string" == typeof e ? e.split(t).join("") : "number" == typeof e ? e - t : i.create("operation", "I can't use - on " + m(e) + ".")
                }),
                "*": o("number", a(function(e, t) {
                    return e * t
                }), "multiply"),
                "/": o("number", a(function(e, t) {
                    return 0 === t ? i.create("operation", "I can't divide " + m(e) + " by zero.") : e / t
                }), "divide"),
                "%": o("number", a(function(e, t) {
                    return 0 === t ? i.create("operation", "I can't modulo " + m(e) + " by zero.") : e % t
                }), "modulus"),
                "<": s(o("number", a(function(e, t) {
                    return t > e
                }), "do < to")),
                ">": s(o("number", a(function(e, t) {
                    return e > t
                }), "do > to")),
                "<=": s(o("number", a(function(e, t) {
                    return t >= e
                }), "do <= to")),
                ">=": s(o("number", a(function(e, t) {
                    return e >= t
                }), "do >= to")),
                is: s(f),
                isNot: s(function(e, t) {
                    return !g.is(e, t)
                }),
                contains: s(h),
                isIn: s(function(e, t) {
                    return h(t, e)
                }),
                where: function(e, t, n) {
                    var r = void 0;
                    return (r = i.containsError(e)) ? r : "boolean" != typeof e ? i.create("operation", "This lambda's 'where' clause must evaluate to true or false, not " + m(e) + ".") : e ? t : n
                },
                makeSpreader: function(e) {
                    return {
                        value: e,
                        spreader: !0
                    }
                },
                makeAssignmentRequest: function(e, t, r) {
                    var o = i.containsError(e, t);
                    return o ? o : u(e) && "varref" in e ? n.create(e, t, r) : i.create("operation", "I can't store a new value inside " + m(e) + ".")
                },
                setIt: function(e) {
                    return i.containsError(e) ? e : e.varref ? (y = e.get(), e) : i.create("operation", "I can't put a new value into " + m(e) + ".")
                },
                initialiseIt: function(e) {
                    y = e
                }
            }, Object.freeze(g)
        }), define("twinescript/environ", ["macros", "state", "utils", "datatypes/colour", "datatypes/hookset", "datatypes/lambda", "internaltypes/varref", "internaltypes/twineerror", "twinescript/operations"], function(Macros, State, Utils, Colour, HookSet, Lambda, VarRef, TwineError, OperationsProto) {
            return function(section) {
                "object" === ("undefined" == typeof section ? "undefined" : _typeof(section)) && section || Utils.impossible("TwineScript.environ", "no Section argument was given!");
                var Operations = OperationsProto.create(section);
                return section.eval = function() {
                    try {
                        for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _len5 > _key5; _key5++) args[_key5] = arguments[_key5];
                        return eval(args.join(""))
                    } catch (e) {
                        return e
                    }
                }, section
            }
        }), define("internaltypes/changedescriptor", ["jquery", "utils", "renderer", "datatypes/hookset"], function(e, t, n, r) {
            var i = t.assertOnlyHas,
                o = t.impossible,
                a = t.transitionIn,
                s = n.exec,
                u = void 0,
                c = {
                    source: "",
                    innerSource: "",
                    enabled: !0,
                    target: null,
                    append: "append",
                    newTargets: null,
                    transition: "instant",
                    transitionTime: null,
                    loopVars: null,
                    styles: null,
                    attr: null,
                    data: null,
                    section: null,
                    summary: function() {
                        var e = this;
                        return ["source", "innerSource", "enabled", "target", "append", "newTargets", "transition", "transitionTime"].filter(function(t) {
                            return e.hasOwnProperty(t)
                        }).concat([this.attr.length && "attr", this.styles.length && "styles", Object.keys(this.loopVars).length && "loopVars", Object.keys(this.data).length && "data"].filter(Boolean))
                    },
                    create: function(e, t) {
                        var n = Object.assign(Object.create(this), {
                            attr: [].concat(this.attr || []),
                            styles: [].concat(this.styles || []),
                            loopVars: this.loopVars || {},
                            data: this.data || {}
                        }, e);
                        return t && t.run(n), n
                    },
                    update: function() {
                        var e = this,
                            t = this.section,
                            n = this.newTargets,
                            i = this.target,
                            o = function(t) {
                                Array.isArray(e.styles) && e.styles.length > 0 && setTimeout(function() {
                                    return t.css(Object.assign.apply(Object, _toConsumableArray([{}].concat(e.styles))))
                                }), e.attr && e.attr.forEach(function(e) {
                                    return t.attr(e)
                                }), e.data && t.data(e.data)
                            };
                        Array.isArray(n) && n.length && (i = n.map(function(e) {
                            return e.target
                        })), [].concat(i).forEach(function(e) {
                            r.isPrototypeOf(e) ? e.forEach(t, o) : o(e)
                        })
                    },
                    render: function() {
                        var t = this,
                            n = this.source,
                            l = this.transition,
                            f = this.transitionTime,
                            p = this.enabled,
                            d = this.section,
                            h = this.newTargets,
                            m = this.target,
                            g = this.append;
                        if (i(this, u), !p || void 0 !== m.popAttr("hidden")) return c.create({
                            target: m,
                            data: {
                                hiddenSource: n
                            }
                        }).update(), e();
                        if (Array.isArray(h) && h.length && (m = h), !m) return o("ChangeDescriptor.render", "ChangeDescriptor has source but not a target!"), e();
                        var y = e(),
                            v = function(e) {
                                return function(n) {
                                    y = y.add(t.create({
                                        target: n,
                                        append: e,
                                        newTargets: null
                                    }).render())
                                }
                            };
                        if ([].concat(m).forEach(function t(n, i, o) {
                                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g;
                                r.isPrototypeOf(n) ? n.forEach(d, v(a)) : n.jquery && n.length > 1 ? Array.from(n).map(e).forEach(v(a)) : n.target && n.append && t(n.target, i, o, n.append)
                            }), y.length || Array.isArray(m) || r.isPrototypeOf(m)) return y;
                        if (!(g in m)) {
                            if ("replace" !== g) return o("Section.render", "The target doesn't have a '" + g + "' method."), e();
                            m.empty(), g = "append"
                        }
                        return y = e(n && e.parseHTML(s(n), document, !0)), m[g](y.length ? y : void 0), this.update(), l && a("replace" === g ? m : y, l, f), y
                    }
                };
            return u = Object.keys(c), Object.seal(c)
        }), define("internaltypes/twinenotifier", ["jquery", "utils"], function(e, t) {
            var n = t.impossible,
                r = {
                    create: function(e) {
                        return e || n("TwineNotifier.create", "called with only 1 string."), Object.assign(Object.create(r), {
                            message: e
                        })
                    },
                    render: function() {
                        return e("<tw-notifier>").attr("message", this.message)
                    }
                };
            return r
        }), define("section", ["jquery", "utils", "utils/selectors", "renderer", "twinescript/environ", "twinescript/operations", "state", "utils/operationutils", "datatypes/changercommand", "datatypes/hookset", "datatypes/colour", "internaltypes/changedescriptor", "internaltypes/varscope", "internaltypes/twineerror", "internaltypes/twinenotifier"], function(e, t, n, r, i, o, a, s, u, c, l, f, p, d, h) {
            function m(e, n, r) {
                if (n && "object" === ("undefined" == typeof n ? "undefined" : _typeof(n)) && n.changer) {
                    var i = this.renderInto(r.popAttr("source"), r, n);
                    if (!i) {
                        var o = t.insensitiveName(e.attr("name"));
                        return void(["if", "elseif", "unless", "else"].includes(o) && (e.addClass("false"), "elseif" !== o && (this.stack[0].lastHookShown = !1)))
                    }
                } else if (n && "object" === ("undefined" == typeof n ? "undefined" : _typeof(n)) && n.live) x.call(this, r, n.delay, n.event);
                else {
                    if (n === !1) return r.attr("source") && r.data("hiddenSource", r.popAttr("source")), e.addClass("false"), void(this.stack[0].lastHookShown = !1);
                    n !== !0 && e.replaceWith(d.create("datatype", O(n) + " cannot be attached to this hook.", "Only Booleans, changer commands, and the (live:) macro can be attached to hooks.").render(e.attr("title")))
                }
                this.stack[0].lastHookShown = !0
            }

            function g(t) {
                var n = t instanceof e ? t[0] : t,
                    r = n.nextSibling;
                if (r && (r instanceof Text && !r.textContent.trim() || "br" === (r.tagName || "").toLowerCase())) {
                    var i = g(r),
                        o = i.whitespace,
                        a = i.nextElem;
                    return {
                        whitespace: e(r).add(o),
                        nextElem: a
                    }
                }
                return {
                    whitespace: e(),
                    nextElem: e(r)
                }
            }

            function y(r) {
                var i = this.eval(r.popAttr("js") || ""),
                    a = void 0,
                    s = void 0,
                    c = e();
                for (s = r; u.isPrototypeOf(i);) {
                    var f = g(s);
                    if (a = f.whitespace, s = f.nextElem, s[0] instanceof Text && "+" === s[0].textContent.trim()) {
                        var p = void 0,
                            y = s,
                            v = g(y);
                        if (p = v.whitespace, s = v.nextElem, s.is(n.expression)) {
                            var b = this.eval(s.popAttr("js"));
                            if (d.containsError(b)) {
                                i = b;
                                break
                            }
                            var w = o["+"](i, b);
                            e(a).add(y).add(p).remove(), i = d.containsError(w) ? d.create("operation", "I can't combine " + O(i) + " with " + O(b) + ".") : w;
                            continue
                        }
                    }
                    if (s.is(n.hook)) {
                        a.remove(), c = s;
                        break
                    }
                    r.replaceWith(d.create("syntax", "The (" + i.macroName + ":) command should be assigned to a variable or attached to a hook.", "Macros like this should appear to the left of a hook: " + r.attr("title") + "[Some text]").render(r.attr("title")));
                    break
                }
                c = c.length ? c : g(r).nextElem.filter(n.hook);
                var x = void 0;
                if (x = d.containsError(i)) x instanceof Error && (x = d.fromError(x)), r.replaceWith(x.render(r.attr("title"), r));
                else if (h.isPrototypeOf(i)) r.append(i.render());
                else if (!c.length && ("string" == typeof i || "number" == typeof i || i instanceof Map || i instanceof Set || Array.isArray(i) || l.isPrototypeOf(i)) || i && i.TwineScript_Print && !i.changer) {
                    if (i = T(i), i.earlyExit) return "earlyexit";
                    i instanceof e ? r.append(i) : d.containsError(i) ? (i instanceof Error && (i = d.fromError(i)), r.replaceWith(i.render(r.attr("title"), r))) : this.renderInto(i, r)
                } else c.length ? m.call(this, r, i, c) : i.changer || "boolean" == typeof i || t.impossible("Section.runExpression", "The expression evaluated to an unknown value: " + i.toSource())
            }

            function v(e) {
                var t = e.first()[0],
                    n = e.parent();
                if (!n.length) return null;
                var r = n.textNodes().filter(function(e) {
                    var n = e.compareDocumentPosition(t);
                    return 4 & n && !(8 & n)
                });
                return r = r[r.length - 1], r ? r : v(n)
            }

            function b(e) {
                var t = e.last()[0],
                    n = e.parent();
                if (!n.length) return null;
                var r = n.textNodes().filter(function(e) {
                    var n = e.compareDocumentPosition(t);
                    return 2 & n && !(8 & n)
                })[0];
                return r ? r : b(n)
            }

            function w(t) {
                function n(t) {
                    return 0 === e(this || t).parentsUntil("tw-collapsed").filter("tw-verbatim, tw-expression, [collapsing=false]").length
                }
                var r = v(t);
                e(r).parents("tw-collapsed").length || (r = null);
                var i = b(t);
                e(i).parents("tw-collapsed").length || (i = null), t.findAndFilter("br:not([data-raw])").filter(n).replaceWith(document.createTextNode(" "));
                var o = t.textNodes(),
                    a = 0;
                o.reduce(function(e, t) {
                    return n(t) ? (t.textContent = t.textContent.replace(/\s+/g, " "), " " !== t.textContent[0] || e && e.textContent && !(e.textContent.search(/\s$/) > -1) || (t.textContent = t.textContent.slice(1)), t) : document.createTextNode("A")
                }, r), [].concat(_toConsumableArray(o)).reverse().every(function(e) {
                    return n(e) ? e.textContent.match(/^\s*$/) ? (a += e.textContent.length, e.textContent = "", !0) : (e.textContent = e.textContent.replace(/\s+$/, function(e) {
                        return a += e.length, ""
                    }), !1) : !1
                }), a > 0 && i && (o[o.length - 1].textContent += " "), t[0] && j() && t[0].normalize();

            }

            function x(e, t) {
                var r = this,
                    i = e.popAttr("source") || "";
                t = void 0 === t ? 20 : t;
                var o = function o() {
                    r.inDOM() && (r.renderInto(i, e, {
                        append: "replace"
                    }), e.find(n.expression + "[name='stop']").length || r.inDOM() && setTimeout(o, t))
                };
                setTimeout(o, t)
            }
            var T = s.printBuiltinValue,
                O = s.objectName,
                S = void 0,
                j = function() {
                    var t = void 0;
                    return function() {
                        if (void 0 !== t) return t;
                        var n = e("<p>");
                        return n[0].normalize ? (n.append(document.createTextNode("0-"), document.createTextNode("2"), document.createTextNode(""))[0].normalize(), t = 1 === n.contents().length) : t = !1
                    }
                }();
            return S = {
                create: function(n) {
                    n instanceof e && 1 === n.length || t.impossible("Section.create", "called with no DOM element");
                    var r = Object.assign(Object.create(this), {
                        timestamp: Date.now(),
                        dom: n || t.storyElement,
                        stack: [],
                        enchantments: []
                    });
                    return r = i(r)
                },
                inDOM: function() {
                    return e(t.storyElement).find(this.dom).length > 0
                },
                evaluateTwineMarkup: function(t) {
                    var n = e("<p>");
                    this.renderInto(t, n);
                    var r = void 0;
                    return (r = n.find("tw-error")).length > 0 ? r : n.text()
                },
                renderInto: function(t, r) {
                    for (var i = this, o = f.create({
                            target: r,
                            source: t,
                            section: this
                        }), a = arguments.length, s = Array(a > 2 ? a - 2 : 0), u = 2; a > u; u++) s[u - 2] = arguments[u];
                    s.forEach(function(e) {
                        e.changer ? e.run(o) : Object.assign(o, e)
                    }), this.stack.length >= 50 && d.create("infinite", "Printing this expression may have trapped me in an infinite loop.").render(r.attr("title")).replaceAll(r);
                    var c = function(t, o) {
                            var a = t.render();
                            i.stack.unshift(o);
                            var s = i;
                            a.findAndFilter(n.hook + "," + n.expression).each(function() {
                                var t = e(this);
                                switch (t.tag()) {
                                    case n.hook:
                                        if (t.attr("hidden") && (t.removeAttr("hidden"), t.data("hiddenSource", t.popAttr("source"))), t.attr("source") && s.renderInto(t.popAttr("source"), t), t.find("[earlyexit]").length) return !1;
                                        break;
                                    case n.expression:
                                        if (t.attr("js")) {
                                            var r = y.call(s, t);
                                            return "earlyexit" === r ? (a.attr("earlyexit", !0), !1) : r
                                        }
                                }
                            }), a.length && r instanceof e && r.is(n.hook) && r.parents("tw-collapsed").length > 0 && w(a), a.findAndFilter(n.collapsed).each(function() {
                                w(e(this))
                            }), i.stack.shift()
                        },
                        l = Object.create(this.stack.length ? this.stack[0].tempVariables : p);
                    return Object.keys(o.loopVars).length ? ! function() {
                        for (var e = Object.assign({}, o.loopVars), t = Math.min.apply(Math, _toConsumableArray(Object.keys(e).map(function(t) {
                                return e[t].length
                            }))); t > 0; t -= 1) c(o, {
                            tempVariables: Object.keys(e).reduce(function(t, n) {
                                return t[n] = e[n].shift(), t
                            }, Object.create(l))
                        })
                    }() : c(o, {
                        tempVariables: l
                    }), 0 === this.stack.length && this.updateEnchantments(), o.enabled
                },
                updateEnchantments: function() {
                    this.enchantments.forEach(function(e) {
                        e.disenchant(), e.enchantScope()
                    })
                }
            }, Object.preventExtensions(S)
        }), define("engine", ["jquery", "utils", "utils/selectors", "state", "section", "passages"], function(e, t, n, r, i, o) {
            function a() {
                var t = e("<tw-passage><tw-sidebar>"),
                    i = t.children(n.sidebar);
                h.permalink && r.save && i.append('<tw-icon tabindex=0 class="permalink" title="Permanent link to this passage"><a href="#' + r.save() + '">&sect;');
                var o = e('<tw-icon tabindex=0 class="undo" title="Undo">&#8630;</tw-icon>').click(d.goBack),
                    a = e('<tw-icon tabindex=0 class="redo" title="Redo">&#8631;</tw-icon>').click(d.goForward);
                return r.pastLength <= 0 && o.css("visibility", "hidden"), r.futureLength <= 0 && a.css("visibility", "hidden"), i.append(o).append(a), t
            }

            function s(e, t) {
                return "<tw-include type=" + e + " title='" + c(t.get("name")) + "'>" + t.get("source") + "</tw-include>"
            }

            function u(u) {
                var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.assertOnlyHas(c, ["stretch", "transitionIn", "transitionOut"]);
                var d = o.get(u),
                    m = t.storyElement,
                    g = m.parent(),
                    y = c.stretch,
                    v = c.transitionOut,
                    b = c.transitionIn;
                if (v = v || "instant", g.is(n.enchantment)) {
                    var w = g.data("enchantedProperties");
                    console.log(w), w && m.css(w.reduce(function(e, t) {
                        return e[t] = "", e
                    }, {})), g = m.unwrap().parent()
                }
                d && d instanceof Map && d.has("source") || l("Engine.showPassage", "There's no passage with the name \"" + u + '"!'), m.detach();
                var x = t.$(m.children(f));
                !y && v && (p(x, v), x.css("position", "absolute"));
                var T = (d.get("tags") || []).join(" "),
                    O = a().appendTo(m).attr({
                        tags: T
                    });
                m.attr({
                    tags: T
                });
                var S = i.create(O),
                    j = d.get("source");
                j = o.getTagged("header").map(s.bind(0, "header")).join("") + (h.debug ? o.getTagged("debug-header").map(s.bind(0, "debug-header")).join("") : "") + j + o.getTagged("footer").map(s.bind(0, "footer")).join("") + (h.debug ? o.getTagged("debug-footer").map(s.bind(0, "debug-footer")).join("") : ""), r.pastLength <= 0 && (h.debug && (j = o.getTagged("debug-startup").map(s.bind(0, "debug-startup")).join("") + j), j = o.getTagged("startup").map(s.bind(0, "startup")).join("") + j), S.renderInto(j, O, {
                    transition: b || "dissolve"
                }), g.append(m.parents().length ? m.parents().last() : m), scroll(0, y ? O.offset().top - .05 * e(window).height() : m.offset().top)
            }
            var c = t.escape,
                l = t.impossible,
                f = t.passageSelector,
                p = t.transitionOut,
                d = void 0,
                h = Object.create(null);
            return d = {
                goBack: function() {
                    r.rewind() && u(r.passage)
                },
                goForward: function() {
                    r.fastForward() && u(r.passage)
                },
                goToPassage: function(e, t) {
                    r.play(e), u(e, {
                        stretch: t
                    })
                },
                showPassage: u,
                options: h
            }, Object.freeze(d)
        }), define("debugmode", ["jquery", "utils", "state", "internaltypes/varref", "utils/operationutils", "engine"], function(e, t, n, r, i, o) {
            {
                var a = i.objectName;
                i.typeName
            }
            return function() {
                function t(t, n) {
                    var r = l.children('[data-name="' + t + '"]'),
                        i = a(n);
                    r.length || (r = e('<div class="variable-row" data-name="' + t + '" data-value="' + i + '"></div>').appendTo(l)), r.empty().append("<span class='variable-name'>" + t + "</span><span class='variable-value'>" + a(n) + "</span>")
                }

                function i() {
                    var r = [];
                    l.children().each(function(i, o) {
                        o = e(o);
                        var s = o.attr("data-name"),
                            u = o.attr("data-value");
                        s.startsWith("TwineScript") || (s in n.variables ? (r.push(s), a(n.variables[s]) !== u && t(s, n.variables[s])) : o.remove())
                    });
                    for (var i in n.variables) i.startsWith("TwineScript") || r.includes(i) || t(i, n.variables[i])
                }
                var s = e("<tw-debugger><div class='variables'></div>Turns: <select disabled></select><button class='show-invisibles'>&#9903; Debug View</button></tw-debugger>"),
                    u = s.find(".show-invisibles");
                u.click(function() {
                    e(document.documentElement).toggleClass("debug-mode")
                });
                var c = s.find("select");
                c.change(function(e) {
                    var t = e.target.value,
                        r = t - n.pastLength;
                    0 !== r && (n[0 > r ? "rewind" : "fastForward"](Math.abs(r)), o.showPassage(n.passage))
                }), n.on("forward", function(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                        i = n.pastLength;
                    i > 1 && c.removeAttr("disabled"), r || (c.children().each(function(t, n) {
                        t >= i && e(n).remove()
                    }), c.append("<option value=" + i + ">" + (i + 1) + ": " + t + "</option>").val(i))
                }).on("back", function() {
                    n.pastLength <= 1 && c.attr("disabled"), c.find("[selected]").removeAttr("selected"), c.val(n.pastLength)
                }).on("load", function(e) {
                    c.empty(), c[e.length <= 1 ? "attr" : "removeAttr"]("disabled"), e.forEach(function(e, t) {
                        return c.append("<option value=" + t + ">" + (t + 1) + ": " + e.passage + "</option>")
                    })
                });
                var l = s.find(".variables");
                n.on("forward", i).on("back", i), r.on("set", function(e, r, i) {
                    e === n.variables && t(r, i)
                }).on("delete", function(e, t) {
                    e === n.variables && l.find('[data-name="' + t + '"]').remove()
                }), e(document.body).append(s)
            }
        }), define("macrolib/values", ["macros", "utils", "utils/operationutils", "datatypes/colour", "internaltypes/twineerror"], function(e, t, n, r, i) {
            function o(e) {
                return function(t) {
                    var n = e.apply(void 0, _toConsumableArray(t));
                    return "number" != typeof n || isNaN(n) ? i.create("macrocall", "This mathematical expression doesn't compute!") : n
                }
            }
            var a = t.realWhitespace,
                s = t.anyRealLetter,
                u = n.subset,
                c = n.objectName,
                l = e.TypeSignature,
                f = l.rest,
                p = l.zeroOrMore,
                d = l.Any;
            e.add(["text", "string"], function() {
                for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                return t.join("")
            }, [p(e.TypeSignature.either(String, Number, Boolean, Array))])("substring", function(e, t, n, r) {
                return u(t, n, r)
            }, [String, parseInt, parseInt])("lowercase", function(e, t) {
                return t.toLowerCase()
            }, [String])("uppercase", function(e, t) {
                return t.toUpperCase()
            }, [String])("lowerfirst", function(e, t) {
                return t.replace(new RegExp(s + "+"), function(e) {
                    return e = Array.from(e), e[0].toLowerCase() + e.slice(1).join("").toLowerCase()
                })
            }, [String])("upperfirst", function(e, t) {
                return t.replace(new RegExp(s + "+"), function(e) {
                    return e = Array.from(e), e[0].toUpperCase() + e.slice(1).join("").toLowerCase()
                })
            }, [String])("words", function(e, t) {
                return t.split(new RegExp(a + "+")).filter(Boolean)
            }, [String])(["num", "number"], function(e, t) {
                return Number.isNaN(+t) ? i.create("macrocall", "I couldn't convert " + c(t) + " to a number.") : +t
            }, [String])("rgb", function() {
                for (var e, t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1)
                    if (e = arguments.length <= t + 1 ? void 0 : arguments[t + 1], 0 > e || e > 255) return i.create("macrocall", "RGB values must be whole numbers between 0 and 255, not " + c(e) + ".");
                return r.create({
                    r: arguments.length <= 1 ? void 0 : arguments[1],
                    g: arguments.length <= 2 ? void 0 : arguments[2],
                    b: arguments.length <= 3 ? void 0 : arguments[3]
                })
            }, [parseInt, parseInt, parseInt])("rgba", function() {
                for (var e, t = 0; 3 > t; t += 1)
                    if (e = arguments.length <= t + 1 ? void 0 : arguments[t + 1], 0 > e || e > 255) return i.create("macrocall", "RGB values must be whole numbers between 0 and 255, not " + c(e) + ".");
                return (arguments.length <= 4 ? void 0 : arguments[4]) < 0 || (arguments.length <= 4 ? void 0 : arguments[4]) > 1 ? i.create("macrocall", "Alpha values must be numbers between 0 and 1 inclusive, not " + c(arguments.length <= 4 ? void 0 : arguments[4]) + ".") : r.create({
                    r: arguments.length <= 1 ? void 0 : arguments[1],
                    g: arguments.length <= 2 ? void 0 : arguments[2],
                    b: arguments.length <= 3 ? void 0 : arguments[3],
                    a: arguments.length <= 4 ? void 0 : arguments[4]
                })
            }, [parseInt, parseInt, parseInt, Number])("hsl", function(e, t, n, o) {
                var a = " values must be numbers between 0 and 1 inclusive, not ";
                return 0 > n || n > 1 ? i.create("macrocall", "Saturation" + a + c(n) + ".") : 0 > o || o > 1 ? i.create("macrocall", "Lightness" + a + c(o) + ".") : (t = Math.round(t) % 360, 0 > t && (t += 360), r.create({
                    h: t,
                    s: n,
                    l: o
                }))
            }, [Number, Number, Number])("hsla", function(e, t, n, o, a) {
                var s = " values must be numbers between 0 and 1 inclusive, not ";
                return 0 > n || n > 1 ? i.create("macrocall", "Saturation" + s + c(n) + ".") : 0 > o || o > 1 ? i.create("macrocall", "Lightness" + s + c(o) + ".") : 0 > a || a > 1 ? i.create("macrocall", "Alpha" + s + c(o) + ".") : (t = Math.round(t) % 360, 0 > t && (t += 360), r.create({
                    h: t,
                    s: n,
                    l: o,
                    a: a
                }))
            }, [Number, Number, Number, Number]), {
                weekday: [function() {
                    return ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][(new Date).getDay()] + "day"
                }, null],
                monthday: [function() {
                    return (new Date).getDate()
                }, null],
                currenttime: [function() {
                    var e = new Date,
                        t = e.getHours() < 12,
                        n = e.getHours() % 12 || 12,
                        r = (e.getMinutes() < 10 ? "0" : "") + e.getMinutes();
                    return n + ":" + r + " " + (t ? "A" : "P") + "M"
                }, null],
                currentdate: [function() {
                    return (new Date).toDateString()
                }, null],
                min: [Math.min, f(Number)],
                max: [Math.max, f(Number)],
                abs: [Math.abs, Number],
                sign: [Math.sign, Number],
                sin: [Math.sin, Number],
                cos: [Math.cos, Number],
                tan: [Math.tan, Number],
                floor: [Math.floor, Number],
                round: [Math.round, Number],
                ceil: [Math.ceil, Number],
                pow: [o(Math.pow), Number, Number],
                exp: [Math.exp, Number],
                sqrt: [o(Math.sqrt), Number],
                log: [o(Math.log), Number],
                log10: [o(Math.log10), Number],
                log2: [o(Math.log2), Number],
                random: [function(e, t) {
                        var n = void 0,
                            r = void 0;
                        return t ? (n = Math.min(e, t), r = Math.max(e, t)) : (n = 0, r = e), r += 1, ~~(Math.random() * (r - n)) + n
                    },
                    [parseInt, e.TypeSignature.optional(parseInt)]
                ],
                either: [function() {
                    var e;
                    return e = ~~(Math.random() * arguments.length), arguments.length <= e ? void 0 : arguments[e]
                }, f(d)],
                "": function() {
                    var t = this;
                    Object.keys(this).forEach(function(n) {
                        n && ! function() {
                            var r = t[n][0],
                                i = t[n][1];
                            e.add(n, function() {
                                for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                                return r.apply(void 0, t)
                            }, i)
                        }()
                    })
                }
            }[""]()
        }),
        function(e) {
            ! function() {
                if (!e.requestAnimationFrame) {
                    if (e.webkitRequestAnimationFrame) return e.requestAnimationFrame = e.webkitRequestAnimationFrame, void(e.cancelAnimationFrame = e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame);
                    var t = 0;
                    e.requestAnimationFrame = function(n) {
                        var r = (new Date).getTime(),
                            i = Math.max(0, 16 - (r - t)),
                            o = e.setTimeout(function() {
                                n(r + i)
                            }, i);
                        return t = r + i, o
                    }, e.cancelAnimationFrame = function(e) {
                        clearTimeout(e)
                    }
                }
            }(), "function" == typeof define && define("requestAnimationFrame", [], function() {
                return e.requestAnimationFrame
            })
        }(window), define("macrolib/commands", ["requestAnimationFrame", "macros", "utils", "state", "passages", "engine", "internaltypes/twineerror", "datatypes/hookset", "utils/operationutils"], function(e, t, n, r, i, o, a, s, u) {
            function c(e) {
                return "(" + e + " " + o.options.ifid + ") "
            }
            var l = n.toJSLiteral,
                f = n.unescape,
                p = u.printBuiltinValue,
                d = t.TypeSignature,
                h = d.Any,
                m = d.rest,
                g = d.optional,
                y = !!localStorage && function() {
                    try {
                        return localStorage.setItem("test", "1"), localStorage.removeItem("test"), !0
                    } catch (e) {
                        return !1
                    }
                }();
            t.add("display", function(e, t) {
                return {
                    TwineScript_ObjectName: "a (display: " + l(t) + ") command",
                    TwineScript_TypeName: "a (display:) command",
                    TwineScript_Print: function() {
                        return i.has(t) ? f(i.get(t).get("source")) : a.create("macrocall", "I can't (display:) the passage '" + t + "' because it doesn't exist.")
                    }
                }
            }, [String])("print", function(e, t) {
                return {
                    TwineScript_ObjectName: "a (print:) command",
                    TwineScript_TypeName: "a (print:) command",
                    TwineScript_Print: function() {
                        return p(t)
                    }
                }
            }, [h])("show", function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
                return {
                    TwineScript_ObjectName: "a (show:) command",
                    TwineScript_TypeName: "a (show:) command",
                    TwineScript_Print: function() {
                        return n.forEach(function(t) {
                            return t.forEach(e, function(t) {
                                var n = t.data("hiddenSource");
                                return void 0 === n ? a.create("operation", "I can't reveal a hook which is already visible.") : void e.renderInto(n, t)
                            })
                        }), ""
                    }
                }
            }, [m(s)])("goto", function(t, n) {
                return {
                    TwineScript_ObjectName: "a (go-to: " + l(n) + ") command",
                    TwineScript_TypeName: "a (go-to:) command",
                    TwineScript_Print: function() {
                        return i.has(n) ? (e(function() {
                            return o.goToPassage(n)
                        }), {
                            earlyExit: 1
                        }) : a.create("macrocall", "I can't (go-to:) the passage '" + n + "' because it doesn't exist.")
                    }
                }
            }, [String])("goto-transition", function(t, n, r) {
                return {
                    TwineScript_ObjectName: "a (goto-transition: " + l(n) + "," + l(r) + ") command",
                    TwineScript_TypeName: "a (goto-transition:) command",
                    TwineScript_Print: function() {
                        return i.has(n) ? (e(function() {
                            return o.goToPassage(n, {
                                transitionIn: r,
                                transitionOut: r
                            })
                        }), {
                            earlyExit: 1
                        }) : a.create("macrocall", "I can't (goto-transition:) the passage '" + r + "' because it doesn't exist.")
                    }
                }
            }, [String, String])("undo", function() {
                return {
                    TwineScript_ObjectName: "a (undo:) command",
                    TwineScript_TypeName: "a (undo:) command",
                    TwineScript_Print: function() {
                        return r.pastLength < 1 ? a.create("macrocall", "I can't (undo:) on the first turn.") : (e(function() {
                            return o.goBack()
                        }), {
                            earlyExit: 1
                        })
                    }
                }
            }, [])("live", function(e, t) {
                return {
                    TwineScript_ObjectName: "a (live: " + t + ") command",
                    TwineScript_TypeName: "a (live:) command",
                    live: !0,
                    delay: t
                }
            }, [g(Number)])("stop", function() {
                return {
                    TwineScript_ObjectName: "a (stop:) command",
                    TwineScript_TypeName: "a (stop:) command",
                    TwineScript_Print: function() {
                        return ""
                    }
                }
            }, [])("savegame", function(e, t, n) {
                if (n = n || "", !y) return !1;
                var i = r.serialise();
                if (a.containsError(i)) return i;
                try {
                    return localStorage.setItem(c("Saved Game") + t, i), localStorage.setItem(c("Saved Game Filename") + t, n), !0
                } catch (e) {
                    return !1
                }
            }, [String, g(String)])("loadgame", function(t, n) {
                return {
                    TwineScript_ObjectName: "a (load-game:) command",
                    TwineScript_TypeName: "a (load-game:) command",
                    TwineScript_Print: function() {
                        var t = localStorage.getItem(c("Saved Game") + n);
                        return t ? (r.deserialise(t), e(o.showPassage.bind(o, r.passage, !1)), {
                            earlyExit: 1
                        }) : a.create("saving", "I can't find a save slot named '" + n + "'!")
                    }
                }
            }, [String])("alert", function(e, t) {
                return {
                    TwineScript_ObjectName: "an (alert:) command",
                    TwineScript_TypeName: "an (alert:) command",
                    TwineScript_Print: function() {
                        return window.alert(t), ""
                    }
                }
            }, [String])("prompt", function(e, t, n) {
                return window.prompt(t, n) || ""
            }, [String, String])("confirm", function(e, t) {
                return window.confirm(t)
            }, [String])("openURL", function(e, t) {
                return {
                    TwineScript_ObjectName: "an (open-url:) command",
                    TwineScript_TypeName: "an (open-url:) command",
                    TwineScript_Print: function() {
                        return window.open(t, ""), ""
                    }
                }
            }, [String])("reload", function() {
                return {
                    TwineScript_ObjectName: "a (reload:) command",
                    TwineScript_TypeName: "a (reload:) command",
                    TwineScript_Print: function() {
                        return r.pastLength < 1 ? a.create("infinite", "I mustn't (reload:) the page in the starting passage.") : (window.location.reload(), {
                            earlyExit: 1
                        })
                    }
                }
            }, [])("gotoURL", function(e, t) {
                return {
                    TwineScript_ObjectName: "a (goto-url:) command",
                    TwineScript_TypeName: "a (goto-url:) command",
                    TwineScript_Print: function() {
                        return window.location.assign(t), {
                            earlyExit: 1
                        }
                    }
                }
            }, [String])("pageURL", function() {
                return window.location.href
            }, [])
        }), define("macrolib/datastructures", ["jquery", "utils/naturalsort", "macros", "utils/operationutils", "state", "engine", "passages", "datatypes/lambda", "datatypes/assignmentrequest", "internaltypes/twineerror", "internaltypes/twinenotifier"], function(e, t, n, r, i, o, a, s, u, c, l) {
            var f = r.objectName,
                p = (r.typeName, r.subset),
                d = r.collectionType,
                h = r.isValidDatamapName,
                m = r.is,
                g = r.unique,
                y = r.clone,
                v = n.TypeSignature,
                b = v.optional,
                w = v.rest,
                x = v.either,
                T = v.zeroOrMore,
                O = v.Any;
            n.add("set", function() {
                for (var e = "", t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1) {
                    var n = arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                    if ("into" === n.operator) return c.create("macrocall", "Please say 'to' when using the (set:) macro.");
                    var r = void 0;
                    if (n.src && n.src.varref) {
                        var i = n.src.get(),
                            a = void 0;
                        if (a = c.containsError(i)) return a;
                        r = n.dest.set(i)
                    } else r = n.dest.set(n.src);
                    if (c.isPrototypeOf(r)) return r;
                    o.options.debug && (e += (e ? "; " : "") + f(n.dest) + " is now " + f(n.src))
                }
                return {
                    TwineScript_TypeName: "a (set:) operation",
                    TwineScript_ObjectName: "a (set:) operation",
                    TwineScript_Unstorable: !0,
                    TwineScript_Print: function() {
                        return e && l.create(e).render()
                    }
                }
            }, [w(u)])("put", function() {
                for (var e = "", t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1) {
                    var n = arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                    if ("into" !== n.operator) return c.create("macrocall", "Please say 'into' when using the (put:) macro.");
                    var r = n.dest.set(n.src);
                    if (c.isPrototypeOf(r)) return r;
                    o.options.debug && (e += (e ? "; " : "") + f(n.dest) + " is now " + f(n.src))
                }
                return {
                    TwineScript_TypeName: "a (put:) operation",
                    TwineScript_ObjectName: "a (put:) operation",
                    TwineScript_Unstorable: !0,
                    TwineScript_Print: function() {
                        return e && l.create(e).render()
                    }
                }
            }, [w(u)])("move", function() {
                for (var e = "", t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1) {
                    var n = arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                    if ("into" !== n.operator) return c.create("macrocall", "Please say 'into' when using the (move:) macro.");
                    var r = void 0,
                        i = void 0;
                    if (n.src && n.src.varref) {
                        var a = n.src.get();
                        if (i = c.containsError(a)) return i;
                        if (r = n.dest.set(a), i = c.containsError(r)) return i;
                        n.src.delete()
                    } else if (r = n.dest.set(n.src), i = c.containsError(r)) return i;
                    o.options.debug && (e += (e ? "; " : "") + f(n.dest) + " is now " + f(n.src))
                }
                return {
                    TwineScript_TypeName: "a (move:) operation",
                    TwineScript_ObjectName: "a (move:) operation",
                    TwineScript_Unstorable: !0,
                    TwineScript_Print: function() {
                        return e && l.create(e).render()
                    }
                }
            }, [w(u)])(["a", "array"], function() {
                for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                return t
            }, T(O))("range", function e(t, n, r) {
                if (n > r) return e(t, r, n);
                var i = [n];
                for (r -= n; r-- > 0;) i.push(++n);
                return i
            }, [parseInt, parseInt])("subarray", function(e, t, n, r) {
                return p(t, n, r)
            }, [Array, parseInt, parseInt])("shuffled", function() {
                for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                return t.reduce(function(e, t, n) {
                    var r = Math.random() * (n + 1) | 0;
                    return r === n ? e.push(t) : (e.push(e[r]), e[r] = t), e
                }, []).map(y)
            }, [O, w(O)])("sorted", function() {
                for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
                return n.sort(t("en"))
            }, [x(Number, String), w(x(Number, String))])("rotated", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                return t *= -1, 0 === t ? c.create("macrocall", "I can't rotate these values by 0 positions.") : Math.abs(t) >= r.length ? c.create("macrocall", "I can't rotate these " + r.length + " values by " + t + " positions.") : r.slice(t).concat(r.slice(0, t)).map(y)
            }, [parseInt, O, w(O)])("repeated", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                if (0 >= t) return c.create("macrocall", "I can't repeat these values " + t + " times.");
                for (var o = []; t-- > 0;) o.push.apply(o, r);
                return o.map(y)
            }, [parseInt, w(O)])("interlaced", function() {
                for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                for (var r = Math.min.apply(Math, _toConsumableArray(t.map(function(e) {
                        return e.length
                    }))), i = [], o = 0; r > o; o += 1)
                    for (var a = 0; a < t.length; a += 1) i.push(y(t[a][o]));
                return i
            }, [Array, w(Array)]), n.add("altered", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                return r.map(function(n) {
                    return t.apply(e, {
                        loop: n
                    })
                })
            }, [s.TypeSignature("via"), w(O)])("find", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                return t.filter(e, r)
            }, [s.TypeSignature("where"), w(O)])("all-pass", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                var o = t.filter(e, r);
                return c.containsError(o) || o.length === r.length
            }, [s.TypeSignature("where"), w(O)])("some-pass", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                var o = t.filter(e, r);
                return c.containsError(o) || o.length > 0
            }, [s.TypeSignature("where"), w(O)])("none-pass", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                var o = t.filter(e, r);
                return c.containsError(o) || 0 === o.length
            }, [s.TypeSignature("where"), w(O)])("folded", function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                return "where" in t && (r = t.filter(e, r)), c.containsError(r) || r.reduce(function(n, r) {
                    return t.apply(e, {
                        making: n,
                        loop: r
                    })
                })
            }, [x(s.TypeSignature("where via making"), s.TypeSignature("via making")), w(O)]), n.add("datanames", function(e, n) {
                return Array.from(n.keys()).sort(t("en"))
            }, [Map])("datavalues", function(e, n) {
                return Array.from(n.entries()).sort(function(e, n) {
                    return [e[0], n[0]].sort(t("en"))[0] === e[0] ? -1 : 1
                }).map(function(e) {
                    return y(e[1])
                })
            }, [Map])("dataentries", function(e, n) {
                return Array.from(n.entries()).sort(function(e, n) {
                    return [e[0], n[0]].sort(t("en"))[0] === e[0] ? -1 : 1
                }).map(function(e) {
                    return new Map([
                        ["name", e[0]],
                        ["value", y(e[1])]
                    ])
                })
            }, [Map])("history", function() {
                return i.pastPassageNames()
            }, [])("passage", function(e, t) {
                return y(a.get(t || i.passage)) || c.create("macrocall", "There's no passage named '" + t + "' in this story.")
            }, [b(String)])("savedgames", function() {
                function e(e) {
                    return "(" + e + " " + o.options.ifid + ") "
                }
                var t = 0,
                    n = void 0,
                    r = new Map;
                do {
                    n = localStorage.key(t), t += 1;
                    var i = e("Saved Game");
                    n && n.startsWith(i) && (n = n.slice(i.length), r.set(n, localStorage.getItem(e("Saved Game Filename") + n)))
                } while (n);
                return r
            }, [])(["datamap", "dm"], function() {
                for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                var r = void 0,
                    i = new Map,
                    o = t.reduce(function(e, t) {
                        var n = void 0;
                        if (c.containsError(e)) return e;
                        if (void 0 === r) r = t;
                        else {
                            if (n = c.containsError(h(i, r))) return n;
                            if (i.has(r)) return c.create("macrocall", "You used the same data name (" + f(r) + ") twice in the same (datamap:) call.");
                            i.set(r, y(t)), r = void 0
                        }
                        return e
                    }, !0);
                return c.containsError(o) ? o : void 0 !== r ? c.create("macrocall", "This datamap has a data name without a value.") : i
            }, T(O))(["dataset", "ds"], function() {
                for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                return new Set(t.filter(g).map(y))
            }, T(O))("count", function e(t, n) {
                for (var r = arguments.length, i = Array(r > 2 ? r - 2 : 0), o = 2; r > o; o++) i[o - 2] = arguments[o];
                if (i.length > 1) {
                    var a = void 0,
                        s = i.map(function(r) {
                            return e(t, n, r)
                        });
                    return (a = c.containsError(s)) ? a : s.reduce(function(e, t) {
                        return e + t
                    }, 0)
                }
                var u = i[0];
                switch (d(n)) {
                    case "dataset":
                    case "datamap":
                        return c.create("macrocall", "(count:) shouldn't be given a datamap or dataset.", "You should use the 'contains' operator instead. For instance, write: $variable contains 'value'.");
                    case "string":
                        return "string" != typeof u ? c.create("macrocall", f(n) + " can't contain  " + f(u) + " because it isn't a string.") : u ? n.split(u).length - 1 : 0;
                    case "array":
                        return n.reduce(function(e, t) {
                            return e + m(t, u)
                        }, 0);
                    default:
                        return c.create("macrocall", f(n) + " can't contain values, let alone " + f(u) + ".")
                }
            }, [O, w(O)])
        }), define("macrolib/stylechangers", ["jquery", "macros", "utils", "utils/selectors", "datatypes/colour", "datatypes/changercommand", "datatypes/lambda", "internaltypes/changedescriptor", "internaltypes/twineerror"], function(e, t, n, r, i, o, a, s, u) {
            var c = t.TypeSignature,
                l = c.either,
                f = c.wrapped,
                p = c.rest,
                d = c.Any,
                h = [f(Boolean, 'If you gave a number, you may instead want to check that the number is not 0. If you gave a string, you may instead want to check that the string is not "".')];
            e(function() {
                return e(n.storyElement).on("mouseenter.hover-macro", "[hover=false]", function() {
                    var t = e(this),
                        n = t.data("hoverChanger");
                    t.data({
                        mouseoutStyle: t.attr("style") || ""
                    }), s.create({
                        target: t
                    }, n).update(), t.attr("hover", !0)
                }).on("mouseleave.hover-macro", "[hover=true]", function() {
                    var t = e(this),
                        n = t.data("mouseoutStyle");
                    t.attr("style", n).removeData("mouseoutStyle").attr("hover", !1)
                })
            });
            var m = ["dissolve", "shudder", "pulse"];
            t.addChanger("if", function(e, t) {
                return o.create("if", [t])
            }, function(e, t) {
                return e.enabled = e.enabled && t
            }, h)("unless", function(e, t) {
                return o.create("unless", [!t])
            }, function(e, t) {
                return e.enabled = e.enabled && t
            }, h)("elseif", function(e, t) {
                return "lastHookShown" in e.stack[0] ? o.create("elseif", [e.stack[0].lastHookShown === !1 && !!t]) : u.create("macrocall", "There's no (if:) or something else before this to do (else-if:) with.")
            }, function(e, t) {
                return e.enabled = e.enabled && t
            }, h)("else", function(e) {
                return "lastHookShown" in e.stack[0] ? o.create("else", [e.stack[0].lastHookShown === !1]) : u.create("macrocall", "There's nothing before this to do (else:) with.")
            }, function(e, t) {
                return e.enabled = e.enabled && t
            }, null)("hidden", function() {
                return o.create("hidden")
            }, function(e) {
                return e.enabled = !1
            }, null)("hook", function(e, t) {
                return o.create("hook", [t])
            }, function(e, t) {
                return e.attr.push({
                    name: t
                })
            }, [String])(["for", "loop"], function(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++) r[i - 2] = arguments[i];
                return t.loop ? o.create("for", [t, r]) : u.create("macrocall", "The lambda provided to (for:) must refer to a temp variable, not just 'it'.")
            }, function(e, t, n) {
                return e.loopVars[t.loop] = t.filter(e.section, n)
            }, [a.TypeSignature("where"), p(d)])(["transition", "t8n"], function(e, t) {
                return t = n.insensitiveName(t), -1 === m.indexOf(t) ? u.create("macrocall", "'" + t + "' is not a valid (transition:)", "Only the following names are recognised (capitalisation and hyphens ignored): " + m.join(", ")) : o.create("transition", [t])
            }, function(e, t) {
                return e.transition = t, e
            }, [String])(["transition-time", "t8n-time"], function(e, t) {
                return 0 >= t ? u.create("macrocall", "(transition-time:) should be a positive number of (milli)seconds, not " + t) : o.create("transition-time", [t])
            }, function(e, t) {
                return e.transitionTime = t, e
            }, [Number])("font", function(e, t) {
                return o.create("font", [t])
            }, function(e, t) {
                return e.styles.push({
                    "font-family": t
                }), e
            }, [String])("align", function(e, t) {
                var n = void 0,
                    r = t.indexOf("><");
                if (!/^(==+>|<=+|=+><=+|<==+>)$/.test(t)) return u.create("macrocall", 'The (align:) macro requires an alignment arrow ("==>", "<==", "==><=" etc.) be provided, not "' + t + '"');
                if (~r) {
                    var i = Math.round(r / (t.length - 2) * 50);
                    n = Object.assign({
                        "text-align": "center",
                        "max-width": "50%"
                    }, 25 === i ? {
                        "margin-left": "auto",
                        "margin-right": "auto"
                    } : {
                        "margin-left": i + "%"
                    })
                } else n = "<" === t[0] && ">" === t.slice(-1) ? {
                    "text-align": "justify",
                    "max-width": "50%"
                } : t.includes(">") ? {
                    "text-align": "right"
                } : {
                    "text-align": "left"
                };
                return n.display = "block", o.create("align", [n])
            }, function(e, t) {
                e.styles.push(t)
            }, [String])(["text-colour", "text-color", "color", "colour"], function(e, t) {
                return i.isPrototypeOf(t) && (t = t.toRGBAString(t)), o.create("text-colour", [t])
            }, function(e, t) {
                return e.styles.push({
                    color: t
                }), e
            }, [l(String, i)])("text-rotate", function(e, t) {
                return o.create("text-rotate", [t])
            }, function(t, n) {
                return t.styles.push({
                    display: "inline-block",
                    transform: function() {
                        var t = e(this).css("transform") || "";
                        return "none" === t && (t = ""), t + " rotate(" + n + "deg)"
                    }
                }), t
            }, [Number])("background", function(e, t) {
                return i.isPrototypeOf(t) && (t = t.toRGBAString(t)), o.create("background", [t])
            }, function(t, r) {
                var o = void 0;
                return o = i.isHexString(r) || i.isCSS3Function(r) ? {
                    "background-color": r
                } : {
                    "background-size": "cover",
                    "background-image": "url(" + r + ")"
                }, t.styles.push(o, {
                    display: function() {
                        return n.childrenProbablyInline(e(this)) ? "initial" : "block"
                    }
                }), t
            }, [l(String, i)]).apply(void 0, _toConsumableArray(function() {
                var t = {
                        color: "transparent"
                    },
                    r = Object.assign(Object.create(null), {
                        none: {},
                        bold: {
                            "font-weight": "bold"
                        },
                        italic: {
                            "font-style": "italic"
                        },
                        underline: {
                            "text-decoration": "underline"
                        },
                        strike: {
                            "text-decoration": "line-through"
                        },
                        superscript: {
                            "vertical-align": "super",
                            "font-size": ".83em"
                        },
                        subscript: {
                            "vertical-align": "sub",
                            "font-size": ".83em"
                        },
                        blink: {
                            animation: "fade-in-out 1s steps(1,end) infinite alternate"
                        },
                        shudder: {
                            animation: "shudder linear 0.1s 0s infinite",
                            display: "inline-block"
                        },
                        mark: {
                            "background-color": "hsla(60, 100%, 50%, 0.6)"
                        },
                        condense: {
                            "letter-spacing": "-0.08em"
                        },
                        expand: {
                            "letter-spacing": "0.1em"
                        },
                        outline: [{
                            "text-shadow": function() {
                                var t = e(this).css("color");
                                return "-1px -1px 0 " + t + ", 1px -1px 0 " + t + ",-1px  1px 0 " + t + ", 1px  1px 0 " + t
                            }
                        }, {
                            color: function() {
                                for (var t = e(this); t.length && t[0] !== document; t = t.parent()) {
                                    var n = t.css("background-color");
                                    if ("transparent" !== n && !n.match(/^\w+a\(.+?,\s*0\s*\)$/)) return n
                                }
                                return "#fff"
                            }
                        }],
                        shadow: {
                            "text-shadow": function() {
                                return "0.08em 0.08em 0.08em " + e(this).css("color")
                            }
                        },
                        emboss: {
                            "text-shadow": function() {
                                return "0.08em 0.08em 0em " + e(this).css("color")
                            }
                        },
                        smear: [{
                            "text-shadow": function() {
                                var t = e(this).css("color");
                                return "0em   0em 0.02em " + t + ",-0.2em 0em  0.5em " + t + ", 0.2em 0em  0.5em " + t
                            }
                        }, t],
                        blur: [{
                            "text-shadow": function() {
                                return "0em 0em 0.08em " + e(this).css("color")
                            }
                        }, t],
                        blurrier: [{
                            "text-shadow": function() {
                                return "0em 0em 0.2em " + e(this).css("color")
                            },
                            "user-select": "none"
                        }, t],
                        mirror: {
                            display: "inline-block",
                            transform: "scaleX(-1)"
                        },
                        upsidedown: {
                            display: "inline-block",
                            transform: "scaleY(-1)"
                        },
                        fadeinout: {
                            animation: "fade-in-out 2s ease-in-out infinite alternate"
                        },
                        rumble: {
                            animation: "rumble linear 0.1s 0s infinite",
                            display: "inline-block"
                        }
                    });
                return ["text-style", function(e, t) {
                    return t = n.insensitiveName(t), t in r ? o.create("text-style", [t]) : u.create("macrocall", "'" + t + "' is not a valid (text-style:)", "Only the following names are recognised (capitalisation and hyphens ignored): " + Object.keys(r).join(", "))
                }, function(e, t) {
                    return n.assertMustHave(r, [t]), e.styles = "none" === t ? [] : e.styles.concat(r[t]), e
                }]
            }()).concat([
                [String]
            ]))("hover-style", function(e, t) {
                var n = s.create(),
                    r = (t.run(n), n.summary());
                return r + "" == "styles" || r.every(function(e) {
                    return "styles" === e || "attr" === e
                }) && n.attr.every(function(e) {
                    return Object.keys(e) + "" == "style"
                }) ? o.create("hover-style", [t]) : u.create("macrocall", "The changer given to (hover-style:) must only change the hook's style.")
            }, function(e, t) {
                return e.data.hoverChanger = t, e.attr.push({
                    hover: !1
                }), e
            }, [o])("css", function(e, t) {
                return t.trim().endsWith(";") || (t += ";"), o.create("css", [t])
            }, function(t, n) {
                return t.attr.push({
                    style: function() {
                        return (e(this).attr("style") || "") + n
                    }
                }), t
            }, [String])
        }), define("internaltypes/enchantment", ["jquery", "utils", "internaltypes/changedescriptor"], function(e, t, n) {
            var r = {
                create: function(n) {
                    return t.assertOnlyHas(n, ["scope", "section", "attr", "data", "changer", "functions"]), Object.assign(Object.create(this), {
                        enchantments: e()
                    }, n)
                },
                enchantScope: function() {
                    var r = this,
                        i = this.attr,
                        o = this.data,
                        a = this.functions,
                        s = this.section,
                        u = this.changer,
                        c = this.scope;
                    c instanceof e && (c = Array.prototype.map.call(c, function(t) {
                        return e(t)
                    })), this.enchantments = e(), c.forEach(s, function(e) {
                        var s = e.wrapAll("<tw-enchantment>").parent();
                        if (i && s.attr(i), o && s.data(o), a && a.forEach(function(e) {
                                return e(s)
                            }), u) {
                            var c = n.create({
                                target: s
                            });
                            if (u.run(c), c.update(), e.is(t.storyElement)) {
                                var l = Object.keys(Object.assign.apply(Object, [{}].concat(_toConsumableArray(c.styles))));
                                e.css(l.reduce(function(e, t) {
                                    return e[t] = "inherit", e
                                }, {})), s.data({
                                    enchantedProperties: l
                                })
                            }
                        }
                        e.is(t.storyElement) && s.css({
                            width: "100%",
                            height: "100%"
                        }), r.enchantments = r.enchantments.add(s)
                    })
                },
                disenchant: function() {
                    this.enchantments.each(function() {
                        var n = e(this).contents();
                        n.unwrap();
                        var r = e(this).data("enchantedProperties");
                        r && n.has(t.storyElement) && t.storyElement.css(r.reduce(function(e, t) {
                            return e[t] = "", e
                        }, {}))
                    })
                }
            };
            return Object.freeze(r)
        }), define("macrolib/enchantments", ["jquery", "utils", "utils/selectors", "utils/operationutils", "macros", "datatypes/hookset", "datatypes/changercommand", "internaltypes/enchantment", "internaltypes/twineerror"], function(e, t, n, r, i, o, a, s, u) {
            function c(n, r) {
                return e(function() {
                    t.storyElement.on(n.event + ".enchantment", "." + n.classList.replace(/ /g, "."), function() {
                        var t = e(this),
                            n = t.data("enchantmentEvent");
                        n && n(t)
                    })
                }), [function() {
                    for (var e = arguments.length, t = Array(e > 1 ? e - 1 : 0), n = 1; e > n; n++) t[n - 1] = arguments[n];
                    return t.every(Boolean) ? a.create(r, t.map(o.from)) : u.create("datatype", "A string given to this (" + r + ":) macro was empty.")
                }, function(e, t) {
                    e.enabled = !1, n.rerender && (e.newTargets = (e.newTargets || []).concat({
                        target: t,
                        append: n.rerender
                    }));
                    var r = s.create({
                        functions: [function(e) {
                            e.attr("class", e.children().is("tw-story, tw-sidebar, tw-passage") ? n.blockClassList : n.classList)
                        }],
                        attr: (n.classList + "").match(/\b(?:link|enchantment-clickblock)\b/) ? {
                            tabIndex: "0"
                        } : {},
                        data: {
                            enchantmentEvent: function() {
                                if (n.once) {
                                    var t = e.section.enchantments.indexOf(r);
                                    e.section.enchantments.splice(t, 1), r.disenchant()
                                }
                                e.section.renderInto(e.source, null, Object.assign({}, e, {
                                    enabled: !0
                                }))
                            }
                        },
                        scope: t,
                        section: e.section
                    });
                    return e.section.enchantments.push(r), r.enchantScope(), e
                }, p(o, String)]
            }
            var l = r.is,
                f = i.TypeSignature,
                p = f.either,
                d = f.rest;
            i.add("enchant", function(e, t, n) {
                return {
                    TwineScript_ObjectName: "an (enchant:) command",
                    TwineScript_TypeName: "an (enchant:) command",
                    TwineScript_Print: function() {
                        var r = s.create({
                            scope: o.from(t),
                            changer: n,
                            section: e
                        });
                        return e.enchantments.push(r), r.enchantScope(), ""
                    }
                }
            }, [p(o, String), a]);
            var h = ["replace", "append", "prepend"];
            h.forEach(function(t) {
                i.addChanger(t, function() {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; e > r; r++) n[r - 1] = arguments[r];
                    return n.every(Boolean) ? a.create(t, n.map(o.from)) : u.create("datatype", "A string given to this (" + t + ":) macro was empty.")
                }, function(n) {
                    for (var r, i = arguments.length, o = Array(i > 1 ? i - 1 : 0), a = 1; i > a; a++) o[a - 1] = arguments[a];
                    var s = e(n.target).parents().filter("tw-collapsed").length > 0;
                    return s || (n.attr = [].concat(_toConsumableArray(n.attr), [{
                        collapsing: !1
                    }])), n.newTargets = n.newTargets || [], (r = n.newTargets).push.apply(r, _toConsumableArray(o.filter(function(e) {
                        return !n.newTargets.some(function(n) {
                            var r = n.target,
                                i = n.append;
                            return l(e, r) && t === i
                        })
                    }).map(function(e) {
                        return {
                            target: e,
                            append: t
                        }
                    }))), n
                }, d(p(o, String)))
            }), e(function() {
                t.storyElement.on("click.enchantment", function() {
                    Array.from(e(this).parents(".enchantment-clickblock")).sort(function(e, t) {
                        return 8 & e.compareDocumentPosition(t) ? 1 : -1
                    }).forEach(function(t) {
                        var n = e(t).data("enchantmentEvent");
                        n && n()
                    })
                })
            });
            var m = [{
                name: "click",
                enchantDesc: {
                    event: "click",
                    once: !0,
                    rerender: "",
                    classList: "link enchantment-link",
                    blockClassList: "enchantment-clickblock"
                }
            }, {
                name: "mouseover",
                enchantDesc: {
                    event: "mouseenter",
                    once: !0,
                    rerender: "",
                    classList: "enchantment-mouseover"
                }
            }, {
                name: "mouseout",
                enchantDesc: {
                    event: "mouseleave",
                    once: !0,
                    rerender: "",
                    classList: "enchantment-mouseout"
                }
            }];
            m.forEach(function(e) {
                return i.addChanger.apply(i, [e.name].concat(_toConsumableArray(c(e.enchantDesc, e.name))))
            }), h.forEach(function(e) {
                m.forEach(function(t) {
                    var n = Object.assign({}, t.enchantDesc, {
                            rerender: e
                        }),
                        r = t.name + "-" + e;
                    i.addChanger.apply(i, [r].concat(_toConsumableArray(c(n, r))))
                })
            })
        }), define("macrolib/links", ["jquery", "macros", "utils", "utils/selectors", "state", "passages", "engine", "datatypes/changercommand", "internaltypes/twineerror"], function(e, t, n, r, i, o, a, s, u) {
            var c = t.TypeSignature.optional,
                l = "Links can't have empty strings for their displayed text.";
            e(function() {
                return e(n.storyElement).on("click.passage-link", r.internalLink, function() {
                    var t = e(this),
                        n = t.parent().data("clickEvent");
                    if (n) return void n(t);
                    var r = t.attr("passage-name");
                    return r ? void a.goToPassage(r, !1) : t.is("[undo]") ? void a.goBack() : void 0
                })
            }), [
                ["link", "link-replace"],
                ["link-reveal"],
                ["link-repeat"]
            ].forEach(function(e) {
                return t.addChanger(e, function(t, n) {
                    return n ? s.create(e[0], [n]) : u.create("macrocall", l)
                }, function(t, n) {
                    t.innerSource || (t.innerSource = t.source), t.source = "<tw-link tabindex=0>" + n + "</tw-link>", t.append = "link" === e[0] ? "replace" : "append", t.data.clickEvent = function(n) {
                        t.source = t.innerSource, t.section.renderInto(t.innerSource + "", null, t), "link-reveal" === e[0] && n.contents().unwrap()
                    }
                }, [String])
            }), t.add(["link-goto"], function(t, r, a) {
                return r ? {
                    TwineScript_TypeName: "a (link-goto: " + n.toJSLiteral(r) + ", " + n.toJSLiteral(a) + ") command",
                    TwineScript_ObjectName: "a (link-goto:) command",
                    TwineScript_Print: function() {
                        var s = t.evaluateTwineMarkup(n.unescape(a || r));
                        if (s instanceof e) return s;
                        if (!o.has(s)) return '<tw-broken-link passage-name="' + n.escape(s) + '">' + (r || a) + "</tw-broken-link>";
                        var u = i.passageNameVisited(s);
                        return "<tw-link tabindex=0 " + (u > 0 ? 'class="visited" ' : "") + 'passage-name="' + n.escape(s) + '">' + (r || a) + "</tw-link>"
                    }
                } : u.create("macrocall", l)
            }, [String, c(String)])("link-undo", function(e, t) {
                return t ? {
                    TwineScript_ObjectName: "a (link-undo:" + n.toJSLiteral(t) + ") command",
                    TwineScript_TypeName: "a (link-undo:) command",
                    TwineScript_Print: function() {
                        return i.pastLength < 1 ? u.create("macrocall", "I can't use (link-undo:) on the first turn.") : "<tw-link tabindex=0 undo>" + t + "</tw-link>"
                    }
                } : u.create("macrocall", l)
            }, [String])
        }), define("repl", ["utils", "markup", "twinescript/compiler", "twinescript/environ"], function(e, t, n, r) {
            window.REPL = function(e) {
                var i = n(t.lex("(print:" + e + ")"));
                console.log(i);
                var o = r({}).eval(i);
                return o.TwineScript_Print ? o.TwineScript_Print() : o
            }, window.LEX = function(e) {
                var n = t.lex(e);
                return 1 === n.length ? n[0] : n
            }
        }), require.config({
            paths: {
                jquery: "../node_modules/jquery/dist/jquery",
                almond: "../node_modules/almond/almond",
                "es6-shim": "../node_modules/es6-shim/es6-shim",
                requestAnimationFrame: "../node_modules/requestanimationframe/app/requestAnimationFrame",
                jqueryplugins: "utils/jqueryplugins",
                markup: "./markup/markup",
                lexer: "./markup/lexer",
                patterns: "./markup/patterns"
            },
            deps: ["jquery", "es6-shim", "jqueryplugins"]
        }), require(["jquery", "debugmode", "renderer", "state", "engine", "passages", "utils/selectors", "macros", "macrolib/values", "macrolib/commands", "macrolib/datastructures", "macrolib/stylechangers", "macrolib/enchantments", "macrolib/links", "repl"], function($, DebugMode, Renderer, State, Engine, Passages, Selectors) {
            function _eval(text) {
                return eval(text + "")
            }
            var _installHandlers = function() {
                var e = $(document.documentElement);
                e.on("keydown", function(e) {
                    13 === e.which && "0" === e.target.getAttribute("tabindex") && $(e.target).trigger("click")
                }), Engine.options.debug && DebugMode(), _installHandlers = null
            };
            ! function(e) {
                window.onerror = function(t, n, r, i, o) {
                    var a = o && o.stack && "\n" + o.stack.replace(/\([^\)]+\)/g, "") + "\n" || "(" + t + ")\n";
                    alert("Sorry to interrupt, but this page's code has got itself in a mess. " + a + "(This is probably due to a bug in the Harlowe game engine.)"), window.onerror = e, "function" == typeof e && e.apply(void 0, arguments)
                }
            }(window.onerror), $(function() {
                var e = $(Selectors.storyData);
                if (0 !== e.length) {
                    var t = e.attr("options");
                    t && t.split(/\s/).forEach(function(e) {
                        Renderer.options[e] = Engine.options[e] = !0
                    });
                    var n = e.attr("startnode");
                    return Renderer.options.ifid = Engine.options.ifid = e.attr("ifid"), n || (n = [].reduce.call($(Selectors.passageData), function(e, t) {
                        var n = t.getAttribute("pid");
                        return e > n ? n : e
                    }, 1 / 0)), n = $(Selectors.passageData + "[pid=" + n + "]").attr("name"), _installHandlers(), $(Selectors.script).each(function(e) {
                        try {
                            _eval($(this).html())
                        } catch (t) {
                            alert("There is a problem with this story's script (#" + (e + 1) + "):\n\n" + t.message)
                        }
                    }), $(Selectors.stylesheet).each(function(e) {
                        $(document.head).append('<style data-title="Story stylesheet ' + (e + 1) + '">' + $(this).html())
                    }), window.location.hash && !window.location.hash.includes("stories") && State.load(window.location.hash) ? void Engine.showPassage(State.passage) : void Engine.goToPassage(n)
                }
            })
        }), define("harlowe", function() {}), require(["harlowe"])
}();