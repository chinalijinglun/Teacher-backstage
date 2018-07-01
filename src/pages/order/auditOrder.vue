<template>
<div class="audit-order">
  <el-row class="info-block">
    <p class="info-title">
      退款原因：
    </p>
    <p class="info-content">{{refund.state_reason}}</p>
  </el-row>
  <el-row class="info-block inline">
    <p class="info-title">
      退款金额：
    </p>
    <p class="info-content">
      {{refund.amount}}
    </p>
  </el-row>
  <el-row class="info-block">
    <p class="info-title">
      备注：
    </p>
    <p class="info-content">{{refund.remark}}</p>
  </el-row>
  <el-row class="btn-contain">
    <el-button type="primary" size="mini" @click="agree">同意</el-button>
    <el-button size="mini" @click="visible=true;">不同意</el-button>
  </el-row>
  <order-reason-dialog :visible.sync="visible" @onSubmit="handlerSubmit"></order-reason-dialog>
</div>
</template>
<script>
  import {
    orderGetById,
    orderPutById
  } from '@/api/order';
  import {
    payLogPost
  } from '@/api/pay_log';
  import { mapState } from 'vuex';
  export default {
    name: "auditOrder",
    computed: {
      ...mapState({
        userName: state => state.auth.userName
      })
    },
    data() {
      return {
        order_id: '',
        visible: false,
        tableData: [],
        order_amount: '',
        refund: {
          state_reason: '',
          amount: '',
          remark: '',
          payment_method: ''
        }
      };
    },
    created() {
      this.order_id = this.$route.query.id;
      this.getOrderInfo(this.order_id);
    },
    methods: {
      getOrderInfo(id) {
        return orderGetById(id).then(resp => {
          const logs = resp.data.order_paylogs;
          this.order_amount = resp.data.amount;
          for(let log of logs) {
            if(log.state === 4) {
              this.refund.state_reason = log.state_reason;
              this.refund.amount = log.amount;
              this.refund.remark = log.remark;
              this.refund.payment_method = log.payment_method;
              break;
            }
          }
        });
      },
      agree() {
        this.$confirm('确认同意退款? ').then(_=> {
          return orderPutById(this.order_id, {
            payment_state: 5
          }).then(resp => {
            this.$message.success('退款审核通过！');
            return this.$router.back();
          });
        }).catch(_=>{})
      },
      handlerSubmit(reson) {
        orderPutById(this.order_id, {
          payment_state: 6
        }).then(resp => {
          return this.addRejectLog(reson);
        }).then(resp => {
          this.visible = false;
          this.$message.success('退款已驳回！');
          this.$router.back();
        });
      },
      addRejectLog(reason) {
        return payLogPost({
          order_id: this.order_id,
          payment_fee: this.order_amount,
          state: 6,
          payment_method: this.refund.payment_method,
          result: this.refund.amount,
          state_reason: reason,
          amount: this.refund.amount,
          direction: 2,
          delete_flag: 1,
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userName
        });
      }
    }
  }
</script>
<style scoped>
  .info-block {
    padding: 20px;
  }
  .info-block.inline p {
    display: inline-block;
  }
  .btn-contain {
    text-align: center;
  }
</style>
