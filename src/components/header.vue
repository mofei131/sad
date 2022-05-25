<template>
	<div class="headbox">
		<div class="headtop">
			<div class="headleft">
				<img src="../assets/images/logo.png"/>
			</div>
			<div class="headright">
				<div class="headsearch">
					<select v-model="selectClassEnd">
						<option v-for="(item,index) in sortList" :key="index" :value="item.title">
								{{item.title}}
						</option>
					</select>
					<input type="text" v-model="searchValue" placeholder="请输入您想查询的内容" />
					<div @click="search">搜索</div>
				</div>
				<div class="headlogin" @click="toLogin" v-if="this.$store.state.wait == 0">
					<div class="headreg">注册</div>
					<div class="headreg">/</div>
					<div class="headlog">登录</div>
				</div>
				<div class="nickimgBox" v-else>
					<el-dropdown>
						<div class="flexhn">
							<div class="flheader">
								<img src="../assets/images/headerImg.png" v-if="userInfo.avater == null" >
								<img :src="userInfo.avater" v-else >
							</div>
							<div class="flnick">{{userInfo.name}}</div>
						</div>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<div class="nicksho">{{userInfo.realname?userInfo.realname:'--'}}</div>
								</el-dropdown-item>
								<el-dropdown-item v-for="(item,index) in drowItem" :key="index">
									<div class="nickOne" @click="toMine(item,index)">{{item.title}}</div>
								</el-dropdown-item>
								<el-dropdown-item>
									<div class="nicksho2" @click="signOut">退出登录</div>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</div>
		</div>
		<!-- <div class="bot">
			<div class="bot-12">
				<div class="botOne">
					<router-link to="/">首页</router-link>
				</div>
				<div class="shuline"></div>
				<div class="botOne">
					<el-dropdown>
						<span class="el-dropdown-link">
							资讯中心
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link to="/inform" style="color: #666;">通知公告</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link to="/industryList" style="color: #666;">行业资讯</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
				<div class="shuline"></div>
				<div class="botOne">政策服务</div>
				<div class="shuline"></div>
				<div class="botOne">
					<el-dropdown>
						<span class="el-dropdown-link">
							供需信息
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link to="/supplyNews" style="color: #666;">供应信息</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link to="/demandNews" style="color: #666;">需求信息</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
				<div class="shuline"></div>
				<div class="botOne">
					<el-dropdown>
						<span class="el-dropdown-link">
							专家库
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link to="/expertCertification2" style="color: #666;">专家入库</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
										<router-link to="/expertQuestions" style="color: #666;">专家咨询</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
				<div class="shuline"></div>
				<div class="botOne">
					<el-dropdown>
						<span class="el-dropdown-link">
							企业能力
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link to="/enterpriseList" style="color: #666;">企业展示</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<div @click="toScreen">培育成效</div>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
				<div class="shuline"></div>
				<div class="botOne">
					<router-link to="/serviceAgency">服务机构</router-link>
				</div>
				<div class="shuline"></div>
				<div class="botOne">
					<router-link to="/dynamic">活动动态</router-link>
				</div>
				<div class="shuline"></div>
				<div class="botOne">
					<router-link to="/about">关于我们</router-link>
				</div>
			</div>
		</div> -->
		 <el-menu
		    :default-active="activeIndex2"
		    class="el-menu-demo"
		    mode="horizontal"
		    background-color="#0A69D3"
		    text-color="#fff"
		    @select="handleSelect"
				router
				:ellipsis='false'
				:collapse="false"
		  >
		    <el-menu-item  index="/">首页</el-menu-item>
				<div class="shuline"></div>
		    <el-sub-menu index="2" :popper-offset='0' popper-class="clbun">
		      <template #title>资讯中心</template>
		      <el-menu-item index="/inform" class="gx">通知公告</el-menu-item>
					<div class="wieth"></div>
		      <el-menu-item index="/industryList" class="gx">行业资讯</el-menu-item>
		    </el-sub-menu>
				<div class="shuline"></div>
		    <!-- <el-menu-item>
					<a target="_blank" href="https://www.baidu.com">政策服务</a>
				</el-menu-item> -->
				<el-sub-menu index="3" :popper-offset='0'>
				  <template #title>政策服务</template>
				  <el-menu-item class="gx">
						<a target="_blank" href="http://www.sdqypy.cn/ZhengCeFuWu/policyConsult.html">政策库</a>
					</el-menu-item>
					<div class="wieth"></div>
					<el-menu-item class="gx">
						<a target="_blank" href="http://enterprise.gxt.shandong.gov.cn/index.html">政策匹配</a>
					</el-menu-item>
					<div class="wieth"></div>
					<el-menu-item class="gx">
						<a target="_blank" href="http://www.sdqypy.com/special/ZhuanJingTeXin.html">专精特新</a>
					</el-menu-item>
				</el-sub-menu>
				<div class="shuline"></div>
		    <el-sub-menu index="4" :popper-offset='0'>
		      <template #title>供需信息</template>
		      <el-menu-item index="/supplyNews" class="gx">供应信息</el-menu-item>
					<div class="wieth"></div>
		      <el-menu-item index="/demandNews" class="gx">需求信息</el-menu-item>
		    </el-sub-menu>
				<div class="shuline"></div>
				<el-sub-menu index="5" :popper-offset='0'>
				  <template #title>专家库</template>
				  <el-menu-item index="/expertCertification2" class="gx">专家入库</el-menu-item>
					<div class="wieth"></div>
				  <el-menu-item index="/expertQuestions" class="gx">专家咨询</el-menu-item>
				</el-sub-menu>
				<div class="shuline"></div>
				<el-sub-menu index="6" :popper-offset='0'>
				  <template #title>企业能力</template>
				  <el-menu-item index="/enterpriseList" class="gx">企业展示</el-menu-item>
					<div class="wieth"></div>
				  <el-menu-item class="gx">
						<div @click="toScreen">培育成效</div>
					</el-menu-item>
				</el-sub-menu>
				<div class="shuline"></div>
				<el-menu-item index="/serviceAgency">服务机构</el-menu-item>
				<div class="shuline"></div>
				<el-menu-item index="/dynamic">活动动态</el-menu-item>
				<div class="shuline"></div>
				<el-menu-item index="/about">关于我们</el-menu-item>
		  </el-menu>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				sortList:[{
					title:'供应'
				},{
					title:'需求'
				},{
					title:'通知公告'
				},{
					title:'行业资讯'
				},{
					title:'服务机构'
				},{
					title:'活动动态'
				},{
					title:'企业信息'
				}],
				selectClassEnd:'供应',//选择内容
				userInfo:'',
				drowItem:[{
					id:0,
					title:'企业资料'
				},{
					id:1,
					title:'个人资料'
				},{
					id:8,
					title:'服务机构资料'
				},{
					id:2,
					title:'修改密码'
				},{
					id:3,
					title:'企业认证'
				},{
					id:4,
					title:'服务机构认证'
				},{
					id:5,
					title:'提问列表'
				},{
					id:6,
					title:'需求信息'
				},{
					id:7,
					title:'供应信息'
				}],
				searchValue:'',//搜索框内容
			}
		},
		mounted() {
			//判断登录状态
			if(localStorage.getItem('userInfo')){
				this.$store.state.wait = 1
				this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
			}else{
				this.$store.state.wait = 0
			}
			if(this.userInfo){
				if(this.userInfo.role == 1){
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 0), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 3), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 4), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 6), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 7), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 8), 1)
				}
				if(this.userInfo.role == 2){
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 1), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 4), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 8), 1)
				}
				if(this.userInfo.role == 3){
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 0), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 1), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 3), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 5), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 6), 1)
					this.drowItem.splice(this.drowItem.findIndex(item => item.id == 7), 1)
				}
			}
		},
		created() {
			
		},
		updated() {
			this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
			
		},
		methods:{
			//搜索跳转
			search(){
				if(!this.searchValue){
					this.$message({
							showClose: true,
							message: '请先输入搜索内容',
							type: 'warning'
						});
						return
				}
				if(this.selectClassEnd == '供应'){
					this.$router.push({
						path:'/supplyNews',
						query:{
							value:this.searchValue
						}
					})
				}else if(this.selectClassEnd == '需求'){
					this.$router.push({
						path:'/demandNews',
						query:{
							value:this.searchValue
						}
					})
				}else if(this.selectClassEnd == '通知公告'){
					this.$router.push({
						path:'/inform',
						query:{
							value:this.searchValue
						}
					})
				}else if(this.selectClassEnd == '行业资讯'){
					this.$router.push({
						path:'/industryList',
						query:{
							value:this.searchValue
						}
					})
				}else if(this.selectClassEnd == '服务机构'){
					this.$router.push({
						path:'/serviceAgency',
						query:{
							value:this.searchValue
						}
					})
				}else if(this.selectClassEnd == '活动动态'){
					this.$router.push({
						path:'/dynamic',
						query:{
							value:this.searchValue
						}
					})
				}else if(this.selectClassEnd == '企业信息'){
					this.$router.push({
						path:'/enterpriseList',
						query:{
							value:this.searchValue
						}
					})
				}
			},
			//展示大屏
			toScreen(){
				// this.$store.state.screen = 1
				localStorage.setItem('screen',1)
				this.$router.push({path:'/effect'})
				location.reload()
			},
			//去我的页面
			toMine(item,index){
				if(item.id == 0){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 1){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 2){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 3){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 4){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 5){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 6){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 7){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}else if(item.id == 8){
					this.$router.push({path:'/personal',query: {
						id:item.id,
						index:index
					}})
				}
			},
			signOut(){
				this.$store.state.wait = 0
				localStorage.removeItem('userInfo')
				this.$router.replace('/')
			},
			toLogin(){
				if(this.$store.state.login == 0){
					this.$store.state.login = 1
				}
			}
		}
	}
</script>

<style>
	.el-menu--horizontal>.el-menu-item.is-active{
		color: rgba(255,255,255,1)!important;
	}
	.wieth{
		width: 100px;
		height: 1px;
		background-color: #fff;
		margin: auto;
		display: block;
	}
	.is-opened,.menu:hover,.el-menu--horizontal>.el-sub-menu .el-sub-menu__title:hover{
		background-color: #0854A9!important;
	}
	.el-menu-item.is-active,.el-menu--horizontal>.el-menu-item.is-active,.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title{
		color: #fff!important;
		border: 0!important;
		background-color: #0854A9!important;
	}
	.gx:hover{
		background-color: #096DD9!important;
	}
	.el-popper.is-light{
		border-bottom: 1px solid #fff!important;
	}
	.gx,.el-popper.is-light,.el-menu--popup{
		border: 0!important;
		/* margin-left: -19px!important; */
		background-color: #1890FF!important;
	}
	.el-menu--popup{
		min-width: 0px!important;
		box-shadow: none!important;
		border-radius: 0!important;
	}
	.el-menu--horizontal,.el-menu--popup,.el-menu--popup>.el-menu-item,.el-menu--horizontal>.el-sub-menu .el-sub-menu__title{
		width: 133px;
		justify-content: center;
		border: 0;
	}
	.el-menu--popup{
		min-width: 133px;
	}
	.el-sub-menu__icon-arrow {
		display: none!important;
		border: 0!important;
	}
	.el-menu-item,.el-sub-menu{
		width: 133px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}
	.el-menu-demo{
		width: 100%;
		max-width: 1920px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.shuline{
		width: 1px;
		height: 20px;
		background-color: #fff;
		border-radius: 4px;
	}
	.nickOne{
		height: 30px;
		width: 160px;
		display: flex;
		align-items: center;
		padding-left: 16px;
		box-sizing: border-box;
	}
	.nicksho2{
		display: flex;
		align-items: center;
		height: 44px;
		width: 161px;
		border-top: 1px solid #EAEAEA;
		font-size: 14px;
		font-weight: bold;
		color: #333333;
		padding-left: 16px;
		box-sizing: border-box;
	}
	.nicksho{
		display: flex;
		align-items: center;
		height: 44px;
		width: 161px;
		border-bottom: 1px solid #EAEAEA;
		font-size: 14px;
		font-weight: bold;
		color: #333333;
		padding-left: 16px;
		box-sizing: border-box;
	}
	.flnick{
		font-size: 14px;
		font-weight: 600;
		color: #1890FF;
		margin-left: 13px;
	}
	.flheader img{
		width: 48px;
		height: 48px;
		border-radius: 48px;
	}
	.flheader{
		width: 56px;
		height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		/* background: #1890FF; */
	}
	.flexhn{
		display: flex;
		align-items: center;
		cursor: pointer;
	}
	.el-dropdown-link{
		display: flex;
		align-content: center;
		justify-content: center;
		color: #fff;
		font-size: 20px;
	}
	/* .bot-12 div{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.bot-12{
		width: 1200px;
		height: 60px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		font-size: 20px;
		cursor: pointer;
	}
	.botOne{
		width: 133px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.botOne:hover{
		background-color: #0A69D3!important;
	}
	.bot{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		height: 60px;
		background-color: #096DD9;
	} */
	.headsearch div{
		width: 100px;
		height: 40px;
		background:#096DD9;
		border-radius: 0px 5px 5px 0px;
		font-size: 16px;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.headsearch input{
		width: 200px;
		height: 16px;
		border: 0;
		border-left: 1px solid #C5C5C5;
		padding-left: 6px;
		margin-left: 7px;
		outline: none;
		font-size: 14px;
		color: #333;
	}
	.headsearch select{
		border: 0;
		font-size: 16px;
		color: #666666;
		margin-left: 20px;
		outline: none;
		appearance:none;
		-moz-appearance:none;
		-webkit-appearance:none;
		background: url(../assets/images/down.png)no-repeat scroll right center transparent;
		background-size: 20px;
		padding-right: 20px;
		box-sizing: border-box;
		text-align: center;
	}
	.headsearch{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.headlogin{
		cursor: pointer;
	}
	.headright,.headlogin{
		display: flex;
		align-items: center;
	}
	.headtop{
		width: 1200px;
		height: 92px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.headlog{
		font-size: 14px;
		color: #666666;
	}
	.headreg{
		font-size: 14px;
		color: #3389FF;
	}
	.headsearch{
		width: 455px;
		height: 40px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		border-radius: 5px;
		margin-right: 40px;
	}
	.headleft img{
		width: 329px;
		/* height: 56px; */
	}
	.headbox{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		margin-bottom: 16px;
		background-color: #fff;
	}
</style>
