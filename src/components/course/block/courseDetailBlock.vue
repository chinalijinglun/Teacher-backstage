<template>
  <el-row class="course-detail-block">
    <div class="course-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="name"
          label="课节名称">
        </el-table-column>
        <el-table-column
          prop="courseTime"
          label="上课时间">
        </el-table-column>
        <el-table-column
          prop="coursewareState"
          label="课件">
        </el-table-column>
        <el-table-column
          prop="state_text"
          label="课节状态">
        </el-table-column>
        <el-table-column
          prop="courseStateText"
          label="课节类型">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <template v-if="scope.row.schedule_type !== 'CANCEL' && scope.row.schedule_type !== 'TROUBLE_CLASS'">
              <el-row class="table-btn-row" v-if="scope.row.schedule_type !== 'CANCEL' && scope.row.schedule_type !== 'TROUBLE_CLASS'">
                <el-button size="mini" v-if="scope.row.state !== 3">进入教室</el-button>
                <el-button size="mini" v-if="scope.row.state === 3">回放</el-button>
                <el-button size="mini">课件管理</el-button>
                <!--未上课-->
                <!--已上课-->
              </el-row>
              <el-row class="table-btn-row" v-if="scope.row.state === 1">
                <el-button size="mini" @click="modifyTime(scope.row)">修改时间</el-button>
                <!-- <el-button size="mini" @click="cancel(scope.row)">取消课程</el-button> -->
              </el-row>
              <el-row class="table-btn-row" v-if="scope.row.state === 3">
                <el-button size="mini" @click="reportError(scope.row)">报告问题</el-button>
                <el-button size="mini">课后作业</el-button>
              </el-row>
              <el-row class="table-btn-row" v-if="scope.row.state === 3">
                <el-button size="mini" @click="toStudyResult(scope.row)">课后总结</el-button>
                <el-button size="mini">学生评价</el-button>
              </el-row>
            </template>
            <!-- <el-row class="table-btn-row" v-if="scope.row.schedule_type === 'CANCEL'">
              <el-button size="mini" @click="reviewReason(scope.row)">查看原因</el-button>
            </el-row> -->
            <!--问题课-->
            <el-row class="table-btn-row" v-if="scope.row.schedule_type === 'TROUBLE_CLASS'">
              <el-button size="mini" @click="reviewReason(scope.row)">查看原因</el-button>
              <el-button size="mini" @click="addCompensate(scope.row)">添加补偿课</el-button>
            </el-row>
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
    <edit-time :visible.sync="visible" :id="curRow.id" @onClose="query"></edit-time>
    <reason-dialog :visible.sync="reasonVisible" @onSubmit="submitReason" @onClose="query"></reason-dialog>
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
    getCourseSchedule
  } from '@/api/course'
  import {
    modifyScheduleType
  } from '@/api/course_schedule'
  import {
    //@param {before_state, after_state, primary_data_id, action_event_desc, action_event_type} form
    actionEventPost,
    actionEventBareGet
  } from '@/api/action_event'
  import paginationMix from '@/components/commons/mixins/paginationMix';
  import editTime from '../dialog/editTime';
  import reasonDialog from '../dialog/reasonDialog';
  import {
    ACTION_EVENT_TYPE
  } from '@/utils/enums'
  const actionEventConfig = {
    action_event_type: ACTION_EVENT_TYPE.UNKNOWN,
    primary_table_name: 'course_schedule'
  };
  export default {
    name: 'course-detail-block',
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
      toStudyResult(row) {
        this.$router.push({
          path:'/course/studyResult',
          query: {
            id: row.id
          }
        })
      },
      addCompensate() {
        
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
              courseTime: this.$getCourseTime(item.start, item.end),
              coursewareState: +item.courseware_num>0?'已上传':'未上传',
              courseStateText: this.$COURSE_SCHEDULE_STATE_ENUM[item.schedule_type]
            }
          });
        })
      },
      modifyTime(row) {
        this.curRow = row;
        this.$nextTick(_=>{
          this.visible = true;
        })
      },
      reportError(row) {
        this.curRow = row;
        this.modifyType = 'TROUBLE_CLASS';
        this.reasonVisible = true;
      },
      cancel(row) {
        this.curRow = row;
        this.modifyType = 'CANCEL';
        this.reasonVisible = true;
      },
      reviewReason(row) {
        this.curRow = row;
        this.modifyType = row.schedule_type;
        this.$nextTick(_=>{
          this.reasonReviewShow = true;
        })
      },
      submitReason(reason) {
        modifyScheduleType({
          course_schedule_id: this.curRow.id,   
          type: this.modifyType 
        }).then(resp => {
          actionEventPost({
            ...actionEventConfig,
            primary_data_id: this.curRow.id,
            before_state: this.$COURSE_SCHEDULE_STATE_NUMBER[this.curRow.schedule_type],
            after_state: this.$COURSE_SCHEDULE_STATE_NUMBER[this.modifyType],
            action_event_desc: reason
          }).then(resp => {
            this.reasonVisible = false;
            this.query()
          })
        })
      }
    },
    mixins: [paginationMix],
    components: {
      editTime,
      reasonDialog
    }
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

