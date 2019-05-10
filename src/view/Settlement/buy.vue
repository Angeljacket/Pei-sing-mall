<template>
  <div class="buy vux-1px-t fox">
    <div></div>
    <div class="fox" style="height: 100%">
      <div class="left fox">
        <span class="msg">应付：</span>
        <span class="pic">￥{{pic}}</span>
      </div>
      <div class="right fox" @click="buyBtn">
        <span>支付</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buy',
  props: ['data'],
  computed: {
    pic () {
      let list = this.data.orderProductList
      let pic
      if (list) {
        pic = list.reduce((n, item) => n + item.retailPrice * item.productNumber / 100, 0)
      }
      return pic
    }
  },
  methods: {
    buyBtn () {
      let id = this.data.id
      let This = this
      // 先请求到accessToken，然后用accessToken值进行订单修改
      this.axios.post(`/XCXHomeShop/admin/login?account=admin&password=123456`)
        .then(function (res) {
          This.axios.post(`/XCXHomeShop/admin/order/update?id=${id}&orderStatus=20&accessToken=${res.data.data}`)
            .then(function (res) {
              // 购买成功后跳转到收货页
              // This.$router.replace({path: 'order', query: {p: 1}})
              // order?p=1
              console.log(res.data)
            })
            .catch(function (err) {
              if (err.response) {
                console.log(err.response)
              }
            })
        })
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        })
      console.log(this.data.orderSn)
    }
  }
}
</script>

<style scoped lang="stylus">
  .buy
    height 120px
    width 100%
    .left
      font-size 30px
      .msg
        color #000
      .pic
        color #ff3944
        font-weight 600
    .right
      width 250px
      height 100%
      background #1bad16
      text-align center
      justify-content center
      font-size 30px
      color #fff
      margin-left 27px
  .fox
    display flex
    justify-content space-between
    align-items center
</style>
