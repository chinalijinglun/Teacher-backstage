<template>
<el-container class="detail-item">
  <el-aside class="detail-item-aside" width="200px">
    意向学习科目
  </el-aside>
  <el-main class="detail-item-main ">
    <el-row>
      <el-table
        :data="tableData"
        class="detail-item-width3"
        border>
        <el-table-column
          label="课程分类">
          <template slot-scope="scope">
            <view-input v-if="!scope.row.subjects[2]" :text="scope.row.subjects[3] || '未填写'"></view-input>
            <view-subject-select v-if="scope.row.subjects[2]" :id="scope.row.subjects[2]"></view-subject-select>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-main>
</el-container>
</template>
<script>
export default {
	data() {
		return {
      tableData: [],
      selectRow: [],
      removeLs: []
		}
  },
	methods: {
    initData(subjectLs) {
      this.tableData = [];
      this.removeLs = [];
      subjectLs.forEach(item => {
        this.tableData.push({subjects:[item.curriculum_id, item.subject_category_id, item.subject_id, item.subject_name],id:item.id})
        this.removeLs.push(item.id)
      })
    }
	}
};
</script>
<style>
.detail-container {
	border: 1px #e3e3e3 solid;
	border-radius: 3px;
}
.detail-item {
	border-bottom: 1px #e3e3e3 solid
}
.detail-item:last-of-type {
	border-bottom: none
}
.detail-item-aside {
	background-color: #eee;    
	align-items: center;
	justify-content: center;
	display: flex;
}
.detail-item-width1 {
	width: 100px;
}
.detail-item-width2 {
	width: 205px;
}
.detail-item-width3 {
	width: 310px;
}
.time-range-contain {
	margin-bottom: 5px;
}
.item-inner-row {
  margin-bottom: 5px;
}
</style>
