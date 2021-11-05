<template>
	<view>
		<!-- <zs-hx-navbar :config="config" @searchClick="searchClick"></zs-hx-navbar> -->
		<view class="textrus">
			<scroll-view class="scroll" scroll-x>
				<view class="scroll_child" v-for="(it,ind) in nav" :key="ind" :class="{active:it.id == currend}"
					@click="nav_cli(it.id)">
					<view class="">
						{{it.title}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="contes">
			<zs-shoplist-type :shop_list="shop_list" :lists="lists" :lv="lv" :page_login="page_login" :shaix_type="'3'" @shop_confim="shop_confim" :screen_label_list="label_list"></zs-shoplist-type>
				<view class=""
				style="height: 100rpx;display: flex;align-items: center;justify-content: center;" 
				v-if="shop_list.length > 0">
					{{ loadingText }}
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				config: {
					backgroundColor: [1,'#293C79'],
					color: '#ffffff',
					search: {
						value: '',
						placeholder: '',
						disabled: true,
						bgColor: '#ffffff'
					},
				},
				nav: [],
				currend: 0,
				shop_list: [],
				lists: [],
				page_login: true,
				lv: 0,
				params: [],
				filtrate: 0,
				current_page: 1,
				last_page: 1,
				loadingText: '上拉加载更多',
				label_list: {},
			}
		},
		onReachBottom() {
			if (this.current_page === this.last_page) {
				this.loadingText = '没有更多了'
				return
			}
			if (this.loadingText === '正在加载中...') {
				return
			}
			this.loadingText = '正在加载中...'
			this.current_page = this.current_page + 1
			this.params.page = this.current_page
			let params = {
				shop_label_texture_id: this.currend,
				member_id: uni.getStorageSync('member_id'),
				page: this.current_page
			}
			if (this.filtrate == 1) {
				this.get_data(this.params)
			} else {
				this.get_data(params)
			}
		},
		onLoad(op) {
			//获取会员状态
			let b = uni.getStorageSync('member_info')
			this.lv = b.lv
			// console.log(op)
			this.nav = JSON.parse(op.data)
			this.currend = op.id
			this.get_label_list()
			this.nav_cli(op.id)
		},
		methods: {
			get_label_list(){
				this.$api.get('screen_label').then(res=>{
					if(res.status == 1){
						this.label_list = res.data
					}
				})
			},
			searchClick() {
				this.com.navto('./search')
			},
			//传值
			shop_confim(e) {
				this.current_page = 1
				this.shop_list = []
				this.filtrate = 1
				let obj = {}
				obj = e
				obj.page = this.current_page
				obj.shop_label_texture_id = this.currend
				obj.member_id = uni.getStorageSync('member_id')
				this.params = obj
				this.get_data(this.params)
			},
			//点击
			nav_cli(e) {
				console.log(e)
				this.page_login = false
				this.currend = e
				this.current_page = 1
				this.filtrate = 0
				this.shop_list = []
				//商品
				let params = {
					shop_label_texture_id: e,
					member_id: uni.getStorageSync('member_id'),
					page: this.current_page
				}
				this.get_data(params)
				
				this.$api.get('screen', {
					type: 2
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.lists = res.data
					}
				})
			},
			get_data(params){
				this.$api.post('goods', params).then(res => {
					if (res.status == 1) {
						var a = res.data.current_page
						var b = res.data.last_page
						if (res.data.data) {
							this.page_login = true
							this.last_page = res.data.last_page
							this.current_page = res.data.current_page
							this.shop_list = this.shop_list.concat(res.data.data) 
							console.log(this.shop_list)
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '上拉加载更多'
							}
						}
					}
				})
			},
		}
	}
</script>

<style>
	page {
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.header {
		width: 100%;
		padding: 0 20upx;
		display: flex;
		align-items: center;
		background-color: #293C79;

		.icon {
			margin-right: 20upx;
		}

		.input-view {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex: 1;
			height: 60rpx;
			border-radius: 15px;
			padding: 0 15px;
			margin: 7px 0;
			line-height: 60rpx;
			background-color: #eee;

			input {
				margin-top: 10rpx;
				font-size: 30rpx;

			}
		}
	}

	.textrus {
		width: 100%;
	}

	.contes {
		width: 100%;
		margin-top: 10upx;
		background-color: #F6F6F6;
	}

	.scroll {
		display: flex;
		white-space: nowrap;
		background-color: #fff;
		line-height: 88rpx;
		font-size: 30rpx;

		.scroll_child {
			width: 18%;
			display: inline-block;
			text-align: center;
			position: relative;

			&.active {
				color: #2d407a;

				&:before {
					content: '';
					position: absolute;
					left: 30%;
					bottom: 8%;
					transform: translateY(-50%);
					height: 6rpx;
					width: 40%;
					background-color: #2d407a;
					// border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
	}
</style>
