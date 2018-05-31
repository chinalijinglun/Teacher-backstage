<template>
  <div class="bckg">
    <div class="regist">  
			<h1>Regist</h1>  
			<el-form ref="registForm" :model="registForm" :rules="rules" :validate-on-rule-change="false">
				<el-form-item prop="username">
					<el-input 
					type="text" 
					placeholder="请输入邮箱/手机号" 
					v-model="registForm.username"
					auto-complete="off"
					></el-input>
				</el-form-item>
				<el-form-item prop="verify_code">
					<el-input 
					type="text" 
					placeholder="验证码" 
					v-model="registForm.verify_code"
					auto-complete="off"
					>
						<span class="verify-btn-span" slot="append" @click="getVerifyCode" :disabled="!verifyBtn.status">{{verifyBtn.text}}</span>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input 
					type="password" 
					placeholder="密码" 
					v-model="registForm.password"
					auto-complete="off"
					></el-input>
				</el-form-item>
				<el-form-item prop="repass">
					<el-input 
					type="password" 
					placeholder="密码" 
					auto-complete="off"
					v-model="registForm.repass"
					></el-input>
				</el-form-item>
				<el-form-item prop="usertype">
					<el-select v-model="registForm.usertype">
						<el-option :value="'01'" label="type1"></el-option>
						<el-option :value="'02'" label="type2"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="regist">注册</el-button>    
				</el-form-item> 
			</el-form>
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
.regist {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -300px 0 0 -150px;
  width: 300px;
  height: 300px;
}
.regist h1 {
  color: #fff;
  text-shadow: 0 0 10px;
  letter-spacing: 1px;
  text-align: center;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
.el-select {
  width: 100%;
}
.el-button {
  width: 100%;
}
.verify-btn-span {
	line-height: 40px;
	cursor: pointer;
	width: 110px;
	margin: -10px -20px;
	text-align: center;
	display: block;
}
</style>
<script>
import {
	authSmsverifyPost,
	authEmailverifyPost,
	authRegisterPost
} from '@/api/auth'

export default {
  data() {
    const isEmailOrPhone = (rule, value, callback) => {
      if (this.$EMAIL_REG_EXP.test(value)) {
        this.nameType = 2;
        callback();
      } else if (this.$MOBILE_REG_EXP.test(value)) {
        this.nameType = 1;
        callback();
      } else {
        this.nameType = 0;
        callback(new Error("必须是手机号或者邮箱！"));
      }
    };
    const isSamePassWord = (rule, value, callback) => {
      if ((this.registForm.password === value)) {
        callback();
      } else {
        callback("两次输入密码不一致！");
      }
		};
		const registRules = {
			username: [
				{ required: true, message: '请输入手机号或者邮箱注册！', trigger: 'blur' },
				{ validator: isEmailOrPhone, trigger: 'blur' }
			],
			password: [
				{ required: true, message: '请输入密码！', trigger: 'blur' }
			],
			repass: [
				{ required: true, message: '请再次输入密码！', trigger: 'blur' },
				{ validator: isSamePassWord, trigger: "blur" }
			],
			usertype: [
				{ required: true, message: '请选择用户类型！', trigger: 'change' }
			],
			verify_code: [
				{ required: true, message: '请输入验证码！', trigger: 'change' }
			]
		};
    return {
      registForm: {
        username: '',
        password: '',
        verify_code: '',
        repass: '',
        usertype: ''
      },
      // 0=不符合规则 1=手机号 2=邮箱
			nameType: 0,
			rules: registRules,
			registRules,
			verifyBtn: {
				status: true,
				text: '获取验证码'
			}
    };
	},
	methods: {
		getVerifyCode() {
			const { username } = this.registRules;
			this.rules = { username };
			this.$nextTick(()=> {
				this.$refs.registForm.validate(valid => {
					if(valid) {
						this.countDown(60);
						switch(this.nameType) {
							case 1: 
								return this.getPhoneVerifyCode().then(resp => {
									console.log(resp);
								});
							case 2: 
								return this.getEmailVerifyCode().then(resp => {
									console.log(resp);
								});
							default: 
								return;
						}
					}
					this.rules = this.registRules;
				});
			});
		},
		getEmailVerifyCode() {
			const form = {
				email_address: this.registForm.username
			};
			return authEmailverifyPost(form);
		},
		getPhoneVerifyCode() {
			const form = {
				mobile_no: this.registForm.username,
				country_code: '86'
			};
			return authSmsverifyPost(form);
		},
		countDown(count) {
			if(count === 0) {
				this.verifyBtn.status = true;
				this.verifyBtn.text = '重新获取';
				return;
			} else {
				this.verifyBtn.status = false;
				this.verifyBtn.text = `${count}S`;
				setTimeout(() => {
					this.countDown(--count);
				}, 1000)
			}
		},
		regist() {
			this.rules = this.registRules;
			this.$refs.registForm.validate(valid => {
				if(valid) {
					const { username, password, usertype, verify_code} = this.registForm;
					authRegisterPost({ username, password, usertype, verify_code}).then(resp=>{
						console.log(resp);
					})
				}
			});
		}
	}
};
</script>
