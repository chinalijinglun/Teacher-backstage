<template>
  <div class="student-list">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="82px">
        <el-row>
          <el-form-item label="学生姓名：">
            <el-input v-model="form.username" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.mobile" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱：">
            <el-input v-model="form.email" size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button type="primary" size="mini" @click="query">查询</el-button>
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
            prop="username"
            label="用户名"
            width="180">
          </el-table-column>
          <el-table-column
            label="学生姓名">
            <template slot-scope="scope">
              {{`${scope.row.given_name || ''} ${scope.row.family_name || ''}`}}
            </template>
          </el-table-column>
          <el-table-column
            prop="mobile"
            label="联系电话">
          </el-table-column>
          <el-table-column
            prop="email"
            label="联系邮箱">
          </el-table-column>
          <el-table-column
            prop="created_at"
            label="注册时间">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="toDetail(scope.row.id)">查看</el-button>
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
    <assign-conselor-dialog :visible.sync="dialogVisible"></assign-conselor-dialog>
  </div>
</template>
<script>
  import assignConselorDialog from '@/components/students/dialog/assignConselorDialog';
  import paginationMix from '@/components/commons/mixins/paginationMix';
  import {
    studentBareGet
  } from '@/api/student'

  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          username: '',
          mobile: '',
          email: '',
          page: 1
        },
        totalCount: 0,
        tableData: []
      };
    },
    created() {
      this.query();
    },
    methods: {
      query() {
        const {
          username,
          mobile,
          email,
          page
        } = this.form;
        const filter = this.$json2filter({
          username,
          mobile,
          email
        })
        studentBareGet(filter,{page}).then(resp => {
          this.tableData = resp.data.objects;
          this.totalCount = resp.data.num_results;
        })
      },
      toDetail(id) {
        this.$router.push(`/student/studentDetail?id=${id}&blkname=info`);
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
