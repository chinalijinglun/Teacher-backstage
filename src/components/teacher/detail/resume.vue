<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				当前任职学校
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input size="mini" :text="form.cur_school" class="detail-item-width3"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<teacher-resume-subject ref="teacherResumeSubject2" type="2"></teacher-resume-subject>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				当前任职地区
			</el-aside>
			<el-main class="detail-item-main">
				<view-area-select :areaLs="areaLs" item-width="153px"></view-area-select>
			</el-main>
		</el-container>
		<teacher-resume-subject ref="teacherResumeSubject1" type="1"></teacher-resume-subject>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				总教龄
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input size="mini" :text="form.teacher_age" class="detail-item-width3"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				简历
			</el-aside>
			<el-main class="detail-item-main">
				<view-file-upload :files="resume_url">
				</view-file-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				执教资格证明
			</el-aside>
			<el-main class="detail-item-main">
				<view-file-upload :files="seniority_url">
				</view-file-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				经验分享
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input size="mini" :text="form.experience_sharing" type="textarea" :rows="3" placeholder="请描述职业生涯中认为对申请该职位有帮助的任何加分经验" class="detail-item-width3"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所得奖项
			</el-aside>
			<el-main class="detail-item-main">
				<view-file-upload :files="award_url"></view-file-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				其他工作经历
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input type="textarea" :text="form.teaching_history" :rows="3" size="mini" class="detail-item-width3"></view-input>
        </el-row>
			</el-main>
		</el-container>
	</div>
</template>
<script>
import teacherResumeSubject from '@/components/teacher/detail/resumeSubject'
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
				experience_sharing: ''//经验分享
			}
		}
	},
	methods: {
		initData(form) {
			this.$fillProps(this.form, form);
			this.areaLs = [+form.cur_country, +form.cur_province];
			form.award_url && (this.award_url = JSON.parse(form.award_url));
			form.seniority_url && (this.seniority_url = JSON.parse(form.seniority_url));
			form.resume_url && (this.resume_url = [{url:form.resume_url, name:'简历'}]);
		},
		initSubjectLs({cur, other}) {
			console.log('asdf', other)
			cur && this.$refs.teacherResumeSubject2.initData(cur)
			other && this.$refs.teacherResumeSubject1.initData(other)
		}
	},
	components: {
		teacherResumeSubject
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