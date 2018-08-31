<template>
	<!-- 签约 -->
	<div class="contract-mess">
		<h4>教师信息</h4>
		<div class="teacher-mess">
			<div class="teacher-name">
				<div class="title">教师姓名</div>
				<div class="cont">{{teacherName}}</div>
			</div>
			<div class="teacher-name">
				<div class="title">联系电话</div>
				<div class="cont">{{teacherInfo.mobile}}</div>
			</div>
			<div class="teacher-name">
				<div class="title">联系邮箱</div>
				<div class="cont">{{teacherInfo.email}}</div>
			</div>
		</div>
		<h4>合同内容</h4>
		<div class="agreement">
			<div class="price">
				<div class="title">签约价格</div>
				<div>USD <input class="inp" type="text" v-model="form.contract_dollar_price"> /节课</div>
			</div>
		</div>
		<div class="btn-box">
			<el-button type="primary" size="mini" @click="viewContract">预览合同</el-button>
			<el-button type="primary" size="mini" @click="submit">发送合同</el-button>
			<el-button size="mini" @click="goback">返回</el-button>
		</div>
		<agreement :visible.sync="visible" :salary="form.contract_dollar_price" :teacher-name="teacherName"></agreement>
	</div>
</template>

<script>
import {
	teacherContract,
	teacherGetBareByTeacherid
} from '@/api/teacher'
import agreement from '@/components/teacher/agreement'
export default {
	data() {
		return {
			id: '',
			teacherInfo: {
				username: '',
				first_name: '',
				middle_name: '',
				last_name: '',
				mobile: '',
				email: '',
				contract_url: ''
			},
			visible: false,
			form: {
				contract_dollar_price: ''
			}
		}
	},
	computed: {
		teacherName() {
			const teacherInfo = {...this.teacherInfo}
			const nameArr = [];
			if(teacherInfo.first_name || teacherInfo.middle_name || teacherInfo.last_name) {
				teacherInfo.first_name && nameArr.push(teacherInfo.first_name)
				teacherInfo.middle_name && nameArr.push(teacherInfo.middle_name)
				teacherInfo.last_name && nameArr.push(teacherInfo.last_name)
				return nameArr.join(' ');
			} else {
				return teacherInfo.username;
			}
		}
	},
	created() {
		this.id = this.$route.query.id;
		this.teacherInfoGet(this.id)
	},
	methods: {
		goback() {
			this.$router.back()
		},
		valid() {
			if(!this.form.contract_dollar_price) {
				this.$message.error('请填写签约价格！')
				return false;
			}
			if(!this.$PLUS_NUM_REG_EXP.test(this.form.contract_dollar_price)) {
				this.$message.error('签约价格只能是正数！')
				return false;
			}
			return true;
		},
		submit() {
			if(this.valid()) {
				teacherContract({
					teacher_id: this.id,
					date: new Date(),
					salary: this.form.contract_dollar_price
				}).then(resp => {
					this.$message.success('合同发送成功！');
				});
			}
		},
		teacherInfoGet(id) {
			teacherGetBareByTeacherid(id).then(resp => {
				this.teacherInfo = resp.data
			})
		},
		viewContract() {
			this.visible = true
		}
	},
	components: {
		agreement
	}
};
</script>

<style scoped>
h4 {
  margin: 20px;
}
.teacher-mess,
.agreement,
.btn-box {
  margin: 20px;
}
.teacher-name,
.type,
.price {
  width: 100%;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
}
.title {
  float: left;
  width: 100px;
  padding-right: 20px;
}
.cont {
  float: left;
}
.inp {
  width: 50px;
  text-align: center;
}
</style>