<template>
	<view style="padding: 3%;">
		<view class="list" v-if="list != ''">
			<view class="list_item" v-for="(it,ind) in list" :key="ind">
				<image src="" mode=""></image>
				<view class="list_item_name">
					{{it.usename}}
				</view>
				<text class="list_item_vip" v-if="!vip">
					超级会员
				</text>
			</view>
		</view>
		<view v-else style="padding-top: 200rpx;">
			<u-empty text="暂无搜索结果" mode="search"></u-empty>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:'',
				names:''
			};
		},
		computed:{
			//会员到期时间
			vip(){
				let arr = ''
				let date = new Date().getTime()
				this.list.forEach(i=>{
					arr = i.vip_time *1000
					if(date < arr){
						return true
					}else{
						return false
					}
				})
			}
		},
		onLoad(op) {
			let arr =''
			console.log(JSON.parse(op.list))
			this.list= JSON.parse(op.list)
			this.list.forEach(i=>{
				this.names = i.nickname
				if(this.names.length >= 2 && this.names.length < 4){
					arr = this.names.replace(/^./g, '*');
				}else if(this.names.length >= 4 && this.names.length < 11){
					arr = this.names.replace(/^../g, '**');
				}else if(this.names.length >= 11){
					arr = this.names.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
				}
				i.usename = arr
			})
		},
		methods:{
			
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
.list{
	width: 100%;background-color: #FFFFFF;padding: 20rpx;border-radius: 16rpx;
	.list_item{
		width: 100%;display: flex;
		image{
			width: 86rpx;height: 86rpx;border-radius: 50%;margin-right: 20rpx;
		}
		.list_item_name{
			line-height: 86rpx;font-size: 34rpx;
		}
		.list_item_vip{
			padding: 2;padding: 0 24rpx;height: 40rpx;margin-top: 25rpx;color: #fff;
			background-color: #ffd775;border-radius: 10rpx;margin-left: 20rpx;
		}
	}
	}
</style>
