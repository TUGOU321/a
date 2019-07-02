<template>
  <div style="height:100vh;background-color:white;">
    <header
      style="width: 3.75rem; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >问答详情</p>
    </header>
    <div style="line-height:0.3rem;text-align:left;overflow:hidden;width:3.75rem;" v-html="writed"></div>
  </div>
</template>
<script>
export default {
  name: "serviceQA",
  data() {
    return {
      writed: "",
      id: "",
      keyName: ""
    };
  },
  methods: {
    goback() {
      this.$router.back();
    }
  },
  created() {
    this.id = this.$route.query.id;
    // console.log(this.$store.state.serviceCenterinfo);
    if (this.id == 0) {
      this.writed = this.$store.state.serviceCenterinfo.supervipContent;
    } else if (this.id == 1) {
      this.writed = this.$store.state.serviceCenterinfo.signContent;
    } else if (this.id == 2) {
      this.writed = this.$store.state.serviceCenterinfo.rankContent;
    } else if (this.id == 3) {
      this.writed = this.$store.state.serviceCenterinfo.pointtextContent;
    } else if (this.id == 4) {
      this.writed = this.$store.state.serviceCenterinfo.phototutorialContent;
    } else if (this.id == 5) {
      this.writed = this.$store.state.serviceCenterinfo.paymentContent;
    } else if (this.id == 6) {
      this.writed = this.$store.state.serviceCenterinfo.otherContent;
    } else if (this.id == 7) {
      this.writed = this.$store.state.serviceCenterinfo.ontimeContent;
    } else if (this.id == 8) {
      this.writed = this.$store.state.serviceCenterinfo.memberTimesContent;
    } else if (this.id == 9) {
      this.writed = this.$store.state.serviceCenterinfo.memberPartCutContent;
    } else if (this.id == 10) {
      this.writed = this.$store.state.serviceCenterinfo.memberFullCutContent;
    } else if (this.id == 11) {
      this.writed = this.$store.state.serviceCenterinfo.memberContent;
    } else if (this.id == 12) {
      this.writed = this.$store.state.serviceCenterinfo.hongbaoContent;
    } else if (this.id == 13) {
      this.writed = this.$store.state.serviceCenterinfo.freshmanContent;
    } else if (this.id == 14) {
      this.writed = this.$store.state.serviceCenterinfo.forgotContent;
    } else if (this.id == 15) {
      this.writed = this.$store.state.serviceCenterinfo.discountContent;
    } else if (this.id == 16) {
      this.writed = this.$store.state.serviceCenterinfo.disclaimerContent;
    } else if (this.id == 17) {
      this.writed = this.$store.state.serviceCenterinfo.couponContent;
    } else if (this.id == 18) {
      this.writed = this.$store.state.serviceCenterinfo.businessContent;
    } else if (this.id == 19) {
      this.writed = this.$store.state.serviceCenterinfo.balanceContent;
    } else if (this.id == 20) {
      this.writed = this.$store.state.serviceCenterinfo.awesomeRestaurantContent;
    } else if (this.id == 21) {
      this.writed = this.$store.state.serviceCenterinfo.anonymousBuyContent;
    } else if (this.id == 22) {
      this.writed = this.$store.state.serviceCenterinfo.activityContent;
    }
  }
};
</script>