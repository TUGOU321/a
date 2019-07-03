<template>
  <div style="position: relative;">
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <router-link to="mine">
        <van-icon  name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
        </router-link>
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >用户信息</p>
    </header>
    <div
      style="border-radius: 50%;position: absolute;right:0.2rem;top:0.75rem;width:0.6rem;height:0.6rem;background-color:deepskyblue;"
    >
      <img style="border-radius: 50%;width:100%" src="../../../static/img/meF.png">
    </div>
    <router-link to="changeusername">
      <div
        style="color:gray;position: absolute;right:0.2rem;top:1.469rem;width:3rem;height:0.5rem;font-size:0.2rem;line-height:0.5rem;text-align: right;"
      >{{$store.state.userName}}</div>
    </router-link>
    <router-link to="resetpassword">
      <div
        style="color:gray;position: absolute;right:0.2rem;top:3.75rem;width:3rem;height:0.5rem;font-size:0.18rem;line-height:0.5rem;text-align: right;"
      >修改</div>
    </router-link>
    <nav style="margin-top:0.15rem;background-color:white;margin-bottom:0.02rem;height:0.8rem;">
      <span
        style="width:3rem;line-height:0.8rem;padding-left:0.15rem;padding-top: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.14rem;"
      >头像</span>
      <span
        style="color:#B0C4DE;float:right;line-height: 0.8rem;font-size:0.2rem;"
        
      ><van-icon name="arrow" /></span>
    </nav>

    <nav style="margin-top:0.02rem;background-color:white;margin-bottom:0.02rem;height:0.5rem;">
      <router-link to="changeusername">
        <span
          style="line-height:0.5rem;padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.14rem;"
        >用户名</span>
        <span
          style="color:#B0C4DE;float:right;line-height: 0.54rem;font-size:0.2rem;"
          
        ><van-icon name="arrow" /></span>
      </router-link>
    </nav>
    <router-link to="editaddress">
      <nav style="position: relative;background-color:white;margin-bottom:0.02rem;height:0.5rem;">
        <span
          style="line-height:0.5rem;padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.14rem;"
        >收货地址</span>
        <span
          style="position: absolute;right:0;color:#B0C4DE;float:right;line-height: 0.54rem;font-size:0.2rem;"
          
        ><van-icon name="arrow" /></span>
      </nav>
    </router-link>
    <nav style="background-color:#F2F2F2;margin-bottom:0.02rem;height:0.35rem;">
      <span
        style="line-height:0.35rem;padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.1rem;"
      >账号绑定</span>
    </nav>
    <nav
      :plain="true"
      @click="open"
      style="background-color:white;margin-bottom:0.02rem;height:  0.5rem;"
    >
      <i style="margin-left:0.15rem;color:blue;" class="el-icon-mobile"></i>
      <span
        style="line-height:0.5rem;padding-top: 0.1rem;padding-bottom: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.14rem;"
      >手机</span>
      <span
        style="color:#B0C4DE;float:right;line-height: 0.54rem;font-size:0.2rem;"
        
      ><van-icon name="arrow" /></span>
    </nav>
    <nav style="background-color:#f2f2f2;margin-bottom:0.02rem;height:  0.35rem;">
      <span
        style="line-height:0.35rem;padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.1rem;"
      >安全设置</span>
    </nav>
    <router-link to="resetpassword">
      <nav style="background-color:white;margin-bottom:0.02rem;height:  0.5rem;">
        <span
          style="line-height:0.5rem;padding-left:0.15rem;padding-top: 0.1rem;padding-bottom: 0.1rem;font-family: Arial, Helvetica, sans-serif;color:#333333;font-size:0.14rem;"
        >登录密码</span>
        <span
          style="color:#B0C4DE;float:right;line-height: 0.54rem;font-size:0.2rem;"
         
        ><van-icon name="arrow" /></span>
      </nav>
    </router-link>
    <el-row>
      <el-button @click="logout" style="width:3.65rem;margin:0.3rem 0.05rem 0 0.05rem" type="danger">退出登陆</el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "userinfo",
  data() {
    return {
      username: "sanhan"
    };
  },
  methods: {
    open() {
      this.$message("请在APP中设置");
    },
    open2() {
      this.$message("退出成功!");
    },
    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "请在app中设置"),
          h("i", { style: "color: teal" }, "--提示")
        ])
      });
    },
    logout(){
      const api = "https://elm.cangdu.org/v2/signout";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.test = res;
        if (res.data.message) {
          this.$store.commit("boll",false);
          this.$message("退出成功!");
          this.$store.state.userData.gift_amount = "0";
          this.$router.push({
            name: "mine"
          });
        }
      });
    }
  }
};
</script>