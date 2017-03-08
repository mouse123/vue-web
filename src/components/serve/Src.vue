<template>
	<div>
	<heading></heading>
	  	<el-row type="flex" class="row-bg" justify="space-between">
		  <el-col :span="12">
	  		<el-menu  default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		      <el-menu-item index="2"><i class="el-icon-arrow-right"></i><router-link to="/src/baoxiu">保修服务</router-link></el-menu-item>
		      <el-menu-item index="7"><i class="el-icon-arrow-right"></i><router-link to="/src/guide">用车指南</router-link></el-menu-item>
		      <el-menu-item index="3"><i class="el-icon-arrow-right"></i><router-link to="/src/cserver">客户服务</router-link></el-menu-item>
		      <el-menu-item index="4"><i class="el-icon-arrow-right"></i><router-link to="/src/rcall">车辆召回</router-link></el-menu-item>
		      <el-menu-item index="5"><i class="el-icon-arrow-right"></i><router-link to="/src/keep">保养套餐</router-link></el-menu-item>
		    </el-menu>
		  </el-col>
		  </el-col>
	    </el-row>
	   <router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import heading from '../Heading'
	export default {
	components: { heading },
		data () {
		return {
		}
	},
	methods: {
		handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      }
	}
	}
</script>

<style type="text/css">
	
</style>
