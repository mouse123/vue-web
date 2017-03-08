<template>
	<div>
		<heading></heading>
		<el-row type="flex" class="msg">
		  <el-col :span="8"></el-col>
		  <el-col :span="7"><el-input type="textarea" v-model="input" placeholder="你想对福特说什么"></el-input></el-col>
		  <el-col :span="2">
		  	<el-button class="sub"type="info">提交</el-button>
		  </el-col>
		</el-row>
		<content>
			内容区
		</content>
		
	</div>
</template>

<script type="text/javascript">
	import heading from './Heading'
	export default {
		components: { heading },
		data () {
			return {
				input: ''
			}
		}
	}
</script>

<style type="text/css">
	.msg {
		margin: 30px;
	}
	.sub {
		padding-top: 10px;
	}

</style>
