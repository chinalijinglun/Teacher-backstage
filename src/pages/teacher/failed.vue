<template>
    <div class="faild">
        <div class="reinterview">
            <el-radio v-model="radio" label="1">正常面试</el-radio>
            <el-radio v-model="radio" label="2">面试失败</el-radio>
        </div>
        <div class="reason">
            <span>原因：</span>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="btn-box">
            <el-button type="primary" size="mini">提交</el-button>
            <el-button size="mini">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                radio: '2'
            }
        }
    }
</script>

<style scoped>
    .reinterview{
        padding: 10px;
    }
    .reason{
        padding: 10px;
        overflow: hidden;
    }
    .reason span{
        float: left;
    }
    .reason textarea{
        float: left;
        width: 60%;
        height: 150px;
        border: 1px solid #e1e1e1;
        outline: none;
        border-radius: 3px;
    }
    .btn-box{
        width: 250px;
        margin: 0 auto;
        padding: 15px;
    }
</style>