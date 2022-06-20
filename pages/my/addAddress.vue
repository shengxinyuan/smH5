<template>
	<view class="content">
		<view class="p2">
			<view class="item" >
				<text>收件人</text>
				<view class="right">
					<input type="text" v-model="editForm.username" placeholder="请输入收件人姓名" />
				</view>
			</view>
			<view class="item ">
				<text>联系电话</text>
				<view class="right">
					<input type="text" v-model="editForm.mobile" placeholder="请输入联系电话" maxlength="11"/>
				</view>
			</view>
			<view class="item ">
				<text>地区</text>
				<view class="right" >
					<input type="text" v-model="regions" placeholder="请选择 ＞" :disabled="true" @click="show = true"/>
				</view>
				<u-picker v-model="show" mode="region" @confirm="yes_addres"></u-picker>
			</view>
			<view class="item ">
				<text>详细地址</text>
				<view class="right">
					<textarea  v-model="editForm.address" nowrap="10" placeholder="请填写详细地址" />
				</view>
			</view>
			<view class="item ">
				<text>地址标签</text>
				<view class="right">
					<view :class="{act:labind == 1}" @click="label(1)">家</view>
					<view :class="{act:labind == 2}" @click="label(2)">公司</view>
				</view>
			</view>
			<!-- <view class="item ">
				<text>收件人真实姓名</text>
				<view class="right">
					<input type="text" v-model="Realityname" placeholder="请输入真实姓名,负责会导致不能收货" />
				</view>
			</view> -->
			<!-- <view class="item ">
				<text>身份证号码</text>
				<view class="right">
					<input type="text" v-model="idcard" placeholder="请输入有效身份证号码" maxlength="18"/>
				</view>
			</view> -->
			<view class="item item-bd"> <!-- v-if="address_id == 0 ? true : false" -->
				<text>设置默认地址</text>
				<view class="right">
					<switch :checked="address_mor==1?true:false" style="transform:scale(0.9)" @change="Change" color="#1e2f64" />
				</view>
			</view>
		</view>
		<view>
			<button class="btn_sty" v-if="but_true" >保存</button>
			<button class="btn" v-else @click="save">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				pcd: 'fdsdsaf',
				detail:"",
				detail1:"",
				detail2:"",
				editForm:{
					username: '',
					mobile: '',
					address: ''
				},
				Realityname:'',//真实姓名
				idcard:'',//身份证
				regions:'',
				province:'',//省
				city:'',//市
				area:'',//区
				address_type:0, //	0-非默认 1-默认
				address_id:'',
				address_mor:0,
				labind:0,
				is_mine:1, //0-不是自己的 1-自己的
			}
		},
		onLoad(op) {
			this.is_mine = op.is_mine
			// console.log(JSON.parse(op.type))
			let arr = JSON.parse(op.type)
				this.editForm.username = arr.contact
				this.editForm.mobile = arr.mobile
				this.regions = arr.province+'-'+ arr.city +'-'+arr.area
				this.editForm.address = arr.address
				this.labind = arr.label
				this.Realityname = arr.truename
				this.idcard = arr.id_number
				this.address_mor  = arr.is_default
				this.address_id = arr.id
		},
		computed:{
			but_true(){
				let arr
				if(this.editForm.username =='' || this.editForm.mobile == '' || this.editForm.address == '' || this.regions == ''){
					arr = true
				}else{
					arr = false
				}
				return arr
			},
		},
		methods:{
			//标签
			label(e){
				this.labind = e
			},
			//地区
			yes_addres(e){
				this.province = e.province.label
				this.city = e.city.label
				this.area = e.area.label
				this.regions = this.province+'-'+this.city+'-'+this.area
			},
			// 监听switch开关状态变化
			Change(e){
				console.log(e.detail.value)
				if(e.detail.value == true){
					this.address_type = 1
					// console.log(this.address_type)
				}else{
					this.address_type = 0
					// console.log(this.address_type)
				}
			},
			//地址接口
			address_reader(){
				let data = {
					contact:this.editForm.username,
					mobile:this.editForm.mobile,
					province:this.province,
					city:this.city,
					area:this.area,
					address:this.editForm.address,
					label:this.labind,
					address_id:this.address_id,//地址id，修改传
					truename:this.Realityname,
					id_number:this.idcard,
					is_mine:this.is_mine,
					is_default:this.address_type
				}
				this.$api.post('address',data).then(res=>{
					uni.showToast({ icon:'none', title: res.message })
					if(res.status == 1){
						uni.navigateBack()
					}
				})
			},
			//保存
			save(){
				if(!(/^1[345678]\d{9}$/.test(this.editForm.mobile))){
					uni.showToast({
						title:'手机号不正确',icon:'none'
					})
					return
				}
				this.address_reader()
			},
		}
	}
</script>
<style>
	page{
		background-color: #f6f6f6;
	}
</style>
<style lang="scss">
	.content {
		width: 100%;
		.p2{

			.item{
				width: 100%;line-height: 88rpx;padding: 0 20rpx;
				display: flex;
				justify-content: space-between;
				background-color: #fff;
				border-bottom: 2rpx solid #F6F6F6;
				.right{
					display: flex;
					align-items: center;
					display: flex;
					textarea{
						width: 540rpx;padding: 28rpx 0;font-size: 28rpx;
						height: 180rpx;
					}
					input{
						width: 480rpx;
						font-size: 28rpx;text-align: right;
					}
					view{
						width: 140rpx;
						height: 60rpx;line-height: 60rpx;border-radius: 50rpx;border: 1px solid #999;color: #999;text-align: center;margin: 0 20rpx;
					}
					.act{
						color: #1e2f64;border: 1px solid #1e2f64;
					}
				}
			}
			.item:nth-child(5){
				margin-top: 24rpx;
			}
			.item:last-child{
				margin-top: 24rpx;
			}
			.item-bd{
				border-bottom: none;
			}
		}
		.btn{
			position: fixed;
			left: 30rpx;
			bottom: 65rpx;
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background-color: #1e2f64;
			color: #fff;
			border-radius: 60rpx;
		}
		.btn_sty{
			position: fixed;
			left: 30rpx;
			bottom: 65rpx;
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			background-color: #999;
			color: #fff;
			border-radius: 60rpx;
		}
	}
</style>
