<template>
  <div class="price">
    <el-row class="form-contain">
      <el-form :inline="true" ref="form" :model="form" label-width="110px">
        <el-row>
          <el-form-item label="合作方名称：">
            <el-input v-model="form.name" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="合作方ID：">
            <el-input v-model="form.id" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系人：">
            <el-input v-model="form.people" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.telphone" size="mini"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="创建时间：">    
            <el-date-picker
              v-model="dataRange"
              type="daterange"
              size="mini"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
              <el-form-item label="状态：">
            <el-select v-model="form.status" placeholder="请选择" size="mini">
              <el-option label="所有状态" value=""></el-option>
              <el-option label="待分配" value="1"></el-option>
              <el-option label="已分配" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button type="primary">查询</el-button>
        </el-row>
      </el-form>
    </el-row>
    <el-row class="list-contain">
      <el-row class="list-title">
        <el-button type="primary">增加合作方</el-button>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="合作方ID"
            width="110"
            align="center">
          </el-table-column>
          <el-table-column
            prop="parterName"
            label="合作方名称"
            width="230"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="联系人"
            align="center">
          </el-table-column>
          <el-table-column
            prop="telphone"
            label="联系电话"
            align="center">
          </el-table-column>
          <el-table-column
            prop="time"
            label="加入时间"
            align="center">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            align="center">
          </el-table-column>
          <el-table-column
            label="操作"
            align="center">
            <template slot-scope="scope">
              <el-button size="mini" @click="dialogVisible = true;">编辑</el-button>
              <el-button size="mini" @click="dialogVisible = true;">注销</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="pagination-container">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="form.curPage"
          :page-size="form.pageSize"
          layout="total, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </el-row>
    </el-row>
    <assign-conselor-dialog :visible.sync="dialogVisible"></assign-conselor-dialog>
  </div>
</template>
<script>
import assignConselorDialog from "@/components/students/dialog/assignConselorDialog";
import paginationMix from "@/components/commons/mixins/paginationMix";

export default {
  name: "price",
  data() {
    return {
      dialogVisible: false,
      dataRange: [],
      form: {
        name: "",
        id: "",
        people: "",
        telphone: "",
        status:""
      },
      totalCount: 100,
      tableData: [
        {
          id: "0001",
          parterName: "中华教育机构",
          name: "Kira Yuan",
          telphone: "1876543210",
          time: "2018-02-27 11:25:30",
          status: "待分配"
        },
        {
          id: "0001",
          parterName: "中华教育机构",
          name: "Kira Yuan",
          telphone: "1876543210",
          time: "2018-02-27 11:25:30",
          status: "待分配"
        },
        {
          id: "0001",
          parterName: "中华教育机构",
          name: "Kira Yuan",
          telphone: "1876543210",
          time: "2018-02-27 11:25:30",
          status: "待分配"
        }
      ]
    };
  },
  mixins: [paginationMix],
  components: {
    assignConselorDialog
  }
};
</script>
<style scoped>
.form-contain {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 3px;
  margin-bottom: 20px;
}
.list-contain {
  padding: 15px;
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

