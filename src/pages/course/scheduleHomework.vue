<template>
  <div>
    <el-row>
      <h2>课节名称：{{ course_schedule.name }}</h2>
      <div>
        <span>教师名称：{{ course.teacher_name }}</span>
        <span style="margin-left: 20px;">上课时间：{{ course_schedule.start | courseScheduleTime(course_schedule.end) }}</span>
      </div>
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
  viewHomework,
  courseScheduleBareGetById
} from '@/api/course_schedule'
import { mapState } from 'vuex'
export default {
  name: 'scheduleHomework',
  data() {
    return {
      course_schedule: {},
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
    this.course_schedule_id = this.$route.query.id;
    const courseId = this.$route.query.course_id;
    this.$store.dispatch('COURSE_GET_BY_ID', courseId)
    this.getHomework()
    this.courseSchedule(this.course_schedule_id)
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
    },
    courseSchedule(id) {
      return courseScheduleBareGetById(id).then(resp => {
        this.course_schedule = resp.data
      })
    },
    toDetail(row) {
      this.$router.push({
        path: '/course/homework',
        query: {
          id: row.id
        }
      })
    }
  }
}
</script>
<style>

</style>
