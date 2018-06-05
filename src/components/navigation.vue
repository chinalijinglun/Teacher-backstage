<template>
<div class="left">
  <el-aside  style="background-color: #545c64;width: 201px;height:100%">
    <el-menu  background-color="#545c64"
      text-color="#fff" unique-opened>
      <el-submenu v-for="(item,index) in menulist" :index='index+""' :key='index'>
        <template slot="title">{{item.name}}</template>
        <el-menu-item-group v-for="(items,subindex) in item.children" :key='subindex'>
          <router-link :key='subindex' :index='subindex+""' :to='item.parent+"/"+items.path'>
            <el-menu-item class="nav-link">{{items.name}}</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </el-aside>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data(){
    return {
      menulist: "",
    }
  },
  created(){
    var _that = this
    this.$axios.get('/static/left.json').then(function(data){
      _that.menulist = data.data;
    })  
  }
}
</script>

<style scoped>
.left{
  float: left;
  height: 100%;
}
.left .el-menu{
  border:none!important;
}
.nav-link{
  color: white;
  text-decoration: none;
}
.left .el-menu-item.is-active{
  background-color: #3c8dbc;
}
</style>
