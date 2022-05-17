<template>
	<div class="box">
		<div class="fotnav">
			<div class="top">
				<div class="left">
					<div class="lleft">
						<div>主办单位</div>
						<div>承办单位</div>
						<div>单位地址</div>
					</div>
					<div class="lcenter"></div>
					<div class="lright">
						<div>潍坊市工业和信息化局</div>
						<div>潍坊市中小企业公共服务中心</div>
						<div>中国山东省潍坊市胜利东街1558号</div>
					</div>
				</div>
				<div class="right">
					<div class="lleft">
						<div>单位邮箱</div>
						<div>服务热线</div>
						<div>在线传真</div>
					</div>
					<div class="lcenter"></div>
					<div class="lright">
						<div>sdsadas@gfgdf.org.cn</div>
						<div>0086-455-747878</div>
						<div>0086-4545-45454</div>
					</div>
				</div>
			</div>
			<div class="bot">
				<div class="botnav">
					<div>Copyright © 潍坊市企业服务中心 All Rights Reserved</div>
					<img src="../assets/images/police.png" />
					<div>鲁ICP备17052774号-1</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.bot{
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 27px;
	}
	.botnav img{
		width: 18px;
		height: 18px;
		margin: 0 4px 0 4px;
	}
	.botnav{
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #FFFFFF;
	}
	.lcenter{
		width: 1px;
		height: 80px;
		background-color: #FFF;
		margin: 0 52px 0 46px;
	}
	.lleft,.lright{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 90px;
	}
	.left,.right{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.top{
		width: 1200px;
		height: 160px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-bottom: 1px solid #fff;
	}
	.fotnav{
		width: 1200px;
		margin: auto;
	}
	.box{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		background: #1D2735;
		height: 235px;
		box-sizing: border-box;
		color: #fff;
		/* position: absolute;
		bottom: 0;
		left: 0; */
	}
</style>
