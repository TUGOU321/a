import Vue from 'vue'
import Vuex from 'vuex'
//导入状态 state
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
// import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)
// store存储器用来存储组件之间共享的数据以及调用的方法
const store = new Vuex.Store({
  // plugins: [createPersistedState()],
    //共享状态：类似组件中的data数据源
    state,
    //修改状态的方法：类似组件中的methods
    mutations,
    //getters  类似于组件中的计算属性，用来处理state状态值的
    getters,
    // actions  类似于mutations 用来创建方法，只不过不处理状态值，调用mutations中的方法，action用来处理异步操作
    actions
  })
  //导出存储的store对象，给main.js使用
  export default store;