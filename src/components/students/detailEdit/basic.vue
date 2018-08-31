<template>
	<!-- 学生详情 -->
	<div class="teacher-detail">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				照片
			</el-aside>
			<el-main class="detail-item-main">
				<img-upload 
					name="file"
					:preUrl="$baseApiUrl"
					:uploadUrl="$baseApiUrl + '/upload'"
					v-model="avatar"
					:maxNum="1"
				></img-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				学生姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" placeholder="中文名" v-model="form.name" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				学生英文名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" placeholder="英文名" v-model="form.first_name" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				性别
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-radio-group v-model="form.gender">
						<el-radio :label="2">男</el-radio>
						<el-radio :label="3">女</el-radio>
					</el-radio-group>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				出生日期
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-date-picker
            v-model="form.birth"
            size="mini"
            type="date"
						class="detail-item-width3"
            placeholder="选择日期">
          </el-date-picker>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				在读地区
			</el-aside>
			<el-main class="detail-item-main">
				<area-select v-model="areaLs" ref="areaSelect" :type="2" item-width="153px"></area-select>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				在读学校
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<el-input size="mini" v-model="form.read_school_zh" placeholder="学校中文名" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" v-model="form.read_school" placeholder="学校英文名" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所在年级
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-select v-model="form.grade" placeholder="请选择" size="mini" class="detail-item-width3">
						<el-option v-for="(item, key) in $GRADE_ENUMS" :key="key" :label="item" :value="key"></el-option>
					</el-select>
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
					<el-input size="mini" type="textarea" :row="3" v-model="form.interest_zh" placeholder="中文" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.interest" placeholder="英文" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所获奖项
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.award_zh" placeholder="中文" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.award" placeholder="英文" class="detail-item-width3"></el-input>
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
					<el-input size="mini" type="textarea" :row="3" v-model="form.overseas_zh" placeholder="如有海外学习、生活或旅游经历，请详细描述（中文）" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.overseas" placeholder="英文" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				英语学习经历
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.english_zh" placeholder="请描述英语学习经历，如参加的培训机构、上课内容、效果评价、校内外考试成绩等（中文）" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.english" placeholder="英文" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				标化考试成绩
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.exam_results_zh" placeholder="请列出标化考试名称+成绩" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.exam_results" placeholder="英文" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" v-model="form.parent" placeholder="学校中文名" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长称谓
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-radio-group v-model="form.parent_role">
						<el-radio label="父亲">父亲</el-radio>
						<el-radio label="母亲">母亲</el-radio>
						<el-radio label="other">其他</el-radio>
					</el-radio-group>
					<el-input size="mini" v-model="parent_role" placeholder="学校中文名" class="detail-item-width1"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长电话
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" v-model="form.parent_mobile" placeholder="家长电话" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				家长邮箱
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" v-model="form.parent_email" placeholder="家长邮箱" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				其他备注信息
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" v-model="form.remark" placeholder="其他备注信息" class="detail-item-width3"></el-input>
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
			avatar: [], //照片
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
			this.form.birth = new Date(form.birth)
			this.areaLs = [+form.read_country, +form.read_province];
			this.$nextTick(_=>{
				this.$refs.areaSelect.onInit();
			});
			this.avatar = [form.avatar];
			if(form.parent_role !== '父亲' && form.parent_role !== '母亲'){
				this.form.parent_role = 'other';
				this.parent_role = form.parent_role;
			}
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