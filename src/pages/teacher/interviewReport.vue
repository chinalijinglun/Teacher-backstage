<template>
<!-- 面试报告 -->
    <div class="interview-report">
        <div class="reinterview">
            <el-button type="primary" size="mini">重新预约面试</el-button>
        </div>
        
        <div class="main-content">
            面试报告字段
        </div>
        <div class="btn-box">
            <el-button type="primary" size="mini">提交</el-button>
            <el-button size="mini">取消</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .reinterview{
        padding: 10px;
    }
    .main-content{
        width: 100%;
        min-height: 200px;
        background-color: #e1e1e1;
        text-align: center;
        line-height: 100px;
    }
    .btn-box{
        width: 250px;
        margin: 0 auto;
        padding: 15px;
    }
    
</style>