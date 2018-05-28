<template>
  <div class="subscribe-courses">
    <p class="subscribe-tile">约课</p>
    <el-row class="subscribe-storey">
      <el-form label-width="110px">
        <el-row>
          <el-form-item label="开课日期：">    
            <el-date-picker
              v-model="startTime"
              type="datetime"
              size="mini"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="每周上课时间：">
            <el-checkbox-group v-model="checkList">
              <el-row>
                <el-checkbox :label="1">
                  <span class="week-span">周一</span>
                  <el-time-picker
                    is-range
                    size="mini"
                    v-model="timeRange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-checkbox>
              </el-row>
              <el-row>
                <el-checkbox :label="2">
                  <span class="week-span">周二</span>
                  <el-time-picker
                    is-range
                    size="mini"
                    v-model="timeRange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-checkbox>
              </el-row>
              <el-row>
                <el-checkbox :label="3">
                  <span class="week-span">周三</span>
                  <el-time-picker
                    is-range
                    size="mini"
                    v-model="timeRange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-checkbox>
              </el-row>
              <el-row>
                <el-checkbox :label="4">
                  <span class="week-span">周四</span>
                  <el-time-picker
                    is-range
                    size="mini"
                    v-model="timeRange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-checkbox>
              </el-row>
              <el-row>
                <el-checkbox :label="5">
                  <span class="week-span">周五</span>
                  <el-time-picker
                    is-range
                    size="mini"
                    v-model="timeRange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-checkbox>
              </el-row>
              <el-row>
                <el-checkbox :label="6">
                  <span class="week-span">周六</span>
                  <el-time-picker
                    is-range
                    size="mini"
                    v-model="timeRange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-checkbox>
              </el-row>
              <el-row>
                <el-checkbox :label="7">
                  <span class="week-span">周日</span>
                  <el-time-picker
                    is-range
                    size="mini"
                    v-model="timeRange"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                  </el-time-picker>
                </el-checkbox>
              </el-row>
            </el-checkbox-group>
          </el-form-item>
        </el-row>
      </el-form>
      <el-button type="primary">确定</el-button>
    </el-row>
    <el-row class="subscribe-storey class-schedule">
      <p class="subscribe-storey-tltle">课程表：</p>
      <div class="list-container">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
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
        startTime: '',
        timeRange: [],
        checkList: [],
        tableData: []
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

