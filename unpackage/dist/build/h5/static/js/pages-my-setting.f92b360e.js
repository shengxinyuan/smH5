(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting"],{"063b":function(t,n,i){"use strict";var e=i("d4a7"),o=i.n(e);o.a},"0ab58":function(t,n,i){"use strict";i.r(n);var e=i("7e98"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},"2cb1":function(t,n,i){"use strict";var e=i("b4d5"),o=i.n(e);o.a},5141:function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}));var e={uIcon:i("e5d9").default},o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"cont"},[i("v-uni-view",{staticClass:"items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_set(99)}}},[i("v-uni-view",{staticClass:"items_l"},[t._v("实名认证")]),t.shiname?i("v-uni-view",{staticClass:"items_r"},[t._v("未认证"),i("v-uni-text",{staticClass:"views"}),i("u-icon",{attrs:{name:"arrow-right"}})],1):i("v-uni-view",{staticClass:"items_r"},[t._v("已认证"),i("u-icon",{attrs:{name:"arrow-right"}})],1)],1),t._l(t.list,(function(n,e){return i("v-uni-view",{key:e,staticClass:"items",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.go_set(e)}}},[i("v-uni-view",{staticClass:"items_l"},[t._v(t._s(n.tit))]),i("v-uni-view",{staticClass:"items_r"},[i("u-icon",{attrs:{name:"arrow-right"}})],1)],1)})),i("v-uni-view",{staticClass:"log_out",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.log_outs.apply(void 0,arguments)}}},[t._v("退出登录")])],2)},a=[]},"6fe3":function(t,n,i){"use strict";i.r(n);var e=i("5141"),o=i("0ab58");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("2cb1"),i("063b");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"605bd558",null,!1,e["a"],s);n["default"]=c.exports},"7e98":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{list:[{tit:"账号安全"},{tit:"个人信息"},{tit:"分享APP"},{tit:"新手教程"},{tit:"帮助与客服"},{tit:"关于我们"},{tit:"意见反馈"},{tit:"提现设置"}],shiname:!1}},onShow:function(){var n=this;this.$api.get("info").then((function(i){t("log",i," at pages/my/setting.vue:48"),1==i.status&&(""!=i.data.truename&&""!=i.data.id_number?n.shiname=!1:n.shiname=!0)}))},methods:{log_outs:function(){uni.showModal({title:"温馨提示",content:"您要退出当前账号吗？",success:function(n){n.confirm?(uni.removeStorageSync("token"),uni.removeStorageSync("member_info"),uni.removeStorageSync("user_infotit"),uni.reLaunch({url:"../login/login"})):n.cancel&&t("log","取消"," at pages/my/setting.vue:74")}.bind(this)})},go_set:function(t){0==t?this.com.navto("./user_set"):1==t?this.com.navto("./user_text"):2==t?this.com.navto("../../pages/community/shop-code"):3==t?this.com.navto("./olie_course"):4==t?this.com.navto("../../pages/service/service"):5==t?this.com.navto("../../pages/my/aboutus"):6==t?this.com.navto("./fankui"):7==t?this.com.navto("../set-shop/set-withdraw"):99==t&&this.com.navto("./Certification")}}};n.default=i}).call(this,i("0de9")["log"])},a9b2:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.log_out[data-v-605bd558]{width:90%;padding:%?20?%;border-radius:%?50?%;border:%?1?% solid #dd2626;font-size:%?30?%;color:#dd2626;text-align:center;position:fixed;left:5%;bottom:10%}.items[data-v-605bd558]{padding:0 3%;display:flex;justify-content:space-between;border-bottom:%?1?% solid #eee;line-height:%?90?%;font-size:%?30?%;background-color:#fff}.items .items_r[data-v-605bd558]{color:#999}.items .items_r .views[data-v-605bd558]{display:inline-block;margin:0 %?20?%;width:%?16?%;height:%?16?%;background-color:red;border-radius:50%}.items[data-v-605bd558]:nth-child(5){margin:%?40?% 0}',""]),t.exports=n},b4d5:function(t,n,i){var e=i("d7ca");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("5837e00d",e,!0,{sourceMap:!1,shadowMode:!1})},d4a7:function(t,n,i){var e=i("a9b2");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("2d29455a",e,!0,{sourceMap:!1,shadowMode:!1})},d7ca:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,"uni-page-body[data-v-605bd558]{background-color:#f1f1f1}body.?%PAGE?%[data-v-605bd558]{background-color:#f1f1f1}",""]),t.exports=n}}]);