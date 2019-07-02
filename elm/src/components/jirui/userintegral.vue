<template>
  <div style="position: relative;">
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
      >我的积分</p>
    </header>
    <div style="background-color: #3190e8;width:3.75rem;height:2rem;padding-top:0.05rem;">
      <div
        style="position: relative;border-radius: 2%;background-color: white;height:1.8rem;width:3.65rem;margin:0.15rem 0.05rem 0.05rem 0.05rem;"
      >
        <div>
          <span style="float:left;padding:0.05rem 0 0.05rem 0.05rem;">当前余额</span>
          <router-link to="couponTips">
            <span style="padding:0.05rem 0.05rem 0.05rem 0;color:#3190e8;float:right;">
              <span class="el-icon-question"></span>积分说明
            </span>
          </router-link>
        </div>
        <div style="position: absolute;left:0.05rem;top:0.4rem;">
          <span style="font-size:0.5rem;">{{$store.state.userData.point}}</span>
          <span style="font-weight: bold;position:">分</span>
          <el-button @click="open"
            style="width:3.5rem;position: absolute;left:0.025rem;top:1rem;"
            type="danger"
          >积分兑换商品</el-button>
        </div>
      </div>
    </div>
    <p style="font-size:0.13rem;color:gray;margin:0.05rem 0 0 0.05rem;">最近30天积分记录</p>
  </div>
</template>
<script>
export default {
  name: "userintegral",
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.back();
    },
    open() {
      this.$message("请使用官方APP操作");
    }
  }
};
</script>
<style scoped>
</style>
