(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-bangding"],{2684:function(n,e,t){"use strict";var i=t("a659"),o=t.n(i);o.a},"2efc":function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.login_s[data-v-797bf874]{width:90%;margin-left:5%;height:%?80?%;text-align:center;line-height:%?80?%;border-radius:%?50?%;background-color:#1e3066;color:#fff;margin-top:%?100?%}.login[data-v-797bf874]{width:100%;height:100vh;background-color:#f6f6f6;display:flex;flex-wrap:wrap;padding:%?30?% 0}.login .box[data-v-797bf874]{width:100%}.login .box .message[data-v-797bf874]{width:100%;background-color:#fff;padding:0 %?30?%;display:flex;height:%?120?%;align-items:center;justify-content:space-between;border-bottom:%?1?% solid #f6f6f6}.login .box .message .tack[data-v-797bf874]{padding:%?20?%;background-color:#1e3066;color:#fff;border-radius:%?40?%}',""]),n.exports=e},"70dd":function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}));var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-view",{staticClass:"login"},[t("v-uni-view",{staticClass:"box"},[t("v-uni-view",{staticClass:"message"},[t("v-uni-input",{attrs:{type:"text",value:"",placeholder:"手机号码",maxlength:"11"},model:{value:n.phone,callback:function(e){n.phone=e},expression:"phone"}})],1),t("v-uni-view",{staticClass:"message"},[t("v-uni-input",{attrs:{type:"text",placeholder:"验证码"},model:{value:n.codes,callback:function(e){n.codes=e},expression:"codes"}}),n.yzm_show?t("v-uni-view",{staticClass:"tack",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.getcode.apply(void 0,arguments)}}},[n._v(n._s(n.get_code_tit))]):t("v-uni-view",{staticClass:"but"},[n._v(n._s(n.time)+"s")])],1),t("v-uni-view",{staticClass:"message"},[t("v-uni-view",{staticClass:"left_s"},[t("v-uni-input",{attrs:{type:"text",placeholder:"请输入邀请码"},model:{value:n.bn,callback:function(e){n.bn=e},expression:"bn"}})],1)],1),t("v-uni-view",{staticClass:"login_s",on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.go_ind.apply(void 0,arguments)}}},[n._v("登录")])],1)],1)},a=[]},a59d:function(n,e,t){"use strict";t.r(e);var i=t("c800"),o=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=o.a},a659:function(n,e,t){var i=t("2efc");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=t("4f06").default;o("42db6231",i,!0,{sourceMap:!1,shadowMode:!1})},c800:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{pass_type:"password",phone:"",pass:"",yzm_show:!0,get_code_tit:"获取验证码",bn:"",codes:"",note:"",time:60,noclick:!0}},methods:{getcode:function(){var n=this;this.time=60,""!=this.phone&&/^1[3456789]\d{9}$/.test(this.phone)?(this.yzm_show=!1,this.$api.get("messagecode",{mobile:this.phone}).then((function(e){if(console.log(e),1==e.status){n.note=e.data.note;var t=setInterval((function(){n.time--,0==n.time&&(clearInterval(t),n.hq_note="重新获取",n.yzm_show=!0)}),1e3)}else uni.showToast({icon:"none",title:e.message})}))):uni.showToast({icon:"none",title:"请检查手机号"})},go_ind:function(){var n=""==this.bn?0:this.bn;""==this.phone||""==this.codes?uni.showToast({icon:"none",title:"请填写手机号或验证码"}):this.note!=this.codes?uni.showToast({icon:"none",title:"验证码错误"}):this.$api.post("bindingphone",{mobile:this.phone,note:this.codes,openid:uni.getStorageSync("openid"),bn:n}).then((function(n){if(console.log(n),1==n.status){var e=(new Date).getTime(),t=1e3*n.data.member_info.vip_time;t<=e?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",n.data.token),uni.setStorageSync("member_info",n.data.member_info),uni.setStorageSync("member_info_img",n.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var i=2,o=setInterval((function(){0==i?(clearInterval(o),uni.reLaunch({url:"../index/index"})):i-=1}),1e3)}else uni.showToast({icon:"none",title:n.message})}))}}};e.default=i},d26b:function(n,e,t){"use strict";t.r(e);var i=t("70dd"),o=t("a59d");for(var a in o)"default"!==a&&function(n){t.d(e,n,(function(){return o[n]}))}(a);t("2684");var s,c=t("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"797bf874",null,!1,i["a"],s);e["default"]=r.exports}}]);