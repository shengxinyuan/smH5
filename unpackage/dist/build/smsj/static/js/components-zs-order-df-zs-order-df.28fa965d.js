(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-zs-order-df-zs-order-df"],{"6f34":function(t,e,i){var o=i("8bcc");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=i("4f06").default;r("389fab4a",o,!0,{sourceMap:!1,shadowMode:!1})},7048:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},props:{list:{}},methods:{no_order:function(t){var e=this;uni.showModal({content:"确认取消该订单吗？",success:function(i){i.confirm&&e.$api.put("orders",{id:t,type:2}).then((function(t){1==t.status?e.com.redto("./order?state=10&index=1"):e.com.msg(t.message)}))}})},order_detail:function(e,i){t("log",e," at components/zs-order-df/zs-order-df.vue:86"),this.$emit("order_detail",e,i)},sure_details:function(e){var i=this;uni.showModal({content:"您确定收到货物了吗？",success:function(o){o.confirm&&i.$api.put("orders",{id:e,type:1}).then((function(e){t("log",e," at components/zs-order-df/zs-order-df.vue:97"),1==e.status?i.com.redto("./order?state=20&index=2"):i.com.msg(e.message)}))}})},shen_details:function(e){this.$api.put("orderreturn",{id:e}).then((function(e){t("log",e," at components/zs-order-df/zs-order-df.vue:110")}))},del_order:function(e,i){var o=this;uni.showModal({content:"您确定删除该订单吗？？",success:function(r){r.confirm&&o.$api.put("orders",{id:e}).then((function(e){t("log",e," at components/zs-order-df/zs-order-df.vue:121"),1==e.status?50==i?o.com.redto("./order?state=50&index=5"):o.com.redto("./order?state=40&index=4"):o.com.msg(e.message)}))}})},del_details:function(t){this.$emit("del_details",t)},go_immed:function(t){this.$emit("go_immed",t)},order_quxiao:function(t){this.$emit("order_quxiao",t)},order_logist:function(t){this.com.navto("./applyRefund?cont="+JSON.stringify(t))},order_logist_wl:function(t){this.com.navto("./logistics?cont="+JSON.stringify(t))}}};e.default=i}).call(this,i("0de9")["log"])},8926:function(t,e,i){"use strict";i.r(e);var o=i("ad52"),r=i("b4f2");for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("c97d");var a,s=i("f0c5"),d=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,"4492a596",null,!1,o["a"],a);e["default"]=d.exports},"8bcc":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.order_time[data-v-4492a596]{margin-bottom:%?20?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;background-color:#fff;border-radius:%?10?%}.order_time .order_box[data-v-4492a596]{width:100%;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.order_time .order_box .order_head[data-v-4492a596]{width:100%;height:%?90?%;line-height:%?90?%;border-bottom:%?1?% solid #eee;font-size:%?28?%;color:#333;display:-webkit-box;display:-webkit-flex;display:flex}.order_time .order_box .order_head .time[data-v-4492a596]{font-size:%?26?%;color:#777}.order_time .order_box .order_head .sure[data-v-4492a596]{color:#ce4718;margin-left:auto}.order_time .order_box .shop_list[data-v-4492a596]{width:100%;height:%?250?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:%?1?% solid #f6f6f6}.order_time .order_box .shop_list uni-image[data-v-4492a596]{width:%?200?%;height:%?200?%}.order_time .order_box .shop_list .list_right[data-v-4492a596]{width:%?430?%;height:%?200?%;margin-left:%?20?%;position:relative}.order_time .order_box .shop_list .list_right .go_buy_abs[data-v-4492a596]{position:absolute;right:%?10?%;bottom:%?6?%;background-repeat:no-repeat;background-size:cover;width:%?146?%;height:%?53?%;margin-left:%?25?%;color:#fff;text-align:center;line-height:%?53?%;z-index:20}.order_time .order_box .shop_list .list_right .title[data-v-4492a596]{line-height:%?60?%;font-weight:700;width:100%}.order_time .order_box .shop_list .list_right .price[data-v-4492a596]{width:100%;line-height:%?70?%;color:#ba1a30;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order_time .order_box .shop_list .list_right .Specifications[data-v-4492a596]{width:100%;color:#999;font-size:%?26?%;display:-webkit-box;display:-webkit-flex;display:flex}.order_time .order_box .shop_list .list_right .Specifications .num[data-v-4492a596]{color:#999;margin-left:%?20?%}.order_time .order_box .shop_list .list_right .shop_list_label uni-text[data-v-4492a596]{display:inline-block;background-color:#eee;font-size:%?24?%;margin:%?5?% %?10?% %?5?% 0;padding:0 %?4?%;border-radius:%?5?%;color:#999}.order_time .order_box .around[data-v-4492a596]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:%?1?% solid #eee}.order_time .order_box .around .money[data-v-4492a596]{color:#ba1a30}.order_time .order_box .around .time[data-v-4492a596]{font-size:%?26?%;color:#999}.order_time .order_box .foot[data-v-4492a596]{width:100%;height:%?100?%;margin-top:%?35?%}.order_time .order_box .foot .foot_child[data-v-4492a596]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.order_time .order_box .foot .go_buy[data-v-4492a596]{width:88%;line-height:%?80?%;height:%?80?%;background:-webkit-linear-gradient(#f82222,#b51616);background:linear-gradient(#f82222,#b51616);border-radius:%?50?%;background-repeat:no-repeat;background-size:cover;color:#fff;text-align:center}.order_time .order_box .foot .go_buy_s[data-v-4492a596]{width:48%;line-height:%?80?%;height:%?80?%;color:#f82222;border-radius:%?80?%;background-size:cover;text-align:center;border:%?1?% solid #f82222}.order_time .order_box .foot_s[data-v-4492a596]{width:100%;padding:2% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order_time .order_box .foot_s .foot_child[data-v-4492a596]{display:-webkit-box;display:-webkit-flex;display:flex}.order_time .order_box .foot_s .go_buy[data-v-4492a596]{background:-webkit-linear-gradient(#f82222,#b51616);background:linear-gradient(#f82222,#b51616);border-radius:%?50?%;background-repeat:no-repeat;background-size:cover;width:%?146?%;height:%?60?%;margin-left:%?25?%;color:#fff;text-align:center;line-height:%?60?%}.order_time .order_box .foot_s .go_buy_s[data-v-4492a596]{border:%?1?% solid #999;border-radius:%?50?%;background-repeat:no-repeat;background-size:cover;width:%?146?%;height:%?60?%;margin-left:%?25?%;color:#999;text-align:center;line-height:%?60?%}',""]),t.exports=e},ad52:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},t._l(t.list,(function(e,o){return i("v-uni-view",{key:o,staticClass:"order_time"},[i("v-uni-view",{staticClass:"order_box"},[i("v-uni-view",{staticClass:"order_head",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.bn)}}},[t._v("订单编号："),i("v-uni-text",{staticClass:"time"},[t._v(t._s(e.bn,10))]),10==e.status?i("v-uni-text",{staticClass:"sure"},[t._v("待付款")]):t._e()],1),e.data[0]?i("v-uni-view",t._l(e.data[0],(function(o,r){return i("v-uni-view",{staticClass:"shop_list"},[o.goods?i("v-uni-image",{attrs:{src:o.goods.image,mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.bn,10)}}}):t._e(),o.goods?i("v-uni-view",{staticClass:"list_right"},[i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.bn,10)}}},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(o.goods.title))]),i("v-uni-view",{staticClass:"Specifications"},[t._v("金重："+t._s(o.goods.wage)),i("v-uni-text",{staticClass:"num"},[t._v("款号："+t._s(o.goods.model_no))])],1),i("v-uni-view",{staticClass:"shop_list_label"},[i("v-uni-text",[t._v("金价："+t._s(o.gold_price))]),i("v-uni-text",[t._v("工费： "+t._s(o.labor_price))])],1),i("v-uni-view",{staticClass:"price"},[i("v-uni-text",[t._v("￥"+t._s(o.total))]),i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("*"+t._s(o.count))])],1)],1)],1):t._e()],1)})),1):t._e(),i("v-uni-view",{staticClass:"around"},[i("v-uni-view",{},[t._v("共"+t._s(e.count)+"件商品")]),i("v-uni-view",[t._v("合计:"),i("v-uni-text",{staticClass:"money"},[t._v("￥"+t._s(e.total))])],1)],1),i("v-uni-view",{staticClass:"foot_s"},[i("v-uni-view"),i("v-uni-view",{staticClass:"foot_child"},[10==e.status?i("v-uni-view",{staticClass:"go_buy_s",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.no_order(e.id)}}},[t._v("取消订单")]):t._e(),10==e.status?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_detail(e.bn,10)}}},[t._v("去支付")]):t._e(),20==e.status?i("v-uni-view",{staticClass:"go_buy_s",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_logist(e)}}},[t._v("退款")]):t._e(),20==e.status?i("v-uni-view",{staticClass:"go_buy_s",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_logist_wl(e)}}},[t._v("查看物流")]):t._e(),20==e.status?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sure_details(e.id)}}},[t._v("确认收货")]):t._e(),30==e.status?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go_immed(e)}}},[t._v("立即评价")]):t._e(),40==e.status?i("v-uni-view",{staticClass:"go_buy_s",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.del_order(e.id,e.status)}}},[t._v("删除订单")]):t._e(),50==e.status&&1==e.return_type?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.shen_details(e.id)}}},[t._v("撤销")]):t._e(),50==e.status&&2==e.return_type?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.order_logist(e)}}},[t._v("再次申请")]):t._e(),50==e.status&&3==e.return_type?i("v-uni-view",{staticClass:"go_buy",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.del_order(e.id,e.status)}}},[t._v("删除订单")]):t._e()],1)],1)],1)],1)})),1)},n=[]},b4f2:function(t,e,i){"use strict";i.r(e);var o=i("7048"),r=i.n(o);for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},c97d:function(t,e,i){"use strict";var o=i("6f34"),r=i.n(o);r.a}}]);