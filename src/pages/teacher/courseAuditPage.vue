<template>
<!--课件审核页面 -->
    <div class="course-audit-page">
        <h4>审核记录</h4>
        <table style="width:100%" class="tables">
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
         <h4>课件信息</h4>
         <div class="course-mess">
             <table>
                 <tr>
                     <td width=130px>课节名称</td>
                     <td>Lesson 2 Exploring Space and Astronomy</td>
                 </tr>
                <tr>
                    <td>所属课程</td>
                    <td>ESL英语综合提升中级</td>
                </tr>
                <tr>
                    <td>授课教师</td>
                    <td>Vivian</td>
                </tr>
                <tr>
                    <td>课件上传时间</td>
                    <td>2018-05-25 11:25:30</td>
                </tr>
                <tr>
                    <td>上课时间</td>
                    <td>2018.05.27 13:00 - 13:50</td>
                </tr>
                <tr>
                    <td>课件状态</td>
                    <td>待审核</td>
                </tr>
             </table>
             <div class="fujian">
                 <div class="wenjian">

                 </div>
                 <div class="show-down">
                     <div class="show">预览</div>
                     <div class="down">下载</div>
                 </div>
             </div>
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
        
    }
</script>

<style scoped>
    h4{
        margin: 10px 0;
    }
    .tables {
        margin: 0 auto;
        border-collapse: collapse;/*关键代码*/
    }
    .tables th,.tables tr,.tables td {
        text-align: center;
        border:1px solid #e1e1e1;
        
    }
    .tables td{
        width: 30%;
        height: 30px;
    }
    .course-mess tr{
        height: 40px;
    }
    .fujian{
        width: 115px;

    }
    .wenjian{
        width: 115px;
        height: 140px;
        background-color: #e1e1e1;
    }
    .show-down{
        overflow: hidden;
        padding: 10px 0;
    }
    .show,.down{
        float: left;
        width: 50%;
        text-align: center;
        color: #3c8dbc;
        cursor: pointer;
    }
    .btn-box{
        width: 350px;
        margin: 0 auto;
        padding: 10px;
    }
</style>