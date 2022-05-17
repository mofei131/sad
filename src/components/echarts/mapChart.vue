<template>
	<div class="box">
		<div id="map_chart" style="width: 388px;height: 388px;"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			this.drawMapLine()
		},
		methods:{
			drawMapLine() {
				let geoCoordMap = [{
					name:'莫非',
					code:[119.16607,36.65458]
				}]
			 
				const convertData = function(data) {
					const res = []
					if (data[0]) {
						for (let i = 0; i < data.length; i++) {
							let geoCoord = data[i].name
							if (geoCoord) {
								res.push({
									name: data[i].name,
									// value: data[i].local.concat(data[i].code)
									value:data[i].code
								})
							}
						}
					}
					return res
				}
			 
				//  地图开始
				let Chart3 = this.$echarts.init(document.getElementById('map_chart'))
				const mapData = require('../../assets/weifang.json')
				const name = '潍坊'
				this.$echarts.registerMap(name, mapData)
				Chart3.setOption({
					geo: {
						zoom: 1.1,
						map: name,
						aspectScale: 0.75,
						roam: true,
						label: {
							show: true,
							color: 'rgba(255, 255, 255, 0.6)',
							fontSize: 14
						},
						scaleLimit: {
							min: 1,
							max: 8
						},
						emphasis: {
							label: {
								color: '#fff',
								show: true
							}
						},
						itemStyle: {
							normal: {
								// borderColor: 'rgba(0,0,0,0.18)',
								borderColor: 'rgba(255,255,255,0.18)',
								borderWidth: 1,
								// areaColor: '#333354',
								areaColor: '#23384D',
								// shadowColor: 'rgba(0,0,0,0.13)',
								// shadowOffsetX: 0,
								// shadowOffsetY: 25,
								label: {
									show: true,
									fontWeight: 'bold',
									opacity: 0.54,
									color: 'rgba(255, 255, 255, 0.6)',
									letterSpacing: '12.3px',
									textAlign: 'right'
								}
							},
							emphasis: {
								areaColor: '#353555',
								borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
									[{
											offset: 0,
											color: '#f78879'
										},
										{
											offset: 0.5,
											color: '#6af651'
										},
										{
											offset: 1,
											color: '#51b3f6'
										}
									]),
								borderWidth: 2,
								label: {
									color: '#fff',
									show: false
								}
							}
						}
					},
					tooltip: {
						formatter: function(e) {
							// return e.data.displayname;
							return e.name
						}
					},
					series: [{
						type: 'scatter',
						showEffectOn: 'render',
						zoom: 1.1,
						symbol: 'pin',
						coordinateSystem: 'geo',
						data: convertData(geoCoordMap),
						symbolSize: 30,
						hoverAnimation: true,
						rippleEffect: {
							period: 15,
							scale: 4,
							brushType: 'fill'
						}
					}]
			 
				})
				setTimeout(function() {
					window.onresize = function() {
						Chart3.resize();
					}
					Chart3.resize();
				}, 200)
			}
		}
	}
</script>

<style scoped>
	
</style>
