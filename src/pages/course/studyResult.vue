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
      <p>学生上课情况小结：</p>
      <el-table
        :data="tableData"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="student_id"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="student_score"
          label="Performance in class:">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="总结时间">
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
    studyScheduleBareGet
  } from '@/api/study_schedule';

  export default {
    data() {
      return {
        course_schedule_id: '',
        tableData: []
      };
    },
    created() {
      this.course_schedule_id = this.$route.query.id
      this.query()
    },
    methods: {
      toDetail() {
        console.log('to detail')
      },
      query() {
        const filter = this.$json2filter({course_schedule_id:[this.course_schedule_id]})
        return studyScheduleBareGet(filter, {
          results_per_page: 1000,
          page: 1
        }).then(resp => {
          this.tableData = resp.data.objects;
        })
      }
    }
  }
</script>