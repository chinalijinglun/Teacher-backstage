<template>
  <div>
    <div class="student-info-block">
      <student-basic-edit ref="studentBasicEdit"></student-basic-edit>
    </div>
    <el-row class="btn-container">
      <el-button @click="submit" type="primay">提交</el-button>
      <el-button @click="cancel">返回</el-button>
    </el-row>
  </div>
</template>
<script>
  import {
    studentBareGetById,
    studentPutById
  } from '@/api/student';
  import {
    studentSubjectType2GetByStudentId,
    studentSubjectPost,
    studentSubjectDeleteById
  } from '@/api/student_subject';
  import { mapState } from 'vuex';
  import studentBasicEdit from '../detailEdit/basic';

  export default {
    data() {
      return {
        form: {
          requirements: '',
          requirements_zh: ''
        }
      }
    },
    props: ['studentId'],
    created() {
      this.getStudentInfo(this.studentId);
      this.getSubjectInfo(this.studentId);
    },
    computed: {
      ...mapState({
        userName: state=>state.auth.userName
      })
    },
    methods: {
      getSubjectInfo(id) {
        return studentSubjectType2GetByStudentId(id).then(objects => {
          return this.$refs.studentBasicEdit.initSubject(objects);
        })
      },
      addSubject(form) {
        return studentSubjectPost({
          ...form,
          subject_type: 2,
          student_id: this.studentId,
          created_at: new Date(),
          updated_by: this.userName,
          updated_at: new Date(),
          optional: 2,
          delete_flag: 1
        })
      }, 
      removeSubject(id) {
        return studentSubjectDeleteById(id)
      }, 
      getStudentInfo(id) {
        return studentBareGetById(id).then(resp => {
          this.$refs.studentBasicEdit.initData(resp.data);
        });
      },
      updatedBasic() {
        let form = this.$refs.studentBasicEdit.getForm();
        form = this.$deleteEmptyProps(form);
        return studentPutById(this.studentId, {
          updated_at: new Date(),
          updated_by: this.userName,
          ...form
        })
      },
      submit() {
        const {addLs, removeLs} = this.$refs.studentBasicEdit.getSubject();
        const addPromiseLs = addLs.map(item => this.addSubject(item));
        const removePromiseLs = removeLs.map(item => this.removeSubject(item));
        Promise.all([
          ...addPromiseLs,
          ...removePromiseLs,
          this.updatedBasic()
        ]).then(resp => {
          this.cancel()
        })
      },
      cancel() {
        var { path } = this.$route;
        this.courseBlk = '';
        const query = {
          ...this.$route.query,
          updated: ''
        };
        this.$router.replace({ path, query });
      }
    },
    components: {
      studentBasicEdit
    }
  }
</script>
<style scoped>
.student-info-block {
  border: 1px solid #eee;
  border-radius: 4px;
}
.btn-container {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>

