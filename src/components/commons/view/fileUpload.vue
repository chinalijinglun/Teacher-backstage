<template>
  <div class="view-file-upload" :style="{width}">
    <p v-for="(item, index) in files" :key="index">
      <a :href="(preUrl||$baseApiUrl) + item.url" :download="item.name">{{item.name}}</a>
    </p>
    <p v-if="!files.length">暂未上传</p>
  </div>
</template>
<script>
  export default {
    name: 'viewFileUpload',
    props: {
      files: {
        type: Array,
        default: []
      },
      width: {
        type: String,
        default: '100px'
      },
      preUrl: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>
  .view-file-upload {
    overflow: hidden;
  }
  .view-file-upload p{
    line-height: 28px;
    height: 28px;
  }
</style>

