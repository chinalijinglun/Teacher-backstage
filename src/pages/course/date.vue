<template>
<!-- 预约 -->
<div class="date">
	<el-button type="primary" size="mini">学生信息</el-button>
	<div class="student-needs">
		<div class="trial-time">
			<div class="trial-name">
				试听学生
			</div>
			<div class="detail-time">
				{{ info.studentName }}
			</div>
		</div>
		<div class="trial-time">
			<div class="trial-name">
				试听时间
			</div>
			<div class="detail-time">
				{{ info.open_time_start | courseScheduleTime(info.open_time_end)}}
			</div>
		</div>
	</div>
	<el-row class="date-teacher" v-if="hisLs.length">
		<p>接受情况</p>
		<el-table :data="hisLs" style="width: 100%">
			<el-table-column prop="id" label="ID" width="100">
			</el-table-column>
			<el-table-column prop="teacher_name" label="教师姓名" style="width:10%">
			</el-table-column>
			<el-table-column prop="mobile" label="联系电话" style="width:10%">
			</el-table-column>
			<el-table-column prop="email" label="联系邮箱" style="width:10%">
			</el-table-column>
			<el-table-column label="时区" prop="timezone" style="width:10%">
			</el-table-column>
			<el-table-column label="状态" style="width:10%">
				<template slot-scope="scope">
					{{ $COURSE_APPOINTMENT_STATE_ENUM[scope.row.appointment_state] }}
				</template>
			</el-table-column>
		</el-table>
	</el-row>
	<div class="date-teacher">
		教师姓名：
		<el-button type="text" @click="showTeacherDialog = true">{{ '请选择教师' }}</el-button>
		<!-- <input placeholder="请输入教师ID" size="mini" type="text" v-model="input.id" class="placehold">
		<el-button size="mini" @click="add">确定</el-button> -->
	</div>
	<el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
		<el-table-column type="selection" label="ID" width="50">
		</el-table-column>
		<el-table-column prop="id" label="ID" width="100">
		</el-table-column>
		<el-table-column prop="username" label="教师姓名" style="width:10%">
		</el-table-column>
		<el-table-column prop="mobile" label="联系电话" style="width:10%">
		</el-table-column>
		<el-table-column prop="email" label="联系邮箱" style="width:10%">
		</el-table-column>
		<el-table-column label="时区" style="width:10%">
			<template slot-scope="scope">
				{{ $TIME_ZONE[scope.row.timezone] }}
			</template>
		</el-table-column>
	</el-table>
	<el-row class="btn-container date-block">
		<el-button @click="date" type="primary">预约</el-button>
		<el-button @click="remove">删除</el-button>
	</el-row>
	<el-row class="info date-block">
		<p>
			说明：可以同时预约多个老师，输入教师ID，点添加加入到下方列表里，可以删除，点预约就发送到老师端，老师那边先确定的得到这次试听课，其他人不能在上课了。
		</p>
	</el-row>
	<teacher-dialog :visible.sync="showTeacherDialog" @chose="handlerChoseTeacher"></teacher-dialog>
</div>
</template>
<script>
import {
	teacherGetBareByTeacherid
} from '@/api/teacher';
import {
	courseAppointmentPost,
	getCourseAppointmentByStudyAppointmentId
} from '@/api/course_appointment';
import {
	studyAppointmentmentBareGetById,
	studyAppointmentmentPutById,
	getDateTeacherLsById
} from '@/api/study_appointment';
import {
	studentBareGetById
} from '@/api/student';
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState({
			userName: state => state.auth.userName
		})
	},
  data() {
    return {
			showTeacherDialog: false,
			info: {
				studentName: '',
				open_time_end: '',
				open_time_start: ''
			},
			input: {
				id: ''
			},
			// 已预约的教师列表
			hisLs: [],
			study_appointment_id: '',
			teacherIdLs: [],
			tableData: [],
			choseLs: []
    };
	},
	created() {
		this.study_appointment_id = this.$route.query.id;
		this.detail();
	},
	methods: {
		handleSelectionChange(e) {
			this.choseLs = e;
		},
		detail() {
			getCourseAppointmentByStudyAppointmentId(this.study_appointment_id).then(resp => {
				this.teacherIdLs = resp.data.objects.map(item => item.teacher_id);
			});
			getDateTeacherLsById(this.study_appointment_id).then(resp => {
				this.hisLs = resp.data.objects;
			})
			return studyAppointmentmentBareGetById(this.study_appointment_id).then(resp => {
				const {data:{student_id, open_time_end, open_time_start}} = resp;
				studentBareGetById(student_id).then(res => {
					this.info.studentName = res.data.name;
					this.info.open_time_end = open_time_end;
					this.info.open_time_start = open_time_start;
				})
			});
		},
		handlerChoseTeacher(teacher) {
			this.tableData.push(teacher);
			this.teacherIdLs.push(teacher.id);
		},
		remove() {
			this.choseLs.forEach(item => {
				const index = this.tableData.indexOf(item);
				const indexId = this.teacherIdLs.indexOf(item.id);
				this.tableData.splice(index, 1);
				this.teacherIdLs.splice(index, 1);
			});
		},
		date() {
			// console.log(this.tableData.map(item=>item.id))
			const promiseAll = this.tableData.map(item=>this.dateTeacher(item.id));
			Promise.all([...promiseAll, this.changeState()]).then(resp => {
				this.$message.success('预约成功');
				this.goback();
			});
		},
		changeState() {
			return studyAppointmentmentPutById(this.study_appointment_id, {
				updated_at: new Date(),
				updated_by: this.userName,
				appointment_state: 2
			})
		},
		dateTeacher(id) {
			return courseAppointmentPost({
				appointment_state: 1,
				created_at: new Date(),
				delete_flag: 1,
				study_appointment_id: this.study_appointment_id,
				updated_at: new Date(),
				updated_by: this.userName,
				teacher_id: id
			})
		},
		goback(){
			this.$router.back()
		}
	}
};
</script>

<style scoped>
.detail-content {
  height: 430px;
  background-color: gray;
  line-height: 430px;
  text-align: center;
  margin: 10px 0;
}
.stneeds,
.need-time,
.mian-content {
  padding: 10px 0;
}
.trial-time {
  overflow: hidden;
  margin: 10px 0;
}
.trial-name {
  width: 90px;
  float: left;
}
.detail-time {
  float: left;
}
.placehold {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 30px;
  line-height: 30px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 200px;
}
.date-teacher button {
  padding: 7px 40px;
}
.date-teacher {
  margin-top: 20px;
}
.date-block {
	margin-top: 20px;
}
</style>