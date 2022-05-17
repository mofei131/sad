<template>
	<div class="box">
		<div class="stay">您现在所在位置:供需信息><span>需求信息</span></div>
		<div class="tsBox">
		<div class="tradesBox">
			<div class="tradesStr">所属行业：</div>
			<div class="tradesList" v-for="(item,index) in tradesList">
				<div :class="label == index?'tradesLabel':''" @click="label = index">
					{{item.title}}
				</div>
			</div>
		</div>
		<div class="sfFlex">
			<div class="searchBox">
				<div class="searchtitle">内容搜索：</div>
				<div class="search">
					<input type="text" placeholder="请输入您想查询的关键词" />
					<div class="searchBtn">
						<img src="../../assets/images/search.png" />
					</div>
				</div>
			</div>
			<div class="toRelease">发布需求信息</div>
		</div>
		</div>
		<div class="pageBox">
		<div class="ulBox">
			<div class="liBox" v-for="(item,index) in unityList" :key="index">
				<img :src="item.image" >
				<div class="title">{{item.name}}</div>
				<div class="unti">{{item.unit}}</div>
			</div>
		</div>
		<div class="pageChange">
			<el-pagination
				:currentPage="currentPage"
				background
				layout="prev, pager, next"
				:total="1000"
				@current-change="handleCurrentChange"
				/>
				<div class="except"><span>{{currentPage}}</span>/100 到第</div>
				<input type="number" class="pageSum" v-model="newPage" />
				<div class="except">页</div>
				<div class="pageBtn" @click="pageBtn">确定</div>
		</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tradesList:[{
					title:'全部'
				},{
					title:'融资担保'
				},{
					title:'市场营销'
				},{
					title:'人才培育'
				},{
					title:'法律维权'
				},{
					title:'管理咨询'
				},{
					title:'创业辅导'
				},{
					title:'技术服务'
				},{
					title:'信息服务'
				},{
					title:'其他服务'
				}],
				label:0,//行业分类选中标签
				unityList:[{
					name:'山东山森数控技术有限公司山东山森数控技术有限公司山东山森数控技术有限公司山东山森数控技术有限公司',
					image:'http://hlstore.yimetal.cn/2022/%E7%BC%96%E7%BB%84%2010@3x.png',
					unit:'潍坊xx信息科技公司'
				}],
				currentPage:1,//换页初始页数
				newPage:'',//输入框选择页数
			}
		},
		methods:{
			//改变页数触发事件
			handleCurrentChange(e){
				this.currentPage = e
			},
			pageBtn(){
				if(this.newPage >= 0 && this.newPage < 101){
					this.currentPage = this.newPage
				}
			}
		}
	}
</script>

<style scoped>
	.unti{
		font-weight: 400;
		color: #595D64;
		font-size: 14px;
	}
	.toRelease{
		width: 103px;
		height: 32px;
		background: #2298FF;
		box-shadow: 0px 0px 29px 0px rgba(255, 158, 105, 0.28);
		border-radius: 4px;
		font-weight: 500;
		color: #FFFFFF;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.searchBtn img{
		width: 20px;
		height: 20px;
	}
	.searchBtn{
		width: 41px;
		height: 32px;
		background: #2298FF;
		box-shadow: 0px 0px 29px 0px rgba(255, 158, 105, 0.28);
		border-radius: 0px 4px 4px 0px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.search input{
		width: 285px;
		height: 32px;
		background: #FFFFFF;
		border-radius: 4px;
		font-weight: 400;
		color: #999999;
		font-size: 12px;
		padding: 0 12px;
		box-sizing: border-box;
		outline: none;
		border: 0;
		border-radius: 0;
	}
	.search{
		display: flex;
		align-items: center;
		box-shadow: 0px 0px 7px 0px rgba(190, 190, 190, 0.57);
	}
	.searchtitle{
		font-weight: 400;
		color: #484848;
		font-size: 16px;
	}
	.searchBox{
		display: flex;
		align-items: center;
	}
	.sfFlex{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 25px 14px 27px 24px;
		/* height: 82px; */
		/* padding: 0px 14px 0px 24px; */
		box-sizing: border-box;
		width: 1200px;
		margin: auto;
		/* margin-bottom: 12px; */
	}
	.pageBtn{
		width: 80px;
		height: 36px;
		background: #F0F2F5;
		border-radius: 3px;
		border: 1px solid #D7DBE0;
		font-weight: 400;
		color: #333333;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 5px;
	}
	.pageSum{
		width: 63px;
		height: 36px;
		background: #FFFFFF;
		border-radius: 3px;
		border: 1px solid #E6E6E6;
		margin: 5px 4px;
		outline: none;
		text-align: center;
	}
	.except span{
		color: #3D7FFF;
	}
	.except{
		font-weight: 400;
		color: #333333;
		font-size: 12px;
	}
	.pageChange{
		display: flex;
		align-items: center;
		margin: auto;
		width: 1200px;
		justify-content: center;
	}
	.pageBox{
		width: 1200px;
		margin: auto;
		background-color: #fff;
		margin-bottom: 145px;
		padding-bottom: 38px;
	}
	.libotFelx{
		width: 264px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		font-weight: 400;
		color: #595D64;
		font-size: 14px;
	}
	.lableOne{
		width: 86px;
		height: 21px;
		background: #52C41A;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}
	.lablefex{
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 264px;
		margin: auto;
		margin-bottom: 24px;
	}
	.title{
		font-weight: 500;
		color: #51565D;
		font-size: 18px;
		width: 264px;
		line-height: 25px;
		margin: auto;
		height: 75px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.liBox img{
		width: 264px;
		height: 148px;
		margin: auto;
		display: block;
		margin-bottom: 10px;
	}
	.liBox{
		padding: 10px;
		box-sizing: border-box;
		width: 284px;
		height: 275px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		margin-bottom: 11px;
	}
	.ulBox{
		width: 1200px;
		margin: auto;
		background-color: #FFF;
		padding: 18px 14px 0 14px;
		box-sizing: border-box;
		border-radius: 2px;
		margin-bottom: 145px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-flow: wrap;
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
	.tsBox{
		width: 1200px;
		/* height: 75px; */
		margin: auto;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin-bottom: 12px;
		padding-top: 25px;
	}
	.tradesBox{
		width: 1200px;
		/* height: 75px; */
		margin: auto;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		padding-left: 24px;
		box-sizing: border-box;
		/* padding: 32px 0 27px 0;
		box-sizing: border-box; */
	}
</style>
