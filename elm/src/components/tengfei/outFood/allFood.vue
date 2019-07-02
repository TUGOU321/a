<template>
  <div>
    <div id="left" :style="{'height':divH+'px'}">
      <ul>
        <li
          v-for="(item, index) in datas"
          :key="index"
          @click="sty(index)"
          :class="{ active:  index==isActive}"
        >
          <a :href="'#top'+index">{{item.name}}</a>
          <span class="span1" v-if="nums[index]">{{nums[index]}}</span>
        </li>
      </ul>
    </div>
    <div id="bc" v-if="show">
                <div id="tips" v-if="show">
                <p id="Fname">{{foodschoose.name}}</p>
                <p
                  v-show="foodschoose.specifications.length>0"
                  id="Fguige"
                >{{foodschoose.specifications[0].name}}</p>
                <div v-if="foodschoose.specfoods" class="guige">
                  <span
                    class="sureone1"
                    :class="{sureone2:show1}"
                    @click.stop="firstsure()"
                    v-if="foodschoose.specfoods[0].specs_name"
                  >{{foodschoose.specfoods[0].specs_name}}</span>
                  <span
                    class="suretwo1"
                    :class="{suretwo2:show2}"
                    @click.stop="secondsure()"
                    v-if="foodschoose.specfoods[1].specs_name"
                  >{{foodschoose.specfoods[1].specs_name}}</span>
                </div>
                <p id="Fguige_last">
                  <span>￥{{count}}</span>
                  <span @click.stop="pushSome(foodschoose)">加入购物车</span>
                </p>
              </div>
              </div>
    <div id="right" :style="{'height':divH+'px'}">
      <ul>
        <li v-for="(items, i) in datas" :key="i">
          <div class="top" :id="'top'+i">
            <span>{{items.name}}</span>
            <span>{{items.description}}</span>
            <el-tooltip class="item" effect="dark" content placement="bottom-end">
              <el-button class="dian">...</el-button>
            </el-tooltip>
          </div>
          <ul id="ul1">
            <li v-for="(item, j) in items.foods" :key="j" id="det" @click="todet(item)">
              <img :src="'https://elm.cangdu.org/img/'+item.image_path" id="imgSrc" />
              <div id="detR">
                <p>{{item.name}}</p>
                <p>{{item.description}}</p>
                <p>
                  <span>月售{{item.month_sales}}份</span>
                  <span>好评率{{item.satisfy_rate}}%</span>
                </p>
                <p v-if="item.activity" id="tel">{{item.activity.image_text}}</p>
                <p>
                  <span id="money">￥{{item.specfoods[0].price}}</span>
                  <span id="qi">起</span>
                </p>
                <p
                  id="tri"
                  v-if="item.attributes.length > 0 && item.attributes[0] && item.attributes[0].icon_name && item.attributes[0].icon_color=='5ec452'"
                >
                  <span>{{item.attributes[0].icon_name}}品</span>
                </p>
                <span
                  v-if="item.attributes.length > 0 && item.attributes[1] && item.attributes[1].icon_name"
                  id="sign"
                >{{item.attributes[1].icon_name}}</span>
                <span v-if="item.specfoods[1]" id="choose" @click.stop="tips(item)">选规格</span>
                <span class="jianhao" @click.stop="delle(i,j)" v-if="item.is_featured>0">-</span>
                <span
                  v-if="item.is_featured>0 && item.specfoods[1]"
                  id="featured1"
                >{{item.is_featured}}</span>
                <span
                  v-if="item.is_featured>0 && !item.specfoods[1]"
                  id="featured2"
                >{{item.is_featured}}</span>
                <p v-if="!item.specfoods[1]" id="add" @click.stop="add1(i,j)">+</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div id="clearcar" v-if="show3">
      <p id="clear">
        <span>购物车</span>
        <span @click="clearall(shopnum)">清空</span>
      </p>
      <ul :v-if="shopnum.length>0" v-for="(v, i) in shopnum" :key="i" id="ul3">
        <span id="foodName">{{v.name}}</span>
        <li id="rightall">
          <span class="foodM" v-if="v.specfoods.length==1 ">￥{{v.specfoods[0].price}}</span>
          <span class="foodM" v-if="v.specfoods.length>1">￥{{v.specfoods[0].price}}</span>
          <span class="jiangou" @click.stop="dejian(v._id,i)">-</span>
          <span class="reduceadd">{{v.is_featured}}</span>
          <span class="jiagou" @click.stop="adjia(v._id)">+</span>
        </li>
      </ul>
    </div>
    <div id="shopcar">
      <p id="car" @click="show3=!show3">
        <img src="../../../../static/img/shopcar.png" alt />
        <span id="count" v-if="num>0">{{num}}</span>
      </p>
      <span id="money1">￥{{$store.state.totalPrice}}</span>
      <span id="money2">配送费￥5</span>
      <span class="money3">还差￥20起送</span>
      <span class="money3" :class="{money4:$store.state.totalPrice>=20}" v-if="$store.state.totalPrice>=20">去结算</span>
    </div>
  </div>
</template>

<script>
import { fail } from "assert";
import { Loading } from 'element-ui';
let loadingInstance;
export default {
  name: "allFood",
  data() {
    return {
      shopId: "",
      datas: [],
      foods: [],
      id: "",
      name: "",
      dialogVisible: true,
      divH: "",
      h: "",
      isActive: "",
      msg: "",
      show: false,
      foodschoose: {},
      food: [],
      Fv: [],
      allM: 0,
      arrA: [],
      cou: 0,
      show1: true,
      show2: false,
      a: "",
      show3: false
    };
  },
  created() {
    this.shopId = this.$route.query.shopId;
    //  &&
    // if (this.num === 0) {
      this.getAll();
      // alert(1);
    // }
    loadingInstance = Loading.service({
            fullscreen:true,
            background:"#F2F6FC",
            text:"加载中...",
            spinner:"el-icon-loading"
        }); 
  },
  mounted() {
    // alert(1)
  },
  computed: {
    nums() {
      var arr = [];
      for (var i = 0; i < this.$store.state.allFoods.length; i++) {
        var a = 0;
        for (var k = 0; k < this.$store.state.allFoods[i].foods.length; k++) {
          a += this.$store.state.allFoods[i].foods[k].is_featured;
        }
        // console.log(a);
        arr.push(a);
      }
      return arr;
    },
    num() {
      var a = 0;
      for (var i = 0; i < this.$store.state.allFoods.length; i++) {
        for (var k = 0; k < this.$store.state.allFoods[i].foods.length; k++) {
          a += this.$store.state.allFoods[i].foods[k].is_featured;
        }
      }
      return a;
    },
    shopnum() {
      var ab = [];
      for (var i = 0; i < this.$store.state.allFoods.length; i++) {
        for (var k = 0; k < this.$store.state.allFoods[i].foods.length; k++) {
          if (this.$store.state.allFoods[i].foods[k].is_featured > 0) {
            ab.push(this.$store.state.allFoods[i].foods[k]);
          }
        }
      }
      return ab;
    }
  },
  methods: {
    clearall(s) {
      for (var i = 0; i < s.length; i++) {
        s[i].is_featured = 0;
      }
      this.$store.state.totalPrice = 0;
      this.shopping = false;
      this.show3 = false;
    },
    adjia(a, b) {
      this.$store.commit("goujia", a);
    },
    dejian(b) {
      this.$store.commit("goujian", b);
    },
    pushSome(bc) {
      this.cou++;
      this.$store.state.totalPrice += bc.specfoods[0].price;
      this.show = false;
      bc.is_featured++;
    },
    firstsure() {
      this.show1 = false;
      this.show2 = false;
    },
    secondsure() {
      this.show1 = true;
      this.show2 = true;
    },
    add1(a, b) {
      this.$store.commit("getindex", {
        a: a,
        b: b
      });
      this.cou++;
    },
    delle(a, b) {
      this.$store.commit("getdele", {
        a: a,
        b: b
      });
      if (this.cou > 0) {
        this.cou--;
      }
    },
    tips(v) {
      this.show = !this.show;
      this.foodschoose = v;
      if (this.foodschoose.specfoods.length > 0) {
        this.count = this.foodschoose.specfoods[0].price;
      }
    },
    todet(item) {
      this.$router.push({
        name: "fooddet",
        query: item
      });
    },
    getAll() {
      this.$http({
        url:
          "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
          this.shopId,
        method: "get",
        withCredentials: true
      }).then(res => {
        console.log(res.data);
        this.datas = res.data;
        this.$store.commit("foods", res.data);
        this.$store.commit("getcanguanId", this.shopId);
        loadingInstance.close();
      });
    },
    sty(i) {
      this.isActive = i;
    }
  }
};
</script>
<style scoped>
#bc{
  width: 3.75rem;
  height: 70.4vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 22vh;
}
#ul3 {
  overflow: hidden;
}
#rightall {
  /* display: inline-block; */
  float: right;
  margin-top: 0.075rem;
  margin-right: 0.07rem;
}
.foodM {
  display: inline-block;
  color: red;
  font-size: 0.16rem;
  margin-right: 0.1rem;
}
.jiangou {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  color: #3190e8;
  border-radius: 50%;
  font-size: 0.16rem;
  border: 0.01rem solid #3190e8;
  text-align: center;
  line-height: 0.2rem;
  margin-right: 0.05rem;
}
.jiagou {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #3190e8;
  text-align: center;
  line-height: 0.2rem;
  color: #fff;
}
.reduceadd {
  font-size: 0.16rem;
  margin-right: 0.05rem;
}
#foodName {
  display: inline-block;
  font-weight: bold;
  color: gray;
  padding: 0.1rem;
  font-size: 0.16rem;
}
#clearcar {
  position: fixed;
  left: 0;
  bottom: 0.5rem;
  z-index: 100;
  background-color: #fff;
}
#clear {
  background-color: lightgray;
  width: 3.55rem;
  padding: 0.1rem;
}
#clear > span:nth-child(2) {
  float: right;
}

#featured1 {
  position: absolute;
  bottom: 0.1rem;
  right: 0.8rem;
}
#featured2 {
  position: absolute;
  bottom: 0.1rem;
  right: 0.63rem;
}

.jianhao {
  border-radius: 50%;
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.15rem;
  position: absolute;
  bottom: 0.1rem;
  right: 1rem;
  color: white;
  background-color: #3190e8;
}
.span1 {
  text-align: center;
  margin-top: 0.1rem;
  display: block;
  width: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.12rem;
  height: 0.2rem;
  float: right;
  margin-right: 0.05rem;
  background-color: red;
  border-radius: 50%;
  color: white;
}
.guige {
  margin-left: 0.15rem;
  margin-top: 0.2rem;
  font-size: 0.16rem;
}
.sureone1 {
  display: inline-block;
  border: 1px solid rgb(220, 220, 220);
  color: #3190e8;
  padding: 0.05rem;
  margin-right: 0.05rem;
  border-radius: 0.05rem;
}
.suretwo2 {
  display: inline-block;
  border: 1px solid #3190e8;
  color: #3190e8;
  padding: 0.05rem;
  margin-right: 0.05rem;
  border-radius: 0.05rem;
}
.suretwo1 {
  display: inline-block;
  border: 1px solid rgb(220, 220, 220);
  padding: 0.05rem;
  border-radius: 0.05rem;
}
.sureone2 {
  display: inline-block;
  border: 1px solid rgb(220, 220, 220);
  padding: 0.05rem;
  color: black;
  border-radius: 0.05rem;
}
#count {
  display: inline-block;
  background-color: red;
  font-size: 0.15rem;
  color: #fff;
  width: 0.23rem;
  height: 0.23rem;
  text-align: center;
  line-height: 0.2rem;
  position: fixed;
  left: 0.4rem;
  bottom: 0.4rem;
  z-index: 100;
  border-radius: 50%;
}
#food > p:nth-child(1) {
  background-color: lightgray;
  width: 3.75rem;
  padding: 0.1rem 0;
  overflow: hidden;
}
#food > p > span:nth-child(1) {
  margin-left: 0.1rem;
}
#food > p > span:nth-child(2) {
  float: right;
  margin-right: 0.1rem;
}
#tips {
  width: 2rem;
  background-color: white;
  border: 1px solid gray;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 113;
}
#Fname {
  width: 2rem;
  text-align: center;
  font-size: 0.2rem;
  font-weight: bold;
}
#Fguige {
  font-size: 0.16rem;
  margin-top: 0.1rem;
  margin-left: 0.15rem;
}
.Fguige1 {
  border: 1px solid lightgray;
  margin-left: 0.2rem;
}
#Fguige_last {
  margin-top: 0.2rem;
  padding: 0.14rem 0.05rem;
  background-color: lightgray;
}
#Fguige_last > span:nth-child(1) {
  margin-left: 0.1rem;
  color: red;
}
#Fguige_last > span:nth-child(2) {
  background-color: #3190e8;
  padding: 0.05rem;
  margin-left: 0.5rem;
  color: #fff;
}
.dian {
  float: right;
  background-color: lightgray;
}
.item {
  /* margin: 0.2rem; */
  padding: 0.08rem;
  float: right;
}
.active {
  background-color: #fff;
}
#left {
  float: left;
  margin-top: 22vh;
  width: 0.9rem;
  height: 70.4vh;
  overflow: hidden;
  overflow: scroll;
  overflow: auto;
  background-color: lightgray;
}
#left ul li {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.16rem;
  border-bottom: 0.01rem solid gray;
  padding-left: 0.03rem;
}
#left ul li a {
  color: black;
}
.top {
  padding: 0.17rem 0.12rem;
  background-color: lightgray;
}
.top > span:first-child {
  font-size: 0.18rem;
}
.top > span:nth-child(2) {
  font-size: 0.14rem;
}
#ul1 > li {
  padding: 0.13rem 0.1rem;
  overflow: hidden;
  position: relative;
}
#imgSrc {
  float: left;
  width: 0.8rem;
}
#det {
  border-bottom: 0.01rem solid gray;
}
#detR {
  float: left;
  margin-left: 0.03rem;
}
#detR > p:nth-child(1) {
  font-size: 0.19rem;
  font-weight: bold;
  margin-bottom: 0.08rem;
  width: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#detR > p:nth-child(2) {
  font-size: 0.14rem;
  color: gray;
  margin-bottom: 0.08rem;
  width: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#detR > p:nth-child(3) {
  font-size: 0.14rem;
  margin-bottom: 0.08rem;
}
#tel {
  padding: 0.02rem;
  display: inline-block;
  font-size: 0.14rem;
  color: red;
  border: 0.01rem solid red;
  border-radius: 0.03rem;
  margin-bottom: 0.08rem;
  width: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#money {
  font-size: 0.14rem;
  color: orange;
}
#qi {
  font-size: 0.15rem;
}
#tri {
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgb(50, 199, 50);
  transform: rotateZ(-45deg);
  position: absolute;
  top: -0.25rem;
  left: -0.25rem;
}
#tri > span {
  font-size: 0.14rem;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0.1rem;
}
#sign {
  color: red;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
  border: 0.01rem solid red;
  width: 0.35rem;
  text-align: center;
  border-radius: 0.03rem;
}
#add,
#choose {
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
  color: white;
  background-color: #3190e8;
}
#add {
  border-radius: 50%;
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
}
#choose {
  font-size: 0.15rem;
  width: 0.55rem;
  height: 0.22rem;
  line-height: 0.22rem;
  text-align: center;
  border-radius: 0.05rem;
}
#right {
  float: right;
  margin-top: 22vh;
  width: 2.85rem;
  height: 70.4vh;
  overflow: hidden;
  overflow: scroll;
  overflow: auto;
  background-color: white;
}
::-webkit-scrollbar {
  display: none;
}
#food {
  position: fixed;
  bottom: 0.5rem;
  left: 0;
}
#shopcar {
  width: 100%;
  height: 7.6vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 150;
}
#car {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.7);
  border: 0.02rem solid gray;
  border-radius: 50%;
  padding: 0.05rem;
  margin-left: 0.1rem;
  margin-top: -0.1rem;
}
#car > img {
  width: 0.35rem;
}
#money1 {
  position: absolute;
  left: 0.6rem;
  top: 0.02rem;
  color: white;
  font-size: 0.2rem;
}
#money2 {
  position: absolute;
  top: 0.3rem;
  left: 0.6rem;
  color: white;
  font-size: 0.14rem;
}
.money3 {
  display: inline-block;
  font-size: 0.2rem;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.15rem;
  background-color: rgb(177, 175, 175);
}
.money4 {
  width:1.25rem; 
  background-color: greenyellow;
  text-align: center;
}
</style>