<template>
	<div class="box">
		<div class="stay">您现在所在位置:服务机构><span>机构详情</span></div>
		<div class="detBox">
			<div class="detTitle">{{info.enterprise_name}}</div>
			<div class="detTime">{{info.create_time}}</div>
			<div class="detflex">
				<div class="detflexstr">服务领域：</div>
				<div class="detli detareali">
					<div v-for="item in info.service_area_name">{{item}}</div>
				</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">单位地址：</div>
				<div class="detli">{{info.service_province}}{{info.service_city}}{{info.service_area}}{{info.address}}</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">联系人：</div>
				<div class="detli">{{info.company_contacts}}</div>
			</div>
			<div class="detflex">
				<div class="detflexstr">服务电话：</div>
				<div class="detli">{{info.company_phone}}</div>
			</div>
			<div class="detStart">核心产品：</div>
			<div class="detCon" v-html="info.company_introduce"></div>
			<div class="detImg">
				<img :src="info.avater">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				info:''
			}
		},
		created() {
			this.getUserInfo()
		},
		methods:{
			getUserInfo() {
				this.$apiFun.userInfo({
					user_id: this.$route.query.id
				}).then(res => {
					this.info = res.data
					this.info.company_introduce = this.$globalMethod.showHtml(this.info.company_introduce)
				})
			}
		}
	}
</script>

<style scoped>
	.detareali div{
		margin-right: 10px;
	}
	.detareali{
		display: flex;
		align-items: center;
		
	}
	.detImg img{
		width: 265px;
		height: 190px;
		border-radius: 4px;
		margin-right: 32px;
		margin-bottom: 20px;
	}
	.detImg{
		width: 1190px;
		display: flex;
		align-items: center;
		flex-flow: wrap;
	}
	.detCon{
		font-size: 14px;
		font-weight: 400;
		color: #444444;
		line-height: 26px;
		margin-bottom: 26px;
	}
	.detStart{
		font-size: 16px;
		font-weight: 500;
		color: #444444;
		margin-bottom: 22px;
	}
	.detli{
		font-size: 16px;
		font-weight: 400;
		color: #444444;
		margin-left: 10px;
	}
	.detflexstr{
		width: 80px;
		text-align-last: justify;
		font-size: 16px;
		font-weight: 500;
		color: #444444;
	}
	.detflex{
		display: flex;
		align-items: center;
		margin-bottom: 22px;
	}
	.detTime{
		font-size: 14px;
		font-weight: 400;
		color: #777777;
		margin-bottom: 22px;
	}
	.detTitle{
		font-size: 24px;
		font-weight: 600;
		color: #333333;
		letter-spacing: 2px;
		margin-bottom: 14px;
	}
	.detBox{
		width: 1200px;
		background: #FFFFFF;
		padding: 32px 15px 35px 27px;
		box-sizing: border-box;
		margin: auto;
		margin-bottom: 160px;
	}
</style>
