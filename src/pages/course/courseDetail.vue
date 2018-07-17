<template>
<div>
  <el-row>
    <el-radio-group v-model="blkname" @change="handleRadioChange">
      <el-radio-button label="list">课程列表</el-radio-button>
      <el-radio-button label="summary">课程总结</el-radio-button>
      <el-radio-button label="grade">成绩单</el-radio-button>
    </el-radio-group>
  </el-row>
  <el-row class="detail-body">
  </el-row>
</div>
</template>
<script>
export default {
  name: 'courseDetail',
  data() {
    return {
      blkname: 'list'
    }
  },
  created() {
    this.blkname = this.$route.query.blkname;
  },
  methods: {
    handleRadioChange(label) {
      this.$router.replace({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          blkname: label
        }
      })
    }
  }
}
</script>
