<template>
	<div class="box">
		<div class="stay">您现在所在位置:供需信息><span>发布需求</span></div>
		<div class="formBox">
			<div class="formTitle">发布需求</div>
			<div class="demandTitleBox">
				<div class="surn"><span>*</span>需求标题</div>
				<input type="text" placeholder="请输入需求标题" />
			</div>
			<div class="transverse"></div>
			<div class="addImgBox">
				<div class="surn"><span>*</span>需求产品</div>
				<div class="upLoadBox">
				<el-upload
						class="uploadImgBox"
				    action="https://layer.boyaokj.cn/api/file/upload"
				    list-type="picture-card"
				    :on-preview="handlePictureCardPreview"
				    :on-remove="handleRemove"
				    :file-list="addImgList"
						multiple
						accept="image/*"
				  >
				    <el-icon><Plus /></el-icon>
				  </el-upload>
				
				  <el-dialog class="eldialog" v-model="dialogVisible">
				    <img w-full :src="dialogImageUrl" alt="Preview Image" />
				  </el-dialog>
					</div>
				
				 <!-- <el-dialog v-model="dialogVisible">
				    <img width="100%" :src="dialogImageUrl" alt="" />
				  </el-dialog> -->
				<!-- <div v-if="addImgList.length != 0" class="addImgfelx">
					<div class="addImgOne" v-for="(item,index) in addImgList" :key="index">
						<img :src="item">
						<div class="deleteImg">删除</div>
					</div>
				</div>
				<img class="addimg" src="../../assets/images/addImg.png" v-else/> -->
			</div>
			<div class="transverse"></div>
			<div class="slectBox">
				<div class="surn"><span>*</span>所属行业</div>
				<div class="select">
					 <el-select v-model="value" class="m-2" placeholder="请选择您的行业">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value"
					    />
					  </el-select>
				</div>
			</div>
			<div class="admBox">
				<div class="namOne">
					<div class="surn"><span>*</span>您的姓名</div>
					<input type="text" placeholder="请输入您的姓名" />
				</div>
				<div class="namOne">
					<div class="surn"><span>*</span>联系电话</div>
					<input type="number" placeholder="请输入您的联系电话" />
				</div>
			</div>
			<div class="transverse"></div>
			<div class="textareaBox">
				<div class="surn"><span>*</span>需求详情</div>
				<textarea placeholder="请输入需求详情"></textarea>
			</div>
			<div class="fbBtn">发布需求</div>
		</div>
	</div>
</template>

<script>
	import { Plus } from '@element-plus/icons-vue'
	export default{
		components:{
			Plus,
		},
		data(){
			return{
				addImgList:[],//上传图片列表
				dialogImageUrl:'',//放大展示图片列表
				dialogVisible:false,//是否显示放大图片列表
				options:[{
					value: '0',
					label: '信息技术及软件服务业',
				},{
					value: '1',
					label: '电子信息设备',
				},{
					value: '2',
					label: '农业综合',
				},{
					value: '3',
					label: '银行、保险、证券、金融业',
				},{
					value: '4',
					label: '健康医疗、卫生、教育业',
				},],
				value:'',//下拉选中的value
			}
		},
		methods:{
			handlePictureCardPreview(file){
				console.log(file.url)
			 this.dialogImageUrl = file.url
				this.dialogVisible = true
			},
			handleRemove(file){
				console.log(this.addImgList)
			}
		}
	}
</script>

<style scoped>
	.fbBtn{
		width: 180px;
		height: 44px;
		background: #2298FF;
		border-radius: 4px;
		font-weight: 400;
		color: #FFFFFF;
		font-size: 16px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.textareaBox textarea{
		width: 1064px;
		height: 101px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		padding: 10px 16px;
		box-sizing: border-box;
		margin-left: 24px;
		outline: none;
		font-weight: 400;
		color: #333;
		font-size: 16px;
	}
	.textareaBox{
		/* padding-left: 13px; */
		display: flex;
		align-items: center;
		padding-top: 14px;
		margin-bottom: 50px;
	}
	.namOne input{
		width: 460px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-weight: 400;
		color: #333;
		font-size: 16px;
		padding: 0 16px;
		box-sizing: border-box;
		margin-left: 24px;
	}
	.admBox{
		display: flex;
		align-items: center;
		width: 1163px;
		justify-content: space-between;
		margin-bottom: 18px;
		/* padding-left: 11px; */
	}
	.namOne{
		display: flex;
		align-items: center;
	}	 
	.select{
		padding-left: 24px;
	}
	.select /deep/.el-input{
		width: 460px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999;
		line-height: 50px;
		outline: none;
	}
	.slectBox{
		display: flex;
		padding: 12px 24px 36px 0px;
		box-sizing: border-box;
		align-items: center;
	}
	.upLoadBox{
		padding-left: 24px;
		width: 1064px;
	}
	.el-upload-list{
		width: 1064px;
	}
	.el-upload-list--picture-card,.el-upload-list__item{ 
		width: 80px;
		height: 80px;
	}
	.el-dialog__body img{
		margin: auto;
		display: block;
		max-width: 800px;
	}
	.addImgOne img{
		width: 80px;
		height: 80px;
	}
	.deleteImg{
		width: 80px;
		height: 17px;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 0px 0px 4px 4px;
		font-weight: 400;
		color: #FFFFFF;
		font-size: 12px;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.addImgOne{
		width: 80px;
		height: 80px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		position: relative;
		margin-right: 20px;
	}
	.addImgfelx{
		display: flex;
		align-items: center;
		margin-left: 24px;
	}
	.addimg{
		width: 80px;
		height: 80px;
		margin-left: 24px;
		cursor: pointer;
		
	}
	.addImgBox{
		display: flex;
		align-items: center;
		padding-top: 20px;
		margin-bottom: 24px;
	}
	.box{
		margin-bottom: 185px;
	}
	.transverse{
		width: 1152px;
		height: 1px;
		background-color: #ECECEC;
	}
	.demandTitleBox input{
		width: 1064px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		padding: 0 16px;
		box-sizing: border-box;
		color: #333;
		font-size: 16px;
		margin-left: 24px;
	}
	.surn span{
		color: #FF4D4F;
	}
	.surn{
		font-weight: 500;
		color: #333333;
		font-size: 16px;
		display: flex;
		align-items: flex-start;
	}
	.demandTitleBox{
		display: flex;
		align-items: center;
		padding-top: 16px;
		margin-bottom: 12px;
	}
	.formTitle{
		font-weight: 500;
		color: #3389FF;
		font-size: 20px;
	}
	.formBox{
		width: 1200px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		padding: 18px 24px 0 13px;
		box-sizing: border-box;
		margin: auto;
		padding-bottom: 40px;
	}
</style>
