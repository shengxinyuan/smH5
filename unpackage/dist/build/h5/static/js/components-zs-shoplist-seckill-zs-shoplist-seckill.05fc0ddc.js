(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-zs-shoplist-seckill-zs-shoplist-seckill"],{"1b12":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"cont"},[e("v-uni-view",{staticClass:"cont_list_two"},t._l(t.lists,(function(i,n){return e("v-uni-view",{key:n,staticClass:"cont_item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go_shopdetail(i.id)}}},[e("v-uni-view",{staticClass:"item_img"},[e("v-uni-image",{staticClass:"images",attrs:{src:i.image,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"it_text"},[e("v-uni-view",{staticClass:"it_tit"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"seckill_pic"},[t._v("秒杀价")]),e("v-uni-view",{staticClass:"it_selt_r"},[t._v("剩余"+t._s(i.stock)+"件")]),e("v-uni-view",{staticClass:"it_text_cen"},[e("v-uni-view",{staticStyle:{display:"flex","padding-top":"6rpx"}},[e("v-uni-view",{staticClass:"it_price"},[t._v("￥"+t._s(i.price))]),e("v-uni-view",{staticClass:"it_selt_l"},[e("v-uni-text",[t._v("￥"+t._s(i.price_make))])],1)],1),e("v-uni-view",{staticClass:"go_seck"},[t._v("去抢购")])],1)],1)],1)})),1)],1)},c=[]},"60c7":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cont_list_two[data-v-23cac78f]{width:100%;padding-bottom:%?60?%}.cont_list_two .cont_item[data-v-23cac78f]{width:100%;margin-right:2%;border-radius:%?16?%;background-color:#fff;margin-top:%?20?%;overflow:hidden;padding:%?20?% %?20?% %?10?% %?10?%;display:flex}.cont_list_two .cont_item .item_img .images[data-v-23cac78f]{width:%?240?%;height:%?240?%}.cont_list_two .cont_item .it_text[data-v-23cac78f]{width:100%}.cont_list_two .cont_item .it_text .it_tit[data-v-23cac78f]{font-size:%?30?%;width:96%;height:%?80?%;overflow:hidden}.cont_list_two .cont_item .it_text .seckill_pic[data-v-23cac78f]{display:inline-block;font-size:%?26?%;color:#fff;margin-top:%?15?%;padding:0 %?16?%;background-color:#e8372f}.cont_list_two .cont_item .it_text .it_text_cen[data-v-23cac78f]{width:100%;display:flex;white-space:nowrap;justify-content:space-between;margin:%?8?% 0}.cont_list_two .cont_item .it_text .it_text_cen .it_price[data-v-23cac78f]{font-weight:700;font-size:%?30?%;width:%?150?%;color:#e8372f}.cont_list_two .cont_item .it_text .it_text_cen .it_selt_l[data-v-23cac78f]{padding-top:%?4?%;display:flex}.cont_list_two .cont_item .it_text .it_text_cen .it_selt_l uni-text[data-v-23cac78f]{font-size:%?26?%;color:#999;text-decoration:line-through}.cont_list_two .cont_item .it_text .it_text_cen .go_seck[data-v-23cac78f]{display:inline-block;padding:%?6?% %?20?% %?8?% %?20?%;border-radius:%?50?%;background-color:#e8372f;color:#fff}.cont_list_two .cont_item .it_text .it_label[data-v-23cac78f]{width:100%;display:flex}.cont_list_two .cont_item .it_text .it_label uni-view[data-v-23cac78f]{font-size:%?22?%;padding:0 %?8?%;border:%?2?% solid #dd524d;color:#dd524d;border-radius:%?6?%}.cont_list_two .cont_item .it_text .it_selt_r[data-v-23cac78f]{color:#998;font-size:%?26?%;margin-top:%?14?%}',""]),t.exports=i},"63d1":function(t,i,e){var n=e("60c7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("bcdf4b88",n,!0,{sourceMap:!1,shadowMode:!1})},d1e3:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{list:[{name:"新品"},{name:"热销"}],type:0,heat_ind:-1,price_type:2}},props:{lists:{},types:{},titles:{},second:{}},methods:{go_shopdetail:function(t){this.titles?"抢购中"==this.titles?this.com.navto("../../pages/index/Activityshop_detail?shop_id="+t+"&type="+this.types+"&second="+this.second):this.com.msg("本轮秒杀已经结束，请期待下一期"):this.com.navto("../../pages/index/Activityshop_detail?shop_id="+t+"&type="+this.types)},cli_type:function(t){console.log(t),1==this.type?this.type=2:this.type=1},shai_cli:function(t,i){console.log(i),this.heat_ind=t,this.price_type=2==i?1:2}}};i.default=n},d488:function(t,i,e){"use strict";e.r(i);var n=e("1b12"),s=e("f0b7");for(var c in s)"default"!==c&&function(t){e.d(i,t,(function(){return s[t]}))}(c);e("da4c");var o,a=e("f0c5"),l=Object(a["a"])(s["default"],n["b"],n["c"],!1,null,"23cac78f",null,!1,n["a"],o);i["default"]=l.exports},da4c:function(t,i,e){"use strict";var n=e("63d1"),s=e.n(n);s.a},f0b7:function(t,i,e){"use strict";e.r(i);var n=e("d1e3"),s=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=s.a}}]);