<template>
  <div class="student-schedule-result">
    
  </div>
</template>
<script>
  import TeacherEvaluate from '@/model/TeacherEvaluate';
  import {
    studyScheduleBareGetById
  } from '@/api/study_schedule';

  export default {
    name: 'studentScheduleResult',
    data() {
      return {
        result: new TeacherEvaluate({})
      }
    },
    created() {
      this.study_schedule_id = this.$route.query.id;
    },
    methods: {
      getResult(id) {
        return studyScheduleBareGetById(id).then(resp => {
          if(resp.data.teacher_evaluation) {
            this.result = new TeacherEvaluate(JSON.parse(resp.data.teacher_evaluation))
          }
        })
      }
    }
  }
</script>
