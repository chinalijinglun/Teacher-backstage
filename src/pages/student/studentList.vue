<template>
  <div class="student-list">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="82px">
        <el-row>
          <el-form-item label="学生姓名：">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.telphone" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱：">
            <el-input v-model="form.email" size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button type="primary" size="mini">查询</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-contain">
      <el-row class="list-title">
        <p>待分配学生</p>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="60">
          </el-table-column>
          <el-table-column
            prop="loginName"
            label="用户名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="studentsName"
            label="学生姓名">
          </el-table-column>
          <el-table-column
            prop="telphone"
            label="联系电话">
          </el-table-column>
          <el-table-column
            prop="email"
            label="联系邮箱">
          </el-table-column>
          <el-table-column
            prop="addtime"
            label="注册时间">
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
