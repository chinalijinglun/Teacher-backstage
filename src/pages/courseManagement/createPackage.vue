<template>
<!-- 创建课程包 -->
    <div class="create-package">
        <h4>课程包</h4>
        <el-form  label-width="100px" class="demo-ruleForm">
            <div class="classify">
                课程分类&nbsp;&nbsp;
                <select name="" id="">
                    <option value="">一级分类</option>
                    <option value="">AP课程</option>
                </select>
                <select name="" id="">
                    <option value="">二级分类</option>
                    <option value="">AP课系统学习</option>
                </select>
                <select name="" id="">
                    <option value="">三级分类</option>
                    <option value="">AP心理学</option>
                    <option value="">AP微积分</option>
                </select>
            </div>
            <div class="classify course-type">
                课程包类型&nbsp;&nbsp;
                <select name="" id="">
                    <option value="">所有类型</option>
                    <option value="">在线课</option>
                    <option value="">公开课</option>
                </select>
            </div>
            <div class="classify class-type">
                班型&nbsp;&nbsp;
                <select name="" id="">
                    <option value="">所有班型</option>
                    <option value="">1 V 1</option>
                    <option value="">1 V 2</option>
                </select>
            </div>
            <div class="classify class-type">
                项目&nbsp;&nbsp;
                <select name="" id="">
                    <option value="">所有项目</option>
                    <option value="">美高项目</option>
                    <option value="">学分项目</option>
                </select>
            </div>
            <div class="classify class-type">
                教师&nbsp;&nbsp;
                <input placeholder="请输入教师用户名" type="text" class="placehold">
            </div>
            <div class="classify num-classes">
                课节数&nbsp;&nbsp;
                <select name="" id="">
                    <option value="">选择课节数</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>
            <div class="classify">
                基本价格&nbsp;&nbsp;
                ¥&nbsp;<input placeholder="请输入教师用户名" type="text" class="placehold">&nbsp;&nbsp;/节课
            </div>
            <el-form-item label="状态" class="">
                <el-radio-group v-model="resource">
                <el-radio label="有效"></el-radio>
                <el-radio label="无效"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item class="submit-button">
                <el-button type="primary">提交</el-button>
                <el-button @click="resetForm('ruleForm')">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                resource:''
            }
        }
    }
</script>

<style scoped>

h4{
    margin: 10px 0 30px 30px;
}
.classify select{
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 25%;
}
.classify{
    width: 60%;
    margin-left: 15px;
    padding:10px 0px;
}
.course-type{
    margin-left: 2px;
}
.class-type{
    margin-left: 43px;
}
.num-classes{
    margin-left: 29px;
}
.placehold {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 25%;
}
.submit-button button{
   padding: 12px 50px;
}
</style>