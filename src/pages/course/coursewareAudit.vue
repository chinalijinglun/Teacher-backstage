<template>
	<!-- 课件审核 -->
	<div class="auditions">
		<div class="all-course">
			<div class="course-package-top">
				<el-form ref="form" label-width="96px">
					<div class="inps">
						<el-row>
							<el-form-item label="课节名：">
								<el-input size="mini" v-model="form.classroom_name"></el-input>
							</el-form-item>
							<el-form-item label="课件名：">
								<el-input size="mini" v-model="form.course_ware_name"></el-input>
							</el-form-item>
							<el-form-item label="课程包名称：">
								<el-input size="mini" v-model="form.course_name"></el-input>
							</el-form-item>
							<el-form-item label="教师名称：">
								<el-input size="mini" v-model="form.teacher_name"></el-input>
							</el-form-item>
						</el-row>
						<el-row>
							<el-form-item label="状态：">
								<el-select v-model="form.state" placeholder="请选择" size="mini">
									<el-option label="所有状态" value=""></el-option>
									<el-option label="待审核" value="BEFORE_CHECK"></el-option>
									<el-option label="审核通过" value="CHECK_PASSED"></el-option>
									<el-option label="审核驳回" value="CHECK_DENY"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item class="select-time" label="上课时间：">
								<el-date-picker
									v-model="form.class_at"
									size="mini"
									type="date"
									placeholder="选择日期">
								</el-date-picker>
							</el-form-item>
						</el-row>
					</div>
					<el-button type="primary" size="mini" @click="query">查询</el-button>
				</el-form>
			</div>
		</div>
		<div class="table-list">
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column prop="ware_name" label="课件名称">
				</el-table-column>
				<el-table-column prop="room_title" label="课节名称">
				</el-table-column>
				<el-table-column prop="course_name" label="课程包名称">
				</el-table-column>
				<el-table-column prop="teacher_name" label="教师名称">
				</el-table-column>
				<el-table-column prop="created_at" label="课件上传时间">
				</el-table-column>
				<el-table-column label="状态">
					<template slot-scope="scope">
						{{$COURSEWARE_STATE_ENUM[scope.row.state]}}
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="audit(scope.row.id)">审核</el-button>
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
	mangerCourseWare
} from '@/api/courseware'
export default {
  data() {
    return {
      tableData: [],
      total: 0,
      form: {  
				class_at: '',
				classroom_name: '',
				course_name: '',
				course_ware_name: '',
				page_limit: 0,
				page_no: 0,
				state: '',
				teacher_name: '',
				page_no: 1,
				page_limit: 10
      }
    };
	},
	created() {
		this.query();
	},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
		},
		audit(id) {
			this.$router.push({
				path: '/course/courseAuditPage',
				query: {
					id
				}
			})
		},
		query(){
			mangerCourseWare(this.$deleteEmptyProps(this.form)).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			})
		}
  }
};
</script>

<style scoped>
.operation button {
  margin-right: 40px;
}
h3 {
  padding: 20px 0;
  margin-left: 10px;
}
.inps .el-form-item {
  width: 20%;
  float: left;
}
.inps .select-time {
  width: 35%;
}
.course-package-top button {
  float: left;
  margin: 10px;
}
.course-package-top {
  overflow: hidden;
}
.operation {
  margin-left: 20px;
  margin-left: 20px;
}
.block {
	margin-top: 20px;
	text-align: right;
}
</style>