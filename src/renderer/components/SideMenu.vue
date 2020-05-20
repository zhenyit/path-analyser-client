<template>
  <div id="side-menu">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="介绍" name="1">
        <div
          class="collapse-content"
        >本程序可用于自动生成测试用例，在示例中选择合适的示例标签，上传后系统会调用差分进化算法，通过分析程序的路径生成程序控制流程图，并自动生成测试用例。</div>
      </el-collapse-item>
      <el-collapse-item title="示例" name="2">
        <el-select
          class="collapse-content"
          v-model="value"
          placeholder="请选择示例"
          @change="changeCode"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="submit-btn">
          <el-button type="primary" plain @click="uploadCode">生成测试用例</el-button>
        </div>
      </el-collapse-item>
      <el-collapse-item title="文档" name="3">
        <div class="collapse-content">
          <a href="https://github.com/zhenyit/path-analyser-pc">path-analyser</a>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Github" name="4">
        <div class="collapse-content">
          <a href="https://github.com/zhenyit/path-analyser-pc">path-analyser</a>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import http from "../utils/http";

export default {
  name: "SideMenu",
  data() {
    return {
      activeNames: ["2"],
      options: [
        {
          value: "1",
          label: "示例1"
        },
        {
          value: "2",
          label: "示例2"
        },
        {
          value: "3",
          label: "示例3"
        },
        {
          value: "4",
          label: "示例4"
        },
        {
          value: "5",
          label: "示例5"
        },
        {
          value: "6",
          label: "示例6"
        },
        {
          value: "7",
          label: "示例7"
        },
        {
          value: "8",
          label: "示例8"
        }
      ],
      value: "1"
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    uploadCode() {
      let data = { code: this.$store.state.code };
      http.post("/writeFile", data).then(function(response) {
        console.log(response);
      });
      console.log(this.$store.state.code);
    },
    changeCode() {
      // this.$store.commit("setCode", 10);
      this.$emit("change-code", this.value);
      // console.log(this.$store.state.code);
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
.submit-btn {
  text-align: center;
  margin: 10px 0;
}
</style>