<template>
	<div class="box">
		<div class="textBox">
			<div v-html="content"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				content:''
			}
		},
		created() {
			this.$apiFun.commonConfig().then((res) => {
				if(res.code == 200){
					console.log(res)
					this.content = this.$globalMethod.showHtml(res.data.xieyi)
				}else{
					this.$message({
							showClose: true,
							message: res.message,
							type: 'error'
						});
				}
			})
		}
	}
</script>

<style scoped>
	.textBox{
		width: 1200px;
		margin: auto;
	}
	.box{
		min-height: 600px;
	}
</style>
