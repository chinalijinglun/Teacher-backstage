<template>
  <!-- 教师面试 -->
  <div class="auditions">
    <div class="operation">
      <router-link to="/teacher/dateInterview">
        <el-button type="primary" size="mini">预约面试</el-button>
      </router-link>
      <router-link to="/teacher/interviewResult">
        <el-button type="primary" size="mini">面试结果</el-button>
      </router-link>
    </div>
    <div class="all-course">
      <div class="course-package-top">
        <el-form ref="form" label-width="96px">
          <div class="inps">
            <el-row>
              <el-form-item label="教师姓名：">
                <el-input size="mini" v-model="form.teacher_name"></el-input>
              </el-form-item>
              <el-form-item label="联系电话：">
                <el-input size="mini" v-model="form.mobile"></el-input>
              </el-form-item>
              <el-form-item label="联系邮箱：">
                <el-input size="mini" v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="状态：">
                <el-select v-model="form.state" placeholder="请选择" size="mini">
                  <el-option label="所有状态" value=""></el-option>
                  <el-option v-for="(item, key) in INTERVIEW_STATUS_ENUMS" :key="key" :label="item" :value="key"></el-option>
                </el-select>
              </el-form-item>
            </el-row>
            <el-row>
              <el-form-item label="面试人姓名：">
                <el-input size="mini" v-model="form.interview_name"></el-input>
              </el-form-item>
              <el-form-item class="select-time" label="面试时间：">
                <el-date-picker
                  v-model="form.interview_at"
                  type="datetime"
                  size="mini"
                  placeholder="面试时间">
                </el-date-picker>
              </el-form-item>
            </el-row>
          </div>
          <el-button type="primary" size="mini" @click="query">查询</el-button>
        </el-form>
      </div>
    </div>
    <div class="table-list">
      <el-table :data="tableData" style="width: 100%;margin-top:20px;">
        <el-table-column fixed prop="id" label="编号" style="width: 15%;">
        </el-table-column>
        <el-table-column prop="username" label="教师姓名" style="width: 15%;">
        </el-table-column>
        <el-table-column prop="mobile" label="联系电话" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="email" label="联系邮箱" style="width: 10%;">
        </el-table-column>
        <el-table-column prop="course_name" label="课程名称" style="width: 10%;">
          <template slot-scope="scope">
            {{ scope.row.course_name||'未填写' }}
          </template>
        </el-table-column>
        <el-table-column prop="interview_name" label="面试人" style="width: 10%;">
        </el-table-column>
        <el-table-column label="面试时间" style="width: 10%;">
          <template slot-scope="{row}">
            {{row.start | hasTime}}
          </template>
        </el-table-column>
        <el-table-column prop="" label="课件" style="width: 15%;">
          <template slot-scope="scope">
            {{ scope.row.courseware_num>0?'已上传':'未上传' }}
          </template>
        </el-table-column>
        <el-table-column label="状态" style="width: 15%;">
          <template slot-scope="scope">
            {{ $INTERVIEW[scope.row.integerview_state] }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250px;">
          <template slot-scope="scope">
            <el-button size="mini" v-if="scope.row.integerview_state === 2" @click="modifyTime(scope.row)">修改时间</el-button>
            <template v-if="scope.row.course_schedule_id">
              <el-button size="mini" @click="toRoom(scope.row.course_schedule_id)" v-if="new Date(scope.row.end)<=new Date()">回放</el-button>
              <el-button size="mini" @click="toRoom(scope.row.course_schedule_id)" v-if="new Date(scope.row.end)>new Date()">进入教室</el-button>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <el-row class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.page_no"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </el-row>
    </div>
    <edit-time :visible.sync="visible" :id="curRow.interview_id" @onClose="query"></edit-time>
  </div>
</template>

<script>
  import {
    mangerThacherInterview
  } from '@/api/teacher'
  import {
    INTERVIEW_STATUS_ENUMS
  } from '@/utils/enums'
  import editTime from '@/components/teacher/editTime';
  export default {
    data() {
      return {
        tableData: [],
        total: 0,
        INTERVIEW_STATUS_ENUMS,
        curRow: {},
        visible: false,
        startDate: null, //开始时间
        endDate: null, //结束时间
        form: {
          "email": "",
          "interview_at": "",
          "interview_name": "",
          "mobile": "",
          "page_no": 1,
          "state": "",
          "teacher_name": ""
        }
      }
    },
    created() {
      this.query();
    },
    methods: {
      toRoom(id) {
			  window.open(`#/room?id=${id}`)
      },
      handleCurrentChange(val) {
        this.page_no = val;
        this.query();
      },
      query() {
        const f = this.$deleteEmptyProps(this.form);
        mangerThacherInterview({
          ...f,
          page_no: 1,
          page_limit: 10
        }).then(resp => {
          this.tableData = resp.data.objects;
          this.total = resp.data.num_results;
        })
      },
      modifyTime(row) {
        this.curRow = row;
        this.$nextTick(_=>{
          this.visible = true;
        })
      }
    },
    components: {
      editTime
    }
  }
</script>

<style scoped>
  .operation button {
    margin-right: 40px;
  }

  h3 {
    padding: 20px 0;
    margin-left: 10px;
  }

  .inps .el-form-item {
    width: 20%;
    float: left;
  }

  .el-input {
    width: 95%;
  }

  .inps .select-time {
    width: 35%;
  }

  .course-package-top button {
    float: left;
    margin: 10px;
  }

  .course-package-top {
    overflow: hidden;
  }

  .operation {
    margin-left: 20px;
    margin-left: 20px;
  }

  .create-time {
    width: 45%;
    float: left;
    padding: 10px;
  }

  .create-time div {
    width: 35%;
    margin-right: 20px;
  }

  .block {
    text-align: right;
  }
</style>
