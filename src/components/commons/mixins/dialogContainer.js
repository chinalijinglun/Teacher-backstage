export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  mixins: [],
  watch: {
    dialogVisible(v) {
      this.$emit('update:visible',v);
    },
    visible(v) {
      this.dialogVisible = v;
    }
  },
  props: ['visible']
};
