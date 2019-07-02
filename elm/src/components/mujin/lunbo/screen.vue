<template>
  <div id="all">
    <ul id="ul1">
      <p>配送方式</p>
      <li @click="change()">
        <img v-if="show" class="img1" src="../../../../static/img/duihao.png" alt>
        <img v-if="xian" src="../../../../static/img/fengniao.png" alt>
        <span :style="{'color':color}">蜂鸟专送</span>
      </li>
    </ul>
    <ul id="ul2">
      <p>商家属性(可以多选)</p>
      <li @click="change1()">
        <img v-if="show1" class="img1" src="../../../../static/img/duihao.png" alt>
        <img v-if="xian1" src="../../../../static/img/pin.png" alt>
        <span :style="{'color':color1}">品牌商家</span>
      </li>
      <li @click="change2()">
        <img v-if="show2" class="img1" src="../../../../static/img/duihao.png" alt>
        <img v-if="xian2" src="../../../../static/img/bao.png" alt>
        <span :style="{'color':color2}">外卖保</span>
      </li>
      <li @click="change3()">
        <img v-if="show3" class="img1" src="../../../../static/img/duihao.png" alt>
        <img v-if="xian3" src="../../../../static/img/zhun1.png" alt>
        <span :style="{'color':color3}">准时达</span>
      </li>
      <li @click="change4()">
        <img v-if="show4" class="img1" src="../../../../static/img/duihao.png" alt>
        <img v-if="xian4" src="../../../../static/img/xin.png" alt>
        <span :style="{'color':color4}">新店</span>
      </li>
      <li @click="change5()">
        <img v-if="show5" class="img1" src="../../../../static/img/duihao.png" alt>
        <img v-if="xian5" src="../../../../static/img/fu.png" alt>
        <span :style="{'color':color5}">在线支付</span>
      </li>
      <li @click="change6()">
        <img v-if="show6" class="img1" src="../../../../static/img/duihao.png" alt>
        <img v-if="xian6" src="../../../../static/img/piao.png" alt>
        <span :style="{'color':color6}">开发票</span>
      </li>
    </ul>
    <div id="but">
      <button @click="clear()" class="anniu1">清空</button>
      <button @click="define()" class="anniu2">确定<span v-if="count>0">({{count}})</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "screen",
  data() {
    return {
      show: false,
      xian: true,
      show1: false,
      xian1: true,
      show2: false,
      xian2: true,
      show3: false,
      xian3: true,
      show4: false,
      xian4: true,
      show5: false,
      xian5: true,
      show6: false,
      xian6: true,
      color:"",
      color1:"",
      color2:"",
      color3:"",
      color4:"",
      color5:"",
      color6:"",
      count:0
    };
  },
  methods: {
    clear(){
      this.count = 0;
    if(this.show==true){
      this.show = false;
      this.xian = true;
      this.color = "";
   }
   if(this.show1==true){
      this.show1 = false;
      this.xian1 = true;
      this.color1 = "";
   }
   if(this.show2==true){
      this.show2 = false;
      this.xian2 = true;
      this.color2 = "";
   }
   if(this.show3==true){
      this.show3 = false;
      this.xian3 = true;
      this.color3 = "";
   }
   if(this.show4==true){
      this.show4 = false;
      this.xian4 = true;
      this.color4 = "";
   }
   if(this.show5==true){
      this.show5 = false;
      this.xian5 = true;
      this.color5 = "";
   }
   if(this.show6==true){
      this.show6 = false;
      this.xian6 = true;
      this.color6 = "";
   }
    },
    define(){
      this.$emit("define");
      if(this.show==true){
      this.show = false;
      this.xian = true;
      this.color = "";
   }
   if(this.show1==true){
      this.show1 = false;
      this.xian1 = true;
      this.color1 = "";
   }
   if(this.show2==true){
      this.show2 = false;
      this.xian2 = true;
      this.color2 = "";
   }
   if(this.show3==true){
      this.show3 = false;
      this.xian3 = true;
      this.color3 = "";
   }
   if(this.show4==true){
      this.show4 = false;
      this.xian4 = true;
      this.color4 = "";
   }
   if(this.show5==true){
      this.show5 = false;
      this.xian5 = true;
      this.color5 = "";
   }
   if(this.show6==true){
      this.show6 = false;
      this.xian6 = true;
      this.color6 = "";
   }
    },
    change() {
      this.show = !this.show;
      this.xian = !this.xian;
      if (this.color == "blue") {
         this.color = ""
      } else {
         this.color = "blue"        
      }
      if (this.show == true) {
        this.count++;
      }else{
        if (this.count > 0) {
          this.count--;
        }
      }
      console.log(this.count);
    },
    change1() {
      this.show1 = !this.show1;
      this.xian1 = !this.xian1;
      if (this.color1 == "blue") {
         this.color1 = ""
      } else {
         this.color1 = "blue"        
      }
      if (this.show1 == true) {
        this.count++;
      }else{
        if (this.count > 0) {
          this.count--;
        }
      }
    },
    change2() {
      this.show2 = !this.show2;
      this.xian2 = !this.xian2;
      if (this.color2 == "blue") {
         this.color2 = ""
      } else {
         this.color2 = "blue"        
      }
      if (this.show2 == true) {
        this.count++;
      }else{
        if (this.count > 0) {
          this.count--;
        }
      }
    },
    change3() {
      this.show3 = !this.show3;
      this.xian3 = !this.xian3;
      if (this.color3 == "blue") {
         this.color3 = ""
      } else {
         this.color3 = "blue"        
      }
      if (this.show3 == true) {
        this.count++;
      }else{
        if (this.count > 0) {
          this.count--;
        }
      }
    },
    change4() {
      this.show4 = !this.show4;
      this.xian4 = !this.xian4;
      if (this.color4 == "blue") {
         this.color4 = ""
      } else {
         this.color4 = "blue"        
      }
      if (this.show4 == true) {
        this.count++;
      }else{
        if (this.count > 0) {
          this.count--;
        }
      }
    },
    change5() {
      this.show5 = !this.show5;
      this.xian5 = !this.xian5;
      if (this.color5 == "blue") {
         this.color5 = ""
      } else {
         this.color5 = "blue"        
      }
      if (this.show5 == true) {
        this.count++;
      }else{
        if (this.count > 0) {
          this.count--;
        }
      }
    },
    change6() {
      this.show6 = !this.show6;
      this.xian6 = !this.xian6;
      if (this.color6 == "blue") {
         this.color6 = ""
      } else {
         this.color6 = "blue"        
      }
      if (this.show6 == true) {
        this.count++;
      }else{
        if (this.count > 0) {
          this.count--;
        }
      }
    }
  }
};
</script>
<style scoped>
#all{
  background-color: rgb(207, 204, 204);
}
#ul1 {
  margin-top: 0.84rem;
  background-color: #fff;
  height: 0.6rem;
}
#ul2 {
  height: 1rem;
  background-color: #fff;
}
ul > p {
  font-size: 0.02rem;
  padding: 0.1rem 0rem 0.1rem 0.1rem;
}
#ul1 > li,
#ul2 > li {
  display: flex;
  /* justify-content: space-between; */
  width: 1rem;
  padding: 0rem 0rem 0rem 0.1rem;
  border: 0.01rem solid gray;
  margin-left: 0.06rem;
  margin-bottom: 0.03rem;
}
/* .img1{
   float: left;
} */
#ul2 > li {
  float: left;
}
li > img {
  width: 0.24rem;
  height: 0.24rem;
  /* border: 1px solid red; */
  padding-right: 0.06rem;
}
li > span {
  font-size: 0.024rem;
  padding-top: 0.05rem;
  /* border: 1px solid red; */
}
#but {
  display: flex;
  justify-content: space-around;
}
.anniu1,
.anniu2 {
  width: 1.8rem;
  height: 0.3rem;
  border-radius: 0.06rem;
  font-size: 0.16rem;
  margin-top: 0.05rem;
}
.anniu1 {
  background-color: #fff;
}
.anniu2 {
  background-color: green;
  color: #fff;
}
</style>