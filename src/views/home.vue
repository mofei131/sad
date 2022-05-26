<template>
	<div class="box">
		<div class="ancolor">
			<div class="banner">
				<div class="swiper-container bannerSwiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="(item,index) in bannerList">
							<img :src="item.pic">
						</div>
					</div>
				</div>
			</div>
			<div class="notice">
				<div class="notTop">
					<div class="ntone">
						<div class="nottit">
							<img src="../assets/images/forIcon1.png">
							<div>通知公告</div>
						</div>
						<div class="notmore">
							<!-- @click="more('/inform')" -->
							<router-link target="_blank" to="/inform">
							<div>更多</div>
							</router-link>
							<el-icon class="el-icon--right" color="#1890FF">
								<arrow-right />
							</el-icon>
						</div>
					</div>
					<div class="ntone">
						<div class="nottit">
							<img src="../assets/images/forIcon2.png">
							<div>行业资讯</div>
						</div>
						<div class="notmore">
							<!-- @click="more('/industryList') -->
							<router-link target="_blank" to="/industryList">
							<div>更多</div>
							</router-link>
							<el-icon class="el-icon--right" color="#1890FF">
								<arrow-right />
							</el-icon>
						</div>
					</div>
				</div>
				<div class="notBot">
					<div class="ggleft">
						<div class="ggli" v-for="(item,index) in noticeList" :key="index">
							<!-- @click="toNoticeList(item)" -->
							<div class="gglione" :style="{color:item.color}">[{{item.type}}]</div>
							<router-link target="_blank" :to="{path:'/informDet',query:{id:item.id}}">
							<div class="gglitwo">{{item.name}}</div>
							</router-link>
							<div class="gglithree">{{item.create_time}}</div>
						</div>
					</div>
					<div class="hyright">
						<!-- @click="toMessageList(item)" -->
						<div class="hyli" v-for="(item,index) in messageList" :key="index">
							<div class="hylleft">
								<img :src="item.pic">
							</div>
							<div class="hylright">
								<div class="hyltop">
									<router-link target="_blank" :to="{path:'/industryDet',query:{id:item.id}}">
									<div>{{item.name}}</div>
									</router-link>
									<div>{{item.create_time}}</div>
								</div>
								<div class="hylbot" v-html="item.info"></div>
							</div>
						</div>
						<!-- <div class="hyli">
						<div class="hylleft">
							<img src="../assets/images/banner.png" >
						</div>
						<div class="hylright">
							<div class="hyltop">
								<div>团队的成长是管理者最大的成功</div>
								<div>2022-05-23</div>
							</div>
							<div class="hylbot">加班是应该的，不加班也是应该的，只有完不成工作是不应该的加班是应该的，不加班也是应该的，只有完不成工作是不应该的</div>
						</div>
					</div> -->
					</div>
				</div>
			</div>
		</div>
		<div class="cenBanner">
			<div class="swiper-container centerbanner">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in bannerList2">
						<img :src="item.pic">
					</div>
				</div>
			</div>
		</div>
		<div class="notice gqnotice">
			<div class="notTop">
				<div class="ntone">
					<div class="nottit">
						<img src="../assets/images/forIcon3.png">
						<div>供应信息</div>
					</div>
					<div class="notmore" >
						<!-- @click="more('/supplyNews')" -->
						<router-link target="_blank" to="/supplyNews">
						<div>更多</div>
						</router-link>
						<el-icon class="el-icon--right" color="#1890FF">
							<arrow-right />
						</el-icon>
					</div>
				</div>
				<div class="ntone">
					<div class="nottit">
						<img src="../assets/images/forIcon4.png">
						<div>需求信息</div>
					</div>
					<div class="notmore" >
						<!-- @click="more('/demandNews')" -->
						<router-link target="_blank" to="/demandNews">
						<div>更多</div>
						</router-link>
						<el-icon class="el-icon--right" color="#1890FF">
							<arrow-right />
						</el-icon>
					</div>
				</div>
			</div>
			<div class="notBot">
				<div class="ggleft">
					<div class="" v-for="(item, index) in supplyList" :key="index">
						 <!-- @click="toSupplyList(item)" -->
						<div class="sadli" v-if="item.id">
							<div class="ccw">
								<div class="ccwdiv">「{{item.industry_name}}」</div>
								<router-link target="_blank" :to="{path:'/supplyDet',query:{id:item.id}}">
								<div class="ccwfont">{{item.title}}</div>
								</router-link>								
							</div>
							<div class="ccl" v-html="item.detail"></div>
							<div class="timcom">
								<div>{{item.create_time}}</div>
								<div>{{item.company_name}}</div>
							</div>
						</div>
					</div>
				</div>
				<div class="hyright">
					<div v-for="(item, index) in needList" :key="index">
						<!-- @click="toNeedList(item)" -->
						<div class="sadli" v-if="item.id">
							<div class="ccw">
								<div class="ccwdiv">「{{item.industry_name}}」</div>
								<router-link target="_blank" :to="{path:'/demandDet',query:{id:item.id}}">
								<div class="ccwfont">{{item.title}}</div>
								</router-link>	
							</div>
							<div class="ccl" v-html="item.detail"></div>
							<div class="timcom">
								<div>{{item.create_time}}</div>
								<div>{{item.company_name}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="catalogueBox">
			<div class="catalogueTitle">企业名录</div>
			<div class="catalogueul">
				<div class="catalogueul2">
					<div v-for="(item,index) in companyList" :key="index">
						<!-- @click="toCompanyList(item)" -->
						<div class="catalogueli" v-if="item.id">
							<div class="clTitle">{{item.name}}</div>
							<div class="hqBox">
								<div class="hqleft">
									<div>所属行业：</div>
									<div class="hqOne">{{item.industry_name}}</div>
								</div>
								<div class="hqright">
									<div>所属区域：</div>
									<div class="hqOne">{{item.service_city}}</div>
								</div>
							</div>
							<div class="clLabel">
								<div v-for="(itm, idx) in item.company_tags" :key="idx"
									:style="'background:' + itm.color">
									<p>{{itm.name}}</p>
								</div>
							</div>
							<div class="claddress">
								<img src="../assets/images/address.png">
								<div>{{item.address}}</div>
							</div>
							<div class="clBtn">
								<router-link target="_blank" :to="{path:'/enterpriseDet',query:{id:item.id}}">查看详情</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		name: 'home',
		data() {
			return {
				bannerList: [], //轮播图
				bannerList2: [], //轮播图
				page: 1,
				limit: 6,
				noticeList: [], //通知公告列表
				messageList: [], //行业资讯列表
				supplyList: [], //供应信息列表
				needList: [], //需求信息列表
				companyList: [], //企业名录列表
			}
		},
		mounted() {
			setTimeout(function(){
				new Swiper('.bannerSwiper', {
					loop: true,
					autoplay:3000,
					// slidesPerGroup: 1, //定义1张图片为一组
					// freeMode: true, // 设置为true则变为free模式
					// speed:6000, // 匀速时间
					observer: true,
					observeParents: true,
					// autoplay: {
					// 		delay: 0,
					// 		disableOnInteraction: false,
					// 		pauseOnMouseEnter: true,
					// },
				})
				new Swiper('.centerbanner', {
						loop: true,
						autoplay:3000,
						observer: true,
						observeParents: true,
					})
			},300)
			this.getBannerList()
			this.getBannerList2()
			this.getNoticeList()
			this.getMessageList()
			this.getSupplyList()
			this.getNeedList()
			this.getCompanyList()
		},
		methods: {
			//获取轮播图
			getBannerList() {
				this.$apiFun.bannerList({
					type:1
				}).then(res => {
					this.bannerList = res.data
				})
			},
			getBannerList2() {
				this.$apiFun.bannerList({
					type:2
				}).then(res => {
					this.bannerList2 = res.data
					// console.log()
				})
			},
			//跳转行业资讯详情
			toMessageList(e) {
				this.$router.push({
					path: '/industryDet',
					query: {
						id: e.id
					}
				})
			},
			//获取行业资讯列表
			getMessageList() {
				this.$apiFun.messageList({
					page: this.page,
					limit: this.limit,
					is_hot: 1
				}).then((res) => {
					if (res.code == 200) {
						this.messageList = res.data
						if (this.messageList.length != 0) {
							for (let i in this.messageList) {
								this.messageList[i].info = this.$globalMethod.showHtml(this.messageList[i].info)
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
			//通知公告路由跳转
			// toNoticeList(e) {
			// 	this.$router.push({
			// 		path: '/informDet',
			// 		query: {
			// 			id: e.id
			// 		}
			// 	})
			// },
			//获取通知公告列表
			getNoticeList() {
				this.$apiFun.noticeList({
					page: this.page,
					limit: 10,
					is_hot: 1
				}).then((res) => {
					if (res.code == 200) {
						this.noticeList = res.data
					} else {
						this.$message({
							showClose: true,
							message: res.message,
							type: 'error'
						});
					}
				})
			},
			// 供应信息路由跳转
			toSupplyList(e) {
				this.$router.push({
					path: '/supplyDet',
					query: {
						id: e.id
					}
				})
			},
			// 获取供应信息
			getSupplyList() {
				this.$apiFun.supplyList({
					page: 1,
					limit: 4,
					industry_id: '',
					keywords: ''
				}).then(res => {
					if (res.code == 200) {
						this.supplyList = res.data
						if (this.supplyList.length != 0) {
							for (let i in this.supplyList) {
								if (this.supplyList[i].detail) {
									this.supplyList[i].detail = this.$globalMethod.showHtml(this.supplyList[i]
										.detail)
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
			// 需求信息路由跳转
			toNeedList(e) {
				this.$router.push({
					path: '/demandDet',
					query: {
						id: e.id
					}
				})
			},
			// 获取需求信息
			getNeedList() {
				this.$apiFun.needList({
					page: 1,
					limit: 4,
					industry_id: '',
					keywords: ''
				}).then(res => {
					if (res.code == 200) {
						this.needList = res.data
						if (this.needList.length != 0) {
							for (let i in this.needList) {
								if (this.needList[i].detail) {
									this.needList[i].detail = this.$globalMethod.showHtml(this.needList[i].detail)
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
			//企业能力列表(获取企业名录)
			getCompanyList() {
				this.$apiFun.companyList({
					page: 1,
					limit: 8,
					industry_id: '',
					service_city: ''
				}).then((res) => {
					if (res.code == 200) {
						this.companyList = res.data
					} else {
						this.$message({
							showClose: true,
							message: res.message,
							type: 'error'
						});
					}
				})
			},
			// 跳转企业详情
			// toCompanyList(e) {
			// 	let toUrl = this.$router.resolve({
			// 		path: '/enterpriseDet',
			// 		query: {
			// 			id: e.id
			// 		}
			// 	})
			// },
			// 更多
			more(url) {
				let toUrl = this.$router.push({
					path: url
				})
			}
		}
	}
</script>

<style scoped>
	.hqOne{
		width: 70px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		color: #3389FF;
	}
	.hqright{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.hqleft{
		border-right: 1px solid #e8e8e8;
		padding-left: 6px;
	}
	.hqleft,.hqright{
		width: 140px;
		display: flex;
		align-items: center;
		font-size: 12px;
		margin-bottom: 8px;
	}
	.hqBox{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cenBanner{
		padding-bottom: 20px;
		background-color: #fff;
	}
	.cenBanner img,.cenBanner{
		width: 1200px;
		height: 120px!important;
		margin: auto;
	}
	.swiper-wrapper{
	    transition-timing-function: linear;
	}
	.clBtn {
		font-weight: 500;
		color: #3389FF;
		font-size: 16px;
		text-align: center;
		cursor: pointer;
	}
.clBtn a{
	color: #3389FF;
}
	.claddress div {
		font-weight: 400;
		color: #51565D;
		font-size: 16px;
	}

	.claddress img {
		width: 15px;
		height: 15px;
		margin-right: 3px;
	}

	.claddress {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
	.clLabel div p{
		transform: scale(0.8);
	}
	.clLabel div {
		border-radius: 12px;
		font-weight: 500;
		color: #FFFFFF;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0px;
		white-space: nowrap;
		width: 58px;
		padding: 0px 5px;
		height: 16px;
	}

	.clLabel {
		width: 270px;
		height: 20px;
		display: flex;
		align-items: center;
		/* flex-wrap: wrap; */
		/* justify-content: space-between; */
		margin-bottom: 6px;
	}

	.clTitle {
		width: 268px;
		margin: auto;
		border-bottom: 1px solid #e8e8e8;
		font-weight: bold;
		color: #51565D;
		font-size: 18px;
		margin-bottom: 5px;
		text-align: center;
		padding-bottom: 13px;
		margin-bottom: 7px;
	}

	.catalogueli {
		width: 284px;
		height: 168px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		padding: 15px 0 0 4px;
		box-sizing: border-box;
		margin: 0 6px;
		margin-bottom: 16px;
	}

	.catalogueul {
		width: 1200px;
		background-color: #fff;
		margin: auto;
	}

	.catalogueul2 {
		margin: 0 8px;
		height: 368px;
		display: flex;
		flex-wrap: wrap;
		padding-top: 28px;
		padding-bottom: 32px;
	}

	.catalogueTitle {
		width: 1200px;
		height: 73px;
		background: linear-gradient(90deg, #0B6DD9 0%, #06E3E4 100%);
		font-weight: 600;
		color: #FFFFFF;
		font-size: 32px;
		font-family: PingFangSC-Semibold, PingFang SC;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.catalogueBox {
		background-color: #FAFAFA;
		width: 100%;
		max-width: 1920px;
		margin: auto;
		height: 735px;
		background-image: url(../assets/images/cityimg.png);
		background-repeat: no-repeat;
		background-position: bottom;
		background-size: 100%;
		padding-top: 40px;
		box-sizing: border-box;
	}

	.gqnotice {
		padding-bottom: 40px;
	}
	.timcom{
		width: 560px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.timcom div{
		color: #777777;
		font-size: 14px;
	}

	.ccl {
		width: 560px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #333333;
		font-size: 14px;
		height: 32px;
		display: flex;
		align-items: center;
		/* padding-left: 8px; */
		box-sizing: border-box;
	}
	.ccw{
		display: flex;
		align-items: center;
		width: 560px;
		margin-left: -10px;
	}
	.ccwdiv{
		color: #1574DA;
		font-size: 18px;
	}
	.sadli:hover .ccwfont{
		text-decoration:underline;
		color: #1574DA;
	}
	.ccwfont {
		font-weight: 600;
		color: #333333;
		font-size: 18px;
		/* width: 500px; */
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		/* margin-left: 10px; */
		cursor: pointer;
	}

	.sadli {
		width: 560px;
		height: 73px;
		border-bottom: 1px solid #EDEDED;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: auto;
		padding: 13px 0;
		/* cursor: pointer; */
	}

	.hylbot {
		width: 420px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.hylright {
		width: 460px;
	}

	.hyltop div:nth-child(2){
		color: #777777;
		font-size: 14px;
		width: 80px;
	}

	.hyltop div:nth-child(1) {
		width: 300px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 16px;
		font-weight: 600;
		color: #333333;
		cursor: pointer;
	}

	.hyltop {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;
	}
	.hyltop div:nth-child(1):hover{
		text-decoration:underline;
		color: #096DD9!important;
	}
	.hyli {
		width: 554px;
		height: 95px;
		border-bottom: 1px solid #EDEDED;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
	}

	.gglithree {
		color: #777777;
		font-size: 14px;
		width: 80px;
	}
	.gglitwo:hover{
		text-decoration:underline;
		color: #096DD9;
	}
	.gglitwo {
		width: 420px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #333;
	}
	.gglione {
		width: 50px;
		font-size: 16px;
		color: #91ABC2;
	}

	.ggli {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 554px;
		margin: auto;
		border-bottom: 1px solid #EDEDED;
		height: 40px;
		cursor: pointer;
	}

	.ggleft::-webkit-scrollbar,
	.hyright::-webkit-scrollbar {
		/*隐藏滚轮*/
		display: none;
	}

	.ggleft,
	.hyright {
		width: 600px;
		overflow: scroll;
		height: 400px;
	}

	.notBot {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hylleft img {
		width: 80px;
		height: 60px;
	}

	.ancolor {
		background: #FAFAFA;
		width: 100%;
		max-width: 1920px;
		margin: auto;
		/* padding-bottom: 40px; */
		/* margin-bottom: 42px; */
	}

	.notBot {
		width: 1200px;
		height: 408px;
		margin: auto;
		background-image: url(../assets/images/bacmap.png);
		background-size: 100%;
		background-repeat: no-repeat;
		background-color: #fff;
	}

	.notmore div {
		font-size: 14px;
		color: #1890FF;
	}

	.notmore {
		display: flex;
		align-items: center;
		cursor: pointer;
	}

	.nottit div {
		font-size: 20px;
		font-weight: 600;
		color: #FFFFFF;
		margin-left: 8px;
	}

	.nottit img {
		width: 20px;
		height: 20px;
	}

	.nottit {
		display: flex;
		align-items: center;
	}

	.ntone {
		width: 600px;
		height: 73px;
		background: linear-gradient(90deg, #0B6DD9 0%, #FFFFFF 100%);
		/* background: linear-gradient(90deg, #1890FF 0%, #FFFFFF 100%); */
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 12px 0 7px;
		box-sizing: border-box;
	}

	.notTop {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.notice {
		width: 1200px;
		margin: auto;
	}

	.swiper-slide img {
		width: 1200px;
		height: 428px;
	}

	.banner {
		width: 1200px;
		height: 428px;
		margin: auto;
		margin-bottom: 40px;
	}
</style>
