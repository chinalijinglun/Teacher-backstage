<template>
  <div class="assign-conselor-list">
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
          <el-form-item label="状态：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="学生来源：">
            <el-input v-model="form.name" size="mini"></el-input>
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
            prop="source"
            label="来源">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="counsellor"
            label="课程顾问">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="dialogVisible = true;">分配</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-row>
    <assign-conselor-dialog :visible.sync="dialogVisible"></assign-conselor-dialog>
  </div>
</template>
<script>
  import assignConselorDialog from '@/components/students/dialog/assignConselorDialog'
  export default {
    data() {
      return {
        dialogVisible: false,
        form: {
          name: '',
          telphone: '',
          status: '',
          email: '',
          source: ''
        },
        tableData: [{
          id: '0001',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30',
          source: '自有',
          status: '待分配',
          counsellor: '无'
        },{
          id: '0002',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30',
          source: '自有',
          status: '待分配',
          counsellor: '无'
        },{
          id: '0003',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30',
          source: '自有',
          status: '待分配',
          counsellor: '无'
        }]
      };
    },
    components: {
      assignConselorDialog
    }
  }
</script>
<style>
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
</style>

