<template>
  <div>
    <el-row>
      <flat-feild name="课程包名称：" :value="course.course_name"></flat-feild>
      <el-row>
        <el-col :span="6">
          <flat-feild name="教师名称：" :value="course.teacher_name"></flat-feild>
        </el-col>
        <el-col :span="6">
          <flat-feild name="学生名称：" :value="course.student_name"></flat-feild>
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
          prop="student_name"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="overall"
          label="Performance in class:">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="总结时间">
          <template slot-scope="{row}">
            {{row.created_at | hasTime}}
          </template>
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
    summaryGet
  } from '@/api/study_schedule';
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        course_schedule_id: '',
        tableData: []
      };
    },
    computed: {
      ...mapState({
        course: state=>state.course.course
      })
    },
    created() {
      this.course_schedule_id = this.$route.query.id
      const courseId = this.$route.query.course_id;
      this.$store.dispatch('COURSE_GET_BY_ID', courseId)
      this.query()
    },
    methods: {
      toDetail(row) {
        this.$router.push({
          path: '/course/studentScheduleResult',
          query: {
            id: row.id
          }
        })
      },
      query() {
        const filter = this.$json2filter({course_schedule_id:[this.course_schedule_id]})
        return summaryGet({
          course_schedule_id: this.course_schedule_id,
          page_limit: 1000,
          page_no: 1
        }).then(resp => {
          this.tableData = resp.data.objects.map(item => {
            const summary = {
              overall: '',
              created_at: '--'
            }
            if(item.teacher_evaluation) {
              const evaluationJson = JSON.parse(item.teacher_evaluation);
              summary.created_at = evaluationJson.created_at;
              summary.overall = evaluationJson.performace.overall;
            }
            return {
              id: item.study_schedule_id,
              student_name: item.student_name,
              ...summary
            }
          });
        })
      }
    }
  }
</script>