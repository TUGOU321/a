<template>
  <div style="backgroud-color:white;">
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
         <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >兑换红包</p>
    </header>
    <div style="margin-top:0.1rem;height:0.8rem;text-align:center;">
      <input
        type="text"
        style="margin-top:0.1rem;height:0.5rem;width:3.65rem;"
        v-model="inputval"
        placeholder="请输入兑换码"
      >
      <div style="display:flex;justify-content: space-around;">
        <input
          type="text"
          style="margin-top:0.1rem;height:0.5rem;width:2.5rem;"
          v-model="inputval2"
          placeholder="验证码"
        >
        <div style="background-color:white;margin-top:0.1rem;height:0.5rem;width:1rem;">
          <div class="changecode">
            <img :src="code&&code">
            <div @click="getCode()">换一张</div>
          </div>
        </div>
      </div>
      <div style="margin-top:0.3rem;text-align:center;">
        <el-button style="width:3.55rem;margin:0 0.1rem;" type="info">兑换</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "exchangeHongbao",
  data() {
    return {
      inputval: "",
      inputval2: "",
      code: ""
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
    }
  }
};
</script>