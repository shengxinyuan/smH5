<template>
	<view style="padding: 3%;">
		<zs-inputs @searchClick="go_search" :texts="'搜索手机号或邀请码'" :padding='0'></zs-inputs>
		
		<view class="qh_but">
			<view class="qh_but_l" :class="{active:but_ind == ind}" v-for="(it,ind) in list" :key="ind" @click="but_ind_cli(ind)" >
			{{it.name}} </view>
		</view>
		<!-- //列表 -->
		<view class="list" >
			<view class="list_item" v-for="(it,ind) in stdata" :key="ind">
				<image :src="it.avatar" mode=""></image> 
				<view class="list_item_name">
					{{it.usename}}
				</view>
				<text class="list_item_vip" v-if="ind % 2 == 0">
					超级会员
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num:15121,
				num_vip:2400,
				names:"王志刚",
				but_ind:0,
				list:[
					{name:'区域合伙人'},
					{name:'全部用户'}
				],
				stdata:'',
				names:''
			}
		},
		computed:{
			
			names_com(){
				let arr =""
				if(this.names.length >= 2 && this.names.length < 4){
					arr = this.names.replace(/^./g, '*');
				}else if(this.names.length >= 4){
					arr = this.names.replace(/^../g, '**');
				}
				return arr
			}
		},
		onLoad() {
			this.page_reader(1)
		},
		methods:{
			page_reader(e){
				let arr =''
				this.$api.get('partnermember',{type:e}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.stdata = res.data
						res.data.forEach(i=>{
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
					}
				})
			},
			//搜索
			go_search(e){
				this.$api.get('partnersearch',{key:e}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.com.navto('./search_team?list='+JSON.stringify(res.data))
					}
				})
			},
			//团队切换
			but_ind_cli(e){
				this.but_ind = e
				if(e == 1){
					this.page_reader()
				}else{
					this.page_reader(1)
				}
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
	//切换
	.qh_but{
		width: 100%;display: flex;margin-bottom: 30rpx;line-height: 68rpx;border-radius: 50rpx;
		margin-top: 30rpx;
		
		.qh_but_l{
			width: 50%;text-align: center;
			position: relative;
			&.active{
				font-weight: bold;
				// background: #f8f8f8;
				&:before{
					content: '';
					position: absolute;
					left: 35%;
					top: 90%;
					transform: translateY(-50%);
					height: 6rpx;
					width: 30%;
					background-color: #2d407a;
					opacity: .8;
				}
			}
		}
	}
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
	input{
		background-color: #fff;line-height: 70rpx;height: 70rpx;padding-left: 30rpx;border-radius: 50rpx;font-size: 28rpx;
	}
</style>
