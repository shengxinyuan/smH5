<template>
	<view class="container">
		<view class="header_bait" :style="{'background-color': bgcolor,'opacity':opacity}">
			<view class="toubu">
				<view class="header_left" @click="goto_top">
					<u-icon name="arrow-left" size="54"></u-icon>
				</view>
				<view class="center">
					<view class="center_it" :class="{active:head_ind == ind}" v-for="(it,ind) in headlist" :key="ind" @click="head_nav_cli(ind)"> 
						{{it.name}}
					</view>
				</view>
				<view class="head_share" @click="share">
					<u-icon name="zhuanfa" size="54"></u-icon>
				</view>
			</view>
		</view>
		<view class="header">
			<view class="header_left" @click="goto_top">
				<u-icon name="arrow-left" size="60"></u-icon>
			</view>
			<view class="header_left" @click="share">
				<u-icon name="zhuanfa" size="60"></u-icon>
			</view>
		</view>
		<!-- banner轮播 -->
		<view class="carousel">
			<swiper :circular="true" :autoplay="true" :duration="400" :interval="3000"  @change="swiperChange">
				<swiper-item class="swiper-item" v-for="(item,index) in shop_det.album" :key="index">
					<view class="image-wrapper" @click="banner_cli">
						<image :src="item" class="loaded" mode="aspectFill" />
					</view>
				</swiper-item>
			</swiper>
			<!-- <view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{imgList.length}}</text>
			</view> -->
		</view>
		<!-- 横条 -->
		<view class="trabecula" v-if="detail_type == 1">
			<text class="trabecula_l">超值拼团中</text> 
			<text style="margin-left: 20rpx;"> 已拼{{shop_det.sale}}件，剩余{{shop_det.stock}}件</text> 
		</view>
		<view class="trabecula" v-else>
			<text class="trabecula_l">限时秒杀中</text> 
			<text style="margin-left: 20rpx;"> 距结束 <u-count-down :timestamp="second" color="white" bg-color="#E8372F"></u-count-down></text>
		</view>
		<view class="shop_names" v-if="detail_type == 1">
			<text style="margin-right: 20rpx;">拼团价</text> {{shop_det.title}} 
		</view>
		<view class="shop_names" v-else>
			<text style="margin-right: 20rpx;">秒杀价</text>{{shop_det.title}}
		</view>
		<view class="introduce-section">
			<view class="price-box">
				<view class="price-box_l" >
					<text class="price-tip">¥</text>
					<text class="price">{{shop_det.price}}</text>	
					<text class="m-price">¥{{shop_det.price_make}}</text>
				</view>
			</view>
			<view class="price-box_r">
				剩余{{shop_det.stock}}件
			</view>
		</view>
		
		<!-- <view class="shopping_text">
			<view class="text-item" v-if="vip_type">
				<view class="">
					开通超级会员，预估额外省 <text style="color: #df3636;"> 886 </text>
				</view>
				<view class="text-item_r">
					立即开通 ＞
				</view>
			</view>
			<view class="shop_introduce"> 
				{{shop_det.remark}}
			</view>
			<view class="Rapid_delivery">
				<u-icon name="car-fill" style="margin-right: 10rpx;"></u-icon>急速出货  16:30前下单当日货品可发货，定制产品除外。
			</view>
		</view> -->
		<view class="group_sty" v-if="detail_type == 1">
			<view class="group_child" v-for="(it,ind) in pi_group" :key="ind" >
				<view class="child_l">
					<image v-for="its in it.member" :src="its.avatar" mode="aspectFill"></image>
				</view>
				<view class="child_r" @click="go_single(it.id)">
					仅剩 {{it.member_count - it.count}} 个名额 <text>去拼单</text>
				</view>
			</view>
		</view>
		<!-- 规格 -->
		<view class="specification">
			<view class="child" v-for="(it,ind) in stynumber">
				{{it.name}}：{{it.num}}
			</view>
		</view>
		<!-- 评价 -->
		<view class="eva-section" id="evaluate">
			<view class="section_title" @click="goto_page('./evaluate')">
				<view class="tit_l">
					<text></text>
					宝贝评价（100）
				</view>
				<view style="color: #999;">
					查看更多＞
				</view>
			</view> 
			<view class="eva-box">
				<view class="eval_con" v-for="it in 2">
					<view class="order_head">
						<view class="img">
							<image src="../../static/kefu.png" mode="aspectFill"></image>
							<view class="shop_name">你的名字</view>
						</view>
						<view class="shop_name_f">
							
						</view>
						<view class="order_time">2021-1-15</view>
					</view>
					<view class="order_con">
						打定金交付吉萨大
					</view>
					<view class="order_img">
						<image v-for="img in 3" src="../../static/index/section.png" mode="aspectFill" ></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="detail-desc" id="detail">
			<view class="d-header">
				<text>宝贝详情</text>
			</view>
			<u-parse :html="shop_det.content"></u-parse>
		</view>
		<!-- //推荐 -->
		<view id="tuijina">
			<image  style="width: 100%;height: 80rpx;margin-top: 20rpx;" src="../../static/my/tuijain_bgimg.png" mode=""></image>
			<view style="padding: 0 3%;margin-bottom: 120rpx;" >
				<zs-shopping-list :shop_list="shop_list"></zs-shopping-list> 
			</view>
		</view>
		
		<view class="add_bottom">
			<view class="add_con">
				<view class="three_icons" @click="like_collect">
					<u-icon class="s_icon" name="home" color="#ccc" size="38" ></u-icon> 
					<view>首页</view>
				</view>
				<view class="three_icons" @click="goto_page('../service/service')">
					<u-icon name="kefu-ermai" color="#ccc" size="38" class="s_icon"></u-icon>
					<view>客服</view>
				</view>
				<view class="three_icons" @click="goto_cart">
					<u-icon name="shopping-cart" color="#ccc" size="38" class="s_icon"></u-icon>
					<view>购物车</view>
				</view>
			
				<view class="anniu" v-if="detail_type == 1">
					<view class="add_car" @click="payment_yes(0)">
						<view>{{shop_det.price_make}}</view>
						单独购买
					</view>
					<view class="buy" @click="payment_yes(1)">
						<view>{{shop_det.price}}</view>
						拼团购买
					</view>
				</view>
				<view class="anniu" v-else>
					<view class="buy_s" @click="payment_yes(1)">
						立即抢购
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<!-- <view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view> -->
				<view v-for="(item,index) in shopsku.title" :key="index" class="attr-list">
						<text>{{item.title.title}}</text>
						<view class="item-list">
							<text v-for="(childItem, childIndex) in item.data" 
								v-if="childItem.pid === item.id && childItem.pid !=3"
								:key="childIndex" class="tit"
								:class="{selected: childItem.selected}"
								@click="selectSpec(index,childIndex, childItem.pid)"
							>
								{{childItem.title}}
							</text>
							
						</view>
					</view>
					<view v-for="(it, ind) in details" :key="ind" :class="{jactive:jg_ind == it.id}" class="jg_sty" @click="zhifu(it.id)">
						<view class="jg_sty_t">
							<view>
								条码：{{it.bar_code}}
							</view>
							<view>
								克重：{{(it.weight/1).toFixed(2)}}g
							</view>
						</view>
						<view class="jg_sty_b">
							<view>
								工费：￥{{((it.labor/1)/(it.weight/1)).toFixed(2)}}
								<text>/g</text>
							</view>
							<view class="">库存：{{it.stock}}</view>
							<view class="jg_r" v-if="!vip_type">
								￥<text>{{it.price_normal}}</text>
							</view>
							<view class="jg_r" v-else>
								￥<text>{{it.price_vip}}</text>
							</view>
						</view>
						<view style="line-height: 40rpx;">
							备注：{{it.remark || '无备注'}}
						</view>
					</view>
					<view style="margin: 20rpx 0;">
						数量
						<u-number-box v-model="value" :min="1" :max="it.stock" :step="1" :long-press="false" @change="valChange"></u-number-box>
					</view>
					<button class="btn" @click="shop_pay(1)">完成</button>
				</view>
		</view>
		<!-- 分享 -->
		<zs-share ref="share" :contentHeight="400"></zs-share>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				value:1,
				shop_num:1,
				vip_type:false,//会员状态
				shop_type:0,//按钮状态
				jg_ind:'',//
				bgcolor:'',//背景色
				opacity: 0,//透明度
				head_ind:0,//头部样式
				specClass: 'none',
				specSelected:[],
				swiperCurrent: 0,
				favorite: true,
				shareList: [],
				imgList: [
					{
						src: '../../static/index/bann1.png' 
					},
					{
						src: '../../static/vip-order/img_02.png'
					},
					{
						src: '../../static/index/bann2.png'
					}
				],
				headlist:[
					{name:'商品'},
					{name:'评价'},
					{name:'详情'},
					{name:'推荐'}
				],
				pingl:0,//评论
				tuij:0,//推荐
				detail_shop:0,//商品详情
				shop_id:0,
				shop_det:'',//商品信息
				stynumber:[],//款号等
				shop_list:'',//推荐
				member:'',//个人信息
				shopsku:'',
				detail_type:0,//活动类型  1团购 2秒杀
				sku_ids:'',//sku 的id拼接
				details:'',
				shop_id_goods:'',
				type_shop:0,
				second:0,//秒数
				cantuan:0,//参团id
				pi_group:'',//拼团列表
			};
		},
		onPageScroll(e) {
			this.opacity = e.scrollTop / 180 //头部渐入渐出
			if(e.scrollTop >= this.pingl && e.scrollTop<= this.detail_shop){
				this.head_ind = 1
			}else if(e.scrollTop > this.tuij){
				this.head_ind = 3
			}else if(e.scrollTop >= this.detail_shop &&e.scrollTop <= this.tuij){
				this.head_ind = 2
			}else if(e.scrollTop == 0){
				this.head_ind = 0 
			}
		},
		computed:{
			
		},
		mounted() {
			var query = uni.createSelectorQuery()
			//获取对应模块到顶部的距离
			//评论
			query.select('#evaluate').boundingClientRect((res) => {
				// console.log(res)
				this.pingl = res.top -100 
			}).exec()
			// 推荐
			query.select('#tuijina').boundingClientRect((res) => {
				// console.log(res)
				this.tuij = res.top -100
			}).exec()
			// 详情
			query.select('#detail').boundingClientRect((res) => {
				// console.log(res)
				this.detail_shop = res.top -100
			}).exec()
		},
		onShow() {
			this.page_render()
		},
		onLoad(options){
			//option的 type 1团购 2 秒杀
			this.shop_id = options.shop_id;
			this.detail_type = options.type
			if(options.second){
				this.second = options.second
			}
			this.member = uni.getStorageSync('member_info')
			console.log(this.member)
			let vip = uni.getStorageSync('viptype')
			console.log(vip)
			// 会员
			if(vip){
				this.vip_type = true
			}else{
				this.vip_type = false
			}
			this.page_render()
		},
		methods:{
			valChange(e) {
				// console.log('当前值为: ' + e.value)
				this.shop_num = e.value
			},
			page_render(){
				this.$api.get('activity/'+this.shop_id+'&type='+this.detail_type).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_det = res.data
						this.shoptype_id = res.data.id
						this.shop_id_goods = res.data.goods_id
						this.stynumber = [
							{
								name:'款号',
								num:res.data.model_no
							},
							{
								name:'销量',
								num:res.data.sale
							},
							{
								name:'库存',
								num:res.data.stock
							},
							{
								name:'成色',
								num:res.data.texture
							},
							{
								name:'克重',
								num:res.data.min_g+'-'+res.data.max_g
							}
						]
						this.sku()
					}
				})
				//推荐商品
				this.$api.post('goods',{is_recommend:1}).then(res=>{
					// console.log(res)
					if(res.status == 1){
						this.shop_list =res.data.data
					}
				})
				//评论
				this.$api.get('commentlist/'+this.shop_id).then(res=>{
					// console.log(res)
				})
				//拼团列表
				this.$api.get('group',{id:this.shop_id,member_id:this.member.id}).then(res=>{
					console.log(res)
					this.pi_group = res.data
				})
			},
			//商品sku
			sku(){
				this.$api.get('sku',{type:this.type_shop,id:this.shoptype_id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shopsku = res.data
						this.details = res.data.data
					}
				})
			},
			//购买/加购物车
			shop_pay(){ //e  1是购买 2 加购物车
				if(this.shop_type == 0){ //单独购买
					let data = {
						goods_id:this.shop_id_goods,
						sku_id:this.jg_ind,
						count:this.shop_num,
						type:0,
					}
					if(this.jg_ind ==''){
						this.com.msg('请选择规格')
						return
					}else{
						this.com.navto('../vip-confirm-order/vip-confirm-order?data='+JSON.stringify(data))
						this.toggleSpec()
					}
				}else{  //拼团 秒杀
						// detail_type 1团购 2秒杀
					let data = {
						goods_id:this.shop_id,
						sku_id:this.jg_ind,
						count:this.shop_num,
						type:1,
						activity:this.detail_type,// detail_type 1团购 2秒杀
						kaituan:this.shop_det.activity_id,//开团的id
						cantuan:this.cantuan,//参加的团购的id
					}
					if(this.jg_ind ==''){
						this.com.msg('请选择规格')
						return
					}else{
						this.toggleSpec()
						this.com.navto('../vip-confirm-order/vip-confirm-order?data='+JSON.stringify(data))
					}
				}
				
			},
			//参加拼团
			go_single(e){
				this.cantuan = e
				this.shoptype_id = this.shop_det.id
				this.type_shop = 1
				this.shop_type = 1 // 活动购买
				this.sku()
				
				this.toggleSpec()
			},
			//结果
			zhifu(e){
				this.jg_ind = e
			},
			//购物车
			goto_cart(){
				this.com.rel('../cart/cart')
			},
			
			goto_page(e){
				this.com.navto(e)
			},
			//点击头部
			head_nav_cli(e){
				this.head_ind = e
				let that = this
				if(e == 0){
					uni.pageScrollTo({
					    scrollTop: 0,
					    duration: 200
					});
				}else if(e == 1){
					uni.pageScrollTo({
					    scrollTop: that.pingl,
					    duration: 200
					});
				}else if(e == 2){
					uni.pageScrollTo({
					    scrollTop: that.detail_shop,
					    duration: 200
					})
				}else if(e == 3){
					console.log(e)
					uni.pageScrollTo({
					    scrollTop: that.tuij,
					    duration: 200
					});
				}
				
			},
			//轮播指示点
			swiperChange(e) {
				this.swiperCurrent = e.detail.current
			},
			//点击轮播图放大
			banner_cli(){
				let arr = [];
				this.imgList.forEach(i=>{
					arr.push(i.src)
				})
				 uni.previewImage({
					urls: arr,
					loop:true
				});
			},
			//加购物车/购买
			payment_yes(e){
				this.shop_type = e
				if(e == 0){ // 单独购买
					this.shoptype_id = this.shop_id_goods
					this.type_shop = e
					this.sku()
				}else{
					this.shoptype_id = this.shop_det.id
					this.type_shop = e
					this.sku()
				}
				this.toggleSpec()
			},
			//返回上一页
			goto_top(){
				uni.navigateBack()
			},
			//规格弹窗开关
			toggleSpec(){
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(find,index, pid){
				let list = this.shopsku.title[find];
				console.log(list)
				list.data.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})
			
				this.$set(list.data[index], 'selected', true);
				// 存储已选择
				// *
				//  * 修复选择规格存储错误
				//  * 将这几行代码替换即可
				//  * 选择的规格存放在specSelected中
				this.specSelected = '';
				this.shopsku.title.forEach(item=>{
					item.data.forEach(c=>{
						if(c.selected == true){
							this.specSelected += c.id +','
							// console.log(this.specSelected)
							//处理逗号
							let arr = '' 
							this.sku_ids = this.specSelected.substr(0,this.specSelected.length - 1)
							  arr = this.sku_ids.replace(/\,/g, "") //替换所有的 逗号
							  console.log(this.sku_ids)
							//判断长度相同时
							if(this.shopsku.title.length == arr.length){
								this.$api.get('sku',{type:this.type_shop,id:this.shoptype_id,sku_ids:this.sku_ids}).then(res=>{
									console.log(res)
									if(res.status == 1){
										this.details = res.data.data
									}
								})
							}
						} 
					})
				})
				
			},
			//分享
			share(){
				this.$refs.share.toggleMask();	
			},
			buy(){
				uni.navigateTo({
					url: `/pages/order/createOrder`
				})
			},
			stopPrevent(){},
			//回到首页
			like_collect(){
				this.com.rel('../index/index')
			}
		},
	}
</script>

<style>
	page{
		background: #f1f1f1; 
	}
</style>
<style lang="scss" scoped>
	
	
	page{
		
		padding-bottom: 160upx;
	}
	.header_bait{
		width: 100%;height: 150rpx;background-color: white;padding-top: 60rpx;
		position: fixed;left: 0;top: 0;z-index: 99;
		.toubu{
			padding: 0 16rpx;
			line-height: 100rpx;
			display: flex;justify-content: space-between;
			.center{
				width: 60%;line-height: 78rpx;font-size: 32rpx;display: flex;
				.center_it{
					width: 25%;text-align: center;
					position: relative;
					&.active{
						color: #2d407a;
						&:before{
							content: '';
							position: absolute;
							left: 22%;
							bottom: 20%;
							transform: translateY(-50%);
							height: 7rpx;
							width: 56%;
							background-color: #2d407a;
							border-radius: 0 4px 4px 0;
							opacity: .8;
						}
					}
				}
			}
		}
	}
	.header{
		width: 100%;height: 100rpx;display: flex;justify-content: space-between;padding: 0 4%;
		position: absolute;left: 0;top: 66rpx;z-index: 20; 
		
		.header_left{
			text-align: center;padding-top: 12rpx;
			width: 80rpx;height: 80rpx;background-color: rgba(0,0,0,0.5);border-radius: 50%;
			color: #fff;
		}
	}
	.icon-you{
		/* font-size: $font-base + 2upx; */
		color: #888;
	}
	.carousel {
		height: 722upx;
		position:relative;
		.swiper-dots{
			position: absolute;right: 30rpx;bottom: 20rpx;
			background-color: rgba(0,0,0,0.4);display: inline-block;padding: 4rpx 18rpx 6rpx 18rpx;border-radius: 50rpx;
			color: #fff;
		}
		swiper{
			height: 100%;
		}
		.image-wrapper{
			width: 100%;
			height: 100%;
		}
		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
	.trabecula{
		width: 100%;background-color: #E8372F;height: 80rpx;color: #fff;line-height: 80rpx;
		padding: 0 3%;
		display: flex;justify-content: space-between;
		.trabecula_l{
			font-weight: bold;font-size: 32rpx;
		}
	}
	/* 标题简介 */
	.introduce-section{
		background: #fff;
		padding: 10rpx 30upx;
		display: flex;justify-content: space-between;
		.title{
			font-size: 32upx;
			/* color: $font-color-dark; */
			height: 50upx;
			line-height: 50upx;
		}
		.price-box_r{
			padding-top: 26rpx;color: #666666; 
		}
		.price-box{
			display:flex;justify-content: space-between;
			align-items:baseline;
			font-size: 26upx;
			color: #e8372f;
			.price-box_l{
				padding-top: 20rpx;
				.m-price{
					color: #999;text-decoration: line-through;
				}
			}
			.price-box_r{
				color: #999;
				width: 100rpx;text-align: center;
				image{
					width: 40rpx;height: 40rpx;
				}
				view{
					font-size: 24rpx;
				}
			}
		}
		.price{
			font-size: 38rpx;font-weight: bold;
			margin: 0 16rpx 0 14rpx; 
		}
		.m-price{
			margin-left: 30rpx;
			color: #e8372f;
			/* color: $font-color-light; */
			// text-decoration: line-through;
		}
		.coupon-tip{
			align-items: center;
			padding: 4upx 10upx;
			/* background: $uni-color-primary; */
			/* font-size: $font-sm; */
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx); 
		}
		.bot-row{
			display:flex;
			align-items:center;
			height: 50upx;
			/* font-size: $font-sm; */
			/* color: $font-color-light; */
			text{
				flex: 1;
			}
		}
	}
	.shop_names{
		background-color: white;;overflow: hidden;line-height: 50rpx;font-size: 32rpx;font-weight: bold;
		padding: 0 0 20rpx 3%;
		text{
			display: inline-block;font-size: 24rpx;font-weight: none;background-color: #df3636;padding: 0 4rpx;color: white;
			height: 36rpx;line-height: 36rpx;border-radius: 6rpx;
		}
	}
	.shopping_text{
		background-color: white;background-color: #fff;padding: 0 3%;
		.text-item{
			font-weight: bold;display: flex;justify-content: space-between;background-color: #f6f8ff;line-height: 68rpx;
			padding: 0 20rpx;color: #333;border-radius: 8rpx;
		}
		.shop_introduce{
			font-size: 28rpx;color: #333;line-height: 42rpx;padding: 10rpx 0;
		}
		.Rapid_delivery{
			color: #999;line-height: 70rpx;white-space: nowrap;
		}
	}
	//拼团
	.group_sty{
		width: 100%;height: 220rpx;overflow-y: scroll;
		padding: 0 3%;background-color: white;margin-top: 20rpx;
		.group_child{
			border-bottom: 2rpx solid #f6f6f6;padding: 10rpx 0;
			display: flex;justify-content: space-between;
			.child_l{
				height: 86rpx;display: flex;
				image{
					background-color: #eee;
					width: 80rpx;height: 80rpx;border-radius: 50%;margin-right: 8rpx;
				}
			}
			.child_r{
				line-height: 86rpx;
				text{
					display: inline-block;background-color: #df3636;color: white;line-height: 0;
					padding: 22rpx;margin: 0 10rpx;border-radius: 50rpx;
				}
			}
		}
	}
	// 规格
	.specification{
		width: 100%;display: flex;flex-wrap: wrap;font-size: 28rpx;margin: 20rpx 0;background-color: white;padding: 0 3%;
		line-height: 70rpx;color: #666;
		.child{
			width: 35%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
		}
		.child:nth-child(3n+3){
			width: 30%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
		}
	}
	/* 评价 */
	.eva-section{
		
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;
		.section_title{
			width: 100%;display: flex;justify-content: space-between;padding-bottom: 20rpx;
			line-height: 44rpx;
			.tit_l{
				display: flex;
				text{
					display: inline-block;width: 12rpx;height: 100%;background-image: linear-gradient(#445589,#fff);
					margin-right: 16rpx;
				}
			}
		}
		.eva-box{
			width: 100%;
			.eval_con{
				width: 100%;
				display: flex;background-color: white;padding: 2%;
				flex-wrap: wrap;border-bottom: 1rpx solid #f6f6f6;
				.order_head{
					width: 100%;
					height: 80rpx;
					display: flex;
					justify-content: space-between;
					.img{
						display: flex;
						image{
							width: 80rpx;
							height: 80rpx;border-radius: 80rpx;
							// background-color: pink;
						}
						.shop_name{
							width: 180rpx;line-height: 80rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
							font-size: 28rpx;margin-left: 20rpx; 
							font-weight: bold;
						}
					}
					.order_time{
						width: 40%;
						line-height: 70rpx;text-align: right;
						font-size: 26rpx;
						color: #999;
					}
				}
				.order_con{
					width: 100%;
					font-size: 30rpx;
					line-height: 52rpx;
					padding: 6rpx 0;
				}
				.order_img{
					width: 100%;
					display: flex; 
					image{
						width: 216rpx;
						height: 216rpx;
						margin: 10rpx;
					}
				}
			}
		}
	}
	
	/*  详情 */
	.detail-desc{
		background: #fff;
		margin-top: 16upx;
		.d-header{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			/* font-size: $font-base + 2upx; */
			/* color: $font-color-dark; */
			position: relative;
				
			text{
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}
			&:after{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc; 
			}
		}
	}
	
	/* 规格选择弹窗 */
	.attr-content{
		padding: 10upx 30upx;
		max-height: 70vh;
		overflow-y: scroll;
		.a-t{
			display: flex;
			image{
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;;
			}
			.right{
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				/* font-size: $font-sm + 2upx; */
				/* color: $font-color-base; */
				line-height: 42upx;
				.price{
					/* font-size: $font-lg; */
					/* color: $uni-color-primary; */
					margin-bottom: 10upx;
				}
				.selected-text{
					margin-right: 10upx;
				}
			}
		}
		.attr-list{
			display: flex;
			flex-direction: column;
			/* font-size: $font-base + 2upx; */
			/* color: $font-color-base; */
			padding-top: 30upx;
			padding-left: 10upx;
			
		}
		.jg_sty{
			padding: 18rpx;
			width: 100%;background-color: #eee;border-radius: 10rpx;margin: 16rpx 0;
			border: 1rpx solid #eee;
			&.jactive{
				background-color: #f6f8ff;border: 1rpx solid #263974;
			}
			.jg_sty_t{
				display: flex;
				view{
					margin: 10rpx;width: 50%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
				}
				view:nth-child(1){
					margin: 10rpx 0;
				}
			}
			.jg_sty_b{
				display: flex;justify-content: space-between;
				view{
					margin-top: 10rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
				}
				view:nth-child(2){
					color: #ef2d2d;
					text{
						font-size: 34rpx;font-weight: bold;
					}
				}
			}
		}
		.item-list{
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;
			text{
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 40upx;
				/* font-size: $font-base; */
				/* color: $font-color-dark; */
			}
			.selected{
				background: #f6f8ff;border: 2rpx solid #2d407a;
				color: #2d407a;
			}
		}
	}
	
	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		
		&.show {
			display: block;
			.mask{
				animation: showPopup 0.2s linear both;
			}
			.layer {
				animation: showLayer 0.2s linear both;
			}
		}
		&.hide {
			.mask{
				animation: hidePopup 0.2s linear both;
			}
			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}
		&.none {
			display: none;
		}
		.mask{
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}
		.layer {
			position: fixed;z-index: 99;bottom: 0;
			width: 100%;
			
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;
			.btn{
				height: 66upx;width: 91%;
				line-height: 66upx;
				border-radius: 100upx;
				background: #273b76;
				/* font-size: $font-base + 2upx; */
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}
		@keyframes showPopup {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@keyframes hidePopup {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}
		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}
			100% {
				transform: translateY(0%);
			}
		}
		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}
			100% {
				transform: translateY(120%);
			}
		}
	}
	/* 购买 */
	.add_bottom{
		z-index: 99;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		border-top: 1rpx solid #e2e2e2;
		.add_con{
			width: 695rpx;
			height: 70rpx;
			margin: 15rpx auto;
			display: flex;
			justify-content: space-between;
			.s_icon{
				margin-left: 27rpx;
			}
			.three_icons{
				
				width: 95rpx;
				display: flex;
				flex-wrap: wrap;
				height: 65rpx;
				font-size: 20rpx;
				color: #999;
				view{
					width: 100%;
					text-align: center;
				}
			}
			.anniu{
				display: flex;
				width: 400rpx;
				height: 70rpx;
				.add_car{
					width: 200rpx;
					height: 70rpx;
					// line-height: 70rpx;
					background-image: linear-gradient(0deg, 
						#34498A 0%, 
						#1D2F65 100%);
					border-radius: 34rpx 0rpx 0rpx 36rpx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
				}
				.buy{
					width: 201rpx;
					height: 70rpx;
					background-image: linear-gradient(0deg, 
						#F0534C 0%, 
						#E93928 100%);
					border-radius: 0rpx 36rpx 34rpx 0rpx;
					font-size: 24rpx;
					color: #ffffff;
					text-align: center;
				}
				.buy_s{
					width: 301rpx;
					height: 70rpx;line-height: 70rpx;
					background-image: linear-gradient(0deg, 
						#F0534C 0%, 
						#E93928 100%);
					border-radius: 50rpx;
					font-size: 28rpx;
					color: #ffffff;
					text-align: center;
					margin-left: 50rpx;
				}
			}
			
		}
		
	}
	
	
</style>
