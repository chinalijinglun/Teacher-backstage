<template>
    <div class="select-condition-top">
        <el-row :gutter="20">
            <el-col :span="7">
                <div class="grid-content">
                    <div class="demo-input-suffix">
                        课程名称：
                        <el-input placeholder="请输入中文名称/英文名称" v-model="input21">
                        </el-input>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content">
                    <div class="demo-input-suffix">
                        课程ID：
                        <el-input placeholder="请输入课程ID" v-model="input22">
                        </el-input>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content">
                    <div class="demo-input-suffix">
                        操作人：
                        <el-input placeholder="输入操作人账号" v-model="input23">
                        </el-input>
                    </div>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content base-time">
                    创建时间：
                    <el-time-select
                        placeholder="请选择开始时间"
                        v-model="startTime"
                        :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                        }">
                    </el-time-select>
                    <el-time-select
                        placeholder="请选择结束时间"
                        v-model="endTime"
                        :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: startTime
                        }">
                    </el-time-select>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content">
                    <div class="demo-input-suffix">
                        状态：
                        <el-select v-model="value" placeholder="所有状态">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content">
                    <div class="demo-input-suffix">
                        <el-button type="primary">查询</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    .select-condition-top{
        border: 1px solid #e6e6e6;
    }
    .el-input{
        width: 70%;
    }
    .el-col{
        margin: 10px;
    }
    .base-time .el-input{
        width: 35%;
    }
</style>
<script>
export default {
    data() {
    return {
      input2: '',
      input21: '',
      input22: '',
      input23: '',
      startTime: '',
      endTime: '',
      options: [{
          value: '选项1',
          label: '有效'
        }, {
          value: '选项2',
          label: '无效'
        }],
        value: ''
    }
  }
}
</script>

