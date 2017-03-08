<template>
	<div>
	  <heading></heading>
	  	<el-row type="flex" class="row-bg" justify="space-between">
		  <el-col :span="14">
	  		<el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		      <el-menu-item  index="lastest">
		      <i class="el-icon-arrow-right">
		      </i><router-link to="/news/lastest">最新资讯</router-link></el-menu-item>
		      <el-menu-item index="3"><i class="el-icon-arrow-right"></i><router-link to="/news/about">关于福特</router-link></el-menu-item>
		      <el-menu-item index="4"><i class="el-icon-arrow-right"></i><router-link to="/news/culture">品牌文化</router-link></el-menu-item>
		      <el-menu-item index="5"><i class="el-icon-arrow-right"></i><router-link to="/news/culture">持续发展</router-link></el-menu-item>
		      <el-menu-item index="6"><i class="el-icon-arrow-right"></i><router-link to="/news/culture">品牌体验</router-link></el-menu-item>
		      <el-menu-item index="7"><i class="el-icon-arrow-right"></i><router-link to="/news/culture">反馈服务</router-link></el-menu-item>
		    </el-menu>
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
				activeIndex: '1'
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
	.side-bar {	
		margin: 4px;
	}
</style>
