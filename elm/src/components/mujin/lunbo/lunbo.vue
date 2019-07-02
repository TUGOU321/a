<template>
  <div>
    <div id="title">
      <img @click="back()" src="../../../../static/img/back.png" alt>
      <p>{{this.datas.title}}</p>
    </div>
    <div id="listing">
      <div class="icon" @click="change()">
        <router-link :to="'/details?t='+title">
          <span v-if="show" class="span">{{this.datas.title}}</span>
          <span v-if="xian" :style="{'color':color}">分类</span>
          <img v-if="show" class="img1" src="../../../../static/img/up1.png" alt>
          <img
            v-if="xian"
            class="img2"
            :class="{ active:xian }"
            src="../../../../static/img/up2.png"
            alt
          >
        </router-link>
      </div>
      <div class="icon2" @click="change1()">
        <span :style="{'color':color1}" class="span">排序</span>
        <img v-if="show1" class="img1" src="../../../../static/img/up1.png" alt>
        <img
          v-if="xian1"
          class="img2"
          :class="{ active:xian1 }"
          src="../../../../static/img/up2.png"
          alt
        >
      </div>
      <div class="icon3" @click="change2()">
        <router-link to="/screen">
          <span :style="{'color':color2}" class="span">筛选</span>
          <img v-if="show2" class="img1" src="../../../../static/img/up1.png" alt>
          <img
            v-if="xian2"
            class="img2"
            :class="{ active:xian2 }"
            src="../../../../static/img/up2.png"
            alt
          >
        </router-link>
      </div>
    </div>
    <div id="chukou">
      <Details v-if="xian" @detail="detail"></Details>
      <Sort v-if="xian1" @incre="sort"></Sort>
      <Screen v-if="xian2" @define="define"></Screen>
    </div>
    <div id="shop">
      <ul>
        <li v-for="(item, index) in allShop" :key="index">
          <router-link :to="'/shopdetail?shopId='+item.id" id="shop">
            <img :src="'https://elm.cangdu.org/img/'+item.image_path" id="shopImg">
            <p id="shopname">
              <span>品牌</span>
              <span>{{item.name}}</span>
              <span>
                <span v-for="(item, index) in item.supports" :key="index">{{item.icon_name}}</span>
              </span>
            </p>
            <p id="shopscore">
              <van-rate
  v-model="item.rating"
  allow-half
  void-icon="star"
  void-color="#eee"
/>
              <span>月售{{item.recent_order_num}}单</span>
              <span>{{item.supports[1].name}}</span>
              <span>{{item.delivery_mode.text}}</span>
            </p>
            <p id="shopmoney">
              <span>￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}</span>
              <span>{{item.order_lead_time}}</span>
              <span>{{item.distance}}/</span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Details from "@/components/mujin/lunbo/details";
import Sort from "@/components/mujin/lunbo/sort";
import Screen from "@/components/mujin/lunbo/screen";

export default {
  name: "lunbo",
  data() {
    return {
      datas: {},
      show: true,
      show1: true,
      show2: true,
      xian: false,
      xian1: false,
      xian2: false,
      color: "blue",
      color1: "",
      color2: "",
      title: "",
      allShop: []
    };
  },
  created() {
    // console.log(this.$route.query);
    this.datas = this.$route.query;
    this.title = this.$route.query.title;
    this.getShop();
    // console.log(this.$route.params);
  },
  components: {
    Details,
    Sort,
    Screen
  },
  methods: {
    detail: function() {
      // this.getShop();
      this.xian = false;
      this.show = !this.show;
      if (this.color == "blue") {
        this.color = "";
      } else {
        this.color = "blue";
      }
    },
    sort: function() {
      this.getShop();
      this.xian1 = false;
      this.show1 = !this.show1;
      if (this.color1 == "blue") {
        this.color1 = "";
      } else {
        this.color1 = "blue";
      }
    },
    define: function() {
      // this.getShop();
      this.xian2 = false;
      this.show2 = !this.show2;
      if (this.color2 == "blue") {
        this.color2 = "";
      } else {
        this.color2 = "blue";
      }
    },
    getShop() {
      // console.log("id是:",this.$store.state.id);
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.datas.latitude +
          "&longitude=" +
          this.datas.longitude +
          "&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=" +
          this.$store.state.id +
          "&delivery_mode[]=null",
        method: "get"
      }).then(res => {
        console.log(res.data);
        this.allShop = res.data;
        //  console.log(this.$store.state.id);
      });
    },
    back() {
      this.$router.push({
        name:"outfood"
      });
    },
    change() {
      this.show = !this.show;
      this.xian = !this.xian;
      if (this.xian1 == true) {
        this.xian1 = !this.xian1;
        this.show1 = !this.show1;
        this.color1 = "";
      } else if (this.xian2 == true) {
        this.xian2 = !this.xian2;
        this.show2 = !this.show2;
        this.color2 = "";
      }
    },
    change1() {
      this.show1 = !this.show1;
      this.xian1 = !this.xian1;

      if (this.color1 == "blue") {
        this.color1 = "";
      } else {
        this.color1 = "blue";
      }
      if (this.xian == true) {
        this.xian = !this.xian;
        this.show = !this.show;
        this.color = "";
      } else if (this.xian2 == true) {
        this.xian2 = !this.xian2;
        this.show2 = !this.show2;
        this.color2 = "";
      }
    },
    change2() {
      this.show2 = !this.show2;
      this.xian2 = !this.xian2;

      if (this.color2 == "blue") {
        this.color2 = "";
      } else {
        this.color2 = "blue";
      }

      if (this.xian == true) {
        this.xian = !this.xian;
        this.show = !this.show;
        this.color = "";
      } else if (this.xian1 == true) {
        this.xian1 = !this.xian1;
        this.show1 = !this.show1;
        this.color1 = "";
      }
    }
  }
};
</script>
<style scoped>
#chukou {
  position: fixed;
  top: -0.09rem;
  left: 0;
  z-index: 1;
}
#shop {
  margin-top: 0.8rem;
}
#title {
  background-color: #3190e8;
  padding: 0.1rem 0.08rem;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 3.75rem;
  z-index: 2;
}
#title > img {
  width: 0.25rem;
  float: left;
}
#title > p {
  font-size: 0.2rem;
  color: white;
  float: left;
  margin-left: 1.2rem;
}
#listing {
  width: 3.75rem;
  border-bottom: 0.01rem solid gray;
  position: fixed;
  top: 0.4rem;
  overflow: hidden;
  padding: 0.08rem;
  background-color: #fff;
  /* padding-top: 0.08rem; */
  z-index: 2;
}
.icon,
.icon2,
.icon3 {
  width: 1.23rem;
  border-right: 0.01rem solid rgb(148, 145, 145);
  float: left;
  text-align: center;
}
.span {
  color: black;
}
.img1,
.img2 {
  width: 0.3rem;
  position: absolute;
  top: -0.03rem;
}
.active {
  animation: move 0.2s;
}
@keyframes move {
  /*声明动画*/
  0% {
    transform: rotateZ(-180deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
#allShop {
  margin-top: 0.5rem;
  border-top: 0.01rem solid gray;
}
#shop {
  color: black;
}
#shopImg {
  width: 0.8rem;
}
#allShop > img {
  margin-top: 0.05rem;
  width: 0.17rem;
}
#allShop > span {
  color: gray;
  font-size: 0.16rem;
  margin-bottom: 0.1rem;
}
ul li {
  border-bottom: 0.01rem solid gray;
  padding: 0.12rem;
  position: relative;
  background-color: white;
}
#shopname {
  width: 2.7rem;
  position: absolute;
  top: 0.12rem;
  left: 0.98rem;
}
#shopname > span:nth-child(1) {
  display: inline-block;
  background-color: gold;
  font-weight: bold;
  font-size: 0.14rem;
  width: 0.3rem;
  text-align: center;
}
#shopname > span:nth-child(2) {
  display: inline-block;
  font-weight: bold;
  font-size: 0.16rem;
}
#shopname > span:nth-child(3) {
  float: right;
}
#shopname > span:nth-child(3) > span {
  font-size: 0.14rem;
  color: gray;
  border: 0.01rem solid gray;
  margin-left: 0.02rem;
  border-radius: 0.03rem;
}
#shopscore {
  width: 2.7rem;
  position: absolute;
  top: 0.35rem;
  left: 0.98rem;
  overflow: hidden;
}
#shopscore > span {
  font-size: 0.14rem;
}
#shopscore > span:nth-child(2) {
  float: left;
}
#shopscore > span:nth-child(3) {
  float: right;
  color: #3190e8;
  display: inline-block;
  width: 0.5rem;
  text-align: center;
  border: 0.01rem solid #3190e8;
  border-radius: 0.03rem;
}
#shopscore > span:nth-child(4) {
  float: right;
  background-color: #3190e8;
  color: white;
  display: inline-block;
  width: 0.65rem;
  text-align: center;
  margin-right: 0.05rem;
  border-radius: 0.03rem;
}
#shopmoney {
  width: 2.7rem;
  position: absolute;
  top: 0.8rem;
  left: 0.98rem;
  font-size: 0.14rem;
}

#shopmoney > span:nth-last-child(2),
#shopmoney > span:last-child {
  float: right;
}
#shopmoney > span:nth-last-child(2) {
  color: #3190e8;
}
</style>