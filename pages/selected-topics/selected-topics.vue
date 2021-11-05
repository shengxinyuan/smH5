<template>
	<!-- 精选专题 -->
	<view class="zl-page">
		<view class="zl-box">
			<block v-for="(selectionItem,selectionIndex) in selectionList" :key="selectionIndex">
				<view class="selection-box" @click="skipSelectionDetails">
					<image :src="selectionItem.image" mode="aspectFill"></image>
					<view class="selection-title">
						<text>{{selectionItem.title}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectionList: []
			}
		},
		onLoad() {
			this.page_reader()
		},
		methods: {
			//页面渲染
			page_reader(){
				this.$api.get('subject').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.selectionList = res.data
					}
				})
			},
			skipSelectionDetails() {
				uni.navigateTo({
					url: 'selection-details'
				})
			}
		}
	}
</script>

<style lang="scss">
	.zl-box {
		padding: 20upx 30upx;
		border-top: solid 2upx #eeeeee;

		.selection-box {
			width: 100%;
			height: 350upx;
			margin-bottom: 30upx;
			display: flex;
			position: relative;

			image {
				width: 100%;height: 100%;
				border-radius: 10upx;
				background-color: #eee;
			}

			.selection-title {
				width: 100%;
				height: 62upx;
				padding: 0 20upx;
				background-image: linear-gradient(268deg,
					#094451 0%,
					#02343f 100%);
				border-radius: 0 0 10upx 10upx;
				display: flex;
				align-items: center;
				font-size: 26upx;
				color: #FFFFFF;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}
	}
</style>
