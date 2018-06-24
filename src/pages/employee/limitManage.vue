<template>
  <el-row class="limit-manage">
      <el-col :span="12">
        <div class="list-container">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
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
                <el-button size="mini" type="primary">查询</el-button>
              </el-form-item>
            </el-row>
          </el-form>
        </div>
        <div class="list-container">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="序号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    }
  }
</script>
<style scoped>
  .el-col {
    padding: 20px;
  }
</style>

