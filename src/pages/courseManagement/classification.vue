<template>
<!-- 课程分类 -->
    <div id="classification">
      <div class="top-select-condition">
        <div class="class-name">
          课程名称：
          <input placeholder="请输入中文名称/英文名称" type="text" class="placehold">
        </div>
        <div class="class-id">
          课程ID：
          <input placeholder="请输入课程ID" type="text" class="placehold">
        </div>
        <div class="operator">
          操作人：
          <input placeholder="请输入操作人账号" type="text" class="placehold">
        </div>
        <div class="create-time">
          创建时间：
          <el-date-picker v-model="startDate" placeholder="请选择开始时间"></el-date-picker>
          <el-date-picker v-model="endDate" placeholder="请选择结束时间"></el-date-picker>
        </div>
        <div class="all-state">
          状态：
          <select name="" id="">
            <option value="所有状态">所有状态</option>
            <option value="有效">有效</option>
            <option value="无效">无效</option>
          </select>
        </div>
        <el-button type="primary">查询</el-button>
      </div>
      <div class="table-list">
        <div class="operation">
          <router-link to="/createCourse"><el-button type="primary">创建一级课程分类</el-button></router-link>
          
          <el-button type="primary" class="dels">删除</el-button>
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
    this.axios
      .get("http://localhost:8080/static/listTree.json")
      .then(function(data) {
        _that.data2 = data.data;
      });
  }
};
</script>
<style scoped>
.top-select-condition {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
}
.class-name,
.class-id,
.operator,
.all-state {
  width: 30%;
  padding: 10px;
  float: left;
}
.create-time {
  width: 60%;
  float: left;
  padding: 10px;
}
.create-time div {
  width: 35%;
  margin-right: 20px;
}
.all-state {
  width: 35%;
}
.all-state select {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 40%;
}
.placehold {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 70%;
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
