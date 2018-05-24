<template>
    <div class="coures-package">
        <div class="course-package-top">
            <div class="classify">
                分类：
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
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
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
        width: 20%;
    }
</style>