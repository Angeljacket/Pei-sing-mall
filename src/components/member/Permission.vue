<template>
      <div class="wrap">
        <div class="qs">
          <ul>
            <li>
              <div class="i"><i class="iconfont icon-xiaohuoche"></i></div>
              <p class="nian">360/年</p>
              <p>免运费券</p>
              <p>畅购全年</p>
            </li>
            <li>
              <div class="i"><i class="iconfont icon-qianbi"></i></div>
              <p class="nian">100/年</p>
              <p>全场通用券</p>
              <p>任意折扣</p>
            </li>
            <li>
              <div class="i"><i class="iconfont icon-50"></i></div>
              <p class="nian">高佣返利</p>
              <p>10%-50%</p>
              <p>高额佣金</p>
            </li>
            <li>
              <div class="i"><i class="iconfont icon-M"></i></div>
              <p class="nian">10倍美币</p>
              <p>自购省钱</p>
              <p>10倍美币奖励</p>
            </li>
            <li>
              <div class="i"><i class="iconfont icon-dian"></i></div>
              <p class="nian">专属美妆店</p>
              <p>香港直邮</p>
              <p>全球采购</p>
            </li>
            <li>
              <div class="i"><i class="iconfont icon-nvxing"></i></div>
              <p class="nian">专属导师</p>
              <p>专属导师顾问</p>
              <p>优秀店主互助</p>
            </li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Permission'
}
</script>

<style scoped lang="stylus">
.qs
  width 100%
  padding-bottom 50px
  overflow hidden
  padding-top 30px
.qs ul li
  width 33.3333%
  height 200px
  float left
  text-align center
.qs ul li .i
  width 70px
  height 50px
  color #f5cb3a
  display contents
.qs ul li .i .iconfont
  font-size 50px
.qs ul li p
  color #aaaaaa
  font-size 20px
.qs ul li .nian
  color #2e2e30
  font-size 24px
  line-height 50px
</style>
