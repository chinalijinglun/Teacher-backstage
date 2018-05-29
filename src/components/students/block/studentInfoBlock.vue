<template>
  <div class="student-info-block">
    <div class="info-block-item">
      <p class="title">基本信息</p>
      <ul>
        <li class="info-item">
          <span class="info-key">教师姓名</span>
          <span class="info-value">Kira Yuan</span>
        </li>
        <li class="info-item">
          <span class="info-key">联系电话</span>
          <span class="info-value">1876543210</span>
        </li>
        <li class="info-item">
          <span class="info-key">联系邮箱</span>
          <span class="info-value">kira@gmail.com</span>
        </li>
      </ul>
    </div>
    <div class="info-block-item">
      <p class="title">详细信息</p>
      <ul>
        <li class="info-item">
          <span class="info-key">教师姓名</span>
          <span class="info-value">Kira Yuan</span>
        </li>
        <li class="info-item">
          <span class="info-key">联系电话</span>
          <span class="info-value">1876543210</span>
        </li>
        <li class="info-item">
          <span class="info-key">联系邮箱</span>
          <span class="info-value">kira@gmail.com</span>
        </li>
      </ul>
    </div>
    <div class="info-block-item">
      <p class="title">学生需求</p>
      <div class="info-requirement">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容">
        </el-input>
        <div class="btn-contain">
          <el-button type="primary" size="small">保存</el-button>
        </div>
      </div>
    </div>
    <div class="info-block-item">
      <p class="title">历史需求</p>
      <div class="info-requirement">
        <ul class="history-require">
          <li class="history-li">
            <p class="history-title">
              <span class="history-time">2018-02-27 11:25:30</span>
              <span class="history-user">添加人</span>
            </p>
            <p class="history-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
          </li>
          <li class="history-li">
            <p class="history-title">
              <span class="history-time">2018-02-27 11:25:30</span>
              <span class="history-user">添加人</span>
            </p>
            <p class="history-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
          </li>
          <li class="history-li">
            <p class="history-title">
              <span class="history-time">2018-02-27 11:25:30</span>
              <span class="history-user">添加人</span>
            </p>
            <p class="history-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
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

