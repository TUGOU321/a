<template>
  <div>
    <ul>
        <li v-for="(item, index) in datas" :key="index" id="search" @click="det(item)">
           <router-link :to="'/home?build='+item.name+'&addr='+item.address+'&latitude='+item.latitude+'&longitude='+item.longitude+'&search=1'"> 
               <p>{{item.name}}</p>
               <p>{{item.address}}</p>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
      name:"searchdata",
      data(){
          return {
              datas:[]
          }
      },
      created(){
          this.datas=this.$route.query;
      },
      methods: {
          det(a){
              this.$store.commit("latA",a.latitude);
              this.$store.commit("lonA",a.longitude);
          }
      },
  }
</script>
<style scoped>
ul{
    background-color: white;
}
    #search{
        border-top: 0.01rem solid rgb(214, 212, 212);
        padding: 0.1rem;
    }
    #search p:nth-child(1){
        font-size: 0.17rem;
        margin-top: 0.1rem;
        margin-bottom: 0.15rem;
        color: rgb(105, 102, 102);
        font-weight: bold;
    }
    #search p:nth-child(2){
        font-size: 0.08rem;
        color: rgb(190, 186, 186);
    }
</style>