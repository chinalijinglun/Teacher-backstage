<template>
<!-- 作业 -->
    <div class="homework">
        <h4>作业内容</h4>
        <div class="online-work">
            系统生成的在线作业，及学生在线的答题
        </div>
        <div class="work-title">
            <span>作业标题：</span>
            <span>XXXXXXXXXXXXXXXXXXXXXXXXXX</span>
        </div>
        <div class="fujian">
            <div class="teac">
                <span>老师作业附件：</span>
                <div class="wenjian">
                    <div class="contect">
                    </div>
                    <div class="show-down">
                        <div class="show">预览</div>
                        <div class="down">下载</div>
                    </div>
                </div>
            </div>
            <div class="teac">
                <span>学生作业附件：</span>
                <div class="wenjian">
                    <div class="contect">
                    </div>
                    <div class="show-down">
                        <div class="show">预览</div>
                        <div class="down">下载</div>
                    </div>
                </div>
            </div>
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
    .online-work{
        background-color: #e1e1e1;
        min-height: 500px;
    }
    .work-title{
        padding: 20px 0;
    }
    .fujian{
        overflow: hidden;
    }
    .teac{
        float: left;
        overflow: hidden;
        width: 220px;
        margin-right: 20px;
    }
    .wenjian{
        float: right;
    }
    .contect{
        height: 138px;
        background-color: #e1e1e1;
        width: 115px;        
    }
    .show-down{
        overflow: hidden;
    }
    .show,.down{
        width: 50%;
        text-align: center;
        float: left;
        color: #3c8dbc;
        cursor: pointer;
    }
</style>