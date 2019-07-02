<template>
  <div id="wrap">
    <div class="top">
      <span @click="back()">
        <img src="../../../../static/img/back.png" alt>
      </span>
      <span>{{msg.name}}</span>
    </div>
    <div class="mid-img">
      <img :src="'https://elm.cangdu.org/img/'+msg.image_path" alt>
    </div>
    <div class="botcon">
      <p>{{msg.description}}</p>
      <p>{{msg.name}}</p>
      <p class="score">
        <span>评分</span>
       <van-rate
  v-model="msg.rating" size="0.15rem"
  allow-half
  void-icon="star"
  void-color="#eee"
/>
      </p>
      <p class="monthp">
        <span>月售 {{msg.month_sales}}单</span>
        <span v-if="msg.specfoods[0]">售价 ￥{{msg.specfoods[0].price}} 起</span>
      </p>
      <p class="haop">
        <span>评论数 {{msg.rating_count}}</span>
        <span>好评率 {{msg.satisfy_rate}}%</span>
      </p>
    </div>
    
    <div class="boto">
      <p id="car"><img src="../../../../static/img/shopcar.png" alt=""></p>
      <span id="money1">￥</span>
      <span id="money2">配送费￥5</span>
      <span id="money3">还差￥起送</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "fooddet",
  data() {
    return {
      msg: {},
      seen: true
    };
  },
  created() {
    console.log(this.$route.query);
    this.msg = this.$route.query;
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 100vh;
}
.top {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(49, 143, 231);
  line-height: 0.5rem;
  font-size: 0.18rem;
  color: white;
  position: relative;
}
.top>span:nth-child(2){
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.top img {
  float: left;
  margin-top: 0.07rem;
  height: 0.36rem;
}
.mid-img {
  width: 100%;
}
.mid-img img {
  width: 100%;
  height: 3rem;
}
.botcon {
  margin-left: 2%;
  width: 98%;
  font-size: 0.18rem;
}
.botcon > p:nth-child(1) {
  margin-top: 0.1rem;
  color: gray;
  margin-bottom: 0.05rem;
}
.botcon > p:nth-child(2) {
  margin-top: 0.1rem;
  font-weight: bold;
  margin-bottom: 0.1rem;
}
.score {
  overflow: hidden;
  margin-bottom: 0.08rem;
}
.score span {
  float: left;
}
.rates {
  float: left;
}
.monthp {
  font-size: 0.16rem;
  width: 100%;
  margin-bottom: 0.08rem;
}
.monthp span:nth-child(2) {
  margin-left: 0.1rem;
  color: orangered;
}
.haop {
  font-size: 0.16rem;
}
.haop span:nth-child(1) {
  margin-right: 0.1rem;
}
.boto {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
#car{
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.7);
    border: 0.02rem solid gray;
    border-radius: 50%;
    padding: 0.05rem;
    margin-left: 0.1rem;
    margin-top: -0.1rem;
}
#car>img{
    width: 0.35rem;
}
#money1{
    position: absolute;
    left: 0.6rem;
    top: 0.02rem;
    color: white;
    font-size: 0.2rem;
}
#money2{
    position: absolute;
    top: 0.3rem;
    left: 0.6rem;
    color: white;
    font-size: 0.14rem;
}
#money3{
    display: inline-block;
    font-size: 0.2rem;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.15rem;
    background-color: rgb(177, 175, 175);
}
</style>
