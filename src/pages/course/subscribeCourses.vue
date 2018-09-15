<template>
  <div class="subscribe-courses">
    <p class="subscribe-tile">约课</p>
    <el-row class="subscribe-storey">
      <el-form label-width="110px">
        <el-row>
          <el-form-item label="开课日期：">
            <el-date-picker
              v-model="startTime"
              type="date"
              size="mini"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="每周上课时间：">
            <el-row>
              <el-checkbox v-model="dayChose[0].check">
                <span class="week-span">周一</span>
                <el-time-picker
                  is-range
                  format="HH:mm"
                  size="mini"
                  v-model="dayChose[0].timeRange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox v-model="dayChose[1].check">
                <span class="week-span">周二</span>
                <el-time-picker
                  is-range
                  format="HH:mm"
                  size="mini"
                  v-model="dayChose[1].timeRange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox v-model="dayChose[2].check">
                <span class="week-span">周三</span>
                <el-time-picker
                  is-range
                  format="HH:mm"
                  size="mini"
                  v-model="dayChose[2].timeRange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox v-model="dayChose[3].check">
                <span class="week-span">周四</span>
                <el-time-picker
                  is-range
                  format="HH:mm"
                  size="mini"
                  v-model="dayChose[3].timeRange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox v-model="dayChose[4].check">
                <span class="week-span">周五</span>
                <el-time-picker
                  is-range
                  format="HH:mm"
                  size="mini"
                  v-model="dayChose[4].timeRange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox v-model="dayChose[5].check">
                <span class="week-span">周六</span>
                <el-time-picker
                  is-range
                  format="HH:mm"
                  size="mini"
                  v-model="dayChose[5].timeRange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox v-model="dayChose[6].check">
                <span class="week-span">周日</span>
                <el-time-picker
                  is-range
                  format="HH:mm"
                  size="mini"
                  v-model="dayChose[6].timeRange"
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围">
                </el-time-picker>
              </el-checkbox>
            </el-row>
          </el-form-item>
        </el-row>
      </el-form>
      <el-button type="primary" @click="getSchedule">确定</el-button>
    </el-row>
    <el-row class="subscribe-storey class-schedule">
      <p class="subscribe-storey-tltle">课程表：</p>
      <div class="list-container">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            type="index"
            label="编号">
          </el-table-column>
          <el-table-column
            prop="name"
            label="课节名">
          </el-table-column>
          <el-table-column
            prop="date"
            min-width="300px"
            label="上课时间">
            <template slot-scope="scope">
              <p v-if="!scope.row.edit">{{scope.row.date}}</p>
              <p class="time-edit" v-else>
                <el-date-picker
                  v-model="dateEdit.date"
                  type="date"
                  size="mini"
                  style="width: 130px;"
                  placeholder="选择日期时间">
                </el-date-picker>
                <el-input style="width: 65px;" v-model="dateEdit.start" size="mini" type="text"/>
                <el-input style="width: 65px;" v-model="dateEdit.end" size="mini" type="text"/>
              </p>
            </template>
          </el-table-column>
          <el-table-column
            label="上课时间">
            <template slot-scope="scope">
              <el-button size="mini" @click="save(scope.$index)" v-if="scope.row.edit">保存</el-button>
              <el-button size="mini" @click="edit(scope.$index)" v-else>编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-row>
    <el-row class="subscribe-storey btn-container">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button @click="goBack">返回</el-button>
    </el-row>
  </div>
</template>
<script>
  import {
    courseBareGetByCourseId,
    courseSchedule
  } from '@/api/course'
  export default {
    data() {
      return {
        dateEdit: {
          date: '',
          start: '',
          end: ''
        },
        course_id: '',
        className: '',
        totleNum: 50,
        startTime: new Date(),
        tableData: [],
        dayChose: [{
          check: false,
          day: 1,
          timeRange: [new Date(2018, 5, 28, 0, 0), new Date(2018, 5, 28, 23, 59)]
        },{
          check: false,
          day: 2,
          timeRange: [new Date(2018, 5, 28, 0, 0), new Date(2018, 5, 28, 23, 59)]
        },{
          check: false,
          day: 3,
          timeRange: [new Date(2018, 5, 28, 0, 0), new Date(2018, 5, 28, 23, 59)]
        },{
          check: false,
          day: 4,
          timeRange: [new Date(2018, 5, 28, 0, 0), new Date(2018, 5, 28, 23, 59)]
        },{
          check: false,
          day: 5,
          timeRange: [new Date(2018, 5, 28, 0, 0), new Date(2018, 5, 28, 23, 59)]
        },{
          check: false,
          day: 6,
          timeRange: [new Date(2018, 5, 28, 0, 0), new Date(2018, 5, 28, 23, 59)]
        },{
          check: false,
          day: 7,
          timeRange: [new Date(2018, 5, 28, 0, 0), new Date(2018, 5, 28, 23, 59)]
        }]
      }
    },
    created() {
      this.course_id = this.$route.query.id;
      this.getCourseInfo();
    },
    methods: {
      submit() {
        if(!this.tableData.length) {
          this.$message.error('请设置上课时间！');
          return false;
        }
        const schedules = this.getScheduleTimes();
        courseSchedule({
          course_id: this.course_id,
          class_at_start: schedules[0].start,
          class_at_end: schedules[schedules.length-1].end,
          schedules
        }).then(resp => {
          this.$message.success('课程安排成功！');
          this.goBack();
        })
      },
      goBack() {
        this.$router.back()
      },
      getScheduleTimes() {
        return this.tableData.map(item => {
          const start = new Date(
            item.dateDetail.year,
            item.dateDetail.month,
            item.dateDetail.day,
            item.dateDetail.hourStart,
            item.dateDetail.minutesStart
          )
          const end = new Date(
            item.dateDetail.year,
            item.dateDetail.month,
            item.dateDetail.day,
            item.dateDetail.hourEnd,
            item.dateDetail.minutesEnd
          )
          const course_name = item.name;
          return {
            course_name,
            start,
            end
          }
        })
      },
      edit(index){
        this.tableData.forEach((item, i) => {
          if(i === index) {
            this.dateEdit.date = this.fmtDate(item.dateDetail)
            this.dateEdit.start = this.fmtTime({
              hour: item.dateDetail.hourStart,
              minutes: item.dateDetail.minutesStart
            })
            this.dateEdit.end = this.fmtTime({
              hour: item.dateDetail.hourEnd,
              minutes: item.dateDetail.minutesEnd
            })
            item.edit = true;
          }else {
            item.edit = false;
          }
        });
      },
      fmtDate({year, month, day}) {
        return this.$dateFmt(new Date(year, month, day), 'yyyy-MM-dd')
      },
      fmtTime({hour, minutes}) {
        return `${hour}:${minutes}`
      },
      fmtRangeItem({year, month, day, hourStart, minutesStart, hourEnd, minutesEnd}) {
        return `${this.$dateFmt(new Date(year, month, day), 'yyyy-MM-dd')} ${hourStart}:${minutesStart}-${hourEnd}:${minutesEnd}`;
      },
      save(index){
        const year = new Date(this.dateEdit.date).getFullYear()
        const month = new Date(this.dateEdit.date).getMonth()
        const day = new Date(this.dateEdit.date).getDate()
        const [hourStart, minutesStart] = this.dateEdit.start.split(':');
        const [hourEnd, minutesEnd] = this.dateEdit.end.split(':');
        const fmtStr = this.fmtRangeItem({year, month, day, hourStart, minutesStart, hourEnd, minutesEnd});
        this.tableData[index].edit = false;
        this.tableData[index].date = fmtStr;
        this.tableData[index].dateDetail = {fmtStr, year, month, day, hourStart, minutesStart, hourEnd, minutesEnd};
        this.dateEdit.date = '';
        this.dateEdit.start = '';
        this.dateEdit.end = '';
      },
      getCourseInfo() {
        courseBareGetByCourseId(this.course_id).then(resp => {
          this.totleNum = resp.data.classes_number;
          this.className = resp.data.course_name;
        })
      },
      getSchedule() {
        const startTime = this.$dateFactory(this.startTime);
        const dayChose = this.dayChose.filter(item=>{
          return item.check;
        });
        // 给一个初始值 排除当天
        let dateTmp = this.$dateFactory(startTime.getDayStart().getTime());
        let list = [];
        let totalNum = this.totleNum;
        let tmpNum = this.totleNum;
        while(totalNum>0) {
          dayChose.forEach(item => {
            const dateByDay = dateTmp.getThisWeekDateByDay(item.day);
            if(dateByDay >= dateTmp ) {
              const dateObj = this.fmtScheduleTimeRange(dateByDay, item.timeRange);
              list.push({
                name: this.className + ' ' + (this.totleNum-totalNum+1),
                date: dateObj.fmtStr,
                dateDetail: dateObj,
                edit: false
              });
              totalNum--;
            }
          });
          dateTmp = this.$dateFactory(dateTmp.getThisWeekDateByDay(1).getTime()+7*24*60*60*1000);
        }
        list.length = this.totleNum;
        this.tableData = list;
      },
      fmtScheduleTimeRange(date, timeRange) {
        const startTime = new Date(timeRange[0]);
        const endTime = new Date(timeRange[1]);
        const year = this.formatNumber(date.getFullYear());
        const month = date.getMonth();
        const monthStr = this.formatNumber(month+1);
        const day = this.formatNumber(date.getDate());
        const hourStart = this.formatNumber(startTime.getHours());
        const minutesStart = this.formatNumber(startTime.getMinutes());
        const hourEnd = this.formatNumber(endTime.getHours());
        const minutesEnd = this.formatNumber(endTime.getMinutes());
        return {
          fmtStr: this.fmtRangeItem({year, month, day, hourStart, minutesStart, hourEnd, minutesEnd}),
          year,
          month,
          day,
          hourStart,
          minutesStart,
          hourEnd,
          minutesEnd
        }
      },
      formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
      }
    }
  }
</script>
<style scoped>
  .subscribe-tile {
    line-height: 30px;
    font-size: 16px;
    color: #666;
    border-bottom: 1px #eee solid;
    margin-bottom: 15px;
  }
  .subscribe-storey {
    width: 800px;
    margin-bottom: 50px;
  }
  .week-span {
    display: inline-block;
    margin-right: 15px;
  }
  .btn-container {
    text-align: center;
  }
  .subscribe-storey-tltle {
    color: #606266;
  }
  .time-edit input {
    display: inline-block;
  }
</style>

