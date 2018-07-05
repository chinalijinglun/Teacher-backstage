<template>
<!-- 教师在线审核 -->
<div class="date-class">
	<div class="course-package-top">
		<el-form ref="form" label-width="96px">
			<div class="inps">
				<el-row>
					<el-form-item label="教师姓名：">
						<el-input size="mini" v-model="form.teacher_name"></el-input>
					</el-form-item>
					<el-form-item label="联系电话：">
						<el-input size="mini" v-model="form.mobile"></el-input>
					</el-form-item>
					<el-form-item label="联系邮箱：">
						<el-input size="mini" v-model="form.email"></el-input>
					</el-form-item>
				</el-row>
        <el-row>
          <el-form-item label="注册时间：">
            <date-range
              :start-date.sync="form.created_at_start"
              :end-date.sync="form.created_at_end"
              size="mini"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </date-range>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select v-model="form.state" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option v-for="(item, key) in $TEACHER_STATE_ENUM" :key="item" :label="$TEACHER_STATE_ZH[item]" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
			</div>
			<el-button type="primary" size="mini" @click="query">查询</el-button>
		</el-form>
	</div>
	<div class="table-list">
		<el-table :data="tableData" style="width: 100%;margin-top:20px;">
			<el-table-column fixed prop="id" label="ID" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="teacher_name" label="教师姓名" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="mobile" label="联系电话" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="email" label="联系邮箱" style="width: 10%;">
			</el-table-column>
			<el-table-column prop="updated_at" label="操作时间" style="width: 10%;">
			</el-table-column>
			<el-table-column label="状态" style="width: 15%;">
				<template slot-scope="scope">
					{{$TEACHER_STATE_ZH[$TEACHER_STATE_ENUM[scope.row.state]]}}
				</template>
			</el-table-column>
			<el-table-column fixed="right" label="操作" style="width: 15%;">
			<template slot-scope="scope">
        <el-button v-if="$TEACHER_STATE_ENUM[scope.row.state] === 3" size="mini" @click="audit(scope.row.id)">审核</el-button>
			</template>
			</el-table-column>
		</el-table>
		<el-row class="block">
			<el-pagination
			@current-change="handleCurrentChange"
			:current-page="page_no"
			:page-size="10"
			layout="total, prev, pager, next, jumper"
			:total="total">
			</el-pagination>
		</el-row>
	</div>
</div>
</template>

<script>
import {
  mangerThacherCheck,
	teacherPutByTeacherid
} from '@/api/teacher'
export default {
  data() {
    return {
			tableData: [],
			total: 0,
      page_no: 4,
      form: {
        email: '',
				mobile: '',
        state: '',
        teacher_name: '',
        update_at_end: '',
        update_at_start: ''
      }
    };
	},
	created() {
		this.query()
	},
  methods: {
    handleCurrentChange(val) {
			this.page_no = val;
			this.query();
		},
		query() {
      const f = this.$deleteEmptyProps(this.form)
      mangerThacherCheck({
        ...f,
        page_no: this.page_no,
        page_limit: 10
      }).then(resp => {
				this.tableData = resp.data.objects;
				this.total = resp.data.num_results;
			})
		},
		audit(id) {
			this.$router.push({
				path: '/teacher/auditPage',
				query: {id}
			})
		}
  }
};
</script>

<style scoped>
.inps .el-form-item {
  float: left;
}
.el-input {
  width: 95%;
}
.inps .select-time {
  width: 35%;
}
.course-package-top button {
  float: left;
  margin: 20px;
}
.course-package-top {
  overflow: hidden;
}
.operation {
  margin-left: 20px;
  margin-left: 20px;
}
.block {
  text-align: right;
}
</style>
