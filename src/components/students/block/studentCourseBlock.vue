<template>
  <div class="student-course-block">
    <el-row class="form-contain">
      <el-form :inline="true" :model="form">
        <el-row class="form-row">
          <el-form-item label="课程名：">
            <el-input v-model="form.courseName" size="mini" placeholder="课程名"></el-input>
          </el-form-item>
          <el-form-item label="学生名：">
            <el-input v-model="form.studentsName" size="mini" placeholder="学生名"></el-input>
          </el-form-item>
          <el-form-item label="上课时间：">
            <date-range 
              :start-date.sync="form.startDate" 
              :end-date.sync="form.endDate"
              size="mini"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </date-range>
          </el-form-item>
          <el-form-item label="课程状态：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button @click="query" size="mini" type="primary">查询</el-button>
          <el-button @click="query" size="mini" type="primary">申请试听</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-container">
      <el-row class="list-title">
        <p>学生名称 Vivian</p>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="ID"
            width="60">
          </el-table-column>
          <el-table-column
            prop="loginName"
            label="用户名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="studentsName"
            label="学生姓名">
          </el-table-column>
          <el-table-column
            prop="telphone"
            label="联系电话">
          </el-table-column>
          <el-table-column
            prop="email"
            label="联系邮箱">
          </el-table-column>
          <el-table-column
            prop="addtime"
            label="注册时间">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="admin"
            label="班主任">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handlerClick">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="pagination-container">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.curPage"
          :page-size="form.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </el-row>
    </el-row>
  </div>
</template>
<script>
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    data() {
      return {
        form: {
          courseName: '',
          studentsName: '',
          courseStatus: '',
          startDate: '',
          endDate: '',
          curPage: 1,
          pageSize: 10
        },
        totalCount: 100,
        tableData: [{
          id: '0001',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30',
          status: '待分配',
          admin: '无'
        },{
          id: '0002',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30',
          status: '待分配',
          admin: '无'
        },{
          id: '0003',
          loginName: 'kira@gmail.com',
          studentsName: 'Kira Yuan',
          telphone: '1876543210',
          email: 'kira@gmail.com',
          addtime: '2018-02-27 11:25:30',
          status: '待分配',
          admin: '无'
        }]
      };
    },
    mixins: [paginationMix],
    methods: {
      query() {
        console.log(this.form);
      },
      handlerClick() {
        var { path } = this.$route;
        const query = {
          ...this.$route.query,
          courseBlk: 'detail'
        };
        this.$router.push({ path, query });
      }
    }
  }
</script>
<style scoped>
.list-container {
  padding: 15px;
}
.list-title {
  font-family: "Microsoft YaHei";
  font-size: 16px;
  line-height: 20px;
}
.pagination-container {
  text-align: right;
  margin-top: 30px;
}
</style>

