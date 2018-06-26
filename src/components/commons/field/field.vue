<template>
<div class="self-flat-feild">
  <span class="feild-name">{{name}}</span>
  <span class="feild-value">{{value}}</span>
  <span class="clear"></span>
</div>
</template>
<script>
  export default {
    name: 'flatFeild',
    props: ['name','value']
  }
</script>
<style>
.self-flat-feild {
  height: 30px;
}
.self-flat-feild span {
  line-height: 30px;
  font-size: 14px;
  font-family: Microsoft YaHei;    
  display: block;
  float: left;
}
.clear {
  float: none;
}
.self-flat-feild span {
  line-height: 30px;
  font-size: 14px;
  font-family: Microsoft YaHei;    
  display: block;
  float: left;
}
.self-flat-feild span.feild-name {
  color: #333;
  width: 100px;
  text-align: right;
}
.self-flat-feild span.feild-value {
  color: #666;
  text-align: left;
}
</style>

