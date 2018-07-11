<template>
  <!-- 课程详情 -->
  <div class="course-detail">
    <div class="operation">
      <el-button type="primary" @click="goCourDetail" size="mini">教师资料</el-button>
			<el-button size="mini" @click="goCourse">教师课程</el-button>
    </div>
    <div class="people">
      <div class="teacher">
        <span>
          教师姓名：
        </span> 
        <span>
          Kira Yuan
        </span>
      </div>
      <div class="tudent">
        <span>学生名称：</span>
        <span>ViVian、SUsan、Jess、Tom</span>
      </div>
      <div class="other-teacher">
        <span>班主任/助教：</span>
        <span>Lily</span>
      </div>
    </div>
    <div>
      <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="课程名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="课节名称">
        </el-table-column>
        <el-table-column prop="amount1" label="上课时间">
        </el-table-column>
        <el-table-column prop="amount2" label="状态">
        </el-table-column>
        <el-table-column prop="amount3" label="操作">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {
	courseGetByCourseId
} from '@/api/course'
import paginationMix from "@/components/commons/mixins/paginationMix";
export default {
  data() {
    return {
      tableData: []
    };
  },
  created(){
    let courseId = this.$route.query.courseId;
    this.query(courseId);
  },
  methods: {
    // arraySpanMethod({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 2 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2];
    //     } else if (columnIndex === 1) {
    //       return [0, 0];
    //     }
    //   }
    // },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    query(courseId){
      return courseGetByCourseId(courseId).then( resp => {
        console.log('33333', resp.data)
        this.tableData = resp.data.objects;
      })
    },
    goCourse(){
			this.$router.push('/teacher/teacherCourse');
		},
		goCourDetail(){
			this.$router.push('/teacher/courseDetail');
		}
  }
};
</script>

<style scoped>
.people {
  overflow: hidden;
  margin: 15px;
  margin-left: 0;
}
.people div {
  float: left;
  margin-right: 50px;
}
</style>