<template>
  <el-row class="course-detail-block">
    <p class="title">课程顾问/班主任与学生沟通记录</p>
    <div class="title-info">
      <el-input class="big-input" v-model="form.logText"></el-input>
    </div>
    <div class="center">
      <el-button type="primary" size="small" @click="goSave">
        <span>保存</span>
      </el-button>
    </div>
    <p class="title">历史记录</p>
    <ul class="course-table">
      <li>
        <p>2018-02-27 11:25:30 <span>添加人：Kid</span></p>
        <p>联系了学生家长</p>
      </li>
      <li>
        <p>2018-02-27 11:25:30 <span>添加人：Kid</span></p>
        <p>联系了学生家长</p>
      </li>
    </ul>
    <div class="block">
      <el-pagination 
        @current-change="handleCurrentChange" 
        :current-page="form.page_no" 
        :page-size="10" 
        layout="total, prev, pager, next, jumper" 
        :total="totalCount">
      </el-pagination>
    </div>
  </el-row>
</template>
<script>
  export default {
    name: 'student-chat-log',
    data() {
      return {
        form: {
          logText: '',
          page_no: 1,
          page_limit: 10
        },
			  totalCount: 0
      };
    },
    created() {
    },
    methods: {
      handleCurrentChange(val) {
        this.form.page_no = val;
      },
      goSave(){

      }
    }
  }
</script>
<style scoped>
  .title-info {
    overflow: hidden;
    line-height: 30px;
  }
  .course-table{
    overflow: hidden;
    line-height: 30px;
    border: 1px solid #eee;
    min-height: 100px;
  }
  .course-table li{
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
  }
  .course-table li:last-child{
    padding: 10px 20px;
    border-bottom: none;
  }
  .title{
    font-weight: 700;
    line-height: 30px;
    padding: 10px 0;
  }
  .detail-body{
    border: none;
  }
  .block{
    margin: 10px 0;
    text-align: right;
  }
  .center{
    text-align: center;
    margin-top: 15px;
  }
</style>

