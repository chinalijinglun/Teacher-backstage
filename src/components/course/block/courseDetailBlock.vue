<template>
  <el-row class="course-detail-block">
    <div class="course-table">
      <el-table
        :data="tableData"
        border
        :span-method="mergeTable"
        style="width: 100%; margin-top: 20px">
        <el-table-column
          label="课程名称"
          width="180">
          <template slot-scope="scope">
            <p>{{scope.row.course_name}}</p>
            <el-button type="text" size="mini">课程阶段性评价</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="课节名称">
        </el-table-column>
        <el-table-column
          prop="start"
          label="上课时间">
        </el-table-column>
        <el-table-column
          label="课件">
          <template slot-scope="scope">
            {{+scope.row.courseware_num > 0?'已上传':'未上传'}}
          </template>
        </el-table-column>
        <el-table-column
          prop="state_text"
          label="课节状态">
        </el-table-column>
        <el-table-column
          label="课节类型">
          <template slot-scope="scope">
            {{scope.row.schedule_type}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" v-if="scope.row.state===1 || scope.row.state===2">进入教室</el-button>
            <template v-if="scope.row.state===3">
              <el-button size="mini">回放</el-button>
              <el-button size="mini">作业</el-button>
              <el-button size="mini" @click="toEvaluate(scope.row)">评价</el-button>
            </template>
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
  </el-row>
</template>
<script>
  import {
    getCourseSchedule
  } from '@/api/course'
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    name: 'course-detail-block',
    data() {
      return {
        form: {
          course_id: '',
          page: 1
        },
        consultants_name: '',
        student_helpers_name: '',
        course_name: '',
        student_name: '',
        teacher_name: '',
        totalCount: 0,
        tableData: [],
        cur_court: 1
      };
    },
    created() {
      this.form.course_id = this.$route.query.id;
      this.query();
    },
    methods: {
      toEvaluate(row) {
        this.$router.push({
          path: '/student/scheduleEvaluate',
          query: {
            student_name: encodeURI(this.student_name),
            teacher_name: encodeURI(this.teacher_name),
            id: row.id
          }
        })
      },
      stateFilter(row) {
        const now = new Date();
        const start = new Date(row.start);
        const end = new Date(row.end);
        if(now < start) {
          return {
            state: 1,
            state_text: '未开始'
          };
        } else if(now>start && now<end) {
          return {
            state: 2,
            state_text: '进行中'
          };
        } else {
          return {
            state: 3,
            state_text: '已结束'
          };
        }
      },
      query() {
        const {
          course_id,
          page: page_no
        } = this.form;
        getCourseSchedule({
          course_id,
          page_no,
          page_limit: 10
        }).then(resp=>{
          this.totalCount = resp.data.num_results;
          this.tableData = resp.data.objects.map(item=>{

            return {
              ...item,
              ...this.stateFilter(item),
              course_name:this.course_name
            }
          });
          this.cur_court = resp.data.objects.length;
        })
      },
      mergeTable({ row, column, rowIndex, columnIndex }) {
        if(columnIndex === 0) {
          if (rowIndex % this.cur_court === 0) {
            return {
              rowspan: this.cur_court,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
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
</style>

