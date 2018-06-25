<template>
  <el-dialog
    title="班主任"
    :visible.sync="dialogVisible"
    @open="handlerOpen"
    @close="handlerClose"
    width="30%">
    <div class="conselor-list">
      <ul class="conselor-ul">
        <li v-for="(item,index) in sysLs" :key="index"><el-radio v-model="radio" :label="item.id">{{`${item.username}（已分配学生数0）`}}</el-radio></li>
      </ul>
    </div>
    <div class="btn-container">
      <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
      <el-button size="mini" @click="toClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
  import {
    mangerStaffQuery
  } from '@/api/sys_user';
  import {
    studentPutById
  } from '@/api/student';
  import dialogContainer from '@/components/commons/mixins/dialogContainer'
  export default {
    name: 'assignConselorDialog',
    data() {
      return {
        radio: '',
        sysLs: []
      };
    },
    props: ['studentId', 'helperId'],
    created() {
      this.query();
    },
    methods: {
      query() {
        return mangerStaffQuery({
          page_limit: 1000,
          page_no: 1,
          role_id: 7
        }).then(resp => {
          this.sysLs = resp.data.objects;
        })
      },
      handlerOpen() {
        console.log(this.helperId)
        this.radio = this.helperId || '';
      },
      handlerClose() {
        this.radio = '';
        this.$emit('onClose')
      },
      onSubmit() {
        studentPutById(this.studentId, {
          student_helper_id: this.radio
        }).then(resp => {
          this.$message.success('分配成功！');
          this.toClose();
        })
      }
    },
    mixins: [dialogContainer]
  }
</script>
<style scoped>
  ul,li,ol {
    list-style: none;
  }
  .conselor-list {
    overflow: hidden;
  }
  .conselor-ul {
    width: 100%;
  }
  .conselor-ul li{
    width: 50%;
    float: left;
    line-height: 30px;
  }
  .btn-container {
    margin-top: 20px;
    text-align: center;
  }
</style>
