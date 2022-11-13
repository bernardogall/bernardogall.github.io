! function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";

    function c(a, b) {
        b = b || _;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }

    function d(a) {
        var b = !!a && "length" in a && a.length,
            c = ma.type(a);
        return "function" === c || ma.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function e(a, b, c) {
        if (ma.isFunction(b)) return ma.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ma.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (wa.test(b)) return ma.filter(b, a, c);
            b = ma.filter(b, a)
        }
        return ma.grep(a, function (a) {
            return ea.call(b, a) > -1 !== c && 1 === a.nodeType
        })
    }

    function f(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function g(a) {
        var b = {};
        return ma.each(a.match(Ca) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function h(a) {
        return a
    }

    function i(a) {
        throw a
    }

    function j(a, b, c) {
        var d;
        try {
            a && ma.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && ma.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }

    function k() {
        _.removeEventListener("DOMContentLoaded", k), a.removeEventListener("load", k), ma.ready()
    }

    function l() {
        this.expando = ma.expando + l.uid++
    }

    function m(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Ka, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Ja.test(c) ? JSON.parse(c) : c
                } catch (e) {}
                Ia.set(a, b, c)
            } else c = void 0;
        return c
    }

    function n(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function () {
                return d.cur()
            } : function () {
                return ma.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (ma.cssNumber[b] ? "" : "px"),
            k = (ma.cssNumber[b] || "px" !== j && +i) && Ma.exec(ma.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, ma.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function o(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = Qa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = ma.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Qa[d] = e, e)
    }

    function p(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ha.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Oa(d) && (e[f] = o(d))) : "none" !== c && (e[f] = "none", Ha.set(d, "display", c)));
        for (f = 0; g > f; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }

    function q(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && ma.nodeName(a, b) ? ma.merge([a], c) : c
    }

    function r(a, b) {
        for (var c = 0, d = a.length; d > c; c++) Ha.set(a[c], "globalEval", !b || Ha.get(b[c], "globalEval"))
    }

    function s(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === ma.type(f)) ma.merge(m, f.nodeType ? [f] : f);
                else if (Va.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (Sa.exec(f) || ["", ""])[1].toLowerCase(), i = Ua[h] || Ua._default, g.innerHTML = i[1] + ma.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
            ma.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", n = 0; f = m[n++];)
            if (d && ma.inArray(f, d) > -1) e && e.push(f);
            else if (j = ma.contains(f.ownerDocument, f), g = q(l.appendChild(f), "script"), j && r(g), c)
            for (k = 0; f = g[k++];) Ta.test(f.type || "") && c.push(f);
        return l
    }

    function t() {
        return !0
    }

    function u() {
        return !1
    }

    function v() {
        try {
            return _.activeElement
        } catch (a) {}
    }

    function w(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) w(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = u;
        else if (!e) return a;
        return 1 === f && (g = e, e = function (a) {
            return ma().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = ma.guid++)), a.each(function () {
            ma.event.add(this, b, e, d, c)
        })
    }

    function x(a, b) {
        return ma.nodeName(a, "table") && ma.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function y(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function z(a) {
        var b = bb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function A(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (Ha.hasData(a) && (f = Ha.access(a), g = Ha.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) ma.event.add(b, e, j[e][c])
            }
            Ia.hasData(a) && (h = Ia.access(a), i = ma.extend({}, h), Ia.set(b, i))
        }
    }

    function B(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ra.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function C(a, b, d, e) {
        b = ca.apply([], b);
        var f, g, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            o = b[0],
            p = ma.isFunction(o);
        if (p || m > 1 && "string" == typeof o && !ka.checkClone && ab.test(o)) return a.each(function (c) {
            var f = a.eq(c);
            p && (b[0] = o.call(this, c, f.html())), C(f, b, d, e)
        });
        if (m && (f = s(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
            for (h = ma.map(q(f, "script"), y), i = h.length; m > l; l++) j = f, l !== n && (j = ma.clone(j, !0, !0), i && ma.merge(h, q(j, "script"))), d.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, ma.map(h, z), l = 0; i > l; l++) j = h[l], Ta.test(j.type || "") && !Ha.access(j, "globalEval") && ma.contains(k, j) && (j.src ? ma._evalUrl && ma._evalUrl(j.src) : c(j.textContent.replace(cb, ""), k))
        }
        return a
    }

    function D(a, b, c) {
        for (var d, e = b ? ma.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || ma.cleanData(q(d)), d.parentNode && (c && ma.contains(d.ownerDocument, d) && r(q(d, "script")), d.parentNode.removeChild(d));
        return a
    }

    function E(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || fb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || ma.contains(a.ownerDocument, a) || (g = ma.style(a, b)), !ka.pixelMarginRight() && eb.test(g) && db.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function F(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function G(a) {
        if (a in kb) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = jb.length; c--;)
            if (a = jb[c] + b, a in kb) return a
    }

    function H(a, b, c) {
        var d = Ma.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function I(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ma.css(a, c + Na[f], !0, e)), d ? ("content" === c && (g -= ma.css(a, "padding" + Na[f], !0, e)), "margin" !== c && (g -= ma.css(a, "border" + Na[f] + "Width", !0, e))) : (g += ma.css(a, "padding" + Na[f], !0, e), "padding" !== c && (g += ma.css(a, "border" + Na[f] + "Width", !0, e)));
        return g
    }

    function J(a, b, c) {
        var d, e = !0,
            f = fb(a),
            g = "border-box" === ma.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = E(a, b, f), (0 > d || null == d) && (d = a.style[b]), eb.test(d)) return d;
            e = g && (ka.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + I(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }

    function K(a, b, c, d, e) {
        return new K.prototype.init(a, b, c, d, e)
    }

    function L() {
        mb && (a.requestAnimationFrame(L), ma.fx.tick())
    }

    function M() {
        return a.setTimeout(function () {
            lb = void 0
        }), lb = ma.now()
    }

    function N(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Na[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function O(a, b, c) {
        for (var d, e = (R.tweeners[b] || []).concat(R.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function P(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            q = a.nodeType && Oa(a),
            r = Ha.get(a, "fxshow");
        c.queue || (g = ma._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h()
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, ma.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], nb.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                n[d] = r && r[d] || ma.style(a, d)
            }
        if (i = !ma.isEmptyObject(b), i || !ma.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = r && r.display, null == j && (j = Ha.get(a, "display")), k = ma.css(a, "display"), "none" === k && (j ? k = j : (p([a], !0), j = a.style.display || j, k = ma.css(a, "display"), p([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === ma.css(a, "float") && (i || (m.done(function () {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (r ? "hidden" in r && (q = r.hidden) : r = Ha.access(a, "fxshow", {
                display: j
            }), f && (r.hidden = !q), q && p([a], !0), m.done(function () {
                q || p([a]), Ha.remove(a, "fxshow");
                for (d in n) ma.style(a, d, n[d])
            })), i = O(q ? r[d] : 0, d, m), d in r || (r[d] = i.start, q && (i.end = i.start, i.start = 0))
        }
    }

    function Q(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = ma.camelCase(c), e = b[d], f = a[c], ma.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ma.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function R(a, b, c) {
        var d, e, f = 0,
            g = R.prefilters.length,
            h = ma.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = lb || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: ma.extend({}, b),
                opts: ma.extend(!0, {
                    specialEasing: {},
                    easing: ma.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: lb || M(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = ma.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Q(k, j.opts.specialEasing); g > f; f++)
            if (d = R.prefilters[f].call(j, a, k, j.opts)) return ma.isFunction(d.stop) && (ma._queueHooks(j.elem, j.opts.queue).stop = ma.proxy(d.stop, d)), d;
        return ma.map(k, O, j), ma.isFunction(j.opts.start) && j.opts.start.call(a, j), ma.fx.timer(ma.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function S(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }

    function T(a, b, c, d) {
        var e;
        if (ma.isArray(b)) ma.each(b, function (b, e) {
            c || Ab.test(a) ? d(a, e) : T(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== ma.type(b)) d(a, b);
        else
            for (e in b) T(a + "[" + e + "]", b[e], c, d)
    }

    function U(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(Ca) || [];
            if (ma.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function V(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ma.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === Mb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function W(a, b) {
        var c, d, e = ma.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && ma.extend(!0, a, d), a
    }

    function X(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Y(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function Z(a) {
        return ma.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var $ = [],
        _ = a.document,
        aa = Object.getPrototypeOf,
        ba = $.slice,
        ca = $.concat,
        da = $.push,
        ea = $.indexOf,
        fa = {},
        ga = fa.toString,
        ha = fa.hasOwnProperty,
        ia = ha.toString,
        ja = ia.call(Object),
        ka = {},
        la = "3.0.0",
        ma = function (a, b) {
            return new ma.fn.init(a, b)
        },
        na = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oa = /^-ms-/,
        pa = /-([a-z])/g,
        qa = function (a, b) {
            return b.toUpperCase()
        };
    ma.fn = ma.prototype = {
        jquery: la,
        constructor: ma,
        length: 0,
        toArray: function () {
            return ba.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : ba.call(this)
        },
        pushStack: function (a) {
            var b = ma.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function (a) {
            return ma.each(this, a)
        },
        map: function (a) {
            return this.pushStack(ma.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(ba.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: da,
        sort: $.sort,
        splice: $.splice
    }, ma.extend = ma.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ma.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (ma.isPlainObject(d) || (e = ma.isArray(d))) ? (e ? (e = !1, f = c && ma.isArray(c) ? c : []) : f = c && ma.isPlainObject(c) ? c : {}, g[b] = ma.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, ma.extend({
        expando: "jQuery" + (la + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () {},
        isFunction: function (a) {
            return "function" === ma.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            var b = ma.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function (a) {
            var b, c;
            return a && "[object Object]" === ga.call(a) ? (b = aa(a)) ? (c = ha.call(b, "constructor") && b.constructor, "function" == typeof c && ia.call(c) === ja) : !0 : !1
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? fa[ga.call(a)] || "object" : typeof a
        },
        globalEval: function (a) {
            c(a)
        },
        camelCase: function (a) {
            return a.replace(oa, "ms-").replace(pa, qa)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b) {
            var c, e = 0;
            if (d(a))
                for (c = a.length; c > e && b.call(a[e], e, a[e]) !== !1; e++);
            else
                for (e in a)
                    if (b.call(a[e], e, a[e]) === !1) break; return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(na, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (d(Object(a)) ? ma.merge(c, "string" == typeof a ? [a] : a) : da.call(c, a)), c
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : ea.call(b, a, c)
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var e, f, g = 0,
                h = [];
            if (d(a))
                for (e = a.length; e > g; g++) f = b(a[g], g, c), null != f && h.push(f);
            else
                for (g in a) f = b(a[g], g, c), null != f && h.push(f);
            return ca.apply([], h)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), ma.isFunction(a) ? (d = ba.call(arguments, 2), e = function () {
                return a.apply(b || this, d.concat(ba.call(arguments)))
            }, e.guid = a.guid = a.guid || ma.guid++, e) : void 0
        },
        now: Date.now,
        support: ka
    }), "function" == typeof Symbol && (ma.fn[Symbol.iterator] = $[Symbol.iterator]), ma.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        fa["[object " + b + "]"] = b.toLowerCase()
    });
    var ra = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, k, m = b && b.ownerDocument,
                o = b ? b.nodeType : 9;
            if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
            if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
                if (11 !== o && (i = ra.exec(a)))
                    if (e = i[1]) {
                        if (9 === o) {
                            if (!(g = b.getElementById(e))) return c;
                            if (g.id === e) return c.push(g), c
                        } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
                    } else {
                        if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
                    }
                if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
                    if (1 !== o) m = b, k = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
                        k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
                    }
                    if (k) try {
                        return $.apply(c, m.querySelectorAll(k)), c
                    } catch (p) {} finally {
                        h === O && b.removeAttribute("id")
                    }
                }
            }
            return C(a.replace(ha, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[O] = !0, a
        }

        function e(a) {
            var b = H.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return function (b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ya(b)) !== a)
            }
        }

        function k(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function l(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function m() {}

        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function o(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = R++;
            return b.first ? function (b, c, e) {
                for (; b = b[d];)
                    if (1 === b.nodeType || g) return a(b, c, e)
            } : function (b, c, i) {
                var j, k, l, m = [Q, h];
                if (i) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || g)
                            if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            }
            }
        }

        function p(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function q(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function r(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function s(a, b, c, e, f, g) {
            return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = d || q(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? p : r(p, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function t(a) {
            for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                    return a === b
                }, g, !0), j = o(function (a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                    var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = x.relative[a[h].type]) k = [o(p(k), c)];
                else {
                    if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
                        for (d = ++h; e > d && !x.relative[a[d].type]; d++);
                        return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ha, "$1"), c, d > h && t(a.slice(h, d)), e > d && t(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
            return p(k)
        }

        function u(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        q = [],
                        s = D,
                        t = d || f && x.find.TAG("*", j),
                        u = Q += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                                if (m(k, g || H, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (Q = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, q, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                            q = r(q)
                        }
                        $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (Q = u, D = s), p
                };
            return e ? d(g) : g
        }
        var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
            P = a.document,
            Q = 0,
            R = 0,
            S = c(),
            T = c(),
            U = c(),
            V = function (a, b) {
                return a === b && (F = !0), 0
            },
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
            fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
            ga = new RegExp(ca + "+", "g"),
            ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ia = new RegExp("^" + ca + "*," + ca + "*"),
            ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            la = new RegExp(fa),
            ma = new RegExp("^" + da + "$"),
            na = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da + "|[*])"),
                ATTR: new RegExp("^" + ea),
                PSEUDO: new RegExp("^" + fa),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            oa = /^(?:input|select|textarea|button)$/i,
            pa = /^h\d$/i,
            qa = /^[^{]+\{\s*\[native \w/,
            ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            sa = /[+~]/,
            ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            ua = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            wa = function (a, b) {
                return b ? "\x00" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            xa = function () {
                G()
            },
            ya = o(function (a) {
                return a.disabled === !0
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
        } catch (za) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        w = b.support = {}, z = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, G = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : P;
            return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), w.getElementsByTagName = e(function (a) {
                return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
            }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function (a) {
                return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
            }), w.getById ? (x.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && J) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, x.filter.ID = function (a) {
                var b = a.replace(ta, ua);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete x.find.ID, x.filter.ID = function (a) {
                var b = a.replace(ta, ua);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), x.find.TAG = w.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, x.find.CLASS = w.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && J ? b.getElementsByClassName(a) : void 0
            }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function (a) {
                I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
            }), e(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = H.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
            })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function (a) {
                w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
            }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, V = b ? function (a, b) {
                if (a === b) return F = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return F = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
                if (e === f) return g(a, b);
                for (c = a; c = c.parentNode;) h.unshift(c);
                for (c = b; c = c.parentNode;) i.unshift(c);
                for (; h[d] === i[d];) d++;
                return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
            }, H) : H
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
                var d = M.call(a, c);
                if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, H, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== H && G(a), N(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== H && G(a);
            var c = x.attrHandle[b.toLowerCase()],
                d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
            return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.escape = function (a) {
            return (a + "").replace(va, wa)
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return E = null, a
        }, y = b.getText = function (a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += y(b);
            return c
        }, x = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: na,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ta, ua).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = S[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (m = b; m = m[p];)
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [Q, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1)
                                for (;
                                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, c) {
                    var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [],
                        c = [],
                        e = B(a.replace(ha, "$1"));
                    return e[O] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function (a) {
                    return a = a.replace(ta, ua),
                        function (b) {
                            return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function (a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === I
                },
                focus: function (a) {
                    return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: j(!1),
                disabled: j(!0),
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !x.pseudos.empty(a)
                },
                header: function (a) {
                    return pa.test(a.nodeName)
                },
                input: function (a) {
                    return oa.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: k(function () {
                    return [0]
                }),
                last: k(function (a, b) {
                    return [b - 1]
                }),
                eq: k(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: k(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: k(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (v in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[v] = h(v);
        for (v in {
                submit: !0,
                reset: !0
            }) x.pseudos[v] = i(v);
        return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = T[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = x.preFilter; h;) {
                (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ha, " ")
                }), h = h.slice(d.length));
                for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
        }, B = b.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = U[a + " "];
            if (!f) {
                for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
                f = U(a, u(e, d)), f.selector = a
            }
            return f
        }, C = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                k = !d && A(a = j.selector || a);
            if (c = c || [], 1 === k.length) {
                if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && w.getById && 9 === b.nodeType && J && x.relative[f[1].type]) {
                    if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
                    if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
        }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), w.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    ma.find = ra, ma.expr = ra.selectors, ma.expr[":"] = ma.expr.pseudos, ma.uniqueSort = ma.unique = ra.uniqueSort, ma.text = ra.getText, ma.isXMLDoc = ra.isXML, ma.contains = ra.contains, ma.escapeSelector = ra.escape;
    var sa = function (a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && ma(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        ta = function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        ua = ma.expr.match.needsContext,
        va = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        wa = /^.[^:#\[\.,]*$/;
    ma.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ma.find.matchesSelector(d, a) ? [d] : [] : ma.find.matches(a, ma.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, ma.fn.extend({
        find: function (a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(ma(a).filter(function () {
                for (b = 0; d > b; b++)
                    if (ma.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; d > b; b++) ma.find(a, e[b], c);
            return d > 1 ? ma.uniqueSort(c) : c
        },
        filter: function (a) {
            return this.pushStack(e(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(e(this, a || [], !0))
        },
        is: function (a) {
            return !!e(this, "string" == typeof a && ua.test(a) ? ma(a) : a || [], !1).length
        }
    });
    var xa, ya = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        za = ma.fn.init = function (a, b, c) {
            var d, e;
            if (!a) return this;
            if (c = c || xa, "string" == typeof a) {
                if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ya.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (d[1]) {
                    if (b = b instanceof ma ? b[0] : b, ma.merge(this, ma.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : _, !0)), va.test(d[1]) && ma.isPlainObject(b))
                        for (d in b) ma.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                    return this
                }
                return e = _.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : ma.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(ma) : ma.makeArray(a, this)
        };
    za.prototype = ma.fn, xa = ma(_);
    var Aa = /^(?:parents|prev(?:Until|All))/,
        Ba = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ma.fn.extend({
        has: function (a) {
            var b = ma(a, this),
                c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (ma.contains(this, b[a])) return !0
            })
        },
        closest: function (a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && ma(a);
            if (!ua.test(a))
                for (; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ma.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? ma.uniqueSort(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? ea.call(ma(a), this[0]) : ea.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(ma.uniqueSort(ma.merge(this.get(), ma(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ma.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return sa(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return sa(a, "parentNode", c)
        },
        next: function (a) {
            return f(a, "nextSibling")
        },
        prev: function (a) {
            return f(a, "previousSibling")
        },
        nextAll: function (a) {
            return sa(a, "nextSibling")
        },
        prevAll: function (a) {
            return sa(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return sa(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return sa(a, "previousSibling", c)
        },
        siblings: function (a) {
            return ta((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return ta(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || ma.merge([], a.childNodes)
        }
    }, function (a, b) {
        ma.fn[a] = function (c, d) {
            var e = ma.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ma.filter(d, e)), this.length > 1 && (Ba[a] || ma.uniqueSort(e), Aa.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var Ca = /\S+/g;
    ma.Callbacks = function (a) {
        a = "string" == typeof a ? g(a) : ma.extend({}, a);
        var b, c, d, e, f = [],
            h = [],
            i = -1,
            j = function () {
                for (e = a.once, d = b = !0; h.length; i = -1)
                    for (c = h.shift(); ++i < f.length;) f[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = f.length, c = !1);
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            k = {
                add: function () {
                    return f && (c && !b && (i = f.length - 1, h.push(c)), function d(b) {
                        ma.each(b, function (b, c) {
                            ma.isFunction(c) ? a.unique && k.has(c) || f.push(c) : c && c.length && "string" !== ma.type(c) && d(c)
                        })
                    }(arguments), c && !b && j()), this
                },
                remove: function () {
                    return ma.each(arguments, function (a, b) {
                        for (var c;
                            (c = ma.inArray(b, f, c)) > -1;) f.splice(c, 1), i >= c && i--
                    }), this
                },
                has: function (a) {
                    return a ? ma.inArray(a, f) > -1 : f.length > 0
                },
                empty: function () {
                    return f && (f = []), this
                },
                disable: function () {
                    return e = h = [], f = c = "", this
                },
                disabled: function () {
                    return !f
                },
                lock: function () {
                    return e = h = [], c || b || (f = c = ""), this
                },
                locked: function () {
                    return !!e
                },
                fireWith: function (a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, ma.extend({
        Deferred: function (b) {
            var c = [["notify", "progress", ma.Callbacks("memory"), ma.Callbacks("memory"), 2], ["resolve", "done", ma.Callbacks("once memory"), ma.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ma.Callbacks("once memory"), ma.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = {
                    state: function () {
                        return d
                    },
                    always: function () {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function (a) {
                        return e.then(null, a)
                    },
                    pipe: function () {
                        var a = arguments;
                        return ma.Deferred(function (b) {
                            ma.each(c, function (c, d) {
                                var e = ma.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function () {
                                    var a = e && e.apply(this, arguments);
                                    a && ma.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function (b, d, e) {
                        function f(b, c, d, e) {
                            return function () {
                                var j = this,
                                    k = arguments,
                                    l = function () {
                                        var a, l;
                                        if (!(g > b)) {
                                            if (a = d.apply(j, k), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            l = a && ("object" == typeof a || "function" == typeof a) && a.then, ma.isFunction(l) ? e ? l.call(a, f(g, c, h, e), f(g, c, i, e)) : (g++, l.call(a, f(g, c, h, e), f(g, c, i, e), f(g, c, h, c.notifyWith))) : (d !== h && (j = void 0, k = [a]), (e || c.resolveWith)(j, k))
                                        }
                                    },
                                    m = e ? l : function () {
                                        try {
                                            l()
                                        } catch (a) {
                                            ma.Deferred.exceptionHook && ma.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== i && (j = void 0, k = [a]), c.rejectWith(j, k))
                                        }
                                    };
                                b ? m() : (ma.Deferred.getStackHook && (m.stackTrace = ma.Deferred.getStackHook()), a.setTimeout(m))
                            }
                        }
                        var g = 0;
                        return ma.Deferred(function (a) {
                            c[0][3].add(f(0, a, ma.isFunction(e) ? e : h, a.notifyWith)), c[1][3].add(f(0, a, ma.isFunction(b) ? b : h)), c[2][3].add(f(0, a, ma.isFunction(d) ? d : i))
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? ma.extend(a, e) : e
                    }
                },
                f = {};
            return ma.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function () {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function (a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = ba.call(arguments),
                f = ma.Deferred(),
                g = function (a) {
                    return function (c) {
                        d[a] = this, e[a] = arguments.length > 1 ? ba.call(arguments) : c, --b || f.resolveWith(d, e)
                    }
                };
            if (1 >= b && (j(a, f.done(g(c)).resolve, f.reject), "pending" === f.state() || ma.isFunction(e[c] && e[c].then))) return f.then();
            for (; c--;) j(e[c], g(c), f.reject);
            return f.promise()
        }
    });
    var Da = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ma.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && Da.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    };
    var Ea = ma.Deferred();
    ma.fn.ready = function (a) {
        return Ea.then(a), this
    }, ma.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? ma.readyWait++ : ma.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --ma.readyWait : ma.isReady) || (ma.isReady = !0, a !== !0 && --ma.readyWait > 0 || Ea.resolveWith(_, [ma]))
        }
    }), ma.ready.then = Ea.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? a.setTimeout(ma.ready) : (_.addEventListener("DOMContentLoaded", k), a.addEventListener("load", k));
    var Fa = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === ma.type(c)) {
                e = !0;
                for (h in c) Fa(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, ma.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(ma(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Ga = function (a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };
    l.uid = 1, l.prototype = {
        cache: function (a) {
            var b = a[this.expando];
            return b || (b = {}, Ga(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function (a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[ma.camelCase(b)] = c;
            else
                for (d in b) e[ma.camelCase(d)] = b[d];
            return e
        },
        get: function (a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][ma.camelCase(b)]
        },
        access: function (a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function (a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    ma.isArray(b) ? b = b.map(ma.camelCase) : (b = ma.camelCase(b), b = b in d ? [b] : b.match(Ca) || []), c = b.length;
                    for (; c--;) delete d[b[c]]
                }(void 0 === b || ma.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function (a) {
            var b = a[this.expando];
            return void 0 !== b && !ma.isEmptyObject(b)
        }
    };
    var Ha = new l,
        Ia = new l,
        Ja = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ka = /[A-Z]/g;
    ma.extend({
        hasData: function (a) {
            return Ia.hasData(a) || Ha.hasData(a)
        },
        data: function (a, b, c) {
            return Ia.access(a, b, c)
        },
        removeData: function (a, b) {
            Ia.remove(a, b)
        },
        _data: function (a, b, c) {
            return Ha.access(a, b, c)
        },
        _removeData: function (a, b) {
            Ha.remove(a, b)
        }
    }), ma.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = Ia.get(f), 1 === f.nodeType && !Ha.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ma.camelCase(d.slice(5)), m(f, d, e[d])));
                    Ha.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                Ia.set(this, a)
            }) : Fa(this, function (b) {
                var c;
                if (f && void 0 === b) {
                    if (c = Ia.get(f, a), void 0 !== c) return c;
                    if (c = m(f, a), void 0 !== c) return c
                } else this.each(function () {
                    Ia.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                Ia.remove(this, a)
            })
        }
    }), ma.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = Ha.get(a, b), c && (!d || ma.isArray(c) ? d = Ha.access(a, b, ma.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = ma.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ma._queueHooks(a, b),
                g = function () {
                    ma.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return Ha.get(a, c) || Ha.access(a, c, {
                empty: ma.Callbacks("once memory").add(function () {
                    Ha.remove(a, [b + "queue", c])
                })
            })
        }
    }), ma.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ma.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = ma.queue(this, a, b);
                ma._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ma.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                ma.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = ma.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = Ha.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var La = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ma = new RegExp("^(?:([+-])=|)(" + La + ")([a-z%]*)$", "i"),
        Na = ["Top", "Right", "Bottom", "Left"],
        Oa = function (a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && ma.contains(a.ownerDocument, a) && "none" === ma.css(a, "display")
        },
        Pa = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = {};
    ma.fn.extend({
        show: function () {
            return p(this, !0)
        },
        hide: function () {
            return p(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Oa(this) ? ma(this).show() : ma(this).hide()
            })
        }
    });
    var Ra = /^(?:checkbox|radio)$/i,
        Sa = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ta = /^$|\/(?:java|ecma)script/i,
        Ua = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ua.optgroup = Ua.option, Ua.tbody = Ua.tfoot = Ua.colgroup = Ua.caption = Ua.thead, Ua.th = Ua.td;
    var Va = /<|&#?\w+;/;
    ! function () {
        var a = _.createDocumentFragment(),
            b = a.appendChild(_.createElement("div")),
            c = _.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ka.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ka.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var Wa = _.documentElement,
        Xa = /^key/,
        Ya = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Za = /^([^.]*)(?:\.(.+)|)/;
    ma.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ha.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), e && ma.find.matchesSelector(Wa, e), c.guid || (c.guid = ma.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                        return "undefined" != typeof ma && ma.event.triggered !== b.type ? ma.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(Ca) || [""], j = b.length; j--;) h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = ma.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = ma.event.special[n] || {}, k = ma.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && ma.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), ma.event.global[n] = !0)
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = Ha.hasData(a) && Ha.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(Ca) || [""], j = b.length; j--;)
                    if (h = Za.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = ma.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ma.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) ma.event.remove(a, n + b[j], c, d, !0);
                ma.isEmptyObject(i) && Ha.remove(a, "handle events")
            }
        },
        dispatch: function (a) {
            var b, c, d, e, f, g, h = ma.event.fix(a),
                i = new Array(arguments.length),
                j = (Ha.get(this, "events") || {})[h.type] || [],
                k = ma.event.special[h.type] || {};
            for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
            if (h.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, h) !== !1) {
                for (g = ma.event.handlers.call(this, h, j), b = 0;
                    (e = g[b++]) && !h.isPropagationStopped();)
                    for (h.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();)(!h.rnamespace || h.rnamespace.test(f.namespace)) && (h.handleObj = f, h.data = f.data, d = ((ma.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && (h.result = d) === !1 && (h.preventDefault(), h.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, h), h.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? ma(e, this).index(i) > -1 : ma.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        addProp: function (a, b) {
            Object.defineProperty(ma.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: ma.isFunction(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0
                },
                set: function (b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function (a) {
            return a[ma.expando] ? a : new ma.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== v() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === v() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && ma.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return ma.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, ma.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, ma.Event = function (a, b) {
        return this instanceof ma.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? t : u, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && ma.extend(this, b), this.timeStamp = a && a.timeStamp || ma.now(), void(this[ma.expando] = !0)) : new ma.Event(a, b)
    }, ma.Event.prototype = {
        constructor: ma.Event,
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        isSimulated: !1,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = t, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = t, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = t, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ma.each({
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
        "char": !0,
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
        which: function (a) {
            var b = a.button;
            return null == a.which && Xa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && Ya.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, ma.event.addProp), ma.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        ma.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !ma.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ma.fn.extend({
        on: function (a, b, c, d) {
            return w(this, a, b, c, d)
        },
        one: function (a, b, c, d) {
            return w(this, a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ma(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = u), this.each(function () {
                ma.event.remove(this, a, c, b)
            })
        }
    });
    var $a = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        _a = /<script|<style|<link/i,
        ab = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bb = /^true\/(.*)/,
        cb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ma.extend({
        htmlPrefilter: function (a) {
            return a.replace($a, "<$1></$2>")
        },
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = ma.contains(a.ownerDocument, a);
            if (!(ka.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ma.isXMLDoc(a)))
                for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++) B(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) A(f[d], g[d]);
                else A(a, h);
            return g = q(h, "script"), g.length > 0 && r(g, !i && q(a, "script")), h
        },
        cleanData: function (a) {
            for (var b, c, d, e = ma.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (Ga(c)) {
                    if (b = c[Ha.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? ma.event.remove(c, d) : ma.removeEvent(c, d, b.handle);
                        c[Ha.expando] = void 0
                    }
                    c[Ia.expando] && (c[Ia.expando] = void 0)
                }
        }
    }), ma.fn.extend({
        detach: function (a) {
            return D(this, a, !0)
        },
        remove: function (a) {
            return D(this, a)
        },
        text: function (a) {
            return Fa(this, function (a) {
                return void 0 === a ? ma.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function () {
            return C(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = x(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return C(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = x(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return C(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return C(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (ma.cleanData(q(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return ma.clone(this, a, b)
            })
        },
        html: function (a) {
            return Fa(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !_a.test(a) && !Ua[(Sa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = ma.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ma.cleanData(q(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = [];
            return C(this, arguments, function (b) {
                var c = this.parentNode;
                ma.inArray(this, a) < 0 && (ma.cleanData(q(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), ma.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        ma.fn[a] = function (a) {
            for (var c, d = [], e = ma(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), ma(e[g])[b](c), da.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var db = /^margin/,
        eb = new RegExp("^(" + La + ")(?!px)[a-z%]+$", "i"),
        fb = function (b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function () {
        function b() {
            if (h) {
                h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Wa.appendChild(g);
                var b = a.getComputedStyle(h);
                c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Wa.removeChild(g), h = null
            }
        }
        var c, d, e, f, g = _.createElement("div"),
            h = _.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ka.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), ma.extend(ka, {
            pixelPosition: function () {
                return b(), c
            },
            boxSizingReliable: function () {
                return b(), d
            },
            pixelMarginRight: function () {
                return b(), e
            },
            reliableMarginLeft: function () {
                return b(), f
            }
        }))
    }();
    var gb = /^(none|table(?!-c[ea]).+)/,
        hb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ib = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        jb = ["Webkit", "Moz", "ms"],
        kb = _.createElement("div").style;
    ma.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = E(a, "opacity");
                        return "" === c ? "1" : c
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
            "float": "cssFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ma.camelCase(b),
                    i = a.style;
                return b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ma.exec(c)) && e[1] && (c = n(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (ma.cssNumber[h] ? "" : "px")), ka.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = ma.camelCase(b);
            return b = ma.cssProps[h] || (ma.cssProps[h] = G(h) || h), g = ma.cssHooks[b] || ma.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = E(a, b, d)), "normal" === e && b in ib && (e = ib[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), ma.each(["height", "width"], function (a, b) {
        ma.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? !gb.test(ma.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? J(a, b, d) : Pa(a, hb, function () {
                    return J(a, b, d)
                }) : void 0
            },
            set: function (a, c, d) {
                var e, f = d && fb(a),
                    g = d && I(a, b, d, "border-box" === ma.css(a, "boxSizing", !1, f), f);
                return g && (e = Ma.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = ma.css(a, b)), H(a, c, g)
            }
        }
    }), ma.cssHooks.marginLeft = F(ka.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(E(a, "marginLeft")) || a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function () {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), ma.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        ma.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Na[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, db.test(a) || (ma.cssHooks[a + b].set = H)
    }), ma.fn.extend({
        css: function (a, b) {
            return Fa(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (ma.isArray(b)) {
                    for (d = fb(a), e = b.length; e > g; g++) f[b[g]] = ma.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ma.style(a, b, c) : ma.css(a, b)
            }, a, b, arguments.length > 1)
        }
    }), ma.Tween = K, K.prototype = {
        constructor: K,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || ma.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ma.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = K.propHooks[this.prop];
            return a && a.get ? a.get(this) : K.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = K.propHooks[this.prop];
            return this.options.duration ? this.pos = b = ma.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
        }
    }, K.prototype.init.prototype = K.prototype, K.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = ma.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function (a) {
                ma.fx.step[a.prop] ? ma.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[ma.cssProps[a.prop]] && !ma.cssHooks[a.prop] ? a.elem[a.prop] = a.now : ma.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ma.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, ma.fx = K.prototype.init, ma.fx.step = {};
    var lb, mb, nb = /^(?:toggle|show|hide)$/,
        ob = /queueHooks$/;
    ma.Animation = ma.extend(R, {
            tweeners: {
                "*": [function (a, b) {
                    var c = this.createTween(a, b);
                    return n(c.elem, a, Ma.exec(b), c), c
                }]
            },
            tweener: function (a, b) {
                ma.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ca);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], R.tweeners[c] = R.tweeners[c] || [], R.tweeners[c].unshift(b)
            },
            prefilters: [P],
            prefilter: function (a, b) {
                b ? R.prefilters.unshift(a) : R.prefilters.push(a)
            }
        }), ma.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? ma.extend({}, a) : {
                complete: c || !c && b || ma.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !ma.isFunction(b) && b
            };
            return ma.fx.off || _.hidden ? d.duration = 0 : d.duration = "number" == typeof d.duration ? d.duration : d.duration in ma.fx.speeds ? ma.fx.speeds[d.duration] : ma.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                ma.isFunction(d.old) && d.old.call(this), d.queue && ma.dequeue(this, d.queue)
            }, d
        }, ma.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Oa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function (a, b, c, d) {
                var e = ma.isEmptyObject(a),
                    f = ma.speed(b, c, d),
                    g = function () {
                        var b = R(this, ma.extend({}, a), f);
                        (e || Ha.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = ma.timers,
                        g = Ha.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ob.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && ma.dequeue(this, a)
                })
            },
            finish: function (a) {
                return a !== !1 && (a = a || "fx"), this.each(function () {
                    var b, c = Ha.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = ma.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, ma.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                        f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), ma.each(["toggle", "show", "hide"], function (a, b) {
            var c = ma.fn[b];
            ma.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
            }
        }), ma.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            ma.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), ma.timers = [], ma.fx.tick = function () {
            var a, b = 0,
                c = ma.timers;
            for (lb = ma.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || ma.fx.stop(), lb = void 0
        }, ma.fx.timer = function (a) {
            ma.timers.push(a), a() ? ma.fx.start() : ma.timers.pop()
        }, ma.fx.interval = 13, ma.fx.start = function () {
            mb || (mb = a.requestAnimationFrame ? a.requestAnimationFrame(L) : a.setInterval(ma.fx.tick, ma.fx.interval))
        }, ma.fx.stop = function () {
            a.cancelAnimationFrame ? a.cancelAnimationFrame(mb) : a.clearInterval(mb), mb = null
        }, ma.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ma.fn.delay = function (b, c) {
            return b = ma.fx ? ma.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function () {
                    a.clearTimeout(e)
                }
            })
        },
        function () {
            var a = _.createElement("input"),
                b = _.createElement("select"),
                c = b.appendChild(_.createElement("option"));
            a.type = "checkbox", ka.checkOn = "" !== a.value, ka.optSelected = c.selected, a = _.createElement("input"), a.value = "t", a.type = "radio", ka.radioValue = "t" === a.value
        }();
    var pb, qb = ma.expr.attrHandle;
    ma.fn.extend({
        attr: function (a, b) {
            return Fa(this, ma.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                ma.removeAttr(this, a)
            })
        }
    }), ma.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? ma.prop(a, b, c) : (1 === f && ma.isXMLDoc(a) || (e = ma.attrHooks[b.toLowerCase()] || (ma.expr.match.bool.test(b) ? pb : void 0)), void 0 !== c ? null === c ? void ma.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = ma.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!ka.radioValue && "radio" === b && ma.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function (a, b) {
            var c, d = 0,
                e = b && b.match(Ca);
            if (e && 1 === a.nodeType)
                for (; c = e[d++];) a.removeAttribute(c)
        }
    }), pb = {
        set: function (a, b, c) {
            return b === !1 ? ma.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, ma.each(ma.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = qb[b] || ma.find.attr;
        qb[b] = function (a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = qb[g], qb[g] = e, e = null != c(a, b, d) ? g : null, qb[g] = f), e
        }
    });
    var rb = /^(?:input|select|textarea|button)$/i,
        sb = /^(?:a|area)$/i;
    ma.fn.extend({
        prop: function (a, b) {
            return Fa(this, ma.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[ma.propFix[a] || a]
            })
        }
    }), ma.extend({
        prop: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && ma.isXMLDoc(a) || (b = ma.propFix[b] || b, e = ma.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = ma.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : rb.test(a.nodeName) || sb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ka.optSelected || (ma.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), ma.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ma.propFix[this.toLowerCase()] = this
    });
    var tb = /[\t\r\n\f]/g;
    ma.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (ma.isFunction(a)) return this.each(function (b) {
                ma(this).addClass(a.call(this, b, S(this)))
            });
            if ("string" == typeof a && a)
                for (b = a.match(Ca) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(tb, " ")) {
                        for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = ma.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h, i = 0;
            if (ma.isFunction(a)) return this.each(function (b) {
                ma(this).removeClass(a.call(this, b, S(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a)
                for (b = a.match(Ca) || []; c = this[i++];)
                    if (e = S(c), d = 1 === c.nodeType && (" " + e + " ").replace(tb, " ")) {
                        for (g = 0; f = b[g++];)
                            for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
                        h = ma.trim(d), e !== h && c.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : ma.isFunction(a) ? this.each(function (c) {
                ma(this).toggleClass(a.call(this, c, S(this), b), b)
            }) : this.each(function () {
                var b, d, e, f;
                if ("string" === c)
                    for (d = 0, e = ma(this), f = a.match(Ca) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(void 0 === a || "boolean" === c) && (b = S(this), b && Ha.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Ha.get(this, "__className__") || ""))
            })
        },
        hasClass: function (a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++];)
                if (1 === c.nodeType && (" " + S(c) + " ").replace(tb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ub = /\r/g,
        vb = /[\x20\t\r\n\f]+/g;
    ma.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = ma.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, ma(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ma.isArray(e) && (e = ma.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = ma.valHooks[this.type] || ma.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = ma.valHooks[e.type] || ma.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)
            }
        }
    }), ma.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = ma.find.attr(a, "value");
                    return null != b ? b : ma.trim(ma.text(a)).replace(vb, " ")
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !ma.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ma(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = ma.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = ma.inArray(ma.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), ma.each(["radio", "checkbox"], function () {
        ma.valHooks[this] = {
            set: function (a, b) {
                return ma.isArray(b) ? a.checked = ma.inArray(ma(a).val(), b) > -1 : void 0
            }
        }, ka.checkOn || (ma.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var wb = /^(?:focusinfocus|focusoutblur)$/;
    ma.extend(ma.event, {
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || _],
                n = ha.call(b, "type") ? b.type : b,
                o = ha.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || _, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(n + ma.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[ma.expando] ? b : new ma.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ma.makeArray(c, [b]), l = ma.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !ma.isWindow(d)) {
                    for (i = l.delegateType || n, wb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || _) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (Ha.get(g, "events") || {})[b.type] && Ha.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && Ga(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !Ga(d) || j && ma.isFunction(d[n]) && !ma.isWindow(d) && (h = d[j], h && (d[j] = null), ma.event.triggered = n, d[n](), ma.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        simulate: function (a, b, c) {
            var d = ma.extend(new ma.Event, c, {
                type: a,
                isSimulated: !0
            });
            ma.event.trigger(d, null, b)
        }
    }), ma.fn.extend({
        trigger: function (a, b) {
            return this.each(function () {
                ma.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? ma.event.trigger(a, b, c, !0) : void 0
        }
    }), ma.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        ma.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ma.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), ka.focusin = "onfocusin" in a, ka.focusin || ma.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            ma.event.simulate(b, a.target, ma.event.fix(a))
        };
        ma.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = Ha.access(d, b);
                e || d.addEventListener(a, c, !0), Ha.access(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = Ha.access(d, b) - 1;
                e ? Ha.access(d, b, e) : (d.removeEventListener(a, c, !0), Ha.remove(d, b))
            }
        }
    });
    var xb = a.location,
        yb = ma.now(),
        zb = /\?/;
    ma.parseXML = function (b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return (!c || c.getElementsByTagName("parsererror").length) && ma.error("Invalid XML: " + b), c
    };
    var Ab = /\[\]$/,
        Bb = /\r?\n/g,
        Cb = /^(?:submit|button|image|reset|file)$/i,
        Db = /^(?:input|select|textarea|keygen)/i;
    ma.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                var c = ma.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (ma.isArray(a) || a.jquery && !ma.isPlainObject(a)) ma.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) T(c, a[c], b, e);
        return d.join("&")
    }, ma.fn.extend({
        serialize: function () {
            return ma.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = ma.prop(this, "elements");
                return a ? ma.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !ma(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !Ra.test(a))
            }).map(function (a, b) {
                var c = ma(this).val();
                return null == c ? null : ma.isArray(c) ? ma.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Bb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Bb, "\r\n")
                }
            }).get()
        }
    });
    var Eb = /%20/g,
        Fb = /#.*$/,
        Gb = /([?&])_=[^&]*/,
        Hb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ib = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Jb = /^(?:GET|HEAD)$/,
        Kb = /^\/\//,
        Lb = {},
        Mb = {},
        Nb = "*/".concat("*"),
        Ob = _.createElement("a");
    Ob.href = xb.href, ma.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xb.href,
            type: "GET",
            isLocal: Ib.test(xb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nb,
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
                "text xml": ma.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? W(W(a, ma.ajaxSettings), b) : W(ma.ajaxSettings, a)
        },
        ajaxPrefilter: U(Lb),
        ajaxTransport: U(Mb),
        ajax: function (b, c) {
            function d(b, c, d, h) {
                var j, m, n, u, v, w = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = X(o, x, d)), u = Y(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (ma.lastModified[f] = v), v = x.getResponseHeader("etag"), v && (ma.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, (b || !w) && (w = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --ma.active || ma.event.trigger("ajaxStop")))
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = ma.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? ma(p) : ma.event,
                r = ma.Deferred(),
                s = ma.Callbacks("once memory"),
                t = o.statusCode || {},
                u = {},
                v = {},
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (k) {
                            if (!h)
                                for (h = {}; b = Hb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return k ? g : null
                    },
                    setRequestHeader: function (a, b) {
                        return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (k) x.always(a[x.status]);
                            else
                                for (b in a) t[b] = [t[b], a[b]];
                        return this
                    },
                    abort: function (a) {
                        var b = a || w;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (r.promise(x), o.url = ((b || o.url || xb.href) + "").replace(Kb, xb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ca) || [""], null == o.crossDomain) {
                j = _.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ob.protocol + "//" + Ob.host != j.protocol + "//" + j.host
                } catch (y) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = ma.param(o.data, o.traditional)), V(Lb, o, c, x), k) return x;
            l = ma.event && o.global, l && 0 === ma.active++ && ma.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Jb.test(o.type), f = o.url.replace(Fb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Eb, "+")) : (n = o.url.slice(f.length), o.data && (f += (zb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Gb, ""), n = (zb.test(f) ? "&" : "?") + "_=" + yb++ + n), o.url = f + n), o.ifModified && (ma.lastModified[f] && x.setRequestHeader("If-Modified-Since", ma.lastModified[f]), ma.etag[f] && x.setRequestHeader("If-None-Match", ma.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Nb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k)) return x.abort();
            if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = V(Mb, o, c, x)) {
                if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
                o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    x.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(u, d)
                } catch (y) {
                    if (k) throw y;
                    d(-1, y)
                }
            } else d(-1, "No Transport");
            return x
        },
        getJSON: function (a, b, c) {
            return ma.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return ma.get(a, void 0, b, "script")
        }
    }), ma.each(["get", "post"], function (a, b) {
        ma[b] = function (a, c, d, e) {
            return ma.isFunction(c) && (e = e || d, d = c, c = void 0), ma.ajax(ma.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, ma.isPlainObject(a) && a))
        }
    }), ma._evalUrl = function (a) {
        return ma.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ma.fn.extend({
        wrapAll: function (a) {
            var b;
            return this[0] && (ma.isFunction(a) && (a = a.call(this[0])), b = ma(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function (a) {
            return ma.isFunction(a) ? this.each(function (b) {
                ma(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = ma(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = ma.isFunction(a);
            return this.each(function (c) {
                ma(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function (a) {
            return this.parent(a).not("body").each(function () {
                ma(this).replaceWith(this.childNodes)
            }), this
        }
    }), ma.expr.pseudos.hidden = function (a) {
        return !ma.expr.pseudos.visible(a)
    }, ma.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, ma.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Pb = {
            0: 200,
            1223: 204
        },
        Qb = ma.ajaxSettings.xhr();
    ka.cors = !!Qb && "withCredentials" in Qb, ka.ajax = Qb = !!Qb, ma.ajaxTransport(function (b) {
        var c, d;
        return ka.cors || Qb && !b.crossDomain ? {
            send: function (e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function (a) {
                    return function () {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Pb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function () {
                c && c()
            }
        } : void 0
    }), ma.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1)
    }), ma.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (a) {
                return ma.globalEval(a), a
            }
        }
    }), ma.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), ma.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = ma("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), _.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var Rb = [],
        Sb = /(=)\?(?=&|$)|\?\?/;
    ma.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = Rb.pop() || ma.expando + "_" + yb++;
            return this[a] = !0, a
        }
    }), ma.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Sb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Sb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ma.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Sb, "$1" + e) : b.jsonp !== !1 && (b.url += (zb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || ma.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            void 0 === f ? ma(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Rb.push(e)), g && ma.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), ka.createHTMLDocument = function () {
        var a = _.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), ma.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var d, e, f;
        return b || (ka.createHTMLDocument ? (b = _.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = _.location.href, b.head.appendChild(d)) : b = _), e = va.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = s([a], b, f), f && f.length && ma(f).remove(), ma.merge([], e.childNodes))
    }, ma.fn.load = function (a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = ma.trim(a.slice(h)), a = a.slice(0, h)), ma.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && ma.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? ma("<div>").append(ma.parseHTML(a)).find(d) : a)
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, ma.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        ma.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), ma.expr.pseudos.animated = function (a) {
        return ma.grep(ma.timers, function (b) {
            return a === b.elem
        }).length
    }, ma.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = ma.css(a, "position"),
                l = ma(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ma.css(a, "top"), i = ma.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ma.isFunction(b) && (b = b.call(a, c, ma.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, ma.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                ma.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Z(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ma.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ma.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + ma.css(a[0], "borderTopWidth", !0),
                    left: d.left + ma.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - ma.css(c, "marginTop", !0),
                    left: b.left - d.left - ma.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent; a && "static" === ma.css(a, "position");) a = a.offsetParent;
                return a || Wa
            })
        }
    }), ma.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = "pageYOffset" === b;
        ma.fn[a] = function (d) {
            return Fa(this, function (a, d, e) {
                var f = Z(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), ma.each(["top", "left"], function (a, b) {
        ma.cssHooks[b] = F(ka.pixelPosition, function (a, c) {
            return c ? (c = E(a, b), eb.test(c) ? ma(a).position()[b] + "px" : c) : void 0
        })
    }), ma.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        ma.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            ma.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return Fa(this, function (b, c, e) {
                    var f;
                    return ma.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? ma.css(b, c, h) : ma.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), ma.fn.extend({
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), ma.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ma
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return ma.noConflict = function (b) {
        return a.$ === ma && (a.$ = Ub), b && a.jQuery === ma && (a.jQuery = Tb), ma
    }, b || (a.jQuery = a.$ = ma), ma
}),
function (a) {
    "use strict";
    a.fn.fitVids = function (b) {
        var c = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var d = document.head || document.getElementsByTagName("head")[0],
                e = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                f = document.createElement("div");
            f.innerHTML = '<p>x</p><style id="fit-vids-style">' + e + "</style>", d.appendChild(f.childNodes[1])
        }
        return b && a.extend(c, b), this.each(function () {
            var b = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            c.customSelector && b.push(c.customSelector);
            var d = ".fitvidsignore";
            c.ignore && (d = d + ", " + c.ignore);
            var e = a(this).find(b.join(","));
            e = e.not("object object"), e = e.not(d), e.each(function (b) {
                var c = a(this);
                if (!(c.parents(d).length > 0 || "embed" === this.tagName.toLowerCase() && c.parent("object").length || c.parent(".fluid-width-video-wrapper").length)) {
                    c.css("height") || c.css("width") || !isNaN(c.attr("height")) && !isNaN(c.attr("width")) || (c.attr("height", 9), c.attr("width", 16));
                    var e = "object" === this.tagName.toLowerCase() || c.attr("height") && !isNaN(parseInt(c.attr("height"), 10)) ? parseInt(c.attr("height"), 10) : c.height(),
                        f = isNaN(parseInt(c.attr("width"), 10)) ? c.width() : parseInt(c.attr("width"), 10),
                        g = e / f;
                    if (!c.attr("id")) {
                        var h = "fitvid" + b;
                        c.attr("id", h)
                    }
                    c.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * g + "%"), c.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto), $(function () {
        "use strict";
        var a = function () {
                d(), f(), e(), g(), initUpdates(), h(), initWeather()
            },
            b = $("#prev"),
            c = $("#next"),
            d = function () {
                $(document).keydown(function (a) {
                    37 == a.keyCode ? b.length && (window.location.href = b.attr("href")) : 39 == a.keyCode && c.length && (window.location.href = c.attr("href"))
                })
            },
            e = function () {
                if ($("#hero").find("video").length > 0) {
                    var a = $("#hero").find("video")[0];
                    if (a.addEventListener("ended", function (b) {
                            return a.currentTime = .1, a.play()
                        }, !1), window.outerWidth >= 720) return a.play()
                }
            },
            f = function () {
                $(".post").fitVids({
                    customSelector: ".fitvid"
                })
            },
            g = function () {
                $(document).ready(function () {
                    $(".js-newsletter").on("submit", function (a) {
                        a.preventDefault();
                        var b = $(this),
                            c = b.find(".newsletter__message"),
                            d = b.find(".newsletter__fields"),
                            e = b.find(".newsletter__submit");
                        e.val("Loading...").prop("disabled", !0), $.getJSON(b.attr("action") + "?callback=?", b.serialize(), function (a) {
                            400 === a.Status ? (c.text(a.Message).removeClass("hidden"), e.val("Submit").prop("disabled", !1)) : (c.text("Thanks for subscribing!").removeClass("hidden"), d.addClass("hidden"))
                        })
                    })
                })
            },
            h = function () {
                $('a[href^="http://"], a[href^="https://"]').attr("target", "_blank")
            };
        a()
    }),
    function (a, b) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
    }(this, function () {
        "use strict";

        function a() {
            return fd.apply(null, arguments)
        }

        function b(a) {
            fd = a
        }

        function c(a) {
            return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
        }

        function d(a) {
            return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
        }

        function e(a, b) {
            var c, d = [];
            for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
            return d
        }

        function f(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }

        function g(a, b) {
            for (var c in b) f(b, c) && (a[c] = b[c]);
            return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
        }

        function h(a, b, c, d) {
            return Ja(a, b, c, d, !0).utc()
        }

        function i() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null
            }
        }

        function j(a) {
            return null == a._pf && (a._pf = i()), a._pf
        }

        function k(a) {
            if (null == a._isValid) {
                var b = j(a),
                    c = gd.call(b.parsedDateParts, function (a) {
                        return null != a
                    });
                a._isValid = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
            }
            return a._isValid
        }

        function l(a) {
            var b = h(NaN);
            return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
        }

        function m(a) {
            return void 0 === a
        }

        function n(a, b) {
            var c, d, e;
            if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), hd.length > 0)
                for (c in hd) d = hd[c], e = b[d], m(e) || (a[d] = e);
            return a
        }

        function o(b) {
            n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), id === !1 && (id = !0, a.updateOffset(this), id = !1)
        }

        function p(a) {
            return a instanceof o || null != a && null != a._isAMomentObject
        }

        function q(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function r(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = q(b)), c
        }

        function s(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
            return g + f
        }

        function t(b) {
            a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
        }

        function u(b, c) {
            var d = !0;
            return g(function () {
                return null != a.deprecationHandler && a.deprecationHandler(null, b), d && (t(b + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), d = !1), c.apply(this, arguments)
            }, c)
        }

        function v(b, c) {
            null != a.deprecationHandler && a.deprecationHandler(b, c), jd[b] || (t(c), jd[b] = !0)
        }

        function w(a) {
            return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
        }

        function x(a) {
            return "[object Object]" === Object.prototype.toString.call(a)
        }

        function y(a) {
            var b, c;
            for (c in a) b = a[c], w(b) ? this[c] = b : this["_" + c] = b;
            this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function z(a, b) {
            var c, d = g({}, a);
            for (c in b) f(b, c) && (x(a[c]) && x(b[c]) ? (d[c] = {}, g(d[c], a[c]), g(d[c], b[c])) : null != b[c] ? d[c] = b[c] : delete d[c]);
            return d
        }

        function A(a) {
            null != a && this.set(a)
        }

        function B(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function C(a) {
            for (var b, c, d, e, f = 0; f < a.length;) {
                for (e = B(a[f]).split("-"), b = e.length, c = B(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                    if (d = D(e.slice(0, b).join("-"))) return d;
                    if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return null
        }

        function D(a) {
            var b = null;
            if (!nd[a] && "undefined" != typeof module && module && module.exports) try {
                b = ld._abbr, require("./locale/" + a), E(b)
            } catch (c) {}
            return nd[a]
        }

        function E(a, b) {
            var c;
            return a && (c = m(b) ? H(a) : F(a, b), c && (ld = c)), ld._abbr
        }

        function F(a, b) {
            return null !== b ? (b.abbr = a, null != nd[a] ? (v("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), b = z(nd[a]._config, b)) : null != b.parentLocale && (null != nd[b.parentLocale] ? b = z(nd[b.parentLocale]._config, b) : v("parentLocaleUndefined", "specified parentLocale is not defined yet")), nd[a] = new A(b), E(a), nd[a]) : (delete nd[a], null)
        }

        function G(a, b) {
            if (null != b) {
                var c;
                null != nd[a] && (b = z(nd[a]._config, b)), c = new A(b), c.parentLocale = nd[a], nd[a] = c, E(a)
            } else null != nd[a] && (null != nd[a].parentLocale ? nd[a] = nd[a].parentLocale : null != nd[a] && delete nd[a]);
            return nd[a]
        }

        function H(a) {
            var b;
            if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return ld;
            if (!c(a)) {
                if (b = D(a)) return b;
                a = [a]
            }
            return C(a)
        }

        function I() {
            return kd(nd)
        }

        function J(a, b) {
            var c = a.toLowerCase();
            od[c] = od[c + "s"] = od[b] = a
        }

        function K(a) {
            return "string" == typeof a ? od[a] || od[a.toLowerCase()] : void 0
        }

        function L(a) {
            var b, c, d = {};
            for (c in a) f(a, c) && (b = K(c), b && (d[b] = a[c]));
            return d
        }

        function M(b, c) {
            return function (d) {
                return null != d ? (O(this, b, d), a.updateOffset(this, c), this) : N(this, b)
            }
        }

        function N(a, b) {
            return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
        }

        function O(a, b, c) {
            a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
        }

        function P(a, b) {
            var c;
            if ("object" == typeof a)
                for (c in a) this.set(c, a[c]);
            else if (a = K(a), w(this[a])) return this[a](b);
            return this
        }

        function Q(a, b, c) {
            var d = "" + Math.abs(a),
                e = b - d.length,
                f = a >= 0;
            return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
        }

        function R(a, b, c, d) {
            var e = d;
            "string" == typeof d && (e = function () {
                return this[d]()
            }), a && (sd[a] = e), b && (sd[b[0]] = function () {
                return Q(e.apply(this, arguments), b[1], b[2])
            }), c && (sd[c] = function () {
                return this.localeData().ordinal(e.apply(this, arguments), a)
            })
        }

        function S(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function T(a) {
            var b, c, d = a.match(pd);
            for (b = 0, c = d.length; c > b; b++) sd[d[b]] ? d[b] = sd[d[b]] : d[b] = S(d[b]);
            return function (b) {
                var e, f = "";
                for (e = 0; c > e; e++) f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
                return f
            }
        }

        function U(a, b) {
            return a.isValid() ? (b = V(b, a.localeData()), rd[b] = rd[b] || T(b), rd[b](a)) : a.localeData().invalidDate()
        }

        function V(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (qd.lastIndex = 0; d >= 0 && qd.test(a);) a = a.replace(qd, c), qd.lastIndex = 0, d -= 1;
            return a
        }

        function W(a, b, c) {
            Kd[a] = w(b) ? b : function (a, d) {
                return a && c ? c : b
            }
        }

        function X(a, b) {
            return f(Kd, a) ? Kd[a](b._strict, b._locale) : new RegExp(Y(a))
        }

        function Y(a) {
            return Z(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                return b || c || d || e
            }))
        }

        function Z(a) {
            return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function $(a, b) {
            var c, d = b;
            for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
                    c[b] = r(a)
                }), c = 0; c < a.length; c++) Ld[a[c]] = d
        }

        function _(a, b) {
            $(a, function (a, c, d, e) {
                d._w = d._w || {}, b(a, d._w, d, e)
            })
        }

        function aa(a, b, c) {
            null != b && f(Ld, a) && Ld[a](b, c._a, c, a)
        }

        function ba(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function ca(a, b) {
            return c(this._months) ? this._months[a.month()] : this._months[Vd.test(b) ? "format" : "standalone"][a.month()]
        }

        function da(a, b) {
            return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Vd.test(b) ? "format" : "standalone"][a.month()]
        }

        function ea(a, b, c) {
            var d, e, f, g = a.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; 12 > d; ++d) f = h([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
            return c ? "MMM" === b ? (e = md.call(this._shortMonthsParse, g), -1 !== e ? e : null) : (e = md.call(this._longMonthsParse, g), -1 !== e ? e : null) : "MMM" === b ? (e = md.call(this._shortMonthsParse, g), -1 !== e ? e : (e = md.call(this._longMonthsParse, g), -1 !== e ? e : null)) : (e = md.call(this._longMonthsParse, g), -1 !== e ? e : (e = md.call(this._shortMonthsParse, g), -1 !== e ? e : null))
        }

        function fa(a, b, c) {
            var d, e, f;
            if (this._monthsParseExact) return ea.call(this, a, b, c);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                if (!c && this._monthsParse[d].test(a)) return d
            }
        }

        function ga(a, b) {
            var c;
            if (!a.isValid()) return a;
            if ("string" == typeof b)
                if (/^\d+$/.test(b)) b = r(b);
                else if (b = a.localeData().monthsParse(b), "number" != typeof b) return a;
            return c = Math.min(a.date(), ba(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
        }

        function ha(b) {
            return null != b ? (ga(this, b), a.updateOffset(this, !0), this) : N(this, "Month")
        }

        function ia() {
            return ba(this.year(), this.month())
        }

        function ja(a) {
            return this._monthsParseExact ? (f(this, "_monthsRegex") || la.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
        }

        function ka(a) {
            return this._monthsParseExact ? (f(this, "_monthsRegex") || la.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
        }

        function la() {
            function a(a, b) {
                return b.length - a.length
            }
            var b, c, d = [],
                e = [],
                f = [];
            for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
            for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = Z(d[b]), e[b] = Z(e[b]), f[b] = Z(f[b]);
            this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
        }

        function ma(a) {
            var b, c = a._a;
            return c && -2 === j(a).overflow && (b = c[Nd] < 0 || c[Nd] > 11 ? Nd : c[Od] < 1 || c[Od] > ba(c[Md], c[Nd]) ? Od : c[Pd] < 0 || c[Pd] > 24 || 24 === c[Pd] && (0 !== c[Qd] || 0 !== c[Rd] || 0 !== c[Sd]) ? Pd : c[Qd] < 0 || c[Qd] > 59 ? Qd : c[Rd] < 0 || c[Rd] > 59 ? Rd : c[Sd] < 0 || c[Sd] > 999 ? Sd : -1, j(a)._overflowDayOfYear && (Md > b || b > Od) && (b = Od), j(a)._overflowWeeks && -1 === b && (b = Td), j(a)._overflowWeekday && -1 === b && (b = Ud), j(a).overflow = b), a
        }

        function na(a) {
            var b, c, d, e, f, g, h = a._i,
                i = $d.exec(h) || _d.exec(h);
            if (i) {
                for (j(a).iso = !0, b = 0, c = be.length; c > b; b++)
                    if (be[b][1].exec(i[1])) {
                        e = be[b][0], d = be[b][2] !== !1;
                        break
                    }
                if (null == e) return void(a._isValid = !1);
                if (i[3]) {
                    for (b = 0, c = ce.length; c > b; b++)
                        if (ce[b][1].exec(i[3])) {
                            f = (i[2] || " ") + ce[b][0];
                            break
                        }
                    if (null == f) return void(a._isValid = !1)
                }
                if (!d && null != f) return void(a._isValid = !1);
                if (i[4]) {
                    if (!ae.exec(i[4])) return void(a._isValid = !1);
                    g = "Z"
                }
                a._f = e + (f || "") + (g || ""), Ca(a)
            } else a._isValid = !1
        }

        function oa(b) {
            var c = de.exec(b._i);
            return null !== c ? void(b._d = new Date(+c[1])) : (na(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
        }

        function pa(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
        }

        function qa(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
        }

        function ra(a) {
            return sa(a) ? 366 : 365
        }

        function sa(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }

        function ta() {
            return sa(this.year())
        }

        function ua(a, b, c) {
            var d = 7 + b - c,
                e = (7 + qa(a, 0, d).getUTCDay() - b) % 7;
            return -e + d - 1
        }

        function va(a, b, c, d, e) {
            var f, g, h = (7 + c - d) % 7,
                i = ua(a, d, e),
                j = 1 + 7 * (b - 1) + h + i;
            return 0 >= j ? (f = a - 1, g = ra(f) + j) : j > ra(a) ? (f = a + 1, g = j - ra(a)) : (f = a, g = j), {
                year: f,
                dayOfYear: g
            }
        }

        function wa(a, b, c) {
            var d, e, f = ua(a.year(), b, c),
                g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
            return 1 > g ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
                week: d,
                year: e
            }
        }

        function xa(a, b, c) {
            var d = ua(a, b, c),
                e = ua(a + 1, b, c);
            return (ra(a) - d + e) / 7
        }

        function ya(a, b, c) {
            return null != a ? a : null != b ? b : c
        }

        function za(b) {
            var c = new Date(a.now());
            return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
        }

        function Aa(a) {
            var b, c, d, e, f = [];
            if (!a._d) {
                for (d = za(a), a._w && null == a._a[Od] && null == a._a[Nd] && Ba(a), a._dayOfYear && (e = ya(a._a[Md], d[Md]), a._dayOfYear > ra(e) && (j(a)._overflowDayOfYear = !0), c = qa(e, 0, a._dayOfYear), a._a[Nd] = c.getUTCMonth(), a._a[Od] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
                for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                24 === a._a[Pd] && 0 === a._a[Qd] && 0 === a._a[Rd] && 0 === a._a[Sd] && (a._nextDay = !0, a._a[Pd] = 0), a._d = (a._useUTC ? qa : pa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Pd] = 24)
            }
        }

        function Ba(a) {
            var b, c, d, e, f, g, h, i;
            b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = ya(b.GG, a._a[Md], wa(Ka(), 1, 4).year), d = ya(b.W, 1), e = ya(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = ya(b.gg, a._a[Md], wa(Ka(), f, g).year), d = ya(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > xa(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[Md] = h.year, a._dayOfYear = h.dayOfYear)
        }

        function Ca(b) {
            if (b._f === a.ISO_8601) return void na(b);
            b._a = [], j(b).empty = !0;
            var c, d, e, f, g, h = "" + b._i,
                i = h.length,
                k = 0;
            for (e = V(b._f, b._locale).match(pd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(X(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), sd[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), aa(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
            j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[Pd] <= 12 && b._a[Pd] > 0 && (j(b).bigHour = void 0), j(b).parsedDateParts = b._a.slice(0), j(b).meridiem = b._meridiem, b._a[Pd] = Da(b._locale, b._a[Pd], b._meridiem), Aa(b), ma(b)
        }

        function Da(a, b, c) {
            var d;
            return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
        }

        function Ea(a) {
            var b, c, d, e, f;
            if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
            for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], Ca(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
            g(a, c || b)
        }

        function Fa(a) {
            if (!a._d) {
                var b = L(a._i);
                a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
                    return a && parseInt(a, 10)
                }), Aa(a)
            }
        }

        function Ga(a) {
            var b = new o(ma(Ha(a)));
            return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
        }

        function Ha(a) {
            var b = a._i,
                e = a._f;
            return a._locale = a._locale || H(a._l), null === b || void 0 === e && "" === b ? l({
                nullInput: !0
            }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(ma(b)) : (c(e) ? Ea(a) : e ? Ca(a) : d(b) ? a._d = b : Ia(a), k(a) || (a._d = null), a))
        }

        function Ia(b) {
            var f = b._i;
            void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(f.valueOf()) : "string" == typeof f ? oa(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
                return parseInt(a, 10)
            }), Aa(b)) : "object" == typeof f ? Fa(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
        }

        function Ja(a, b, c, d, e) {
            var f = {};
            return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Ga(f)
        }

        function Ka(a, b, c, d) {
            return Ja(a, b, c, d, !1)
        }

        function La(a, b) {
            var d, e;
            if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ka();
            for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
            return d
        }

        function Ma() {
            var a = [].slice.call(arguments, 0);
            return La("isBefore", a)
        }

        function Na() {
            var a = [].slice.call(arguments, 0);
            return La("isAfter", a)
        }

        function Oa(a) {
            var b = L(a),
                c = b.year || 0,
                d = b.quarter || 0,
                e = b.month || 0,
                f = b.week || 0,
                g = b.day || 0,
                h = b.hour || 0,
                i = b.minute || 0,
                j = b.second || 0,
                k = b.millisecond || 0;
            this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = H(), this._bubble()
        }

        function Pa(a) {
            return a instanceof Oa
        }

        function Qa(a, b) {
            R(a, 0, 0, function () {
                var a = this.utcOffset(),
                    c = "+";
                return 0 > a && (a = -a, c = "-"), c + Q(~~(a / 60), 2) + b + Q(~~a % 60, 2)
            })
        }

        function Ra(a, b) {
            var c = (b || "").match(a) || [],
                d = c[c.length - 1] || [],
                e = (d + "").match(ie) || ["-", 0, 0],
                f = +(60 * e[1]) + r(e[2]);
            return "+" === e[0] ? f : -f
        }

        function Sa(b, c) {
            var e, f;
            return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? b.valueOf() : Ka(b).valueOf()) - e.valueOf(), e._d.setTime(e._d.valueOf() + f), a.updateOffset(e, !1), e) : Ka(b).local()
        }

        function Ta(a) {
            return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
        }

        function Ua(b, c) {
            var d, e = this._offset || 0;
            return this.isValid() ? null != b ? ("string" == typeof b ? b = Ra(Hd, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ta(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? jb(this, db(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ta(this) : null != b ? this : NaN
        }

        function Va(a, b) {
            return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
        }

        function Wa(a) {
            return this.utcOffset(0, a)
        }

        function Xa(a) {
            return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ta(this), "m")), this
        }

        function Ya() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ra(Gd, this._i)), this
        }

        function Za(a) {
            return this.isValid() ? (a = a ? Ka(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
        }

        function $a() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function _a() {
            if (!m(this._isDSTShifted)) return this._isDSTShifted;
            var a = {};
            if (n(a, this), a = Ha(a), a._a) {
                var b = a._isUTC ? h(a._a) : Ka(a._a);
                this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function ab() {
            return this.isValid() ? !this._isUTC : !1
        }

        function bb() {
            return this.isValid() ? this._isUTC : !1
        }

        function cb() {
            return this.isValid() ? this._isUTC && 0 === this._offset : !1
        }

        function db(a, b) {
            var c, d, e, g = a,
                h = null;
            return Pa(a) ? g = {
                ms: a._milliseconds,
                d: a._days,
                M: a._months
            } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = je.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
                y: 0,
                d: r(h[Od]) * c,
                h: r(h[Pd]) * c,
                m: r(h[Qd]) * c,
                s: r(h[Rd]) * c,
                ms: r(h[Sd]) * c
            }) : (h = ke.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
                y: eb(h[2], c),
                M: eb(h[3], c),
                w: eb(h[4], c),
                d: eb(h[5], c),
                h: eb(h[6], c),
                m: eb(h[7], c),
                s: eb(h[8], c)
            }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = gb(Ka(g.from), Ka(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Oa(g), Pa(a) && f(a, "_locale") && (d._locale = a._locale), d
        }

        function eb(a, b) {
            var c = a && parseFloat(a.replace(",", "."));
            return (isNaN(c) ? 0 : c) * b
        }

        function fb(a, b) {
            var c = {
                milliseconds: 0,
                months: 0
            };
            return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
        }

        function gb(a, b) {
            var c;
            return a.isValid() && b.isValid() ? (b = Sa(b, a), a.isBefore(b) ? c = fb(a, b) : (c = fb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
                milliseconds: 0,
                months: 0
            }
        }

        function hb(a) {
            return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
        }

        function ib(a, b) {
            return function (c, d) {
                var e, f;
                return null === d || isNaN(+d) || (v(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = db(c, d), jb(this, e, a), this
            }
        }

        function jb(b, c, d, e) {
            var f = c._milliseconds,
                g = hb(c._days),
                h = hb(c._months);
            b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(b._d.valueOf() + f * d), g && O(b, "Date", N(b, "Date") + g * d), h && ga(b, N(b, "Month") + h * d), e && a.updateOffset(b, g || h))
        }

        function kb(a, b) {
            var c = a || Ka(),
                d = Sa(c, this).startOf("day"),
                e = this.diff(d, "days", !0),
                f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
                g = b && (w(b[f]) ? b[f]() : b[f]);
            return this.format(g || this.localeData().calendar(f, this, Ka(c)))
        }

        function lb() {
            return new o(this)
        }

        function mb(a, b) {
            var c = p(a) ? a : Ka(a);
            return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf()) : !1
        }

        function nb(a, b) {
            var c = p(a) ? a : Ka(a);
            return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf()) : !1
        }

        function ob(a, b, c, d) {
            return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
        }

        function pb(a, b) {
            var c, d = p(a) ? a : Ka(a);
            return this.isValid() && d.isValid() ? (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf())) : !1
        }

        function qb(a, b) {
            return this.isSame(a, b) || this.isAfter(a, b)
        }

        function rb(a, b) {
            return this.isSame(a, b) || this.isBefore(a, b)
        }

        function sb(a, b, c) {
            var d, e, f, g;
            return this.isValid() ? (d = Sa(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = tb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
        }

        function tb(a, b) {
            var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                f = a.clone().add(e, "months");
            return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
        }

        function ub() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function vb() {
            var a = this.clone().utc();
            return 0 < a.year() && a.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : U(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : U(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function wb(b) {
            b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
            var c = U(this, b);
            return this.localeData().postformat(c)
        }

        function xb(a, b) {
            return this.isValid() && (p(a) && a.isValid() || Ka(a).isValid()) ? db({
                to: this,
                from: a
            }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
        }

        function yb(a) {
            return this.from(Ka(), a)
        }

        function zb(a, b) {
            return this.isValid() && (p(a) && a.isValid() || Ka(a).isValid()) ? db({
                from: this,
                to: a
            }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
        }

        function Ab(a) {
            return this.to(Ka(), a)
        }

        function Bb(a) {
            var b;
            return void 0 === a ? this._locale._abbr : (b = H(a), null != b && (this._locale = b), this)
        }

        function Cb() {
            return this._locale
        }

        function Db(a) {
            switch (a = K(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function Eb(a) {
            return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
        }

        function Fb() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function Gb() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function Hb() {
            return this._offset ? new Date(this.valueOf()) : this._d
        }

        function Ib() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
        }

        function Jb() {
            var a = this;
            return {
                years: a.year(),
                months: a.month(),
                date: a.date(),
                hours: a.hours(),
                minutes: a.minutes(),
                seconds: a.seconds(),
                milliseconds: a.milliseconds()
            }
        }

        function Kb() {
            return this.isValid() ? this.toISOString() : null
        }

        function Lb() {
            return k(this)
        }

        function Mb() {
            return g({}, j(this))
        }

        function Nb() {
            return j(this).overflow
        }

        function Ob() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Pb(a, b) {
            R(0, [a, a.length], 0, b)
        }

        function Qb(a) {
            return Ub.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function Rb(a) {
            return Ub.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Sb() {
            return xa(this.year(), 1, 4)
        }

        function Tb() {
            var a = this.localeData()._week;
            return xa(this.year(), a.dow, a.doy)
        }

        function Ub(a, b, c, d, e) {
            var f;
            return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Vb.call(this, a, b, c, d, e))
        }

        function Vb(a, b, c, d, e) {
            var f = va(a, b, c, d, e),
                g = qa(f.year, 0, f.dayOfYear);
            return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
        }

        function Wb(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        }

        function Xb(a) {
            return wa(a, this._week.dow, this._week.doy).week
        }

        function Yb() {
            return this._week.dow
        }

        function Zb() {
            return this._week.doy
        }

        function $b(a) {
            var b = this.localeData().week(this);
            return null == a ? b : this.add(7 * (a - b), "d")
        }

        function _b(a) {
            var b = wa(this, 1, 4).week;
            return null == a ? b : this.add(7 * (a - b), "d")
        }

        function ac(a, b) {
            return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
        }

        function bc(a, b) {
            return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
        }

        function cc(a) {
            return this._weekdaysShort[a.day()]
        }

        function dc(a) {
            return this._weekdaysMin[a.day()]
        }

        function ec(a, b, c) {
            var d, e, f, g = a.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; 7 > d; ++d) f = h([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
            return c ? "dddd" === b ? (e = md.call(this._weekdaysParse, g), -1 !== e ? e : null) : "ddd" === b ? (e = md.call(this._shortWeekdaysParse, g), -1 !== e ? e : null) : (e = md.call(this._minWeekdaysParse, g), -1 !== e ? e : null) : "dddd" === b ? (e = md.call(this._weekdaysParse, g), -1 !== e ? e : (e = md.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = md.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : "ddd" === b ? (e = md.call(this._shortWeekdaysParse, g), -1 !== e ? e : (e = md.call(this._weekdaysParse, g), -1 !== e ? e : (e = md.call(this._minWeekdaysParse, g), -1 !== e ? e : null))) : (e = md.call(this._minWeekdaysParse, g), -1 !== e ? e : (e = md.call(this._weekdaysParse, g), -1 !== e ? e : (e = md.call(this._shortWeekdaysParse, g), -1 !== e ? e : null)))
        }

        function fc(a, b, c) {
            var d, e, f;
            if (this._weekdaysParseExact) return ec.call(this, a, b, c);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
                if (e = h([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
                if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
                if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
                if (!c && this._weekdaysParse[d].test(a)) return d
            }
        }

        function gc(a) {
            if (!this.isValid()) return null != a ? this : NaN;
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = ac(a, this.localeData()), this.add(a - b, "d")) : b
        }

        function hc(a) {
            if (!this.isValid()) return null != a ? this : NaN;
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b : this.add(a - b, "d")
        }

        function ic(a) {
            return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
        }

        function jc(a) {
            return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || mc.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex
        }

        function kc(a) {
            return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || mc.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
        }

        function lc(a) {
            return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || mc.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
        }

        function mc() {
            function a(a, b) {
                return b.length - a.length
            }
            var b, c, d, e, f, g = [],
                i = [],
                j = [],
                k = [];
            for (b = 0; 7 > b; b++) c = h([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), i.push(e), j.push(f), k.push(d), k.push(e), k.push(f);
            for (g.sort(a), i.sort(a), j.sort(a), k.sort(a), b = 0; 7 > b; b++) i[b] = Z(i[b]), j[b] = Z(j[b]), k[b] = Z(k[b]);
            this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
        }

        function nc(a) {
            var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add(a - b, "d")
        }

        function oc() {
            return this.hours() % 12 || 12
        }

        function pc() {
            return this.hours() || 24
        }

        function qc(a, b) {
            R(a, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), b)
            })
        }

        function rc(a, b) {
            return b._meridiemParse
        }

        function sc(a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        }

        function tc(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        }

        function uc(a, b) {
            b[Sd] = r(1e3 * ("0." + a))
        }

        function vc() {
            return this._isUTC ? "UTC" : ""
        }

        function wc() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function xc(a) {
            return Ka(1e3 * a)
        }

        function yc() {
            return Ka.apply(null, arguments).parseZone()
        }

        function zc(a, b, c) {
            var d = this._calendar[a];
            return w(d) ? d.call(b, c) : d
        }

        function Ac(a) {
            var b = this._longDateFormat[a],
                c = this._longDateFormat[a.toUpperCase()];
            return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
                return a.slice(1)
            }), this._longDateFormat[a])
        }

        function Bc() {
            return this._invalidDate
        }

        function Cc(a) {
            return this._ordinal.replace("%d", a)
        }

        function Dc(a) {
            return a
        }

        function Ec(a, b, c, d) {
            var e = this._relativeTime[c];
            return w(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
        }

        function Fc(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return w(c) ? c(b) : c.replace(/%s/i, b)
        }

        function Gc(a, b, c, d) {
            var e = H(),
                f = h().set(d, b);
            return e[c](f, a)
        }

        function Hc(a, b, c) {
            if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return Gc(a, b, c, "month");
            var d, e = [];
            for (d = 0; 12 > d; d++) e[d] = Gc(a, d, c, "month");
            return e
        }

        function Ic(a, b, c, d) {
            "boolean" == typeof a ? ("number" == typeof b && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, "number" == typeof b && (c = b, b = void 0), b = b || "");
            var e = H(),
                f = a ? e._week.dow : 0;
            if (null != c) return Gc(b, (c + f) % 7, d, "day");
            var g, h = [];
            for (g = 0; 7 > g; g++) h[g] = Gc(b, (g + f) % 7, d, "day");
            return h
        }

        function Jc(a, b) {
            return Hc(a, b, "months")
        }

        function Kc(a, b) {
            return Hc(a, b, "monthsShort")
        }

        function Lc(a, b, c) {
            return Ic(a, b, c, "weekdays")
        }

        function Mc(a, b, c) {
            return Ic(a, b, c, "weekdaysShort")
        }

        function Nc(a, b, c) {
            return Ic(a, b, c, "weekdaysMin")
        }

        function Oc() {
            var a = this._data;
            return this._milliseconds = Le(this._milliseconds), this._days = Le(this._days), this._months = Le(this._months), a.milliseconds = Le(a.milliseconds), a.seconds = Le(a.seconds), a.minutes = Le(a.minutes), a.hours = Le(a.hours), a.months = Le(a.months), a.years = Le(a.years), this
        }

        function Pc(a, b, c, d) {
            var e = db(b, c);
            return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
        }

        function Qc(a, b) {
            return Pc(this, a, b, 1)
        }

        function Rc(a, b) {
            return Pc(this, a, b, -1)
        }

        function Sc(a) {
            return 0 > a ? Math.floor(a) : Math.ceil(a)
        }

        function Tc() {
            var a, b, c, d, e, f = this._milliseconds,
                g = this._days,
                h = this._months,
                i = this._data;
            return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Sc(Vc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Uc(g)), h += e, g -= Sc(Vc(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
        }

        function Uc(a) {
            return 4800 * a / 146097
        }

        function Vc(a) {
            return 146097 * a / 4800
        }

        function Wc(a) {
            var b, c, d = this._milliseconds;
            if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Uc(b), "month" === a ? c : c / 12;
            switch (b = this._days + Math.round(Vc(this._months)), a) {
                case "week":
                    return b / 7 + d / 6048e5;
                case "day":
                    return b + d / 864e5;
                case "hour":
                    return 24 * b + d / 36e5;
                case "minute":
                    return 1440 * b + d / 6e4;
                case "second":
                    return 86400 * b + d / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * b) + d;
                default:
                    throw new Error("Unknown unit " + a)
            }
        }

        function Xc() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
        }

        function Yc(a) {
            return function () {
                return this.as(a)
            }
        }

        function Zc(a) {
            return a = K(a), this[a + "s"]()
        }

        function $c(a) {
            return function () {
                return this._data[a]
            }
        }

        function _c() {
            return q(this.days() / 7)
        }

        function ad(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function bd(a, b, c) {
            var d = db(a).abs(),
                e = _e(d.as("s")),
                f = _e(d.as("m")),
                g = _e(d.as("h")),
                h = _e(d.as("d")),
                i = _e(d.as("M")),
                j = _e(d.as("y")),
                k = e < af.s && ["s", e] || 1 >= f && ["m"] || f < af.m && ["mm", f] || 1 >= g && ["h"] || g < af.h && ["hh", g] || 1 >= h && ["d"] || h < af.d && ["dd", h] || 1 >= i && ["M"] || i < af.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
            return k[2] = b, k[3] = +a > 0, k[4] = c, ad.apply(null, k)
        }

        function cd(a, b) {
            return void 0 === af[a] ? !1 : void 0 === b ? af[a] : (af[a] = b, !0)
        }

        function dd(a) {
            var b = this.localeData(),
                c = bd(this, !a, b);
            return a && (c = b.pastFuture(+this, c)), b.postformat(c)
        }

        function ed() {
            var a, b, c, d = bf(this._milliseconds) / 1e3,
                e = bf(this._days),
                f = bf(this._months);
            a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
            var g = c,
                h = f,
                i = e,
                j = b,
                k = a,
                l = d,
                m = this.asSeconds();
            return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
        }
        var fd, gd;
        gd = Array.prototype.some ? Array.prototype.some : function (a) {
            for (var b = Object(this), c = b.length >>> 0, d = 0; c > d; d++)
                if (d in b && a.call(this, b[d], d, b)) return !0;
            return !1
        };
        var hd = a.momentProperties = [],
            id = !1,
            jd = {};
        a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
        var kd;
        kd = Object.keys ? Object.keys : function (a) {
            var b, c = [];
            for (b in a) f(a, b) && c.push(b);
            return c
        };
        var ld, md, nd = {},
            od = {},
            pd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            qd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            rd = {},
            sd = {},
            td = /\d/,
            ud = /\d\d/,
            vd = /\d{3}/,
            wd = /\d{4}/,
            xd = /[+-]?\d{6}/,
            yd = /\d\d?/,
            zd = /\d\d\d\d?/,
            Ad = /\d\d\d\d\d\d?/,
            Bd = /\d{1,3}/,
            Cd = /\d{1,4}/,
            Dd = /[+-]?\d{1,6}/,
            Ed = /\d+/,
            Fd = /[+-]?\d+/,
            Gd = /Z|[+-]\d\d:?\d\d/gi,
            Hd = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Id = /[+-]?\d+(\.\d{1,3})?/,
            Jd = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Kd = {},
            Ld = {},
            Md = 0,
            Nd = 1,
            Od = 2,
            Pd = 3,
            Qd = 4,
            Rd = 5,
            Sd = 6,
            Td = 7,
            Ud = 8;
        md = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
            var b;
            for (b = 0; b < this.length; ++b)
                if (this[b] === a) return b;
            return -1
        }, R("M", ["MM", 2], "Mo", function () {
            return this.month() + 1
        }), R("MMM", 0, 0, function (a) {
            return this.localeData().monthsShort(this, a)
        }), R("MMMM", 0, 0, function (a) {
            return this.localeData().months(this, a)
        }), J("month", "M"), W("M", yd), W("MM", yd, ud), W("MMM", function (a, b) {
            return b.monthsShortRegex(a)
        }), W("MMMM", function (a, b) {
            return b.monthsRegex(a)
        }), $(["M", "MM"], function (a, b) {
            b[Nd] = r(a) - 1
        }), $(["MMM", "MMMM"], function (a, b, c, d) {
            var e = c._locale.monthsParse(a, d, c._strict);
            null != e ? b[Nd] = e : j(c).invalidMonth = a
        });
        var Vd = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            Wd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Xd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Yd = Jd,
            Zd = Jd,
            $d = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            _d = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            ae = /Z|[+-]\d\d(?::?\d\d)?/,
            be = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
            ce = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
            de = /^\/?Date\((\-?\d+)/i;
        a.createFromInputFallback = u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
        }), R("Y", 0, 0, function () {
            var a = this.year();
            return 9999 >= a ? "" + a : "+" + a
        }), R(0, ["YY", 2], 0, function () {
            return this.year() % 100
        }), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), W("Y", Fd), W("YY", yd, ud), W("YYYY", Cd, wd), W("YYYYY", Dd, xd), W("YYYYYY", Dd, xd), $(["YYYYY", "YYYYYY"], Md), $("YYYY", function (b, c) {
            c[Md] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
        }), $("YY", function (b, c) {
            c[Md] = a.parseTwoDigitYear(b)
        }), $("Y", function (a, b) {
            b[Md] = parseInt(a, 10)
        }), a.parseTwoDigitYear = function (a) {
            return r(a) + (r(a) > 68 ? 1900 : 2e3)
        };
        var ee = M("FullYear", !0);
        a.ISO_8601 = function () {};
        var fe = u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
                var a = Ka.apply(null, arguments);
                return this.isValid() && a.isValid() ? this > a ? this : a : l()
            }),
            ge = u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
                var a = Ka.apply(null, arguments);
                return this.isValid() && a.isValid() ? a > this ? this : a : l()
            }),
            he = function () {
                return Date.now ? Date.now() : +new Date
            };
        Qa("Z", ":"), Qa("ZZ", ""), W("Z", Hd), W("ZZ", Hd), $(["Z", "ZZ"], function (a, b, c) {
            c._useUTC = !0, c._tzm = Ra(Hd, a)
        });
        var ie = /([\+\-]|\d\d)/gi;
        a.updateOffset = function () {};
        var je = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
            ke = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        db.fn = Oa.prototype;
        var le = ib(1, "add"),
            me = ib(-1, "subtract");
        a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var ne = u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
            return void 0 === a ? this.localeData() : this.locale(a)
        });
        R(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100
        }), R(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100
        }), Pb("gggg", "weekYear"), Pb("ggggg", "weekYear"), Pb("GGGG", "isoWeekYear"), Pb("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), W("G", Fd), W("g", Fd), W("GG", yd, ud), W("gg", yd, ud), W("GGGG", Cd, wd), W("gggg", Cd, wd), W("GGGGG", Dd, xd), W("ggggg", Dd, xd), _(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
            b[d.substr(0, 2)] = r(a);
        }), _(["gg", "GG"], function (b, c, d, e) {
            c[e] = a.parseTwoDigitYear(b)
        }), R("Q", 0, "Qo", "quarter"), J("quarter", "Q"), W("Q", td), $("Q", function (a, b) {
            b[Nd] = 3 * (r(a) - 1)
        }), R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), W("w", yd), W("ww", yd, ud), W("W", yd), W("WW", yd, ud), _(["w", "ww", "W", "WW"], function (a, b, c, d) {
            b[d.substr(0, 1)] = r(a)
        });
        var oe = {
            dow: 0,
            doy: 6
        };
        R("D", ["DD", 2], "Do", "date"), J("date", "D"), W("D", yd), W("DD", yd, ud), W("Do", function (a, b) {
            return a ? b._ordinalParse : b._ordinalParseLenient
        }), $(["D", "DD"], Od), $("Do", function (a, b) {
            b[Od] = r(a.match(yd)[0], 10)
        });
        var pe = M("Date", !0);
        R("d", 0, "do", "day"), R("dd", 0, 0, function (a) {
            return this.localeData().weekdaysMin(this, a)
        }), R("ddd", 0, 0, function (a) {
            return this.localeData().weekdaysShort(this, a)
        }), R("dddd", 0, 0, function (a) {
            return this.localeData().weekdays(this, a)
        }), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), W("d", yd), W("e", yd), W("E", yd), W("dd", function (a, b) {
            return b.weekdaysMinRegex(a)
        }), W("ddd", function (a, b) {
            return b.weekdaysShortRegex(a)
        }), W("dddd", function (a, b) {
            return b.weekdaysRegex(a)
        }), _(["dd", "ddd", "dddd"], function (a, b, c, d) {
            var e = c._locale.weekdaysParse(a, d, c._strict);
            null != e ? b.d = e : j(c).invalidWeekday = a
        }), _(["d", "e", "E"], function (a, b, c, d) {
            b[d] = r(a)
        });
        var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            re = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            se = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            te = Jd,
            ue = Jd,
            ve = Jd;
        R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), W("DDD", Bd), W("DDDD", vd), $(["DDD", "DDDD"], function (a, b, c) {
            c._dayOfYear = r(a)
        }), R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, oc), R("k", ["kk", 2], 0, pc), R("hmm", 0, 0, function () {
            return "" + oc.apply(this) + Q(this.minutes(), 2)
        }), R("hmmss", 0, 0, function () {
            return "" + oc.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2)
        }), R("Hmm", 0, 0, function () {
            return "" + this.hours() + Q(this.minutes(), 2)
        }), R("Hmmss", 0, 0, function () {
            return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2)
        }), qc("a", !0), qc("A", !1), J("hour", "h"), W("a", rc), W("A", rc), W("H", yd), W("h", yd), W("HH", yd, ud), W("hh", yd, ud), W("hmm", zd), W("hmmss", Ad), W("Hmm", zd), W("Hmmss", Ad), $(["H", "HH"], Pd), $(["a", "A"], function (a, b, c) {
            c._isPm = c._locale.isPM(a), c._meridiem = a
        }), $(["h", "hh"], function (a, b, c) {
            b[Pd] = r(a), j(c).bigHour = !0
        }), $("hmm", function (a, b, c) {
            var d = a.length - 2;
            b[Pd] = r(a.substr(0, d)), b[Qd] = r(a.substr(d)), j(c).bigHour = !0
        }), $("hmmss", function (a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            b[Pd] = r(a.substr(0, d)), b[Qd] = r(a.substr(d, 2)), b[Rd] = r(a.substr(e)), j(c).bigHour = !0
        }), $("Hmm", function (a, b, c) {
            var d = a.length - 2;
            b[Pd] = r(a.substr(0, d)), b[Qd] = r(a.substr(d))
        }), $("Hmmss", function (a, b, c) {
            var d = a.length - 4,
                e = a.length - 2;
            b[Pd] = r(a.substr(0, d)), b[Qd] = r(a.substr(d, 2)), b[Rd] = r(a.substr(e))
        });
        var we = /[ap]\.?m?\.?/i,
            xe = M("Hours", !0);
        R("m", ["mm", 2], 0, "minute"), J("minute", "m"), W("m", yd), W("mm", yd, ud), $(["m", "mm"], Qd);
        var ye = M("Minutes", !1);
        R("s", ["ss", 2], 0, "second"), J("second", "s"), W("s", yd), W("ss", yd, ud), $(["s", "ss"], Rd);
        var ze = M("Seconds", !1);
        R("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
        }), R(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10)
        }), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond()
        }), R(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond()
        }), R(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond()
        }), R(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond()
        }), R(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond()
        }), R(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond()
        }), J("millisecond", "ms"), W("S", Bd, td), W("SS", Bd, ud), W("SSS", Bd, vd);
        var Ae;
        for (Ae = "SSSS"; Ae.length <= 9; Ae += "S") W(Ae, Ed);
        for (Ae = "S"; Ae.length <= 9; Ae += "S") $(Ae, uc);
        var Be = M("Milliseconds", !1);
        R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
        var Ce = o.prototype;
        Ce.add = le, Ce.calendar = kb, Ce.clone = lb, Ce.diff = sb, Ce.endOf = Eb, Ce.format = wb, Ce.from = xb, Ce.fromNow = yb, Ce.to = zb, Ce.toNow = Ab, Ce.get = P, Ce.invalidAt = Nb, Ce.isAfter = mb, Ce.isBefore = nb, Ce.isBetween = ob, Ce.isSame = pb, Ce.isSameOrAfter = qb, Ce.isSameOrBefore = rb, Ce.isValid = Lb, Ce.lang = ne, Ce.locale = Bb, Ce.localeData = Cb, Ce.max = ge, Ce.min = fe, Ce.parsingFlags = Mb, Ce.set = P, Ce.startOf = Db, Ce.subtract = me, Ce.toArray = Ib, Ce.toObject = Jb, Ce.toDate = Hb, Ce.toISOString = vb, Ce.toJSON = Kb, Ce.toString = ub, Ce.unix = Gb, Ce.valueOf = Fb, Ce.creationData = Ob, Ce.year = ee, Ce.isLeapYear = ta, Ce.weekYear = Qb, Ce.isoWeekYear = Rb, Ce.quarter = Ce.quarters = Wb, Ce.month = ha, Ce.daysInMonth = ia, Ce.week = Ce.weeks = $b, Ce.isoWeek = Ce.isoWeeks = _b, Ce.weeksInYear = Tb, Ce.isoWeeksInYear = Sb, Ce.date = pe, Ce.day = Ce.days = gc, Ce.weekday = hc, Ce.isoWeekday = ic, Ce.dayOfYear = nc, Ce.hour = Ce.hours = xe, Ce.minute = Ce.minutes = ye, Ce.second = Ce.seconds = ze, Ce.millisecond = Ce.milliseconds = Be, Ce.utcOffset = Ua, Ce.utc = Wa, Ce.local = Xa, Ce.parseZone = Ya, Ce.hasAlignedHourOffset = Za, Ce.isDST = $a, Ce.isDSTShifted = _a, Ce.isLocal = ab, Ce.isUtcOffset = bb, Ce.isUtc = cb, Ce.isUTC = cb, Ce.zoneAbbr = vc, Ce.zoneName = wc, Ce.dates = u("dates accessor is deprecated. Use date instead.", pe), Ce.months = u("months accessor is deprecated. Use month instead", ha), Ce.years = u("years accessor is deprecated. Use year instead", ee), Ce.zone = u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Va);
        var De = Ce,
            Ee = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            Fe = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Ge = "Invalid date",
            He = "%d",
            Ie = /\d{1,2}/,
            Je = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Ke = A.prototype;
        Ke._calendar = Ee, Ke.calendar = zc, Ke._longDateFormat = Fe, Ke.longDateFormat = Ac, Ke._invalidDate = Ge, Ke.invalidDate = Bc, Ke._ordinal = He, Ke.ordinal = Cc, Ke._ordinalParse = Ie, Ke.preparse = Dc, Ke.postformat = Dc, Ke._relativeTime = Je, Ke.relativeTime = Ec, Ke.pastFuture = Fc, Ke.set = y, Ke.months = ca, Ke._months = Wd, Ke.monthsShort = da, Ke._monthsShort = Xd, Ke.monthsParse = fa, Ke._monthsRegex = Zd, Ke.monthsRegex = ka, Ke._monthsShortRegex = Yd, Ke.monthsShortRegex = ja, Ke.week = Xb, Ke._week = oe, Ke.firstDayOfYear = Zb, Ke.firstDayOfWeek = Yb, Ke.weekdays = bc, Ke._weekdays = qe, Ke.weekdaysMin = dc, Ke._weekdaysMin = se, Ke.weekdaysShort = cc, Ke._weekdaysShort = re, Ke.weekdaysParse = fc, Ke._weekdaysRegex = te, Ke.weekdaysRegex = jc, Ke._weekdaysShortRegex = ue, Ke.weekdaysShortRegex = kc, Ke._weekdaysMinRegex = ve, Ke.weekdaysMinRegex = lc, Ke.isPM = sc, Ke._meridiemParse = we, Ke.meridiem = tc, E("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (a) {
                var b = a % 10,
                    c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), a.lang = u("moment.lang is deprecated. Use moment.locale instead.", E), a.langData = u("moment.langData is deprecated. Use moment.localeData instead.", H);
        var Le = Math.abs,
            Me = Yc("ms"),
            Ne = Yc("s"),
            Oe = Yc("m"),
            Pe = Yc("h"),
            Qe = Yc("d"),
            Re = Yc("w"),
            Se = Yc("M"),
            Te = Yc("y"),
            Ue = $c("milliseconds"),
            Ve = $c("seconds"),
            We = $c("minutes"),
            Xe = $c("hours"),
            Ye = $c("days"),
            Ze = $c("months"),
            $e = $c("years"),
            _e = Math.round,
            af = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            bf = Math.abs,
            cf = Oa.prototype;
        cf.abs = Oc, cf.add = Qc, cf.subtract = Rc, cf.as = Wc, cf.asMilliseconds = Me, cf.asSeconds = Ne, cf.asMinutes = Oe, cf.asHours = Pe, cf.asDays = Qe, cf.asWeeks = Re, cf.asMonths = Se, cf.asYears = Te, cf.valueOf = Xc, cf._bubble = Tc, cf.get = Zc, cf.milliseconds = Ue, cf.seconds = Ve, cf.minutes = We, cf.hours = Xe, cf.days = Ye, cf.weeks = _c, cf.months = Ze, cf.years = $e, cf.humanize = dd, cf.toISOString = ed, cf.toString = ed, cf.toJSON = ed, cf.locale = Bb, cf.localeData = Cb, cf.toIsoString = u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ed), cf.lang = ne, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), W("x", Fd), W("X", Id), $("X", function (a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10))
        }), $("x", function (a, b, c) {
            c._d = new Date(r(a))
        }), a.version = "2.13.0", b(Ka), a.fn = De, a.min = Ma, a.max = Na, a.now = he, a.utc = h, a.unix = xc, a.months = Jc, a.isDate = d, a.locale = E, a.invalid = l, a.duration = db, a.isMoment = p, a.weekdays = Lc, a.parseZone = yc, a.localeData = H, a.isDuration = Pa, a.monthsShort = Kc, a.weekdaysMin = Nc, a.defineLocale = F, a.updateLocale = G, a.locales = I, a.weekdaysShort = Mc, a.normalizeUnits = K, a.relativeTimeThreshold = cd, a.prototype = De;
        var df = a;
        return df
    });
var entries = [],
    gibberish = ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
    list_items = $(".js-updates li"),
    initUpdates = function () {
        list_items.length && (createFakes(), fetchEntries(), window.updatesInterval = setInterval(function () {
            updateEntries(list_items), updateEntries(list_items)
        }, 50))
    },
    randomString = function (a, b, c) {
        for (var d = "", e = Math.floor(Math.random() * (b - a + 1)) + a; e > 0; e--) d += randomElement(gibberish);
        return -1 != d.indexOf("</") ? randomString(a, b, c) : d
    },
    randomElement = function (a) {
        return a[Math.floor(Math.random() * a.length)]
    },
    createFakes = function () {
        for (var a = 0; 5 > a; a++) {
            var b = list_items[a],
                c = '<h3 class="inline fade"><a href="#" class="underline">' + randomString(15, 40, gibberish) + "</a></h3> ",
                d = "<time>" + randomString(5, 6, gibberish) + "</time> ",
                e = "<span>" + randomString(5, 6, gibberish) + "</span>";
            b.innerHTML = c + d + e
        }
    },
    fetchEntries = function () {
        $.when($.ajax({
            url: "https://ajax.googleapis.com/ajax/services/feed/load",
            dataType: "jsonp",
            data: {
                v: "1.0",
                q: "http://feeds.feedburner.com/",
                num: 10
            }
        })).then(function (a, b) {
            var c = a[0].responseData.feed.entries,
                d = b[0].responseData.feed.entries;
            oak_entries.map(function (a) {
                a.source = ""
            }), c.map(function (a) {
                a.source = ""
            }), d.map(function (a) {
                a.source = ""
            }), entries = entries.concat(oak_entries).concat(c).concat(d), entries.map(function (a) {
                a.publishedDate = moment(a.publishedDate, ["YYYY-MM-DD HH:mm:ss ZZ", "ddd, DD MMM YYYY HH:mm:ss ZZ"])
            }), entries = entries.sort(function (a, b) {
                return b.publishedDate.unix() - a.publishedDate.unix()
            })
        })
    },
    replaceGibberish = function (a, b) {
        var c = a.text().split(""),
            b = b.split("");
        c.length > b.length ? c = c.slice(0, c.length - 1) : c.length < b.length && c.push(randomElement(gibberish));
        var d = c.map(function (a, b) {
            return gibberish.indexOf(a) > -1 ? b : void 0
        }).filter(function (a) {
            return void 0 != a
        });
        if (c.length == b.length) {
            var e = Math.floor(Math.random() * d.length),
                f = d[e],
                g = b[f];
            c[f] = g, d.splice(e, 1)
        }
        for (var h = 0; h < d.length; h++) c[d[h]] = gibberish[Math.floor(Math.random() * gibberish.length)];
        a.text(c.join(""))
    },
 updateEntries = function () {
        for (var a = !0, b = 0; b < list_items.length; b++) {
            var c = $(list_items[b]),
                d = c.find("h3").find("a");
            if (item_date = c.find("time"), item_source = c.find("span"), entries.length > 0) {
                var e = entries[b],
                    f = e.link,
                    g = e.title,
                    h = e.publishedDate.format("MMM DD"),
                    i = "— " + e.source;
                d.attr("href", f), "Oak" != e.source && d.attr("target", "_blank"), replaceGibberish(d, g), replaceGibberish(item_date, h), replaceGibberish(item_source, i), (d.text() != g || item_date.text() != h || item_source.text() != i) && (a = !1)
            } else replaceGibberish(d, d.text()), replaceGibberish(item_date, item_date.text()), replaceGibberish(item_source, item_source.text()), a = !1
        }
        a === !0 && clearInterval(window.updatesInterval)
    }, 
        
        /*  
    weather_items = $(".weather"),
    weather = "",
    gibberish = ["█", "▓", "▒", "░", "█", "▓", "▒", "░", "█", "▓", "▒", "░", "<", ">", "/"],
    initWeather = function () {
        weather_items.length && (createFakeWeather(), fetchWeather(), window.weatherInterval = setInterval(function () {
            updateWeather(weather_items)
        }, 50))
    },
    createFakeWeather = function () {
        weather_items.text(randomString(5, 5, gibberish))
    },
    fetchWeather = function () {
        $.when($.getJSON("https://api.forecast.io/forecast/43f19489529ed6c8a31a12b48fa82071/40.6776231,-73.9935831?exclude=hourly,minutely,daily,flags,alerts&callback=?")).then(function (a) {
            weather = a.currently.icon, weather = weather.indexOf("clear") > -1 ? "sunny" : weather.indexOf("cloud") > -1 ? "cloudy" : weather.indexOf("rain") > -1 ? "rainy" : weather.indexOf("snow") > -1 ? "snowy" : weather.indexOf("wind") > -1 ? "windy" : weather.indexOf("fog") > -1 ? "foggy" : "murky"
        })
    },
    replaceWeatherGibberish = function (a, b) {
        var c = a.text().split(""),
            b = b.split("");
        c.length > b.length ? c = c.slice(0, c.length - 1) : c.length < b.length && c.push(randomElement(gibberish));
        var d = c.map(function (a, b) {
            return gibberish.indexOf(a) > -1 ? b : void 0
        }).filter(function (a) {
            return void 0 != a
        });
        if (c.length == b.length) {
            var e = Math.floor(Math.random() * d.length),
                f = d[e],
                g = b[f];
            c[f] = g, d.splice(e, 1)
        }
        for (var h = 0; h < d.length; h++) c[d[h]] = gibberish[Math.floor(Math.random() * gibberish.length)];
        a.text(c.join(""))
    },
    updateWeather = function () {
        var a = !0;
        weather.length > 0 ? (replaceWeatherGibberish(weather_items, weather), weather_items.text() != weather && (a = !1)) : (replaceWeatherGibberish(weather_items, weather_items.text()), a = !1), a === !0 && clearInterval(window.weatherInterval)
    };*/
