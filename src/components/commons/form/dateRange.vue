<template>
  <el-date-picker
    v-model="dateRange"
    type="datetimerange"
    :size="size"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder">
  </el-date-picker>
</template>
<script>
  /**
   * el-date-picker type=datetimerrange
   * 如果发现属性不够用请自行添加
   */
  export default {
    name: 'dateRange',
    data() {
      return {
        dateRange: []
      };
    },
    props: {
      startDate: {
        type: [Date,String],
        default: ''
      },
      endDate: {
        type: [Date,String],
        default: ''
      },
      dateFmt: {
        type: String,
        default() {
          return this.$DATE_FMT_DEFAULT
        }
      },
      size: {
        type: String,
        default: 'mini'
      },
      rangeSeparator: {
        type: String,
        default: '-'
      },
      startPlaceholder: {
        type: String,
        default: ''
      },
      endPlaceholder: {
        type: String,
        default: ''
      }
    },
    watch: {
      dateRange(v, ov) {
        this.$emit('update:startDate', v[0]);
        this.$emit('update:endDate', v[1]);
      }
    }
  }
</script>
