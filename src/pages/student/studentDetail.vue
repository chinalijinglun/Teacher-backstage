<template>
  <div class="student-detail">
    <el-row>
      <el-radio-group v-model="blkname" @change="handleRadioChange">
        <el-radio-button label="info">学生资料</el-radio-button>
        <!-- <el-radio-button label="course">学生课程</el-radio-button>
        <el-radio-button label="score">学生成绩</el-radio-button> -->
        <el-radio-button label="requirements">学习需求和目标</el-radio-button>
        <el-radio-button label="chat">沟通记录</el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row class="detail-body">
      <student-info-block v-if="blkname==='info'" :detail="detail"></student-info-block>
      <student-course-block v-if="blkname==='course' && !$route.query.courseBlk" :detail="study_courses"></student-course-block>
      <course-detail-block v-if="blkname==='course' && $route.query.courseBlk==='detail'"></course-detail-block>
      <student-score-block v-if="blkname==='score'" :detail="detail.id"></student-score-block>
      <student-requirements v-if="blkname==='requirements'"></student-requirements>
      <student-chat-log v-if="blkname==='chat'" :detail="detail.id"></student-chat-log>
    </el-row>
  </div>
</template>
<script>
  import studentInfoBlock from '@/components/students/block/studentInfoBlock';
  import studentCourseBlock from '@/components/students/block/studentCourseBlock';
  import courseDetailBlock from '@/components/students/block/courseDetailBlock';
  import studentScoreBlock from '@/components/students/block/studentScoreBlock';
  import studentChatLog from '@/components/students/block/studentChatLog'; 
  import studentRequirements from '@/components/students/block/studentRequirements'; 
  
  import {
    studentGetById
  } from '@/api/student';

  export default {
    name: 'studentDetail',
    data() {
      return {
        blkname: 'info',
        detail: {
          given_name: '',
          family_name: '',
          mobile: '',
          email: '',
          username: '',
          birth: '',
          id: '',
          requirements: '',
          requirements_zh: ''
        },
        study_courses: [],
        study_results: []
      }
    },
    created() {
      this.blkname = this.$route.query.blkname;
      this.courseBlk = this.$route.query.courseBlk;
      const id = this.$route.query.id;
      this.getStudentById(id)
    },
    methods: {
      handleRadioChange(e) {
        var { path } = this.$route;
        this.courseBlk = '';
        const query = {
          ...this.$route.query,
          blkname: e,
          courseBlk: this.courseBlk
        };
        this.$router.replace({ path, query });
      },
      getStudentById(id) {
        return studentGetById(id).then(resp => {
          for(let key in this.detail) {
            if(resp.data[key] !== undefined) {
              this.detail[key] = resp.data[key]
            }
          }
          this.study_results = resp.data.study_results;
        })
      }
    },
    components: {
      studentInfoBlock,
      studentCourseBlock,
      courseDetailBlock,
      studentScoreBlock,
      studentChatLog,
      studentRequirements
    }
  }
</script>
<style scoped>
  .detail-body {
    margin-top: 15px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 40px;
  }
</style>

