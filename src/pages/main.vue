<template>
   <el-container>
    <el-main>
      <selectCondition></selectCondition>
      <curricularTaxonomy></curricularTaxonomy>
    </el-main>
  </el-container>
</template>
<script>
import curricularTaxonomy from './courseManagement/classification.vue'
import selectCondition from '../components/selectionConditions.vue'
export default {
  name: 'app',
  components:{
      selectCondition,
      curricularTaxonomy
  },
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
   body{
    font-family: Roboto,Helvetica,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
   }  
   #main{
    position: absolute;
    height: 100%;
    width: 100%;
    min-width:1200px;
    overflow: hidden;
    min-width: 1200px;
   }
 
  .right-main{
    -ms-flex: 1;
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
    background:#fff;
    margin-bottom: 60px;
  }
  .maincon{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 60px;
  }
  input, textarea, keygen, select, button {
    font-family: inherit;
 }

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
