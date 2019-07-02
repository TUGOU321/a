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
      >我的优惠</p>
    </header>
    <div style="text-align:center">
        <p style="line-height:0.2rem;margin:0 auto;text-align:left;width:2.5rem;color:#666666;font-size:0.15rem;">尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "vipTips",
  data() {
    return {
       
    };
  },
  created() {
      
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
}
</script>
<style scoped>

</style>
