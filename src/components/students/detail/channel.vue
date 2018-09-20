<template>
	<!-- 学生详情 -->
  <el-container class="detail-item">
    <el-aside class="detail-item-aside" width="200px">
      学生来源
    </el-aside>
    <el-main class="detail-item-main">
      <el-row>
        <view-input :text="channel_name" width="310px"></view-input>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import {
  channelBareGetById
} from '@/api/channel'
export default {
	data() {
		return {
      channelLs: [],
      channel_name: ''
		}
  },
	methods: {
		initData(form) {
      if(form.channel_id) {
        channelBareGetById(form.channel_id).then(resp=>{
          this.channel_name = resp.data.channel_name;
        })
      }
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