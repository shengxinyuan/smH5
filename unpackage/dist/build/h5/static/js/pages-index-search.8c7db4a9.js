(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-search"],{"05c9":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-08fc1cc5]{position:fixed;left:0;top:0;height:%?120?%;width:100%;padding:%?20?% 0;background-color:#fff;z-index:999}.header .input-view[data-v-08fc1cc5]{display:flex;flex-direction:row;height:%?60?%;border-radius:15px;padding:0 15px;flex-wrap:nowrap;margin:7px %?30?%;line-height:%?60?%}.history-cont[data-v-08fc1cc5]{margin-top:70px}.imgs[data-v-08fc1cc5]{width:100%;height:%?100?%;margin-top:%?40?%}.imgs uni-image[data-v-08fc1cc5]{width:100%;height:100%}.box[data-v-08fc1cc5]{width:100%}.zl-history-box[data-v-08fc1cc5]{width:100%;display:flex;padding:%?10?% %?30?%;justify-content:space-between}.zl-history[data-v-08fc1cc5]{height:%?60?%;font-size:%?30?%;font-weight:700;line-height:%?60?%}.zl-search-history[data-v-08fc1cc5]{display:flex;align-items:center;flex-wrap:wrap;padding:0 %?30?%}.zl-search-history uni-text[data-v-08fc1cc5]{background-color:#fff;padding:0 %?20?%;margin-right:%?20?%;margin-bottom:%?20?%;text-align:center;border-radius:%?40?%;max-width:%?200?%;height:%?50?%;line-height:%?50?%;display:inline-block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.goods-list[data-v-08fc1cc5]{width:100%;background-color:#fff}.goods-list .cont_item[data-v-08fc1cc5]{margin:0 %?32?%;background-color:#fff;overflow:hidden;display:flex;align-items:center;border-bottom:1px solid #eee;color:#606266}.goods-list .cont_item .img-box[data-v-08fc1cc5]{margin:%?20?% 0;margin-right:%?32?%;width:%?100?%;height:%?100?%}.goods-list .cont_item .img-box .images[data-v-08fc1cc5]{display:block;width:%?100?%;height:%?100?%;border-radius:%?10?%;display:block}.goods-list .cont_item .base-cont[data-v-08fc1cc5]{flex:1;overflow:hidden;font-size:%?24?%}.goods-list .cont_item .base-cont .title[data-v-08fc1cc5]{font-size:%?28?%;margin-bottom:%?10?%;color:#414141}.goods-list .cont_item .index-cont[data-v-08fc1cc5]{display:flex;font-size:%?24?%;text-align:right;font-size:%?30?%}.goods-list .cont_item .index-cont .item-sale[data-v-08fc1cc5]{width:%?400?%;text-align:left;font-size:%?24?%}.goods-list .cont_item .index-cont .price[data-v-08fc1cc5]{flex:1;text-align:right;color:#ea5b72}',""]),t.exports=e},"1ee2":function(t,e,i){"use strict";var a=i("9b6c"),n=i.n(a);n.a},2177:function(t,e,i){"use strict";var a=i("67b6"),n=i.n(a);n.a},3684:function(t,e,i){var a=i("b133");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("9c463790",a,!0,{sourceMap:!1,shadowMode:!1})},"4c8e":function(t,e,i){"use strict";i.r(e);var a=i("50af"),n=i("e25c");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("2177"),i("1ee2");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"08fc1cc5",null,!1,a["a"],s);e["default"]=r.exports},"4e13":function(t,e,i){"use strict";var a=i("3684"),n=i.n(a);n.a},"50af":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uSearch:i("900c").default,uIcon:i("8be7").default,uLoadmore:i("9180").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"input-view"},[i("u-search",{attrs:{placeholder:"搜索商品","show-action":!1},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.go_search.apply(void 0,arguments)},clear:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.get_data.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1),i("v-uni-view",{staticClass:"history-cont"},[[i("v-uni-view",{staticStyle:{width:"100%"}},[i("v-uni-view",{staticClass:"zl-history-box"},[i("v-uni-view",{staticClass:"zl-history"},[i("v-uni-text",[t._v("历史搜索")])],1),t.history.length>0?i("u-icon",{attrs:{name:"trash",size:"40"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deles.apply(void 0,arguments)}}}):t._e()],1),i("v-uni-view",{staticClass:"zl-search-history"},t._l(t.history,(function(e,a){return i("v-uni-text",{key:a,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.again(e)}}},[t._v(t._s(e))])})),1)],1)]],2),i("v-uni-view",[[i("v-uni-view",{staticStyle:{width:"100%"}},[i("v-uni-view",{staticClass:"zl-history-box"},[i("v-uni-view",{staticClass:"zl-history"},[i("v-uni-text",[t._v("搜索结果")])],1)],1),t.shop_list.length>0?i("v-uni-scroll-view",{staticClass:"goods-list",attrs:{"scroll-y":"true"}},[t._l(t.shop_list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"cont_item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.go_shopdetail(e)}}},[i("v-uni-view",{staticClass:"img-box"},[i("v-uni-image",{staticClass:"images",attrs:{src:e.image,mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"base-cont"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"index-cont"},[i("v-uni-view",{staticClass:"item-sale"},[t._v("已售"+t._s(e.sale)+"件 库存"+t._s(e.stock)+"件")]),i("v-uni-view",{staticClass:"price"},[i("v-uni-text",[i("v-uni-text",{},[t._v("￥")]),t._v(t._s(e.price))],1)],1)],1)],1)],1)})),i("u-loadmore",{attrs:{status:t.moreStatus,"margin-bottom":"120","margin-top":"20"}})],2):t._e()],1)]],2)],1)},o=[]},"67b6":function(t,e,i){var a=i("e6a6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7ff4b83c",a,!0,{sourceMap:!1,shadowMode:!1})},"6a09":function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2909")),o={data:function(){return{keyword:"",history:[],shop_list:[],key:"",member_id:"",queryParams:{page:1,limit:20,last_page:1},moreStatus:"loadmore"}},onReachBottom:function(){this.queryParams.last_page!==this.queryParams.page&&(this.queryParams.page+=1,this.get_data())},onLoad:function(t){this.member_id=uni.getStorageSync("member_id")},methods:{go_shopdetail:function(t){uni.navigateTo({url:"../../pages/index/shop_detail?shop_id="+t.id})},go_search:function(t){this.shop_list=[],this.queryParams.page=1,""===t?uni.showToast({icon:"none",title:"搜索内容不能为空"}):(-1==this.history.indexOf(t)&&this.history.unshift(t),this.history.length>8&&this.history.pop(),this.get_data())},clear:function(){this.shop_list=[],this.queryParams.page=1},deles:function(){var t=this;uni.showModal({title:"提示",content:"确定要删除历史搜索吗",success:function(e){e.confirm&&(t.history=[],uni.removeStorage({key:"neirong",success:function(t){uni.showToast({title:"清空成功"})}}))}})},again:function(t){this.keyword=t,this.queryParams.page=1,this.get_data()},get_data:function(t){var e=this;""!==this.keyword&&(uni.showLoading(),this.$api.post("goods",{key:this.keyword,page:this.queryParams.page}).then((function(t){1===t.status&&(t.data.data&&(e.shop_list=1===e.queryParams.page?t.data.data:[].concat((0,n.default)(e.shop_list),(0,n.default)(t.data.data)),e.queryParams.last_page=t.data.last_page,e.moreStatus=t.data.last_page===t.data.current_page?"nomore":"loadmore"),uni.hideLoading())})))}}};e.default=o},"900c":function(t,e,i){"use strict";i.r(e);var a=i("f039"),n=i("9d6f");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("4e13");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"05573061",null,!1,a["a"],s);e["default"]=r.exports},"9b6c":function(t,e,i){var a=i("05c9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("cf5f76d4",a,!0,{sourceMap:!1,shadowMode:!1})},"9d6f":function(t,e,i){"use strict";i.r(e);var a=i("e3c1"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},b133:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.u-search[data-v-05573061]{display:flex;flex-direction:row;align-items:center;flex:1}.u-content[data-v-05573061]{display:flex;flex-direction:row;align-items:center;padding:0 %?18?%;flex:1}.u-clear-icon[data-v-05573061]{display:flex;flex-direction:row;align-items:center}.u-input[data-v-05573061]{flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-05573061]{width:%?40?%;height:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-05573061]{color:#909399}.u-action[data-v-05573061]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-05573061]{width:%?80?%;margin-left:%?10?%}',""]),t.exports=e},e25c:function(t,e,i){"use strict";i.r(e);var a=i("6a09"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},e3c1:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};e.default=a},e6a6:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-08fc1cc5]{background-color:#f6f6f6}body.?%PAGE?%[data-v-08fc1cc5]{background-color:#f6f6f6}",""]),t.exports=e},f039:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("8be7").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-search",style:{margin:t.margin},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100rpx":"10rpx",border:t.borderStyle,height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-placeholder-class",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):t._e()],1),i("v-uni-view",{staticClass:"u-action",class:[t.showActionBtn||t.show?"u-action-active":""],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},o=[]}}]);