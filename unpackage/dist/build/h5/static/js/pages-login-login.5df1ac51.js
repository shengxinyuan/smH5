(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login","components-zs-toast-hear-zs-toast-hear"],{2468:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.toast[data-v-4cff192b]{position:fixed;left:0;top:0;width:100%;height:100vh;background-color:rgba(0,0,0,.36)}.toast .toast_it[data-v-4cff192b]{width:80%;height:%?660?%;background-color:#fff;margin-left:10%;margin-top:40%;border-radius:%?20?%;padding-top:%?40?%}.toast .toast_it .toast_it_title[data-v-4cff192b]{width:100%;text-align:center;font-size:%?40?%}.toast .toast_it .toast_it_cont[data-v-4cff192b]{width:100%;padding:%?24?% %?50?%;line-height:%?40?%;font-size:%?30?%}.toast .toast_it .toast_but[data-v-4cff192b]{width:100%;display:flex;justify-content:space-between;font-size:%?38?%;line-height:%?88?%;border-top:%?1?% solid #f1f1f1;margin-top:%?20?%}.toast .toast_it .toast_but uni-view[data-v-4cff192b]{width:50%;text-align:center}',""]),t.exports=e},6207:function(t,e,n){"use strict";n.r(e);var i=n("be32"),a=n("b208");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e9f2");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"4cff192b",null,!1,i["a"],s);e["default"]=c.exports},"7ca2":function(t,e,n){var i=n("2468");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b47b0dc4",i,!0,{sourceMap:!1,shadowMode:!1})},"9dc3":function(t,e,n){"use strict";n.r(e);var i=n("aadc"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a84c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{no_app:function(){},yes_xy:function(){this.$emit("yesag")},fuw:function(t){this.$emit("agreement",t)}}};e.default=i},aad7:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uCheckboxGroup:n("bd1c").default,uCheckbox:n("3e87").default,uIcon:n("45cf").default,zsToastHear:n("6207").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"register"},[n("v-uni-view",{staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"head"},[n("v-uni-view",{class:["title",0==t.Inv?"choose":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qieh(0)}}},[t._v("验证码登录")]),n("v-uni-view",{class:["title",1==t.Inv?"choose":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.qieh(1)}}},[t._v("账号密码登录")])],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==t.Inv,expression:"Inv == 0"}],staticClass:"choose_ka"},[n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{attrs:{type:"text",placeholder:"输入手机号",maxlength:"11"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{attrs:{type:"text",placeholder:"输入验证码"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.app_login.apply(void 0,arguments)}},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}),t.code_show?n("v-uni-text",{staticClass:"give",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.acquireCode.apply(void 0,arguments)}}},[t._v(t._s(t.code_tit))]):n("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.time)+"s")])],1),n("v-uni-view",{staticClass:"other"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_register.apply(void 0,arguments)}}},[t._v("注册")])],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.Inv,expression:"Inv == 1"}],staticClass:"choose_ka"},[n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{attrs:{type:"text",placeholder:"输入账号",maxlength:"11"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"write"},[n("v-uni-input",{attrs:{type:"password",placeholder:"输入密码"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.app_login.apply(void 0,arguments)}},model:{value:t.pass,callback:function(e){t.pass=e},expression:"pass"}})],1),n("v-uni-view",{staticClass:"other"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_register.apply(void 0,arguments)}}},[t._v("注册")]),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_forget(1)}}},[t._v("忘记密码？")])],1)],1),n("v-uni-view",{staticClass:"login_s",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.app_login.apply(void 0,arguments)}}},[t._v("登录")]),n("v-uni-view",{staticClass:"agreement"},[n("u-checkbox-group",{staticClass:"radio"},[n("u-checkbox",{attrs:{size:"45",shape:"circle","active-color":"#1E3066"},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),t._v("阅读并同意"),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreement(1)}}},[t._v("《平台服务协议》")]),t._v("及"),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.agreement(0)}}},[t._v("《隐私政策》")])],1)],1),n("v-uni-view",{staticClass:"three_s"},[n("v-uni-view",{staticClass:"titles"},[t._v("—————— 其他方式登录 ——————")]),n("v-uni-view",{staticClass:"weixin",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.weixin.apply(void 0,arguments)}}},[n("v-uni-view",[n("u-icon",{attrs:{name:"weixin-circle-fill",color:"#08BA06",size:"90"}}),n("v-uni-text",[t._v("微信")])],1)],1)],1)],1),t.page_show?n("zs-toast-hear",{on:{yesag:function(e){arguments[0]=e=t.$handleEvent(e),t.yesag.apply(void 0,arguments)},agreement:function(e){arguments[0]=e=t.$handleEvent(e),t.agreement.apply(void 0,arguments)}}}):t._e()],1)},o=[]},aadc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{checked:!1,Inv:0,page_show:!1,phone:"",pass:"",note:"",code:"",code_tit:"获取验证码",time:60,code_show:!0,cli_type:!0}},onLoad:function(){uni.getStorageSync("type")?this.page_show=!1:this.page_show=!0},methods:{qieh:function(t){this.Inv=t,0==t?this.pass="":this.note=""},yesag:function(){uni.setStorageSync("type",1),this.page_show=!1,this.checked=!0},agreement:function(t){1==t?this.com.navto("./fuwu"):this.com.navto("./yinsi")},acquireCode:function(){var t=this;if(""!=this.phone&&/^1[3456789]\d{9}$/.test(this.phone)){this.time=60,this.code_show=!1;var e=setInterval((function(){0==t.time?(t.code_tit="再次获取",t.code_show=!0,clearInterval(e)):t.time-=1}),1e3);this.$api.get("messagecode",{mobile:this.phone}).then((function(t){console.log(t)}))}else this.com.msg("请检查手机号")},app_login:function(){1==this.checked?this.cli_type&&this.login_function():this.com.msg("请阅读并同意下方协议")},login_function:function(){var t=this;this.$api.post("login",{mobile:this.phone,password:this.pass,note:this.note}).then((function(e){if(console.log(e),1==e.status){t.cli_type=!1;var n=(new Date).getTime(),i=1e3*e.data.member_info.vip_time;i<=n?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",e.data.token),uni.setStorageSync("member_info",e.data.member_info),uni.setStorageSync("member_info_img",e.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var a=2,o=setInterval((function(){0==a?(clearInterval(o),t.com.rel("../index/index")):a-=1}),1e3)}else t.com.msg(e.message)}))},go_register:function(){uni.navigateTo({url:"./register"})},go_forget:function(t){uni.navigateTo({url:"./forget?type="+t})},weixin:function(){var t=this;uni.login({provider:"weixin",success:function(e){uni.setStorageSync("openid",e.authResult.openid),t.$api.post("getWxUserInfo",{access_token:e.authResult.access_token,openid:e.authResult.openid}).then((function(e){if(console.log(e),1==e.status)if(0==e.data.login_type)t.com.navto("./bangding");else{var n=(new Date).getTime(),i=1e3*e.data.member_info.vip_time;i<=n?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",e.data.token),uni.setStorageSync("member_info",e.data.member_info),uni.setStorageSync("member_info_img",e.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var a=2,o=setInterval((function(){0==a?(clearInterval(o),uni.reLaunch({url:"../index/index"})):a-=1}),1e3)}}))}})}}};e.default=i},b208:function(t,e,n){"use strict";n.r(e);var i=n("a84c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},be32:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"toast"},[n("v-uni-view",{staticClass:"toast_it"},[n("v-uni-view",{staticClass:"toast_it_title"},[t._v("服务协议和隐私政策")]),n("v-uni-view",{staticClass:"toast_it_cont"},[t._v('请你务必审慎阅读，充分理解"服务协议"和"隐私政策"各条款，包括但不限于：为了向你提供即时通讯、内容分享等服务，我们需要搜集你的设备信息、操作日志等个人信息。你可以在"设置"中查看、变更、删除个人信息并管理你的授权。你可阅读'),n("v-uni-text",{staticStyle:{color:"#2B85E4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fuw(1)}}},[t._v("《服务协议》")]),t._v("和"),n("v-uni-text",{staticStyle:{color:"#2B85E4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fuw(2)}}},[t._v("《隐私政策》")]),t._v('了解详细信息。如你同意、请点击"同意"开始接受我们的服务。')],1),n("v-uni-view",{staticClass:"toast_but"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.no_app.apply(void 0,arguments)}}},[t._v("暂不使用")]),n("v-uni-view",{staticStyle:{color:"#2B85E4"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yes_xy.apply(void 0,arguments)}}},[t._v("同意")])],1)],1)],1)],1)},o=[]},d8fc:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.register[data-v-117ecd3f]{background-color:#f6f6f6;height:100vh;display:flex;flex-wrap:wrap;padding:%?35?% %?35?%}.register .head[data-v-117ecd3f]{width:70%;font-size:%?38?%;font-weight:bolder;margin:%?50?% 0 %?80?% 0;display:flex;justify-content:space-between}.register .head .title[data-v-117ecd3f]{color:#999}.register .head .choose[data-v-117ecd3f]{color:#1e3066}.register .write[data-v-117ecd3f]{width:100%;display:flex;justify-content:space-between;height:%?100?%;align-items:center;border-bottom:%?1?% solid #dedede;margin-top:%?20?%}.register .write .give[data-v-117ecd3f]{padding:%?10?% %?20?%;border:%?1?% solid #1e3066;color:#1e3066;border-radius:%?35?%;font-size:%?28?%}.register .other[data-v-117ecd3f]{width:100%;height:%?100?%;line-height:%?100?%;display:flex;justify-content:space-between}.register .login_s[data-v-117ecd3f]{width:100%;height:%?80?%;text-align:center;line-height:%?80?%;border-radius:%?50?%;background-color:#1e3066;color:#fff;margin-top:%?100?%}.register .agreement[data-v-117ecd3f]{width:100%;height:%?90?%;line-height:%?90?%;font-size:%?26?%;color:#999;text-align:center}.register .agreement uni-text[data-v-117ecd3f]{color:#1e3066}.register .three_s[data-v-117ecd3f]{width:100%;display:flex;flex-wrap:wrap;margin-top:%?100?%}.register .three_s .titles[data-v-117ecd3f]{color:#b3b3b3;margin:0 auto}.register .three_s .weixin[data-v-117ecd3f]{width:100%;margin-top:%?50?%}.register .three_s .weixin uni-view[data-v-117ecd3f]{width:%?90?%;display:flex;flex-wrap:wrap;margin:0 auto}.register .three_s .weixin uni-view uni-text[data-v-117ecd3f]{width:100%;text-align:center;margin-top:%?10?%;color:#aaa}',""]),t.exports=e},dc64:function(t,e,n){"use strict";var i=n("edfb"),a=n.n(i);a.a},e9f2:function(t,e,n){"use strict";var i=n("7ca2"),a=n.n(i);a.a},edfb:function(t,e,n){var i=n("d8fc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4f1e14cc",i,!0,{sourceMap:!1,shadowMode:!1})},f42d:function(t,e,n){"use strict";n.r(e);var i=n("aad7"),a=n("9dc3");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("dc64");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"117ecd3f",null,!1,i["a"],s);e["default"]=c.exports}}]);