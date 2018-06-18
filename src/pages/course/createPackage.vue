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
          <el-select v-model="form.course_type" placeholder="所有类型" size="mini">
            <el-option label="在线课" :value="$COURSE_TYPE.ONLINE"></el-option>
            <el-option label="公开课" :value="$COURSE_TYPE.PUBLIC"></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="班型">
          <el-select v-model="form.class_type" placeholder="所有班型" size="mini">
            <el-option label="1 v 1" :value="$CLASS_TYPE['1v1']"></el-option>
            <el-option label="1 v 4" :value="$CLASS_TYPE['1v4']"></el-option>
            <el-option label="1 v n" :value="$CLASS_TYPE['1vn']"></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="教师">
          <el-button type="text" @click="openChoseTeacherDialog">{{ form.teacher_name || '请选择教师' }}</el-button>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="课节数">
          <el-input size="mini" v-model="form.classes_number" placeholder="请输入课节数" :maxlength="3"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="基本价格">
          <el-input size="mini" v-model="form.price" :maxlength="5" placeholder="请输入价格">
            <template slot="prepend">¥</template>
            <template slot="append">/节</template>
          </el-input>
        </el-form-item>
      </el-row>
      <el-form-item label="状态" class="">
        <el-radio-group v-model="form.state">
          <el-radio :label="$VALID_ENUM.VALID">有效</el-radio>
          <el-radio :label="$VALID_ENUM.INVALID">无效</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="submit-button">
        <el-button type="primary" @click="handlerSubmit" size="mini">提交</el-button>
        <el-button size="mini" @click="resetForm('ruleForm')">返回</el-button>
      </el-form-item>
    </el-form>
    <teacher-dialog :visible.sync="showTeacherDialog" @chose="handlerChoseTeacher"></teacher-dialog>
  </div>
</template>

<script>
  import {
    coursePost
  } from "@/api/course";
  import { mapState } from 'vuex'

  export default {
    data(){
      return{
        showTeacherDialog: false,
        form: {
          classLs: [],
          course_type: '',
          class_type: '',
          state: this.$VALID_ENUM.VALID,
          teacher_name: '',
          assist_teacher_id: '',
          classes_number: '',
          price: ''
        }
      }
    },
    computed: {
      ...mapState({
        userName: store=>store.auth.userName
      })
    },
    methods: {
      openChoseTeacherDialog() {
        this.showTeacherDialog = true;
      },
      handlerChoseTeacher(teacher) {
        this.form.assist_teacher_id = teacher.id;
        this.form.teacher_name = teacher.username;
      },
      handlerSubmit() {
        const {
          classLs,
          course_type,
          class_type,
          state,
          assist_teacher_id,
          classes_number,
          price
        } = this.form;
        coursePost({
          subject_id: classLs[2],
          course_type,
          class_type,
          state,
          assist_teacher_id,
          classes_number,
          price,
          course_name: 'test',
          delete_flag: 'IN_FORCE',
          created_at: new Date(),
          updated_at: new Date(),
          updated_by: this.userName
        }).then(resp => {
          console.log(resp);
        })
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
