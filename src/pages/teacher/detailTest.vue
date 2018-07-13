<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<div class="slet-detail">
			<el-button size="mini">教师档案</el-button>
			<el-button type="primary" size="mini">教师课程</el-button>
		</div>
		<div>
			<h4>基本信息</h4>
			<div class="teacher-mess">
				<div class="fir01">
					<div class="name">
						照片
					</div>
					<div class="pic pic-contain">
						<img-upload 
							name="file"
							v-model="form.avatar"
							:preUrl="$baseApiUrl"
							:uploadUrl="$baseApiUrl + '/upload'"
							:maxNum="1"
						></img-upload>
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						教师姓名
					</div>
					<div class="pic base">
						<input type="text" placeholder="First Name" v-model="form.first_name">
						<input type="text" placeholder="Middle Name" v-model="form.middle_name">
						<input type="text" placeholder="Last Name" v-model="form.last_name">
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						联系邮箱
					</div>
					<div class="pic base">
						<input type="text" class="widths" v-model="form.email">
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						联系电话
					</div>
					<div class="pic base">
						<select v-model="form.nation">
							<option v-for="(item, key) in $MOBILE_PRE" :value="key" :key="key">{{item}}</option>
						</select>
						<input type="text" class="widths" v-model="form.mobile">
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						联系邮箱
					</div>
					<div class="pic bases">
						<select name="" v-model="form.country" id="">
							<option value="国家">国家</option>
						</select>
						<select name="" v-model="form.province" id="">
							<option value="州">州</option>
						</select>
						<select name="" v-model="form.city" id="">
							<option value="城市">城市</option>
						</select>
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						街道
					</div>
					<div class="pic base">
						<input v-model="form.street" type="text" class="widths">
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						邮政编码
					</div>
					<div class="pic base">
						<input type="text" v-model="form.zipone" class="widths">
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						时区
					</div>
					<div class="pic base times">
						<select name="" v-model="form.timezone" id="">
							<option value="时区选择">时区选择</option>
						</select>
					</div>
				</div>
				<div class="fir03">
					<div class="name01">
						教育背景
					</div>
					<div class="xueli">
						<div class="xl-tit">学历</div>
						<div class="xl-name">博士后</div>
						<div class="xl-name">博士</div>
						<div class="xl-name">硕士</div>
						<div class="xl-name">本科</div>
					</div>
					<div class="zdsj">
						<div class="zdsj-tit">在读期间</div>
						<div class="zdsj-name">
							<input type="text" placeholder="年份"> 至
							<input type="text" placeholder="年份">
						</div>
						<div class="zdsj-name">
							<input type="text" placeholder="年份"> 至
							<input type="text" placeholder="年份">
						</div>
						<div class="zdsj-name">
							<input type="text" placeholder="年份"> 至
							<input type="text" placeholder="年份">
						</div>
						<div class="zdsj-name">
							<input type="text" placeholder="年份"> 至
							<input type="text" placeholder="年份">
						</div>
					</div>
					<div class="zdsj">
						<div class="zdsj-tit">在读学校</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
					</div>
					<div class="zdsj">
						<div class="zdsj-tit">专业</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
					</div>
					<div class="zdsj">
						<div class="zdsj-tit">毕业证明</div>
						<div class="zdsj-name">
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<button>上传</button>
						</div>
						<div class="zdsj-name">
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<button>上传</button>
						</div>
						<div class="zdsj-name">
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<button>上传</button>
						</div>
						<div class="zdsj-name">
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<div>
								<span>毕业证明 1</span>&nbsp;&nbsp;&nbsp;&nbsp;
								<span class="delet">X</span>
							</div>
							<button>上传</button>
						</div>
					</div>
					<div class="zdsj" style="border:none;width:15.5%">
						<div class="zdsj-tit">备注</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
						<div class="zdsj-name">
							<input class="inp" type="text">
						</div>
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						Skype账号
					</div>
					<div class="pic base">
						<input type="text" v-model="form.skype_account" class="widths">
					</div>
				</div>
				<div class="fir04">
					<div class="name01">
						可选授课时间
					</div>
					<div class="week">
						<div class="weeks-tit">周</div>
						<div class="weeks">周一</div>
						<div class="weeks">周二</div>
						<div class="weeks">周三</div>
						<div class="weeks">周四</div>
						<div class="weeks">周五</div>
						<div class="weeks">周六</div>
						<div class="weeks">周日</div>
					</div>
					<div class="week-time">
						<div class="weeks-tit">周</div>
						<div class="weeks">
							<div>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								------
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<span class="add"> + </span>
							</div>
						</div>
						<div class="weeks">
							<div>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								------
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<span class="add"> + </span>
							</div>
						</div>
						<div class="weeks">
							<div>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								------
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<span class="add"> + </span>
							</div>
						</div>
						<div class="weeks">
							<div>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								------
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<span class="add"> + </span>
							</div>
						</div>
						<div class="weeks">
							<div>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								------
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<span class="add"> + </span>
							</div>
						</div>
						<div class="weeks">
							<div>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								------
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<span class="add"> + </span>
							</div>
						</div>
						<div class="weeks">
							<div>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								------
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<select name="" id="">
									<option value="00">00</option>
								</select>
								<span class="add"> + </span>
							</div>
						</div>
					</div>
				</div>
				<div class="fir05">
					<div class="fir05-name">
						自我介绍
					</div>
					<textarea name="" v-model="form.about_me" class="text" id="" cols="30" rows="10"></textarea>
				</div>
				<div class="fir02" style="border:none">
					<div class="names">
						宣传视频
					</div>
					<div class="pic base">
						<input type="text" class="widths">
					</div>
				</div>
			</div>
			<h4>教学经历</h4>
			<div class="jyjl">
				<div class="fir02">
					<div class="names">
						当前任职学校
					</div>
					<div class="pic base">
						<input type="text" v-model="form.cur_school" class="widths" placeholder="如果是已经退休的教师或目前不在学校任职，请填写最新一段教学经历">
					</div>
				</div>
				<div class="sknj">
					<div class="names">
						当前教授科目和年级
					</div>
					<div class="right">
						<div class="addelet">
							<button>添加科目</button>
							<button>删除科目</button>
						</div>
						<div class="tits">
							<div class="choose">
								选择
							</div>
							<div class="kcfl">
								课程分类
							</div>
							<div class="nianji">
								年级
							</div>
						</div>
						<div class="tits">
							<div class="choose">
								<input type="checkbox" name="" id="">
							</div>
							<div class="kcfl">
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
							</div>
							<div class="nianji">
								<input type="checkbox" name="" id=""> 幼儿园
								<input type="checkbox" name="" id=""> 小学
								<input type="checkbox" name="" id=""> 初中
								<input type="checkbox" name="" id=""> 高中
								<input type="checkbox" name="" id=""> 大学
								<input type="checkbox" name="" id=""> 成人
							</div>
						</div>
						<div class="tits">
							<div class="choose">
								<input type="checkbox" name="" id="">
							</div>
							<div class="kcfl">
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
							</div>
							<div class="nianji">
								<input type="checkbox" name="" id=""> 幼儿园
								<input type="checkbox" name="" id=""> 小学
								<input type="checkbox" name="" id=""> 初中
								<input type="checkbox" name="" id=""> 高中
								<input type="checkbox" name="" id=""> 大学
								<input type="checkbox" name="" id=""> 成人
							</div>
						</div>
						<div class="tits" style="border:none">
							<div class="choose">
								<input type="checkbox" name="" id="">
							</div>
							<div class="kcfl">
								<select name="" id="">
									<option value="其他">其他</option>
								</select>
								<input type="text" placeholder="手动输入科目名">
							</div>
							<div class="nianji">
								<input type="checkbox" name="" id=""> 幼儿园
								<input type="checkbox" name="" id=""> 小学
								<input type="checkbox" name="" id=""> 初中
								<input type="checkbox" name="" id=""> 高中
								<input type="checkbox" name="" id=""> 大学
								<input type="checkbox" name="" id=""> 成人
							</div>
						</div>
					</div>
				</div>

				<div class="fir02">
					<div class="names">
						当前任职学校
					</div>
					<div class="pic base sel">
						<select name="" v-model="form.cur_country" id="">
							<option value="请选择地区">请选择地区</option>
						</select>
						<select name="" v-model="form.cur_province" id="">
							<option value="请选择州">请选择州</option>
						</select>
					</div>
				</div>

				<div class="sknj">
					<div class="names">
						可教授其他科目和年级
					</div>
					<div class="right">
						<div class="addelet">
							<button>添加科目</button>
							<button>删除科目</button>
						</div>
						<div class="tits">
							<div class="choose">
								选择
							</div>
							<div class="kcfl">
								课程分类
							</div>
							<div class="nianji">
								年级
							</div>
						</div>
						<div class="tits">
							<div class="choose">
								<input type="checkbox" name="" id="">
							</div>
							<div class="kcfl">
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
							</div>
							<div class="nianji">
								<input type="checkbox" name="" id=""> 幼儿园
								<input type="checkbox" name="" id=""> 小学
								<input type="checkbox" name="" id=""> 初中
								<input type="checkbox" name="" id=""> 高中
								<input type="checkbox" name="" id=""> 大学
								<input type="checkbox" name="" id=""> 成人
							</div>
						</div>
						<div class="tits">
							<div class="choose">
								<input type="checkbox" name="" id="">
							</div>
							<div class="kcfl">
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
								<select name="" id="">
									<option value="一级分类">一级分类</option>
								</select>
							</div>
							<div class="nianji">
								<input type="checkbox" name="" id=""> 幼儿园
								<input type="checkbox" name="" id=""> 小学
								<input type="checkbox" name="" id=""> 初中
								<input type="checkbox" name="" id=""> 高中
								<input type="checkbox" name="" id=""> 大学
								<input type="checkbox" name="" id=""> 成人
							</div>
						</div>
						<div class="tits" style="border:none">
							<div class="choose">
								<input type="checkbox" name="" id="">
							</div>
							<div class="kcfl">
								<select name="" id="">
									<option value="其他">其他</option>
								</select>
								<input type="text" placeholder="手动输入科目名">
							</div>
							<div class="nianji">
								<input type="checkbox" name="" id=""> 幼儿园
								<input type="checkbox" name="" id=""> 小学
								<input type="checkbox" name="" id=""> 初中
								<input type="checkbox" name="" id=""> 高中
								<input type="checkbox" name="" id=""> 大学
								<input type="checkbox" name="" id=""> 成人
							</div>
						</div>
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						总教龄
					</div>
					<div class="pic base sel">
						<select name="" v-model="form.teacher_age" id="">
							<option value="0">0</option>
						</select>
						<select name="" id="">
							<option value="6">6</option>
						</select>
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						简历
					</div>
					<div class="pic base sel">
						<span>简历</span>
						<span>重新上传</span>
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						执教资格证明
					</div>
					<div class="pic base sel">
						<span>资格证明1</span>
						<span>资格证明2</span>
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						经验分享
					</div>
					<div class="pic base">
						<input type="text" class="widths" placeholder="请描述职业生涯中认为对申请该职位有帮助的任何加分经验">
					</div>
				</div>
				<div class="fir02">
					<div class="names">
						所得奖项
					</div>
					<div class="pic base sel">
						<span>所得奖项1</span>
						<span>所得奖项2</span>
					</div>
				</div>
				<div class="fir05">
					<div class="fir05-name">
						其他工作经历
					</div>
					<textarea name="" class="text" id="" cols="30" rows="10"></textarea>
				</div>
			</div>
		</div>
		<div class="btn-box">
			<el-button type="primary" size="mini" @click="submit">提交</el-button>
			<el-button size="mini" @click="goBack">返回</el-button>
		</div>
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

<style scoped>
h4 {
  margin: 20px;
}
.slet-detail {
  padding: 20px;
}
.teacher-mess,
.jyjl {
  margin: 20px;
  border: 1px solid #e1e1e1;
}
.teacher-name {
  width: 100%;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
}
.title {
  float: left;
  width: 100px;
  padding-right: 20px;
}
.cont {
  float: left;
}
.detail {
  margin: 20px;
  min-height: 300px;
  background-color: #e1e1e1;
  text-align: center;
  line-height: 300px;
}
.fir01 {
  height: 100px;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
}
.name {
  width: 15%;
  text-align: center;
  line-height: 100px;
  border-right: 1px solid #e1e1e1;
  float: left;
}
.pic-contain {
	padding: 4px;
}
.pic {
  width: 84%;
  float: left;
}
.pic img {
  width: 80px;
  height: 80px;
  margin: 10px;
  float: left;
}
.pic button {
  float: left;
  border: none;
  outline: none;
  color: #3c8dbc;
  margin-top: 80px;
  cursor: pointer;
  margin-left: 30px;
}
.fir02 {
  height: 50px;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
}
.names {
  line-height: 50px;
  border-right: 1px solid #e1e1e1;
  float: left;
  text-align: center;
  width: 15%;
}
.base input {
  margin: 15px 10px;
}
.width {
  width: 350px;
}
.base select {
  width: 60px;
  margin: 15px 10px;
}
.widths {
  width: 435px;
}
.bases select {
  width: 124px;
  margin: 15px 10px;
}
.times select {
  width: 435px;
}
.fir03 {
  min-height: 225px;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
}
.name01 {
  height: 225px;
  border-right: 1px solid #e1e1e1;
  line-height: 225px;
  text-align: center;
  width: 15%;
  float: left;
}
.xueli {
  width: 9%;
  float: left;
  border-right: 1px solid #e1e1e1;
  height: 225px;
}
.xl-tit,
.zdsj-tit,
.weeks-tit {
  height: 24px;
  line-height: 24px;
  border-bottom: 1px solid #e1e1e1;
  text-align: center;
}
.xl-name,
.zdsj-name,
.weeks {
  min-height: 49px;
  line-height: 49px;
  border-bottom: 1px solid #e1e1e1;
  text-align: center;
}
.xl-name:last-child,
.zdsj-name:last-child,
.weeks:last-child {
  border: none;
}
.zdsj {
  width: 15%;
  float: left;
  border-right: 1px solid #e1e1e1;
}
.zdsj-name input {
  width: 40%;
  outline: none;
}
.zdsj-name input.inp {
  width: 90%;
  height: 30px;
  margin: 4px 5%;
  outline: none;
  text-align: center;
}
.zdsj-name div {
  line-height: 15px;
  font-size: 12px;
  color: #3c8dbc;
}
.delet {
  cursor: pointer;
}
.zdsj-name button {
  display: block;
  margin: 0 auto;
  padding: 0px 10px;
}
.fir04 {
  min-height: 375px;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
}
.fir04 .name01 {
  line-height: 375px;
  height: 100%;
}
.week {
  width: 20%;
  float: left;
  border-right: 1px solid #e1e1e1;
}
.week-time {
  width: 64.8%;
  float: left;
}
.add {
  color: #3c8dbc;
  margin-left: 30px;
  cursor: pointer;
}
.fir05 {
  height: 150px;
  border-bottom: 1px solid #e1e1e1;
}
.fir05-name {
  line-height: 150px;
  text-align: center;
  width: 15%;
  float: left;
  border-right: 1px solid #e1e1e1;
}
.text {
  width: 80%;
  height: 120px;
  margin: 15px 2%;
  outline: none;
}
.sknj {
  height: 250px;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
}
.sknj .names {
  line-height: 250px;
}
.right {
  width: 84.8%;
  float: left;
}
.addelet,
.tits {
  border-bottom: 1px solid #e1e1e1;
  height: 49px;
  overflow: hidden;
}
.addelet button {
  margin: 15px;
  width: 100px;
  cursor: pointer;
}
.tits .choose {
  width: 10%;
  text-align: center;
  line-height: 50px;
  float: left;
  border-right: 1px solid #e1e1e1;
}
.kcfl {
  width: 60%;
  line-height: 50px;
  text-align: center;
  float: left;
  border-right: 1px solid #e1e1e1;
}
.nianji {
  text-align: center;
  line-height: 50px;
  width: 29.8%;
  float: left;
}
.sel select {
  width: 200px;
}
.sel span {
  color: #3c8dbc;
  margin-left: 20px;
  cursor: pointer;
  line-height: 49px;
}
.btn-box {
  width: 250px;
  margin: 0 auto;
  padding: 15px;
}
</style>