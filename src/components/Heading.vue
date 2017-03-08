<template>
	<div>
	    <a href=""><img class="logo" @click="openFullScreen"
	    v-loading.fullscreen.lock="fullscreenLoading" src="../assets/logo.png"></a>
		<el-row type="flex" class="row-bg">
		  <el-col :span="24">
		  	<el-menu theme="dark" :default-active="m" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
			  <el-menu-item index="m" @click="openFullScreen" ><router-link to="/">首页</router-link></el-menu-item>
			  <el-menu-item index="news"><router-link to="/news/lastest">新闻中心</router-link></el-menu-item>
			  <el-menu-item index="pro"><router-link to="/pro/allcar">产品展示</router-link></el-menu-item>
			  <el-menu-item index="src"><router-link to="/src/baoxiu">产品服务</router-link></el-menu-item>
			  <el-submenu index="/">
			    <template slot="title">关于我们</template>
			    <el-menu-item index="emp"><router-link to="/emp">人才招聘</router-link></el-menu-item>
			    <el-menu-item index="msg"><router-link to="/msg">在线留言</router-link></el-menu-item>
			  </el-submenu>
			<div v-if="isSign">
			  <el-menu-item  class="right" index="signin"><router-link to="/signin">登录</router-link></el-menu-item>
			  <el-menu-item class="right" index="signup"><router-link to="/signup">注册</router-link></el-menu-item>
			</div>
			</el-menu>		  	
		  </el-col>
		</el-row>
	</div>
</template>

<script type="text/javascript">
  export default {
  	created () {
  		this.fullscreenLoading =true;
  		setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1000);
  	},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isSign: 1,
        fullscreenLoading: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }, 
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 1000);
      }
    }
  }
</script>

<style type="text/css">
	.el-row {
	  margin: 5px;
	}
	.right {
		position: absolute;
		left: 700px;
	}
	.logo {
		position: relative;
		right: 550px;
		border-color: #000;
	}
</style>
