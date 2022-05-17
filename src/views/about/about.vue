<template>
	<div class="box">
		<div class="banner">
			 <div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img src="../../assets/images/banner.png" >
					</div>
					<div class="swiper-slide">
						<img src="../../assets/images/banner.png" >
					</div>
					<div class="swiper-slide">
						<img src="../../assets/images/banner.png" >
					</div>
				</div>
		</div>
		</div>
		<div class="stay">您现在所在位置:<span>关于我们</span></div>
		<div class="abCon">
			<div class="abcTop">平台历史</div>
			<div class="abcBom"></div>
		</div>
		<div class="abCon">
			<div class="abcTop">平台特色</div>
			<div class="abcBom"></div>
		</div>
		<div class="abCon">
			<div class="abcTop">平台主管</div>
			<div class="abcBom"></div>
		</div>
		<div class="abCon">
			<div class="abcTop">平台成就</div>
			<div class="abcBom"></div>
		</div>
		<div class="abCon">
			<div class="abcTop">平台愿景</div>
			<div class="abcBom"></div>
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
			new Swiper ('.swiper-container', {
				loop: true,
				autoplay:3000,
			})
		}
	}
</script>

<style scoped>
	.abcTop{
		width: 1200px;
		height: 73px;
		background: linear-gradient(90deg, #1890FF 0%, #67F4FF 100%);
		font-weight: 600;
		color: #FFFFFF;
		font-size: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.abcBom{
		padding: 16px 20px 20px 46px;
		box-sizing: border-box;
	}
	.abCon{
		width: 1200px;
		margin: auto;
		background-color: #fff;
	}
	.stay span{
		color: #1890FF;
		margin-left: 5px;
	}
	.stay{
		width: 1200px;
		margin: auto;
		margin-bottom: 17px;
		color: #333333;
		font-size: 12px;
	}
	.swiper-slide img{
		width: 1200px;
		height: 428px;
	}
	.banner{
		width: 1200px;
		height: 428px;
		margin: auto;
		margin-bottom: 18px;
	}
</style>
