<template>
  <div id="side-menu">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="介绍" name="1">
        <div
          class="collapse-content"
        >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。；</div>
      </el-collapse-item>
      <el-collapse-item title="示例" name="2">
        <div
          class="collapse-content"
        >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。；</div>
      </el-collapse-item>
      <el-collapse-item title="文档" name="3">
        <div
          class="collapse-content"
        >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。；</div>
      </el-collapse-item>
      <el-collapse-item title="Github" name="4">
        <div
          class="collapse-content"
        >与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。；</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style>
#side-bar {
  height: 100%;
}
.el-menu {
  height: 100%;
}
.el-collapse-item {
  margin-bottom: 5px;
  box-shadow: 0px 1px 1px #6b6b6b;
}
.el-collapse-item__header {
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
}
.collapse-content {
  padding: 0 20px;
}
</style>