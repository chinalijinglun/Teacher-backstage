<template>
<!-- 报名 -->
    <div class="enroll">
        <div class="enroll-mess">
            试讲课信息
        </div>
        <div class="choose-student">
            <div class="chose-word">
                选择学生：
            </div>
            <div class="operation">
                <el-button type="primary" size="mini">报名</el-button>
            </div>
            <el-table :data="tableData" style="width: 100%;margin-top:20px;">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column fixed prop="zhname" label="ID" style="width: 15%;">
                </el-table-column>
                <el-table-column prop="enname" label="用户名" style="width: 15%;">
                </el-table-column>
                <el-table-column prop="province" label="学生姓名" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="city" label="联系电话" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="address" label="联系邮箱" style="width: 10%;">
                </el-table-column>
                <el-table-column prop="date" label="注册时间" style="width: 15%;">
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
        data(){
            return {
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
                }],
                currentPage4: 4,
            
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
    .enroll-mess{
        height: 240px;
        text-align: center;
        line-height: 240px;
        background-color: gray;
        margin-bottom: 20px;
    }
    .block{
        margin: 0 auto;
        padding: 20px;
        width: 600px;
    }
</style>