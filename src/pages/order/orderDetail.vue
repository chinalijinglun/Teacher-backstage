<template>
  <div class="order-detail">
    <el-row class="block-row">
      <p class="block-title">
        订单详情
      </p>
      <el-form class="demo-form-inline" label-width="100px">
        <el-row>
          <el-form-item label="订单类型">
            <p>{{order.order_type}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程包ID">
            <p>{{order.course_id}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程包名称">
            <p>{{order.course.course_name}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程包类型">
            <p>{{$COURSE_TYPE_MAP[order.course.course_type]}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="班型">
            <p>{{$CLASS_TYPE[order.course.class_type]}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="教师">
            <p>{{order.teacher}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课节数">
            <p>{{order.course.classes_number}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="基本价格">
            <p>{{order.course.price}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="学生">
            <p>{{order.student}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="订单价格">
            <p>{{order.amount}}</p>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="备注">
            <p>{{order.order_desc}}</p>
          </el-form-item>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="block-row">
      <p class="block-title">
        取消原因
      </p>
      <el-table
        :data="payLog"
      >
        <el-table-column
          prop="state_reason"
          label="原因">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="updated_by"
          label="操作人">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
  import {
    mangeOrders,
    orderGetById
  } from '@/api/order'
  export default {
    name: 'orderDetail',
    data() {
      return {
        order: {
          course: {
            course_type: '',
            course_name: '',
            class_type: '',
            classes_number: '',
            price: ''
          },
          student: '',
          amount: '',
          order_desc: '',
          teacher: '',
          order_type: '',
          course_id: ''
        },
        payLog: []
      };
    },
    created() {
      const orderId = this.$route.query.id;
      this.getOrderInfo(orderId);
    },
    methods: {
      getOrderInfo(id) {
        mangeOrders({
          order_id: id,
          page_limit: 1,
          page_no: 1
        }).then(resp => {
          if(!resp.data.objects[0]) return false
          this.order.teacher = resp.data.objects[0].teacher_name
          this.order.student = resp.data.objects[0].student_name
        });
        orderGetById(id).then(resp=> {
          this.order.course = resp.data.course;
          this.order.amount = resp.data.amount;
          this.order.order_desc = resp.data.order_desc;
          this.order.order_type = this.$ORDER_TYPE[resp.data.order_type];
          this.order.course_id = resp.data.course_id;
          this.payLog = resp.data.order_paylogs
        })
      }
    }
  }
</script>
<style>
  .block-row {
    margin-bottom: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  .block-row .block-title {
    padding: 10px;
  }

</style>
