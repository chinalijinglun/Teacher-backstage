<template>
<div class="picture-upload">
  <div v-if="value.length > 0" class="images-list">
    <ul class="img-upload-ul">
      <li v-for="(image,index) in value" :key="index" class="img-upload-li">
        <img :src="preUrl+image" />
        <div class="img-upload-li-cover">
          <i class="img-icon el-icon-view" @click="previewImage(image)"></i>
          <i class="img-icon el-icon-delete" @click="delImage(index)"></i>
        </div>
      </li>
    </ul>
  </div>
  <div class="upload-plus-div" v-show="canPlus">
    <div id='addPic' v-on:click="addPic" class="addPic">+</div>
    <form ref="form"><input type="file" ref="fileupload" @change="onFileChange" :name="name" multiple class="upload-input"></form>
  </div>
  <el-dialog :visible.sync="visible" size="tiny">
    <img width="100%" :src="preUrl+dialogImageUrl" alt="">
  </el-dialog>
</div>
</template>
<script type="text/javascript">
export default {
	name: 'imgUpload',
  watch: {
    value(v, oldv) {
      if (v.length >= this.maxNum) {
        this.canPlus = false;
      } else {
        this.canPlus = true;
      }
      this.$emit("getImgs", v);
      this.$emit("input", v);
    }
  },
  data() {
    return {
      dialogImageUrl: "",
      canPlus: true,
      visible: false,
      relImages: []
    };
  },
  props: {
    name: {
      type: String,
      value: ""
    },
    preUrl: {
      type: String,
      value: ""
    },
    uploadUrl: {
      type: String,
      value: ""
    },
    value: {
      type: Array,
      default: []
    },
    oldImgs: {
      type: Array,
      value: []
    },
    maxNum: {
      type: Number,
      default: 1
    },
    imgWidth: {
      type: Number
    },
    imgHeight: {
      type: Number
    },
    maxsize: {
      type: Number
    }
  },
  methods: {
    open(msg) {
      this.$message({
        message: msg,
        type: "warning"
      });
    },
    addPic(e) {
      e.preventDefault();
      this.$refs.fileupload.click();
      return false;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files);
    },
    createImage(file) {
      if (!/image\/\w+/.test(file[0].type)) {
        this.open("请选择图片格式!");
        return false;
      }
      const maxsize = this.maxsize || 2 * 1024 * 1024;
      if (file[0].size > maxsize) {
        if (maxsize / 1024 > 1024) {
          this.open("文件不能大于" + maxsize / (1024 * 1024) + "M");
        } else {
          this.open("文件不能大于" + maxsize / 1024 + "K");
        }
        this.$refs.fileupload.value = "";
        return false;
      }
      if (typeof FileReader === "undefined") {
        this.open("您浏览器版本过低,请升级");
        this.$refs.fileupload.value = "";
        return false;
      }
      if (this.value.length > this.maxNum - 1) {
        this.open("图片上传数量超过" + this.maxNum + "张");
        this.$refs.fileupload.value = "";
        return false;
      }
      var image = new Image();
      var vm = this;
      var leng = file.length;
      for (var i = 0; i < leng; i++) {
        if (i > this.maxNum - 1) {
          this.open("图片上传数量超过" + this.maxNum + "张");
          return false;
        } else {
          this.uploadImage();
        }
      }
    },
    previewImage(image) {
      this.dialogImageUrl = image;
      this.visible = true;
    },
    delImage(index) {
      this.value.splice(index, 1);
    },
    removeImage(e) {
      this.value = [];
    },
    uploadImage() {
      let formData = new FormData(this.$refs.form);
      this.$refs.fileupload.value = "";
      this.axios.post(this.uploadUrl, formData).then(data => {
        if (data.data) {
          this.value.push(data.data[0].download_file);
        }
      });
    }
  }
};
</script>
<style scoped>
.images-list {
  float: left;
}
.img-upload-li-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.img-upload-li-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0;
}
.img-upload-li {
  display: inline-block;
  text-align: center;
  line-height: 90px;
  width: 90px;
  height: 90px;
  border: 1px solid #c0ccda;
  overflow: hidden;
  background: #fff;
  position: relative;
  margin-right: 4px;
  border-radius: 4px;
}
.img-upload-li:hover > .img-upload-li-cover {
  display: block;
}
.upload-plus-div {
  width: 92px;
  overflow: hidden;
}
.upload-plus-div div {
  width: 90px;
  height: 90px;
  line-height: 88px;
  background: #ffffff;
  border: 1px solid #bbbbbb;
  border-radius: 4px;
  font-size: 32px;
  color: #999999;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
}
.upload-plus-div .upload-input {
  display: none;
}
.img-upload-li {
}
.img-upload-li img {
  width: 100%;
}
.ivu-icon {
  display: inline-block;
  font-family: Ionicons;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.img-upload-li-cover .img-icon {
  font-size: 14px;
}
</style>
