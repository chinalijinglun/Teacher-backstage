<template>
	<!-- 面试报告 -->
	<div class="interview-report">
		<div class="reinterview">
			<el-radio :disabled="canEdit" v-model="state" :label="1">正常面试</el-radio>
			<el-radio :disabled="canEdit" v-model="state" :label="2">面试失败</el-radio>
		</div>
		<template v-if="state === 1">
			<div class="main-content">
				<div class="tits">
					面试记录表
				</div>
				<div class="jingyan">
					<div class="line-jy">
						线上教学经验
					</div>
					<div class="sele">
						<el-radio :disabled="canEdit" v-model="form.onlineExperience" :label="1">有</el-radio>
						<el-radio :disabled="canEdit" v-model="form.onlineExperience" :label="0">无</el-radio>
					</div>
				</div>
				<div class="jingyan jsqk">
					<div class="line-jy">
						教室登录情况
					</div>
					<div class="seles">
						<el-radio :disabled="canEdit" v-model="form.roomVisit.value" :label="1">顺利</el-radio><br/>
						<el-radio :disabled="canEdit" v-model="form.roomVisit.value" :label="0">不顺利</el-radio>
					</div>
					<div class="beizhu">
						<span>备注：</span>
							<el-input type="textarea" :rows="3" placeholder="请输入内容" :disabled="canEdit" v-model="form.roomVisit.remark">
						</el-input>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						性别
					</div>
					<div class="sele">
						<el-radio :disabled="canEdit" v-model="form.gender" :label="1">男</el-radio>
						<el-radio :disabled="canEdit" v-model="form.gender" :label="0">女</el-radio>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						肤色
					</div>
					<div class="sele">
						<el-radio :disabled="canEdit" v-model="form.skin" :label="1">白</el-radio>
						<el-radio :disabled="canEdit" v-model="form.skin" :label="2">黄</el-radio>
						<el-radio :disabled="canEdit" v-model="form.skin" :label="3">黑</el-radio>
						<el-radio :disabled="canEdit" v-model="form.skin" :label="4">棕</el-radio>
						<el-radio :disabled="canEdit" v-model="form.skin" :label="5">红</el-radio>
						<el-radio :disabled="canEdit" v-model="form.skin" :label="6">其他</el-radio>
					</div>
				</div>
				<div class="jingyan jsqk">
					<div class="line-jy">
						教研管理经验
					</div>
					<div class="seles">
						<el-radio :disabled="canEdit" v-model="form.teacherExperience.value" :label="1">有</el-radio><br/>
						<el-radio :disabled="canEdit" v-model="form.teacherExperience.value" :label="0">没有</el-radio>
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :disabled="canEdit" v-model="form.teacherExperience.remark" :rows="3" placeholder="请输入内容">
						</el-input>
					</div>
				</div>
				<div class="jingyan jsqk">
					<div class="line-jy">
						受教育背景名校
					</div>
					<div class="selesa">
						<el-radio :disabled="canEdit" v-model="form.educationHistory.value" :label="1">私立藤校</el-radio><br/>
						<el-radio :disabled="canEdit" v-model="form.educationHistory.value" :label="2">公立藤校</el-radio><br/>
						<el-radio :disabled="canEdit" v-model="form.educationHistory.value" :label="3">排名前100</el-radio>
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :rows="3" placeholder="请输入内容" :disabled="canEdit" v-model="form.educationHistory.remark">
						</el-input>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						Demo课讲课方式
					</div>
					<div class="sele">
						<el-radio :disabled="canEdit" v-model="form.demoCourseWay" :label="1">说课</el-radio>
						<el-radio :disabled="canEdit" v-model="form.demoCourseWay" :label="2">讲课</el-radio>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						教学特色
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :rows="1" placeholder="请输入内容" :disabled="canEdit" v-model="form.teacheFeature">
						</el-input>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						PPT主题
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :rows="1" placeholder="请输入内容" :disabled="canEdit" v-model="form.pptTheme">
						</el-input>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						PPT设计
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :rows="1" placeholder="请输入内容" :disabled="canEdit" v-model="form.pptDesign">
						</el-input>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						PPT内容
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :rows="1" placeholder="请输入内容" :disabled="canEdit" v-model="form.pptContent">
						</el-input>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						建议时薪
					</div>
					<div class="sele">
						<el-radio :disabled="canEdit" v-model="form.suggestSalary" :label="1">20—25</el-radio>
						<el-radio :disabled="canEdit" v-model="form.suggestSalary" :label="2">25—30</el-radio>
						<el-radio :disabled="canEdit" v-model="form.suggestSalary" :label="3">30—35</el-radio>
						<el-radio :disabled="canEdit" v-model="form.suggestSalary" :label="4">35—40</el-radio>
						<el-radio :disabled="canEdit" v-model="form.suggestSalary" :label="5">40以上</el-radio>
					</div>
				</div>
				<div class="jingyan">
					<div class="line-jy">
						邮件往来数量情况
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :rows="1" placeholder="请输入内容" :disabled="canEdit" v-model="form.emailNumRemark">
						</el-input>
					</div>
				</div>
				<div class="jingyan" style="border:none;">
					<div class="line-jy">
						个人魅力相关
					</div>
					<div class="beizhu">
						<span>备注：</span>
						<el-input type="textarea" :rows="1" placeholder="请输入内容" :disabled="canEdit" v-model="form.selfCharmRemark">
						</el-input>
					</div>
				</div>
			</div>
			<div class="interview-form">
				<div class="tits">
					面试评价表
					<div class="grade">
						总得分：{{sumScore}}
					</div>
				</div>
				<div class="line1">
					<div class="num">
						序号
					</div>
					<div class="cons">
						内容项
					</div>
					<div class="manf">
						满分
					</div>
					<div class="detail">
						细项内容
					</div>
				</div>
				<div class="line2">
					<div class="nums">
						1
					</div>
					<div class="base">
						基本信息
					</div>
					<div class="content">
						<div class="jiaoling">
							当地教龄
						</div>
						<div class="xueli">
							学历
						</div>
						<div class="jygl">
							教研管理
						</div>
					</div>
					<div class="grades">
						<div class="grades1">
							15
						</div>
						<div class="grades2">
							15
						</div>
						<div class="grades3">
							12
						</div>
					</div>
					<div class="five">
						<div class="conts">
							5年及以下
						</div>
						<div class="conts">
							<el-radio :disabled="canEdit" v-model="form.localWorkAge" :label="5"></el-radio>
						</div>
						<div class="conts">
							本科
						</div>
						<div class="conts">
							<el-radio :disabled="canEdit" v-model="form.highestDegree" :label="5"></el-radio>
						</div>
						<div class="conts">
							教研经验
						</div>
						<div class="conts cont">
							<el-checkbox 
								:disabled="canEdit" v-model="form.teacheAndManage.teache" 
								:true-label="4" 
								:false-label="0">4</el-checkbox>
						</div>
					</div>
					<div class="five">
						<div class="conts">
							6-15年
						</div>
						<div class="conts">
							<el-radio :disabled="canEdit" v-model="form.localWorkAge" :label="10"></el-radio>
						</div>
						<div class="conts">
							硕士
						</div>
						<div class="conts">
							<el-radio :disabled="canEdit" v-model="form.highestDegree" :label="10"></el-radio>
						</div>
						<div class="conts">
							管理经验
						</div>
						<div class="conts cont">
							<el-checkbox 
								:disabled="canEdit" v-model="form.teacheAndManage.manage" 
								:true-label="4" 
								:false-label="0">4</el-checkbox>
						</div>
					</div>
					<div class="five">
						<div class="conts">
							15年以上
						</div>
						<div class="conts">
							<el-radio :disabled="canEdit" v-model="form.localWorkAge" :label="15"></el-radio>
						</div>
						<div class="conts">
							博士
						</div>
						<div class="conts">
							<el-radio :disabled="canEdit" v-model="form.highestDegree" :label="15"></el-radio>
						</div>
						<div class="conts">
							咨询经验
						</div>
						<div class="conts cont">
							<el-checkbox 
								:disabled="canEdit" v-model="form.teacheAndManage.consult" 
								:true-label="4" 
								:false-label="0">4</el-checkbox>
						</div>
					</div>
					<div class="grades gradess">
						<div class="grades1">
							{{form.localWorkAge || 0}}
						</div>
						<div class="grades2">
							{{form.highestDegree || 0}}
						</div>
						<div class="grades3">
							{{ teacheAndManageSum }}
						</div>
					</div>
				</div>
				<div class="line2">
					<div class="nums">
						2
					</div>
					<div class="base">
						线上授课与线上操作
					</div>
					<div class="content">
						<div class="jiaoling">
							面试环境
						</div>
						<div class="xueli">
							线上教室 功能使用
						</div>
						<div class="jygl">
							线上授课相关
						</div>
					</div>
					<div class="grades">
						<div class="grades1">
							4
						</div>
						<div class="grades2">
							6
						</div>
						<div class="grades3">
							8
						</div>
					</div>
					<div class="xg">
						<div class="xg-top">
							<div class="dg">
								<div class="word">
									灯光效果
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.interviewStatus.light" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="dg">
								<div class="word">
									背景适宜
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.interviewStatus.background" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
						</div>
						<div class="xg-top">

							<div class="djs">
								<div class="word">
									顺利进入教室
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.onlineRoomStatus.enter" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="djs">
								<div class="word">
									老师成功上传课件
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.onlineRoomStatus.upload" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="djs">
								<div class="word">
									教室其他功能使用
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.onlineRoomStatus.other" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
						</div>
						<div class="xg-top">
							<div class="xsskjl">
								<div class="word">
									线上授课经历
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.onlineTeache.experience" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									声情并茂
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.onlineTeache.isLively" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									PPT技能
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.onlineTeache.ppt" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									音频视频
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.onlineTeache.voice" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
						</div>
					</div>
					<div class="grades gradss">
						<div class="grades1">
							{{ interviewStatusSum }}
						</div>
						<div class="grades2">
							{{ onlineRoomStatusSum }}
						</div>
						<div class="grades3">
							{{ onlineTeacheSum }}
						</div>
					</div>
				</div>
				<div class="line2">
					<div class="nums">
						3
					</div>
					<div class="base">
						课件制作与展示
					</div>
					<div class="content">
						<div class="jiaoling">
							课件外观
						</div>
						<div class="xueli">
							课件内容
						</div>
						<div class="jygl">
							授课/说课
						</div>
					</div>
					<div class="grades">
						<div class="grades1">
							8
						</div>
						<div class="grades2">
							10
						</div>
						<div class="grades3">
							8
						</div>
					</div>
					<div class="xg">
						<div class="xg-top">
							<div class="xsskjl">
								<div class="word">
									图文并茂
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareStyle.isLively" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									外观设计
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareStyle.design" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									肢体语言
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareStyle.action" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									有辅助教具
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareStyle.property" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
						</div>
						<div class="xg-top">
							<div class="xsskjls">
								<div class="word">
									授课目标
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareContent.goal" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjls">
								<div class="word">
									词汇学习
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareContent.word" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjls">
								<div class="word">
									互动练习
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareContent.interaction" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjls">
								<div class="word">
									内容丰富
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareContent.rich" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjls">
								<div class="word">
									结构清晰
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.coursewareContent.clear" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
						</div>
						<div class="xg-top" style="border-bottom:none">
							<div class="xsskjl">
								<div class="word">
									互动型
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.teacheStatus.interaction" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									感染力型
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.teacheStatus.affect" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									灵活多变
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.teacheStatus.flexible" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
							<div class="xsskjl">
								<div class="word">
									语速适宜
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.teacheStatus.speed" 
										:true-label="2" 
										:false-label="0">2</el-checkbox>
								</div>
							</div>
						</div>
					</div>
					<div class="grades gradss">
						<div class="grades1">
							{{ coursewareStyleSum }}
						</div>
						<div class="grades2">
							{{ coursewareContentSum }}
						</div>
						<div class="grades3">
							{{ teacheStatusSum }}
						</div>
					</div>
				</div>
				<div class="line4">
					<div class="line-num">
						4
					</div>
					<div class="line-name">
						定制化教学能力
					</div>
					<div class="line-cont">
						定制化教学能力
					</div>
					<div class="line-gtade">
						8
					</div>
					<div class="xg">
						<div class="xg-top">
							<div class="dg">
								<div class="word">
									有定制教学经验
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.customMade.hasCustomMade" 
										:true-label="4" 
										:false-label="0">4</el-checkbox>
								</div>
							</div>
							<div class="dg">
								<div class="word">
									有教中国学生经验
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.customMade.hasChiness" 
										:true-label="4" 
										:false-label="0">4</el-checkbox>
								</div>
							</div>
						</div>
					</div>
					<div class="grades3">
						{{ customMadeSum }}
					</div>
				</div>
				<div class="line4">
					<div class="line-num">
						5
					</div>
					<div class="line-name">
						职业素养
					</div>
					<div class="line-cont">
						职业素养
					</div>
					<div class="line-gtade">
						6
					</div>
					<div class="xg">
						<div class="xg-top">
							<div class="dg">
								<div class="word">
									准时
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.attainment.onTime" 
										:true-label="3" 
										:false-label="0">3</el-checkbox>
								</div>
							</div>
							<div class="dg">
								<div class="word">
									热爱教学
								</div>
								<div class="shuzi">
									<el-checkbox 
										:disabled="canEdit" v-model="form.attainment.loveTeache" 
										:true-label="3" 
										:false-label="0">3</el-checkbox>
								</div>
							</div>
						</div>
					</div>
					<div class="grades3">
						{{attainmentSum}}
					</div>
				</div>
				<div class="line2">
					<div class="nums">
						总结评价
					</div>
					<el-input type="textarea" :disabled="canEdit" v-model="form.summary" :rows="5" placeholder="请输入内容">
					</el-input>
				</div>
				<div class="line4">
					<div class="line-num">
						结果
					</div>
					<div class="xgls">
						<el-radio :disabled="canEdit" v-model="result" :label="3">面试通过</el-radio>
						<el-radio :disabled="canEdit" v-model="result" :label="5">面试未完成</el-radio>
					</div>
				</div>
			</div>
		</template>
		<div class="reason-content" v-if="state === 2">
			<el-form>
				<el-form-item label="原因">
					<el-input type="textarea" :rows="5" :disabled="canEdit" v-model="failReason"></el-input>
				</el-form-item>
			</el-form>
		</div>
		<div class="btn-box">
			<el-button type="primary" size="mini" @click="submit">提交</el-button>
			<el-button size="mini">返回</el-button>
		</div>
	</div>
</template>
<script>
import {
	interviewPutByinterviewid,
	interviewGetByinterviewid
} from '@/api/interview';
import {
	teacherPutByTeacherid,
	teacherGetBareByTeacherid
} from '@/api/teacher';
export default {
  data() {
    return {
			canEdit: true,
			teacher_id: '',
			interview_id: '',
			// 1正常面试 2面试失败
			state: 0,
			form: {
				// 有无线上经验 1 有 0 无
				onlineExperience: 1,
				// 教室访问情况
				roomVisit: {
					// 1 顺利 0 不顺利
					value: 1,
					// 备注
					remark: ''
				},
				// 性别 1 男 0 女
				gender: 1,
				// 肤色 1 白 2 黄 3 黑 4 棕 5 红 6 其他
				skin: 1,
				// 教研管理经验
				teacherExperience: {
					// 1 有 0 没有
					value: 1,
					// 备注
					remark: ''
				},
				// 受教育背景名校
				educationHistory: {
					// 1 私立藤校 2 公立藤校 3 排名前100
					value: 1,
					// 备注
					remark: ''
				},
				// 任职学校名校
				workShool: {
					// 1 蓝带学校 2 藤校 3 排名前100
					value: 1,
					// 备注
					remark: ''
				},
				// demo课讲课方式 1 说课 2 讲课
				demoCourseWay: 1,
				// 教学特色
				teacheFeature: '',
				// PPT主题
				pptTheme: '',
				// PPT设计
				pptDesign: '',
				// PPT内容
				pptContent: '',
				// 建议时薪 1 20-25 2 25-30 3 30-35 4 35-40 5 40以上
				suggestSalary: 1,
				// 邮件往来数量情况
				emailNumRemark: '',
				// 个人魅力相关
				selfCharmRemark: '',

				// 面试评价表
				// 当地教龄  5年及以下 6-15年 15年以上
				localWorkAge: 5,
				// 学历 1 本科 2 硕士 3 博士
				highestDegree: 5,
				// 教研经验
				teacheAndManage: {
					// 教学经验
					teache: 0,
					// 管理经验
					manage: 0,
					// 咨询经验
					consult: 0
				},
				// 面试环境 
				interviewStatus: {
					// 灯光效果
					light: 0,
					// 背景适宜
					background: 0
				},
				// 线上教室功能使用
				onlineRoomStatus: {
					// 顺利进入教师
					enter: 0,
					// 成功上传课件
					upload: 0,
					// 教室其它功能使用
					other: 0
				},
				// 线上授课相关
				onlineTeache: {
					// 线上授课经历
					experience: 0,
					// 声情并茂
					isLively: 0,
					// ppt技能
					ppt: 0,
					// 音频视频
					voice: 0
				},
				// 课件外观
				coursewareStyle: {
					// 图文并茂
					isLively: 0,
					// 外观设计
					design: 0,
					// 肢体语言
					action: 0,
					// 有辅助道具
					property: 0
				},
				// 课件内容
				coursewareContent: {
					// 授课目标
					goal: 0,
					// 词汇学习
					word: 0,
					// 互动练习
					interaction: 0,
					// 内容丰富
					rich: 0,
					// 结构清晰
					clear: 0
				},
				// 授课/说课
				teacheStatus: {
					// 互动型
					interaction: 0,
					// 感染力型
					affect: 0,
					// 灵活多变
					flexible: 0,
					// 语速适宜
					speed: 0
				},
				// 定制化教学能力
				customMade: {
					// 有定制教学经验
					hasCustomMade: 0,
					// 有教中国学生经验
					hasChiness: 0
				},
				// 职业素养
				attainment: {
					// 准时
					onTime: 0,
					// 热爱教学
					loveTeache: 0
				},
				// 总结
				summary: ''
			},
			// 结果 3 通过 5 未完成
			result: 3,
			failReason: ''
    };
	},
	computed: {
		sumScore() {
			return this.form.localWorkAge + 
						 this.form.highestDegree +
						 this.teacheAndManageSum + 
						 this.interviewStatusSum +
						 this.onlineRoomStatusSum +
						 this.onlineTeacheSum +
						 this.coursewareStyleSum +
						 this.coursewareContentSum +
						 this.teacheStatusSum +
						 this.customMadeSum +
						 this.attainmentSum;
			
		},
		teacheAndManageSum() {
			return this.form.teacheAndManage.teache + 
						 this.form.teacheAndManage.manage +
						 this.form.teacheAndManage.consult;
		},
		interviewStatusSum() {
			return this.form.interviewStatus.light + 
						 this.form.interviewStatus.background; 
		},
		onlineRoomStatusSum() {
			return this.form.onlineRoomStatus.enter + 
						 this.form.onlineRoomStatus.upload + 
						 this.form.onlineRoomStatus.other; 
		},
		onlineTeacheSum() {
			return this.form.onlineTeache.experience + 
						 this.form.onlineTeache.isLively + 
						 this.form.onlineTeache.ppt + 
						 this.form.onlineTeache.voice; 
		},
		coursewareStyleSum() {
			return this.form.coursewareStyle.isLively + 
						 this.form.coursewareStyle.design + 
						 this.form.coursewareStyle.action + 
						 this.form.coursewareStyle.property; 
		},
		coursewareContentSum() {
			return this.form.coursewareContent.goal + 
						 this.form.coursewareContent.word + 
						 this.form.coursewareContent.interaction + 
						 this.form.coursewareContent.rich + 
						 this.form.coursewareContent.clear; 
		},
		teacheStatusSum() {
			return this.form.teacheStatus.interaction + 
						 this.form.teacheStatus.affect + 
						 this.form.teacheStatus.flexible + 
						 this.form.teacheStatus.speed; 
		},
		customMadeSum() {
			return this.form.customMade.hasCustomMade + 
						 this.form.customMade.hasChiness; 
		},
		attainmentSum() {
			return this.form.attainment.onTime + 
						 this.form.attainment.loveTeache; 
		}
	},
	created() {
		this.interview_id = this.$route.query.id;
		this.getInterview(this.$route.query.id);
	},
	methods: {
		getInterview(id) {
			interviewGetByinterviewid(id).then(resp => {
				if(resp.data.result) {
					this.canEdit = false;
					let result = {};
					try {
						result = JSON.parse(resp.data.result);
					} catch(e) {
					}
					this.form = this.$_object.assign(this.form, result);
				} else {
					this.canEdit = false;
				}
				this.result = resp.data.state;
				this.teacher_id = resp.data.teacher_id;
				this.getTeacher(resp.data.teacher_id, resp.data.result);
			})
		},
		getTeacher(id, reason) {
			teacherGetBareByTeacherid(id).then(resp => {
				if(resp.data.state === 12) {
					this.failReason = reason;
					// 若是面试失败
					return this.state = 2;
				}
				return this.state = 1;
			});
		},
		submit() {
			if(this.state === 1) {
				// 正常面试
				if(this.result === 3) {
					// 面试通过
					teacherPutByTeacherid(this.teacher_id, {
						state: 'WAITE_FOR_CONTRACT'
					}).then(resp => {
						return interviewPutByinterviewid(this.interview_id, {
							state: 9,
							result: JSON.stringify(this.form)
						})
					}).then(_=>{
						this.$message.success('填写成功！');
						this.back();
					})
				} else {
					// 面试未完成
					interviewPutByinterviewid(this.interview_id, {
						state: this.result,
						result: JSON.stringify(this.form)
					}).then(resp => {
						this.$message.success('填写成功！');
						this.back();
					});
				}
			} else {
				// 面试失败
				if(this.failReason) {
					interviewPutByinterviewid(this.interview_id, {
						state: 10,
						result: this.failReason
					}).then(_=>{
						this.$message.success('填写成功！');
						this.back();
					})
				} else {
					this.$message.error('请填写面试失败原因！');
				}
			}
		},
		back(){
			this.$router.back();
		}
	}
};
</script>

<style scoped>
.reinterview {
  padding: 10px;
}
.main-content {
  width: 100%;
  min-height: 200px;
  border: 1px solid #e1e1e1;
}
.interview-form {
  width: 100%;
  min-height: 200px;
  border: 1px solid #e1e1e1;
  margin-top: 80px;
  overflow: hidden;
}
.btn-box {
  width: 250px;
  margin: 0 auto;
  padding: 15px;
}
.tits {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 13px;
  border-bottom: 1px solid #e1e1e1;
}
.jingyan {
  border-bottom: 1px solid #e1e1e1;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}
.line-jy {
  width: 20%;
  border-right: 1px solid #e1e1e1;
  float: left;
  text-align: center;
}
.sele {
  float: left;
	padding-left: 10px;
  width: 79%;
}
.seles {
  float: left;
  width: 20%;
	padding-left: 10px;
  border-right: 1px solid #e1e1e1;
}
.jsqk {
  height: 100px;
}
.jsqk .line-jy {
  height: 100px;
  line-height: 100px;
}
.beizhu {
  width: 59%;
  float: left;
}
.beizhu span {
  float: left;
  text-indent: 20px;
}
.el-textarea {
  display: inline-block;
  padding: 14px;
  width: 80%;
  height: 60px;
}
.selesa {
  line-height: 33px;
  float: left;
	padding-left: 10px;
  width: 20%;
  border-right: 1px solid #e1e1e1;
}
.jingyan .el-textarea {
  padding: 10px;
}
.grade {
  float: right;
  margin-right: 12px;
}
.line1 {
  overflow: hidden;
  border-bottom: 1px solid #e1e1e1;
  height: 50px;
  line-height: 50px;
}
.line1 div {
  float: left;
  text-align: center;
}
.num,
.manf {
  width: 10%;
  border-right: 1px solid #e1e1e1;
}
.cons {
  width: 25%;
  border-right: 1px solid #e1e1e1;
}
.detail {
  width: 54%;
}
.line2 {
  height: 150px;
  border-bottom: 1px solid #e1e1e1;
  float: left;
  width: 100%;
}
.line2 .content {
  float: left;
  text-align: center;
  border-right: 1px solid #e1e1e1;
  height: 150px;
  width: 14.9%;
}
.nums,
.base {
  width: 10%;
  line-height: 150px;
  float: left;
  border-right: 1px solid #e1e1e1;
  text-align: center;
}
.jiaoling,
.xueli {
  border-bottom: 1px solid #e1e1e1;
  height: 50px;
  line-height: 50px;
}
.grades {
  width: 10%;
  line-height: 50px;
  float: left;
  border-right: 1px solid #e1e1e1;
  text-align: center;
}
.grades1,
.grades2 {
  border-bottom: 1px solid #e1e1e1;
}
.jygl {
  line-height: 50px;
}
.five {
  width: 15%;
  float: left;
  height: 150px;
  border-right: 1px solid #e1e1e1;
}
.conts {
  height: 24px;
  border-bottom: 1px solid #e1e1e1;
  text-align: center;
  line-height: 24px;
}
.cont {
  border: none;
  height: 25px;
}
.gradess {
  width: 9.5%;
  border: none;
}
.xg {
  width: 45.25%;
  height: 150px;
  float: left;
  overflow: hidden;
}
.xg-top {
  border-bottom: 1px solid #e1e1e1;
  height: 50px;
  overflow: hidden;
}
.dg {
  float: left;
  border-right: 1px solid #e1e1e1;
  height: 50px;
  text-align: center;
  width: 49.8%;
}
.word,
.shuzi {
  border-bottom: 1px solid #e1e1e1;
  height: 25px;
  line-height: 25px;
}
.gradss {
  width: 9.5%;
  border-right: none;
}
.djs {
  width: 33.13%;
  float: left;
  border-right: 1px solid #e1e1e1;
  text-align: center;
}
.xsskjl {
  width: 24.81%;
  float: left;
  border-right: 1px solid #e1e1e1;
  text-align: center;
}
.xsskjls {
  width: 19.8%;
  float: left;
  border-right: 1px solid #e1e1e1;
  text-align: center;
}
.line4 {
  height: 50px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
}
.line-num,
.line-name,
.line-gtade {
  line-height: 50px;
  width: 10%;
  border-right: 1px solid #e1e1e1;
  float: left;
}
.line-cont {
  width: 14.9%;
  border-right: 1px solid #e1e1e1;
  float: left;
  line-height: 50px;
}
.grades3 {
  line-height: 50px;
}
.text {
  width: 89.5%;
  border: none;
  outline: none;
}
.xgls {
  float: left;
	padding-left: 10px;
  line-height: 50px;
}
.xgls input {
  margin-left: 80px;
}
.reason-content {
	overflow: hidden;
  min-height: 200px;
	margin-bottom: 20px;
}
</style>