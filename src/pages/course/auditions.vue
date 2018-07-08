<template>
  <!-- 试听课 -->
  <div class="auditions">
    <div class="operation">
      <router-link to="/course/studentTrial">
        <el-button size="mini" type="primary">学生试听报名</el-button>
      </router-link>
      <router-link to="/course/dateTeacher">
        <el-button size="mini" type="primary">预约教师上课</el-button>
      </router-link>
    </div>
    <div class="all-course">
      <div class="course-package-top">
        <el-form :inline="true" ref="form" :model="form" label-width="82px">
          <el-row>
            <el-form-item label="教师姓名：">
              <el-input size="mini" v-model="form.teacher_name" placeholder="" type="text" class="placehold" />
            </el-form-item>
            <el-form-item label="上课时间：">
              <el-date-picker size="mini" v-model="form.class_at" placeholder="上课时间"></el-date-picker>
            </el-form-item>
            <el-form-item label="状态：">
              <el-select size="mini" v-model="form.course_schedule_state" name="" id="">
                <el-option value="">所有状态</el-option>
                <el-option value="1">未上</el-option>
                <el-option value="2">已经上课</el-option>
                <el-option value="3">取消</el-option>
                <el-option value="4">问题课</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课件：">
              <el-select size="mini" v-model="form.courseware_state" name="" id="">
                <el-option value="">所有状态</el-option>
                <el-option value="1">有</el-option>
                <el-option value="0">没有</el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row>
            <el-button size="mini" type="primary">查询</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="table-list">

      <el-table :data="tableData" style="width: 100%;margin-top:20px;">
        <el-table-column fixed prop="zhname" label="编号" style="width: 15%;">
        </el-table-column>
        <el-table-column prop="enname" label="试讲课程" style="width: 15%;">
        </el-table-column>
        <el-table-column prop="zip" label="年纪" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="province" label="教师姓名" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="address" label="学生" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="date" label="上课时间" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="zip" label="课件" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="city" label="状态" style="width: 15%;">
        </el-table-column>
        <el-table-column fixed="right" label="操作" style="width: 15%;">
          <template slot-scope="scope">
            <button type="button" class="el-button el-button--default el-button--small">
              <span>报名</span>
            </button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.page_no"
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
    studentTryout
  } from '@/api/course'
  export default {
    data() {
      return {
        tableData: [],
        total: 0,
        form: {
          page_limit: 10,
          page_no: 1,
          teacher_name: '',
          class_at: '',
          course_schedule_state: '',
          courseware_state: ''
        }
      }
    },
    created() {
      this.query();
    },
    methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.form.page_no = val;
        this.query()
      },
      query() {
        const f = this.$deleteEmptyProps(this.form);
        studentTryout(f).then(resp => {
          this.tableData = resp.data.objects;
          this.total = resp.data.num_results;
        })
      }
    },
  }
</script>

<style scoped>
  .operation {
    margin-bottom: 20px;
  }
  .block {
    margin: 0 auto;
    padding: 20px;
    width: 600px;
  }
</style>
