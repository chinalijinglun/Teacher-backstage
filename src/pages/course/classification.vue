<template>
<!-- 课程分类 -->
    <div id="classification">
      <div class="top-select-condition">
        <el-form ref="form" label-width="96px">
        <div class="inps">
            <el-row>
                <el-form-item label="课程包名称：">
                    <el-input size="mini" v-model="form.course_name"></el-input>
                </el-form-item>
                <el-form-item label="课程包ID：">
                    <el-input size="mini" v-model="form.id"></el-input>
                </el-form-item>
                <el-form-item label="操作人：">
                    <el-input size="mini" v-model="form.updated_by"></el-input>
                </el-form-item>
            </el-row>
        </div>
         <el-row class="state-createTime">
            <el-form-item label="创建时间：">    
                <date-range 
                :start-date.sync="form.startDate" 
                :end-date.sync="form.endDate"
                size="mini"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间">
                </date-range>
            </el-form-item>
            <el-form-item label="状态：">
                <el-select v-model="form.status" placeholder="请选择" size="mini">
                <el-option label="所有状态" value=""></el-option>
                <el-option label="有效" value="1"></el-option>
                <el-option label="无效" value="1"></el-option>
                </el-select>
            </el-form-item>
        </el-row>
        <el-button type="primary" size="mini">查询</el-button>
        </el-form>
      </div>
      <div class="table-list">
        <div class="operation">
          <router-link to="/course/createCourse"><el-button type="primary"  size="mini">创建一级课程分类</el-button></router-link>
          <el-button type="primary" size="mini">删除</el-button>
        </div>
        <div class="main-table-title" style="display: inline-grid;position: relative;width:calc(100% - 50px);height:36px;line-height:36px;">
            <div style="display:inline-block;">
              <span style="width:130px;display: inline-block;">课程中文名称</span>
            </div>
            <div style="position: absolute;right: 308px;">
              <span style="width:179px;display: inline-block;">课程英文名称</span>
              <span style="width:70px;display: inline-block;">课程ID</span>
              <span style="width: 70px;display: inline-block;">创建人</span>
              <span style="width: 190px;display: inline-block;">创建时间</span>
              <span style="width: 150px;display: inline-block;">课程状态</span>
            </div>
            <div style="position: absolute; right: 80px;">
              <span>操作</span>
            </div>
        </div>
        <el-tree :data="data2" :props="defaultProps" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false" :render-content="renderContent" accordion ref="tree">
        </el-tree>
      </div>
    </div>
</template>
<script>
import {
  subjectCategoryGet
} from '@/api/subject_category';

export default {
  name: "classification",
  data() {
    return {
      startDate: null, //开始时间
      endDate: null, //结束时间
      data2: [],
      defaultProps: {
        children: "children",
        classNameZh: "classNameZh",
        classNameEn: "classNameEn",
        classId: "classId",
        creator: "creator",
        createTime: "createTime",
        state: "state"
      },
      form: {
        subject_name: '',
        id: '',
        updated_by: "",
        status2: "",
        status3: ""
      }
    };
  },
  methods: {
    renderContent(h, { node, data, store }) {
      return (
        <span
          style="display: inline-grid;position: relative;width:calc(100% - 50px);"
          class="line-tree"
        >
          <div style="display:inline-block;">
            <span style="width:230px;display: inline-block;">
              {data.classNameZh}
            </span>
          </div>
          <div style="position: absolute; right: 45px;">
            <button
              type="button"
              class="el-button el-button--default el-button--small"
            >
              <span>添加下级分类</span>
            </button>
            <button
              type="button"
              class="el-button el-button--default el-button--small"
            >
              <span>编辑</span>
            </button>
            <button
              type="button"
              class="el-button el-button--default el-button--small"
            >
              <span>删除</span>
            </button>
          </div>
          <div style="position: absolute;right: 365px;">
            <span style="width:179px;display: inline-block;">
              {data.classNameEn}
            </span>
            <span style="width:70px;display: inline-block;">
              {data.classId}
            </span>
            <span style="width: 70px;display: inline-block;">
              {data.creator}
            </span>
            <span style="width: 200px;display: inline-block;">
              {data.createTime}
            </span>
            <span style="width: 130px;display: inline-block;">
              {data.state}
            </span>
          </div>
        </span>
      );
    }
  },
  created() {
    var _that = this;
    subjectCategoryGet().then(resp => {
      console.log(resp);
    });
    // this.axios
    //   .get("/static/listTree.json")
    //   .then(function(data) {
    //     _that.data2 = data.data;
    //   });
  }
};
</script>
<style scoped>
.inps .el-form-item {
  width: 25%;
  float: left;
}
.el-input {
  width: 75%;
}

.state-createTime .el-form-item {
  float: left;
}
.top-select-condition {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}


.top-select-condition button {
  float: left;
  margin: 10px;
}
.operation {
  margin: 10px;
}
.dels {
  padding: 12px 60px;
}
thead {
  height: 40px;
}
</style>
