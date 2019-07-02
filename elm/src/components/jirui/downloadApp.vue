<template>
  <div>
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >下载</p>
    </header>
    <div style="width:3.75rem;text-align:center;font-size:2rem;color:#3190e8;" class="el-icon-platform-eleme"></div>
    <div style="width:3.75rem;text-align:center;font-size:0.2rem;">下载饿了么app</div>
    <div style="margin-top:0.2rem;width:3.75rem;text-align:center;"><el-button @click="open()" style="width:3rem;" type="success">下载</el-button></div>
  </div>
</template>
<script>
export default {
  name: "downloadApp",
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.back();
    },
    open() {
      this.$message("请在AppStore中下载");
    },
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    }
  }
};
</script>
<style scoped>

</style>
