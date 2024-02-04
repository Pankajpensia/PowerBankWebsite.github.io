(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-shop-shop"], {
        "0a5c": function(t, i, e) {
            "use strict";
            var n = e("28eb"),
                a = e.n(n);
            a.a
        },
        2215: function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("82e6"),
                a = e.n(n);
            for (var s in n)["default"].indexOf(s) < 0 && function(t) {
                e.d(i, t, (function() {
                    return n[t]
                }))
            }(s);
            i["default"] = a.a
        },
        "28eb": function(t, i, e) {
            var n = e("3dee");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = e("4f06").default;
            a("1aedc52b", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        "378f": function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("b40f"),
                a = e.n(n);
            for (var s in n)["default"].indexOf(s) < 0 && function(t) {
                e.d(i, t, (function() {
                    return n[t]
                }))
            }(s);
            i["default"] = a.a
        },
        "3a3e": function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("41f6"),
                a = e("b8f2");
            for (var s in a)["default"].indexOf(s) < 0 && function(t) {
                e.d(i, t, (function() {
                    return a[t]
                }))
            }(s);
            e("e9a0");
            var o = e("f0c5"),
                r = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "78612a24", null, !1, n["a"], void 0);
            i["default"] = r.exports
        },
        "3dee": function(t, i, e) {
            var n = e("24fb");
            i = n(!1), i.push([t.i, "uni-page-body[data-v-28886082]{background:#fff}body.?%PAGE?%[data-v-28886082]{background:#fff}.img[data-v-28886082]{height:%?100?%;width:%?100?%;border-radius:50%;position:fixed;right:%?30?%;bottom:20vh;z-index:99;background-color:#ff8c00;padding:8px;box-shadow:0 0 %?10?% %?5?% #aaa}.anima[data-v-28886082]{-webkit-animation-name:likes-data-v-28886082;animation-name:likes-data-v-28886082; /* 动画名称 */-webkit-animation-direction:alternate;animation-direction:alternate; /* 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放。 */-webkit-animation-timing-function:linear;animation-timing-function:linear; /* 动画执行方式，linear：匀速；ease：先慢再快后慢；ease-in：由慢速开始；ease-out：由慢速结束；ease-in-out：由慢速开始和结束； */-webkit-animation-delay:0s;animation-delay:0s; /* 动画延迟时间 */-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite; /*  动画播放次数，infinite：一直播放 */-webkit-animation-duration:1s;animation-duration:1s /* 动画完成时间 */}@-webkit-keyframes likes-data-v-28886082{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.9);transform:scale(.9)}50%{-webkit-transform:scale(.85);transform:scale(.85)}75%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes likes-data-v-28886082{0%{-webkit-transform:scale(1);transform:scale(1)}25%{-webkit-transform:scale(.9);transform:scale(.9)}50%{-webkit-transform:scale(.85);transform:scale(.85)}75%{-webkit-transform:scale(.9);transform:scale(.9)}100%{-webkit-transform:scale(1);transform:scale(1)}}.topF[data-v-28886082]{position:-webkit-fixed;position:fixed;padding-top:0;height:calc(44px + 0px);width:100%;top:0;z-index:99;background-color:#f37b1d}.topS[data-v-28886082]{padding-top:calc(44px + 0px)}.top[data-v-28886082]{position:fixed;top:0;z-index:99;width:100%}.source_price[data-v-28886082]{color:#aaa;font-size:%?30?%;margin-left:%?10?%;text-decoration:line-through}", ""]), t.exports = i
        },
        "41f6": function(t, i, e) {
            "use strict";
            e.d(i, "b", (function() {
                return n
            })), e.d(i, "c", (function() {
                return a
            })), e.d(i, "a", (function() {}));
            var n = function() {
                    var t = this,
                        i = t.$createElement,
                        e = t._self._c || i;
                    return e("v-uni-view", {
                        staticClass: "uni-numbox"
                    }, [e("v-uni-view", {
                        staticClass: "uni-numbox__minus uni-numbox-btns",
                        style: {
                            background: t.background
                        },
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t._calcValue("minus")
                            }
                        }
                    }, [e("v-uni-text", {
                        staticClass: "uni-numbox--text",
                        class: {
                            "uni-numbox--disabled": t.inputValue <= t.min || t.disabled
                        },
                        style: {
                            color: t.color
                        }
                    }, [t._v("-")])], 1), e("v-uni-input", {
                        staticClass: "uni-numbox__value",
                        style: {
                            background: t.background,
                            color: t.color
                        },
                        attrs: {
                            disabled: t.disabled,
                            type: "number"
                        },
                        on: {
                            focus: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t._onFocus.apply(void 0, arguments)
                            },
                            blur: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t._onBlur.apply(void 0, arguments)
                            }
                        },
                        model: {
                            value: t.inputValue,
                            callback: function(i) {
                                t.inputValue = i
                            },
                            expression: "inputValue"
                        }
                    }), e("v-uni-view", {
                        staticClass: "uni-numbox__plus uni-numbox-btns",
                        style: {
                            background: t.background
                        },
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t._calcValue("plus")
                            }
                        }
                    }, [e("v-uni-text", {
                        staticClass: "uni-numbox--text",
                        class: {
                            "uni-numbox--disabled": t.inputValue >= t.max || t.disabled
                        },
                        style: {
                            color: t.color
                        }
                    }, [t._v("+")])], 1)], 1)
                },
                a = []
        },
        4554: function(t, i, e) {
            "use strict";
            e.d(i, "b", (function() {
                return n
            })), e.d(i, "c", (function() {
                return a
            })), e.d(i, "a", (function() {}));
            var n = function() {
                    var t = this.$createElement,
                        i = this._self._c || t;
                    return i("v-uni-view", {
                        staticClass: "u-count-down"
                    }, [this._t("default", [i("v-uni-text", {
                        staticClass: "u-count-down__text"
                    }, [this._v(this._s(this.formattedTime))])])], 2)
                },
                a = []
        },
        "4efe": function(t, i, e) {
            var n = e("24fb");
            i = n(!1), i.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-numbox[data-v-78612a24]{display:flex;flex-direction:row}.uni-numbox-btns[data-v-78612a24]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 8px;background-color:#f5f5f5;cursor:pointer}.uni-numbox__value[data-v-78612a24]{margin:0 2px;background-color:#f5f5f5;width:40px;height:26px;text-align:center;font-size:16;border-left-width:0;border-right-width:0;color:#333}.uni-numbox__minus[data-v-78612a24]{border-top-left-radius:2px;border-bottom-left-radius:2px}.uni-numbox__plus[data-v-78612a24]{border-top-right-radius:2px;border-bottom-right-radius:2px}.uni-numbox--text[data-v-78612a24]{line-height:20px;font-size:20px;font-weight:300;color:#333}.uni-numbox .uni-numbox--disabled[data-v-78612a24]{color:silver!important;cursor:not-allowed}', ""]), t.exports = i
        },
        6214: function(t, i, e) {
            "use strict";

            function n(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    e = "".concat(t);
                while (e.length < i) e = "0".concat(e);
                return e
            }
            e("7a82"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.isSameSecond = function(t, i) {
                return Math.floor(t / 1e3) === Math.floor(i / 1e3)
            }, i.parseFormat = function(t, i) {
                var e = i.days,
                    a = i.hours,
                    s = i.minutes,
                    o = i.seconds,
                    r = i.milliseconds; - 1 === t.indexOf("DD") ? a += 24 * e : t = t.replace("DD", n(e)); - 1 === t.indexOf("HH") ? s += 60 * a : t = t.replace("HH", n(a)); - 1 === t.indexOf("mm") ? o += 60 * s : t = t.replace("mm", n(s)); - 1 === t.indexOf("ss") ? r += 1e3 * o : t = t.replace("ss", n(o));
                return t.replace("SSS", n(r, 3))
            }, i.parseTimeData = function(t) {
                var i = Math.floor(t / 864e5),
                    e = Math.floor(t % 864e5 / 36e5),
                    n = Math.floor(t % 36e5 / 6e4),
                    a = Math.floor(t % 6e4 / 1e3),
                    s = Math.floor(t % 1e3);
                return {
                    days: i,
                    hours: e,
                    minutes: n,
                    seconds: a,
                    milliseconds: s
                }
            }, e("c975"), e("ac1f"), e("5319")
        },
        "74da": function(t, i, e) {
            "use strict";
            var n = e("96f3"),
                a = e.n(n);
            a.a
        },
        "82e6": function(t, i, e) {
            "use strict";
            e("7a82");
            var n = e("4ea4").default;
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0, e("d401"), e("d3b7"), e("25f0");
            var a = n(e("be8b")),
                s = e("6214"),
                o = {
                    name: "u-count-down",
                    mixins: [uni.$u.mpMixin, uni.$u.mixin, a.default],
                    data: function() {
                        return {
                            timer: null,
                            timeData: (0, s.parseTimeData)(0),
                            formattedTime: "0",
                            runing: !1,
                            endTime: 0,
                            remainTime: 0
                        }
                    },
                    watch: {
                        time: function(t) {
                            this.reset()
                        }
                    },
                    mounted: function() {
                        this.init()
                    },
                    methods: {
                        init: function() {
                            this.reset()
                        },
                        start: function() {
                            this.runing || (this.runing = !0, this.endTime = Date.now() + this.remainTime, this.toTick())
                        },
                        toTick: function() {
                            this.millisecond ? this.microTick() : this.macroTick()
                        },
                        macroTick: function() {
                            var t = this;
                            this.clearTimeout(), this.timer = setTimeout((function() {
                                var i = t.getRemainTime();
                                (0, s.isSameSecond)(i, t.remainTime) && 0 !== i || t.setRemainTime(i), 0 !== t.remainTime && t.macroTick()
                            }), 30)
                        },
                        microTick: function() {
                            var t = this;
                            this.clearTimeout(), this.timer = setTimeout((function() {
                                t.setRemainTime(t.getRemainTime()), 0 !== t.remainTime && t.microTick()
                            }), 50)
                        },
                        getRemainTime: function() {
                            return Math.max(this.endTime - Date.now(), 0)
                        },
                        setRemainTime: function(t) {
                            this.remainTime = t;
                            var i = (0, s.parseTimeData)(t);
                            this.$emit("change", i), this.formattedTime = (0, s.parseFormat)(this.format, i), t <= 0 && (this.pause(), this.$emit("finish"))
                        },
                        reset: function() {
                            this.pause(), this.remainTime = this.time, this.setRemainTime(this.remainTime), this.autoStart && this.start()
                        },
                        pause: function() {
                            this.runing = !1, this.clearTimeout()
                        },
                        clearTimeout: function(t) {
                            function i() {
                                return t.apply(this, arguments)
                            }
                            return i.toString = function() {
                                return t.toString()
                            }, i
                        }((function() {
                            clearTimeout(this.timer), this.timer = null
                        }))
                    },
                    beforeDestroy: function() {
                        this.clearTimeout()
                    }
                };
            i.default = o
        },
        "96f3": function(t, i, e) {
            var n = e("a198");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = e("4f06").default;
            a("e69f1d90", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        a198: function(t, i, e) {
            var n = e("24fb");
            i = n(!1), i.push([t.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-679e1595], uni-scroll-view[data-v-679e1595], uni-swiper-item[data-v-679e1595]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-count-down__text[data-v-679e1595]{color:#fff;font-size:15px;line-height:22px}', ""]), t.exports = i
        },
        a2fe: function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("d4c2"),
                a = e("378f");
            for (var s in a)["default"].indexOf(s) < 0 && function(t) {
                e.d(i, t, (function() {
                    return a[t]
                }))
            }(s);
            e("0a5c");
            var o = e("f0c5"),
                r = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "28886082", null, !1, n["a"], void 0);
            i["default"] = r.exports
        },
        a3e8: function(t, i, e) {
            "use strict";
            e("7a82"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0, e("a9e3");
            var n = {
                name: "UniNumberBox",
                emits: ["change", "input", "update:modelValue", "blur", "focus"],
                props: {
                    value: {
                        type: [Number, String],
                        default: 1
                    },
                    modelValue: {
                        type: [Number, String],
                        default: 1
                    },
                    min: {
                        type: Number,
                        default: 0
                    },
                    max: {
                        type: Number,
                        default: 100
                    },
                    step: {
                        type: Number,
                        default: 1
                    },
                    background: {
                        type: String,
                        default: "#f5f5f5"
                    },
                    color: {
                        type: String,
                        default: "#333"
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        inputValue: 0
                    }
                },
                watch: {
                    value: function(t) {
                        this.inputValue = +t
                    },
                    modelValue: function(t) {
                        this.inputValue = +t
                    }
                },
                created: function() {
                    1 === this.value && (this.inputValue = +this.modelValue), 1 === this.modelValue && (this.inputValue = +this.value)
                },
                methods: {
                    _calcValue: function(t) {
                        if (!this.disabled) {
                            var i = this._getDecimalScale(),
                                e = this.inputValue * i,
                                n = this.step * i;
                            if ("minus" === t) {
                                if (e -= n, e < this.min * i) return;
                                e > this.max * i && (e = this.max * i)
                            }
                            if ("plus" === t) {
                                if (e += n, e > this.max * i) return;
                                e < this.min * i && (e = this.min * i)
                            }
                            this.inputValue = (e / i).toFixed(String(i).length - 1), this.$emit("change", +this.inputValue), this.$emit("input", +this.inputValue), this.$emit("update:modelValue", +this.inputValue)
                        }
                    },
                    _getDecimalScale: function() {
                        var t = 1;
                        return ~~this.step !== this.step && (t = Math.pow(10, String(this.step).split(".")[1].length)), t
                    },
                    _onBlur: function(t) {
                        this.$emit("blur", t);
                        var i = t.detail.value;
                        if (i) {
                            i = +i, i > this.max ? i = this.max : i < this.min && (i = this.min);
                            var e = this._getDecimalScale();
                            this.inputValue = i.toFixed(String(e).length - 1), this.$emit("change", +this.inputValue), this.$emit("input", +this.inputValue)
                        }
                    },
                    _onFocus: function(t) {
                        this.$emit("focus", t)
                    }
                }
            };
            i.default = n
        },
        a7f0: function(t, i, e) {
            var n = e("4efe");
            n.__esModule && (n = n.default), "string" === typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            var a = e("4f06").default;
            a("7760f6a2", n, !0, {
                sourceMap: !1,
                shadowMode: !1
            })
        },
        b40f: function(t, i, e) {
            "use strict";
            e("7a82"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0, e("14d9"), e("e9c4"), e("99af");
            var n = {
                data: function() {
                    return {
                        bgcmp: this.$api.request.apiDomainUrl + "/pics/bg.png",
                        pageScrollTop: 0,
                        goodsListsA: [],
                        rollList: [],
                        page: {
                            current: 1,
                            size: 10,
                            total: 10
                        },
                        modalName: null,
                        selItem: {},
                        amount: 1,
                        popupContend: "",
                        userOrderCondition: {
                            vipLevel: 0,
                            zyrs: 0
                        },
                        buyVisable: !1
                    }
                },
                computed: {
                    topNav: function() {
                        var t = this.pageScrollTop / 80;
                        return {
                            color: t >= .85 ? "textA" : "textB",
                            style: "background-color: rgba(91,200,255,".concat(t >= 1 ? 1 : t, ");")
                        }
                    }
                },
                onLoad: function() {
                    this.getUserOrderCondition()
                },
                onShow: function() {
                    this.getRolllists(), this.getgoodsListsA()
                },
                onReachBottom: function() {},
                onPageScroll: function(t) {
                    this.pageScrollTop = Math.floor(t.scrollTop)
                },
                methods: {
                    finish: function() {
                        this.getgoodsListsA()
                    },
                    getRolllists: function() {
                        var t = this;
                        this.$api.request.httpGet("/coin/recharge/getCzRoll", {}, (function(i) {
                            for (var e = [], n = i.records, a = 0; a < n.length; a++) {
                                var s = n[a],
                                    o = {
                                        title: s.title,
                                        time: s.time
                                    };
                                e.push(o)
                            }
                            t.rollList = e
                        }))
                    },
                    getUserOrderCondition: function() {
                        var t = this;
                        this.$api.request.httpGet("/coin/order/getUserOrderCondition", {}, (function(i) {
                            t.userOrderCondition.vipLevel = i.data.vipLevel, t.userOrderCondition.zyrs = i.data.zyrs
                        }))
                    },
                    silenceLogin: function() {
                        var t = this,
                            i = uni.getStorageSync("userId"),
                            e = uni.getStorageSync("userPwd");
                        if (i && e) {
                            var n = {
                                loginName: i,
                                password: e
                            };
                            uni.request({
                                header: {
                                    "Content-Type": "application/json;charset=utf-8"
                                },
                                url: this.$api.request.apiBaseUrl + "/system/login",
                                method: "POST",
                                data: JSON.stringify(n),
                                success: function(i) {
                                    console.log(i), "0" == i.data.errCode ? (uni.setStorageSync(t.$api.request.authHeader, i.header[t.$api.request.authHeader]), console.log("login sucessful")) : console.log("login failed")
                                },
                                fail: function() {
                                    console.log("Network exception, please try again later")
                                }
                            })
                        }
                    },
                    goto: function(t) {
                        uni.navigateTo({
                            url: "../details/details?id=" + t
                        })
                    },
                    goOrder: function() {
                        uni.navigateTo({
                            url: "../Purchased/Purchased"
                        })
                    },
                    getgoodsListsA: function() {
                        var t = this;
                        this.$api.request.httpGet("/coin/product/getProductPageList", {}, (function(i) {
                            for (var e = [], n = [], a = i.records, s = 0; s < a.length; s++) {
                                var o = a[s],
                                    r = {
                                        id: o.id,
                                        title: o.name,
                                        descript: o.descript ? o.descript : "",
                                        url: o.thumb,
                                        price: null == o.limitdates || o.limitdates > 0 ? o.price : o.orgprice,
                                        invalidDate: o.invalidDate,
                                        hicome: o.profit,
                                        dicome: 24 * o.profit,
                                        limitLevel: o.limitLevel,
                                        limitYq: o.limitYq,
                                        limitnum: o.limitnum ? o.limitnum : 9999,
                                        orgprice: o.orgprice,
                                        limitdates: o.limitdates
                                    };
                                r.limitdates || 0 == r.price ? e.push(r) : n.push(r)
                            }
                            t.goodsListsA = e.concat(n)
                        }))
                    },
                    showModal: function(t) {
                        this.amount = 1, this.selItem = t;
                        var i = !0;
                        this.selItem.limitLevel && this.userOrderCondition.vipLevel < this.selItem.limitLevel && (i = !1), this.selItem.limitYq && this.userOrderCondition.zyrs < this.selItem.limitYq && (i = !1), this.buyVisable = i, this.modalName = "bottomModal"
                    },
                    hideModal: function(t) {
                        this.modalName = null
                    },
                    imagetz: function(t) {
                        uni.navigateTo({
                            url: "../details/details?id=" + t.productId
                        })
                    },
                    buy: function(t) {
                        var i = this;
                        this.buyVisable && (this.$api.request.httpPost("/coin/order/orderCreate", {
                            productId: t,
                            amount: this.amount
                        }, (function(t) {
                            "please rechare" === t.msg ? uni.navigateTo({
                                url: "../recharge/recharge"
                            }) : 0 === t.errCode ? i.tools.showWaring("Purchase successful") : i.tools.showWaring(t.msg)
                        })), this.modalName = null)
                    }
                }
            };
            i.default = n
        },
        b8f2: function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("a3e8"),
                a = e.n(n);
            for (var s in n)["default"].indexOf(s) < 0 && function(t) {
                e.d(i, t, (function() {
                    return n[t]
                }))
            }(s);
            i["default"] = a.a
        },
        be8b: function(t, i, e) {
            "use strict";
            e("7a82"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0, e("a9e3");
            var n = {
                props: {
                    time: {
                        type: [String, Number],
                        default: uni.$u.props.countDown.time
                    },
                    format: {
                        type: String,
                        default: uni.$u.props.countDown.format
                    },
                    autoStart: {
                        type: Boolean,
                        default: uni.$u.props.countDown.autoStart
                    },
                    millisecond: {
                        type: Boolean,
                        default: uni.$u.props.countDown.millisecond
                    }
                }
            };
            i.default = n
        },
        d4c2: function(t, i, e) {
            "use strict";
            e.d(i, "b", (function() {
                return a
            })), e.d(i, "c", (function() {
                return s
            })), e.d(i, "a", (function() {
                return n
            }));
            var n = {
                    uCountDown: e("fcb9").default,
                    uniNumberBox: e("3a3e").default
                },
                a = function() {
                    var t = this,
                        i = t.$createElement,
                        n = t._self._c || i;
                    return n("v-uni-view", [n("v-uni-view", {
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t.goOrder()
                            }
                        }
                    }, [n("v-uni-image", {
                        staticClass: "img",
                        attrs: {
                            src: e("d66b")
                        }
                    })], 1), t._l(t.goodsListsA, (function(i, e) {
                        return n("v-uni-view", {
                            key: e,
                            staticClass: "margin-left-lg margin-tb padding-tb-sm",
                            staticStyle: {
                                "background-color": "rgba(255,255,255,1)",
                                "border-bottom": "#aaaaaa 1upx solid"
                            }
                        }, [n("v-uni-view", {
                            staticClass: "padding-bottom padding-right flex"
                        }, [n("v-uni-view", [n("v-uni-view", {
                            staticClass: "margin-bottom flex align-center"
                        }, [n("v-uni-text", {
                            staticClass: "text-black text-bold"
                        }, [t._v(t._s(i.title))])], 1), n("v-uni-image", {
                            staticClass: "radius",
                            staticStyle: {
                                width: "350upx",
                                height: "233upx",
                                "box-shadow": "5upx 5upx 20upx 0 #aaaaaa"
                            },
                            attrs: {
                                src: i.url
                            }
                        })], 1), n("v-uni-view", {
                            staticClass: "margin-left flex flex-direction justify-between"
                        }, [n("v-uni-view", [n("v-uni-text", {
                            staticClass: "text-price text-red text-xl"
                        }, [t._v(t._s(i.price))]), i.limitdates ? n("v-uni-text", {
                            staticClass: "source_price margin-left-sm"
                        }, [t._v(t._s(i.orgprice))]) : t._e()], 1), n("v-uni-view", {
                            staticClass: "flex"
                        }, [n("v-uni-view", {
                            staticStyle: {
                                width: "150upx"
                            }
                        }, [n("v-uni-view", {
                            staticClass: "text-cycle"
                        }, [t._v(t._s(i.invalidDate))]), n("v-uni-view", {
                            staticClass: "margin-top-sm text-sm"
                        }, [t._v("Cycle")])], 1), n("v-uni-view", [n("v-uni-view", {
                            staticClass: "text-price"
                        }, [t._v(t._s(parseFloat(i.dicome).toFixed(2)))]), n("v-uni-view", {
                            staticClass: "margin-top-sm text-sm"
                        }, [t._v("Daily")])], 1)], 1), n("v-uni-button", {
                            staticClass: "cu-btn radius",
                            class: [i.limitdates ? "bg-red" : "bg-blue"],
                            staticStyle: {
                                width: "280upx"
                            },
                            on: {
                                click: function(e) {
                                    arguments[0] = e = t.$handleEvent(e), t.showModal(i)
                                }
                            }
                        }, [i.limitdates ? t._e() : n("v-uni-text", [n("v-uni-text", {
                            staticClass: "cuIcon-cart margin-right"
                        }), n("v-uni-text", [t._v("Buy")])], 1), i.limitdates ? n("v-uni-view", {
                            staticClass: "flex align-center"
                        }, [n("v-uni-text", {
                            staticClass: "cuIcon-time margin-right-xs"
                        }), n("u-count-down", {
                            attrs: {
                                time: i.limitdates,
                                format: "HH:mm:ss",
                                autoStart: !0,
                                millisecond: !0
                            },
                            on: {
                                finish: function(i) {
                                    arguments[0] = i = t.$handleEvent(i), t.finish.apply(void 0, arguments)
                                }
                            }
                        })], 1) : t._e()], 1)], 1)], 1)], 1)
                    })), n("v-uni-view", {
                        staticClass: "cu-modal",
                        class: "bottomModal" == t.modalName ? "show" : ""
                    }, [n("v-uni-view", {
                        staticClass: "cu-dialog bg-mask"
                    }, [n("v-uni-view", [n("v-uni-view", {
                        staticClass: "flex align-center justify-between padding-lg bg-tc",
                        staticStyle: {
                            width: "100%"
                        }
                    }, [n("v-uni-view", {
                        staticClass: "flex"
                    }, [n("v-uni-image", {
                        staticStyle: {
                            width: "100upx",
                            height: "100upx",
                            "border-radius": "10upx"
                        },
                        attrs: {
                            src: t.selItem.url,
                            mode: "aspectFill"
                        }
                    }), n("v-uni-view", {
                        staticClass: "flex flex-direction justify-between padding-top-xs margin-left-xs text-black"
                    }, [n("v-uni-view", {
                        staticClass: "text-bold text-sm",
                        staticStyle: {
                            "font-style": "italic"
                        }
                    }, [t._v(t._s(t.selItem.title))]), n("v-uni-view", {
                        staticClass: "text-cycle text-left"
                    }, [t._v(t._s(t.selItem.invalidDate))])], 1)], 1), t.selItem.limitdates ? n("v-uni-view", {
                        staticClass: "flex align-center"
                    }, [n("v-uni-text", {
                        staticClass: "cuIcon-time margin-right-xs text-black"
                    }), n("u-count-down", {
                        attrs: {
                            time: t.selItem.limitdates,
                            format: "HH:mm:ss",
                            autoStart: !0,
                            millisecond: !0
                        },
                        on: {
                            finish: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t.finish.apply(void 0, arguments)
                            }
                        }
                    })], 1) : t._e()], 1), n("v-uni-view", {
                        staticClass: "bg-white padding-top-xs"
                    }, [n("v-uni-view", {
                        staticClass: "flex justify-around align-center margin-lr bg-white margin-top-xl",
                        staticStyle: {
                            "border-radius": "20upx"
                        }
                    }, [n("v-uni-view", {
                        staticClass: "radius"
                    }, [n("v-uni-view", {
                        staticClass: "text-lg text-black text-price"
                    }, [t._v(t._s(parseFloat(t.selItem.hicome * this.amount).toFixed(2)))]), n("v-uni-view", {
                        staticClass: "margin-top-sm text-sm"
                    }, [t._v("Hourly")])], 1), n("v-uni-view", {
                        staticClass: "bg-grey",
                        staticStyle: {
                            height: "80upx",
                            width: "1upx"
                        }
                    }), n("v-uni-view", {
                        staticClass: "padding-tb-sm radius"
                    }, [n("v-uni-view", {
                        staticClass: "text-lg text-black text-price"
                    }, [t._v(t._s(parseFloat(t.selItem.dicome * this.amount).toFixed(2)))]), n("v-uni-view", {
                        staticClass: "margin-top-sm text-sm"
                    }, [t._v("Daily")])], 1)], 1), n("v-uni-view", {
                        staticClass: "flex justify-between align-center",
                        staticStyle: {
                            padding: "100upx 60upx 60upx 60upx"
                        }
                    }, [n("v-uni-view", {
                        staticClass: "text-left"
                    }, [n("v-uni-text", {
                        staticClass: "text-price text-red",
                        staticStyle: {
                            "font-size": "160%"
                        }
                    }, [t._v(t._s(t.selItem.price * this.amount))])], 1), n("uni-number-box", {
                        attrs: {
                            min: 1,
                            max: t.selItem.limitnum,
                            background: "#e54d42",
                            color: "#ffffff"
                        },
                        model: {
                            value: t.amount,
                            callback: function(i) {
                                t.amount = i
                            },
                            expression: "amount"
                        }
                    })], 1)], 1), n("v-uni-view", {
                        staticClass: "padding-lr-lg padding-tb-xl flex justify-between bg-List"
                    }, [n("v-uni-button", {
                        staticClass: "cu-btn block radius lg line-black",
                        staticStyle: {
                            width: "280upx"
                        },
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t.hideModal.apply(void 0, arguments)
                            }
                        }
                    }, [t._v("Cancel")]), n("v-uni-button", {
                        staticClass: "cu-btn block lg radius",
                        class: t.buyVisable ? "bg-Log" : "bg-gray text-grey",
                        staticStyle: {
                            width: "280upx"
                        },
                        on: {
                            click: function(i) {
                                arguments[0] = i = t.$handleEvent(i), t.buy(t.selItem.id)
                            }
                        }
                    }, [n("v-uni-text", {
                        staticClass: "margin-left-sm"
                    }, [t._v("Confirm")])], 1)], 1)], 1)], 1)], 1)], 2)
                },
                s = []
        },
        d66b: function(t, i, e) {
            t.exports = e.p + "static/img/cart.a6d30683.png"
        },
        e9a0: function(t, i, e) {
            "use strict";
            var n = e("a7f0"),
                a = e.n(n);
            a.a
        },
        fcb9: function(t, i, e) {
            "use strict";
            e.r(i);
            var n = e("4554"),
                a = e("2215");
            for (var s in a)["default"].indexOf(s) < 0 && function(t) {
                e.d(i, t, (function() {
                    return a[t]
                }))
            }(s);
            e("74da");
            var o = e("f0c5"),
                r = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "679e1595", null, !1, n["a"], void 0);
            i["default"] = r.exports
        }
    }
]);