<template>
  <!-- 创建分类 -->
  <div class="createfication">
    <h4>新增课程分类</h4>
    <el-form  label-width="100px" ref="form" :rules="rules" :model="form" class="demo-ruleForm">
      <el-form-item label="中文名称" prop="subject_name_zh">
        <el-input size="mini" v-model="form.subject_name_zh"></el-input>
      </el-form-item>
      <el-form-item label="英文名称" prop="subject_name">
        <el-input size="mini" v-model="form.subject_name"></el-input>
      </el-form-item>
      <div class="chi-bebal">
        <el-form-item label="中文介绍" prop="subject_desc_zh" style="width:65%" class="zh-desc">
          <el-input type="textarea" v-model="form.subject_desc_zh"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="英文介绍" prop="subject_desc">
        <el-input type="textarea" v-model="form.subject_desc"></el-input>
      </el-form-item>
      <el-form-item label="课程封面" prop="file_list">
        <el-upload
          class="upload-demo"
          :action="$baseApiUrl + '/upload'"
          :file-list="form.file_list"
          :limit="1"
          :on-success="onUploadSuccess"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">封面尺寸：XXX*XXX ；图片格式：PNG，JIF,JPG</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="form.state">
          <el-radio :label="$VALID_ENUM.VALID">有效</el-radio>
          <el-radio :label="$VALID_ENUM.INVALID">无效</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" class="submit-button" type="primary" @click="submitForm()">提交</el-button>
        <el-button size="mini" @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {
    subjectPost,
    subjectGetBySubjectid,
    subjectPutBySubjectid
  } from '@/api/subject';
  import { mapState } from 'vuex'

  export default {
    name: "addSubject",
    computed: {
      ...mapState({
        userName: store=>store.auth.userName
      })
    },
    created() {
      this.form.curriculum_id = this.$route.query.curriculum_id;
      this.form.subject_category_id = this.$route.query.subject_category_id;
      this.form.id = this.$route.query.id;
      if(this.form.id) {
        this.querySubject(this.form.id);
      }
    },
    data() {
      return {
        form: {
          id: '',
          curriculum_id: '',
          subject_category_id: '',
          subject_name: '',
          subject_name_zh: '',
          subject_desc: '',
          subject_desc_zh: '',
          cover_url: '',
          state: this.$VALID_ENUM.VALID,
          file_list: []
        },
        rules: {
          subject_name: [
            { required: true, message: "请输入英文名称", trigger: "blur" }
          ],
          subject_name_zh: [
            { required: true, message: "请输入中文名称", trigger: "blur" }
          ],
          subject_desc: [
            { required: true, message: "请输入英文介绍", trigger: "blur" }
          ],
          subject_desc_zh: [
            { required: true, message: "请输入中文介绍", trigger: "blur" }
          ],
          cover_url: [
            { required: true, message: "请上传封面图片", trigger: "change"}
          ]
        }
      };
    },
    methods: {
      addSubject(form){
        return subjectPost({
          ...form,
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userName
        }).then(resp => {
          this.$message('创建成功！');
          this.$router.push('/course/classification')
        });
      },
      updateSubject(id, form) {
        return subjectPutBySubjectid(id, {
          ...form,
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userName
        }).then(resp => {
          this.$message('更新成功！');
          this.$router.push('/course/classification')
        });
      },
      submitForm() {
        this.$refs.form.validate(valid => {
          if (valid) {
            const {
              id,
              curriculum_id,
              subject_category_id,
              subject_name,
              subject_name_zh,
              subject_desc,
              subject_desc_zh,
              cover_url,
              state
            } = this.form;
            if(id) {
              this.updateSubject(id, {
                id,
                curriculum_id,
                subject_category_id,
                subject_name,
                subject_name_zh,
                subject_desc,
                subject_desc_zh,
                cover_url,
                state
              });
            } else {
              this.addSubject({
                curriculum_id,
                subject_category_id,
                subject_name,
                subject_name_zh,
                subject_desc,
                subject_desc_zh,
                cover_url,
                state
              });
            }
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onUploadSuccess(e) {
        this.form.cover_url = e[0].download_file;
      },
      querySubject(id) {
        return subjectGetBySubjectid(id).then(resp => {
          for(let key in this.form) {
            this.form[key] = resp.data[key];
          }
          this.form.file_list = [{
            name: 'cover_img',
            url: this.$baseApiUrl + resp.data.cover_url
          }];
        });
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
