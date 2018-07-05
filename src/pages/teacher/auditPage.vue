<template>
<!-- 审核页面 -->
<div class="audit-page">
	<h3>审核记录</h3>
	<table style="width:100%">
		<thead>
			<tr>
				<td>审核时间</td>
				<td>审核人</td>
				<td>审核记录</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					2017-09-16 15:32:04
				</td>
				<td>
					Kira
				</td>
				<td>
					不通过：教学经历描述过于简单
				</td>
			</tr>
		</tbody>
	</table>
	<div class="essential-information">
		<el-row>
			<el-col :span="12">
				<flat-feild name="教师ID：" value="chaos xu"></flat-feild>
				<flat-feild name="昵称：" value="chaos xu"></flat-feild>
				<flat-feild name="联系电话：" value="chaos xu"></flat-feild>
				<flat-feild name="国家：" value="chaos xu"></flat-feild>
				<flat-feild name="种族：" value="chaos xu"></flat-feild>
			</el-col>
			<el-col :span="12">
				<flat-feild name="教师姓名：" value="chaos xu"></flat-feild>
				<flat-feild name="性别：" value="chaos xu"></flat-feild>
				<flat-feild name="联系邮箱：" value="chaos xu"></flat-feild>
				<flat-feild name="所在城市：" value="chaos xu"></flat-feild>
			</el-col>
		</el-row>
	</div>
	<div class="btn-box">
		<el-button type="primary" size="mini" @click="auditSuccess">审核通过</el-button>
		<el-button type="primary" size="mini">审核不通过</el-button>
		<el-button size="mini" @click="back">返回</el-button>
	</div>
</div>
</template>

<script>
import {
	teacherGetByTeacherid,
	teacherPutByTeacherid
} from '@/api/teacher'
export default {
  data() {
    return {
			id: ''
		};
	},
	created() {
		const id = this.$route.query.id;
		this.id = id;
		this.getTeacherInfo(id);
	},
	methods: {
		back() {
			this.$router.back();
		},
		getTeacherInfo(id) {
			teacherGetByTeacherid(id).then(resp => {
				console.log(resp.data);
			});
		},
		auditSuccess() {
			teacherPutByTeacherid(this.id, {
				state: 4
			}).then(resp => {
				this.$message.success('审核通过！');
				this.back()
			})
		},
		auditFail() {
			
		}
	}
};
</script>

<style scoped>
h3 {
  padding: 10px 0;
}
table {
  margin: 0 auto;
  border-collapse: collapse; /*关键代码*/
}
th,
tr,
td {
  text-align: center;
  border: 1px solid #e1e1e1;
}
td {
  width: 30%;
  height: 30px;
}
.essential-information {
  width: 100%;
  min-height: 100px;
  line-height: 100px;
  text-align: center;
  margin-top: 15px;
  border: 1px solid #efefef;
}
.btn-box {
  width: 400px;
  margin: 0 auto;
  padding: 20px 0;
}
.el-container.flat-feild {
	line-height: 30px;
}
.el-container.flat-feild .el-aside {
	line-height: 30px;
	text-align: left;
}
.el-container.flat-feild .el-main {
	line-height: 30px;
	text-align: left;
}
</style>