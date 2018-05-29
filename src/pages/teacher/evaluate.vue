<template>
<!-- 评价 -->
    <div class="evaluate">
        <div class="block">
            <div class="left">
                <div class="name">
                    Kira Yuan
                </div>
                <table>
                    <tr>
                        <td class="td-lef" width=80px>打分：</td>
                        <td class="td-rig">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                    </tr>
                    <tr>
                        <td class="td-lef">反馈：</td>
                        <td class="td-rig">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                    </tr>
                    <tr>
                        <td class="td-lef">学习建议：</td>
                        <td class="td-rig">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                    </tr>
                </table>
            </div>
            <div class="vs">
                VS
            </div>
            <div class="right">
                <div class="name">
                    Kira Yuan
                </div>
                <table>
                    <tr>
                        <td class="td-lef" width=80px>打分：</td>
                        <td class="td-rig">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                    </tr>
                    <tr>
                        <td class="td-lef">反馈：</td>
                        <td class="td-rig">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                    </tr>
                    <tr>
                        <td class="td-lef">学习建议：</td>
                        <td class="td-rig">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .block{
        width: 1000px;
        overflow: hidden;
        border-bottom: 1px dashed #e1e1e1;
        padding: 10px 0;
    }
    .left{
        width: 460px;
        float: left;
    }
    .right{
        width: 460px;
        float: right;
    }
    .name{
        text-align: center;
    }
    .td-lef{
        width: 80px;
    }
    .td-rig{
        width: 300px;
        word-break: break-all
    }
    .vs{
        float: left
    }
</style>