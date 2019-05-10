<template>
  <div class="Settlement">
    <x-header :left-options="{backText: ''}">商品详情</x-header>
    <address-box></address-box>
    <div class="list">
      <goods-list
        v-for="(item, index) of list"
        :key="index"
        :data="item"
      ></goods-list>
    </div>
    <div class="Box">
      <buy-box :data="data"></buy-box>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import AddressBox from './address'
import goodsList from '../../components/Order/NewConfirm'
import buyBox from './buy'
export default {
  name: 'index',
  components: {
    XHeader,
    AddressBox,
    goodsList,
    buyBox
  },
  data () {
    return {
      list: [],
      data: {}
    }
  },
  created () {
    let This = this
    let id
    let openid = this.$store.state.user.openid
    this.axios.get(`/XCXHomeShop/api/order/list?openid=${openid}&orderStatus=10`)
      .then(function (res) {
        console.log(This.$route.query.p)
        id = This.$route.query.p
        This.list = res.data.data[id].orderProductList
        This.data = res.data.data[id]
        console.log(res.data.data)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
</script>

<style scoped lang="stylus">
  .Settlement >>> .vux-header
    background #fff
  .Settlement >>> .vux-header-title
    height 80px
    line-height 2.2
    font-size 34px
    color: #000
  .Settlement >>> .vux-header .vux-header-left .left-arrow
    top calc(50% + 10px)
  .Settlement >>> .vux-header .vux-header-left .left-arrow:before
    width 20px
    height 20px
    border-color #000
  .list
    padding-bottom 120px
  .Box
    position fixed
    width 100%
    height 120px
    bottom 0px
    background #fff
</style>
