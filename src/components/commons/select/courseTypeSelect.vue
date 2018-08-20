<template>
<div :value="value">
  <el-cascader
    class="course-type-select"
    :options="typeLs"
    @active-item-change="getChildren"
    :props="props"
    :value="chose"
    @change="getChildren"
    size="mini"
  />
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
    subjectGet,
    subjectGetBySubjectid
  } from '@/api/subject';
  export default {
    name: 'courseTypeSelect',
    data() {
      return {
        typeLs: [],
        chose: [],
        props: {
          value: 'value',
          children: 'children'
        }
      }
    },
    created() {
      this.init()
    },
    props: ['value'],
    methods: {
      init() {
        this.getCurriculum().then(typeLs => {
          this.typeLs = typeLs;
          if(this.value) {
            this.getSubjectById(this.value).then(subject => {
              const {
                curriculum_id,
                subject_category_id
              } = subject
              const index1 = this.typeLs.findIndex(item => this.findIndexById(curriculum_id, item.value))
              let index2 = -1;
              let index3 = -1;
              this.chose = [];
              this.chose.push(this.typeLs[index1].value)
              this.getChildren(this.chose).then(_ => {
                index2 = this.typeLs[index1].children.findIndex(item => this.findIndexById(subject_category_id, item.value))
                this.chose.push(this.typeLs[index1].children[index2].value)
                return this.getChildren(this.chose)
              }).then(_=>{
                index3 = this.typeLs[index1].children[index2].children.findIndex(item => this.findIndexById(this.value, item.value))
                this.chose.push(this.typeLs[index1].children[index2].children[index3].value)
              })
            })
          }
        })
      },
      findIndexById(id, value) {
        const regExp = new RegExp(`^${id}:`);
        return regExp.test(value)
      },
      resolveValue(value) {
        if(!value) return null;
        const [id, name] = value.split(':');
        return {id, name}
      },
      getChildren([curriculum_value, subject_category_value, subject_value]) {
        if (subject_value) {
          const value = this.resolveValue(subject_value);
          this.$emit('input', value.id);
          this.$emit('change', value);
          return Promise.resolve()
        } else if (subject_category_value) {
          const index1 = this.typeLs.findIndex(item => item.value === curriculum_value);
          let subject_category_list = [];
          if (this.typeLs[index1] && this.typeLs[index1].children) {
            subject_category_list = this.typeLs[index1].children;
          }
          const subject_category = this.resolveValue(subject_category_value);
          const index2 = subject_category_list.findIndex(item => item.value === subject_category_value);
          return this.getSubject(subject_category.id).then(children => {
            subject_category_list[index2].children = children
          })
        } else if (curriculum_value) {
          const curriculum = this.resolveValue(curriculum_value);
          const index = this.typeLs.findIndex(item => item.value === curriculum_value);
          return this.getSubjectCategory(curriculum.id).then(children => {
            this.typeLs[index].children = children
          })
        } else {
          return Promise.resolve()
        }
      },
      getCurriculum() {
        const filter = this.$json2filter({});
        return curriculumGet(filter).then( resp=> {
          return resp.data.objects.map(item => ({
            value: `${item.id}:${item.full_name}`,
            label: item.full_name,
            children: []
          }))
        });
      },
      getSubjectCategory(curriculum_id) {
        const filter = this.$json2filter({curriculum_id: [curriculum_id]});
        return subjectCategoryGet(filter).then( resp=> {
          return resp.data.objects.map(item => ({
            value: `${item.id}:${item.subject_category}`,
            label: item.subject_category,
            children: []
          }));
        });
      },
      getSubject(subject_category_id) {
        const filter = this.$json2filter({subject_category_id: [subject_category_id]});
        return subjectGet(filter).then( resp => {
          return resp.data.objects.map(item => ({
            value: `${item.id}:${item.subject_name}`,
            label: item.subject_name
          }));
        });
      },
      getSubjectById(id) {
        return subjectGetBySubjectid(id).then(resp => {
          return resp.data
        })
      }
    }
  }
</script>
<style>
.course-type-select {
  width: 300px;
}
</style>

