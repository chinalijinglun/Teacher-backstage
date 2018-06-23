<template>
  <div>
    <el-select v-model="form.curriculum_id" placeholder="一级分类" size="mini" @change="handleCurriculumChange">
      <el-option label="全部" value=""></el-option>
      <el-option v-for="(item,index) in curriculumLs" :key="index" :label="item.full_name" :value="item.id"></el-option>
    </el-select>
    <el-select v-model="form.subject_category_id" placeholder="二级分类" size="mini" @change="handleCategoryChange">
      <el-option label="全部" value=""></el-option>
      <el-option v-for="(item,index) in subjectCategoryLs" :key="index" :label="item.subject_category" :value="item.id"></el-option>
    </el-select>
    <el-select v-model="form.subject_id" placeholder="三级分类" size="mini" @change="handleSubjectChange">
      <el-option label="全部" value=""></el-option>
      <el-option v-for="(item,index) in subjectLs" :key="index" :label="item.subject_name" :value="item.id"></el-option>
    </el-select>
  </div>
</template>

<script>
  import {
    subjectCategoryGet
  } from '@/api/subject_category';
  import {
    curriculumGet
  } from '@/api/curriculum';
  import {
    subjectGet
  } from '@/api/subject';

  export default {
    name: 'curriculumSelect',
    data() {
      return {
        form: {
          curriculum_id: '',
          subject_category_id: '',
          subject_id: ''
        },
        curriculumLs: [],
        subjectCategoryLs: [],
        subjectLs: []
      };
    },
    props: {
      value: {
        type: Array,
        default: []
      }
    },
    created() {
      this.onInit();
    },
    methods: {
      onInit() {
        this.form = {
          curriculum_id: '',
          subject_category_id: '',
          subject_id: ''
        };
        console.log(this.value);
        const [curriculum_id, subject_category_id, subject_id] = this.value;
        this.getCurriculum().then(curriculumLs => {
          this.curriculumLs = curriculumLs;
          if(curriculum_id) {
            this.form.curriculum_id = curriculum_id;
            this.getSubjectCategory(curriculum_id).then(subjectCategoryLs => {
              this.subjectCategoryLs = subjectCategoryLs;
              if(subject_category_id) {
                this.form.subject_category_id = subject_category_id;
                this.getSubject(subject_category_id).then(subjectLs => {
                  this.subjectLs = subjectLs;
                  subject_id && (this.form.subject_id = subject_id);
                });
              }
            });
          }
        });
      },
      getCurriculum() {
        const filter = this.$json2filter({});
        return curriculumGet(filter).then( resp=> {
          return resp.data.objects;
        });
      },
      getSubjectCategory(curriculum_id) {
        const filter = this.$json2filter({curriculum_id});
        return subjectCategoryGet(filter).then( resp=> {
          return resp.data.objects;
        });
      },
      getSubject(subject_category_id) {
        const filter = this.$json2filter({subject_category_id});
        return subjectGet(filter).then( resp => {
          return resp.data.objects;
        });
      },
      handleCurriculumChange(id) {
        this.form.subject_category_id = '';
        this.form.subject_id = '';
        const value = [];
        value[0] = id;
        this.getSubjectCategory(id).then( subjectCategoryLs => {
          this.subjectCategoryLs = subjectCategoryLs;
        });
        this.subChange(value);
      },
      handleCategoryChange(id) {
        this.form.subject_id = '';
        const value = [...this.value];
        value[1] = id;
        value[2] = '';
        this.getSubject(id).then( subjectLs => {
          this.subjectLs = subjectLs;
        });
        this.subChange(value);
      },
      handleSubjectChange(id) {
        const value = [...this.value];
        value[2] = id;
        this.subChange(value);
      },
      subChange(value) {
        this.$emit('input', value);
      }
    }
  }
</script>
