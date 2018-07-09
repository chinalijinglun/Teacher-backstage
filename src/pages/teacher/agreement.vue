<template>
	<!-- 发合同/查看 -->
	<div class="agreement">
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
		<h4>签约价格</h4>
		<div class="teacher-mess">
			US $ <input type="text"> /per hour
			<button>确认</button>
			<button>修改</button>
		</div>
		<div class="btn-box">
			<el-button type="primary" size="mini">预览合同</el-button>
			<el-button type="primary" size="mini">保存并发送合同</el-button>
		</div>
		<div class="bg"></div>
		<agreements class="agrs"></agreements>
	</div>
</template>

<script>
import agreements from '@/components/teacher/agreement';
export default {
	components:{
		agreements
	}
};
</script>

<style scoped>
h4 {
  margin: 20px;
}
.teacher-mess {
  margin: 20px;
}
.teacher-name {
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
.sign {
  margin: 20px;
  min-height: 300px;
  background-color: #e1e1e1;
  text-align: center;
  line-height: 300px;
}
.teacher-mess button {
  border: none;
  outline: none;
  color: #3c8dbc;
  cursor: pointer;
}
.btn-box {
  padding: 15px;
}
.agrs{
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -400px!important;
	margin-top: -200px!important;
	z-index: 9999;
}
.bg{
	width: 100%;
	height: 100%;
	background-color: #999;
	position: absolute;
	top: 0;
	left: 0;
	opacity: .5;
}
</style>