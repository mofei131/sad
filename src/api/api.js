//引入刚才的http.js文件
import https from './request.js';
	
	let apiFun = {};
	//获取验证码
	apiFun.getVerifyCode = function(params) {
		return https.get('index/getVerifyCode', params)
	}
	//注册
	apiFun.register = function(params) {
		return https.get('index/register', params)
	}
	//登录
	apiFun.login = function(params) {
		return https.get('index/login', params)
	}
	//上传文件
	apiFun.upload = function(params) {
		return https.post('http://corp.boyaokj.cn/api/file/upload', params)
	}
	//获取专业特长列表
	apiFun.majorList = function(params) {
		return https.post('index/majorList', params)
	}
	//获取学历列表
	apiFun.educationList = function(params) {
		return https.post('index/educationList', params)
	}
	//专家认证
	apiFun.expertAut = function(params) {
		return https.post('index/expertAut', params)
	}
	//企业、服务机构、专家资料查询
	apiFun.userInfo = function(params) {
		return https.post('index/userInfo', params)
	}
	//通知公告列表
	apiFun.noticeList = function(params) {
		return https.post('index/noticeList', params)
	}
	//通知公告详
	apiFun.noticeInfo = function(params) {
		return https.post('index/noticeInfo', params)
	}
	//行业资讯列表
	apiFun.messageList = function(params) {
		return https.post('index/messageList', params)
	}
	//行业资讯详情
	apiFun.messageInfo = function(params) {
		return https.post('index/messageInfo', params)
	}
	//忘记密码
	apiFun.forgetPassword = function(params) {
		return https.post('index/forgetPassword', params)
	}
	
	
	//暴露出这个对象
	export default apiFun;

