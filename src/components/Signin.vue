<template>
	<div>
	<heading></heading>
		<el-row type="flex" class="row-bg" justify="center" >
		  <el-col :span="6"></el-col>
		  <el-col :span="6">
		  	<div class="sign">
			    <h3>欢迎登录</h3>
				<el-input v-model="user" placeholder="请输入用户名" ></el-input>
				<el-input v-model="password" placeholder="请输入用户名" type="password" ></el-input>
				<el-button type="success" :plain="true" @click="LoginToDo">登录</el-button>
			</div>
		  </el-col>
		  <el-col :span="6"></el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
import heading from './Heading'
	export default {
	  components: { heading },
	  data () {
	    return {
	      user: '',
	      password: '',
	    }
	  },
	  methods: {
	  	LoginToDo () {

	  	}
	  }
	}
</script>

<style type="text/css">
	.el-input {
		margin: 16px;
	}
</style>
