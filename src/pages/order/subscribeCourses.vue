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
            label="上课时间">
          </el-table-column>
        </el-table>
      </div>
    </el-row>
    <el-row class="subscribe-storey btn-container">
      <el-button type="primary">提交</el-button>
      <el-button>返回</el-button>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
    methods: {
      getSchedule() {
        const startTime = this.$dateFactory(this.startTime);
        const dayChose = this.dayChose.filter(item=>{
          return item.check;
        });
        // 给一个初始值 排除当天
        let dateTmp = this.$dateFactory(startTime.getDayStart().getTime()+1);
        let list = [];
        let totalNum = this.totleNum;
        let tmpNum = this.totleNum;
        while(totalNum>0) {
          dayChose.forEach(item => {
            const dateByDay = dateTmp.getThisWeekDateByDay(item.day);
            if(dateByDay >= dateTmp ) {
              list.push({
                name: 'class '+(this.totleNum-totalNum+1),
                date: this.fmtScheduleTimeRange(dateByDay, item.timeRange)
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
        const month = this.formatNumber(date.getMonth());
        const day = this.formatNumber(date.getDate());
        const hourStart = this.formatNumber(startTime.getHours());
        const minutesStart = this.formatNumber(startTime.getMinutes());
        const hourEnd = this.formatNumber(endTime.getHours());
        const minutesEnd = this.formatNumber(endTime.getMinutes());
        return `${year}.${month}.${day} ${hourStart}:${minutesStart}-${hourEnd}:${minutesEnd}`
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
</style>

