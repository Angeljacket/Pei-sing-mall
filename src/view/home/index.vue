<template>
  <div class="home">
    <div class="banner">
      <!--banner-->
      <banner-box></banner-box>
    </div>
    <div class="search">
      <!--搜索-->
      <div class="searchBox"></div>
    </div>
    <div class="homenav">
      <!--商城导航-->
      <home-nav></home-nav>
    </div>
    <main>
      <div class="bannerOne">
        <!--主要内容的banner(一个)-->
        <div class="bannerOne">
          <img src="http://120.78.175.25/material/banner/banner1.jpg" alt="">
        </div>
      </div>
      <div class="bannerList">
        <!--主要内容的广告图片-->
        <main-banner-list></main-banner-list>
      </div>
    </main>
  </div>
</template>

<script>
import bannerBox from './banner'
import HomeNav from './HomeNav'
import mainBannerList from './mainBannerList'
export default {
  name: 'index',
  components: {
    bannerBox,
    HomeNav,
    mainBannerList
  }
}
</script>

<style scoped lang="stylus">
  .home .banner
    margin-bottom 36px
  .home .search
    padding 0 32px
    margin-bottom 54px
  .home .search .searchBox
    width 100%
    height 64px
    background #f7f7f7
    border-radius 40px
  .home .homenav
    padding-bottom 10px
    border-bottom 20px solid #edf1f3
  .home main
    padding 46px 18px 0
    .bannerOne
      width 100%
      height 170px
      border-radius 10px
      overflow: hidden
      margin-bottom 46px
</style>
