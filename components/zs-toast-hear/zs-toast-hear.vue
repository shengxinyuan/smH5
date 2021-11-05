<template>
	<view>
		<view class="toast">
			<view class="toast_it">
				<view class="toast_it_title">服务协议和隐私政策</view>
				<view class="toast_it_cont"> 
					请你务必审慎阅读，充分理解"服务协议"和"隐私政策"各条款，包括但不限于：为了向你提供即时通讯、内容分享等服务，我们需要搜集你的设备信息、操作日志等个人信息。你可以在"设置"中查看、变更、删除个人信息并管理你的授权。你可阅读 
					<text style="color: #2B85E4;" @click="fuw(1)">《服务协议》</text> 和 <text style="color: #2B85E4;" @click="fuw(2)">《隐私政策》</text>了解详细信息。如你同意、请点击"同意"开始接受我们的服务。
				</view>
				<view class="toast_but">
					<view @click="no_app">
						暂不使用
					</view>
					<view style="color: #2B85E4;" @click="yes_xy">
						同意
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//暂不使用
			no_app(){
				//退出app
				// #ifdef APP-PLUS
				if (plus.os.name.toLowerCase() === 'android') {
					plus.runtime.quit();
				}
				else{ 
					const threadClass = plus.ios.importClass("NSThread");
					const mainThread = plus.ios.invoke(threadClass, "mainThread");
					plus.ios.invoke(mainThread, "exit");
				}
				// #endif
			},
			//同意
			yes_xy(){
				this.$emit("yesag")
			},
			//协议
			fuw(e){
				this.$emit("agreement",e)
			}
		}
	}
</script>

<style lang="scss" scoped>
.toast{
	position: fixed;left: 0;top: 0;
	width: 100%;height: 100vh;background-color: rgba(0,0,0,0.36);
	.toast_it{
		width: 80%;height: 660rpx;background-color: white;margin-left: 10%;margin-top: 40%;border-radius: 20rpx;
		padding-top: 40rpx;
		.toast_it_title{
			width: 100%;text-align: center;font-size: 40rpx;
		}
		.toast_it_cont{
			width: 100%;padding: 24rpx 50rpx;
			line-height: 40rpx;font-size: 30rpx;
		}
		.toast_but{
			width: 100%;display: flex;justify-content: space-between;font-size: 38rpx;line-height: 88rpx;border-top: 1rpx solid #f1f1f1;margin-top: 20rpx;
			view{
				width: 50%;text-align: center;
			}
		}
	}
}
</style>
