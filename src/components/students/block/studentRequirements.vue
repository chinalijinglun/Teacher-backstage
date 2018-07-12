<template>
  <div>
    <el-row class="button">
      <el-button size="mini" type="primary" @click="visible = true;">添加内容</el-button>
    </el-row>
    <el-row class="table-contain">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="content_zh"
          label="中文">
        </el-table-column>
        <el-table-column
          prop="content"
          label="英文">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="edit(scope.row.id)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <requirements-dialog :visible.sync="visible" :requirements-id="curId" @onClose="query" :student-id="student_id"></requirements-dialog>
  </div>
</template>
<script>
import {
  studentRequirementsBareGet,
  studentRequirementsPost
} from '@/api/student_requirements';
import requirementsDialog from '../dialog/requirementsDialog'

export default {
  name: 'studentRequirements',
  data() {
    return {
      student_id: '',
      curId: '',
      tableData: [],
      visible: false
    };
  },
  created() {
    this.student_id = this.$route.query.id;
    this.query();
  },
  methods: {
    query() {
      const filter = this.$json2filter({
        student_id: this.student_id
      })
      return studentRequirementsBareGet(filter, {
        results_per_page: 1000,
        page: 1
      }).then(resp => {
        this.tableData = resp.data.objects;
      })
    },
    edit(id) {
      this.curId = id;
      this.visible = true;
    }
  },
  components: {
    requirementsDialog
  }
}
</script>

