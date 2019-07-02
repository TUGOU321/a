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
      >购买记录</p>
    </header>
    <div style="margin-top:1rem;">
        <p style="color:#aaaaaa;font-size:0.12rem;text-align:center;">没有购买记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "payHistory",
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
