<template>
	<!-- 学生详情 -->
	<div class="teacher-detail">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				照片
			</el-aside>
			<el-main class="detail-item-main">
				<view-image :images="[form.avatar]"></view-image>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				学生姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input :text="form.name" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				学生英文名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input :text="form.first_name" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				性别
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="$GERDER_ENUM[form.gender]" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				出生日期
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input :text="$dateFmt(new Date(form.birth), 'yyyy-MM-dd')" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				在读地区
			</el-aside>
			<el-main class="detail-item-main">
				<view-area-select :areaLs="areaLs" ref="areaSelect" :type="2" item-width="153px"></view-area-select>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				在读学校
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<view-input  :text="form.read_school_zh" width="310px"></view-input>
        </el-row>
        <el-row class="item-row">
					<view-input  :text="form.read_school" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所在年级
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="$GRADE_ENUMS[form.grade]"  width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>

		<!--意向科目相关-->
		<student-subject ref="studentSubject"></student-subject>

		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				兴趣爱好
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.interest_zh" placeholder="中文" width="310px"></view-input>
        </el-row>
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.interest" placeholder="英文" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所获奖项
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.award_zh" placeholder="中文" width="310px"></view-input>
        </el-row>
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.award" placeholder="英文" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<!--出国留学相关-->
		<student-abroad  v-show="areaLs[0] == 7" ref="studentAbroad"></student-abroad>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				海外经历
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.overseas_zh" placeholder="如有海外学习、生活或旅游经历，请详细描述（中文）" width="310px"></view-input>
        </el-row>
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.overseas" placeholder="英文" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				英语学习经历
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.english_zh" placeholder="请描述英语学习经历，如参加的培训机构、上课内容、效果评价、校内外考试成绩等（中文）" width="310px"></view-input>
        </el-row>
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.english" placeholder="英文" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				标化考试成绩
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.exam_results_zh" placeholder="请列出标化考试名称+成绩" width="310px"></view-input>
        </el-row>
        <el-row class="item-row">
					<view-input  type="textarea" :row="3" :text="form.exam_results" placeholder="英文" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input  :text="form.parent" placeholder="学校中文名" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长称谓
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="form.parent_role" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长电话
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input  :text="form.parent_mobile" placeholder="学校中文名" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长邮箱
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input  :text="form.parent_email" placeholder="学校中文名" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				其他备注信息
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input  :text="form.remark" placeholder="学校中文名" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<student-channel ref="studentChannel"></student-channel>
	</div>
</template>

<script>
import studentChannel from './channel'
import studentAbroad from './abroad'
import studentSubject from './subject'
export default {
	data() {
		return {
			areaLs: [],
			parent_role: '',
			form: {
				avatar: '',
				name: '', // 中文名
				first_name: '', // 英文名
				gender: '',
				birth: '',
				read_country: '',
				read_province: '',
				read_school: '', 
				read_school_zh: '', 
				grade: '', 
				interest: '', 
				interest_zh: '',
				award: '',
				award_zh: '',
				overseas: '', 
				overseas_zh: '', 
				english: '', 
				english_zh: '', 
				exam_results: '', 
				exam_results_zh: '', 
				parent: '', 
				parent_role: '', 
				parent_mobile: '', 
				parent_email: '', 
				remark: ''  
			}
		}
	},
	methods: {
		initData(form) {
			this.$fillProps(this.form, form);
			this.areaLs = [+form.read_country, +form.read_province];
			this.$refs.studentChannel.initData(form);
			this.$refs.studentAbroad.initData(form);
			
		},
		onUploadSuccess() {
			this.form.avatar = e[0].download_file;
		},
		getSubject() {
			const subjects = this.$refs.studentSubject.getForm();
			console.log(subjects)
			return subjects;
		},
		initSubject(subjects) {
			this.$refs.studentSubject.initData(subjects)
		},
		getForm() {
			this.form.avatar = this.avatar[0]
			const [read_country, read_province] = this.areaLs;
			const channelForm = this.$refs.studentChannel.getForm();
			let parent_role = this.form.parent_role;
			if(this.form.parent_role === 'other') {
				parent_role = this.parent_role;
			}
			let abroadForm = this.$refs.studentAbroad.getForm();
			if(read_country != 7) {
				abroadForm = {};
			}
			return {
				...this.form,
				...channelForm,
				...abroadForm,
				parent_role,
				read_country,
				read_province
			};
		}
	},
	components: {
		studentChannel,
		studentAbroad,
		studentSubject
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
.detail-item-main .item-row {
	margin-bottom: 5px
}
.detail-item-main .item-row:last-of-type {
	margin-bottom: 0
}
.detail-item-main .detail-item-width1 {
	width: 100px;
}
.detail-item-main .detail-item-width2 {
	width: 205px;
}
.detail-item-main .detail-item-width3 {
	width: 310px;
}
</style>