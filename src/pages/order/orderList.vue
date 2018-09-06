<template>
  <div class="order-list">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="96px">
        <el-row>
          <el-form-item label="订单编号：">
            <el-input v-model="form.order_id" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="课程包名称：">
            <el-input v-model="form.subject_name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="下单人：">
            <el-input v-model="form.updated_by" size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="下单时间：">
            <date-range
              :start-date.sync="form.created_at_start"
              :end-date.sync="form.created_at_end"
              size="mini"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </date-range>
          </el-form-item>
          <el-form-item label="订单类型：">
            <el-select v-model="form.order_type" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="普通课订单" value="1"></el-option>
              <el-option label="赠送课订单" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单状态：">
            <el-select v-model="form.payment_state" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待付款" value="1"></el-option>
              <el-option label="已付款" value="2"></el-option>
              <el-option label="已排课" value="8"></el-option>
              <el-option label="已取消" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button type="primary" size="mini" @click="query">查询</el-button>
          <el-button type="primary" size="mini" @click="$router.push('/order/createOrder')">创建订单</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-contain">
      <el-row>
        <el-table
          :data="tableData">
          <el-table-column
            prop="id"
            label="订单编号">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="toDetail(scope.row.id)">{{scope.row.id}}</el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="subject_name"
            label="课程包名称">
          </el-table-column>
          <el-table-column
            prop="classes_number"
            label="课节数">
          </el-table-column>
          <el-table-column
            label="订单类型">
            <template slot-scope="scope">
              {{ $ORDER_TYPE[scope.row.order_type] }}
            </template>
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              {{ $PAYMENT_STATE[scope.row.payment_state] }}
            </template>
          </el-table-column>
          <el-table-column
            prop="updated_by"
            label="下单人">
          </el-table-column>
          <el-table-column
            prop="created_at"
            label="下单时间">
          </el-table-column>
          <el-table-column
            prop="teacher_name"
            label="教师">
          </el-table-column>
          <el-table-column
            prop="student_name"
            label="学生">
          </el-table-column>
          <el-table-column
            prop="order_amount"
            label="价格">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="toPayed(scope.row.id)" v-if="scope.row.payment_state === 1">确认付款</el-button>
              <el-button size="mini" @click="toCancel(scope.row)" v-if="scope.row.payment_state === 1">取消订单</el-button>
              <el-button size="mini" @click="toRefund(scope.row.id)" v-if="scope.row.payment_state === 2">申请退款</el-button>
              <el-button size="mini" @click="toRefund(scope.row.id)" v-if="scope.row.payment_state === 8">申请退款</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="pagination-container">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.curPage"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </el-row>
    </el-row>
    <order-reason-dialog :visible.sync="visible" @onSubmit="cancelSubmit"></order-reason-dialog>
  </div>
</template>
<script>
  import {
    mangeOrders,
    orderPutById
  } from '@/api/order';

  import {
    payLogPost
  } from '@/api/pay_log';

  import { mapState } from 'vuex'
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    computed: {
      ...mapState({userName: state=>state.auth.userName})
    },
    data() {
      return {
        form: {
          order_state: '',
          order_type: '',
          subject_name: '',
          order_id: '',
          payment_state: '',
          created_at_start: '',
          created_at_end: '',
          updated_by: '',
          page: 1
        },
        visible: '',
        order_row: {},
        totalCount: 0,
        tableData: []
      };
    },
    created() {
      this.query()
    },
    methods: {
      toDetail(id) {
        this.$router.push({path: '/order/orderDetail', query: {id}})
      },
      toPayed(id) {
        return this.toUpdate(id, 2, '确认此订单客户已付款？');
      },
      toCancel(row) {
        this.order_row = row;
        this.visible = true;
      },
      cancelSubmit(reason) {
        orderPutById(this.order_row.id, {
          payment_state: 3
        }).then(resp => {
          return this.addLog(reason)
        }).then(resp => {
          this.$message.success('取消成功！');
          this.query();
          this.visible = false;
          this.order_row = {};
        });
      },
      addLog(reason) {
        return payLogPost({
          order_id: this.order_row.id,
          payment_fee: this.order_row.order_amount,
          state: 3,
          payment_method: 1,
          result: 0,
          state_reason: reason,
          amount: 0,
          direction: 2,
          delete_flag: 1,
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userName
        });
      },
      toRefund(id) {
        return this.$router.push({path: '/order/returnApply', query: {id}})
      },
      toUpdate(id, state, confirm) {
        return this.$confirm(confirm || '确认更改状态？').then(_=>{
          orderPutById(id, {
            payment_state: state
          }).then(resp => {
            this.$message.success('状态更新成功！');
            this.query();
          })
        }).catch(_=>{})
      },
      query() {
        const {
          order_state,
          order_type,
          subject_name,
          order_id,
          payment_state,
          created_at_start,
          created_at_end,
          updated_by,
          page: page_no
        } = this.form;
        const f = this.$deleteEmptyProps({
          order_state,
          order_type,
          subject_name,
          order_id,
          payment_state,
          created_at_start,
          created_at_end,
          updated_by,
          page_no
        })
        mangeOrders({
          ...f,
          page_limit: 10
        }).then(resp => {
          this.tableData = resp.data.objects;
          this.totalCount = resp.data.num_results;
        })
      }
    },
    mixins: [paginationMix]
  }
</script>
<style scoped>
.form-contain {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 3px;
  margin-bottom: 20px;
}
.list-contain {
  padding: 15px;
}
.list-title {
  font-family: "Microsoft YaHei";
  font-size: 16px;
  line-height: 20px;
}
.pagination-container {
  text-align: right;
  margin-top: 30px;
}
</style>
