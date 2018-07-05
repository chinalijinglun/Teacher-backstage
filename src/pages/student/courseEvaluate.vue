<template>
  <div class="course-evaluate">
    <el-row>
      <el-button type="primary" size="mini" @click="goBack"></el-button>
    </el-row>
    <el-row>

    </el-row>
  </div>
</template>

<script>
  export default {
    name: "courseEvaluate",
    data() {
      return {

      };
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>

</style>
