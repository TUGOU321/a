<template>
  <div>
    <div id="top">
          <div id="title" >
        <img src="../../../../static/img/back.png" alt @click="back()">
        <img :src="'https://elm.cangdu.org/img/'+shopdet.image_path" alt>
        <div>
          <p>{{shopdet.name}}</p>
          <p>商家配送/分钟送达/{{shopdet.piecewise_agent_fee.tips}}</p>
          <p>公告：{{shopdet.promotion_info}}</p>
        </div>
        <img id="next" src="../../../../static/img/right.png" alt @click="act()">
        <p
          :v-if="shopdet.activities.length>0"
          v-for="(item, index) in shopdet.activities"
          :key="index"
          id="act"
        >
          <span>{{item.icon_name}}</span>
          <span>{{item.description}}</span>
          <span>(APP专享)</span>
          <span id="actR">
            <span>{{shopdet.activities.length}}个活动</span>
            <img src="../../../../static/img/right.png" alt>
          </span>
        </p>
      </div>
      
      <div id="center">
        <span @click="left()" :style="[{'border-bottom':border1 },{'color': color1}]">商品</span>
        <span @click="right()" :style="[{'border-bottom': border2},{'color': color2}]">评价</span>
      </div>
    </div>
    <!-- 缓存路由切换 -->
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "shopdetail",
  data() {
    return {
      shopId: "",
      shopdet: {},
      border1: "0.02rem solid blue",
      border2: "none",
      color1: "blue",
      color2: "",
      h: "",
      divH: ""
    };
  },
  created() {
    console.log(this.$route.query.shopId);
    this.shopId = this.$route.query.shopId;
    this.getDet();
    this.getAllF();
    // this.left();
  },
  beforeMount() {},
  methods: {
    back() {
      this.$router.push({
        name: "outfood",
        
      });
    },
    act(){
      this.$router.push({
        name:"activity",
        query:this.shopdet
      })
    },
    getDet() {
      this.$http({
        url: "https://elm.cangdu.org/shopping/restaurant/" + this.shopId,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(res.data);
        this.shopdet = res.data;
        this.$nextTick(function() {
          //挂在前监测手机屏幕高度
          this.h =
            document.documentElement.clientHeight || document.body.clientHeight;
        //   console.log(this.h);
          var top1 = document.getElementById("title");
          var top2=document.getElementById("center");
          var hei1 = top1.offsetHeight;
          var hei2=top2.offsetHeight;
          this.divH = this.h - hei1-hei2;
          this.left();
        });
       
      });
    },
    left() {
      this.border1 = "0.02rem solid blue";
      this.border2 = "none";
      this.color1 = "blue";
      this.color2 = "";
      this.$router.push({
        name: "allFood",
        query:{
            shopId: this.shopId,
            divH:this.divH
        }
      });
    },
    right() {
      this.border2 = "0.02rem solid blue";
      this.border1 = "none";
      this.color2 = "blue";
      this.color1 = "";
      this.$router.push({
        name: "evaluate",
        query: this.shopId
      });
    },
    getAllF() {}
  }
};
</script>
<style scoped>
#title {
  background-color: gray;
  padding: 0.1rem 0.08rem;
  overflow: hidden;
  width: 3.59rem;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 13vh;
  /* border: 1px solid black; */
}
#title > img:nth-child(1) {
  width: 0.25rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
}
#title > img:nth-child(2) {
  width: 0.8rem;
  float: left;
}
#title div {
  float: left;
  margin-left: 0.1rem;
}
div p:nth-child(1) {
  font-weight: bold;
  font-size: 0.2rem;
  margin-top: 0.05rem;
}
div p:nth-child(2) {
  font-size: 0.14rem;
  margin-top: 0.15rem;
}
div p:nth-child(3) {
  font-size: 0.14rem;
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.15rem;
}

#next {
  float: right;
  width: 0.3rem;
  margin-top: 0.3rem;
}
#act {
  float: left;
  width: 3.5rem;
}
#act > span:nth-child(1) {
  background-color: red;
  border-radius: 0.03rem;
}
#act > span:nth-child(2) {
  margin-left: 0.05rem;
}
#act > span:nth-child(3) {
  margin-left: 0.05rem;
}
#actR {
  float: right;
}
#actR > img:nth-child(2) {
  width: 0.15rem;
}
#center {
  background-color: white;
  width: 3.75rem;
  color: black;
  position: fixed;
  left: 0;
  top: 16vh;
  height:6vh;
  line-height: 0.4rem;
  font-size: 0.19rem;
  font-weight: bold;
  border-bottom: 0.01rem solid gray;
  z-index: 10;
}
#center > span:nth-child(1) {
  margin-left: 1rem;
}
#center > span:nth-child(2) {
  margin-left: 0.9rem;
}
</style>