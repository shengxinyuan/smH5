<template>
	<view style="padding: 3% 4%;">
		<view class="inp_it">
			<view class="">
				姓名:
			</view>
			<input type="text" placeholder="请输入" v-model="name"/>
		</view>
		<view class="inp_it">
			<view class="">
				联系方式:
			</view>
			<input type="text" placeholder="请输入" v-model="phone" maxlength="11"/>
		</view>
		<view class="inp_it" style="padding: 0 10%;">
			<label class="radio" @click="radio_cli(1)"><radio value="r1" :checked="is_city == 1" />区域合伙人</label>
			<label class="radio" @click="radio_cli(2)"><radio value="r2" :checked="is_city == 2" />城市合伙人</label>
			
		</view>
		<view class="inp_it" @click="show = true">
			<view class="">
				所属省份:
			</view>
			<input type="text" placeholder="请选择" :disabled="true" v-model="reg_val"/>
		</view>
		<view class="inp_it" @click="show_two = true" v-if="city_show">
			<view class="">
				所属城市:
			</view>
			<input type="text" placeholder="请选择" :disabled="true" v-model="reg_val_city"/>
		</view>
		<view class="inp_it" @click="show_therr = true" v-if="area_show">
			<view class="">
				所属区域:
			</view>
			<input type="text" placeholder="请选择" :disabled="true" v-model="reg_val_area"/>
		</view>
		<view style="margin-top: 140rpx;">
			<zs-button :buttitle="'提交申请'" @but_cli="good"></zs-button>
		</view> 
		<u-popup v-model="show" mode="bottom">
			<view class="popup">
				<view class="popup_child">
					<view class="popup_child_it" v-for="it in provicon_data" @click="ragin(it)">
						{{it.title}}
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="show_two" mode="bottom">
			<view class="popup">
				<view class="popup_child">
					<view class="popup_child_it" v-for="it in city_data" @click="ragin_s(it)">
						{{it.title}}
					</view>
				</view>
			</view>
		</u-popup>
		<u-popup v-model="show_therr" mode="bottom">
			<view class="popup">
				<view class="popup_child">
					<view class="popup_child_it" v-for="it in area_data" @click="ragin_three(it)">
						{{it.title}}
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:false,//显示
				show_two:false,
				show_therr:false,
				reg_val:'',//地区
				reg_val_city:'',
				reg_val_area:'',
				phone:'',//电话
				name:'',
				is_city:1,//合伙人选择 '0-区域合伙人 1-城市合伙人',
				provicon_data:'',
				city_data:'',
				area_data:'',
				rogin:'',
				city_show:false,//市显示
				area_show:false,//区显示
				area_id:0,//传值
			}
		},
		onLoad() {
			this.province()
		},
		methods:{
			//选地区
			province(){
				this.$api.get('partner',{id:this.rogin}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.provicon_data = res.data
					}
				})
			},
			ragin(e){
				this.show = false
				this.reg_val = e.title
				this.$api.get('partner',{id:e.id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.city_data = res.data
						this.city_show = true
						
					}
				})
			},
			//城市
			ragin_s(e){
				this.show_two = false
				//区域合伙人
				this.reg_val_city = e.title
				//区域的话
				if(this.is_city == 1){
					this.$api.get('partner',{id:e.id}).then(res=>{
						console.log(res)
						if(res.status == 1){
							this.area_data = res.data
							this.area_show = true
						}
					})
				}else{
					this.area_id = e.id
				}
			},
			//区域
			ragin_three(e){
				this.show_therr = false
				this.reg_val_area = e.title
				this.area_id = e.id
			},
			//提交
			good(){
				let data = {
					real_name:this.name,
					mobile:this.phone,
					area_id:this.area_id,
					is_city:this.is_city
				}
				this.$api.post('partner',data).then(res=>{
					this.com.msg(res.message)
					if (res.status == 1) {
						uni.navigateBack()
					}
				})
			},
			//单选
			radio_cli(e){
				this.is_city = e
				
				this.reg_val = '',//地区
				this.reg_val_city = '',
				this.reg_val_area = '',
				this.area_id = ''
				this.city_show = false
				if(e == 2){
					this.area_show = false
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.popup{
		padding: 40rpx;text-align: center;
		.popup_child{
			height: 400rpx;
			.popup_child_it{
				height: 70rpx;line-height: 70rpx;overflow-y: scroll;font-size: 34rpx;
			}
		}
	}
	.inp_it{
		width: 100%;
		display: flex;justify-content: space-between;
		line-height: 56rpx;margin-bottom: 50rpx;
		view{
			width: 20%;text-align: center;font-size: 30rpx;
		}
		input{
			height: 56rpx;padding-left: 20rpx;margin-left: 2%;
			width: 78%;font-size: 28rpx;border: 2rpx solid #eee;
		}
	}
</style>
