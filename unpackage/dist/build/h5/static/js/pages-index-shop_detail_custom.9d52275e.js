(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-shop_detail_custom"],{1465:function(t,e,i){"use strict";var a=i("3b67"),n=i.n(a);n.a},"182c":function(t,e,i){var a=i("40cd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("157c9d1c",a,!0,{sourceMap:!1,shadowMode:!1})},3982:function(t,e,i){"use strict";var a=i("d2ec"),n=i.n(a);n.a},"3b67":function(t,e,i){var a=i("c554");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("dfa2762e",a,!0,{sourceMap:!1,shadowMode:!1})},"40cd":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-image[data-v-d41a7778]{position:relative;transition:opacity .5s ease-in-out}.u-image__image[data-v-d41a7778]{width:100%;height:100%}.u-image__loading[data-v-d41a7778], .u-image__error[data-v-d41a7778]{position:absolute;top:0;left:0;width:100%;height:100%;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"597b":function(t,e,i){"use strict";i.r(e);var a=i("eaf9"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"5cab":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("8be7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},o=[]},"5f75":function(t,e,i){"use strict";var a=i("182c"),n=i.n(a);n.a},"6d6d":function(t,e,i){"use strict";i.r(e);var a=i("c56e"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"75f6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},props:{shop_list:{}},methods:{go_shopdetail:function(t){this.com.navto("../../pages/index/shop_detail?shop_id="+t)}}};e.default=a},"7ca8":function(t,e,i){"use strict";i.r(e);var a=i("8d39"),n=i("597b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("1465"),i("fe03");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"52c7666c",null,!1,a["a"],c);e["default"]=s.exports},"7d00":function(t,e,i){"use strict";i.r(e);var a=i("5cab"),n=i("6d6d");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5f75");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"d41a7778",null,!1,a["a"],c);e["default"]=s.exports},"8d39":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uImage:i("7d00").default,zsShoppingList:i("b5bb").default,uPopup:i("816e").default,uNumberBox:i("1330").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"carousel"},[a("v-uni-swiper",{attrs:{circular:!0,autoplay:!0,duration:400,interval:3e3},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.shop_det.album,(function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.banner_cli(i)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{staticClass:"loaded",attrs:{src:e,mode:"aspectFill"}})],1)],1)})),1),a("v-uni-view",{staticClass:"swiper-dots"},[a("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),a("v-uni-text",{staticClass:"sign"},[t._v("/")]),t.shop_det.album?a("v-uni-text",{staticClass:"num"},[t._v(t._s(t.shop_det.album.length))]):t._e()],1)],1),a("v-uni-view",{staticClass:"introduce-section"},[a("v-uni-view",{staticClass:"price-box"},[a("v-uni-view",{staticClass:"price-box_l"},[a("v-uni-text",{staticClass:"price-tip"},[t._v("¥")]),a("v-uni-text",{staticClass:"price"},[t._v(t._s(t.shop_det.price))])],1)],1)],1),a("v-uni-view",{staticClass:"shopping_text"},[a("v-uni-view",{staticClass:"shop_names"},[a("v-uni-text",{staticClass:"zp"},[t._v("正品")]),a("v-uni-text",{staticClass:"shopname"},[t._v(t._s(t.shop_det.title))])],1),a("v-uni-view",{staticClass:"shop_introduce"},[t._v(t._s(t.shop_det.remark))])],1),a("v-uni-view",{staticClass:"text-des"},[a("v-uni-text",[t._v(t._s(t.shop_det.remark))])],1),a("v-uni-view",{staticClass:"specification"},t._l(t.stynumber,(function(e,i){return a("v-uni-view",{staticClass:"child"},[t._v(t._s(e.name)+"："+t._s(e.num))])})),1),a("v-uni-view",{staticClass:"detail-desc",attrs:{id:"details_parse"}},[a("v-uni-view",{staticClass:"d-header"},[a("v-uni-text",[t._v("宝贝详情")])],1),t._l(t.shop_det.image,(function(t,e){return a("v-uni-view",{key:e,staticClass:"image-wrapper"},[a("u-image",{attrs:{width:"100%",src:t,mode:"widthFix"}})],1)}))],2),a("v-uni-view",{attrs:{id:"tuijina"}},[a("v-uni-image",{staticStyle:{width:"100%",height:"80rpx","margin-top":"20rpx"},attrs:{src:i("16d3"),mode:""}}),a("v-uni-view",{staticStyle:{"margin-bottom":"120rpx"}},[a("zs-shopping-list",{attrs:{shop_list:t.shop_list}})],1)],1),a("v-uni-view",{staticClass:"add_bottom"},[a("v-uni-view",{staticClass:"add_con"},[a("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.skipIndex.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"/static/index/index.png",mode:"widthFix"}}),a("v-uni-view",[t._v("首页")])],1),a("v-uni-view",{staticClass:"three_icons",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_cart.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:"/static/index/cart.png",mode:"widthFix"}}),a("v-uni-view",[t._v("购物车")])],1),a("v-uni-view",{staticClass:"anniu"},[a("v-uni-view",{staticClass:"add_car",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPopup("cart")}}},[t._v("加入购物车")]),a("v-uni-view",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPopup("buy")}}},[t._v("立即购买")])],1)],1)],1),a("u-popup",{attrs:{mode:"bottom"},model:{value:t.popupShow,callback:function(e){t.popupShow=e},expression:"popupShow"}},[a("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"attr-content",staticStyle:{height:"300rpx",position:"relative"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",right:"0",padding:"0 20rpx","background-color":"#FFFFFF"}},[a("v-uni-view",{staticStyle:{margin:"20rpx 0",display:"flex","align-items":"center","justify-content":"space-between"}},[a("v-uni-view",{staticStyle:{"font-weight":"bold"}},[t._v("数量")]),a("u-number-box",{attrs:{max:t.stocks,min:1,step:1,"long-press":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.valChange.apply(void 0,arguments)}},model:{value:t.buy_num,callback:function(e){t.buy_num=e},expression:"buy_num"}})],1),"buy"==t.shop_type?a("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buy.apply(void 0,arguments)}}},[t._v("立即购买")]):a("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addCart.apply(void 0,arguments)}}},[t._v("加入购物车")])],1)],1)],1)],1)],1)},o=[]},9331:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cont"},t._l(t.shop_list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"cont_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go_shopdetail(e.id)}}},[1==e.is_recommend?a("v-uni-image",{staticClass:"imagea",attrs:{src:i("8c2b"),mode:"aspectFill"}}):t._e(),a("v-uni-image",{staticClass:"images",attrs:{src:e.image,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"it_tit"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"it_selt"},[a("v-uni-view",{staticClass:"it_price"},[t._v("￥"+t._s(e.price))]),a("v-uni-view",{staticClass:"it_selt_r"},[t._v("已售"+t._s(e.sale)+"件")])],1)],1)})),1)},o=[]},b5bb:function(t,e,i){"use strict";i.r(e);var a=i("9331"),n=i("c362");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("3982");var c,r=i("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"35d8b173",null,!1,a["a"],c);e["default"]=s.exports},c362:function(t,e,i){"use strict";i.r(e);var a=i("75f6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},c554:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-52c7666c]{background:#f1f1f1}body.?%PAGE?%[data-v-52c7666c]{background:#f1f1f1}",""]),t.exports=e},c56e:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(){this.loading=!1,this.isError=!0,this.$emit("error")},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=a},d2ec:function(t,e,i){var a=i("fc49");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1ac25152",a,!0,{sourceMap:!1,shadowMode:!1})},d6fb:function(t,e,i){var a=i("f52f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("81dc9054",a,!0,{sourceMap:!1,shadowMode:!1})},eaf9:function(t,e,i){"use strict";i("4160"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{buy_num:1,swiperCurrent:0,shop_id:0,shop_det:"",shop_list:[],stynumber:[],popupShow:!1,btnTxt:"",shop_type:"buy",stocks:0}},onLoad:function(t){this.shop_id=t.shop_id,this.queyGoodInfo()},methods:{valChange:function(t){this.buy_num=t.value},queyGoodInfo:function(){var t=this;this.$api.get("custom/queryGoodsDetail",{id:this.shop_id}).then((function(e){1==e.status&&(e.data.album=e.data.album.split(","),e.data.image=e.data.image.split(","),t.stocks=e.data.stock,t.shop_det=e.data,t.stynumber=[{name:"库存",num:e.data.stock},{name:"销量",num:e.data.sale}])})),this.$api.post("goods",{is_recommend:1,member_id:uni.getStorageSync("member_id")}).then((function(e){1==e.status&&(t.shop_list=e.data.data)}))},openPopup:function(t){this.popupShow=!0,this.shop_type=t},buy:function(){var t={goods_id:this.shop_id,count:this.buy_num};this.com.navto("./confirm_payment_custom?data="+JSON.stringify(t))},addCart:function(){var t=this;this.$api.post("shop/cart",{shop_goods_id:this.shop_id,count:1}).then((function(e){t.popupShow=!1,t.com.msg(e.message)}))},goto_cart:function(){uni.switchTab({url:"../cart/cart"})},skipIndex:function(){uni.switchTab({url:"./index"})},swiperChange:function(t){this.swiperCurrent=t.detail.current},banner_cli:function(t){var e=[];this.shop_det.album.forEach((function(t,i){e.push(t)})),uni.previewImage({urls:e,loop:!0})}}};e.default=a},f52f:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-image[data-v-52c7666c]{display:block}.video-popup[data-v-52c7666c]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:999}.video-popup .video[data-v-52c7666c]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.video-popup .video uni-video[data-v-52c7666c]{width:100%;height:%?500?%}uni-page-body[data-v-52c7666c]{padding-bottom:%?160?%}.teturn_top[data-v-52c7666c]{width:%?90?%;height:%?90?%;position:fixed;right:3%;bottom:%?130?%;background-color:#fff;border-radius:50%;text-align:center;line-height:%?90?%;font-size:%?40?%;box-shadow:1px 1px 3px #888}.header_bait[data-v-52c7666c]{width:100%;height:%?160?%;background-color:#fff;padding-top:%?60?%;position:fixed;left:0;top:0;z-index:99}.header_bait .toubu[data-v-52c7666c]{padding:0 3%;display:flex;justify-content:space-between;align-items:center}.header_bait .toubu .center[data-v-52c7666c]{width:60%;line-height:%?100?%;font-size:%?30?%;display:flex}.header_bait .toubu .center .center_it[data-v-52c7666c]{width:25%;text-align:center;position:relative}.header_bait .toubu .center .center_it.active[data-v-52c7666c]{color:#2d407a}.header_bait .toubu .center .center_it.active[data-v-52c7666c]:before{content:"";position:absolute;left:31%;bottom:20%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?6?%;width:38%;background-color:#2d407a;border-radius:4px;opacity:.8}.header[data-v-52c7666c]{width:100%;height:%?100?%;display:flex;justify-content:space-between;padding:0 4%;position:absolute;left:0;top:%?60?%;z-index:20}.header .header_left uni-image[data-v-52c7666c]{width:%?64?%;height:%?64?%}.icon-you[data-v-52c7666c]{\n  /* font-size: $font-base + 2upx; */color:#888}.carousel[data-v-52c7666c]{height:%?722?%;position:relative}.carousel .video-wrapper[data-v-52c7666c]{width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center}.carousel uni-video[data-v-52c7666c]{width:100%;height:%?724?%}.carousel .swiper-dots[data-v-52c7666c]{position:absolute;right:%?30?%;bottom:%?20?%;background-color:rgba(0,0,0,.5);display:inline-block;padding:%?4?% %?18?% %?6?% %?18?%;border-radius:%?50?%;color:#fff;font-size:%?24?%}.carousel uni-swiper[data-v-52c7666c]{height:100%}.carousel .image-wrapper[data-v-52c7666c]{width:100%;height:100%}.carousel .swiper-item[data-v-52c7666c]{display:flex;justify-content:center;align-content:center;height:%?750?%;overflow:hidden;position:relative}.carousel .swiper-item .bofang[data-v-52c7666c]{position:absolute;top:46%;width:%?76?%;height:%?76?%}.carousel .swiper-item .loaded[data-v-52c7666c]{width:100%;height:100%}.trabecula[data-v-52c7666c]{width:100%;background-color:#1e2f65;height:%?62?%;color:#fff;line-height:%?62?%;padding:0 3%;font-size:%?26?%}\n/* 标题简介 */.introduce-section[data-v-52c7666c]{background:#fff;padding:%?30?%}.introduce-section .title[data-v-52c7666c]{font-size:%?32?%\n  /* color: $font-color-dark; */}.introduce-section .price-box[data-v-52c7666c]{display:flex;justify-content:space-between;align-items:center\n  /* color:$uni-color-primary; */}.introduce-section .price-box .price-box_l[data-v-52c7666c]{display:flex;align-items:center}.introduce-section .price-box .price-box_l uni-image[data-v-52c7666c]{width:%?58?%;height:%?24?%;margin-left:%?16?%}.introduce-section .price-box .price-box_l .m-price-tip[data-v-52c7666c]{font-size:%?22?%;color:#e95069;margin-left:%?20?%}.introduce-section .price-box .price-box_r[data-v-52c7666c]{text-align:center;display:flex;align-items:center}.introduce-section .price-box .price-box_r uni-image[data-v-52c7666c]{width:%?38?%;height:%?38?%}.introduce-section .price-box .price-box_r uni-view[data-v-52c7666c]{font-size:%?18?%}.introduce-section .price-box .price-box_r .min-box[data-v-52c7666c]{margin-right:%?20?%}.introduce-section .price[data-v-52c7666c]{font-size:%?54?%;font-weight:700;margin:0 %?10?%}.introduce-section .m-price[data-v-52c7666c]{color:#e95069;font-size:%?30?%;margin-left:%?10?%}.introduce-section .coupon-tip[data-v-52c7666c]{align-items:center;padding:%?4?% %?10?%;color:#fff;border-radius:%?6?%;line-height:1;-webkit-transform:translateY(%?-4?%);transform:translateY(%?-4?%)}.introduce-section .bot-row[data-v-52c7666c]{display:flex;align-items:center;height:%?50?%\n  /* font-size: $font-sm; */\n  /* color: $font-color-light; */}.introduce-section .bot-row uni-text[data-v-52c7666c]{flex:1}.shop_names[data-v-52c7666c]{background-color:#fff;font-size:%?30?%;display:flex;align-items:center}.shop_names .zp[data-v-52c7666c]{font-size:%?20?%;background-image:linear-gradient(90deg,#ff4362,#fd5538);padding:0 %?4?%;color:#fff;border-radius:%?6?%}.shop_names .shopname[data-v-52c7666c]{font-weight:700;padding-left:%?10?%}.shopping_text[data-v-52c7666c]{background-color:#fff;padding:0 0 %?20?% 3%;display:flex}.text-des[data-v-52c7666c]{padding:0 %?20?% %?20?% %?20?%;font-size:%?24?%;background-color:#fff}.Rapid_delivery[data-v-52c7666c]{padding:%?20?%;color:#999;font-size:%?22?%;background-color:#fff;display:flex;align-items:center}.Rapid_delivery uni-image[data-v-52c7666c]{width:%?24?%;height:%?24?%;margin-right:%?16?%}.text-item[data-v-52c7666c]{padding:0 %?20?% %?20?% %?20?%;color:#333;font-size:%?24?%;background-color:#fff}.text-item .text-box[data-v-52c7666c]{width:100%;height:%?70?%;padding:0 %?30?%;background-color:#f6f8ff;border-radius:%?8?%;display:flex;justify-content:space-between;align-items:center}.specification[data-v-52c7666c]{width:100%;display:flex;flex-wrap:wrap;font-size:%?24?%;margin-bottom:%?20?%;background-color:#fff;padding:0 3%;line-height:%?50?%;color:#666}.specification .child[data-v-52c7666c]{width:35%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.specification .child[data-v-52c7666c]:nth-child(3n+3){width:30%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n/* 评价 */.eva-section[data-v-52c7666c]{padding:%?20?% %?30?%;background:#fff;margin-top:%?16?%}.eva-section .section_title[data-v-52c7666c]{width:100%;display:flex;justify-content:space-between}.eva-section .section_title .tit_l[data-v-52c7666c]{display:flex;align-items:center}.eva-section .section_title .tit_l .pk[data-v-52c7666c]{display:inline-block;width:%?12?%;height:100%;background-image:linear-gradient(#445589,#fff);margin-right:%?16?%}.eva-section .section_title .tit_l .pj[data-v-52c7666c]{font-size:%?28?%}.eva-section .section_title .tit_l .numbers[data-v-52c7666c]{font-size:%?22?%}.eva-section .eva-box[data-v-52c7666c]{width:100%}.eva-section .eva-box .eval_con[data-v-52c7666c]{width:100%;display:flex;background-color:#fff;padding:2%;flex-wrap:wrap;border-bottom:%?1?% solid #f6f6f6}.eva-section .eva-box .eval_con .order_head[data-v-52c7666c]{width:100%;height:%?80?%;display:flex;justify-content:space-between}.eva-section .eva-box .eval_con .order_head .img[data-v-52c7666c]{display:flex}.eva-section .eva-box .eval_con .order_head .img uni-image[data-v-52c7666c]{width:%?80?%;height:%?80?%;border-radius:%?80?%;background-color:#eee}.eva-section .eva-box .eval_con .order_head .img .shop_name[data-v-52c7666c]{width:%?180?%;line-height:%?80?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;margin-left:%?20?%;font-weight:700}.eva-section .eva-box .eval_con .order_head .order_time[data-v-52c7666c]{width:40%;line-height:%?70?%;text-align:right;font-size:%?26?%;color:#999}.eva-section .eva-box .eval_con .order_con[data-v-52c7666c]{width:100%;font-size:%?30?%;line-height:%?52?%;padding:%?6?% 0}.eva-section .eva-box .eval_con .order_img[data-v-52c7666c]{width:100%;display:flex}.eva-section .eva-box .eval_con .order_img uni-image[data-v-52c7666c]{width:%?216?%;height:%?216?%;margin:%?10?%;background-color:#eee}\n/*  详情 */.detail-desc[data-v-52c7666c]{background:#fff;margin-top:%?16?%}.detail-desc .d-header[data-v-52c7666c]{display:flex;justify-content:center;align-items:center;height:%?80?%;font-size:%?30?%;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-dark; */position:relative}.detail-desc .d-header uni-text[data-v-52c7666c]{padding:0 %?20?%;background:#fff;position:relative;z-index:1}.detail-desc .d-header[data-v-52c7666c]:after{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?300?%;height:0;content:"";border-bottom:1px solid #ccc}\n/* 规格选择弹窗 */.attr-content[data-v-52c7666c]{padding:%?10?% %?30?%}.attr-content .a-t[data-v-52c7666c]{display:flex}.attr-content .a-t uni-image[data-v-52c7666c]{width:%?170?%;height:%?170?%;flex-shrink:0;margin-top:%?-40?%;border-radius:%?8?%}.attr-content .a-t .right[data-v-52c7666c]{display:flex;flex-direction:column;padding-left:%?24?%;\n  /* font-size: $font-sm + 2upx; */\n  /* color: $font-color-base; */line-height:%?42?%}.attr-content .a-t .right .price[data-v-52c7666c]{\n  /* font-size: $font-lg; */\n  /* color: $uni-color-primary; */margin-bottom:%?10?%}.attr-content .a-t .right .selected-text[data-v-52c7666c]{margin-right:%?10?%}.attr-content .attr-list[data-v-52c7666c]{display:flex;flex-direction:column;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-base; */padding-top:%?30?%;padding-left:%?10?%}.attr-content .jg_sty[data-v-52c7666c]{font-size:%?24?%;padding:%?20?%;width:100%;background-color:#f6f6f6;border-radius:%?20?%;margin:%?10?% 0;border:%?1?% solid #f6f6f6;position:relative}.attr-content .jg_sty.jactive[data-v-52c7666c]{color:#2d407a;background-color:#f6f8ff;border:%?2?% solid #2d407a}.attr-content .jg_sty .jg_sty_t[data-v-52c7666c]{display:flex;align-items:center;line-height:%?40?%}.attr-content .jg_sty .jg_sty_t uni-view[data-v-52c7666c]{width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b[data-v-52c7666c]{display:flex;line-height:%?40?%;justify-content:space-between}.attr-content .jg_sty .jg_sty_b uni-view[data-v-52c7666c]{width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b .jg_r[data-v-52c7666c]{color:#ef2d2d}.attr-content .jg_sty .jg_sty_b .jg_r uni-text[data-v-52c7666c]{font-size:%?32?%;font-weight:700}.attr-content .jg_sty .jg_r[data-v-52c7666c]{color:#ef2d2d;position:absolute;top:38%;right:0}.attr-content .jg_sty .jg_r uni-text[data-v-52c7666c]{font-size:%?32?%;font-weight:700}.attr-content .item-list[data-v-52c7666c]{padding:%?20?% 0 0;display:flex;flex-wrap:wrap}.attr-content .item-list uni-text[data-v-52c7666c]{font-size:%?24?%;display:flex;align-items:center;justify-content:center;background:#eee;margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?40?%;min-width:%?60?%;height:%?50?%;padding:0 %?40?%\n  /* font-size: $font-base; */\n  /* color: $font-color-dark; */}.attr-content .item-list .selected[data-v-52c7666c]{background:#f6f8ff;border:%?2?% solid #2d407a;color:#2d407a}.attr-content .btn[data-v-52c7666c]{height:%?66?%;width:100%;font-size:%?30?%;line-height:%?66?%;border-radius:%?100?%;background:#273b76;\n  /* font-size: $font-base + 2upx; */color:#fff;margin:%?60?% auto %?60?%}\n/*  弹出层 */.popup[data-v-52c7666c]{position:fixed;left:0;top:0;right:0;bottom:0;z-index:99}.popup.show[data-v-52c7666c]{display:block}.popup.show .mask[data-v-52c7666c]{-webkit-animation:showPopup-data-v-52c7666c .2s linear both;animation:showPopup-data-v-52c7666c .2s linear both}.popup.show .layer[data-v-52c7666c]{-webkit-animation:showLayer-data-v-52c7666c .2s linear both;animation:showLayer-data-v-52c7666c .2s linear both}.popup.hide .mask[data-v-52c7666c]{-webkit-animation:hidePopup-data-v-52c7666c .2s linear both;animation:hidePopup-data-v-52c7666c .2s linear both}.popup.hide .layer[data-v-52c7666c]{-webkit-animation:hideLayer-data-v-52c7666c .2s linear both;animation:hideLayer-data-v-52c7666c .2s linear both}.popup.none[data-v-52c7666c]{display:none}.popup .mask[data-v-52c7666c]{position:fixed;top:0;width:100%;height:100%;z-index:1;background-color:rgba(0,0,0,.4)}.popup .layer[data-v-52c7666c]{position:fixed;z-index:99;bottom:0;width:100%;border-radius:%?10?% %?10?% 0 0;background-color:#fff}.popup .layer .btn[data-v-52c7666c]{height:%?66?%;width:91%;line-height:%?66?%;border-radius:%?100?%;background:#273b76;\n  /* font-size: $font-base + 2upx; */color:#fff;margin:%?30?% auto %?60?%}@-webkit-keyframes showPopup-data-v-52c7666c{0%{opacity:0}100%{opacity:1}}@keyframes showPopup-data-v-52c7666c{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes hidePopup-data-v-52c7666c{0%{opacity:1}100%{opacity:0}}@keyframes hidePopup-data-v-52c7666c{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes showLayer-data-v-52c7666c{0%{-webkit-transform:translateY(120%);transform:translateY(120%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes showLayer-data-v-52c7666c{0%{-webkit-transform:translateY(120%);transform:translateY(120%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes hideLayer-data-v-52c7666c{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(120%);transform:translateY(120%)}}@keyframes hideLayer-data-v-52c7666c{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(120%);transform:translateY(120%)}}\n/* 购买 */.add_bottom[data-v-52c7666c]{z-index:99;position:fixed;left:0;bottom:0;width:100%;height:%?100?%;background-color:#fff;display:flex;align-items:center;border-top:%?1?% solid #e2e2e2}.add_bottom .add_con[data-v-52c7666c]{width:%?695?%;margin:0 auto;display:flex;justify-content:space-between;align-items:center}.add_bottom .add_con .s_icon[data-v-52c7666c]{margin-left:%?27?%}.add_bottom .add_con .three_icons[data-v-52c7666c]{width:%?100?%;display:flex;flex-direction:column;align-items:center;font-size:%?20?%;color:#333}.add_bottom .add_con .three_icons uni-view[data-v-52c7666c]{width:100%;text-align:center;margin-top:%?10?%}.add_bottom .add_con .three_icons uni-image[data-v-52c7666c]{width:%?36?%;height:auto}.add_bottom .add_con .anniu[data-v-52c7666c]{display:flex;justify-content:flex-end;align-items:center;width:%?400?%}.add_bottom .add_con .anniu .add_car[data-v-52c7666c]{width:45%;height:%?62?%;line-height:%?62?%;background-image:linear-gradient(90deg,#354a8b,#1b2c60);border-radius:%?30?%;font-size:%?24?%;color:#fff;text-align:center}.add_bottom .add_con .anniu .buy[data-v-52c7666c]{width:45%;height:%?62?%;line-height:%?62?%;background-image:linear-gradient(90deg,#f3c44f,#f2b827 50%,#f0ab00);border-radius:%?30?%;font-size:%?24?%;color:#fff;text-align:center;margin-left:%?10?%}',""]),t.exports=e},fc49:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cont[data-v-35d8b173]{width:100%;padding:0 2%;display:flex;flex-wrap:wrap}.cont .cont_item[data-v-35d8b173]{width:49%;margin-right:2%;border-radius:%?16?%;background-color:#fff;margin-top:%?20?%;overflow:hidden;position:relative;padding-bottom:%?10?%}.cont .cont_item .imagea[data-v-35d8b173]{width:%?56?%;height:%?70?%;position:absolute;left:%?22?%;top:0;z-index:20}.cont .cont_item .images[data-v-35d8b173]{width:%?350?%;height:%?350?%}.cont .cont_item .it_tit[data-v-35d8b173]{padding-left:%?10?%;font-size:%?28?%;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:%?56?%}.cont .cont_item .it_price[data-v-35d8b173]{color:#ea5b72;font-weight:700;font-size:%?30?%}.cont .cont_item .it_selt[data-v-35d8b173]{padding-left:%?10?%;width:100%;display:flex;justify-content:space-between;line-height:%?40?%}.cont .cont_item .it_selt .it_selt_r[data-v-35d8b173]{width:%?150?%;color:#998;font-size:%?22?%;text-align:right;margin-right:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cont .cont_item[data-v-35d8b173]:nth-child(2n+2){margin-right:0}',""]),t.exports=e},fe03:function(t,e,i){"use strict";var a=i("d6fb"),n=i.n(a);n.a}}]);