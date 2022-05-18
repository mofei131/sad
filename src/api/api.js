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
	//行业分类
	apiFun.industryCate = function(params) {
		return https.get('index/industryCate', params)
	}
	//修改专家资料
	apiFun.editExpert = function(params) {
		return https.get('index/editExpert', params)
	}
	//获取专家问题列表
	apiFun.expertAskList = function(params) {
		return https.get('expert/expertAskList', params)
	}
	//城市列表
	apiFun.cityList = function(params) {
		return https.get('index/cityList', params)
	}
	//企业数量
	apiFun.companydata = function(params) {
		return https.get('EchartData/companydata', params)
	}
	//饼图数据
	apiFun.piedata = function(params) {
		return https.get('EchartData/piedata', params)
	}
	//城市列表
	apiFun.serviceList = function(params) {
		return https.get('index/serviceList', params)
	}
	//修改企业资料
	apiFun.editCompany = function(params) {
		return https.get('index/editCompany', params)
	}
	//活动列表
	apiFun.activityList = function(params) {
		return https.get('index/activityList', params)
	}
	//活动详情
	apiFun.activityInfo = function(params) {
		return https.get('index/activityInfo', params)
	}
	//首页轮播图
	apiFun.bannerList = function(params) {
		return https.get('index/bannerList', params)
	}
	//企业标签列表
	apiFun.tagList = function(params) {
		return https.get('index/tagList', params)
	}
	//企业认证
	apiFun.companyAut = function(params) {
		return https.get('index/companyAut', params)
	}
	//site配置信息
	apiFun.commonConfig = function(params) {
		return https.get('index/commonConfig', params)
	}
	//发布需求
	apiFun.releaseNeed = function(params) {
		return https.get('index/releaseNeed', params)
	}
	//发布供求
	apiFun.releaseSupply = function(params) {
		return https.get('index/releaseSupply', params)
	}
	//需求列表
	apiFun.myNeedList = function(params) {
		return https.get('index/myNeedList', params)
	}
	//需求上架下架
	apiFun.changeNeedStatus = function(params) {
		return https.get('index/changeNeedStatus', params)
	}
	//筛选专家个数并提交问题
	apiFun.selectExpertCommitQuestion = function(params) {
		return https.get('expert/selectExpertCommitQuestion', params)
	}
	//供应列表
	apiFun.mySupplyList = function(params) {
		return https.get('index/mySupplyList', params)
	}
	//供应上架下架
	apiFun.changeSupplyStatus = function(params) {
		return https.get('index/changeSupplyStatus', params)
	}
	//提交询价
	apiFun.commitInquiry = function(params) {
		return https.get('index/commitInquiry', params)
	}
	//提交询价详情
	apiFun.myInquiryInfo = function(params) {
		return https.get('index/myInquiryInfo', params)
	}
	//提交报价
	apiFun.commitOffer = function(params) {
		return https.get('index/commitOffer', params)
	}
	//提交报价详情
	apiFun.myOfferInfo = function(params) {
		return https.get('index/myOfferInfo', params)
	}
	//服务机构资料修改
	apiFun.editService = function(params) {
		return https.get('index/editService', params)
	}
	//服务机构认证
	apiFun.serviceAut = function(params) {
		return https.get('index/serviceAut', params)
	}
	//服务领域列表
	apiFun.servicesList = function(params) {
		return https.get('index/servicesList', params)
	}
	//暴露出这个对象
	export default apiFun;

