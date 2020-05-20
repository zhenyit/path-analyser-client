<template>
  <div class="code-block">
    <!-- v-if="showImg" -->
    <el-container v-if="showImg">
      <el-aside style="height:100%; width:150px">
        <el-image :src="imgSrc" style="height:99%;" :preview-src-list="testSrc" />
      </el-aside>
      <el-main style="text-align: center; vertical-align: middle;">
        <el-button style="margin-top: 25px" @click="download">查看CFG原图</el-button>
        <el-button style="margin-top: 25px" @click="showReport">查看测试报告</el-button>
      </el-main>
    </el-container>

    <el-dialog title="控制流程图" :visible.sync="dialogVisible" width="35%">
      <el-image :src="imgSrc" />
    </el-dialog>

    <el-dialog title="测试报告" :visible.sync="dialogVisible2" width="50%">
      <pre v-highlightjs><code class="xml hljs">{{report}}</code></pre>
    </el-dialog>
  </div>
</template>

<script>
import http from "../utils/http";
import VueHighlightJS from "vue-highlightjs";
const { dialog } = require("electron").remote;
export default {
  name: "ResultBlock",
  data() {
    return {
      dialogVisible: false,
      dialogVisible2: false,
      report: ""
    };
  },
  computed: {
    testSrc: function() {
      return [require("../assets/示例1.png")];
    },
    imgSrc: function() {
      switch (this.imgNum) {
        case "1":
          return require("../assets/示例1.png");
          break;
        case "2":
          return require("../assets/示例2.png");
          break;
        case "3":
          return require("../assets/示例3.png");
          break;
        case "4":
          return require("../assets/示例4.png");
          break;
        case "5":
          return require("../assets/示例5.png");
          break;
        case "6":
          return require("../assets/示例6.png");
          break;
        case "7":
          return require("../assets/示例7.png");
          break;
        case "8":
          return require("../assets/示例8.png");
          break;
        default:
        // code block
      }
    }
  },
  props: {
    imgNum: String,
    showImg: Boolean
  },
  methods: {
    download() {
      this.dialogVisible = true;
    },
    showReport() {
      var that = this;
      http
        .get("/getReport", {
          params: {
            exampleID: this.imgNum
          },
          timeout: 100000
        })
        .then(function(response) {
          that.report = response.data.report;
          console.log(that.report);
          that.dialogVisible2 = true;
          // that.loading = false;
          // that.$emit("get-result", that.value);
        });
    }
  }
};
</script>

<style>
.code-block {
  height: 50%;
  background-color: #2c2c2c;
  border: 1px groove #eee;
  /* margin-left: 1px; */
}

.block-title {
  padding: 8px 10px;
  color: #ffffec;
}
</style>
