<template>
	<div class="box">
		<div class="stay">您现在所在位置:<span>活动动态</span></div>
		<div class="tradesBox">
			<div class="tradesStr">所属行业：</div>
			<div class="tradesLists">
				<div class="tradesList" :class="label == null?'tradesLabel':''" @click="labelClass(null)">
					全部
				</div>
				<div class="tradesList" v-for="(item,index) in tradesList">
					<div :class="label == index?'tradesLabel':''" @click="labelClass(index)">
						{{item.name}}
					</div>
				</div>
			</div>
		</div>
		<div class="pageBox">
			<div class="ulBox">
				<div v-for="(item,index) in unityList" :key="index">
					<div class="liBox" v-if="item.id" @click="toActivityList(item)">
						<img :src="item.pic">
						<div class="title">{{item.title}}</div>
						<div class="libotFelx">
							<div class="licontact">主办方：{{item.company}}</div>
							<div class="limobile">{{item.create_time}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="pageChange">
				<el-pagination :currentPage="currentPage" background layout="prev, pager, next" :total="total"
					@current-change="handleCurrentChange" />
				<div class="except"><span>{{currentPage}}</span>/{{totalPage}} 到第</div>
				<input type="number" class="pageSum" v-model="newPage" />
				<div class="except">页</div>
				<div class="pageBtn" @click="pageBtn">确定</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tradesList: [],
				label: null, //行业分类选中标签
				unityList: [],
				total: 0, //总共页数
				totalPage: 0, //页数
				currentPage: 1, //换页初始页数
				newPage: '', //输入框选择页数
				keywords:''
			}
		},
		created() {
			if(this.$route.query){
				this.keywords = this.$route.query.value
			}
		},
		mounted() {
			this.getIndustryCate()
			this.getActivityList()
		},

		methods: {
			//改变页数触发事件
			handleCurrentChange(e) {
				this.currentPage = e
				this.getActivityList()
			},
			pageBtn() {
				if (this.newPage >= 0 && this.newPage < this.totalPage + 1) {
					this.currentPage = this.newPage
					this.getActivityList()
				}
			},

			// 获取行业分类
			getIndustryCate() {
				this.$apiFun.industryCate({}).then(res => {
					this.tradesList = res.data
				})
			},
			// 获取活动
			getActivityList() {
				this.$apiFun.activityList({
					page: this.currentPage,
					limit: 8,
					industry_id: this.label == null ? '' : this.tradesList[this.label].id,
					keywords:this.keywords
				}).then(res => {
					if (res.code == 200) {
						this.unityList = res.data
						this.total = res.data.count
						this.totalPage = Math.ceil(res.data.count / 8);
					} else {
						this.$message({
							showClose: true,
							message: res.message,
							type: 'error'
						});
					}
				})
			},

			// 切换类型
			labelClass(index) {
				if (this.label == index) {
					this.label = null
				} else {
					this.label = index
				}
				this.currentPage = 1
				this.getActivityList()
			},
			// 查看详情
			toActivityList(e) {
				this.$router.push({
					path: '/dynamicDet',
					query: {
						id: e.id
					}
				})
			}
		}
	}
</script>

<style scoped>
	.pageBtn {
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

	.pageSum {
		width: 63px;
		height: 36px;
		background: #FFFFFF;
		border-radius: 3px;
		border: 1px solid #E6E6E6;
		margin: 5px 4px;
		outline: none;
		text-align: center;
	}

	.except span {
		color: #3D7FFF;
	}

	.except {
		font-weight: 400;
		color: #333333;
		font-size: 12px;
	}

	.pageChange {
		display: flex;
		align-items: center;
		margin: auto;
		width: 1200px;
		justify-content: center;
	}

	.pageBox {
		width: 1200px;
		margin: auto;
		background-color: #fff;
		margin-bottom: 145px;
		padding-bottom: 38px;
	}

	.libotFelx {
		width: 264px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		font-weight: 400;
		color: #595D64;
		font-size: 14px;
	}

	.lableOne {
		width: 86px;
		height: 21px;
		background: #52C41A;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
	}

	.lablefex {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 264px;
		margin: auto;
		margin-bottom: 24px;
	}

	.title {
		font-weight: 500;
		color: #51565D;
		font-size: 18px;
		width: 264px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin: auto;
		margin-bottom: 10px;
	}

	.liBox img {
		width: 284px;
		height: 148px;
		margin: auto;
		display: block;
		margin-bottom: 10px;
	}

	.liBox {
		box-sizing: border-box;
		width: 284px;
		height: 238px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		margin: 0 4.5px;
		margin-bottom: 11px;
		box-sizing: border-box;
		cursor: pointer;
	}

	.ulBox {
		width: 1200px;
		margin: auto;
		background-color: #FFF;
		padding: 18px 14px 0 14px;
		box-sizing: border-box;
		border-radius: 2px;
		margin-bottom: 145px;
		display: flex;
		align-items: center;
		/* justify-content: space-around; */
		flex-flow: wrap;
		margin-bottom: 20px;
	}

	.tradesLabel {
		padding: 2px 4px;
		background: #2298FF;
		border-radius: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		cursor: pointer;
	}

	.tradesLists {
		width: 1030px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.tradesList {
		display: flex;
		align-items: center;
		margin-right: 20px;
		cursor: pointer;
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		line-height: 22px;
		margin-bottom: 20px;
	}

	.tradesStr {
		font-weight: 400;
		color: #484848;
		font-size: 16px;
		margin-right: 20px;
	}

	.tradesBox {
		padding-top: 25px;
		width: 1200px;
		margin: auto;
		background: #FFFFFF;
		display: flex;
		/* align-items: center; */
		padding-left: 24px;
		box-sizing: border-box;
		margin-bottom: 25px;
	}

	.stay span {
		color: #1890FF;
		margin-left: 5px;
	}

	.stay {
		width: 1200px;
		margin: auto;
		margin-bottom: 17px;
		color: #333333;
		font-size: 12px;
	}

	.licontact {
		width: 125px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
