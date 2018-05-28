<template>
<!-- 查看签约 -->
    <div class="look-contract">
        <h4>教师信息</h4>
        <div class="teacher-mess">
            <div class="teacher-name">
                <div class="title">教师姓名</div>
                <div class="cont">Kira Yuan</div>
            </div>
            <div class="teacher-name">
                <div class="title">联系电话</div>
                <div class="cont">1-876543210</div>
            </div>
            <div class="teacher-name">
                <div class="title">联系邮箱</div>
                <div class="cont">kira@gmail.com</div>
            </div>
        </div>
        <h4>合同内容</h4>
        <div class="sign">
            签订合同内容
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    h4{
        margin: 20px;   
    }
    .teacher-mess{
        margin: 20px;
    }
    .teacher-name{
        width: 100%;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
    }
    .title{
        float: left;
        width: 100px;
        padding-right:20px; 
    }
    .cont{
        float: left;
    }
    .sign{
        margin: 20px;
        min-height: 300px;
        background-color: #e1e1e1;
        text-align: center;
        line-height: 300px;
    }
</style>