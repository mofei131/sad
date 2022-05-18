<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">问题详情</div>
			<div class="abCon"></div>
			<div class="problemDetTop">
				<div class="problemLi">
					<div class="ifonDet"><span>公司名称：</span>{{expertAskInfo.user_info.enterprise_name}}</div>
					<div class="ifonDet"><span>所属行业：</span>{{expertAskInfo.user_info.industry_id}}</div>
				</div>
				<div class="problemLi2">
					<div class="ifonDet"><span>联系人：</span>{{expertAskInfo.user_info.realname}}</div>
					<div class="ifonDet"><span>联系电话：</span>{{expertAskInfo.user_info.company_phone}}</div>
					<div class="ifonDet"><span>电子邮箱：</span>{{expertAskInfo.user_info.email}}</div>
				</div>
			</div>
			<div class="themeBox">
				<div class="themetop">
					<div>{{expertAskInfo.ask_title}}</div>
					<div>{{expertAskInfo.create_time}}</div>
				</div>
				<div class="themeCon">
					{{expertAskInfo.ask_content}}
				</div>
			</div>
			<div class="callBack">
				<div class="callBackTitle">回复</div>
				<textarea placeholder="请输入回复内容" v-model="content" ></textarea>
			</div>
			<div class="callBackBtn" @click="getExpertAnswerAsk()">发送</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				expertAskInfo:'',
				options:[],
				industryCate:'',
				content:''
			}
		},
		created() {
			this.getIndustryCate()
		},
		methods: {
			//回答
			getExpertAnswerAsk(){
				if(!this.content){
					this.$message({
							showClose: true,
							message: '请输入回答内容',
							type: 'warning'
						});
						return
				}
				this.$apiFun.expertAnswerAsk({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					id:this.$store.state.problemId,
					answer_content:this.content
				}).then((res) => {
					if(res.code == 200){
						this.$message({
								showClose: true,
								message: '发送成功',
								type: 'success'
							});
							location.reload()
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//获取所属行业
			getIndustryCate(){
				this.$apiFun.industryCate().then((res) => {
					if(res.code == 200){
						this.options = res.data
						this.getExpertAskInfo()
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//获取问题详情
			getExpertAskInfo(){
				this.$apiFun.expertAskInfo({
					id:this.$store.state.problemId
				}).then((res) => {
					if(res.code == 200){
						console.log(res.data)
						this.expertAskInfo = res.data
						this.expertAskInfo.user_info.industry_id = this.options[this.options.findIndex(item => item.id == this.expertAskInfo.user_info.industry_id)].name
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
	.themeCon{
		font-size: 14px;
		font-weight: 400;
		color: #666666;
		line-height: 26px;
	}
	.callBackBtn{
		width: 180px;
		height: 44px;
		background: #2298FF;
		border-radius: 4px;
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		cursor: pointer;
	}
	.callBack textarea{
		width: 698px;
		height: 94px;
		background: #FFFFFF;
		border: 1px solid #E7E7E7;
		padding: 8px;
		box-sizing: border-box;
		font-size: 14px;
		font-weight: 400;
		color: #666666;
	}
	.callBackTitle{
		font-size: 16px;
		font-weight: 500;
		color: #1890FF;
		margin-bottom: 6px;
	}
	.callBack{
		width: 698px;
		margin: auto;
		margin-bottom: 53px;
	}
	.themetop div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #777777;
	}
	.themetop div:nth-child(1){
		width: 600px;
		font-size: 16px;
		font-weight: 600;
		color: #333333;
		line-height: 22px;
		letter-spacing: 1px;
	}
	.themetop{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 15px;
	}
	.themeBox{
		width: 722px;
		padding: 18px 0;
		box-sizing: border-box;
		border-bottom: 1px solid #E7E7E7;
		margin: auto;
		height: 149px;
		overflow: scroll;
		margin-bottom: 30px;
	}
	.themeBox::-webkit-scrollbar,.hyright::-webkit-scrollbar {/*隐藏滚轮*/
	display: none;
	}
	.problemLi2{
		width: 722px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.problemLi span,.problemLi2 span{
		font-size: 16px;
		font-weight: bold;
		color: #444444;
	}
	.problemLi{
		width: 722px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 99px;
		font-size: 16px;
		font-weight: 400;
		color: #444444;
		margin-bottom: 22px;
	}
	.problemDetTop{
		padding-top: 15px;
		border-bottom: 1px solid #E7E7E7;
		width: 722px;
		height: 103px;
		margin: auto;
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
