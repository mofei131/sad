<template>
	<div class="box">
		<div class="fotnav">
			<div class="top">
				<div class="left">
					<!-- <div class="lleft">
						<div>友情链接:</div>
						<div></div>
						<div></div>
					</div> -->
					<!-- <div class="lcenter"></div> -->
					<div class="lright">
						<div class="footuel">
							<div style="margin-right: 15px;">友情链接:</div>
							<div class="linkftop">
							<div class="linkFoot">
							<!-- <a target="_blank" href="http://sme-service.miit.gov.cn/">中小企业公共服务一体化平台</a>
							<a target="_blank" href="http://smesd.com.cn/">山东省中小企业公共服务平台</a>
							<a target="_blank" href="http://ienyuan.com/">源链云公共服务平台</a> -->
								<div class="swiper-container urlSwiper">
									<div class="swiper-wrapper">
										<div class="swiper-slide" v-for="(item,index) in linkList">
											<a target="_blank" :href="item.url">{{item.name}}</a>
										</div>
									</div>
								</div>
							</div>
							</div>
						</div>
						<div class="footone">潍坊市中小企业公共服务平台</div>
						<div class="foottwo">—— 国家级中小企业公共服务示范平台 ——</div>
						<!-- <div>潍坊市中小企业公共服务中心</div>
						<div>中国山东省潍坊市胜利东街1558号</div> -->
					</div>
				</div>
				<div class="footcenter">
					<img src="../assets/images/QR.png" />
				</div>
				<div class="right">
					<div class="lleft">
						<div style="letter-spacing: 2px;">潍坊市中小企业公共服务中心</div>
						<div class="footdhyd">
							<div>单位地址：</div>
							<div class="dootem">
								<div>潍坊高新区胜利东街195号</div>
							</div>
						</div>
						<div class="footdhyd">
							<div class="dootem">
								<div>联系电话：</div>
								<div>0536-8198100</div>
							</div>
							<div class="dootem" style="margin-left: 38px;">
								<div>单位邮箱：</div>
								<div>wf_sme@163.com</div>
							</div>
						</div>
					</div>
					<!-- <div class="lcenter"></div> -->
					<!-- <div class="lright">
						<div></div>
						<div>潍坊高新区胜利东街195号</div>
						<div class="footdhyd">
							<div>0536-8198100</div>
							<div class="dootem">
								<div>单位邮箱：</div>
								<div>wf_sme@163.com</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>
			<div class="bot">
				<div class="foothrf">
					<router-link target="_blank" to="/">网站首页</router-link>
					<div class="footwiht"></div>
					<router-link target="_blank" to="/dynamic">活动动态</router-link>
					<div class="footwiht"></div>
					<el-tooltip placement="top">
						<template #content>联系电话：0536-8198100<br />单位邮箱：wf_sme@163.com</template>
						<div class="contact">联系方式</div>
					</el-tooltip>
					<!-- <div class="contact" >联系方式</div> -->
					<div class="footwiht"></div>
					<router-link target="_blank" to="/falv">法律声明</router-link>
					<div class="footwiht"></div>
					<router-link target="_blank" to="/fuwu">服务条款</router-link>
					<div class="footwiht"></div>
					<router-link target="_blank" to="/yinsi">隐私政策</router-link>
				</div>
				<div class="botnav">
					<div>版权所有 © 潍坊市企业服务中心  
					<a target="_blank" href="https://www.beian.gov.cn/portal/registerSystemInfo">鲁ICP备17052774号-1</a>
					</div>
					<!-- <img src="../assets/images/police.png" /> -->
					<!-- <div>鲁ICP备17052774号-1</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				linkList:''
			}
		},
		mounted() {
			this.getLinkList()
			setTimeout(function(){
				new Swiper('.urlSwiper', {
					slidesPerView:3,
					observer: true,
					observeParents: true,
				})
			},300)
		},
		methods:{
			//获取外链
			getLinkList(){
				this.$apiFun.linkList({type:2}).then((res) => {
					this.linkList = res.data
					// console.log(res)
					})
			},
		}
	}
</script>

<style scoped>
	.footcenter{
		width: 160px;
	}
	.linkFoot{
		width: 500px;
	}
	/* .linkftop::-webkit-scrollbar {
		display: none;
	}
	.linkftop{
		width: 500px;
		overflow: scroll;
	}
	.linkFoot{
		display: flex;
		align-items: center;
		width: max-content;
	} */
	.foottwo{
		font-size: 12px;
		text-align: center;
	}
	.footone{
		font-size: 16px;
		letter-spacing: 2px;
		text-align: center;
	}
	/* .lright div::selection {
	background:rgba(0,0,0,0);
	color:#fff;
	}
	.lright div::-moz-selection {
	background:rgba(0,0,0,0);
	color:#fff;
	}
	.lright div::-webkit-selection {
	background:rgba(0,0,0,0);
	color:#fff;
	} */
	.contact{
		cursor: pointer;
	}
	.footwiht{
		width: 1px;
		height: 13px;
		background-color: #fff;
		margin: 0 16px;
	}
	.foothrf{
		display: flex;
		align-items: center;
	}
	.footdhyd,.dootem{
		display: flex;
		align-items: center;
	}
	.lright a{
		cursor: pointer;
	}
	.footuel a:hover{
		color: #3389FF;
		/* font-size: 13px; */
	}
	.footuel a{
		cursor: pointer;
		/* margin-left: 15px; */
	}
	.footuel{
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}
	.footcenter img{
		width: 104px;
		height: 104px;
	}
	.bot{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		/* padding-top: 27px; */
		height: 73px;
	}
	.botnav img{
		width: 18px;
		height: 18px;
		margin: 0 4px 0 4px;
	}
	.botnav{
		display: flex;
		align-items: center;
		font-size: 14px;
		color: #FFFFFF;
	}
	.lcenter{
		width: 1px;
		height: 80px;
		background-color: #FFF;
		margin: 0 52px 0 46px;
	}
	.lleft,.lright{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 90px;
	}
	.left,.right{
		display: flex;
		align-items: center;
		/* justify-content: space-around; */
		font-size: 12px;
	}
	.top{
		width: 1200px;
		height: 130px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-bottom: 1px solid #fff;
	}
	.fotnav{
		width: 1200px;
		margin: auto;
	}
	.box{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		/* background: #1D2735; */
		background: #555555;
		height: 210px;
		box-sizing: border-box;
		color: #fff;
		/* position: absolute;
		bottom: 0;
		left: 0; */
	}
</style>
