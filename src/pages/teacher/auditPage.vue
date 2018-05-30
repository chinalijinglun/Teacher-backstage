<template>
<!-- 审核页面 -->
    <div class="audit-page">
        <h3>审核记录</h3>
         <table style="width:100%">
             <thead>
                <tr>
                    <td>审核时间</td>
                    <td>审核人</td>
                    <td>审核记录</td>
                </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>
                         2017-09-16 15:32:04
                     </td>
                     <td>
                         Kira
                     </td>
                     <td>
                         不通过：教学经历描述过于简单
                     </td>
                 </tr>
             </tbody>
         </table>
         <div class="essential-information">
             教师基本信息内容
         </div>
         <div class="btn-box">
             <el-button type="primary" size="mini">审核通过</el-button>
             <el-button type="primary" size="mini">审核不通过</el-button>
             <el-button size="mini">返回</el-button>
         </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    h3{
        padding: 10px 0;
    }
    table {
        margin: 0 auto;
        border-collapse: collapse;/*关键代码*/
    }
    th,tr,td {
        text-align: center;
        border:1px solid #e1e1e1;
        
    }
    td{
        width: 30%;
        height: 30px;
    }
    .essential-information{
        width: 100%;
        min-height: 100px;
        line-height: 100px;
        text-align: center;
        margin-top: 15px;
        border: 1px solid #111;
    }
    .btn-box{
        width: 400px;
        margin: 0 auto;
        padding: 20px 0;
    }
</style>