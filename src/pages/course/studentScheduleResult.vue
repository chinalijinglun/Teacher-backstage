<template>
  <div class="student-schedule-result">
    <el-row class="content-row">
      <h2>课节名称：{{ course_schedule.name }}</h2>
      <div>
        <span>学生：{{ student.first_name }}</span>
        <span>上课时间：{{ course_schedule.start | courseScheduleTime(course_schedule.end) }}</span>
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Lesson Objective (key points, vocabulary, skills, etc.):</h3>
      <div class="edit-container" v-html="evaluate.lesson_objective">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Completion status:</h3>
      <p>{{ evaluate.completion_status.status }}</p>
      <div class="edit-container" v-html="evaluate.completion_status.text">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Performance in class:</h3>
      <p>Overall:{{ evaluate.performace.overall }}</p>
      <p>On Time:{{ evaluate.performace.onTime }}</p>
      <p>Missing Time:{{ evaluate.performace.missTime }}</p>
      <p>Learning Attitude:{{ evaluate.performace.attitude }}</p>
      <p>Positive interaction:{{ evaluate.performace.interaction }}</p>
    </el-row>
    <el-row class="content-row">
      <h3>Summary of the class:</h3>
      <div class="edit-container" v-html="evaluate.summary">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Skills the student exhibited well:</h3>
      <div class="edit-container" v-html="evaluate.skills">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Areas to be improved:</h3>
      <div class="edit-container" v-html="evaluate.improved">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Suggested strategies for improvement:</h3>
      <div class="edit-container" v-html="evaluate.suggest">
      </div>
    </el-row>
    <el-row class="btn-container">
      <el-button type="primary" @click="goback">返回</el-button>
    </el-row>
  </div>
</template>
<script>
  import TeacherEvaluate from '@/model/TeacherEvaluate';
  import {
    studyScheduleBareGetById
  } from '@/api/study_schedule';
  import {
    courseScheduleBareGetById
  } from '@/api/course_schedule';
  import {
    studentBareGetById
  } from '@/api/student';

  export default {
    name: 'studentScheduleResult',
    data() {
      return {
        student: {},
        course_schedule: {},
        evaluate: new TeacherEvaluate({})
      }
    },
    created() {
      this.study_schedule_id = this.$route.query.id;
      this.getResult(this.study_schedule_id)
    },
    methods: {
      goback() {
        this.$router.back();
      },
      getResult(id) {
        return studyScheduleBareGetById(id).then(resp => {
          if(resp.data.teacher_evaluation) {
            this.evaluate = new TeacherEvaluate(JSON.parse(resp.data.teacher_evaluation))
          }
          this.getStudent(resp.data.student_id)
          this.getCourseSchedult(resp.data.course_schedule_id)
        })
      },
      getStudent(id) {
        return studentBareGetById(id).then(resp => {
          this.student = resp.data;
        })
      },
      getCourseSchedult(id) {
        return courseScheduleBareGetById(id).then(resp => {
          this.course_schedule = resp.data
        })
      }
    }
  }
</script>
<style>
.content-row {
  margin-bottom: 20px;
}
.content-row p {
  line-height: 30px;
}
.btn-container {
  text-align: center;
}
</style>

