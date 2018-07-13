<template>
	<!-- 教师用户 -->
	<div class="date-classs">
		<div class="course-package-top">
			<el-form ref="form" label-width="96px">
				<div class="inps">
					<el-row>
						<el-form-item label="教师姓名：">
							<el-input size="mini" v-model="form.username"></el-input>
						</el-form-item>
						<el-form-item label="联系电话：">
							<el-input size="mini" v-model="form.mobile"></el-input>
						</el-form-item>
						<el-form-item label="联系邮箱：">
							<el-input size="mini" v-model="form.email"></el-input>
						</el-form-item>
						<el-form-item label="居住地区：" class="ele-itmes">
							<el-select size="mini" v-model="form.country" filterable placeholder="国家" @change="handleCountryChange">
								<el-option v-for="item in countryData" :key="item.id" :label="item.name_zh" :value="item.id">
								</el-option>
							</el-select>
							<el-select size="mini" v-model="form.province" filterable placeholder="州列表">
								<el-option v-for="item in proviceData" :key="item.id" :label="item.name_zh" :value="item.id">
								</el-option>
							</el-select>
						</el-form-item> 
						<el-form-item label="时区：">
							<el-select size="mini" v-model="form.timezone" filterable placeholder="时区列表">
								<el-option v-for="(name, key) in $TIME_ZONE" :key="key" :label="name" :value="key">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="就职学校：">
							<el-input size="mini" v-model="form.school"></el-input>
						</el-form-item>
						<el-form-item label="当前教授科目：" class="ele-itme">
							<curriculum-select ref="curriculum_select_cur" v-model="curClassLs"></curriculum-select>
						</el-form-item>
						<el-form-item label="当前教授年级：">
							<el-select size="mini" v-model="form.cur_grade" filterable placeholder="请选择">
								<el-option v-for="(name, key) in $GRADE" :key="key" :label="name" :value="key">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="当前任职地区：">
								<el-select size="mini" v-model="form.cur_area" filterable placeholder="请选择" @change="handleCurAreaChange">
									<el-option v-for="item in curCountryData" :key="item.id" :label="item.name_zh" :value="item.id">
									</el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="当前任职州：">
								<el-select size="mini" v-model="form.cur_province" filterable placeholder="州列表">
									<el-option v-for="item in curProviceData" :key="item.id" :label="item.name_zh" :value="item.id">
									</el-option>
								</el-select>
						</el-form-item>
						<el-form-item label="可教授其他科目：" class="ele-itme">
							<curriculum-select ref="curriculum_select" v-model="classLs"></curriculum-select>
						</el-form-item>
						<el-form-item label="可教授其他年级：">
							<el-select size="mini" v-model="form.grade" filterable placeholder="请选择">
								<el-option v-for="(name, key) in $GRADE" :key="key" :label="name" :value="key">
								</el-option>
							</el-select>
						</el-form-item> 
						<el-form-item label="总教龄：">
							<el-select size="mini" v-model="form.teacher_age" filterable placeholder="请选择">
								<el-option v-for="(name, key) in $TEACHER_AGE" :key="key" :label="name" :value="key">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="所获奖项：">
							<el-select size="mini" v-model="form.have_award" filterable placeholder="请选择">
								<el-option v-for="(name, key) in $HAVE_AWARD" :key="key" :label="name" :value="key">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="执教资格证明：">
							<el-select size="mini" v-model="form.have_seniority" filterable placeholder="请选择">
								<el-option v-for="(name,key) in $HAVE_SENIORITY" :key="key" :label="name" :value="key">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="可选授课时间：" class="ele-itme">
							<el-select size="mini" v-model="form.week" filterable placeholder="请选择周">
								<el-option v-for="name in $TEACHER_WEEK" :key="name" :label="name+'周'" :value="name">
								</el-option>
							</el-select>
							<date-range :start-date.sync="form.start" :end-date.sync="form.end" size="mini" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间">
							</date-range>
						</el-form-item>
						<el-form-item label="教师状态：">
							<el-select v-model="form.state" placeholder="请选择" size="mini">
								<el-option v-for="(name, key) in $TEACHER_STATE" :label="name" :value="key" :key="key"></el-option>
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
				<el-table-column prop="created_at" label="注册时间" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="username" label="教师姓名" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="mobile" label="联系电话" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="email" label="联系邮箱" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="country" label="国家" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="province" label="州" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="timezone" label="时区" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="state" label="状态" style="width: 15%;">
				</el-table-column>
				<el-table-column fixed="right" label="操作" style="width: 15%;">
					<template slot-scope="scope">
						<button type="button" class="el-button el-button--default el-button--small" @click="goDetail(scope.row.id)">
							<span>查看</span>
						</button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination 
					@current-change="handleCurrentChange" 
					:current-page="form.page_no" 
					:page-size="10" 
					layout="total, prev, pager, next, jumper" 
					:total="totalCount">
				</el-pagination>
			</div>
		</div>
	</div>
</template>  

<script>
import {
	teacherMainQuery
} from '@/api/teacher'
import {
	getCountry,
	getRegionByPid
} from '@/api/region'

export default {
  data() {
    return {
      tableData: [],
			totalCount: 0,
			curClassLs: [],
			classLs: [],
			countryData: [],
			proviceData: [],
			curCountryData:[], 
			curProviceData: [],
      form: {
				username: '', 
				mobile: '', 
				email: '', 
				country: '', 
				province: '', 
				timezone: '', 
				school: '', 
				cur_category_1: '',
				cur_category_2: '',
				cur_category_3: '',
				cur_grade: '', 
				cur_area: '', 
				cur_province: '',
				category_1: '', 
				category_2: '', 
				category_3: '', 
				grade: '', 
				teacher_age: '', 
				have_award: '', 
				have_seniority: '', 
				week: '', 
				start: '', 
				end: '', 
				state: '',
				page_limit: 10,
				page_no: 1
      }
    };
	},
	created() {
		this.query();
		this.countryClick();
	},
  methods: {
    handleCurrentChange(val) {
			this.form.page_no = val;
			this.query()
		},
		countryClick(){
			return getCountry().then((data)=>{
				this.countryData = data.data.objects;
				this.curCountryData = data.data.objects;
			})
		},
		proviceClick(id){
			return getRegionByPid(id).then((data)=>{
				this.proviceData = data.data.objects;
				this.curProviceData = data.data.objects;
			})
		},
		handleCountryChange(){
			this.form.province = '';
			this.proviceData = [];
			if(this.form.country){
				const id = this.form.country;
				this.proviceClick(id);
			}
		},
		handleCurAreaChange(){
			this.form.cur_province = '';
			this.curProviceData = [];
			if(this.form.cur_area){
				const id = this.form.cur_area;
				this.proviceClick(id);
			}
		},
		query() {
			this.form.cur_category_1 = this.curClassLs[0];
			this.form.cur_category_2 = this.curClassLs[1];
			this.form.cur_category_3 = this.curClassLs[2];
			this.form.category_1 = this.classLs[0];
			this.form.category_2 = this.classLs[1];
			this.form.category_3 = this.classLs[2];
			const f = this.$deleteEmptyProps(this.form);
			return teacherMainQuery(f).then(resp => {
				this.tableData = resp.data.objects;
				this.totalCount = resp.data.num_results;
			})
		},
		goDetail(id){
			this.$router.push({path: '/teacher/teacherDetail', query: {'id': id}})
		}
  }
};
</script>

<style scoped>
.inps .el-form-item {
  width: 25%;
  float: left;
}
.inps .ele-itmes {
  width: 40%;
}
.inps .ele-itme {
  width: 100%;
}

.el-input {
  width: 85%;
}
.course-package-top button {
  float: left;
  margin: 20px;
}
.course-package-top {
  overflow: hidden;
}
.block {
	margin-top: 20px;
	text-align: right;
}
</style>