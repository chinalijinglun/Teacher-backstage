<template>
<div class="left">
  <el-aside  style="background-color: #545c64;width: 201px;height:100%">
    <el-menu  background-color="#545c64"
      text-color="#fff" unique-opened>
      <el-submenu v-for="(item,index) in menulist" :index='index+""' :key='index'>
        <template slot="title">{{item.name}}</template>
        <el-menu-item-group v-for="(items,subindex) in item.children" :key="index + '-' +subindex">
          <el-menu-item :index='subindex+""' @click="$router.push(items.parent_url + '/' + items.url)" class="nav-link">{{items.menu_name_zh}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  </div>
</template>

<script>
import {authMenu} from '@/api/auth'
export default {
  name: 'navigation',
  data(){
    return {
      menulist: "",
    }
  },
  created(){
    this.getAuthMenu()
  },
  methods: {
    getAuthMenu() {
      return authMenu().then(resp => {
        this.menulist = this.groupBy(resp.data.objects)
      });
    },
    groupBy(ls = []) {
      const o = {}, retArr = [];
      ls.forEach(item => {
        o[item.parent_id]||(o[item.parent_id] = {name: item.parent_name_zh})
        o[item.parent_id].children?(o[item.parent_id].children.push(item)):(o[item.parent_id].children = [item])
      })
      for(let k in o) {
        retArr.push({
          id: k,
          ...o[k]
        })
      }
      console.log(retArr);
      return retArr;
    }
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
.el-menu-item.nav-link.is-active {
  background-color: #3c8dbc !important;
}
</style>
