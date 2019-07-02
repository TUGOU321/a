<template>
  <div style="position: relative;backgroud-color:white;">
    <nav
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: white;text-align: center;"
    >
      <span style="color:#3190e8; margin-left:0.75rem;float:left;font-size:0.15rem;">红包</span>
      <router-link to="cashCoupon">
        <span style="margin-right:0.75rem;float:right;font-size:0.15rem;">商家代金券</span>
      </router-link>
    </nav>
    <span
      style="line-height:0.3rem;margin:0.02rem 0 0.02rem 0.1rem;font-size:0.03rem;float:left;padding:0.05rem 0 0.05rem 0.05rem;"
    >
      <span>有</span>
      <span style="color:red;">{{hongBaoCount}}</span>
      <span>个红包即将到期</span>
    </span>
    <span style="padding:0.05rem 0.05rem 0.05rem 0;color:#3190e8;float:right;">
      <span style="font-size:0.15rem;"><van-icon name="question" /></span>
      <router-link to="rewardTips">
        <span style="line-height:0.3rem;font-size:0.03rem;margin:0.02rem 0.1rem 0  0;">红包说明</span>
      </router-link>
    </span>
    <ul>
      <li style="height:0.6rem;backgoround-color:black;"></li>
    </ul>

    <ul>
      <li
        style="background-image: url('../../../static/img/bg.png');background-repeat: repeat;position: relative;overflow:hidden;height:1rem;backgroud-color:white;margin:0.02rem 0 0.02rem 0;border:0.01rem solid red;"
        :key="i"
        v-for="(v,i) in hongBao"
      >
        <div style="float:left;color:red;font-size:0.5rem;">￥{{v.amount.toFixed(1)}}</div>
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
        <div
          style="backgroud-color:white;position: absolute;left:0.1rem;top:0.8rem;color:#666666;font-size:0.15rem;"
        >{{v.description_map.validity_delta}}</div>
      </li>
    </ul>
    <p
      style="margin-top:0.3rem;color:gray;font-size:0.03rem;text-align: center;"
    >限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
    <div style="text-align: center;color:gray;margin-top:0.5rem;">
      <router-link to="expiredHongbaos">
        <span>查看历史红包</span>
      </router-link>
      <span><van-icon name="arrow" /></span>
    </div>
    <div
      style="background-color:white;height:0.5rem;width:3.75rem;display:flex;position: fixed;bottom:0;"
    >
      
        <div
          style="text-align:center;line-height:0.5rem;color:#666666;font-size:0.2rem;width:50%;border-right:1px solid #f2f2f2;"
        ><router-link to="exchangeHongbao">兑换红包</router-link></div>
      
      <div
        style="text-align:center;line-height:0.5rem;color:#666666;font-size:0.2rem;width:50%;border-left:1px solid #f2f2f2;"
      ><router-link to="commend">推荐有奖</router-link></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "reward",
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
    getHongBao() {
      const api =
        "https://elm.cangdu.org/promotion/v2/users/" +
        this.$store.state.userData.user_id +
        "/hongbaos?limit=20&offset=0";
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