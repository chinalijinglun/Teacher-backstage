<template>
  <el-dialog title="选择教师" :visible.sync="dialogVisible">
    <el-row>
      <el-form :inline="true">
        <el-form-item>
          <el-input size="mini" placeholder="输入学生姓名、用户名或ID" v-model="queryStr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" @click="getStudent">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table :data="studentLs">
      <el-table-column property="id" label="id" width="150"></el-table-column>
      <el-table-column label="姓名" property="name" width="200">
      </el-table-column>
      <el-table-column property="username" label="用户名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="choseStudent(scope.row)">选择</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="text-align: right">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="10"
        :current-page.sync="page"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </el-row>
  </el-dialog>
</template>
<script>
  import {
    studentGet
  } from "@/api/student";

  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'studentDialog',
    data() {
      return {
        studentLs: [],
        page: 1,
        total: 0,
        queryStr: ''
      }
    },
    mixins: [dialogContainer],
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.getStudent();
    },
    methods: {
      handleCurrentChange(p) {
        this.page = p;
        this.getStudent()
      },
      getStudent() {
        const filter = this.$json2filter({
          'id|name|first_name|username': this.queryStr
        });
        return studentGet(filter, {
          page: this.page
        }).then(resp => {
          this.studentLs = resp.data.objects;
          this.total = resp.data.num_results;
          return resp.data;
        });
      },
      choseStudent(student) {
        this.$emit('chose', student);
        this.close();
      },
      close() {
        this.$emit('update:visible', false);
      }
    }
  }
</script>
