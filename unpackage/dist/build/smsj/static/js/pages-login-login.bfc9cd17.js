(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"1dc7":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{checked:!1,Inv:0,page_show:!1,phone:"",pass:"",note:"",code:"",code_tit:"获取验证码",time:60,code_show:!0}},onLoad:function(){uni.getStorageSync("type")?this.page_show=!1:this.page_show=!0},methods:{qieh:function(e){this.Inv=e,0==e?this.pass="":this.note=""},yesag:function(){uni.setStorageSync("type",1),this.page_show=!1,this.checked=!0},agreement:function(e){1==e?this.com.navto("./fuwu"):this.com.navto("./yinsi")},acquireCode:function(){var t=this;if(""!=this.phone&&/^1[3456789]\d{9}$/.test(this.phone)){this.time=60,this.code_show=!1;var i=setInterval((function(){0==t.time?(t.code_tit="再次获取",t.code_show=!0,clearInterval(i)):t.time-=1}),1e3);this.$api.get("messagecode",{mobile:this.phone}).then((function(t){e("log",t," at pages/login/login.vue:119")}))}else this.com.msg("请检查手机号")},app_login:function(){var t=this;1==this.checked?this.$api.post("login",{mobile:this.phone,password:this.pass,note:this.note}).then((function(i){if(e("log",i," at pages/login/login.vue:128"),1==i.status){var n=(new Date).getTime(),a=1e3*i.data.member_info.vip_time;a<=n?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",i.data.token),uni.setStorageSync("member_info",i.data.member_info),uni.setStorageSync("member_info_img",i.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var o=2,s=setInterval((function(){0==o?(clearInterval(s),t.com.rel("../index/index")):o-=1}),1e3)}else t.com.msg(i.message)})):this.com.msg("请阅读并同意下方协议")},go_register:function(){uni.navigateTo({url:"./register"})},go_forget:function(e){uni.navigateTo({url:"./forget?type="+e})},weixin:function(){var t=this;uni.login({provider:"weixin",success:function(i){var n=this;uni.setStorageSync("openid",i.authResult.openid),t.$api.post("getWxUserInfo",{access_token:i.authResult.access_token,openid:i.authResult.openid}).then((function(i){if(e("log",i," at pages/login/login.vue:184"),1==i.status)if(0==i.data.login_type)t.com.navto("./bangding");else{var a=(new Date).getTime(),o=1e3*i.data.member_info.vip_time;o<=a?uni.setStorageSync("viptype",!1):uni.setStorageSync("viptype",!0),uni.setStorageSync("token",i.data.token),uni.setStorageSync("member_info",i.data.member_info),uni.setStorageSync("member_info_img",i.data.member_info.avatar),uni.setStorageSync("coupon",0),uni.showToast({title:"请稍后...",icon:"loading",duration:2e3});var s=2,r=setInterval((function(){0==s?(clearInterval(r),n.com.rel("../index/index")):s-=1}),1e3)}}))}})}}};t.default=i}).call(this,i("0de9")["log"])},"1ecd":function(e,t,i){"use strict";var n=i("99e5"),a=i.n(n);a.a},"579e":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uCheckboxGroup:i("2a5c").default,uCheckbox:i("2de0").default,uIcon:i("6abe").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"register"},[i("v-uni-view",{staticStyle:{width:"100%"}},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{class:["title",0==e.Inv?"choose":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.qieh(0)}}},[e._v("验证码登录")]),i("v-uni-view",{class:["title",1==e.Inv?"choose":""],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.qieh(1)}}},[e._v("账号密码登录")])],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0==e.Inv,expression:"Inv == 0"}],staticClass:"choose_ka"},[i("v-uni-view",{staticClass:"write"},[i("v-uni-input",{attrs:{type:"text",placeholder:"输入手机号",maxlength:"11"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("v-uni-view",{staticClass:"write"},[i("v-uni-input",{attrs:{type:"text",placeholder:"输入验证码"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.app_login.apply(void 0,arguments)}},model:{value:e.note,callback:function(t){e.note=t},expression:"note"}}),e.code_show?i("v-uni-text",{staticClass:"give",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.acquireCode.apply(void 0,arguments)}}},[e._v(e._s(e.code_tit))]):i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v(e._s(e.time)+"s")])],1),i("v-uni-view",{staticClass:"other"},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go_register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==e.Inv,expression:"Inv == 1"}],staticClass:"choose_ka"},[i("v-uni-view",{staticClass:"write"},[i("v-uni-input",{attrs:{type:"text",placeholder:"输入账号",maxlength:"11"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("v-uni-view",{staticClass:"write"},[i("v-uni-input",{attrs:{type:"password",placeholder:"输入密码"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.app_login.apply(void 0,arguments)}},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}})],1),i("v-uni-view",{staticClass:"other"},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go_register.apply(void 0,arguments)}}},[e._v("注册")]),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.go_forget(1)}}},[e._v("忘记密码？")])],1)],1),i("v-uni-view",{staticClass:"login_s",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.app_login.apply(void 0,arguments)}}},[e._v("登录")]),i("v-uni-view",{staticClass:"agreement"},[i("u-checkbox-group",{staticClass:"radio"},[i("u-checkbox",{attrs:{size:"45",shape:"circle","active-color":"#1E3066"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}),e._v("阅读并同意"),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.agreement(1)}}},[e._v("《平台服务协议》")]),e._v("及"),i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.agreement(0)}}},[e._v("《隐私政策》")])],1)],1),i("v-uni-view",{staticClass:"three_s"},[i("v-uni-view",{staticClass:"titles"},[e._v("—————— 其他方式登录 ——————")]),i("v-uni-view",{staticClass:"weixin",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.weixin.apply(void 0,arguments)}}},[i("v-uni-view",[i("u-icon",{attrs:{name:"weixin-circle-fill",color:"#08BA06",size:"90"}}),i("v-uni-text",[e._v("微信")])],1)],1)],1)],1)],1)},o=[]},"99e5":function(e,t,i){var n=i("f690");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("f3a84702",n,!0,{sourceMap:!1,shadowMode:!1})},a532:function(e,t,i){"use strict";i.r(t);var n=i("579e"),a=i("ac84");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("1ecd");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"94fce6b6",null,!1,n["a"],s);t["default"]=c.exports},ac84:function(e,t,i){"use strict";i.r(t);var n=i("1dc7"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},f690:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.register[data-v-94fce6b6]{background-color:#f6f6f6;height:100vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?35?% %?35?%}.register .head[data-v-94fce6b6]{width:70%;font-size:%?38?%;font-weight:bolder;margin:%?50?% 0 %?80?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.register .head .title[data-v-94fce6b6]{color:#999}.register .head .choose[data-v-94fce6b6]{color:#1e3066}.register .write[data-v-94fce6b6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?1?% solid #dedede;margin-top:%?20?%}.register .write .give[data-v-94fce6b6]{padding:%?10?% %?20?%;border:%?1?% solid #1e3066;color:#1e3066;border-radius:%?35?%;font-size:%?28?%}.register .other[data-v-94fce6b6]{width:100%;height:%?100?%;line-height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.register .login_s[data-v-94fce6b6]{width:100%;height:%?80?%;text-align:center;line-height:%?80?%;border-radius:%?50?%;background-color:#1e3066;color:#fff;margin-top:%?100?%}.register .agreement[data-v-94fce6b6]{width:100%;height:%?90?%;line-height:%?90?%;font-size:%?26?%;color:#999;text-align:center}.register .agreement uni-text[data-v-94fce6b6]{color:#1e3066}.register .three_s[data-v-94fce6b6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?100?%}.register .three_s .titles[data-v-94fce6b6]{color:#b3b3b3;margin:0 auto}.register .three_s .weixin[data-v-94fce6b6]{width:100%;margin-top:%?50?%}.register .three_s .weixin uni-view[data-v-94fce6b6]{width:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto}.register .three_s .weixin uni-view uni-text[data-v-94fce6b6]{width:100%;text-align:center;margin-top:%?10?%;color:#aaa}',""]),e.exports=t}}]);