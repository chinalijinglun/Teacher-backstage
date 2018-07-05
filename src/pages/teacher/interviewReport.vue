<template>
<!-- 面试报告 -->
    <div class="interview-report">
        <div class="reinterview">
            <el-radio v-model="radio" label="1">正常面试</el-radio>
            <el-radio v-model="radio" label="2">面试失败</el-radio>
        </div>
        
        <div class="main-content">
            <div class="tits">
                面试记录表
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    线上教学经验
                </div>
                <div class="sele">
                    <el-radio v-model="radio" label="1">有</el-radio>
                    <el-radio v-model="radio" label="2">无</el-radio>
                </div>
                
            </div>
            <div class="jingyan jsqk">
                <div class="line-jy">
                    教室登录情况
                </div>
                <div class="seles">
                    <el-radio label="1">顺利</el-radio><br/>
                    <el-radio label="2">不顺利</el-radio>
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    性别
                </div>
                <div class="sele">
                    <el-radio v-model="radio" label="1">男</el-radio>
                    <el-radio v-model="radio" label="2">女</el-radio>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    肤色
                </div>
                <div class="sele">
                    <el-radio v-model="radio" label="1">白</el-radio>
                    <el-radio v-model="radio" label="2">黄</el-radio>
                    <el-radio v-model="radio" label="3">黑</el-radio>
                    <el-radio v-model="radio" label="4">棕</el-radio>
                    <el-radio v-model="radio" label="5">红</el-radio>
                    <el-radio v-model="radio" label="6">其他</el-radio>
                </div>
            </div>
            <div class="jingyan jsqk">
                <div class="line-jy">
                    教研管理经验
                </div>
                <div class="seles">
                    <el-radio label="1">有</el-radio><br/>
                    <el-radio label="2">没有</el-radio>
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="jingyan jsqk">
                <div class="line-jy">
                    受教育背景名校
                </div>
                <div class="selesa">
                    <el-radio label="1">私立藤校</el-radio><br/>
                    <el-radio label="2">公立藤校</el-radio><br/>
                    <el-radio label="3">排名前100</el-radio>
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
             <div class="jingyan">
                <div class="line-jy">
                    Demo课讲课方式
                </div>
                <div class="sele">
                    <el-radio v-model="radio" label="1">说课</el-radio>
                    <el-radio v-model="radio" label="2">讲课</el-radio>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    教学特色
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="1"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    PPT主题
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="1"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    PPT设计
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="1"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    PPT内容
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="1"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    建议时薪
                </div>
                <div class="sele">
                    <el-radio v-model="radio" label="1">20—25</el-radio>
                    <el-radio v-model="radio" label="2">25—30</el-radio>
                    <el-radio v-model="radio" label="3">30—35</el-radio>
                    <el-radio v-model="radio" label="4">40以上</el-radio>
                </div>
            </div>
            <div class="jingyan">
                <div class="line-jy">
                    邮件往来数量情况
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="1"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="jingyan" style="border:none;">
                <div class="line-jy">
                    个人魅力相关
                </div>
                <div class="beizhu">
                   <span>备注：</span> <el-input
                        type="textarea"
                        :rows="1"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
        </div>
        <div class="interview-form">
            <div class="tits">
                面试评价表
                <div class="grade">
                    总得分：100
                </div>
            </div>
            <div class="line1">
                <div class="num">
                    序号
                </div>
                <div class="cons">
                    内容项
                </div>
                <div class="manf">
                    满分
                </div>
                <div class="detail">
                    细项内容
                </div>
            </div>
            <div class="line2">
                <div class="nums">
                    1
                </div>
                <div class="base">
                    基本信息
                </div>
                <div class="content">
                    <div class="jiaoling">
                        当地教龄
                    </div>
                    <div class="xueli">
                        学历
                    </div>
                    <div class="jygl">
                        教研管理
                    </div>
                </div>
                <div class="grades">
                    <div class="grades1">
                        15
                    </div>
                    <div class="grades2">
                        15
                    </div>
                    <div class="grades3">
                        12
                    </div>
                </div>
                <div class="five">
                    <div class="conts">
                        5年及以下
                    </div>
                    <div class="conts">
                        <input type="radio" name="" id=""> 5
                    </div>
                    <div class="conts">
                        本科
                    </div>
                    <div class="conts">
                        <input type="radio" name="" id=""> 5
                    </div>
                    <div class="conts">
                        教研经验
                    </div>
                    <div class="conts cont">
                        <input type="checkbox" name="" id=""> 4
                    </div>
                </div>
                <div class="five">
                     <div class="conts">
                        5年及以下
                    </div>
                    <div class="conts">
                        <input type="radio" name="" id=""> 10
                    </div>
                    <div class="conts">
                        硕士
                    </div>
                    <div class="conts">
                        <input type="radio" name="" id=""> 10
                    </div>
                    <div class="conts">
                        管理经验
                    </div>
                    <div class="conts cont">
                        <input type="checkbox" name="" id=""> 4
                    </div>
                </div>
                <div class="five">
                     <div class="conts">
                        5年及以下
                    </div>
                    <div class="conts">
                        <input type="radio" name="" id=""> 15
                    </div>
                    <div class="conts">
                        博士
                    </div>
                    <div class="conts">
                        <input type="radio" name="" id=""> 15
                    </div>
                    <div class="conts">
                        咨询经验
                    </div>
                    <div class="conts cont">
                        <input type="checkbox" name="" id=""> 4
                    </div>
                </div>
                <div class="grades gradess">
                    <div class="grades1">
                        15
                    </div>
                    <div class="grades2">
                        15
                    </div>
                    <div class="grades3">
                        12
                    </div>
                </div>
            </div>
            <div class="line2">
                <div class="nums">
                    2
                </div>
                <div class="base">
                    线上授课与线上操作
                </div>
                <div class="content">
                    <div class="jiaoling">
                        面试环境
                    </div>
                    <div class="xueli">
                        线上教室
                        功能使用
                    </div>
                    <div class="jygl">
                        线上授课相关
                    </div>
                </div>
                <div class="grades">
                    <div class="grades1">
                        4
                    </div>
                    <div class="grades2">
                        6
                    </div>
                    <div class="grades3">
                       8
                    </div>
                </div>
                <div class="xg">
                    <div class="xg-top">
                        <div class="dg">
                            <div class="word">
                                灯光效果
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="dg">
                            <div class="word">
                                背景适宜
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                    </div>
                    <div class="xg-top">
                        
                        <div class="djs">
                            <div class="word">
                                顺利进入教室
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="djs">
                            <div class="word">
                                老师成功上传课件
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="djs">
                            <div class="word">
                                教室其他功能使用
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                    </div>
                    <div class="xg-top">
                        
                        <div class="xsskjl">
                            <div class="word">
                                线上授课经历
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                声情并茂
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                PPT技能
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                音频视频
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grades gradss">
                    <div class="grades1">
                        4
                    </div>
                    <div class="grades2">
                        6
                    </div>
                    <div class="grades3">
                       8
                    </div>
                </div>
            </div>
            <div class="line2">
                <div class="nums">
                    3
                </div>
                <div class="base">
                    课件制作与展示
                </div>
                <div class="content">
                    <div class="jiaoling">                
                        课件外观
                    </div>
                    <div class="xueli">
                        课件内容
                    </div>
                    <div class="jygl">
                        授课/说课
                    </div>
                </div>
                <div class="grades">
                    <div class="grades1">
                        8
                    </div>
                    <div class="grades2">
                        10
                    </div>
                    <div class="grades3">
                        8
                    </div>
                </div>
                <div class="xg">
                    <div class="xg-top">
                        <div class="xsskjl">
                            <div class="word">
                                图文并茂
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                外观设计
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                肢体语言
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                有辅助教具
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                    </div>
                    <div class="xg-top">
                        <div class="xsskjls">
                            <div class="word">
                                授课目标
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjls">
                            <div class="word">
                                词汇学习
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjls">
                            <div class="word">
                                互动练习
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjls">
                            <div class="word">
                                内容丰富
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjls">
                            <div class="word">
                                结构清晰
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                    </div>
                    <div class="xg-top" style="border-bottom:none">
                        <div class="xsskjl">
                            <div class="word">
                                互动型
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                感染力型
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                灵活多变
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                        <div class="xsskjl">
                            <div class="word">
                                语速适宜
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 2
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grades gradss">
                    <div class="grades1">
                        8
                    </div>
                    <div class="grades2">
                        10
                    </div>
                    <div class="grades3">
                        8
                    </div>
                </div>
            </div>
            <div class="line4">
                <div class="line-num">
                    4
                </div>
                <div class="line-name">
                    定制化教学能力
                </div>
                <div class="line-cont">
                    定制化教学能力
                </div>
                <div class="line-gtade">
                    8
                </div>
                <div class="xg">
                    <div class="xg-top">
                        <div class="dg">
                            <div class="word">
                                有定制教学经验
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 4
                            </div>
                        </div>
                        <div class="dg">
                            <div class="word">
                                有教中国学生经验
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 4
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grades3">
                    8
                </div>
            </div>
             <div class="line4">
                <div class="line-num">
                    5
                </div>
                <div class="line-name">
                    职业素养
                </div>
                <div class="line-cont">
                    职业素养
                </div>
                <div class="line-gtade">
                    6
                </div>
                <div class="xg">
                    <div class="xg-top">
                        <div class="dg">
                            <div class="word">
                                准时
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 3
                            </div>
                        </div>
                        <div class="dg">
                            <div class="word">
                                热爱教学
                            </div>
                            <div class="shuzi">
                                <input type="checkbox" name="" id=""> 3
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grades3">
                    6
                </div>
            </div>
            <div class="line2">
                <div class="nums">
                    总结评价
                </div>
                <textarea name="" class="text" id="" cols="" rows="10"></textarea>
            </div>
            <div class="line4">
                <div class="line-num">
                    结果
                </div>
                <div class="xgls">
                    <input type="radio" name="" id=""> 面试通过
                    <input type="radio" name="" id=""> 面试不通过
                </div>
            </div>
        </div>
        <div class="btn-box">
            <el-button type="primary" size="mini">提交</el-button>
            <el-button size="mini">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                radio: '1',
                textarea: ''
            };
        }
    }
</script>

<style scoped>
    .reinterview{
        padding: 10px;
    }
    .main-content{
        width: 100%;
        min-height: 200px;
        border: 1px solid #e1e1e1;
    }
    .interview-form{
        width: 100%;
        min-height: 200px;
        border: 1px solid #e1e1e1;
        margin-top: 80px;
        overflow: hidden;
    }
    .btn-box{
        width: 250px;
        margin: 0 auto;
        padding: 15px;
    }
    .tits{
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 13px;
        border-bottom: 1px solid #e1e1e1;
    }
    .jingyan{
        border-bottom: 1px solid #e1e1e1;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
    }
    .line-jy{
        width: 20%;
        border-right: 1px solid #e1e1e1;
        float: left;
        text-align: center;
    }
    .sele{
        float: left;
        width: 79%;
    }
    .seles{
        float: left;
        width: 20%;
        border-right: 1px solid #e1e1e1;
    }
    .jsqk{
        height: 100px;
    }
    .jsqk .line-jy{
        height: 100px;
        line-height: 100px;
    }
    .beizhu{
        width: 59%;
        float: left;
    }
    .beizhu span{
        float: left;
        text-indent: 20px;
    }
    .el-textarea{
        display: inline-block;
        padding: 14px;
        width: 80%;
        height: 60px;
    }
    .selesa{
        line-height: 33px;
        float: left;
        width: 20%;
        border-right: 1px solid #e1e1e1;
    }
    .el-radio{
        margin-left: 80px;
    }
    .jingyan .el-textarea{
        padding: 10px;
    }
    .grade{
        float: right;
        margin-right: 12px;
    }
    .line1{
        overflow: hidden;
        border-bottom: 1px solid #e1e1e1;
        height: 50px;
        line-height: 50px;
    }
    .line1 div{
        float: left;
        text-align: center
    }
    .num,.manf{
        width: 10%;
        border-right: 1px solid #e1e1e1;
    }
    .cons{
        width: 25%;
        border-right: 1px solid #e1e1e1;
    }
    .detail{
        width: 54%;
    }
    .line2{
        height: 150px;
        border-bottom: 1px solid #e1e1e1;
        float: left;
        width: 100%;
    }
    .line2 .content{
        float: left;
        text-align: center;
         border-right: 1px solid #e1e1e1;
         height: 150px;
         width: 14.9%;
    }
    .nums,.base{
        width: 10%;
        line-height: 150px;
        float: left;
        border-right: 1px solid #e1e1e1;
        text-align: center;
    }
    .jiaoling,.xueli{
        border-bottom: 1px solid #e1e1e1;
        height: 50px;
        line-height: 50px;
    }
    .grades{
        width: 10%;
        line-height: 50px;
        float: left;
        border-right: 1px solid #e1e1e1;
        text-align: center;
    }
    .grades1,.grades2{
        border-bottom: 1px solid #e1e1e1;
    }
    .jygl{
        line-height: 50px;
    }
    .five{
        width: 15%;
        float: left;
        height: 150px;
        border-right: 1px solid #e1e1e1;
    }
    .conts{
        height: 24px;
        border-bottom: 1px solid #e1e1e1;
        text-align: center;
        line-height: 24px;
    }
    .cont{
        border: none;
        height: 25px;
    }
    .gradess{
        width: 9.6%;
        border: none;
    }
    .xg{
        width: 45.25%;
        height: 150px;
        float: left;
        overflow: hidden;
        
    }
    .xg-top{
        border-bottom: 1px solid #e1e1e1;
        height: 50px;
        overflow: hidden;
    }
    .dg{
        float: left;
        border-right: 1px solid #e1e1e1;
        height: 50px;
        text-align: center;
        width: 49.8%;
    }
    .word,.shuzi{
        border-bottom: 1px solid #e1e1e1;
        height: 25px;
        line-height: 25px;
    }
    .gradss{
        width: 9.5%;
        border-right: none;
    }
    .djs{
        width: 33.13%;
        float: left;
        border-right: 1px solid #e1e1e1;
        text-align: center;
    }
    .xsskjl{
        width: 24.81%;
        float: left;
        border-right: 1px solid #e1e1e1;
        text-align: center;
    }
    .xsskjls{
        width: 19.8%;
        float: left;
        border-right: 1px solid #e1e1e1;
        text-align: center;
    }
    .line4{
        height: 50px;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #e1e1e1;
        overflow: hidden;
    }
    .line-num,.line-name,.line-gtade{
        line-height: 50px;
        width: 10%;
        border-right: 1px solid #e1e1e1;
        float: left;
    }
    .line-cont{
        width: 14.9%;
        border-right: 1px solid #e1e1e1;
        float: left;
        line-height: 50px;
    }
    .grades3{
        line-height: 50px;
    }
    .text{
        width: 89.5%;
        border:none;
        outline: none;
    }
    .xgls{
        float: left;
        line-height: 50px;
    }
    .xgls input{
        margin-left: 80px;
    }
</style>