<template>
  <el-dialog
    :visible.sync="dialogVisible"
    @close="handlerClose"
    width="30%">
    <div class="audit-refund-failed">
      <el-form label-width="90px" label-position="top">
        <el-form-item label="原因：">
          <el-input type="textarea" v-model="form.reason" size="mini" :rows="5"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-container">
      <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
      <el-button size="mini" @click="toClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import {
    orderPutById
  } from '@/api/order';
  import {
    payLogPost
  } from '@/api/pay_log';
  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  import {mapState} from 'vuex'
  export default {
    name: 'orderReasonDialog',
    data() {
      return {
        form: {
          reason: ''
        }
      };
    },
    methods: {
      onSubmit() {
        this.$emit('onSubmit', this.form.reason);
      },
      handlerClose() {
        this.form.reason = ''
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style scoped>
  .btn-container{
    text-align: center;
  }
</style>
