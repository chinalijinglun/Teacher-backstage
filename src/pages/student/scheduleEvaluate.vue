<template>
<div class="schedule-evaluate">
  <el-row>
    <el-button size="mini" type="primary" @click="goBack">返回</el-button>
  </el-row>
  <div class="evaluate-body">
    <div class="evaluate-left evaluate-item">
      <p class="evaluate-person">
        {{student_name}}
      </p>
      <div class="evaluate-item-body">
        <span>学生打分：</span>
        <p>{{result.student_score}}</p>
      </div>
      <div class="evaluate-item-body">
        <span>学生反馈：</span>
        <p>{{result.student_result}}</p>
      </div>
    </div>
    <div class="evaluate-vs">
      VS
    </div>
    <div class="evaluate-right evaluate-item">
      <p class="evaluate-person">
        {{teacher_name}}
      </p>
      <div class="evaluate-item-body">
        <span>老师打分：</span>
        <p>{{result.teacher_score}}</p>
      </div>
      <div class="evaluate-item-body">
        <span>老师反馈：</span>
        <p>{{result.teacher_result}}</p>
      </div>
      <div class="evaluate-item-body">
        <span>学习建议：</span>
        <p>{{result.teacher_evaluation}}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  import {
    studyScheduleGetById
  } from '@/api/study_schedule'
  export default {
    name: 'scheduleEvaluate',
    data() {
      return {
        teacher_name: '',
        student_name: '',
        result: {
          teacher_evaluation: '',
          teacher_result: '',
          teacher_score: '',
          student_score: '',
          student_result: '',
          student_evaluation: ''
        }
      }
    },
    created() {
      this.teacher_name = this.$route.query.teacher_name;
      this.student_name = this.$route.query.student_name;
      this.getResult(this.$route.query.id);
    },
    methods: {
      goBack() {
        this.$router.back();
      },
      getResult(id) {
        return studyScheduleGetById(id).then(resp => {
          for(let k in this.result) {
            if(resp.data[k] !== undefined) {
              this.result[k] = resp.data[k]
            }
          }
        })
      }
    }
  }
</script>
<style>
  .evaluate-body {
    margin-top: 20px;
  }
  .evaluate-body>div {
    padding: 20px;
    float: left;
  }
  .evaluate-item {
    width: 300px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  .evaluate-item .evaluate-person {
    width: 100%;
    text-align: center;
  }
  .evaluate-item .evaluate-item-body {
    border-top: 1px solid #eee;
    padding: 10px 0;
  }
  .evaluate-item .evaluate-item-body>span {
    display: inline-block;
    width: 80px;
  }
  .evaluate-item .evaluate-item-body>p {
    display: inline-block;
  }
</style>
