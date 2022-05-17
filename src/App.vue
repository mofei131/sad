<template>
	<my-Header></my-Header>
	<my-Login v-if="this.$store.state.login == 1"></my-Login>
	<my-Register v-if="this.$store.state.login == 2"></my-Register>
	<my-Forget v-if="forget"></my-Forget>
	<router-view></router-view>
	<my-Footer></my-Footer>
	<div class="qjimgbox">
	<img class="qjimg" src="./assets/images/cityimg.png" >
	</div>
</template>
<script>
	import myHeader from './components/header.vue'
	import myFooter from './components/footer.vue'
	import myLogin from './components/login.vue'
	import myRegister from './components/register.vue'
	import myForget from './components/forget.vue'
	export default{
		name:'app',
		components:{
			myHeader,
			myFooter,
			myLogin,
			myRegister,
			myForget
		},
		data(){
			return{
				login:'',
				register:false,
				forget:false
			}
		},
		mounted() {
		},
	}
</script>
<style>
	.box{
		position: relative;
		z-index: 1;
	}
	.qjimgbox{
		position: absolute;
		bottom: 235px;
		left: 0;
		width: 100%;
		z-index: 0;
	}
	.qjimg{
		width: 100%;
		max-width: 1920px;
		margin: auto;
		display: block;
	}
	#app,html,body{
		margin: 0;
		padding: 0;
		background: #F4F4F8;
		position: relative;
	}
	.router-link-active {
	  text-decoration: none;
	  color: #fff;
	}
	.router-link,a{
	  text-decoration: none;
	  color: #fff;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
			-webkit-appearance: none;
	}
	input[type="number"]{
			-moz-appearance: textfield;
	}
	.stay span{
		color: #1890FF;
		margin-left: 5px;
	}
	.stay{
		width: 1200px;
		margin: auto;
		margin-bottom: 17px;
		color: #333333;
		font-size: 12px;
	}
	input,textarea{
		outline: none;
	}
</style>
