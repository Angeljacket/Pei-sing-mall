<template>
    <div class="wrap">
      <div class="yf">
        <li><img src="../../assets/img/freight.png" alt=""></li></div>
      <div class="hy">
        <p>唯美尊享会员<span>每月可获得3张运费劵</span>，一年总计可获得36张运费劵，</p>
        <p>用户下单结算时。可选择该优惠劵抵减运费</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'freight'
}
</script>

<style scoped lang="stylus">
  .yf
    width 100%
    height 330px
    margin-bottom 30px
    margin-top 50px
  .hy
    padding-bottom 50px
  .hy p
    line-height 48px
    font-size 20px
    color #8a8a8a
    text-align center
  .hy span
    font-size 22px
    color #121212
</style>
