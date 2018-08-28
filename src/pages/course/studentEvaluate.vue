<template>
  <div class="student-evaluate">
    <el-row class="content-row">
      <h2>课节名称：{{ course_schedule.name }}</h2>
      <div>
        <span>上课时间：{{ course_schedule.start | courseScheduleTime(course_schedule.end) }}</span>
      </div>
    </el-row>
    <el-row v-for="(item, index) in evaluations" :key="index">
      <el-container class="detail-item">
        <el-aside class="detail-item-aside" width="100px">
          学生姓名：
        </el-aside>
        <el-main class="detail-item-main">
          {{ item.student_name }}
        </el-main>
      </el-container>
      <el-container class="detail-item">
        <el-aside class="detail-item-aside" width="100px">
          教师评分：
        </el-aside>
        <el-main class="detail-item-main">
          <el-rate disabled v-model="item.teacher_score"></el-rate>
        </el-main>
      </el-container>
      <el-container class="detail-item">
        <el-aside class="detail-item-aside" width="100px">
          课程评分：
        </el-aside>
        <el-main class="detail-item-main">
          <el-rate disabled v-model="item.student_score"></el-rate>
        </el-main>
      </el-container>
      <el-container class="detail-item">
        <el-aside class="detail-item-aside" width="100px">
          意见内容：
        </el-aside>
        <el-main class="detail-item-main">{{item.teacher_result}}</el-main>
      </el-container>
    </el-row>
  </div>
</template>
<script>
  import { studentEvaluat } from '@/api/course';
  import {
    courseScheduleBareGetById
  } from '@/api/course_schedule';
  import {
    teacherGetBareByTeacherid
  } from '@/api/teacher'
  export default {
    data() {
      return {
        teacher: {},
        course_schedule: {},
        evaluations: []
      }
    },
    created() {
      this.courseSchedule(this.$route.query.id)
      this.getEvaluats(this.$route.query.id)
    },
    methods: {
      getEvaluats(id) {
        return studentEvaluat(id).then(resp => {
          this.evaluations = resp.data.objects.map(item => ({
            ...item,
            teacher_evaluation: JSON.parse(item.teacher_evaluation)
          }))
        })
      },
      courseSchedule(id) {
        return courseScheduleBareGetById(id).then(resp => {
          this.course_schedule = resp.data
        })
      }
    }
  }
</script>
<style scoped>
  .detail-item-aside {
    padding: 10px;
  }
</style>
