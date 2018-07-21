<template>
  <el-dialog 
    class="no-header-dialog"
    :visible.sync="dialogVisible"
    @open="open"
    @close="handlerClose"
    :show-close="false">
    <div class="date-time-dialog">
      <div class="time-item">
        <date-range
        :start-date.sync="form.start"
        :end-date.sync="form.end"
        size="mini"
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间">
        </date-range>
      </div>
    </div>
    <div class="btn-container">
      <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
      <el-button size="mini" @click="toClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import dialogContainer from '@/components/commons/mixins/dialogContainer';
  import {
    studentApplyTryout
  } from '@/api/student';
  export default {
    name: 'appointCourse',
    data() {
      return {
        form: {
          start: '',
          end: '',
          student_id: ''
        }
      };
    },
    props: ['id','isEdit'],
    methods: {
      open() {
        this.form.student_id = this.id;
      },
      onSubmit() {
        if(this.form.start && this.form.end) {
          return studentApplyTryout(this.form).then(resp => {
            this.$message.success('预约成功！');
            this.toClose();
          })
        } else {
          this.$message.error('请选择时间！');
          return Promise.reject();
        }
      },
      handlerClose() {
        this.form = {
          start: '',
          end: '',
          id: ''
        }
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style>
  .btn-container{
    text-align: center;
  }
  .no-header-dialog .el-dialog__header {
    display: none;
  }
  .time-item {
    position: relative;
    text-align: center;
    margin-bottom: 20px;
  }
  .time-item>div {
    display: inline-block;
    margin-right: 10px;
  }
  .time-item>.item-btn {
    position: absolute;
    right: 0;
  }
</style>
