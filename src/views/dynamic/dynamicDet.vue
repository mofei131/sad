<template>
	<div class="box">
		<div class="stay">您现在所在位置:活动动态><span>活动详情</span></div>
		<div class="detBox">
			<div class="detTitle">{{info.title}}</div>
			<div class="detTime">{{info.create_time}}</div>
			<div class="detImg">
				<img :src="info.pic">
			</div>
			<div class="detflex">
				<div class="detflexstr">活动类别：</div>
				<div class="detli">{{info.activitytype_name}}</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">授课专家：</div>
				<div class="detli">{{info.expert}}</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">来访企业：</div>
				<div class="detli">{{info.visit_company}}</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">来访人数：</div>
				<div class="detli">{{info.visit_people}}</div>
			</div>
			<div class="detStart">活动情况：</div>
			<div class="detCon" v-html="info.detail"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				info: {}
			}
		},
		mounted() {
			this.getActivityInfo()
		},

		methods: {
			getActivityInfo() {
				this.$apiFun.activityInfo({
					id: this.$route.query.id
				}).then(res => {
					this.info = res.data
					this.info.detail = this.$globalMethod.showHtml(this.info.detail)
				})
			}
		}
	}
</script>

<style scoped>
	.detImg img {
		width: 265px;
		height: 190px;
		border-radius: 4px;
		margin-right: 32px;
		margin-bottom: 20px;
	}

	.detImg {
		width: 1190px;
		display: flex;
		align-items: center;
		flex-flow: wrap;
	}

	.detCon {
		font-size: 14px;
		font-weight: 400;
		color: #444444;
		line-height: 26px;
		margin-bottom: 26px;
		padding-bottom: 150px;
	}

	.detStart {
		font-size: 16px;
		font-weight: 500;
		color: #444444;
		margin-bottom: 22px;
	}

	.detli {
		font-size: 16px;
		font-weight: 400;
		color: #444444;
		margin-left: 10px;
	}

	.detflexstr {
		width: 80px;
		text-align-last: justify;
		font-size: 16px;
		font-weight: 500;
		color: #444444;
	}

	.detflex {
		display: flex;
		align-items: center;
		margin-bottom: 22px;
	}

	.detTime {
		font-size: 14px;
		font-weight: 400;
		color: #777777;
		margin-bottom: 22px;
	}

	.detTitle {
		font-size: 24px;
		font-weight: 600;
		color: #333333;
		letter-spacing: 2px;
		margin-bottom: 14px;
	}

	.detBox {
		width: 1200px;
		background: #FFFFFF;
		padding: 32px 15px 35px 27px;
		box-sizing: border-box;
		margin: auto;
		margin-bottom: 160px;
	}
</style>
