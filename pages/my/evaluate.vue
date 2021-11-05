<template>
	<view>
		<view class="shop_top">
			<image :src="datas.goods.image" mode="aspectFill"></image>
			<view class="shop_name">
				<view class="shop_name_top">
					{{datas.goods.title}}
				</view>
				<view class="shop_name_but">
					<text style="margin-right: 30rpx;">金重：{{datas.goods.weight}}</text>
					<text>款号：{{datas.goods.model_no}}</text>
				</view>
			</view>
		</view>
		<view class="cont">
			<textarea placeholder="请输入评价" v-model="textvalue" />
			<view class="">
				请上传照片
			</view>
			<u-upload :action="action" ref="uUpload" max-count="3" :header="token"></u-upload>
		</view>
		<view style="margin-top: 200rpx;">
			<zs-button buttitle="提交评价" @but_cli="but_cli"></zs-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas:'',
				list:[],
				textvalue:'',
				action: 'http://zuanshi.dis.wanheweb.com/api/uploads',
				token:{
					token:uni.getStorageSync('token')
				},
				lists:[]
			}
		},
		onLoad(op) {
			console.log(JSON.parse(op.list))
			this.datas = JSON.parse(op.list)
		},
		methods: {
			but_cli(){
				this.lists = this.$refs.uUpload.lists;
				//图片处理
				let arr = ''
				let img = ''
				this.lists.forEach(a=>{
					console.log(a)
					if(a.response){
						arr += a.response.data+','
						img = arr.substr(0,arr.length -1)
					}
				})
				let data = {
					order_goods_id:this.datas.id,
					shop_goods_id:this.datas.shop_goods_id,
					remark:this.textvalue,
					img:img
				}
				this.$api.post('commentlist',data).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.navto(res.message)
						this.com.redto('./order?state='+ 40 +'&index='+ 4)
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
.shop_top{
	margin: 26rpx 0;background-color: white;padding: 10rpx 20rpx;
	display: flex;
	image{
		width: 200rpx;height: 200rpx;margin-right: 20rpx;
	}
	.shop_name{
		width: 60%;
		.shop_name_top{
			font-size: 32rpx;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			line-height: 60rpx;
		}
		.shop_name_but{
			color:#999;font-size: 28rpx;display: flex;flex-wrap: wrap;
		}
	}
	
}
.cont{
	padding: 20rpx 30rpx;background-color: #FFFFFF;font-size: 28rpx;
	textarea{
		width: 100%;height: 240rpx;
	}
}
</style>
