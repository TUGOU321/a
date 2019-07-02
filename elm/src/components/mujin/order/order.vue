<template>
 <div>
     <div id="title">
                   <img @click="back()" src="../../../../static/img/back.png" alt>
      <span>订单</span>
    </div>
    <div id="form"> 
      <router-link to="/outFood">
          <img  src="../../../../static/img/homeF.png">
      </router-link>
      <router-link :to="'/search?show='+true">
          <img  src="../../../../static/img/searchF.png">
      </router-link>
      <router-link to="/order">
        <img  src="../../../../static/img/orderT.png">
      </router-link>
      <router-link to="/mine">
          <img src="../../../../static/img/meF.png">
      </router-link>
    </div>
 </div>
</template>

<script>
 export default {
  name:"order",
  methods: {
      back() {
      this.$router.back();
    }
  }

 }
</script>
<style scoped>
#title {
  background-color: blue;
  width: 3.45rem;
  font-size: 0.2rem;
  padding: 0.15rem;
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;
}
#title>img{
  width: 0.15rem;
  float: left;
}
#title span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
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
</style>