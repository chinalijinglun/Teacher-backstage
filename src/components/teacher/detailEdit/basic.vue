<template>
	<!-- 教师详情 -->
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
				教师姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" placeholder="first name" v-model="form.first_name" class="detail-item-width1"></el-input>
          <el-input size="mini" placeholder="middle name" v-model="form.middle_name" class="detail-item-width1"></el-input>
          <el-input size="mini" placeholder="last name" v-model="form.last_name" class="detail-item-width1"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				联系邮箱
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" placeholder="email" v-model="form.email" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				联系电话
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-select size="mini" v-model="form.nation" class="detail-item-width1">
						<el-option v-for="(item,index) in $NATIONAL_CODE" :key="index" :label="item.name_zh" :value="item.code"></el-option>
					</el-select>
          <el-input size="mini" placeholder="mobile" v-model="form.mobile" class="detail-item-width2"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				国家地区
			</el-aside>
			<el-main class="detail-item-main">
				<area-select v-model="areaLs" ref="areaSelect"></area-select >
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				街道
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" placeholder="街道/县区" v-model="form.street" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				邮政编码
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" placeholder="邮政编码" v-model="form.zipone" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				时区
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-select v-model="form.timezone" placeholder="请选择" size="mini" class="detail-item-width3">
						<el-option v-for="(item,key) in $TIME_ZONE_ENUM" :key="key" :label="key" :value="key"></el-option>
					</el-select>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				Skype账号
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" placeholder="Skype账号" v-model="form.skype_account" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				视频介绍
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input size="mini" placeholder="视频介绍" v-model="form.video_url" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				自我介绍
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-input v-model="form.about_me" placeholder="自我介绍" type="textarea" :rows="3" size="mini" class="detail-item-width3"></el-input>
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
			this.$nextTick(_=>{
				this.$refs.areaSelect.onInit();
			});
			this.avatar = [form.avatar];
			this.$refs.areaSelect.onInit();
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