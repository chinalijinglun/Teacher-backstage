<template>
<!-- 普通课程 -->
    <div class="general-course">
        <div class="all-course">
            <h3>所有课程</h3>
            <div class="course-package-top">
                <div class="package-name">
                    教师姓名：
                    <input placeholder="请输入中文名称/英文名称" type="text" class="placehold">
                </div>
                <div class="create-time">
                    上课时间：
                    <el-date-picker v-model="startDate" placeholder="默认从今天开始"></el-date-picker>
                    <el-date-picker v-model="endDate" placeholder="到之后一周内结束"></el-date-picker>
                </div>
                <div class="all-state">
                    状态：
                    <select name="" id="">
                        <option value="所有状态">所有状态</option>
                        <option value="待预约">待预约</option>
                        <option value="待确认">待确认</option>
                    </select>
                </div>
                <div class="all-state">
                    课件：
                    <select name="" id="">
                        <option value="所有状态">所有状态</option>
                        <option value="待预约">待预约</option>
                        <option value="待确认">待确认</option>
                    </select>
                </div>
                <el-button type="primary">查询</el-button>
            </div>
        </div>
        <div class="table-list">
            
            <el-table :data="tableData" style="width: 100%;margin-top:20px;">
                <el-table-column fixed prop="id" label="编号" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="coursename" label="试讲课程" style="width: 15%;">
                </el-table-column>
                <el-table-column prop="grade" label="年级" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="teachername" label="教师姓名" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="studentname" label="学生" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="coursetime" label="上课时间" width="200">
                </el-table-column>
                <el-table-column prop="zip" label="课件" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="state" label="状态" style="width: 10%;">
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
    export default {
        data() {
            return {
                tableData: [{
                    id: '0001',
                    coursename: '英语',
                    grade: '初中',
                    teachername: 'Kira Yuan',
                    studentname: 'Adam',
                    coursetime: '2018.05.27 13:00 - 13:50',
                    zip: '未上传',
                    state: '未上课'

                }],
                currentPage4: 4,
                startDate: null, //开始时间
                endDate: null, //结束时间
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        },
    }
</script>

<style scoped>
    .operation button{
        margin-right: 40px;
    }
    h3{
        padding: 20px 0;
        margin-left: 10px;
    }
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
        margin: 10px;
        padding: 12px 30px;
    }
    .course-package-top{
        overflow: hidden;
    }
    .operation{
        margin-left: 20px;
        margin-left: 20px;
    }
    .create-time {
        width: 45%;
        float: left;
        padding: 10px;
    }
    .create-time div {
        width: 35%;
        margin-right: 20px;
    }
    .block{
        margin: 0 auto;
        padding: 20px;
        width: 600px;
    }
</style>