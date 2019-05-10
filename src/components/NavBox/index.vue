<template>
  <nav>
    <ul>
      <router-link
        tag="li"
        v-for="item of list"
        :key="item.name"
        :to="item.url"
        exact
      >
        <i class="iconfont" :class="item.icon"></i>
        <p>{{item.name}}</p>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      list: [
        {icon: 'icon-xiazai45', name: '首页', url: '/'},
        {icon: 'icon-dianpu', name: '特卖', url: '/home'},
        {icon: 'icon-huiyuan', name: '会员', url: '/vip'},
        {icon: 'icon-gouwudai', name: '购物袋', url: '/car'},
        {icon: 'icon-wode2', name: '我的', url: '/user'}
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  nav
    height 87px
    padding 10px 0
    background #fff
    ul
      display flex
      height 100%
      justify-content space-around
      align-items center
      li
        font-size 24px
        line-height 1.3
        text-align center
        i
          font-size 33px
      li.is_show
        color #fd2851
</style>
