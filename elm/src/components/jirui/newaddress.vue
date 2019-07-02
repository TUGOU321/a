<template>
  <div>
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <router-link to="editaddress">
         <i 
            class="el-icon-arrow-left"
            style="color:white;font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;"
          ></i>
          </router-link>
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >新增地址</p>
    </header>
    <div style="margin-top:0.1rem;width:3.75rem;background-color:white;">
      <el-input v-model="yourname" 
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="请填写你的姓名"
      ></el-input>
      <router-link to="searchToAddress">
      <el-input v-model="landmark.address"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="小区/写字楼/学校等"
      ></el-input>
      </router-link>
      <el-input v-model="detailed"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="请填写详细送餐地址"
      ></el-input>
      <el-input v-model="yourphone"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0 0.05rem;"
        placeholder="请填写能够联系到您的手机号"
      ></el-input>
      <el-input v-model="yourotherphone"
        style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0.05rem 0.05rem;"
        placeholder="备用联系电话(选填)"
      ></el-input>
      <el-button @click="uploadAddress" style="font-size:0.15rem;width:3.65rem;margin:0.1rem 0.05rem 0.05rem 0.05rem;" type="success">新增地址</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "newaddress",
  data() {
    return {
        yourname:"",
        landmark:"",
        detailed:"",
        yourphone:"",
        yourotherphone:""
    };
  },
  created() {
    this.landmark = this.$store.state.foundAddress;
  },
  methods: {
      getCode() {
      const api = "https://elm.cangdu.org/v1/users/:user_id/addresses";
      this.$http({
        url: api,
        method: "post",
        data:{
            user_id:$store.state.userData.user_id,
            address:this.landmark,
            address_detail:this.detailed,
            geohash:""

        }
      }).then(res => {
        // console.log(res);
        this.code = res.data.code;
        loading.close();
      });
    },
    uploadAddress(){
      const api = "https://elm.cangdu.org/v1/users/" + this.$store.state.userData.user_id + "/addresses";
      this.$http({
        url: api,
        method: "post",

        data: {
          user_id: this.$store.state.userData.user_id,
          address: this.$store.state.foundAddress.address,
          address_detail: this.detailed,
          geohash:this.$store.state.foundAddress.geohash,
          name:this.yourname,
          phone:this.yourphone,
          phone_bk:this.yourotherphone,
          sex:1,
          tag:"none",
          tag_type:2
        },
        withCredentials: true
      }).then(res => {
        // console.log(res)
        if (res.data.message) {
          alert(res.data.message);
        } else {
          this.$router.push({
            name: "editaddress"
          });
        }
      });
    }
  }
};
</script>
<style scoped>
</style>
