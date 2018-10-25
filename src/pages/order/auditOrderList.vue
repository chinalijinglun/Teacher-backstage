<template>
  <div class="audit-order-list">
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
          <el-form-item label="状态：">
            <el-select v-model="form.payment_state" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="申请退款" value="4"></el-option>
              <el-option label="退款审核通过" value="5"></el-option>
              <el-option label="退款审核驳回" value="6"></el-option>
              <el-option label="已退款" value="7"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button type="primary" size="mini" @click="query">查询</el-button>
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
            <template slot-scope="{row}">
              {{row.created_at | hasTime}}
            </template>
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
              <el-button size="mini" @click="toAudit(scope.row.id)" v-if="scope.row.payment_state === 4">审核</el-button>
              <el-button size="mini" @click="toRefundMoney(scope.row.id)" v-if="scope.row.payment_state === 5">确认退款</el-button>
              <el-button size="mini" @click="toSeeReason(scope.row.id)" v-if="scope.row.payment_state === 6">查看原因</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="pagination-container">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.page"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </el-row>
    </el-row>
    <reason-review :visible.sync="visible" :order_id="order_id" :state="state"></reason-review>
  </div>
</template>
<script>
  import {
    mangeRefunds,
    orderPutById
  } from '@/api/order'
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
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
        state: 6,
        visible: false,
        order_id: '',
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
      toAudit(id) {
        this.$router.push({path: '/order/auditOrder', query: {id}})
      },
      toSeeReason(id) {
        this.order_id = id;
        this.visible = true;
      },
      toRefundMoney(id) {
        this.$confirm('确认此订单已退款？').then(_=>{
          orderPutById(id, {
            payment_state: 7
          }).then(resp => {
            this.$message.success('已退款！');
            this.query();
          })
        }).catch(_=>{});
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
        mangeRefunds({
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
