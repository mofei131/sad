<template>
	<div class="box">
		<div id="bar_chart" style="width: 420px;height: 800px;"></div>
	</div>
</template>

<script>
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
						text: '行业所属分布',
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
							label:{
								// normal: {
								// 	position:'center',
								// 	show: true,
								// 	formatter:'{c}'
								// }
								show: true,
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
	
</style>
