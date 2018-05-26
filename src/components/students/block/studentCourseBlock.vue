<template>
  <div class="student-course-block">
    <el-row class="form-contain">
      <el-form :inline="true" :model="form">
        <el-row class="form-row">
          <el-form-item label="课程名：">
            <el-input v-model="form.courseName" placeholder="课程名"></el-input>
          </el-form-item>
          <el-form-item label="学生名：">
            <el-input v-model="form.studentsName" placeholder="学生名"></el-input>
          </el-form-item>
          <el-form-item label="上课时间：">
            <dateRange 
              :start-date.sync="form.startDate" 
              :end-date.sync="form.endDate"
              size="mini"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </dateRange>
          </el-form-item>
          <el-form-item label="课程状态：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button @click="query">查询</el-button>
        </el-row>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          courseName: '',
          studentsName: '',
          courseStatus: '',
          startDate: '',
          endDate: ''
        }
      }
    },
    methods: {
      query() {
        console.log(this.form);
      }
    }
  }
</script>
