<template>
  <el-dialog 
    class="no-header-dialog"
    :visible.sync="dialogVisible"
    @open="open"
    @close="handlerClose"
    :show-close="false">
    <div class="date-time-dialog">
      <div class="time-item">
        <course-date-range
        ref="courseDateRange"
        :start-date.sync="form.start"
        :end-date.sync="form.end"
        size="mini"
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间">
        </course-date-range>
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
    modifyScheduleTime
  } from '@/api/course_schedule';
  export default {
    name: 'modifyTime',
    data() {
      return {
        form: {
          start: '',
          end: '',
          course_schedule_id: ''
        }
      };
    },
    props: ['id'],
    methods: {
      open() {
        this.form.course_schedule_id = this.id;
      },
      onSubmit() {
        if(this.form.start && this.form.end) {
          return modifyScheduleTime({
            ...this.form
          }).then(resp => {
            this.$message.success('修改成功！');
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
          course_schedule_id: ''
        };
        this.$refs.courseDateRange.init()
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
