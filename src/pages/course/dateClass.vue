<template>
<!-- 预约试讲 -->
<div class="date-class">
	<div class="course-package-top">
		<el-form ref="form" label-width="96px">
			<div class="inps">
				<el-row>
					<el-form-item label="教师姓名：">
						<el-input size="mini" v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="联系电话：">
						<el-input size="mini" v-model="form.mobile"></el-input>
					</el-form-item>
					<el-form-item label="联系邮箱：">
						<el-input size="mini" v-model="form.email"></el-input>
					</el-form-item>
					<el-form-item label="状态：">
						<el-select v-model="form.status" placeholder="请选择" size="mini">
							<el-option label="所有状态" value=""></el-option>
							<el-option label="有效" :value="$VALID_ENUM.VALID"></el-option>
							<el-option label="无效" :value="$VALID_ENUM.INVALID"></el-option>
						</el-select>
					</el-form-item>
				</el-row>
			</div>
			<el-button type="primary" size="mini">查询</el-button>
			<el-button type="primary" size="mini">预约试讲</el-button>
		</el-form>
	</div>
	<div class="table-list">
		<el-table :data="tableData" style="width: 100%;margin-top:20px;">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column fixed prop="id" label="ID" style="width: 15%;">
			</el-table-column>
			<el-table-column prop="username" label="用户名" style="width: 15%;">
			</el-table-column>
      <el-table-column label="姓名" width="200">
        <template slot-scope="scope">
          {{ (scope.row.username || '') }}
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
				<button type="button" class="el-button el-button--default el-button--small" @click="dateTeacher(scope.row.id)">
					<span>预约试讲</span>
				</button>
			</template>
			</el-table-column>
		</el-table>
		<el-row class="block-row">
			<el-pagination
			@current-change="handleCurrentChange"
			:current-page="form.page"
			:page-size="10"
			layout="total, prev, pager, next, jumper"
			:total="total">
			</el-pagination>
		</el-row>
	</div>
	<sure-time-dialog :visible.sync="dateAlertShow1"></sure-time-dialog>
	<appointment-teacher :visible.sync="dateAlertShow" :teacher-id="curTeacher"></appointment-teacher>
</div>
</template>

<script>
import { teacherGet } from '@/api/teacher';
import { paginationMix } from '@/components';

export default {
  data() {
    return {
      tableData: [],
			total: 0,
      form: {
				name: '',
				email: '',
				mobile: '',
        state: '',
				page: 1
			},
			curTeacher: '',
			dateAlertShow: false,
			dateAlertShow1: false
    };
	},
	mixins: [paginationMix],
	created() {
		this.query();
	},
  methods: {
		query() {
			// const filter = this.$json2filter({
			// 	state: [10, 11, 12, 13, 14, 15]
			// });
      const filter = this.$json2filter({});
			teacherGet({page:this.form.page}).then(res => {
				this.total = res.data.num_results;
				this.tableData = res.data.objects
			})
		},
		dateTeacher(id) {
			this.curTeacher = id;
			this.dateAlertShow = true;
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
.block-row {
	margin: 20px 0;
	text-align: right;
}
</style>
