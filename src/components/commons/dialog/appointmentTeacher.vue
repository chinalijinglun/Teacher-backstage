<template>
<!-- 确认时间 -->
<el-dialog title="预约试讲" :visible.sync="visible">
<div>
	<div class="teacher-time">
		<div class="tt-time">
	  	试讲时间设置：
		</div>
		<div class="detail-time">
      <date-range
      :start-date.sync="form.open_time_start"
      :end-date.sync="form.open_time_end"
      size="mini"
      range-separator="-"
      start-placeholder="开始时间"
      end-placeholder="结束时间">
      </date-range>
		</div>
	</div>
	<div class="select-button">
		<el-button type="primary" @click="submit">提交</el-button>
		<el-button plain>取消</el-button>
	</div>
</div>
</el-dialog>
</template>

<script>
import { courseAppointmentPost } from '@/api/course_appointment';
import { mapState } from 'vuex';

export default {
  name: "appointmentTeacher",
  data() {
    return {
      form: {
        open_time_start: '',
        open_time_end: ''
      }
    }
  },
  computed: {
    ...mapState({
      userName: state=>state.auth.userName
    })
  },
  props: ["visible", "teacherId"],
  methods: {
    submit() {
      const {
        open_time_start,
        open_time_end
      } = this.form;
      courseAppointmentPost({
        open_time_start: new Date(open_time_start),
        open_time_end: new Date(open_time_end),
        teacher_id: this.teacherId,
        created_at: new Date(),
        updated_at: new Date(),
        updated_by: this.userName
      })
    }
  }
};
</script>

<style scoped>
.teacher-say {
  padding-bottom: 20px;
}
.detail-content {
  padding-bottom: 40px;
}
.detail-time input {
  width: 100px;
  height: 30px;
  margin-right: 15px;
  margin-top: 15px;
}
.select-button {
  padding-top: 30px;
}
.select-button button {
  padding: 8px 20px;
  margin-right: 20px;
}
</style>