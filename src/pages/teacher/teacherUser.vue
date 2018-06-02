<template>
<!-- 教师用户 -->
    <div class="date-class">
        <div class="course-package-top">
            <el-form ref="form" label-width="96px">
                <div class="inps">
                    <el-row>
                        <el-form-item label="教师姓名：">
                            <el-input size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话：">
                            <el-input size="mini"></el-input>
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
                    </el-row>
                </div>
                <el-button type="primary" size="mini">查询</el-button>
            </el-form>
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
    import dateAlert from '@/pages/course/dateAlert'
    export default {
        components:{
            dateAlert
        },
        data() {
            return {
                tableData: [],
                currentPage4: 4,
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
            }
            
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
    .course-package-top button{
        float: left;
        margin: 20px;
    }
    .course-package-top{
        overflow: hidden;
    }
    .block{
        margin: 0 auto;
        padding: 20px;
        width: 600px;
    }
</style>