<template>
<!-- 确认时间 -->
<el-dialog title="添加员工" :visible.sync="visible" size="tiny" width="580px">
  <el-row>
    <el-form :inline="true" :model="form" label-width="80px">
      <el-row>
        <el-form-item label="员工姓名">
          <el-input size="mini" v-model="form.name"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="联系电话">
          <el-input size="mini" v-model="form.mobile">
            <el-select v-model="form.preMobile" slot="prepend" style="width: 100px" placeholder="请选择">
              <el-option label="国家区号" value=""></el-option>
              <el-option v-for="(item, key) in $MOBILE_PRE" :label="item" :value="key" :key="key"></el-option>
            </el-select> 
          </el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="联系邮箱">
          <el-input size="mini" v-model="form.email"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="角色">
          <el-checkbox-group v-model="form.roleList">
            <el-row>
              <el-checkbox label="中方教师管理员"></el-checkbox>
              <el-checkbox label="美方教师管理员"></el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox label="教师面试专员"></el-checkbox>
              <el-checkbox label="课程顾问主管"></el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox label="课程顾问"></el-checkbox>
              <el-checkbox label="班主任主管"></el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox label="班主任"></el-checkbox>
              <el-checkbox label="财务人员"></el-checkbox>
            </el-row>
            <el-row>
              <el-checkbox label="系统管理员"></el-checkbox>
            </el-row>
          </el-checkbox-group>
        </el-form-item>
      </el-row>
    </el-form>
  </el-row>
</el-dialog>
</template>
<script>
import { courseAppointmentPost } from '@/api/course_appointment';
import { mapState } from 'vuex';

export default {
  name: "addSysUser",
  data() {
    return {
      form: {
        roleList: [],
        preMobile: '',
        mobile: '',
        email: '',
        name: ''
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
    closeSelf() {
      this.$emit('update:visible', false);
    },
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
      }).then(resp=> {
        this.$message.success('预约成功！');
        this.closeSelf();
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