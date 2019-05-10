<template>
    <div class="wrap">
      <div class="hy"><li><img src="../../assets/img/cashback1.png" alt=""></li></div>
      <div class="conversion">
        <p>1000美币 = 10元</p>
        <span>美币可用于商城购物抵现</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'cashback'
}
</script>

<style scoped lang="stylus">
.wrap
  width 100%
  overflow: hidden;
.hy
  /*background url("../../assets/img/cashback1.png") no-repeat*/
  /*background-size 100%*/
  width 100%
  height 240px
  margin-bottom 30px
.hy li img
  width 100%
.conversion
  text-align center
  padding-bottom 40px
.conversion p
  font-size 26px
  color #060606
  line-height 40px
.conversion span
  font-size 24px
  color #9f9f9f
</style>
