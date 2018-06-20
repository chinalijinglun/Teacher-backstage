<template>
<!-- 预约试讲弹窗 -->
<div class="date-alert">
	<div class="teacher-say">
		老师回复：
	</div>
	<div class="detail-content">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
	</div>
	<div class="teacher-time">
		<div class="tt-time">
			老师方便的时间：
		</div>
		<div class="detail-time">
			<input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner"><input type="text" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
		</div>
	</div>
	<div class="select-button">
		<el-button type="primary">&nbsp;&nbsp;同意&nbsp;&nbsp;</el-button>
		<el-button type="primary">重新预约</el-button>
		<el-button plain>&nbsp;&nbsp;关闭&nbsp;&nbsp;</el-button>
	</div>
</div>
</template>

<script>
export default {
  name: "dateAlert",
  data() {
    return {};
  }
};
</script>

<style scoped>
.date-alert {
  width: 397px;
  height: 378px;
  border: 1px solid #999;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  margin-left: -218px;
  margin-top: -209px;
  padding: 20px;
  text-align: left;
  z-index: 5;
}
.teacher-say {
  padding-bottom: 20px;
}
.detail-content {
  padding-bottom: 40px;
}
.detail-time input {
  width: 100px;
  height: 30px;
  margin-right: 15px;
  margin-top: 15px;
}
.select-button {
  padding-top: 30px;
}
.select-button button {
  padding: 8px 20px;
  margin-right: 20px;
}
</style>