<template>
  <el-dialog
    title="学生需求"
    :visible.sync="dialogVisible"
    @open="handlerOpen"
    @close="handlerClose"
    class="requirements-dialog"
    width="30%">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-row>
        <el-form-item label="中文" prop="content_zh">
          <el-input type="textarea" :row="3" v-model="form.content_zh"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="英文" prop="content_zh">
          <el-input type="textarea" :row="3" v-model="form.content"></el-input>
        </el-form-item>
      </el-row>
    </el-form>
    <el-row>
      <el-button size="mini" type="primary" @click="submit">提交</el-button>
      <el-button size="mini" @click="toClose">关闭</el-button>
    </el-row>
  </el-dialog>
</template>
<script>
  import { mapState } from 'vuex';
  import {
    studentRequirementsBareGetById,
    studentRequirementsPutById,
    studentRequirementsPost
  } from '@/api/student_requirements';
  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'requirementsDialog',
    computed: {
      ...mapState({
        userName: state=>state.auth.userName,
        userId: state=>state.auth.userId
      })
    },
    data() {
      return {
        form: {
          content: '',
          content_zh: ''
        },
        rules: {
          content_zh: [
            {required: true, message: '请输入学生需求', trigger: 'blur'}
          ]
        }
      };
    },
    props: ['requirementsId', 'studentId'],
    methods: {
      add() {
        console.log(this.form)
        return studentRequirementsPost({
          ...this.form,
          student_id: this.studentId,
          updated_at: new Date(),
          created_at: new Date(),
          delete_flag: 1,
          updated_by: this.userName,
          translate_by: this.userId,
          translate_at: new Date()
        });
      },
      update() {
        return studentRequirementsPutById(this.requirementsId, {
          ...this.form,
          updated_by: this.userName,
          translate_by: this.userId,
          updated_by: this.userName,
          translate_at: new Date()
        })
      },
      getReuqirements(id) {
        return studentRequirementsBareGetById(id).then(resp => {
          this.form.content = resp.data.content;
          this.form.content_zh = resp.data.content_zh;
          this.form.student_id = resp.data.student_id;
        });
      },
      submit() {
        this.$refs.form.validate(async (valid) => {
          if(valid) {
            let res;
            if(this.requirementsId) {
              res = await this.update()
            } else {
              res = await this.add()
            }
            this.toClose();
            return res;
          }
        })
      },
      handlerOpen() {
        if(this.requirementsId) {
          this.getReuqirements(this.requirementsId);
        }
      },
      handlerClose() {
        this.form = {
          student_id: '',
          updated_by: this.userName,
          translate_by: this.userName,
          content: '',
          content_zh: ''
        }
        this.$emit('onClose')
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style scoped>
  ul,li,ol {
    list-style: none;
  }
  .conselor-list {
    overflow: hidden;
  }
  .conselor-ul {
    width: 100%;
  }
  .conselor-ul li{
    width: 50%;
    float: left;
    line-height: 30px;
  }
  .btn-container {
    margin-top: 20px;
    text-align: center;
  }
</style>
