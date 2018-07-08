<template>
  <el-dialog
    :visible.sync="dialogVisible"
    @close="handlerClose"
    @open="handlerOpen">
    <el-table
    :data="fialLogLs">
      <el-table-column
        prop="created_at"
        label="审核时间">
      </el-table-column>
      <el-table-column
        prop="updated_by"
        label="审核人">
      </el-table-column>
      <el-table-column
        prop="action_event_desc"
        label="审核记录">
      </el-table-column>
    </el-table>
  </el-dialog>
</template>
<script>
  import {
    actionEventBareGet
  } from '@/api/action_event';
  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'actionEventReview',
    data() {
      return {
        fialLogLs: []
      };
    },
    props: ['primaryDataId','afterState','primaryTableName','actionEventType'],
    methods: {
      handlerOpen() {
        this.getLog();
      },
      getLog() {
        const filter = this.$json2filter({
          action_event_type: [this.actionEventType],
          primary_table_name: [this.primaryTableName],
          after_state: [this.afterState],
          primary_data_id: [this.primaryDataId]
        })
        actionEventBareGet(filter).then(resp=>{
          this.fialLogLs = resp.data.objects;
        })
      },
      handlerClose() {
        this.fialLogLs = []
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
