<template>
	<div class="box">
		<div class="stay">您现在所在位置:供需信息><span>询价提交</span></div>
		<div class="submitBox">
			<div class="submitTitle">询价提交</div>
			<div class="inquiryBox">
				<div class="inquiryTitle"><span>*</span>询价标题</div>
				<input type="text" placeholder="请输入询价标题" v-model="title" />
			</div>
			<div class="transverse"></div>
			<div class="labelBox">
				<div class="inquiryTitle"><span></span>我想了解</div>
				<div class="checkBox">
					<el-checkbox-group v-model="checkList" size="large">
					    <el-checkbox v-for="(item,index) in stanList" :key="index" :label="item.title"></el-checkbox>
					  </el-checkbox-group>
				</div>
			</div>
			<div class="transverse"></div>
			<div class="inquiryBox">
				<div class="inquiryTitle"><span>*</span>询价内容</div>
				<textarea placeholder="请输入您要咨询的内容" v-model="mark"></textarea>
			</div>
			<div class="transverse"></div>
			<div class="otherBox">
				<div class="otherOne">
					<div class="inquiryTitle"><span>*</span>您的公司</div>
					<input type="text" placeholder="请输入您的公司名字" v-model="company_name" />
				</div>
				<div class="otherOne">
					<div class="inquiryTitle"><span></span>公司邮箱</div>
					<input type="text" placeholder="请输入您的公司邮箱" v-model="email" />
				</div>
			</div>
			<div class="otherBox">
				<div class="otherOne">
					<div class="inquiryTitle"><span>*</span>您的姓名</div>
					<input type="text" placeholder="请输入您的您的姓名" v-model="name" />
				</div>
				<div class="otherOne">
					<div class="inquiryTitle"><span>*</span>联系电话</div>
					<input type="text" placeholder="请输入您的联系电话" v-model="mobile" />
				</div>
			</div>
			<div class="inquiryBtn" @click="putCommitInquiry()">提交询价</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				checkList:[],
				stanList:[{
					id:1,
					title:'单价'
				},{
					id:2,
					title:'产品规格'
				},{
					id:3,
					title:'型号'
				},{
					id:4,
					title:'价格条款'
				},{
					id:5,
					title:'原产地'
				},{
					id:6,
					title:'是否提供样品'
				},{
					id:7,
					title:'最小订货量'
				},{
					id:8,
					title:'交货期'
				},{
					id:9,
					title:'供货能力'
				},{
					id:10,
					title:'销售条款及附加条件'
				},{
					id:11,
					title:'包装方式'
				},{
					id:12,
					title:'质量/安全认证'
				}],
				title:'',
				email:'',
				mark:'',
				mobile:'',
				name:'',
				company_name:'',
				taglist : []
			}
		},
		methods:{
			//提交询价
			putCommitInquiry(){
				if(!this.title){
					this.$message({
							showClose: true,
							message: '请填写询价标题',
							type: 'warning'
						});
						return
				}
				if(!this.mark){
					this.$message({
							showClose: true,
							message: '请填写询价内容',
							type: 'warning'
						});
						return
				}
				if(!this.company_name){
					this.$message({
							showClose: true,
							message: '请填写公司名称',
							type: 'warning'
						});
						return
				}
				if(!this.name){
					this.$message({
							showClose: true,
							message: '请填写姓名',
							type: 'warning'
						});
						return
				}
				if(!this.mobile){
					this.$message({
							showClose: true,
							message: '请填写联系电话',
							type: 'warning'
						});
						return
				}
				
				for(let i in this.checkList){
					this.taglist.push(this.stanList[this.stanList.findIndex(item => item.title == this.checkList[i])].title)
				}
				this.$apiFun.commitInquiry({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					supply_id:this.$route.query.id,
					title:this.title,
					tags:this.taglist.join(','),
					content:this.mark,
					company_name:this.company_name,
					company_eamil:this.email,
					name:this.name,
					mobile:this.mobile
				}).then((res) => {
					if (res.code == 200) {
						this.$message({
							showClose: true,
							message: '提交成功',
							type: 'success'
						});
						this.$router.push({
							path:'/demandInquiryDet',
							query:{
								id:res.data
							}
						})
					} else {
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
	.checkBox{
		width: 1056px;
	}
	.labelBox{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px 0;
		box-sizing: border-box;
	}
	.inquiryBtn{
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
		margin-top: 71px;
	}
	.otherOne input{
		width: 460px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333;
		padding: 0 16px;
		box-sizing: border-box;
	}
	.otherOne{
		width: 550px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.otherBox{
		width: 1160px;
		margin: auto;
		margin-bottom: 36px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.inquiryBox textarea{
		width: 1064px;
		height: 101px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333;
		padding: 10px 16px;
		box-sizing: border-box;
		margin-bottom: 18px;
	}
	.transverse{
		width: 1152px;
		height: 1px;
		background-color: #ECECEC;
		margin: 12px auto;
	}
	.inquiryBox input{
		width: 1064px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333;
		padding: 0 16px;
		box-sizing: border-box;
	}
	.inquiryBox{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.inquiryTitle span{
		color: #FF4D4F;
		margin-right: 2px;
	}
	.inquiryTitle{
		font-size: 16px;
		font-weight: 500;
		color: #333333;
	}
	.submitTitle{
		font-size: 20px;
		font-weight: 500;
		color: #3389FF;
		margin-left: 11px;
		margin-bottom: 16px;
	}
	.submitBox{
		width: 1200px;
		height: 744px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin: auto;
		padding: 18px 24px 0 13px;
		box-sizing: border-box;
		margin-bottom: 160px;
	}
</style>
