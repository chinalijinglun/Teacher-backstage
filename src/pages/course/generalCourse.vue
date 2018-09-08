<template>
  <!-- 普通课程 -->
  <div class="general-course">
    <div class="all-course">
      <h3>所有课程</h3>
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
                <el-select v-model="form.state" placeholder="请选择" size="mini">
                  <el-option label="所有状态" value=""></el-option>
                  <el-option label="待排课" value="1"></el-option>
                  <el-option label="上课中" value="2"></el-option>
                  <el-option label="已完成" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-row>
          </div>
          <el-button type="primary" @click="query" size="mini">查询</el-button>
        </el-form>
      </div>
    </div>
    <div class="table-list">
      <el-table :data="tableData" style="width: 100%;margin-top:20px;">
        <el-table-column fixed prop="id" label="编号" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="course_name" label="课程包名称" style="width: 15%;">
        </el-table-column>
        <el-table-column prop="teacher_name" label="教师" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="student_name" label="学生" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="start" label="上课时间" width="200">
          <template slot-scope="scope">
            {{scope.row | courseTime}}
          </template>
        </el-table-column>
        <el-table-column prop="courseware_num" label="课程进度" style="width: 10%;">
          <template slot-scope="scope">
            {{`${scope.row.finish}/${scope.row.classes_number}`}}
          </template>
        </el-table-column>
        <el-table-column prop="course_schedule_state" label="课程包状态" style="width: 10%;">
          <template slot-scope="scope">
            {{scope.row | stateZh}}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250px">
          <template slot-scope="scope">
            <el-button size="mini" v-if="!scope.row.start" @click="toSetSchedule(scope.row.id)">排课</el-button>
            <template  v-else>
              <el-button size="mini" @click="toCourseDetail(scope.row.id)">查看详情</el-button>
              <el-button size="mini" @click="addStudent(scope.row.id)">增加学生</el-button>
            </template>
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
    <course-student :visible.sync="courseStudentVisible" :course-id="curId" @chose="choseStudent" @close="curId = '';"></course-student>
  </div>
</template>
<script>
  import {
    courseCommon,
    addStudent
  } from '@/api/course'
  import {
    getCourseTime
  } from '@/utils'
  import CourseStudent from './dialog/CourseStudent'
  export default {
    data() {
      return {
        courseStudentVisible: false,
        curId: '',
        tableData: [],
        total: 0,
        form: {
          page_no: 1,
          class_at: '',
          state: '',
          teacher_name: ''
        }
      }
    },
    created() {
      this.query();
    },
    filters: {
      stateZh(row) {
        if (!row.start && !row.end) {
          return '待排课'
        } else if(row.finish === row.classes_number) {
          return '已完成'
        } else {
          return '上课中'
        }
      },
      courseTime(row) {
        return getCourseTime(row.start, row.end)
      },
      coursewareStatus(row) {
        return row.courseware_num?'已上传':'未上传'
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.form.page_no = val;
        this.query();
      },
      query() {
        const f = this.$deleteEmptyProps(this.form);
        return courseCommon({
          ...f,
          page_limit: 10
        }).then(resp => {
          this.total = resp.data.num_results;
          this.tableData = resp.data.objects;
        })
      },
      toSetSchedule(id) {
        this.$router.push({
          path: '/course/subscribeCourses',
          query: {id}
        })
      },
      toCourseDetail(id) {
        this.$router.push({
          path: '/course/courseDetail',
          query: {id, blkname: 'list'}
        })
      },
      addStudent(id) {
        this.curId = id;
        this.$nextTick(_=>{
          this.courseStudentVisible = true;
        })
      },
      choseStudent({student_id, course_id}) {
        return addStudent({student_id, course_id}).then(resp => {
          console.log(resp);
          this.$message.success('添加成功！');
          this.query();
        })
      }
    },
    components: {
      CourseStudent
    }
  }
</script>

<style scoped>
  .inps .el-form-item {
    width: 20%;
    float: left;
  }

  .el-input {
    width: 95%;
  }

  .operation button {
    margin-right: 40px;
  }

  h3 {
    padding: 20px 0;
    margin-left: 10px;
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
    text-align: right;
  }
</style>
