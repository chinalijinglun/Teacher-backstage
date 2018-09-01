<template>
  <!-- 试听课 -->
  <div class="auditions">
    <div class="operation">
      <router-link to="/course/studentTrial">
        <el-button type="primary">学生试听课报名查询</el-button>
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
                <el-option value="" label="全部"></el-option>
                <el-option value="2" label="已上课"></el-option>
                <el-option value="1" label="未上课"></el-option>
                <el-option value="3" label="已取消"></el-option>
                <el-option value="4" label="问题课"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="课件：">
              <el-select size="mini" v-model="form.courseware_state" name="" id="">
                <el-option value="">所有状态</el-option>
                <el-option :value="1">已上传</el-option>
                <el-option :value="0">未上传</el-option>
              </el-select>
            </el-form-item>
          </el-row>
          <el-row>
            <el-button @click="query" size="mini" type="primary">查询</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="table-list">
      <el-table :data="tableData" style="width: 100%;margin-top:20px;">
        <el-table-column fixed prop="id" label="编号">
        </el-table-column>
        <el-table-column label="试讲课程名称">
          <template slot-scope="scope">试听课程</template>
        </el-table-column>
        <el-table-column prop="teacher_name" label="教师姓名">
        </el-table-column>
        <el-table-column prop="student_name" label="学生">
        </el-table-column>
        <el-table-column prop="courseTime" label="上课时间">
        </el-table-column>
        <el-table-column prop="coursewareState" label="课件">
        </el-table-column>
        <el-table-column prop="courseStateText" label="类型">
        </el-table-column>
        <el-table-column prop="state_text" label="状态">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220px">
          <template slot-scope="scope">
            <template v-if="scope.row.course_schedule_state !== 'CANCEL'">
              <el-row class="table-btn-row" v-if="scope.row.course_schedule_state !== 'CANCEL'">
                <el-button size="mini" v-if="scope.row.state !== 3">进入教室</el-button>
                <el-button size="mini" v-if="scope.row.state === 3">回放</el-button>
                <el-button size="mini">课件管理</el-button>
                <!--未上课-->
                <!--已上课-->
              </el-row>
              <el-row class="table-btn-row" v-if="scope.row.state === 1">
                <el-button size="mini" @click="modifyTime(scope.row)">修改时间</el-button>
                <el-button size="mini" @click="cancel(scope.row)">取消课程</el-button>
              </el-row>
              <el-row class="table-btn-row" v-if="scope.row.state === 3">
                <el-button size="mini" @click="toHomework(scope.row)">课后作业</el-button>
                <el-button size="mini" @click="toStudyResult(scope.row)">课后总结</el-button>
              </el-row>
              <el-row class="table-btn-row" v-if="scope.row.state === 3">
                <el-button size="mini" @click="toStudentEvaluate(scope.row)">学生评价</el-button>
              </el-row>
            </template>
            <el-row class="table-btn-row" v-if="scope.row.course_schedule_state === 'CANCEL'">
              <el-button size="mini" @click="reviewReason(scope.row)">查看原因</el-button>
            </el-row>
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
    <edit-time :visible.sync="visible" :id="curRow.course_schedule_id" @onClose="query"></edit-time>
    <reason-dialog :visible.sync="reasonVisible" @onSubmit="submitReason" @onClose="query"></reason-dialog>
		<action-event-review 
		:visible.sync="reasonReviewShow" 
		:primaryDataId="curRow.course_schedule_id" 
		:afterState="$COURSE_SCHEDULE_STATE_NUMBER[modifyType]" 
		primaryTableName="course_schedule" 
		:actionEventType="1" />
  </div>
</template>
<script>
  import editTime from '@/components/course/dialog/editTime';
  import reasonDialog from '@/components/course/dialog/reasonDialog';
  import {
    studentTryout
  } from '@/api/course';
  import {
    modifyScheduleType
  } from '@/api/course_schedule';
  import {
    courseSchedule
  } from '@/api/course';
  import {
    //@param {before_state, after_state, primary_data_id, action_event_desc, action_event_type} form
    actionEventPost,
    actionEventBareGet
  } from '@/api/action_event'
  import {
    ACTION_EVENT_TYPE
  } from '@/utils/enums'
  const actionEventConfig = {
    action_event_type: ACTION_EVENT_TYPE.UNKNOWN,
    primary_table_name: 'course_schedule'
  };
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
        },
        visible: false,
        reasonVisible: false,
        reasonReviewShow: false,
        curRow: {},
        modifyType: ''
      }
    },
    created() {
      this.query();
    },
    methods: {
      toHomework(row) {
        this.$router.push({
          path:'/course/scheduleHomework',
          query: {
            id: row.course_schedule_id
          }
        })
      },
      toStudyResult(row) {
        this.$router.push({
          path:'/course/studyResult',
          query: {
            id: row.course_schedule_id
          }
        })
      },
      toStudentEvaluate(row) {
        this.$router.push({
          path: '/course/studentEvaluate',
          query: {
            id: row.course_schedule_id
          }
        })
      },
      addCompensate() {
        
      },
      handleCurrentChange(val) {
        this.form.page_no = val;
        this.query()
      },
      stateFilter(row) {
        const now = new Date();
        const start = new Date(row.start);
        const end = new Date(row.end);
        if(now < start) {
          return {
            state: 1,
            state_text: '未上课'
          };
        } else if(now>start && now<end) {
          return {
            state: 2,
            state_text: '进行中'
          };
        } else {
          return {
            state: 3,
            state_text: '已上课'
          };
        }
      },
      query() {
        const f = this.$deleteEmptyProps(this.form);
        studentTryout(f).then(resp => {
          this.tableData = resp.data.objects.map(item => ({
            ...item,
            ...this.stateFilter(item),
            courseTime: this.$getCourseScheduleTime(item.start, item.end),
            coursewareState: +item.courseware_num>0?'已上传':'未上传',
            courseStateText: this.$COURSE_SCHEDULE_STATE_ENUM[item.course_schedule_state]
          }));
          this.total = resp.data.num_results;
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
          course_schedule_id: this.curRow.course_schedule_id,   
          type: this.modifyType 
        }).then(resp => {
          actionEventPost({
            ...actionEventConfig,
            primary_data_id: this.curRow.course_schedule_id,
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
    components: {
      editTime,
      reasonDialog
    }
  }
</script>

<style scoped>
  .operation {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px #ddd solid;
  }
  .block {
    padding: 20px;
    text-align: right;
  }
  .table-btn-row{
    padding: 5px;
  }
  .table-btn-row .el-button.el-button--mini{
    width: 80px;
  }
</style>
