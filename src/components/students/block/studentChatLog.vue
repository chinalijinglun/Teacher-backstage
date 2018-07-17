<template>
  <el-row class="course-detail-block">
    <p class="title">课程顾问/班主任与学生沟通记录</p>
    <div class="title-info">
      <el-input class="big-input" type="textarea" :rows="3" v-model="content"></el-input>
    </div>
    <div class="center">
      <el-button type="primary" size="small" @click="goSave">
        <span>保存</span>
      </el-button>
    </div>
    <p class="title">历史记录</p>
    <ul class="course-table">
      <li v-for="item in logs" :key="item.id">
        <p>{{item.created_at}} <span>添加人：{{item.updated_by}}</span></p>
        <p>{{item.action_event_desc}}</p>
      </li>
    </ul>
    <div class="block">
      <el-pagination 
        @current-change="handleCurrentChange" 
        :current-page="page" 
        :page-size="10" 
        layout="total, prev, pager, next, jumper" 
        :total="totalCount">
      </el-pagination>
    </div>
  </el-row>
</template>
<script>
  import {
    //@param {before_state, after_state, primary_data_id, action_event_desc, action_event_type} form
    actionEventPost,
    actionEventBareGet
  } from '@/api/action_event'
  import {
    ACTION_EVENT_TYPE
  } from '@/utils/enums'
  export default {
    name: 'student-chat-log',
    data() {
      return {
        logs: [],
        actionEventConfig: {
          action_event_type: ACTION_EVENT_TYPE.UNKNOWN,
          primary_table_name: 'student',
          before_state: 0,
          after_state: 0,
        },
        page: 1,
        content: '',
			  totalCount: 0
      };
    },
    created() {
      this.query()
    },
    props: ['studentId'],
    methods: {
      query() {
        const filter = this.$json2filter({
          ...this.actionEventConfig,
          primary_data_id: this.studentId
        });
        return actionEventBareGet(filter, {page:this.page}).then(resp => {
          this.logs = resp.data.objects;
          this.totalCount = resp.data.num_results;
        })
      },
      handleCurrentChange(val) {
        this.page = val;
        this.query()
      },
      goSave(){
        return actionEventPost({
          ...this.actionEventConfig,
          primary_data_id: this.studentId,
          action_event_desc: this.content
        }).then(resp => {
          this.content = '';
          this.query()
        })
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

