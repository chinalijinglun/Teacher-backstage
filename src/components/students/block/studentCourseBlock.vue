<template>
  <div class="student-course-block">
    <el-row class="form-contain">
      <el-form :inline="true" :model="form">
        <el-row class="form-row">
          <el-form-item label="课程名：">
            <el-input v-model="form.course_name" size="mini" placeholder="课程名"></el-input>
          </el-form-item>
          <el-form-item label="学生名：">
            <el-input v-model="form.student_name" size="mini" placeholder="学生名"></el-input>
          </el-form-item>
          <el-form-item label="上课时间：">
            <el-date-picker
              v-model="form.course_time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="课程状态：">
            <el-select v-model="form.course_status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="已完成" value="1"></el-option>
              <el-option label="进行中" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button @click="query" size="mini" type="primary">查询</el-button>
          <el-button @click="toApplyFree" size="mini" type="primary">申请试听</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-container">
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="course_name"
            label="课程名称">
          </el-table-column>
          <el-table-column
            label="课程进度">
            <template slot-scope="scope">
              {{ `${scope.row.finish}/${scope.row.classes_number}` }}
            </template>
          </el-table-column>
          <el-table-column
            prop="teacher_name"
            label="教师名称">
          </el-table-column>
          <el-table-column
            label="上课时间">
            <template slot-scope="scope">
              {{ 
              `${$dateFmt(new Date(scope.row.start), 'yyyy-MM-dd')} — ${$dateFmt(new Date(scope.row.end), 'MM-dd')}` 
              }}
            </template>
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              {{ scope.row.finish/scope.row.classes_number>1?'已完成':'未完成' }}
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handlerClick">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="pagination-container">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.page"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </el-row>
    </el-row>
  </div>
</template>
<script>
  import {
    studentCoursePost
  } from '@/api/student'
  import paginationMix from '@/components/commons/mixins/paginationMix';
  export default {
    data() {
      return {
        form: {
          student_id: '',
          student_name: '',
          course_name: '',
          course_status: '',
          course_time: '',
          page: 1
        },
        totalCount: 0,
        tableData: []
      };
    },
    mixins: [paginationMix],
    created() {
      this.form.student_id = this.$route.query.id;
      this.query();
    },
    methods: {
      query() {
        const {
          student_id,
          student_name,
          course_name,
          course_status,
          course_time,
          page: page_no
        } = this.form
        const f = this.$deleteEmptyProps({
          student_id,
          student_name,
          course_name,
          course_status,
          course_time,
          page_no
        });

        studentCoursePost({ 
          ...f,
          page_limit: 10
        }).then(res => {
          this.tableData = res.data.objects;
          this.totalCount = res.data.num_results;
        })
      },
      handlerClick() {
        var { path } = this.$route;
        const query = {
          ...this.$route.query,
          courseBlk: 'detail'
        };
        this.$router.push({ path, query });
      },
      toApplyFree() {
        this.$router.push('/course/auditions');
      }
    }
  }
</script>
<style scoped>
.list-container {
  padding: 15px;
}
.list-title {
  font-family: "Microsoft YaHei";
  font-size: 16px;
  line-height: 20px;
}
.pagination-container {
  text-align: right;
  margin-top: 30px;
}
</style>

