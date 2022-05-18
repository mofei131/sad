<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">服务机构资料</div>
			<div class="abCon"></div>
			<div class="exifForm">
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">服务机构主图</div></div>
					<div>:</div>
					<div class="headImgBox">
						<div class="upHead">
							<el-upload
							  class="avatar-uploader"
							  action="https://layer.boyaokj.cn/api/file/upload/"
							  :show-file-list="false"
							  :on-success="handleAvatarSuccess"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
							  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
							</el-upload>
						</div>
						<div>仅支持jpg/png格式文件，大小须不超过5MB</div>
					</div>
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">服务机构名称</div></div>
					<div>:</div>
					<input type="text" placeholder="空" v-model="name" />
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">联系人</div></div>
					<div>:</div>
					<input type="text" placeholder="空" v-model="contact" />
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">联系电话</div></div>
					<div>:</div>
					<input type="number" placeholder="空" v-model="mobile" />
				</div>
				<div class="exifLi">
					<div class="exifHead" style="padding-top: 5px;"><div class="tc">*</div><div class="lc">归属地区</div></div>
					<div style="padding-top: 5px;">:</div>
					<div class="cascader">
						<el-cascader
							size="large"
							:options="options2"
							v-model="selectedOptions"
							@change="handleChange">
						</el-cascader>
					</div>
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">详细地址</div></div>
					<div>:</div>
					<input type="text" placeholder="空" v-model="address" />
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">服务机构邮箱</div></div>
					<div>:</div>
					<input type="text" placeholder="空" v-model="email" />
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">核心产品</div></div>
					<div>:</div>
					<textarea placeholder="空" v-model="mark"></textarea>
				</div>
			</div>
			<div class="wxifBtn" @click="putCompanyAut()">保存</div>
		</div>
	</div>
</template>

<script>
	import { Plus } from '@element-plus/icons-vue'
	import { regionData,CodeToText } from 'element-china-area-data'
	export default{
		components:{
			Plus
		},
		data(){
			return{
				options2:regionData,//省市区json
				selectedOptions: [],//选中省市数组
				imageUrl: '',
				userInfo:'',
				name:'',
				contact:'',
				mobile:'',
				address:'',
				email:'',
				mark:'',
				service_province:'',//省
				service_city:'',//市
				service_area:'',//区、县
			}
		},
		created() {
			this.getUserInfo()
		},
		methods: {
			//提交资料修改
			putCompanyAut(){
				this.$apiFun.editService({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					avater:this.imageUrl,
					enterprise_name:this.name,
					company_contacts:this.contact,
					company_phone:this.mobile,
					service_province:this.service_province,
					service_city:this.service_city,
					service_area:this.service_area,
					address:this.address,
					email:this.email,
					company_introduce:this.mark
				}).then((res) => {
					if(res.code == 200){
						this.$apiFun.userInfo({
							user_id:JSON.parse(localStorage.getItem('userInfo')).id
						}).then((red) => {
							if(red.code == 200){
								localStorage.setItem('userInfo',JSON.stringify(red.data))
								this.$message({
										showClose: true,
										message: '保存成功',
										type: 'success'
									});
								location.reload()
							}else{
								this.$message({
										showClose: true,
										message: red.message,
										type: 'error'
									});
							}
						})
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//获取用户信息
			getUserInfo(){
				this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
				this.name = this.userInfo.enterprise_name
				this.contact = this.userInfo.company_contacts
				this.mobile = this.userInfo.company_phone
				this.address = this.userInfo.address
				this.email = this.userInfo.email
				this.mark = this.userInfo.company_introduce
				this.imageUrl = this.userInfo.avater
			},
			//省市区
			handleChange (value) {
				console.log(value)
				this.service_province = CodeToText[value[0]]
				this.service_city = CodeToText[value[1]]
				this.service_area = CodeToText[value[2]]
			},
			handleAvatarSuccess(res, file) {
				// console.log(URL.createObjectURL(file.raw))
				console.log(res)
				console.log(file)
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
				const isLt2M = file.size / 1024 / 1024 < 5;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 5MB!');
				}
				return isJPG && isLt2M;
			}
		}
	}
</script>

<style scoped>
	.cascader /deep/.el-cascader--large{
		height: 25px;
	}
	.cascader /deep/.el-input__inner{
		height: 25px;
	}
	.cascader /deep/.el-input{
		width: 275px;
		height: 25px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #D4D4D4;
	}
	.tc{
		width: 12px;
		color: #FF5023;
	}
	.upHead /deep/.el-upload{
		background-color: #EEEEEE;
		margin-bottom: 8px;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 80px;
	    height: 80px;
	    text-align: center;
	  }
	  .avatar {
	    width: 80px;
	    height: 80px;
	    display: block;
	  }
		
	.wxifBtn{
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
		margin: 45px 0 0 296px;
	}
	.exifLi textarea{
		width: 275px;
		height: 115px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #D4D4D4;
		padding: 4px 10px;
		box-sizing: border-box;
	}
	.exifLi input{
		width: 275px;
		height: 25px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #D4D4D4;
		font-size: 12px;
		font-weight: 400;
		color: #4E4E4E;
		padding: 0 11px;
		box-sizing: border-box;
	}
	.headImgBox div{
		font-size: 12px;
		font-weight: 400;
		color: #4E4E4E;
	}
	.headImgBox{
		width: 275px;
	}
	.lc{
		text-align-last: justify;
		width: 120px;
		/* white-space:nowrap; */
	}
	.exifHead{
		width: 130px;
		font-size: 16px;
		font-weight: 400;
		color: #4E4E4E;
		letter-spacing: 3px;
		text-align-last: justify;
		text-align: end;
		display: flex;
	}
	.exifLi{
		width: 424px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 12px;
	}
	.exifForm{
		width: 722px;
		margin: auto;
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
