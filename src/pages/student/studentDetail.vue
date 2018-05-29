<template>
  <div class="student-detail">
    <el-row>
      <el-radio-group v-model="blkname" @change="handleRadioChange">
        <el-radio-button label="info">学生资料</el-radio-button>
        <el-radio-button label="course">学生课程</el-radio-button>
        <el-radio-button label="score">学生成绩</el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row class="detail-body">
      <student-info-block v-if="blkname==='info'"></student-info-block>
      <student-course-block v-if="blkname==='course' && !$route.query.courseBlk"></student-course-block>
      <course-detail-block v-if="blkname==='course' && $route.query.courseBlk==='detail'"></course-detail-block>
      <student-score-block v-if="blkname==='score'"></student-score-block>
    </el-row>
  </div>
</template>
<script>
  import studentInfoBlock from '@/components/students/block/studentInfoBlock';
  import studentCourseBlock from '@/components/students/block/studentCourseBlock';
  import courseDetailBlock from '@/components/students/block/courseDetailBlock';
  import studentScoreBlock from '@/components/students/block/studentScoreBlock';

  export default {
    name: 'studentDetail',
    data() {
      return {
        blkname: 'info'
      }
    },
    created() {
      this.blkname = this.$route.query.blkname;
      this.courseBlk = this.$route.query.courseBlk;
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
      }
    },
    components: {
      studentInfoBlock,
      studentCourseBlock,
      courseDetailBlock,
      studentScoreBlock
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

