<template>
	<div class="box">
		<div class="stay">您现在所在位置:服务机构><span>机构详情</span></div>
		<div class="detBox">
			<div class="detTitle">潍坊管理技术研修中心有限公司</div>
			<div class="detTime">2021-05-66</div>
			<div class="detflex">
				<div class="detflexstr">服务类别：</div>
				<div class="detli">管理咨询</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">单位地址：</div>
				<div class="detli">安徽省芜湖市弋江区华佗胡同212号</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">联系人：</div>
				<div class="detli">张三</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">服务电话：</div>
				<div class="detli">15648567485</div>
			</div>
			<div class="detStart">核心产品：</div>
			<div class="detCon">123</div>
			<div class="detImg">
				<img src="../../assets/images/banner.png" >
				<img src="../../assets/images/banner.png" >
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
	.detImg img{
		width: 265px;
		height: 190px;
		border-radius: 4px;
		margin-right: 32px;
		margin-bottom: 20px;
	}
	.detImg{
		width: 1190px;
		display: flex;
		align-items: center;
		flex-flow: wrap;
	}
	.detCon{
		font-size: 14px;
		font-weight: 400;
		color: #444444;
		line-height: 26px;
		margin-bottom: 26px;
	}
	.detStart{
		font-size: 16px;
		font-weight: 500;
		color: #444444;
		margin-bottom: 22px;
	}
	.detli{
		font-size: 16px;
		font-weight: 400;
		color: #444444;
		margin-left: 10px;
	}
	.detflexstr{
		width: 80px;
		text-align-last: justify;
		font-size: 16px;
		font-weight: 500;
		color: #444444;
	}
	.detflex{
		display: flex;
		align-items: center;
		margin-bottom: 22px;
	}
	.detTime{
		font-size: 14px;
		font-weight: 400;
		color: #777777;
		margin-bottom: 22px;
	}
	.detTitle{
		font-size: 24px;
		font-weight: 600;
		color: #333333;
		letter-spacing: 2px;
		margin-bottom: 14px;
	}
	.detBox{
		width: 1200px;
		background: #FFFFFF;
		padding: 32px 15px 35px 27px;
		box-sizing: border-box;
		margin: auto;
		margin-bottom: 160px;
	}
</style>
