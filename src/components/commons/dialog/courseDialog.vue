<template>
  <el-dialog title="选择课程" :visible.sync="dialogVisible">
    <el-row>
      <el-form :inline="true">
        <el-form-item>
          <el-input size="mini" placeholder="输入课程名或id查询" v-model="queryStr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" @click="getCourse">查询</el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-table :data="courseLs">
      <el-table-column property="id" label="id" width="150"></el-table-column>
      <el-table-column label="课程名" property="course_name" width="200">
      </el-table-column>
      <el-table-column property="course_name_zh" label="课程中文名"></el-table-column>
      <el-table-column label="教师姓名">
        <template slot-scope="{row}">
          {{row.primary_teacher | teacherName}}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="choseCourse(scope.row)">选择</el-button>
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
    courseGet
  } from "@/api/course";

  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'courseDialog',
    data() {
      return {
        courseLs: [],
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
      this.getCourse();
    },
    methods: {
      handleCurrentChange(p) {
        this.page = p;
        this.getCourse()
      },
      getCourse() {
        const filter = this.$json2filter({
          'course_name|course_name_zh|id': this.queryStr
        });
        return courseGet(filter, {
          page: this.page
        }).then(resp => {
          this.courseLs = resp.data.objects;
          this.total = resp.data.num_results;
          return resp.data;
        });
      },
      choseCourse(course) {
        this.$emit('chose', course);
        this.close();
      },
      close() {
        this.$emit('update:visible', false);
      }
    }
  }
</script>
