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
					</el-row>
					<el-row>
						<el-form-item label="状态：">
							<el-select v-model="form.state" placeholder="请选择" size="mini">
								<el-option label="所有状态" value=""></el-option>
								<el-option label="待预约" value="1"></el-option>
								<el-option label="待答复" value="6"></el-option>
								<el-option label="待定" value="8"></el-option>
								<el-option label="待确认" value="7"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="操作时间：">
							<el-date-picker
								v-model="form.interview_at"
								size="mini"
								type="date"
								placeholder="选择日期">
							</el-date-picker>
						</el-form-item>
					</el-row>
					<el-row>
						<el-button type="primary" size="mini" @click="query">查询</el-button>
					</el-row>
				</div>
			</el-form>
		</div>
		<div class="table-list">
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column fixed prop="id" label="ID">
				</el-table-column>
				<el-table-column prop="username" label="教师姓名">
				</el-table-column>
				<el-table-column prop="mobile" label="联系电话">
				</el-table-column>
				<el-table-column prop="email" label="联系邮箱">
				</el-table-column>
				<el-table-column prop="updated_at" label="操作时间">
				</el-table-column>
				<el-table-column label="状态">
					<template slot-scope="scope">
						{{$INTERVIEW[scope.row.integerview_state]}}
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作">
					<template slot-scope="scope">
						<el-button 
						@click="dateInterviewDialogOpen(scope.row.interview_id)" 
						v-if="scope.row.integerview_state === 1" 
						size="mini">预约面试</el-button>

						<el-button 
						@click="dateInterviewEditOpen(scope.row.interview_id)" 
						v-if="scope.row.integerview_state === 6"
						size="mini">编辑查看</el-button>
						<el-button 
						@click="reasonDialogOpen(scope.row.interview_id)" 
						v-if="scope.row.integerview_state === 6"
						size="mini">待定</el-button>

						<el-button 
						@click="dateInterviewDialogOpen(scope.row.interview_id)" 
						v-if="scope.row.integerview_state === 8"
						size="mini">重新预约</el-button>
						<el-button 
						@click="reasonReview(scope.row.interview_id)" 
						v-if="scope.row.integerview_state === 8"
						size="mini">待定记录</el-button>

						<el-button 
						@click="sureTime(scope.row)" 
						v-if="scope.row.integerview_state === 7"
						size="mini">确认时间</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-row class="block">
				<el-pagination @current-change="handleCurrentChange" :current-page="page" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</el-row>
		</div>
		<date-time-dialog :visible.sync="timeDialogShow" :id="interview_id" :isEdit="isEdit" @onSubmit="dateInterview"></date-time-dialog>
		<order-reason-dialog :visible.sync="reasonDilogShow" @onSubmit="toWait"></order-reason-dialog>
		<action-event-review 
		:visible.sync="reasonReviewShow" 
		:primaryDataId="interview_id" 
		afterState="8" 
		primaryTableName="interview" 
		:actionEventType="1" />
		<time-sure :visible.sync="sureDialog" :id="interview_id" @onSure="handleSureTime" @onReDate="handleReDate"></time-sure>
	</div>
</template>
<script>
import {
	mangerThacherApponit
} from '@/api/teacher';
import {
	interviewPutByinterviewid
} from '@/api/interview';
import {
	actionEventPost
} from '@/api/action_event';
import {
	teacherPutByTeacherid
} from '@/api/teacher'
export default {
  data() {
    return {
      tableData: [],
			page: 1,
			total: 0,
			interview_id: '',
			teacher_id: '',
      form: {
				username: '',
				mobile: '',
				state: '',
				email: '',
				interview_at: ''
			},
			isEdit: false,
			timeDialogShow: false,
			reasonDilogShow: false,
			reasonReviewShow: false,
			sureDialog: false
    };
	},
	created() {
		this.query()
	},
  methods: {
		query() {
			const f = this.$deleteEmptyProps(this.form);
			mangerThacherApponit({
				...f,
				page_no: this.page,
				page_limit: 10
			}).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			})
		},
    handleCurrentChange(val) {
			this.page = val;
			this.query();
		},
		dateInterviewDialogOpen(id) {
			this.interview_id = id;
			this.timeDialogShow = true;
		},
		dateInterviewEditOpen(id) {
			this.interview_id = id;
			this.timeDialogShow = true;
			this.isEdit = true;
		},
		dateInterview(timeRange) {
			interviewPutByinterviewid(this.interview_id, {
				state: 6,
				set_time: JSON.stringify(timeRange)
			}).then(resp => {
				console.log(resp);
				this.$message.success('预约成功！');
				this.timeDialogShow = false;
				this.isEdit = false;
				this.query();
			});
		},
		reasonDialogOpen(id) {
			this.interview_id = id;
			this.reasonDilogShow = true;
		},
		toWait(reason) {
			interviewPutByinterviewid(this.interview_id, {
				state: 8
			}).then(resp => {
				return actionEventPost({
					before_state: 6, 
					after_state: 8, 
					primary_data_id: this.interview_id, 
					action_event_desc: reason, 
					primary_table_name: 'interview',
					action_event_type: this.$ACTION_EVENT_TYPE.UNKNOWN
				})
			}).then(resp => {
				this.$message.success('已置为待定！');
				this.reasonDilogShow = false;
				this.query();
			});
		},
		reasonReview(id) {
			this.interview_id = id;
			this.reasonReviewShow = true;
		},
		sureTime(row) {
			this.teacher_id = row.id;
			this.interview_id = row.interview_id;
			this.sureDialog = true;
		},
		handleSureTime() {
			teacherPutByTeacherid(this.teacher_id, {
				state: 'WAIT_FOR_INTERVIEW'
			}).then(resp => {
				return interviewPutByinterviewid(this.interview_id, {
					state: 2
				})
			}).then(resp => {
				this.$message.success('确认成功！');
				this.sureDialog = false;
				this.query();
			});
		},
		handleReDate() {
			this.sureDialog = false;
			this.dateInterviewDialogOpen(this.interview_id);
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
	text-align: right;
}
</style>