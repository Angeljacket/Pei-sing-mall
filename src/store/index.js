import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
// 定义数据
  state: {
    // 用户账户信息
    user: {},
    // 购物车列表
    carList: [],
    // 用户我的订单
    list: [
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userPic1.png', name: '待付款', url: 0},
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userPic2.png', name: '代发货', url: 1},
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userPic3.png', name: '待收货', url: 2},
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userPic4.png', name: '待晒单', url: 3}
    ],
    // 用户个人信息
    list2: [
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userInfoIcon1.png', name: '我的账户', url: '1'},
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userInfoIcon2.png', name: '绑定手机号码', url: '1'},
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userInfoIcon3.png', name: '收货地址', url: '/addresslist'},
      {img: 'http://120.78.175.25/material/GongmaoProject/user/userInfoIcon4.png', name: '联系唯美', url: '1'}
    ],
    // 官方地址字典
    address: [],
    // 用户地址列表
    addressLine: [{}],
    // 支付的时候，收货地址的id
    addressBuyId: '',
    // app页弹窗
    appAlert: false
  },
  // 修改state数据，也是唯一能修改state数据的方法
  mutations: {
    // 定义的方法，参数一: 行参，填入任何字母都可以。  参数二: 传参。
    carListPush (state, upadte) {
      state.carList.unshift(Object.assign({}, JSON.parse(JSON.stringify(upadte))))
      // state.carList.unshift(upadte)
      console.log(state.carList)
      this.commit('localStorageCarList')
    },
    carListTh (state, upadte) {
      state.carList = upadte
      this.commit('localStorageCarList')
    },
    localStorageCarList (state) {
      localStorage.setItem('GongMaoGoods', JSON.stringify(state.carList))
    }
  },
  // 类似于计算属性
  getters: {
    totals (state) {
      return state.p
    }
  },
  // 异步操作，数据请求和定时器必须放在这里执行
  // 在单页面调用：this.$store.dispatch('updateActions', 10)
  actions: {
    updateActions (state, upadte) {
      setTimeout(() => {
        // 触发在vuex定义的方法
        state.commit('updateP', upadte)
      }, 1000)
    }
  }
})
// 把vuex暴露出去
export default store
