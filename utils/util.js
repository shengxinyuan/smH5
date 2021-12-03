let util = {}

// util.logout = function () {
// 	this.remove('')
// }

/* 显示加载框 */
util.showLoading = function (title,type) {
	// #ifdef APP-PLUS
	var w = plus.nativeUI.showWaiting(title || "", {
		width:'80px',
		height:'80px',
		loading:{
			type: type || 'snow',
			height:'40px'
		},
		background:'rgba(0,0,0,0.9)'
	});
	// #endif
	// #ifndef APP-PLUS
	uni.showLoading({
		title:title || '',
	});
	// #endif
}
/* 隐藏加载框 */
util.hideLoading = function() {
	// #ifdef APP-PLUS
	plus.nativeUI.closeWaiting();
	// #endif
	// #ifndef APP-PLUS
	uni.hideLoading();
	// #endif
}
/* 提示消息 */
util.showToast = function(msg) {
	uni.showToast({
		title:msg,
		mask:false,
		duration:2000,
		icon:'none'
	});
}

// util.appMutual = (name,query = null,errCallback) =>{
// 	if(/android/i.test(navigator.userAgent)){
// 		if(window.shangChengView) {
// 			if(typeof (query) == 'object'){
// 				query = JSON.stringify(query);
// 			}
// 			window.shangChengView[name](query);
// 		}else{
// 			errCallback && errCallback()
// 		}
// 	}else if(/ios|iphone|ipod|pad/i.test(navigator.userAgent)){
// 		if(window.webkit){
// 			window.webkit.messageHandlers[name].postMessage(query)
// 		} else {
// 			errCallback && errCallback();
// 		}
// 	}
// }

export default util;