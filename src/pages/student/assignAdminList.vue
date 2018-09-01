<template>
  <div class="assign-admin-list">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="82px">
        <el-row>
          <el-form-item label="学生姓名：">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.mobile" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱：">
            <el-input v-model="form.email" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" :value="1"></el-option>
              <el-option label="已分配" :value="2"></el-option>
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
              {{scope.row.first_name || ''}}
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
            label="状态">
            <template slot-scope="scope">
              {{scope.row.student_helper_id?'已分配':'未分配'}}
            </template>
          </el-table-column>
          <el-table-column
            label="班主任">
            <template slot-scope="scope">
              {{scope.row.student_helpers?scope.row.student_helpers.username:''}}
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="addAdmin(scope.row)">
                {{scope.row.student_helper_id?'重新分配':'分配'}}
              </el-button>
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
    <assign-admin-dialog :visible.sync="dialogVisible" :student-id="curStudent.id" :helper-id="curStudent.student_helper_id" @onClose="handleDialogClose"></assign-admin-dialog>
  </div>
</template>
<script>
  import {
    studentGet
  } from '@/api/student'
  import assignAdminDialog from '@/components/students/dialog/assignAdminDialog';
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
          mobile: '',
          status: '',
          email: '',
          page: 1
        },
        totalCount: 0,
        curStudent: {},
        tableData: []
      };
    },
    created() {
      this.query()
    },
    methods: {
      addAdmin(student) {
        this.curStudent = student;
        this.dialogVisible = true;
      },
      handleDialogClose() {
        this.curStudent = {};
        this.query();
      },
      query() {
        const {
          name,
          mobile,
          email,
          status,
          page
        } = this.form;
        const filter = this.$json2filter({
          'name|first_name': name,
          mobile,
          email
        });
        if(status === 1) {
          filter.filters.push({name: 'student_helper_id', op:'is_null'})
        } else if(status === 2){
          filter.filters.push({name: 'student_helper_id', op:'is_not_null'})
        }
        studentGet(filter, {page}).then(resp => {
          this.tableData = resp.data.objects;
          this.totalCount = resp.data.num_results;
        });
      }
    },
    mixins: [paginationMix],
    components: {
      assignAdminDialog
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
