<template>
  <div>
    <div class="flexhere">
      <nav>
        <span class="leftspan">
          <i
            @click="goback()"
            class="el-icon-arrow-left"
            style="color:white;font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;"
          ></i>
        </span>
        <span class="changeCity">密码登陆</span>
      </nav>
    </div>
    <input class="input" type="text" placeholder="用户" v-model="username">
    <br>
    <div style="width:3.75rem; background-color:white">
      <input
        id="psw"
        class="input"
        type="password"
        placeholder="密码"
        v-model="password"
        v-if="!bolvalue"
      >
      <input id="psw" class="input" type="text" placeholder="密码" v-model="password" v-else>
      <el-switch
        class="switchbtn"
        v-model="bolvalue"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @click="changetype()"
      >显示密码</el-switch>
    </div>
    <br>
    <div class="code">
      <input type="text" placeholder="验证码" v-model="codeNumber">
      <div class="changecode">
        <img :src="code&&code">
        <div @click="getCode()">换一张</div>
      </div>
    </div>
    <br>
    <div :class="'loginbtn'" @click="login()">登陆</div>
    <div style="height:0.5rem;">
      <router-link to="resetpassword">
        <div style="padding-right:0.2rem;float:right;color:blue;font-size:0.1rem;">重置密码</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      codeNumber: "", //存储验证码输入框的值;
      code: "", //存储base64位图片,
      bolvalue: false,
      test: null
    };
  },
  created() {
    //首先获取验证码;
    this.getCode();
    this.changetype();
  },
  methods: {
    changetype() {
      if (this.bolvalue == false) {
        this.inputType = "password";
      } else if (this.bolvalue == true) {
        this.inputType = "text";
      }
    },
    goback() {
      this.$router.back();
    },
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies--不使用缓存数据;
        withCredentials: true
      }).then(res => {
        // console.log(res);
        this.code = res.data.code;
      });
    },
    login() {
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        methods: {
          goback() {
            this.$router.back();
          }
        },
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        },
        withCredentials: true
      }).then(res => {
        // console.log("登陆数据");
        // console.log(res);
        this.test = res;
        if (res.data.message) {
          alert(res.data.message);
        } else {
          //登录成功!
          this.$store.commit("getUsersData", res.data);
          this.$store.commit("boll", true);
          this.$store.commit("getUserName", res.data.username);
          this.$router.push({
            name: "mine",
            query: { res: res }
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.flexhere {
  width: 100%;
}
nav {
  margin-bottom: 0.3rem;
  width: 87%;
  padding-right: 13%;
  height: 0.5rem;
  font-size: 0.175rem;
  line-height: 0.5rem;
  background-color: #3190e8;
  color: #ffffff;
  text-align: center;
}
nav img {
  width: 13%;
  line-height: 0.5rem;
  float: left;
}
.input {
  width: 90%;
  margin: 0.01rem 5%;
  height: 0.4rem;
  border-radius: 2%;
  border-radius: 2%;
}
.loginbtn {
  width: 90%;
  margin: 0.5rem auto;
  height: 0.3rem;
  background-color: yellowgreen;
  text-align: center;
  line-height: 0.3rem;
  line-height: 0.3rem;
  color: white;
  border-radius: 2%;
}
.code {
  width: 90%;
  margin: 0.01rem 5%;
  height: 0.4rem;
  border-radius: 2%;
  border-radius: 2%;
}
.code input {
  height: 0.4rem;
  width: 80%;
}
.changecode {
  width: 20%;
  height: 0.4rem;
  float: right;
  background-color: white;
}
.changecode img {
  width: 100%;
}
#psw {
  width: 70%;
  float: left;
}
.switchbtn {
  width: 10%;
  margin-top: 0.1rem;
  margin-right: 10%;
  float: left;
}
</style>

