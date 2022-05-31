<template>
	<div class="box">
		<div id="bar_chart" style="width: 420px;height: 800px;"></div>
		<div class="context">企业数量</div>
	</div>
</template>

<script>
	// import echarts from "echarts"
	export default{
		data(){
			return{
				barData:[],
			}
		},
		mounted() {
			
		},
		methods:{
			getBarData(data){
				this.barData = data
				this.barChart()
			},
			barChart() {
				//  地图开始
				let Chart = this.$echarts.init(document.getElementById('bar_chart'))
				// const name = '潍坊'
				let option = {
					title: {
						text: '企业所属地区分布',
						// subtext: 'Fake Data',
						left: 'center',
						 textStyle: {
								fontSize: 24,
								color:'#fff'
							}
					},
					grid: {
						left: '15%',
					},
					xAxis: {
						type: 'value',
						splitLine :{ //网格线
							lineStyle:{
								width:0.2,
							type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
							},
						},
						axisLine: {
							show: true, // 是否显示坐标轴轴线
							lineStyle: {
							type: 'solid', // 坐标轴线线的类型（'solid'，实线类型；'dashed'，虚线类型；'dotted',点状类型）
							},
						},
					},
					yAxis: {
						 type: 'category',
						 data: ['奎文区', '潍城区', '坊子区', '寒亭区', '昌乐县', '寿光市', '昌邑市','高密市', '诸城市', '安丘市', '临朐县', '青州市',]
					},
					tooltip: {
						 valueFormatter: function (value) {
							 return value + ' 家';
							 // console.log(value)
						 }
					 },
					series: [
						{
							data:this.barData,
							type: 'bar',
							barWidth : 10,
							label:{
								// normal: {
								// 	position:'center',
								// 	show: true,
								// 	formatter:'{c}'
								// }
								show: true,
							},
							itemStyle:{
								normal:{
									barBorderRadius:[0, 10, 10, 0],
										//柱体的颜色
										//右，下，左，上（1，0，0，0）表示从正右开始向左渐变
										color: new this.$echarts.graphic.LinearGradient(1,0,0,0,[
												{
														offset:0,
														color:"#589FC4"
												},
												{
														offset:1,
														color:"#1E4C6E"
												}
												],false)
										}
								},
						}
					]
				};
			Chart.setOption(option)
			}
		}
	}
</script>

<style scoped>
	.context{
		position: relative;
		font-size: 18px;
		color: #fff;
		bottom: 40px;
		letter-spacing: 25px;
		text-align: center;
	}
	#bar_chart{
		background-image: url(../../assets/images/idNumBg.png);
		background-size: 100% 800px;
		background-repeat: no-repeat;
		padding-top: 15px;
		box-sizing: border-box;
	}
</style>
