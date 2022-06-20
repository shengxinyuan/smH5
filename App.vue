<script>
	export default {
		onLaunch: function() {
		},
		onShow: function() {
			// wx.config({
			//   debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
			//   appId: '', // 必填，公众号的唯一标识
			//   timestamp: '', // 必填，生成签名的时间戳
			//   nonceStr: '', // 必填，生成签名的随机串
			//   signature: '',// 必填，签名
			//   jsApiList: [] // 必填，需要使用的 JS 接口列表
			// });
		},
		onHide: function() {
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
