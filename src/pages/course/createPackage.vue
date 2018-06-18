<template>
<!-- 创建课程包 -->
  <div class="create-package">
    <h4>课程包</h4>
    <el-form  label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-form-item label="课程分类">
          <curriculum-select v-model="form.classLs"></curriculum-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="课程包类型">
          <el-select v-model="form.status" placeholder="所有类型" size="mini">
            <el-option label="在线课" value=""></el-option>
            <el-option label="公开课" value=""></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="班型">
          <el-select v-model="form.status" placeholder="所有班型" size="mini">
            <el-option label="1 V 1" value=""></el-option>
            <el-option label="1 V 2" value=""></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="项目">
          <el-select v-model="form.status" placeholder="所有项目" size="mini">
            <el-option label="美高项目" value=""></el-option>
            <el-option label="学分项目" value=""></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="教师">
          <el-input size="mini"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="课节数">
          <el-select v-model="form.status" placeholder="选择课节数" size="mini">
            <el-option label="1" value=""></el-option>
            <el-option label="2" value=""></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="基本价格">
          ¥&nbsp;<el-input size="mini"></el-input>&nbsp;&nbsp;/节课
        </el-form-item>
      </el-row>
      <el-form-item label="状态" class="">
        <el-radio-group v-model="resource">
          <el-radio label="有效"></el-radio>
          <el-radio label="无效"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="submit-button">
        <el-button type="primary" size="mini">提交</el-button>
        <el-button size="mini" @click="resetForm('ruleForm')">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        resource:'',
        type: {
          curriculum_id: '',
          subject_category_id: '',
          subject_id: ''
        },
        form: {
          status: "",
          status2: "",
          status3: "",
          classLs: []
        }
      }
    }
  }
</script>

<style scoped>
h4{
  margin: 10px 0 30px 30px;
}
.el-input{
  width: 173px;
}
.submit-button button{
  padding: 12px 50px;
}
</style>
