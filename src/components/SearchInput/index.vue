<template>
  <div>
    <el-form ref="SearchInput" :size="size" :inline="true" :model="searchField" label-width="80px">
      <el-form-item v-for="(item,index) in searchData" :key="index" :label="item.title" :prop="item.name">
        <!-- input输入框 -->
        <el-input v-if="item.type == 'input'" v-model="searchField[item.name]" :placeholder="item.title" class="com-inline-input" />
        <!-- select选择框 -->
        <el-select v-if="item.type == 'select'" v-model="searchField[item.name]" :placeholder="item.title" class="com-inline-input">
          <el-option v-for="(child,i) in item.options" :key="i" :label="child.title" :value="child.value" />
        </el-select>
        <!-- 下拉单选或者多选 -->
        <el-tree-select v-if="item.type == 'treeSelect' && item.treeParams.data.length>0" v-model="searchField[item.name]" multiple :tree-params="item.treeParams" :styles=" { width:'100%' } " :disabled="item.disabled?item.disabled:false" />
        <!-- 带时分秒 -->
        <el-date-picker
          v-if="item.type === 'pickerTime'"
          v-model="searchField[item.name]"
          :style="item.width?`width:${item.width}`:'width:100%'"
          :value-format="item.valueFormat"
          :type="item.date?item.date:'date'"
          :placeholder="item.title"
          :disabled="item.disabled?item.disabled:false"
          @change="datePickerClick($event,item.name,item.createTime,item.endTime,item.change)"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearchField">搜索</el-button>
        <el-button type="primary" @click="handleResetField">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    searchField: { // 接收的数据搜索字段对象(传给后台的name)
      type: Object,
      default: () => ({})
    },
    searchData: { // 接收渲染表单类型数据的整体数据(包含name 名称 规则等)
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      name: '',
      msg: []
    }
  },
  computed: {
    size() {
      return this.$store.getters.size
    }
  },
  methods: {
    datePickerClick(value, name, name1, name2, status) {
      if (status) {
        this.searchField[name1] = value[0]
        this.searchField[name2] = value[1]
      }
    },
    // 重置
    handleResetField() {
      // 其他参数一起还原重置
      for (const k in this.searchField) {
        this.searchField[k] = ''
      }
      this.$refs['SearchInput'].resetFields()
      this.$emit('resetFieldData', this.searchField)
    },
    // 搜索
    handleSearchField() {
      this.$emit('getSearchFieldData', this.searchField)
    }
  }
}
</script>

<style scoped>
.com-inline-input {
  width: 200px;
}
</style>
