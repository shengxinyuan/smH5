(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-zs-order-list-zs-order-list"],{"13ff":function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},t._l(t.list,(function(e,o){return 10!=e.status?i("v-uni-view",{key:o,staticClass:"order_time"},[i("v-uni-view",{staticClass:"order_box"},[i("v-uni-view",{staticClass:"order_head",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.id)}}},[t._v("订单编号："),i("v-uni-text",{staticClass:"time"},[t._v(t._s(e.bn_id))]),10==e.status?i("v-uni-text",{staticClass:"sure"},[t._v("待付款")]):t._e(),20==e.status?i("v-uni-text",{staticClass:"sure"},[t._v("待发货")]):t._e(),30==e.status?i("v-uni-text",{staticClass:"sure"},[t._v("待收货")]):t._e(),40==e.status?i("v-uni-text",{staticClass:"sure"},[t._v("待评价")]):t._e(),50==e.status?i("v-uni-text",{staticClass:"sure"},[t._v("已完成")]):t._e(),70==e.status?i("v-uni-text",{staticClass:"sure"},[t._v("已取消")]):t._e()],1),e.goods?i("v-uni-view",{staticClass:"shop_list"},[i("v-uni-image",{attrs:{src:e.goods.image,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.id)}}}),i("v-uni-view",{staticClass:"list_right"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.id)}}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.goods.title))]),i("v-uni-view",{staticClass:"Specifications"},[t._v("金重："+t._s(e.goods.weight)+"g"),i("v-uni-text",{staticClass:"num"},[t._v("条码："+t._s(e.goods.bar_code))])],1),i("v-uni-view",{staticClass:"shop_list_label"},[1==e.goods.is_height?i("v-uni-text",[t._v("金价：￥"+t._s((e.gold_price/1/(e.goods.weight/1)).toFixed(2))+"/g")]):t._e(),2==e.goods.is_height?i("v-uni-text",[t._v("金价：￥0.00/g")]):t._e(),1==e.goods.is_height?i("v-uni-text",[t._v("工费：￥"+t._s(((e.labor_price/1+e.labor_price_add/1)/(e.goods.weight/1)).toFixed(2))+"/g")]):t._e(),2==e.goods.is_height?i("v-uni-text",[t._v("工费：￥0.00/g")]):t._e()],1),i("v-uni-view",{staticClass:"price"},[i("v-uni-text",[t._v("￥"+t._s((e.total/1).toFixed(2)))]),i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("*"+t._s(e.count))])],1)],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"foot_s"},[i("v-uni-view",{staticClass:"around"},[i("v-uni-view",[t._v("合计:"),i("v-uni-text",{staticClass:"money"},[t._v("￥"+t._s(e.total))])],1)],1),i("v-uni-view",{staticClass:"foot_child"},[10==e.status?i("v-uni-view",{staticClass:"go_buy_s",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.no_order(e.id,o)}}},[t._v("取消订单")]):t._e(),10==e.status?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.id)}}},[t._v("去支付")]):t._e(),30==e.status?i("v-uni-view",{staticClass:"go_buy_s",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_logist_wl(e.bn_id)}}},[t._v("查看物流")]):t._e(),30==e.status?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sure_details(e.id)}}},[t._v("确认收货")]):t._e(),40==e.status?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go_immed(e)}}},[t._v("立即评价")]):t._e(),50==e.status?i("v-uni-view",{staticClass:"go_buy_s",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.del_order(e.id,e.status)}}},[t._v("删除订单")]):t._e(),60==e.status&&2==e.return_type?i("v-uni-view",{staticClass:"go_buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shouh.apply(void 0,arguments)}}},[t._v("再次申请")]):t._e(),60==e.status&&3==e.return_type?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.del_order(e.id,e.status)}}},[t._v("删除订单")]):t._e()],1)],1)],1)],1):t._e()})),1)},s=[]},5093:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.order_time[data-v-e2771316]{margin-bottom:%?20?%;width:100%;display:flex;flex-wrap:wrap;background-color:#fff;border-radius:%?10?%}.order_time .order_box[data-v-e2771316]{width:100%;padding:0 %?30?%;display:flex;flex-wrap:wrap}.order_time .order_box .order_head[data-v-e2771316]{width:100%;height:%?90?%;line-height:%?90?%;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#333;display:flex}.order_time .order_box .order_head .time[data-v-e2771316]{font-size:%?26?%;color:#777}.order_time .order_box .order_head .sure[data-v-e2771316]{color:#ce4718;margin-left:auto}.order_time .order_box .shop_list[data-v-e2771316]{width:100%;height:%?250?%;display:flex;align-items:center}.order_time .order_box .shop_list uni-image[data-v-e2771316]{width:%?200?%;height:%?200?%;border-radius:%?14?%}.order_time .order_box .shop_list .list_right[data-v-e2771316]{width:%?430?%;height:%?200?%;margin-left:%?20?%;position:relative}.order_time .order_box .shop_list .list_right .go_buy_abs[data-v-e2771316]{position:absolute;right:%?10?%;bottom:%?6?%;background-repeat:no-repeat;background-size:cover;width:%?146?%;height:%?53?%;margin-left:%?25?%;color:#fff;text-align:center;line-height:%?53?%;z-index:20}.order_time .order_box .shop_list .list_right .title[data-v-e2771316]{line-height:%?60?%;font-weight:700;width:100%}.order_time .order_box .shop_list .list_right .price[data-v-e2771316]{width:100%;line-height:%?70?%;color:#ba1a30;display:flex;justify-content:space-between}.order_time .order_box .shop_list .list_right .Specifications[data-v-e2771316]{width:100%;color:#999;font-size:%?26?%;display:flex}.order_time .order_box .shop_list .list_right .Specifications .num[data-v-e2771316]{color:#999;margin-left:%?20?%}.order_time .order_box .shop_list .list_right .shop_list_label uni-text[data-v-e2771316]{display:inline-block;background-color:#eee;font-size:%?24?%;margin:%?5?% %?10?% %?5?% 0;padding:0 %?4?%;border-radius:%?5?%;color:#999}.order_time .order_box .around[data-v-e2771316]{width:100%;height:%?80?%;display:flex;align-items:center}.order_time .order_box .around .money[data-v-e2771316]{color:#ba1a30}.order_time .order_box .around .time[data-v-e2771316]{font-size:%?26?%;color:#999}.order_time .order_box .foot[data-v-e2771316]{width:100%;height:%?100?%;margin-top:%?35?%}.order_time .order_box .foot .foot_child[data-v-e2771316]{width:100%;display:flex;justify-content:space-around}.order_time .order_box .foot .go_buy[data-v-e2771316]{width:88%;line-height:%?80?%;height:%?80?%;background:linear-gradient(#f82222,#b51616);border-radius:%?50?%;background-repeat:no-repeat;background-size:cover;color:#fff;text-align:center}.order_time .order_box .foot .go_buy_s[data-v-e2771316]{width:48%;line-height:%?80?%;height:%?80?%;color:#f82222;border-radius:%?80?%;background-size:cover;text-align:center;border:%?1?% solid #f82222}.order_time .order_box .foot_s[data-v-e2771316]{width:100%;display:flex;justify-content:space-between}.order_time .order_box .foot_s .foot_child[data-v-e2771316]{display:flex}.order_time .order_box .foot_s .go_buy[data-v-e2771316]{background:linear-gradient(#f82222,#b51616);border-radius:%?50?%;background-repeat:no-repeat;background-size:cover;width:%?146?%;height:%?60?%;margin-left:%?25?%;color:#fff;text-align:center;line-height:%?60?%}.order_time .order_box .foot_s .go_buy_s[data-v-e2771316]{border:%?1?% solid #999;border-radius:%?50?%;background-repeat:no-repeat;background-size:cover;width:%?146?%;height:%?60?%;margin-left:%?25?%;color:#999;text-align:center;line-height:%?60?%}',""]),t.exports=e},"5da6":function(t,e,i){var o=i("5093");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=i("4f06").default;r("94c7585a",o,!0,{sourceMap:!1,shadowMode:!1})},"72ce":function(t,e,i){"use strict";var o=i("5da6"),r=i.n(o);r.a},"78fb":function(t,e,i){"use strict";i.r(e);var o=i("13ff"),r=i("7e6a");for(var s in r)"default"!==s&&function(t){i.d(e,t,(function(){return r[t]}))}(s);i("72ce");var n,a=i("f0c5"),d=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,"e2771316",null,!1,o["a"],n);e["default"]=d.exports},"7e6a":function(t,e,i){"use strict";i.r(e);var o=i("8bba"),r=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);e["default"]=r.a},"8bba":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{list:{type:Array}},methods:{no_order:function(e,i){var o=this;this.$api.put("orders",{id:e,is_h5:1}).then((function(e){t("log",e," at components/zs-order-list/zs-order-list.vue:75"),1==e.status?(o.com.msg(e.message),o.com.redto("./order?state=10&index=1")):o.com.msg(e.message)}))},order_detail:function(e){t("log",e," at components/zs-order-list/zs-order-list.vue:87"),this.$emit("order_detail",e)},shouh:function(){this.com.navto("../service/service")},sure_details:function(e){var i=this;uni.showModal({content:"您确定收到货物了吗？",success:function(o){o.confirm&&i.$api.put("orders",{id:e,type:1,is_h5:1}).then((function(e){t("log",e," at components/zs-order-list/zs-order-list.vue:102"),1==e.status?uni.switchTab({url:"../../pages/my/order?state=30"}):i.com.msg(e.message)}))}})},shen_details:function(t){var e=this;this.$api.put("orderreturn",{id:t}).then((function(t){1==t.status?e.com.tab("./order?state=50&index=5"):e.com.msg(t.message)}))},del_order:function(t,e){this.$emit("del_order",t)},del_details:function(t){this.$emit("del_details",t)},go_immed:function(t){uni.navigateTo({url:"../my/evaluate?list="+JSON.stringify(t)})},order_quxiao:function(t){this.$emit("order_quxiao",t)},order_logist:function(t){this.com.navto("./applyRefund?cont="+JSON.stringify(t))},order_logist_wl:function(t){this.com.navto("./logistr?cont="+t)}}};e.default=i}).call(this,i("0de9")["log"])}}]);