<template>
	<div class="login">
		<div class="content">
			<div class="title">
				<span class="title-content">用户登录界面</span>
			</div>
			<div class="input-wrap">
				姓名：<input type="text" v-model='name'>
				<br>
				<span v-if='error.name' class="err-msg">*{{error.name}}</span>
			</div>
			<div class="input-wrap">
				密码：<input type="password" v-model="pwd">
				<br>
				<span v-if='error.pwd' class="err-msg">*{{error.pwd}}</span>
			</div>
			<div class="input-wrap">
				<button @click='login'>提交</button>
			</div>
		</div>
	</div>
</template>
<script>
import Main from './Main.vue'
import authSrv from '../api/auth.js'
	export default{
		data(){
			return{
				name:'',
				pwd:'',
				error:{
					name:'',
					pwd:''
				}
			}
		},
		methods:{
			check(name,pwd){
				if(!name){
					this.error.name='请输入姓名';
					return false;
				}
				if(!pwd){
					this.error.pwd='请输入密码';
					return false;
				}
				return true;
			},
			login(){
				const {name,pwd,$router}=this;
				if (!this.check(name,pwd))return;
					// authSrv
					// .login(this,name,pwd)
					// .then(rep => {
					// 	if (!rep.code) {
					// 		this.$router.push({
					// 	path:'./Main'
					// 		});
					// 	}else{
					// 		alert('用户名密码错误');
					// 	}
					// })
					if(name == 'admin' && pwd == 123){
						this.$router.push({path:'./Main'});
					}
					}
		}
	}
</script>
<style>
	.login{
		width: 100%;
		height: 850px;
		position:absolute;
		top: 0px;
		left: 0px;
		color: white;
		background: url(../assets/31.jpg);
		background-size: cover;

	}
	.input-wrap{
		width: 100%;
		height: 50px;
		margin-top: 30px;
	}

	.input-content{
		position: relative;
		left: 20px;

	}
	.content{
		width: 500px;
		height: 350px;
		position: relative;
		border: 1px solid rgb(148,148,148);
		border-radius: 8px;
		background-color: rgba(148,148,148,0.2);
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		-o-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);

	}
	.input-btn{
		position: relative;
	}
	input{
		border: 1px solid rgb(138,181,124);
		height: 25px;
		width: 300px;
	}
	.err-msg{
		line-height: 40px;
		color: red;
		position: relative;
		margin-left: 10px;

	}
	.title{
		border-bottom: 2px solid rgb(148,148,148);
		height: 90px;

	}
	.title-content{
		line-height: 90px;
		font-size: 30px;
		color: 	#FFCC33;
	}
	button{
		height: 30px;
		width: 80px;
		border-radius: 5px;
		font-size: 16px;
		color: rgb(3,59,58);
		background-color: rgba(255,255,255,0.3);
	}
</style>