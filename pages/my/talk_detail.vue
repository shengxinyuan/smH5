<template>
	<view>
		<view style="padding: 2% 3%;">
			<u-parse :html="datalsit.content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article_id:0,//文章id
				type:0,
				datalsit:''
			};
		},
		onLoad(op) {
			console.log(op)
			this.type = op.type
			this.article_id = op.id
			this.article()
		},
		methods:{
			article(){
				this.$api.get('news',{id:this.article_id,label:this.type}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.datalsit = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
