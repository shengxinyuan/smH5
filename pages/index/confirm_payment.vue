<template>
	<view class="zl-page"><strong></strong>
	<!-- 	<view class="zl-top-title-box">
			<u-icon class="icon warning" name="warning"></u-icon>
			<text class="titles">收货人必须填写真实姓名，否则不能发货！</text>
		</view> -->
		<view class="tabs-box">
			<!-- <view class="tabs-box_top">
				<view class="top_left">
					<u-tabs :list="list" :is-scroll="false" :current="current" @change="changeTabs" :height="60" :font-size="26"
					 :bar-width="34" :bar-height="4" :active-color="activeColor" :style="{'border-radius':borderRadius}"></u-tabs>
				</view>
				<view class="top_right" v-if="current == 3" @click="show = true">
					配送范围
				</view>
			</view> -->
			<u-popup v-model="show" mode="center"  border-radius="10">
				<view class="pesfwei">
					<image :src="zhanshi.door_delivery" mode="aspectFill"></image>
				</view>
			</u-popup>
			<!-- 邮寄 --> 
			<view class="tabs-first-box" > 
				<!-- 邮寄地址 --> 
				<view class="first-box-one" v-if="current == 0" @click="go_pages_add">
					<view > 
						<view v-if="address_bier">
							<view class="user-box">
								<view class="user-name">{{address_bier.contact}}</view>
								<view class="user-telephone">{{address_bier.mobile}}</view>
							</view>
							<view class="user-address">
								<text>{{address_bier.province + address_bier.city + address_bier.area + address_bier.address}}</text>
							</view>
						</view>
						<view v-else>
							请先添加地址
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
					
					<view>
						<image src="/static/vip-order/vip_01.png" mode="widthFix"></image>
					</view>
				</view>
				<view v-show="false">
					<!-- 速运 保价 -->
					<view class="first-box-two" >
						<view>
							<view>
								<view class="express-left">
									<view class="express-sf">
										<image src="../../static/vip-order/sf_01.png" mode="widthFix"></image>
									</view>
									<view class="sf">顺丰速运</view>
								</view>
								<view class="express-btns">
									<view class="express-send" :class="{express_go: ind == 1}" @click="fuk(1)">寄付</view>
									<view class="express-send" :class="{express_go: ind == 0}" @click="fuk(0)">到付</view>
								</view>
							</view>
							<view>
								<view class="parcel-left">
									<view class="parcel-bj">
										<image src="../../static/vip-order/bao_01.png" mode="widthFix"></image>
									</view>
									<view class="baojia">保价</view>
								</view>
								<view class="parcel-right">
									<text class="zhuyi">*</text>
									<text style="white-space: nowrap;">因商品为贵重物品，故保价必选，请选择保价方式</text>
								</view>
							</view>
							<view class="parcel-btns">
								<view class="parcel-sf" :class="{backimg:imgind == 0}" @click="baojia_cli(0)">
									<text class="sf-title">顺丰保价</text>
									<text class="sf-cost">（保费{{ zhanshi.sf_valuation /100}}%）</text>
								</view>
								<view class="parcel-tpy" :class="{backimg:imgind == 1}" @click="baojia_cli(1)">
									<text class="tpy-title">太平洋保价</text>
									<text class="tpy-cost">（保费 {{zhanshi.ocean_valuation  /1000}}%）</text>
								</view>
							</view>
							<view>
								<view class="premium">
									<text class="premium-title">保费：</text>
									<text class="premium-pay">￥{{nums_bj}}</text>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 挂签 证书 -->
					<view class="first-box-there">
						<view>
							<view class="hang-sign-box">
								<view class="hang-sign-title">挂签</view>
								<view class="hang-sign-text" @click="openPopup01(0)">价格&样本</view>
								<view class="hang-sign-switch">
									<u-switch v-model="checked" size="26" active-color="#2d407a" @change="guaq" inactive-color="#cccccc"></u-switch>
								</view>
							</view>
							<view class="log-box hang-sign">
								<view class="log">
									<image src="../../static/vip-order/guaqian_01.png" mode="widthFix"></image>
								</view>
								<view class="log-title">{{hangSignTitle}}</view>
							</view>
						</view>
						<view class="certificate">
							<view class="hang-sign-box">
								<view class="hang-sign-title">证书</view>
								<view class="hang-sign-text" @click="openPopup01(1)">价格&样本</view>
								<view class="hang-sign-switch">
									<u-switch v-model="checked02" size="26" active-color="#2d407a" @change="guaq_pic" inactive-color="#cccccc"></u-switch>
								</view>
							</view>
							<view class="log-box zhengshu">
								<view class="log">
									<image src="../../static/vip-order/zhengshu.png" mode="widthFix"></image>
								</view>
								<view class="log-title">{{zhengshuTitle}}</view>
							</view>
						</view>
					</view>
					
					<!-- 盒子手绳挑选 -->
					<view class="first-box-four">
						<view @click="skipAddedServices">
							<view class="choose-box-left">
								<view class="yuan"></view>
								<view class="choose-box-title">盒子手绳挑选</view>
							</view>
							<view class="packing-charge-right">
								<view class="packing-charge-title">包装服务费</view>
								<view class="packing-charge-pay">￥{{hezi_pic}}</view>
								<view>
									<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
								</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 商品详情列表 -->
				<view class="first-box-five">
					<view>
						<block v-for="(firstItem,firstIndex) in zhanshi.data" :key="firstIndex">
							<view class="goods-box">
								<view class="good-photo">
									<image :src="firstItem.image" mode="aspectFill"></image>
								</view>
								<view class="goods-details">
									<view class="goods-title">{{firstItem.title}}</view>
									<view class="goods-text-one">
										<text>金重：{{firstItem.wage}}g</text>
										<text>条码：{{firstItem.bar_code}}</text>
									</view>
									<view class="goods-text-two">
										<view class="goods-text-two-min-box" v-if="firstItem.is_height == 1">
											<text v-if="!viptype">金价：￥{{(firstItem.gold_g_vip/1).toFixed(2)}}/g</text>
											<text v-else>金价：￥{{(firstItem.gold_g_vip/1).toFixed(2)}}/g</text>
										</view>
										<view class="goods-text-two-min-box" v-if="firstItem.is_height == 2">
											<text v-if="!viptype">金价：￥0.00/g</text>
											<text v-else>金价：￥0.00/g</text>
										</view>
										<view class="goods-text-two-min-box" v-if="firstItem.is_height == 1">
											<text>工费：￥{{((firstItem.labor_money/1)/(firstItem.wage/1)).toFixed(2)}}/g</text>
										</view>
										<view class="goods-text-two-min-box" v-if="firstItem.is_height == 2">
											<text>工费：￥0.00/g</text>
										</view>
									</view>
									<view class="money-box" style="display: flex;justify-content: space-between;">
										<view class="">
											<text class="rmb">￥</text>
											<text class="integer" v-if="!viptype">{{firstItem.goods_money_normal}}</text>
											<text class="integer" v-else>{{firstItem.goods_money_vip}}</text>
										</view>
										<view style="color: #999;">
											*{{firstItem.order_count}}
										</view>
									</view>
								</view>
								<!-- <view class="goods-details">
									<view class="goods-title">{{firstItem.title}}</view>
									<view class="goods-text-one">
										<text>克重：{{firstItem.wage}}</text>
										<text>条码：{{firstItem.bar_code}}</text>
									</view>
									<view class="goods-text-two">
										<view class="goods-text-two-min-box">
											<text v-if="!viptype">金料：￥{{firstItem.gold_g_normal}}</text>
											<text v-else>金料：￥{{firstItem.gold_g_vip}}</text>
										</view>
										<view class="goods-text-two-min-box">
											<text>工费：￥{{firstItem.labor_money}}</text>
										</view>
									</view>
									<view class="money-box" style="display: flex;justify-content: space-between;">
										<view class="">
											<text class="rmb">￥</text>
											<text class="integer" >{{ firstItem.goods_money_normal }}</text>
											<text class="integer" >{{firstItem.goods_money_vip}}</text>
										</view>
										<view style="color: #999;">
											*{{firstItem.order_count}}
										</view>
									</view>
								</view> -->
							</view>
						</block>
						
						<!-- <view class="aggregate-box">
							<text class="aggregate-title">总计</text>
							<text class="aggregate-text">金料￥{{goldPrice}}</text>
							<text class="aggregate-text"> 工费￥{{processCost}}</text>
						</view> -->
					</view>
				</view>

				<!-- 商品订单列表 -->
				<view class="first-box-six">
					<view class="first-box-six-min-v">
						<view>
							<text>商品金额</text>
							<text style="font-size: 24rpx;">(含首饰盒、证书费、快递保价费等)</text>
						</view>
						<view>￥{{shop_pic}}</view>
					</view>
					<!-- <view class="first-box-six-min-v">
						<view>
							金币抵扣 
						</view>
						<view>-￥ {{goldBuckle}}({{goldBuckle * zhanshi.gold_money}}金币)</view>
					</view>
					<view class="first-box-six-min-v" @click="skipDiscountSelect">
						<view>优惠券</view>
						<view class="min-v-right">
							<view class="min-v-text">-￥{{coupon}}</view>
							<view>
								<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
							</view>
						</view>
					</view> -->
					<view class="first-box-six-min-v" v-if="current == 0 || current == 1">
						<view>运费</view>
						<view>￥{{postage}}</view>
					</view>
					<view class="first-box-six-min-v" v-if="current == 3">
						<view>配送费</view>
						<view>￥{{zhanshi.shipping_fee}}</view>
					</view>
					<view class="first-box-six-min-v-bottom" @click="input_show = !input_show">
						<view class="min-v-left">
							<view>订单备注</view>
							<view class="min-v-search">选填</view>
						</view>
						<view v-if="!input_show">
							<u-icon class="icon xiangyou" name="arrow-down"></u-icon>
						</view>
						<view v-if="input_show">
							<u-icon class="icon xiangyou" name="arrow-up"></u-icon>
						</view>
					</view>
					<textarea v-if="input_show" v-model="textarea_val" placeholder="请输入备注~" />
				</view>

				<!-- 价格样本 -->
				<view>
					<u-popup v-model="popupShow01" mode="center" border-radius="10" :zoom="false" :closeable="true" width="85%">
						<view class="popup-one-box">
							
							<view class="popup-one-title" v-if="popupnum != 3">
								<text>{{popupnum == 0 ? "挂签": "证书"}}价格说明</text>
							</view>
							<!-- 挂签 -->
							<view class="popup_img" v-if="popupnum == 0">
								<image :src="zhanshi.sign_image" mode="aspectFill"></image>
							</view>
							<!-- 证书 -->
							<view class="popup_img" v-else-if="popupnum == 1"> 
								<image :src="zhanshi.certificate_image" mode="aspectFill"></image>
							</view>
						</view>
					</u-popup>
				</view>
			</view>

			
		</view>
		<!--  底部-->
		<view class="tabs-second-box" >
			<!-- 代发底部展示 -->
			<view class="second-box-five">
				<view class="notice-text">
					<text v-if="viptype">{{noticeTexts01}}</text>
					<text v-else>{{noticeTexts02}}</text>
				</view>
				<view class="open-super-members-bgimg" v-show="false">
					<image src="../../static/bgimage.png" mode="widthFix"></image>
					<view class="open-super-members-box">
						<view>
							<view class="open-super-members-log">
								<image src="/static/vip-order/vip_02.png" mode="widthFix"></image>
							</view>
							<view class="open-super-members-title">
								<text>开通超级会员，本单预计可省</text>
							</view>
							<view class="open-super-members-price">
								<text>{{liread}}元</text>
							</view>
						</view>
						<!-- <u-switch v-model="checked03" size="26" @change="vip_kait" active-color="#2d407a" inactive-color="#cccccc"></u-switch> -->
					</view>
				</view>
				<view class="bottom-v">
					<view class="money-box">
						<text class="rmb">￥</text>
						<text class="integer">{{total <= 0? 0.01 : total.toFixed(2)}}</text>
					</view>
					<view class="bottom-v-right" >
						<view class="right-left" v-if="viptype">
							<text>利润合计：￥{{liread}}</text>
						</view>
						<view class="right-right" @click="submit_order">
							<view >提交订单
								<text v-if="zhanshi.data"> ({{zhanshi.data.length}}) </text>
							</view>
						</view>
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
				textarea_val:'',
				input_show:false,//输入框
				show:false,//配送范围
				list: [{
						name: '邮寄'
					}, {
						name: '代发'
					}, {
						name: '自提'
					},
					{
						name: '送货上门'
					}
				],
				current: 0,
				activeColor: '#2d407a',
				borderRadius: '30upx',
				checked: true,
				checked02: true,
				checked03: false,
				popupShow01: false,
				premiumPay:'',
				hangSignTitle:'国家珠宝玉石适量监督检验中心',
				zhengshuTitle:'北京市中工商联珠宝检测中心',
				packingChargePay:'1.0',
				goodsMoney:'14748.32',
				noticeTexts01: '*因珠宝产品属于贵重物品，一旦出库，产品无质量问题暂不退换货品！建议您对已购买产品进行保价，未保价的包裹丢失或毁损的，不予赔偿，公司无需承担赔偿责任！',
				noticeTexts02: '*因珠宝产品属于贵重物品，一旦出库，产品无质量问题暂不退换货品！',
				ind:1,
				datas:'',//传递数据
				imgind:0,
				zhanshi:'',//数据展示
				popupnum:0,
				viptype:false ,
				total : 0 ,
				address:'',//我的
				address_bier:'',//别人的
				postage : 0 ,
				hezi:"",//盒子数据
				hezi_pic:0,
				coupon:0,//优惠券价格
				viptype_num:0, // 是否开通vip
				sign_num:0,//挂签
				sign_certificate:0,//证书
				goldBuckle:0,//金币
				cantuan_id:'',//参团低
				shoptypes:0 ,//type类型
				time:'',
				nums_bj:0,//保价
				coupon_id:0,//优惠券低
				guaq_pic_show:false,
				guaq_show:false,
				cli_type:true,//防抖
				hezi_ids:0,
				guaqian:0,
				zhens:0
			}
		},
		onUnload() {
			clearInterval(this.time)
		},
		onLoad(op) {
			this.get_member()
			console.log(op)
			// console.log(JSON.parse(op.data))
			if(op.data){
				let obj = JSON.parse(op.data)
				let mid = uni.getStorageSync('member_id')
				// let mid = 378
				obj.member_id = mid
				this.datas = obj
				if(this.datas && this.datas.cantuan !== undefined){
					this.cantuan_id = this.datas.cantuan
				}
				if(this.datas && this.datas.activity == 1){
					this.shoptypes = this.datas.activity
				}else{
					this.shoptypes = this.datas.type
				}
				//回流类型
				if(this.datas && this.datas.current){
					this.current = this.datas.current
				}
				this.page_reader()
			}else{
				this.page_reader()
			}
			//vip状态
			// console.log(this.viptype)
			//删除地址
			uni.removeStorageSync('address')
			uni.removeStorageSync('address_bier')
			uni.removeStorageSync('ids')
			uni.removeStorageSync("coupon")
		},
		watch:{
			zj_pic(a,b){
				console.log(a,b)
			},
			//vip状态
			deep:true
		},
		computed:{
			//商品价格
			shop_pic(){
				let arr =  this.total - this.postage
				return arr.toFixed(2)
			},
			liread(){
				let arr = 0
				if(this.zhanshi){
					this.zhanshi.data.forEach(i=>{
						arr += i.goods_money_normal - i.goods_money_vip
					})
				}
				return arr.toFixed(2)
			},
			//商品价格
			shop_price(){
				let arr = 0
				// if(this.viptype){
				// 	arr = this.zhanshi.money_vip 
				// }else{
					arr = this.zhanshi.money
				// }
				return arr
			},
			//最终价格
			zj_pic(){
				if(this.ind == 1 && this.current == 0 || this.current == 1){
					//证书为true
					if(this.guaq_pic_show == true){
						//挂签
						if(this.guaq_show == true){
							this.total = this.shop_price + this.hezi_pic - this.goldBuckle - this.coupon + parseFloat(this.postage) + this.nums_bj + this.zhens + this.guaqian
						}else{
							this.total = this.shop_price + this.hezi_pic - this.goldBuckle - this.coupon + parseFloat(this.postage) + this.nums_bj + this.zhens
						}
					}else{
						//挂签为
						if(this.guaq_show == true){
							this.total = this.shop_price + this.hezi_pic - this.goldBuckle - this.coupon + parseFloat(this.postage) + this.nums_bj + this.guaqian
						}else{
							this.total = this.shop_price + this.hezi_pic - this.goldBuckle - this.coupon + parseFloat(this.postage) + this.nums_bj
						}
					}
				}else{ //送货
					if(this.current == 3){
						this.total = this.shop_price + this.hezi_pic - this.goldBuckle - this.coupon + this.zhanshi.shipping_fee + this.nums_bj
					}else{
						this.total = this.shop_price + this.hezi_pic - this.goldBuckle - this.coupon + this.nums_bj
					}
				}
			},
			//金料
			goldPrice(){
				let arr = 0
				if(this.zhanshi.data){
					this.zhanshi.data.forEach(i=>{
						arr += JSON.parse(i.gold_g_normal) 
					})
				}
				return arr.toFixed(2)
			},
			//工费
			processCost(){
				let arr = 0
				if(this.zhanshi.data){
					this.zhanshi.data.forEach(i=>{
						arr += JSON.parse(i.labor_money) 
					})
				}
				// console.log(arr)
				return arr.toFixed(2)
			},
		},
		onShow() {
			//获取地址
			if(uni.getStorageSync('address')){
				this.address = uni.getStorageSync('address') //自己的
				
				//运费
				this.freight()
			}
			// console.log(this.address)
			if(uni.getStorageSync('address_bier')){
				this.address_bier = uni.getStorageSync('address_bier')//别人的
				this.freight()
			}
			
			//盒子手绳等
			if(uni.getStorageSync('ids')){
				this.hezi = uni.getStorageSync('ids')
				this.hezi_pic = this.zhanshi.packing_money + this.hezi.total
			}
			//优惠券
			if(uni.getStorageSync('coupon')){
				let arr = uni.getStorageSync('coupon')
				this.coupon = arr.price
				this.coupon_id = arr.id
				this.$forceUpdate()
			}
		},
		
		methods: {
			//开vip
			// vip_kait(e){
			// 	console.log(e)
			// 	if(e == true){
			// 		this.viptype_num = 1
			// 		this.viptype = true 
			// 	}else{
			// 		this.viptype_num = 0
			// 		this.total = this.total - JSON.parse(this.zhanshi.vip)
			// 		this.viptype = false
			// 	}
			// },
			get_member(){
				this.$api.get('member').then(res => {
					// console.log(res)
					if (res.status == 1) {
						if (res.data.lv == 0) {
							this.viptype = false
						} else {
							this.viptype = true
						}
					}
				})
			},
			//邮费
			freight(){
				let arr = 0
				// if(this.current == 0){
				// 	if(this.address.province){
				// 		if(this.address.province == this.zhanshi.province){ //省内邮费
				// 			arr = JSON.parse(this.zhanshi.in_province)
				// 		}else{ //省外邮费
				// 			arr = JSON.parse(this.zhanshi.out_province)
				// 		}
				// 	}
				// 	this.postage = arr.toFixed(2)
				// }
				// if(this.current == 1){
					if(this.address_bier.province){
						console.log(this.address_bier.province)
						if(this.address_bier.province == this.zhanshi.province){ //省内邮费
							arr = JSON.parse(this.zhanshi.in_province)
						}else{ //省外邮费
							arr = JSON.parse(this.zhanshi.out_province)
						}
					}
					this.postage = arr.toFixed(2)
				// }
			},
			//页面跳转
			go_pages(e){
				this.com.navto(e)
			},
			go_pages_add(){
				this.com.navto('../my/receiving?is_mine='+ 0 +'&type='+0)
			},
			//挂签
			guaq(e){
				this.guaq_show = e
				let ar = 0
				this.zhanshi.data.forEach(i=>{
					ar += i.order_count * i.sign
				})
				console.log(ar)
				this.guaqian = ar
				if(e == true){
					this.sign_num = 1
				// 	this.total = this.total + ar
				}else{
					this.sign_num = 0
				// 	this.total = this.total - ar
				}
				// console.log(this.total)
			},
			//证书
			guaq_pic(e){
				this.guaq_pic_show = e
				let ar = 0
				this.zhanshi.data.forEach(i=>{
					ar += i.order_count * i.sign_certificate
				})
				console.log(ar)
				if(e == true){
					this.sign_certificate = 1
					this.zhens = ar
				}else{
					this.sign_certificate = 0
					// this.total = this.total - ar
				}
				console.log(this.total)
			},
			baojia_cli(e){
				this.imgind = e
				if(e == 0){ //0顺丰
					let ar = Math.floor(this.shop_price) / 1000
					// console.log(Math.floor(ar))
					if(ar <=1 && this.zhanshi){
						this.nums_bj = this.zhanshi.sf_valuation
						// console.log(this.nums_bj)
					}else if(ar >1 && ar <=2 && this.zhanshi) {
						this.nums_bj = 2 * this.zhanshi.sf_valuation
						// console.log(this.nums_bj)
					}else{
						this.nums_bj = (Math.floor(ar) + 1) * this.zhanshi.sf_valuation
					}
				}else{
					let ar = Math.floor(this.shop_price) / 10000
						console.log(ar)
					if(ar <=1 && this.zhanshi){
						this.nums_bj = this.zhanshi.ocean_valuation
						// console.log(this.nums_bj)
					}else if(ar >1 && ar <=2 && this.zhanshi) {
						this.nums_bj = 2 * this.zhanshi.ocean_valuation
						// console.log(this.nums_bj)
					}else{
						this.nums_bj = (Math.floor(ar) + 1) * this.zhanshi.ocean_valuation
					}
				}
			}, 
			//配送方式
			fuk(e){
				this.ind = e
			},
			//页面渲染
			page_reader(){
				this.$api.post('orderdetail',this.datas).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.zhanshi =res.data
						this.address = res.data.address_mine //我的默认

						this.address_bier = res.data.address_not_mine
						
						this.hezi_pic = res.data.packing_money + JSON.parse(res.data.peijian_price) //盒子价格
					
						//运费
						
						this.freight()
						this.baojia_cli(0)//保价
						this.guaq(this.checked) //挂签
						this.guaq_pic(this.checked02) //证书
						this.baojia_cli(0)
						//盒子
						this.$api.get('accessories').then(res=>{
							console.log(res)
							if(res.status == 1){
								res.data.forEach(i=>{
									i.counds = 0
								})
								for (var i = 0; i < res.data.length; i++) {
									if(i == 0){
										res.data[i].counds = 1
									}else{
										res.data[i].counds = 0
									}
								}
								let arr = {
									list:res.data
								}
								this.hezi = arr
							}
						})
					}
				})
			},
			//金币抵扣
			// golds(){
			// 	let num = 0
			// 	if(this.zhanshi.gold - this.zhanshi.gold_num >= 0){
			// 		num = this.zhanshi.gold_num / this.zhanshi.gold_money
			// 	}else{
			// 		num = this.zhanshi.gold / this.zhanshi.gold_money
			// 	}
			// 	// console.log(num)
			// 	this.goldBuckle = num < 1 ? 0 : num
			// 	// console.log(this.goldBuckle)
			// },
			
			change(status) {
				console.log(status);
			},
			openPopup01(e) {
				this.popupnum = e
				this.popupShow01 = true
			},
			//盒子手绳		
			skipAddedServices(){
				if(this.hezi != ''){
					uni.navigateTo({
						url:'added-services?price='+this.zhanshi.packing_money+'&data='+JSON.stringify(this.hezi)
					})
				}else{
					uni.navigateTo({
						url:'added-services?price='+this.zhanshi.packing_money
					})
				}
				
			},
			skipDiscountSelect(){
				//ids
				let cate_ids = ''
				let arr = ''
				let ids = ''
				let price = ''
				if(this.zhanshi.data){
					this.zhanshi.data.forEach(i=>{
						cate_ids += i.cate_id +','
						arr += i.goods_money_normal +','
						// console.log(cate_ids)
						ids = cate_ids.substr(0,cate_ids.length - 1)
						price = arr.substr(0,arr.length - 1)
					})
					
				}
				
				uni.navigateTo({
					url:'../my/discount_select?ids='+ids+'&price='+price
				})
			},
			//提交订单
			submit_order(){
				if(this.address_bier.id === undefined || !this.address_bier){
					this.com.msg('请添加收货地址')
					return false
				}
				let data = {
					valuation:this.nums_bj,							//保价金额（不保价则不传）
					goods_id:this.datas.goods_id === undefined?0:this.datas.goods_id,//主商品id(购物车则不传
					sku_id:this.datas.sku_id === undefined?0:this.datas.sku_id,		//skuid(购物车则不传			
					count:this.datas.count === undefined?0:this.datas.count,	//数量(购物车则不传	是	[string]		
					type:this.shoptypes === undefined ? 0 :this.shoptypes,			//0-普通商品 1-团购 2-秒杀	是	[string]
					address_id:this.address_bier.id,				//收货地址	是	[string]
					shop_accessories_ids:this.hezi.id === undefined?this.zhanshi.peijian_id:this.hezi.id,		//传入配件ids
					shop_accessories_counts:this.hezi.count=== undefined?1:this.hezi.count,//配件数量,隔开
					vip:this.viptype_num,					//是否开vip 1-是 0-不开	是
					message:this.textarea_val,				//备注 有则传
					store_address_id:this.address_bier.id,	//代发时 选择代发地址id	是
					sf_change:this.ind,						//0-到付 1-寄付	是
					sign_certificate:this.sign_certificate,	//判断是否有证书 1需要 否则 0	是
					sign:this.sign_num,						//判断是否挂签 1需要 否则 0是
					gold:this.goldBuckle < 1 ? 0 : 1,  			//判断是否使用金币 1使用 否则0 
					group_id:this.cantuan_id,	 			//拼团则传拼团id(加入拼团
					activity_id:this.datas.kaituan === undefined?0:this.datas.kaituan,	//创建拼团时传 拼团活动id	是
					sf_type:this.current + 1 ,//	1-邮寄 2-代发 3-自提 4-送货上门
					coupon_id:this.coupon_id,
					bn:this.datas.bn === undefined ? '' : this.datas.bn,
					member_id:uni.getStorageSync('member_id'),
					is_h5:1
				}
				console.log(data) 
				let payment_data={
					vip:this.viptype_num,
					menber_price:this.zhanshi.member_money,
					shop_price:this.total <=0 ? 0.01 : this.total.toFixed(2),
					
				}
				//送货上门
				if(this.cli_type){
					this.cli_type = false
					this.com.msg('正在生成订单')
					this.$api.post('orders',data).then(res=>{
						console.log(res)
						this.com.msg(res.message+',请勿操作')
						if(res.status == 1){
							
							let arr = 2
							this.time = setInterval(()=>{
								if(arr == 0){
									clearInterval(this.time)
									uni.redirectTo({
										url:'./payment_order?data='+res.data.data.bn+'&shop='+JSON.stringify(payment_data)
									})
								}else{
									arr -= 1
								}
							},1000)
						}
					})
					
				}else{
					this.com.msg('请勿重复点击')
				}
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6
	}
</style>
<style lang="scss" scoped>
	.pesfwei{
		width: 600rpx;
		height: 800rpx;
		image{
			width: 100%;height: 100%;
		}
	}
	.zl-page{
		width: 100%;
	}
	.xiangyou {
		font-size: 30upx;
		color: #666666;
	}

	.zl-top-title-box {
		background-color: #2d407a;
		padding: 10upx 30upx;
		color: #feebc0;
		z-index: 20;position: fixed;left: 0;top: 0;width: 100%;
		.warning {
			font-size: 32upx;
			margin-right: 10upx;
		}

		.titles {
			font-size: 26upx;
		}
	}

	.tabs-box {
		// margin-top: 60rpx;
		padding: 2% 3%;
		.tabs-box_top{
			width: 100%;display: flex;justify-content: space-between;
			.top_left{
				width: 80%;
			}
			.top_right{
				line-height: 60rpx;color: #dd2626;
			}
		}
	}

	.tabs-first-box {
		padding-bottom: 10upx;
	}

	.first-box-one {
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;

		.user-box {
			display: flex;

			.user-name {
				font-size: 28upx;
			}

			.user-telephone {
				padding-left: 20upx;
				font-size: 26upx;
				color: #999999;
			}
		}

		.user-address {
			font-size: 26upx;
			margin-top: 20upx;
		}
	}

	.first-box-one>view:first-of-type {
		padding: 30upx 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.first-box-one>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
		}
	}

	.first-box-two,
	.first-box-there,
	.first-box-four,
	.first-box-five,
	.second-box-there {
		padding: 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
	}

	.first-box-two>view>view:first-of-type {
		width: 100%;
		display: flex;

		.express-left {
			width: 50%;
			display: flex;

			.express-sf {
				width: 10%;
				display: flex;
				align-items: center;

				image {
					width: 100%;
				}
			}

			.sf {
				font-size: 28upx;
				padding-left: 10upx;
			}
		}

		.express-btns {
			width: 50%;
			display: flex;
			font-size: 28upx;
			text-align: center;
			justify-content: flex-end;
			align-items: center;
			.express-send {
				padding: 6rpx 20rpx 2rpx 20rpx;
				line-height: 34upx;
				background-color: #eeeeee;
				border-radius: 18upx;
				color: #666666;
				margin:0 10upx;
				&.express_go {
					background-color: #2d407a;
					color: white;
				}
			}
			
		}
	}

	.first-box-two>view>view:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30upx;
		padding: 30upx 0;
		border-top: solid 2upx #eeeeee;

		.parcel-left {
			width: 16%;
			display: flex;

			.parcel-bj {
				width: 31%;
				display: flex;
				align-items: center;

				image {
					width: 100%;
				}
			}

			.baojia {
				font-size: 28upx;
				padding-left: 10upx;
			}
		}

		.parcel-right {
			font-size: 26upx;
			color: #999999;

			.zhuyi {
				color: #f8c35c;
			}
		}
	}

	.parcel-btns {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.sf-title,
		.tpy-title {
			font-size: 30upx;
			font-weight: bold;
		}

		.sf-cost,
		.tpy-cost {
			font-size: 22upx;
		}

		.parcel-sf {
			width: 45%;
			padding: 18upx 0;
			text-align: center;
			
			border-radius: 6upx;
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);
			position: relative;
			
			.triangle-topright-box {
				position: absolute;
				top: 0;
				right: 0;

				.triangle-topright {
					width: 0;
					height: 0;
					border-top: 36upx solid #2d407a;
					border-left: 46upx solid transparent;

					.duihao {
						font-size: 20upx;
						color: #FFFFFF;
						position: absolute;
						top: 0;
						right: 0;
					}
				}
			}

		}
		.backimg{
			background-image: url(../../static/index/back.png);background-size: 100% 100%;
		}
		.parcel-tpy {
			width: 46%;
			padding: 18upx 0;
			text-align: center;
			margin-left: 20upx;
			border-radius: 6upx;
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);
		}
	}

	.first-box-two>view>view:last-of-type {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-top: 20upx;

		.premium {
			font-size: 28upx;

			.premium-pay {
				color: #ea3a4a;
				font-weight: bold;
			}
		}
	}

	.certificate {
		margin-top: 20upx;
	}

	.hang-sign-box {
		display: flex;
		align-items: center;
		font-size: 28upx;
		font-weight: bold;

		.hang-sign-title {
			width: 15%;
		}

		.hang-sign-text {
			width: 25%;
			color: #ed4440;
		}

		.hang-sign-switch {
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}

	.log-box {
		display: flex;
		align-items: center;

		.log {
			width: 5%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.log-title {
			font-size: 22upx;
			color: #000000;
			padding-left: 10upx;
		}
	}

	.hang-sign {
		padding: 20upx 0;
		border-bottom: solid 2upx #eeeeee;
	}

	.zhengshu {
		padding-top: 20upx;
	}

	.first-box-four>view {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.choose-box-left {
			display: flex;
			align-items: center;

			.yuan {
				width: 30upx;
				height: 30upx;line-height: 30rpx;
				border-radius: 100%;color: white;text-align: center;
				background-color: #dd2626;
			}

			.choose-box-title {
				padding-left: 10upx;
				font-size: 28upx;
			}
		}

		.packing-charge-right {
			display: flex;
			align-items: center;
			font-size: 26upx;

			.packing-charge-title {
				color: #999999;
			}

			.packing-charge-pay {
				color: #ed4440;
				padding-left: 10upx;
			}

			.xiangyou {
				margin-left: 20upx;
			}
		}
	}

	.goods-box {
		display: flex;

		.good-photo {
			width: 25%;
			display: flex;

			image {
				width: 166rpx;
				height: 166rpx;background-color: #eee;
				border-radius: 10upx;
			}
		}

		.goods-details {
			margin-left: 20upx;

			.goods-title {
				font-size: 28upx;
			}

			.goods-text-one {
				margin-top: 20upx;
				margin-bottom: 10upx;
				font-size: 26upx;
				color: #666666;

				text {
					margin-right: 30upx;
				}
			}

			.goods-text-two {
				display: flex;
				font-size: 26upx;
				color: #777777;

				.goods-text-two-min-box {
					margin: 6rpx 0;
					padding: 4upx 14upx;
					background-color: #f6f6f6;
					margin-right: 20upx;
					border-radius: 6upx;
					text{
						white-space: nowrap;
					}
				}
			}

			.money-box {
				margin-top: 50upx;
				padding-right: 20rpx;
				padding-bottom: 30upx;

				.rmb {
					font-size: 22upx;
				}

				.integer {
					font-size: 30upx;
					font-weight: bold;
				}

				.fractional-part {
					font-size: 22upx;
				}
			}
		}
	}

	.money-box {
		color: #ea3a4a;

		.rmb {
			font-size: 22upx;
		}

		.integer {
			font-size: 30upx;
			font-weight: bold;
		}

		.fractional-part {
			font-size: 22upx;
		}
	}

	.aggregate-box {
		padding-top: 20upx;
		border-top: solid 2upx #eeeeee;
		font-size: 26upx;

		.aggregate-title {
			color: #666666;
			margin-right: 40upx;
		}

		.aggregate-text {
			margin-right: 30upx;
		}
	}

	.first-box-six,
	.second-box-four {
		padding: 0 30upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;

		.first-box-six-min-v {
			padding: 30upx 0;
			font-size: 26upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: solid 2upx #eeeeee;

			.min-v-right {
				display: flex;
				align-items: center;

				.min-v-text {
					color: #ea3a4a;
				}

				.xiangyou {
					margin-left: 20upx;
				}
			}
		}

		.first-box-six-min-v-bottom {
			padding: 30upx 0;
			font-size: 26upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.min-v-left {
				display: flex;
				align-items: center;

				.min-v-search {
					color: #999999;
					margin-left: 50upx;
				}
			}

			.xiangyou {
				font-size: 30upx;
				color: #666666;
				margin-left: 20upx;
			}
			
		}
		textarea{
			font-size: 28rpx;padding: 20rpx;
			height: 240rpx;border: solid 2rpx #F6F6F6;
		}
	}

	.first-box-seven {
		position: fixed;
		bottom: 0;
		left: 0;

		.notice-text {
			padding: 20upx 30upx;
			font-size: 22upx;
			color: #ec9f67;
			background-color: #fffaf0;
		}

		.seven-bottom-v {
			height: 100upx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20upx;

			.bottom-v-right {
				display: flex;
				align-items: center;

				.right-left {
					text {
						padding-right: 10upx;
					}

					.total-profit {
						font-size: 26upx;
						color: #999999;
					}

					.super-vip {
						display: flex;
						margin-top: 10upx;
						font-size: 28upx;
						color: #2d407a;

						.super-vip-log {
							width: 7%;
							display: flex;
							align-items: center;
							margin-right: 10upx;

							image {
								width: 100%;
							}
						}
					}
				}

				.right-right {
					padding: 18upx 30upx;
					margin-left: 10upx;
					background-color: #ef463f;
					font-size: 26upx;
					color: #FFFFFF;
					border-radius: 34upx;
				}
			}
		}
	}
	
	.popup-one-box{
		padding: 30upx;
		.popup-one-title{
			margin-top: 20upx;
			margin-bottom: 30upx;
			font-size: 30upx;
			font-weight: bold;
			text-align: center;
		}
		.popup_img{
			width: 100%;
			height: 880rpx;
			image{
				width: 100%;height: 100%;
			}
		}
	}

	.tabs-second-box {
		width: 100%;
		padding-bottom: 250upx;
	}

	.second-box-one {
		padding: 30upx 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;
	}

	.second-box-one>view:first-of-type {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.second-box-one>view>view:first-of-type {
		width: 80%;
		display: flex;
		align-items: center;

		.send-image {
			width: 7%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.mail-box {
			padding-left: 20upx;

			.user-box {
				display: flex;

				.user-name {
					font-size: 28upx;
				}

				.user-telephone {
					padding-left: 20upx;
					font-size: 26upx;
					color: #999999;
				}
			}

			.user-address {
				font-size: 26upx;
				margin-top: 20upx;
			}
		}
	}

	.second-box-one>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	.second-box-two {
		padding: 50upx 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;
	}

	.second-box-two>view:first-of-type {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.second-box-two>view>view:first-of-type {
		width: 80%;
		display: flex;
		align-items: center;

		.put-image {
			width: 7%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.add-address {
			font-size: 26upx;
			margin-left: 20upx;
		}
	}

	.second-box-two>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	.second-box-five {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;

		.notice-text {
			padding: 20upx 30upx;
			font-size: 22upx;
			color: #ec9f67;
			background-color: #fffaf0;
		}

		.open-super-members-bgimg {
			width: 100%;
			display: flex;
			position: relative;

			image {
				width: 100%;
			}

			.open-super-members-box {
				width: 100%;
				padding: 0 30upx;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}

	.open-super-members-box>view:first-of-type {
		width: 80%;
		height: 68upx;
		display: flex;
		align-items: center;

		.open-super-members-log {
			width: 5%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.open-super-members-title {
			font-size: 26upx;
			font-weight: bold;
			color: #1c2c5c;
			margin-left: 20upx;
		}

		.open-super-members-price {
			padding: 4upx 10upx;
			margin-left: 20upx;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			font-size: 24upx;
			color: #fff0cd;
			border-radius: 4upx;
		}
	}

	.bottom-v {
		width: 100%;
		height: 100upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20upx;

		.bottom-v-right {
			display: flex;
			align-items: center;

			.right-left {
				padding-right: 10upx;
				font-size: 24upx;
				color: #999999;
			}

			.right-right {
				padding: 18upx 30upx;
				margin-left: 10upx;
				background-color: #ef463f;
				font-size: 26upx;
				color: #FFFFFF;
				border-radius: 34upx;
			}
		}
	}
</style>
