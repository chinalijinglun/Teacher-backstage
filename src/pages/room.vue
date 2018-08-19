<template>
  <iframe width="100%" :height="frameHeight" ref="roomFrame" :src="roomUrl" frameborder="0"></iframe>
</template>
<script>
  import { getRoomUrl } from "@/api/course";
  export default {
    data() {
      return {
        roomUrl: '',
        frameHeight: window.innerHeight
      }
    },
    created() {
      this.getRoomUrl()
    },
    methods: {
      getRoomUrl() {
        getRoomUrl(this.$route.query.id).then( resp=> {
          this.roomUrl = resp.data.url
        })
      }
    }
  }
</script>
