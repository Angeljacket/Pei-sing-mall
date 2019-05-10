<template>
  <div class="addressList">
    <x-header :left-options="{backText: ''}">收货地址管理</x-header>
    <list-box :data="list"></list-box>
    <div class="BtnBox">
      <router-link
        tag="div"
        class="btn"
        to="/addressPush"
      >
        <x-icon type="ios-plus" size="25" class="cell-x-icon"></x-icon><p>添加地址</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import listBox from './list'
export default {
  name: 'addressList',
  components: {
    XHeader,
    listBox
  },
  computed: {
    list () {
      return this.$store.state.addressLine
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    request () {
      let id = this.$store.state.user.openid
      let This = this
      this.axios.get(`/XCXHomeShop/api/useraddress/list?openid=${id}`)
        .then(function (res) {
          This.$store.state.addressLine = res.data.data
          console.log(res.data.data)
        })
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        })
    }
  },
  created () {
    this.request()
  }
}
</script>

<style scoped lang="stylus">
  .addressList >>> .vux-header
    background #fff
  .addressList >>> .vux-header-title
    height 80px
    line-height 2.2
    font-size 34px
    color: #000
  .addressList >>> .vux-header .vux-header-left .left-arrow
    top calc(50% + 10px)
  .BtnBox
    position: fixed
    bottom 30px
    width 100%
    .btn
      width max-content
      padding 20px 70px
      background #ff2440
      display flex
      justify-content center
      align-items center
      color: #fff
      border-radius 50px
      font-size 28
      margin 0 auto
  .cell-x-icon
    display: block;
    fill: #fff
    margin-right 10px
</style>
