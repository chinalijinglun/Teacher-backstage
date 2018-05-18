<template>
  <el-aside  style="background-color: rgb(238, 241, 246);width: 201px;">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu v-for="(item,index) in menulist" :index="''+(index+1)">
        <template slot="title">{{item.name}}</template>
        <el-menu-item-group v-for="(items,subindex) in item.children">
          <el-menu-item :index="''+(index+1)+'-'+(subindex+1)">{{items.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
  </el-aside>
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
        this.axios.get('http://localhost:8080/static/left.json').then(function(data){
            _that.menulist = data.data
            console.log(data.data)
        })  }

}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-menu-item-group{
    height: 45px;
  }
  .el-aside {
    color: #333;
    border-right: solid 1px #e6e6e6;
    overflow-x: hidden
  }
  .el-submenu{
    width: 200px;
  }
  .el-menu{
    width: 199px;
  }
  .el-menu li{
    margin-left: 0;
  }
  .el-menu-item{
    padding-left:60px!important;
    padding-right: 0; 
    margin-right: 0; 
  }
  
</style>
