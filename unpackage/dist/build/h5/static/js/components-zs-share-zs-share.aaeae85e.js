(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-zs-share-zs-share"],{"1fac":function(t,n,e){"use strict";e.r(n);var a=e("24ee"),o=e("510f");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("5b8f7");var r,s=e("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"7b232f05",null,!1,a["a"],r);n["default"]=c.exports},"24ee":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.show?e("v-uni-view",{staticClass:"mask",style:{backgroundColor:t.backgroundColor},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleMask.apply(void 0,arguments)},touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.stopPrevent.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"mask-content",style:[{height:t.config.height,transform:t.transform}],on:{click:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=t.$handleEvent(n),t.stopPrevent.apply(void 0,arguments)}}},[e("v-uni-scroll-view",{staticClass:"view-content",attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"share-header"},[t._v("分享到")]),e("v-uni-view",{staticClass:"share-list"},t._l(t.shareList,(function(n,a){return e("v-uni-view",{key:a,staticClass:"share-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shareToFriend(n.text)}}},[e("v-uni-image",{attrs:{src:n.icon,mode:""}}),e("v-uni-text",[t._v(t._s(n.text))])],1)})),1)],1),e("v-uni-view",{staticClass:"bottom b-t",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toggleMask.apply(void 0,arguments)}}},[t._v("取消")])],1)],1):t._e()},i=[]},"510f":function(t,n,e){"use strict";e.r(n);var a=e("ef54"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a},"555e":function(t,n,e){var a=e("6abf");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("64a525ff",a,!0,{sourceMap:!1,shadowMode:!1})},"5b8f7":function(t,n,e){"use strict";var a=e("555e"),o=e.n(a);o.a},"6abf":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mask[data-v-7b232f05]{position:fixed;left:0;top:0;right:0;bottom:0;display:flex;justify-content:center;align-items:flex-end;z-index:998;transition:.3s}.mask .bottom[data-v-7b232f05]{position:absolute;left:0;bottom:0;display:flex;justify-content:center;align-items:center;width:100%;height:%?90?%;background:#fff;z-index:9;font-size:%?30?%\n  /* color: $font-color-dark; */}.mask-content[data-v-7b232f05]{width:100%;height:%?580?%;transition:.3s;background:#fff}.mask-content.has-bottom[data-v-7b232f05]{padding-bottom:%?90?%}.mask-content .view-content[data-v-7b232f05]{height:100%}.share-header[data-v-7b232f05]{height:%?110?%;font-size:%?30?%;\n  /* color: font-color-dark; */display:flex;align-items:center;justify-content:center;padding-top:%?10?%}.share-header[data-v-7b232f05]:before, .share-header[data-v-7b232f05]:after{content:"";width:%?240?%;height:0;\n  /* border-top: 1px solid $border-color-base; */-webkit-transform:scaleY(.5);transform:scaleY(.5);margin-right:%?30?%}.share-header[data-v-7b232f05]:after{margin-left:%?30?%;margin-right:0}.share-list[data-v-7b232f05]{display:flex;flex-wrap:wrap}.share-item[data-v-7b232f05]{min-width:33.33%;display:flex;flex-direction:column;justify-content:center;align-items:center;height:%?180?%}.share-item uni-image[data-v-7b232f05]{width:%?80?%;height:%?80?%;margin-bottom:%?16?%}.share-item uni-text[data-v-7b232f05]{\n  /* font-size: $font-base; */\n  /* color: $font-color-base; */}',""]),t.exports=n},ef54:function(t,n,e){"use strict";e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{transform:"translateY(50vh)",timer:0,backgroundColor:"rgba(0,0,0,0)",show:!1,config:{},shareList:[{type:1,icon:"/static/index/share_wechat.png",text:"微信好友"},{type:2,icon:"/static/index/share_moment.png",text:"朋友圈"}]}},props:{contentHeight:{type:Number,default:0},hasTabbar:{type:Boolean,default:!1}},created:function(){var t=uni.upx2px(this.contentHeight)+"px";this.config={height:t,transform:"translateY(".concat(t,")"),backgroundColor:"rgba(0,0,0,.4)"},this.transform=this.config.transform},methods:{toggleMask:function(){var t=this;if(1!=this.timer){if(this.timer=1,setTimeout((function(){t.timer=0}),500),this.show)return this.transform=this.config.transform,this.backgroundColor="rgba(0,0,0,0)",void setTimeout((function(){t.show=!1,t.hasTabbar&&uni.showTabBar()}),200);this.show=!0,this.hasTabbar?uni.hideTabBar({success:function(){setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}}):setTimeout((function(){t.backgroundColor=t.config.backgroundColor,t.transform="translateY(0px)"}),10)}},stopPrevent:function(){},shareToFriend:function(t){this.$api.msg("分享给".concat(t)),this.toggleMask()}}};n.default=a}}]);