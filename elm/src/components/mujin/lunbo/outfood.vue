<template>
  <div>
       <div id="title">
      <router-link :to="'/search?show=true'"><img @click="search()" src="../../../../static/img/find.png"></router-link>
      <router-link to="/city">
        <span>{{$store.state.foodName}}</span>
      </router-link>
      <router-link to="/login1">
        <p id="login1" v-if="!disp">登陆|注册</p>
      </router-link>
      <router-link to="/mine" >
        <img id="me" v-if="disp" src="../../../../static/img/me.png">
      </router-link>
    </div>
    <div id="lunbo">
      <swiper v-if="this.data.length>0" :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <div class="sw1">
            <div :key="i" v-for="(v,i) in data">
              <router-link :to="'/lunbo?id='+v.id+'&title='+v.title+'&latitude='+geo.latitude+'&longitude='+geo.longitude">
                <img v-if="i<8" class="img1" :src="'https://fuss10.elemecdn.com'+v.image_url" alt>
                <p class="p1" v-if="i<8">{{v.title}}</p>
              </router-link>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="sw1">
            <div :key="i" v-for="(v,i) in data">
              <router-link :to="'/lunbo?id='+v.id+'&title='+v.title+'&latitude='+geo.latitude+'&longitude='+geo.longitude">
                <img class="img1" v-if="i>7" :src="'https://fuss10.elemecdn.com'+v.image_url" alt>
                <p class="p1" v-if="i>7">{{v.title}}</p>
              </router-link>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <router-view></router-view>
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
  name: "outfood",
  data() {
    return {
      data: [],
      lolas:{},
      geo:{},
      disp:false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        effect: "slide"
      }
    };
  },
  created() {
    // console.log(this.$route.query);
    // console.log(this.$store.state.Dlat);
   this.lolas.latitude = this.$store.state.Dlat;
   this.lolas.longitude = this.$store.state.Dlon;
    this.first();
    this.second();
     if(this.$route.query.username){
      this.disp=true
    }else{
      this.disp=false
    }
  },
  methods: {
    first() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.data = res.data;
      });
    },
    second(){
      const api = "https://elm.cangdu.org/v2/pois/"+this.$store.state.Dlat+","+this.$store.state.Dlon;
      this.$http({
        url:api,
        method:"get"
      }).then(res=>{
        this.geo = res.data;
        console.log(this.geo);
        if(this.$store.state.show){
          this.$store.state.show=false;
          this.$store.commit("search1",this.geo.latitude);
         this.$store.commit("search2",this.geo.longitude);
         this.$store.commit("foodName",this.geo.name);
        }
      })
    }
  }
};
</script>
<style scoped>
#login1{
  color: white;
  float: right;
  margin-top: 0.03rem;
}
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
#title {
  background-color: #3190e8;
  padding: 0.1rem 0.08rem;
  overflow: hidden;
  width: 3.59rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
#title  img {
  width: 0.25rem;
  float: left;
}
#title span {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 1.5rem;
}
#me{
  width: 0.25rem;
  position: absolute;
  right: 0.2rem;
  top: 0.08rem;
}

#lunbo {
  margin-top: 0.5rem;
}
.sw1 {
  width: 3.75rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 0.2rem;
}
.sw1 div {
  width: 25%;
  box-sizing: border-box;
  text-align: center;
}
.img1 {
  width: 0.6rem;
}
.p1 {
  color: gray;
}
</style>