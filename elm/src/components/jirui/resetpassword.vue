<template>
  <div>
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <i
          @click="goback()"
          class="el-icon-arrow-left"
          style="color:white;font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;"
        ></i>
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >重置密码</p>
    </header>
    <div style="margin-top:0.1rem;width:3.75rem;background-color:white;">
      <el-input
        v-model="username"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="账号"
      ></el-input>
      <el-input
        v-model="oldpassWord"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="旧密码"
      ></el-input>
      <el-input
        v-model="newpassWord"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="请输入新密码"
      ></el-input>
      <el-input
        v-model="confirmpassword"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="请确认密码"
      ></el-input>
      <div style="width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;">
      <el-input
        v-model="captcha_code"
        style="float:left;font-size:0.15rem;width:1.35rem;margin:0.1rem 1.35rem 0.05rem 0.05rem;"
        placeholder="验证码"
      ></el-input>
      <div style="width:0.5rem;float:right;margin-right:0.3rem;">
      <img :src="code&&code">
        <div @click="getCode()">换一张</div>
        </div>
        </div>
      <el-button @click="resetpassword()"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0.05rem 0.05rem;"
        type="success"
      >修改密码</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "resetpassword",
  data() {
    return {
      username: "",
      oldpassWord: "",
      newpassWord: "",
      confirmpassword: "",
      captcha_code: "",
      code:""
    };
  },
  created() {
    this.getCode();
  },
  methods: {
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
    resetpassword() {
      const api = "https://elm.cangdu.org/v2/changepassword";
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
          oldpassWord: this.oldpassWord,
          newpassword: this.newpassWord,
          confirmpassword:this.confirmpassword,
          captcha_code:this.captcha_code
        },
        withCredentials: true
      }).then(res => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
          alert(res.data.success);
        }
      });
    }
  }
};
</script>
