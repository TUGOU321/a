<template>
  <div>
    <div class="flexhere">
      <nav>
        <span class="leftspan">
          <i
            @click="goback"
            class="el-icon-arrow-left"
            style="line-height:0.5rem;width: 13%;float: left;color:white;font-size:0.3rem;"
          ></i>
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
    <footer v-show="show"></footer>
    <ul class="showhere">
      <li @click="go(i)" class="eryres" :key="i" v-for="(v,i) in arr">
        <div :class="'name'">{{v.name}}</div>
        <div :class="'address'">{{v.address}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "searchToAddress",
  data() {
    return {
      city_Name: "",
      city_Id: "",
      keyword: "",
      arr: null,
      show: 1
    };
  },
  created() {
    this.city_Name = this.$route.query.city_Name;
    this.city_Id = this.$route.query.city_Id;
  },
  methods: {
    goback() {
      this.$router.back();
    },
    go(i) {
      this.$store.commit("foundAddress",this.arr[i]);
    //   console.log(this.arr[i])
      this.$router.push({
        name: "newaddress"
      });
    },
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
}
.showhere {
  width: 100%;
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
