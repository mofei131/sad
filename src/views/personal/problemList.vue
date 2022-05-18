<template>
	<div class="box">
		<div class="exifBox">
			<!-- <div class="exinTitle">问题列表</div> -->
			<div class="carlist">
				<div :class="reply?'reply':'noreply'" @click="putReply(0)">未回复</div>
				<div :class="reply?'noreply':'reply'" @click="putReply(1)">已回复</div>
			</div>
			<div class="abCon"></div>
			<div class="problemLi" @click="toDet(item.id)" v-for="(item,index) in expertAskList" :key="index">
				<div class="problemLiLeft">
					<div>{{item.ask_title}}</div>
					<div>{{item.create_time}}</div>
				</div>
				<div class="problemLiRight">
					<div>{{item.ask_content}}</div>
					<div>{{item.company_name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				expertAskList:[],
				page:1,
				limit:1000,
				reply:true
			}
		},
		created() {
			this.getExpertAskList()
		},
		methods: {
			//切换详情
			toDet(e){
				this.$emit('change',e);
			},
			//切换
			putReply(e){
				if(e == 0){
					this.reply = true
					this.getExpertAskList()
				}else{
					this.reply = false
					this.getExpertAskList()
				}
			},
			//获取问题列表
			getExpertAskList(){
				this.$apiFun.expertAskList({
					page:this.page,
					limit:this.limit,
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					is_answer:this.reply?0:1
				}).then((res) => {
					if(res.code == 200){
						console.log(res.data)
						this.expertAskList = res.data
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
	.noreply{
		width: 80px;
		height: 28px;
		background: #fff;
		border-radius: 2px;
		font-size: 20px;
		font-weight: 400;
		color: #333;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.reply{
		width: 80px;
		height: 28px;
		background: #1890FF;
		border-radius: 2px;
		font-size: 20px;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.carlist{
		display: flex;
		align-items: center;
		margin-bottom: 8px;
		width: 180px;
		justify-content: space-between;
		margin-left: 84px;
	}
	.problemLiRight div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #1890FF;
	}
	.problemLiRight div:nth-child(1){
		width: 500px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		font-size: 14px;
		font-weight: 400;
		color: #666666;
	}
	.problemLiLeft{
		margin-bottom: 14px;
	}
	.problemLiLeft div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #777777;
	}
	.problemLiLeft div:nth-child(1){
		width: 420px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		font-size: 16px;
		font-weight: 600;
		color: #333333;
		letter-spacing: 1px;
	}
	.problemLiLeft,.problemLiRight{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.problemLi{
		width: 722px;
		height: 84px;
		border-bottom: 1px solid #E7E7E7;
		padding: 11px 0;
		box-sizing: border-box;
		margin: auto;
		cursor: pointer;
	}
	.abCon{
		width: 722px;
		height: 1px;
		background-color: #1890FF;
		margin: auto;
		margin-bottom: 12px;
	}
	.exinTitle{
		font-size: 20px;
		font-weight: 400;
		color: #1890FF;
		margin: 0 0 8px 94px;
	}
	.exifBox{
		width: 895px;
		height: 625px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 4px 4px 0px 0px;
		padding-top: 24px;
		box-sizing: border-box;
	}
</style>
