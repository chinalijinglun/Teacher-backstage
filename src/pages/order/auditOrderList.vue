<template>
  <div class="audit-order-list">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="96px">
        <el-row>
          <el-form-item label="分类：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程包名称：">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="课程包ID：">
            <el-input v-model="form.telphone" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="操作人：">
            <el-input v-model="form.email" size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="创建时间：">    
            <date-range 
              :start-date.sync="form.startDate" 
              :end-date.sync="form.endDate"
              size="mini"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </date-range>
          </el-form-item>
          <el-form-item label="类型：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button type="primary" size="mini">查询</el-button>
          <el-button type="primary" size="mini">创建订单</el-button>
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
    <assign-conselor-dialog :visible.sync="dialogVisible"></assign-conselor-dialog>
  </div>
</template>
<script>
  import assignConselorDialog from '@/components/students/dialog/assignConselorDialog';
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
          telphone: '',
          email: '',
          status: '',
          startDate: '',
          endDate: '',
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