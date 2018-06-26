<template>
  <el-row class="student-score-block">
    <p class="title-info">成绩单：</p>
    <div class="score-table">
      <el-table
        :data="detail"
        border
        style="width: 100%">
        <el-table-column
          prop="className"
          label="课程">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="上传时间">
        </el-table-column>
        <el-table-column
          prop="teacherName"
          label="教师">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button type="text">预览</el-button>
            <el-button type="text">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-row>
</template>
<script>
  export default {
    name: 'studentScoreBlock',
    data() {
      return {
        tableData: []
      };
    },
    props: ['detail']
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

