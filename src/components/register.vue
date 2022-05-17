<template>
	<div class="box">
		<div class="loginBox">
			<img class="login" src="../assets/images/logo2.png" >
			<div class="mode">
				<div :class="mode == 1?'modeOne':'modeTwo'" @click="mode = 1">专家注册</div>
				<div :class="mode == 2?'modeOne':'modeTwo'" @click="mode = 2">服务机构注册</div>
				<div :class="mode == 3?'modeOne':'modeTwo'" @click="mode = 3">企业注册</div>
			</div>
			<div class="account">
				<div class="userBox">
					<img src="../assets/images/usernameicon.png" >
					<input type="text" placeholder="请输入账号" v-model="username" />
				</div>
				<div class="userBox">
					<img src="../assets/images/passwordicon.png" >
					<input type="password" placeholder="请输入密码" v-model="password" />
				</div>
				<div class="userBox">
					<img src="../assets/images/passwordicon.png">
					<input type="password" placeholder="请确认密码" v-model="password2"  />
				</div>
				<div class="userBox">
					<img src="../assets/images/usernameicon.png" >
					<input type="number" placeholder="请输入手机号" v-model="mobile" />
				</div>
				<div class="codeBox">
					<div class="codeBoxleft">
						<img src="../assets/images/passwordicon.png" >
						<input type="number" placeholder="请输入验证码" v-model="code" />
					</div>
					<div class="countdown" @click="timing">{{countdown}}</div>
				</div>
			</div>
				<div class="agreementBox">
					<img :src="select?images.select:images.selectNo" @click="select = !select">
					<div class="read">我已阅读并同意备份</div>
					<div class="toag">《服务协议》</div>
					<div class="toag">跟</div>
					<div class="toag">《隐私政策》</div>
				</div>
				<div class="btn" @click="registerPut">注册</div>
				<div class="toReg">
					<div class="ask">已有账号？</div>
					<div class="register" @click="toLogin">立即登录</div>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				mode:1,//切换
				countdown:'获取验证码',//验证码
				time:'',//计时器
				disabled:true,//倒计时防止重复点击
				select:false,//是否同意协议政策
				images:{
					select:require('../assets/images/select.png'),
					selectNo:require('../assets/images/selectno.png')
				},
				code:'',//验证码
				mobile:'',//手机号
				username:'',//账号
				password:'',//密码
				password2:'',//确认密码
				data:{
					id:1
				}
			}
		},
		mounted() {
		},
		methods:{
			// 提交注册
			registerPut(){
				if(!this.username){
					alert('请输入账号')
					return
				}
				if(!this.password){
					alert('请输入密码')
					return
				}
				if(!this.password2){
					alert('请确认密码')
					return
				}
				if(this.password != this.password2){
					alert('输入密码与确认密码不一致')
					return
				}
				if(!this.mobile){
					alert('请输入手机号')
					return
				}
				if(!this.code){
					alert('请输入验证码')
					return
				}
				if(!this.select){
					alert('请同意服务协议和隐私政策')
					return
				}
				this.$apiFun.register({
					role:this.mode,
					name:this.username,
					password:this.password,
					mobile:this.mobile,
					code:this.code
				}).then((res) => {
					if(res.code == 200){
						this.$message({
								showClose: true,
								message: '注册成功',
								type: 'success'
							});
							this.$store.state.login = 1
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
					})
			},
			//显示登录
			toLogin(){
				this.$store.state.login = 1
			},
			//倒计时获取验证码
			timing(){
				let that = this
				let js = 60
				if(!that.mobile){
					alert('请填写手机号')
					return
				}
				if(!that.disabled){
					return
				}
				that.disabled = false
				that.time = setInterval(function(){
					if(js > 0){
						that.countdown = js
						js--
					}else{
						clearInterval(that.time)
						that.disabled = true
						that.countdown = '重新获取'
					}
				},1000)
				this.$apiFun.getVerifyCode({mobile:that.mobile}).then((res) => {
					if(res.code == -1){
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
					})
			}
		},
		destroyed() {
		    clearInterval(this.time)
		 },
	}
</script>

<style scoped>
	.countdown{
		width: 122px;
		height: 44px;
		background: #F5F4F4;
		border-radius: 0px 3px 3px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 15px;
		font-weight: 500;
		color: #2298FF;
		letter-spacing: 3px;
		cursor: pointer;
	}
	.codeBoxleft input{
		width: 180px;
		border: 0;
		outline: none;
		color: #282828;
	}
	.codeBoxleft img{
		width: 32px;
		height: 32px;
		margin-right: 8px;
	}
	.codeBoxleft{
		width: 238px;
		display: flex;
		align-items: center;
		padding: 5px 8px;
		box-sizing: border-box;
		border: 1px solid #E8E8E8;
		border-right: 0px;
	}
	.codeBox{
		width: 360px;
		height: 42px;
		display: flex;
		align-items: center;
		margin: auto;
		margin-bottom: 28px;
	}
	.register{
		font-weight: 400;
		color: #4C60FF;
		font-size: 12px;
		cursor: pointer;
	}
	.ask{
		font-weight: 400;
		color: #8E8E8E;
		font-size: 12px;
	}
	.toReg{
		width: 360px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: auto;
	}
	.btn{
		width: 360px;
		height: 42px;
		background: linear-gradient(90deg, #1890FF 0%, #2298FF 53%, #43A7FF 100%);
		border-radius: 3px;
		margin: auto;
		font-weight: 500;
		color: #FFFFFF;
		font-size: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		letter-spacing: 20px;
		margin-bottom: 21px;
		cursor: pointer;
	}
	.toag{
		font-weight: 400;
		color: #2298FF;
		font-size: 14px;
		cursor: pointer;
	}
	.read{
		font-weight: 400;
		color: #8E8E8E;
		font-size: 12px;
		margin-left: 5px;
	}
	.agreementBox img{
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
	.agreementBox{
		width: 360px;
		display: flex;
		align-items: center;
		margin: auto;
		margin-bottom: 22px;
	}
	.forget{
		float: right;
		cursor: pointer;
	}
	.forgetBox{
		width: 360px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 10px;
		box-sizing: border-box;
		font-weight: 400;
		color: #8E8E8E;
		font-size: 12px;
		margin-bottom: 29px;
	}
	.userBox:nth-child(4){
		margin-bottom: 10px;
	}
	.userBox:nth-child(3){
		margin-bottom: 10px;
	}
	.userBox:nth-child(2){
		margin-bottom: 10px;
	}
	.userBox:nth-child(1){
		margin-top: 39px;
		margin-bottom: 16px;
	}
	.userBox input{
		width: 300px;
		border: 0;
		outline: none;
	}
	.userBox img{
		width: 32px;
		height: 34px;
		margin-right: 8px;
	}
	.userBox{
		width: 360px;
		height: 42px;
		border-radius: 3px;
		border: 1px solid #E8E8E8;
		display: flex;
		align-items: center;
		margin: auto;
		padding: 4px 8px;
		box-sizing: border-box;
	}
	.modeTwo{
		width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		font-weight: 500;
		color: #333;
		font-size: 18px;
		cursor: pointer;
	}
	.modeOne{
		width: 150px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		border-bottom: 3px solid #1890FF;
		font-weight: 500;
		color: #1890FF;
		font-size: 18px;
		cursor: pointer;
	}
	.mode{
		width: 450px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 2px;
		margin: auto;
	}
	.login{
		margin: auto;
		display: block;
		width: 460px;
		margin: auto;
	}
	.loginBox{
		width: 656px;
		background-color: #FFFFFF;
		padding-top: 56px;
		box-sizing: border-box;
		padding-bottom: 52px;
	}
	.box{
		width: 100%;
		max-width: 1920px;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.2);
	}
</style>
