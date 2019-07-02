<template>
  <div>
    <p id="old">搜索历史</p>
    <ul>
        <li v-for="(item, index) in buildArr" :key="index" :v-model="buildArr">
          <router-link :to="'/home?i=1&n=0&latitude='+latArr[index]+'&longitude='+lonArr[index]+'&build='+item+'&address='+addressArr[index]"><p>{{item}}</p><p>{{addressArr[index]}}</p></router-link>
        </li>
    </ul>
    <p @click="remove()" v-if="buildArr.length > 0" id="clear">清空所有</p>
  </div>
</template>
<script>
import { fail } from 'assert';
  export default {
      name:"searchold",
      data(){
         return {
              datas:{},
              buildArr:[],
              addressArr:[],
              latArr:[],
              lonArr:[]
         }
      },
      created(){
            this.$set(this.datas,"build",localStorage.build);
            this.$set(this.datas,"address",localStorage.address);
            this.$set(this.datas,"latitude",localStorage.latitude);
            this.$set(this.datas,"longitude",localStorage.longitude);
            this.buildArr = this.datas.build.split(",");
            this.addressArr = this.datas.address.split(",");
            this.latArr = this.datas.latitude.split(",");
            this.lonArr = this.datas.longitude.split(",");
      },
      methods:{
          remove(){
             localStorage.removeItem("build");
             localStorage.removeItem("address");
             localStorage.removeItem("latitude");
             localStorage.removeItem("longitude");
             this.buildArr=[];
             this.addressArr=[];
             this.latArr=[];
             this.lonArr=[];
          }
      }
  }
</script>
<style scoped>
  #old{
    font-size: 0.15rem;
    border-top: 0.01rem solid gray;
    border-bottom: 0.01rem solid gray;
    padding: 0.08rem 0 0.08rem 0.08rem;
  }
  #clear{
    text-align: center;
    font-size: 0.18rem;
    background-color: white;
    padding: 0.1rem;
  }
  li{
    background-color: white;
    border-top: 0.01rem solid gray;
    border-bottom: 0.01rem solid gray;
  }
  li p:first-child{
    font-size: 0.19rem;
    font-weight: bold;
    margin: 0.1rem 0 0.05rem 0.1rem;
  }
  li p:last-child{
    font-size: 0.14rem;
     margin: 0.1rem 0 0.1rem 0.1rem;
  }
</style>