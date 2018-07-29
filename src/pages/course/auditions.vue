<template>
  <!-- 试听课 -->
  <div class="auditions">
    <div class="operation">
      <router-link to="/course/studentTrial">
        <el-button size="mini" type="primary">学生试听报名</el-button>
      </router-link>
      <router-link to="/course/dateTeacher">
        <el-button size="mini" type="primary">预约教师上课</el-button>
      </router-link>
    </div>
    <div class="all-course">
      <div class="course-package-top">
        <el-form :inline="true" ref="form" :model="form" label-width="82px">
          <el-row>
            <el-form-item label="教师姓名：">
              <el-input size="mini" v-model="form.teacher_name" placeholder="" type="text" class="placehold" />
            </el-form-item>
            <el-form-item label="上课时间：">
              <el-date-picker size="mini" v-model="form.class_at" placeholder="上课时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="状态：">
              <el-select size="mini" v-model="form.course_schedule_state" name="" id="">
                <el-option value="">所有状态</el-option>
								<el-option v-for="(item,key) in $COURSE_SCHEDULE_STATE_ENUM" :key="key" :label="item" :value="key"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课件：">
              <el-select size="mini" v-model="form.courseware_state" name="" id="">
                <el-option value="">所有状态</el-option>
                <el-option :value="1">有</el-option>
                <el-option :value="0">没有</el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row>
            <el-button @click="query" size="mini" type="primary">查询</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="table-list">
      <el-table :data="tableData" style="width: 100%;margin-top:20px;">
        <el-table-column fixed prop="id" label="编号" style="width: 15%;">
        </el-table-column>
        <el-table-column label="试讲课程名称" style="width: 15%;">
          <template slot-scope="scope">试听课程</template>
        </el-table-column>
        <el-table-column prop="teacher_name" label="教师姓名" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="student_name" label="学生" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="courseTime" label="上课时间" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="coursewareState" label="课件" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="courseStateText" label="状态" style="width: 15%;">
        </el-table-column>
        <el-table-column fixed="right" label="操作" style="width: 15%;">
          <template slot-scope="scope">
            <!--未上课-->
            <el-row class="table-btn-row" v-if="scope.row.course_schedule_state === 'NO_CLASS'">
              <el-button size="mini">进入教室</el-button>
              <el-button size="mini">课件管理</el-button>
            </el-row>
            <el-row class="table-btn-row" v-if="scope.row.course_schedule_state === 'NO_CLASS'">
              <el-button size="mini">修改时间</el-button>
              <el-button size="mini">取消课程</el-button>
            </el-row>
            <!--已上课-->
            <el-row class="table-btn-row" v-if="scope.row.course_schedule_state === 'CLASS_BEGIN'">
              <el-button size="mini">回放</el-button>
              <el-button size="mini">课件管理</el-button>
            </el-row>
            <el-row class="table-btn-row" v-if="scope.row.course_schedule_state === 'CLASS_BEGIN'">
              <el-button size="mini">报告问题</el-button>
              <el-button size="mini">课后作业</el-button>
            </el-row>
            <el-row class="table-btn-row" v-if="scope.row.course_schedule_state === 'CLASS_BEGIN'">
              <el-button size="mini">课后总结</el-button>
              <el-button size="mini">学生评价</el-button>
            </el-row>
            <!--已取消，问题课-->
            <el-row class="table-btn-row" v-if="scope.row.course_schedule_state === 'CANCEL' || scope.row.course_schedule_state === 'TROUBLE_CLASS'">
              <el-button size="mini">报告问题</el-button>
              <el-button size="mini">查看原因</el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.page_no"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    studentTryout
  } from '@/api/course';
  export default {
    data() {
      return {
        tableData: [],
        total: 0,
        form: {
          page_limit: 10,
          page_no: 1,
          teacher_name: '',
          class_at: '',
          course_schedule_state: '',
          courseware_state: ''
        }
      }
    },
    created() {
      this.query();
    },
    methods: {
      handleCurrentChange(val) {
        this.form.page_no = val;
        this.query()
      },
      query() {
        const f = this.$deleteEmptyProps(this.form);
        studentTryout(f).then(resp => {
          this.tableData = resp.data.objects.map(item => ({
            ...item,
            courseTime: this.$getCourseScheduleTime(item.start, item.end),
            coursewareState: +item.courseware_num>0?'已上传':'未上传',
            courseStateText: this.$COURSE_SCHEDULE_STATE_ENUM[item.course_schedule_state]
          }));
          this.total = resp.data.num_results;
        })
      }
    },
  }
</script>

<style scoped>
  .operation {
    margin-bottom: 20px;
  }
  .block {
    padding: 20px;
    text-align: right;
  }
  .table-btn-row{
    padding: 5px;
  }
  .table-btn-row .el-button.el-button--mini{
    width: 80px;
  }
</style>
