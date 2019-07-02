<template>
  <div>
    <ul class="ul1">
      <li @click="sort6()">
        <img class="img4" src="../../../../static/img/paixu.png" alt>
        <span  :style="{'color':color}">
          智能排序
          <img v-if="show" src="../../../../static/img/duihao.png" alt>
        </span>
      </li>
      <li @click="sort2()">
        <img src="../../../../static/img/juli.png" alt>
        <span :style="{'color':color2}">距离最近<img v-if="show1" class="img5" src="../../../../static/img/duihao.png" alt></span>
      </li>
      <li @click="sort1()">
        <img class="img4" src="../../../../static/img/re.png" alt>
        <span :style="{'color':color1}">销量最高<img v-if="show2" src="../../../../static/img/duihao.png" alt></span>
      </li>
      <li @click="sort3()">
        <img src="../../../../static/img/jiage.png" alt>
        <span :style="{'color':color3}">起送价最低<img v-if="show3" class="img5" src="../../../../static/img/duihao.png" alt></span>
      </li>
      <li @click="sort4()">
        <img class="img4" src="../../../../static/img/zhong.png" alt>
        <span :style="{'color':color4}">配送速度最快<img v-if="show4" src="../../../../static/img/duihao.png" alt></span>
      </li>
      <li @click="sort5()">
        <img class="img4" src="../../../../static/img/xing1.png" alt>
        <span :style="{'color':color5}">评分最高<img v-if="show5" src="../../../../static/img/duihao.png" alt></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sort",
  data() {
    return {
      datas: [],
      show:false,
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      color:"",
      color1:"",
      color2:"",
      color3:"",
      color4:"",
      color5:""
    };
  },    
  methods: {
    sort1() {
      this.$store.commit("increAdd", 6);
      console.log(this.$store.state.id);
      this.$emit("incre");
      this.show2 = !this.show2;
      if (this.show2==true) {
          this.show = false;
          this.show1 = false;
          this.show3 = false;
          this.show4 = false;
          this.show5 = false; 
           this.show5 = false;
          if (this.color1 = "blue") {
            this.color = "";
            this.color2 = "";
            this.color3 = "";
            this.color4 = "";
            this.color5 = "";
        } 
      }
      
    },
    sort2() {
      this.$store.commit("increAdd", 5);
      console.log(this.$store.state.id);
      this.$emit("incre");
      this.show1 = !this.show1;
      if (this.show1==true) {
          this.show2 = false;
          this.show = false;
          this.show3 = false;
          this.show4 = false;
          this.show5 = false;
          if (this.color2 = "blue") {
            this.color = "";
            this.color1 = "";
            this.color3 = "";
            this.color4 = "";
            this.color5 = "";
        } 
      }
    },
    sort3() {
      this.$store.commit("increAdd", 1);
      console.log(this.$store.state.id);
      this.$emit("incre");
      this.show3 = !this.show3;
      if (this.show3==true) {
          this.show = false;
          this.show1 = false;
          this.show2 = false;
          this.show4 = false;
          this.show5 = false;
           this.show5 = false;
          if (this.color3 = "blue") {
            this.color = "";
            this.color2 = "";
            this.color1 = "";
            this.color4 = "";
            this.color5 = "";
        } 
      }
    },
    sort4() {
      this.$store.commit("increAdd", 2);
      console.log(this.$store.state.id);
      this.$emit("incre");
      this.show4 = !this.show4;
      if (this.show4==true) {
          this.show = false;
          this.show1 = false;
          this.show3 = false;
          this.show2 = false;
          this.show5 = false;
           this.show5 = false;
          if (this.color4 = "blue") {
            this.color = "";
            this.color2 = "";
            this.color3 = "";
            this.color1 = "";
            this.color5 = "";
        } 
      }
    },
    sort5() {
      this.$store.commit("increAdd", 3);
      console.log(this.$store.state.id);
      this.$emit("incre");
      this.show5 = !this.show5;
      if (this.show5==true) {
          this.show = false;
          this.show1 = false;
          this.show3 = false;
          this.show4 = false;
          this.show2 = false;
          if (this.color5 = "blue") {
            this.color = "";
            this.color2 = "";
            this.color3 = "";
            this.color4 = "";
            this.color1 = "";
        } 
      }
    },
    sort6() {
      this.$store.commit("increAdd", 4);
      console.log(this.$store.state.id);
      this.$emit("incre");
      this.show = !this.show;
      if (this.show==true) {
          this.show2 = false;
          this.show1 = false;
          this.show3 = false;
          this.show4 = false;
          this.show5 = false;
        if (this.color = "blue") {
            this.color1 = "";
            this.color2 = "";
            this.color3 = "";
            this.color4 = "";
            this.color5 = "";
        } 
      }
      this.xian = !this.xian;
    }
  }
};
</script>
<style scoped>
.ul1 {
  margin-top: 0.84rem;
  background-color: #fff;
  /* height: 3rem; */
}

.ul1 > li {
  /* height: 0.2rem; */
  padding: 0 0 0.1rem 0.1rem;
  line-height: 0.4rem;
}
.ul1 > li img {
  width: 0.2rem;
}
.ul1 > li > span {
  width: 3.4rem;
  /* border: 1px solid red; */
  display: inline-block;
  border-bottom: 0.01rem solid gray;
  /* display: flex; */
}
.ul1 > li > span >img{
    float: right;
    margin-top: 0.06rem;
}
.ul1 > li:nth-child(6) > span {
  border-bottom: none;
}
.img4 {
  width: 0.15rem;
}
.img5{
    margin-right: 0.04rem;
}
</style>