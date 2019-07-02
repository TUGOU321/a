import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/tengfei/city/city'
import Citysearch from '@/components/tengfei/city/citysearch'
import Searchdata from '@/components/tengfei/city/searchdata'
import Searchold from '@/components/tengfei/city/searchold'
import Home from '@/components/tengfei/home/home'
import Login from '@/components/tengfei/login/login'
import Reset from '@/components/tengfei/login/reset'
import OutFood from '@/components/tengfei/outFood/outfood'
import Shopdetail from '@/components/tengfei/outFood/shopdetail'
import AllFood from '@/components/tengfei/outFood/allFood'
import Evaluate from '@/components/tengfei/outFood/evaluate'
import Activity from '@/components/tengfei/outFood/activity'
import Fooddet from '@/components/tengfei/outFood/fooddet'
import Order from '@/components/mujin/order/order'
import Search from '@/components/mujin/search/search'
import Outfood from '@/components/mujin/lunbo/outfood'
import SearchAddress from '@/components/jirui/searchAddress'
import Mine from '@/components/jirui/mine'
import Login1 from '@/components/jirui/login'
import Userinfo from '@/components/jirui/userinfo'
import Changeusername from '@/components/jirui/changeusername'
import Editaddress from '@/components/jirui/editaddress'
import Newaddress from '@/components/jirui/newaddress'
import Resetpassword from '@/components/jirui/resetpassword'
import UserBalance from '@/components/jirui/UserBalance'
import Usercoupon from '@/components/jirui/usercoupon'
import Userintegral from '@/components/jirui/userintegral'
import Reward from '@/components/jirui/reward'
import CashCoupon from '@/components/jirui/cashCoupon'
import VipCenter from '@/components/jirui/VipCenter'
import DownloadApp from '@/components/jirui/downloadApp'
import ServiceCenter from '@/components/jirui/serviceCenter'
import VipTips from '@/components/jirui/vipTips'
import PayForVip from '@/components/jirui/payForVip'
import UseCart from '@/components/jirui/useCart'
import PayHistory from '@/components/jirui/payHistory'
import BalanceTips from '@/components/jirui/balanceTips'
import RewardTips from '@/components/jirui/rewardTips'
import ExpiredHongbaos from '@/components/jirui/expiredHongbaos'
import SearchToAddress from '@/components/jirui/searchToAddress'
import CouponTips from '@/components/jirui/couponTips'
import ServiceQA from '@/components/jirui/serviceQA'
import ExchangeHongbao from '@/components/jirui/exchangeHongbao'
import Commend from '@/components/jirui/commend'
import Lunbo from '@/components/mujin/lunbo/lunbo'
import Details from '@/components/mujin/lunbo/details'
import Sort from '@/components/mujin/lunbo/sort'
import Screen from '@/components/mujin/lunbo/screen'
Vue.use(Router)

export default new Router({
  routes: [
    
  
    {
      path: "/userinfo",
      component: Userinfo,
      name: "userinfo"
    },
    {
      path: "/userintegral",
      component: Userintegral,
      name: "userintegral"
    },
    {
      path: "/userBalance",
      component: UserBalance,
      name: "userBalance"
    },
    {
      path: "/vipCenter",
      component: VipCenter,
      name: "vipCenter"
    },
    {
      path: "/vipTips",
      component: VipTips,
      name: "vipTips"
    },
    {
      path: "/payForVip",
      component: PayForVip,
      name: "payForVip"
    },
    {
      path: "/useCart",
      component: UseCart,
      name: "useCart"
    },
    {
      path: "/payHistory",
      component: PayHistory,
      name: "payHistory"
    },
    {
      path: "/balanceTips",
      component: BalanceTips,
      name: "balanceTips"
    },
    {
      path: "/rewardTips",
      component: RewardTips,
      name: "rewardTips"
    },
    {
      path: "/expiredHongbaos",
      component: ExpiredHongbaos,
      name: "expiredHongbaos"
    },
    {
      path: "/searchToAddress",
      component: SearchToAddress,
      name: "searchToAddress"
    },
    {
      path: "/couponTips",
      component: CouponTips,
      name: "couponTips"
    },
    {
      path: "/usercoupon",
      component: Usercoupon,
      name: "usercoupon",
      redirect:"/reward",
      children:[
        {
          path: "/reward",
          component: Reward,
          name: "rewrad"
        },
        {
          path: "/cashCoupon",
          component: CashCoupon,
          name: "cashCoupon"
        }
      ]
    },
    {
      path: "/serviceCenter",
      component: ServiceCenter,
      name: "serviceCenter"
    },
    {
      path: "/serviceQA",
      component: ServiceQA,
      name: "serviceQA"
    },
    {
      path: "/commend",
      component: Commend,
      name: "commend"
    },
    {
      path: "/downloadApp",
      component: DownloadApp,
      name: "downloadApp"
    },
    {
      path: "/login1",
      component: Login1,
      name: "login1"
    },
    {
      path: "/resetpassword",
      component: Resetpassword,
      name: "resetpassword"
    },
    {
      path: "/changeusername",
      component: Changeusername,
      name: "changeusername"
    },
    {
      path: "/editaddress",
      component: Editaddress,
      name: "editaddress"
    },
    {
      path: "/exchangeHongbao",
      component: ExchangeHongbao,
      name: "exchangeHongbao"
    },
    {
      path: "/newaddress",
      component: Newaddress,
      name: "newaddress"
    },
    {
      path: '/searchAddress',
      name: 'searchAddress',
      component: SearchAddress
    },
    {
      path: '/',
      component: City
    },
    {
      path: '/city',
      name:'city',
      component: City
    },
    {
      path: '/citysearch',
      name:"citysearch",
      component: Citysearch,
      redirect:"/searchold",
      children:[
        {
          path: '/searchold',
          name:"searchold",
          component: Searchold,
        },
        {
          path: '/searchdata',
          name:"searchdata",
          component: Searchdata,
        }
      ]
    },
    {
      path: '/home',
      name:"home",
      component: Home,
      children:[
        {
          path: '/',
          name:"Outfood",
          component: Outfood,
          children:[
            {
              path: '/',
              name:"outfood",
              component: OutFood
            },
          ]
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine
        },
        {
          path: '/outFood',
          name:"outFood",
          component: Outfood,
          children:[
            {
              path: '/outfood',
              name:"outfood",
              component: OutFood
            },
          ]
        },
        {
          path: '/order',
          name:"order",
          component: Order
        },
        {
          path: '/search',
          name:"search",
          component: Search
        },
      ]
    },
    {
      path: '/shopdetail',
      name:"shopdetail",
      component: Shopdetail,
      redirect:"/allFood",
      children:[
        {
          path: '/allFood',
          name:"allFood",
          component: AllFood
        },
        {
          path: '/evaluate',
          name:"evaluate",
          component: Evaluate
        }
      ]
    },
    {
      path: '/activity',
      name:"activity",
      component: Activity
    },
    {
      path: '/fooddet',
      name:"fooddet",
      component: Fooddet
    },
    {
      path: '/login',
      name:"login",
      component: Login
    },
    {
      path: '/reset',
      name:"reset",
      component: Reset
    },
    {
      path: '/lunbo',
      name:"lunbo",
      component: Lunbo,
      children:[
        {
          path: '/details',
          name:"details",
          component: Details
        },
        {
          path: '/sort',
          name:"sort",
          component: Sort
        },
        {
          path: '/screen',
          name:"screen",
          component: Screen
        },
        
      ]
    }
  ]
})
