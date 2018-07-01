<template>
<!-- 试讲课 -->
	<div class="lecture">
		<div class="operation">
		</div>
		<div class="all-course">
			<h3>所有试讲课程</h3>
			<div class="course-package-top">
				<el-form ref="form" label-width="96px">
				<div class="inps">
					<el-row>
						<el-form-item label="教师姓名：">
							<el-input size="mini" v-model="form.teacher_name"></el-input>
						</el-form-item>
						<el-form-item class="select-time" label="上课时间：">
              <el-date-picker
                v-model="form.class_at"
                type="datetime"
                size="mini"
                placeholder="选择日期时间">
              </el-date-picker>
						</el-form-item>
						<el-form-item label="状态：">
							<el-select v-model="form.course_schedule_state" placeholder="请选择" size="mini">
								<el-option label="所有状态" value=""></el-option>
								<el-option label="未上" value="1"></el-option>
								<el-option label="已经上课" value="2"></el-option>
                <el-option label="取消" value="3"></el-option>
                <el-option label="问题课" value="4"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="课件：">
							<el-select v-model="form.courseware_state" placeholder="请选择" size="mini">
								<el-option label="所有状态" value=""></el-option>
								<el-option label="没有" value="0"></el-option>
								<el-option label="有" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-row>
				</div>
				<el-button type="primary" size="mini">查询</el-button>
				<router-link to="/course/dateClass"><el-button type="primary" size="mini">预约教师试讲</el-button></router-link>
        <router-link to="/course/lectureInformation"><el-button type="primary" size="mini">报名听试讲课</el-button></router-link>
				</el-form>
			</div>
		</div>
		<div class="table-list">
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
					<el-table-column fixed prop="id" label="编号" style="width: 15%;">
					</el-table-column>
					<el-table-column prop="teacher_name" label="教师姓名" style="width: 15%;">
					</el-table-column>
          <el-table-column prop="course_name" label="课程名称" style="width: 15%;">
          </el-table-column>
          <el-table-column prop="student_name" label="学生" style="width: 10%;">
          </el-table-column>
					<el-table-column prop="grade" label="年级" style="width: 10%;">
					</el-table-column>
					<el-table-column prop="start" label="上课时间" style="width: 10%;">
					</el-table-column>
					<el-table-column prop="courseware_num" label="课件" style="width: 10%;">
					</el-table-column>
					<el-table-column prop="course_schedule_state" label="状态" style="width: 15%;">
					</el-table-column>
					<el-table-column fixed="right" label="操作" style="width: 15%;">
					<template slot-scope="scope">
							<button type="button" class="el-button el-button--default el-button--small">
									<span>报名</span>
							</button>
					</template>
					</el-table-column>
			</el-table>
			<el-row class="block">
					<el-pagination
					@current-change="handleCurrentChange"
					:current-page="form.page_no"
					:page-size="10"
					layout="total, prev, pager, next, jumper"
					:total="total">
					</el-pagination>
			</el-row>
		</div>
	</div>
</template>

<script>
  import {
    mangerThacherTryout
  } from '@/api/course_appointment'
  export default {
    data() {
      return {
        tableData: [],
        total: 0,
        form: {
          page_no: 1,
          course_schedule_state: '',
          courseware_state: '',
          class_at: '',
          teacher_name: ''
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
        const f = this.$deleteEmptyProps(this.form);
        mangerThacherTryout({
          ...f,
          page_limit: 10,
        }).then(resp => {
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
.operation {
  margin-left: 20px;
  margin-left: 20px;
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
.block {
  text-align: right;
}
</style>
