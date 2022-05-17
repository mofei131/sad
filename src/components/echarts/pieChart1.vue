<template>
	<div class="box">
		<div id="pie_chart1" style="width: 350px;height: 250px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			this.pieChart1()
		},
		methods:{
			pieChart1() {
				//  地图开始
				let Chart = this.$echarts.init(document.getElementById('pie_chart1'))
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
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						x:'right',
						y:'center',
						textStyle:{
							fontSize:10,
							color:'#fff'
						},
						itemWidth:5,
						itemHeight:5
					},
					series: [
						{
							name: '行业所属分布',
							type: 'pie',
							radius: '70%',
							data: [
								{ value: 1048, name: '分布属性1' },
								{ value: 735, name: '分布属性2' },
								{ value: 580, name: '分布属性3' },
								{ value: 484, name: '分布属性4' },
								{ value: 300, name: '分布属性5' }
							],
							emphasis: {
								itemStyle: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							},
							label:{
								normal: {
									position:'inner',
									show: true,
									formatter:'{c}'
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
	
</style>
