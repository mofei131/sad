<template>
	<div class="box">
		<div class="stay">您现在所在位置:供需信息><span>报价报价</span></div>
		<div class="submitBox">
			<div class="submitTitle">报价提交</div>
			<div class="inquiryBox">
				<div class="inquiryTitle"><span>*</span>报价标题</div>
				<input type="text" placeholder="请输入报价标题" v-model="title" />
			</div>
			<div class="transverse"></div>
			<div class="inquiryBox">
				<div class="inquiryTitle"><span>*</span>报价内容</div>
				<textarea placeholder="请输入报价内容" v-model="mark"></textarea>
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
			<div class="inquiryBtn" @click="putCommitInquiry()">提交报价</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				name:'',
				email:'',
				mark:'',
				title:'',
				mobile:'',
				company_name:''
			}
		},
		methods:{
			//提交报价
			putCommitInquiry(){
				if(!this.title){
					this.$message({
							showClose: true,
							message: '请填写报价标题',
							type: 'warning'
						});
						return
				}
				if(!this.mark){
					this.$message({
							showClose: true,
							message: '请填写报价内容',
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
				this.$apiFun.commitOffer({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					need_id:this.$route.query.id,
					title:this.title,
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
							path:'/inquiryDet',
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
		margin-top: 11px;
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
		height: 572px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin: auto;
		padding: 18px 24px 0 13px;
		box-sizing: border-box;
		margin-bottom: 160px;
	}
</style>
