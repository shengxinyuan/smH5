<template>
	<view>
		<view class="head">
			<image :src="selected_image" mode=""></image>
		</view>
		<view class="fixeds" id="evaluate" >
			<scroll-view class="swiper" scroll-x >
				<view class="swiper_item" v-if="it.type != 4" v-for="(it,ind) in nav" :key="ind" @click="nav_cli(it.id)" :class="{active:nav_idnex == it.id}">
					{{it.title}}
				</view>
			</scroll-view>
		</view>
		<view class="">
			<zs-shoplist-type :shop_list="shop_list" :lists="lists" @shop_confim="shop_confim" :cate_fist_id="''"
			 :shop_subject_id="nav_idnex" :screen_label_list="label_list"></zs-shoplist-type>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav_idnex:0,
				nav:[],
				lists:[],
				shop_list:[],
				selected_image: '',
				label_list: {},
			};
		},
		onLoad(op) {
			this.get_label_list()
			this.site_data()
			console.log(op)
			this.nav = JSON.parse(op.type)
			this.nav_idnex = op.id
			this.nav_cli(op.id)
		},
		onPageScroll(e){
			console.log(e)
		},
		methods:{
			get_label_list(){
				this.$api.get('screen_label').then(res=>{
					if(res.status == 1){
						this.label_list = res.data
					}
				})
			},
			shop_confim(e){
				this.$api.post('goods',e).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
			},
			
			nav_cli(e){
				this.nav_idnex = e
				this.$api.post('goods',{shop_subject_id:e}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
				this.$api.get('screen').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.lists = res.data
					}
				})
			},
			site_data(){
				this.$api.post('site').then(res=>{
					console.log(res)
					if(res.status == 1){
						this.selected_image = res.data.selected_image
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
.head{
	width: 100%;height: 370rpx;
	image{
		width: 100%;height: 100%;
	}
}
.fixeds{
	width: 100%;height: 80rpx;line-height: 80rpx;z-index: 20;
	.swiper{
		display: flex;white-space: nowrap;
		.swiper_item{
			display: inline-block;width: 28%;text-align: center;
			position: relative;
			&.active{
				font-weight: bold;
				color: #2d407a;
				// background: #f8f8f8;
				&:before{
					content: '';
					position: absolute;
					left: 40%;
					top: 88%;
					transform: translateY(-50%);
					height: 6rpx;
					width: 20%;
					background-color: #2d407a;
					opacity: .8;
					
				}
			}
		}
	}
	
}
</style>
