<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">需求列表</div>
			<div class="abCon"></div>
			<div class="problemLiBox">
			<div class="problemLi">
				<div class="problemLiLeft">
					<div>潍坊深圳工业园区即将建成，届时潍坊将有5000万届时潍坊将有5000万潍坊将有5000万</div>
					<div class="put">上架</div>
					<div class="off">下架</div>
				</div>
				<div class="problemLiRight">
					<div>增许江从者要都论对农红合学好圆取命持证根无区提较观题年观验许选达很…</div>
					<div>收到5条回复</div>
				</div>
			</div>
			</div>
			<div class="gyBtn">
				<router-link to="/demandForm">发布需求</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods: {
			
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
