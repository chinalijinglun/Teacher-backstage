<template>
  <div class="employee-list">
    <el-row class="form-container">
      <el-form :inline="true" ref="form" :model="form" label-width="96px">
        <el-row>
          <el-form-item label="员工姓名：">
            <el-input size="mini" v-model="form.username" placeholder="员工姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input size="mini" v-model="form.mobile" placeholder="联系电话"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱：">
            <el-input size="mini" v-model="form.email" placeholder="联系邮箱"></el-input>
          </el-form-item>
          <el-form-item label="角色：">
            <el-select v-model="form.role_id" size="mini" placeholder="请选择">
              <el-option label="全部" value=""></el-option>
              <el-option
                v-for="item in roleLs"
                :key="item.id"
                :label="item.role_name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select v-model="form.state" size="mini" placeholder="请选择">
              <el-option label="全部" value=""></el-option>
              <el-option label="正常" value="TRAINING"></el-option>
              <el-option label="注销" value="WORKING"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button size="mini" type="primary" @click="query">查询</el-button>
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
            prop="username"
            label="员工姓名">
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
            prop="role_name"
            label="角色">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
            <template slot-scope="scope">{{{'TRAINING': '正常','WORKING': '注销'}[scope.row.state]}}</template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="update(scope.row.id)">编辑</el-button>
              <el-button size="mini" @click="logout(scope.row)" >{{ scope.row.state!==1?'注销':'激活' }}</el-button>
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
          :total="total">
        </el-pagination>
      </el-row>
    </el-row>
    <add-sys-user :visible.sync="showDialog" :sys-user-id="choseId" @onClose="handlerDialogClose"></add-sys-user>
  </div>
</template>
<script>
  import { paginationMix } from '@/components';
  import {
    sysUserBareGet,
    sysUserPutById,
    mangerStaffQuery
  } from '@/api/sys_user.js';
  import {
    roleDefinitionBareGet
  } from '@/api/role_definition';

  export default {
    data() {
      return {
        form: {
          username: '',
          email: '',
          mobile: '',
          role_id: '',
          state: '',
          page: 1
        },
        showDialog: false,
        total: 0,
        tableData: [],
        roleLs: [],
        choseId: ''
      };
    },
    created() {
      this.query();
      this.getRoleLs();
    },
    methods: {
      query() {
        const {
          username: user_name,
          email,
          mobile,
          role_id,
          state: user_state,
          page: page_no
        } = this.form;
        const qf = this.$deleteEmptyProps({
          user_name,
          email,
          mobile,
          role_id,
          user_state
        })
        mangerStaffQuery({
          page_no,
          page_limit: 10,
          ...qf
        }).then(resp => {
          this.tableData = resp.data.objects;
          this.total = resp.data.num_results;
        })
      },
      addSysUser() {
        this.showDialog = true;
      },
      getRoleLs() {
        const filter = this.$json2filter({});
        return roleDefinitionBareGet(filter,{results_per_page: 1000, page: 1}).then(resp => {
          this.roleLs = resp.data.objects;
        });
      },
      handlerDialogClose() {
        this.choseId = '';
        this.query();
      },
      logout(row) {
        const s = row.state===2 ? '激活':'注销';
        const state = row.state===1 ? 2 : 1;
        this.$confirm(`确定${s}？`).then(_=>{
          sysUserPutById(row.id, {state}).then(resp => {
            this.query();
            this.$message.success(`${s}成功！`);
          });
        }).catch(_=>{

        });
      },
      update(id) {
        this.choseId = id;
        this.$nextTick(_=>{
          this.showDialog = true;
        });
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

