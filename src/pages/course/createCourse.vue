<template>
<!-- 创建分类 -->
    <div class="createfication">
        <h4>新增课程分类</h4>
        <el-form  label-width="100px" class="demo-ruleForm">
            <el-form-item label="中文名称" prop="name">
                <el-input size="mini" v-model="form.subject_category_zh"></el-input>
            </el-form-item>
            <el-form-item label="英文名称" prop="name">
                <el-input size="mini" v-model="form.subject_category"></el-input>
            </el-form-item>
            <div class="chi-bebal">
                <el-form-item label="中文介绍" prop="desc" style="width:65%" class="zh-desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
            </div>
            <el-form-item label="英文介绍" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="课程封面" prop="region">
                <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">封面尺寸：XXX*XXX ；图片格式：PNG，JIF,JPG</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="价格" prop="desc">
              <el-input class="price" size="mini"></el-input>&nbsp;&nbsp;/节课 （只在创建三级分类时显示，显示价格字段）
            </el-form-item>
            <el-form-item label="状态">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="有效"></el-radio>
                <el-radio label="无效"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button size="mini" class="submit-button" type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button size="mini" @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  name: "createCourse",
  data() {
    return {
      form: {
        subject_category: '',
        subject_category_zh: '',
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",

      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      fileList2: [{url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 上传图片
    handleRemove(file, fileList) {
    console.log(file, fileList);
    },
    handlePreview(file) {
    console.log(file);
    }
  }
};
</script>
<style scoped>
  .createfication .el-input{
      width: 250px;
  }
  .createfication .el-textarea{
      width: 800px;
      height: 144px;
  }
  h4{
      margin: 10px 0 30px 30px;
  }
  .activity-state{
      width: 28%;
      float: right;
  }
  .zh-desc{
      float: left;
  }
  .chi-bebal{
      overflow: hidden;
  }
  .createfication .el-upload-list{
    width: 780px;
    height: 308px;
  }
  .createfication .price{
    width: 130px;
  }
  .el-button{
    padding: 12px 40px;
  }
  .submit-button{
    margin-left: 140px;
    margin-right: 50px;
  }
</style>
