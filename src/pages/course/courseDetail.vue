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
    <course-detail-block v-if="blkname === 'list'"></course-detail-block>
    <course-summary-block v-if="blkname === 'summary'"></course-summary-block>
    <course-grade-block v-if="blkname === 'summary'"></course-grade-block>
  </el-row>
</div>
</template>
<script>
import courseDetailBlock from '@/components/course/block/courseDetailBlock'
import courseSummaryBlock from '@/components/course/block/courseSummary'
import courseGradeBlock from '@/components/course/block/courseGrade'

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
    courseDetailBlock,
    courseSummaryBlock,
    courseGradeBlock
  }
}
</script>
<style>
.detail-body {
  height: 100px;
}
</style>

