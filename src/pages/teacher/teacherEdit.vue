<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<teacher-basic ref="teacherBasic"></teacher-basic>
		<teacher-educations ref="teacherEducations"></teacher-educations>
		<teacher-time ref="teacherTime"></teacher-time>
		<el-row>
			<el-button size="mini" type="primary" @click="submit">提交</el-button>
		</el-row>
	</div>
</template>
<script>
import teacherBasic from '@/components/teacher/detail/basic'
import teacherEducations from '@/components/teacher/detail/educations'
import teacherTime from '@/components/teacher/detail/time'
export default {
	data() {
		return {
			form: {
				education_history: '',
			}
		}
	},
	methods: {
		goBack(){
			this.$router.push({path: '/teacher/teacherDetail', query: {'id': this.$route.query.id}})
		},
		submit() {
			const education_history_form = this.$refs.teacherEducations.getForm();
			const basic_form = this.$refs.teacherBasic.getForm();
			const time_form = this.$refs.teacherTime.getForm();
				
		},
		removeTeacherTime(id) {

		},
		addTeacherTime(id) {
			
		},
		updateTeacherInfo(id) {
			
		}
	},
	components: {
		teacherEducations,
		teacherBasic,
		teacherTime
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
</style>