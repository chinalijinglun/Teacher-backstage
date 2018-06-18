<template>
  <el-dialog title="选择教师" :visible.sync="visible">
    <el-row>
      <el-form :inline="true">
        <el-form-item>
          <el-input size="mini" placeholder="输入教师姓名、用户名或ID" v-model="queryStr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="mini">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table :data="teacherLs">
      <el-table-column property="id" label="id" width="150"></el-table-column>
      <el-table-column label="姓名" width="200">
        <template slot-scope="scope">
          {{ scope.row.given_name + ' ' + scope.row.family_name}}
        </template>
      </el-table-column>
      <el-table-column property="username" label="用户名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="choseTeacher(scope.row)">选择</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="text-align: right">
      <el-pagination
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </el-row>
  </el-dialog>
</template>
<script>
  import {
    teacherGet
  } from "@/api/teacher";

  export default {
    name: 'teacherDialog',
    data() {
      return {
        teacherLs: [],
        total: 0,
        queryStr: ''
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.onInit();
    },
    methods: {
      onInit() {
        this.getTeacher().then(res => {
          this.teacherLs = res.objects;
          this.total = res.num_results;
        });
      },
      getTeacher(queryStr) {
        const filter = this.$json2filter({
          'id|username|given_name|family_name': this.queryStr
        });
        filter.limit = this.$MINI_LIMIT;
        return teacherGet(filter).then(resp => {
          return resp.data;
        });
      },
      choseTeacher(teacher) {
        this.$emit('chose', teacher);
        this.close();
      },
      close() {
        this.$emit('update:visible', false);
      }
    }
  }
</script>
