<template>
  <el-dialog title="选择教师" :visible.sync="dialogVisible">
    <el-row>
      <el-form :inline="true">
        <el-form-item>
          <el-input size="mini" placeholder="输入教师姓名、用户名或ID" v-model="queryStr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" @click="getTeacher">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table :data="teacherLs">
      <el-table-column property="id" label="id" width="150"></el-table-column>
      <el-table-column label="姓名" property="username" width="200">
        <template slot-scope="{row}">
          {{`${row.first_name || ''} ${row.middle_name || ''} ${row.last_name || ''}`}}
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
    teacherGet
  } from "@/api/teacher";

  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'teacherDialog',
    data() {
      return {
        teacherLs: [],
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
      this.getTeacher();
    },
    methods: {
      handleCurrentChange(p) {
        this.page = p;
        this.getTeacher()
      },
      getTeacher() {
        const filter = this.$json2filter({
          'id|username|first_name|middle_name|last_name': this.queryStr,
          state: [
            'CONTRACTOR',
            'WAIT_FOR_TRAIN',
            'TRAIN_PASS',
            'TRAIN_ERROR',
            'WORKING',
            'NO_WORK',
            'INVALID'
          ]
        });
        return teacherGet(filter, {
          page: this.page
        }).then(resp => {
          this.teacherLs = resp.data.objects;
          this.total = resp.data.num_results;
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
