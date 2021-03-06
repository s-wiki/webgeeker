window.Modernizr = function(a, b, c) {
        function d(a) {
            t.cssText = a
        }

        function e(a, b) {
            return d(x.join(a + ";") + (b || ""))
        }

        function f(a, b) {
            return typeof a === b
        }

        function g(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function h(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0
            }
            return !1
        }

        function i(a, b, d) {
            for (var e in a) {
                var g = b[a[e]];
                if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
            }
            return !1
        }

        function j(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + z.join(d + " ") + d).split(" ");
            return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
        }

        function k() {
            o.input = function(c) {
                for (var d = 0, e = c.length; e > d; d++) E[c[d]] = c[d] in u;
                return E.list && (E.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function(a) {
                for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
                return D
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var l, m, n = "2.7.1",
            o = {},
            p = !0,
            q = b.documentElement,
            r = "modernizr",
            s = b.createElement(r),
            t = s.style,
            u = b.createElement("input"),
            v = ":)",
            w = {}.toString,
            x = " -webkit- -moz- -o- -ms- ".split(" "),
            y = "Webkit Moz O ms",
            z = y.split(" "),
            A = y.toLowerCase().split(" "),
            B = {
                svg: "http://www.w3.org/2000/svg"
            },
            C = {},
            D = {},
            E = {},
            F = [],
            G = F.slice,
            H = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
            },
            I = function() {
                function a(a, e) {
                    e = e || b.createElement(d[a] || "div"), a = "on" + a;
                    var g = a in e;
                    return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
                }
                var d = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return a
            }(),
            J = {}.hasOwnProperty;
        m = f(J, "undefined") || f(J.call, "undefined") ? function(a, b) {
            return b in a && f(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return J.call(a, b)
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = G.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(G.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(G.call(arguments)))
                };
            return d
        }), C.flexbox = function() {
            return j("flexWrap")
        }, C.flexboxlegacy = function() {
            return j("boxDirection")
        }, C.canvas = function() {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, C.canvastext = function() {
            return !!o.canvas && !!f(b.createElement("canvas").getContext("2d").fillText, "function")
        }, C.webgl = function() {
            return !!a.WebGLRenderingContext
        }, C.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = 9 === a.offsetTop
            }), c
        }, C.geolocation = function() {
            return "geolocation" in navigator
        }, C.postmessage = function() {
            return !!a.postMessage
        }, C.websqldatabase = function() {
            return !!a.openDatabase
        }, C.indexedDB = function() {
            return !!j("indexedDB", a)
        }, C.hashchange = function() {
            return I("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
        }, C.history = function() {
            return !!a.history && !!history.pushState
        }, C.draganddrop = function() {
            var a = b.createElement("div");
            return "draggable" in a || "ondragstart" in a && "ondrop" in a
        }, C.websockets = function() {
            return "WebSocket" in a || "MozWebSocket" in a
        }, C.rgba = function() {
            return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
        }, C.hsla = function() {
            return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
        }, C.multiplebgs = function() {
            return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
        }, C.backgroundsize = function() {
            return j("backgroundSize")
        }, C.borderimage = function() {
            return j("borderImage")
        }, C.borderradius = function() {
            return j("borderRadius")
        }, C.boxshadow = function() {
            return j("boxShadow")
        }, C.textshadow = function() {
            return "" === b.createElement("div").style.textShadow
        }, C.opacity = function() {
            return e("opacity:.55"), /^0.55$/.test(t.opacity)
        }, C.cssanimations = function() {
            return j("animationName")
        }, C.csscolumns = function() {
            return j("columnCount")
        }, C.cssgradients = function() {
            var a = "background-image:",
                b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
        }, C.cssreflections = function() {
            return j("boxReflect")
        }, C.csstransforms = function() {
            return !!j("transform")
        }, C.csstransforms3d = function() {
            var a = !!j("perspective");
            return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
                a = 9 === b.offsetLeft && 3 === b.offsetHeight
            }), a
        }, C.csstransitions = function() {
            return j("transition")
        }, C.fontface = function() {
            var a;
            return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
                var e = b.getElementById("smodernizr"),
                    f = e.sheet || e.styleSheet,
                    g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
                a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
            }), a
        }, C.generatedcontent = function() {
            var a;
            return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = b.offsetHeight >= 3
            }), a
        }, C.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, C.localstorage = function() {
            try {
                return localStorage.setItem(r, r), localStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.sessionstorage = function() {
            try {
                return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
            } catch (a) {
                return !1
            }
        }, C.webworkers = function() {
            return !!a.Worker
        }, C.applicationcache = function() {
            return !!a.applicationCache
        }, C.svg = function() {
            return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
        }, C.inlinesvg = function() {
            var a = b.createElement("div");
            return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
        }, C.smil = function() {
            return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
        }, C.svgclippaths = function() {
            return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
        };
        for (var K in C) m(C, K) && (l = K.toLowerCase(), o[l] = C[K](), F.push((o[l] ? "" : "no-") + l));
        return o.input || k(), o.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) m(a, d) && o.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), o[a] !== c) return o;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
                }
                return o
            }, d(""), s = u = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() {
                    var a = s.elements;
                    return "string" == typeof a ? a.split(" ") : a
                }

                function e(a) {
                    var b = r[a[p]];
                    return b || (b = {}, q++, a[p] = q, r[q] = b), b
                }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? f(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function i(a) {
                    a || (a = b);
                    var d = e(a);
                    return s.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
                }
                var j, k, l = "3.7.0",
                    m = a.html5 || {},
                    n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    q = 0,
                    r = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                        }()
                    } catch (c) {
                        j = !0, k = !0
                    }
                }();
                var s = {
                    elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: l,
                    shivCSS: m.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: m.shivMethods !== !1,
                    type: "default",
                    shivDocument: i,
                    createElement: f,
                    createDocumentFragment: g
                };
                a.html5 = s, i(b)
            }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.hasEvent = I, o.testProp = function(a) {
                return h([a])
            }, o.testAllProps = j, o.testStyles = H, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == q.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function() {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && o(function() {
                        v.removeChild(l)
                    }, 50);
                    for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
                }
            }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, q)
            }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) {
            return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
        }

        function k() {
            var a = m;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function(a) {
                return "[object Array]" == q.call(a)
            },
            z = [],
            A = {},
            B = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            };
        m = function(a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = {
                        url: f,
                        origUrl: f,
                        prefixes: a
                    };
                for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; e > c; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function() {
                                    var b, c = 0;
                                    for (b in a) a.hasOwnProperty(b) && c++;
                                    return c
                                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function(a, b) {
            B[a] = b
        }, m.addFilter = function(a) {
            z.push(a)
        }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
            b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
                !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
            }, o(function() {
                k || (k = 1, c(1))
            }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(a) {
        a.Slider = function(b, c) {
            this.$el = a(c), this._init(b)
        }, a.Slider.defaults = {
            current: 0,
            bgincrement: 50,
            autoplay: !1,
            interval: 4e3
        }, a.Slider.prototype = {
            _init: function(b) {
                this.options = a.extend(!0, {}, a.Slider.defaults, b), this.$slides = this.$el.children("div.da-slide"), this.slidesCount = this.$slides.length, this.current = this.options.current, (this.current < 0 || this.current >= this.slidesCount) && (this.current = 0), this.$slides.eq(this.current).addClass("da-slide-current");
                for (var c = a('<nav class="da-dots"/>'), d = 0; d < this.slidesCount; ++d) c.append("<span/>");
                c.appendTo(this.$el), this.$pages = this.$el.find("nav.da-dots > span"), this.$navNext = this.$el.find("span.da-arrows-next"), this.$navPrev = this.$el.find("span.da-arrows-prev"), this.isAnimating = !1, this.bgpositer = 0, this.cssAnimations = Modernizr.cssanimations, this.cssTransitions = Modernizr.csstransitions, this.cssAnimations && this.cssAnimations || this.$el.addClass("da-slider-fb"), this._updatePage(), this._loadEvents(), this.options.autoplay && this._startSlideshow()
            },
            _navigate: function(a, b) {
                var c, d = this.$slides.eq(this.current),
                    e = this;
                if (this.current === a || this.isAnimating) return !1;
                this.isAnimating = !0;
                var f, g, h;
                if (h = b ? b : a > this.current ? "next" : "prev", this.cssAnimations && this.cssAnimations && ("next" === h ? (f = "da-slide-toleft", g = "da-slide-fromright", ++this.bgpositer) : (f = "da-slide-toright", g = "da-slide-fromleft", --this.bgpositer), this.$el.css("background-position", this.bgpositer * this.options.bgincrement + "% 0%")), this.current = a, c = this.$slides.eq(this.current), this.cssAnimations && this.cssAnimations) {
                    var i = "da-slide-toleft da-slide-toright da-slide-fromleft da-slide-fromright";
                    d.removeClass(i), c.removeClass(i), d.addClass(f), c.addClass(g), d.removeClass("da-slide-current"), c.addClass("da-slide-current")
                }
                this.cssAnimations && this.cssAnimations || (c.css("left", "next" === h ? "100%" : "-100%").stop().animate({
                    left: "0%"
                }, 1e3, function() {
                    e.isAnimating = !1
                }), d.stop().animate({
                    left: "next" === h ? "-100%" : "100%"
                }, 1e3, function() {
                    d.removeClass("da-slide-current")
                })), this._updatePage()
            },
            _updatePage: function() {
                this.$pages.removeClass("da-dots-current"), this.$pages.eq(this.current).addClass("da-dots-current")
            },
            _startSlideshow: function() {
                var a = this;
                this.slideshow = setTimeout(function() {
                    var b = b = a.current < a.slidesCount - 1 ? a.current + 1 : 0;
                    a._navigate(b, "next"), a.options.autoplay && a._startSlideshow()
                }, this.options.interval)
            },
            page: function(a) {
                return a >= this.slidesCount || 0 > a ? !1 : (this.options.autoplay && (clearTimeout(this.slideshow), this.options.autoplay = !1), void this._navigate(a))
            },
            _loadEvents: function() {
                var b = this;
                this.$pages.on("click.cslider", function() {
                    return b.page(a(this).index()), !1
                }), this.$navNext.on("click.cslider", function() {
                    b.options.autoplay && (clearTimeout(b.slideshow), b.options.autoplay = !1);
                    var a = a = b.current < b.slidesCount - 1 ? b.current + 1 : 0;
                    return b._navigate(a, "next"), !1
                }), this.$navPrev.on("click.cslider", function() {
                    b.options.autoplay && (clearTimeout(b.slideshow), b.options.autoplay = !1);
                    var a = a = b.current > 0 ? b.current - 1 : b.slidesCount - 1;
                    return b._navigate(a, "prev"), !1
                }), this.cssTransitions && (this.options.bgincrement ? this.$el.on("webkitTransitionEnd.cslider transitionend.cslider OTransitionEnd.cslider", function(a) {
                    a.target.id === b.$el.attr("id") && (b.isAnimating = !1)
                }) : this.$el.on("webkitAnimationEnd.cslider animationend.cslider OAnimationEnd.cslider", function(a) {
                    ("toRightAnim4" === a.originalEvent.animationName || "toLeftAnim4" === a.originalEvent.animationName) && (b.isAnimating = !1)
                }))
            }
        };
        var b = function(a) {
            this.console && console.error(a)
        };
        a.fn.cslider = function(c) {
            if ("string" == typeof c) {
                var d = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var e = a.data(this, "cslider");
                    return e ? a.isFunction(e[c]) && "_" !== c.charAt(0) ? void e[c].apply(e, d) : void b("no such method '" + c + "' for cslider instance") : void b("cannot call methods on cslider prior to initialization; attempted to call method '" + c + "'")
                })
            } else this.each(function() {
                var b = a.data(this, "cslider");
                b || a.data(this, "cslider", new a.Slider(c, this))
            });
            return this
        }
    }(jQuery),
    function() {
        var a, b = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        };
        a = function() {
            function a() {}
            return a.prototype.extend = function(a, b) {
                var c, d;
                for (c in a) d = a[c], null != d && (b[c] = d);
                return b
            }, a.prototype.isMobile = function(a) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
            }, a
        }(), this.WOW = function() {
            function c(a) {
                null == a && (a = {}), this.scrollCallback = b(this.scrollCallback, this), this.scrollHandler = b(this.scrollHandler, this), this.start = b(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults)
            }
            return c.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0
            }, c.prototype.init = function() {
                var a;
                return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
            }, c.prototype.start = function() {
                var a, b, c, d;
                if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                    if (this.disabled()) return this.resetStyle();
                    for (d = this.boxes, b = 0, c = d.length; c > b; b++) a = d[b], this.applyStyle(a, !0);
                    return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                }
            }, c.prototype.stop = function() {
                return window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
            }, c.prototype.show = function(a) {
                return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass
            }, c.prototype.applyStyle = function(a, b) {
                var c, d, e;
                return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), a.setAttribute("style", this.customStyle(b, d, c, e))
            }, c.prototype.resetStyle = function() {
                var a, b, c, d, e;
                for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.setAttribute("style", "visibility: visible;"));
                return e
            }, c.prototype.customStyle = function(a, b, c, d) {
                var e;
                return e = a ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;", b && (e += "-webkit-animation-duration: " + b + "; -moz-animation-duration: " + b + "; animation-duration: " + b + ";"), c && (e += "-webkit-animation-delay: " + c + "; -moz-animation-delay: " + c + "; animation-delay: " + c + ";"), d && (e += "-webkit-animation-iteration-count: " + d + "; -moz-animation-iteration-count: " + d + "; animation-iteration-count: " + d + ";"), e
            }, c.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, c.prototype.scrollCallback = function() {
                var a;
                return this.scrolled && (this.scrolled = !1, this.boxes = function() {
                    var b, c, d, e;
                    for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
                    return e
                }.call(this), !this.boxes.length) ? this.stop() : void 0
            }, c.prototype.offsetTop = function(a) {
                var b;
                for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
                return b
            }, c.prototype.isVisible = function(a) {
                var b, c, d, e, f;
                return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + this.element.clientHeight - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
            }, c.prototype.util = function() {
                return this._util || (this._util = new a)
            }, c.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, c
        }()
    }.call(this),
    function(a, b, c, d) {
        var e = a(d),
            f = "waypoint.reached",
            g = function(a, c) {
                a.element.trigger(f, c), a.options.triggerOnce && a.element[b]("destroy")
            },
            h = function(a, b) {
                if (!b) return -1;
                for (var c = b.waypoints.length - 1; c >= 0 && b.waypoints[c].element[0] !== a[0];) c -= 1;
                return c
            },
            i = [],
            j = function(b) {
                a.extend(this, {
                    element: a(b),
                    oldScroll: 0,
                    waypoints: [],
                    didScroll: !1,
                    didResize: !1,
                    doScroll: a.proxy(function() {
                        var b = this.element.scrollTop(),
                            d = b > this.oldScroll,
                            e = this,
                            f = a.grep(this.waypoints, function(a) {
                                return d ? a.offset > e.oldScroll && a.offset <= b : a.offset <= e.oldScroll && a.offset > b
                            }),
                            h = f.length;
                        this.oldScroll && b || a[c]("refresh"), this.oldScroll = b, h && (d || f.reverse(), a.each(f, function(a, b) {
                            (b.options.continuous || a === h - 1) && g(b, [d ? "down" : "up"])
                        }))
                    }, this)
                }), a(b).bind("scroll.waypoints", a.proxy(function() {
                    this.didScroll || (this.didScroll = !0, d.setTimeout(a.proxy(function() {
                        this.doScroll(), this.didScroll = !1
                    }, this), a[c].settings.scrollThrottle))
                }, this)).bind("resize.waypoints", a.proxy(function() {
                    this.didResize || (this.didResize = !0, d.setTimeout(a.proxy(function() {
                        a[c]("refresh"), this.didResize = !1
                    }, this), a[c].settings.resizeThrottle))
                }, this)), e.load(a.proxy(function() {
                    this.doScroll()
                }, this))
            },
            k = function(b) {
                var c = null;
                return a.each(i, function(a, d) {
                    return d.element[0] === b ? (c = d, !1) : void 0
                }), c
            },
            l = {
                init: function(d, e) {
                    return this.each(function() {
                        var g, l = a.fn[b].defaults.context,
                            m = a(this);
                        e && e.context && (l = e.context), a.isWindow(l) || (l = m.closest(l)[0]), g = k(l), g || (g = new j(l), i.push(g));
                        var n = h(m, g),
                            o = 0 > n ? a.fn[b].defaults : g.waypoints[n].options,
                            p = a.extend({}, o, e);
                        p.offset = "bottom-in-view" === p.offset ? function() {
                            var b = a.isWindow(l) ? a[c]("viewportHeight") : a(l).height();
                            return b - a(this).outerHeight()
                        } : p.offset, 0 > n ? g.waypoints.push({
                            element: m,
                            offset: null,
                            options: p
                        }) : g.waypoints[n].options = p, d && m.bind(f, d), e && e.handler && m.bind(f, e.handler)
                    }), a[c]("refresh"), this
                },
                remove: function() {
                    return this.each(function(b, c) {
                        var d = a(c);
                        a.each(i, function(a, b) {
                            var c = h(d, b);
                            c >= 0 && (b.waypoints.splice(c, 1), b.waypoints.length || (b.element.unbind("scroll.waypoints resize.waypoints"), i.splice(a, 1)))
                        })
                    })
                },
                destroy: function() {
                    return this.unbind(f)[b]("remove")
                }
            },
            m = {
                refresh: function() {
                    a.each(i, function(b, d) {
                        var e = a.isWindow(d.element[0]),
                            f = e ? 0 : d.element.offset().top,
                            h = e ? a[c]("viewportHeight") : d.element.height(),
                            i = e ? 0 : d.element.scrollTop();
                        a.each(d.waypoints, function(a, b) {
                            if (b) {
                                var c = b.options.offset,
                                    e = b.offset;
                                if ("function" == typeof b.options.offset) c = b.options.offset.apply(b.element);
                                else if ("string" == typeof b.options.offset) {
                                    var j = parseFloat(b.options.offset);
                                    c = b.options.offset.indexOf("%") ? Math.ceil(h * (j / 100)) : j
                                }
                                b.offset = b.element.offset().top - f + i - c, b.options.onlyOnScroll || (null !== e && d.oldScroll > e && d.oldScroll <= b.offset ? g(b, ["up"]) : null !== e && d.oldScroll < e && d.oldScroll >= b.offset ? g(b, ["down"]) : !e && d.element.scrollTop() > b.offset && g(b, ["down"]))
                            }
                        }), d.waypoints.sort(function(a, b) {
                            return a.offset - b.offset
                        })
                    })
                },
                viewportHeight: function() {
                    return d.innerHeight ? d.innerHeight : e.height()
                },
                aggregate: function() {
                    var b = a();
                    return a.each(i, function(c, d) {
                        a.each(d.waypoints, function(a, c) {
                            b = b.add(c.element)
                        })
                    }), b
                }
            };
        a.fn[b] = function(c) {
            return l[c] ? l[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof c && c ? "object" == typeof c ? l.init.apply(this, [null, c]) : void a.error("Method " + c + " does not exist on jQuery " + b) : l.init.apply(this, arguments)
        }, a.fn[b].defaults = {
            continuous: !0,
            offset: 0,
            triggerOnce: !1,
            context: d
        }, a[c] = function(a) {
            return m[a] ? m[a].apply(this) : m.aggregate()
        }, a[c].settings = {
            resizeThrottle: 200,
            scrollThrottle: 100
        }, e.load(function() {
            a[c]("refresh")
        })
    }(jQuery, "waypoint", "waypoints", window), jQuery(document).ready(function(a) {
        function b(b) {
            var c = a("#skill").offset().top;
            if (b >= c && g) {
                for (var d = a(".skill-width"), e = d.length - 1; e >= 0; e--) a(d[e]).css("width", a(d[e]).data("width") + "%");
                var f = 0,
                    h = 0,
                    i = 0,
                    j = 0,
                    k = 0,
                    l = setInterval(function() {
                        a(d[0]).next(".width-value").text(f + "%"), f++, f == a(d[0]).data("width") && clearInterval(l)
                    }, 20),
                    m = setInterval(function() {
                        a(d[1]).next(".width-value").text(h + "%"), h++, h == a(d[1]).data("width") && clearInterval(m)
                    }, 20),
                    n = setInterval(function() {
                        a(d[2]).next(".width-value").text(i + "%"), i++, i == a(d[2]).data("width") && clearInterval(n)
                    }, 20),
                    o = setInterval(function() {
                        a(d[3]).next(".width-value").text(j + "%"), j++, j == a(d[3]).data("width") && clearInterval(o)
                    }, 20),
                    p = setInterval(function() {
                        a(d[4]).next(".width-value").text(k + "%"), k++, k == a(d[4]).data("width") && clearInterval(p)
                    }, 20);
                g = !1
            }
        }

        function c(a, b) {
            a.clearRect(0, 0, 200, 50), a.beginPath(), a.lineWidth = 10, a.arc(100, -80, 120, 2 * Math.PI, Math.PI * b, !0), a.strokeStyle = "#0084BD", a.stroke()
        }

        function d() {
            a("#my_profile").offset().top;
            h && (a(".profile-line-1").animate({
                height: "300"
            }, 800, function() {
                a(".profile-avatar").show().addClass("animated bounceIn"), a(".profile-text").show().addClass("animated bounceIn"), a(".profile-avatar").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    a(".profile-smile").show();
                    var b = a("canvas")[0];
                    b = b.getContext("2d");
                    var d = 2,
                        e = setInterval(function() {
                            c(b, d), d -= .01, 0 >= d && clearInterval(e)
                        }, 10);
                    a(".profile-line-2").animate({
                        height: "300"
                    }, 800)
                })
            }), h = !1)
        }
        a("#da-slider").cslider({
            autoplay: !0,
            bgincrement: 450
        }), a(".motto-scroll").find(".motto-inner").width(a(window).width()), setInterval(function() {
            a(".motto-scroll").animate({
                left: -a(".motto-scroll").find(".motto-inner").eq(0).outerWidth()
            }, 1e3, function() {
                var b = a(".motto-scroll").find(".motto-inner").eq(0);
                a(".motto-scroll").append(b.clone()), b.remove(), a(".motto-scroll").css("left", "0px")
            })
        }, 5e3), a(".footer-name span").click(function() {
            a(".footer-icon").toggle(), a("html, body").stop().animate({
                scrollTop: a(".footer-icon").offset().top
            }, 1e3, "swing")
        }), a(".footer-icon a").click(function() {
            a("#my_profile").show(), d()
        }), (new WOW).init(), a(".smoothscroll").on("click", function(b) {
            b.preventDefault();
            var c = this.hash,
                d = a(c);
            a("html, body").stop().animate({
                scrollTop: d.offset().top
            }, 600, "swing", function() {
                window.location.hash = c
            })
        });
        var e = a("section"),
            f = a("#nav-wrap a");
        e.waypoint({
            handler: function(b, c) {
                var d;
                d = a(this), "up" === c && (d = d.prevAll("section").eq(0));
                var e = a('#nav-wrap a[href="#' + d.attr("id") + '"]');
                f.parent().removeClass("current"), e.parent().addClass("current")
            },
            offset: "35%"
        }), a("section").not("#contact").css({
            height: a(window).height()
        }), a("#contact").css({
            height: a(window).height() - 48
        }), a("#my_profile").css({
            height: a(window).height()
        });
        var g = !0,
            h = !0;
        a(window).on("scroll", function(c) {
            c.preventDefault();
            var d = a("#home").height(),
                e = a(window).scrollTop();
            b(e);
            var f = a("#nav-wrap");
            e > .2 * d && d > e && a(window).outerWidth() > 768 ? f.fadeOut("fast") : .2 * d > e ? f.removeClass("opaque").fadeIn("fast") : f.addClass("opaque").fadeIn("fast")
        }), a(window).on("mousewheel DOMMouseScroll", function(b) {
            b.preventDefault();
            var c = b.originalEvent,
                d = c.wheelDelta || -c.detail,
                e = 0 > d ? !0 : !1;
            e ? a("#nav li").filter(".current").next("li").find("a").click() : a("#nav li").filter(".current").prev("li").find("a").click()
        })
    });