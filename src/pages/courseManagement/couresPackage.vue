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
            <div class="package-name">
                课程包名称：
                <input placeholder="请输入中文名称/英文名称" type="text" class="placehold">
            </div>
            <div class="package-id">
                课程包ID：
                <input placeholder="请输入课程包ID" type="text" class="placehold">
            </div>
            <div class="operators">
                操作人：
                <input placeholder="请输入操作人账号" type="text" class="placehold">
            </div>
            <div class="create-time">
                创建时间：
                <el-date-picker v-model="startDate" placeholder="请选择开始时间"></el-date-picker>
                <el-date-picker v-model="endDate" placeholder="请选择结束时间"></el-date-picker>
            </div>
            <div class="all-state">
                类型：
                <select name="" id="">
                    <option value="所有类型">所有类型</option>
                    <option value="在线课程">在线课程</option>
                    <option value="免费课程">免费课程</option>
                    <option value="精品公开课">精品公开课</option>
                    <option value="赠送课程">赠送课程</option>
                    <option value="补偿课程">补偿课程</option>
                </select>
            </div>
            <el-button type="primary">查询</el-button>
        </div>
        <div class="table-list">
            <div class="operation">
                <router-link to=""><el-button type="primary">创建课程包</el-button></router-link>
                <el-button type="primary" class="dels">删除</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%;margin-top:20px;">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column fixed prop="zhname" label="中文名称" style="width: 15%;">
                </el-table-column>
                <el-table-column prop="enname" label="英文名称" style="width: 15%;">
                </el-table-column>
                <el-table-column prop="province" label="课程包ID" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="city" label="类型" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="address" label="状态" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="zip" label="创建人" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="date" label="创建时间" style="width: 15%;">
                </el-table-column>
                <el-table-column fixed="right" label="操作" style="width: 15%;">
                <template slot-scope="scope">
                    <button type="button" class="el-button el-button--default el-button--small">
                        <span>编辑</span>
                    </button>
                    <button type="button" @click="handleClick(scope.row)" class="el-button el-button--default el-button--small">
                        <span>删除</span>
                    </button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
         methods: {
        handleClick(row) {
            console.log(row);
        }
        },

        data() {
            return {
                startDate: null, //开始时间
                endDate: null, //结束时间
                tableData: [{
                date: '2016-05-03 11:25:30',
                zhname: 'AP课程',
                enname: 'AP',
                province: '10001',
                city: '1 V 1',
                address: '有效',
                zip: 'Kira'
                }, {
                date: '2016-05-03 11:25:30',
                zhname: 'AP课系统学习',
                enname: 'AP Subject',
                province: '10001',
                city: '1 V 1',
                address: '有效',
                zip: 'Kira'
                },{
                date: '2016-05-03 11:25:30',
                zhname: 'AP心理学',
                enname: 'AP Psycholo',
                province: '10001',
                city: '1 V 1',
                address: '有效',
                zip: 'Kira'
                }]
            }
        }
    }
</script>

<style scoped>
    .classify select,.all-state select{
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
    .classify select{
        margin-right: 20px;
    }
    .all-state select{
        width: 40%;
    }
    .classify{
        margin-left: 50px;
        padding: 10px;
    }
    .package-name,.package-id,.operators,.all-state{
        width: 30%;
        float: left;
        padding: 10px;
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
        width: 70%;
    }
    .create-time {
        width: 60%;
        float: left;
        padding: 10px;
        margin-left: 14px;
    }
    .create-time div {
        width: 35%;
        margin-right: 20px;
    }
    .course-package-top button{
        float: left;
        margin: 20px;
        padding: 12px 30px;
    }
    .course-package-top{
        overflow: hidden;
    }
    .operation{
        margin-left: 20px;
    }
    .dels{
        padding: 12px 50px;
        margin-left: 20px;
    }
</style>