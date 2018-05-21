<template>
  <div id="app">
        <main-header></main-header>
        <div class="container">
            <left></left>
          <div class="right">
                <router-view></router-view>  
          </div>
        </div>
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
.right {
  margin: 0 0 0 210px;
}
</style>

