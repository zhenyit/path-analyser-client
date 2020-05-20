var cors = require("cors");
var bodyParser = require("body-parser");
var fs = require("fs");
var exec = require("child_process").execFile;
const dedent = require("dedent");

const express = require("express");
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/writeFile", (req, res) => {
  console.log(req.body);
  var code = req.body.code;
  fs.writeFile("./tmp.cpp", code, function(err) {
    if (err) {
      console.log("出错");
    } else {
      console.log("写文件操作成功");
    }
  });
  res.send("完成");
});

app.get("/generateGraph", function(req, res) {
  var exampleID = req.query.exampleID;
  console.log(exampleID);
  var writeContent = "";
  switch (exampleID) {
    case "1":
      writeContent = code.code1;
      break;
    case "2":
      writeContent = code.code2;
      break;
    case "3":
      writeContent = code.code3;
      break;
    case "4":
      writeContent = code.code4;
      break;
    case "5":
      writeContent = code.code5;
      break;
    case "6":
      writeContent = code.code6;
      break;
    case "7":
      writeContent = code.code7;
      break;
    case "8":
      writeContent = code.code8;
      break;
    default:
      writeContent = code.code1;
  }
  console.log(writeContent);
  fs.writeFile("./test.cpp", writeContent, function(err) {
    if (err) {
      console.log("出错");
    } else {
      console.log("写文件操作成功");
    }
  });
  exec("CFG3", function(err, data) {
    console.log(err);
    console.log(data);
    console.log("finish！");
    res.send("success");
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

var fun = function() {
  console.log("fun() start");
};
fun();

var code = {
  code1: dedent`
  int middle(double a, double b, double c)
  {
      if(((a<b)&&(b<c))||((c<b)&&(b<a)))
      {
          return b;
      }
      else if(((a<c)&&(c<b))||((b<c)&&(c<a)))
      {
          return c;
      }
      else if(((b<a)&&(a<c))||((c<a)&&(a<b)))
      {
          return a;
      }
      else
      {
          return;
      }
  }
`,
  code2: dedent`
  int function(int totallocks, int totalstocks, int totalbarrels)
  {
      double  lockprice = 45.0 ;
      double  stockprice = 30.0 ;
      double  barrelprice = 25.0 ;
      double  locksales = lockprice * totallocks ;
      double  stocksales = stockprice * totalstocks ;
      double  barrelsales = barrelprice * totalbarrels ;
      double  sales = locksales + stocksales + barrelsales ;
      double commission ;
      if(sales > 1800.0)
      {
        commission = 0.10*1000.0 ;
        commission = commission + 0.15*800.0 ;
        commission = commission + 0.20*(sales - 1800.0) ;
      }
      else if(sales > 1000.0)
      {
        commission = 0.10*1000.0 ;
        commission = commission + 0.15*(sales - 1000.0) ;
      }
      else
      {
        commission = 0.10*sales ;
      }
      return 0;
  }
`,
  code3: dedent`
int TestIFInfeasible(int a)
{
  if(a) 
  {
    a = 1;
  }
  else{
    if(a)
    {
      a = -1;
    }
    else
    {
      a = 0;
    }
  }
  return 0;
}
`,
  code4: dedent`
int TestIF(int a)
{
    if(a)
    {
    a = 1;
    }
    else{
    a = 0
  }
    return 0;
}
`,
  code5: dedent`
int IsTriangle(int a, int b, int c)
{
    bool isTriangle;
    if( (a<(b+c)) && (b< (a+c)) && (c<(a+b)))
    {
        isTriangle = true;
    }
    else
    {
      isTriangle = false;
    }
    if(isTriangle)
    {
        if((a == b || b == c || a == c ) && (a!=b)&& (b!= c))
        {
            
        }
        if( a==b && b==c)
        {
            
        }
        if( a != b && a!=c && b!=c )
        {
            
        }
    }
    else
    {
        
    }
    return 0;
}
`,
  code6: dedent`
int function(int driverage, int point)
{
    int baseRate = 500;
    int safedrivingreduction;
    int age;
    if(driverage >= 16 && driverage < 20)
    {
        age = 2.8;
        if( point < 1)
        {
            safedrivingreduction = 50;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if(driverage >= 20 && driverage < 25)
    {
        age = 1.8;
        if(point < 3)
        {
            safedrivingreduction = 50;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if ( driverage >= 25 && driverage < 45)
    {
        age = 1;
        if(point < 5)
        {
            safedrivingreduction = 100;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if(driverage >= 45 && driverage < 60)
    {
        age = 0.8;
        if(point < 7)
        {
            safedrivingreduction = 150;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else if(driverage >= 60 && driverage < 120)
    {
        age = 1.5;
        if( point < 5)
        {
            safedrivingreduction = 200;
        }
        else
        {
            safedrivingreduction = 0;
        }
    }
    else
    {
        
    }
    return 0;
}
`,
  code7: dedent`
int test(int a, double b, int c)
{
    if(b > 10)
    {
            switch(a)
    {
        case 0:
            //googd
            break;
        case 1:
            //good 
            break;
        default:
            break;
    }
    }
    else
    {
        if(c>10)
        {}
        else
        {}
    }    
}
`,
  code8: dedent`
int Factorial(int input)
{
  if (input <= 0 || input > 10) {
    }
  if (input == 1)
    return 1;
  return Factorial(input - 1) * input;
}
`,
};
