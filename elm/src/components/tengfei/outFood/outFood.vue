<template>
  <div>
    
    <div id="allShop">
      <img src="../../../../static/img/Group-.png" alt>
      <span>附近商家</span>
      <ul>
        <li v-for="(item, index) in allShop" :key="index">
          <router-link :to="'/shopdetail?shopId='+item.id" id="shop">
            <img :src="'https://elm.cangdu.org/img/'+item.image_path" id="shopImg">
          <p id="shopname">
            <span>品牌</span>
            <span>{{item.name}}</span>
            <span>
              <span v-for="(item, index) in item.supports" :key="index"  >{{item.icon_name}}</span>
            </span>
          </p>
          <p id="shopscore">
            <van-rate size="0.15rem" v-model="item.rating" allow-half void-icon="star" void-color="#eee"/>
            <span>{{item.rating}}</span>
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
import { Loading } from 'element-ui';
let loadingInstance;
export default {
  name: "outfood",
  data() {
    return {
      datas: {},
      allShop: {},
      detailAdd: {},
      num1:10,
      num2:0
    };
  },
  created() {
    console.log(this.datas);
    this.getshop();
    this.getDetail();
    loadingInstance = Loading.service({
            fullscreen:true,
            background:"rgba(255, 255, 255, 0.5)",
            text:"加载中...",
            spinner:"el-icon-loading"
        }); 
  },
  //挂在完成后触发 调用滚动方法
  mounted() {
    //可以在这里面直接进行滚动条的获取
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    jiazai() {
      this.num2 += 1;
      this.num1 += 10;
      this.getshop();
    },
    handleScroll() {
      // 方法一
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );
      console.log(top);
      if (top > 260 + 900 * this.num2) {
        this.jiazai();
      }
    },
    getDetail() {
      this.$http({
        url:
          "https://elm.cangdu.org/v2/pois/" +
          this.$store.state.Dlat +
          "," +
          this.$store.state.Dlon,
        method: "get",
        withCredentials: true
      }).then(res => {
        this.detailAdd = res.data;
      });
    },
    getshop() {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.detailAdd.latitude +
          "&longitude=" +
          this.detailAdd.longitude+"&limit=" +
        this.num1,
        method: "get",
        withCredentials: true
      }).then(res => {
        this.allShop = res.data;
        loadingInstance.close();
      });
    }
  }
};
</script>
<style scoped>
#allShop {
  margin-top: 0.1rem;
  border-top: 0.01rem solid rgb(214, 212, 212);
  background-color: #fff;
}
#shop{
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
#shopname{
  width: 2.7rem;
  position: absolute;
  top:0.12rem;
  left: 0.98rem;
}
#shopname>span:nth-child(1) {
  display: inline-block;
  background-color: gold;
  font-weight: bold;
  font-size: 0.14rem;
  width: 0.3rem;
  text-align: center;
}
#shopname>span:nth-child(2){
  display: inline-block;
  font-weight: bold;
  font-size: 0.16rem;
}
#shopname>span:nth-child(3){
  float: right;
}
#shopname>span:nth-child(3)>span{
  font-size: 0.14rem;
  color: gray;
  border: 0.01rem solid gray;
  margin-left: 0.02rem;
  border-radius: 0.03rem;
}
#shopscore{
  width: 2.7rem;
  position: absolute;
  top:0.35rem;
  left: 0.98rem;
 overflow: hidden;
}
#shopscore>span{
    font-size:0.14rem; 
}
#shopscore>span:nth-child(2){
  position: absolute;
  left: 1rem;
  top: -0.01rem;
  color: orange;
}
#shopscore>span:nth-child(3){
  float: left;
}
#shopscore>span:nth-child(4){
  float: right;
  color: #3190e8;
  display: inline-block;
  width:0.5rem;
  text-align: center;
  border: 0.01rem solid #3190e8;
  border-radius: 0.03rem;
}
#shopscore>span:nth-child(5){
  float: right;
  background-color: #3190e8;
  color: white;
  display: inline-block;
  width:0.65rem;
  text-align: center;
  margin-right: 0.05rem;
  border-radius: 0.03rem;
}
#shopmoney{
  width: 2.7rem;
  position: absolute;
  top:0.8rem;
  left: 0.98rem;
  font-size: 0.14rem;
}

#shopmoney>span:nth-last-child(2),#shopmoney>span:last-child{
  float: right;
}
#shopmoney>span:nth-last-child(2){
  color: #3190e8;
}
</style>