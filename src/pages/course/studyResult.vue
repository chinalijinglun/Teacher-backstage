<template>
  <div>
    <el-row>
      <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
      <el-row>
        <el-col :span="6">
          <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
        </el-col>
        <el-col :span="6">
          <flat-feild name="课程包名称：" value="ESL英语综合提升中级"></flat-feild>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <p>学生上课情况小结：</p>
      <el-table
        :data="tableData"
        border
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="name"
          label="学生姓名">
        </el-table-column>
        <el-table-column
          prop="teacher_score"
          label="Performance in class:">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="总结时间">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
  
</script>