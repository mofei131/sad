<template>
	<div class="box">
		<div class="stay">您现在所在位置:<span>专家认证</span></div>
		<div class="attestationBox">
			<div class="title">专家志愿申请</div>
			<div class="border"></div>
			<div class="exifLi">
			<div class="exifHead"><div class="tc"></div><div class="lc">专家头像</div></div>
				<div class="headImgBox">
					<div class="upHead">
						<el-upload
						  class="avatar-uploader"
						  :before-upload="beforeAvatarUpload"
							:http-request="uploadImg"
							:show-file-list="false"
							>
						  <img v-if="aut.imageUrl" :src="aut.imageUrl" class="avatar" />
						  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
						</el-upload>
					</div>
					<div class="zhu">仅支持jpg/png格式文件，大小须不超过5MB</div>
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">专家姓名</div></div>
					<input class="inuptOne" type="text" placeholder="请输入您的姓名" v-model="aut.name" />
				</div>
				<div class="attenavLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">联系电话</div></div>
					<input class="inuptOne" type="number" placeholder="请输入联系电话" v-model="aut.mobile" />
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">专家性别</div></div>
					<div class="sexBox">
						<el-radio v-model="aut.sex" label="1">男</el-radio>
						<el-radio v-model="aut.sex" label="2">女</el-radio>
					</div>
				</div>
				<div class="attenavLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">出生日期</div></div>
					<div class="block">
					    <el-date-picker :locale="locale"
					      v-model="aut.date"
								value-format="YYYY-MM-DD"
					      type="date"
					      placeholder="选择日期时间">
					    </el-date-picker>
					  </div>
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">工作单位</div></div>
					<input class="inuptOne" type="text" placeholder="请输入工作单位" v-model="aut.company_name" />
				</div>
				<div class="attenavLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">电子邮箱</div></div>
					<input class="inuptOne" type="text" placeholder="请输入电子邮箱" v-model="aut.email" />
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">政治面貌</div></div>
					<el-select v-model="aut.comp" placeholder="请选择">
					    <el-option
					      v-for="item in compList"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
				</div>
				<div class="attenavLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">最高学历</div></div>
					<el-select v-model="aut.education" placeholder="请选择">
					    <el-option
					      v-for="item in educationList"
					      :key="item.id"
					      :label="item.name"
					      :value="item.id">
					    </el-option>
					  </el-select>
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">从业状况</div></div>
					<el-select v-model="aut.practice" placeholder="请选择">
					    <el-option
					      v-for="item in practiceList"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
				</div>
				<div class="attenavLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">技术职称</div></div>
					<input class="inuptOne" type="text" placeholder="请输入技术职称" v-model="aut.technical_title" />
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">证件类型</div></div>
					<el-select v-model="aut.card" placeholder="请选择">
					    <el-option
					      v-for="item in cardList"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
				</div>
				<div class="attenavLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">证件号码</div></div>
					<input class="inuptOne" type="number" placeholder="请输入证件号码" v-model="aut.id_card" />
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">归属区域</div></div>
					<div class="cascader">
						<el-cascader
							size="large"
							:options="options"
							v-model="selectedOptions"
							@change="handleChange">
						</el-cascader>
					</div>
				</div>
				<div class="attenavLi">
					<div class="exifHead"><div class="tc"></div><div class="lc">详细地址</div></div>
					<input class="inuptOne" type="text" placeholder="请输入详细地址" v-model="aut.address" />
				</div>
			</div>
			<div class="atteLi">
				<div class="attenavLongLi">
					<div class="exifHead"><div class="tc">*</div><div class="lc">专业特长</div></div>
					<div class="checkbox">
						<el-checkbox-group v-model="aut.majorList">
							<el-checkbox v-for="(item,index) in checkList" :key="index" :label="item.name"></el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
			</div>
			<div class="atteLi">
					<div class="attenavLongLi2">
						<div class="exifHead"><div class="tc">*</div><div class="lc">附件上传</div></div>
						<div class="upBox">
							<el-upload
							  class="upload-demo"
							  :http-request="uploadImg2"
							  :on-preview="handlePreview"
							  :on-remove="handleRemove"
								:before-upload="beforeAvatarUpload2"
							  list-type="picture">
							  <el-button size="small" type="primary" v-if="aut.fileList.length == 0">点击上传</el-button>
							</el-upload>
							<div class="notes">请上传最终学历证明(至少本科以上)、资质证书、任职证明、职业资格证书等扫描件。(学历证明为必传项，其他证明文件可选传，仅供备案使用，文件类型JPG或PNG格式，单个附件最大2M)</div>
						</div>
					</div>
				</div>
					<div class="atteLi">
						<div class="attenavLongLi2">
							<div class="exifHead"><div class="tc">*</div><div class="lc">个人介绍</div></div>
							<textarea placeholder="请输入个人介绍" v-model="aut.personal_introduce"></textarea>
						</div>
					</div>
					<div class="agreementBox">
						<img :src="select?images.select:images.selectNo" @click="select = !select">
						<div class="read">我已阅读并同意备份</div>
						<div class="toag">《服务协议》</div>
						<div class="toag">跟</div>
						<div class="toag">《隐私政策》</div>
						<div class="read">并承诺如实填写材料</div>
					</div>
					<div class="putBtn" v-if="userInfo.is_authentication == 0" @click="setExpertAut()">申请提交</div>
					<div class="putBtn" v-if="userInfo.is_authentication == 1" >正在审核</div>
					<div class="putBtn" v-if="userInfo.is_authentication == 3" @click="setExpertAut()">重新提交</div>
		</div>
	</div>
</template>

<script>
	import { Plus } from '@element-plus/icons-vue'
	import { regionData,CodeToText } from 'element-china-area-data'
	import axios from 'axios'
	export default{
		components:{
			Plus
		},
		data(){
			return{
				compList:[{
          value: '党员',
          label: '党员'
        }, {
          value: '群众',
          label: '群众'
        }],
				educationList:[{
          value: '小学',
          label: '小学'
        },{
          value: '初中',
          label: '初中'
        },{
          value: '高中',
          label: '高中'
        },{
          value: '大专',
          label: '大专'
        },{
          value: '本科',
          label: '本科'
        },{
          value: '研究生',
          label: '研究生'
        }, {
          value: '硕士',
          label: '硕士'
        },{
          value: '博士',
          label: '博士'
        }],
				practiceList:[{
          value: '在职',
          label: '在职'
        }, {
          value: '离职',
          label: '离职'
        }],
				cardList:[{
				  value: 1,
				  label: '身份证'
				}, {
				  value: 2,
				  label: '士官证'
				},{
				  value: 3,
				  label: '港澳台通行证'
				},{
				  value: 4,
				  label: '护照'
				}],
				options:regionData,//省市区json
				selectedOptions: [],//选中省市数组
				checkList: [],//checkbox选中数组
				select:false,//是否同意协议政策
				images:{
					select:require('../../assets/images/select.png'),
					selectNo:require('../../assets/images/selectno.png')
				},
				aut:{
					imageUrl: '',//上传头像
					name:'',//专家姓名
					mobile:'',//联系电话
					sex:'1',//专家性别
					date:'',//日期选择
					company_name:'',//工作单位
					email:'',//电子邮件
					comp: '',//政治面貌
					education:'',//最高学历
					practice:'',//从业状况
					technical_title:'',//技术职称
					card:'',//证件类型
					id_card:'',//证件号码
					service_province:'',//省
					service_city:'',//市
					service_area:'',//区、县
					address:'',//详细地址
					majorList:[],//专业特长选中列表
					fileList:'',//上传附件
					personal_introduce:'',//个人介绍
				},
				userInfo:'',//个人信息
			}
		},
		created() {
			this.getInfo()
		},
		mounted() {
			this.getcheckList()
			this.getEducationList()
			this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
			if(this.userInfo.is_authentication == 2){
				 this.$router.replace("/")
			}
		},
		methods: {
			//获取信息
			getInfo(){
				this.$apiFun.userInfo({
					user_id:JSON.parse(localStorage.getItem('userInfo')).id
				}).then((red) => {
					if(red.code == 200){
						localStorage.setItem('userInfo',JSON.stringify(red.data))
					}else{
						this.$message({
								showClose: true,
								message: red.message,
								type: 'error'
							});
					}
				})
			},
			//获取信息
			getUserInfo(){
				let list = []
				this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
				this.aut.imageUrl = this.userInfo.avater
				this.aut.name = this.userInfo.realname
				this.aut.mobile = this.userInfo.mobile
				this.aut.sex = JSON.stringify(this.userInfo.sex)
				this.aut.company_name = this.userInfo.company_name
				this.aut.email = this.userInfo.email
				this.aut.comp = this.userInfo.political_outlook
				this.aut.education = this.userInfo.education
				this.aut.practice = this.userInfo.job_status
				this.aut.technical_title = this.userInfo.technical_title
				this.aut.card = this.userInfo.certificates_type
				this.aut.id_card = this.userInfo.id_card
				this.aut.address = this.userInfo.address
				let tags = this.userInfo.major_ids.split(',').splice(1,this.userInfo.major_ids.split(',').length-2)
				for(let i in tags){
					list.push(this.checkList[this.checkList.findIndex(item => item.id == tags[i])].name)
				}
				this.aut.majorList = list
				// this.aut.fileList = this.userInfo.enclosure
				this.aut.personal_introduce = this.userInfo.personal_introduce
				this.select = true
 			},
			//获取学历列表
			getEducationList(){
				this.$apiFun.educationList().then((res) => {
					if(res.code == 200){
						console.log(res.data)
						this.educationList = res.data
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//认证提交
			setExpertAut(){
				if(!this.aut.name){
					this.$message({
							showClose: true,
							message: '请填写专家姓名',
							type: 'warning'
						});
						return
				}
				if(!this.aut.mobile){
					this.$message({
							showClose: true,
							message: '请填写专家电话',
							type: 'warning'
						});
						return
				}
				if(!this.aut.company_name){
					this.$message({
							showClose: true,
							message: '请填写工作单位',
							type: 'warning'
						});
						return
				}
				if(!this.aut.card){
					this.$message({
							showClose: true,
							message: '请选择证件类型',
							type: 'warning'
						});
						return
				}
				if(!this.aut.id_card){
					this.$message({
							showClose: true,
							message: '请填写证件号码',
							type: 'warning'
						});
						return
				}
				if(!this.selectedOptions){
					this.$message({
							showClose: true,
							message: '请选择归属区域',
							type: 'warning'
						});
						return
				}
				if(!this.aut.majorList){
					this.$message({
							showClose: true,
							message: '请勾选专业特长',
							type: 'warning'
						});
						return
				}
				if(!this.aut.fileList){
					this.$message({
							showClose: true,
							message: '请上传附件',
							type: 'warning'
						});
						return
				}
				if(!this.aut.personal_introduce){
					this.$message({
							showClose: true,
							message: '请填写个人介绍',
							type: 'warning'
						});
						return
				}
				if(!this.select){
					this.$message({
							showClose: true,
							message: '请同意并勾选协议',
							type: 'warning'
						});
						return
				}
				let taglist = []
				for(let i in this.aut.majorList){
					taglist.push(this.checkList[this.checkList.findIndex(item => item.name == this.aut.majorList[i])].id)
				}
				this.$apiFun.expertAut({
					user_id:this.userInfo.id,
					avater:this.aut.imageUrl,
					realname:this.aut.name,
					phone:this.aut.mobile,
					sex:this.aut.sex,
					birthday:this.aut.date,
					company_name:this.aut.company_name,
					email:this.aut.email,
					political_outlook:this.aut.comp,
					education:this.aut.education,
					job_status:this.aut.practice,
					technical_title:this.aut.technical_title,
					certificates_type:this.aut.card,
					id_card:this.aut.id_card,
					service_province:this.aut.service_province,
					service_city:this.aut.service_city,
					service_area:this.aut.service_area,
					address:this.aut.address,
					major_ids:taglist.join(","),
					enclosure:this.aut.fileList,
					personal_introduce:this.aut.personal_introduce
				}).then((res) => {
					if(res.code == 200){
						// this.checkList = res.data
						this.$message({
								showClose: true,
								message: '提交成功',
								type: 'success'
							});
						this.$apiFun.userInfo({
							user_id:this.userInfo.id
						}).then((red) => {
							if(red.code == 200){
								localStorage.setItem('userInfo',JSON.stringify(red.data))
								// this.$router.push({name:'home'})
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
			//获取专业特长
			getcheckList(){
				this.$apiFun.majorList().then((res) => {
					if(res.code == 200){
						this.checkList = res.data
						if(JSON.parse(localStorage.getItem('userInfo')).is_authentication == 1){
							this.getUserInfo()
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
			//上传附件
			uploadImg2(param){
				//发送请求的参数格式为FormData
				const formData = new FormData();
				formData.append("file", param.file);
				this.$apiFun.upload(formData).then((res) => {
					if(res.code == 200){
						console.log(res.data)
						// this.fileList.push(res.data.url)
						this.aut.fileList = res.data.url
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
						this.aut.imageUrl = res.data.url
					}else{
						this.$message({
								showClose: true,
								message: res.message,
								type: 'error'
							});
					}
				})
			},
			//删除上传图片
			handleRemove() {
					// console.log(file, fileList);
					this.aut.fileList = ''
				},
			// handlePreview(file) {
			// 		console.log(file);
			// 	},
			// handleRemove2(file, fileList) {
			// 		console.log(file, fileList);
			// 	},
			// handlePreview2(file) {
			// 		console.log(file);
			// 	},
			// handleAvatarSuccess(res, file) {
			// 	// console.log(URL.createObjectURL(file.raw))
			// 	console.log(res)
			// 	console.log(file)
			// 	this.imageUrl = URL.createObjectURL(file.raw);
			// },
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
			},
			beforeAvatarUpload2(file) {
				const isJPG = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
				const isLt2M = file.size / 1024 / 1024 < 2;
					
				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			//省市区
			handleChange (value) {
				console.log(value)
				this.aut.service_province = CodeToText[value[0]]
				this.aut.service_city = CodeToText[value[1]]
				this.aut.service_area = CodeToText[value[2]]
			}
		}
	}
</script>

<style scoped>
	.putBtn{
		width: 180px;
		height: 44px;
		background: #2298FF;
		border-radius: 4px;
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		cursor: pointer;
	}
	.toag{
		font-weight: 400;
		color: #2298FF;
		font-size: 14px;
		cursor: pointer;
	}
	.read{
		font-weight: 400;
		color: #8E8E8E;
		font-size: 12px;
		margin-left: 5px;
	}
	.agreementBox img{
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
	.agreementBox{
		/* width: 360px; */
		display: flex;
		align-items: center;
		/* margin: auto; */
		margin-bottom: 60px;
		margin-left: 110px;
	}
	.attenavLongLi2 textarea{
		width: 1064px;
		height: 188px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333333;
		padding: 10px 12px;
		box-sizing: border-box;
		margin-left: 12px;
	}
	.upBox /deep/.upload-demo{
		display: flex;
	}
	.upBox /deep/.el-upload-list__item{
		margin: 0;
		width: 120px;
	}
	.upBox /deep/.el-upload-list{
		margin: 0;
	}
	.upBox /deep/ .el-button{
		width: 100px;
		height: 35px;
		background: #2298FF;
		border-radius: 4px;
		font-size: 16px;
	}
	.notes{
		font-size: 16px;
		font-weight: 400;
		color: #999999;
		padding: 10px 0 26px 0;
		box-sizing: border-box;
	}
	.checkbox{
		width: 1064px;
	}
	.el-select,.cascader,.checkbox,.upBox{
		margin-left: 12px;
	}
	.el-select /deep/ .el-input,.cascader /deep/ .el-input{
		width: 460px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
	}
	.attenavLongLi2{
		width: 1163px;
		display: flex;
		align-items: flex-start;
	}
	.attenavLongLi{
		width: 1163px;
		display: flex;
		align-items: center;
	}
	.inuptTwo{
		width: 1045px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		font-size: 16px;
		font-weight: 400;
		color: #333333;
		margin-left: 12px;
		padding: 0 16px;
		box-sizing: border-box;
	}
	.block /deep/ .el-input{
		width: 460px;
		height: 50px;
		margin-left: 12px;
		border: 1px solid #999999;
		border-radius: 4px;
	}
	.sexBox{
		width: 180px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding-left: 80px;
		/* box-sizing: border-box; */
	}
	.inuptOne{
		width: 460px;
		height: 50px;
		background: #FFFFFF;
		border-radius: 4px;
		border: 1px solid #999999;
		padding: 0 16px;
		box-sizing: border-box;
		color: #333;
		margin-left: 10px;
	}
	.attenavLi{
		width: 580px;
		display: flex;
		align-items: center;
	}
	.atteLi{
		width: 1163px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;
	}
	.zhu{
		font-size: 12px;
		font-weight: 400;
		color: #4E4E4E;
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
	.headImgBox{
		width: 275px;
		margin-left: 10px;
	}
	.tc{
		color: #FF5023;
		width: 11px;
	}
	.lc{
		text-align-last: justify;
		width: 76px;
		/* white-space:nowrap; */
	}
	.exifHead{
		width: 88px;
		font-size: 16px;
		font-weight: 400;
		color: #4E4E4E;
		letter-spacing: 3px;
		text-align-last: justify;
		text-align: end;
		display: flex;
	}
	.exifLi{
		width: 1163px;
		display: flex;
		align-items: flex-start;
		margin-bottom: 12px;
	}
	.border{
		width: 1163px;
		margin: auto;
		height: 1px;
		background-color: #1890FF;
		margin-bottom: 16px;
	}
	.title{
		font-size: 20px;
		font-weight: 500;
		color: #3389FF;
		margin: 0 0 14px 11px;
	}
	.attestationBox{
		width: 1200px;
		background: #FFFFFF;
		box-shadow: 0px 0px 10px 0px rgba(230, 207, 207, 0.5);
		border-radius: 2px;
		padding: 18px 24px 25px 13px;
		box-sizing: border-box;
		margin: auto;
		margin-bottom: 158px;
	}
</style>
