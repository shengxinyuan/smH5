(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-addAddress"],{"2aa8":function(t,e,i){var n=i("a9f5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("24802d44",n,!0,{sourceMap:!1,shadowMode:!1})},"49f3":function(t,e,i){"use strict";i.r(e);var n=i("7c7f"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"5a79":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uPicker:i("e8c0").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"p2"},[i("v-uni-view",{staticClass:"item"},[i("v-uni-text",[t._v("收件人")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入收件人姓名"},model:{value:t.editForm.username,callback:function(e){t.$set(t.editForm,"username",e)},expression:"editForm.username"}})],1)],1),i("v-uni-view",{staticClass:"item "},[i("v-uni-text",[t._v("联系电话")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系电话",maxlength:"11"},model:{value:t.editForm.mobile,callback:function(e){t.$set(t.editForm,"mobile",e)},expression:"editForm.mobile"}})],1)],1),i("v-uni-view",{staticClass:"item "},[i("v-uni-text",[t._v("地区")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-input",{attrs:{type:"text",placeholder:"请选择 ＞",disabled:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}},model:{value:t.regions,callback:function(e){t.regions=e},expression:"regions"}})],1),i("u-picker",{attrs:{mode:"region"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.yes_addres.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1),i("v-uni-view",{staticClass:"item "},[i("v-uni-text",[t._v("详细地址")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-textarea",{attrs:{nowrap:"10",placeholder:"请填写详细地址"},model:{value:t.editForm.address,callback:function(e){t.$set(t.editForm,"address",e)},expression:"editForm.address"}})],1)],1),i("v-uni-view",{staticClass:"item "},[i("v-uni-text",[t._v("地址标签")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{class:{act:1==t.labind},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.label(1)}}},[t._v("家")]),i("v-uni-view",{class:{act:2==t.labind},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.label(2)}}},[t._v("公司")])],1)],1),i("v-uni-view",{staticClass:"item item-bd"},[i("v-uni-text",[t._v("设置默认地址")]),i("v-uni-view",{staticClass:"right"},[i("v-uni-switch",{staticStyle:{transform:"scale(0.9)"},attrs:{checked:1==t.address_mor,color:"#1e2f64"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.Change.apply(void 0,arguments)}}})],1)],1)],1),i("v-uni-view",[t.but_true?i("v-uni-button",{staticClass:"btn_sty"},[t._v("保存")]):i("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},s=[]},"5e6b":function(t,e,i){"use strict";var n=i("e285"),a=i.n(n);a.a},"7c7f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{show:!1,pcd:"fdsdsaf",detail:"",detail1:"",detail2:"",editForm:{username:"",mobile:"",address:""},Realityname:"",idcard:"",regions:"",province:"",city:"",area:"",address_type:0,address_id:"",address_mor:0,labind:0,is_mine:1}},onLoad:function(t){this.is_mine=t.is_mine;var e=JSON.parse(t.type);this.editForm.username=e.contact,this.editForm.mobile=e.mobile,this.regions=e.province+"-"+e.city+"-"+e.area,this.editForm.address=e.address,this.labind=e.label,this.Realityname=e.truename,this.idcard=e.id_number,this.address_mor=e.is_default,this.address_id=e.id},computed:{but_true:function(){var t;return t=""==this.editForm.username||""==this.editForm.mobile||""==this.editForm.address||""==this.regions,t}},methods:{label:function(t){this.labind=t},yes_addres:function(t){this.province=t.province.label,this.city=t.city.label,this.area=t.area.label,this.regions=this.province+"-"+this.city+"-"+this.area},Change:function(t){console.log(t.detail.value),1==t.detail.value?this.address_type=1:this.address_type=0},address_reader:function(){var t=this,e={contact:this.editForm.username,mobile:this.editForm.mobile,province:this.province,city:this.city,area:this.area,address:this.editForm.address,label:this.labind,address_id:this.address_id,truename:this.Realityname,id_number:this.idcard,is_mine:this.is_mine,is_default:this.address_type};this.$api.post("address",e).then((function(e){console.log(e),t.com.msg(e.message),1==e.status&&uni.navigateBack()}))},save:function(){/^1[345678]\d{9}$/.test(this.editForm.mobile)?this.address_reader():uni.showToast({title:"手机号不正确",icon:"none"})}}};e.default=n},"90d7":function(t,e,i){"use strict";var n=i("2aa8"),a=i.n(n);a.a},a9f5:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-cca483be]{background-color:#f6f6f6}body.?%PAGE?%[data-v-cca483be]{background-color:#f6f6f6}",""]),t.exports=e},c0ac:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-cca483be]{width:100%}.content .p2 .item[data-v-cca483be]{width:100%;line-height:%?88?%;padding:0 %?20?%;display:flex;justify-content:space-between;background-color:#fff;border-bottom:%?2?% solid #f6f6f6}.content .p2 .item .right[data-v-cca483be]{display:flex;align-items:center;display:flex}.content .p2 .item .right uni-textarea[data-v-cca483be]{width:%?540?%;padding:%?28?% 0;font-size:%?28?%;height:%?180?%}.content .p2 .item .right uni-input[data-v-cca483be]{width:%?480?%;font-size:%?28?%;text-align:right}.content .p2 .item .right uni-view[data-v-cca483be]{width:%?140?%;height:%?60?%;line-height:%?60?%;border-radius:%?50?%;border:1px solid #999;color:#999;text-align:center;margin:0 %?20?%}.content .p2 .item .right .act[data-v-cca483be]{color:#1e2f64;border:1px solid #1e2f64}.content .p2 .item[data-v-cca483be]:nth-child(5){margin-top:%?24?%}.content .p2 .item[data-v-cca483be]:last-child{margin-top:%?24?%}.content .p2 .item-bd[data-v-cca483be]{border-bottom:none}.content .btn[data-v-cca483be]{position:fixed;left:%?30?%;bottom:%?65?%;width:%?690?%;height:%?80?%;line-height:%?80?%;text-align:center;background-color:#1e2f64;color:#fff;border-radius:%?60?%}.content .btn_sty[data-v-cca483be]{position:fixed;left:%?30?%;bottom:%?65?%;width:%?690?%;height:%?80?%;line-height:%?80?%;text-align:center;background-color:#999;color:#fff;border-radius:%?60?%}',""]),t.exports=e},e285:function(t,e,i){var n=i("c0ac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3429299f",n,!0,{sourceMap:!1,shadowMode:!1})},e552:function(t,e,i){"use strict";i.r(e);var n=i("5a79"),a=i("49f3");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("90d7"),i("5e6b");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"cca483be",null,!1,n["a"],r);e["default"]=c.exports}}]);