<template>
  <div class="OrderNumber vux-1px-b">
    <div class="wrap">
      <div class="NumberOne Boxfix">
        <div class="Box1 Boxfix">
          <p>CNY</p>
          <h4>{{pic}}</h4>
        </div>
        <div class="Box">
          <x-icon type="ios-arrow-right" size="30"></x-icon>
        </div>
      </div>
      <div class="NumberTow Boxfix">
        <div class="Box1 Boxfix">
          <p class="bh font one-txt-cut">编号：{{Numbering}}</p>
          <p class="font">{{status}}</p>
        </div>
        <div class="date font">
          <span class="font">{{goodsDate}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderNumber',
  props: ['data', 'id'],
  computed: {
    pic () {
      return this.data.orderPrice / 100
    },
    goodsDate () {
      return this.data.createTime
    },
    Numbering () {
      return this.data.orderSn
    },
    status () {
      let id = this.id
      let list = [
        {id: 10, name: '未付款'},
        {id: 20, name: '待发货'},
        {id: 30, name: '待收货'},
        {id: 40, name: '已完成'},
        {id: 50, name: '取消'},
        {id: 60, name: '已完成'}
      ]
      let show
      list.forEach(el => {
        if (el.id === id) {
          show = el.name
        }
      })
      return show
    }
  }
}
</script>

<style scoped lang="stylus">
  .OrderNumber
    background #fff
    .wrap
      padding 32px 23px
      .NumberOne
        margin-bottom 26px
        p
          font-size: 28px;
          margin-right 15px
        h4
          font-size 34px;
      .NumberTow
        .Box1
          color: #434343
          font-size 24px;
          .bh
            margin-right 25px
  .Boxfix
    display flex
    justify-content space-between
    align-items center
    font-size: 20px
  .bh
    width 300px
</style>
