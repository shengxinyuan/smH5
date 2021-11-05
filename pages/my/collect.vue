<template>
	<view style="padding-bottom: 100rpx;">
		<uni-nav-bar  :right-text="isShow?'管理':'完成'" title="我的收藏" left-icon="back" @clickLeft="gotop" @clickRight="right" :textcolor="textcolor"/>
		<view class="cont" v-if="shop_list.length !=0">
			<view class="cont_item" v-for="(it,ind) in shop_list" :key="ind" @longpress="long">
				<view class="checkbox" v-if="page_del">
					<label class="radio" @click="checkbox(it.id,ind)">
						 <checkbox  :checked="it.state" />
					</label>
				</view>
				<image class="images" src="../../static/shopping.png" mode="aspectFill" @click="go_shopdetail(it.id)"></image>
				<view class="it_tit">
					{{it.title}}
				</view>
				<view class="it_price">
					<view>
						￥{{it.price}}
					</view>
					<u-icon name="heart-fill" size="44"></u-icon>
				</view>
			</view>
		</view>
		<view v-else style="padding-top: 200rpx;">
			<u-empty text="暂无收藏内容" mode="favor"></u-empty>
		</view>
		<view class="footer" v-if="page_del">
			<view @click="qx_check">
				<checkbox :checked="qx_cli" />全选
			</view>
			<view class="" @click="del_cellect">
				<u-icon name="trash" size="40"></u-icon>
				删除
			</view>
		</view>
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				isShow:true,
				textcolor:'',
				xuanxind:'',
				page_del:false,//复选显示
				type_check:false,//选中状态
				qx_cli:false,
				shop_list:'',
				pay_type:[],
				pay_type_zj:"",
			}
		},
		onLoad() {
			this.page_render()
		},
		methods:{
			//详情
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			page_render(){
				this.$api.get('collect').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data
						
						res.data.forEach(i=>{
							i.state = false
						})
						console.log(this.shop_list)
					}
				})
			},
			//返回上一页
			gotop(){
				uni.navigateBack()
			},
			//长按
			long(){
				this.right()
			},
			//管理
			right(){
				this.isShow = !this.isShow
				console.log(this.isShow)
				if(this.isShow == false){
					this.textcolor = "#2b3f7d"
					this.page_del = true
				}else{
					this.textcolor = ""
					this.page_del = false
				}
			},
			//选择
			checkbox(e,ind){
				// console.log(e,ind)s
				if(this.shop_list[ind].state == true){
					this.shop_list[ind].state = false
				}else{
					this.shop_list[ind].state = true
				}
				this.shop_list.every(i=>{
					if(i.state == false){
						this.qx_cli = false
					}else{
						this.qx_cli = true
					}
					return this.qx_cli
				})
			},
			//全选
			qx_check(){
				this.qx_cli = !this.qx_cli
				let arr = this.shop_list
				if(this.qx_cli == true){
					arr.forEach(i=>{
						i.state = true
					})
				}else{
					arr.forEach(i=>{
						i.state = false
					})
				}
			},
			//删选
			del_cellect(){
				this.xuanxind = ''
				let arr = ''
				
				this.shop_list.forEach(e=>{
					if(e.state == true){
						
						this.xuanxind +=e.id+',' //选中添加到数组里
						
						arr = this.xuanxind.substr(0,this.xuanxind.length -1)
						console.log(arr)
					}
				})
				let that = this
				uni.showModal({
					content:"您确定要删除选中收藏吗？",
					success(a) {
						if(a.confirm){
							that.$api.del('collect',{ids:arr}).then(res=>{
								console.log()
								if(res.status == 1){
									that.page_render()
									that.com.msg('删除成功')
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	
	.footer{
		position: fixed;left: 0;bottom: 0;z-index: 20;
		width: 100%;height: 90rpx;background-color: #fff;padding: 0 4%;
		display: flex;justify-content: space-between;line-height:90rpx;
		
	}
	.cont{
		width: 100%;padding: 0 3%;
		display: flex;flex-wrap: wrap;
		.cont_item{
			width: 49%;margin-right: 2%;
			border-radius: 16rpx;background-color: white;
			margin-top: 20rpx;overflow: hidden; padding: 2%;
			position: relative;
			.checkbox{
				position: absolute;top: 24rpx;right: 4rpx;z-index: 20;
			}
			.images{
				width: 100%;
				height: 280rpx;
			}
			.it_tit{
				font-size: 30rpx;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 60rpx;
			}
			.it_price{
				font-weight: bold;font-size: 30rpx;line-height: 60rpx;display: flex;justify-content: space-between;color: #df3636;
			}
		}
		.cont_item:nth-child(2n+2){
			margin-right: 0;
		}
	}
</style>
