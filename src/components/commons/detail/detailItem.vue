<template>
  <div class="detail-item">
    <div class="item-left" :style="{
      width: labelWidth
    }">
      {{label}}
    </div>
    <div class="item-right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['labelWidth']
  }
</script>
<style>
.detail-item {
  max-width: 1000;
}
.item-left {
  display: inline-block;
  padding: 10px;
}
</style>
