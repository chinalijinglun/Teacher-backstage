<template>
    <div id="curricularTaxonomy">
       <el-row>
        <el-button type="primary">创建一级课程分类</el-button>
        <el-button type="primary">删除</el-button>
      </el-row>

      <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="课程中文名称"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="课程英文名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="课程ID"
      width="180">
      <template slot-scope="scope">
        <el-popover>
          <div slot="reference" class="name-wrapper">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="创建人"
      width="180">
      <template slot-scope="scope">
        <el-popover>
          <div slot="reference"  class="name-wrapper">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="创建时间"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="课程状态"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">添加下级分类</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
  name: "curricularTaxonomy",
  data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
};
</script>
<style scoped>
#curricularTaxonomy .el-row {
  height: 100px;
  margin: 10px;
  padding-right: 10px;
}
</style>


