<template>
  <div>
    <el-select v-model="form.curriculum_id" v-if="type>0" placeholder="一级分类" size="mini" @change="handleCurriculumChange">
      <el-option label="全部" value="" v-if="!hasOther"></el-option>
      <el-option label="其他" value="" v-if="hasOther"></el-option>
      <el-option v-for="(item,index) in curriculumLs" :key="index" :label="item.full_name" :value="item.id"></el-option>
    </el-select>
    <template v-if="form.curriculum_id !== ''">
      <el-select v-model="form.subject_category_id" v-if="type>1" placeholder="二级分类" size="mini" @change="handleCategoryChange">
        <el-option label="全部" value=""></el-option>
        <el-option v-for="(item,index) in subjectCategoryLs" :key="index" :label="item.subject_category" :value="item.id"></el-option>
      </el-select>
      <el-select v-model="form.subject_id" v-if="type>2" placeholder="三级分类" size="mini" @change="handleSubjectChange">
        <el-option label="全部" value=""></el-option>
        <el-option v-for="(item,index) in subjectLs" :key="index" :label="item.subject_name" :value="item.id"></el-option>
      </el-select>
    </template>
    <el-input v-if="form.curriculum_id === '' && hasOther" size="mini" placeholder="手动输入科目名" class="curriculum-input" v-model="form.subject_name"></el-input>
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
          subject_id: '',
          subject_name: ''
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
      },
      hasOther: {
        type: Boolean,
        default: false
      },
      type: {
        type: Number,
        default: 3
      }
    },
    created() {
      this.onInit();
    },
    watch: {
      'form.subject_name': {
        handler(v) {
          this.subChange([
            this.form.curriculum_id,
            this.form.subject_category_id,
            this.form.subject_id,
            v
          ])
        },
        deep: true
      }
    },
    methods: {
      onInit() {
        this.form = {
          curriculum_id: '',
          subject_category_id: '',
          subject_id: '',
          subject_name: ''
        };
        const [curriculum_id, subject_category_id, subject_id, subject_name] = this.value;
        this.getCurriculum().then(curriculumLs => {
          this.curriculumLs = curriculumLs;
          if(curriculum_id) {
            this.form.curriculum_id = curriculum_id;
            return this.getSubjectCategory(curriculum_id).then(subjectCategoryLs => {
              this.subjectCategoryLs = subjectCategoryLs;
            });
          }
        }).then(res => {
          if(subject_category_id) {
            this.form.subject_category_id = subject_category_id;
            return this.getSubject(subject_category_id).then(subjectLs => {
              this.subjectLs = subjectLs;
              subject_id && (this.form.subject_id = subject_id);
            });
          }
        }).then(_=>{
          this.form.subject_name = subject_name
        })
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
        if(id === 'other') {
          return;
        }
        this.form.subject_category_id = '';
        this.form.subject_id = '';
        const value = [];
        value[0] = id;
        value[1] = '';
        value[2] = '';
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
<style>
.curriculum-input {
  width: 200px;
}
</style>
