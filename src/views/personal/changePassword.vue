<template>
	<div class="box">
		<div class="changePasswordBox">
			<div class="cpTitle">修改密码</div>
			<div class="abCon"></div>
			<div class="inputBox">
				<div class="inputLi">
					<div class="inputStar"><span>*</span>请输入手机号</div>
					<div>：</div>
					<input type="number" placeholder="请输入手机号" />
				</div>
				<div class="inputLi2">
					<div class="inputStar"><span>*</span>请输入验证码</div>
					<div>：</div>
					<div class="codeBox">
						<input class="codeinput" type="number" placeholder="请输入验证码" />
						<div class="getCode">{{code}}</div>
					</div>
				</div>
				<div class="inputLi">
					<div class="inputStar"><span>*</span>旧密码</div>
					<div>：</div>
					<input type="password" placeholder="请输入旧密码" />
				</div>
				<div class="inputLi">
					<div class="inputStar"><span>*</span>新密码</div>
					<div>：</div>
					<input type="password" placeholder="请输入新密码" />
				</div>
				<div class="inputLi">
					<div class="inputStar"><span>*</span>再次输入新密码</div>
					<div>：</div>
					<input type="password" placeholder="再次输入新密码" />
				</div>
			</div>
			<div class="changeBtn">保存</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				code:'获取验证码'
			}
		}
	}
</script>

<style scoped>
	.changeBtn{
		width: 144px;
		height: 40px;
		background: #2298FF;
		border-radius: 3px;
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		/* margin: auto; */
		margin-left: 296px;
		cursor: pointer;
	}
	.getCode{
		cursor: pointer;
		width: 73px;
		height: 23px;
		background: #F5F4F4;
		border-radius: 0px 4px 4px 0px;
		font-size: 11px;
		font-weight: 500;
		color: #2298FF;
		letter-spacing: 1px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.codeBox{
		width: 275px;
		height: 25px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #D4D4D4;
		display: flex;
		align-items: center;
		box-sizing: border-box;
	}
	.inputLi input{
		width: 275px;
		height: 25px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #D4D4D4;
		color: #4E4E4E;
		font-size: 12px;
		padding: 0 11px;
		box-sizing: border-box;
	}
	.codeinput{
		width: 200px;
		color: #4E4E4E;
		font-size: 12px;
		padding: 0 11px;
		box-sizing: border-box;
		border: 0;
		background: #FFFFFF;
		border-radius: 0;
	}
	.inputLi,.inputLi2{
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 12px;
	}
	.inputStar span{
		color: #FF5023;
	}
	.inputStar{
		width: 133px;
		display: flex;
		text-align: end;
		align-items: flex-start;
		justify-content: flex-end;
		font-size: 16px;
		font-weight: 400;
		color: #4E4E4E;
		letter-spacing: 1px;
	}
	.inputBox{
		width: 466px;
		/* margin: auto */
		margin-left: 114px;
		margin-bottom: 75px;
	}
	.abCon{
		width: 722px;
		height: 1px;
		background-color: #1890FF;
		margin: auto;
		margin-bottom: 26px;
	}
	.cpTitle{
		font-weight: 400;
		color: #222222;
		font-size: 20px;
		margin-left: 94px;
		margin-bottom: 8px;
	}
	.changePasswordBox{
		width: 895px;
		height: 625px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 4px 4px 0px 0px;
		padding-top: 24px;
		box-sizing: border-box;
	}
</style>
