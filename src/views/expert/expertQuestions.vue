<template>
	<div class="box">
		<div class="stay">您现在所在位置:<span>活动动态</span></div>
		<div class="areaBox">
		<div class="tradesBox">
			<div class="tradesStr">所属行业：</div>
			<div class="tradesList" v-for="(item,index) in tradesList">
				<div :class="label == index?'tradesLabel':''" @click="label = index">
					{{item.title}}
				</div>
			</div>
		</div>
		<div class="tradesBox">
			<div class="tradesStr">所属行业：</div>
			<div class="tradesList" v-for="(item,index) in areaList">
				<div :class="area == index?'tradesLabel':''" @click="area = index">
					{{item.title}}
				</div>
			</div>
		</div>
		<div class="tradesBox">
			<div class="tradesStr">专业特长：</div>
			<div class="tradesList" v-for="(item,index) in majorList">
				<div :class="major == index?'tradesLabel':''" @click="major = index">
					{{item.title}}
				</div>
			</div>
		</div>
		</div>
		<div class="answerBox">
			<div class="expertSum">符合条件的专家共58位</div>
			<input type="text" placeholder="请输入问题标题" />
			<textarea placeholder="请输入您要咨询的问题"></textarea>
			<div class="notes">注：提交的问题将会发送给所有符合条件的专家。</div>
			<div class="putBut">提交问题</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				tradesList:[{
					title:'全部'
				},{
					title:'融资担保'
				},{
					title:'市场营销'
				},{
					title:'人才培育'
				},{
					title:'法律维权'
				},{
					title:'管理咨询'
				},{
					title:'创业辅导'
				},{
					title:'技术服务'
				},{
					title:'信息服务'
				},{
					title:'其他服务'
				}],
				label:0,//行业分类选中标签
				areaList:[{
					title:'全部'
				},{
					title:'潍城区'
				},{
					title:'奎文区'
				},{
					title:'高新区'
				},{
					title:'坊子区'
				},],
				area:0,//地区选中标签
				majorList:[{
					title:'全部'
				},{
					title:'专业1'
				},{
					title:'专业2'
				},{
					title:'专业3'
				},{
					title:'专业4'
				},],
				major:0,//地区选中标签
			}
		}
	}
</script>

<style scoped>
	.putBut{
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
	}
	.notes{
		font-size: 16px;
		font-weight: 400;
		color: #FF4D4F;
		margin-left: 40px;
		margin-bottom: 30px;
	}
	.answerBox textarea{
		width: 1152px;
		height: 186px;
		margin: auto;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333;
		padding: 10px 16px;
		box-sizing: border-box;
		margin-bottom: 14px;
		display: block;
	}
	.answerBox input{
		width: 1152px;
		height: 50px;
		margin: auto;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333;
		padding: 0 16px;
		box-sizing: border-box;
		margin-bottom: 15px;
		display: block;
	}
	.expertSum{
		font-size: 28px;
		font-weight: 500;
		color: #3389FF;
		text-align: center;
		margin-bottom: 70px;
	}
	.answerBox{
		width: 1200px;
		height: 549px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin: auto;
		padding-top: 28px;
		margin-bottom: 150px;
	}
	.tradesLabel{
		padding: 2px 4px;
		background: #2298FF;
		border-radius: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		cursor: pointer;
	}
	.tradesList{
		display: flex;
		align-items: center;
		margin-right: 20px;
		cursor: pointer;
	}
	.tradesStr{
		font-weight: 400;
		color: #484848;
		font-size: 16px;
		margin-right: 20px;
	}
	.areaBox{
		width: 1200px;
		margin: auto;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin-bottom: 12px;
		padding-top: 25px;
		padding-bottom: 1px;
	}
	.tradesBox{
		width: 1200px;
		margin: auto;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		padding-left: 24px;
		box-sizing: border-box;
		margin-bottom: 25px;
	}
</style>
