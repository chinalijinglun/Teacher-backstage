<template>
  <div id="app">
    <el-container>
      <el-header>
        <main-header></main-header>
      </el-header>
      <el-container>
        <el-aside width="201px"> 
          <navigation></navigation>
        </el-aside>
        <el-main> 
          <div class="right">
            <router-view></router-view>  
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {
  apiMenuGet
} from '@/api/menu';
export default {
  created() {
    apiMenuGet().then(resp => {
      console.log(resp);
    });
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
ul,li,ol {
  list-style: none;
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
  min-width: 1200px;
  font-size: 14px;
}
.el-tree-node__content {
  line-height: 36px;
  height: 36px;
  cursor: pointer;
}
.createfication .el-textarea textarea {
  height: 144px;
}
.createfication .el-upload-list {
  width: 260px;
  height: 200px;
}
.createfication .el-upload-list li {
  width: 260px;
  height: 200px;
}
.createfication .el-upload-list li img {
  margin-left: -72px;
  width: 220px;
  height: 180px;
}
</style>

