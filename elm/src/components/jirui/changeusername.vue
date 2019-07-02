<template>
  <div style="position: relative;">
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
          <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >修改用户名</p>
    </header>
    <el-input
      style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
      v-model="inputval"
      placeholder="请输入用户名"
    ></el-input>
    <p
      style="font-size:0.1rem;margin:0.1rem auto auto 0.05rem;color:#666666;height:0.3rem;"
    >用户名只能修改一次（5-24字符之间）</p>
    <el-button @click="changeUserName(),open()" :plain="true"
      style="color:wheat;font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
      type="primary"
    >确认修改</el-button>
  </div>
</template>
<script>
export default {
  name: "changeusername",
  data() {
    return {
      inputval: ""
    };
  },
  methods: {
      goback(){
        this.$router.back();
      },
      changeUserName(){
        this.$store.commit("getUserName",this.inputval);

      },
      open() {
      this.$message("更改完成");
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
