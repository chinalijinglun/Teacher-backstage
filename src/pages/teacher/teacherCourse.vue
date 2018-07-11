<template>
	<!-- 教师课程 -->
	<div class="auditions">
		<div class="operation">
			<el-button @click="goTchDetail" size="mini">教师资料</el-button>
			<el-button type="primary" size="mini" @click="goCourse">教师课程</el-button>
		</div>
		<div class="all-course"> 
			<div class="course-package-top">
				<el-form ref="form" label-width="96px">
					<div class="inps"> 
						<el-row>
							<el-form-item label="课程名：">
								<el-input size="mini" v-model="form.course_name"></el-input>
							</el-form-item>
							<el-form-item label="学生名：">
								<el-input size="mini" v-model="form.student_name"></el-input>
							</el-form-item>
							<el-form-item class="select-time" label="上课时间：">
								<el-date-picker size="mini" v-model="form.course_time" type="datetime" placeholder="选择时间">
								</el-date-picker>
							</el-form-item>
							<el-form-item label="状态：">
								<el-select v-model="form.course_status" placeholder="请选择" size="mini">
									<el-option label="完成" value="1"></el-option>
									<el-option label="未上" value="2"></el-option>
								</el-select>
							</el-form-item>
						</el-row>
					</div>
					<el-button type="primary" size="mini" @click="query">查询</el-button>
				</el-form>
			</div>
		</div>
		<div class="table-list">
			<div class="teacher-name">
				教师姓名&nbsp;&nbsp;
				<span>
					{{userName}}
				</span>
			</div>
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column fixed prop="course_name" label="课程名" style="width: 15%;">
				</el-table-column>
				<el-table-column label="课程进度" style="width: 15%;">
					<template slot-scope="scope">
						{{scope.row.finish/scope.row.classes_number}}
					</template>
				</el-table-column>
				<el-table-column prop="student_name" label="学生姓名" style="width: 10%;">
				</el-table-column>
				<el-table-column label="上课时间" style="width: 10%;">
					<template slot-scope="scope">
						{{scope.row.start-scope.row.end}}
					</template>
				</el-table-column>
				<el-table-column prop="course_status" label="状态" style="width: 15%;">
				</el-table-column>
				<el-table-column fixed="right" label="操作" style="width: 15%;">
					<template slot-scope="scope">
						<button type="button" class="el-button el-button--default el-button--small" @click="goCourDetail(scope.row.id)">
							<span>查看详情</span>
						</button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @current-change="handleCurrentChange" :current-page="form.page_no" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="totalCount">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import {
	teacherCourseQuery
} from '@/api/teacher'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      tableData: [],
			totalCount: 0,
      startDate: null, //开始时间
      endDate: null, //结束时间
      form: {
        course_name: '', 
				student_name: '', 
				course_time: '', 
				course_status: '',
				page_limit: 10,
				page_no: 1
      }
    };
  },
	computed: {
		...mapState({
			userName: store=>store.auth.userName
		})
	},
	created(){
		this.query();
	},
  methods: {
    handleCurrentChange(val) {
      this.form.page_no = val;
			this.query();
    },
		goCourse(){
			this.$router.push('/teacher/teacherCourse');
		},
		goTchDetail(){
			this.$router.push('/teacher/teacherDetail');
		},
		goCourDetail(id){
			this.$router.push({path: '/teacher/courseDetail', query: {'courseId': id}});
		},
		query(){
			let f = this.$deleteEmptyProps(this.form);
			return teacherCourseQuery(f).then( resp=> {
				console.log(resp);
				this.tableData = resp.data.objects;
				this.totalCount = resp.data.num_results;
			})
		}
  }
};
</script>

<style scoped>
h3 {
  padding: 20px 0;
  margin-left: 10px;
}
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
  margin: 10px;
}
.course-package-top {
  overflow: hidden;
}
.block {
  margin: 0 auto;
  padding: 20px;
  width: 600px;
}
.teacher-name {
  margin: 10px;
}
</style>