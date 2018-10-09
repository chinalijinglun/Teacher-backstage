<template>
  <div class="student-list">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="120px">
        <el-row>
          <el-form-item label="学生ID：">
            <el-input v-model="form.student_id" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="学生姓名：">
            <el-input v-model="form.student_name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="学生账号：">
            <el-input v-model="form.account" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="年级：">
            <el-select v-model="form.gender" placeholder="请选择" size="mini">
              <el-option label="全部" value=""></el-option>
              <el-option v-for="(item, key) in $GRADE_ENUMS" :key="key" :label="item" :value="key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="家长联系电话：">
            <el-input v-model="form.parent_mobile" size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="意向科目：">
            <el-select v-model="form.category_1" placeholder="请选择" size="mini" @change="handlerCurriculumChange">
              <el-option label="全部" value=""></el-option>
              <el-option v-for="(item, index) in curriculumLs" :key="index" :label="item.full_name_zh" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="form.category_2" placeholder="请选择" size="mini">
              <el-option label="全部" value=""></el-option>
              <el-option v-for="(item, index) in subjectCategoryLs" :key="index" :label="item.subject_category_zh" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="注册时间：">
            <date-range
              :start-date.sync="form.created_at_start"
              :end-date.sync="form.created_at_end"
              size="mini"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </date-range>
          </el-form-item>
          <el-form-item label="来源：">
            <el-select v-model="form.channel_id" placeholder="请选择" size="mini">
              <el-option label="所有来源" value=""></el-option>
              <el-option v-for="(item, index) in channelLs" :key="index" :label="item.channel_name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否报名试听：">
            <el-select v-model="form.enroll_type" placeholder="请选择" size="mini">
              <el-option label="全部" value=""></el-option>
              <el-option label="已报名" :value="1"></el-option>
              <el-option label="未报名" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="query">查询</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-contain">
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
            prop="created_at"
            label="注册时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="username"
            label="学生姓名">
          </el-table-column>
          <el-table-column
            prop="grade"
            label="年级">
          </el-table-column>
          <el-table-column
            prop="parent_mobile"
            label="家长联系电话">
          </el-table-column>
          <el-table-column
            prop="channel_name"
            label="来源">
          </el-table-column>
          <el-table-column
            label="是否报名试听">
            <template slot-scope="{row}">
              {{ {0: '未报名', 1: '已报名'}[row.enroll_type]|| '已报名' }}
            </template>
          </el-table-column>
          <el-table-column
            width="440px"
            label="操作">
            <template slot-scope="scope">
              <el-row>
                <el-button size="mini" @click="toDetail(scope.row)">他的资料</el-button>
                <el-button size="mini" @click="toAppoint(scope.row)">报名试听</el-button>
                <el-button size="mini" @click="$router.push(`/course/auditions?student_id=${scope.row.id}`)">他的试听课</el-button>
                <el-button size="mini" @click="$router.push(`/course/generalCourse?student_id=${scope.row.id}`)">他的普通课</el-button>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="pagination-container">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.page"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </el-row>
    </el-row>
    <appoint-course :visible.sync="visible" :id="curId"></appoint-course>
  </div>
</template>
<script>
  import appointCourse from '@/components/students/dialog/appointCourse';
  import paginationMix from '@/components/commons/mixins/paginationMix';
  import {
    mangerStudents
  } from '@/api/student'
  import {
    channelBareGet
  } from '@/api/channel'
  import {
    curriculumGetBare
  } from '@/api/curriculum'
  import {
    subjectCategoryGetBare
  } from '@/api/subject_category'

  export default {
    data() {
      return {
        channelLs: [],
        curriculumLs: [],
        subjectCategoryLs: [],
        form: {
          category_1: '',
          category_2: '',
          channel_id: '',
          created_at_end: '',
          created_at_start: '',
          gender: '',
          page_limit: 10,
          parent_mobile: '',
          student_id: '',
          student_name: '',
          enroll_type: '',
          account: '',
          page: 1
        },
        totalCount: 0,
        tableData: [],
        curId: '',
        visible: false
      };
    },
    created() {
      this.query();
      this.getChannelLs();
      this.getCurriculumLs();
    },
    methods: {
      toAppoint(row) {
        this.curId = row.id;
        this.$nextTick(_=>{
          this.visible = true;
        })
      },
      query() {
        const {
          category_1,
          category_2,
          channel_id,
          created_at_end,
          created_at_start,
          gender,
          page_limit,
          parent_mobile,
          student_id,
          student_name,
          enroll_type,
          account,
          page
        } = this.form;
        const form = this.$deleteEmptyProps({
          category_1,
          category_2,
          channel_id,
          created_at_end,
          created_at_start,
          gender,
          page_limit,
          parent_mobile,
          student_id,
          enroll_type,
          account,
          student_name
        })
        mangerStudents({
          ...form,
          page_no: page
        }).then(resp => {
          this.tableData = resp.data.objects;
          this.totalCount = resp.data.num_results;
        })
      },
      toDetail(row) {
        this.$router.push(`/student/studentDetail?id=${row.id}&blkname=info`);
      },
      getChannelLs() {
        const filter = this.$json2filter({})
        return channelBareGet(filter,{
          results_per_page: 1000,
          page: 1
        }).then(resp => {
          this.channelLs = resp.data.objects;
        })
      },
      getCurriculumLs() {
        const filter = this.$json2filter({});
        return curriculumGetBare(filter).then(resp => {
          this.curriculumLs = resp.data.objects;
        })
      },
      handlerCurriculumChange(id) {
        this.subjectCategoryLs = [];
        this.form.category_2 = '';
        this.getSubjectCategoryLs(id);
      },
      getSubjectCategoryLs(id) {
        const filter = this.$json2filter({
          curriculum_id: id
        });
        return subjectCategoryGetBare(filter).then(resp => {
          this.subjectCategoryLs = resp.data.objects;
        })
      }
    },
    mixins: [paginationMix],
    components: {
      appointCourse
    }
  }
</script>
<style scoped>
.form-contain {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 3px;
  margin-bottom: 20px;
}
.list-contain {
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
