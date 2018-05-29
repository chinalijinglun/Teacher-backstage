<template>
  <div class="create-order">
    <p class="title">创建订单</p>
    <div class="form-container">
      <el-form class="demo-form-inline" label-width="110px">
        <el-row>
          <el-form-item label="是否已有课程包">  
            <el-radio-group>
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程类型">
            <el-select placeholder="课程类型" size="mini">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="班型">
            <el-select placeholder="班型" size="mini">
              <el-option label="1v1" value="shanghai"></el-option>
              <el-option label="1v2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程">
            <el-select placeholder="课程" size="mini">
              <el-option label="1v1" value="shanghai"></el-option>
              <el-option label="1v2" value="beijing"></el-option>
            </el-select>
            <el-select placeholder="课程" size="mini">
              <el-option label="1v1" value="shanghai"></el-option>
              <el-option label="1v2" value="beijing"></el-option>
            </el-select>
            <el-select placeholder="课程" size="mini">
              <el-option label="1v1" value="shanghai"></el-option>
              <el-option label="1v2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="项目">
            <el-select placeholder="项目" size="mini">
              <el-option label="1v1" value="shanghai"></el-option>
              <el-option label="1v2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课节数">
            <el-input size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="教师">
            <el-input size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="学生">
            <el-input size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程包价格">
            <el-input size="mini">
              <template slot="prepend">￥</template>
              <template slot="append">/节课</template>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="订单价格">
            <el-input size="mini">
              <template slot="prepend">￥</template>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="备注">
            <el-input size="mini" type="textarea" :rows="5"></el-input>
          </el-form-item>
        </el-row>
        <el-row class="btn-container">
          <el-button type="primary">提交</el-button>
          <el-button>返回</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.create-order {
  padding: 0 50px;
}
.create-order .title {
  line-height: 30px;
  font-size: 16px;
  border-bottom: 1px #eee solid;
  margin-bottom: 15px;
}
.el-input {
  width: 200px;
}
.el-textarea {
  width: 600px;
}
.btn-container {
  margin: 20px 0;
  width: 600px;
  text-align: center;
}
</style>

