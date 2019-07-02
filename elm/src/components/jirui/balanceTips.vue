<template>
  <div style="height:100vh;background-color:white;">
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
      >余额问题</p>
    </header>
    <div style="background-color:white;width:3.55rem;margin:0.2rem 0.1rem 0 0.1rem;">
        <p style="line-height:0.3rem;font-size:0.2rem;">Q1: 使用余额的条件</p>
        <p style="line-height:0.3rem;color:#666666;font-size:0.15rem;">为了保护账户安全，使用余额前必须先绑定手机号。</p>
        <p style="line-height:0.3rem;font-size:0.2rem;">Q2: 余额可以怎么用？</p>
        <p style="line-height:0.3rem;color:#666666;font-size:0.15rem;">余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
        <p style="line-height:0.3rem;font-size:0.2rem;">Q3:我要如何提现？</p>
        <p style="line-height:0.3rem;color:#666666;font-size:0.15rem;">为了保护账户和资金安全，您在提现前需要输入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑定饿了么账号的手机号。每日只能提现1次，每次限额50元。若提现金额超过50元，点击【提现】时系统会提示您已超额，请您修改提现金额。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "balanceTips",
  data() {
    return {

    }
  },
  created() {},
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
</style>
