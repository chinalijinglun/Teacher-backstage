<template>
  <router-view></router-view>
</template>
<script>
export default {
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
</style>

