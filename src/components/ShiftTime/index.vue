<template>
  <div>
    <el-popover
      v-if="renderList.length !==0"
      v-model="clickVisible"
      placement="bottom-start"
      width="30"
      trigger="click"
    >
      <ul class="el-select-dropdown__list">
        <li v-for="(item,index) in renderList" :key="item.id" class="el-select-dropdown__item" @click="handleClick(item.color,item.id,index)">
          <div class="circle" :style="`margin-right:10px;background-color:${item.color}`" />
          <div>{{ item.name }}</div>
        </li>
        <li v-if="renderList.length === 0">
          <div style="text-align: center;width: 100%;">无数据渲染</div>
        </li>
      </ul>
      <div slot="reference">
        <div class="click-wrapper">
          <div class="circle" :style="`background-color:${color}`" />
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
// 班次时间
export default {
  name: 'ShiftTime',
  props: {
    renderList: { // 渲染数据列表
      type: Array,
      default: () => ({})
    },
    shiftData: { // 接收的数据搜索字段对象(传给后台的name)
      type: Number,
      default: () => (0)
    }
  },
  data() {
    return {
      clickVisible: false
    }
  },
  computed: {
    color: function() {
      return this.setColor()
    }
  },
  created() {

  },
  methods: {
    setColor() {
      if (this.shiftData === 0) {
        this.$emit('update:shift-data', this.renderList[0].id)
        return this.renderList[0].color
      }
      const index = this.renderList.findIndex(item => item.id === this.shiftData)
      if (index === -1) {
        this.$emit('update:shift-data', this.renderList[0].id)
        return this.renderList[0].color
      } else {
        return this.renderList[index].color
      }
    },
    handleClick(color, id, index) {
      this.circleColor = index
      this.$emit('update:shift-data', id)
      this.$emit('shift-data-click', id)
      this.clickVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.click-wrapper {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.circle{
  width: 15px;
  height:15px;
  border-radius: 50%;
}
.normal {
  background-color: #fff;
  border:1px solid #909399;
}
.rest{
  background-color: #acacac;
}
.morning{
  background-color: #ffd5d8;
}
.afternoon {
  background-color: #5fe5cc;
}
.night {
  background-color: #96cbf5;
}
li {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

</style>
