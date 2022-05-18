<template>
	<div class="box">
		<div class="stay">您现在所在位置:<span>专家咨询</span></div>
		<div class="areaBox">
			<div class="tradesBox">
				<div class="tradesStr">所属行业：</div>
				<div class="tradesLists">
					<div class="tradesList" :class="label == null?'tradesLabel':''" @click="labelClass(null)">
						全部
					</div>
					<div class="tradesList" v-for="(item,index) in tradesList" @click="labelClass(index)">
						<div :class="label == index?'tradesLabel':''" @click="label = index">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="tradesBox">
				<div class="tradesStr">归属区域：</div>
				<div class="tradesLists">
					<div class="tradesList" :class="area == null?'tradesLabel':''" @click="areaClass(null)">
						全部
					</div>
					<div class="tradesList" v-for="(item,index) in areaList" @click="areaClass(index)">
						<div :class="area == index?'tradesLabel':''" @click="area = index">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="tradesBox">
				<div class="tradesStr">专业特长：</div>
				<div class="tradesLists">
					<div class="tradesList" :class="major == null?'tradesLabel':''" @click="majorListClass(null)">
						全部
					</div>
					<div class="tradesList" v-for="(item,index) in majorList" @click="majorListClass(index)">
						<div :class="major == index?'tradesLabel':''" @click="major = index">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="answerBox">
			<div class="expertSum">符合条件的专家共{{data}}位</div>
			<input type="text" placeholder="请输入问题标题" v-model="title" />
			<textarea placeholder="请输入您要咨询的问题" v-model="content"></textarea>
			<div class="notes">注：提交的问题将会发送给所有符合条件的专家。</div>
			<div class="putBut" @click="submit">提交问题</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tradesList: [],
				label: null, //行业分类选中标签
				areaList: [],
				area: null, //地区选中标签
				majorList: [],
				major: null, //地区选中标签
				data: 0,
				title: '',
				content: ''
			}
		},

		mounted() {
			this.getIndustryCate()
			this.getCityList()
			this.getMajorList()
			this.getSelectExpertCommitQuestion()
		},

		methods: {
			// 获取行业分类
			getIndustryCate() {
				this.$apiFun.industryCate({}).then(res => {
					this.tradesList = res.data
				})
			},
			// 切换行业分类
			labelClass(index) {
				this.label = index
				this.getSelectExpertCommitQuestion()
			},
			// 获取城市列表
			getCityList() {
				this.$apiFun.cityList({}).then(res => {
					this.areaList = res.data
				})
			},
			// 切换城市列表
			areaClass(index) {
				this.area = index
				this.getSelectExpertCommitQuestion()
			},
			// 获取专业特长列表
			getMajorList() {
				this.$apiFun.majorList({}).then(res => {
					this.majorList = res.data
				})
			},
			// 切换专业特长
			majorListClass(index) {
				this.major = index
				this.getSelectExpertCommitQuestion()
			},
			// 获取专家数量
			getSelectExpertCommitQuestion() {
				this.$apiFun.selectExpertCommitQuestion({
					user_id: JSON.parse(localStorage.getItem('userInfo')).id,
					type: 1,
					industry_id: this.label == null ? '' : this.tradesList[this.label].id,
					service_city: this.area == null ? '' : this.areaList[this.area].id,
					major_id: this.major == null ? '' : this.majorList[this.major].id
				}).then(res => {
					if (res.code == 200) {
						this.data = res.data
					} else {
						this.$message({
							showClose: true,
							message: res.message,
							type: 'error'
						});
					}
				})
			},
			// 提交问题
			submit() {
				if (this.title == '') {
					this.$message({
						showClose: true,
						message: '请输入问题标题'
					});
					return
				}
				if (this.content == '') {
					this.$message({
						showClose: true,
						message: '请输入问题内容'
					});
					return
				}
				this.$apiFun.selectExpertCommitQuestion({
					user_id: JSON.parse(localStorage.getItem('userInfo')).id,
					type: 0,
					industry_id: this.label == null ? '' : this.tradesList[this.label].id,
					service_city: this.area == null ? '' : this.areaList[this.area].id,
					major_id: this.major == null ? '' : this.majorList[this.major].id,
					ask_title: this.title,
					ask_content: this.content
				}).then(res => {
					if (res.code == 200) {
						this.title = ''
						this.content = ''
						this.$message({
							showClose: true,
							message: '提交成功',
							type: 'success'
						});
					} else {
						this.$message({
							showClose: true,
							message: res.message,
							type: 'error'
						});
					}
				})
			}
		}
	}
</script>

<style scoped>
	.putBut {
		width: 180px;
		height: 44px;
		background: #2298FF;
		border-radius: 4px;
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
	}

	.notes {
		font-size: 16px;
		font-weight: 400;
		color: #FF4D4F;
		margin-left: 40px;
		margin-bottom: 30px;
	}

	.answerBox textarea {
		width: 1152px;
		height: 186px;
		margin: auto;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333;
		padding: 10px 16px;
		box-sizing: border-box;
		margin-bottom: 14px;
		display: block;
	}

	.answerBox input {
		width: 1152px;
		height: 50px;
		margin: auto;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333;
		padding: 0 16px;
		box-sizing: border-box;
		margin-bottom: 15px;
		display: block;
	}

	.expertSum {
		font-size: 28px;
		font-weight: 500;
		color: #3389FF;
		text-align: center;
		margin-bottom: 70px;
	}

	.answerBox {
		width: 1200px;
		height: 549px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin: auto;
		padding-top: 28px;
		margin-bottom: 150px;
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

	.areaBox {
		width: 1200px;
		margin: auto;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		margin-bottom: 12px;
		padding-top: 25px;
		padding-bottom: 1px;
	}

	.tradesBox {
		width: 1200px;
		margin: auto;
		background: #FFFFFF;
		display: flex;
		align-items: flex-start;
		padding-left: 24px;
		box-sizing: border-box;
		margin-bottom: 25px;
	}
</style>
