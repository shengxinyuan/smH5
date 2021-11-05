<template>
	<view>
		<view class="go_buts"  @click="but_cli">
			{{buttitle}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			buttitle:{
				default:"保存"
			}
		},
		methods:{
			but_cli(){
				this.$emit('but_cli',1)
			}
		}
	}
</script>

<style lang="scss" scoped>
.go_buts{
		width: 90%;background-color: #283b77;color: #FFFFFF;padding: 20rpx;text-align: center;margin-left: 5%;border-radius: 50rpx;margin-top: 60rpx;
		font-size: 32rpx;
	}
</style>
