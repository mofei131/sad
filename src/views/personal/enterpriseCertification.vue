<template>
	<div class="box">
		<div class="exifBox">
			<div class="exinTitle">企业认证</div>
			<div class="abCon"></div>
			<div class="exifForm">
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">企业名称</div></div>
					<div>:</div>
					<input type="text" placeholder="空" v-model="name" />
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">公司法人</div></div>
					<div>:</div>
					<input type="text" placeholder="空" v-model="legal_person" />
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
					<div class="exifHead"><div class="tc">*</div><div class="lc">营业执照</div></div>
					<div>:</div>
					<div class="headImgBox">
						<div class="upHead">
							<el-upload
							  class="avatar-uploader"
							  :http-request="uploadImg"
							  :show-file-list="false"
							  :before-upload="beforeAvatarUpload">
							  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
							  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
							</el-upload>
						</div>
						<div>仅支持jpg/png格式文件，大小须不超过5MB</div>
					</div>
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">企业邮箱</div></div>
					<div>:</div>
					<input type="text" placeholder="空" v-model="email" />
				</div>
				<div class="exifLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">所属行业</div></div>
					<div>:</div>
					<div class="select">
						<el-select v-model="value" placeholder="请选择所属行业">
						    <el-option
						      v-for="item in options"
						      :key="item.id"
						      :label="item.name"
						      :value="item.id">
						    </el-option>
						  </el-select>
					</div>
				</div>
				<div class="exifLi2">
					<div class="exifHead" style="padding-top: 8px;"><div class="tc">*</div><div class="lc">企业标签</div></div>
					<div style="padding-top: 8px;">:</div>
					<div class="checkBox">
						<el-checkbox-group v-model="checkList" size="large">
						    <el-checkbox v-for="(item,index) in tagList" :key="index" :label="item.name"></el-checkbox>
						  </el-checkbox-group>
					</div>
				</div>
			</div>
			<div class="wxifBtn" @click="putCompanyAut()" v-if="userInfo.is_authentication == 0">立即认证</div>
			<div class="wxifBtn"  v-if="userInfo.is_authentication == 1">正在审核</div>
			<div class="wxifBtn"  v-if="userInfo.is_authentication == 2">已认证</div>
			<div class="wxifBtn" @click="putCompanyAut()" v-if="userInfo.is_authentication == 3">重新认证</div>
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
				imageUrl: '',//上传图片
				 options: [],
					value: '',
					tagList:[],//企业标签列表
					options2:regionData,//省市区json
					selectedOptions: [],//选中省市数组
					checkList: [],
					service_province:'',//省
					service_city:'',//市
					service_area:'',//区、县
					name:'',
					legal_person:'',
					address:'',
					email:'',
					userInfo:''
			}
		},
		created() {
			this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
			this.getIndustryCate()
			this.getTagList()
			this.getUserInfo()
		},
		methods: {
			//获取消息
			getUserInfo(){
				if(JSON.parse(localStorage.getItem('userInfo')).is_authentication == 2){
					this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
					this.name = this.userInfo.enterprise_name,
					this.email = this.userInfo.email,
					this.address = this.userInfo.address,
					this.legal_person = this.userInfo.legal_person,
					this.imageUrl = this.userInfo.license_pic
				}
			},
			//提交
			putCompanyAut(){
				if(!this.name){
					this.$message({
							showClose: true,
							message: '请填写企业名称',
							type: 'warning'
						});
						return
				}
				if(!this.service_province){
					this.$message({
							showClose: true,
							message: '请填写归属地区',
							type: 'warning'
						});
						return
				}
				if(!this.address){
					this.$message({
							showClose: true,
							message: '请填写详细地址',
							type: 'warning'
						});
						return
				}
				if(!this.value){
					this.$message({
							showClose: true,
							message: '请选择所属行业',
							type: 'warning'
						});
						return
				}
				if(!this.checkList){
					this.$message({
							showClose: true,
							message: '请选择企业标签',
							type: 'warning'
						});
						return
				}
				let taglist = []
				for(let i in this.checkList){
					taglist.push(this.tagList[this.tagList.findIndex(item => item.name == this.checkList[i])].id)
				}
				this.$apiFun.companyAut({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id,
					enterprise_name:this.name,
					legal_person:this.legal_person,
					service_province:this.service_province,
					service_city:this.service_city,
					service_area:this.service_area,
					address:this.address,
					license_pic:this.imageUrl,
					email:this.email,
					industry_id:this.value,
					company_tags:JSON.stringify(taglist).replace(/\[|]/g, '')
				}).then((res) => {
					if(res.code == 200){
						this.$apiFun.userInfo({
							user_id:JSON.parse(localStorage.getItem('userInfo')).id
						}).then((red) => {
							if(red.code == 200){
								localStorage.setItem('userInfo',JSON.stringify(red.data))
								this.$message({
										showClose: true,
										message: '认证成功',
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
			//获取企业标签
			getTagList(){
				this.$apiFun.tagList().then((res) => {
					if(res.code == 200){
						this.tagList = res.data
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//获取所属行业
			getIndustryCate(){
				this.$apiFun.industryCate().then((res) => {
					if(res.code == 200){
						this.options = res.data
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//上传头像
			uploadImg(param){
				//发送请求的参数格式为FormData
				const formData = new FormData();
				formData.append("file", param.file);
				this.$apiFun.upload(formData).then((res) => {
					if(res.code == 200){
						console.log(res.data)
						this.imageUrl = res.data.url
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
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
	.checkBox{
		width: 450px;
	}
	.select /deep/ .el-input{
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
		margin: 12px 0 0 296px;
		cursor: pointer;
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
		width: 95px;
		/* white-space:nowrap; */
	}
	.exifHead{
		width: 110px;
		font-size: 16px;
		font-weight: 400;
		color: #4E4E4E;
		letter-spacing: 3px;
		text-align-last: justify;
		text-align: end;
		display: flex;
	}
	.exifLi2{
		width: 600px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 12px;
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
