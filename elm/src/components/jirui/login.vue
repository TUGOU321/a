<template>
  <div>
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <van-icon
          @click="goback()"
          name="arrow-left"
          style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;"
          color="white"
        />
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >密码登陆</p>
    </header>
    <input style="margin-left:0.1rem;margin-top:0.1rem;width:3.65rem;height:0.5rem;"  type="text" placeholder="用户" v-model="username" />
    <div style="overflow:hidden;margin-left:0.1rem;position: relative;margin-top:0.1rem;width:3.65rem; background-color:white">
      <input style="width:3.75rem;height:0.5rem;" type="password" placeholder="密码" v-model="password" v-if="!bolvalue" />
      <input style="width:3.75rem;height:0.5rem;" type="text" placeholder="密码" v-model="password" v-else />
      <el-switch style="position: absolute;top:0.15rem;right:0.1rem;"
        class="switchbtn"
        v-model="bolvalue"
        active-color="#13ce66"
        inactive-color="#ff4949"
        @click="changetype()"
      >显示密码</el-switch>
    </div>
    <div style="overflow:hidden;margin-left:0.1rem;position: relative;margin-top:0.1rem;width:3.65rem;height:0.5rem;">
      <input style="width:3.75rem;height:0.5rem;" type="text" placeholder="验证码" v-model="codeNumber" />
      <div style="line-height:0.25rem;position: absolute;right:0;top:0;display:flex;width:1.2rem;">
    
        <img style="width:0.5rem;"  :src="code&&code" />
        <div  @click="getCode()"> <p>看不清?</p> <p>换一张</p></div>
      </div>
    </div>
    <br />
    <van-button  @click="login()" style="width:3.55rem;margin:0.1rem;" type="warning">登陆</van-button>
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

</style>

