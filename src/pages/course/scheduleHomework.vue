<template>
  <div>
    <el-row>
      <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
      <el-row>
        <el-col :span="6">
          <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
        </el-col>
        <el-col :span="6">
          <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <p>教师预留的作业：</p>
      <el-table
        :data="tableData"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="question_name"
          label="作业名称">
        </el-table-column>
        <el-table-column
          prop="question_text"
          label="描述">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="上传时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="toDetail(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import {
  viewHomework
} from '@/api/course_schedule'
export default {
  name: 'scheduleHomework',
  data() {
    return {
      course_schedule_id: '',
      tableData: []
    };
  },
  created() {
    this.course_schedule_id = this.$route.query.id;
    this.getHomework()
  },
  methods: {
    getHomework() {
      viewHomework({
        page_limit: 10,
        page_no: 1,
        course_schedule_id: this.course_schedule_id+''
      }).then(res => {
        this.tableData = res.data.objects;
      })
    }
  }
}
</script>
<style>

</style>
