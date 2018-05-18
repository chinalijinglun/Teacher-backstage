<template>
  <div id="app">
     <headers></headers>
    <div class="maincon" :span="24">
      <el-container style="height: 100%; border: 1px solid #eee">
        <navigation></navigation>
        <router-view></router-view>
      </el-container>
  </div>
</div>
</template>
<script>
import headers from './components/header.vue'
import navigation from './components/navigation.vue'
export default {
  name: 'app',
  components:{
      navigation,
      headers
  }
}
</script>
<style>
  .maincon{
    position: absolute;
    height: 100%;
    width: 100%;
    min-width:1200px;
    overflow: hidden;
    min-width: 1200px;
   }
</style>

