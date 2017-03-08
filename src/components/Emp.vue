<template>
	<div>
		<heading></heading>
		<content>
			<h1>诚聘英才</h1>
			<h3>让我们一起创新我们的未来，就在今天！</h3>
			<h4>福特汽车公司是一个全球大家庭，在这里有一群充满激情、专注投入的成员，他们正在引领全球创新，并致力于建设一个更美好的世界。
			</h4>
			<h4>
			今天就来加入我们，发现机遇、面对挑战、收获成果 -- 打造明天的领袖！</h4>
		</content>
		<img src="../assets/logo.png">
		<el-row type="flex" class="row-bg" justify="space-around">
		  <el-col :span="6">
		  	<h3>福特汽车校园招聘</h3>
		  	<a href="">查看职位信息
		  	<i class="el-icon-edit"></i>
		  	</a>
		  </el-col>
		  <el-col :span="6">
		  	<h3>长安福特校园招聘</h3>
		  	<a href="">查看职位信息
		  	<i class="el-icon-edit"></i>
		  	</a>
		  </el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
	import heading from './Heading'
	export default {
		components: { heading }
	}
</script>

<style type="text/css">
	content {
		width: 600px;
	}
	a {
		text-decoration: none;
	}
</style>
