<template>
	<div class="box">
		<div class="top">
			<div class="left">
				<img src="../assets/images/logo.png"/>
			</div>
			<div class="right">
				<div class="search">
					<select v-model="selectClassEnd">
						<option v-for="(item,index) in sortList" :key="index" :value="item.title">
								{{item.title}}
						</option>
					</select>
					<input type="text" placeholder="请输入您想查询的内容" />
					<div @click="search">搜索</div>
				</div>
				<div class="login" @click="toLogin" v-if="this.$store.state.wait == 0">
					<div class="reg">注册</div>
					<div class="reg">/</div>
					<div class="log">登录</div>
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
		<div class="bot">
			<div class="bot-12">
				<div>
					<router-link to="/">首页</router-link>
				</div>
				<div>
					<el-dropdown>
						<span class="el-dropdown-link">
							资讯中心
							<el-icon class="el-icon--right" color="#fff">
								<arrow-down />
							</el-icon>
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
				<div>政策服务</div>
				<div>
					<el-dropdown>
						<span class="el-dropdown-link">
							供需信息
							<el-icon class="el-icon--right" color="#fff">
								<arrow-down />
							</el-icon>
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
				<div>
					<el-dropdown>
						<span class="el-dropdown-link">
							专家库
							<el-icon class="el-icon--right" color="#fff">
								<arrow-down />
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									专家入库
								</el-dropdown-item>
								<el-dropdown-item>
										<router-link to="/expertQuestions" style="color: #666;">专家咨询</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
				<div>
					<el-dropdown>
						<span class="el-dropdown-link">
							企业能力
							<el-icon class="el-icon--right" color="#fff">
								<arrow-down />
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link to="/enterpriseList" style="color: #666;">企业列表</router-link>
								</el-dropdown-item>
								<el-dropdown-item>
									<router-link to="/effect" style="color: #666;">培育成效</router-link>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
				<div>
					<router-link to="/serviceAgency">服务机构</router-link></div>
				<div>
					<router-link to="/dynamic">活动动态</router-link>
				</div>
				<div>
					<router-link to="/about">关于我们</router-link>
				</div>
			</div>
		</div>
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
				}]
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
				}
			}
		},
		updated() {
			this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
			
		},
		methods:{
			//去我的页面
			toMine(item,index){
				switch(item.id){
					case 0:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
					case 1:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
					case 2:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
					case 3:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
					case 4:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
					case 5:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
					case 6:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
					case 7:
						this.$router.push({path:'/personal',query: {
							id:item.id,
							index:index
						}})
						break
				}
			},
			signOut(){
				this.$store.state.wait = 0
				localStorage.removeItem('userInfo')
			},
			toLogin(){
				if(this.$store.state.login == 0){
					this.$store.state.login = 1
				}
			}
		}
	}
</script>

<style scoped>
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
		background: #1890FF;
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
	.bot-12 div{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.bot-12{
		width: 974px;
		height: 60px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		font-size: 20px;
		cursor: pointer;
	}
	.bot{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		height: 60px;
		background-color: #1890FF;
	}
	.search div{
		width: 100px;
		height: 40px;
		background:#1890FF;
		border-radius: 0px 5px 5px 0px;
		font-size: 16px;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.search input{
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
	.search select{
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
	.search{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.login{
		cursor: pointer;
	}
	.right,.login{
		display: flex;
		align-items: center;
	}
	.top{
		width: 1200px;
		height: 92px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.log{
		font-size: 14px;
		color: #666666;
	}
	.reg{
		font-size: 14px;
		color: #3389FF;
	}
	.search{
		width: 455px;
		height: 40px;
		background: #FFFFFF;
		box-shadow: 0px 0px 9px 0px rgba(190, 190, 190, 0.57);
		border-radius: 5px;
		margin-right: 40px;
	}
	.left img{
		width: 329px;
		/* height: 56px; */
	}
	.box{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		margin-bottom: 16px;
	}
</style>
