<template>
  <div class="bckg">
    <div class="reset">
			<h1>Reset PassWord</h1>
			<el-form ref="resetForm" :model="resetForm" :rules="rules" :validate-on-rule-change="false">
				<el-form-item prop="username">
					<el-input
					type="text"
					placeholder="请输入邮箱/手机号"
					v-model="resetForm.username"
					auto-complete="off"
					></el-input>
				</el-form-item>
				<el-form-item prop="verify_code">
					<el-input
					type="text"
					placeholder="请输入验证码"
					v-model="resetForm.verify_code"
					auto-complete="off"
					>
						<span class="verify-btn-span" slot="append" @click="getVerifyCode" :disabled="!verifyBtn.status">{{verifyBtn.text}}</span>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
					type="password"
					placeholder="请输入密码"
					v-model="resetForm.password"
					auto-complete="off"
					></el-input>
				</el-form-item>
				<el-form-item prop="repass">
					<el-input
					type="password"
					placeholder="请再次输入密码"
					auto-complete="off"
					v-model="resetForm.repass"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="reset">重置密码</el-button>
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
.reset {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -300px 0 0 -150px;
  width: 300px;
  height: 300px;
}
.reset h1 {
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
	authSmsverifyPost,
	authEmailverifyPost,
	authResetpasswordPost
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
      if ((this.resetForm.password === value)) {
        callback();
      } else {
        callback("两次输入密码不一致！");
      }
		};
		const resetRules = {
			username: [
				{ required: true, message: '请输入手机号或者邮箱！', trigger: 'blur' },
				{ validator: isEmailOrPhone, trigger: 'blur' }
			],
			password: [
				{ required: true, message: '请输入密码！', trigger: 'blur' }
			],
			repass: [
				{ required: true, message: '请再次输入密码！', trigger: 'blur' },
				{ validator: isSamePassWord, trigger: "blur" }
			],
			verify_code: [
				{ required: true, message: '请输入验证码！', trigger: 'change' }
			]
		};
    return {
      resetForm: {
        username: '',
        password: '',
        verify_code: '',
        repass: '',
        usertype: this.$store.state.auth.userType
      },
      // 0=不符合规则 1=手机号 2=邮箱
			nameType: 0,
			rules: resetRules,
			resetRules,
			verifyBtn: {
				status: true,
				text: '获取验证码'
			}
    };
	},
	methods: {
		getVerifyCode() {
			const { username } = this.resetRules;
			this.rules = { username };
			this.$nextTick(()=> {
				this.$refs.resetForm.validate(valid => {
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
					this.rules = this.resetRules;
				});
			});
		},
		getEmailVerifyCode() {
			const form = {
				email_address: this.resetForm.username
			};
			return authEmailverifyPost(form);
		},
		getPhoneVerifyCode() {
			const form = {
				mobile_no: this.resetForm.username,
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
				}, 1000);
			}
		},
		reset() {
			this.rules = this.resetRules;
			this.$refs.resetForm.validate(valid => {
				if(valid) {
					const { username, password, verify_code} = this.resetForm;
					authResetpasswordPost({ username, password, verify_code}).then(resp=>{
						this.$message({
							message: '密码更新成功，请重新登录！',
							type: 'success'
						});
						this.$router.push('/login');
					});
				}
			});
		}
	}
};
</script>
