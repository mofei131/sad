<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">提问详情</div>
			<div class="abCon"></div>
			<!-- <div class="problemDetTop">
				<div class="problemLi">
					<div class="ifonDet"><span>公司名称：</span>潍坊广未汽车有限公司</div>
					<div class="ifonDet"><span>所属行业：</span>工程设计</div>
				</div>
				<div class="problemLi2">
					<div class="ifonDet"><span>联系人：</span>张三</div>
					<div class="ifonDet"><span>联系电话：</span>15487487988</div>
					<div class="ifonDet"><span>电子邮箱：</span>154874879@qq.com</div>
				</div>
			</div> -->
			<div class="themeBox">
				<div class="themetop">
					<div>{{companyAskInfo[0].ask_title}}</div>
					<div>{{companyAskInfo[0].create_time}}</div>
				</div>
				<div class="themeCon">
					{{companyAskInfo[0].ask_content}}
				</div>
			</div>
			<div class="callBackOutside">
				<div class="callBackBox" v-for="(item,index) in companyAskInfo[1]" :key="index">
					<div class="problemLi2">
						<div class="ifonDet"><span>专家姓名：</span>{{item.expert_info.realname}}</div>
						<div class="ifonDet"><span>联系电话：</span>{{item.expert_info.mobile}}</div>
						<div class="ifonDet"><span>电子邮箱：</span>{{item.expert_info.email}}</div>
					</div>
					<div class="problemLi2">
						<div class="ifonDet"><span>工作单位：</span>{{item.expert_info.company_name}}</div>
						<div class="ifonDet"><span>工作职称：</span>{{item.expert_info.technical_title}}</div>
						<div class="ifonDet"></div>
					</div>
					<div class="callBack">
						<div class="callBackTitle">回复内容</div>
						<textarea :value="item.answer_content"></textarea>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				companyAskInfo:''
			}
		},
		created() {
			this.getCompanyAskInfo()
		},
		methods: {
			//获取问题详情
			getCompanyAskInfo(){
				this.$apiFun.companyAskInfo({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					id:this.$store.state.questionId,
				}).then((res) => {
					if(res.code == 200){
						console.log(res.data)
						this.companyAskInfo = res.data
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
	.callBackOutside{
		height: 400px;
		width: 722px;
		margin: auto;
		overflow: scroll;
	}
	.callBackOutside::-webkit-scrollbar,.hyright::-webkit-scrollbar {/*隐藏滚轮*/
	display: none;
	}
	.callBackBox{
		width: 722px;
		height: 212px;
		background: #FFFFFF;
		border: 1px solid #E7E7E7;
		margin: auto;
		padding-top: 12px;
		box-sizing: border-box;
		margin-bottom: 12px;
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
		/* border-bottom: 1px solid #E7E7E7; */
		margin: auto;
		height: 130px;
		overflow: scroll;
		margin-bottom: 10px;
	}
	.themeBox::-webkit-scrollbar,.hyright::-webkit-scrollbar {/*隐藏滚轮*/
	display: none;
	}
	.problemLi2{
		width: 698px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		margin-bottom: 12px;
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
