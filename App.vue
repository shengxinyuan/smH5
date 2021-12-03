<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// if('caches' in window){
			// 	console.log(1);
			// }
			// caches.open('token').then(function (cache){
			// 	console.log(cache);
			// 	cache.match('name').then(function(matchedResponse){
			// 		console.log(matchedResponse);
			// 	})
			// });
			// let token = uni.getStorageSync('token')
			// console.log(token);
			// uni.setStorageSync('member_id',378)
		},
		onShow: function() {
			// console.log('App Show')
			
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	uni-checkbox .uni-checkbox-input {
		border-radius: 50%;
	}

	/*每个页面公共css */
	@import "uview-ui/index.scss";

	@font-face {
		font-family: 'iconfont';
		/* project id 2039522 */
		src: url('//at.alicdn.com/t/font_2039522_7vyftouomsp.eot');
		src: url('//at.alicdn.com/t/font_2039522_7vyftouomsp.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.woff') format('woff'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.svg#iconfont') format('svg');
	}
</style>
