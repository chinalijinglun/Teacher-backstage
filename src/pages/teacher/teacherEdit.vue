<template>
	<!-- 教师详情 -->
	<div class="teacher-detail detail-container">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				照片
			</el-aside>
			<el-main class="detail-item-main">
				<img-upload 
					name="file"
					:preUrl="$baseApiUrl"
					:uploadUrl="$baseApiUrl + '/upload'"
					:maxNum="1"
				></img-upload>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				教师姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" class="detail-item-width1"></el-input>
          <el-input size="mini" class="detail-item-width1"></el-input>
          <el-input size="mini" class="detail-item-width1"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				联系邮箱
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				联系电话
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-select size="mini" class="detail-item-width1">
						<el-option label="全部" value=""></el-option>
					</el-select>
          <el-input size="mini" class="detail-item-width2"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				国家地区
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-select size="mini" class="detail-item-width1">
						<el-option label="全部" value=""></el-option>
					</el-select>
					<el-select size="mini" class="detail-item-width1">
						<el-option label="全部" value=""></el-option>
					</el-select>
					<el-select size="mini" class="detail-item-width1">
						<el-option label="全部" value=""></el-option>
					</el-select>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				街道
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				邮政编码
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				时区
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				Skype账号
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				自我介绍
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="100px">
				宣传视频
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
	</div>
</template>

<script>
import {

} from '@/api/teacher'
export default {
	data() {
		return {
			form: {
				about_me: '', //自我介绍
				avatar: [], //照片
				first_name: '', //教师姓名
				middle_name: '',
				last_name: '',
				nation: '', //联系电话区域
				mobile: '', //联系电话
				email: '', //邮箱
				country: '', //国
				province: '', //省/州
				city: '', //城市
				street: '', //街道
				zipone: 0, //邮政编码
				timezone: 0, //时区
				skype_account: '', //skype账号
				teachertime: [], //可选授课时间
				teaching_history: {}, //教学历史
				cur_school: '', //当前任职学校
				cur_grade: '', //当前教授年级
				cur_country: '', //当前任职地区
				cur_province: '', //当前工作省/州
				teacher_age: 0, //总教龄
				resume_url: '', //简历
				seniority_url: '', //资格证明
				award_url: '', //所得奖励
				//其他工作经历
				//宣传视频
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
		}
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