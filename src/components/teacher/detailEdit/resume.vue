<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				当前任职学校
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" v-model="form.cur_school" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<teacher-resume-subject-edit ref="teacherResumeSubject2" type="2"></teacher-resume-subject-edit>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				当前任职地区
			</el-aside>
			<el-main class="detail-item-main">
				<area-select ref="areaSelect" v-model="areaLs" item-width="153px" :type="2"></area-select>
			</el-main>
		</el-container>
		<teacher-resume-subject-edit ref="teacherResumeSubject1" type="1"></teacher-resume-subject-edit>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				总教龄
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" v-model="form.teacher_age" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				简历
			</el-aside>
			<el-main class="detail-item-main">
				<el-upload
					class="detail-item-width3"
					:action="$baseApiUrl+'/upload'"
					:on-success="handlerResumeSuccess"
					:file-list="resume_url"
					multiple>
					<el-button size="mini" type="primary">点击上传</el-button>
				</el-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				执教资格证明
			</el-aside>
			<el-main class="detail-item-main">
				<el-upload
					class="detail-item-width3"
					:action="$baseApiUrl+'/upload'"
					:file-list="seniority_url"
					:on-success="handlerSenioritySuccess"
					:on-remove="handlerSeniorityRemove"
					multiple>
					<el-button size="mini" type="primary">点击上传</el-button>
				</el-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				经验分享
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" v-model="form.experience_sharing" type="textarea" :rows="3" placeholder="请描述职业生涯中认为对申请该职位有帮助的任何加分经验" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所得奖项
			</el-aside>
			<el-main class="detail-item-main">
				<el-upload
					class="detail-item-width3"
					:action="$baseApiUrl+'/upload'"
					:on-success="handlerAwardSuccess"
					:on-remove="handlerAwardRemove"
					:file-list="award_url"
					multiple>
					<el-button size="mini" type="primary">点击上传</el-button>
				</el-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				其他工作经历
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input type="textarea" v-model="form.teaching_history" :rows="3" size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				状态
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-radio-group v-model="form.state">
						<el-radio label="WORKING">在岗</el-radio>
						<el-radio label="NO_WORK">离职</el-radio>
					</el-radio-group>
        </el-row>
			</el-main>
		</el-container>
	</div>
</template>
<script>
import teacherResumeSubjectEdit from './resumeSubject'
export default {
	data() {
		return {
			resume_url: [], //简历
			seniority_url: [], //资格证明
			award_url: [], //所得奖励
			areaLs: [],
			form: {
				cur_school: '', //当前任职学校
				cur_country: '', //当前任职地区
				cur_province: '', //当前工作省/州
				teacher_age: 0, //总教龄
				resume_url: '', //简历
				seniority_url: '', //资格证明
				award_url: '',//所得奖励
				teaching_history: '',// 其他教育经历
				experience_sharing: '',//经验分享
				state: 'WORKING' // 教师状态
			}
		}
	},
	methods: {
		initData(form) {
			this.$fillProps(this.form, form);
			this.areaLs = [+form.cur_country, +form.cur_province];
			this.$nextTick(_=>{
				this.$refs.areaSelect.onInit();
			});
			if(form.state !== 81 || form.state !== 'NO_WORK') {
				this.form.state = 'WORKING'
			}
			form.award_url && (this.award_url = JSON.parse(form.award_url));
			form.seniority_url && (this.seniority_url = JSON.parse(form.seniority_url));
			form.resume_url && (this.resume_url = [{url:form.resume_url, name:'简历'}]);
		},
		initSubjectLs({cur, other}) {
			cur && this.$refs.teacherResumeSubject2.initData(cur)
			other && this.$refs.teacherResumeSubject1.initData(other)
		},
		handlerResumeSuccess(e) {
			this.resume_url = [{url: e[0].download_file, name:'简历'}]
		},
		handlerAwardSuccess(e) {
			this.award_url.push({url: e[0].download_file, name: e[0].upload_file})
		},
		handlerAwardRemove(file, flieList) {
			this.award_url = flieList;
		},
		handlerSenioritySuccess(e) {
			this.seniority_url.push({url: e[0].download_file, name: e[0].upload_file})
		},
		handlerSeniorityRemove(file, flieList) {
			this.seniority_url = flieList;
		},
		getSubjectForm() {
			const cur = this.$refs.teacherResumeSubject2.getForm();
			const other = this.$refs.teacherResumeSubject1.getForm();

			return {
				addLs: [...cur.addLs, ...other.addLs],
				removeLs: [...cur.removeLs, ...other.removeLs]
			}
		},
		getForm() {
			console.log(this.resume_url);
			this.form.resume_url = this.resume_url[0]?(this.resume_url[0].url || ''):'';
			this.form.award_url = JSON.stringify(this.award_url.map(item=>({name: item.name, url: item.url})))
			this.form.seniority_url = JSON.stringify(this.seniority_url.map(item=>({name: item.name, url: item.url})))
			this.form.cur_country = this.areaLs[0];
			this.form.cur_province = this.areaLs[1];
			return {
				form: this.form
			}
		}
	},
	components: {
		teacherResumeSubjectEdit
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
.detail-item-width1-5 {
	width: 153px;
}
</style>