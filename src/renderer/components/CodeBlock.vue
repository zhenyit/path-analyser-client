<template>
  <div style="height: 100%">
    <codemirror
      ref="cmEditor"
      :value="code"
      :options="cmOptions"
      @ready="onCmReady"
      @focus="onCmFocus"
      @input="onCmCodeChange"
      style="height: 100%"
    />
    <el-button type="success" @click="uploadCode">上传代码</el-button>
  </div>
</template>

<script>
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import http from "../utils/http";

import "codemirror/mode/clike/clike.js";
import "codemirror/theme/mbo.css";
import { mapState, mapActions } from "vuex";
import dedent from "dedent";

export default {
  name: "CodeBlock",
  components: {
    codemirror
  },
  props: {
    selectNum: String
  },
  watch: {
    selectNum: function(val) {
      if (this.selectNum == 1) {
        this.$store.commit(
          "setCode",
          dedent`
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
`
        );
        this.code = dedent`
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
`;
      } else if (this.selectNum == 2) {
        this.$store.commit(
          "setCode",
          dedent`
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
`
        );
        this.code = dedent`
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
`;
      } else if (this.selectNum == 3) {
        this.$store.commit(
          "setCode",
          dedent`
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
`
        );
        this.code = dedent`
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
`;
      } else if (this.selectNum == 4) {
        this.$store.commit(
          "setCode",
          dedent`
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
`
        );
        this.code = dedent`
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
`;
      } else if (this.selectNum == 5) {
        this.$store.commit(
          "setCode",
          dedent`
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
`
        );
        this.code = dedent`
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
`;
      } else if (this.selectNum == 6) {
        this.$store.commit(
          "setCode",
          dedent`
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
`
        );
        this.code = dedent`
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
`;
      } else if (this.selectNum == 7) {
        this.$store.commit(
          "setCode",
          dedent`
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
`
        );
        this.code = dedent`
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
`;
      } else if (this.selectNum == 8) {
        this.$store.commit(
          "setCode",
          dedent`
    int Factorial(int input)
    {
      if (input <= 0 || input > 10) {
        }
      if (input == 1)
        return 1;
      return Factorial(input - 1) * input;
    }
`
        );
        this.code = dedent`
    int Factorial(int input)
    {
      if (input <= 0 || input > 10) {
        }
      if (input == 1)
        return 1;
      return Factorial(input - 1) * input;
    }
`;
      }
    }
  },
  data() {
    return {
      code: this.$store.state.code,
      cmOptions: {
        tabSize: 4,
        mode: "text/x-c++src",
        theme: "mbo",
        lineNumbers: true,
        line: true
        // more CodeMirror options...
      }
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focused!", cm);
    },
    onCmCodeChange(newCode) {
      this.$store.commit("setCode", newCode);
    },
    uploadCode() {
      // const that = this;
      // let data = { code: that.code };
      // http.post("/writeFile", data).then(function(response) {
      //   console.log(response);
      // });
      console.log(this.selectNum);
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror;
    }
  },
  mounted() {
    console.log("the current CodeMirror instance object:", this.codemirror);
    // you can use this.codeSmirror to do something...
  }
};
</script>

<style>
.CodeMirror {
  border: 1px groove #eee;
  height: 100%;
}
</style>
