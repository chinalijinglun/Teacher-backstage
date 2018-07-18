<template>
  <el-row class="student-score-block">
    <p class="title-info">成绩单：</p>
    <div class="score-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="course_name"
          label="课程">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="上传时间">
        </el-table-column>
        <el-table-column
          prop="teacher_name"
          label="教师">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text">预览</el-button>
            <a :href="$baseApiUrl + scope.row.report_card_url" :download="scope.row.course_name">
              下载
            </a>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-row>
</template>
<script>
  import {
    studentReportCard
  } from '@/api/student'
  export default {
    name: 'studentScoreBlock',
    data() {
      return {
        tableData: []
      };
    },
    created() {
      this.query(this.$route.query.id);
    },
    methods: {
      query(id) {
        studentReportCard({
          page_no: 1,
          page_limit: 1000,
          student_id: id
        }).then(resp => {
          this.tableData = resp.data.objects;
        })
      }
    }
  }
</script>
<style scoped>
.title-info {
  overflow: hidden;
  border-bottom: 1px #eee solid;
  line-height: 30px;
  margin-bottom: 15px;
}
</style>

