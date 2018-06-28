<template>
  <div class="create-order">
    <p class="title">创建订单</p>
    <div class="form-container">
      <el-form class="demo-form-inline" label-width="110px">
        <el-row>
          <el-form-item label="订单类型">
            <el-select placeholder="订单类型" size="mini" v-model="form.order_type">
              <el-option v-for="(name, key) in $ORDER_TYPE" :label="name" :value="key" :key="key"></el-option>
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
        <template>
          
        </template>
        <el-row>
          <el-form-item label="学生">
            <el-input size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="课程包价格">
            <el-input size="mini">
              <template slot="prepend">￥</template>
              <template slot="append">/节课</template>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="订单价格">
            <el-input size="mini">
              <template slot="prepend">￥</template>
            </el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="备注">
            <el-input size="mini" type="textarea" :rows="5"></el-input>
          </el-form-item>
        </el-row>
        <el-row class="btn-container">
          <el-button type="primary">提交</el-button>
          <el-button>返回</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {
    courseGetByCourseId
  } from '@/api/course'
  export default {
    data() {
      return {
        form: {
          have_course: 1,
          class_type: '',
          course_type: '',
          classLs: []
        },
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
          this.course.course_type_name = this.$COURSE_TYPE_MAP[resp.data.course_type]
          this.course.class_type_name = this.$CLASS_TYPE[resp.data.class_type]
          this.course.teacher = resp.data.assist_teacher.username;
        })
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

