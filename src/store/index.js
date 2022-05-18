import { createStore } from 'vuex'

export default createStore({
  state: {
		login:0,//是否弹出登录
		wait:0,//登没登录
		screen:0,//展示大屏
		problemId:0,//专家问题列表id
		emandId:0,//需求列表id
		supplyId:0,//供应列表id
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
