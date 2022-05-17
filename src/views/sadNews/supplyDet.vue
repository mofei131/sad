<template>
	<div class="box">
		<div class="stay">您现在所在位置:供需信息><span>供应详情</span></div>
		<div class="detBox">
			<div class="detBoxTop">
				<div class="detBoxLeft">
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
				<div class="detBoxRight">
					<div class="abrOne">企业供应优质潍坊萝卜</div>
					<div class="abrTwo">发布时间：2017年08月10日</div>
					<div class="abrTwo">需求类别：矿产资源</div>
					<div class="abrTwo">发布企业：潍坊市广为信息科技有限公司</div>
					<div class="abrTwo">总浏览量：454654</div>
					<div class="dbrBtn">询价</div>
				</div>
			</div>
			<div class="detBoxbot">
				<div class="dbbTit">供应详情：</div>
				<div class="dbbCon">123</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
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
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.dbbCon{
		font-size: 14px;
		font-weight: 400;
		color: #444444;
		line-height: 26px;
	}
	.dbbTit{
		font-size: 16px;
		font-weight: 500;
		color: #333333;
		margin-bottom: 12px;
	}
	.detBoxbot{
		width: 936px;
		margin: auto;
		padding-top: 48px;
	}
	.detBoxTop{
		width: 936px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
	}
	.dbrBtn{
		width: 103px;
		height: 32px;
		background: #1890FF;
		box-shadow: 0px 0px 29px 0px rgba(255, 158, 105, 0.28);
		border-radius: 4px;
		font-size: 12px;
		font-weight: 500;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.abrTwo{
		font-size: 16px;
		font-weight: 400;
		color: #444444;
		margin-bottom: 24px;
	}
	.abrOne{
		font-size: 24px;
		font-weight: 600;
		color: #333333;
		letter-spacing: 2px;
		margin-bottom: 28px;
	}
	.detBoxRight{
		width: 446px;
	}
	.detBoxLeft,.swiper-slide img{
		width: 407px;
		height: 277px;
		border-radius: 4px;
	}
	.detBox{
		width: 1200px;
		background: #FFFFFF;
		margin: auto;
		padding-top: 26px;
		padding-bottom: 207px;
		margin-bottom: 160px;
	}
</style>
