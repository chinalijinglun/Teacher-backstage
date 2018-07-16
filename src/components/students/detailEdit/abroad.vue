<template>
	<!-- 学生详情 -->
	<div class="abroad-block">
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				是否意向出国留学
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<el-radio-group v-model="form.go_abroad">
						<el-radio label="YES">是</el-radio>
						<el-radio label="NO">否</el-radio>
					</el-radio-group>
        </el-row>
			</el-main>
		</el-container>
		<el-container class="detail-item">
			<el-aside class="detail-item-aside" width="200px">
				预计出国留学时间
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
          <el-date-picker
            v-model="form.go_abroad_at"
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
				期望出国就读区域
			</el-aside>
			<el-main class="detail-item-main">
        <el-row>
					<area-select v-model="areaLs" ref="areaSelect" :type="2" item-width="153px"></area-select>
        </el-row>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			areaLs: [],
			form: {
				go_abroad: '', // 是否愿意出国留学
				go_abroad_at: '', 
				go_abroad_country: '', 
				go_abroad_province: ''
			}
		}
	},
	methods: {
		initData(form) {
			this.$fillProps(this.form, form);
			this.areaLs = [+form.go_abroad_country, +form.go_abroad_province];
			this.$nextTick(_=>{
				this.$refs.areaSelect.onInit();
			});
		},
		onUploadSuccess() {
			this.form.avatar = e[0].download_file;
		},
		getForm() {
			const [go_abroad_country, go_abroad_province] = this.areaLs;

			return {
				...this.form,
				go_abroad_country,
				go_abroad_province
			};
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
.abroad-block {
	border-bottom: 1px #e3e3e3 solid
}
</style>