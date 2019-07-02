<template>
  <div style="position: relative;">
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <router-link to="userinfo">
          <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
        </router-link>
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >编辑地址</p>
    </header>
    <ul>
      <li
        :key="i"
        v-for="(v,i) in address"
        style="position: relative;overflow:hidden;line-height:0.25rem;margin:0.1rem 0 0.1rem 0;background-color:#fff8c3;height:0.8rem;"
      >
      <div style="width:3rem;folat:left;">
        <span style="line-height:0.3rem;overflow:hidden;width:2rem;">{{v.address}}</span>
        <div
          style="position: absolute;right:0;top:0;line-height:0.8rem;margin-right:0.1rem;"
          @click="deleteAddress(i)"
          class="el-icon-delete"
        ></div>
        <div>{{v.phone_bk}}</div>
        </div>
      </li>
    </ul>
    <router-link to="newaddress">
      <nav style="margin-top:0.1rem;background-color:white;margin-bottom:0.02rem;height:0.5rem;">
        <span
          style="line-height:0.5rem;padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.14rem;"
        >新增地址</span>
        <span
          style="color:#B0C4DE;float:right;line-height: 0.5rem;font-size:0.2rem;"
          class="el-icon-arrow-right"
        ></span>
      </nav>
    </router-link>
    <!-- {{this.$store.state.userAddress}} -->
  </div>
</template>
<script>
export default {
  name: "addaddress",
  data() {
    return {
      address: ""
    };
  },
  created() {
    this.setUserAddress();
  },
  methods: {
    goback() {
      this.$router.back();
    },
    deleteAddress(i) {
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userData.user_id +
        "/addresses/" +
        this.$store.state.foundAddress[i].id;
      this.$http({
        url: api,
        method: "DELETE"
      }).then(res => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
          this.$message(res.data.success);
          this.address.splice(i, 1);
        }
      });
    },
    setUserAddress() {
      const api =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.userData.user_id +
        "/addresses";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
          this.$store.commit("foundAddress", res.data);
          this.address = res.data;
          // console.log(res.data);
          // console.log(this.$store.state.foundAddress)
        }
      });
    }
  }
};
</script>