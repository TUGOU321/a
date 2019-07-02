<template>
  <div>
    <header
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;background-color: #3190e8;color: #ffffff;text-align: center;"
    >
      <span class="leftspan">
        <van-icon @click="goback()" name="arrow-left"  style="font-size:0.3rem;width: 13%;line-height: 0.5rem;float: left;" color="white" />
      </span>
      <p
        class="tittle"
        style="width: 87%;font-size: 0.2rem;text-align: center;font-weight: bold;"
      >会员中心</p>
    </header>
    <div
      style="width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;color: #666666;text-align: center;"
    >
      <span style="font-size:0.15rem;padding-left:0.1rem;float: left;">为账户</span>
      <span
        style="font-size:0.15rem;float:left;color:black;font-weight:bold;"
      >{{$store.state.userName}}</span>
      <span style="font-size:0.15rem;float: left;">购买会员</span>
    </div>
    <div style="background-color:white;height:2.5rem;">
      <div style="height:0.5rem;">
        <span style="line-height:0.5rem;padding-left:0.2rem;float:left;">会员特权</span>
        <router-link to="vipTips">
          <span style="line-height:0.5rem;float:right;color:#666666;font-size:0.14rem;">
            会员说明
            <span
              style="padding-right:0.1rem;line-height:0.5rem;float:right;"
              class="el-icon-arrow-right"
            ></span>
          </span>
        </router-link>
      </div>
      <div style="background-color:white;height:1rem;">
        <img
          style="float:left;height:0.5rem;margin:0.25rem 0 0.05rem 0.2rem;"
          src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII="
          alt
        >
        <div style="width:3rem;float:right;">
          <div style="font-size:0.18rem;line-height:0.3rem;height:0.3rem;">减免配送费</div>
          <div
            style="color:#666666;font-size:0.05rem;line-height:0.3rem;height:0.3rem;"
          >每月减免30单，每日可减免3单，每单最高减4元</div>
          <div style="color:#666666;font-size:0.05rem;sline-height:0.3rem;height:0.3rem;">蜂鸟专送专享</div>
        </div>
      </div>
      <div style="background-color:white;height:1rem;">
        <img
          style="float:left;height:0.5rem;margin:0.25rem 0 0.05rem 0.2rem;"
          src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII="
          alt
        >
        <div style="width:3rem;float:right;">
          <div style="font-size:0.18rem;line-height:0.3rem;height:0.3rem;">减免配送费</div>
          <div
            style="color:#666666;font-size:0.05rem;line-height:0.3rem;height:0.3rem;"
          >每月减免30单，每日可减免3单，每单最高减4元</div>
          <div style="color:#666666;font-size:0.05rem;sline-height:0.3rem;height:0.3rem;">蜂鸟专送专享</div>
        </div>
      </div>
    </div>
    <div
      style="margin-top:0.05rem;background-color:white;width: 100%; height: 1rem;font-size: 0.175rem;line-height: 0.5rem;color: #666666;text-align: center;"
    >
      <div>
        <p style="font-size:0.15rem;padding-left:0.1rem;text-align: left;">开通会员</p>
      </div>
      <div style="text-align: left;">
        <span style="font-size:0.15rem;padding-left:0.1rem;">1个月</span>
        <span style="font-size:0.15rem;color:orange;">￥20</span>
        <span style="font-size:0.15rem;padding-right:0.1rem;float:right;">
          <router-link to="payForVip">
            <el-button type="primary">购买</el-button>
          </router-link>
        </span>
      </div>
    </div>
    <router-link to="useCart">
      <div
        style="background-color:white;margin-top:0.05rem;width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;color: #666666;text-align: center;"
      >
        <span style="float:left;padding-left:0.1rem;font-size:0.15rem;">兑换会员</span>
        <span style="font-size:0.12rem;float:right;">
          使用卡密卡号
          <span
            style="line-height:0.5rem;padding-right:0.1rem;float:right;"
            class="el-icon-arrow-right"
          ></span>
        </span>
      </div>
    </router-link>
    <router-link to="payHistory">
    <div
      style="background-color:white;margin-top:0.05rem;width: 100%; height: 0.5rem;font-size: 0.175rem;line-height: 0.5rem;color: #666666;text-align: center;"
    >
      <span style="float:left;padding-left:0.1rem;font-size:0.15rem;">购买记录</span>
      <span style="font-size:0.12rem;float:right;">
        开发票
        <span
          style="line-height:0.5rem;padding-right:0.1rem;float:right;"
          class="el-icon-arrow-right"
        ></span>
      </span>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "vipCenter",
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
</style>
