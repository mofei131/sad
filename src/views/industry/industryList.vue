<template>
	<div class="box">
		<div class="stay">
			您现在所在位置:资讯中心><span>行业资讯</span>
		</div>
		<div class="infTop">
			<img src="../../assets/images/forIcon2.png" >
			<div>行业资讯</div>
		</div>
		<div class="infUl">
			<div class="infLi" v-for="(item,index) in infoList" :key="index" @click="toMessageList(item)">
				<div class="infNav">
					<div class="infLeft" v-if="item.pic">
						<img :src="item.pic" >
					</div>
					<div class="infRight" :style="{'width':item.pic?'1005px':'1170px'}">
						<div class="infrTop">
							<div>{{item.name}}</div>
							<div>{{item.create_time}}</div>
						</div>
						<div class="infrcon" v-html="item.info"></div>
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
			this.getMessageList()
		},
		methods:{
			//行业资讯路由跳转
			toMessageList(e){
				this.$router.push({path:'/industryDet',query: {id:e.id}})
			},
			//获取行业资讯列表
			getMessageList(){
				this.$apiFun.messageList({
					page:this.page,
					limit:this.limit,
					is_hot:0,
					keywords:this.keywords
				}).then((res) => {
					if(res.code == 200){
						this.infoList = res.data
						if(this.infoList.length != 0){
							for(let i in this.infoList){
								this.infoList[i].info = this.$globalMethod.showHtml(this.infoList[i].info)
							}
						}
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
	.infRight{
		width: 1005px;
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
	.infrTop div:nth-child(2){
		color: #777777;
		font-weight: 400;
		font-size: 14px;
	}
	.infrTop div:nth-child(1){
		width: 600px;
		font-weight: 600;
		color: #333333;
		font-size: 16px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
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
		height: 155px;
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
