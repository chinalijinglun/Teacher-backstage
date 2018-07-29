<template>
  <div class="student-schedule-result">
    <el-row class="content-row">
      <h2>课节名称：{{ 'Lesson 2 Exploring Space and Astronomy' }}</h2>
      <div>
        <span>总结周期：{{ $getCourseTime(start, end) }}</span>
        <span>学生：{{ studentName }}</span>
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Summary of what have been taught in last stage (List key points, vocabulary, skills, etc.):</h3>
      <div class="edit-container" v-html="evaluate.summary">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Grade (Grade from A-F based on the test result):</h3>
      <p>Overall:{{ evaluate.grade }}</p>
    </el-row>
    <el-row class="content-row">
      <h3>Review on the test and result:</h3>
      <div class="edit-container" v-html="evaluate.review">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Comments on Behavior/ Performance in class:</h3>
      <div class="edit-container" v-html="evaluate.comments_behavior">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Comments on Homework in last stage:</h3>
      <div class="edit-container" v-html="evaluate.comments_homework">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Areas to be improved and suggested strategies for improvement:</h3>
      <div class="edit-container" v-html="evaluate.suggest">
      </div>
    </el-row>
    <el-row class="content-row">
      <h3>Future Plan (especially focus on next stage)：</h3>
      <div class="edit-container" v-html="evaluate.future_plan">
      </div>
    </el-row>
    <el-row class="btn-container">
      <el-button type="primary" @click="goback">返回</el-button>
    </el-row>
  </div>
</template>
<script>
  import CourseSummary from '@/model/CourseSummary';
  import {
    studyResultBareGetById
  } from '@/api/study_result';
  import {
    studentBareGetById
  } from '@/api/student';
  import {
    courseExamBareGetById
  } from '@/api/course_exam'

  export default {
    name: 'studentScheduleResult',
    data() {
      return {
        studentName: '',
        start: '',
        end: '',
        evaluate: new CourseSummary({})
      }
    },
    created() {
      this.study_result_id = this.$route.query.id;
      this.getResult(this.study_result_id)
    },
    methods: {
      goback() {
        this.$router.back();
      },
      studentGet(id) {
        return studentBareGetById(id).then(resp => {
          this.studentName = resp.data.username;
        })
      },
      examGet(id) {
        return courseExamBareGetById(id).then(resp => {
          this.start = resp.data.start
          this.end = resp.data.end
        })
      },
      getResult(id) {
        return studyResultBareGetById(id).then(resp => {
          this.studentGet(resp.data.student_id)
          this.examGet(resp.data.course_exam_id)
          if(resp.data.evaluation) {
            this.evaluate = new CourseSummary(JSON.parse(resp.data.evaluation))
          }
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
