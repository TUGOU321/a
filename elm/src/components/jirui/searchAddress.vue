<template>
  <div>
    <div class="flexhere">
      <nav>
        <span class="leftspan">
          <router-link :to="'/'">
             <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
          </router-link>
        </span>
        <p class="tittle">{{city_Name}}</p>
        <span class="changeCity">切换城市</span>
      </nav>
      <div class="content">
        <input v-model="keyword" type="text" placeholder="输入学校, 商务楼, 地址">
        <div id="sub" @click="getSerachRes()">
          <h3>提交</h3>
        </div>
      </div>
    </div>
    <footer v-show="show">
      <p>搜索历史</p>
      <ul>
        <li :key="i" v-for="(v,i) in hisarr"></li>
      </ul>
    </footer>
    <ul class="showhere">
      <li class="eryres" :key="i" v-for="(v,i) in arr">
        <div :class="'name'">{{v.name}}</div>
        <div :class="'address'">{{v.address}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "searchAddress",
  data() {
    return {
      city_Name: "",
      city_Id: "",
      keyword: "",
      arr: null,
      hisarr:null,
      show:1
    };
  },
  created() {
    //   console.log(this.$route.query);
    this.city_Name = this.$route.query.city_Name;
    this.city_Id = this.$route.query.city_Id;
    // console.log(this.city_Name, this.city_Id);
  },
  methods: {
    getSerachRes() {
      this.show = false;
      const api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.city_Id +
        "&keyword=" +
        this.keyword +
        "&type=search";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res);
        this.arr = res.data;
      });
    }
  }
};
</script>
<style scoped>
.flexhere {
  width: 100%;
  /* height: 20vh; */
  /* position: fixed; */
  /* top: 0; */
}
.showhere {
  width: 100%;
  overflow: scroll;
}
nav {
  width: 100%;
  height: 0.5rem;
  font-size: 0.175rem;
  line-height: 0.5rem;
  background-color: #3190e8;
  color: #ffffff;
  text-align: center;
}
.tittle {
  width: 74%;
  font-size: 0.2rem;
  text-align: center;
  font-weight: bold;
  float: left;
}
.changeCity {
  width: 13%;
  font-size: 0.1rem;
  float: right;
  white-space: nowrap;
  overflow: hidden;
}
input {
  width: 90%;
  margin: 0.07rem 5%;
  height: 0.3rem;
  border-radius: 2%;
}
#sub {
  width: 90%;
  height: 0.3rem;
  margin: 0.07rem 5%;
  text-align: center;
  color: white;
  border-radius: 2%;
  background-color: #3190e8;
  line-height: 0.3rem;
}
.eryres {
  border-top: 1px solid gray;
  line-height: 0.3rem;
}
.name {
  color: black;
  font-size: 0.15rem;
}
.address {
  color: gray;
  font-size: 0.1rem;
}
</style>
