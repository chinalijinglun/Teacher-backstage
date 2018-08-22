<template>
  <div class="student-detail">
    <el-row>
      <el-radio-group v-model="blkname" @change="handleRadioChange">
        <el-radio-button label="info">学生资料</el-radio-button>
        <el-radio-button label="requirements">学习需求和目标</el-radio-button>
        <el-radio-button label="chat">沟通记录</el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row class="detail-body">
      <student-info-block v-if="$route.query.blkname==='info' && !$route.query.updated" :student-id="studentId"></student-info-block>
      <student-edit-block v-if="$route.query.blkname==='info' && $route.query.updated" :student-id="studentId"></student-edit-block>
      <student-requirements v-if="$route.query.blkname==='requirements'"></student-requirements>
      <student-chat-log v-if="$route.query.blkname==='chat'" :student-id="studentId"></student-chat-log>
    </el-row>
  </div>
</template>
<script>
  import studentInfoBlock from '@/components/students/block/studentInfoBlock';
  import studentEditBlock from '@/components/students/block/studentEditBlock';
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
        studentId: '',
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
      this.studentId = id
    },
    methods: {
      handleRadioChange(e) {
        var { path } = this.$route;
        this.courseBlk = '';
        const query = {
          ...this.$route.query,
          blkname: e
        };
        this.$router.replace({ path, query });
      }
    },
    components: {
      studentInfoBlock,
      studentChatLog,
      studentRequirements,
      studentEditBlock
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
    overflow: hidden;
  }
</style>

