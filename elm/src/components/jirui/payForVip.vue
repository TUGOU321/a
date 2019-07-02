<template>
  <div style="background-color:white;">
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
      >选择支付方式</p>
    </header>
    <div style="height:1.5rem;background-color:white;">
      <div style="color;#666666;font-size:0.15rem;text-align:center;margin-top:0.5rem;">支付剩余时间</div>
      <div>
        <p style="margin-top:0.1rem;text-align:center;font-size:0.8rem;">0{{hour}}:{{minutes}}:{{seconds}}</p >
      </div>
    </div>
    <div style="background-color:#f1f1f1;line-height:0.5rem;height:0.5rem;font-size:0.15rem;">选择支付方式</div>
    <div>
      <div style="height:0.8rem;position: relative;">
        <span
          style="position: absolute;left:0.03rem;top:0;line-height:0.8rem;font-size:0.8rem;color:#3190e8;"
          class="el-icon-coin"
        ></span>
        <span
          style="position: absolute;left:0.83rem;top:0.35rem;font-size:0.2rem;color:#666666;"
        >支付宝</span>
        <el-radio style="position: absolute;left:3rem;top:0.4rem;" v-model="radio" label="1">选择</el-radio>
      </div>
      <div style="height:0.8rem;position: relative;">
        <span
          style="position: absolute;left:0.03rem;top:0;line-height:0.8rem;font-size:0.8rem;color:green;"
          class="el-icon-coin"
        ></span>
        <span
          style="position: absolute;left:0.83rem;top:0.35rem;height:0.5rem;;font-size:0.2rem;color:#666666;"
        >微信</span>
        <el-radio style="position: absolute;left:3rem;top:0.4rem;" v-model="radio" label="2">选择</el-radio>
      </div>
    </div>
    <div style="margin:0.5rem 0.1rem;background-color:F1F1F1;">
      <el-button @click="open()" style="width:3.55rem;" type="success">支付</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "payForVip",
  data() {
    return {
      radio: "1",
      count:"",
      hour:"",
      minutes:15,
      seconds:0
    };
  },
  created() {
    this.timer();
  },
  methods: {
    goback() {
      this.$router.back();
    },
    open() {
      this.$message("当前环境无法支付,请打开官方APP操作");
    },
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode")
        ])
      });
    },
    timer() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds == 0 && _this.minutes != 0) {
          _this.seconds = 59;
          _this.minutes--;
        } else if (_this.minutes == 0 && _this.seconds == 0) {
          _this.seconds = 0;
          window.clearInterval(time);
          _this.showtool = true;
          _this.count = "支付超时";
        } else {
          _this.seconds--;
        }
      }, 1000);
    }
  }
};
</script>
<style scoped>

</style>
