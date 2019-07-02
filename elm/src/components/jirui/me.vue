<template>
  <div>
    <nav>
      <span class="leftspan">elm.me</span>
      <router-link to="/login">
        <span v-show="!$store.state.boll" class="rightspan">登陆|注册</span>
      </router-link>
      <router-link to="mine">
        <span v-show="$store.state.boll" class="rightspan">
          <span class="el-icon-user"></span>
        </span>
      </router-link>
    </nav>
    <div id="nowCity">
      <span class="leftspan" style="color:gray">当前定位城市:</span>
      <span class="rightspan" style="color:gray;font-size:0.12rem;font-weight:bold">定位不准时,请在城市列表进行选择</span>
    </div>
    <div id="thisCityName" style="color:#3190e8">
      <router-link :to="'/searchAddress?city_Name='+thisCity.name" class="loctioncity">
        {{thisCity.name}}
        <p style="color:black;width=0.12rem;float:right;padding-right:0.07rem">></p>
      </router-link>
    </div>
    <h3 style="padding-left:0.07rem">热门城市</h3>
    <div id="hotCity">
      <div :key="i" v-for="(v,i) in hotCities" style="color:#3190e8" class="hotCities">
        <router-link :to="'/searchAddress?city_Name='+v.name + '&city_Id=' + v.id">{{v.name}}</router-link>
      </div>
    </div>
    <div id="allCities">
      <div class="eryblock">
        <div :key="key" v-for="(value,key) in groupCities">
          <h3>
            {{key}}
            <span v-if="key=='A'" style="font-size:0.08rem;color:gray">(按字母排序)</span>
          </h3>
          <ul>
            <li class="cities" :key="i" v-for="(v,i) in value">
              <router-link :to="'/searchAddress?city_Name='+v.name + '&city_Id=' + v.id">{{v.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Loading } from "element-ui";
var loading;
export default {
  name: "me",
  data() {
    return {
      nowCity: "",
      thisCity: "",
      hotCities: "",
      groupCities: {}
    };
  },
  created() {
    this.getNowCity();
    this.getHotCities();
    this.getGroupCities();
    loading = Loading.service({
      fullscreen: true,
      text: "",
      spinner: "el-icon-loading"
    });
  },
  methods: {
    getNowCity() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res);
        this.nowCity = res;
        this.thisCity = res.data;
      });
    },
    getHotCities() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res);
        this.hotCities = res.data;
      });
    },
    getGroupCities() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
          // this.groupCities[arr[i]] = res.data[arr[i]];
          this.$set(this.groupCities, arr[i], res.data[arr[i]]);
        }
        // this.groupCities = res.data;
        // var arr = [];
        loading.close();
      });
    }
  }
};
</script>
<style scoped>
body {
  background-color: #f5f5f5;
  text-align: center;
  overflow: hidden;
  width: 99%;
}
#nowCity {
  color: #3190e8;
  overflow: hidden;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #fff;
}
nav {
  width: 100%;
  height: 0.5rem;
  font-size: 0.175rem;
  line-height: 0.5rem;
  background-color: #3190e8;
  color: #ffffff;
}
.leftspan {
  float: left;
  padding-left: 0.07rem;
}
.rightspan {
  float: right;
  padding-right: 0.07rem;
}
.eryblock {
  background-color: #fff;
}
#hotCity {
  font-size: 0.14rem;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
}
.hotCities {
  width: 25%;
  height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 0.4rem;
  text-align: center;
  border: 1px solid gray;
  box-sizing: border-box;
}
.eryblock ul {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.cities {
  font-size: 0.14rem;
  width: 25%;
  height: 0.4rem;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 0.4rem;
  text-align: center;
  border: 1px solid gray;
  box-sizing: border-box;
}
#thisCityName {
  width: 98%;
  border: 1px solid gray;
  background-color: #fff;
  height: 0.3rem;
  line-height: 0.3rem;
  padding-left: 0.07rem;
  margin-bottom: 0.07rem;
}
h3 {
  font-size: 0.12rem;
  padding-left: 0.07rem;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #fff;
  width: 98%;
}
.loctioncity {
  font-size: 0.18rem;
}
</style>
