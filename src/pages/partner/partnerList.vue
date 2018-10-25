<template>
  <div class="partner-list">
    <el-row class="form-container">
      <el-form :inline="true" ref="form" :model="form" label-width="96px">
        <el-row>
          <el-form-item label="合作方名称：">
            <el-input v-model="form.channel_name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="合作方ID：">
            <el-input v-model="form.id" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input v-model="form.contact_name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.contact_tel" size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="创建时间：">
            <date-range
              :start-date.sync="form.created_at.gt"
              :end-date.sync="form.created_at.lt"
              size="mini"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间">
            </date-range>
          </el-form-item>
          <el-form-item label="状态：">
            <el-select v-model="form.state[0]" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="有效" value="98"></el-option>
              <el-option label="无效" value="99"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button type="primary" size="mini" @click="query">查询</el-button>
          <el-button type="primary" size="mini" @click="toAddParter()">增加合作方</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-container">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="合作方ID">
          </el-table-column>
          <el-table-column
            prop="channel_name"
            label="合作方名称">
          </el-table-column>
          <el-table-column
            prop="contact_name"
            label="联系人">
          </el-table-column>
          <el-table-column
            prop="contact_tel"
            label="联系电话">
          </el-table-column>
          <el-table-column
            prop="created_at"
            label="加入时间">
            <template slot-scope="{row}">
              {{row.created_at | hasTime}}
            </template>
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              {{{98:'有效',99:'无效'}[scope.row.state]}}
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="toAddParter(scope.row.id)">编辑</el-button>
              <el-button size="mini" @click="setInValid(scope.row)">{{scope.row.state === 99? '生效':'注销'}}</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-row>
    <el-row style="text-align: right">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="form.page"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
  import {
    channelBareGet,
    channelPutById
  } from '@/api/channel';
  import {
    paginationMix
  } from '@/components';

  export default {
    data() {
      return {
        form: {
          channel_name: '',
          contact_tel: '',
          contact_name: '',
          id: '',
          page: 1,
          state: [''],
          created_at: {
            gt: '',
            lt: ''
          }
        },
        total: 0,
        tableData: []
      }
    },
    mixins: [paginationMix],
    created() {
      this.query();
    },
    methods: {
      query(){
        const {
          channel_name,
          contact_tel,
          contact_name,
          id,
          created_at,
          page,
          state
        } = this.form;
        const filter = this.$json2filter({
          channel_name,
          contact_tel,
          contact_name,
          id,
          state,
          created_at
        });
        channelBareGet(filter, {page}).then(resp => {
          this.tableData = resp.data.objects;
          this.total = resp.data.num_results;
        })
      },
      toAddParter(id) {
        this.$router.push({path:'/partner/partnerEdit', query: {id}})
      },
      setInValid({state, id}) {
        const s = state === 99? '生效':'注销';
        this.$confirm(`确定${s}`).then(_=>{
          channelPutById(id,{state: 99}).then(resp=> {
            this.$message.success(`${s}成功！`);
            this.query();
          })
        }).catch(_=>{

        })
      }
    }
  }
</script>
<style scoped>
.form-container {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 3px;
  margin-bottom: 20px;
}
.list-title {
  font-family: "Microsoft YaHei";
  font-size: 16px;
  line-height: 20px;
}
.pagination-container {
  text-align: right;
  margin-top: 30px;
}
</style>
