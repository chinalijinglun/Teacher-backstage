<template>
	<!-- 教师详情 -->
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
				教师姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input :text="form.first_name"></view-input>
          <view-input :text="form.middle_name"></view-input>
          <view-input :text="form.last_name"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				联系邮箱
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input :text="form.email" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				联系电话
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <view-input :text="form.nation+'-'+form.mobile" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				国家地区
			</el-aside>
			<el-main class="detail-item-main">
				<view-area-select :areaLs="areaLs"></view-area-select>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				街道
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="form.street" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				邮政编码
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="form.zipone" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				时区
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="form.timezone" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				Skype账号
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="form.skype_account" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				视频介绍
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="form.video_url" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				自我介绍
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<view-input :text="form.about_me" type="textarea" :rows="3" width="310px"></view-input>
        </el-row>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			avatar: [], //照片
			areaLs: [],
			form: {
				avatar: '',
				about_me: '', //自我介绍
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
				video_url: '' //视频介绍
			}
		}
	},
	methods: {
		initData(form) {
			this.$fillProps(this.form, form);
			this.areaLs = [+form.country, +form.province, +form.city];
			this.avatar = [form.avatar];
		},
		onUploadSuccess() {
			this.form.avatar = e[0].download_file;
		},
		getForm() {
			this.form.avatar = this.avatar[0]
			return this.form;
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