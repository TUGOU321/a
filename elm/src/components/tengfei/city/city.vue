<template>
  <div id="city">
    <div id="title">
      <span @click="reflash()">elm.me</span>
      <router-link to="/login" ><span id="login" v-if="!disp">登陆|注册</span></router-link>
      <router-link :to="'/mine?i=0&n=1'"><img src="../../../../static/img/me.png" alt="" id="imgMe" v-if="disp"></router-link>
    </div>
    <div id="location">
      <p><span>当前定位城市:</span>
      <span>定位不准确时，请在城市列表中选择</span></p>
      <router-link :to="'/citysearch?cityId=' + arrLoC.id+'&cityName='+arrLoC.name">
      <p id="guess" >{{arrLoC.name}}<img src="../../../../static/img/right.png" alt=""></p>
       </router-link>
    </div>
    <div id="hotCity">
        <p>热门城市</p>
<li v-for="(item, index) in arrHotC" :key="index">
       <router-link :to="'/citysearch?cityId=' + item.id+'&cityName='+item.name">
            {{item.name}}
       </router-link>
       </li>

    </div>
    <div id="allCity">
      <ul v-for="(item, index) in arrAllC" :key="index">
        <p>
          {{index}}
          <span v-if="index=='A'">(按字母排序)</span>
        </p>
          <ul id="address">
            <li  v-for="(value, index) in item" :key="index">
                <router-link id="cityname" :to="'/citysearch?cityId=' + value.id+'&cityName='+value.name">
                {{value.name}}
                </router-link>
                </li>
          </ul>
      </ul>
    </div>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
let loadingInstance;
export default {
  name: "city",
  data() {
    return {
      arrLoC: "",
      arrHotC: [],
      arrAllC: {},
      disp:false,
      count:0
    };
  },
  created() {
    this.getLoC();
    this.getHotC();
    this.getAllC();
    loadingInstance = Loading.service({
            fullscreen:true,
            background:"#F2F6FC",
            text:"加载中...",
            spinner:"el-icon-loading"
        });

    // console.log(this.$route);
    if(this.$route.query.username){
      this.disp=true
    }else{
      this.disp=false
    }
  },
  methods: {
    
    reflash(){
      this.arrLoC="";
      this.arrHotC=[];
      this.arrAllC={};
      this.getLoC();
      this.getHotC();
      this.getAllC();
    },
    getLoC() {
      this.$http({
        url: "https://elm.cangdu.org/v1/cities?type=guess",
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res);
        this.arrLoC = res.data;
        this.count++;
      });
    },
    getHotC() {
      this.$http({
        url: "https://elm.cangdu.org/v1/cities?type=hot",
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res);
        this.arrHotC = res.data;
        this.count++;
      });
    },
    getAllC() {
      this.$http({
        url: "https://elm.cangdu.org/v1/cities?type=group",
        method: "get",
        withCredentials: true
      }).then(res => {
        // console.log(res);
        var arr = [];
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        // console.log(arr);
        for (let i = 0; i < arr.length; i++) {
        //   this.arrAllC[arr[i]]=res.data[arr[i]];
          this.$set(this.arrAllC, arr[i], res.data[arr[i]]);
        }
        this.count++;
        if(this.count==3){
             loadingInstance.close();
        }
      });
    }
  }
};
</script>
<style scoped>
    #city{
        background-color: lightgray;
    }
    #title{
        background-color: blue;
        padding: 0.15rem 0.08rem;
        overflow: hidden;
    }
    #title>span{
        color: white;
        font-size: 0.15rem;
        float: left;
    }
    #imgMe{
      width: 0.25rem;
      position: absolute;
      right: 0.2rem;
      top: 0.08rem;
    }
    #login{
        color: white;
        font-size: 0.15rem;
        float: right;
    }
    #location{
         background-color: white;
    }
    #location>p{
        padding: 0.15rem 0.08rem;
        font-size: 0.1rem;
    }
    p>span:nth-child(2){
        float: right;
        color: gray;
        font-weight: bold;
    }
    #guess{
        color: blue;
        font-size: 0.18rem;
        padding: 0.1rem 0.08rem;
        border-top: 0.01rem solid gray;
        border-bottom: 0.02rem solid gray;
    }
    #guess>img{
        width: 0.18rem;
        float: right;
    }
    #hotCity{
        margin-top: 0.1rem;
        background-color: white;
        overflow: hidden;
    }
    #hotCity p{
        border-top: 0.02rem solid gray; 
        padding: 0.08rem;
        font-size: 0.1rem;
    }
    #hotCity li{
        float: left;
        width: 0.929rem;
        height: 0.35rem;
        color: blue;
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.35rem;
        border-top: 0.01rem solid gray;
        border-right: 0.01rem solid gray;
    }
    #hotCity li:nth-child(5),#hotCity li:nth-child(9){
        border-right:none;
    }
    #hotCity li:nth-child(9),#hotCity li:nth-child(6),#hotCity li:nth-child(7),#hotCity li:nth-child(8){
        border-bottom: 0.01rem solid gray;
    }
    #allCity{
        overflow: hidden;
    }
    #allCity>ul{
        background-color:white;
        margin-top: 0.1rem;
        border-top: 0.02rem solid  gray;
        border-bottom: 0.01rem solid  gray;
    }
     #allCity>ul>p{
        font-size: 0.1rem;
        padding: 0.08rem;
     }
     #allCity>ul>p>span{
         color: gray;
         
     }
     #address{
         overflow: hidden;
     }
     #address>li{
        float: left;
        width: 0.929rem;
        height: 0.35rem;
       
        font-size: 0.15rem;
        text-align: center;
        line-height: 0.35rem;
        border-top: 0.01rem solid gray;
        border-right: 0.01rem solid gray;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
     }
     #cityname{
        color: black;
     }
     #address>li:nth-child(4n){
         border-right:none;
     }
     #address>li:nth-last-child(4), #address>li:nth-last-child(3), #address>li:nth-last-child(2), #address>li:nth-last-child(1){
         border-bottom:0.01rem solid gray;
     }
</style>