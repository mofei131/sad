<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">提问列表</div>
			<div class="abCon"></div>
			<div class="problemLi" v-for="(item,index) in companyAskList" :key="index" @click="toDet(item.id)" >
				<div class="problemLiLeft">
					<div>{{item.ask_title}}</div>
					<div>{{item.create_time}}</div>
				</div>
				<div class="problemLiRight">
					<div>{{item.ask_content}}</div>
					<div>收到{{item.count}}条回复</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				companyAskList:[]
			}
		},
		created() {
			this.getCompanyAskList()
		},
		methods: {
			//切换详情
			toDet(e){
				this.$emit('change',e);
			},
			//获取提问列表
			getCompanyAskList(){
				this.$apiFun.companyAskList({
					page:1,
					limit:1000,
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
				}).then((res) => {
					if(res.code == 200){
						console.log(res.data)
						this.companyAskList = res.data
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
	.problemLiRight div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #FF6D6E;
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
