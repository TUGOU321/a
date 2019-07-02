<template>
  <div style="background-color:white;">
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >服务中心</p>
    </header>
    <div style="background-color:white;width:3.75rem;text-align:center;">
      <div style="height:1rem;display:flex;flex-wrap: nowrap;">
        <div
          style="color:#666666;line-height:0.6rem;border-right:0.001rem #f2f2f2 solid;height:1rem;width:1.875rem;"
        >
          <div style="color:orange;font-size:0.3rem;"><van-icon name="manager" /></div>
          <p>在线客服</p>
        </div>
        <div
          style="color:#666666;line-height:0.6rem;border-left:0.001rem #f2f2f2 solid;height:1rem;width:1.875rem;"
        >
          <div style="color:green;font-size:0.3rem;"><van-icon name="service" /></div>
          <p>在线客服</p>
        </div>
      </div>
    </div>
    <nav
      style="padding-left:0.2rem;height: 1rem;font-size: 0.175rem;line-height: 1rem;background-color: white;color: #666666;text-align: left;"
    >热门问题</nav>
    <ul>
        <li @click="goQA(i)"
          :key="i"
          v-for="(v,i) in qs"
          style="padding-left:0.2rem;border-top:0.01rem #f2f2f2 solid;height: 0.5rem;font-size: 0.12rem;line-height: 0.5rem;background-color: white;color: #666666;text-align: left;"
        >
          {{v}}
          <span
            style="font-weight:bold;padding-right:0.3rem;float:right;color:#666666;font-size:0.2rem;line-height:0.5rem;"
          
          ><van-icon name="arrow" /></span>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "serviceCenter",
  data() {
    return {
      qs: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "教我拍大片",
        "支付问题",
        "其他问题",
        "准时达问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责说明",
        "代金券呢说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ],
      pageInfo: null
    };
  },
  created() {
    this.getPageInfo();
  },
  methods: {
    goback() {
      this.$router.back();
    },
    goQA(i){
       this.$router.push({
         name:"serviceQA",
         query:{
           "id":i
         }
       })
    },
    getPageInfo() {
      const api = "https://elm.cangdu.org/v3/profile/explain";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        this.$store.commit("serviceCenterinfo", res.data);
      });
    }
  }
};
</script>
<style scoped>
</style>
