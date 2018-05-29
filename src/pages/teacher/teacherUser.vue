<template>
<!-- 教师用户 -->
    <div class="date-class">
        <div class="course-package-top">
            <div class="package-name">
                教师姓名：
                <input placeholder="请输入中文名称/英文名称" type="text" class="placehold">
            </div>
            <div class="package-id">
                联系电话：
                <input placeholder="请输入课程包ID" type="text" class="placehold">
            </div>
            <div class="operators">
                联系邮箱：
                <input placeholder="请输入操作人账号" type="text" class="placehold">
            </div>
            <div class="all-state">
                状态：
                <select name="" id="">
                    <option value="所有状态">所有状态</option>
                    <option value="待预约">待预约</option>
                    <option value="待确认">待确认</option>
                </select>
            </div>
            <el-button type="primary">查询</el-button>
        </div>
        <div class="table-list">
            <el-table :data="tableData" style="width: 100%;margin-top:20px;">
                <el-table-column fixed prop="zhname" label="ID" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="enname" label="用户名" style="width: 15%;">
                </el-table-column>
                <el-table-column prop="zip" label="教师姓名" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="province" label="联系电话" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="address" label="联系邮箱" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="date" label="注册时间" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="city" label="状态" style="width: 15%;">
                </el-table-column>
                <el-table-column fixed="right" label="操作" style="width: 15%;">
                <template slot-scope="scope">
                    <button type="button" class="el-button el-button--default el-button--small">
                        <span>查看</span>
                    </button>
                </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import dateAlert from '@/pages/courseManagement/dateAlert'
    export default {
        components:{
            dateAlert
        },
        data() {
            return {
                tableData: [{
                date: '2016-05-03 11:25:30',
                zhname: '0001',
                enname: 'kira@gmail.com',
                province: '1-876543210',
                city: '在岗',
                address: 'kira@gmail.com',
                zip: 'Kira Yuan',
                classtime: '2016-05-03 11:25:30'
                }],
                currentPage4: 4
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
            
        },
    }
</script>

<style scoped>
    .all-state select{
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
    .all-state select{
        width: 40%;
    }
    .package-name,.package-id,.operators{
        width: 24%;
        float: left;
        padding: 10px;
    }
    .all-state{
        width: 20%;
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
        margin-left: 20px;
    }
    .block{
        margin: 0 auto;
        padding: 20px;
        width: 600px;
    }
</style>