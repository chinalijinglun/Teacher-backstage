<template>
  <div class="header">
    <div class="icon-img">
      <img src="../assets/logo.png" />
    </div>
    <div class="logoin">
      <el-menu class="el-menu-demo" mode="horizontal">
      <el-submenu index="2">
        <template slot="title">Kira</template>
        <el-menu-item index="2-1">修改密码</el-menu-item>
        <el-menu-item index="2-2">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
  </div>
</template>

<style lang="" scoped>
.header {
  background-color: #20a0ff;
  width: 100%;
  height: 60px;
}
.icon-img{
   width:110px;
   height:40px;
   margin: 10px;
   float: left;
}
.icon-img img{
  width: 100%;
  height: 100%;
}
.logoin{
  width: 110px;
  float: right;
}
.logoin ul{
  background-color: #20a0ff;
}


</style>


