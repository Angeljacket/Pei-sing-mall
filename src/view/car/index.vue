<template>
  <div class="car">
    <x-header :left-options="{showBack: false}">购物袋</x-header>
    <main>
      <car-list
        :carShow="true"
        v-for="(item, index) of list"
        :key="index"
        :data="item"
      ></car-list>
    </main>
    <div class="Settlement vux-1px-t vux-1px-b showBox">
      <div class="btn showBox">
        <div @click="ff">
          <check-icon :value.sync="val">全选</check-icon>
        </div>
      </div>
      <div class="info">
        <div class="pic">
          <p>已优惠：999</p>
          <p>合计：{{heji}}</p>
        </div>
        <div class="buyBtn showBox" v-if="buyShow">
          <span>结算中</span>
        </div>
        <div class="buyBtn showBox" v-if="!buyShow && js !== ''" @click="undone(1)">
          <span>去结算{{js}}</span>
        </div>
        <div class="buyBtn showBox no" v-else-if="!buyShow && js === ''" @click="undone(0)">
          <span>去结算{{js}}</span>
        </div>
      </div>
    </div>
    <div class="addressList" v-show="show">
      <list-box :data="userressList" @addressShow="addressShow"></list-box>
    </div>
  </div>
</template>

<script>
import { XHeader, CheckIcon } from 'vux'
import carList from '../../components/Order/confirm'
import listBox from '../../components/address/list'
export default {
  name: 'index',
  components: {
    XHeader,
    CheckIcon,
    carList,
    listBox
  },
  data () {
    return {
      val: false,
      heji: 0,
      buyShow: false,
      show: false
    }
  },
  methods: {
    ff () {
      let This = this
      setTimeout(() => {
        This.list.map(function (item) {
          item.goods.iconOff = This.val
        })
      }, 10)
    },
    undone (msg) {
      if (msg) {
        this.show = true
      } else {
        alert('请选择商品哦~！')
      }
    },
    addressShow (data) {
      this.$store.state.addressBuyId = data.id
      this.buyShow = true
      let id = []
      let num = []
      // 循环选中的商品
      let list = this.list.filter(itme => itme.goods.iconOff)
      list.forEach(el => {
        // push选中的商品id以及数量，请求的时候进行join
        // id：商品id多个商品用，分割
        id.push(el.goods.id)
        // num：商品数量，多个数量用，分割
        num.push(el.goods.num)
        // console.log(el.goods)
      })
      let This = this
      // 读取用户openid
      let openid = this.$store.state.user.openid
      // let adder = this.$store.state.user.openid
      this.axios.post(`/XCXHomeShop/api/order/add?openid=${openid}&productIds=${id.join(',')}&productNumbers=${num.join(',')}&userAddressId=${this.$store.state.addressBuyId}`)
        .then(function (res) {
          // 订单提交成功后把，该本地储存的商品删除
          This.$store.commit('carListTh', This.list.filter(itme => !itme.goods.iconOff))
          // 按钮切换，切换成购买成功
          This.buyShow = false
          // 商品提交之后，跳转到购买成功页面
          This.$router.push({path: 'settlement', query: {p: 0}})
          // This.$router.push('/settlement')
          console.log(res.data)
        })
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        })
    }
  },
  computed: {
    list () {
      return this.$store.state.carList
    },
    js () {
      let js
      if (this.list.filter(itme => itme.goods.iconOff).length === 0) {
        js = ''
      } else {
        js = `(${this.list.filter(itme => itme.goods.iconOff).length})`
      }
      return js
    },
    userressList () {
      return this.$store.state.addressLine
    }
  },
  watch: {
    list: {
      handler: function (newValue) { // handler不能改写
        this.heji = 0
        this.val = newValue.every(function (item) {
          return item.goods.iconOff
        })
        newValue.filter(item => item.goods.iconOff).forEach(el => {
          this.heji += el.products[0].retailPrice / 100 * el.goods.num
          console.log(el.goods)
        })
        // console.log(.reduce((n, val) => n + val.products[0].retailPrice))
      },
      deep: true // 深度监控开启，deep不能改写。
    }
  }
}
</script>

<style scoped lang="stylus">
  .car >>> .vux-header
    background #fff
  .car >>> .vux-header-title
    height 80px
    line-height 2.2
    font-size 34px
    color: #000
  .car >>> .vux-header .vux-header-left .left-arrow
    top calc(50% + 10px)
    //
  main
    padding-bottom 260px
    overflow hidden
  .showBox
    display flex
    justify-content space-between
    align-items center
  .Settlement
    position fixed
    width 100%
    bottom 106px
    height 120px
    background #fff
    .btn >>> i
      font-size 38px;
    .info
      display flex
      height 100%
      .pic
        padding 10px 0
        line-height 2
        font-size 28px;
        color #000000
        margin-right 20px
      .buyBtn
        width 200px
        height 100%
        background #000000
        font-size 30px
        color: #fff
        justify-content center
      .buyBtn.no
        background #bababa
  .addressList
    position: fixed
    top 0
    width 100%
    height 100%
    background #fff
    z-index: 9999;
</style>
