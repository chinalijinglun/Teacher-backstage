<template>
<!-- 审核页面 -->
<div class="audit-page">
	<h3>审核记录</h3>
	<el-table :data="fialLogLs" style="width: 100%;margin-top:20px;">
		<el-table-column prop="updated_at" label="审核时间">
		</el-table-column>
		<el-table-column prop="updated_by" label="审核人">
		</el-table-column>
		<el-table-column prop="action_event_desc" label="审核记录">
		</el-table-column>
	</el-table>
	<div class="btn-box">
		<el-button type="primary" size="mini" @click="auditSuccess">审核通过</el-button>
		<el-button type="primary" size="mini" @click="visible=true;">审核不通过</el-button>
		<el-button size="mini" @click="back">返回</el-button>
	</div>
	<order-reason-dialog :visible="visible" @onSubmit="auditFail"></order-reason-dialog>
</div>
</template>

<script>
import {
	teacherGetByTeacherid,
	teacherCheckPass,
	teacherPutByTeacherid
} from '@/api/teacher';
import {
	actionEventPost,
	actionEventBareGet
} from '@/api/action_event';
import {
	ACTION_EVENT_TYPE
} from '@/utils/enums'
const actionEventConfig = {
	action_event_type: ACTION_EVENT_TYPE.TEACHER_CHECK,
	primary_table_name: 'teacher',
	before_state: 3,
	after_state: 5,
}
export default {
  data() {
    return {
			visible: false,
			fialLogLs: [],
      teacher: {
        id: '',
        nickname: '',
				mobile: '',
				result: '',
      }
    };
	},
	created() {
		const id = this.$route.query.id;
		this.teacher.id = id;
		this.getFailLog(id);
	},
	methods: {
		back() {
			this.$router.back();
		},
		getTeacherInfo(id) {
			return teacherGetByTeacherid(id).then(resp => {
				console.log(resp.data);
			});
		},
		getFailLog(id) {
			const filter = this.$json2filter({
				action_event_type: [ACTION_EVENT_TYPE.TEACHER_CHECK],
				primary_table_name: ['teacher'],
				after_state: [5],
				primary_data_id: [id]
			})
			actionEventBareGet(filter).then(resp=>{
				this.fialLogLs = resp.data.objects;
			})
		},
		auditSuccess() {
			teacherCheckPass(this.teacher.id+'').then(resp => {
				this.$message.success('审核通过！');
				this.back()
			})
		},
		auditFail(reason) {
			teacherPutByTeacherid(this.teacher.id, {
				state: 5
			}).then(resp => {
				return actionEventPost({
					...actionEventConfig,
					primary_data_id: this.teacher.id,
					action_event_desc: reason
				})
			}).then(_=>{
				this.visible = false;
				this.$message.success('审核不通过！');
				this.back()
			})
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
