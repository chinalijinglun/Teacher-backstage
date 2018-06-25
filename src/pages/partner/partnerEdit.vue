<template>
  <!-- 创建分类 -->
  <div class="createfication">
    <h4>合作方编辑</h4>
    <el-form  label-width="100px" ref="form" :model="form" class="demo-ruleForm">
      <el-form-item label="合作方名称" prop="channel_name">
        <el-input size="mini" v-model="form.channel_name"></el-input>
      </el-form-item>
      <div class="chi-bebal">
        <el-form-item label="合作方介绍" prop="channel_desc" style="width:65%" class="zh-desc">
          <el-input type="textarea" v-model="form.channel_desc"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="联系人" prop="contact_name">
        <el-input size="mini" v-model="form.contact_name"></el-input>
      </el-form-item>
      <el-form-item label="联系人电话" prop="contact_tel">
        <el-input size="mini" v-model="form.contact_tel"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="contact_tel">
        <el-input size="mini" v-model="form.domain_address">
          <template slot="append">.vipustutor.com</template>
        </el-input>
      </el-form-item>
      <el-form-item label="logo" prop="file_list">
        <el-upload
          class="upload-demo"
          :action="$baseApiUrl + '/upload'"
          :file-list="form.file_list"
          :limit="1"
          :on-success="onUploadSuccess"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">尺寸：XXX*XXX ；图片格式：PNG，JIF,JPG</div>
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
    channelPost,
    channelBareGetById,
    channelPutById
  } from '@/api/channel';
  import { mapState } from 'vuex'

  export default {
    name: "addParter",
    computed: {
      ...mapState({
        userName: store=>store.auth.userName
      })
    },
    created() {
      this.form.id = this.$route.query.id;
      if(this.form.id) {
        this.queryInfo(this.form.id);
      }
    },
    data() {
      return {
        form: {
          id: '',
          channel_name: '',
          channel_desc: '',
          contact_tel: '',
          contact_name: '',
          domain_address: '',
          logo_url: '',
          state: 98,
          file_list: []
        }
      };
    },
    methods: {
      valid() {
        if(!this.form.channel_name){
          this.$message.error('请输入合作方名称！');
          return false;
        }
        if(!this.form.channel_desc){
          this.$message.error('请输入合作方描述！');
          return false;
        }
        if(!this.form.contact_name){
          this.$message.error('请输入联系人！');
          return false;
        }
        if(!this.form.contact_tel){
          this.$message.error('请输入联系人电话！');
          return false;
        }else if(!this.$MOBILE_REG_EXP_NATIONAL.test(this.form.contact_tel)) {
          this.$message.error('电话只能为数字！');
          return false;
        }
        if(!this.form.domain_address){
          this.$message.error('请输入合作方主页地址！');
          return false;
        }
        if(!this.form.logo_url){
          this.$message.error('请上传logo图！');
          return false;
        }
        return true;
      },
      updateChannel(id, form) {
        channelPutById(id, {
          ...form,
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userName
        }).then(resp => {
          this.$message('更新成功！');
          this.$router.push('/course/classification')
        });
      },
      addChannel(form) {
        channelPost({
          ...form,
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userName
        }).then(resp => {
          this.$message.success('创建成功！');
          this.$router.back();
        });
      },
      submitForm() {
        if (this.valid()) {
          const {
            id,
            channel_name,
            channel_desc,
            contact_name,
            contact_tel,
            domain_address,
            logo_url,
            state
          } = this.form;
          if(id) {
            this.updateChannel(id, {
              id,
              channel_name,
              contact_name,
              channel_desc,
              contact_tel,
              domain_address,
              logo_url,
              state
            });
          } else {
            this.addChannel({
              channel_name,
              contact_name,
              channel_desc,
              contact_tel,
              domain_address,
              logo_url,
              state
            });
          }
        }
      },
      resetForm(formName) {
        this.$router.back();
      },
      onUploadSuccess(e) {
        this.form.logo_url = e[0].download_file;
      },
      queryInfo(id) {
        return channelBareGetById(id).then(resp => {
          for(let key in this.form) {
            this.form[key] = resp.data[key];
          }
          this.form.file_list = [{
            name: 'cover_img',
            url: this.$baseApiUrl + resp.data.logo_url
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
