<template>
  <div>
    <div id="title">
      <img @click="back()" src="../../../../static/img/back.png" alt>
      <span>搜索</span>
    </div>
    <div id="content">
      <input id="input" type="text" placeholder="请输入商家或美食名称" v-model="msg">
      <button @click="sub()" id="submit">提交</button>
    </div>
    <p id="p1" v-if="p1">很抱歉!无搜索结果</p>
    <div v-if="p2">
      <ul>
        <li v-for="(item, index) in datas" :key="index">
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
    <ul  v-if="show">
      <li v-for="(item, index) in record" :key="index" @click="code(index)">{{item}}
        <span id="span" @click.stop="delet(index)">x</span>
      </li>
      <p id="clear" @click="remove()">清空搜索历史</p>
    </ul>
    <div id="form"> 
      <router-link to="/outFood">
          <img  src="../../../../static/img/homeF.png"> 
      </router-link>
      <router-link :to="'/search?show='+true">  
        <img  src="../../../../static/img/searchT.png">
      </router-link>
      <router-link to="/order">
          <img  src="../../../../static/img/orderF.png">
      </router-link>
      <router-link to="/mine">
          <img src="../../../../static/img/meF.png">
      </router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      datas: [],
      name: [],
      address: [],
      msg: "",
      p1: false,
      p2: false,
      record: [],
      longitude:[],
      latitude:[],
      show: false,
      lat:"",
      lon:""
    };
  },
  created() {
    console.log(this.$store.state.latitude);
    console.log(this.$store.state.longitude);
    this.lat= this.$store.state.latitude;
    this.lon = this.$store.state.longitude;
    this.record = localStorage.value.split(",");
    this.latitude = localStorage.valuelatitude.split(",");
    this.longitude = localStorage.valuelongitude.split(",");
    // console.log(this.record);
    this.show = this.$route.query.show;
    // console.log(this.show);
  },
  methods: {
    delet(i){
     this.record.splice(i,1);
    },
    remove(){
      localStorage.removeItem("value");
      this.record = [];
    },
    code(i) {
      this.msg = this.record[i];
      this.lat = this.latitude[i];
      this.lon = this.longitude[i];
    },
    back() {
      this.$router.back();
    },
    sub() {
      if (this.latitude.length==0) {
        this.lat= this.$store.state.latitude;
    this.lon = this.$store.state.longitude;
      }
      const api =
        "https://elm.cangdu.org/v4/restaurants?geohash=" +
        this.lat +
        "," +
        this.lon+
        "&keyword=" +
        this.msg;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.datas = res.data;
        console.log(this.datas);
        if (this.datas.length == 0) {
          this.p1 = true;
          this.p2 = false;
        } else {
          this.p1 = false;
          this.p2 = true;
        }
        if(this.msg.length>0){
             if (localStorage.value) {
               if(localStorage.value.indexOf(this.msg) == -1){
                localStorage.value += "," + this.msg;
                 localStorage.valuelatitude+=","+this.$store.state.latitude;
          localStorage.valuelongitude += ","+this.$store.state.longitude;
               }
        } else {
          localStorage.value = this.msg;
          localStorage.valuelatitude=this.$store.state.latitude;
          localStorage.valuelongitude = this.$store.state.longitude;
        }
  
        }
        this.show = false;
        console.log(this.show);
      });
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
#span{
  float: right;
}
#clear{
  background-color: #fff;
  padding: 0.1rem;
  text-align: center;
  color: #3190e8;
  font-weight: bold;
}
#p1 {
  background-color: #fff;
  text-align: center;
  padding: 0.06rem;
  font-size: 0.15rem;
  margin-top: 0.06rem;
}
#title {
  background-color: #3190e8;
  width: 3.45rem;
  font-size: 0.2rem;
  padding: 0.15rem;
  color: white;
  /* text-align: center; */
  overflow: hidden;
  position: relative;
}
#title > img {
  width: 0.15rem;
  float: left;
}
#title span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
#content {
  background-color: #fff;
}
#input {
  width: 2.8rem;
  font-size: 0.16rem;
  font-weight: bold;
  padding: 0.06rem;
  margin: 0.06rem;
  border-radius: 0.04rem;
  background-color: rgb(241, 232, 232);
}
#submit {
  background-color: #3190e8;
  color: white;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  padding-top: 0.05rem;
  padding-bottom: 0.05rem;
}
#shop {
  color: black;
}
#shopImg {
  width: 0.8rem;
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
