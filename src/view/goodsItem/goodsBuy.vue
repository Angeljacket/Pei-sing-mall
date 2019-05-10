<template>
  <div class="goodsBuy vux-1px-t">
    <div class="car" @click="carList">
      <div class="icon">
        <i class="iconfont icon-gouwudai"></i>
      </div>
      <div class="leng" v-show="leng">{{leng}}</div>
      <p>购物袋</p>
    </div>
    <div class="BtmBox" @click="ck">
      <div class="pudaCar">
        加入购物袋
      </div>
      <div class="BuyBtn">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsBuy',
  methods: {
    ck () {
      this.$emit('goodsBuy')
    },
    carList () {
      this.$router.replace('/car')
    }
  },
  computed: {
    leng () {
      return this.$store.state.carList.length
    }
  }
}
</script>

<style scoped lang="stylus">
  .goodsBuy
    width 100%
    height 100px
    background #fff
    padding 0 30px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    .car
      text-align center
      position: relative
      .icon
        i
          font-size 40px
      .leng
        position: absolute
        top 0
        right -10px
        width 40px
        height 40px
        background #fe4956
        border-radius 50%
        color: #fff
    .BtmBox
      width 420px
      height 68px
      display flex
      border-radius 50px
      overflow hidden
      color: #fff
      text-align center
      line-height 2.5
      font-size: 28px;
      .pudaCar
        width 50%
        height 100%
        background-color #fc9c45
      .BuyBtn
        width 50%
        height 100%
        background-color #fe4956
</style>
