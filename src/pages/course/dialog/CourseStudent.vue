<template>
  <el-dialog title="选择学生" width="800px" @close="handleClose" @open="open" :visible.sync="dialogVisible">
    <el-table :data="studentLs" border>
      <el-table-column property="student_id" label="id"></el-table-column>
      <el-table-column property="student_name" label="学生姓名"></el-table-column>
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
    courseStudent
  } from "@/api/course";

  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'studentDialog',
    data() {
      return {
        studentLs: [],
        page: 1,
        total: 0
      }
    },
    mixins: [dialogContainer],
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      courseId: {}
    },
    methods: {
      open() {
        this.getStudent();
      },
      handleCurrentChange(p) {
        this.page = p;
        this.getStudent()
      },
      getStudent() {
        return courseStudent({
          course_id: this.courseId,
          page_no: this.page
        }).then(resp => {
          this.studentLs = resp.data.objects;
          this.total = resp.data.num_results;
          return resp.data;
        });
      },
      choseStudent(student) {
        this.$emit('chose', {...student, course_id: this.courseId});
        this.close();
      },
      close() {
        this.$emit('update:visible', false);
      },
      handleClose() {
        this.$emit('close')
      }
    }
  }
</script>
