(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-shop-add-payee-code"],{3989:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"add-payee-code-image"},[n("v-uni-image",{attrs:{src:a("f88d"),mode:"widthFix"}})],1),n("v-uni-view",{staticClass:"bottom-box"},[n("v-uni-view",{staticClass:"notice"},[e._v(e._s(e.noticeText))]),n("v-uni-view",{staticClass:"bottom-btn"},[n("v-uni-button",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadcode.apply(void 0,arguments)}}},[e._v("上传二维码")])],1)],1)],1)},o=[]},6573:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{noticeText:"*请上传真实有效的收款二维码图片，以便客户购买您的商品时能立即向您付款",type:0,image:"",imagetwo:"",wechat_image:"",alipay_image:""}},onLoad:function(e){console.log(e),this.type=e.id,this.alipay_image=e.alipay_image,this.wechat_image=e.wechat_image},methods:{uploadcode:function(){if(1==this.type){var e=this;uni.chooseImage({sourceType:["camera "],success:function(t){console.log(t);var a=t.tempFilePaths[0];console.log(t.tempFilePaths[0]),uni.uploadFile({url:"http://zuanshi.dis.wanheweb.com/api/uploads",filePath:a,name:"file",formData:{user:"test"},header:{token:uni.getStorageSync("token")},success:function(t){e.image=JSON.parse(t.data).data,e.$api.post("manage",{wechat_image:e.image}).then((function(t){console.log(t),1==t.status&&uni.redirectTo({url:"set-payee?wechat_image="+e.image+"&alipay_image="+e.alipay_image})}))}})}})}else{var t=this;uni.chooseImage({sourceType:["camera "],success:function(e){console.log(e);var a=e.tempFilePaths[0];console.log(e.tempFilePaths[0]),uni.uploadFile({url:"http://zuanshi.dis.wanheweb.com/api/uploads",filePath:a,name:"file",formData:{user:"test"},header:{token:uni.getStorageSync("token")},success:function(e){t.imagetwo=JSON.parse(e.data).data,t.$api.post("manage",{alipay_image:t.imagetwo}).then((function(e){console.log(e),1==e.status&&uni.redirectTo({url:"set-payee?alipay_image="+t.imagetwo+"&wechat_image="+t.wechat_image})}))}})}})}}}};t.default=n},"6aaa":function(e,t,a){"use strict";a.r(t);var n=a("3989"),i=a("7c3d");for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);a("98c2");var s,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"8040d80c",null,!1,n["a"],s);t["default"]=r.exports},"7c3d":function(e,t,a){"use strict";a.r(t);var n=a("6573"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"98c2":function(e,t,a){"use strict";var n=a("fb39"),i=a.n(n);i.a},f88d:function(e,t,a){e.exports=a.p+"static/img/add_code.71f8e5aa.png"},fb39:function(e,t,a){var n=a("ffc6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("4d4826b3",n,!0,{sourceMap:!1,shadowMode:!1})},ffc6:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.add-payee-code-image[data-v-8040d80c]{width:100%;display:flex}.add-payee-code-image uni-image[data-v-8040d80c]{width:100%}.bottom-box[data-v-8040d80c]{position:fixed;bottom:0;left:0}.bottom-box .notice[data-v-8040d80c]{padding:%?16?% %?30?%;background-color:#fde7e7;font-size:%?22?%;color:#f9817d}.bottom-box .bottom-btn[data-v-8040d80c]{padding:%?20?% %?30?%}.bottom-box .bottom-btn .btn[data-v-8040d80c]{font-size:%?30?%;color:#2b3f7d;border:solid %?2?% #2b3f7d;border-radius:%?40?%}',""]),e.exports=t}}]);