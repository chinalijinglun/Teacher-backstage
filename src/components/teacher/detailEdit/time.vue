<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				可选授课时间
			</el-aside>
			<el-main class="detail-item-main">
         <el-table
          :data="tableData"
          border
          style="width: 900px">
          <el-table-column
						width="100px"
            label="周">
						<template slot-scope="scope">   
							{{$TEACHER_WEEK_ENUM[scope.row.week]}}
						</template>
          </el-table-column>
          <el-table-column
            label="时间段">
						<template slot-scope="scope">    
							<div class="time-range-contain" v-for="(item, index) in scope.row.timeRanges" :key="index">
								<el-time-picker
									is-range
									size="mini"
									v-model="item.timeRange"
									placeholder="选择时间范围">
								</el-time-picker>
								<el-button size="mini" v-if="index === scope.row.timeRanges.length-1" @click="handlerAdd(scope.row.timeRanges)">+</el-button>
								<el-button size="mini" @click="handlerRemove(scope.row.timeRanges, index)">-</el-button>
							</div>
							<el-button size="mini" v-if="!scope.row.timeRanges.length" @click="handlerAdd(scope.row.timeRanges)">+</el-button>
						</template>
          </el-table-column>
        </el-table>
			</el-main>
		</el-container>
	</div>
</template>
<script>
import TeacherTime from '@/model/TeacherTime'

export default {
	computed: {
		tableData() {
			const a = [
				new TeacherTime({week:1}),
				new TeacherTime({week:2}),
				new TeacherTime({week:3}),
				new TeacherTime({week:4}),
				new TeacherTime({week:5}),
				new TeacherTime({week:6}),
				new TeacherTime({week:7})
			];
			this.originData.forEach(item => {
				const i = a.findIndex((aitem) => {
					return aitem.week === +item.week;
				})
				if(i === -1) {
					a.push({
						week: item.week,
						timeRanges: [{
							timeRange: [this.dateInit(item.start), this.dateInit(item.end)]
						}]
					})
				} else {
					a[i].timeRanges.push({
						timeRange: [this.dateInit(item.start), this.dateInit(item.end)]
					})
				}
			})
			console.log(a);
			return a;
		}
	},
	data() {
		return {
			removeSet: new Set(),
      originData: [],
			form: {
				teachertime: [],
			}
		}
	},
	methods: {
		initData(form) {
			this.$fillProps(this.form, form);
			form.teachertime&&(this.originData = form.teachertime.concat(this.originData));
		},
		handlerAdd(timeRanges) {
			timeRanges.push({
				timeRange: [this.dateInit(), this.dateInit()]
			})
		},
		handlerRemove(timeRanges, index) {
			timeRanges.splice(index, 1)
		},
		dateInit(dataStr) {
			return dataStr?new Date(dataStr) : new Date();
		},
		handlerSuccess(index) {
			return (data) => {
				return this.tableData[index].certificate.push({
					name: data[0].upload_file,
					url: data[0].download_file
				})
			}
		},
		getFileList(backList) {
			return backList.map(item => ({url: this.$baseApiUrl + item.url, ...item}))
		},
		getForm() {
			const addLs = [];
			this.tableData.forEach(week=>{
				week.timeRanges.forEach(item => {
					addLs.push({
						week: week.week,
						start: item.timeRange[0],
						end: item.timeRange[1]
					})
				})
			})
			return {
				removeLs: this.originData.map(item => item.id).filter(item => item!==undefined),
				addLs
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
</style>