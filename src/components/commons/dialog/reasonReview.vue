<template>
  <el-dialog
    :visible.sync="dialogVisible"
    @close="handlerClose"
    @open="handlerOpen"
    width="30%">
    <el-table
    :data="tableData">
      <el-table-column
        prop="created_at"
        label="审核时间">
        <template slot-scope="{row}">
          {{row.created_at | hasTime}}
        </template>
      </el-table-column>
      <el-table-column
        prop="updated_by"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="state_reason"
        label="审核记录">
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
  import {
    payLogBareGet
  } from '@/api/pay_log';
  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'reasonReview',
    data() {
      return {
        tableData: []
      };
    },
    props: ['order_id','state'],
    methods: {
      handlerOpen() {
        this.getLog();
      },
      getLog() {
        const filter = this.$json2filter({
          order_id: this.order_id,
          state: this.state
        });

        return payLogBareGet(filter).then(resp=>{
          this.tableData = resp.data.objects;
        })
      },
      handlerClose() {
        this.tableData = []
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style scoped>
  .btn-container{
    text-align: center;
  }
</style>
