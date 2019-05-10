<template>
  <div class="container-water-fall">
    <waterfall :col='col' :data="data">
      <template >
        <div
          class="cell-item"
          v-for="(item, index) of data"
          :key="index"
          @click="goodsShow(retData(item))"
        >
          <div class="imgBox">
            <!--<x-img :src="item"></x-img>-->
            <img :src="retData(item).imgurl" alt="">
          </div>
          <div class="info">
            <div class="type">
              <span>精选</span>
            </div>
            <div class="title">
              <h4>{{retData(item).brandName}}/{{retData(item).categoryName}}</h4>
              <p>{{retData(item).name}}</p>
            </div>
            <div class="pic">
              <div class="pudatePic">
                ￥{{picFn(item).retailPrice / 100}}
              </div>
              <div class="picBox">
                ￥{{picFn(item).marketPrice / 100}}
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>

  </div>
</template>

<script>
import { XImg } from 'vux'
export default {
  name: 'waterfallDynamic',
  props: ['data'],
  components: {
    XImg
  },
  data () {
    return {
      col: 2
    }
  },
  methods: {
    retData (data) {
      let res
      if (data.goods) {
        res = data.goods
      }
      return res
    },
    picFn (data) {
      let pic
      if (data.products) {
        pic = data.products[0]
      }
      return pic
    },
    goodsShow (data) {
      this.$emit('goodsShow', data)
    }
  }
}
</script>

<style scoped lang="stylus">
  .cell-item
    background #fff
    border-radius 20px
    margin 0 10px 15px 20px
    padding-bottom 30px
    .imgBox
      padding-top 30px
      width 86%
      margin 0 auto 20px
      img
        border-radius 20px
    .info
      padding 0 25px 0 12px
      .type
        font-size 18px
        color: #fff
        margin-bottom 26px
        span
          padding 5px 12px
          background #fe283f
          border-radius 10px
    .title
      margin-bottom 25px
      h4
        font-size 20px;
        padding-bottom 6px
      p
        color: #7c7c7c
        font-size 24px;
    .pic
      display flex
      .pudatePic
        color #de1735
        font-size 30px
        font-weight 600
        margin-right 12px
      .picBox
        font-size 24px
        line-height 2
        text-decoration line-through
  .container-water-fall >>> .vue-waterfall-column:nth-child(3) .cell-item
    margin 0 20px 15px 10px
</style>
