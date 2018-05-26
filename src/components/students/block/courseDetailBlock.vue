<template>
  <el-row class="course-detail-block">
    <div class="title-info">
      <ul>
        <li class="title-info-li">
          <span class="info-key">学生名称</span>
          <span class="info-value">Vivian</span>
        </li>
        <li class="title-info-li">
          <span class="info-key">教师名称</span>
          <span class="info-value">Kira Yuan</span>
        </li>
        <li class="title-info-li">
          <span class="info-key">班主任/助教</span>
          <span class="info-value">Lily</span>
        </li>
      </ul>
    </div>
    <div class="course-table">
      <el-table
        :data="tableData"
        border
        :span-method="mergeTable"
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="courseName"
          label="课程名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="className"
          label="课节名称">
        </el-table-column>
        <el-table-column
          prop="classTime"
          label="上课时间">
        </el-table-column>
        <el-table-column
          prop="classStatus"
          label="状态">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini">进入教室</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-row class="pagination-container">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="form.curPage"
        :page-size="form.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </el-row>
  </el-row>
</template>
<script>
  import paginationMix from '@/components/commons/mixins/paginationMix';

  export default {
    name: 'course-detail-block',
    data() {
      return {
        form: {
          curPage: 1,
          pageSize: 10
        },
        totalCount: 100,
        tableData: [{
          courseName: 'ESL英语综合提升中级',
          className: 'Lesson 1 Exploring Space and Astronomy',
          classTime: '2018.05.27 13:00 - 13:50',
          classStatus: '未开始'
        },{
          courseName: 'ESL英语综合提升中级',
          className: 'Lesson 2 Exploring Space and Astronomy',
          classTime: '2018.05.27 13:00 - 13:50',
          classStatus: '未开始'
        },{
          courseName: 'ESL英语综合提升中级',
          className: 'Lesson 3 Exploring Space and Astronomy',
          classTime: '2018.05.27 13:00 - 13:50',
          classStatus: '未开始'
        },{
          courseName: 'ESL英语综合提升中级',
          className: 'Lesson 4 Exploring Space and Astronomy',
          classTime: '2018.05.27 13:00 - 13:50',
          classStatus: '未开始'
        },{
          courseName: 'ESL英语综合提升高级',
          className: 'Lesson 1 Exploring Space and Astronomy',
          classTime: '2018.05.27 13:00 - 13:50',
          classStatus: '未开始'
        }],
        mergerRowLength: {
          'ESL英语综合提升中级': 4,
          'ESL英语综合提升高级': 1
        }
      };
    },
    methods: {
      mergeTable({ row, column, rowIndex, columnIndex }) {
        if(columnIndex === 0) {
          if (rowIndex % 4 === 0) {
            return {
              rowspan: 4,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
          if(this.mergerRowLength[row.courseName]) {
            const rowspan = this.mergerRowLength[row.courseName];
            this.mergerRowLength[row.courseName] = 0;
            return {
              rowspan: rowspan,
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
    },
    mixins: [paginationMix]
  }
</script>
<style scoped>
  .title-info {
    overflow: hidden;
    border-bottom: 1px #eee solid;
    line-height: 30px;
  }
  .title-info .title-info-li {
    float: left;
    margin-right: 20px;
  }
  .title-info .title-info-li span {
    margin-right: 10px;
  }
  .info-key {
    color: #222;
  }
  .info-value {
    color: #666;
  }
  .pagination-container {
    text-align: right;
    margin-top: 30px;
  }
</style>

