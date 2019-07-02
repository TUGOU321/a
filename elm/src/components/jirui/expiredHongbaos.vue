<template>
  <div style="backgroud-color:white;">
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
      >过期红包</p>
    </header>
    <span
      style="line-height:0.3rem;margin:0.02rem 0 0.02rem 0.1rem;font-size:0.03rem;float:left;padding:0.05rem 0 0.05rem 0.05rem;"
    >
      <span>有</span>
      <span style="color:red;">{{hongBaoCount}}</span>
      <span>个红包已到期</span>
    </span>
    <ul>
      <li style="height:0.6rem;backgoround-color:black;"></li>
    </ul>
    <ul>
      <li
        style="background-image: url('../../../static/img/bg.png');background-repeat: repeat ;position: relative;overflow:hidden;height:1rem;backgroud-color:white;margin:0.02rem 0 0.02rem 0;border:0.01rem solid #666666;"
        :key="i"
        v-for="(v,i) in hongBao"
      >
        <div style="float:left;color:#666666;font-size:0.5rem;">￥{{v.amount.toFixed(1)}}</div>
        <div
          style="backgroud-color:white;position: absolute;left:0.1rem;top:0.5rem;color:#666666;font-size:0.15rem;"
        >满20元可以使用</div>
        <h3
          style="backgroud-color:white;position: absolute;left:1.5rem;top:0.1rem;color:black;font-size:0.1rem;"
        >{{v.name}}</h3>
        <p
          style="position: absolute;left:1.5rem;top:0.3rem;color:black;font-size:0.1rem;"
        >{{v.end_date}}</p>
        <p
          style="backgroud-color:white;position: absolute;left:1.5rem;top:0.5rem;color:black;font-size:0.1rem;"
        >{{v.description_map.phone}}</p>
        <img style="position: absolute;right:0;top:-0.5rem;width:1.5rem;" src="../../../static/img/outofdate.png">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "expiredHongbaos",
  data() {
    return {
      hongBaoCount: "",
      hongBao: ""
    };
  },
  created() {
    this.getHongBao();
  },
  methods: {
      goback(){
          this.$router.back();
      },
    getHongBao() {
      const api =
        "https://elm.cangdu.org/promotion/v2/users/" +
        this.$store.state.userData.user_id +
        "/expired_hongbaos?limit=20&offset=0";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
          this.hongBaoCount = res.data.length;
          this.hongBao = res.data;
        }
      });
    }
  }
};
</script>
<style >
</style>