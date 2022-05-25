import {
	createRouter,
	createWebHistory,
	createWebHashHistory
} from 'vue-router'
import header from '../components/header.vue' //头部
import footer from '../components/footer.vue' //底部
import login from '../components/login.vue' //登录
import register from '../components/register.vue' //注册
import forget from '../components/forget.vue' //忘记密码/修改密码
import store from '../store/index.js'

const routes = [{ //首页
	path: '/',
	name: 'home',
	component: () => import('../views/home.vue')
}, { //关于我们
	path: '/about',
	name: 'about',
	component: () => import('../views/about/about.vue')
}, { //通知公告
	path: '/inform',
	name: 'inform',
	component: () => import('../views/inform/inform.vue')
}, { //通知公告详情
	path: '/informDet',
	name: 'informDet',
	component: () => import('../views/inform/informDet.vue')
}, { //行业资讯
	path: '/industryList',
	name: 'industryList',
	component: () => import('../views/industry/industryList.vue')
}, { //行业资讯详情
	path: '/industryDet',
	name: 'industryDet',
	component: () => import('../views/industry/industryDet.vue')
}, { //活动动态
	path: '/dynamic',
	name: 'dynamic',
	component: () => import('../views/dynamic/dynamic.vue')
}, { //需求信息
	path: '/demandNews',
	name: 'demandNews',
	component: () => import('../views/sadNews/demandNews.vue')
}, { //供应信息
	path: '/supplyNews',
	name: 'supplyNews',
	component: () => import('../views/sadNews/supplyNews.vue')
}, { //服务机构
	path: '/serviceAgency',
	name: 'serviceAgency',
	component: () => import('../views/serviceAgency/serviceAgency.vue')
}, { //发布需求
	path: '/demandForm',
	name: 'demandForm',
	component: () => import('../views/sadNews/demandForm.vue')
}, { //个人中心
	path: '/personal',
	name: 'personal',
	component: () => import('../views/personal/personal.vue')
}, { //发布供应
	path: '/supplyListForm',
	name: 'supplyListForm',
	component: () => import('../views/sadNews/supplyListForm.vue')
}, { //供应发布询价
	path: '/inquirySub',
	name: 'inquirySub',
	component: () => import('../views/sadNews/inquirySub.vue')
}, { //供应询价详情
	path: '/inquiryDet',
	name: 'inquiryDet',
	component: () => import('../views/sadNews/inquiryDet.vue')
}, { //需求发布询价
	path: '/demandInquirySub',
	name: 'demandInquirySub',
	component: () => import('../views/sadNews/demandInquirySub.vue')
}, { //需求询价详情
	path: '/demandInquiryDet',
	name: 'demandInquiryDet',
	component: () => import('../views/sadNews/demandInquiryDet.vue')
}, { //需求详情
	path: '/demandDet',
	name: 'demandDet',
	component: () => import('../views/sadNews/demandDet.vue')
}, { //供应详情
	path: '/supplyDet',
	name: 'supplyDet',
	component: () => import('../views/sadNews/supplyDet.vue')
}, { //专家问题提问
	path: '/expertQuestions',
	name: 'expertQuestions',
	component: () => import('../views/expert/expertQuestions.vue')
}, { //服务机构详情
	path: '/organDet',
	name: 'organDet',
	component: () => import('../views/serviceAgency/organDet.vue')
}, { //活动动态详情
	path: '/dynamicDet',
	name: 'dynamicDet',
	component: () => import('../views/dynamic/dynamicDet.vue')
}, { //企业列表
	path: '/enterpriseList',
	name: 'enterpriseList',
	component: () => import('../views/enterprise/enterpriseList.vue')
}, { //企业详情
	path: '/enterpriseDet',
	name: 'enterpriseDet',
	component: () => import('../views/enterprise/enterpriseDet.vue')
}, { //培育详情
	path: '/effect',
	name: 'effect',
	component: () => import('../views/enterprise/effect.vue')
}, { //专家认证
	path: '/expertCertification',
	name: 'expertCertification',
	component: () => import('../views/expert/expertCertification.vue')
}, { //专家认证
	path: '/expertCertification2',
	name: 'expertCertification2',
	component: () => import('../views/expert/expertCertification2.vue')
},{ //隐私协议
	path: '/yinsi',
	name: 'yinsi',
	component: () => import('../views/inform/yinsi.vue')
},{ //服务声明
	path: '/fuwu',
	name: 'fuwu',
	component: () => import('../views/inform/fuwu.vue')
},{ //法律声明
	path: '/falv',
	name: 'falv',
	component: () => import('../views/inform/falv.vue')
}]

const router = createRouter({
	// history: createWebHistory(process.env.BASE_URL),
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})
router.beforeEach((to, from, next) => {
	// console.log(to); //即将去的路由
	// console.log(from);//当前要离开的路由
	if (from.path == "/expertCertification") {
		if (localStorage.getItem('userInfo')) {
			let userInfo = JSON.parse(localStorage.getItem('userInfo'))
			if (userInfo.role == 1 && userInfo.is_authentication != 2) {
				alert('请先进行专家认证')
			}else{
				next();
			}
		} else {
			next();
		}
	} else {
		if(to.path == "/expertQuestions" || to.path == "/expertCertification2"){
			if(!localStorage.getItem('userInfo')){
				console.log('不能跳转')
				store.state.login = 1
			}else{
				console.log('可以跳转')
				next()
			}
		}else{
			next()
		}
	}
	
	//  if (to.path == "/") {
	// next();
	//  } else {
	// next();
	//      // if (localStorage.getItem("islogin")) {
	//      //     next();
	//      // } else {
	//      //     next({path: '/'});
	//      // }
	//  }
})

export default router
