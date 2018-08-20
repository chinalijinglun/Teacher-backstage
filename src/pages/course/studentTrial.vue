<template>
	<!-- 学生试听课报名 -->
	<div class="lecture-information">
		<div class="course-package-top">
			<el-form ref="form" label-width="96px">
				<div class="inps">
					<el-row>
						<el-form-item label="教师姓名：">
							<el-input size="mini" v-model="form.student_name"></el-input>
						</el-form-item>
						<el-form-item class="select-time" label="上课时间：">
							<el-date-picker
								v-model="form.class_at"
								size="mini"
								type="date"
								placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
						<el-form-item label="状态：">
							<el-select v-model="form.appointment_state" placeholder="请选择" size="mini">
								<el-option label="所有状态" value=""></el-option>
								<el-option v-for="(item,key) in $APPOINTMENT_STATE_ENUM" :key="key" :label="item" :value="key"></el-option>
							</el-select>
						</el-form-item>
					</el-row>
				</div>
				<el-button type="primary" size="mini" @click="query">查询</el-button>
			</el-form>

		</div>
		<div class="table-list">
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column prop="study_appointment_id" label="编号" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="created_at" label="报名时间" style="width: 15%;">
					<template slot-scope="{row}">
						{{row.created_at | hasTime}}
					</template>
				</el-table-column>
				<el-table-column prop="student_name" label="学生姓名" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="apply_by" label="提报人" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="open_time_start" label="试听时间" style="width: 10%;">
					<template slot-scope="{row}">
						{{row.open_time_start | hasTime}}
					</template>
				</el-table-column>
				<el-table-column prop="appointment_state" label="状态" style="width: 15%;">
					<template slot-scope="scope">
						{{$APPOINTMENT_STATE_ENUM[scope.row.appointment_state]}}
					</template>
				</el-table-column>
				<el-table-column label="操作" style="width: 15%;">
					<template slot-scope="scope">
						<el-button size="mini" @click="toDate(scope.row.study_appointment_id)" v-if="scope.row.appointment_state === 'WRITE_APPOINTMENT'">预约</el-button>
						<el-button size="mini" @click="toDate(scope.row.study_appointment_id)" v-if="scope.row.appointment_state === 'WRITE_ACCEPT'">编辑查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination 
				@current-change="handleCurrentChange" 
				:current-page="form.page_no" 
				:page-size="form.page_limit" 
				layout="total, prev, pager, next, jumper" 
				:total="total">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import {
	mangerStudentTryoutApply
} from '@/api/course'
export default {
  data() {
    return {
      tableData: [],
			page: 1,
			total: 0,
      startDate: null, //开始时间
      endDate: null, //结束时间
      form: {
				appointment_state: '',
				class_at: '',
				student_name: '',
				page_no: 1,
				page_limit: 10
      }
    };
	},
	created() {
		this.query();
	},
  methods: {
    handleCurrentChange(val) {
			this.form.page_no = val;
			this.query();
		},
		query() {
			mangerStudentTryoutApply(this.$deleteEmptyProps(this.form)).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			})
		},
		toDate(id) {
			this.$router.push({
				path: '/course/date',
				query: {
					id
				}
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
.create-time {
  width: 45%;
  float: left;
  padding: 10px;
}
.create-time div {
  width: 35%;
  margin-right: 20px;
}
</style>