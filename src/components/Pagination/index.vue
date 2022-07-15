<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      :pager-count="3"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
// table分页组件
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pagination-container {
  background: #fff;
  padding: 32px 16px;
  @media screen and (max-width:768px) {
    padding:32px 0;
  }
}
.pagination-container.hidden {
  display: none;
}
::v-deep {
  .el-pagination__total { //共n页
    @media screen and (max-width:768px) {
      margin-right:5px;
    }
  }
  .el-pagination span:not([class*=suffix]),
  .el-pagination button {
    @media screen and (max-width:768px) {
      font-size:11px;
    }
  }
  .el-pagination .el-select .el-input { //n页每条
    @media screen and (max-width:768px) {
      width:80px;
    }
  }
  .el-pagination__sizes { //n页每条
    @media screen and (max-width:768px) {
      margin:0 5px 0 0;
    }
  }
  .el-pagination__sizes .el-input .el-input__inner {
    @media screen and (max-width:768px) {
      font-size:11px;
    }
  }
  .el-pagination.is-background .el-pager li { //页码按钮
    @media screen and (max-width:768px) {
      margin:0 3px;
      min-width:25px;
    }
  }
  .el-pagination__jump { //前往n页
    @media screen and (max-width:768px) {
      margin-left:5px;
    }
  }
  .el-pagination.is-background .btn-prev,  //前后翻页按钮
  .el-pagination.is-background .btn-next {
    @media screen and (max-width:768px) {
      min-width:25px;
    }
  }
}
</style>
