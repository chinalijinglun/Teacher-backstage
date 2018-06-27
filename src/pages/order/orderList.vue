<template>
  <div class="order-list">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="96px">
        <el-row>
          <el-form-item label="订单编号：">
            <el-input v-model="form.course_id" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="课程包名称：">
            <el-input v-model="form.course_name" size="mini"></el-input>
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
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单状态：">
            <el-select v-model="form.order_state" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
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
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="订单编号">
          </el-table-column>
          <el-table-column
            prop="course_name"
            label="课程包名称">
          </el-table-column>
          <el-table-column
            prop="order_amount"
            label="课节数">
          </el-table-column>
          <el-table-column
            prop="order_type"
            label="订单类型">
          </el-table-column>
          <el-table-column
            prop="order_state"
            label="状态">
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
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini">查看</el-button>
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
    <assign-conselor-dialog :visible.sync="dialogVisible"></assign-conselor-dialog>
  </div>
</template>
<script>
  import {
    orderMainQuery
  } from '@/api/order'
  import assignConselorDialog from '@/components/students/dialog/assignConselorDialog';
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          order_state: '',
          order_type: '',
          course_name: '',
          course_id: '',
          status: '',
          created_at_start: '',
          created_at_end: '',
          updated_by: '',
          page: 1
        },
        totalCount: 0,
        tableData: []
      };
    },
    created() {
      this.query()
    },
    methods: {
      query() {
        const {
          order_state,
          order_type,
          course_name,
          course_id,
          status,
          created_at_start,
          created_at_end,
          updated_by,
          page: page_no
        } = this.form;
        const f = this.$deleteEmptyProps({
          order_state,
          order_type,
          course_name,
          course_id,
          status,
          created_at_start,
          created_at_end,
          updated_by,
          page_no
        })
        orderMainQuery({  
          ...f,
          page_limit: 10
        }).then(resp => {
          this.tableData = resp.data.objects;
          this.totalCount = resp.data.num_results;
        })
      }
    },
    mixins: [paginationMix],
    components: {
      assignConselorDialog
    }
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
