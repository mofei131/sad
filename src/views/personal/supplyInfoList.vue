<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">供应信息>询价列表</div>
			<div class="abCon"></div>
			<div class="problemLiBox">
				<div class="eaiLi">
					<div class="conBox">
						<div class="conBoxTop">
							<div class="conBoxLeft">
								<div class="swiper-container">
										<div class="swiper-wrapper">
											<div class="swiper-slide" v-for="(item,index) in needInfo.images" :key="index">
												<img :src="item" >
											</div>
											<!-- <div class="swiper-slide">
												<img src="../../assets/images/banner.png" >
											</div>
											<div class="swiper-slide">
												<img src="../../assets/images/banner.png" >
											</div> -->
										</div>
								</div>
							</div>
							<div class="conBoxRight">
								<div class="abrOne">{{needInfo.title}}</div>
								<div class="abrTwo">发布时间：{{needInfo.create_time}}</div>
								<div class="abrTwo">供应类别：{{needInfo.industry_name}}</div>
								<div class="abrTwo">发布企业：{{needInfo.company_name}}</div>
								<div class="abrTwo">总浏览量：{{needInfo.look}}</div>
							</div>
						</div>
						<div class="conBoxbot">
							<div class="sbbTitle">供应详情：</div>
							<div class="botcontext">{{needInfo.detail}}</div>
						</div>
					</div>
					<div class="problemLi" v-for="(item,index) in needInfo.inquiryList">
						<div class="problemLiLeft">
							<div>{{item.title}}</div>
							<div class="put" @click="todemandDet(item.id)">查看</div>
						</div>
						<div class="problemLiRight">
							<div>{{item.content}}</div>
							<div>{{item.create_time}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default{
		data(){
			return{
				needInfo:''
			}
		},
		mounted() {
			new Swiper ('.swiper-container', {
				loop: true,
				autoplay:3000,
				observer: true,
				observeParents: true,
			})
			this.getMyNeedInfo()
		},
		methods: {
			//去详情
			todemandDet(e){
				this.$router.push({
					path:'/demandInquiryDet',
					query:{
						id:e
					},
				})
			},
			//获取需求详情
			getMyNeedInfo(){
				this.$apiFun.mySupplyInfo({
					id:this.$store.state.supplyId
				}).then((res) => {
					if(res.code == 200){
						let info = res.data
						info.images = info.images.split('|')
						this.needInfo = info
					}else{
						// this.$message({
						// 		showClose: true,
						// 		message: res.message,
						// 		type: 'error'
						// 	});
					}
				})
			}
		}
	}
</script>

<style scoped>
	.conBox{
		border-bottom: 1px solid #E7E7E7;
		padding-bottom: 10px;
	}
	.sbbTitle{
		font-size: 16px;
		font-weight: 500;
		color: #333333;
		margin-bottom: 12px;
	}
	.conBoxbot{
		padding-top: 20px;
		width: 722px;
		margin: auto;
	}
	.abrTwo{
		font-size: 16px;
		font-weight: 500;
		color: #444444;
		padding-top: 23px;
	}
	.abrOne{
		font-size: 24px;
		font-weight: 600;
		color: #333333;
		letter-spacing: 2px;
		margin-bottom: 5px;
	}
	.conBoxRight{
		width: 369px;
	}
	.conBoxTop{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.conBoxLeft,.swiper-slide img{
		width: 314px;
		height: 214px;
	}
	.gyBtn{
		width: 144px;
		height: 40px;
		background: #2298FF;
		border-radius: 3px;
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		cursor: pointer;
	}
	.problemLiBox{
		height: 777px;
		overflow: scroll;
		margin-bottom: 36px;
	}
	.problemLiBox::-webkit-scrollbar,.hyright::-webkit-scrollbar {/*隐藏滚轮*/
	display: none;
	}
	.put{
		width: 55px;
		height: 24px;
		background: #1890FF;
		border-radius: 2px;
		font-size: 12px;
		font-weight: 500;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.problemLiRight div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #999999;
	}
	.problemLiRight div:nth-child(1){
		width: 500px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		font-size: 14px;
		font-weight: 400;
		color: #666666;
	}
	.problemLiLeft{
		margin-bottom: 14px;
	}
	/* .problemLiLeft div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #777777;
	} */
	.problemLiLeft div:nth-child(1){
		width: 420px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		font-size: 16px;
		font-weight: 600;
		color: #333333;
		letter-spacing: 1px;
	}
	.problemLiLeft,.problemLiRight{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.eaiLi{
		width: 722px;
		border-bottom: 1px solid #E7E7E7;
		padding: 11px 0;
		box-sizing: border-box;
		margin: auto;
	}
	.problemLi{
		width: 722px;
		height: 84px;
		padding: 11px 0;
		box-sizing: border-box;
		margin: auto;
	}
	.abCon{
		width: 722px;
		height: 1px;
		background-color: #1890FF;
		margin: auto;
		margin-bottom: 12px;
	}
	.exinTitle{
		font-size: 20px;
		font-weight: 400;
		color: #1890FF;
		margin: 0 0 8px 94px;
	}
	.exifBox{
		width: 895px;
		height: 912px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 4px 4px 0px 0px;
		padding-top: 24px;
		box-sizing: border-box;
	}
</style>
