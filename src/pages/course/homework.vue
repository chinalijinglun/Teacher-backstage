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
</div>
</template>
<script>
  import {
    homeworkBareGet
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
        const filter = this.$json2filter({homework_id: id})
        return homeworkBareGet(filter).then(resp => {
          const homework = resp.data.objects[0]
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
