<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <img src="../assets/logo.png" alt style="height: 55px; position:relative; right:13px;" />
      </el-menu-item>
      <el-menu-item index="2">Example</el-menu-item>
      <el-menu-item index="3">Get Start</el-menu-item>
      <el-menu-item index="4">Docs</el-menu-item>
      <el-menu-item index="5">
        <a href="https://www.ele.me" target="_blank">Github</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "2"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu-item {
  text-align: center;
  width: 20%;
  font-size: 16px;
}
</style>