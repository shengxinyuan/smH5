(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-aboutus"],{"0bb0":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{content:""}},onLoad:function(){var t=this;this.$api.get("site").then((function(e){console.log(e),1==e.status&&(t.content=e.message)}))}};e.default=n},"14bb":function(t,e,r){"use strict";var n=r("4ea4");r("99af"),r("caad"),r("c975"),r("acd8"),r("e25e"),r("ac1f"),r("2532"),r("466d"),r("5319"),r("841c"),r("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o=n(r("b85c")),a=uni.getSystemInfoSync(),s=a.windowWidth,c=(a.platform,r("47aa")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,r=this.length;e<r;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var r,n=e.split("://")[0],i=n.length;r=e[i];i++){if("/"==r&&"/"!=e[i-1]&&"/"!=e[i+1])break;n+=Math.random()>.5?r.toUpperCase():r}return n+=e.substr(i),this[t]=n}if(this[t]=e,e.includes("data:image")){var o=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!o)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),i&&(this.search=function(e){return i(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var r=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var i,a=this.rtf.getElementsByTagName("style"),l=0;i=a[l++];)i.innerHTML=i.innerHTML.replace(/body/g,"#rtf"+this._uid),i.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),r._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");r.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(r.domain.includes("://")?r.domain.split("://")[0]:"")+":"+e:t.src=r.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=r.domain+"/"+e))};this.imgList.length=0;for(var h,p=this.rtf.getElementsByTagName("img"),m=0,v=0;h=p[m];m++)parseInt(h.style.width||h.getAttribute("width"))>s&&(h.style.height="auto"),f(h),h.hasAttribute("ignore")||"A"==h.parentElement.nodeName||(h.i=v++,u.imgList.push(h.getAttribute("original-src")||h.src||h.getAttribute("data-src")),h.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),h.onerror=function(){c.errorImg&&(u.imgList[this.i]=this.src=c.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&h.src&&0!=h.i&&(h.setAttribute("data-src",h.src),h.removeAttribute("src"),this._observer.observe(h));var g,b=this.rtf.getElementsByTagName("a"),y=(0,o.default)(b);try{for(y.s();!(g=y.n()).done;){var _=g.value;_.onclick=function(t){t.stopPropagation();var e=!0,r=this.getAttribute("href");if(u.$emit("linkpress",{href:r,ignore:function(){return e=!1}}),e&&r)if("#"==r[0])u.useAnchor&&u.navigateTo({id:r.substr(1)});else{if(0==r.indexOf("http")||0==r.indexOf("//"))return!0;uni.navigateTo({url:r})}return!1}}}catch(N){y.e(N)}finally{y.f()}var x=this.rtf.getElementsByTagName("video");u.videoContexts=x;for(var w,T=0;w=x[T++];)f(w),w.style.maxWidth="100%",w.onerror=function(){u.$emit("error",{source:"video",target:this})},w.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var A,k,C=this.rtf.getElementsByTagName("audio"),B=(0,o.default)(C);try{for(B.s();!(A=B.n()).done;){var I=A.value;f(I),I.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(N){B.e(N)}finally{B.f()}if(this.autoscroll){var S,L=this.rtf.getElementsByTagName("table"),O=(0,o.default)(L);try{for(O.s();!(S=O.n()).done;){var E=S.value,M=document.createElement("div");M.style.overflow="scroll",E.parentNode.replaceChild(M,E),M.appendChild(E)}}catch(N){O.e(N)}finally{O.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){r.nodes=[1],r.$emit("load")})),setTimeout((function(){return r.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){r.rect=r.rtf.getBoundingClientRect(),r.rect.height==k&&(r.$emit("ready",r.rect),clearInterval(r._timer)),k=r.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var r=" ",n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(r,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(r,".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(r){if(!r[0])return t.fail&&t.fail("Label not found");var n=r[1].scrollTop+r[0].top-(r[2]?r[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var r="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in c.userAgentStyles)r+="".concat(n,"{").concat(c.userAgentStyles[n],"}");for(n in this.tagStyle)r+="".concat(n,"{").concat(this.tagStyle[n],"}");r+="</style>",t=r+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},2206:function(t,e,r){"use strict";r.r(e);var n=r("0bb0"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"27b2":function(t,e,r){"use strict";r.r(e);var n=r("14bb"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"2b07":function(t,e,r){var n=r("aa83");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("8c0b6340",n,!0,{sourceMap:!1,shadowMode:!1})},"2ed0":function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var n={uParse:r("f92d").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-view",{staticClass:"text"},[r("u-parse",{attrs:{html:t.content.about_us}})],1)],1)},o=[]},"47aa":function(t,e,r){r("ac1f"),r("1276");var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:i(" , ,\t,\r,\n,\f"),boolAttrs:i("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:i("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:i("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:i("a,colgroup,fieldset,legend"),selfClosingTags:i("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:i("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function i(t){for(var e=Object.create(null),r=t.split(","),n=r.length;n--;)e[r[n]]=!0;return e}t.exports=n},"8c88":function(t,e,r){var n=r("f499");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("5fafd455",n,!0,{sourceMap:!1,shadowMode:!1})},aa83:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-01dfbd2e{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-01dfbd2e{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},b85c:function(t,e,r){"use strict";r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var n=i(r("06c5"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=(0,n.default)(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==r["return"]||r["return"]()}finally{if(c)throw a}}}}},bb7e:function(t,e,r){"use strict";var n=r("2b07"),i=r.n(n);i.a},c84a:function(t,e,r){"use strict";var n=r("8c88"),i=r.n(n);i.a},e28d:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[t.nodes.length?t._e():t._t("default"),r("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[r("div",{attrs:{id:"rtf"+t.uid}})])],2)},o=[]},e9cb:function(t,e,r){"use strict";r.r(e);var n=r("2ed0"),i=r("2206");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("c84a");var a,s=r("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"1a35b3a2",null,!1,n["a"],a);e["default"]=c.exports},f499:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.text[data-v-1a35b3a2]{padding:0 3%}',""]),t.exports=e},f92d:function(t,e,r){"use strict";r.r(e);var n=r("e28d"),i=r("27b2");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("bb7e");var a,s=r("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"01dfbd2e",null,!1,n["a"],a);e["default"]=c.exports}}]);