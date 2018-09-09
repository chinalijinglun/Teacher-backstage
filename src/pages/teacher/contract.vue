<template>
<!-- 签约 -->
<div class="date-class">
	<div class="course-package-top">
		<el-form ref="form" label-width="96px">
			<div class="inps">
				<el-row>
					<el-form-item label="教师姓名：">
						<el-input size="mini" v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="联系电话：">
						<el-input size="mini" v-model="form.mobile"></el-input>
					</el-form-item>
					<el-form-item label="联系邮箱：">
						<el-input size="mini" v-model="form.email"></el-input>
					</el-form-item>
					<el-form-item label="状态：">
						<el-select v-model="form.status" placeholder="请选择" size="mini">
							<el-option label="所有状态" value=""></el-option>
							<el-option label="待发合同" value="1"></el-option>
							<el-option label="待确认合同" value="2"></el-option>
							<el-option label="已签约" value="3"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item class="select-time" label="操作时间：">
						<date-range :start-date.sync="form.startDate" :end-date.sync="form.endDate" size="mini" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间">
						</date-range>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" size="mini" @click="query">查询</el-button>
					</el-form-item>
				</el-row>
			</div>
		</el-form>
	</div>
	<div class="table-list">
		<el-table :data="tableData" style="width: 100%;margin-top:20px;">
			<el-table-column fixed prop="id" label="ID" style="width: 15%;">
			</el-table-column>
			<el-table-column prop="username" label="教师姓名" style="width: 10%;">
				<template slot-scope="{row}">
					{{`${row.first_name || ''} ${row.middle_name || ''} ${row.last_name || ''}`}}
				</template>
			</el-table-column>
			<el-table-column prop="mobile" label="联系电话" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="email" label="联系邮箱" style="width: 10%;">
			</el-table-column>
			<el-table-column label="操作时间" style="width: 10%;">
				<template slot-scope="{row}">
					{{ row.updated_at | hasTime }}
				</template>
			</el-table-column>
			<el-table-column prop="state" label="状态" style="width: 15%;">
				<template slot-scope="{row}">
					{{$TEACHER_STATE_ZH[row.state]}}
				</template>
			</el-table-column>
			<el-table-column fixed="right" label="操作" style="width: 15%;">
				<template slot-scope="scope">
					<el-button size="mini" @click="toSign(scope.row)" v-if="!scope.row.contract_url">发送合同</el-button>
					<el-button size="mini" @click="toWatch(scope.row.contract_url)" v-else>查看合同</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="block">
			<el-pagination 
			@current-change="handleCurrentChange" 
			:current-page="page" 
			:page-size="10" 
			layout="total, prev, pager, next, jumper" 
			:total="total">
			</el-pagination>
		</div>
	</div>
</div>
</template>
<script>
import {
	teacherGet
} from '@/api/teacher'
export default {
  data() {
    return {
      tableData: [],
			page: 1,
			total: 0,
      form: {
				name: '',
				mobile: '',
				email: '',
				startDate: '',
				endDate: '',
				status: ''
      }
    };
	},
	created() {
		this.query();
	},
  methods: {
    handleCurrentChange(val) {
			this.page = val;
			this.query();
		},
		query() {
			// RECRUIT:新用户，
			// BASIC_INFO:填写基本信息，
			// WAIT_FOR_CHECK:待审核，
			// CHECK_PASS:审核通过(待预约)、
			// CHECK_ERROR:审核未通过，
			// WAIT_FOR_INTERVIEW:已预约(待面试)，
			// WAITE_FOR_CONTRACT:待签约，
			// INTERVIEW_ERROR:面试结果失败，
			// CONTRACTOR:已签约，
			// WAIT_FOR_TRAIN:待预约培训试讲，
			// TRAIN_PASS:培训试讲结果成功，
			// TRAIN_ERROR:培训试讲结果失败
			// WORKING:在岗，
			// NO_WORK:未在岗
			// INVALID:无效
			// const filter = this.$json2filter({
			// 	state: ['WAITE_FOR_CONTRACT', 'CONTRACTOR', 'NO_WORK' ,'WORKING']
			// })
			const filter = this.getFilters()
			return teacherGet(filter, {
				page: this.page
			}).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			});
		},
		getFilters() {
			const {status, name, email, mobile, startDate, endDate} = this.form;
			let filters = [];
			switch(status) {
				case '1':
					filters.push({
						name: 'state',
						op: 'eq',
						val: 'WAITE_FOR_CONTRACT'
					});
					filters.push({
						or: [{
							name: 'contract_url',
							op: 'eq',
							val: ''
						},{
							name: 'contract_url',
							op: 'is_null'
						}]
					})
					break;
				case '2':
					filters.push({
						name: 'state',
						op: 'eq',
						val: 'WAITE_FOR_CONTRACT'
					});
					filters.push({
						name: 'contract_url',
						op: 'is_not_null'
					});
					break;
				case '3':
					filters.push({
						name: 'state',
						op: 'in',
						val: ['CONTRACTOR', 'NO_WORK' ,'WORKING']
					});
					break;
				default:
					filters.push({
						name: 'state',
						op: 'in',
						val: ['WAITE_FOR_CONTRACT', 'CONTRACTOR', 'NO_WORK' ,'WORKING']
					});
					break;
			}
			if(name) {
				filters.push({
					or: [{
						name: 'username',
						op: 'like',
						val: `%${name}%`
					},{
						name: 'first_name',
						op: 'like',
						val: `%${name}%`
					},{
						name: 'middle_name',
						op: 'like',
						val: `%${name}%`
					},{
						name: 'last_name',
						op: 'like',
						val: `%${name}%`
					}]
				})
			}
			if(email) {
				filters.push({
					name: 'email',
					op: 'like',
					val: `%${email}%`
				})
			}
			if(mobile) {
				filters.push({
					name: 'mobile',
					op: 'like',
					val: `%${mobile}%`
				})
			}
			if(startDate) {
				filters.push({
					name: 'updated_at',
					op: 'gt',
					val: startDate
				})
			}
			if(endDate) {
				filters.push({
					name: 'updated_at',
					op: 'lt',
					val: endDate
				})
			}
			filters.push({
				name: 'delete_flag',
				op: 'eq',
				val: 'IN_FORCE'
			})
			return {
				filters,
				order_by: [{"field": "updated_at", "direction": "desc"}]
			};
		},
		toSign(row) {
			this.$router.push({
				path: '/teacher/contractMess',
				query: {
					id: row.id
				}
			})
		},
		toWatch(url) {
			window.open(this.$baseApiUrl + url)
		}
  }
};
</script>

<style scoped>
.inps .el-form-item {
  width: 20%;
  float: left;
}
.el-input {
  width: 95%;
}
.inps .select-time {
  width: 35%;
}
.course-package-top {
  overflow: hidden;
}
.operation {
  margin-left: 20px;
  margin-left: 20px;
}
.block {
  margin: 0 auto;
  padding: 20px;
  width: 600px;
}
</style>