<template>
  <div class="return-apply">
    <el-form label-width="90px" label-position="top">
      <div class="apply-storey apply-reason">
        <el-form-item label="退款原因：">
          <el-input type="textarea" v-model="form.reason" size="mini" :rows="5"></el-input>
        </el-form-item>
      </div>
      <div class="apply-storey return-class">
        <p class="apply-title">可退款课节：</p>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="课节名">
          </el-table-column>
          <el-table-column
            prop="start"
            label="上课时间">
            <template slot-scope="{row}">
              {{row.start | hasTime}}
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="apply-storey return-form">
        <el-form-item label="退款金额：">
          <el-input size="mini" v-model="form.amount"></el-input>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input type="textarea" size="mini" :rows="5" v-model="form.order_desc"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div class="apply-storey return-btn">
      <el-button type="primary" size="mini" @click="submit">提交</el-button>
      <el-button size="mini" @click="goBack">取消</el-button>
    </div>
  </div>
</template>
<script>
  import {
    orderGetById,
    orderRefund,
    orderPutById
  } from '@/api/order';
  import {
    studentSchedule
  } from '@/api/student'
  export default {
    data() {
      return {
        form: {
          order_id: '',
          amount: '',
          order_desc: '',
          reason: ''
        },
        tableData: []
      };
    },
    created() {
      this.form.order_id = this.$route.query.id;
      this.getOrderById(this.form.order_id);
    },
    methods: {
      submit() {
        if(this.valid()) {
          orderRefund(this.form).then(resp=>{
            console.log(resp);
            orderPutById(resp.data.id, {
              payment_state: 4
            }).then(r => {
              this.$message.success('申请退款成功！');
              this.goBack();
            })
          });
        }
      },
      goBack() {
        this.$router.back();
      },
      valid() {
        if(!this.form.reason) {
          this.$message.error('请输入退款原因！');
          return false;
        }
        if(!this.form.amount) {
          this.$message.error('请输入退款金额！');
          return false;
        }
        if(!this.$PLUS_FLOAT_REG_EXP.test(this.form.amount)) {
          this.$message.error('请输入有效金额！');
          return false;
        }
        return true;
      },
      getOrderById(id) {
        return orderGetById(id).then(resp=> {
          console.log(resp.data);
          return this.getStudentSchedule(resp.data.student_id, resp.data.course_id);
        });
      },
      getStudentSchedule(student_id, course_id) {
        return studentSchedule({
          course_id,
          page_limit: 1000,
          page_no: 1,
          student_id
        }).then(resp => {
          this.tableData = resp.data.objects.filter(item => new Date(item.start) > new Date());
        })
      }
    }
  }
</script>
<style scoped>
.apply-storey {
  width: 800px;
  padding: 0 30px;
  margin-top: 20px;
}
.apply-storey .apply-title {
  line-height: 30px;
  font-size: 14px;
  color: #606266;
  margin-bottom: 15px;
}
.el-input {
  width: 200px;
}
.apply-storey.return-btn {
  text-align: center;
}
</style>

