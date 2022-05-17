<template>
	<div class="box">
		<div class="stay">您现在所在位置:<span>活动动态</span></div>
		<div class="tradesBox">
			<div class="tradesStr">所属行业：</div>
			<div class="tradesList" v-for="(item,index) in tradesList">
				<div :class="label == index?'tradesLabel':''" @click="label = index">
					{{item.title}}
				</div>
			</div>
		</div>
		<div class="pageBox">
		<div class="ulBox">
			<div class="liBox" v-for="(item,index) in unityList" :key="index">
				<img :src="item.image" >
				<div class="title">{{item.name}}</div>
				<!-- <div class="lablefex">
					<div class="lableOne" v-for="(item2,index2) in item.lable">{{item2.title}}</div>
				</div> -->
				<div class="libotFelx">
					<div class="licontact">联系人：{{item.contact}}</div>
					<div class="limobile">电话：{{item.mobile}}</div>
				</div>
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
					name:'山东山森数控技术有限公司',
					image:'http://hlstore.yimetal.cn/2022/%E7%BC%96%E7%BB%84%2010@3x.png',
					lable:[{
						title:'人才培养'
					},{
						title:'咨询管理'
					},{
						title:'融资担保'
					}],
					contact:'张三',
					mobile:'17616134289'
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
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		margin: auto;
		margin-bottom: 5px;
	}
	.liBox img{
		width: 284px;
		height: 148px;
		margin: auto;
		display: block;
		margin-bottom: 10px;
	}
	.liBox{
		box-sizing: border-box;
		width: 284px;
		height: 238px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		margin-bottom: 11px;
		box-sizing: border-box;
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
	.tradesBox{
		width: 1200px;
		height: 75px;
		margin: auto;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		padding-left: 24px;
		box-sizing: border-box;
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
</style>
