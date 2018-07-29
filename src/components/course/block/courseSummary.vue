<template>
  <el-row class="course-detail-block">
    <div class="course-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="student_name"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="时间段">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="toDetail(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-row class="pagination-container">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="form.page"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </el-row>
		<action-event-review 
		:visible.sync="reasonReviewShow" 
		:primaryDataId="curRow.id" 
		:afterState="$COURSE_SCHEDULE_STATE_NUMBER[modifyType]" 
		primaryTableName="course_schedule" 
		:actionEventType="1" />
  </el-row>
</template>
<script>
  import {
    courseSummary
  } from '@/api/course'
  import paginationMix from '@/components/commons/mixins/paginationMix';
  export default {
    name: 'course-summary-block',
    data() {
      return {
        form: {
          course_id: '',
          page: 1
        },
        totalCount: 0,
        tableData: [],
        visible: false,
        reasonVisible: false,
        reasonReviewShow: false,
        curRow: {},
        modifyType: ''
      };
    },
    created() {
      this.form.course_id = this.$route.query.id;
      this.query();
    },
    methods: {
      query() {
        const {
          course_id,
          page: page_no
        } = this.form;
        courseSummary({
          course_id,
          page_no,
          type: 'SUMMARY',
          page_limit: 10
        }).then(resp=>{
          this.totalCount = resp.data.num_results;
          this.tableData = resp.data.objects;
        })
      },
      toDetail(row) {
        this.$router.push({
          path: '/course/courseSummary',
          query: {
            id: row.study_result_id
          }
        })
      }
    },
    mixins: [paginationMix]
  }
</script>
<style scoped>
  .title-info {
    overflow: hidden;
    border-bottom: 1px #eee solid;
    line-height: 30px;
  }
  .title-info .title-info-li {
    float: left;
    margin-right: 20px;
  }
  .title-info .title-info-li span {
    margin-right: 10px;
  }
  .info-key {
    color: #222;
  }
  .info-value {
    color: #666;
  }
  .pagination-container {
    text-align: right;
    margin-top: 30px;
  }
  .table-btn-row{
    padding: 5px;
  }
  .table-btn-row .el-button.el-button--mini{
    min-width: 80px;
  }
</style>

