<template>
  <div class="mainBannerList">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mainBannerList'
}
</script>

<style scoped lang="stylus">
  .mainBannerList
    width 100%
    height 390px
  .mainBannerList ul
    overflow: hidden;
    height 100%
    li
      float: left
    li:nth-child(1)
      width 280px
      height 100%
      background #9ac0ee
    li:nth-child(2)
      width calc(100% - 280px)
      height calc(50% - 1px)
      background #55a532
      border-bottom 1px solid #eeeeee
    li:nth-child(3)
      width calc(100% - 498px)
      height 172px
      background #55a532
      height 50%
      border-right 1px solid #eeeeee
    li:nth-child(4)
      width calc(100% - 497px)
      height 172px
      background #55a532
      height 50%
</style>
