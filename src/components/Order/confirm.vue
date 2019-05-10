<template>
  <div class="qq">
    <div class="Box">
      <div class="xBox">
        <div class="carBtn" v-if="carShow">
          <check-icon :value.sync="Goods.iconOff"></check-icon>
        </div>
        <div class="Img" :class="{show : carShow}">
          <img
            :src="Goods.pucImg" alt="">
        </div>
        <div class="content">
          <p class="bewrite">{{Goods.name || Goods.productName}}</p>
          <div class="format">
            <!--<ul>-->
              <!--<li>-->
                <!--<div class="i"><i class="iconfont icon-dianpu"></i></div>焕姿店铺-->
              <!--</li>-->
              <!--<li>-->
                <!--<div class="i"><i class="iconfont icon-icon-"></i></div>-->
                <!--品牌精选供应链-->
              <!--</li>-->
            <!--</ul>-->
              <p class="color">
                <span
                  v-if="Goods.goodsCs"
                  v-for="(item, index) of Goods.goodsCs"
                  :key="index"
                >{{item}}</span>
                <span v-if="Goods.specifications">{{Goods.specifications}}</span>
              </p>
          </div>
          <div class="jg" :class="{show : !carShow}">
            <span class="let">￥{{picFn || Goods.retailPrice}}</span>
            <span class="rig" v-if="!carShow">x{{Goods.num}}</span>
            <div class="rig" v-else>
              <x-number v-model="Goods.num" :min="1"></x-number>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XNumber, CheckIcon } from 'vux'
export default {
  name: 'confirm',
  props: ['data', 'carShow'],
  components: {
    XNumber,
    CheckIcon
  },
  data () {
    return {
      demo1: false
    }
  },
  computed: {
    Goods () {
      let data
      if (this.data.goods) {
        data = this.data.goods
      } else if (this.data.orderProductList) {
        data = this.data.orderProductList[0]
        data.pucImg = this.data.orderProductList[0].listPic.split(',')[0]
        data.num = 1
      } else {
        data = this.data
        data.num = data.productNumber
        data.pucImg = this.data.listPic.split(',')[0]
      }
      return data
    },
    products () {
      let pic
      if (this.data.products) {
        if (this.data.products[0]) {
          pic = this.data.products[0]
        }
      } else if (this.data.orderProductList) {
        pic = {retailPrice: this.Goods.retailPrice}
      } else {
        pic = {retailPrice: this.Goods.retailPrice}
      }
      return pic
    },
    picFn () {
      return (this.products.retailPrice / 100 * this.Goods.num).toFixed(2)
    }
  }
}
</script>

<style scoped lang="stylus">
  .qq .Box .xBox
    position relative;
    height 280px
    background #fff
    .Img
      position absolute;
      width 200px;
      height 200px;
      top:50px
      left 50px
      overflow: hidden;
    .Img.show
      left 70px
    .content
      position absolute
      overflow: hidden;
      width 450px
      left 300px
      top 50px
  .content .format li
    float left
    line-height 30px
    height 30px
    padding-top 20px
    padding-right 27px
    font-size 20px
  .content .format li .i
    /*width 20px*/
    /*height 20px*/
    /*background #464646*/
    display block
    float left
    line-height 20px
    padding-top 4px
  .content .iconfont
    font-size 20px
    margin-right 14px
  .content .format .color
      /*display alignment-baseline*/
      display -webkit-inline-box
      line-height 80px
  .content .format .color span
      padding-right 20px
      font-size 24px
      color #969696
  .content .jg
    width 100%
    display flex
    justify-content space-between
  .content .jg.show
    width calc(100% - 50px)
  .content .jg span
    font-size 28px
  .content .jg .let
      color #ea0411
      font-weight 600
  .content .jg >>> input
    height 40px
  .content .jg >>> .vux-number-selector-plus
    height 40px
  .content .jg >>> .vux-number-selector-sub
    height 40px
  .content .rig
      float right
      color black
      padding-right 26px
      color #a0a0a0
  .bewrite
    font-size 26px
    padding-right 60px
    line-height 2
    height 100px
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  .carBtn
    position: absolute
    top 50%
    left 10px
  .carBtn >>> i
    font-size 40px;
</style>
