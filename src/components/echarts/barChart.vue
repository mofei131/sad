<template>
	<div class="box">
		<div id="bar_chart" style="width: 320px;height: 600px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			this.barChart()
		},
		methods:{
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
								fontSize: 16,
							}
					},
					grid: {
						left: '15%',
					},
					xAxis: {
						type: 'value'
					},
					yAxis: {
						 type: 'category',
						 data: ['潍城区', '奎文区', '高新区', '坊子区', '安丘市', '诸城市', '高密市','潍城区', '奎文区', '高新区', '坊子区', '安丘市', '诸城市', '高密市']
					},
					series: [
						{
							data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
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
