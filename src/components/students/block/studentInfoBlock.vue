<template>
  <div class="student-info-block">
    <student-basic ref="studentBasic"></student-basic>
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
    props: ['student_id'],
    computed: {
      ...mapState({
        userName: state=>state.auth.userName
      })
    },
    methods: {
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
</style>

