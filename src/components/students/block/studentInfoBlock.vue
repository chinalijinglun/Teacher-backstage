<template>
  <div class="student-info-block">
    <div class="info-block-item">
      <p class="title">基本信息</p>
      <ul>
        <li class="info-item">
          <span class="info-key">学生姓名</span>
          <span class="info-value">
            {{`${detail.given_name || ''} ${detail.family_name || ''}`}}
          </span>
        </li>
        <li class="info-item">
          <span class="info-key">联系电话</span>
          <span class="info-value">{{ detail.mobile }}</span>
        </li>
        <li class="info-item">
          <span class="info-key">联系邮箱</span>
          <span class="info-value">{{ detail.email }}</span>
        </li>
      </ul>
    </div>
    <div class="info-block-item">
      <p class="title">详细信息</p>
      <ul>
        <li class="info-item">
          <span class="info-key">学生id</span>
          <span class="info-value">{{ detail.id }}</span>
        </li>
        <li class="info-item">
          <span class="info-key">用户名</span>
          <span class="info-value">{{ detail.username }}</span>
        </li>
        <li class="info-item">
          <span class="info-key">生日</span>
          <span class="info-value">{{ detail.birth }}</span>
        </li>
      </ul>
    </div>
    <div class="info-block-item">
      <p class="title">学生需求</p>
      <div class="info-requirement">
        <p class="title">中文</p>
        <el-input
          type="textarea"
          :rows="3"
          v-model="form.requirements_zh"
          placeholder="请输入内容">
        </el-input>
        <p class="title">英文</p>
        <el-input
          type="textarea"
          :rows="3"
          v-model="form.requirements"
          placeholder="请输入内容">
        </el-input>
        <div class="btn-contain">
          <el-button type="primary" size="small" @click="putRequirements">保存</el-button>
        </div>
      </div>
    </div>
    <div class="info-block-item">
      <p class="title">历史需求</p>
      <div class="info-requirement">
        <ul class="history-require">
          <li class="history-li" v-for="(item,index) in requirementsLs" :key="index">
            <p class="history-title">
              <span class="history-time">{{item.update_at}}</span>
              <span class="history-user">{{item.update_by}}</span>
            </p>
            <p class="history-content">{{item.str}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    studentBareGetById,
    studentPutById
  } from '@/api/student';
  import { mapState } from 'vuex';

// requirementsStr
// [{update_by: '',update_at: '', str: }]
  export default {
    data() {
      return {
        form: {
          requirements: '',
          requirements_zh: ''
        },
        requirementsLs: [],
        requiermentsZHLs: []
      }
    },
    props: ['detail'],
    computed: {
      ...mapState({
        userName: state=>state.auth.userName
      })
    },
    watch: {
      detail:{
        handler(v) {
          this.requirementsLs = this.parseRequirements(v.requirements);
          this.requiermentsZHLs = this.parseRequirements(v.requirements_zh);
        },
        deep: true
      }
    },
    methods: {
      getStudentDetail(id) {
        this.requirementsLs = this.parseRequirements(resp.data.requirements);
        this.requiermentsZHLs = this.parseRequirements(resp.data.requirements_zh);
      },
      parseRequirements(requirementsStr) {
        if(requirementsStr) {
          return JSON.parse(requirementsStr);
        }
        return [];
      },
      putRequirements() {
        const {
          requirements,
          requirements_zh
        } = this.form;
        const requirementsLs = [...this.requirementsLs];
        const requiermentsZHLs = [...this.requiermentsZHLs];
        if(!requirements) {
          this.$message.error('请输入需求！');
          return false;
        }
        if(!requirements_zh) {
          this.$message.error('请输入中文需求！');
          return false;
        }
        requirementsLs.push({
          update_by: this.userName,
          update_at: new Date(), 
          str: requirements
        })
        requiermentsZHLs.push({
          update_by: this.userName,
          update_at: new Date(), 
          str: requirements_zh
        });
        studentPutById(this.detail.id, {
          requirements: JSON.stringify(requirementsLs),
          requirements_zh: JSON.stringify(requiermentsZHLs)
        }).then(resp => {
          this.$message.success('添加成功！');
          this.requirementsLs = this.parseRequirements(resp.data.requirements);
          this.requiermentsZHLs = this.parseRequirements(resp.data.requirements_zh);
        })
      }
    }
  }
</script>
<style scoped>
  .info-block-item {
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
  }
  .info-block-item:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }
  .info-block-item .title {
    margin-bottom: 10px;
    font-family: "Microsoft YaHei";
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
  }
  .info-item {
    margin-bottom: 5px;
  }
  .info-item span {
    display: inline-block;
    font-family: 'Microsoft YaHei';
    text-align: left;
    line-height: 22px;
    font-size: 14px;
  }
  .info-item .info-key {
    width: 80px;
  }
  .info-item .info-value {
    color: #666;
  }
  .info-block-item .info-requirement {
    max-width: 900px;
  }
  .info-block-item .btn-contain {
    text-align: center;
    padding: 30px;
  }
  .history-li {
    margin-bottom: 5px;
    padding: 10px 0;
  }
  .history-title {
    line-height: 22px;
    margin-bottom: 10px;
  }
  .history-title span {
    display: inline-block;
    margin-right: 20px;
  }
</style>

