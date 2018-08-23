<template>
  <div class="student-evaluate">
    <el-row>
      <flat-feild name="课程包名称：" :value="course.course_name"></flat-feild>
      <el-row>
        <el-col :span="6">
          <flat-feild name="教师名称：" :value="course.teacher_name"></flat-feild>
        </el-col>
      </el-row>
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
        <el-main class="detail-item-main" v-html="item.teacher_evaluation.summary"></el-main>
      </el-container>
    </el-row>
  </div>
</template>
<script>
  import { studentEvaluat } from '@/api/course';
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        value1: 5,
        evaluations: []
      }
    },
    created() {
      const courseId = this.$route.query.course_id;
      this.$store.dispatch('COURSE_GET_BY_ID', courseId)
      this.getEvaluats(this.$route.query.id)
    },
    computed: {
      ...mapState({
        course: state=>state.course.course
      })
    },
    methods: {
      getEvaluats(id) {
        return studentEvaluat(id).then(resp => {
          this.evaluations = resp.data.objects.map(item => ({
            ...item,
            teacher_evaluation: JSON.parse(item.teacher_evaluation)
          }))
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
