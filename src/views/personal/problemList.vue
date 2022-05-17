<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">问题列表</div>
			<div class="abCon"></div>
			<div class="problemLi">
				<div class="problemLiLeft">
					<div>潍坊深圳工业园区即将建成，届时潍坊将有5000万届时潍坊将有5000万潍坊将有5000万</div>
					<div>2021-11-10</div>
				</div>
				<div class="problemLiRight">
					<div>增许江从者要都论对农红合学好圆取命持证根无区提较观题年观验许选达很…</div>
					<div>潍柴集团股份有限公司</div>
				</div>
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
		methods: {
			
		}
	}
</script>

<style scoped>
	.problemLiRight div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #1890FF;
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
	.problemLiLeft div:nth-child(2){
		font-size: 14px;
		font-weight: 400;
		color: #777777;
	}
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
