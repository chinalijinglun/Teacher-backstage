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
</div>
</template>
<script>
  import {
    homeworkBareGetById
  } from '@/api/homework'
  export default {
    name: 'homework',
    data() {
      return {
        homeworkInfo: {
          question_name: '',
          question_text: '',
          question_attachment_url: []
        }
      }
    },
    created() {

      this.getHomeworkInfo(this.$route.query.id)
    },
    methods: {
      getHomeworkInfo(id) {
        return homeworkBareGetById(id).then(resp => {
          this.homeworkInfo.question_name = resp.data.question_name;
          this.homeworkInfo.question_text = resp.data.question_text;
          this.homeworkInfo.question_attachment_url = resp.data.question_attachment_url?JSON.parse(resp.data.question_attachment_url):[];
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
