(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-shop-gold-ratio"],{"0163":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return a}));var a={uniNavBar:i("3fb0").default},e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"zl-box"},[i("uni-nav-bar",{attrs:{"left-icon":"back",title:t.title},on:{clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.goto_top.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"gold-ratio-box"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.ratioTitle))]),i("v-uni-input",{staticClass:"input",attrs:{type:"number"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.chack.apply(void 0,arguments)}},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}})],1),i("v-uni-view",{staticClass:"explain"},[i("v-uni-view",{staticClass:"explain-title"},[t._v(t._s(t.explainTitle))]),i("v-uni-view",[i("v-uni-view",[t._v(t._s(t.explain01))]),i("v-uni-view",[t._v(t._s(t.explain02))]),i("v-uni-view",[t._v(t._s(t.explain03))])],1)],1),i("v-uni-view",{staticClass:"bottom-btn"},[i("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.skipShopGoldPrice.apply(void 0,arguments)}}},[t._v(t._s(t.btnName))])],1)],1)},o=[]},4166:function(t,n,i){"use strict";i("e25e"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{ratioTitle:"古法金倍率",value:"",explainTitle:"说明",explain01:"1、倍率设置：APP端的批发拿货价x您设置的倍率=您的商城售价",explain02:"2、XXX倍率修改后，本平台仍将显示您的拿货成本价格；",explain03:"3、修改的倍率仅用于您的批发商商城",btnName:"保存"}},onLoad:function(t){this.title=t.title+"金价",this.gold_id=t.id,this.page_reader()},methods:{page_reader:function(){var t=this;this.$api.get("managegold",{id:this.gold_id}).then((function(n){console.log(n),1==n.status&&(t.value=n.data.ratio_price)}))},skipShopGoldPrice:function(){var t=this;this.$api.post("managegold",{ratio_price:this.value,id:this.gold_id}).then((function(n){console.log(n),1==n.status&&t.com.redto("./shop-gold-price?tit=修改成功")}))},chack:function(t){var n=this;t.target.value=parseInt(t.target.value),this.$nextTick((function(){n.value=t.target.value}))},goto_top:function(){uni.navigateBack()}}};n.default=a},"522d":function(t,n,i){"use strict";var a=i("ef3a"),e=i.n(a);e.a},"8bda":function(t,n,i){"use strict";i.r(n);var a=i("0163"),e=i("e2be");for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);i("522d");var r,l=i("f0c5"),s=Object(l["a"])(e["default"],a["b"],a["c"],!1,null,"234678c4",null,!1,a["a"],r);n["default"]=s.exports},e2be:function(t,n,i){"use strict";i.r(n);var a=i("4166"),e=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);n["default"]=e.a},e692:function(t,n,i){var a=i("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.zl-box[data-v-234678c4]{padding:%?30?%;border-top:solid %?2?% #f6f6f6}.zl-box .gold-ratio-box[data-v-234678c4]{margin-top:%?20?%;margin-bottom:%?30?%}.zl-box .gold-ratio-box .title[data-v-234678c4]{font-size:%?30?%;font-weight:700;margin-bottom:%?20?%}.zl-box .gold-ratio-box .input[data-v-234678c4]{width:100%;height:%?78?%;text-align:center;font-size:%?32?%;font-weight:700;background-color:#f6f6f6;border-radius:%?6?%}.explain[data-v-234678c4]{font-size:%?22?%;color:#999;display:flex}.explain .explain-title[data-v-234678c4]{width:12%}.bottom-btn[data-v-234678c4]{width:100%;margin-top:%?160?%}.bottom-btn .btn[data-v-234678c4]{height:%?78?%;line-height:%?78?%;font-size:%?30?%;color:#fff;background-image:linear-gradient(90deg,#2b3f7d,#1b2c60);border-radius:%?40?%}',""]),t.exports=n},ef3a:function(t,n,i){var a=i("e692");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("5a959263",a,!0,{sourceMap:!1,shadowMode:!1})}}]);