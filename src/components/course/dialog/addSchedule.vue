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
        :start-date.sync="form.class_at_start"
        :end-date.sync="form.class_at_end"
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
  import {
    courseSchedule
  } from '@/api/course';
  export default {
    name: 'modifyTime',
    data() {
      return {
        form: {
          class_at_start: '',
          class_at_end: '',
          course_id: '',
          schedules: ''
        },
        course_name: ''
      };
    },
    props: ['id', 'row'],
    methods: {
      open() {
        this.form.course_id = this.id;
        this.course_name = this.row.name
      },
      onSubmit() {
        if(this.form.class_at_start && this.form.class_at_end) {
          this.form.schedules = [{
            course_name: this.course_name || '补偿课',
            start: this.form.class_at_start,
            end: this.form.class_at_end
          }];
          return modifyScheduleTime({
            ...this.form
          }).then(resp => {
            this.$message.success('添加成功！');
            this.toClose();
          })
        } else {
          this.$message.error('请选择时间！');
          return Promise.reject();
        }
      },
      handlerClose() {
        this.form = {
          class_at_start: '',
          class_at_end: '',
          course_id: '',
          schedules: ''
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
