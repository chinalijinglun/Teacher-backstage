<template>
  <div class="partner-edit">
    <div class="form-container">
      <el-form ref="form" label-width="96px">
          <el-form-item label="合作方名称：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="合作方介绍：">
            <el-input type="textarea" :rows="5" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="地址：">
            <el-input size="mini"></el-input>
          </el-form-item>
          <el-form-item label="Logo：">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
      </el-form>
    </div>
    <div class="btn-container">
      <el-button type="primary">提交</el-button>
      <el-button>返回</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style scoped>
.partner-edit .form-container {
  padding: 50px;
}
.partner-edit .form-container {
  max-width: 500px;
}
.btn-container {
  max-width: 500px;
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}
.avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
</style>
