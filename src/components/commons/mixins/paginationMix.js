/**
 * 分页组件 
 * @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="pageSizes"
 * 所有组件提供 form.curPage作为当前页
 * 所有组件提供query方法，以供刷新列表
 * 此为约定不做校验，谢谢！
 * 
 */
export default {
  data() {
    return {
      pageSizes: [10, 20, 30, 40]
    };
  },
  methods: {
    query() {
    },
    handleCurrentChange(e) {
      this.form.page = e;
      this.query();
    }
  }
}