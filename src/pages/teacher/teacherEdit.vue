<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<p class="title">基本信息</p>
		<div class="detail-block">
			<teacher-basic-edit ref="teacherBasicEdit"></teacher-basic-edit>
		</div>
		<p class="title">教育背景</p>
		<div class="detail-block">
			<teacher-educations-edit ref="teacherEducationsEdit"></teacher-educations-edit>
		</div>
		<p class="title">基本信息</p>
		<div class="detail-block">
			<teacher-time-edit ref="teacherTimeEdit"></teacher-time-edit>
		</div>
		<p class="title">教育经历</p>
		<div class="detail-block">
			<teacher-resume-edit ref="teacherResumeEdit"></teacher-resume-edit>
		</div>
		<el-row class="btn-contain">
			<el-button type="primary" @click="submit">提交</el-button>
			<el-button @click="goBack">返回</el-button>
		</el-row>
	</div>
</template>
<script>
import {
	teacherGetByTeacherid,
	teacherGetBareByTeacherid,
	teacherPutByTeacherid,
	teacherSubject
} from '@/api/teacher'
import {
	teacherTimeDeleteById,
	teacherTimePost,
	teacherTimeBareGetByTeacherId
} from '@/api/teacher_time';
import {
	teacherHistoryDeleteById,
	teacherHistoryPost
} from '@/api/teacher_history';


import teacherBasicEdit from '@/components/teacher/detailEdit/basic'
import teacherEducationsEdit from '@/components/teacher/detailEdit/educations'
import teacherTimeEdit from '@/components/teacher/detailEdit/time'
import teacherResumeEdit from '@/components/teacher/detailEdit/resume'
import {mapState} from 'vuex'
export default {
	computed: {
		...mapState({
			userName: state => state.auth.userName
		})
	},
	data() {
		return {
			teacher_id: ''
		}
	},
	created() {
		this.teacher_id = this.$route.query.id;
		this.getTeacherInfo();
		this.getTeacherCurSubject();
		this.getTeacherOtherSubject();
		this.getTeacherTime();
	},
	methods: {
		getTeacherInfo() {
			return teacherGetBareByTeacherid(this.teacher_id).then(resp => {
				this.$refs.teacherBasicEdit.initData(resp.data);
				this.$refs.teacherEducationsEdit.initData(resp.data);
				this.$refs.teacherResumeEdit.initData(resp.data);
			});
		},
		getTeacherCurSubject() {
			return teacherSubject({
				type: 2,
				teacher_id: this.teacher_id
			}).then(resp => {
				this.$refs.teacherResumeEdit.initSubjectLs({
					cur: resp.data.objects
				});
			});
		},
		getTeacherOtherSubject() {
			return teacherSubject({
				type: 1,
				teacher_id: this.teacher_id
			}).then(resp => {
				this.$refs.teacherResumeEdit.initSubjectLs({
					other: resp.data.objects
				});
			});
		},
		getTeacherTime() {
			return teacherTimeBareGetByTeacherId(this.teacher_id).then(resp => {
				this.$refs.teacherTimeEdit.initData({teachertime: resp.data.objects});
			})
		},
		goBack(){
			this.$router.replace({path: '/teacher/teacherDetail', query: {id: this.teacher_id}})
		},
		updateBasic() {
			const basic_form = this.$refs.teacherBasicEdit.getForm();
			const education_history_form = this.$refs.teacherEducationsEdit.getForm();
			const resume = this.$refs.teacherResumeEdit.getForm();
			return teacherPutByTeacherid(this.teacher_id, {
				...basic_form,
				...education_history_form,
				...resume.form,
				updated_at: new Date(),
				updated_by: this.userName
			});
		},
		submit() {
			Promise.all([
				...this.teacherTimePost(),
				...this.teacherResumePost(),
				this.updateBasic()
			]).then(resp => {
				this.$message.success('更新成功！');
				this.goBack();
			})
		},
		teacherResumePost() {
			const {removeLs, addLs} = this.$refs.teacherResumeEdit.getSubjectForm();
			console.log(removeLs);
			console.log(addLs);
			const promiseRemoveLs = removeLs.map(id => this.resumeRemove(id))
			const promiseAddLs = addLs.map(item => this.resumeAdd(item))
			return [
				...promiseAddLs,
				...promiseRemoveLs
			]
		},
		resumeAdd(form) {
			return teacherHistoryPost({
				...form,
				teacher_id: this.teacher_id,
				delete_flag: 1,
				created_at: new Date(),
				updated_at: new Date(),
				updated_by: this.userName
			})
		},
		resumeRemove(id) {
			return teacherHistoryDeleteById(id)
		},
		teacherTimePost() {
			const timeForm = this.$refs.teacherTimeEdit.getForm();
			const {removeLs, addLs} = timeForm;
			const promiseRemoveLs = removeLs.map(id => this.removeTeacherTime(id))
			const promiseAddLs = addLs.map(item => this.addTeacherTime(item))
			return [
				...promiseAddLs,
				...promiseRemoveLs
			]
		},
		removeTeacherTime(id) {
			return teacherTimeDeleteById(id)
		},
		addTeacherTime(form) {
			return teacherTimePost({
				...form,
				teacher_id: this.teacher_id,
				delete_flag: 1,
				created_at: new Date(),
				updated_at: new Date(),
				updated_by: this.userName
			})
		},
		updateTeacherInfo(id) {
			
		}
	},
	components: {
		teacherBasicEdit,
		teacherEducationsEdit,
		teacherTimeEdit,
		teacherResumeEdit
	}
};
</script>
<style>
.detail-block {
	border: 1px #e3e3e3 solid;
	border-radius: 3px;
	margin-bottom: 10px;
}
.btn-contain {
	text-align: center;
	margin-bottom: 20px;
}
</style>