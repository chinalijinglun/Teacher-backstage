<template>
  <!-- 面试结果 -->
  <div class="date-class">
    <div class="course-package-top">
      <el-form ref="form" label-width="96px">
        <div class="inps">
          <el-row>
            <el-form-item label="教师姓名：">
              <el-input size="mini" v-model="form.teacher_name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：">
              <el-input size="mini" v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="联系邮箱：">
              <el-input size="mini" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="状态：" style="margin-right:20px;">
              <el-select v-model="form.state" placeholder="请选择" size="mini">
                <el-option label="所有状态" value=""></el-option>
                <el-option label="带填写结果" value="1"></el-option>
                <el-option label="面试通过" value="2"></el-option>
                <el-option label="面试未通过" value="3"></el-option>
                <el-option label="面试未完成" value="4"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="面试人姓名：">
              <el-input size="mini" v-model="form.interview_name"></el-input>
            </el-form-item>
            <el-form-item class="select-time" label="面试时间：">
              <el-date-picker
                v-model="form.interview_at"
                size="mini"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-row>
        </div>
        <el-button type="primary" size="mini" @click="query">查询</el-button>
      </el-form>
    </div>
    <div class="table-list">
      <el-table :data="tableData" style="width: 100%;margin-top:20px;">
        <el-table-column fixed prop="id" label="ID" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="username" label="教师姓名" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="mobile" label="联系电话" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="email" label="联系邮箱" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="start" label="面试时间" style="width: 10%;">
          <template slot-scope="{row}">
            {{ row.start | hasTime }}
          </template>
        </el-table-column>
        <el-table-column prop="interview_name" label="面试人" style="width: 15%;">
        </el-table-column>
        <el-table-column label="状态" style="width: 15%;">
          <template slot-scope="scope">
            {{ $INTERVIEW[scope.row.interview_state] }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" style="width: 15%;">
          <template slot-scope="scope">
            <el-button size="mini" @click="toFillReport(scope.row)">填写面试报告</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination 
        @current-change="handleCurrentChange" 
        :current-page="page" 
        :page-size="10" 
        layout="total, prev, pager, next, jumper" 
        :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import {
  interviewResult
} from '@/api/interview'
export default {
  data() {
    return {
      tableData: [],
      page: 1,
      total: 0,
      form: {  
        email: '',
        interview_at: '',
        mobile: '',
        state: '',
        teacher_name: '',
        interview_name: ''
      }
    };
  },
  created() {
    this.query()
  },
  methods: {
    handleCurrentChange(val) {
      this.page = val;
      this.query();
    },
    query() {
      const f = this.$deleteEmptyProps(this.form);
      interviewResult({
        ...f,
        page_no: this.page,
        page_limit: 10
      }).then(resp=> {
        this.tableData = resp.data.objects;
        this.total = resp.data.num_results;
      })
    },
    toFillReport(row) {
      this.$router.push({
        path: '/teacher/interviewReport',
        query: {
          id: row.interview_id
        }
      })
    },
    getStateFilter(state) {
      switch(state) {
        case '1': 
          return [{
            name: 'interviews__state',
            op: 'any',
            val: 2
          }];
        case '2':
          return [{
            name: 'state',
            op: 'eq',
            val: 7
          }];
        case '3':
          return [{
            name: 'state',
            op: 'eq',
            val: 8
          }];
        case '4':
          return [{
            name: 'interviews__state',
            op: 'any',
            val: 5
          }];
        default:
          return [{
            name: 'state',
            op: 'eq',
            val: 10
          }];
      }
    }
  }
};
</script>

<style scoped>
.inps .el-form-item {
  width: 20%;
  float: left;
}
.inps .select-time {
  width: 35%;
}
.course-package-top button {
  float: left;
  margin: 20px;
}
.course-package-top {
  overflow: hidden;
}
.operation {
  margin-left: 20px;
  margin-left: 20px;
}
.block {
  margin: 0 auto;
  padding: 20px;
  width: 600px;
}
</style>