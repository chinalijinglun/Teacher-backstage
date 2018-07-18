<template>
<div>
  <el-row>
    <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
    <el-row>
      <el-col :span="6">
        <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
      </el-col>
      <el-col :span="6">
        <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
      </el-col>
      <el-col :span="6">
        <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
      </el-col>
    </el-row>
  </el-row>
  <el-row>
    <el-radio-group v-model="blkname" @change="handleRadioChange">
      <el-radio-button label="list">课程列表</el-radio-button>
      <el-radio-button label="summary">课程总结</el-radio-button>
      <el-radio-button label="grade">成绩单</el-radio-button>
    </el-radio-group>
  </el-row>
  <el-row class="detail-body">
    <course-detail-block></course-detail-block>
  </el-row>
</div>
</template>
<script>
import courseDetailBlock from '@/components/course/block/courseDetailBlock'

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
  },
  components: {
    courseDetailBlock
  }
}
</script>
<style>
.detail-body {
  height: 100px;
}
</style>

