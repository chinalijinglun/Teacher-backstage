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
          <el-button size="mini" type="primary" @click="addSysUser">添加员工</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-contain">
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="员工姓名">
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
            label="添加时间">
          </el-table-column>
          <el-table-column
            prop="user_type"
            label="角色">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini">编辑</el-button>
              <el-button size="mini">注销</el-button>
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
    <add-sys-user :visible="showDialog"></add-sys-user>
  </div>
</template>
<script>
  import { paginationMix } from '@/components';
  import {
    sysUserBareGet
  } from '@/api/sys_user.js'

  export default {
    data() {
      return {
        form: {
          curPage: 1,
          pageSize: 10
        },
        showDialog: false,
        totalCount: 100,
        tableData: []
      };
    },
    created() {
      this.query()
    },
    methods: {
      query() {
        const {
          page
        } = this.form;
        sysUserBareGet({},{page}).then(resp => {
          this.tableData = resp.data.objects;
        })
      },
      addSysUser() {
        this.showDialog = true;
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

