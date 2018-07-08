<template>
  <el-dialog
    :visible.sync="dialogVisible"
    @close="handlerClose"
    @open="handlerOpen"
    width="30%">
    <div class="teacher-reply">
      <p class="title">老师回复</p>
      <p>{{ reason }}</p>
    </div>
    <div class="sure-time-range">
      <p class="title">老师方便的时间</p>
      <p>{{`${start} - ${end}`}}</p>
    </div>
    <div class="btn-contain">
      <el-button size="mini" type="primary" @click="sure">确认</el-button>
      <el-button size="mini" type="primary" @click="reDate">重新预约</el-button>
      <el-button size="mini" @click="toClose">关闭</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import {
    interviewGetByinterviewid
  } from '@/api/interview';
  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'timeSure',
    data() {
      return {
        reason: '',
        start: '',
        end: ''
      };
    },
    props: ['id'],
    methods: {
      handlerOpen() {
        this.getInterview();
      },
      getInterview() {
        return interviewGetByinterviewid(this.id).then(resp => {
          const {
            reason,
            start,
            end
          } = resp.data;
          this.reason = reason;
          this.start = start;
          this.end = end;
        })
      },
      sure() {
        this.$emit('onSure');
      },
      reDate() {
        this.$emit('onReDate');
      },
      handlerClose() {
        this.reson = '';
        this.start = '';
        this.end = '';
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style scoped>
  .title {
    font-size: 14px;
    color: #000;
  }
  .teacher-reply,.sure-time-range {
    padding: 10px;
  }
  .btn-container{
    text-align: center;
    margin-top: 20px;
  }
</style>
