<template>
	<div class="box">
		<div class="stay">您现在所在位置:企业能力<span>培育成效</span></div>
		<div class="areaBox">
		<div class="tradesBox">
			<div class="tradesStr">企业类型：</div>
			<div class="tradesList" v-for="(item,index) in tradesList">
				<div :class="label == index?'tradesLabel':''" @click="label = index">
					{{item.title}}
				</div>
			</div>
		</div>
		<div class="transverse"></div>
		<div class="mapBox">
			<div class="left">
				<div class="leftOne">
					<pie-Chart1></pie-Chart1>
				</div>
				<div class="leftOne">
					<pie-Chart2></pie-Chart2>
				</div>
				<div class="leftOne">
					<pie-Chart3></pie-Chart3>
				</div>
			</div>
			<div class="center">
				<div class="cardUl">
					<div class="cardLi">
						<div>528家</div>
						<div>专心特新</div>
					</div>
					<div class="cardLi">
						<div>528家</div>
						<div>小巨人</div>
					</div>
					<div class="cardLi">
						<div>528家</div>
						<div>单项冠军</div>
					</div>
					<div class="cardLi">
						<div>528家</div>
						<div>隐形冠军</div>
					</div>
					<div class="cardLi">
						<div>528家</div>
						<div>瞪羚企业</div>
					</div>
					<div class="cardLi">
						<div>528家</div>
						<div>独角兽企业</div>
					</div>
				</div>
				<map-Chart></map-Chart>
			</div>
			<div class="right">
				<bar-Chart></bar-Chart>
			</div>
		</div>
		</div>
	</div>
</template>
<script>
	import mapChart from '../../components/echarts/mapChart.vue'
	import pieChart1 from '../../components/echarts/pieChart1.vue'
	import pieChart2 from '../../components/echarts/pieChart2.vue'
	import pieChart3 from '../../components/echarts/pieChart3.vue'
	import barChart from '../../components/echarts/barChart.vue'
	export default{
		components:{
			mapChart,
			pieChart1,
			pieChart2,
			pieChart3,
			barChart
		},
		data(){
			return{
				tradesList:[{
					title:'全部'
				},{
					title:'专新特新企业'
				},{
					title:'小巨人企业'
				},{
					title:'单项冠军企业'
				},{
					title:'隐形冠军企业'
				},{
					title:'瞪羚企业'
				},{
					title:'独角兽企业'
				}],
				label:0,//行业分类选中标签
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.right{
		width: 320px;
	}
	.mapBox{
		display:flex;
		justify-content: space-between;
	}
	.cardLi{
		width: 106px;
		height: 50px;
		background: rgba(24, 144, 255, 0.6);
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		border-radius: 4px;
		border: 4px solid #1890FF;
		font-size: 16px;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 22px;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 12px;
	}
	.cardUl{
		width: 388px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.leftOne{
		width: 300px;
		height: 182px;
	}
	.transverse{
		width: 1152px;
		height: 1px;
		background-color: #ECECEC;
		margin: auto;
		margin-bottom: 20px;
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
	.stay span{
		color: #1890FF;
		margin-left: 5px;
	}
	.stay{
		width: 1200px;
		margin: auto;
		margin-bottom: 17px;
		color: #333333;
		font-size: 12px;
	}
</style>