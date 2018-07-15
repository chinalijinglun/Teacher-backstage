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
				学生姓名
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-input size="mini" placeholder="中文名" v-model="form.first_name" class="detail-item-width3"></el-input>
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
						<el-radio :label="1">男</el-radio>
						<el-radio :label="2">女</el-radio>
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
            v-model="form.date"
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
				<area-select v-model="areaLs" ref="areaSelect" :type="2" item-width="153px"></area-select >
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				在读学校
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<el-input size="mini" v-model="form.street" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" v-model="form.street" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所在年级
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-select v-model="form.gender" placeholder="请选择" size="mini" class="detail-item-width3">
						<el-option v-for="(item, key) in $GRADE_ENUMS" :key="key" :label="item" :value="key"></el-option>
					</el-select>
        </el-row>
			</el-main>
		</el-container>

		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				兴趣爱好
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.street" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.street" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				所获奖项
			</el-aside>
			<el-main class="detail-item-main">
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.street" class="detail-item-width3"></el-input>
        </el-row>
        <el-row class="item-row">
					<el-input size="mini" type="textarea" :row="3" v-model="form.street" class="detail-item-width3"></el-input>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				是否意向出国留学
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-radio-group v-model="form.gender">
						<el-radio :label="1">男</el-radio>
						<el-radio :label="2">女</el-radio>
					</el-radio-group>
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