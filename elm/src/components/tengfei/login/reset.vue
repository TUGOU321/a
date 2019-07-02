<template>
  <div>
    <div id="title">
      <img src="../../../../static/img/back.png" alt @click="back()">
      <span>密码重置</span>
    </div>
    <div id="center">
      <input v-model="username" placeholder="账号" type="text">
      <br>
      <input v-model="oldpass" placeholder="旧密码" :type="password">
      <input v-model="password" placeholder="新密码" :type="password">
      <input v-model="conpass" placeholder="确认密码" :type="password">
      <br>
      <input v-model="codeNumber" placeholder="验证码" type="text">
      <img :src="code">
      <p id="look">看不清</p>
      <p @click="getCode()" id="change">换一张</p>
      <button @click="reset()" id="login">确认修改</button>
    </div>
    <div>
      <el-dialog width="3rem" id="tipD" :visible.sync="dialogVisible">
        <p id="please" :v-model="tips">{{tips}}</p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "reset",
  data() {
    return {
      tips: "",
      dialogVisible: false,
      code: "", //存储验证码base64图片
      username: "",
      oldpass: "",
      password: "",
      conpass: "",
      codeNumber: "" //存储验证码输入框的值
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
  },
  methods: {
    back() {
      this.$router.back();
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
    reset() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          oldpassWord: this.oldpass,
          newpassword: this.password,
          confirmpassword: this.conpass,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        // console.log("login数据");
        // console.log(res);
        if (res.data.message) {
          this.dialogVisible = true;
          this.tips = res.data.message;
        } else {
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "login",
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
  background-color: blue;
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
  top: 2.2rem;
}
#look {
  font-size: 0.15rem;
  position: absolute;
  right: 0.03rem;
  top: 2.2rem;
}
#change {
  font-size: 0.15rem;
  position: absolute;
  right: 0.03rem;
  top: 2.4rem;
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
  margin-top: 0.1rem;
  color: white;
  font-size: 0.2rem;
}
</style>