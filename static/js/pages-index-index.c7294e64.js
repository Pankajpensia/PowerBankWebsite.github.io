(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-index-index"], {
        "0b2e": function(t, e, s) {
            "use strict";
            var r = s("5c53"),
                i = s.n(r);
            i.a
        },
        1464: function(t, e, s) {
            var r = s("24fb");
            e = r(!1), e.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* .indicator {\r\n\t@include flex(row);\r\n\tjustify-content: center;\r\n\r\n\t&__dot {\r\n\t\theight: 6px;\r\n\t\twidth: 6px;\r\n\t\tborder-radius: 100px;\r\n\t\tbackground-color: rgba(255, 255, 255, 0.35);\r\n\t\tmargin: 0 5px;\r\n\t\ttransition: background-color 0.3s;\r\n\r\n\t\t&--active {\r\n\t\t\tbackground-color: #ffffff;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.indicator-num {\r\n\tpadding: 2px 0;\r\n\tbackground-color: rgba(0, 0, 0, 0.35);\r\n\tborder-radius: 100px;\r\n\twidth: 35px;\r\n\t@include flex;\r\n\tjustify-content: center;\r\n\r\n\t&__text {\r\n\t\tcolor: #FFFFFF;\r\n\t\tfont-size: 12px;\r\n\t}\r\n} */', ""]), t.exports = e
        },
        "17f1": function(t, e, s) {
            var r = s("24fb");
            e = r(!1), e.push([t.i, "uni-page-body[data-v-2ef8840e]{background:#fff}body.?%PAGE?%[data-v-2ef8840e]{background:#fff}.hh1[data-v-2ef8840e]{width:%?200?%}.hh2[data-v-2ef8840e]{width:%?400?%}.image[data-v-2ef8840e]{height:%?500?%;width:100%}.scroll-Y[data-v-2ef8840e]{height:45vh;line-height:1.4;color:#000}.box[data-v-2ef8840e]{margin:%?20?% 0}.box uni-view.cu-bar[data-v-2ef8840e]{margin-top:%?20?%}.topF[data-v-2ef8840e]{position:-webkit-fixed;position:fixed;padding-top:0;height:calc(44px + 0px);width:100%;top:0;z-index:99;background-color:#0081ff}.top[data-v-2ef8840e]{position:fixed;top:0;z-index:99;width:100%}.topS[data-v-2ef8840e]{padding-top:calc(44px + 0px)}.topD[data-v-2ef8840e]{padding-top:calc(0px + 0px)}.topsticky[data-v-2ef8840e]{position:-webkit-sticky;position:sticky;padding-top:0;top:0;z-index:99}", ""]), t.exports = e
        },
        "1a49": function(t, e, s) {
            "use strict";
            s.r(e);
            var r = s("30a8"),
                i = s("8700");
            for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                s.d(e, t, (function() {
                    return i[t]
                }))
            }(a);
            s("b27f");
            var o = s("f0c5"),
                n = Object(o["a"])(i["default"], r["b"], r["c"], !1, null, "9f7e1b5a", null, !1, r["a"], void 0);
            e["default"] = n.exports
        },
        "252a": function(t, e, s) {
            "use strict";
            s.r(e);
            var r = s("2671"),
                i = s.n(r);
            for (var a in r)["default"].indexOf(a) < 0 && function(t) {
                s.d(e, t, (function() {
                    return r[t]
                }))
            }(a);
            e["default"] = i.a
        },
        2671: function(t, e, s) {
            "use strict";
            s("7a82");
            var r = s("4ea4").default;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, s("14d9"), s("99af");
            var i = r(s("ade3")),
                a = r(s("1a49")),
                o = r(s("1a95")),
                n = {
                    components: {
                        cmdProgress: a.default,
                        uParse: o.default
                    },
                    data: function() {
                        var t;
                        return t = {
                            options: {
                                effect: "creative",
                                autoplay: {
                                    delay: 3500,
                                    autoplay: !0
                                },
                                loop: !0,
                                creativeEffect: {
                                    prev: {
                                        shadow: !0,
                                        origin: "left center",
                                        translate: ["-5%", 0, -200],
                                        rotate: [0, 100, 0]
                                    },
                                    next: {
                                        origin: "right center",
                                        translate: ["5%", 0, -200],
                                        rotate: [0, -100, 0]
                                    }
                                }
                            },
                            serUrl: "",
                            scrollTop: 0,
                            myinfo: {
                                userBalace: 0
                            },
                            incomeLists: [],
                            cardCur: 0,
                            newsLists: [],
                            slists: [],
                            lists: [],
                            lineBg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAOCAYAAABdC15GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgBzZNRTsJAEIb/WTW+lpiY+FZPIDew3ABP4GJ8hxsI9zBpOYHeQDwBPQI+mRiRvpLojtPdYhCorQqF/6GdbGd2vvwzBXZcNAt4oj1ANeUoAT5iqkUjbEFLHNmhD1YPEvpZ3ghkGlVDCkc94/BmHMq998I5ONiY1ZBfpKAyuOtgAc5yOEDmYEWNh32BHF91sGHZHmwW4azciN9aQwnz3SJEgOmte+R2tdLprTYoa50mvuomlLpD4Y3oQZnov6D2RzCqI93bWOHaEmAGqQUyRBlZR1WfarcD/EJ2z8DtzDGvsMCwpm8XOCfDUsVOCYhiqRxI/CTQo4UOvjzO7Pow18vfywneuUHHUUxLn55lLw5JFpZ8bEUcY8oXdOLWiHLTxvoGpLqoUmy6dBT15o/ox3znpoycAmxUsiJTbs1cmxeVKp+0zmFIS7bGWiVghC7Vwse8jFKAX9eljh4ggKLLv7uaQvG9/F59Oo2SouxPu7OTCxN/s8wAAAAASUVORK5CYII=",
                            list4: [{
                                name: "On sale"
                            }, {
                                name: "Company",
                                badge: {
                                    isDot: !1
                                }
                            }],
                            item: [{
                                name: "Bonus rules"
                            }, {
                                name: "about Us"
                            }],
                            current: 0,
                            currentNum: 0,
                            amount: 1,
                            goodsListsA: [],
                            imgaes: [],
                            rollList: []
                        }, (0, i.default)(t, "item", [{
                            name: "Bonus rules"
                        }, {
                            name: "About Us"
                        }]), (0, i.default)(t, "page", {
                            current: 1,
                            size: 10,
                            total: 10
                        }), (0, i.default)(t, "comnews1", ""), (0, i.default)(t, "comnews2", ""), (0, i.default)(t, "popupContend", ""), t
                    },
                    computed: {},
                    onLoad: function() {
                        this.getSerlists(), this.getslists(), this.getlists(), this.getimgaes(), this.getPopup(!0)
                    },
                    onReachBottom: function() {
                        this.getMorenewsLists()
                    },
                    onShow: function() {
                        this.getnewsLists(), this.getids(), this.getRolllists()
                    },
                    methods: {
                        change: function(t) {},
                        getids: function() {
                            var t = this;
                            this.$api.request.httpGet("/coin/user-money/myInfo", {}, (function(e) {
                                t.myinfo.userBalace = e.data.balance
                            }))
                        },
                        openSev: function() {
                            this.$refs.sev.open("center")
                        },
                        closeSev: function() {
                            this.$refs.sev.close()
                        },
                        cardSwiper: function(t) {
                            this.cardCur = t.detail.current
                        },
                        downapp: function() {
                            window.location.href = this.$api.request.apiapkpath
                        },
                        close: function() {
                            this.$refs.popup.close()
                        },
                        getMorenewsLists: function() {
                            var t = this;
                            this.page.current = this.page.current + 1, this.page.current * this.page.size - this.page.size >= this.page.total || this.$api.request.httpGet("/coin/news/getNewsPageList", {
                                current: this.page.current,
                                size: this.page.size
                            }, (function(e) {
                                for (var s = [], r = e.records, i = 0; i < r.length; i++) {
                                    var a = r[i],
                                        o = {
                                            id: a.id,
                                            title: a.title
                                        };
                                    s.push(o)
                                }
                                t.newsLists = t.newsLists.concat(s)
                            }))
                        },
                        getslists: function() {
                            this.slists = [{
                                icon: "../../static/img/ws.png",
                                title: "Online service",
                                stytle: "border-bottom: #f1f1f1 1upx solid"
                            }, {
                                icon: "../../static/img/te.png",
                                title: "Telegram channel"
                            }]
                        },
                        getlists: function() {
                            var t = this;
                            this.$api.request.httpGet("/coin/service-contact/getServiceContactPageList", {
                                current: 1,
                                size: 10
                            }, (function(e) {
                                for (var s = [], r = e.records, i = 0; i < r.length; i++) {
                                    var a = r[i];
                                    s.push(a.url)
                                }
                                t.lists = s
                            }))
                        },
                        goService: function(t) {
                            var e = this.lists[t];
                            null != e && void 0 != e && this.tools.tz(e)
                        },
                        getPopup: function(t) {
                            var e = this;
                            this.$api.request.httpGet("/coin/popup/getPopupPageList", {
                                current: 1,
                                size: 1
                            }, (function(s) {
                                for (var r = s.records, i = 0; i < r.length; i++) {
                                    var a = r[i];
                                    e.popupContend = a.contend
                                }
                                t && e.popupContend && e.$refs.popup.open("")
                            }))
                        },
                        getnewsLists: function() {
                            var t = this;
                            this.page.current = 1, this.$api.request.httpGet("/coin/news/getNewsPageList", {
                                current: this.page.current,
                                size: this.page.size
                            }, (function(e) {
                                t.page.total = e.total;
                                for (var s = e.records, r = 0; r < s.length; r++) {
                                    var i = s[0];
                                    t.comnews1 = i.title;
                                    i = s[1];
                                    t.comnews2 = i.title
                                }
                            }))
                        },
                        click: function(t) {
                            this.current = t.index
                        },
                        buy: function(t) {
                            var e = this;
                            this.$api.request.httpPost("/coin/order/orderCreate", {
                                productId: t,
                                amount: this.amount
                            }, (function(t) {
                                "please rechare" === t.msg ? uni.navigateTo({
                                    url: "../recharge/recharge"
                                }) : 0 === t.errCode ? e.tools.showWaring("Purchase successful") : e.tools.showWaring(t.msg)
                            })), this.modalName = null
                        },
                        finish: function() {
                            0 == this.current ? this.getgoodsListsA() : this.getcomnews()
                        },
                        getimgaes: function() {
                            var t = this;
                            this.$api.request.httpGet("/coin/cplb/getCplbPageList", {
                                current: 1,
                                size: 10
                            }, (function(e) {
                                for (var s = [], r = e.records, i = 0; i < r.length; i++) {
                                    var a = r[i],
                                        o = {
                                            src: a.url,
                                            productId: a.productId
                                        };
                                    s.push(o)
                                }
                                t.imgaes = s
                            }))
                        },
                        goRecord: function() {
                            uni.navigateTo({
                                url: "../record/record"
                            })
                        },
                        goRec: function() {
                            uni.navigateTo({
                                url: "../recharge/recharge"
                            })
                        },
                        goCsah: function() {
                            uni.navigateTo({
                                url: "../withdrawal/withdrawal"
                            })
                        },
                        goPrd: function() {
                            uni.navigateTo({
                                url: "../Purchased/Purchased"
                            })
                        },
                        goShare: function() {
                            uni.navigateTo({
                                url: "../share/share"
                            })
                        },
                        goRule: function() {
                            uni.navigateTo({
                                url: "../rule/rule"
                            })
                        },
                        goCmp: function() {
                            uni.navigateTo({
                                url: "../AboutUs/AboutUs"
                            })
                        },
                        goPwd: function() {
                            uni.navigateTo({
                                url: "../ChangePwd/ChangePwd"
                            })
                        },
                        goShop: function() {
                            uni.switchTab({
                                url: "../shop/shop"
                            })
                        },
                        goOrder: function() {
                            uni.navigateTo({
                                url: "../Purchased/Purchased"
                            })
                        },
                        goTeam: function() {
                            uni.switchTab({
                                url: "../team/team"
                            })
                        },
                        getMsg: function() {
                            var t = this;
                            this.$api.request.httpGet("/system/sys-user-notice/getSysUserNoticePageList", {
                                current: 1,
                                size: 1
                            }, (function(e) {
                                for (var s = e.records, r = 0; r < s.length; r++) {
                                    var i = s[r];
                                    t.text = 0 == r ? i.contend + ", " : t.text + i.contend + ", "
                                }
                            }))
                        },
                        imagetz: function(t) {
                            uni.navigateTo({
                                url: "../details/details?id=" + t.productId
                            })
                        },
                        fabClick: function() {
                            null != this.serUrl && void 0 != this.serUrl && this.tools.tz(this.serUrl)
                        },
                        getSerlists: function() {
                            var t = this;
                            this.$api.request.httpGet("/coin/service-contact/getServiceContactPageList", {
                                current: 1,
                                size: 10
                            }, (function(e) {
                                var s = e.records,
                                    r = s[2];
                                t.serUrl = r.url
                            }))
                        },
                        getRolllists: function() {
                            var t = this;
                            this.$api.request.httpGet("/coin/recharge/getCzRoll", {}, (function(e) {
                                for (var s = [], r = e.records, i = 0; i < r.length; i++) {
                                    var a = r[i],
                                        o = {
                                            title: a.title,
                                            time: a.time
                                        };
                                    s.push(o)
                                }
                                t.rollList = s
                            }))
                        }
                    }
                };
            e.default = n
        },
        2756: function(t, e, s) {
            var r = s("17f1");
            r.__esModule && (r = r.default), "string" === typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            var i = s("4f06").default;
            i("0842f3fa", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "30a8": function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return r
            })), s.d(e, "c", (function() {
                return i
            })), s.d(e, "a", (function() {}));
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("v-uni-view", {
                        staticClass: "cmd-progress cmd-progress-default",
                        class: t.setStatusClass
                    }, ["circle" == t.type || "dashboard" == t.type ? [s("v-uni-view", {
                        staticClass: "cmd-progress cmd-progress-default",
                        class: t.setStatusClass
                    }, [s("v-uni-view", {
                        staticClass: "cmd-progress-inner",
                        style: t.setCircleStyle
                    }, [s("svg", {
                        staticClass: "cmd-progress-circle",
                        attrs: {
                            viewBox: "0 0 100 100"
                        }
                    }, [s("path", {
                        staticClass: "cmd-progress-circle-trail",
                        style: t.setCircleTrailStyle,
                        attrs: {
                            d: t.setCirclePath,
                            stroke: "#f3f3f3",
                            "stroke-linecap": t.strokeShape,
                            "stroke-width": t.strokeWidth,
                            "fill-opacity": "0"
                        }
                    }), s("path", {
                        staticClass: "cmd-progress-circle-path",
                        style: t.setCirclePathStyle,
                        attrs: {
                            d: t.setCirclePath,
                            "stroke-linecap": t.strokeShape,
                            "stroke-width": t.strokeWidth,
                            "fill-opacity": "0"
                        }
                    })]), t.showInfo ? [s("v-uni-text", {
                        staticClass: "cmd-progress-text",
                        attrs: {
                            title: t.setFormat
                        }
                    }, ["success" != t.status && "exception" != t.status && t.setProgress < 100 ? [t._v(t._s(t.setFormat))] : t._e(), "exception" == t.status ? s("svg", {
                        attrs: {
                            viewBox: "64 64 896 896",
                            "data-icon": "close",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor",
                            "aria-hidden": "true"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                        }
                    })]) : t._e(), "success" == t.status || 100 == t.setProgress ? s("svg", {
                        style: {
                            color: t.strokeColor ? t.strokeColor : ""
                        },
                        attrs: {
                            viewBox: "64 64 896 896",
                            "data-icon": "check",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor",
                            "aria-hidden": "true"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                        }
                    })]) : t._e()], 2)] : t._e()], 2)], 1)] : t._e(), "line" == t.type ? [s("v-uni-view", {
                        staticClass: "cmd-progress-outer"
                    }, [s("v-uni-view", {
                        staticClass: "cmd-progress-inner",
                        style: {
                            "border-radius": "square" == t.strokeShape ? 0 : "100px"
                        }
                    }, [s("v-uni-view", {
                        staticClass: "cmd-progress-bg",
                        style: t.setLineStyle
                    }), t.successPercent ? s("v-uni-view", {
                        staticClass: "cmd-progress-success-bg",
                        style: t.setLineSuccessStyle
                    }) : t._e()], 1)], 1), t.showInfo ? [s("v-uni-text", {
                        staticClass: "cmd-progress-text",
                        attrs: {
                            title: t.setFormat
                        }
                    }, ["success" != t.status && "exception" != t.status && t.setProgress < 100 ? [t._v(t._s(t.setFormat))] : t._e(), "exception" == t.status ? s("svg", {
                        attrs: {
                            viewBox: "64 64 896 896",
                            "data-icon": "close-circle",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor",
                            "aria-hidden": "true"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                        }
                    })]) : t._e(), "success" == t.status || 100 == t.setProgress ? s("svg", {
                        style: {
                            color: t.strokeColor ? t.strokeColor : ""
                        },
                        attrs: {
                            viewBox: "64 64 896 896",
                            "data-icon": "check-circle",
                            width: "1em",
                            height: "1em",
                            fill: "currentColor",
                            "aria-hidden": "true"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                        }
                    })]) : t._e()], 2)] : t._e()] : t._e()], 2)
                },
                i = []
        },
        "475f": function(t, e, s) {
            "use strict";
            s("7a82"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, s("caad"), s("a9e3"), s("99af"), s("14d9");
            var r = {
                name: "cmd-progress",
                props: {
                    type: {
                        validator: function(t) {
                            return ["line", "circle", "dashboard"].includes(t)
                        },
                        default: "line"
                    },
                    percent: {
                        type: Number,
                        default: 0
                    },
                    successPercent: {
                        type: Number,
                        default: 0
                    },
                    showInfo: {
                        type: Boolean,
                        default: !0
                    },
                    status: {
                        validator: function(t) {
                            return ["normal", "success", "exception", "active"].includes(t)
                        },
                        default: "normal"
                    },
                    strokeWidth: {
                        type: Number,
                        default: 6
                    },
                    strokeColor: {
                        type: String,
                        default: ""
                    },
                    strokeShape: {
                        validator: function(t) {
                            return ["round", "square"].includes(t)
                        },
                        default: "round"
                    },
                    width: {
                        type: Number,
                        default: 80
                    },
                    gapDegree: {
                        type: Number,
                        default: 0
                    },
                    gapPosition: {
                        validator: function(t) {
                            return ["top", "bottom", "left", "right"].includes(t)
                        },
                        default: "top"
                    }
                },
                computed: {
                    setFormat: function() {
                        return "".concat(this.setProgress, "%")
                    },
                    setProgress: function() {
                        var t = this.percent;
                        return !this.percent || this.percent < 0 ? t = 0 : this.percent >= 100 && (t = 100), t
                    },
                    setCircleStyle: function() {
                        return "width: ".concat(this.width, "px;\n\t\t\t\theight: ").concat(this.width, "px;\n\t\t\t\tfontSize: ").concat(.15 * this.width + 6, "px;")
                    },
                    setCircleTrailStyle: function() {
                        var t = 50 - this.strokeWidth / 2,
                            e = 2 * Math.PI * t,
                            s = this.gapDegree || "dashboard" === this.type && 75;
                        return "stroke-dasharray: ".concat(e - (s || 0), "px, ").concat(e, "px;\n\t\t\t\tstroke-dashoffset: -").concat((s || 0) / 2, "px;\n\t\t\t\ttransition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s;")
                    },
                    setCirclePathStyle: function() {
                        var t = 50 - this.strokeWidth / 2,
                            e = 2 * Math.PI * t,
                            s = this.gapDegree || "dashboard" === this.type && 75;
                        return "stroke: ".concat(this.strokeColor, ";\n\t\t\t\tstroke-dasharray: ").concat(this.setProgress / 100 * (e - (s || 0)), "px, ").concat(e, "px;\n\t\t\t\tstroke-dashoffset: -").concat((s || 0) / 2, "px;\n\t\t\t\ttransition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s, stroke-width 0.06s ease 0.3s;")
                    },
                    setCirclePath: function() {
                        var t = 50 - this.strokeWidth / 2,
                            e = 0,
                            s = -t,
                            r = 0,
                            i = -2 * t,
                            a = ("dashboard" === this.type ? "bottom" : this.gapPosition) || "top";
                        switch (a) {
                            case "left":
                                e = -t, s = 0, r = 2 * t, i = 0;
                                break;
                            case "right":
                                e = t, s = 0, r = -2 * t, i = 0;
                                break;
                            case "bottom":
                                s = t, i = 2 * t;
                                break;
                            default:
                                break
                        }
                        return "M 50,50 m ".concat(e, ",").concat(s, " a ").concat(t, ",").concat(t, " 0 1 1 ").concat(r, ",").concat(-i, " a ").concat(t, ",").concat(t, " 0 1 1 ").concat(-r, ",").concat(i)
                    },
                    setLineStyle: function() {
                        return "width: ".concat(this.setProgress, "%;\n\t\t\t\theight: ").concat(this.strokeWidth, "px;\n\t\t\t\tbackground: ").concat(this.strokeColor, ";\n\t\t\t\tborder-radius: ").concat("square" === this.strokeShape ? 0 : "100px", ";")
                    },
                    setLineSuccessStyle: function() {
                        var t = this.successPercent;
                        return !this.successPercent || this.successPercent < 0 || this.setProgress < this.successPercent ? t = 0 : this.successPercent >= 100 && (t = 100), "width: ".concat(t, "%;\n\t\t\t\theight: ").concat(this.strokeWidth, "px;\n\t\t\t\tborder-radius: ").concat("square" === this.strokeShape ? 0 : "100px", ";")
                    },
                    setStatusClass: function() {
                        var t = [];
                        return "exception" == this.status && t.push("cmd-progress-status-exception"), ("success" == this.status || this.setProgress >= 100) && t.push("cmd-progress-status-success"), "active" == this.status && t.push("cmd-progress-status-active"), this.showInfo && t.push("cmd-progress-show-info"), "line" === this.type && t.push("cmd-progress-line"), "circle" !== this.type && "dashboard" !== this.type || t.push("cmd-progress-circle"), t.push("cmd-progress-status-normal"), t
                    }
                }
            };
            e.default = r
        },
        "5c53": function(t, e, s) {
            var r = s("1464");
            r.__esModule && (r = r.default), "string" === typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            var i = s("4f06").default;
            i("0a492e26", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "5cc6f": function(t, e, s) {
            t.exports = s.p + "static/img/te.d73372fa.png"
        },
        8700: function(t, e, s) {
            "use strict";
            s.r(e);
            var r = s("475f"),
                i = s.n(r);
            for (var a in r)["default"].indexOf(a) < 0 && function(t) {
                s.d(e, t, (function() {
                    return r[t]
                }))
            }(a);
            e["default"] = i.a
        },
        "986e": function(t, e, s) {
            var r = s("c70b");
            r.__esModule && (r = r.default), "string" === typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            var i = s("4f06").default;
            i("b60239da", r, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b27f: function(t, e, s) {
            "use strict";
            var r = s("986e"),
                i = s.n(r);
            i.a
        },
        be7f: function(t, e, s) {
            "use strict";
            s.d(e, "b", (function() {
                return i
            })), s.d(e, "c", (function() {
                return a
            })), s.d(e, "a", (function() {
                return r
            }));
            var r = {
                    uParse: s("5739").default,
                    uniPopup: s("1d5c").default
                },
                i = function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("v-uni-view", [r("v-uni-swiper", {
                        staticClass: "card-swiper square-dot",
                        attrs: {
                            "indicator-dots": !0,
                            circular: !0,
                            autoplay: !0,
                            interval: "5000",
                            duration: "500",
                            "indicator-color": "grey",
                            "indicator-active-color": "#333"
                        }
                    }, t._l(t.imgaes, (function(t, e) {
                        return r("v-uni-swiper-item", {
                            key: e
                        }, [r("v-uni-view", {
                            staticClass: "swiper-item"
                        }, [r("a", [r("v-uni-image", {
                            staticClass: "response",
                            attrs: {
                                src: t.src,
                                mode: "aspectFill"
                            }
                        })], 1)])], 1)
                    })), 1), r("v-uni-view", {
                        staticClass: "padding-sm",
                        staticStyle: {
                            "line-height": "1.4",
                            color: "#000"
                        }
                    }, [r("u-parse", {
                        attrs: {
                            lazyLoad: !0,
                            content: t.comnews1
                        }
                    })], 1), r("uni-popup", {
                        ref: "popup",
                        attrs: {
                            "mask-click": !0
                        }
                    }, [r("v-uni-view", {
                        staticClass: "margin-lr-xl bg-white padding-lr-sm",
                        staticStyle: {
                            "border-radius": "30upx"
                        }
                    }, [r("v-uni-view", {
                        staticClass: "padding-lr padding-tb bg-List flex justify-between align-center",
                        staticStyle: {
                            "border-radius": "30upx 30upx 0 0"
                        }
                    }, [r("v-uni-view", {
                        staticClass: "text-bold text-Abc text-black"
                    }, [t._v("App rules")]), r("v-uni-text", {
                        staticClass: "cuIcon-roundclose text-red",
                        staticStyle: {
                            "font-size": "200%"
                        },
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.close()
                            }
                        }
                    })], 1), r("v-uni-scroll-view", {
                        staticClass: "scroll-Y",
                        attrs: {
                            "show-scrollbar": "true",
                            "scroll-top": t.scrollTop,
                            "scroll-y": "true"
                        }
                    }, [r("u-parse", {
                        attrs: {
                            lazyLoad: !0,
                            content: t.popupContend
                        }
                    })], 1), r("v-uni-view", {
                        staticClass: "padding flex"
                    }, [r("v-uni-view", {
                        staticClass: "round flex justify-center align-center",
                        staticStyle: {
                            width: "100%"
                        }
                    }, [r("v-uni-button", {
                        staticClass: "round cu-btn line-black shadow text-bold lg",
                        on: {
                            click: function(e) {
                                arguments[0] = e = t.$handleEvent(e), t.fabClick.apply(void 0, arguments)
                            }
                        }
                    }, [r("v-uni-image", {
                        staticClass: "bg-white",
                        staticStyle: {
                            width: "60upx",
                            height: "60upx",
                            "border-radius": "50%"
                        },
                        attrs: {
                            src: s("5cc6f")
                        }
                    }), r("v-uni-text"), r("v-uni-text", {
                        staticClass: "margin-left text-black"
                    }, [t._v("Official channel")])], 1)], 1)], 1)], 1)], 1)], 1)
                },
                a = []
        },
        c15a: function(t, e, s) {
            "use strict";
            var r = s("2756"),
                i = s.n(r);
            i.a
        },
        c70b: function(t, e, s) {
            var r = s("24fb");
            e = r(!1), e.push([t.i, '.cmd-progress[data-v-9f7e1b5a]{box-sizing:border-box;margin:0;padding:0;list-style:none;display:inline-block}.cmd-progress-line[data-v-9f7e1b5a]{width:100%;font-size:%?28?%;position:relative;display:flex;flex-direction:row;justify-content:center;align-items:center}.cmd-progress-outer[data-v-9f7e1b5a]{display:inline-block;width:100%;margin-right:0;padding-right:0}.cmd-progress-show-info .cmd-progress-outer[data-v-9f7e1b5a]{flex:1}.cmd-progress-inner[data-v-9f7e1b5a]{display:inline-block;width:100%;background-color:#f5f5f5;border-radius:%?200?%;vertical-align:middle;position:relative}.cmd-progress-circle-trail[data-v-9f7e1b5a]{stroke:#f5f5f5}.cmd-progress-circle-path[data-v-9f7e1b5a]{stroke:#1890ff;-webkit-animation:appear .3s;animation:appear .3s}.cmd-progress-success-bg[data-v-9f7e1b5a],\n.cmd-progress-bg[data-v-9f7e1b5a]{background-color:#1890ff;transition:all .4s cubic-bezier(.08,.82,.17,1) 0s;position:relative}.cmd-progress-success-bg[data-v-9f7e1b5a]{background-color:#52c41a;position:absolute;top:0;left:0}.cmd-progress-text[data-v-9f7e1b5a]{word-break:normal;width:%?60?%;text-align:left;margin-left:%?16?%;vertical-align:middle;display:inline-block;white-space:nowrap;color:rgba(0,0,0,.45);line-height:1}.cmd-progress-status-active .cmd-progress-bg[data-v-9f7e1b5a]:before{content:"";opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;background:#fff;border-radius:%?20?%;-webkit-animation:cmd-progress-active-data-v-9f7e1b5a 2.4s cubic-bezier(.23,1,.32,1) infinite;animation:cmd-progress-active-data-v-9f7e1b5a 2.4s cubic-bezier(.23,1,.32,1) infinite}.cmd-progress-status-exception .cmd-progress-bg[data-v-9f7e1b5a]{background-color:#f5222d}.cmd-progress-status-exception .cmd-progress-text[data-v-9f7e1b5a]{color:#f5222d}.cmd-progress-status-exception .cmd-progress-circle-path[data-v-9f7e1b5a]{stroke:#f5222d}.cmd-progress-status-success .cmd-progress-bg[data-v-9f7e1b5a]{background-color:#52c41a}.cmd-progress-status-success .cmd-progress-text[data-v-9f7e1b5a]{color:#52c41a}.cmd-progress-status-success .cmd-progress-circle-path[data-v-9f7e1b5a]{stroke:#52c41a}.cmd-progress-circle .cmd-progress-inner[data-v-9f7e1b5a]{position:relative;line-height:1;background-color:initial}.cmd-progress-circle .cmd-progress-text[data-v-9f7e1b5a]{display:block;position:absolute;width:100%;text-align:center;line-height:1;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:0;margin:0;color:rgba(0,0,0,.65);white-space:normal}.cmd-progress-circle .cmd-progress-status-exception .cmd-progress-text[data-v-9f7e1b5a]{color:#f5222d}.cmd-progress-circle .cmd-progress-status-success .cmd-progress-text[data-v-9f7e1b5a]{color:#52c41a}@-webkit-keyframes cmd-progress-active-data-v-9f7e1b5a{0%{opacity:.1;width:0}20%{opacity:.5;width:0}100%{opacity:0;width:100%}}@keyframes cmd-progress-active-data-v-9f7e1b5a{0%{opacity:.1;width:0}20%{opacity:.5;width:0}100%{opacity:0;width:100%}}', ""]), t.exports = e
        },
        d08f: function(t, e, s) {
            "use strict";
            s.r(e);
            var r = s("be7f"),
                i = s("252a");
            for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                s.d(e, t, (function() {
                    return i[t]
                }))
            }(a);
            s("c15a"), s("0b2e");
            var o = s("f0c5"),
                n = Object(o["a"])(i["default"], r["b"], r["c"], !1, null, "2ef8840e", null, !1, r["a"], void 0);
            e["default"] = n.exports
        }
    }
]);