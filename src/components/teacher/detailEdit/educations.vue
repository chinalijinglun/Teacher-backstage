<template>
	<!-- 教师详情 -->
	<div class="teacher-detail">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				教育背景
			</el-aside>
			<el-main class="detail-item-main">
         <el-table
          :data="tableData"
          border
          style="width: 900px">
          <el-table-column
            label="学历">
						<template slot-scope="scope">   
							{{$DEGREE[scope.row.degree]}}
						</template>
          </el-table-column>
          <el-table-column
            prop="name"
						width="230px"
            label="在读期间">
						<template slot-scope="scope">    
							<el-input v-model="scope.row.start" size="mini" class="detail-item-width1"></el-input>
							<el-input v-model="scope.row.end" size="mini" class="detail-item-width1"></el-input>
						</template>
          </el-table-column>
          <el-table-column
            prop="school"
            label="在读学校">
						<template slot-scope="scope">    
							<el-input v-model="scope.row.school" size="mini" class="detail-item-width1"></el-input>
						</template>
          </el-table-column>
          <el-table-column
            prop="major"
            label="专业">
						<template slot-scope="scope">    
							<el-input v-model="scope.row.major" size="mini" class="detail-item-width1"></el-input>
						</template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="毕业证明">
						<template slot-scope="scope">    
							<el-upload
								class="upload-demo"
								:action="$baseApiUrl+'/upload'"
								multiple
								:on-success="handlerSuccess(scope.$index)" 
								:on-remove="handleRemove(scope.$index)"
								:file-list="getFileList(scope.row.certificate)">
								<el-button size="mini" type="primary">点击上传</el-button>
							</el-upload>
						</template>
          </el-table-column>
          <el-table-column
            prop="remark"
            label="备注">
						<template slot-scope="scope">    
							<el-input v-model="scope.row.remark" type="textarea" :rows="2" size="mini" class="detail-item-width1"></el-input>
						</template>
          </el-table-column>
        </el-table>
			</el-main>
		</el-container>
	</div>
</template>
<script>
export default {
	data() {
		return {
      tableData: [],
			form: {
				education_history: '',
			}
		}
	},
	methods: {
		initData(form) {
			this.$fillProps(this.form, form);
			console.log(this.form)
			form.education_history&&(this.tableData = JSON.parse(form.education_history));
		},
		getForm() {
			this.form.education_history = JSON.stringify(this.tableData);
			return this.form;
		},
		handlerSuccess(index) {
			return (data) => {
				return this.tableData[index].certificate.push({
					name: data[0].upload_file,
					url: data[0].download_file
				})
			}
		},
		handleRemove(index) {
			return (file, fileList) => {
				this.tableData[index].certificate = fileList.map(item => ({name: item.name, url: item.url}))
			}
		},
		getFileList(backList) {
			return backList.map(item => ({url: this.$baseApiUrl + item.url, ...item}))
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