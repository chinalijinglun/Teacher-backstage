<template>
  <div id="app">
    <el-container>
  <el-header><main-header></main-header></el-header>
  <el-container>
    <el-aside style="width: 201px;"> <left></left></el-aside>
    <el-main> <div class="right">
                <router-view></router-view>  
          </div></el-main>
  </el-container>
</el-container>
  </div>
</template>
<script>
import mainHeader from "./components/header.vue";
import left from "./components/navigation.vue";
export default {
  components: {
    mainHeader,
    left
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app,
.container,
html,
body {
  width: 100%;
  height: 100%;
}
.app {
  overflow: hidden;
}
.el-container {
  min-height: 100%;
}
.el-header {
  padding: 0;
  height: 50px !important;
}
.el-main {
  padding: 10px;
}
</style>

