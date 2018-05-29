<template>
  <div class="return-apply">
    <div class="apply-storey">

    </div>
    <el-form label-width="90px" label-position="top">
      <div class="apply-storey apply-reason">
        <el-form-item label="申请退款：">
          <el-input type="textarea" size="mini" :rows="5"></el-input>
        </el-form-item>
      </div>
      <div class="apply-storey return-class">
        <p class="apply-title">选择要退款课节：</p>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="className"
            label="课节名">
          </el-table-column>
          <el-table-column
            prop="time"
            label="上课时间">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini">选择</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="apply-storey return-form">
        <el-form-item label="退款金额：">
          <el-input size="mini"></el-input>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input type="textarea" size="mini" :rows="5"></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div class="apply-storey return-btn">
      <el-button type="primary">提交</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          className: 'Lesson 1 Exploring Space and Astronomy',
          time: '2018.04.27  13:00 - 13:50'
        },{
          className: 'Lesson 1 Exploring Space and Astronomy',
          time: '2018.04.27  13:00 - 13:50'
        }]
      };
    }
  }
</script>
<style scoped>
.apply-storey {
  width: 800px;
  padding: 0 30px;
  margin-top: 20px;
}
.apply-storey .apply-title {
  line-height: 30px;
  font-size: 14px;
  color: #606266;
  margin-bottom: 15px;
}
.el-input {
  width: 200px;
}
.apply-storey.return-btn {
  text-align: center;
}
</style>

