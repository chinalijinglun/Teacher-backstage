<template>
<!-- 课程分类 -->
    <div id="classification">
      <div class="top-select-condition">
        <el-form ref="form" label-width="96px">
        <div class="inps">
            <el-row>
                <el-form-item label="课程分类名称：">
                    <el-input size="mini" v-model="form.full_name"></el-input>
                </el-form-item>
                <el-form-item label="课程分类ID：">
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
                :start-date.sync="form.updated_at.gt"
                :end-date.sync="form.updated_at.lt"
                size="mini"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间">
                </date-range>
            </el-form-item>
            <el-form-item label="状态：">
                <el-select v-model="form.state[0]" placeholder="请选择" size="mini">
                  <el-option label="所有状态" value=""></el-option>
                  <el-option label="有效" :value="$VALID_ENUM.VALID"></el-option>
                  <el-option label="无效" :value="$VALID_ENUM.INVALID"></el-option>
                </el-select>
            </el-form-item>
        </el-row>
        <el-button type="primary" size="mini" @click="queryCurriculum">查询</el-button>
        </el-form>
      </div>
      <div class="table-list">
        <div class="operation">
          <router-link to="/course/addCurriculum"><el-button type="primary" size="mini">创建一级课程分类</el-button></router-link>
          <el-button type="primary" @click="deleteChose" size="mini">删除</el-button>
        </div>
        <div class="main-table-title" style="display: inline-grid;position: relative;width:calc(100% - 50px);height:36px;line-height:36px;">
          <div style="display:inline-block;">
            <span style="width:130px;display: inline-block;">课程中文名称</span>
          </div>
          <div style="position: absolute;right: 310px;">
            <span style="width: 179px;display: inline-block;">课程英文名称</span>
            <span style="width: 70px;display: inline-block;">课程ID</span>
            <span style="width: 170px;display: inline-block;">创建人</span>
            <span style="width: 140px;display: inline-block;">创建时间</span>
            <span style="width: 56px;display: inline-block;">课程状态</span>
          </div>
          <div style="position: absolute; right: 80px;">
            <span>操作</span>
          </div>
        </div>
        <el-tree
          :props="defaultProps"
          node-key="id"
          show-checkbox
          :data="tableData"
          lazy
          :load="loadData"
          accordion
          ref="tree"
        >
          <span
            style="display: inline-grid;position: relative;width:calc(100% - 50px);"
            class="line-tree"
            slot-scope="{ node, data }"
          >
            <div style="display:inline-block;">
              <span style="width:230px;display: inline-block;">
                {{data.classNameZh}}
              </span>
            </div>
            <div style="position: absolute; right: 45px;">
              <button
                v-if="node.level !== 3"
                type="button"
                class="el-button el-button--default el-button--small"
                @click="addNextClass(node)"
              >
                <span>添加下级分类</span>
              </button>
              <button
                type="button"
                class="el-button el-button--default el-button--small"
                @click="updateClass(node)"
              >
                <span>编辑</span>
              </button>
              <button
                type="button"
                class="el-button el-button--default el-button--small"
                @click="deleteClass(node)"
              >
                <span>删除</span>
              </button>
            </div>
            <div style="position:absolute;right:365px;">
              <span style="width:179px;display:inline-block;">
                {{data.classNameEn}}
              </span>
              <span style="width:70px;display:inline-block;">
                {{data.classId}}
              </span>
              <span style="width:170px;display:inline-block;">
                {{data.creator}}
              </span>
              <span style="width:140px;display:inline-block;">
                {{data.createTime | hasTime}}
              </span>
              <span style="width:56px;display:inline-block;">
                {{data.state}}
              </span>
            </div>
          </span>
        </el-tree>
      </div>
    </div>
</template>
<script>
import {
  subjectCategoryGet,
  subjectCategoryDeleteBySubjectcategoryId
} from '@/api/subject_category';
import {
  curriculumGet,
  curriculumDeleteByCurriculumid
} from '@/api/curriculum';
import {
  subjectGet,
  subjectDeleteBySubjectid
} from '@/api/subject';

export default {
  name: "classification",
  data() {
    return {
      tableData: [],
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
        full_name: '',
        id: '',
        updated_by: '',
        state: [''],
        updated_at: {
          gt: '',
          lt: ''
        }
      }
    };
  },
  methods: {
    deleteChose() {
      this.$confirm('确认删除？')
      .then(_ => {
        console.log('delete');
        const nodes = this.$refs.tree.getCheckedNodes();
        const delPromise = [];
        nodes.forEach(node => {
          delPromise.push(this.deleteFn({level: node.level, data: node}));
        });
        console.log(nodes);
        Promise.all(delPromise).then(resp => {
          this.$message.success('删除成功！');
          this.queryCurriculum();
        });
      })
      .catch(_ => {});
    },
    queryCurriculum() {
      const {
        full_name,
        id,
        updated_by,
        state,
        updated_at
      } = this.form;
      const filter = this.$json2filter({
        'full_name|full_name_zh': full_name,
        id,
        updated_by,
        state,
        updated_at
      });
      filter.limit = this.$NO_PAGE_LIMIT;
      return curriculumGet(filter).then(resp => {
        const { data:{ objects } } = resp;
        this.tableData = objects.map(item => {
          return {
            children: [],
            classNameZh: item.full_name_zh,
            classNameEn: item.full_name,
            classId: item.id,
            creator: item.updated_by,
            createTime: item.created_at,
            level: 1,
            state: {
              [this.$VALID_ENUM.VALID]: '有效',
              [this.$VALID_ENUM.INVALID]: '无效'
            }[item.state]
          }
        });
        return this.tableData;
      });
    },
    querySubject(subject_category_id) {
      const {
        full_name,
        id,
        updated_by,
        state,
        updated_at
      } = this.form;
      const filter = this.$json2filter({
        'subject_name|subject_name_zh': full_name,
        id,
        updated_by,
        state,
        subject_category_id: [subject_category_id],
        updated_at
      });
      filter.limit = this.$NO_PAGE_LIMIT;
      return subjectGet(filter).then(resp => {
        const { data:{ objects } } = resp;
        return objects.map(item => ({
          children: [],
          classNameZh: item.subject_name_zh,
          classNameEn: item.subject_name,
          classId: item.id,
          creator: item.updated_by,
          createTime: item.created_at,
          level: 2,
          state: {
            [this.$VALID_ENUM.VALID]: '有效',
            [this.$VALID_ENUM.INVALID]: '无效'
          }[item.state]
        }));
      });
    },
    querySubjectCategory(curriculum_id) {
      const {
        full_name,
        id,
        updated_by,
        state,
        updated_at
      } = this.form;
      const filter = this.$json2filter({
        'subject_category|subject_category_zh': full_name,
        id,
        updated_by,
        state,
        curriculum_id: [curriculum_id],
        updated_at
      });
      filter.limit = this.$NO_PAGE_LIMIT;
      return subjectCategoryGet(filter).then(resp => {
        const { data:{ objects } } = resp;
        return objects.map(item => ({
          children: [],
          classNameZh: item.subject_category_zh,
          classNameEn: item.subject_category,
          classId: item.id,
          curriculum_id: item.curriculum_id,
          creator: item.updated_by,
          createTime: item.created_at,
          level: 3,
          state: {
            [this.$VALID_ENUM.VALID]: '有效',
            [this.$VALID_ENUM.INVALID]: '无效'
          }[item.state]
        }));
      });
    },
    loadData(node, resolve) {
      const { level, data } = node;
      switch(level) {
        case 1:
          this.querySubjectCategory(data.classId).then(res => {
            resolve(res);
          });
          return
        case 2:
          this.querySubject(data.classId).then(res => {
            resolve(res);
          });
          return;
        default:
          resolve([]);
          return;
      }
    },
    addNextClass(node){
      switch(node.level) {
        case 1:
          return this.$router.push({
            path: '/course/addSubjectCategory',
            query: {
              curriculum_id: node.data.classId
            }
          });
        case 2:
          return this.$router.push({
            path: '/course/addSubject',
            query: {
              curriculum_id: node.data.curriculum_id,
              subject_category_id: node.data.classId
            }
          });
        default:
          return this.$router.push('/course/addCurriculum');
      }
    },
    updateClass(node) {
      switch(node.level) {
        case 1:
          return this.$router.push({
            path: '/course/addCurriculum',
            query: {
              id: node.data.classId
            }
          });
        case 2:
          return this.$router.push({
            path: '/course/addSubjectCategory',
            query: {
              id: node.data.classId
            }
          });
        case 3:
          return this.$router.push({
            path: '/course/addSubject',
            query: {
              id: node.data.classId
            }
          });
        default:
          return this.$router.push('/course/addCurriculum');
      }
    },
    deleteClass(node) {
      this.$confirm('确认删除？')
      .then(_ => {
        this.deleteFn(node).then( resp => {
          this.$message.success('删除成功！');
          this.$refs.tree.remove(node);
        });
      })
      .catch(_ => {});
    },
    deleteFn(node) {
      const { level, data: { classId } } = node;
      switch(level) {
        case 1:
          return curriculumDeleteByCurriculumid(classId);
        case 2:
          return subjectCategoryDeleteBySubjectcategoryId(classId);
        case 3:
          return subjectDeleteBySubjectid(classId);
        default:
          return Promise.reject('无效删除！');
      }
    }
  },
  created() {
    this.queryCurriculum();
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
