<template>
  <div class="create-order">
    <p class="title">创建订单</p>
    <div class="form-container">
      <el-form class="demo-form-inline" label-width="110px">
        <el-row>
          <el-form-item label="订单类型">
            <el-select placeholder="订单类型" size="mini" v-model="form.order_type">
              <el-option label="普通课订单" :value="1"></el-option>
              <el-option label="赠送课订单" :value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="是否已有课程包">
            <el-radio-group v-model="form.have_course">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-row>
        <template v-if="form.have_course === 1">
          <el-row>
            <el-form-item label="课程包">
              <el-input size="mini" placeholder="输入课程包ID" v-model="form.course_id"></el-input>
              <el-button size="mini" type="primary" @click="validCourse">验证</el-button>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="课程包名称">
              <el-input size="mini" :disabled="true" :value="course.course_name"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="课程包类型">
              <el-input size="mini" :disabled="true" :value="course.course_type_name"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="班型">
              <el-input size="mini" :disabled="true" :value="course.class_type_name"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="教师">
              <el-input size="mini" :disabled="true" :value="course.teacher"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="课节数">
              <el-input size="mini" :disabled="true" :value="course.classes_number"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="基本价格">
              <el-input size="mini" :disabled="true" :value="course.price"></el-input>
            </el-form-item>
          </el-row>
        </template>
        <template v-else>
          <el-form-item label="课程分类">
            <curriculum-select
              v-model="classLs"
            />
          </el-form-item>
          <el-form-item label="课程包类型">
            <el-select v-model="form.course_type" placeholder="所有类型" size="mini">
              <el-option v-for="(name, key) in $COURSE_TYPE_MAP" :label="name" :value="key" :key="key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班型">
            <el-select v-model="form.class_type" placeholder="所有类型" size="mini">
              <el-option v-for="(name, key) in $CLASS_TYPE" :label="name" :value="key" :key="key"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="教师">
            <el-input size="mini" v-model="form.teacher" placeholder="输入教师姓名或ID"></el-input>
          </el-form-item>
          <el-form-item label="课节数">
            <el-input size="mini" v-model="form.classes_number" placeholder="请输入课节数"></el-input>
          </el-form-item>
          <el-form-item label="基本价格">
            <el-input size="mini" v-model="form.basic_amount" :maxlength="5" placeholder="请输入价格">
              <template slot="prepend">¥</template>
              <template slot="append">/节</template>
            </el-input>
          </el-form-item>
        </template>
        <el-row>
          <el-form-item label="学生">
            <el-input size="mini" v-model="form.student" placeholder="请输入学生ID"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="订单价格">
            <el-input size="mini" v-model="form.amount">
              <template slot="prepend">￥</template>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="备注">
            <el-input size="mini" type="textarea" :rows="5" v-model="form.order_desc"></el-input>
          </el-form-item>
        </el-row>
        <el-row class="btn-container">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="goback">返回</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {
    courseGetByCourseId
  } from '@/api/course'
  import {
    orderEstablish
  } from '@/api/order'
  export default {
    data() {
      return {
        form: {
          have_course: 1,
          amount: '',
          basic_amount: '',
          class_type: '',
          classes_number: '',
          course_id: '',
          course_type: '',
          order_desc: '',
          order_type: '',
          project_type: '',
          student: '',
          subject_id: '',
          teacher: ''
        },
        classLs: [],
        course_id_valid: false,
        course: {
          course_name: '',
          course_type_name: '',
          class_type_name: '',
          teacher: '',
          classes_number: '',
          price: ''
        }
      }
    },
    methods: {
      validCourse() {
        if(!this.form.course_id) {
          return this.$message.error('请输入课程包id');
        }
        courseGetByCourseId(this.form.course_id).then(resp => {
          for(let key in this.course) {
            if(resp.data[key]!==undefined) {
              this.course[key] = resp.data[key];
            }
          }
          this.course_id_valid = true;
          this.course.course_type_name = this.$COURSE_TYPE_MAP[resp.data.course_type];
          this.course.class_type_name = this.$CLASS_TYPE[resp.data.class_type];
          this.course.teacher = resp.data.primary_teacher.username;
        })
      },
      valid() {
        if(this.form.have_course) {
          if(!this.form.course_id) {
            this.$message.error('请输入课程id！');
            return false;
          }
          if(!this.course_id_valid) {
            this.$message.error('请输入有效的课程id并验证！');
            return false;
          }
        } else {
          if(!this.form.course_type) {
            this.$message.error('请选择课程分类！');
            return false;
          }
          if(!this.form.course_type) {
            this.$message.error('请选择课程包类型！');
            return false;
          }
          if(!this.form.class_type) {
            this.$message.error('请选择班型！');
            return false;
          }
          if(!this.form.teacher) {
            this.$message.error('请输入教师！');
            return false;
          }
          if(!this.form.classes_number) {
            this.$message.error('请输入课节数！');
            return false;
          }
          if(!this.$PLUS_NUM_REG_EXP.test(this.form.classes_number)) {
            this.$message.error('课节数只能为正整数！');
            return false;
          }
          if(!this.form.basic_amount) {
            this.$message.error('请输入基本价格！');
            return false;
          }
          if(!this.$PLUS_FLOAT_REG_EXP.test(this.form.basic_amount)) {
            this.$message.error('价格只能为数字！');
            return false;
          }
        }

        if(!this.form.student) {
          this.$message.error('请输入学生姓名或id！');
          return false;
        }
        if(!this.form.amount) {
          this.$message.error('请输入订单金额！')
          return false;
        }
        if(!this.$PLUS_FLOAT_REG_EXP.test(this.form.amount)) {
          this.$message.error('价格只能为数字！');
          return false;
        }
        if(!this.form.order_desc) {
          this.$message.error('请输入备注！')
          return false;
        }
        return true;
      },
      goback() {
        this.$router.back();
      },
      submit() {
        this.form.subject_id = this.classLs[2];
        if(this.valid()) {
          const f = this.$deleteEmptyProps(this.form);
          orderEstablish(f).then(resp => {
            console.log(resp);
            this.goback();
            return true;
          })
        }
      }
    }
  }
</script>
<style scoped>
.create-order {
  padding: 0 50px;
}
.create-order .title {
  line-height: 30px;
  font-size: 16px;
  border-bottom: 1px #eee solid;
  margin-bottom: 15px;
}
.el-input {
  width: 200px;
}
.el-textarea {
  width: 600px;
}
.btn-container {
  margin: 20px 0;
  width: 600px;
  text-align: center;
}
</style>

