<template>
    <div class="wrap">
      <div class="spree">
        <ul>
          <li><img src="../../assets/img/Spree1.png" alt=""></li>
          <li class="center"><img src="../../assets/img/Spree1.png" alt=""></li>
          <li><img src="../../assets/img/Spree1.png" alt=""></li>
        </ul>
      </div>
      <div class="fl">
        <ul>
          <li>
            <div class="icon"><i class="iconfont icon-50"></i></div>
            <p class="top">最低10%返佣</p>
            <p>自购或销售返佣</p>
          </li>
          <li>
            <div class="icon"><i class="iconfont icon-50"></i></div>
            <p class="top">最低10%返佣</p>
            <p>自购或销售返佣</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Spree'
}
</script>

<style scoped lang="stylus">
.spree
  width 694px
  margin 0 auto
  overflow hidden
  padding-top 20px
.spree ul li
  width 220px
  height 260px
  float left
.spree ul li img
  width 100%
.spree ul .center
    padding 0 17px
.fl
  width 694px
  margin 0 auto
  margin-top 30px
  margin-left 28px
  padding-bottom 30px
.fl ul li
  width 340px
  height 168px
  border 1px solid #e5e5e5
  float left
  /*border-radius 10px*/
.fl ul li:nth-child(1)
  margin-right 10px
.fl .iconfont
  font-size 50px
  color #f6cc3c
  line-height 80px
.fl .icon
  width 84px
  height 84px
  background #f6f2e9
  border-radius 50%
  text-align center
  float left
  margin  42px 20px 0 30px
.fl ul li .top
  margin-top 40px
  font-size 24px
  color #1e2134
  padding-bottom 12px
.fl ul li p
  font-size 18px
  color #878890
</style>
