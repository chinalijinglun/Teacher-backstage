<template>
    <!-- 签约 -->
    <div class="contract-mess">
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
        <div class="agreement">
            <div class="type">
                <div class="title">合同类型</div>
                <div class="cont"><input type="checkbox" name="" id="">教师</div>
            </div>
            <div class="price">
                <div class="title">签约价格</div>
                <div>USD <input class="inp" type="text"> /节课</div>
            </div>
        </div>
        <div class="btn-box">
            <el-button type="primary">预览合同</el-button>
            <el-button type="primary">发送合同</el-button>
            <el-button>合同已发送，等待教师回复</el-button>
            
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
    .teacher-mess,.agreement,.btn-box{
        margin: 20px;
    }
    .teacher-name,.type,.price{
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
    .inp{
        width: 50px;
        text-align: center;
    }
</style>