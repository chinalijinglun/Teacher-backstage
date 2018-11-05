<template>
<div class="homework">
  <el-container class="detail-item">
    <el-aside class="detail-item-aside" width="100px">
      作业标题：
    </el-aside>
    <el-main class="detail-item-main">
      {{ homeworkInfo.question_name }}
    </el-main>
  </el-container>
  <el-container class="detail-item">
    <el-aside class="detail-item-aside" width="100px">
      作业描述：
    </el-aside>
    <el-main class="detail-item-main">
      <div v-html="homeworkInfo.question_text"></div>
    </el-main>
  </el-container>
  <el-container class="detail-item">
    <el-aside class="detail-item-aside" width="100px">
      作业附件：
    </el-aside>
    <el-main class="detail-item-main">
      <p v-for="(item, index) in homeworkInfo.question_attachment_url" :key="index">
        {{item.name}}<a :href="$baseApiUrl+item.url" :download="item.name">下载</a>
      </p>
    </el-main>
  </el-container>
  <el-container class="detail-item" v-if="homeworkInfo.evaluation.length">
    <el-aside class="detail-item-aside" width="100px">
      作业点评：
    </el-aside>
    <el-main class="detail-item-main">
      <div v-for="(item, index) in homeworkInfo.evaluation" :key="index">
        <p>{{item.time | hasTime}}</p>
        <div v-html="item.evaluation"></div>
      </div>
    </el-main>
  </el-container>
  <div>
    <el-table :data="tableData" style="width: 100%;margin-top:20px;">
      <el-table-column fixed prop="id" label="编号" style="width: 10%;">
      </el-table-column>
      <el-table-column prop="course_name" label="课程包名称" style="width: 15%;">
      </el-table-column>
      <el-table-column prop="teacher_name" label="教师" style="width: 10%;">
      </el-table-column>
      <el-table-column prop="student_name" label="学生" style="width: 10%;">
      </el-table-column>
      <el-table-column prop="start" label="上课时间" width="200">
        <template slot-scope="scope">
          {{scope.row | courseTime}}
        </template>
      </el-table-column>
      <el-table-column prop="courseware_num" label="课程进度" style="width: 10%;">
        <template slot-scope="scope">
          {{`${scope.row.finish}/${scope.row.classes_number}`}}
        </template>
      </el-table-column>
      <el-table-column prop="course_schedule_state" label="课程包状态" style="width: 10%;">
        <template slot-scope="scope">
          {{scope.row | stateZh}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="250px">
        <template slot-scope="scope">
          <el-button size="mini" v-if="!scope.row.start" @click="toSetSchedule(scope.row.id)">排课</el-button>
          <template  v-else>
            <el-button size="mini" @click="toCourseDetail(scope.row.id)">查看详情</el-button>
            <el-button size="mini" @click="addStudent(scope.row.id)">增加学生</el-button>
          </template>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="form.page_no"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-row>
  </div>
</div>
</template>
<script>
  import {
    homeworkBareGet,
    homeworkBareGetById
  } from '@/api/homework'
  export default {
    name: 'homework',
    data() {
      return {
        homeworkInfo: {
          question_name: '',
          question_text: '',
          question_attachment_url: [],
          evaluation: []
        }
      }
    },
    created() {
      this.getHomeworkInfo(this.$route.query.id)
    },
    methods: {
      getHomeworkInfo(id) {
        // const filter = this.$json2filter({homework_id: id})
        // homeworkBareGet(filter)
        return homeworkBareGetById(id).then(resp => {
          const homework = resp.data
          this.homeworkInfo.question_name = homework.question_name;
          this.homeworkInfo.question_text = homework.question_text;
          this.homeworkInfo.question_attachment_url = homework.question_attachment_url?JSON.parse(homework.question_attachment_url):[];
          if(homework.evaluation) {
            this.homeworkInfo.evaluation = JSON.parse(homework.evaluation)
          }
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
