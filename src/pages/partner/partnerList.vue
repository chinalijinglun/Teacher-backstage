<template>
  <div class="partner-list">
    <el-row class="form-container">
      <el-form :inline="true" ref="form" :model="form" label-width="96px">
        <el-row>
          <el-form-item label="合作方名称：">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="合作方ID：">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.name" size="mini"></el-input>
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
          <el-button type="primary" size="mini">增加合作方</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-container">
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
              <el-button size="mini">编辑</el-button>
              <el-button size="mini">注销</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          startDate: '',
          endDate: '',
          status: '',
        },
        tableData: []
      }
    }
  }
</script>
<style scoped>
.form-container {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 3px;
  margin-bottom: 20px;
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
