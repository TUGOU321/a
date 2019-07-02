<template>
  <div id="body">
    <div id="left">
      <ul id="ul1">
        <li
          class="li1"
          @click="getClass(v,i)"
          :key="i"
          v-for="(v,i) in datas"
          :class="{ active:i==isActive && show1,active2:tit == v.name && show}"
        >
          <img id="img1" :src="'https://fuss10.elemecdn.com/'+v.image_url+'.png'" alt>
          <img id="img2" :src="'https://fuss10.elemecdn.com/'+v.image_url+'.jpeg'" alt>
          <img id="img3" :src="'https://fuss10.elemecdn.com/'+v.image_url" alt>
          <span id="name1">{{v.name}}</span>
          <img id="img4" src="../../../../static/img/jiantou2.png" alt>
          <span id="count1">{{v.count}}</span>
        </li>
      </ul>
    </div>
    <div id="right">
      <ul id="ul2">
        <li id="li2" @click="click1(v)" :key="i" v-for="(v,i) in arr">
          <span id="name2">{{v.name}}</span>
          <span id="count2">{{v.count}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      datas: [],
      id: "",
      arr: [],
      isActive: 12,
      tit: "",
      show: true,
      show1: true,
      xian: "",
      dianji:""
    };
  },
  created() {
    this.class1();
    console.log(this.$route.query.t);
    this.tit = this.$route.query.t;
    this.click();
  },
  methods: {
    class1() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        console.log(res);
        this.datas = res.data;
        for (let i = 0; i < this.datas.length; i++) {
          this.xian = this.tit == this.datas[i].name;
        }
        if (this.xian == false) {
          this.isActive = 0;
          this.show1 = true;
        } else {
          this.show1 = false;
        }
        this.getClass(v,i);
        //当数据源发生更新时,页面中的DOM元素节点渲染成功之后,才会触发
        // this.$nextTick(function(){
        // var lis = document.getElementsByClassName("li1");
        // console.log(lis.length);
        // for( var i=0;i<lis.length;i++){

        // }

        // })
      });
    },
    getClass(v, i2) {
    //   this.id = v.id;
      this.arr = [];
    //   if (this.id == v.id) {
        for (var i = 0; i < v.sub_categories.length; i++) {
          this.arr.push(v.sub_categories[i]);
        }
        this.arr.shift();
        console.log(this.arr);
    //   }
      this.isActive = i2;
      this.show = false;
      this.show1 = true;
    },
    click1(v){
     this.$emit("detail");
    // this.dianji = this.$route.query;
    this.$router.push({
      name:"lunbo",
    })
    }
  }
};
</script>
<style scoped>
#body{
  overflow: hidden;
}
#left {
  width: 1.875rem;
  float: left;
  /* border: 1px solid red; */
}
ul {
  margin-top: 0.84rem;
  height: 2.33rem;
  /* overflow: hidden; */
  /* border: 1px solid rebeccapurple; */
}
#ul2 {
  overflow: scroll;
  overflow: auto;
  background-color: #fff;
}
#ul2::-webkit-scrollbar {
  /* width: 0;
height: 0;
color: transparent; */
  display: none;
}
#ul1 {
  background-color: rgb(228, 222, 222);
}
.li1 {
  padding-top: 0.03rem;
  padding-bottom: 0.03rem;
}
.active {
  background-color: white;
}
.active2 {
  background-color: white;
}
#li2 {
  padding-top: 0.045rem;
  padding-bottom: 0.045rem;
  margin-left: 0.06rem;
  border-bottom: 1px solid gray;
}
#name1 {
  font-size: 0.13rem;
  line-height: 0.02rem;
  color: rgb(43, 40, 40);
}
#name2 {
  font-size: 0.14rem;
  line-height: 0.1rem;
  color: rgb(43, 40, 40);
}
li img {
  width: 0.18rem;
}
#img1 {
  margin-left: 0.04rem;
}
#img2 {
  margin-left: -0.03rem;
}
#img3 {
  margin-left: -0.06rem;
}
#img4 {
  float: right;
}

#count1 {
  background-color: rgb(194, 189, 189);
  border-radius: 0.06rem;
  font-size: 0.02rem;
  color: white;
}
#count2 {
  font-size: 0.13rem;
}
#count1,
#count2 {
  padding: 0.02rem;
  float: right;
  margin-right: 0.06rem;
}
#right {
  width: 1.875rem;
  float: right;

}
</style>