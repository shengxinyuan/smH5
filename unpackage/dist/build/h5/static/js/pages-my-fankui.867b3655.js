(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-fankui"],{"4ea7":function(t,n,e){var i=e("7fcf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("188759d9",i,!0,{sourceMap:!1,shadowMode:!1})},"5c0d":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.phone_c[data-v-57e56244]{line-height:%?100?%;height:%?100?%;background-color:#fff;margin-top:%?20?%;padding-top:%?17?%}.phone_c uni-input[data-v-57e56244]{height:%?66?%;font-size:%?28?%;padding-left:%?20?%}uni-textarea[data-v-57e56244]{width:100%;padding:2%;border-bottom:%?2?% solid #eee;box-sizing:border-box;font-size:%?28?%}.conent .p1[data-v-57e56244]{background-color:#fff;padding:3%;border-radius:%?12?%}.conent .p1 .item2[data-v-57e56244]{width:100%;margin-top:%?38?%;display:flex;flex-wrap:wrap}.conent .p1 .item2 uni-text[data-v-57e56244]{width:100%}.conent .p1 .item2 .upload[data-v-57e56244]{display:flex;justify-content:center;align-items:center;width:%?220?%;height:%?220?%;border:%?2?% solid #eee;margin:%?35?% %?35?% 0 0}.conent .p1 .item2 .upload uni-image[data-v-57e56244]{width:%?50?%;height:%?50?%}.conent .btn[data-v-57e56244]{margin-top:%?75?%;margin-bottom:%?30?%;width:90%;height:%?80?%;line-height:%?80?%;text-align:center;background:#1c2e62;color:#fff;border-radius:%?60?%;position:fixed;left:5%;bottom:%?40?%}',""]),t.exports=n},"5d80":function(t,n,e){"use strict";e.r(n);var i=e("b857"),o=e("a151");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("b355"),e("fede");var s,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"57e56244",null,!1,i["a"],s);n["default"]=c.exports},6780:function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var o=i(e("1da1")),a={data:function(){return{action:"http://zuanshi.dis.wanheweb.com/api/uploads",lists:[],imgLists:"",desc:"",token:{token:uni.getStorageSync("token")},phone:""}},onLoad:function(){this.requestAndroidPermission("android.permission.READ_EXTERNAL_STORAGE")},onReady:function(){this.lists=this.$refs.uUpload.lists},methods:{requestAndroidPermission:function(t){permision.requestAndroidPermission(t)},onChange:function(t,n,e){console.log(this.lists)},confirm:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var e,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(t.imgLists="",e=0;e<t.lists.length;e++)1==t.lists[e].response.status&&(e<t.lists.length-1?(t.imgLists+=t.lists[e].response.data+",",console.log(t.imgLists)):(t.imgLists+=t.lists[e].response.data,console.log(t.imgLists)));""==t.desc?uni.showToast({title:"反馈内容为空",icon:"none"}):(i={remark:t.desc,album:t.imgLists},t.$api.post("feedback",i).then((function(n){console.log(n),1==n.status?(t.com.msg(n.message),t.com.three_back()):uni.showToast({title:n.msg,icon:"none"})})));case 3:case"end":return n.stop()}}),n)})))()}}};n.default=a},"7fcf":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-57e56244]{background-color:#f6f6f6}body.?%PAGE?%[data-v-57e56244]{background-color:#f6f6f6}",""]),t.exports=n},"82e4":function(t,n,e){var i=e("5c0d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("f112fe08",i,!0,{sourceMap:!1,shadowMode:!1})},a151:function(t,n,e){"use strict";e.r(n);var i=e("6780"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},b355:function(t,n,e){"use strict";var i=e("4ea7"),o=e.n(i);o.a},b857:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uUpload:e("0036").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"conent"},[e("v-uni-view",{staticClass:"p1"},[e("v-uni-view",{staticClass:"item1"},[e("v-uni-textarea",{attrs:{placeholder:"请输入您的反馈描述..."},model:{value:t.desc,callback:function(n){t.desc=n},expression:"desc"}})],1),e("v-uni-view",{staticClass:"item2"},[e("v-uni-text",{staticStyle:{color:"#999"}},[t._v("上传反馈图片:限4张")]),e("u-upload",{ref:"uUpload",attrs:{action:t.action,"max-count":"4",header:t.token},on:{"on-change":function(n){arguments[0]=n=t.$handleEvent(n),t.onChange.apply(void 0,arguments)}}})],1)],1),e("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.confirm.apply(void 0,arguments)}}},[t._v("确认提交")])],1)},a=[]},fede:function(t,n,e){"use strict";var i=e("82e4"),o=e.n(i);o.a}}]);