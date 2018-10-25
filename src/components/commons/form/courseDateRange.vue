<template>
  <div class="course-date-range">
    <el-date-picker
      v-model="form.date"
      type="date"
      size="mini">
    </el-date-picker>
    <el-time-picker
      is-range
      size="mini"
      v-model="form.timeRange"
      format="HH:mm"
      range-separator="-"
      :default-value="[new Date(2018,1,1,0,0),new Date(2018,1,1,23,59,59)]"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
  </div>
</template>
<script>
  export default {
    name: 'courseDateRange',
    data() {
      return {
        form: {
          date: '',
          timeRange: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
        }
      };
    },
    props: {
      startDate: {
        type: [Date, String],
        default: ''
      },
      endDate: {
        type: [Date, String],
        default: ''
      },
      dateFmt: {
        type: String,
        default() {
          return this.$DATE_FMT_DEFAULT
        }
      }
    },
    methods:{
      init(form = {
          date: '',
          timeRange: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
        }) {
        this.form = form;
      }
    },
    watch: {
      form: {
        handler(v, ov) {
          if(v.date) {
            const day = this.$dateFmt(v.date, 'yyyy-MM-dd');
            const start = this.$dateFmt(v.timeRange[0], 'hh:mm:ss');
            const end = this.$dateFmt(v.timeRange[1], 'hh:mm:ss');
            this.$emit('update:startDate', new Date(day+' '+start));
            this.$emit('update:endDate', new Date(day+' '+end));
          } else {
            this.$emit('update:startDate', '');
            this.$emit('update:endDate', '');
          }
        },
        deep: true
      }
    }
  }
</script>
