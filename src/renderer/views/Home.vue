<template>
  <div class="home">
    <el-container>
      <el-aside width="300px">
        <SideMenu />
      </el-aside>
      <el-main>
        <CodeBlock style="height:50%" />
        <ResultBlock />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu";
import CodeBlock from "../components/CodeBlock";
import ResultBlock from "../components/ResultBlock";

export default {
  name: "home-page",
  components: { SideMenu, CodeBlock, ResultBlock },
  methods: {},
};
</script>

<style>
.home {
  height: 100%;
}
.content-body {
  height: calc(100% - 48px);
}
.el-header,
.el-main {
  padding: 0;
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #f1f1f1;
}
</style>
