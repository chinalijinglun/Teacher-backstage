<template>
  <el-dialog 
    class="no-header-dialog"
    :visible.sync="dialogVisible"
    @open="handlerOpen"
    width="500px"
    @close="handlerClose"
    :show-close="false">
    <div class="el-dialog-body">
      <p v-if="!coursewareLs.length">暂无课件</p>
      <ul>
        <li v-for="(item, index) in coursewareLs" :key="index" class="course-ware-li">
          <span>{{item.ware_name}}</span>
          <a :href="item.ware_url" target="block">预览</a>
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
  coursewareBareGet
} from '@/api/courseware';
import dialogContainer from '@/components/commons/mixins/dialogContainer';
export default {
  data() {
    return {
      coursewareLs: []
    }
  },
  props: ['id'],
  methods: {
    handlerOpen() {
      const filter = this.$json2filter({course_schedule_id: [this.id]})
      coursewareBareGet(filter, {page: 1}).then(resp => {
        this.coursewareLs = resp.data.objects
      })
    },
    handlerClose() {
      this.coursewareLs = []
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
