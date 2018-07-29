<template>
  <div class="student-evaluate">
    <h3>课节名称：Lesson 2 Exploring Space and Astronomy</h3>
    <p>
      教师：Kira Yuan
    </p>
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
        <el-main class="detail-item-main">{{ item.teacher_evaluation }}</el-main>
      </el-container>
    </el-row>
  </div>
</template>
<script>
  import {
    studentEvaluat
  } from '@/api/course';
  export default {
    data() {
      return {
        value1: 5,
        evaluations: []
      }
    },
    created() {
      this.getEvaluats(this.$route.query.id)
    },
    methods: {
      getEvaluats(id) {
        return studentEvaluat(id).then(resp => {
          this.evaluations = resp.data.objects;
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
