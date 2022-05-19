<template>
	<div class="box">
		<div id="pie_chart2" style="width: 400px;height: 250px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pieData:[]
			}
		},
		mounted() {
			// this.pieChart2()
		},
		methods:{
			getpieData(data){
				this.pieData = data
				this.pieChart2()
			},
			pieChart2() {
				//  地图开始
				let Chart = this.$echarts.init(document.getElementById('pie_chart2'))
				// const name = '潍坊'
				let option = {
					title: {
						text: '企业注册资本分析',
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
							name: '企业注册资本分析',
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
							data:this.pieData,
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
	#pie_chart2{
		background-image: url(../../assets/images/idNumBg.png);
		background-size: 100% 800px;
		background-repeat: no-repeat;
		padding-top: 15px;
		box-sizing: border-box;
	}
</style>
