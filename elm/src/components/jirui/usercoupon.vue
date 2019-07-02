<template>
  <div style="position: relative;">
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <router-link to="mine">
         <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
        </router-link>
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >我的优惠</p>
      
    </header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "usercoupon",
  data() {
    return {
      
    };
  },
  created() {

    },
  methods: {
    goback(){
      this.$router.back();
    }
  }
}
</script>
<style scoped>

</style>
