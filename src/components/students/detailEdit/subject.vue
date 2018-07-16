<template>
<el-container class="detail-item">
  <el-aside class="detail-item-aside" width="200px">
    意向学习科目
  </el-aside>
  <el-main class="detail-item-main">
    <el-row class="item-inner-row">
      <el-button size="mini" type="primary" @click="add">添加科目</el-button>
      <el-button size="mini" @click="remove">删除科目</el-button>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        @selection-change="handlerSelectionChange"
        border>
        <el-table-column
          width="50px"
          type="selection"
          label="选择">
        </el-table-column>
        <el-table-column
          label="课程分类">
          <template slot-scope="scope">
            <curriculum-select v-model="scope.row.subjects" :type="3" :has-other="true"></curriculum-select>
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
    },
    getForm() {
      console.log(this.tableData);
      const addLs = this.tableData.map(item => ({
        subject_id: item.subjects[2] || undefined,
        subject_name: item.subjects[3]
      }));
      return {
        removeLs: this.removeLs,
        addLs,
      }
    },
    handlerSelectionChange(e) {
      this.selectRow = e.map(item => this.tableData.indexOf(item))
    },
    add() {
      this.tableData.push({subjects:[],id: ''})
    },
    remove() {
      if(!this.selectRow.length) {
        this.$message.error('请选择要删除的行！')
      } else {
        const newTable = [...this.tableData]
        this.selectRow.forEach(i => newTable[i] = undefined)
        this.tableData = newTable.filter(item => item)
      }
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
