<template>
  <div>
    <div class="student-info-block">
      <student-basic ref="studentBasic"></student-basic>
    </div>
    <el-row class="btn-container">
      <el-button @click="toEdit" type="primay">修改</el-button>
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
  import studentBasic from '../detail/basic';

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
          return this.$refs.studentBasic.initSubject(objects);
        })
      },
      getStudentInfo(id) {
        return studentBareGetById(id).then(resp => {
          this.$refs.studentBasic.initData(resp.data);
        });
      },
      toEdit() {
        var { path } = this.$route;
        this.courseBlk = '';
        const query = {
          ...this.$route.query,
          updated: 1
        };
        this.$router.replace({ path, query });
      }
    },
    components: {
      studentBasic
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

