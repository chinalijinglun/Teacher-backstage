<template>
  <el-row class="view-area-select">
    <view-input v-for="(item, index) in nameLs" :key="index" :text="item" :width="itemWidth"></view-input>
  </el-row>
</template>
<script>
  import {
    regionBareGetById
  } from '@/api/region'
  export default {
    name: 'viewAreaSelect',
    data() {
      return {
        nameLs: []
      }
    },
    watch: {
      areaLs(a) {
        const promiseArr = a.map((item, index) => regionBareGetById(item).then(resp=>resp.data));
        Promise.all(promiseArr).then(resp => {
          this.nameLs = resp.map(item => item.name_zh)
        })
      }
    },
    props: {
      itemWidth: {
        type: String,
        default: '100px'
      },
      areaLs: {
        type: Array,
        default: []
      }
    }
  }
</script>
<style>
.view-area-select .view-input {
  margin-right: 5px;
}
</style>
