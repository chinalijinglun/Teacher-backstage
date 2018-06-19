<template>
	<div class="coures-package">
		<div class="course-package-top">
			<el-form ref="form" label-width="96px">
			<div class="classify">
				<el-row>
					<el-form-item label="分类：">
            <curriculum-select v-model="form.classLs"></curriculum-select>
					</el-form-item>
				</el-row>
			</div>
			<div class="inps">
				<el-row>
					<el-form-item label="课程包名称：">
						<el-input size="mini" v-model="form.course_name"></el-input>
					</el-form-item>
					<el-form-item label="课程包ID：">
						<el-input size="mini" v-model="form.id"></el-input>
					</el-form-item>
					<el-form-item label="操作人：">
						<el-input size="mini" v-model="form.updated_by"></el-input>
					</el-form-item>
				</el-row>
			</div>

			<el-row class="state-createTime">
				<el-form-item label="创建时间：">
					<date-range
					:start-date.sync="form.created_at.gt"
					:end-date.sync="form.created_at.lt"
					size="mini"
					range-separator="-"
					start-placeholder="开始时间"
					end-placeholder="结束时间">
					</date-range>
				</el-form-item>
				<el-form-item label="状态：">
					<el-select v-model="form.status" placeholder="请选择" size="mini">
					<el-option label="所有类型" value=""></el-option>
					<el-option label="在线课程" value="1"></el-option>
					<el-option label="免费课程" value="1"></el-option>
					<el-option label="精品公开课" value="1"></el-option>
					<el-option label="赠送课程" value="1"></el-option>
					<el-option label="补偿课程" value="1"></el-option>
					</el-select>
				</el-form-item>
			</el-row>
				<el-button type="primary" size="mini" @click="query">查询</el-button>
				<router-link to="/course/createPackage"><el-button type="primary" size="mini">创建课程包</el-button></router-link>
				<el-button type="primary" class="dels" size="mini">删除</el-button>
			</el-form>
		</div>
		<div class="table-list">
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column fixed prop="course_name_zh" label="中文名称" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="course_name" label="英文名称" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="id" label="课程包ID" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="course_type" label="类型" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="state" label="状态" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="updated_by" label="创建人" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="created_at" label="创建时间" style="width: 15%;">
				</el-table-column>
				<el-table-column fixed="right" label="操作" style="width: 15%;">
				<template slot-scope="scope">
					<button @click="$router.push({path: '/course/createPackage', query: { id: scope.row.id}})" type="button" class="el-button el-button--default el-button--small">
						<span>编辑</span>
					</button>
					<button type="button" @click="handleClick(scope.row)" class="el-button el-button--default el-button--small">
						<span>删除</span>
					</button>
				</template>
				</el-table-column>
			</el-table>
		</div>
		<el-row style="text-align: right">
			<el-pagination
				@current-change="handleCurrentChange"
				:current-page="form.page"
				:page-size="10"
				layout="total, prev, pager, next, jumper"
				:total="totalCount">
			</el-pagination>
		</el-row>
	</div>
</template>
<script>
import {
	courseGet,
	courseBareGet
} from '@/api/course';
import paginationMix from '@/components/commons/mixins/paginationMix'

export default {
  created() {
		this.query();
	},
	mixins: [paginationMix],
  data() {
    return {
			tableData: [],
			totalCount: 0,
      form: {
        classLs: [],
        course_name: "",
				id: "",
				startDate: '',
				created_at: {
          gt: '',
          lt: ''
        },
				updated_by: "",
				page: 1
      }
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
		},
		query() {
      const {
        classLs,
        course_name,
        id,
        created_at,
        updated_by,
        page
      } = this.form;
      const filter = this.$json2filter({
        subject_id: [classLs[2]],
        'course_name|course_name_zh': course_name,
        id,
        created_at,
        updated_by
      });
			courseBareGet(filter,{page}).then(resp => {
				this.tableData = resp.data.objects;
				this.totalCount = resp.data.num_results;
			});
		}
  },
};
</script>

<style scoped>
.course-package-top{
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 3px;
    margin-bottom: 20px;
}
.el-input {
  width: 75%;
}
.inps .el-form-item {
  width: 25%;
  float: left;
}
.classify .el-select {
  width: 15%;
  margin-right: 15px;
}
.state-createTime .el-form-item {
  float: left;
}
.create-time {
  width: 60%;
  float: left;
  padding: 10px;
}
.create-time div {
  width: 30%;
  margin-right: 20px;
}
.course-package-top {
  overflow: hidden;
}
.operation {
  margin: 20px 0;
  padding-left: 15px;
}
</style>
