<template>
  <div>
    <div id="title">
      <img src="../../../../static/img/back.png" @click="back()">
      <span>密码登陆</span>
    </div>
    <div id="center">
      <input v-model="username" placeholder="账号" type="text">
      <br>
      <input v-model="password" placeholder="密码" :type="type">
      <br>
      <input v-model="codeNumber" placeholder="验证码" type="text">
      <img :src="code">
      <p id="look">看不清</p>
      <p @click="getCode()" id="change">换一张</p>
      <p class="tips">温馨提示：未注册过的账号，登录时将自动注册</p>
      <p class="tips">注册过的用户可凭账号密码登录</p>
      <button @click="login()" id="login">登陆</button>
      <router-link to="/reset" id="reset">重置密码?</router-link>
      <div id="key">
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" @click="show()"></el-switch>
      </div>
      <div>
        <el-dialog width="3rem" id="tipD" :visible.sync="dialogVisible">
          <!-- <el-image style="width:1rem;margin-left: 0.7rem;" src="../../../../static/img/tips.png"></el-image> -->
          <p id="please" :v-model="tips">{{tips}}</p>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        tips:"",
      dialogVisible: false,
      value: false,
      type: "password",
      code: "", //存储验证码base64图片
      username: "",
      password: "",
      codeNumber: "" //存储验证码输入框的值
    };
  },
  watch: {
    value: function(val, old) {
      //val 改变之后的新值 old原来的值
      if (val == true) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    }
  },
  created() {
    //首先，获取验证码
    this.getCode();
  },
  methods: {
       back(){
          this.$router.back();
      },
    show() {
      this.value = !this.value;
    },
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        withCredentials: true
      }).then(res => {
        // console.log("验证码数据");
        // console.log(res);
        this.code = res.data.code;
      });
    },
    login() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        // console.log("login数据");
        // console.log(res);
        if (this.username=="") {
            this.dialogVisible=true;
            this.tips="请输入账号";
        } else if(this.password==""){
            this.dialogVisible=true;
            this.tips="请输入密码";
        }
        else if(this.codeNumber==""){
            this.dialogVisible=true;
            this.tips="请输入验证码";
        }else if(res.data.message){
            this.dialogVisible=true;
            this.tips=res.data.message;
        }
        else{
          this.$store.commit("getUsersData", res.data);
          this.$store.commit("boll", true);
          this.$store.commit("getUserName", res.data.username);
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "city",

            query: res.data
          });
        }
      });
    }
  }
};
</script>
<style scoped>
#title {
  background-color: #3190e8;
  padding: 0.1rem;
}
#title > img {
  width: 0.2rem;
}
#title > span {
  color: white;
  margin-left: 1.2rem;
}
#center {
  margin: 0.1rem 0;
  position: relative;
}
#center input {
  width: 3.55rem;
  padding: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border-bottom: 0.01rem solid gray;
  border-top: 0.01rem solid gray;
}
#center img {
  position: absolute;
  left: 2.3rem;
  top: 1.1rem;
}
#look {
  font-size: 0.15rem;
  position: absolute;
  right: 0.03rem;
  top: 1.1rem;
}
#change {
  font-size: 0.15rem;
  position: absolute;
  right: 0.03rem;
  top: 1.35rem;
}
.tips {
  font-size: 0.15rem;
  color: red;
  margin: 0.15rem;
}
#login {
  width: 3.45rem;
  background-color: lightgreen;
  padding: 0.1rem;
  border: none;
  outline: none;
  margin-left: 0.15rem;
  color: white;
  font-size: 0.2rem;
}
#reset {
  font-size: 0.18rem;
  position: absolute;
  right: 0.15rem;
  bottom: -0.3rem;
}
#key {
  position: absolute;
  right: 0rem;
  top: 0.67rem;
}
#please{
    font-size: 0.2rem;
}
</style>