<template>
	<div class="box">
		<div class="stay">
			您现在所在位置:资讯中心><span>行业资讯</span>
		</div>
		<div class="infoDetCon">
			<div class="title">{{infoDet.name}}</div>
			<div class="time">{{infoDet.create_time}}</div>
			<div class="con" v-html="infoDet.info"></div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				infoDet:{},
			}
		},
		mounted() {
			this.getMessageInfo()
		},
		methods:{
			//获取通知公告详情
			getMessageInfo(){
				this.$apiFun.messageInfo({
					id:this.$route.query.id
				}).then((res) => {
					if(res.code == 200){
						// console.log(res.data)
						this.infoDet = res.data
						if(this.infoDet.length != 0){
							this.infoDet.info = this.$globalMethod.showHtml(this.infoDet.info)
						}
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
	}
</script>

<style scoped>
	.time{
		font-weight: 400;
		color: #777777;
		font-size: 14px;
		padding-top: 14px;
		margin-bottom: 24px;
		text-align: center;
	}
	.title{
		text-align: center;
		font-weight: 600;
		color: #333333;
		letter-spacing: 2px;
		font-size: 24px;
	}
	.infoDetCon{
		width: 1200px;
		margin: auto;
		padding: 32px 15px 39px 28px;
		box-sizing: border-box;
		margin-bottom: 226px;
		background-color: #fff;
	}
	.stay span{
		color: #1890FF;
		margin-left: 5px;
	}
	.stay{
		width: 1200px;
		margin: auto;
		margin-bottom: 12px;
		color: #333333;
		font-size: 12px;
	}
</style>
