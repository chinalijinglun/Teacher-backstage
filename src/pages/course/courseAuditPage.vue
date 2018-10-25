<template>
	<!--课件审核页面 -->
	<div class="course-audit-page">
		<h4>审核记录</h4>
    <el-table
    :data="tableData">
      <el-table-column
        prop="created_at"
        label="审核时间">
        <template slot-scope="{row}">
          {{row.created_at | hasTime}}
        </template>
      </el-table-column>
      <el-table-column
        prop="updated_by"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="action_event_desc"
        label="审核记录">
      </el-table-column>
    </el-table>
		<h4>课件信息</h4>
		<div class="course-mess">
			<table>
				<tr>
					<td width=130px>课节名称</td>
					<td>{{courseware.ware_name}}</td>
				</tr>
				<tr>
					<td>所属课程</td>
					<td>{{courseware.course_name}}</td>
				</tr>
				<tr>
					<td>授课教师</td>
					<td>{{courseware.primary_teacher}}</td>
				</tr>
				<tr>
					<td>课件上传时间</td>
					<td>{{courseware.created_at}}</td>
				</tr>
				<tr>
					<td>上课时间</td>
					<td>{{courseware.start_time}}</td>
				</tr>
				<tr>
					<td>课件状态</td>
					<td>{{courseware.state}}</td>
				</tr>
			</table>
			<div class="fujian">
				<div class="show-down">
					<a class="down" :href="courseware.ware_url" target="_blank" :download="courseware.ware_name||'课件1'">下载</a>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<el-button type="primary" size="mini" @click="toPass">审核通过</el-button>
			<el-button type="primary" size="mini" @click="openReasonDialog">审核不通过</el-button>
			<el-button size="mini" @click="back">返回</el-button>
		</div>
		<order-reason-dialog :visible.sync="visible" @onSubmit="toCheckDeny"></order-reason-dialog>
	</div>
</template>

<script>
import {
	courseGetByCourseId
} from '@/api/course';
import {
	coursewareBareGetById,
	coursewarePutById
} from '@/api/courseware';
import {
	actionEventBareGet,
	actionEventPost
} from '@/api/action_event';
export default {
	data() {
		return {
			tableData: [],
			visible: false,
			courseware_id: '',
			courseware: {
				ware_name: '',
				course_name: '',
				created_at: '',
				primary_teacher: '',
				start_time: '',
				ware_url: ''
			}
		}
	},
	created() {
		this.courseware_id = this.$route.query.id;
		this.getCourseWare(this.courseware_id).then(data=>{
			this.getCourse(data.course_id);
		});
		this.getLog();
	},
	methods: {
		getCourseWare(id) {
			return coursewareBareGetById(id).then(resp => {
				this.courseware.ware_name = resp.data.ware_name;
				this.courseware.created_at = resp.data.created_at;
				this.courseware.state = this.$COURSEWARE_STATE[resp.data.checked_result];
				this.courseware.ware_url = resp.data.ware_url;
				return resp.data;
			})
		},
		getCourse(id) {
			return courseGetByCourseId(id).then(resp => {
				this.courseware.course_name = resp.data.course_name;
				this.courseware.primary_teacher = resp.data.primary_teacher.username;
				this.courseware.start_time = resp.data.course_schedules[0]?resp.data.course_schedules[0].start:'';
				return resp.data;
			})
		},
		getLog() {
			const filter = this.$json2filter({
				action_event_type: [1],
				primary_table_name: ['courseware'],
				after_state: [3],
				primary_data_id: [this.courseware_id]
			})
			return actionEventBareGet(filter).then(resp => {
				this.tableData = resp.data.objects;
			})
		},
		toPass() {
			return coursewarePutById(this.courseware_id, {
				checked_result: 'CHECK_PASSED'
			}).then(resp => {
				this.$message.success('审核通过！');
				this.back()
			})
		},
		openReasonDialog() {
			this.visible = true;
		},
		toCheckDeny(reason) {
			return coursewarePutById(this.courseware_id, {
				checked_result: 'CHECK_DENY'
			}).then(resp => {
				return actionEventPost({
					action_event_type: 1,
					primary_table_name: 'courseware',
					before_state: 2,
					after_state: 3,
					primary_data_id: this.courseware_id,
					action_event_desc: reason
				});
			}).then(resp => {
				this.$message.success('审核驳回！');
				this.visible = false;
				this.back();
			})
		},
		back() {
			this.$router.back();
		}
	}
};
</script>

<style scoped>
h4 {
  margin: 10px 0;
}
.tables {
  margin: 0 auto;
  border-collapse: collapse; /*关键代码*/
}
.tables th,
.tables tr,
.tables td {
  text-align: center;
  border: 1px solid #e1e1e1;
}
.tables td {
  width: 30%;
  height: 30px;
}
.course-mess tr {
  height: 40px;
}
.fujian {
  width: 115px;
}
.wenjian {
  width: 115px;
  height: 140px;
  background-color: #e1e1e1;
}
.show-down {
  overflow: hidden;
  padding: 10px 0;
}
.show,
.down {
  float: left;
  width: 50%;
  text-align: center;
  color: #3c8dbc;
  cursor: pointer;
}
.btn-box {
  width: 350px;
  margin: 0 auto;
  padding: 10px;
}
</style>