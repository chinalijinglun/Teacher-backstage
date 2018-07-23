<template>
  <el-dialog 
    :visible.sync="dialogVisible"
    title="原因"
    @open="open"
    @close="handlerClose"
    :show-close="false">
    <div class="reason-container">
      <el-row>
        <el-radio-group v-model="form.type">
          <el-radio label="系统原因">系统原因</el-radio>
          <el-radio label="教师原因">教师原因</el-radio>
          <el-radio label="学生原因">学生原因</el-radio>
        </el-radio-group>
      </el-row>
      <el-row>
        <el-input type="textarea" :rows="5" placeholder="请输入原因" v-model="form.reason"></el-input>
      </el-row>
    </div>
    <div class="btn-container">
      <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
      <el-button size="mini" @click="toClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import dialogContainer from '@/components/commons/mixins/dialogContainer';
  export default {
    name: 'modifyTime',
    data() {
      return {
        form: {
          type: '',
          reason: ''
        }
      };
    },
    props: ['id'],
    methods: {
      open() {
        this.form.course_schedule_id = this.id;
      },
      onSubmit() {
        if(!this.form.type) {
          return this.$message.error('请选择类型！')
        }
        if(!this.form.reason) {
          return this.$message.error('请输入原因！')
        }
        this.$emit('onSubmit', this.form.type + ':' + this.form.reason);
      },
      handlerClose() {
        this.form = {
          type: '',
          reason: ''
        }
        this.$emit('onClose')
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style>
  .btn-container{
    text-align: center;
  }
  .reason-container .el-row {
    padding: 10px;
  }
</style>
