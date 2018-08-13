<template>
<!-- 确认时间 -->
<el-dialog :title="title" :visible.sync="dialogVisible" size="tiny" width="580px" @close="close" @open="handleOpen">
  <el-row>
    <el-form :inline="true" :model="form" label-width="80px">
      <el-row>
        <el-form-item label="员工姓名">
          <el-input size="mini" v-model="form.username"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="联系电话">
          <el-input size="mini" v-model="form.mobile">
            <el-select v-model="form.nation" slot="prepend" style="width: 100px" placeholder="请选择">
              <el-option label="国家区号" value=""></el-option>
              <el-option v-for="(item, key) in $MOBILE_PRE" :label="item" :value="key" :key="key"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="联系邮箱">
          <el-input size="mini" v-model="form.email"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="角色">
          <el-checkbox-group v-model="form.roleList">
            <el-row v-for="(item, index) in roleLs" :key="index">
              <el-checkbox v-for="(role, i) in item" :key="i" :label="role.id">{{role.role_name}}</el-checkbox>
            </el-row>
          </el-checkbox-group>
        </el-form-item>
      </el-row>
    </el-form>
  </el-row>
  <el-row>
    <el-button type="primary" @click="submit">提交</el-button>
    <el-button @click="closeSelf">取消</el-button>
  </el-row>
</el-dialog>
</template>
<script>
import {
  sysUserRolePost,
  sysUserRoleBareGet,
  sysUserRoleDeleteById
} from '@/api/sys_user_role';
import {
  sysUserPost,
  sysUserPutById,
  sysUserBareGet,
  sysUserBareGetById
} from '@/api/sys_user';
import {
  roleDefinitionBareGet
} from '@/api/role_definition';
import { mapState } from 'vuex';
import dialogContainer from '@/components/commons/mixins/dialogContainer';

export default {
  mixins: [dialogContainer],
  name: "addSysUser",
  data() {
    return {
      form: {
        roleList: [],
        nation: '',
        mobile: '',
        email: '',
        username: ''
      },
      oldRoleLs: [],
      // 记录 role_definition_id和sys_user_role_id的对应关系，
      // key为role_definition_id
      // value为sys_user_role_id
      roleIdMap: {},
      title: '',
      roleLs: [],
      ivisible: false,
      oldForm: {}
    }
  },
  computed: {
    ...mapState({
      userName: state=>state.auth.userName
    })
  },
  created() {
    this.getRoleList()
  },
  props: ["sysUserId"],
  methods: {
    handleOpen() {
      if(this.sysUserId) {
        this.title = '编辑员工';
        this.getSysUserRole(this.sysUserId);
        this.getSysUserById(this.sysUserId);
      } else {
        this.title = '添加员工';
      }
    },
    close() {
      this.$emit('onClose');
      this.form = {
        roleList: [],
        nation: '',
        mobile: '',
        email: '',
        username: ''
      };
      this.oldForm = {};
    },
    async valid() {
      if(!this.form.username) {
        this.$message.error('请填写用户名！');
        return false;
      } else if(this.oldForm.username&&this.oldForm.username!==this.form.username){
        const filter = this.$json2filter({username: this.form.username});
        const res = await sysUserBareGet(filter);
        if(res.data.objects.length) {
          this.$message.error('用户名已被占用！');
          return false;
        }
      }
      if(!this.form.nation) {
        this.$message.error('请选择区号！');
        return false;
      }
      if(!this.form.mobile) {
        this.$message.error('请填写手机号！');
        return false;
      }
      if(!this.form.email) {
        this.$message.error('请填写');
        return false
      }
      if(!this.form.roleList.length) {
        this.$message.error('请选择角色！');
        return false;
      }
      return true;
    },
    closeSelf() {
      this.$emit('update:visible', false);
    },
    getRoleList() {
      const filter = this.$json2filter({});
      return roleDefinitionBareGet(filter,{results_per_page: 1000, page: 1}).then(res => {
        const roleLs = res.data.objects;
        const viewLs = [];
        roleLs.forEach(item => {
          if(viewLs.length && viewLs[viewLs.length-1].length<2) {
            viewLs[viewLs.length-1].push(item);
          } else {
            viewLs.push([item]);
          }
        });
        this.roleLs = viewLs;
        return viewLs;
      })
    },
    submit() {
      this.valid().then(valid => {
        if(valid) {
          const {
            nation,
            mobile,
            email,
            username
          } = this.form;
          if(this.sysUserId) {
            this.updatedSysUser({
              nation,
              mobile,
              email,
              username,
              updated_at: new Date(),
              updated_by: this.userName
            });
          } else {
            this.postSysUser({
              nation,
              mobile,
              email,
              username
            }).then(resp => {
              const postRoleLs = [];
              this.form.roleList.forEach(role_definition_id => {
                postRoleLs.push(this.postSysRole({sys_user_id: resp.data.id, role_definition_id}));
              });
              Promise.all(postRoleLs).then(resp => {
                this.$message.success('创建成功！');
                this.closeSelf();
              })
            })
          }
        }
      })
    },
    postSysUser(form) {
      const {
        nation,
        mobile,
        email,
        username
      } = form;
      return sysUserPost({
        nation,
        email,
        mobile,
        username,
        password: "1111",
        delete_flag: "IN_FORCE",
        state: "TRAINING",
        updated_at: new Date(),
        created_at: new Date(),
        updated_by: this.userName
      })
    },
    postSysRole({sys_user_id, role_definition_id}) {
      return sysUserRolePost({
        sys_user_id,
        role_definition_id,
        updated_at: new Date(),
        created_at: new Date(),
        updated_by: this.userName
      });
    },
    getSysUserRole(sys_user_id) {
      const filter = this.$json2filter({sys_user_id})
      return sysUserRoleBareGet(filter, {results_per_page: 1000, page: 1}).then(resp =>{
        const roleLs = resp.data.objects.map(item=>{
          this.roleIdMap[item.role_definition_id] = item.id;
          return item.role_definition_id
        });
        this.form.roleList = [...roleLs];
        this.oldRoleLs = [...roleLs];
      })
    },
    deleteSysRole(id) {
      return sysUserRoleDeleteById(id);
    },
    putSysUser(id, form){
      return sysUserPutById(id, form);
    },
    updatedSysUser(form) {
      this.putSysUser(this.sysUserId, form).then(resp => {
        const diff = this.findDiff();
        const sys_user_id = resp.data.id;
        const deleteSysRoleLs = diff.delLs.map(item => this.deleteSysRole(this.roleIdMap[item]));
        const postSysRoleLs = diff.addLs.map(item => this.postSysRole({sys_user_id, role_definition_id: item}));
        Promise.all([...deleteSysRoleLs, ...postSysRoleLs]).then(resp => {
          this.$message.success('更新成功！');
          this.closeSelf();
        })
      })
    },
    findDiff() {
      const roleLs = [...this.form.roleList];
      const oldRoleLs = [...this.oldRoleLs];
      return {
        delLs: oldRoleLs,
        addLs: roleLs
      }
    },
    getSysUserById(id) {
      sysUserBareGetById(id).then(resp => {
        for(let key in this.form) {
          if(resp.data[key]) {
            this.form[key] = resp.data[key];
          }
          this.oldForm = {
            ...this.form
          }
        }
      })
    }
  }
};
</script>

<style scoped>
.teacher-say {
  padding-bottom: 20px;
}
.detail-content {
  padding-bottom: 40px;
}
.detail-time input {
  width: 100px;
  height: 30px;
  margin-right: 15px;
  margin-top: 15px;
}
.select-button {
  padding-top: 30px;
}
.select-button button {
  padding: 8px 20px;
  margin-right: 20px;
}
</style>
