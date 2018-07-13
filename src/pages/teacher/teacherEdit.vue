<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<teacher-basic></teacher-basic>
		<teacher-educations></teacher-educations>
	</div>
</template>
<script>
import teacherBasic from '@/components/teacher/detail/basic'
import teacherEducations from '@/components/teacher/detail/educations'
export default {
	data() {
		return {
      tableData: [{
				// 学历证明
				certificate: [{name: 'a',url: '/download/1c47b24a5f9a3c570e512964ee32fc3071a811d2d2a6f547a4e4587488ddf7f0'}],
				// 在校开始时间
				start: '2018',
				// 在校结束时间
				end: '2022',
				// 学位
				degree: 'bachelor_degree',
				// 专业
				major: 'cs',
				// 学校
				school: 'hfut',
				// 备注
				remark: ''
			}],
			form: {
				education_history: '',
			}
		}
	},
	methods: {
		onUploadSuccess() {
			this.form.avatar = e[0].download_file;
		},
		submit() {
			console.log(this.form);
		},
		goBack(){
			this.$router.push({path: '/teacher/teacherDetail', query: {'id': this.$route.query.id}})
		},
		handlerSuccess(index) {
			return (data) => {
				return this.tableData[index].certificate.push({
					name: data[0].upload_file,
					url: data[0].download_file
				})
			}
		},
		getFileList(backList) {
			return backList.map(item => ({url: this.$baseApiUrl + item.url, ...item}))
		}
	},
	components: {
		teacherEducations,
		teacherBasic
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