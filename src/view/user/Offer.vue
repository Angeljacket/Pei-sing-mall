<template>
  <div class="Offer">
    <div class="offers">
      <div class="Title">
        <h3>店铺红包</h3>
        <p>分享越多，红包越多</p>
      </div>
      <div class="icon hb"></div>
    </div>
    <div class="offers">
      <div class="Title">
        <h3>店铺红包</h3>
        <p>分享越多，红包越多</p>
      </div>
      <div class="icon yhq"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer'
}
</script>

<style scoped lang="stylus">
  .Offer
    padding 0 32px
    display flex
    justify-content space-between
    .offers
      width 50%
      display flex
      justify-content space-around
      align-items center
      font-size 24px
      padding 40px 0
      h3
        color #1b1b1b
        font-weight 400
        margin-bottom 10px
      p
        color #a0a0a0
      .icon
        width 50px
        height 50px
        border-radius 50%
        overflow hidden
        background-size 100%
      .hb
        background-image url("../../assets/img/offer1.png")
      .yhq
        background-image url("../../assets/img/offer2.png")
</style>
