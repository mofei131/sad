<template>
	<div class="box">
		<div class="ancolor">
		<div class="banner">
			 <div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="../assets/images/banner.png" >
					</div>
					<div class="swiper-slide">
						<img src="../assets/images/banner.png" >
					</div>
					<div class="swiper-slide">
						<img src="../assets/images/banner.png" >
					</div>
				</div>
		</div>
		</div>
		<div class="notice">
			<div class="notTop">
				<div class="ntone">
					<div class="nottit">
						<img src="../assets/images/star.png" >
						<div>通知公告</div>
					</div>
					<div class="notmore">
						<div>更多</div>
						<el-icon class="el-icon--right" color="#1890FF">
							<arrow-right />
						</el-icon>
					</div>
				</div>
				<div class="ntone">
					<div class="nottit">
						<img src="../assets/images/star.png" >
						<div>行业资讯</div>
					</div>
					<div class="notmore">
						<div>更多</div>
						<el-icon class="el-icon--right" color="#1890FF">
							<arrow-right />
						</el-icon>
					</div>
				</div>
			</div>
			<div class="notBot">
				<div class="ggleft">
					<div class="ggli" v-for="(item,index) in noticeList" :key="index" @click="toNoticeList(item)">
						<div>{{item.name}}</div>
						<div>{{item.create_time}}</div>
					</div>
				</div>
				<div class="hyright">
					<div class="hyli" v-for="(item,index) in messageList" :key="index" @click="toMessageList(item)">
						<div class="hylleft">
							<img :src="item.pic" >
						</div>
						<div class="hylright">
							<div class="hyltop">
								<div>{{item.name}}</div>
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
		<div class="notice gqnotice">
			<div class="notTop">
				<div class="ntone">
					<div class="nottit">
						<img src="../assets/images/star.png" >
						<div>供求信息</div>
					</div>
					<div class="notmore">
						<div>更多</div>
						<el-icon class="el-icon--right" color="#1890FF">
							<arrow-right />
						</el-icon>
					</div>
				</div>
				<div class="ntone">
					<div class="nottit">
						<img src="../assets/images/star.png" >
						<div>需求信息</div>
					</div>
					<div class="notmore">
						<div>更多</div>
						<el-icon class="el-icon--right" color="#1890FF">
							<arrow-right />
						</el-icon>
					</div>
				</div>
			</div>
			<div class="notBot">
				<div class="ggleft">
					<div class="sadli">
						<div>刚工作的几年比谁更踏实，再过几年比谁更激情</div>
						<div>10月22日，首届RCEP区域（山东）进口商品博览会（简称RCEP博览会）圆满（简称RCEP博览会）圆满</div>
						<div>2021-11-10</div>
					</div>
					<div class="sadli">
						<div>刚工作的几年比谁更踏实，再过几年比谁更激情</div>
						<div>10月22日，首届RCEP区域（山东）进口商品博览会（简称RCEP博览会）圆满（简称RCEP博览会）圆满</div>
						<div>2021-11-10</div>
					</div>
				</div>
				<div class="hyright">
					<div class="sadli">
						<div>刚工作的几年比谁更踏实，再过几年比谁更激情</div>
						<div>10月22日，首届RCEP区域（山东）进口商品博览会（简称RCEP博览会）圆满（简称RCEP博览会）圆满</div>
						<div>2021-11-10</div>
					</div>
					<div class="sadli">
						<div>刚工作的几年比谁更踏实，再过几年比谁更激情</div>
						<div>10月22日，首届RCEP区域（山东）进口商品博览会（简称RCEP博览会）圆满（简称RCEP博览会）圆满</div>
						<div>2021-11-10</div>
					</div>
				</div>
			</div>
		</div>
		<div class="catalogueBox">
			<div class="catalogueTitle">企业名录</div>
			<div class="catalogueul">
				<div class="catalogueli">
					<div class="clTitle">山东山森数控技术有限公司</div>
					<div class="clLabel">
						<div>专新特新企业</div>
						<div>专新特新企业</div>
						<div>专新特新企业</div>
					</div>
					<div class="claddress">
						<img src="../assets/images/address.png" >
						<div>潍坊市怀柔区光明街216号</div>
					</div>
					<div class="clBtn">查看详情</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default {
		name:'home',
		data(){
			return {
				page:1,
				limit:6,
				noticeList:[],//通知公告列表
				messageList:[],//行业资讯列表
			}
		},
		mounted() {
			new Swiper ('.swiper-container', {
				loop: true,
				autoplay:3000,
			})
			this.getNoticeList()
			this.getMessageList()
		},
		methods:{
			//跳转行业资讯详情
			toMessageList(e){
				this.$router.push({path:'/industryDet',query: {id:e.id}})
			},
			//获取行业资讯列表
			getMessageList(){
				this.$apiFun.messageList({
					page:this.page,
					limit:this.limit,
					is_hot:1
				}).then((res) => {
					if(res.code == 200){
						this.messageList = res.data
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//通知公告路由跳转
			toNoticeList(e){
				this.$router.push({path:'/informDet',query: {id:e.id}})
			},
			//获取通知公告列表
			getNoticeList(){
				this.$apiFun.noticeList({
					page:this.page,
					limit:this.limit,
					is_hot:1
				}).then((res) => {
					if(res.code == 200){
						this.noticeList = res.data
					}else{
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
	.clBtn{
		font-weight: 500;
		color: #3389FF;
		font-size: 16px;
		text-align: center;
		cursor: pointer;
	}
	.claddress div{
		font-weight: 400;
		color: #51565D;
		font-size: 16px;
	}
	.claddress img{
		width: 15px;
		height: 15px;
		margin-right: 3px;
	}
	.claddress{
		display: flex;
		align-items: center;
		margin-bottom: 15px;
	}
	.clLabel div{
		width: 86px;
		height: 21px;
		background: #52C41A;
		border-radius: 12px;
		font-weight: 500;
		color: #FFFFFF;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.clLabel{
		width: 264px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 5px;
		height: 45px;
	}
	.clTitle{
		font-weight: 500;
		color: #51565D;
		font-size: 18px;
		margin-bottom: 5px;
	}
	.catalogueli{
		width: 284px;
		height: 168px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		padding: 22px 0 0 10px;
		box-sizing: border-box;
	}
	.catalogueul{
		width: 1200px;
		height: 412px;
		background-color: #fff;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.catalogueTitle{
		width: 1200px;
		height: 73px;
		background: linear-gradient(90deg, #1890FF 0%, #67F4FF 100%);
		font-weight: 600;
		color: #FFFFFF;
		font-size: 32px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.catalogueBox{
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
	.gqnotice{
		padding-bottom: 40px;
	}
	.sadli div:nth-child(3){
		color: #777777;
		font-size: 14px;
	}
	.sadli div:nth-child(2){
		width: 560px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #333333;
		font-size: 14px;
	}
	.sadli div:nth-child(1){
		font-weight: 600;
		color: #333333;
		font-size: 18px;
		width: 560px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.sadli{
		width: 560px;
		height: 110px;
		border-bottom: 1px solid #EDEDED;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: auto;
	}
	.hylbot{
		width: 420px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.hylright{
		width: 460px;
	}
	.hyltop div:nth-child(2){
		color: #777777;
		font-size: 14px;
		width: 160px;
	}
	.hyltop div:nth-child(1){
		width: 300px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		font-size: 16px;
		font-weight: 600;
		color: #333333;
	}
	.hyltop{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;
	}
	.hyli{
		width: 554px;
		height: 95px;
		border-bottom: 1px solid #EDEDED;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		cursor: pointer;
	}
	.ggli div:nth-child(2){
		color: #777777;
		font-size: 14px;
		width: 160px;
	}
	.ggli div:nth-child(1){
		width: 390px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.ggli{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 554px;
		margin: auto;
		border-bottom: 1px solid #EDEDED;
		height: 62px;
		cursor: pointer;
	}
	.ggleft::-webkit-scrollbar,.hyright::-webkit-scrollbar {/*隐藏滚轮*/
	display: none;
	}
	.ggleft,.hyright{
		width: 600px;
		overflow: scroll;
		height: 400px;
	}
	.notBot{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.hylleft img{
		width: 80px;
		height: 60px;
	}
	.ancolor{
		background: #FAFAFA;
		width: 100%;
		max-width: 1920px;
		margin: auto;
		padding-bottom: 40px;
		margin-bottom: 42px;
	}
	.notBot{
		width: 1200px;
		height: 408px;
		margin: auto;
		background-image: url(../assets/images/bacmap.png);
		background-size: 100%;
		background-repeat: no-repeat;
		background-color: #fff;
	}
	.notmore div{
		font-size: 14px;
		color: #1890FF;
	}
	.notmore{
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.nottit div{
		font-size: 20px;
		font-weight: 600;
		color: #FFFFFF;
		margin-left: 8px;
	}
	.nottit img{
		width: 20px;
		height: 20px;
	}
	.nottit{
		display: flex;
		align-items: center;
	}
	.ntone{
		width: 600px;
		height: 73px;
		background: linear-gradient(90deg, #1890FF 0%, #FFFFFF 100%);
		display:flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 12px 0 7px;
		box-sizing: border-box;
	}
	.notTop{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.notice{
		width: 1200px;
		margin: auto;
	}
	.swiper-slide img{
		width: 1200px;
		height: 428px;
	}
	.banner{
		width: 1200px;
		height: 428px;
		margin: auto;
		margin-bottom: 40px;
	}
</style>
