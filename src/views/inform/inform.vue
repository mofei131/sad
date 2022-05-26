<template>
	<div class="box">
		<div class="stay">
			您现在所在位置:资讯中心><span>通知公告</span>
		</div>
		<!-- <div class="infTop">
			<img src="../../assets/images/forIcon1.png" >
			<div>通知公告</div>
		</div> -->
		<div class="infUl">
			<div class="infLi" v-for="(item,index) in infoList" :key="index" @click="toNoticeList(item)">
				<div class="infNav">
					<!-- <div class="infLeft" v-if="item.pic">
						<img :src="item.pic" >
					</div> -->
					<div class="infRight">
						<div class="infrTop">
							<div class="nameflex">
									<div :style="{color:item.color}">[{{item.type}}]</div>
								<div class="cartitle">{{item.name}}</div>
							</div>
							<div class="inftime">{{item.create_time}}</div>
						</div>
						<!-- <div class="infrcon" v-html="item.info"></div> -->
					</div>
				</div>
				<div class="transverse"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				infoList:[],
				page:1,
				limit:10,
				keywords:''
			}
		},
		created() {
			if(this.$route.query){
				this.keywords = this.$route.query.value
			}
		},
		mounted() {
			this.page = 1
			this.infoList = []
			this.getNoticeList()
			addEventListener('scroll', this.handleScroll)
		},
		methods:{
			//  handleScroll() {
			// 	 //变量scrollTop是滚动条滚动时，距离顶部的距离
			// 	 let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
			// 	 //变量windowHeight是可视区的高度
			// 	 let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			// 	 //变量scrollHeight是滚动条的总高度
			// 	 let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
			// 		//滚动条到底部的条件
			// 		if(scrollTop+windowHeight == scrollHeight){
			// 			console.log(123)
			// 			 this.page++
			// 			 this.getNoticeList()
			// 		}
			// },
			//通知公告路由跳转
			toNoticeList(e){
				this.$router.push({path:'/informDet',query: {id:e.id}})
			},
			//获取通知公告列表
			getNoticeList(){
				this.$apiFun.noticeList({
					page:this.page,
					limit:10000,
					is_hot:0,
					keywords:this.keywords
				}).then((res) => {
					if(res.code == 200){
						if(this.page == 1){
							this.infoList = res.data
							if(this.infoList.length != 0){
								for(let i in this.infoList){
									this.infoList[i].info = this.$globalMethod.showHtml(this.infoList[i].info)
								}
							}
						}
						// else{
						// 	let list = []
						// 	for(let i in res.data){
						// 		list.push(res.data[i])
						// 		list[i].info = this.$globalMethod.showHtml(list[i].info)
						// 	}
						// 	this.infoList.push(list)
						// }
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
		}
	}
</script>

<style scoped>
	.cartitle:hover{
		text-decoration:underline;
		color: #3389ff;
	}
	.infRight{
		width: 1130px;
	}
	.infrcon{
		font-weight: 400;
		color: #444444;
		line-height: 26px;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	.inftime{
		color: #777777;
		font-weight: 400;
		font-size: 14px;
	}
	.nameflex{
		display: flex;
		align-items: center;
	}
	.cartitle{
		width: 400px;
		font-weight: 600;
		color: #333333;
		font-size: 16px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		margin-left: 10px;
	}
	.infrTop{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 15px;
	}
	.infLeft img{
		width: 150px;
		height: 100px;
		margin-right: 18px;
	}
	.transverse{
		width: 1150px;
		height: 1px;
		background-color: #EDEDED;
	}
	.infNav{
		width: 1170px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 45px;
		padding-top: 20px;
		cursor: pointer;
	}
	.infUl{
		width: 1200px;
		background-color: #fff;
		margin: auto;
		margin-bottom: 258px;
		
	}
	.infTop img{
		width: 30px;
		height: 30px;
		margin: 0 8px 0 7px;
	}
	.infTop{
		display: flex;
		align-items: center;
		width: 1200px;
		height: 73px;
		background: linear-gradient(90deg, #1890FF 0%, #FFFFFF 100%);
		margin: auto;
		font-weight: 600;
		color: #FFFFFF;
		font-size: 20px;
	}
	.stay span{
		color: #1890FF;
		margin-left: 5px;
	}
	.stay{
		width: 1200px;
		margin: auto;
		margin-bottom: 12px;
		color: #333333;
		font-size: 12px;
	}
</style>
