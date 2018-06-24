<template>
<!-- 教师在线审核 -->
<div class="date-class">
	<div class="course-package-top">
		<el-form ref="form" label-width="96px">
			<div class="inps">
				<el-row>
					<el-form-item label="教师姓名：">
						<el-input size="mini" v-model="form.username"></el-input>
					</el-form-item>
					<el-form-item label="联系电话：">
						<el-input size="mini" v-model="form.mobile"></el-input>
					</el-form-item>
					<el-form-item label="联系邮箱：">
						<el-input size="mini" v-model="form.email"></el-input>
					</el-form-item>
				</el-row>
			</div>
			<el-button type="primary" size="mini" @click="query">查询</el-button>
		</el-form>
	</div>
	<div class="table-list">
		<el-table :data="tableData" style="width: 100%;margin-top:20px;">
			<el-table-column fixed prop="id" label="ID" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="username" label="用户名" style="width: 15%;">
			</el-table-column>
			<el-table-column prop="zip" label="教师姓名" style="width: 10%;">
				<template slot-scope="scope">
					{{`${scope.row.given_name || ''} ${scope.row.family_name || ''}`}}
				</template>
			</el-table-column>
			<el-table-column prop="mobile" label="联系电话" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="email" label="联系邮箱" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="created_at" label="注册时间" style="width: 10%;">
			</el-table-column>
			<el-table-column label="状态" style="width: 15%;">
				<template slot-scope="scope">
					{{$TEACHER_STATE_ZH[scope.row.state]}}
				</template>
			</el-table-column>
			<el-table-column fixed="right" label="操作" style="width: 15%;">
			<template slot-scope="scope">
				<button @click="audit(scope.row.id)" type="button" class="el-button el-button--default el-button--small">
					<span>审核</span>
				</button>
			</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination
			@current-change="handleCurrentChange"
			:current-page="form.page"
			:page-size="10"
			layout="total, prev, pager, next, jumper"
			:total="total">
			</el-pagination>
		</div>
	</div>
</div>
</template>

<script>
import {
	teacherGetBare,
	teacherPutByTeacherid
} from '@/api/teacher'
export default {
  data() {
    return {
			tableData: [],
			total: 0,
      form: {
      	page: 4,
				email: '',
				mobile: '',
				username: ''
      }
    };
	},
	created() {
		this.query()
	},
  methods: {
    handleCurrentChange(val) {
			this.form.page = val;
			this.query();
		},
		query() {
			const {
				email,
				mobile,
				username,
				page
			} = this.form;
			const filter = this.$json2filter({
				email,
				mobile,
				username,
				state: [1]
			})
			teacherGetBare(filter, {page}).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			})
		},
		audit(id) {
			this.$confirm('确定审核？').then(_=> {
				teacherPutByTeacherid(id, {
					state: 4
				}).then(resp => {
					this.$message.success('审核通过！');
					this.query();
				})
			}).catch(_=> {

			})
		}
  }
};
</script>

<style scoped>
.inps .el-form-item {
  width: 20%;
  float: left;
}
.el-input {
  width: 95%;
}
.inps .select-time {
  width: 35%;
}
.course-package-top button {
  float: left;
  margin: 20px;
}
.course-package-top {
  overflow: hidden;
}
.operation {
  margin-left: 20px;
  margin-left: 20px;
}
.block {
  margin: 0 auto;
  padding: 20px;
  width: 600px;
}
</style>