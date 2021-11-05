<template>
	<view>
		<view style="padding: 3%;">
			<u-parse :html="content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			content:{}
		}
	}
</script>

<style lang="scss" scoped>

</style>
