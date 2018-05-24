<template>
  <el-dialog
    title="课程顾问"
    :visible.sync="dialogVisible"
    width="30%">
    <div class="conselor-list">
      <ul class="conselor-ul">
        <li><el-radio v-model="radio" label="1">亨利（已分配学生数0）</el-radio></li>
        <li><el-radio v-model="radio" label="2">亨利（已分配学生数10）</el-radio></li>
        <li><el-radio v-model="radio" label="3">亨利（已分配学生数0）</el-radio></li>
        <li><el-radio v-model="radio" label="4">亨利（已分配学生数9）</el-radio></li>
        <li><el-radio v-model="radio" label="5">亨利（已分配学生数0）</el-radio></li>
      </ul>
    </div>
    <div class="btn-container">
      <el-button type="primary" size="mini">提交</el-button>
      <el-button size="mini">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'assignConselorDialog',
    data() {
      return {
        radio: '1'
      };
    },
    mixins: [dialogContainer]
  }
</script>
<style scoped>
  ul,li,ol {
    list-style: none;
  }
  .conselor-list {
    overflow: hidden;
  }
  .conselor-ul {
    width: 100%;
  }
  .conselor-ul li{
    width: 50%;
    float: left;
    line-height: 30px;
  }
  .btn-container {
    margin-top: 20px;
    text-align: center;
  }
</style>

