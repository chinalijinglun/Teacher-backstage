<template>
	<!-- 签约 -->
	<div class="contract-mess">
		<h4>教师信息</h4>
		<div class="teacher-mess">
			<div class="teacher-name">
				<div class="title">教师姓名</div>
				<div class="cont">Kira Yuan</div>
			</div>
			<div class="teacher-name">
				<div class="title">联系电话</div>
				<div class="cont">1-876543210</div>
			</div>
			<div class="teacher-name">
				<div class="title">联系邮箱</div>
				<div class="cont">kira@gmail.com</div>
			</div>
		</div>
		<h4>合同内容</h4>
		<div class="agreement">
			<div class="price">
				<div class="title">签约价格</div>
				<div>USD <input class="inp" type="text" v-model="contract_dollar_price"> /节课</div>
			</div>
		</div>
		<div class="btn-box">
			<el-button type="primary" size="mini">预览合同</el-button>
			<el-button type="primary" size="mini">发送合同</el-button>
			<el-button size="mini">合同已发送，等待教师回复</el-button>

		</div>
	</div>
</template>

<script>
import {
	teacherPutByTeacherid
} from '@/api/teacher'
export default {
	data() {
		return {
			id: '',
			form: {
				contract_dollar_price: ''
			}
		}
	},
	created() {
		this.id = this.$route.query.id;
	},
	methods: {
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
				teacherPutByTeacherid(id, {
					contract_dollar_price: this.form.contract_dollar_price
				}).then(resp => {
					this.$message.success('合同发送成功！');
				});
			}
		}
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