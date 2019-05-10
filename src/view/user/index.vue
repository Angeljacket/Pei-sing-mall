<template>
  <div class="user">
    <!--标题-->
    <div class="Title">
      <div
        class="headerBox"
        :style="hPx"
      >
        <x-header :left-options="{showBack: false}">我的</x-header>
      </div>
    </div>
    <header>
      <!--用户信息-->
      <div class="header" :style="'top:-' + Tx / 12 + 'px'">
        <header-box :data="user" :show="Tx"></header-box>
      </div>
      <div class="mark" :style="'opacity:' + this.Tx / 200"></div>
    </header>
    <main>
      <div class="Box">
        <div class="BoxBar">
          <balance></balance>
        </div>
        <div class="BoxBar">
          <box-title @show="show"></box-title>
          <order :data="list" @OrderShow="OrderShow1"></order>
        </div>
        <div class="BoxBar">
          <play-vip></play-vip>
        </div>
        <div class="BoxBar">
          <box-title data="售后中心"></box-title>
        </div>
        <div class="BoxBar">
          <box-title data="个人信息"></box-title>
          <order :data="list2" @OrderShow="OrderShow2"></order>
        </div>
        <div class="BoxBar">
          <offer></offer>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import HeaderBox from './HeaderBox'
import Balance from './Balance'
import Order from './Order'
import playVip from './playVip'
import Offer from './Offer'
export default {
  name: 'index',
  components: {
    XHeader,
    HeaderBox,
    Balance,
    Order,
    playVip,
    Offer
  },
  data () {
    return {
      Tx: '',
      scrollShow: true,
      headerShow: '',
      hPx: '',
      list: this.$store.state.list,
      list2: this.$store.state.list2
    }
  },
  methods: {
    OrderShow1 (data) {
      this.$router.push({path: 'order', query: {p: data.url}})
      console.log(data)
    },
    OrderShow2 (data) {
      this.$router.push(data.url)
    },
    show () {
      this.$router.push('order?p=0')
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  mounted () {
    let This = this
    let header = parseInt(window.getComputedStyle(document.getElementsByClassName('headerBox')[0]).height)
    let top = document.getElementsByTagName('main')[0].offsetTop - 10
    // let headerShow
    window.addEventListener('scroll', function () {
      if (This.scrollShow) {
        // console.log(document.getElementsByTagName('main')[0].offsetTop)
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        This.Tx = scrollTop
        This.headerShow = top - This.Tx - header
        // console.log(headerShow)
      }
    })
  },
  watch: {
    headerShow (to) {
      let sty
      if (to <= 0) {
        sty = 'top:' + to + 'px'
        document.getElementsByClassName('Box')[0].className = 'Box show'
        document.getElementsByClassName('BoxBar')[0].className = 'BoxBar show'
      } else {
        document.getElementsByClassName('Box')[0].className = 'Box'
        document.getElementsByClassName('BoxBar')[0].className = 'BoxBar'
      }
      this.hPx = sty
    }
  }
}
</script>

<style scoped lang="stylus">
  .user .Title
    width 100%
    height 80px
    .headerBox
      position: fixed
      width 100%
      top 0
      z-index: 9;
  .user >>> .vux-header
    background #fff
  .user >>> .vux-header-title
    height 80px
    line-height 2.2
    font-size 34px
    color: #000
  .user >>> .vux-header .vux-header-left .left-arrow
    top calc(50% + 10px)
  //
  .user header
    position: relative
    height 260px
    .header
      position: absolute
      width 100%
    .mark
      position: absolute
      width 100%
      height 100%
      background #000
      top 0
  main
    position relative
    width 100%
    top: -20px
    .Box
      position: absolute
      top: -20px
      border-top-left-radius 25px
      border-top-right-radius 25px
      width 100%
      background #edf1f4
      padding-bottom 108px
      .BoxBar
        background #fff
        margin-bottom 15px
      .BoxBar:nth-child(1)
        border-top-left-radius 25px
        border-top-right-radius 25px
      .BoxBar.show
        border-top-left-radius 0
        border-top-right-radius 0
    .Box.show
      border-top-left-radius 0
      border-top-right-radius 0
</style>
