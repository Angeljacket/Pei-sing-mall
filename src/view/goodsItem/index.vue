<template>
  <div class="goodsItem">
    <x-header :left-options="{backText: ''}">商品详情</x-header>
    <div class="banner">
      <goods-img :data="goodsBanner"></goods-img>
    </div>
    <goods-countdown :data="goodsData"></goods-countdown>
    <div class="goodsTitle goodsHShow">
      {{goodsData.goods.categoryName}}{{goodsData.goods.name}}
    </div>
    <div class="goodsHShow">
      <goods-info :data="specification"></goods-info>
    </div>
    <div class="goodsHShow">
      <goods-details :data="goodsDetailsData"></goods-details>
    </div>
    <div class="goodsHShow">
      <goods-tis></goods-tis>
    </div>
    <div class="goodsbuy">
      <goods-buy @goodsBuy="goodsBuy"></goods-buy>
    </div>
    <popup v-model="show">
      <div class="goodsAdd">
        <div class="goodsHeader vux-1px-b">
          <div class="goodsImg">
            <img :src="goodsBanner[0]" alt="">
          </div>
          <div class="goodsTisInfo">
            <h4>￥{{dlPic / 100}}</h4>
            <p class="kc">库存{{goodsData.products[0].stock}}件</p>
            <p>已选:<span
              v-for="(item, index) of goodsCs"
              :key="index"
            >{{item}}</span></p>
          </div>
        </div>
        <goods-btn
          v-for="(item, index) of specification"
          :key="index"
          :data="{item, index}"
          @goodsCsShow="goodsCsShow"
        ></goods-btn>
        <div class="goodsNub">
          <div class="nub">
            购买数量
          </div>
          <x-number v-model="num" :min="1"></x-number>
        </div>
        <div class="goodsBtn" @click="pushGoods">
          确定
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import { XHeader, Popup, XNumber } from 'vux'
import goodsImg from './goodsImg'
import goodsCountdown from './goodsCountdown'
import goodsInfo from './goodsInfo'
import goodsDetails from './goodsDetails'
import goodsTis from './prompt'
import goodsBuy from './goodsBuy'
import goodsBtn from './goodsBtn'
export default {
  name: 'index',
  components: {
    XHeader,
    goodsImg,
    goodsCountdown,
    goodsInfo,
    goodsDetails,
    goodsTis,
    goodsBuy,
    Popup,
    goodsBtn,
    XNumber
  },
  data () {
    return {
      // 商品轮播数据
      goodsBanner: [{}],
      // 商品数据
      goodsData: {
        goods: {},
        products: [{}]
      },
      // 商品规格
      specification: [],
      // 商品详情页图片
      goodsDetailsData: [],
      // 商品参数
      dlPic: 0,
      num: 1,
      show: false,
      goodsCs: []
    }
  },
  methods: {
    // 用户点击了加入购物车或者立即购买
    goodsBuy () {
      this.show = true
    },
    // 用户选择商品参数
    goodsCsShow (data) {
      // this.goodsCs = data
      // this.goodsCs[data.index] = data
      if (data.data === '') {
        this.goodsCs.splice(data.index, 1, '')
        // this.goodsCs.splice(data.index, 0, '')
      } else {
        this.goodsCs.splice(data.index, 1, data.data)
      }
      // console.log(data)
    },
    // 用户添加商品
    pushGoods () {
      this.goodsData.goods.goodsCs = this.goodsCs
      this.goodsData.goods.num = this.num
      this.goodsData.goods.pucImg = this.goodsBanner[0]
      this.goodsData.goods.iconOff = false
      this.$store.commit('carListPush', this.goodsData)
      this.show = false
      this.$store.state.appAlert = true
    }
  },
  created () {
    window.scrollTo(0, 0)
    // 请求商品信息
    let This = this
    let id = this.$route.params.id
    this.axios.get(`/XCXHomeShop/api/goods/get?goodsId=${id}`)
      .then(function (res) {
        This.goodsBanner = res.data.data.goods.listPic.split(',')
        This.goodsData = res.data.data
        This.goodsDetailsData = res.data.data.goods.detailPic.split(',')
        This.dlPic = This.goodsData.products[0].retailPrice
        console.log(res.data.data)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
    // 请求商品规格
    this.axios.get(`/XCXHomeShop/api/goods/specifications?goodsId=${id}`)
      .then(function (res) {
        This.specification = res.data.data
        console.log(res.data.data)
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      })
  },
  watch: {
    num (to) {
      this.dlPic = this.goodsData.products[0].retailPrice * to
    }
  }
}
</script>

<style scoped lang="stylus">
  .goodsItem
    background #edf2f3
    width 100%
    overflow hidden
  .goodsItem >>> .vux-header
    background #fff
  .goodsItem >>> .vux-header-title
    height 80px
    line-height 2.2
    font-size 34px
    color: #000
  .goodsItem >>> .vux-header .vux-header-left .left-arrow
    top calc(50% + 10px)
  .goodsItem >>> .vux-header .vux-header-left .left-arrow:before
    width 20px
    height 20px
    border-color #000
  .goodsTitle
    height 106px
    font-size 30px
    padding-left 32px
    line-height 3.5
    background #fff
  .goodsHShow
    background #fff
    border-bottom 1px solid #efefef
    border-top 1px solid #efefef
    margin-bottom 16px
  .goodsbuy
    width 100%
    height 100px
    position: fixed
    bottom 0
    left 0
  .goodsItem >>> .vux-popup-dialog
    border-top-left-radius 25px
    border-top-right-radius 25px
  .goodsAdd
    overflow hidden
    padding 18px 18px 0
    box-sizing border-box
    .goodsHeader
      width 100%
      height 230px
      position: relative
      padding-top 10px
      padding-bottom 40px
      .goodsImg
        width 230px
        height 230px
        margin-left 10px
        position relative
        img
          width 100%
          height 100%
      .goodsTisInfo
        position absolute
        left calc(18px + 230px + 50px)
        bottom 34px
        h4
          font-size 30px
          color #ff2540
          font-weight 400
        p
          font-size: 28px;
          color: #313131
        p.kc
          line-height 1.8
          color #7d7d7d
    .goodsNub
      display flex
      justify-content space-between
      align-items center
      padding 20px 0 30px
    .goodsNub >>> input
      height 40px
      margin 0 20px
    .goodsBtn
      width 100%
      padding 20px 0
      color: #fff
      font-size 28px
      border-radius 50px
      background #ff2540
      text-align center
      margin-bottom 20px
</style>
