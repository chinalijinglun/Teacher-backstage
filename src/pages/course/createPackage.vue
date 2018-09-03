<template>
<!-- 创建课程包 -->
  <div class="create-package">
    <h4>课程包</h4>
    <el-form  label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-form-item prop="subject_id" label="课程分类">
          <course-type-select :disabled="!canEdit" ref="typeSelect" v-model="form.subject_id" @change="subjectChange"></course-type-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item prop="course_type" label="课程包类型">
          <el-select :disabled="!canEdit" v-model="form.course_type" placeholder="所有类型" size="mini">
            <el-option label="在线课" :value="$COURSE_TYPE.ONLINE"></el-option>
            <el-option label="公开课" :value="$COURSE_TYPE.PUBLIC"></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item prop="class_type" label="班型">
          <el-select :disabled="!canEdit" v-model="form.class_type" placeholder="所有班型" size="mini">
            <el-option v-for="(name, key) in $CLASS_TYPE" :label="name" :value="key" :key="key"></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item prop="class_type" label="项目">
          <el-select :disabled="!canEdit" v-model="form.project_type" placeholder="所有项目" size="mini">
            <el-option v-for="(name, key) in $PROJECT_TYPE" :label="name" :value="key" :key="key"></el-option>
          </el-select>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item prop="primary_teacher_id" label="教师">
          <el-button :disabled="!canEdit" type="text" @click="openChoseTeacherDialog">{{ form.teacher_name || '请选择教师' }}</el-button>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item prop="classes_number" label="课节数">
          <el-input :disabled="!canEdit" size="mini" v-model="form.classes_number" placeholder="请输入课节数" :maxlength="3"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item prop="price" label="基本价格">
          <el-input :disabled="!canEdit" size="mini" v-model="form.price" :maxlength="5" placeholder="请输入价格">
            <template slot="prepend">¥</template>
            <template slot="append">/节</template>
          </el-input>
        </el-form-item>
      </el-row>
      <el-form-item label="状态" prop="state" class="">
        <el-radio-group v-model="form.state">
          <el-radio :label="$VALID_ENUM.VALID">有效</el-radio>
          <el-radio :label="$VALID_ENUM.INVALID">无效</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item class="submit-button">
        <el-button type="primary" @click="handlerSubmit" size="mini">提交</el-button>
        <el-button size="mini" @click="$router.back()">返回</el-button>
      </el-form-item>
    </el-form>
    <teacher-dialog :visible.sync="showTeacherDialog" @chose="handlerChoseTeacher"></teacher-dialog>
  </div>
</template>

<script>
  import {
    coursePost,
    coursePutByCourseId,
    courseBareGetByCourseId
  } from "@/api/course";
  import {
    teacherGetBareByTeacherid
  } from '@/api/teacher';
  import {
    orderBareGet
  } from '@/api/order';
  import { mapState } from 'vuex'

  export default {
    data(){
      return{
        showTeacherDialog: false,
        canEdit: false,
        form: {
          id: '',
          subject_id: '',
          course_type: '',
          class_type: '',
          project_type: '',
          state: this.$VALID_ENUM.VALID,
          teacher_name: '',
          primary_teacher_id: '',
          classes_number: '',
          course_name_zh: '',
          course_name: '',
          price: ''
        },
        rules: {
          
        }
      }
    },
    created() {
      this.form.id = this.$route.query.id;
      if(this.form.id) {
        this.getCourseById(this.form.id)
        this.hasOrder(this.form.id).then(res => this.canEdit = !res)
      } else {
        this.canEdit = true
      }
    },
    computed: {
      ...mapState({
        userName: store=>store.auth.userName
      })
    },
    methods: {
      async hasOrder(id) {
        const filter = this.$json2filter({
          course_id: [id]
        })
        const {data} = await orderBareGet(filter)
        return !!data.num_results
      },
      subjectChange({id, name, name_zh}) {
        this.form.course_name = name;
        this.form.course_name_zh = name_zh;
      },
      getCourseById(id) {
        courseBareGetByCourseId(id).then(resp=> {
          for(let key in this.form) {
            resp.data[key]&&(this.form[key] = resp.data[key]);
          }
          if(resp.data.primary_teacher_id) {
            teacherGetBareByTeacherid(resp.data.primary_teacher_id).then(resp => {
              this.form.teacher_name = resp.data.username;
            })
          }
          this.$nextTick(_=>{
            this.$refs.typeSelect.init();
          })
        })
      },
      valid() {
        if(!this.form.subject_id) {
          this.$message.error('请选择课程分类！');
          return false;
        }
        if(!this.form.course_name) {
          this.$message.error('请输入课程英文名！');
          return false;
        }
        if(!this.form.course_type) {
          this.$message.error('请选择课程包类型！');
          return false;
        }
        if(!this.form.class_type) {
          this.$message.error('请选择班型！');
          return false
        }
        if(!this.form.primary_teacher_id) {
          this.$message.error('请选择教师！');
          return false;
        }
        if(!this.form.classes_number) {
          this.$message.error('请输入课节数！');
          return false;
        }
        if(!this.form.price) {
          this.$message.error('请输入课程价格！');
          return false;
        }
        return true;
      },
      openChoseTeacherDialog() {
        this.showTeacherDialog = true;
      },
      handlerChoseTeacher(teacher) {
        this.form.primary_teacher_id = teacher.id;
        this.form.teacher_name = teacher.username;
      },
      addCourse(form) {
        return coursePost(form).then(resp => {
          this.$message.success('创建成功');
        });
      },
      updateCourse(form) {
        return coursePutByCourseId(form.id, form).then(resp => {
          this.$message.success('更新成功');
        });
      },
      handlerSubmit() {
        this.submitFn().then(_=>{
          this.$router.push('/course/couresPackage');
        })
      },
      submitFn() {
        if(this.valid()) {
          const {
            id,
            subject_id,
            course_type,
            class_type,
            state,
            primary_teacher_id,
            classes_number,
            course_name,
            course_name_zh,
            price
          } = this.form;
          if(id) {
            return this.updateCourse({
              id,
              subject_id,
              course_type,
              class_type,
              state,
              primary_teacher_id,
              classes_number,
              price,
              course_name,
              course_name_zh,
              delete_flag: 'IN_FORCE',
              created_at: new Date(),
              updated_at: new Date(),
              updated_by: this.userName
            });
          }
          return this.addCourse({
            subject_id,
            course_type,
            class_type,
            state,
            primary_teacher_id,
            classes_number,
            price,
            course_name,
            course_name_zh,
            delete_flag: 'IN_FORCE',
            created_at: new Date(),
            updated_at: new Date(),
            updated_by: this.userName
          });
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
