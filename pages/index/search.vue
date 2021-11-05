<template>
	<view class="box">
		<!-- 搜索框 -->
		<uni-nav-bar background-color="#fff" style="align-items: center;">
			<view slot="left" @click="back"><u-icon name="arrow-left" size="48"></u-icon></view>
			<view class="zl-box">
			    <input type="text" value="" placeholder="名称搜索" v-model="search_s" @confirm="go_search(search_s)"/>
			</view>
			<view slot="right" class="zl-search-btn" @click="go_search(search_s)">搜索</view>
		</uni-nav-bar>
		
			<!-- 历史搜索 -->
			<view v-if="shop_tuij == ''">
				<view v-if="history.length !=0" style="width: 100%;">
					<view class="zl-history-box">
						<view class="zl-history">
							<text>历史搜索</text>
						</view>
						<u-icon name="trash" @click="deles" size="44"></u-icon>
					</view>
						<!-- 内容 -->
					<view class="zl-search-history">
						<text v-for="(item,index) in history" :key="index" @click="again(item)">{{item}}</text>
					</view>
				</view>
				
				<!-- 热门搜索 -->
				<!-- <view>
					<view class="zl-search-hot">
						<view class="zl-hot-title">
							<text>热门搜索</text>
						</view>
					</view>
					<view class="zl-hot-text">
						<text v-for="(item,index) in search_hot" @click="again(item)" :key="index">{{item}}</text>
						
					</view>
				</view> -->
			</view>
			<zs-shopping-list :shop_list="shop_tuij"></zs-shopping-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// search_hot:["大型犬狗粮","幼犬狗粮","狗粮","大型犬狗粮","大型犬狗粮"],
				search_s:"",//搜索关键字
				history:[],//搜索历史
				shop_tuij:'',
				shop_list:[],
				list:'',
				nav_ind:0
			}
		},
		onLoad() {
			if( uni.getStorageSync('neirong')){
				let aq = uni.getStorageSync('neirong')
				this.history =JSON.parse(aq)
			}
			// //推荐商品
			// this.$api.get('hotgoods').then(res=>{
			// 	console.log(res)
			// 	if(res.status == 1){
			// 		this.shop_tuij = res.data
			// 	}
			// })
		},
		methods: {
			
			back(){
				uni.navigateBack()
			},
			go_search(key){
				console.log(key)
				if(this.search_s== ""){
					this.com.msg('搜索内容不能为空')
					
				}else{
					this.$api.post('goods',{key:key}).then(res=>{
						console.log(res)
						if(res.status == 1){
							this.shop_tuij = res.data.data
							if(res.data.data.length == 0){
								this.com.msg('暂无该类商品')
							}
						}
					})
					if(this.history.indexOf(this.search_s) == -1){
						this.history.unshift(this.search_s)  //unshift:跟push性质一样 区别就是将新添加的数据放在第一位
					}
					if(this.history.length > 8){
						this.history.pop()
					}
					uni.setStorage({
						key: 'neirong',
						data: JSON.stringify(this.history)//转换为字符串形式
					})
				}
			},
			// 删除搜索历史
			deles(){
				let that = this
				uni.showModal({
				    title: '提示',
				    content: '确定要删除历史搜索吗',
				    success: function (res) {
				        if (res.confirm) {
							
							that.history =[]
							uni.removeStorage({
								key: 'neirong',
								success: function(res) {
									uni.showToast({
										title:'清空成功'
									})
								}
							});
				        }
				    }
				});
				
			},
			// 点击搜索历史再次搜索
			again(item){
				this.search_s = item
				this.go_search(item)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.imgs{
		width: 100%;height: 100rpx;margin-top: 40rpx;
		image{
			width: 100%;height: 100%;
		}
	}
	.box{
		width: 100%;

	}
	
	.zl-box{
		width: 90%;
		display: flex;
		border:2rpx solid #df0000;
		border-radius: 50rpx;
		
		input{
			border-radius: 50rpx;
			height: 60rpx;
			padding-left: 30rpx;
		}
	}
	.zl-search{
		padding-left: 30upx;
		border-style: solid;
		border-color: #df0000;
		border-radius: 50upx;
		border-width: 4upx;
		margin: 15upx 0 0 0;
		height: 60upx;
	}
	
	.zl-search-btn{
		border-radius: 40rpx;
		background-color: #cf0000;
		color: #ffffff;
		padding: 0 20rpx;
		height: 60rpx;
		line-height: 60rpx;
		font-size: 28rpx;
		display: flex;
		width: 100%;
	}
	
	.zl-history-box{
		width: 100%;
		display: flex;
		padding: 20upx 30upx;
		justify-content: space-between;
	}
	
	.zl-history{
		height: 60upx;
		font-size: 32upx;
		font-weight: bold;
		line-height: 60upx;
	}
	
	.zl-delete{
		width: 40upx;
		height: 40upx;
	}
	
	.zl-search-history{
		display: flex; 
		flex-wrap: wrap;
		padding: 0 50rpx;
		text{
			background-color: #f3f3f3;
			margin: 15upx;
			padding: 0 25upx;
			text-align: center;
			border-radius: 40upx;
			max-width: 200rpx;
			height: 60rpx;line-height: 60rpx;
			display: inline-block;
			white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
		}
	}

	
	.zl-search-hot{
		display: flex;
		padding: 20upx 30upx;
	}
	
	.zl-hot-title{
		width: 80%;
		height: 60upx;
		font-size: 32upx;
		font-weight: bold;
		line-height: 60upx;
	}
	
	.zl-hot-text text{
		background-color: #f3f3f3;
		margin: 20upx 20upx;
		padding: 12upx 50upx;
		line-height: 40upx;
		border-radius: 40upx;
		display: inline-block;
	}
</style>
