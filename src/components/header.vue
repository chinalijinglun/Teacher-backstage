<template>
  <div class="header">
    <div class="icon-img">
      <img src="../assets/logo.png" />
    </div>
    <div class="login">
      <el-menu class="el-menu-demo" mode="horizontal"
      background-color="#3c8dbc"
      text-color="#fff"
      active-text-color="#fff">
      <el-submenu index="2">
        <template slot="title">Kira</template>
        <el-menu-item index="2-1" @click="toModify">修改密码</el-menu-item>
        <el-menu-item index="2-2" @click="toLogout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mainHeader',
    methods: {
      toModify() {
        this.$store.dispatch('auth/logout')
        this.$router.push('/reset')
      },
      toLogout() {
        this.$store.dispatch('auth/logout')
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="" scoped>
.header {
  background-color: #3c8dbc;
  width: 100%;
  height: 50px;
}
.icon-img {
  width: 40px;
  height: 40px;
  margin: 5px 0 0 10px;
  float: left;
}
.icon-img img {
  width: 40px;
  height: 40px;
}
.login {
  width: 110px;
  float: right;
}
.login ul {
  background-color: #3c8dbc;
}
</style>


