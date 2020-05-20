<template>
  <div class="home">
    <el-container>
      <el-aside width="300px">
        <SideMenu @change-code="updateCode" @get-result="showResult" />
      </el-aside>
      <el-main>
        <CodeBlock style="height:50%" :selectNum="this.selectNum" />
        <ResultBlock :imgNum="this.imgNum" :showImg="this.showImg" />
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
  data() {
    return {
      loading: true,
      centerDialogVisible: true,
      selectNum: "",
      showImg: false,
      imgNum: "1"
    };
  },
  components: { SideMenu, CodeBlock, ResultBlock },

  methods: {
    updateCode(val) {
      this.selectNum = val;
      console.log(this.selectNum);
    },
    showResult(val) {
      this.showImg = true;
      this.imgNum = val;
      console.log("show result" + val);
    }
  }
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
