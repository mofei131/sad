<template>
	<div class="box">
		<div class="stay">
			您现在所在位置:资讯中心><span>个人中心</span>
		</div>
		<div class="personalBox">
			<div class="personalBoxLeft">
				<img class="headerImg" :src="userInfo.avater?userInfo.avater:headImg" >
				<div class="unit" v-if="userInfo.role == 1">{{userInfo.realname}}</div>
				<div class="unit" v-else>{{userInfo.enterprise_name}}</div>
				<div class="vipCard">{{role}}</div>
				<div class="personalUl">
					<div :class="liIndex == index?'personalLi2':'personalLi'" v-for="(item,index) in navList" :key="index" 
					 @click="swichCard(item,index)" >
						<div class="personalLinFelx">
							<img :src="item.icon" />
							<div class="personalLeftTitle">{{item.title}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="personalBoxright">
				<!-- 修改密码 -->
				<change-Password v-if="sum == 0"></change-Password>
				<!-- 专家资料 -->
				<expert-Information v-if="sum == 1"></expert-Information>
				<!-- 企业资料 -->
				<enterprise-Information v-if="sum == 2"></enterprise-Information>
				<!-- 服务商资料 -->
				<service-Provider-Information v-if="sum == 3"></service-Provider-Information>
				<!-- 服务机构认证 -->
				<service-Provider-Certification v-if="sum == 4"></service-Provider-Certification>
				<!-- 企业认证 -->
				<enterprise-Certification v-if="sum == 5"></enterprise-Certification>
				<!-- 问题提问列表 -->
				<problem-List @change="protoDet($event)" v-if="sum == 6"></problem-List>
				<!-- 问题提问详情 -->
				<problem-Det v-if="sum == 7"></problem-Det>
				<!-- 问题回复列表 -->
				<question-List @change="quetoDet($event)" v-if="sum == 8"></question-List>
				<!-- 问题回复详情 -->
				<put-Question-List v-if="sum == 9"></put-Question-List>
				<!-- 供应列表 -->
				<supply-List @change="supplyDet($event)" v-if="sum == 10"></supply-List>
				<!-- 需求列表 -->
				<emand-List @change="emandtoDet($event)" v-if="sum == 11"></emand-List>
				<!-- 需求二级列表 -->
				<demand-Info-List v-if="sum == 12"></demand-Info-List>
				<!-- 供应二级列表 -->
				<supply-Info-List v-if="sum == 13"></supply-Info-List>
			</div>
		</div>
	</div>
</template>

<script>
	import changePassword from './changePassword.vue'
	import expertInformation from './expertInformation.vue'
	import enterpriseInformation from './enterpriseInformation.vue'
	import serviceProviderInformation from './serviceProviderInformation.vue'
	import serviceProviderCertification from './serviceProviderCertification.vue'
	import enterpriseCertification from './enterpriseCertification.vue'
	import problemList from './problemList.vue'
	import problemDet from './problemDet.vue'
	import putQuestionList from './putQuestionList.vue'
	import questionList from './questionList.vue'
	import supplyList from './supplyList.vue'
	import emandList from './emandList.vue'
	import demandInfoList from './demandInfoList.vue'
	import supplyInfoList from './supplyInfoList.vue'
	export default{
		components:{
			changePassword,//修改密码
			expertInformation,//专家资料
			enterpriseInformation,//企业资料
			serviceProviderInformation,//服务商资料
			serviceProviderCertification,//服务商认证
			enterpriseCertification,//企业认证
			problemList,//问题回复列表
			problemDet,//问题回复详情
			questionList,//问题提问列表
			putQuestionList,//问题提问详情
			supplyList,//供应列表
			emandList,//需求列表
			demandInfoList,//需求二级列表
			supplyInfoList,//供应二级列表
		},
		data() {
			return{
				sum:13,//右侧展示模块
				navList:[{
					id:0,
					title:'企业资料',
					icon:require('../../assets/images/personalicon0.png')
				},{
					id:1,
					title:'个人资料',
					icon:require('../../assets/images/personalicon0.png')
				},{
					id:8,
					title:'服务机构资料',
					icon:require('../../assets/images/personalicon0.png')
				},{
					id:2,
					title:'修改密码',
					icon:require('../../assets/images/personalicon1.png')
				},{
					id:3,
					title:'企业认证',
					icon:require('../../assets/images/personalicon2.png')
				},{
					id:4,
					title:'服务机构认证',
					icon:require('../../assets/images/personalicon2.png')
				},{
					id:5,
					title:'提问列表',
					icon:require('../../assets/images/personalicon3.png')
				},{
					id:6,
					title:'需求信息',
					icon:require('../../assets/images/personalicon4.png')
				},{
					id:7,
					title:'供应信息',
					icon:require('../../assets/images/personalicon5.png')
				}],
				liIndex:0,
				userInfo:'',
				role:'会员',//角色
				headImg:require('../../assets/images/headerImg.png'),//本地默认头像
			}
		},
		mounted() {
			this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
			if(this.userInfo.role == 1){
				this.role = '专家级会员'
				this.sum = 1
				this.navList.splice(this.navList.findIndex(item => item.id == 0), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 3), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 4), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 6), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 7), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 8), 1)
			}
			if(this.userInfo.role == 2){
				this.role = '企业级会员'
				this.sum = 0
				this.navList.splice(this.navList.findIndex(item => item.id == 1), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 4), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 8), 1)
			}
			if(this.userInfo.role == 3){
				this.role = '服务机构会员'
				this.sum = 3
				this.navList.splice(this.navList.findIndex(item => item.id == 0), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 1), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 3), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 5), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 6), 1)
				this.navList.splice(this.navList.findIndex(item => item.id == 7), 1)
			}
			if(this.$route.query.id){
				// console.log(this.$route.query)
				this.swichCard(this.$route.query,this.$route.query.index)
			}
		},
		methods:{
			//供应列表切换详情
			supplyDet(value){
				this.$store.state.supplyId = value
				if(value){
					this.sum = 13
				}
			},
			//需求列表切换详情
			emandtoDet(value){
				console.log(value)
				this.$store.state.emandId = value
				if(value){
					this.sum = 12
				}
			},
			//专家列表切换详情
			protoDet(value){
				this.$store.state.problemId = value
				if(value){
					this.sum = 7
				}
			},
			//问题列表详情
			quetoDet(value){
				this.$store.state.questionId = value
				if(value){
					this.sum = 9
				}
			},
			//切换选项卡
			swichCard(item,index){
				this.liIndex = index
				if(this.userInfo.role == 1){
					if(item.id == 0){
						this.sum = 2
					}else if(item.id == 1){
						this.sum = 1
					}else if(item.id == 2){
						this.sum = 0
					}else if(item.id == 3){
						this.sum = 5
					}else if(item.id == 4){
						this.sum = 4
					}else if(item.id == 5){
						this.sum = 6
					}else if(item.id == 6){
						this.sum = 11
					}else if(item.id == 7){
						this.sum = 10
					}
				}else if(this.userInfo.role == 2){
					if(item.id == 0){
						this.sum = 2
					}else if(item.id == 1){
						this.sum = 1
					}else if(item.id == 2){
						this.sum = 0
					}else if(item.id == 3){
						this.sum = 5
					}else if(item.id == 4){
						this.sum = 4
					}else if(item.id == 5){
						this.sum = 8
					}else if(item.id == 6){
						this.sum = 11
					}else if(item.id == 7){
						this.sum = 10
					}
				}else if(this.userInfo.role == 3){
					if(item.id == 8){
						this.sum = 3
					}else if(item.id == 2){
						this.sum = 0
					}else if(item.id == 4){
						this.sum = 4
					}
				}
			}
		}
	}
</script>

<style scoped>
	.personalLinFelx div{
		width: 110px;
		text-align: start;
	}
	.personalLinFelx img{
		width: 26px;
		height: 26px;
		margin-right: 10px;
	}
	.personalLinFelx{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.personalLi2{
		width: 285px;
		height: 47px;
		font-weight: 400;
		color: #1894FD;
		font-size: 16px;
		background: #E0F0FF;
		box-shadow: 0px 0px 10px 0px rgba(234, 234, 234, 0.5);
		border-left: 4px solid #2298FF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.personalLi{
		width: 285px;
		height: 47px;
		font-weight: 400;
		color: #333333;
		font-size: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.vipCard{
		width: 120px;
		font-weight: 400;
		color: #FFFFFF;
		font-size: 14px;
		margin: auto;
		text-align: center;
		padding: 1px 14px;
		box-sizing: border-box;
		background: #1890FF;
		border-radius: 11px;
		margin-bottom: 16px;
	}
	.unit{
		font-weight: 500;
		color: #484848;
		font-size: 16px;
		text-align: center;
		margin-bottom: 13px;
	}
	.headerImg{
		width: 100px;
		height: 100px;
		margin: auto;
		display: block;
		margin-bottom: 10px;
	}
	.personalBoxLeft{
		width: 285px;
		height: 625px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 6px;
		padding-top: 24px;
		box-sizing: border-box;
	}
	.personalBox{
		width: 1200px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin: auto;
		margin-bottom: 100px;
	}
</style>
