<template>
	<div class="box">
		<div class="stay">您现在所在位置:供需信息><span>供应信息</span></div>
		<div class="tsBox">
			<div class="tradesBox">
				<div class="tradesStr">所属行业：</div>
				<div class="tradesLists">
					<div class="tradesList" v-for="(item,index) in tradesList">
						<div :class="label == index?'tradesLabel':''" @click="labelClass(index)">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="sfFlex">
				<div class="searchBox">
					<div class="searchtitle">内容搜索：</div>
					<div class="search">
						<input type="text" placeholder="请输入您想查询的关键词" v-model="keywords" />
						<div class="searchBtn" @click="search">
							<img src="../../assets/images/search.png" />
						</div>
					</div>
				</div>
				<div class="toRelease">发布需求信息</div>
			</div>
		</div>
		<div class="pageBox">
			<div class="ulBox">
				<div v-for="(item,index) in unityList" :key="index" @click="toSupplyList(item)">
					<div class="liBox" v-if="item.id">
						<img :src="item.images[0]">
						<div class="title">{{item.title}}</div>
						<div class="border1px"></div>
						<div class="unti">{{item.company_name}}</div>
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
				keywords: '', // 搜索内容
			}
		},

		mounted() {
			this.getIndustryCate()
			this.getSupplyList()
		},

		methods: {
			//改变页数触发事件
			handleCurrentChange(e) {
				this.currentPage = e
				this.getSupplyList()
			},
			pageBtn() {
				if (this.newPage >= 0 && this.newPage < 101) {
					this.currentPage = this.newPage
					this.getSupplyList()
				}
			},

			// 获取行业分类
			getIndustryCate() {
				this.$apiFun.industryCate({}).then(res => {
					this.tradesList = res.data
				})
			},
			// 获取供求信息
			getSupplyList() {
				this.$apiFun.supplyList({
					page: this.currentPage,
					limit: 8,
					industry_id: this.label == null ? '' : this.tradesList[this.label].id,
					keywords: this.keywords
				}).then(res => {
					if (res.code == 200) {
						this.unityList = res.data
						this.total = res.data.count
						this.totalPage = Math.ceil(res.data.count / 8);
						if (this.unityList.length != 0) {
							for (let i in this.unityList) {
								if (this.unityList[i].detail) {
									this.unityList[i].detail = this.$globalMethod.showHtml(this.unityList[i]
										.detail)
								}
								if (this.unityList[i].images) {
									this.unityList[i].images = this.unityList[i].images.split('|')
								}
							}
						}
					} else {
						this.$message({
							showClose: true,
							message: res.message,
							type: 'error'
						});
					}
				})
			},
			// 供求信息路由跳转
			toSupplyList(e) {
				this.$router.push({
					path: '/supplyDet',
					query: {
						id: e.id
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
				this.getSupplyList()
			},
			// 搜索
			search() {
				this.currentPage = 1
				this.getSupplyList()
			}
		}
	}
</script>

<style scoped>
	.unti {
		font-weight: 400;
		color: #595D64;
		font-size: 14px;
	}

	.toRelease {
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

	.searchBtn img {
		width: 20px;
		height: 20px;
	}

	.searchBtn {
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

	.search input {
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

	.search {
		display: flex;
		align-items: center;
		box-shadow: 0px 0px 7px 0px rgba(190, 190, 190, 0.57);
	}

	.searchtitle {
		font-weight: 400;
		color: #484848;
		font-size: 16px;
	}

	.searchBox {
		display: flex;
		align-items: center;
	}

	.sfFlex {
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
		line-height: 25px;
		margin: auto;
		height: 55px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.liBox img {
		width: 264px;
		height: 148px;
		margin: auto;
		display: block;
		margin-bottom: 10px;
	}

	.liBox {
		padding: 10px;
		box-sizing: border-box;
		width: 284px;
		height: 275px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		margin: 0 4.5px;
		margin-bottom: 11px;
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

	.tsBox {
		width: 1200px;
		/* height: 75px; */
		margin: auto;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin-bottom: 12px;
		padding-top: 25px;
	}

	.tradesBox {
		width: 1200px;
		/* height: 75px; */
		margin: auto;
		background: #FFFFFF;
		display: flex;
		align-items: flex-start;
		padding-left: 24px;
		box-sizing: border-box;
		/* padding: 32px 0 27px 0;
		box-sizing: border-box; */
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

	.border1px {
		width: 265px;
		height: 1px;
		border-bottom: 1px solid #F6F6F6;
		margin: 9px auto;
	}
</style>
