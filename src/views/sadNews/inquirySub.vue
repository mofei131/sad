<template>
	<div class="box">
		<div class="stay">您现在所在位置:供需信息><span>报价提交</span></div>
		<div class="submitBox">
			<div class="submitTitle">报价提交</div>
			<div class="inquiryBox">
				<div class="inquiryTitle"><span>*</span>询价标题</div>
				<input type="text" placeholder="请输入询价标题" />
			</div>
			<div class="transverse"></div>
			<div class="inquiryBox">
				<div class="inquiryTitle"><span>*</span>询价内容</div>
				<textarea placeholder="请输入您要咨询的内容"></textarea>
			</div>
			<div class="transverse"></div>
			<div class="otherBox">
				<div class="otherOne">
					<div class="inquiryTitle"><span>*</span>您的公司</div>
					<input type="text" placeholder="请输入您的公司名字" />
				</div>
				<div class="otherOne">
					<div class="inquiryTitle"><span></span>公司邮箱</div>
					<input type="text" placeholder="请输入您的公司邮箱" />
				</div>
			</div>
			<div class="otherBox">
				<div class="otherOne">
					<div class="inquiryTitle"><span>*</span>您的姓名</div>
					<input type="text" placeholder="请输入您的您的姓名" />
				</div>
				<div class="otherOne">
					<div class="inquiryTitle"><span>*</span>联系电话</div>
					<input type="text" placeholder="请输入您的联系电话" />
				</div>
			</div>
			<div class="inquiryBtn">提交报价</div>
		</div>
	</div>
</template>

<script>
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
