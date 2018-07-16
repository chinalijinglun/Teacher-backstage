<template>
<div class="images-list">
  <ul class="img-upload-ul">
    <li v-for="(image,index) in images" :key="index" class="img-upload-li">
      <img :src="image?(preUrl||$baseApiUrl)+image : ''" />
    </li>
  </ul>
</div>
</template>
<script>
  export default {
    name: 'viewImage',
    props: {
      images: {
        type: Array,
        default: []
      },
      preUrl: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style>

.images-list {
  float: left;
}
.img-upload-li {
  display: inline-block;
  text-align: center;
  line-height: 90px;
  width: 90px;
  height: 90px;
  border: 1px solid #c0ccda;
  overflow: hidden;
  background: #fff;
  position: relative;
  margin-right: 4px;
  border-radius: 4px;
}
.img-upload-li img {
  width: 100%;
  height: 100%;
}
</style>
