<template>
	<div class="box">
		<div class="stay">
			您现在所在位置:资讯中心><span>通知公告</span>
		</div>
		<div class="infoDetCon">
			<div class="title">{{infoDet.name}}</div>
			<div class="time">{{infoDet.create_time}}</div>
			<div class="con" v-html="infoDet.info"></div>
			<div class="layui-form-item" v-if="infoDet.enclosure">
					<label class="layui-form-label">附件：</label>
					<div class="layui-input-block">
							<a :href="infoDet.enclosure">
									<img src="../../assets/images/fujian.png" style="width: 15px;height: 15px;display: flex;padding: 8px;">
									<span style="font-size: 12px;color: #cdcdcd">点击图标可下载</span>
							</a>
							
					</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return{
				infoDet:{},
			}
		},
		mounted() {
			this.getNoticeInfo()
		},
		methods:{
			//获取通知公告详情
			getNoticeInfo(){
				this.$apiFun.noticeInfo({
					id:this.$route.query.id
				}).then((res) => {
					if(res.code == 200){
						this.infoDet = res.data
						if(this.infoDet.length != 0){
							this.infoDet.info = this.$globalMethod.showHtml(this.infoDet.info)
						}
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
	.layui-input-block a{
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.time{
		font-weight: 400;
		color: #777777;
		font-size: 14px;
		padding-top: 14px;
		margin-bottom: 24px;
		text-align: center;
	}
	.title{
		text-align: center;
		font-weight: 600;
		color: #333333;
		letter-spacing: 2px;
		font-size: 24px;
	}
	.infoDetCon{
		width: 1200px;
		margin: auto;
		padding: 32px 15px 39px 28px;
		box-sizing: border-box;
		margin-bottom: 226px;
		background-color: #fff;
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
