<template>
  <el-row class="view-subject-select">
    <view-input :text="name" :width="width"></view-input>
  </el-row>
</template>
<script>
  import {
    subjectBareGetById
  } from '@/api/subject'
  export default {
    name: 'viewSubjectSelect',
    data() {
      return {
        name: ''
      }
    },
    watch: {
      id(id) {
        this.getName(id)
      }
    },
    created() {
      this.getName(this.id)
    },
    methods: {
      getName(id) {
        if(!id) return
        subjectBareGetById(id).then(resp=>{this.name=resp.data.subject_name_zh})
      }
    },
    props: {
      width: {
        type: String,
        default: '100px'
      },
      id: {
        default: ''
      }
    }
  }
</script>
