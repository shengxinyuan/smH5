(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-share"],{"2a45":function(t,e,o){"use strict";o.r(e);var n=o("e313"),i=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},7627:function(t,e,o){"use strict";var n;o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"bgimage"},[o("v-uni-image",{attrs:{src:t.bg_img,mode:"widthFix"}})],1),o("v-uni-view",{staticClass:"zl-box"},[o("v-uni-view",{staticClass:"min-box"},[o("v-uni-input",{attrs:{type:"number",placeholder:"请输入手机号",maxlength:"11"},model:{value:t.tel_value,callback:function(e){t.tel_value=e},expression:"tel_value"}}),o("v-uni-view",{staticClass:"two"},[o("v-uni-input",{staticClass:"code_input",attrs:{type:"number",placeholder:"请输入验证码",maxlength:"6"},model:{value:t.code_value,callback:function(e){t.code_value=e},expression:"code_value"}}),t.code_show?o("v-uni-text",{staticClass:"right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.acquireCode.apply(void 0,arguments)}}},[t._v(t._s(t.code_tit))]):o("v-uni-text",{staticClass:"right",staticStyle:{"background-color":"#999"}},[t._v(t._s(t.time)+"s")])],1)],1)],1),o("v-uni-view",{staticClass:"bottom-btn"},[o("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backPage.apply(void 0,arguments)}}},[t._v("注册")])],1)],1)},a=[]},"9cc4":function(t,e,o){"use strict";var n=o("ed5e"),i=o.n(n);i.a},a4a2:function(t,e,o){"use strict";o.r(e);var n=o("7627"),i=o("2a45");for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("9cc4");var c,s=o("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"545c9853",null,!1,n["a"],c);e["default"]=r.exports},cc1c:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bgimage uni-image[data-v-545c9853]{width:100%}.zl-box[data-v-545c9853]{width:100%;padding:0 %?30?%;position:absolute;top:%?1024?%}.zl-box .min-box[data-v-545c9853]{width:100%;padding:%?60?% %?30?%;background-color:#fff;border-radius:%?20?%}.zl-box .min-box uni-input[data-v-545c9853]{height:%?100?%;padding:0 %?30?%;font-size:%?30?%;border:solid %?2?% #ccc;border-radius:%?10?%}.zl-box .min-box .two[data-v-545c9853]{margin-top:%?40?%;display:flex;align-items:center;justify-content:space-between}.zl-box .min-box .two .code_input[data-v-545c9853]{width:50%}.zl-box .min-box .two .right[data-v-545c9853]{width:36%;height:%?100?%;font-size:%?30?%;color:#fff;line-height:%?100?%;text-align:center;background-color:#f63f39;border-radius:%?10?%}.zl-box .min-box .down-box[data-v-545c9853]{width:100%;height:%?100?%;line-height:%?100?%;text-align:center;font-size:%?30?%;color:#fff;background-color:#f63f39;border-radius:%?10?%}.bottom-btn[data-v-545c9853]{width:100%;height:%?130?%;padding:0 %?30?%;display:flex;align-items:center;background-color:#fff;position:fixed;bottom:0;left:0;z-index:998}.bottom-btn .btn[data-v-545c9853]{width:100%;font-size:%?34?%;color:#fff;background-color:#f63f39;border-radius:%?8?%}',""]),t.exports=e},e313:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{tel_value:"",code_value:"",code_tit:"获取验证码",time:"60",code_show:!0,invcode:0,province:"",city:"",area:"",bg_img:""}},onLoad:function(t){this.get_bg_image(),t.invcode&&(this.invcode=t.invcode)},onShow:function(){var t=this;uni.getLocation({type:"wgs84",success:function(e){console.log(e),console.log("当前位置的经度："+e.longitude),console.log("当前位置的纬度："+e.latitude),uni.request({url:"https://restapi.amap.com/v3/geocode/regeo?parameters",method:"GET",data:{key:"5007cf4d48895f2313d47e970b61252d",location:e.longitude+","+e.latitude},header:{"custom-header":"hello"},success:function(e){console.log(e.data),console.log(""==e.data.regeocode.addressComponent.city),t.province=e.data.regeocode.addressComponent.province,t.city=""==e.data.regeocode.addressComponent.city?e.data.regeocode.addressComponent.province:e.data.regeocode.addressComponent.city,t.area=e.data.regeocode.addressComponent.district}})}})},methods:{acquireCode:function(){var t=this;if(""!=this.tel_value&&/^1[3456789]\d{9}$/.test(this.tel_value)){this.time=60,this.code_show=!1;setInterval((function(){0==t.time?(t.code_tit="再次获取",t.code_show=!0):t.time-=1}),1e3);this.$api.get("messagecode",{mobile:this.tel_value}).then((function(t){console.log(t)}))}else this.com.msg("请检查手机号")},backPage:function(){var t=this,e={mobile:this.tel_value,note:this.code_value,bn:this.invcode,password:111111,province:this.province,city:this.city,area:this.area};this.$api.post("register",e).then((function(e){t.com.msg(e.message),1==e.status&&uni.navigateTo({url:"/pages/login/download"})}))},get_bg_image:function(){var t=this;this.$api.get("site").then((function(e){console.log(e),1==e.status&&(t.bg_img=e.message.share_pic)}))}}};e.default=n},ed5e:function(t,e,o){var n=o("cc1c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("84841432",n,!0,{sourceMap:!1,shadowMode:!1})}}]);