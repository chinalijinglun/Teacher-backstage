<template>
<!-- 预约 -->
<div class="date">
	<el-button type="primary" size="mini">学生信息</el-button>
	<div class="detail-content">
		详细信息内容
	</div>
	<div class="student-needs">
		<div class="stneeds">
			学生需求
		</div>
		<div class="need-time">
			2018-02-27 11:25:30
		</div>
		<div class="mian-content">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
		</div>
		<div class="trial-time">
			<div class="trial-name">
				试听时间
			</div>
			<div class="detail-time">
				2018.05.27 13:00 - 13:50
			</div>
		</div>
	</div>
	<div class="date-teacher">
		教师姓名：
		<input placeholder="请输入中文名称/英文名称" type="text" class="placehold">
		<el-button>确定</el-button>
	</div>
	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="id" label="ID" width="100">
		</el-table-column>
		<el-table-column prop="username" label="用户名" style="width:10%">
		</el-table-column>
		<el-table-column prop="teachername" label="教师姓名" style="width:10%">
		</el-table-column>
		<el-table-column prop="telphone" label="联系电话" style="width:10%">
		</el-table-column>
		<el-table-column prop="email" label="联系邮箱" style="width:10%">
		</el-table-column>
		<el-table-column prop="registime" label="注册时间" style="width:10%">
		</el-table-column>
	</el-table>

	<div class="date-teacher">
		试听课程：
	</div>
	<el-table :data="tableData1" style="width: 100%">
		<el-table-column prop="courseName" label="用户名" width="200">
		</el-table-column>
		<el-table-column prop="teachername" label="教师姓名" width="180">
		</el-table-column>
		<el-table-column prop="time" label="联系电话" width="180">
		</el-table-column>
	</el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "0001",
          username: "laoxu184962824@163.com",
          teachername: "Kira Yuan",
          telphone: 17111111111,
          email: "laoxu184962824@163.com",
          registime: "2018-02-27 11:25:30"
        }
      ],
      tableData1: [
        {
          courseName: "ESL英语综合提升中级",
          teachername: "Kira Yuan",
          time: "2018.02.27 — 04.28"
        }
      ]
    };
  }
};
</script>

<style scoped>
.detail-content {
  height: 430px;
  background-color: gray;
  line-height: 430px;
  text-align: center;
  margin: 10px 0;
}
.stneeds,
.need-time,
.mian-content {
  padding: 10px 0;
}
.trial-time {
  overflow: hidden;
  margin: 10px 0;
}
.trial-name {
  width: 90px;
  float: left;
}
.detail-time {
  float: left;
}
.placehold {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 30px;
  line-height: 30px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 200px;
}
.date-teacher button {
  padding: 7px 40px;
}
.date-teacher {
  margin-top: 20px;
}
</style>