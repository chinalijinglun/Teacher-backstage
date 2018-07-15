<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<p class="title">基本信息</p>
		<div class="detail-block">
			<teacher-basic ref="teacherBasic"></teacher-basic>
		</div>
		<p class="title">教育背景</p>
		<div class="detail-block">
			<teacher-educations ref="teacherEducations"></teacher-educations>
		</div>
		<p class="title">基本信息</p>
		<div class="detail-block">
			<teacher-time ref="teacherTime"></teacher-time>
		</div>
		<p class="title">教育经历</p>
		<div class="detail-block">
			<teacher-resume ref="teacherResume"></teacher-resume>
		</div>
		<el-row class="btn-contain">
			<el-button @click="goBack">返回</el-button>
		</el-row>
	</div>
</template>
<script>
import {
	teacherGetByTeacherid,
	teacherGetBareByTeacherid,
	teacherSubject
} from '@/api/teacher'
import {
	teacherTimeBareGetByTeacherId
} from '@/api/teacher_time';


import teacherBasic from '@/components/teacher/detail/basic'
import teacherEducations from '@/components/teacher/detail/educations'
import teacherTime from '@/components/teacher/detail/time'
import teacherResume from '@/components/teacher/detail/resume'

import {mapState} from 'vuex'

export default {
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
				this.$refs.teacherBasic.initData(resp.data);
				this.$refs.teacherEducations.initData(resp.data);
				this.$refs.teacherResume.initData(resp.data);
			});
		},
		getTeacherCurSubject() {
			return teacherSubject({
				type: 2,
				teacher_id: this.teacher_id
			}).then(resp => {
				this.$refs.teacherResume.initSubjectLs({
					cur: resp.data.objects
				});
			});
		},
		getTeacherOtherSubject() {
			return teacherSubject({
				type: 1,
				teacher_id: this.teacher_id
			}).then(resp => {
				this.$refs.teacherResume.initSubjectLs({
					other: resp.data.objects
				});
			});
		},
		getTeacherTime() {
			return teacherTimeBareGetByTeacherId(this.teacher_id).then(resp => {
				this.$refs.teacherTime.initData({teachertime: resp.data.objects});
			})
		},
		goBack(){
			this.$router.back()
		}
	},
	components: {
		teacherEducations,
		teacherBasic,
		teacherTime,
		teacherResume
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