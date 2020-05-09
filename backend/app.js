var cors = require("cors");
var bodyParser = require("body-parser");
var fs = require("fs");
var exec = require("child_process").execFile;

const express = require("express");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/writeFile", (req, res) => {
  console.log(req.body);
  var code = req.body.code;
  fs.writeFile("./tmp.cpp", code, function (err) {
    if (err) {
      console.log("出错");
    } else {
      console.log("写文件操作成功");
    }
  });
  res.send("完成");
});

app.get("/generateGraph", function (req, res) {
  exec("CFGTest2018-03-17.exe", function (err, data) {
    console.log(err);
    console.log(data.toString());
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

var fun = function () {
  console.log("fun() start");
};
fun();
