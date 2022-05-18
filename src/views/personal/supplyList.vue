<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">供应列表</div>
			<div class="abCon"></div>
			<div class="problemLiBox">
			<div class="problemLi" v-for="(item,index) in emandList" :key="index" @click="toDet(item.id)">
				<div class="problemLiLeft">
					<div>{{item.title}}</div>
					<div class="put" v-if="item.status == 0" @click="putChangeNeedStatus(item)">上架</div>
					<div class="off" v-if="item.status == 1" @click="putChangeNeedStatus(item)">下架</div>
				</div>
				<div class="problemLiRight">
					<div>{{item.detail}}</div>
					<div>收到{{item.count}}条回复</div>
				</div>
			</div>
			</div>
			<div class="gyBtn">
				<router-link to="/supplyListForm">发布供应</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				emandList:[],
				shelf:true
			}
		},
		mounted() {
			this.getNeedList()
		},
		methods: {
			//上架下架
			putChangeNeedStatus(e){
				this.$apiFun.changeSupplyStatus({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					id:e.id,
					status:e.status == 0?1:0
				}).then((res) => {
					if(res.code == 200){
						if(e.status == 0){
							this.$message({
									showClose: true,
									message: '上架成功',
									type: 'success'
								});
						}else{
							this.$message({
									showClose: true,
									message: '下架成功',
									type: 'success'
								});
						}
						this.getNeedList()
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//切换详情
			toDet(e){
				this.$emit('change',e);
			},
			//获取供应列表
			getNeedList(){
				this.$apiFun.mySupplyList({
					page:1,
					limit:1000,
					user_id:JSON.parse(localStorage.getItem('userInfo')).id
				}).then((res) => {
					if(res.code == 200){
						console.log(res.data)
						this.emandList = res.data
						// this.tagList = res.data
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
		height: 428px;
		overflow: scroll;
		margin-bottom: 36px;
	}
	.problemLiBox::-webkit-scrollbar,.hyright::-webkit-scrollbar {/*隐藏滚轮*/
	display: none;
	}
	.off{
		width: 55px;
		height: 24px;
		background: #FF3A3A;
		border-radius: 2px;
		font-size: 12px;
		font-weight: 500;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
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
	}
	.problemLiRight div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #FF6D6E;
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
	.problemLi{
		width: 722px;
		height: 84px;
		border-bottom: 1px solid #E7E7E7;
		padding: 11px 0;
		box-sizing: border-box;
		margin: auto;
		cursor: pointer;
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
		height: 625px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 4px 4px 0px 0px;
		padding-top: 24px;
		box-sizing: border-box;
	}
</style>
