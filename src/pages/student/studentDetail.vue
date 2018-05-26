<template>
  <div class="student-detail">
    <el-row>
      <el-radio-group v-model="radio">
        <el-radio-button label="1">学生资料</el-radio-button>
        <el-radio-button label="2">学生课程</el-radio-button>
        <el-radio-button label="3">学生成绩</el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row class="detail-body">
      <student-info-block v-if="false"></student-info-block>
      <student-course-block v-if="false"></student-course-block>
      <course-detail-block></course-detail-block>
    </el-row>
  </div>
</template>
<script>
  import studentInfoBlock from '@/components/students/block/studentInfoBlock';
  import studentCourseBlock from '@/components/students/block/studentCourseBlock';
  import courseDetailBlock from '@/components/students/block/courseDetailBlock';

  export default {
    name: 'studentDetail',
    data() {
      return {
        radio: '1'
      }
    },
    components: {
      studentInfoBlock,
      studentCourseBlock,
      courseDetailBlock
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

