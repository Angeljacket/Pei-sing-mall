<template>
  <div class="goodsCountdown">
    <div class="picInfo">
      <div class="pic">
        <span>￥</span>{{products.retailPrice / 100}}
      </div>
      <div class="info">
        <p>
          <span>已售{{res.saleCount}}件</span>
          <span style="text-decoration: line-through;">￥{{products.marketPrice / 100}}</span>
        </p>
        <div class="infoType">
          限时抢购特供
        </div>
      </div>
    </div>
    <div class="Time">
      <div class="TimeShow">
        <div class="timeTitle">
          限时抢购
        </div>
        <div class="time">
          <div class="timeBox">
            <div>{{day}}</div>
            <span>天</span>
            <div>{{hours}}</div>
            <span>时</span>
            <div>{{min}}</div>
            <span>分</span>
            <div>{{s}}</div>
            <span>秒</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsCountdown',
  props: ['data'],
  data () {
    return {
      day: '0',
      hours: '0',
      min: '0',
      s: '0',
      Time: ''
    }
  },
  computed: {
    // 筛选出商品主要内容
    res () {
      let data
      if (this.data.goods) {
        data = this.data.goods
      }
      return data || {}
    },
    // 筛选价钱数据
    products () {
      let pic
      if (this.data.products) {
        if (this.data.products[0]) {
          pic = this.data.products[0]
        }
      }
      return pic
    }
  },
  watch: {
    data () {
      let This = this
      let sta = this.res.activityStartTime
      function TimeDown (StartDate, endDate) {
        sta += 1000
        // console.log(sta)
        // 当前时间
        let nowDate = new Date(sta)
        // 结束时间
        let endDate2 = new Date(endDate)
        // 相差的总秒数
        let totalSeconds = parseInt((endDate2 - nowDate) / 1000)
        // 天数
        let days = Math.floor(totalSeconds / (60 * 60 * 24))
        // 取模（余数）
        let modulo = totalSeconds % (60 * 60 * 24)
        // 小时数
        let hours = Math.floor(modulo / (60 * 60))
        modulo = modulo % (60 * 60)
        // 分钟
        let minutes = Math.floor(modulo / 60)
        // 秒
        let seconds = modulo % 60
        // 输出到页面
        This.day = days
        This.hours = hours
        This.min = minutes
        This.s = seconds
        // console.log('还剩:' + days + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒')
        // 延迟一秒执行自己
        This.Time = setTimeout(function () {
          TimeDown(nowDate, endDate2)
        }, 1000)
      }
      TimeDown(this.res.activityStartTime, this.res.activityEndTime)
    }
  },
  destroyed () {
    clearTimeout(this.Time)
  }
}
</script>

<style scoped lang="stylus">
  .goodsCountdown
    height 100px
    background #f71d4a
    padding-left 20px
    position relative
    .picInfo
      display flex
      height 100%
      .pic
        height 100%
        font-size 44px;
        line-height 2.3
        color #fff
        margin-right 15px
        span
          font-size 28px;
    .info
      display flex
      flex-direction: column
      padding-top 5px
      width 400px
      justify-content space-around
      font-size 26px
      color #fff
      p
        display block
        width 100%
      .infoType
        width max-content
        padding 4px 10px
        background #d41a3f
        border-radius 10px
        font-size 24px
    .Time
      position absolute
      top 0
      right 0
      width 304px
      height 100%
      background-image url("../../assets/img/timeBg.png")
      background-position center
      background-size cover
      .TimeShow
        /*display flex*/
        /*flex-direction: column*/
        /*justify-content space-around*/
        .timeTitle
          text-align center
          color #de0431
          line-height 1.8
          font-size 28px
        .time
          display flex
          font-size 30px
          span
            line-height 1
            margin 0 8px
          .timeBox
            display flex
            margin 0 0 0 auto
            font-size 12px
            div
              height:34px
              padding 0 8px
              background #5a3513
              align-items center
              font-size 24px
              color #fff
              text-align center
              line-height 1.4
              transform: scale(.9)
            span
              font-size 24px
              margin 0
              line-height 1.4
              text-align center
              transform: scale(.9)
</style>
