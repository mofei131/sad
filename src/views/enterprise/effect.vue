<template>
	<div class="box" :style="{'height':this.$store.state.windowHeight+'px'}">
		<sacle-Box>
		<!-- :style="{'height':windowHeight+'px'}" -->
		<!-- <div class="stay">您现在所在位置:企业能力<span>培育成效</span></div> -->
		 <!-- :style="{'width':windowWidth+'px','height':windowHeight+'px'}" -->
		<div class="areaBox"  style="height: 1080px;" v-if="table">
		<div class="tradesBox">
			<!-- <div class="tradesStr">企业类型：</div> -->
			<div class="tradesList" v-for="(item,index) in tradesList">
				<div :class="label == index?'tradesLabel':''" @click="messUnti(item,index,2)">
					{{item.title}}
				</div>
			</div>
			<div class="backBox" @click="backseen">退出</div>
		</div>
		<!-- <div class="transverse"></div> -->
		<div class="mapBox" >
			<div class="left">
				<div class="leftOne">
					<pie-Chart1 ref="getpieChart1"></pie-Chart1>
				</div>
				<div class="leftOne">
					<pie-Chart2 ref="getpieChart2"></pie-Chart2>
				</div>
				<div class="leftOne">
					<pie-Chart3 ref="getpieChart3"></pie-Chart3>
				</div>
			</div>
			<div class="center">
				<div class="cardUl">
					<div :class="label == 1?'cardLi2':'cardLi'" v-if="label == 1||label == 0">
						<div :class="label == 1?'cardLiChile2':'cardLiChile'">{{total["0"]}}</div>
						<div>专精特新</div>
					</div>
					<div :class="label == 2?'cardLi2':'cardLi'" v-if="label == 2||label == 0">
						<div :class="label == 2?'cardLiChile2':'cardLiChile'">{{total["1"]}}</div>
						<div>小巨人</div>
					</div>
					<div :class="label == 3?'cardLi2':'cardLi'" v-if="label == 3||label == 0">
						<div :class="label == 3?'cardLiChile2':'cardLiChile'">{{total["2"]}}</div>
						<div>单项冠军</div>
					</div>
					<div :class="label == 4?'cardLi2':'cardLi'" v-if="label == 4||label == 0">
						<div :class="label == 4?'cardLiChile2':'cardLiChile'">{{total["3"]}}</div>
						<div>隐形冠军</div>
					</div>
					<div :class="label == 5?'cardLi2':'cardLi'" v-if="label == 5||label == 0">
						<div :class="label == 5?'cardLiChile2':'cardLiChile'">{{total["4"]}}</div>
						<div>瞪羚企业</div>
					</div>
					<div :class="label == 6?'cardLi2':'cardLi'" v-if="label == 6||label == 0">
						<div :class="label == 6?'cardLiChile2':'cardLiChile'">{{total["5"]}}</div>
						<div>独角兽企业</div>
					</div>
				</div>
				<div class="qymd"  @click="toTable">企业名单>>></div>
				<map-Chart ref="mapChart"></map-Chart>
			</div>
			<div class="right">
				<bar-Chart ref='barChart'></bar-Chart>
			</div>
		</div>
		<!-- <div class="tableBox">
			<div class="topBox">
			</div>
		</div> -->
		</div>
		<div class="areaBox"  style="height: 1080px;" v-if="!table">
			<div class="backBox2" @click="tableBack" >返回</div>
			<div class="tablebox">
				<div class="topBox">
					<div class="topSeach">
						<input type="text" v-model="keywords" placeholder="请输入企业名称" />
						<div @click="toSeace">搜索</div>
					</div>
				</div>
				<div class="tableMain">
					<el-table
						:data="tableData"
						style="width: 100%" :border='true' header-row-class-name="headcalss" row-class-name='rowClass'>
						<el-table-column
							prop="id"
							label="序号"
							width="80">
						</el-table-column>
						<el-table-column
							prop="company_name"
							label="企业名称">
						</el-table-column>
						<el-table-column
							prop="category"
							label="所属分类">
						</el-table-column>
						<el-table-column
							prop="industry"
							label="所属行业">
						</el-table-column>
						<el-table-column
							prop="product"
							label="主导产品">
						</el-table-column>
						<el-table-column
							prop="status"
							label="经营状态">
						</el-table-column>
						<!-- <el-table-column
							prop="income"
							label="销售收入(万)">
						</el-table-column>
						<el-table-column
							prop="tax"
							label="利税(万元)">
						</el-table-column> -->
						<el-table-column
							prop="city"
							label="所在市区">
						</el-table-column>
						<el-table-column
							prop="capital"
							label="资本(万元)">
						</el-table-column>
					</el-table>
					
				</div>
				<div class="block">
				    <el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page.sync="currentPage3"
				      :page-size="10"
				      layout="prev, pager, next, jumper"
				      :total="count"
							background>
				    </el-pagination>
				  </div>
			</div>
		</div>
		</sacle-Box>
	</div>
</template>
<script>
	import mapChart from '../../components/echarts/mapChart.vue'
	import pieChart1 from '../../components/echarts/pieChart1.vue'
	import pieChart2 from '../../components/echarts/pieChart2.vue'
	import pieChart3 from '../../components/echarts/pieChart3.vue'
	import barChart from '../../components/echarts/barChart.vue'
	import sacleBox from '../../components/SacleBox.vue'
	export default{
		components:{
			mapChart,
			pieChart1,
			pieChart2,
			pieChart3,
			barChart,
			sacleBox
		},
		data(){
			return{
				tradesList:[{
					id:1,
					title:'全部'
				},{
					id:2,
					title:'专精特新企业'
				},{
					id:3,
					title:'小巨人企业'
				},{
					id:4,
					title:'单项冠军企业'
				},{
					id:5,
					title:'隐形冠军企业'
				},{
					id:6,
					title:'瞪羚企业'
				},{
					id:7,
					title:'独角兽企业'
				}],
				label:0,//行业分类选中标签
				// windowWidth: document.documentElement.clientWidth,  //实时屏幕宽度
				windowHeight: document.documentElement.clientHeight,   //实时屏幕高度
				total:'',//企业数
				areaList:'',//地区企业数
				table:true,
				 tableData: [],
				 currentPage3: 1,
				 page:1,
				 limit:10,
				 keywords:'',
				 count:'',
				 timer:'',//定时器
				 timerIndex:0,
				 category:''
			}
		},
		mounted() {
			let that = this
			 window.addEventListener("keydown", this.KeyDown, true); 
			 this.messUnti(this.tradesList[0],0,1)
			 this.timer = setInterval(function(){
				 console.log(that.timerIndex)
				 if(that.timerIndex == 6){
					 that.messUnti(that.tradesList[that.timerIndex],that.timerIndex,1)
					 that.timerIndex = 0
				 }else{
					 that.messUnti(that.tradesList[that.timerIndex],that.timerIndex,1)
					 that.timerIndex++
				 }
			 },15000)
		},
		methods:{
			//
			toTable(){
				this.table = false
				clearTimeout(this.timer)
			},
			//搜索
			toSeace(){
				this.page = 1
				this.tableData = []
				this.getEnterprisesList()
			},
			//获取企业名单
			getEnterprisesList(){
				this.$apiFun.enterprisesList({
					page:this.page,
					limit:this.limit,
					keywords:this.keywords,
					category:this.category
				}).then((res) => {
					if(res.code == 200){
						let list = res.data
						for(let i in list){
							this.tableData.push(list[i])
						}
						this.tableData.pop()
						this.count = res.data.count
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			 handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			 handleCurrentChange(val) {
				 this.page = val
				 this.tableData = []
				 this.getEnterprisesList()
				console.log(`当前页: ${val}`);
			},
			tableBack(){
				this.table = true
				location.reload()
			},
			messUnti(item,index,e){
				if(e == 2){
					this.timerIndex = index
				}
				if(item.title != '全部'){
					this.category = item.title
				}
				this.label = index
				this.$apiFun.companydata({
					category:item.title == '全部'?'':item.title
					// classify:item.id
				}).then((res) => {
					if(res.code == 200){
						let title = ''
						if(item.id == 1){
							title = '全部企业'
						}else{
							title = item.title
						}
						this.$refs.mapChart.getAreaData(res.data.area,title)
						this.$refs.barChart.getBarData(res.data.area,title)
						this.total = res.data.total
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
				this.$apiFun.piedata({
					category:item.title == '全部'?'':item.title
					// classify:item.id
					}).then((res) => {
					if(res.code == 200){
						// console.log(res)
						this.$refs.getpieChart1.getpieData(res.data.pie1)
						this.$refs.getpieChart2.getpieData(res.data.pie2)
						this.$refs.getpieChart3.getpieData(res.data.pie3)
						this.tableData = []
						this.getEnterprisesList()
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			KeyDown(event) {
				let that = this
				// console.log(event.code)
				if(event.code == 'F11'){
					that.windowHeight = document.documentElement.clientHeight
					console.log(document.documentElement.clientHeight)
				}
			 },
			//退出大屏
			backseen(){
				localStorage.setItem('screen',0)
				this.$router.back()
				location.reload()
			}
		}
	}
</script>

<style scoped>
	.tableMain /deep/ .el-table__body tr:hover > td{
	  background-color: rgba(0,0,0,0)!important;
	}
	.block /deep/ .el-pagination__jump,.block /deep/ .el-pagination__editor.el-input .el-input__inner{
		color: #fff;
	}
	.block /deep/ .el-input__wrapper,.block /deep/ .el-pager+button.btn-next{
		background-color: rgba(0,0,0,0);
		border: 1px solid;
		color: #fff;
	}
	.block /deep/ .el-pagination.is-background .el-pager li,.block /deep/ .el-pagination.is-background .btn-prev:disabled{
		    background-color: rgba(0,0,0,0);
		    border: 1px solid;
		    color: #fff;
	}
	.block{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.el-table--fit{
		background-color: rgba(0,0,0,0);
	}
	.tableMain /deep/ .el-table tr{
		background-color: rgba(0,0,0,0);
	}
	.tableMain /deep/ .rowClass > td{
		color: #9BB7EF;
		background-color: rgba(0,0,0,0);
	}
	.tableMain /deep/ .headcalss > th{
		    color: #9BB7EF;
		    background-color: #073679;
	}
	.tableMain /deep/ .el-table__body .el-table__row.hover-row td {
	  background-color:rgba(0,0,0,0)!important;
	}
	.tableMain{
		width: 1640px;
		height: 600px;
		margin: auto;
		margin-bottom: 20px;
	}
	.topSeach div{
		width: 70px;
		height: 35px;
		line-height: 35px;
		background-color: #328BD8;
		margin: 0px 0 0 19px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		cursor: pointer;
	}
	.topSeach input{
		width: 200px;
		height: 33px;
		border: 1px solid #3678C2;
		padding: 0 5px;
		background: none;
		color: #9BB7EF;
	}
	.topSeach{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 300px;
	}
	.topBox{
		width: 1640px;
		height: 100px;
		margin: auto;
		background-color: #18286F;
		display: flex;
		align-items: center;
		padding-left: 60px;
		box-sizing: border-box;
		margin-bottom: 15px;
	}
	.tablebox{
		width: 1700px;
		height: 85%;
		margin: auto;
		background-image: url(../../assets/images/idNumBg.png);
		background-size: 100%;
		background-repeat: no-repeat;
		background-color: #111843;
		margin-top: 4%;
		padding: 30px;
	}
	.qymd{
		position: absolute;
		background-image: url(../../assets/images/cyjqCenterBtnBg.png);
		width: 115px;
		height: 41px;
		z-index: 9;
		top: 28%;
		right: 5%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		cursor: pointer;
	}
/* 	.topBox{
		width: 100%;
		height: 10%;
		background-color: #fff;
	} */
	/* .tableBox{
		position: fixed;
		z-index: 99;
		width: 90%;
		height: 90%;
		left: 5%;
		top: 5%;
		background-image: url(../../assets/images/idNumBg.png);
		background-size: 100%;
		background-repeat: no-repeat;
		background-color: #111843;
		padding: 20px;
		box-sizing: border-box;
	} */
	.leftOne{
		margin-bottom: 20px;
	}
	.backBox2{
		position: absolute;
		top: 1.5%;
		right: 5%;
		width: 132px;
		height: 52px;
		line-height: 52px;
		color: #5695fe;
		background: url(../../assets/images/backIndex.png) no-repeat center;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.backBox{
		position: absolute;
		top: -12px;
		right: 0;
		width: 132px;
		height: 52px;
		line-height: 52px;
		color: #5695fe;
		background: url(../../assets/images/backIndex.png) no-repeat center;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.center{
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.right{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.right,.left{
		width: 35%;
	}
	/* .center{
		width: 50%;
	} */
	.mapBox{
		display:flex;
		justify-content: space-between;
		margin: auto;
		/* width: 80%; */
		padding-top: 20px;
	}
	.cardLiChile{
		font-size: 24px;
		letter-spacing: 2px;
	}
	.cardLiChile2{
		font-size: 28px;
		letter-spacing: 6px;
	}
	.cardLi2{
		width: 300px;
		height: 100px;
		margin: auto;
		font-size: 28px;
		background: rgba(16,28,107, 1);
		box-shadow: 0px 0px 9px 0px rgba(47, 43, 66, 1);
		border-radius: 4px;
		border: 4px solid #270DB3;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 22px;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-around;
		font-family: std;
	}
	.cardLi{
		width: 200px;
		height: 60px;
		background: rgba(16,28,107, 1);
		box-shadow: 0px 0px 9px 0px rgba(47, 43, 66, 1);
		border-radius: 4px;
		border: 4px solid #270DB3;
		font-size: 18px;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 22px;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 20px;
		font-family: std;
	}
	.cardUl{
		width: 800px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		position: relative;
	}
	.leftOne{
		/* width: 300px; */
		width: 100%;
		/* height: 182px; */
		display: flex;
		align-items: center;
		justify-content: center;
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
		/* color: #484848; */
		color: #fff;
		font-size: 16px;
		margin-right: 20px;
	}
	.areaBox{
		width: 100%;
		max-width: 1920px;
		height: 100%;
		margin: auto;
		/* background: #FFFFFF; */
		/* background-color: #111843; */
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin-bottom: 12px;
		padding-top: 25px;
		padding-bottom: 1px;
		background-image: url(../../assets/images/bg_outCon.jpg);
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.tradesBox{
		width: 1200px;
		margin: auto;
		/* background: #FFFFFF; */
		display: flex;
		align-items: center;
		padding-left: 24px;
		box-sizing: border-box;
		margin-bottom: 25px;
		/* background-color: #111843; */
		color: #fff;
		font-weight: bold;
		font-size: 18px;
		position: relative;
		padding-left: 160px;
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
	.box{
		background-color: #111843;
	/* 	width: 1920px;
		height: 1080px; */
	}
</style>