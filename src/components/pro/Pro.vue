<template>
	<div>
	<heading></heading>
	  	<el-row type="flex" class="row-bg" justify="space-between">
		  <el-col :span="12">
		  	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" mode="horizontal">
		      <el-menu-item index="2"><i class="el-icon-arrow-right"></i><router-link to="/pro/allcar">全系车型</router-link></el-menu-item>
		      <el-menu-item index="7"><i class="el-icon-arrow-right"></i><router-link to="/pro/saloon">轿车</router-link></el-menu-item>
		      <el-menu-item index="3"><i class="el-icon-arrow-right"></i><router-link to="/pro/suv">SUV</router-link></el-menu-item>
		      <el-menu-item index="4"><i class="el-icon-arrow-right"></i><router-link to="/pro/mpv">MPV</router-link></el-menu-item>
		      <el-menu-item index="5"><i class="el-icon-arrow-right"></i><router-link to="/pro/xn">性能车</router-link></el-menu-item>
		      <el-menu-item index="6"><i class="el-icon-arrow-right"></i><router-link to="/pro/business">商用车</router-link></el-menu-item>
		    </el-menu>
		  </el-col>
		  </el-col>
		  <el-col :span="10">

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
		handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	}
}
</script>
	
<style type="text/css">
	
</style>
