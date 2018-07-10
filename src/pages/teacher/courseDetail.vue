<template>
  <!-- 课程详情 -->
  <div class="course-detail">
    <div class="operation">
      <el-button type="primary" size="mini">教师资料</el-button>
      <el-button size="mini">教师课程</el-button>
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
      <el-table :data="tableData6" :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
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
import paginationMix from "@/components/commons/mixins/paginationMix";
export default {
  data() {
    return {
      tableData6: [
        {
          id: "ESL英语综合提升中级",
          name: "Lesson 3 Exploring Space and Astronomy",
          amount1: "2018.05.27 13:00 - 13:50",
          amount2: "未开始",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        }
      ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

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