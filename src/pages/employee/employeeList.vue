<template>
  <div class="employee-list">
    <el-row class="form-container">
      <el-form :inline="true" ref="form" :model="form" label-width="96px">
        <el-row>
          <el-form-item label="员工姓名：">
            <el-input size="mini" placeholder="员工姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input size="mini" placeholder="联系电话"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱：">
            <el-input size="mini" placeholder="联系邮箱"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱：">
            <el-input size="mini" placeholder="联系邮箱"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button size="mini" type="primary">查询</el-button>
          <el-button size="mini" type="primary">添加员工</el-button>
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
            label="订单编号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="loginName"
            label="课程包名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="studentsName"
            label="课节数">
          </el-table-column>
          <el-table-column
            prop="telphone"
            label="订单类型">
          </el-table-column>
          <el-table-column
            prop="email"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="addtime"
            label="下单人">
          </el-table-column>
          <el-table-column
            prop="addtime"
            label="下单时间">
          </el-table-column>
          <el-table-column
            prop="addtime"
            label="教师">
          </el-table-column>
          <el-table-column
            prop="addtime"
            label="学生">
          </el-table-column>
          <el-table-column
            prop="addtime"
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
          :page-size="form.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </el-row>
    </el-row>
  </div>
</template>
<script>
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    data() {
      return {
        form: {
          curPage: 1,
          pageSize: 10
        },
        totalCount: 100,
        tableData: [{
          id: '0001',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30'
        },{
          id: '0002',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30'
        },{
          id: '0003',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30'
        }]
      };
    },
    methods: {
      query() {
        console.log(2);
      }
    },
    mixins: [paginationMix]
  }
</script>
<style scoped>
.form-container {
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

