<template>
  <span class="view-input" :style="{
    width
  }">{{text}}</span>
</template>
<script>
  export default {
    name: 'viewInput',
    props: {
      width: {
        type: String,
        default: '100px'
      },
      text: {
        default: '未填写'
      }
    }
  }
</script>
<style>
.view-input {
  display: inline-block;    
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  height: 28px;
  line-height: 28px;
  color: #606266; 
  padding: 0 15px;  
  box-sizing: border-box;
}
</style>
