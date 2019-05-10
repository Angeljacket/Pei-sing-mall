<template>
    <div class="wrap">
      <div class="fx">
        <ul>
          <li><img src="../../assets/img/coupon1.png" alt=""></li>
          <li><img src="../../assets/img/coupon2.png" alt=""></li>
          <li><img src="../../assets/img/coupon3.png" alt=""></li>
          <li><img src="../../assets/img/coupon4.png" alt=""></li>
        </ul>
      </div>
      <div class="zx">
        <p>注：每月<span>100元</span>额度仅当月有效</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'coupon'
}
</script>

<style scoped lang="stylus">
.fx
  width 100%
  height 390px
  margin-bottom 30px
  margin-top 50px
.fx ul
  margin-left 53px
.fx ul li
  width 300px
  height 172px
  text-align center
  padding 0 15px 19px 0
  float left
.fx ul li img
  width 100%
.zx
  padding-bottom 40px
.zx p
  text-align center
  color #a0a0a0
  font-size 24px
.zx span
  color #161616
  font-size 24px
</style>
