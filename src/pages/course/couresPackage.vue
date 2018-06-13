<template>
	<div class="coures-package">
		<div class="course-package-top">
			<el-form ref="form" label-width="96px">
			<div class="classify">
				<el-row>
					<el-form-item label="分类：">
						<el-select v-model="form.status" placeholder="一级分类" size="mini" @change="getSubjectCategory">
							<el-option label="全部" value=""></el-option>
							<el-option v-for="(item,index) in curriculumLs" :key="index" :label="item.full_name" :value="item.id"></el-option>
						</el-select>
						<el-select v-model="form.status2" placeholder="二级分类" size="mini">
							<el-option label="全部" value=""></el-option>
							<el-option v-for="(item,index) in subjectCategoryLs" :key="index" :label="item.subject_category" :value="item.id"></el-option>
						</el-select>
						<el-select v-model="form.status3" placeholder="三级分类" size="mini">
							<el-option label="全部" value=""></el-option>
							<el-option v-for="(item,index) in subjectLs" :key="index" :label="item.subject_category" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
				</el-row>
			</div>
			<div class="inps">
				<el-row>
					<el-form-item label="课程包名称：">
						<el-input size="mini"></el-input>
					</el-form-item>
					<el-form-item label="课程包ID：">
						<el-input size="mini"></el-input>
					</el-form-item>
					<el-form-item label="操作人：">
						<el-input size="mini"></el-input>
					</el-form-item>
				</el-row>
			</div>
				
			<el-row class="state-createTime">
				<el-form-item label="创建时间：">    
					<date-range 
					:start-date.sync="form.startDate" 
					:end-date.sync="form.endDate"
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
				<el-button type="primary" size="mini">查询</el-button>
			</el-form>
		</div>
		<div class="table-list">
			<div class="operation">
				<router-link to="/course/createPackage"><el-button type="primary" size="mini">创建课程包</el-button></router-link>
				<el-button type="primary" class="dels" size="mini">删除</el-button>
			</div>
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column fixed prop="zhname" label="中文名称" style="width: 15%;">
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
				<el-table-column prop="updated_at" label="创建时间" style="width: 15%;">
				</el-table-column>
				<el-table-column fixed="right" label="操作" style="width: 15%;">
				<template slot-scope="scope">
					<button type="button" class="el-button el-button--default el-button--small">
						<span>编辑</span>
					</button>
					<button type="button" @click="handleClick(scope.row)" class="el-button el-button--default el-button--small">
						<span>删除</span>
					</button>
				</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script>
import {
	courseGet
} from '@/api/course';
import {
  curriculumGet
} from '@/api/curriculum';
import {
	subjectCategoryGet
} from '@/api/subject_category';

export default {
  created() {
		this.query();
		this.getCurriculumLs();
	},
  data() {
    return {
			tableData: [],
			curriculumLs: [],
			subjectCategoryLs: [],
			subjectLs: [],
      form: {
        course_name: "",
				id: "",
				startDate: '',
				endDate: '',
				updated_by: "",
				page: ""
      }
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
		},
		query() {
			courseGet({}).then(resp => {
				this.tableData = resp.data.objects;
			});
		},
		getCurriculumLs() {
			curriculumGet().then(resp=> {
				this.curriculumLs = resp.data.objects;
			});
		},
		getSubjectCategory(curriculum_id) {
			const filters = this.$json2filter({curriculum_id: [curriculum_id]});
			subjectCategoryGet().then(resp => {
				
			})
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