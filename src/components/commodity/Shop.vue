<template>
    <div class="wrap">
      <div class="Img">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556022530912&di=985bed7a727327f1978e190eb0d83bd7&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F02%2F39%2F05%2F59c28e4959982_610.jpg" alt="">
      </div>
      <div class="cen">
        <p>phyto/发朵</p>
        <ul>
          <li>在售</li>
          <li>在售</li>
          <li>在售</li>
        </ul>
      </div>
      <div class="attention">关注</div>
    </div>
</template>

<script>
export default {
  name: 'Shop'
}
</script>

<style scoped lang="stylus">
.wrap
  padding-left 30px
  height 120px
.wrap .Img
  width 160px
  /*background red*/
  padding-right 30px
  float left
.wrap .cen
  float left
.wrap .cen p
  font-size 24px
  color #1b1b1b
  padding-top 20px
  /*display inline-table*/
  line-height 60px
.wrap .cen ul li
  float left
  padding-right 20px
  color #959595
  line-height 50px
.wrap .attention
  float right
  width 116px
  height 50px
  border 1px solid #9ea3a9
  border-radius 20px
  margin-right  18px
  margin-top  37px
  line-height 50px
  text-align center
  font-size 20px
  color #363636
</style>
