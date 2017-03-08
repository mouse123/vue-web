<template>
	<div>
		<heading></heading>
		<el-carousel indicator-position="outside" height="700px">
		    <el-carousel-item v-for="(item,index) in picList">
		     <img :src="item.url">
		   </el-carousel-item>
		 </el-carousel>
	</div>
</template>

<script type="text/javascript">
	import heading from './Heading'
	export default {
		components: { heading },
		data () {
			return {
				picList: [
		        {
		      	url: require('../assets/car1.jpg')
		      	},	
		      	{
		      	url: require('../assets/car2.jpg')
		      	},	
		      	{
		      	url: require('../assets/car3.jpg')
		      	},
		      	{
		      	url: require('../assets/car4.jpg')
		      	}
		      	]
			}
		}
	}
</script>

<style scoped>
	
</style>
