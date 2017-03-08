<template>
	<div>
	<div class="content" v-for="(item,index) in list">
		<h1>{{ item.title }}</h1>
		<p>{{ item.time }}</p>
		<content>{{ item.content }}</content>
		<img :src="item.pic">

	</div>
	</div>
</template>

<script type="text/javascript">
	export default {

		created () {
			this.getNewslist();
		},
		data () {
			return  {
				news_id: 1,
				list: []

			}
		},
		methods: {
			getNewslist(){
				this.$http.get('/api/news/'+ this.news_id)
				.then((res) => {
					if(res.status === 200){
						this.list = res.data;
						console.log(this.list);
					}else{
						this.$message.error('获取列表失败')
					}
				},(err) =>{
					    this.$message.error('获取列表失败')
						console.log(err)
				})
			}
		}
	}
</script>

<style type="text/css">

</style>