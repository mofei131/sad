<template>
	<div class="box">
		<div id="map_chart" style="width: 800px;height: 600px;"></div>
	</div>
</template>

<script>
	export default{
		props: ['areaList'],
		data(){
			return{
				geoCoordMap:[{
					area:0,
					name:'奎文区',
					code:[119.18279,36.70864,300],
					title:'全部'
				},{
					area:1,
					name:'潍城区',
					code:[119.03279,36.70564,100],
					title:'全部'
				},{
					area:2,
					name:'坊子区',
					code:[119.36279,36.56564,100],
					title:'全部'
				},{
					area:3,
					name:'寒亭区',
					code:[119.16279,36.96564,100],
					title:'全部'
				},{
					area:4,
					name:'昌乐县',
					code:[118.92279,36.54564,100],
					title:'全部'
				},{
					area:5,
					name:'寿光市',
					code:[118.78279,36.94564,100],
					title:'全部'
				},{
					area:6,
					name:'昌邑市',
					code:[119.45279,36.94564,100],
					title:'全部'
				},{
					area:7,
					name:'高密市',
					code:[119.68279,36.34564,100],
					title:'全部'
				},{
					area:8,
					name:'诸城市',
					code:[119.38279,36.04564,100],
					title:'全部'
				},{
					area:9,
					name:'安丘市',
					code:[119.12279,36.28564,100],
					title:'全部'
				},{
					area:10,
					name:'临朐县',
					code:[118.52279,36.38564,100],
					title:'全部'
				},{
					area:11,
					name:'青州市',
					code:[118.48279,36.68564,100],
					title:'全部'
				}],
				Chart3:'',
			}
		},
		mounted() {
		
		},
		methods:{
			getAreaData(data,title){
				for(let i in data){
					this.geoCoordMap[i].code[2] = data[i]
					this.geoCoordMap[i].title = title
				}
					this.drawMapLine()
			},
			drawMapLine() {
				const convertData = function(data) {
					const res = []
					if (data[0]) {
						for (let i = 0; i < data.length; i++) {
							let geoCoord = data[i].name
							if (geoCoord) {
								res.push({
									name: data[i].name,
									// value: data[i].local.concat(data[i].code)
									value:data[i].code,
									title:data[i].title
								})
							}
						}
					}
					return res
				}
				//  地图开始
				this.Chart3 = this.$echarts.init(document.getElementById('map_chart'))
				const mapData = require('../../assets/weifang.json')
				const name = '潍坊'
				this.$echarts.registerMap(name, mapData)
				this.Chart3.setOption({
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
								borderColor: 'rgba(255,255,255,0.18)',
								borderWidth: 1,
								areaColor: '#23384D',
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
						trigger: 'item',
						formatter: function (params) {
							let showname = params;
							// console.log(params)
							return (
								`
									<div>
									${showname.data.name}-${showname.data.title}：${showname.data.value[2]}家
								</div>
									`
						);
						},
					},
					// tooltip: {
						
					// 	formatter: function(e) {
					// 		// return e.data.displayname;
					// 		return e.name
					// 	}
					// },
					series: [
					// 	{
					// 	type: 'scatter',
					// 	showEffectOn: 'render',
					// 	zoom: 1.1,
					// 	symbol: 'circle',
					// 	itemStyle: {
					// 		shadowBlur: 10,
					// 		shadowColor: 'rgba(221,185,38, 0.5)',
					// 		color: '#ddb926'
					// 	},
					// 	coordinateSystem: 'geo',
					// 	data: convertData(this.geoCoordMap),
					// 	symbolSize: function (val) {
					// 			if((val[2] / 5) > 10){
					// 				if((val[2] / 5) > 40){
					// 					return 40
					// 				}else{
					// 					return val[2] / 5;
					// 				}
					// 			}else{
					// 				return 10
					// 			}
					// 		},
					// 	hoverAnimation: true,
					// 	rippleEffect: {
					// 		period: 15,
					// 		scale: 4,
					// 		brushType: 'fill'
					// 	}
					// },
					{
						name: 'pm2.5',
						type: 'scatter',
						coordinateSystem: 'geo',
						data: convertData(this.geoCoordMap),
						symbolSize: function (val) {
								// return val[2] / 10;
								if((val[2] / 5) > 10){
									if((val[2] / 5) > 30){
										if((val[2]/5) > 80){
											return 50
										}else{
											return 30
										}
									}else{
										return val[2] / 5;
									}
								}else{
									return 10
								}
						},
						encode: {
								value: 2
						},
						// label: {
						// 		formatter: '{b}',
						// 		position: 'right',
						// 		show: false
						// },
						itemStyle: {
								// color: '#FDAF59'
								color:function(params){  //根据不同数据显示不同颜色的标记
										if (params.data.value[2] >= 0 && params.data.value[2]< 50) {
												return '#2F54EB';
										} else if (params.data.value[2] >= 50 && params.data.value[2]< 100) {
												return '#1890FF';
										} else if (params.data.value[2] >= 100 && params.data.value[2]< 150) {
												return '#722ED1';
										} else if (params.data.value[2] >= 150 && params.data.value[2] < 200) {
												return '#13C2C2';
										} else if (params.data.value[2] >= 200 && params.data.value[2] < 250) {
												return '#52C41A';
										}else if (params.data.value[2] >= 250 && params.data.value[2] < 300) {
												return '#A0D911';
										}else if (params.data.value[2] >= 300 && params.data.value[2] < 350) {
												return '#FADB14';
										}else if (params.data.value[2] >= 350 && params.data.value[2] < 400) {
												return '#FA8C16';
										}else if (params.data.value[2] >= 400 && params.data.value[2] < 450) {
												return '#fa541c';
										} else{
												return '#F5222D';
										}
								},
						},
						emphasis: {
								label: {
										show: true
								}
						}
				},
				{
						name: 'Top 5',
						type: 'effectScatter',
						coordinateSystem: 'geo',
						data: convertData(this.geoCoordMap.sort(function (a, b) {
								return b.value - a.value;
						}).slice(0, 20)),
						symbolSize: function (val) {
								// return val[2] / 10;
								if((val[2] / 5) > 10){
									if((val[2] / 5) > 30){
										if((val[2]/5) > 80){
											return 50
										}else{
											return 30
										}
									}else{
										return val[2] / 5;
									}
								}else{
									return 10
								}
						},
						encode: {
								value: 2
						},
						showEffectOn: 'render',
						rippleEffect: {
								brushType: 'stroke'
						},
						hoverAnimation: true,
						// label: {
						// 		formatter: '{b}',
						// 		position: 'right',
						// 		show: true
						// },
						itemStyle: {
								// color: '#FDAF59',
								color:function(params){  //根据不同数据显示不同颜色的标记
										if (params.data.value[2] >= 0 && params.data.value[2]< 50) {
												return '#2F54EB';
										} else if (params.data.value[2] >= 50 && params.data.value[2]< 100) {
												return '#1890FF';
										} else if (params.data.value[2] >= 100 && params.data.value[2]< 150) {
												return '#722ED1';
										} else if (params.data.value[2] >= 150 && params.data.value[2] < 200) {
												return '#13C2C2';
										} else if (params.data.value[2] >= 200 && params.data.value[2] < 250) {
												return '#52C41A';
										}else if (params.data.value[2] >= 250 && params.data.value[2] < 300) {
												return '#A0D911';
										}else if (params.data.value[2] >= 300 && params.data.value[2] < 350) {
												return '#FADB14';
										}else if (params.data.value[2] >= 350 && params.data.value[2] < 400) {
												return '#FA8C16';
										}else if (params.data.value[2] >= 400 && params.data.value[2] < 450) {
												return '#fa541c';
										} else {
												return '#F5222D';
										}
								},
								shadowBlur: 10,
								shadowColor: '#333'
						},
						zlevel: 1
				}
					]
				})
				// setTimeout(function() {
				// 	window.onresize = function() {
				// 		this.Chart3.resize();
				// 	}
				// 	this.Chart3.resize();
				// }, 200)
			}
		}
	}
</script>

<style scoped>
	#map_chart{
		background-image: url(../../assets/images/idNumBg.png);
		background-size: 100% 800px;
		background-repeat: no-repeat;
	}
</style>
