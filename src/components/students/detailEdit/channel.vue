<template>
	<!-- 学生详情 -->
  <el-container class="detail-item">
    <el-aside class="detail-item-aside" width="200px">
      学生来源
    </el-aside>
    <el-main class="detail-item-main">
      <el-row>
        <el-select size="mini" class="detail-item-width3" v-model="form.channel_id" filterable placeholder="请选择">
          <el-option
            v-for="item in channelLs"
            :key="item.id"
            :label="item.channel_name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import {
  channelBareGet
} from '@/api/channel'
export default {
	data() {
		return {
			channelLs: [],
			form: {
				channel_id: ''
			}
		}
  },
	methods: {
		initData(form) {
      this.getChannel().then(()=>{
        this.form.channel_id = form.channel_id;
      })
    },
    getChannel() {
      const filter = this.$json2filter({})
      return channelBareGet(filter, {
        results_per_page: 1000,
        page: 1
      }).then(resp => {
        this.channelLs = resp.data.objects;
      })
    },
		onUploadSuccess() {
			this.form.avatar = e[0].download_file;
		},
		getForm() {
			return this.form;
		}
	}
};
</script>

<style>
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