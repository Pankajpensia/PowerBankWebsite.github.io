(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-AboutUs-AboutUs~pages-index-index~pages-rule-rule"], {
        "05b3": function(e, t, a) {
            "use strict";
            a("7a82");
            var r = a("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a("d3b7"), a("159b"), a("14d9"), a("ac1f"), a("a434"), a("c975");
            var n = r(a("bebf")),
                s = r(a("7de9")),
                i = {
                    name: "wxParse",
                    props: {
                        userSelect: {
                            type: String,
                            default: "text"
                        },
                        imgOptions: {
                            type: [Object, Boolean],
                            default: function() {
                                return {
                                    loop: !1,
                                    indicator: "number",
                                    longPressActions: !1
                                }
                            }
                        },
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        className: {
                            type: String,
                            default: ""
                        },
                        content: {
                            type: String,
                            default: ""
                        },
                        noData: {
                            type: String,
                            default: ""
                        },
                        startHandler: {
                            type: Function,
                            default: function() {
                                return function(e) {
                                    e.attr.class = null, e.attr.style = null
                                }
                            }
                        },
                        endHandler: {
                            type: Function,
                            default: function() {
                                return function(e) {
                                    e = e
                                }
                            }
                        },
                        charsHandler: {
                            type: Function,
                            default: function() {
                                return function(e) {
                                    e = e
                                }
                            }
                        },
                        imageProp: {
                            type: Object,
                            default: function() {
                                return {
                                    mode: "aspectFit",
                                    padding: 0,
                                    lazyLoad: !1,
                                    domain: ""
                                }
                            }
                        }
                    },
                    components: {
                        wxParseTemplate: s.default
                    },
                    data: function() {
                        return {
                            nodes: {},
                            imageUrls: [],
                            wxParseWidth: {
                                value: 0
                            }
                        }
                    },
                    computed: {},
                    mounted: function() {
                        this.setHtml()
                    },
                    methods: {
                        setHtml: function() {
                            var e = this;
                            this.getWidth().then((function(t) {
                                e.wxParseWidth.value = t
                            }));
                            var t = this.content,
                                a = this.noData,
                                r = this.imageProp,
                                s = this.startHandler,
                                i = this.endHandler,
                                l = this.charsHandler,
                                o = t || a,
                                d = {
                                    start: s,
                                    end: i,
                                    chars: l
                                },
                                c = (0, n.default)(o, d, r, this);
                            this.imageUrls = c.imageUrls, this.nodes = [], c.nodes.forEach((function(t) {
                                setTimeout((function() {
                                    t.node && e.nodes.push(t)
                                }), 0)
                            }))
                        },
                        getWidth: function() {
                            var e = this;
                            return new Promise((function(t, a) {
                                uni.createSelectorQuery().in(e).select(".wxParse").fields({
                                    size: !0,
                                    scrollOffset: !0
                                }, (function(e) {
                                    t(e.width)
                                })).exec()
                            }))
                        },
                        navigate: function(e, t, a) {
                            console.log(e, a), this.$emit("navigate", e, t)
                        },
                        preview: function(e, t) {
                            this.imageUrls.length && "boolean" !== typeof this.imgOptions && uni.previewImage({
                                current: e,
                                urls: this.imageUrls,
                                loop: this.imgOptions.loop,
                                indicator: this.imgOptions.indicator,
                                longPressActions: this.imgOptions.longPressActions
                            }), this.$emit("preview", e, t)
                        },
                        removeImageUrl: function(e) {
                            var t = this.imageUrls;
                            t.splice(t.indexOf(e), 1)
                        }
                    },
                    provide: function() {
                        return {
                            parseWidth: this.wxParseWidth,
                            parseSelect: this.userSelect
                        }
                    },
                    watch: {
                        content: function(e) {
                            this.setHtml()
                        }
                    }
                };
            t.default = i
        },
        "124e": function(e, t, a) {
            var r = a("1bfa");
            r.__esModule && (r = r.default), "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var n = a("4f06").default;
            n("6a68db5a", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "1a95": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("5bf8"),
                n = a("80ff");
            for (var s in n)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            var i = a("f0c5"),
                l = Object(i["a"])(n["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], void 0);
            t["default"] = l.exports
        },
        "1bfa": function(e, t, a) {
            var r = a("24fb");
            t = r(!1), t.push([e.i, "/**\r\n * author: Di (微信小程序开发工程师)\r\n * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)\r\n *         垂直微信小程序开发交流社区\r\n *\r\n * github地址: https://github.com/icindy/wxParse\r\n *\r\n * for: 微信小程序富文本解析\r\n * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184\r\n */\r\n/**\r\n * 请在全局下引入该文件，@import '/static/wxParse.css';\r\n */.wxParse[data-v-31d3609f]{-webkit-user-select:none;user-select:none;width:100%;font-family:Helvetica,PingFangSC,Microsoft Yahei,微软雅黑,Arial,sans-serif;color:#333;line-height:1.5;font-size:1em;text-align:justify/* //左右两端对齐 */}.wxParse uni-view[data-v-31d3609f],.wxParse uni-view[data-v-31d3609f]{word-break:break-word}.wxParse .p[data-v-31d3609f]{padding-bottom:.5em;clear:both\r\n\t/* letter-spacing: 0;//字间距 */}.wxParse .inline[data-v-31d3609f]{display:inline;margin:0;padding:0}.wxParse .div[data-v-31d3609f]{margin:0;padding:0;display:block}.wxParse .h1[data-v-31d3609f]{font-size:2em;line-height:1.2em;margin:.67em 0}.wxParse .h2[data-v-31d3609f]{font-size:1.5em;margin:.83em 0}.wxParse .h3[data-v-31d3609f]{font-size:1.17em;margin:1em 0}.wxParse .h4[data-v-31d3609f]{margin:1.33em 0}.wxParse .h5[data-v-31d3609f]{font-size:.83em;margin:1.67em 0}.wxParse .h6[data-v-31d3609f]{font-size:.83em;margin:1.67em 0}.wxParse .h1[data-v-31d3609f],\r\n.wxParse .h2[data-v-31d3609f],\r\n.wxParse .h3[data-v-31d3609f],\r\n.wxParse .h4[data-v-31d3609f],\r\n.wxParse .h5[data-v-31d3609f],\r\n.wxParse .h6[data-v-31d3609f],\r\n.wxParse .b[data-v-31d3609f],\r\n.wxParse .strong[data-v-31d3609f]{font-weight:bolder}.wxParse .i[data-v-31d3609f],\r\n.wxParse .cite[data-v-31d3609f],\r\n.wxParse .em[data-v-31d3609f],\r\n.wxParse .var[data-v-31d3609f],\r\n.wxParse .address[data-v-31d3609f]{font-style:italic}.wxParse .spaceshow[data-v-31d3609f]{white-space:pre}.wxParse .pre[data-v-31d3609f],\r\n.wxParse .tt[data-v-31d3609f],\r\n.wxParse .code[data-v-31d3609f],\r\n.wxParse .kbd[data-v-31d3609f],\r\n.wxParse .samp[data-v-31d3609f]{font-family:monospace}.wxParse .pre[data-v-31d3609f]{overflow:auto;background:#f5f5f5;padding:%?16?%;white-space:pre;margin:1em %?0?%;font-size:%?24?%}.wxParse .code[data-v-31d3609f]{overflow:auto;padding:%?16?%;white-space:pre;margin:1em %?0?%;background:#f5f5f5;font-size:%?24?%}.wxParse .big[data-v-31d3609f]{font-size:1.17em}.wxParse .small[data-v-31d3609f],\r\n.wxParse .sub[data-v-31d3609f],\r\n.wxParse .sup[data-v-31d3609f]{font-size:.83em}.wxParse .sub[data-v-31d3609f]{vertical-align:sub}.wxParse .sup[data-v-31d3609f]{vertical-align:super}.wxParse .s[data-v-31d3609f],\r\n.wxParse .strike[data-v-31d3609f],\r\n.wxParse .del[data-v-31d3609f]{text-decoration:line-through}.wxParse .strong[data-v-31d3609f],\r\n.wxParse .text[data-v-31d3609f],\r\n.wxParse .span[data-v-31d3609f],\r\n.wxParse .s[data-v-31d3609f]{display:inline}.wxParse .a[data-v-31d3609f]{color:#00bfff}.wxParse .video[data-v-31d3609f]{text-align:center;margin:%?22?% 0}.wxParse .video-video[data-v-31d3609f]{width:100%}.wxParse .uni-image[data-v-31d3609f]{max-width:100%}.wxParse .img[data-v-31d3609f]{display:block;max-width:100%;margin-bottom:0;/* //与p标签底部padding同时修改 */overflow:hidden}.wxParse .blockquote[data-v-31d3609f]{margin:%?10?% 0;padding:%?22?% 0 %?22?% %?22?%;font-family:Courier,Calibri,宋体;background:#f5f5f5;border-left:%?6?% solid #dbdbdb}.wxParse .blockquote .p[data-v-31d3609f]{margin:0}.wxParse .ul[data-v-31d3609f], .wxParse .ol[data-v-31d3609f]{display:block;margin:1em 0;padding-left:2em}.wxParse .ol[data-v-31d3609f]{list-style-type:disc}.wxParse .ol[data-v-31d3609f]{list-style-type:decimal}.wxParse .ol>weixin-parse-template[data-v-31d3609f],.wxParse .ul>weixin-parse-template[data-v-31d3609f]{display:list-item;align-items:baseline;text-align:match-parent}.wxParse .ol>.li[data-v-31d3609f],.wxParse .ul>.li[data-v-31d3609f]{display:list-item;align-items:baseline;text-align:match-parent}.wxParse .ul .ul[data-v-31d3609f], .wxParse .ol .ul[data-v-31d3609f]{list-style-type:circle}.wxParse .ol .ol .ul[data-v-31d3609f], .wxParse .ol .ul .ul[data-v-31d3609f], .wxParse .ul .ol .ul[data-v-31d3609f], .wxParse .ul .ul .ul[data-v-31d3609f]{list-style-type:square}.wxParse .u[data-v-31d3609f]{text-decoration:underline}.wxParse .hide[data-v-31d3609f]{display:none}.wxParse .del[data-v-31d3609f]{display:inline}.wxParse .figure[data-v-31d3609f]{overflow:hidden}.wxParse .tablebox[data-v-31d3609f]{overflow:auto;background-color:#f5f5f5;background:#f5f5f5;font-size:13px;padding:8px}.wxParse .table .table[data-v-31d3609f],.wxParse .table[data-v-31d3609f]{border-collapse:collapse;box-sizing:border-box;\r\n\t/* 内边框 */\r\n\t/* width: 100%; */overflow:auto;white-space:pre}.wxParse .tbody[data-v-31d3609f]{border-collapse:collapse;box-sizing:border-box;\r\n\t/* 内边框 */border:1px solid #dadada}.wxParse .table  .thead[data-v-31d3609f], .wxParse  .table .tfoot[data-v-31d3609f], .wxParse  .table .th[data-v-31d3609f]{border-collapse:collapse;box-sizing:border-box;background:#ececec;font-weight:40}.wxParse  .table .tr[data-v-31d3609f]{border-collapse:collapse;box-sizing:border-box;\r\n\t/* border: 2px solid #F0AD4E; */overflow:auto}.wxParse  .table .th[data-v-31d3609f],\r\n.wxParse  .table .td[data-v-31d3609f]{border-collapse:collapse;box-sizing:border-box;border:%?2?% solid #dadada;overflow:auto}.wxParse .audio[data-v-31d3609f], .wxParse .uni-audio-default[data-v-31d3609f]{display:block}", ""]), e.exports = t
        },
        "1f88": function(e, t, a) {
            "use strict";
            a("7a82"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                name: "wxParseAudio",
                props: {
                    node: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                }
            };
            t.default = r
        },
        2356: function(e, t, a) {
            "use strict";
            var r = a("be98"),
                n = a.n(r);
            n.a
        },
        "2d40": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("65a6"),
                n = a("acdf");
            for (var s in n)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            a("512b");
            var i = a("f0c5"),
                l = Object(i["a"])(n["default"], r["b"], r["c"], !1, null, "31d3609f", null, !1, r["a"], void 0);
            t["default"] = l.exports
        },
        "2f5f": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("b789"),
                n = a("4a50");
            for (var s in n)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            var i = a("f0c5"),
                l = Object(i["a"])(n["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], void 0);
            t["default"] = l.exports
        },
        3310: function(e, t, a) {
            "use strict";
            a("7a82");
            var r = a("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(a("7de9")),
                s = r(a("2f5f")),
                i = r(a("6608")),
                l = r(a("c59d")),
                o = r(a("2d40")),
                d = {
                    name: "wxParseTemplate",
                    props: {
                        node: {}
                    },
                    components: {
                        wxParseTemplate: n.default,
                        wxParseImg: s.default,
                        wxParseVideo: i.default,
                        wxParseAudio: l.default,
                        wxParseTable: o.default
                    },
                    methods: {
                        wxParseATap: function(e, t) {
                            var a = t.currentTarget.dataset.href;
                            if (a) {
                                var r = this.$parent;
                                while (!r.preview || "function" !== typeof r.preview) r = r.$parent;
                                r.navigate(a, t, e)
                            }
                        }
                    }
                };
            t.default = d
        },
        4181: function(e, t, a) {
            "use strict";
            a("7a82"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a("14d9"), a("ac1f"), a("5319"), a("c975"), a("466d"), a("d9e2"), a("d401");
            var r = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z0-9_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                n = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
                s = /([a-zA-Z0-9_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

            function i(e) {
                for (var t = {}, a = e.split(","), r = 0; r < a.length; r += 1) t[a[r]] = !0;
                return t
            }
            var l = i("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),
                o = i("address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),
                d = i("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
                c = i("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
                u = i("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
            var f = function(e, t) {
                var a, i, f, p = e,
                    g = [];

                function x(e, a) {
                    var r;
                    if (a) {
                        for (a = a.toLowerCase(), r = g.length - 1; r >= 0; r -= 1)
                            if (g[r] === a) break
                    } else r = 0;
                    if (r >= 0) {
                        for (var n = g.length - 1; n >= r; n -= 1) t.end && t.end(g[n]);
                        g.length = r
                    }
                }

                function v(e, a, r, n) {
                    if (a = a.toLowerCase(), o[a])
                        while (g.last() && d[g.last()]) x(0, g.last());
                    if (c[a] && g.last() === a && x(0, a), n = l[a] || !!n, n || g.push(a), t.start) {
                        var i = [];
                        r.replace(s, (function(e, t) {
                            var a = arguments[2] || arguments[3] || arguments[4] || (u[t] ? t : "");
                            i.push({
                                name: t,
                                value: a,
                                escaped: a.replace(/(^|[^\\])"/g, '$1\\"')
                            })
                        })), t.start && t.start(a, i, n)
                    }
                }
                g.last = function() {
                    return g[g.length - 1]
                };
                while (e) {
                    if (i = !0, 0 === e.indexOf("</") ? (f = e.match(n), f && (e = e.substring(f[0].length), f[0].replace(n, x), i = !1)) : 0 === e.indexOf("<") && (f = e.match(r), f && (e = e.substring(f[0].length), f[0].replace(r, v), i = !1)), i) {
                        a = e.indexOf("<");
                        var h = "";
                        while (0 === a) h += "<", e = e.substring(1), a = e.indexOf("<");
                        h += a < 0 ? e : e.substring(0, a), e = a < 0 ? "" : e.substring(a), t.chars && t.chars(h)
                    }
                    if (e === p) throw new Error("Parse Error: ".concat(e));
                    p = e
                }
                x()
            };
            t.default = f
        },
        "4a50": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("fa8e"),
                n = a.n(r);
            for (var s in r)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return r[e]
                }))
            }(s);
            t["default"] = n.a
        },
        "512b": function(e, t, a) {
            "use strict";
            var r = a("124e"),
                n = a.n(r);
            n.a
        },
        "5bf8": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "c", (function() {
                return n
            })), a.d(t, "a", (function() {}));
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("v-uni-view", {
                        staticClass: "wxParse",
                        class: e.className,
                        style: "user-select:" + e.userSelect
                    }, [e._l(e.nodes, (function(t, r) {
                        return e.loading ? e._e() : [a("wxParseTemplate", {
                            key: r + "_0",
                            attrs: {
                                node: t
                            }
                        })]
                    }))], 2)
                },
                n = []
        },
        "65a6": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "c", (function() {
                return n
            })), a.d(t, "a", (function() {}));
            var r = function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "tablebox"
                    }, [t("v-uni-rich-text", {
                        class: this.node.classStr,
                        style: "user-select:" + this.parseSelect,
                        attrs: {
                            nodes: this.nodes
                        }
                    })], 1)
                },
                n = []
        },
        "65fc": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "c", (function() {
                return n
            })), a.d(t, "a", (function() {}));
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return "element" == e.node.node ? ["button" == e.node.tag ? a("v-uni-button", {
                        class: e.node.classStr,
                        style: e.node.styleStr,
                        attrs: {
                            type: "default",
                            size: "mini"
                        }
                    }, [a("wx-parse-template", {
                        attrs: {
                            node: e.node
                        }
                    })], 1) : "a" == e.node.tag ? a("v-uni-view", {
                        class: e.node.classStr,
                        staticStyle: {
                            display: "inline",
                            "border-bottom": "1px solid #555555"
                        },
                        style: e.node.styleStr,
                        attrs: {
                            "data-href": e.node.attr.href
                        },
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.wxParseATap(e.node.attr, t)
                            }
                        }
                    }, [e._l(e.node.nodes, (function(e, t) {
                        return [a("wx-parse-template", {
                            key: t + "_0",
                            attrs: {
                                node: e
                            }
                        })]
                    }))], 2) : "li" == e.node.tag ? a("v-uni-view", {
                        class: e.node.classStr,
                        style: e.node.styleStr
                    }, [e._l(e.node.nodes, (function(e, t) {
                        return [a("wx-parse-template", {
                            key: t + "_0",
                            attrs: {
                                node: e
                            }
                        })]
                    }))], 2) : "table" == e.node.tag ? a("wx-parse-table", {
                        class: e.node.classStr,
                        style: e.node.styleStr,
                        attrs: {
                            node: e.node
                        }
                    }) : "br" == e.node.tag ? a("br") : "video" == e.node.tag ? a("wx-parse-video", {
                        attrs: {
                            node: e.node
                        }
                    }) : "audio" == e.node.tag ? a("wx-parse-audio", {
                        attrs: {
                            node: e.node
                        }
                    }) : "img" == e.node.tag ? a("wx-parse-img", {
                        style: e.node.styleStr,
                        attrs: {
                            node: e.node
                        }
                    }) : "strong" == e.node.tag ? a("v-uni-view", {
                        class: e.node.classStr,
                        staticStyle: {
                            "font-weight": "700",
                            display: "inline"
                        },
                        style: e.node.styleStr
                    }, [e._l(e.node.nodes, (function(e, t) {
                        return [a("wx-parse-template", {
                            key: t + "_0",
                            attrs: {
                                node: e
                            }
                        })]
                    }))], 2) : "span" == e.node.tag ? a("v-uni-view", {
                        class: e.node.classStr,
                        staticStyle: {
                            display: "inline"
                        },
                        style: e.node.styleStr
                    }, [e._l(e.node.nodes, (function(e, t) {
                        return [a("wx-parse-template", {
                            key: t + "_0",
                            attrs: {
                                node: e
                            }
                        })]
                    }))], 2) : "em" == e.node.tag ? a("v-uni-view", {
                        class: e.node.classStr,
                        staticStyle: {
                            display: "inline",
                            "font-style": "italic"
                        },
                        style: e.node.styleStr
                    }, [e._l(e.node.nodes, (function(e, t) {
                        return [a("wx-parse-template", {
                            key: t + "_0",
                            attrs: {
                                node: e
                            }
                        })]
                    }))], 2) : a("v-uni-view", {
                        class: e.node.classStr,
                        style: e.node.styleStr
                    }, [e._l(e.node.nodes, (function(e, t) {
                        return [a("wx-parse-template", {
                            key: t + "_0",
                            attrs: {
                                node: e
                            }
                        })]
                    }))], 2)] : "text" == e.node.node ? [e._v(e._s(e.node.text))] : e._e()
                },
                n = []
        },
        6608: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("b395"),
                n = a("d8f8");
            for (var s in n)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            a("2356");
            var i = a("f0c5"),
                l = Object(i["a"])(n["default"], r["b"], r["c"], !1, null, "66d46ff4", null, !1, r["a"], void 0);
            t["default"] = l.exports
        },
        "6af6": function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "c", (function() {
                return n
            })), a.d(t, "a", (function() {}));
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("v-uni-audio", {
                        class: e.node.classStr,
                        style: e.node.styleStr,
                        attrs: {
                            id: e.node.attr.id,
                            src: e.node.attr.src,
                            loop: e.node.attr.loop,
                            poster: e.node.attr.poster,
                            name: e.node.attr.name,
                            author: e.node.attr.author,
                            controls: !0
                        }
                    })
                },
                n = []
        },
        "7de9": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("65fc"),
                n = a("b870");
            for (var s in n)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            var i = a("f0c5"),
                l = Object(i["a"])(n["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], void 0);
            t["default"] = l.exports
        },
        "80ff": function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("05b3"),
                n = a.n(r);
            for (var s in r)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return r[e]
                }))
            }(s);
            t["default"] = n.a
        },
        "89db": function(e, t, a) {
            "use strict";
            a("7a82");
            var r = a("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a("14d9");
            var n = r(a("b85c")),
                s = {
                    name: "wxParseTable",
                    props: {
                        node: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        }
                    },
                    inject: ["parseSelect"],
                    data: function() {
                        return {
                            nodes: []
                        }
                    },
                    mounted: function() {
                        this.nodes = this.loadNode([this.node])
                    },
                    methods: {
                        loadNode: function(e) {
                            console.log(e);
                            var t, a = [],
                                r = (0, n.default)(e);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var s = t.value;
                                    if ("element" == s.node) {
                                        var i = {
                                            name: s.tag,
                                            attrs: {
                                                class: s.classStr,
                                                style: s.styleStr
                                            },
                                            children: s.nodes ? this.loadNode(s.nodes) : []
                                        };
                                        a.push(i)
                                    } else "text" == s.node && a.push({
                                        type: "text",
                                        text: s.text
                                    })
                                }
                            } catch (l) {
                                r.e(l)
                            } finally {
                                r.f()
                            }
                            return a
                        }
                    }
                };
            t.default = s
        },
        9434: function(e, t, a) {
            "use strict";
            a("7a82"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a("ac1f"), a("5319"), a("00b4"), a("99af");
            var r = {
                strDiscode: function(e) {
                    return e = function(e) {
                        return e = e.replace(/&forall;|&#8704;|&#x2200;/g, "∀"), e = e.replace(/&part;|&#8706;|&#x2202;/g, "∂"), e = e.replace(/&exist;|&#8707;|&#x2203;/g, "∃"), e = e.replace(/&empty;|&#8709;|&#x2205;/g, "∅"), e = e.replace(/&nabla;|&#8711;|&#x2207;/g, "∇"), e = e.replace(/&isin;|&#8712;|&#x2208;/g, "∈"), e = e.replace(/&notin;|&#8713;|&#x2209;/g, "∉"), e = e.replace(/&ni;|&#8715;|&#x220b;/g, "∋"), e = e.replace(/&prod;|&#8719;|&#x220f;/g, "∏"), e = e.replace(/&sum;|&#8721;|&#x2211;/g, "∑"), e = e.replace(/&minus;|&#8722;|&#x2212;/g, "−"), e = e.replace(/&lowast;|&#8727;|&#x2217;/g, "∗"), e = e.replace(/&radic;|&#8730;|&#x221a;/g, "√"), e = e.replace(/&prop;|&#8733;|&#x221d;/g, "∝"), e = e.replace(/&infin;|&#8734;|&#x221e;/g, "∞"), e = e.replace(/&ang;|&#8736;|&#x2220;/g, "∠"), e = e.replace(/&and;|&#8743;|&#x2227;/g, "∧"), e = e.replace(/&or;|&#8744;|&#x2228;/g, "∨"), e = e.replace(/&cap;|&#8745;|&#x2229;/g, "∩"), e = e.replace(/&cup;|&#8746;|&#x222a;/g, "∪"), e = e.replace(/&int;|&#8747;|&#x222b;/g, "∫"), e = e.replace(/&there4;|&#8756;|&#x2234;/g, "∴"), e = e.replace(/&sim;|&#8764;|&#x223c;/g, "∼"), e = e.replace(/&cong;|&#8773;|&#x2245;/g, "≅"), e = e.replace(/&asymp;|&#8776;|&#x2248;/g, "≈"), e = e.replace(/&ne;|&#8800;|&#x2260;/g, "≠"), e = e.replace(/&le;|&#8804;|&#x2264;/g, "≤"), e = e.replace(/&ge;|&#8805;|&#x2265;/g, "≥"), e = e.replace(/&sub;|&#8834;|&#x2282;/g, "⊂"), e = e.replace(/&sup;|&#8835;|&#x2283;/g, "⊃"), e = e.replace(/&nsub;|&#8836;|&#x2284;/g, "⊄"), e = e.replace(/&sube;|&#8838;|&#x2286;/g, "⊆"), e = e.replace(/&supe;|&#8839;|&#x2287;/g, "⊇"), e = e.replace(/&oplus;|&#8853;|&#x2295;/g, "⊕"), e = e.replace(/&otimes;|&#8855;|&#x2297;/g, "⊗"), e = e.replace(/&perp;|&#8869;|&#x22a5;/g, "⊥"), e = e.replace(/&sdot;|&#8901;|&#x22c5;/g, "⋅"), e
                    }(e), e = function(e) {
                        return e = e.replace(/&Alpha;|&#913;|&#x391;/g, "Α"), e = e.replace(/&Beta;|&#914;|&#x392;/g, "Β"), e = e.replace(/&Gamma;|&#915;|&#x393;/g, "Γ"), e = e.replace(/&Delta;|&#916;|&#x394;/g, "Δ"), e = e.replace(/&Epsilon;|&#917;|&#x395;/g, "Ε"), e = e.replace(/&Zeta;|&#918;|&#x396;/g, "Ζ"), e = e.replace(/&Eta;|&#919;|&#x397;/g, "Η"), e = e.replace(/&Theta;|&#920;|&#x398;/g, "Θ"), e = e.replace(/&Iota;|&#921;|&#x399;/g, "Ι"), e = e.replace(/&Kappa;|&#922;|&#x39a;/g, "Κ"), e = e.replace(/&Lambda;|&#923;|&#x39b;/g, "Λ"), e = e.replace(/&Mu;|&#924;|&#x39c;/g, "Μ"), e = e.replace(/&Nu;|&#925;|&#x39d;/g, "Ν"), e = e.replace(/&Xi;|&#925;|&#x39d;/g, "Ν"), e = e.replace(/&Omicron;|&#927;|&#x39f;/g, "Ο"), e = e.replace(/&Pi;|&#928;|&#x3a0;/g, "Π"), e = e.replace(/&Rho;|&#929;|&#x3a1;/g, "Ρ"), e = e.replace(/&Sigma;|&#931;|&#x3a3;/g, "Σ"), e = e.replace(/&Tau;|&#932;|&#x3a4;/g, "Τ"), e = e.replace(/&Upsilon;|&#933;|&#x3a5;/g, "Υ"), e = e.replace(/&Phi;|&#934;|&#x3a6;/g, "Φ"), e = e.replace(/&Chi;|&#935;|&#x3a7;/g, "Χ"), e = e.replace(/&Psi;|&#936;|&#x3a8;/g, "Ψ"), e = e.replace(/&Omega;|&#937;|&#x3a9;/g, "Ω"), e = e.replace(/&alpha;|&#945;|&#x3b1;/g, "α"), e = e.replace(/&beta;|&#946;|&#x3b2;/g, "β"), e = e.replace(/&gamma;|&#947;|&#x3b3;/g, "γ"), e = e.replace(/&delta;|&#948;|&#x3b4;/g, "δ"), e = e.replace(/&epsilon;|&#949;|&#x3b5;/g, "ε"), e = e.replace(/&zeta;|&#950;|&#x3b6;/g, "ζ"), e = e.replace(/&eta;|&#951;|&#x3b7;/g, "η"), e = e.replace(/&theta;|&#952;|&#x3b8;/g, "θ"), e = e.replace(/&iota;|&#953;|&#x3b9;/g, "ι"), e = e.replace(/&kappa;|&#954;|&#x3ba;/g, "κ"), e = e.replace(/&lambda;|&#955;|&#x3bb;/g, "λ"), e = e.replace(/&mu;|&#956;|&#x3bc;/g, "μ"), e = e.replace(/&nu;|&#957;|&#x3bd;/g, "ν"), e = e.replace(/&xi;|&#958;|&#x3be;/g, "ξ"), e = e.replace(/&omicron;|&#959;|&#x3bf;/g, "ο"), e = e.replace(/&pi;|&#960;|&#x3c0;/g, "π"), e = e.replace(/&rho;|&#961;|&#x3c1;/g, "ρ"), e = e.replace(/&sigmaf;|&#962;|&#x3c2;/g, "ς"), e = e.replace(/&sigma;|&#963;|&#x3c3;/g, "σ"), e = e.replace(/&tau;|&#964;|&#x3c4;/g, "τ"), e = e.replace(/&upsilon;|&#965;|&#x3c5;/g, "υ"), e = e.replace(/&phi;|&#966;|&#x3c6;/g, "φ"), e = e.replace(/&chi;|&#967;|&#x3c7;/g, "χ"), e = e.replace(/&psi;|&#968;|&#x3c8;/g, "ψ"), e = e.replace(/&omega;|&#969;|&#x3c9;/g, "ω"), e = e.replace(/&thetasym;|&#977;|&#x3d1;/g, "ϑ"), e = e.replace(/&upsih;|&#978;|&#x3d2;/g, "ϒ"), e = e.replace(/&piv;|&#982;|&#x3d6;/g, "ϖ"), e = e.replace(/&middot;|&#183;|&#xb7;/g, "·"), e
                    }(e), e = function(e) {
                        return e = e.replace(/&nbsp;|&#32;|&#x20;/g, "&nbsp;"), e = e.replace(/&ensp;|&#8194;|&#x2002;/g, "&ensp;"), e = e.replace(/&#12288;|&#x3000;/g, "<span class='spaceshow'>　</span>"), e = e.replace(/&emsp;|&#8195;|&#x2003;/g, "&emsp;"), e = e.replace(/&quot;|&#34;|&#x22;/g, '"'), e = e.replace(/&apos;|&#39;|&#x27;/g, "&apos;"), e = e.replace(/&acute;|&#180;|&#xB4;/g, "´"), e = e.replace(/&times;|&#215;|&#xD7;/g, "×"), e = e.replace(/&divide;|&#247;|&#xF7;/g, "÷"), e = e.replace(/&amp;|&#38;|&#x26;/g, "&amp;"), e = e.replace(/&lt;|&#60;|&#x3c;/g, "&lt;"), e = e.replace(/&gt;|&#62;|&#x3e;/g, "&gt;"), e = e.replace(/&nbsp;|&#32;|&#x20;/g, "<span class='spaceshow'> </span>"), e = e.replace(/&ensp;|&#8194;|&#x2002;/g, "<span class='spaceshow'> </span>"), e = e.replace(/&#12288;|&#x3000;/g, "<span class='spaceshow'>　</span>"), e = e.replace(/&emsp;|&#8195;|&#x2003;/g, "<span class='spaceshow'> </span>"), e = e.replace(/&quot;|&#34;|&#x22;/g, '"'), e = e.replace(/&quot;|&#39;|&#x27;/g, "'"), e = e.replace(/&acute;|&#180;|&#xB4;/g, "´"), e = e.replace(/&times;|&#215;|&#xD7;/g, "×"), e = e.replace(/&divide;|&#247;|&#xF7;/g, "÷"), e = e.replace(/&amp;|&#38;|&#x26;/g, "&"), e = e.replace(/&lt;|&#60;|&#x3c;/g, "<"), e = e.replace(/&gt;|&#62;|&#x3e;/g, ">"), e
                    }(e), e = function(e) {
                        return e = e.replace(/&OElig;|&#338;|&#x152;/g, "Œ"), e = e.replace(/&oelig;|&#339;|&#x153;/g, "œ"), e = e.replace(/&Scaron;|&#352;|&#x160;/g, "Š"), e = e.replace(/&scaron;|&#353;|&#x161;/g, "š"), e = e.replace(/&Yuml;|&#376;|&#x178;/g, "Ÿ"), e = e.replace(/&fnof;|&#402;|&#x192;/g, "ƒ"), e = e.replace(/&circ;|&#710;|&#x2c6;/g, "ˆ"), e = e.replace(/&tilde;|&#732;|&#x2dc;/g, "˜"), e = e.replace(/&thinsp;|$#8201;|&#x2009;/g, "<span class='spaceshow'> </span>"), e = e.replace(/&zwnj;|&#8204;|&#x200C;/g, "<span class='spaceshow'>‌</span>"), e = e.replace(/&zwj;|$#8205;|&#x200D;/g, "<span class='spaceshow'>‍</span>"), e = e.replace(/&lrm;|$#8206;|&#x200E;/g, "<span class='spaceshow'>‎</span>"), e = e.replace(/&rlm;|&#8207;|&#x200F;/g, "<span class='spaceshow'>‏</span>"), e = e.replace(/&ndash;|&#8211;|&#x2013;/g, "–"), e = e.replace(/&mdash;|&#8212;|&#x2014;/g, "—"), e = e.replace(/&lsquo;|&#8216;|&#x2018;/g, "‘"), e = e.replace(/&rsquo;|&#8217;|&#x2019;/g, "’"), e = e.replace(/&sbquo;|&#8218;|&#x201a;/g, "‚"), e = e.replace(/&ldquo;|&#8220;|&#x201c;/g, "“"), e = e.replace(/&rdquo;|&#8221;|&#x201d;/g, "”"), e = e.replace(/&bdquo;|&#8222;|&#x201e;/g, "„"), e = e.replace(/&dagger;|&#8224;|&#x2020;/g, "†"), e = e.replace(/&Dagger;|&#8225;|&#x2021;/g, "‡"), e = e.replace(/&bull;|&#8226;|&#x2022;/g, "•"), e = e.replace(/&hellip;|&#8230;|&#x2026;/g, "…"), e = e.replace(/&permil;|&#8240;|&#x2030;/g, "‰"), e = e.replace(/&prime;|&#8242;|&#x2032;/g, "′"), e = e.replace(/&Prime;|&#8243;|&#x2033;/g, "″"), e = e.replace(/&lsaquo;|&#8249;|&#x2039;/g, "‹"), e = e.replace(/&rsaquo;|&#8250;|&#x203a;/g, "›"), e = e.replace(/&oline;|&#8254;|&#x203e;/g, "‾"), e = e.replace(/&euro;|&#8364;|&#x20ac;/g, "€"), e = e.replace(/&trade;|&#8482;|&#x2122;/g, "™"), e = e.replace(/&larr;|&#8592;|&#x2190;/g, "←"), e = e.replace(/&uarr;|&#8593;|&#x2191;/g, "↑"), e = e.replace(/&rarr;|&#8594;|&#x2192;/g, "→"), e = e.replace(/&darr;|&#8595;|&#x2193;/g, "↓"), e = e.replace(/&harr;|&#8596;|&#x2194;/g, "↔"), e = e.replace(/&crarr;|&#8629;|&#x21b5;/g, "↵"), e = e.replace(/&lceil;|&#8968;|&#x2308;/g, "⌈"), e = e.replace(/&rceil;|&#8969;|&#x2309;/g, "⌉"), e = e.replace(/&lfloor;|&#8970;|&#x230a;/g, "⌊"), e = e.replace(/&rfloor;|&#8971;|&#x230b;/g, "⌋"), e = e.replace(/&loz;|&#9674;|&#x25ca;/g, "◊"), e = e.replace(/&spades;|&#9824;|&#x2660;/g, "♠"), e = e.replace(/&clubs;|&#9827;|&#x2663;/g, "♣"), e = e.replace(/&hearts;|&#9829;|&#x2665;/g, "♥"), e = e.replace(/&diams;|&#9830;|&#x2666;/g, "♦"), e
                    }(e), e
                },
                urlToHttpUrl: function(e, t) {
                    return /^\/\//.test(e) ? "https:".concat(e) : /^\//.test(e) ? "https://".concat(t).concat(e) : e
                }
            };
            t.default = r
        },
        "9ea6": function(e, t, a) {
            "use strict";
            a("7a82"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                name: "wxParseVideo",
                props: {
                    node: {}
                },
                data: function() {
                    return {
                        playState: !0,
                        videoStyle: "width: 100%;"
                    }
                },
                methods: {
                    play: function() {
                        console.log("点击了video 播放"), this.playState = !this.playState
                    }
                },
                mounted: function() {
                    var e = this;
                    uni.$on("slideMenuShow", (function(t) {
                        console.log("捕获事件：" + t), "show" == t && e.playState && (e.playState = !1)
                    }))
                }
            };
            t.default = r
        },
        acdf: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("89db"),
                n = a.n(r);
            for (var s in r)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return r[e]
                }))
            }(s);
            t["default"] = n.a
        },
        b395: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "c", (function() {
                return n
            })), a.d(t, "a", (function() {}));
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("v-uni-view", {
                        on: {
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.play.apply(void 0, arguments)
                            }
                        }
                    }, [e.playState ? e._e() : a("v-uni-view", {
                        staticClass: "video-video",
                        class: e.node.classStr,
                        staticStyle: {
                            display: "inline-block",
                            margin: "auto",
                            "max-width": "100%"
                        },
                        style: e.node.styleStr
                    }, [a("v-uni-view", {
                        staticStyle: {
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            "flex-direction": "row",
                            "justify-content": "center",
                            "align-items": "center"
                        }
                    }, [a("v-uni-image", {
                        staticStyle: {
                            width: "20%"
                        },
                        attrs: {
                            src: "https://gwbj.tongwenkeji.com/html/static/play.png",
                            mode: "widthFix"
                        }
                    })], 1)], 1), e.playState ? a("v-uni-video", {
                        staticClass: "video-video",
                        class: e.node.classStr,
                        style: e.node.styleStr,
                        attrs: {
                            autoplay: !1,
                            src: e.node.attr.src
                        }
                    }) : e._e()], 1)
                },
                n = []
        },
        b789: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return r
            })), a.d(t, "c", (function() {
                return n
            })), a.d(t, "a", (function() {}));
            var r = function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("v-uni-image", {
                        class: e.node.classStr,
                        style: e.newStyleStr || e.node.styleStr,
                        attrs: {
                            mode: "widthFix",
                            "lazy-load": e.node.attr.lazyLoad,
                            "data-src": e.node.attr.src,
                            src: e.node.attr.src
                        },
                        on: {
                            load: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.wxParseImgLoad.apply(void 0, arguments)
                            },
                            click: function(t) {
                                arguments[0] = t = e.$handleEvent(t), e.wxParseImgTap.apply(void 0, arguments)
                            }
                        }
                    })
                },
                n = []
        },
        b85c: function(e, t, a) {
            "use strict";
            a("7a82"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var a = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!a) {
                    if (Array.isArray(e) || (a = (0, r.default)(e)) || t && e && "number" === typeof e.length) {
                        a && (e = a);
                        var n = 0,
                            s = function() {};
                        return {
                            s: s,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: s
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, l = !0,
                    o = !1;
                return {
                    s: function() {
                        a = a.call(e)
                    },
                    n: function() {
                        var e = a.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        o = !0, i = e
                    },
                    f: function() {
                        try {
                            l || null == a["return"] || a["return"]()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }, a("a4d3"), a("e01a"), a("d3b7"), a("d28b"), a("3ca3"), a("ddb0"), a("d9e2"), a("d401");
            var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a("06c5"))
        },
        b870: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("3310"),
                n = a.n(r);
            for (var s in r)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return r[e]
                }))
            }(s);
            t["default"] = n.a
        },
        be98: function(e, t, a) {
            var r = a("e5e6");
            r.__esModule && (r = r.default), "string" === typeof r && (r = [
                [e.i, r, ""]
            ]), r.locals && (e.exports = r.locals);
            var n = a("4f06").default;
            n("35d66653", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        bebf: function(e, t, a) {
            "use strict";
            a("7a82");
            var r = a("4ea4").default;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a("ac1f"), a("00b4"), a("4d63"), a("c607"), a("2c3e"), a("25f0"), a("5319"), a("13d5"), a("d3b7"), a("466d"), a("14d9"), a("159b"), a("b64b"), a("99af"), a("3c65"), a("498a");
            var n = r(a("9434")),
                s = r(a("4181"));

            function i(e) {
                for (var t = {}, a = e.split(","), r = 0; r < a.length; r += 1) t[a[r]] = !0;
                return t
            }
            var l = i("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),
                o = i("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
                d = i("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
            var c = function(e, t, a, r) {
                e = function(e) {
                    var t = /<body.*>([^]*)<\/body>/.test(e);
                    return t ? RegExp.$1 : e
                }(e), e = function(e) {
                    return e.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/<script[^]*<\/script>/gi, "").replace(/<style[^]*<\/style>/gi, "")
                }(e), e = n.default.strDiscode(e);
                var i = [],
                    c = {
                        nodes: [],
                        imageUrls: []
                    },
                    u = function() {
                        var e = {};
                        return wx.getSystemInfo({
                            success: function(t) {
                                e.width = t.windowWidth, e.height = t.windowHeight
                            }
                        }), e
                    }();

                function f(e) {
                    this.node = "element", this.tag = e, this.$screen = u
                }
                return (0, s.default)(e, {
                    start: function(e, r, s) {
                        var u = new f(e);
                        if (0 !== i.length) {
                            var p = i[0];
                            void 0 === p.nodes && (p.nodes = [])
                        }
                        if (l[e] ? u.tagType = "block" : o[e] ? u.tagType = "inline" : d[e] && (u.tagType = "closeSelf"), u.attr = r.reduce((function(e, t) {
                                var a = t.name,
                                    r = t.value;
                                return "class" === a && (u.classStr = r), "style" === a && (u.styleStr = r), r.match(/ /) && (r = r.split(" ")), e[a] ? Array.isArray(e[a]) ? e[a].push(r) : e[a] = [e[a], r] : e[a] = r, e
                            }), {}), u.classStr ? u.classStr += " ".concat(u.tag) : u.classStr = u.tag, "inline" === u.tagType && (u.classStr += " inline"), "img" === u.tag) {
                            var g = u.attr.src;
                            g = n.default.urlToHttpUrl(g, a.domain), Object.assign(u.attr, a, {
                                src: g || ""
                            }), g && c.imageUrls.push(g)
                        }
                        if ("a" === u.tag && (u.attr.href = u.attr.href || ""), "table" !== u.tag && "tr" !== u.tag && "td" !== u.tag || (u.styleStr = "", u.attr.width && (u.styleStr += "width:" + u.attr.width + "px;", u.attr.width > u.$screen.width && u.attr.height && (u.attr.height = u.$screen.width * u.attr.height / u.attr.width)), u.attr.height && (u.styleStr += "height:" + u.attr.height + "px;")), "video" === u.tag && (u.styleStr = "", u.attr.width && (u.styleStr += "width:" + u.attr.width + "px;", u.attr.width > u.$screen.width && u.attr.height && (u.attr.height = u.$screen.width * u.attr.height / u.attr.width)), u.attr.height && (u.styleStr += "height:" + u.attr.height + "px;")), "font" === u.tag) {
                            var x = ["x-small", "small", "medium", "large", "x-large", "xx-large", "-webkit-xxx-large"],
                                v = {
                                    color: "color",
                                    face: "font-family",
                                    size: "font-size"
                                };
                            u.styleStr || (u.styleStr = ""), Object.keys(v).forEach((function(e) {
                                if (u.attr[e]) {
                                    var t = "size" === e ? x[u.attr[e] - 1] : u.attr[e];
                                    u.styleStr += "".concat(v[e], ": ").concat(t, ";")
                                }
                            }))
                        }
                        if ("source" === u.tag && (c.source = u.attr.src), t.start && t.start(u, c), s) {
                            var h = i[0] || c;
                            void 0 === h.nodes && (h.nodes = []), h.nodes.push(u)
                        } else i.unshift(u)
                    },
                    end: function(e) {
                        var a = i.shift();
                        if (a.tag !== e && console.error("invalid state: mismatch end tag"), "video" === a.tag && c.source && (a.attr.src = c.source, delete c.source), t && t.end && t.end(a, c), 0 === i.length) c.nodes.push(a);
                        else {
                            var r = i[0];
                            r.nodes || (r.nodes = []), r.nodes.push(a)
                        }
                    },
                    chars: function(e) {
                        if (e.trim()) {
                            var a = {
                                node: "text",
                                text: e
                            };
                            if (t.chars && t.chars(a, c), 0 === i.length) c.nodes.push(a);
                            else {
                                var r = i[0];
                                void 0 === r.nodes && (r.nodes = []), r.nodes.push(a)
                            }
                        }
                    }
                }), c
            };
            t.default = c
        },
        c59d: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("6af6"),
                n = a("e35f");
            for (var s in n)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return n[e]
                }))
            }(s);
            var i = a("f0c5"),
                l = Object(i["a"])(n["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], void 0);
            t["default"] = l.exports
        },
        d8f8: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("9ea6"),
                n = a.n(r);
            for (var s in r)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return r[e]
                }))
            }(s);
            t["default"] = n.a
        },
        e35f: function(e, t, a) {
            "use strict";
            a.r(t);
            var r = a("1f88"),
                n = a.n(r);
            for (var s in r)["default"].indexOf(s) < 0 && function(e) {
                a.d(t, e, (function() {
                    return r[e]
                }))
            }(s);
            t["default"] = n.a
        },
        e5e6: function(e, t, a) {
            var r = a("24fb");
            t = r(!1), t.push([e.i, ".video-video[data-v-66d46ff4]{background:#000}", ""]), e.exports = t
        },
        fa8e: function(e, t, a) {
            "use strict";
            a("7a82"), Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, a("99af");
            var r = {
                name: "wxParseImg",
                data: function() {
                    return {
                        newStyleStr: "",
                        preview: !0
                    }
                },
                inject: ["parseWidth"],
                mounted: function() {},
                props: {
                    node: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                methods: {
                    wxParseImgTap: function(e) {
                        if (this.preview) {
                            var t = e.currentTarget.dataset.src;
                            if (t) {
                                var a = this.$parent;
                                while (!a.preview || "function" !== typeof a.preview) a = a.$parent;
                                a.preview(t, e)
                            }
                        }
                    },
                    wxParseImgLoad: function(e) {
                        var t = e.currentTarget.dataset.src;
                        if (t) {
                            var a = e.mp.detail,
                                r = a.width,
                                n = a.height,
                                s = this.wxAutoImageCal(r, n),
                                i = s.imageheight,
                                l = s.imageWidth,
                                o = this.node.attr,
                                d = o.padding,
                                c = o.mode,
                                u = this.node.styleStr,
                                f = "widthFix" === c ? "" : "height: ".concat(i, "px;");
                            u || (this.newStyleStr = "".concat(u, "; ").concat(f, "; width: ").concat(l, "px; padding: 0 ").concat(+d, "px;"))
                        }
                    },
                    wxAutoImageCal: function(e, t) {
                        var a = this.parseWidth.value,
                            r = {};
                        if (e < 60 || t < 60) {
                            var n = this.node.attr.src,
                                s = this.$parent;
                            while (!s.preview || "function" !== typeof s.preview) s = s.$parent;
                            s.removeImageUrl(n), this.preview = !1
                        }
                        return e > a ? (r.imageWidth = a, r.imageheight = a * (t / e)) : (r.imageWidth = e, r.imageheight = t), r
                    }
                }
            };
            t.default = r
        }
    }
]);