<template>
  <div style="background-color:#f1f1f1;">
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
      >兑换会员</p>
    </header>
    <div
      style="text-align:left;width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #f2f2f2;color: #666666;text-align: center;"
    >
      <span style="margin-left:0.15rem;float:left;">成功兑换后将关联到当前帐号:</span>
      <span style="margin-left:0.05rem;float:left;color:black;">{{$store.state.userName}}</span>
    </div>
    <div>
      <el-input placeholder="请输入卡号" v-model="acc" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="psw" clearable></el-input>
    </div>
    <div style="margin-top:0.3rem;">
      <el-button @click="open" style="width:3.55rem;margin: 0 0.1rem 0 0.1rem;" type="success">兑换</el-button>
    </div>
    <div style="font-size:0.12rem;color:#AAAAAA;margin-top:0.3rem;">
      <p style="text-align:center;">——温馨提示——</p>
      <p
        style="line-height:0.2rem;padding-left:0.5rem;margin-top:0.3rem;text-align:left;"
      >新兑换的会员服务，权益以「会员说明」为准。</p>
      <p style="line-height:0.2rem;padding-left:0.5rem;text-align:left;">月卡：30次减免配送费。</p>
      <p style="line-height:0.2rem;padding-left:0.5rem;text-align:left;">季卡：90次减免配送费。</p>
      <p style="line-height:0.2rem;padding-left:0.5rem;text-align:left;">年卡：360次减免配送费。</p>
      <p
        style="line-height:0.2rem;padding-left:0.5rem;text-align:left;"
      >＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "useCart",
  data() {
    return {
      acc: "",
      psw: ""
    };
  },
  created() {},
  methods: {
    goback() {
      this.$router.back();
    },
    open() {
      this.$message("请输入正确卡密");
    }
  }
};
</script>
<style scoped>
</style>
