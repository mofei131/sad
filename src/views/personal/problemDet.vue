<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">问题详情</div>
			<div class="abCon"></div>
			<div class="problemDetTop">
				<div class="problemLi">
					<div class="ifonDet"><span>公司名称：</span>潍坊广未汽车有限公司</div>
					<div class="ifonDet"><span>所属行业：</span>工程设计</div>
				</div>
				<div class="problemLi2">
					<div class="ifonDet"><span>联系人：</span>张三</div>
					<div class="ifonDet"><span>联系电话：</span>15487487988</div>
					<div class="ifonDet"><span>电子邮箱：</span>154874879@qq.com</div>
				</div>
			</div>
			<div class="themeBox">
				<div class="themetop">
					<div>潍坊深圳工业园区即将建成，届时潍坊将有5潍坊深圳工业园区即将建成，届时潍坊将有5</div>
					<div>2021-02-11</div>
				</div>
				<div class="themeCon">
					门民领治很等九真求东战响响发求数严任则细就料技员价气段把声意传求相打动安记世求很变十即究国建路识准元斗动需。资色法马各上加走他劳党节住世开文利战你量外马一同把复毛回江我任场照走列采通都单过术此平果通斗证标带造太气力阶量权却全次平备决集计。
				</div>
			</div>
			<div class="callBack">
				<div class="callBackTitle">回复</div>
				<textarea placeholder="请输入回复内容"></textarea>
			</div>
			<div class="callBackBtn">发送</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods: {
			
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
