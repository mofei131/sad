<template>
	<div class="box">
		<div id="pie_chart3" style="width: 300px;height: 182px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			this.pieChart3()
		},
		methods:{
			pieChart3() {
				//  地图开始
				let Chart = this.$echarts.init(document.getElementById('pie_chart3'))
				// const name = '潍坊'
				let option = {
					title: {
						text: '企业经营状态分析',
						// subtext: 'Fake Data',
						left: 'center',
						 textStyle: {
								fontSize: 12,
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
							fontSize:7
						},
						itemWidth:5,
						itemHeight:5
					},
					series: [
						{
							name: '企业经营状态分析',
							type: 'pie',
							radius: ['40%', '70%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'center'
							},
							emphasis: {
								label: {
									show: true,
									fontSize: '20',
									fontWeight: 'bold'
								}
							},
							labelLine: {
								show: false
							},
							data: [
								{ value: 1048, name: '分布属性1' },
								{ value: 735, name: '分布属性2' },
								{ value: 580, name: '分布属性3' },
								{ value: 484, name: '分布属性4' },
								{ value: 300, name: '分布属性5' }
							],
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
