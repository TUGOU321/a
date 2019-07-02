<template>
  <div>
      <keep-alive>
      <router-view ></router-view>
    </keep-alive>
    <div id="form"> 
      <router-link to="/outFood">
          <img   src="../../../../static/img/homeT.png">
      </router-link>
      <router-link :to="'/search?show='+true">
          <img src="../../../../static/img/searchF.png">
      </router-link>
      <router-link to="/order">
          <img src="../../../../static/img/orderF.png">
      </router-link>
      <router-link to="/mine">
          <img src="../../../../static/img/meF.png">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      show1:false,
      show2:true,
      show3:true,
      show4:true,
      datas:{}
    };
  },
  created() {
    this.$store.commit("getL",this.$route.query.latitude);
    this.$store.commit("getN",this.$route.query.longitude);
    console.log(this.$route.query);
    if (this.$route.query.search == 1) {
      if (localStorage.build) {
        if (localStorage.build.indexOf(this.$route.query.build) == -1) {
          localStorage.build += "," + this.$route.query.build;
          localStorage.address += "," + this.$route.query.addr;
          localStorage.latitude += "," + this.$route.query.latitude;
          localStorage.longitude += "," + this.$route.query.longitude;
        }
      } else {
        localStorage.build = this.$route.query.build;
        localStorage.address = this.$route.query.addr;
        localStorage.latitude = this.$route.query.latitude;
        localStorage.longitude = this.$route.query.longitude;
      }
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
}
#form img{
  width: 0.4rem;
  margin: 0.1rem 0.248rem;
}
</style>