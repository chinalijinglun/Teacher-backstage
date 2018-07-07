<template>
	<!-- 预约试讲 -->
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
						<el-form-item label="状态：">
							<el-select v-model="form.status" placeholder="请选择" size="mini">
								<el-option label="所有状态" value=""></el-option>
								<el-option label="待预约" value="1"></el-option>
								<el-option label="已预约" value="1"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item class="select-time" label="操作时间：">
							<date-range :start-date.sync="form.startDate" :end-date.sync="form.endDate" size="mini" range-separator="-" start-placeholder="输入开始时间" end-placeholder="输入结束时间">
							</date-range>
						</el-form-item>
					</el-row>
					<el-button type="primary" size="mini">查询</el-button>
				</div>

			</el-form>
		</div>
		<div class="table-list">
			<div class="operation">
				<el-button type="primary" size="mini">预约试讲</el-button>
			</div>
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column fixed prop="id" label="ID" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="username" label="教师姓名" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="mobile" label="联系电话" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="email" label="联系邮箱" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="updated_at" label="操作时间" style="width: 10%;">
				</el-table-column>
				<el-table-column label="状态" style="width: 15%;">
					<template slot-scope="scope">
						{{$TEACHER_STATE_ZH[scope.row.state]}}
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" style="width: 15%;">
					<template slot-scope="scope">
						<button type="button" class="el-button el-button--default el-button--small">
							<span>预约面试</span>
						</button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @current-change="handleCurrentChange" :current-page="page" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import {
	teacherGet
} from '@/api/teacher';
export default {
  data() {
    return {
      tableData: [],
			page: 1,
			total: 0,
      form: {
				username: '',
				mobile: '',
				state: [''],
				email: ''
      }
    };
	},
	created() {
		this.query()
	},
  methods: {
		query() {
			let {
				username,
				mobile,
				state,
				email
			} = this.form;
			const page = this.page;
			state = state[0]?state:[4,6];
			const filter = this.$json2filter({
				username,
				mobile,
				state,
				email
			});
			teacherGet(filter, {
				page: 1
			}).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_resultes;
			})
		},
		
    handleCurrentChange(val) {
			this.page = val;
			this.query()
		},
		stateToQuery() {	
		},
		interviewState(item) {
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