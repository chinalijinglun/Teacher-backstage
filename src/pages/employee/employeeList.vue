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
          <el-button size="mini" type="primary">添加员工</el-button>
        </el-row>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {

        }
      };
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
</style>

