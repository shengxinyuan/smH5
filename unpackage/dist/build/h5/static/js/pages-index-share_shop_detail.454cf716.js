(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-share_shop_detail"],{"04a6":function(t,e,i){"use strict";i("4160"),i("ac1f"),i("5319"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{value:1,shop_num:1,shop_type:0,jg_ind:"",bgcolor:"",opacity:0,head_ind:0,specClass:"none",specSelected:[],swiperCurrent:0,favorite:!0,shareList:[],imgList:[],pingl:0,tuij:0,detail_shop:0,shop_id:0,shop_det:"",stynumber:[],shop_list:"",member:"",shopsku:"",shoptype_id:"",sku_ids:"",details:"",commentlist:"",autoplay:!1,return_top:!1,skuShow:!1,stock:0,videoShow:!1,stocks:1}},onPageScroll:function(t){t.scrollTop>300?this.return_top=!0:this.return_top=!1,this.opacity=t.scrollTop/180,t.scrollTop>=this.pingl&&t.scrollTop<this.detail_shop?this.head_ind=1:t.scrollTop>=this.detail_shop&&t.scrollTop<this.tuij?this.head_ind=2:t.scrollTop>=this.tuij?this.head_ind=3:0==t.scrollTop&&(this.head_ind=0)},onLoad:function(t){this.shop_id=t.shop_id,this.page_render()},onReady:function(t){this.videoContext=uni.createVideoContext("myVideo")},methods:{ZhanTing:function(){1==this.autoplay&&(this.autoplay=!1)},zanting:function(){this.videoShow=!1},valChange:function(t){this.shop_num=t.value},page_render:function(){var t=this,e=uni.getStorageSync("member_id")||0;this.$api.get("goods/"+this.shop_id+"?member_id="+e).then((function(e){1==e.status&&(t.shop_det=e.data,t.shoptype_id=e.data.id,t.stynumber=[{name:"款号",num:e.data.model_no},{name:"库存",num:e.data.stock},{name:"成色",num:e.data.texture},{name:"销量",num:e.data.sale}],t.sku())})),this.$api.post("goods",{is_recommend:1,member_id:uni.getStorageSync("member_id")||0}).then((function(e){1==e.status&&(t.shop_list=e.data.data)})),this.$api.get("commentlist/"+this.shop_id).then((function(e){1==e.status&&(t.commentlist=e.data)}))},like_collect:function(t){uni.navigateTo({url:"/pages/login/download"})},shop_pay:function(t){uni.navigateTo({url:"/pages/login/download"})},zhifu:function(t){this.value=1,this.jg_ind=t.id,this.stock=t.stock,this.stocks=t.stock,console.log(this.stock)},goto_cart:function(){uni.navigateTo({url:"/pages/login/download"})},goto_page:function(t){uni.navigateTo({url:"/pages/login/download"})},skipIndex:function(){uni.navigateTo({url:"/pages/login/download"})},head_nav_cli:function(t){this.head_ind=t;0==t&&uni.pageScrollTo({scrollTop:0,duration:200,success:function(t){this.head_ind=0}})},swiperChange:function(t){this.swiperCurrent=t.detail.current},banner_cli:function(t){if(this.shop_det.video)if(0==t)this.videoShow=!0;else{var e=[];this.shop_det.album.forEach((function(t,i){0!=i&&e.push(t.img0)})),uni.previewImage({urls:e,loop:!0})}else{var i=[];this.shop_det.album.forEach((function(t,e){i.push(t.img0)})),uni.previewImage({urls:i,loop:!0})}},payment_yes:function(t){uni.navigateTo({url:"/pages/login/download"})},sku:function(){var t=this;this.$api.get("sku",{type:0,id:this.shoptype_id,member_id:uni.getStorageSync("member_id")}).then((function(e){console.log(e),1==e.status&&(t.shopsku=e.data,t.details=e.data.data)}))},toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout((function(){t.specClass="none"}),2500)):"none"===this.specClass&&(this.specClass="show")},selectSpec:function(t,e,i){var a=this,n=this.shopsku.title[t];n.data.forEach((function(t){t.pid===i&&a.$set(t,"selected",!1)})),this.$set(n.data[e],"selected",!0),this.specSelected="",this.shopsku.title.forEach((function(t){t.data.forEach((function(e){if(1==e.selected){a.specSelected+=e.id+",";var i="";a.sku_ids=a.specSelected.substr(0,a.specSelected.length-1),i=a.sku_ids.replace(/\,/g,""),t.data.length==i.length&&a.$api.get("sku",{type:0,id:a.shoptype_id,sku_ids:a.sku_ids}).then((function(t){console.log(t),1==t.status&&(a.details=t.data.data)}))}}))}))},buy:function(){uni.navigateTo({url:"/pages/login/download"})},stopPrevent:function(){},go_shopdetail:function(t){uni.navigateTo({url:"/pages/index/share_shop_detail?shop_id="+t})}}};e.default=a},"12d6":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-f070b356]{background:#f1f1f1}body.?%PAGE?%[data-v-f070b356]{background:#f1f1f1}",""]),t.exports=e},"25b2":function(t,e,i){var a=i("4cb2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6b023b22",a,!0,{sourceMap:!1,shadowMode:!1})},"2c01":function(t,e,i){"use strict";i.r(e);var a=i("b3f5"),n=i("57ed");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("6f54");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"f207f29a",null,!1,a["a"],s);e["default"]=d.exports},"373d":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a(i("b85c")),s=uni.getSystemInfoSync(),r=s.windowWidth,d=(s.platform,i("6fc9")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,a=e.split("://")[0],n=a.length;i=e[n];n++){if("/"==i&&"/"!=e[n-1]&&"/"!=e[n+1])break;a+=Math.random()>.5?i.toUpperCase():i}return a+=e.substr(n),this[t]=a}if(this[t]=e,e.includes("data:image")){var o=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!o)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),n&&(this.search=function(e){return n(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var a=document.createElement("div");e?this.rtf?this.rtf.appendChild(a):this.rtf=a:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=a),a.innerHTML=this._handleHtml(t,e);for(var n,s=this.rtf.getElementsByTagName("style"),l=0;n=s[l++];)n.innerHTML=n.innerHTML.replace(/body/g,"#rtf"+this._uid),n.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,a=0;e=t[a++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var c=this,f=this.rtf.getElementsByTagName("title");f.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:f[0].innerText});var u=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var p,h=this.rtf.getElementsByTagName("img"),v=0,g=0;p=h[v];v++)parseInt(p.style.width||p.getAttribute("width"))>r&&(p.style.height="auto"),u(p),p.hasAttribute("ignore")||"A"==p.parentElement.nodeName||(p.i=g++,c.imgList.push(p.getAttribute("original-src")||p.src||p.getAttribute("data-src")),p.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},c.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:c.imgList})}),p.onerror=function(){d.errorImg&&(c.imgList[this.i]=this.src=d.errorImg),c.$emit("error",{source:"img",target:this})},c.lazyLoad&&this._observer&&p.src&&0!=p.i&&(p.setAttribute("data-src",p.src),p.removeAttribute("src"),this._observer.observe(p));var b,m=this.rtf.getElementsByTagName("a"),_=(0,o.default)(m);try{for(_.s();!(b=_.n()).done;){var w=b.value;w.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(c.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])c.useAnchor&&c.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(M){_.e(M)}finally{_.f()}var y=this.rtf.getElementsByTagName("video");c.videoContexts=y;for(var x,k=0;x=y[k++];)u(x),x.style.maxWidth="100%",x.onerror=function(){c.$emit("error",{source:"video",target:this})},x.onplay=function(){if(c.autopause)for(var t,e=0;t=c.videoContexts[e++];)t!=this&&t.pause()};var C,z,A=this.rtf.getElementsByTagName("audio"),j=(0,o.default)(A);try{for(j.s();!(C=j.n()).done;){var T=C.value;u(T),T.onerror=function(){c.$emit("error",{source:"audio",target:this})}}}catch(M){j.e(M)}finally{j.f()}if(this.autoscroll){var S,E=this.rtf.getElementsByTagName("table"),$=(0,o.default)(E);try{for($.s();!(S=$.n()).done;){var B=S.value,L=document.createElement("div");L.style.overflow="scroll",B.parentNode.replaceChild(L,B),L.appendChild(B)}}catch(M){$.e(M)}finally{$.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==z&&(i.$emit("ready",i.rect),clearInterval(i._timer)),z=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",a=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?a.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():a.selectViewport().scrollOffset(),a.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var a=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=a:uni.pageScrollTo({scrollTop:a,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var a in d.userAgentStyles)i+="".concat(a,"{").concat(d.userAgentStyles[a],"}");for(a in this.tagStyle)i+="".concat(a,"{").concat(this.tagStyle[a],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*r/750+"px"}))),t}}};e.default=l},"4cb2":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-f070b356]{padding-bottom:%?160?%}.teturn_top[data-v-f070b356]{width:%?90?%;height:%?90?%;position:fixed;right:3%;bottom:%?130?%;background-color:#fff;border-radius:50%;text-align:center;line-height:%?90?%;font-size:%?40?%;box-shadow:1px 1px 3px #888}.header_bait[data-v-f070b356]{width:100%;height:%?160?%;background-color:#fff;padding-top:%?60?%;position:fixed;left:0;top:0;z-index:99}.header_bait .toubu[data-v-f070b356]{padding:0 3%;display:flex;justify-content:space-between;align-items:center}.header_bait .toubu .center[data-v-f070b356]{width:60%;line-height:%?100?%;font-size:%?30?%;display:flex}.header_bait .toubu .center .center_it[data-v-f070b356]{width:25%;text-align:center;position:relative}.header_bait .toubu .center .center_it.active[data-v-f070b356]{color:#2d407a}.header_bait .toubu .center .center_it.active[data-v-f070b356]:before{content:"";position:absolute;left:31%;bottom:20%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?6?%;width:38%;background-color:#2d407a;border-radius:4px;opacity:.8}.header[data-v-f070b356]{width:100%;height:%?100?%;display:flex;justify-content:space-between;padding:0 4%;position:absolute;left:0;top:%?60?%;z-index:20}.header .header_left uni-image[data-v-f070b356]{width:%?64?%;height:%?64?%}.icon-you[data-v-f070b356]{\n  /* font-size: $font-base + 2upx; */color:#888}.carousel[data-v-f070b356]{height:%?722?%;position:relative}.carousel uni-video[data-v-f070b356]{width:100%;height:%?724?%}.carousel .swiper-dots[data-v-f070b356]{position:absolute;right:%?30?%;bottom:%?20?%;background-color:rgba(0,0,0,.5);display:inline-block;padding:%?4?% %?18?% %?6?% %?18?%;border-radius:%?50?%;color:#fff;font-size:%?24?%}.carousel uni-swiper[data-v-f070b356]{height:100%}.carousel .image-wrapper[data-v-f070b356]{width:100%;height:100%}.carousel .swiper-item[data-v-f070b356]{display:flex;justify-content:center;align-content:center;height:%?750?%;overflow:hidden;position:relative}.carousel .swiper-item .bofang[data-v-f070b356]{position:absolute;top:46%;width:%?76?%;height:%?76?%}.carousel .swiper-item .loaded[data-v-f070b356]{width:100%;height:100%}.trabecula[data-v-f070b356]{width:100%;background-color:#1e2f65;height:%?62?%;color:#fff;line-height:%?62?%;padding:0 3%;font-size:%?26?%}\n/* 标题简介 */.introduce-section[data-v-f070b356]{background:#fff;padding:%?30?%}.introduce-section .title[data-v-f070b356]{font-size:%?32?%\n  /* color: $font-color-dark; */}.introduce-section .price-box[data-v-f070b356]{display:flex;justify-content:space-between;align-items:center\n  /* color:$uni-color-primary; */}.introduce-section .price-box .price-box_l[data-v-f070b356]{display:flex;align-items:center}.introduce-section .price-box .price-box_l uni-image[data-v-f070b356]{width:%?58?%;height:%?24?%;margin-left:%?16?%}.introduce-section .price-box .price-box_l .m-price-tip[data-v-f070b356]{font-size:%?22?%;color:#e95069;margin-left:%?20?%}.introduce-section .price-box .price-box_r[data-v-f070b356]{text-align:center;display:flex;align-items:center}.introduce-section .price-box .price-box_r uni-image[data-v-f070b356]{width:%?38?%;height:%?38?%}.introduce-section .price-box .price-box_r uni-view[data-v-f070b356]{font-size:%?18?%}.introduce-section .price-box .price-box_r .min-box[data-v-f070b356]{margin-right:%?20?%}.introduce-section .price[data-v-f070b356]{font-size:%?54?%;font-weight:700;margin:0 %?10?%}.introduce-section .m-price[data-v-f070b356]{color:#e95069;font-size:%?30?%;margin-left:%?10?%}.introduce-section .coupon-tip[data-v-f070b356]{align-items:center;padding:%?4?% %?10?%;color:#fff;border-radius:%?6?%;line-height:1;-webkit-transform:translateY(%?-4?%);transform:translateY(%?-4?%)}.introduce-section .bot-row[data-v-f070b356]{display:flex;align-items:center;height:%?50?%\n  /* font-size: $font-sm; */\n  /* color: $font-color-light; */}.introduce-section .bot-row uni-text[data-v-f070b356]{flex:1}.shop_names[data-v-f070b356]{background-color:#fff;font-size:%?30?%;display:flex;align-items:center}.shop_names .zp[data-v-f070b356]{font-size:%?20?%;background-image:linear-gradient(90deg,#ff4362,#fd5538);padding:0 %?4?%;color:#fff;border-radius:%?6?%}.shop_names .shopname[data-v-f070b356]{font-weight:700;padding-left:%?10?%}.shopping_text[data-v-f070b356]{background-color:#fff;padding:0 0 %?20?% 3%;display:flex}.text-des[data-v-f070b356]{padding:0 %?20?% %?20?% %?20?%;font-size:%?24?%;background-color:#fff}.Rapid_delivery[data-v-f070b356]{padding:%?20?%;color:#999;font-size:%?22?%;background-color:#fff;display:flex;align-items:center}.Rapid_delivery uni-image[data-v-f070b356]{width:%?24?%;height:%?24?%;margin-right:%?16?%}.text-item[data-v-f070b356]{padding:0 %?20?% %?20?% %?20?%;color:#333;font-size:%?24?%;background-color:#fff}.text-item .text-box[data-v-f070b356]{width:100%;height:%?70?%;padding:0 %?30?%;background-color:#f6f8ff;border-radius:%?8?%;display:flex;justify-content:space-between;align-items:center}.specification[data-v-f070b356]{width:100%;display:flex;flex-wrap:wrap;font-size:%?24?%;margin:%?20?% 0;background-color:#fff;padding:0 3%;line-height:%?50?%;color:#666}.specification .child[data-v-f070b356]{width:35%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.specification .child[data-v-f070b356]:nth-child(3n+3){width:30%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n/* 评价 */.eva-section[data-v-f070b356]{padding:%?20?% %?30?%;background:#fff;margin-top:%?16?%}.eva-section .section_title[data-v-f070b356]{width:100%;display:flex;justify-content:space-between}.eva-section .section_title .tit_l[data-v-f070b356]{display:flex;align-items:center}.eva-section .section_title .tit_l .pk[data-v-f070b356]{display:inline-block;width:%?12?%;height:100%;background-image:linear-gradient(#445589,#fff);margin-right:%?16?%}.eva-section .section_title .tit_l .pj[data-v-f070b356]{font-size:%?28?%}.eva-section .section_title .tit_l .numbers[data-v-f070b356]{font-size:%?22?%}.eva-section .eva-box[data-v-f070b356]{width:100%}.eva-section .eva-box .eval_con[data-v-f070b356]{width:100%;display:flex;background-color:#fff;padding:2%;flex-wrap:wrap;border-bottom:%?1?% solid #f6f6f6}.eva-section .eva-box .eval_con .order_head[data-v-f070b356]{width:100%;height:%?80?%;display:flex;justify-content:space-between}.eva-section .eva-box .eval_con .order_head .img[data-v-f070b356]{display:flex}.eva-section .eva-box .eval_con .order_head .img uni-image[data-v-f070b356]{width:%?80?%;height:%?80?%;border-radius:%?80?%;background-color:#eee}.eva-section .eva-box .eval_con .order_head .img .shop_name[data-v-f070b356]{width:%?180?%;line-height:%?80?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:%?28?%;margin-left:%?20?%;font-weight:700}.eva-section .eva-box .eval_con .order_head .order_time[data-v-f070b356]{width:40%;line-height:%?70?%;text-align:right;font-size:%?26?%;color:#999}.eva-section .eva-box .eval_con .order_con[data-v-f070b356]{width:100%;font-size:%?30?%;line-height:%?52?%;padding:%?6?% 0}.eva-section .eva-box .eval_con .order_img[data-v-f070b356]{width:100%;display:flex}.eva-section .eva-box .eval_con .order_img uni-image[data-v-f070b356]{width:%?216?%;height:%?216?%;margin:%?10?%;background-color:#eee}\n/*  详情 */.detail-desc[data-v-f070b356]{background:#fff;margin-top:%?16?%}.detail-desc .d-header[data-v-f070b356]{display:flex;justify-content:center;align-items:center;height:%?80?%;font-size:%?30?%;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-dark; */position:relative}.detail-desc .d-header uni-text[data-v-f070b356]{padding:0 %?20?%;background:#fff;position:relative;z-index:1}.detail-desc .d-header[data-v-f070b356]:after{position:absolute;left:50%;top:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?300?%;height:0;content:"";border-bottom:1px solid #ccc}\n/* 规格选择弹窗 */.attr-content[data-v-f070b356]{padding:%?10?% %?30?%}.attr-content .a-t[data-v-f070b356]{display:flex}.attr-content .a-t uni-image[data-v-f070b356]{width:%?170?%;height:%?170?%;flex-shrink:0;margin-top:%?-40?%;border-radius:%?8?%}.attr-content .a-t .right[data-v-f070b356]{display:flex;flex-direction:column;padding-left:%?24?%;\n  /* font-size: $font-sm + 2upx; */\n  /* color: $font-color-base; */line-height:%?42?%}.attr-content .a-t .right .price[data-v-f070b356]{\n  /* font-size: $font-lg; */\n  /* color: $uni-color-primary; */margin-bottom:%?10?%}.attr-content .a-t .right .selected-text[data-v-f070b356]{margin-right:%?10?%}.attr-content .attr-list[data-v-f070b356]{display:flex;flex-direction:column;\n  /* font-size: $font-base + 2upx; */\n  /* color: $font-color-base; */padding-top:%?30?%;padding-left:%?10?%}.attr-content .jg_sty[data-v-f070b356]{font-size:%?24?%;padding:%?20?%;width:100%;background-color:#f6f6f6;border-radius:%?20?%;margin:%?10?% 0;border:%?1?% solid #f6f6f6}.attr-content .jg_sty.jactive[data-v-f070b356]{color:#2d407a;background-color:#f6f8ff;border:%?2?% solid #2d407a}.attr-content .jg_sty .jg_sty_t[data-v-f070b356]{display:flex;align-items:center;line-height:%?40?%}.attr-content .jg_sty .jg_sty_t uni-view[data-v-f070b356]{width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b[data-v-f070b356]{display:flex;line-height:%?40?%;justify-content:space-between}.attr-content .jg_sty .jg_sty_b uni-view[data-v-f070b356]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attr-content .jg_sty .jg_sty_b .jg_r[data-v-f070b356]{color:#ef2d2d}.attr-content .jg_sty .jg_sty_b .jg_r uni-text[data-v-f070b356]{font-size:%?32?%;font-weight:700}.attr-content .item-list[data-v-f070b356]{padding:%?20?% 0 0;display:flex;flex-wrap:wrap}.attr-content .item-list uni-text[data-v-f070b356]{font-size:%?24?%;display:flex;align-items:center;justify-content:center;background:#eee;margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?40?%;min-width:%?60?%;height:%?50?%;padding:0 %?40?%\n  /* font-size: $font-base; */\n  /* color: $font-color-dark; */}.attr-content .item-list .selected[data-v-f070b356]{background:#f6f8ff;border:%?2?% solid #2d407a;color:#2d407a}.attr-content .btn[data-v-f070b356]{height:%?66?%;width:100%;font-size:%?30?%;line-height:%?66?%;border-radius:%?100?%;background:#273b76;\n  /* font-size: $font-base + 2upx; */color:#fff;margin:%?30?% auto %?20?%}\n/*  弹出层 */.popup[data-v-f070b356]{position:fixed;left:0;top:0;right:0;bottom:0;z-index:99}.popup.show[data-v-f070b356]{display:block}.popup.show .mask[data-v-f070b356]{-webkit-animation:showPopup-data-v-f070b356 .2s linear both;animation:showPopup-data-v-f070b356 .2s linear both}.popup.show .layer[data-v-f070b356]{-webkit-animation:showLayer-data-v-f070b356 .2s linear both;animation:showLayer-data-v-f070b356 .2s linear both}.popup.hide .mask[data-v-f070b356]{-webkit-animation:hidePopup-data-v-f070b356 .2s linear both;animation:hidePopup-data-v-f070b356 .2s linear both}.popup.hide .layer[data-v-f070b356]{-webkit-animation:hideLayer-data-v-f070b356 .2s linear both;animation:hideLayer-data-v-f070b356 .2s linear both}.popup.none[data-v-f070b356]{display:none}.popup .mask[data-v-f070b356]{position:fixed;top:0;width:100%;height:100%;z-index:1;background-color:rgba(0,0,0,.4)}.popup .layer[data-v-f070b356]{position:fixed;z-index:99;bottom:0;width:100%;border-radius:%?10?% %?10?% 0 0;background-color:#fff}.popup .layer .btn[data-v-f070b356]{height:%?66?%;width:91%;line-height:%?66?%;border-radius:%?100?%;background:#273b76;\n  /* font-size: $font-base + 2upx; */color:#fff;margin:%?30?% auto %?20?%}@-webkit-keyframes showPopup-data-v-f070b356{0%{opacity:0}100%{opacity:1}}@keyframes showPopup-data-v-f070b356{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes hidePopup-data-v-f070b356{0%{opacity:1}100%{opacity:0}}@keyframes hidePopup-data-v-f070b356{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes showLayer-data-v-f070b356{0%{-webkit-transform:translateY(120%);transform:translateY(120%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes showLayer-data-v-f070b356{0%{-webkit-transform:translateY(120%);transform:translateY(120%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes hideLayer-data-v-f070b356{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(120%);transform:translateY(120%)}}@keyframes hideLayer-data-v-f070b356{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(120%);transform:translateY(120%)}}\n/* 购买 */.add_bottom[data-v-f070b356]{width:100%;z-index:999;position:fixed;display:flex;align-items:center;left:0;right:0;bottom:0;height:%?100?%;background-color:#fff;border-top:%?1?% solid #e2e2e2;padding:0 %?20?%}.add_bottom .add_car[data-v-f070b356]{flex:1;background-image:linear-gradient(90deg,#354a8b,#1b2c60);border-radius:%?30?%;font-size:%?24?%;color:#fff;text-align:center}.add_bottom .buy[data-v-f070b356]{flex:1;background-image:linear-gradient(90deg,#f3c44f,#f2b827 50%,#f0ab00);border-radius:%?30?%;font-size:%?24?%;color:#fff;text-align:center;margin-left:%?20?%}.cont[data-v-f070b356]{width:100%;padding:0 2%;display:flex;flex-wrap:wrap}.cont .cont_item[data-v-f070b356]{width:49%;margin-right:2%;border-radius:%?16?%;background-color:#fff;margin-top:%?20?%;overflow:hidden;position:relative;padding-bottom:%?10?%}.cont .cont_item .imagea[data-v-f070b356]{width:%?56?%;height:%?70?%;position:absolute;left:%?22?%;top:0;z-index:20}.cont .cont_item .images[data-v-f070b356]{width:%?350?%;height:%?350?%}.cont .cont_item .it_tit[data-v-f070b356]{padding-left:%?10?%;font-size:%?28?%;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:%?56?%}.cont .cont_item .it_price[data-v-f070b356]{color:#ea5b72;font-weight:700;font-size:%?30?%}.cont .cont_item .it_selt[data-v-f070b356]{padding-left:%?10?%;width:100%;display:flex;justify-content:space-between;line-height:%?40?%}.cont .cont_item .it_selt .it_selt_r[data-v-f070b356]{width:%?150?%;color:#998;font-size:%?22?%;text-align:right;margin-right:%?20?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cont .cont_item[data-v-f070b356]:nth-child(2n+2){margin-right:0}',""]),t.exports=e},"57ed":function(t,e,i){"use strict";i.r(e);var a=i("373d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"6f54":function(t,e,i){"use strict";var a=i("d92d"),n=i.n(a);n.a},"6fc9":function(t,e,i){i("ac1f"),i("1276");var a={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:n(" , ,\t,\r,\n,\f"),boolAttrs:n("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:n("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:n("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:n("a,colgroup,fieldset,legend"),selfClosingTags:n("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function n(t){for(var e=Object.create(null),i=t.split(","),a=i.length;a--;)e[i[a]]=!0;return e}t.exports=a},a21a:function(t,e,i){"use strict";var a=i("25b2"),n=i.n(a);n.a},b3f5:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},o=[]},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=n(i("06c5"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,a.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,d=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){d=!0,s=t},f:function(){try{r||null==i["return"]||i["return"]()}finally{if(d)throw s}}}}},bcf2:function(t,e,i){"use strict";i.r(e);var a=i("ef44"),n=i("fe54");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("e57c"),i("a21a");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"f070b356",null,!1,a["a"],s);e["default"]=d.exports},d053:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACO0lEQVQ4jX3UTahVZRTG8d85ptdEaaBy3Sl+NIkQcnb9wKAEr4WhoGKGRQ6LQlMnotC0aFiQHIRyIqKD4qZCXoymKigSpBGKpMVrJIgOvHQ1imXryOm493lgw/543/9ea73PWq1Op6NBs/AqRrEAc3EbP+E0vsffpZQndrdreE/jAG7iYMIv4Bv8glcS+jO21MXzVN/zIoxhNt7D8YimZt/z2B/fq6o6jHdLKZN1kUaKZ/EnXsTRBmBoAu/gzbwCPqUfOh3f4jLW405TofE+5uX9MWzF6xn5/6B7MuVNmKxnPdJ27ML57otSygl8FOdQVdVzXegQdueHuwOAG/BllqVfn+JX7OxC12XtjgwAvpSwaXXQUspDfIZtVVW1AroKZ/CwARiHFinOwKW0Up1OYhiLA7oQ1xoWLskfPpPPLXyAkX47llIi/fthy25N7zVAr2M1duSPl+Fz7MU/NevDau12tt5wUzGzi8Z61nyNt/o9XFXVUDro94BexMoBUGn0mVm3MPuDmjUr8BduBHQ8oYsagK00/HfYPMDHb8SQKaVMtLNu4+nTOo2mBxsbo6qq6LC38YWejtqH12oGTGgpNuYh1AGj57/CuVLKKT2QH/FsQ+oHm4CYik56eXn3Zd08nZ/tNi1t0wRcmGV7GWtLKb8Ngkb0MWCicz7MkdirF/AJruQ0GymlxHR7rDpoHEoM4Y9ziIRP/8DV7JgfMAdr4vBKKeHzJ6KqU/jtUF6xJuodMzc671bDnv+EfwEg7ZDoWKPCJQAAAABJRU5ErkJggg=="},d92d:function(t,e,i){var a=i("dc2a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("34a2b454",a,!0,{sourceMap:!1,shadowMode:!1})},dc2a:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-f207f29a{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},e57c:function(t,e,i){"use strict";var a=i("f754"),n=i.n(a);n.a},ef44:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("8be7").default,uParse:i("2c01").default,uPopup:i("816e").default,uNumberBox:i("1330").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"carousel"},[a("v-uni-swiper",{attrs:{hidden:t.autoplay,circular:!0,autoplay:!0,duration:400,interval:3e3},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.shop_det.album,(function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"swiper-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.banner_cli(i)}}},[a("v-uni-view",{staticClass:"image-wrapper"},[a("v-uni-image",{staticClass:"loaded",attrs:{src:e.img0,mode:"aspectFill"}})],1),t.shop_det.video&&0==i?a("v-uni-image",{staticClass:"bofang",attrs:{src:"/static/bofang.png",mode:""}}):t._e()],1)})),1),a("v-uni-view",{staticClass:"swiper-dots"},[a("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),a("v-uni-text",{staticClass:"sign"},[t._v("/")]),t.shop_det.album?a("v-uni-text",{staticClass:"num"},[t._v(t._s(t.shop_det.album.length))]):t._e()],1)],1),a("v-uni-view",{staticClass:"introduce-section"},[a("v-uni-view",{staticClass:"price-box"},[a("v-uni-view",{staticClass:"price-box_l"},[a("v-uni-text",{staticClass:"price-tip"},[t._v("¥")]),a("v-uni-text",{staticClass:"price"},[t._v(t._s(t.shop_det.price))]),t._v("起")],1)],1)],1),a("v-uni-view",{staticClass:"shopping_text"},[a("v-uni-view",{staticClass:"shop_names"},[a("v-uni-text",{staticClass:"zp"},[t._v("正品")]),a("v-uni-text",{staticClass:"shopname"},[t._v(t._s(t.shop_det.title))])],1),a("v-uni-view",{staticClass:"shop_introduce"},[t._v(t._s(t.shop_det.remark))])],1),a("v-uni-view",{staticClass:"text-des"},[a("v-uni-text",[t._v(t._s(t.shop_det.remark))])],1),a("v-uni-view",{staticClass:"Rapid_delivery"},[a("v-uni-image",{attrs:{src:i("d053"),mode:"aspectFill"}}),a("v-uni-text",{staticStyle:{"margin-right":"16upx"}},[t._v(t._s(t.shop_det.letter))])],1),a("v-uni-view",{staticClass:"specification"},t._l(t.stynumber,(function(e,i){return a("v-uni-view",{staticClass:"child"},[t._v(t._s(e.name)+"："+t._s(e.num))])})),1),a("v-uni-view",{staticClass:"eva-section",attrs:{id:"evaluate"}},[t.commentlist?a("v-uni-view",{staticClass:"section_title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goto_page("./evaluate?id="+t.shop_id)}}},[a("v-uni-view",{staticClass:"tit_l"},[a("v-uni-text",{staticClass:"pk"}),a("v-uni-text",{staticClass:"pj"},[t._v("宝贝评价")]),a("v-uni-text",{staticClass:"numbers"},[t._v("（"+t._s(t.commentlist.total)+"）")])],1),a("v-uni-view",{staticStyle:{color:"#999","font-size":"24upx"}},[t._v("查看更多"),a("u-icon",{attrs:{name:"arrow-right"}})],1)],1):t._e(),a("v-uni-view",{staticClass:"eva-box"},t._l(t.commentlist.data,(function(e,i){return a("v-uni-view",{staticClass:"eval_con"},[a("v-uni-view",{staticClass:"order_head"},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:e.avatar,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"shop_name"},[t._v(t._s(e.nickname))])],1),a("v-uni-view",{staticClass:"shop_name_f"}),a("v-uni-view",{staticClass:"order_time"},[t._v(t._s(e.create_time))])],1),a("v-uni-view",{staticClass:"order_con"},[t._v(t._s(e.remark))]),a("v-uni-view",{staticClass:"order_img"},t._l(e.img,(function(t){return a("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})})),1)],1)})),1)],1),a("v-uni-view",{staticClass:"detail-desc",attrs:{id:"details_parse"}},[a("v-uni-view",{staticClass:"d-header"},[a("v-uni-text",[t._v("宝贝详情")])],1),a("u-parse",{attrs:{html:t.shop_det.content}})],1),a("v-uni-view",{attrs:{id:"tuijina"}},[a("v-uni-image",{staticStyle:{width:"100%",height:"80rpx","margin-top":"20rpx"},attrs:{src:i("16d3"),mode:""}}),a("v-uni-view",{staticStyle:{"margin-bottom":"120rpx"}},[a("v-uni-view",{staticClass:"cont"},t._l(t.shop_list,(function(e,n){return a("v-uni-view",{key:n,staticClass:"cont_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go_shopdetail(e.id)}}},[1==e.is_recommend?a("v-uni-image",{staticClass:"imagea",attrs:{src:i("8c2b"),mode:"aspectFill"}}):t._e(),a("v-uni-image",{staticClass:"images",attrs:{src:e.image,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"it_tit"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"it_selt"},[a("v-uni-view",{staticClass:"it_price"},[t._v("￥"+t._s(e.price))]),a("v-uni-view",{staticClass:"it_selt_r"},[t._v("已售"+t._s(e.sale)+"件")])],1)],1)})),1)],1)],1),a("v-uni-view",{staticClass:"add_bottom"},[a("v-uni-button",{staticClass:"add_car",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payment_yes(0)}}},[t._v("加入购物车")]),a("v-uni-button",{staticClass:"buy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.payment_yes(1)}}},[t._v("立即购买")])],1),a("u-popup",{attrs:{mode:"bottom"},model:{value:t.skuShow,callback:function(e){t.skuShow=e},expression:"skuShow"}},[a("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"attr-content",staticStyle:{height:"900rpx",position:"relative"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[t._l(t.shopsku.title,(function(e,i){return a("v-uni-view",{staticClass:"attr-list"},[a("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.title.title))]),a("v-uni-view",{staticClass:"item-list"},t._l(e.data,(function(n,o){return n.pid===e.id&&3!=n.pid?a("v-uni-text",{key:o,staticClass:"tit",class:{selected:n.selected},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectSpec(i,o,n.pid)}}},[t._v(t._s(n.title))]):t._e()})),1)],1)})),t._l(t.details,(function(e,i){return a("v-uni-view",{key:i,staticClass:"jg_sty",class:{jactive:t.jg_ind==e.id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.zhifu(e)}}},[a("v-uni-view",{staticClass:"jg_sty_t"},[a("v-uni-view",[t._v("条码："+t._s(e.bar_code))]),a("v-uni-view",[t._v("克重："+t._s((e.weight/1).toFixed(2))+"g")])],1),a("v-uni-view",{staticClass:"jg_sty_b"},[a("v-uni-view",[t._v("工费：￥"+t._s((e.labor/1/(e.weight/1)).toFixed(2))),a("v-uni-text",[t._v("/g")])],1),a("v-uni-view",{},[t._v("库存："+t._s(e.stock))]),t.vip_type?a("v-uni-view",{staticClass:"jg_r"},[t._v("￥"),a("v-uni-text",[t._v(t._s(e.price_vip))])],1):a("v-uni-view",{staticClass:"jg_r"},[t._v("￥"),a("v-uni-text",[t._v(t._s(e.price_normal))])],1)],1),a("v-uni-view",{staticStyle:{"line-height":"40rpx"}},[t._v("备注："+t._s(e.remark||"无"))])],1)})),a("v-uni-view",{staticStyle:{height:"180rpx"}}),a("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",right:"0",padding:"0 20rpx","background-color":"#FFFFFF"}},[a("v-uni-view",{staticStyle:{margin:"20rpx 0",display:"flex","align-items":"center","justify-content":"space-between"}},[a("v-uni-view",{staticStyle:{"font-weight":"bold"}},[t._v("数量")]),a("u-number-box",{attrs:{max:t.stocks,min:1,step:1,"long-press":!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.valChange.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),1==t.shop_type?a("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shop_pay(1)}}},[t._v("立即购买")]):a("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shop_pay(2)}}},[t._v("加入购物车")])],1)],2)],1)],1),t.return_top?a("v-uni-view",{staticClass:"teturn_top",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.head_nav_cli(0)}}},[a("u-icon",{attrs:{name:"arrow-upward"}})],1):t._e(),t.videoShow?a("v-uni-view",{staticClass:"video-popup",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zanting.apply(void 0,arguments)},touchmove:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"video"},[a("v-uni-video",{attrs:{id:"myVideo",src:t.shop_det.video,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!0,controls:!0,objectFit:"cover"},on:{pause:function(e){arguments[0]=e=t.$handleEvent(e),t.ZhanTing.apply(void 0,arguments)},ended:function(e){arguments[0]=e=t.$handleEvent(e),t.ZhanTing.apply(void 0,arguments)}}})],1)],1):t._e()],1)},o=[]},f754:function(t,e,i){var a=i("12d6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ad66198c",a,!0,{sourceMap:!1,shadowMode:!1})},fe54:function(t,e,i){"use strict";i.r(e);var a=i("04a6"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a}}]);