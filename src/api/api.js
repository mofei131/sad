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
	//企业能力列表
	apiFun.companyList = function(params) {
		return https.get('index/companyList', params)
	}
	//供应列表
	apiFun.supplyList = function(params) {
		return https.get('index/supplyList', params)
	}
	//企业中心供应详情
	apiFun.mySupplyInfo = function(params) {
		return https.get('index/mySupplyInfo', params)
	}
	//需求列表
	apiFun.needList = function(params) {
		return https.get('index/needList', params)
	}
	//企业中心需求详情
	apiFun.myNeedInfo = function(params) {
		return https.get('index/myNeedInfo', params)
	}
	//企业数量
	apiFun.companydata = function(params) {
		return https.get('EchartData/companydata', params)
	}
	//饼图数据
	apiFun.piedata = function(params) {
		return https.get('EchartData/piedata', params)
	}
	//暴露出这个对象
	export default apiFun;

