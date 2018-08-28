<template>
  <el-dialog 
    class="no-header-dialog"
    :visible.sync="dialogVisible"
    @open="handlerOpen"
    width="500px"
    @close="handlerClose"
    :show-close="false">
    <div class="el-dialog-body">
      <p v-if="!gradeLs.length">暂无成绩单</p>
      <ul>
        <li v-for="(item, index) in gradeLs" :key="index" class="course-ware-li">
          <span>{{item.name}}</span>
          <a :href="$baseApiUrl + item.url" target="block">预览</a>
        </li>
      </ul>
    </div>
    <div class="btn-container">
      <el-button size="mini" @click="toClose">关闭</el-button>
    </div>
  </el-dialog>
</template>
<script>
import {
  studyResultBareGetById
} from '@/api/study_result';
import dialogContainer from '@/components/commons/mixins/dialogContainer';
export default {
  data() {
    return {
      gradeLs: []
    }
  },
  props: ['row'],
  methods: {
    handlerOpen() {
      studyResultBareGetById(this.row.study_result_id).then(resp => {
        let gradeLs = [];
        if(resp.data.report_card_url) {
          gradeLs = [JSON.parse(resp.data.report_card_url)]
        }
        this.gradeLs = gradeLs
      })
    },
    handlerClose() {
      this.gradeLs = []
    }
  },
  mixins: [dialogContainer]
}  
</script>
<style>
.el-dialog-body {
  padding: 20px;
}
.course-ware-li {
  line-height: 30px;
  display: block;
  overflow: hidden;
  border-bottom: 1px #eee solid;
}
.course-ware-li span {
  display: block;
  float: left;
}
.course-ware-li a {
  display: block;
  float: right;
}
</style>
