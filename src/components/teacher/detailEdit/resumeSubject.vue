<template>
<el-container class="detail-item">
  <el-aside class="detail-item-aside" width="200px">
    {{typeTitle[type]}}
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
            <curriculum-select v-model="scope.row.subjectClass" :has-other="true"></curriculum-select>
          </template>
        </el-table-column>
        <el-table-column
          label="年级">
          <template slot-scope="scope">    
            <el-row>
              <el-radio-group v-model="scope.row.grade">
                <el-radio v-for="(item, key) in $GRADE_ENUMS" :label="key" :key="key">{{item}}</el-radio>
              </el-radio-group>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-main>
</el-container>
</template>
<script>
import TeacherResume from '@/model/TeacherResume'

export default {
	data() {
		return {
      tableData: [],
      typeTitle: {
        1: '可教授其他科目和年级',
        2: '当前教授科目和年级'
      },
      selectRow: [],
      removeLs: []
		}
  },
  props: ['type'],
	methods: {
    initData(resumeLs) {
      this.tableData = [];
      this.removeLs = [];
      resumeLs.forEach(item => {
        this.tableData.push({
          subjectClass: [item.curriculum_id, item.subject_category_id, item.subject_id, item.subject_name],
          grade: item.grade
        })
        this.removeLs.push(item.id)
      })
      console.log(this.type,this.tableData)
    },
    getForm() {
      const addLs = this.tableData.map(item => ({
        grade: item.grade,
        subject_id: item.subjectClass[2] || undefined,
        subject_name: item.subjectClass[3],
        type: this.type
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
      this.tableData.push(new TeacherResume({}))
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
