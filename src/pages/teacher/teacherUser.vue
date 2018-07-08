<template>
	<!-- 教师用户 -->
	<div class="date-classs">
		<div class="course-package-top">
			<el-form ref="form" label-width="96px">
				<div class="inps">
					<el-row>
						<el-form-item label="教师姓名：">
							<el-input size="mini" v-model="form.username"></el-input>
						</el-form-item>
						<el-form-item label="联系电话：">
							<el-input size="mini" v-model="form.mobile"></el-input>
						</el-form-item>
						<el-form-item label="联系邮箱：">
							<el-input size="mini" v-model="form.email"></el-input>
						</el-form-item>
						<el-form-item label="居住地区：" class="ele-itmes">
							<el-select size="mini" v-model="form.country" filterable placeholder="国家">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<el-select size="mini" v-model="form.province" filterable placeholder="州列表">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="时区：">
							<el-select size="mini" v-model="form.timezone" filterable placeholder="时区列表">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="就职学校：">
							<el-input size="mini"></el-input>
						</el-form-item>
						<el-form-item label="当前教授科目：" class="ele-itme">
							<el-select size="mini" v-model="form.value8" filterable placeholder="一级课程分类">
								<el-option v-for="item in options" :key="item.category_1" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<el-select size="mini" v-model="form.value8" filterable placeholder="二级课程分类">
								<el-option v-for="item in options" :key="item.category_2" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<el-select size="mini" v-model="form.value8" filterable placeholder="三级课程分类">
								<el-option v-for="item in options" :key="item.category_3" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="当前教授科目：">
							<el-select size="mini" v-model="form.value8" filterable placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="当前任职地区：">
							<el-select size="mini" v-model="form.value8" filterable placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="当前任职州：">
							<el-select size="mini" v-model="form.value8" filterable placeholder="州列表">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="可教授其他科目：" class="ele-itme">
							<el-select size="mini" v-model="form.value8" filterable placeholder="一级课程分类">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<el-select size="mini" v-model="form.value8" filterable placeholder="二级课程分类">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<el-select size="mini" v-model="form.value8" filterable placeholder="三级课程分类">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="可教授其他年级：">
							<el-select size="mini" v-model="form.value8" filterable placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="总教龄：">
							<el-select size="mini" v-model="form.value8" filterable placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="所获奖项：">
							<el-select size="mini" v-model="form.value8" filterable placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="执教资格证明：">
							<el-select size="mini" v-model="form.value8" filterable placeholder="请选择">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="可选授课时间：" class="ele-itme">
							<el-select size="mini" v-model="form.value8" filterable placeholder="请选择周">
								<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
							<date-range :start-date.sync="form.startDate" :end-date.sync="form.endDate" size="mini" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间">
							</date-range>
						</el-form-item>
						<el-form-item label="教师状态：">
							<el-select v-model="form.status" placeholder="请选择" size="mini">
								<el-option label="所有状态" value=""></el-option>
								<el-option label="有效" value="1"></el-option>
								<el-option label="无效" value="1"></el-option>
							</el-select>
						</el-form-item>
					</el-row>
				</div>
				<el-button type="primary" size="mini">查询</el-button>
			</el-form>
		</div>
		<div class="table-list">
			<el-table :data="tableData" style="width: 100%;margin-top:20px;">
				<el-table-column fixed prop="zhname" label="ID" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="date" label="注册时间" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="zip" label="教师姓名" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="province" label="联系电话" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="address" label="联系邮箱" style="width: 10%;">
				</el-table-column>
				<el-table-column prop="enname" label="国家" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="enname" label="州" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="enname" label="时区" style="width: 15%;">
				</el-table-column>
				<el-table-column prop="city" label="状态" style="width: 15%;">
				</el-table-column>
				<el-table-column fixed="right" label="操作" style="width: 15%;">
					<template slot-scope="scope">
						<button type="button" class="el-button el-button--default el-button--small">
							<span>查看</span>
						</button>
					</template>
				</el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      currentPage4: 4,
      form: {
        status: ""
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        }
      ],
      value8: ""
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
.inps .el-form-item {
  width: 25%;
  float: left;
}
.inps .ele-itmes {
  width: 40%;
}
.inps .ele-itme {
  width: 100%;
}

.el-input {
  width: 85%;
}
.course-package-top button {
  float: left;
  margin: 20px;
}
.course-package-top {
  overflow: hidden;
}
.block {
  margin: 0 auto;
  padding: 20px;
  width: 600px;
}
</style>