<template>
  <div>
    <div class="student-info-block">
      <student-basic ref="studentBasic"></student-basic>
    </div>
    <el-row class="btn-container">
      <el-button @click="submit">修改</el-button>
    </el-row>
  </div>
</template>
<script>
  import {
    studentBareGetById,
    studentPutById
  } from '@/api/student';
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
      this.getStudentInfo(this.studentId)
    },
    computed: {
      ...mapState({
        userName: state=>state.auth.userName
      })
    },
    methods: {
      getStudentInfo(id) {
        return studentBareGetById(id).then(resp => {
          this.$refs.studentBasic.initData(resp.data);
        });
      },
      submit() {
        let form = this.$refs.studentBasic.getForm();
        form = this.$deleteEmptyProps(form);
        studentPutById(this.studentId, {
          updated_at: new Date(),
          updated_by: this.userName,
          ...form
        }).then(resp => {
          console.log(res);
        })
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

