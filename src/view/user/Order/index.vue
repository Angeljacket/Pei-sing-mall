<template>
  <div class="OrderIndex">
    <x-header :left-options="{showBack: false}">订单列表</x-header>
    <tab
      :line-width=2
      active-color='#fc378c'
      v-model="indexShow"
    >
      <tab-item
        class="vux-center"
        :selected="demo2 === item"
        v-for="(item, index) in list2"
        @click="demo2 = item.name"
        :key="index"
      >{{item.name}}</tab-item>
    </tab>
    <div class="wrap">
      <swiper
        v-model="indexShow"
        height="10000px"
        :show-dots="false"
        :min-moving-distance="70"
        :threshold="200"
      >
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">
            <box :data="list2[indexShow]" :index="item.id"></box>
          </div>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem, Swiper, SwiperItem } from 'vux'
import Box from './Box'
export default {
  name: 'index',
  components: {
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Box
  },
  data () {
    return {
      list2: [
        {name: '待付款', id: 10},
        {name: '代发货', id: 20},
        {name: '代收货', id: 30},
        {name: '待晒单', id: 40}
      ],
      demo2: '全部',
      indexShow: 0
    }
  },
  mounted () {
    let This = this
    setTimeout(() => {
      This.indexShow = Number(This.$route.query.p)
    }, 10)
    console.log(1, this.indexShow)
  },
  watch: {
    indexShow (to) {
      // 用户点击订单模块的时候跳转到对应模块
      this.$router.replace({path: 'order', query: {p: to}})
      console.log(to)
    }
  }
}
</script>

<style scoped lang="stylus">
  .OrderIndex >>> .vux-header
    background #fff
  .OrderIndex >>> .vux-header-title
    height 80px
    line-height 2.2
    font-size 34px
    color: #000
  .OrderIndex >>> .vux-header .vux-header-left .left-arrow
    top calc(50% + 10px)
//
  .OrderIndex >>> .vux-tab-container
    height 60px
  .OrderIndex >>> .scrollable
    height 60px
  .OrderIndex >>> .vux-tab .vux-tab-item.vux-tab-selected
    font-size 28px
    font-weight 600
  .wrap
    background #F5F5F5
    padding 30px 18px 0 18px
    box-sizing border-box
    width 100%
    height 100%
  .tab-swiper
    width calc(100% - 1px)
    padding 2px
    box-sizing border-box
</style>
