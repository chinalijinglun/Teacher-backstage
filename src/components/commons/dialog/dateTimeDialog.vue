<template>
  <el-dialog 
    class="no-header-dialog"
    :visible.sync="dialogVisible"
    @open="open"
    @close="handlerClose"
    :show-close="false">
    <div class="date-time-dialog">
      <div class="time-item" v-for="(item, index) in form.timeLs" :key="index">
        <div class="item-date-picker">
          <el-date-picker
            v-model="item.date"
            size="mini"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="item-time-picker">
          <el-time-picker
            is-range
            v-model="item.timeRange"
            size="mini"
            placeholder="选择时间范围">
          </el-time-picker>
        </div>
        <div class="item-btn">
          <el-button size="mini" type="primary" @click="addTimeRange(index)">+</el-button>
          <el-button v-if="index>0" size="mini" type="primary" @click="removeTimeRange(index)">-</el-button>
        </div>
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
  import { DateTimeVo } from '@/utils/jsonModel';
  import {
    interviewGetByinterviewid
  } from '@/api/interview';
  export default {
    name: 'dateTimeDialog',
    data() {
      return {
        form: {
          timeLs: [new DateTimeVo()],
        }
      };
    },
    props: ['id','isEdit'],
    methods: {
      open() {
        if(this.isEdit) {
          this.getInterView()
        }
      },
      getInterView() {
        return interviewGetByinterviewid(this.id).then(resp => {
          if(resp.data.set_time) {
            const timeLs = JSON.parse(resp.data.set_time);
            this.form.timeLs = timeLs.map(item => new DateTimeVo(item));
          }
        })
      },
      onSubmit() {
        let valid = true;
        let msg = ''
        for(let item of this.form.timeLs) {
          if(!item.valid().state) {
            valid = false;
            msg = item.valid().msg;
            break;
          }
        }
        if(valid) {
          this.$emit('onSubmit',this.form.timeLs);
        } else {
          this.$message.error(msg);
        }
      },
      addTimeRange(index) {
        this.form.timeLs.splice(index+1, 0, new DateTimeVo());
      },
      removeTimeRange(index) {
        this.form.timeLs.splice(index, 1);
      },
      handlerClose() {
        this.form.timeLs = [new DateTimeVo()]
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
