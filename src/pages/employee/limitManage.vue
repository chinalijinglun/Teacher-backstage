<template>
  <el-row class="limit-manage">
      <el-col :span="12">
        <div class="list-container">
          <el-table
            :data="roleLs"
            border
            style="width: 100%">
            <el-table-column
              type="index"
              label="序号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="role_name"
              label="角色名称">
            </el-table-column>
            <el-table-column
              label="查看成员">
              <template slot-scope="scope">
                <el-button size="mini" @click="queryUsers(scope.row.id)">查看成员</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="form-container">
          <el-form :inline="true" ref="form" :model="form" label-width="96px">
            <el-row>
              <el-form-item>
                <el-input size="mini" placeholder="员工姓名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input size="mini" placeholder="联系电话"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="mini" type="primary" @click="queryUsers">查询</el-button>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
        <div class="list-container">
          <el-table
            :data="roleUserLs"
            border
            style="width: 100%">
            <el-table-column
              type="index"
              label="序号">
            </el-table-column>
            <el-table-column
              prop="username"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="mobile"
              label="联系电话">
            </el-table-column>
            <el-table-column
              label="查看成员">
              <template slot-scope="scope">
                <el-button size="mini" @click="deleteRoleUser(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-row style="text-align: right">
            <el-pagination
              layout="prev, pager, next"
              :current-page = "form.page_no"
              :page-size="10"
              @current-change="handlePageChange"
              :total="roleUserTotal">
            </el-pagination>
          </el-row>
        </div>
      </el-col>
  </el-row>
</template>
<script>
  import {
    mangerStaffQuery
  } from '@/api/sys_user'
  import {
    roleDefinitionBareGet
  } from '@/api/role_definition';
  export default {
    data() {
      return {
        form: {
          user_name: '',
          mobile: '',
          role_id: '',
          page_limit: 10,
          page_no: 1
        },
        roleLs: [],
        roleUserLs: [],
        roleUserTotal: 0
      };
    },
    created() {
      this.getRoleLs();
    },
    methods: {
      queryUsers(role_id){
        this.form = {
          user_name: '',
          mobile: '',
          role_id: role_id,
          page_limit: 10,
          page_no: 1
        };
        return this.getRoleUserLs();
      },
      getRoleLs() {
        const filter = this.$json2filter({});
        roleDefinitionBareGet(filter, {page: 1}).then(resp => {
          this.roleLs = resp.data.objects;
        })
      },
      getRoleUserLs() {
        const form = this.$deleteEmptyProps(this.form)
        mangerStaffQuery(form).then(resp => {
          this.roleUserLs = resp.data.objects;
          this.roleUserTotal = resp.data.num_results;
        })
      },
      handlePageChange(e) {
        this.form.page_no = e
        this.getRoleUserLs();
      },
      deleteRoleUser(id) {
        
      }
    }
  }
</script>
<style scoped>
  .el-col {
    padding: 20px;
  }
</style>

