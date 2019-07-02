<template>
  <div id="all">
    <div id="title">
        <img @click="back()" src="../../../../static/img/back.png" alt="">
        <span>{{datas.cityName}}</span>
        <router-link to="/city" id="change">切换城市</router-link>   
    </div>
    <div id="search">
        <input type="text" placeholder="输入学校、商务楼、地址" v-model="searchMsg">
       <button @click="search()">提交</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      name:"citysearch",
      data(){
          return{
              datas:{},
              searchMsg:"",
          }
      },
      created(){
          this.datas=this.$route.query;
          console.log(this.$route);
        //    console.log(this.datas);
      },
      methods:{
          back(){
              this.$router.back();
          },
          search(){
              if(this.searchMsg==""){
                  return;
              }
              this.$http({
              url:'https://elm.cangdu.org/v1/pois?city_id='+this.datas.cityId+'&keyword='+this.searchMsg+'&type=search',
              method:"get",
              withCredentials: true
            }).then(res=>{
                console.log(res);
                // this.searchData=res.data;
                this.$router.push({
                    name:"searchdata",
                    query:res.data
                })
            })
          }
      }
  }
</script>
<style scoped>
    #all{
        background-color: lightgray;
    }
    #title{
        background-color: #3190e8;
        padding: 0.1rem 0.08rem;
        overflow: hidden;
    }
    #title>img{
        width: 0.25rem;
        float: left;
    }
    #title>span{
        font-size: 0.2rem;
        color: white;
        float: left;
        margin-left: 1.2rem;
    }
    #change{
       
        font-size: 0.15rem;
        color: white;
        float: right;
        margin-top: 0.04rem;
    }
    #search{
        background-color: white;
        margin-top: 0.1rem;
        border-top: 0.01rem solid gray;
        border-bottom: 0.01rem solid gray;
    }
    #search>input{
        width: 3.25rem;
        padding: 0.05rem;
        margin: 0.1rem 0.18rem;
        border: 0.01rem solid gray;
    }
     #search button{
        width: 3.35rem;
        height: 0.3rem;
        margin: 0 0.19rem 0.1rem;
        border: none;
        outline: none;
        background-color: #3190e8;
        color: white;
        border-radius: 0.03rem;
     }
</style>