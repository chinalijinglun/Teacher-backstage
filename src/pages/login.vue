<template>
<div class="bckg">
	<div class="login">  
		<h1>Login</h1>  
		<el-form ref="loginForm" :model="loginForm" :rules="rules">
			<el-form-item prop="username">
				<el-input 
					type="text" 
					placeholder="请输入邮箱/手机号" 
					v-model="loginForm.username"
					auto-complete="off"
				></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input 
					type="password" 
					placeholder="密码" 
					v-model="loginForm.password"
					auto-complete="off"
				></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onLogin">登录</el-button>
			</el-form-item>
		</el-form>
		<el-row>
			<p class="flt-left link-p"><router-link to="/regist">新用户？点击注册</router-link></p>
			<p class="flt-right link-p"><router-link to="/reset">忘记密码</router-link></p>
		</el-row>
	</div>  
</div>
</template>
<style scoped>
.bckg {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  margin: 0;
  background-color: #4a374a;
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 300px;
  height: 300px;
}
.login h1 {
  color: #fff;
  text-shadow: 0 0 10px;
  letter-spacing: 1px;
  text-align: center;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
input {
  width: 278px;
  height: 18px;
  margin-bottom: 10px;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px;
  border-top: 1px solid #312e3d;
  border-left: 1px solid #312e3d;
  border-right: 1px solid #312e3d;
  border-bottom: 1px solid #56536a;
  border-radius: 4px;
  background-color: #2d2d3f;
}
.but {
  width: 300px;
  min-height: 20px;
  display: block;
  background-color: #4a77d4;
  border: 1px solid #3762bc;
  color: #fff;
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  border-radius: 5px;
  margin: 0;
}
.el-select {
	width: 100%;
}
.el-button {
	width: 100%;
}
.flt-left {
	float: left;
}
.flt-right {
	float: right;
}
.link-p a{
	color: #FFF;
}
</style>
<script>
import {
	authLoginPost
} from '@/api/auth';

export default {
  data() {
    const isEmailOrPhone = (rule, value, callback) => {
      if (this.$EMAIL_REG_EXP.test(value) || this.$MOBILE_REG_EXP.test(value)) {
        callback();
      } else {
        this.nameType = 0;
        callback(new Error("必须是手机号或者邮箱！"));
      }
    };
		const rules = {
			username: [
				{ required: true, message: '请输入手机号或者邮箱！', trigger: 'blur' },
				{ validator: isEmailOrPhone, trigger: 'blur' }
			],
			password: [
				{ required: true, message: '请输入密码！', trigger: 'blur' }
			]
		};
    return {
			loginForm: {
				username: '',
				password: '',
				usertype: this.$store.auth.userType
			},
			rules
		};
  },
	methods: {
		onLogin() {
			this.$refs.loginForm.validate(valid => {
				if(valid) {
					authLoginPost(this.loginForm).then(resp => {
						this.$message({
							message: '登录成功！',
							type: 'success'
						})
						this.$router.push('/main');
					});
				}
			});
		}
	}
};
</script>
