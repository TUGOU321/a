<template>
  <div>
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <span class="leftspan">
          <router-link to="">
            <i @click="back()"
              class="el-icon-arrow-left"
              style="color:white;font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;"
            ></i>
          </router-link>
        </span>
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >我的</p>
    </header>
    <router-link to="/login1" v-show="!boll">
      <div
        class="profile"
        style=" height: 1rem;background-color: #3190e8;position: relative;color: white;"
      >
        <div
          class="headpic"
          style="width: 0.7rem;height: 0.7rem;background-color: black;position: absolute;top: 0.15rem;left: 0.15rem;"
        ></div>
        <p
          style="position: absolute;top: 0.15rem;left: 1rem;font-size:0.2rem;font-weight: bold"
        >登录/注册</p>
        <span style="position: absolute;top: 0.45rem;left: 1rem;font-size:0.15rem;">
          <span class="el-icon-mobile"></span>
          <span style="font-size:0.15rem;">暂未绑定手机号</span>
        </span>
        <nav
          class="el-icon-arrow-right"
          style="line-height:0.8rem;float:right;font-size:0.2rem;font-weight: bold;"
        ></nav>
      </div>
    </router-link>
    <router-link to="userinfo" v-show="boll">
      <div
        class="profile"
        style=" height: 1rem;background-color: #3190e8;position: relative;color: white;"
      >
        <div
          class="headpic"
          style="width: 0.7rem;height: 0.7rem;background-color: black;position: absolute;top: 0.15rem;left: 0.15rem;"
        ></div>
        <p
          style="position: absolute;top: 0.15rem;left: 1rem;font-size:0.2rem;font-weight: bold"
          v-text="$store.state.userName"
        >username</p>
        <span
          v-show="bol"
          style="position: absolute;top: 0.45rem;left: 1rem;font-size:0.15rem;"
        >{{$store.state.userData.user_id}}</span>
        <span v-show="bol2" style="position: absolute;top: 0.45rem;left: 1rem;font-size:0.15rem;">
          <span class="el-icon-mobile"></span>
          <span style="font-size:0.15rem;">暂未绑定手机号</span>
        </span>
        <nav
          class="el-icon-arrow-right"
          style="line-height:0.8rem;float:right;font-size:0.2rem;font-weight: bold;"
        ></nav>
      </div>
    </router-link>
    <div
      class="userfile"
      style="height: 1rem;display: flex;justify-content: space-between;margin-bottom: 0.15rem;"
    >
      <div class="balance" style="background-color: white;width: 33%;height: 1rem;">
        <router-link to="userBalance">
          <div
            style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin:0.2rem auto;text-align: center;"
          >
            <span
              style="color:#FF9900;font-size:0.3rem;font-weight: bold;"
              v-text="this.$store.state.userData.balance"
            >0.00</span>
            <span style="color:#666666;font-size:0.15rem">元</span>
          </div>
          <p style="color:#666666;font-size:0.15rem;text-align: center;">我的余额</p>
        </router-link>
      </div>
      <div class="coupon" style="background-color: white;width: 33%;height: 1rem;">
        <router-link to="usercoupon">
          <div style="margin:0.2rem auto;text-align: center;">
            <span style="color:#FF5F3E;font-size:0.3rem;font-weight: bold">{{couponn}}</span>
            <span style="color:#666666;font-size:0.15rem">个</span>
          </div>
          <p style="color:#666666;font-size:0.15rem;text-align: center;">我的优惠</p>
        </router-link>
      </div>
      <div class="integral" style="background-color: white;width: 33%;height: 1rem;">
        <router-link to="userintegral">
          <div
            style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin:0.2rem auto;text-align: center;"
          >
            <span
              style="color:#6AC20B;font-size:0.3rem;font-weight: bold;"
            >{{$store.state.userData.point}}</span>
            <span style="color:#666666;font-size:0.15rem">分</span>
          </div>
          <p style="color:#666666;font-size:0.15rem;text-align: center;">我的积分</p>
        </router-link>
      </div>
    </div>
    <nav style="background-color:white;margin-bottom:0.01rem;">
      <i
        style="padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;color:#666666;font-size:0.18rem;"
        class="el-icon-tickets"
      ></i>
      <span @click="order()" style="font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.16rem;">我的订单</span>
      <span
        style="color:#B0C4DE;float:right;line-height: 0.35rem;font-size:0.2rem;"
        class="el-icon-arrow-right"
      ></span>
    </nav>
    <nav @click="open" style="background-color:white;margin-bottom:0.01rem;">
      <i
        style="padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;color:#ff5f3E;font-size:0.18rem;"
        class="el-icon-s-shop"
      ></i>
      <span style="font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.16rem;">积分商店</span>
      <span
        style="color:#B0C4DE;float:right;line-height: 0.35rem;font-size:0.2rem;"
        class="el-icon-arrow-right"
      ></span>
    </nav>
    <router-link to="vipCenter">
      <nav style="background-color:white;margin-bottom:0.15rem;">
        <i
          style="padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;color:#FF9900;font-size:0.18rem;"
          class="el-icon-platform-eleme"
        ></i>
        <span
          style="font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.16rem;"
        >饿了么会员卡</span>
        <span
          style="color:#B0C4DE;float:right;line-height: 0.35rem;font-size:0.2rem;"
          class="el-icon-arrow-right"
        ></span>
      </nav>
    </router-link>
    <router-link to="serviceCenter">
      <nav style="background-color:white;margin-bottom:0.01rem;">
        <i
          style="padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;color:#3190e8;font-size:0.16rem;"
          class="el-icon-s-claim"
        ></i>
        <span
          style="font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.16rem;"
        >服务中心</span>
        <span
          style="color:#B0C4DE;float:right;line-height: 0.35rem;font-size:0.2rem;"
          class="el-icon-arrow-right"
        ></span>
      </nav>
    </router-link>
    <router-link to="downloadApp">
      <nav style="background-color:white;margin-bottom:0.01rem;">
        <i
          style="padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;color:#3190e8;font-size:0.16rem;"
          class="el-icon-platform-eleme"
        ></i>
        <span
          style="font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.16rem;"
        >下载饿了么app</span>
        <span
          style="color:gray;float:right;line-height: 0.35rem;font-size:0.2rem;"
          class="el-icon-arrow-right"
        ></span>
      </nav>
    </router-link>
    <div>{{test}}</div>
    <div id="form"> 
      <router-link to="/outFood">
          <img  src="../../../static/img/homeF.png">
      </router-link>
      <router-link :to="'/search?show='+true">
          <img  src="../../../static/img/searchF.png">
      </router-link>
      <router-link to="/order">
          <img  src="../../../static/img/orderF.png">
      </router-link>
      <router-link to="/mine">
        <img  src="../../../static/img/meT.png">
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "mine",
  data() {
    return {
      test: "",
      username: "",
      userphone: "",
      amount: "",
      a: "",
      bol: false,
      bol2: true,
      boll: "",
      couponn: "",
      keepAlive: "mine",
      transitionName: "slide-right"
    };
  },
  created() {
    this.boll = this.$store.state.boll;
    this.boll2 = this.$store.state.boll2;
    this.couponn = this.$store.state.userData.gift_amount;
    this.getData();
  },
  watch: {

    $route(to, from) {
      let isBack = this.$router.isBack;
      if (isBack) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      this.$router.isBack = false;
    }
  },
  methods: {
    back(){
      this.$router.back();
    },
    order(){
      this.$router.push({
        name:"order"
      })
    },
    getData() {},
    open() {
      this.$message("积分商城进不去啦!请使用官方APP再试");
    },
    goback() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#form{
  border-top: 0.01rem solid gray;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 3.75rem;
  z-index: 100;
}
/* div{
  display: inline-block;
} */
#form img{
  width: 0.4rem;
  margin: 0.1rem 0.248rem;
}
</style>
