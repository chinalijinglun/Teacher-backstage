<template>
<!-- 普通课程 -->
    <div class="general-course">
        <div class="all-course">
            <h3>所有课程</h3>
            <div class="course-package-top">
                <el-form ref="form" label-width="96px">
                <div class="inps">
                    <el-row>
                        <el-form-item label="教师姓名：">
                            <el-input size="mini"></el-input>
                        </el-form-item>
                        <el-form-item class="select-time" label="上课时间：">    
                            <date-range 
                            :start-date.sync="form.startDate" 
                            :end-date.sync="form.endDate"
                            size="mini"
                            range-separator="-"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间">
                            </date-range>
                        </el-form-item>
                        <el-form-item label="联系邮箱：">
                            <el-input size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="状态：">
                            <el-select v-model="form.status" placeholder="请选择" size="mini">
                            <el-option label="所有状态" value=""></el-option>
                            <el-option label="有效" value="1"></el-option>
                            <el-option label="无效" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="课件：">
                            <el-select v-model="form.status" placeholder="请选择" size="mini">
                            <el-option label="所有状态" value=""></el-option>
                            <el-option label="有效" value="1"></el-option>
                            <el-option label="无效" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-row>
                </div>
                <el-button type="primary" size="mini">查询</el-button>
                </el-form>
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
                form:{
                    status: ''
                }
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
    .inps .el-form-item {
        width: 20%;
        float: left;
    }
    .el-input {
        width: 95%;
    }
    .inps .select-time{
        width: 35%;
    }
    .operation button{
        margin-right: 40px;
    }
    h3{
        padding: 20px 0;
        margin-left: 10px;
    }
    .course-package-top button{
        float: left;
        margin: 10px;
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