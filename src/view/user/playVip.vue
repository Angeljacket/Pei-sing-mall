<template>
  <div class="playVip">
    <div class="title">
      <h3>选择任意礼包成为VIP</h3>
      <p>开通立即获得优惠大礼包以及VIP专属权限~~</p>
    </div>
    <div class="icon"></div>
  </div>
</template>

<script>
export default {
  name: 'playVip'
}
</script>

<style scoped lang="stylus">
  .playVip
    display flex
    justify-content space-between
    align-items center
    padding 40px 32px
   .title
     font-size 26px
     color #959595
    h3
      margin-bottom 26px
      color #1b1b1b
    .icon
      width 34px
      height 34px
      background-image url("../../assets/img/userPlayVip.png")
      background-size cover
</style>
